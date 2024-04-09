import type { Story } from "@ladle/react";
import styles from "./Table.module.css";
import { IconContext } from "react-icons";
import { toTitlecase } from "../../../Utils/toTitleCase";
import { useState } from "react";

const root = document.documentElement;
const ALT_COLOR = getComputedStyle(root).getPropertyValue(
  "--hard-background-color"
);
const HIGHLIGHT_COLOR = getComputedStyle(root).getPropertyValue(
  "--outline-hover-color"
);

type Props = {
  content: string[];
  sort?: { key: null; direction: string };
  alternate?: boolean;
  handleSort?: (key: string) => void;
  customHeaderStyles?: any;
  customClasses?: any;
  sticky?: string[];
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
                    onClick={() => handleSort(header)}
                    tabIndex={0}
                    style={customHeaderStyles[header]}
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
                  style={customHeaderStyles[header]}
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

  const HighlightableTableRow = ({ item, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isOdd = index % 2 === 0;

    const handleMouseOver = () => {
      setIsHovered(true);
    };

    const handleMouseOut = () => {
      setIsHovered(false);
    };

    return (
      <tr
        style={{
          backgroundColor: isHovered
            ? HIGHLIGHT_COLOR
            : alternate
              ? isOdd
                ? ALT_COLOR
                : "transparent"
              : "transparent",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <td className={`${styles.stickyGroup}`}>
          {Object.values(item).map((value, subIndex) =>
            sticky.includes(headers[subIndex]) ? (
              <td
                className={`${styles.bodyCell} ${customClasses[headers[subIndex]]} ${styles.stickyCell}`}
                key={subIndex}
                style={customHeaderStyles[headers[subIndex]]}
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
              style={customHeaderStyles[headers[subIndex]]}
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
          <HighlightableTableRow key={index} item={item} index={index} />
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
