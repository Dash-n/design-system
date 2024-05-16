export type CalendarEvent = {
  id: number;
  title: string;
  start: Date;
  end: Date;
};

export type PopupEvent = {
  id: number;
  title: string;
  start: string;
  end: string;
};

export const defaultEventLength = 30;
export const availability = { start: "00:00", end: "12:00" };
export const mode = "physio";
export const timeRange = { start: "00:00", end: "12:00" };
export const defaultView = "Month";
