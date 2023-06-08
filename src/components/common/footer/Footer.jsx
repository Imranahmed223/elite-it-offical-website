import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_container_content}>
            <p>Have an idea?</p>
            <h1>Contact Us</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
