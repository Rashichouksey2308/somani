import React, { useState } from 'react'
import styles from './index.module.scss'

const index = ({ saveDocument }) => {
  const [name, setName] = useState(null)

  const [secondDocName, setSecondDocName] = useState(null)

  // let formData = new FormData();

  const handleMultimediaChange = (e) => {
    e.preventDefault()
    // console.log(
    //   "🚀 ~ file: index.jsx ~ line 72 ~ handleMultimediaChange ~ e",
    //   e
    // );

    let formData = new FormData();
    var fileTypes = ['.doc', '.pdf', '.txt']
    if (e.target.files[0]) {
      var extension = e.target.files[0].name.split('.').pop().toLowerCase(),
        isSuccess = fileTypes.indexOf(extension) > -1
      if (isSuccess) {
        let file = e.target.files[0]
        let name = e.target.name
        formData.append(name, file)
      } else {
        //error message
      }
    }
    console.log(formData.values(),"values")
    for (var value of formData.values()) {
      console.log(value,"value");
   }
    // e.target.file = null;
  }

  return (
    <div className={styles.main}>
      <div className={styles.heading}>Documents</div>

      <div className={`${styles.input_container} row`}>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <label className={styles.label_heading} id="dropDoc">
            Type Of Document
          </label>
          <select
            id="dropDoc"
            name="0"
            onChange={(e) => {
              saveDocument(e)
            }}
            className={`${styles.input_field} form-control`}
          >
            <option value="doc1">Incorporation Certificate</option>
            <option value="doc2">Certificate</option>
          </select>
        </div>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <div className={styles.label_heading}>Attach Document</div>
          {!name ? (
            <div className={styles.uploadBtnWrapper}>
              <input
                type="file"
                name="myfile"
                onChange={(e) => {
                  setName(e.target.files[0].name)
                  handleMultimediaChange(e)
                }}
              />
              <button className={`${styles.button_upload} btn`}>Upload</button>
            </div>
          ) : (
            <div className={styles.certificate}>
              {name}
              <img
                className={styles.close_image}
                src="/static/close.svg"
                onClick={() => setName(null)}
                alt="Close"
              />{' '}
            </div>
          )}
        </div>

        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <div className={styles.image_card} style={{ marginTop: 19 }}>
            <img className={styles.image_delete} src="/static/delete.svg" />
          </div>
        </div>
        <hr className={styles.hr_line}></hr>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <select
            className={`${styles.input_field} form-control`}
            name="1"
            onChange={(e) => {
              saveDocument(e)
            }}
          >
            <option value="cert1">GST Certification</option>
            <option value="cert2">Certification</option>
          </select>
        </div>

        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
        {!secondDocName ? (<div className={styles.uploadBtnWrapper}>
            <input
              type="file"
              name="myfile"
              onChange={(e) => {
                setSecondDocName(e.target.files[0].name)
                handleMultimediaChange(e)
              }}
            />
            <button className={`${styles.button_upload} btn`}>Upload</button>
          </div>
           ) : (
            <div className={styles.certificate}>
              {secondDocName}
              <img
                className={styles.close_image}
                src="/static/close.svg"
                onClick={() => setSecondDocName(null)}
                alt="Close"
              />{' '}
            </div>
          )}
        </div>

        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <div className={styles.image_card}>
            <img
              className={styles.image_delete}
              src="/static/delete.svg"
              alt="Delete"
            />
          </div>
        </div>
        <hr className={styles.hr_line}></hr>
        <div className={`${styles.add_document} col-md-12`}>
          <img className={styles.add_image} src="/static/add.svg" alt="Add" />
          <p className={styles.add_para}>Add More Documents</p>
        </div>
      </div>
    </div>
  )
}

export default index
