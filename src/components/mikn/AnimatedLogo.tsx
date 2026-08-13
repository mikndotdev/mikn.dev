"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { logoPaths, logoViewBox } from "@/constants/logoPaths";

const SESSION_KEY = "mikn:logo-intro-played";

const TRACE_DURATION = 1.2;
const TRACE_FADE = 0.4;
const LOGO_FADE = 0.6;
const STROKE_COLOR = "#ff9900";
const STROKE_WIDTH = 20;

interface AnimatedLogoProps {
  src: string;
  alt: string;
  className?: string;
}

export function AnimatedLogo({ src, alt, className }: AnimatedLogoProps) {
  const [runKey, setRunKey] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [reduced, setReduced] = useState(false);

  const startRun = () => {
    setAnimating(true);
    setRunKey((k) => k + 1);
  };

  useEffect(() => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    setReduced(prefersReduced);
    if (prefersReduced) return;

    let played = false;
    try {
      played = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {}
    if (!played) startRun();
  }, []);

  const handleHover = () => {
    if (reduced || animating) return;
    startRun();
  };

  const finishRun = () => {
    setAnimating(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {}
  };

  return (
    <span className={cn("relative inline-block", className)} onMouseEnter={handleHover}>
      {animating ? (
        <motion.img
          key={`logo-${runKey}`}
          src={src}
          alt={alt}
          draggable={false}
          className="block h-full w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: TRACE_DURATION, duration: LOGO_FADE }}
          onAnimationComplete={finishRun}
        />
      ) : (
        <img src={src} alt={alt} draggable={false} className="block h-full w-auto" />
      )}

      {animating && (
        <motion.svg
          key={`trace-${runKey}`}
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox={logoViewBox}
          fill="none"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: TRACE_DURATION + 0.05, duration: TRACE_FADE }}
        >
          {logoPaths.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              stroke={STROKE_COLOR}
              strokeWidth={STROKE_WIDTH}
              strokeLinejoin="round"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: TRACE_DURATION, ease: "easeInOut" }}
            />
          ))}
        </motion.svg>
      )}
    </span>
  );
}
