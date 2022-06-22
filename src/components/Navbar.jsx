import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Covid ID</h1>

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
        <Link to={"/"} className={styles.link}>
          About
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
