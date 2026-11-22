import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand ${className}`}>
      <span className="h-px w-8 bg-brand" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  dark = false,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={`mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {text && <p className={`mt-5 text-lg ${dark ? "text-white/60" : "text-muted"}`}>{text}</p>}
    </Reveal>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "light" | "outline" | "outline-dark";
  className?: string;
}) {
  const styles = {
    primary: "bg-brand text-white hover:bg-brand-600",
    light: "bg-white text-ink hover:bg-paper",
    outline: "border border-white/25 text-white hover:border-white hover:bg-white/5",
    "outline-dark": "border border-ink/20 text-ink hover:border-ink hover:bg-ink/5",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-all ${styles} ${className}`}
    >
      {children}
      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-20 pt-40 text-white sm:pb-28 sm:pt-48">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
      <div className="absolute inset-0 -z-10 bg-grid" />
      <Container>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/65 sm:text-xl">{text}</p>
        </Reveal>
      </Container>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-brand px-6 py-16 text-white sm:px-14 sm:py-20">
          <div aria-hidden className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10" />
          <div aria-hidden className="absolute -bottom-32 right-40 h-72 w-72 rounded-full bg-black/10" />
          <div className="relative grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Let&apos;s talk</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                Let&apos;s make your next idea happen.
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="text-lg text-white/85">
                Tell us about your event, launch or campaign. We&apos;ll come back with ideas, a plan and a clear estimate.
              </p>
              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:bg-black"
              >
                Start a project
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
