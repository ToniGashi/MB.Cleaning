"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import QuoteEstimator from "../components/QuoteEstimator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function ContactPage() {
  const [service, setService] = useState<"residential" | "construction">(
    "residential"
  );
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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12"
      >
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="hero-text inline-block mb-4 sm:mb-6">
            <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold">
              Get In Touch
            </span>
          </div>
          <h1 className="hero-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="hero-text text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Request a free quote for your cleaning needs. We&apos;re here to
            help you get started.
          </p>
        </div>

        {/* Service Switcher */}
        <Reveal>
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl p-1 sm:p-1.5 shadow-lg border border-slate-200 inline-flex gap-1 w-full max-w-md sm:w-auto">
              <button
                onClick={() => setService("residential")}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                  service === "residential"
                    ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-md shadow-blue-500/30"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                Residential
              </button>
              <button
                onClick={() => setService("construction")}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                  service === "construction"
                    ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md shadow-orange-500/30"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                Construction
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Quote Estimator Form */}
      <div className="pb-12 sm:pb-16 md:pb-20">
        <QuoteEstimator service={service} showHeading={false} />
      </div>

      {/* Additional Contact Information */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
              Other Ways to Reach Us
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            <Reveal>
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl text-center border border-slate-200">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  Email
                </h3>
                <p className="text-sm sm:text-base text-slate-600">
                  info@mb.cleaning
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl text-center border border-slate-200">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  Phone
                </h3>
                <p className="text-sm sm:text-base text-slate-600">
                  (555) 123-4567
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl text-center border border-slate-200 sm:col-span-2 md:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  Location
                </h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Charleston, SC
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
