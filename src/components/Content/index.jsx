import React from "react";
import styles from "./styles.module.scss";
import Header from "../Header";
import LandingSection from "../LandingSection";

export default function Content() {
  return (
    <div className={styles.content}>
      <Header />
      <LandingSection />
    </div>
  );
}
