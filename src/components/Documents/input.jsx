<<<<<<< Updated upstream
import React from 'react';
import styles from './index.module.scss';
=======
import React from 'react'
import styles from './index.module.scss'
>>>>>>> Stashed changes

const index = () => {
  return (
    <div className={styles.main}>
<<<<<<< Updated upstream
      <form id="documentDetail">
=======
      <form id='documentDetail'>
>>>>>>> Stashed changes
        <div className={styles.heading}>Documents</div>

        <div className={`${styles.input_container} row`}>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
<<<<<<< Updated upstream
            <label className={styles.label_heading} id="dropDoc">
              Type Of Document
            </label>
            <select id="dropDoc" className={`${styles.input_field} form-control`}>
              <option value="doc1">Incorporation Certificate</option>
              <option value="doc2">Certificate</option>
=======
            <label className={styles.label_heading} id='dropDoc'>
              Type Of Document
            </label>
            <select id='dropDoc' className={`${styles.input_field} form-control`}>
              <option value='doc1'>Incorporation Certificate</option>
              <option value='doc2'>Certificate</option>
>>>>>>> Stashed changes
            </select>
          </div>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <div className={styles.label_heading}>Attach Document</div>
            <input
<<<<<<< Updated upstream
              type="file"
              name="backgroundVideo"
              id="bgVideoUpload"
              accept="video/mp4, .mkv"
              onChange={(e) => {
                handleMultimediaChange(e);
=======
              type='file'
              name='backgroundVideo'
              id='bgVideoUpload'
              accept='video/mp4, .mkv'
              onChange={(e) => {
                handleMultimediaChange(e)
>>>>>>> Stashed changes
              }}
            />
          </div>

          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <div className={styles.image_card} style={{ marginTop: 19 }}>
<<<<<<< Updated upstream
              <img className={styles.image_delete} src="/static/delete.svg" />
=======
              <img className={styles.image_delete} src='/static/delete.svg' />
>>>>>>> Stashed changes
            </div>
          </div>
          <hr className={styles.hr_line} />
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <select className={`${styles.input_field} form-control`}>
<<<<<<< Updated upstream
              <option value="cert1">GST Certification</option>
              <option value="cert2">Certification</option>
=======
              <option value='cert1'>GST Certification</option>
              <option value='cert2'>Certification</option>
>>>>>>> Stashed changes
            </select>
          </div>

          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <input
<<<<<<< Updated upstream
              type="file"
              name="backgroundVideo"
              id="bgVideoUpload"
              accept="video/mp4, .mkv"
              onChange={(e) => {
                handleMultimediaChange(e);
=======
              type='file'
              name='backgroundVideo'
              id='bgVideoUpload'
              accept='video/mp4, .mkv'
              onChange={(e) => {
                handleMultimediaChange(e)
>>>>>>> Stashed changes
              }}
            />
          </div>
          <hr className={styles.hr_line} />
          <div className={`${styles.add_document} col-md-12`}>
<<<<<<< Updated upstream
            <img className={styles.add_image} src="/static/Group 550.svg" />
=======
            <img className={styles.add_image} src='/static/Group 550.svg' />
>>>>>>> Stashed changes
            <p className={styles.add_para}>Add More Documents</p>
          </div>
        </div>
      </form>
    </div>
<<<<<<< Updated upstream
  );
};

export default index;
=======
  )
}

export default index
>>>>>>> Stashed changes
