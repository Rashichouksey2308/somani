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
import moment from 'moment'
import { addPrefixOrSuffix } from 'utils/helper'

function Index() {
  const dispatch = useDispatch()

  useEffect(() => {
    let id = sessionStorage.getItem('lcPreviewId')
    dispatch(GetLcModule(`?lcModuleId=${id}`))
  }, [dispatch])

  const { lcModule } = useSelector((state) => state.lc)

  //console.log(lcModule.data[0].documentRequired, 'LC MODULE')

  const lcModuleData = lcModule?.data[0]

  return (
    <>
      <div className="container-fluid p-0 border-0">
        <div
          className={`${styles.root_container} card shadow-none border-0 bg-transparent`}
        >
          {/* <div className={styles.head_container}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} img-fluid mr-2 image_arrow`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="Arrow"
            />
            <h1 className={`${styles.heading} heading`}>Application for LC</h1>
          </div>
        </div> */}
          <div
            className={`${styles.term_container} previewCard container-fluid`}
          >
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
                <div className={`${styles.sub_heading} term_para`}>
                  Order ID: <span className='label1'>{lcModuleData?.order?.orderId}</span>
                </div>
                <div className={`${styles.sub_heading} term_para`}>
                  Buyer: <span className='label1'>{lcModuleData?.company.companyName}</span>
                </div>
              </div>
              <div>
                <div className={`${styles.sub_heading} term_para mt-4`}>
                  Date:  <span className='label1'>16.02.2022</span>
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
                          <span className={`${styles.serial_no} term_para`}>40A {' '}</span>
                          <span>FORM OF DOCUMENTARY CREDIT</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.formOfDocumentaryCredit?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>40E </span>
                          <span>APPLICABLE RULES</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.applicableRules?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>31D </span>
                          <span>DATE OF EXPIRY</span>
                        </td>
                        <td className='term_para'>
                          {moment(
                            lcModuleData?.lcApplication?.dateOfExpiry?.split(
                              'T',
                            )[0],
                          ).format('DD-MM-YYYY')}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>31D </span>
                          <span>PLACE OF EXPIRY</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.placeOfExpiry?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>51D </span>
                          <span>LC ISSUING BANK</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.lcIssuingBank?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>50 </span>
                          <span>APPLICANT</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.applicant?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>59 </span>
                          <span>BENEFICIARY</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.beneficiary?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>32B </span>
                          <span>CURRENCY CODE &amp; AMOUNT</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.currecyCodeAndAmountValue?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>39A </span>
                          <span>TOLERANCE (+/-) PERCENTAGE</span>
                        </td>
                        <td className='term_para'>
                          +/-{' '}
                          {addPrefixOrSuffix(lcModuleData?.lcApplication?.tolerancePercentage?.toUpperCase(),
                                    '%',
                                    '',)}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>41A </span>
                          <span>CREDIT AVAILABLE WITH<wbr />BY</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.creditAvailablewith?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>42C </span>
                          <span>AT SIGHT<br />NO. OF DAYS</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.atSight?.toUpperCase()}{' '}
                          <br /> {lcModuleData?.lcApplication?.numberOfDays}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>42A </span>
                          <span>DRAWEE</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.drawee?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>42P </span>
                          <span>DEFERRED PAYMENT</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.deferredPayment?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>43P </span>
                          <span>PARTIAL SHIPMENT</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.partialShipment?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>43T </span>
                          <span>TRANSHIPMENTS</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.transhipments?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>44A </span>
                          <span>SHIPMENT FROM</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.shipmentForm?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>44E </span>
                          <span>PORT OF LOADING</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.portOfLoading?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>44F </span>
                          <span>PORT OF DISCHARGE</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.portOfDischarge?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>44C </span>
                          <span>LATEST DATE OF SHIPMENT</span>
                        </td>
                        <td className='term_para'>
                          {moment(
                            lcModuleData?.lcApplication?.latestDateOfShipment?.split(
                              'T',
                            )[0],
                          ).format('DD-MM-YYYY')}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td className="border-bottom-0" width="40%">
                          <span className={`${styles.serial_no} term_para`}>45A {' '}</span>
                          <span>DESCRIPTION OF THE GOODS</span>
                        </td>
                        <td className="border-bottom-0 term_para">
                          {lcModuleData?.lcApplication?.DescriptionOfGoods?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className={`${styles.content_header} background2`}>
                        <td
                          className="border-bottom-0 border-top-0 "
                          colSpan={2}
                        >
                          <div
                            className={`${styles.content_header} background2`}
                          >
                            46A DOCUMENT REQUIRED:
                          </div>
                        </td>
                      </tr>
                      {lcModuleData &&
                        lcModuleData?.documentRequired?.map((doc, index) => (
                          <tr key={index} className="table_row">
                            <td className="border-top-0" width="40%">
                              {(index += 1)}
                            </td>
                            <td className="border-top-0">{doc}</td>
                          </tr>
                        ))}
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
                      <tr className={`${styles.content_header} background2`}>
                        <td
                          className="border-bottom-0 border-top-0 "
                          colSpan={2}
                        >
                          <div
                            className={`${styles.content_header} background2 `}
                          >
                            47A ADDITIONAL CONDITIONS:
                          </div>
                        </td>
                      </tr>
                      {lcModuleData &&
                        lcModuleData?.additionalConditions?.map(
                          (comment, index) => (
                            <tr key={index} className="table_row">
                              <td className="border-top-0" width="40%">
                                {(index += 1)}
                              </td>
                              <td className="border-top-0">{comment}</td>
                            </tr>
                          ),
                        )}
                      <tr className="table_row">
                        <td width="40%">2</td>
                        <td>
                          <div
                            className={`${styles.element_datatable} m-2 datatable `}
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
                          <span className={`${styles.serial_no} term_para`}>48 </span>
                          <span>PRESENTATION PERIOD</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.presentaionPeriod?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>49 {' '}</span>
                          <span>CONFIRMATION INSTRUCTIONS</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.confirmationInstructions?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>53A </span>
                          <span>REIMBURSING BANK</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.reimbursingBank?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>57 </span>
                          <span>ADVISE THROUGH BANK</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.adviceThroughBank?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>57A {' '}</span>
                          <span>SECOND ADVISING BANK, IF APPLICABLE</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.secondAdvisingBank?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>58A {' '}</span>
                          <span>REQUESTED CONFIRMATION PARTY</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.requestedConfirmationParty?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>71B </span>
                          <span>CHARGES</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.charges?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>78 {' '}</span>
                          <span>INSTRUCTIONS TO PAYING / ACCEPTING /<br />NEGOTIATING BANK</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.instructionToBank?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>72 {' '}</span>
                          <span>SENDER TO RECEIVER INFORMATION</span>
                        </td>
                        <td className='term_para'>
                          {lcModuleData?.lcApplication?.senderToReceiverInformation?.toUpperCase()}
                        </td>
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
