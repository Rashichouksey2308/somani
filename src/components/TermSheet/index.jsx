import React from 'react'
import styles from './index.module.scss'
import TermDetails from '../TermDetails'
import AdditionalComment from '../AdditionalComment'
import OtherTerms from '../OtherTerms'
import UploadOther from  '../UploadOther'
import ApproveBar from '../ApproveBar'

const index = () => {
  return (

  <>
    <div className={`${styles.card}`}>
      <div className={styles.head_header}>
          <img className={`${styles.arrow} img-fluid`}
            src="/static/keyboard_arrow_right-3.svg" alt=""arrow/>
          <h1 className={styles.heading}>Termsheet</h1>
       
      </div>

      <div>
      <div className={`${styles.card_body} container-fluid`}>  
        <div className="row">
            <div className={`${styles.form_group} col-md-2`}>
            <h3 className={styles.label}>Customer ID</h3>
                <p className={styles.value}>2FCH6589</p>
            </div>
            <div className={`${styles.form_group} col-md-2`}>
                <h3 className={styles.label}>Buyers Name</h3>
                <p className={styles.value}>Madhwani Group</p>
            </div>
            <div className={`${styles.form_group} col-md-2`}>
                <h3 className={styles.label}>Created On</h3>
                <p className={styles.value}>25-3-2022</p>
            </div>
            <div className={`${styles.form_group} col-md-2`}>
                <h3 className={styles.label}>Last Modified</h3>
                <p className={styles.value}>15-04-2022</p>
            </div>
            <div className={`${styles.form_group} col-md-2`}>
                <h3 className={styles.label}>Approved Date</h3>
                <p className={styles.value}>8-5-2022</p>
            </div>
            <div className={`${styles.form_group} col-md-2`}>
                <h3 className={styles.label}>Status</h3>
                <p className={styles.value}><span className={`${styles.status}`}></span>Approved</p>
            </div>
                    
                </div>
            </div>
          
          <TermDetails/>
          <AdditionalComment/>
          <OtherTerms/>
          <UploadOther/>
      </div>

    </div>
    <ApproveBar button={"Save"} button2={"Preview"}/>
  </>

  )
}

export default index
