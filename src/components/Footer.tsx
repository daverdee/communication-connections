
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and description - takes more space */}
          <div className="md:col-span-5">
            <div className="flex flex-col items-start">
              <img 
                src="/lovable-uploads/b6dc2a26-813f-421b-8068-7783498280ba.png" 
                alt="Communication Connections Logo" 
                className="h-16 w-16 mb-3"
              />
              <Link to="/" className="text-2xl font-display font-bold text-brand-900 inline-block">
                <span className="text-brand-600">Communication</span> Connections
              </Link>
            </div>
            <p className="text-gray-600 mt-4 max-w-md">
              Empowering healthcare professionals with industry-leading restorative therapy training for over 12 years.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 hover:bg-brand-200 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/105908312/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 hover:bg-brand-200 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links - adjusted columns */}
          <div className="md:col-span-3 md:ml-6">
            <h3 className="text-lg font-semibold text-brand-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-brand-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-brand-600 transition-colors">About Us</Link></li>
              <li><Link to="/training" className="text-gray-600 hover:text-brand-600 transition-colors">Training Programs</Link></li>
              <li><Link to="/compliance" className="text-gray-600 hover:text-brand-600 transition-colors">Compliance & Benefits</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Information - adjusted columns and padding */}
          <div className="md:col-span-4 md:pr-10">
            <h3 className="text-lg font-semibold text-brand-900 mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                <span className="text-gray-600">416-298-7388</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                <a href="mailto:david@communicationconnections.ca" className="text-gray-600 hover:text-brand-600 transition-colors break-all">
                  david@communicationconnections.ca
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                <span className="text-gray-600">
                  3850 Finch Avenue East, Suite 306, Scarborough, Ontario, M1T 3T6
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-center">
            © {currentYear} Communication Connections. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
