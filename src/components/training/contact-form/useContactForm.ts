import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/utils/emailService";
import { ContactFormData } from "@/components/contact/types";
import { trackEvent } from '@/utils/analytics';

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
  interest: z.enum(["organization", "individual"]).default("organization"),
  hasHealthcareBackground: z.enum(["yes", "no"]).default("yes"),
  comments: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "organization",
      hasHealthcareBackground: "yes",
      comments: "",
    },
  });

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      console.log("Form data to submit:", data);
      const success = await sendContactEmail(data);
      
      if (success) {
        // Track successful form submission event
        trackEvent('Contact', 'Form Submit', 'Training Inquiry');
        
        toast({
          title: "Inquiry Sent!",
          description: "We'll get back to you within 2 hours. Thank you for your interest!",
        });
        form.reset();
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
      setIsSubmitting(false);
    }
  };

  return { form, isSubmitting, handleSubmit };
}
