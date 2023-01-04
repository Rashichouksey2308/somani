import React from 'react';
import styles from './index.module.scss';

export default function index(props) {
  const { handle } = props;
  return (
    <div className={`${styles.main} mt-4 card border_color`}>
      <div className={`${styles.btn_sec}`}>
        <button className={`${styles.btn_updated}`}>Update Current Unit Price</button>
        <button className={`${styles.btn_green}`} onClick={handle}>
          Send For Approval
        </button>
      </div>
    </div>
  );
}
