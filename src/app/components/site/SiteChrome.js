"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../../data/projects";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="text-sm font-bold text-white tracking-widest shrink-0">
          HF
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6 overflow-x-auto">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200 whitespace-nowrap"
                style={{ color: active ? "#fff" : "#a1a1aa" }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-zinc-500 text-sm">
        <span>Hirad Fakouri</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
