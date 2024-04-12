import type { Story } from "@ladle/react";
import "./big-calendar.css";
import styles from "./Calender.module.css";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import { EventProps, Views } from "react-big-calendar";
import moment from "moment";
import { cloneElement, useState } from "react";
import { Toggle } from "../Toggle/ToggleSwitch/Toggle";
import { OutlineButton } from "../Button/OutlineButton/OutlineButton";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

type Keys = keyof typeof Views;

type Props = {
  events: any;
  backgroundEvents: any;
  handleClick: (e) => void;
};

export const Calendar: Story<Props> = ({
  events,
  backgroundEvents,
  handleClick,
}: Props) => {
  const [view, setView] = useState<(typeof Views)[Keys]>(Views.WEEK);
  const [contextMenuInfo, setContextMenuInfo] = useState<{
    xPosition: number;
    yPosition: number;
    selectedTime: string;
    resourceId: number;
  }>();

  const handleChange = (value: string) => {
    // console.log(value);
    if (value === "Month") setView(Views.MONTH);
    if (value === "Week") setView(Views.WEEK);
    if (value === "Day") setView(Views.DAY);
  };

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
        <div
          className={`${styles.eventLabel} ${past && styles.pastEvent}`}
          onClick={handleClick}
        >
          <div className={styles.timeLabel}>{timeString}</div>
          <div className={styles.titleLabel}>{title}</div>
        </div>
      );
    },
    timeSlotWrapper: ({
      children,
      value,
      resource,
    }: {
      children: JSX.Element;
      value: string;
      resource: number;
    }) => {
      return cloneElement(children, {
        onContextMenu: (e: MouseEvent) => {
          e.preventDefault();
          setContextMenuInfo({
            xPosition: e.clientX,
            yPosition: e.clientY,
            selectedTime: value,
            resourceId: resource,
          });
        },
      });
    },
  };
  return (
    <div className={styles.myCustomHeight}>
      <div className="rbc-toolbar">
        <div>
          <OutlineButton variant="primary" label="Back" />
          <OutlineButton variant="primary" label="Today" />
          <OutlineButton variant="primary" label="Next" />
        </div>
        <p className="rbc-toolbar-label">{view}</p>
        <Toggle
          name="viewSelect"
          values={["Month", "Week", "Day"]}
          setChecked={handleChange}
        />
      </div>

      <BigCalendar
        localizer={localizer}
        events={events}
        components={components}
        backgroundEvents={backgroundEvents}
        startAccessor="start"
        endAccessor="end"
        step={15}
        timeslots={4}
        toolbar={false}
        defaultView={Views.MONTH}
        view={view}
      />
      <div className={`${styles.isOpen && !!contextMenuInfo}`}>
        <div
          style={{
            position: "fixed",
            zIndex: 1000,
            top: contextMenuInfo?.yPosition,
            right: contextMenuInfo?.xPosition,
          }}
        ></div>
      </div>
    </div>
  );
};
