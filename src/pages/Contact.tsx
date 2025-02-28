
import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, User } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "organization", // Default value
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // In a real implementation, you would send this data to an email service
    // For now, we'll simulate success with a delay
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Inquiry Sent!",
        description: "We'll get back to you within 2 hours. Thank you for your interest!",
      });
      
      // Reset form and close dialog
      setFormData({
        name: "",
        phone: "",
        interest: "organization",
        comments: "",
      });
      setOpen(false);
    }, 1500);

    // In production, you would add code to send to david@communicationconnections.ca
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We're here to help with any questions about our training programs or how 
          we can support your healthcare facility's compliance needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-brand-900 mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-brand-600 mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">david@communicationconnections.ca</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-brand-600 mt-1" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">416-298-7388</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-brand-600 mt-1" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">
                  3850 Finch Avenue East, Suite 306<br />
                  Scarborough, Ontario, M1T 3T6
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-brand-900 mb-6">Quick Inquiry</h2>
            <p className="text-gray-600 mb-4">
              Have a question about our training programs? Click below to send us a message.
              <span className="block font-medium text-brand-600 mt-2">
                We strive to respond to all inquiries within 2 hours.
              </span>
            </p>
            
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="btn-primary">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
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
          </div>
        </div>
        
        <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.9346820629056!2d-79.3046873!3d43.8067517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3e01ede9c77%3A0x84c5ac8e3ac3b737!2s3850%20Finch%20Ave%20E%2C%20Scarborough%2C%20ON%20M1T%203T6%2C%20Canada!5e0!3m2!1sen!2sus!4v1670287864303!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold text-brand-900 mb-4">Our Response Commitment</h2>
        <p className="text-gray-700">
          At Communication Connections, we understand the importance of timely communication. 
          <span className="font-medium text-brand-600"> We strive to respond to all inquiries within 2 hours</span> during 
          business hours (Monday-Friday, 9am-5pm EST). Your questions and concerns are important to us.
        </p>
      </div>
    </div>
  );
};

export default Contact;
