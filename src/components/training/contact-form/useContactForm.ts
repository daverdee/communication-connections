
import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/utils/emailService";
import { trackEvent } from '@/utils/analytics';
import { FormData } from "./types";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  interest: z.enum(["organization", "individual", "personal"]),
  hasHealthcareBackground: z.enum(["yes", "no"]),
  comments: z.string().optional(),
});

export function useContactForm(initialComments: string = "") {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "organization",
    hasHealthcareBackground: "yes",
    comments: initialComments || "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: "organization" | "individual" | "personal") => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleHealthcareBackgroundChange = (value: "yes" | "no") => {
    setFormData((prev) => ({ ...prev, hasHealthcareBackground: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      console.log("Form data to submit:", formData);
      const success = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        interest: formData.interest,
        hasHealthcareBackground: formData.hasHealthcareBackground,
        comments: formData.comments
      });
      
      if (success) {
        // Track successful form submission event
        trackEvent('Contact', 'Form Submit', 'Training Inquiry');
        
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
      email: "",
      phone: "",
      interest: "organization",
      hasHealthcareBackground: "yes",
      comments: initialComments || "",
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
}
