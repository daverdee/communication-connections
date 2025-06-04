
import { Users, BookOpen, Award, Heart, Building, Puzzle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in every aspect of our training programs, from curriculum design to delivery.",
    icon: Award,
  },
  {
    title: "Compassion",
    description: "We believe in a compassionate approach to senior care that prioritizes dignity and quality of life.",
    icon: Heart,
  },
  {
    title: "Innovation",
    description: "We continuously evolve our methods and materials to incorporate the latest research and best practices.",
    icon: Puzzle,
  },
  {
    title: "Collaboration",
    description: "We work closely with LTC facilities to develop customized training solutions that meet their unique needs.",
    icon: Users,
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-900 leading-tight animate-fade-in">
                About Communication Connections
              </h1>
              
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                With over 12 years of experience, we've established ourselves as a leading provider of restorative therapy training across Ontario.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="relative">
                  <div className="aspect-square md:aspect-auto md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/7504ae71-64e7-4bbf-acec-27ed93c3e74d.png" 
                      alt="Senior woman receiving care" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg bg-brand-100 -z-10"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 rounded-lg bg-brand-50 -z-10"></div>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
                  Our Mission & Vision
                </h2>
                
                <p className="text-lg text-gray-600 mb-6">
                  At Communication Connections, our mission is to elevate senior care through expert training, education, and a collaborative approach. We are dedicated to empowering healthcare professionals with the skills and knowledge needed to provide exceptional restorative care.
                </p>
                
                <p className="text-lg text-gray-600 mb-6">
                  Our vision is to be the leading provider of restorative therapy training in Ontario, known for our high-quality curriculum, expert instructors, and measurable impact on resident outcomes in long-term care facilities.
                </p>
                
                <p className="text-lg text-gray-600">
                  As proud contributors to the Restorative Professionals Alliance of Ontario (RPAO), we're committed to advancing the field of restorative care and supporting healthcare professionals in their career development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">
                These principles guide everything we do at Communication Connections.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title} 
                  className="feature-card text-center animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
                  Our Commitment to Long-Term Care
                </h2>
                
                <p className="text-lg text-gray-600 mb-6">
                  We understand the unique challenges faced by long-term care facilities in meeting Ministry mandates for restorative care compliance while maintaining high standards of resident care.
                </p>
                
                <p className="text-lg text-gray-600 mb-6">
                  Our training programs are specifically designed to support LTC homes in:
                </p>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <Building className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Meeting regulatory requirements and avoiding penalties during Ministry audits</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Developing skilled internal leaders who can manage restorative care programs</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Implementing evidence-based practices that enhance resident mobility and independence</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Improving overall quality of life for residents through specialized care approaches</span>
                  </li>
                </ul>
                
                <p className="text-lg text-gray-600">
                  We take pride in our partnerships with hundreds of LTC homes across Ontario and our role in enhancing senior care throughout the province.
                </p>
              </div>
              
              <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/6f229167-9c22-47b9-b6a5-15476f6352d9.png" 
                      alt="Healthcare professionals collaborating" 
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

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-brand-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
                Our Impact
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                For over a decade, we've been making a difference in senior care across Ontario.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { number: "12+", label: "Years of Experience" },
                { number: "20+", label: "Long-Term Care Facilities" },
                { number: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</p>
                  <p className="text-lg text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
