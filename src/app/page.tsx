import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button, Container, CtaBand, Eyebrow, SectionHeading } from "@/components/ui";
import { ClientMarquee, ProcessSection, ServicesGrid, WhyUs } from "@/components/sections";
import { highlights, img, projects } from "@/lib/site";

const featured = [projects[0], projects[3], projects[5], projects[9]];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink pb-16 pt-32 text-white sm:pb-24">
        <Image
          src={img("1470229722913-7c0e2dbbafd3", 2400)}
          alt="Crowd at a live brand event"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-80"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/75 to-transparent" />

        <Container className="w-full">
          <Reveal>
            <Eyebrow>Events · Retail · Displays · Gifting · Activations</Eyebrow>
            <h1 className="mt-7 max-w-5xl text-[clamp(2.75rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-tight">
              Brand experiences.
              <br />
              <span className="text-brand">Built to be seen.</span>
            </h1>
            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-lg text-white/70 sm:text-xl">
                SigniCity plans, creates and manages brand experiences across events, retail spaces and on-ground
                touchpoints — from a single display unit to a multi-city campaign.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact">Start a project</Button>
                <Button href="/work" variant="outline">See our work</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ClientMarquee dark />

      {/* ABOUT INTRO */}
      <section className="bg-paper py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Who we are"
                title="We turn ideas into real-world experiences."
                text="SigniCity is a marketing and brand execution partner. We bring the right people, production and execution together so your brand shows up exactly the way you imagined — at events, in stores and everywhere in between."
              />
              <Reveal className="mt-10">
                <Button href="/about" variant="outline-dark">More about us</Button>
              </Reveal>
            </div>
            <Reveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src={img("1505373877841-8d25f7d46678", 1400)}
                  alt="Audience at a brand conference"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-ink p-6 text-white shadow-2xl sm:-left-6 sm:right-auto sm:max-w-xs">
                <p className="text-sm font-semibold text-brand">Our promise</p>
                <p className="mt-2 text-lg font-bold leading-snug">We bring your vision to life — and stay until the job is done.</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink/10 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 80} className="bg-paper p-6 sm:p-8">
                <p className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{h.value}</p>
                <p className="mt-3 text-sm text-muted sm:text-base">{h.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title="One partner. Many ways to show up."
              text="A connected set of services for brands, teams and customers."
            />
            <Reveal>
              <Button href="/services" variant="outline-dark">All services</Button>
            </Reveal>
          </div>
          <ServicesGrid />
        </Container>
      </section>

      {/* FEATURED WORK */}
      <section className="bg-paper py-24 sm:py-32">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Built, branded and delivered."
              text="A glimpse of the stalls, displays, events and gifts we've brought to life."
            />
            <Reveal>
              <Button href="/work" variant="outline-dark">View all work</Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-12">
            {featured.map((p, i) => {
              const span = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"][i];
              return (
                <Reveal key={p.title} delay={(i % 2) * 100} className={span}>
                  <Link href="/work" className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink md:aspect-auto md:h-[28rem]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 768px) 60vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink backdrop-blur">
                        {p.category}
                      </span>
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">{p.title}</h3>
                        <p className="mt-1 text-muted">{p.description}</p>
                      </div>
                      <ArrowUpRight className="mt-1 shrink-0 text-ink/40 transition group-hover:text-brand" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <ProcessSection />
      <WhyUs />
      <CtaBand />
    </>
  );
}
