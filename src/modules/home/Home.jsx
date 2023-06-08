import React from "react";
import {
  MCardbox,
  MCardbox2,
  MCardbox3,
  Navbar,
  Sliderimgs,
} from "../../components";
import styles from "./Home.module.scss";
import { MI1, MI2, MI3, MI4, MI5, arrow1, simg1, simg2 } from "../../assets";

const Home = (props) => {
  return (
    <>
      <div className={styles.header_container}>
        <button className={styles.sidebtn}>CONTACT US</button>
        <div className={styles.header_container_content}>
          <Navbar />
          <div className={styles.header_container_content_middle}>
            <h3>Telling your story with</h3>
            <h1>meaningful designs.</h1>

            <div className={styles.header_container_content_middle_btn}>
              <button>
                View our work
                <img src={arrow1} alt="Icon" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.header_container_bottom}>
          <Percent title="89%" desc="Same-day Resolution" />
          <Percent title="99%" desc="Customer Satisfaction" />
          <Percent title="96%" desc="SLAS met" />
        </div>
      </div>
      {/* #################### Main container ############################ */}
      <div className={styles.homeMain_container}>
        {/* #################### About container ############################ */}
        <div className={styles.about_container}>
          <img src={simg1} alt="avater" />
          <div className={styles.about_container_content}>
            <div className={styles.about_container_content_left}>
              <span>ABOUT US</span>
              <h3>A fully managed</h3>
              <h1>IT service provider</h1>
              <p>
                We help businesses and IT teams thrive using technology and
                provide a wide range of IT services. We also provide a
                completely free IT audit to assess how we can help improve your
                IT infrastructure and provide useful recommendations to put in
                place now and in the future.
              </p>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
        {/* #################### Service container ############################ */}
        <div className={styles.services_container}>
          <div className={styles.services_container_content}>
            <div className={styles.services_container_content_top}>
              <span>our services</span>
              <h2>Our team is dedicated to ensuring</h2>
              <h1>your satisfaction</h1>
            </div>
            <div className={styles.services_container_content_middle}>
              {/* <Sliderimgs /> */}
              <img src={simg2} alt="avator" />
              <img src={simg2} alt="avator" />
              <img src={simg2} alt="avator" />
              <img src={simg2} alt="avator" />
              <img src={simg2} alt="avator" />
              <img src={simg2} alt="avator" />
            </div>
            <div className={styles.services_container_content_bottom}>
              <div className={styles.services_container_content_bottom_right}>
                <h1>OUR WORK</h1>
                <p>
                  We are passionate about helping businesses and IT teams not
                  just advance, but thrive in this modern digital age by using
                  the latest technology. Our team of experts provides an
                  extensive range of IT services, tailored to the specific needs
                  of your business. That’s not all, we also offer a completely
                  free IT audit to access your current IT infrastructure and
                  identify any areas that need improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* #################### Mission Container ############################ */}
      <div className={styles.mission_container}>
        <div className={styles.mission_container_content}>
          <div className={styles.mission_container_content_left}>
            <div className={styles.mission_container_content_left_b1}>
              <h1>See our mission</h1>
              <span>in action</span>
              <div className={styles.imglayout}>
                <h1>THE DIET APP</h1>
              </div>
            </div>
            <MCardbox2 imgM={MI5} imgTitle="COOK IN THE NOOK WEBSITE" />
            <button>View More</button>
          </div>
          <div className={styles.mission_container_content_right}>
            {/* ###### Create Mission Cardboxs in the components folder ######### */}
            <MCardbox />
            <MCardbox2 imgM={MI3} imgTitle="VIVAWELL WEBSITE" />
            <MCardbox3 />
          </div>
        </div>
      </div>
      {/* #################### Testimonials feedback Container ############################ */}
      <div className={styles.tsf_container}>
        <h1>Tesimonials</h1>
        <div className={styles.tsf_container_top}>
          <h3>Feedback that</h3>
          <h1>Speaks volumes</h1>
        </div>
        <div className={styles.tsf_container_bottom}></div>
      </div>
    </>
  );
};

export default Home;

const Percent = ({ title, desc }) => {
  return (
    <div className={styles.percent_container}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};
