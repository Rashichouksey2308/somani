import Router from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';

function Index({ btnName, handleSave, rightBtn, rightBtnClick }) {
  return (
    <div className={`${styles.root} cta_bar`}>
      <div className={styles.btn_file}>
        <span>{btnName} </span>
        <img
          src="/static/file_download.svg"
          className="img-fluid"
          alt="FileDownload"
        />
      </div>
    </div>
  );
}

export default Index;
