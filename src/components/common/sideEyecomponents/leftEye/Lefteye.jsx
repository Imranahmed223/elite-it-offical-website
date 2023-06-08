import React from 'react'
import styles from "./Lefteye.module.scss";
import { Iphoto2 } from '../../../../assets';

const Lefteye = (props) => {
  return (
    <>
      <div className={styles.lefteye}>
        <img src={props.Iphoto} alt="Avater" className={styles.sidestore} />
        <div className={styles.lefteye_content}>
          <div className={styles.lefteye_content_left}>
            <h1>{props.title}</h1>
            <p>
              {props.para1}
            </p>
            <p>
                {props.para2}
            </p>
          </div>
          <div className={styles.lefteye_content_right}></div>
        </div>
      </div>
    </>
  );
}

export default Lefteye