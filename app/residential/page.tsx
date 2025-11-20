"use client";

import QuoteEstimator from "../components/QuoteEstimator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import BlogCard from "../components/BlogCard";
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
    icon: "🧽",
    title: "Carpet Cleaning",
    description:
      "Professional steam cleaning to remove deep-seated dirt, stains, and allergens from your carpets and rugs.",
  },
  {
    icon: "🌿",
    title: "Eco-Friendly Options",
    description:
      "Green cleaning solutions that are safe for your family and pets while being effective against dirt and germs.",
  },
];

const testimonials = [
  {
    quote:
      "&quot;MB Cleaning has been cleaning our home for over a year now. They&apos;re reliable, thorough, and always leave our house sparkling. Highly recommend!&quot;",
    author: "- Sarah M., Homeowner",
  },
  {
    quote:
      "&quot;The deep cleaning service was incredible! They cleaned areas I didn&apos;t even know needed attention. Our home has never looked better.&quot;",
    author: "- Michael R., Homeowner",
  },
  {
    quote:
      "&quot;Moving was stressful, but MB Cleaning made the move-in cleaning so easy. The house was spotless when we arrived. Worth every penny!&quot;",
    author: "- Jennifer L., Homeowner",
  },
];

const blogPosts = [
  {
    category: "CLEANING TIPS",
    categoryColor: "text-blue-600",
    title: "10 Essential Spring Cleaning Tips for Your Home",
    description:
      "Discover the best strategies for a thorough spring cleaning that will make your home shine and improve your indoor air quality.",
    href: "/residential/blog/spring-cleaning-tips",
    linkColor: "text-blue-600 hover:text-blue-800",
  },
  {
    category: "ECO-FRIENDLY",
    categoryColor: "text-green-600",
    title: "How to Clean Naturally Without Harsh Chemicals",
    description:
      "Learn about natural cleaning solutions that are safe for your family and the environment while being effective against dirt and germs.",
    href: "/residential/blog/natural-cleaning",
    linkColor: "text-green-600 hover:text-green-800",
  },
  {
    category: "ORGANIZATION",
    categoryColor: "text-blue-600",
    title: "Decluttering Your Home: A Room-by-Room Guide",
    description:
      "Practical tips for organizing and decluttering each room in your home to create a more peaceful and manageable living space.",
    href: "/residential/blog/decluttering-guide",
    linkColor: "text-blue-600 hover:text-blue-800",
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

      <Section title="What Our Clients Say" className="bg-slate-50 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>
      </Section>

      <QuoteEstimator service="residential" />

      <Section title="Cleaning Tips & Insights" className="bg-white py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              category={post.category}
              categoryColor={post.categoryColor}
              title={post.title}
              description={post.description}
              href={post.href}
              linkColor={post.linkColor}
            />
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
