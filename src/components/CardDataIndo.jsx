import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../styles/CardDataIndo.module.css";
import DataIndo from "./DataIndo";
const CardDataIndo = () => {
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
    <div className={styles.containerCard}>
      <div className={styles.left}>
        <div className={styles.judul}>
          <h2 className="subtitle">COVID-19 API</h2>
          <h3 className={styles.subtitle}>indonesia</h3>
        </div>
        <div className={styles.update}>
          <p>Last update :</p>
          <p className={styles.time}>{data.lastUpdate}</p>
          <p>
            with ♥ by <span className={styles.username}>@sandwhy</span>
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <DataIndo
          nominal={data.confirmed?.value}
          display="none"
          color="black"
          title="CONFIRMED"
        />
        <DataIndo nominal={data.recovered?.value} color="green" />
        <DataIndo nominal={data.deaths?.value} title="DEATHS" />
      </div>
    </div>
  );
};

export default CardDataIndo;
