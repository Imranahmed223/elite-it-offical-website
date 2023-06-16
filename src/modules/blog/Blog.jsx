import React from "react";
import styles from "./Blog.module.scss";
import { Navbar, SidebtnC } from "../../components";
import {
  Arrowdown,
  BHeader,
  Bicons1,
  Bicons2,
  Bicons3,
  Bicons4,
  Bicons5,
  Bicons6,
  Bicons7,
  Blogm,
} from "../../assets";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.blog_container}>
        <SidebtnC />
        <div className={styles.blog_container_content}>
          <div className={styles.blog_container_content_top}>
            <Navbar />
          </div>
          <div className={styles.blog_container_content_middle}>
            <img src={BHeader} alt="Header" />
            <div className={styles.blog_container_content_middle_bbox}>
              <span>How to master smart remote working</span>
            </div>
          </div>
          <div className={styles.blog_container_content_bottom}>
            <div className={styles.advntage_box}>
              <p>TIPS AND TRICKS FOR SUCCESS</p>
              <img src={Arrowdown} alt="arrow" />
            </div>
            <p className="primary_para">
              Remote work has become increasingly popular recently and has
              become more prevalent with the COVID-19 pandemic. While working
              from home has benefits, it also presents some unique challenges.
              Today's blog will focus on some key strategies to keep in mind to
              stay productive and maintain your sanity while working remotely.
            </p>
          </div>
        </div>
      </div>
      {/* *********************** Blog Section2 ********************** */}
      <div className={styles.blog_section2}>
        <div className={styles.blog_section2_content}>
          <div className={styles.blog_section2_content_left}>
            <BlogSupport
              image={Bicons1}
              heading="Set up a dedicated workspace"
              para="It’s vital to set up a dedicated workspace that’s free from distractions. You can create an effective workspace by finding a quiet and well-lit area in your home, investing in comfortable furniture, and keeping your workspace organised.  To make your workspace more inviting, consider adding personal touches such as plants, art, or family photos. You should also minimise distractions by keeping unnecessary items out of your workspace and using noise-cancelling headphones. You should also establish a routine that includes regular work hours and breaks."
            />
            <BlogSupport
              image={Bicons3}
              heading="Communication with your team"
              para="Communication is essential for remote teams to maintain productivity and collaboration. You can communicate effectively by using the right tools for your team’s needs, such as video conferencing or instant messaging. It’s vital to schedule regular check-ins to discuss ongoing projects and define roles and responsibilities. 
