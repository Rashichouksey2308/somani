/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Row, Col, Container, Card } from 'react-bootstrap'
import LCAmendBar from '../LCAmendBar'
import TermsheetPopUp from '../TermsheetPopUp'
import { Form } from 'react-bootstrap'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetLcModule } from 'redux/lcModule/action'

function Index() {

  const dispatch = useDispatch()

  useEffect(() => {
    let id = sessionStorage.getItem('lcPreviewId')
    dispatch(GetLcModule(`?lcModuleId=${id}`))
  }, [dispatch])
  
  const {lcModule} = useSelector((state)=>state.lc)

  console.log(lcModule.data[0].documentRequired, 'LC MODULE')

  const lcModuleData = lcModule?.data[0]

  return (  
    <>
    <div className="container-fluid p-0 border-0">
      <div className={`${styles.root_container} card shadow-none border-0 bg-transparent`}>
        <div className={styles.head_container}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} img-fluid mr-2 image_arrow`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="Arrow"
            />
            <h1 className={`${styles.heading} heading`}>Application for LC</h1>
          </div>
        </div>
        <div className={`${styles.term_container} container-fluid`}>
          <Row>
            <Col
              sm={12}
              className={`d-flex justify-content-center align-items-center`}
            >
              <h3>APPLICATION FOR LETTER OF CREDIT</h3>
            </Col>
          </Row>

          <div className="d-flex justify-content-between">
            <div>
              <div className={styles.sub_heading}>
                Order ID: <span>{lcModuleData?.order?.orderId}</span>
              </div>
              <div className={styles.sub_heading}>
                Buyer: <span>{lcModuleData?.company.companyName}</span>
              </div>
            </div>
            <div>
              <div className={`${styles.sub_heading} mt-4`}>
                Date: <span>16.02.2022</span>
              </div>
            </div>
          </div>
        </div>

        <Card className={`${styles.content}`}>
          <div className={`${styles.datatable} datatable`}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table
                  className={`${styles.table} table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                >
                  <tbody>
                    <tr className="table_row">
                      <td width="40%">
                        40A &nbsp; &nbsp;{' '}
                        <span>FORM OF DOCUMENTARY CREDIT</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.formOfDocumentaryCredit}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        40E &nbsp; &nbsp; <span>APPLICABLE RULES</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.applicableRules}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        31D &nbsp; &nbsp; <span>DATE OF EXPIRY</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.dateOfExpiry?.split('T')[0]}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        31D &nbsp; &nbsp; <span>PLACE OF EXPIRY</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.placeOfExpiry}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        51D &nbsp; &nbsp; <span>LC ISSUING BANK</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.lcIssuingBank}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        50 &nbsp; &nbsp; <span>APPLICANT</span>
                      </td>
                      <td>
                       {lcModuleData?.lcApplication?.applicant}
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        59 &nbsp; &nbsp; <span>BENEFICIARY</span>
                      </td>
                      <td>
                        {lcModuleData?.lcApplication?.beneficiary}
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        32B &nbsp; &nbsp;
                        <span>CURRENCY CODE &amp; AMOUNT</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.currecyCodeAndAmountValue}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        39A &nbsp; &nbsp;
                        <span>TOLERANCE (+/-) PERCENTAGE</span>
                      </td>
                      <td>+/- {lcModuleData?.lcApplication?.tolerancePercentage}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        41A &nbsp; &nbsp; <span>CREDIT AVAILABLE WITH BY</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.creditAvailablewith}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        42C &nbsp; &nbsp; <span>AT SIGHT</span>
                        <br/>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span>NO. OF DAYS</span>
                      </td>
                      <td>
                        {lcModuleData?.lcApplication?.atSight} <br/> {lcModuleData?.lcApplication?.numberOfDays}
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        42A &nbsp; &nbsp; <span>DRAWEE</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.drawee}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        42P &nbsp; &nbsp; <span>DEFERRED PAYMENT</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.deferredPayment}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        43P &nbsp; &nbsp; <span>PARTIAL SHIPMENT</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.partialShipment}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        43T &nbsp; &nbsp; <span>TRANSHIPMENTS</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.transhipments}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        44A &nbsp; &nbsp; <span>SHIPMENT FROM</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.shipmentForm}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        44E &nbsp; &nbsp; <span>PORT OF LOADING</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.portOfLoading}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        44F &nbsp; &nbsp; <span>PORT OF DISCHARGE</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.portOfDischarge}</td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        44C &nbsp; &nbsp; <span>LATEST DATE OF SHIPMENT</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.latestDateOfShipment?.split('T')[0]}</td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td className="border-bottom-0" width="40%">
                        45A &nbsp; &nbsp; <span>DESCRIPTION OF THE GOODS</span>
                      </td>
                      <td className="border-bottom-0">
                        {lcModuleData?.lcApplication?.DescriptionOfGoods}
                      </td>
                    </tr>
                    <tr className={`${styles.content_header}`}>
                      <td className="border-bottom-0 border-top-0 " colSpan={2}>
                        <div className={`${styles.content_header} `}>
                          46A DOCUMENT REQUIRED:
                        </div>
                      </td>
                    </tr>
                  { lcModuleData && lcModuleData?.documentRequired?.map((doc, index) => ( <tr key={index} className="table_row">
                      <td className="border-top-0" width="40%">
                        {index +=1}
                      </td>
                      <td className="border-top-0">{doc}</td>
                    </tr>))}
                    {/* <tr className="table_row">
                      <td className="border-bottom-0" width="40%">
                        2
                      </td>
                      <td className="border-bottom-0">
                        SIGNED PROVISIONAL / COMMERCIAL INVOICE IN 1 ORIGINAL
                        AND 3 COPIES, BASED ON THE DRY WEIGHT AND THE MANGANESE
                        CONTENT SHOWN ON THE CERTIFICATE OF TYPICAL ANALYSIS.
                      </td>
                    </tr> */}
                    <tr className={`${styles.content_header}`}>
                      <td className="border-bottom-0 border-top-0 " colSpan={2}>
                        <div className={`${styles.content_header} `}>
                          47A ADDITIONAL CONDITIONS:
                        </div>
                      </td>
                    </tr>
                    { lcModuleData && lcModuleData?.additionalConditions?.map((comment, index) => ( <tr key={index} className="table_row">
                      <td className="border-top-0" width="40%">
                        {index +=1}
                      </td>
                      <td className="border-top-0">{comment}</td>
                    </tr>))}
                    <tr className="table_row">
                      <td width="40%">2</td>
                      <td>
                        <div
                          className={`${styles.element_datatable} m-5 datatable `}
                        >
                          <div className={styles.table_scroll_outer}>
                            <div className={styles.table_scroll_inner}>
                              <table
                                className={`${styles.table} table`}
                                cellPadding="0"
                                cellSpacing="0"
                                border="0"
                              >
                                <thead>
                                  <tr className="table_row">
                                    <th>ELEMENTS</th>
                                    <th>TYPICAL</th>
                                    <th>GUARANTEED</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="table_row">
                                    <td>MN</td>
                                    <td>44.5 PCT</td>
                                    <td>43.0</td>
                                  </tr>
                                  <tr className="table_row">
                                    <td>SIO2</td>
                                    <td>8.0 PCT</td>
                                    <td>8.0 PCT</td>
                                  </tr>
                                  <tr className="table_row">
                                    <td>AL2O3</td>
                                    <td>7.6 PCT</td>
                                    <td>8.0 PCT</td>
                                  </tr>

                                  <tr className="table_row">
                                    <td>FE</td>
                                    <td>44.5 PCT</td>
                                    <td>43.0</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        48 &nbsp; &nbsp; <span>PRESENTATION PERIOD</span>
                      </td>
                      <td>
                     {lcModuleData?.lcApplication?.presentaionPeriod}
                      </td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        49 &nbsp; &nbsp; <span>CONFIRMATION INSTRUCTIONS</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.confirmationInstructions}</td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        53A &nbsp; &nbsp; <span>REIMBURSING BANK</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.reimbursingBank}</td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        57 &nbsp; &nbsp; <span>ADVISE THROUGH BANK</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.adviceThroughBank}</td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        57A &nbsp; &nbsp;{' '}
                        <span>SECOND ADVISING BANK, IF APPLICABLE</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.secondAdvisingBank}</td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        58A &nbsp; &nbsp;{' '}
                        <span>REQUESTED CONFIRMATION PARTY</span>
                      </td>
                      <td>
                        {lcModuleData?.lcApplication?.requestedConfirmationParty}
                      </td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        21B &nbsp; &nbsp; <span>CHARGES</span>
                      </td>
                      <td>
                       {lcModuleData?.lcApplication?.charges}
                      </td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        78 &nbsp; &nbsp;{' '}
                        <span>
                          INSTRUCTIONS TO PAYING / ACCEPTING / NEGOTIATING BANK
                        </span>
                      </td>
                      <td>
                        {lcModuleData?.lcApplication?.instructionToBank}
                      </td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        72 &nbsp; &nbsp;{' '}
                        <span>SENDER TO RECEIVER INFORMATION</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.senderToReceiverInformation}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>

      <LCAmendBar barName="Application for LC" />
    </>
  )
}

export default Index
