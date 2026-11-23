import { termsSection } from "@/data";
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

function wrapPrivacyPolicy(text: string) {
  const regex = /PRIVACY POLICY/;
  const parts = text.split(regex);
  const matches = text.match(regex);

  if (!matches) return text;

  return parts.reduce((acc: React.ReactNode[], part, i) => {
    acc.push(part);
    if (i < matches.length) {
      acc.push(
        <Link
          key={i}
          href="/privacy"
          className="font-semibold text-brand-600 underline"
        >
          {matches[i]}
        </Link>,
      );
    }
    return acc;
  }, []);
}

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of Klosanow.",
};

const TermsPage: React.FC = () => (
  <LegalPage
    eyebrow="Legal"
    title="Terms of Use"
    sections={termsSection.map(({ title, paragraphs }) => ({
      title,
      paragraphs: paragraphs.map((para, i) => <p key={i}>{wrapPrivacyPolicy(para)}</p>),
    }))}
  />
);

export default TermsPage;
