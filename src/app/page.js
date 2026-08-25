"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ALL_PROJECTS, HIGHLIGHT_SLUGS, SKILLS } from "./data/projects";
import {
  ScrollReveal,
  SectionHeading,
  GitHubIcon,
  LinkedInIcon,
  ArrowRightIcon,
} from "./components/site/ui";

const TYPING_PHRASES = [
  "Building autonomous racing systems.",
  "Shipping production web software.",
  "Building AI tools for real businesses.",
];

const HIGHLIGHTS = HIGHLIGHT_SLUGS.map((slug) => {
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
  return {
    ...project,
    href: ["leadqual", "docuparse", "bookflow", "askyourdocs", "opspulse"].includes(slug)
      ? "/ai-automation"
      : "/client-work",
  };
});

function useTyping(phrases, typeSpeed = 70, deleteSpeed = 38, pause = 2200) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const phrase = phrases[idx];
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, pause);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < phrase.length) setText(phrase.slice(0, text.length + 1));
        else setPaused(true);
      } else if (text.length > 0) {
        setText(text.slice(0, -1));
      } else {
        setDeleting(false);
        setIdx((i) => (i + 1) % phrases.length);
      }
    }, deleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(t);
  }, [text, deleting, paused, idx, phrases, typeSpeed, deleteSpeed, pause]);

  return text;
}

function Hero() {
  const typedText = useTyping(TYPING_PHRASES);

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(99,102,241,0.13) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-5xl mx-auto px-6 w-full pt-28 pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-3xl"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-zinc-400 tracking-widest uppercase">
              Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-5"
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } } }}
          >
            Hirad Fakouri
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base text-zinc-400 mb-10 leading-relaxed"
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            Computing Science · University of Glasgow&nbsp;&nbsp;·&nbsp;&nbsp;Software Engineer · UGRacing Driverless
          </motion.p>

          <motion.div
            className="h-9 mb-12"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } } }}
          >
            <p className="text-xl sm:text-2xl font-light text-white/75">
              {typedText}
              <span
                className="inline-block w-[2px] h-[1.15em] ml-[2px] bg-indigo-400 align-middle rounded-sm"
                style={{ animation: "cursor-blink 1s step-end infinite" }}
              />
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-5"
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--accent)", boxShadow: "0 0 24px rgba(99,102,241,0.35)" }}
            >
              Download CV
            </a>
            <div className="flex items-center gap-5">
              <a href="https://github.com/hiradfakouri" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="GitHub">
                <GitHubIcon size={22} />
              </a>
              <a href="https://www.linkedin.com/in/hirad-fakouri-78ba032b2/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedInIcon size={22} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function HighlightCard({ project }) {
  return (
    <Link href={project.href} className="block h-full">
      <motion.article
        className="flex flex-col gap-4 rounded-xl border p-6 h-full"
        style={{ background: "var(--surface)", borderColor: "rgba(255,255,255,0.07)" }}
        whileHover={{
          y: -4,
          borderColor: "rgba(129,140,248,0.3)",
          boxShadow: "0 0 0 1px rgba(129,140,248,0.18), 0 20px 48px rgba(0,0,0,0.55)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <h3 className="font-semibold text-white text-base leading-tight">{project.name}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed flex-1">{project.headline}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md font-medium"
              style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </motion.article>
    </Link>
  );
}

function WorkGateway({ href, title, blurb }) {
  return (
    <Link href={href} className="block">
      <motion.div
        className="rounded-xl border p-7 h-full"
        style={{ background: "var(--surface)", borderColor: "rgba(255,255,255,0.07)" }}
        whileHover={{ y: -3, borderColor: "rgba(129,140,248,0.3)" }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          {title}
          <span style={{ color: "var(--accent)" }}><ArrowRightIcon /></span>
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{blurb}</p>
      </motion.div>
    </Link>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="py-24 max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading label="Selected Work" />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {HIGHLIGHTS.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.07}>
              <HighlightCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ScrollReveal delay={0.05}>
            <WorkGateway
              href="/ai-automation"
              title="AI Automation"
              blurb="Five AI tools built for small UK service businesses — WhatsApp lead qualification, document parsing, automated booking, document Q&A, and ops reporting. Full case studies with demo videos."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <WorkGateway
              href="/client-work"
              title="Client Work"
              blurb="Software built for real clients and teams — a CRM for a UK trades business, an AI admin system for a private medical practice, and autonomous racing systems for UGRacing Driverless."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading label="Tech Stack" />
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg text-sm font-medium border"
                style={{ background: "var(--surface)", borderColor: "rgba(255,255,255,0.07)", color: "#d4d4d8" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section id="contact" className="py-24 max-w-5xl mx-auto px-6 scroll-mt-24">
        <ScrollReveal>
          <SectionHeading label="Contact" />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="max-w-lg">
            <p className="text-zinc-400 mb-8 text-base leading-relaxed">
              Open to interesting roles, projects, and conversations. Drop me a line.
            </p>
            <div className="space-y-5">
              <a
                href="mailto:hiradfakouri@gmail.com"
                className="group flex items-center gap-3 text-white hover:text-indigo-400 transition-colors"
              >
                <span className="text-zinc-500 group-hover:text-indigo-400 transition-colors font-mono text-sm" aria-hidden="true">@</span>
                <span className="font-medium">hiradfakouri@gmail.com</span>
              </a>
              <div className="flex items-center gap-6 pt-1">
                <a href="https://github.com/hiradfakouri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
                  <GitHubIcon size={15} />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/hirad-fakouri-78ba032b2/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
                  <LinkedInIcon size={15} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
