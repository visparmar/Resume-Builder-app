import React from "react";

import sampleResume from "../images/sampleResume.jpg";
import logo from "../images/logo.png";
import sampleResume1 from "../images/sampleResume1.jpg";
import resumeSvg from "../images/resume.svg";
// import Navbar from "./Navbar.js";

import styles from "./Header.module.css";

function Header() {
  return (<div className={styles.container1}>

    <div className={styles.navbar}>
      <img src={logo} alt="logo" />

      <ul className={styles.content}>
        <li className={styles.lo}>Resume</li>
        <li>cover Letter</li>
        <li>Resume Writing</li>
        <li>About</li>
      </ul>
      <div className={styles.btn}>
        <button className={styles.button}>Login</button>
        <button className={styles.button}>sign Up</button>
      </div>
    </div>
    <div className={styles.container}>


      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <div class={styles.gallery}>
          <img src={sampleResume} alt="a dream catcher" />
          <img src={sampleResume} alt="a dream catcher" />
          <img src={sampleResume} alt="a dream catcher" />
          <img src={sampleResume} alt="a dream catcher" />

        </div>
      </div>
    </div>

  </div>
  );
}

export default Header;
