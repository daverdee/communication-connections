
import React from "react";
import { BookOpen, Award } from "lucide-react";

const AboutAuthor: React.FC = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-brand-900 mb-6 flex items-center">
          <BookOpen className="mr-2 h-6 w-6 text-brand-600" />
          About the Author
        </h2>
        
        <div className="bg-brand-50 p-6 rounded-lg border border-brand-100">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="bg-white rounded-full p-3 border border-brand-100">
              <Award className="h-12 w-12 text-brand-600" />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-brand-900 mb-2">Sharron J. Brigham</h3>
              <p className="text-gray-700 leading-relaxed">
                Sharron J. Brigham is a distinguished expert in senior care with over 25 years of experience 
                in developing specialized training programs for healthcare professionals. As the principal author for 
                Communication Connections, she has dedicated her career to improving the quality of care in long-term care 
                facilities across Canada. Her innovative approach to restorative therapy and senior wellness has been 
                implemented in numerous healthcare institutions, resulting in measurable improvements in patient outcomes. 
                Sharron combines her extensive practical experience with academic rigor to create comprehensive training 
                materials that address the unique challenges of the Canadian healthcare system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
