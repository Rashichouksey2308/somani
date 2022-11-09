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
          <td valign="top" style={{ padding: '20px' }}>
            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
              <tr>
                <td align="center" style={{ padding: '15px 0 ' }}>
                  <p
                    style={{
                      fontSize: '12px',
                      lineHeight: '18px',
                      color: '#000000',
                      marginBottom: '30px',
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
                      {data.buyerAddress?.fullAddress}, {data.buyerAddress?.city} {data.buyerAddress?.country},{' '}
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
                    WHEREAS <u>{data.shortbuyer}</u> has agreed to import Goods as detailed in{' '}
                    <strong>Schedule I </strong>
                    hereof on stock and sale basis as per Associateship Agreement entered into between{' '}
                    <u>{data.shortbuyer}</u>
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
                    WHEREAS <u>{data.shortbuyer}</u>&nbsp;has appointed the Stevedore for handling the vessel as
                    detailed in <strong>Schedule I</strong> at Discharge Port. The complete details of vessel, Discharge
                    port and the plot allotted to&nbsp;
                    <u>{data.shortbuyer}</u>&nbsp;are mentioned at Schedule I.
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
                        <u>{data.shortbuyer}</u> by the Discharge Port authorities and shall be kept under the control
                        and custody of CHA on behalf of&nbsp;
                        <u>{data.shortbuyer}</u>. All dispatches from the plot shall be done by CHA solely on the basis
                        of Written Delivery Orders issued by&nbsp;
                        <u>{data.shortbuyer}</u>.
                      </p>
                    </li>
                    <li>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
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
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        a) arranging plot allotment in the name of <u>{data.shortbuyer}</u>
                        from the discharge Port authorities to store&nbsp;
                        <u>{data.shortbuyer}</u>'s cargo,
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        b) discharge of cargo from the Vessel,
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        c) loading of wharf, intra carting at Port,
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        d) deployment of labors and equipments,
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        e) transportation from wharf to <u>{data.shortbuyer}</u> allotted plot, ensure that the plot
                        where goods are being stored is suitable for the storage of the goods,
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        f) segregated stacking cargo at plot grade wise,
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        g) placement of wagon indents, wagon cleaning, wooden plugging,
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        h) loading into wagons/trucks, leveling of cargo, lime marking on stacks and wagons, placing
                        Railway Indents, Loading on wagons/trucks,
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        i) Arranging round the clock security cover at the storage area,
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        j) liaison with Discharge Port authorities,
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        k) obtaining RRs and arranging dispatches as per Written release orders issued by{' '}
                        <u>{data.shortbuyer}</u>,
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        l) obtaining gate passes,
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        m) yard management,{' '}
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0',
                        }}
                      >
                        n) maintenance of proper records and registers for incoming and outgoing of material,
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                        }}
                      >
                        o) water sprinkling as per PCB norms and other services as may be required by{' '}
                        <u>{data.shortbuyer}</u>,
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
                        Safekeeping and Security of the Goods-Proper safekeeping and security of Goods shall be the
                        joint and several responsibilities of the Associate Buyer and Stevedore. The Associate Buyer and
                        Stevedore shall provide round the clock security guards at the Storage Plot allotted at
                        Discharge Port, where Goods shall be stored.&nbsp;
                        <u>{data.shortbuyer}</u> shall in no way be responsible or liable for any loss or damage to the
                        Goods for any reason whatsoever including shortage, theft or mix up.
                      </p>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </li>
                    <li>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                        }}
                      >
                        Bill of Entry to be filed in the name <u>{data.shortbuyer}</u>. Payment of customs duty, IGST,
                        energy cess, Wharfage, CIMS and all other statutory charges shall be paid by the Associate Buyer
                        to&nbsp;
                        <u>{data.shortbuyer}</u> in advance at the time of Custom Clearance. The Associate Buyer shall
                        pay Port Charges directly to port or through the Stevedore who will take care of the payments to
                        Port and raise bills on IGI for this. A copy of the same has to be furnished to IGI. Any
                        penalty/demurrage on account of delayed payment shall be solely to the account of the Associate
                        Buyer
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
                        (if applicable) are to be paid by the Associate Buyer in advance to <u>{data.shortbuyer}</u> as
                        per the Discharge Port. HMC crane charges at the Discharge Port and any pre berthing
                        delays/detentions/demurrages will be to the account of the Associate Buyer on actual basis.
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
                        <u>{data.shortbuyer}</u> as well as to Associate Buyer as soon as it is issued after loading.
                        The original RR shall be sent by Stevedore to the Associate Buyer for taking delivery of the
                        rake. The final reconciliation shall be done based on the BL quantity.
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
                        <strong>110%</strong> of the value of goods. The insurance policy will indicate&nbsp;
                        <u>{data.shortbuyer}</u> or its nominated Bank (as per&nbsp;
                        <u>{data.shortbuyer}</u>'s discretion), as sole beneficiary. The Associate Buyer shall inform
                        Stevedore the details of the goods for which <u>{data.shortbuyer}</u>/IGI's nominated Bank shall
                        be the beneficiary for the entire insured value of such pledged goods as per the B/L, quantity
                        kept in the custody of CHA/Stevedore. In case of any claim on insurance company the same shall
                        be claimed and pursued till realization by the Associate Buyer at its sole cost and the
                        Associate Buyer shall indemnify Stevedore and IGI against all risks.
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
                        <u>{data.shortbuyer}</u> and CMA Agent (Collateral Manager appointed by LC opening Bank) shall
                        have free and unfettered access to the plot where the goods are stored without any prior notice
                        to the plot keeper during all reasonable hours including the right of ingress and egress to and
                        from the plot by <u>{data.shortbuyer}</u> 's and /or CMA Agent's officials, agents, other
                        nominated buyers, if any, of <u>{data.shortbuyer}</u> and/or CMA Agent, its vehicles, any
                        Government Agency, for storing/de-storing/removing the material in or from the plot without any
                        hindrance or obstruction.
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
                        <u>{data.shortbuyer}</u> with regard to delivery of the Goods. Stevedore confirms and undertakes
                        that it shall not release the Goods without the written Release Order of&nbsp;
                        <u>{data.shortbuyer}</u>. Stevedore shall have no objection whatsoever, if <u>{data.buyer}</u>{' '}
                        instructs it to deliver the Goods to any third party so nominated by them. The instructions of
                        the&nbsp;
                        <u>{data.buyer}</u> shall be followed forthwith, without any objection, hindrance or delay
                        whatsoever.
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
                        <u>{data.shortbuyer}</u> & the Associate Buyer. Under no circumstance releases will be made by
                        Stevedore or be taken by the Associate Buyer without obtaining proper Release Order in writing
                        from <u>{data.shortbuyer}</u>. Stevedore and the Associate Buyer jointly and severally agree to
                        indemnify and hold harmless at all times <u>{data.shortbuyer}</u>, its officers, agents,
                        employees for any losses, damages, claims, costs and expenses incurred by{' '}
                        <u>{data.shortbuyer}</u> due to unauthorized, improper release of the Goods, shortage and/or for
                        breach of the terms of this Agreement.
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
                        the persons nominated by <u>{data.shortbuyer}</u> under the Authorized Release Orders.
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
                        <u>{data.shortbuyer}</u> has the right to sell/dispose of the Goods at the sole risk, cost of
                        the Associate Buyer. The Associate Buyer shall liable to pay to&nbsp;
                        <u>{data.shortbuyer}</u> the loss (if any) incurred by&nbsp;
                        <u>{data.shortbuyer}</u>.
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
                          <ol
                            style={{
                              fontSize: '12px',
                              lineHeight: '18px',
                              color: '#000000',
                            }}
                          >
                            {data?.associateBuyerAuthorized?.length > 0 &&
                              data?.associateBuyerAuthorized?.map((val, index) => {
                                return (
                                  <li>
                                    <p
                                      style={{
                                        fontSize: '12px',
                                        lineHeight: '18px',
                                        color: '#000000',
                                        marginBottom: '0',
                                      }}
                                    >
                                      Name- <span>{val.name}</span>
                                    </p>
                                    <p
                                      style={{
                                        fontSize: '12px',
                                        lineHeight: '18px',
                                        color: '#000000',
                                        marginBottom: '0',
                                      }}
                                    >
                                      Designation- <span>{val.designation}</span>
                                    </p>
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
                          <ol
                            style={{
                              fontSize: '12px',
                              lineHeight: '18px',
                              color: '#000000',
                            }}
                          >
                            {data?.stevedoreAuthorized?.length > 0 &&
                              data?.stevedoreAuthorized?.map((val, index) => {
                                return (
                                  <li>
                                    <p
                                      style={{
                                        fontSize: '12px',
                                        lineHeight: '18px',
                                        color: '#000000',
                                        marginBottom: '0',
                                      }}
                                    >
                                      Name- <span>{val.name}</span>
                                    </p>
                                    <p
                                      style={{
                                        fontSize: '12px',
                                        lineHeight: '18px',
                                        color: '#000000',
                                        marginBottom: '0',
                                      }}
                                    >
                                      Designation- <span>{val.designation}</span>
                                    </p>
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
                          <ol
                            style={{
                              fontSize: '12px',
                              lineHeight: '18px',
                              color: '#000000',
                            }}
                          >
                            {data?.cmaAuthorized?.length > 0 &&
                              data?.cmaAuthorized?.map((val, index) => {
                                return (
                                  <li>
                                    <p
                                      style={{
                                        fontSize: '12px',
                                        lineHeight: '18px',
                                        color: '#000000',
                                        marginBottom: '0',
                                      }}
                                    >
                                      Name- <span>{val.name}</span>
                                    </p>
                                    <p
                                      style={{
                                        fontSize: '12px',
                                        lineHeight: '18px',
                                        color: '#000000',
                                        marginBottom: '0',
                                      }}
                                    >
                                      Designation- <span>{val.designation}</span>
                                    </p>
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
                      <td align="left" width="50%">
                        <p
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                          }}
                        >
                          FOR & ON BEHALF OF
                        </p>
                      </td>
                      <td align="left" width="50%">
                        <p
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                          }}
                        >
                          FOR & ON BEHALF OF
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
                          <strong>{data.seller}</strong>
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
                          <strong>{data.buyer}</strong>
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
                          FOR & ON BEHALF OF
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
                          FOR & ON BEHALF OF
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
                          <strong>{data.seller}</strong>
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
                          <strong>{data.buyer}</strong>
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
