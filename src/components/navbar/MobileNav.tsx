"use client";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { APP_URL, MobileLinks } from "@/data";
import { NavLinks } from "./NavLinks";
import { Logo } from "../ui/Logo";
import { JoinWaitlistButton } from "../ui/JoinWaitlistButton";

export const MobileNav: React.FC<{
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ navIsOpen, setNavIsOpen }) => {
  // Lock page scroll and allow Escape to close while the menu is open.
  useEffect(() => {
    if (!navIsOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setNavIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [navIsOpen, setNavIsOpen]);

  const close = () => setNavIsOpen(false);

  return (
    <AnimatePresence>
      {navIsOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <motion.button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.div
            className="absolute inset-x-3 top-3 rounded-3xl bg-white p-5 shadow-lift"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex size-10 items-center justify-center rounded-xl text-ink-700 ring-1 ring-ink-200"
                onClick={close}
              >
                <X className="size-5" />
              </button>
            </div>
            <ul className="mt-6 flex flex-col gap-1">
              {MobileLinks.map(({ title, href }) => (
                <li key={href}>
                  <NavLinks
                    href={href}
                    handleNavClick={close}
                    className="block rounded-xl px-4 py-3 text-base"
                  >
                    {title}
                  </NavLinks>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-2 border-t border-ink-100 pt-6">
              <JoinWaitlistButton className="w-full" />
              <a href={`${APP_URL}/sign-in`} className="btn btn-ghost w-full">
                Log in
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
