import React from 'react';
import styles from './index.module.scss';

function Index() {
  return (
    <div className={`${styles.main} mt-4 card border_color`}>
      <div className=" px-3">
        <div className={`${styles.form_group} d-flex justify-content-end  my-4`}>
          <button className={`${styles.add_btn}`}>Send For Approval</button>
        </div>
      </div>
    </div>
  );
}

export default Index;
