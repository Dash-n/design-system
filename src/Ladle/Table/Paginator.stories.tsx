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
  const [pageSize, setPageSize] = useState(10);
  const [pageCount, setPageCount] = useState();
  const [isFirstPage, setPrevDisabled] = useState(true);

  const checkFirst = () => {
    setPrevDisabled(pageIndex < 1);
    console.log(isFirstPage);
    console.log(pageIndex);
  };

  const changePage = (e: number) => {
    console.log(e);
    console.log(pageIndex);
    if (e == 2) {
      setPageIndex(99);
    } else {
      console.log("Math " + Math.abs((pageIndex + e) * e));
      setPageIndex(Math.abs((pageIndex + e) * e));
      console.log("Page index: " + pageIndex);
    }
    checkFirst();
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
      ></Paginator>
    </div>
  );
};
