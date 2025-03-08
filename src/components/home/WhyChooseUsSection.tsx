
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface BenefitProps {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
}

const BenefitCard = ({ title, description, icon: Icon, index }: BenefitProps) => {
  return (
    <div 
      className="feature-card animate-fade-in"
      style={{ animationDelay: `${0.2 * index}s` }}
    >
      <div className="mb-4 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-brand-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface WhyChooseUsSectionProps {
  benefits: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
}

const WhyChooseUsSection = ({ benefits }: WhyChooseUsSectionProps) => {
  return (
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
            <BenefitCard 
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              index={index}
            />
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
  );
};

export default WhyChooseUsSection;
