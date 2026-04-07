export interface AppEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  isAttended: boolean; // Required for the "Mark as Attended" feature later
}

export type EventFormData = Omit<AppEvent, "id" | "isAttended">;
