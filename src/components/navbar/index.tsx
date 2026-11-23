"use client";
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { APP_URL, Links } from "@/data";
import { cn } from "@/lib/utils";
import { Logo } from "../ui/Logo";
import { JoinWaitlistButton } from "../ui/JoinWaitlistButton";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";

export const Navbar: React.FC = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "border-b border-ink-100 bg-white/85 shadow-[0_1px_12px_rgb(18_18_36/0.05)] backdrop-blur-lg"
            : "border-b border-transparent bg-white",
        )}
      >
        <nav className="container-page flex h-[72px] items-center justify-between gap-6">
          <Logo />

          <ul className="hidden items-center gap-1 md:flex">
            {Links.map(({ title, href }) => (
              <li key={href}>
                <NavLinks href={href}>{title}</NavLinks>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={`${APP_URL}/sign-in`}
              className="btn h-10 px-4 text-ink-700 hover:bg-ink-50"
            >
              Log in
            </a>
            <JoinWaitlistButton className="h-10 px-5" withIcon={false} />
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={navIsOpen}
            className="inline-flex size-10 items-center justify-center rounded-xl text-ink-700 ring-1 ring-ink-200 transition hover:bg-ink-50 md:hidden"
            onClick={() => setNavIsOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </nav>
      </header>
      {/* Outside <header>: its backdrop-filter would trap a fixed overlay. */}
      <MobileNav navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
    </>
  );
};
