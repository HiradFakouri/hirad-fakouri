"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { OTHER_PROJECTS } from "../data/projects";
import { ScrollReveal, GitHubIcon } from "../components/site/ui";
import { Lightbox, useLightbox } from "../components/site/Lightbox";

function ProjectCard({ project }) {
  const lightbox = useLightbox();

  const images = useMemo(
    () => project.images.map((src, i) => ({ src, alt: `${project.title} screenshot ${i + 1}` })),
    [project.images, project.title]
  );

  return (
    <>
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
            {project.subtitle && <span className="text-xs text-zinc-500">{project.subtitle}</span>}
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-zinc-500 hover:text-white transition-colors mt-0.5"
              aria-label={`${project.title} on GitHub`}
            >
              <GitHubIcon size={17} />
            </a>
          )}
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed flex-1">{project.description}</p>

        {images.length > 0 && (
          <div className="grid grid-cols-3 gap-2">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => lightbox.open(i)}
                aria-label={`Open ${image.alt} full screen`}
                className="group relative rounded-md overflow-hidden aspect-video border"
                style={{ background: "var(--surface-2)", borderColor: "rgba(255,255,255,0.06)" }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "rgba(129,140,248,0.12)" }}
                />
              </button>
            ))}
          </div>
        )}

        {project.tech.length > 0 && (
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
        )}
      </motion.article>

      <Lightbox
        images={images}
        index={lightbox.index}
        onClose={lightbox.close}
        onNavigate={lightbox.navigate}
      />
    </>
  );
}

export default function OtherProjectsPage() {
  return (
    <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">
      <ScrollReveal>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
          Other Projects
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={0.06}>
        <p className="text-base text-zinc-400 leading-7 max-w-2xl mb-16">
          Smaller builds, team projects, and things made for the fun of it — autonomous racing
          systems for UGRacing Driverless, an anti-productivity chat app, and a handful of tools
          and games from earlier on.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {OTHER_PROJECTS.map((project, i) => (
          <ScrollReveal key={project.title} delay={(i % 2) * 0.07}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}
