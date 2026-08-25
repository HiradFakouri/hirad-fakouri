"use client";

import { FREELANCE_PROJECTS } from "../data/projects";
import { ScrollReveal } from "../components/site/ui";
import { CaseStudyCard } from "../components/site/CaseStudyCard";

export default function AiAutomationPage() {
  return (
    <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">
      <ScrollReveal>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
          AI Automation
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={0.06}>
        <p className="text-base text-zinc-400 leading-7 max-w-2xl mb-16">
          AI tools built for real small UK service businesses — WhatsApp lead qualification,
          document parsing, automated booking and reminders, document Q&amp;A, and weekly ops
          reporting. Each one solves a specific, expensive admin problem rather than being a
          general-purpose chatbot.
        </p>
      </ScrollReveal>

      <div className="space-y-6">
        {FREELANCE_PROJECTS.map((project, i) => (
          <CaseStudyCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </main>
  );
}
