import type { Story } from "@ladle/react";
import { Calendar } from "../../Components/Calendar/Calendar";
import { EventPopup } from "../../Components/Calendar/EventPopup/EventPopup";
import { useEffect, useState } from "react";
import styles from "./Calendar.stories.module.css";

import events from "./events";
import backgroundEvents from "./backgroundEvents";
type selectOption = {
  option: string;
  value: string;
};
type Props = {
  width?: string;
  height?: string;
  margin?: string;
  show: boolean;
  athletes: selectOption;
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
    setShow(!show);
  };
  const closePopup = () => {
    setShow(false);
  };
  const onSubmit = () => {
    console.log("Submit");
  };
  return (
    <>
      <div className={styles.centerDiv}>
        <button onClick={togglePopup}>Hello</button>
        <EventPopup
          event={sampleEvent}
          show={show}
          closePopup={closePopup}
          submit={onSubmit}
        />
      </div>
    </>
  );
};

export const Calendars: Story<Props> = ({ athletes }) => {
  console.log(events);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Calendar
        events={events}
        backgroundEvents={backgroundEvents}
        athletes={athletes}
      />
    </div>
  );
};
Calendars.args = {
  athletes: [{ option: "Greg Gregory", value: "1" }, { option: "John Doe" }],
};
