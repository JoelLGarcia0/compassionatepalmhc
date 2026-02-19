"use client";

import { useState } from "react";
import Link from "next/link";
import WaveSeparator from "@/components/WaveSeperator";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Do I need insurance to receive care?",
    answer:
      "No. We welcome all patients regardless of insurance status. We accept most insurance plans, Medicaid, Medicare, and offer a sliding-fee scale for uninsured patients based on income and family size.",
  },
  {
    question: "What is the sliding-fee scale?",
    answer:
      "Our sliding-fee scale reduces the cost of your visit based on your household income and family size. You may qualify for reduced fees or even no-cost care. Bring proof of income and household size to your first visit.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can call us at (555) 123-4567, visit any of our locations in person, or fill out the contact form on our website. Walk-ins are also welcome, though appointments are recommended.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Please bring a valid photo ID, insurance card (if applicable), proof of income (for sliding-fee eligibility), a list of current medications, and any relevant medical records.",
  },
  {
    question: "Do you offer telehealth visits?",
    answer:
      "Yes! We offer telehealth appointments for primary care, behavioral health, and certain follow-up visits. Ask our scheduling team about telehealth options when you call.",
  },
  {
    question: "What languages do you offer services in?",
    answer:
      "We provide services in English, Spanish, and Creole. We also have access to interpreter services for additional languages to ensure every patient can communicate comfortably.",
  },
  {
    question: "Can I get same-day care for urgent needs?",
    answer:
      "Yes. We reserve appointment slots each day for urgent medical needs. Call us as early as possible and let our team know you need same-day care. For emergencies, please call 911.",
  },
];

const eligibility = [
  "Open to all individuals and families, regardless of insurance status",
  "Sliding-fee scale available based on income and household size",
  "We accept Medicaid, Medicare, and most private insurance plans",
  "No one is turned away for inability to pay",
  "Special programs for uninsured and underinsured patients",
];

function AccordionItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-sand/60">
      <button
        type="button"
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-black pr-4 tracking-wide">
          {faq.question}
        </span>
        <svg
          className={`h-4 w-4 shrink-0 text-accent transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-sm leading-relaxed text-charcoal">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function PatientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream/60 py-20 lg:py-24 overflow-hidden">
        <div className="blob-shape absolute -top-20 -right-20 h-64 w-64 bg-primary/5 blur-2xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              For Patients
            </p>
            <h1 className="text-4xl font-bold text-black sm:text-5xl tracking-wide">
              Your Health, Our Priority
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-charcoal">
              Whether you&apos;re a new or returning patient, we make it easy to
              access the care you need. Learn about eligibility, scheduling, and
              what to expect.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
              >
                Schedule an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 lg:py-20 mb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-wide font-accent heading-accent">
                Eligibility &amp; Access
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-charcoal">
                We believe healthcare is a right. Our services are open to
                everyone in the community.
              </p>
              <ul className="mt-10 space-y-5">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-3">
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
                    <span className="text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full">
                <div className="relative flex h-72 w-full items-center justify-center rounded-2xl bg-gray-200 text-gray-400 text-sm font-medium">
                  Patient Photo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Schedule */}
      <section className="relative bg-cream/60 pt-14 pb-16 lg:pt-14 lg:pb-20">
        <WaveSeparator position="top" colorClassName="text-cream/60" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-wide font-accent heading-accent">
              How to Schedule
            </h2>
            <p className="mt-5 text-lg text-charcoal">
              Three easy ways to book your appointment.
            </p>
          </div>
          <div className="grid gap-px bg-sand/60 md:grid-cols-3 rounded-xl overflow-hidden border border-sand/60">
            {[
              {
                title: "Call Us",
                desc: "Call (555) 123-4567 during business hours. Our friendly scheduling team will help you find a convenient time.",
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                ),
              },
              {
                title: "Walk In",
                desc: "Visit any of our locations during business hours. Walk-ins are always welcome, though wait times may vary.",
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Online",
                desc: "Fill out our contact form and a member of our team will reach out within one business day to schedule your visit.",
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
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                ),
              },
            ].map((method) => (
              <div
                key={method.title}
                className="bg-white p-10 text-center card-hover cursor-default"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-black tracking-wide">
                  {method.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal">
                  {method.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-wide font-accent heading-accent">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 text-lg text-charcoal">
              Find answers to common questions about our services.
            </p>
          </div>
          <div className="border-t border-sand/60">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
