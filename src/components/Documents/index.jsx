import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
// import { settingDocument } from 'redux/registerBuyer/action'
import { useDispatch } from 'react-redux'

const index = ({ saveDocument, uploadDocument1, uploadDocument2, darkMode }) => {
  const [name, setName] = useState(null)

  const [secondDocName, setSecondDocName] = useState(null)
  

  // let formData = new FormData();

  // const handleMultimediaChange = (e) => {
  //   e.preventDefault()
  //   // console.log(
  //   //   "🚀 ~ file: index.jsx ~ line 72 ~ handleMultimediaChange ~ e",
  //   //   e
  //   // );
  //   // console.log(e.target.files[0], "handlechange file")

  //   let formData = new FormData();
  //   var fileTypes = ['.doc', '.pdf', '.txt']
  //   const file = e.target.files[0]
  //   if (e.target.files[0]) {
  //     var extension = e.target.files[0].name.split('.').pop().toLowerCase()
  //       // isSuccess = fileTypes.indexOf(extension) > -1
  //     if (extension === ".txt"  || extension === ".pdf" || extension === ".doc" || extension === ".docx") {
  //       // let file = e.target.files[0]
  //       // let name = e.target.name
  //       // formData.append(name, file)
  //       // console.log("failure")
  //       // console.log(file.type, "file type2")
  //       // return false
  //     } else {
  //       //error message
  //       // console.log("inside else block")
  //       // console.log(extension, "ext")
  //       // console.log(file.type, "file type")
  //       // console.log(isSuccess, "succ")
  //       setDocument1(e.target.files[0])
  //       setName(e.target.files[0].name)

  //     }
  //   }
  // //   console.log(formData.values(),"values")
  // //   for (var value of formData.values()) {
  // //     console.log(value,"value");
  // //  }
  //   // e.target.file = null;
  // }

  return (
    <div className={`${darkMode?styles.mainDark:styles.main}`}>
      <div  className={`${styles.heading} heading_card`}>Documents</div>

      <div className={`${styles.input_container} row align-items-center`}>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <label className={`${styles.heading} label_heading`} id="dropDoc">
            Type Of Document<strong className='text-danger'>*</strong>
          </label>
          <select
            id="dropDoc"
            name="0"
            onChange={(e) => {
              saveDocument(e)
            }}
            className={`${styles.input_field} form-control`}
          >
            <option value="Incorporation Certificate" selected>
              Incorporation Certificate
            </option>
            <option value="Certificate">Certificate</option>
          </select>
        </div>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <label className={`${styles.label_heading} label_heading`}>Attach Document<strong className='text-danger'>*</strong></label>
          {!name ? (
            <div className={styles.uploadBtnWrapper}>
              <input
                type="file"
                name="myfile"
                accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                onChange={(e) => {
                  setName(e.target.files[0].name)
                  uploadDocument1(e)
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
            <option value="GST Certification" selected>GST Certification</option>
            <option value="Certification">Certification</option>
          </select>
        </div>

        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          {!secondDocName ? (
            <div className={styles.uploadBtnWrapper}>
              <input
                type="file"
                name="myfile"
                accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                onChange={(e) => {
                  setSecondDocName(e.target.files[0].name)
                  uploadDocument2(e)
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
