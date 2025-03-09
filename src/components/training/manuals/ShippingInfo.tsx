
import React from "react";
import { Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactFormDialog from "@/components/training/ContactFormDialog";

const ShippingInfo: React.FC = () => {
  return (
    <div className="mt-12 p-6 bg-brand-50 rounded-lg border border-brand-100 max-w-3xl mx-auto">
      <h3 className="text-xl font-semibold text-brand-900 mb-4 flex items-center">
        <Truck className="mr-2 h-5 w-5" />
        Shipping Information
      </h3>
      <p className="text-gray-700 mb-2">All manuals are shipped within Canada with a flat shipping rate of $15 CAD.</p>
      <p className="text-gray-700">Order multiple manuals together for combined shipping and save!</p>
      <div className="flex flex-wrap gap-4 mt-4">
        <ContactFormDialog 
          trigger={
            <Button variant="outline">
              Order All Manuals (${189.97.toFixed(2)} + HST)
            </Button>
          }
          initialComments={`I'm interested in ordering the complete set of all training manuals. Please provide me with information on how to purchase the full collection.`}
        />
      </div>
    </div>
  );
};

export default ShippingInfo;
