import React from "react";
import styles from "./Righteye.module.scss";
import { CircleImg } from "../../..";
import { Iphoto4 } from "../../../../assets";

const Righteye = (props) => {
  return (
    <div className={styles.rightEye}>
      <div className={styles.rightEye_content}>
        <h1>{props.title}</h1>
        <div className={styles.rightEye_content_innercontent}>
          <div className={styles.rightEye_content_innercontent_left}>
            <div>
              <p>{props.para}</p>
            </div>
          </div>
          <div className={styles.rightEye_content_innercontent_right}>
            <CircleImg AvaterImg={props.Iphoto} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Righteye;
