import React from "react";
import styles from "./Cyber.module.scss";
import {
  Footer,
  Navbar,
  Righteye,
  RightsideEye,
  SidebtnC,
  SinglebEye,
} from "../../../components";
import {
  Iphoto25,
  Iphoto26,
  Iphoto27,
  Iphoto28,
  Iphoto29,
  Iphoto3,
  Iphoto30,
  Iphoto5,
} from "../../../assets";
const Cyber = () => {
  return (
    <>
      <div className={styles.cyber_section}>
        <SidebtnC />
        <div className={styles.cyber_section_content}>
          <div className={styles.cyber_section_content_top}>
            <Navbar />
          </div>
          <div className={styles.cyber_section_content_middle}>
            <h1 className="maintop_heading">Cyber Security</h1>
          </div>
          <div className={styles.cyber_section_content_bottom}>
            {/* **************** Cyber Security **************** */}
            <div className={styles.cybersecurity_container}>
              <Righteye
                title="Cyber Security"
                para=" Cybersecurity is an important concern for businesses of all sizes, as well as for individuals. Hackers and other malicious actors can use a variety of methods to try to gain access to sensitive information or disrupt operations, and it is important to have effective measures in place to prevent or mitigate these threats."
                Iphoto={Iphoto27}
              />
              <div className={styles.cybersecurity_container_content}>
                <div className={styles.cybersecurity_container_content_left}>
                  <ul className="primary_para">
                    Some common cybersecurity measures include:
                    <li>
                      Firewalls: A firewall is a network security system that
                      monitors and controls incoming and outgoing network
                      traffic based on predetermined security rules. Firewalls
                      can be hardware-based, software-based, or a combination of
                      both.
                    </li>
                    <li>
                      Anti-virus/anti-malware software: This type of software is
                      designed to identify and eliminate viruses, malware, and
                      other malicious software from computers and other devices.
                      It is important to keep this software up to date to ensure
                      that it can effectively protect against the latest
                      threats.
                    </li>
                    <li>
                      Encryption: Encrypting data can help to protect it from
                      unauthorised access. This is especially important when
                      transmitting sensitive information over the internet or
                      storing it on devices that could potentially be lost or
                      stolen
                    </li>
                    <li>
                      Two-factor authentication: This security measure requires
                      users to provide two different authentication factors in
                      order to access an account or system. This can include
                      something the user knows (such as a password), something
                      the user has (such as a security token), or something the
                      user has (such as a fingerprint).
                    </li>
                  </ul>
                </div>
                <div className={styles.cybersecurity_container_content_right}>
                  <p className="primary_para">
                    It is also important to have regular security testing and
                    assessments to identify and address any vulnerabilities in
                    your systems. This can include penetration testing, which
                    simulates an attack on your systems to identify any
                    weaknesses that could be exploited by an attacker. Overall,
                    having a comprehensive cybersecurity strategy in place can
                    help to protect your business and your customers from
                    potential threats and ensure that your operations run
                    smoothly.
                  </p>
                  <p className="primary_para">
                    Elite IT Team can ensure that we recommend the most
                    appropriate security measures complete with regular testing
                    to ensure compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* **************** PC Protection Container **************** */}
      <div className={styles.pc_container}>
        <div className={styles.pc_container_content}>
          <div className={styles.pc_container_content_left}>
            <h1 className="primary_heading">PC Protection</h1>
            <p className="primary_para">
              We offer cybersecurity services to help protect servers, PCs, and
              mobile devices from threats. Our services can be customised to
              meet the specific needs, budget, and resources of your company. If
              your company operates in a high-risk industry, such as oil and
              gas, financial services, defence, or telecoms, we can also
              recommend and implement the most appropriate security measures and
              conduct regular testing to ensure compliance.
            </p>
            <p className="primary_para">
              In addition to protecting servers and PCs, we also offer mobile
              device management solutions to protect the data on your mobile
              devices and prevent them from being lost or stolen. We have
              specialised solutions for iOS devices as well as for a mix of
              mobile devices. We can help you protect employee devices and
              prevent the unauthorised use of sensitive data. We also offer
              email filtering to remove threats and improve the reliability of
              your emails. Email filtering can be set at various levels of
              security and can include trigger words to block spam, as well as
              other configuration options to enhance cybersecurity.
            </p>
          </div>
          <div className={styles.pc_container_content_right}>
            <RightsideEye AvaterImg={Iphoto28} />
          </div>
        </div>
      </div>
      {/* **************** Penetration Testing Container **************** */}
      <div className={styles.penetration_container}>
        <div className={styles.penetration_container_content}>
          <div className={styles.penetration_container_content_left}>
            <SinglebEye
              length="649px"
              para="Penetration testing, also known as pen testing, involves simulating a cyber attack on your own servers, systems, or networks to identify any vulnerabilities or weaknesses that could be exploited by a malicious actor. This type of testing is an important aspect of cybersecurity planning, as it allows you to determine the level of security you have in place and identify any areas that need improvement . "
              Iphoto={Iphoto29}
            />
          </div>
          <div className={styles.penetration_container_content_right}>
            <h1 className="primary_heading">Penetration Testing</h1>
            <p className="primary_para">
              We can conduct pen testing using specialised tools and techniques
              to identify and exploit any vulnerabilities in your computer
              networks, systems, applications, and websites. Wel work to address
              any weaknesses they find and implement effective security measures
              to mitigate the risk of a successful attack. We can tailor our
              testing and security recommendations to your specific needs, and
              we will ensure that we follow the latest standards and conduct
              regular testing to ensure compliance. By conducting regular pen
              testing, you can ensure that your systems are as secure as
              possible and that you are prepared to defend against potential
              threats.
            </p>
          </div>
        </div>
      </div>
      {/* **************** Email filtering Container **************** */}
      <div className={styles.filter}>
        <div className={styles.filtering_container}>
          <div className={styles.filtering_container_content}>
            <h1 className="primary_heading"> Email filter</h1>
            <p className="primary_para">
              Email filtering is a process that involves examining incoming
              emails for indicators of spam or phishing content and redirecting
              those emails to a separate folder. This can help to protect your
              organisation from malicious emails that could potentially harm
              your systems or steal sensitive information.
            </p>
          </div>
        </div>
        <Righteye
          // title="Cyber Security"
          para="Elite IT offers email filtering solutions to improve the relevance and reliability of your emails and protect against threats. These solutions can be configured at different levels of security and can include trigger words to block adult content and common spam terms, as well as other configuration options to enhance cybersecurity. Our email filtering can be deployed as a cloud service, which makes it lightweight and easy to monitor and manage remotely. By implementing email filtering, you can help to reduce the risk of falling victim to spam, phishing, and other types of malicious email"
          Iphoto={Iphoto30}
        />
      </div>

      {/* **************** Mobile Device Management **************** */}
      <div className={styles.mobile_device}>
        <div className={styles.mobile_device_content}>
          <div className={styles.mobile_device_content_left}>
            <img src={Iphoto25} alt="Avater" />
          </div>
          <div className={styles.mobile_device_content_right}>
            <h1 className="primary_heading">
              Mobile Device Management Solutions
            </h1>
            <p className="primary_para">
              In addition to protecting servers and PCs, we also offer mobile
              device management (MDM) solutions to secure your mobile devices
              and the data they contain. These solutions can help to prevent
              mobile devices from being lost or stolen and ensure that they are
              protected against various threats. We have specialised solutions
              for iOS devices, as well as options for managing a mix of mobile
              devices, including JAMF and Microsoft Intune. Our MDM solutions
              can provide you with the security and protection you need to keep
              your mobile devices and the data they contain safe.
            </p>
          </div>
        </div>
      </div>
      {/* **************** Security Audit **************** */}
      <div className={styles.securityAudit}>
        <div className={styles.securityAudit_content}>
          <div className={styles.securityAudit_content_left}>
            <h1 className="primary_heading">Security Audit</h1>
            <p className="primary_para">
              An IT security audit is a comprehensive evaluation of an
              organisation's IT infrastructure and security posture. By
              conducting an IT security audit, organisations can identify and
              assess the risks present in their IT networks, connected devices,
              and applications. This can help them achieve compliance with
              relevant regulations and standards, such as the UK/EU General Data
              Protection Regulation (GDPR) and frameworks such as ISO
              27001/27002/27005, Cyber Essentials, COBIT, NIST, and HIPAA.
            </p>
            <ul className="primary_para">
              During an IT security audit, a variety of areas are examined in
              order to identify significant risks, weaknesses, and threats
              within the organisation. These areas include:
              <li>Strategy and governance</li>
              <li>Data protection</li>
              <li>Risk management</li>
              <li>Education and knowledge</li>
              <li>Standards for contracts, laws, and regulations</li>
              <li>Technical measures for IT security</li>
              <li> Controls for physical security</li>
              <li>
                {" "}
                Guidelines and management structure for information security
              </li>
              <li> Incident management and business continuity</li>
              <li>External management </li>
              <li>Reliable development</li>
            </ul>
          </div>
          <div className={styles.securityAudit_content_right}>
            <SinglebEye
              length="559px"
              para="By thoroughly examining these areas, an IT security audit can help organisations identify and address any vulnerabilities or weaknesses in their systems and ensure that they have effective measures in place to protect against potential threats."
              Iphoto={Iphoto3}
            />
          </div>
        </div>
      </div>
      {/* **************** Disaster Recovery **************** */}
      <div className={styles.disaster_container}>
        <div className={styles.disaster_container_content}>
          <div className={styles.disaster_container_content_left}>
            <SinglebEye
              length="559px"
              para="Disaster recovery involves replicating data and computer processing at an offsite location that is unaffected by the incident, in order to be able to restore lost data and continue operations in the event of a disaster. This can include situations such as natural disasters, equipment failures, or cyber attacks that cause servers to go down."
              Iphoto={Iphoto5}
            />
          </div>
          <div className={styles.disaster_container_content_right}>
            <h1 className="primary_heading">Disaster Recovery </h1>
            <p className="primary_para">
              Elite IT Team has experience in disaster recovery for various
              industries and can help businesses restore lost data from a backup
              location in the event of a disaster. We also offer cloud services
              and server and desktop virtualisation, which can be crucial
              components of a disaster recovery strategy. By implementing these
              measures, businesses can be better prepared to handle disruptions
              and ensure that they are able to continue operating even in the
              face of unexpected challenges.
            </p>
          </div>
        </div>
      </div>
      {/* **************** Footer **************** */}
      <Footer />
    </>
  );
};

export default Cyber;
