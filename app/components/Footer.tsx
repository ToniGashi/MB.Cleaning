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
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-slate-300">Email: info@mb.cleaning</p>
            <p className="text-slate-300">Phone: (555) 123-4567</p>
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
