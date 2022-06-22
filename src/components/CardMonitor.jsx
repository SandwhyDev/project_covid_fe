import React from "react";
import styles from "../styles/CardMonitor.module.css";
const CardMonitor = ({
  judul = "judul",
  nominal = 5005646,
  color = "black",
}) => {
  var bilangan = nominal;
  var number_string = bilangan.toString();
  var sisa = number_string.length % 3;
  var rupiah = number_string.substr(0, sisa);
  var ribuan = number_string.substr(sisa).match(/\d{3}/g);

  if (ribuan) {
    var separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  return (
    <div className={styles.cardContainer}>
      <h2 >{judul}</h2>
      <h1 className={styles.display} style={{ color: color }}>
        {rupiah}
      </h1>
    </div>
  );
};

export default CardMonitor;
