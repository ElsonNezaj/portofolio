import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoNameContainer}>
        <Typography className={styles.name}>E&nbsp;.&nbsp;N</Typography>
      </div>
      <div className={styles.emptySpace} />
      <div className={styles.navigationContainer}>
        <Typography className={styles.navigationLabel}>About</Typography>
        <Typography className={styles.navigationLabel}>Projects</Typography>
        <Typography className={styles.navigationLabel}>Contact</Typography>
      </div>
    </div>
  );
}
