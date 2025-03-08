
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { format } from "date-fns";

interface CalendarHeaderProps {
  currentMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
}

const CalendarHeader = ({ currentMonth, prevMonth, nextMonth }: CalendarHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-bold text-brand-800 flex items-center">
        <Calendar className="mr-2 h-5 w-5 text-brand-400" /> 
        Upcoming Course Dates
      </h3>
      <div className="flex space-x-2">
        <button 
          onClick={prevMonth}
          className="p-2 rounded-md hover:bg-brand-50 transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-5 w-5 text-brand-600" />
        </button>
        <div className="font-medium text-lg text-brand-700">
          {format(currentMonth, "MMMM yyyy")}
        </div>
        <button 
          onClick={nextMonth}
          className="p-2 rounded-md hover:bg-brand-50 transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="h-5 w-5 text-brand-600" />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
