
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Award, FileCheck } from "lucide-react";
import CourseCalendar from "@/components/CourseCalendar";
import TestimonialCard from "@/components/TestimonialCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const testimonials = [
  {
    quote: "Communication Connections provided our LTC facility with exceptional training. Our staff now confidently delivers superior restorative care while ensuring full compliance with Ministry standards.",
    author: "Sarah Johnson",
    position: "Director of Care",
    organization: "Sunrise Senior Living",
    rating: 5
  },
  {
    quote: "The restorative therapy training transformed how our team approaches resident care. We've seen dramatic improvements in mobility and independence among our residents.",
    author: "Michael Chen",
    position: "Administrator",
    organization: "Golden Manor LTC",
    rating: 5
  },
  {
    quote: "As a PSW, this certification has advanced my career and improved the quality of care I provide. The trainers are knowledgeable and the course materials are comprehensive.",
    author: "Priya Patel",
    position: "Personal Support Worker",
    organization: "Cedarcroft Place",
    rating: 5
  }
];

const benefits = [
  {
    title: "Ministry Compliance",
    description: "Meet government mandates for restorative care in long-term care settings.",
    icon: FileCheck,
  },
  {
    title: "Enhanced Quality of Care",
    description: "Improve resident mobility, independence and quality of life.",
    icon: Users,
  },
  {
    title: "Professional Certification",
    description: "Join the Restorative Professionals Alliance of Ontario database.",
    icon: Award,
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-tight animate-fade-in hero-animation">
                Empowering Healthcare Professionals with Industry-Leading Restorative Therapy Training
              </h1>
              
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in hero-content">
                For over 12 years, we've partnered with long-term care facilities across Ontario to deliver expert training that enhances resident care and ensures regulatory compliance.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Link to="/training" className="btn-primary">
                  View Our Training Programs
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">
                Why Choose Communication Connections?
              </h2>
              <p className="section-subtitle">
                Our specialized training programs are designed to meet the unique needs of long-term care facilities and healthcare professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title} 
                  className="feature-card animate-fade-in"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="mb-4 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 md:mt-20 text-center">
              <Link
                to="/compliance"
                className="inline-flex items-center font-medium text-brand-600 hover:text-brand-800 transition-colors"
              >
                Learn more about our compliance & benefits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming Courses */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Upcoming Course Dates</h2>
              <p className="section-subtitle">
                View our upcoming training sessions and secure your spot to enhance your professional skills and meet regulatory requirements.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <CourseCalendar />
            </div>
          </div>
        </section>

        {/* Key Features / Compliance Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
                  Meeting Ministry Standards & Enhancing Care Quality
                </h2>
                
                <p className="text-lg text-gray-600 mb-8">
                  Our comprehensive training programs ensure your facility meets all regulatory requirements while significantly improving resident outcomes and care quality.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Compliance with Ministry of Health's Restorative Care Legislation",
                    "Training aligns with MDS/RAI requirements",
                    "Certified professionals added to the RPAO database",
                    "Enhanced resident mobility and independence",
                    "Reduced falls and hospitalizations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-10">
                  <Link to="/training" className="btn-primary">
                    Explore Our Training Programs
                  </Link>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 animate-fade-in">
                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1574280363402-2f672940b871?auto=format&fit=crop&w=800&q=80" 
                      alt="Elderly person receiving healthcare" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg bg-brand-100 -z-10"></div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg bg-brand-50 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle">
                Hear from long-term care facilities and healthcare professionals who have experienced our training programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  organization={testimonial.organization}
                  rating={testimonial.rating}
                  delay={`${0.2 * index}s`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-brand-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Ready to Enhance Your Facility's Restorative Care?
            </h2>
            
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Contact us today to discuss customized training solutions for your long-term care facility or to register for upcoming courses.
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
      </main>
      <Footer />
    </>
  );
};

export default Home;
