
import { FileCheck, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import UpcomingCoursesSection from "@/components/home/UpcomingCoursesSection";
import ComplianceSection from "@/components/home/ComplianceSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

const testimonials = [
  {
    quote: "Communication Connections provided our LTC facility with exceptional training. Our staff now confidently delivers superior restorative care while ensuring full compliance with Ministry standards.",
    author: "Director of Care",
    position: "Administrator",
    organization: "Sunrise Senior Living",
    rating: 5
  },
  {
    quote: "The restorative therapy training transformed how our team approaches resident care. We've seen dramatic improvements in mobility and independence among our residents.",
    author: "Facility Manager",
    position: "Administrator",
    organization: "Golden Manor LTC",
    rating: 5
  },
  {
    quote: "As a PSW, this certification has advanced my career and improved the quality of care I provide. The trainers are knowledgeable and the course materials are comprehensive.",
    author: "Healthcare Professional",
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
        <HeroSection />
        <WhyChooseUsSection benefits={benefits} />
        <UpcomingCoursesSection />
        <ComplianceSection />
        <TestimonialsSection testimonials={testimonials} />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
