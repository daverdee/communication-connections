
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ComplianceSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
              Meeting Ministry Standards & Enhancing Care Quality
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Our comprehensive training programs ensure your facility meets all regulatory requirements while significantly improving resident outcomes and care quality.
            </p>
            
            <ul className="space-y-4">
              {[
                "Compliance with Ministry of Health's Restorative Care Legislation",
                "Training aligns with MDS/RAI requirements",
                "Certified professionals added to the RPAO database",
                "Enhanced resident mobility and independence",
                "Reduced falls and hospitalizations"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10">
              <Link to="/training" className="btn-primary">
                Explore Our Training Programs
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/b0af0dd6-9202-4916-927e-97917d434b3c.png" 
                  alt="Caregiver with elderly patient" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg bg-brand-100 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg bg-brand-50 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
