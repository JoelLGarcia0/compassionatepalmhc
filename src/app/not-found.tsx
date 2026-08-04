import Link from "next/link";

import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <section className="pt-20 pb-28 lg:pt-28 lg:pb-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Page not found</p>
          <h1 className="mt-4 text-4xl font-medium sm:text-5xl">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-charcoal">
            The page you were looking for may have moved or no longer exists.
            Here are a few places to pick things back up.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
            >
              Go to the homepage
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-primary px-8 py-3.5 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              View our services
            </Link>
          </div>

          <p className="mt-10 text-sm text-charcoal">
            Need to reach someone? Call{" "}
            <a
              className="font-semibold text-primary hover:underline"
              href={siteConfig.phoneHref}
            >
              {siteConfig.phone}
            </a>{" "}
            or visit our{" "}
            <Link className="font-semibold text-primary hover:underline" href="/contact">
              contact page
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
