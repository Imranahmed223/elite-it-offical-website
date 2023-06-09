import React from "react";
import styles from "./Work.module.scss";
import { CircleImg, Footer, Navbar, SidebtnC } from "../../components";
import { Arrowdown } from "../../assets";

const Work = () => {
  return (
    <>
      <div className={styles.work_container}>
        <SidebtnC />
        <div className={styles.work_container_content}>
          <div className={styles.work_container_content_top}>
            <Navbar />
          </div>
          <div className={styles.work_container_content_middle}>
            <p>See our mission</p>
            <h1 className="maintop_heading">in action</h1>
          </div>
          <div className={styles.work_container_content_bottom}>
            <p className="primary_para">
              We are passionate about helping businesses and IT teams not just
              advance, but thrive in this modern digital age by using the latest
              technology. Our team of experts provides an extensive range of IT
              services, tailored to the specific needs of your business. That’s
              not all, we also offer a completely free IT audit to access your
              current IT infrastructure and identify any areas that need
              improvement,
            </p>
            <img src={Arrowdown} alt="arrow" />
          </div>
        </div>
      </div>
      {/* ************** Development Buttons ************************ */}
      <div className={styles.devBtns}>
        <div className={styles.devBtns_content}>
          <button>WEB DEVELOPMENT</button>
          <button>APP DEVELOPMENT</button>
        </div>
      </div>


    </>
  );
};

export default Work;
