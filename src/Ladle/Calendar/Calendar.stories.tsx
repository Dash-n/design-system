import type { Story } from "@ladle/react";
import { Calendar } from "../../Components/Calendar/Calendar";
import { EventPopup } from "../../Components/Calendar/EventPopup/EventPopup";
import { useState } from "react";
import styles from "./Calendar.stories.module.css";

import events from "./events";
import backgroundEvents from "./backgroundEvents";

type Props = {
  width?: string;
  height?: string;
  margin?: string;
  bookings: any[];
  show: boolean;
};

const sampleEvent = {
  id: 14,
  title: "Physio Appointment",
  start: "2024-04-17T03:04:03.851Z",
  end: "2024-04-17T09:04:03.851Z",
  type: "appointment",
};

export const EventPopups: Story<Props> = ({}) => {
  const [show, setShow] = useState(false);
  const togglePopup = () => {
    setShow(true);
  };
  const closePopup = () => {
    setShow(false);
  };
  return (
    <>
      <div className={styles.centerDiv} onClick={togglePopup}>
        Hello
        <EventPopup event={sampleEvent} show={show} closePopup={closePopup} />
      </div>
    </>
  );
};

export const Calendars: Story<Props> = ({}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "80%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Calendar
        events={events}
        backgroundEvents={backgroundEvents}
        // handleClick={handleClick}
      />
    </div>
  );
};
