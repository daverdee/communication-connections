
import React from "react";
import TrainingProgram from "../TrainingProgram";

const TrainingProgramsSection: React.FC = () => {
  const programs = [
    {
      title: "Fundamental Restorative Therapy Training (1 Day Course)",
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
      title: "Comprehensive Restorative Therapy Training (2 Day Course)",
      idealFor: "Any and all healthcare staff that are involved with restorative care therapy.",
      learningPoints: [
        "Assessment and documentation techniques not covered in the fundamental course.",
        "Advanced program design for mobility, exercise, and restorative dining programs.",
        "Comprehensive documentation & compliance strategies for Ministry audits.",
        "Specialized training in responsive behavioural intervention, communication strategies, and fall prevention programs."
      ],
      insight: "This certification is for professionals who would like a greater understanding of how to implement restorative therapy in a professional setting."
    },
    {
      title: "Restorative Therapy Training and Principles for Successful Implementation (3 Day Course)",
      idealFor: "All healthcare professionals looking to implement restorative care strategy and/or looking to pursue a leadership role.",
      learningPoints: [
        "Strategic leadership & planning to support a facility-wide restorative care approach.",
        "Smaller, intensive learning environment for professionals taking on leadership roles.",
        "Certification ensures staff is qualified to oversee restorative programs and mentor other team members."
      ],
      insight: "This certification is for professionals who will take on an enhanced leadership role in restorative therapy at their facility or community."
    }
  ];

  const onSiteProgram = {
    title: "Restorative Therapy Facility Consulting",
    idealFor: "Care facilities or communities that are looking to build a customized restorative care solution that fits their specific needs.",
    learningPoints: [
      "Our team delivers training directly at your facility, reducing disruption and ensuring compliance.",
      "Train large groups of staff quickly and efficiently to meet custom restorative care mandates.",
      "Led by our senior consultant with 12 years of specialized experience in restorative care training, a former practitioner who will work with specific MDS/RAI needs."
    ],
    insight: "Customized approach working directly with your staff to develop facility-specific programs that meet certification requirements while addressing your unique needs."
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4 text-center">
          Our Training Program Options
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-4">
          Choose from our range of specialized programs tailored for different roles and facility needs
        </p>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 font-medium">
          All three programs include a certificate that is submitted to the Restorative Programs Association of Ontario (RPAO). Certificates are valid for two years.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-xl md:text-2xl font-bold text-brand-900 mb-4 text-center">
            On-Site Consulting Option
          </h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            We can bring our expertise directly to your facility
          </p>
          
          <div className="max-w-4xl mx-auto">
            <TrainingProgram 
              title={onSiteProgram.title}
              idealFor={onSiteProgram.idealFor}
              learningPoints={onSiteProgram.learningPoints}
              insight={onSiteProgram.insight}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingProgramsSection;
