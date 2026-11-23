"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/data";
import { cn } from "@/lib/utils";

const normalise = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

export const NavLinks: React.FC<NavLinkProps & { className?: string }> = ({
  children,
  href,
  handleNavClick,
  className,
}) => {
  const pathname = usePathname() || "/";
  const isActive = normalise(pathname) === normalise(href);

  return (
    <Link
      href={href}
      onClick={handleNavClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
        isActive
          ? "bg-brand-50 text-brand-700"
          : "text-ink-600 hover:bg-ink-50 hover:text-ink-900",
        className,
      )}
    >
      {children}
    </Link>
  );
};
