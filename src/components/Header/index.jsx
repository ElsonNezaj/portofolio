import React from "react";
import styles from "./styles.module.scss";
import LogoReference from "../../assets/images/logo512.png";
import { Typography } from "antd";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoNameContainer}>
        <div className={styles.logoContainer}>
          <img src={LogoReference} alt="logo" className={styles.logo} />
        </div>
        <Typography className={styles.name}>Elson Nezaj</Typography>
      </div>
      <div className={styles.emptySpace} />
      <div className={styles.navigationContainer}>Navigation</div>
    </div>
  );
}
