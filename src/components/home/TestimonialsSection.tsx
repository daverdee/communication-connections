
import TestimonialCard from "@/components/TestimonialCard";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  organization: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
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
  );
};

export default TestimonialsSection;
