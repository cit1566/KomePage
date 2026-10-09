import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import type { ReactNode } from "react";
type LinkButtonsProps = {
  title: string;
  herf: string;
  classProps?: string;
  children?: ReactNode;
};

export default function LinkButtons({
  title,
  herf,
  classProps,
  children,
}: LinkButtonsProps) {
  return (
    <Link className={`${styles.type_link} ${classProps}`} to={herf}>
      {title}
      {children}
    </Link>
  );
}
