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
            <div className={styles.project}>
              <img
                src={project.src}
                alt={project.name}
                className={`
                ${styles.projectImage}
                ${(index + 1) % 2 === 0 && styles.secondOrder}
                `}
              />
              <div className={styles.projectInfo}>
                <div className={styles.projectTitle}>
                  <Typography className={styles.projectName}>
                    {project.name}
                  </Typography>
                  {project.teamProject && (
                    <Typography className={styles.teamProjectLabel}>
                      &#40; Team Project &#41;
                    </Typography>
                  )}
                </div>
                <Typography className={styles.projectDescription}>
                  {project.desc}
                </Typography>
                {project.url && (
                  <Typography className={styles.projectLink}>
                    Project Link : <a href={project.url}>{project.url}</a>
                  </Typography>
                )}
                <Typography
                  className={`
                  ${styles.projectState} 
                  ${project.finished ? styles.greenState : styles.redState}
                  `}
                >
                  {project.finished ? "Finished" : "Not Finished"}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
