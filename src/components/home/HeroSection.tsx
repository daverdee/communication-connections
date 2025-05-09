
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToCalendar = () => {
    const calendarSection = document.getElementById("course-calendar");
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-700 mb-3 animate-fade-in">
            Communication Connections
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-tight animate-fade-in hero-animation">
            Empowering Healthcare Professionals with Industry-Leading Restorative Therapy Training
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in hero-content">
            For over 12 years, we've partnered with long-term care facilities across Ontario to deliver expert training that enhances resident care and ensures regulatory compliance.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <button 
              onClick={scrollToCalendar} 
              className="btn-primary"
            >
              Course Calendar
            </button>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
          
          <div className="mt-5 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Link 
              to="/training" 
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-800"
            >
              Learn more about our programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
