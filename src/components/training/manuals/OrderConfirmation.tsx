
import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderConfirmationProps {
  onContinueShopping: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ onContinueShopping }) => {
  return (
    <div className="container mx-auto px-4 max-w-2xl text-center">
      <div className="mb-8 flex flex-col items-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-brand-900 mb-2">Order Confirmed!</h2>
        <p className="text-gray-600 mb-8">
          Thank you for your order. We'll ship your manual(s) soon.
        </p>
        <Button 
          onClick={onContinueShopping}
          className="bg-brand-600 hover:bg-brand-700"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
