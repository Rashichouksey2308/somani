import _get from 'lodash/get';
import moment from 'moment';
import { addPrefixOrSuffix } from '@/utils/helper';
import { returnReadableNumber } from '@/utils/helpers/global';

export default function ApplicationLCTemp(lcModuleData, lcModule) {
  
  let d = new Date();
   const getIndex = (index) => {
    if (_get(lcModuleData.lcModule, 'data[0].order.generic.productSpecifications.specificationTable', []).length > 0) {
      return (index = index + 2);
    } else {
      return index + 1;
    }
  };
  
  return (
    <table width="1500px" cellPadding="0" cellSpacing="0" border="0">
      
      <tr>
        <td valign="top" style={{ paddingBottom: '20px' }}>
          <table
            width="100%"
            bgColor="#D8EAFF"
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              marginBottom: '10px',
              border: '1px solid #D2D7E5',
              borderRadius: '6px',
              height: '126px',
            }}
            cellPadding="10"
            cellSpacing="0"
            border="0"
          >
            <tr>              
              <td valign="top" colSpan={2} align="center">
                <h2
                  style={{
                    fontSize: '34px',
                    color: '#3687E8',
                    lineHeight: '41px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                   {lcModuleData.lcModuleData.firstTimeUpdate==false?'APPLICATION FOR LETTER OF CREDIT':
                  "LC DRAFT"
                  }
                
                </h2>
              </td>
            </tr>
            <tr>
              <td valign="bottom" align="left" width="70%" style={{paddingLeft:'25px', paddingBottom:'25px'}}>
                <span
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '25px',
                    fontWeight: '500',
                    padding: '5px 0',
                    display: 'inline-block'
                  }}
                  >Order ID:
                  <span style={{ineHeight:'24px', display:'inline-block', fontWeight:'normal', color:'#585858', paddingLeft:'10px'}}>{lcModuleData.lcModuleData?.order?.orderId}</span>
                </span>
                <br/>
                <span 
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '25px',
                    fontWeight: '500',
                    padding: '5px 0',
                    display: 'inline-block'
                  }}
                  >Buyer:
                  <span style={{ineHeight:'24px', display:'inline-block', fontWeight:'normal', color:'#585858', paddingLeft:'10px'}}>{lcModuleData.lcModuleData?.company?.companyName}</span>
                </span>
              </td>
              <td valign="bottom" align="right" width="30%" style={{paddingRight:'25px', paddingBottom:'25px'}}>
                <span
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '25px',
                    fontWeight: '500',
                    padding: '5px 0',
                    display: 'inline-block'
                  }}
                  >Date:
                  <span style={{ineHeight:'24px', display:'inline-block', fontWeight:'normal', color:'#585858', paddingLeft:'10px'}}>{moment(d).format('DD.MM.yyyy')}</span>
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
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.formOfDocumentaryCredit ? (
                      <tr>
                        <td
                          width="40%"
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color:'#585858',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>40A</span>FORM OF DOCUMENTARY CREDIT
                            </span>                            
                          </span>
                        </td>
                        <td
                          width="60%"
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {lcModuleData.lcModuleData?.lcApplication?.formOfDocumentaryCredit?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.applicableRules ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>40E</span>APPLICABLE RULES
                            </span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {lcModuleData.lcModuleData?.lcApplication?.applicableRules?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.dateOfExpiry ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>31D</span>DATE OF EXPIRY</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {moment(lcModuleData.lcModuleData?.lcApplication?.dateOfExpiry).format('DD-MM-YYYY')}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.placeOfExpiry ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>31D</span>PLACE OF EXPIRY</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {lcModuleData.lcModuleData?.lcApplication?.placeOfExpiry?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.lcIssuingBank ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>51D</span>LC ISSUING BANK</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {lcModuleData.lcModuleData?.lcApplication?.lcIssuingBank?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.applicant ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>50</span>APPLICANT</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {lcModuleData.lcModuleData?.lcApplication?.applicant?.toUpperCase()}
                            <br></br>
                              {_get(lcModuleData.lcModule,"data[0].order.generic.seller.addresses[0].fullAddress","")},
                              {_get(lcModuleData.lcModule,"data[0].order.generic.seller.addresses[0].city","")},
                              {_get(lcModuleData.lcModule,"data[0].order.generic.seller.addresses[0].country","")},
                              {_get(lcModuleData.lcModule,"data[0].order.generic.seller.addresses[0].pinCode","")}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.beneficiary ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>59</span>BENEFICIARY</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.beneficiary?.toUpperCase()}
                               <br></br>
                                {
                              _get(lcModuleData.lcModule, 'data[0].order.generic.supplier.addresses[0].addressType', '')=="Registered"?
                              <>
                                  {_get(lcModuleData.lcModule, 'data[0].order.generic.supplier.addresses[0].fullAddress', '')},
                                  
                                  {_get(lcModuleData.lcModule, 'data[0].order.generic.supplier.addresses[0].country', '')},
                                  {_get(lcModuleData.lcModule, 'data[0].order.generic.supplier.addresses[0].pinCode', '')}
                              </>:
                              <>
                                  {_get(lcModuleData.lcModule, 'data[0].order.generic.supplier.addresses[0].fullAddress', '')},
                                  {_get(lcModuleData.lcModule, 'data[0].order.generic.supplier.addresses[0].city', '')},
                                  {_get(lcModuleData.lcModule, 'data[0].order.generic.supplier.addresses[0].country', '')},
                                  {_get(lcModuleData.lcModule, 'data[0].order.generic.supplier.addresses[0].pinCode', '')}
                              </>
                            }
                              
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.currecyCodeAndAmountValue ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>32B</span>CURRENCY CODE &amp; AMOUNT</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                           {lcModuleData.lcModuleData.order.orderCurrency}{' '}
                            {lcModuleData.lcModuleData?.lcApplication?.currecyCodeAndAmountValue?.toUpperCase()
                              ? 
                              returnReadableNumber(
                                  lcModuleData.lcModuleData?.lcApplication?.currecyCodeAndAmountValue,
                                  lcModuleData.lcModuleData.order.orderCurrency=="INR"?"en-In":"en-En",
                                  2,
                                )
                              
                              : 0}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.tolerancePercentage ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>39A</span>TOLERANCE (+/-) PERCENTAGE</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {addPrefixOrSuffix(
                              lcModuleData.lcModuleData?.lcApplication?.tolerancePercentage?.toLocaleString('en-IN', {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              }),
                              '%',
                              '',
                            )}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.creditAvailablewith ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>41A</span>CREDIT AVAILABLE WITH</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.creditAvailablewith?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.creditAvailableBy ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>41B</span>CREDIT AVAILABLE BY</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.creditAvailableBy?.toUpperCase()}{' '}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.atSight ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>42C</span>DRAFT AT
                              <br />
                              {lcModuleData.lcModuleData?.lcApplication?.atSight?.toUpperCase() == 'AT SIGHT' ? null : `NO. OF DAYS`}
                              </span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {lcModuleData?.lcModuleData?.lcApplication?.atSight?.toUpperCase()} <br />
                            {lcModuleData?.lcModuleData?.lcApplication?.numberOfDays}{` ${lcModuleData?.lcModuleData?.lcApplication?.atSight?.toUpperCase() == 'AT SIGHT' ? '' : 'Days'}`}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.drawee ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>42A</span>DRAWEE</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.drawee?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.deferredPayment ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>42P</span>DEFERRED PAYMENT</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {lcModuleData.lcModuleData?.lcApplication?.deferredPayment?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.partialShipment ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>43P</span>PARTIAL SHIPMENT</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData?.lcModuleData?.lcApplication?.partialShipment?.toUpperCase() === 'YES' ? 'Allowed' :lcModuleData?.lcModuleData?.lcApplication?.partialShipment?.toUpperCase()== "NO" ?' Not Allowed' :"Conditional" }
                            
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                   
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.transhipments ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>43T</span>TRANSHIPMENTS</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                             {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.transhipments?.toUpperCase() === 'YES' ? 'Allowed' : ' Not Allowed'}
                            
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.shipmentForm ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>44A</span>SHIPMENT FROM</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.shipmentForm?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                  </tbody>
                  <tbody>
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.portOfLoading ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>44E</span>PORT OF LOADING</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.portOfLoading?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.portOfDischarge ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>44F</span>PORT OF DISCHARGE</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {lcModuleData.lcModuleData?.lcApplication?.portOfDischarge?.toUpperCase()}, INDIA
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.latestDateOfShipment ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>44C</span>LATEST DATE OF SHIPMENT</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {moment(lcModuleData.lcModuleData?.lcApplication?.latestDateOfShipment).format(
                              'DD-MM-YYYY',
                            )}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.DescriptionOfGoods ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>45A</span>DESCRIPTION OF THE GOODS</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.DescriptionOfGoods?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    <tr height="67">
                      <th colSpan={2} bgColor="#FAFAFB" align="left">
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            padding: '20px 15px 20px 35px',
                            display: 'block'
                          }}
                        >
                          46A DOCUMENT REQUIRED:
                        </span>
                      </th>
                    </tr>
                    {lcModuleData.lcModuleData &&
                      lcModuleData.lcModuleData?.documentRequired?.map((doc, index) => (
                        <tr>
                          <td
                            align="left"
                            style={{
                              borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                              borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                            }}
                          >
                            <span
                              style={{
                                fontSize: '20px',
                                color: 'rgba(17, 17, 17, 0.7)',
                                lineHeight: '24px',
                                fontWeight: 'normal',
                                padding: '16px 15px 16px 35px',
                                display: 'block'
                              }}
                            >
                              <span
                                style={{
                                  display: 'table',
                                  color: '#111111',
                                  fontWeight: '500',
                                }}
                              >
                                <span style={{color:'#111111', display:'table-cell', width:'66px'}}>{index + 1}</span>
                              </span>
                            </span>
                          </td>
                          <td align="left"
                            style={{
                              borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                            }}
                            >
                            <span
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                fontWeight: '500',
                                display: 'block',
                                textTransform: 'uppercase',
                                padding: '16px 15px 16px 24px',
                              }}
                            >
                              {doc}
                            </span>
                          </td>
                        </tr>
                      ))}
                      <tr colSpan={4}>
                        <td>
                          <br/><br/><br/><br/>
                        </td>
                      </tr>
                    {/* <tr>
                    <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                      <span style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>1</span></span>
                    </td>                    
                  </tr> */}
                    {/* <tr>
                    <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)'}}>
                      <span style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>2</span></span>
                    </td>
                    <td align='left'>
                      <span style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>value</span>
                    </td>
                  </tr> */}
                    <tr height="67">
                      <th colSpan={2} bgColor="#FAFAFB" align="left">
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            padding: '20px 15px 20px 35px',
                            display: 'block'
                          }}
                        >
                          47A ADDITIONAL CONDITIONS:
                        </span>
                      </th>
                    </tr>                          
                    {/* <tr></tr> */}
                    {_get(lcModuleData.lcModule, 'data[0].order.generic.productSpecifications.specificationTable', []).length > 0 ? (
                      <>
                        <tr>
                          <td
                            align="left"
                            style={{
                              borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                              borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                            }}
                          >
                            <span
                              style={{
                                fontSize: '20px',
                                color: 'rgba(17, 17, 17, 0.7)',
                                lineHeight: '24px',
                                fontWeight: 'normal',
                                padding: '19px 15px 34px 35px',
                                display: 'block'
                              }}
                            >
                              <span
                                style={{
                                  display: 'table',
                                  color: '#111111',
                                  fontWeight: '500',
                                }}
                              >
                                <span style={{color:'#111111', display:'table-cell', width:'66px'}}>1</span>
                              </span>
                            </span>
                          </td>
                          <td
                            align="left"
                            style={{
                              borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                              padding: '25px 24px',
                            }}
                          >
                            <span style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              display: 'block',
                              marginBottom: '16px'
                            }}>PRODUCT SPECIFICATION</span>
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
                              </tr>
                                 <tr className="table_row">
                                {_get(
                                  lcModuleData.lcModule,
                                  'data[0]order.generic.productSpecifications.specificationTable',
                                  [],
                                ) &&
                                  _get(
                                    lcModuleData.lcModule,
                                    'data[0]order.generic.productSpecifications.specificationTable',
                                    [],
                                  ).length > 0 &&
                                  Object.keys(
                                    _get(
                                      lcModuleData.lcModule,
                                      'data[0]order.generic.productSpecifications.specificationTable',
                                      [],
                                    )[0],
                                  ).map((val, index) => (
                                    <th 
                                     style={{
                                      fontSize: '20px',
                                      color: '#8492a6',
                                      lineHeight: '24px',
                                    }} key={index}>
                                      {val}
                                    </th>
                                  ))}
                              </tr>
                              {_get(lcModuleData.lcModule, 'data[0].order.generic.productSpecifications.specificationTable', []) &&
                                _get(lcModuleData.lcModule, 'data[0].order.generic.productSpecifications.specificationTable', [])
                                  .length > 0 &&
                                _get(
                                  lcModuleData.lcModule,
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
                                          padding:'16px 22px'
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

                    {lcModuleData.lcModuleData &&
                      lcModuleData.lcModuleData?.additionalConditions?.map((comment, index) => (
                        <tr>
                          <td
                            align="left"
                            style={{
                              borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                              borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                            }}
                          >
                            <span
                              style={{
                                fontSize: '20px',
                                color: 'rgba(17, 17, 17, 0.7)',
                                lineHeight: '24px',
                                fontWeight: 'normal',
                                padding: '16px 15px 16px 35px',
                                display: 'block'
                              }}
                            >
                              <span
                                style={{
                                  display: 'table',
                                  color: '#111111',
                                  fontWeight: '500',
                                }}
                              >
                                <span style={{color:'#111111', display:'table-cell', width:'66px'}}>{getIndex(index)}</span>
                              </span>
                            </span>
                          </td>
                          <td
                            align="left"
                            style={{
                              borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                            }}
                          >
                            <span
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                fontWeight: '500',
                                display: 'block',
                                textTransform: 'uppercase',
                                padding: '16px 15px 16px 24px',
                              }}
                            >
                              {comment}
                            </span>
                          </td>
                        </tr>
                      ))}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.presentaionPeriod ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>48</span>PRESENTATION PERIOD</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.presentaionPeriod?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.confirmationInstructions ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>49</span>CONFIRMATION INSTRUCTIONS</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.confirmationInstructions?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.reimbursingBank ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>53A</span>REIMBURSING BANK</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.reimbursingBank?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.adviceThroughBank ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>57</span>ADVISE THROUGH BANK
                            </span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.adviceThroughBank?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.secondAdvisingBank ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>57A</span>SECOND ADVISING BANK, IF APPLICABLE</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.secondAdvisingBank?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.requestedConfirmationParty ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>58A</span>REQUESTED CONFIRMATION PARTY</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.requestedConfirmationParty?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.charges ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                            padding:"12px 0"
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>71B</span>CHARGES</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.charges?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.instructionToBank ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>78</span>INSTRUCTIONS TO PAYING / ACCEPTING / NEGOTIATING BANK</span>
                          </span>
                        </td>
                        <td
                          align="left"
                          style={{
                            borderBottom: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              padding: '16px 15px 16px 24px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.instructionToBank?.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {lcModuleData.lcModuleData && lcModuleData.lcModuleData?.lcApplication?.senderToReceiverInformation ? (
                      <tr>
                        <td
                          align="left"
                          style={{
                            borderRight: '2px solid rgba(202, 214, 230, 0.3)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: 'rgba(17, 17, 17, 0.7)',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '16px 15px 16px 35px',
                              display: 'block'
                            }}
                          >
                            <span
                              style={{
                                display: 'table',
                                color:'#585858',
                                fontWeight: '500',
                              }}
                            >
                              <span style={{color:'#111111', display:'table-cell', width:'66px'}}>72</span>SENDER TO RECEIVER INFORMATION</span>
                          </span>
                        </td>
                        <td 
                        align="left"
                        style={{padding:"26px 18px"}}
                        >
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              display: 'block',
                              textTransform: 'uppercase',
                              // padding: '16px 15px 16px 35px',
                            }}
                          >
                            {' '}
                            {lcModuleData.lcModuleData?.lcApplication?.senderToReceiverInformation?.toUpperCase()}
                          </span>
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
