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
type DateRange = {
  start: Date;
  end: Date;
};

type Props = {
  events: CalendarEvent[];
  backgroundEvents: { id: number; title: string; start: Date; end: Date };
  availability?: { start: string; end: string };
  defaultEventLength?: number;
  athletes: Athlete[];
  // athletes: [{ option: string; value: string }];
  config: CalendarConfig;
};

type CalendarConfig = {
  step: number;
  timeslots: number;
};

type Athlete = {
  name: string;
  team?: string;
  photo?: string;
};

export const Calendar: Story<Props> = ({
  events,
  backgroundEvents,
  availability,
  defaultEventLength = defaultEveLength,
  athletes,
  config = { step: 15, timeslots: 4 },
}: Props) => {
  const [date, setDate] = useState<Date>(moment(new Date()).toDate());
  const [view, setView] = useState<(typeof Views)[Keys]>(Views.MONTH);
  const [toggleValue, setToggleValue] = useState(defaultView);
  const [myEvents, setEvents] = useState<CalendarEvent[]>(events);
  const [selected, setSelected] = useState();
  const [eventPopup, setEventPopup] = useState<PopupEvent>({
    id: 0,
    title: "",
    start: "",
    end: "",
  } as PopupEvent);
  const [show, setShow] = useState(false);

  const toolbarNav = new Map();
  toolbarNav.set("Previous", "PREV");
  toolbarNav.set("Today", "TODAY");
  toolbarNav.set("Next", "NEXT");

  class CustomToolbar extends Toolbar {
    handleNavigation = (value: string) => {
      this.navigate(toolbarNav.get(value));
    };

    render() {
      console.log(this);
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

    navigate = (action: string) => {
      this.props.onNavigate(action);
    };
  }

  const onView = useCallback(
    (newView: Views) => {
      setView(newView);
      setToggleValue("Day");
    },
    [setView]
  );

  //Week Label
  const dayRangeHeaderFormat = (
    dateRange: DateRange,
    locale: string,
    localizer: momentLocalizer
  ) => {
    const monthPrint = localizer.eq(dateRange.start, dateRange.end, "month")
      ? ""
      : "MMM";
    const yearPrint = localizer.eq(dateRange.start, dateRange.end, "year")
      ? ""
      : "YYYY";
    const formatter = `DD ${monthPrint} ${yearPrint}`;

    return (
      localizer.format(dateRange.start, formatter, locale) +
      " – " +
      localizer.format(
        dateRange.end,
        localizer.eq(dateRange.start, dateRange.end, "month")
          ? "DD MMMM YYYY"
          : "DD MMM YYYY",
        locale
      )
    );
  };

  //Day Label
  const dayHeaderFormat = (
    date: Date,
    locale: string,
    localizer: momentLocalizer
  ) => localizer.format(date, "dddd DD MMMM, YYYY", locale);

  const changeView = (value: string) => {
    if (value === "Month") {
      setView(Views.MONTH);
    }
    if (value === "Week") {
      setView(Views.WEEK);
    }
    if (value === "Day") {
      setView(Views.DAY);
    }
    setToggleValue(value);
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
      id: Array.from(myEvents).slice(-1)[0].id + 1, //get next ID available after last element. Should be safe?
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
      const currentDate = new Date();
      const past = currentDate > event?.end; // currently Unused (can use to set styling for past events)

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
    timeSlotWrapper: (timeSlotWrapperProps: any) => {
      /*
      //Future feature if needed
      //Template for setting work hours highlight. 
      
      const hasCustomInfo = timeSlotWrapperProps.value
        ? timeSlotWrapperProps.value.getHours() >= availability?.start &&
          timeSlotWrapperProps.value.getHours() < availability?.end
        : false;
      */
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
        step={config.step}
        timeslots={config.timeslots}
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
