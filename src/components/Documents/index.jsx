/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from './index.module.scss';
// import { settingDocument } from 'redux/registerBuyer/action'
const Index = ({
  saveDocument,
  uploadDocument1,
  uploadDocument2,
  darkMode,
  documents,
  onAddDoc,
  deleteData,
  addDoc,
  removeDoc,
  addTypeOfDoc,
  documentApi,
}) => {
  const [list, setList] = useState([{ typeDocument: 'Certificate', attachDoc: 'false' }]);
  const [name, setName] = useState(null);
  const [secondDocName, setSecondDocName] = useState(null);
  return (
    <div className={`${styles.main} border_color`}>
      <h3 className={`${styles.heading} heading_card_switch_blue`}>Documents</h3>
      <form id="documents">
        <div className={`${styles.input_container} row align-items-center`}>
          {documents &&
            documents?.map((val, index) => {
              return (
                <>
                  <div className={`${styles.each_input} col-md-12 col-sm-6 col-lg-4 `}>
                    <div className={`${styles.label_heading} label_heading`}>Type Of Document</div>
                    <div className="d-flex">
                      <select
                        className={`${styles.input_field} ${styles.customSelect} input form-control`}
                        name="1"
                        onChange={(e) => {
                          addTypeOfDoc(e.target.value, index);
                        }}
                      >
                        <option>Select an option</option>
                        {documentApi
                          ?.filter((val, index) => {
                            if (val.Sub_Module == 'Leads') {
                              return val;
                            }
                          })
                          ?.map((val, index) => {
                            return <option value={`${val.Document_Name}`}>{val.Document_Name}</option>;
                          })}
                      </select>
                      <img
                        className={`${styles.arrow} image_arrow img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                  <div className={`${styles.each_input} col-md-6 col-sm-6 col-6 col-lg-4`}>
                    <div className={`${styles.label_heading} label_heading`}>Attach Document</div>
                    {val.attachDoc == '' ? (
                      <div className={styles.uploadBtnWrapper}>
                        <input
                          type="file"
                          name="myfile"
                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                          onChange={(e) => {
                            addDoc(e.target.files[0], index);
                            // uploadDocument2(e)
                          }}
                        />
                        <button className={`${styles.button_upload} btn`}>Upload</button>
                      </div>
                    ) : (
                      <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                        <span className="text-color">{val.attachDoc.name}</span>
                        <img
                          className={`${styles.close_image} image_arrow`}
                          src="/static/close.svg"
                          onClick={() => removeDoc(index)}
                          alt="Close"
                        />{' '}
                      </div>
                    )}
                  </div>
                  <div className={`${styles.each_input} col-md-6 col-sm-6 col-6 text-right text-sm-left col-lg-4`}>
                    <div className={`${styles.label_heading} label_heading`}>Action</div>
                    <div onClick={() => setSecondDocName(null)} className={styles.image_card}>
                      <img
                        className={styles.image_delete}
                        src="/static/delete.svg"
                        alt="Delete"
                        onClick={() => {
                          deleteData(index);
                        }}
                      />
                    </div>
                  </div>
                  <hr className={`${styles.hr_line} border_color`}></hr>
                </>
              );
            })}
          {/* {list &&
            list.map((val, index) => (
              <>
                <div
                  className={`${styles.each_input} col-md-12 col-sm-6 col-lg-4 `}
                >
                  <div className="d-flex">
                    <select
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      name="1"
                      onChange={(e) => {
                        saveDocument(e)
                      }}
                    >
                      <option selected></option>
                      <option value="GST Certification" selected>
                        GST Certification
                      </option>
                      <option value="Incorporation Certification">
                        Incorporation Certification
                      </option>
                    </select>
                    <img
                      className={`${styles.arrow} img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>
                <div
                  className={`${styles.each_input} col-md-6 col-sm-6 col-6 col-lg-4`}
                >
                  {!secondDocName ? (
                    <div className={styles.uploadBtnWrapper}>
                      <input
                        type="file"
                        name="myfile"
                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                        onChange={(e) => {
                          setSecondDocName(e.target.files[0].name,index)
                          uploadDocument2(e)
                        }}
                      />
                      <button className={`${styles.button_upload} btn`}>
                        Upload
                      </button>
                    </div>
                  ) : (
                    <div className={`${styles.certificate} d-flex justify-content-between`}>
                      <span>
                        {secondDocName}
                      </span>
                      <img
                        className={`${styles.close_image}`}
                        src="/static/close.svg"
                        onClick={() => setSecondDocName(null)}
                        alt="Close"
                      />{' '}
                    </div>
                  )}
                </div>
                <div
                  className={`${styles.each_input} col-md-6 col-sm-6 col-6 text-right text-sm-left col-lg-4`}
                >
                  <div
                    onClick={() => setSecondDocName(null)}
                    className={styles.image_card}
                  >
                    <img
                      className={styles.image_delete}
                      src="/static/delete.svg"
                      alt="Delete"
                      onClick={()=>{
                        deleteData(index)
                      }}
                    />
                  </div>
                </div>
                <hr className={styles.hr_line}></hr>
              </>
            ))} */}
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
            <div className={`${styles.certificate} d-flex justify-content-between`}>
              <span>
                {secondDocName}
              </span>
              <img
                className={`${styles.close_image}`}
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
            <p
              className={`${styles.add_para} d-flex align-items-center`}
              onClick={(e) => {
                onAddDoc();
              }}
            >
              <img className={`${styles.add_image}`} src="/static/add.svg" alt="Add" />
              Add More Documents
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Index;