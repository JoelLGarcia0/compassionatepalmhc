import WaveSeparator from "@/components/WaveSeperator";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate | Compassionate Palm Health Care",
  description:
    "Support Compassionate Palm Health Care with a donation. Your generosity helps us provide quality healthcare to those who need it most.",
};

interface DonationTier {
  amount: string;
  label: string;
  description: string;
  highlight?: boolean;
}

const tiers: DonationTier[] = [
  {
    amount: "$25",
    label: "Supporter",
    description:
      "Covers a wellness screening for one patient, including blood pressure check and health assessment.",
  },
  {
    amount: "$50",
    label: "Advocate",
    description:
      "Provides a dental cleaning for an uninsured child, including oral health education and follow-up care.",
  },
  {
    amount: "$100",
    label: "Champion",
    description:
      "Funds a complete primary care visit for an uninsured patient, including lab work and prescriptions.",
    highlight: true,
  },
  {
    amount: "$250",
    label: "Partner",
    description:
      "Supports a month of behavioral health counseling sessions for a patient in need of mental health services.",
  },
  {
    amount: "$500",
    label: "Guardian",
    description:
      "Provides comprehensive prenatal care for an expectant mother, including all visits and screenings.",
  },
  {
    amount: "Custom",
    label: "Your Choice",
    description:
      "Every dollar makes a difference. Choose an amount that's meaningful to you and your family.",
  },
];

const impactStats = [
  {
    value: "92%",
    label: "of patients live below 200% of the federal poverty level",
  },
  { value: "40%", label: "of our patients are uninsured" },
  { value: "$2.3M", label: "in uncompensated care provided last year" },
  { value: "100%", label: "of donations go directly to patient care programs" },
];

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream/60 py-20 lg:py-24 overflow-hidden">
        <div className="blob-shape absolute -top-20 -right-20 h-64 w-64 bg-primary/5 blur-2xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Support Our Mission
            </p>
            <h1 className="text-4xl font-bold text-black sm:text-5xl tracking-wide">
              Your Generosity Changes Lives
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-charcoal">
              Every donation helps us provide quality healthcare to families and
              individuals who need it most. Together, we can build a healthier,
              stronger community.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-12 bg-primary-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-primary-dark text-center py-10 px-6"
              >
                <p className="text-3xl font-bold lg:text-4xl font-display">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-16 lg:py-20 mb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-wide font-accent heading-accent">
              Choose Your Impact
            </h2>
            <p className="mt-5 text-lg text-charcoal">
              See how your donation directly supports patient care in our
              community.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className={`rounded-xl p-10 transition-all card-hover ${
                  tier.highlight
                    ? "bg-gradient-to-br from-primary via-primary to-primary-dark text-white ring-2 ring-primary ring-offset-4"
                    : "border border-sand bg-white"
                }`}
              >
                <p
                  className={`text-3xl font-bold font-display ${tier.highlight ? "text-white" : "text-primary"}`}
                >
                  {tier.amount}
                </p>
                <p
                  className={`mt-1 text-xs font-semibold uppercase tracking-[0.15em] ${tier.highlight ? "text-white/60" : "text-accent"}`}
                >
                  {tier.label}
                </p>
                <p
                  className={`mt-5 text-sm leading-relaxed ${tier.highlight ? "text-white/80" : "text-charcoal"}`}
                >
                  {tier.description}
                </p>
                <button
                  type="button"
                  className={`mt-8 w-full rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                    tier.highlight
                      ? "bg-white text-primary hover:bg-cream hover:shadow-lg hover:shadow-black/10"
                      : "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                  }`}
                >
                  Donate {tier.amount}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="relative bg-cream/60 pt-14 pb-16 lg:pt-12 lg:pb-20">
        <WaveSeparator position="top" colorClassName="text-cream/60" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-wide font-accent heading-accent">
              Other Ways to Give
            </h2>
            <p className="mt-5 text-lg text-charcoal">
              There are many ways to support our mission beyond financial
              contributions.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Planned Giving",
                description:
                  "Include Compassionate Palm in your estate plan to create a lasting legacy of health and compassion for future generations.",
              },
              {
                title: "Volunteer",
                description:
                  "Share your time and talents. We welcome volunteers in clinical, administrative, and community outreach roles.",
              },
              {
                title: "Corporate Partnership",
                description:
                  "Align your brand with community health. We offer sponsorship opportunities and workplace giving programs.",
              },
            ].map((way) => (
              <div
                key={way.title}
                className="rounded-xl border border-sand/80 bg-white p-10 card-hover testimonial-bar"
              >
                <h3 className="text-lg font-semibold text-black tracking-wide">
                  {way.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal">
                  {way.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Learn More
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark py-16 lg:py-20 overflow-hidden">
        <div className="blob-shape absolute -top-20 -right-20 h-72 w-72 bg-white/5 blur-xl" />
        <div className="blob-shape absolute -bottom-16 -left-16 h-56 w-56 bg-accent/10 blur-xl" />
        <div className="mx-auto max-w-4xl px-4 text-center text-white relative">
          <h2 className="text-3xl font-bold sm:text-4xl tracking-wide font-accent">
            Every Dollar Makes a Difference
          </h2>
          <p className="mt-5 text-lg text-white/70 font-accent italic">
            Your contribution directly supports healthcare services for families
            in need.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-primary transition-all hover:bg-cream hover:shadow-lg hover:shadow-black/10"
            >
              Contact Us About Giving
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
