import React, { useState } from "react";
import styles from "../styles/Table.module.css";
import data from "../utils/provinces";

const Table = ({
  id = 1,
  provinsi = "aceh",
  positif = 0,
  sembuh = 0,
  dirawat = 0,
  meniggal = 0,
}) => {
  const [kota, setKota] = useState(data.provinces);
  console.log(kota);
  return (
    <table>
      <tr>
        <td className={styles.display1}>No</td>
        <td className={styles.display}>Provinsi</td>
        <td className={styles.display}>Positif</td>
        <td className={styles.display}>Sembuh</td>
        <td className={styles.display}>Dirawat</td>
        <td className={styles.display}>Meninggal</td>
      </tr>
      {kota.map((e, i) => {
        return (
          <tr>
            <td className={styles.kolom1}>{i + 1}</td>
            <td className={styles.kolom2}>{e.kota}</td>
            <td className={styles.kolom2}>{e.kasus}</td>
            <td className={styles.kolom2}>{e.sembuh}</td>
            <td className={styles.kolom2}>{e.dirawat}</td>
            <td className={styles.kolom2}>{e.meninggal}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
