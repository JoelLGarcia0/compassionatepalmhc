import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Compassionate Palm Health Care",
  description: "Explore our comprehensive healthcare services including primary care, behavioral health, dental, pharmacy, and more.",
};

interface Service {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Primary Care",
    description: "Comprehensive medical care for patients of all ages, focused on prevention, wellness, and chronic disease management.",
    details: [
      "Annual wellness exams and physicals",
      "Chronic disease management (diabetes, hypertension, asthma)",
      "Acute illness and injury treatment",
      "Immunizations and vaccinations",
      "Lab work and diagnostic testing",
      "Health screenings and preventive care",
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Behavioral Health",
    description: "Integrated mental health and substance use services to support your emotional and psychological well-being.",
    details: [
      "Individual and group therapy",
      "Psychiatric evaluations and medication management",
      "Substance use disorder treatment",
      "Crisis intervention",
      "Trauma-informed care",
      "Stress and anxiety management",
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: "Dental Care",
    description: "Complete dental services for the whole family, from routine cleanings to restorative procedures.",
    details: [
      "Dental exams and cleanings",
      "Fillings and restorations",
      "Tooth extractions",
      "Oral health education",
      "Pediatric dentistry",
      "Emergency dental care",
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Pharmacy Services",
    description: "Convenient on-site pharmacy with affordable medications and personalized counseling.",
    details: [
      "Prescription filling and refills",
      "Medication therapy management",
      "340B Drug Pricing Program access",
      "Patient assistance programs",
      "Medication counseling and education",
      "Over-the-counter health products",
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Women's Health",
    description: "Specialized healthcare services designed for women at every stage of life.",
    details: [
      "Well-woman exams",
      "Family planning and contraception",
      "Prenatal and postpartum care",
      "Breast and cervical cancer screenings",
      "Menopause management",
      "STI testing and treatment",
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Pediatric Care",
    description: "Dedicated care for infants, children, and adolescents to ensure healthy growth and development.",
    details: [
      "Well-child visits and growth monitoring",
      "Childhood immunizations",
      "School and sports physicals",
      "Developmental screenings",
      "Acute illness treatment",
      "Adolescent health services",
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
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
            <p className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Services</p>
            <h1 className="text-4xl font-bold text-black sm:text-5xl tracking-wide">
              Comprehensive Care Under One Roof
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-charcoal">
              From primary care to behavioral health, dental services to pharmacy — we offer a full spectrum of healthcare services to meet you and your family&apos;s needs.
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
                <div
                  className="grid gap-16 items-center lg:grid-cols-2"
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-black sm:text-3xl tracking-wide font-accent">{service.title}</h2>
                    </div>
                    <p className="text-lg leading-relaxed text-charcoal mb-8">{service.description}</p>
                    <ul className="space-y-3">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3 text-sm text-charcoal">
                          <svg className="h-5 w-5 shrink-0 text-accent mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative w-full">
                      <div className="blob-shape absolute -inset-3 bg-gradient-to-br from-primary/5 to-accent/5 blur-sm" />
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
          <h2 className="text-3xl font-bold sm:text-4xl tracking-wide font-accent">Need to Schedule an Appointment?</h2>
          <p className="mt-5 text-lg text-white/70 font-accent italic">
            Our team is ready to help. Call us or visit any of our locations to get started.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/patients"
              className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-primary transition-all hover:bg-cream hover:shadow-lg hover:shadow-black/10"
            >
              Become a Patient
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
