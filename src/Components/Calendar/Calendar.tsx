import type { Story } from "@ladle/react";
import "./big-calendar.css";
import styles from "./Calender.module.css";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import { EventProps, Views } from "react-big-calendar";
import moment from "moment";
import { cloneElement, useCallback, useState, useRef, useEffect } from "react";
import { Toggle } from "../Toggle/ToggleSwitch/Toggle";
import { OutlineButton } from "../Button/OutlineButton/OutlineButton";
import { EventPopup } from "./EventPopup/EventPopup";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

type Keys = keyof typeof Views;

type Props = {
  events: { id: number; title: string; start: Date; end: Date; etc?: {} };
  backgroundEvents: { id: number; title: string; start: Date; end: Date };
};

export const Calendar: Story<Props> = ({ events, backgroundEvents }: Props) => {
  const [date, setDate] = useState<Date>(moment(new Date()).toDate());
  const [view, setView] = useState<(typeof Views)[Keys]>(Views.MONTH);
  const [myEvents, setEvents] = useState(events);
  const [selected, setSelected] = useState();
  const [eventPopup, setEventPopup] = useState();
  const [show, setShow] = useState(null);

  const [adjustedPosition, setAdjustedPosition] = useState({ top: 0, left: 0 });
  const popupRef = useRef(null);
  // useEffect(() => {
  //   if (show) {
  //     adjustPopupPosition();
  //   }
  // }, [show]);
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
    adjustPopupPosition();
    setShow(id);
  };

  const eventClick = (event: any) => {
    setEventPopup(event);
    togglePopup(event.id);
  };

  // const emptyEvent = {
  //   id: myEvents.slice(-1)[0].id + 1,
  //   title: "",
  //   start:
  // }

  const handleSelectSlot = useCallback((event: any) => {
    // console.log(event);
    setTimeout(() => {
      console.log(event);
    }, 250);

    // if (show === null) {
    //   var newEvent = {
    //     id: myEvents.slice(-1)[0].id + 1,
    //     title: "",
    //     start: event.start,
    //     end: event.end,
    //   };
    //   setEventPopup(newEvent);
    //   togglePopup(0);

    // const title = window.prompt(
    //   "New Event name" + event.start.toString() + event.end.toString()
    // );
    // //Booking function goes here
    // if (title) {
    //   setEvents((prev) => [
    //     ...prev,
    //     {
    //       id: myEvents.slice(-1)[0].id + 1,
    //       start: event.start,
    //       end: event.end,
    //       title,
    //     },
    //   ]);
    // }
    // }

    // },
    // [setEvents]
  }, []);

  const onEventSubmit = (event: any) => {
    // setEvents((prev) => [
    //   ...prev,
    //   { id: event.id, start: event.start, end: event.end, title: event.title },
    // ]);
  };

  const currentMonth = date.toLocaleString("default", { month: "long" });

  const components: any = {
    event: ({ event }: any) => {
      event.start = new Date(event.start);
      event.end = new Date(event.end);
      const title = event?.title;
      const date = event?.start;
      let past = false;
      const currentDate = new Date();
      if (currentDate > event?.end) {
        past = true;
      }
      const timeString = `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;
      return (
        <div className={`${styles.eventLabel} ${past && styles.pastEvent}`}>
          <div className={styles.timeLabel}>{timeString}</div>
          <div className={styles.titleLabel}>{title}</div>
        </div>
      );
    },
    timeSlotWrapper: (timeSlotWrapperProps) => {
      // Can use this to set work hours highlight
      // console.log(timeSlotWrapperProps);
      const hasCustomInfo = timeSlotWrapperProps.value
        ? timeSlotWrapperProps.value.getHours() >= 7 &&
          timeSlotWrapperProps.value.getHours() < 19
        : false;
      const style = {
        display: "flex",
        flex: 1,
        backgroundColor: hasCustomInfo ? "#f5f5dc" : "#fff",
        position: "relative",
      };
      return (
        <div style={style}>
          {/* abc */}
          {timeSlotWrapperProps.children}
        </div>
      );
    },
    eventWrapper: ({ event, children }) => {
      return (
        <div style={{ position: "relative" }} ref={popupRef}>
          {children}
          <div>
            <EventPopup
              id={event.id}
              event={eventPopup}
              show={show === event.id}
              closePopup={() => togglePopup(null)}
              submit={onEventSubmit}
            />
          </div>
        </div>
      );
    },
  };

  const adjustPopupPosition = () => {
    if (!popupRef.current) return;

    const popupRect = popupRef.current.getClientRects();
    console.log(popupRect);
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    console.log(viewportWidth);
    console.log(viewportHeight);

    // Calculate the position of the popup relative to the viewport
    let adjustedTop = popupRect.top - popupRect.y;
    let adjustedLeft = popupRect.left - popupRect.x;

    if (popupRect.top < 0) {
      adjustedTop = 0;
      console.log("Too high");
    } else if (popupRect.bottom > viewportHeight) {
      console.log("too low");
      adjustedTop = viewportHeight - popupRect.height - popupRect.y;
    }

    if (popupRect.left < 0) {
      adjustedLeft = 0;
      console.log("too left");
    } else if (popupRect.right + popupRect.width > viewportWidth) {
      console.log("too right");
      adjustedLeft = 0 - (viewportWidth - (popupRect.width + popupRect.x));
    }
    // console.log(adjustd);

    // Set the adjusted position
    setAdjustedPosition({ top: adjustedTop, left: adjustedLeft });
  };

  return (
    <div className={styles.myCustomHeight}>
      {/* Toolbar */}
      <div className="rbc-toolbar">
        <div>
          <OutlineButton
            variant="primary"
            label="Previous"
            onClick={onPrevClick}
          />
          <OutlineButton
            variant="primary"
            label="Today"
            onClick={onTodayClick}
          />
          <OutlineButton variant="primary" label="Next" onClick={onNextClick} />
        </div>
        <p className="rbc-toolbar-label">
          {view === "month"
            ? `${currentMonth} ${date.getFullYear()}`
            : view === "week"
              ? `${currentMonth} ${date.getFullYear()}`
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
        // backgroundEvents={backgroundEvents}
        selected={selected}
        onSelectEvent={eventClick}
        // onSelecting={handleSelectSlot}
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
      {/* <div
        className="popupref"
        style={{ top: adjustedPosition.top, left: adjustedPosition.left }}
        ref={popupRef}
      >
        <EventPopup
          id={0}
          event={eventPopup}
          show={show === 0}
          closePopup={() => togglePopup(null)}
          submit={onEventSubmit}
        />
      </div> */}
    </div>
  );
};
