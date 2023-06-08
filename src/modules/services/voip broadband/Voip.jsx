import React from "react";
import styles from "./Voip.module.scss";
import "../../../Sass/_StylesCom.scss";
import {
  Footer,
  Navbar,
  Righteye,
  SidebtnC,
  SinglebEye,
} from "../../../components";
import { Iphoto19, Iphoto20 } from "../../../assets";

const Voip = () => {
  return (
    <>
      <div className={styles.voip_container}>
        <SidebtnC />
        <div className={styles.voip_container_content}>
          <div className={styles.voip_container_content_top}>
            <Navbar />
          </div>
          <div className={styles.voip_container_content_middle}>
            <h1 className="maintop_heading">VOIP Broadband</h1>
          </div>
          <div className={styles.voip_container_content_bottom}>
            <div className={styles.voip_container_content_bottom_left}>
              <SinglebEye
                length="841px"
                para="At Elite IT Team, we offer flexible and scalable VOIP solutions that can serve organisations of any size, from 2 users to 500 users, with the same comprehensive features. Our VOIP systems include standard telephone and video conference functionality, allowing you to communicate effectively with colleagues and clients. By replacing costly fixed telephone lines with cheaper SIP trunks, companies that switch to VOIP phone systems can expect to save up to 40% on their telecom expenses and significantly reduce call costs compared to traditional systems. Contact us to learn more about how VOIP can benefit your organisation and help you save on telecom costs."
                Iphoto={Iphoto19}
              />
            </div>
            <div className={styles.voip_container_content_bottom_right}>
              <h1 className="primary_heading">VOIP</h1>
              <p className="primary_para">
                VoIP (Voice over Internet Protocol) is a type of technology that
                allows users to make phone calls over the internet. It has
                become a popular alternative to traditional phone systems,
                particularly for small and medium-sized businesses.
              </p>
              <p className="primary_para">
                There are many benefits to using VoIP solutions for your
                business. One of the main advantages is the cost savings. VoIP
                calls are typically much cheaper than traditional phone calls,
                especially for long distance or international calls. In
                addition, VoIP systems often come with features such as call
                forwarding, voicemail, and conference calling, which can help
                improve communication and productivity within your organisation.
                Another benefit of VoIP is its flexibility. VoIP systems can be
                easily scaled to meet the changing needs of your business, and
                users can make and receive calls from any device with an
                internet connection. This makes it an ideal solution for
                businesses with remote or mobile workers.
              </p>
              <p className="primary_para">
                In addition to these benefits, VoIP systems can also be easily
                integrated with other business tools, such as customer
                relationship management (CRM) systems and project management
                software. This can help streamline workflows and improve
                efficiency
              </p>
              <p className="primary_para">
                Overall, VoIP solutions offer a cost-effective, flexible, and
                feature-rich alternative to traditional phone systems. Whether
                you're a small business owner or a large enterprise, VoIP can
                help you improve communication, productivity, and efficiency
                within your organisation.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* **************** Voice & Data **************** */}
      <div className={styles.voice_container}>
        <Righteye
          title="Voice & Data"
          para=" Elite IT Team offers customisable VOIP phone software that can be tailored to your specific needs, allowing you to access your telephone system and make calls from your mobile phone using the dedicated 3CX app or through your computer with a headset. This helps to eliminate the need for a desk phone and promotes flexibility. If you prefer to keep desk phones in your organisation, we also offer a range of telephone hardware options at various price points, and leasing options are available to help spread the cost of transitioning to a VOIP phone system."
          Iphoto={Iphoto20}
        />
        <div className={styles.voice_container_content}>
          <div className={styles.voice_container_content_left}>
            <p className="primary_para">
              VOIP technology not only provides digital voice communication, but
              also allows for fast information-sharing through video
              conferencing and unified communications and collaboration. This
              increased flexibility to work remotely can improve employee
              satisfaction and productivity. Our experts can help you determine
              when and where it makes sense to deploy IP telephony in your
              business.
            </p>
            <p className="primary_para">
              VOIP systems allow small and medium-sized businesses to project
              the image of a larger company, while making large companies seem
              more approachable. Unlike traditional phone services, IP-based
              telephony services offer full conference calling features built
              into the service, eliminating the need for a separate conference
              call provider.
            </p>
          </div>
          <div className={styles.voice_container_content_right}>
            <p className="primary_para">
              To ensure optimal voice quality, a fast and stable internet
              connection with good bandwidth is necessary for VOIP calls. We
              also stay up-to-date with innovations such as noise-cancelling
              microphones and advanced audio compression to continually improve
              call clarity. Contact us to learn more about how VOIP can benefit
              your organisation.
            </p>
          </div>
        </div>
      </div>
      {/* **************** Footer Component **************** */}
      <Footer />
    </>
  );
};

export default Voip;
