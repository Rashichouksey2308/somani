import moment from 'moment';

export default function AmendLetterTemp(lcModuleData) {
  let d = new Date();

  return (
    <table width="1500px" cellPadding="0" cellSpacing="0" border="0">
      <tr>
        <td valign="top" style={{ paddingBottom: '5px' }}>
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
                    {lcModuleData.lcModuleData?.order?.orderId}
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
                    {lcModuleData.lcModuleData?.company?.companyName}
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
                  AMENDED LETTER OF CREDIT
                </h2>
              </td>
              <td valign="bottom" align="right" width="33%">
                <span
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '25px',
                    fontWeight: '500',
                    padding: '10px 25px 0 0',
                  }}
                >
                  Documentary Credit Number:{' '}
                  <span
                    style={{
                      lineHeight: '24px',
                      fontWeight: 'normal',
                      opacity: '0.7',
                    }}
                  >
                    {lcModuleData.lcModuleData?.lcApplication?.documentaryCreditNumber}
                  </span>
                </span>
                <br />
                <span
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '25px',
                    paddingRight: '25px',
                    fontWeight: '500',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: '90px',
                      height: '50px',
                    }}
                  >
                    Date:{' '}
                  </span>
                  <span
                    style={{
                      lineHeight: '24px',
                      fontWeight: 'normal',
                      opacity: '0.7',
                    }}
                  >
                    {moment(d).format('DD.MM.yyyy')}
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
              marginBottom: '26px',
              border: '2px solid rgba(202, 214, 230, 0.3)',
            }}
            cellPadding="0"
            cellSpacing="0"
            border="0"
          >
            <tr>
              <td valign="top" align="left">
                <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                  <tbody>
                    <tr>
                      <td
                        width="40%"
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
                          <span
                            style={{
                              display: 'inline-block',
                              width: '66px',
                              color: '#111111',
                              fontWeight: '500',
                              color: '#111111',
                              fontWeight: '500',
                            }}
                          >
                            40A
                          </span>
                          FORM OF DOCUMENTARY CREDIT
                        </p>
                      </td>
                      <td
                        width="60%"
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
                            padding: '16px 15px 16px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {lcModuleData.lcModuleData?.lcApplication?.formOfDocumentaryCredit?.toUpperCase()}
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
                          <span
                            style={{
                              display: 'inline-block',
                              float: 'left',
                              height: '30px',
                              width: '66px',
                              color: '#111111',
                              fontWeight: '500',
                            }}
                          >
                            40E
                          </span>
                          APPLICABLE RULES
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
                            padding: '16px 15px 16px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {lcModuleData.lcModuleData?.lcApplication?.applicableRules?.toUpperCase()}
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
                          <span
                            style={{
                              display: 'inline-block',
                              float: 'left',
                              height: '30px',
                              width: '66px',
                              color: '#111111',
                              fontWeight: '500',
                            }}
                          >
                            31D
                          </span>
                          DATE OF EXPIRY
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
                            padding: '16px 15px 16px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {moment(lcModuleData.lcModuleData?.lcApplication?.dateOfExpiry).format('DD-MM-YYYY')}
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
                          <span
                            style={{
                              display: 'inline-block',
                              float: 'left',
                              height: '30px',
                              width: '66px',
                              color: '#111111',
                              fontWeight: '500',
                            }}
                          >
                            31D
                          </span>
                          PLACE OF EXPIRY
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
                            padding: '16px 15px 16px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {lcModuleData.lcModuleData?.lcApplication?.placeOfExpiry?.toUpperCase()}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{
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
                          <span
                            style={{
                              display: 'inline-block',
                              float: 'left',
                              height: '30px',
                              width: '66px',
                              color: '#111111',
                              fontWeight: '500',
                            }}
                          >
                            51D
                          </span>
                          LC ISSUING BANK
                        </p>
                      </td>
                      <td align="left">
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
                          {lcModuleData.lcModuleData?.lcApplication?.lcIssuingBank?.toUpperCase()}
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
  );
}
