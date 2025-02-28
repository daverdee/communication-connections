
import { Link } from "react-router-dom";
import { CheckCircle, FileCheck, Percent, TrendingUp, Heart, Building, AlertCircle, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  {
    title: "Government Compliance",
    description: "Meet Ministry of Health mandates for restorative care in LTC settings and avoid penalties during audits.",
    icon: FileCheck,
    color: "blue"
  },
  {
    title: "Resident Health",
    description: "Significantly improve mobility, fall prevention, and independence for residents.",
    icon: Heart,
    color: "red"
  },
  {
    title: "Staff Performance",
    description: "Enhanced staff skills, confidence, and job satisfaction through professional development.",
    icon: TrendingUp,
    color: "green"
  },
  {
    title: "Cost Savings",
    description: "Reduce hospitalizations, lower staff turnover, and optimize resource utilization.",
    icon: DollarSign,
    color: "purple"
  },
];

const Compliance = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-900 leading-tight animate-fade-in">
                Compliance & Benefits
              </h1>
              
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Understand the regulatory requirements for restorative care and the significant benefits our training brings to your facility.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
                  Government Compliance & Ministry Standards
                </h2>
                
                <div className="p-6 border border-amber-200 bg-amber-50 rounded-lg mb-8">
                  <div className="flex items-start">
                    <AlertCircle className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-amber-800 mb-1">Important Compliance Information</h3>
                      <p className="text-gray-700">
                        Long-term care homes in Ontario must provide a mandated percentage of restorative care as required by the Ministry of Health and Long-Term Care.
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">
                  Our training programs ensure your facility meets all regulatory requirements through:
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Developing staff expertise in delivering Ministry-approved restorative care techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ensuring proper documentation that aligns with MDS/RAI requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Adding certified professionals to the RPAO database, accessible during Ministry audits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Preventing penalties and compliance issues during regulatory inspections</span>
                  </li>
                </ul>
                
                <div className="flex items-center justify-start">
                  <Link to="/contact" className="btn-primary">
                    Ensure Your Compliance
                  </Link>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="relative">
                  <div className="aspect-square md:aspect-auto md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80" 
                      alt="Regulatory compliance" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg bg-brand-100 -z-10"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 rounded-lg bg-brand-50 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">
                Key Benefits of Our Training
              </h2>
              <p className="section-subtitle">
                Our comprehensive training programs deliver multiple advantages for both residents and your facility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title} 
                  className="feature-card animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className={`mb-4 w-12 h-12 rounded-full flex items-center justify-center ${
                    benefit.color === "blue" ? "bg-brand-100 text-brand-600" :
                    benefit.color === "red" ? "bg-red-100 text-red-600" :
                    benefit.color === "green" ? "bg-green-100 text-green-600" :
                    "bg-purple-100 text-purple-600"
                  }`}>
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resident Outcomes */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">
                Improved Resident Outcomes
              </h2>
              <p className="section-subtitle">
                Our training leads to measurable improvements in resident health and quality of life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  stat: "40%",
                  label: "Reduction in Falls",
                  description: "Well-implemented restorative care programs can significantly reduce fall incidents."
                },
                {
                  stat: "60%",
                  label: "Increased Mobility",
                  description: "Residents show improved mobility and independence with regular restorative therapy."
                },
                {
                  stat: "30%",
                  label: "Fewer Hospitalizations",
                  description: "Fewer emergency transfers due to improved resident strength and function."
                },
              ].map((outcome, index) => (
                <div 
                  key={index} 
                  className="feature-card text-center animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-brand-600">{outcome.stat}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-900 mb-3">{outcome.label}</h3>
                  <p className="text-gray-600">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost-Effective & Scalable */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-brand-900 mb-6">
                Cost-Effective & Scalable Training Solutions
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Our flexible training options allow you to optimize your training budget while maximizing staff development and compliance:
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Building className="h-10 w-10 text-brand-600 mb-4" />
                  <h3 className="text-xl font-semibold text-brand-900 mb-2">
                    On-Site Group Training
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Train multiple staff members at once in your facility, minimizing disruption to care schedules and maximizing training efficiency.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Customized to your facility's needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Lower per-person cost for larger groups</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">No travel time or costs for your staff</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Users className="h-10 w-10 text-brand-600 mb-4" />
                  <h3 className="text-xl font-semibold text-brand-900 mb-2">
                    Advanced Toronto Training
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Send selected staff for advanced certification at our Toronto facility, developing specialized internal expertise and leadership.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">In-depth, focused learning environment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Develop internal restorative care leaders</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Networking with professionals from other facilities</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-6 border-t pt-8 mt-8">
                <h3 className="text-xl font-semibold text-brand-900 mb-4">
                  Return on Investment
                </h3>
                <p className="text-gray-600 mb-4">
                  Investment in our training programs delivers measurable financial benefits through:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Reduced staff turnover and recruitment costs",
                    "Fewer resident hospitalizations and emergency transfers",
                    "Avoiding compliance penalties during Ministry audits"
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border">
                      <Percent className="h-6 w-6 text-brand-600 mb-2" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-brand-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Ensure Compliance & Enhance Care Quality
            </h2>
            
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Contact us today to discuss how our training programs can help your facility meet regulatory requirements while improving resident outcomes.
            </p>
            
            <div className="inline-block animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-brand-700 rounded-md font-medium hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Compliance;
