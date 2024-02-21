import type { Story } from "@ladle/react";
import { Table } from "../../Components/Table/Table/Table.tsx";
import { Paginator } from "../../Components/Table/Paginator/Paginator.tsx";
import { IconButton } from "../../Components/Button/IconButton/IconButton.tsx";
import { useState, useEffect } from "react";
import { MdFitScreen, MdLeaderboard, MdOutlineFitScreen } from "react-icons/md";

import jsondata from "./dummydata.json";

type Props = {
  label?: string;
  disabled?: boolean;
  variant?: string;
};

export const Tables: Story<Props> = ({}) => {
  const [jsonData, setData] = useState([]);
  const [sort, setSort] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    setData(jsondata);
  }, []);

  const handleSort = (key: string) => {
    const direction =
      sort.key === key && sort.direction === "asc" ? "desc" : "asc";
    setSort({ key, direction });
    console.log(key);
  };

  const tableContainer = {
    overflow: "auto",
    height: "300px",
    // outline: "1px solid red",
    borderRadius: "8px",
    border: "1px solid #c4c4c4",
  };
  const tableTitle = {
    display: "flex",
    width: "100%",
    background: "white",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const titleButtons = {
    display: "flex",
  };

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        background: "#f4f4f4",
        // padding: "20px",
        // display: "flex",
        // flexDirection: "column"
      }}
    >
      <div style={tableTitle}>
        Table
        <div style={titleButtons}>
          <IconButton
            label={<MdLeaderboard />}
            variant="outline"
            iconSize="20px"
          />
          <IconButton
            label={<MdFitScreen />}
            variant="outline"
            iconSize="20px"
          />
        </div>
      </div>
      <div style={tableContainer}>
        <Table content={jsonData} sort={sort} handleSort={handleSort}></Table>
      </div>
    </div>
  );
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
      <Paginator
        pageSize={pageSize}
        pageIndex={pageIndex}
        numberOfItems={numberOfItems}
        setItems={setSize}
        changePage={changePage}
        jumpPage={jumpPage}
        pageCount={pageCount}
      ></Paginator>
      Page: {pageIndex + 1}
      <br />
      Items per page: {pageSize}
      <br />
      Total number of items: {numberOfItems}
    </div>
  );
};
