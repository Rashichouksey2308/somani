/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import { useState } from 'react'
import DateCalender from '../DateCalender'
import Modal from 'react-bootstrap/Modal'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UpdateInspection } from 'redux/Inspections/action'
import _get from 'lodash/get'
import { toast } from 'react-toastify'
import UploadOther from '../UploadOther/index'
// import ThirdPartyPopUp from './ThirdPartyPopUp'

export default function Index({ addButton, inspectionData }) {
  const dispatch = useDispatch()

  let orderid = _get(inspectionData, 'order._id', '')

  const [editInput, setEditInput] = useState(true)
  const [bothField, setBothField] = useState(false)
  const [portType, setPortType] = useState({
    loadPortInspection: false,
    dischargePortInspection: false,
  })

  const handlePortType = (name, value) => {
    let newInput = { ...portType }
    newInput[name] = !value
    // console.log(name, value, 'cak')
    setPortType(newInput)
  }

  // console.log(portType, 'This is Load')
  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false)
    } else {
      setEditInput(true)
    }
  }
  const [show, setShow] = useState(false)

  // useEffect(() => {}, [])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [inspectionDetails, setInspectionDetails] = useState({
    loadPortInspectionDetails: {
      noOfContainers: '',
      inspectionPort: '',
      inspectedBy: '',
      inspectionDate: '',
      specialMention: '',
    },
    dischargePortInspectionDetails: {
      noOfContainers: '',
      inspectionPort: '',
      inspectedBy: '',
      inspectionDate: '',
      specialMention: '',
    },
  })

  const [documents, setDocuments] = useState({
    certificateOfQuality: null,
    certificateOfWeight: null,
    certificateOfOrigin: null,
  })

  const uploadDocument1 = (e) => {
    const newUploadDoc = { ...documents }
    newUploadDoc.certificateOfQuality = e.target.files[0]

    setDocuments(newUploadDoc)
  }
  const uploadDocument2 = (e) => {
    const newUploadDoc1 = { ...documents }
    newUploadDoc1.certificateOfWeight = e.target.files[0]

    setDocuments(newUploadDoc1)
  }

  const uploadDocument3 = (e) => {
    const newUploadDoc1 = { ...documents }
    newUploadDoc1.certificateOfOrigin = e.target.files[0]

    setDocuments(newUploadDoc1)
  }

  const handleCloseW = () => {
    setDocuments((doc) => {
      return { ...doc, certificateOfWeight: null }
    })
  }
  const handleCloseQ = () => {
    setDocuments((doc) => {
      return { ...doc, certificateOfQuality: null }
    })
  }
  const handleCloseO = () => {
    setDocuments((doc) => {
      return { ...doc, certificateOfOrigin: null }
    })
  }

  const saveInspectionDetails = (name, value) => {
    const newInput = { ...inspectionDetails }
    const namesplit = name.split('.')
    namesplit.length > 1
      ? (newInput[namesplit[0]][namesplit[1]] = value)
      : (newInput[name] = value)
    setInspectionDetails(newInput)
  }

  const saveDate = (value, name) => {
    // console.log(value, name, 'save date')
    // const namesplit = name.split('.')
    // namesplit.length > 1
    //   ? (newInput[namesplit[0]][namesplit[1]] = value)
    //   : (newInput[name] = value)
    const d = new Date(value)
    let text = d.toISOString()
    saveInspectionDetails(name, text)
  }

  const handleSave = () => {
    if (inspectionData?.order?.shipmentDetail?.shipmentType == 'Liner') {
      if (
        portType.loadPortInspection == true &&
        portType.dischargePortInspection == false
      ) {
        if (
          inspectionDetails?.loadPortInspectionDetails?.noOfContainers === ''
        ) {
          let toastMessage = 'NUMBER OF CONTAINERS CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.loadPortInspectionDetails?.inspectedBy === ''
        ) {
          let toastMessage = 'INSPECTED BY CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.loadPortInspectionDetails?.inspectionDate === ''
        ) {
          let toastMessage = 'PLEASE SELECT INSPECTION DATE'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.loadPortInspectionDetails?.inspectionPort === ''
        ) {
          let toastMessage = 'INSPECTION PORT CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          documents.certificateOfOrigin == null ||
          documents.certificateOfQuality == null ||
          documents.certificateOfWeight == null
        ) {
          let toastMessage = 'ANY ONE DOCUMENT IS MANDATORY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else {
          let fd = new FormData()
          fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails))
          fd.append('loadPortInspection', portType.loadPortInspection)
          fd.append('inspectionId', inspectionData?._id)
          fd.append('certificateOfOrigin', documents.certificateOfOrigin)
          fd.append('certificateOfQuality', documents.certificateOfQuality)
          fd.append('certificateOfWeight', documents.certificateOfWeight)

          dispatch(UpdateInspection(fd))
        }
      } else if (
        portType.dischargePortInspection == true &&
        portType.loadPortInspection == false
      ) {
        if (
          inspectionDetails?.dischargePortInspectionDetails?.noOfContainers ===
          ''
        ) {
          let toastMessage = 'NUMBER OF CONTAINERS CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectedBy === ''
        ) {
          let toastMessage = 'INSPECTED BY CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectionDate ===
          ''
        ) {
          let toastMessage = 'PLEASE SELECT INSPECTION DATE'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectionPort ===
          ''
        ) {
          let toastMessage = 'INSPECTION PORT CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          documents.certificateOfOrigin == null ||
          documents.certificateOfQuality == null ||
          documents.certificateOfWeight == null
        ) {
          let toastMessage = 'ANY ONE DOCUMENT IS MANDATORY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else {
          let fd = new FormData()
          fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails))
          fd.append('dischargePortInspection', portType.dischargePortInspection)
          fd.append('inspectionId', inspectionData?._id)
          fd.append('certificateOfOrigin', documents.certificateOfOrigin)
          fd.append('certificateOfQuality', documents.certificateOfQuality)
          fd.append('certificateOfWeight', documents.certificateOfWeight)

          dispatch(UpdateInspection(fd))
        }
      } else {
        if (
          inspectionDetails?.loadPortInspectionDetails?.noOfContainers === ''
        ) {
          let toastMessage = 'NUMBER OF CONTAINERS CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.loadPortInspectionDetails?.inspectedBy === ''
        ) {
          let toastMessage = 'INSPECTED BY CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.loadPortInspectionDetails?.inspectionDate === ''
        ) {
          let toastMessage = 'PLEASE SELECT INSPECTION DATE'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.loadPortInspectionDetails?.inspectionPort === ''
        ) {
          let toastMessage = 'INSPECTION PORT CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          documents.certificateOfOrigin == null ||
          documents.certificateOfQuality == null ||
          documents.certificateOfWeight == null
        ) {
          let toastMessage = 'ANY ONE DOCUMENT IS MANDATORY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.dischargePortInspectionDetails?.noOfContainers ===
          ''
        ) {
          let toastMessage = 'DISCHARGEN NUMBER OF CONTAINERS CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectedBy === ''
        ) {
          let toastMessage = 'DISCHARGE INSPECTED BY CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectionDate ===
          ''
        ) {
          let toastMessage = 'PLEASE SELECT DISCHARGE PORT INSPECTION DATE'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectionPort ===
          ''
        ) {
          let toastMessage = 'DICHARGE INSPECTION PORT CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          documents.certificateOfOrigin == null ||
          documents.certificateOfQuality == null ||
          documents.certificateOfWeight == null
        ) {
          let toastMessage = 'ANY ONE DOCUMENT IS MANDATORY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else {
          let fd = new FormData()
          fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails))
          fd.append('dischargePortInspection', portType.dischargePortInspection)
          fd.append('loadPortInspection', portType.loadPortInspection)
          fd.append('inspectionId', inspectionData?._id)
          fd.append('certificateOfOrigin', documents.certificateOfOrigin)
          fd.append('certificateOfQuality', documents.certificateOfQuality)
          fd.append('certificateOfWeight', documents.certificateOfWeight)

          dispatch(UpdateInspection(fd))
        }
      }
    } else if (inspectionData?.order?.shipmentDetail?.shipmentType == 'BULK') {
      if (
        portType.loadPortInspection == true &&
        portType.dischargePortInspection == false
      ) {
        if (inspectionDetails?.loadPortInspectionDetails?.inspectedBy === '') {
          let toastMessage = 'INSPECTED BY CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.loadPortInspectionDetails?.inspectionDate === ''
        ) {
          let toastMessage = 'PLEASE SELECT INSPECTION DATE'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.loadPortInspectionDetails?.inspectionPort === ''
        ) {
          let toastMessage = 'INSPECTION PORT CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          documents.certificateOfOrigin == null ||
          documents.certificateOfQuality == null ||
          documents.certificateOfWeight == null
        ) {
          let toastMessage = 'ANY ONE DOCUMENT IS MANDATORY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else {
          let fd = new FormData()
          fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails))
          fd.append('loadPortInspection', portType.loadPortInspection)
          fd.append('inspectionId', inspectionData?._id)
          fd.append('certificateOfOrigin', documents.certificateOfOrigin)
          fd.append('certificateOfQuality', documents.certificateOfQuality)
          fd.append('certificateOfWeight', documents.certificateOfWeight)

          dispatch(UpdateInspection(fd))
        }
      } else if (
        portType.dischargePortInspection == true &&
        portType.loadPortInspection == false
      ) {
        if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectedBy === ''
        ) {
          let toastMessage = 'INSPECTED BY CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectionDate ===
          ''
        ) {
          let toastMessage = 'PLEASE SELECT INSPECTION DATE'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectionPort ===
          ''
        ) {
          let toastMessage = 'INSPECTION PORT CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          documents.certificateOfOrigin == null ||
          documents.certificateOfQuality == null ||
          documents.certificateOfWeight == null
        ) {
          let toastMessage = 'ANY ONE DOCUMENT IS MANDATORY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else {
          let fd = new FormData()
          fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails))
          fd.append('dischargePortInspection', portType.dischargePortInspection)
          fd.append('inspectionId', inspectionData?._id)
          fd.append('certificateOfOrigin', documents.certificateOfOrigin)
          fd.append('certificateOfQuality', documents.certificateOfQuality)
          fd.append('certificateOfWeight', documents.certificateOfWeight)

          dispatch(UpdateInspection(fd))
        }
      } else {
        if (inspectionDetails?.loadPortInspectionDetails?.inspectedBy === '') {
          let toastMessage = 'INSPECTED BY CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.loadPortInspectionDetails?.inspectionDate === ''
        ) {
          let toastMessage = 'PLEASE SELECT INSPECTION DATE'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.loadPortInspectionDetails?.inspectionPort === ''
        ) {
          let toastMessage = 'INSPECTION PORT CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          documents.certificateOfOrigin == null ||
          documents.certificateOfQuality == null ||
          documents.certificateOfWeight == null
        ) {
          let toastMessage = 'ANY ONE DOCUMENT IS MANDATORY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectedBy === ''
        ) {
          let toastMessage = 'DISCHARGE INSPECTED BY CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectionDate ===
          ''
        ) {
          let toastMessage = 'PLEASE SELECT DISCHARGE PORT INSPECTION DATE'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          inspectionDetails?.dischargePortInspectionDetails?.inspectionPort ===
          ''
        ) {
          let toastMessage = 'DICHARGE INSPECTION PORT CANNOT BE EMPTY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else if (
          documents.certificateOfOrigin == null ||
          documents.certificateOfQuality == null ||
          documents.certificateOfWeight == null
        ) {
          let toastMessage = 'ANY ONE DOCUMENT IS MANDATORY'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        } else {
          let fd = new FormData()
          fd.append('thirdPartyInspection', JSON.stringify(inspectionDetails))
          fd.append('dischargePortInspection', portType.dischargePortInspection)
          fd.append('loadPortInspection', portType.loadPortInspection)
          fd.append('inspectionId', inspectionData?._id)
          fd.append('certificateOfOrigin', documents.certificateOfOrigin)
          fd.append('certificateOfQuality', documents.certificateOfQuality)
          fd.append('certificateOfWeight', documents.certificateOfWeight)

          dispatch(UpdateInspection(fd))
        }
      }
    }
  }
  // console.log(portType, 'portType')
  useEffect(() => {
    if (inspectionData) {
      if (
        inspectionData?.order?.termsheet?.transactionDetails?.typeOfPort ==
        'Load Port'
      ) {
        setPortType({ ...portType, loadPortInspection: true })
      } else if (
        inspectionData?.order?.termsheet?.transactionDetails?.typeOfPort ==
        'Both'
      ) {
        setPortType({
          ...portType,
          loadPortInspection: true,
          dischargePortInspection: true,
        })
      } else {
        setPortType({ ...portType, dischargePortInspection: true })
      }
    }
  }, [inspectionData])
  return (
    <>
      <div
        className={`${styles.backgroundMain} container-fluid p-0 background2`}
      >
        <div className={`${styles.vessel_card}`}>
          <div className={`${styles.main} vessel_card card border-color`}>
            <div
              className={`${styles.head_container} border_color align-items-center card-header head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Inspection Type</h3>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center mr-5">
                  <label className={`${styles.dropDown_label} text`}>
                    Shipment Type:
                  </label>
                  <div className={`${styles.dropDown} input`} value="Bulk">
                    {inspectionData?.order?.shipmentDetail?.shipmentType}
                  </div>
                </div>

                {/* <div className="d-flex align-items-center mr-5">
                  <label className={`${styles.dropDown_label} text`}>
                    Shipment Type:
                  </label>
                  <div
                    className={`${styles.dropDown} input`}
                    value="Liner"
                  >
                    Liner
                  </div>
                </div> */}

                <div className="d-flex align-items-center">
                  <label className={`${styles.dropDown_label} text`}>
                    Part Shipment Allowed:
                  </label>
                  <div className={`${styles.dropDown} input`}>Yes</div>

                  <button className={styles.add_btn}>Add</button>
                </div>
              </div>
            </div>
            <div className={styles.radio_form}>
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className={styles.radio_group}>
                  <Form.Check
                    className={styles.radio}
                    inline
                    label="Load Port"
                    value="Load"
                    name="loadPortInspection"
                    type={type}
                    onChange={(e) => {
                      handlePortType(e.target.name, portType.loadPortInspection)

                      // setBothField(!bothField)
                    }}
                    checked={portType.loadPortInspection ? 'checked' : ''}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    className={styles.radio}
                    inline
                    label="Discharge Port"
                    name="dischargePortInspection"
                    value="Discharge"
                    onChange={(e) => {
                      handlePortType(
                        e.target.name,
                        portType.dischargePortInspection,
                      )
                      // setBothField(!bothField)
                    }}
                    checked={portType.dischargePortInspection ? 'checked' : ''}
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </div>
            <hr></hr>

            <div className={`${styles.dashboard_form} mt-2 mb-4 card-body`}>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Commodity <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {inspectionData?.order?.commodity}
                  </span>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Quantity <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {inspectionData?.order?.quantity} MT
                  </span>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Country of Origin{' '}
                    <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    {inspectionData?.order?.countryOfOrigin}
                  </span>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className={`${styles.label} text`}>Vessel Name</div>
                  <span className={styles.value}>
                    {_get(
                      inspectionData,
                      'order.vessel.vessels[0].vesselInformation[0].name',
                      '',
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {portType.loadPortInspection ? (
            <>
              <div className={`${styles.main} vessel_card card border-color`}>
                <div
                  className={`${styles.head_container} border_color card-header align-items-center head_container justify-content-between d-flex bg-transparent`}
                >
                  <h3 className={`${styles.heading}`}>Inspection Details</h3>
                  <button
                    onClick={handleShow}
                    className={styles.product_btn}
                    type="button"
                  >
                    {' '}
                    Product Specification
                    <img
                      className="img-fluid ml-2"
                      src="/static/blue-eye.svg"
                      alt="blue-eye"
                    />
                  </button>
                </div>
                <div
                  className={`${styles.dashboard_form} vessel_card card-body`}
                >
                  <h5 className={styles.sub_heading}>
                    Inspection at Load Port
                  </h5>

                  <div className="row">
                    {inspectionData?.order?.shipmentDetail?.shipmentType ===
                    'Liner' ? (
                      <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          name="loadPortInspectionDetails.noOfContainers"
                          onChange={(e) =>
                            saveInspectionDetails(e.target.name, e.target.value)
                          }
                          type="number"
                          onKeyDown={(evt) =>
                            evt.key === 'e' && evt.preventDefault()
                          }
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          No of Containers
                          <strong className="text-danger">*</strong>
                        </label>
                      </div>
                    ) : (
                      ''
                    )}
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <div className="d-flex">
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          name="loadPortInspectionDetails.inspectionPort"
                          onChange={(e) =>
                            saveInspectionDetails(e.target.name, e.target.value)
                          }
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Inspection Port
                          <strong className="text-danger">*</strong>
                        </label>
                        <img
                          className={`${styles.search_image} img-fluid`}
                          src="/static/search-grey.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        required
                        name="loadPortInspectionDetails.inspectedBy"
                        onChange={(e) =>
                          saveInspectionDetails(e.target.name, e.target.value)
                        }
                        type="text"
                      />
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Inspected By<strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <div className="d-flex">
                        <DateCalender
                          saveDate={saveDate}
                          name="loadPortInspectionDetails.inspectionDate"
                          labelName="Inspection Date"
                          dateFormat={`dd-MM-yyyy`}
                        />
                        <img
                          className={`${styles.calanderIcon} image_arrow img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className={`${styles.dashboard_form} mb-3 card-body`}>
                  <h5 className={styles.sub_heading}>Special Mention</h5>
                  <Row>
                    <Col lg={12}>
                      <div className="mt-4">
                        <input
                          as="textarea"
                          name="loadPortInspectionDetails.specialMention"
                          onChange={(e) =>
                            saveInspectionDetails(e.target.name, e.target.value)
                          }
                          rows={3}
                          required
                          className={`${styles.comment_field} ${styles.input_field} input form-control`}
                          // style={{ backgroundColor: 'none' }}
                        />
                        <label
                          className={`${styles.comment_heading} ${styles.label_heading} label_heading`}
                        >
                          Special Mention
                        </label>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </>
          ) : null}
          {portType.dischargePortInspection
            ? Discharge(inspectionData, saveInspectionDetails, saveDate)
            : ''}

          <div className={`${styles.main} vessel_card card border-color`}>
            <div
              className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
              data-toggle="collapse"
              data-target="#upload"
              aria-expanded="true"
              aria-controls="upload"
            >
              <h3 className={styles.heading}>Document</h3>
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
                            <th width="40%">
                              DOCUMENT NAME{' '}
                              <img
                                className={`${styles.sort_img} mb-1`}
                                src="/static/icons8-sort-24.svg"
                                alt="Sort icon"
                              />
                            </th>
                            <th width="20%">
                              FORMAT{' '}
                              <img
                                className={`${styles.sort_img} mb-1`}
                                src="/static/icons8-sort-24.svg"
                                alt="Sort icon"
                              />
                            </th>
                            <th width="25%">
                              DOCUMENT DATE{' '}
                              <img
                                className={`${styles.sort_img} mb-1`}
                                src="/static/icons8-sort-24.svg"
                                alt="Sort icon"
                              />
                            </th>
                            <th>ACTION</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table_row">
                            <td className={styles.doc_name}>
                              Certificate of Origin
                              <strong className="text-danger ml-1">*</strong>
                              <span>View</span>
                            </td>
                            <td>
                              <img
                                src="/static/pdf.svg"
                                className={`${styles.pdfImage} img-fluid`}
                                alt="Pdf"
                              />
                            </td>
                            <td className={styles.doc_row}>
                              28-02-2022,5:30 PM
                            </td>
                            <td>
                              {' '}
                              <div className="dropdown">
                                <button
                                  className={`${styles.specify_field} btn btn-secondary dropdown-toggle`}
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  Please Specify
                                </button>
                                <div
                                  className={`${styles.dropdown_menu} dropdown-menu`}
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <a
                                    className={`${styles.hold_field} ${styles.dropdown_item} dropdown-item`}
                                    href="#"
                                  >
                                    <img
                                      src="/static/hold-white.svg"
                                      className="img-fluid mr-2"
                                      alt="On Hold"
                                    />{' '}
                                    On Hold
                                  </a>
                                  <a
                                    className={`${styles.rejected_field} ${styles.dropdown_item} dropdown-item`}
                                    href="#"
                                  >
                                    <img
                                      src="/static/close-white.svg"
                                      className="img-fluid mr-2"
                                      alt="Rejected"
                                    />{' '}
                                    Rejected
                                  </a>
                                  <a
                                    className={`${styles.approved_field} ${styles.dropdown_item} dropdown-item`}
                                    href="#"
                                  >
                                    <img
                                      src="/static/check.svg"
                                      className="img-fluid mr-2"
                                      alt="Approved"
                                    />{' '}
                                    Approved
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td>
                              {documents &&
                              documents?.certificateOfOrigin == null ? (
                                <>
                                  <div className={styles.uploadBtnWrapper}>
                                    <input
                                      type="file"
                                      name="myfile"
                                      accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                      onChange={(e) => uploadDocument3(e)}
                                    />
                                    <button
                                      className={`${styles.button_upload} btn`}
                                    >
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
                                  {documents?.certificateOfOrigin?.name}
                                  <img
                                    className={`${styles.close_image} float-right m-2 img-fluid`}
                                    src="/static/close.svg"
                                    onClick={() => handleCloseO()}
                                    alt="Close"
                                  />{' '}
                                </div>
                              )}
                            </td>
                          </tr>
                          <tr className="table_row">
                            <td className={styles.doc_name}>
                              Certificate of Quality
                              <strong className="text-danger ml-1">*</strong>
                              <span>View</span>
                            </td>
                            <td>
                              <img
                                src="/static/pdf.svg"
                                className={`${styles.pdfImage} img-fluid`}
                                alt="Pdf"
                              />
                            </td>
                            <td className={styles.doc_row}>
                              28-02-2022,5:30 PM
                            </td>
                            <td>
                              {' '}
                              <div className="dropdown">
                                <button
                                  className={`${styles.specify_field} btn btn-secondary dropdown-toggle`}
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  Please Specify
                                </button>
                                <div
                                  className={`${styles.dropdown_menu} dropdown-menu`}
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <a
                                    className={`${styles.hold_field} ${styles.dropdown_item} dropdown-item`}
                                    href="#"
                                  >
                                    <img
                                      src="/static/hold-white.svg"
                                      className="img-fluid mr-2"
                                      alt="On Hold"
                                    />{' '}
                                    On Hold
                                  </a>
                                  <a
                                    className={`${styles.rejected_field} ${styles.dropdown_item} dropdown-item`}
                                    href="#"
                                  >
                                    <img
                                      src="/static/close-white.svg"
                                      className="img-fluid mr-2"
                                      alt="Rejected"
                                    />{' '}
                                    Rejected
                                  </a>
                                  <a
                                    className={`${styles.approved_field} ${styles.dropdown_item} dropdown-item`}
                                    href="#"
                                  >
                                    <img
                                      src="/static/check.svg"
                                      className="img-fluid mr-2"
                                      alt="Approved"
                                    />{' '}
                                    Approved
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td>
                              {documents &&
                              documents?.certificateOfQuality == null ? (
                                <>
                                  <div className={styles.uploadBtnWrapper}>
                                    <input
                                      type="file"
                                      name="myfile"
                                      accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                      onChange={(e) => uploadDocument1(e)}
                                    />
                                    <button
                                      className={`${styles.button_upload} btn`}
                                    >
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
                                  {documents?.certificateOfQuality?.name}
                                  <img
                                    className={`${styles.close_image} float-right m-2 img-fluid`}
                                    src="/static/close.svg"
                                    onClick={() => handleCloseQ()}
                                    alt="Close"
                                  />{' '}
                                </div>
                              )}
                            </td>
                          </tr>
                          <tr className="table_row">
                            <td className={styles.doc_name}>
                              Certificate of Weight
                              <strong className="text-danger ml-1">*</strong>
                              <span>View</span>
                            </td>
                            <td>
                              <img
                                src="/static/pdf.svg"
                                className={`${styles.pdfImage} img-fluid`}
                                alt="Pdf"
                              />
                            </td>

                            <td className={styles.doc_row}>
                              28-02-2022,5:30 PM
                            </td>
                            <td>
                              {' '}
                              <div className="dropdown">
                                <button
                                  className={`${styles.specify_field} btn btn-secondary dropdown-toggle`}
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  Please Specify
                                </button>
                                <div
                                  className={`${styles.dropdown_menu} dropdown-menu`}
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <a
                                    className={`${styles.hold_field} ${styles.dropdown_item} dropdown-item`}
                                    href="#"
                                  >
                                    <img
                                      src="/static/hold-white.svg"
                                      className="img-fluid mr-2"
                                      alt="On Hold"
                                    />{' '}
                                    On Hold
                                  </a>
                                  <a
                                    className={`${styles.rejected_field} ${styles.dropdown_item} dropdown-item`}
                                    href="#"
                                  >
                                    <img
                                      src="/static/close-white.svg"
                                      className="img-fluid mr-2"
                                      alt="Rejected"
                                    />{' '}
                                    Rejected
                                  </a>
                                  <a
                                    className={`${styles.approved_field} ${styles.dropdown_item} dropdown-item`}
                                    href="#"
                                  >
                                    <img
                                      src="/static/check.svg"
                                      className="img-fluid mr-2"
                                      alt="Approved"
                                    />{' '}
                                    Approved
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td>
                              {documents &&
                              documents?.certificateOfWeight == null ? (
                                <>
                                  <div className={styles.uploadBtnWrapper}>
                                    <input
                                      type="file"
                                      name="myfile"
                                      accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                      onChange={(e) => uploadDocument2(e)}
                                    />
                                    <button
                                      className={`${styles.button_upload} btn`}
                                    >
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
                                  {documents?.certificateOfWeight?.name}
                                  <img
                                    className={`${styles.close_image} float-right m-2 img-fluid`}
                                    src="/static/close.svg"
                                    onClick={() => handleCloseW()}
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

                  <div
                    className={`${styles.any_document} ${styles.dashboard_form}  mb-2`}
                  >
                    <strong className="text-danger">*</strong>
                    Any one document is mandatory
                  </div>


                  {/* <div
                    className={`${styles.dashboard_form}  border_color card-body`}
                    style={{ borderTop: '2px solid #CAD6E6' }}
                  >
                    <Form>
                      <div className="row align-items-center mt-4 pb-4">
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
                                <input type="file" name="myfile" />
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
                                id="docType"
                                onChange={(e) => handleDropdown(e)}
                              >
                                <option>
                                  Lead Onboarding &amp; Order Approval
                                </option>
                                <option>
                                  Agreements, Insurance &amp; LC Opening
                                </option>
                                <option>Loading-Transit-Unloading</option>
                                <option>
                                  Custom Clearance And Warehousing
                                </option>
                                <option value="Others">Others</option>
                              </select>
                              <Form.Label
                                style={{ left: '15px' }}
                                className={`${styles.label_heading} label_heading`}
                              >
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
                            <Form.Control
                              className={`${styles.value} input form-control`}
                              type="text"
                              disabled={editInput}
                              required
                            />
                            <Form.Label
                              style={{ left: '15px' }}
                              className={`${styles.label_heading} label_heading`}
                            >
                              Please Specify Document Name
                            </Form.Label>
                          </Form.Group>

                          <button
                            className={`${styles.upload_button} mt-4 btn`}
                            disabled={editInput}
                          >
                            Upload
                          </button>
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
                              className={`${styles.dropDown} ${styles.customSelect} statusBox input form-control`}
                            >
                              <option>
                                Lead Onboarding &amp; Order Approval
                              </option>
                              <option>
                                Agreements, Insurance &amp; LC Opening
                              </option>
                              <option>Loading-Transit-Unloading</option>
                              <option>Custom Clearance And Warehousing</option>
                              <option value="Others">Others</option>
                            </select>
                            <img
                              className={`${styles.arrow2} ${styles.customSelect} img-fluid`}
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
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />{' '}
                              </th>
                              <th>
                                FORMAT{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />{' '}
                              </th>
                              <th>
                                DOCUMENT DATE{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />{' '}
                              </th>
                              <th>
                                UPLOADED BY{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />{' '}
                              </th>
                              <th>STATUS</th>
                              <th>ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                Policy Document - Marine
                              </td>
                              <td>
                                <img
                                  src="/static/pdf.svg"
                                  className={`${styles.pdfImage} img-fluid`}
                                  alt="Pdf"
                                />
                              </td>
                              <td className={styles.doc_row}>
                                28-02-2022,5:30 PM
                              </td>
                              <td className={styles.doc_row}>John Doe</td>
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          
                  <div className="0">
            <UploadOther orderid={orderid} module="Loading-Transit-Unloading" />
          </div>
        </div>
        <SaveBar handleSave={handleSave} rightBtn="Submit" />
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        className={`${styles.tpi_popup} tpi_popup`}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="modal-header p-0 bg-transparent border-0 d-flex justify-content-between">
          <h3>Product Specification</h3>
          <img
            src="/static/close.svg"
            alt="close"
            onClick={handleClose}
            className="img-fluid"
          />
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className={styles.table_container}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table
                  className={`${styles.table} table-bordered table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                >
                  <thead>
                    <tr>
                      <th width={44}></th>
                      <th>S.NO.</th>
                      <th>ELEMENTS</th>
                      <th>TYPICAL (IN PCT)</th>
                      <th>GUARANTEED (IN PCT)</th>
                      <th width={44}></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table_row">
                      <th></th>
                      <td>01</td>
                      <td>SiO2</td>
                      <td>44.50</td>
                      <td>44.50</td>
                      <td></td>
                    </tr>
                    <tr className="table_row">
                      <th></th>
                      <td>02</td>
                      <td>Al2O3</td>
                      <td>44.50</td>
                      <td>44.50</td>
                      <td></td>
                    </tr>
                    <tr className="table_row">
                      <th></th>
                      <td>03</td>
                      <td>SiO2</td>
                      <td>44.50</td>
                      <td>44.50</td>
                      <td></td>
                    </tr>
                    <tr className="table_row">
                      <th></th>
                      <td>04</td>
                      <td>Al2O3</td>
                      <td>44.50</td>
                      <td>44.50</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

const Discharge = (inspectionData, saveInspectionDetails, saveDate) => {
  return (
    <div className={`${styles.main} vessel_card card border-color`}>
      <div
        className={`${styles.head_container} border_color card-header align-items-center head_container justify-content-between d-flex bg-transparent`}
      >
        <h3 className={`${styles.heading}`}>Inspection Details</h3>
        <button
          // onClick={handleShow}
          className={styles.product_btn}
          type="button"
        >
          {' '}
          Product Specification
          <img
            className="img-fluid ml-2"
            src="/static/blue-eye.svg"
            alt="blue-eye"
          />
        </button>
      </div>
      <div className={`${styles.dashboard_form} card-body`}>
        <h5 className={styles.sub_heading}>Inspection at Discharge Port</h5>

        <div className="row">
          {inspectionData?.order?.shipmentDetail?.shipmentType === 'Liner' ? (
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                className={`${styles.input_field} input form-control`}
                required
                name="dischargePortInspectionDetails.noOfContainers"
                onChange={(e) =>
                  saveInspectionDetails(e.target.name, e.target.value)
                }
                type="number"
                onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
              />
              <label className={`${styles.label_heading} label_heading`}>
                No of Containers<strong className="text-danger">*</strong>
              </label>
            </div>
          ) : (
            ''
          )}

          <div className={`${styles.form_group} col-md-4 col-sm-6`}>
            <div className="d-flex">
              <input
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="dischargePortInspectionDetails.inspectionPort"
                onChange={(e) =>
                  saveInspectionDetails(e.target.name, e.target.value)
                }
              />
              <label className={`${styles.label_heading} label_heading`}>
                Inspection Port
                <strong className="text-danger">*</strong>
              </label>
              <img
                className={`${styles.search_image} img-fluid`}
                src="/static/search-grey.svg"
                alt="Search"
              />
            </div>
          </div>
          <div className={`${styles.form_group} col-md-4 col-sm-6`}>
            <input
              className={`${styles.input_field} input form-control`}
              required
              type="text"
              name="dischargePortInspectionDetails.inspectedBy"
              onChange={(e) =>
                saveInspectionDetails(e.target.name, e.target.value)
              }
            />
            <label className={`${styles.label_heading} label_heading`}>
              Inspected By<strong className="text-danger">*</strong>
            </label>
          </div>
          <div className={`${styles.form_group} col-md-4 col-sm-6`}>
            <div className="d-flex">
              <DateCalender
                name="dischargePortInspectionDetails.inspectionDate"
                saveDate={saveDate}
                labelName="Inspection Date"
                dateFormat={`dd-MM-yyyy`}
              />
              <img
                className={`${styles.calanderIcon} image_arrow img-fluid`}
                src="/static/caldericon.svg"
                alt="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className={`${styles.dashboard_form} mb-3 card-body`}>
        <h5 className={styles.sub_heading}>Special Mention</h5>
        <Row>
          <Col lg={12}>
            <div className="mt-4">
              <input
                as="textarea"
                rows={3}
                name="dischargePortInspectionDetails.specialMention"
                onChange={(e) =>
                  saveInspectionDetails(e.target.name, e.target.value)
                }
                required
                className={`${styles.comment_field} ${styles.input_field} input form-control`}
                // style={{ backgroundColor: 'none' }}
              />
              <label
                className={`${styles.comment_heading} ${styles.label_heading} label_heading`}
              >
                Special Mention
              </label>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
