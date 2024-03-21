import type { Story } from "@ladle/react";
import styles from "./Toast.module.css";
import { toTitlecase } from "../../Utils/index.ts";

type Props = {
  // label: string;
  disabled?: boolean;
  variant: string;
  content: any[];
};

export const Toast: Story<Props> = ({ content }) => {
  console.log(content);
  return (
    <div className={styles.toastContainer}>
      {content.map((entry, index) => (
        <div style={{ width: "100%" }}>
          <div className={styles.notifContainer}>
            <div className={styles.containerText}>
              <div className={styles.notifTitle}>{content[index].title}</div>
              <div className={styles.notifContent}>
                {content[index].content}
              </div>
            </div>
            <span className={`${content[index].unread ? styles.dot : ""}`} />
          </div>
          <span className={styles.lineSpan}></span>
        </div>
      ))}
    </div>
  );
};
// Button.defaultProps = {
//   variant: "",
//   label: "",
// };
