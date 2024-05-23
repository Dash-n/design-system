import type { Story } from "@ladle/react";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";
import { Button } from "../../Button/Button/Button";
import { OutlineButton } from "../../Button/OutlineButton/OutlineButton";
import { TextInput } from "../../Input/Text/TextInput";
import { Datepicker } from "../../Input/Date/Date";
import { useRef, useEffect, useState } from "react";
import { convertToDateTimeLocalString } from "../../../Utils/convertToDateTimeLocalString";
import moment from "moment";
import { isValid } from "date-fns";
import { MdArrowBack } from "react-icons/md";
import styles from "./EventPopup.module.css";
import { Select } from "../../Input/Select/Select";
import { CalendarEvent, PopupEvent } from "../calendarutils/calendarutils";
import { Modal } from "../../Modal/Modal";
import { ChangeEvent } from "react";
import defaultAvatar from "../../../images/defaultAvatar.jpeg";

type Athlete = {
  name: string;
  team?: string;
  photo?: string;
};
type Props = {
  athletes: Athlete[];
  event: PopupEvent;
  show: boolean;
  closePopup: () => void;
  submitEvent: (event: CalendarEvent) => void;
  deleteEvent: (id: number) => void;
};

type TempTime = {
  start: string;
  end: string;
};

export const EventPopup: Story<Props> = ({
  athletes,
  event = { id: 0, title: "", start: "", end: "" },
  show = false,
  closePopup,
  submitEvent,
  deleteEvent,
}: Props) => {
  const [calendarEvent, setCalendarEvent] = useState<PopupEvent>({
    id: 0,
    title: "",
    start: "",
    end: "",
  });

  const athleteList = athletes.map((athlete) => ({
    value: athlete.name,
    option: athlete.name,
  }));

  const [tempTime, setTempTime] = useState<TempTime>({
    start: "",
    end: "",
  });
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete>();
  const [field, setField] = useState("start");
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState(false);

  const inputRef = useRef("");

  useEffect(() => {
    setPage(0);
    if (event) {
      setCalendarEvent((prev) => ({
        ...prev,
        id: event.id ?? 0,
        title: event.title,
        start: event.start,
        end: event.end,
      }));
      setTempTime((prev) => ({
        ...prev,
        start: event.start,
        end: event.end,
      }));
      inputRef.current = event.title;
    }
  }, [show]);

  const dateNavigator = (field: string) => (
    <div className={styles.fieldSection}>
      <strong>{field === "start" ? "Time Start:" : "Time End:"}</strong>

      <input
        type="datetime-local"
        className={styles.input}
        value={field === "start" ? calendarEvent.start : calendarEvent.end}
        readOnly
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleChangePage(1, field);
          }
        }}
        onClick={() => {
          handleChangePage(1, field);
        }}
      />
    </div>
  );

  const Page2 = (field: string) => (
    <div className={styles.dateSection}>
      <div className={styles.dateSectionHeader}>
        <OutlineButton label={<MdArrowBack />} onClick={() => setPage(0)} />
        <strong>{field === "start" ? "Time Start:" : "Time End:"}</strong>
      </div>
      {field === "start" && (
        <Datepicker
          id={field}
          name={field}
          inputValue={tempTime.start}
          setInputValue={handleDateChange}
        />
      )}
      {field === "end" && (
        <Datepicker
          id={field}
          name={field}
          inputValue={tempTime.end}
          setInputValue={handleDateChange}
          startDate={new Date(calendarEvent.start)}
        />
      )}
      {field}
      <Button name={field} label="Confirm" onClick={confirmDateChange} />
    </div>
  );

  var confirmDateChange = () => {
    const starttime = new Date(tempTime.start);
    const endtime = new Date(tempTime.end);
    if (endtime < starttime) {
      const newEnd = moment(starttime).add(30, "m").toDate();
      tempTime.end = convertToDateTimeLocalString(newEnd);
    }
    setCalendarEvent((prev) => ({
      ...prev,
      title: calendarEvent.title,
      start: tempTime.start,
      end: tempTime.end,
    }));
    setPage(0);
  };

  const handleChangePage = (page: number, field: string) => {
    setPage(page);
    setField(field);
  };

  const handleDateChange = (date: string) => {
    setTempTime((prev) => ({
      ...prev,
      [field]: date,
    }));
  };

  const handleAthleteChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (athletes) {
      const selectedAthlete = athletes.find(
        (a) => a.name === event.target.value
      );
      setSelectedAthlete(selectedAthlete);
    }
  };

  const handleTitleChange = (title: string) => {
    inputRef.current = title;
  };

  const submit = () => {
    const subEvent: CalendarEvent = {
      id: calendarEvent.id,
      title: inputRef.current,
      start: new Date(calendarEvent.start),
      end: new Date(calendarEvent.end),
    };
    if (validEvent(subEvent)) submitEvent(subEvent);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleDelete = () => {
    deleteEvent(event.id);
    toggleModal();
  };

  const ConfirmModal = (
    <div className={styles.confirmModal}>
      <strong>Are you sure you want to delete Event {event.title}?</strong>
      <div className={styles.buttonSection}>
        <Button variant="warning" label="Confirm" onClick={handleDelete} />
        <OutlineButton label="Cancel" onClick={toggleModal} />
      </div>
    </div>
  );

  const validEvent = (event: CalendarEvent) => {
    if (event.title == "") {
      alert("Please enter Event Name");
      return false;
    }
    if (!isValid(event.start)) {
      alert("Invalid Start Date");
      return false;
    }
    if (!isValid(event.end)) {
      alert("Invalid End Date");
      return false;
    }
    return true;
  };

  return (
    <>
      {show && (
        <div className={styles.modal}>
          <div className={`${styles.modalContainer}`}>
            {page === 0 && (
              <div id="page0" className={styles.popupPage}>
                <div className={styles.popupHeader}>
                  <img
                    className={styles.profilePic}
                    src={selectedAthlete?.photo ?? defaultAvatar}
                  />
                  <div className={styles.athleteInfo}>
                    <Select
                      id="athlete"
                      name="athlete"
                      label="Athlete"
                      options={athleteList}
                      emptyOption="Select Athlete"
                      setAnswer={handleAthleteChange}
                    />
                  </div>
                </div>
                <div className={styles.eventInfo}>
                  <div className={styles.fieldSection}>
                    <strong>Event: </strong>
                    <TextInput
                      id="title"
                      name="title"
                      placeholder={"New Event"}
                      defaultValue={event?.title}
                      onChange={handleTitleChange}
                      required
                    />
                  </div>
                  {dateNavigator("start")}
                  {dateNavigator("end")}
                </div>
                <a className={styles.dashboardLink} href={"Dashboard link"}>
                  Go to Physio Dashboard
                </a>
                <div className={styles.buttonSection}>
                  <Button
                    label={`${calendarEvent.title === "" ? "Schedule" : "Re-Schedule"}`}
                    onClick={submit}
                  />
                  {calendarEvent.title !== "" && (
                    <>
                      <OutlineButton
                        variant="warning"
                        label="Delete Appointment"
                        onClick={toggleModal}
                      />
                      <Modal
                        modal={modal}
                        toggleModal={toggleModal}
                        children={ConfirmModal}
                      />
                    </>
                  )}
                </div>

                <div className={styles.deleteEnd}>
                  <button className={styles.closeButton} onClick={closePopup}>
                    <IconContext.Provider value={{ size: "20px" }}>
                      <MdClose />
                    </IconContext.Provider>
                  </button>
                </div>
              </div>
            )}
            {page === 1 && Page2(field)}
          </div>
        </div>
      )}
    </>
  );
};
