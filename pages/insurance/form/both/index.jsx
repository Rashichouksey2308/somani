/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import UploadDocument from '../../../../src/components/UploadDocument'
import DateCalender from '../../../../src/components/DateCalender'
import { useDispatch, useSelector } from 'react-redux'
import { GettingAllInsurance, UpdateInsurance } from '../../../../src/redux/insurance/action'
import _get from 'lodash/get'

const Index = () => {
  const [insuranceType, setInsuranceType] = useState('Marine')

  const dispatch = useDispatch()

  useEffect(() => {
    let id = sessionStorage.getItem('quotationId')
    dispatch(GettingAllInsurance(`?insuranceId=${id}`))
  }, [dispatch])

  const { insuranceResponse } = useSelector((state) => state.insurance)

  let insuranceData = _get(insuranceResponse, 'data[0]', {})

  const [marineData, setMarineData] = useState({
    policyNumber: '',
    nameOfInsurer: '',
    gstOfInsurer: '',
    nameOfInsured: '',
    gstOfInsured: '',
    insuranceFrom: '',
    insuranceTo: '',
    periodOfInsurance: null,
    lossPayee: '',
    premiumAccount: null,
  })

  const saveMarineData = (name, value) => {
    let newInput = {...marineData}
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
    nameOfInsurer: '',
    gstOfInsurer: '',
    nameOfInsured: '',
    gstOfInsured: '',
    insuranceFrom: '',
    insuranceTo: '',
    periodOfInsurance: null,
    lossPayee: '',
    premiumAccount: null,
  })

  const saveStorageDate = (value, name) => {
    // console.log(value, name, 'save date')
    const d = new Date(value)
    let text = d.toISOString()
    setStorageData(name, text)
  }

  const saveStorageData = (name, value) => {
    let newInput = {...marineData}
    newInput[name] = value
    setMarineData(newInput)
  }

  const [insuranceDocument, setInsuranceDocument] = useState({
    storagePolicyDocument : '',
    marinePolicyDocument: ''
  })

  const uploadDocument1 = (e) => {
    const newUploadDoc = { ...insuranceDocument }
    newUploadDoc.storagePolicyDocument = e.target.files[0]

    setInsuranceDocument(newUploadDoc)
  }
  const uploadDocument2 = (e) => {
    const newUploadDoc1 = { ...insuranceDocument }
    newUploadDoc1.marinePolicyDocument = e.target.files[0]

    setInsuranceDocument(newUploadDoc1)
  }

  const [isInsurerSameData, setIsInsurerSameData] = useState(false)

  const handleInsuranceUpdate = () => {
    let fd = new FormData()
    fd.append('marineInsurance', JSON.stringify(marineData))
    fd.append('storageInsurance', JSON.stringify(storageData))
    fd.append('insuranceId', JSON.stringify(insuranceData?._id))
    fd.append('insuranceType', JSON.stringify(insuranceData?.quotationRequest?.insuranceType))
    fd.append('marinePolicyDocument', insuranceDocument.marinePolicyDocument)
    fd.append('storagePolicyDocument', insuranceDocument.storagePolicyDocument)

    dispatch(UpdateInsurance(fd))
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
                    defaultChecked={insuranceData?.quotationRequest?.insuranceType === 'Marine Insurance'}
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
                    defaultChecked={insuranceData?.quotationRequest?.insuranceType === 'Storage Insurance'}
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
                    defaultChecked={insuranceData?.quotationRequest?.insuranceType === 'Both' }
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
        { insuranceData?.quotationRequest?.insuranceType === 'Marine Insurance' ? (
          <>
            <div className={`${styles.wrapper} border_color mt-4 card`}>
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
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />

                        <Form.Check
                          className={styles.radio}
                          inline
                          label="International"
                          name="group1"
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
                              className={`${styles.input_field} ${styles.customSelect}   input form-control`}
                            >
                              <option>Ramakrishna Traders</option>
                              <option>Balaji Traders</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Name of Insurer
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} img-fluid`}
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
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              GST of Insured
                            </label>
                            <img
                              className={`${styles.checked_image} img-fluid`}
                              src="/static/approved.svg"
                              alt="Approve"
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
                            Name of Insured
                            <strong className="text-danger">*</strong>
                          </label>
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
                            GST of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender labelName="Insurance from" />
                            <img
                              className={`${styles.calanderIcon} img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender labelName="Insurance to" />
                            <img
                              className={`${styles.calanderIcon} img-fluid`}
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
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
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
                              className={`${styles.arrow} img-fluid`}
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
            <UploadDocument />
          </>
        ) : insuranceData?.quotationRequest?.insuranceType === 'Storage Insurance' ? (
          <>
            <div className={`${styles.wrapper} border_color mt-4 card`}>
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
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />

                        <Form.Check
                          className={styles.radio}
                          inline
                          label="International"
                          name="group1"
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
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                            >
                              <option>Ramakrishna Traders</option>
                              <option>Balaji Traders</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Name of Insurer
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                              style={{ borderColor: '#43C34D' }}
                              required
                              type="text"
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              GST of Insured
                            </label>
                            <img
                              className={`${styles.checked_image} img-fluid`}
                              src="/static/approved.svg"
                              alt="Approve"
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
                            Name of Insured
                            <strong className="text-danger">*</strong>
                          </label>
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
                            GST of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender labelName="Insurance from" />
                            <img
                              className={`${styles.calanderIcon} img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender labelName="Insurance to" />
                            <img
                              className={`${styles.calanderIcon} img-fluid`}
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
                              className={`${styles.arrow} img-fluid`}
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
            <UploadDocument />
          </>
        ) : insuranceData?.quotationRequest?.insuranceType === 'Both' ? (
          <>
            <div className={`${styles.wrapper} border_color mt-4 card`}>
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
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />

                        <Form.Check
                          className={styles.radio}
                          inline
                          label="International"
                          name="group1"
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
                              className={`${styles.input_field} ${styles.customSelect}   input form-control`}
                            >
                              <option>Ramakrishna Traders</option>
                              <option>Balaji Traders</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Name of Insurer
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} img-fluid`}
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
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              GST of Insured
                            </label>
                            <img
                              className={`${styles.checked_image} img-fluid`}
                              src="/static/approved.svg"
                              alt="Approve"
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
                            Name of Insured
                            <strong className="text-danger">*</strong>
                          </label>
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
                            GST of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender labelName="Insurance from" />
                            <img
                              className={`${styles.calanderIcon} img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender labelName="Insurance to" />
                            <img
                              className={`${styles.calanderIcon} img-fluid`}
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
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
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
                              className={`${styles.arrow} img-fluid`}
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
            <div className={`${styles.wrapper} border_color mt-4 card`}>
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
                  <div className={`${styles.radio_label} mr-5`}>
                    Is the Insurer same as Marine Insurance?
                  </div>
                  <div className={`${styles.theme} d-flex align-items-center`}>
                    <div
                      className={`${styles.toggle_label} form-check-label mr-2`}
                    >
                      Yes
                    </div>
                    <label className={styles.switch}>
                      <input type="checkbox" />
                      <span
                        className={`${styles.slider} ${styles.round}`}
                      ></span>
                    </label>
                    <div
                      className={`${styles.toggle_label} form-check-label ml-2 mr-3`}
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
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                            >
                              <option>Ramakrishna Traders</option>
                              <option>Balaji Traders</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Name of Insurer
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                              style={{ borderColor: '#43C34D' }}
                              required
                              type="text"
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              GST of Insured
                            </label>
                            <img
                              className={`${styles.checked_image} img-fluid`}
                              src="/static/approved.svg"
                              alt="Approve"
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
                            Name of Insured
                            <strong className="text-danger">*</strong>
                          </label>
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
                            GST of Insured
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender labelName="Insurance from" />
                            <img
                              className={`${styles.calanderIcon} img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </Col>
                        <Col className="mb-4 mt-4" lg={2} md={6}>
                          <div className="d-flex">
                            <DateCalender labelName="Insurance to" />
                            <img
                              className={`${styles.calanderIcon} img-fluid`}
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
                              className={`${styles.arrow} img-fluid`}
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
                                  <input type="file" name="myfile" />
                                  <button
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
        <div className={`${styles.reject} ml-3`}>
          <span>Cancel</span>
        </div>
        <div onClick={()=>handleInsuranceUpdate()} className={`${styles.approve} ml-3`}>
          <span>Submit</span>
        </div>
      </div>
    </div>
  )
}
export default Index
