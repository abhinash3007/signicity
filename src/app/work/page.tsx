import type { Metadata } from "next";
import { Container, CtaBand, PageHero } from "@/components/ui";
import { ClientMarquee } from "@/components/sections";
import WorkGrid from "@/components/WorkGrid";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Exhibition stalls, product launches, retail displays, corporate gifting and awards delivered by SigniCity for brands across India.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={<>Built to be seen. <span className="text-brand">Made to be remembered.</span></>}
        text="Stalls, launches, retail displays, gifts and awards — a selection of projects we've planned, produced and delivered."
        image={img("1492684223066-81342ee5ff30", 2000)}
      />
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <WorkGrid />
        </Container>
      </section>
      <ClientMarquee />
      <CtaBand />
    </>
  );
}
