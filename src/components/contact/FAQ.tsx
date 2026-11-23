import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data";

export const FAQ: React.FC = () => (
  <Accordion type="single" collapsible defaultValue="item-1" className="space-y-3">
    {faqItems.map(({ title, text }, i) => (
      <AccordionItem
        key={title}
        value={`item-${i + 1}`}
        className="rounded-2xl border-0 bg-white px-6 shadow-card ring-1 ring-ink-100 data-[state=open]:ring-brand-200"
      >
        <AccordionTrigger className="cursor-pointer py-5 text-base font-bold text-ink-900 hover:no-underline">
          {title.trim()}
        </AccordionTrigger>
        <AccordionContent className="pb-5">
          <p className="text-[15px] leading-relaxed text-ink-500 whitespace-pre-line">
            {text}
          </p>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
