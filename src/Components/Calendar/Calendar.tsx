import type { Story } from "@ladle/react";
import "./big-calendar.css";
import styles from "./Calender.module.css";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import { EventProps, Views } from "react-big-calendar";
import moment from "moment";
import { cloneElement, useCallback, useState } from "react";
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
  const [date, setDate] = useState<Date>(moment(new Date()).toDate());
  const [view, setView] = useState<(typeof Views)[Keys]>(Views.WEEK);
  const [contextMenuInfo, setContextMenuInfo] = useState<{
    xPosition: number;
    yPosition: number;
    selectedTime: string;
    resourceId: number;
  }>();

  const onPrevClick = useCallback(() => {
    if (view === Views.DAY) {
      setDate(moment(date).subtract(1, "d").toDate());
    } else if (view === Views.WEEK) {
      setDate(moment(date).subtract(1, "w").toDate());
    } else {
      setDate(moment(date).subtract(1, "M").toDate());
    }
    // console.log(view);
  }, [view, date]);

  const onNextClick = useCallback(() => {
    if (view === Views.DAY) {
      setDate(moment(date).add(1, "d").toDate());
    } else if (view === Views.WEEK) {
      setDate(moment(date).add(1, "w").toDate());
    } else {
      setDate(moment(date).add(1, "M").toDate());
    }
  }, [view, date]);

  const handleChange = (value: string) => {
    // console.log(value);
    if (value === "Month") setView(Views.MONTH);
    if (value === "Week") setView(Views.WEEK);
    if (value === "Day") setView(Views.DAY);
  };

  const onTimeslotClick = (value: any) => {
    console.log(value);
    console.log("Clicked");
  };

  const eventClick = (value: any) => {
    console.log(value.event);
  };

  const currentMonth = date.toLocaleString("default", { month: "long" });

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
    timeSlotWrapper: (timeSlotWrapperProps) => {
      // Show different styles at arbitrary time
      const hasCustomInfo = timeSlotWrapperProps.value
        ? timeSlotWrapperProps.value.getHours() === 4
        : false;
      const style = {
        display: "flex",
        flex: 1,
        backgroundColor: hasCustomInfo ? "#f5f5dc" : "#fff",
      };
      return (
        <div style={style}>
          {/* {hasCustomInfo && "Custom Day Wrapper"} */}
          {timeSlotWrapperProps.children}
        </div>
      );
    },
    eventWrapper: (eventWrapperProps) => {
      const style = {
        border: "4px solid",
        borderColor:
          eventWrapperProps.event.start.getHours() % 2 === 0 ? "green" : "red",
        padding: "5px",
        // top: eventWrapperProps.style ?? "0px",
      };
      // console.log(eventWrapperProps);
      return (
        <div style={style} onClick={eventClick(eventWrapperProps)}>
          {eventWrapperProps.children}
        </div>
      );
    },
    // timeSlotWrapper: ({
    //   children,
    //   value,
    //   resource,
    // }: {
    //   children: JSX.Element;
    //   value: string;
    //   resource: number;
    // }) => {
    //   return cloneElement(children, {
    //     onContextMenu: (e: MouseEvent) => {
    //       e.preventDefault();
    //       console.log("click");
    //       setContextMenuInfo({
    //         xPosition: e.clientX,
    //         yPosition: e.clientY,
    //         selectedTime: value,
    //         resourceId: resource,
    //       });
    //     },
    //   });
    // },
  };
  const onTodayClick = useCallback(() => {
    setDate(moment().toDate());
  }, []);

  return (
    <div className={styles.myCustomHeight}>
      {/* Toolbar */}
      <div className="rbc-toolbar">
        <div>
          <OutlineButton variant="primary" label="Back" onClick={onPrevClick} />
          <OutlineButton
            variant="primary"
            label="Today"
            onClick={onTodayClick}
          />
          <OutlineButton variant="primary" label="Next" onClick={onNextClick} />
        </div>
        <p className="rbc-toolbar-label">
          {view === "month"
            ? currentMonth
            : // ? `${date.getMonth() + 1}-${date.getFullYear()}`
              view === "week"
              ? `${date.getMonth() + 1}-${date.getFullYear()}`
              : view === "day"
                ? `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
                : ""}
        </p>
        <Toggle
          name="viewSelect"
          values={["Month", "Week", "Day"]}
          setChecked={handleChange}
        />
      </div>
      <div
        style={{
          flex: "1",
          width: "100%",
          overflow: "auto",
          position: "relative",
        }}
        onClick={() => {
          setContextMenuInfo(undefined);
        }}
      ></div>
      <BigCalendar
        localizer={localizer}
        events={events}
        components={components}
        backgroundEvents={backgroundEvents}
        startAccessor="start"
        endAccessor="end"
        date={date}
        step={15}
        timeslots={4}
        toolbar={false}
        defaultView={Views.MONTH}
        view={view}
        onView={setView}
        onNavigate={setDate}
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
