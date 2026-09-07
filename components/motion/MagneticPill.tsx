"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

interface MagneticPillProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
  maxDistance?: number; // max translation in px (default 4)
  onClick?: (e: React.MouseEvent<any>) => void;
}

export default function MagneticPill({
  href,
  children,
  className = "",
  isExternal = false,
  maxDistance = 4,
  onClick,
}: MagneticPillProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    setPosition({
      x: deltaX * maxDistance,
      y: deltaY * maxDistance,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const dynamicStyle: React.CSSProperties = prefersReducedMotion
    ? {}
    : {
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered
          ? "transform 150ms cubic-bezier(0.16, 1, 0.3, 1)"
          : "transform 450ms cubic-bezier(0.16, 1, 0.3, 1)",
      };

  const combinedClassName = `${className} active:scale-[0.98] select-none`;

  if (isExternal) {
    return (
      <a
        ref={buttonRef}
        href={href}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={dynamicStyle}
        className={combinedClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      ref={buttonRef}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={dynamicStyle}
      className={combinedClassName}
    >
      {children}
    </Link>
  );
}
