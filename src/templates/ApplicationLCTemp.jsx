import _get from 'lodash/get';
import moment from 'moment';

export default function ApplicationLCTemp(lcModuleData, lcModule) {
  let d = new Date();
  return (
    <table width="1500px" cellPadding="0" cellSpacing="0" border="0">
      <tr>
        <td valign="top" style={{ paddingBottom: '20px' }}>
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
                    {lcModuleData?.order?.orderId}
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
                    {lcModuleData?.company?.companyName}
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
                  APPLICATION FOR LETTER OF CREDIT
                </h2>
              </td>
              <td valign="bottom" align="right" width="33%">
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
                    {lcModuleData && lcModuleData?.lcApplication?.formOfDocumentaryCredit ? (
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {lcModuleData?.lcApplication?.formOfDocumentaryCredit?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.applicableRules ? (
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {lcModuleData?.lcApplication?.applicableRules?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.dateOfExpiry ? (
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {moment(lcModuleData?.lcApplication?.dateOfExpiry).format('DD-MM-YYYY')}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.placeOfExpiry ? (
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {lcModuleData?.lcApplication?.placeOfExpiry?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.lcIssuingBank ? (
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
                              51D
                            </span>
                            LC ISSUING BANK
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {lcModuleData?.lcApplication?.lcIssuingBank?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.applicant ? (
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
                              50
                            </span>
                            APPLICANT
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {lcModuleData?.lcApplication?.applicant?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.beneficiary ? (
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
                              59
                            </span>
                            BENEFICIARY
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.beneficiary?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.currecyCodeAndAmountValue ? (
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
                              32B
                            </span>
                            CURRENCY CODE &amp; AMOUNT
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
                              textTransform: 'uppercase',
                            }}
                          >
                            USD{' '}
                            {lcModuleData?.lcApplication?.currecyCodeAndAmountValue?.toUpperCase()
                              ? lcModuleData?.lcApplication?.currecyCodeAndAmountValue?.toUpperCase()
                              : 0}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.tolerancePercentage ? (
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
                              39A
                            </span>
                            TOLERANCE (+/-) PERCENTAGE
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {addPrefixOrSuffix(
                              lcModuleData?.lcApplication?.tolerancePercentage?.toLocaleString('en-IN', {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              }),
                              '%',
                              '',
                            )}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.creditAvailablewith ? (
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
                              41A
                            </span>
                            CREDIT AVAILABLE WITH
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.creditAvailablewith?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.creditAvailableBy ? (
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
                              41B
                            </span>
                            CREDIT AVAILABLE BY
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.creditAvailableBy?.toUpperCase()}{' '}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.atSight ? (
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
                              42C
                            </span>
                            DRAFT AT
                            <br />
                            {lcModuleData?.lcApplication?.atSight?.toUpperCase() == 'AT SIGHT' ? null : `NO. OF DAYS`}
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {lcModuleData?.lcApplication?.atSight?.toUpperCase()} <br />
                            {lcModuleData?.lcApplication?.numberOfDays}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.drawee ? (
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
                              42A
                            </span>
                            DRAWEE
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.drawee?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.deferredPayment ? (
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
                              42P
                            </span>
                            DEFERRED PAYMENT
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {lcModuleData?.lcApplication?.deferredPayment?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.partialShipment ? (
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
                              43P
                            </span>
                            PARTIAL SHIPMENT
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.partialShipment?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.transhipments ? (
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
                              43T
                            </span>
                            TRANSHIPMENTS
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {lcModuleData?.lcApplication?.transhipments?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.shipmentForm ? (
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
                              44A
                            </span>
                            SHIPMENT FROM
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.shipmentForm?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                  </tbody>
                  <tbody>
                    {lcModuleData && lcModuleData?.lcApplication?.portOfLoading ? (
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
                              44E
                            </span>
                            PORT OF LOADING
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.portOfLoading?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.portOfDischarge ? (
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
                              44F
                            </span>
                            PORT OF DISCHARGE
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {lcModuleData?.lcApplication?.portOfDischarge?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.latestDateOfShipment ? (
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
                              {' '}
                              44C
                            </span>
                            LATEST DATE OF SHIPMENT
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {moment(lcModuleData?.lcApplication?.latestDateOfShipment?.split('T')[0]).format(
                              'DD-MM-YYYY',
                            )}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.DescriptionOfGoods ? (
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
                              45A
                            </span>
                            DESCRIPTION OF THE GOODS
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.DescriptionOfGoods?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    <tr height="67">
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
                          46A DOCUMENT REQUIRED:
                        </h3>
                      </th>
                    </tr>
                    {lcModuleData &&
                      lcModuleData?.documentRequired?.map((doc, index) => (
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
                                {index + 1}
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
                                padding: '16px 15px 16px 24px',
                                marginBottom: '0',
                                textTransform: 'uppercase',
                              }}
                            >
                              {doc}
                            </p>
                          </td>
                        </tr>
                      ))}
                    {/* <tr>
                    <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                      <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>1</span></p>
                    </td>
                    
                  </tr> */}
                    {/* <tr>
                    <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)'}}>
                      <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>2</span></p>
                    </td>
                    <td align='left'>
                      <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>value</p>
                    </td>
                  </tr> */}
                    <tr height="67">
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
                          47A ADDITIONAL CONDITIONS:
                        </h3>
                      </th>
                    </tr>

                    <tr></tr>
                    {_get(lcModule, 'data[0].order.generic.productSpecifications.specificationTable', []).length > 0 ? (
                      <>
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
                                padding: '19px 15px 34px 35px',
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
                                1
                              </span>
                            </p>
                          </td>
                          <td
                            align="left"
                            style={{
                              borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                              padding: '25px 24px',
                            }}
                          >
                            <table
                              width="80%"
                              cellPadding="10"
                              cellSpacing="0"
                              border="0"
                              style={{
                                borderTop: '1px solid #CAD6E6',
                                borderRight: '1px solid #CAD6E6',
                              }}
                            >
                              <tr
                                style={{
                                  fontSize: '20px',
                                  color: '#111111',
                                  lineHeight: '24px',
                                }}
                              >
                                {_get(lcModule, 'data[0].order.generic.productSpecifications.specificationTable', []) &&
                                  _get(lcModule, 'data[0].order.generic.productSpecifications.specificationTable', [])
                                    .length > 0 &&
                                  Object.keys(
                                    _get(
                                      lcModule,
                                      'data[0].order.generic.productSpecifications.specificationTable',
                                      [],
                                    )[0],
                                  ).map((val, index) => (
                                    <th
                                      key={index}
                                      style={{
                                        borderBottom: '1px solid #CAD6E6',
                                        borderLeft: '1px solid #CAD6E6',
                                      }}
                                    >
                                      {val}
                                    </th>
                                  ))}
                              </tr>
                              {_get(lcModule, 'data[0].order.generic.productSpecifications.specificationTable', []) &&
                                _get(lcModule, 'data[0].order.generic.productSpecifications.specificationTable', [])
                                  .length > 0 &&
                                _get(
                                  lcModule,
                                  'data[0].order.generic.productSpecifications.specificationTable',
                                  [],
                                ).map((item, index) => (
                                  <tr
                                    style={{
                                      fontSize: '20px',
                                      color: '#111111',
                                      lineHeight: '24px',
                                    }}
                                  >
                                    {Object.values(item).map((value, id) => (
                                      <td
                                        key={id}
                                        style={{
                                          borderBottom: '1px solid #CAD6E6',
                                          borderLeft: '1px solid #CAD6E6',
                                        }}
                                      >
                                        {value}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                            </table>
                          </td>
                        </tr>
                      </>
                    ) : null}

                    {lcModuleData &&
                      lcModuleData?.additionalConditions?.map((comment, index) => (
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
                                {getIndex(index)}
                              </span>
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
                                textTransform: 'uppercase',
                              }}
                            >
                              {comment}
                            </p>
                          </td>
                        </tr>
                      ))}
                    {lcModuleData && lcModuleData?.lcApplication?.presentaionPeriod ? (
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
                              48
                            </span>
                            PRESENTATION PERIOD
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.presentaionPeriod?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.confirmationInstructions ? (
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
                              49
                            </span>
                            CONFIRMATION INSTRUCTIONS
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.confirmationInstructions?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.reimbursingBank ? (
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
                              53A
                            </span>
                            REIMBURSING BANK
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.reimbursingBank?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.adviceThroughBank ? (
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
                              57
                            </span>
                            ADVISE THROUGH BANK
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.adviceThroughBank?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.secondAdvisingBank ? (
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
                              57A
                            </span>
                            SECOND ADVISING BANK, IF APPLICABLE
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.secondAdvisingBank?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.requestedConfirmationParty ? (
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
                              58A
                            </span>
                            REQUESTED CONFIRMATION PARTY
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.requestedConfirmationParty?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.charges ? (
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
                              71B
                            </span>
                            CHARGES
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.charges?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.instructionToBank ? (
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
                              78
                            </span>
                            INSTRUCTIONS TO PAYING / ACCEPTING / NEGOTIATING BANK
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.instructionToBank?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData && lcModuleData?.lcApplication?.senderToReceiverInformation ? (
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
                              72
                            </span>
                            SENDER TO RECEIVER INFORMATION
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
                              textTransform: 'uppercase',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcApplication?.senderToReceiverInformation?.toUpperCase()}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
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
