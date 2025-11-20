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
                large-scale commercial developments in 2025.
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

            {/* Right Column: Trusted Partners */}
            <div className="relative hidden lg:block">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                <div className="text-center mb-8">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Trusted By
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Industry Leaders
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Partner Logos */}
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                    <div className="text-slate-400 font-bold text-md">
                      American Homes For Rent
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                    <div className="text-slate-400 font-bold text-md">
                      Center Park Homes
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                    <div className="text-slate-400 font-bold text-md">
                      Eastwood
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                    <div className="text-slate-400 font-bold text-md">
                      Manor House Builders
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                    <div className="text-slate-400 font-bold text-md">
                      H&H Builders
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                    <div className="text-slate-400 font-bold text-md">
                      Steeve Hill Builders
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <div className="flex items-center justify-center gap-2 text-slate-600">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">
                      10+ Trusted Partners
                    </span>
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
                  Post-Construction
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
