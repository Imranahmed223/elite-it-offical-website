import React from "react";
import styles from "./BottomEye.module.scss";
import { Iphoto5 } from "../../../../assets";
import { CircleImg } from "../../..";

const BottomEye = (props) => {
  return (
    <>
      <div className={styles.webcontainer_bottom}>
        <h1>{props.title}</h1>
        <div className={styles.webcontainer_bottom_content}>
          <div className={styles.webcontainer_bottom_content_left}>
            <p>
             {props.para}
            </p>
          </div>
          {/* <BottomEye length="62.3rem" Iphoto={Iphoto5} /> */}
          <div className={styles.bottomEye}>
            <div
              className={styles.bottomEye_top}
              style={{ height: props.length }}
            >
              <p>
                If you're considering changing your domain or hosting provider,
                or need assistance with transferring your website, our team of
                web experts can help. Website migration can be challenging and
                time-consuming, but we have the expertise to ensure that the
                process is smooth and SEO-friendly, without disrupting the
                organic visibility and rankings of your website.
              </p>
            </div>
            <div className={styles.bottomEye_bottom}>
              <CircleImg AvaterImg={props.Iphoto} className={styles.circle2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomEye;
