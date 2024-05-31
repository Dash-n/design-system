import type { Story } from "@ladle/react";
import { Table } from "../../Components/Table/Table/Table.tsx";
import { Paginator } from "../../Components/Table/Paginator/Paginator.tsx";
import { IconButton } from "../../Components/Button/IconButton/IconButton.tsx";
import { useState, useEffect } from "react";
import { MdFitScreen, MdLeaderboard } from "react-icons/md";

import jsondata from "./dummydata.json";

type Props = {
  label?: string;
  disabled?: boolean;
  variant?: string;
  alternate: boolean;
};

export const Tables: Story<Props> = ({ alternate }) => {
  const [jsonData, setData] = useState([]);
  const [sort, setSort] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    setData(jsondata);
  }, []);

  const handleSort = (key: string) => {
    const direction =
      sort.key === key && sort.direction === "asc" ? "desc" : "asc";
    setSort({ key, direction });
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
    margin: "8px",
    gap: "8px",
  };

  const customStyles = {
    id: { color: "red" },
    first_name: {
      textAlign: "left",
      color: "blue",
    },
    last_name: {
      textAlign: "right",
      color: "blue",
    },
    ip_address: {
      width: "100px",
      maxWidth: "100px",
      wordWrap: "break-word",
    },
    email: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100px",
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        background: "#f4f4f4",
      }}
    >
      <div style={tableTitle}>
        Table
        <div style={titleButtons}>
          <IconButton
            icon={<MdLeaderboard />}
            customStyles={{ margin: "4px", height: "32px", width: "32px" }}
            variant="outline"
          />
          <IconButton
            icon={<MdFitScreen />}
            customStyles={{ margin: "4px", height: "32px", width: "32px" }}
            variant="outline"
            iconSize="16px"
          />
        </div>
      </div>
      <div>
        <Table
          content={jsonData}
          sort={sort}
          handleSort={handleSort}
          alternate={alternate}
          customHeaderStyles={customStyles}
          sticky={["first_name", "last_name"]}
        ></Table>
      </div>
    </div>
  );
};
Tables.args = {
  alternate: false,
};

export const Paginators: Story<Props> = ({}) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [numberOfItems, setNumberOfItems] = useState(1000);

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
        displayOptions={[{ option: 5 }, { option: 200 }]}
      />
      Page: {pageIndex + 1}
      <br />
      Items per page: {pageSize}
      <br />
      Total number of items: {numberOfItems}
    </div>
  );
};
Paginators.args = {
  pagesize: 5,
  pageindex: 0,
  numberOfItems: 10,
};
