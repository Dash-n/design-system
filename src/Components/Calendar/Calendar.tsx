import type { Story } from "@ladle/react";
import "./big-calendar.css";
import styles from "./Calender.module.css";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import { EventProps, Views } from "react-big-calendar";
import moment from "moment";
import { cloneElement, useCallback, useState } from "react";
import { Toggle } from "../Toggle/ToggleSwitch/Toggle";
import { OutlineButton } from "../Button/OutlineButton/OutlineButton";
import { EventPopup } from "./EventPopup/EventPopup";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

type Keys = keyof typeof Views;

type Props = {
  events: { id: number; title: string; start: Date; end: Date };
  backgroundEvents: { id: number; title: string; start: Date; end: Date };
};

export const Calendar: Story<Props> = ({ events, backgroundEvents }: Props) => {
  const [date, setDate] = useState<Date>(moment(new Date()).toDate());
  const [view, setView] = useState<(typeof Views)[Keys]>(Views.WEEK);
  const [myEvents, setEvents] = useState(events);
  const [selected, setSelected] = useState();
  const [eventPopup, setEventPopup] = useState();
  const [show, setShow] = useState(null);

  // Date Navigation ///
  const onPrevClick = useCallback(() => {
    if (view === Views.DAY) {
      setDate(moment(date).subtract(1, "d").toDate());
    } else if (view === Views.WEEK) {
      setDate(moment(date).subtract(1, "w").toDate());
    } else {
      setDate(moment(date).subtract(1, "M").toDate());
    }
  }, [view, date]);

  const onTodayClick = useCallback(() => {
    setDate(moment().toDate());
  }, []);

  const onNextClick = useCallback(() => {
    if (view === Views.DAY) {
      setDate(moment(date).add(1, "d").toDate());
    } else if (view === Views.WEEK) {
      setDate(moment(date).add(1, "w").toDate());
    } else {
      setDate(moment(date).add(1, "M").toDate());
    }
  }, [view, date]);
  /// Data Navigation end ///

  const changeView = (value: string) => {
    if (value === "Month") setView(Views.MONTH);
    if (value === "Week") setView(Views.WEEK);
    if (value === "Day") setView(Views.DAY);
  };

  const togglePopup = (id) => {
    setShow(id);
  };

  const eventClick = (event: any) => {
    setEventPopup(event);
    togglePopup(event.id);
  };

  const handleSelectSlot = (event: any) => {
    if (show === null) {
      const title = window.prompt(
        "New Event name" + event.start.toString() + event.end.toString()
      );
      //Booking function goes here
      // if (title) {
      //   setEvents((prev) => [
      //     ...prev,
      //     { start: event.start, end: event.end, title },
      //   ]);
      // }
    }
    // },
    // [setEvents]
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
        <div className={`${styles.eventLabel} ${past && styles.pastEvent}`}>
          <div className={styles.timeLabel}>{timeString}</div>
          <div className={styles.titleLabel}>{title}</div>
        </div>
      );
    },
    timeSlotWrapper: (timeSlotWrapperProps) => {
      // Can use this to set work hours highlight
      const hasCustomInfo = timeSlotWrapperProps.value
        ? timeSlotWrapperProps.value.getHours() >= 7 &&
          timeSlotWrapperProps.value.getHours() < 19
        : false;
      const style = {
        display: "flex",
        flex: 1,
        backgroundColor: hasCustomInfo ? "#f5f5dc" : "#fff",
      };
      return <div style={style}>{timeSlotWrapperProps.children}</div>;
    },
    eventWrapper: ({ event, children }) => {
      return (
        <div style={{ position: "relative" }}>
          {children}
          <EventPopup
            event={eventPopup}
            show={show === event.id}
            closePopup={() => togglePopup(null)}
          />
        </div>
      );
    },
  };

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
            : view === "week"
              ? `${date.getMonth() + 1}-${date.getFullYear()}`
              : view === "day"
                ? `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
                : ""}
        </p>
        <Toggle
          name="viewSelect"
          values={["Month", "Week", "Day"]}
          setChecked={changeView}
        />
      </div>

      <BigCalendar
        localizer={localizer}
        events={myEvents}
        components={components}
        backgroundEvents={backgroundEvents}
        selected={selected}
        onSelectEvent={eventClick}
        onSelectSlot={handleSelectSlot}
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
        selectable
        popup
      />
    </div>
  );
};
