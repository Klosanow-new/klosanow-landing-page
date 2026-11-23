import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Logo } from "./Logo";
import { authFooter, CONTACT_EMAIL, footerSocialLinks, navFooter } from "@/data";

const linkClass =
  "text-sm text-ink-500 transition-colors hover:text-brand-600";

export const Footer: React.FC = () => (
  <footer className="border-t border-ink-100 bg-ink-50">
    <div className="container-page grid gap-12 py-16 md:grid-cols-12">
      <div className="md:col-span-5">
        <Logo />
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
          Bridging the Gap Between Learners and Tutors
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-brand-600"
        >
          <Mail className="size-4" />
          {CONTACT_EMAIL}
        </a>
      </div>

      <div className="md:col-span-2">
        <h2 className="text-xs font-bold tracking-wider text-ink-900 uppercase">
          Company
        </h2>
        <ul className="mt-4 space-y-3">
          {navFooter.map(({ title, href }) => (
            <li key={href}>
              <Link href={href} className={linkClass}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-2">
        <h2 className="text-xs font-bold tracking-wider text-ink-900 uppercase">
          Account
        </h2>
        <ul className="mt-4 space-y-3">
          {authFooter.map(({ title, href }) => (
            <li key={href}>
              <a href={href} className={linkClass}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-3">
        <h2 className="text-xs font-bold tracking-wider text-ink-900 uppercase">
          Follow us
        </h2>
        <ul className="mt-4 flex gap-2">
          {footerSocialLinks.map(({ url, href, label }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-xl bg-white ring-1 ring-ink-200 transition hover:-translate-y-0.5 hover:ring-brand-300"
              >
                <Image src={url} alt="" width={20} height={20} draggable={false} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="border-t border-ink-100">
      <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink-400 sm:flex-row">
        <p>© {new Date().getFullYear()} Klosanow. All rights reserved.</p>
        <p>Made for tutors and learners across Africa and beyond.</p>
      </div>
    </div>
  </footer>
);
