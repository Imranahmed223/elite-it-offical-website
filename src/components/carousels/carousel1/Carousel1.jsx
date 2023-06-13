import React from "react";
import Slider from "react-slick";
import styles from "./Carousel1.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselImg1 } from "../../../assets";

const Carousel1 = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1.5,
    speed: 500,
  };
  return (
    <>
      <div>
        {/* <h2>Center Mode</h2> */}
        <Slider {...settings}>
          {/* ****************** Card1 ************************ */}
          <div className={styles.item_card}>
            <div className={styles.item_card_top}>
              <img src={CarouselImg1} alt="avater" />
            </div>
            <div className={styles.item_card_bottom}>
              <span>
                Very happy to work with elite_it_team_, Very Very talented and
                delivers beyond what you expect, and Very sharp frontend
                developer. Thank you so much and till the next project! :)
              </span>
              <h3>-Kristin, United States</h3>
            </div>
          </div>
          {/* </div> */}

          {/* ****************** Card2 ************************ */}
          <div className={styles.item_card}>
            <div className={styles.item_card_top}>
              <img src={CarouselImg1} alt="avater" />
            </div>
            <div className={styles.item_card_bottom}>
              <span>
                An extremely professional service, from start to end, very
                helpful and very patient, I will most certainly use this service
                again..
              </span>
              <h3>-CanaCott, United Kingdom</h3>
            </div>
          </div>
          {/* ****************** Card3 ************************ */}
          <div className={styles.item_card}>
            <div className={styles.item_card_top}>
              <img src={CarouselImg1} alt="avater" />
            </div>
            <div className={styles.item_card_bottom}>
              <span>
                What sets Elite IT Team apart is their exceptional customer
                service. They were always available to answer our questions and
                resolve any issues promptly. I highly recommend Elite IT Team to
                any business looking for reliable and effective IT services!
              </span>
              <h3>-CanaCott, United Kingdom</h3>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel1;
