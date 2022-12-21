import { capitalize } from "lodash";

export default function QuadripartiteAgreementPreview(data) {
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
          <td valign="top" style={{padding:'0 20px' }}>
            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
              <tr>
                <td align="center" style={{padding:'25px 0 10px'}}>
                  <span
                    style={{
                      fontSize: '12px',
                      lineHeight: '18px',
                      color: '#000000',
                      display:'inline-block',
                      paddingBottom: '10px'
                    }}
                  >
                    <strong>Quadripartite Agreement</strong>
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
                      display:'inline-block',
                      paddingBottom:'16px'
                    }}
                  >
                    This Quadripartite Agreement (<strong>“Agreement”</strong>) is made at the place and on the day as set out in <strong>Schedule I </strong> hereto by and between:
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
                      display:'inline-block',
                      paddingBottom:'20px'
                    }}
                  >
                    <strong style={{textTransform:'capitalize'}}>{data.buyer}</strong>, (CIN : {data.cin}) a company incorporated under the Companies Act, 1956, having its registered office at <strong>{data.buyerAddress?.fullAddress}, {data.buyerAddress?.city}, {data.buyerAddress?.country}, {data.buyerAddress?.pinCode}</strong> through its Authorised Signatory (hereinafter called <strong>{data.shortbuyer}</strong>, which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the First Part,
                  </span>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <span
                    style={{
                      fontSize: '12px',
                      lineHeight: '18px',
                      color: '#000000',
                      display:'inline-block',
                      paddingBottom:'20px'
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
                      display:'inline-block',
                      paddingBottom:'20px'
                    }}
                  >
                    <strong>Associate Buyer</strong>, as detailed in&nbsp;<strong>Schedule I</strong> hereof (hereinafter referred to as the “<strong>Associate Buyer</strong>”, which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the Second Part.
                  </span>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <span
                    style={{
                      fontSize: '12px',
                      lineHeight: '18px',
                      color: '#000000',
                      display:'inline-block',
                      paddingBottom:'20px'
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
                      display:'inline-block',
                      paddingBottom:'20px'
                    }}
                  >
                    <strong>Stevedore</strong>(s), as detailed in&nbsp; <strong>Schedule I</strong> hereof (hereinafter referred to as the “<strong>CHA/Stevedore</strong>”, which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the Third Part.
                  </span>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <span
                    style={{
                      fontSize: '12px',
                      lineHeight: '18px',
                      color: '#000000',
                      display:'inline-block',
                      paddingBottom:'20px'
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
                      display:'inline-block',
                      paddingBottom:'16px'
                    }}
                  >
                    <strong>CMA Agent</strong> (s), as detailed in&nbsp; <strong>Schedule I</strong> hereof (hereinafter referred to as the “<strong>CMA Agent</strong>”, which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the Fourth Part.
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
                      display:'inline-block',
                      paddingBottom:'16px'
                    }}
                  >
                    WHEREAS {data.shortbuyer} has agreed to import Goods as detailed in <strong>Schedule I </strong> hereof on stock and sale basis as per Associateship Agreement entered into between {data.shortbuyer} and the Associate Buyer.
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
                      display:'inline-block',
                      paddingBottom:'16px'
                    }}
                  >
                    WHEREAS {data.shortbuyer}&nbsp;has appointed the Stevedore for handling the vessel as
                    detailed in <strong>Schedule I</strong> at Discharge Port. The complete details of vessel, Discharge port and the plot allotted to&nbsp; {data.shortbuyer}&nbsp;are mentioned at Schedule I.
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
                      display:'inline-block',
                      paddingBottom:'16px'
                    }}
                  >
                    WHEREAS the, LC opening Bank has a first ranking security right over the Goods and it has appointed the CMA Agent in accordance with the terms of the Collateral Management Agreement executed by Financing Bank
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
                      display:'inline-block',
                      paddingBottom:'16px'
                    }}
                  >
                    IT IS NOW HEREBY AGREED BY AND BETWEEN THE PARTIES AS UNDER: -
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
                        <span style={{display:'inline-block', marginLeft:'-18px'}}>1. &nbsp; </span>The Goods shall be stored at the Plot allotted to&nbsp;{data.shortbuyer} by the Discharge Port authorities and shall be kept under the control and custody of CHA/Stevedore on behalf of&nbsp;
                        {data.shortbuyer}. All dispatches from the plot shall be done by CHA/Stevedore solely on the basis of Written Delivery Orders issued by&nbsp;{data.shortbuyer}.
                      </span>
                    </li>
                    <li>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block'
                        }}
                      >
                        
                        <span style={{display:'inline-block', marginLeft:'-18px'}}>2. &nbsp; </span>Scope of Work of CHA/Stevedore:
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'inline-block',
                          paddingBottom:'16px'
                        }}
                      >
                        The Scope of work of CHA/Stevedore shall include but not be limited to:
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block'
                        }}
                      >
                        a) arranging plot allotment in the name of {data.shortbuyer} from the discharge Port authorities to store&nbsp;{data.shortbuyer}'s cargo,
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block'
                        }}
                      >
                        b) discharge of cargo from the Vessel,
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block'
                        }}
                      >
                        c) loading of wharf, intra carting at Port,
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block'
                        }}
                      >
                        d) deployment of labors and equipments,
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block'
                        }}
                      >
                        e) transportation from wharf to {data.shortbuyer} allotted plot, ensure that the plot
                        where goods are being stored is suitable for the storage of the goods,
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block'
                        }}
                      >
                        f) segregated stacking cargo at plot grade wise,
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block'
                        }}
                      >
                        g) placement of wagon indents, wagon cleaning, wooden plugging,
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block'
                        }}
                      >
                        h) loading into wagons/trucks, leveling of cargo, lime marking on stacks and wagons, placing Railway Indents, Loading on wagons/trucks,
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block'
                        }}
                      >
                        i) Arranging round the clock security cover at the storage area,
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block'
                        }}
                      >
                        j) liaison with Discharge Port authorities,
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block'
                        }}
                      >
                        k) obtaining RRs and arranging dispatches as per Written release orders issued by
                        {data.shortbuyer},
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block'
                        }}
                      >
                        l) obtaining gate passes,
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block'
                        }}
                      >
                        m) yard management,
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'block'
                        }}
                      >
                        n) maintenance of proper records and registers for incoming and outgoing of material,
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'inline-block',
                          paddingBottom:'16px'
                        }}
                      >
                        o) water sprinkling as per PCB norms and other services as may be required by
                        {data.shortbuyer},
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
                        <span style={{display:'inline-block', marginLeft:'-18px'}}>3. &nbsp; </span>Safekeeping and Security of the Goods-Proper safekeeping and security of Goods shall be the joint and several responsibilities of the Associate Buyer and Stevedore. The Associate Buyer and Stevedore shall provide round the clock security guards at the Storage Plot allotted at Discharge Port, where Goods shall be stored.&nbsp;
                        {data.shortbuyer} shall in no way be responsible or liable for any loss or damage to the Goods for any reason whatsoever including shortage, theft or mix up.
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
                        <span style={{display:'inline-block', marginLeft:'-18px'}}>4. &nbsp; </span>Bill of Entry to be filed in the name {data.shortbuyer}. Payment of customs duty, IGST,
                        energy cess, Wharfage, CIMS and all other statutory charges shall be paid by the Associate Buyer to&nbsp;{data.shortbuyer} in advance at the time of Custom Clearance. The Associate Buyer shall pay Port Charges directly to port or through the Stevedore who will take care of the payments to Port and raise bills on {data?.shortbuyer} for this. A copy of the same has to be furnished to{data?.shortbuyer}. Any penalty/demurrage on account of delayed payment shall be solely to the account of the Associate Buyer.
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
                        <span style={{display:'inline-block', marginLeft:'-18px'}}>5. &nbsp; </span>Port wharfage, pollution charges, plot rental, wagon haulage and terminal charges, Port Royalty (if applicable) are to be paid by the Associate Buyer in advance to {data.shortbuyer} as per the Discharge Port. HMC crane charges at the Discharge Port and any pre berthing delays/detentions/demurrages will be to the account of the Associate Buyer on actual basis.
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
                        <span style={{display:'inline-block', marginLeft:'-18px'}}>6. &nbsp; </span>CHA/Stevedore will raise invoice on the Associate Buyer and payments shall be made by the
                        Associate Buyer to Stevedore based on the agreed rate terms & Conditions.
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
                        <span style={{display:'inline-block', marginLeft:'-18px'}}>7. &nbsp; </span>CHA/Stevedore will apply for EDRM permission and place an indent online. The Associate Buyer will pay the railway freight and related charges directly.
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
                        <span style={{display:'inline-block', marginLeft:'-18px'}}>8. &nbsp; </span>Scanned copy of RR shall be furnished by Stevedore to&nbsp;{data.shortbuyer} as well as to Associate Buyer as soon as it is issued after loading. The original RR shall be sent by Stevedore to the Associate Buyer for taking delivery of the rake. The final reconciliation shall be done based on the BL quantity.
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
                        <span style={{display:'inline-block', marginLeft:'-18px'}}>9. &nbsp; </span>The Associate Buyer will arrange comprehensive storage insurance against all risks for <strong>110%</strong> of the value of goods. The insurance policy will indicate&nbsp;
                        {data.shortbuyer} or its nominated Bank (as per&nbsp;{data.shortbuyer}'s discretion), as sole beneficiary. The Associate Buyer shall inform Stevedore the details of the goods for which {data.shortbuyer}/IGI's nominated Bank shall be the beneficiary for the entire insured value of such pledged goods as per the B/L, quantity kept in the custody of CHA/Stevedore. In case of any claim on insurance company the same shall
                        be claimed and pursued till realization by the Associate Buyer at its sole cost and the Associate Buyer shall indemnify Stevedore and {data?.shortbuyer} against all risks.
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
                        <span style={{display:'inline-block', marginLeft:'-20px'}}>10. &nbsp; </span>{data.shortbuyer} and CMA Agent (Collateral Manager appointed by LC opening Bank) shall
                        have free and unfettered access to the plot where the goods are stored without any prior notice to the plot keeper during all reasonable hours including the right of ingress and egress to and from the plot by {data.shortbuyer} 's and /or CMA Agent's officials, agents, other nominated buyers, if any, of {data.shortbuyer} and/or CMA Agent, its vehicles, any Government Agency, for storing/de-storing/removing the material in or from the plot without any hindrance or obstruction.
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
                        <span style={{display:'inline-block', marginLeft:'-20px'}}>11. &nbsp; </span>The role of CMA Agent shall be to supervise the storage, ingress and exit of material at the
                        storage area in accordance with the Collateral Management Agreement entered into by CMA Agent. The Stevedore and the Associate Buyer shall provide necessary support, help and assistance to CMA Agent as may be required by them at all times. CMA Agent's Officials/ representatives/agents shall peacefully enjoy unrestricted and unfettered access to the Storage Area during the term or duration of this Agreement, without disturbance or interruption or obstruction from the Associate Buyer or Stevedore or any person claiming under them. Port safety precautions, indemnity as conveyed to the service providers and the Associate Buyer to be complied with at all times.
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
                        <span style={{display:'inline-block', marginLeft:'-20px'}}>12. &nbsp; </span>CHA/Stevedore shall at all times follow and be bound by the instructions solely of 
                        {data.shortbuyer} with regard to delivery of the Goods. Stevedore confirms and undertakes that it shall not release the Goods without the written Release Order of&nbsp;{data.shortbuyer}. Stevedore shall have no objection whatsoever, if {data.buyer} 
                        instructs it to deliver the Goods to any third party so nominated by them. The instructions of the&nbsp;{data.buyer} shall be followed forthwith, without any objection, hindrance or delay whatsoever.
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
                        <span style={{display:'inline-block', marginLeft:'-20px'}}>13. &nbsp; </span>CHA/Stevedore shall maintain all records as necessary, statutorily or otherwise for the receipt, storage and release of goods from the warehouse and furnish a daily report to {data.shortbuyer} & the Associate Buyer. Under no circumstance releases will be made by Stevedore or be taken by the Associate Buyer without obtaining proper Release Order in writing from {data.shortbuyer}. Stevedore and the Associate Buyer jointly and severally agree to indemnify and hold harmless at all times {data.shortbuyer}, its officers, agents, employees for any losses, damages, claims, costs and expenses incurred by {data.shortbuyer} due to unauthorized, improper release of the Goods, shortage and/or for breach of the terms of this Agreement.
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
                        <span style={{display:'inline-block', marginLeft:'-20px'}}>14. &nbsp; </span>This Agreement is irrevocable and non-assignable by the Associate Buyer and Stevedore until the entire Goods stored at the storage facility have been delivered to the Associate Buyer, or to the persons nominated by {data.shortbuyer} under the Authorized Release Orders.
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
                        <span style={{display:'inline-block', marginLeft:'-20px'}}>15. &nbsp; </span>In the event the Associate Buyer does not lift the goods/material within the scheduled period
                        {data.shortbuyer} has the right to sell/dispose of the Goods at the sole risk, cost of
                        the Associate Buyer. The Associate Buyer shall be liable to pay to {data.shortbuyer} the loss (if any) incurred by {data.shortbuyer}.
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
                        <span style={{display:'inline-block', marginLeft:'-20px'}}>16. &nbsp; </span>Any disputes or differences in respect of any matter relating to or arising out of this
                        Quadripartite Agreement between the parties hereto shall be settled mutually and if the same is not resolved amicably, then the same will be settled by Arbitration by a Sole Arbitrator in accordance with Rules of Arbitration formulated by Indian Council of Arbitration (ICA). The Award made in pursuance thereof shall be binding on the parties. The seat and venue of the Arbitration will be New Delhi and the language of Arbitration Proceedings shall be in English.
                      </span>
                      <br/>
                      <br/>
                      <br/>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    align="center"
                    style={{
                      fontSize: '15px',
                      fontWeight: 'bold',
                      color: '#000000',
                      display:'block',
                      paddingBottom: '15px',
                    }}
                  >
                    Schedule I
                  </span>
                  <table
                    width="100%"
                    cellPadding="7"
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
                            display:'block'
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
                            display:'block'
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
                            display:'block'
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
                            display:'block'
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
                            display:'block'
                          }}
                        >
                          Name of Associate Buyer
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
                            display:'block'
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
                            display:'block'
                          }}
                        >
                          Address of Associate Buyer
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
                            display:'block'
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
                            display:'block'
                          }}
                        >
                          GST of Associate Buyer
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
                            display:'block'
                          }}
                        >
                          
                          {data.associateBuyerGst}
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
                            display:'block'
                          }}
                        >
                          PAN of Associate Buyer
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
                            display:'block'
                          }}
                        >
                          V {data.associateBuyerPan}
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
                            display:'block'
                          }}
                        >
                          Signatory of Associate Buyer
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
                            display:'block'
                          }}
                        >
                          <ol
                            style={{
                              fontSize: '12px',
                              lineHeight: '18px',
                              color: '#000000',
                              paddingLeft: '10px',
                              margin:'0'
                            }}
                          >
                            {data?.associateBuyerAuthorized?.length > 0 &&
                              data?.associateBuyerAuthorized?.map((val, index) => {
                                return (
                                  <li style={{marginTop:'-3px'}}>
                                    <span
                                      style={{
                                        fontSize: '12px',
                                        lineHeight: '18px',
                                        color: '#000000',
                                        display:'block', paddingTop:'1px'
                                      }}
                                    >
                                      Name - {val.name}<br/>
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
                            display:'block'
                          }}
                        >
                          Name of Stevedore
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
                            display:'block'
                          }}
                        >
                          {data.stevedore}
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
                            display:'block'
                          }}
                        >
                          Address of Stevedore
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
                            display:'block'
                          }}
                        >
                          {data.stevedoreAddress?.fullAddress},{data.stevedoreAddress?.city}
                          {data.stevedoreAddress?.country}, {data.stevedoreAddress?.pinCode}
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
                            display:'block'
                          }}
                        >
                          Signatory of Stevedore
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
                            display:'block'
                          }}
                        >
                          <ol
                            style={{
                              fontSize: '12px',
                              lineHeight: '18px',
                              color: '#000000',
                              paddingLeft: '10px',
                              margin:'0'
                            }}
                          >
                            {data?.stevedoreAuthorized?.length > 0 &&
                              data?.stevedoreAuthorized?.map((val, index) => {
                                return (
                                  <li style={{marginTop:'-3px'}}>
                                    <span
                                      style={{
                                        fontSize: '12px',
                                        lineHeight: '18px',
                                        color: '#000000',
                                        display:'block', paddingTop:'1px'
                                      }}
                                    >
                                      Name - {val.name}<br/>
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
                            display:'block'
                          }}
                        >
                          Name of CMA Agent
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
                            display:'block'
                          }}
                        >
                          
                          {data.cma}
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
                            display:'block'
                          }}
                        >
                          Address of CMA Agent
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
                            display:'block'
                          }}
                        >
                          {data.cmaAddress?.fullAddress}, {data.cmaAddress?.city} {data.cmaAddress?.country}, 
                          {data.cmaAddress?.pinCode}
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
                            display:'block'
                          }}
                        >
                          Signatory of CMA Agent
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
                            display:'block'
                          }}
                        >
                          <ol
                            style={{
                              fontSize: '12px',
                              lineHeight: '18px',
                              color: '#000000',
                              paddingLeft: '10px',
                              margin:'0'
                            }}
                          >
                            {data?.cmaAuthorized?.length > 0 &&
                              data?.cmaAuthorized?.map((val, index) => {
                                return (
                                  <li style={{marginTop:'-3px'}}>
                                    <span
                                      style={{
                                        fontSize: '12px',
                                        lineHeight: '18px',
                                        color: '#000000',
                                        display:'block', paddingTop:'1px'
                                      }}
                                    >
                                      Name - {val.name}<br/>
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
                            display:'block'
                          }}
                        >
                          Commodity Details
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
                            display:'block'
                          }}
                        >
                          
                          {data.detailsOfComm}
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
                            display:'block'
                          }}
                        >
                          Quantity
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
                            display:'block'
                          }}
                        >
                          {data.quan?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                          })} {data?.unitOfQuantity?.toUpperCase()}
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
                            display:'block'
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
                            display:'block'
                          }}
                        >
                          
                          {data.supplier}
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
                            display:'block'
                          }}
                        >
                          Details of Vessel
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
                            display:'block'
                          }}
                        >
                          {data.vessel}
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
                            display:'block'
                          }}
                        >
                          Port of Loading
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
                            display:'block'
                          }}
                        >
                          {data.lordPort}
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
                            display:'block'
                          }}
                        >
                          Port of Discharge
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
                            display:'block'
                          }}
                        >
                          
                          {data.dischargePort}, India
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
                            display:'block'
                          }}
                        >
                          Storage Plot allotted to {data?.shortbuyer}
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
                            display:'block'
                          }}
                        >
                          {data.storagePlot}, India
                        </span>
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
                        <span
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            display:'inline-block',
                            padding: '30px 0 20px',
                          }}
                        >
                          <strong>SIGNATURE PAGE</strong>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" width="70%">
                        <span
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            display:'inline-block',
                            paddingBottom:'5px'
                          }}
                        >
                          FOR & ON BEHALF OF
                        </span>
                      </td>
                      <td align="left" width="30%">
                        <span
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            display:'inline-block',
                            paddingBottom:'5px'
                          }}
                        >
                          FOR & ON BEHALF OF
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" valign="top" style={{paddingTop:'50px'}}>
                        <span
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            display:'inline-block',
                            paddingBottom:'16px',
                            textTransform: 'capitalize'
                          }}
                        >
                          <strong>{data.associateBuyer}</strong>
                        </span>
                      </td>
                      <td align="left" valign="top">
                          {data?.associateBuyerAuthorized?.length > 0 &&
                            data?.associateBuyerAuthorized.map((val, index) => {
                              return (
                                <>
                                  <span
                                  style={{
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: '#000000',
                                    display:'inline-block',
                                    paddingBottom:'16px',
                                    textTransform: 'capitalize',
                                    paddingTop: '50px'
                                  }}
                                >
                                    <strong style={{
                                      fontSize: '12px',
                                      lineHeight: '18px',
                                      color: '#000000',
                                      display:'inline-block',
                                      marginBottom:'10px'
                                    }}>
                                      Name: {val.name}
                                      <br />
                                      Designation: {val.designation}
                                    </strong>
                                  </span>
                                </>
                              );
                            })}
                        {/* <span
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            display:'inline-block',
                            paddingBottom:'16px',
                            textTransform: 'capitalize'
                          }}
                        >
                          <strong>{data.buyer}</strong>
                        </span> */}
                      </td>
                    </tr>
                    <tr>
                      <td align="left" valign="top" style={{paddingTop:'50px'}}>
                        <span
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            display:'inline-block',
                            paddingBottom:'16px',
                            textTransform: 'capitalize'
                          }}
                        >
                          <strong>{data.cha}</strong>
                        </span>
                      </td>
                      <td align="left" valign="top">
                          {data?.chaAuthorized?.length > 0 &&
                            data?.chaAuthorized.map((val, index) => {
                              return (
                                <>
                                  <span
                                  style={{
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: '#000000',
                                    display:'inline-block',
                                    paddingBottom:'16px',
                                    textTransform: 'capitalize',
                                    paddingTop: '50px'
                                  }}
                                >
                                    <strong style={{
                                      fontSize: '12px',
                                      lineHeight: '18px',
                                      color: '#000000',
                                      display:'inline-block',
                                      marginBottom:'10px'
                                    }}>
                                      Name: {val.name}
                                      <br />
                                      Designation: {val.designation}
                                    </strong>
                                  </span>
                                </>
                              );
                            })}
                        {/* <span
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            display:'inline-block',
                            paddingBottom:'16px',
                            textTransform: 'capitalize'
                          }}
                        >
                          <strong>{data.buyer}</strong>
                        </span> */}
                      </td>
                    </tr>
                     <tr>
                      <td align="left" valign="top" style={{paddingTop:'50px'}}>
                        <span
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            display:'inline-block',
                            paddingBottom:'16px',
                            textTransform: 'capitalize'
                          }}
                        >
                          <strong>{data.cma}</strong>
                        </span>
                      </td>
                      <td align="left" valign="top">
                          {data?.cmaAuthorized?.length > 0 &&
                            data?.cmaAuthorized.map((val, index) => {
                              return (
                                <>
                                  <span
                                  style={{
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: '#000000',
                                    display:'inline-block',
                                    paddingBottom:'16px',
                                    textTransform: 'capitalize',
                                    paddingTop: '50px'
                                  }}
                                >
                                    <strong style={{
                                      fontSize: '12px',
                                      lineHeight: '18px',
                                      color: '#000000',
                                      display:'inline-block',
                                      marginBottom:'10px'
                                    }}>
                                      Name: {val.name}
                                      <br />
                                      Designation: {val.designation}
                                    </strong>
                                  </span>
                                </>
                              );
                            })}
                        {/* <span
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            display:'inline-block',
                            paddingBottom:'16px',
                            textTransform: 'capitalize'
                          }}
                        >
                          <strong>{data.buyer}</strong>
                        </span> */}
                      </td>
                    </tr>
                     <tr>
                      <td align="left" valign="top" style={{paddingTop:'50px'}}>
                        <span
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            display:'inline-block',
                            paddingBottom:'16px',
                            textTransform: 'capitalize'
                          }}
                        >
                          <strong>{data.buyer}</strong>
                        </span>
                      </td>
                      <td align="left" valign="top">
                          {data?.buyerAuthorized?.length > 0 &&
                            data?.buyerAuthorized.map((val, index) => {
                              return (
                                <>
                                  <span
                                  style={{
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: '#000000',
                                    display:'inline-block',
                                    paddingBottom:'16px',
                                    textTransform: 'capitalize',
                                    paddingTop: '50px'
                                  }}
                                >
                                    <strong style={{
                                      fontSize: '12px',
                                      lineHeight: '18px',
                                      color: '#000000',
                                      display:'inline-block',
                                      marginBottom:'10px'
                                    }}>
                                      Name: {val.name}
                                      <br />
                                      Designation: {val.designation}
                                    </strong>
                                  </span>
                                </>
                              );
                            })}
                        {/* <span
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            display:'inline-block',
                            paddingBottom:'16px',
                            textTransform: 'capitalize'
                          }}
                        >
                          <strong>{data.buyer}</strong>
                        </span> */}
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
