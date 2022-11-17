import jsPDF from 'jspdf';
import _get from 'lodash/get';
import moment from 'moment';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ReactDOMServer from 'react-dom/server';
import { useDispatch, useSelector } from 'react-redux';
import { GetMarginMoney } from 'redux/marginMoney/action';
import { setDynamicName, setDynamicOrder, setPageName } from 'redux/userData/action';
import MarginBar from '../../src/components/MarginBar';
import RevisedMarginPreviewTemp from '../../src/templates/RevisedMarginPreviewTemp';
import { addPrefixOrSuffix } from '../../src/utils/helper';
import styles from './index.module.scss';
import { returnReadableNumber } from '@/utils/helpers/global';
import TermsheetPopUp from '../../src/components/TermsheetPopUp'

function Index() {
  const dispatch = useDispatch();

  const { margin } = useSelector((state) => state.marginMoney);

  const marginData = _get(margin, 'data.data[0]', {});

  useEffect(() => {
    let id = sessionStorage.getItem('marginId');
    dispatch(GetMarginMoney({ orderId: id }));

    dispatch(setPageName('margin-money'));
    dispatch(setDynamicName(marginData?.company?.companyName));
    dispatch(setDynamicOrder(marginData?.order?.orderId));
  }, [dispatch]);

  const [open, setOpen] = useState(false);

  const exportPDF = () => {
    const doc = new jsPDF('p', 'pt', [1500, 1850]);
    doc.html(ReactDOMServer.renderToString(<RevisedMarginPreviewTemp marginData={marginData} />), {
      callback: function (doc) {
        doc.save('RevisedMarginMoney.pdf');
      },
      autoPaging: 'text',
    });
  };

  return (
    <>
      <div className={`${styles.root_container} bg-transparent`}>
        <div className={styles.head_container}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} image_arrow mr-2 img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="Arrow"
              onClick={() => Router.push('/margin-money/id')}
            />
            <h1 className={`${styles.heading} heading`}>Revised Margin Money Preview</h1>
          </div>
        </div>
        <div className={`${styles.term_container} download-pdf-bg container-fluid`}>
          <Row className={styles.row}>
            <Col md={4} className={`${styles.left} align-self-end`}>
              <div>
                <span className={`${styles.termSub_head} text-color`}>Order ID:</span>
                <span className={`${styles.termValue} text-color`}>{marginData?.order?.orderId}</span>
              </div>
              <div>
                <span className={`${styles.termSub_head} text-color`}>Buyer:</span>
                <span className={`${styles.termValue} text-color`}>{marginData?.company?.companyName}</span>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <span className="download-pdf-title">REVISED MARGIN MONEY</span>
            </Col>
            <Col md={4} className={`${styles.left} ${styles.right} align-self-center`}>
              <div>
                <span className={`${styles.termSub_head} text-color`}>Date:</span>{' '}
                <span className={`${styles.termValue} text-color`}>
                  {moment(marginData?.createdAt).format('DD-MM-yy')}
                </span>
              </div>
            </Col>
          </Row>
        </div>
        <Card className={`${styles.content} border_color`}>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0">
                <tr>
                  <th width="40%">Commodity Details</th>
                  <th width="30%">Revised Margin Money</th>
                  <th width="30%">Margin Money</th>
                </tr>
                <tbody>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>A</span>
                      <span className={`ml-2`}>Quantity</span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {addPrefixOrSuffix(
                        marginData?.revisedMarginMoney?.revisedCommodityDetails?.quantity
                          ? Number(marginData?.revisedMarginMoney?.revisedCommodityDetails?.quantity)?.toLocaleString(
                              'en-In',
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              },
                            )
                          : 0,
                        'MT',
                        '',
                      )}
                    </td>
                    <td>
                      {' '}
                      {addPrefixOrSuffix(
                        marginData?.order?.quantity
                          ? Number(marginData?.order?.quantity)?.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          : 0,
                        'MT',
                        '',
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>B</span>
                      <span className={`ml-2`}>Unit Price</span>
                    </td>
                    <td className={`${styles.good} `}>
                      USD{' '}
                      {returnReadableNumber(
                        marginData?.revisedMarginMoney?.revisedCommodityDetails?.perUnitPrice,
                        'en-In',
                        2,
                      ) ?? 0}
                    </td>
                    <td>USD {returnReadableNumber(marginData?.order?.perUnitPrice, 'en-In', 2) ?? 0}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>C</span>
                      <span className={`ml-2`}>Conversion Rate</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {returnReadableNumber(
                        marginData?.revisedMarginMoney?.revisedCommodityDetails?.conversionRate,
                        'en-In',
                        2,
                      ) ?? 0}
                    </td>
                    <td>{returnReadableNumber(marginData?.conversionRate, 'en-In', 2) ?? 0}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>D</span>
                      <span className={`ml-2`}>Usance Interest (%)</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {addPrefixOrSuffix(marginData?.order?.termsheet?.commercials?.usanceInterestPercetage, '%', '')}
                    </td>
                    <td>
                      {addPrefixOrSuffix(marginData?.order?.termsheet?.commercials?.usanceInterestPercetage, '%', '')}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>E</span>
                      <span className={`ml-2`}>Trade Margin</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {addPrefixOrSuffix(marginData?.order?.termsheet?.commercials?.tradeMarginPercentage, '%', '')}
                    </td>
                    <td>
                      {addPrefixOrSuffix(marginData?.order?.termsheet?.commercials?.tradeMarginPercentage, '%', '')}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>F</span>
                      <span className={`ml-2`}>Tolerance (+/-) Percentage</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {addPrefixOrSuffix(
                        marginData?.order?.tolerance ? Number(marginData?.order?.tolerance) : 0,
                        '%',
                        '',
                      )}
                    </td>
                    <td>
                      {addPrefixOrSuffix(
                        marginData?.order?.tolerance ? Number(marginData?.order?.tolerance) : 0,
                        '%',
                        '',
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>G</span>
                      <span className={`ml-2`}>Margin Money (%)</span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {addPrefixOrSuffix(
                        marginData?.order?.termsheet?.transactionDetails?.marginMoney
                          ? marginData?.order?.termsheet?.transactionDetails?.marginMoney
                          : 0,
                        '%',
                        '',
                      )}
                    </td>
                    <td>
                      {addPrefixOrSuffix(
                        marginData?.order?.termsheet?.transactionDetails?.marginMoney
                          ? marginData?.order?.termsheet?.transactionDetails?.marginMoney
                          : 0,
                        '%',
                        '',
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>H</span>
                      <span className={`ml-2`}>No. of PDC's</span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {marginData?.numberOfPDC?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td>
                      {marginData?.numberOfPDC?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>I</span>
                      <span className={`ml-2`}>Additional PDC's</span>
                    </td>
                    <td className={`${styles.highlight} satisfactory`}>
                      {marginData?.additionalPDC?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td>
                      {' '}
                      {/* {marginData?.additionalPDC?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                      })} */}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0">
                <tr>
                  <th width="40%">Calculation</th>
                  <th width="30%"></th>
                  <th width="30%"></th>
                </tr>
                <tbody>
                  <tr>
                    <td className="pt-4">
                      <span className={`${styles.sno} text1`}>J</span>
                      <span className={`ml-2`}>Order Value</span>
                      <span className={`${styles.formula} text1 ml-2`}>(A*B)</span>
                    </td>
                    <td className="pt-4">
                      USD{' '}
                      {returnReadableNumber(
                        marginData?.revisedMarginMoney?.revisedCalculation?.orderValue,
                        'en-EN',
                        2,
                        2,
                      )}
                    </td>
                    <td className="pt-4">
                      USD {returnReadableNumber(marginData?.calculation?.orderValue, 'en-EN', 2, 2) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>K</span>
                      <span className={`ml-2`}>Order Value (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>(J*C)</span>
                    </td>
                    <td>
                      ₹{' '}
                      {returnReadableNumber(
                        marginData?.revisedMarginMoney?.revisedCalculation?.orderValueInINR,
                        'en-EN',
                        2,
                        2,
                      ) ?? 0}
                    </td>
                    <td>₹ {returnReadableNumber(marginData?.calculation?.orderValueInINR, 'en-EN', 2, 2) ?? 0}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>L</span>
                      <span className={`ml-2`}>Usance Interest (%) for 90 days (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>(K*D*90)/365</span>
                    </td>
                    <td>
                      ₹{' '}
                      {returnReadableNumber(
                        marginData?.revisedMarginMoney?.revisedCalculation?.usanceInterest,
                        'en-EN',
                        2,
                        2,
                      ) ?? 0}
                    </td>
                    <td>₹ {returnReadableNumber(marginData?.calculation?.usanceInterest, 'en-EN', 2, 2) ?? 0}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>M</span>
                      <span className={`ml-2`}>Trade Margin (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>(K*E)</span>
                    </td>
                    <td>
                      ₹{' '}
                      {returnReadableNumber(
                        marginData?.revisedMarginMoney?.revisedCalculation?.tradeMargin,
                        'en-EN',
                        2,
                        2,
                      ) ?? 0}
                    </td>
                    <td>₹ {returnReadableNumber(marginData?.calculation?.tradeMargin, 'en-EN', 2, 2) ?? 0}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>N</span>
                      <span className={`ml-2`}>Gross Order Value (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>(K+L+M)</span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.revisedMarginMoney?.revisedCalculation?.grossOrderValue?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.grossOrderValue?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>O</span>
                      <span className={`ml-2`}>Tolerance Value (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>(N*F)</span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.revisedMarginMoney?.revisedCalculation?.toleranceValue?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.toleranceValue?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>P</span>
                      <span className={`ml-2`}>Total Order Value (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>(N+O)</span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.revisedMarginMoney?.revisedCalculation?.totalOrderValue?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.totalOrderValue?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>Q</span>
                      <span className={`ml-2`}>Provisional Unit Price Per Ton (INR)</span>{' '}
                      <span className={`${styles.formula} text1 ml-2`}>(N/A)</span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.revisedMarginMoney?.revisedCalculation?.provisionalUnitPricePerTon?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2, maximumFractionDigits: 2 },
                      ) ?? 0}
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.provisionalUnitPricePerTon?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>R</span>
                      <span className={`ml-2`}>Margin Money (INR)</span>{' '}
                      <span className={`${styles.formula} text1 ml-2`}>(P*G)</span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.revisedMarginMoney?.revisedCalculation?.marginMoney?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.marginMoney?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td className="pb-4">
                      <span className={`${styles.sno} text1`}>S</span>
                      <span className={`ml-2`}>Total SPDC Amount Req. (INR)</span>{' '}
                      <span className={`${styles.formula} text1 ml-2`}>(P-R)</span>
                    </td>
                    <td className="pb-4">
                      ₹{' '}
                      {marginData?.revisedMarginMoney?.revisedCalculation?.totalSPDC?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td className="pb-4">
                      ₹{' '}
                      {marginData?.calculation?.totalSPDC?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr className={`${styles.bordertop} border_color`}>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>T</span>
                      <span className={`ml-2`}>Additional Amount Per SPDC (INR) </span>{' '}
                      <span className={`${styles.formula} text1 ml-2`}>[(S-Previous Value)/I)]</span>
                    </td>
                    <td className={`${styles.good} ${styles.highlight2} satisfactory`}>
                      ₹{' '}
                      {marginData?.revisedMarginMoney?.calculation?.additionalAmountPerPDC?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td>
                      {marginData?.calculation?.amountPerSPDC?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>U</span>
                      <span className={`ml-2`}>Revised Net Order Value (INR) </span>
                      <span className={`${styles.formula} text1 ml-2`}>[P - Total Order Value (Previous)]</span>
                    </td>
                    <td className={`${styles.good} good`}>
                      ₹{' '}
                      {marginData?.revisedMarginMoney?.calculation?.revisedNetOrderValue?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>V</span>
                      <span className={`ml-2`}>Margin Money (INR) </span>
                    </td>
                    <td className={`${styles.good} good`}>
                      ₹{' '}
                      {marginData?.revisedMarginMoney?.calculation?.marginMoney?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td>
                      {' '}
                      ₹{' '}
                      {marginData?.revisedMarginMoney?.calculation?.marginMoney?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>W</span>
                      <span className={`ml-2`}>Revised Margin Money Calculation (INR) </span>
                      <span className={`${styles.formula} text1 ml-2`}>(R)</span>
                    </td>
                    <td className={`${styles.good} good`}>
                      ₹{' '}
                      {marginData?.revisedMarginMoney?.calculation?.revisedMarginMoney?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>X</span>
                      <span className={`ml-2`}>Margin Money Received (INR) </span>
                    </td>
                    <td className={`${styles.good} good`}>
                      ₹{' '}
                      {marginData?.revisedMarginMoney?.calculation?.marginMoneyReceived?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>Y</span>
                      <span className={`ml-2`}>Margin Money Payable (INR) </span>{' '}
                      <span className={`${styles.formula} text1 ml-2`}>[(W-X))]</span>
                    </td>
                    <td className={`${styles.good} ${styles.highlight2} satisfactory`}>
                      ₹{' '}
                      {marginData?.revisedMarginMoney?.calculation?.marginMoneyPayable?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
      <MarginBar
        exportPDF={exportPDF}
        leftButtonTitle={'Revised Margin Money'}
        rightButtonTitle={'Send to Buyer'}
        openbar={() => setOpen(true)}
      />
      {open ? <TermsheetPopUp 
      close={() => setOpen(false)} 
      open={open} 
      isMargin 
      popupHeading={'Revised Margin Money'}/> : null}
    </>
  );
}

export default Index;
