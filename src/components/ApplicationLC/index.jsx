import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Row, Col, Container, Card } from 'react-bootstrap'
import LCAmendBar from '../LCAmendBar'
import TermsheetPopUp from '../TermsheetPopUp'
import { Form } from 'react-bootstrap'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

function Index() {
  return (
    <>
      <div className={`${styles.root_container} card`}>
        <div className={styles.head_container}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} img-fluid mr-3`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="Arrow"
            />
            <h1 className={`${styles.heading} heading`}>Application for LC</h1>
          </div>
        </div>
        <div className={`${styles.term_container} mb-3 mt-3 container-fluid`}>
          <Row className={`h-50`}>
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
                Order ID: <span>2FCH6589</span>
              </div>
              <div className={styles.sub_heading}>
                Buyer: <span>M/s Vishnu Chemicals Limited</span>
              </div>
            </div>
            <div>
              <div className={`${styles.sub_heading} mt-4`}>
                Date: <span>16.02.2022</span>
              </div>
            </div>
          </div>
        </div>

        <Card className={`${styles.content} mb-5 mt-4`}>
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
                      <td>IRREVOCABLE</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        40E &nbsp; &nbsp; <span>APPLICABLE RULES</span>
                      </td>
                      <td>UCP LATEST VERSION</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        31D &nbsp; &nbsp; <span>DATE OF EXPIRY</span>
                      </td>
                      <td>22.02.2022</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        31D &nbsp; &nbsp; <span>PLACE OF EXPIRY</span>
                      </td>
                      <td>GUJARAT PORT, INDIA</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        51D &nbsp; &nbsp; <span>LC ISSUING BANK</span>
                      </td>
                      <td>FIRST CLASS EUROPEAN BANK</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        50 &nbsp; &nbsp; <span>APPLICANT</span>
                      </td>
                      <td>
                        INDO INTERNATIONAL TRADING FZCO JAFZA VIEW 18, LOB
                        180504, JEBEL ALI, DUBAI UAE
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        59 &nbsp; &nbsp; <span>BENEFICIARY</span>
                      </td>
                      <td>
                        ERAMET MARKETING SERVICES 10 BOULEVARD DE GRENELLE CS
                        63205 - 75015 PARIS - FRANCE
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        32B &nbsp; &nbsp;
                        <span>CURRENCY CODE &amp; AMOUNT</span>
                      </td>
                      <td>USD 1,00,000.00</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        39A &nbsp; &nbsp;
                        <span>TOLERANCE (+/-) PERCENTAGE</span>
                      </td>
                      <td>+/-10PCT</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        41A &nbsp; &nbsp; <span>CREDIT AVAILABLE WITH BY</span>
                      </td>
                      <td>BNP PARIBAS PARIBAS - BNPAFRPPXXX NEGOTIATION</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        42 &nbsp; &nbsp; <span>AT SIGHT</span>
                        <br></br>
                        <span>NO. OF DAYS</span>
                      </td>
                      <td>
                        DOCUMENTARY CREDIT <br></br> 60
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        42A &nbsp; &nbsp; <span>DRAWEE</span>
                      </td>
                      <td>ISSUING BANK</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        42P &nbsp; &nbsp; <span>DEFERRED PAYMENT</span>
                      </td>
                      <td>BNP PARIBAS PARIBAS – BNPAFRPPXXX</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        43P &nbsp; &nbsp; <span>PARTIAL SHIPMENT</span>
                      </td>
                      <td>PROHIBITED</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        43T &nbsp; &nbsp; <span>TRANSHIPMENTS</span>
                      </td>
                      <td>PROHIBITED</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        44A &nbsp; &nbsp; <span>SHIPMENT FROM</span>
                      </td>
                      <td>OWENDO</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        44E &nbsp; &nbsp; <span>PORT OF LOADING</span>
                      </td>
                      <td>OWENDO</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        44F &nbsp; &nbsp; <span>PORT OF DISCHARGE</span>
                      </td>
                      <td>VISAKHAPATNAM PORT, INDIA</td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        44C &nbsp; &nbsp; <span>LATEST DATE OF SHIPMENT</span>
                      </td>
                      <td>22.02.2022</td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td className="border-bottom-0" width="40%">
                        45A &nbsp; &nbsp; <span>DESCRIPTION OF THE GOODS</span>
                      </td>
                      <td className="border-bottom-0">
                        5000 WET METRIC TONS (WMT) +/- 10PCT OF MMD:
                        MANGANESEORE OF GABON ORIGIN (44,50PCT MN TYPICAL - 5PCT
                        MOISTURE), CIFFO VISAKHAPATNAM PORT PACKING IN BULK.
                      </td>
                    </tr>
                    <tr className={`${styles.content_header}`}>
                      <td className="border-bottom-0 border-top-0 " colSpan={2}>
                        <div className={`${styles.content_header} `}>
                          46A DOCUMENT REQUIRED:
                        </div>
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td className="border-top-0" width="40%">
                        1
                      </td>
                      <td className="border-top-0">AT SIGHT</td>
                    </tr>
                    <tr className="table_row">
                      <td className="border-bottom-0" width="40%">
                        2
                      </td>
                      <td className="border-bottom-0">
                        SIGNED PROVISIONAL / COMMERCIAL INVOICE IN 1 ORIGINAL
                        AND 3 COPIES, BASED ON THE DRY WEIGHT AND THE MANGANESE
                        CONTENT SHOWN ON THE CERTIFICATE OF TYPICAL ANALYSIS.
                      </td>
                    </tr>
                    <tr className={`${styles.content_header}`}>
                      <td className="border-bottom-0 border-top-0 " colSpan={2}>
                        <div className={`${styles.content_header} `}>
                          47A ADDITIONAL CONDITIONS:
                        </div>
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td className="border-top-0" width="40%">
                        1
                      </td>
                      <td className="border-top-0">
                        SIGNED PROVISIONAL / COMMERCIAL INVOICE IN 1 ORIGINAL
                        AND 3 COPIES, BASED ON THE DRY WEIGHT AND THE MANGANESE
                        CONTENT SHOWN ON THE CERTIFICATE OF TYPICAL ANALYSIS.
                      </td>
                    </tr>
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
                        DOCUMENTS TO BE PRESENTED WITHIN 21 DAYS AFTER SHIPMENT
                        DATE BUT WITHIN VALIDITY OF THE LC.
                      </td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        49 &nbsp; &nbsp; <span>CONFIRMATION INSTRUCTIONS</span>
                      </td>
                      <td>MAY ADD</td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        53A &nbsp; &nbsp; <span>REIMBURSING BANK</span>
                      </td>
                      <td>BNP PARIBAS PARIBAS – BNPAFRPPXXX</td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        57 &nbsp; &nbsp; <span>ADVISE THROUGH BANK</span>
                      </td>
                      <td>BNP PARIBAS PARIBAS – BNPAFRPPXXX</td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        57A &nbsp; &nbsp;{' '}
                        <span>SECOND ADVISING BANK, IF APPLICABLE</span>
                      </td>
                      <td>LOREM IPSUM</td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        58A &nbsp; &nbsp;{' '}
                        <span>REQUESTED CONFIRMATION PARTY</span>
                      </td>
                      <td>
                        ERAMET MARKETING SERVICES 10 BOULEVARD DE GRENELLE CS
                        63205 - 75015 PARIS - FRANCE
                      </td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        21B &nbsp; &nbsp; <span>CHARGES</span>
                      </td>
                      <td>
                        ALL THE CHARGES OUTSIDE LC ISSUING BANK ARE FOR THE
                        BENEFICIARY’S ACCOUNT.
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
                        THE DOCUMENTS ARE TO BE COURIERED TO ........... (LC
                        ISSUING BANK ADDRESS)..............
                        <br></br>
                        UPON RECEIPT AT OUR COUNTERS OF A STRICTLY COMPLYING
                        PRESENTATION, WE UNDERTAKE TO COVER YOU WITHIN 5 BANKING
                        DAYS AS PER YOUR INSTRUCTIONS
                      </td>
                    </tr>{' '}
                    <tr className="table_row">
                      <td width="40%">
                        72 &nbsp; &nbsp;{' '}
                        <span>SENDER TO RECEIVER INFORMATION</span>
                      </td>
                      <td>LOREM IPSUM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <LCAmendBar barName="Application for LC" />
    </>
  )
}

export default Index
