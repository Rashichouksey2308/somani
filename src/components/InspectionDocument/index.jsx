/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import {
  GetDocuments,
  AddingDocument,
  DeleteDocument,
} from 'redux/creditQueueUpdate/action'
import { useDispatch, useSelector } from 'react-redux'

const Index = ({ orderId, uploadDocument1, module, documentName }) => {
  const dispatch = useDispatch()
  const [editInput, setEditInput] = useState(true)
  const [documentsDropDownFilter, setDocumentsDropDownFilter] = useState(
    'LeadOnboarding&OrderApproval',
  )

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
    module: module ? module : 'Agreements, Insurance & LC Opening',
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
      setNewDoc({ ...newDoc, [e.target.id]: e.target.value })
    }
  }
  return (
    <div
      className={`${styles.upload_main} vessel_card border_color upload_main`}
    >
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
                      {documentName}
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
                    {false?  <>
                      <button className={`${styles.uploadDoc} btn`}>
                        Upload
                      </button>
                      <input
                        type="file"
                        onChange={(e) => uploadDocument1(e)}
                        name="myfile"
                      />
                      </>:
                      <div className={styles.certificate}>
                      {"name"}
                      <img
                        className={`${styles.close_image} float-right m-2 img-fluid`}
                        src="/static/close.svg"
                       
                        alt="Close"
                      />{' '}
                    </div>
                      }
                    
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
                    {false?
                    <div className={styles.uploadBtnWrapper}>
                      <input
                        type="file"
                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                        onChange={(e) => uploadDocument2(e)}
                        name="myfile"
                      />
                      <a href="#">Browse</a>
                    </div>:
                      <div className={styles.certificate2}>
                      {"name"}
                      <img
                        className={`${styles.close_image} float-right m-2 img-fluid`}
                        src="/static/close.svg"
                        
                        alt="Close"
                      />{' '}
                    </div>
                    }
                  </p>
                </div>
              </div>
              <div className="col-md-4 offset-md-1 col-sm-6">
                <Form.Group className={styles.form_group}>
                  <div className="d-flex">
                    <select
                      className={`${styles.value} ${styles.customSelect} input form-control`}
                      id="module"
                      onChange={(e) => handleDropdown(e)}
                    >
                      {module === 'Loading-Transit-Unloading' ? (
                        <>
                          <option value="CertificateOfOrigin">
                            Certificate of Origin{' '}
                          </option>
                          <option value="CertificateOfQuality">
                            {' '}
                            Certificate of Quality
                          </option>
                          <option value="CertificateOfWeight ">
                            {' '}
                            Certificate of Weight
                          </option>
                          <option value="PlotInspectionReport">
                            {' '}
                            Plot Inspection Report
                          </option>
                          <option value="BL "> BL</option>
                          <option value="ContainerNoList ">
                            {' '}
                            Container No. List
                          </option>
                          <option value="PackingList "> Packing list</option>
                          <option value="BLAcknowledgmentCopy">
                            {' '}
                            BL Acknowledgment Copy
                          </option>
                          <option value="ForwardSalesContract ">
                            {' '}
                            Forward Sales Contract
                          </option>
                          <option value="CoalImportRegistrationCertificate">
                            {' '}
                            Coal Import Registration Certificate
                          </option>{' '}
                          <option value="CIMSPaymentReceipt ">
                            {' '}
                            CIMS Payment Receipt
                          </option>{' '}
                          <option value="IGMCopy "> IGM Copy</option>{' '}
                        </>
                      ) : (
                        <>
                          <option value="LcDraft">LC Draft </option>

                          <option value="lCAmmendmentDraft">
                            {' '}
                            LC Ammendment Draft
                          </option>
                          <option value="vesselCertificate">
                            {' '}
                            Vessel certificate
                          </option>
                          <option value="vesselCertificateContainerList">
                            {' '}
                            Vessel Certificate, Container List
                          </option>
                          <option value="policyDocumentMarine">
                            {' '}
                            Policy Document - Marine
                          </option>
                          <option value="policyDocumentStorage">
                            {' '}
                            Policy Document - Storage
                          </option>
                          <option value="policyDocumentMarine">
                            {' '}
                            Policy Document - Marine
                          </option>
                          <option value="policyDocumentStorage">
                            {' '}
                            Policy Document - Storage
                          </option>
                        </>
                      )}
                      <option value="Others">Others</option>
                    </select>
                    <Form.Label className={`${styles.label} label_heading`}>
                      Document Type
                    </Form.Label>
                    <img
                      className={`${styles.arrow} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </Form.Group>
                <Form.Group className={styles.form_group}>
                  <input
                    onChange={(e) =>
                      setNewDoc({ ...newDoc, name: e.target.value })
                    }
                    className={`${styles.value} input form-control`}
                    type="text"
                    required
                    disabled={manualDocModule}
                  />
                  <Form.Label className={`${styles.label} label_heading`}>
                    Please Specify Document Name
                  </Form.Label>
                </Form.Group>
                <div className={styles.uploadBtnWrapper}>
                  <button
                    onClick={(e) => uploadDocumentHandler(e)}
                    className={`${styles.upload_button} btn`}
                    disabled={editInput}
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
                className={`${styles.search_container} background2 p-2 pl-4 d-flex justify-content-between align-items-center`}
              >
                <div className="d-flex align-items-center">
                  <select
                    onChange={(e) => setDocumentsDropDownFilter(e.target.value)}
                    className={`${styles.dropDown} ${styles.customSelect} statusBox input form-control`}
                  >
                    <option value="LeadOnboarding&OrderApproval">
                      Lead Onboarding &amp; Order Approval
                    </option>
                    <option value="Agreements,Insurance&LCOpening">
                      Agreements, Insurance &amp; LC Opening
                    </option>
                    <option value="Loading-Transit-Unloading">
                      Loading-Transit-Unloading
                    </option>
                    <option value="CustomClearanceAndWarehousing">
                      Custom Clearance And Warehousing
                    </option>
                    <option value="Others">Others</option>
                  </select>
                  <img
                    className={`${styles.arrow2} img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
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
                    className={`${styles.searchBar} statusBox border_color input form-control`}
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
                      } else if (document.module === documentsDropDownFilter) {
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
                      } else {
                        return null
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
