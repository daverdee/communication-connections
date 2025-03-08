
import { CalendarPlus } from "lucide-react";
import ContactFormDialog from "@/components/training/ContactFormDialog";

interface CustomDateRequestProps {
  generateCustomDateText: () => string;
}

const CustomDateRequest = ({ generateCustomDateText }: CustomDateRequestProps) => {
  return (
    <div className="mt-6 text-center">
      <ContactFormDialog 
        trigger={
          <button className="flex items-center mx-auto px-4 py-2 bg-brand-100 text-brand-700 rounded-md hover:bg-brand-200 transition-colors">
            <CalendarPlus className="mr-2 h-5 w-5" />
            Request a Training Custom Date
          </button>
        }
        initialComments={generateCustomDateText()}
      />
    </div>
  );
};

export default CustomDateRequest;
