import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <nav className={styles.footer}>
      <div className={styles.brands}>
        <h1>Covid ID</h1>
        <p className={styles.paragraf}>Developed by SandyIswahyudi</p>
      </div>

      <ul className={styles.ul}>
        <Link to={"/"} className={styles.link}>
          Global
        </Link>
        <Link to={"/indonesia"} className={styles.link}>
          Indonesia
        </Link>
        <Link to={"/provinsi"} className={styles.link}>
          Provinsi
        </Link>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Footer;
