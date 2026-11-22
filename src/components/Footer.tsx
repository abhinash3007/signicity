import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-white/60">
              Brand experiences, built to be seen. Events, retail, displays, gifting and activations — based in{" "}
              {site.city}, delivered pan-India.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-brand"
            >
              {site.email} <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Company</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/65 transition hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-white/65 transition hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-white/65">
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-white/40" />
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </li>
              {site.phone && (
                <li className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-white/40" />
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">{site.phone}</a>
                </li>
              )}
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-white/40" />
                <address className="not-italic">
                  {site.address.lines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </address>
              </li>
            </ul>
            {socials.length > 0 && (
              <div className="mt-6 flex gap-3">
                {socials.map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-4 py-2 text-sm capitalize text-white/70 hover:border-brand hover:text-white"
                  >
                    {name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 py-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SigniCity. All rights reserved.
            <span className="mx-2 hidden sm:inline">·</span>
            <span className="block sm:inline">GSTIN: {site.gstin}</span>
          </p>
          <p className="font-semibold uppercase tracking-[0.18em]">We bring your vision to life</p>
        </div>
      </div>
      {/* Oversized wordmark */}
      <div aria-hidden className="overflow-hidden">
        <p className="-mb-[0.22em] select-none text-center text-[22vw] font-extrabold leading-none tracking-tighter text-white/[0.04]">
          SIGNICITY
        </p>
      </div>
    </footer>
  );
}
