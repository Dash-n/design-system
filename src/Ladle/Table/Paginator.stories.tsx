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
  // const [pageCount, setPageCount] = useState(5);
  const [isFirstPage, setPrevDisabled] = useState(true);

  const pageCount = Math.ceil(numberOfItems / pageSize);

  const checkFirst = () => {
    setPrevDisabled(pageIndex < 1);
    console.log(isFirstPage);
    console.log(pageIndex);
  };

  const changePage = (navFunction: number) => {
    console.log(pageCount);
    console.log(pageIndex);

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

    // checkFirst();
    console.log("Page index: " + pageIndex);
  };

  useEffect;

  return (
    <div>
      {pageIndex}
      <Paginator
        pageSize={10}
        pageIndex={pageIndex}
        changePage={changePage}
        disabled={isFirstPage}
        pageCount={pageCount}
      ></Paginator>
    </div>
  );
};
