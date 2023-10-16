import React from "react";
import styles from "./styles.module.scss";
import FirstSection from "./FirstSection";
import AboutSection from "./AboutSection";

export default function LandingSection() {
  return (
    <div className={styles.landingSectionContainer}>
      <FirstSection />
      <AboutSection />
    </div>
  );
}
