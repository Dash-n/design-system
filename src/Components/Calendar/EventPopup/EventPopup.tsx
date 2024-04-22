import type { Story } from "@ladle/react";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";
import styles from "./EventPopup.module.css";
import { Button } from "../../Button/Button/Button";
import { OutlineButton } from "../../Button/OutlineButton/OutlineButton";
import { TextInput } from "../../Input/Text/TextInput";

type Props = {
  children?: React.ReactNode;
  event: any;
  width?: string;
  height?: string;
  margin?: string;
  show: boolean;
  closePopup: () => void;
};

type Event = {
  player?: string;
};

export const EventPopup: Story<Props> = ({
  event,
  show = false,
  closePopup,
}: Props) => {
  const start = new Date(event?.start).toLocaleString("en-GB", {
    timeZone: "UTC",
  });
  const end = new Date(event?.end).toLocaleString("en-GB", { timeZone: "UTC" });

  //   const bookNew = (event) =>

  //   const closePopup = () => {
  //     show = false;
  //   };

  return (
    <div className={styles.popup}>
      <div className={`${styles.popuptext} ${show && styles.show}`}>
        <div className={styles.popupHeader}>
          <img
            className={styles.profilePic}
            src="data:image/jpeg;base64,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"
          />
          <div className={styles.athleteInfo}>
            <strong className={styles.athleteName}> Athlete Name</strong>
            <p className={styles.teamName}> Athlete Team</p>
          </div>
        </div>
        <div className={styles.eventInfo}>
          <form>
            <div className={styles.fieldSection}>
              <strong>Event: </strong>
              <TextInput id="event" name="event" placeholder={event?.title} />
            </div>
            <div className={styles.fieldSection}>
              <strong>Time Start: </strong>
              <TextInput id="start" name="start" placeholder={start} />
            </div>
            <div className={styles.fieldSection}>
              <strong>Time End: </strong>
              <TextInput id="end" name="end" placeholder={end} />
            </div>
          </form>
        </div>
        <a className={styles.dashboardLink} href={"Dashboard link"}>
          Go to Physio Dashboard
        </a>
        <div className={styles.buttonSection}>
          <OutlineButton variant="warning" label="Cancel" />
          <Button label="Reschedule" />
        </div>

        <div className={styles.deleteEnd}>
          <button className={styles.closeButton} onClick={closePopup}>
            <IconContext.Provider value={{ size: "20px" }}>
              <MdClose />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
};