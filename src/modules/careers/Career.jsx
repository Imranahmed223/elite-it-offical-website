import React from "react";
import styles from "./Career.module.scss";
import { Navbar, SidebtnC } from "../../components";
import {
  Arrowdown,
  CHeader,
  CIcon1,
  CIcon2,
  CIcon3,
  CIcon4,
  CIcon5,
} from "../../assets";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();

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
      <div className={styles.career_bgImage}>
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
                Cloud computing has become a popular term in recent years, and
                it refers to the delivery of computing resources, including
                servers, databases, and software, over the internet. Instead of
                using on-premises infrastructure, cloud computing allows
                organisations to access computing resources from anywhere in the
                world, providing a scalable, flexible, and cost-effective
                solution to their computing needs.
              </p>
              <p className="primary_para">
                Cloud computing has transformed the way businesses operate,
                enabling them to work more efficiently and collaboratively,
                while also reducing their IT costs. There are three main types
                of cloud computing: public, private, and hybrid. Public cloud
                resources are provided by third-party providers such as AWS,
                Microsoft Azure, and Google Cloud Platform, while private cloud
                is a dedicated cloud infrastructure managed and hosted by an
                organisation. A hybrid cloud combines the benefits of both
                public and private clouds, allowing businesses to leverage the
                advantages of each.
              </p>
              <p className="primary_para">
                The technology behind cloud computing is virtualisation, which
                enables the creation of multiple virtual machines on a single
                physical server, allowing businesses to run multiple
                applications and workloads on a single machine, leading to
                improved resource utilisation and better efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* *********************** Career Support Section2 ************************* */}

        <div className={styles.career_section2}>
          <div className={styles.career_section2_content}>
            <div className={styles.career_section2_content_left}>
              <CareerSupport
                image={CIcon1}
                heading="Flexibility & Scaleability"
                para="First and foremost, cloud computing offers flexibility and
            scalability. This means that businesses can quickly adjust their
            resources based on changing demands. Imagine you run a retail
            business, and your sales spike during the holiday season. With cloud
            computing, you can quickly scale your resources up to meet the
            demand without worrying about investing in new hardware or
            infrastructure."
              />
              <CareerSupport
                image={CIcon3}
                heading="Collaboration & Accessibility"
                para="In addition to cost savings, cloud computing also improves collaboration and accessibility. With cloud-based tools, employees can access data and applications from any device with an internet connection. This means teams can work together seamlessly, regardless of their physical location. Cloud computing also improves accessibility, making it easier for employees to work remotely and stay connected to the office."
              />
              <CareerSupport
                image={CIcon5}
                heading="Disaster Recovery"
                para="Cloud computing provides several advantages when it comes to disaster recovery. One of the main advantages is that cloud providers have multiple redundant data centres in different geographic locations. This redundancy ensures that data and applications are always available, even if one data centre is down.
              Cloud providers also offer backup and recovery services as part of their platform, allowing businesses to easily schedule regular backups of their data and applications to the cloud, and quickly restore them in the event of a disaster. They also offer tools and services for testing disaster recovery plans, which can help businesses ensure that they are prepared for any scenario"
              />
            </div>
            <div className={styles.career_section2_content_right}>
              <CareerSupport
                image={CIcon2}
                heading="Cost Savings"
                para="Another significant benefit of cloud computing is cost savings. Rather than purchasing and maintaining costly hardware and infrastructure, businesses can pay for the resources they need on a pay-as-you-go basis. This allows businesses to stay within their budget and save money in the long run."
              />
              <CareerSupport
                image={CIcon4}
                heading="Security & Reliability"
                para="Moreover, cloud computing provides increased security and reliability. Cloud providers invest heavily in security measures to protect their customers' data, including encryption and multi-factor authentication. Additionally, cloud computing providers offer redundancy and failover mechanisms, ensuring that businesses can continue to operate even in the event of a hardware or infrastructure failure."
              />
            </div>
          </div>
        </div>
        <div className={styles.desc}>
          <p className="primary_para">
            In conclusion, cloud computing has become an indispensable tool for
            modern businesses. Its flexibility, scalability, cost savings,
            improved collaboration and accessibility, and increased security and
            reliability make it an essential solution for driving growth and
            success. If you haven't already, it's time to consider adopting
            cloud computing solutions for your business to stay ahead of the
            curve in today's digital landscape.
          </p>
          <p className="primary_para">
            With cloud computing, businesses can access computing resources from
            anywhere in the world, improving efficiency, collaboration, and
            productivity while reducing IT costs. Whether you're a small startup
            or a large enterprise, cloud computing can help you achieve your
            business goals and stay ahead of the competition.
          </p>
        </div>
      </div>

      <div className={styles.backbtn}>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    </>
  );
};

export default Career;

const CareerSupport = (props) => {
  return (
    <>
      <div className={styles.careerSupport}>
        <div className={styles.careerSupport_top}>
          <img src={props.image} alt="Icons" />
          <h1>{props.heading}</h1>
        </div>
        <div className={styles.careerSupport_bottom}>
          <p className="primary_para">{props.para}</p>
        </div>
      </div>
    </>
  );
};
