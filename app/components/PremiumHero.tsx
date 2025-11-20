"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PremiumHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!heroRef.current || hasAnimatedRef.current) return;

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Wait for elements to be ready
        if (
          !headlineRef.current ||
          !subheadlineRef.current ||
          !ctaRef.current ||
          !imageRef.current
        ) {
          // Fallback: make elements visible if GSAP fails
          if (headlineRef.current) {
            headlineRef.current.style.opacity = "1";
            headlineRef.current.style.transform = "translateY(0)";
          }
          if (subheadlineRef.current) {
            subheadlineRef.current.style.opacity = "1";
            subheadlineRef.current.style.transform = "translateY(0)";
          }
          if (ctaRef.current) {
            ctaRef.current.style.opacity = "1";
            ctaRef.current.style.transform = "translateY(0)";
          }
          if (imageRef.current) {
            imageRef.current.style.opacity = "1";
            imageRef.current.style.transform = "scale(1)";
          }
          return;
        }

        // Main timeline
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => {
            // Ensure everything is visible after animation
            if (headlineRef.current) headlineRef.current.style.opacity = "1";
            if (subheadlineRef.current)
              subheadlineRef.current.style.opacity = "1";
            if (ctaRef.current) ctaRef.current.style.opacity = "1";
            if (imageRef.current) imageRef.current.style.opacity = "1";
          },
        });

        // Animate headline with word stagger
        if (headlineRef.current) {
          // Ensure headline container is visible
          gsap.set(headlineRef.current, { opacity: 1 });

          const originalText = headlineRef.current.textContent || "";
          const words = originalText.split(" ").filter((w) => w.length > 0);

          // Only modify if not already modified
          if (!headlineRef.current.querySelector("span") && words.length > 0) {
            headlineRef.current.innerHTML = words
              .map((word) => `<span class="inline-block">${word}</span>`)
              .join(" ");
          }

          const wordSpans = headlineRef.current.querySelectorAll("span");
          if (wordSpans.length > 0) {
            // Set initial state for spans only, not the parent
            gsap.set(wordSpans, { opacity: 0, y: 50 });

            tl.to(wordSpans, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.05,
              ease: "expo.out",
            });
          } else {
            // Fallback if no spans - animate the whole headline
            gsap.set(headlineRef.current, { opacity: 0, y: 50 });
            tl.to(headlineRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.8,
            });
          }
        }

        // Set initial states for other elements
        gsap.set([subheadlineRef.current, ctaRef.current], {
          opacity: 0,
          y: 50,
        });

        gsap.set(imageRef.current, {
          opacity: 0,
          scale: 1.1,
        });

        // Animate subheadline
        tl.to(
          subheadlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.4"
        );

        // Animate image
        tl.to(
          imageRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
          },
          "-=0.6"
        );

        // Animate CTA
        tl.to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        );

        // Parallax effect on scroll
        if (imageRef.current && heroRef.current) {
          gsap.to(imageRef.current, {
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          });
        }

        // Floating elements animation
        if (floatingElementsRef.current) {
          const floatingItems = Array.from(
            floatingElementsRef.current.children
          );
          floatingItems.forEach((item, index) => {
            gsap.to(item, {
              y: gsap.utils.random(-20, 20),
              x: gsap.utils.random(-15, 15),
              rotation: gsap.utils.random(-3, 3),
              duration: gsap.utils.random(3, 5),
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: index * 0.3,
            });
          });
        }

        // Scroll-triggered fade for hero content
        if (heroRef.current) {
          gsap.to(
            [headlineRef.current, subheadlineRef.current, ctaRef.current],
            {
              opacity: 0,
              y: -30,
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "60% top",
                scrub: 1,
                invalidateOnRefresh: true,
              },
            }
          );
        }

        hasAnimatedRef.current = true;
      }, heroRef);

      return () => {
        ctx.revert();
        // Cleanup all ScrollTriggers
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, 100); // Small delay to ensure DOM is ready

    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Only run once on mount

  const isResidential = theme === "residential";

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient gradient background */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isResidential
            ? "bg-gradient-to-br from-blue-50/50 via-green-50/30 to-transparent"
            : "bg-gradient-to-br from-slate-900/50 via-orange-950/30 to-transparent"
        }`}
      />

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 transition-colors duration-500 ${
            isResidential ? "bg-blue-400" : "bg-orange-500"
          }`}
          style={{
            animation: "pulse 8s ease-in-out infinite",
          }}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 transition-colors duration-500 ${
            isResidential ? "bg-green-400" : "bg-red-500"
          }`}
          style={{
            animation: "pulse 10s ease-in-out infinite 2s",
          }}
        />
      </div>

      {/* Floating UI Elements */}
      <div
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className={`absolute top-20 left-10 w-2 h-2 rounded-full transition-colors duration-500 ${
            isResidential ? "bg-blue-400" : "bg-orange-400"
          } opacity-60`}
        />
        <div
          className={`absolute top-40 right-20 w-3 h-3 rounded-full transition-colors duration-500 ${
            isResidential ? "bg-green-400" : "bg-red-400"
          } opacity-40`}
        />
        <div
          className={`absolute bottom-32 left-1/4 w-2 h-2 rounded-full transition-colors duration-500 ${
            isResidential ? "bg-blue-300" : "bg-orange-300"
          } opacity-50`}
        />
        <div
          className={`absolute bottom-20 right-1/3 w-4 h-4 rounded-full transition-colors duration-500 ${
            isResidential ? "bg-green-300" : "bg-red-300"
          } opacity-30`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1
              ref={headlineRef}
              className={`text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight ${
                isResidential
                  ? "bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
              }`}
            >
              Professional Cleaning Services
            </h1>

            <p
              ref={subheadlineRef}
              className={`text-xl md:text-2xl leading-relaxed max-w-2xl transition-colors duration-500 ${
                isResidential ? "text-slate-600" : "text-slate-300"
              }`}
            >
              Transform your spaces with expert cleaning solutions. Trusted by
              homeowners and contractors across Charleston for reliable,
              thorough, and eco-friendly service.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/residential"
                className={`group relative px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 ${
                  isResidential
                    ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/30"
                } hover:shadow-xl hover:scale-105`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                    isResidential
                      ? "bg-gradient-to-r from-blue-700 to-green-700"
                      : "bg-gradient-to-r from-orange-700 to-red-700"
                  }`}
                />
              </Link>
              <Link
                href="/construction"
                className={`px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300 ${
                  isResidential
                    ? "border-blue-600 text-blue-600 hover:bg-blue-50"
                    : "border-orange-500 text-orange-400 hover:bg-orange-500/10"
                } hover:scale-105`}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image/Illustration with Parallax */}
          <div
            ref={imageRef}
            className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden"
          >
            <div
              className={`absolute inset-0 transition-colors duration-500 ${
                isResidential
                  ? "bg-gradient-to-br from-blue-100 via-green-100 to-blue-50"
                  : "bg-gradient-to-br from-slate-800 via-orange-950 to-slate-900"
              } rounded-3xl shadow-2xl`}
            >
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`text-9xl opacity-20 transition-colors duration-500 ${
                    isResidential ? "text-blue-400" : "text-orange-500"
                  }`}
                >
                  {isResidential ? "🏠" : "🏗️"}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div
          className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 transition-colors duration-500 ${
            isResidential ? "border-blue-400" : "border-orange-400"
          }`}
        >
          <div
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
              isResidential ? "bg-blue-400" : "bg-orange-400"
            }`}
            style={{ animation: "bounce 2s infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
