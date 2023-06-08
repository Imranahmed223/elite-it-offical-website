import React from "react";
import { MI4 } from "../../../assets";
import styles from "./MCardbox3.module.scss";

const MCardbox3 = () => {
  return (
    <>
      <div className={styles.MCardbox3_container}>
        <div className={styles.MCardbox3_container_innerContent}>
          <img src={MI4} alt="app _img" />
          <h1> LARGESSE </h1>
          <h1> APP </h1>
        </div>
      </div>
    </>
  );
};

export default MCardbox3;
