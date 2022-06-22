import React from "react";
import styles from "../styles/Form.module.css";
const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="provinsi">Provinsi</label>
        <input type="text" name="provinsi" id="provinsi" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="status">Status</label>
        <input type="text" name="status" id="status" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="jumlah">Jumlah</label>
        <input type="text" name="jumlah" id="jumlah" />
      </div>

      <button className={styles.button}>submit</button>
    </form>
  );
};

export default Form;
