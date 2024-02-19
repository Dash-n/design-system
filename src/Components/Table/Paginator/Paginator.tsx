import type { Story } from "@ladle/react";
import styles from "./Paginator.module.css";
import { TextInput } from "../../Input/Text/TextInput";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { IconContext } from "react-icons";

type Props = {
  pageSize: number;
  pageIndex: number;
  pageCount?: number;
  disabled?: boolean;
  changePage: (e: number) => void;
};

export const Paginator: Story<Props> = ({
  pageSize = 10,
  pageIndex,
  pageCount = 1,
  changePage,
}) => {
  return (
    <div className={styles.paginator}>
      <p className={styles.paginText}>Showing</p>
      <div className={styles.paginInput}>
        <TextInput id="items" name="items" label="15" />
      </div>
      <p className={styles.paginText}>of {pageSize} </p>
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
        <div className={styles.paginInput}>
          <TextInput id="items" name="items" label="1" />
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
