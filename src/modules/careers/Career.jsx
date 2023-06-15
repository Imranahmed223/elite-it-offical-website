import React from "react";
import styles from "./Career.module.scss";
import { Navbar, SidebtnC } from "../../components";
import { Arrowdown, CHeader } from "../../assets";

const Career = () => {
  return (
    <>
      <div className={styles.career_container}>
        <SidebtnC />
        <div className={styles.career_container_content}>
          <div className={styles.career_container_content_top}>
            <Navbar />
          </div>
          <div className={styles.career_container_content_middle}>
            <img src={CHeader} alt="Header" />
            <div className={styles.career_container_content_middle_bbox}>
              <span>
                Transforming your business with the power of Cloud Computing
              </span>
            </div>
          </div>
          <div className={styles.career_container_content_bottom}>
            <div className={styles.advntage_box}>
              <p>A DEEP DIVE INTO THE ADVANTAGES</p>
              <img src={Arrowdown} alt="arrow" />
            </div>
            <p className="primary_para">
              As businesses continue to evolve in the digital age, cloud
              computing has emerged as a crucial tool for driving growth and
              success. With its ability to store, manage, and access data and
              applications from remote servers over the internet, cloud
              computing has transformed the way businesses operate. In this
              blog, we'll dive deeper into why cloud computing is essential for
              businesses of all sizes and how it can help them achieve their
              goals.
            </p>
          </div>
        </div>
      </div>
      {/* *********************** Career Section1 ************************* */}
      <div className={styles.career_section1}>
        <div className={styles.career_section1_content}>
          <div className={styles.career_section1_content_left}>
            <h1>what is Cloud Computing</h1>
            <div className={styles.career_section1_content_left_cardbox}>
              <h1>
                What are the advantages of Cloud Computing for a business?
              </h1>
              <ul>
                The major benefits of cloud computing include:
                <li>Flexibility and Scalability</li>
                <li> Cost Savings</li>
                <li>Collaboration and Accessibility</li>
                <li>Security and Reliability </li>
                <li>Disaster Recover</li>
              </ul>
            </div>
          </div>
          <div className={styles.career_section1_content_right}>
            <p className="primary_para">
              Cloud computing has become a popular term in recent years, and it
              refers to the delivery of computing resources, including servers,
              databases, and software, over the internet. Instead of using
              on-premises infrastructure, cloud computing allows organisations
              to access computing resources from anywhere in the world,
              providing a scalable, flexible, and cost-effective solution to
              their computing needs.
            </p>
            <p className="primary_para">
              Cloud computing has transformed the way businesses operate,
              enabling them to work more efficiently and collaboratively, while
              also reducing their IT costs. There are three main types of cloud
              computing: public, private, and hybrid. Public cloud resources are
              provided by third-party providers such as AWS, Microsoft Azure,
              and Google Cloud Platform, while private cloud is a dedicated
              cloud infrastructure managed and hosted by an organisation. A
              hybrid cloud combines the benefits of both public and private
              clouds, allowing businesses to leverage the advantages of each.
            </p>
            <p className="primary_para">
              The technology behind cloud computing is virtualisation, which
              enables the creation of multiple virtual machines on a single
              physical server, allowing businesses to run multiple applications
              and workloads on a single machine, leading to improved resource
              utilisation and better efficiency.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
