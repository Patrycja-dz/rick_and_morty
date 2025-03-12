import { useState } from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={styles.container}>
      <nav
        className={`${styles.sidebar} ${
          isSidebarVisible ? styles.sidebarVisible : styles.sidebarHidden
        }`}
      >
        <ul>
          <li>
            <a href="/">Lorem</a>
          </li>
          <li>
            <a href="/">ipsum</a>
          </li>
          <li>
            <a href="/">dolor</a>
          </li>
          <li>
            <a href="/">sit</a>
          </li>
          <li>
            <a href="/">ament</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={toggleSidebarVisibility}
        className={`${styles.sidebarButton} ${
          isSidebarVisible ? styles.buttonActive : ""
        }`}
      >
        <span
          className={isSidebarVisible ? styles.iconHidden : styles.iconVisible}
        ></span>
        <span
          className={isSidebarVisible ? styles.iconVisible : styles.iconHidden}
        ></span>
      </button>
    </div>
  );
};

export default Sidebar;
