/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from './index.module.scss'
import moment from 'moment'
import { Row, Col } from 'react-bootstrap'
import { Doughnut, Line } from 'react-chartjs-2'
import {
  Chart,
  ArcElement,
  registerables,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
} from 'chart.js'

Chart.register(
  ArcElement,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
)

function Index({ camData, companyData, addApproveRemarkArr, approveComment }) {
  console.log(camData, 'THIS IS CAM DATA')
  console.log(companyData, 'THIS IS COMPANY DATA')

  const [sanctionComments, setSanctionComments] = useState('')

  const latestBalanceData = companyData?.financial?.balanceSheet[0]

  const previousBalanceData = companyData?.financial?.balanceSheet[1]

  const latestIncomeData = companyData?.financial?.incomeStatement[0]
  const previousIncomeData = companyData?.financial?.incomeStatement[1]

  const latestYearData = companyData?.financial?.ratioAnalysis[0]
  const previousYearData = companyData?.financial?.ratioAnalysis[1]

  const openChargesLength = () => {
    const filteredData =
      camData?.company?.detailedCompanyInfo?.financial?.openCharges?.filter(
        (data) => data.dateOfSatisfactionOfChargeInFull === null,
      )

    const length = filteredData?.length

    return length
  }

  const primaryBankName = () => {
    const filteredData = camData?.company?.debtProfile?.filter(
      (data) => data.primaryBank,
    )
    const length = filteredData?.bankName

    return length
  }

  const latestAuditorData =
    camData?.company?.detailedCompanyInfo?.profile?.auditorDetail[0]
  const previousAuditorData =
    camData?.company?.detailedCompanyInfo?.profile?.auditorDetail[1]

  let tempArr = [
    { name: 'Sagar Sinha', value: '21', color: '#9675CE' },
    { name: 'Radhe Singh', value: '23', color: '#4CAF50' },
    { name: 'Arv Jay', value: '23', color: '#EA3F3F' },
  ]
  let data = {
    labels: ['Sail', 'Jindal Grou', 'SR Steel'],
    datasets: [
      {
        label: '',
        data: [25, 20, 55],

        backgroundColor: ['#4CAF50', '#EA3F3F', '#2884DE'],
      },
    ],
  }
  const options = {
    plugins: {
      title: {
        display: false,
        text: 'Doughnut Chart',
        color: 'blue',
        cutoutPercentage: 80,
        font: {
          size: 34,
        },
        padding: {
          top: 30,
          bottom: 30,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
  }

  const lineOption = {
    tension: 0.1,
    fill: true,
    elements: {
      point: {
        radius: 0,
      },
    },
  }
  let dataline = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'First dataset',
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  }
  return (
    <>
      {basicInfo(camData)}
      {supplierInfo(camData)}
      {groupExposure(camData)}
      {orderSummary(camData)}
      {creditProfile(
        camData,
        openChargesLength,
        primaryBankName,
        latestAuditorData,
        previousAuditorData,
      )}
      {directorDetails(camData)}
      {shareHolding(data, options, tempArr, camData)}
      {chargeDetails(data, options, tempArr, camData)}
      {debtProfile(data, options, tempArr, camData)}
      {operationalDetails(camData)}
      {revenuDetails()}
      {trends(dataline, lineOption)}
      {skewness(data, options, tempArr)}
      {financeDetails(
        data,
        options,
        tempArr,
        latestBalanceData,
        previousBalanceData,
        companyData,
        latestYearData,
        previousYearData,
      )}
      {compilanceStatus(companyData, camData)}
      {strengthAndWeakness(camData)}
      {sectionTerms(
        camData,
        sanctionComments,
        setSanctionComments,
        addApproveRemarkArr,
        approveComment
      )}
      {Documents()}
    </>
  )
}

export default Index

const basicInfo = (camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#basicInfo"
          aria-expanded="true"
          aria-controls="basicInfo"
        >
          <h2 className="mb-0">Basic Info</h2>
          <span>+</span>
        </div>
        <div
          id="basicInfo"
          className="collapse"
          aria-labelledby="basicInfo"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.info_wrapper}  card-body border_color`}>
            <div className={`${styles.content} mb-4`}>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading`}>Channel</span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.company?.sourceChanel}
                  </span>
                </Col>
                <Col
                  className={` col-md-offset-2 d-flex justify-content-between`}
                  md={5}
                >
                  <span className={`${styles.key} label_heading pl-5`}>
                    City
                  </span>
                  <span className={`${styles.value} `}>
                    {camData?.company?.keyAddress[0]?.city}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading`}>
                    Customer
                  </span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.company?.companyName}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading pl-5`}>
                    State
                  </span>
                  <span className={`${styles.value}`}>
                    {camData?.company?.keyAddress[0]?.state}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading`}>
                    Type of Business
                  </span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.company?.typeOfBusiness}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading pl-5`}>
                    Industry
                  </span>
                  <span className={`${styles.value}`}>
                    {camData?.company?.typeOfBusiness}
                  </span>
                </Col>
              </Row>
            </div>
            <div
              className={`${styles.content} ${styles.highlight} card_sub_header  mb-4`}
            >
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} `}>Order Value</span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.orderValue} {camData?.unitOfValue}
                  </span>
                </Col>
                <Col
                  className={` col-md-offset-2 d-flex justify-content-between`}
                  md={5}
                >
                  <span className={`${styles.key}  pl-5`}>Commodity</span>
                  <span className={`${styles.value} `}>
                    {camData?.commodity}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} `}>Quantity</span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.quantity} {camData?.unitOfQuantity}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key}  pl-5`}>Supplier</span>
                  <span className={`${styles.value}`}>
                    {camData?.supplierName}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} `}>Country of Origin</span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.countryOfOrigin}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key}  pl-5`}>
                    Transaction Period
                  </span>
                  <span className={`${styles.value}`}>
                    {camData?.transactionPeriodDays}
                  </span>
                </Col>
              </Row>
            </div>
            <div className={`${styles.content}  mb-4`}>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading`}>
                    Port of Loading
                  </span>
                  <span className={`${styles.value} pr-5`}>
                    Vishakapatnam, AP
                  </span>
                </Col>
                <Col
                  className={` col-md-offset-2 d-flex justify-content-between`}
                  md={5}
                >
                  <span className={`${styles.key} label_heading pl-5`}>
                    Port of Discharge
                  </span>
                  <span className={`${styles.value} `}>
                    {camData?.portOfDischarge}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading`}>
                    Exp. Date of Shipment
                  </span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.ExpectedDateOfShipment.split('T')[0]}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading pl-5`}>
                    ETA at Discharge port
                  </span>
                  <span className={`${styles.value}`}>
                    {
                      camData?.shipmentDetail?.ETAofDischarge?.fromDate?.split(
                        'T',
                      )[0]
                    }
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading`}>
                    Laycan from
                  </span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.shipmentDetail?.loadPort?.fromDate?.split('T')[0]}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading pl-5`}>
                    Laycan to
                  </span>
                  <span className={`${styles.value}`}>
                    {camData?.shipmentDetail?.loadPort?.toDate?.split('T')[0]}
                  </span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const supplierInfo = (camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#supplierInfo"
          aria-expanded="true"
          aria-controls="supplierInfo"
        >
          <h2 className="mb-0">Supplier Info</h2>
          <span>+</span>
        </div>
        <div
          id="supplierInfo"
          className="collapse"
          aria-labelledby="supplierInfo"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.info_wrapper}  card-body border_color`}>
            <div className={`${styles.content} mb-4`}>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading`}>
                    No. of Shipments
                  </span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.supplierCredential?.shipmentNumber}
                  </span>
                </Col>
                <Col
                  className={` col-md-offset-2 d-flex justify-content-between`}
                  md={5}
                >
                  <span className={`${styles.key} label_heading pl-5`}>
                    Port of Destination
                  </span>
                  <span className={`${styles.value} `}>
                    {camData?.supplierCredential?.portOfDestination}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading`}>
                    No. of Consignees
                  </span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.supplierCredential?.consigneesNumber}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading pl-5`}>
                    Latest Shipment date
                  </span>
                  <span className={`${styles.value}`}>
                    {
                      camData?.supplierCredential?.latestShipmentDate?.split(
                        'T',
                      )[0]
                    }
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading`}>
                    No. of HS codes
                  </span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.supplierCredential?.HSCodesNumber}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading pl-5`}>
                    Oldest shipment date
                  </span>
                  <span className={`${styles.value}`}>
                    {
                      camData?.supplierCredential?.oldestShipmentDate?.split(
                        'T',
                      )[0]
                    }
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading`}>
                    Country of Origins
                  </span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.supplierCredential?.countryOfOrigin}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading pl-5`}>
                    Commodity to total trade (24 months)
                  </span>
                  <span
                    className={`${styles.value} ${styles.danger_highlight}`}
                  >
                    {camData?.supplierCredential?.commodityOfTotalTrade} %
                  </span>
                </Col>
              </Row>
            </div>
            <div className={`${styles.remark_Wrapper}`}>
              <p className={`${styles.remark_head} label_heading`}>Remark</p>
              <p>{camData?.supplierCredential?.remarks}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const groupExposure = (camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#groupExposure"
          aria-expanded="true"
          aria-controls="groupExposure"
        >
          <h2 className="mb-0">Group Exposure Details</h2>
          <span>+</span>
        </div>
        <div
          id="groupExposure"
          className="collapse"
          aria-labelledby="groupExposure"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.info_wrapper} card-body border_color`}>
            {camData &&
              camData?.company?.groupExposureDetail?.map((exp, index) => (
                <Row key={index} className={`${styles.row}`}>
                  <Col md={4}>
                    <div className={`${styles.exposureCard}`}>
                      <Row>
                        <Col
                          sm={12}
                          className={`d-flex justify-content-start align-content-center  mb-5`}
                        >
                          <div className={`${styles.icon} `}>
                            <span
                              className={`d-flex justify-content-center align-content-center`}
                            >
                              ET
                            </span>
                          </div>

                          <span className={` ${styles.name} ml-3  `}>
                            {exp.name}
                          </span>
                        </Col>
                        <Col sm={12} className={`${styles.limit}   mb-5`}>
                          <div
                            className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                          >
                            <div className={`${styles.limit_box} `}>
                              <span className={`${styles.limit_label} `}>
                                LIMIT
                              </span>
                            </div>
                            <span>{exp.limit}</span>
                          </div>
                          <div className={`${styles.bar}`}>
                            <div className={`${styles.fill}`}></div>
                          </div>
                        </Col>
                        <Col sm={12} className={`${styles.limit}   mb-5`}>
                          <div
                            className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                          >
                            <div className={`${styles.limit_box} `}>
                              <span className={`${styles.limit_label} `}>
                                O/S BALANCE
                              </span>
                            </div>
                            <span>{exp.outstandingLimit}</span>
                          </div>
                          <div className={`${styles.bar}`}>
                            <div className={`${styles.fill}`}></div>
                          </div>
                        </Col>
                        <Col sm={12} className={`${styles.limit}   mb-5`}>
                          <div
                            className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                          >
                            <div className={`${styles.limit_box} `}>
                              <span className={`${styles.limit_label} `}>
                                CONDUCT
                              </span>
                            </div>
                          </div>
                          <p>{exp.accountConduct}</p>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  {/* <Col md={4}>
                <div className={`${styles.exposureCard}`}>
                  <Row>
                    <Col
                      sm={12}
                      className={`d-flex justify-content-start align-content-center  mb-5`}
                    >
                      <div className={`${styles.icon} `}>
                        <span
                          className={`d-flex justify-content-center align-content-center`}
                        >
                          ET
                        </span>
                      </div>

                      <span className={` ${styles.name} ml-3  `}>
                        Emerging Traders
                      </span>
                    </Col>
                    <Col sm={12} className={`${styles.limit}   mb-5`}>
                      <div
                        className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                      >
                        <div className={`${styles.limit_box} `}>
                          <span className={`${styles.limit_label} `}>
                            LIMIT
                          </span>
                        </div>
                        <span>1,900.00</span>
                      </div>
                      <div className={`${styles.bar}`}>
                        <div className={`${styles.fill}`}></div>
                      </div>
                    </Col>
                    <Col sm={12} className={`${styles.limit}   mb-5`}>
                      <div
                        className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                      >
                        <div className={`${styles.limit_box} `}>
                          <span className={`${styles.limit_label} `}>
                            O/S BALANCE
                          </span>
                        </div>
                        <span>1,900.00</span>
                      </div>
                      <div className={`${styles.bar}`}>
                        <div className={`${styles.fill}`}></div>
                      </div>
                    </Col>
                    <Col sm={12} className={`${styles.limit}   mb-5`}>
                      <div
                        className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                      >
                        <div className={`${styles.limit_box} `}>
                          <span className={`${styles.limit_label} `}>
                            CONDUCT
                          </span>
                        </div>
                      </div>
                      <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={4}>
                <div className={`${styles.exposureCard}`}>
                  <Row>
                    <Col
                      sm={12}
                      className={`d-flex justify-content-start align-content-center  mb-5`}
                    >
                      <div className={`${styles.icon} `}>
                        <span
                          className={`d-flex justify-content-center align-content-center`}
                        >
                          ET
                        </span>
                      </div>

                      <span className={` ${styles.name} ml-3  `}>
                        Emerging Traders
                      </span>
                    </Col>
                    <Col sm={12} className={`${styles.limit}   mb-5`}>
                      <div
                        className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                      >
                        <div className={`${styles.limit_box} `}>
                          <span className={`${styles.limit_label} `}>
                            LIMIT
                          </span>
                        </div>
                        <span>1,900.00</span>
                      </div>
                      <div className={`${styles.bar}`}>
                        <div className={`${styles.fill}`}></div>
                      </div>
                    </Col>
                    <Col sm={12} className={`${styles.limit}   mb-5`}>
                      <div
                        className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                      >
                        <div className={`${styles.limit_box} `}>
                          <span className={`${styles.limit_label} `}>
                            O/S BALANCE
                          </span>
                        </div>
                        <span>1,900.00</span>
                      </div>
                      <div className={`${styles.bar}`}>
                        <div className={`${styles.fill}`}></div>
                      </div>
                    </Col>
                    <Col sm={12} className={`${styles.limit}   mb-5`}>
                      <div
                        className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                      >
                        <div className={`${styles.limit_box} `}>
                          <span className={`${styles.limit_label} `}>
                            CONDUCT
                          </span>
                        </div>
                      </div>
                      <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col> */}
                </Row>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
const orderSummary = (camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#orderSummary"
          aria-expanded="true"
          aria-controls="orderSummary"
        >
          <h2 className="mb-0">Order Summary - Last 6 Orders</h2>
          <span>+</span>
        </div>
        <div
          id="orderSummary"
          className="collapse"
          aria-labelledby="orderSummary"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.order_wrapper} border_color`}>
            <table
              className={`${styles.table} table  border_color`}
              cellPadding="0"
              cellSpacing="0"
            >
              <tr>
                <th>CUSTOMER NAME</th>
                <th>ORDER NO</th>
                <th>ORDER VALUE</th>
                <th>COMMODITY</th>
                <th>STATUS</th>

                <th>DAYS DUE</th>
              </tr>
              <tr>
                <td>JUL 2022 - JUN 2023</td>

                <td colSpan={5}>
                  <div className={`${styles.dashedLine}`}></div>
                </td>
              </tr>
              <tr>
                <td
                  className={`d-flex justify-content-start align-content-center`}
                >
                  <div className={`${styles.icon} `}>
                    <span
                      className={`d-flex justify-content-center align-content-center`}
                    >
                      ET
                    </span>
                  </div>

                  <span className={` ${styles.name} ml-3  `}>
                    {camData?.company?.companyName}
                  </span>
                </td>
                <td>{camData?.orderId}</td>
                <td>{camData?.orderValue}</td>
                <td>{camData?.commodity}</td>
                <td>In Process</td>

                <td>12</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
