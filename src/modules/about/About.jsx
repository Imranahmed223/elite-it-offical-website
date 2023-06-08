import React from "react";
import { CircleImg, Footer, Navbar, SidebtnC } from "../../components";
import styles from "./About.module.scss";
import { Abimg1 } from "../../assets";

const About = () => {
  return (
    <>
      <div className={styles.about_header_container}>
        <SidebtnC />
        <div className={styles.about_header_container_content}>
          <Navbar />
          <div className={styles.about_header_container_content_top}>
            <h3>Get to</h3>
            <h1>Know us</h1>
          </div>
          <div className={styles.about_header_container_content_bottom}>
            <div className={styles.about_header_container_content_bottom_left}>
              <p>
                Our certified Outsourced IT support London experts have years of
                experience delivering enterprise-grade fully managed IT support
                solutions for companies across multiple industries and ranging
                all sizes. We enable you to become more empowered by removing
                the IT complexities within a business. We also provide
                technology infrastructure, efficient solutions and roadmaps
                which enable your business to thrive and become more resilient
                whilst ensuring your day-to-day systems operate smoothly.
              </p>
            </div>
            <div className={styles.about_header_container_content_bottom_right}>
              <CircleImg AvaterImg={Abimg1} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about_middle_container}>
        <div className={styles.about_middle_container_content}>
          <h3>We make IT</h3>
          <div>
            <h1>simple </h1>
            <h1>reliable </h1>
            <h1>affordable </h1>
          </div>
        </div>
      </div>
      <div className={styles.about_middle2_container}>
        <div className={styles.about_middle2_container_content}>
          <p>
            We pride ourselves on our friendly company environment, and we are
            committed to providing the IT support company in London for our
            clients. Our team of experienced IT professionals can help you with
            a wide range of services, from choosing the right software and
            hardware for your needs, to providing support and maintenance
            services that keep your system running smoothly. We can also help
            you with data backup and recovery solutions, so you can rest assured
            that your critical data is always safe and secure. With our friendly
            online support process, we can help you find the best IT support
            Manchester and IT companies in London services for your needs. Our
            on-line support process is available 24/7, so you can get the help
            you need when it’s convenient for you
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
