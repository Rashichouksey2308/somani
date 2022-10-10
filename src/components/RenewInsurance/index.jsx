/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import InspectionDocument from '../InspectionDocument'
import UploadDocument from '../UploadDocument'
import DateCalender from '../DateCalender'
import { useSelector, useDispatch } from 'react-redux'
import _get from 'lodash/get'
import SubmitBar from './SubmitBar'
import { GettingAllInsurance, RenewInsurance } from 'redux/insurance/action'
import UploadOther from '../UploadOther'
import { addPrefixOrSuffix, removePrefixOrSuffix } from 'utils/helper'
import {toast} from 'react-toastify'
import Router from 'next/router'

const Index = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    let id = sessionStorage.getItem('quotationId')
    dispatch(GettingAllInsurance(`?insuranceId=${id}`))
  }, [dispatch])

  const { insuranceResponse } = useSelector((state) => state.insurance)

  let insuranceData = _get(insuranceResponse, 'data[0]', {})

  const [insuranceType, setInsuranceType] = useState(null)

  const [marineData, setMarineData] = useState({
    policyNumber: '',
    insuranceFrom: '',
    insuranceTo: '',
    updatePolicyNumber: '',
    renewalDate: '',
    lossPayee: '',
    premiumAmount: null,
  })

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
    policyNumber: '',
    insuranceFrom: '',
    renewalDate: '',
    insuranceTo: '',
    updatePolicyNumber: '',
    periodOfInsurance: null,
    lossPayee: '',
    premiumAmount: null,
  })

  const saveStorageDate = (value, name) => {
    // console.log(value, name, 'save date')
    const d = new Date(value)
    let text = d.toISOString()
    setStorageData(name, text)
  }

  const saveStorageData = (name, value) => {
    let newInput = { ...storageData }
    newInput[name] = value
    setStorageData(newInput)
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

  const validation = () => {
    let toastMessage = ''
    if(insuranceType == null){
      toastMessage = 'PLEASE SELECT INSURANCE TYPE'
      if(!toast.isActive(toastMessage)){
        toast.error(toastMessage, {toastId: toastMessage})
      }
      return false
    }
    if(insuranceType && insuranceDocument.storagePolicyDocument == null){
      toastMessage = 'PLEASE UPLOAD STORAGE POLICY DOCUMENT'
      if(!toast.isActive(toastMessage)){
        toast.error(toastMessage, {toastId: toastMessage})
      }
      return false
    }
    if(insuranceType == false && insuranceDocument.marinePolicyDocument == null){
      toastMessage = 'PLEASE UPLOAD MARINE POLICY DOCUMENT'
      if(!toast.isActive(toastMessage)){
        toast.error(toastMessage, {toastId: toastMessage})
      }
      return false
    }
    return true
  }

  const handleInsuranceUpdate = () => {
    if(!validation()) return

    let fd = new FormData()

    if(insuranceType){
      let storageObj = {...storageData}
      storageObj.premiumAmount = removePrefixOrSuffix(storageData.premiumAmount)
      fd.append('storageInsurance', JSON.stringify(storageObj))
      fd.append(
        'insuranceType', JSON.stringify('Storage Insurance')
      )
      fd.append('storagePolicyDocument', insuranceDocument.storagePolicyDocument)
      fd.append('insuranceId', insuranceData?._id)
      dispatch(RenewInsurance(fd))


    }
    else if(insuranceType === false) {
      let marineObj = {...marineData}
      marineObj.premiumAmount = removePrefixOrSuffix(marineData.premiumAmount)
    fd.append('marineInsurance', JSON.stringify(marineObj))
    fd.append('insuranceId', insuranceData?._id)
    fd.append(
      'insuranceType',
      JSON.stringify('Marine Insurance'),
    )
    fd.append('marinePolicyDocument', insuranceDocument.marinePolicyDocument)

    dispatch(RenewInsurance(fd))
    }
  }

  return (
    <div className={`${styles.card} accordion_body container-fluid`}>
      <div className={`${styles.head_container}`}>
        <div className={styles.head_header}>
          <div style={{cursor:'pointer'}}  onClick={() => Router.push('/insurance/form')}>
          <img
            className={`${styles.back_arrow} img-fluid`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"
          />
          </div>
          <h1 className={styles.heading}>
            {insuranceData?.company?.companyName} - Ramal001-000001
          </h1>
        </div>
      </div>

      <div className={`${styles.vessel_card}  vessel_card border_color`}>
        <div className={`${styles.wrapper} border_color card`}>
          <div
            className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
            style={{ cursor: 'default' }}
          >
            <div className="d-lg-flex align-items-center d-inline-block ">
              <h2 className="mb-0">Renewal Insurance</h2>
              <div className={`${styles.radio_form} ml-lg-5 ml-n4`}>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className={styles.radio_group}>
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Marine"
                      name="group1"
                      onChange={() => setInsuranceType(false)}
                      type={type}
                      checked={insuranceType == false ? 'checked' : ''}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Storage"
                      name="group1"
                      onChange={() => setInsuranceType(true)}
                      type={type}
                      checked={insuranceType == true ? 'checked' : ''}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <span
              data-toggle="collapse"
              data-target="#storageInsurance"
              aria-expanded="true"
              aria-controls="storageInsurance"
              style={{ cursor: 'pointer' }}
            >
              +
            </span>
          </div>
          {insuranceType == false ? (
            <>
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
                            <select
                              name="policyNumber"
                              onChange={(e) =>
                                saveMarineData(e.target.name, e.target.value)
                              }
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                              <option disabled selected>Select an option</option>
                              <option
                                value={
                                  insuranceData?.marineInsurance?.policyNumber
                                }
                              >
                                {insuranceData?.marineInsurance?.policyNumber}
                              </option>
                              <option value="IRDAN1277P09098">
                                IRDAN1277P09098
                              </option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Select Policy Number
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
                            type="text"
                            name='updatePolicyNumber'
                            onChange={(e)=> saveMarineData(e.target.name, e.target.value)}
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Update Policy Number
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            name="premiumAmount"
                            value={addPrefixOrSuffix(marineData.premiumAmount ? marineData.premiumAmount : 0, 'INR', 'front')}
                            onChange={(e) =>
                              saveMarineData(e.target.name, e.target.value)
                            }
                            type="text"
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Premium Amount
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <DateCalender name='renewalDate' saveDate={saveDate} labelName="Renewal date" />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender name='insuranceFrom' saveDate={saveDate} labelName="Insurance from" />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender name='insuranceTo' saveDate={saveDate} labelName="Insurance to" />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>

                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <select
                            name='lossPayee' onChange={(e)=>saveMarineData(e.target.name, e.target.value)}  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                              <option selected disabled>Select an option</option>
                              <option value='HDFC Bank'>HDFC Bank</option>
                              <option value='Swiss Bank'>Swiss Bank</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Loss Payee Bank
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div>
                {' '}
             
                <UploadDocument
                  docName={`Policy Document ${
                    insuranceType == false ? `- Marine` : `- Storage`
                  } `}
                  uploadDocument1={uploadDocument1}
                />
            
              </div> */}
            </>
          ) : (
            <>
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
                            <select
                              name="policyNumber"
                              onChange={(e) =>
                                saveStorageData(e.target.name, e.target.value)
                              }
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                              <option disabled selected>Select an option</option>
                              <option
                                value={
                                  insuranceData?.marineInsurance?.policyNumber
                                }
                              >
                                {insuranceData?.marineInsurance?.policyNumber}
                              </option>
                              <option value="IRDAN1277P09098">
                                IRDAN1277P09098
                              </option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Select Policy Number
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
                            type="text"
                            name='updatePolicyNumber'
                            onChange={(e)=> saveStorageData(e.target.name, e.target.value)}
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Update Policy Number
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            name="premiumAmount"
                            value={addPrefixOrSuffix(storageData.premiumAmount ? storageData.premiumAmount : 0, 'INR', 'front')}
                            onChange={(e) =>
                              saveStorageData(e.target.name, e.target.value)
                            }
                            type="text"
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Premium Amount
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <DateCalender name='renewalDate' saveDate={saveStorageDate} labelName="Renewal date" />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender name='insuranceFrom' saveDate={saveStorageDate} labelName="Insurance from" />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender name='insuranceTo' saveDate={saveStorageDate} labelName="Insurance to" />
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
                            name= 'periodOfInsurance'
                            onChange={(e)=>saveStorageData(e.target.name, e.target.value)}
                            onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Period of Insurance (Days)
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <select
                            onChange={(e)=> saveStorageData(e.target.name, e.target.value)} name='lossPayee'  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                              <option disabled selected>Select an option</option>
                              <option value='HDFC Bank'>HDFC Bank</option>
                              <option value='Swiss Bank'>Swiss Bank</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Loss Payee Bank
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
             
            </>
          )}
        </div>
        <div className='mt-4'>
                {' '}
                <UploadDocument
                  docName={`Policy Document ${
                    insuranceType == false ? `- Marine` : `- Storage`
                  } `}
                  uploadDocument1={uploadDocument2}
                />
              </div>
      </div>
      {/* <InspectionDocument
        lcDoc={insuranceDocument}
        module="Agreements&Insurance&LC&Opening"
        orderId={insuranceData?.order?._id}
        documentName={`Policy Document ${
          insuranceType == false ? `- Marine` : `- Storage`
        } `}
      /> */}
      <UploadOther
        orderid={insuranceData?.order?._id}
        module="Agreements&Insurance&LC&Opening"
      />
      <SubmitBar handleSubmit={handleInsuranceUpdate} />
    </div>
  )
}
export default Index
