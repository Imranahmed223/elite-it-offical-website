import React, { useState } from "react";
import styles from "./Sliderimgs.module.scss";

const Sliderimgs = (props) => {
  const [Isopen, setIsopen] = useState(false);
  const onMouse = () => {
    setIsopen(true);
  };
  const onLeave = () => {
    setIsopen(false);
  };
  return (
    <>
      <div
        className={styles.slider_container}
        onMouseEnter={onMouse}
        onMouseLeave={onLeave}
        style={{ backgroundImage: `url(${props.bgImage})` }}
      >
        <div
          className={styles.slider_container_overlay}
          style={{
            width: Isopen ? "100%" : "10rem",
            borderRadius: Isopen ? "45px" : "0px 45px 45px 0px",
            justifyContent: Isopen ? "left" : "",
            paddingLeft: Isopen ? "2rem" : "",
          }}
        >
          <span> {props.tittle} </span>
        </div>
      </div>
    </>
  );
};

export default Sliderimgs;
