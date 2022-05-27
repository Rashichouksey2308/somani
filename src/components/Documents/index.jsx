import React from 'react'
import styles from './index.module.scss'

const index = () => {

  return (
    <div className={styles.main}>
      <div className={styles.heading}>Documents</div>


      <div className={`${styles.input_container} row`}>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <label className={styles.label_heading}
            id="dropDoc">Type Of Document</label>
          <select
            id="dropDoc"
            className={`${styles.input_field} form-control`} >
            <option value="doc1">Incorporation Certificate</option>
            <option value="doc2">Certificate</option>
          </select>

        </div>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <div className={styles.label_heading}>Attach Document</div>
          <div
            className={styles.certificate}>
            Incorporation_Certification267576332.pdf
            <img className={styles.close_image} src="/static/close.svg" alt="Close" /> </div>
        </div>

        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <div className={styles.image_card}
            style={{ marginTop: 19 }}>
            <img className={styles.image_delete} src="/static/delete.svg" />
          </div>

        </div>
        <hr className={styles.hr_line}></hr>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <select
            className={`${styles.input_field} form-control`} >
            <option value="cert1">GST Certification</option>
            <option value="cert2">Certification</option>

          </select>

        </div>

        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
        <div className={styles.uploadBtnWrapper}>
                  <input type="file" name="myfile" />
                  <button className={`${styles.button_upload} btn`}>Upload</button>
                   </div>
        </div>

        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <div className={styles.image_card}>
            <img className={styles.image_delete} src="/static/delete.svg" alt="Delete"/>
          </div>

        </div>
        <hr className={styles.hr_line}></hr>
        <div className={`${styles.add_document} col-md-12`}>
          <img className={styles.add_image} src="/static/add.svg" alt="Add"/>
          <p className={styles.add_para}>Add More Documents</p>
        </div>
      </div>
    </div>
  );
}



export default index