const creditProfile = (
  camData,
  openChargesLength,
  primaryBankName,
  latestAuditorData,
  previousAuditorData,
) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#creditProfile"
          aria-expanded="true"
          aria-controls="creditProfile"
        >
          <h2 className="mb-0">Operational Details</h2>
          <span>+</span>
        </div>
        <div
          id="creditProfile"
          className="collapse"
          aria-labelledby="creditProfile"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.info_wrapper} card-body border_color`}>
            <div className={`${styles.content} mb-4`}>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading`}>
                    Main Banker
                  </span>
                  <span className={`${styles.value} pr-5`}>
                    {primaryBankName()}
                  </span>
                </Col>
                <Col
                  className={` col-md-offset-2 d-flex justify-content-between`}
                  md={5}
                >
                  <span className={`${styles.key} label_heading pl-5`}>
                    External Credit rating
                  </span>
                  <span className={`${styles.value} `}>A3+</span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading`}>
                    Open Charges
                  </span>
                  <span className={`${styles.value} pr-5`}>
                    {openChargesLength()}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading pl-5`}>
                    Credit Rating Agency
                  </span>
                  <span className={`${styles.value}`}>American First</span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading`}>
                    Name of Auditor
                  </span>
                  <span className={`${styles.value} pr-5`}>
                    {
                      camData?.company?.detailedCompanyInfo?.profile
                        ?.auditorDetail[0]?.nameOfAuditor
                    }
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label_heading pl-5`}>
                    Change in Auditor
                  </span>
                  <span className={`${styles.value} `}>
                    {latestAuditorData?.nameOfAuditor ===
                    previousAuditorData?.nameOfAuditor
                      ? ' NO'
                      : 'Yes'}
                  </span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const directorDetails = (camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#directorDetails"
          aria-expanded="true"
          aria-controls="directorDetails"
        >
          <h2 className="mb-0">Director Details</h2>
          <span>+</span>
        </div>
        <div
          id="directorDetails"
          className="collapse"
          aria-labelledby="directorDetails"
          data-parent="#profileAccordion"
          
        >
          <div className={`${styles.order_wrapper} card-body`}>
            <table
              className={`${styles.table} table  border_color`}
              cellPadding="0"
              cellSpacing="0"
            >
              <tr>
                <th>NAME</th>
                <th>PAN</th>
                <th>DIN NUMBER</th>
                <th>DATE OF APPOINTMENT</th>
                <th>% SHAREHOLDING</th>
              </tr>

              {camData?.company?.detailedCompanyInfo?.profile?.directorDetail?.map(
                (director, index) => (
                  <tr key={index}>
                    <td
                      className={`d-flex justify-content-start align-content-center`}
                    >
                      <div className={`${styles.icon} `}>
                        <span
                          className={`d-flex justify-content-center align-content-center`}
                        >
                          AJ
                        </span>
                      </div>

                      <span className={` ${styles.name} ml-3  `}>
                        {director?.name}
                      </span>
                    </td>
                    <td>{director?.pan[0]}</td>
                    <td>{director.din}</td>
                    <td>{director.tenureStartDate}</td>
                    <td>30%</td>
                  </tr>
                ),
              )}

            </table>
          </div>
        </div>
      </div>
    </>
  )
}
const shareHolding = (data, options, tempArr, camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#shareHolding"
          aria-expanded="true"
          aria-controls="shareHolding"
        >
          <h2 className="mb-0">Shareholding Details</h2>
          <span>+</span>
        </div>
        <div
          id="shareHolding"
          className="collapse"
          aria-labelledby="shareHolding"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.order_wrapper} card-body`}>
            <Row>
              <Col className={`${styles.leftCol} border_color`} md={5}>
                <div className={styles.chart}>
                  <Doughnut data={data} options={options} />
                  <div className={styles.total_value}>
                    <span>Sagar Sinha</span>
                    <span className={styles.highlight}>83.80%</span>
                  </div>
                </div>
                <div className={`${styles.name} `}>
                  {tempArr.map((val, index) => {
                    return (
                      <div
                        key={index}
                        className={`${styles.name_wrapper} d-flex justify-content-center align-item-center`}
                      >
                        <div
                          className={styles.round}
                          style={{ backgroundColor: `${val.color}` }}
                        ></div>
                        <span className={` heading ml-2`}>{val.name}</span>
                      </div>
                    )
                  })}
                </div>
              </Col>
              <Col md={7} className={`pl-0`}>
                <table
                  className={`${styles.table} table  border_color `}
                  cellPadding="0"
                  cellSpacing="0"
                >
                  <tr>
                    <th>NAME</th>
                    <th>NO. OF SHARES</th>
                    <th>% SHARE</th>
                    <th>DIRECTOR</th>
                  </tr>

                  {camData &&
                    camData?.company?.detailedCompanyInfo?.profile?.shareholdingPattern?.map(
                      (share, index) => (
                        <tr key={index}>
                          <td
                            className={`d-flex justify-content-start align-content-center`}
                          >
                            <div className={`${styles.icon} `}>
                              <span
                                className={`d-flex justify-content-center align-content-center`}
                              >
                                AJ
                              </span>
                            </div>

                            <span className={` ${styles.name} ml-3  `}>
                              {share?.fullName}
                            </span>
                          </td>
                          <td>{share?.numberOfShares}</td>
                          <td>{share?.percentageShareHolding}</td>
                          <td>{share?.director ? 'Yes' : 'No'}</td>
                        </tr>
                      ),
                    )}
                  {/* <tr>
                    <td
                      className={`d-flex justify-content-start align-content-center`}
                    >
                      <div className={`${styles.icon} `}>
                        <span
                          className={`d-flex justify-content-center align-content-center`}
                        >
                          SS
                        </span>
                      </div>

                      <span className={` ${styles.name} ml-3  `}>
                        Sagar Sinha
                      </span>
                    </td>
                    <td>120</td>
                    <td>80% </td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td
                      className={`d-flex justify-content-start align-content-center`}
                    >
                      <div className={`${styles.icon} `}>
                        <span
                          className={`d-flex justify-content-center align-content-center`}
                        >
                          RS
                        </span>
                      </div>

                      <span className={` ${styles.name} ml-3  `}>
                        Radhe Singh
                      </span>
                    </td>
                    <td>120</td>
                    <td>80% </td>
                    <td>Yes</td>
                  </tr> */}
                </table>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
const chargeDetails = (data, options, tempArr, camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#chargeDetails"
          aria-expanded="true"
          aria-controls="chargeDetails"
        >
          <h2 className="mb-0">Open Bank Charge Details</h2>
          <span>+</span>
        </div>
        <div
          id="chargeDetails"
          className="collapse"
          aria-labelledby="chargeDetails"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.order_wrapper} card-body`}>
            <Row>
              <Col className={`${styles.leftCol} border_color`} md={5}>
                <div className={styles.chart}>
                  <Doughnut data={data} options={options} />
                  <div className={styles.total_value}>
                    <span>Sagar Sinha</span>
                    <span className={styles.highlight}>83.80%</span>
                  </div>
                </div>
                <div className={`${styles.name} `}>
                  {tempArr.map((val, index) => {
                    return (
                      <div
                        key={index}
                        className={`${styles.name_wrapper} d-flex justify-content-center align-item-center`}
                      >
                        <div
                          className={styles.round}
                          style={{ backgroundColor: `${val.color}` }}
                        ></div>
                        <span className={` heading ml-2`}>{val.name}</span>
                      </div>
                    )
                  })}
                </div>
              </Col>
              <Col md={7} className={`pl-0`}>
                <table
                  className={`${styles.table} table  border_color `}
                  cellPadding="0"
                  cellSpacing="0"
                >
                  <tr>
                    <th>BANK NAME</th>
                    <th>CHARGE AMOUNT</th>
                    <th>DATE OF CREATION</th>
                  </tr>

                  {camData &&
                    camData?.company?.detailedCompanyInfo?.financial?.openCharges.map(
                      (charge, index) => (
                        <tr key={index}>
                          <td
                            className={`d-flex justify-content-start align-content-center`}
                          >
                            <div className={`${styles.icon} `}>
                              <span
                                className={`d-flex justify-content-center align-content-center`}
                              >
                                AJ
                              </span>
                            </div>

                            <span className={` ${styles.name} ml-3  `}>
                              {charge?.nameOfChargeHolder1}
                            </span>
                          </td>
                          <td>{charge?.finalAmountSecured}</td>

                          <td>{charge?.dateOfCreationOfCharge}</td>
                        </tr>
                      ),
                    )}
                  {/* <tr>
                    <td
                      className={`d-flex justify-content-start align-content-center`}
                    >
                      <div className={`${styles.icon} `}>
                        <span
                          className={`d-flex justify-content-center align-content-center`}
                        >
                          SS
                        </span>
                      </div>

                      <span className={` ${styles.name} ml-3  `}>
                        Sagar Sinha
                      </span>
                    </td>
                    <td>1,900.00</td>

                    <td>22-02-2020</td>
                  </tr>
                  <tr>
                    <td
                      className={`d-flex justify-content-start align-content-center`}
                    >
                      <div className={`${styles.icon} `}>
                        <span
                          className={`d-flex justify-content-center align-content-center`}
                        >
                          RS
                        </span>
                      </div>

                      <span className={` ${styles.name} ml-3  `}>
                        Radhe Singh
                      </span>
                    </td>
                    <td>1,900.00</td>

                    <td>22-02-2020</td>
                  </tr> */}
                </table>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
