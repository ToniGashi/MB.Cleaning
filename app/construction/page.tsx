"use client";

import QuoteEstimator from "../components/QuoteEstimator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import BlogCard from "../components/BlogCard";
import CaseStudyCard from "../components/CaseStudyCard";
import Section from "../components/Section";

const services = [
  {
    icon: "🧹",
    title: "Post-Construction Cleanup",
    description:
      "Comprehensive cleaning after construction completion. Includes removal of construction debris, dust, and materials to prepare the site for occupancy.",
  },
  {
    icon: "🗑️",
    title: "Debris Removal",
    description:
      "Efficient removal and disposal of construction waste, materials, and debris. We handle everything from small scraps to large items.",
  },
  {
    icon: "✨",
    title: "Final Detailing",
    description:
      "Detailed cleaning of all surfaces, fixtures, and finishes. Window cleaning, floor polishing, and thorough sanitization for move-in ready condition.",
  },
  {
    icon: "🏗️",
    title: "Rough Clean",
    description:
      "Initial cleanup during construction phases to maintain a safe and organized work environment for your construction team.",
  },
  {
    icon: "🧽",
    title: "Window & Glass Cleaning",
    description:
      "Professional cleaning of all windows, glass surfaces, and mirrors to remove construction residue and achieve crystal-clear results.",
  },
  {
    icon: "🔧",
    title: "HVAC System Cleaning",
    description:
      "Cleaning of HVAC systems, vents, and ducts to remove construction dust and ensure optimal air quality for the building.",
  },
];

const caseStudies = [
  {
    category: "COMMERCIAL BUILDING",
    title: "Office Complex - 50,000 sq ft",
    description:
      "Completed comprehensive post-construction cleanup for a 5-story office building. Removed all construction debris, detailed all floors, and prepared the building for tenant move-in.",
    completionTime: "Completed in 5 days",
  },
  {
    category: "RESIDENTIAL DEVELOPMENT",
    title: "Luxury Condo Complex - 20 Units",
    description:
      "Final detailing and cleanup for a luxury condominium development. Each unit received thorough cleaning, window washing, and move-in ready preparation.",
    completionTime: "Completed in 3 days",
  },
  {
    category: "RETAIL SPACE",
    title: "Shopping Center - 15,000 sq ft",
    description:
      "Post-construction cleanup for a new retail shopping center. Handled debris removal, floor polishing, and complete sanitization before store openings.",
    completionTime: "Completed in 2 days",
  },
];

const testimonials = [
  {
    quote:
      "&quot;MB Cleaning has been our go-to cleaning service for all our construction projects. They&apos;re reliable, thorough, and always meet our tight deadlines. Highly professional team!&quot;",
    author: "- David K., General Contractor",
  },
  {
    quote:
      "&quot;The quality of their post-construction cleanup is outstanding. They pay attention to every detail and ensure our projects are ready for handover. Excellent service!&quot;",
    author: "- Maria S., Construction Manager",
  },
  {
    quote:
      "&quot;We&apos;ve used MB Cleaning for multiple commercial projects. Their debris removal service is efficient, and their final detailing is impeccable. They understand construction timelines.&quot;",
    author: "- Robert T., Building Company Owner",
  },
];

const blogPosts = [
  {
    category: "INDUSTRY NEWS",
    categoryColor: "text-orange-600",
    title: "Best Practices for Post-Construction Site Cleanup",
    description:
      "Learn the essential steps and best practices for effective post-construction cleanup that ensures safety and prepares sites for occupancy.",
    href: "/construction/blog/post-construction-cleanup",
    linkColor: "text-orange-600 hover:text-orange-800",
  },
  {
    category: "SAFETY",
    categoryColor: "text-orange-600",
    title: "Safety Protocols for Construction Site Cleaning",
    description:
      "Important safety guidelines and protocols that should be followed during construction site cleaning to protect workers and ensure compliance.",
    href: "/construction/blog/safety-protocols",
    linkColor: "text-orange-600 hover:text-orange-800",
  },
  {
    category: "EFFICIENCY",
    categoryColor: "text-orange-600",
    title: "How Professional Cleaning Saves Time and Money",
    description:
      "Discover how hiring professional construction cleaning services can help contractors save time, reduce costs, and meet project deadlines more effectively.",
    href: "/construction/blog/professional-cleaning-benefits",
    linkColor: "text-orange-600 hover:text-orange-800",
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

      <Section
        title="Past Projects & Case Studies"
        className="bg-slate-50 py-24"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              category={study.category}
              title={study.title}
              description={study.description}
              completionTime={study.completionTime}
              accentColor="text-orange-600"
            />
          ))}
        </div>
      </Section>

      <Section title="Trusted by Contractors" className="bg-white py-24">
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

      <QuoteEstimator service="construction" />

      <Section title="Industry Insights & News" className="bg-slate-50 py-24">
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
