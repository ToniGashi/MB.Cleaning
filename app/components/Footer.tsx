"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-12 sm:mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MB Cleaning</h3>
            <p className="text-slate-300">
              Professional cleaning services you can trust.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link
                  href="/residential"
                  className="hover:text-white transition-colors"
                >
                  Residential Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/construction"
                  className="hover:text-white transition-colors"
                >
                  Construction Cleaning
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:info@mb.cleaning"
                className="flex items-center gap-3 px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-white transition-all text-sm font-medium group"
              >
                <svg
                  className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors"
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
                <span className="text-slate-200 group-hover:text-white transition-colors">
                  info@mb.cleaning
                </span>
              </a>
              <a
                href="tel:8434696373"
                className="flex items-center gap-3 px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-white transition-all text-sm font-medium group"
              >
                <svg
                  className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors"
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
                <span className="text-slate-200 group-hover:text-white transition-colors">
                  (843) 469-6373
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} MB Cleaning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
