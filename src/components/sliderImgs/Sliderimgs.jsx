import React from "react";
import styles from "./Sliderimgs.module.scss";

const Sliderimgs = () => {
  return (
    <>
      <div className={styles.slider_container}>
        <div className={styles.slider_container_overlay}>
          <span>Web Development</span>
        </div>
      {/* <div className={styles.overlay}>Web Development</div> */}
      </div>
    </>
  );
};

export default Sliderimgs;
