
import CourseCalendar from "@/components/CourseCalendar";

const UpcomingCoursesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Upcoming Course Dates</h2>
          <p className="section-subtitle">
            View our upcoming training sessions and secure your spot to enhance your professional skills and meet regulatory requirements.
          </p>
        </div>

        <div id="course-calendar" className="max-w-3xl mx-auto">
          <CourseCalendar />
        </div>
      </div>
    </section>
  );
};

export default UpcomingCoursesSection;
