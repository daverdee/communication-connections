
import { addDays, set } from "date-fns";

export interface Course {
  id: number;
  title: string;
  date: Date;
  location: string;
  type: "fundamental" | "advanced";
  startTime?: string;
  endTime?: string;
  trainer?: string;
  durationDays?: number;
}

/**
 * List of upcoming courses
 * To update this calendar:
 * 1. Edit this file directly
 * 2. Update the course information (dates, titles, locations)
 * 3. Deploy the updated site
 */
export const upcomingCourses: Course[] = [
  // May 12-14, 2025 three-day course
  {
    id: 1,
    title: "Principles for Successful Implementation (3 Day Course)",
    date: new Date(2025, 4, 12), // May 12, 2025 (month is 0-indexed)
    location: "Finch HQ",
    type: "fundamental",
    startTime: "8:30 am",
    endTime: "4:30 pm",
    trainer: "Leila Chong",
    durationDays: 3
  },
  // May 22 one-day course
  {
    id: 2,
    title: "Fundamental Restorative Therapy Training (1 Day Course)",
    date: new Date(2025, 4, 22), // May 22, 2025
    location: "Finch HQ",
    type: "advanced",
    startTime: "8:30 am",
    endTime: "4:30 pm",
    trainer: "Leila Chong",
    durationDays: 1
  },
  // June 2-4 three-day course
  {
    id: 3,
    title: "Principles for Successful Implementation (3 Day Course)",
    date: new Date(2025, 5, 2), // June 2, 2025
    location: "Finch HQ",
    type: "fundamental",
    startTime: "8:30 am",
    endTime: "4:30 pm",
    trainer: "Leila Chong",
    durationDays: 3
  },
  // June 16 one-day course
  {
    id: 4,
    title: "Fundamental Restorative Therapy Training (1 Day Course)",
    date: new Date(2025, 5, 16), // June 16, 2025
    location: "Finch HQ",
    type: "advanced",
    startTime: "8:30 am",
    endTime: "4:30 pm",
    trainer: "Leila Chong",
    durationDays: 1
  }
];
