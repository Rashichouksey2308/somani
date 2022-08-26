/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'
import { useState, useEffect } from 'react'
import {
  GetDocuments,
  AddingDocument,
  DeleteDocument,
} from '../../../src/redux/creditQueueUpdate/action'
import { useDispatch, useSelector } from 'react-redux'
import { ViewDocument } from 'redux/ViewDoc/action'

const Index = ({ orderid, module, isDocumentName }) => {
  const dispatch = useDispatch()

  // console.log(orderid, 'orderid')
  const { documentsFetched } = useSelector((state) => state.review)
  // console.log(documentsFetched, 'documentsFetched')

  const [editInput, setEditInput] = useState(true)
  const [manualDocModule, setManualDocModule] = useState(true)
  const [newDoc, setNewDoc] = useState({
    document: [],
    order: orderid,
    name: '',
    module: module,
  })
  const [moduleSelected, setModuleSelected] = useState(
    'LeadOnboarding&OrderApproval',
  )
  const [filteredDoc, setFilteredDoc] = useState([])

  useEffect(() => {
    sessionStorage.setItem('docFetchID', orderid)
    const tempArray = documentsFetched?.documents?.filter((doc) => {
      return doc?.module?.toLowerCase() === moduleSelected?.toLowerCase()
    })
    // console.log(tempArray, filteredDoc, moduleSelected, 'moduleSelected')
    setFilteredDoc(tempArray)
    dispatch(GetDocuments(`?order=${orderid}`))
  }, [dispatch, orderid, moduleSelected])

  useEffect(() => {
    const tempArray = documentsFetched?.documents?.filter((doc) => {
      return doc.module === moduleSelected
    })
    // console.log(tempArray, filteredDoc, moduleSelected, 'moduleSelected')
    setFilteredDoc(tempArray)
  }, [orderid, documentsFetched])

  // console.log(documentsFetched, filteredDoc, moduleSelected, 'moduleSelected')

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false)
    } else {
      setEditInput(true)
    }
  }
  const DocDlt = (index) => {
    let tempArray = filteredDoc
    tempArray.pop(index)
    setFilteredDoc(tempArray)
  }

  const handleNewDocModule = (e) => {
    if (e.target.value === 'others') {
      setManualDocModule(false)
    } else {
      setManualDocModule(true)
      setNewDoc({ ...newDoc, name: e.target.value })
    }
  }
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
    fd.append('order', orderid)
    // fd.append('type', newDoc.type))
    fd.append('name', newDoc.name)

    dispatch(AddingDocument(fd))
  }
  const [filterValue, setFilterValue] = useState('')
  const filterDocBySearch = (val) => {
    const tempArray = documentsFetched?.documents?.filter((doc) => {
      // console.log(doc.name, val, 'ser')
      if (doc.name.toLowerCase().includes(val)) {
        return doc
      }
    })
    setFilteredDoc(tempArray)
  }
  // console.log(filterValue, 'filterValue')
  return (
    <div className={`${styles.upload_main} vessel_card border_color card`}>
      <div
        className={`${styles.head_container} border_color d-flex  align-items-center justify-content-between`}
        data-toggle="collapse"
        data-target="#uploadOther"
        aria-expanded="true"
        aria-controls="uploadOther"
      >
        {!isDocumentName ? (
          <h3 className={styles.heading}>Upload Other Documents</h3>
        ) : (
          <h3 className={styles.heading}>Document</h3>
        )}
        <span>+</span>
      </div>
      <div
        id="uploadOther"
        className="collapse"
        aria-labelledby="uploadOther"
        data-parent="#uploadOther"
      >
        <div className={`${styles.dashboard_form} vessel_card card-body`}>
          <Form>
            <div className="row align-items-center vessel_card pb-4">
              <div
                className={`${styles.drop_container} d-flex align-items-center justify-content-around col-sm-6`}
              >
                <div className="text-center">
                  <img
                    className={`${styles.upload_image} img-fluid`}
                    src="/static/browse.svg"
                    alt="Browse"
                  />
                  <p className={styles.drop_para}>
                    Drop Files here or
                    <br />
                    <div className={styles.uploadBtnWrapper}>
                      <input
                        onChange={(e) => uploadDocument2(e)}
                        type="file"
                        name="myfile"
                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                      />
                      <a href="#">Browse</a>
                    </div>
                  </p>
                </div>
              </div>
              <div className="col-md-4 offset-md-1 col-sm-6">
                <Form.Group className={`${styles.form_group}`}>
                  <div className="d-flex">
                    <select
                      className={`${styles.value} ${styles.customSelect} input form-control`}
                      id="name"
                      onChange={(e) => handleNewDocModule(e)}
                    >
                      {module === 'LeadOnboarding&OrderApproval' ? (
                        <>
                          {' '}
                          <option>Select an option</option>
                          <option value="CertificateofIncorporation">
                            Certificate of Incorporation
                          </option>
                          <option value="IECCertificate">
                            IEC Certificate
                          </option>
                          <option value="BusinessRegistrationCertificate ">
                            Business Registration Certificate{' '}
                          </option>
                          <option value="PANCard">PAN Card</option>
                          <option value="GSTCertificate">
                            GST Certificate
                          </option>
                          <option value="BankReferenceLetter">
                            Bank Reference Letter
                          </option>
                          <option value="FinancialYear ">
                            Financial Year{' '}
                          </option>
                        </>
                      ) : module === 'Loading-Transit-Unloading' ? (
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
                      ) : module === 'Agreements&Insurance&LC&Opening' ? (
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
                      ) : module === 'CustomClearanceAndWarehousing' ? (
                        <>
                          <option value="BOEProvisional">
                            {' '}
                            BOE Provisional
                          </option>
                          <option value="BOE Final - in case of final assessment.">
                            {' '}
                            BOE Final - in case of final assessment.
                          </option>
                          <option value="Duty Paid Challan ">
                            {' '}
                            Duty Paid Challan
                          </option>
                          <option value="PD Bond"> PD Bond</option>
                          <option value="BOE Final"> BOE Final</option>
                          <option value="BOE Provisional ">
                            {' '}
                            BOE Provisional
                          </option>
                          <option value="BOE Final - in case of final assessment. ">
                            {' '}
                            BOE Final - in case of final assessment.
                          </option>
                          <option value="PD Bond"> PD Bond</option>
                          <option value="Duty Paid Challan ">
                            {' '}
                            Duty Paid Challan
                          </option>
                          <option value="Statements of Facts">
                            {' '}
                            Statements of Facts
                          </option>
                          <option value="Discharge Confirmation">
                            {' '}
                            Discharge Confirmation
                          </option>
                          <option value="BOE Final"> BOE Final</option>
                        </>
                      ) : (
                        <>
                          <option value="RR"> RR</option>
                          <option value="eWay Bill"> eWay Bill</option>
                        </>
                      )}
                      <option value="others">Other</option>
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
                <Form.Group className={`${styles.form_group}`}>
                  <input
                    onChange={(e) =>
                      setNewDoc({ ...newDoc, name: e.target.value })
                    }
                    className={`${styles.value} input form-control`}
                    type="text"
                    disabled={manualDocModule}
                  />
                  <Form.Label className={`${styles.label} label_heading`}>
                    Please Specify Document Name
                  </Form.Label>
                </Form.Group>
                <div
                  onClick={(e) => uploadDocumentHandler(e)}
                  className={styles.uploadBtnWrapper}
                >
                  <button className={`${styles.upload_button} btn`}>
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
                    onChange={(e) => setModuleSelected(e.target.value)}
                    className={`${styles.dropDown} ${styles.customSelect} statusBox input form-control`}
                  >
                    <option>Select an option</option>
                    <option value="LeadOnboarding&OrderApproval">
                      Lead Onboarding &amp; Order Approval
                    </option>
                    <option value="Agreements&Insurance&LC&Opening">
                      Agreements, Insurance &amp; LC Opening
                    </option>
                    <option value="Loading-Transit-Unloading">
                      Loading-Transit-Unloading
                    </option>
                    <option value="customClearanceAndWarehousing">
                      Custom Clearance And Warehousing
                    </option>
                    <option value="PaymentsInvoicing&Delivery">
                      Payments Invoicing & Delivery
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
                    className={`${styles.searchBar}  statusBox border_color input form-control`}
                    placeholder="Search"
                    onChange={(e) => {
                      filterDocBySearch(e.target.value)
                    }}
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
                    <th>STATUS </th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>

                  {documentsFetched &&
                    filteredDoc?.map((document, index) => {
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
                                onClick={(e) => {
                                  DocDlt(index)
                                  dispatch(
                                    DeleteDocument({
                                      orderDocumentId: documentsFetched._id,
                                      name: document.name,
                                    }),
                                  )
                                }}
                                src="/static/delete.svg"
                                className={`${styles.delete_image} mr-3`}
                                alt="Bin"
                              />
                              <img
                                src="/static/upload.svg"
                                className="mr-3"
                                alt="Share"
                                onClick={() => {
                                  dispatch(
                                    ViewDocument({
                                      path: document.path,
                                      orderId: documentsFetched._id,
                                    }),
                                  )
                                }}
                              />
                              <img
                                src="/static/drive_file.svg"
                                className={`${styles.edit_image} mr-3`}
                                alt="Share"
                              />
                            </td>
                          </tr>
                        )
                      }
                    })}
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