const debtProfile = (data, options, tempArr, camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#debtProfile"
          aria-expanded="true"
          aria-controls="debtProfile"
        >
          <h2 className="mb-0">Debt Profile</h2>
          <span>+</span>
        </div>
        <div
          id="debtProfile"
          className="collapse"
          aria-labelledby="debtProfile"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.order_wrapper} card-body`}>
            <Row>
              <Col className={`${styles.leftCol} border_color`} md={5}>
                <div
                  className={`${styles.label} d-flex justify-content-between align-content-center  `}
                >
                  <div className={`${styles.limit_box} `}>
                    <span className={`${styles.limit_label} `}>LIMIT</span>
                  </div>
                  <span>1,900.00</span>
                </div>
                <div className={`${styles.bar}`}>
                  <div className={`${styles.fill}`}></div>
                </div>

                <div className={`mt-4`}>
                  <div
                    className={`${styles.label} d-flex justify-content-between align-content-center  `}
                  >
                    <div className={`${styles.limit_box} `}>
                      <span className={`${styles.limit_label} `}>LIMIT</span>
                    </div>
                    <span>1,900.00</span>
                  </div>
                  <div className={`${styles.bar} ${styles.small_bar}`}>
                    <span style={{ color: '#EA3F3F' }}>dis</span>
                    <div
                      style={{ backgroundColor: '#EA3F3F' }}
                      className={`${styles.fill}`}
                    ></div>
                  </div>
                </div>
                <div className={`mt-4`}>
                  <div
                    className={`${styles.label} d-flex justify-content-between align-content-center  `}
                  >
                    <div className={`${styles.limit_box} `}>
                      <span className={`${styles.limit_label} `}>LIMIT</span>
                    </div>
                    <span>1,900.00</span>
                  </div>
                  <div className={`${styles.bar} ${styles.small_bar}`}>
                    <span style={{ color: '#43C34D' }}>Cash Credit</span>
                    <div
                      style={{ backgroundColor: '#43C34D' }}
                      className={`${styles.fill}`}
                    ></div>
                  </div>
                </div>
                <div className={`mt-4`}>
                  <div
                    className={`${styles.label} d-flex justify-content-between align-content-center  `}
                  >
                    <div className={`${styles.limit_box} `}>
                      <span className={`${styles.limit_label} `}>LIMIT</span>
                    </div>
                    <span>1,900.00</span>
                  </div>
                  <div className={`${styles.bar} ${styles.small_bar}`}>
                    <span style={{ color: '#FF9D00' }}>Cash Credit</span>
                    <div
                      style={{ backgroundColor: '#FF9D00' }}
                      className={`${styles.fill}`}
                    ></div>
                  </div>
                </div>
              </Col>
              <Col md={7} className={`pl-0`}>
                <table
                  className={`${styles.table} table  border_color `}
                  cellPadding="0"
                  cellSpacing="0"
                >
                  <tr>
                    <th>BANK NAME</th>
                    <th>LIMIT TYPE</th>
                    <th>LIMITS</th>
                    <th>CONDUCT</th>
                  </tr>

                  {camData &&
                    camData?.company?.debtProfile?.map((debt, index) => (
                      <tr key={index}>
                        <td>{debt?.bankName}</td>
                        <td>
                          <select
                            className={`${styles.value} form-control`}
                            defaultValue={debt?.limitType}
                            disabled={true}
                          />
                        </td>

                        <td>{debt?.limit}</td>
                        <td className={`${styles.conduct} danger`}>
                          {debt?.conduct}
                        </td>
                      </tr>
                    ))}
                  {/* <tr>
                    <td>ICICI Bank</td>
                    <td>
                      <select
                        className={`${styles.value} form-control`}
                        disabled={true}
                      />
                    </td>

                    <td>₹ 800.00</td>
                    <td className={`${styles.conduct} good`}>good</td>
                  </tr>
                  <tr>
                    <td>ICICI Bank</td>
                    <td>
                      <select
                        className={`${styles.value} form-control`}
                        disabled={true}
                      />
                    </td>

                    <td>₹ 800.00</td>
                    <td className={`${styles.conduct}`}>Poor</td>
                  </tr> */}
                </table>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
const operationalDetails = (camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#operationalDetails"
          aria-expanded="true"
          aria-controls="operationalDetails"
        >
          <h2 className="mb-0">Credit Profile</h2>
          <span>+</span>
        </div>
        <div
          id="operationalDetails"
          className="collapse"
          aria-labelledby="operationalDetails"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.info_wrapper} card-body border_color`}>
            <div className={`${styles.content} mb-4`}>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key}`}>
                    Plant Production Capacity
                  </span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.productSummary?.monthlyProductionCapacity}
                  </span>
                </Col>
                <Col
                  className={` col-md-offset-2 d-flex justify-content-between`}
                  md={5}
                >
                  <span className={`${styles.key} pl-5`}>
                    Stock in Transit - Commodity
                  </span>
                  <span className={`${styles.value} `}>
                    {camData?.productSummary?.averageStockInTransit}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key}`}>Capacity Utilization</span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.productSummary?.capacityUtilization}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} pl-5`}>
                    Stock Coverage of Commodity
                  </span>
                  <span className={`${styles.value}`}>
                    {camData?.productSummary?.averageStockOfCommodity}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key}`}>
                    Available Stock of Commodity
                  </span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.productSummary?.availableStock}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} pl-5`}>
                    Avg Monthly Electricity Bill
                  </span>
                  <span className={`${styles.value} `}>
                    {camData?.productSummary?.AvgMonthlyElectricityBill}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} pl-5`}>
                    Daily Consumption of Commodity
                  </span>
                  <span className={`${styles.value} `}>
                    {camData?.productSummary?.dailyConsumptionOfCommodity}
                  </span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const revenuDetails = () => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#revenuDetails"
          aria-expanded="true"
          aria-controls="revenuDetails"
        >
          <h2 className="mb-0">Revenue Details</h2>
          <span>+</span>
        </div>
        <div
          id="revenuDetails"
          className="collapse"
          aria-labelledby="revenuDetails"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.order_wrapper} card-body`}>
            <table
              className={`${styles.table} table  border_color`}
              cellPadding="0"
              cellSpacing="0"
            >
              <tr>
                <th></th>
                <th>TREND</th>
                <th>LATEST YEAR</th>
                <th>PREVIOUS YEAR</th>
                <th>GROWTH</th>
              </tr>

              <tr>
                <td>Gross Revenue</td>
                <td>
                  <img
                    src="/static/arrow-up-green.svg"
                    alt="Arrow Red"
                    className="img-fluid"
                  />
                </td>
                <td>11,900.00 </td>
                <td>1,900.00</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>Related Party Sales</td>
                <td>
                  <img
                    src="/static/arrow-down-red.svg"
                    alt="Arrow Red"
                    className="img-fluid"
                  />
                </td>
                <td>11,900.00 </td>
                <td>1,900.00</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>Intra Organization Sales</td>
                <td>
                  <img
                    src="/static/arrow-down-red.svg"
                    alt="Arrow Red"
                    className="img-fluid"
                  />
                </td>
                <td>11,900.00 </td>
                <td>1,900.00</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>B2B Sales</td>
                <td>
                  <img
                    src="/static/arrow-down-red.svg"
                    alt="Arrow Red"
                    className="img-fluid"
                  />
                </td>
                <td>11,900.00 </td>
                <td>1,900.00</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>B2C Sales</td>
                <td>
                  <img
                    src="/static/arrow-down-red.svg"
                    alt="Arrow Red"
                    className="img-fluid"
                  />
                </td>
                <td>11,900.00 </td>
                <td>1,900.00</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>Export Sales</td>
                <td>
                  <img
                    src="/static/arrow-down-red.svg"
                    alt="Arrow Red"
                    className="img-fluid"
                  />
                </td>
                <td>11,900.00 </td>
                <td>1,900.00</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>Total Customers</td>
                <td>
                  <img
                    src="/static/arrow-down-red.svg"
                    alt="Arrow Red"
                    className="img-fluid"
                  />
                </td>
                <td>11,900.00 </td>
                <td>1,900.00</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>Total Invoices</td>
                <td>
                  <img
                    src="/static/arrow-down-red.svg"
                    alt="Arrow Red"
                    className="img-fluid"
                  />
                </td>
                <td>11,900.00 </td>
                <td>1,900.00</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>Gross Margin</td>
                <td>
                  <img
                    src="/static/arrow-down-red.svg"
                    alt="Arrow Red"
                    className="img-fluid"
                  />
                </td>
                <td>11,900.00 </td>
                <td>1,900.00</td>
                <td>40%</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
const financeDetails = (
  latestBalanceData,
  previousBalanceData,
  data,
  options,
  tempArr,
  companyData,
  latestYearData,
  previousYearData,
) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#financeDetails"
          aria-expanded="true"
          aria-controls="financeDetails"
        >
          <h2 className="mb-0">Financial Summary</h2>
          <span>+</span>
        </div>
        <div
          id="financeDetails"
          className="collapse"
          aria-labelledby="financeDetails"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.order_wrapper2} card-body`}>
            <Row>
              <Col className={`${styles.leftCol} p-0 border_color`} md={5}>
                <table
                  className={`${styles.table} table  border_color `}
                  cellPadding="0"
                  cellSpacing="0"
                >
                  <tr>
                    <th>Liabilities</th>
                    <th>
                      {moment(companyData?.financial?.balanceSheet[0]?.date)
                        .format('MMM-YY')
                        .toUpperCase()}
                    </th>
                    <th>
                      {moment(companyData?.financial?.balanceSheet[1]?.date)
                        .format('MMM-YY')
                        .toUpperCase()}
                    </th>
                  </tr>
                  <tr>
                    <td>Net Worth</td>
                    <td>
                      {
                        companyData?.financial?.balanceSheet[0]
                          ?.equityLiabilities?.totalEquity
                      }
                    </td>
                    <td>
                      {
                        companyData?.financial?.balanceSheet[1]
                          ?.equityLiabilities?.totalEquity
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Total Borrowings</td>
                    <td>
                      {companyData?.financial?.balanceSheet[0]
                        ?.equityLiabilities?.borrowingsCurrent +
                        companyData?.financial?.balanceSheet[0]
                          ?.equityLiabilities?.borrowingsNonCurrent}
                    </td>
                    <td>
                      {companyData?.financial?.balanceSheet[1]
                        ?.equityLiabilities?.borrowingsCurrent +
                        companyData?.financial?.balanceSheet[1]
                          ?.equityLiabilities?.borrowingsNonCurrent}
                    </td>
                  </tr>
                  <tr>
                    <td>Creditors</td>
                    <td>
                      {companyData?.financial?.balanceSheet[0]
                        ?.equityLiabilities?.tradePay +
                        companyData?.financial?.balanceSheet[0]
                          ?.equityLiabilities?.tradePayablesNoncurrent}
                    </td>
                    <td>
                      {companyData?.financial?.balanceSheet[1]
                        ?.equityLiabilities?.tradePay +
                        companyData?.financial?.balanceSheet[1]
                          ?.equityLiabilities?.tradePayablesNoncurrent}
                    </td>
                  </tr>
                  <tr>
                    <td>Other Current Liabilities</td>
                    <td>
                      {
                        companyData?.financial?.balanceSheet[0]
                          ?.equityLiabilities?.otherCurrentLiabilities
                      }
                    </td>
                    <td>
                      {
                        companyData?.financial?.balanceSheet[1]
                          ?.equityLiabilities?.otherCurrentLiabilities
                      }
                    </td>
                  </tr>

                  <tr>
                    <th colSpan={3} className={`${styles.Border}`}>
                      Assets
                    </th>
                  </tr>

                  <tr>
                    <td>Working Capital Turnover ratio</td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[0]
                          ?.workingCapitalTurnover
                      }
                    </td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[1]
                          ?.workingCapitalTurnover
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Debtors period</td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[0]
                          ?.daysOfSalesOutstanding
                      }
                    </td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[1]
                          ?.daysOfSalesOutstanding
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Creditors Period</td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[0]
                          ?.daysOfPayablesOutstanding
                      }
                    </td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[1]
                          ?.daysOfPayablesOutstanding
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Inventory Period</td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[0]
                          ?.daysOfInventoryOutstanding
                      }
                    </td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[1]
                          ?.daysOfInventoryOutstanding
                      }
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={3} className={`${styles.Border}`}>
                      P/L
                    </th>
                  </tr>

                  <tr>
                    <td>Interest Coverage</td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[0]
                          ?.interestCoverage
                      }
                    </td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[1]
                          ?.interestCoverage
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Current Ratio</td>
                    <td>
                      {companyData?.financial?.ratioAnalysis[0]?.currentRatio}
                    </td>
                    <td>
                      {companyData?.financial?.ratioAnalysis[1]?.currentRatio}
                    </td>
                  </tr>
                  <tr>
                    <td>Debt Equity</td>
                    <td>
                      {companyData?.financial?.ratioAnalysis[0]?.debtEquity}
                    </td>
                    <td>
                      {companyData?.financial?.ratioAnalysis[1]?.debtEquity}
                    </td>
                  </tr>
                </table>
              </Col>
              <Col md={7} className={`pl-0`}>
                <table
                  className={`${styles.table} table  border_color  `}
                  cellPadding="0"
                  cellSpacing="0"
                >
                  <tr>
                    <th>Ratios</th>
                    <th>
                      {' '}
                      {moment(
                        companyData?.financial?.ratioAnalysis[0]
                          ?.financialEndDate,
                      )
                        .format('MMM-YY')
                        .toUpperCase()}
                    </th>
                    <th>
                      {' '}
                      {moment(
                        companyData?.financial?.ratioAnalysis[1]
                          ?.financialEndDate,
                      )
                        .format('MMM-YY')
                        .toUpperCase()}
                    </th>
                  </tr>
                  <tr>
                    <td>Cash from Operations</td>
                    <td>
                      {
                        companyData?.financial?.cashFlowStatement[0]
                          ?.cashFlowsFromUsedInOperatingActivities
                          ?.cashFlowsFromUsedInOperatingActivities
                      }
                    </td>
                    <td>
                      {
                        companyData?.financial?.cashFlowStatement[1]
                          ?.cashFlowsFromUsedInOperatingActivities
                          ?.cashFlowsFromUsedInOperatingActivities
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Cash from Financing</td>
                    <td>
                      {
                        companyData?.financial?.cashFlowStatement[0]
                          ?.cashFlowsFromUsedInFinancingActivities
                          ?.cashFlowsFromUsedInFinancingActivities
                      }
                    </td>
                    <td>
                      {
                        companyData?.financial?.cashFlowStatement[1]
                          ?.cashFlowsFromUsedInFinancingActivities
                          ?.cashFlowsFromUsedInFinancingActivities
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Cash from Investing</td>
                    <td>
                      {
                        companyData?.financial?.cashFlowStatement[0]
                          ?.cashFlowsFromUsedInInvestingActivities
                          ?.cashFlowsFromUsedInInvestingActivities
                      }
                    </td>
                    <td>
                      {
                        companyData?.financial?.cashFlowStatement[1]
                          ?.cashFlowsFromUsedInInvestingActivities
                          ?.cashFlowsFromUsedInInvestingActivities
                      }
                    </td>
                  </tr>

                  <tr>
                    <td className={`${styles.no_Border}`}></td>
                    <td className={`${styles.no_Border}`}></td>
                    <td className={`${styles.no_Border}`}></td>
                  </tr>

                  <tr>
                    <td>Working Capital Turnover ratio</td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[0]
                          ?.workingCapitalTurnover
                      }
                    </td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[1]
                          ?.workingCapitalTurnover
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Debtors period</td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[0]
                          ?.daysOfSalesOutstanding
                      }
                    </td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[1]
                          ?.daysOfSalesOutstanding
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Creditors Period</td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[0]
                          ?.daysOfPayablesOutstanding
                      }
                    </td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[1]
                          ?.daysOfPayablesOutstanding
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Inventory Period</td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[0]
                          ?.daysOfInventoryOutstanding
                      }
                    </td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[1]
                          ?.daysOfInventoryOutstanding
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className={`${styles.no_Border}`}></td>
                    <td className={`${styles.no_Border}`}></td>
                    <td className={`${styles.no_Border}`}></td>
                  </tr>

                  <tr>
                    <td>Interest Coverage</td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[0]
                          ?.interestCoverage
                      }
                    </td>
                    <td>
                      {
                        companyData?.financial?.ratioAnalysis[1]
                          ?.interestCoverage
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Current Ratio</td>
                    <td>
                      {companyData?.financial?.ratioAnalysis[0]?.currentRatio}
                    </td>
                    <td>
                      {companyData?.financial?.ratioAnalysis[1]?.currentRatio}
                    </td>
                  </tr>
                  <tr>
                    <td>Debt Equity</td>
                    <td>
                      {companyData?.financial?.ratioAnalysis[0]?.debtEquity}
                    </td>
                    <td>
                      {companyData?.financial?.ratioAnalysis[1]?.debtEquity}
                    </td>
                  </tr>
                </table>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
const compilanceStatus = (companyData, camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#compilanceStatus"
          aria-expanded="true"
          aria-controls="compilanceStatus"
        >
          <h2 className="mb-0">Compliance Status</h2>
          <span>+</span>
        </div>
        <div
          id="compilanceStatus"
          className="collapse"
          aria-labelledby="compilanceStatus"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.info_wrapper} card-body border_color`}>
            <div className={`${styles.content} mb-4`}>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key}`}>GST Return Filing</span>
                  <span className={`${styles.value} pr-5`}>Text</span>
                </Col>
                <Col
                  className={` col-md-offset-2 d-flex justify-content-between`}
                  md={5}
                >
                  <span className={`${styles.key} pl-5`}>NCLT</span>
                  <span className={`${styles.value} `}>
                    {companyData?.compliance.other?.nclt ? 'YES' : 'NO'}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key}`}>EPF Status</span>
                  <span className={`${styles.value} pr-5`}>
                    {companyData?.compliance.other?.epfStatus ? 'YES' : 'NO'}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} pl-5`}>BIFR</span>
                  <span className={`${styles.value}`}>
                    {companyData?.compliance.other?.bifr ? 'YES' : 'NO'}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key}`}>Litigation Status</span>
                  <span className={`${styles.value} pr-5`}>
                    {camData?.company?.litigationStatus}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} pl-5`}>
                    Defaulter Company
                  </span>
                  <span className={`${styles.value}`}>
                    {companyData?.compliance.other?.defaulterCompany
                      ? 'YES'
                      : 'NO'}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key}`}>
                    Last Balance Sheet Dates
                  </span>
                  <span className={`${styles.value} pr-5`}>14-05-2022</span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} pl-5`}>Active Directors</span>
                  <span className={`${styles.value}`}>4,320</span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const strengthAndWeakness = (camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#strengthAndWeakness"
          aria-expanded="true"
          aria-controls="strengthAndWeakness"
        >
          <h2 className="mb-0">Strength & Weakness</h2>
          <span>+</span>
        </div>
        <div
          id="strengthAndWeakness"
          className="collapse"
          aria-labelledby="strengthAndWeakness"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.order_wrapper} card-body`}>
            <Row>
              <Col className={`${styles.leftCol} border_color`} md={6}>
                <div
                  className={`d-flex justify-content-start align-content-center`}
                >
                  <div className={`${styles.icon} ${styles.green_highlight}`}>
                    <span
                      className={`d-flex justify-content-center align-content-center`}
                    >
                      <img src="./static/check.svg"></img>
                    </span>
                  </div>
                  <span className={`${styles.text} good ml-2`}>Strength</span>
                </div>
                <div>
                  <ul>
                    {camData &&
                      camData?.company?.recommendation?.strengths?.map(
                        (comment, index) => (
                          <li key={index} className={`mt-4`}>
                            {comment}
                          </li>
                        ),
                      )}
                    {/* <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li>
                    <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li>
                    <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li>
                    <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li> */}
                  </ul>
                </div>
              </Col>
              <Col className={`${styles.leftCol} border_color`} md={6}>
                <div
                  className={`d-flex justify-content-start align-content-center`}
                >
                  <div className={`${styles.icon} ${styles.red_highlight} `}>
                    <span
                      className={`d-flex justify-content-center align-content-center`}
                    >
                      <img src="./static/close-b.svg"></img>
                    </span>
                  </div>
                  <span className={`${styles.text} danger ml-2`}>Weakness</span>
                </div>
                <div>
                  <ul>
                    {camData &&
                      camData?.company?.recommendation?.weakness?.map(
                        (comment, index) => {
                          return (
                            <li key={index} className={`mt-4`}>
                              {comment}
                            </li>
                          )
                        },
                      )}
                    {/* <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li>
                    <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li>
                    <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li>
                    <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li> */}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
const sectionTerms = (
  
  camData,
  sanctionComments,
  setSanctionComments,
  addApproveRemarkArr,
  approveComment
  
) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#sectionTerms"
          aria-expanded="true"
          aria-controls="sectionTerms"
        >
          <h2 className="mb-0">Sanction Terms</h2>
           <div className={`${styles.subHeadContainer} d-flex ml-5`}>
            <span className={` ${styles.complaintExtra} d-flex align-items-center justify-content-between`}><span className={`${styles.lightCompliance} mr-2`}>Total Limit:</span>1,900.00</span>
            <span className={`${styles.complaintExtra}  d-flex align-items-center justify-content-between`}><span className={`${styles.lightCompliance} mr-2`}>Utilised Limit:</span>1,900.00</span>
            <span className={`${styles.complaintExtra}  d-flex align-items-center justify-content-between`}><span className={`${styles.lightCompliance} mr-2`}>Available Limit:</span>1,900.00</span>
          </div>
          <span>+</span>
        </div>
        <div
          id="sectionTerms"
          className="collapse"
          aria-labelledby="sectionTerms"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.terms_wrapper} card-body border_color`}>
            <table
              className={`${styles.sectionTable} table   `}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <tr>
                <th></th>
                <th>PREVIOUS LIMIT</th>
                <th>APPLIED VALUE</th>
                <th>DERIVED VALUE</th>
                <th>SUGGESTED VALUE</th>
                <th>REVISED</th>
                <th>APPROVED VALUE</th>
              </tr>
              <tr>
                <td>Limit Value</td>
                <td>1,200.00</td>
                <td>-</td>
                <td>1,200.00</td>
                <td>1,900.00</td>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td><input className={`${styles.text}`} type="text" placeholder="1,900.00"></input></td>
              </tr>
              <tr>
                <td>Order Value</td>
                <td>1,200.00</td>
                <td>-</td>
                <td>1,200.00</td>
                <td>1,900.00</td>
                <td>
                  <input type="checkbox"></input>
                </td>
              <td><input className={`${styles.text}`} type="text" placeholder="1,900.00"></input></td>
              </tr>
            </table>
            <div>
              <div
                className={`${styles.heading} heading  card_sub_header d-flex  align-items-center justify-content-start`}
              >
                Sanction Conditions
              </div>
              <ul className="mt-3 mb-3">
                {camData &&
                  camData?.company?.recommendation?.sanctionTerms?.map(
                    (condition, index) => <li key={index}>{condition}</li>,
                  )}
                {/* <li>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam sadipscing elitr, sed diam
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam sadipscing elitr, sed diam
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam sadipscing elitr, sed diam
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam sadipscing elitr, sed diam
                </li> */}
              </ul>
            </div>
            <div>
              <div className={`${styles.approve}`}>
                {approveComment &&
                  approveComment?.map((approve, index) => (
                    <div key={index} className={`${styles.remarks}`}>
                      <span>{approve}</span>
                    </div>
                  ))}

                <div className={`mb-3 ${styles.heading} heading `}>Approval Remarks</div>
                <textarea
                  className="form-control input"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) => setSanctionComments(e.target.value)}
                ></textarea>
                <button
                  className={`${styles.button} mt-3 d-flex  align-items-center justify-content-center `}
                  onClick={() =>
                    sanctionComments.length > 0 &&
                    addApproveRemarkArr(sanctionComments)
                  }
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const Documents = () => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#Documents"
          aria-expanded="true"
          aria-controls="Documents"
        >
          <h2 className="mb-0">Documents Available</h2>
          <span>+</span>
        </div>
        <div
          id="Documents"
          className="collapse"
          aria-labelledby="Documents"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.terms_wrapper} card-body border_color`}>
            <Row className={`${styles.row}`}>
              <Col md={3} className={`mb-3`}>
                <div
                  className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                >
                  <img src="./static/icon file copy.svg"></img>
                  <div className={`${styles.view} ml-4`}>
                    <span>Insurance Certificate</span>
                    <span className={`${styles.highlight} mt-2`}>VIEW</span>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div
                  className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                >
                  <img src="./static/icon file copy.svg"></img>
                  <div className={`${styles.view} ml-4`}>
                    <span>Insurance Certificate</span>
                    <span className={`${styles.highlight} mt-2`}>VIEW</span>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div
                  className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                >
                  <img src="./static/icon file copy.svg"></img>
                  <div className={`${styles.view} ml-4`}>
                    <span>Insurance Certificate</span>
                    <span className={`${styles.highlight} mt-2`}>VIEW</span>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div
                  className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                >
                  <img src="./static/icon file copy.svg"></img>
                  <div className={`${styles.view} ml-4`}>
                    <span>Insurance Certificate</span>
                    <span className={`${styles.highlight} mt-2`}>VIEW</span>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div
                  className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                >
                  <img src="./static/icon file copy.svg"></img>
                  <div className={`${styles.view} ml-4`}>
                    <span>Insurance Certificate</span>
                    <span className={`${styles.highlight} mt-2`}>VIEW</span>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div
                  className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                >
                  <img src="./static/icon file copy.svg"></img>
                  <div className={`${styles.view} ml-4`}>
                    <span>Insurance Certificate</span>
                    <span className={`${styles.highlight} mt-2`}>VIEW</span>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div
                  className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                >
                  <img src="./static/icon file copy.svg"></img>
                  <div className={`${styles.view} ml-4`}>
                    <span>Insurance Certificate</span>
                    <span className={`${styles.highlight} mt-2`}>VIEW</span>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div
                  className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                >
                  <img src="./static/icon file copy.svg"></img>
                  <div className={`${styles.view} ml-4`}>
                    <span>Insurance Certificate</span>
                    <span className={`${styles.highlight} mt-2`}>VIEW</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
const trends = (dataline, lineOption) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#trends"
          aria-expanded="true"
          aria-controls="trends"
        >
          <h2 className="mb-0">Trends</h2>
          <span className=" d-flex align-items-center justify-content-between">
            <span
              className={` d-flex align-items-center justify-content-between`}
            >
              <span
                className={`${styles.light} ${styles.unit_label} accordion_Text`}
              >
                Display By:
              </span>
              <select
                className={`${styles.select} accordion_body form-select`}
                aria-label="Default select example"
              >
                <option selected value="1">
                  Quarterly
                </option>
              </select>
            </span>
            +
          </span>
        </div>
        <div
          id="trends"
          className="collapse"
          aria-labelledby="trends"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.graph_wrapper} card-body`}>
            <Row className={`m-0`}>
              <Col className={`${styles.leftCol} p-0 border_color`} md={6}>
                <div className={`${styles.head_wrapper} card_sub_header`}>
                  <span className={`${styles.head}`}>Gross Revenue</span>
                  <span className={`${styles.child} ml-2`}>: 1,900.00</span>
                </div>
                <div className={`${styles.chart}`}>
                  <Line data={dataline} options={lineOption} />
                </div>
                <div
                  className={`${styles.name_wrapper} d-flex justify-content-center align-item-center`}
                >
                  <div
                    className={styles.round}
                    style={{ backgroundColor: `red` }}
                  ></div>
                  <span className={` heading ml-2 mb-4`}>Gross revenue</span>
                </div>
              </Col>
              <Col md={6} className={`${styles.rightCol} pl-0 border_color`}>
                <div className={`${styles.head_wrapper}  card_sub_header`}>
                  <span className={`${styles.head}`}>Gross Purchases</span>
                  <span className={`${styles.child} ml-2`}>: 1,900.00</span>
                </div>
                <div className={`${styles.chart}`}>
                  <Line data={dataline} options={lineOption} />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
