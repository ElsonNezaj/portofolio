import React from "react";
import styles from "./styles.module.scss";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Typography } from "antd";

export default function FirstSection() {
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
    <div className={styles.sectionContainer}>
      <div className={styles.titleContainer}>
        <Typography className={styles.titleLabel}>E&nbsp;.&nbsp;N</Typography>
        <Typography className={styles.subTitleLabel}>
          Elson Nezaj -{" "}
          <span className={styles.subTitleSpan}> React Developer</span>
        </Typography>
      </div>
      <div className={styles.navigationContainer}>
        <div
          onClick={() => handleAboutClick()}
          className={styles.navigationItem}
        >
          <Typography className={styles.navigationItemLabel}>
            ABOUT
            <ArrowDownOutlined />
          </Typography>
        </div>
        <div
          onClick={() => handleProjectsClick()}
          className={styles.navigationItem}
        >
          <Typography className={styles.navigationItemLabel}>
            PROJECTS
            <ArrowDownOutlined />
          </Typography>
        </div>
        <div
          onClick={() => handleContactClick()}
          className={styles.navigationItem}
        >
          <Typography className={styles.navigationItemLabel}>
            CONTACT
            <ArrowDownOutlined />
          </Typography>
        </div>
      </div>
    </div>
  );
}
