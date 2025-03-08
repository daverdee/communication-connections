
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
          Ready to Enhance Your Facility's Restorative Care?
        </h2>
        
        <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Find the right program for your team
        </p>
        
        <div className="inline-block animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white text-brand-700 rounded-md font-medium hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
