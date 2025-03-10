
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
  // March 31 - April 2 three-day course
  {
    id: 1,
    title: "Principles for Successful Implementation (3 Day Course)",
    date: new Date(2024, 2, 31), // March 31, 2024 (month is 0-indexed)
    location: "Finch HQ",
    type: "fundamental",
    startTime: "8:30 am",
    endTime: "4:30 pm",
    trainer: "Leila Chong",
    durationDays: 3
  },
  // April 11 one-day course
  {
    id: 2,
    title: "Fundamental Restorative Therapy Training (1 Day Course)",
    date: new Date(2024, 3, 11), // April 11, 2024
    location: "Finch HQ",
    type: "advanced",
    startTime: "8:30 am",
    endTime: "4:30 pm",
    trainer: "Leila Chong",
    durationDays: 1
  },
  // April 22-24 three-day course
  {
    id: 3,
    title: "Principles for Successful Implementation (3 Day Course)",
    date: new Date(2024, 3, 22), // April 22, 2024
    location: "Finch HQ",
    type: "fundamental",
    startTime: "8:30 am",
    endTime: "4:30 pm",
    trainer: "Leila Chong",
    durationDays: 3
  },
  // April 25 one-day course
  {
    id: 4,
    title: "Fundamental Restorative Therapy Training (1 Day Course)",
    date: new Date(2024, 3, 25), // April 25, 2024
    location: "Finch HQ",
    type: "advanced",
    startTime: "8:30 am",
    endTime: "4:30 pm",
    trainer: "Leila Chong",
    durationDays: 1
  }
];
