import React from "react";
import styles from "./Hosted.module.scss";
import {
  CircleImg,
  Footer,
  Navbar,
  Righteye,
  RightsideEye,
  SidebtnC,
} from "../../../components";
import {
  Iphoto22,
  Iphoto23,
  Iphoto24,
  Iphoto25,
  Iphoto26,
} from "../../../assets";

const Hosted = () => {
  return (
    <>
      <div className={styles.hosted_container}>
        <SidebtnC />
        <div className={styles.hosted_container_content}>
          <div className={styles.hosted_container_content_top}>
            <Navbar />
          </div>
          <div className={styles.hosted_container_content_middle}>
            <h1 className="maintop_heading">
              Hosted Services & Virtualisation
            </h1>
          </div>
          <div className={styles.hosted_container_content_bottom}>
            <div className={styles.hosted_container_content_bottom_content}>
              <p className="primary_para">
                At Elite IT Team, we offer a highly reliable and cost-effective
                cloud infrastructure solution for hosting services. We also have
                experts on our team who are skilled in supporting organisations
                with internal infrastructure, no matter what technology they
                use. Our dedicated infrastructure team is experienced in working
                with Microsoft Azure, Amazon Web Services (AWS), and Google
                Cloud Platform (GCP) services.
              </p>
              <p className="primary_para">
                We use virtualisation to consolidate more workloads onto fewer
                servers and increase capacity, as well as centralise storage on
                a separate dedicated server or SAN to improve data availability
                and support business continuity planning. Our team also uses
                software to pool the computing resources of several dedicated
                servers and allocate them among virtual machines (VMs).
              </p>
              <p className="primary_para">
                Whether you're looking to switch to cloud-based infrastructure
                or optimise your existing system, our team has the expertise to
                help your organisation succeed. Contact us to learn more about
                our cloud infrastructure solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* **************** Cloud Solutions **************** */}
      <div className={styles.cloud_container}>
        <div className={styles.cloud_container_content}>
          <div className={styles.cloud_container_content_left}>
            <h1 className="primary_heading">Cloud Solutions</h1>
            <p className="primary_para">
              At Elite IT Team, we understand that cloud solutions can provide
              organisations with the ability to easily scale up or down their IT
              systems without requiring a large upfront investment in
              infrastructure. This can also help to eliminate the challenges and
              costs associated with maintaining in-house IT infrastructure.
            </p>
            <p className="primary_para">
              To ensure the safety of your data, we maintain a strong presence
              in UK data centres that comply with two international security
              standards. This allows us to offer reliable and industry-leading
              cloud computing solutions at competitive prices. Our cloud
              infrastructure provides organisations with a cost-effective
              solution for hosting services, but we also have experts on our
              team who can support organisations with internal infrastructure.
            </p>
            <p className="primary_para">
              If you're interested in exploring the benefits of cloud solutions
              for your organisation, contact us to learn more about how we can
              help.
            </p>
          </div>
          <div className={styles.cloud_container_content_right}>
            <RightsideEye AvaterImg={Iphoto22} />
          </div>
        </div>
      </div>
      {/* ***************** Application Virtualisation **************** */}
      <div className={styles.virtualisation}>
        <h1 className="primary_heading">Application Virtualisation</h1>
        <div className={styles.virtualisation_content}>
          <div className={styles.virtualisation_content_top}>
            <div className={styles.virtualisation_content_top_left}>
              <CircleImg AvaterImg={Iphoto23} />
            </div>
            <div className={styles.virtualisation_content_top_right}>
              <div className={styles.virtualisation_content_top_right_para}>
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
          <div className={styles.virtualisation_content_bottom}>
            {/* <div className={styles.virtualisation_content_bottom_left}></div> */}
            <div className={styles.virtualisation_content_bottom_right}>
              <p className="primary_para">
                Our sandbox environment allows you to test applications without
                installing them on the local operating system, reducing
                complexity and minimising the risk of data breaches. With our
                expertise in digital workspace solutions, we can help your
                organisation stay competitive in today's tech-driven world.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* **************** Destop Virtualisation **************** */}
      <div className={styles.desktop_container}>
        <div className={styles.desktop_container_content}>
          <div className={styles.desktop_container_content_left}>
            <h1 className="primary_heading">Destop Virtualisation</h1>
            <p className="primary_para">
              Desktop virtualization allows companies to access their
              applications and data from any device and location. It also
              increases security by centralising data and minimising the risk of
              data breaches on endpoint devices. Our team of experts can set up
              and manage a virtual desktop infrastructure for your business,
              providing a flexible and cost-effective solution for accessing
              your office from anywhere. With desktop virtualisation, you can
              share documents and applications with your team, regardless of
              location or device. Our DaaS solution is managed through a
              hypervisor and enables centralised management of the entire
              desktop environment. Upgrade to a modern way of working with our
              desktop virtualisation services.
            </p>
          </div>
          <div className={styles.desktop_container_content_right}>
            <RightsideEye AvaterImg={Iphoto24} />
          </div>
        </div>
      </div>
      {/* **************** Hardware Virtualisation **************** */}
      <div className={styles.hard_virtual}>
        <div className={styles.hard_virtual_content}>
          <div className={styles.hard_virtual_content_left}>
            <img src={Iphoto25} alt="Avater" />
          </div>
          <div className={styles.hard_virtual_content_right}>
            <h1 className="primary_heading">Hardware Virtualisation</h1>
            <p className="primary_para">
              Using our hardware virtualisation solutions, companies can greatly
              benefit from reduced costs by reducing the need for physical
              hardware and increasing the efficiency of their resources. This
              can also lead to increased uptime as virtualisation allows for
              dynamic migration, allowing for the seamless transfer of workloads
              in the event of a hardware failure. In addition, virtualisation
              increases IT flexibility by allowing for the easy deployment and
              management of new applications and systems. Overall, hardware
              virtualisation can greatly improve a company's efficiency,
              flexibility and cost-effectiveness.
            </p>
          </div>
        </div>
      </div>

      {/* **************** AWS Servers **************** */}
      <div className={styles.aws_container}>
        <Righteye
          title="AWS Servers"
          para=" Elite IT Team helps businesses of all sizes take advantage of the scalable, reliable, and secure global computing infrastructure offered by AWS. Our team of experienced professionals can assist you at every stage of your AWS cloud journey, from architecting and migrating to administering and optimising your cloud infrastructure. With our expertise and the backing of Amazon's massive infrastructure, you can trust us to help you harness the power of AWS to drive the growth and success of your business. "
          Iphoto={Iphoto26}
        />
        <div className={styles.aws_container_content}>
          <p className="primary_para">
            Whether you need support for existing applications or want to build
            new solutions, we have the skills and resources to help you achieve
            your goals. So if you are looking to leverage the potential of AWS
            to accelerate your business, don't hesitate to contact us today.
          </p>
        </div>
      </div>
      {/* **************** Footer  **************** */}
      <Footer />
    </>
  );
};

export default Hosted;
