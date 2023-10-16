import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";

export default function FirstSection() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.titleContainer}>
        <Typography className={styles.titleLabel}>E&nbsp;.&nbsp;N</Typography>
        <Typography className={styles.subTitleLabel}>
          Elson Nezaj -{" "}
          <span className={styles.subTitleSpan}> React Developer</span>
        </Typography>
      </div>
    </div>
  );
}