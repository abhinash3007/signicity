"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, workCategories } from "@/lib/site";

export default function WorkGrid() {
  const [active, setActive] = useState<(typeof workCategories)[number]>("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0" role="tablist" aria-label="Filter work by category">
        <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
          {workCategories.map((c) => {
            const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  active === c ? "bg-ink text-white" : "bg-white text-ink/70 ring-1 ring-ink/10 hover:text-ink hover:ring-ink/30"
                }`}
              >
                {c}
                <span className={`ml-2 text-xs ${active === c ? "text-brand" : "text-ink/40"}`}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-12 grid auto-rows-[18rem] grid-flow-dense gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <article
            key={p.title}
            className={`group relative overflow-hidden rounded-3xl bg-ink ${
              p.size === "tall" ? "sm:row-span-2" : p.size === "wide" ? "sm:col-span-2" : ""
            }`}
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent opacity-90 transition group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">{p.category}</span>
              <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/70 transition-all duration-500 group-hover:max-h-24">
                {p.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
