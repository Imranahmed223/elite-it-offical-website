import React, { useState } from "react";
import styles from "./Work.module.scss";
import { Footer, Navbar, Projectsdesc, SidebtnC } from "../../components";
import { Arrowdown } from "../../assets";
import { mobileprojectData, webprojectData } from "../../data/projectsData";

const Work = () => {
  const [data, setData] = useState(webprojectData);
  const [activeTab, setActiveTab] = useState(true);

  console.log(webprojectData);
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
          <button
            className={styles.btns}
            onClick={() => {
              setData(webprojectData);
              setActiveTab(!activeTab);
            }}
            id={activeTab ? styles["shadow"] : ""}
          >
            WEB DEVELOPMENT
          </button>
          <button
            className={styles.btns}
            onClick={() => {
              setData(mobileprojectData);
              setActiveTab(!activeTab);
            }}
            id={activeTab ? "" : styles["shadow"]}
          >
            APP DEVELOPMENT
          </button>
        </div>
      </div>
      {/* ************** Web Projects Description Components ************************ */}
      {data.map((item) => {
        return (
          <>
            <Projectsdesc
              key={item.id}
              image={item.image}
              name={item.name}
              description={item.des}
              icon={item.icon}
              design={item.designTime}
              designTime={item.designTime}
              backEndTime={item.backEndTime}
              frontEndTime={item.frontEndTime}
              integrationTime={item.integrationTime}
              designer={item.designer}
              frontend={item.frontdev}
              backend={item.backdev}
            />
          </>
        );
      })}
    </>
  );
};

export default Work;
