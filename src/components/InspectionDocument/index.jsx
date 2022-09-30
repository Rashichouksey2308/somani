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
import { ViewDocument } from 'redux/ViewDoc/action'
import { toast } from 'react-toastify'
import moment from 'moment'

const Index = ({
  orderId,
  uploadDocument1,
  module,
  documentName,
  lcDoc,
  setLcDoc,
}) => {
  const dispatch = useDispatch()

  const [editInput, setEditInput] = useState(true)

  let d = new Date()

  // const [documentsDropDownFilter, setDocumentsDropDownFilter] = useState(
  //   'LeadOnboarding&OrderApproval',
  // )

  const { documentsFetched } = useSelector((state) => state.review)

  // useEffect(() => {
  //   sessionStorage.setItem('docId', orderId)
  //   dispatch(GetDocuments(`?order=${orderId}`))
  // }, [dispatch, orderId])
 console.log(lcDoc,"lcDoc")
  const [filteredDoc, setFilteredDoc] = useState([])
  // console.log(filteredDoc,'filtered doc')
  const [moduleSelected, setModuleSelected] = useState(
    'LeadOnboarding&OrderApproval',
  )

  useEffect(() => {
    const tempArray = documentsFetched?.documents?.filter((doc) => {
      return doc.module == moduleSelected
    })
    setFilteredDoc(tempArray)
    dispatch(GetDocuments(`?order=${orderId}`))
  }, [dispatch, orderId, moduleSelected])

  const DocDlt = (index) => {
    let tempArray = filteredDoc
    tempArray.pop(index)
    setFilteredDoc(tempArray)
  }

  const [manualDocModule, setManualDocModule] = useState(true)

  const [newDoc, setNewDoc] = useState({
    document: null,
    order: orderId,
    name: '',
    module: module ? module : 'Agreements&Insurance&LC&Opening',
  })

  const uploadDocument2 = (e) => {
    const newUploadDoc1 = { ...newDoc }
    newUploadDoc1.document = e.target.files[0]
    setNewDoc(newUploadDoc1)
  }

  const uploadDocumentHandler = (e) => {
    console.log(e, 'UPLOAD HANDLER')
    e.preventDefault()
    if (newDoc.document === null) {
      let toastMessage = 'please select A Document'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    } else if (newDoc.name === '') {
      let toastMessage = 'please provide a valid document name'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    } else {
      const fd = new FormData()
      console.log(newDoc, newDoc.document, 'pdfFile', newDoc.module)
      fd.append('document', newDoc.document)
      fd.append('module', newDoc.module)
      fd.append('order', orderId)
      // fd.append('type', newDoc.type))
      fd.append('name', newDoc.name)

      dispatch(AddingDocument(fd))

      setNewDoc({
        document: null,
        order: orderId,
        name: '',
        module: module ? module : 'Agreements&Insurance&LC&Opening',
      })
    }
  }
  //  const uploadDoc = async (e) => {
  //   console.log(e, 'response data')
  //   let fd = new FormData()
  //   fd.append('document', e.target.files[0])
  //   // dispatch(UploadCustomDoc(fd))
  //   console.log(customData, 'customData')

  //   let cookie = Cookies.get('SOMANI')
  //   const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  //   let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  //   var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  //   try {
  //     let response = await Axios.post(
  //       `${API.corebaseUrl}${API.customClearanceDoc}`,
  //       fd,
  //       {
  //         headers: headers,
  //       },
  //     )
  //     console.log(response.data.data, 'dischargeOfCargo2')
  //     if (response.data.code === 200) {
  //       // dispatch(getCustomClearanceSuccess(response.data.data))

  //       return response.data.data
  //       // let toastMessage = 'DOCUMENT UPDATED'
  //       // if (!toast.isActive(toastMessage.toUpperCase())) {
  //       //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) // }
  //     } else {
  //       // dispatch(getCustomClearanceFailed(response.data.data))
  //       // let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
  //       // if (!toast.isActive(toastMessage.toUpperCase())) {
  //       //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) // }
  //     }
  //   } catch (error) {
  //     // dispatch(getCustomClearanceFailed())
  //     // let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
  //     // if (!toast.isActive(toastMessage.toUpperCase())) {
  //     //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
  //     // }
  //   }
  // }

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false)
    } else {
      setEditInput(true)
      setNewDoc({ ...newDoc, [e.target.id]: e.target.value })
    }
  }

  const handleNewDocModule = (e) => {
    if (e.target.value === 'others') {
      setManualDocModule(false)
    } else {
      document.getElementById('otherDocName').value = ''
      setManualDocModule(true)
      setNewDoc({ ...newDoc, name: e.target.value })
    }
  }

  const handleCloseDoc = () => {
    setNewDoc({
      document: [],
      order: orderId,
      name: '',
      module: module,
    })
  }

  return (
    <div
      className={`${styles.upload_main} vessel_card border_color upload_main`}
    >
      <div
        className={`${styles.head_container} border_color align-items-center d-flex justify-content-between`}
        data-toggle="collapse"
        data-target="#uploadOther"
        aria-expanded="true"
        aria-controls="uploadOther"
      >
        <h3 className={`${styles.heading} mb-0`}>Document</h3>
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
                      />
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
                        className={`${styles.pdfImage} img-fluid`}
                        alt="Pdf"
                      />
                    </td>
                    <td className={styles.doc_row}>
                      {lcDoc?.lcDraftDoc?.lastModifiedDate
                        ? moment(d).format(
                            'DD-MM-YYYY,HH:mm A',
                          )
                        : ''}
                    </td>
                    <td colSpan={2}>
                      {lcDoc && lcDoc.lcDraftDoc === null ? (
                        <>
                          <div className={styles.uploadBtnWrapper}>
                            <input
                              type="file"
                              name="myfile"
                              accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                              onChange={(e) => uploadDocument1(e)}
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
                        <div
                          className={`${styles.certificate} text1 d-flex align-items-center justify-content-between`}
                        >
                          <span>{lcDoc?.lcDraftDoc?.name}</span>
                          <img
                            onClick={(e) =>
                              setLcDoc({
                                lcDraftDoc: null,
                              })
                            }
                            className={`${styles.close_image} image_arrow mr-2`}
                            src="/static/close.svg"
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
        <div className={`${styles.dashboard_form} card-body`}>
          <Form>
            <div className="row align-items-center pb-4">
              <div
                className={`${styles.drop_container} d-inline-flex align-items-center justify-content-around col-sm-6`}
              >
                <div className="text-center w-100">
                  <img
                    className={`${styles.upload_image} img-fluid d-block mx-auto`}
                    src="/static/browse.svg"
                    alt="Browse"
                    onChange={(e) => uploadDocument2(e)}
                  />
                  {newDoc?.document?.name ? (
                      <div className='d-flex justify-content-center align-items-center'>
                    <div
                      className={`${styles.certificate} text1 d-flex justify-content-between`}
                    >
                      <span>{newDoc?.document?.name}</span>
                      <img
                        className={`${styles.close_image} image_arrow ml-2 mr-2`}
                        src="/static/close.svg"
                        onClick={(e) => handleCloseDoc()}
                        alt="Close"
                      />{' '}
                    </div>
                    </div>
                  ) : (
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
                  )}
                </div>
              </div>
              <div className="col-md-4 offset-md-1 col-sm-6">
                <Form.Group className={styles.form_group}>
                  <div className="d-flex">
                    <select
                      className={`${styles.value} ${styles.customSelect} input form-control`}
                      value={manualDocModule ? newDoc.name : 'others'}
                      id="name"
                      onChange={(e) => handleNewDocModule(e)}
                    >
                      {/* {module === 'Loading-Transit-Unloading' ? (
                        <>
                          <option value="" disabled>
                            Select an option
                          </option>
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
                          <option selected disabled>
                            Select an option
                          </option>

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
                      )} */}
                      {module === 'LeadOnboarding&OrderApproval' ? (
                        <>
                          {' '}
                          <option value='' disabled>
                            Select an option
                          </option>
                          <option value="Certificate of Incorporation">
                            Certificate of Incorporation
                          </option>
                          <option value="IEC Certificate">
                            IEC Certificate
                          </option>
                          <option value="Business Registration Certificate">
                            Business Registration Certificate{' '}
                          </option>
                          <option value="PAN Card">PAN Card</option>
                          <option value="GST Certificate">
                            GST Certificate
                          </option>
                          <option value="Bank Reference Letter">
                            Bank Reference Letter
                          </option>
                          <option value="Financial Year">
                            Financial Year{' '}
                          </option>
                        </>
                      ) : module === 'Loading-Transit-Unloading' ? (
                        <>
                          <option value='' disabled>
                            Select an option
                          </option>
                          <option value="Certificate Of Origin">
                            Certificate of Origin{' '}
                          </option>
                          <option value="Certificate Of Quality">
                            {' '}
                            Certificate of Quality
                          </option>
                          <option value="Certificate Of Weight">
                            {' '}
                            Certificate of Weight
                          </option>
                          <option value="Plot Inspection Report">
                            {' '}
                            Plot Inspection Report
                          </option>
                          <option value="BL"> BL</option>
                          <option value="Container No List ">
                            {' '}
                            Container No. List
                          </option>
                          <option value="Packing List "> Packing list</option>
                          <option value="BL Acknowledgment Copy">
                            {' '}
                            BL Acknowledgment Copy
                          </option>
                          <option value="Forward Sales Contract ">
                            {' '}
                            Forward Sales Contract
                          </option>
                          <option value="Coal Import Registration Certificate">
                            {' '}
                            Coal Import Registration Certificate
                          </option>{' '}
                          <option value="CIMS Payment Receipt ">
                            {' '}
                            CIMS Payment Receipt
                          </option>{' '}
                          <option value="IGM Copy "> IGM Copy</option>{' '}
                        </>
                      ) : module === 'Agreements&Insurance&LC&Opening' ? (
                        <>
                          <option value='' disabled>
                            Select an option
                          </option>

                          <option value="Lc Draft">LC Draft </option>

                          <option value="LC Ammendment Draft">
                            {' '}
                            LC Ammendment Draft
                          </option>
                          <option value="Vessel Certificate">
                            {' '}
                            Vessel certificate
                          </option>
                          <option value="Vessel Certificate Container List">
                            {' '}
                            Vessel Certificate, Container List
                          </option>
                          <option value="Policy Document Marine">
                            {' '}
                            Policy Document - Marine
                          </option>
                          <option value="Policy Document Storage">
                            {' '}
                            Policy Document - Storage
                          </option>
                        </>
                      ) : module === 'CustomClearanceAndWarehousing' ? (
                        <>
                          <option value='' disabled>
                            Select an option
                          </option>

                          <option value="BOE Provisional">
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
                          <option value='' disabled>
                            Select an option
                          </option>

                          <option value="RR"> RR</option>
                          <option value="eWay Bill"> eWay Bill</option>
                        </>
                      )}
                      <option value="others">Others</option>
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
                {/* <Form.Group className={styles.form_group}> */}
                  {/* <input
                    onChange={(e) =>
                      setNewDoc({ ...newDoc, name: e.target.value })
                    }
                    id="otherDocName"
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
                    // disabled={!editInput}
                  >
                    Upload
                  </button> */}
                   <Form.Group className={`${styles.form_group}`}>
                  <input
                    id="otherDocName"
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
                    <option selected disabled>
                      Select an option
                    </option>
                    <option value="LeadOnboarding&OrderApproval">
                      Lead Onboarding &amp; Order Approval
                    </option>
                    <option value="Agreements&Insurance&LC&Opening">
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
                                className={`${styles.pdfImage} img-fluid`}
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
                                className={`${styles.delete_image} img-fluid mr-3`}
                                alt="Bin"
                              />
                              <img
                                src="/static/upload.svg"
                                className="img-fluid mr-3"
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
                                className={`${styles.edit_image} img-fluid mr-3`}
                                alt="Share"
                              />
                            </td>
                          </tr>
                        )
                      }
                    })}
                  {/* {documentsFetched &&
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
                                onClick={()=>{
                                  dispatch(ViewDocument({path: document.path,
                                    orderId: documentsFetched._id}))
                                }}
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
                    })} */}
                  {/* <tr className="table_row">
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
                  </tr> */}
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
