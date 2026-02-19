import Link from "next/link";
import WaveSeparator from "@/components/WaveSeperator";
import Image from "next/image";

/* ─── Shared Types ─── */
interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Stat {
  value: string;
  label: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/* ─── Data ─── */
const services: ServiceCard[] = [
  {
    title: "Primary Care",
    description:
      "Comprehensive medical care for adults and children, including preventive exams, chronic disease management, and acute care visits.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    title: "Behavioral Health",
    description:
      "Mental health counseling, substance use support, and psychiatric services integrated with your primary care team.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
        />
      </svg>
    ),
  },
  {
    title: "Dental Care",
    description:
      "Preventive and restorative dental services for the whole family, including cleanings, fillings, and oral health education.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
  },
  {
    title: "Pharmacy Services",
    description:
      "On-site pharmacy with affordable medications, prescription assistance programs, and medication counseling.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
];

const stats: Stat[] = [
  { value: "25,000+", label: "Patients Served Annually" },
  { value: "15+", label: "Years of Service" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "50+", label: "Healthcare Professionals" },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Compassionate Palm changed my life. I finally have a healthcare team that truly listens and cares about my well-being. I never felt judged, only supported.",
    name: "Maria G.",
    role: "Patient since 2019",
  },
  {
    quote:
      "The staff here treats you like family. From the front desk to the doctor, everyone goes above and beyond. I recommend them to everyone in my community.",
    name: "James T.",
    role: "Patient since 2021",
  },
  {
    quote:
      "I was uninsured and didn't know where to turn. Compassionate Palm helped me get the care I needed with a sliding-fee scale. I'm so grateful.",
    name: "Aisha R.",
    role: "Patient since 2022",
  },
];

