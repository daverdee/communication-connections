import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Award, FileCheck, Mail, Phone, MapPin, MessageSquare, User } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
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
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "organization",
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

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Inquiry Sent!",
        description: "We'll get back to you within 2 hours. Thank you for your interest!",
      });
      
      setFormData({
        name: "",
        phone: "",
        interest: "organization",
        comments: "",
      });
      setOpen(false);
    }, 1500);

    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar />
      <main>
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
                      src="/lovable-uploads/b0af0dd6-9202-4916-927e-97917d434b3c.png" 
                      alt="Caregiver with elderly patient" 
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

        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
