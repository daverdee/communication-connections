
import React from "react";
import { ArrowRight, PhoneCall, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactFormDialog from "../ContactFormDialog";

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-brand-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss which training solution is right for your facility.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <PhoneCall className="h-6 w-6" />
              </div>
              <p className="font-medium">Call Us</p>
              <p className="text-white/90">647-839-6515</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <Mail className="h-6 w-6" />
              </div>
              <p className="font-medium">Email Us</p>
              <p className="text-white/90">
                leilacccs<wbr />@gmail.com
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <MapPin className="h-6 w-6" />
              </div>
              <p className="font-medium">Visit Us</p>
              <p className="text-white/90">3850 Finch Avenue East<br />Scarborough, Ontario</p>
            </div>
          </div>
          
          <ContactFormDialog 
            trigger={
              <Button 
                className="inline-flex items-center px-8 py-4 bg-white text-brand-700 rounded-md font-medium hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
