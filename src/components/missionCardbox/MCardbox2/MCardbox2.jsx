import React from "react";
import styles from "./MCardbox2.module.scss";
import { MI3 } from "../../../assets";

const MCardbox2 = ({ imgM, imgTitle }) => {
  return (
    <>
      <div className={styles.MCardbox2_container}>
        <div className={styles.MCardbox2_container_innerContent}>
          <img src={imgM} alt="app _img" />
          <h1> {imgTitle} </h1>
        </div>
      </div>
    </>
  );
};

export default MCardbox2;
