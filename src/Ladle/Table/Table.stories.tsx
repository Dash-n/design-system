import type { Story } from "@ladle/react";
import { Table } from "../../Components/Table/Table/Table.tsx";
import { useState, useEffect } from "react";
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

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f4f4f4",
        padding: "20px",
      }}
    >
      <Table content={jsonData} sort={sort} handleSort={handleSort}></Table>
    </div>
  );
};
