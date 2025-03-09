
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/utils/emailService";
import { FormData } from "./types";

export const useContactForm = (initialComments: string = "") => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    interest: "organization",
    hasHealthcareBackground: "yes",
    comments: initialComments,
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      comments: initialComments
    }));
  }, [initialComments, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interest: value,
    }));
  };

  const handleHealthcareBackgroundChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      hasHealthcareBackground: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Submitting form data from dialog:", formData);
      
      const success = await sendContactEmail(formData);
      
      if (success) {
        toast({
          title: "Inquiry Sent!",
          description: "We'll get back to you within 2 hours. Thank you for your interest!",
        });
        
        resetForm();
        setOpen(false);
      } else {
        toast({
          title: "Something went wrong",
          description: "Unable to send your inquiry. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast({
        title: "Something went wrong",
        description: "Unable to send your inquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      interest: "organization",
      hasHealthcareBackground: "yes",
      comments: "",
    });
  };

  return {
    formData,
    loading,
    open,
    setOpen,
    handleChange,
    handleRadioChange,
    handleHealthcareBackgroundChange,
    handleSubmit,
    resetForm
  };
};
