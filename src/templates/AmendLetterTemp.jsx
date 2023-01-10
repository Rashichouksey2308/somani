import moment from 'moment';

export default function AmendLetterTemp(lcModuleData) {
  let d = new Date();
const getNumber=(number)=>{
  
let regex = /\(([^\)]*)\)/;
let data = number.match(regex);

return data[1]
}
const getString=(string)=>{
let regex = /\([^\)]*\)/;
let data = string.replace(regex, "");;
return data
}
const returnValue = (value) => {
  if (value.dropDownValue === '(32B) Currency Code & Amount') {
    return `${lcModuleData?.order?.orderCurrency}  ${Number(
      lcModuleData?.lcApplication?.currecyCodeAndAmountValue,
    )?.toLocaleString(lcModuleData?.order?.orderCurrency === 'INR' ? 'en-In' : 'en-En', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  } else if (value.dropDownValue === '(43T) Transhipments') {
    return  value.newValue == 'Yes'
      ? 'Allowed'
      : 'Not Allowed';
  } else if (value.dropDownValue === '(39A) Tolerance (+/-) Percentage') {
    return `(+/-) ${value.newValue}  %`;
  } else if (value.dropDownValue === '(31D) Date Of Expiry'||value.dropDownValue === '(44C) Latest Date Of Shipment') {
    return moment(value.newValue).format('DD-MM-YYYY');
  } else if (value.dropDownValue === '(42C) Draft At' && lcModuleData?.lcApplication?.atSight == 'Usuance') {
    return `Usuance - ${value.newValue} days`;
  } else {
    return value.newValue.toUpperCase()
  }
};
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
              <tr>
                <td colSpan={2} valign="top" align="center" width="100%">
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
              </tr>
              <td valign="bottom" align="left" width="50%">
                <span
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '25px',
                    fontWeight: '500',
                    padding: '0 0 0 25px',
                  }}
                >
                  Order ID:&nbsp;
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
                    Buyer:&nbsp;
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
              <td valign="bottom" align="right" width="50%">
                <span
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '25px',
                    fontWeight: '500',
                    padding: '0 25px 0 0',
                  }}
                >
                  Documentary Credit Number:&nbsp;
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
                    Date:&nbsp;
                  </span>
                  <span
                    style={{
                      lineHeight: '24px',
                      fontWeight: 'normal',
                      opacity: '0.7',
                    }}
                  >
                    {moment(lcModuleData.lcModuleData?.createdAt).format('DD.MM.yyy')}
                   
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
              borderTop: '2px solid rgba(202, 214, 230, 0.3)',
              borderLeft: '2px solid rgba(202, 214, 230, 0.3)',
            }}
            cellPadding="0"
            cellSpacing="0"
            border="0"
          >
            <tr>
              <td valign="top" align="left">
                <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                  {lcModuleData?.lcModuleData?.lcNewApplication?.map((val, index)=>(<tbody key={index}>
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
                            <span style={{color:'#111111', display:'table-cell', width:'66px'}}>{getNumber(val.dropDownValue.toUpperCase())}</span>{getString(val.dropDownValue.toUpperCase())}
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
                            padding: '16px 15px 16px 24px',
                            display: 'block'
                          }}
                        >
                          {returnValue(val)}
                        </span>
                      </td>
                    </tr>
                    {/* <tr>
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
                            padding: '16px 15px 16px 24px',
                            display: 'block'
                          }}
                        >
                          {lcModuleData.lcModuleData?.lcApplication?.applicableRules?.toUpperCase()}
                        </span>
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
                            <span style={{color:'#111111', display:'table-cell', width:'66px'}}>31D</span>DATE OF EXPIRY
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
                            padding: '16px 15px 16px 24px',
                            display: 'block'
                          }}
                        >
                          {moment(lcModuleData.lcModuleData?.lcApplication?.dateOfExpiry).format('DD-MM-YYYY')}
                        </span>
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
                            <span style={{color:'#111111', display:'table-cell', width:'66px'}}>31D</span>PLACE OF EXPIRY
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
                            padding: '16px 15px 16px 24px',
                            display: 'block'
                          }}
                        >
                          {lcModuleData.lcModuleData?.lcApplication?.placeOfExpiry?.toUpperCase()}
                        </span>
                      </td>
                    </tr>
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
                            <span style={{color:'#111111', display:'table-cell', width:'66px'}}>51D</span>LC ISSUING BANK
                          </span>
                        </span>
                      </td>
                      <td align="left">
                        <span
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '16px 15px 16px 24px',
                            display: 'block'
                          }}
                        >
                          {lcModuleData.lcModuleData?.lcApplication?.lcIssuingBank?.toUpperCase()}
                        </span>
                      </td>
                    </tr> */}
                  </tbody>))}
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
}
