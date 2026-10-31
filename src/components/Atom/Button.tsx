import type { ReactNode } from "react";
import styles from "./Button.module.css";
interface ButtonProps {
  title: string;
  type?: "button" | "submit";
  children?: ReactNode;
}

export default function Button({
  title,
  type = "button",
  children,
}: ButtonProps) {
  return (
    <button type={type} className={styles.button}>
      {title}
      {children}
    </button>
  );
}
