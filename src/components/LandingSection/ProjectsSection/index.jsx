import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";
import { PROJECTS } from "../../../constants";

export default function ProjectsSection() {
  return (
    <div id="projects" className={styles.projectsSectionContainer}>
      <Typography className={styles.sectionTitle}>PROJECTS</Typography>
      <div className={styles.projectsContainer}>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className={styles.project}>
              <img
                src={project.logo}
                alt={project.name}
                className={styles.projectImage}
              />
              <Typography className={styles.projectName}>
                {project.name}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}
