import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Container, CtaBand, PageHero } from "@/components/ui";
import { ProcessSection } from "@/components/sections";
import { img, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Events & experiences, retail & trade marketing, creative & production, gifting & recognition, media & outreach and brand support — all from one partner.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={<>One partner. <span className="text-brand">Many ways to show up.</span></>}
        text="A connected set of services for brands, teams and customers — planned together, delivered by one accountable team."
        image={img("1511578314322-379afb476865", 2000)}
      />

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="space-y-24 sm:space-y-32">
            {services.map((s, i) => (
              <article key={s.slug} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <Reveal className={i % 2 ? "lg:order-2" : ""}>
                  <Link href={`/services/${s.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-3xl bg-ink">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-6 top-6 rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white">
                      {s.number}
                    </span>
                  </Link>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{s.title}</h2>
                  <p className="mt-3 text-xl font-semibold text-brand">{s.headline}</p>
                  <p className="mt-5 text-lg text-muted">{s.intro}</p>
                  <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {s.deliverables.slice(0, 6).map((d) => (
                      <li key={d} className="flex items-start gap-3 text-ink/80">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group mt-9 inline-flex items-center gap-2 font-semibold text-ink"
                  >
                    <span className="border-b-2 border-brand pb-0.5">Explore {s.title}</span>
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSection />
      <CtaBand />
    </>
  );
}
