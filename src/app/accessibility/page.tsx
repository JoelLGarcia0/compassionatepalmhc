import type { Metadata } from "next";

import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility | Compassionate Palm Health Care",
  description:
    "Our commitment to making this website usable for everyone, the steps we have taken, and how to reach us if something is not working for you.",
};

const sections: LegalSection[] = [
  {
    heading: "Our commitment",
    body: (
      <p>
        We serve people with a wide range of abilities, and our website should
        work for all of them. We treat accessibility as part of building the
        site, not as an afterthought.
      </p>
    ),
  },
  {
    heading: "The standard we work toward",
    body: (
      <p>
        We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at
        Level AA. This is a goal we work toward continuously rather than a
        certification we hold, and we expect to keep improving.
      </p>
    ),
  },
  {
    heading: "What we have done",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Semantic HTML structure with a logical heading order</li>
        <li>A skip link so keyboard users can jump straight to the content</li>
        <li>Full keyboard operation, including the mobile navigation menu</li>
        <li>Visible focus outlines on every interactive element</li>
        <li>A brand palette chosen with text contrast in mind</li>
        <li>Text alternatives for meaningful images</li>
        <li>Labelled form fields</li>
        <li>Layouts that reflow down to small phone screens</li>
        <li>
          Reduced animation for visitors whose system requests less motion
        </li>
      </ul>
    ),
  },
  {
    heading: "Where we still fall short",
    body: (
      <p>
        We know this site is not perfect. Some images may need better
        descriptions, and content we add over time may not always meet our own
        standard right away. If you find a barrier, we would genuinely like to
        hear about it.
      </p>
    ),
  },
  {
    heading: "Tell us about a problem",
    body: (
      <>
        <p>
          If any part of this site is difficult to use, contact us and tell us
          what happened, which page you were on, and what device or assistive
          technology you were using. We will work with you to get you the
          information you need.
        </p>
        <p>
          <a className="text-primary hover:underline" href="tel:+13057331669">
            (305) 733-1669
          </a>
          <br />
          <a
            className="text-primary hover:underline"
            href="mailto:Contact@compassionatepalmhealthcare.com"
          >
            Contact@compassionatepalmhealthcare.com
          </a>
        </p>
      </>
    ),
  },
  {
    heading: "Getting our information another way",
    body: (
      <p>
        Anything on this website is also available by phone or in person at our
        office. If a page is not working for you, call us and we will walk you
        through it, take your request directly, or provide the information in
        another format.
      </p>
    ),
  },
];

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Accessibility"
      title="Accessibility Statement"
      intro="What we have done to make this site usable for everyone, where it still falls short, and how to reach us if you hit a barrier."
      updated="August 4, 2026"
      sections={sections}
    />
  );
}
