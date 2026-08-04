import type { Metadata } from "next";

import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | Compassionate Palm Health Care",
  description:
    "The terms that apply when you use the Compassionate Palm Health Care website, including important medical and emergency disclaimers.",
};

const sections: LegalSection[] = [
  {
    heading: "In an emergency, call 911",
    body: (
      <p>
        Do not use this website if you have a medical emergency. Call 911 or go
        to your nearest emergency room. If you are in crisis or thinking about
        harming yourself, call or text 988 to reach the Suicide &amp; Crisis
        Lifeline.
      </p>
    ),
  },
  {
    heading: "This site is not medical advice",
    body: (
      <>
        <p>
          The content here is general information about our practice and the
          services we offer. It is not medical advice, and it is not a
          substitute for talking to a qualified clinician about your own
          situation.
        </p>
        <p>
          Never delay seeking care, or disregard advice you have already
          received, because of something you read on this site.
        </p>
      </>
    ),
  },
  {
    heading: "Using this site does not make you a patient",
    body: (
      <p>
        Browsing this website, submitting the contact form, or emailing us does
        not create a provider-patient relationship. That relationship begins
        when you are seen and accepted as a patient of the practice.
      </p>
    ),
  },
  {
    heading: "Accepting these terms",
    body: (
      <p>
        By using this website you agree to these terms. If you do not agree,
        please do not use the site.
      </p>
    ),
  },
  {
    heading: "Acceptable use",
    body: (
      <p>
        Please use this site lawfully. Do not attempt to disrupt it, gain
        unauthorized access to it, scrape it at a scale that degrades service
        for others, or use it to send anything unlawful or harmful.
      </p>
    ),
  },
  {
    heading: "Our content",
    body: (
      <p>
        The text, images, logos, and design on this site belong to Compassionate
        Palm Health Care or are used with permission. Please do not reproduce
        them for commercial purposes without asking us first.
      </p>
    ),
  },
  {
    heading: "Links to other sites",
    body: (
      <p>
        We sometimes link to outside resources for convenience. We do not
        control those sites and are not responsible for their content or their
        privacy practices.
      </p>
    ),
  },
  {
    heading: "Availability and accuracy",
    body: (
      <p>
        We work to keep this site accurate and available, but we cannot promise
        it will always be current, uninterrupted, or error-free. Service
        details, hours, and availability can change.
      </p>
    ),
  },
  {
    heading: "Limitation of liability",
    body: (
      <p>
        To the fullest extent permitted by law, Compassionate Palm Health Care
        is not liable for indirect or consequential damages arising from your
        use of this website. Nothing in these terms limits any liability that
        cannot be limited under applicable law.
      </p>
    ),
  },
  {
    heading: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of the State of Florida, without
        regard to its conflict of law rules.
      </p>
    ),
  },
  {
    heading: "Changes to these terms",
    body: (
      <p>
        We may update these terms. When we do, we will revise the date at the
        top of this page.
      </p>
    ),
  },
  {
    heading: "Contact us",
    body: (
      <p>
        Questions about these terms? Email{" "}
        <a
          className="text-primary hover:underline"
          href="mailto:Contact@compassionatepalmhealthcare.com"
        >
          Contact@compassionatepalmhealthcare.com
        </a>{" "}
        or call{" "}
        <a className="text-primary hover:underline" href="tel:+13057331669">
          (305) 733-1669
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="The terms that apply when you use this website, including what it can and cannot do for you."
      updated="August 4, 2026"
      sections={sections}
    />
  );
}
