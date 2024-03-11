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

type Props = {
  pageSize?: number;
  pageIndex?: number;
  numberOfItems: number;
  pageCount: number;
  disabled?: boolean;
  changePage: (e: number) => void;
  jumpPage: (e: number) => void;
  setItems: (e: number) => void;
};

export const Paginator: Story<Props> = ({
  pageSize = 10,
  pageIndex = 0,
  numberOfItems,
  pageCount,
  changePage,
  jumpPage,
  setItems,
}) => {
  return (
    <div className={styles.paginator}>
      <p className={styles.paginText}>Showing</p>
      {/* Number of Items */}
      <div className={styles.paginInput}>
        <Select
          id="items"
          name="items"
          options={["10", "25", "50"]}
          values={["10", "25", "50"]}
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
          <NumberInput
            id="items"
            name="items"
            min={1}
            max={pageCount}
            updateValue={jumpPage}
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
