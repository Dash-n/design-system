import type { Story } from "@ladle/react";
import { Paginator } from "../../Components/Table/Paginator/Paginator.tsx";
import { useState, useEffect } from "react";

type Props = {
  label?: string;
  disabled?: boolean;
  variant?: string;
};

export const Paginators: Story<Props> = ({}) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [numberOfItems, setNumberOfItems] = useState(50);

  const pageCount = Math.ceil(numberOfItems / pageSize);

  const setSize = (e) => {
    setPageSize(e.target.value);
  };

  const changePage = (navFunction: number) => {
    if (navFunction === 0) {
      setPageIndex(0);
    }
    if (navFunction === 1) {
      setPageIndex((prev) => {
        return prev > 0 ? (prev -= 1) : prev;
      });
    }
    if (navFunction === 2) {
      setPageIndex((prev) => {
        return prev < pageCount - 1 ? (prev += 1) : prev;
      });
    }
    if (navFunction === 3) {
      setPageIndex(pageCount - 1);
    }
  };

  const jumpPage = (e) => {
    const newPage = e.target.value;
    if (e.key === "Enter") {
      if (newPage <= 0) {
        setPageIndex(0);
      } else if (newPage > pageCount) {
        setPageIndex(pageCount - 1);
      } else {
        setPageIndex(e.target.value - 1);
      }
    }
  };

  useEffect;

  return (
    <div>
      Page: {pageIndex + 1}
      <br />
      Items per page: {pageSize}
      <br />
      Total number of items: {numberOfItems}
      <Paginator
        pageSize={pageSize}
        pageIndex={pageIndex}
        numberOfItems={numberOfItems}
        setItems={setSize}
        changePage={changePage}
        jumpPage={jumpPage}
        pageCount={pageCount}
      ></Paginator>
    </div>
  );
};
