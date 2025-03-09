
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ChevronRight } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";

const Compliance = () => {
  const [activeTab, setActiveTab] = useState<"compliance" | "benefits">("compliance");

  const compliancePoints = [
    {
      title: "Ministry of Health Mandated Requirements",
      description: "Long-term care homes must provide a certain percentage of restorative care as required by Ontario's Ministry of Health and Long-Term Care. Our training ensures your facility meets these regulatory standards."
    },
    {
      title: "MDS/RAI Documentation Compliance",
      description: "Our training aligns with Minimum Data Set (MDS) and Resident Assessment Instrument (RAI) documentation requirements, ensuring your staff can properly record and track restorative care interventions."
    },
    {
      title: "Certified Staff Database",
      description: "All certified professionals are added to the Restorative Professionals Alliance of Ontario (RPAO) database, which can be accessed by employers and presented during Ministry audits to verify compliance."
    },
    {
      title: "Audit Preparation & Defense",
      description: "Having properly trained and certified restorative care staff provides documentation and evidence of compliance during Ministry inspections and audits."
    }
  ];

  const benefitPoints = [
    {
      title: "Reduced Falls & Hospitalizations",
      description: "Effective restorative therapy programs have been shown to reduce resident falls by up to 30% and decrease related hospitalizations, saving facilities time and resources."
    },
    {
      title: "Enhanced Mobility & Independence",
      description: "Residents receiving proper restorative care show measurable improvements in strength, mobility, and ability to perform activities of daily living (ADLs)."
    },
    {
      title: "Improved Quality of Life Metrics",
      description: "Facilities implementing our training programs report higher resident satisfaction scores and improved quality of life metrics on standardized assessments."
    },
    {
      title: "Staff Skill Development & Retention",
      description: "Healthcare professionals who receive specialized certification report higher job satisfaction and are more likely to remain with their employer, reducing turnover costs."
    },
    {
      title: "Cost-Effective Implementation",
      description: "Our flexible training options allow facilities to train groups on-site while sending select staff for advanced certification, maximizing your training budget."
    }
  ];

  const testimonials = [
    {
      quote: "Communication Connections' training program has been instrumental in helping our facility meet and exceed Ministry compliance standards. Our staff feel more confident and our residents have shown remarkable improvements.",
      author: "Director of Care",
      position: "Long-Term Care Home",
      organization: "Greater Toronto Area",
      rating: 5,
      delay: "0s"
    },
    {
      quote: "The restorative therapy certification has transformed how our team approaches resident care. We've documented a 25% reduction in falls since implementing the program.",
      author: "Director of Care",
      position: "Retirement Community",
      organization: "Eastern Ontario",
      rating: 5,
      delay: "0.3s"
    },
    {
      quote: "Not only did this training help us pass our Ministry audit with flying colors, but the resident outcomes have been incredible. Highly recommend for any LTC facility.",
      author: "Director of Care",
      position: "Senior Living Facility",
      organization: "Northern Ontario",
      rating: 5,
      delay: "0.6s"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-brand-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-4">
                Compliance & Benefits
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Our training programs ensure your facility meets Ministry standards while delivering measurable improvements in resident care
              </p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                    activeTab === "compliance" 
                      ? "bg-brand-600 text-white" 
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("compliance")}
                >
                  Government Compliance
                </button>
                <button
                  type="button"
                  className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                    activeTab === "benefits" 
                      ? "bg-brand-600 text-white" 
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("benefits")}
                >
                  Resident & Facility Benefits
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {activeTab === "compliance" ? (
              <div className="animate-fade-in">
                <div className="max-w-3xl mx-auto mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">
                    Meeting Government & Ministry Standards
                  </h2>
                  <p className="text-gray-700">
                    Ontario's long-term care facilities are required to maintain specific standards for restorative care. Our training programs ensure your staff have the knowledge and certification needed to meet and exceed these requirements.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {compliancePoints.map((point, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                    >
                      <div className="flex items-start mb-3">
                        <CheckCircle className="text-brand-600 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                        <h3 className="text-xl font-semibold text-brand-900">
                          {point.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 ml-9">
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-brand-50 rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
                  <h3 className="text-xl font-semibold text-brand-900 mb-4">
                    Certification & Compliance Timeline
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-600 text-white">
                          1
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-brand-900">Complete Training</h4>
                        <p className="text-gray-600">Staff attend and successfully complete either Fundamental or Advanced certification training.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-600 text-white">
                          2
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-brand-900">Receive Certification</h4>
                        <p className="text-gray-600">Participants receive official certification valid for 2 years from completion date.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-600 text-white">
                          3
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-brand-900">RPAO Database Registration</h4>
                        <p className="text-gray-600">All certified professionals are added to the Restorative Professionals Alliance of Ontario database.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-600 text-white">
                          4
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-brand-900">Renewal Notification</h4>
                        <p className="text-gray-600">Participants receive renewal notifications 3 months before certification expiry.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="max-w-3xl mx-auto mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">
                    Measurable Benefits for Residents & Facilities
                  </h2>
                  <p className="text-gray-700">
                    Beyond meeting compliance requirements, our training programs deliver tangible outcomes that improve resident well-being and facility operations.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {benefitPoints.map((point, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                    >
                      <div className="flex items-start mb-3">
                        <CheckCircle className="text-green-600 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                        <h3 className="text-xl font-semibold text-brand-900">
                          {point.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 ml-9">
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-brand-50 rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
                  <h3 className="text-xl font-semibold text-brand-900 mb-4">
                    Case Study: Measured Outcomes
                  </h3>
                  <p className="text-gray-700 mb-6">
                    After implementing our restorative therapy training program, a group of 5 long-term care homes reported the following average improvements over 12 months:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <span className="text-2xl font-bold text-brand-600">27%</span>
                      <p className="text-sm text-gray-600">Reduction in Falls</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <span className="text-2xl font-bold text-brand-600">32%</span>
                      <p className="text-sm text-gray-600">Improved Mobility</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <span className="text-2xl font-bold text-brand-600">19%</span>
                      <p className="text-sm text-gray-600">Fewer Hospitalizations</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <span className="text-2xl font-bold text-brand-600">100%</span>
                      <p className="text-sm text-gray-600">Ministry Compliance</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-3 text-center">
              What Healthcare Leaders Are Saying
            </h2>
            <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
              Hear from administrators and directors who have implemented our training programs in their facilities
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  organization={testimonial.organization}
                  rating={testimonial.rating}
                  delay={testimonial.delay}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="bg-brand-900 text-white rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Ensure Compliance & Improve Resident Outcomes?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Contact us today to discuss customized training solutions for your facility
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center bg-white text-brand-900 font-medium py-3 px-8 rounded-md shadow-lg hover:bg-gray-100 transition-colors"
              >
                Get in Touch
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Compliance;
