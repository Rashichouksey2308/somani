/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { GetDocuments, AddingDocument, DeleteDocument } from 'redux/creditQueueUpdate/action'
import { useDispatch, useSelector } from 'react-redux'

const Index = ({orderId}) => {
  const dispatch = useDispatch()
  const [editInput, setEditInput] = useState(true)

  const { documentsFetched } = useSelector((state) => state.review)

  useEffect(() => {
    sessionStorage.setItem('docId', orderId)
    dispatch(GetDocuments(`?order=${orderId}`))
  }, [dispatch, orderId])

  const [manualDocModule, setManualDocModule] = useState(true)
  const [newDoc, setNewDoc] = useState({
    document: [],
    order: orderId,
    name: '',
    module: 'Agreements, Insurance & LC Opening',
  })

  const uploadDocument2 = (e) => {
    const newUploadDoc1 = { ...newDoc }
    newUploadDoc1.document = e.target.files[0]
    setNewDoc(newUploadDoc1)
  }

  const uploadDocumentHandler = (e) => {
    e.preventDefault()

    const fd = new FormData()
    console.log(newDoc, newDoc.document, 'pdfFile', newDoc.module)
    fd.append('document', newDoc.document)
    fd.append('module', newDoc.module)
    fd.append('order', orderId)
    // fd.append('type', newDoc.type))
    fd.append('name', newDoc.name)

    dispatch(AddingDocument(fd))
  }

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false)
    } else {
      setEditInput(true)
      setNewDoc({...newDoc, [e.target.id]: e.target.value })
    }
  }
  return (
    <div className={`${styles.upload_main} upload_main`}>
      <div
        className={`${styles.head_container} border_color d-flex justify-content-between`}
        data-toggle="collapse"
        data-target="#uploadOther"
        aria-expanded="true"
        aria-controls="uploadOther"
      >
        <h3 className={styles.heading}>Document</h3>
        <span>+</span>
      </div>
      <div
        id="uploadOther"
        className="collapse"
        aria-labelledby="uploadOther"
        data-parent="#uploadOther"
      >
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
                        className={`${styles.sort_image} mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />
                    </th>
                    <th>
                      FORMAT{' '}
                      <img
                        className={`${styles.sort_image} mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />
                    </th>
                    <th>
                      DOCUMENT DATE{' '}
                      <img
                        className={`${styles.sort_image} mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />{' '}
                    </th>
                    <th width="30%">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table_row">
                    <td className={styles.doc_name}>
                      LC AMENDMENT DRAFT{' '}
                      <strong className="text-danger ml-0">*</strong>{' '}
                    </td>
                    <td>
                      <img
                        src="/static/pdf.svg"
                        className="img-fluid"
                        alt="Pdf"
                      />
                    </td>
                    <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                    <td colSpan={2}>
                      <button className={styles.updateBtn}>Update</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={`${styles.dashboard_form} card-body`}>
          <Form>
            <div className="row align-items-center pb-4">
              <div
                className={`${styles.drop_container} d-flex align-items-center justify-content-around col-sm-6`}
              >
                <div className="text-center">
                  <img
                    className={`${styles.upload_image} img-fluid`}
                    src="/static/browse.svg"
                    alt="Browse"
                    onChange={(e) => uploadDocument2(e)}
                  />
                  <p className={styles.drop_para}>
                    Drop Files here or
                    <br />
                    <div className={styles.uploadBtnWrapper}>
                      <input type="file"
                       accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                      onChange={(e) => uploadDocument2(e)} 
                      name="myfile"
                       />
                      <a href="#">Browse</a>
                    </div>
                  </p>
                </div>
              </div>
              <div className="col-md-4 offset-md-1 col-sm-6">
                <Form.Group className={styles.form_group}>
                  <div className="d-flex">
                    <select
                      className={`${styles.value} ${styles.customSelect} input form-control`}
                      id="name"
                      onChange={(e) => handleDropdown(e)}
                    >
                    <option value='LcDraft'>LC Draft </option>
                    <option value='lCAmmendmentDraft'> LC Ammendment Draft</option>
                    <option value='vesselCertificate'> Vessel certificate</option>
                    <option value='vesselCertificateContainerList'> Vessel Certificate, Container List</option>
                    <option value='policyDocumentMarine'> Policy Document - Marine</option>
                    <option value='policyDocumentStorage'> Policy Document - Storage</option>
                    <option value='policyDocumentMarine'> Policy Document - Marine</option>
                    <option value='policyDocumentStorage'> Policy Document - Storage</option>
                      <option value="Others">Others</option>
                    </select>
                    <Form.Label className={`${styles.label} label_heading`}>
                      Document Type
                    </Form.Label>
                    <img
                      className={`${styles.arrow} img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </Form.Group>
                <Form.Group className={styles.form_group}>
                <Form.Label className={`${styles.label} label_heading`}>
                    Please Specify Document Name
                  </Form.Label>
                  <input
                    onChange={(e) =>
                      setNewDoc({ ...newDoc, name: e.target.value })
                    }
                    className={`${styles.value} input form-control`}
                    type="text"
                    // disabled={manualDocModule}
                  />
                </Form.Group>
                <div className={styles.uploadBtnWrapper}>
                  <button
                    onClick={(e) => uploadDocumentHandler(e)}
                    className={`${styles.upload_button} btn`}
                    // disabled={editInput}
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>

        <div className={styles.table_container}>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <div
                className={`${styles.search_container} p-2 pl-4 d-flex justify-content-between align-items-center`}
              >
                <div>
                  <select className={`${styles.dropDown} input form-control`}>
                
                    <option>Lead Onboarding &amp; Order Approval</option>
                    <option>Agreements, Insurance & LC Opening</option>
                    <option>Loading-Transit-Unloading</option>
                    <option>Custom Clearance And Warehousing</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div
                  className={`d-flex align-items-center ${styles.searchBarContainer} `}
                >
                  <img
                    className={` ${styles.searchImage} img-fluid`}
                    src="/static/search.svg"
                    alt="Search"
                  ></img>
                  <input
                    className={`${styles.searchBar} input form-control`}
                    placeholder="Search"
                  ></input>
                </div>
              </div>
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
                        className={`${styles.sort_image} mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />
                    </th>
                    <th>
                      FORMAT{' '}
                      <img
                        className={`${styles.sort_image} mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />
                    </th>
                    <th>
                      DOCUMENT DATE{' '}
                      <img
                        className={`${styles.sort_image} mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />
                    </th>
                    <th>
                      UPLOADED BY{' '}
                      <img
                        className={`${styles.sort_image} mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />
                    </th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                {documentsFetched &&
                    documentsFetched?.documents?.map((document, index) => {
                      if (document.deleted) {
                        return null
                      } else {
                        return (
                          <tr key={index} className="uploadRowTable">
                            <td className={`${styles.doc_name}`}>
                              {document.name}
                            </td>
                            <td>
                              <img
                                src="/static/pdf.svg"
                                className="img-fluid"
                                alt="Pdf"
                              />
                            </td>
                            <td className={styles.doc_row}>{document.date}</td>
                            <td className={styles.doc_row}>
                              {document.uploadedBy?.fName}{' '}
                              {document.uploadedBy?.lName}
                            </td>
                            <td>
                              <span
                                className={`${styles.status} ${styles.approved}`}
                              ></span>
                              {document?.verification?.status}
                            </td>
                            <td colSpan="2">
                              <img
                                onClick={() =>
                                  dispatch(
                                    DeleteDocument({
                                      orderDocumentId: documentsFetched._id,
                                      name: document.name,
                                    }),
                                  )
                                }
                                src="/static/delete.svg"
                                className={`${styles.delete_image} img-fluid mr-3`}
                                alt="Bin"
                              />
                              <img
                                src="/static/upload.svg"
                                className="img-fluid mr-3"
                                alt="Share"
                              />
                              <img
                                src="/static/drive_file.svg"
                                className={`${styles.edit_image} img-fluid mr-3`}
                                alt="Share"
                              />
                            </td>
                          </tr>
                        )
                      }
                    })}
                  <tr className="table_row">
                    <td className={styles.doc_name}>Container No. List</td>
                    <td>
                      <img
                        src="/static/pdf.svg"
                        className={`${styles.pdfImage} img-fluid`}
                        alt="Pdf"
                      />
                    </td>
                    <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                    <td className={styles.doc_row}>Buyer</td>
                    <td>
                      <span
                        className={`${styles.status} ${styles.approved}`}
                      ></span>
                      Verified
                    </td>
                    <td colSpan="2">
                      <img
                        src="/static/delete.svg"
                        className={`${styles.delete_image} img-fluid mr-3`}
                        alt="Bin"
                      />
                      <img
                        src="/static/upload.svg"
                        className="img-fluid mr-3"
                        alt="Share"
                      />
                      <img
                        src="/static/drive_file.svg"
                        className={`${styles.edit_image} img-fluid mr-3`}
                        alt="Share"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index


