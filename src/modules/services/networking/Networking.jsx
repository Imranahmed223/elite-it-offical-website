import React from "react";
import styles from "./Networking.module.scss";
import { Navbar, RightsideEye, SidebtnC } from "../../../components";
import { Iphoto3 } from "../../../assets";

const Networking = () => {
  return (
    <>
      <div className={styles.networking_container}>
        <SidebtnC />
        <div className={styles.networking_container_content}>
          <div className={styles.networking_container_content_top}>
            <Navbar />
          </div>
          <div className={styles.networking_container_content_middle}>
            <h1 className="maintop_heading">Netwoking & Wifi</h1>
          </div>
          <div className={styles.networking_container_content_bottom}>
            <div className={styles.networking_container_content_bottom_content}>
              <p>
                Wireless networking technology, such as Wi-Fi, has
                revolutionised the way we connect and access the internet. With
                just a wireless router, we can easily connect our devices, such
                as computers and smartphones to the internet. This technology is
                useful for various purposes, including data transmission and
                wireless communication. 
              </p>
              <p>
                At Elite IT, we offer a range of wireless network solutions and
                personalised support with the top internet providers worldwide.
                Our team has extensive experience in delivering solutions for
                multi-site and multi-platform environments, making us the
                perfect partner to design innovative systems or upgrade an
                existing network. We have also set up and configured network
                security solutions, including remote cloud installation and
                configuring firewalls for customers with a global presence. Our
                networking experts can diagnose, troubleshoot, and fix any type
                of network problems onsite or remotely, working to create a
                better wireless network environment and providing data and
                security control information for your company. A reliable
                wireless network provides security, access control, and wireless
                device control capabilities for its users.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* **************** Monitoring Container **************** */}
      <div className={styles.monitoring_container}>
        <div className={styles.monitoring_container_content}>
          <div className={styles.monitoring_container_content_left}>
            <h1 className="primary_heading">Network onitoring</h1>
            <p className="primary_para">
              A network monitoring system is a tool that helps ensure the smooth
              operation of an organisation's IT and network infrastructure. It
              includes features such as high availability components to
              automatically fix hardware or software failures, a visual
              dashboard for an at-a-glance status of monitored components, and
              notifications to alert administrators of any issues. These tools
              can also initiate failover to temporarily remove problematic
              devices or circuits from service until they can be fixed. Network
              monitoring helps reduce downtime, improve security, and enhance
              customer experience, while also providing root cause analysis
              tools and clear visualisations and reports. Network monitoring at
              Elite IT Team can provide real-time information to help
              administrators optimise network efficiency and identify any
              deficiencies.
            </p>
          </div>
          <div className={styles.monitoring_container_content_right}>
            <RightsideEye AvaterImg={Iphoto3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Networking;
