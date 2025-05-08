
import React from "react";
import { Book } from "lucide-react";

const AboutAuthor: React.FC = () => {
  return (
    <div className="mt-16 max-w-3xl mx-auto bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-bold text-brand-900 mb-4 flex items-center">
        <Book className="mr-3 h-6 w-6 text-brand-600" />
        About the Author
      </h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-brand-900 mb-2">Sharron J. Brigham</h3>
          <p className="text-gray-700 mb-4">
            Sharron J. Brigham is a distinguished author and expert in senior care and restorative therapy 
            with over 25 years of experience in long-term care facilities across Canada. As a certified 
            healthcare administrator and gerontology specialist, she has dedicated her career to improving 
            the quality of life for seniors through innovative care approaches and staff training programs.
          </p>
          <p className="text-gray-700">
            Through her extensive work with Communication Connections, Sharron has developed comprehensive 
            training materials that bridge theory and practical application in senior care. Her manuals are 
            widely recognized for their clarity, relevance to Canadian healthcare standards, and effectiveness 
            in implementing positive change in care environments. Sharron continues to consult with long-term 
            care facilities and conduct workshops throughout Ontario, sharing her expertise and passion for 
            dignified and restorative senior care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
