/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { Row, Col } from 'react-bootstrap'
import PaginateBar from '../../../src/components/Paginatebar'
import _get from 'lodash/get'
import { useDispatch, useSelector } from 'react-redux'
import { GettingAllInsurance } from '../../../src/redux/insurance/action'
import moment from 'moment'
import {
  setPageName,
  setDynamicName,
  setDynamicOrder,
} from '../../../src/redux/userData/action'
import Router from 'next/router'


function Index() {

  const dispatch = useDispatch()

  useEffect(() => {
    let id = sessionStorage.getItem('letterId')
    dispatch(GettingAllInsurance(`?insuranceId=${id}`))
  }, [dispatch])

  const { insuranceResponse } = useSelector((state) => state.insurance)

  let insuranceData = _get(insuranceResponse, 'data[0]', {})
  
  dispatch(setPageName('insurance Request Letter'))
  dispatch(setDynamicName(_get(insuranceData, 'company.companyName', 'Company Name')))
  dispatch(setDynamicOrder(_get(insuranceData, 'order.orderId', 'Order Id')))

  console.log(insuranceData, 'insuranceData')
  return (
    <>
      <div className="container-fluid p-0">
        <div
          className={`${styles.card} tabHeader border-0 shadow-none bg-transparent card2`}
        >
          <div 
           onClick={() => Router.push('/insurance/form')}
          className={`${styles.head_header} align-items-center`}>
            <img
              className={`${styles.arrow} img-fluid image_arrow mr-2`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow"
            />
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
                  {/* {moment(insuranceData?.createdAt?.split('T')[0]).format('DD.MM.yyyy')} */}
                  {moment(new Date()).format(
                    'DD.MM.yyyy',
                  )}
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
                    {_get(insuranceData, 'order.vessel.vessels[0].vesselInformation[0].name', '')}
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
                    {_get(insuranceData, 'order.vessel.vessels[0].vesselInformation[0].IMONumber', '')}
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
                    {_get(insuranceData, 'order.vessel.vessels[0].vesselInformation[0].yearOfBuilt', '')?.slice(0, 4)}

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
                    INR {insuranceData?.quotationRequest?.sumInsured} Crores (Including 110%)
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
                  {_get(insuranceData, 'order.vessel.vessels[0].transitDetails.countryOfOrigin', '')}

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
                    BL Weight {insuranceData?.order?.quantity} MTs. (+/-00%)
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
                  {_get(insuranceData, 'order.vessel.vessels[0].transitDetails.portOfLoading', '')}
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
                  {_get(insuranceData, 'order.vessel.vessels[0].transitDetails.portOfDischarge', '')}
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
                    {moment(insuranceData?.quotationRequest?.laycanFrom?.split('T')[0]).format('DD MMM')} - {moment(insuranceData?.quotationRequest?.laycanTo?.split('T')[0]).format('DD MMM, YYYY')}
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
                  {moment(insuranceData?.quotationRequest?.expectedTimeOfDispatch?.split('T')[0]).format('DD MMMM , YYYY')}
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
                    {moment(insuranceData?.quotationRequest?.estimatedTimeOfArrival?.split('T')[0]).format('DD MMMM , YYYY')}
                  </Col>
                </Row>
                <Row className={`${styles.row}`}>
                  <Col
                    md={3}
                    sm={3}
                    xs={4}
                    className={`${styles.content_head} label_heading"`}
                  >
                    Marine Insurance
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    All Risks Including ICC-A, War, SRCC, Theft, Act of God etc.
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
                    {insuranceData?.company?.companyName}
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
                    {insuranceData?.quotationRequest?.lossPayee }
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
      <PaginateBar rightButtonTitle='Share' leftButtonTitle='Request Letter' />
    </>
  )
}

export default Index
