import React from 'react'
import styles from "./LefttopEye.module.scss";
import { CircleImg } from '../../../..';

const LefttopEye = (props) => {
  return (
    <>
      <div className={styles.LT_compo}>
        <CircleImg AvaterImg={props.Iphoto} className={styles.circle} />
        <div className={styles.LT_compo_bg} style={{height: props.length}} >
         <h1>{props.bghead}</h1>
          <p>{props.bgpara}</p>
        </div>
      </div>
    </>
  );
}

export default LefttopEye