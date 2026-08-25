"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ScrollReveal, QuoteIcon } from "./ui";
import { Lightbox, useLightbox } from "./Lightbox";

function CaseStudyVideo({ slug }) {
  return (
    <div
      className="rounded-xl overflow-hidden border self-start"
      style={{ background: "#000", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <video
        className="w-full block"
        controls
        muted
        playsInline
        preload="none"
        poster={`/projects/${slug}/screenshot-1.png`}
      >
        <source src={`/projects/${slug}/demo.mp4`} type="video/mp4" />
      </video>
    </div>
  );
}

function ScreenshotGrid({ images, onOpen, columns }) {
  return (
    <div className={`grid gap-3 ${columns}`}>
      {images.map((image, i) => (
        <button
          key={image.src}
          type="button"
          onClick={() => onOpen(i)}
          aria-label={`Open ${image.alt} full screen`}
          className="group relative rounded-lg overflow-hidden aspect-video border transition-colors"
          style={{ background: "var(--surface-2)", borderColor: "rgba(255,255,255,0.06)" }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ background: "rgba(129,140,248,0.12)" }}
          />
        </button>
      ))}
    </div>
  );
}

function Testimonial({ testimonial }) {
  return (
    <div className="px-8 pb-6">
      <div
        className="rounded-xl p-6 border"
        style={{ background: "rgba(129,140,248,0.04)", borderColor: "rgba(129,140,248,0.15)" }}
      >
        <div className="mb-4" style={{ color: "var(--accent)" }}>
          <QuoteIcon />
        </div>
        <blockquote>
          <p className="text-sm text-zinc-300 leading-7 mb-4">{testimonial.text}</p>
          <footer className="text-xs text-zinc-500 font-medium">— {testimonial.author}</footer>
        </blockquote>
      </div>
    </div>
  );
}

export function CaseStudyCard({ project, index }) {
  const lightbox = useLightbox();

  const images = useMemo(
    () =>
      Array.from({ length: project.screenshots }, (_, i) => ({
        src: `/projects/${project.slug}/screenshot-${i + 1}.png`,
        alt: `${project.name} screenshot ${i + 1}`,
      })),
    [project.slug, project.name, project.screenshots]
  );

  const hasVideo = project.video;

  return (
    <>
      <ScrollReveal delay={0.05}>
        <article
          className="rounded-2xl border overflow-hidden"
          style={{ background: "var(--surface)", borderColor: "rgba(255,255,255,0.07)" }}
        >
          <div className="px-8 pt-8 pb-6 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-xs font-mono text-zinc-600 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <span className="text-zinc-500 text-sm">— {project.headline}</span>
            </div>
          </div>

          <div className={`p-8 ${hasVideo ? "grid grid-cols-1 lg:grid-cols-2 gap-10" : ""}`}>
            <div className={`space-y-6 ${hasVideo ? "" : "max-w-3xl"}`}>
              <p className="text-sm text-zinc-300 leading-7">{project.problem}</p>
              <ul className="space-y-3">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                    <span
                      className="mt-2 w-1 h-1 rounded-full shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            {hasVideo && <CaseStudyVideo slug={project.slug} />}
          </div>

          <div className="px-8 pb-6">
            <ScreenshotGrid
              images={images}
              onOpen={lightbox.open}
              columns={hasVideo ? "grid-cols-3" : "grid-cols-1 sm:grid-cols-3"}
            />
          </div>

          {project.testimonial && <Testimonial testimonial={project.testimonial} />}

          <div
            className="px-8 py-5 border-t flex flex-wrap items-center justify-between gap-4"
            style={{ borderColor: "rgba(255,255,255,0.05)" }}
          >
            <p className="text-xs text-zinc-600">
              Built with: <span className="text-zinc-500">{project.stack.join(", ")}</span>
            </p>
            <Link
              href="/#contact"
              className="text-xs text-zinc-500 hover:text-indigo-400 transition-colors duration-200"
            >
              Want to see it live? Get in touch →
            </Link>
          </div>
        </article>
      </ScrollReveal>

      <Lightbox
        images={images}
        index={lightbox.index}
        onClose={lightbox.close}
        onNavigate={lightbox.navigate}
      />
    </>
  );
}
