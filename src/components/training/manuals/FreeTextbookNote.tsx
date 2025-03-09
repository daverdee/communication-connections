
import React from "react";
import { Info } from "lucide-react";

const FreeTextbookNote: React.FC = () => {
  return (
    <section className="py-6 bg-brand-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 p-4 border border-brand-200 rounded-lg bg-brand-50 max-w-3xl mx-auto">
          <Info className="h-8 w-8 text-brand-600 flex-shrink-0" />
          <p className="text-lg text-brand-800">
            <span className="font-semibold">Special Offer:</span> Select courses will include the textbook at no additional cost. Please contact us for details on which courses qualify for free textbooks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeTextbookNote;
