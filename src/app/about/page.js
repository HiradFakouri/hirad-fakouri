"use client";

import Link from "next/link";
import { ScrollReveal, GitHubIcon, LinkedInIcon, ArrowRightIcon } from "../components/site/ui";

const FACTS = [
  { label: "Based in", value: "Glasgow, Scotland" },
  { label: "Studying", value: "Computing Science, University of Glasgow (2nd year)" },
  { label: "Team", value: "UGRacing Driverless — Software Engineer" },
  { label: "Also", value: "Treasurer, Glasgow University Persian Society" },
  { label: "Languages", value: "English, Persian (Farsi)" },
];

function Fact({ label, value }) {
  return (
    <div className="py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <dt className="text-xs uppercase tracking-widest text-zinc-600 mb-1.5">{label}</dt>
      <dd className="text-sm text-zinc-300">{value}</dd>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative pt-32 pb-24 max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">About</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12 max-w-2xl leading-tight">
            I build software that has to actually work.
          </h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-14">
          <div className="space-y-6 max-w-2xl">
            <ScrollReveal delay={0.06}>
              <p className="text-lg text-zinc-200 leading-8">
                I&apos;m Hirad — a second-year Computing Science student at the University of
                Glasgow. Most of what I know I&apos;ve learned by building things that had a real
                deadline and someone on the other end depending on them, which tends to teach you
                different lessons than coursework does.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <p className="text-base text-zinc-400 leading-8">
                A lot of my time goes to{" "}
                <span className="text-zinc-200 font-medium">UGRacing Driverless</span>, the
                university&apos;s autonomous Formula Student team, where I work as a software
                engineer on path planning and velocity profiling in Python and ROS2. It&apos;s the
                kind of problem I find genuinely satisfying: the car doesn&apos;t care how elegant
                your code is, it either takes the corner at the right speed or it doesn&apos;t.
                Working against real physics and real hardware — tyre grip, downforce, sensor noise,
                latency — has made me a considerably more careful engineer than I was a year ago.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <p className="text-base text-zinc-400 leading-8">
                Alongside that, I do freelance web and software development. In practice that means
                building AI-powered automation tools for small UK service businesses — the kind of
                company where the owner is on a job site all day and the admin piles up in the
                evening. Missed WhatsApp enquiries, invoices retyped by hand, appointment reminders
                nobody has time to send. The interesting part isn&apos;t the AI; it&apos;s working
                out which twenty minutes of someone&apos;s day is worth automating, and then
                building something reliable enough that they actually trust it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.24}>
              <p className="text-base text-zinc-400 leading-8">
                Outside the technical work, I&apos;m Treasurer of the Glasgow University Persian
                Society, which is a nice counterweight to sitting in front of a terminal — it
                involves budgets, events, and a fair amount of persuading people to commit to
                things. I grew up between two languages and speak English and Persian, and
                I&apos;ve found that being used to switching contexts helps more in engineering
                than you&apos;d expect.
              </p>
            </ScrollReveal>

            {/* TODO: If you want more here — specific interests, hobbies, what you're currently
                learning, or where you want to take your career — add a paragraph in this spot. */}

            <ScrollReveal delay={0.3}>
              <p className="text-base text-zinc-400 leading-8">
                What I&apos;m most drawn to sits at the intersection of real-time systems, AI
                agents, and tools that other people rely on. If that overlaps with something
                you&apos;re working on, I&apos;d be glad to hear about it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.36}>
              <div className="flex flex-wrap items-center gap-5 pt-6">
                <a
                  href="mailto:hiradfakouri@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition-opacity hover:opacity-90"
                  style={{ background: "var(--accent)", boxShadow: "0 0 24px rgba(99,102,241,0.3)" }}
                >
                  Get in touch
                </a>
                <a href="/cv.pdf" download className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Download CV
                </a>
                <div className="flex items-center gap-4">
                  <a href="https://github.com/hiradfakouri" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="GitHub">
                    <GitHubIcon size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/hirad-fakouri-78ba032b2/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="LinkedIn">
                    <LinkedInIcon size={18} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.14}>
            <aside className="lg:sticky lg:top-28">
              <div
                className="rounded-2xl border p-6"
                style={{ background: "var(--surface)", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <dl>
                  {FACTS.map((fact) => (
                    <Fact key={fact.label} {...fact} />
                  ))}
                </dl>
                <div className="pt-5 space-y-3">
                  <Link
                    href="/client-work"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
                  >
                    Client work <ArrowRightIcon size={13} />
                  </Link>
                  <Link
                    href="/ai-automation"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
                  >
                    AI automation work <ArrowRightIcon size={13} />
                  </Link>
                </div>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
