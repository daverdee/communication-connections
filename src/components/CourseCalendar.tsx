
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
import CalendarHeader from "./calendar/CalendarHeader";
import CalendarGrid from "./calendar/CalendarGrid";
import CalendarLegend from "./calendar/CalendarLegend";
import CourseDetails from "./calendar/CourseDetails";
import CustomDateRequest from "./calendar/CustomDateRequest";

const CourseCalendar = () => {
  // Initialize with current month (March or April 2024)
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 3, 1)); // Start with April 2024
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
      // For courses with duration > 1 day, check if the date falls within the course period
      if (course.durationDays && course.durationDays > 1) {
        for (let i = 0; i < course.durationDays; i++) {
          const courseDay = addDays(course.date, i);
          if (isSameDay(courseDay, date)) {
            return true;
          }
        }
        return false;
      }
      // For single-day courses, simply check if the date matches
      return isSameDay(course.date, date);
    });
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const coursesOnDay = getCoursesForDate(date);
    setSelectedCourse(coursesOnDay.length > 0 ? coursesOnDay[0] : null);
  };

  const generateCourseInfoText = (course: Course) => {
    return `I am interested in pricing and information regarding the ${course.title} being delivered on ${format(course.date, "MMMM d, yyyy")}.`;
  };

  const generateCustomDateText = () => {
    return "I am interested in training session for dates not listed on your calendar.";
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
      </div>
    </div>
  );
};

export default CourseCalendar;
