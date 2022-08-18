import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Row, Col, Container, Card } from 'react-bootstrap'
import LCAmendBar from '../LCAmendBar'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import _get from 'lodash/get'
import { GetLcModule } from 'redux/lcModule/action'
import moment from 'moment'

function Index() {

  const dispatch = useDispatch()

  const { lcModule } = useSelector((state) => state.lc)

  let lcModuleData = _get(lcModule,  'data[0]', [])

  console.log(lcModuleData, 'THIS IS LC MODULE DATA')

  useEffect(() => {
    let id = sessionStorage.getItem('lcAmmend')
    dispatch(GetLcModule(`?lcModuleId=${id}`))
  }, [dispatch])

  return (
    <>
      <div
        className={`${styles.root_container} card border-0 bg-transparent shadow-none tabHeader`}
      >
        <div className={styles.head_container}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} image_arrow img-fluid mr-2`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="Arrow"
            />
            <h1 className={`${styles.heading} heading`}>Application for LC</h1>
          </div>
        </div>
        <div className={`${styles.term_container} previewCard container-fluid`}>
          <Row className={`h-50`}>
            <Col
              sm={12}
              className={`d-flex justify-content-center align-items-center`}
            >
              <h3>AMENDED LETTER OF CREDIT</h3>
            </Col>
          </Row>

          <div className="d-flex justify-content-between mt-n2">
            <div>
              <div className={styles.sub_heading}>
                Order ID: <span>{lcModuleData?.order?.orderId}</span>
              </div>
              <div className={styles.sub_heading}>
                Buyer: <span>{lcModuleData?.company?.companyName}</span>
              </div>
            </div>
            <div className="text-right">
              <div className={styles.sub_heading}>
                Documentary Credit Number: <span>{lcModuleData?.lcApplication?.documentaryCreditNumber}</span>
              </div>
              <div className={styles.sub_heading}>
                Date: <span>{moment(lcModuleData?.createdAt.slice(0, 10)).format('DD.MM.yyy')}</span>
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
                      <td>{moment(lcModuleData?.lcApplication?.dateOfExpiry?.slice(0, 10)).format('DD.MM.yyy')}</td>
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
