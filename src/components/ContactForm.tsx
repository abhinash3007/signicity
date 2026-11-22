"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { services, site } from "@/lib/site";

// NOTE: There is no backend yet, so the form opens the visitor's email app with
// the enquiry pre-filled. To receive submissions directly, swap `handleSubmit`
// for a POST to a form service (Formspree, Web3Forms) or a Next.js route that
// sends email via Resend.

const field =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-ink placeholder:text-ink/35 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = `Project enquiry: ${get("service") || "General"} — ${get("company") || get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Service: ${get("service")}`,
      `Timeline: ${get("timeline")}`,
      `Budget: ${get("budget")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start rounded-3xl bg-white p-10 ring-1 ring-ink/10">
        <CheckCircle2 size={44} className="text-brand" />
        <h3 className="mt-6 text-3xl font-bold">Thanks — almost there!</h3>
        <p className="mt-3 text-muted">
          Your email app should have opened with your enquiry. Just hit send and we&apos;ll get back to you shortly. If
          it didn&apos;t open, write to us at{" "}
          <a className="font-semibold text-ink underline decoration-brand" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
        <button onClick={() => setSent(false)} className="mt-8 font-semibold text-brand">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold">Your name *</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Full name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold">Company</span>
          <input name="company" autoComplete="organization" className={field} placeholder="Brand or company" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold">Email *</span>
          <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold">Phone</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} placeholder="+91" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold">What do you need help with?</span>
          <select name="service" className={field} defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
            <option>Something else</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold">Timeline</span>
          <select name="timeline" className={field} defaultValue="">
            <option value="" disabled>When is it needed?</option>
            <option>Within 2 weeks</option>
            <option>2–4 weeks</option>
            <option>1–3 months</option>
            <option>Just exploring</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold">Budget</span>
          <select name="budget" className={field} defaultValue="">
            <option value="" disabled>Approximate budget</option>
            <option>Under ₹1 lakh</option>
            <option>₹1–5 lakh</option>
            <option>₹5–15 lakh</option>
            <option>₹15 lakh+</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold">Tell us about the project *</span>
          <textarea
            name="message"
            required
            rows={5}
            className={field}
            placeholder="Event, launch, display or gifting requirement — cities, quantities, dates, anything useful."
          />
        </label>
      </div>
      <button
        type="submit"
        className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white transition hover:bg-brand-600 sm:w-auto"
      >
        Send enquiry
        <Send size={18} className="transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
