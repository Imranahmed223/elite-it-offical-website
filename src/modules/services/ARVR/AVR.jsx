import React from "react";
import styles from "./AVR.module.scss";
import {
  CircleImg,
  Footer,
  LefttopEye,
  Navbar,
  Righteye,
  SidebtnC,
  SinglebEye,
} from "../../../components";
import { Iphoto36, Iphoto37, Iphoto38, Iphoto39 } from "../../../assets";

const AVR = () => {
  return (
    <>
      <div className={styles.avr_container}>
        <SidebtnC />
        <div className={styles.avr_container_content}>
          <div className={styles.avr_container_content_top}>
            <Navbar />
          </div>
          <div className={styles.avr_container_content_middle}>
            <h1 className="maintop_heading">AR/VR</h1>
          </div>
          <div className={styles.avr_container_content_bottom}>
            <div className={styles.avr_container_content_bottom_content}>
              <div className={styles.avr_container_content_bottom_content_left}>
                <p>
                  Are you ready to take your business to the next level with the
                  power of augmented reality (AR) and virtual reality (VR)?
                  These cutting-edge technologies are transforming the way we
                  interact with the world, and they have the potential to
                  revolutionise a wide range of industries
                </p>
                <p>
                  AR involves superimposing digital information onto the
                  physical world, while VR creates a completely immersive
                  digital environment. These technologies can be used to enhance
                  our experiences in a variety of ways, from creating more
                  realistic and immersive gaming worlds to creating interactive
                  and engaging learning experiences for students.
                </p>
              </div>
              <div
                className={styles.avr_container_content_bottom_content_right}
              >
                <p>
                  In addition to enhancing our experiences, AR and VR also have
                  the potential to improve our productivity and efficiency. For
                  example, in the manufacturing industry, these technologies can
                  be used to visualise and test the design of new products
                  before they are produced. This can help companies save time
                  and money by identifying and fixing problems earlier in the
                  development process.
                </p>
                <p>
                  If you're interested in incorporating AR and VR into your
                  business, the options are endless. From creating virtual
                  showrooms for customers to using these technologies for
                  training and development, the possibilities are virtually
                  limitless
                </p>
              </div>
            </div>
            <div className={styles.avr_container_content_bottom_vrbox}>
              <p>
                So why wait? Start exploring the exciting world of AR and VR
                today with Elite IT and see how these technologies can
              </p>
              <h1>take your business to new heights.</h1>
            </div>
          </div>
        </div>
      </div>
      {/* ***************** Augmented Reality **************** */}
      <div className={styles.augmented_container}>
        <div className={styles.augmented_container_content}>
          <div className={styles.augmented_container_content_left}>
            <h1 className="primary_heading">Augmented Reality</h1>
            <p className="primary_para">
              {" "}
              Outsourced IT support can be a cost-effective and efficient
              solution for businesses that need reliable and skilled technical
              support but don't have the resources or expertise to manage it
              in-house
            </p>
            <p className="primary_para">
              Outsourced IT support can be a cost-effective and efficient
              solution for businesses that need reliable and skilled technical
              support but don't have the resources or expertise to manage it
              in-house
            </p>
            <p className="primary_para">
              AR also has the potential to improve our productivity and
              efficiency in other industries. For example, in the manufacturing
              industry, AR can be used to visualise and test the design of new
              products before they are produced. This can help companies save
              time and money by identifying and fixing problems earlier in the
              development process.
            </p>
            <p className="primary_para">
              In addition to its practical applications, AR also has the
              potential to enhance our daily lives in a variety of ways. From
              creating virtual showrooms for customers to using AR for training
              and development, the possibilities are virtually limitless.
            </p>
          </div>
          <div className={styles.augmented_container_content_right}>
            <LefttopEye
              bgpara="If you're interested in incorporating AR into your business or daily life, the time to start exploring this exciting technology is now."
                Iphoto={Iphoto36}
              length="45.7rem"
              //   bghead="What is PPC"
            />
          </div>
        </div>
      </div>
      {/* ***************** Virtual Reality **************** */}
      <div className={styles.virtual_container}>
        <div className={styles.virtual_container_content}>
          <div className={styles.virtual_container_content_left}>
            <div className={styles.virtual_container_content_left_bgbox}>
              <ul>
                Some of the key benefits of VR include:
                <li>
                  Enhanced immersion: VR technology allows users to feel like
                  they are truly present in a digital environment, which can
                  make the experience more engaging and realistic
                </li>
                <li>
                  Increased interactivity: VR allows users to interact with
                  digital content in a way that feels natural and intuitive,
                  which can make the experience more engaging and satisfying.
                </li>
                <li>
                  Greater accessibility: VR technology is becoming more
                  affordable and widely available, making it accessible to more
                  people than ever before.
                </li>
                <li>
                  Improved learning outcomes: Studies have shown that VR can be
                  an effective tool for learning and training, as it allows
                  users to experience concepts and scenarios in a more
                  interactive and immersive way.{" "}
                </li>
              </ul>
            </div>
            <div className={styles.virtual_container_content_left_circlebox}>
              <CircleImg AvaterImg={Iphoto37}/>
            </div>
          </div>
          <div className={styles.virtual_container_content_right}>
            <h1 className="primary_heading">Virtual Reality</h1>
            <p className="primary_para">
              Virtual reality (VR) technology has come a long way in recent
              years, and it's now being used in a variety of industries to
              enhance the user experience. From gaming and entertainment to
              education and healthcare, VR is being used to transport users to
              immersive, digital environments that feel real.
            </p>
            <p className="primary_para">
              One of the most exciting things about VR is the way it allows
              users to interact with digital content in a way that feels natural
              and intuitive. With VR headsets and controllers, users can move
              around, explore, and interact with their virtual surroundings just
              as they would in the real world. This level of immersion is not
              possible with traditional forms of media, and it's why VR has such
              a huge potential to change the way we experience the world.
            </p>
            <p className="primary_para">
              As VR technology continues to evolve, we can expect to see it
              being used in an even wider range of industries and applications.
              From virtual reality games and movies to virtual reality training
              and education, the possibilities are endless. Whether you're a VR
              enthusiast or just curious about the technology, there's never
              been a better time to explore the world of virtual reality.
            </p>
          </div>
        </div>
      </div>
      {/* ***************** AR/VR Services **************** */}

      <Righteye
        title="AR/VR Services"
        para=" At Elite IT, we specialise in creating thriving VR and AR experiences by understanding your product vision and business goals. Working closely with your team, we develop a clear plan for the artistic direction, technologies, user experience, platforms, and talent needed to bring your project to life. Our team has expertise in creating realistic and immersive VR art assets, and we also offer integrated AR and VR solutions that can be seamlessly integrated into your core business systems. Our goal is to create unique and engaging virtual experiences that are suitable for all types of audiences. Trust us to handle the complex tasks of creating AR and VR software and AI applications with ease."
        Iphoto={Iphoto38}
      />
      {/* ***************** Virtual Reality section2 **************** */}
      <div className={styles.vr_container}>
        <div className={styles.vr_container_content}>
          <div className={styles.vr_container_content_left}>
            <h1 className="primary_heading">Virtual Reality</h1>
            <p className="primary_para">
              Looking to create an augmented reality app to run on Oculus, PSVR
              or Google Daydream? In the search for a qualified team of
              designers and coders to invent your new machine learning app?
              Elite IT can be your trusted partner for helping you with all of
              these! 
            </p>
            <p className="primary_para">
              Elite IT offers tailored AR and VR solutions for a variety of
              industries. With our expertise and practical knowledge, we can
              turn your raw ideas into functional applications. We are
              passionate about the potential of VR and AR beyond gaming and are
              committed to helping you deliver value and create impactful
              interactions with your audience. Whether you need a standalone AR
              product or want to integrate AR/VR into your existing apps, we can
              find the most suitable solution for you. During the discovery
              phase, we work closely with you to understand your business and
              identify where immersive technologies can bring the most value.
            </p>
          </div>
          <div className={styles.vr_container_content_right}>
            <SinglebEye
              length="675px"
              para="Although technology has progressed to enable the creation of cross-platform mobile apps, native app development is still a suitable option for many projects and can even be essential in some cases. Our developers recognize the benefits of native app development, including improved device interactivity, and use the latest versions of Swift and Kotlin/Java to create scalable and robust native applications. We can also create and migrate apps between platforms, ensuring that the same functionality and design is maintained."
                Iphoto={Iphoto39}
            />
          </div>
        </div>
      </div>
      {/* ***************** Footer **************** */}
      <Footer />
    </>
  );
};

export default AVR;
