import React from "react";
import styles from "../styles/CardDataIndo.module.css";

const DataIndo = ({
  nominal = 123213213213,
  color = "red",
  display = "flex",
  title = "RECOVERED",
}) => {
  var bilangan = nominal;
  var number_string = bilangan.toString();
  var sisa = number_string.length % 3;
  var rupiah = number_string.substr(0, sisa);
  var ribuan = number_string.substr(sisa).match(/\d{3}/g);

  if (ribuan) {
    var separator = sisa ? "," : "";
    rupiah += separator + ribuan.join(",");
  }
  return (
    <div className={styles.right}>
      {/* <div className={styles.confirmed}>
        <p className="subtitle">confirmed</p>
        <p className={styles.nilaiConfirmed}>{rupiah}</p>
      </div> */}

      <div className={styles.recovered}>
        <p className="subtitle">{title}</p>
        <p className={styles.nilaiRecovered} style={{ color: color }}>
          {rupiah}
        </p>
        <div
          className={styles.rangeRecovered}
          style={{ backgroundColor: color, display: display }}
        >
          <p>0% RECOVERY RATE</p>
        </div>
      </div>

      {/* <div className={styles.deaths}>
        <p className="subtitle">Deaths</p>
        <p className={styles.nilaiDeaths}>{rupiah}</p>
        <div className={styles.rangeDeaths}>
          <p className="paragraf">2% FATALITY RATE</p>
        </div>
      </div> */}
    </div>
  );
};

export default DataIndo;
