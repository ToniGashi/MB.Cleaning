"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

type PageHeroProps = {
  badge: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  description: string;
  badgeGradient: string;
  badgeTextColor: string;
  badgeBorderColor: string;
  orbColors: [string, string];
};

export default function PageHero({
  badge,
  title,
  titleGradient,
  subtitle,
  description,
  badgeGradient,
  badgeTextColor,
  badgeBorderColor,
  orbColors,
}: PageHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-28 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-10 right-4 sm:top-20 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 ${orbColors[0]} rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse`}
        ></div>
        <div
          className={`absolute bottom-10 left-4 sm:bottom-20 sm:left-10 w-48 h-48 sm:w-96 sm:h-96 ${orbColors[1]} rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse`}
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center mb-12 sm:mb-16 md:mb-20">
        <div className="hero-text inline-block mb-4 sm:mb-6 md:mb-8">
          <span
            className={`px-3 py-1.5 sm:px-5 sm:py-2.5 ${badgeGradient} ${badgeTextColor} rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider ${badgeBorderColor} shadow-sm`}
          >
            {badge}
          </span>
        </div>
        <h1 className="hero-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
          <span className={`${titleGradient} bg-clip-text text-transparent`}>
            {title}
          </span>
          <br />
          <span className="text-slate-900">{subtitle}</span>
        </h1>
        <div className="hero-text max-w-4xl mx-auto px-2">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 font-medium mb-4 sm:mb-6 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

