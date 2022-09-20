/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Row, Col, Form } from 'react-bootstrap'
import PaginateBar from '../../../src/components/Paginatebar'
import jsPDF from 'jspdf'
import ReactDOMServer from 'react-dom/server'
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
import Modal from 'react-bootstrap/Modal'
import { convertValue } from '../../../src/utils/helper'

function Index() {
  const dispatch = useDispatch()

  useEffect(() => {
    let id = sessionStorage.getItem('letterId')
    dispatch(GettingAllInsurance(`?insuranceId=${id}`))
  }, [dispatch])

  const { insuranceResponse } = useSelector((state) => state.insurance)

  let insuranceData = _get(insuranceResponse, 'data[0]', {})
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  const handlePopup = () => {
    setShow(true)
  }
  const [emailAdd, setEmailAdd] = useState([
    {
      emailID: '',
    },
  ])
  const addMoreRows = () => {
    setEmailAdd([
      ...emailAdd,
      {
        emailID: '',
      },
    ])
  }
  dispatch(setPageName('insurance Request Letter'))
  dispatch(
    setDynamicName(_get(insuranceData, 'company.companyName', 'Company Name')),
  )
  dispatch(setDynamicOrder(_get(insuranceData, 'order.orderId', 'Order Id')))

  console.log(insuranceData, 'insuranceData')

  const exportPDF = () => {
    console.log("hwhhwhhw,aas")
    const doc = new jsPDF('p', 'pt', [1500, 1630])
    doc.html(
      ReactDOMServer.renderToString(
        <table width="1500px" cellPadding="0" cellSpacing="0" border="0">
          <tr>
            <td valign="top" align="left">
              <table
                width="100%"
                bgColor="#FFFFFF"
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  borderRadius: '6px',
                  boxShadow: '0 3px 6px #CAD0E2',
                  marginBottom: '26px',
                  border: '2px solid rgba(202, 214, 230, 0.3)',
                }}
                cellPadding="0"
                cellSpacing="0"
                border="0"
              >
                <tr>
                  <td valign="top" align="left">
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <tr>
                        <td colSpan={2}>
                          <span
                            style={{
                              fontSize: '30px',
                              color: '#111111',
                              lineHeight: '37px',
                              fontWeight: 'bold',
                              textAlign: 'center',
                              padding: '49px 35px 44px',
                              textDecoration: 'underline',
                              display: 'block',
                            }}
                          >
                            Request for Insurance Quotation
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '0 35px 7px',
                              marginBottom: '0',
                              float: 'left'
                            }}
                          >
                            <span
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: 'normal',
                              }}
                            >
                              Order ID:{' '}
                            </span>
                           {insuranceData?.order?.orderId}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '0 35px 7px',
                              marginBottom: '0',
                              float: 'left'
                            }}
                          >
                            <span
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: 'normal',
                              }}
                            >
                              Date:{' '}
                            </span>
                            {moment(new Date()).format('DD.MM.yyyy')}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '0 35px 57px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: 'normal',
                              }}
                            >
                              Type of Insurance:{' '}
                            </span>
                            {insuranceData?.quotationRequest?.insuranceType}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: 'bold',
                              padding: '0 35px 49px',
                              marginBottom: '0',
                            }}
                          >
                            Dear Sir/Madam,
                            <br />
                            <br />
                            As discussed, please note the detail of Cargo as
                            under:
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          width="25%"
                          align="left"
                          style={{
                            borderTop: '2px solid rgba(202, 214, 230, 0.3)',
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Vessel
                          </p>
                        </td>
                        <td
                          width="75%"
                          align="left"
                          style={{
                            borderTop: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 15px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                            {_get(
                      insuranceData,
                      'order.vessel.vessels[0].vesselInformation[0].name',
                      '',
                    )}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            IMO Number
                          </p>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 35px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                           {_get(
                      insuranceData,
                      'order.vessel.vessels[0].vesselInformation[0].IMONumber',
                      '',
                    )}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Year of Built
                          </p>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 35px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                            {_get(
                      insuranceData,
                      'order.vessel.vessels[0].vesselInformation[0].yearOfBuilt',
                      '',
                    )?.slice(0, 4)}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Sum Insured
                          </p>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 35px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                            INR { Number(convertValue(insuranceData?.quotationRequest?.sumInsured))?.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })} Crores
                    (Including 110%)
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Material
                          </p>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 35px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                             {insuranceData?.order?.commodity}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Origin
                          </p>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 35px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                             {_get(
                      insuranceData,
                      'order.vessel.vessels[0].transitDetails.countryOfOrigin',
                      '',
                    )}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Quantity
                          </p>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 35px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                            BL Weight {insuranceData?.order?.quantity} MTs. (+/-00%)
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Port of Loading
                          </p>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 35px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                             {_get(
                      insuranceData,
                      'order.vessel.vessels[0].transitDetails.portOfLoading',
                      '',
                    )}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Port of Discharge
                          </p>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 35px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                             {_get(
                      insuranceData,
                      'order.vessel.vessels[0].transitDetails.portOfDischarge',
                      '',
                    )}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Laycan
                          </p>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 35px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                             {moment(
                      insuranceData?.quotationRequest?.laycanFrom
                    ).format('DD MMM')}{' '}
                    -{' '}
                    {moment(
                      insuranceData?.quotationRequest?.laycanTo
                    ).format('DD MMM, YYYY')}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            ETD
                          </p>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 35px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                           {moment(
                      insuranceData?.quotationRequest?.expectedTimeOfDispatch
                    ).format('DD MMMM , YYYY')}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            ETA
                          </p>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 35px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                            {moment(
                      insuranceData?.quotationRequest?.expectedTimeOfArrival
                    ).format('DD MMMM , YYYY')}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Marine Insurance
                          </p>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 35px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                             All Risks Including ICC-A, War, SRCC, Theft, Act of God etc.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Name of Insured
                          </p>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 35px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                            {insuranceData?.company?.companyName}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Loss Payee
                          </p>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 35px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                            {insuranceData?.quotationRequest?.lossPayee}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Additional Information
                          </p>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '16px 35px 16px 24px',
                              marginBottom: '0',
                            }}
                          >
                            {insuranceData?.quotationRequest?.additionalInfo}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: 'bold',
                              padding: '43px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Thanks &amp; Best Regards
                            <br />
                            <br />
                            Vipin Rajput
                            <br />
                            Manager Accounts
                            <br />
                            Indo German International Private Limited
                            <br />
                            8-B, Sagar, 6-Tilak Marg,
                            <br />
                            New Delhi-110001
                            <br />
                            Mobile No - 9312251303
                            <br />
                            Email ID - vipinrajput@gmail.com
                          </p>
                        </td>
                      </tr> 
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>,
      ),
      {
        callback: function (doc) {
          doc.save('sample.pdf')
        },
        // margin:margins,
        autoPaging: 'text',
      },
    )
  }
  return (
    <>
      <div className="container-fluid p-0">
        <div
          className={`${styles.card} tabHeader border-0 shadow-none bg-transparent card2`}
        >
          <div className={`${styles.head_header} align-items-center`}>
            <img
              className={`${styles.arrow} img-fluid image_arrow mr-2`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow"
              onClick={() => Router.push('/insurance/form')}
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
                    INR { Number(convertValue(insuranceData?.quotationRequest?.sumInsured))?.toLocaleString(undefined, { maximumFractionDigits: 2 })} Crores
                    (Including 110%)
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
                    Port of Discharge
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
                    Laycan
                  </Col>
                  <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                    {moment(
                      insuranceData?.quotationRequest?.laycanFrom
                    ).format('DD MMM')}{' '}
                    -{' '}
                    {moment(
                      insuranceData?.quotationRequest?.laycanTo
                    ).format('DD MMM, YYYY')}
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
                      insuranceData?.quotationRequest?.expectedTimeOfDispatch
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
                      insuranceData?.quotationRequest?.expectedTimeOfArrival
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
        download={exportPDF}
        rightButtonTitle="Share"
        leftButtonTitle="Request Letter"
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
                <h3>Share as</h3>
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
                      Requestletter.pdf<span>128kb</span>
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
                      Requestletter.doc<span>128kb</span>
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
                    {emailAdd.map((val, index) => (
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
                    ))}
                    <div
                      className={`${styles.addMoreRows}`}
                      onClick={(e) => {
                        addMoreRows()
                      }}
                    >
                      <span style={{ fontSize: '2rem' }} className={`mr-2`}>
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
                    </div>
                    {/* <div className={`${styles.labelFloat} form-group`}>
                          <input type='text' id='phone' name="phone" className={`${styles.formControl} ${styles.input} input form-control`} required />
                          <label className={`label_heading_login`} htmlFor='phone'>Phone Number</label>
                        </div> */}
                    <div
                      className={`${styles.addMoreRows}`}
                      onClick={(e) => {
                        addMoreRows()
                      }}
                    >
                      <span style={{ fontSize: '2rem' }} className={`mr-2`}>
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
                      LC Document.pdf<span>128kb</span>
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
                      word document.doc<span>128kb</span>
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
