import React from "react";
import styles from "./Hprocurement.module.scss";
import {
  Footer,
  Navbar,
  Righteye,
  RightsideEye,
  SidebtnC,
  SinglebEye,
} from "../../../components";
import { Iphoto16, Iphoto17, Iphoto18 } from "../../../assets";

const Hprocurement = () => {
  return (
    <>
      <div className={styles.Hprocurement_container}>
        <SidebtnC />
        <div className={styles.Hprocurement_container_content}>
          <div className={styles.Hprocurement_container_content_top}>
            <Navbar />
          </div>
          <div className={styles.Hprocurement_container_content_middle}>
            <h1 className="maintop_heading">
              Hardware and Software procurement{" "}
            </h1>
          </div>
          {/* **************** Sourcing Equipment **************** */}
          <div className={styles.Hprocurement_container_content_bottom}>
            <Righteye
              title="Sourcing Equipment"
              para=" Sourcing new IT procurement can be confusing and time-consuming, and there are risks such as receiving the wrong product, ending up with grey/after-market equipment, late delivery, or lack of manufacturer or third-party support. Elite IT Team is here to help you make the right technology choices for your business and ensure that your IT hardware and infrastructure investment is suitable and provides value for money as well as getting items across to your employees wherever they may be located in the world at record speed!"
              Iphoto={Iphoto16}
            />
            <div
              className={styles.Hprocurement_container_content_bottom_content}
            >
              <p className="primary_para">
                Our staff have the experience to provide tailored advice and
                work with industry-leading manufacturers to offer custom IT
                solutions. We also have a team that can assist organisations
                with the purchasing of various equipment, including laptops and
                desktop PCs, server equipment, VoIP hardware, network equipment,
                mobile phones and devices, and software with appropriate
                licensing. We partner with a wide range of suppliers and vendors
                to obtain special discounts and offer the best options for your
                budget and requirements, and we’re often able to source hardware
                that has a limited quantity quicker than others too giving you
                peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* **************** Hardware Procurement **************** */}
      <div className={styles.hardware_container}>
        <div className={styles.hardware_container_content}>
          <div className={styles.hardware_container_content_left}>
            <h1 className="primary_heading">
              Large Scale IT Hardware Procurement{" "}
            </h1>
            <p className="primary_para">
              If you're planning to renew a significant amount of IT hardware or
              outfit a new office, Elite IT Team is here to offer a
              complimentary IT consultancy service that will benefit you and
              your business. We are committed to promoting authentic products
              and have strong relationships with our vendors, which allows us to
              design, recommend, and implement the most reliable IT
              infrastructure solutions to support your business goals. 
            </p>
            <p className="primary_para">
              Our team of experts will assess your business model and growth
              plans, review your full requirements, and recommend the best
              hardware for your needs. We often purchase in bulk from our
              suppliers, which enables us to secure significant discounts for
              our customers. Whether you're looking to upgrade your current IT
              infrastructure or build a new one from scratch, Elite IT Team is
              here to help you make informed and cost-effective decisions.
            </p>
          </div>
          <div className={styles.hardware_container_content_right}>
            <RightsideEye AvaterImg={Iphoto17} />
          </div>
        </div>
      </div>
      {/* **************** Solutions Container **************** */}
      <div className={styles.solution_container}>
        <div className={styles.solution_container_content}>
          <div className={styles.solution_container_content_left}>
            <SinglebEye
              length="649px"
              para="If you are looking for an IT provider who can also offer IT support in the UK and US for your business, please don't hesitate to give us a call at +44333 3660173 or email us at info@eliteitteam.com. We would be happy to discuss your needs and how we can support your business with reliable and cost-effective IT solutions."
              Iphoto={Iphoto18}
            />
          </div>
          <div className={styles.solution_container_content_right}>
            <h1 className="primary_heading">Ready-to-Go Solutions</h1>
            <p className="primary_para">
              As part of our IT Support procurement service, Elite IT can also
              set up new machines for your users with all the necessary software
              and configuration pre-installed, taking the hassle out of new
              hardware setups. This can include everything from running through
              basic setup procedures to creating advanced user profiles. We are
              dedicated to ensuring that our customers have peace of mind and
              achieve success through their use of technology and the IT
              decisions they make. In addition to setting up new hardware, we
              can also fully manage your global IT infrastructure to ensure
              compliance with up-to-date software licensing and assist you with
              budgeting accurately for future expenditures based on a clear IT
              asset management plan. Our team has relevant expertise in this
              field and provides innovative solutions for your business based on
              your computing needs.
            </p>
          </div>
        </div>
      </div>
      {/* **************** Footer Component **************** */}
      <Footer />
    </>
  );
};

export default Hprocurement;
