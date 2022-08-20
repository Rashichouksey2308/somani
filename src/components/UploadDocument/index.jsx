/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react'
import styles from './index.module.scss'

const Index = ({ uploadDocument1, uploadDocument2, docName }) => {
  const [vesselCertificate, setVesselCertificate] = useState()

  const vesselDocFunction = (e) => {
    console.log(e.target.files[0],  'THIS IS VESSEL CERTIFICATE')
    setVesselCertificate(e.target.files[0])
    uploadDocument1(e)
  }

  const handleClose = () => {
    setVesselCertificate(null)
  }

  return (
    <div className={`${styles.main} border_color card`}>
      <div
        className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
        data-toggle="collapse"
        data-target="#upload"
        aria-expanded="true"
        aria-controls="upload"
      >
        <h3 className={styles.heading}>Upload Documents</h3>
        <span>+</span>
      </div>
      <div
        id="upload"
        className="collapse"
        aria-labelledby="upload"
        data-parent="#upload"
      >
        <div className={`${styles.table_form}`}>
          <div className={styles.table_container}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table
                  className={`${styles.table} table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                >
                  <thead>
                    <tr>
                      <th>
                        DOCUMENT NAME{' '}
                        <img
                          className={`mb-1`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>
                      <th>
                        FORMAT{' '}
                        <img
                          className={`mb-1`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>
                      <th>
                        DOCUMENT DATE{' '}
                        <img
                          className={`mb-1`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table_row">
                      <td className={styles.doc_name}>
                        {docName}
                        <strong className="text-danger">*</strong>
                      </td>
                      <td>
                        <img
                          src="/static/pdf.svg"
                          className={`${styles.pdfImage} img-fluid`}
                          alt="Pdf"
                        />
                      </td>
                      <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                      <td>
                        {' '}
                        {vesselCertificate == null ? (
                        <>
                          <div className={styles.uploadBtnWrapper}>
                            <input
                              type="file"
                              name="myfile"
                              accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                              onChange={(e) => vesselDocFunction(e)}
                            />
                            <button className={`${styles.button_upload} btn`}>
                              Upload
                            </button>
                          </div>
                          {/* <div className={styles.uploadBtnWrapper}>
                      <input
                        type="file"
                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                        onChange={(e) => uploadDocument1(e)}
                        name="myfile"
                      />
                       <button  className={`${styles.uploadDoc} btn`}>
                        Upload
                      </button>
                    </div> */}
                        </>
                      ) : (
                        <div className={styles.certificate}>
                          {vesselCertificate?.name}
                          <img
                            className={`${styles.close_image} float-right ml-2 img-fluid`}
                            src="/static/close.svg"
                            onClick={()=> handleClose()}
                            alt="Close"
                          />{' '}
                        </div>
                      )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
