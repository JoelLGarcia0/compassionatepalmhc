import Link from "next/link";
import Image from "next/image";
import WaveSeparator from "@/components/WaveSeperator";

interface FooterLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

const linkGroups: FooterLinkGroup[] = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "PrEP Services" },
      { href: "/services", label: "Mental Health" },
      { href: "/services", label: "Alcohol & Drug Addiction" },
      { href: "/services", label: "Weight Loss" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/patients", label: "Become a Patient" },
      { href: "/providers", label: "For Providers" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Contact Us" },
      { href: "/patients", label: "FAQs" },
    ],
  },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/accessibility", label: "Accessibility" },
];

export default function Footer() {
  return (
    <footer className="on-dark relative bg-primary-dark text-white">
      {/* The footer rises out of the page on the site's own wave. Height is
          pinned so the curve can't grow with the viewport and crowd the
          section above it. */}
      <WaveSeparator
        position="top"
        className="h-12 lg:h-16"
        colorClassName="text-primary-dark"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2 text-center lg:text-left">
            {/* Bigger logo, centered on mobile */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/logofull1.png"
                alt="Compassionate Palm Health Care"
                width={520}
                height={140}
                priority
                className="w-[250px] h-auto brightness-0 invert -mt-8 -mb-8"
              />
            </div>

            <p className="mt-6 text-white/70 text-sm leading-relaxed max-w-md mx-auto lg:mx-0 font-accent italic">
              Compassionate, integrated, and accessible care for our community.
              Improving the health and well-being of underserved populations.
            </p>

            {/* Contact info */}
            <div className="mt-8 space-y-3 text-sm text-white/60 max-w-md mx-auto lg:mx-0">
              <p className="flex items-center gap-2 justify-center lg:justify-start">
                <svg
                  className="h-4 w-4 shrink-0"
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
                (305) 733-1669
              </p>

              <p className="flex items-center gap-2 justify-center lg:justify-start">
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 12h-1.5m-7.5 0h7.5"
                  />
                </svg>
                Fax: (305) 952-4188
              </p>

              <p className="flex items-center gap-2 justify-center lg:justify-start">
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Contact@compassionatepalmhealthcare.com
              </p>

              <p className="flex items-start gap-2 justify-center lg:justify-start text-left">
                <svg
                  className="h-4 w-4 mt-0.5 shrink-0"
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
                <span>
                  1380 NE Miami Gardens Dr, Suite 275
                  <br />
                  Miami, FL 33179
                </span>
              </p>
            </div>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title} className="text-center md:text-left">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-5">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/40 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Compassionate Palm Health Care.
              All rights reserved.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 text-xs text-white/40">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
