
import React from "react";
import { Book, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactFormDialog from "@/components/training/ContactFormDialog";

interface ManualDetail {
  text: string;
}

export interface ManualCardProps {
  id: string;
  title: string;
  author: string;
  pages: number;
  price: number;
  description: string;
  details: string[];
}

const ManualCard: React.FC<ManualCardProps> = ({
  id,
  title,
  author,
  pages,
  price,
  description,
  details
}) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white hover:shadow-md transition-shadow">
      <div className="flex items-start mb-4">
        <div className="mr-4 bg-brand-100 p-3 rounded-lg">
          <Book className="h-8 w-8 text-brand-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brand-900">{title}</h3>
          <p className="text-gray-500">
            <span className="font-medium">By {author}</span> • {pages} pages
          </p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">{description}</p>
      
      <ul className="mb-6 space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm">{detail}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex items-center justify-between mt-6">
        <span className="text-2xl font-bold text-brand-900">${price.toFixed(2)} CAD</span>
        <ContactFormDialog 
          trigger={
            <Button className="bg-brand-600 hover:bg-brand-700">
              Order Now
            </Button>
          }
          initialComments={`I'm interested in ordering the "${title}" manual. Please provide me with information on how to purchase.`}
        />
      </div>
    </div>
  );
};

export default ManualCard;
