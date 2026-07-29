export interface StatePresence {
  name: string;
  /** Approximate relative position within the map canvas, derived from real lat/long. */
  x: number;
  y: number;
  startups: number;
  programs: number;
  events: number;
  partners: number;
}

// Coordinates are a simplified lat/long → percentage projection (not a traced
// political map) — used purely to place hover pins in roughly the right spot.
export const statePresence: StatePresence[] = [
  { name: "Maharashtra", x: 17, y: 62, startups: 45, programs: 8, events: 12, partners: 6 },
  { name: "Delhi", x: 32, y: 29, startups: 22, programs: 6, events: 9, partners: 4 },
  { name: "Karnataka", x: 33, y: 83, startups: 20, programs: 6, events: 8, partners: 3 },
  { name: "Telangana", x: 36, y: 68, startups: 15, programs: 5, events: 6, partners: 3 },
  { name: "Tamil Nadu", x: 42, y: 83, startups: 12, programs: 4, events: 5, partners: 2 },
  { name: "Gujarat", x: 16, y: 48, startups: 10, programs: 4, events: 5, partners: 2 },
  { name: "West Bengal", x: 70, y: 50, startups: 9, programs: 3, events: 4, partners: 2 },
  { name: "Uttar Pradesh", x: 45, y: 35, startups: 8, programs: 3, events: 4, partners: 2 },
  { name: "Rajasthan", x: 27, y: 35, startups: 6, programs: 2, events: 3, partners: 1 },
  { name: "Punjab", x: 30, y: 22, startups: 5, programs: 2, events: 3, partners: 1 },
];
