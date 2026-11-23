"use client";
import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WAITLIST_URL } from "@/data";

/**
 * Newsletter band. There is no mailing-list backend yet, so submitting sends
 * the visitor to the waitlist form (the same place the old "Join Waitlist"
 * button inside this form went), instead of silently doing nothing.
 */
export const Connect: React.FC = () => {
  const [sent, setSent] = useState(false);

  return (
    <section className="pb-20 sm:pb-28">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-950 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(50%_80%_at_20%_0%,rgb(123_88_244/0.55),transparent_70%),radial-gradient(40%_60%_at_100%_100%,rgb(217_146_123/0.35),transparent_70%)]"
          />
          <span className="inline-block text-xs font-bold tracking-widest text-brand-200 uppercase">
            Let&apos;s Connect
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl">
            Stay Connected with Our Newsletter for the Latest Updates
          </h2>

          {sent ? (
            <p className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white">
              <CheckCircle2 className="size-5 text-brand-200" />
              Thanks! Finish joining in the tab we just opened.
            </p>
          ) : (
            <form
              className="mx-auto mt-8 flex w-full max-w-lg flex-col gap-2 rounded-2xl bg-white p-2 shadow-lift sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(WAITLIST_URL, "_blank", "noopener,noreferrer");
                setSent(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                autoComplete="email"
                placeholder="Your email address"
                className="h-12 flex-1 rounded-xl bg-transparent px-4 text-sm text-ink-900 outline-none placeholder:text-ink-400"
              />
              <button type="submit" className="btn btn-primary">
                Join waitlist
                <ArrowRight className="size-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
