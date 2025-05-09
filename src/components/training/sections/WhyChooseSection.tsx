
import React from "react";
import { Check } from "lucide-react";

const WhyChooseSection: React.FC = () => {
  const whyChooseReasons = [
    "Government Compliance & Audit Readiness – Ensures your facility meets Ministry of Long-Term Care mandates.",
    "Proven Training Methods – Backed by 12+ years of experience and partnerships LTC and Retirement homes across Ontario.",
    "Exclusive Training Materials – We own proprietary restorative therapy manuals aligned with regulatory requirements.",
    "Certified Professionals are added to the RPAO Database – Recognized by employers and regulatory bodies."
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-8 text-center">
            Why Choose Communication Connections?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseReasons.map((reason, index) => (
              <div 
                key={index}
                className="flex items-start p-5 bg-white rounded-lg border border-gray-100"
              >
                <Check className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
