import React from "react";
import styles from "./Navbar.module.scss";
import { Logo } from "../../../assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.navbar_container}>
        <img src={Logo} alt="Logo" />
        <div className={styles.navbar_container_menu}>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <select>
            <option value="1">Services</option>

            <option value="2">Web Development</option>

            <option value="3">IT Support</option>
            <option value="4">Hardware & Software Procurement</option>
            <option value="5">VOIP Broadband</option>
            <option value="6">Hosted Services and Virtualization</option>
            <option value="7">Networking & Wifi</option>
            <option value="8">Cyber Security</option>
            <option value="9">Mobile App Development Services</option>
            <option value="10">AR/VR</option>
            <option value="11">CCTV & DOOR Access</option>
          </select>
          <button>Work</button>
          <button>Blogs</button>
          <button>Careers</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
