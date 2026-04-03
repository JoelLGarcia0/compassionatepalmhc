import WaveSeparator from "@/components/WaveSeperator";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Providers | Compassionate Palm Health Care",
  description:
    "Partner with Compassionate Palm Health Care. Learn about referral processes, partnership opportunities, and how we collaborate with providers.",
};

const benefits = [
  {
    title: "Integrated Care Model",
    description:
      "Our team-based approach ensures your patients receive coordinated care across medical, dental, behavioral health, and pharmacy services.",
  },
  {
    title: "Sliding-Fee Access",
    description:
      "Patients who may face financial barriers to specialty care can access affordable services through our sliding-fee scale and assistance programs.",
  },
  {
    title: "Care Coordination",
    description:
      "Our dedicated care coordinators follow up with referred patients, provide updates, and ensure continuity of care between your practice and ours.",
  },
  {
    title: "Community Health Focus",
    description:
      "We serve diverse populations with culturally competent, multilingual care — extending your reach into underserved communities.",
  },
];

const referralSteps = [
  {
    number: "1",
    title: "Submit a Referral",
    description:
      /* TODO: Confirm fax number and referral process with client */
      "Contact us to submit a referral. Reach out by phone at (305) 733-1669 or email at Contact@compassionatepalmhealthcare.com.",
  },
  {
    number: "2",
    title: "Patient Outreach",
    description:
      "Our intake team contacts the patient within 48 hours to schedule an appointment and verify eligibility.",
  },
  {
    number: "3",
    title: "Care & Follow-Up",
    description:
      "We provide the requested services and send a summary report back to the referring provider for continuity.",
  },
];

export default function ProvidersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream/60 py-20 lg:py-24 overflow-hidden">
        <div className="blob-shape absolute -top-20 -right-20 h-64 w-64 bg-primary/5 blur-2xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              For Providers
            </p>
            <h1 className="text-4xl font-bold text-black sm:text-5xl tracking-wide">
              Partner With Us
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-charcoal">
              We collaborate with healthcare providers across the region to
              ensure patients receive comprehensive, coordinated care. Learn how
              we can work together.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
              >
                Make a Referral
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-primary px-8 py-3.5 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 lg:py-20 mb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-wide font-accent heading-accent">
              Why Partner With Us
            </h2>
            <p className="mt-5 text-lg text-charcoal">
              When you refer patients to Compassionate Palm, you&apos;re
              connecting them with a trusted safety-net provider.
            </p>
          </div>
          <div className="grid gap-px bg-sand/60 sm:grid-cols-2 rounded-xl overflow-hidden border border-sand/60">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white p-10 card-hover cursor-default"
              >
                <h3 className="text-lg font-semibold text-black mb-4 tracking-wide">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Process */}
      <section className="relative bg-cream/60 pt-14 pb-16 lg:pt-12 lg:pb-20">
        <WaveSeparator position="top" colorClassName="text-cream/60" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-wide font-accent heading-accent">
              Referral Process
            </h2>
            <p className="mt-5 text-lg text-charcoal">
              Referring a patient is simple. Here&apos;s how it works.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {referralSteps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                {i < referralSteps.length - 1 && (
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
        </div>
      </section>

      {/* Referral Info */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-sand bg-white p-10 lg:p-16 card-hover">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold text-black sm:text-3xl tracking-wide font-accent">
                  Referral Information
                </h2>
                <div className="mt-8 space-y-6 text-charcoal">
                  <div>
                    {/* TODO: Confirm fax number and dedicated provider relations line with client */}
                    <p className="font-semibold text-black text-sm tracking-wide">
                      Phone:
                    </p>
                    <p className="text-sm mt-1">(305) 733-1669</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black text-sm tracking-wide">
                      Email:
                    </p>
                    <p className="text-sm mt-1">
                      Contact@compassionatepalmhealthcare.com
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-black text-sm tracking-wide">
                      What to Include:
                    </p>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">—</span>
                        Patient demographics and contact information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">—</span>
                        Insurance information (if applicable)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">—</span>
                        Reason for referral and clinical notes
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">—</span>
                        Relevant labs, imaging, or test results
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full">
                  <div className="relative flex h-64 w-full items-center justify-center rounded-2xl bg-gray-200 text-gray-400 text-sm font-medium">
                    Provider Partnership Photo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark py-16 lg:py-20 overflow-hidden">
        <div className="blob-shape absolute -top-20 -right-20 h-72 w-72 bg-white/5 blur-xl" />
        <div className="blob-shape absolute -bottom-16 -left-16 h-56 w-56 bg-accent/10 blur-xl" />
        <div className="mx-auto max-w-4xl px-4 text-center text-white relative">
          <h2 className="text-3xl font-bold sm:text-4xl tracking-wide font-accent">
            Let&apos;s Work Together
          </h2>
          <p className="mt-5 text-lg text-white/70 font-accent italic">
            Join our network of community partners dedicated to improving health
            outcomes for all.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-primary transition-all hover:bg-cream hover:shadow-lg hover:shadow-black/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
