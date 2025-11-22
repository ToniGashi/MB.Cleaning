"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  const getActivePage = () => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/residential")) return "residential";
    if (pathname.startsWith("/construction")) return "construction";
    if (pathname.startsWith("/contact")) return "contact";
    return null;
  };

  const activePage = getActivePage();

  const getLinkClass = (page: string) => {
    if (activePage === page) {
      return "text-slate-900 font-bold relative";
    }
    return "text-slate-600 hover:text-slate-900 font-medium transition-all duration-200";
  };

  const navLinks = [
    { href: "/", label: "Home", page: "home" },
    { href: "/residential", label: "Residential", page: "residential" },
    { href: "/construction", label: "Construction", page: "construction" },
  ];

  // Animate menu open/close with super smooth animations
  useEffect(() => {
    if (!menuRef.current || !backdropRef.current) return;

    const menu = menuRef.current;
    const backdrop = backdropRef.current;
    const links = linksRef.current.filter(Boolean) as HTMLAnchorElement[];

    // Kill any existing animations
    if (animationRef.current) {
      animationRef.current.kill();
    }
    gsap.killTweensOf([menu, backdrop, ...links]);

    if (isOpen) {
      // Set display immediately
      menu.style.display = "block";
      backdrop.style.display = "block";

      // Force reflow
      void menu.offsetHeight;

      // Set initial states
      gsap.set(menu, {
        opacity: 0,
        y: -20,
      });
      gsap.set(backdrop, {
        opacity: 0,
      });

      if (links.length > 0) {
        gsap.set(links, {
          opacity: 0,
          x: -20,
        });
      }

      // Create smooth timeline
      const tl = gsap.timeline();
      animationRef.current = tl;

      // Animate backdrop and menu together
      tl.to(
        backdrop,
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      );

      tl.to(
        menu,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        0.05
      );

      // Stagger menu items
      if (links.length > 0) {
        tl.to(
          links,
          {
            opacity: 1,
            x: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out",
          },
          0.15
        );
      }
    } else {
      // Close animation
      const tl = gsap.timeline({
        onComplete: () => {
          menu.style.display = "none";
          backdrop.style.display = "none";
        },
      });
      animationRef.current = tl;

      // Fade out items
      if (links.length > 0) {
        tl.to(
          links,
          {
            opacity: 0,
            x: -15,
            duration: 0.2,
            stagger: 0.03,
            ease: "power2.in",
          },
          0
        );
      }

      // Fade out menu and backdrop
      tl.to(
        menu,
        {
          opacity: 0,
          y: -15,
          duration: 0.25,
          ease: "power2.in",
        },
        0.05
      );

      tl.to(
        backdrop,
        {
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
        },
        0
      );
    }

    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      gsap.killTweensOf([menu, backdrop, ...links]);
    };
  }, [isOpen]);

  // Close menu when clicking backdrop
  const handleBackdropClick = () => {
    setIsOpen(false);
  };

  // Close menu on route change
  const prevPathnameRef = useRef(pathname);
  useEffect(() => {
    if (prevPathnameRef.current !== pathname && isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 0);
      prevPathnameRef.current = pathname;
    }
  }, [pathname, isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={handleBackdropClick}
        className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 lg:hidden"
        style={{ display: "none", opacity: 0 }}
        aria-hidden="true"
      />

      <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent transition-transform hover:scale-105 duration-200"
            >
              MB Cleaning
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${getLinkClass(
                    link.page
                  )} relative px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm`}
                >
                  {link.label}
                  {activePage === link.page && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-700 to-slate-500 rounded-full" />
                  )}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`${getLinkClass(
                  "contact"
                )} relative px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors font-semibold text-sm`}
              >
                Contact Us
                {activePage === "contact" && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-700 to-slate-500 rounded-full" />
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all duration-200 active:scale-95"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            ref={menuRef}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 overflow-hidden shadow-xl max-h-[80vh] overflow-y-auto"
            style={{ display: "none" }}
          >
            <div className="flex flex-col px-4 py-3 space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  ref={(el) => {
                    linksRef.current[index] = el;
                  }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`${getLinkClass(
                    link.page
                  )} px-4 py-2.5 rounded-lg hover:bg-slate-50 active:bg-slate-100 transition-all duration-200 text-base transform active:scale-[0.98]`}
                  style={{ opacity: 0 }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                ref={(el) => {
                  linksRef.current[navLinks.length] = el;
                }}
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`${getLinkClass(
                  "contact"
                )} px-4 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-700 transition-all duration-200 font-semibold text-base text-center transform active:scale-[0.98] shadow-lg mt-1`}
                style={{ opacity: 0 }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
