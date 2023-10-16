import React from "react";
import styles from "./styles.module.scss";
import { Rate, Typography } from "antd";
import { SKILLS } from "../../../constants";

export default function AboutSection() {
  return (
    <div id="about" className={styles.aboutSectionContainer}>
      <div className={styles.sectionTitleContainer}>
        <Typography className={styles.sectionTitleLabel}>ABOUT</Typography>
        <div className={styles.sectionTitleSubContainer}>
          <Typography className={styles.captionLabel}>
            My name is Elson Nezaj , a passionate react developer, based in
            Tirana - Albania.
          </Typography>
          <Typography className={styles.experienceLabel}>
            Years of experience : 2 years
          </Typography>
        </div>
      </div>
      <div className={styles.skillsSection}>
        <Typography className={styles.skillsLabel}>SKILLS</Typography>
        <div className={styles.skillsContainer}>
          {SKILLS.map((skill) => (
            <div className={styles.skill}>
              <img
                src={skill.src}
                className={styles.skillLogo}
                alt={skill.name}
              />
              <Typography className={styles.skillLabel}>
                {skill.name}
              </Typography>
              <Rate
                disabled
                defaultValue={skill.stars}
                className={styles.rate}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
