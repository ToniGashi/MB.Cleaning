"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const blogPosts = [
  {
    title: "10 Essential Spring Cleaning Tips for Your Home",
    excerpt:
      "Discover the best strategies for a thorough spring cleaning that will make your home shine and improve your indoor air quality.",
    category: "Residential",
    categoryColor: "blue",
    date: "March 15, 2024",
    href: "/residential/blog/spring-cleaning-tips",
    image: "🏠",
  },
  {
    title: "How to Clean Naturally Without Harsh Chemicals",
    excerpt:
      "Learn about natural cleaning solutions that are safe for your family and the environment while being effective against dirt and germs.",
    category: "Residential",
    categoryColor: "green",
    date: "March 18, 2024",
    href: "/residential/blog/natural-cleaning",
    image: "🌿",
  },
  {
    title: "Decluttering Your Home: A Room-by-Room Guide",
    excerpt:
      "Practical tips for organizing and decluttering each room in your home to create a more peaceful and manageable living space.",
    category: "Residential",
    categoryColor: "blue",
    date: "March 22, 2024",
    href: "/residential/blog/decluttering-guide",
    image: "📦",
  },
  {
    title: "Best Practices for Post-Construction Site Cleanup",
    excerpt:
      "Learn the essential steps and best practices for effective post-construction cleanup that ensures safety and prepares sites for occupancy.",
    category: "Construction",
    categoryColor: "orange",
    date: "March 20, 2024",
    href: "/construction/blog/post-construction-cleanup",
    image: "🏗️",
  },
  {
    title: "Safety Protocols for Construction Site Cleaning",
    excerpt:
      "Important safety guidelines and protocols that should be followed during construction site cleaning to protect workers and ensure compliance.",
    category: "Construction",
    categoryColor: "orange",
    date: "March 25, 2024",
    href: "/construction/blog/safety-protocols",
    image: "🛡️",
  },
  {
    title: "How Professional Cleaning Saves Time and Money",
    excerpt:
      "Discover how hiring professional construction cleaning services can help contractors save time, reduce costs, and meet project deadlines more effectively.",
    category: "Construction",
    categoryColor: "orange",
    date: "March 28, 2024",
    href: "/construction/blog/professional-cleaning-benefits",
    image: "💰",
  },
];

export default function BlogPage() {
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
      <main
        ref={heroRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="hero-text inline-block mb-4 sm:mb-6">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              Expert Insights
            </span>
          </div>
          <h1 className="hero-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-[1.1] sm:leading-tight px-2 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent pb-1">
            Cleaning Tips & Insights
          </h1>
          <p className="hero-text text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            Expert advice, best practices, and industry news to help you keep
            your spaces clean and healthy
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <Reveal key={post.href}>
              <Link href={post.href} className="group block h-full">
                <article className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden h-full border border-slate-200 flex flex-col">
                  {/* Image/Icon Section */}
                  <div
                    className={`h-56 flex items-center justify-center text-9xl bg-gradient-to-br relative overflow-hidden flex-shrink-0 ${
                      post.categoryColor === "blue"
                        ? "from-blue-100 via-green-100 to-blue-50"
                        : post.categoryColor === "green"
                        ? "from-green-100 via-emerald-100 to-green-50"
                        : "from-orange-100 via-red-100 to-orange-50"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                      {post.image}
                    </div>
                    <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/20 blur-2xl" />
                    <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                          post.categoryColor === "blue"
                            ? "bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 border border-blue-200"
                            : post.categoryColor === "green"
                            ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border border-green-200"
                            : "bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border border-orange-200"
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-sm text-slate-500 font-medium">
                        {post.date}
                      </span>
                    </div>

                    <h2
                      className={`text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 group-hover:transition-colors leading-tight ${
                        post.categoryColor === "blue"
                          ? "group-hover:text-blue-600"
                          : post.categoryColor === "green"
                          ? "group-hover:text-green-600"
                          : "group-hover:text-orange-600"
                      }`}
                    >
                      {post.title}
                    </h2>

                    <p className="text-slate-600 mb-8 line-clamp-3 text-lg leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>

                    <div
                      className={`flex items-center font-bold text-lg transition-all mt-auto ${
                        post.categoryColor === "blue"
                          ? "text-blue-600 group-hover:text-blue-700"
                          : post.categoryColor === "green"
                          ? "text-green-600 group-hover:text-green-700"
                          : "text-orange-600 group-hover:text-orange-700"
                      } group-hover:gap-3`}
                    >
                      Read More
                      <svg
                        className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Newsletter CTA */}
        {/* <div className="mt-32 max-w-5xl mx-auto">
          <Reveal>
            <div className="relative bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700/50 to-green-700/50" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                  Stay Updated with Cleaning Tips
                </h2>
                <p className="text-blue-100 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
                  Get the latest cleaning tips, industry news, and special
                  offers delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-white/50 text-lg font-medium shadow-lg"
                  />
                  <button className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div> */}
      </main>

      <Footer />
    </div>
  );
}
