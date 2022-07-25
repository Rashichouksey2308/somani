/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
// import { settingDocument } from 'redux/registerBuyer/action'
import { useDispatch } from 'react-redux'

const Index = ({ saveDocument, uploadDocument1, uploadDocument2, darkMode }) => {
 const [list,setList]=useState([
     {typeDocument:"Certificate",attachDoc:"false",
      actions:""
   },
       {typeDocument:"Certificate 2",attachDoc:"true",
      actions:""}
  
   ])

   const [name, setName] = useState(null)

  

    const onAddDoc = () => {
     setList([...list,{
       typeDocument:"",attachDoc:"",
       actions:"false"
     }])
    }


  const [secondDocName, setSecondDocName] = useState(null)
  

  return (
    <div className={`${styles.main} border_color`}>
      <div  className={`${styles.heading} heading_card_switch_blue`}>Documents</div>

      <div className={`${styles.input_container} row align-items-center`}>
        <div className={`${styles.each_input} col-md-12 col-sm-6 col-lg-4`}>
            <label className={`${styles.label_heading} label_heading mb-4`} id="dropDoc">
            Type Of Document
          </label>
           <div className="d-flex">
           
          <select
            id="dropDoc"
            name="0"
            onChange={(e) => {
              saveDocument(e)
            }}
            className={`${styles.input_field} ${styles.customSelect} input form-control`}
          >
            <option value="Incorporation Certificate" selected>
              Incorporation Certificate
            </option>
            <option value="Certificate">Certificate</option>
          </select>
          <img
            className={`${styles.arrow} img-fluid`}
            src="/static/inputDropDown.svg"
            alt="Search"
          />
           </div>

        </div>
        <div className={`${styles.each_input} col-md-6 col-sm-6 col-6 col-lg-4 `}>
          <label className={`${styles.label_heading} label_heading mb-4`}>Attach Document</label>
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
                className={`${styles.close_image} float-right m-2 img-fluid`}
                src="/static/close.svg"
                onClick={() => setName(null)}
                alt="Close"
              />{' '}
            </div>
          )}
        </div>

        <div className={`${styles.each_input} col-md-6 col-sm-6  col-6 text-right text-sm-left col-lg-4 `}>
        <label className={`${styles.label_heading} label_heading mb-4`}>Action</label>
          <div onClick={() => setName(null)} className={styles.image_card} style={{ marginTop: 19 }}>
            <img className={styles.image_delete} src="/static/delete.svg" />
          </div>
        </div>
        <hr className={styles.hr_line}></hr>

        

          
   {list && list.map((val,index) => ( <>    <div key={index}  className={`${styles.each_input} col-md-12 col-sm-6 col-lg-4 `}>
          <div className="d-flex">
            <select
            className={`${styles.input_field} ${styles.customSelect} input form-control`}
            name="1"
            onChange={(e) => {
              saveDocument(e)
            }}
          >
            <option value="GST Certification" selected>GST Certification</option>
            <option value="Certification">Certification</option>
          </select>
          <img
            className={`${styles.arrow} img-fluid`}
            src="/static/inputDropDown.svg"
            alt="Search"
          />
          </div>

        </div>

        <div className={`${styles.each_input} col-md-6 col-sm-6 col-6 col-lg-4`}>
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
                className={`${styles.close_image} float-right m-2 img-fluid`}
                src="/static/close.svg"
                onClick={() => setSecondDocName(null)}
                alt="Close"
              />{' '}
            </div>
          )}
        </div>

        <div  className={`${styles.each_input} col-md-6 col-sm-6 col-6 text-right text-sm-left col-lg-4`}>
          <div onClick={() => setSecondDocName(null)} className={styles.image_card}>
            <img
              className={styles.image_delete}
              src="/static/delete.svg"
              alt="Delete"
            />
          </div>
        </div>
        <hr className={styles.hr_line}></hr>
</> )) }
         {/* <div className={`${styles.each_input} col-md-12 col-sm-6 col-lg-4 `}>
          <div className="d-flex">
            <select
            className={`${styles.input_field} ${styles.customSelect} input form-control`}
            name="1"
            onChange={(e) => {
              saveDocument(e)
            }}
          >
            <option value="GST Certification" selected>GST Certification</option>
            <option value="Certification">Certification</option>
          </select>
          <img
            className={`${styles.arrow} img-fluid`}
            src="/static/inputDropDown.svg"
            alt="Search"
          />
          </div>

        </div>

        <div className={`${styles.each_input} col-md-6 col-sm-6 col-6 col-lg-4`}>
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
                className={`${styles.close_image} float-right m-2 img-fluid`}
                src="/static/close.svg"
                onClick={() => setSecondDocName(null)}
                alt="Close"
              />{' '}
            </div>
          )}
        </div>

        <div className={`${styles.each_input} col-md-6 col-sm-6 col-6 text-right text-sm-left col-lg-4`}>
          <div onClick={() => setSecondDocName(null)} className={styles.image_card}>
            <img
              className={styles.image_delete}
              src="/static/delete.svg"
              alt="Delete"
            />
          </div>
        </div>
        <hr className={styles.hr_line}></hr> */}


        <div className={`${styles.add_document} col-md-12`}>
          <img className={styles.add_image} src="/static/add.svg" alt="Add" />
          <p className={styles.add_para}
             onClick={(e) => {
                                 onAddDoc()
                               }}
           >Add More Documents</p>
        </div>
      </div>
    </div>
  )
}

export default Index
