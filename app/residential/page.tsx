"use client";

import QuoteEstimator from "../components/QuoteEstimator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import Section from "../components/Section";

const services = [
  {
    icon: "🧹",
    title: "Regular Cleaning",
    description:
      "Weekly/Monthly cleaning to maintain your home&apos;s cleanliness. Dusting, vacuuming, mopping, and bathroom cleaning included.",
  },
  {
    icon: "✨",
    title: "Deep Cleaning",
    description:
      "Comprehensive deep cleaning service for a thorough refresh. Perfect for spring cleaning or after special events.",
  },
  {
    icon: "📦",
    title: "Move-In/Out Cleaning",
    description:
      "Complete cleaning service for moving day. Ensure your new home is spotless or get your deposit back.",
  },
  {
    icon: "🪟",
    title: "Window Cleaning",
    description:
      "Interior and exterior window cleaning for crystal-clear views and natural light throughout your home.",
  },
  {
    icon: "🚗",
    title: "Garage Cleaning",
    description:
      "Complete garage organization and cleaning service including floor sweeping, wall cleaning, and organizing storage areas to maximize your garage space.",
  },
  {
    icon: "🌿",
    title: "Eco-Friendly Options",
    description:
      "Green cleaning solutions that are safe for your family and pets while being effective against dirt and germs.",
  },
];

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        badge="Residential Services"
        title="Residential"
        titleGradient="bg-gradient-to-r from-blue-600 via-green-600 to-blue-600"
        subtitle="Cleaning Services"
        description="Transform your home and office into healthy, spotless spaces with our professional cleaning services using eco-friendly, non-toxic products."
        badgeGradient="bg-gradient-to-r from-blue-50 to-green-50"
        badgeTextColor="text-blue-700"
        badgeBorderColor="border border-blue-200"
        orbColors={["bg-blue-100", "bg-green-100"]}
      />

      <Section
        title="Our Services"
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
              hoverColor="blue"
            />
          ))}
        </div>
      </Section>

      <QuoteEstimator service="residential" />

      <Footer />
    </div>
  );
}
