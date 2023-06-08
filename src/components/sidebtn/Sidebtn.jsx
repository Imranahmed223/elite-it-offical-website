import React from "react";
import styles from "./Sidebtn.module.scss";
import { Sidebtn } from "../../assets";
const SidebtnC = () => {
  return (
    <>
      <img src={Sidebtn} alt="btn" className={styles.sidebtn} />
    </>
  );
};

export default SidebtnC;