const skewness = (data, options, tempArr) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#skewness"
          aria-expanded="true"
          aria-controls="skewness"
        >
          <h2 className="mb-0">Skewness</h2>
          <span className=" d-flex align-items-center justify-content-between">
            <span
              className={` d-flex align-items-center justify-content-between`}
            >
              <span
                className={`${styles.light}  ${styles.unit_label} accordion_Text`}
              >
                Display By:
              </span>
              <select
                className={`${styles.select} accordion_body form-select`}
                aria-label="Default select example"
              >
                <option selected value="1">
                  Quarterly
                </option>
              </select>
            </span>
            +
          </span>
        </div>
        <div
          id="skewness"
          className="collapse"
          aria-labelledby="skewness"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.graph_wrapper} card-body`}>
            <Row className={`m-0`}>
              <Col className={`${styles.leftCol} p-0 border_color`} md={6}>
                <div className={`${styles.head_wrapper} card_sub_header`}>
                  <span className={`${styles.head}`}>Gross Revenue</span>
                  <span className={`${styles.child} ml-2`}>: 1,900.00</span>
                </div>
                <Row
                  className={`d-flex  d-flex align-items-center justify-content-evenly`}
                >
                  <Col md={6} className={`${styles.col}`}>
                    <div className={styles.chart2}>
                      <Doughnut data={data} options={options} />
                      <div className={styles.total_value}>
                        <span>Sagar Sinha</span>
                        <span className={styles.highlight}>83.80%</span>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={`${styles.name} `}>
                      {tempArr.map((val, index) => {
                        return (
                          <div
                            key={index}
                            className={`${styles.name_wrapper} d-flex justify-content-start align-item-start`}
                          >
                            <div
                              className={styles.round}
                              style={{ backgroundColor: `${val.color}` }}
                            ></div>
                            <div
                              className={`d-flex justify-content-between align-item-start w-100`}
                            >
                              <span className={` heading ml-2`}>
                                {val.name}
                              </span>
                              <span className={` heading mr-4`}>51.23%</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className={`${styles.rightCol} pl-0 border_color`}>
                <div className={`${styles.head_wrapper}`}>
                  <span className={`${styles.head}`}>Gross Purchases</span>
                  <span className={`${styles.child} ml-2`}>: 1,900.00</span>
                </div>
                <div className={`${styles.chart}`}>
                  {/* <Line data={dataline} options={lineOption} /> */}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
