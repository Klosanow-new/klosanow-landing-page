import React from "react";
import type { Metadata } from "next";
import { sections } from "@/data";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What personal information Klosanow collects and how we use it.",
};

const PrivacyPage: React.FC = () => (
  <LegalPage
    eyebrow="Legal"
    title="Privacy Policy"
    sections={sections.map(({ title, paragraphs }) => ({
      title,
      paragraphs: paragraphs.map((para, i) => (
        // Content is authored in src/data (a static mailto link), not user input.
        <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
      )),
    }))}
  />
);

export default PrivacyPage;
