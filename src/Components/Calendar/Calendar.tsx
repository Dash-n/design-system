import type { Story } from "@ladle/react";
import "./big-calendar.css";
import styles from "./Calender.module.css";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

type Props = {
  events: any;
};

export const Calendar: Story<Props> = ({ events }: Props) => {
  const components: any = {
    event: ({ event }: any) => {
      const title = event?.title;
      const date = event?.start;
      let past = false;
      const currentDate = new Date();
      if (currentDate > event?.end) {
        past = true;
      }
      const timeString =
        date.getHours() + ":" + `${date.getMinutes()}`.padStart(2, "0");
      return (
        <div className={`${styles.eventLabel} ${past && styles.pastEvent}`}>
          <div className={styles.timeLabel}>{timeString}</div>
          <div className={styles.titleLabel}>{title}</div>
        </div>
      );
    },
  };
  return (
    <div className={styles.myCustomHeight}>
      <BigCalendar
        localizer={localizer}
        events={events}
        components={components}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};
