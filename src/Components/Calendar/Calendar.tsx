import type { Story } from "@ladle/react";
import "./big-calendar.css";
import styles from "./Calender.module.css";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import Toolbar from "react-big-calendar/lib/Toolbar";
import { EventProps, Views } from "react-big-calendar";
import moment from "moment";
import { cloneElement, useCallback, useState, useRef, useEffect } from "react";
import { Toggle } from "../Toggle/ToggleSwitch/Toggle";
import { OutlineButton } from "../Button/OutlineButton/OutlineButton";
import { EventPopup } from "./EventPopup/EventPopup";
import { convertToDateTimeLocalString } from "../../Utils/convertToDateTimeLocalString";
import { CalendarEvent, PopupEvent } from "./calendarutils/calendarutils";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

type Keys = keyof typeof Views;

type Props = {
  events: CalendarEvent[];
  backgroundEvents: { id: number; title: string; start: Date; end: Date };
  availability?: { start: string; end: string };
};

export const Calendar: Story<Props> = ({
  events,
  backgroundEvents,
  availability,
}: Props) => {
  const [date, setDate] = useState<Date>(moment(new Date()).toDate());
  const [view, setView] = useState<(typeof Views)[Keys]>(Views.WEEK);
  const [toggleValue, setToggleValue] = useState("Month");
  const [myEvents, setEvents] = useState<CalendarEvent[]>(events);
  const [selected, setSelected] = useState();
  const [eventPopup, setEventPopup] = useState<PopupEvent>(null);
  const [show, setShow] = useState(null);
  const [test, setTest] = useState(["a"]);

  const currentMonth = date.toLocaleString("default", { month: "long" });

  const toolbarTitle = new Map();
  toolbarTitle.set("month", `${currentMonth} ${date.getFullYear()}`);
  toolbarTitle.set("week", `${currentMonth} ${date.getFullYear()}`);
  toolbarTitle.set(
    "day",
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );

  class CustomToolbar extends Toolbar {
    render() {
      return (
        <div className="rbc-toolbar">
          <div>
            <OutlineButton
              variant="primary"
              label="Previous"
              onClick={() => this.navigate("PREV")}
            />
            <OutlineButton
              variant="primary"
              label="Today"
              onClick={() => this.navigate("TODAY")}
            />
            <OutlineButton
              variant="primary"
              label="Next"
              onClick={() => this.navigate("NEXT")}
            />
          </div>
          <p className="rbc-toolbar-label">{this.props.label}</p>
          <Toggle
            name="viewSelect"
            values={["Month", "Week", "Day"]}
            setChecked={changeView}
          />
        </div>
      );
    }

    navigate = (action) => {
      this.props.onNavigate(action);
    };
  }
  /*const hasMonth = local.eq(start, end, "month")
const hasYear = // as above
const formatter = `DD ${hasMonth && MMM} ${hasYear && YYYY}`

local.format(start, formatter)*/

  //Week Label
  const dayRangeHeaderFormat = (
    { start, end },
    culture,
    localizer: momentLocalizer
  ) => {
    const sameMonth = localizer.eq(start, end, "month");
    const sameYear = localizer.eq(start, end, "year");
    const formatter = `DD ${sameMonth ? "" : "MMM"} ${sameYear ? "" : "YYYY"}`;
    console.log(formatter);

    return (
      localizer.format(start, formatter, culture) +
      " – " +
      localizer.format(
        end,
        localizer.eq(start, end, "month") ? "DD MMMM YYYY" : "DD MMM YYYY",
        culture
      )
    );
  };

  //Day Label
  const dayHeaderFormat = (date: Date, culture, localizer) =>
    localizer.format(date, "dddd DD MMMM, YYYY", culture);

  const [adjustedPosition, setAdjustedPosition] = useState({ top: 0, left: 0 });
  const popupRef = useRef(null);

  const changeView = (value: string) => {
    togglePopup(null);
    if (value === "Month") {
      setView(Views.MONTH);
      setToggleValue("Month");
    }
    if (value === "Week") {
      setView(Views.WEEK);
      setToggleValue("Week");
    }
    if (value === "Day") {
      setView(Views.DAY);
      setToggleValue("Day");
    }
  };

  const togglePopup = (id) => {
    adjustPopupPosition();
    setShow(id);
  };

  const eventClick = (event: any) => {
    const newEvent = {
      id: event.id,
      title: event.title,
      start: convertToDateTimeLocalString(event.start),
      end: convertToDateTimeLocalString(event.end),
    } as PopupEvent;
    setEventPopup(newEvent);
    togglePopup(event.id);
  };

  const handleSelectSlot = (event: any) => {
    if (show === null) {
      const newEvent = {
        id: myEvents.slice(-1)[0].id + 1,
        title: "",
        start: convertToDateTimeLocalString(event.start),
        end: convertToDateTimeLocalString(event.end),
      } as PopupEvent;
      console.log(newEvent);
      setEventPopup(newEvent);
      togglePopup(0);
    }
  };

  const submitNewEvent = (event: CalendarEvent) => {
    const nextId = myEvents.slice(-1)[0].id + 1;

    setEvents([...myEvents, event]);
    togglePopup(null);
  };

  const editEvent = (event: CalendarEvent) => {
    setEvents(myEvents.map((item) => (item.id === event.id ? event : item)));
  };

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
        <div className={`${styles.eventLabel} `}>
          <div className={styles.timeLabel}>{timeString}</div>
          <div className={styles.titleLabel}>{title}</div>
        </div>
      );
    },
    timeSlotWrapper: (timeSlotWrapperProps) => {
      /*
      //Future feature 
      //Template for setting work hours highlight. 
      
      const hasCustomInfo = timeSlotWrapperProps.value
        ? timeSlotWrapperProps.value.getHours() >= availability?.start &&
          timeSlotWrapperProps.value.getHours() < availability?.end
        : false;
      */

      const style = {
        display: "flex",
        flex: 1,
        position: "relative",
      };
      return <div style={style}>{timeSlotWrapperProps.children}</div>;
    },
    eventWrapper: ({ event, children }) => {
      return (
        <div>
          {children}
          <div className="popupdiv">
            <EventPopup
              event={eventPopup}
              show={show === event.id}
              closePopup={() => togglePopup(null)}
              submitEvent={editEvent}
            />
          </div>
        </div>
      );
    },
    toolbar: CustomToolbar,
  };

  const adjustPopupPosition = () => {
    if (!popupRef.current) return;
    console.log(popupRef);
    //Still debugging this function

    const popupRect = popupRef.current.getBoundingClientRect();
    console.log(popupRect);
    //Still debugging this function
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

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

    // Set the adjusted position
    setAdjustedPosition({ top: adjustedTop, left: adjustedLeft });
  };

  return (
    <div className={styles.myCustomHeight}>
      <div
        ref={popupRef}
        className="popupref"
        style={{
          position: "absolute",
          left: "30%",
          top: "30%",
        }}
      >
        {/* EMPTY POPUP */}
        <EventPopup
          event={eventPopup}
          show={show === 0}
          closePopup={() => togglePopup(null)}
          submitEvent={submitNewEvent}
        />
      </div>

      <BigCalendar
        localizer={localizer}
        events={myEvents}
        formats={{ dayRangeHeaderFormat, dayHeaderFormat }}
        components={components}
        selected={selected}
        onSelectEvent={eventClick}
        onSelecting={handleSelectSlot}
        onSelectSlot={handleSelectSlot}
        startAccessor="start"
        endAccessor="end"
        date={date}
        step={15}
        timeslots={4}
        toolbar={true}
        // defaultView={Views.MONTH}
        view={view}
        onView={setView}
        onNavigate={setDate}
        selectable
        popup
      />
    </div>
  );
};
