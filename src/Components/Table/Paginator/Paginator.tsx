import type { Story } from "@ladle/react";
import styles from "./Paginator.module.css";
import { MdEdit, MdSettings, MdDelete } from "react-icons/md";
import { TextInput } from "../../Input/Text/TextInput";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { useState } from "react";
import { IconContext } from "react-icons";

type Props = {
  pageSize: number;
  pageIndex: number;
  pageCount?: number;
  disabled?: boolean;
  changePage: (e: number) => void;
};

const iconMappings = {
  edit: { icon: <MdEdit />, label: "Inputs" },
  settings: { icon: <MdSettings />, label: "Settings" },
  delete: { icon: <MdDelete />, label: "Delete" },
};

export const Paginator: Story<Props> = ({
  pageSize = 15,
  pageIndex,
  pageCount,
  changePage,
  disabled,
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
            changePage(0);
            // checkFirst();
          }}
        >
          <MdKeyboardDoubleArrowLeft />
        </button>
        <button
          className={styles.paginButton}
          onClick={() => {
            changePage(-1);
            // checkFirst();
          }}
          disabled={disabled}
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
            changePage(1);
            // checkFirst();
          }}
        >
          <MdKeyboardArrowRight />
        </button>
        <button
          className={styles.paginButton}
          onClick={() => {
            changePage(2);
            // checkFirst();
          }}
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </IconContext.Provider>
    </div>
  );

  Paginator.defaultProps = {
    pageIndex: 0,
  };
};
