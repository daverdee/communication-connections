
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrainingIntroSection from "@/components/training/sections/TrainingIntroSection";
import TrainingProgramsSection from "@/components/training/sections/TrainingProgramsSection";
import AcademicPartnershipsSection from "@/components/training/sections/AcademicPartnershipsSection";
import WhyChooseSection from "@/components/training/sections/WhyChooseSection";
import ContactSection from "@/components/training/sections/ContactSection";

const Training: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="bg-brand-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-4">
                Training Programs
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Specialized programs designed to enhance care quality, ensure compliance, and improve resident outcomes in long-term care settings.
              </p>
            </div>
          </div>
        </section>

        <TrainingIntroSection />
        <TrainingProgramsSection />
        <AcademicPartnershipsSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Training;
