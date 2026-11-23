import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { WAITLIST_URL } from "@/data";

/** Primary call to action: opens the waitlist form in a new tab. */
export const JoinWaitlistButton: React.FC<{
  className?: string;
  label?: string;
  withIcon?: boolean;
}> = ({ className, label = "Join waitlist", withIcon = true }) => (
  <a
    href={WAITLIST_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={cn("btn btn-primary", className)}
  >
    {label}
    {withIcon && <ArrowRight className="size-4" />}
  </a>
);
