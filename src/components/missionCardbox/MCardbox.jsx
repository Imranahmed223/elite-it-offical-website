import React from "react";
import styles from "./MCardbox.module.scss";
import { MI2 } from "../../assets";

const MCardbox = () => {
  return (
    <>
      <div className={styles.MCardbox_container}>
        <div className={styles.MCardbox_container_innerContent}>
          <img src={MI2} alt="app _img" />
          <h1> JUGA HEALTH WEBSITE </h1>
        </div>
      </div>
    </>
  );
};

export default MCardbox;
