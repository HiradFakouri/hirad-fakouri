"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// ─── Data ──────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    title: "AI Admin Automation Tool",
    description:
      "FastAPI-powered automation tooling that streamlines administrative workflows using AI-driven processing pipelines.",
    tech: ["Python", "FastAPI"],
    github: null,
  },
  {
    title: "SleePT",
    subtitle: "AI Chat Agent",
    description:
      "A comedic anti-productivity AI chat app. SleePT acts as a sarcastic, passive-aggressive life coach that comforts you into procrastinating — built on WebSockets with real-time streaming responses.",
    tech: ["Next.js", "Express.js", "WebSockets", "MongoDB", "OpenAI API"],
    github: "https://github.com/HiradFakouri/SleePT",
  },
  {
    title: "GUI Image Filtering App",
    description:
      "Web-based image filtering tool with a Python backend, supporting real-time transformations powered by Pillow.",
    tech: ["Next.js", "Express.js", "Python Pillow"],
    github: "https://github.com/HiradFakouri/filter-webGUI",
  },
  {
    title: "Kobuki Driverless Robot",
    description:
      "Path planning and autonomous navigation systems for the Kobuki robot platform, built for the UGRacing Driverless team.",
    tech: ["Python", "ROS2"],
    github: null,
  },
];

const FREELANCE_PROJECTS = [
  {
    slug: "leadqual",
    name: "LeadQual",
    headline: "Never miss a lead again",
    problem:
      "Trades and service businesses lose jobs simply because they can't reply to WhatsApp messages fast enough while out on a job. LeadQual sits on the business's WhatsApp number, has a natural conversation with anyone who messages in, and captures a fully qualified lead — job type, urgency, location, contact details — before a human even sees it. Urgent jobs get flagged immediately; the business owner gets pinged the moment a real lead comes through.",
    bullets: [
      "Customer messages the business's WhatsApp number",
      "AI has a natural conversation, checking real-time service availability and pricing rather than guessing",
      "Structured lead (job type, urgency, location, contact) is automatically logged",
      "Owner gets an instant notification for urgent jobs",
      "Every lead is visible on a live dashboard, sorted by urgency",
    ],
    stack: ["FastAPI", "Claude API", "Twilio (WhatsApp)", "Supabase", "Next.js"],
  },
  {
    slug: "docuparse",
    name: "DocuParse",
    headline: "Turn messy paperwork into clean data",
    problem:
      "Small businesses lose hours retyping supplier invoices, receipts, and handwritten job sheets into spreadsheets by hand. DocuParse reads a photo or PDF directly, extracts every line item into structured data, flags anything it's not confident about for a quick human check, and generates a clean, professional PDF quote or CSV export in seconds.",
    bullets: [
      "Upload a photo or PDF of any invoice, receipt, or price list",
      "AI reads it directly and extracts line items — description, quantity, price, total",
      "Low-confidence items are flagged for review rather than silently guessed",
      "Review and correct anything before confirming",
      "Generate a polished PDF quote or export to CSV instantly",
    ],
    stack: ["FastAPI", "Claude API (vision)", "Supabase", "Next.js"],
  },
  {
    slug: "bookflow",
    name: "BookFlow",
    headline: "Booking and reminders that run themselves",
    problem:
      "No-shows are pure lost revenue for any appointment-based business. BookFlow gives customers a simple booking page, sends an instant confirmation, and automatically follows up with reminders before the appointment — cutting no-shows without anyone having to remember to chase people manually.",
    bullets: [
      "Customer books a service and time slot on a simple public booking page",
      "Instant confirmation sent via WhatsApp/SMS",
      "Automated reminders fire before the appointment, no manual work required",
      "No-shows are tracked, with automatic win-back follow-up messages",
      "Owner dashboard shows upcoming bookings and no-show rates at a glance",
    ],
    stack: ["FastAPI", "APScheduler", "Twilio", "Supabase", "Next.js"],
  },
  {
    slug: "askyourdocs",
    name: "AskYourDocs",
    headline: "Answers sourced only from your own documents",
    problem:
      "Business owners and staff waste time digging through policy documents, price lists, and FAQs to answer simple questions. AskYourDocs lets a business upload their own documents and get a chat interface that answers questions using only that material — and, critically, it says so honestly when a question falls outside what's been uploaded, rather than guessing.",
    bullets: [
      "Upload policies, price lists, FAQs, or manuals",
      "Ask a question in plain English",
      "Answers are retrieved directly from the uploaded documents, with the source cited",
      "If the answer isn't in the documents, it says so clearly instead of making something up",
    ],
    stack: ["FastAPI", "Claude API", "Voyage AI (embeddings)", "Supabase (pgvector)", "Next.js"],
  },
  {
    slug: "opspulse",
    name: "OpsPulse",
    headline: "One dashboard that tells you what actually needs attention",
    problem:
      "Business owners juggling leads, bookings, and revenue across separate tools end up manually piecing together what's actually going on. OpsPulse pulls it all into one dashboard and writes a short, plain-English weekly summary — highlighting what changed and what's worth acting on, not just restating numbers.",
    bullets: [
      "Pulls data from leads, bookings, and revenue automatically",
      "Computes week-over-week changes",
      "AI generates a short summary that interprets the data rather than just listing it — including a specific suggested action where relevant",
      "Refreshable on demand",
    ],
    stack: ["FastAPI", "Claude API", "Supabase", "Next.js"],
  },
];

