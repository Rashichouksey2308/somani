/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Row, Col, Form } from 'react-bootstrap'
import PaginateBar from '../../../src/components/Paginatebar'
import _get from 'lodash/get'
import { useDispatch, useSelector } from 'react-redux'
import { GettingAllInsurance } from '../../../src/redux/insurance/action'
import moment from 'moment'
import { CovertvaluefromtoCR } from '../../../src/utils/helper'
import {
  setPageName,
  setDynamicName,
  setDynamicOrder,
} from '../../../src/redux/userData/action'
import Router from 'next/router'
import Modal from 'react-bootstrap/Modal'

function Index() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handlePopup = () => {
    setShow(true)
  }
  useEffect(() => {
    let id = sessionStorage.getItem('letterId')
    dispatch(GettingAllInsurance(`?insuranceId=${id}`))
  }, [dispatch])

  const { insuranceResponse } = useSelector((state) => state.insurance)

  let insuranceData = _get(insuranceResponse, 'data[0]', {})

  dispatch(setPageName('insurance Request Letter'))
  dispatch(
    setDynamicName(_get(insuranceData, 'company.companyName', 'Company Name')),
  )
  dispatch(setDynamicOrder(_get(insuranceData, 'order.orderId', 'Order Id')))

  console.log(insuranceData, 'INSURANCE DATA LETTER')
  const [emailAdd, setEmailAdd] = useState([
    {
      emailID: '',
    },
  ])
  const [insuranceAdd, setinsuranceAdd] = useState([
    {
      insurance: '',
    },
  ])
  console.log(insuranceAdd, emailAdd, "emailAdd")
  const addMoreRows = (val) => {
    console.log(val, "vak")
    if (val == "email") {
      setEmailAdd([
        ...emailAdd,
        {
          emailID: '',
        },
      ])
    } else {
      setinsuranceAdd([
        ...insuranceAdd,
        {
          insurance: '',
        },
      ])
    }

  }
  return (
    <>
      <div className="container-fluid p-0">
        <div
          className={`${styles.card} tabHeader border-0 shadow-none bg-transparent card2`}
        >
          <div className={`${styles.head_header} align-items-center`}>
            <div onClick={() => Router.push('/insurance/form')}>
              <img

                className={`${styles.arrow} img-fluid image_arrow mr-2`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="arrow"
              />
            </div>
            <h1 className={`${styles.heading} heading`}>
              {insuranceData?.company?.companyName}
            </h1>
          </div>
          <div className={`${styles.card_body} card-body`}>
            <p className={`${styles.centerHeading} heading`}>
              Request for Insurance Quotation
            </p>
            <div className={`${styles.details}`}>
              <div className={`${styles.details_content} mb-1`}>
                <span className={`${styles.details_head}`}>Order ID:</span>
                <span className={`${styles.details_val} label_heading" ml-1`}>
                  {insuranceData?.order?.orderId}
                </span>
              </div>
              <div className={`${styles.details_content} mb-1`}>
                <span className={`${styles.details_head}`}>Date:</span>
                <span className={`${styles.details_val} label_heading" ml-1`}>
                  {/* {moment(insuranceData?.createdAt?.split('T')[0]).format(
                    'DD.MM.yyyy',
                  )} */}
                  {moment(new Date()).format('DD.MM.yyyy')}
                </span>
              </div>
              <div className={`${styles.details_content} mb-1`}>
                <span className={`${styles.details_head}`}>
                  Type of Insurance:
                </span>
                <span className={`${styles.details_val} label_heading" ml-1`}>
                  {insuranceData?.quotationRequest?.insuranceType}
                </span>
              </div>
              <br></br>
              <p className={`${styles.salutations} heading mb-3`}>
                Dear Sir/Madam,
              </p>
              <p className={`${styles.salutations} heading`}>
                As discussed, please note the detail of Cargo as under:
              </p>
              <div className={`${styles.content} border_color`}>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Vessel
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {_get(
                      insuranceData,
                      'order.vessel.vessels[0].vesselInformation[0].name',
                      '',
                    )}
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    IMO Number
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {_get(
                      insuranceData,
                      'order.vessel.vessels[0].vesselInformation[0].IMONumber',
                      '',
                    )}
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Year of Built
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {_get(
                      insuranceData,
                      'order.vessel.vessels[0].vesselInformation[0].yearOfBuilt',
                      '',
                    )?.slice(0, 4)}
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Sum Insured
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    INR{' '}
                    {CovertvaluefromtoCR(
                      insuranceData?.quotationRequest?.sumInsured,
                    )?.toLocaleString('en-In', {
                      maximumFractionDigits: 2,
                    })}{' '}
                    Crores (Including 110%)
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Material
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {insuranceData?.order?.commodity}
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Origin
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {_get(
                      insuranceData,
                      'order.vessel.vessels[0].transitDetails.countryOfOrigin',
                      '',
                    )}
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Quantity
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    BL Weight {insuranceData?.order?.quantity?.toLocaleString('en-In', {
                      maximumFractionDigits: 2,
                    })} MTs. (+/{insuranceData?.order?.tolerance ?? 0}%)
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Port of Loading
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {_get(
                      insuranceData,
                      'order.vessel.vessels[0].transitDetails.portOfLoading',
                      '',
                    )}
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Port of Discharges
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {_get(
                      insuranceData,
                      'order.vessel.vessels[0].transitDetails.portOfDischarge',
                      '',
                    )}
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Place of Storage
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {
                      insuranceData?.quotationRequest?.storageDetails
                        ?.placeOfStorage
                    }
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Storage Plot Address
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {
                      insuranceData?.quotationRequest?.storageDetails
                        ?.storagePlotAddress
                    }
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Period of Insurance
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {
                      insuranceData?.quotationRequest?.storageDetails
                        ?.periodOfInsurance
                    }{' '}
                    Days
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Laycan
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {moment(insuranceData?.quotationRequest?.laycanFrom).format(
                      'DD MMM',
                    )}{' '}
                    -{' '}
                    {moment(insuranceData?.quotationRequest?.laycanTo).format(
                      'DD MMMM,  YYYY',
                    )}
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    ETD
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {moment(
                      insuranceData?.quotationRequest?.expectedTimeOfDispatch,
                    ).format('DD MMMM , YYYY')}
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    ETA
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {moment(
                      insuranceData?.quotationRequest?.expectedTimeOfArrival,
                    ).format('DD MMMM, YYYY')}
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Insurance Coverage
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    All Risks Including Burglary, Act of God, Fire, SRCC,
                    Pilferage etc.
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Name of Insured
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {insuranceData?.company?.companyName} , <br></br>   {insuranceData?.company?.detailedCompanyInfo?.profile?.companyDetail?.registeredAddress}
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Loss Payee
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {insuranceData?.quotationRequest?.lossPayee}
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} border-bottom`}
                  >
                    Additional Information
                  </Col>
                  <Col
                    md={9}
                    sm={9}
                    xs={8}
                    className={`${styles.content_val} border-bottom`}
                  >
                    {insuranceData?.quotationRequest?.additionalInfo}
                  </Col>
                </Row>
              </div>
              <p className={`${styles.salutations} heading mb-3`}>
                Thanks & Best Regards,
              </p>
              <p className={`${styles.salutations} heading m-0 pt-0`}>
                {' '}
                Vipin Rajput{' '}
              </p>
              <p className={`${styles.salutations} heading m-0 pt-0`}>
                {' '}
                Manager Accounts
              </p>
              <p className={`${styles.salutations} heading m-0 pt-0`}>
                {' '}
                Indo German International Private Limited
              </p>
              <p className={`${styles.salutations} heading m-0 pt-0`}>
                {' '}
                8-B, Sagar, 6-Tilak Marg
              </p>
              <p className={`${styles.salutations} heading m-0 pt-0`}>
                {' '}
                New Delhi-110001
              </p>
              <p className={`${styles.salutations} heading m-0 pt-0`}>
                {' '}
                Mobile No - 9312251303{' '}
              </p>
              <p className={`${styles.salutations} heading m-0 pt-0 mb-5`}>
                {' '}
                Email ID - vipinrajput@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <PaginateBar
        leftButtonTitle={'Request letter'}
        rightButtonTitle={'Share'}
        openbar={handlePopup}
      />

      <Modal
        show={show}
        className={`${styles.share_lc} vessel_card card share_lc`}
      >
        <Modal.Body className={`${styles.card_body} card-body`}>
          <form>
            <div className={`${styles.tab_content} tab-content`} id="LCDraft">
              <div
                className="tab-pane fade show active"
                id="shareLCDraft"
                role="tabpanel"
                aria-labelledby="share-LC-draft"
              >
                  <h3 className='share_h3'>Share as</h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className={`${styles.lc_document} ${styles.box} d-flex align-items-center`}
                  >
                    <img
                      src="/static/pdf-icon.png"
                      width={`55px`}
                      alt="PDF"
                      className="img-fluid"
                    />
                    <label for="lc_document">
                      Requestletter.pdf<span className='size_number'>128kb</span>
                    </label>
                    <input
                      type="checkbox"
                      className="ml-auto"
                      id="lc_document"
                      value="LC Document"
                    />
                  </div>
                  <div
                    className={`${styles.word_document} ${styles.box} d-flex align-items-center`}
                  >
                    <img
                      src="/static/doc-icon.png"
                      width={`55px`}
                      alt="DOC"
                      className="img-fluid"
                    />
                    <label for="word_document">
                      Requestletter.doc<span className='size_number'>128kb</span>
                    </label>
                    <input
                      type="checkbox"
                      className="ml-auto"
                      id="word_document"
                      value="word document"
                    />
                  </div>
                </div>
                <ul
                  className={`${styles.nav_tabs} ${styles.share_via} share_via nav nav-tabs`}
                  id="shareVia"
                  role="tablist"
                >
                  <li className={`${styles.nav_item} nav-item`}>
                    <a
                      className={`${styles.nav_link} nav-link active`}
                      id="insurance-company"
                      data-toggle="tab"
                      href="#insuranceCompany"
                      role="tab"
                      aria-controls="insuranceCompany"
                      aria-selected="true"

                    >
                      <img
                        src="/static/groups.svg"
                        width={`32px`}
                        className="img-fluid"
                        alt="group"
                      />
                      Insurance Company
                    </a>
                  </li>
                  <li className={`${styles.nav_item} nav-item`}>
                    <a
                      className={`${styles.nav_link} nav-link`}
                      id="email-address"
                      data-toggle="tab"
                      href="#emailAddress"
                      role="tab"
                      aria-controls="emailAddress"
                      aria-selected="false"

                    >
                      <img
                        src="/static/email-icon.png"
                        width={`27px`}
                        className="img-fluid"
                        alt="Email"
                      />
                      Email Address
                    </a>
                  </li>
                </ul>
                <div
                  className={`${styles.tab_content} tab-content`}
                  id="shareVia"
                >
                  <div
                    className="tab-pane fade show active"
                    id="insuranceCompany"
                    role="tabpanel"
                    aria-labelledby="insurance-company"
                  >
                    <div className={`${styles.each_input} form-group`}>
                      <div className="d-flex">
                        <select
                          id="email"
                          name="email"
                          className={`${styles.formControl} ${styles.customSelect} input form-control`}
                          selected
                        >
                          <option value="javanika.seth@hdfcbank.com">
                            New India Assurance
                          </option>
                        </select>

                        <img
                          className={`${styles.arrow} image_arrow img-fluid`}
                          src="/static/inputDropDown.svg"
                          alt="Search"
                        />
                      </div>

                    </div>
                    {insuranceAdd.map((val, index) => {
                      return (
                        <>
                          <div className={`${styles.radio_form} ml-1`}>
                            {['radio'].map((type) => (
                              <div
                                key={`inline-${type}`}
                                className={styles.radio_group}
                              >
                                <Form.Check
                                  className={styles.radio}
                                  inline
                                  label="abcz@email.com"
                                  name="group1"
                                  id={`inline-${type}-1`}
                                />
                                <Form.Check
                                  className={styles.radio}
                                  inline
                                  label="abcz@email.com"
                                  name="group1"
                                  id={`inline-${type}-2`}
                                />
                              </div>
                            ))}
                          </div>
                          <hr></hr>
                        </>
                      )
                    })}
                    <div
                      className={`${styles.addMoreRows}`}
                      onClick={(e) => {
                        addMoreRows("insurance")
                      }}
                    >
                      <span style={{ fontSize: '2rem' }} className={`mr-2`}

                      >
                        +
                      </span>{' '}
                      add another
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        onClick={handleClose}
                        type="button"
                        className={`${styles.close} ${styles.btn} btn w-50`}
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className={`${styles.submit} ${styles.btn} btn w-50`}
                      >
                        Share
                      </button>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="emailAddress"
                    role="tabpanel"
                    aria-labelledby="email-address"
                  >
                    <div className={`${styles.each_input} form-group`}>

                      {emailAdd.map((val, index) => {
                        return (
                          <>
                            <div className="d-flex">
                              <select
                                id="email"
                                name="email"
                                className={`${styles.formControl} ${styles.customSelect} input form-control`}
                                selected
                              >
                                <option value="javanika.seth@hdfcbank.com">
                                  javanika.seth@hdfcbank.com
                                </option>
                              </select>
                              <label
                                className={`${styles.label_heading} label_heading_login label_heading bg-transparent`}
                                htmlFor="email"
                              >
                                Email
                              </label>
                              <img
                                className={`${styles.arrow} image_arrow img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                              />
                            </div>
                          </>


                        )
                      })}

                    </div>
                    {/* <div className={`${styles.labelFloat} form-group`}>
                          <input type='text' id='phone' name="phone" className={`${styles.formControl} ${styles.input} input form-control`} required />
                          <label className={`label_heading_login`} htmlFor='phone'>Phone Number</label>
                        </div> */}
                    <div
                      className={`${styles.addMoreRows}`}
                      onClick={(e) => {
                        console.log(this)
                        addMoreRows("email")
                      }}
                    >
                      <span style={{ fontSize: '2rem' }} className={`mr-2`}

                      >
                        +
                      </span>{' '}
                      add another
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        onClick={handleClose}
                        type="button"
                        className={`${styles.close} ${styles.btn} btn w-50`}
                      >
                        Close
                      </button>
                      <button
                        onClick={handleClose}
                        type="button"
                        className={`${styles.submit} ${styles.btn} btn w-50`}
                      >
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="downloadLCDraft"
                role="tabpanel"
                aria-labelledby="download-LC-draft"
              >
                <h3>Download as</h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className={`${styles.lc_document} ${styles.box} d-flex align-items-center`}
                  >
                    <img
                      src="/static/pdf-icon.png"
                      width={`55px`}
                      alt="PDF"
                      className="img-fluid"
                    />
                    <label for="lc_document">
                      LC Document.pdf<span className='size_number'>128kb</span>
                    </label>
                    <input
                      type="checkbox"
                      className="ml-auto"
                      id="lc_document"
                      value="LC Document"
                    />
                  </div>
                  <div
                    className={`${styles.word_document} ${styles.box} d-flex align-items-center`}
                  >
                    <img
                      src="/static/doc-icon.png"
                      width={`55px`}
                      alt="DOC"
                      className="img-fluid"
                    />
                    <label for="word_document">
                      word document.doc<span className='size_number'>128kb</span>
                    </label>
                    <input
                      type="checkbox"
                      className="ml-auto"
                      id="word_document"
                      value="word document"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={handleClose}
                    type="button"
                    className={`${styles.close} ${styles.btn} btn w-50`}
                  >
                    Close
                  </button>
                  <button
                    onClick={handleClose}
                    type="button"
                    className={`${styles.submit} ${styles.btn} btn w-50`}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Index
