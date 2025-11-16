import React from "react";
import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.spinner} aria-hidden="true">
      <div className={styles.loader} />
    </div>
  );
}
