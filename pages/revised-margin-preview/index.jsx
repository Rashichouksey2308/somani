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

  return (
    <>
      <div className={`${styles.root_container} tabHeader bg-transparent`}>
        <div className={styles.head_container}>
          <div className={styles.head_header}>
            <img
              className={styles.arrow}
              src="/static/keyboard_arrow_right-3.svg"
              alt="Arrow"
            />
            <h1 className={`${styles.heading} heading`}>
              Revised Margin Money Preview
            </h1>
          </div>
        </div>
        <div className={`${styles.term_container} container-fluid`}>
          <Row className={styles.row}>
            <Col md={4} className={`${styles.left} align-self-end`}>
              <div>
                <span className={styles.termSub_head}>Order ID:</span>
                <span className={styles.termValue}>
                  {marginData?.order?.orderId}
                </span>
              </div>
              <div>
                <span className={styles.termSub_head}>Buyer:</span>
                <span className={styles.termValue}>
                  {marginData?.company?.companyName}
                </span>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <span>REVISED MARGIN MONEY</span>
            </Col>
            <Col
              md={4}
              className={`${styles.left} ${styles.right} align-self-center`}
            >
              <div>
                <span className={styles.termSub_head}>Date:</span>{' '}
                <span className={styles.termValue}>
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
                    <td className={`${styles.good} good`}>
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
                    <td className={`${styles.good} good`}>
                      {marginData?.conversionRate}
                    </td>
                    <td>{marginData?.conversionRate}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>D</span>
                      <span className={`ml-2`}>Usance Interest (%)</span>
                    </td>
                    <td className={`${styles.good} good`}>
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
                    <td className={`${styles.good} good`}>
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
                    <td className={`${styles.good} good`}>
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

        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
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
                          <th width="67%" bgColor="#FAFAFB" align="left"></th>
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
                                color: '#111111',
                                lineHeight: '24px',
                                fontWeight: '500',
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
                                4.
                              </span>
                              LC Value
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
                              INR
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
                                5.
                              </span>
                              LC opening Bank
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
                                6.
                              </span>
                              Margin Money as % of Import Value
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
                                7.
                              </span>
                              INCO Terms
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
                                8.
                              </span>
                              Load Port
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
                                9.
                              </span>
                              Country of Origin
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
                                10.
                              </span>
                              Shipment Type
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
                                11.
                              </span>
                              Part Shipment Allowed
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
                                12.
                              </span>
                              Port of Discharge
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
                                13.
                              </span>
                              Bill of Entry
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
                                14.
                              </span>
                              3rd Party Inspection Required
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
                              value
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
                              Storage of Goods
                            </h3>
                          </th>
                          <th width="67%" bgColor="#FAFAFB" align="left"></th>
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
                                padding: '23px 15px 40px 35px',
                                marginBottom: '0',
                              }}
                            >
                              <span
                                style={{
                                  display: 'inline-block',
                                  width: '35px',
                                }}
                              >
                                15.
                              </span>
                              Storage of Goods
                            </p>
                          </td>
                          <td align="left">
                            <p
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                fontWeight: '500',
                                padding: '23px 15px 40px 24px',
                                marginBottom: '0',
                              }}
                            >
                              value
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
                              Deliveries/Due Date/Payment
                            </h3>
                          </th>
                          <th width="67%" bgColor="#FAFAFB" align="left"></th>
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
                                padding: '23px 15px 40px 35px',
                                marginBottom: '0',
                              }}
                            >
                              <span
                                style={{
                                  display: 'inline-block',
                                  width: '35px',
                                }}
                              >
                                16.
                              </span>
                              Deliveries/Due date/Payment
                            </p>
                          </td>
                          <td align="left">
                            <p
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                fontWeight: '500',
                                padding: '23px 15px 40px 24px',
                                marginBottom: '0',
                              }}
                            >
                              value
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
                              Commercial Terms
                            </h3>
                          </th>
                          <th width="67%" bgColor="#FAFAFB" align="left"></th>
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
                                17.
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
                                padding: '23px 15px 11px 24px',
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
                                18.
                              </span>
                              LC Opening Charges (Minimum)
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
                                19.
                              </span>
                              LC Opening Charges (%)
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
                                20.
                              </span>
                              Usance Interest (%) For 90 Days
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
                                21.
                              </span>
                              Overdue Interest per Month (%)
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
                                22.
                              </span>
                              Exchange Fluctuation
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
                                23.
                              </span>
                              Forex Hedging
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
                                padding: '11px 15px 40px 35px',
                                marginBottom: '0',
                              }}
                            >
                              <span
                                style={{
                                  display: 'inline-block',
                                  width: '35px',
                                }}
                              >
                                24.
                              </span>
                              Other Terms &amp; Conditions
                            </p>
                          </td>
                          <td align="left">
                            <p
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                fontWeight: '500',
                                padding: '11px 15px 40px 24px',
                                marginBottom: '0',
                              }}
                            >
                              value
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
                              Reimbursement of Expenses
                            </h3>
                          </th>
                          <th width="67%" bgColor="#FAFAFB" align="left"></th>
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
                                padding: '23px 15px 40px 35px',
                                marginBottom: '0',
                              }}
                            >
                              <span
                                style={{
                                  display: 'inline-block',
                                  width: '35px',
                                }}
                              >
                                25.
                              </span>
                              Reimbursement of Expenses
                            </p>
                          </td>
                          <td align="left">
                            <p
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                fontWeight: '500',
                                padding: '23px 15px 40px 24px',
                                marginBottom: '0',
                              }}
                            >
                              value
                            </p>
                          </td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th colSpan={2} bgColor="#FAFAFB" align="left">
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
                              Other Terms &amp; Conditions
                            </h3>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={2} align="left">
                            <p
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                fontWeight: 'normal',
                                padding: '23px 15px 40px 35px',
                                marginBottom: '0',
                              }}
                            >
                              Below charges are to be borne and paid by the
                              Buyer on actual basis,wherever applicable. will
                              provide proof of all expenses to the Buyer.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <tr>
                        <td width="49%" valign="top">
                          <table
                            width="100%"
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                          >
                            <tr>
                              <td align="left">
                                <h3
                                  style={{
                                    fontSize: '22px',
                                    color: '#111111',
                                    lineHeight: '27px',
                                    fontWeight: 'bold',
                                    padding: '20px 15px 20px 35px',
                                    background: '#FAFAFB',
                                    marginBottom: '0',
                                  }}
                                >
                                  CHA / Stevedoring Charges
                                </h3>
                              </td>
                            </tr>
                            <tr>
                              <td
                                align="left"
                                style={{ padding: '35px 15px 35px 35px' }}
                              >
                                <ul
                                  style={{
                                    margin: '0',
                                    padding: '0',
                                    listStyle: 'none',
                                  }}
                                >
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="customsClearingCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="customsClearingCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Customs clearing charges / handling
                                      charges / CHA Fee
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="wharfaceCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="wharfaceCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Wharfage Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="pollutionCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="pollutionCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Pollution Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="royalyAndPenaltyCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="royalyAndPenaltyCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Royalty and Penalty Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="tarpaulinCoverageCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="tarpaulinCoverageCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Tarpaulin Coverage Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="wheighmentAndWeighmentSurveyCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="wheighmentAndWeighmentSurveyCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Wheighment &amp; Weighment Survey Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="draughtSurveyCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="draughtSurveyCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Draught Survey Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="boatingWhileDraughtSurveyCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="boatingWhileDraughtSurveyCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Boating while Draught Survey Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="hmcCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="hmcCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      HMC Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="securityCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="securityCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Security Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="piotRentalAndStorageCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="piotRentalAndStorageCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Plot Rental &amp; Storage Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="bondingOfCargoCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="bondingOfCargoCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Bonding of Cargo Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="exBondDocumentationCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="exBondDocumentationCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Ex - Bond Documentation Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="transferOfOwnershipCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="transferOfOwnershipCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Transfer of Ownership Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="customsBondOfficerOvertimeCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="customsBondOfficerOvertimeCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Customs Bond Officer Overtime Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="grabHireCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="grabHireCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Grab Hire Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="craneHireCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="craneHireCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Crane Hire Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="handlingLosses"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="handlingLosses"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Handling Losses
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="waterSprinklingCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="waterSprinklingCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Water Sprinkling Charges
                                    </label>
                                  </li>
                                  <li style={{ display: 'table' }}>
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="others"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="others"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Others, if any
                                    </label>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td align="left">
                                <h3
                                  style={{
                                    fontSize: '22px',
                                    color: '#111111',
                                    lineHeight: '27px',
                                    fontWeight: 'bold',
                                    padding: '20px 15px 20px 35px',
                                    background: '#FAFAFB',
                                    marginBottom: '0',
                                  }}
                                >
                                  Insurance
                                </h3>
                              </td>
                            </tr>
                            <tr>
                              <td
                                align="left"
                                style={{ padding: '35px 15px 35px 35px' }}
                              >
                                <ul
                                  style={{
                                    margin: '0',
                                    padding: '0',
                                    listStyle: 'none',
                                  }}
                                >
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="marineInsurance"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="marineInsurance"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Marine Insurance (if applicable)
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="storageInsurance"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="storageInsurance"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Storage Insurance(Fire &amp; Burglary)
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="insuranceCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="insuranceCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Insurance Charges ( While transferring the
                                      material to customs bonded warehouse )
                                    </label>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td width="2%"></td>
                        <td width="49%" valign="top">
                          <table
                            width="100%"
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                          >
                            <tr>
                              <td align="left">
                                <h3
                                  style={{
                                    fontSize: '22px',
                                    color: '#111111',
                                    lineHeight: '27px',
                                    fontWeight: 'bold',
                                    padding: '20px 15px 20px 35px',
                                    background: '#FAFAFB',
                                    marginBottom: '0',
                                  }}
                                >
                                  LC Opening Charges
                                </h3>
                              </td>
                            </tr>
                            <tr>
                              <td
                                align="left"
                                style={{ padding: '35px 15px 35px 35px' }}
                              >
                                <ul
                                  style={{
                                    margin: '0',
                                    padding: '0',
                                    listStyle: 'none',
                                  }}
                                >
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="lcOpeningCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="lcOpeningCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      LC Opening Charges ( on LC value subject
                                      to minimum of INR )
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="lcAmendmentCost"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="lcAmendmentCost"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      LC Amendment Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="cmaFeesIncludingSupervisionAndSurvey"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="cmaFeesIncludingSupervisionAndSurvey"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      CMA Fees including supervision and survey
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="bankDoIssuanceCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="bankDoIssuanceCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Bank DO Issuance Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="remmittanceCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="remmittanceCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Remmittance Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="usanceInterest"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="usanceInterest"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Usance Interest
                                    </label>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td align="left">
                                <h3
                                  style={{
                                    fontSize: '22px',
                                    color: '#111111',
                                    lineHeight: '27px',
                                    fontWeight: 'bold',
                                    padding: '20px 15px 20px 35px',
                                    background: '#FAFAFB',
                                    marginBottom: '0',
                                  }}
                                >
                                  Other Charges
                                </h3>
                              </td>
                            </tr>
                            <tr>
                              <td
                                align="left"
                                style={{ padding: '35px 15px 35px 35px' }}
                              >
                                <ul
                                  style={{
                                    margin: '0',
                                    padding: '0',
                                    listStyle: 'none',
                                  }}
                                >
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="demurrageOrDetentionChargesOfVessel"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="demurrageOrDetentionChargesOfVessel"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Demurrage / Detention Charges of Vessel
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="transportationCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="transportationCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Transportation Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="wagonHaulageCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="wagonHaulageCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Wagon Haulage Charges (in case of Delivery
                                      through railways)
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="thirdPartyInspectionCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="thirdPartyInspectionCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      3rd Party Inspection Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="hedgingCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="hedgingCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Hedging Charges
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="anyOtherCostIncurredOnBehalfOfBuyer"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="anyOtherCostIncurredOnBehalfOfBuyer"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Any other cost incurred on behalf of Buyer
                                    </label>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td align="left">
                                <h3
                                  style={{
                                    fontSize: '22px',
                                    color: '#111111',
                                    lineHeight: '27px',
                                    fontWeight: 'bold',
                                    padding: '20px 15px 20px 35px',
                                    background: '#FAFAFB',
                                    marginBottom: '0',
                                  }}
                                >
                                  Duty &amp; Taxes
                                </h3>
                              </td>
                            </tr>
                            <tr>
                              <td
                                align="left"
                                style={{ padding: '35px 15px 35px 35px' }}
                              >
                                <ul
                                  style={{
                                    margin: '0',
                                    padding: '0',
                                    listStyle: 'none',
                                  }}
                                >
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="customsDutyWithAllGovtCess"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="customsDutyWithAllGovtCess"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Customs Duty with all Govt Cess
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="igstWithCess"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="igstWithCess"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      IGST with CESS, if applicable
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="cimsCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="cimsCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      CIMS Charges (incase commodity is Coal)
                                    </label>
                                  </li>
                                  <li
                                    style={{
                                      marginBottom: '24px',
                                      display: 'table',
                                    }}
                                  >
                                    <input
                                      style={{
                                        display: 'table-cell',
                                        width: '20px',
                                        height: '20px',
                                        verticalAlign: 'middle',
                                        marginRight: '25px',
                                      }}
                                      id="taxCharges"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="taxCharges"
                                      style={{
                                        fontSize: '20px',
                                        display: 'table-cell',
                                        lineHeight: '25px',
                                        color: '#111111',
                                        letterSpacing: '0.19px',
                                        verticalAlign: 'middle',
                                      }}
                                    >
                                      Tax Collected at Source ( if applicable )
                                    </label>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style={{ padding: '35px 15px 35px 35px' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        lineHeight: '30px',
                        color: '#111111',
                        letterSpacing: '0.19px',
                      }}
                    >
                      All necessary documents to be filed with Customs
                      department for discharge of goods &amp; Customs clearance
                      can be filed by IGPL or its nominated person.
                      <br />
                      <span style={{ color: 'red' }}>*</span> GST charges extra
                      wherever applicable
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
      <MarginBar
        leftButtonTitle={'Margin Money'}
        rightButtonTitle={'Send to Buyer'}
      />
    </>
  )
}

export default Index
