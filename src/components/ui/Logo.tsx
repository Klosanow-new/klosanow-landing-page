import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LogoImg } from "@/assets";
import { cn } from "@/lib/utils";

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <Link href="/" aria-label="Klosanow home" className={cn("inline-flex", className)}>
    <Image
      src={LogoImg}
      alt="Klosanow"
      priority
      className="h-8 w-auto"
      draggable={false}
    />
  </Link>
);
