import React from "react";
import styles from "./Web.module.scss";
import "../../../Sass/_StylesCom.scss";
import {
  BottomEye,
  CircleImg,
  Footer,
  Lefteye,
  LefttopEye,
  Navbar,
  Righteye,
  Righteye2,
  SidebtnC,
  SinglebEye,
} from "../../../components";
import {
  Iphoto1,
  Iphoto2,
  Iphoto3,
  Iphoto4,
  Iphoto5,
  Iphoto6,
  Iphoto7,
  Iphotobg3,
} from "../../../assets";

const Web = () => {
  return (
    <>
      <div className={styles.web_container}>
        <SidebtnC />
        <div className={styles.web_container_content}>
          {/* **************** Section1 **************** */}
          <div className={styles.web_container_content_section1}>
            <Navbar />
          </div>
          {/* **************** Section2 **************** */}
          <div className={styles.web_container_content_section2}>
            <h1>Web Development</h1>
          </div>
          {/* **************** Section3 **************** */}

          <div className={styles.web_container_content_section3}>
            <h1>Web Design & Development</h1>
            <div className={styles.web_container_content_section3_content}>
              <div
                className={styles.web_container_content_section3_content_left}
              >
                <p>
                  Having an online presence is essential for businesses of all
                  sizes. A well-designed website can help attract and retain
                  customers, improve credibility and professionalism, and
                  increase sales and revenue. In this article, we'll explore the
                  many benefits of investing in web design and development for
                  your business. From improving user experience and search
                  engine rankings to facilitating mobile accessibility and
                  driving online engagement, the advantages of a well-designed
                  website are numerous.
                </p>
              </div>
              <div
                className={styles.web_container_content_section3_content_right}
              >
                <CircleImg AvaterImg={Iphoto1} />
              </div>
            </div>
          </div>
          {/* **************** Section4 **************** */}

          <div className={styles.web_container_content_section4}>
            <div className={styles.web_container_content_section4_left}>
              <p>
                Web development refers to the creation and maintenance of
                websites. It encompasses a wide range of tasks, including
                designing and coding the front-end and back-end of websites, as
                well as implementing security measures and ensuring that
                websites are accessible to all users. In recent years, the
                importance of web development has grown significantly, as more
                and more businesses and individuals recognize the benefits of
                having an online presence. Key benefits of web development
                include: increased visibility, improved communication, and
                greater reach.
              </p>
            </div>
            <div className={styles.web_container_content_section4_right}>
              <p>
                Elite IT Team can assist with turning your ideas into reality
                through use of modern design techniques and tools including
                WordPress, MongoDB, React, Node.js and many more. We create
                designs that are up-to-date and responsive with fast loading
                speeds to provide an optimal user experience. Web design and
                development are crucial for businesses and individuals looking
                to establish and maintain an online presence. From increased
                visibility and improved communication, to greater reach and the
                ability to adapt to changing market conditions, the benefits of
                web design and development are numerous and varied. Whether you
                are a business looking to reach a wider audience or an
                individual seeking to showcase your work or ideas to the world,
                investing in web design and development can help you achieve
                your goals and succeed in today's digital age so get in touch
                with Elite IT Team and let us help you to succeed!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* **************** Section5 **************** */}
      <Lefteye
        title="Online Stores"
        Iphoto={Iphoto2}
        para1="If you want to build an online store and maximise the potential of
              your business, Elite IT Team can help. We specialise in creating
              custom online stores and can also use a wide range of platforms
              including Shopify, WooCommerce, Squarespace and many more. We also
              offer a range of services including adding products, setting up
              payment methods, and managing payment gateways and shipping. Our
              team has a deep understanding of the key elements necessary for a
              profitable business, and will work with you to ensure the success
              of your online store whether you already have something setup or
              you need us to create something from scratch."
      />

      {/* **************** Section6 **************** */}

      <Righteye2
        Iphoto={Iphoto3}
        bgpara="Our maintenance service offers a range of services to keep your
                website running smoothly, including updates and quick edits,
                functionality testing, malware scanning, redirect and broken
                link testing, analytics and website audits, web content and
                image updates, speed optimization, WordPress security, contact
                form additions and fixes, product uploads, security
                enhancements, malware removal, and hosting/cPanel issue
                resolution."
        title="Website Maintenance"
        para1="Website maintenance is an essential aspect of keeping a website
              up-to-date and running smoothly. It involves a range of tasks,
              including ensuring that the site is functioning properly, making
              updates and changes as needed, and performing regular checks to
              identify and fix any issues. Proper website maintenance is crucial
              for businesses and individuals who rely on their website as an
              important tool for communication, marketing, and sales. Without
              regular maintenance, a website can become outdated, insecure, and
              prone to errors, leading to a poor user experience and potentially
              damaging the reputation of the website owner."
        para2=" Elite IT team provides regular maintenance checks on your websites
              to keep them safe, secure, and up-to-date. This helps to minimise
              any potential problems, as well as increase traffic and improve
              your SEO rankings on Google. These checks include verifying that
              all links are functioning properly, updating content regularly,
              and fixing any broken links."
      />

      {/* **************** Section7 **************** */}
      <Righteye
        title="Speed Opimization"
        para=" Website speed is a critical factor in Google rankings, AdWords,
                and Facebook ad performance. It also impacts the user experience
                and likelihood of conversions for leads generated through the
                website. In today's fast-paced online environment, site speed is
                especially important for retaining customers and increasing
                sales. Our speed optimization services can help you resolve slow
                loading issues, fix underlying website problems, improve your
                score on Google PageSpeed Insights, troubleshoot slow backend
                performance, and optimise WooCommerce checkout speed, among
                other things."
        Iphoto={Iphoto4}
      />

      {/* **************** Bottom conainer **************** */}
      <BottomEye
        title="Website Migration"
        para=" Website migration can be a complex and time-consuming process, but
              it is often necessary for businesses looking to update their
              online presence or change hosting providers. It is important to
              work with experienced web experts to ensure that the migration is
              carried out smoothly and in an SEO-friendly manner, to avoid
              disrupting the organic visibility and rankings of the website. By
              following best practices and planning the migration carefully,
              businesses can successfully transition to a new domain or hosting
              provider while minimising any potential disruptions or losses."
        length="62.3rem"
        Iphoto={Iphoto5}
      />

      {/* **************** SEO conainer **************** */}

      <div className={styles.seo_container}>
        <h1 className="primary_heading"> SEO</h1>
        <div className={styles.seo_container_content}>
          <div className={styles.seo_container_content_left}>
            <div className={styles.seo_container_content_left_top}>
              <div className={styles.absolute_heading}>
                <h1>Why is SEO important?</h1>
              </div>
              <p className="primary_para">
                SEO is important for several reasons. First and foremost, it
                helps businesses attract more qualified traffic to their
                website. When people search for products or services that a
                business offers, they are more likely to make a purchase if they
                can find the business easily. By optimising their website for
                search engines, businesses can increase their chances of being
                found and attract more relevant traffic.
              </p>
              <p className="primary_para">
                In addition, SEO can help businesses improve their brand
                visibility and credibility. When a business appears at the top
                of search engine results, it sends a message to consumers that
                the business is reputable and trustworthy. This can lead to
                increased brand awareness and loyalty, as well as higher levels
                of customer engagement.
              </p>
            </div>
            <div className={styles.seo_container_content_left_bottom}>
              <div className={styles.absolute_heading}>
                <h1>How does SEO work?</h1>
              </div>
              <p className="primary_para">
                Search engines like Google use complex algorithms to determine
                the relevance and quality of a website and its content. These
                algorithms take into account a variety of factors, including the
                keywords used on the website, the quality and relevance of the
                content, the structure and organisation of the website, and the
                number and quality of links pointing to the website from other
                sites
              </p>
              <p className="primary_para">
                To improve the ranking and visibility of their website,
                businesses can use a variety of SEO techniques, such as:
              </p>
              <ul>
                <li>
                  Keyword research: Identifying the most relevant and popular
                  keywords to use in website content and meta tags
                </li>
                <li>
                  On-page optimisation: Optimising the content and structure of
                  a website to make it more search engine friendly
                </li>
                <li>
                  Off-page optimisation: Building high-quality backlinks from
                  other websites to improve the authority and credibility of a
                  website
                </li>
                <li>
                  Local SEO: Optimising a website for local search results, such
                  as by including the business's name, address, and phone number
                  on the website and claiming local business listings
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.seo_container_content_right}>
            <SinglebEye
              length="675px"
              para="Search engine optimization (SEO) is the practice of improving the ranking and visibility of a website on search engines like Google. It involves a variety of strategies and techniques designed to increase the quality and quantity of traffic to a website from search engines. SEO helps businesses improve their online presence and reach by making it easier for people to find them through search engines."
              Iphoto={Iphoto6}
            />
            <p className="primary_para">
              By implementing these and other SEO strategies, businesses can
              improve the ranking and visibility of their website on search
              engines and attract more qualified traffic. Elite IT team are
              proficient in the latest Google ranking algorithms and can help
              improve your website's ranking among competitors through a range
              of SEO services. These services include on-page SEO, off-page SEO,
              technical SEO and competitor analysis.
            </p>
          </div>
        </div>
      </div>
      {/* **************** PPC conainer **************** */}
      <div className={styles.ppc_container}>
        <h1 className="primary_heading">PPC</h1>
        <div className={styles.ppc_container_content}>
          <div className={styles.ppc_container_content_left}>
            <p className="primary_para">
              One of the major benefits of PPC is its ability to reach a
              specific and targeted audience. Advertisers can select their
              desired demographic, location, and interests when setting up a
              campaign, ensuring that their ads are seen by the right people.
              This level of targeting can be especially useful for small
              businesses looking to reach a specific market.
            </p>
            <p className="primary_para">
              PPC is also a flexible and cost-effective form of advertising.
              Advertisers can set their own budget and choose how much they want
              to spend on each click or impression, allowing them to control
              their costs and only pay for the traffic they receive. In
              addition, PPC campaigns can be quickly set up and launched, making
              it a fast and efficient way to drive traffic to a website.
            </p>
            <p className="primary_para">
              However, it's important for businesses to carefully manage their
              PPC campaigns to ensure that they are getting a good return on
              investment (ROI). This includes setting a budget that is
              appropriate for the business, choosing relevant keywords and ad
              copy, and continuously monitoring and optimising the campaign to
              improve its performance.
            </p>
            <p className="primary_para">
              PPC can be a valuable tool for businesses looking to drive
              targeted traffic to their website and generate leads or sales.
              Elite IT Team can carefully manage campaigns and utilise the
              targeting and flexibility of PPC to allow businesses to
              effectively reach their desired audience and achieve their
              marketing goals.
            </p>
          </div>
          <div className={styles.ppc_container_content_right}>
            <LefttopEye
              bgpara="PPC, or pay-per-click advertising, is a form of digital marketing that allows businesses to attract targeted traffic to their website by placing ads on search engines and other websites. Instead of earning traffic organically through SEO, businesses can use PPC to directly buy visits to their website by paying a fee each time one of their ads is clicked."
              Iphoto={Iphoto7}
              length="695px"
              bghead="What is PPC"
            />
          </div>
        </div>
      </div>
      {/* **************** Footer conainer **************** */}
      <Footer />
    </>
  );
};

export default Web;
