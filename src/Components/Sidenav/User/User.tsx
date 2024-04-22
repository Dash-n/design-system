import type { Story } from "@ladle/react";
import styles from "./User.module.css";
import { toTitlecase } from "../../../Utils/toTitleCase";
import { MdLogout, MdSettings } from "react-icons/md";

type Props = {
  username: string;
};

export const User: Story<Props> = ({ username }) => (
  <div className={styles.userDiv}>
    <a href="#/settings">{toTitlecase(username)}</a>
    <a href="#/">
      <MdLogout />
    </a>
  </div>
);
