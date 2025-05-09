
import React from "react";
import { University, Award, Handshake, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AcademicPartnershipsSection: React.FC = () => {
  const partners = [
    {
      name: "Canadore College",
      description: "Collaborative curriculum development for healthcare training.",
      icon: <University className="h-10 w-10 text-brand-600" />
    },
    {
      name: "Ontario Tech University",
      description: "Research partnership on restorative care outcomes.",
      icon: <GraduationCap className="h-10 w-10 text-brand-600" />
    },
    {
      name: "Centennial College",
      description: "Student placement opportunities and joint certification.",
      icon: <Award className="h-10 w-10 text-brand-600" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">
            Academic Partnerships
          </h2>
          <p className="text-gray-700">
            Our training programs are developed in collaboration with leading post-secondary institutions to ensure the highest standards of educational quality and industry relevance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white rounded-lg p-6 shadow-md border border-gray-100",
                "hover:shadow-lg transition-all duration-300"
              )}
            >
              <div className="flex justify-center mb-4">
                {partner.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-900 text-center mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-600 text-center">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-brand-50 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="p-3 bg-white rounded-full shadow-md">
                <Handshake className="h-16 w-16 text-brand-600" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-brand-900 mb-3">Why Our Academic Partnerships Matter</h3>
              <p className="text-gray-700 mb-4">
                Our collaborations with institutions like Canadore College ensure our training programs remain at the forefront of healthcare education. These partnerships allow us to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-brand-600">•</div>
                  <span className="text-gray-700">Integrate the latest research into our curriculum</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-brand-600">•</div>
                  <span className="text-gray-700">Provide pathways for continuing education and career advancement</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-brand-600">•</div>
                  <span className="text-gray-700">Ensure our programs meet recognized academic standards</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-brand-600">•</div>
                  <span className="text-gray-700">Create opportunities for practical learning experiences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicPartnershipsSection;
