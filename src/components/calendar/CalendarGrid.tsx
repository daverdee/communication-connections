
import { format, isSameDay, isToday } from "date-fns";
import { Course } from "@/data/courseData";

interface CalendarGridProps {
  daysInMonth: Date[];
  firstDayOfMonth: number;
  getCoursesForDate: (date: Date) => Course[];
  handleDateClick: (date: Date) => void;
  selectedDate: Date | null;
}

const CalendarGrid = ({ 
  daysInMonth, 
  firstDayOfMonth, 
  getCoursesForDate, 
  handleDateClick, 
  selectedDate 
}: CalendarGridProps) => {
  return (
    <div className="mb-6">
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-medium text-brand-500 text-sm py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square"></div>
        ))}
        
        {daysInMonth.map((day) => {
          const coursesOnDay = getCoursesForDate(day);
          const hasCourse = coursesOnDay.length > 0;
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          const todayClass = isToday(day) ? "border-brand-400 font-medium" : "";
          
          return (
            <div 
              key={day.toString()}
              onClick={() => handleDateClick(day)}
              className={`
                aspect-square border rounded-md flex flex-col items-center justify-center 
                cursor-pointer transition-all hover:border-brand-400
                ${isSelected ? "bg-brand-50 border-brand-600" : ""}
                ${todayClass}
              `}
            >
              <span className="text-sm text-brand-700">{format(day, "d")}</span>
              {hasCourse && (
                <div 
                  className={`w-2 h-2 rounded-full mt-1 ${
                    coursesOnDay[0].type === "fundamental" ? "bg-brand-400" : "bg-brand-600"
                  }`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
