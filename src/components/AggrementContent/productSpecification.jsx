/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.paymet} card-body`}>
     <div className={`d-flex justify-content-between align-items-between`}>
       <input placeholder={`5000 Wet Metric Tons (Wmt) +/- 10Pct Of Mmd: Manganeseore Of Gabon Origin (44,50Pct Mn Typical - 5Pct Moisture), Ciffo Visakhapatnam Port Packing In Bulk.`}></input>
       <img className="img-fluid ml-4" src="/static/add-btn.svg" alt="add button"></img>
     </div>
     <div className={`${styles.button_container} d-flex justify-content-start  align-items-center `}>
        <div className={`${styles.button} d-flex justify-content-center align-items-center`}>
           <span>Upload Specifications</span>
        </div>
        <div className={`${styles.file_text}`}>
            <span><span className={`${styles.danger} mr-2`}>* </span>ONLY .XLS FILES ARE ALLOWED & MAX FILE SIZE UP TO 50 MB</span>
        </div>
     </div>
     <span>Comments</span>
     <div className={`d-flex justify-content-between align-items-center ${styles.comment}`}>
       <input placeholder={`5000 Wet Metric Tons (Wmt) +/- 10Pct Of Mmd: Manganeseore Of Gabon Origin (44,50Pct Mn Typical - 5Pct Moisture), Ciffo Visakhapatnam Port Packing In Bulk.`}></input>
       <div className={`d-flex justify-content-evenly align-items-center`}>
         <img className="img-fluid ml-4" src="/static/add-btn.svg" alt="add button"></img>
         <img src="/static/delete 2.svg" className="img-fluid" alt="delete"></img>
       </div>
     </div>
     </div>
 
      </div>
    </>
  )
}

export default Index
