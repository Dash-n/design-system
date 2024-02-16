import type { Story } from "@ladle/react";
import styles from "./Table.module.css";
import { IconContext } from "react-icons";

type Props = {
  content: string[];
  sort?: { key: null; direction: string };
  handleSort: (key: string) => void;
};

export const Table: Story<Props> = ({ content, sort, handleSort }) => {
  const renderTableHeaders = () => {
    if (content.length === 0) {
      return null;
    }
    const headers = Object.keys(content[0]);
    return (
      <IconContext.Provider value={{ size: "24px" }}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                className={styles.headerCell}
                key={header}
                onClick={() => handleSort(header)}
                tabIndex={0}
              >
                {header}{" "}
                {sort.key === header && (sort.direction === "asc" ? "↑" : "↓")}
              </th>
            ))}
          </tr>
        </thead>
      </IconContext.Provider>
    );
  };

  const renderTableRows = () => {
    return (
      <tbody>
        {content.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, subIndex) => (
              <td className={styles.bodyCell} key={subIndex}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div>
      <table>
        {renderTableHeaders()}
        {renderTableRows()}
      </table>
    </div>
  );
};
