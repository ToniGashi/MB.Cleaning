"use client";

import React, { useMemo, useState } from "react";

type Props = {
  service?: "residential" | "construction";
  showHeading?: boolean;
};

function formatCurrency(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function QuoteEstimator({
  service = "residential",
  showHeading = true,
}: Props) {
  const [propertySize, setPropertySize] = useState<number | "">(
    service === "residential" ? 1500 : 10000
  );
  const [bedrooms, setBedrooms] = useState<number | "">(2);
  const [bathrooms, setBathrooms] = useState<number | "">(1);
  const [frequency, setFrequency] = useState("one-time");
  const [deepClean, setDeepClean] = useState(false);
  const [windowCleaning, setWindowCleaning] = useState(false);
  const [carpetCleaning, setCarpetCleaning] = useState(false);
  const [complexity, setComplexity] = useState("medium");
  const [debrisRemoval, setDebrisRemoval] = useState(false);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(() => {
    const size = typeof propertySize === "number" ? propertySize : 0;
    if (service === "residential") {
      // Charleston area residential cleaning rates
      // Base rate: $0.12-$0.15 per sq ft for standard cleaning
      const basePerSqFt = 0.13;
      let price = size * basePerSqFt;

      // Additional charges for bedrooms and bathrooms (more detailed cleaning)
      price += (typeof bedrooms === "number" ? bedrooms : 0) * 25;
      price += (typeof bathrooms === "number" ? bathrooms : 0) * 35;

      // Deep clean adds 40-50% more time and effort
      if (deepClean) price *= 1.45;

      // Window cleaning: $150-$250 for average home in Charleston
      if (windowCleaning) price += 180;

      // Carpet cleaning: $0.30-$0.50 per sq ft in Charleston
      if (carpetCleaning) {
        const carpetArea = size * 0.6; // Estimate 60% of home has carpet
        price += carpetArea * 0.4;
      }

      // Frequency discounts (recurring customers get better rates)
      if (frequency === "weekly") price *= 0.8; // 20% discount
      else if (frequency === "biweekly") price *= 0.85; // 15% discount
      else if (frequency === "monthly") price *= 0.9; // 10% discount

      // Minimum service charge for Charleston area
      const min = Math.max(120, price);
      return Math.round(min);
    } else {
      // Charleston area post-construction cleanup rates
      // Base rate: $0.18-$0.25 per sq ft for standard post-construction cleanup
      const basePerSqFt = 0.22;
      let price = size * basePerSqFt;

      // Complexity multiplier (construction cleanup varies significantly)
      if (complexity === "low") price *= 0.9; // Light cleanup, mostly dust
      else if (complexity === "medium") price *= 1.0; // Standard cleanup
      else if (complexity === "high") price *= 1.5; // Heavy debris, paint, construction materials

      // Debris removal: $0.08-$0.12 per sq ft additional in Charleston
      if (debrisRemoval) {
        price += Math.max(300, size * 0.1);
      }

      // Minimum for construction cleanup in Charleston area
      const min = Math.max(350, price);
      return Math.round(min);
    }
  }, [
    service,
    propertySize,
    bedrooms,
    bathrooms,
    frequency,
    deepClean,
    windowCleaning,
    carpetCleaning,
    complexity,
    debrisRemoval,
  ]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: replace with real API call
    const payload = {
      service,
      propertySize,
      bedrooms: service === "residential" ? bedrooms : undefined,
      bathrooms: service === "residential" ? bathrooms : undefined,
      frequency: service === "residential" ? frequency : undefined,
      deepClean: service === "residential" ? deepClean : undefined,
      windowCleaning,
      carpetCleaning: service === "residential" ? carpetCleaning : undefined,
      complexity: service === "construction" ? complexity : undefined,
      debrisRemoval: service === "construction" ? debrisRemoval : undefined,
      notes,
      estimate,
    };

    // Simulate submission
    console.log("Quote request payload:", payload);
    setSubmitted(true);
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      {showHeading && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4 sm:mb-6">
          {service === "residential"
            ? "Get Your Free Quote"
            : "Request a Quote"}
        </h2>
      )}

      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl border border-slate-200">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {service === "residential" ? (
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Property Size (sq ft)
                </label>
                <input
                  type="number"
                  min={0}
                  value={propertySize as number}
                  onChange={(e) =>
                    setPropertySize(
                      e.target.value === "" ? "" : Number(e.target.value)
                    )
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Bedrooms
                </label>
                <input
                  type="number"
                  min={0}
                  value={bedrooms as number}
                  onChange={(e) =>
                    setBedrooms(
                      e.target.value === "" ? "" : Number(e.target.value)
                    )
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Bathrooms
                </label>
                <input
                  type="number"
                  min={0}
                  value={bathrooms as number}
                  onChange={(e) =>
                    setBathrooms(
                      e.target.value === "" ? "" : Number(e.target.value)
                    )
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Frequency
                </label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="one-time">One-time</option>
                  <option value="weekly">Weekly (discount)</option>
                  <option value="biweekly">Bi-weekly (discount)</option>
                  <option value="monthly">Monthly (discount)</option>
                </select>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Project Size (sq ft)
                </label>
                <input
                  type="number"
                  min={0}
                  value={propertySize as number}
                  onChange={(e) =>
                    setPropertySize(
                      e.target.value === "" ? "" : Number(e.target.value)
                    )
                  }
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Project Complexity
                </label>
                <select
                  value={complexity}
                  onChange={(e) => setComplexity(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-4">
            {service === "residential" && (
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={deepClean}
                  onChange={(e) => setDeepClean(e.target.checked)}
                />
                <span className="text-slate-700">Deep Clean</span>
              </label>
            )}
            <label className="flex items-center space-x-3 text-slate-700">
              <input
                type="checkbox"
                checked={windowCleaning}
                onChange={(e) => setWindowCleaning(e.target.checked)}
              />
              <span>Window Cleaning</span>
            </label>
            {service === "residential" && (
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={carpetCleaning}
                  onChange={(e) => setCarpetCleaning(e.target.checked)}
                />
                <span className="text-slate-700">Carpet Cleaning</span>
              </label>
            )}
            {service === "construction" && (
              <label className="flex items-center space-x-3 text-slate-700">
                <input
                  type="checkbox"
                  checked={debrisRemoval}
                  onChange={(e) => setDebrisRemoval(e.target.checked)}
                />
                <span>Debris Removal</span>
              </label>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Additional Details
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={`w-full px-4 py-3 border rounded-xl text-slate-900 bg-white focus:ring-2 focus:border-transparent transition-all ${
                service === "construction"
                  ? "border-slate-300 focus:ring-orange-500"
                  : "border-slate-300 focus:ring-blue-500"
              }`}
            />
          </div>

          {/* Enhanced Quote Display */}
          <div
            className={`relative overflow-hidden rounded-xl p-8 mb-6 ${
              service === "construction"
                ? "bg-gradient-to-br from-orange-600 via-red-600 to-orange-700"
                : "bg-gradient-to-br from-blue-600 via-green-600 to-blue-700"
            } shadow-xl`}
          >
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex-1 min-w-[200px]">
                  <div className="text-white text-sm font-semibold mb-2 uppercase tracking-wide">
                    Your Estimated Price
                  </div>
                  <div className="text-5xl md:text-6xl font-extrabold text-white mb-3 [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
                    {formatCurrency(estimate)}
                  </div>
                  <div className="text-white text-sm flex items-center gap-2 font-medium">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Live estimate • Updates instantly
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg shadow-2xl hover:shadow-2xl hover:scale-105 transition-all duration-200 hover:bg-slate-50 border-2 border-white/20"
                  >
                    {service === "residential"
                      ? "Request Free Quote"
                      : "Request Quote"}
                  </button>
                  <div className="text-white text-xs text-right max-w-[200px] font-medium">
                    Final quote may vary after on-site assessment
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          </div>
        </form>

        {/* <div className="mt-6 border-t pt-4">
          <details>
            <summary className="cursor-pointer font-medium">
              Estimate breakdown
            </summary>
            <div className="mt-3 text-sm text-slate-600">
              This is a preliminary estimate to help you budget. Final quotes
              may vary after an on-site assessment. The estimate updates
              instantly as you change inputs.
            </div>
          </details>
        </div> */}

        {submitted && (
          <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800">
            Thanks — your request was sent. We&apos;ll follow up with a
            confirmed quote shortly.
          </div>
        )}
      </div>
    </section>
  );
}
