import type { Story } from "@ladle/react";
import styles from "./Paginator.module.css";
import { NumberInput } from "../../../Components/Input/Number/NumberInput.tsx";
import { Select } from "../../Input/Select/Select";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { IconContext } from "react-icons";
import { useRef, useState, useEffect } from "react";

type selectOption = {
  option: string;
  value?: string;
};

type Props = {
  pageSize?: number;
  pageIndex?: number;
  numberOfItems: number;
  pageCount: number;
  disabled?: boolean;
  changePage: (e: number) => void;
  jumpPage: (e: number) => void;
  setItems: (e) => void;
  displayOptions?: selectOption[];
};

export const Paginator: Story<Props> = ({
  pageSize = 10,
  pageIndex = 0,
  numberOfItems,
  pageCount,
  changePage,
  jumpPage,
  setItems,
  displayOptions = [{ option: "10" }, { option: "25" }, { option: "50" }],
}) => {
  const [content, setContent] = useState(0);
  const [width, setWidth] = useState(0);
  // const span = useRef();
  const span = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (span.current) setWidth(span.current.offsetWidth + 30);
  }, [content]);

  const changeHandler = (evt: Event) => {
    if (evt.target) {
      setContent(evt.target.value);
    }
  };

  return (
    <div className={styles.paginator}>
      <p className={styles.paginText}>Showing</p>
      {/* Number of Items */}
      <div className={styles.paginInput}>
        <Select
          id="items"
          name="items"
          style={{ textAlign: "right" }}
          options={displayOptions}
          setAnswer={setItems}
        />
      </div>

      <p className={styles.paginText}>of {numberOfItems} </p>
      <IconContext.Provider value={{ size: "24px" }}>
        <button
          className={styles.paginButton}
          onClick={() => {
            changePage(0); //First Page
          }}
          disabled={pageIndex === 0}
        >
          <MdKeyboardDoubleArrowLeft />
        </button>
        <button
          className={styles.paginButton}
          onClick={() => {
            changePage(1); //Prev Page
          }}
          disabled={pageIndex === 0}
        >
          <MdKeyboardArrowLeft />
        </button>

        {/* Page picker */}
        <div className={styles.paginInput}>
          <span className={styles.hide} ref={span}>
            {content}
          </span>
          <NumberInput
            id="items"
            name="items"
            min={1}
            max={pageCount}
            style={{ width }}
            updateValue={jumpPage}
            onChange={changeHandler}
          />
        </div>
        <p className={styles.paginText}>of {pageCount}</p>

        <button
          className={styles.paginButton}
          onClick={() => {
            changePage(2); //Next Page
          }}
          disabled={pageIndex === pageCount - 1}
        >
          <MdKeyboardArrowRight />
        </button>
        <button
          className={styles.paginButton}
          onClick={() => {
            changePage(3); //Last Page
          }}
          disabled={pageIndex === pageCount - 1}
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </IconContext.Provider>
    </div>
  );
};
