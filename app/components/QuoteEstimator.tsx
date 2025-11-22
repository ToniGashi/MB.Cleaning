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
  const [garageCleaning, setGarageCleaning] = useState(false);
  const [complexity, setComplexity] = useState("medium");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(() => {
    const size = typeof propertySize === "number" ? propertySize : 0;
    if (service === "residential") {
      // Charleston area residential cleaning rates (2025 market rates)
      // Base rate calculation: $0.10-$0.18 per sq ft for standard cleaning
      // Smaller homes have higher per sq ft rate, larger homes have lower
      const basePerSqFt = size < 1000 ? 0.18 : size < 2000 ? 0.14 : size < 3000 ? 0.12 : 0.10;
      let basePrice = size * basePerSqFt;

      // Bedroom and bathroom add-ons (detailed room cleaning)
      // Bedrooms: $20-$30 each, Bathrooms: $30-$45 each in Charleston
      const bedroomCount = typeof bedrooms === "number" ? bedrooms : 0;
      const bathroomCount = typeof bathrooms === "number" ? bathrooms : 0;
      basePrice += bedroomCount * 25;
      basePrice += bathroomCount * 38;

      // Deep clean multiplier (applies to base cleaning only, not extras)
      // Deep clean: 50-70% more intensive work in Charleston
      if (deepClean) {
        basePrice *= 1.6;
      }

      // Additional services (priced separately, not affected by deep clean multiplier)
      let extras = 0;
      
      // Window cleaning: $0.50-$1.00 per window or $150-$300 flat for average home
      // Estimate ~15-20 windows for average Charleston home
      if (windowCleaning) {
        extras += Math.max(175, size * 0.12); // $175 minimum or $0.12/sq ft
      }

      // Garage cleaning: $150-$400 in Charleston (size and clutter dependent)
      if (garageCleaning) {
        // Estimate garage size as 15-20% of home size, or minimum $175
        const estimatedGarageSize = Math.max(400, size * 0.18);
        extras += Math.max(175, estimatedGarageSize * 0.35);
      }

      // Combine base and extras
      let totalPrice = basePrice + extras;

      // Frequency discounts (recurring customers get better rates)
      // Applied to total price
      if (frequency === "weekly") totalPrice *= 0.75; // 25% discount for weekly
      else if (frequency === "biweekly") totalPrice *= 0.82; // 18% discount for bi-weekly
      else if (frequency === "monthly") totalPrice *= 0.88; // 12% discount for monthly

      // Minimum service charge for Charleston area (one-time cleaning)
      // Weekly/monthly recurring can go lower due to volume
      const minCharge = frequency === "one-time" ? 125 : 100;
      const finalPrice = Math.max(minCharge, totalPrice);
      
      // Calculate price per sq ft for display
      const pricePerSqFt = size > 0 ? finalPrice / size : 0;
      
      return {
        total: Math.round(finalPrice),
        perSqFt: pricePerSqFt,
        basePerSqFt: basePerSqFt
      };
    } else {
      // Charleston area post-construction cleanup rates (industry-specific 2025 rates)
      // Construction cleaning is priced by phase and complexity
      // Base rate varies: $0.25-$0.45 per sq ft depending on complexity
      
      let basePrice = 0;
      
      // Complexity-based base rates (industry standard for Charleston)
      // Base price includes rough clean and final clean
      if (complexity === "low") {
        // Light cleanup: mostly dust, minimal debris
        basePrice = size * 0.30;
      } else if (complexity === "medium") {
        // Standard cleanup: typical construction debris, paint marks
        basePrice = size * 0.36;
      } else {
        // High complexity: heavy debris, paint, adhesives, construction materials
        basePrice = size * 0.42;
      }

      // Additional services (priced separately)
      // Note: Window cleaning and debris removal are included in base price
      // Total construction cleanup price
      let totalPrice = basePrice;

      // Construction projects typically have minimums based on project size
      // Small projects (< 5,000 sq ft): $500 minimum
      // Medium projects (5,000-15,000 sq ft): $400 minimum  
      // Large projects (> 15,000 sq ft): $350 minimum (volume discount)
      let minCharge = 500;
      if (size >= 15000) {
        minCharge = 350;
      } else if (size >= 5000) {
        minCharge = 400;
      }

      const finalPrice = Math.max(minCharge, totalPrice);
      
      // Calculate price per sq ft for display
      const pricePerSqFt = size > 0 ? finalPrice / size : 0;
      
      return {
        total: Math.round(finalPrice),
        perSqFt: pricePerSqFt,
        basePerSqFt: complexity === "low" ? 0.30 : complexity === "medium" ? 0.36 : 0.42
      };
    }
  }, [
    service,
    propertySize,
    bedrooms,
    bathrooms,
    frequency,
    deepClean,
    windowCleaning,
    garageCleaning,
    complexity,
  ]);

  function generateEmailTemplate() {
    const size = typeof propertySize === "number" ? propertySize : 0;
    const estimateTotal = typeof estimate === "object" ? estimate.total : estimate;
    const estimatePerSqFt = typeof estimate === "object" ? estimate.perSqFt : 0;
    const basePerSqFt = typeof estimate === "object" && "basePerSqFt" in estimate ? estimate.basePerSqFt : 0;

    const serviceType = service === "residential" ? "Residential Cleaning" : "Post-Construction Cleaning";
    
    let emailBody = `Hello MB Cleaning Team,\n\n`;
    emailBody += `I would like to request a quote for ${serviceType} services.\n\n`;
    emailBody += `--- SERVICE DETAILS ---\n`;
    emailBody += `Service Type: ${serviceType}\n`;
    emailBody += `Property/Project Size: ${size.toLocaleString()} sq ft\n\n`;

    if (service === "residential") {
      emailBody += `--- RESIDENTIAL DETAILS ---\n`;
      emailBody += `Bedrooms: ${typeof bedrooms === "number" ? bedrooms : "N/A"}\n`;
      emailBody += `Bathrooms: ${typeof bathrooms === "number" ? bathrooms : "N/A"}\n`;
      emailBody += `Frequency: ${frequency === "one-time" ? "One-time" : frequency === "weekly" ? "Weekly" : frequency === "biweekly" ? "Bi-weekly" : "Monthly"}\n`;
      emailBody += `Deep Clean: ${deepClean ? "Yes" : "No"}\n`;
      emailBody += `Window Cleaning: ${windowCleaning ? "Yes" : "No"}\n`;
      emailBody += `Garage Cleaning: ${garageCleaning ? "Yes" : "No"}\n\n`;
    } else {
      emailBody += `--- CONSTRUCTION DETAILS ---\n`;
      emailBody += `Project Complexity: ${complexity.charAt(0).toUpperCase() + complexity.slice(1)}\n\n`;
    }

    emailBody += `--- ESTIMATE ---\n`;
    emailBody += `Estimated Total: ${formatCurrency(estimateTotal)}\n`;
    if (estimatePerSqFt > 0) {
      emailBody += `Price per sq ft: $${estimatePerSqFt.toFixed(2)}\n`;
      if (service === "construction" && basePerSqFt > 0) {
        emailBody += `Base rate per sq ft: $${basePerSqFt.toFixed(2)}\n`;
      }
    }
    emailBody += `\n`;

    if (notes.trim()) {
      emailBody += `--- ADDITIONAL NOTES ---\n`;
      emailBody += `${notes}\n\n`;
    }

    emailBody += `Please contact me to confirm this estimate and schedule a service.\n\n`;
    emailBody += `Thank you!`;

    const subject = encodeURIComponent(`Quote Request - ${serviceType} (${size.toLocaleString()} sq ft)`);
    const body = encodeURIComponent(emailBody);
    
    return `mailto:info@mb.cleaning?subject=${subject}&body=${body}`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Open email client with pre-filled template
    window.location.href = generateEmailTemplate();
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
                <p className="mt-2 text-xs text-slate-500">
                  Base price includes rough clean and final clean
                </p>
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
            {service === "residential" && (
              <label className="flex items-center space-x-3 text-slate-700">
                <input
                  type="checkbox"
                  checked={windowCleaning}
                  onChange={(e) => setWindowCleaning(e.target.checked)}
                />
                <span>Window Cleaning</span>
              </label>
            )}
            {service === "residential" && (
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={garageCleaning}
                  onChange={(e) => setGarageCleaning(e.target.checked)}
                />
                <span className="text-slate-700">Garage Cleaning</span>
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
                  <div className="text-5xl md:text-6xl font-extrabold text-white mb-2 [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
                    {formatCurrency(typeof estimate === "object" ? estimate.total : estimate)}
                  </div>
                  {typeof estimate === "object" && (
                    <div className="text-white/90 text-sm mb-3 font-medium">
                      ${estimate.perSqFt.toFixed(2)} per sq ft
                      {service === "construction" && (
                        <>
                          <span className="text-white/70 ml-2">
                            (Base: ${estimate.basePerSqFt.toFixed(2)}/sq ft)
                          </span>
                          <div className="text-white/80 text-xs mt-1">
                            Includes rough clean and final clean
                          </div>
                        </>
                      )}
                    </div>
                  )}
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
            <p className="font-semibold mb-1">Email client opened!</p>
            <p className="text-sm">
              Your quote request has been pre-filled in your email. Please review and send to complete your request.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
