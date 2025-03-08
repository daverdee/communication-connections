
import { format } from "date-fns";
import { Course } from "@/data/courseData";
import ContactFormDialog from "@/components/training/ContactFormDialog";

interface CourseDetailsProps {
  selectedDate: Date | null;
  selectedCourse: Course | null;
  generateCourseInfoText: (course: Course) => string;
}

const CourseDetails = ({ selectedDate, selectedCourse, generateCourseInfoText }: CourseDetailsProps) => {
  return (
    <>
      {selectedCourse ? (
        <div className="p-4 bg-brand-50 rounded-lg border animate-fade-in">
          <h4 className="font-medium text-brand-700">{format(selectedCourse.date, "MMMM d, yyyy")}</h4>
          <p className="text-lg font-semibold text-brand-800 mt-1">{selectedCourse.title}</p>
          <p className="text-brand-600 mt-1">{selectedCourse.location}</p>
          {selectedCourse.trainer && (
            <p className="text-brand-600">Trainer: {selectedCourse.trainer}</p>
          )}
          {selectedCourse.startTime && selectedCourse.endTime && (
            <p className="text-brand-600">Time: {selectedCourse.startTime} - {selectedCourse.endTime}</p>
          )}
          {selectedCourse.durationDays && selectedCourse.durationDays > 1 && (
            <p className="text-brand-600">Duration: {selectedCourse.durationDays} days</p>
          )}
          <ContactFormDialog 
            trigger={
              <button className="text-brand-600 hover:text-brand-800 font-medium mt-2 inline-block">
                Request Information →
              </button>
            }
            initialComments={generateCourseInfoText(selectedCourse)}
          />
        </div>
      ) : (
        <div className="p-4 bg-brand-50 rounded-lg border">
          <p className="text-brand-600">
            {selectedDate 
              ? "No courses scheduled for this date." 
              : "Select a date to view course details."}
          </p>
        </div>
      )}
    </>
  );
};

export default CourseDetails;
