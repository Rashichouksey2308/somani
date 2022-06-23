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
  <div className={`${styles.card} container-fluid tabHeader`}>
      <div className={styles.head_header}>
          <img className={`${styles.arrow} img-fluid`}
            src="/static/keyboard_arrow_right-3.svg" alt="arrow"/>
          <h1 className={`${styles.heading} heading`}>Termsheet</h1>       
      </div>
      <div className='pb-4'>
          <div className={`${styles.card_body} card-body container-fluid`}>  
              <div className="row">
                  <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                  <h3 className={`${styles.label} label_heading`}>Customer ID</h3>
                      <p className={`${styles.value} accordion_Text`}>2FCH6589</p>
                  </div>
                  <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <h3 className={`${styles.label} label_heading`}>Buyers Name</h3>
                      <p className={`${styles.value} accordion_Text`}>Madhwani Group</p>
                  </div>
                  <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <h3 className={`${styles.label} label_heading`}>Created On</h3>
                      <p className={`${styles.value} accordion_Text`}>25-3-2022</p>
                  </div>
                  <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <h3 className={`${styles.label} label_heading`}>Last Modified</h3>
                      <p className={`${styles.value} accordion_Text`}>15-04-2022</p>
                  </div>
                  <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <h3 className={`${styles.label} label_heading`}>Approved Date</h3>
                      <p className={`${styles.value} accordion_Text`}>8-5-2022</p>
                  </div>
                  <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <h3 className={`${styles.label} label_heading`}>Status</h3>
                      <p className={`${styles.value} accordion_Text`}><span className={`${styles.status}`}></span>Approved</p>
                  </div>
              </div>
          </div>
          <TermDetails />
          <AdditionalComment />
          <OtherTerms />
          <UploadOther />
      </div>
  </div>
  <ApproveBar button={"Save"} button2={"Preview"}/>
  </>

  )
}

export default index