Being proactive in your communication is key, so don’t hesitate to reach out to team members if you have any queries. Additionally, active listening is important to make sure you understand your team members. Building relationships through non-work-related conversations can help create a positive team culture.
"
            />
          </div>
          <div className={styles.blog_section2_content_right}>
            <BlogSupport
              image={Bicons2}
              heading="Stick to a routine"
              para="Maintaining a routine while working from home is necessary for productivity and work-life balance. You can stick to a routine by establishing regular work hours and creating a morning routine to get your day started right. It’s also quite helpful to plan out your tasks in advance and prioritize them based on importance and urgency. Taking breaks throughout the day is also very vital to avoid burnout and stay focused. "
            />
            <BlogSupport
              image={Bicons4}
              heading="Take Breaks"
              para="Schedule specific times for breaks and include them in your to-do list, allowing you to plan your work accordingly. Use your break time to go outside for a walk, stretch, or engage in light exercise. Physical activity can help reduce stress, improve mood, and boost energy levels. During breaks, take time to fully disconnect from work by avoiding checking emails, and messages or taking any work-related calls. Instead, engage in activities that make you happy and relaxed. "
            />
          </div>
        </div>
      </div>
      {/* *********************** Blog Technology Section2 ********************** */}

      <div className={styles.tech_container}>
        <div className={styles.tech_container_content}>
          <div className={styles.tech_container_content_left}>
            <div className={styles.tech_container_content_left_top}>
              <img src={Bicons5} alt="Icons" />
              <h1>Use technology to your advantage</h1>
            </div>
            <ul className="primary_para">
              Technology can be a valuable tool for maximising productivity and
              staying connected while working remotely. Here are some strategies
              to use technology to your advantage while working remotely:
              <li>Communication tools</li>
              <li>Project management tools</li>
              <li>Cloud storage</li>
              <li>Automation tools</li>
              <li>Time-tracking tools</li>
              <li>Virtual collaboration tools </li>
            </ul>
            <p className="primary_para">
              Use communication tools such as email, instant messaging, and
              video conferencing software to stay connected with your team and
              colleagues. These tools can help you collaborate effectively,
              share ideas, and ask for help when needed.
            </p>
            <p className="primary_para">
              Utilise project management tools such as Trello, Asana, or
              Monday.com to manage tasks, track progress, and meet deadlines.
              They can assist you to stay organised, and ensure that everyone is
              on the same page.
            </p>
            <p className="primary_para">
              Using cloud storage services like Google Drive, Dropbox, or
              OneDrive to store and share files with your team. These services
              enable you to access your files from any device, making it easier
              to work remotely.
            </p>
            <p className="primary_para">
              Automate repetitive tasks such as email responses or data entry
              using tools like Zapier, IFTTT, or Mircosoft Power Automate to
              save your time and focus on more important tasks.
            </p>
          </div>
          <div className={styles.tech_container_content_right}>
            <img src={Blogm} alt="display" />
          </div>
        </div>
      </div>
      {/* *********************** Blog Section3 ********************** */}
      <div className={styles.blog_bg2}>
        <div className={styles.b_section3}>
          <div className={styles.b_section3_content}>
            <div className={styles.b_section3_content_left}>
              <div className={styles.b_section3_content_left_top}>
                <img src={Bicons6} alt="Icons" />
                <h1>Avoid Distractions</h1>
              </div>
              <ul className="primary_para">
                Working remotely can be a challenging experience as there are
                many distractions that may disrupt your productivity. To avoid
                such distractions, you can take certain measures such as:
                <li>
                  Establishing a dedicated workspace that is free from
                  distractions
                </li>
                <li> Creating and sticking to a work schedule </li>
                <li>
                  Avoiding multitasking and focusing on one task at a time
                </li>
                <li>Minimising digital distractions </li>
                <li>
                  {" "}
                  Communicating with family and friends about your work schedule
                </li>
                <li> Taking regular breaks to improve focus</li>
                <li>Using productivity tools</li>
              </ul>
            </div>
            <div className={styles.b_section3_content_right}>
              <div className={styles.b_section3_content_right_top}>
                <img src={Bicons7} alt="Icons" />
                <h1>Prioritise your health</h1>
              </div>
              <p className="primary_para">
                Ensuring that you prioritise your health while working remotely
                is essential to maintain both your well-being and productivity.
                It’s important to establish clear work hours and adhere to them,
                as this will enable you to set aside time for yourself outside
                of work hours. Set up a workspace that is ergonomically designed
                and comfortable to prevent strain or injury. 
              </p>
              <p className="primary_para">
                Make sure your workspace has enough lighting and proper
                ventilation to promote a healthy work environment. Additionally,
                maintain a healthy routine that includes exercise, healthy
                meals, and sufficient sleep.
              </p>
            </div>
          </div>
        </div>
        {/* *********************** Blog Section4 ********************** */}
        <div className={styles.b_section4}>
          <p className="primary_para">
            To sum up, remote work has become an integral part of our daily
            lives, and with the correct strategies in place, it can lead to a
            productive and gratifying experience. By following the above tips,
            you can optimise your remote work setup, enhance your time
            management skills, establish a healthy work-life balance, and
            maximise your efficiency. 
          </p>
          <p className="primary_para">
            It is crucial to prioritise your physical and mental health, remain
            connected with your colleagues, and take a proactive approach to
            manage your tasks. With the right mindset and attitude, remote work
            can be a smart and fulfilling choice for those seeking to improve
            their work situation. 
          </p>
        </div>
      </div>
      <div className={styles.backbtn}>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    </>
  );
};

export default Blog;

const BlogSupport = (props) => {
  return (
    <>
      <div className={styles.blogSupport}>
        <div className={styles.blogSupport_top}>
          <img src={props.image} alt="Icons" />
          <h1>{props.heading}</h1>
        </div>
        <div className={styles.blogSupport_bottom}>
          <p className="primary_para">{props.para}</p>
        </div>
      </div>
    </>
  );
};
