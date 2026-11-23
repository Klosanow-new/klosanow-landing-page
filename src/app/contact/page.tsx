import React from "react";
import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQ } from "@/components/contact/FAQ";
import { CONTACT_EMAIL } from "@/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Klosanow team, or find answers to common questions.",
};

const Contact: React.FC = () => (
  <>
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_50%_0%,rgb(123_88_244/0.12),transparent_70%)]"
      />
      <div className="container-page grid gap-12 py-20 sm:py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <span className="eyebrow">
            <MessageCircle className="size-3.5" /> Contact
          </span>
          <h1 className="mt-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Connect with Us Today
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500 sm:text-lg">
            Questions, feedback or partnership ideas — send us a message and
            the Klosanow team will get back to you.
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="card mt-10 flex max-w-sm items-center gap-4 p-5 transition hover:shadow-lift"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <Mail className="size-5" />
            </span>
            <span>
              <span className="block text-xs font-semibold text-ink-500">Email us</span>
              <span className="block font-bold text-ink-900">{CONTACT_EMAIL}</span>
            </span>
          </a>
        </div>

        <div className="card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>

    <section className="bg-ink-50 py-20 sm:py-24">
      <div className="container-page">
        <div className="text-center">
          <span className="eyebrow">FAQs</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <FAQ />
        </div>
      </div>
    </section>
  </>
);

export default Contact;
