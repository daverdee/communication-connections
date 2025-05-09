
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactFormDialog from "./ContactFormDialog";

interface TrainingProgramProps {
  title: string;
  idealFor: string;
  description?: string;
  learningPoints: string[];
  insight: string;
}

const TrainingProgram: React.FC<TrainingProgramProps> = ({
  title,
  idealFor,
  description,
  learningPoints,
  insight
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="bg-brand-50 py-4 px-6">
        <h3 className="text-xl font-semibold text-brand-900">{title}</h3>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <p className="font-medium text-gray-700">Ideal for:</p>
          <p className="text-gray-600">{idealFor}</p>
        </div>
        
        {description && (
          <div className="mb-4">
            <p className="text-gray-600">{description}</p>
          </div>
        )}
        
        <div className="mb-6">
          <p className="font-medium text-gray-700 mb-2">
            {title.includes("On-Site") || title.includes("In-Person") 
              ? "How It Works:" 
              : "What You'll Learn:"}
          </p>
          <ul className="space-y-2">
            {learningPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-brand-50 p-4 rounded-md mb-5">
          <div className="flex items-start">
            <div className="bg-brand-100 p-2 rounded-full mr-3">
              <div className="text-brand-600">💡</div>
            </div>
            <p className="text-brand-800 italic">{insight}</p>
          </div>
        </div>
        
        <div className="text-center">
          <ContactFormDialog 
            trigger={
              <Button variant="outline" className="w-full">
                Inquire About Pricing
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TrainingProgram;
