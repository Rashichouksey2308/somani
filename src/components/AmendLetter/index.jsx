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
      <div className={`${styles.root_container} bg-transparent shadow-none tabHeader`}>
        <div className={styles.head_container}>
          {/* <div className={styles.head_header}>
            <img
              className={`${styles.arrow} image_arrow img-fluid mr-2`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="Arrow"
            />
            <h1 className={`${styles.heading} heading`}>LC Amendment</h1>
          </div> */}
        </div>
        <div className={`${styles.term_container} container-fluid`}>
          <Row className={`h-50`}>
            <Col
              sm={12}
              className={`d-flex justify-content-center align-items-center`}
            >
              <h3>AMENDED LETTER OF CREDIT</h3>
            </Col>
          </Row>

          <div className="d-flex justify-content-between">
            <div>
              <div className={styles.sub_heading}>
                Buyer: <span>M/s Vishnu Chemicals Limited</span>
              </div>
              <div className={styles.sub_heading}>
                Order ID: <span>2FCH6589</span>
              </div>
            </div>
            <div className='text-right'>
              <div className={styles.sub_heading}>
                Documentary Credit Number: <span>ABSD123456</span>
              </div>
              <div className={styles.sub_heading}>
                Date: <span>16.02.2022</span>
              </div>
            </div>
          </div>
        </div>

        <Card className={`${styles.content} bg-transparent border-0`}>
          <div className={`${styles.datatable} datatable`}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table
                  className={`${styles.table} mb-0 table`}
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <LCAmendBar barName="LC Amendment Draft" />
    </>
  )
}

export default Index
