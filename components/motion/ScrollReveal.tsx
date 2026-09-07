"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
  duration?: number; // in ms (default 500)
  threshold?: number;
  offset?: number; // translateY distance in px (default 16)
  scale?: number; // initial scale (default 1)
  as?: React.ElementType;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 500,
  threshold = 0.15,
  offset = 16,
  scale = 1,
  as: Component = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    if (mediaQuery.matches) {
      setIsVisible(true);
      return () => mediaQuery.removeEventListener("change", handleMotionChange);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, [threshold]);

  const initialTransform =
    scale !== 1 && offset !== 0
      ? `translateY(${offset}px) scale(${scale})`
      : scale !== 1
      ? `scale(${scale})`
      : offset !== 0
      ? `translateY(${offset}px)`
      : "none";

  const style: React.CSSProperties = prefersReducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : initialTransform,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      };

  return (
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
}
