import type { Story } from "@ladle/react";
import { Calendar } from "../../Components/Calendar/Calendar";

import events from "./events";

type Props = {
  width?: string;
  height?: string;
  margin?: string;
  bookings: any[];
};

export const Calendars: Story<Props> = ({}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Calendar events={events} />
    </div>
  );
};
