import React from "react";
import Image from "next/image";
import { features } from "@/data";

export const Features: React.FC = () => (
  <section id="how-it-works" className="scroll-mt-24 bg-ink-50 py-20 sm:py-28">
    <div className="container-page">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Three simple steps</span>
        <h2 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          How Klosanow works
        </h2>
      </div>

      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {features.map(({ src, desc, title }, i) => (
          <li
            key={title}
            className="card group relative p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="absolute top-7 right-7 text-sm font-extrabold text-ink-200">
              0{i + 1}
            </span>
            <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-100">
              <Image src={src} alt="" width={30} height={30} draggable={false} />
            </div>
            <h3 className="mt-6 text-lg font-bold text-ink-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">{desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
