import React, { useState } from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import Vector from "../../assets/VectorProvinsi.png";
import Vector1 from "../../assets/Vector1.svg";
import DataGlobal from "../../assets/DataGlobal.png";
import CardMonitor from "../../components/CardMonitor";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Table from "../../components/Table";
const Provinsi = () => {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* CONTAINER 1  */}
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.display}>Covid ID</h1>
          <p className={styles.subtitle}>Monitoring Perkembangan Covid</p>

          <p className={styles.paragraf}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>

          <Button />
        </div>
        <div className={styles.right}>
          <img src={Vector1} alt="vector" />
        </div>
      </div>
      {/* CONTAINER 1 END */}

      {/* CONTAINER 2  */}

      <div className={styles.container2}>
        <h1 className={styles.display}>Provinsi</h1>
        <p className={styles.display2}>Data Covid Berdasarkan Provinsi</p>
        <Table />
      </div>

      {/* CONTAINER 2 END  */}

      {/* CONTAINER 3  */}

      <div className={styles.container} style={{ backgroundColor: "#F8F9FA" }}>
        <div className={styles.left}>
          <img src={Vector} alt="vector" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.display1}>FORM COVID</h2>
          <Form />
        </div>
      </div>

      {/* CONTAINER 3 END  */}

      <Footer />
    </main>
  );
};

export default Provinsi;
