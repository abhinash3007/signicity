import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle, Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your event, launch, retail or gifting requirement. SigniCity will get back with ideas and a clear estimate.",
};

const mapQuery = encodeURIComponent(
  "Gurupada Sarani, Gurunanak Pally, Asansol, West Bengal 713301"
);
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export default function ContactPage() {
  const channels = [
    { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
    site.phone && { icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    site.whatsapp && { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${site.whatsapp}` },
    { icon: MapPin, label: "Visit our office", value: site.address.lines.join(", "), href: mapsLink },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href?: string }[];

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-20 pt-40 text-white sm:pt-48">
        <div className="absolute inset-0 bg-grid" />
        <div aria-hidden className="absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-brand/20 blur-3xl" />
        <Container className="relative">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s make your next idea <span className="text-brand">happen.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/65 sm:text-xl">
              Share a few details and we&apos;ll come back with ideas, a plan and a clear estimate — usually within one
              working day.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div className="space-y-4">
              {channels.map((c, i) => {
                const Inner = (
                  <>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-100 text-brand">
                      <c.icon size={22} />
                    </span>
                    <span>
                      <span className="block text-sm text-muted">{c.label}</span>
                      <span className="mt-1 block break-words text-lg font-bold">{c.value}</span>
                    </span>
                  </>
                );
                return (
                  <Reveal key={c.label} delay={i * 80}>
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-center gap-5 rounded-2xl bg-white p-6 ring-1 ring-ink/10 transition hover:ring-brand">
                        {Inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-5 rounded-2xl bg-white p-6 ring-1 ring-ink/10">{Inner}</div>
                    )}
                  </Reveal>
                );
              })}
              <Reveal className="rounded-2xl bg-ink p-8 text-white">
                <p className="text-sm font-semibold text-brand">What happens next?</p>
                <ol className="mt-4 space-y-3 text-white/75">
                  <li><span className="font-bold text-white">1.</span> We review your brief and ask a few questions.</li>
                  <li><span className="font-bold text-white">2.</span> We share ideas, scope and an itemised estimate.</li>
                  <li><span className="font-bold text-white">3.</span> Once approved, we plan, produce and deliver.</li>
                </ol>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Office + map */}
      <section className="bg-ink py-24 text-white sm:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <SectionHeading
                dark
                eyebrow="Our office"
                title="Based in Asansol. Delivering across India."
                text="Our team works out of Asansol, West Bengal — serving brands in Asansol, Durgapur, Kolkata and beyond, with partners across the country."
              />
              <Reveal className="mt-8">
                <address className="not-italic text-white/75">
                  {site.address.lines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </address>
                <p className="mt-4 text-sm text-white/45">GSTIN: {site.gstin}</p>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-600"
                >
                  <MapPin size={18} /> Get directions
                </a>
              </Reveal>
            </div>
            <Reveal delay={100} className="overflow-hidden rounded-3xl ring-1 ring-white/10">
              <iframe
                title="SigniCity office location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="block h-[26rem] w-full grayscale-[60%] invert-[90%] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading eyebrow="FAQ" title="Good questions." text="A few things clients usually ask before we start." />
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus className="shrink-0 text-brand transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-4 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
