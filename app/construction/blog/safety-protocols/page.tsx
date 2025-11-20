import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PageWrapper from "../../../components/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Safety Protocols for Construction Site Cleaning | Construction Cleaning Blog",
  description:
    "Important safety guidelines and protocols that should be followed during construction site cleaning to protect workers and ensure compliance.",
  keywords:
    "construction site safety, cleaning safety protocols, construction cleaning safety, OSHA compliance, construction site cleaning",
};

export default function SafetyProtocolsPage() {
  return (
    <PageWrapper>
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blog"
          className="text-orange-500 hover:text-orange-400 mb-4 inline-block"
        >
          ← Back to Blog
        </Link>

        <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-orange-600/30">
          <div className="text-orange-500 text-sm font-semibold mb-4">
            SAFETY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Safety Protocols for Construction Site Cleaning
          </h1>
          <div className="text-slate-400 mb-8">Published: March 25, 2024</div>

          <div className="prose prose-lg max-w-none text-slate-300">
            <p className="text-xl text-slate-200 mb-8">
              Safety is paramount when cleaning construction sites. These
              environments present unique hazards that require specific safety
              protocols to protect workers and ensure compliance with OSHA
              regulations.
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">
              Personal Protective Equipment (PPE)
            </h2>
            <p>All cleaning personnel must wear appropriate PPE:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Hard Hats:</strong> Required at all times to protect
                from falling debris
              </li>
              <li>
                <strong>Safety Glasses:</strong> Protect eyes from dust,
                chemicals, and flying particles
              </li>
              <li>
                <strong>Respirators:</strong> N95 or higher-rated masks for dust
                and chemical protection
              </li>
              <li>
                <strong>Gloves:</strong> Cut-resistant gloves for handling
                debris, chemical-resistant for cleaning solutions
              </li>
              <li>
                <strong>Steel-Toed Boots:</strong> Protect feet from sharp
                objects and heavy materials
              </li>
              <li>
                <strong>High-Visibility Vests:</strong> Ensure visibility to
                other workers and equipment operators
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">
              Hazard Identification
            </h2>
            <p>
              Before beginning any cleaning work, conduct a thorough site
              assessment:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identify exposed electrical wires or live circuits</li>
              <li>Check for unstable structures or materials</li>
              <li>Look for sharp objects, nails, and metal fragments</li>
              <li>Identify chemical storage areas and hazardous materials</li>
              <li>Note areas with limited ventilation</li>
              <li>Check for water accumulation or slippery surfaces</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">
              Chemical Safety
            </h2>
            <p>When using cleaning chemicals:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Read and follow all Safety Data Sheets (SDS)</li>
              <li>Never mix chemicals unless specifically instructed</li>
              <li>Use chemicals in well-ventilated areas</li>
              <li>
                Store chemicals properly and away from incompatible materials
              </li>
              <li>Have emergency eyewash stations and showers accessible</li>
              <li>
                Wear appropriate chemical-resistant gloves and eye protection
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">
              Dust and Air Quality
            </h2>
            <p>
              Construction sites generate significant dust that can be
              hazardous:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use HEPA-filtered vacuums to minimize dust dispersion</li>
              <li>Wet cleaning methods can help control dust</li>
              <li>
                Ensure adequate ventilation, especially in enclosed spaces
              </li>
              <li>Use air scrubbers in areas with poor ventilation</li>
              <li>Monitor air quality in confined spaces</li>
              <li>Be aware of silica dust from concrete and other materials</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">
              Working at Heights
            </h2>
            <p>When cleaning elevated areas:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use proper fall protection equipment (harnesses, lanyards)
              </li>
              <li>
                Ensure ladders and scaffolding are stable and properly secured
              </li>
              <li>Never work alone when at heights</li>
              <li>Check weight limits on platforms and scaffolding</li>
              <li>Be aware of overhead hazards</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">
              Equipment Safety
            </h2>
            <p>Safe operation of cleaning equipment:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Inspect all equipment before use</li>
              <li>Ensure proper grounding of electrical equipment</li>
              <li>Use GFCI-protected outlets for electrical tools</li>
              <li>Keep cords away from water and sharp objects</li>
              <li>Never operate equipment you&apos;re not trained to use</li>
              <li>
                Follow lockout/tagout procedures when working near machinery
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">
              Emergency Procedures
            </h2>
            <p>All workers should know:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Location of first aid kits and emergency equipment</li>
              <li>Emergency contact numbers and procedures</li>
              <li>Evacuation routes and assembly points</li>
              <li>How to report accidents and near-misses</li>
              <li>Location of fire extinguishers and how to use them</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">
              OSHA Compliance
            </h2>
            <p>Ensure compliance with OSHA regulations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintain proper documentation of safety training</li>
              <li>Conduct regular safety meetings</li>
              <li>Keep safety data sheets accessible</li>
              <li>Report all workplace injuries</li>
              <li>Follow OSHA standards for construction site safety</li>
            </ul>

            <div className="mt-12 p-6 bg-slate-700/50 rounded-lg border border-orange-600/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Professional Safety-Focused Cleaning Services
              </h3>
              <p className="text-slate-200 mb-4">
                Our team is fully trained in construction site safety protocols
                and OSHA compliance. We prioritize safety in every aspect of our
                cleaning operations.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </PageWrapper>
  );
}
