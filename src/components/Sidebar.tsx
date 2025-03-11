import { useState } from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <div
      className={`${styles.sidebar} ${
        isSidebarVisible ? styles.slideSidebar : null
      }`}
    >
      <button
        onClick={toggleSidebarVisibility}
        className={`${isSidebarVisible ? styles.morty : styles.rick}`}
      >
        <span className="sr-only">Close</span>
      </button>
      <nav>
        <li>Lorem</li>
        <li>Ipsum</li>
        <li>Dolor</li>
        <li>Sit</li>
        <li>Amet</li>
      </nav>
    </div>
  );
};

export default Sidebar;
