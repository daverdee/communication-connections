
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { User, Phone } from "lucide-react";
import { ContactFormData } from "./types";

interface ContactDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  formData: ContactFormData;
  loading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleRadioChange: (value: string) => void;
  handleHealthcareBackgroundChange: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  trigger: React.ReactNode;
}

const ContactDialog: React.FC<ContactDialogProps> = ({
  open,
  setOpen,
  formData,
  loading,
  handleChange,
  handleRadioChange,
  handleHealthcareBackgroundChange,
  handleSubmit,
  trigger
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
            <div className="flex mt-1">
              <User className="w-5 h-5 text-gray-400 mr-2 mt-3" />
              <Input
                id="email"
                name="email"
                placeholder="Your email"
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
            <Label>I have a healthcare background: <span className="text-red-500">*</span></Label>
            <RadioGroup 
              className="mt-2"
              value={formData.hasHealthcareBackground} 
              onValueChange={handleHealthcareBackgroundChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
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

export default ContactDialog;
