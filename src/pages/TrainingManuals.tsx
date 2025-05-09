
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sendManualOrderEmail } from "@/utils/emailService";
import TitleSection from "@/components/training/manuals/TitleSection";
import FreeTextbookNote from "@/components/training/manuals/FreeTextbookNote";
import ManualsList from "@/components/training/manuals/ManualsList";
import AboutAuthor from "@/components/training/manuals/AboutAuthor";
import ShippingInfo from "@/components/training/manuals/ShippingInfo";
import OrderForm, { FormValues } from "@/components/training/manuals/OrderForm";
import OrderConfirmation from "@/components/training/manuals/OrderConfirmation";
import { manuals } from "@/data/manualsData";
import { useManualPricing } from "@/hooks/useManualPricing";

export default function TrainingManuals() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderStep, setOrderStep] = useState<"browse" | "form" | "payment" | "confirmation">("browse");
  const [selectedManual, setSelectedManual] = useState<string | null>(null);
  
  const { calculateTotal } = useManualPricing(selectedManual || undefined);

  const handleManualSelect = (id: string) => {
    setSelectedManual(id);
    setOrderStep("form");
  };

  const handleBackToBrowse = () => {
    setOrderStep("browse");
    setSelectedManual(null);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log("Order submitted:", data);
      
      // Get the calculated totals
      const { subtotal, hst, total } = calculateTotal();
      
      // Map manual selection to readable text for email
      let manualSelectionText = "";
      if (data.manualSelection === "manual1") {
        manualSelectionText = "Programs & Documentation for Successful Implementation";
      } else if (data.manualSelection === "manual2") {
        manualSelectionText = "Recreation and Leisure in Long Term Care";
      } else if (data.manualSelection === "manual3") {
        manualSelectionText = "PSW Restorative Therapy Basic Training";
      } else if (data.manualSelection === "all") {
        manualSelectionText = "All Manuals (Complete Set)";
      }
      
      // Send the email with order information
      const success = await sendManualOrderEmail({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        province: data.province,
        postalCode: data.postalCode,
        manualSelection: manualSelectionText,
        specialInstructions: data.specialInstructions,
        subtotal,
        hst,
        total
      });
      
      if (success) {
        toast.success("Your order has been placed successfully!");
        setOrderStep("confirmation");
      } else {
        toast.error("There was a problem processing your order. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error("There was a problem processing your order. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Title Section */}
        <TitleSection />

        {/* Free Textbook Note */}
        <FreeTextbookNote />

        {/* Manuals Section */}
        {orderStep === "browse" && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <ManualsList 
                manuals={manuals} 
                onManualSelect={handleManualSelect} 
              />
              
              {/* Add About Author section here */}
              <AboutAuthor />
              
              <ShippingInfo />
            </div>
          </section>
        )}

        {/* Order Form */}
        {orderStep === "form" && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="mb-8">
                <button 
                  className="mb-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  onClick={handleBackToBrowse}
                >
                  ← Back to manuals
                </button>
                <h2 className="text-2xl font-bold text-brand-900 mb-2">Order Form</h2>
                <p className="text-gray-600 mb-6">
                  Please fill out your shipping information to complete your order
                </p>
              </div>

              <OrderForm 
                selectedManual={selectedManual}
                isSubmitting={isSubmitting}
                onSubmit={onSubmit}
                onCancel={handleBackToBrowse}
                calculateTotal={calculateTotal}
              />
            </div>
          </section>
        )}

        {/* Confirmation Section */}
        {orderStep === "confirmation" && (
          <section className="py-16 bg-white">
            <OrderConfirmation onContinueShopping={handleBackToBrowse} />
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
