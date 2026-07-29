export interface JobOpening {
  title: string;
  location: string;
  type: string;
}

export const jobOpenings: JobOpening[] = [
  { title: "Program Manager, Incubation", location: "Mumbai, IN", type: "Full-time" },
  { title: "Startup Ecosystem Associate", location: "Remote (India)", type: "Full-time" },
  { title: "Mentor Network Lead", location: "Mumbai, IN", type: "Full-time" },
];

export const internships: JobOpening[] = [
  { title: "Founder Success Intern", location: "Mumbai, IN", type: "3–6 months" },
  { title: "Content & Community Intern", location: "Remote (India)", type: "3 months" },
];

export type VolunteerTrack = "Student Volunteers" | "Professionals" | "Mentors";

export interface VolunteerRole extends JobOpening {
  track: VolunteerTrack;
}

export const volunteerTracks: VolunteerTrack[] = ["Student Volunteers", "Professionals", "Mentors"];

export const volunteerRoles: VolunteerRole[] = [
  {
    title: "Campus Ambassador",
    location: "Remote / Campus-based",
    type: "3–5 hrs/week",
    track: "Student Volunteers",
  },
  {
    title: "Bootcamp Support Volunteer",
    location: "Event-based",
    type: "Per event",
    track: "Student Volunteers",
  },
  {
    title: "Pro-bono Skilled Volunteer",
    location: "Remote",
    type: "4–6 hrs/week",
    track: "Professionals",
  },
  {
    title: "Workshop Facilitator",
    location: "In-person",
    type: "Per session",
    track: "Professionals",
  },
  {
    title: "Mentor Volunteer",
    location: "Remote / In-person",
    type: "2–4 hrs/week",
    track: "Mentors",
  },
];