const SKILLS = [
  "Python", "JavaScript", "Node.js", "Express.js", "Next.js",
  "FastAPI", "MongoDB", "PostgreSQL", "ROS2", "Git",
  "Tailwind CSS", "SQL", "C", "Rust",
];

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "AI Work", href: "#ai-automation" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const TYPING_PHRASES = [
  "Building autonomous racing systems.",
  "Shipping production web software.",
  "Experimenting with AI agents.",
  "Building AI tools for real businesses.",
];

// ─── Hooks ─────────────────────────────────────────────────────────────────

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
        if (text.length < phrase.length) {
          setText(phrase.slice(0, text.length + 1));
        } else {
          setPaused(true);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setIdx((i) => (i + 1) % phrases.length);
        }
      }
    }, deleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(t);
  }, [text, deleting, paused, idx, phrases, typeSpeed, deleteSpeed, pause]);

  return text;
}

// ─── Atoms ─────────────────────────────────────────────────────────────────

function ScrollReveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function GitHubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ArrowDownIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    if (href === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(8,8,8,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-bold text-white tracking-widest"
          onClick={(e) => scrollTo(e, "#")}
        >
          HF
        </a>
        <nav className="hidden sm:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              onClick={(e) => scrollTo(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

// ─── Sections ──────────────────────────────────────────────────────────────

function SectionHeading({ label }) {
  return (
    <div className="flex items-center gap-5 mb-14">
      <h2 className="text-2xl font-bold text-white shrink-0">{label}</h2>
      <div className="h-px flex-1" style={{ background: "var(--border)" }} />
    </div>
  );
}

function HeroSection() {
  const typedText = useTyping(TYPING_PHRASES);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(99,102,241,0.13) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 w-full pt-24 pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-3xl"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-zinc-400 tracking-widest uppercase">
              Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-5"
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
            }}
          >
            Hirad Fakouri
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base text-zinc-400 mb-10 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            Computing Science · University of Glasgow  ·  Software Engineer · UGRacing Driverless
          </motion.p>

          <motion.div
            className="h-9 mb-12"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
            }}
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
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:opacity-90"
              style={{
                background: "var(--accent)",
                boxShadow: "0 0 24px rgba(99,102,241,0.35)",
              }}
            >
              Download CV
            </a>
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/hiradfakouri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <GitHubIcon size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/hirad-fakouri-78ba032b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={22} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.div
          className="text-zinc-600"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDownIcon size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
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
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2.5 flex-wrap">
          <h3 className="font-semibold text-white text-base leading-tight">{project.title}</h3>
          {project.badge && (
            <span
              className="text-xs px-2 py-0.5 rounded-full border font-medium"
              style={{
                color: "#fbbf24",
                borderColor: "rgba(251,191,36,0.3)",
                background: "rgba(251,191,36,0.08)",
              }}
            >
              {project.badge}
            </span>
          )}
          {project.subtitle && (
            <span className="text-xs text-zinc-500">{project.subtitle}</span>
          )}
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-zinc-500 hover:text-white transition-colors duration-200 mt-0.5"
            aria-label={`${project.title} on GitHub`}
          >
            <GitHubIcon size={17} />
          </a>
        )}
      </div>

      <p className="text-sm text-zinc-400 leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
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
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-28 max-w-5xl mx-auto px-6">
      <ScrollReveal>
        <SectionHeading label="Selected Work" />
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.07}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// ─── AI Automation ─────────────────────────────────────────────────────────

function ProjectVideo({ slug }) {
  const src = `/projects/${slug}/demo.mp4`;
  const poster = `/projects/${slug}/screenshot-1.png`;
  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{ background: "#000", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <video
        className="w-full block"
        controls
        muted
        playsInline
        preload="none"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

function ProjectScreenshots({ slug }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className="rounded-lg overflow-hidden aspect-video"
          style={{ background: "var(--surface-2)" }}
        >
          <img
            src={`/projects/${slug}/screenshot-${n}.png`}
            alt={`Screenshot ${n}`}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>
      ))}
    </div>
  );
}

