import React from "react";
import FormInput from "../../FormInput/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Carousel1,
  Carousel2,
  MCardbox,
  MCardbox2,
  MCardbox3,
  Navbar,
  SidebtnC,
  Sliderimgs,
} from "../../components";
import styles from "./Home.module.scss";
import {
  Chose1,
  Chose2,
  Chose3,
  Chose4,
  Chose5,
  MI1,
  MI2,
  MI3,
  MI4,
  MI5,
  SIcons20,
  SIcons21,
  SIcons23,
  SIcons24,
  SIcons25,
  SIcons26,
  SIcons27,
  ScrolImg1,
  ScrolImg2,
  ScrolImg3,
  ScrolImg4,
  ScrolImg5,
  ScrolImg6,
  ScrolImg7,
  ScrolImg8,
  ScrolImg9,
  SocialIcon1,
  SocialIcon10,
  SocialIcon11,
  SocialIcon12,
  SocialIcon2,
  SocialIcon3,
  SocialIcon4,
  SocialIcon5,
  SocialIcon6,
  SocialIcon7,
  SocialIcon8,
  SocialIcon9,
  arrow1,
  simg1,
  simg2,
} from "../../assets";
import { Link, useNavigate } from "react-router-dom";

const Home = (props) => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    name: Yup.string().required("Name is Required"),
    password: Yup.string(),
  });
  return (
    <>
      <div className={styles.header_container}>
        <SidebtnC />
        <div className={styles.header_container_content}>
          <Navbar />
          <div className={styles.header_container_content_middle}>
            <h3>Telling your story with</h3>
            <h1>meaningful designs.</h1>

            <div className={styles.header_container_content_middle_btn}>
              <Link to='/work'>
              <button>
                View our work
                <img src={arrow1} alt="Icon" />
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.header_container_bottom}>
          <Percent title="89%" desc="Same-day Resolution" />
          <Percent title="99%" desc="Customer Satisfaction" />
          <Percent title="96%" desc="SLAS met" />
        </div>
      </div>
      {/* #################### Main container ############################ */}
      <div className={styles.homeMain_container}>
        {/* #################### About container ############################ */}
        <div className={styles.about_container}>
          <img src={simg1} alt="avater" />
          <div className={styles.about_container_content}>
            <div className={styles.about_container_content_left}>
              <span>ABOUT US</span>
              <h3>A fully managed</h3>
              <h1>IT service provider</h1>
              <p>
                We help businesses and IT teams thrive using technology and
                provide a wide range of IT services. We also provide a
                completely free IT audit to assess how we can help improve your
                IT infrastructure and provide useful recommendations to put in
                place now and in the future.
              </p>
              <Link to="/about">
              <button>LEARN MORE</button>
              </Link>
            </div>
          </div>
        </div>
        {/* #################### Service container ############################ */}
        <div className={styles.services_container}>
          <div className={styles.services_container_content}>
            <div className={styles.services_container_content_top}>
              <span>our services</span>
              <h2>Our team is dedicated to ensuring</h2>
              <h1>your satisfaction</h1>
            </div>
            <div className={styles.services_container_content_middle}>
              <div className={styles.services_container_content_middle_content}>
                <Link to="/web">
                  <Sliderimgs tittle="Web Development" bgImage={ScrolImg1} />
                </Link>
                <Link to="/cyber">
                  <Sliderimgs tittle="Cyber Security" bgImage={ScrolImg2} />
                </Link>
                <Link to="/arvr">
                  <Sliderimgs tittle="AR/VR" bgImage={ScrolImg3} />
                </Link>
                <Link to="/mobileapp">
                  <Sliderimgs
                    tittle="Mobile App Development"
                    bgImage={ScrolImg4}
                  />
                </Link>
                <Link to="/voip">
                  <Sliderimgs tittle="VOIP & BroadBand" bgImage={ScrolImg5} />
                </Link>
                <Link to="/hosted">
                  <Sliderimgs
                    tittle="Hosted Services & Virtualisation"
                    bgImage={ScrolImg6}
                  />
                </Link>
                <Link to="/networking">
                  <Sliderimgs tittle="Networking & Wifi" bgImage={ScrolImg7} />
                </Link>
                <Link to="/itsupport">
                  <Sliderimgs tittle="IT Support" bgImage={ScrolImg8} />
                </Link>
                <Link to="/procurement">
                  <Sliderimgs
                    tittle="Hardware & Software Procurement"
                    bgImage={ScrolImg9}
                  />
                </Link>
              </div>
            </div>
            <div className={styles.services_container_content_bottom}>
              <div className={styles.services_container_content_bottom_right}>
                <h1>OUR WORK</h1>
                <p>
                  We are passionate about helping businesses and IT teams not
                  just advance, but thrive in this modern digital age by using
                  the latest technology. Our team of experts provides an
                  extensive range of IT services, tailored to the specific needs
                  of your business. That’s not all, we also offer a completely
                  free IT audit to access your current IT infrastructure and
                  identify any areas that need improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* #################### Mission Container ############################ */}
      <div className={styles.mission_container}>
        <div className={styles.mission_container_content}>
          <div className={styles.mission_container_content_left}>
            <div className={styles.mission_container_content_left_b1}>
              <h1>See our mission</h1>
              <span>in action</span>

              <Link to="/work">
                <div className={styles.imglayout}>
                  <h1>THE DIET APP</h1>
                </div>
              </Link>
            </div>
            <Link to="/work">
              <MCardbox2 imgM={MI5} imgTitle="COOK IN THE NOOK WEBSITE" 
              style={{height:"20rem"}}
              />
            </Link>
            <Link to="/work">
              <button>View More</button>
            </Link>
          </div>
          <div className={styles.mission_container_content_right}>
            {/* ###### Create Mission Cardboxs in the components folder ######### */}
            <Link to="/work">
              <MCardbox />
            </Link>
            <Link to="/work">
              <MCardbox2 imgM={MI3} imgTitle="VIVAWELL WEBSITE" />
            </Link>
            <Link to="/work">
              <MCardbox3 />
            </Link>
          </div>
        </div>
      </div>
      {/* #################### Testimonials feedback Container ############################ */}
      <div className={styles.tsf_container}>
        <h1>Tesimonials</h1>
        <div className={styles.tsf_container_content}>
          <div className={styles.tsf_container_content_top}>
            <h3>Feedback that</h3>
            <span>Speaks volumes</span>
          </div>
          <div className={styles.tsf_container_content_bottom}>
            <Carousel1 />
          </div>
        </div>
      </div>
      {/* #################### Benefits Container ############################ */}
      <div className={styles.benefit_container}>
        <h2>Benefits</h2>
        <div className={styles.benefit_container_content}>
          <div className={styles.benefit_container_content_top}>
            <span>Reasons to</span>
            <h1>choose us</h1>
          </div>
          <div className={styles.benefit_container_content_bottom}>
            <div className={styles.benefit_container_content_bottom_left}>
              <ChooseCompo
                Images={Chose1}
                desc="By choosing our company, you gain access to a wealth of knowledge and
        expertise cultivated over a decade of building complex custom
        applications."
              />
              <ChooseCompo
                Images={Chose3}
                desc="We redefine development capabilities with time-tested expertise and a vast code repository, delivering cost-efficient options to build premium custom applications."
              />
              <ChooseCompo
                desc="Our team utilises cutting-edge methodologies and stays up-to-date with the latest technological advancements to ensure seamless operations and the flexibility to meet our clients' specific needs."
                Images={Chose5}
              />
            </div>
            <div className={styles.benefit_container_content_bottom_right}>
              <ChooseCompo
                Images={Chose2}
                desc="Our culture is driven by specialisation, which enables us to maintain a deep passion for staying at the forefront of our industry."
              />
              <ChooseCompo
                Images={Chose4}
                desc="With a speedy and efficient delivery, we reduce risk and provide fast time-to-value to step out into the rapidly evolving market."
              />
            </div>
          </div>
        </div>
      </div>
      {/* #################### Latests Blog Container ############################ */}
      <div className={styles.latestblog_container}>
        <div className={styles.latestblog_container_content}>
          <div className={styles.latestblog_container_content_top}>
            <h3>Check out our</h3>
            <span>latests blogs</span>
          </div>
          <div className={styles.latestblog_container_content_bottom}>
            <Carousel2 />
          </div>
        </div>
      </div>
      {/* #################### Social Bar  Container ############################ */}
      <div className={styles.socialbar_container}>
        <div className={styles.socialbar_container_content}>
          <div className={styles.socialbar_container_content_top}>
            <p>IT solutions to power any size workload.</p>
            <p>
              Pricing and confidence to help drive your business forward with
              industry-leading partnerships.
            </p>
          </div>
          <div className={styles.socialbar_container_content_bottom}>
            <img src={SocialIcon1} alt="Socials_Icons" />
            <img src={SocialIcon2} alt="Socials_Icons" />
            <img src={SocialIcon3} alt="Socials_Icons" />
            <img src={SocialIcon4} alt="Socials_Icons" />
            <img src={SocialIcon5} alt="Socials_Icons" />
            <img src={SocialIcon6} alt="Socials_Icons" />
            <img src={SocialIcon7} alt="Socials_Icons" />
            <img src={SocialIcon8} alt="Socials_Icons" />
            <img src={SocialIcon9} alt="Socials_Icons" />
            <img src={SocialIcon12} alt="Socials_Icons" />
            <img src={SocialIcon10} alt="Socials_Icons" />
            <img src={SocialIcon11} alt="Socials_Icons" />
          </div>
        </div>
      </div>
      {/* #################### Togather Container ############################ */}
      <div className={styles.togather_container}>
        <div className={styles.togather_container_content}>
          <span>Let's</span>
          <h1>work togather.</h1>
        </div>
      </div>
      {/* #################### Contact Container ############################ */}
      <div className={styles.contact_container}>
        <div className={styles.contact_container_content1}>
          <div className={styles.contact_container_content1_left}>
            <p>
              Our team is always ready and willing to assist you in any way we
              can.
            </p>
            <div className={styles.mailbox_container}>
              <h1>Connect with us</h1>
              <div className={styles.mailbox_container_mail}>
                <img src={SIcons20} alt="Icons" />
                <span>info@eliteitteam.com</span>
              </div>
              <div className={styles.mailbox_container_phone}>
                <img src={SIcons21} alt="Icons" />
                <span>UK: (+44) 3333 660 173</span>
                <span>UK: (+44) 3333 660 173</span>
              </div>
              <div className={styles.mailbox_container_socailIcons}>
                <a
                  href="https://www.linkedin.com/company/elite-it-team/?viewAsMember=true"
                  target="_blank"
                >
                  <img src={SIcons23} alt="Icons" />
                </a>
                <a
                  href=" https://www.facebook.com/eliteitteam"
                  target="__blank"
                >
                  <img src={SIcons24} alt="Icons" />
                </a>
                <a
                  href=" https://www.instagram.com/eliteitteam/"
                  target="___blank"
                >
                  <img src={SIcons26} alt="Icons" />
                </a>
                <a href="  https://twitter.com/EliteITteam1" target="__blank">
                  <img src={SIcons27} alt="Icons" />
                </a>
                {/* <img src={SIcons25} alt="Icons" /> */}
              </div>
            </div>
          </div>
          <div className={styles.contact_container_content1_right}>
            <div className={styles.contact_container_content1_right_formbox}>
              <div
                className={
                  styles.contact_container_content1_right_formbox_content
                }
              >
                <Formik
                  initialValues={{
                    email: "",
                    name: "",
                    message: "",
                  }}
                  validationSchema={validate}
                >
                  {(formik) => (
                    <div>
                      <Form>
                        <FormInput
                          label="Full Name"
                          name="name"
                          type="text"
                          place=""
                        />
                        <FormInput
                          label="Email"
                          name="email"
                          type="email"
                          place=""
                        />
                        <FormInput
                          label="Message"
                          name="Messge"
                          type="text-area"
                          place=""
                        />
                      </Form>
                    </div>
                  )}
                </Formik>
              </div>
              <div className={styles.contact_container_content1_right_btn}>
                <button>SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contact_container_content2}>
          <h5>Our offices are located in:</h5>
          <div className={styles.contact_container_content2_location}>
            <div className={styles.contact_container_content2_location_left}>
              <div
                className={
                  styles.contact_container_content2_location_left_mapbox
                }
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.8880046840973!2d-2.3551911234744187!3d53.398943272304535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bac9ad98480bf%3A0x4a0ca539d08044c4!2s139%20Manchester%20Rd%2C%20Altrincham%20WA14%205NS%2C%20UK!5e0!3m2!1sen!2s!4v1686780609080!5m2!1sen!2s"
                  height="450"
                  style={{ border: "0", width: "100%" }}
                  allowfullscreen=""
                  // loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div
                className={
                  styles.contact_container_content2_location_left_address
                }
              >
                <h1>UK</h1>
                <p>139 Manchester Road, Altrincham, Cheshire, WA14 5NS</p>
              </div>
            </div>
            <div className={styles.contact_container_content2_location_right}>
              <div
                className={
                  styles.contact_container_content2_location_right_mapbox
                }
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.37487781668!2d-74.0104716242405!3d40.70976327139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a181817a741%3A0x5d0d9ca92daf51b7!2s82%20Nassau%20St%2C%20New%20York%2C%20NY%2010038%2C%20USA!5e0!3m2!1sen!2s!4v1686781377289!5m2!1sen!2s"
                  height="450"
                  style={{ border: "0", width: "100%" }}
                  allowfullscreen=""
                  // loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div
                className={
                  styles.contact_container_content2_location_right_address
                }
              >
                <h1>USA</h1>
                <p>82 Nassau St, New York, NY 10038</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

const Percent = ({ title, desc }) => {
  return (
    <div className={styles.percent_container}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

const ChooseCompo = (props) => {
  return (
    <div className={styles.choose}>
      <img src={props.Images} alt="Icons" />
      <p>{props.desc}</p>
    </div>
  );
};
