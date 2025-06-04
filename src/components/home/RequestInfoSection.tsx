
import ContactFormDialog from "@/components/training/ContactFormDialog";
import { Button } from "@/components/ui/button";

const RequestInfoSection = () => {
  const generateOrganizationText = () => {
    return "I am interested in bringing restorative therapy training to my organization/facility. We would like to schedule on-site training for our staff. Please provide information about pricing, availability, and how we can arrange training at our location.";
  };

  const generatePersonalText = () => {
    return "I am interested in attending restorative therapy training for my personal career development. Please provide information about upcoming course dates, pricing, and registration details for individual enrollment.";
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Request More Information</h2>
          <p className="section-subtitle">
            Get in touch with us to learn more about our training programs and how they can benefit you or your organization.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactFormDialog 
              trigger={
                <Button variant="outline" className="w-full h-20 text-lg">
                  Training for My Organization
                </Button>
              }
              initialComments={generateOrganizationText()}
            />
            <ContactFormDialog 
              trigger={
                <Button variant="outline" className="w-full h-20 text-lg">
                  Personal Career Development
                </Button>
              }
              initialComments={generatePersonalText()}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestInfoSection;
