
import React from "react";
import { University } from "lucide-react";

const AcademicPartnershipsSection: React.FC = () => {
  return (
    <section className="py-16 bg-brand-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <University className="h-9 w-9 text-brand-600 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-brand-900">
              Academic Partnerships
            </h2>
          </div>
          
          <p className="text-center text-gray-700 mb-10">
            Enhancing our training with recognized academic credentials
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-xl font-semibold text-brand-900 mb-4">Established Academic Relationships</h3>
            
            <p className="text-gray-700 mb-4">
              Communication Connections has established formal partnerships with recognized post-secondary 
              institutions across Ontario, including <span className="font-medium">Canadore College</span>, 
              to ensure our training programs align with academic standards and emerging healthcare research.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-brand-50 p-5 rounded-lg border border-brand-100">
                <h4 className="font-medium text-brand-900 mb-2">Curriculum Development</h4>
                <p className="text-gray-700">
                  Our training materials undergo academic review and are regularly updated to reflect the latest
                  research in gerontology and restorative care, ensuring participants receive education that meets
                  recognized professional standards.
                </p>
              </div>
              
              <div className="bg-brand-50 p-5 rounded-lg border border-brand-100">
                <h4 className="font-medium text-brand-900 mb-2">Continuing Education Credits</h4>
                <p className="text-gray-700">
                  Many of our programs offer continuing education credits through our post-secondary partnerships,
                  allowing healthcare professionals to maintain credentials while enhancing their skills in
                  specialized areas of senior care.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700">
                Through our collaboration with Canadore College and other Ontario institutions, Communication Connections
                bridges the gap between academic theory and practical application. Our training programs incorporate
                evidence-based approaches validated through academic research, ensuring that participants receive
                instruction that is both theoretically sound and practically applicable in care environments.
              </p>
              
              <p className="text-gray-700 mt-4">
                These academic partnerships allow us to maintain a leading position in healthcare training, with program
                content that is regularly reviewed by subject matter experts from both clinical practice and academic research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicPartnershipsSection;
