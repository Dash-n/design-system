import type { Story } from "@ladle/react";
import styles from "./Table.module.css";
import { IconContext } from "react-icons";
import { toTitlecase } from "../../../Utils/toTitleCase";

type Props = {
  content: string[];
  sort?: { key: null; direction: string };
  alternate?: boolean;
  handleSort?: (key: string) => void;
  customHeaderStyles?: any;
  customClasses?: any;
  sticky?: string[];
};

type tableItem = {
  item: string;
};

export const Table: Story<Props> = ({
  content,
  sort,
  alternate = false,
  handleSort,
  customHeaderStyles,
  customClasses = {},
  sticky = [],
}) => {
  const headers = content.length === 0 ? null : Object.keys(content[0]);

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
                    onClick={() => handleSort!(header)}
                    tabIndex={0}
                    style={customHeaderStyles[header]}
                  >
                    {toTitlecase(header)}
                    {sort &&
                      sort.key === header &&
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
                  onClick={() => handleSort!(header)}
                  tabIndex={0}
                  style={customHeaderStyles[header]}
                >
                  {toTitlecase(header)}
                  {sort &&
                    sort.key === header &&
                    (sort.direction === "asc" ? "↑" : "↓")}
                </th>
              ))}
          </tr>
        </thead>
      </IconContext.Provider>
    );
  };

  const checkValue = (item: object | string) => {
    console.log(typeof item);
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

  const HighlightableTableRow = (tableItem: tableItem) => {
    return (
      <tr>
        <td className={`${styles.stickyGroup}`}>
          {Object.values(tableItem.item).map(
            (value, subIndex) =>
              sticky.includes(headers![subIndex]) && (
                <td
                  className={`${styles.bodyCell} ${customClasses[headers![subIndex]]} ${styles.stickyCell}`}
                  key={subIndex}
                  style={customHeaderStyles[headers![subIndex]]}
                >
                  {checkValue(value)}
                </td>
              )
          )}
        </td>
        {Object.values(tableItem.item).map(
          (value, subIndex) =>
            !sticky.includes(headers![subIndex]) && (
              <td
                className={`${styles.bodyCell} ${customClasses[headers![subIndex]]}`}
                key={subIndex}
                style={customHeaderStyles[headers![subIndex]]}
              >
                {checkValue(value)}
              </td>
            )
        )}
      </tr>
    );
  };

  const renderTableRows = () => {
    return (
      <tbody>
        {content.map((item, index) => (
          <HighlightableTableRow key={index} item={item} />
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
