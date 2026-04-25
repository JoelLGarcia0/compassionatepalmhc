import type { Metadata } from "next";
import Image from "next/image";
import WaveSeparator from "@/components/WaveSeperator";

export const metadata: Metadata = {
  title: "About Us | Compassionate Palm Health Care",
  description:
    "Learn about the mission and values behind Compassionate Palm Health Care — an integrated, community-centered healthcare organization serving underserved populations in Miami.",
};

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

/* TODO: Replace placeholder core values with final approved values from client */
const values: Value[] = [
  {
    title: "Compassion",
    description:
      "We treat every patient with dignity, empathy, and respect — meeting people where they are.",
    icon: (
      <svg
        className="h-6 w-6"
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
    title: "Accessibility",
    description:
      "Healthcare is a right, not a privilege. We remove barriers so everyone can access the care they need.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest clinical standards, continuously improving the quality of our care.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "We are rooted in the communities we serve, building lasting partnerships that promote health and wellness.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream/60 py-20 lg:py-24 overflow-hidden">
        <div className="blob-shape absolute -top-20 -right-20 h-64 w-64 bg-primary/5 blur-2xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About Us
            </p>
            <h1 className="text-4xl font-bold text-black sm:text-5xl tracking-wide">
              Dedicated to Our Community&apos;s Health
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-charcoal">
              Compassionate Palm Health Care (CPHC) is an integrated,
              community-centered healthcare organization focused on improving
              access, quality, and continuity of care. We serve underserved and
              marginalized populations, including veterans, individuals
              experiencing homelessness, and economically disadvantaged
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-20 mb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-wide text-center font-accent heading-accent">
                Our Mission
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-charcoal">
                To improve the health and well-being of underserved communities
                by providing compassionate, integrated, and accessible care that
                addresses the physical, emotional, and social needs of every
                individual.
              </p>
              {/* TODO: Replace with full About Us story once provided by client */}
              <p className="mt-5 text-lg leading-relaxed text-charcoal">
                At CPHC, we believe that quality healthcare should be available
                to everyone regardless of background or circumstance. Our
                integrated approach combines medical services, mental health
                support, and preventive care to deliver comprehensive solutions
                that uplift our community and foster lasting well-being.
              </p>
              <p className="mt-8 text-base font-accent italic text-accent">
                We believe that healthcare is a right, and we work tirelessly to
                make that belief a reality.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full">
                <div className="relative h-72 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/mission.png"
                    alt="Our mission at Compassionate Palm Health Care"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      {/* TODO: Replace placeholder core values with final approved values from client */}
      <section className="relative bg-cream/60 pt-14 pb-16 lg:pt-16 lg:pb-20">
        <WaveSeparator position="top" colorClassName="text-cream/60" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-wide font-accent heading-accent">
              Our Core Values
            </h2>
            <p className="mt-5 text-lg text-charcoal">
              These values guide everything we do — from patient care to
              community engagement.
            </p>
          </div>
          <div className="grid gap-px bg-sand/60 sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden border border-sand/60 mb-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white p-10 text-center card-hover cursor-default"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                  {v.icon}
                </div>
                <h3 className="text-lg font-semibold text-black tracking-wide">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black sm:text-4xl tracking-wide font-accent heading-accent">
              Our Team
            </h2>
            <p className="mt-5 text-lg text-charcoal">
              Meet the dedicated professionals leading our mission forward.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border border-sand bg-white p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start card-hover">
              <div className="relative h-40 w-40 sm:h-48 sm:w-48 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src="/DR_Gelbrand.jpg"
                  alt="Dr. Steven D. Gelbard, MD"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold text-black tracking-wide">
                  Dr. Steven D. Gelbard, MD
                </h3>
                <p className="mt-1 text-sm font-accent italic text-primary">
                  Medical Director — Neurosurgery & Pain Management
                </p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal">
                  Board-certified neurosurgeon with subspecialty expertise in pain management.
                  Dr. Gelbard trained at NYU, Drexel University, Ohio State University, and
                  Brown University, and earned his medical degree from Tufts University School
                  of Medicine.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal">
                  His areas of focus include concussion care, hyperbaric oxygen therapy,
                  thoracic spine surgery, and wound management. He is a published researcher
                  in the Journal of Neurosurgery and a 2025 recipient of the Excellence in
                  Concussion Care award.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
