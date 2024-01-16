import type { Story } from "@ladle/react";
import styles from './Button.module.css';

type Props = { label: string };

export const Button: Story<Props> = ({ label }) => (
  <button
    className={styles.button}
  >
    {label ?? "Button"}
  </button>
);
Button.args = {
  label: "Test",
};
