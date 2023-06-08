import React from "react";
import { Iphoto3 } from "../../../../assets";
import styles from "./Righteye2.module.scss";
import { CircleImg } from "../../..";

const Righteye2 = (props) => {
  return (
    <>
      <div className={styles.righteye2}>
        <div className={styles.righteye2_content}>
          <div className={styles.righteye2_content_left}>
            <CircleImg AvaterImg={props.Iphoto} className={styles.circle} />
            <div className={styles.righteye2_content_left_bg}>
              <p>{props.bgpara}</p>
            </div>
          </div>
          <div className={styles.righteye2_content_right}>
            <h1>{props.title}</h1>
            <p>{props.para1}</p>
            <p>{props.para2}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Righteye2;
