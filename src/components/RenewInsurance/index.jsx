/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import InspectionDocument from '../InspectionDocument'
import DateCalender from '../DateCalender'
import { useSelector, useDispatch } from 'react-redux'
import _get from 'lodash/get'
import SubmitBar from '../PreviousBar/SubmitBar'
import { GettingAllInsurance } from 'redux/insurance/action'

const Index = () => {
  const [insuranceType, setInsuranceType] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    let id = sessionStorage.getItem('quotationId')
    dispatch(GettingAllInsurance(`?insuranceId=${id}`))
  }, [dispatch])

  const { insuranceResponse } = useSelector((state) => state.insurance)

  let insuranceData = _get(insuranceResponse, 'data[0]', {})

  const [marineData, setMarineData] = useState({
    policyNumber: '',
    // nameOfInsurer: '',
    // gstOfInsurer: '',
    // nameOfInsured: '',
    // gstOfInsured: '',
    insuranceFrom: '',
    insuranceTo: '',
    periodOfInsurance: null,
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
    // nameOfInsurer: '',
    // gstOfInsurer: '',
    // nameOfInsured: '',
    // gstOfInsured: '',
    insuranceFrom: '',
    insuranceTo: '',
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
    console.log(newUploadDoc, 'new upload doc')
    setInsuranceDocument(newUploadDoc)
  }
  const uploadDocument1 = (e) => {
    const newUploadDoc1 = { ...insuranceDocument }
    newUploadDoc1.marinePolicyDocument = e.target.files[0]

    setInsuranceDocument(newUploadDoc1)
  }

  return (
    <div className={`${styles.card} accordion_body container-fluid`}>
      <div className={`${styles.head_container} ml-5`}>
        <div className={styles.head_header}>
          <img
            className={`${styles.arrow} img-fluid`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"
          />
          <h1 className={styles.heading}>
            Ramakrishna Traders - Ramal001-000001
          </h1>
        </div>
      </div>

      <div className={`${styles.vessel_card} mt-3 border_color`}>
        <div className={`${styles.wrapper} border_color mt-4 card`}>
          <div
            className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
            data-toggle="collapse"
            data-target="#storageInsurance"
            aria-expanded="true"
            aria-controls="storageInsurance"
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
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Storage"
                      name="group1"
                      onChange={() => setInsuranceType(true)}
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <span>+</span>
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
                        <select
                          name="policyNumber"
                          onChange={(e) =>
                            saveMarineData(e.target.name, e.target.value)
                          }
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                        >
                          <option selected></option>
                          <option
                            value={insuranceData?.marineInsurance?.policyNumber}
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
                        onChange={(e) =>
                          saveMarineData(e.target.name, e.target.value)
                        }
                        type="text"
                      />
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Premium Amount<strong className="text-danger">*</strong>
                      </label>
                    </Col>
                    <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                      <div className="d-flex">
                        <DateCalender labelName="Renewal date" />
                        <img
                          className={`${styles.calanderIcon} image_arrow img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                        />
                      </div>
                    </Col>
                    <Col className="mb-4 mt-4" lg={2} md={6}>
                      <div className="d-flex">
                        <DateCalender labelName="Insurance from" />
                        <img
                          className={`${styles.calanderIcon} image_arrow img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                        />
                      </div>
                    </Col>
                    <Col className="mb-4 mt-4" lg={2} md={6}>
                      <div className="d-flex">
                        <DateCalender labelName="Insurance to" />
                        <img
                          className={`${styles.calanderIcon} image_arrow img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                        />
                      </div>
                    </Col>
                    {insuranceType ? (
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="number"
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Period of Insurance (Days)
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                    ) : (
                      ''
                    )}
                    <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                      <div className="d-flex">
                        <select
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                        >
                          <option>HDFC Bank</option>
                          <option>SBI</option>
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
        </div>

        <InspectionDocument documentName="Policy Document - Marine" />
      </div>

      <SubmitBar />
    </div>
  )
}
export default Index
