import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Compassionate Palm Health Care",
  description:
    "Explore our healthcare services including PrEP, mental health, substance use treatment, and weight loss programs at Compassionate Palm Health Care in Miami.",
};

interface Service {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "PrEP Services",
    description:
      "Preventive care and treatment focused on reducing the risk of HIV transmission. Our team provides education, screening, and ongoing support to help keep you protected.",
    details: [
      "HIV risk assessment and counseling",
      "PrEP medication prescribing and management",
      "Regular monitoring and follow-up testing",
      "Confidential and judgment-free care",
      /* TODO: Add more detailed PrEP service specifics from client */
    ],
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
  {
    title: "Mental Health",
    description:
      "Support for emotional and psychological well-being through compassionate, patient-centered care. We offer a safe environment where individuals can receive the help they need.",
    details: [
      "Individual counseling and therapy",
      "Psychiatric evaluations",
      "Medication management",
      "Trauma-informed care approaches",
      /* TODO: Add more detailed mental health service specifics from client */
    ],
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
    title: "Alcohol & Drug Addiction",
    description:
      "Treatment and recovery support for individuals facing substance use challenges. Our compassionate team provides personalized care to help patients achieve lasting recovery.",
    details: [
      "Substance use disorder assessment",
      "Individualized treatment planning",
      "Counseling and behavioral therapy",
      "Relapse prevention support",
      /* TODO: Add more detailed addiction service specifics from client */
    ],
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
    title: "Weight Loss",
    description:
      "Personalized programs designed to support healthy and sustainable weight management. We combine medical guidance with lifestyle counseling to help you reach your goals.",
    details: [
      "Comprehensive health and weight assessment",
      "Personalized weight management plans",
      "Nutritional guidance and lifestyle counseling",
      "Ongoing monitoring and support",
      /* TODO: Add more detailed weight loss service specifics from client */
    ],
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
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream/60 py-20 lg:py-24 overflow-hidden">
        <div className="blob-shape absolute -top-20 -right-20 h-64 w-64 bg-primary/5 blur-2xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Services
            </p>
            <h1 className="text-4xl font-bold text-black sm:text-5xl tracking-wide">
              Comprehensive Care for Your Well-Being
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-charcoal">
              From preventive care to mental health support, substance use
              treatment to weight management — we offer integrated healthcare
              services designed to meet your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {services.map((service, i) => (
              <div key={service.title}>
                {i > 0 && <hr className="hairline my-14" />}
                <div className="grid gap-16 items-center lg:grid-cols-2">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-black sm:text-3xl tracking-wide font-accent">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg leading-relaxed text-charcoal mb-8">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-3 text-sm text-charcoal"
                        >
                          <svg
                            className="h-5 w-5 shrink-0 text-accent mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative w-full">
                      <div className="blob-shape absolute -inset-3 bg-gradient-to-br from-primary/5 to-accent/5 blur-sm" />
                      {/* TODO: Replace with real service photos from client */}
                      <div className="relative flex h-64 w-full items-center justify-center rounded-2xl bg-gray-200 text-gray-400 text-sm font-medium lg:h-80">
                        {service.title} Photo
                      </div>
                    </div>
                  </div>
                </div>
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
          {/* TODO: Final CTA wording from client */}
          <h2 className="text-3xl font-bold sm:text-4xl tracking-wide font-accent">
            Ready to Take the Next Step?
          </h2>
          <p className="mt-5 text-lg text-white/70 font-accent italic">
            Our team is ready to help. Reach out today to learn more about our
            services or schedule a visit.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-primary transition-all hover:bg-cream hover:shadow-lg hover:shadow-black/10"
            >
              Contact Us
            </Link>
            <Link
              href="/patients"
              className="rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Become a Patient
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
