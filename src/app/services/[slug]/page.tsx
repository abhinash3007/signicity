import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button, Container, CtaBand, Eyebrow, SectionHeading } from "@/components/ui";
import { ServiceCard } from "@/components/sections";
import { services } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.intro };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink pb-16 pt-36 text-white sm:pt-44">
        <Container>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
            <ArrowLeft size={16} /> All services
          </Link>
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <Eyebrow>Service {service.number}</Eyebrow>
              <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                {service.title}
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-2xl font-bold text-brand">{service.headline}</p>
              <p className="mt-4 text-lg text-white/65">{service.intro}</p>
            </Reveal>
          </div>
        </Container>
        <Container className="mt-14">
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-3xl sm:aspect-[21/9]">
            <Image src={service.image} alt={service.title} fill priority sizes="100vw" className="object-cover" />
          </Reveal>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="bg-paper py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeading
                eyebrow="What we deliver"
                title="Everything you need, handled."
                text="Pick one piece or hand us the whole job. Here's what's included in this service."
              />
              <Reveal className="mt-10">
                <Button href="/contact">Discuss your requirement</Button>
              </Reveal>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {service.deliverables.map((d, i) => (
                <Reveal
                  as="li"
                  key={d}
                  delay={(i % 2) * 80}
                  className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-6"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-100 text-brand">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <span className="pt-1 font-semibold">{d}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-ink py-24 text-white sm:py-32">
        <Container>
          <SectionHeading dark eyebrow="Why it works" title="The SigniCity difference." />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {service.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 100} className="rounded-3xl bg-ink-2 p-8 ring-1 ring-white/10">
                <span className="text-4xl font-extrabold text-brand">0{i + 1}</span>
                <h3 className="mt-6 text-2xl font-bold">{b.title}</h3>
                <p className="mt-3 text-white/60">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Gallery" title="A look at the work." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 100} className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image src={src} alt={`${service.title} example ${i + 1}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 hover:scale-105" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Other services */}
      <section className="bg-paper py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Explore more" title="Other ways we can help." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
