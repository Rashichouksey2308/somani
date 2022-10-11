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
import {
  setPageName,
  setDynamicName,
  setDynamicOrder,
} from '../../../../src/redux/userData/action'
import _get from 'lodash/get'
import Router from 'next/router'
import { toast } from 'react-toastify'
import { addPrefixOrSuffix, removePrefixOrSuffix } from '../../../../src/utils/helper'
import {
  settingSidebar,
} from '../../../../src/redux/breadcrumb/action'

import moment from 'moment/moment'

const Index = () => {
  const [insuranceType, setInsuranceType] = useState('')
  const [isFieldInFocus, setIsFieldInFocus] = useState(false)


  const dispatch = useDispatch()


  useEffect(() => {
    let id = sessionStorage.getItem('quotationId')
    dispatch(GettingAllInsurance(`?insuranceId=${id}`))
  }, [dispatch])

  const { insuranceResponse } = useSelector((state) => state.insurance)
  const [insuranceData, setInsuranceData] = useState()


  useEffect(() => {
    dispatch(setPageName('insurance Request Letter'))
    dispatch(
      setDynamicName(_get(insuranceResponse, 'data[0].company.companyName', 'Company Name')),
    )
    dispatch(setDynamicOrder(_get(insuranceResponse, 'data[0].order.orderId', 'Order Id')))
    setInsuranceData(_get(insuranceResponse, 'data[0]', {}))
  }, [insuranceResponse])
  
  console.log(insuranceResponse, 'insuranceResponse')

  const [marineData, setMarineData] = useState({
    policyNumber: '',
    nameOfInsurer: '',
    gstOfInsurer: '',
    nameOfInsured: '',
    gstOfInsured: '',
    insuranceFrom: '',
    insuranceTo: '',
    periodOfInsurance: '',
    insuranceFromType: '',
    lossPayee: '',
    premiumAmount: '',
  })

  const [storageData, setStorageData] = useState({
    policyNumber: '',
    nameOfInsurer: '',
    gstOfInsurer: '',
    nameOfInsured: '',
    gstOfInsured: '',
    insuranceFrom: '',
    insuranceTo: '',
    periodOfInsurance: '',
    insuranceFromType: '',
    lossPayee: '',
    premiumAmount: '',
  })

  console.log( marineData, 'Premium', storageData)

  useEffect(() => {
    setMarineData({
      policyNumber: insuranceData?.marineInsurance?.policyNumber|| "",
      nameOfInsurer: insuranceData?.marineInsurance?.nameOfInsurer|| "Policy Bazaar",
      gstOfInsurer: insuranceData?.marineInsurance?.gstOfInsurer|| "",
      nameOfInsured: insuranceData?.marineInsurance?.nameOfInsured|| "",
      gstOfInsured: insuranceData?.marineInsurance?.gstOfInsured|| "",
      insuranceFrom: insuranceData?.marineInsurance?.insuranceFrom,
      insuranceTo: insuranceData?.marineInsurance?.insuranceTo,
      periodOfInsurance: getDifferenceInDaysMarine() ? getDifferenceInDaysMarine() : insuranceData?.marineInsurance?.periodOfInsurance,
      insuranceFromType: insuranceData?.marineInsurance?.insuranceFromType,
      lossPayee: _get(insuranceData, 'order.termsheet.transactionDetails.lcOpeningBank', insuranceData?.quotationRequest?.lossPayee)|| "",
      premiumAmount: insuranceData?.marineInsurance?.premiumAmount ?? 0,
    })
    setStorageData({
      policyNumber: insuranceData?.storageInsurance?.policyNumber,
      nameOfInsurer: insuranceData?.storageInsurance?.nameOfInsurer,
      gstOfInsurer: insuranceData?.storageInsurance?.gstOfInsurer,
      nameOfInsured: insuranceData?.storageInsurance?.nameOfInsured,
      gstOfInsured: insuranceData?.storageInsurance?.gstOfInsured,
      insuranceFrom: insuranceData?.storageInsurance?.insuranceFrom,
      insuranceTo: insuranceData?.storageInsurance?.insuranceTo,
      periodOfInsurance: getDifferenceInDaysStorage() ? getDifferenceInDaysStorage() : insuranceData?.storageInsurance?.periodOfInsurance,
      insuranceFromType: insuranceData?.storageInsurance?.insuranceFromType,
      lossPayee: insuranceData?.storageInsurance?.lossPayee||"",
      premiumAmount: insuranceData?.storageInsurance?.premiumAmount ?? 0,
    })
    setInsuranceDocument({
      storagePolicyDocument: insuranceData?.storagePolicyDocument || null,
    marinePolicyDocument: insuranceData?.marinePolicyDocument || null,
    })
  }, [insuranceResponse,insuranceData])
 console.log(marineData,"marineData")

 let dateM1 = new Date(marineData?.insuranceFrom)
 let dateM2 = new Date(marineData?.insuranceTo)
 

 function getDifferenceInDaysMarine() {
  let date1 = moment(dateM1, "DD.MM.YYYY");
  let date2 = moment(dateM2, "DD.MM.YYYY");
  return date2.diff(date1, 'days')
}

let dateS1 = new Date(storageData?.insuranceFrom)
let dateS2 = new Date(storageData?.insuranceTo)


function getDifferenceInDaysStorage() {
  let date3 = moment(dateS1, 'DD.MM.YYYY')
  let date4 = moment(dateS2, 'DD.MM.YYYY')
  return date4.diff(date3, 'days')
}

  const saveMarineData = (name, value) => {
    let newInput = { ...marineData }
    newInput[name] = value
    // if(insuranceDocument){
    //   setStorageData(newInput)
    // }
    setMarineData(newInput)
  }
  console.log(marineData,"setMarineData")
  const saveDate = (value, name) => {
    // console.log(value, name, 'save date')
    const d = new Date(value)
    let text = d.toISOString()
    saveMarineData(name, text)
  }


  const saveStorageDate = (value, name) => {
    // console.log(value, name, 'save date')
    const d = new Date(value)
    let text = d.toISOString()
    saveStorageData(name, text)
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

  const handleClose = () => {
    setInsuranceDocument({ ...insuranceDocument, marinePolicyDocument: null })
  }

  const handleCloseS = () => {
    setInsuranceDocument({ ...insuranceDocument, storagePolicyDocument: null })
  }

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
    setIsInsurerSameData(!isInsurerSameData)
   
    
  }
  useEffect(() => {
   if(isInsurerSameData){
    
    setStorageData({ ...marineData })
   }
   if(isInsurerSameData==false){
     console.log(insuranceData,"insuranceData?.storageInsurance?.policyNumber")
    setStorageData({
      policyNumber: insuranceData?.storageInsurance?.policyNumber ||"",
      nameOfInsurer: insuranceData?.storageInsurance?.nameOfInsurer || "",
      gstOfInsurer: insuranceData?.storageInsurance?.gstOfInsurer||"",
      nameOfInsured: insuranceData?.storageInsurance?.nameOfInsured||"",
      gstOfInsured: insuranceData?.storageInsurance?.gstOfInsured||"",
      insuranceFrom: insuranceData?.storageInsurance?.insuranceFrom,
      insuranceTo: insuranceData?.storageInsurance?.insuranceTo,
      periodOfInsurance: insuranceData?.storageInsurance?.periodOfInsurance ||"",
      insuranceFromType: insuranceData?.storageInsurance?.insuranceFromType,
      lossPayee: insuranceData?.storageInsurance?.lossPayee||"",
      premiumAmount: insuranceData?.storageInsurance?.premiumAmount ?? 0,
    })
   
   }
  },
  [isInsurerSameData])

  const validate = () => {
    let toastMessage = ''
    console.log(marineData, "marineData")
    if (insuranceData?.quotationRequest?.insuranceType == 'Marine Insurance') {
      if (
        marineData.insuranceFromType == 'Domestic' &&
        (marineData.gstOfInsurer == '' || marineData.gstOfInsurer == undefined)
      ) {
        toastMessage = 'GST OF INSURER IS MANDATORY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        marineData.insuranceFromType == 'Domestic' &&
        (marineData.gstOfInsured == '' || marineData.gstOfInsured == undefined )
      ) {
        toastMessage = 'GST OF INSURED IS MANDATORY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        marineData.insuranceFrom == '' || marineData.insuranceFrom == undefined
      ) {
        toastMessage = 'PLEASE SELECT INSURANCE FROM'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }

      if (
        marineData.insuranceTo == '' || marineData.insuranceTo == undefined
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
        (storageData.gstOfInsurer == '' || storageData.gstOfInsurer == undefined )
      ) {
        toastMessage = 'GST OF INSURER IS MANDATORY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        storageData.insuranceFromType == 'Domestic' &&
        (storageData.gstOfInsured == '' || storageData.gstOfInsured == undefined)
      ) {
        toastMessage = 'GST OF INSURED IS MANDATORY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        storageData.insuranceFrom == '' || storageData.insuranceFrom == undefined
      ) {
        toastMessage = 'PLEASE SELECT INSURANCE FROM'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        storageData.insuranceTo == '' || storageData.insuranceTo == undefined
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
        storageData.gstOfInsurer == '' || storageData.gstOfInsurer == undefined
      ) {
        toastMessage = 'GST OF INSURER IS MANDATORY IN STORAGE INSURANCE'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        storageData.gstOfInsured == '' || storageData.gstOfInsured == undefined
      ) {
        toastMessage = 'GST OF INSURED IS MANDATORY IN STORAGE INSURANCE'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        marineData.insuranceFromType == 'Domestic' &&
        marineData.gstOfInsurer == '' || marineData.gstOfInsurer == undefined
      ) {
        toastMessage = 'GST OF INSURER IS MANDATORY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        marineData.insuranceFromType == 'Domestic' &&
        marineData.gstOfInsured == '' || marineData.gstOfInsured == undefined
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

  console.log(insuranceData, 'insuranceData')

  const handleInsuranceUpdate = async () => {
    if (!validate()) return

    let marineObj = { ...marineData }
    marineObj.premiumAmount = removePrefixOrSuffix(marineData.premiumAmount)

    let storageObj = { ...storageData }
    storageObj.premiumAmount = removePrefixOrSuffix(storageData.premiumAmount)

    let fd = new FormData()
    fd.append('marineInsurance', JSON.stringify(marineObj))
    fd.append('storageInsurance', JSON.stringify(storageObj))
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

     let code = await   dispatch(UpdateInsurance(fd))
     if(code==200){
         sessionStorage.setItem('inspectionId', _get(insuranceResponse, 'data[0].order.inspection', ""))
         dispatch(settingSidebar('Loading, Transit & Unloadinge', 'Inspection', 'Inspection', '3'))
         Router.push(`/third-party`)
       }

  }

  const handleRoute = () => {
    Router.push('/insurance')
  }

  return (
    <div className={`${styles.card} accordion_body container-fluid`}>
      <div className={styles.head_container}>
        <div className={`${styles.head_header}`}>
           
          <img
            style={{cursor:'pointer'}}  
            onClick={() => Router.push('/insurance')}
            className={`${styles.back_arrow} image_arrow img-fluid`}
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
                          checked={insuranceData?.marineInsurance?.insuranceFromType == 'Domestic'}
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
                          checked={insuranceData?.marineInsurance?.insuranceFromType == 'International'}
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

                  <span data-toggle="collapse"
                    data-target="#marineInsurance"
                    aria-expanded="true"
                    aria-controls="marineInsurance"
                    style={{ cursor: 'pointer' }}>+</span>
                </div>
              </div>
              <div
                id="marineInsurance"
                //className="collapse"
                aria-labelledby="marineInsurance"
              >
                <div className={` ${styles.cardBody} card-body  border_color`}>
                  <div className={` ${styles.content} border_color`}>
                    <div className={` ${styles.body}`}>
                      <Row>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            name="policyNumber"
                            value={marineData?.policyNumber}
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
                              value={marineData?.nameOfInsurer}
                              className={`${styles.input_field} ${styles.customSelect}   input form-control`}
                            >
                              <option selected disabled>Select an option</option>
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
                              value={marineData?.gstOfInsurer}
                              onChange={(e) =>
                                saveMarineData(e.target.name, e.target.value)
                              }
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              GSTIN of Insurer
                              {marineData?.insuranceFromType === 'Domestic' ? (
                                <strong className="text-danger">*</strong>
                              ): ''}
                            </label>

                          </div>
                        </Col>

                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            value={marineData?.nameOfInsured}
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
                            value={marineData?.gstOfInsured}
                            onChange={(e) =>
                              saveMarineData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            GSTIN of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender
                              name="insuranceFrom"
                              defaultDate={marineData?.insuranceFrom}
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
                              defaultDate={marineData?.insuranceTo}
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
                            value={ getDifferenceInDaysMarine() ? getDifferenceInDaysMarine() : marineData?.periodOfInsurance}
                            onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

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
                              value={marineData?.lossPayee}
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                            >
                              <option>Select an option</option>
                              {/* <option value="Reserve Bank of Spain">Reserve Bank of Spain</option> */}
                              <option value='Zurcher Kantonal Bank,Zurich' >Zurcher Kantonal Bank,Zurich</option>
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
                            type="text"
                            onFocus={(e) => {
                              setIsFieldInFocus(true),
                                e.target.type = 'number'
                            }}
                            onBlur={(e) => {
                              setIsFieldInFocus(false),
                                e.target.type = 'text'
                            }}
                            className={`${styles.input_field} input form-control`}
                            required

                            value={isFieldInFocus ?
                              marineData?.premiumAmount :
                              `${marineData?.premiumAmount === 'Domestic' ? 'INR' : 'USD'} ` + Number(marineData?.premiumAmount)?.toLocaleString()}
                            // defaultValue={addPrefixOrSuffix(insuranceData?.marineInsurance?.premiumAmount ? insuranceData?.marineInsurance?.premiumAmount : 0, 'INR', 'front', true)}
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
            {/* <UploadDocument
              docName='Policy Document - Marine'  
              uploadDocument1={uploadDocument1}
            /> */}
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
                                Policy Document - Marine
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
                                {/* <div className={styles.uploadBtnWrapper}>
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
                                </div> */}
                                {insuranceDocument && insuranceDocument.marinePolicyDocument == null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        // id={docName}
                                        type="file"
                                        name="marinePolicyDocument"
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDocument1(e)}
                                      />
                                      <button className={`${styles.button_upload} btn`}>
                                        Upload
                                      </button>
                                    </div>
                                  </>
                                ) : (
                                  <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                    <span>{insuranceDocument?.marinePolicyDocument?.name}</span>
                                    <img
                                      className={`${styles.close_image} image_arrow mr-2`}
                                      src="/static/close.svg"
                                      onClick={() => handleClose()}
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
          </>
        ) : insuranceData?.quotationRequest?.insuranceType ==
          'Storage Insurance' ? (
          <>
            <div
              className={`${styles.wrapper} vessel_card border_color mt-4 card`}
            >
              <div
                className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
                // data-toggle="collapse"
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
                          checked={storageData?.insuranceFromType == 'Domestic' ? 'checked' : ''}
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
                          checked={storageData?.insuranceFromType == 'International' ? 'checked' : ''}
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
                //  className="collapse"
                aria-labelledby="storageInsurance"
              >
                <div className={` ${styles.cardBody} card-body  border_color`}>
                  <div className={` ${styles.content} border_color`}>
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
                              value={storageData?.policyNumber}
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
                              value={storageData?.nameOfInsurer}
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                            >
                              <option selected disabled>Select an option</option>
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
                              value={storageData?.gstOfInsurer}
                              onChange={(e) =>
                                saveStorageData(e.target.name, e.target.value)
                              }
                              type="text"
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              GSTIN of Insurer
                              <strong className="text-danger">*</strong>
                            </label>

                          </div>
                        </Col>

                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            name="nameOfInsured"
                            value={storageData?.nameOfInsured}
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
                            value={storageData?.gstOfInsured}
                            onChange={(e) =>
                              saveStorageData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            GSTIN of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender
                              name="insuranceFrom"
                              defaultDate={storageData?.insuranceFrom}
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
                              defaultDate={storageData?.insuranceTo}
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
                            value={ getDifferenceInDaysStorage() ? getDifferenceInDaysStorage() : storageData?.periodOfInsurance}
                            onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

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
                              value={_get(insuranceData, 'order.termsheet.transactionDetails.lcOpeningBank', insuranceData?.quotationRequest?.lossPayee)}
                              onChange={(e) =>
                                saveStorageData(e.target.name, e.target.value)
                              }
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                              <option selected disabled>Select an option</option>
                             <option value="Zurcher Kantonal Bank,Zurich">Zurcher Kantonal Bank,Zurich</option>
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
                            onFocus={(e) => {
                              setIsFieldInFocus(true),
                                e.target.type = 'number'
                            }}
                            onBlur={(e) => {
                              setIsFieldInFocus(false),
                                e.target.type = 'text'
                            }}
                            name="premiumAmount"
                            value={isFieldInFocus ?
                              storageData?.premiumAmount :
                              `${storageData?.insuranceFromType === 'Domestic' ? 'INR' : 'USD'} ` + Number(storageData?.premiumAmount)?.toLocaleString()}
                            // defaultValue={addPrefixOrSuffix(insuranceData?.storageInsurance?.premiumAmount ? insuranceData?.storageInsurance?.premiumAmount : 0, 'INR', 'front')}
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
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <UploadDocument
              docName="Policy Document - Storage"
              uploadDocument1={uploadDocument2}
            /> */}
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

                                {insuranceDocument && insuranceDocument?.storagePolicyDocument == null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        // id={docName}
                                        type="file"
                                        name="marinePolicyDocument"
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDocument2(e)}
                                      />
                                      <button className={`${styles.button_upload} btn`}>
                                        Upload
                                      </button>
                                    </div>
                                  </>
                                ) : (
                                  <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                    <span>{insuranceDocument?.storagePolicyDocument?.name}</span>
                                    <img
                                      className={`${styles.close_image}  image_arrow mr-2`}
                                      src="/static/close.svg"
                                      onClick={() => handleCloseS()}
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
                    style={{ cursor: 'pointer' }}>+</span>
                </div>
              </div>
              <div
                id="marineInsurance"
                //className="collapse"
                aria-labelledby="marineInsurance"
              >
                <div
                  className={` ${styles.cardBody} vessel_card card-body  border_color`}
                >
                  <div className={` ${styles.content} border_color`}>
                    <div className={` ${styles.body}`}>
                      <Row>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            name="policyNumber"
                            value={marineData?.policyNumber}
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
                              value={marineData?.nameOfInsurer}
                              className={`${styles.input_field} ${styles.customSelect}   input form-control`}
                            >
                              <option selected disabled>Select an option</option>
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
                              value={marineData?.gstOfInsurer}
                              onChange={(e) =>
                                saveMarineData(e.target.name, e.target.value)
                              }
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              GSTIN of Insurer
                             {marineData?.insuranceFromType == 'Domestic' ? <strong className="text-danger">*</strong> : ''}
                            </label>

                          </div>
                        </Col>

                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            name="nameOfInsured"
                            value={marineData?.nameOfInsured}
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
                            value={marineData?.gstOfInsured}
                            onChange={(e) =>
                              saveMarineData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            GSTIN of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender
                              name="insuranceFrom"
                              defaultDate={marineData?.insuranceFrom}
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
                              defaultDate={marineData?.insuranceTo}
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
                            value={ getDifferenceInDaysMarine() ? getDifferenceInDaysMarine() : marineData?.periodOfInsurance}
                            onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

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
                              // value={_get(insuranceData, 'order.termsheet.transactionDetails.lcOpeningBank', insuranceData?.quotationRequest?.lossPayee)}
                              onChange={(e) =>
                                saveMarineData(e.target.name, e.target.value)
                              }
                              value={marineData.lossPayee}
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                            >
                              <option selected disabled>Select an option</option>
                              <option value="Zurcher Kantonal Bank,Zurich">Zurcher Kantonal Bank,Zurich</option>
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
                            type="text"
                            onFocus={(e) => {
                              setIsFieldInFocus(true),
                                e.target.type = 'number'
                            }}
                            onBlur={(e) => {
                              setIsFieldInFocus(false),
                                e.target.type = 'text'
                            }}
                            name="premiumAmount"
                            value={isFieldInFocus ?
                              marineData?.premiumAmount :
                              `${marineData?.insuranceFromType === 'Domestic' ? 'INR' : 'USD'} ` + Number(marineData?.premiumAmount)?.toLocaleString()}
                            // defaultValue={addPrefixOrSuffix(insuranceData?.marineInsurance?.premiumAmount ? insuranceData?.marineInsurance?.premiumAmount : 0, 'INR', 'front')}
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
                        checked={!isInsurerSameData}
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

                  <span data-toggle="collapse"
                    data-target="#storageInsurance"
                    aria-expanded="true"
                    aria-controls="storageInsurance">+</span>
                </div>{' '}
              </div>
              <div
                id="storageInsurance"
                //className="collapse"
                aria-labelledby="storageInsurance"
              >
                <div className={` ${styles.cardBody} card-body  border_color`}>
                  <div className={` ${styles.content} border_color`}>
                    <div className={` ${styles.body}`}>
                      <Row>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                              style={{ color: '#EA3F3F' }}
                              required
                              type="text"
                              value={storageData?.policyNumber}
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
                            {/* <img
                              className={`${styles.checked_image} img-fluid`}
                              src="/static/info-circle-red.svg"
                              alt="Info circle"
                            /> */}
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <select
                              name="nameOfInsurer"
                              onChange={(e) =>
                                saveStorageData(e.target.name, e.target.value)
                              }
                              value={storageData?.nameOfInsurer}
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                            >
                              <option selected disabled>Select an option</option>
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
                              value={storageData?.gstOfInsurer}
                              onChange={(e) =>
                                saveStorageData(e.target.name, e.target.value)
                              }
                              type="text"
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              GSTIN of Insurer
                              <strong className="text-danger">*</strong>
                            </label>

                          </div>
                        </Col>

                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            name="nameOfInsured"
                            value={storageData?.nameOfInsured}
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
                            value={storageData?.gstOfInsured}
                            name="gstOfInsured"
                            onChange={(e) =>
                              saveStorageData(e.target.name, e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            GSTIN of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            {/* <DateCalender name='insuranceFrom' defaultDate={storageData?.insuranceFrom ? storageData?.insuranceFrom?.split('T')[0] : ''} saveDate={saveStorageDate} labelName="Insurance from" /> */}
                            <DateCalender
                              name="insuranceFrom"
                              defaultDate={storageData?.insuranceFrom}
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
                              defaultDate={storageData?.insuranceTo}
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
                            value={getDifferenceInDaysStorage() ? getDifferenceInDaysStorage() : storageData?.periodOfInsurance}
                            onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

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
                              value={storageData?.lossPayee}
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                              <option selected disabled>Select an option</option>
 
                              <option value="Zurcher Kantonal Bank,Zurich">Zurcher Kantonal Bank,Zurich</option>
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
                            onFocus={(e) => {
                              setIsFieldInFocus(true),
                                e.target.type = 'number'
                            }}
                            onBlur={(e) => {
                              setIsFieldInFocus(false),
                                e.target.type = 'text'
                            }}
                            name="premiumAmount"
                            value={isFieldInFocus ?
                              storageData?.premiumAmount :
                              `${storageData?.insuranceFromType === 'Domestic' ? 'INR' : 'USD'} ` + Number(storageData?.premiumAmount)?.toLocaleString()}
                            // defaultValue={addPrefixOrSuffix(insuranceData?.storageInsurance?.premiumAmount ? insuranceData?.storageInsurance?.premiumAmount : storageData?.premiumAmount, 'INR', 'front')}
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
                                Policy Document - Marine
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
                                {/* <div className={styles.uploadBtnWrapper}>
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
                                </div> */}
                                {insuranceDocument && insuranceDocument.marinePolicyDocument == null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        // id={docName}
                                        type="file"
                                        name="marinePolicyDocument"
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDocument1(e)}
                                      />
                                      <button className={`${styles.button_upload} btn`}>
                                        Upload
                                      </button>
                                    </div>
                                  </>
                                ) : (
                                  <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                    <span>{insuranceDocument?.marinePolicyDocument?.name}</span>
                                    <img
                                      className={`${styles.close_image} image_arrow mr-2`}
                                      src="/static/close.svg"
                                      onClick={() => handleClose()}
                                      alt="Close"
                                    />{' '}
                                  </div>
                                )}

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
                                {/* <div className={styles.uploadBtnWrapper}>
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
                                </div> */}
                                {insuranceDocument && insuranceDocument?.storagePolicyDocument == null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        // id={docName}
                                        type="file"
                                        name="storagePolicyDocument"
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDocument2(e)}
                                      />
                                      <button className={`${styles.button_upload} btn`}>
                                        Upload
                                      </button>
                                    </div>
                                  </>
                                ) : (
                                  <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                    <span>{insuranceDocument?.storagePolicyDocument?.name}</span>
                                    <img
                                      className={`${styles.close_image}  image_arrow mr-2`}
                                      src="/static/close.svg"
                                      onClick={() => handleCloseS()}
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
