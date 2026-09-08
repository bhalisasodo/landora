"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpPriceProps {
  target?: number;
  prefix?: string;
  className?: string;
  duration?: number;
}

export default function CountUpPrice({
  target = 1650,
  prefix = "R",
  className = "",
  duration = 1200,
}: CountUpPriceProps) {
  const isInteger = Number.isInteger(target);
  const formatVal = (val: number) =>
    isInteger ? Math.round(val).toString() : val.toFixed(2);

  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState<string>(formatVal(target));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setDisplayValue(formatVal(target));
      return;
    }

    // Set initial display before animation starts
    setDisplayValue(isInteger ? "0" : "0.00");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Apple-style cubic deceleration curve: 1 - (1 - t)^3
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = easeOut * target;

            setDisplayValue(formatVal(currentValue));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(formatVal(target));
            }
          };

          requestAnimationFrame(animate);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration, isInteger]);

  return (
    <span ref={ref} className={className}>
      <span className="font-sans text-[0.75em] mr-0.5 opacity-90">{prefix}</span>
      {displayValue}
    </span>
  );
}
