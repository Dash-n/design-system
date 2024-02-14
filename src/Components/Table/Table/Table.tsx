import type { Story } from "@ladle/react";
import styles from "./Table.module.css";
import { useState } from "react";

// type Props = {
//   label: string;
//   disabled?: boolean;
//   variant: string;
// };

type User = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: string;
};

export const Table: Story = () => {
  const [data, setData] = useState<User[]>([]);

  return (
    <table>
      <thead>
        <tr className={styles.headerRow}>
          <th className={styles.headerCell}>Header</th>
          <th className={styles.headerCell}>Header</th>
          <th className={styles.headerCell}>Header</th>
          <th className={styles.headerCell}>Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.bodyCell}>Body</td>
          <td className={styles.bodyCell}>Body</td>
          <td className={styles.bodyCell}>Body</td>
          <td className={styles.bodyCell}>Body</td>
        </tr>
        <tr>
          <td className={styles.bodyCell}>Body</td>
          <td className={styles.bodyCell}>Body</td>
          <td className={styles.bodyCell}>Body</td>
          <td className={styles.bodyCell}>Body</td>
        </tr>
        <tr>
          <td className={styles.bodyCell}>Body</td>
          <td className={styles.bodyCell}>Body</td>
          <td className={styles.bodyCell}>Body</td>
          <td className={styles.bodyCell}>Body</td>
        </tr>
      </tbody>
    </table>
  );
};
