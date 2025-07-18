import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isSameDay,
  getDay,
  addDays
} from "date-fns";
import { Course, upcomingCourses } from "@/data/courseData";
import { Button } from "@/components/ui/button";
import CalendarHeader from "./calendar/CalendarHeader";
import CalendarGrid from "./calendar/CalendarGrid";
import CalendarLegend from "./calendar/CalendarLegend";
import CourseDetails from "./calendar/CourseDetails";
import CustomDateRequest from "./calendar/CustomDateRequest";
import ContactFormDialog from "@/components/training/ContactFormDialog";

const CourseCalendar = () => {
  // Initialize with current month (May 2025)
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 4, 1)); // Start with May 2025
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
    return upcomingCourses.filter(course => {
      if (course.durationDays && course.durationDays > 1) {
        for (let i = 0; i < course.durationDays; i++) {
          const courseDay = addDays(new Date(course.date), i);
          if (isSameDay(courseDay, date)) {
            return true;
          }
        }
        return false;
      }
      return isSameDay(new Date(course.date), date);
    });
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const coursesOnDay = getCoursesForDate(date);
    setSelectedCourse(coursesOnDay.length > 0 ? coursesOnDay[0] : null);
  };

  const generateCourseInfoText = (course: Course) => {
    let courseInfo = `I am interested in the "${course.title}" `;
    
    courseInfo += `scheduled for ${format(new Date(course.date), "MMMM d, yyyy")}`;
    
    if (course.durationDays && course.durationDays > 1) {
      const endDate = addDays(new Date(course.date), course.durationDays - 1);
      courseInfo += ` through ${format(endDate, "MMMM d, yyyy")}`;
    }
    
    if (course.location) {
      courseInfo += ` at ${course.location}`;
    }
    
    if (course.trainer) {
      courseInfo += ` with trainer ${course.trainer}`;
    }
    
    courseInfo += ". Please send me pricing and availability information.";
    
    return courseInfo;
  };

  const generateCustomDateText = () => {
    return "I am interested in scheduling a custom training session on dates that are not currently listed on your calendar. Please contact me with information about availability and pricing options.";
  };

  const generateOrganizationText = () => {
    return "I am interested in bringing restorative therapy training to my organization/facility. We would like to schedule on-site training for our staff. Please provide information about pricing, availability, and how we can arrange training at our location.";
  };

  const generatePersonalText = () => {
    return "I am interested in attending restorative therapy training for my personal career development. Please provide information about upcoming course dates, pricing, and registration details for individual enrollment.";
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <CalendarHeader 
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      
      <CalendarGrid 
        daysInMonth={daysInMonth}
        firstDayOfMonth={firstDayOfMonth}
        getCoursesForDate={getCoursesForDate}
        handleDateClick={handleDateClick}
        selectedDate={selectedDate}
      />
      
      <div className="mt-6">
        <CalendarLegend />
        
        <CourseDetails 
          selectedDate={selectedDate}
          selectedCourse={selectedCourse}
          generateCourseInfoText={generateCourseInfoText}
        />
        
        <CustomDateRequest generateCustomDateText={generateCustomDateText} />
        
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
          <h4 className="font-medium text-gray-800 mb-3">Request More Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContactFormDialog 
              trigger={
                <Button variant="outline" className="w-full">
                  Training for My Organization
                </Button>
              }
              initialComments={generateOrganizationText()}
            />
            <ContactFormDialog 
              trigger={
                <Button variant="outline" className="w-full">
                  Personal Career Development
                </Button>
              }
              initialComments={generatePersonalText()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCalendar;
