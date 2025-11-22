"use client";

import QuoteEstimator from "../components/QuoteEstimator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import Section from "../components/Section";

const services = [
  {
    icon: "🏗️",
    title: "Rough Clean",
    description:
      "Initial cleanup during construction phases to maintain a safe and organized work environment. Removes large debris, dust, and construction materials.",
  },
  {
    icon: "✨",
    title: "Final Clean",
    description:
      "Comprehensive post-construction cleaning to prepare the site for occupancy. Includes window cleaning, floor polishing, cabinet cleaning, and thorough sanitization.",
  },
  {
    icon: "🔄",
    title: "Reclean",
    description:
      "Follow-up cleaning service to address any missed areas or touch-ups needed after the final clean. Ensures complete satisfaction before handover.",
  },
  {
    icon: "🗑️",
    title: "Debris Removal",
    description:
      "Efficient removal and disposal of construction waste, materials, and debris. We handle everything from small scraps to large items with proper disposal.",
  },
  {
    icon: "🧽",
    title: "Window & Glass Cleaning",
    description:
      "Professional cleaning of all windows, glass surfaces, and mirrors to remove construction residue, paint, and adhesive marks for crystal-clear results.",
  },
  {
    icon: "🗄️",
    title: "Cabinet & Countertop Cleaning",
    description:
      "Deep cleaning and polishing of all cabinets and countertops to remove construction residue, fingerprints, and ensure a pristine finish for move-in ready condition.",
  },
];

export default function ConstructionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        badge="Construction Services"
        title="Construction"
        titleGradient="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500"
        subtitle="Cleaning Services"
        description="Professional post-construction cleanup and debris removal services for contractors and building companies."
        badgeGradient="bg-gradient-to-r from-orange-50 to-red-50"
        badgeTextColor="text-orange-700"
        badgeBorderColor="border border-orange-200"
        orbColors={["bg-orange-100", "bg-red-100"]}
      />

      <Section
        title="Our Construction Services"
        titleClassName="text-5xl font-bold text-slate-900 text-center mb-16"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              hoverColor="orange"
            />
          ))}
        </div>
      </Section>

      <QuoteEstimator service="construction" />

      <Footer />
    </div>
  );
}