function AutomationCaseStudy({ project, index }) {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollReveal delay={0.05}>
      <article
        className="rounded-2xl border overflow-hidden"
        style={{ background: "var(--surface)", borderColor: "rgba(255,255,255,0.07)" }}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-xs font-mono text-zinc-600 shrink-0">0{index + 1}</span>
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            <span className="text-zinc-500 text-sm">— {project.headline}</span>
          </div>
        </div>

        {/* Body: copy + video */}
        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Copy */}
          <div className="space-y-6">
            <p className="text-sm text-zinc-300 leading-7">{project.problem}</p>
            <ul className="space-y-3">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                  <span
                    className="mt-2 w-1 h-1 rounded-full shrink-0"
                    style={{ background: "var(--accent)" }}
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Video */}
          <ProjectVideo slug={project.slug} />
        </div>

        {/* Screenshots */}
        <div className="px-8 pb-6">
          <ProjectScreenshots slug={project.slug} />
        </div>

        {/* Footer */}
        <div
          className="px-8 py-5 border-t flex flex-wrap items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs text-zinc-600">
            Built with:{" "}
            <span className="text-zinc-500">{project.stack.join(", ")}</span>
          </p>
          <a
            href="#contact"
            className="text-xs text-zinc-500 hover:text-indigo-400 transition-colors duration-200"
            onClick={scrollToContact}
          >
            Want to see it live? Get in touch →
          </a>
        </div>
      </article>
    </ScrollReveal>
  );
}

function AutomationSection() {
  return (
    <section id="ai-automation" className="py-28 max-w-5xl mx-auto px-6">
      <ScrollReveal>
        <SectionHeading label="AI Automation" />
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <p className="text-sm text-zinc-500 mb-12 -mt-8 max-w-xl leading-relaxed">
          Freelance AI tools built for real small businesses — WhatsApp lead qualification,
          document parsing, automated booking, document Q&A, and ops dashboards.
        </p>
      </ScrollReveal>
      <div className="space-y-6">
        {FREELANCE_PROJECTS.map((project, i) => (
          <AutomationCaseStudy key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

// ─── Remaining Sections ─────────────────────────────────────────────────────

function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-28 max-w-5xl mx-auto px-6">
      <ScrollReveal>
        <SectionHeading label="Tech Stack" />
      </ScrollReveal>
      <motion.div
        ref={ref}
        className="flex flex-wrap gap-3"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.045 } } }}
      >
        {SKILLS.map((skill) => (
          <motion.span
            key={skill}
            className="px-4 py-2 rounded-lg text-sm font-medium border cursor-default"
            style={{
              background: "var(--surface)",
              borderColor: "rgba(255,255,255,0.07)",
              color: "#d4d4d8",
            }}
            variants={{
              hidden: { opacity: 0, scale: 0.85, y: 8 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
            }}
            whileHover={{
              borderColor: "rgba(129,140,248,0.4)",
              color: "var(--accent)",
              background: "var(--accent-dim)",
              transition: { duration: 0.15 },
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-28 max-w-5xl mx-auto px-6">
      <ScrollReveal>
        <SectionHeading label="About" />
      </ScrollReveal>
      <div className="max-w-2xl space-y-5">
        <ScrollReveal delay={0.1}>
          <p className="text-base text-zinc-300 leading-7">
            Computing Science student at the University of Glasgow.
            I build software that has to actually work — not demos, not tutorials.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.18}>
          <p className="text-base text-zinc-300 leading-7">
            Software Engineer at{" "}
            <span className="text-white font-medium">UGRacing Driverless</span>, building path
            planning and navigation systems for an autonomous Formula Student race car. On the side,
            I build AI automation tools for small businesses — lead qualification, document parsing,
            booking systems, and ops dashboards.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.26}>
          <p className="text-base text-zinc-300 leading-7">
            Most interested in the intersection of real-time systems, AI agents, and developer
            tooling. Currently working across autonomous navigation, LLM-powered applications, and
            full-stack product development.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-28 max-w-5xl mx-auto px-6">
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
              className="group flex items-center gap-3 text-white hover:text-indigo-400 transition-colors duration-200"
            >
              <span
                className="text-zinc-500 group-hover:text-indigo-400 transition-colors duration-200 font-mono text-sm"
                aria-hidden="true"
              >
                @
              </span>
              <span className="font-medium">hiradfakouri@gmail.com</span>
            </a>
            <div className="flex items-center gap-6 pt-1">
              <a
                href="https://github.com/hiradfakouri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
              >
                <GitHubIcon size={15} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hirad-fakouri-78ba032b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
              >
                <LinkedInIcon size={15} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between text-zinc-500 text-sm">
        <span>Hirad Fakouri</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <HeroSection />
        <ProjectsSection />
        <AutomationSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </motion.main>
      <Footer />
    </>
  );
}
