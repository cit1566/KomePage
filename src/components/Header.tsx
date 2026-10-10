import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { MoonIcon, SunIcon } from "./Atom/SVG";

const navigation = [
  { to: "/", label: "Home", description: "처음으로" },
  { to: "/about", label: "About", description: "나에 대하여" },
  { to: "/diary", label: "Diary", description: "일상의 기록" },
];

export default function Header() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteHeaderInner}>
        <NavLink
          to="/"
          className={styles.siteHeaderLogo}
          aria-label="KomeDaGe 홈"
        >
          KomeDaGe
        </NavLink>

        <nav className={styles.siteHeaderDesktopNav} aria-label="주요 메뉴">
          {navigation.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              tabIndex={menuOpen ? 0 : -1}
              onClick={handleNavigation}
              className={({ isActive }) =>
                `${styles.siteHeaderMobileLink}${
                  isActive ? ` ${styles.siteHeaderMobileLinkActive}` : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.siteHeaderActions}>
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            className={styles.siteHeaderIconButton}
            aria-label="테마 전환"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            className={`${styles.siteHeaderMenuButton}${
              menuOpen ? ` ${styles.siteHeaderMenuButtonOpen}` : ""
            }`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`${styles.siteHeaderMobilePanel}${
          menuOpen ? ` ${styles.siteHeaderMobilePanelOpen}` : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className={styles.siteHeaderMobileNav}
          aria-label="모바일 주요 메뉴"
        >
          {navigation.map(({ to, label, description }, index) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              tabIndex={menuOpen ? 0 : -1}
              className={({ isActive }) =>
                `${styles.siteHeaderMobileLink}${
                  isActive ? ` ${styles.siteHeaderMobileLinkActive}` : ""
                }`
              }
            >
              <span className={styles.siteHeaderMobileIndex}>0{index + 1}</span>

              <span className={styles.siteHeaderMobileLabel}>{label}</span>

              <span className={styles.siteHeaderMobileDescription}>
                {description}
              </span>

              <svg
                className={styles.siteHeaderMobileArrow}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </NavLink>
          ))}
        </nav>

        <p className={styles.siteHeaderMobileNote}>
          Thoughts, days, and little moments.
        </p>
      </div>
    </header>
  );
}
