import React from "react";
import styles from "./Circle.module.scss";

const circleImg = ({ AvaterImg }) => {
  return (
    <>
      <div className={styles.circleImg_container}>
        <div className={styles.circleImg_container_content}>
          <img src={AvaterImg} alt="avater" />
        </div>
      </div>
    </>
  );
};

export default circleImg;
