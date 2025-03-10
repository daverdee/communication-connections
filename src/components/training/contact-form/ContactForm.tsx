
import React, { ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Phone, User, Mail } from "lucide-react";
import { FormData } from "./types";

interface ContactFormProps {
  formData: FormData;
  loading: boolean;
  onSubmit: (e: FormEvent) => Promise<void>;
  onInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onInterestChange: (value: "organization" | "individual" | "personal") => void;
  onHealthcareBackgroundChange: (value: "yes" | "no") => void;
}

const ContactForm = ({
  formData,
  loading,
  onSubmit,
  onInputChange,
  onInterestChange,
  onHealthcareBackgroundChange,
}: ContactFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 mt-4">
      <div>
        <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
        <div className="flex mt-1">
          <User className="w-5 h-5 text-gray-400 mr-2 mt-3" />
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={onInputChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
            required
          />
        </div>
      </div>
      
      <div>
        <Label>I am interested in training for: <span className="text-red-500">*</span></Label>
        <RadioGroup 
          className="mt-2"
          value={formData.interest} 
          onValueChange={onInterestChange}
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
          onValueChange={onHealthcareBackgroundChange}
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
          onChange={onInputChange}
          className="mt-1"
          rows={4}
        />
      </div>
      
      <SubmitButton loading={loading} />
    </form>
  );
};

const SubmitButton = ({ loading }: { loading: boolean }) => (
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
);

export default ContactForm;
