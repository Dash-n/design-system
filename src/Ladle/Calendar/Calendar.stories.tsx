import type { Story } from "@ladle/react";
import { CalendarMonthDay } from "../../Components/Calendar/CalendarMonth/CalendarMonthDay";
import { CalendarMonth } from "../../Components/Calendar/CalendarMonth/CalendarMonth";
import { useState } from "react";

import events from "./events";

type Props = {
  width?: string;
  height?: string;
  margin?: string;
  bookings: any[];
};

export const MonthDay: Story<Props> = ({ bookings }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
    }}
  >
    <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
  </div>
);
MonthDay.args = {};

export const Calendars: Story<Props> = ({}) => {
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());
  const changePage = (dir: number) => {
    if (dir === 0) {
      setMonthIndex((prev) => {
        return prev > 0 ? (prev -= 1) : 11;
      });
    }
    if (dir === 1) {
      setMonthIndex((prev) => {
        return prev < 11 ? (prev += 1) : 0;
      });
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <CalendarMonth
        events={events}
        changeMonth={changePage}
        selectedMonth={monthIndex}
      />
    </div>
  );
};
