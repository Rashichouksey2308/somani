import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Row, Col, Container, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName } from 'redux/userData/action'
import { setDynamicName } from 'redux/userData/action'
import { setDynamicOrder } from 'redux/userData/action'
import { GetMarginMoney } from 'redux/marginMoney/action'
import _get from 'lodash/get'
import moment from 'moment'
import MarginBar from '../../src/components/MarginBar'
import { addPrefixOrSuffix } from '../../src/utils/helper'
import jsPDF from 'jspdf'
import ReactDOMServer from 'react-dom/server'

function Index() {
  const dispatch = useDispatch()

  const { margin } = useSelector((state) => state.marginMoney)

  const marginData = _get(margin, 'data.data[0]', {})

  useEffect(() => {
    let id = sessionStorage.getItem('marginId')
    dispatch(GetMarginMoney({ orderId: id }))

    dispatch(setPageName('margin-money'))
    dispatch(setDynamicName(marginData?.company?.companyName))
    dispatch(setDynamicOrder(marginData?.order?.orderId))
  }, [dispatch])

  const [open, setOpen] = useState(false)

  const openbar = () => {
    setOpen(true)
  }

  const close = () => {
    setOpen(false)
  }
  const exportPDF = () => {
    //  let margins = [
    //    10,
    //    10,
    //    10,
    //    10

    //  ];
    let element = (
      <table width="600px" cellPadding="0" cellSpacing="0" border="0">
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#D8EAFF"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                marginBottom: '26px',
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                height: '126px',
              }}
              cellPadding="10"
              cellSpacing="0"
              border="0"
            >
              <tr>
                <td valign="top" align="left" width="33%">
                  <p
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500',
                      padding: '10px 0 0 25px',
                    }}
                  >
                    Order ID:{' '}
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    ></span>
                  </p>
                  <p
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500',
                      paddingLeft: '25px',
                    }}
                  >
                    Buyer:{' '}
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    >
                      {/* {_get(termsheet, 'data[0].company.companyName', '')} */}
                    </span>
                  </p>
                </td>
                <td valign="top" align="center" width="34%">
                  <h2
                    style={{
                      fontSize: '34px',
                      color: '#3687E8',
                      lineHeight: '41px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                    }}
                  >
                    MARGIN MONEY
                  </h2>
                </td>
                <td valign="top" align="right" width="33%">
                  <p>
                    {' '}
                    <span></span>
                  </p>
                  <p
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500',
                      paddingRight: '25px',
                    }}
                  >
                    Date:{' '}
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    >
                      22-02-2022
                    </span>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top" align="left">
            <table
              width="100%"
              bgColor="#FFFFFF"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
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
                    <thead>
                      <tr>
                        <th
                          width="33%"
                          bgColor="#FAFAFB"
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <h3
                            style={{
                              fontSize: '22px',
                              color: '#3687E8',
                              lineHeight: '27px',
                              fontWeight: 'bold',
                              padding: '20px 15px 20px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Commodity Details
                          </h3>
                        </th>
                        <th width="33%" bgColor="#FAFAFB" align="left">
                          <h3
                            style={{
                              fontSize: '22px',
                              color: '#3687E8',
                              lineHeight: '27px',
                              fontWeight: 'bold',
                              padding: '20px 15px 20px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Revised Margin Money
                          </h3>
                        </th>
                        <th width="33%" bgColor="#FAFAFB" align="left">
                          <h3
                            style={{
                              fontSize: '22px',
                              color: '#3687E8',
                              lineHeight: '27px',
                              fontWeight: 'bold',
                              padding: '20px 15px 20px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Margin Money
                          </h3>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '23px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              A.
                            </span>
                            Quantity
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#43C34D',
                              lineHeight: '24px',
                              fontWeight: 'bold',
                              padding: '23px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            75000 MT
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '23px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            75000 MT
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              B
                            </span>
                            Unit Price
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            5000 MT (± 10%)
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            5000 MT (± 10%)
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 38px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              C
                            </span>
                            Conversion Rate
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 38px 24px',
                              marginBottom: '0',
                            }}
                          >
                            USD 192.09/MT
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 38px 24px',
                              marginBottom: '0',
                            }}
                          >
                            USD 192.09/MT
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 38px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              D
                            </span>
                            Usance Interest (%)
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 38px 24px',
                              marginBottom: '0',
                            }}
                          >
                            USD 192.09/MT
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 38px 24px',
                              marginBottom: '0',
                            }}
                          >
                            USD 192.09/MT
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 38px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              E
                            </span>
                            Trade Margin (%)
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 38px 24px',
                              marginBottom: '0',
                            }}
                          >
                            USD 192.09/MT
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 38px 24px',
                              marginBottom: '0',
                            }}
                          >
                            USD 192.09/MT
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 38px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              F
                            </span>
                            Tolerance (+/-) Percentage
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 38px 24px',
                              marginBottom: '0',
                            }}
                          >
                            USD 192.09/MT
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 38px 24px',
                              marginBottom: '0',
                            }}
                          >
                            USD 192.09/MT
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 38px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              G
                            </span>
                            Margin Money (%)
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 38px 24px',
                              marginBottom: '0',
                            }}
                          >
                            USD 192.09/MT
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 38px 24px',
                              marginBottom: '0',
                            }}
                          >
                            USD 192.09/MT
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 38px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              H
                            </span>
                            No. of PDC's
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 38px 24px',
                              marginBottom: '0',
                            }}
                          >
                            USD 192.09/MT
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 38px 24px',
                              marginBottom: '0',
                            }}
                          >
                            USD 192.09/MT
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 38px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              I
                            </span>
                            Additional PDC's
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#FF9D00',
                              lineHeight: '24px',
                              fontWeight: 'bold',
                              padding: '11px 15px 38px 24px',
                              marginBottom: '0',
                              background: 'rgba(255, 157, 0, 0.1)',
                            }}
                          >
                            USD 192.09/MT
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 38px 24px',
                              marginBottom: '0',
                            }}
                          >
                            -
                          </p>
                        </td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th
                          width="33%"
                          bgColor="#FAFAFB"
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <h3
                            style={{
                              fontSize: '22px',
                              color: '#3687E8',
                              lineHeight: '27px',
                              fontWeight: 'bold',
                              padding: '20px 15px 20px 35px',
                              marginBottom: '0',
                            }}
                          >
                            Calculation
                          </h3>
                        </th>
                        <th width="67%" bgColor="#FAFAFB" align="left"></th>
                      </tr>
                    </thead>
                    <tbody style={{ whiteSpace: 'nowrap' }}>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '23px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              J
                            </span>
                            Order Value
                            <span
                              style={{
                                fontWeight: 'bold',
                                marginLeft: '10px',
                              }}
                            >
                              (A*B)
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '23px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            USD 38,50,000.00
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '23px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            USD 38,50,000.00
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              K
                            </span>
                            Order Value (INR)
                            <span
                              style={{
                                fontWeight: 'bold',
                                marginLeft: '10px',
                              }}
                            >
                              (J*C)
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            -
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              L
                            </span>
                            Usance Interest (%) for 90 days (INR)
                            <span
                              style={{
                                fontWeight: 'bold',
                                marginLeft: '10px',
                              }}
                            >
                              (K*D*90)/365
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              M
                            </span>
                            Trade Margin (INR)
                            <span
                              style={{
                                fontWeight: 'bold',
                                marginLeft: '10px',
                              }}
                            >
                              (K*E)
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              N
                            </span>
                            Gross Order Value (INR)
                            <span
                              style={{
                                fontWeight: 'bold',
                                marginLeft: '10px',
                              }}
                            >
                              (K+L+M)
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            -
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              O
                            </span>
                            Tolerance Value (INR)
                            <span
                              style={{
                                fontWeight: 'bold',
                                marginLeft: '10px',
                              }}
                            >
                              (N*F)
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            -
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              P
                            </span>
                            Total Order Value (INR)
                            <span
                              style={{
                                fontWeight: 'bold',
                                marginLeft: '10px',
                              }}
                            >
                              (N+O)
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              Q
                            </span>
                            Provisional Unit Price Per Ton (INR)
                            <span
                              style={{
                                fontWeight: 'bold',
                                marginLeft: '10px',
                              }}
                            >
                              (N/A)
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              R
                            </span>
                            Margin Money (INR){' '}
                            <span
                              style={{
                                fontWeight: 'bold',
                                marginLeft: '10px',
                              }}
                            >
                              (P*G)
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              S
                            </span>
                            Total SPDC Amount Req. (INR)
                            <span
                              style={{
                                fontWeight: 'bold',
                                marginLeft: '10px',
                              }}
                            >
                              (P-R)
                            </span>
                          </p>
                        </td>

                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            -
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              T
                            </span>
                            Additional Amount Per SPDC (INR)
                            <span
                              style={{
                                fontWeight: 'bold',
                                marginLeft: '10px',
                              }}
                            >
                              [(S-Previous Value)/I)]
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                              color: '#FF9D00',
                              lineHeight: '24px',
                              fontWeight: 'bold',
                              background: 'rgba(255, 157, 0, 0.1)',
                            }}
                          >
                            value
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              U
                            </span>
                            Revised Net Order Value (INR)
                            <span
                              style={{
                                fontWeight: 'bold',
                                marginLeft: '10px',
                              }}
                            >
                              [P - Total Order Value (Previous)]
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#43C34D',
                              lineHeight: '24px',
                              fontWeight: 'bold',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              V
                            </span>
                            Margin Money (INR)
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#43C34D',
                              lineHeight: '24px',
                              fontWeight: 'bold',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              W
                            </span>
                            Revised Margin Money Calculation (INR)
                            <span
                              style={{
                                fontWeight: 'bold',
                                marginLeft: '10px',
                              }}
                            >
                              (R)
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#43C34D',
                              lineHeight: '24px',
                              fontWeight: 'bold',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            -
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              X
                            </span>
                            Margin Money Received (INR)
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#43C34D',
                              lineHeight: '24px',
                              fontWeight: 'bold',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px',
                              }}
                            >
                              Y
                            </span>
                            Margin Money Payable (INR)
                            <span
                              style={{
                                fontWeight: 'bold',
                                marginLeft: '10px',
                              }}
                            >
                              (W-X)
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                              color: '#FF9D00',
                              lineHeight: '24px',
                              fontWeight: 'bold',
                              background: 'rgba(255, 157, 0, 0.1)',
                            }}
                          >
                            value
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            -
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    )
    const doc = new jsPDF('p', 'pt', 'a4')
    doc.html(ReactDOMServer.renderToString(element), {
      callback: function (doc) {
        doc.save('sample.pdf')
      },
      // margin:margins,
      autoPaging: 'text',
    })
  }

  return (
    <>
      <div className={`${styles.root_container} bg-transparent`}>
        <div className={styles.head_container}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} image_arrow mr-2 img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="Arrow"
            />
            <h1 className={`${styles.heading} heading`}>
              Revised Margin Money Preview
            </h1>
          </div>
        </div>
        <div className={`${styles.term_container} download-pdf-bg container-fluid`}>
          <Row className={styles.row}>
            <Col md={4} className={`${styles.left} align-self-end`}>
              <div>
                <span className={`${styles.termSub_head} download-pdf-color`}>Order ID:</span>
                <span className={`${styles.termValue} download-pdf-color`}>
                  {marginData?.order?.orderId}
                </span>
              </div>
              <div>
                <span className={`${styles.termSub_head} download-pdf-color`}>Buyer:</span>
                <span className={`${styles.termValue} download-pdf-color`}>
                  {marginData?.company?.companyName}
                </span>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <span className='download-pdf-title'>REVISED MARGIN MONEY</span>
            </Col>
            <Col
              md={4}
              className={`${styles.left} ${styles.right} align-self-center`}
            >
              <div>
                <span className={`${styles.termSub_head} download-pdf-color`}>Date:</span>{' '}
                <span className={`${styles.termValue} download-pdf-color`}>
                  {moment(marginData?.createdAt?.slice(0, 10)).format(
                    'DD-MM-yy',
                  )}
                </span>
              </div>
            </Col>
          </Row>
        </div>
        <Card className={styles.content}>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table
                className={`${styles.table} table`}
                cellPadding="0"
                cellSpacing="0"
              >
                <tr>
                  <th>Commodity Details</th>
                  <th>Revised Margin Money</th>
                  <th>Margin Money</th>
                </tr>
                <tbody>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>A</span>
                      <span className={`ml-2`}>Quantity</span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {addPrefixOrSuffix(
                        marginData?.order?.quantity
                          ? marginData?.order?.quantity
                          : 0,
                        'MT',
                        '',
                      )}
                    </td>
                    <td>
                      {' '}
                      {addPrefixOrSuffix(
                        marginData?.order?.quantity
                          ? marginData?.order?.quantity
                          : 0,
                        'MT',
                        '',
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>B</span>
                      <span className={`ml-2`}>Unit Price</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {marginData?.order?.perUnitPrice?.toLocaleString() ?? 0}
                    </td>
                    <td>
                      {marginData?.order?.perUnitPrice?.toLocaleString() ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>C</span>
                      <span className={`ml-2`}>Conversion Rate</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {marginData?.conversionRate}
                    </td>
                    <td>{marginData?.conversionRate}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>D</span>
                      <span className={`ml-2`}>Usance Interest (%)</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {addPrefixOrSuffix(
                        marginData?.order?.termsheet?.commercials
                          ?.usanceInterestPercetage,
                        '%',
                        '',
                      )}
                    </td>
                    <td>
                      {addPrefixOrSuffix(
                        marginData?.order?.termsheet?.commercials
                          ?.usanceInterestPercetage,
                        '%',
                        '',
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>E</span>
                      <span className={`ml-2`}>Trade Margin</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {addPrefixOrSuffix(
                        marginData?.order?.termsheet?.commercials
                          ?.tradeMarginPercentage,
                        '%',
                        '',
                      )}
                    </td>
                    <td>
                      {addPrefixOrSuffix(
                        marginData?.order?.termsheet?.commercials
                          ?.tradeMarginPercentage,
                        '%',
                        '',
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>F</span>
                      <span className={`ml-2`}>Tolerance (+/-) Percentage</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {addPrefixOrSuffix(
                        marginData?.order?.tolerance
                          ? marginData?.order?.tolerance
                          : 0,
                        '%',
                        '',
                      )}
                    </td>
                    <td>
                      {addPrefixOrSuffix(
                        marginData?.order?.tolerance
                          ? marginData?.order?.tolerance
                          : 0,
                        '%',
                        '',
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>G</span>
                      <span className={`ml-2`}>Margin Money (%)</span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {addPrefixOrSuffix(
                        marginData?.order?.termsheet?.transactionDetails
                          ?.marginMoney
                          ? marginData?.order?.termsheet?.transactionDetails
                              ?.marginMoney
                          : 0,
                        '%',
                        '',
                      )}
                    </td>
                    <td>
                      {addPrefixOrSuffix(
                        marginData?.order?.termsheet?.transactionDetails
                          ?.marginMoney
                          ? marginData?.order?.termsheet?.transactionDetails
                              ?.marginMoney
                          : 0,
                        '%',
                        '',
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>H</span>
                      <span className={`ml-2`}>No. of PDC's</span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {marginData?.numberOfPDC?.toLocaleString() ?? 0}
                    </td>
                    <td>{marginData?.numberOfPDC?.toLocaleString() ?? 0}</td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>I</span>
                      <span className={`ml-2`}>Additional PDC’s</span>
                    </td>
                    <td className={`${styles.highlight} satisfactory`}>
                      {marginData?.additionalPDC}
                    </td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table
                className={`${styles.table} mb-5 table`}
                cellPadding="0"
                cellSpacing="0"
              >
                <tr>
                  <th>Calculation</th>
                  <th></th>
                  <th></th>
                </tr>
                <tbody>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>J</span>
                      <span className={`ml-2`}>Order Value</span>
                      <span className={`${styles.formula} ml-2`}>(A*B)</span>
                    </td>
                    <td>
                      {marginData?.calculation?.orderValue?.toLocaleString() ??
                        0}
                    </td>
                    <td>
                      {marginData?.calculation?.orderValue?.toLocaleString() ??
                        0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>K</span>
                      <span className={`ml-2`}>Order Value (INR)</span>
                      <span className={`${styles.formula} ml-2`}>(J*C)</span>
                    </td>
                    <td>
                      {marginData?.calculation?.orderValueInINR?.toLocaleString() ??
                        0}
                    </td>
                    <td>
                      {marginData?.calculation?.orderValueInINR?.toLocaleString() ??
                        0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>L</span>
                      <span className={`ml-2`}>
                        Usance Interest (%) for 90 days (INR)
                      </span>
                      <span className={`${styles.formula} ml-2`}>
                        (K*D*90)/365
                      </span>
                    </td>
                    <td>
                      {marginData?.calculation?.usanceInterest?.toLocaleString() ??
                        0}
                    </td>
                    <td>
                      {marginData?.calculation?.usanceInterest?.toLocaleString() ??
                        0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>M</span>
                      <span className={`ml-2`}>Trade Margin (INR)</span>
                      <span className={`${styles.formula} ml-2`}>(K*E)</span>
                    </td>
                    <td>
                      {marginData?.calculation?.tradeMargin?.toLocaleString() ??
                        0}
                    </td>
                    <td>
                      {marginData?.calculation?.tradeMargin?.toLocaleString() ??
                        0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>N</span>
                      <span className={`ml-2`}>Gross Order Value (INR)</span>
                      <span className={`${styles.formula} ml-2`}>(K+L+M)</span>
                    </td>
                    <td>
                      {marginData?.calculation?.grossOrderValue?.toLocaleString() ??
                        0}
                    </td>
                    <td>
                      {marginData?.calculation?.grossOrderValue?.toLocaleString() ??
                        0}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>O</span>
                      <span className={`ml-2`}>Tolerance Value (INR)</span>
                      <span className={`${styles.formula} ml-2`}>(N*F)</span>
                    </td>
                    <td>
                      {marginData?.calculation?.toleranceValue?.toLocaleString() ??
                        0}
                    </td>
                    <td>
                      {marginData?.calculation?.toleranceValue?.toLocaleString() ??
                        0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>P</span>
                      <span className={`ml-2`}>Total Order Value (INR)</span>
                      <span className={`${styles.formula} ml-2`}>(N+O)</span>
                    </td>
                    <td>
                      {marginData?.calculation?.totalOrderValue?.toLocaleString() ??
                        0}
                    </td>
                    <td>
                      {marginData?.calculation?.totalOrderValue?.toLocaleString() ??
                        0}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>Q</span>
                      <span className={`ml-2`}>
                        Provisional Unit Price Per Ton (INR)
                      </span>{' '}
                      <span className={`${styles.formula} ml-2`}>(N/A)</span>
                    </td>
                    <td>
                      {marginData?.calculation?.provisionalUnitPricePerTon?.toLocaleString() ??
                        0}
                    </td>
                    <td>
                      {marginData?.calculation?.provisionalUnitPricePerTon?.toLocaleString() ??
                        0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>R</span>
                      <span className={`ml-2`}>Margin Money (INR)</span>{' '}
                      <span className={`${styles.formula} ml-2`}>(P*G)</span>
                    </td>
                    <td>
                      {marginData?.calculation?.marginMoney?.toLocaleString() ??
                        0}
                    </td>
                    <td>
                      {marginData?.calculation?.marginMoney?.toLocaleString() ??
                        0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>S</span>
                      <span className={`ml-2`}>
                        Total SPDC Amount Req. (INR)
                      </span>{' '}
                      <span className={`${styles.formula} ml-2`}>(P-R)</span>
                    </td>
                    <td>
                      {marginData?.calculation?.totalSPDC?.toLocaleString() ??
                        0}
                    </td>
                    <td>
                      {marginData?.calculation?.totalSPDC?.toLocaleString() ??
                        0}
                    </td>
                  </tr>
                  <tr className={`${styles.bordertop} border_color`}>
                    <td>
                      <span className={`${styles.sno}`}>T</span>
                      <span className={`ml-2`}>
                        Additional Amount Per SPDC (INR){' '}
                      </span>{' '}
                      <span className={`${styles.formula} ml-2`}>
                        [(S-Previous Value)/I)]
                      </span>
                    </td>
                    <td
                      className={`${styles.good} ${styles.highlight2} satisfactory`}
                    >
                      {marginData?.revisedMarginMoney?.calculation?.additionalAmountPerPDC?.toLocaleString() ??
                        0}
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>U</span>
                      <span className={`ml-2`}>
                        Revised Net Order Value (INR){' '}
                      </span>
                      <span className={`${styles.formula} ml-2`}>
                        [(S-Previous Value)/I)]
                      </span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {marginData?.revisedMarginMoney?.calculation?.revisedNetOrderValue?.toLocaleString() ??
                        0}
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>V</span>
                      <span className={`ml-2`}>Margin Money (INR) </span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {marginData?.revisedMarginMoney?.calculation?.marginMoney?.toLocaleString() ??
                        0}
                    </td>
                    <td>-</td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>W</span>
                      <span className={`ml-2`}>
                        Revised Margin Money Calculation (INR){' '}
                      </span>
                      <span className={`${styles.formula} ml-2`}>(R)</span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {marginData?.revisedMarginMoney?.calculation?.revisedMarginMoney?.toLocaleString() ??
                        0}
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>X</span>
                      <span className={`ml-2`}>
                        Margin Money Received (INR){' '}
                      </span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {marginData?.revisedMarginMoney?.calculation?.marginMoneyReceived?.toLocaleString() ??
                        0}
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>Y</span>
                      <span className={`ml-2`}>
                        Margin Money Payable (INR){' '}
                      </span>{' '}
                      <span className={`${styles.formula} ml-2`}>[(W-X))]</span>
                    </td>
                    <td
                      className={`${styles.good} ${styles.highlight2} satisfactory`}
                    >
                      {marginData?.revisedMarginMoney?.calculation?.marginMoneyPayable?.toLocaleString() ??
                        0}
                    </td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
      <MarginBar
        exportPDF={exportPDF}
        leftButtonTitle={'Margin Money'}
        rightButtonTitle={'Send to Buyer'}
        openbar={() => {
          console.log('open')
        }}
      />
    </>
  )
}

export default Index
