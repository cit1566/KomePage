import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";
import type { ReactNode } from "react";
type LinkButtonsProps = {
  title: string;
  herf: string;
  type?: "black" | "white";
  classProps?: string;
  children?: ReactNode;
};

export default function LinkButtons({
  title,
  herf,
  type = "black",
  classProps,
  children,
}: LinkButtonsProps) {
  if (type === "black")
    return (
      <Link className={`${styles.linkbutton_black} ${classProps}`} to={herf}>
        {title}
        {children}
      </Link>
    );
  else if (type === "white")
    return (
      <Link className={`${styles.linkbutton_white} ${classProps}`} to={herf}>
        {title}
        {children}
      </Link>
    );
}
