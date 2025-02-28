
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle, ArrowRight, PhoneCall, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TrainingProgram = ({ 
  title, 
  idealFor, 
  description, 
  learningPoints, 
  insight 
}: { 
  title: string; 
  idealFor: string; 
  description?: string;
  learningPoints: string[]; 
  insight: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="bg-brand-50 py-4 px-6">
        <h3 className="text-xl font-semibold text-brand-900">{title}</h3>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <p className="font-medium text-gray-700">Ideal for:</p>
          <p className="text-gray-600">{idealFor}</p>
        </div>
        
        {description && (
          <div className="mb-4">
            <p className="text-gray-600">{description}</p>
          </div>
        )}
        
        <div className="mb-6">
          <p className="font-medium text-gray-700 mb-2">
            {title.includes("On-Site") || title.includes("In-Person") 
              ? "How It Works:" 
              : "What You'll Learn:"}
          </p>
          <ul className="space-y-2">
            {learningPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-brand-50 p-4 rounded-md">
          <div className="flex items-start">
            <div className="bg-brand-100 p-2 rounded-full mr-3">
              <div className="text-brand-600">💡</div>
            </div>
            <p className="text-brand-800 italic">{insight}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Training = () => {
  const programs = [
    {
      title: "Fundamental Restorative Therapy Training",
      idealFor: "PSWs, healthcare aides, and other frontline care providers.",
      learningPoints: [
        "Core restorative therapy techniques to enhance strength, mobility, and independence.",
        "Fall prevention, strength-building exercises, and restorative dining.",
        "Safe exercise techniques and effective documentation aligned with MDS/RAI requirements.",
        "How to work within Ministry of Long-Term Care standards to meet compliance mandates."
      ],
      insight: "This program ensures that your staff is equipped to deliver restorative care in compliance with industry regulations."
    },
    {
      title: "Advanced Restorative Lead Certification",
      idealFor: "Senior care professionals looking to lead restorative care programs in their workplace.",
      learningPoints: [
        "Advanced program design for mobility, exercise, and restorative dining programs.",
        "Strategic leadership & planning to support a facility-wide restorative care approach.",
        "Comprehensive documentation & compliance strategies for Ministry audits.",
        "Specialized training in dementia care, communication strategies, and fall prevention leadership."
      ],
      insight: "This certification is for professionals who will take on an enhanced leadership role in restorative therapy at their facility."
    },
    {
      title: "On-Site Large Group Training",
      idealFor: "Long-term care homes looking to train multiple PSWs and healthcare providers at once.",
      learningPoints: [
        "Our team delivers training directly at your facility, reducing disruption and ensuring compliance.",
        "Train large groups of staff quickly and efficiently to meet restorative care mandates.",
        "Designed to help LTC homes maintain proper staffing ratios for restorative care."
      ],
      insight: "Cost-effective, scalable training that ensures your entire team is trained without sending staff off-site."
    },
    {
      title: "In-Person Certification at Our Toronto Training Facility",
      idealFor: "LTC homes sending select staff for leadership-level restorative training.",
      learningPoints: [
        "Staff members attend an in-depth training session at our Toronto facility.",
        "Smaller, intensive learning environment for professionals taking on leadership roles.",
        "Certification ensures staff is qualified to oversee restorative programs and mentor other team members."
      ],
      insight: "A great option for LTC homes that need a few key staff to take on leadership responsibilities in restorative care."
    }
  ];

  const whyChooseReasons = [
    "Government Compliance & Audit Readiness – Ensures your facility meets Ministry of Long-Term Care mandates.",
    "Proven Training Methods – Backed by 12+ years of experience and partnerships with hundreds of LTC homes across Ontario.",
    "Exclusive Training Materials – We own proprietary restorative therapy manuals aligned with regulatory requirements.",
    "Certified Professionals are Added to the RPAO Database – Recognized by employers and regulatory bodies."
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 leading-tight animate-fade-in">
                Empowering Healthcare Professionals with Industry-Leading Restorative Therapy Training
              </h1>
              
              <p className="mt-6 text-lg md:text-xl text-gray-600 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Specialized programs designed to enhance care quality, ensure compliance, and improve resident outcomes in long-term care settings.
              </p>
              
              <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Link to="/contact" className="btn-primary">
                  Contact Us to Find the Right Program for Your Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-6 text-center">
                Why Restorative Therapy Training is Essential
              </h2>
              
              <p className="text-gray-700 mb-8">
                Restorative therapy is a government-mandated component of care in long-term care homes. Our comprehensive training programs are designed to ensure your facility meets all regulatory requirements while enhancing the quality of care you provide.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-start mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">
                          All programs are designed for trained healthcare professionals only
                        </p>
                        <p className="text-gray-600 text-sm">
                          (PSWs, RNs, RPNs, PTs, OTs, etc.)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start">
                      <XCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">
                          Administrators, volunteers, and non-clinical staff are NOT eligible for certification
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700">
                Our tiered training solutions support both direct care providers and leadership roles in restorative care. Each program is meticulously designed to ensure that your staff is certified, compliant, and prepared for Ministry audits.
              </p>
            </div>
          </div>
        </section>

        {/* Training Programs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4 text-center">
              Our Training Program Options
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Choose from our range of specialized programs tailored for different roles and facility needs
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <TrainingProgram 
                  key={index}
                  title={program.title}
                  idealFor={program.idealFor}
                  learningPoints={program.learningPoints}
                  insight={program.insight}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-8 text-center">
                Why Choose Communication Connections?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {whyChooseReasons.map((reason, index) => (
                  <div 
                    key={index}
                    className="flex items-start p-5 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <CheckCircle className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Want to Learn More?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Let's discuss which training solution is right for your facility.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    <PhoneCall className="h-6 w-6" />
                  </div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-white/90">416-298-7388</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    <Mail className="h-6 w-6" />
                  </div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-white/90">david@communicationconnections.ca</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-white/90">3850 Finch Avenue East, Suite 306<br />Scarborough, Ontario</p>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-brand-700 rounded-md font-medium hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Training;
