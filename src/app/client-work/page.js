"use client";

import { CLIENT_PROJECTS } from "../data/projects";
import { ScrollReveal } from "../components/site/ui";
import { CaseStudyCard } from "../components/site/CaseStudyCard";

export default function ClientWorkPage() {
  return (
    <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">
      <ScrollReveal>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
          Client Work
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={0.06}>
        <p className="text-base text-zinc-400 leading-7 max-w-2xl mb-16">
          Software built end-to-end for real clients — a CRM for a UK construction and trades
          business, and an AI-powered admin system for a private medical practice. Both were built
          from initial requirements through to a deployed, working product.
        </p>
      </ScrollReveal>

      <div className="space-y-6">
        {CLIENT_PROJECTS.map((project, i) => (
          <CaseStudyCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </main>
  );
}
