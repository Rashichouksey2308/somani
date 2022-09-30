/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './insurance.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../../../src/components/SaveBar'
import Router, { useRouter } from 'next/router'
import DateCalender from '../../../src/components/DateCalender'
import { useDispatch } from 'react-redux'
import {
  GettingAllInsurance,
  UpdateQuotation,
} from '../../../src/redux/insurance/action'
import { useSelector } from 'react-redux'
import _get from 'lodash/get'
import {
  addPrefixOrSuffix,
  checkNan,
  CovertvaluefromtoCR,
  removePrefixOrSuffix,
} from '../../../src/utils/helper'
import { toast } from 'react-toastify'
import moment from 'moment'
import {
  setPageName,
  setDynamicName,
  setDynamicOrder,
} from '../../../src/redux/userData/action'

const Index = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    let id = sessionStorage.getItem('quotationId')
    dispatch(GettingAllInsurance(`?insuranceId=${id}`))
  }, [dispatch, sumInsuredCalc])

  const { insuranceResponse } = useSelector((state) => state.insurance)
  const [isFieldInFocus, setIsFieldInFocus] = useState(false)
  let insuranceData = _get(insuranceResponse, 'data[0]', {})
  console.log(insuranceData, 'This is InsuranceData')
  const [dateStartFrom, setDateStartFrom] = useState({
    laycan: '',
    eta: '',
  })
  const [quotationData, setQuotationData] = useState({
    additionalInfo: '',
    expectedTimeOfArrival: '',
    expectedTimeOfDispatch: '',
    insuranceType: '',
    laycanFrom: '',
    laycanTo: '',
    lossPayee: '',
    storageDetails: {
      placeOfStorage: '',
      periodOfInsurance: null,
      storagePlotAddress: '',
    },
    sumInsured: insuranceData?.quotationRequest?.sumInsured
      ? Number(insuranceData?.quotationRequest?.sumInsured) / 10000000
      : sumInsuredCalc,
  })

  let sumInsuredCalc = parseFloat(
    ((Number(insuranceData?.order?.orderValue) / 10000000) * 110) / 100,
  )
  console.log(sumInsuredCalc, 'THIS IS SUM INSURED CAL')
  // console.log(quotationData.expectedTimeOfDispatch, 'insuranceData')
  useEffect(() => {
    dispatch(setPageName('insurance'))
    dispatch(
      setDynamicName(
        _get(insuranceData, 'company.companyName', 'Company Name'),
      ),
    )
    dispatch(setDynamicOrder(_get(insuranceData, 'order.orderId', 'Order Id')))
    //  console.log(insuranceData?.quotationRequest?.sumInsured ,"insuranceData?.quotationRequest?.sumInsured ",sumInsuredCalc)
    setQuotationData({
      additionalInfo: insuranceData?.quotationRequest?.additionalInfo || '',
      expectedTimeOfArrival:
        insuranceData?.quotationRequest?.expectedTimeOfArrival || undefined,
      expectedTimeOfDispatch:
        insuranceData?.quotationRequest?.expectedTimeOfDispatch || undefined,
      insuranceType:
        insuranceData?.quotationRequest?.insuranceType || 'Marine Insurance',
      laycanFrom: insuranceData?.quotationRequest?.laycanFrom
        ? insuranceData?.quotationRequest?.laycanFrom
        : insuranceData?.order?.shipmentDetail?.loadPort?.fromDate,
      laycanTo: insuranceData?.quotationRequest?.laycanTo
        ? insuranceData?.quotationRequest?.laycanTo
        : insuranceData?.order?.shipmentDetail?.loadPort?.toDate,
      lossPayee: insuranceData?.quotationRequest?.lossPayee
        ? insuranceData?.quotationRequest?.lossPayee
        : insuranceData?.order?.termsheet?.transactionDetails?.lcOpeningBank,
      storageDetails: {
        placeOfStorage:
          insuranceData?.quotationRequest?.storageDetails?.placeOfStorage || '',
        periodOfInsurance:
          insuranceData?.quotationRequest?.storageDetails?.periodOfInsurance ||
          '',
        storagePlotAddress:
          insuranceData?.quotationRequest?.storageDetails?.storagePlotAddress ||
          '',
      },
      sumInsured: insuranceData?.quotationRequest?.sumInsured
        ? Number(insuranceData?.quotationRequest?.sumInsured) / 10000000
        : sumInsuredCalc,
    })
  }, [insuranceData])
  //  console.log(quotationData.sumInsured,"sumInsured",insuranceData?.quotationRequest?.sumInsured,sumInsuredCalc)
  const saveQuotationData = (name, value) => {
    // console.log(value, 'dhjsgfksjdghf')
    const newInput = { ...quotationData }
    const namesplit = name.split('.')
    namesplit.length > 1
      ? (newInput[namesplit[0]][namesplit[1]] = value)
      : (newInput[name] = value)
    setQuotationData(newInput)
  }

  const saveDate = (value, name) => {
    // console.log(value, name, 'save date')
    const d = new Date(value)
    let text = d.toISOString()
    saveQuotationData(name, text)
    setStartDate(value, name)
  }
  const setStartDate = (val, name) => {
    var new_date = moment(new Date(val).toISOString())
      .add(1, 'days')
      .format('DD-MM-YYYY')
    if (name == 'laycanFrom') {
      setDateStartFrom({ ...dateStartFrom, laycan: new_date })
    } else {
      setDateStartFrom({ ...dateStartFrom, eta: new_date })
    }
  }
  console.log(
    quotationData?.sumInsured,
    'quotationData?.sumInsured',
    insuranceData?.quotationRequest?.sumInsured,
  )
  const [reset, setReset] = useState(false)
  const clearAll = () => {
    // document.getElementById('FormInsurance').value = ''
    setQuotationData({
      additionalInfo: '',
      expectedTimeOfArrival: undefined,
      expectedTimeOfDispatch: undefined,
      insuranceType: '',
      laycanFrom: undefined,
      laycanTo: undefined,
      lossPayee: '',
      storageDetails: {
        placeOfStorage: '',
        periodOfInsurance: '',
        storagePlotAddress: '',
      },
      sumInsured: insuranceData?.quotationRequest?.sumInsured,
    })

    setDateStartFrom({
      laycan: '',
      eta: '',
    })
    setReset(!reset)
  }

  const validation = () => {
    console.log(quotationData.lossPayee, 'quotationData.lossPayee ')
    let toastMessage = ''
    if (
      quotationData.lossPayee == '' ||
      quotationData.lossPayee == 'Select an option' ||
      quotationData.lossPayee == undefined
    ) {
      toastMessage = 'Please Select loss Payee'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (
      quotationData.laycanFrom == '' ||
      quotationData.laycanFrom == undefined
    ) {
      toastMessage = 'Please add laycan From'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (quotationData.laycanTo == '' || quotationData.laycanTo == undefined) {
      toastMessage = 'Please add laycan to'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (
      quotationData.expectedTimeOfDispatch == '' ||
      quotationData.expectedTimeOfDispatch == undefined
    ) {
      toastMessage = 'Please add expected Time Of Dispatch '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (
      quotationData.expectedTimeOfArrival == '' ||
      quotationData.expectedTimeOfArrival == undefined
    ) {
      toastMessage = 'Please add expected Time Of Arrival '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (
      quotationData.sumInsured == '' ||
      quotationData.sumInsured == undefined ||
      quotationData.sumInsured == null
    ) {
      toastMessage = 'Please add sum Insured '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        return false
      }
    }
    if (quotationData?.insuranceType == 'Storage Insurance') {
      if (
        quotationData.storageDetails.placeOfStorage == '' ||
        quotationData.storageDetails.placeOfStorage == undefined ||
        quotationData.storageDetails.placeOfStorage == null
      ) {
        toastMessage = 'Please select place Of Storage '
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        quotationData.storageDetails.periodOfInsurance == '' ||
        quotationData.storageDetails.periodOfInsurance == undefined ||
        quotationData.storageDetails.periodOfInsurance == null
      ) {
        toastMessage = 'Please add period Of Insurance   '
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      if (
        quotationData.storageDetails.storagePlotAddress == '' ||
        quotationData.storageDetails.storagePlotAddress == undefined ||
        quotationData.storageDetails.storagePlotAddress == null
      ) {
        toastMessage = 'Please add storage Plot Address  '
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
    }
    return true
  }
  const handleSave = () => {
    if (quotationData?.insuranceType !== '') {
      if (validation()) {
        let insuranceObj = { ...quotationData }
        insuranceObj.sumInsured =
          removePrefixOrSuffix(quotationData.sumInsured) * 10000000
        let obj = {
          quotationRequest: { ...insuranceObj },
          insuranceId: insuranceData?._id,
        }
        dispatch(UpdateQuotation(obj))
        router.push(`/third-party`)
      }
    } else {
      let toastMessage = 'Insurance type is mandatory'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    }
  }

  const changeRoute = () => {
    if (validation()) {
      sessionStorage.setItem('letterId', insuranceData?._id)
      if (quotationData.insuranceType == 'Marine Insurance') {
        Router.push('/agreement/OrderID/id')
      } else if (quotationData.insuranceType == 'Storage Insurance') {
        Router.push('/agreement/storage')
      } else {
        Router.push('/agreement/both-type')
      }
    }
  }

  const [insuranceType, setInsuranceType] = useState('Marine Insurance')
  console.log(quotationData, 'quotationData')
  return (
    <>
      <div
        className={`${styles.card} p-0 vessel_card datatable bg-transparent card border-0 container-fluid`}
      >
        <div className={`${styles.accordion_body} bg-transparent`}>
          <div className={`${styles.head_container} align-items-center`}>
            <div
              onClick={() => Router.push('/insurance')}
              className={`${styles.head_header} align-items-center`}
            >
              <img
                className={`${styles.arrow} img-fluid mr-2 image_arrow`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
              />
              <h1 className={styles.heading}>
                {insuranceData?.company?.companyName}
              </h1>
            </div>
            <div>
              <button
                onClick={() => {
                  clearAll()
                }}
                className={`${styles.clear_btn} clear_btn`}
              >
                Clear All
              </button>
            </div>
          </div>

          <div className={`${styles.vessel_card}`}>
            <div className={`${styles.wrapper} border_color card datatable`}>
              <div
                className={`${styles.insurance_type} d-lg-flex align-items-center d-inline-block`}
              >
                <h2 className="mb-0">Insurance Type</h2>
                <div className={`${styles.radio_form}`}>
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className={styles.radio_group}>
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Marine Insurance"
                        checked={
                          quotationData.insuranceType == 'Marine Insurance'
                            ? 'checked'
                            : ''
                        }
                        name="group1"
                        type={type}
                        value="Marine Insurance"
                        onChange={(e) => {
                          saveQuotationData('insuranceType', 'Marine Insurance')
                          setInsuranceType('Marine Insurance')
                        }}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Storage Insurance"
                        checked={
                          quotationData.insuranceType == 'Storage Insurance'
                            ? 'checked'
                            : ''
                        }
                        name="group1"
                        type={type}
                        value="Storage Insurance"
                        onChange={(e) => {
                          saveQuotationData(
                            'insuranceType',
                            'Storage Insurance',
                          )
                          setInsuranceType('Storage Insurance')
                        }}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Both"
                        name="group1"
                        checked={
                          quotationData.insuranceType ==
                          'Marine & Storage Insurance'
                            ? 'checked'
                            : ''
                        }
                        type={type}
                        value="Marine & Storage Insurance"
                        onChange={(e) => {
                          saveQuotationData(
                            'insuranceType',
                            'Marine & Storage Insurance',
                          )
                          setInsuranceType('Both')
                        }}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.wrapper} border_color card datatable`}>
            <div
              className={`${styles.cardHeader} border_color card-header d-flex align-items-center justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#marineInsurance"
              aria-expanded="true"
              aria-controls="marineInsurance"
            >
              <h2 className="mb-0">Basic Details</h2>
              <span>+</span>
            </div>
            <div
              id="marineInsurance"
              // className="collapse"
              aria-labelledby="marineInsurance"
              data-parent="#marineInsurance"
            >
              <div className={` ${styles.cardBody} card-body  border_color`}>
                {quotationData.insuranceType == 'Marine Insurance' ? (
                  <>
                    <div className={` ${styles.content} border_color`}>
                      <div className={` ${styles.body}`}>
                        <Row>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Commodity
                            </div>
                            <div className={styles.col_body}>
                              {insuranceData?.order?.commodity}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Quantity
                            </div>
                            <div className={styles.col_body}>
                              {checkNan(Number(
                                insuranceData?.order?.quantity,
                              )?.toLocaleString('en-In', {
                                maximumFractionDigits: 2,
                              }))}{' '}
                              MT
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Country of Origin
                            </div>
                            <div className={styles.col_body}>
                              {insuranceData?.order?.countryOfOrigin}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Vessel Name
                            </div>
                            <div className={styles.col_body}>
                              {_get(
                                insuranceData,
                                'order.vessel.vessels[0].vesselInformation[0].name',
                                '',
                              )}
                            </div>
                          </Col>

                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              IMO Number
                            </div>
                            <div className={styles.col_body}>
                              {_get(
                                insuranceData,
                                'order.vessel.vessels[0].vesselInformation[0].IMONumber',
                                '',
                              )}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Year of Built
                            </div>
                            <div className={styles.col_body}>
                              {_get(
                                insuranceData,
                                'order.vessel.vessels[0].vesselInformation[0].yearOfBuilt',
                                '',
                              )?.slice(0, 4)}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Port of Loading
                            </div>
                            <div className={styles.col_body}>
                              {_get(
                                insuranceData,
                                'order.vessel.vessels[0].transitDetails.portOfLoading',
                                '',
                              )}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Port of Discharge
                            </div>
                            <div className={styles.col_body}>
                              {_get(
                                insuranceData,
                                'order.vessel.vessels[0].transitDetails.portOfDischarge',
                                '',
                              )}
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" md={4}>
                            <div className="d-flex">
                              <select
                                id="FormInsurance"
                                name="lossPayee"
                                onChange={(e) => {
                                  saveQuotationData(
                                    e.target.name,
                                    e.target.value,
                                  )
                                }}
                                value={
                                  quotationData?.lossPayee
                                    ? quotationData?.lossPayee
                                    : insuranceData?.order?.termsheet
                                        ?.transactionDetails?.lcOpeningBank
                                }
                                className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                              >
                                <option disabled selected>
                                  Select an option
                                </option>
                                <option value="Reserve Bank of Spain">
                                  Reserve Bank of Spain
                                </option>
                                <option value="Zurcher Kantonal Bank,Zurich">
                                  Zurcher Kantonal Bank,Zurich
                                </option>
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
                          <Col className="mt-4" lg={2} md={4}>
                            <div className="d-flex">
                              <DateCalender
                                name="laycanFrom"
                                saveDate={saveDate}
                                defaultDate={
                                  quotationData.laycanFrom
                                    ? quotationData.laycanFrom
                                    : insuranceData?.order?.shipmentDetail
                                        ?.loadPort?.fromDate
                                }
                                labelName="Laycan from"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={2} md={4}>
                            <div className="d-flex">
                              <DateCalender
                                name="laycanTo"
                                defaultDate={
                                  quotationData.laycanTo
                                    ? quotationData.laycanTo
                                    : insuranceData?.order?.shipmentDetail
                                        ?.loadPort?.toDate
                                }
                                saveDate={saveDate}
                                labelName="Laycan to"
                                startFrom={dateStartFrom.laycan}
                                reset={reset}
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="expectedTimeOfDispatch"
                                defaultDate={
                                  quotationData.expectedTimeOfDispatch
                                }
                                saveDate={saveDate}
                                labelName="Expected time of Dispatch"
                                reset={reset}
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="expectedTimeOfArrival"
                                defaultDate={
                                  quotationData.expectedTimeOfArrival
                                }
                                startFrom={dateStartFrom.eta}
                                saveDate={saveDate}
                                labelName="Expected time of Arrival"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-5" lg={4} md={6} sm={6}>
                            <input
                              onFocus={(e) => {
                                setIsFieldInFocus(true),
                                  (e.target.type = 'number')
                              }}
                              onBlur={(e) => {
                                setIsFieldInFocus(false),
                                  (e.target.type = 'text')
                              }}
                              id="FormInsurance"
                              className={`${styles.input_field} input form-control`}
                              type="text"
                              name="sumInsured"
                              onKeyDown={(evt) =>
                                ['e', 'E', '+', '-'].includes(evt.key) &&
                                evt.preventDefault()
                              }
                              value={
                                isFieldInFocus
                                  ? quotationData?.sumInsured
                                  : Number(
                                      quotationData?.sumInsured,
                                    )?.toLocaleString('en-In', {
                                      maximumFractionDigits: 2,
                                    }) + ` Cr`
                              }
                              // value={addPrefixOrSuffix(checkNan(CovertvaluefromtoCR(quotationData?.sumInsured)), 'Cr')}
                              onChange={(e) => {
                                saveQuotationData(e.target.name, e.target.value)
                              }}
                              required
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Sum Insured
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </div>

                    <div className={` ${styles.content}`}>
                      <div className={` ${styles.body}`}>
                        <h5>Additional Information (if Any)</h5>
                        <textarea
                          name="additionalInfo"
                          defaultValue={
                            insuranceData?.quotationRequest?.additionalInfo
                          }
                          onChange={(e) => {
                            saveQuotationData(e.target.name, e.target.value)
                          }}
                          className={`${styles.remark_field} input form-control`}
                          as
                          rows={3}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={` ${styles.content}`}>
                      <div className={` ${styles.body}`}>
                        <Row>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Commodity
                            </div>
                            <div className={styles.col_body}>
                              {insuranceData?.order?.commodity}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Quantity
                            </div>
                            <div className={styles.col_body}>
                              {Number(
                                insuranceData?.order?.quantity,
                              )?.toLocaleString('en-In', {
                                maximumFractionDigits: 2,
                              })}{' '}
                              MT
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Country of Origin
                            </div>
                            <div className={styles.col_body}>
                              {insuranceData?.order?.countryOfOrigin}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Vessel Name
                            </div>
                            <div className={styles.col_body}>
                              {_get(
                                insuranceData,
                                'order.vessel.vessels[0].vesselInformation[0].name',
                                '',
                              )}
                            </div>
                          </Col>

                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              IMO Number
                            </div>
                            <div className={styles.col_body}>
                              {_get(
                                insuranceData,
                                'order.vessel.vessels[0].vesselInformation[0].IMONumber',
                                '',
                              )}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Year of Built
                            </div>
                            <div className={styles.col_body}>
                              {_get(
                                insuranceData,
                                'order.vessel.vessels[0].vesselInformation[0].yearOfBuilt',
                                '',
                              )?.slice(0, 4)}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Port of Loading
                            </div>
                            <div className={styles.col_body}>
                              {_get(
                                insuranceData,
                                'order.vessel.vessels[0].transitDetails.portOfLoading',
                                '',
                              )}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Port of Discharge
                            </div>
                            <div className={styles.col_body}>
                              {_get(
                                insuranceData,
                                'order.vessel.vessels[0].transitDetails.portOfDischarge',
                                '',
                              )}
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" md={4}>
                            <div className="d-flex">
                              <select
                                name="lossPayee"
                                onChange={(e) => {
                                  saveQuotationData(
                                    e.target.name,
                                    e.target.value,
                                  )
                                }}
                                className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                value={
                                  quotationData?.lossPayee
                                    ? quotationData?.lossPayee
                                    : insuranceData?.order?.termsheet
                                        ?.transactionDetails?.lcOpeningBank
                                }
                              >
                                <option selected disabled>
                                  Select an option
                                </option>
                                {/* <option selected>
                                  {insuranceData?.quotationRequest?.lossPayee}
                                </option> */}
                                <option value="Reserve Bank of Spain">
                                  Reserve Bank of Spain
                                </option>
                                <option value="Zurcher Kantonal Bank,Zurich">
                                  Zurcher Kantonal Bank,Zurich
                                </option>
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
                          <Col className="mt-4" lg={2} md={4}>
                            <div className="d-flex">
                              <DateCalender
                                name="laycanFrom"
                                defaultDate={quotationData.laycanFrom}
                                // defaultDate={
                                //   _get(insuranceData, 'order.vessel.vessels[0].transitDetails.laycanFrom', '')
                                // }
                                reset={reset}
                                saveDate={saveDate}
                                labelName="Laycan from"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={2} md={4}>
                            <div className="d-flex">
                              <DateCalender
                                name="laycanTo"
                                defaultDate={quotationData.laycanTo}
                                // defaultDate={
                                //   _get(insuranceData, 'order.vessel.vessels[0].transitDetails.laycanTo', '')
                                // }
                                reset={reset}
                                startFrom={dateStartFrom.laycan}
                                saveDate={saveDate}
                                labelName="Laycan to"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="expectedTimeOfDispatch"
                                defaultDate={
                                  quotationData.expectedTimeOfDispatch
                                }
                                reset={reset}
                                saveDate={saveDate}
                                labelName="Expected time of Dispatch"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="expectedTimeOfArrival"
                                defaultDate={
                                  quotationData.expectedTimeOfArrival
                                }
                                reset={reset}
                                startFrom={dateStartFrom.eta}
                                saveDate={saveDate}
                                labelName="Expected time of Arrival"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-5" lg={4} md={6} sm={6}>
                            <input
                              onFocus={(e) => {
                                setIsFieldInFocus(true),
                                  (e.target.type = 'number')
                              }}
                              onBlur={(e) => {
                                setIsFieldInFocus(false),
                                  (e.target.type = 'text')
                              }}
                              className={`${styles.input_field} input form-control`}
                              type="text"
                              name="sumInsured"
                              value={
                                isFieldInFocus
                                  ? quotationData?.sumInsured
                                  : Number(
                                      quotationData?.sumInsured,
                                    )?.toLocaleString('en-In', {
                                      maximumFractionDigits: 2,
                                    }) + ` Cr`
                              }
                              // value={addPrefixOrSuffix(checkNan(CovertvaluefromtoCR(quotationData?.sumInsured)), 'Cr')}
                              onChange={(e) =>
                                saveQuotationData(e.target.name, e.target.value)
                              }
                              required
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Sum Insured
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </div>

                    <div className={` ${styles.content}`}>
                      <div className={` ${styles.body}`}>
                        <h5>Storage Details</h5>
                        <Row>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <select
                                name="storageDetails.placeOfStorage"
                                onChange={(e) =>
                                  saveQuotationData(
                                    e.target.name,
                                    e.target.value,
                                  )
                                }
                                value={
                                  quotationData.storageDetails.placeOfStorage
                                }
                                className={`${styles.input_field} ${styles.customSelect} input form-control`}
                              >
                                <option>Select an option</option>

                                <option value="Visakhapatnam, AP, India">
                                  Visakhapatnam, AP, India
                                </option>
                                <option value="Mumbai, India">
                                  Mumbai, India
                                </option>
                              </select>
                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                Place of Storage
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
                              onKeyDown={(evt) =>
                                ['e', 'E', '+', '-'].includes(evt.key) &&
                                evt.preventDefault()
                              }
                              defaultValue={
                                quotationData.storageDetails.periodOfInsurance
                              }
                              name="storageDetails.periodOfInsurance"
                              onChange={(e) =>
                                saveQuotationData(e.target.name, e.target.value)
                              }
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Period of Insurance (days)
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" lg={8} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              defaultValue={
                                quotationData.storageDetails.storagePlotAddress
                              }
                              name="storageDetails.storagePlotAddress"
                              onChange={(e) =>
                                saveQuotationData(e.target.name, e.target.value)
                              }
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Storage Plot Address
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className={` ${styles.content}`}>
                      <div className={` ${styles.body}`}>
                        <h5>Additional Information (if Any)</h5>
                        <textarea
                          name="additionalInfo"
                          defaultValue={
                            insuranceData?.quotationRequest?.additionalInfo
                          }
                          onChange={(e) => {
                            saveQuotationData(e.target.name, e.target.value)
                          }}
                          className={`${styles.remark_field} input form-control`}
                          as
                          rows={3}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SaveBar
        handleSave={handleSave}
        rightBtn="Generate Request Letter"
        rightBtnClick={changeRoute}
      />
    </>
  )
}
export default Index
