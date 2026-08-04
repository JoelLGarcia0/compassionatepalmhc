/**
 * Central configuration for Compassionate Palm Health Care.
 *
 * Contact details here are the practice's real ones and are already published
 * in the footer. Never add invented phone numbers, addresses, or social
 * accounts — the UI omits anything left empty rather than showing a
 * placeholder.
 */

export const siteConfig = {
  name: "Compassionate Palm Health Care",
  shortName: "CPHC",
  tagline: "Compassionate Care, Stronger Community",
  description:
    "Compassionate Palm Health Care (CPHC) is an integrated, community-centered healthcare organization in Miami providing PrEP services, mental health support, addiction treatment, and weight loss programs to underserved communities.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "https://compassionatepalmhealthcare.com",
  phone: "(305) 733-1669",
  phoneHref: "tel:+13057331669",
  fax: "(305) 952-4188",
  email: "Contact@compassionatepalmhealthcare.com",
  address: {
    street: "1380 NE Miami Gardens Dr, Suite 275",
    city: "Miami",
    state: "FL",
    zip: "33179",
  },
} as const;
