/*eslint-disable*/

import React from 'react';
import styles from './index.module.scss';

const Index = () => {
  return (
    <div className={`${styles.tw_toggle}`}>
      <input type="radio" className={styles.toggle_left} name="toggle" value="false" />
      <label className={`${styles.toggle} ${styles.toggle_label_left}`}>
        <img src="/static/check.svg" className={`${styles.toggle_check} img_fluid`} alt="check" />
      </label>
      <input className={styles.toggle_between} type="radio" name="toggle" value="-1" />
      <label className={`${styles.toggle} ${styles.toggle_label_between}`}></label>
      <input type="radio" className={styles.toggle_right} name="toggle" value="true" />
      <label className={`${styles.toggle} ${styles.toggle_label_right}`}>
        <img src="/static/close-b.svg" className={`${styles.toggle_close} img_fluid`} alt="close" />
      </label>
      <span></span>
    </div>
  );
};

export default Index;
