import React from "react";
import Slider from "react-slick";
import styles from "./Carousel2.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselImg2 } from "../../../assets";

const Carousel2 = () => {
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 1.5,
  //   speed: 500,
  //   responsive: [
      
  //     {
  //       breakpoint: 900,
  //       settings: {
  //         centerPadding: "70px",
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.6,
    slidesToScroll: 1,
    slickNext: true,
    autoplay: true,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        {/* <h2>Center Mode</h2> */}
        <Slider {...settings}>
          {/* ****************** Card1 ************************ */}
          <div className={styles.item_card2}>
            <div className={styles.item_card2_content}>
              <div className={styles.item_card2_content_top}>
                <img src={CarouselImg2} alt="avater" />
              </div>
              <div className={styles.item_card2_content_bottom}>
                <span>How to master smart remote working</span>
                <h3>21st April, 2023</h3>
              </div>
            </div>
          </div>
          {/* ****************** Card2 ************************ */}
          <div className={styles.item_card2}>
            <div className={styles.item_card2_content}>
              <div className={styles.item_card2_content_top}>
                <img src={CarouselImg2} alt="avater" />
              </div>
              <div className={styles.item_card2_content_bottom}>
                <span>
                  Transforming your business with the power of cloud computing
                </span>
                <h3>21st April, 2023</h3>
              </div>
            </div>
          </div>
          {/* ****************** Card3 ************************ */}
          <div className={styles.item_card2}>
            <div className={styles.item_card2_content}>
              <div className={styles.item_card2_content_top}>
                <img src={CarouselImg2} alt="avater" />
              </div>
              <div className={styles.item_card2_content_bottom}>
                <span>How to utilize web 3.0</span>
                <h3>21st April, 2023</h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel2;
