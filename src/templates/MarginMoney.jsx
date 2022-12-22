import { returnReadableNumber } from '@/utils/helpers/global';
import moment from 'moment';
import { addPrefixOrSuffix } from 'utils/helper';

export default function MarginMoney(marginData) {
 
  return (
    <table width="1500px" cellPadding="0" cellSpacing="0" border="0">
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
                    {marginData.marginData?.order?.orderId}
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
                    {marginData.marginData?.company?.companyName}
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
                    {moment(marginData.marginData?.createdAt?.slice(0, 10)).format('DD-MM-yy')}
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
                    <td width="33%" bgColor="#FAFAFB" align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
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
                    <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
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
                        {marginData.marginData?.order?.quantity ? returnReadableNumber(marginData.marginData?.order?.quantity,'en-In',2) + ' '+  marginData?.marginData?.order?.unitOfQuantity : ''}
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
                          {marginData?.marginData?.order?.orderCurrency} {marginData?.marginData?.order?.perUnitPrice?.toLocaleString('en-In') ?? 0}
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
                          padding: '11px 15px 38px 35px',
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
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {returnReadableNumber(marginData.marginData?.conversionRate,'en-In',2)}
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
                          padding: '11px 15px 38px 35px',
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
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                         {returnReadableNumber(marginData.marginData?.order?.termsheet?.commercials?.usanceInterestPercetage,undefined,2,2) + '%'}
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
                          padding: '11px 15px 38px 35px',
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
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {marginData?.marginData?.order?.termsheet
                            ? marginData.marginData?.order?.termsheet?.commercials?.tradeMarginPercentage?.toLocaleString(
                                'en-In',
                              ) + ' %'
                            : ''}
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
                          padding: '11px 15px 38px 35px',
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
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                          {marginData.marginData?.order?.tolerance ? returnReadableNumber(marginData.marginData?.order?.tolerance,undefined,2,2) : 0} %
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
                          padding: '11px 15px 38px 35px',
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
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {
                        (marginData.marginData?.order?.termsheet?.transactionDetails?.marginMoney
                          ? returnReadableNumber(marginData.marginData?.order?.termsheet?.transactionDetails?.marginMoney ,undefined,2,2)
                          : 0)
                          +
                        '%'
                      }
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
                          padding: '11px 15px 38px 35px',
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
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {marginData.marginData?.numberOfPDC?.toLocaleString('en-In') ?? 0}
                      </p>
                    </td>
                  </tr>
                  {/* <tr>
                    <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
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
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {marginData.marginData?.additionalPDC}
                      </p>
                    </td>
                  </tr> */}
                  <tr>
                    <td width="33%" bgColor="#FAFAFB" align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
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
                    <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
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
                        {marginData.marginData?.order?.orderCurrency}{' '}
                      {marginData.marginData?.calculation?.orderValue?.toLocaleString(marginData.marginData?.order?.orderCurrency=="INR"?
                          'en-In':"en-En", {
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
                        INR {marginData.marginData?.calculation?.orderValueInINR?.toLocaleString('en-In', {
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
                        INR {marginData.marginData?.calculation?.usanceInterest?.toLocaleString('en-In') ?? 0}
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
                        INR {marginData.marginData?.calculation?.tradeMargin?.toLocaleString('en-In', {minimumFractionDigits: 2, maximumFractionDigits: 2,}) ?? 0}                        
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
                        <span style={{ marginRight: '10px' }}>Gross Order Value (INR)</span>
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
                        INR {marginData.marginData?.calculation?.grossOrderValue?.toLocaleString('en-In') ?? 0}
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
                        <span style={{ marginRight: '10px' }}>Tolerance Value (INR)</span>
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
                        INR {marginData.marginData?.calculation?.toleranceValue?.toLocaleString('en-In') ?? 0}
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
                        <span style={{ marginRight: '10px' }}>Total Order Value (INR)</span>
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
                        INR {marginData.marginData?.calculation?.totalOrderValue?.toLocaleString('en-In') ?? 0}
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
                        <span style={{ marginRight: '10px' }}>Provisional Unit Price Per Ton (INR)</span>
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
                        INR {marginData.marginData?.calculation?.provisionalUnitPricePerTon?.toLocaleString('en-In') ?? 0}
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
                        <span style={{ marginRight: '10px' }}>Margin Money (INR) </span>
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
                        INR {marginData.marginData?.calculation?.marginMoney?.toLocaleString('en-In') ?? 0}
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
                          S
                        </span>
                        <span style={{ marginRight: '10px' }}>Total SPDC Amount Req. (INR)</span>
                        <span
                          style={{
                            fontWeight: 'bold',
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
                        INR {marginData.marginData?.calculation?.totalSPDC?.toLocaleString('en-In') ?? 0}
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
                        <span style={{ marginRight: '10px' }}>Additional Amount Per SPDC (INR)</span>
                        <span
                          style={{
                            fontWeight: 'bold',
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
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          padding: '11px 15px 11px 24px',
                          marginBottom: '0',
                        }}
                      >
                        INR {marginData.marginData?.calculation?.amountPerSPDC?.toLocaleString('en-In') ?? 0}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
}
