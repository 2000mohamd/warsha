import React from "react";
import styles from "../../styles/Home.module.css";
const Basics = () => {
  return (
    <div className={styles.basicsContainer}>
      <div className={styles.basicsCategory}>
        <h1>فِكر</h1>
      </div>
      <div className={styles.basicsCategory}>
        <h1>قِيم</h1>
      </div>
      <div className={styles.basicsCategory}>
        <h1>فَن</h1>
      </div>
      <div className={styles.basicsCategory}>
        <h1>رِياضة</h1>
      </div>
    </div>
  );
};

export default Basics;
