import moment from 'moment';
export const toPdf = (data) => {
  return (
    <table
      width="800px"
      bgColor="#ffffff"
      style={{ marginBottom: '20px', color: '#000000' }}
      cellPadding="0"
      cellSpacing="0"
      border="0"
    >
      <tr>
        <td
          style={{
            fontFamily: 'Times New Roman, Times, serif',
            padding: '20px',
            fontSize: '12px',
            lineHeight: '18px',
            color: '#000000',
          }}
        >
          <p align="center" style={{ textDecoration: 'underline', color: '#000000' }}>
            <strong>SALES CONTRACT</strong>
          </p>
          <p align="center" style={{ float: 'left', color: '#000000', marginBottom: '0' }}>
            This Sales Contract("
            <span style={{ fontWeight: 'bold' }}>{data.shortseller + '/' + data.shortbuyer + '/' + '2022/001'}</span>
            ") is made at the place and on the day as set out in <strong>Schedule I</strong> between the Seller and the
            Buyer.
          </p>
        </td>
      </tr>
      <tr>
        <td
          valign="top"
          style={{
            fontFamily: 'Times New Roman, Times, serif',
            fontSize: '12px',
            lineHeight: '18px',
            color: '#000000',
            padding: '5px 20px 40px',
          }}
        >
          <table width="100%" cellPadding="10" style={{ border: '1px solid #000000' }} cellSpacing="0" border="0">
            <tr>
              <td
                width="5%"
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>1</p>
              </td>
              <td
                width="25%"
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Seller</p>
              </td>
              <td
                width="70%"
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  <>{data?.seller}</>
                  <br></br>
                  <>
                    {' '}
                    {data.sellerAddress?.fullAddress},{data.sellerAddress?.city} {data.sellerAddress?.country},{' '}
                    {data.sellerAddress?.pinCode}
                  </>
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
                <p style={{ color: '#000000', marginBottom: '0' }}>2</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Buyer</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  <>{data?.buyer}</>
                  <br></br>
                  <>
                    {data.buyerAddress?.fullAddress},{data.buyerAddress?.city} {data.buyerAddress?.country},{' '}
                    {data.buyerAddress?.pinCode}
                  </>
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
                <p style={{ color: '#000000', marginBottom: '0' }}>3</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Manufacturer/Supplier / Shipper</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Details as per Schedule 1</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>4</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>End User / End Buyer</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Details as per Schedule 1</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>5</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Commodity, Quantity, Specification and Unit Price</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Details as per Schedule 1</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>6</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Total Order Value </p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Details as per Schedule 1</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>7</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Discharge Port</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Details as per Schedule 1</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>8</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Loading Port</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Details as per Schedule 1</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>9</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Quality / Inspection </p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  In case of issues in Quality, Neutral agency certification for Quality and Quantity will be considered
                  as final and binding on Buyer &amp; Seller. Load port report for quality and quantity are final and
                  binding between Seller and Buyer for all purpose. If any dispute arises relating but not limited to
                  quantity, quality, the same is to be settled directly between Manufacturer/shipper and Buyer.
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
                <p style={{ color: '#000000', marginBottom: '0' }}>10</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Duties and Taxes</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  All Taxes and duties, present or future, including variations thereto and other taxes shall be borne
                  and paid by Buyer.
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
                <p style={{ color: '#000000', marginBottom: '0' }}>11</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Shipment </p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Details as per Schedule 1</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>12</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Payment Terms </p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <ol
                  type="A"
                  style={{
                    paddingLeft: '16px',
                    float: 'left',
                    display: 'block',
                  }}
                >
                  <li style={{ color: '#000000', marginBottom: '10px' }}>
                    All the custom clearance formalities, Duties, Taxes and other charges related to import of cargo and
                    custom clearance shall be to Buyer's account and shall be solely the Buyer's responsibility.
                  </li>
                  <li style={{ color: '#000000', marginBottom: '10px' }}>
                    The Buyer shall pay for entire cargo within{' '}
                    <em
                      style={{
                        fontStyle: 'normal',
                        textDecoration: 'underline',
                      }}
                    >
                      90 days
                    </em>{' '}
                    from the date of B/L or{' '}
                    <em
                      style={{
                        fontStyle: 'normal',
                        textDecoration: 'underline',
                      }}
                    >
                      60 days
                    </em>{' '}
                    from the date of discharge of vessel at discharge port, whichever is earlier. The Buyer shall make
                    full payment of the material to be lifted through TT remittance. The Seller shall release the part
                    material to Buyer upon receipt of part payment for the part quantity of material to be lifted after
                    obtaining delivery order or Written Release Order from the LC opening bank as per CMA. The delivery
                    order instructions shall be issued for the part material, for which the payment has been made within
                    one banking day. However, Seller will provide first delivery order in Advance as per buyer's
                    request.
                  </li>
                  <li style={{ color: '#000000', marginBottom: '10px' }}>
                    The material shall be stored at Discharge Port for which the cost of such Rent, Claim, and penalty
                    shall be fully borne by the End User. Upon release of payment for the value of each B/L Quantity
                    Release Order from the Financing Bank shall be sent to the CMA Agent, within one banking day.
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '24px' }}>
                    Documents to be provided to Buyer
                    <ol type="1" style={{ paddingLeft: '0', marginLeft: '-24px' }}>
                      <li style={{ color: '#000000', paddingLeft: '24px' }}>The Seller's Commercial Invoice,</li>
                      <li style={{ color: '#000000', paddingLeft: '24px' }}>
                        Full set of 3/3 originals of Bills of Lading,
                      </li>
                      <li style={{ color: '#000000', paddingLeft: '24px' }}>Certificate of Quality,</li>
                      <li style={{ color: '#000000', paddingLeft: '24px' }}>Certificate of Weight,</li>
                      <li style={{ color: '#000000', paddingLeft: '24px' }}>Certificate of Origin.</li>
                      <li style={{ color: '#000000', paddingLeft: '24px', marginBottom: '10px' }}>
                        Copy of Marine Insurance Certificate / Insurance Policy
                      </li>
                    </ol>
                  </li>
                </ol>
                All the above documents are subject to receipt from shipper.
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td
          valign="top"
          style={{
            fontFamily: 'Times New Roman, Times, serif',
            fontSize: '12px',
            lineHeight: '18px',
            color: '#000000',
            padding: '130px 20px 40px',
          }}
        >
          <table width="100%" cellPadding="10" style={{ border: '1px solid #000000' }} cellSpacing="0" border="0">
            <tr>
              <td
                width="5%"
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>13</p>
              </td>
              <td
                width="25%"
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Insurance </p>
              </td>
              <td
                width="70%"
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <ol type="A" style={{ paddingLeft: '16px', marginBottom: '0' }}>
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    Marine Insurance: Seller will provide Marine Insurance as received from Shipper.
                  </li>
                  <li style={{ color: '#000000' }}>
                    Stock Insurance: The Buyer will arrange insurance for 110% of the cargo value at discharge port,
                    valid at all times covering All Risk including Fire, Burglary and Act of God (AOG). The cargo shall
                    be insured by the Buyer at its own cost for the full value of cargo. The Policy shall be endorsed in
                    favour of the Seller or its nominated Bank. The Beneficiary of the Insurance Claim shall be the
                    Seller or its nominated Bank as per Seller's instructions.
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>14</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Shipping Terms </p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  All demurrage/despatch for discharge port to be settled directly between Shipper, Vessel Owner agent
                  and End User with no liability upon the Seller whatsoever.
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
                <p style={{ color: '#000000', marginBottom: '0' }}>15</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Title / Risk </p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  Title to the Goods shall be deemed to have been transferred to the Buyer and the Goods shall be deemed
                  to be sold and delivered to the Buyer only upon receipt by the Seller of the entire contract value. It
                  is clarified that the Seller shall retain lien and the full legal ownership in the Goods, to secure
                  the Buyer's obligation to pay the entire contract value, until receipt by the Seller of the entire
                  contract value. All risk of loss or damage shall pass to the Buyer as per Incoterms 2020.
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
                <p style={{ color: '#000000', marginBottom: '0' }}>16</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Time is the essence</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  Time is the Essence of the Contract. In the event of failure of the Buyer to fulfill its obligations
                  as contained herein including making of the payment and taking of the delivery of the material within
                  the time period specified in the Clause Payment Terms hereinabove, it shall constitute a material
                  breach of the Agreement.{' '}
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
                <p style={{ color: '#000000', marginBottom: '0' }}>17</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Remedies Available to the Seller</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <ol type="A" style={{ paddingLeft: '16px', marginBottom: '0' }}>
                  <li style={{ color: '#000000' }}>
                    In the event of the failure of the Buyer to make timely payment as agreed to in terms of the Clause
                    Payment Terms hereinabove, the Buyer shall pay the overdue interest @ 18% p.a. to the Seller for
                    each day of delay. However, the delay in making the payment shall in no event exceed 15 days beyond
                    the due date of making the payment as specified hereinabove.
                  </li>
                  <li style={{ color: '#000000' }}>
                    However, in the eventuality of Buyer failing to pay for and/or take delivery as per Clause Payment
                    Terms beyond 15 days of the due date, the Seller shall have the absolute right to dispose off the
                    Material, on terms and conditions as may be deemed fit by the Seller, to any other party at full
                    risk, responsibility and costs of Buyer, including financial costs, other expenses as well as
                    liquidated damages. The Buyer further agrees to make good the losses, financial costs and expenses
                    incurred by the Seller due to such disposal of the goods, within 3 working days of the receipt of
                    the demand by the Buyer from the Seller.
                  </li>
                  <li style={{ color: '#000000' }}>
                    The Buyer shall forthwith on demand indemnify the Seller against all the direct losses, liabilities,
                    claims or damages which Seller shall incur as a result of any breach by the Buyer (including but not
                    limited to any claim, loss, liability or damage Seller may incur to a third party as shipper of the
                    product).
                  </li>
                  <li style={{ color: '#000000' }}>
                    Failure of the Buyer to make payment in terms of clause hereinabove will entitle the Seller to seek
                    appropriate remedies available to it under the laws of the jurisdiction where the goods are stored
                    for recovery of the amounts and / or any other relief as thought fit by the Seller in its sole
                    discretion.
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>18</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Special Conditions </p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <ol type="1" style={{ paddingLeft: '16px' }}>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    It is expressly and unconditionally agreed and Buyer fully acknowledges that the title in the goods
                    / material shall pass on to the Buyer only in respect of such specific quantity thereof as released
                    from the storage facility by Collateral Manager in terms of the 'Tripartite Agreement' after receipt
                    of the price and other payables in respect thereof and actual delivery of the goods having been made
                    to the Buyer. The Seller shall continue to be the owner, holding absolute title in the
                    goods/material not so released and delivered to the Buyer in any contingency including of Buyer even
                    becoming insolvent but not limiting, and shall be entitled to deal with the goods/material as it may
                    deem fit including disposing them of at the risk and cost of the Buyer. For the avoidance of doubt,
                    the parties agree and acknowledge that the Goods shall not be in any manner whatsoever be construed
                    to be in the constructive or actual possession of the Buyer until the Goods are released and
                    delivered by the Seller in accordance with this Agreement. The Buyer specifically represents and
                    agrees to not exercise any or all such possessory rights on the Goods until the Goods are released
                    and delivered by the Seller in accordance with this Agreement.
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    Notwithstanding anything contained herein to the contrary, all risks, consequences arising out of
                    the actual transaction(s) taking place between Manufacturer/shipper and the Seller under the
                    Contract and/or any modified/amended agreement will be to the account of the Buyer only. The Seller
                    shall in no way be responsible or liable for the same.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    The BUYER unconditionally agrees to abide by a collateral management agreement by and among "
                    <strong>Collateral Manager</strong>", "<strong>Financing Bank</strong>" and "<strong>Seller</strong>{' '}
                    and undertakes not to take any delivery of Goods unless Collateral Manager releases such quantity of
                    the Goods in accordance with the Bank's written release instructions under the Collateral Management
                    Agreement. If Buyer, directly or indirectly, violates the undertaking in the preceding sentence,
                    then Buyer shall indemnify Seller for any loss, liability or claim (including without limitation any
                    expenses incurred) without any demur or protest. The Seller shall be under obligation to issue
                    delivery order for the quantity for which the payment has been received within one banking day.
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    Buyer acknowledges that:(i) pursuant to this Agreement Seller has entered into certain agreements
                    similar to the Collateral Management Agreement to fulfil requirement of the relevant bank which has
                    issued a letter of credit to facilitate purchase of the Goods by Seller; and (ii) the collateral
                    manager appointed by the Bank shall keep the Goods in its custody at a facility leased by the Buyer
                    at Storage facility at Discharge Port. For this purpose, Buyer unconditionally agrees that whenever
                    collateral manager takes Buyer's permission to keep the Goods at the Storage facility which facility
                    is under Buyer's control and management, then Buyer shall ensure the collateral manager has the
                    unfettered and unrestricted access to the Storage Facility and shall have the sole custody over the
                    Goods kept at the Storage facility. If there is any theft or loss of the Goods at the Storage
                    facility, the Buyer shall fully indemnify Seller to such loss of the Goods without any demur or
                    protest.
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    Notwithstanding anything contained in this Agreement, for avoidance of any doubts, the Parties
                    hereby clarify that unless Buyer fully pays Seller under this Agreement, the Seller shall have lien
                    on unpaid quantity of the Goods which is delivered to Buyer pursuant to this Agreement or any other
                    agreement. Buyer unconditionally represents and warrants that Buyer has not created and shall not
                    create any encumbrance (whatsoever) in favour of any lender or any third party on the Goods under
                    this Agreement or any other similar agreements unless Buyer fully pays for such Goods.
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    Any payment to be made by the Buyer under this contract shall be made free and clear of and without
                    deduction or withholding for or on account of any taxes. If at any time the Buyer is required to
                    make any deduction or withholding in respect of taxes from any payment to be made under this
                    contract, the Buyer shall pay such additional amounts as may be necessary to ensure that, after the
                    making of such deduction or withholding, the Seller receives for such payment a net sum equal to the
                    sum it would have received had no such deduction or withholding been made.
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    It is clarified that the Goods shall be deemed to have been supplied to the Buyer when the goods are
                    loaded on board the vessel and the Sales Consideration as mentioned hereinabove shall become due and
                    payable from then onwards by the Buyer to the Seller.
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    The contractual amount till the time it is not paid will be treated as an admitted, undisputed debt
                    due and payable by the Buyer to the Seller.
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    Within seven (7) days of receipt of the statement of accounts, as prepared by Seller, if Buyer does
                    not provide any comment on the statement of accounts, then such statement of accounts shall deem to
                    be accepted by Buyer and binding on it.
                  </li>
                  <li
                    style={{
                      marginBottom: '0',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    The End User and Manufacturer/shipper shall have direct recourse to each other for matters including
                    but not limited to the following:
                  </li>
                </ol>
                <p
                  style={{
                    color: '#000000',
                    marginBottom: '0',
                    float: 'left',
                    width: '100%',
                  }}
                >
                  a) For all quantity and quality claims/ issues pertaining to material supplied by
                  Manufacturer/shipper;
                </p>
                <p
                  style={{
                    color: '#000000',
                    marginBottom: '0',
                    float: 'left',
                    width: '100%',
                  }}
                >
                  b) Any express or implied warranty claim for the quality of material supplied by Manufacturer/shipper;
                </p>
                <p
                  style={{
                    color: '#000000',
                    marginBottom: '0',
                    float: 'left',
                    width: '100%',
                  }}
                >
                  c) Loss of cargo;
                </p>
                <p
                  style={{
                    color: '#000000',
                    marginBottom: '0',
                    float: 'left',
                    width: '100%',
                  }}
                >
                  d) Any demurrage charges at the load port and/or discharge port shall be settled directly between the
                  Buyer and Manufacturer/shipper;
                </p>
                <p
                  style={{
                    color: '#000000',
                    marginTop: '10px',
                    float: 'left',
                    width: '100%',
                  }}
                >
                  All Claims direct or consequential shall be settled directly between End Buyer and
                  Manufacturer/shipper.
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
                <p style={{ color: '#000000', marginBottom: '0' }}>19</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Mutual Collaboration</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  Both the Buyer and the Seller recognize that circumstances may arise that could not have been foreseen
                  at the time this Contract is being entered into. Both Parties agree that they will use their
                  commercially reasonable effort to achieve a mutually acceptable solution to any problem that may arise
                  due to any unforeseen circumstances in the spirit of mutual understanding and collaboration.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td
          valign="top"
          style={{
            fontFamily: 'Times New Roman, Times, serif',
            fontSize: '12px',
            lineHeight: '18px',
            color: '#000000',
            padding: '120px 20px 40px',
          }}
        >
          <table width="100%" cellPadding="10" style={{ border: '1px solid #000000' }} cellSpacing="0" border="0">
            <tr>
              <td
                width="5%"
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>20</p>
              </td>
              <td
                width="25%"
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Termination</p>
              </td>
              <td
                width="70%"
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  In the event the Buyer commits any breach of the terms of the agreement, then the Seller may, by
                  giving thirty (30) days prior written notice to the Buyer, terminate this Agreement without liability
                  and charge to the Seller. However, the Buyer shall remain liable to the Seller for making Payment of
                  the Goods already shipped by the Seller at the instance of the Buyer. Provided further, the Parties
                  hereto agree that the Seller may immediately terminate this Agreement without providing any notice to
                  the Buyer upon the Buyer, or the Buyer's shareholders commencing a voluntary proceeding under any
                  applicable bankruptcy, insolvency, winding up or other similar law now or hereafter in effect
                  (including but not limited to the Insolvency and Bankruptcy Code, 2016), or consents to the entry of
                  an order for relief in an involuntary proceeding under any such law (including but not limited to the
                  Insolvency and Bankruptcy Code, 2016), or consents to the appointment or taking possession by a
                  resolution professional, Receiver, liquidator, assignee (or similar official) for any or a substantial
                  part of its property; or the Buyer has involuntarily become the subject of proceedings (including
                  filing of an application/ petition for corporate insolvency resolution) under the Insolvency &amp;
                  Bankruptcy Code, 2016 or an order has been made by the appropriate authority for winding up of the
                  Buyer.
                  <br />
                  <br />
                  In the event that conditions of Force Majeure continue so that the Buyer's obligations remain
                  suspended for a period or periods amounting in aggregate to sixty (60) days in any consecutive period
                  of ninety (90) days, and at the end of said period or at anytime thereafter, then the Seller may give
                  thirty (30) days prior written notice to the Buyer that the Seller intends to terminate this
                  Agreement. At the expiration of the thirty (30) days, the Seller at its discretion may terminate this
                  Agreement forthwith without any liability or charge to the Seller. However, the Buyer shall remain
                  liable to the Seller for making Payment of the Goods.
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
                <p style={{ color: '#000000', marginBottom: '0' }}>21</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Notices</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  Any notice given by one Party to the other shall be in the English language and sent by facsimile or
                  by pre-paid air courier. Any notice sent by facsimile shall be deemed received on the day of
                  transmission and any notice sent by courier shall be deemed duly received on the third (3rd) day
                  following dispatch. Such notices shall be addressed at the addresses mentioned hereinabove.
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
                <p style={{ color: '#000000', marginBottom: '0' }}>22</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Force Majeure</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  The Seller shall not be liable to the Buyer or to the Manufacturer/shipper for any damages due to
                  delay, interruption or failure in performance of the obligations under the present Agreement
                  (including but not limited to any loss, damage or delay) if such loss, damage, delay or failure is due
                  to or results from Acts of God, War (whether declared or undeclared), blockades, revolution,
                  insurrection, civil commotion, terrorism, riot, invasion, plague or other epidemic, fire, sabotage,
                  quarantine restriction, explosion or embargo, including any change/modification in commercial laws,
                  rules and regulations by government, acts of Government in creating any restrictions or control in
                  imports, exports or foreign exchange, fire, flood, storm, earthquakes, accident in and to the Vessel
                  or strikes, breakdown of loading or unloading facilities, or transporting, loading, unloading or
                  delivering freight, embargoes and breakdown of railroads, serious damage to or breakdown of the
                  transmission system connecting to the Buyer's warehouse or the like or any other cause which may be
                  beyond the control of the Seller.
                  <br />
                  <br />
                  The force Majeure declared by the Manufacturer/shipper shall be applicable to the Seller.
                  <br />
                  <br />
                  No event described in this Clause shall constitute a Force Majeure event with respect to the Buyer's
                  obligation to pay for any product loaded at loading place in transit to the Buyer or stored at the
                  licensed warehouse.
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
                <p style={{ color: '#000000', marginBottom: '0' }}>23</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Breach of Contract</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <ol type="1" style={{ paddingLeft: '16px', marginBottom: '0' }}>
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    In the event, the Buyer fails to fulfill its obligations as laid down hereunder, the Buyer shall be
                    fully responsible and liable for all losses, damages, both direct and consequential incurred by the
                    Seller.
                  </li>
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    The Buyer indemnifies and shall continue to keep the Seller fully indemnified against all losses,
                    damages, expenses, claims, proceedings, liabilities (including all liabilities of the Seller towards
                    payment of LC charges, interest, default interest and other similar charges to its financing entity,
                    and those arising under the Collateral Management Agreement and the Irrevocable Tripartite
                    Agreement), demands including but not limited to those arising due to the failure of the Buyer to
                    make the payment and/or take delivery of the Goods within the stipulated time period as specified in
                    the Clause Payment Terms hereinabove as well as for executing the transaction as contemplated herein
                    the agreement for and on behalf of the Buyer.
                  </li>
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    If, due to the failure of the Buyer to fulfill its obligations as laid down hereunder in the
                    Contract, any dispute or difference arises between the Seller and Manufacturer/Shipper, and due to
                    which any Award/Judgment/decree/Order is passed or otherwise a settlement is reached, the Buyer
                    shall be bound to accept the same and bear the liability, costs, expenses arising there from.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </li>
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    In the event, any judicial/ legal proceedings are initiated against the Seller by
                    Manufacturer/shipper, the Buyer shall be required to be present and associated at all stages of the
                    proceedings and shall bear the entire expenses of arbitration/litigation and/or of the negotiated
                    settlement. The Buyer shall have no authority or excuse to challenge the same on any ground
                    including that the Buyer has not been consulted therein or that the negotiated settlement is not
                    reasonable or otherwise.
                  </li>
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    Remedies provided under this agreement shall be cumulative and in addition to other remedies
                    provided by law.
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>24</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Dispute Resolution &amp; Arbitration</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  Both parties agree to use their best efforts to amicably resolve any claims controversies and disputes
                  arising out of this contract, as well as to determine the final costs thereof. Any such claims,
                  controversies and disputes which cannot be resolved through negotiations within a period of 60 days of
                  the notification of such claims, disputes and controversies shall be referred to arbitration in
                  accordance with the rules of Singapore International Arbitration Center (SIAC). One arbitrator to be
                  nominated jointly by both the parties. The award rendered by the arbitrator shall be final and binding
                  upon both the parties concerned and subject to no appeal. The costs and expenses of the prevailing
                  party (including, without limitation, reasonable attorney's fee) will be paid by the losing party. The
                  contract shall be subject to Laws of India. The seat of the arbitration will be Singapore and the
                  proceedings shall be conducted in English language.
                  <br />
                  <br />
                  Notwithstanding the aforesaid, the parties agree and affirm that relief available under Section 9 of
                  the Indian Arbitration Act, 1996 (as amended) shall be available to the parties, and the parties may
                  initiate appropriate proceedings in India in order to avail such relief.
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
                <p style={{ color: '#000000', marginBottom: '0' }}>25</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Modifications of the contract</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  No changes in respect of the contract covered by this agreement shall be valid unless the same is
                  agreed to in writing by both parties herewith specifically stating the same to on amendment to this
                  agreement. Contract is valid if approved by Fax and no mail confirmation will be sent.
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
                <p style={{ color: '#000000', marginBottom: '0' }}>26</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>No Assignment</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  Neither Party shall be entitled to assign, transfer or sub-contract its rights under this Agreement in
                  whole or in part without first obtaining the other's consent in writing.
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
                <p style={{ color: '#000000', marginBottom: '0' }}>27</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Severability</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  The Parties intend each provision of this Agreement to be severable and distinct from the others. If a
                  provision of this Agreement is held to be illegal, invalid or unenforceable, in whole or in part, the
                  Parties intend that the legality, validity and enforceability of the remainder of this Agreement shall
                  not be affected.
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
                <p style={{ color: '#000000', marginBottom: '0' }}>28</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Waiver</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  Failure to enforce any condition herein contained shall not operate as a waiver of the condition
                  itself or any subsequent breach thereof.
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
                <p style={{ color: '#000000', marginBottom: '0' }}>29</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Representations and Warranties</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                Each party to this Agreement hereby represents and warrants that:
                <ol
                  type="1"
                  style={{
                    paddingLeft: '16px',
                    marginTop: '10px',
                    marginBottom: '0',
                  }}
                >
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    it is a legal entity duly organized and validly existing under the laws of the jurisdiction of its
                    incorporation and has all necessary corporate power, authority and capacity to execute this
                    Agreement and undertake the transactions contemplated herein;
                  </li>
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    the execution and delivery of this Agreement has been duly and validly authorized and constitutes
                    valid and legally binding obligations enforceable in accordance with its terms;
                  </li>
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    the execution, delivery and performance of this Agreement does not and shall not; (i) contravene any
                    provisions of its charter documents; (ii) result in a default, breach or contravention of any
                    conditions or provisions of any agreement to which it is a party or any obligation it is bond by; or
                    (iii) violate any law, order, judgment, injunction, decree, award, rule or regulation applicable to
                    it.
                  </li>
                </ol>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td
          valign="top"
          align="center"
          style={{
            fontFamily: 'Times New Roman, Times, serif',
            fontSize: '12px',
            lineHeight: '1.5',
            color: '#000000',
            padding: '20px',
          }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3 style={{ fontSize: '15px', fontWeight: 'bold' }}>Schedule I</h3>
          <table width="100%" cellPadding="10" style={{ border: '1px solid #000000' }} cellSpacing="0" border="0">
            <tr>
              <td
                width="30%"
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Date of Execution</p>
              </td>
              <td
                width="70%"
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>{data.dateOfExecution}</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Place of Execution</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>{data.placeOfExecution}</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Details of Manufacturer / Supplier / Shipper</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>{data.details}</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Details of End Buyer</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>{data.detailsOfEndBuyer}</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Details of Commodity</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>{data.detailsOfComm}</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Quantity</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  {data.quan?.toLocaleString('en-In', {
                    maximumFractionDigits: 2,
                  })}{' '}
                  {data?.unitOfQuantity?.toUpperCase()}
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
                <p style={{ color: '#000000', marginBottom: '0' }}>Unit Price</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  {data.curr}{' '}
                  {data.unitPrice?.toLocaleString('en-In', {
                    maximumFractionDigits: 2,
                  })}
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
                <p style={{ color: '#000000', marginBottom: '0' }}>Total Order Value</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>
                  {data.curr}{' '}
                  {data.totalOrderValue?.toLocaleString('en-In', {
                    maximumFractionDigits: 2,
                  })}
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
                <p style={{ color: '#000000', marginBottom: '0' }}>Load Port</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>{data.lordPort}</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Discharge Port</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>{data.dischargePort}</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Last Date of Shipment</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>{moment(data.lastDate).format('DD-MM-YYYY')}</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Shipment Term</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>{data.terms}</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Additional Conditions</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                {
                  <>
                    <>
                      <ol type="1">
                        {data?.addComm?.length > 0 &&
                          data?.addComm?.map((val, index) => {
                            return <li key={index}>{val}</li>;
                          })}
                      </ol>
                    </>
                  </>
                }
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <p style={{ color: '#000000', marginBottom: '0' }}>Specification</p>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <>
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                    style={{
                      borderTop: '1px solid #d9dde8',
                      borderLeft: '1px solid #d9dde8',
                    }}
                  >
                    <tr>
                      {data?.spec &&
                        data?.spec.length > 0 &&
                        Object.keys(data?.spec[0]).map((val, index) => (
                          <td
                            bgColor="#fafafb"
                            style={{
                              color: '#8492a6',
                              fontWeight: 'bold',
                              borderBottom: '1px solid #d9dde8',
                              borderRight: '1px solid #d9dde8',
                              padding: '5px',
                            }}
                            key={index}
                          >
                            {val}
                          </td>
                        ))}
                    </tr>
                    {data?.spec &&
                      data?.spec.length > 0 &&
                      data?.spec.map((item, index) => (
                        <tr>
                          {Object.values(item).map((value, id) => (
                            <td
                              style={{
                                borderBottom: '1px solid #d9dde8',
                                color: '#8492a6',
                                borderRight: '1px solid #d9dde8',
                                padding: '5px',
                              }}
                              key={id}
                            >
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                  </table>

                  {data?.specComment?.length > 0 ? <p style={{ paddingTop: '10px' }}>Comments</p> : null}
                  <ol type="1" style={{ paddingLeft: '16px' }}>
                    {data?.specComment?.length > 0 &&
                      data?.specComment?.map((val, index) => {
                        return <li style={{ marginBottom: '10px', color: '#000000' }}>{val}</li>;
                      })}
                  </ol>
                </>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td
          valign="top"
          style={{
            fontFamily: 'Times New Roman, Times, serif',
            fontSize: '12px',
            lineHeight: '1.5',
            color: '#000000',
            padding: '20px',
          }}
        >
          <strong>
            <p style={{ color: '#000000', marginBottom: '0' }}>SIGNATURE PAGE</p>
          </strong>
        </td>
      </tr>
      <tr>
        <td
          valign="top"
          style={{
            fontFamily: 'Times New Roman, Times, serif',
            fontSize: '12px',
            lineHeight: '1.5',
            color: '#000000',
            padding: '20px',
          }}
        >
          <table width="100%" cellPadding="0" cellSpacing="0" border="0">
            <tr>
              <td width="50%">
                <p style={{ color: '#000000', marginBottom: '0' }}>Seller</p>
              </td>
              <td width="50%" style={{ paddingLeft: '15px' }}>
                <p style={{ color: '#000000', marginBottom: '0' }}>Buyer</p>
              </td>
            </tr>
            <tr>
              <td colSpan={2} height={80}></td>
            </tr>
            <tr>
              <td style={{ paddingRight: '15px' }}>
                <textarea value={data.sellerSignature} style={{ width: '100%', outline: 'none' }} rows={4}></textarea>
              </td>
              <td style={{ paddingLeft: '15px' }}>
                <textarea value={data.buyerSignature} style={{ width: '100%', outline: 'none' }} rows={4}></textarea>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};
export const letterPrint = (data) => {
  return (
    <>
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
          <td valign="top" style={{ padding: '20px' }}>
            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
              <tr>
                <td align="center" style={{ padding: '15px 0' }}>
                  <p
                    style={{
                      fontSize: '12px',
                      lineHeight: '18px',
                      color: '#000000',
                      marginBottom: '0',
                    }}
                  >
                    <strong>
                      <u>Assignment Letter between Seller, Buyer and Supplier</u>
                    </strong>
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
                    This Assignment Letter is made at the place and on the day as set out in <strong>Schedule I</strong>{' '}
                    hereto by and between:
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
                    <strong>Seller</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred
                    to as the “<strong>Seller</strong>”, which expression shall, unless excluded by or repugnant to the
                    context be deemed to include its legal heirs, successors and permitted assigns) of the First Part.
                  </p>
                </td>
              </tr>
              <tr>
                <td align="center">
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
                    <strong>Buyer</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred
                    to as the “<strong>Buyer</strong>”, which expression shall, unless excluded by or repugnant to the
                    context be deemed to include its legal heirs, successors and permitted assigns) of the Second Part.
                  </p>
                </td>
              </tr>
              <tr>
                <td align="center">
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
                    <strong>Supplier</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter
                    referred to as the “<strong>Supplier</strong>”, which expression shall, unless excluded by or
                    repugnant to the context be deemed to include its legal heirs, successors and permitted assigns) of
                    the Third Part.
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
                    WHEREAS it is hereby agreed that the Supplier accepts that the payment of the goods shall be made by
                    way of a Letter of Credit (LC) to be issued on the applicant of Seller and Supplier will sell
                    quantity of Goods approximately mentioned in Schedule I to Seller for exclusive use by Buyer under
                    the terms and conditions contained within the Sales Contract dated mentioned in Schedule I
                    (“Contract”) by and between Supplier and Buyer, with the quality and price of goods as agreed
                    between them with tolerance level as mentioned in Schedule I and contained in the Sales Contract
                    dated mentioned in Schedule I.
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
                    WHEREAS it has been agreed between the parties that the goods are to be loaded by the Supplier in
                    the month mentioned in Schedule I, at a price mentioned in Schedule I.{' '}
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
                    WHEREAS the Buyer hereby confirms to remain responsible for the performance of the said sales
                    contract, including any failure or delay in the issuance of LC in accordance with the terms of the
                    sales contract and this assignment letter. Further, Buyer shall remain ultimately responsible for
                    payment of the price in the event where Supplier is unable to obtain payment under the LC and hereby
                    agree to indemnify Supplier for any loss, damage or expense including, without limitation, any
                    liability, Supplier may incur to the Seller by reason of the Invoice being addressed to Seller.
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
                    The title in Goods shall pass on to Seller upon receipt of payment by Supplier from the Seller and
                    the risks associated therewith shall pass on to Buyer as per Incoterms 2020. Buyer shall be solely
                    responsible for performance of the obligations enumerated in the sales contract mentioned herein
                    above. The supplier shall have no claim whatsoever.
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: '20px' }}>
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
                          Place of execution of Assignment Letter
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
                          Date of execution of Assignment Letter
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
                          Name of Seller
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
                          {data.seller}
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
                          Address of Seller
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
                          {data.sellerAddress?.fullAddress},{data.sellerAddress?.city} {data.sellerAddress?.country},{' '}
                          {data.sellerAddress?.pinCode}
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
                          Name of Buyer
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
                          {data.buyer}
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
                          Address of Buyer
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
                          {data.buyerAddress?.fullAddress},{data.buyerAddress?.city} {data.buyerAddress?.country},{' '}
                          {data.buyerAddress?.pinCode}
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
                          {data.supplier}
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
                          Description of Goods
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
                            <div>
                              <div>
                                <div>
                                  <table>
                                    <tr>
                                      {data?.spec &&
                                        data?.spec.length > 0 &&
                                        Object.keys(data?.spec[0]).map((val, index) => <th key={index}>{val}</th>)}
                                    </tr>
                                    {data?.spec &&
                                      data?.spec.length > 0 &&
                                      data?.spec.map((item, index) => (
                                        <tr>
                                          {Object.values(item).map((value, id) => (
                                            <td key={id}>{value}</td>
                                          ))}
                                        </tr>
                                      ))}
                                  </table>
                                </div>
                              </div>
                            </div>
                            {data?.specComment?.length > 0 ? <b>Comments</b> : null}
                            <ol>
                              {data.specComment.length > 0 &&
                                data.specComment.map((val, index) => {
                                  return <li>{val}</li>;
                                })}
                            </ol>
                          </>
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
                          Quantity of Goods in MT
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
                          {data.quan?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                          })}{' '}
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
                          Price of Goods / MT
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
                          {'INR '}
                          {data.priceOfGoods}
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
                          Tolerance levels
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
                          {data.toleranceLevel?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                          })}{' '}
                          %
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
                          Load Port
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
                          {data.lordPort}
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
                          Discharge Port
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
                          {data.dischargePort}
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
                          Inco-Terms
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
                          {data.incoTerms}
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
                          Month of loading of Cargo
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
                          {data?.loadingCargo}
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
                          Date of Sales Contract between Supplier and Buyer
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
                          {data?.dateOfContract}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td align="left" colSpan={2}>
                        <p
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            paddingTop: '30px',
                          }}
                        >
                          <strong>SIGNATURE PAGE</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" width="50%">
                        <p
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            marginBottom: '0',
                          }}
                        >
                          .................................................
                        </p>
                      </td>
                      <td align="left" width="50%">
                        <p
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            marginBottom: '0',
                          }}
                        >
                          .................................................
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                          }}
                        >
                          <strong>(Seller)</strong>
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                          }}
                        >
                          <strong>(Buyer)</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" colSpan={2}>
                        <p
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            marginBottom: '0',
                          }}
                        >
                          .................................................
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" colSpan={2}>
                        <p
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                          }}
                        >
                          <strong>(Shipper)</strong>
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
    </>
  );
};
export const qpaPrint = (data) => {
  console.log(data, 'ASasasas');
  return (
    <>
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
          <td valign="top" style={{ padding: '20px' }}>
            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
              <tr>
                <td align="center" style={{ padding: '15px 0' }}>
                  <p
                    style={{
                      fontSize: '12px',
                      lineHeight: '18px',
                      color: '#000000',
                      marginBottom: '0',
                    }}
                  >
                    <strong>Quadripartite Agreement</strong>
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
                    This Quadripartite Agreement (<strong>“Agreement”</strong>) is made at the place and on the day as
                    set out in <strong>Schedule I </strong>
                    hereto by and between:
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
                    <strong>{data.buyer}</strong> , a company incorporated under the Companies Act, 1956, having its
                    registered office at{' '}
                    <strong>
                      {data.buyerAddress?.fullAddress},{data.buyerAddress?.city} {data.buyerAddress?.country},{' '}
                      {data.buyerAddress?.pinCode}
                    </strong>{' '}
                    through its Authorised Signatory (hereinafter called <strong>{data.shortbuyer}</strong>, which
                    expression shall, where subject and content allow or admit, be deemed to include its successors,
                    legal representatives and assigns) of the First Part,
                  </p>
                </td>
              </tr>
              <tr>
                <td align="center">
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
                    <strong>Associate Buyer</strong>, as detailed in&nbsp;
                    <strong>Schedule I</strong> hereof (hereinafter referred to as the “<strong>Associate Buyer</strong>
                    ”, which expression shall, where subject and content allow or admit, be deemed to include its
                    successors, legal representatives and assigns) of the Second Part.
                  </p>
                </td>
              </tr>
              <tr>
                <td align="center">
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
                    <strong>Stevedore</strong>(s), as detailed in&nbsp;
                    <strong>Schedule I</strong> hereof (hereinafter referred to as the “<strong>Stevedore/CHA</strong>”,
                    which expression shall, where subject and content allow or admit, be deemed to include its
                    successors, legal representatives and assigns) of the Third Part.
                  </p>
                </td>
              </tr>
              <tr>
                <td align="center">
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
                    <strong>CMA Agent</strong> (s), as detailed in&nbsp;
                    <strong>Schedule I</strong> hereof (hereinafter referred to as the “<strong>CMA Agent</strong>”,
                    which expression shall, where subject and content allow or admit, be deemed to include its
                    successors, legal representatives and assigns) of the Fourth Part.
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
                    WHEREAS <strong>{data.shortbuyer}</strong> has agreed to import Goods as detailed in{' '}
                    <strong>Schedule I </strong>
                    hereof on stock and sale basis as per Associateship Agreement entered into between{' '}
                    <strong>{data.shortbuyer}</strong>
                    and the Associate Buyer.
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
                    WHEREAS <strong>{data.shortbuyer}</strong>&nbsp;has appointed the Stevedore for handling the vessel
                    as detailed in <strong>Schedule I</strong> at Discharge Port. The complete details of vessel,
                    Discharge port and the plot allotted to&nbsp;
                    <strong>{data.shortbuyer}</strong>&nbsp;are mentioned at Schedule I.
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
                    WHEREAS the, LC opening Bank has a first ranking security right over the Goods and it has appointed
                    the CMA Agent in accordance with the terms of the Collateral Management Agreement executed by
                    Financing Bank
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
                    IT IS NOW HEREBY AGREED BY AND BETWEEN THE PARTIES AS UNDER: -
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
                      paddingLeft: '20px',
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
                        The Goods shall be stored at the Plot allotted to&nbsp;
                        <strong>{data.shortbuyer}</strong> by the Discharge Port authorities and shall be kept under the
                        control and custody of CHA on behalf of&nbsp;
                        <strong>{data.shortbuyer}</strong>. All dispatches from the plot shall be done by CHA solely on
                        the basis of Written Delivery Orders issued by&nbsp;
                        <strong>{data.shortbuyer}</strong>.
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
                        {' '}
                        Scope of Work of CHA:{' '}
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                        }}
                      >
                        The Scope of work of CHA shall include but not be limited to:
                      </p>
                      <ol
                        type="a"
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          paddingLeft: '20px',
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
                            arranging plot allotment in the name of <strong>{data.shortbuyer}</strong>
                            from the discharge Port authorities to store&nbsp;
                            <strong>{data.shortbuyer}</strong>'s cargo
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
                            discharge of cargo from the Vessel,
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
                            loading of wharf, intra carting at Port,
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
                            deployment of labors and equipments,
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
                            transportation from wharf to <strong>{data.shortbuyer}</strong> allotted plot, ensure that
                            the plot where goods are being stored is suitable for the storage of the goods,
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
                            segregated stacking cargo at plot grade wise,
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
                            placement of wagon indents, wagon cleaning, wooden plugging
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
                            loading into wagons/trucks, leveling of cargo, lime marking on stacks and wagons, placing
                            Railway Indents, Loading on wagons/trucks
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
                            Arranging round the clock security cover at the storage area,
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
                            liaison with Discharge Port authorities
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
                            obtaining RRs and arranging dispatches as per Written release orders issued by{' '}
                            <strong>{data.shortbuyer}</strong>, obtaining gate passes,
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
                            yard management,{' '}
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
                            maintenance of proper records and registers for incoming and outgoing of material,
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
                            water sprinkling as per PCB norms and other services as may be required by{' '}
                            <strong>{data.shortbuyer}</strong>
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                        }}
                      >
                        Safekeeping and Security of the Goods-Proper safekeeping and security of Goods shall be the
                        joint and several responsibilities of the Associate Buyer and Stevedore. The Associate Buyer and
                        Stevedore shall provide round the clock security guards at the Storage Plot allotted at
                        Discharge Port, where Goods shall be stored.&nbsp;
                        <strong>{data.shortbuyer}</strong> shall in no way be responsible or liable for any loss or
                        damage to the Goods for any reason whatsoever including shortage, theft or mix up.
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
                        Bill of Entry to be filed in the name <strong>{data.shortbuyer}</strong>. Payment of customs
                        duty, IGST, energy cess, Wharfage, CIMS and all other statutory charges shall be paid by the
                        Associate Buyer to&nbsp;
                        <strong>{data.shortbuyer}</strong> in advance at the time of Custom Clearance. The Associate
                        Buyer shall pay Port Charges directly to port or through the Stevedore who will take care of the
                        payments to Port and raise bills on IGI for this. A copy of the same has to be furnished to IGI.
                        Any penalty/demurrage on account of delayed payment shall be solely to the account of the
                        Associate Buyer
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
                        Port wharfage, pollution charges, plot rental, wagon haulage and terminal charges, Port Royalty
                        (if applicable) are to be paid by the Associate Buyer in advance to{' '}
                        <strong>{data.shortbuyer}</strong> as per the Discharge Port. HMC crane charges at the Discharge
                        Port and any pre berthing delays/detentions/demurrages will be to the account of the Associate
                        Buyer on actual basis.
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
                        CHA/Stevedore will raise invoice on the Associate Buyer and payments shall be made by the
                        Associate Buyer to Stevedore based on the agreed rate terms & Conditions.
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
                        CHA/Stevedore will apply for EDRM permission and place indent online. The Associate Buyer will
                        pay the railway freight and related charges directly.
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
                        Scanned copy of RR shall be furnished by Stevedore to&nbsp;
                        <strong>{data.shortbuyer}</strong> as well as to Associate Buyer as soon as it is issued after
                        loading. The original RR shall be sent by Stevedore to the Associate Buyer for taking delivery
                        of the rake. The final reconciliation shall be done based on the BL quantity.
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
                        The Associate Buyer will arrange comprehensive storage insurance against all risks for{' '}
                        <strong>110</strong> of the value of goods. The insurance policy will indicate&nbsp;
                        <strong>{data.shortbuyer}</strong> or its nominated Bank (as per&nbsp;
                        <strong>{data.shortbuyer}</strong>'s discretion), as sole beneficiary. The Associate Buyer shall
                        inform Stevedore the details of the goods for which <strong>{data.shortbuyer}</strong>/IGI's
                        nominated Bank shall be the beneficiary for the entire insured value of such pledged goods as
                        per the B/L, quantity kept in the custody of CHA/Stevedore. In case of any claim on insurance
                        company the same shall be claimed and pursued till realization by the Associate Buyer at its
                        sole cost and the Associate Buyer shall indemnify Stevedore and IGI against all risks.
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
                        <strong>{data.shortbuyer}</strong> and CMA Agent (Collateral Manager appointed by LC opening
                        Bank) shall have free and unfettered access to the plot where the goods are stored without any
                        prior notice to the plot keeper during all reasonable hours including the right of ingress and
                        egress to and from the plot by <strong>{data.shortbuyer}</strong> 's and /or CMA Agent's
                        officials, agents, other nominated buyers, if any, of <strong>{data.shortbuyer}</strong> and/or
                        CMA Agent, its vehicles, any Government Agency, for storing/de-storing/removing the material in
                        or from the plot without any hindrance or obstruction.
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
                        The role of CMA Agent shall be to supervise the storage, ingress and exit of material at the
                        storage area in accordance with the Collateral Management Agreement entered into by CMA Agent.
                        The Stevedore and the Associate Buyer shall provide necessary support, help and assistance to
                        CMA Agent as may be required by them at all times. CMA Agent's Officials/ representatives/agents
                        shall peacefully enjoy unrestricted and unfettered access to the Storage Area during the term or
                        duration of this Agreement, without disturbance or interruption or obstruction from the
                        Associate Buyer or Stevedore or any person claiming under them. Port safety precautions,
                        indemnity as conveyed to the service providers and the Associate Buyer to be complied with at
                        all times.
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
                        CHA/Stevedore shall at all times follow and be bound by the instructions solely of{' '}
                        <strong>{data.shortbuyer}</strong> with regard to delivery of the Goods. Stevedore confirms and
                        undertakes that it shall not release the Goods without the written Release Order of&nbsp;
                        <strong>{data.shortbuyer}</strong>. Stevedore shall have no objection whatsoever, if{' '}
                        <strong>{data.buyer}</strong> instructs it to deliver the Goods to any third party so nominated
                        by them. The instructions of the&nbsp;
                        <strong>{data.buyer}</strong> shall be followed forthwith, without any objection, hindrance or
                        delay whatsoever
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
                        CHA/Stevedore shall maintain all records as necessary, statutorily or otherwise for the receipt,
                        storage and release of goods from the warehouse and furnish a daily report to{' '}
                        <strong>{data.shortbuyer}</strong> & the Associate Buyer. Under no circumstance releases will be
                        made by Stevedore or be taken by the Associate Buyer without obtaining proper Release Order in
                        writing from <strong>{data.shortbuyer}</strong>. Stevedore and the Associate Buyer jointly and
                        severally agree to indemnify and hold harmless at all times <strong>{data.shortbuyer}</strong>,
                        its officers, agents, employees for any losses, damages, claims, costs and expenses incurred by{' '}
                        <strong>{data.shortbuyer}</strong> due to unauthorized, improper release of the Goods, shortage
                        and/or for breach of the terms of this Agreement.
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
                        This Agreement is irrevocable and non-assignable by the Associate Buyer and Stevedore until the
                        entire Goods stored at the storage facility have been delivered to the Associate Buyer, or to
                        the persons nominated by <strong>{data.shortbuyer}</strong> under the Authorized Release Orders.
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
                        In the event the Associate Buyer does not lift the goods/material within the scheduled period{' '}
                        <strong>{data.shortbuyer}</strong> has the right to sell/dispose of the Goods at the sole risk,
                        cost of the Associate Buyer. The Associate Buyer shall liable to pay to&nbsp;
                        <strong>{data.shortbuyer}</strong> the loss (if any) incurred by&nbsp;
                        <strong>{data.shortbuyer}</strong>.
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
                        Any disputes or differences in respect of any matter relating to or arising out of this
                        Quadripartite Agreement between the parties hereto shall be settled mutually and if the same is
                        not resolved amicably, then the same will be settled by Arbitration by a Sole Arbitrator in
                        accordance with Rules of Arbitration formulated by Indian Council of Arbitration (ICA). The
                        Award made in pursuance thereof shall be binding on the parties. The seat and venue of the
                        Arbitration will be New Delhi and the language of Arbitration Proceedings shall be in English.
                      </p>
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: '20px' }}>
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
                          Name of Associate Buyer
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
                          Address of Associate Buyer
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
                          GST of Associate Buyer
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
                          {data.associateBuyerGst}
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
                          PAN of Associate Buyer
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
                          V {data.associateBuyerPan}
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
                          Signatory of Associate Buyer
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
                          <ol>
                            {data?.associateBuyerAuthorized?.length > 0 &&
                              data?.associateBuyerAuthorized?.map((val, index) => {
                                return (
                                  <li>
                                    <div>
                                      Name- <span>{val.name}</span>
                                    </div>
                                    <div>
                                      Designation- <span>{val.designation}</span>
                                    </div>
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
                          Name of Stevedore
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
                          {data.stevedore}
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
                          Address of Stevedore
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
                          {data.stevedoreAddress?.fullAddress},{data.stevedoreAddress?.city}{' '}
                          {data.stevedoreAddress?.country}, {data.stevedoreAddress?.pinCode}
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
                          Signatory of Stevedore
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
                          <ol>
                            {data?.stevedoreAuthorized?.length > 0 &&
                              data?.stevedoreAuthorized?.map((val, index) => {
                                return (
                                  <li>
                                    <div>
                                      Name- <span>{val.name}</span>
                                    </div>
                                    <div>
                                      Designation- <span>{val.designation}</span>
                                    </div>
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
                          Name of CMA Agent
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
                          {data.cma}
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
                          Address of CMA Agent
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
                          {data.cmaAddress?.fullAddress},{data.cmaAddress?.city} {data.cmaAddress?.country},{' '}
                          {data.cmaAddress?.pinCode}
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
                          Signatory of CMA Agent
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
                          <ol>
                            {data?.cmaAuthorized?.length > 0 &&
                              data?.cmaAuthorized?.map((val, index) => {
                                return (
                                  <li>
                                    <div>
                                      Name- <span>{val.name}</span>
                                    </div>
                                    <div>
                                      Designation- <span>{val.designation}</span>
                                    </div>
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
                          Commodity Details
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
                          {data.detailsOfComm}
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
                          Quantity
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
                          {data.quan?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                          })}{' '}
                          MT
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
                          {data.supplier}
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
                          Details of Vessel
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
                          {data.vessel}
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
                          Port of Loading
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
                          {data.lordPort}
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
                          Port of Discharge
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
                          {data.dischargePort}
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
                          Storage Plot allotted to IGI
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
                          {data.storagePlot}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td align="left" colSpan={2}>
                        <p
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            paddingTop: '30px',
                          }}
                        >
                          <strong>SIGNATURE PAGE</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <p
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                          }}
                        >
                          <strong>(Seller)</strong>
                        </p>
                      </td>
                      <td align="center">
                        <p
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                          }}
                        >
                          <strong>(Buyer)</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="50%">
                        <p
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            marginBottom: '0',
                          }}
                        >
                          {data.seller}
                        </p>
                      </td>
                      <td align="center" width="50%">
                        <p
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            marginBottom: '0',
                          }}
                        >
                          {data.buyer}
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
    </>
  );
};
export const igiPrint = (data) => {
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
        <td valign="top" style={{ padding: '20px' }}>
          <table width="100%" cellPadding="0" cellSpacing="0" border="0">
            <tr>
              <td align="center" style={{ padding: '15px 0' }}>
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
                  }}
                >
                  <strong>FOR RECEIPT, STORAGE, CUSTODY AND ISSUE OF PLEDGED GOODS</strong> hereto by and between:
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
                  This Tripartite Agreement (<strong>“Agreement”</strong>) is made at the place and on the day as set
                  out in <strong>Schedule I </strong>hereto by and between:
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
                  <strong>{data.buyer}</strong>, a Company incorporated under the Companies Act, 1956, having its{' '}
                  <strong>registered office</strong> at{' '}
                  <strong>
                    {data.buyerAddress?.fullAddress},{data.buyerAddress?.city} {data.buyerAddress?.country},{' '}
                    {data.buyerAddress?.pinCode}
                  </strong>
                  through its Authorised Signatory (hereinafter referred as the “<strong>{data.buyerseller}</strong> ”,
                  which expression shall, unless excluded by or repugnant to the context be deemed to include its legal
                  heirs, successors and permitted assigns) of the First Part.)
                </p>
              </td>
            </tr>
            <tr>
              <td align="center">
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
                  The Collateral Manager as detailed in Schedule I (hereinafter referred as the “
                  <strong>Collateral Manager</strong>”, which expression shall, unless excluded by or repugnant to the
                  context be deemed to include its legal heirs, successors and permitted assigns) of the Second Part.
                </p>
              </td>
            </tr>
            <tr>
              <td align="center">
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
                  <strong>{data.seller}</strong>(hereinafter referred as the <strong>“IIAG”</strong>, which expression
                  shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors
                  and permitted assigns) of the Third Part.
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
                  <strong>WHEREAS</strong>
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
                  <strong>{data.shortseller}</strong> is engaged in the business of trading of industrial commodities,
                  which are stored at the Designated Storage Area as detailed in Schedule-I.
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
                  <strong>{data.buyerseller}</strong> has purchased Commodity from the Supplier, that has been financed
                  by the “Financing Bank”. The details of the commodity purchased, Supplier and the Financing Bank are
                  mentioned in Schedule-I.
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
                  Financing Bank has a first ranking security right over the Goods in the form of a pledge, and has
                  appointed Collateral Manager pursuant to the terms of the tripartite collateral management agreement
                  executed between
                  <strong>{data.shortseller}</strong> , Collateral Manager and Financing Bank as amended from time to
                  time (the “<strong>Collateral Management Agreement</strong>”) for the purpose of keeping the custody
                  and control of Goods.
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
                  Pursuant to the Collateral Management Agreement, the Goods shall remain under the exclusive custody,
                  control and supervision of Collateral Manager and under the order of Financing Bank.
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
                  <strong>{data.buyerseller}</strong>hereby agrees that it shall grant unrestricted access to a clearly
                  demarcated part of the Storage Facility (as per stocking requirement) in ready-to-operate-condition
                  exclusively for the use of Collateral Manager where the pledged Goods shall only be stored (the “
                  <strong>Designated Storage Area</strong>”).
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
                  <strong>{data.buyerseller}</strong>hereby agrees that it shall grant unrestricted access to a clearly
                  demarcated part of the Storage Facility (as per stocking requirement) in ready-to-operate-condition
                  exclusively for the use of Collateral Manager where the pledged Goods shall only be stored (the “
                  <strong>Designated Storage Area</strong>”).
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
                  IT IS HEREBY AGREED AS FOLLOWS:
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
                  <strong>Article 1 - STORAGE FACILITY</strong>
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
                  <strong>{data.buyerseller}</strong>hereby grants unrestricted access of the Designated Storage Area to
                  Collateral Manager, which is in a ready to store condition. The Plan duly marking the Designated
                  Storage Area is attached Schedule 1 to this Agreement. The Goods deposited in the Designated Storage
                  Area shall be accessed exclusively by Collateral Manager during the term of this Agreement.
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
                  <strong>
                    Article- 2-RESPONSIBILITY OF <strong>{data.buyerseller}</strong>
                  </strong>
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
                  <strong>{data.buyerseller}</strong> shall:
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
                  <span className="mr-6">2.1</span> prior to granting access to the Designated Storage Area, be
                  responsible for clearly demarcating the Designated Storage Area with chalk and rope from all sides for
                  clear demarcation and identification for the exclusive and sole access of Collateral Manager for
                  storing the Goods or any other materials as agreed in writing.
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
                  <span className="mr-6">2.2</span> be responsible for prominently displaying on the board at the
                  entrance of the Designated Storage Area clearly stating that the Goods are under the custody of
                  Collateral Manager and held on behalf of <strong>{data?.shortseller}</strong>
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
                  <span className="mr-6">2.3</span> be responsible for putting a Placard on each lot of Goods stored at
                  the Designated Storage Area clearly specifying the name of <strong>{data?.shortseller}</strong> as the
                  owner of the Goods and Collateral Manager as the Collateral Manager as custodian of the Goods;
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
                  <span className="mr-6">2.4</span> be responsible for providing an office equipped with required
                  infrastructure such as electricity, toilet, telephone, access to fax, email etc. will have to be
                  provided free of cost to Collateral Manager and the running cost of these facilities will also be
                  borne by <strong>{data.buyerseller}</strong>. Collateral Manager and their representatives shall have
                  unfettered access to the warehouse/stockyard;
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
                  <span className="mr-6">2.5</span> be responsible for granting unrestricted and unfettered control and
                  access to Collateral Manager over the Designated Storage Area;
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
                  <span className="mr-6">2.6</span> Obtain permission from Customs to open the Customs Notified Area
                  where the Designated Storage area is located for conducting audit/stock verification/stock assessment
                  as and when required by Collateral Manager or its authorised representatives by providing full
                  cooperation and without creating any hindrance or obstacle
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
                  <span className="mr-6">2.7</span> ensure that the Designated Storage Area where pledged Goods being
                  stored is suitable for the storage of the goods being stored therein; and
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
                  <span className="mr-6">2.8</span> be responsible for payment of all taxes, duties and/or service
                  charges presently assessed on the Designated Storage Area, as at the date of signature thereof.
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
                  <strong>Article-3 RESPONSIBILITY OF COLLATERAL MANAGER </strong>
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
                  Collateral Manager shall:
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
                  <span className="mr-6">3.1</span> ensure that the Designated Storage Area is manned with adequate
                  surveyors round the clock at the Designated Storage Area. The fees for the surveyors shall be borne by
                  Collateral Manager;
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
                  <span className="mr-6">3.2</span> ensure that all safety regulations or industrial regulations will be
                  adhered to at all point of time;
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
                  <span className="mr-6">3.3</span> ensure that at least 3 staff and/or representatives of Collateral
                  Manager will attend the storage yard at all times during the Term of this Agreement;
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
                  <span className="mr-6">3.4</span> ensure that it fulfills all its obligations as laid down in the
                  Collateral Management Agreement
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
                  <span className="mr-6">3.5</span> shall maintain proper records and registers for incoming and
                  outgoing of material; and
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
                  <span className="mr-6">3.6</span> not assign his/its rights under this Agreement.
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
                  <strong>Article 4 - TERM </strong>
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
                  This Agreement is made on the Effective Date and is entered into by
                  <strong>
                    {data.shortseller}, {data.shortbuyer}
                  </strong>
                  and Collateral Manager for a period during which the Collateral Management Agreement, pursuant to
                  which Collateral Manager is providing the collateral management services (“
                  <strong>CMA Services</strong>”), is remains valid and in force.
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
                  <strong>Article 5 - UTILISATION OF THE DESIGNATED STORAGE AREA </strong>
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
                  <span className="mr-6">5.1</span> Collateral Manager will provide CMA Services at the Designated
                  Storage Area in accordance with the Collateral Management Agreement.
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
                  <span className="mr-6">5.2</span> <strong>{data.shortbuyer}</strong> undertakes that the pledged Goods
                  shall be separately stocked at the Designated Storage Area under the custody and control of Collateral
                  Manager
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
                  <strong>Article 6 - IRREVOCABLE AGREEMENT </strong>
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
                  This Agreement is irrevocable until the entire stock stored therein has been delivered to IGI under
                  the written authorised release orders received by Collateral Manager from the Financing Bank (“
                  <strong>Release Orders</strong>”).
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
                  <strong>Article 7 - INSURANCE</strong>
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
                  <span className="mr-6">7.1</span> <strong>{data.buyerseller}</strong> shall take out and maintain an
                  all risks cargo insurance policy in respect of the Goods which terms are acceptable to the respective
                  Financing Bank at its full discretion. The policy shall cover loss, strikes, riots, civil commotion,
                  theft, misappropriation and damage of the Goods during storage in the Designated Storage Area and
                  while under transport to and from the Designated Storage Area. The Insurance shall remain valid until
                  the period that the entire Goods at the Designated Storage Area have been released by Collateral
                  Manager to <strong>{data.buyerseller}</strong>. The insurance policy shall name the Financing Bank as
                  a beneficiary of insurances and loss payee.
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
                  <span className="mr-6">7.2</span> Upon request <strong>{data.buyerseller}</strong>
                  will deliver to Collateral Manager and IIAG a copy of the relevant insurance agreements, policies and
                  related documents together with evidence that the premiums have been paid.
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
                  <strong>Article 8 - PROPERTY TAXES</strong>
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
                  <strong>{data.buyerseller}</strong> shall be responsible for the payment of all Land and Building
                  taxes as may be applicable and that relate to the Designated Storage Area.
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
                  <strong>Article 9 - ELECTRICITY AND WATER SUPPLY</strong>
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
                  During the period of this Agreement, <strong>{data.buyerseller}</strong> shall be responsible for
                  payment of all charges with regard to water and electricity.
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
                  <strong>Article 10 - CHARGES/DUTIES/TAXES</strong>
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
                  <strong>{data.buyerseller}</strong> shall bear all duties, taxes, cesses, levies etc. payable under
                  present Indian State/Central Government/Semi Government Policies or payable in future under any newly
                  implemented Government Policy/ies in respect of the said Designated Storage Area
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
                  <strong>{data.buyerseller}</strong>hereby agrees to make the payments referred above regularly without
                  any delay and default and shall produce to Collateral Manager, after expiry of every 12 months,
                  certified copies of the receipts for the payments made during such period.
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
                  <strong>Article 11 - RENOVATIONS / ALTERATIONS</strong>
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
                  Collateral Manager will not make any renovations or alterations to the Designated Storage Area.
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
                  <strong>Article 12 - DEPOSITS</strong>
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
                  <strong>{data.buyerseller}</strong> will pay any deposits due in respect of water and electricity
                  charges as may be required. <strong>{data.buyerseller}</strong>
                  hereby indemnifies Collateral Manager against any consequences that may arise as a result of failure
                  to pay said deposits or any claims whatsoever with regards to any of the charges.
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
                  <strong>Article 13 - IGI's OBLIGATIONS</strong>
                </p>
                <ul
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    paddingLeft: '20px',
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
                      <strong>{data.buyerseller}</strong> shall arrange to obtain no claim on inventory letters from all
                      and any party who has an interest in the Storage Facility/Designated Storage Area. Such letters
                      shall proclaim that the parties concerned recognize and agree that they do not have any ownership
                      or title rights to the Goods stored at the Designated Storage Area, and that they shall not bring
                      any claim to bear on the Goods, under the custody, control and supervision of Collateral Manager
                      and stored in the Designated Storage Area.
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
                      <strong>{data.buyerseller}</strong>shall furnish written confirmation to Collateral Manager that
                      there are no circumstances of which he is aware that may give rise to a claim over the land, plot,
                      Designated Storage Area or the Goods stored therein during the period of this Agreement.
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
                      During the period of this Agreement, <strong>{data.buyerseller}</strong> shall warrant that it
                      will allow Collateral Manager to have the custody, control and supervision of the Goods stored at
                      the Designated Storage Area without any interruption and obstruction
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
                      <strong>{data.buyerseller}</strong> further agrees that he shall not, for any reason whatsoever,
                      prevent Collateral Manager from entering or leaving the Designated Storage Area nor shall it at
                      any time prevent Collateral Manager from taking in, or delivering out, the Goods stored therein
                      which shall be done under the supervision of Collateral Manager at the written instance of the
                      Financing Bank.
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
                      <strong>{data.buyerseller}</strong> hereby waives all rights to the Goods stored under the custody
                      of Collateral Manager and shall not remove, transfer or otherwise attempt to gain control of the
                      Goods unless authorized in writing by Collateral Manager .
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
                      <strong>{data.buyerseller}</strong> shall take the delivery of the Goods from Collateral Manager
                      only upon receipt [by Collateral Manager] of the Release Orders from the Financing Bank and then
                      released by Collateral Manager on instructions of <strong>{data?.shortseller}</strong>
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
                      <strong>{data.buyerseller}</strong> warrants that Collateral Manager shall enjoy complete and
                      uninterrupted custody of the Goods in the Designated Storage Area
                    </p>
                  </li>
                </ul>
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
                  <strong>Article 14-WARRANTIES OF IGI </strong>
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
                  <strong>{data.buyerseller}</strong> HEREBY WARRANTS AS FOLLOWS:
                </p>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <ul
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    paddingLeft: '20px',
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
                      It has full right and absolute authority to provide the Designated Storage Area to Collateral
                      Manager for its exclusive use to enable Collateral Manager to carry out its obligations under the
                      Collateral Management Agreement.
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
                      <strong>{data.buyerseller}</strong>shall furnish written confirmation to Collateral Manager that
                      there are no circumstances of which he is aware that may give rise to a claim over the land, plot,
                      Designated Storage Area or the Goods stored therein during the period of this Agreement.
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
                      During the period of this Agreement, <strong>{data.buyerseller}</strong> shall warrant that it
                      will allow Collateral Manager to have the custody, control and supervision of the Goods stored at
                      the Designated Storage Area without any interruption and obstruction
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
                      Collateral Manager shall peacefully hold and enjoy unrestricted access of the Designated Storage
                      Area during the term or duration of this Agreement, without disturbance or interruption or
                      obstruction from <strong>{data.buyerseller}</strong> or any person claiming under it.
                    </p>
                  </li>
                </ul>
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
                  <strong>Article 15-INDEMNITY BY IGI </strong>
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
                  <strong>{data.buyerseller}</strong> agrees to indemnify and keep indemnified, defend and hold harmless
                  Collateral Manager and
                  <strong>{data.buyerseller}</strong>, its officers, directors, employees and agents from and against
                  any and all losses, liabilities, claims, obligations, costs, expenses arising during the duration of
                  this Agreement, which result from, arise in connection with or are related in any way to claims by
                  third parties or regulatory authorities, and which directly arise due to any reasons whatsoever and
                  including the following
                </p>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <ol
                  type="i"
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    paddingLeft: '20px',
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
                      <strong>{data.buyerseller}</strong> 's breach of the terms of this Agreement or;
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
                      negligence, fault or misconduct by <strong>{data.buyerseller}</strong> or its officers, employees,
                      agents, subcontractors and/or representatives and/or other persons authorized to act on its
                      behalf;
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
                  <strong>Article 16-SURVIVAL OF INDEMNITY </strong>
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
                  The responsibility of <strong>{data.buyerseller}</strong> to indemnify set forth in this Clause and
                  the obligations there under, shall survive the termination of this Tripartite Agreement for any reason
                  whatsoever with regard to any indemnity claims arising out of or in relation to the performance
                  hereof.
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
                  <strong> Article 17- GOVERNING LAW AND ARBITRATION</strong>
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
                  Any disputes or differences in respect of any matter relating to or arising out of this Quadripartite
                  Agreement between the parties hereto shall be settled mutually and if the same is not resolved
                  amicably, then the same will be settled by Arbitration by a Sole Arbitrator in accordance with Rules
                  of Arbitration formulated by Indian Council of Arbitration (ICA). The Award made in pursuance thereof
                  shall be binding on the parties. The seat and venue of the Arbitration will be New Delhi and the
                  language of Arbitration Proceedings shall be in English.
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
                  IN WITNESS WHEREOF the parties hereto caused this Agreement to be executed by their duly authorized
                  representatives on the date first written above.
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ paddingTop: '20px' }}>
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
                <table width="100%" cellPadding="10" style={{ border: '1px solid #000000' }} cellSpacing="0" border="0">
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
                        Name of Collateral Manager
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
                        {data.cma}
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
                        Address of Collateral Manager
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
                        {data.cmaAddress?.fullAddress},{data.cmaAddress?.city} {data.cmaAddress?.country},{' '}
                        {data.cmaAddress?.pinCode}
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
                        Authorized signatory of Collateral Manager
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
                        <ol>
                          {data?.cmaAuthorized?.length > 0 &&
                            data?.cmaAuthorized?.map((val, index) => {
                              return (
                                <li>
                                  <div>
                                    Name- <span>{val.name}</span>
                                  </div>
                                  <div>
                                    Designation- <span>{val.designation}</span>
                                  </div>
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
                        Designated Storage Area
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
                        {data.designatedStorageArea}
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
                        Details of Commodity
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
                        {data?.detailsOfComm}
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
                        Quantity of Goods
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
                        {data?.quan?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                        })}{' '}
                        MT
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
                        {data.supplier}
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
                        {data.supplierAddress?.fullAddress},{data.supplierAddress?.city} {data.supplierAddress?.country}
                        , {data.supplierAddress?.pinCode}
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
                        Financing Bank Name
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
                        {data.financialBank}
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
                        Financing Bank Address
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
                        {data.financialAddress}
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
                    <td colSpan={2} align="left">
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                        }}
                      >
                        <strong>SIGNATURE PAGE</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" width="50%">
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
                    <td align="center" width="50%">
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
                  </tr>
                  <tr>
                    <td align="center">
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                        }}
                      >
                        {data.seller}
                      </p>
                    </td>
                    <td align="center">
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                        }}
                      >
                        {data.buyer}
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
};
export const sellerPrint = (data) => {
  return (
    <>
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
          <td valign="top" style={{ padding: '20px' }}>
            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
              <tr>
                <td align="center" style={{ padding: '15px 0' }}>
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
                    <strong>{data.seller}</strong>, a company organized and existing in accordance with Law of
                    Switzerland and having address at{' '}
                    <strong>
                      {' '}
                      {data.sellerAddress?.fullAddress},{data.sellerAddress?.city} {data.sellerAddress?.country},{' '}
                      {data.sellerAddress?.pinCode}
                    </strong>{' '}
                    through its Authorized Signatory (hereinafter referred to as the &quot;<strong>Buyer</strong>&quot;,
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
                          <ol>
                            {data?.supplierAuthorized?.length > 0 &&
                              data?.supplierAuthorized?.map((val, index) => {
                                return (
                                  <li>
                                    <div>
                                      Name- <span>{val.name}</span>
                                    </div>
                                    <div>
                                      Designation- <span>{val.designation}</span>
                                    </div>
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
                          <ol>
                            {data?.supplierEmail?.length > 0 &&
                              data?.supplierEmail?.map((val, index) => {
                                return <li>{val.email}</li>;
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
                          {data?.endBuyer}
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
                          <ol>
                            {data?.associateBuyerAuthorized?.length > 0 &&
                              data?.associateBuyerAuthorized?.map((val, index) => {
                                return (
                                  <li>
                                    <div>
                                      Name- <span>{val.name}</span>
                                    </div>
                                    <div>
                                      Designation- <span>{val.designation}</span>
                                    </div>
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
                          <ol>
                            {data?.buyerEmail?.length > 0 &&
                              data?.buyerEmail?.map((val, index) => {
                                return <li>{val.email}</li>;
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
                            <div>
                              <div>
                                <div>
                                  <table>
                                    <tr>
                                      {data?.spec &&
                                        data?.spec.length > 0 &&
                                        Object.keys(data?.spec[0]).map((val, index) => <th key={index}>{val}</th>)}
                                    </tr>
                                    {data?.spec &&
                                      data?.spec.length > 0 &&
                                      data?.spec.map((item, index) => (
                                        <tr>
                                          {Object.values(item).map((value, id) => (
                                            <td key={id}>{value}</td>
                                          ))}
                                        </tr>
                                      ))}
                                  </table>
                                </div>
                              </div>
                            </div>
                            {data.specComment.length > 0 ? <b>Comments</b> : null}
                            <ol>
                              {data.specComment.length > 0 &&
                                data.specComment.map((val, index) => {
                                  return <li>{val}</li>;
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
                      <td align="center" width="50%">
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
                      <td align="center" width="50%">
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
                      <td align="center">
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
                      <td align="center">
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
                      <td align="center">
                        <p
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                          }}
                        >
                          End Buyer
                        </p>
                      </td>
                      <td align="center">
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
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </>
  );
};
