import type { Story } from "@ladle/react";
import "./big-calendar.css";
import styles from "./Calender.module.css";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import Toolbar from "react-big-calendar/lib/Toolbar";
import { Views } from "react-big-calendar";
import moment from "moment";
import { useCallback, useState } from "react";
import { Toggle } from "../Toggle/ToggleSwitch/Toggle";
import { EventPopup } from "./EventPopup/EventPopup";
import { convertToDateTimeLocalString } from "../../Utils/convertToDateTimeLocalString";
import {
  CalendarEvent,
  PopupEvent,
  defaultEventLength as defaultEveLength,
  defaultView,
} from "./calendarutils/calendarutils";

const localizer = momentLocalizer(moment);

type Keys = keyof typeof Views;

type Props = {
  events: CalendarEvent[];
  backgroundEvents: { id: number; title: string; start: Date; end: Date };
  availability?: { start: string; end: string };
  defaultEventLength?: number;
  athletes: [{ option: string; value: string }];
};

export const Calendar: Story<Props> = ({
  events,
  backgroundEvents,
  availability,
  defaultEventLength = defaultEveLength,
  athletes,
}: Props) => {
  const [date, setDate] = useState<Date>(moment(new Date()).toDate());
  const [view, setView] = useState<(typeof Views)[Keys]>(Views.MONTH);
  const [toggleValue, setToggleValue] = useState(defaultView);
  const [myEvents, setEvents] = useState<CalendarEvent[]>(events);
  const [selected, setSelected] = useState();
  const [eventPopup, setEventPopup] = useState<PopupEvent>();
  const [show, setShow] = useState(false);

  const currentMonth = date.toLocaleString("default", { month: "long" });

  const toolbarTitle = new Map();
  toolbarTitle.set("month", `${currentMonth} ${date.getFullYear()}`);
  toolbarTitle.set("week", `${currentMonth} ${date.getFullYear()}`);
  toolbarTitle.set(
    "day",
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );

  class CustomToolbar extends Toolbar {
    handleNavigation = (value: string) => {
      switch (value) {
        case "Previous":
          this.navigate("PREV");
          break;
        case "Today":
          this.navigate("TODAY");
          break;
        case "Next":
          this.navigate("NEXT");
          break;
      }
    };

    render() {
      return (
        <div className="rbc-toolbar">
          <div className={styles.toolbarNav}>
            <Toggle
              name="NavButtons"
              values={["Previous", "Today", "Next"]}
              defaultValue=""
              setChecked={this.handleNavigation}
            />
          </div>
          <p className="rbc-toolbar-label">{this.props.label}</p>
          <Toggle
            name="viewSelect"
            values={["Month", "Week", "Day"]}
            setChecked={changeView}
            defaultValue={toggleValue}
          />
        </div>
      );
    }

    navigate = (action) => {
      this.props.onNavigate(action);
    };
  }

  const onView = useCallback(
    (newView) => {
      setView(newView);
      setToggleValue("Day");
    },
    [setView]
  );

  //Week Label
  const dayRangeHeaderFormat = (
    { start, end },
    culture,
    localizer: momentLocalizer
  ) => {
    const sameMonth = localizer.eq(start, end, "month");
    const sameYear = localizer.eq(start, end, "year");
    const formatter = `DD ${sameMonth ? "" : "MMM"} ${sameYear ? "" : "YYYY"}`;

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
  const dayHeaderFormat = (date: Date, culture, localizer: momentLocalizer) =>
    localizer.format(date, "dddd DD MMMM, YYYY", culture);

  const changeView = (value: string) => {
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

  const togglePopup = () => {
    setShow(!show);
  };

  const eventClick = (event: any) => {
    const newEvent = {
      id: event.id,
      title: event.title,
      start: convertToDateTimeLocalString(event.start),
      end: convertToDateTimeLocalString(event.end),
    } as PopupEvent;
    setEventPopup(newEvent);
    togglePopup();
  };

  const handleSelectSlot = (event: any) => {
    let endTime = event.end;
    if (event.action === "click") {
      endTime = moment(event.start).add(defaultEventLength, "m").toDate();
    }
    const newEvent = {
      id: myEvents.slice(-1)[0].id + 1, //get next ID available after last element. Should be safe?
      title: "",
      start: convertToDateTimeLocalString(event.start),
      end: convertToDateTimeLocalString(endTime),
    } as PopupEvent;
    setEventPopup(newEvent);
    togglePopup();
  };

  const idExists = (array: CalendarEvent[], idToCheck: number): boolean => {
    return array.some((obj) => obj.id === idToCheck);
  };

  const submitEvent = (event: CalendarEvent) => {
    if (idExists(myEvents, event.id)) {
      setEvents(myEvents.map((item) => (item.id === event.id ? event : item)));
    } else {
      setEvents([...myEvents, event]);
    }
    togglePopup();
  };

  const deleteEvent = (id: number) => {
    setEvents(myEvents.filter((item) => item.id !== id));
    togglePopup();
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
          {view === "month" && (
            <div className={styles.timeLabel}>{timeString}</div>
          )}
          <div className={styles.titleLabel}>{title}</div>
        </div>
      );
    },
    timeSlotWrapper: (timeSlotWrapperProps) => {
      /*
      //Future feature if needed
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
      return (
        <div className={styles.timeSlot}>{timeSlotWrapperProps.children}</div>
      );
    },
    eventWrapper: ({ event, children }) => {
      return <div onClick={eventClick}>{children}</div>;
    },
    toolbar: CustomToolbar,
  };

  return (
    <div className={styles.calendar}>
      <div
        className={`${styles.overlay} ${show ? styles.overlayVisible : ""}`}
      />
      <EventPopup
        event={eventPopup}
        show={show}
        closePopup={() => togglePopup()}
        submitEvent={submitEvent}
        deleteEvent={deleteEvent}
        athletes={athletes}
      />

      <BigCalendar
        localizer={localizer}
        events={myEvents}
        formats={{ dayRangeHeaderFormat, dayHeaderFormat }}
        components={components}
        selected={selected}
        onSelectEvent={eventClick}
        onSelectSlot={handleSelectSlot}
        startAccessor="start"
        endAccessor="end"
        date={date}
        step={15}
        timeslots={4}
        toolbar={true}
        view={view}
        onView={onView}
        onNavigate={setDate}
        selectable
        popup
      />
    </div>
  );
};
