import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Clock,
  Heart,
  LifeBuoy,
  MessagesSquare,
  Repeat,
  Sparkles,
  Sprout,
  Users,
  Wand2,
  Waves,
} from "lucide-react";
import { cultureImg } from "@/assets";
import { aboutSlide, cultureTalks } from "@/data";
import { JoinWaitlistButton } from "@/components/ui/JoinWaitlistButton";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Klosanow connects tutors with learners through engaging pre-recorded video lessons, available anytime and anywhere.",
};

const benefitIcons = [Wand2, Repeat, Clock, Users];
const cultureIcons = [Waves, LifeBuoy, Sprout, MessagesSquare, Sparkles];

// "Our Benefits" was the title slide of the old carousel; it becomes the
// section heading here and the remaining slides become cards.
const benefits = aboutSlide.filter((s) => s.desc);

const About: React.FC = () => (
  <>
    {/* Intro */}
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_50%_0%,rgb(123_88_244/0.12),transparent_70%)]"
      />
      <div className="container-page py-20 text-center sm:py-28">
        <span className="eyebrow">
          <Heart className="size-3.5" /> About Klosanow
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl leading-[1.1] font-extrabold tracking-tight text-ink-900 sm:text-5xl">
          Get to Know Us!
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ink-500 sm:text-lg">
          At Klosanow, we revolutionize the educational landscape by providing
          a cutting-edge EdTech platform that seamlessly connects tutors with
          learners. Our innovative solution empowers tutors to create and share
          engaging pre-recorded video lessons, enabling learners to access and
          engage with the content conveniently on our platform, anytime and
          anywhere. Embrace the future of education with Klosanow and embark on
          a transformative teaching and learning experience that transcends
          traditional boundaries.
        </p>
      </div>
    </section>

    {/* Benefits */}
    <section className="bg-ink-50 py-20 sm:py-24">
      <div className="container-page">
        <div className="text-center">
          <span className="eyebrow">What you get</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {aboutSlide[0]?.title || "Our Benefits"}
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ id, title, desc }, i) => {
            const Icon = benefitIcons[i % benefitIcons.length];
            return (
              <div key={id} className="card p-7">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-brand">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Culture */}
    <section className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Our values</span>
          <h2 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            We live a worthwhile culture
          </h2>
          <ul className="mt-10 space-y-6">
            {cultureTalks.map(({ title, text }, i) => {
              const Icon = cultureIcons[i % cultureIcons.length];
              return (
                <li key={title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-peach-100 text-peach-600">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink-900">
                      {title.replace(/:$/, "")}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">{text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 to-peach-100"
          />
          <Image
            src={cultureImg}
            alt="Tutors and learners connected on Klosanow"
            className="mx-auto w-full max-w-[520px] p-6"
            draggable={false}
          />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="pb-20 sm:pb-28">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-brand-50 px-8 py-12 text-center ring-1 ring-brand-100 md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-ink-900">
              Embrace the future of education
            </h2>
            <p className="mt-2 text-ink-500">
              Be among the first tutors and learners on Klosanow.
            </p>
          </div>
          <JoinWaitlistButton className="h-[52px] px-7" />
        </div>
      </div>
    </section>
  </>
);

export default About;
