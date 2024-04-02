import type { Story } from "@ladle/react";
import styles from "./Table.module.css";
import { IconContext } from "react-icons";
import { toTitlecase } from "../../../Utils/toTitleCase";

type Props = {
  content: string[];
  sort?: { key: null; direction: string };
  handleSort?: (key: string) => void;
  customHeaderStyles?: string[];
};

export const Table: Story<Props> = ({
  content,
  sort,
  handleSort,
  customHeaderStyles,
}) => {
  const headers = content.length === 0 ? null : Object.keys(content[0]);

  const checkColumn = (header: string, index: number) => {
    if (headers === null) {
      return false;
    } else return headers[index] === header;
  };

  const customStyles = {
    id: { color: "red" },
    first_name: {
      maxWidth: "200px",
      wordWrap: "break-word",
      left: "0",
    },
    ip_address: { width: "100px", maxWidth: "100px", wordWrap: "break-word" },
  };
  const customClasses = {
    email: styles.truncate,
  };
  const sticky = ["first_name", true && "ip_address", "gender"].filter(Boolean);

  const customHeaderStyle = checkColumn() ? { color: "red" } : null;

  const renderTableHeaders = () => {
    if (content.length === 0) {
      return null;
    }
    const headers = Object.keys(content[0]);
    return (
      <IconContext.Provider value={{ size: "24px" }}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={`${styles.stickyGroup}`}>
              {headers
                .filter((header) => sticky.includes(header))
                .map((header) => (
                  <th
                    className={`${styles.headerCell}  ${customClasses[header]} ${styles.stickyHeader}`}
                    key={header}
                    onClick={() => handleSort(header)}
                    tabIndex={0}
                    style={customStyles[header]}
                  >
                    {toTitlecase(header)}
                    {sort.key === header &&
                      (sort.direction === "asc" ? "↑" : "↓")}
                  </th>
                ))}
            </th>

            {headers
              .filter((header) => !sticky.includes(header))
              .map((header) => (
                <th
                  className={`${styles.headerCell} ${customClasses[header]}`}
                  key={header}
                  onClick={() => handleSort(header)}
                  tabIndex={0}
                  style={customStyles[header]}
                >
                  {toTitlecase(header)}
                  {sort.key === header &&
                    (sort.direction === "asc" ? "↑" : "↓")}
                </th>
              ))}
          </tr>
        </thead>
      </IconContext.Provider>
    );
  };

  const checkValue = (item: any) => {
    return typeof item === "object" ? (
      <div className={styles.nestedCell}>
        {Object.values(item).map((value) => (
          <td>{checkValue(value)}</td>
        ))}
      </div>
    ) : (
      item
    );
  };

  const renderTableRows = () => {
    return (
      <tbody>
        {content.map((item, index) => (
          <tr key={index} className={styles.bodyRow}>
            <td className={`${styles.stickyGroup}`}>
              {Object.values(item).map((value, subIndex) =>
                sticky.includes(headers[subIndex]) ? (
                  <td
                    className={`${styles.bodyCell} ${customClasses[headers[subIndex]]} ${styles.stickyCell}`}
                    key={subIndex}
                    style={customStyles[headers[subIndex]]}
                  >
                    {checkValue(value)}
                  </td>
                ) : null
              )}
            </td>
            {Object.values(item).map((value, subIndex) =>
              sticky.includes(headers[subIndex]) ? null : (
                <td
                  className={`${styles.bodyCell} ${customClasses[headers[subIndex]]}`}
                  key={subIndex}
                  style={customStyles[headers[subIndex]]}
                >
                  {checkValue(value)}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div>
      <div className={styles.tableContainer}>
        <table>
          {renderTableHeaders()}
          {renderTableRows()}
        </table>
      </div>
    </div>
  );
};
