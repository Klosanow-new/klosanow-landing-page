"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { heroImg } from "@/assets";
import { JoinWaitlistButton } from "../ui/JoinWaitlistButton";

const stats = [
  { value: "500+", label: "Tutors" },
  { value: "2,000+", label: "Learners" },
  { value: "Free", label: "To start" },
];

export const Hero: React.FC = () => (
  <section className="relative isolate overflow-hidden">
    {/* Soft brand glow + grid backdrop */}
    <div
      aria-hidden
      className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_70%_20%,rgb(123_88_244/0.14),transparent_70%),radial-gradient(40%_40%_at_10%_90%,rgb(217_146_123/0.14),transparent_70%)]"
    />
    <div
      aria-hidden
      className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)] bg-[linear-gradient(to_right,rgb(18_18_36/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(18_18_36/0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
    />

    <div className="container-page grid items-center gap-14 pt-14 pb-20 lg:grid-cols-[1.05fr_1fr] lg:pt-20 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow">
          <span className="size-1.5 animate-pulse rounded-full bg-brand-500" />
          Online Education, Reimagined
        </span>

        <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-ink-900 sm:text-5xl lg:text-[3.5rem]">
          Online teaching and learning just got{" "}
          <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
            seamless
          </span>{" "}
          with Klosanow
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
          Create engaging video learning content, send it to your learning
          community and stay connected 24/7 through the messaging feature on
          the platform.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <JoinWaitlistButton className="h-[52px] px-7" />
          <a href="#how-it-works" className="btn btn-ghost h-[52px] px-6">
            <PlayCircle className="size-4 text-brand-500" />
            See how it works
          </a>
        </div>

        <dl className="mt-12 grid max-w-md grid-cols-3 divide-x divide-ink-200 rounded-2xl bg-white/70 py-4 ring-1 ring-ink-100 backdrop-blur">
          {stats.map(({ value, label }) => (
            <div key={label} className="px-4 text-center sm:px-6">
              <dt className="sr-only">{label}</dt>
              <dd className="text-2xl font-extrabold text-ink-900">{value}</dd>
              <dd className="mt-0.5 text-xs font-medium text-ink-500">{label}</dd>
            </div>
          ))}
        </dl>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -z-10 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-300 via-brand-200 to-peach-300 opacity-80"
        />
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -z-10 aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/70"
        />
        <Image
          src={heroImg}
          alt="The Klosanow app: onboarding, lesson dashboard and study chat screens"
          className="mx-auto w-full max-w-[540px] drop-shadow-[0_30px_40px_rgb(41_29_81/0.35)]"
          sizes="(max-width: 1024px) 90vw, 540px"
          priority
          draggable={false}
        />
      </motion.div>
    </div>
  </section>
);
