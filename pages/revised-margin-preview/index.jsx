import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setDynamicName, setDynamicOrder, setPageName } from 'redux/userData/action';
import { GetMarginMoney } from 'redux/marginMoney/action';
import _get from 'lodash/get';
import moment from 'moment';
import Router from 'next/router';
import MarginBar from '../../src/components/MarginBar';
import { addPrefixOrSuffix } from '../../src/utils/helper';
import jsPDF from 'jspdf';
import ReactDOMServer from 'react-dom/server';

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

  const openbar = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };
  const exportPDF = () => {
   
    let element = (
      <table width="1500px" cellPadding="0" cellSpacing="0" border="0">
        <tr>
          <td valign="top" style={{ paddingTop: '30px' }}>
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
                <td valign="bottom" align="left" width="33%">
                  <span
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
                    >
                      {marginData?.order?.orderId}
                    </span>
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        paddingLeft: '25px',
                        width: '90px',
                        float: 'left',
                        height: '50px',
                      }}
                    >
                      Buyer:{' '}
                    </span>
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    >
                      {marginData?.company?.companyName}
                    </span>
                  </span>
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
                    REVISED MARGIN MONEY
                  </h2>
                </td>
                <td valign="center" align="right" width="33%">
                  <span>
                    {' '}
                    <span></span>
                  </span>
                  <span
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
                      {moment(marginData?.createdAt).format('DD-MM-yy')}
                    </span>
                  </span>
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
                border: '2px solid #cad6e64d',
              }}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <tr>
                <td valign="top" align="left">
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td width="50%" bgColor="#FAFAFB" align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Commodity Details
                        </span>
                      </td>
                      <td width="25%" bgColor="#FAFAFB" align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 24px',
                            marginBottom: '0',
                          }}
                        >
                          Revised Margin Money
                        </span>
                      </td>
                      <td width="25%" bgColor="#FAFAFB" align="left">
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 24px',
                            marginBottom: '0',
                          }}
                        >
                          Margin Money
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '30px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            A.
                          </span>
                          Quantity
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#43C34D',
                            lineHeight: '24px',
                            fontWeight: 'bold',
                            float: 'left',
                            padding: '30px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.revisedMarginMoney?.revisedCommodityDetails?.quantity
                              ? marginData?.revisedMarginMoney?.revisedCommodityDetails?.quantity?.toLocaleString(
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
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '30px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.quantity
                              ? marginData?.order?.quantity?.toLocaleString('en-In', {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })
                              : 0,
                            'MT',
                            '',
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            B
                          </span>
                          Unit Price
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          USD{' '}
                          {marginData?.revisedMarginMoney?.revisedCommodityDetails?.perUnitPrice?.toLocaleString(
                            'en-EN',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          USD{' '}
                          {marginData?.order?.perUnitPrice?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            C
                          </span>
                          Conversion Rate
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.revisedMarginMoney?.revisedCommodityDetails?.conversionRate}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 20px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.conversionRate}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            D
                          </span>
                          Usance Interest (%)
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.commercials?.usanceInterestPercetage?.toLocaleString(
                              'en-In',
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              },
                            ),
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.commercials?.usanceInterestPercetage?.toLocaleString(
                              'en-In',
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              },
                            ),
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            E
                          </span>
                          Trade Margin (%)
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.commercials?.tradeMarginPercentage?.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }),
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.commercials?.tradeMarginPercentage?.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }),
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            F
                          </span>
                          Tolerance (+/-) Percentage
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.tolerance
                              ? Number(marginData?.order?.tolerance)
                              : 0,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.tolerance
                              ? Number(marginData?.order?.tolerance)
                              : 0,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            G
                          </span>
                          Margin Money (%)
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.transactionDetails?.marginMoney
                              ? marginData?.order?.termsheet?.transactionDetails?.marginMoney?.toLocaleString('en-In', {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })
                              : 0,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.transactionDetails?.marginMoney
                              ? marginData?.order?.termsheet?.transactionDetails?.marginMoney?.toLocaleString('en-In', {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })
                              : 0,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            H
                          </span>
                          No. of PDC's
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.numberOfPDC?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.numberOfPDC?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            I
                          </span>
                          Additional PDC's
                        </p>
                      </td>
                      <td align="left" bgColor="#FFF5E5" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#FF9D00',
                            lineHeight: '24px',
                            fontWeight: 'bold',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.additionalPDC?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {/* {marginData?.additionalPDC?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                          })} */}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td height="20" style={{ borderRight: '2px solid #cad6e64d' }}></td>
                      <td height="20" style={{ borderRight: '2px solid #cad6e64d' }}></td>
                      <td height="20"></td>
                    </tr>
                    <tr>
                      <td bgColor="#FAFAFB" align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Calculation
                        </p>
                      </td>
                      <td bgColor="#FAFAFB" align="left" style={{ borderRight: '2px solid #cad6e64d' }}></td>
                      <td bgColor="#FAFAFB" align="left"></td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '30px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
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
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '30px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          USD{' '}
                          {marginData?.revisedMarginMoney?.revisedCalculation?.orderValue?.toLocaleString('en-EN', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '30px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          USD{' '}
                          {marginData?.calculation?.orderValue?.toLocaleString('en-EN', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
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
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.revisedCalculation?.orderValueInINR?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.orderValueInINR?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
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
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.revisedCalculation?.usanceInterest?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.usanceInterest?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
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
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.revisedCalculation?.tradeMargin?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.tradeMargin?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
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
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.revisedCalculation?.grossOrderValue?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.grossOrderValue?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
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
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.revisedCalculation?.toleranceValue?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.toleranceValue?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
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
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.revisedCalculation?.totalOrderValue?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAHYCAYAAAA8pTGEAAAgAElEQVR4nO3de7RkVX3g8S/Fte10Om2nVw+rhzA9LWmx7SAiKiFosCWIRtFBgyziZByTyRij6DganfhIZrlYLOIyis6EOC51iHFFNAwYQhAVQQFBAQGheQqNoLyRVwP9uN33Mn/se0NZ3EedXafqd/ap72et36rbVXXr7N59+3f3Ob+z994DLaYT3YAhKPnv1GHx9vfzel3vWczEiN5T19+prvbW0Xfd75me5/Wq7+k2vUcfjRiWvwTewOJ/gVmdrtfn+wt1v2ehf6Rphv+foNPz9UKfU+U4dXxO1b9Td7/mfkYd71no56NOi/0cjkLJv6RK8X+iEuBhwPn095tEkup2J/D8iN8yy4HPYvKTFGMaeBfwSEQCPAnYEHBcSQI4E/gngFGfAh8BnIujP0kxfg68ALgbRnuhdSWe+kqK9UFmkh+MNgF+DNh3hMeTpG4XAH/X/cSoToFfDZyDpX1JMR4HXgLc1P3kKBLS7KmvyU9SlBPpSX4wmqR0MrB2BMeRpLlcBXxqrheGfQr8euCsIR9DkuYzCfw2cPlcLw5zBLga+MwQP1+SFvM3zJP8YLgjwNOA44b4+ZK0kFuBF5IKIHMa1gjwGODYIX22JC1mdrrbvMkPhjMCXANcPfMoSRH+HvjPi72p7gTYAU4H3ljz50pSv+4lTXe7f7E31n0K/Gbg6Jo/U5KqeB99JD+odwS4D+nUd3WNnylJVXwdeB19Lp5b1wiwA5yCyU9SnK3AO6mwcnhdCfAtpJueJSnKXwC3V/mGOk6B1wFXAqtq+CxJyvED0oyP3VW+adARYIe00IHJT1KUHcCfUDH5weAJ8G3AkQN+hiQN4q+Ba3O+cZBT4H1JVd8VA3yGJA3iBtI6f9tyvjl3BDgBfAGTn6Q4u4E/JTP5QX4CfAewKfegklSDzwMXDfIBOafA+5GqvssHObAkDeCnpJVeHhrkQ6qOACeAUzH5SYozDfx3Bkx+UD0Bvgc4dNCDStIA/nVj80FVOQXeH7gMWFbHgSUpw0OklV7urOPD+h0BLiFVfU1+kiL9D2pKftB/Avwz4OC6DipJGZ62sfmg+jkFPhD4PrC0zgNLUgXbgBcxx96+g1hsBLiUdOpr8pMU6QRqTn6weAL8MHBQ3QeVpAp+BHxyGB+80CnwwcDFpAKIJEXYDbyUBfb2HcR8I8BlwOcw+UmK9b8YUvKD+UeAHwM+MKyDSlIfbiPd87fg3r6DmCsBvgw4H0d/kuJMA68FvjHMg/SeAi/HU19J8b7MkJMfPD0BngBsGPZBJWkB95L29h267gS4CTh+FAeVpAX0vbH5oGavAa4grfG3fhQHlaR5VNrYfFCzI8CPYfKTFGsr8C5GlPwgLXB6JGl3tzr1/gU6M891x+6ur2HuLe2mZ753oqu9nTmiV10bvktV3A1cGt2Igp1FuvVlZPYgjf5WkxLQJGnS8WMzjztmnt898/WOrucnu16b7HrPZNdzs1/3k9EXes9iCW1iJpbMxATpZu6lXc8tnXlu+UwsmXn8VdIlgNnXVwMrZ17ba+a1+RKt1G038CZqWqxTwzfItpjjosNTiXHVTKyZefy1mcd9SMlyH1Ly9Dai8bWDdP/aBdEN0eJMgPVbCuxNSpLrgLXAvyfto7yOlCSX4oiyzbYCrwCuim6IFmYCHL0JUlJcPxPPI917uZE0ynT02A53Ar8N3B7cDi3ABNgse5G2Hd2ftOXfgaTk6Ab0ZbqWNBIcePcyDYcJsPmWkpLgi4GXAIeQkqSL1Jbh26RrgpPRDdHTmQDLtJq0UO3LgcNII0X3am6uv2XE97dJ42Ql6X7OTwDXALuAJ43GxBTwjnn/9STVpkMqsrwNOJt0T2d0AjBgO3D4Av9ukoZgJXAM8FXgUeITwTjHXaTboCQFWAEcB5wD7CQ+IYxjXIgFLCnc3qRtD24mPimMW5zcx7+PpBHokK5NnYHFk1HFFHB0P/84kkZnHWl04rXC4ccDeD1QaqRVwEdI/0mjE0Wb43ycEx5qz+gGqJG2AxeRNsh6jLQ14bLQFrXTs4FHgB9EN0TS/FYDHweeIH7U1LZ4Ajcik4qwnlQsmSI+cbQpLuGpVc8lNdyr8faZuuPdlf4FJIVaBpyEN1TXFY+SpjBKKsjBwGbiE0gb4oyKfS+pAZYDp+C1wUFjinR5QVKBjgEeJj6RlBybcVsEqVgb8JR40Di+cq9LaowVpLUIoxNJqXEPaRkzDZkzQTQMO4HTSVPqDg5uS4mWk/YQ+W5wOyQN6ENYHMmJB0kzcDREjgA1bBcDPwd+FzfhquKXgB04CpRa4e04EqwaD+C1wKFyBKhR+SFp5ZNX4UiwX8uA+3C1GKk1Pkr8yKqkuAXvCxwaR4AatYuAfwu8KLohhVgFXA78OLohkuqxFDiP+NFVKXF2XjdLaqrVpNO76ORSQuzE/UOGwv0IFOXnwO8D26IbUoAlpHnWqpnXABXpblJl+LXRDSnASuAL0Y2QVK8OaR286NPMpscULphaO0+BFW0aeCdwb3RDGq6DawXWzgSoJrgX+G+kZKj5vSq6AZKG5yziTzWbHA/g7nFSa+1L2og9OtE0OTZm966exiqwmuRh4BnAK6Ib0mCXA9dEN6ItvAaopvkkcGd0IxrsBdENaJPI6wmrgTWkC9+7Z2K6K+h5br6vu9+v8j1OWjDhc9ENaagN0Q1ok6hliTqkuaCbep6bNd31ON3z57kSJT3vn02okz2PvdGbaHf38b29iXfXzGPv+yd7vmd3Rht7v6/3l8DuOZ7v/p5STQA3AuujG9JANwC/Ed2ItogaAR4HHL7A652eRz39l0L31/3+Qlgo6fZ+Tu8vhUkW/0XS/f5dixxrrqTdfaxv4O5oc/Fm6BpFjABXkrZNdHK3VN00abn8yeiGjFCHNFjrzPP1RM/z3a93D6ae9p6IEeCHMflJg3gNab+QJfxiEuj9jz/N3Imh+/3PnOP5uRLHfN8/MUc7Ojw9AS3Uht7oTWJzXePvbd9cry3mb0Y9AtwfuIK0HpwkRbkdeMEor7F1gJMx+UmKNTv/fOsoE+AxwBEjPJ4kzeXLwNdhdEWQFaTChxUsSZHuJd1Mfj+M7jaTD2PykxTvfcwkPxjNCHADcDVe+5MU65+BN9BVVR5FAvwmcOQIjiNJ83kEeCGp+vuvhn0K/EZMfpLifZCe5AfDHQEuJxU+1g3xGJK0mO8Cr2SOOfLDHAF+EJOfpFjbgD9lngVChpUA9wPeO6TPlqR+nQDcNN+LwzoFPoc0X1GSolwF/BYLLBwxjBHg0bh9n6RYk8CfsMiqOXUnwOXAx4fwuZJUxaeAHy72proT1ftxFV9JsW4ibauwqDqvAa4nzfhYXuNnSlIV08DvkG59WVRdI8AO8AlMfpJifZ4+kx/UNwI8CjgLr/1JinMn8HzStLe+1JGwlpFGfyY/SZHeSYXkB/UkrfeSbnyWpChfIa32Usmgp8D7AtfgtT9Jce4nLXJ6b9VvHGQE2CHd82fykxTp/WQkPxhsBPhq0pQ3r/1JivJ14HXMvXXmonIT4FLSPX8bMr9fkga1lXTqe3vuB+SO3t6DyU9SrA8zQPKDvBHgWuB6vPYnKc73gFcwzzp//coZATrjQ1KkBRc5raJqAjyCtMG5JEU5Cbiujg+qcgq8hFT42FjHgSUpw49Ii5zuqOPDqowA343JT1KcSdKpby3JD/ofAe5DKnysqOvAklTRJ4H31fmB/SbA04Dj6jywJFVwK2lj88fr/NB+ToEPB46t86CSVME06dS31uQHiyfAJcDJfbxPkobl74BvD+ODF0tsxwMHDOPAktSHu0mLHQzFQtcA9wE2AyuHdXBJWsTvAWcO68MXGgGehMlPUpwzGWLyg/lHgJuA84CJYR5ckubxEGl/j7uHeZC5RoCzhQ+Tn6Qo72fIyQ/mToBvBw4c9oElaR7fIlV+h673FHhvUuFj1SgOLkk9tgIvIt34PHS9I8ATMflJivNRRpT84BdHgB3SrI+Jma+ne16bfez9evbPE/M8duZ5rvf75ztGt+7n9+x5bqHP7j5+7+tzff987Zjtl8Xe00/fzPfaXP0y1zHmMt/7FmvnfO9Z6Jjdf87Zj8Gb69XrB8DLSYsejMSg22Iq1kJJqd/Xqia77udmfxn0fl9vMl/otZxfkL8LfGCONo2r3l9As/82u7seZ2Oy5/nZ75/uem1yjuj+vOkF3rer61hzvXdHTzu633sTIyh8dLPSW7beH/ysnbEK9LroBgSZBn6HNCd2N3Mnk9lkRc9jd9Dz9dgyAapEL45uQJC7gYswcdXG6zAqzVJg/+hGBLkdk1+tTIAqzQbG906Fm6Ib0DYmQJXm0OgGBNoc3YC2MQGqNC+NbkCgWnZC01NMgCrJBOM7ApwGbohuRNuYAFWS9cDa6EYE+Slwf3Qj2sYEqJIcxvj+zF6LFeDajesPk8r0yugGBLoiugFtZAJUKZaSFuodV5dGN6CNTIAqxYuB1dGNCLIDuCq6EW1kAlQpXhvdgEDXAY9EN6KNTIAqQQc4KroRgS6KbkBbmQBVgg3AxuhGBPpOdAPaygSoErye8f1Z3YYFkKEZ1x8qlaMDvCm6EYEuJ20RqSEwAarpNjDeuxSeG92ANjMBqul+n/H9OZ0GvhHdCEkxJoAtwJNjGjfjqu1DNa6/WVWGTcC+0Y0I9C88tXGRhsAEqCb7w+gGBDs9ugGSYqwBthN/GhoVW/D0d+gcAaqp3kpaAGFcnYmnv9JYmgB+QvwoLCqmGO9bf6SxdhzxSSgyrsSzs5Gwk9VE74tuQLBTcfVnaSwdTvwILDIeY3zXPZTG3neIT0KRcergXSipRJtIBYDoJBQVU8Ahg3aipPJ0gAuJT0KR8f2Be1FSkY5ivEd/T5Kq35LGzBLgauITUGRsmekHjZC3wagJ3oo3/p4MTEY3QtJorQLuIX4EFhn3AcsH7UhV5whQ0T5KWvhgnH0CeDy6EZJG6xBgJ/EjsMh4AEd/0thZAlxBfAKKjj8btCMllecjxCef6LgDWDZoR0oqy0GM92Kns/HHg3akpLIsBzYTn3yi42pc8VkaO58hPvlExxRwxKAdKaksx+F0tyeBr+EtaNJY2Qg8SnzyiY7HGO+tPqWxsxK4nvjk04T4yIB9KakgS4BziU88TYhr8LYXaWx0gFOITzxNiF3AywbrTkkl8Wbnp+LTA/alpIL8MWnUE514mhA34nxfaWz8ASa/2fDUVxojx+EKL91xwmDdKakUb8GRX3dcgsvcS2PheEx+3fEg3vAstV4HOBGnuHXHFHD0IJ0qqfmWAV8iPuE0LT4+SKdKar69gYuJTzZNi/Pwup/UaocCPyM+2TQttuAGT1JrdYB342rOc8WjuLex1Fp7kdaxi040TYxdWPSQWusoPOVdKN6T37WSmmo18AW8xWWhOBlXd5Za51jgLuITTJPjNNzYSGqVjcA3iU8uTY9zgaWZfSypYVaT1qxzIYPF40Jc3kpqhRXAB0hzV6MTSwnxfdIeJ5IKtpxUvbyH+KRSSlxBGilLKtQq4M+xwFE1LpvpO0kFWk+6ZeNh4pNJaXExJj+pOEuA1wBnY3EjN84jXSeVVIj1wEdJk/OjE0jJcQbu4ysVYQ3wdtLpmqO9weMzuKyV1GhrSUnvPFyhpa6YAv4Sp7dJjTMBHEL6D3oF7sFRd2wnbewkqSE2kEZ5pwMPEJ8k2hr3AYf1+W+iltgjugH6BctIi2oeAryUtPKyKwwP37XAG4Dbohui0TIBxuiQZmLsT0p4LwQOmvmzF95H6/8B/wXYGt0QjZ4JcLiWkG6gXU86lX3uzONGUgHDpZTi7AY+DPw1MB3cFgWpIwEuI+0Q9giwA5gk/XC1/YdqCWk5pFXAPqRT1bXAs2f+vO/M40qsKDbN3cB/Ai6Ibohi1TECOYC0QsY0KfFtBR4HtgEPAT8nJcbHZ/786Myft878eRspac4+t63ruemuz+1+zE2una6Y6IoOKZGvICWspaRT1L1mnnsWKcGtJE2GXzPz/Oqu71cZLiAlv7ujG6J4dSTA2UUhO6RR0WoGWzGjO7nt7opJnj66nGbh0WZ3suv+85Ke6HS9rnaaBE4A/or0MyPVkgDrvo7VnYRmE5Q0iFuBPwS+F90QNUsdIx4v5KuppoH/C7wEk5/mUEfy8rRRTXQn8E7gn6MbouaqI3l5iqommQb+nnRvpclPC6pjBGgCVFPcBrwL+Hp0Q1SGOkaArpemaLuBTwIvwOSnCuq8DUaK8D3Stb5roxui8ngNUKW6m3Rry8sx+SmT1wBVmm3A3wInkqZfStmaeCO0NJfdwD8BHyTd2CwNzPsA1XTTwEXAX+DNzKpZHQnwmTV8hjSXq4D/Sarstn11IQXwGqCa6DrSwgVn4sIFGiJvg1GTXEcqbpxJWr1FGioToJrgh8BJpKlrjvg0MiZARZkmLU76ceDbeI1PAbwGqFGbBP4R+DRp5CeF8T5Ajcr9wOeBz5CWqpLCmQA1TNPA5cAppO0nd8Q2R/pFJkANwyPAV4DPAj8Kbos0LxOg6rIbuBQ4lXQbixuNq/GsAmtQtwJfBk4Dbgpui1SJCVA57iYtTHAa8AO8d0+FMgGqX/cC/wKcTlqcwIKGiud9gFrIT0kLEZxBWonFpKdWMQGq2zRpdeVvAF8jVXCdk6vWsgqsh0iju3OAb5FGfU5L01gYNHl1cEHU0kySpqBdAJxHulHZU1uNJRNg++0mLSx6EXAh6V69h0JbJDVEHQnQU+Bm2Uoa1V0KXEK6TcWbkqU51JEALYLEmQRuII3wLiMluxvwvjypLybAMkyTtoO8gVSZvXrm8Trg8cB2SUUzATbLNCmh3U6aVnY9KcldN/Oct6RINfIa4OjNJrl7gdtIc2lvAX488/WdWJWVRsIq8Oh8ijSj4qekxUFNclLhVgFPGn3FT4A1ed0saRgGHb0twVkD/VoHfAmvmUqNUUcCVP+OIG34LakF1gNTxJ9elhRTwDE5nS2pXoOOAJfW8BnjpgN8AdgQ3RBp3A2avO4lrQ6salaQKsLLoxsiaTCHAduJP7UsMU7HEbQUZs8aPuMO4GHgtTV81rjZSLop+tLohkjK1wE+R/yIqsTYCRxevcslNcky4PvEJ5QS4x5gbfUul9Qka4G7iE8oJcYluMOeVDyLIvlxSkZ/S8pURxGkl0WRfC8iLZbwo+iGSMo3e7Nv9IiqxHgMOKh6l0tqkqVYFMmNW4DV1btcUpPsQ6pwRieUEuNsXGxWGqphXAPsthW4AviPIzhW2+w38/jdyEZIGtzxxI+oSoxdwFEZ/S2pQSyK5MeDpGXHJBXMmSL5cfVM/0kqmDNF8uOLGf0tqWE24UyR3HhH9e6W1DTH41L6ObEdODSjvyU1SAc4lfiEUmLcgdtrSsWzKJIf5+OOfFLx1uFMkdz4ePXultQ0m0irIkcnlNJiCji2endLapp3E59QSoyHgf0z+ltSw3yR+IRSYlwPrMzob0kNsoy0cEJ0Qikx3F5TaoG1wH3EJ5QS4wMZ/S2pYTZhUSQndgJHVO9uSU1jUSQv7sPtNaXidbAokhvfx+01peItBy4jPqGUGJ/J6G9JDbMOZ4rkxlsr97akxjkcl8/KiSdwe02pFd5DfEIpMbbg9ppS8SyK5Mc5uL2mVLzlOFMkN07I6G9JDbMOZ4rkxC7g9dW7W1LTHI4zRXLiQZ7abF1SwSyK5MXVpEsJkgr3JeITSonxJVw5RireMuBK4hNKiXF8Rn9Laph1WBTJie3Ay6p3t6SmOQKLIjnxM2DvjP6W1DDvJT6hlBjfwe01Ncb2jG5ATS4Dfh04ILohhVkH/ArwzeB2SBrQciyK5MQUcFxGf0tqmH2xKJITj+H2mlIrWBTJixtxe02NmbZcA+x2G7ANeFV0QwqzGthA2mLzyeC2SCPRxgQIqSjyHOD50Q0pzAZgB/C96IZIGoxFkbzYBRyZ0d+SGsaiSF7cR7pFRlLhLIrkxWWk+dZSa7X1GmC320jXtTytq+bXgH8DfJ2UEKXWGYcECPADLIrkeCFwF3BVdEMkDWY5aUHQ6FPL0uIJ4OCM/pbUMPsCDxCfVEqLLcBeGf0tqWGOxKJITpyL22uqZcblGmC3LVgUybGelAAviG6IpMF0gH8gflRVWkwBR2f0t6SGsSiSFw/j9ppSK6zHokhObMbtNaVWsCiSF6fldLbUJONYBOm1BZgEXhndkMLsDzxKuslcUsE6pBFN9KiqtNgJHJbR35IaZgUWRXLiLmCfjP6W1DAWRfLiQmBpRn9LaphXY1EkJz6d09lSJIsgT3crFkVyvIS09Ni10Q2RNBiLInnxGHBgRn9LapjlwDXEJ5XS4mZgVUZ/S2oYiyJ5cRauHKMCeA1wYQ+Rpn0dRzotVn+eS9pd7qLohkgLMQEu7lbSf+YjohtSmMOAK0j9J6lgHeCrxJ9alhYPkFbhllQ4Z4rkxRW4vabUCvthUSQnvpDT2ZKa5zU4UyQn3pbT2ZKa58+JTyilxXbcXlNqBYsiefET3F5TaoUVOFMkJ84DlmT0t6SGsSiSFx/L6WxJzfMa0o3S0UmlpNgFHJPT2ZKa50PEJ5XS4mFgY05nS2qWDnA68UmltNhMupYqqXDLSf+ho5NKaXEaLjQhtcJ+wIPEJ5XS4r05nS2peSyKVI+dwKaMvpbUQBZFqsc9uL2m1AoWRfLiYtxeU2oFZ4rkxSk5nS2peTZgUaRqTAFvyelsSc1zFBZFqobba0otYlGketyC22tKrTCBRZGcOBu315RaYQXOFMmJv8zpbEnNsx9pEYDopFJS7CLdXC6pBSyKVI8HcXtNqTU+QnxSKS2uJC04IalwHeAM4pNKaXEqrhwjtcIK4Hrik0pp8Y6czpbUPBuwKFI1ngAOzelsSc3zeiyKVI07gDU5nS112zO6AeJm0n/qw6MbUpBnAQcBXyHNHZaymACb4VJgf+B50Q0pyLOBXyLtMyypcCtxpkjVmMLtNaXWcPms6vEobq8ptYZFkepxI26vqQxeA2yem4E9gFdEN6Qgq4Hn8NTN5VJfTIDNdAlwAOmUWP3ZCGwj9Z2kwq3EmSJVYyfeTiS1xkacKVI17gHW5nS2pOY5GosiVeMS3F5TffAaYPPdhEWRqv4dqTByTnRDJA2uA3yN+JFVSTEFvDWjryU1kEWR6vEY8OKczpbUPBZFqsctpNNhSS1gUaR6nIPba2oOFkHKcxPpP/PLoxtSkOfMPH43shGS6jEBnEX8yKqk2EXakU9SC6wkLQIQnVhKigeB9TmdLal5LIpUj6txe02pNd6IRZGq8aWsnlbrWAQp343AEuCw6IYU5ADS6fDl0Q2RNDiLItVjO/CynM6W1DyrcKZI1fgZsHdOZ0tqnv2xKFI1vkO6hKAx5DXAdrmfNPXr90gLKGhx64BfBr4V3A4FMAG2j0WR6n4T+DFwXXRDJA1uAjib+NPLkuJRUnVYUgusJO0wF51YSorrZ/pNUgtsJI1sohNLSXEGXj8dG14DbLcHSNe23kRaVl+Lex6wA/hedEM0fCbA9rsReAYWRarYBFwGbAluh6QaWBSpHveRbpGR1AKrcPmsqnEZbq8ptYYzRarHZ7N6WlIjHYPLZ1WNP8rqaUmNdCLxSaWkeAK315Raw6JI9diC22tKrbEKZ4pUjXNxe02pNfbHmSJV48SsnpbUSMcAU8QnllJiF2lzekktYVGkWjwI7JfV05IapwOcQ3xiKSmuwe01pdZYRVpNOjqxlBT/gCvHSK1hUaR6vDurpyU10rFYFKkSO3GlHalVTiI+sZQUPwP2yeppSY0zgUWRqnEhrhwjtcZqnClSNT6d1dOSGukALIpUiSngzVk9LamRLIpUi8dwe02pVSyKVIubcXtNqTUmSCuhRCeWkuJreJO01BqrcaZI1fhQVk9LaqQDSNe4ohNLKbELODKrpyU1kkWRavEAsG9WT0tqpI8Rn1hKisuAZVk9LalxLIpUj89hUURqDYsi1WIKeFtWT0tqpANxpkiVeAI4JKunJTXScVgUqRI/AfbK6mnVbs/oBqh41wG/DLw0uiGFWAm8APhH0i8OBTIBqg4XAS8B1kc3pBC/DjwDOD+6IZLqYVGkWkwBb8zqaUmNdCDOFKkSD+P2mlKrvBmLIlViM26vGcZrgKrbZuBXgEOjG1KIvUjXTs8kJURJhZsAvkn86KqkeG9WT0tqpL2wKFIldgKbcjpaUjMdhEWRKnEXbq8ptYpFkWpxMW6vOTIWQTRsFkWqWUuaLXJudEMk1WMCOI/40VUpMQW8JaunJTXSamAL8cmllHiMdGO5pJawKFItbgZWZfW0pEayKFItziJdQtAQWATRqG0GngX8VnRDCvFc0u5yF0U3RFI9lmBRpErsAl6T1dOSGmkvLIpUCbfXlFrGoki1uBK315Ra5Q+wKFIlTs3rZs3FIoiiXYtFkSoOBO4DfhjdEEn1sChSLbbj9ppSq1gUqRZ3AGuyelpSI1kUqRbnkUbPyuQ1QDXJPcDPgKOBPYLbUoJ9gWcC345uSKlMgGqaa4FfxWtc/fpN0pzh66MbIqkeE6RNw6NPMUuJh4GNWT0tqZH2An5CfHIpJTYDK7J6WlIjHQQ8QXxyKSW+CnSyenpMeQ1QTXYP8FMsivTrN4DHgUujGyKpPicTP7oqJXYCh+d1s6QmWoJFkSpxD2lzJUktsQaLIlXiEtxeU2qVg3GmSJU4Ja+bx4dFEJXkrpn4D1gU6ceLgNuBa4LbIalGFkX6jydItxNJagmLItXiFtK+zJJawqJItTgHt9eUWuXFOFOkSnw0r5slNdVbiE8spcQu4Ki8bpbUVJ8mPrmUEg8C6/O6WVITLQG+Q3xyKSWuBJZn9bSkRlpD2icjOrmUEl/ElWOkVjkYiyJV4vi8bpbUVG/Fjdb7je3Ay7J6WVJjWRTpP+4A9s7rZklNtBSLIlXifNxeU2qVvSK55pEAAABTSURBVHGmSJX4RF43S2qqQ7Ao0m9MAcfmdbOkpvojLIr0G4/i9ppS6/xv4pNLKXEjY7S9potKahwsAb4JHJrxvdPzfF236QZ9/pnAfx1iWxrj/wNsbDebVf87uQAAAABJRU5ErkJggg=="
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.totalOrderValue?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
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
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.revisedCalculation?.provisionalUnitPricePerTon?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.provisionalUnitPricePerTon?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
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
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.revisedCalculation?.marginMoney?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.marginMoney?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{
                          borderRight: '2px solid #cad6e64d',
                          borderBottom: '2px solid #cad6e64d',
                        }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 30px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
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

                      <td
                        align="left"
                        style={{
                          borderRight: '2px solid #cad6e64d',
                          borderBottom: '2px solid #cad6e64d',
                        }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 30px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.revisedCalculation?.totalSPDC?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                      <td align="left" style={{ borderBottom: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 30px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.totalSPDC?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td height="20" style={{ borderRight: '2px solid #cad6e64d' }}></td>
                      <td height="20" style={{ borderRight: '2px solid #cad6e64d' }}></td>
                      <td height="20"></td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
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
                      <td align="left" bgColor="#FFF5E5" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                            color: '#FF9D00',
                            float: 'left',
                            fontWeight: 'bold',
                            lineHeight: '24px',
                          }}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAHYCAMAAAALe8G2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAYBQTFRFAAAA/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A29WatwAAAIB0Uk5TAAIEBggKDA4QEhQYHCAiJCYoLDAyNDY4On7P0dPV19nb3d/h4+Xn6evt7/Hz9ff5+/3/lz5Qk6tEGmSZvUh4n81OjadUoa0WXFq1sWBux7kuaIO/xVJ0yXqJPKOPQEadfHJqZmJCTFh2h5W7y5u3hcMes6nBcItsgVYqXq+RSqVgZWVfAAATYklEQVR4nO2d91sT3RLHNwkp9F5D7+nZ0JuiICBNaVIEadJBARFBEf/1GyB4LXjW1/1m52Qnn+e5z/vLe++d+WaX754z58woCgjLv2D9b9hSYthjOJwxXKkx0u5JvyfjnswYWdkxcnJj5N2Tf09BjMJ7ioqK7v5ZXFxcdENxyS3FGrKUlrnd7rI7ov9031LudlfcUV5RGaOqOkbNLbW1tXX1dzQ0xmhqar7D443h88cIRAne/CcUI3yPek8kElH/yK//8m9E4kWLWL/WcNz+n81BvUuon6OSOkDJUdvED2A7dYCy0yHWrzP5Aotp7hLq56qhDlB2usUPYA91fLLTaxXq1xc/7zcH/lzxC1xHHaDsPBK/wI+p45Od/hShfk+o45OdUJFQ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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.calculation?.additionalAmountPerPDC?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.calculation?.amountPerSPDC?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
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
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#43C34D',
                            lineHeight: '24px',
                            fontWeight: 'bold',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.calculation?.revisedNetOrderValue?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          -
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            V
                          </span>
                          Margin Money (INR)
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#43C34D',
                            lineHeight: '24px',
                            fontWeight: 'bold',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.calculation?.marginMoney?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.calculation?.marginMoney?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
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
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#43C34D',
                            lineHeight: '24px',
                            fontWeight: 'bold',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.calculation?.revisedMarginMoney?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          -
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            X
                          </span>
                          Margin Money Received (INR)
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#43C34D',
                            lineHeight: '24px',
                            fontWeight: 'bold',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.calculation?.marginMoneyReceived?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          -
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
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
                      <td align="left" bgColor="#FFF5E5" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#FF9D00',
                            lineHeight: '24px',
                            fontWeight: 'bold',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAHYCAMAAAALe8G2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAjdQTFRFAAAA/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A/50A24++wwAAAL10Uk5TAE7P0dPV19nb3d/h4+Xn6evt7/Hz9ff5+/3/rm1UJJj+XJOrWOY1KJ9imb5bQSylaF76TTKNpx9fVza1oS7yObq2sjxj9GY/wsj4SINDGMD8UpdHzibGaaxK0spq1ofQUB2OieAhlKOPL+SdqckblbvLm7fNudRAvSWWGoXDOrPoRDNVrewei/baUWUXtIHub9yCnOLHsb+vwZGSxbxZxLhg2EYr6vAwKd5LzLA3PSJspJCodqCeoqaaqoaM8iICmwAAEg5JREFUeJztnflfFFcWxUuazQYUWbrpckkLrsQVlSigxj0xaJBozGJQBx1RVBYxYgQ1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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.revisedMarginMoney?.calculation?.marginMoneyPayable?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          -
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td height="20" style={{ borderRight: '2px solid #cad6e64d' }}></td>
                      <td height="20" style={{ borderRight: '2px solid #cad6e64d' }}></td>
                      <td height="20"></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    );
   
    const doc = new jsPDF('p', 'pt', [1500, 1850]);
    doc.html(ReactDOMServer.renderToString(element), {
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
                      {marginData?.revisedMarginMoney?.revisedCommodityDetails?.perUnitPrice?.toLocaleString('en-EN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td>
                      USD{' '}
                      {marginData?.order?.perUnitPrice?.toLocaleString('en-EN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>C</span>
                      <span className={`ml-2`}>Conversion Rate</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {marginData?.revisedMarginMoney?.revisedCommodityDetails?.conversionRate}
                    </td>
                    <td>{marginData?.conversionRate}</td>
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
                        marginData?.order?.tolerance
                          ? Number(marginData?.order?.tolerance)
                          : 0,
                        '%',
                        '',
                      )}
                    </td>
                    <td>
                      {addPrefixOrSuffix(
                        marginData?.order?.tolerance
                          ? Number(marginData?.order?.tolerance)
                          : 0,
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
                      {marginData?.revisedMarginMoney?.revisedCalculation?.orderValue?.toLocaleString('en-EN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td className="pt-4">
                      USD{' '}
                      {marginData?.calculation?.orderValue?.toLocaleString('en-EN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
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
                      {marginData?.revisedMarginMoney?.revisedCalculation?.orderValueInINR?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.orderValueInINR?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>L</span>
                      <span className={`ml-2`}>Usance Interest (%) for 90 days (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>(K*D*90)/365</span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.revisedMarginMoney?.revisedCalculation?.usanceInterest?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.usanceInterest?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>M</span>
                      <span className={`ml-2`}>Trade Margin (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>(K*E)</span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.revisedMarginMoney?.revisedCalculation?.tradeMargin?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.tradeMargin?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
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
        openbar={() => {
          
        }}
      />
    </>
  );
}

export default Index;
