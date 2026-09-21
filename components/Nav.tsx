"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDrawer = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-get-started", {
          detail: { focus: "Leak Audit" },
        })
      );
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "border-b border-line/60 bg-cream/85 backdrop-blur-md py-3.5"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:font-mono focus:text-xs focus:font-semibold focus:text-cream focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-85"
          aria-label="Landora Home"
        >
          <img
            src="/landora-mark.svg"
            alt="Landora mark"
            width={28}
            height={28}
            className="h-7 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105"
          />
          <span className="font-display text-2xl font-medium tracking-tight text-ink">
            Landora
          </span>
        </Link>

        <nav className="flex items-center gap-5 sm:gap-7">
          <Link
            href="#audit"
            className="hidden font-mono text-xs font-medium uppercase tracking-[0.15em] text-ink-soft/80 transition-colors duration-300 hover:text-ink md:inline-block"
          >
            The Audit
          </Link>
          <Link
            href="#services"
            className="hidden font-mono text-xs font-medium uppercase tracking-[0.15em] text-ink-soft/80 transition-colors duration-300 hover:text-ink sm:inline-block"
          >
            Services
          </Link>
          <Link
            href="/demos"
            className="hidden font-mono text-xs font-medium uppercase tracking-[0.15em] text-ink-soft/80 transition-colors duration-300 hover:text-ink sm:inline-block"
          >
            Demos
          </Link>
          <button
            type="button"
            onClick={openDrawer}
            className="rounded-full border border-ink/80 px-5 py-2 text-xs font-semibold tracking-tight text-ink transition-all duration-300 ease-out hover:bg-ink hover:text-cream cursor-pointer"
          >
            Request Audit
          </button>
        </nav>
      </div>
    </header>
  );
}
