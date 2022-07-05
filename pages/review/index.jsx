/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './reviewqueue.module.scss'
import Order from '../../src/components/Order'
import ShipmentDetails from '../../src/components/ShipmentDetails'
import ComplianceLigitations from '../../src/components/CompilanceLigitation'
import LigitationsTable from '../../src/components/LigitationsTable'
import GST from '../../src/components/GST'

import Credit from '../../src/components/Credit'
import Recommendations from '../../src/components/Recommendations'
import CAM from '../../src/components/CAM'
import { Form } from 'react-bootstrap'

import PreviousBar from '../../src/components/PreviousBar'
import DownloadBar from '../../src/components/DownloadBar'
import CommonSave from '../../src/components/CommonSave'
//sub modules
import CompanyDetails from '../../src/components/ReviewQueueProfile/CompanyDetails'
import ShareHoldingPattern from '../../src/components/ReviewQueueProfile/ShareHoldingPattern'
import AuditorDeatils from '../../src/components/ReviewQueueProfile/AuditorDeatils'
import CreditRatings from '../../src/components/ReviewQueueProfile/CreditRatings'

import BalanceSheet from '../../src/components/ReviewQueueFinancials/BalanceSheet'
import CashFlow from '../../src/components/ReviewQueueFinancials/CashFlow'
import IncomeStatement from '../../src/components/ReviewQueueFinancials/IncomeStatement'
import OpenCharges from '../../src/components/ReviewQueueFinancials/OpenCharges'
import Peer from '../../src/components/ReviewQueueFinancials/Peer'
import Ratios from '../../src/components/ReviewQueueFinancials/Ratios'

import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { UpdateCredit, UpdateOrderShipment } from '../../src/redux/buyerProfile/action'
import { element } from 'prop-types'