const steps = [
  {
    number: "1",
    title: "Call or Walk In",
    description:
      "Contact us by phone at (555) 123-4567 or visit any of our locations. No referral needed.",
  },
  {
    number: "2",
    title: "Complete Your Intake",
    description:
      "Our team will help you with paperwork, insurance verification, and sliding-fee eligibility.",
  },
  {
    number: "3",
    title: "See Your Provider",
    description:
      "Meet with a compassionate healthcare provider who will create a personalized care plan for you.",
  },
];

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-cream/60 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid min-h-[600px] items-center gap-16 py-10 lg:grid-cols-2 lg:py-28">
            <div>
              <p className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-accent italic text-primary tracking-wide">
                Compassionate care. Stronger community.
              </p>
              <h1 className="text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl tracking-wide">
                Quality Healthcare for{" "}
                <span className="text-primary font-accent leading-1.5 tracking-normal relative">
                  Everyone
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-accent/40"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M1 8c30-6 60-6 99-2s70 4 99-2"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-charcoal">
                We provide affordable, high-quality medical, dental, and
                behavioral health services to our community — regardless of your
                ability to pay.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/patients"
                  className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                >
                  Get Care
                </Link>
                <Link
                  href="/donate"
                  className="rounded-full border border-primary px-8 py-3.5 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25"
                >
                  Support Our Mission
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full">
                <div className="relative h-80 w-full overflow-hidden rounded-4xl lg:h-100 border border-black/5 shadow-xl shadow-black/10">
                  <Image
                    src="/heropalmhc.png"
                    alt="Compassionate Palm Health Care"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-wide font-accent heading-accent">
              What We Do
            </h2>
            <p className="mt-5 text-lg text-charcoal">
              Comprehensive, integrated healthcare services designed to meet the
              needs of our entire community.
            </p>
          </div>
          <div className="grid gap-px bg-sand/60 sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden border border-sand/60">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-10 card-hover cursor-default"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-black tracking-wide">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors text-sm tracking-wide mb-8"
            >
              View All Services
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
        </div>
      </section>

      {/* ── Who We Serve ── */}
      <section className="relative bg-cream/60 pt-20 pb-16 lg:pt-20 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-wide font-accent heading-accent">
              Who We Serve
            </h2>
            <p className="mt-5 text-lg text-charcoal">
              Our doors are open to everyone. We proudly serve patients, partner
              with providers, and strengthen our community.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Patients",
                desc: "Whether you're insured, uninsured, or underinsured, we're here for you. We offer a sliding-fee scale to make care affordable.",
                cta: "Become a Patient",
                href: "/patients",
              },
              {
                title: "Providers",
                desc: "Partner with us to extend your reach. We welcome referrals and collaborate with providers across the region.",
                cta: "Partner With Us",
                href: "/providers",
              },
              {
                title: "Community",
                desc: "We invest in community health through outreach programs, health education, and wellness events throughout the year.",
                cta: "Get Involved",
                href: "/donate",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-sand/80 bg-white p-10 card-hover"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary text-base font-bold font-accent">
                  {item.title[0]}
                </div>
                <h3 className="text-xl font-semibold text-black tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal">
                  {item.desc}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  {item.cta}
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
        <WaveSeparator position="top" colorClassName="text-cream/60" />
      </section>

      {/* ── How to Get Care ── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-wide font-accent heading-accent">
              How to Get Care
            </h2>
            <p className="mt-5 text-lg text-charcoal">
              Getting started is simple. We&apos;ve made it easy for you to
              access the care you need.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] border-t border-dashed border-sand" />
                )}
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white text-xl font-bold relative z-10 shadow-md shadow-primary/20">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-black tracking-wide">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center mb-14">
            <Link
              href="/patients"
              className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
            >
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ── Locations & Hours ── */}

      <section className="relative bg-primary-dark text-white pt-20 pb-16 lg:pt-16 lg:pb-20">
        <WaveSeparator position="top" colorClassName="text-primary-dark" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl tracking-wide font-accent">
              Locations &amp; Hours
            </h2>
            <p className="mt-5 text-lg text-white/70 font-accent italic">
              Convenient locations to serve you and your family.
            </p>
          </div>
          <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden">
            {[
              {
                name: "Main Campus",
                address:
                  "1234 Palm Avenue, Suite 100\nWest Palm Beach, FL 33401",
                hours: "Mon–Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM",
                phone: "(555) 123-4567",
              },
              {
                name: "Northside Clinic",
                address: "5678 Community Drive\nRiviera Beach, FL 33404",
                hours: "Mon–Fri: 8:30 AM – 5:00 PM",
                phone: "(555) 234-5678",
              },
              {
                name: "Southside Family Center",
                address: "9012 Wellness Way\nLake Worth, FL 33460",
                hours: "Mon–Fri: 9:00 AM – 5:30 PM\nSat: 9:00 AM – 12:00 PM",
                phone: "(555) 345-6789",
              },
            ].map((loc) => (
              <div key={loc.name} className="bg-primary-dark p-10">
                <h3 className="text-lg font-semibold mb-5 tracking-wide">
                  {loc.name}
                </h3>
                <div className="space-y-4 text-sm text-white/70">
                  <p className="flex items-start gap-3">
                    <svg
                      className="h-4 w-4 mt-0.5 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z"
                      />
                    </svg>
                    <span className="whitespace-pre-line">{loc.address}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <svg
                      className="h-4 w-4 mt-0.5 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="whitespace-pre-line">{loc.hours}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <svg
                      className="h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    {loc.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Stats ── */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream/40 via-white to-accent/5" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-wide font-accent heading-accent">
              Our Impact
            </h2>
            <p className="mt-5 text-lg text-charcoal">
              For over a decade, we&apos;ve been making a difference in the
              lives of our neighbors.
            </p>
          </div>
          <div className="grid gap-px bg-sand/60 sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden border border-sand/60">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white text-center py-12 px-6 stat-hover"
              >
                <p className="text-4xl font-bold text-primary lg:text-5xl font-display">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-charcoal tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="hairline mx-auto max-w-7xl" />

      {/* ── Testimonials ── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-wide font-accent heading-accent">
              What Our Patients Say
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-sand bg-white p-10 testimonial-bar card-hover"
              >
                <svg
                  className="h-6 w-6 text-accent/60 mb-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <p className="text-base leading-relaxed text-charcoal font-accent italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 border-t border-sand pt-5">
                  <p className="font-semibold text-black text-sm tracking-wide">
                    {t.name}
                  </p>
                  <p className="text-xs text-charcoal mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="py-14 lg:py-18 bg-cream/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-12">
            Our Community Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {[
              "Partner Hospital",
              "Community Foundation",
              "County Health Dept",
              "University Health",
              "United Way",
            ].map((name) => (
              <div
                key={name}
                className="flex h-14 w-36 items-center justify-center rounded border border-sand bg-white text-xs text-gray-400"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark py-14 lg:py-18 overflow-hidden">
        <div className="blob-shape absolute -top-20 -right-20 h-72 w-72 bg-white/5 blur-xl" />
        <div className="blob-shape absolute -bottom-16 -left-16 h-56 w-56 bg-accent/10 blur-xl" />
        <div className="mx-auto max-w-4xl px-4 text-center text-white relative">
          <h2 className="text-3xl font-bold sm:text-4xl tracking-wide font-accent">
            Ready to Get Started?
          </h2>
          <p className="mt-5 text-lg text-white/70 font-accent italic">
            Everyone deserves access to quality healthcare. Let us help you and
            your family.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/patients"
              className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-primary transition-all hover:bg-cream hover:shadow-lg hover:shadow-black/10"
            >
              Get Care Today
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
