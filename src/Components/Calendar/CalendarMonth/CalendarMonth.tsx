import type { Story } from "@ladle/react";
import styles from "./CalendarMonth.module.css";
import "./big-calendar.css";

import { CalendarMonthDay } from "./CalendarMonthDay";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IconContext } from "react-icons";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import events from "./events";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

type Props = {
  // children: React.ReactNode;
  // width?: string;
  // height?: string;
  // margin?: string;
  events: any;
  changeMonth: (dir: number) => void;
  selectedMonth: number;
};
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// const currentDate = Date.now()
// const currentMonth = Date.now().getMonth()

// var selectedMonthName = months[value['month']];

export const CalendarMonth: Story<Props> = ({
  events,
  changeMonth,
  selectedMonth = new Date().getMonth(),
}: Props) => {
  return (
    <div className="myCustomHeight">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>

    // <div className={styles.calendar}>
    //   <div className={styles.monthHeader}>
    //     <IconContext.Provider value={{ size: "32px" }}>
    //       <button
    //         className={styles.paginButton}
    //         onClick={() => {
    //           changeMonth(0); //Prev Pages
    //         }}
    //       >
    //         <MdKeyboardArrowLeft />
    //       </button>
    //       <button
    //         className={styles.paginButton}
    //         onClick={() => {
    //           changeMonth(1); //Prev Pages
    //         }}
    //       >
    //         <MdKeyboardArrowRight />
    //       </button>
    //       {months[selectedMonth]}
    //     </IconContext.Provider>
    //   </div>
    //   <div className={styles.weekHeader}>
    //     <div className={styles.dayHeader}>Sun</div>
    //     <div className={styles.dayHeader}>Mon</div>
    //     <div className={styles.dayHeader}>Tue</div>
    //     <div className={styles.dayHeader}>Wed</div>
    //     <div className={styles.dayHeader}>Thu</div>
    //     <div className={styles.dayHeader}>Fri</div>
    //     <div className={styles.dayHeader}>Sat</div>
    //   </div>
    //   <div className={styles.calendarWeek}>
    //     {Array.from(Array(7), (x, i) => (
    //       <CalendarMonthDay day={i} bookings={[]}>
    //         Test Content
    //       </CalendarMonthDay>
    //     ))}
    //   </div>
    //   <div className={styles.calendarWeek}>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //   </div>
    //   <div className={styles.calendarWeek}>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //   </div>
    //   <div className={styles.calendarWeek}>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //   </div>
    //   <div className={styles.calendarWeek}>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //     <CalendarMonthDay bookings={[]}>Test Content</CalendarMonthDay>
    //   </div>
    // </div>
  );
};
