import React from "react";
import styles from "./RightsideEye.module.scss";
import { CircleImg } from "../../../..";
import { Iphotobg4 } from "../../../../../assets";

const RightsideEye = (props) => {
  return (
    <>
      <div className={styles.rsEye_container}>
        <div className={styles.rsEye_container_content}>
          <div className={styles.content1}>
            <CircleImg AvaterImg={props.AvaterImg} className={styles.circle} />
          </div>
          <img src={Iphotobg4} alt="bg" />
        </div>
      </div>
    </>
  );
};

export default RightsideEye;
