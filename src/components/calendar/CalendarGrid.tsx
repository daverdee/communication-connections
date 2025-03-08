
import { format, isSameDay, isToday, isWithinInterval, addDays } from "date-fns";
import { Course } from "@/data/courseData";
import { CalendarClock } from "lucide-react";

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
  
  const getDotColorForCourse = (course: Course) => {
    if (course.title.includes("Fundamental")) {
      return "bg-blue-500";
    } else if (course.title.includes("Comprehensive")) {
      return "bg-purple-600";
    } else if (course.title.includes("Principles")) {
      return "bg-orange-500";
    } else {
      return "bg-brand-400";
    }
  };

  // Helper to determine if a date is the first day of a multi-day course
  const isFirstDayOfCourse = (date: Date, course: Course) => {
    return isSameDay(date, course.date) && course.durationDays && course.durationDays > 1;
  };

  // Helper to determine if a date is the last day of a multi-day course
  const isLastDayOfCourse = (date: Date, course: Course) => {
    if (!course.durationDays || course.durationDays <= 1) return false;
    const lastDay = addDays(course.date, course.durationDays - 1);
    return isSameDay(date, lastDay);
  };

  // Helper to determine if a date is a middle day of a multi-day course
  const isMiddleDayOfCourse = (date: Date, course: Course) => {
    if (!course.durationDays || course.durationDays <= 2) return false;
    
    const startDate = course.date;
    const endDate = addDays(course.date, course.durationDays - 1);
    
    return isWithinInterval(date, { start: addDays(startDate, 1), end: addDays(endDate, -1) });
  };
  
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
          
          // Determine if this day is part of a multi-day course
          const multiDayCourses = coursesOnDay.filter(course => course.durationDays && course.durationDays > 1);
          const hasMultiDayCourse = multiDayCourses.length > 0;
          
          // Check if day is start, middle, or end of any multi-day course
          const firstDays = multiDayCourses.filter(course => isFirstDayOfCourse(day, course));
          const middleDays = multiDayCourses.filter(course => isMiddleDayOfCourse(day, course));
          const lastDays = multiDayCourses.filter(course => isLastDayOfCourse(day, course));
          
          const isStart = firstDays.length > 0;
          const isMiddle = middleDays.length > 0;
          const isEnd = lastDays.length > 0;
          
          return (
            <div 
              key={day.toString()}
              onClick={() => handleDateClick(day)}
              className={`
                aspect-square border rounded-md flex flex-col items-center justify-start 
                cursor-pointer transition-all hover:border-brand-400 relative
                ${isSelected ? "bg-brand-50 border-brand-600" : ""}
                ${todayClass}
              `}
            >
              <span className="text-sm text-brand-700 mt-1">{format(day, "d")}</span>
              
              {/* Multi-day course indicators */}
              {hasMultiDayCourse && (
                <div className="absolute -left-px -right-px flex justify-center bottom-4 gap-1">
                  {multiDayCourses.map((course, idx) => {
                    const color = getDotColorForCourse(course);
                    const courseKey = `multi-${day.toString()}-${idx}`;
                    
                    return (
                      <div key={courseKey} className="relative">
                        {/* Left connector */}
                        {(isMiddle || isEnd) && (
                          <div className={`absolute h-1 w-4 left-0 top-0.5 -ml-4 ${color.replace('bg-', 'bg-')}`}></div>
                        )}
                        
                        {/* Day indicator */}
                        <div 
                          className={`h-2 w-2 rounded-full ${color} relative z-10`}
                          title={course.title}
                        ></div>
                        
                        {/* Right connector */}
                        {(isStart || isMiddle) && (
                          <div className={`absolute h-1 w-4 right-0 top-0.5 -mr-4 ${color.replace('bg-', 'bg-')}`}></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              
              {/* Single day course indicators */}
              {hasCourse && (
                <div className="flex space-x-1 mt-1">
                  {coursesOnDay
                    .filter(course => !course.durationDays || course.durationDays === 1)
                    .map((course, index) => (
                      <div 
                        key={`single-${day.toString()}-${index}`}
                        className={`w-2 h-2 rounded-full ${getDotColorForCourse(course)}`}
                        title={course.title}
                      ></div>
                    ))
                  }
                </div>
              )}
              
              {/* Multi-day course icon */}
              {isStart && (
                <div className="absolute top-1 right-1">
                  <CalendarClock className="w-3 h-3 text-brand-400" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;

