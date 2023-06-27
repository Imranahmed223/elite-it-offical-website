import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Logo } from "../../../assets";
import { CgMenuRightAlt } from "react-icons/cg";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { Selecter } from "../..";

const Navbar = () => {
  const [dropDown, setDropDown] = useState("Services");
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const navigate = useNavigate();
  const dropdownData = [
    {
      id: 1,
      path: "/web",
      title: "Web Development",
    },

    {
      path: "/itsupport",
      title: "IT Support",
    },
    {
      path: "/procurement",
      title: "Hardware & Software Procurement",
    },
    {
      path: "/voip",
      title: "VOIP",
    },
    {
      path: "/hosted",
      title: "Hosted Services and Virtualization",
    },
    {
      path: "/networking",
      title: "Networking & Wifi",
    },
    {
      path: "/cyber",
      title: "Cyber Security",
    },
    {
      path: "/mobileapp",
      title: "Mobile App Development Services",
    },
    {
      path: "/arvr",
      title: "AR/VR",
    },
    {
      path: "/cctv",
      title: "CCTV & DOOR Access",
    },
  ];
  return (
    <>
      <div className={styles.navbar_container}>
        <img src={Logo} alt="Logo" />
        <div className={styles.navbar_container_menu}>
          <button onClick={() => navigate("/")}>Home</button>

          <button onClick={() => navigate("/about")}>About</button>

          <Selecter className="editselector" data={dropdownData} />
          <button onClick={() => navigate("/work")}>Work</button>
          <button onClick={() => navigate("/blog")}>Blogs</button>
          <button onClick={() => navigate("/career")}>Careers</button>
        </div>
      </div>

      {/* ######################## Responsive Bar ########################### */}
      <div className={styles.responsive}>
        <div className={styles.responsive_content}>
          <div className={styles.responsive_content_left}>
            <img src={Logo} alt="Elite_Logo" />
            <Selecter className="editselector" data={dropdownData} />
          </div>
          <CgMenuRightAlt className={styles.resIcon} onClick={toggleModal} />
        </div>
      </div>

      {/* ######################## Responsive Sidebar Modal ########################### */}
      {modal ? (
        <div className={styles.responsive_container} onClick={toggleModal}>
          <div className={styles.responsive_container_content}>
            <div className={styles.responsive_container_content_sidebar}>
              <div
                className={styles.responsive_container_content_sidebar_top}
              >

          <img src={Logo} alt="Elite_Logo" />
              </div>
              <div
                className={styles.responsive_container_content_sidebar_bottom}
              >
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/about")}>About</button>
                <button onClick={() => navigate("/work")}>Work</button>
                <button onClick={() => navigate("/blog")}>Blogs</button>
                <button onClick={() => navigate("/career")}>Careers</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
