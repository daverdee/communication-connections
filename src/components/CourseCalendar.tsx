
import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isSameDay,
  isToday,
  getDay
} from "date-fns";

interface Course {
  id: number;
  title: string;
  date: Date;
  location: string;
  type: "fundamental" | "advanced";
}

const upcomingCourses: Course[] = [
  {
    id: 1,
    title: "Fundamental Restorative Therapy Training",
    date: new Date(new Date().setDate(new Date().getDate() + 5)),
    location: "Toronto Training Facility",
    type: "fundamental"
  },
  {
    id: 2,
    title: "Advanced Restorative Lead Certification",
    date: new Date(new Date().setDate(new Date().getDate() + 12)),
    location: "Toronto Training Facility",
    type: "advanced"
  },
  {
    id: 3,
    title: "Fundamental Restorative Therapy Training",
    date: new Date(new Date().setDate(new Date().getDate() + 19)),
    location: "On-site at Sunrise Senior Living",
    type: "fundamental"
  },
  {
    id: 4,
    title: "Advanced Restorative Lead Certification",
    date: new Date(new Date().setDate(new Date().getDate() + 26)),
    location: "Toronto Training Facility",
    type: "advanced"
  },
  {
    id: 5,
    title: "Fundamental Restorative Therapy Training",
    date: new Date(new Date().setDate(new Date().getDate() + 40)),
    location: "On-site at Golden Manor",
    type: "fundamental"
  }
];

const CourseCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  const firstDayOfMonth = getDay(startOfMonth(currentMonth));

  const getCoursesForDate = (date: Date) => {
    return upcomingCourses.filter(course => 
      isSameDay(course.date, date)
    );
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const coursesOnDay = getCoursesForDate(date);
    setSelectedCourse(coursesOnDay.length > 0 ? coursesOnDay[0] : null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-brand-900 flex items-center">
          <Calendar className="mr-2 h-5 w-5 text-brand-600" /> 
          Upcoming Course Dates
        </h3>
        <div className="flex space-x-2">
          <button 
            onClick={prevMonth}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <div className="font-medium text-lg">
            {format(currentMonth, "MMMM yyyy")}
          </div>
          <button 
            onClick={nextMonth}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-medium text-gray-500 text-sm py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for days before the first day of month */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square"></div>
          ))}
          
          {/* Calendar days */}
          {daysInMonth.map((day) => {
            const coursesOnDay = getCoursesForDate(day);
            const hasCourse = coursesOnDay.length > 0;
            const isSelected = selectedDate && isSameDay(day, selectedDate);
            const todayClass = isToday(day) ? "border-brand-500 font-medium" : "";
            
            return (
              <div 
                key={day.toString()}
                onClick={() => handleDateClick(day)}
                className={`
                  aspect-square border rounded-md flex flex-col items-center justify-center 
                  cursor-pointer transition-all hover:border-brand-500
                  ${isSelected ? "bg-brand-50 border-brand-600" : ""}
                  ${todayClass}
                `}
              >
                <span className="text-sm">{format(day, "d")}</span>
                {hasCourse && (
                  <div 
                    className={`w-2 h-2 rounded-full mt-1 ${
                      coursesOnDay[0].type === "fundamental" ? "bg-brand-600" : "bg-green-600"
                    }`}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex items-center space-x-6 mb-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-brand-600 mr-2"></div>
            <span className="text-sm text-gray-600">Fundamental Training</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
            <span className="text-sm text-gray-600">Advanced Certification</span>
          </div>
        </div>
        
        {selectedCourse ? (
          <div className="p-4 bg-gray-50 rounded-lg border animate-fade-in">
            <h4 className="font-medium text-brand-900">{format(selectedCourse.date, "MMMM d, yyyy")}</h4>
            <p className="text-lg font-semibold text-brand-800 mt-1">{selectedCourse.title}</p>
            <p className="text-gray-600 mt-1">{selectedCourse.location}</p>
            <a href="/contact" className="text-brand-600 hover:text-brand-800 font-medium mt-2 inline-block">
              Request Information →
            </a>
          </div>
        ) : (
          <div className="p-4 bg-gray-50 rounded-lg border">
            <p className="text-gray-600">
              {selectedDate 
                ? "No courses scheduled for this date." 
                : "Select a date to view course details."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCalendar;
