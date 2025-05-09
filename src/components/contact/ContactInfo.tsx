
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-900 mb-6">Get in Touch</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-brand-600 mt-1" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-gray-600">david@communication<wbr />connections.ca</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-brand-600 mt-1" />
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-gray-600">647-839-6515</p>
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
    </div>
  );
};

export default ContactInfo;
