import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { Card, Col, Row } from 'react-bootstrap';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDynamicName,
  setDynamicOrder,
  setPageName,
} from 'redux/userData/action';
import { GetMarginMoney } from 'redux/marginMoney/action';
import _get from 'lodash/get';
import moment from 'moment';
import MarginBar from '../MarginBar';
import { addPrefixOrSuffix } from 'utils/helper';
import jsPDF from 'jspdf';
import ReactDOMServer from 'react-dom/server';

function Index() {
  const toPrint = useRef();
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

  let tempArr = [
    {
      head: 'Commodity Details',
      details: [
        { subhead: '1. Commodity Name', val: 'Chrome Ore' },
        { subhead: '2. Quantity', val: '5000 MT (± 10%)' },
        { subhead: '3. Unit Price', val: 'USD 243/MT' },
      ],
    },
  ];

  const [open, setOpen] = useState(false);

  const openbar = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };
  const exportPDF = () => {
    //  let margins = [
    //    10,
    //    10,
    //    10,
    //    10

    //  ];
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
                      {/* {_get(termsheet, 'data[0].company.companyName', '')} */}
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
                    MARGIN MONEY
                  </h2>
                </td>
                <td valign="center" align="right" width="33%">
                  <span>
                    {' '}
                    <span></span>
                  </span>
                  <br />
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
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td
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
                      </td>
                      <td width="67%" bgColor="#FAFAFB" align="left">
                        <h3
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            padding: '20px 15px 20px 24px',
                            marginBottom: '0',
                          }}
                        >
                          Margin Money
                        </h3>
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
                            padding: '23px 15px 11px 35px',
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
                          {addPrefixOrSuffix(
                            marginData?.order?.quantity
                              ? marginData?.order?.quantity
                              : 0,
                            'MT',
                            '',
                          )}
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
                              float: 'left',
                              height: '30px',
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
                          USD{' '}
                          {marginData?.order?.perUnitPrice?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
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
                              float: 'left',
                              height: '30px',
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
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.conversionRate}
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
                              float: 'left',
                              height: '30px',
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
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.commercials
                              ?.usanceInterestPercetage,
                            '%',
                            '',
                          )}
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
                              float: 'left',
                              height: '30px',
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
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.commercials
                              ?.tradeMarginPercentage,
                            '%',
                            '',
                          )}
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
                              float: 'left',
                              height: '30px',
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
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.tolerance
                              ? marginData?.order?.tolerance?.toLocaleString(
                                  'en-In',
                                  {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  },
                                )
                              : 0,
                            '%',
                            '',
                          )}
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
                              float: 'left',
                              height: '30px',
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
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.transactionDetails
                              ?.marginMoney
                              ? marginData?.order?.termsheet?.transactionDetails
                                  ?.marginMoney
                              : 0,
                            '%',
                            '',
                          )}
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
                              float: 'left',
                              height: '30px',
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
                            padding: '11px 15px 30px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {/* {marginData?.additionalPDC} */}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
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
                      </td>
                      <td width="67%" bgColor="#FAFAFB" align="left"></td>
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
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '30px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          USD{' '}
                          {marginData?.calculation?.orderValue?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
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
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.orderValueInINR?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
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
                              marginLeft: '2px',
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
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.usanceInterest?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
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
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.tradeMargin?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
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
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            N
                          </span>
                          <span style={{ marginRight: '10px' }}>
                            Gross Order Value (INR)
                          </span>
                          <span
                            style={{
                              fontWeight: 'bold',
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
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.grossOrderValue?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
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
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            O
                          </span>
                          <span style={{ marginRight: '10px' }}>
                            Tolerance Value (INR)
                          </span>
                          <span
                            style={{
                              fontWeight: 'bold',
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
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.toleranceValue?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
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
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            P
                          </span>
                          <span style={{ marginRight: '10px' }}>
                            Total Order Value (INR)
                          </span>
                          <span
                            style={{
                              fontWeight: 'bold',
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
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.totalOrderValue?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
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
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            Q
                          </span>
                          <span style={{ marginRight: '10px' }}>
                            Provisional Unit Price Per Ton (INR)
                          </span>
                          <span
                            style={{
                              fontWeight: 'bold',
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
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAHYCAYAAAA8pTGEAAAgAElEQVR4nO3de7RkVX3g8S/Fte10Om2nVw+rhzA9LWmx7SAiKiFosCWIRtFBgyziZByTyRij6DganfhIZrlYLOIyis6EOC51iHFFNAwYQhAVQQFBAQGheQqNoLyRVwP9uN33Mn/se0NZ3EedXafqd/ap72et36rbVXXr7N59+3f3Ob+z994DLaYT3YAhKPnv1GHx9vfzel3vWczEiN5T19+prvbW0Xfd75me5/Wq7+k2vUcfjRiWvwTewOJ/gVmdrtfn+wt1v2ehf6Rphv+foNPz9UKfU+U4dXxO1b9Td7/mfkYd71no56NOi/0cjkLJv6RK8X+iEuBhwPn095tEkup2J/D8iN8yy4HPYvKTFGMaeBfwSEQCPAnYEHBcSQI4E/gngFGfAh8BnIujP0kxfg68ALgbRnuhdSWe+kqK9UFmkh+MNgF+DNh3hMeTpG4XAH/X/cSoToFfDZyDpX1JMR4HXgLc1P3kKBLS7KmvyU9SlBPpSX4wmqR0MrB2BMeRpLlcBXxqrheGfQr8euCsIR9DkuYzCfw2cPlcLw5zBLga+MwQP1+SFvM3zJP8YLgjwNOA44b4+ZK0kFuBF5IKIHMa1gjwGODYIX22JC1mdrrbvMkPhjMCXANcPfMoSRH+HvjPi72p7gTYAU4H3ljz50pSv+4lTXe7f7E31n0K/Gbg6Jo/U5KqeB99JD+odwS4D+nUd3WNnylJVXwdeB19Lp5b1wiwA5yCyU9SnK3AO6mwcnhdCfAtpJueJSnKXwC3V/mGOk6B1wFXAqtq+CxJyvED0oyP3VW+adARYIe00IHJT1KUHcCfUDH5weAJ8G3AkQN+hiQN4q+Ba3O+cZBT4H1JVd8VA3yGJA3iBtI6f9tyvjl3BDgBfAGTn6Q4u4E/JTP5QX4CfAewKfegklSDzwMXDfIBOafA+5GqvssHObAkDeCnpJVeHhrkQ6qOACeAUzH5SYozDfx3Bkx+UD0Bvgc4dNCDStIA/nVj80FVOQXeH7gMWFbHgSUpw0OklV7urOPD+h0BLiFVfU1+kiL9D2pKftB/Avwz4OC6DipJGZ62sfmg+jkFPhD4PrC0zgNLUgXbgBcxx96+g1hsBLiUdOpr8pMU6QRqTn6weAL8MHBQ3QeVpAp+BHxyGB+80CnwwcDFpAKIJEXYDbyUBfb2HcR8I8BlwOcw+UmK9b8YUvKD+UeAHwM+MKyDSlIfbiPd87fg3r6DmCsBvgw4H0d/kuJMA68FvjHMg/SeAi/HU19J8b7MkJMfPD0BngBsGPZBJWkB95L29h267gS4CTh+FAeVpAX0vbH5oGavAa4grfG3fhQHlaR5VNrYfFCzI8CPYfKTFGsr8C5GlPwgLXB6JGl3tzr1/gU6M891x+6ur2HuLe2mZ753oqu9nTmiV10bvktV3A1cGt2Igp1FuvVlZPYgjf5WkxLQJGnS8WMzjztmnt898/WOrucnu16b7HrPZNdzs1/3k9EXes9iCW1iJpbMxATpZu6lXc8tnXlu+UwsmXn8VdIlgNnXVwMrZ17ba+a1+RKt1G038CZqWqxTwzfItpjjosNTiXHVTKyZefy1mcd9SMlyH1Ly9Dai8bWDdP/aBdEN0eJMgPVbCuxNSpLrgLXAvyfto7yOlCSX4oiyzbYCrwCuim6IFmYCHL0JUlJcPxPPI917uZE0ynT02A53Ar8N3B7cDi3ABNgse5G2Hd2ftOXfgaTk6Ab0ZbqWNBIcePcyDYcJsPmWkpLgi4GXAIeQkqSL1Jbh26RrgpPRDdHTmQDLtJq0UO3LgcNII0X3am6uv2XE97dJ42Ql6X7OTwDXALuAJ43GxBTwjnn/9STVpkMqsrwNOJt0T2d0AjBgO3D4Av9ukoZgJXAM8FXgUeITwTjHXaTboCQFWAEcB5wD7CQ+IYxjXIgFLCnc3qRtD24mPimMW5zcx7+PpBHokK5NnYHFk1HFFHB0P/84kkZnHWl04rXC4ccDeD1QaqRVwEdI/0mjE0Wb43ycEx5qz+gGqJG2AxeRNsh6jLQ14bLQFrXTs4FHgB9EN0TS/FYDHweeIH7U1LZ4Ajcik4qwnlQsmSI+cbQpLuGpVc8lNdyr8faZuuPdlf4FJIVaBpyEN1TXFY+SpjBKKsjBwGbiE0gb4oyKfS+pAZYDp+C1wUFjinR5QVKBjgEeJj6RlBybcVsEqVgb8JR40Di+cq9LaowVpLUIoxNJqXEPaRkzDZkzQTQMO4HTSVPqDg5uS4mWk/YQ+W5wOyQN6ENYHMmJB0kzcDREjgA1bBcDPwd+FzfhquKXgB04CpRa4e04EqwaD+C1wKFyBKhR+SFp5ZNX4UiwX8uA+3C1GKk1Pkr8yKqkuAXvCxwaR4AatYuAfwu8KLohhVgFXA78OLohkuqxFDiP+NFVKXF2XjdLaqrVpNO76ORSQuzE/UOGwv0IFOXnwO8D26IbUoAlpHnWqpnXABXpblJl+LXRDSnASuAL0Y2QVK8OaR286NPMpscULphaO0+BFW0aeCdwb3RDGq6DawXWzgSoJrgX+G+kZKj5vSq6AZKG5yziTzWbHA/g7nFSa+1L2og9OtE0OTZm966exiqwmuRh4BnAK6Ib0mCXA9dEN6ItvAaopvkkcGd0IxrsBdENaJPI6wmrgTWkC9+7Z2K6K+h5br6vu9+v8j1OWjDhc9ENaagN0Q1ok6hliTqkuaCbep6bNd31ON3z57kSJT3vn02okz2PvdGbaHf38b29iXfXzGPv+yd7vmd3Rht7v6/3l8DuOZ7v/p5STQA3AuujG9JANwC/Ed2ItogaAR4HHL7A652eRz39l0L31/3+Qlgo6fZ+Tu8vhUkW/0XS/f5dixxrrqTdfaxv4O5oc/Fm6BpFjABXkrZNdHK3VN00abn8yeiGjFCHNFjrzPP1RM/z3a93D6ae9p6IEeCHMflJg3gNab+QJfxiEuj9jz/N3Imh+/3PnOP5uRLHfN8/MUc7Ojw9AS3Uht7oTWJzXePvbd9cry3mb0Y9AtwfuIK0HpwkRbkdeMEor7F1gJMx+UmKNTv/fOsoE+AxwBEjPJ4kzeXLwNdhdEWQFaTChxUsSZHuJd1Mfj+M7jaTD2PykxTvfcwkPxjNCHADcDVe+5MU65+BN9BVVR5FAvwmcOQIjiNJ83kEeCGp+vuvhn0K/EZMfpLifZCe5AfDHQEuJxU+1g3xGJK0mO8Cr2SOOfLDHAF+EJOfpFjbgD9lngVChpUA9wPeO6TPlqR+nQDcNN+LwzoFPoc0X1GSolwF/BYLLBwxjBHg0bh9n6RYk8CfsMiqOXUnwOXAx4fwuZJUxaeAHy72proT1ftxFV9JsW4ibauwqDqvAa4nzfhYXuNnSlIV08DvkG59WVRdI8AO8AlMfpJifZ4+kx/UNwI8CjgLr/1JinMn8HzStLe+1JGwlpFGfyY/SZHeSYXkB/UkrfeSbnyWpChfIa32Usmgp8D7AtfgtT9Jce4nLXJ6b9VvHGQE2CHd82fykxTp/WQkPxhsBPhq0pQ3r/1JivJ14HXMvXXmonIT4FLSPX8bMr9fkga1lXTqe3vuB+SO3t6DyU9SrA8zQPKDvBHgWuB6vPYnKc73gFcwzzp//coZATrjQ1KkBRc5raJqAjyCtMG5JEU5Cbiujg+qcgq8hFT42FjHgSUpw49Ii5zuqOPDqowA343JT1KcSdKpby3JD/ofAe5DKnysqOvAklTRJ4H31fmB/SbA04Dj6jywJFVwK2lj88fr/NB+ToEPB46t86CSVME06dS31uQHiyfAJcDJfbxPkobl74BvD+ODF0tsxwMHDOPAktSHu0mLHQzFQtcA9wE2AyuHdXBJWsTvAWcO68MXGgGehMlPUpwzGWLyg/lHgJuA84CJYR5ckubxEGl/j7uHeZC5RoCzhQ+Tn6Qo72fIyQ/mToBvBw4c9oElaR7fIlV+h673FHhvUuFj1SgOLkk9tgIvIt34PHS9I8ATMflJivNRRpT84BdHgB3SrI+Jma+ne16bfez9evbPE/M8duZ5rvf75ztGt+7n9+x5bqHP7j5+7+tzff987Zjtl8Xe00/fzPfaXP0y1zHmMt/7FmvnfO9Z6Jjdf87Zj8Gb69XrB8DLSYsejMSg22Iq1kJJqd/Xqia77udmfxn0fl9vMl/otZxfkL8LfGCONo2r3l9As/82u7seZ2Oy5/nZ75/uem1yjuj+vOkF3rer61hzvXdHTzu633sTIyh8dLPSW7beH/ysnbEK9LroBgSZBn6HNCd2N3Mnk9lkRc9jd9Dz9dgyAapEL45uQJC7gYswcdXG6zAqzVJg/+hGBLkdk1+tTIAqzQbG906Fm6Ib0DYmQJXm0OgGBNoc3YC2MQGqNC+NbkCgWnZC01NMgCrJBOM7ApwGbohuRNuYAFWS9cDa6EYE+Slwf3Qj2sYEqJIcxvj+zF6LFeDajesPk8r0yugGBLoiugFtZAJUKZaSFuodV5dGN6CNTIAqxYuB1dGNCLIDuCq6EW1kAlQpXhvdgEDXAY9EN6KNTIAqQQc4KroRgS6KbkBbmQBVgg3AxuhGBPpOdAPaygSoErye8f1Z3YYFkKEZ1x8qlaMDvCm6EYEuJ20RqSEwAarpNjDeuxSeG92ANjMBqul+n/H9OZ0GvhHdCEkxJoAtwJNjGjfjqu1DNa6/WVWGTcC+0Y0I9C88tXGRhsAEqCb7w+gGBDs9ugGSYqwBthN/GhoVW/D0d+gcAaqp3kpaAGFcnYmnv9JYmgB+QvwoLCqmGO9bf6SxdhzxSSgyrsSzs5Gwk9VE74tuQLBTcfVnaSwdTvwILDIeY3zXPZTG3neIT0KRcergXSipRJtIBYDoJBQVU8Ahg3aipPJ0gAuJT0KR8f2Be1FSkY5ivEd/T5Kq35LGzBLgauITUGRsmekHjZC3wagJ3oo3/p4MTEY3QtJorQLuIX4EFhn3AcsH7UhV5whQ0T5KWvhgnH0CeDy6EZJG6xBgJ/EjsMh4AEd/0thZAlxBfAKKjj8btCMllecjxCef6LgDWDZoR0oqy0GM92Kns/HHg3akpLIsBzYTn3yi42pc8VkaO58hPvlExxRwxKAdKaksx+F0tyeBr+EtaNJY2Qg8SnzyiY7HGO+tPqWxsxK4nvjk04T4yIB9KakgS4BziU88TYhr8LYXaWx0gFOITzxNiF3AywbrTkkl8Wbnp+LTA/alpIL8MWnUE514mhA34nxfaWz8ASa/2fDUVxojx+EKL91xwmDdKakUb8GRX3dcgsvcS2PheEx+3fEg3vAstV4HOBGnuHXHFHD0IJ0qqfmWAV8iPuE0LT4+SKdKar69gYuJTzZNi/Pwup/UaocCPyM+2TQttuAGT1JrdYB342rOc8WjuLex1Fp7kdaxi040TYxdWPSQWusoPOVdKN6T37WSmmo18AW8xWWhOBlXd5Za51jgLuITTJPjNNzYSGqVjcA3iU8uTY9zgaWZfSypYVaT1qxzIYPF40Jc3kpqhRXAB0hzV6MTSwnxfdIeJ5IKtpxUvbyH+KRSSlxBGilLKtQq4M+xwFE1LpvpO0kFWk+6ZeNh4pNJaXExJj+pOEuA1wBnY3EjN84jXSeVVIj1wEdJk/OjE0jJcQbu4ysVYQ3wdtLpmqO9weMzuKyV1GhrSUnvPFyhpa6YAv4Sp7dJjTMBHEL6D3oF7sFRd2wnbewkqSE2kEZ5pwMPEJ8k2hr3AYf1+W+iltgjugH6BctIi2oeAryUtPKyKwwP37XAG4Dbohui0TIBxuiQZmLsT0p4LwQOmvmzF95H6/8B/wXYGt0QjZ4JcLiWkG6gXU86lX3uzONGUgHDpZTi7AY+DPw1MB3cFgWpIwEuI+0Q9giwA5gk/XC1/YdqCWk5pFXAPqRT1bXAs2f+vO/M40qsKDbN3cB/Ai6Ibohi1TECOYC0QsY0KfFtBR4HtgEPAT8nJcbHZ/786Myft878eRspac4+t63ruemuz+1+zE2una6Y6IoOKZGvICWspaRT1L1mnnsWKcGtJE2GXzPz/Oqu71cZLiAlv7ujG6J4dSTA2UUhO6RR0WoGWzGjO7nt7opJnj66nGbh0WZ3suv+85Ke6HS9rnaaBE4A/or0MyPVkgDrvo7VnYRmE5Q0iFuBPwS+F90QNUsdIx4v5KuppoH/C7wEk5/mUEfy8rRRTXQn8E7gn6MbouaqI3l5iqommQb+nnRvpclPC6pjBGgCVFPcBrwL+Hp0Q1SGOkaArpemaLuBTwIvwOSnCuq8DUaK8D3Stb5roxui8ngNUKW6m3Rry8sx+SmT1wBVmm3A3wInkqZfStmaeCO0NJfdwD8BHyTd2CwNzPsA1XTTwEXAX+DNzKpZHQnwmTV8hjSXq4D/Sarstn11IQXwGqCa6DrSwgVn4sIFGiJvg1GTXEcqbpxJWr1FGioToJrgh8BJpKlrjvg0MiZARZkmLU76ceDbeI1PAbwGqFGbBP4R+DRp5CeF8T5Ajcr9wOeBz5CWqpLCmQA1TNPA5cAppO0nd8Q2R/pFJkANwyPAV4DPAj8Kbos0LxOg6rIbuBQ4lXQbixuNq/GsAmtQtwJfBk4Dbgpui1SJCVA57iYtTHAa8AO8d0+FMgGqX/cC/wKcTlqcwIKGiud9gFrIT0kLEZxBWonFpKdWMQGq2zRpdeVvAF8jVXCdk6vWsgqsh0iju3OAb5FGfU5L01gYNHl1cEHU0kySpqBdAJxHulHZU1uNJRNg++0mLSx6EXAh6V69h0JbJDVEHQnQU+Bm2Uoa1V0KXEK6TcWbkqU51JEALYLEmQRuII3wLiMluxvwvjypLybAMkyTtoO8gVSZvXrm8Trg8cB2SUUzATbLNCmh3U6aVnY9KcldN/Oct6RINfIa4OjNJrl7gdtIc2lvAX488/WdWJWVRsIq8Oh8ijSj4qekxUFNclLhVgFPGn3FT4A1ed0saRgGHb0twVkD/VoHfAmvmUqNUUcCVP+OIG34LakF1gNTxJ9elhRTwDE5nS2pXoOOAJfW8BnjpgN8AdgQ3RBp3A2avO4lrQ6salaQKsLLoxsiaTCHAduJP7UsMU7HEbQUZs8aPuMO4GHgtTV81rjZSLop+tLohkjK1wE+R/yIqsTYCRxevcslNcky4PvEJ5QS4x5gbfUul9Qka4G7iE8oJcYluMOeVDyLIvlxSkZ/S8pURxGkl0WRfC8iLZbwo+iGSMo3e7Nv9IiqxHgMOKh6l0tqkqVYFMmNW4DV1btcUpPsQ6pwRieUEuNsXGxWGqphXAPsthW4AviPIzhW2+w38/jdyEZIGtzxxI+oSoxdwFEZ/S2pQSyK5MeDpGXHJBXMmSL5cfVM/0kqmDNF8uOLGf0tqWE24UyR3HhH9e6W1DTH41L6ObEdODSjvyU1SAc4lfiEUmLcgdtrSsWzKJIf5+OOfFLx1uFMkdz4ePXultQ0m0irIkcnlNJiCji2endLapp3E59QSoyHgf0z+ltSw3yR+IRSYlwPrMzob0kNsoy0cEJ0Qikx3F5TaoG1wH3EJ5QS4wMZ/S2pYTZhUSQndgJHVO9uSU1jUSQv7sPtNaXidbAokhvfx+01peItBy4jPqGUGJ/J6G9JDbMOZ4rkxlsr97akxjkcl8/KiSdwe02pFd5DfEIpMbbg9ppS8SyK5Mc5uL2mVLzlOFMkN07I6G9JDbMOZ4rkxC7g9dW7W1LTHI4zRXLiQZ7abF1SwSyK5MXVpEsJkgr3JeITSonxJVw5RireMuBK4hNKiXF8Rn9Laph1WBTJie3Ay6p3t6SmOQKLIjnxM2DvjP6W1DDvJT6hlBjfwe01Ncb2jG5ATS4Dfh04ILohhVkH/ArwzeB2SBrQciyK5MQUcFxGf0tqmH2xKJITj+H2mlIrWBTJixtxe02NmbZcA+x2G7ANeFV0QwqzGthA2mLzyeC2SCPRxgQIqSjyHOD50Q0pzAZgB/C96IZIGoxFkbzYBRyZ0d+SGsaiSF7cR7pFRlLhLIrkxWWk+dZSa7X1GmC320jXtTytq+bXgH8DfJ2UEKXWGYcECPADLIrkeCFwF3BVdEMkDWY5aUHQ6FPL0uIJ4OCM/pbUMPsCDxCfVEqLLcBeGf0tqWGOxKJITpyL22uqZcblGmC3LVgUybGelAAviG6IpMF0gH8gflRVWkwBR2f0t6SGsSiSFw/j9ppSK6zHokhObMbtNaVWsCiSF6fldLbUJONYBOm1BZgEXhndkMLsDzxKuslcUsE6pBFN9KiqtNgJHJbR35IaZgUWRXLiLmCfjP6W1DAWRfLiQmBpRn9LaphXY1EkJz6d09lSJIsgT3crFkVyvIS09Ni10Q2RNBiLInnxGHBgRn9LapjlwDXEJ5XS4mZgVUZ/S2oYiyJ5cRauHKMCeA1wYQ+Rpn0dRzotVn+eS9pd7qLohkgLMQEu7lbSf+YjohtSmMOAK0j9J6lgHeCrxJ9alhYPkFbhllQ4Z4rkxRW4vabUCvthUSQnvpDT2ZKa5zU4UyQn3pbT2ZKa58+JTyilxXbcXlNqBYsiefET3F5TaoUVOFMkJ84DlmT0t6SGsSiSFx/L6WxJzfMa0o3S0UmlpNgFHJPT2ZKa50PEJ5XS4mFgY05nS2qWDnA68UmltNhMupYqqXDLSf+ho5NKaXEaLjQhtcJ+wIPEJ5XS4r05nS2peSyKVI+dwKaMvpbUQBZFqsc9uL2m1AoWRfLiYtxeU2oFZ4rkxSk5nS2peTZgUaRqTAFvyelsSc1zFBZFqobba0otYlGketyC22tKrTCBRZGcOBu315RaYQXOFMmJv8zpbEnNsx9pEYDopFJS7CLdXC6pBSyKVI8HcXtNqTU+QnxSKS2uJC04IalwHeAM4pNKaXEqrhwjtcIK4Hrik0pp8Y6czpbUPBuwKFI1ngAOzelsSc3zeiyKVI07gDU5nS112zO6AeJm0n/qw6MbUpBnAQcBXyHNHZaymACb4VJgf+B50Q0pyLOBXyLtMyypcCtxpkjVmMLtNaXWcPms6vEobq8ptYZFkepxI26vqQxeA2yem4E9gFdEN6Qgq4Hn8NTN5VJfTIDNdAlwAOmUWP3ZCGwj9Z2kwq3EmSJVYyfeTiS1xkacKVI17gHW5nS2pOY5GosiVeMS3F5TffAaYPPdhEWRqv4dqTByTnRDJA2uA3yN+JFVSTEFvDWjryU1kEWR6vEY8OKczpbUPBZFqsctpNNhSS1gUaR6nIPba2oOFkHKcxPpP/PLoxtSkOfMPH43shGS6jEBnEX8yKqk2EXakU9SC6wkLQIQnVhKigeB9TmdLal5LIpUj6txe02pNd6IRZGq8aWsnlbrWAQp343AEuCw6IYU5ADS6fDl0Q2RNDiLItVjO/CynM6W1DyrcKZI1fgZsHdOZ0tqnv2xKFI1vkO6hKAx5DXAdrmfNPXr90gLKGhx64BfBr4V3A4FMAG2j0WR6n4T+DFwXXRDJA1uAjib+NPLkuJRUnVYUgusJO0wF51YSorrZ/pNUgtsJI1sohNLSXEGXj8dG14DbLcHSNe23kRaVl+Lex6wA/hedEM0fCbA9rsReAYWRarYBFwGbAluh6QaWBSpHveRbpGR1AKrcPmsqnEZbq8ptYYzRarHZ7N6WlIjHYPLZ1WNP8rqaUmNdCLxSaWkeAK315Raw6JI9diC22tKrbEKZ4pUjXNxe02pNfbHmSJV48SsnpbUSMcAU8QnllJiF2lzekktYVGkWjwI7JfV05IapwOcQ3xiKSmuwe01pdZYRVpNOjqxlBT/gCvHSK1hUaR6vDurpyU10rFYFKkSO3GlHalVTiI+sZQUPwP2yeppSY0zgUWRqnEhrhwjtcZqnClSNT6d1dOSGukALIpUiSngzVk9LamRLIpUi8dwe02pVSyKVIubcXtNqTUmSCuhRCeWkuJreJO01BqrcaZI1fhQVk9LaqQDSNe4ohNLKbELODKrpyU1kkWRavEAsG9WT0tqpI8Rn1hKisuAZVk9LalxLIpUj89hUURqDYsi1WIKeFtWT0tqpANxpkiVeAI4JKunJTXScVgUqRI/AfbK6mnVbs/oBqh41wG/DLw0uiGFWAm8APhH0i8OBTIBqg4XAS8B1kc3pBC/DjwDOD+6IZLqYVGkWkwBb8zqaUmNdCDOFKkSD+P2mlKrvBmLIlViM26vGcZrgKrbZuBXgEOjG1KIvUjXTs8kJURJhZsAvkn86KqkeG9WT0tqpL2wKFIldgKbcjpaUjMdhEWRKnEXbq8ptYpFkWpxMW6vOTIWQTRsFkWqWUuaLXJudEMk1WMCOI/40VUpMQW8JaunJTXSamAL8cmllHiMdGO5pJawKFItbgZWZfW0pEayKFItziJdQtAQWATRqG0GngX8VnRDCvFc0u5yF0U3RFI9lmBRpErsAl6T1dOSGmkvLIpUCbfXlFrGoki1uBK315Ra5Q+wKFIlTs3rZs3FIoiiXYtFkSoOBO4DfhjdEEn1sChSLbbj9ppSq1gUqRZ3AGuyelpSI1kUqRbnkUbPyuQ1QDXJPcDPgKOBPYLbUoJ9gWcC345uSKlMgGqaa4FfxWtc/fpN0pzh66MbIqkeE6RNw6NPMUuJh4GNWT0tqZH2An5CfHIpJTYDK7J6WlIjHQQ8QXxyKSW+CnSyenpMeQ1QTXYP8FMsivTrN4DHgUujGyKpPicTP7oqJXYCh+d1s6QmWoJFkSpxD2lzJUktsQaLIlXiEtxeU2qVg3GmSJU4Ja+bx4dFEJXkrpn4D1gU6ceLgNuBa4LbIalGFkX6jydItxNJagmLItXiFtK+zJJawqJItTgHt9eUWuXFOFOkSnw0r5slNdVbiE8spcQu4Ki8bpbUVJ8mPrmUEg8C6/O6WVITLQG+Q3xyKSWuBJZn9bSkRlpD2icjOrmUEl/ElWOkVjkYiyJV4vi8bpbUVG/Fjdb7je3Ay7J6WVJjWRTpP+4A9s7rZklNtBSLIlXifNxeU2qVvSK55pEAAABTSURBVHGmSJX4RF43S2qqQ7Ao0m9MAcfmdbOkpvojLIr0G4/i9ppS6/xv4pNLKXEjY7S9potKahwsAb4JHJrxvdPzfF236QZ9/pnAfx1iWxrj/wNsbDebVf87uQAAAABJRU5ErkJggg=="
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.provisionalUnitPricePerTon?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
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
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            R
                          </span>
                          <span style={{ marginRight: '10px' }}>
                            Margin Money (INR){' '}
                          </span>
                          <span
                            style={{
                              fontWeight: 'bold',
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
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.marginMoney?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
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
                          <span style={{ marginRight: '10px' }}>
                            Total SPDC Amount Req. (INR)
                          </span>
                          <span
                            style={{
                              fontWeight: 'bold',
                            }}
                          >
                            (P-R)
                          </span>
                        </p>
                      </td>
                      <td
                        align="left"
                        style={{ borderBottom: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 30px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.totalSPDC?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        height="20"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      ></td>
                      <td height="20"></td>
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
                            T
                          </span>
                          <span style={{ marginRight: '10px' }}>
                            Amount per SPDC (INR)
                          </span>
                          <span
                            style={{
                              fontWeight: 'bold',
                            }}
                          >
                            [(S/H)]
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
                            padding: '11px 15px 30px 24px',
                            marginBottom: '0',
                          }}
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="Rupee"
                            height="13"
                          />{' '}
                          {marginData?.calculation?.amountPerSPDC?.toLocaleString(
                            'en-In',
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          ) ?? 0}
                        </p>
                      </td>
                    </tr>
                    {/* <tr>
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
                                width: '35px', float:'left', height:'30px'
                              }}
                            >
                              U
                            </span>
                            <span style={{marginRight: '10px'}}>Revised Net Order Value (INR)</span>
                            <span
                              style={{
                                fontWeight: 'bold'                                
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
                      </tr> */}
                    {/* <tr>
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
                                width: '35px', float:'left', height:'30px'
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
                                width: '35px', float:'left', height:'30px'
                              }}
                            >
                              W
                            </span>
                            <span style={{marginRight: '10px'}}>Revised Margin Money Calculation (INR)
                            <span
                              style={{
                                fontWeight: 'bold'
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
                      </tr> */}
                    {/* <tr>
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
                                width: '35px', float:'left', height:'30px'
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
                                width: '35px', float:'left', height:'30px'
                              }}
                            >
                              Y
                            </span>
                            <span style={{marginLeft: '10px'}}>Margin Money Payable (INR)</span>
                            <span
                              style={{
                                fontWeight: 'bold'                                
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
                      </tr> */}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    );
    // const doc = new jsPDF('p', 'pt', [1000, 1000])
    const doc = new jsPDF('p', 'pt', [1500, 1500]);
    doc.html(ReactDOMServer.renderToString(element), {
      callback: function (doc) {
        doc.save('MarginMoney.pdf');
      },
      // margin:margins,
      autoPaging: 'text',
    });
  };

  return (
    <>
      <div className={`${styles.root_container} bg-transparent`} ref={toPrint}>
        <div className={styles.head_container}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} mr-2 image_arrow`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="Arrow"
              onClick={() => Router.push('/margin-money/id')}
            />
            <h1 className={`${styles.heading} heading`}>
              Margin Money Preview
            </h1>
          </div>
        </div>
        <div
          className={`${styles.term_container} download-pdf-bg container-fluid`}
        >
          <Row>
            <Col md={4} className={`${styles.left} align-self-end`}>
              <div>
                <span className={`${styles.termSub_head} text-color`}>
                  Order ID:
                </span>
                <span className={`${styles.termValue} text-color`}>
                  {marginData?.order?.orderId}
                </span>
              </div>
              <div>
                <span className={`${styles.termSub_head} text-color`}>
                  Buyer:
                </span>
                <span className={`${styles.termValue} text-color`}>
                  {marginData?.company?.companyName}
                </span>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <span className="download-pdf-title">MARGIN MONEY</span>
            </Col>
            <Col md={4} className={`${styles.left} ${styles.right}`}>
              <div>
                <span className={`${styles.termSub_head} text-color`}>
                  Date:
                </span>{' '}
                <span className={`${styles.termValue} text-color`}>
                  {moment(marginData?.createdAt).format('DD-MM-yy')}
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
                  <th>Margin Money</th>
                </tr>
                <tbody>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>A</span>
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
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>B</span>
                      <span className={`ml-2`}>Unit Price</span>
                    </td>
                    <td className={`${styles.good} `}>
                      USD{' '}
                      {marginData?.order?.perUnitPrice?.toLocaleString(
                        'en-In',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      ) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>C</span>
                      <span className={`ml-2`}>Conversion Rate</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {marginData?.conversionRate}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>D</span>
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
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>E</span>
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
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>F</span>
                      <span className={`ml-2`}>Tolerance (+/-) Percentage</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {addPrefixOrSuffix(
                        marginData?.order?.tolerance
                          ? marginData?.order?.tolerance?.toLocaleString(
                              'en-In',
                              {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              },
                            )
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
                    <td className={`${styles.good} `}>
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
                      <span className={`${styles.sno} text1`}>H</span>
                      <span className={`ml-2`}>No. of PDC's</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {marginData?.numberOfPDC?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>I</span>
                      <span className={`ml-2`}>Additional PDC’s</span>
                    </td>
                    <td className={`${styles.highlight} satisfactory`}>
                      {/* {marginData?.additionalPDC} */}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}></span>
                      <span className={`ml-2`}></span>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table
                className={`${styles.table} table`}
                cellPadding="0"
                cellSpacing="0"
              >
                <tr>
                  <th>Calculation</th>
                  <th></th>
                </tr>
                <tbody>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>J</span>
                      <span className={`ml-2`}>Order Value</span>
                      <span className={`${styles.formula} text1 ml-2`}>
                        (A*B)
                      </span>
                    </td>
                    <td>
                      USD{' '}
                      {marginData?.calculation?.orderValue?.toLocaleString(
                        'en-In',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      ) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>K</span>
                      <span className={`ml-2`}>Order Value (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>
                        (J*C)
                      </span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.orderValueInINR?.toLocaleString(
                        'en-In',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      ) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>L</span>
                      <span className={`ml-2`}>
                        Usance Interest (%) for 90 days (INR)
                      </span>
                      <span className={`${styles.formula} text1 ml-2`}>
                        (K*D*90)/365
                      </span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.usanceInterest?.toLocaleString(
                        'en-In',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      ) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>M</span>
                      <span className={`ml-2`}>Trade Margin (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>
                        (K*E)
                      </span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.tradeMargin?.toLocaleString(
                        'en-In',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      ) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>N</span>
                      <span className={`ml-2`}>Gross Order Value (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>
                        (K+L+M)
                      </span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.grossOrderValue?.toLocaleString(
                        'en-In',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      ) ?? 0}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>O</span>
                      <span className={`ml-2`}>Tolerance Value (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>
                        (N*F)
                      </span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.toleranceValue?.toLocaleString(
                        'en-In',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      ) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>P</span>
                      <span className={`ml-2`}>Total Order Value (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>
                        (N+O)
                      </span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.totalOrderValue?.toLocaleString(
                        'en-In',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      ) ?? 0}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>Q</span>
                      <span className={`ml-2`}>
                        Provisional Unit Price Per Ton (INR)
                      </span>{' '}
                      <span className={`${styles.formula} text1 ml-2`}>
                        (N/A)
                      </span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.provisionalUnitPricePerTon?.toLocaleString(
                        'en-In',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      ) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>R</span>
                      <span className={`ml-2`}>Margin Money (INR)</span>{' '}
                      <span className={`${styles.formula} text1 ml-2`}>
                        (P*G)
                      </span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.marginMoney?.toLocaleString(
                        'en-In',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      ) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td className="pb-4 border-bottom">
                      <span className={`${styles.sno} text1`}>S</span>
                      <span className={`ml-2`}>
                        Total SPDC Amount Req. (INR)
                      </span>{' '}
                      <span className={`${styles.formula} text1 ml-2`}>
                        (P-R)
                      </span>
                    </td>
                    <td className="pb-4 border-bottom">
                      ₹{' '}
                      {marginData?.calculation?.totalSPDC?.toLocaleString(
                        'en-In',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      ) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td className="pt-4">
                      <span className={`${styles.sno} text1`}>T</span>
                      <span className={`ml-2`}>
                        Amount per SPDC (INR){' '}
                      </span>{' '}
                      <span className={`${styles.formula} text1 ml-2`}>
                        (S/H)
                      </span>
                    </td>
                    <td className="pt-4">
                      ₹{' '}
                      {marginData?.calculation?.amountPerSPDC?.toLocaleString(
                        'en-In',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      ) ?? 0}
                    </td>
                  </tr>

                  {/* <tr className={`${styles.bordertop} border_color`}>
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
                      {marginData?.revisedMarginMoney?.calculation?.additionalAmountPerPDC?.toLocaleString('en-In') ??
                        0}
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
                      {marginData?.order?.quantity} MT
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>V</span>
                      <span className={`ml-2`}>Margin Money (INR) </span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {marginData?.order?.quantity} MT
                    </td>
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
                      {marginData?.order?.quantity} MT
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>X</span>
                      <span className={`ml-2`}>
                        Margin Money Received (INR){' '}
                      </span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {marginData?.order?.quantity} MT
                    </td>
                  </tr>
                  <tr>
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
                      {marginData?.revisedMarginMoney?.calculation?.additionalAmountPerPDC?.toLocaleString('en-In') ??
                        0}
                    </td>
                  </tr> */}
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}></span>
                      <span className={`ml-2`}></span>
                    </td>
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
        leftButtonTitle={'Margin Money'}
        rightButtonTitle={'Send to Buyer'}
      />
    </>
  );
}

export default Index;
