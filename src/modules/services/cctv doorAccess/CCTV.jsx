import React from "react";
import styles from "./CCTV.module.scss";
import { CircleImg, Footer, Navbar, SidebtnC } from "../../../components";
import { Iphoto40, Iphoto41 } from "../../../assets";

const CCTV = () => {
  return (
    <>
      <div className={styles.cctv_container}>
        <SidebtnC />
        <div className={styles.cctv_container_content}>
          <div className={styles.cctv_container_content_top}>
            <Navbar />
          </div>
          <div className={styles.cctv_container_content_middle}>
            <h1 className="maintop_heading">CCTV & Door Access</h1>
          </div>
          <div className={styles.cctv_container_content_bottom}>
            <div className={styles.cctv_container_content_bottom_content}>
              <p>
                At Elite IT, our camera solutions are not only proficient in
                monitoring your CCTV, but also enable you to keep track of the
                footage through your PC, tablet or phone. From door access
                comprising fobs and key cards to new security connections,
                upgrades and regular maintenance, we provide a broad series of
                security solutions tailored to your particular requirements
                helping you feel safer. 
              </p>
              <p>
                In today's world, having a reliable security system in place is
                essential for companies of all sizes. Closed-circuit television
                (CCTV) and door access systems have become increasingly popular
                as a means of monitoring and controlling access to facilities.
                These systems not only provide an added layer of protection for
                a company's assets, facilities and people, but also provide
                valuable tools for deterring and detecting criminal activity.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* **************** CCTV System **************** */}
      <div className={styles.cctv_system}>
        <div className={styles.cctv_system_content}>
          <div className={styles.cctv_system_content_left}>
            <h1 className="primary_heading">CCTV Systems</h1>
            <p className="primary_para">
              CCTV systems are particularly useful in this regard, as they
              consist of cameras that are linked to a central monitoring
              station, allowing security personnel to monitor the premises in
              real-time. This can be done remotely or on-site, and the footage
              can be used to detect and deter crimes or to gather evidence in
              case of an incident. With the rise of digital crimes, it has
              become increasingly important for companies to have a system in
              place that can protect them from such threats.
            </p>
            <p className="primary_para">
              Our team of knowledgeable and experienced engineers can help you
              determine the best solution for your company's specific needs. We
              understand that every business is unique and we are committed to
              tailoring our systems to meet the specific requirements of each
              customer. Whether you're looking to install a new CCTV system or
              upgrade an existing one, we have the expertise and experience to
              help you achieve your security goals.
            </p>
          </div>
          <div className={styles.cctv_system_content_right}>
            <div className={styles.cctv_system_content_right_circlebox}>
              <CircleImg AvaterImg={Iphoto40} />
            </div>
            <div className={styles.cctv_system_content_right_bgbox}></div>
          </div>
        </div>
      </div>
      {/* **************** Door Access Control System **************** */}
      <div className={styles.door_container}>
        <div className={styles.door_container_content}>
          <div className={styles.door_container_content_left}>
            <div className={styles.door_container_content_left_bgbox}>
              <ul>
                Here are a few key reasons why you should consider these
                security systems:
                <li>
                  Crime deterrence: CCTV cameras can deter crimes by providing a
                  visible presence, and door access systems can prevent
                  unauthorised individuals from entering a facility.
                </li>
                <li>
                  Incident investigation: CCTV footage can be used to identify
                  suspects in case of a crime, making it an important tool for
                  incident investigations.
                </li>
                <li>
                  Employee and visitor safety: CCTV and door access systems
                  ensure the safety of employees and visitors by controlling
                  access to the facility and monitoring activity within it.
                </li>
                <li>
                  Compliance and liability: CCTV and door access systems can
                  assist companies in meeting regulatory requirements for
                  liability and security.
                </li>
                <li>
                  Remote monitoring and management: Many CCTV and door access
                  systems can be controlled and managed remotely through the
                  internet, making it easier for businesses to keep an eye on
                  their facilities.
                </li>
                <li>
                  Data security: Door access systems also play a critical role
                  in protecting a company's data by only permitting authorised
                  individuals to access certain areas or data.
                </li>
              </ul>
            </div>
            <div className={styles.door_container_content_left_circlebox}>
              <CircleImg AvaterImg={Iphoto41} />
            </div>
          </div>
          <div className={styles.door_container_content_right}>
            <h1 className="primary_heading">Door Access Control System</h1>
            <p className="primary_para">
              Door access systems play a critical role in ensuring the security
              of a facility by controlling who is allowed to enter and when.
              These systems use a variety of methods, such as card readers,
              biometric scanners, or keypads to confirm the identity of
              individuals trying to enter the premises. This not only makes it
              more convenient for a company to manage access to their facility,
              but also provides an added layer of security.
            </p>
            <p className="primary_para">
              Our engineers are trained to the highest standard as approved
              suppliers and installers of Hikvision and Texecom systems  since
              we only use the finest IT Support to offer you the highest level
              of security possible. We are capable of providing you a dedicated
              and reliable service whether you require a small security system
              or a large complex multi-site cctv facility. We’re here to
              alleviate the hassle and help make your businesses more secure.
            </p>
            <p className="primary_para">
              With door access systems, companies can track the movement of
              individuals within their facility. This can be useful for
              monitoring the flow of people, and for keeping records of who
              entered and exited the building, and when. This also allows for
              the company to have a better understanding of their security
              vulnerabilities and to make necessary adjustments.
            </p>
            <p className="primary_para">
              Additionally, these systems can integrate with other security
              measures, such as CCTV systems, to provide an even more
              comprehensive security strategy. Our team of experts can help you
              choose the best door access system for your facility, and tailor
              it to meet your specific needs. We understand the importance of
              security and we are committed to providing solutions that will
              help keep your facility and people safe.
            </p>
            <p className="primary_para">
              The need for security in this technology-driven world has never
              been greater. CCTV and door access systems have become essential
              tools for businesses and organisations looking to protect their
              assets, facilities and people
            </p>
            <p className="primary_para">
              At Elite IT, we understand the importance of security and
              specialise in providing solutions to meet these needs. We offer a
              wide range of services, including CCTV cameras, door access
              control systems, digital video recorders, and biometric readers.
              Our team of experts can assist you in the design, installation,
              and maintenance of these security systems to ensure that your
              facility is protected and secure.
            </p>
          </div>
        </div>
      </div>
      {/* **************** Footer Component **************** */}
      <Footer />
    </>
  );
};

export default CCTV;
