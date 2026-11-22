import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Container, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { ClientMarquee, ProcessSection } from "@/components/sections";
import { img, industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "SigniCity is a marketing and brand execution partner that plans, creates and manages brand experiences across events, retail and on-ground touchpoints.",
};

const values = [
  { title: "Ownership", text: "We treat every brief like it's our own brand on the line — and stay until the work is complete." },
  { title: "Craft", text: "Details matter. Finishes, fonts, lighting and logistics all get the same attention." },
  { title: "Clarity", text: "Clear plans, clear costs and clear communication. You always know where things stand." },
  { title: "Partnership", text: "We build long relationships with clients and execution partners alike." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>We help brands turn ideas into <span className="text-brand">real-world experiences.</span></>}
        text="SigniCity is a marketing and brand execution partner. We plan, create and manage brand experiences across events, retail spaces and on-ground touchpoints."
        image={img("1600880292203-757bb62b4baf", 2000)}
      />

      {/* Story */}
      <section className="bg-paper py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <SectionHeading eyebrow="Our story" title="Ideas are only the start." />
            <Reveal className="space-y-6 text-lg text-muted">
              <p>
                Every brand has ideas. The hard part is turning them into something people can walk into, pick up, hold
                or remember. That&apos;s where SigniCity comes in.
              </p>
              <p>
                We started with a simple belief: brands deserve a partner who cares as much about the execution as the
                concept. Today we deliver exhibition stalls, product launches, dealer meets, retail visibility,
                product displays, corporate gifting and recognition programmes for brands across India.
              </p>
              <p className="font-semibold text-ink">
                From a single display unit to a full event or a multi-city campaign, we bring the right people,
                production and execution together.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {["1540575467063-178a50c2df87", "1521590832167-7bcbfaa6381f", "1607344645866-009c320b63e0"].map((id, i) => (
              <Reveal key={id} delay={i * 100} className={`relative overflow-hidden rounded-3xl ${i === 1 ? "md:translate-y-12" : ""}`}>
                <div className="relative aspect-[4/5]">
                  <Image src={img(id, 1000)} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission / Vision */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal className="rounded-3xl bg-ink p-10 text-white sm:p-14">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Our mission</p>
              <p className="mt-6 text-2xl font-bold leading-snug sm:text-3xl">
                To make brand execution simple, reliable and memorable — for every brand, at every scale.
              </p>
            </Reveal>
            <Reveal delay={100} className="rounded-3xl bg-brand p-10 text-white sm:p-14">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Our vision</p>
              <p className="mt-6 text-2xl font-bold leading-snug sm:text-3xl">
                To be India&apos;s most trusted partner for brand experiences that people see, feel and remember.
              </p>
            </Reveal>
          </div>

          <div className="mt-24">
            <SectionHeading eyebrow="What we value" title="How we show up for clients." />
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 80} className="bg-white p-8">
                  <span className="text-sm font-bold text-brand">0{i + 1}</span>
                  <h3 className="mt-6 text-2xl font-bold">{v.title}</h3>
                  <p className="mt-3 text-muted">{v.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="bg-paper py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Industries"
              title="Where we've made an impact."
              text="Our experience spans categories where visibility at the point of sale and on the event floor makes a real difference."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {industries.map((ind, i) => (
                <Reveal
                  as="li"
                  key={ind}
                  delay={(i % 2) * 80}
                  className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white px-6 py-5 font-semibold"
                >
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand" />
                  {ind}
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <ClientMarquee />
      <ProcessSection />
      <CtaBand />
    </>
  );
}
