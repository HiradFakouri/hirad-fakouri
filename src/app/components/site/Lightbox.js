"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function ChevronIcon({ dir }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}

export function Lightbox({ images, index, onClose, onNavigate }) {
  const open = index !== null;
  const count = images.length;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const go = useCallback(
    (delta) => onNavigate((index + delta + count) % count),
    [index, count, onNavigate]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" && count > 1) go(1);
      else if (e.key === "ArrowLeft" && count > 1) go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, count, go, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-10"
          style={{ background: "rgba(4,4,4,0.94)", backdropFilter: "blur(6px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot viewer"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <CloseIcon />
          </button>

          {count > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => { e.stopPropagation(); go(-1); }}
                className="absolute left-3 sm:left-6 p-3 rounded-full text-zinc-400 hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <ChevronIcon dir="left" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => { e.stopPropagation(); go(1); }}
                className="absolute right-3 sm:right-6 p-3 rounded-full text-zinc-400 hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <ChevronIcon dir="right" />
              </button>
            </>
          )}

          <motion.img
            key={images[index].src}
            src={images[index].src}
            alt={images[index].alt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          />

          {count > 1 && (
            <div className="absolute bottom-6 text-xs font-mono text-zinc-500">
              {index + 1} / {count}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export function useLightbox() {
  const [index, setIndex] = useState(null);
  return {
    index,
    open: setIndex,
    close: () => setIndex(null),
    navigate: setIndex,
  };
}
