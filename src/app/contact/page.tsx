"use client";

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.firstName.trim()) errors.firstName = "First name is required";
  if (!data.lastName.trim()) errors.lastName = "Last name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.message.trim()) errors.message = "Message is required";
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream/60 py-20 lg:py-24 overflow-hidden">
        <div className="blob-shape absolute -top-20 -right-20 h-64 w-64 bg-primary/5 blur-2xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact Us</p>
            <h1 className="text-4xl font-bold text-black sm:text-5xl tracking-wide">
              We&apos;re Here to Help
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-charcoal">
              Have a question, need to schedule an appointment, or want to learn more about our services? Reach out — we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-black mb-10 tracking-wide font-accent">Send Us a Message</h2>

              {submitted && (
                <div className="mb-10 rounded-xl bg-green-50 border border-green-200 p-8">
                  <p className="text-green-800 font-semibold tracking-wide">Thank you for reaching out!</p>
                  <p className="text-green-700 text-sm mt-2">
                    We&apos;ve received your message and will get back to you within one business day.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2 tracking-wide">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${
                        errors.firstName ? "border-red-400" : "border-sand"
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="mt-1.5 text-xs text-red-500">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2 tracking-wide">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${
                        errors.lastName ? "border-red-400" : "border-sand"
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="mt-1.5 text-xs text-red-500">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2 tracking-wide">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${
                        errors.email ? "border-red-400" : "border-sand"
                      }`}
                      placeholder="john.doe@email.com"
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-2 tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-sand px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2 tracking-wide">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-sand px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="appointment">Schedule an Appointment</option>
                    <option value="services">Question About Services</option>
                    <option value="billing">Billing & Insurance</option>
                    <option value="referral">Provider Referral</option>
                    <option value="donation">Donations & Giving</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2 tracking-wide">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-y ${
                      errors.message ? "border-red-400" : "border-sand"
                    }`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="rounded-xl border border-sand bg-cream/40 p-8 testimonial-bar">
                  <h3 className="text-lg font-semibold text-black mb-7 tracking-wide">Contact Details</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-accent mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-black tracking-wide">Phone</p>
                        <p className="text-sm text-charcoal mt-0.5">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-accent mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-black tracking-wide">Email</p>
                        <p className="text-sm text-charcoal mt-0.5">info@compassionatepalm.org</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-accent mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-black tracking-wide">Address</p>
                        <p className="text-sm text-charcoal mt-0.5">
                          1234 Palm Avenue, Suite 100<br />
                          West Palm Beach, FL 33401
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-accent mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-black tracking-wide">Hours</p>
                        <p className="text-sm text-charcoal mt-0.5">
                          Mon–Fri: 8:00 AM – 6:00 PM<br />
                          Sat: 9:00 AM – 1:00 PM<br />
                          Sun: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="flex h-64 w-full items-center justify-center rounded-xl border border-sand bg-gray-200 text-gray-400 text-sm font-medium">
                  Map Placeholder
                </div>

                {/* Emergency */}
                <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                  <p className="text-sm font-semibold text-red-800 tracking-wide">Medical Emergency?</p>
                  <p className="text-sm text-red-700 mt-2">
                    If you are experiencing a medical emergency, please call <strong>911</strong> immediately or go to your nearest emergency room.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
