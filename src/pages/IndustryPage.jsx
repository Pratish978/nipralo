import React, { useState } from "react";
import {
  Pill,
  FlaskConical,
  Shirt,
  Lightbulb,
  Car,
  Package,
  Clock,
  Wine,
  Smartphone,
  ChevronDown,
} from "lucide-react";

const industries = [
  {
    icon: Pill,
    title: "Pharmaceuticals",
    description:
      "The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and reliable shipments.",
  },
  {
    icon: FlaskConical,
    title: "Chemicals",
    description:
      "We follow IATA guidelines for chemical imports and exports, offering competitive options. With strong authority relations and continuous monitoring, we ensure a smooth, compliant, and efficient supply chain experience.",
  },
  {
    icon: Shirt,
    title: "Textiles",
    description:
      "We are sensitive to the tightly controlled consignments and seasonality within the textile industry. We optimize your supply chain through our distribution and consolidation services. Our door to door offerings and constant shipment tracking allow you to efficiently monitor your consignments.",
  },
  {
    icon: Lightbulb,
    title: "Energy",
    description:
      "As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy by coming up with creative methods to serve emerging markets.",
  },
  {
    icon: Car,
    title: "Automobile",
    description:
      "Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends of this industry across our global network.",
  },
  {
    icon: Package,
    title: "Packaging",
    description:
      "The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers. Our experienced team uses this network to provide you with timely and affordable solutions.",
  },
  {
    icon: Clock,
    title: "Time Critical Cargo",
    description:
      "We leverage strong carrier relations to secure priority pricing while ensuring swift, efficient operations for time-critical cargo.",
  },
  {
    icon: Wine,
    title: "Glassware",
    description:
      "Our team is acquainted with the extensive reach and distribution network of the glassware industry. We couple our global supply chain knowledge with material handling expertise to ensure your shipments are transported reliably and efficiently.",
  },
  {
    icon: Smartphone,
    title: "Electronics",
    description:
      "We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays. Our logistics solutions help businesses meet market demands while optimizing supply chain costs.",
  },
];

const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "We serve various industries including pharmaceuticals, chemicals, energy, packaging, textiles, and more, offering tailored logistics solutions for each.",
  },
  {
    question: "How do you handle temperature-sensitive shipments?",
    answer:
      "We provide temperature-controlled solutions to ensure the safe transport of sensitive goods, especially for the pharmaceutical industry.",
  },
  {
    question: "What sets your logistics apart?",
    answer:
      "We offer customized, transparent solutions with competitive rates and a deep understanding of industry-specific needs.",
  },
  {
    question: "How do you ensure compliance with regulations?",
    answer:
      "We comply with international guidelines, working closely with authorities to ensure smooth and legal shipments.",
  },
];

function IndustryCard({ icon: Icon, title, description }) {
  return (
    <div
      className="rounded-2xl p-8 h-full flex flex-col"
      style={{
        background: "linear-gradient(135deg, #f0916a 0%, #e8703f 100%)",
      }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-5 flex-shrink-0"
        style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
      >
        <Icon size={28} color="#ffffff" strokeWidth={1.75} />
      </div>
      <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/90 text-[15px] leading-relaxed">{description}</p>
    </div>
  );
}

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-semibold text-gray-900 text-[17px] pr-4">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-gray-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "200px" : "0px" }}
      >
        <p className="text-gray-500 leading-relaxed pb-5 pr-8">{answer}</p>
      </div>
    </div>
  );
}

export default function IndustriesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-white w-full">
      {/* Industries Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-500 mb-6">
            INDUSTRIES
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Over the past two decades we have been coming up with innovative
            ways to enable global trade across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <IndustryCard key={ind.title} {...ind} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              <span className="text-gray-900">Frequently Asked</span>{" "}
              <span className="text-gray-400">Questions</span>
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-md">
              Find answers to common industry questions, ensuring clarity on
              our services, processes, and solutions.
            </p>
          </div>

          <div>
            <div className="border-t border-gray-200">
              {faqs.map((faq, i) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 px-6">
        <div className="absolute inset-0 grid grid-cols-3">
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80')",
            }}
          />
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80')",
            }}
          />
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tailored Logistics for Every Industry
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Delivering tailored supply chain solutions to meet the unique
            needs of industries worldwide.
          </p>
          <button
            className="px-7 py-3 rounded-md font-semibold text-white transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f0916a 0%, #e8703f 100%)",
            }}
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}