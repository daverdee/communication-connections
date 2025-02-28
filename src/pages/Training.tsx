
import { Link } from "react-router-dom";
import { CheckCircle, ChevronRight, Users, Award, FileCheck, BookOpen } from "lucide-react";
import CourseCalendar from "@/components/CourseCalendar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trainingPrograms = [
  {
    id: "fundamental",
    title: "Fundamental Restorative Therapy Training",
    audience: "For PSWs & Healthcare Professionals",
    description: "Our comprehensive foundational program that equips healthcare professionals with the essential skills needed to deliver high-quality restorative care.",
    color: "brand",
    icon: Users,
    topics: [
      "Strength-building and fall prevention techniques",
      "Restorative dining approaches",
      "Mobility exercises and transfer techniques",
      "Safe exercise delivery methods",
      "MDS/RAI-compliant documentation",
      "Team-based restorative care strategies"
    ]
  },
  {
    id: "advanced",
    title: "Advanced Restorative Lead Certification",
    audience: "For PSWs, RNs, RPNs, PTs & OTs",
    description: "Designed for healthcare professionals looking to lead restorative care initiatives within their facilities and develop specialized expertise.",
    color: "green",
    icon: Award,
    topics: [
      "Advanced program design and implementation",
      "Mobility enhancement protocols",
      "Strategic planning for facility-wide initiatives",
      "Leadership development for restorative teams",
      "Quality improvement measurement techniques",
      "Regulatory compliance and documentation mastery"
    ]
  }
];

const Training = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-900 leading-tight animate-fade-in">
                Our Training Programs
              </h1>
              
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Comprehensive restorative therapy training designed specifically for healthcare professionals in long-term care settings.
              </p>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {trainingPrograms.map((program, index) => (
                <div 
                  key={program.id}
                  className={`mb-16 last:mb-0 rounded-2xl overflow-hidden border shadow-sm animate-fade-in ${
                    index === 0 ? "border-brand-200" : "border-green-200"
                  }`}
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className={`bg-${program.color}-100 p-8 border-b ${
                    index === 0 ? "border-brand-200" : "border-green-200"
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        index === 0 ? "bg-brand-600 text-white" : "bg-green-600 text-white"
                      }`}>
                        <program.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{program.title}</h2>
                        <p className={`text-md mt-1 ${
                          index === 0 ? "text-brand-700" : "text-green-700"
                        }`}>
                          {program.audience}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700">{program.description}</p>
                  </div>

                  <div className="p-8 bg-white">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Topics:</h3>
                    <ul className="space-y-3 mb-8">
                      {program.topics.map((topic) => (
                        <li key={topic} className="flex items-start">
                          <CheckCircle className={`h-5 w-5 mr-3 flex-shrink-0 mt-0.5 ${
                            index === 0 ? "text-brand-600" : "text-green-600"
                          }`} />
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to="/contact" 
                      className={`inline-flex items-center font-medium transition-colors ${
                        index === 0 ? "text-brand-600 hover:text-brand-800" : "text-green-600 hover:text-green-800"
                      }`}
                    >
                      Request more information
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-brand-900 mb-6">
                Who Can Register?
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Eligible Professionals:</h3>
                <p className="text-gray-700 mb-4">
                  Our training programs are exclusively available to trained healthcare professionals, including:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Personal Support Workers (PSWs)",
                    "Registered Nurses (RNs)",
                    "Registered Practical Nurses (RPNs)",
                    "Physiotherapists (PTs)",
                    "Occupational Therapists (OTs)",
                    "Other clinical healthcare professionals"
                  ].map((professional) => (
                    <li key={professional} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{professional}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Not Eligible:</h3>
                <p className="text-gray-700">
                  Administrators, volunteers, and non-clinical staff are not eligible for certification.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Certification Details:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Certification is valid for 2 years; re-certification is required to maintain compliance.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Certified professionals are added to the Restorative Professionals Alliance of Ontario (RPAO) database, which can be accessed by employers and for Ministry audits.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Training Delivery Options:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border rounded-xl bg-gray-50">
                    <h4 className="text-lg font-semibold text-brand-900 mb-2">
                      On-Site Group Training
                    </h4>
                    <p className="text-gray-700">
                      We provide large group training sessions at LTC homes, allowing facilities to train multiple staff members efficiently while minimizing disruption to care schedules.
                    </p>
                  </div>
                  
                  <div className="p-6 border rounded-xl bg-gray-50">
                    <h4 className="text-lg font-semibold text-brand-900 mb-2">
                      Advanced Facility Training
                    </h4>
                    <p className="text-gray-700">
                      Our in-depth training at our Toronto training facility offers a focused environment for advanced certification and specialized skill development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Upcoming Course Schedule</h2>
              <p className="section-subtitle">
                View our calendar to find the next available training sessions and plan your professional development.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <CourseCalendar />
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Need a custom training schedule for your facility?
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us for Custom Training
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-brand-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Ready to Enhance Your Professional Skills?
            </h2>
            
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Join the hundreds of healthcare professionals who have advanced their careers through our certified training programs.
            </p>
            
            <div className="inline-block animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-brand-700 rounded-md font-medium hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
              >
                Register Now
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
