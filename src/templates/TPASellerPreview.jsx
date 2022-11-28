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
              <td align="center" style={{ padding: '15px 0 25px' }}>
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    marginBottom: '0',
                  }}
                >
                  <strong>TRIPARTITE AGREEMENT</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    marginBottom: '0',
                  }}
                >
                  This Tripartite Agreement (“<strong>Agreement</strong>”) is made at the place and on the day as set
                  out in <strong>Schedule I</strong> hereto by and between:
                </p>
              </td>
            </tr>
            <tr>
              <td valign="top" align="justify">
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                  }}
                >
                  <strong style={{ textTransform: 'uppercase' }}>{data.sellerSignature}</strong>, a company organized and
                  existing in accordance with Law of Switzerland and having address at{' '}
                  <strong>
                    {' '}
                    {data.sellerAddress?.fullAddress}, {data.sellerAddress?.city} {data.sellerAddress?.country},{' '}
                    {data.sellerAddress?.pinCode}
                  </strong>{' '} through its Authorized Signatory (hereinafter referred to as the &quot;<strong>Buyer</strong>&quot;,
                  which expression shall, unless excluded by or repugnant to the context be deemed to include its
                  legal heirs, successors and permitted assigns) of the First Part.
                </p>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                  }}
                >
                  And
                </p>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                  }}
                >
                  <strong>Supplier</strong>(s), as detailed in
                  <strong>Schedule-I</strong> hereof (hereinafter referred to as the “<strong>Supplier</strong>”,
                  which expression shall, unless excluded by or repugnant to the context be deemed to include its
                  legal heirs, successors and permitted assigns) of the Second Part.
                </p>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                  }}
                >
                  And
                </p>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                  }}
                >
                  <strong>End Buyer</strong>(s), as detailed in
                  <strong>Schedule-I</strong> hereof (hereinafter referred to as the “<strong>End Buyer</strong>”,
                  which expression shall, unless excluded by or repugnant to the context be deemed to include its
                  legal heirs, successors and permitted assigns) of the Third Part.
                </p>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                  }}
                >
                  The Buyer, Supplier and the End Buyer shall hereinafter, for the sake of brevity and convenience, be
                  referred to individually as &quot;Party&quot; and collectively as the &quot;Parties&quot;.
                </p>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                  }}
                >
                  <strong>WHEREAS,</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <ol
                  type="A"
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    paddingLeft: '20px'
                  }}
                >
                  <li>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                      }}
                    >
                      Supplier has entered into a Sales Contract with Buyer for Sale &amp; Purchase of Goods as
                      details in Schedule -1
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                      }}
                    >
                      Buyer has entered into the Sales Contract with Supplier solely at the request of End Buyer and
                      to facilitate the End Buyer.
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                      }}
                    >
                      In view of the aforesaid, parties have entered into this binding Agreement.
                    </p>
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                  }}
                >
                  <strong>NOW THEREFORE THE PARTIES HERETO AGREED TO AS UNDER</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <ol
                  type="1"
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    paddingLeft: '16px',
                  }}
                >
                  <li>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                      }}
                    >
                      That it is expressly clarify and agreed to amongst the parties that the Buyer has entered into
                      the Sales Contract solely at the request and to facilitate the End Buyer.
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                      }}
                    >
                      All terms of the Sales Contract have already been discussed and agreed between the Supplier and
                      End Buyer.
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                      }}
                    >
                      The role of Buyer is limited to establishment of Letter of Credit (“LC”) in favor of Supplier
                      subject to the End Buyer fulfilling its contractual obligations towards the Buyer.
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                      }}
                    >
                      The End Buyer and Supplier therefore, are fully liable and responsible at all times for
                      performance of the Sales Contract including but not limited to making financial arrangements,
                      timely nomination/acceptance of vessel, settlement of any and all quality/quantity claims,
                      delayed/no shipment issues, demurrage / dispatch amounts, and/or any other claims or liability
                      arising due to execution of the sales contract. All such claims, liabilities etc., shall be
                      addressed, discussed and settled directly between the Supplier and End Buyer with no reference
                      and liability on the part of Buyer whatsoever.
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                      }}
                    >
                      Supplier will not hold discharge and/or delivery of cargo to the Buyer/Buyer's nominees for any
                      reason whatsoever once LC is issued by the Buyer.
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                      }}
                    >
                      In case of any conflict between the Sales Contract and this Agreement, the terms of this
                      Agreement will prevail.
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                      }}
                    >
                      Further, End Buyer shall be fully responsible for payment of the price in the event that
                      Supplier is unable to obtain payment under the LC. End Buyer shall fully indemnify Supplier and
                      Buyer for any loss, damage or expense arising due to execution of the Sales Contract.
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                      }}
                    >
                      In any case, End Buyer shall remain responsible for the performance of the Sales Contract,
                      including any failure or delay in the issuance of the LC in accordance with the terms of the
                      Sales Contract.
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                      }}
                    >
                      This Agreement is subject to English laws, and any disputes arising out of this Agreement shall
                      be referred to arbitration as per rules of Singapore International Arbitration Center (SIAC) by
                      a sole arbitrator. The seat and venue of arbitration shall be Singapore and the language of
                      Arbitration Proceedings shall be in English.
                    </p>
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td style={{ paddingTop: '20px' }}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
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
                  cellPadding="10"
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
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        Date of execution
                      </p>
                    </td>
                    <td
                      width="70%"
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        {data.dateOfExecution}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        Place of execution
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        {' '}
                        {data.placeOfExecution}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        Name of Supplier
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        {' '}
                        {data?.supplier}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        Address of Supplier
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        {data.supplierAddress?.fullAddress},{data.supplierAddress?.city}{' '}
                        {data.supplierAddress?.country}, {data.supplierAddress?.pinCode}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        Authorized signatory of Supplier
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        <ol style={{fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft:'10px', margin:'0'}}>
                          {data?.supplierAuthorized?.length > 0 &&
                            data?.supplierAuthorized?.map((val, index) => {
                              return (
                                <li style={{
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: '#000000',
                                    marginBottom: '0',
                                  }}>
                                    Name - {val.name}
                                  <br/>
                                    Designation - {val.designation}
                                </li>
                              );
                            })}
                        </ol>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        Email ID of Supplier
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        <ol style={{fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft:'10px', margin:'0'}}>
                          {data?.supplierEmail?.length > 0 &&
                            data?.supplierEmail?.map((val, index) => {
                              return <li>
                              <p style={{
                                fontSize: '12px',
                                lineHeight: '18px',
                                color: '#000000',
                                marginBottom: '0',
                              }}>{val.email}</p></li>;
                            })}
                        </ol>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        Name of End buyer
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        {data.associateBuyer}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        Address of End Buyer
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        {data.associateBuyerAddress}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        Authorized signatory of End Buyer
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        <ol style={{fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft:'10px', marginBottom:'0'}}>
                          {data?.associateBuyerAuthorized?.length > 0 &&
                            data?.associateBuyerAuthorized?.map((val, index) => {
                              return (
                                <li style={{
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: '#000000',
                                    marginBottom: '0',
                                  }}>
                                    Name - {val.name}
                                  <br/>
                                    Designation - {val.designation}
                                </li>
                              );
                            })}
                        </ol>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        Email ID of End Buyer
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        <ol style={{fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft:'10px', margin:'0'}}>
                          {data?.buyerEmail?.length > 0 &&
                            data?.buyerEmail?.map((val, index) => {
                              return <li>
                              <p style={{
                                fontSize: '12px',
                                lineHeight: '18px',
                                color: '#000000',
                                marginBottom: '0',
                              }}>{val.email}</p></li>;
                            })}
                        </ol>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        Details of Goods as per Sales Contract
                      </p>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid #000000',
                        borderRight: '1px solid #000000',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
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
                          {data.specComment.length > 0 ? <strong style={{fontSize: '12px', lineHeight: '18px', color: '#000000'}}>Comments</strong> : null}
                          <ol style={{fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft:'10px', margin:'0'}}>
                            {data.specComment.length > 0 &&
                              data.specComment.map((val, index) => {
                                return <li>
                                <p style={{
                                  fontSize: '12px',
                                  lineHeight: '18px',
                                  color: '#000000',
                                  marginBottom: '0',
                                }}>{val}</p></li>;
                              })}
                          </ol>
                        </>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td valign="top" style={{ paddingTop: '30px' }}>
                <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                  <tr>
                    <td align="left" valign="top" width="50%" style={{paddingTop:'20px'}}>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                        }}
                      >
                        Buyer
                      </p>
                    </td>
                    <td align="left" valign="top" width="50%" style={{paddingTop:'20px'}}>
                       <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0'
                        }}
                      >
                        {data?.buyerAuthorized?.length > 0 &&
                      data?.buyerAuthorized?.map((val, index) => {
                      return (
                      <>
                      <span>{val.name}, {val.designation}</span>
                      </>
                      )
                      })}
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                        }}
                      >
                        Authorised Signatory
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" style={{paddingTop:'20px'}}>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                        }}
                      >
                        Supplier
                      </p>
                    </td>
                    <td align="left" valign="top" style={{paddingTop:'20px'}}>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0'
                        }}
                      >
                        {data?.supplierAuthorized?.length > 0 &&
                      data?.supplierAuthorized?.map((val, index) => {
                      return (
                      <>
                      <span>{val.name}, {val.designation}</span>
                      </>
                        )
                      })}
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                        }}
                      >
                        Authorised Signatory
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" style={{paddingTop:'20px'}}>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0'
                        }}
                      >
                        End Buyer
                      </p>
                    </td>
                    <td align="left" valign="top" style={{paddingTop:'20px'}}>
                         <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0'
                        }}
                      >
                        {data?.associateBuyerAuthorized?.length > 0 &&
                      data?.associateBuyerAuthorized?.map((val, index) => {
                      return (
                      <>
                      <span>{val.name}, {val.designation}</span>
                      </>
                      )
                      })}
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0'
                        }}
                      >
                        Authorised Signatory
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
