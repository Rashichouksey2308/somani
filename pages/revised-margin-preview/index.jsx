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
            <Col md={4} className={`${styles.left} align-self-end`} >
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
            <Col md={4} className={`${styles.left} ${styles.right} align-self-center`}>
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
                    <td>
                    {marginData?.conversionRate}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>D</span>
                      <span className={`ml-2`}>Usance Interest (%)</span>
                    </td>
                    <td className={`${styles.good} `}>
                    { addPrefixOrSuffix(marginData?.order?.termsheet?.commercials?.usanceInterestPercetage, '%', '')}
                    </td>
                    <td>
                    { addPrefixOrSuffix(marginData?.order?.termsheet?.commercials?.usanceInterestPercetage, '%', '')}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>E</span>
                      <span className={`ml-2`}>Trade Margin</span>
                    </td>
                    <td className={`${styles.good} `}>
                    { addPrefixOrSuffix(marginData?.order?.termsheet?.commercials?.tradeMarginPercentage, '%', '')}
                    </td>
                    <td>
                    { addPrefixOrSuffix(marginData?.order?.termsheet?.commercials?.tradeMarginPercentage, '%', '')}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>F</span>
                      <span className={`ml-2`}>Tolerance (+/-) Percentage</span>
                    </td>
                    <td className={`${styles.good} `}>
                    { addPrefixOrSuffix(marginData?.order?.tolerance ? marginData?.order?.tolerance : 0, '%', '')}
                    </td>
                    <td>
                    { addPrefixOrSuffix(marginData?.order?.tolerance ? marginData?.order?.tolerance : 0, '%', '')}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>G</span>
                      <span className={`ml-2`}>Margin Money (%)</span>
                    </td>
                    <td className={`${styles.good} `}>
                    {addPrefixOrSuffix(marginData?.order?.termsheet?.transactionDetails?.marginMoney ? marginData?.order?.termsheet?.transactionDetails?.marginMoney : 0, '%', '')}
                    </td>
                    <td>
                    {addPrefixOrSuffix(marginData?.order?.termsheet?.transactionDetails?.marginMoney ? marginData?.order?.termsheet?.transactionDetails?.marginMoney : 0, '%', '')}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>H</span>
                      <span className={`ml-2`}>No. of PDC's</span>
                    </td>
                    <td className={`${styles.good} `}>
                    {marginData?.numberOfPDC?.toLocaleString() ?? 0}
                    </td>
                    <td>
                    {marginData?.numberOfPDC?.toLocaleString() ?? 0}
                    </td>
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
                    {marginData?.calculation?.orderValue?.toLocaleString() ?? 0}
                    </td>
                    <td>
                    {marginData?.calculation?.orderValue?.toLocaleString() ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>K</span>
                      <span className={`ml-2`}>Order Value (INR)</span>
                      <span className={`${styles.formula} ml-2`}>(J*C)</span>
                    </td>
                    <td>
                    {marginData?.calculation?.orderValueInINR?.toLocaleString() ?? 0}
                    </td>
                    <td>
                    {marginData?.calculation?.orderValueInINR?.toLocaleString() ?? 0}
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
                    {marginData?.calculation?.usanceInterest?.toLocaleString() ?? 0}
                    </td>
                    <td>
                    {marginData?.calculation?.usanceInterest?.toLocaleString() ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>M</span>
                      <span className={`ml-2`}>Trade Margin (INR)</span>
                      <span className={`${styles.formula} ml-2`}>(K*E)</span>
                    </td>
                    <td>
                    {marginData?.calculation?.tradeMargin?.toLocaleString() ?? 0}
                    </td>
                    <td>
                    {marginData?.calculation?.tradeMargin?.toLocaleString() ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>N</span>
                      <span className={`ml-2`}>Gross Order Value (INR)</span>
                      <span className={`${styles.formula} ml-2`}>(K+L+M)</span>
                    </td>
                    <td>
                    {marginData?.calculation?.grossOrderValue?.toLocaleString() ?? 0}
                    </td>
                    <td>
                    {marginData?.calculation?.grossOrderValue?.toLocaleString() ?? 0}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>O</span>
                      <span className={`ml-2`}>Tolerance Value (INR)</span>
                      <span className={`${styles.formula} ml-2`}>(N*F)</span>
                    </td>
                    <td>
                    {marginData?.calculation?.toleranceValue?.toLocaleString() ?? 0}
                    </td>
                    <td>
                    {marginData?.calculation?.toleranceValue?.toLocaleString() ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>P</span>
                      <span className={`ml-2`}>Total Order Value (INR)</span>
                      <span className={`${styles.formula} ml-2`}>(N+O)</span>
                    </td>
                    <td>
                    {marginData?.calculation?.totalOrderValue?.toLocaleString() ?? 0}
                    </td>
                    <td>
                    {marginData?.calculation?.totalOrderValue?.toLocaleString() ?? 0}
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
                    <td>
                      -
                    </td>
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
                      {marginData?.revisedMarginMoney?.calculation?.revisedNetOrderValue?.toLocaleString() ?? 0} 
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>V</span>
                      <span className={`ml-2`}>Margin Money (INR) </span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {marginData?.revisedMarginMoney?.calculation?.marginMoney?.toLocaleString() ?? 0}
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
                      {marginData?.revisedMarginMoney?.calculation?.revisedMarginMoney?.toLocaleString() ?? 0}
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
                      {marginData?.revisedMarginMoney?.calculation?.marginMoneyReceived?.toLocaleString() ?? 0}
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>Y</span>
                      <span className={`ml-2`}>
                       Margin Money Payable (INR){' '}
                      </span>{' '}
                      <span className={`${styles.formula} ml-2`}>
                        [(W-X))]
                      </span>
                    </td>
                    <td
                      className={`${styles.good} ${styles.highlight2} satisfactory`}
                    >
                      {marginData?.revisedMarginMoney?.calculation?.marginMoneyPayable?.toLocaleString() ??
                        0}
                    </td>
                    <td>
                      -
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>

      <MarginBar
        leftButtonTitle={'Margin Money'}
        rightButtonTitle={'Send to Buyer'}
      />
    </>
  )
}

export default Index
