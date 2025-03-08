
import { addDays } from "date-fns";

export interface Course {
  id: number;
  title: string;
  date: Date;
  location: string;
  type: "fundamental" | "advanced";
}

/**
 * List of upcoming courses
 * To update this calendar:
 * 1. Edit this file directly
 * 2. Update the course information (dates, titles, locations)
 * 3. Deploy the updated site
 */
export const upcomingCourses: Course[] = [
  {
    id: 1,
    title: "Fundamental Restorative Therapy Training",
    date: addDays(new Date(), 5),
    location: "Toronto Training Facility",
    type: "fundamental"
  },
  {
    id: 2,
    title: "Advanced Restorative Lead Certification",
    date: addDays(new Date(), 12),
    location: "Toronto Training Facility",
    type: "advanced"
  },
  {
    id: 3,
    title: "Fundamental Restorative Therapy Training",
    date: addDays(new Date(), 19),
    location: "On-site at Sunrise Senior Living",
    type: "fundamental"
  },
  {
    id: 4,
    title: "Advanced Restorative Lead Certification",
    date: addDays(new Date(), 26),
    location: "Toronto Training Facility",
    type: "advanced"
  },
  {
    id: 5,
    title: "Fundamental Restorative Therapy Training",
    date: addDays(new Date(), 40),
    location: "On-site at Golden Manor",
    type: "fundamental"
  }
];
