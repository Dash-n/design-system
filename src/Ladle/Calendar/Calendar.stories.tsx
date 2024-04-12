import type { Story } from "@ladle/react";
import { Calendar } from "../../Components/Calendar/Calendar";

import events from "./events";
import backgroundEvents from "./backgroundEvents";

type Props = {
  width?: string;
  height?: string;
  margin?: string;
  bookings: any[];
};

export const Calendars: Story<Props> = ({}) => {
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Calendar
        events={events}
        backgroundEvents={backgroundEvents}
        handleClick={handleClick}
      />
    </div>
  );
};
