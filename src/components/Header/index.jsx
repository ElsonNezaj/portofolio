import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";

export default function Header() {
  const handleAboutClick = () => {
    window.location.href = "#about";
  };
  const handleProjectsClick = () => {
    window.location.href = "#projects";
  };
  const handleContactClick = () => {
    window.location.href = "#contact";
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoNameContainer}>
        <Typography className={styles.name}>E&nbsp;.&nbsp;N</Typography>
      </div>
      <div className={styles.emptySpace} />
      <div className={styles.navigationContainer}>
        <Typography
          onClick={() => handleAboutClick()}
          className={styles.navigationLabel}
        >
          About
        </Typography>
        <Typography
          onClick={() => handleProjectsClick()}
          className={styles.navigationLabel}
        >
          Projects
        </Typography>
        <Typography
          onClick={() => handleContactClick()}
          className={styles.navigationLabel}
        >
          Contact
        </Typography>
      </div>
    </div>
  );
}
