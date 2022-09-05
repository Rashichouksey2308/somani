import React from 'react'
import styles from './index.module.scss'

function index({ barName, openbar }) {
  return (
    <div className={`${styles.root} cta_bar`}>
      <div className={styles.reject}>
        <span>{barName}</span>
        <img
          src="/static/file_download.svg"
          className="img-fluid"
          alt="FileDownload"
        />
      </div>
      <div className={styles.navigate}>
        <span>2</span> / 10
        <div style={{ color: '#66708559' }}> | </div>
        <div className={styles.button}></div>
        <span className={styles.zoom}>80%</span>
        <img src="/static/add-3.svg" className="img-fluid" alt="Add" />
        <div style={{ color: '#66708559' }}> | </div>
        <img src="/static/expand.svg" className="img-fluid" alt="Expand" />
      </div>
      <div
        className={`${styles.approve} ml-3`}
        onClick={() => {
          openbar()
        }}
      >
        <span>Share</span>
      </div>
    </div>
  )
}

export default index
