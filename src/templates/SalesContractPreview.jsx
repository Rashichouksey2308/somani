import moment from 'moment';

export default function SalesContractPreview(data) {
  
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
            padding: '10px 20px 20px',
            fontSize: '12px',
            lineHeight: '18px',
            color: '#000000',
          }}
        >
          <span align="center" style={{color: '#000000', display:'block', marginBottom:'16px'}}>
            <strong>SALES CONTRACT</strong>
          </span>
          <span align="justify" style={{ color: '#000000', display:'inline-block'}}>
            This Sales Contract("<strong>Sales Contract No.: {data.shortseller + '/' + data.shortbuyer + '/' + `${moment().year()}`+ "/" + data.orderId2}</strong>") is made at the place and on the day as set out in <strong>Schedule I</strong> between the Seller and the
            Buyer.
          </span>
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
            padding: '5px 20px 20px',
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
                <span style={{color:'#000000', display:'block'}}>1</span>
              </td>
              <td
                width="25%"
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Seller</span>
              </td>
              <td
                width="70%"
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  <>{data?.seller}</>
                  <br/>
                  <>{data.sellerAddress?.fullAddress},{data.sellerAddress?.city} {data.sellerAddress?.country}, {data.sellerAddress?.pinCode}
                  </>
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
                <span style={{color:'#000000', display:'block'}}>2</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Buyer</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  <>{data?.buyer}</>
                  <br></br>
                  <>{data.buyerAddress?.fullAddress}, {data.buyerAddress?.city} {data.buyerAddress?.country}, 
                    {data.buyerAddress?.pinCode}
                  </>
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
                <span style={{color:'#000000', display:'block'}}>3</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Manufacturer/Supplier / Shipper</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Details as per Schedule 1</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>4</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>End User / End Buyer</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Details as per Schedule 1</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>5</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Commodity, Quantity, Specification and Unit Price</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Details as per Schedule 1</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>6</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Total Order Value </span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Details as per Schedule 1</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>7</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Discharge Port</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Details as per Schedule 1</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>8</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Loading Port</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Details as per Schedule 1</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>9</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Quality / Inspection </span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  In case of issues in Quality, Neutral agency certification for Quality and Quantity will be considered as final and binding on Buyer &amp; Seller. Load port report for quality and quantity are final and binding between Seller and Buyer for all purpose. If any dispute arises relating but not limited to quantity, quality, the same is to be settled directly between Manufacturer/shipper and Buyer.
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
                <span style={{color:'#000000', display:'block'}}>10</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Duties and Taxes</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  All Taxes and duties, present or future, including variations thereto and other taxes shall be borne and paid by Buyer.
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
                <span style={{color:'#000000', display:'block'}}>11</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Shipment </span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Details as per Schedule 1</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>12</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Payment Terms </span>
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
                    All the custom clearance formalities, Duties, Taxes and other charges related to import of cargo and custom clearance shall be to Buyer's account and shall be solely the Buyer's responsibility.
                  </li>
                  <li style={{ color: '#000000', marginBottom: '10px' }}>
                    The Buyer shall pay for entire cargo within 90 days from the date of B/L or 60 days from the date of discharge of vessel at discharge port, whichever is earlier. The Buyer shall make full payment of the material to be lifted through TT remittance. The Seller shall release the part material to Buyer upon receipt of part payment for the part quantity of material to be lifted after obtaining delivery order or Written Release Order from the LC opening bank as per CMA. The delivery order instructions shall be issued for the part material, for which the payment has been made within one banking day. However, Seller will provide first delivery order in Advance as per buyer's request.
                  </li>
                  <li style={{ color: '#000000', marginBottom: '10px' }}>
                    The material shall be stored at Discharge Port for which the cost of such Rent, Claim, and penalty shall be fully borne by the End User. Upon release of payment for the value of each B/L Quantity Release Order from the Financing Bank shall be sent to the CMA Agent, within one banking day.
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
            padding: '20px',
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
                <span style={{color:'#000000', display:'block'}}>13</span>
              </td>
              <td
                width="25%"
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Insurance </span>
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
                    Stock Insurance: The Buyer will arrange insurance for 110% of the cargo value at discharge port, valid at all times covering All Risk including Fire, Burglary and Act of God (AOG). The cargo shall be insured by the Buyer at its own cost for the full value of cargo. The Policy shall be endorsed in favour of the Seller or its nominated Bank. The Beneficiary of the Insurance Claim shall be the Seller or its nominated Bank as per Seller's instructions.
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
                <span style={{color:'#000000', display:'block'}}>14</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Shipping Terms </span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  All demurrage/despatch for discharge port to be settled directly between Shipper, Vessel Owner agent and End User with no liability upon the Seller whatsoever.
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
                <span style={{color:'#000000', display:'block'}}>15</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Title / Risk </span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  Title to the Goods shall be deemed to have been transferred to the Buyer and the Goods shall be deemed to be sold and delivered to the Buyer only upon receipt by the Seller of the entire contract value. It is clarified that the Seller shall retain lien and the full legal ownership in the Goods, to secure the Buyer's obligation to pay the entire contract value, until receipt by the Seller of the entire contract value. All risk of loss or damage shall pass to the Buyer as per Incoterms 2020.
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
                <span style={{color:'#000000', display:'block'}}>16</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Time is the essence</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  Time is the Essence of the Contract. In the event of failure of the Buyer to fulfill its obligations as contained herein including making of the payment and taking of the delivery of the material within the time period specified in the Clause Payment Terms hereinabove, it shall constitute a material breach of the Agreement.
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
                <span style={{color:'#000000', display:'block'}}>17</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Remedies Available to the Seller</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <ol type="A" style={{ paddingLeft: '16px', marginBottom: '0' }}>
                  <li style={{ color: '#000000' }}>
                    In the event of the failure of the Buyer to make timely payment as agreed to in terms of the Clause Payment Terms hereinabove, the Buyer shall pay the overdue interest @ 18% p.a. to the Seller for each day of delay. However, the delay in making the payment shall in no event exceed 15 days beyond the due date of making the payment as specified hereinabove.
                  </li>
                  <li style={{ color: '#000000' }}>
                    However, in the eventuality of Buyer failing to pay for and/or take delivery as per Clause Payment Terms beyond 15 days of the due date, the Seller shall have the absolute right to dispose off the Material, on terms and conditions as may be deemed fit by the Seller, to any other party at full risk, responsibility and costs of Buyer, including financial costs, other expenses as well as liquidated damages. The Buyer further agrees to make good the losses, financial costs and expenses incurred by the Seller due to such disposal of the goods, within 3 working days of the receipt of the demand by the Buyer from the Seller.
                  </li>
                  <li style={{ color: '#000000' }}>
                    The Buyer shall forthwith on demand indemnify the Seller against all the direct losses, liabilities, claims or damages which Seller shall incur as a result of any breach by the Buyer (including but not limited to any claim, loss, liability or damage Seller may incur to a third party as shipper of the product).
                  </li>
                  <li style={{ color: '#000000' }}>
                    Failure of the Buyer to make payment in terms of clause hereinabove will entitle the Seller to seek appropriate remedies available to it under the laws of the jurisdiction where the goods are stored for recovery of the amounts and / or any other relief as thought fit by the Seller in its sole discretion.
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
                <span style={{color:'#000000', display:'block'}}>18</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Special Conditions </span>
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
                    It is expressly and unconditionally agreed and Buyer fully acknowledges that the title in the goods / material shall pass on to the Buyer only in respect of such specific quantity thereof as released from the storage facility by Collateral Manager in terms of the 'Tripartite Agreement' after receipt of the price and other payables in respect thereof and actual delivery of the goods having been made to the Buyer. The Seller shall continue to be the owner, holding absolute title in the goods/material not so released and delivered to the Buyer in any contingency including of Buyer even becoming insolvent but not limiting, and shall be entitled to deal with the goods/material as it may deem fit including disposing them of at the risk and cost of the Buyer. For the avoidance of doubt,
                    the parties agree and acknowledge that the Goods shall not be in any manner whatsoever be construed to be in the constructive or actual possession of the Buyer until the Goods are released and delivered by the Seller in accordance with this Agreement. The Buyer specifically represents and agrees to not exercise any or all such possessory rights on the Goods until the Goods are released and delivered by the Seller in accordance with this Agreement.
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    Notwithstanding anything contained herein to the contrary, all risks, consequences arising out of the actual transaction(s) taking place between Manufacturer/shipper and the Seller under the Contract and/or any modified/amended agreement will be to the account of the Buyer only. The Seller shall in no way be responsible or liable for the same.
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    The BUYER unconditionally agrees to abide by a collateral management agreement by and among "<strong>Collateral Manager</strong>", "<strong>Financing Bank</strong>" and "<strong>Seller</strong> and undertakes not to take any delivery of Goods unless Collateral Manager releases such quantity of the Goods in accordance with the Bank's written release instructions under the Collateral Management Agreement. If Buyer, directly or indirectly, violates the undertaking in the preceding sentence, then Buyer shall indemnify Seller for any loss, liability or claim (including without limitation any
                    expenses incurred) without any demur or protest. The Seller shall be under obligation to issue delivery order for the quantity for which the payment has been received within one banking day.
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    Buyer acknowledges that:(i) pursuant to this Agreement Seller has entered into certain agreements similar to the Collateral Management Agreement to fulfil requirement of the relevant bank which has issued a letter of credit to facilitate purchase of the Goods by Seller; and (ii) the collateral manager appointed by the Bank shall keep the Goods in its custody at a facility leased by the Buyer at Storage facility at Discharge Port. For this purpose, Buyer unconditionally agrees that whenever collateral manager takes Buyer's permission to keep the Goods at the Storage facility which facility is under Buyer's control and management, then Buyer shall ensure the collateral manager has the unfettered and unrestricted access to the Storage Facility and shall have the sole custody over the
                    Goods kept at the Storage facility. If there is any theft or loss of the Goods at the Storage facility, the Buyer shall fully indemnify Seller to such loss of the Goods without any demur or protest.
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    Notwithstanding anything contained in this Agreement, for avoidance of any doubts, the Parties hereby clarify that unless Buyer fully pays Seller under this Agreement, the Seller shall have lien on unpaid quantity of the Goods which is delivered to Buyer pursuant to this Agreement or any other agreement. Buyer unconditionally represents and warrants that Buyer has not created and shall not create any encumbrance (whatsoever) in favour of any lender or any third party on the Goods under this Agreement or any other similar agreements unless Buyer fully pays for such Goods.
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    Any payment to be made by the Buyer under this contract shall be made free and clear of and without deduction or withholding for or on account of any taxes. If at any time the Buyer is required to make any deduction or withholding in respect of taxes from any payment to be made under this contract, the Buyer shall pay such additional amounts as may be necessary to ensure that, after the making of such deduction or withholding, the Seller receives for such payment a net sum equal to the sum it would have received had no such deduction or withholding been made.
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    It is clarified that the Goods shall be deemed to have been supplied to the Buyer when the goods are loaded on board the vessel and the Sales Consideration as mentioned hereinabove shall become due and payable from then onwards by the Buyer to the Seller.
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    The contractual amount till the time it is not paid will be treated as an admitted, undisputed debt due and payable by the Buyer to the Seller.
                  </li>
                  <li
                    style={{
                      marginBottom: '10px',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    Within seven (7) days of receipt of the statement of accounts, as prepared by Seller, if Buyer does not provide any comment on the statement of accounts, then such statement of accounts shall deem to be accepted by Buyer and binding on it.
                  </li>
                  <li
                    style={{
                      marginBottom: '0',
                      color: '#000000',
                      float: 'left',
                      width: '100%',
                    }}
                  >
                    The End User and Manufacturer/shipper shall have direct recourse to each other for matters including but not limited to the following:
                  </li>
                </ol>
                <span
                  style={{
                    color: '#000000',
                    display:'inline-block'
                  }}
                >
                  a) &nbsp;For all quantity and quality claims/ issues pertaining to material supplied by
                  Manufacturer/shipper;
                </span>
                <span
                  style={{
                    color: '#000000',
                    display:'inline-block'
                  }}
                >
                  b) &nbsp;Any express or implied warranty claim for the quality of material supplied by Manufacturer/shipper;
                </span>
                <span
                  style={{
                    color: '#000000',
                    display:'inline-block'
                  }}
                >
                  c) &nbsp;Loss of cargo;
                </span>
                <span
                  style={{
                    color: '#000000',
                    display:'inline-block'
                  }}
                >
                  d)&nbsp;Any demurrage charges at the load port and/or discharge port shall be settled directly between the Buyer and Manufacturer/shipper;
                </span>
                <span
                  style={{
                    color: '#000000',
                    marginTop: '10px',
                    float: 'left',
                    width: '100%',
                  }}
                >
                  All Claims direct or consequential shall be settled directly between End Buyer and
                  Manufacturer/shipper.
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
                <span style={{color:'#000000', display:'block'}}>19</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Mutual Collaboration</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  Both the Buyer and the Seller recognize that circumstances may arise that could not have been foreseen at the time this Contract is being entered into. Both Parties agree that they will use their commercially reasonable effort to achieve a mutually acceptable solution to any problem that may arise due to any unforeseen circumstances in the spirit of mutual understanding and collaboration.
                </span><br/><br/><br/><br/><br/>
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
            padding: '20px',
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
                <span style={{color:'#000000', display:'block'}}>20</span>
              </td>
              <td
                width="25%"
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Termination</span>
              </td>
              <td
                width="70%"
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  In the event the Buyer commits any breach of the terms of the agreement, then the Seller may, by giving thirty (30) days prior written notice to the Buyer, terminate this Agreement without liability and charge to the Seller. However, the Buyer shall remain liable to the Seller for making Payment of the Goods already shipped by the Seller at the instance of the Buyer. Provided further, the Parties hereto agree that the Seller may immediately terminate this Agreement without providing any notice to the Buyer upon the Buyer, or the Buyer's shareholders commencing a voluntary proceeding under any applicable bankruptcy, insolvency, winding up or other similar law now or hereafter in effect (including but not limited to the Insolvency and Bankruptcy Code, 2016), or consents to the entry of an order for relief in an involuntary proceeding under any such law (including but not limited to the Insolvency and Bankruptcy Code, 2016), or consents to the appointment or taking possession by a resolution professional, Receiver, liquidator, assignee (or similar official) for any or a substantial part of its property; or the Buyer has involuntarily become the subject of proceedings (including filing of an application/ petition for corporate insolvency resolution) under the Insolvency &amp; Bankruptcy Code, 2016 or an order has been made by the appropriate authority for winding up of the Buyer.
                  <br />
                  <br />
                  In the event that conditions of Force Majeure continue so that the Buyer's obligations remain suspended for a period or periods amounting in aggregate to sixty (60) days in any consecutive period of ninety (90) days, and at the end of said period or at anytime thereafter, then the Seller may give thirty (30) days prior written notice to the Buyer that the Seller intends to terminate this Agreement. At the expiration of the thirty (30) days, the Seller at its discretion may terminate this Agreement forthwith without any liability or charge to the Seller. However, the Buyer shall remain liable to the Seller for making Payment of the Goods.
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
                <span style={{color:'#000000', display:'block'}}>21</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Notices</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  Any notice given by one Party to the other shall be in the English language and sent by facsimile or by pre-paid air courier. Any notice sent by facsimile shall be deemed received on the day of transmission and any notice sent by courier shall be deemed duly received on the third (3rd) day following dispatch. Such notices shall be addressed at the addresses mentioned hereinabove.
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
                <span style={{color:'#000000', display:'block'}}>22</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Force Majeure</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  The Seller shall not be liable to the Buyer or to the Manufacturer/shipper for any damages due to delay, interruption or failure in performance of the obligations under the present Agreement (including but not limited to any loss, damage or delay) if such loss, damage, delay or failure is due to or results from Acts of God, War (whether declared or undeclared), blockades, revolution, insurrection, civil commotion, terrorism, riot, invasion, plague or other epidemic, fire, sabotage, quarantine restriction, explosion or embargo, including any change/modification in commercial laws, rules and regulations by government, acts of Government in creating any restrictions or control in imports, exports or foreign exchange, fire, flood, storm, earthquakes, accident in and to the Vessel or strikes, breakdown of loading or unloading facilities, or transporting, loading, unloading or delivering freight, embargoes and breakdown of railroads, serious damage to or breakdown of the transmission system connecting to the Buyer's warehouse or the like or any other cause which may be beyond the control of the Seller.
                  <br />
                  <br />
                  The force Majeure declared by the Manufacturer/shipper shall be applicable to the Seller.
                  <br />
                  <br />
                  No event described in this Clause shall constitute a Force Majeure event with respect to the Buyer's obligation to pay for any product loaded at loading place in transit to the Buyer or stored at the licensed warehouse.
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
                <span style={{color:'#000000', display:'block'}}>23</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Breach of Contract</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <ol type="1" style={{ paddingLeft: '16px', marginBottom: '0' }}>
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    In the event, the Buyer fails to fulfill its obligations as laid down hereunder, the Buyer shall be fully responsible and liable for all losses, damages, both direct and consequential incurred by the Seller.
                  </li>
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    The Buyer indemnifies and shall continue to keep the Seller fully indemnified against all losses, damages, expenses, claims, proceedings, liabilities (including all liabilities of the Seller towards payment of LC charges, interest, default interest and other similar charges to its financing entity, and those arising under the Collateral Management Agreement and the Irrevocable Tripartite Agreement), demands including but not limited to those arising due to the failure of the Buyer to make the payment and/or take delivery of the Goods within the stipulated time period as specified in the Clause Payment Terms hereinabove as well as for executing the transaction as contemplated herein the agreement for and on behalf of the Buyer.
                  </li>
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    If, due to the failure of the Buyer to fulfill its obligations as laid down hereunder in the Contract, any dispute or difference arises between the Seller and Manufacturer/Shipper, and due to which any Award/Judgment/decree/Order is passed or otherwise a settlement is reached, the Buyer shall be bound to accept the same and bear the liability, costs, expenses arising there from.
                  </li>
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    In the event, any judicial/ legal proceedings are initiated against the Seller by
                    Manufacturer/shipper, the Buyer shall be required to be present and associated at all stages of the proceedings and shall bear the entire expenses of arbitration/litigation and/or of the negotiated settlement. The Buyer shall have no authority or excuse to challenge the same on any ground including that the Buyer has not been consulted therein or that the negotiated settlement is not reasonable or otherwise.
                  </li>
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    Remedies provided under this agreement shall be cumulative and in addition to other remedies provided by law.
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
                <span style={{color:'#000000', display:'block'}}>24</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Dispute Resolution &amp; Arbitration</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  Both parties agree to use their best efforts to amicably resolve any claims controversies and disputes arising out of this contract, as well as to determine the final costs thereof. Any such claims, controversies and disputes which cannot be resolved through negotiations within a period of 60 days of the notification of such claims, disputes and controversies shall be referred to arbitration in accordance with the rules of Singapore International Arbitration Center (SIAC). One arbitrator to be nominated jointly by both the parties. The award rendered by the arbitrator shall be final and binding upon both the parties concerned and subject to no appeal. The costs and expenses of the prevailing party (including, without limitation, reasonable attorney's fee) will be paid by the losing party. The contract shall be subject to Laws of India. The seat of the arbitration will be Singapore and the proceedings shall be conducted in English language.
                  <br />
                  <br />
                  Notwithstanding the aforesaid, the parties agree and affirm that relief available under Section 9 of the Indian Arbitration Act, 1996 (as amended) shall be available to the parties, and the parties may initiate appropriate proceedings in India in order to avail such relief.
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
                <span style={{color:'#000000', display:'block'}}>25</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Modifications of the contract</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  No changes in respect of the contract covered by this agreement shall be valid unless the same is agreed to in writing by both parties herewith specifically stating the same to on amendment to this agreement. Contract is valid if approved by Fax and no mail confirmation will be sent.
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
                <span style={{color:'#000000', display:'block'}}>26</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>No Assignment</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  Neither Party shall be entitled to assign, transfer or sub-contract its rights under this Agreement in whole or in part without first obtaining the other's consent in writing.
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
                <span style={{color:'#000000', display:'block'}}>27</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Severability</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  The Parties intend each provision of this Agreement to be severable and distinct from the others. If a provision of this Agreement is held to be illegal, invalid or unenforceable, in whole or in part, the Parties intend that the legality, validity and enforceability of the remainder of this Agreement shall not be affected.
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
                <span style={{color:'#000000', display:'block'}}>28</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Waiver</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  textAlign: 'justify',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  Failure to enforce any condition herein contained shall not operate as a waiver of the condition itself or any subsequent breach thereof.
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
                <span style={{color:'#000000', display:'block'}}>29</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Representations and Warranties</span>
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
                    it is a legal entity duly organized and validly existing under the laws of the jurisdiction of its incorporation and has all necessary corporate power, authority and capacity to execute this Agreement and undertake the transactions contemplated herein;
                  </li>
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    the execution and delivery of this Agreement has been duly and validly authorized and constitutes valid and legally binding obligations enforceable in accordance with its terms;
                  </li>
                  <li style={{ marginBottom: '10px', color: '#000000' }}>
                    the execution, delivery and performance of this Agreement does not and shall not; (i) contravene any provisions of its charter documents; (ii) result in a default, breach or contravention of any conditions or provisions of any agreement to which it is a party or any obligation it is bond by; or (iii) violate any law, order, judgment, injunction, decree, award, rule or regulation applicable to
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
            lineHeight: '1.3',
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
          <span style={{ fontSize: '15px', fontWeight: 'bold', display:'block'}}>Schedule I</span>
          <table width="100%" cellPadding="5" style={{ border: '1px solid #000000' }} cellSpacing="0" border="0">
            <tr>
              <td
                width="30%"
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Date of Execution</span>
              </td>
              <td
                width="70%"
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>{data.dateOfExecution}</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Place of Execution</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>{data.placeOfExecution}</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Details of Manufacturer / Supplier / Shipper</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>{data.details}</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Details of End Buyer</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>{data.detailsOfEndBuyer}</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Details of Commodity</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>{data.detailsOfComm}</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Quantity</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  {data.quan?.toLocaleString('en-In', {
                    maximumFractionDigits: 2,
                  })}{' '}
                  {data?.unitOfQuantity?.toUpperCase()}
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
                <span style={{color:'#000000', display:'block'}}>Unit Price</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  {data.curr}{' '}
                  {data.unitPrice?.toLocaleString('en-In', {
                    maximumFractionDigits: 2,
                  })}
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
                <span style={{color:'#000000', display:'block'}}>Total Order Value</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>
                  {data.curr}{' '}
                  {data.totalOrderValue?.toLocaleString( data.curr=="INR"?'en-In':"en-EN", {
                    maximumFractionDigits: 2,
                  })}
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
                <span style={{color:'#000000', display:'block'}}>Load Port</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>{data.lordPort}</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Discharge Port</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>{data.dischargePort}, India</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Last Date of Shipment</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>{moment(data.lastDate).format('DD-MM-YYYY')}</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Shipment Term</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>{data.terms}</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                <span style={{color:'#000000', display:'block'}}>Additional Conditions</span>
              </td>
              <td
                style={{
                  borderBottom: '1px solid #000000',
                  borderRight: '1px solid #000000',
                }}
              >
                {
                  <>                   
                    {data?.addComm?.length > 0 &&
                      data?.addComm?.map((val, index) => {
                        return `${val}`;
                    })}
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
                <span style={{color:'#000000', display:'block'}}>Specification</span>
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
                              color: '#000000',
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
                                color: '#000000',
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

                  {data?.specComment?.length > 0 ? <strong style={{fontSize: '12px', lineHeight: '18px', color: '#000000', display:'block', padding:'15px 0 10px'}}>Comments</strong> : null}
                  <ol style={{fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft:'10px', margin:'0 0 10px'}}>
                    {data?.specComment?.length > 0 &&
                      data?.specComment?.map((val, index) => {
                        return <li style={{marginTop:'-3px'}}>
                        <span style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block', paddingTop:'1px'
                        }}>{val?val:""}</span></li>;
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
            <span style={{color:'#000000', display:'block'}}>SIGNATURE PAGE</span>
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
              <td width="50%" style={{paddingTop:'50px'}}>
                <span style={{color:'#000000', display:'block'}}>(Seller)</span>
              </td>
              <td width="50%" style={{ paddingLeft: '15px', paddingTop:'50px' }}>
                <span style={{color:'#000000', display:'block'}}>(Buyer)</span>
              </td>
            </tr>
            <tr>
              <td style={{ paddingRight: '15px' }}>
                <textarea
                  value={data.sellerSignature}
                  style={{ width: '100%', border: 'none', outline: 'none' }}
                  rows={4}
                ></textarea>
              </td>
              <td style={{ paddingLeft: '15px' }}>
                <textarea
                  value={data.buyerSignature}
                  style={{ width: '100%', border: 'none', outline: 'none' }}
                  rows={4}
                ></textarea>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
}
