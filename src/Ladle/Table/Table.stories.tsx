import type { Story } from "@ladle/react";
import { Table } from "../../Components/Table/Table/Table.tsx";

type Props = {
  label?: string;
  disabled?: boolean;
  variant?: string;
};

export const Tables: Story<Props> = ({}) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: "#f4f4f4",
      padding: "20px",
    }}
  >
    <Table></Table>
  </div>
);
