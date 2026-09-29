import { useState } from "react";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

const navArray: { key: number; href: string; label: string }[] = [
  { key: 1, href: "/", label: "Home" },
  { key: 2, href: "/about", label: "About" },
  { key: 3, href: "/diary", label: "Diary" },
];

export default function Header() {
  const [Theme, setTheme] = useState(true);
  return (
    <header className={styles.header}>
      <div className={styles.header_box}>
        <span className={styles.header_logo}>
          <b className={styles.header_logo_k}>K</b>ome
          <b className={styles.header_logo_d}>D</b>a
          <b className={styles.header_logo_g}>G</b>e
        </span>
        <nav className={styles.header_nav}>
          {navArray.map(({ key, href, label }) => (
            <NavLink
              key={key}
              to={href}
              className={({ isActive }) =>
                `${styles.nav_link} ${isActive ? styles.active : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <button
          className={styles.theme_button}
          onClick={() => setTheme(!Theme)}
          type="button"
          aria-label="테마 전환"
        >
          {Theme ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sun-icon lucide-sun"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-moon-icon lucide-moon"
            >
              <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
