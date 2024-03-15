import type { Story } from "@ladle/react";
import styles from "./Container.module.css";

type Props = {
  children: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
};

export const Container: Story<Props> = ({
  children,
  width,
  height = "100%",
  margin,
}: Props) => {
  console.log(margin);
  return (
    <div
      className={styles.container}
      style={{ width: `${width}`, height: `${height}`, margin: `${margin}` }}
    >
      {children}
    </div>
  );
};
