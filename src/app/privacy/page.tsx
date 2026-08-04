import type { Metadata } from "next";
import Link from "next/link";

import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Compassionate Palm Health Care",
  description:
    "How Compassionate Palm Health Care handles information collected through this website, and how that differs from your rights as a patient.",
};

const sections: LegalSection[] = [
  {
    heading: "What this policy covers",
    body: (
      <>
        <p>
          This policy explains how Compassionate Palm Health Care handles
          information collected through this website. It applies to this site
          only.
        </p>
        <p>
          Your health information as a patient is governed separately by federal
          law. Ask our front desk for our Notice of Privacy Practices, which
          describes how we use and disclose protected health information and
          what rights you have over it.
        </p>
      </>
    ),
  },
  {
    heading: "Do not send medical details through this site",
    body: (
      <p>
        Our contact form and email address are not secure channels. Please do
        not use them to send diagnoses, test results, medication lists, or other
        medical details. To discuss anything clinical, call us at{" "}
        <a className="text-primary hover:underline" href="tel:+13057331669">
          (305) 733-1669
        </a>{" "}
        or speak with your care team in person.
      </p>
    ),
  },
  {
    heading: "Information we collect",
    body: (
      <>
        <p>
          <strong className="font-semibold text-dark">
            Information you give us.
          </strong>{" "}
          When you submit our contact form, we receive the name, email address,
          phone number, and message you choose to provide.
        </p>
        <p>
          <strong className="font-semibold text-dark">
            Information collected automatically.
          </strong>{" "}
          Our hosting provider records standard technical data such as IP
          address, browser type, and the pages requested. This is used to keep
          the site running and secure.
        </p>
      </>
    ),
  },
  {
    heading: "How we use it",
    body: (
      <p>
        We use what you send us to respond to your question, schedule or follow
        up on an appointment, and keep a record of the request. We do not use it
        for advertising.
      </p>
    ),
  },
  {
    heading: "What we do not do",
    body: (
      <p>
        We do not sell your information. We do not rent or trade it. We do not
        share it with advertisers or use it to build marketing profiles.
      </p>
    ),
  },
  {
    heading: "Who else may see it",
    body: (
      <p>
        Vendors that operate this site on our behalf, such as our web host and
        email provider, may process this information in order to deliver their
        service. We may also disclose information where required by law.
      </p>
    ),
  },
  {
    heading: "How long we keep it",
    body: (
      <p>
        We keep website inquiries only as long as needed to respond and to
        maintain a reasonable business record, then dispose of them.
      </p>
    ),
  },
  {
    heading: "Your choices",
    body: (
      <p>
        You can ask what website information we hold about you, ask us to
        correct it, or ask us to delete it. Contact us using the details below.
        Requests about your medical record are handled under our Notice of
        Privacy Practices instead.
      </p>
    ),
  },
  {
    heading: "Children",
    body: (
      <p>
        This website is intended for adults. We do not knowingly collect
        information from children through this site.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p>
        If we change this policy, we will update the date at the top of this
        page.
      </p>
    ),
  },
  {
    heading: "Contact us",
    body: (
      <>
        <p>
          Questions about this policy? Reach us at{" "}
          <a
            className="text-primary hover:underline"
            href="mailto:Contact@compassionatepalmhealthcare.com"
          >
            Contact@compassionatepalmhealthcare.com
          </a>{" "}
          or{" "}
          <a className="text-primary hover:underline" href="tel:+13057331669">
            (305) 733-1669
          </a>
          .
        </p>
        <p>
          Compassionate Palm Health Care
          <br />
          1380 NE Miami Gardens Dr, Suite 275
          <br />
          Miami, FL 33179
        </p>
        <p>
          You can also use our{" "}
          <Link className="text-primary hover:underline" href="/contact">
            contact form
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="How we handle information collected through this website, and where your rights as a patient are covered instead."
      updated="August 4, 2026"
      sections={sections}
    />
  );
}
