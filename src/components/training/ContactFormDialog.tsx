import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Phone, User, Mail } from "lucide-react";
import { sendContactEmail } from "@/utils/emailService";

interface ContactFormDialogProps {
  trigger: React.ReactNode;
  initialComments?: string;
}

const ContactFormDialog = ({ trigger, initialComments = "" }: ContactFormDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "organization",
    hasHealthcareBackground: "yes",
    comments: initialComments,
  });
  const [loading, setLoading] = useState(false);

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
        
        setFormData({
          name: "",
          phone: "",
          email: "",
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
    <Dialog 
      open={open} 
      onOpenChange={(newOpenState) => {
        setOpen(newOpenState);
        if (!newOpenState) {
          setFormData({
            name: "",
            phone: "",
            email: "",
            interest: "organization",
            hasHealthcareBackground: "yes",
            comments: "",
          });
        }
      }}
    >
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Send Us a Message</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you within 2 hours.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
            <div className="flex mt-1">
              <User className="w-5 h-5 text-gray-400 mr-2 mt-3" />
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
            <div className="flex mt-1">
              <Mail className="w-5 h-5 text-gray-400 mr-2 mt-3" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
            <div className="flex mt-1">
              <Phone className="w-5 h-5 text-gray-400 mr-2 mt-3" />
              <Input
                id="phone"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div>
            <Label>I am interested in training for: <span className="text-red-500">*</span></Label>
            <RadioGroup 
              className="mt-2"
              value={formData.interest} 
              onValueChange={handleRadioChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="organization" id="organization" />
                <Label htmlFor="organization">My organization/facility</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="personal" id="personal" />
                <Label htmlFor="personal">Myself personally</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label>Do you have a healthcare background? <span className="text-red-500">*</span></Label>
            <RadioGroup 
              className="mt-2"
              value={formData.hasHealthcareBackground} 
              onValueChange={handleHealthcareBackgroundChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="healthcare-yes" />
                <Label htmlFor="healthcare-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="healthcare-no" />
                <Label htmlFor="healthcare-no">No</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="comments">Additional Comments</Label>
            <Textarea
              id="comments"
              name="comments"
              placeholder="Tell us more about your training needs"
              value={formData.comments}
              onChange={handleChange}
              className="mt-1"
              rows={4}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
