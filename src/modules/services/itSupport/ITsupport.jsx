import React from "react";
import styles from "./ITsupport.module.scss";
import "../../../Sass/_StylesCom.scss";
import {
  BottomEye,
  CircleImg,
  Footer,
  LefttopEye,
  Navbar,
  Righteye,
  RightsideEye,
  SidebtnC,
  SinglebEye,
} from "../../../components";
import {
  Iphoto10,
  Iphoto11,
  Iphoto12,
  Iphoto13,
  Iphoto14,
  Iphoto15,
  Iphoto8,
  Iphoto9,
} from "../../../assets";

const ITsupport = () => {
  return (
    <>
      <div className={styles.itsupport_container}>
        <SidebtnC />
        <div className={styles.itsupport_container_content}>
          <div className={styles.itsupport_container_content_top}>
            <Navbar />
          </div>
          <div className={styles.itsupport_container_content_middle}>
            <h1 className="maintop_heading">IT Support</h1>
          </div>
          <div className={styles.itsupport_container_content_bottom}>
            <div className={styles.itsupport_container_content_bottom_left}>
              <h1 className="primary_heading">IT Consultancy</h1>
              <p className="primary_para">
                Elite IT Team specialise in providing IT consulting services to
                help businesses streamline their processes and align them with
                their goals. Our experts offer advice on a range of topics,
                including cloud strategy, IT budget planning, risk management,
                disaster recovery planning, business continuity planning, IT
                assessments, strategic planning, and communications. We can also
                assist with transitioning to our IT support and accommodate your
                future growth plans. If you want to take the stress out of
                managing in-house IT or have outgrown your current provider, we
                can help. Our team is uniquely positioned to assess your
                business and IT needs and optimise your time and financial
                investments. 
              </p>
            </div>
            <div className={styles.itsupport_container_content_bottom_right}>
              <RightsideEye AvaterImg={Iphoto8} />
            </div>
          </div>
        </div>
      </div>
      {/* ***************** IT Audits **************** */}
      <div className={styles.itaudits}>
        <h1>IT Audits</h1>
        <div className={styles.itaudits_content}>
          <div className={styles.itaudits_content_top}>
            <div className={styles.itaudits_content_top_left}>
              <CircleImg AvaterImg={Iphoto9} />
            </div>
            <div className={styles.itaudits_content_top_right}>
              <div className={styles.itaudits_content_top_right_para}>
                <p>
                  An IT audit is designed to assess the effectiveness of an
                  organisation's security protocols and provide recommendations
                  for improvement. Ensuring that your system is secure is vital
                  to protecting against attacks. Our IT audit services help
                  companies achieve their IT goals and objectives, as well as
                  enhance internal controls and security. Our experts conduct a
                  thorough review of an organisation's current IT practices,
                  systems, software, and hardware to determine how well they
                  support the organisation's mission and vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***************** Outsourced Container **************** */}
      <div className={styles.outsourced_container}>
        <div className={styles.outsourced_container_content}>
          <div className={styles.outsourced_container_content_left}>
            <h1 className="primary_heading">Outsourced IT Support</h1>
            <p className="primary_para">
              Outsourced IT support can be a cost-effective and efficient
              solution for businesses that need reliable and skilled technical
              support but don't have the resources or expertise to manage it
              in-house
            </p>
            <ul className="primary_para">
              By partnering with Elite IT Team, businesses can access a wide
              range of services and benefits, including:
              <li>
                Expertise: Elite IT Team have a team of skilled and experienced
                professionals who are well-versed in the latest technologies and
                best practices. This means that businesses can rely on them to
                provide expert guidance and support, rather than trying to
                manage IT in-house with limited knowledge and resources.
              </li>
              <li>
                Flexibility: Elite IT Team offer a range of services and support
                plans that can be customised to meet the specific needs of your
                business. This allows businesses to choose the level of support
                that is right for them and adjust their plans as their needs
                change over time.
              </li>
              <li>
                Cost savings: Elite IT Team is more cost-effective than
                maintaining an in-house team, as businesses only pay for the
                services they need and don't have to worry about the cost of
                hiring and training staff, purchasing equipment, and other
                expenses.
              </li>
              <li>
                Scalability: Elite IT Team easily scale their services to meet
                the changing needs of a business, whether that means providing
                additional support during peak periods or reducing support
                during slow times. This can help businesses save money and be
                more agile in response to changing market conditions.
              </li>
              <li>
                Security: One of the most important aspects of IT support is
                ensuring the security and integrity of a business's data and
                systems. Elite IT Team offers advanced security measures and
                protocols to protect against threats and data breaches.
              </li>
            </ul>
          </div>
          <div className={styles.outsourced_container_content_right}>
            <LefttopEye
              bgpara="Outsourced IT support can be a valuable resource for businesses that want to ensure that their technology is reliable, secure, and aligned with their business goals. By partnering with Elite IT Team, businesses can access expert guidance and support, save money, and scale their IT support as needed."
              Iphoto={Iphoto10}
              length="581px"
              //   bghead="What is PPC"
            />
          </div>
        </div>
      </div>
      {/* **************** IT Help Desk Support **************** */}
      <Righteye
        title="IT Help Desk Support"
        para=" An IT help desk can provide numerous benefits for your business, including increased efficiency, improved quality, cost savings, and higher employee satisfaction. At Elite IT Team, our 24/7 help desk support is available to resolve any in-house IT issues you may have. Using the latest ticketing software, our friendly experts are ready to assist you around the clock. With our help desk, your company can maintain smooth operations, identify and prevent recurring problems, reduce IT expenses, and boost productivity and revenue by minimising delays due to faults. Investing in an ideal IT help desk can help your business grow and succeed."
        Iphoto={Iphoto11}
      />
      {/* **************** Network Devices Support **************** */}
      <BottomEye
        title="Network Devices Support"
        para=" Network support involves everything that keeps your organisation's computer network running smoothly and efficiently. This includes routine maintenance, troubleshooting, and the development of new features to enhance functionality and productivity. At Elite IT Team, we ensure that your devices are healthy and that your hardware, software, and personal devices are compatible and working optimally. We handle everything from routine tasks to testing and problem-solving, and we can design and implement new features to boost productivity."
        length="59.7rem"
        Iphoto={Iphoto12}
      />
      {/* **************** Remote Monitoring & Management **************** */}
      <div className={styles.remote_container}>
        <div className={styles.remote_container_content}>
          <div className={styles.remote_container_content_left}>
            <SinglebEye
              length="881px"
              para="One of the primary benefits of IT RMM is that it allows Elite IT Team to proactively monitor and manage their clients' IT systems, rather than waiting for problems to occur. This can help to prevent issues from arising in the first place and minimise downtime, which can be costly for businesses."
              para2="It is also cost-effective, and allows us to remotely access and troubleshoot client systems, reducing the need for on-site visits. This can save time and money, as well as improving response times to issues.
"
              Iphoto={Iphoto13}
            />
          </div>
          <div className={styles.remote_container_content_right}>
            <h1 className="primary_heading">
              Remote Monitoring and Management
            </h1>
            <p className="primary_para">
              SEO is important for several reasons. First and foremost, it helps
              businesses attract more qualified traffic to their website. When
              people search for products or services that a business offers,
              they are more likely to make a purchase if they can find the
              business easily. By optimising their website for search engines,
              businesses can increase their chances of being found and attract
              more relevant traffic.
            </p>
            <ul>
              In addition, IT RMM can provide a wide range of benefits for
              businesses, including:
              <li>
                Improved security: IT RMM tools can monitor for security threats
                and allow Elite IT Team to proactively reach out if any issues
                are detected helping to prevent data breaches and other security
                threats.
              </li>
              <li>
                Enhanced visibility: IT RMM tools provide detailed insights into
                the health and performance of a business's IT systems, helping
                to identify and address any problems before they become major
                issues.
              </li>
              <li>
                Greater efficiency: IT RMM can help businesses to streamline
                their IT operations and improve productivity by automating
                routine tasks and identifying opportunities for optimisation.
              </li>
              <li>
                Increased scalability: IT RMM can help businesses to easily
                scale their IT systems as their needs change, ensuring that they
                have the right resources in place to support their growth.
              </li>
            </ul>
            <p className="primary_para">
              IT remote monitoring and management is a powerful tool and can
              help to prevent problems, improve security, increase efficiency,
              and support business growth.
            </p>
          </div>
        </div>
      </div>
      {/* **************** Data Backup **************** */}

      <div className={styles.backup_container}>
        <Righteye
          title="Data Backup"
          para=" At Elite IT Team, we understand the importance of data security and prioritise it above all else. That's why we maintain a presence in fully compliant UK data centres that adhere to the highest international security standards. Our data backup services ensure that your systems are prepared to restore data at any time, regardless of the timing or cause of data loss. This includes everything from accidental deletions and hardware failures to cyber attacks and natural disasters."
          Iphoto={Iphoto14}
        />
        <div className={styles.backup_container_content}>
          <p className="primary_para">
            By keeping your data safe, secure, and readily available, we can
            help you protect your business and minimise the impact of data loss.
            Our team is dedicated to providing reliable and comprehensive data
            backup services to ensure that your data is always protected and
            available when you need it.
          </p>
        </div>
      </div>
      {/* **************** IT Asset Management **************** */}
      <div className={styles.assets_container}>
        <div className={styles.assets_container_content}>
          <h1 className="primary_heading">IT Assets Management</h1>
          <p className="primary_para">
            IT asset management is the process of managing and tracking an
            organisation's IT assets, including hardware, software, and
            licences. IT asset management carried out properly helps businesses
            to optimise their IT investments, reduce costs, and ensure
            compliance with legal and contractual obligations.
          </p>
          <div className={styles.assets_container_content_innercontent}>
            <div className={styles.assets_container_content_innercontent_left}>
              <p className="primary_para">
                One of the key benefits of IT asset management is its ability to
                help businesses keep track of their IT assets and understand
                their value. By accurately inventorying and tracking IT assets,
                businesses can make informed decisions about their use and
                deployment, as well as identify opportunities for optimisation
                to forecasting and budgets including cost savings.
              </p>
              <p className="primary_para">
                In addition, IT asset management can help businesses to improve
                their IT security and protect against potential vulnerabilities.
                By accurately tracking and managing IT assets, businesses can
                identify and address potential security risks, such as unpatched
                software or outdated hardware.
              </p>
            </div>
            <div className={styles.assets_container_content_innercontent_right}>
              <RightsideEye AvaterImg={Iphoto15} />
            </div>
          </div>
          <p className="primary_para">
            Overall, IT asset management is a critical function for businesses
            of all sizes. By accurately tracking and managing their IT assets,
            businesses can optimise their investments, reduce costs, ensure
            compliance, and improve security.
          </p>
        </div>
      </div>
      {/* **************** Footer **************** */}

      <Footer />
    </>
  );
};

export default ITsupport;
