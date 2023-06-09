import React from "react";
import styles from "./MApp.module.scss";
import {
  CircleImg,
  Footer,
  Navbar,
  Righteye,
  SidebtnC,
  SinglebEye,
} from "../../../components";
import {
  Iphoto29,
  Iphoto31,
  Iphoto32,
  Iphoto33,
  Iphoto34,
  Iphoto35,
} from "../../../assets";

const MApp = () => {
  return (
    <>
      <div className={styles.app_container}>
        <SidebtnC />
        <div className={styles.app_container_content}>
          <div className={styles.app_container_content_top}>
            <Navbar />
          </div>
          <div className={styles.app_container_content_middle}>
            <h1 className="maintop_heading">Mobile App Development Services</h1>
          </div>
          <div className={styles.app_container_content_bottom}>
            {/* **************** Mobile App Design **************** */}
            <div className={styles.mobileApp_container}>
              <Righteye
                title="MobileApp Design"
                para=" Our team of app developers has a proven track record of designing highly functional and user-centric mobile apps for Android and iOS. This means that we prioritise the user experience in our app design and place the user at the centre of the design process. We understand that the user interface of the app is a key part of the interaction with the audience, and we strive to create apps that are intuitive and easy to use."
                Iphoto={Iphoto35}
              />
              <div className={styles.mobileApp_container_content}>
                <div className={styles.mobileApp_container_content_left}>
                  <p className="primary_para">
                    To ensure that the app is of the highest quality, we follow
                    recommended industry guidelines, such as the Google Material
                    Design Guide and the Apple Human Interface Guidelines. These
                    guidelines provide best practices for designing mobile apps
                    and help to ensure that the app meets the needs of the user
                    and provides a positive experience.
                  </p>
                  <p className="primary_para">
                    Throughout the app development process, we provide
                    wireframes and mock-ups of the app design to ensure that you
                    are fully satisfied with how the app is being built. These
                    materials allow you to see the progress of the app and
                    provide feedback at various stages of the development
                    process. This helps to ensure that the final product meets
                    your expectations and is of the highest quality.
                  </p>
                  <p className="primary_para">
                    We use professional design tools, such as Adobe XD and
                    Figma, to create the wireframes and mock-ups. These tools
                    allow us to create high-quality designs and make sure that
                    the app meets your needs. Overall, our goal is to deliver a
                    mobile app that meets your needs and exceeds your
                    expectations. We strive to create user-centric designs that
                    are intuitive and easy to use, and we work closely with you
                    throughout the development process to ensure that the final
                    product meets your needs.
                  </p>
                </div>
                <div className={styles.mobileApp_container_content_right}>
                  <p className="primary_para">
                    Throughout the app development process, we provide
                    wireframes and mock-ups of the app design to ensure that you
                    are fully satisfied with how the app is being built. These
                    materials allow you to see the progress of the app and
                    provide feedback at various stages of the development
                    process. This helps to ensure that the final product meets
                    your expectations and is of the highest quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* **************** Mobile App Development Services **************** */}

      <div className={styles.d_services}>
        <div className={styles.d_services_content}>
          <div className={styles.d_services_content_left}>
            <div className={styles.d_services_content_left_circlebox}>
              <CircleImg AvaterImg={Iphoto32} />
            </div>
            <div className={styles.d_services_content_left_bgbox}>
              <p>
                At Elite IT, we strive to provide the best possible app
                development experience for our clients. We are not affiliated
                with or sponsored by any particular platform or technology,
                which allows us to make unbiased technical decisions that are in
                the best interests of our clients.{" "}
              </p>
              <ul>
                We specialise in a range of app development services, including:
                <li>Native Android app development</li>
                <li>Native iOS app development</li>
                <li>Cross-platform app development</li>
                <li>Tablet app development</li>
                <li>Smartwatch app development</li>
                <li>Bluetooth app development</li>
                <li> Virtual Reality (VR) app development</li>
                <li>Augmented Reality (AR) app development</li>
              </ul>
              <p>
                We are committed to delivering high-quality app development
                services that meet the needs of our clients and help their
                businesses succeed.
              </p>
            </div>
          </div>
          <div className={styles.d_services_content_right}>
            <h1 className="primary_heading">Mobile App Development Services</h1>
            <p className="primary_para">
              Mobile app development has become an increasingly important part
              of modern business, as more and more people rely on their
              smartphones and tablets for everything from communication to
              shopping to entertainment. If you are considering developing a
              mobile app for your business, there are a few things you should
              keep in mind.
            </p>
            <p className="primary_para">
              First, it is important to carefully plan and strategize your app
              development project. This includes determining your target
              audience, identifying the features and functionality you want to
              include, and setting clear goals and objectives for the app.
            </p>
            <p className="primary_para">
              Next, you will need to choose a mobile app development platform.
              There are many options available, including native app development
              (using specific programming languages such as Java or Swift) and
              cross-platform development (using tools that allow you to create
              apps for multiple platforms with a single codebase).
            </p>
            <p className="primary_para">
              Once you have a clear plan in place, you will need to find a
              mobile app development team to bring your app to life. Look for a
              team with a track record of delivering high-quality apps that meet
              the needs of their clients. They should be able to provide you
              with a detailed proposal outlining the development process and
              timeline, as well as a budget for the project.
            </p>
            <p className="primary_para">
              Finally, it is important to keep in mind that mobile app
              development is an ongoing process. Once your app is launched, you
              will need to continue to update and maintain it to ensure that it
              remains relevant and meets the changing needs of your users. This
              may include adding new features, fixing bugs, and updating the app
              to keep up with new technologies and operating system updates.
            </p>
            <p className="primary_para">
              Finally, it is important to keep in mind that mobile app
              development is an ongoing process. Once your app is launched, you
              will need to continue to update and maintain it to ensure that it
              remains relevant and meets the changing needs of your users. This
              may include adding new features, fixing bugs, and updating the app
              to keep up with new technologies and operating system updates.
            </p>
          </div>
        </div>
      </div>
      {/* **************** Native Apps for IOS & Android **************** */}
      <div className={styles.nativeApps}>
        <div className={styles.nativeApps_content}>
          <div className={styles.nativeApps_content_left}>
            <h1 className="primary_heading">Native Apps for IOS & Android</h1>
            <p className="primary_para">
              Native app development refers to the creation of apps that are
              specifically designed for use on a particular platform, such as
              Android apps for Android devices or iOS apps for Apple devices.
              Native mobile apps are not accessed through a web browser and must
              be downloaded from platform-specific app stores, such as the Apple
              App Store or Google Play.
            </p>
            <p className="primary_para">
              Native app development refers to the creation of apps that are
              specifically designed for use on a particular platform, such as
              Android apps for Android devices or iOS apps for Apple devices.
              Native mobile apps are not accessed through a web browser and must
              be downloaded from platform-specific app stores, such as the Apple
              App Store or Google Play.
            </p>
          </div>
          <div className={styles.nativeApps_content_right}>
            <SinglebEye
              length="759px"
              para="Although technology has progressed to enable the creation of cross-platform mobile apps, native app development is still a suitable option for many projects and can even be essential in some cases. Our developers recognize the benefits of native app development, including improved device interactivity, and use the latest versions of Swift and Kotlin/Java to create scalable and robust native applications. We can also create and migrate apps between platforms, ensuring that the same functionality and design is maintained."
              Iphoto={Iphoto33}
            />
          </div>
        </div>
      </div>
      {/* **************** Cross-Platform Apps **************** */}
      <div className={styles.crossPlatform}>
        <Righteye
          title="Cross-Platform Apps"
          para="Cross-platform mobile app development has become increasingly popular in recent years, as businesses and individuals seek to reach a larger market without the added cost of creating separate apps for each platform. In the first quarter of 2021, there were 3.48 million apps available on the Google Play Store and 2.22 million apps on the App Store, with Android and iOS accounting for 99% of the worldwide mobile operating system market share."
          Iphoto={Iphoto34}
        />
        <div className={styles.crossPlatform_content}>
          <div className={styles.crossPlatform_content_left}>
            <p className="primary_para">
              One way to approach cross-platform app development is to use a
              framework like Xamarin, which allows developers to create apps
              using a single codebase that can be used on multiple platforms.
              This can be a more cost-effective option for businesses and
              individuals who want to reach both Android and iOS audiences
              without the added expense of developing separate apps.
            </p>
            <p className="primary_para">
              However, native app development (which involves creating separate
              apps for each platform using specific programming languages) may
              be necessary in some cases, such as when flawless performance is
              required. At Elite IT, we have a team of dedicated developers with
              experience in building native apps for both Android and iOS, as
              well as in using cross-platform frameworks to create apps that can
              be used on multiple platforms. We take the time to understand the
              needs of each client and recommend the best approach for their
              specific project.
            </p>
            <p className="primary_para">
              Using a single codebase for cross-platform mobile development can
              have several benefits. By eliminating the need to write separate
              code for each platform, developers can save time and resources. A
              single codebase also allows developers to share code between
              different platforms, reducing the total amount of code that needs
              to be written and maintained. This can make it easier to manage
              resources, as both the Android and iOS development teams can learn
              to use the shared code. Fewer lines of code also means there are
              fewer opportunities for bugs to emerge, which can save time on
              testing and maintenance.
            </p>
          </div>
          <div className={styles.crossPlatform_content_right}>
            <p className="primary_para">
              In addition, cross-platform technologies are often viewed as
              desirable elements in a product's tech stack by mobile engineers.
              Having a modern tech stack can make it easier to hire new team
              members and expand your mobile development capabilities. Using
              cross-platform frameworks like Xamarin, React Native, and Flutter
              can also help you reach a wider audience at a lower cost, as you
              can distribute your app across multiple platforms using a single
              programming language. This can be especially useful for clients
              who don't need extremely speed-sensitive apps or custom
              integrations.
            </p>
          </div>
        </div>
      </div>
      {/* **************** Footer **************** */}
      <Footer />
    </>
  );
};

export default MApp;
