import React from 'react';
import styles from './index.module.scss';

function Index(props) {
  const { val, onChange, name } = props;
  return (
    <div className={`${styles.switchContainer}  mb-4`}>
      <div className="mb-1">
        <span className="label">Approved Commodity</span>
      </div>
      <div className="mt-4">
        <span className={` ${styles.yes} text-color`}>No</span>
        <label className={styles.switch}>
          <input type="checkbox" checked={val ? 'checked' : ''} name={name} onChange={onChange}></input>
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
        <span className={`${styles.no} text-color`}>Yes</span>
      </div>
    </div>
  );
}
export default Index;
