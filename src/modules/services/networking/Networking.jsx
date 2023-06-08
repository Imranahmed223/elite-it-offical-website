import React from "react";
import styles from "./Networking.module.scss";
import {
  Footer,
  Navbar,
  RightsideEye,
  SidebtnC,
  SinglebEye,
} from "../../../components";
import { Iphoto21, Iphoto3 } from "../../../assets";

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
            <h1 className="primary_heading">Network Monitoring</h1>
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
      {/* **************** Network Security **************** */}
      <div className={styles.security_container}>
        <div className={styles.security_container_content}>
          <div className={styles.security_container_content_left}>
            <SinglebEye
              length="1023px"
              para="Network security is an essential aspect of overall cyber security that helps to ensure the continued success and security of a business. This is especially important in today's digital landscape, where data breaches and other security incidents can have costly consequences. A well-designed network security solution can help to reduce overhead expenses and protect organisations from losses resulting from data breaches or other security incidents. It allows for the proper authorization of access to systems, applications, and data, which enables business operations and the delivery of products and services to customers. Additionally, a strong network security solution ensures reliable access and performance, as well as protection from cyber threats. "
              Iphoto={Iphoto21}
            />
          </div>
          <div className={styles.security_container_content_right}>
            <h1 className="primary_heading">Network Security</h1>
            <p className="primary_para">
              There are various components that go into a comprehensive network
              security solution. For example, integrating with Identity and
              Access Management (IAM) products can help to strongly identify
              users, and role-based Access Control policies can ensure that
              individuals and devices are authorised to access certain assets.
              Threat control involves preventing bad actors from causing damage
              within an organisation's networks. This is accomplished through
              the use of technologies like firewalls and load balancers, which
              protect the network from DoS/DDoS attacks and other threats.
            </p>
            <p className="primary_para">
              Network security is all about securing the various points of a
              network to prevent any kind of misuse or illegal access. This is
              especially important for private networks within a company, as
              data breaches can lead to problems such as identity theft,
              reputational damage, and stolen assets. To effectively protect
              against these threats, it is important to work with experienced IT
              experts who can implement various security and control layers. At
              Elite IT, we offer a range of solutions using field-proven
              software security solutions and IT hardware from trusted suppliers
              like Cisco, DrayTek, CrowdStrike, and Sophos. This includes
              everything from firewalls to anti-ransomware to next-generation
              endpoint protection. With decades of combined experience in
              delivering IT, data, and network security services and
              consultancy, our team is well-equipped to help keep your business
              secure in today's constantly evolving threat landscape.
            </p>
          </div>
        </div>
      </div>
      {/* **************** Footer Component **************** */}
      <Footer />
    </>
  );
};

export default Networking;
