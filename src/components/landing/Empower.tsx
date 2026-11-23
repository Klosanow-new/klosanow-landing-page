"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Check } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ImgPaths } from "@/data";

const benefits = [
  "Teach at your own pace with easy-to-use tools",
  "Learners can rewatch lessons until they fully grasp the concept",
  "Flexible scheduling — teach when you want, learn when you can",
  "Personalized content for any language, curriculum or learning style",
];

export const Empower: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-peach-200 via-peach-100 to-brand-100">
            <div
              aria-hidden
              className="absolute -top-16 -right-16 size-56 rounded-full bg-brand-200/60 blur-2xl"
            />
            <Carousel
              plugins={[plugin.current]}
              opts={{ loop: true }}
              className="h-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="h-full">
                {ImgPaths.map(({ url }, index) => (
                  <CarouselItem key={index} className="flex h-full items-end justify-center">
                    <Image
                      src={url}
                      alt="A learner using Klosanow"
                      className="h-[92%] w-auto object-contain object-bottom select-none"
                      draggable={false}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="absolute bottom-8 left-0 hidden rounded-2xl bg-white px-5 py-4 shadow-lift ring-1 ring-ink-100 sm:block lg:-left-6">
            <p className="text-xs font-semibold text-ink-500">Learn on any device</p>
            <p className="mt-0.5 text-sm font-bold text-ink-900">Anytime, anywhere</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow">Why Klosanow</span>
          <h2 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Empowering Learners and Tutors Through Online Education
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
            The Klosanow platform is both effective and efficient, enabling
            learners to access learning content created by tutors — anytime,
            anywhere.
          </p>
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-[15px] leading-relaxed text-ink-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
