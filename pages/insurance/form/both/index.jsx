/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import UploadDocument from '../../../../src/components/UploadDocument'
import DateCalender from '../../../../src/components/DateCalender'
import { useDispatch, useSelector } from 'react-redux'
import {
  GettingAllInsurance,
  UpdateInsurance,
} from '../../../../src/redux/insurance/action'
import _get from 'lodash/get'
import Router from 'next/router'
import { toast } from 'react-toastify'

const Index = () => {
  const [insuranceType, setInsuranceType] = useState('')

  const dispatch = useDispatch()

  
  useEffect(() => {
    let id = sessionStorage.getItem('quotationId')
    dispatch(GettingAllInsurance(`?insuranceId=${id}`))
  }, [dispatch])

  const { insuranceResponse } = useSelector((state) => state.insurance)
  const [insuranceData, setInsuranceData] = useState()

  useEffect(() => {
    setInsuranceData(_get(insuranceResponse, 'data[0]', {}))
  }, [insuranceResponse])
  

  const [marineData, setMarineData] = useState({
    policyNumber: insuranceData?.marineInsurance?.policyNumber,
    nameOfInsurer: insuranceData?.marineInsurance?.nameOfInsurer,
    gstOfInsurer: insuranceData?.marineInsurance?.gstOfInsurer,
    nameOfInsured: insuranceData?.marineInsurance?.nameOfInsured,
    gstOfInsured: insuranceData?.marineInsurance?.gstOfInsured,
    insuranceFrom: insuranceData?.marineInsurance?.insuranceFrom,
    insuranceTo: insuranceData?.marineInsurance?.insuranceTo,
    periodOfInsurance: insuranceData?.marineInsurance?.periodOfInsurance,
    insuranceFromType:insuranceData?.marineInsurance?.insuranceFromType,
    lossPayee: insuranceData?.marineInsurance?.lossPayee,
    premiumAmount: insuranceData?.marineInsurance?.premiumAmount,
  })

  useEffect(() => {
    setMarineData({
      policyNumber: insuranceData?.marineInsurance?.policyNumber,
    nameOfInsurer: insuranceData?.marineInsurance?.nameOfInsurer,
    gstOfInsurer: insuranceData?.marineInsurance?.gstOfInsurer,
    nameOfInsured: insuranceData?.marineInsurance?.nameOfInsured,
    gstOfInsured: insuranceData?.marineInsurance?.gstOfInsured,
    insuranceFrom: insuranceData?.marineInsurance?.insuranceFrom,
    insuranceTo: insuranceData?.marineInsurance?.insuranceTo,
    periodOfInsurance: insuranceData?.marineInsurance?.periodOfInsurance,
    insuranceFromType:insuranceData?.marineInsurance?.insuranceFromType,
    lossPayee: insuranceData?.marineInsurance?.lossPayee,
    premiumAmount: insuranceData?.marineInsurance?.premiumAmount,
    })
    setStorageData({
      policyNumber: insuranceData?.storageInsurance?.policyNumber,
    nameOfInsurer: insuranceData?.storageInsurance?.nameOfInsurer,
    gstOfInsurer: insuranceData?.storageInsurance?.gstOfInsurer,
    nameOfInsured: insuranceData?.storageInsurance?.nameOfInsured,
    gstOfInsured: insuranceData?.storageInsurance?.gstOfInsured,
    insuranceFrom: insuranceData?.storageInsurance?.insuranceFrom,
    insuranceTo: insuranceData?.storageInsurance?.insuranceTo,
    periodOfInsurance: insuranceData?.storageInsurance?.periodOfInsurance,
    insuranceFromType:insuranceData?.storageInsurance?.insuranceFromType,
    lossPayee: insuranceData?.storageInsurance?.lossPayee,
    premiumAmount: insuranceData?.storageInsurance?.premiumAmount,
    })
  }, [insuranceData])
  

  const saveMarineData = (name, value) => {
    let newInput = { ...marineData }
    newInput[name] = value
    setMarineData(newInput)
  }

  const saveDate = (value, name) => {
    // console.log(value, name, 'save date')
    const d = new Date(value)
    let text = d.toISOString()
    saveMarineData(name, text)
  }

  const [storageData, setStorageData] = useState({
    policyNumber: insuranceData?.storageInsurance?.policyNumber,
    nameOfInsurer: insuranceData?.storageInsurance?.nameOfInsurer,
    gstOfInsurer: insuranceData?.storageInsurance?.gstOfInsurer,
    nameOfInsured: insuranceData?.storageInsurance?.nameOfInsured,
    gstOfInsured: insuranceData?.storageInsurance?.gstOfInsured,
    insuranceFrom: insuranceData?.storageInsurance?.insuranceFrom,
    insuranceTo: insuranceData?.storageInsurance?.insuranceTo,
    periodOfInsurance: insuranceData?.storageInsurance?.periodOfInsurance,
    insuranceFromType:insuranceData?.storageInsurance?.insuranceFromType,
    lossPayee: insuranceData?.storageInsurance?.lossPayee,
    premiumAmount: insuranceData?.storageInsurance?.premiumAmount,
  })

  const saveStorageDate = (value, name) => {
    // console.log(value, name, 'save date')
    const d = new Date(value)
    let text = d.toISOString()
    setStorageData(name, text)
  }

  const saveStorageData = (name, value) => {
    let newInput = { ...marineData }
    newInput[name] = value
    setMarineData(newInput)
  }

  const [insuranceDocument, setInsuranceDocument] = useState({
    storagePolicyDocument: null,
    marinePolicyDocument: null,
  })

  const uploadDocument2 = (e) => {
    const newUploadDoc = { ...insuranceDocument }
    newUploadDoc.storagePolicyDocument = e.target.files[0]
    // console.log(newUploadDoc, 'new upload doc')
    setInsuranceDocument(newUploadDoc)
  }
  const uploadDocument1 = (e) => {
    const newUploadDoc1 = { ...insuranceDocument }
    newUploadDoc1.marinePolicyDocument = e.target.files[0]

    setInsuranceDocument(newUploadDoc1)
  }

  const [isInsurerSameData, setIsInsurerSameData] = useState(false)

  const handleIsInsuranceSame = () => {
    setIsInsurerSameData(true)
    setStorageData(marineData)
  }

  const validate = () => {
    let toastMessage = ''

    if (insuranceData?.quotationRequest?.insuranceType == 'Marine Insurance') {
      if (
        marineData.insuranceFromType == 'Domestic' &&
        marineData.gstOfInsurer == ''
      ) {
        toastMessage = 'GST OF INSURER IS MANDATORY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        marineData.insuranceFromType == 'Domestic' &&
        marineData.gstOfInsured == ''
      ) {
        toastMessage = 'GST OF INSURED IS MANDATORY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        marineData.insuranceFrom == ''
      ) {
        toastMessage = 'PLEASE SELECT INSURANCE FROM'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        marineData.insuranceTo == ''
      ) {
        toastMessage = 'PLEASE SELECT INSURANCE TO'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (insuranceDocument.marinePolicyDocument == null) {
        toastMessage = 'Documents are Mandatory'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      return true
    } 
     if (
      insuranceData?.quotationRequest?.insuranceType == 'Storage Insurance'
    ) {
      if (
        storageData.insuranceFromType == 'Domestic' &&
        storageData.gstOfInsurer == ''
      ) {
        toastMessage = 'GST OF INSURER IS MANDATORY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        storageData.insuranceFromType == 'Domestic' &&
        storageData.gstOfInsured == ''
      ) {
        toastMessage = 'GST OF INSURED IS MANDATORY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        storageData.insuranceFrom == ''
      ) {
        toastMessage = 'PLEASE SELECT INSURANCE FROM'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        storageData.insuranceTo == ''
      ) {
        toastMessage = 'PLEASE SELECT INSURANCE TO'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (insuranceDocument.storagePolicyDocument == null) {
        toastMessage = 'Documents are Mandatory'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      return true
    }  
    if (
      insuranceData?.quotationRequest?.insuranceType ==
      'Marine & Storage Insurance'
    ) {
      if (
        storageData.gstOfInsurer == ''
      ) {
        toastMessage = 'GST OF INSURER IS MANDATORY IN STORAGE INSURANCE'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        storageData.gstOfInsured == ''
      ) {
        toastMessage = 'GST OF INSURED IS MANDATORY IN STORAGE INSURANCE'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        marineData.insuranceFromType == 'Domestic' &&
        marineData.gstOfInsurer == ''
      ) {
        toastMessage = 'GST OF INSURER IS MANDATORY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        marineData.insuranceFromType == 'Domestic' &&
        marineData.gstOfInsured == ''
      ) {
        toastMessage = 'GST OF INSURED IS MANDATORY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        insuranceDocument.marinePolicyDocument == null ||
        insuranceDocument.storagePolicyDocument == null
      ) {
        toastMessage = 'BOTH DOCUMENTS ARE MANDATORY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      return true
    }
    
  }

  console.log(insuranceData?.marineInsurance, 'insuranceData')

  const handleInsuranceUpdate = () => {
    if (validate()) {
      let fd = new FormData()
      fd.append('marineInsurance', JSON.stringify(marineData))
      fd.append('storageInsurance', JSON.stringify(storageData))
      fd.append('insuranceId', insuranceData?._id)
      fd.append(
        'insuranceType',
        JSON.stringify(insuranceData?.quotationRequest?.insuranceType),
      )
      fd.append('marinePolicyDocument', insuranceDocument.marinePolicyDocument)
      fd.append(
        'storagePolicyDocument',
        insuranceDocument.storagePolicyDocument,
      )

      dispatch(UpdateInsurance(fd))
    }
  }

  const handleRoute = () => {
    Router.push('/insurance')
  }

  return (
    <div className={`${styles.card} accordion_body container-fluid`}>
      <div className={styles.head_container}>
        <div className={`${styles.head_header} ml-4`}>
          <img
            className={`${styles.arrow} image_arrow img-fluid`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"
          />
          <h1 className={styles.heading}>
            {insuranceData?.company?.companyName}
          </h1>
        </div>
        <div>
          <button className={`${styles.clear_btn} clear_btn`}>Clear All</button>
        </div>
      </div>

      <div className={`${styles.vessel_card} mt-3 border_color`}>
        <div className={`${styles.wrapper} p-2 card`}>
          <div className="d-lg-flex align-items-center d-inline-block mt-4 mb-4 pl-4">
            <h2 className="mb-0">Insurance Type</h2>
            <div className={`${styles.radio_form} ml-lg-5 ml-n4`}>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className={styles.radio_group}>
                  <Form.Check
                    className={styles.radio}
                    inline
                    label="Marine Insurance"
                    checked={
                      insuranceData?.quotationRequest?.insuranceType ==
                      'Marine Insurance'
                        ? 'checked'
                        : ''
                    }
                    onChange={(e) => setInsuranceType('Marine Insurance')}
                    name="group1"
                    value="Marine"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    className={styles.radio}
                    inline
                    label="Storage Insurance"
                    checked={
                      insuranceData?.quotationRequest?.insuranceType ==
                      'Storage Insurance'
                        ? 'checked'
                        : ''
                    }
                    name="group1"
                    value="Storage"
                    onChange={(e) => {
                      setInsuranceType('Storage Insurance')
                    }}
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    className={styles.radio}
                    inline
                    label="Both"
                    value="Both"
                    checked={
                      insuranceData?.quotationRequest?.insuranceType ==
                      'Marine & Storage Insurance'
                        ? 'checked'
                        : ''
                    }
                    name="group1"
                    type={type}
                    onChange={(e) => {
                      setInsuranceType('Both')
                    }}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {insuranceData?.quotationRequest?.insuranceType ==
        'Marine Insurance' ? (
          <>
            <div
              className={`${styles.wrapper} vessel_card border_color mt-4 card`}
            >
              <div
                className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#marineInsurance"
                aria-expanded="true"
                aria-controls="marineInsurance"
              >
                <h2 className="mb-0">Marine Insurance Policy Details</h2>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className={`${styles.radio_label} mt-1 mr-3`}>
                    Insurance From:
                  </h5>
                  <div className={`${styles.radio_form} `}>
                    {['radio'].map((type) => (
                      <div
                        key={`inline-${type}`}
                        className={styles.radio_group}
                      >
                        <Form.Check
                          className={styles.radio}
                          inline
                          label="Domestic"
                          name="insuranceFromType"
                          defaultChecked={insuranceData?.marineInsurance?.insuranceFromType == 'Domestic'}
                          onChange={(e) =>
                            saveMarineData(e.target.name, 'Domestic')
                          }
                          type={type}
                          id={`inline-${type}-1`}
                        />

                        <Form.Check
                          className={styles.radio}
                          inline
                          label="International"
                          defaultChecked={insuranceData?.marineInsurance?.insuranceFromType == 'International'}
                          name="insuranceFromType"
                          type={type}
                          id={`inline-${type}-2`}
                          onChange={(e) =>
                            saveMarineData(e.target.name, 'International')
                          }
                        />
                      </div>
                    ))}
                  </div>

                  <span>+</span>
                </div>
              </div>
              <div
                id="marineInsurance"
                className="collapse"
                aria-labelledby="marineInsurance"
              >
                <div className={` ${styles.cardBody} card-body  border_color`}>
                  <div className={` ${styles.content}`}>
                    <div className={` ${styles.body}`}>
                      <Row>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            name="policyNumber"
                            defaultValue={insuranceData?.marineInsurance?.policyNumber}
                            onChange={(e) =>
                              saveMarineData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Policy Number
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <select
                              name="nameOfInsurer"
                              onChange={(e) =>
                                saveMarineData(e.target.name, e.target.value)
                              }
                              value={insuranceData?.marineInsurance?.nameOfInsurer}
                              className={`${styles.input_field} ${styles.customSelect}   input form-control`}
                            >
                              <option disabled>Select an option</option>
                              <option value="Policy Bazaar">
                                Policy Bazaar
                              </option>
                              <option value="TATA AIG">TATA AIG</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Name of Insurer
                            </label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                          
                              type="text"
                              name="gstOfInsurer"
                              defaultValue={insuranceData?.marineInsurance?.gstOfInsurer}
                              onChange={(e) =>
                                saveMarineData(e.target.name, e.target.value)
                              }
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              GSTN of Insurer
                              {marineData?.insuranceFromType === 'Domestic' && (
                                <strong className="text-danger">*</strong>
                              )}
                            </label>
                           
                          </div>
                        </Col>

                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            defaultValue={insuranceData?.marineInsurance?.nameOfInsured}
                            name="nameOfInsured"
                            onChange={(e) =>
                              saveMarineData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Name of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            name="gstOfInsured"
                            defaultValue={insuranceData?.marineInsurance?.gstOfInsured}
                            onChange={(e) =>
                              saveMarineData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            GSTN of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender
                              name="insuranceFrom"
                              defaultDate={insuranceData?.marineInsurance?.insuranceFrom?.split('T')[0]}
                              saveDate={saveDate}
                              labelName="Insurance from"
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender
                              name="insuranceTo"
                              defaultDate={insuranceData?.marineInsurance?.insuranceTo?.split('T')[0]}
                              saveDate={saveDate}
                              labelName="Insurance to"
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="number"
                            name="periodOfInsurance"
                            defaultValue={insuranceData?.marineInsurance?.periodOfInsurance}
                            onKeyDown={(evt) =>
                              evt.key === 'e' && evt.preventDefault()
                            }
                            onChange={(e) =>
                              saveMarineData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Period of Insurance (In days)
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <select
                              value={_get(insuranceData, 'order.termsheet.transactionDetails.lcOpeningBank', insuranceData?.quotationRequest?.lossPayee)}
                              name="lossPayee"
                              onChange={(e) =>
                                saveMarineData(e.target.name, e.target.value)
                              }
                              // value={insuranceData?.marineInsurance?.lossPayee}
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                            >
                              <option>Select an option</option>
                              <option value="Reserve Bank of Spain">Reserve Bank of Spain</option>
                              <option value='Zurcher Kantonal Bank,Zurich' >Zurcher Kantonal Bank,Zurich</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Loss Payee
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="number"
                            defaultValue={insuranceData?.marineInsurance?.premiumAmount}
                            name="premiumAmount"
                            onChange={(e) =>
                              saveMarineData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Premium Amount
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <UploadDocument
              docName={`Policy Document  ${ insuranceType=="Marine Insurance"?"- Marine":insuranceType=="Storage Insurance"?"-Storage":"- Marine and Storage"}`}
              uploadDocument1={uploadDocument1}
            />
          </>
        ) : insuranceData?.quotationRequest?.insuranceType ==
          'Storage Insurance' ? (
          <>
            <div
              className={`${styles.wrapper} vessel_card border_color mt-4 card`}
            >
              <div
                className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#storageInsurance"
                aria-expanded="true"
                aria-controls="storageInsurance"
              >
                <h2 className="mb-0">Storage Insurance Details</h2>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className={`${styles.radio_label} mt-1 mr-3`}>
                    Insurance From:
                  </h5>
                  <div className={`${styles.radio_form} `}>
                    {['radio'].map((type) => (
                      <div
                        key={`inline-${type}`}
                        className={styles.radio_group}
                      >
                        <Form.Check
                          className={styles.radio}
                          inline
                          label="Domestic"
                          name="insuranceFromType"
                          defaultChecked={insuranceData?.storageInsurance?.insuranceFromType == 'Domestic'}
                          onChange={(e) =>
                            saveStorageData(e.target.name, 'Domestic')
                          }
                          // name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />

                        <Form.Check
                          className={styles.radio}
                          inline
                          label="International"
                          name="insuranceFromType"
                          defaultChecked={insuranceData?.storageInsurance?.insuranceFromType == 'International'}
                          onChange={(e) =>
                            saveStorageData(e.target.name, 'International')
                          }
                          // name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </div>

                  <span>+</span>
                </div>
              </div>
              <div
                id="storageInsurance"
                className="collapse"
                aria-labelledby="storageInsurance"
              >
                <div className={` ${styles.cardBody} card-body  border_color`}>
                  <div className={` ${styles.content}`}>
                    <div className={` ${styles.body}`}>
                      <Row>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                              style={{ color: '#EA3F3F' }}
                              required
                              type="text"
                              name="policyNumber"
                              defaultValue={insuranceData?.storageInsurance?.policyNumber}
                              onChange={(e) =>
                                saveStorageData(e.target.name, e.target.value)
                              }
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Policy Number
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.checked_image} img-fluid`}
                              src="/static/approved.svg"
                              alt="Info circle"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <select
                              name="nameOfInsurer"
                              onChange={(e) =>
                                saveStorageData(e.target.name, e.target.value)
                              }
                              value={insuranceData?.storageInsurance?.nameOfInsurer}
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                            >
                              <option disabled>Select an option</option>
                              <option value="Policy Bazaar">
                                Policy Bazaar
                              </option>
                              <option value="TATA AIG">TATA AIG</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Name of Insurer
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                            
                              required
                              name="gstOfInsurer"
                              defaultValue={insuranceData?.storageInsurance?.gstOfInsurer}
                              onChange={(e) =>
                                saveStorageData(e.target.name, e.target.value)
                              }
                              type="text"
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              GSTN of Insurer
                            </label>
                          
                          </div>
                        </Col>

                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            name="nameOfInsured"
                            defaultValue={insuranceData?.storageInsurance?.nameOfInsured}
                            onChange={(e) =>
                              saveStorageData(e.target.name, e.target.value)
                            }
                            type="text"
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Name of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            name="gstOfInsured"
                            defaultValue={insuranceData?.storageInsurance?.gstOfInsured}
                            onChange={(e) =>
                              saveStorageData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            GSTN of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender
                              name="insuranceFrom"
                              defaultDate={insuranceData?.storageInsurance?.insuranceFrom?.split('T')[0]}
                              saveDate={saveStorageDate}
                              labelName="Insurance from"
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender
                              name="insuranceTo"
                              defaultDate={insuranceData?.storageInsurance?.insuranceTo?.split('T')[0]}
                              saveDate={saveStorageDate}
                              labelName="Insurance to"
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="number"
                            name="periodOfInsurance"
                            defaultValue={insuranceData?.storageInsurance?.periodOfInsurance}
                            onKeyDown={(evt) =>
                              evt.key === 'e' && evt.preventDefault()
                            }
                            onChange={(e) =>
                              saveStorageData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Period of Insurance (In days)
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <select
                              name="lossPayee"
                              onChange={(e) =>
                                saveStorageData(e.target.name, e.target.value)
                              }
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                              <option disabled>Select an option</option>
                              <option
                                value={
                                  insuranceData?.quotationRequest?.lossPayee
                                }
                              >
                                {insuranceData?.quotationRequest?.lossPayee}
                              </option>
                              <option value="SBI">SBI</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Loss Payee
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow}  image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            name="premiumAmount"
                            defaultValue={insuranceData?.storageInsurance?.premiumAmount}
                            onChange={(e) =>
                              saveStorageData(e.target.name, e.target.value)
                            }
                            type="number"
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Premium Amount
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <UploadDocument
              docName="Policy Document - Storage"
              uploadDocument1={uploadDocument2}
            />
          </>
        ) : insuranceData?.quotationRequest?.insuranceType == 'Marine & Storage Insurance' ? (
          <>
            <div
              className={`${styles.wrapper} vessel_card border_color mt-4 card`}
            >
              <div
                className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
                
                style={{ cursor: 'default' }}
              >
                <h2 className="mb-0">Marine Insurance Policy Details</h2>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className={`${styles.radio_label} mt-1 mr-3`}>
                    Insurance From:
                  </h5>
                  <div className={`${styles.radio_form} `}>
                    {['radio'].map((type) => (
                      <div
                        key={`inline-${type}`}
                        className={styles.radio_group}
                      >
                        <Form.Check
                          className={styles.radio}
                          inline
                          label="Domestic"
                          name="insuranceFromType"
                          defaultChecked={insuranceData?.marineInsurance?.insuranceFromType == 'Domestic'}
                          onChange={(e) =>
                            saveMarineData(e.target.name, 'Domestic')
                          }
                          type={type}
                          id={`inline-${type}-1`}
                        />

                        <Form.Check
                          className={styles.radio}
                          inline
                          label="International"
                          name="insuranceFromType"
                          defaultChecked={insuranceData?.marineInsurance?.insuranceFromType == 'International'}
                          onChange={(e) =>
                            saveMarineData(e.target.name, 'International')
                          }
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </div>

                  <span data-toggle="collapse"
                data-target="#marineInsurance"
                aria-expanded="true"
                aria-controls="marineInsurance"
                style={{cursor:'pointer'}}>+</span>
                </div>
              </div>
              <div
                id="marineInsurance"
                className="collapse"
                aria-labelledby="marineInsurance"
              >
                <div
                  className={` ${styles.cardBody} vessel_card card-body  border_color`}
                >
                  <div className={` ${styles.content}`}>
                    <div className={` ${styles.body}`}>
                      <Row>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            name="policyNumber"
                            defaultValue={insuranceData?.marineInsurance?.policyNumber}
                            onChange={(e) =>
                              saveMarineData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Policy Number
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <select
                              name="nameOfInsurer"
                              onChange={(e) =>
                                saveMarineData(e.target.name, e.target.value)
                              }
                              defaultValue={insuranceData?.marineInsurance?.nameOfInsurer}
                              className={`${styles.input_field} ${styles.customSelect}   input form-control`}
                            >
                              <option disabled>Select an option</option>
                              <option value="Policy Bazaar">
                                Policy Bazaar
                              </option>
                              <option value="TATA AIG">TATA AIG</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Name of Insurer
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              style={{ borderColor: '#43C34D' }}
                              type="text"
                              name="gstOfInsurer"
                              defaultValue={insuranceData?.marineInsurance?.gstOfInsurer}
                              onChange={(e) =>
                                saveMarineData(e.target.name, e.target.value)
                              }
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              GSTN of Insurer
                            </label>
                         
                          </div>
                        </Col>

                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            name="nameOfInsured"
                            defaultValue={insuranceData?.marineInsurance?.nameOfInsured}
                            onChange={(e) =>
                              saveMarineData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Name of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            name="gstOfInsured"
                            defaultValue={insuranceData?.marineInsurance?.gstOfInsured}
                            onChange={(e) =>
                              saveMarineData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            GSTN of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender
                              name="insuranceFrom"
                              defaultDate={insuranceData?.marineInsurance?.insuranceFrom?.split('T')[0]}
                              saveDate={saveDate}
                              labelName="Insurance from"
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender
                              name="insuranceTo"
                              defaultDate={insuranceData?.marineInsurance?.insuranceTo?.split('T')[0]}
                              saveDate={saveDate}
                              labelName="Insurance to"
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="number"
                            name="periodOfInsurance"
                            defaultValue={insuranceData?.marineInsurance?.periodOfInsurance}
                            onKeyDown={(evt) =>
                              evt.key === 'e' && evt.preventDefault()
                            }
                            onChange={(e) =>
                              saveMarineData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Period of Insurance (In days)
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <select
                              name="lossPayee"
                              onChange={(e) =>
                                saveMarineData(e.target.name, e.target.value)
                              }
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                            >
                              <option disabled>Select an option</option>
                              <option
                                value={
                                  insuranceData?.quotationRequest?.lossPayee
                                }
                              >
                                {insuranceData?.quotationRequest?.lossPayee}
                              </option>
                              <option value="SBI">SBI</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Loss Payee
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="number"
                            name="premiumAmount"
                            defaultValue={insuranceData?.marineInsurance?.premiumAmount}
                            onChange={(e) =>
                              saveMarineData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Premium Amount
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.wrapper} vessel_card border_color mt-4 card`}
            >
              <div
                className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#storageInsurance"
                aria-expanded="true"
                aria-controls="storageInsurance"
              >
                <h2 className="mb-0">Storage Insurance Details</h2>
                <div className={styles.radio_label}>
                  Insurance From:{' '}
                  <span
                    className={styles.insurance_from}
                    style={{ color: '#111111' }}
                  >
                    Domestic
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className={`${styles.radio_label}  mr-5`}>
                    Is the Insurer same as Marine Insurance?
                  </div>
                  <div className={`${styles.theme} d-flex align-items-center`}>
                    <div
                      className={`${styles.toggle_label} form-check-label mr-3`}
                    >
                      Yes
                    </div>
                    <label className={styles.switch}>
                      <input
                        defaultChecked={!isInsurerSameData}
                        onClick={() => handleIsInsuranceSame()}
                        type="checkbox"
                      />
                      <span
                        className={`${styles.slider} ${styles.round}`}
                      ></span>
                    </label>
                    <div
                      className={`${styles.toggle_label} form-check-label ml-3 mr-3`}
                    >
                      No
                    </div>
                  </div>

                  <span>+</span>
                </div>{' '}
              </div>
              <div
                id="storageInsurance"
                className="collapse"
                aria-labelledby="storageInsurance"
              >
                <div className={` ${styles.cardBody} card-body  border_color`}>
                  <div className={` ${styles.content}`}>
                    <div className={` ${styles.body}`}>
                      <Row>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                              style={{ color: '#EA3F3F' }}
                              required
                              type="text"
                              defaultValue={insuranceData?.storageInsurance?.policyNumber}
                              name="policyNumber"
                              onChange={(e) =>
                                saveStorageData(e.target.name, e.target.value)
                              }
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Policy Number
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.checked_image} img-fluid`}
                              src="/static/info-circle-red.svg"
                              alt="Info circle"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <select
                              name="nameOfInsurer"
                              onChange={(e) =>
                                saveStorageData(e.target.name, e.target.value)
                              }
                              value={insuranceData?.storageInsurance?.nameOfInsurer}
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                            >
                              <option disabled>Select an option</option>
                              <option value="Policy Bazaar">
                                Policy Bazaar
                              </option>
                              <option value="TATA AIG">TATA AIG</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Name of Insurer
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                            
                              required
                              name="gstOfInsurer"
                              defaultValue={insuranceData?.storageInsurance?.gstOfInsurer}
                              onChange={(e) =>
                                saveStorageData(e.target.name, e.target.value)
                              }
                              type="text"
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              GST of Insurer
                            </label>
                          
                          </div>
                        </Col>

                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            name="nameOfInsured"
                            defaultValue={insuranceData?.storageInsurance?.nameOfInsured}
                            onChange={(e) =>
                              saveStorageData(e.target.name, e.target.value)
                            }
                            type="text"
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Name of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            defaultValue={insuranceData?.storageInsurance?.gstOfInsured}
                            name="gstOfInsured"
                            onChange={(e) =>
                              saveStorageData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            GSTN of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            {/* <DateCalender name='insuranceFrom' defaultDate={storageData?.insuranceFrom ? storageData?.insuranceFrom?.split('T')[0] : ''} saveDate={saveStorageDate} labelName="Insurance from" /> */}
                            <DateCalender
                              name="insuranceFrom"
                              defaultDate={insuranceData?.storageInsurance?.insuranceFrom?.split('T')[0]}
                              saveDate={saveStorageDate}
                              labelName="Insurance from"
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            {/* <DateCalender name='insuranceTo' defaultDate={storageData?.insuranceTo ? storageData?.insuranceTo?.split('T')[0] : ''}saveDate={saveStorageDate} labelName="Insurance to" /> */}
                            <DateCalender
                              name="insuranceTo"
                              defaultDate={insuranceData?.storageInsurance?.insuranceTo?.split('T')[0]}
                              saveDate={saveStorageDate}
                              labelName="Insurance to"
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="number"
                            name="periodOfInsurance"
                            onKeyDown={(evt) =>
                              evt.key === 'e' && evt.preventDefault()
                            }
                            defaultValue={insuranceData?.storageInsurance?.periodOfInsurance}
                            onChange={(e) =>
                              saveStorageData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Period of Insurance (In days)
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <select
                              name="lossPayee"
                              onChange={(e) =>
                                saveStorageData(e.target.name, e.target.value)
                              }
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                              <option disabled>Select an option</option>
                              <option value={insuranceData?.storageInsurance?.lossPayee}>
                                {insuranceData?.storageInsurance?.lossPayee}
                              </option>
                              <option
                                value={
                                  insuranceData?.quotationRequest?.lossPayee
                                }
                              >
                                {insuranceData?.quotationRequest?.lossPayee}
                              </option>
                              <option value="SBI">SBI</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Loss Payee
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            name="premiumAmount"
                            defaultValue={insuranceData?.storageInsurance?.premiumAmount}
                            onChange={(e) =>
                              saveStorageData(e.target.name, e.target.value)
                            }
                            type="number"
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Premium Amount
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                                Policy Document - Marine & Storage
                                <strong className="text-danger">*</strong>
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
                              {/* <td>
                                {' '}
                                <input
                                  className={styles.input_field}
                                  type="text"
                                  placeholder="Nomination_Document.pdf"
                                />
                                <img
                                  className={`${styles.close_image} img-fluid `}
                                  src="/static/close.svg"
                                  alt="close"
                                />
                              </td> */}
                              <td>
                                <div className={styles.uploadBtnWrapper}>
                                  <input
                                    type="file"
                                    onChange={(e) => uploadDocument1(e)}
                                    name="myfile"
                                  />
                                  <button
                                    name="marinePolicyDocument"
                                    className={`${styles.upload_btn} btn`}
                                  >
                                    Upload
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                Policy Document - Storage
                                <strong className="text-danger">*</strong>
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
                                <div className={styles.uploadBtnWrapper}>
                                  <input
                                    type="file"
                                    onChange={(e) => uploadDocument2(e)}
                                    name="myfile"
                                  />
                                  <button
                                    name="storagePolicyDocument"
                                    className={`${styles.upload_btn} btn`}
                                  >
                                    Upload
                                  </button>
                                </div>
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
          </>
        ) : (
          ''
        )}
      </div>
      <div className={`${styles.root} card`}>
        <div onClick={() => handleRoute()} className={`${styles.reject} ml-3`}>
          <span>Cancel</span>
        </div>
        <div
          onClick={() => handleInsuranceUpdate()}
          className={`${styles.approve} ml-3`}
        >
          <span>Submit</span>
        </div>
      </div>
    </div>
  )
}
export default Index
