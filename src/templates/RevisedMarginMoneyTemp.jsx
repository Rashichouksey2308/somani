import { addPrefixOrSuffix } from 'utils/helper';


export default function RevisedMarginMoney(marginData) {
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
                  ></span>
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
                  ></span>
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
                    22-02-2022
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
                    <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#43C34D',
                          lineHeight: '24px',
                          fontWeight: 'bold',
                          float: 'left',
                          padding: '23px 15px 11px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {(marginData?.order?.quantity ? marginData?.order?.quantity + 'MT': '')}
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
                          padding: '23px 15px 11px 24px',
                          marginBottom: '0',
                        }}
                      >
                       {(marginData?.order?.quantity ? marginData?.order?.quantity + 'MT': '')}
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
                        {marginData?.order?.perUnitPrice?.toLocaleString('en-In') ?? 0}
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
                        {marginData?.order?.perUnitPrice?.toLocaleString('en-In') ?? 0}
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
                    <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          float: 'left',
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {marginData?.conversionRate}
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
                          padding: '11px 15px 38px 24px',
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
                    <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          float: 'left',
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {addPrefixOrSuffix(marginData?.order?.termsheet?.commercials?.usanceInterestPercetage, '%', '')}
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
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {addPrefixOrSuffix(marginData?.order?.termsheet?.commercials?.usanceInterestPercetage, '%', '')}
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
                    <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          float: 'left',
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {addPrefixOrSuffix(marginData?.order?.termsheet?.commercials?.tradeMarginPercentage, '%', '')}
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
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {addPrefixOrSuffix(marginData?.order?.termsheet?.commercials?.tradeMarginPercentage, '%', '')}
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
                    <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          float: 'left',
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {addPrefixOrSuffix(
                          marginData?.order?.tolerance
                            ? marginData?.order?.tolerance?.toLocaleString('en-In', {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
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
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {addPrefixOrSuffix(marginData?.order?.tolerance ? marginData?.order?.tolerance : 0, '%', '')}
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
                    <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          float: 'left',
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {addPrefixOrSuffix(
                          marginData?.order?.termsheet?.transactionDetails?.marginMoney
                            ? marginData?.order?.termsheet?.transactionDetails?.marginMoney
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
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {addPrefixOrSuffix(
                          marginData?.order?.termsheet?.transactionDetails?.marginMoney
                            ? marginData?.order?.termsheet?.transactionDetails?.marginMoney
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
                    <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          float: 'left',
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {marginData?.numberOfPDC?.toLocaleString('en-In') ?? 0}
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
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {marginData?.numberOfPDC?.toLocaleString('en-In') ?? 0}
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
                    <td align="left" bgColor="#FFF5E5" style={{ borderRight: '2px solid #cad6e64d' }}>
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#FF9D00',
                          lineHeight: '24px',
                          fontWeight: 'bold',
                          float: 'left',
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        {marginData?.additionalPDC?.toLocaleString('en-In')}
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
                          padding: '11px 15px 38px 24px',
                          marginBottom: '0',
                        }}
                      >
                        -
                      </p>
                    </td>
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
                    <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                      <p
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          float: 'left',
                          padding: '23px 15px 11px 24px',
                          marginBottom: '0',
                        }}
                      >
                      {marginData.marginData?.order?.orderCurrency}{' '} {marginData?.calculation?.orderValue?.toLocaleString(
                         marginData.marginData?.order?.orderCurrency=="INR"?
                          'en-In':"en-En",
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
                          padding: '23px 15px 11px 24px',
                          marginBottom: '0',
                        }}
                      >
                         {marginData.marginData?.order?.orderCurrency}{' '} {marginData?.calculation?.orderValue?.toLocaleString(

                          marginData.marginData?.order?.orderCurrency=="INR"?
                          'en-In':"en-En",
                         ) ?? 0}
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
                        ₹ {marginData?.calculation?.orderValueInINR?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.orderValueInINR?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.usanceInterest?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.usanceInterest?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.tradeMargin?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.tradeMargin?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.grossOrderValue?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.grossOrderValue?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.toleranceValue?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.toleranceValue?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.totalOrderValue?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.totalOrderValue?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.provisionalUnitPricePerTon?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.provisionalUnitPricePerTon?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.marginMoney?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.marginMoney?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.totalSPDC?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.calculation?.totalSPDC?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.revisedMarginMoney?.calculation?.additionalAmountPerPDC?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.revisedMarginMoney?.calculation?.revisedNetOrderValue?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.revisedMarginMoney?.calculation?.marginMoney?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.revisedMarginMoney?.calculation?.revisedMarginMoney?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.revisedMarginMoney?.calculation?.marginMoneyReceived?.toLocaleString() ?? 0}
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
                        ₹ {marginData?.revisedMarginMoney?.calculation?.marginMoneyPayable?.toLocaleString() ?? 0}
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
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
}
