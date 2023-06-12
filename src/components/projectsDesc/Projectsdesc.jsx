import React, { useState } from "react";
import styles from "./Projectsdesc.module.scss";
import { P1arrow, P2arrow } from "../../assets";

const Projectsdesc = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={styles.projectdesc_container}>
        <div className={styles.projectdesc_container_content}>
          <div className={styles.projectdesc_container_content_top}>
            <img src={props.image} alt="projectImg" />
          </div>
          <div className={styles.projectdesc_container_content_bottom}>
            <div
              className={styles.projectdesc_container_content_bottom_accordion}
              onClick={() => setShow(!show)}
            >
              <div
                className={
                  styles.projectdesc_container_content_bottom_accordion_content
                }
              >
                <h2> {props.name} </h2>
                {show === true ? (
                  <img
                    src={P2arrow}
                    alt="Arrowdown"
                    onClick={() => setShow(!show)}
                  />
                ) : (
                  <img
                    src={P1arrow}
                    alt="Arrowdown"
                    onClick={() => setShow(!show)}
                  />
                )}
              </div>
              {show && (
                <div
                  className={
                    styles.projectdesc_container_content_bottom_accordion_innerContent
                  }
                >
                  <div
                    className={
                      styles.projectdesc_container_content_bottom_accordion_innerContent_left
                    }
                  >
                    <p>{props.description}</p>
                  </div>
                  <div
                    className={
                      styles.projectdesc_container_content_bottom_accordion_innerContent_middle
                    }
                  >
                    <h1>Stack Used</h1>
                    <img src={props.icon} alt="AcordionImg1" />
                  </div>
                  <div
                    className={
                      styles.projectdesc_container_content_bottom_accordion_innerContent_right
                    }
                  >
                    <div
                      className={
                        styles.projectdesc_container_content_bottom_accordion_innerContent_right_1
                      }
                    >
                      <Designdesc heading="Design" desc={props.designTime} />
                      <Designdesc
                        heading="Front-end Development"
                        desc={props.frontEndTime}
                      />
                      <Designdesc
                        heading="Back-end Development"
                        desc={props.backEndTime}
                      />
                      <Designdesc
                        heading="Integraions"
                        desc={props.integrationTime}
                      />
                    </div>
                    <div
                      className={
                        styles.projectdesc_container_content_bottom_accordion_innerContent_right_2
                      }
                    >
                      <Designdesc heading="Designers " desc={props.designer} />
                      <Designdesc
                        heading="Front-end Developers "
                        desc={props.frontend}
                      />
                      <Designdesc
                        heading="Back-end developers "
                        desc={props.backend}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectsdesc;

const Designdesc = (props) => {
  return (
    <>
      <div className={styles.designdesc}>
        {/* <h1>Design</h1>
        <span>3 days</span> */}
        <h1>{props.heading}</h1>
        <span>{props.desc}</span>
      </div>
    </>
  );
};
