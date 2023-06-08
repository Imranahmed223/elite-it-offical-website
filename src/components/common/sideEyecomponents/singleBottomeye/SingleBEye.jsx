import React from "react";
import styles from "./SingleBEye.module.scss";
import { CircleImg } from "../../..";

const SingleBEye = (props) => {
  return (
    <>
      <div className={styles.sbEye}>
        <div className={styles.sbEye_top} style={{ height: props.length }}>
          <p>{props.para}</p>
          <p>{props.para2}</p>
        </div>
        <div className={styles.sbEye_bottom}>
          <CircleImg AvaterImg={props.Iphoto} className={styles.circle2} />
        </div>
      </div>
    </>
  );
};

export default SingleBEye;
