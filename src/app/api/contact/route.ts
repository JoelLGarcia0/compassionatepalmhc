import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Topic values come from the <select> on the contact page. */
const SUBJECT_LABELS: Record<string, string> = {
  appointment: "Schedule an Appointment",
  services: "Question About Services",
  billing: "Billing & Insurance",
  referral: "Provider Referral",
  other: "Other",
};

/** Caps so a single request can't carry an unbounded payload. */
const LIMITS = {
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 40,
  subject: 40,
  message: 5000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Best-effort throttle. Serverless instances are short-lived and not shared,
 * so this stops casual abuse and repeated double-submits, not a determined
 * attacker. Durable limiting needs an external store (Upstash, Vercel KV).
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Keep the map from growing without bound on a long-lived instance.
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

/** Submitted text lands inside an HTML email, so it has to be escaped. */
function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (rateLimited(ip)) {
      return json({ error: "Too many requests" }, 429);
    }

    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message, company } =
      body ?? {};

    // Honeypot: bots fill hidden fields. Accept and drop.
    if (typeof company === "string" && company.trim()) {
      return json({ ok: true }, 200);
    }

    const clean = (value: unknown, max: number) =>
      typeof value === "string" ? value.trim().slice(0, max) : "";

    const data = {
      firstName: clean(firstName, LIMITS.firstName),
      lastName: clean(lastName, LIMITS.lastName),
      email: clean(email, LIMITS.email),
      phone: clean(phone, LIMITS.phone),
      subject: clean(subject, LIMITS.subject),
      message: clean(message, LIMITS.message),
    };

    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return json({ error: "Missing required fields" }, 400);
    }
    if (!EMAIL_RE.test(data.email)) {
      return json({ error: "Invalid email address" }, 400);
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("[contact] RESEND_API_KEY is not set");
      return json({ error: "Email is not configured" }, 500);
    }

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      console.error("[contact] CONTACT_TO_EMAIL is not set");
      return json({ error: "Email is not configured" }, 500);
    }

    const fullName = `${data.firstName} ${data.lastName}`;
    const topic = SUBJECT_LABELS[data.subject] ?? data.subject;

    const details = [
      { label: "Name", value: fullName },
      { label: "Email", value: data.email },
      ...(data.phone ? [{ label: "Phone", value: data.phone }] : []),
      ...(topic ? [{ label: "Topic", value: topic }] : []),
    ];

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f1e8cc;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1e8cc;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
        <tr>
          <td style="background:#073f41;padding:32px 40px;text-align:center;">
            <h1 style="margin:0;color:#f1e8cc;font-size:22px;font-weight:400;letter-spacing:2px;">
              COMPASSIONATE PALM HEALTH CARE
            </h1>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 40px 16px;">
            <h2 style="margin:0;color:#0d585b;font-size:18px;font-weight:600;">
              ${escapeHtml(topic) || "New Contact Form Message"}
            </h2>
            <hr style="border:none;border-top:1px solid #e0dcd3;margin:16px 0 0;" />
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${details
                .map(
                  (d) => `
              <tr>
                <td style="padding:8px 0;color:#8a8a8a;font-size:13px;text-transform:uppercase;letter-spacing:1px;width:100px;vertical-align:top;">
                  ${escapeHtml(d.label)}
                </td>
                <td style="padding:8px 0;color:#3e3b3a;font-size:15px;">
                  ${escapeHtml(d.value)}
                </td>
              </tr>`,
                )
                .join("")}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px 32px;">
            <div style="background:#faf9f7;border-left:3px solid #b4794f;padding:20px 24px;border-radius:0 4px 4px 0;">
              <p style="margin:0 0 4px;color:#8a8a8a;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Message</p>
              <p style="margin:0;color:#3e3b3a;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background:#faf9f7;padding:20px 40px;text-align:center;border-top:1px solid #e0dcd3;">
            <p style="margin:0;color:#8a8a8a;font-size:12px;">
              Sent from the Compassionate Palm Health Care website contact form
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();

    const { error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        "Compassionate Palm Health Care <contact@restweb.dev>",
      to,
      replyTo: data.email,
      subject: topic ? `[CPHC Contact] ${topic}` : "[CPHC Contact] New message",
      html,
    });

    if (error) {
      console.error("[contact] Resend rejected the send:", error);
      return json({ error: "Failed to send" }, 502);
    }

    return json({ ok: true }, 200);
  } catch (err) {
    console.error("[contact] Unexpected failure:", err);
    return json({ error: "Failed to send" }, 500);
  }
}
