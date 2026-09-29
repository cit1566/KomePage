import { Link } from "react-router-dom";
import styles from "./Button.module.css";
type ButtonsProps = {
  title: string;
  type: "button" | "link";
  herf: string;
};

export default function Buttons({ title, type, herf }: ButtonsProps) {
  if (type === "button") {
    return <button className={styles.type_button}>{title}</button>;
  } else if (type ==="link"   {
    return (
      <Link className={styles.type_link} to={herf}>
        {title}
      </Link>
    );
  }
}
