import React from 'react'
import styles from './index.module.scss'

const index = () => {
  return (
    <div className={styles.main}>
      <form id="documentDetail">
        <div className={styles.heading}>Documents</div>

        <div className={`${styles.input_container} row`}>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <label className={styles.label_heading} id="dropDoc">
              Type Of Document
            </label>
            <select
              id="dropDoc"
              className={`${styles.input_field} form-control`}
            >
              <option value="doc1">Incorporation Certificate</option>
              <option value="doc2">Certificate</option>
            </select>
          </div>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <div className={styles.label_heading}>Attach Document</div>
            <input
              type="file"
              name="backgroundVideo"
              id="bgVideoUpload"
              accept="video/mp4, .mkv"
              onChange={(e) => {
                handleMultimediaChange(e)
              }}
            />
          </div>

          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <div className={styles.image_card} style={{ marginTop: 19 }}>
              <img className={styles.image_delete} src="/static/delete.svg" />
            </div>
          </div>
          <hr className={styles.hr_line}></hr>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <select className={`${styles.input_field} form-control`}>
              <option value="cert1">GST Certification</option>
              <option value="cert2">Certification</option>
            </select>
          </div>

          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <input
              type="file"
              name="backgroundVideo"
              id="bgVideoUpload"
              accept="video/mp4, .mkv"
              onChange={(e) => {
                handleMultimediaChange(e)
              }}
            />
          </div>
          <hr className={styles.hr_line}></hr>
          <div className={`${styles.add_document} col-md-12`}>
            <img className={styles.add_image} src="/static/Group 550.svg" />
            <p className={styles.add_para}>Add More Documents</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default index
