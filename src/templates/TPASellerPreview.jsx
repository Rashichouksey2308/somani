export default function TPASellerPreview(data) {
  return (
    <table
      width="800px"
      bgColor="#ffffff"
      cellPadding="0"
      style={{
        fontFamily: 'Times New Roman, Times, serif',
        border: '1px solid #d9dde8',
        marginBottom: '20px',
        color: '#000000',
      }}
      cellSpacing="0"
      border="0"
    >
      <tr>
        <td valign="top" style={{ padding: '25px 20px 20px' }}>
          <table width="100%" cellPadding="0" cellSpacing="0" border="0">
            <tr>
              <td align="center" style={{ padding: '15px 0 30px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    display: 'block'
                  }}
                >
                  <strong>TRIPARTITE AGREEMENT</strong>
                </span>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <span
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    display: 'inline-block',
                    paddingBottom: '16px'
                  }}
                >
                  This Tripartite Agreement (“<strong>Agreement</strong>”) is made at the place and on the day as set out in <strong>Schedule I</strong> hereto by and between:
                </span>
              </td>
            </tr>
            <tr>
              <td valign="top" align="justify">
                <span
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    display: 'inline-block',
                    paddingBottom: '16px'
                  }}
                >
                  <strong style={{textTransform: 'capitalize' }}>{data.sellerSignature}</strong>(s), a company organized and existing in accordance with Law of Switzerland and having address at <strong>{data.sellerAddress?.fullAddress}, {data.sellerAddress?.city}, {data.sellerAddress?.country}, {data.sellerAddress?.pinCode}</strong> through its Authorized Signatory (hereinafter referred to as the &quot;<strong>Buyer</strong>&quot;, which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns) of the First Part.
                </span>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <span
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    display: 'inline-block',
                    paddingBottom: '16px'
                  }}
                >
                  And
                </span>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <span
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    display: 'inline-block',
                    paddingBottom: '16px'
                  }}
                >
                  <strong>Supplier</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as the “<strong>Supplier</strong>”, which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns) of the Second Part.
                </span>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <span
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    display: 'inline-block',
                    paddingBottom: '16px'
                  }}
                >
                  And
                </span>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <span
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    display: 'inline-block',
                    paddingBottom: '16px'
                  }}
                >
                  <strong>End Buyer</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as the “<strong>End Buyer</strong>”, which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns) of the Third Part.
                </span>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <span
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    display: 'inline-block',
                    paddingBottom: '16px'
                  }}
                >
                  The Buyer, Supplier and the End Buyer shall hereinafter, for the sake of brevity and convenience, be referred to individually as &quot;Party&quot; and collectively as the &quot;Parties&quot;.
                </span>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <span
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    display: 'inline-block',
                    paddingBottom: '16px'
                  }}
                >
                  <strong>WHEREAS,</strong>
                </span>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <ul
                  type="none"
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    paddingLeft: '20px',
                    marginBottom:'0'
                  }}
                >
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        display:'inline-block',
                        paddingBottom:'16px'
                      }}
                    >
                      <span style={{display:'inline-block', marginLeft:'-18px'}}>A. &nbsp;</span>Supplier has entered into a Sales Contract with Buyer for Sale &amp; Purchase of Goods as details in Schedule -1
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        display:'inline-block',
                        paddingBottom:'16px'
                      }}
                    >
                      <span style={{display:'inline-block', marginLeft:'-18px'}}>B. &nbsp;</span>Buyer has entered into the Sales Contract with Supplier solely at the request of End Buyer and to facilitate the End Buyer.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        display:'inline-block',
                        paddingBottom:'16px'
                      }}
                    >
                      <span style={{display:'inline-block', marginLeft:'-18px'}}>C. &nbsp;</span>In view of the aforesaid, parties have entered into this binding Agreement.
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <span
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    display: 'inline-block',
                    paddingBottom: '16px'
                  }}
                >
                  <strong>NOW THEREFORE THE PARTIES HERETO AGREED TO AS UNDER</strong>
                </span>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <ul
                  type="none"
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    paddingLeft: '16px',
                  }}
                >
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        display:'inline-block',
                        paddingBottom:'16px'
                      }}
                    >
                      <span style={{display:'inline-block', marginLeft:'-16px'}}>1. &nbsp;</span>That it is expressly clarify and agreed to amongst the parties that the Buyer has entered into the Sales Contract solely at the request and to facilitate the End Buyer.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        display:'inline-block',
                        paddingBottom:'16px'
                      }}
                    >
                      <span style={{display:'inline-block', marginLeft:'-16px'}}>2. &nbsp;</span>All terms of the Sales Contract have already been discussed and agreed between the Supplier and End Buyer.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        display:'inline-block',
                        paddingBottom:'16px'
                      }}
                    >
                      <span style={{display:'inline-block', marginLeft:'-16px'}}>3. &nbsp;</span>The role of Buyer is limited to establishment of Letter of Credit (“LC”) in favor of Supplier subject to the End Buyer fulfilling its contractual obligations towards the Buyer.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        display:'inline-block',
                        paddingBottom:'16px'
                      }}
                    >
                      <span style={{display:'inline-block', marginLeft:'-16px'}}>4. &nbsp;</span>The End Buyer and Supplier therefore, are fully liable and responsible at all times for performance of the Sales Contract including but not limited to making financial arrangements, timely nomination/acceptance of vessel, settlement of any and all quality/quantity claims, delayed/no shipment issues, demurrage / dispatch amounts, and/or any other claims or liability arising due to execution of the sales contract. All such claims, liabilities etc., shall be addressed, discussed and settled directly between the Supplier and End Buyer with no reference and liability on the part of Buyer whatsoever.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        display:'inline-block',
                        paddingBottom:'16px'
                      }}
                    >
                      <span style={{display:'inline-block', marginLeft:'-16px'}}>5. &nbsp;</span>Supplier will not hold discharge and/or delivery of cargo to the Buyer/Buyer's nominees for any reason whatsoever once LC is issued by the Buyer.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        display:'inline-block',
                        paddingBottom:'16px'
                      }}
                    >
                      <span style={{display:'inline-block', marginLeft:'-16px'}}>6. &nbsp;</span>In case of any conflict between the Sales Contract and this Agreement, the terms of this Agreement will prevail.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        display:'inline-block',
                        paddingBottom:'16px'
                      }}
                    >
                      <span style={{display:'inline-block', marginLeft:'-16px'}}>7. &nbsp;</span>Further, End Buyer shall be fully responsible for payment of the price in the event that Supplier is unable to obtain payment under the LC. End Buyer shall fully indemnify Supplier and Buyer for any loss, damage or expense arising due to execution of the Sales Contract.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        display:'inline-block',
                        paddingBottom:'16px'
                      }}
                    >
                      <span style={{display:'inline-block', marginLeft:'-16px'}}>8. &nbsp;</span>In any case, End Buyer shall remain responsible for the performance of the Sales Contract, including any failure or delay in the issuance of the LC in accordance with the terms of the Sales Contract.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        display:'inline-block',
                        paddingBottom:'16px'
                      }}
                    >
                      <span style={{display:'inline-block', marginLeft:'-16px'}}>9. &nbsp;</span>This Agreement is subject to English laws, and any disputes arising out of this Agreement shall be referred to arbitration as per rules of Singapore International Arbitration Center (SIAC) by a sole arbitrator. The seat and venue of arbitration shall be Singapore and the language of Arbitration Proceedings shall be in English.
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ paddingTop: '10px' }}>
                <br />
                <h3
                  align="center"
                  style={{
                    fontSize: '15px',
                    fontWeight: 'bold',
                    color: '#000000',
                    marginBottom: '20px',
                  }}
                >
                  Schedule I
                </h3>
                <table
                  width="100%"
                  cellPadding="5"
                  style={{ border: '1px solid #000000' }}
                  cellSpacing="0"
                  border="0"
                >
                  <tr>
                    <td
                      width="30%"
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        Date of execution
                      </span>
                    </td>
                    <td
                      width="70%"
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        {data.dateOfExecution}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        Place of execution
                      </span>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        {data.placeOfExecution}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        Name of Supplier
                      </span>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        {data?.supplier}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        Address of Supplier
                      </span>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        {data.supplierAddress?.fullAddress}, {data.supplierAddress?.city}, {data.supplierAddress?.country}, {data.supplierAddress?.pinCode}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        Authorized signatory of Supplier
                      </span>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        <ol style={{fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft:'10px', marginBottom:'0'}}>
                          {data?.supplierAuthorized?.length > 0 &&
                            data?.supplierAuthorized?.map((val, index) => {
                              return (
                                <li style={{marginTop:'-3px'}}>
                                  <span style={{fontSize: '12px',
                                  lineHeight: '18px',
                                  color: '#000000',
                                  display:'block', paddingTop:'1px'
                                  }}>Name - {val.name}<br/>                                      
                                    Designation - {val.designation}
                                  </span>
                                </li>
                              );
                            })}
                        </ol>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        Email ID of Supplier
                      </span>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        <ol style={{fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft:'10px', margin:'0'}}>
                          {data?.supplierEmail?.length > 0 &&
                            data?.supplierEmail?.map((val, index) => {
                              return <li style={{marginTop:'-3px'}}>
                              <span style={{
                                fontSize: '12px',
                                lineHeight: '18px',
                                color: '#000000',
                                display:'block', paddingTop:'1px'
                              }}>{val.email}</span></li>;
                            })}
                        </ol>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        Name of End buyer
                      </span>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        {data.associateBuyer}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        Address of End Buyer
                      </span>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        {data.associateBuyerAddress}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        Authorized signatory of End Buyer
                      </span>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        <ol style={{fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft:'10px', marginBottom:'0'}}>
                          {data?.associateBuyerAuthorized?.length > 0 &&
                            data?.associateBuyerAuthorized?.map((val, index) => {
                              return (
                                <li style={{marginTop:'-3px'}}>
                                  <span style={{
                                  fontSize: '12px',
                                  lineHeight: '18px',
                                  color: '#000000',
                                  display:'block', paddingTop:'1px'
                                  }}>Name - {val.name}<br/>
                                    Designation - {val.designation}
                                  </span>
                                </li>
                              );
                            })}
                        </ol>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        Email ID of End Buyer
                      </span>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        <ol style={{fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft:'10px', margin:'0'}}>
                          {data?.buyerEmail?.length > 0 &&
                            data?.buyerEmail?.map((val, index) => {
                              return <li style={{marginTop:'-3px'}}>
                              <span style={{
                                fontSize: '12px',
                                lineHeight: '18px',
                                color: '#000000',
                                display:'block', paddingTop:'1px'
                              }}>{val.email}</span></li>;
                            })}
                        </ol>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        Details of Goods as per Sales Contract
                      </span>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        <>
                          <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{
                        borderTop: '1px solid #000000', borderLeft: '1px solid #000000'}}>
                            <tr>
                              {data?.spec &&
                                data?.spec.length > 0 &&
                                Object.keys(data?.spec[0]).map((val, index) => <th style={{
                                  fontSize: '12px', lineHeight: '18px', color: '#000000', padding:'5px', borderBottom: '1px solid #000000', borderRight: '1px solid #000000'}} key={index}>{val}</th>)}
                            </tr>
                            {data?.spec &&
                              data?.spec.length > 0 &&
                              data?.spec.map((item, index) => (
                                <tr>
                                  {Object.values(item).map((value, id) => (
                                    <td style={{
                                      fontSize: '12px', lineHeight: '18px', color: '#000000', padding:'5px', borderBottom: '1px solid #000000', borderRight: '1px solid #000000'}} key={id}>{value}</td>
                                  ))}
                                </tr>
                              ))}
                          </table>
                          {data.specComment.length > 0 ? <strong style={{fontSize: '12px', lineHeight: '18px', color: '#000000', display:'block', padding:'15px 0 10px'}}>Comments</strong> : null}
                          <ol style={{fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft:'10px', margin:'0 0 10px'}}>
                            {data.specComment.length > 0 &&
                              data.specComment.map((val, index) => {
                                return <li style={{marginTop:'-3px'}}>
                                <span style={{
                                  fontSize: '12px',
                                  lineHeight: '18px',
                                  color: '#000000',
                                  display:'block', paddingTop:'1px'
                                }}>{val}</span></li>;
                              })}
                          </ol>
                        </>
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td valign="top" style={{ paddingTop:'30px'}}>
                <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                  <tr>
                    <td align="left" valign="top" width="70%" style={{paddingTop:'70px'}}>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block',
                        }}
                      >
                        Buyer
                      </span>
                    </td>
                    <td align="left" valign="top" width="30%">
                       <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        {data?.buyerAuthorized?.length > 0 &&
                      data?.buyerAuthorized?.map((val, index) => {
                      return (
                      <>
                        <span style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            display: 'inline-block',
                            paddingTop: '70px'
                          }}>Name: {val.name}<br/>
                          Designation: {val.designation}</span>
                      </>
                      )
                      })}
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'inline-block',
                          paddingTop: '10px'
                        }}
                      >
                        <strong>Authorised Signatory</strong>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" valign="top">
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block',
                          paddingTop: '70px'
                        }}
                      >
                        Supplier
                      </span>
                    </td>
                    <td align="left" valign="top">
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block'
                        }}
                      >
                        {data?.supplierAuthorized?.length > 0 &&
                      data?.supplierAuthorized?.map((val, index) => {
                      return (
                      <>
                        <span style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            display: 'inline-block',
                            paddingTop: '70px'
                          }}>Name: {val.name}<br/>
                          Designation: {val.designation}</span>
                      </>
                        )
                      })}
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'inline-block',
                          paddingTop: '10px'
                        }}
                      >
                        <strong>Authorised Signatory</strong>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" valign="top">
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'block',
                          paddingTop: '70px'
                        }}
                      >
                        End Buyer
                      </span>
                    </td>
                    <td align="left" valign="top">
                        <span
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            display: 'block'
                          }}
                        >
                        {data?.associateBuyerAuthorized?.length > 0 &&
                      data?.associateBuyerAuthorized?.map((val, index) => {
                      return (
                      <>
                        <span style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            display: 'inline-block',
                            paddingTop: '70px'
                          }}>Name: {val.name}<br/>
                          Designation: {val.designation}</span>
                      </>
                      )
                      })}
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display: 'inline-block',
                          paddingTop: '10px'
                        }}
                      >
                        <strong>Authorised Signatory</strong>
                      </span>
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
