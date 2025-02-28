
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  rating?: number;
  organization?: string;
  delay?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  position, 
  rating = 5, 
  organization, 
  delay = "0s" 
}) => {
  return (
    <div 
      className="testimonial-card animate-fade-in" 
      style={{ animationDelay: delay }}
    >
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < rating ? "text-yellow-500" : "text-gray-300"
            } mr-1`}
            fill={i < rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      
      <div>
        <p className="font-semibold text-brand-900">{author}</p>
        <p className="text-sm text-gray-600">
          {position}
          {organization && `, ${organization}`}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
