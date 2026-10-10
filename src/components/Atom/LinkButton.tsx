import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import styles from "./LinkButton.module.css";

type LinkButtonProps = {
  title: string;
  href: string;
  variant?: "black" | "white";
  className?: string;
  children?: ReactNode;
};

export default function LinkButton({
  title,
  href,
  variant = "black",
  className,
  children,
}: LinkButtonProps) {
  return (
    <Link
      to={href}
      className={`${styles.linkbutton} ${styles[variant]} ${className ?? ""}`}
    >
      {title}
      {children}
    </Link>
  );
}
