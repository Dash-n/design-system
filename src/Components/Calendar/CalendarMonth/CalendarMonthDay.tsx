import type { Story } from "@ladle/react";
import styles from "./CalendarMonth.module.css";

type Booking = {
  time: Date;
  coach: string;
  student: string;
  content: string;
};

type Props = {
  children: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  day: number;
  bookings: Booking[];
  // date: string;
};

const demoBookings = [
  {
    time: new Date("2024-04-09T00:00:00Z"),
    student: "Tom Bombadil",
    coach: "Howard",
    content: "Physio Session",
  },
  {
    time: new Date("2024-04-09T01:00:00Z"),
    student: "Bob",
    coach: "Howard",
    content: "Physio Session",
  },
  {
    time: new Date("2024-04-09T02:00:00Z"),
    student: "Mark",
    coach: "Howard",
    content: "Physio Session",
  },
];

export const CalendarMonthDay: Story<Props> = ({
  day = 0,
  // bookings = demoBookings,
}: Props) => {
  return (
    <div className={styles.calendarDay}>
      {day}
      {demoBookings.map((booking, index) => (
        <div className={styles.booking}>
          {`${booking.time.getHours()}`.padStart(2, "0")}:
          {`${booking.time.getMinutes()}`.padStart(2, "0")} - {booking.student}
        </div>
      ))}
    </div>
  );
};
