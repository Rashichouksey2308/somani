/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './insurance.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../../../src/components/SaveBar'
import Router from 'next/router'
import DateCalender from '../../../src/components/DateCalender'
import { useDispatch } from 'react-redux'
import {
  GettingAllInsurance,
  UpdateQuotation,
} from '../../../src/redux/insurance/action'
import { useSelector } from 'react-redux'
import _get from 'lodash/get'

const Index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    let id = sessionStorage.getItem('quotationId')
    dispatch(GettingAllInsurance(`?insuranceId=${id}`))
  }, [dispatch])

  const { insuranceResponse } = useSelector((state) => state.insurance)

  let insuranceData = _get(insuranceResponse, 'data[0]', {})

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
    sumInsured: '',
  })

  const saveQuotationData = (name, value) => {
    const newInput = { ...quotationData }
    const namesplit = name.split('.')
    namesplit.length > 1
      ? (newInput[namesplit[0]][namesplit[1]] = value)
      : (newInput[name] = value)
    setQuotationData(newInput)
  }

  const saveDate = (value, name) => {
    const d = new Date(value)
    let text = d.toISOString()
    saveQuotationData(name, text)
  }

  const handleSave = () => {
    let obj = {
      quotationRequest: { ...quotationData },
      insuranceId: insuranceData?._id,
    }
    dispatch(UpdateQuotation(obj))
  }

  const changeRoute = () => {
    sessionStorage.setItem('letterId', insuranceData?._id)
    if (quotationData.insuranceType == 'Marine Insurance') {
      Router.push('/agreement/OrderID/id')
    } else if (quotationData.insuranceType == 'Storage Insurance') {
      Router.push('/agreement/storage')
    } else {
      Router.push('/agreement/both-type')
    }
  }

  const [insuranceType, setInsuranceType] = useState('Marine Insurance')

  return (
    <>
      <div
        className={`${styles.card} p-0 datatable bg-transparent card border-0 container-fluid`}
      >
        <div className={`${styles.accordion_body} bg-transparent`}>
          <div className={`${styles.head_container} align-items-center`}>
            <div className={`${styles.head_header}`}>
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
              <button className={`${styles.clear_btn} clear_btn`}>
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
                        name="group1"
                        type={type}
                        value="Marine"
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
                        name="group1"
                        type={type}
                        value="Storage"
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
                        type={type}
                        value="Both"
                        onChange={(e) => {
                          saveQuotationData('insuranceType', 'Both')
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
              className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
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
              className="collapse"
              aria-labelledby="marineInsurance"
              data-parent="#marineInsurance"
            >
              <div className={` ${styles.cardBody} card-body  border_color`}>
                {insuranceType === 'Marine Insurance' ? (
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
                              {insuranceData?.order?.quantity} MT
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
                            <div className={styles.col_body}>Abcz</div>
                          </Col>

                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              IMO Number
                            </div>
                            <div className={styles.col_body}>5261334</div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Year of Built
                            </div>
                            <div className={styles.col_body}>2019</div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Port of Loading
                            </div>
                            <div className={styles.col_body}>Navasheva</div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Port of Discharge
                            </div>
                            <div className={styles.col_body}>
                              Gangavaram Port, Andhra Pradesh
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" md={4}>
                            <select
                              name="lossPayee"
                              onChange={(e) => {
                                saveQuotationData(e.target.name, e.target.value)
                              }}
                              className={`${styles.input_field} input form-control`}
                            >
                              <option selected></option>
                              <option>HDFC Bank</option>
                              <option>SBI</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Loss Payee
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                          <Col className="mt-4" lg={2} md={4}>
                            <div className="d-flex">
                              <DateCalender
                                name="laycanFrom"
                                saveDate={saveDate}
                                labelName="Laycan from"
                              />
                              <img
                                className={`${styles.calanderIcon} img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={2} md={4}>
                            <div className="d-flex">
                              <DateCalender
                                name="laycanTo"
                                saveDate={saveDate}
                                labelName="Laycan to"
                              />
                              <img
                                className={`${styles.calanderIcon} img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="expectedTimeOfDispatch"
                                saveDate={saveDate}
                                labelName="Expected time of Dispatch"
                              />
                              <img
                                className={`${styles.calanderIcon} img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="expectedTimeOfArrival"
                                saveDate={saveDate}
                                labelName="Expected time of Arrival"
                              />
                              <img
                                className={`${styles.calanderIcon} img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-5" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              type="number"
                              name="sumInsured"
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
                    <hr></hr>
                    <div className={` ${styles.content}`}>
                      <div className={` ${styles.body}`}>
                        <h5>Additional Information (if Any)</h5>
                        <textarea
                          name="additionalInfo"
                          onChange={(e) => {
                            saveQuotationData(e.target.name, e.target.value)
                          }}
                          className={`${styles.remark_field} form-control`}
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
                              {insuranceData?.order?.quantity} MT
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
                            <div className={styles.col_body}>Abcz</div>
                          </Col>

                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              IMO Number
                            </div>
                            <div className={styles.col_body}>5261334</div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Year of Built
                            </div>
                            <div className={styles.col_body}>2019</div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Port of Loading
                            </div>
                            <div className={styles.col_body}>Navasheva</div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div
                              className={`${styles.col_header} label_heading`}
                            >
                              Port of Discharge
                            </div>
                            <div className={styles.col_body}>
                              Gangavaram Port, Andhra Pradesh
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" md={4}>
                            <select
                              name="lossPayee"
                              onChange={(e) =>
                                saveQuotationData(e.target.name, e.target.value)
                              }
                              className={`${styles.input_field} input form-control`}
                            >
                              <option selected></option>
                              <option value="HDFC Bank">HDFC Bank</option>
                              <option value="SBI">SBI</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Loss Payee
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                          <Col className="mt-4" lg={2} md={4}>
                            <div className="d-flex">
                              <DateCalender
                                name="laycanFrom"
                                saveDate={saveDate}
                                labelName="Laycan from"
                              />
                              <img
                                className={`${styles.calanderIcon} img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={2} md={4}>
                            <div className="d-flex">
                              <DateCalender
                                name="laycanTo"
                                saveDate={saveDate}
                                labelName="Laycan to"
                              />
                              <img
                                className={`${styles.calanderIcon} img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="expectedTimeOfDispatch"
                                saveDate={saveDate}
                                labelName="Expected time of Dispatch"
                              />
                              <img
                                className={`${styles.calanderIcon} img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="expectedTimeOfArrival"
                                saveDate={saveDate}
                                labelName="Expected time of Arrival"
                              />
                              <img
                                className={`${styles.calanderIcon} img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-5" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              type="number"
                              name="sumInsured"
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
                    <hr></hr>

                    <div className={` ${styles.content}`}>
                      <div className={` ${styles.body}`}>
                        <h5>Storage Details</h5>
                        <Row>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <select
                              name="storageDetails.placeOfStorage"
                              onChange={(e) =>
                                saveQuotationData(e.target.name, e.target.value)
                              }
                              className={`${styles.input_field} input form-control`}
                            >
                              <option selected></option>
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
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="number"
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
                    <hr></hr>
                    <div className={` ${styles.content}`}>
                      <div className={` ${styles.body}`}>
                        <h5>Additional Information (if Any)</h5>
                        <textarea
                          name="additionalInfo"
                          onChange={(e) => {
                            saveQuotationData(e.target.name, e.target.value)
                          }}
                          className={`${styles.remark_field} form-control`}
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
