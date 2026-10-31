import styles from "./CenterLine.module.css";

interface CenterLineProps {
  className?: string;
}

export default function CenterLine({ className }: CenterLineProps) {
  return <div className={`${styles.center_line} ${className ?? ""}`}></div>;
}
