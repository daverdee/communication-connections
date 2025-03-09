
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sendContactEmail } from "@/utils/emailService";
import ContactInfo from "@/components/contact/ContactInfo";
import QuickInquiry from "@/components/contact/QuickInquiry";
import Map from "@/components/contact/Map";
import ResponseCommitment from "@/components/contact/ResponseCommitment";
import { ContactFormData } from "@/components/contact/types";

const Contact = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    interest: "organization",
    hasHealthcareBackground: "yes",
    comments: "",
  });
  const [loading, setLoading] = useState(false);

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
      console.log("Submitting form data:", formData);
      
      const success = await sendContactEmail(formData);
      
      if (success) {
        toast({
          title: "Inquiry Sent!",
          description: "We'll get back to you within 2 hours. Thank you for your interest!",
        });
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "organization",
          hasHealthcareBackground: "yes",
          comments: "",
        });
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

  return (
    <>
      <Navbar />
      <div className="container max-w-6xl mx-auto py-12 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're here to help with any questions about our training programs or how 
            we can support your healthcare facility's compliance needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ContactInfo />
            
            <QuickInquiry 
              open={open}
              setOpen={setOpen}
              formData={formData}
              loading={loading}
              handleChange={handleChange}
              handleRadioChange={handleRadioChange}
              handleHealthcareBackgroundChange={handleHealthcareBackgroundChange}
              handleSubmit={handleSubmit}
            />
          </div>
          
          <Map />
        </div>

        <ResponseCommitment />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
