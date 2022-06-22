import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import Vector from "../../assets/Vector1.svg";
import DataGlobal from "../../assets/DataGlobal.png";
import CardMonitor from "../../components/CardMonitor";
import Footer from "../../components/Footer";
import axios from "axios";
import CardDataIndo from "../../components/CardDataIndo";
const Indonesia = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api/countries/indonesia")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
          // console.log(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(data.confirmed?.value);

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
          <img src={Vector} alt="vector" />
        </div>
      </div>
      {/* CONTAINER 1 END */}

      {/* CONTAINER 2  */}

      <div className={styles.container2} style={{ backgroundColor: "#F8F9FA" }}>
        <h1 className={styles.display}>Indonesia</h1>
        <p className={styles.display2}>Data Covid Berdasarkan Indonesia</p>

        <div className={styles.containerCard}>
          <CardMonitor
            judul="Confirmed"
            nominal={data.confirmed?.value}
            color="#06D6A0"
          />
          <CardMonitor
            judul="Recovered"
            nominal={data.recovered?.value}
            color="#118AB2"
          />
          <CardMonitor
            judul="Death"
            nominal={data.deaths?.value}
            color="#EF476F"
          />
        </div>
      </div>

      {/* CONTAINER 2 END  */}

      {/* CONTAINER 3  */}

      <div className={styles.container3}>
        <h1 className={styles.display}>Summary</h1>
        <p className={styles.display2}>Summary Data Global</p>

        <CardDataIndo />
      </div>

      {/* CONTAINER 3 END  */}

      <Footer />
    </main>
  );
};

export default Indonesia;
