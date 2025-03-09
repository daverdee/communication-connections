
import React from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactDialog from "./ContactDialog";
import { ContactFormData } from "./types";

interface QuickInquiryProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  formData: ContactFormData;
  loading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleRadioChange: (value: string) => void;
  handleHealthcareBackgroundChange: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const QuickInquiry: React.FC<QuickInquiryProps> = ({
  open,
  setOpen,
  formData,
  loading,
  handleChange,
  handleRadioChange,
  handleHealthcareBackgroundChange,
  handleSubmit
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-brand-900 mb-6">Quick Inquiry</h2>
      <p className="text-gray-600 mb-4">
        Have a question about our training programs? Click below to send us a message.
        <span className="block font-medium text-brand-600 mt-2">
          We strive to respond to all inquiries within 2 hours.
        </span>
      </p>
      
      <ContactDialog
        open={open}
        setOpen={setOpen}
        formData={formData}
        loading={loading}
        handleChange={handleChange}
        handleRadioChange={handleRadioChange}
        handleHealthcareBackgroundChange={handleHealthcareBackgroundChange}
        handleSubmit={handleSubmit}
        trigger={
          <Button className="btn-primary">
            <MessageSquare className="w-5 h-5 mr-2" />
            Contact Us
          </Button>
        }
      />
    </div>
  );
};

export default QuickInquiry;
