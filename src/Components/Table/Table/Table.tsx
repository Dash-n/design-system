import type { Story } from "@ladle/react";
import styles from "./Table.module.css";
import { IconButton } from "../../Button/IconButton/IconButton";
import { MdFitScreen, MdLeaderboard, MdOutlineFitScreen } from "react-icons/md";
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
          <tr className={styles.headerRow}>
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
          <tr key={index} className={styles.bodyRow}>
            {Object.values(item).map((value, subIndex) => (
              <td className={styles.bodyCell} key={subIndex}>
                {typeof value === "object"
                  ? Object.values(value).map((subValue) => (
                      <td className={styles.bodyCell}>{subValue}</td>
                    ))
                  : value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div>
      {/* <div className={styles.tableTitle}>
        Table
        <div className={styles.titleButtons}>
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
        </div> */}
      {/* </div> */}
      <div className={styles.tableContainer}>
        <table>
          {renderTableHeaders()}
          {renderTableRows()}
        </table>
      </div>
    </div>
  );
};
