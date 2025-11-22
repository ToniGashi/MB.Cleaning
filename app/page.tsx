"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Text Animations
      tl.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1,
      });
      // Cards enter animation - set initial state first
      gsap.set(".hero-card", { opacity: 1, y: 0 }); // Ensure visible by default
      tl.from(
        ".hero-card",
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <div className="relative">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 max-w-7xl mx-auto min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex flex-col justify-center"
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
            {/* Left Column: Content */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="hero-text inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                Serving Charleston Since 2006
              </div>
              <h1 className="hero-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tight mb-4 sm:mb-6 md:mb-8 leading-[1.05]">
                Pristine Spaces. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-blue-600 to-green-500">
                  Professional Standards.
                </span>
              </h1>
              <p className="hero-text text-base sm:text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed mb-6 sm:mb-8">
                The premier cleaning partner for luxury residences and
                large-scale commercial developments in 2026.
              </p>
              <div className="hero-text flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="#services"
                  className="bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/30 text-center text-sm sm:text-base"
                >
                  Explore Services
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-slate-900 border border-slate-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:border-slate-900 transition-all text-center text-sm sm:text-base"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Column: Our Greatest Qualities */}
            <div className="relative hidden lg:block">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                <div className="text-center mb-8">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Why Choose Us
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Our Greatest Qualities
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Honest */}
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Honest</h4>
                      <p className="text-sm text-slate-600">
                        Transparent pricing and clear communication. No hidden
                        fees or surprises.
                      </p>
                    </div>
                  </div>

                  {/* Fast */}
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100 hover:border-green-300 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Fast</h4>
                      <p className="text-sm text-slate-600">
                        24-hour turnaround available. We work efficiently
                        without compromising quality.
                      </p>
                    </div>
                  </div>

                  {/* Reliable */}
                  <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100 hover:border-orange-300 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">
                        Reliable
                      </h4>
                      <p className="text-sm text-slate-600">
                        Consistent service you can count on. Serving Charleston
                        since 2006.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Split Choice Cards */}
          <div
            id="services"
            className="hero-cards-container grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full mt-12 sm:mt-16 md:mt-20"
          >
            {/* Residential Card */}
            <Link
              href="/residential"
              className="hero-card group relative overflow-hidden rounded-2xl sm:rounded-3xl min-h-[250px] sm:min-h-[300px] md:min-h-[400px] cursor-pointer shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-blue-100 via-green-100 to-blue-50 ring-1 ring-slate-200"
              style={{ opacity: 1 }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 via-green-100 to-blue-50 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
                <div className="text-6xl sm:text-8xl md:text-9xl opacity-20">
                  🏠
                </div>
              </div>

              {/* Overlay - lighter at top */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-slate-900/10 group-hover:from-slate-900/60 transition-colors duration-500" />

              {/* Content */}
              <div className="relative z-10 bottom-0 left-0 p-4 sm:p-6 md:p-8 max-w-lg h-full flex flex-col justify-end">
                <span className="inline-block px-2 sm:px-3 py-1 mb-2 sm:mb-3 text-xs font-bold tracking-wider text-white uppercase bg-blue-500/90 backdrop-blur rounded-full shadow-lg w-fit">
                  For Homeowners
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white mb-2 drop-shadow-lg">
                  Residential Cleaning
                </h3>
                <p className="text-sm sm:text-base text-white/95 mb-4 line-clamp-2 md:line-clamp-none drop-shadow-md font-medium">
                  Deep cleans, move-ins, and recurring maid services tailored to
                  your lifestyle.
                </p>
                <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="mr-2 text-sm font-semibold bg-white/20 backdrop-blur px-4 py-2 rounded-full border border-white/30 hover:bg-white/30">
                    Explore Residential
                  </span>
                </div>
              </div>
            </Link>

            {/* Construction Card */}
            <Link
              href="/construction"
              className="hero-card group relative overflow-hidden rounded-2xl sm:rounded-3xl min-h-[250px] sm:min-h-[300px] md:min-h-[400px] cursor-pointer shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-slate-800 via-orange-950 to-slate-900 ring-1 ring-slate-200"
              style={{ opacity: 1 }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-800 via-orange-950 to-slate-900 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
                <div className="text-6xl sm:text-8xl md:text-9xl opacity-20">
                  🏗️
                </div>
              </div>

              {/* Overlay - lighter at top */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/10 group-hover:from-slate-900/70 transition-colors duration-500" />

              {/* Content */}
              <div className="relative z-10 bottom-0 left-0 p-4 sm:p-6 md:p-8 max-w-lg h-full flex flex-col justify-end">
                <span className="inline-block px-2 sm:px-3 py-1 mb-2 sm:mb-3 text-xs font-bold tracking-wider text-white uppercase bg-orange-500 backdrop-blur rounded-sm shadow-lg w-fit">
                  For Contractors
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
                  Construction Cleaning
                </h3>
                <p className="text-sm sm:text-base text-white/95 mb-4 line-clamp-2 md:line-clamp-none drop-shadow-md font-medium">
                  OSHA-compliant rough, final, and touch-up cleaning for
                  commercial sites.
                </p>
                <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="mr-2 text-sm font-semibold bg-white/20 backdrop-blur px-4 py-2 rounded-full border border-white/30 hover:bg-white/30">
                    View Capabilities
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Reveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-center">
                <div className="border-r border-slate-200/50 last:border-r-0 md:border-r">
                  <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2 tracking-tighter">
                    1000+
                  </h4>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    Projects Completed
                  </p>
                </div>
                <div className="border-r border-slate-200/50 md:border-r">
                  <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2 tracking-tighter">
                    98%
                  </h4>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    Client Satisfaction
                  </p>
                </div>
                <div className="border-r-0 md:border-r border-slate-200/50">
                  <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2 tracking-tighter">
                    24h
                  </h4>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    Turnaround Available
                  </p>
                </div>
                <div>
                  <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2 tracking-tighter">
                    100%
                  </h4>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    Bonded & Insured
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
