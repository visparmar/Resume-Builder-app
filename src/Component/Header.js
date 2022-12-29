import React from "react";

import sampleResume3 from "../images/sampleResume3.png";
import sampleResume2 from "../images/sampleResume2.png";
import sampleResume4 from "../images/sampleResume4.jpg";
import logo from "../images/logo.png";
import sampleResume from "../images/sampleResume.jpg";
import resumeSvg from "../images/resume.svg";
// import Navbar from "./Navbar.js";

import styles from "./Header.module.css";

function Header() {
  return (<div className={styles.container1}>

    <div className={styles.navbar}>
      <img src={logo} alt="logo" />

      <nav >
   <ul>
      <li>
           <a href="#">HOME</a>
      </li>
      <li>
           <a href="#">SERVICES</a>
      </li>
      <li>
           <a href="#">CONTACT</a>
      </li>
      <li>
           <a href="#">ABOUT</a>
      </li>
   </ul>
</nav>
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
        <button className={styles.try}>Try it free</button>
      </div>
      <div className={styles.right}>
        <div class={styles.gallery}>
          <img src={sampleResume} alt="a dream catcher" />
          <img src={sampleResume2} alt="a dream catcher" />
          <img src={sampleResume3} alt="a dream catcher" />
          <img src={sampleResume4} alt="a dream catcher" />
      
          

        </div>
      </div>
    </div>

  </div>
  );
}

export default Header;
