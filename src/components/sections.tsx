import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import { Container, SectionHeading } from "./ui";
import { clients, process, reasons, services, type Service } from "@/lib/site";

export function ClientMarquee({ dark = false }: { dark?: boolean }) {
  const row = [...clients, ...clients];
  return (
    <section className={`${dark ? "bg-ink border-white/10" : "bg-paper border-ink/10"} border-y py-10`}>
      <Container>
        <p className={`text-center text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-white/40" : "text-muted"}`}>
          Trusted by brands across beauty, FMCG and industry
        </p>
      </Container>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-14 pr-14">
          {row.map((c, i) => (
            <span
              key={i}
              className={`whitespace-nowrap text-2xl font-bold tracking-tight ${dark ? "text-white/35" : "text-ink/30"}`}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 90}>
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-[26rem] flex-col justify-end overflow-hidden rounded-3xl bg-ink p-7 text-white"
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/60 to-transparent" />
        <span className="absolute left-7 top-7 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">{service.number}</span>
        <span className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 backdrop-blur transition group-hover:bg-brand">
          <ArrowUpRight size={20} />
        </span>
        <div className="relative">
          <h3 className="text-2xl font-bold">{service.title}</h3>
          <p className="mt-3 text-white/70">{service.short}</p>
        </div>
      </Link>
    </Reveal>
  );
}

export function ServicesGrid() {
  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <ServiceCard key={s.slug} service={s} index={i} />
      ))}
    </div>
  );
}

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-grid" />
      <Container className="relative">
        <SectionHeading
          dark
          eyebrow="How we work"
          title={<>Clear thinking.<br className="hidden sm:block" /> Careful execution.</>}
          text="A simple process that keeps the work moving — and keeps you in the loop at every step."
        />
        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 100} className="bg-ink-2 p-8 transition hover:bg-ink-3">
              <div className="flex items-center gap-3">
                <span className="text-5xl font-extrabold text-brand">{step.number}</span>
              </div>
              <h3 className="mt-8 text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 text-white/60">{step.text}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10 flex items-center gap-3 text-white/70">
          <span className="h-2 w-2 rounded-full bg-brand" />
          Pan-India execution through a network of trusted execution partners.
        </Reveal>
      </Container>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Why SigniCity"
              title="Ideas are only the start."
              text="Plenty of agencies can pitch a concept. We're built to deliver it — on budget, on time and on brand."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal
                key={r.title}
                delay={(i % 2) * 100}
                className="rounded-3xl border border-ink/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-100 text-brand">
                  <Check size={20} strokeWidth={3} />
                </span>
                <h3 className="mt-6 text-xl font-bold">{r.title}</h3>
                <p className="mt-2 text-muted">{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