function Index() {
  const dispatch = useDispatch()

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (
      localStorage.getItem('darkMode') == 'true' ||
      localStorage.getItem('darkMode') == true
    ) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  const { orderList } = useSelector((state) => state.buyer)

  const [selectedTab, setSelectedTab] = useState('Profile')

  const [orderDetails, setOrderDetails] = useState({
    transactionType: orderList?.transactionType,
    commodity: orderList?.commodity,
    quantity: orderList?.quantity,
    unitOfQuantity: orderList?.unitOfQuantity,
    orderValue: orderList?.orderValue,
    orderCurrency: orderList?.orderCurrency,
    unitOfValue: orderList?.unitOfValue,
    supplierName: orderList?.supplierName,
    countryOfOrigin: orderList?.countryOfOrigin,
    portOfDischarge: orderList?.portOfDischarge,
    ExpectedDateOfShipment: orderList?.ExpectedDateOfShipment,
    incoTerm: orderList?.incoTerm,
    grade: orderList?.grade,
    tolerance: orderList?.tolerance,
    transactionPeriodDays: orderList?.transactionPeriodDays,
    manufacturerName: orderList?.manufacturerName,
  })

  const [shipment, setShipment] = useState({
    ETAofDischarge: {
      fromDate: orderList?.shipmentDetails?.ETAofDischarge.fromDate,
      toDate: orderList?.shipmentDetails?.ETAofDischarge?.toDate,
    },
    lastDateOfShipment: orderList?.shipmentDetails?.lastDateOfShipment,
    loadPort: {
      fromDate: orderList?.shipmentDetails?.loadPort?.fromDate,
      toDate: orderList?.shipmentDetails?.loadPort?.toDate,
    },
    shipmentType: orderList?.shipmentDetails?.shipmentType,
  })

  const saveOrderData = (name, value) => {
    const newInput = { ...orderDetails }
    newInput[name] = value
    // console.log(newInput)
    setOrderDetails(newInput)
  }

  const saveShipmentData = (name, value) => {
    const newInput = { ...shipment }
    const namesplit = name.split('.')
    namesplit.length > 1
      ? (newInput[namesplit[0]][namesplit[1]] = value)
      : (newInput[name] = value)
    setShipment(newInput)
  }

  const onOrderSave = () => {
    if (orderDetails.unitOfValue === 'Cr' || 'Crores') {
      const obj = {
        ...orderDetails,
        shipmentDetail: { ...shipment },
        order: orderList._id,
        orderValue: orderDetails.orderValue + '0000000',
      }
      dispatch(UpdateOrderShipment(obj))
    } else {
      const obj = {
        ...orderDetails,
        shipmentDetail: { ...shipment },
        order: orderList._id,
      }
      dispatch(UpdateOrderShipment(obj))
    }
  }

  const [product, setProduct] = useState({
    AvgMonthlyElectricityBill:
      orderList?.productSummary?.AvgMonthlyElectricityBill,
    availableStock: orderList?.productSummary?.availableStock,
    averageStockInTransit: orderList?.productSummary?.averageStockInTransit,
    averageStockOfCommodity: orderList?.productSummary?.averageStockOfCommodity,
    capacityUtilization: orderList?.productSummary?.capacityUtilization,
    contributionCommoditySenstivity:
      orderList?.productSummary?.contributionCommoditySenstivity,
    dailyConsumptionOfCommodity:
      orderList?.productSummary?.dailyConsumptionOfCommodity,
    existingCHA: [],
    existingProcurementOfCommodity:
      orderList?.productSummary?.existingProcurementOfCommodity,
    existingSuppliers: [],
    monthlyProductionCapacity:
      orderList?.productSummary?.monthlyProductionCapacity,
    paymentStatusForElectricityBills:
      orderList?.productSummary?.paymentStatusForElectricityBills,
    stockCoverageOfCommodity:
      orderList?.productSummary?.stockCoverageOfCommodity,
    typeOfCurrency: orderList?.productSummary?.typeOfCurrency,
    unitOfQuantity: orderList?.productSummary?.unitOfQuantity,
  })

  const saveProductData = (name, value) => {
    const newInput = { ...product }
    newInput[name] = value
    // console.log(newInput, "prod")
    setProduct(newInput)
  }

  const [supplierCred, setSupplierCred] = useState({
    HSCodesNumber: orderList?.supplierCredentials?.HSCodesNumber,
    commodityOfTotalTrade:
      orderList?.supplierCredentials?.commodityOfTotalTrade,
    consigneesNumber: orderList?.supplierCredentials?.consigneesNumber,
    countryOfOrigin: orderList?.supplierCredentials?.countryOfOrigin,
    latestShipmentDate: orderList?.supplierCredentials?.lastDateOfShipment,
    oldestShipmentDate: orderList?.supplierCredentials?.oldestShipmentDate,
    portOfDestination: orderList?.supplierCredentials?.portOfDestination,
    remarks: orderList?.supplierCredentials?.remarks,
    shipmentNumber: orderList?.supplierCredentials?.shipmentNumber,
    supplierName: orderList?.supplierCredentials?.supplierName,
  })

  const saveSupplierData = (name, value) => {
    const newInput = { ...supplierCred }
    newInput[name] = value
    // console.log(newInput)
    setSupplierCred(newInput)
  }

  const [keyAddData, setKeyAddData] = useState([
    {
      GSTIN: orderList?.company?.keyAddress?.GSTIN,
      GSTIN_document: orderList?.company?.keyAddress?.GSTIN_document,
      addressType: orderList?.company?.keyAddress?.addressType,
      branch: orderList?.company?.keyAddress?.branch,
      city: orderList?.company?.keyAddress?.city,
      state: orderList?.company?.keyAddress?.state,
      email: orderList?.company?.keyAddress?.email,
      completeAddress: orderList?.company?.keyAddress?.companyAddress,
      contact: {
        callingCode: orderList?.company?.keyAddress?.contact?.callingCode,
        number: orderList?.company?.keyAddress?.contact?.number,
      },
      pinCode: orderList?.company?.keyAddress?.pinCode,
    },
  ])


  const [financialsComment, setFinancialsComment] = useState(orderList?.company?.recommendations?.commentsOnFinancials)

  const [companyComment, setCompanyComment] = useState(orderList?.company?.recommendations?.companyProfile)


  const [sanctionComment, setSanctionComment] = useState(orderList?.company?.recommendations?.sanctionTerms)

  const [strengthsComment, setStrengthsComment] = useState(orderList?.company?.recommendations?.strengths)

  const [weaknessComment, setWeaknessComment] = useState(orderList?.company?.recommendations?.weakness)

  const addCompanyCommentArr = (companyComments) => {
    let newArr = [...companyComment]
    newArr.push(companyComments)
    setCompanyComment(newArr)
  }
  const addFinancialsCommentArr = (financialsComments) => {
    let newArr = [...financialsComment]
    newArr.push(financialsComments)
    setFinancialsComment(newArr)
  }
  const addSanctionCommentArr = (sanctionComments) => {
    let newArr = [...sanctionComment]
    newArr.push(sanctionComments)
    setSanctionComment(newArr)
  }
  const addStrengthsCommentArr = (strengthsComments) => {
    let newArr = [...strengthsComment]
    newArr.push(strengthsComments)
    setStrengthsComment(newArr)
  }
  const addWeaknessCommentArr = (weaknessComments) => {
    let newArr = [...weaknessComment]
    newArr.push(weaknessComments)
    setWeaknessComment(newArr)
  }
  

  const [debtData, setDebtData] = useState([
    {
      bankName:  orderList?.company?.debtProfile?.bankName,
      conduct:  orderList?.company?.debtProfile?.conduct,
      limit:  orderList?.company?.debtProfile?.limit,
      limitType:  orderList?.company?.debtProfile?.limitType,
    },
  ])

  const [personData, setPersonData] = useState([
    {
      contact: {
        callingCode:  orderList?.company?.keyContactPerson?.contact?.callingCode,
        number:  orderList?.company?.keyContactPerson?.contact?.number,
      },
      department:  orderList?.company?.keyContactPerson?.department,
      designation:  orderList?.company?.keyContactPerson?.designation,
      email:  orderList?.company?.keyContactPerson?.email,
      name: orderList?.company?.keyContactPerson?.name,
    },
  ])

  useEffect(() => {
    let debtArr = []
    orderList?.company?.debtProfile?.forEach((element) => {
      // console.log(element,"useEE")
      debtArr.push(element)
    })
    setDebtData(debtArr)

    let addressArr = []
    orderList?.company?.keyAddress?.forEach((element) => {
      // console.log(element,"useEE")
      addressArr.push(element)
    })
    setKeyAddData(addressArr)

    let personArr = []
    orderList?.company?.keyContactPerson?.forEach((element) => {
      // console.log(element,"useEE")
      personArr.push(element)
    })
    setPersonData(personArr)

    let commentFinancialArr = []
    orderList?.company?.recommendation?.commentsOnFinancials.forEach(
      (element) => {
        commentFinancialArr.push(element)
      },
    )
    setFinancialsComment(commentFinancialArr)

    let companyCommentArr = []
    orderList?.company?.recommendation?.companyProfile.forEach((element) => {
      companyCommentArr.push(element)
    })
    setCompanyComment(companyCommentArr)

    let sanctionArr = []
    orderList?.company?.recommendation?.sanctionTerms.forEach((element) => {
      sanctionArr.push(element)
    })
    setSanctionComment(sanctionArr)

    let strengthsArr = []
    orderList?.company?.recommendation?.strengths.forEach((element) => {
      strengthsArr.push(element)
    })
    setStrengthsComment(strengthsArr)

    let weaknessArr = []
    orderList?.company?.recommendation?.weakness.forEach((element) => {
      weaknessArr.push(element)
    })
    setWeaknessComment(weaknessArr)
  }, [orderList?.company])

  const keyAddDataArr = (keyAddressData) => {
    let newArr = [...keyAddData]
    newArr.push(keyAddressData)
    setKeyAddData(newArr)
  }

  const addDebtArr = (debt) => {
    let newArr = [...debtData]
    newArr.push(debt)
    setDebtData(newArr)
  }

  const addPersonArr = (keyPersonData) => {
    // let newArr = [...personData]
    // newArr.push(keyPersonData)
    setPersonData(keyPersonData)
  }

  const onCreditSave = () => {
    const obj = {
      productSummary: { ...product },
      supplierCredential: { ...supplierCred },
      order: orderList._id,
      keyContactPerson: [...personData],
      keyAddress: [...keyAddData],
      recommendation: {companyProfile: [...companyComment],commentsOnFinancials: [...financialsComment], strengths: [...strengthsComment], sanctionTerms:[...sanctionComment], weakness: [...weaknessComment]},
      debtProfile: [...debtData]
    }
    // console.log(obj, "credit obj")
    dispatch(UpdateCredit(obj))
  }

  const currentOpenLink = (e) => {
    console.log(e.target.attributes[4].nodeValue)
    setSelectedTab(e.target.attributes[4].nodeValue)
  }

  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <h1 className={`${styles.title} heading pt-3 pb-3`}>
            <img
              src={`${
                darkMode ? `/static/white-arrow.svg` : `/static/arrow-right.svg`
              }`}
              alt="arrow right"
              className="img-fluid image_arrow"
            />
            {orderList?.company?.companyName}
          </h1>

          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link active`}
                data-toggle="tab"
                href="#Profile"
                role="tab"
                aria-controls="Profile"
                aria-selected="true"
                onClick={(e) => {
                  currentOpenLink(e)
                }}
              >
                Profile
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#Financials"
                role="tab"
                aria-controls="Financials"
                aria-selected="false"
                onClick={(e) => {
                  currentOpenLink(e)
                }}
              >
                Financials
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#gst"
                role="tab"
                aria-controls="GST"
                aria-selected="false"
                onClick={(e) => {
                  currentOpenLink(e)
                }}
              >
                GST
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#Compliance"
                role="tab"
                aria-controls="Compliance"
                aria-selected="false"
                onClick={(e) => {
                  currentOpenLink(e)
                }}
              >
                Compliance
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#Orders"
                role="tab"
                aria-controls="Orders"
                aria-selected="false"
                onClick={(e) => {
                  currentOpenLink(e)
                }}
              >
                Orders
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#Credit"
                role="tab"
                aria-controls="Credit"
                aria-selected="false"
                onClick={(e) => {
                  currentOpenLink(e)
                }}
              >
                Credit
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#DocumentsTab"
                role="tab"
                aria-controls="DocumentsTab"
                aria-selected="true"
                onClick={(e) => {
                  currentOpenLink(e)
                }}
              >
                Documents
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#cam"
                role="tab"
                aria-controls="CAM"
                aria-selected="false"
                onClick={(e) => {
                  currentOpenLink(e)
                }}
              >
                CAM
              </a>
            </li>
          </ul>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12  accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div
                  className="tab-pane fade show active"
                  id="Profile"
                  role="tabpanel"
                >
                  <div className="accordion" id="profileAccordion">
                    <CompanyDetails />
                    <AuditorDeatils />
                    <ShareHoldingPattern />
                    <CreditRatings />
                  </div>
                </div>
                <div className="tab-pane fade" id="Financials" role="tabpanel">
                  <div className="accordion" id="FinancialsAccordion">
                    <BalanceSheet />

                    <IncomeStatement />

                    <CashFlow />

                    <Ratios />

                    <Peer />

                    <OpenCharges />
                  </div>
                </div>
                <div className="tab-pane fade" id="gst" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <GST />
                  </div>
                </div>
                <div className="tab-pane fade" id="Compliance" role="tabpanel">
                  <div className={`${styles.card} card`}>
                    <div
                      className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                      data-toggle="collapse"
                      data-target="#compliance"
                      aria-expanded="true"
                      aria-controls="compliance"
                    >
                      <div
                        className={`${styles.detail_head_container}  d-flex align-items-center justify-content-between w-100`}
                      >
                        <h2 className="mb-0 w-100 ">Compliance</h2>
                        <div
                          className={`${styles.categories} mb-0  d-flex align-items-center justify-content-end `}
                        >
                          <label className={styles.label}>Status:</label>
                          <div
                            className={`${styles.status} d-flex align-items-center justify-content-between`}
                          >
                            <span> NON-COMPLIANT HIGH RISK</span>
                          </div>
                        </div>
                      </div>
                      <span>+</span>
                    </div>
                    <div
                      id="compliance"
                      className="collapse"
                      aria-labelledby="compliance"
                      data-parent="#profileAccordion"
                    >
                      <div
                        className={` ${styles.cardBody_compliance} card-body border_color`}
                      >
                        <Row className={` ${styles.row} mt-1 mb-1`}>
                          <Col className={`${styles.col}`} sm={2}>
                            <span
                              className={`${styles.head} d-flex align-items-center justify-content-flex-start`}
                            >
                              Severe Risk (1)
                            </span>
                          </Col>
                          <Col className={`${styles.col}`}>
                            <div
                              className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}
                            >
                              <div
                                className={`${styles.val} d-flex align-items-center justify-content-flex-start`}
                              >
                                <div
                                  className={`${styles.compliance_purple} d-flex align-items-center justify-content-center`}
                                >
                                  <div className={styles.purple_dot}></div>
                                  <div
                                    className={`${styles.compliance_content} Compliance ml-1`}
                                  >
                                    IBBB
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className={` ${styles.row} mt-1 mb-1`}>
                          <Col className={`${styles.col}`} sm={2}>
                            <span className={styles.head}>High Risk (4)</span>
                          </Col>
                          <Col className={`${styles.col}`}>
                            <div
                              className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}
                            >
                              <div
                                className={`${styles.val} d-flex align-items-center justify-content-flex-start`}
                              >
                                <div
                                  className={`${styles.compliance_red} d-flex align-items-center justify-content-center`}
                                >
                                  <div className={styles.red_dot}></div>
                                  <div
                                    className={`${styles.compliance_content} Compliance ml-1`}
                                  >
                                    EPF Transaction Default
                                  </div>
                                </div>
                                <div
                                  className={`${styles.compliance_red} d-flex align-items-center justify-content-center`}
                                >
                                  <div className={styles.red_dot}></div>
                                  <div
                                    className={`${styles.compliance_content} Compliance ml-1`}
                                  >
                                    Credit Rating Suspended
                                  </div>
                                </div>
                                <div
                                  className={`${styles.compliance_red} d-flex align-items-center justify-content-center`}
                                >
                                  <div className={styles.red_dot}></div>
                                  <div
                                    className={`${styles.compliance_content} Compliance ml-1`}
                                  >
                                    Credit Rating Withdrawn
                                  </div>
                                </div>
                                <div
                                  className={`${styles.compliance_red} d-flex align-items-center justify-content-center`}
                                >
                                  <div className={styles.red_dot}></div>
                                  <div
                                    className={`${styles.compliance_content} Compliance ml-1`}
                                  >
                                    Qualified Opinion
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className={` ${styles.row} mt-1 mb-1`}>
                          <Col className={`${styles.col}`} sm={2}>
                            <span className={styles.head}>Medium Risk (2)</span>
                          </Col>
                          <Col className={`${styles.col}`}>
                            <div
                              className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}
                            >
                              <div
                                className={`${styles.val} d-flex align-items-center justify-content-flex-start`}
                              >
                                <div
                                  className={`${styles.compliance_yellow} d-flex align-items-center justify-content-center`}
                                >
                                  <div className={styles.yellow_dot}></div>
                                  <div
                                    className={`${styles.compliance_content} Compliance ml-1`}
                                  >
                                    Generic Address
                                  </div>
                                </div>
                                <div
                                  className={`${styles.compliance_yellow} d-flex align-items-center justify-content-center`}
                                >
                                  <div className={styles.yellow_dot}></div>
                                  <div
                                    className={`${styles.compliance_content} Compliance ml-1`}
                                  >
                                    GST Transaction Delay
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className={` ${styles.row} mt-1 mb-1`}>
                          <Col className={`${styles.col}`} sm={2}>
                            <span className={styles.head}>High Risk (4)</span>
                          </Col>
                          <Col className={`${styles.col}`}>
                            <div
                              className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}
                            >
                              <div
                                className={`${styles.val} d-flex align-items-center justify-content-flex-start`}
                              >
                                <div
                                  className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}
                                >
                                  <div className={styles.orange_dot}></div>
                                  <div
                                    className={`${styles.compliance_content} Compliance ml-1`}
                                  >
                                    GST Inactive
                                  </div>
                                </div>
                                <div
                                  className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}
                                >
                                  <div className={styles.orange_dot}></div>
                                  <div
                                    className={`${styles.compliance_content} Compliance ml-1`}
                                  >
                                    GST Transaction Default
                                  </div>
                                </div>
                                <div
                                  className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}
                                >
                                  <div className={styles.orange_dot}></div>
                                  <div
                                    className={`${styles.compliance_content} Compliance ml-1`}
                                  >
                                    IEC In Denied Entity List
                                  </div>
                                </div>
                                <div
                                  className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}
                                >
                                  <div className={styles.orange_dot}></div>
                                  <div
                                    className={`${styles.compliance_content} Compliance ml-1`}
                                  >
                                    TDS Payment Delay
                                  </div>
                                </div>
                                <div
                                  className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}
                                >
                                  <div className={styles.orange_dot}></div>
                                  <div
                                    className={`${styles.compliance_content} Compliance ml-1`}
                                  >
                                    EPF Closed
                                  </div>
                                </div>
                                <div
                                  className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}
                                >
                                  <div className={styles.orange_dot}></div>
                                  <div
                                    className={`${styles.compliance_content} Compliance ml-1`}
                                  >
                                    EPF Transaction Delay
                                  </div>
                                </div>
                                <div
                                  className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}
                                >
                                  <div className={styles.orange_dot}></div>
                                  <div
                                    className={`${styles.compliance_content} Compliance ml-1`}
                                  >
                                    Credit Rating Outlook Negative
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                  {/* details */}
                  <div className={`${styles.card} card`}>
                    <div
                      className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                      data-toggle="collapse"
                      data-target="#details"
                      aria-expanded="true"
                      aria-controls="details"
                    >
                      <div
                        className={`${styles.detail_head_container}  d-flex align-items-center justify-content-between w-100`}
                      >
                        <h2 className="mb-0 w-100 ">Details</h2>
                        <div
                          className={`${styles.categories} mb-0  d-flex align-items-center justify-content-between `}
                        >
                          <label className={styles.label}>Categories:</label>
                          <select className="form-control">
                            <option>Statutory Compliance</option>
                          </select>
                        </div>
                      </div>
                      <span>+</span>
                    </div>
                    <div
                      id="details"
                      className="collapse"
                      aria-labelledby="details"
                      data-parent="#profileAccordion"
                    >
                      <div
                        className={` ${styles.cardBody_details} card-body border_color`}
                      >
                        {table2()}
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.card} card`}>
                    <div
                      className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                      data-toggle="collapse"
                      data-target="#litigations"
                      aria-expanded="true"
                      aria-controls="litigations"
                    >
                      <h2 className="mb-0">Litigations</h2>
                      <span>+</span>
                    </div>
                    <div
                      id="litigations"
                      className="collapse"
                      aria-labelledby="litigations"
                      data-parent="#profileAccordion"
                    >
                      <div
                        className={` ${styles.cardBody_litigations} card-body border_color`}
                      >
                        <div
                          className={`${styles.checkbox_Container} d-flex align-items-center justify-content-between`}
                          data-toggle="collapse"
                        >
                          <div
                            className={`${styles.leftGroup}  d-flex align-items-center justify-content-start`}
                          >
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                Pending (4)
                              </label>
                            </div>
                            <div className="form-check ml-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                Disposed (2)
                              </label>
                            </div>
                            <div className="form-check  ml-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                Total Cases (5)
                              </label>
                            </div>
                          </div>
                          <div
                            className={`${styles.rightGroup} d-flex align-items-center justify-content-start`}
                          >
                            <div className="form-check mr-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                              >
                                Respondent
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                checked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault2"
                              >
                                Petitioner
                              </label>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${styles.risk_Container} d-flex align-items-center justify-content-between mt-4 mb-4`}
                        >
                          <ComplianceLigitations
                            icon={'/static/danger.svg'}
                            backColor={'#E3F0FF'}
                            iconBackGroudColor={'#3687E8 '}
                            heading={'High Risk (5)'}
                            content={'Pending Case: 4 Disposed Case: 4'}
                          />
                          <ComplianceLigitations
                            icon={'/static/danger.svg'}
                            backColor={'#FFE9C5'}
                            iconBackGroudColor={'#FF9D00'}
                            heading={'Medium Risk (5)'}
                            content={'Pending Case: 4 Disposed Case: 4'}
                          />
                          <ComplianceLigitations
                            icon={'/static/Path 3369.svg'}
                            backColor={'#F3F4F7'}
                            iconBackGroudColor={'#9EB6FF'}
                            heading={'High Priority (5)'}
                            content={'Pending Case: 4 Disposed Case: 4'}
                          />
                          <ComplianceLigitations
                            icon={'/static/Group 1240.svg'}
                            backColor={'#FFE8E8'}
                            iconBackGroudColor={'#EA3F3F'}
                            heading={'Stagnant Cases (5)'}
                            content={'Pending Case: 4 Disposed Case: 4'}
                          />
                        </div>

                        <div>{ligitations()}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="Orders" role="tabpanel">
                  <div className={`${styles.card}`}>
                    <Order
                      orderDetail={orderList}
                      saveOrderData={saveOrderData}
                    />
                    <ShipmentDetails
                      orderDetail={orderList}
                      saveShipmentData={saveShipmentData}
                    />
                    <CommonSave onSave={onOrderSave} />
                  </div>
                </div>
                <div className="tab-pane fade" id="Credit" role="tabpanel">
                  <Credit
                    creditDetail={orderList}
                    keyAddDataArr={keyAddDataArr}
                    addDebtArr={addDebtArr}
                    addPersonArr={addPersonArr}
                    saveProductData={saveProductData}
                    debtData={debtData}
                    personData={personData}
                    saveSupplierData={saveSupplierData}
                    keyAddData={keyAddData}
                  />
                  <Recommendations
                    creditDetail={orderList}
                    financialsComment={financialsComment}
                    addWeaknessCommentArr={addWeaknessCommentArr}
                    addStrengthsCommentArr={addStrengthsCommentArr}
                    addSanctionCommentArr={addSanctionCommentArr}
                    addFinancialsCommentArr={addFinancialsCommentArr}
                    addCompanyCommentArr={addCompanyCommentArr}
                    companyComment={companyComment}
                    sanctionComment={sanctionComment}
                    strengthsComment={strengthsComment}
                    weaknessComment={weaknessComment}
                  />
                  <CommonSave onSave={onCreditSave} />
                </div>
                <div className="tab-pane fade" id="cam" role="tabpanel">
                  <CAM />
                </div>
                <div
                  className="tab-pane fade"
                  id="DocumentsTab"
                  role="tabpanel"
                >
                  <div className="accordion" id="profileAccordion">
                    <div className={`${styles.main} card border_color mb-4`}>
                      <div
                        className={`${styles.head_container} card-header border_color head_container d-flex justify-content-between`}
                        data-toggle="collapse"
                        data-target="#documents"
                        aria-expanded="true"
                        aria-controls="documents"
                      >
                        <h3 className={styles.heading}>
                          Upload Other Documents
                        </h3>
                        <span>+</span>
                      </div>
                      <div
                        id="documents"
                        className="collapse"
                        aria-labelledby="documents"
                        data-parent="#profileAccordion"
                      >
                        <div className={`${styles.dashboard_form} card-body`}>
                          <Form>
                            <div className="row align-items-center pb-4">
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
                                    Drop Files here <br />
                                    or <a href="#">Browse</a>
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-4 offset-md-1 col-sm-6">
                                <Form.Group className={styles.form_group}>
                                  <Form.Label
                                    className={`${styles.label} label_heading`}
                                  >
                                    Document Type
                                  </Form.Label>
                                  <select
                                    className={`${styles.value} input form-control`}
                                    id="docType"
                                  >
                                    <option value="volvo">Others</option>
                                    <option value="audi">N/A</option>
                                  </select>
                                </Form.Group>
                                <Form.Group className={styles.form_group}>
                                  <Form.Label
                                    className={`${styles.label} label_heading`}
                                  >
                                    Please Specify Document Name
                                  </Form.Label>
                                  <Form.Control
                                    className={`${styles.value} input form-control`}
                                    type="text"
                                    placeholder="Insurance Quotation"
                                  />
                                </Form.Group>
                                <div className={styles.uploadBtnWrapper}>
                                  <input type="file" name="myfile" />
                                  <button
                                    className={`${styles.upload_button} btn`}
                                  >
                                    Upload
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Form>
                        </div>

                        <div className={styles.table_container}>
                          <table
                            className={`${styles.table} table`}
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                          >
                            <thead>
                              <tr>
                                <th>DOCUMENT NAME</th>
                                <th>FORMAT</th>
                                <th>DOCUMENT DATE</th>
                                <th>UPLOADED BY</th>
                                <th>STATUS</th>
                                <th>ACTION</th>
                                <th>
                                  <img
                                    src="/static/search-blue.svg"
                                    className="img-fluid"
                                    alt="Search"
                                  />
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colSpan="7" className="p-0">
                                  <select
                                    className={`${styles.module} form-control`}
                                  >
                                    <option>ORDERS</option>
                                    <option>ORDERS 2</option>
                                  </select>
                                </td>
                              </tr>
                              <tr className="table_row">
                                <td className={`${styles.doc_name}`}>
                                  Insurance Quotation
                                </td>
                                <td>
                                  <img
                                    src="/static/pdf.svg"
                                    className="img-fluid"
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
                                    className="img-fluid mr-3"
                                    alt="Bin"
                                  />
                                  <img
                                    src="/static/upload.svg"
                                    className="img-fluid"
                                    alt="Share"
                                  />
                                </td>
                              </tr>
                              <tr className="table_row">
                                <td className={styles.doc_name}>
                                  Container No. List
                                </td>
                                <td>
                                  <img
                                    src="/static/pdf.svg"
                                    className="img-fluid"
                                    alt="Pdf"
                                  />
                                </td>
                                <td className={styles.doc_row}>
                                  28-02-2022,5:30 PM
                                </td>
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
                                    className="img-fluid mr-3"
                                    alt="Bin"
                                  />
                                  <img
                                    src="/static/upload.svg"
                                    className="img-fluid"
                                    alt="Share"
                                  />
                                </td>
                              </tr>
                              <tr className="table_row">
                                <td className={styles.doc_name}>
                                  Container Seal No. List
                                </td>
                                <td>
                                  <img
                                    src="/static/pdf.svg"
                                    className="img-fluid"
                                    alt="Pdf"
                                  />
                                </td>
                                <td className={styles.doc_row}>
                                  28-02-2022,5:30 PM
                                </td>
                                <td className={styles.doc_row}>
                                  Rama Krishnan
                                </td>
                                <td>
                                  <span
                                    className={`${styles.status} ${styles.rejected}`}
                                  ></span>
                                  Pending
                                </td>
                                <td colSpan="2">
                                  <img
                                    src="/static/delete.svg"
                                    className="img-fluid mr-3"
                                    alt="Bin"
                                  />
                                  <img
                                    src="/static/upload.svg"
                                    className="img-fluid"
                                    alt="Share"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="7" className="p-0">
                                  <select
                                    className={`${styles.module} form-control`}
                                  >
                                    <option>AGREEMENTS</option>
                                    <option>AGREEMENTS 1</option>
                                  </select>
                                </td>
                              </tr>
                              <tr className="table_row">
                                <td className={styles.doc_name}>
                                  Insurance Quotation
                                </td>
                                <td>
                                  <img
                                    src="/static/pdf.svg"
                                    className="img-fluid"
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
                                    className="img-fluid mr-3"
                                    alt="Bin"
                                  />
                                  <img
                                    src="/static/upload.svg"
                                    className="img-fluid"
                                    alt="Share"
                                  />
                                </td>
                              </tr>
                              <tr className="table_row">
                                <td className={styles.doc_name}>
                                  Container No. List
                                </td>
                                <td>
                                  <img
                                    src="/static/pdf.svg"
                                    className="img-fluid"
                                    alt="Pdf"
                                  />
                                </td>
                                <td className={styles.doc_row}>
                                  28-02-2022,5:30 PM
                                </td>
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
                                    className="img-fluid mr-3"
                                    alt="Bin"
                                  />
                                  <img
                                    src="/static/upload.svg"
                                    className="img-fluid"
                                    alt="Share"
                                  />
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
            </div>
          </div>
        </div>
      </div>
      {selectedTab == 'Financials' ||
      'Compliance' ||
      'Orders' ||
      'Credit' ||
      'DocumentsTab' ? (
        <PreviousBar />
      ) : null}
      {selectedTab == 'Profile' ? (
        <DownloadBar
          downLoadButtonName={`MCA Report`}
          isPrevious={false}
          leftButtonName={``}
          rightButtonName={`Next`}
        />
      ) : null}
      {selectedTab == 'gst' ? (
        <DownloadBar
          downLoadButtonName={`GST Report`}
          isPrevious={true}
          leftButtonName={`Previous`}
          rightButtonName={`Next`}
        />
      ) : null}
      {selectedTab == 'CAM' ? (
        <DownloadBar
          downLoadButtonName={`CAM`}
          isPrevious={true}
          leftButtonName={`Decline`}
          rightButtonName={`Approve`}
        />
      ) : null}
    </>
  )
}
export default Index

const ligitations = () => {
  return (
    <>
      <LigitationsTable val={'LigitationsTable1'} />
      <LigitationsTable val={'LigitationsTable2'} />
      <LigitationsTable val={'LigitationsTable3'} />
      <LigitationsTable val={'LigitationsTable3'} />
    </>
  )
}

const table2 = () => {
  return (
    <table
      className={`${styles.table_details} table border-color`}
      cellPadding="0"
      cellSpacing="0"
      border="1"
    >
      <thead>
        <tr>
          <th className=""></th>
          <th className="">ALERT</th>
          <th className="">SEVERITY</th>
          <th className="">SOURCE</th>
          <th className="">ID TYPE</th>
          <th className="">VALUE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.firstCell} rowSpan="3">
            Statutory Compliance
          </td>
          <td> EPF Transaction Default</td>
          <td> High</td>
          <td> EPF</td>
          <td> Establishment ID</td>
          <td> MRMRT0015543000, UKDDN0020827000</td>
        </tr>
        <tr>
          <td> IEC In Denied Entity List</td>
          <td> Medium</td>
          <td> IEC</td>
          <td> IEC</td>
          <td> 290000291</td>
        </tr>

        <tr>
          {/* <td rowspan="3">Statutory Compliance</td> */}

          <td> GST Transaction Default</td>
          <td> Medium</td>
          <td> GST</td>
          <td> GSTIN</td>
          <td>05AAGCS8808K2ZY, 09AAGCS8808K1ZR</td>
        </tr>

        <tr>
          <td className={styles.firstCell} rowSpan="6">
            Banking Defaults
          </td>
          <td> IBBI</td>
          <td>Severe</td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td> Credit Rating Suspended</td>
          <td> High</td>
          <td>ICRA</td>
          <td>Establishment ID</td>
          <td>MRMRT0015543000, UKDDN0020827000</td>
        </tr>
        <tr>
          <td> Credit Rating Withdrawn</td>
          <td>High</td>
          <td> BRICKWORK</td>
          <td> Date Of Issuance</td>
          <td>30-04-2020</td>
        </tr>
        <tr>
          <td> </td>
          <td> </td>
          <td> BRICKWORK</td>
          <td> Date Of Issuance</td>
          <td>30-04-2020</td>
        </tr>

        <tr>
          <td> </td>
          <td> </td>
          <td> BRICKWORK</td>
          <td> Date Of Issuance</td>
          <td>30-04-2020</td>
        </tr>
        <tr>
          <td> </td>
          <td> </td>
          <td> BRICKWORK</td>
          <td> Date Of Issuance</td>
          <td>30-04-2020</td>
        </tr>
      </tbody>
    </table>
  )
}
