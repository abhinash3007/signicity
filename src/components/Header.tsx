"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-ink/90 backdrop-blur-md shadow-[0_1px_0_rgb(255_255_255/0.06)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-white" aria-label="SigniCity home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.slice(0, -1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href) ? "text-white" : "text-white/65 hover:text-white"
              }`}
            >
              {item.label}
              {isActive(item.href) && <span className="mx-auto mt-0.5 block h-0.5 w-4 rounded bg-brand" />}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Start a project <ArrowUpRight size={16} />
          </Link>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-full text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-ink transition-[max-height] duration-500 ${
          open ? "max-h-[100svh]" : "max-h-0"
        }`}
      >
        <nav className="flex h-[calc(100svh-4.5rem)] flex-col px-4 pb-10 pt-6" aria-label="Mobile">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-baseline gap-4 border-b border-white/10 py-5 text-3xl font-bold ${
                isActive(item.href) ? "text-brand" : "text-white"
              }`}
            >
              <span className="text-xs font-semibold text-white/40">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand py-4 font-semibold text-white"
          >
            Start a project <ArrowUpRight size={18} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
