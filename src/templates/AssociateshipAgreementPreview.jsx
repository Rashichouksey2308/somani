import moment from 'moment';

export default function AssociateshipAgreementPreview(data) {
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
                <td align="center" style={{ padding: '20px 0 35px' }}>
                  <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                    <strong>ASSOCIATESHIP AGREEMENT</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td align="justify">
                  <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                    {data.buyer}, a company incorporated under the Indian Companies Act, 1956, having its Registered
                    Office at {data.buyerAddress?.fullAddress},{data.buyerAddress?.city} {data.buyerAddress?.country},{' '}
                    {data.buyerAddress?.pinCode}, through its Authorised Signatory (hereinafter called{' '}
                    <strong>{data.shortbuyer}</strong> or <strong>“Seller”</strong>, which expression shall, unless it
                    be repugnant to the context or meaning thereof, be deemed to mean and include its successors and
                    permitted assigns, attorneys) of One Part.
                  </p>
                </td>
              </tr>
              <tr>
                <td align="justify">
                  <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                    This Agreement (<strong>“Agreement”</strong>) is made at the place and on the day as set out in{' '}
                    <strong>Schedule I</strong> hereto by and between:
                  </p>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>AND</p>
                </td>
              </tr>
              <tr>
                <td align="justify">
                  <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                    Person(s) detailed in <strong>Schedule I</strong> hereof (hereinafter referred to as the "
                    <strong>Associate Buyer</strong>"), which expression shall, unless it be repugnant to the context or
                    meaning thereof, be deemed to mean and include its successors and permitted assigns) of the other
                    Part.
                  </p>
                </td>
              </tr>
              <tr>
                <td align="justify">
                  <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                    <strong>{data.shortbuyer}</strong> and the Associate Buyer, wherever required, are collectively
                    referred to as the “Parties” and individually as the “Party”.
                  </p>
                </td>
              </tr>
              <tr>
                <td align="left">
                  <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                    <strong>Recitals</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td align="justify">
                  <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                    WHEREAS Associate Buyer has requested IGI to arrange import purchase of Goods (Details of the Goods
                    including quantity, quality, Inco terms is annexed in Schedule I) from the Supplier and sale of the
                    same to the Associate Buyer on stock &amp; sale basis.{' '}
                  </p>
                </td>
              </tr>
              <tr>
                <td align="justify">
                  <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                    Relying upon the representations and information provided by the Associate Buyer in the Request and
                    in the Agreement, <strong>{data.shortbuyer}</strong> has agreed to arrange import/ purchase of Goods
                    from the Supplier (Details of Supplier in Schedule-I) and to sell the same to the Associate Buyer on
                    stock &amp; sale basis.
                  </p>
                </td>
              </tr>
              <tr>
                <td align="justify">
                  <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                    Whereas, Supplier shall sell the Goods to <strong>{data.seller}</strong>, Zug (hereinafter referred
                    to as <strong>{data.buyer}</strong>) for onward sale to <strong>{data.shortbuyer}</strong> and{' '}
                    <strong>{data.shortbuyer}</strong> shall, in terms of this Agreement, sell the same to the Associate
                    Buyer.
                  </p>
                </td>
              </tr>
              <tr>
                <td align="justify">
                  <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                    Whereas <strong>{data.shortbuyer}</strong> shall import Goods for and on behalf of the Associate
                    Buyer, at the sole risk and responsibility of the Associate Buyer and shall store the same under the
                    custody of the Customs House Agent/ Collateral Manager appointed on mutually agreed terms.
                  </p>
                </td>
              </tr>
              <tr>
                <td align="justify">
                  <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                    WHEREAS the Associate Buyer has also submitted undertakings for (a) Price Justification along with
                    Quality and Quantity of the material and (b) Postdated Cheques to pay the balance/ outstanding
                    amount to <strong>{data.shortbuyer}</strong> at the time of making the above request for import of
                    the Goods and these undertaking(s) form an integral part of this Agreement.
                  </p>
                </td>
              </tr>
              <tr>
                <td align="justify">
                  <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                    <strong>Now Therefore</strong>, in consideration of the promises and of the mutual agreements,
                    covenants, representations and warranties hereinafter contained, and for other good and valuable
                    consideration the Parties hereby agree as follows:
                  </p>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <ol type="1" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                    <li style={{ fontWeight: 'bold' }}>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Item &amp; Price</strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', fontWeight: 'normal' }}>
                        The details of the Commodity contracted quantity, Origin, Unit Price and total contract value
                        are mentioned in Schedule I.
                      </p>
                      <ol
                        type="A"
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          paddingLeft: '0',
                          fontWeight: 'normal',
                        }}
                      >
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The Associate Buyer affirms that the Supplier, Item, specifications, quantities, Origin,
                            delivery and all other terms &amp; conditions of sale between Indo and the Supplier have
                            been negotiated and firmed up between Associate Buyer and Supplier. The Associate Buyer
                            further undertakes that it has ensured that the Sales Contract to be entered into between
                            Indo and the Supplier (“Sale Contract”) is in accordance with the negotiations undertaken by
                            the Associate Buyer and the Supplier.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The Associate Buyer confirms that he is solely responsible for competitiveness of price,
                            selection of Supplier, quality, and quantity of goods and all the risks associated
                            therewith.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Pricing: - The calculation of price shall be done as below
                          </p>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The basic Price in INR for invoicing by Seller will be calculated as under: -
                          </p>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Import Price Per Ton Plus Insurance plus Basic Customs Duty plus social welfare cess plus
                            IGST plus Compensation cess and any other duty, cost and/or charges, Letter of Credit (LC)
                            Opening Charges, Custodian Charges of CMA monthly plus one-time charges + INR 1 PMT, Usance
                            Interest, plus Seller's margin, wherever applicable.
                          </p>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            All applicable Statutory, Government Duty &amp; Taxes including but not limited to the
                            Import duty, Cess, GST, TCS @ 1%, CIMS Charges etc, shall be borne by the Associate Buyer
                            including payment to the Associate Buyer's nominated stevedoring handling agent for purpose
                            of allocating the plot to the Seller, arranging discharge, movement and delivery of cargo to
                            the Associate Buyer strictly against the written delivery order issued by Seller. All risks
                            and responsibility including but not limited to damage to goods, shortage, mix-up, quality
                            Issues, if any, is the sole responsibility of the Associate Buyer. The expenses for such
                            services shall also be borne by the Associate Buyer and will be included in the sale price
                            of Goods/Services.
                          </p>
                          <br/><br/><br/><br/><br/><br/><br/><br/>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#FF0000' }}>
                            The exchange rate prevailing at the time of making payment of the margin money by the
                            Associate Buyer shall be the provisional price for preparation of provisional invoice .
                          </p>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#FF0000' }}>
                            The final invoicing will be done in INR and the final exchange rate on the basis of which
                            invoicing shall be:
                          </p>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#FF0000', marginLeft:'-10px'}}>
                            a)&nbsp;the price at which the forward is booked or
                          </p>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#FF0000', marginLeft:'-10px'}}>
                            b)&nbsp;the average of the exchanges rate at which the payment of Import is made by IGI to Indo
                            for this transaction.
                          </p>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#FF0000' }}>
                            The exchange rate difference loss or gain both will be to the Associate Buyer account.
                          </p>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#FF0000' }}>
                            The final price so worked out shall be reflected in the last invoice carrying out all
                            adjustments in regards to exchange rate variation / expenses &amp; charges.
                          </p>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The amount payable as per the final invoice issued by IGI shall be final and binding on the
                            Associate Buyer.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Advance Margin Money</strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        The Associate Buyer shall make payment of margin money of the total Contract Value as advance
                        prior to opening of LC by Indo on the Supplier as mentioned in Schedule I.
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        Indo will open the LC in favour of Supplier within 5 working days of receipt of the Advance as
                        stated herein.
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        The cash advance shall be adjusted at the time of issuance of the last release order of the
                        consignment. The Associate Buyer unequivocally agrees that the exchange rate prevailing at the
                        time of last release order shall be applicable on the foregoing cash advance.
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        It is expressly clarified that the advance margin money shall be maintained on Mark-to-Market
                        (M2M) basis on the prevailing exchange rate and market price of the commodity. In the event of
                        shortfall in the margin money Seller have the right &amp; the Associate Buyer has the obligation
                        pay the shortfall amount forthwith in any case not later than 3 (three) working days from the
                        date of such demands and Associate buyer unequivocally agrees to pay the shortfall on margin
                        money without any protest within stipulated time.
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Payment</strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        The Associate Buyer shall pay for the Goods imported as per mutually agreed terms mentioned in{' '}
                        <strong>Schedule I</strong>. The Associate Buyer shall make full payment of the material to be
                        lifted through RTGS/NEFT. Seller/Custom House Agent (“
                        <strong>CHA</strong>”)/Stevedore shall release the part material to Associate Buyer upon receipt
                        of part payment for the part quantity of material to be lifted after obtaining delivery order or
                        Written Release Order. The delivery order instructions shall be issued for the part material by
                        Seller, for which the payment has been made.
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        At the time of execution of this Agreement, Associate Buyer will give post-dated cheques for
                        agreed percentage mentioned in
                        <strong>Schedule I</strong> of the total Contract value in Indian Rupees which includes agreed
                        percentage of Trading Margin of Seller, as security towards payment of the balance
                        consideration, along with a legal Undertaking as per the format given by Seller.
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Delay in payment</strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        Any delay in payment beyond due date shall attract a penal interest at the rate of agreed
                        percentage per month mentioned in
                        <strong>Schedule I</strong>, which shall be payable by Associate Buyer to Seller forthwith on
                        receipt of demand for the same.
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>Seller's trading Margin</p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        The Trading margin of Seller shall be paid by the Associate Buyer as per details mentioned in
                        Schedule 6, and the same shall be collected in the Sale Invoice raised by Seller on the
                        Associate Buyer.
                      </p>
                    </li>
                    <li style={{ fontWeight: 'bold' }}>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>IGI 's trading Margin</strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', fontWeight: 'normal' }}>
                        The Trading margin of IGI shall be paid by the Associate Buyer as per details mentioned in
                        Schedule I, and the same shall be collected in the Sale Invoice raised by IGI on the Associate
                        Buyer.
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Other Charges</strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        Any and all incidental charges that may be incurred by Indo and/or Seller in relation to the
                        import/storage/maintenance/delivery/security, Railway Freight, Penalty, Charges etc. of the
                        Goods shall be to the account of the Associate Buyer and will be payable by Associate Buyer to
                        Seller at actuals within 5 days of demand from Seller.
                      </p>
                    </li>
                    <br/><br/><br/><br/><br/>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Quality, Quantity, Pre-Shipment Inspection</strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        Obligations of the Associate Buyer are as under:
                      </p>
                      <ol type="A" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Ensuring pre-shipment inspection of the goods/items from agency of international repute as
                            acceptable to Seller.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Approval and/or acceptance of quantity and quality certificate issued by the Supplier.{' '}
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Ensuring that quality and quantities of goods shipped are as per LC / Sales Contract /
                            Proforma Invoice at pre-shipment stage and also at port of discharge.
                          </p>
                        </li>
                        <li style={{ color: '#FF0000' }}>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#FF0000' }}>
                            Quantity as per Bill of Lading (“<strong>BL</strong>”) shall be final and binding on the
                            Associate Buyer.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Seller shall not be responsible for <em>any</em> variation in quantity and/or quality of
                            material at the port of loading, port of discharge, during transit to godown/warehouse/plot,
                            while in godown/warehouse/plot and/or till it is delivered to the Associate Buyer. It shall
                            at all times remain the sole responsibility of the Associate Buyer. Associate Buyer shall be
                            solely responsible for any non-supply, short supply or deviation in quality
                            standards/quantity or delay in supply for any reason whatsoever.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Associate Buyer shall be solely liable and responsible for all consequences arising out of
                            any variation of the item/quality/quantity contracted for &amp; actually shipped. Associate
                            Buyer undertakes to indemnify Seller in this regard. It has been agreed by the Associate
                            Buyer that any claim/liability arising from the Supplier against Indo/Seller shall be passed
                            on to the Associate Buyer. If the Supplier agrees upon any compensation on account of any
                            quality deviation, then Seller shall refund the same to the Associate Buyer on receipt of
                            the same.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Insurance</strong>
                      </p>
                      <ol type="A" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The Marine Insurance will be arranged by the Associate Buyer in favour of IGI or IGI’s
                            nominated Bank (as per IGI’s discretion), for 110% of Import Cargo Value, the cost of it
                            shall be borne by the Associate Buyer. In case IGI decides to take the insurance directly in
                            its name, the cost of it shall be borne by the Associate Buyer.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The cargo while in the port, during transit from port to godown/plot/warehouse and while in
                            the godown/plot/warehouse and while in Ocean shall be insured by way of insurance by
                            Associate Buyer in favour of IGI or IGI’s nominated Bank (as per IGI’s discretion), for 110%
                            of landed cost (inclusive of custom duty, all other taxes applicable under GST Act 2017 as
                            amended till date). Associate Buyer will ensure that the material shall at all times remain
                            insured.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The Insurance policy in original or digitally signed by Insurance Company whichever is
                            required to file and process the claim before Insurance Company, shall be submitted by
                            Associate Buyer to IGI immediately on demand. In case the Associate Buyer fails to take the
                            Insurance as desired by IGI, IGI shall among other rights reserved under this Agreement,
                            including right to terminate the Agreement, be at liberty to take such insurance at cost of
                            the Associate Buyer.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            In the event of any loss, or any other event, leading to invocation of insurance policy, the
                            process of filing of claim, settlement of amount, etc. shall be the sole responsibility of
                            the Associate Buyer. It has been agreed by the Associate Buyer that settlement, if any,
                            arrived with the Insurance Company, shall be paid directly by the Insurance Company to IGI
                            or IGI's nominated bank as the case may be and the same shall not absolve the Associate
                            Buyer of their liability under the Associateship Agreement towards Seller.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Stock &amp; Sale / Clearance at Port of Entry</strong>
                      </p>
                      <ol type="A" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The Goods shall be sold by IGI to Associate Buyer on Stock &amp; Sale basis as per delivery
                            terms mentioned in Schedule I. IGI shall file the Bill of Entry in its name and the
                            Associate Buyer shall arrange to clear the cargo at the port.
                            <br />
                            In case the shipment is under Form A-1 the same shall be arranged by the Associate Buyer on
                            or before the customs clearance.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            IGI shall generate e-way bill from the GST portal under its registration for movement of the
                            goods by Rail or Road.{' '}
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            All Duties and taxes shall be paid by the Associate Buyer to CHA/IGI in advance at the time
                            of Custom Clearance. The Associate Buyer shall bear all Handling Charges, Port Charges, Plot
                            Rentals, t etc. to CHA who will take care of the payments to Port and raise bills on
                            “Associate Buyer” for this. The Associate Buyer shall separately take care of the
                            above-mentioned charges and levies and shall make payment of the same to Seller, immediately
                            upon receipt of demand for the same from Seller.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Quantity in Railway Receipt (“<strong>RR</strong>”) /Lorry Receipt (“<strong>LR</strong>”)
                            shall be the final basis for GST billing. The final reconciliation shall be done based on
                            the BL quantity only.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            BL quantity shall be considered the final quantity. Any shortage from the BL quantity shall
                            be to the account of Associate Buyer and IGI shall in no way be responsible for the same.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <br/><br/><br/><br/><br/><br/>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Transport/Storage</strong>
                      </p>
                      <ol type="A" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Associate Buyer shall bear and pay railway / Truck freight &amp; related expenses for
                            movement of goods from discharge Port to Associate Buyer's Plant directly. Seller/Associate
                            Buyer shall generate e-way bill from the GST portal under its registration for movement of
                            the goods by Rail or Road.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            It is agreed that Seller shall retain the title over the Goods and that the Associate Buyer
                            shall not create/ put any further charge, encumbrance with any other person/ party/entity,
                            etc. on the Goods. Further Associate Buyer shall not lift any material without Release order
                            issued by Seller.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            All risks and losses including in terms of variation in quality or quantity of goods lying
                            in the godown/plot/warehouse, including shortage, loss due to theft/burglary/ contamination
                            or any other reason whatsoever shall be borne by Associate Buyer and Seller shall in no way
                            be liable for the same.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            <strong>Safekeeping and Security of the Goods: </strong>
                            <br />
                            Proper safekeeping and security of Goods and management of the storage yard shall be the
                            responsibility of the Associate Buyer. The Associate Buyer shall provide round the clock
                            security guards at the Storage yard where Goods shall be stored. Seller shall in no way be
                            responsible or liable for any loss or damage to the Goods for any reason whatsoever
                            including shortage or theft.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Custom House Agent / Stevedoring Agent</strong>
                      </p>
                      <ol type="A" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            On Associate Buyer's request, IGI has agreed to appoint Associate Buyer's nominated
                            Stevedoring agent for providing the stevedoring services as specified in the agreement to be
                            entered with Stevedoring Agent.
                          </p>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The Associate Buyer confirms and agrees that IGI shall not be liable or responsible for any
                            non-performance or breach of the terms of the Agreement by the stevedores in any manner
                            whatsoever, including but not limited to shortage, theft, mix-up of the Goods with other
                            goods or materials, delay in performance of terms of Stevedoring agreement by Stevedores.
                            For any claims arising out of the breach of the terms of the stevedoring agreement by the
                            Stevedores, the Associate Buyer shall be solely responsible without any liability or
                            responsibility of IGI whatsoever.
                          </p>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The Associate Buyer indemnifies and holds harmless IGI from any losses, damages, claims,
                            costs incurred or suffered by IGI due to breach of the obligations, misrepresentation or
                            breach of trust by the Stevedoring agent.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            IGI will instruct the stevedoring agent consign the material directly to the IGI's nominated
                            warehouse/plot/etc, where the goods will be stored. The Goods shall remain under the control
                            and custody of the Stevedoring Agent who will work under the sole instructions of IGI. The
                            Stevedoring Agent, shall furnish an undertaking that goods will not be released to Associate
                            Buyer or to their nominees without a written Release order from IGI. IGI shall enter into an
                            agreement with Stevedoring Agent &amp; the Associate Buyer. Stevedoring Agent will raise
                            invoice on IGI.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Stevedoring Agent will apply online for EDRM permission for Railway Rakes/Transporter
                            Stevedoring Agent will place indent online. The Associate Buyer will coordinate with
                            “Stevedoring Agent for making necessary arrangements to place for Railway Rakes. The
                            Associate Buyer will pay the railway freight and related charges directly. Scanned copy of
                            RR shall be furnished by Stevedoring Agent to IGI as well as the Associate Buyer as soon as
                            it is issued after loading. The original RR/LR shall be sent by Stevedoring Agent to the
                            Associate Buyer for taking delivery of the rake.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '10px' }}>
                            Stevedoring Agent shall inter-alia undertake the following tasks:
                          </p>
                          <ul type="disc" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft:'16px' }}>
                            <li>
                              <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                                Arranging allotment of plot at the Discharge Port
                              </p>
                            </li>
                            <li>
                              <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                                Customs Clearance of Cargo.
                              </p>
                            </li>
                            <li>
                              <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                                Cargo discharge at Discharge Port
                              </p>
                            </li>
                            <li>
                              <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                                Transportation to Plot
                              </p>
                            </li>
                            <li>
                              <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                                Segregated stacking of cargo at plot grade wise
                              </p>
                            </li>
                            <li>
                              <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                                Arranging security cover
                              </p>
                            </li>
                            <li>
                              <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                                Placing Railway indents etc
                              </p>
                            </li>
                            <li>
                              <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                                Loading on to wagons / trucks
                              </p>
                            </li>
                          </ul>
                        </li>
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                          The detailed tasks shall be laid down in the stevedoring agreement.
                        </p>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Inland Transportation</strong>
                      </p>
                      <ol type="A" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The movement of goods from port to warehouse/ plot shall be made by an approved transporter
                            under Transit Insurance Cover, taken by the Associate Buyer in favour of Seller or Seller's
                            Nominated Bank, at the cost and risk of Associate Buyer.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The Goods shall be cleared and consigned directly to the plot/godown/warehouse (leased in
                            favour of and/or in control of Seller) intended to store the goods in the name of Seller.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The Associate Buyer shall be held solely liable and responsible for all consequences arising
                            during loading and unloading of Goods at port, movement of goods from port to
                            warehouse/godown/plot and unloading and/or storing of goods at warehouse/godown/plot, and
                            dispatch to the works of the Associate Buyer. All loss in terms of variation in quality
                            and/or quantity of goods shall be borne by Associate Buyer and Seller shall in no way be
                            liable for the same.
                          </p>
                          <br/><br/><br/><br/><br/>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginLeft: '-16px' }}>
                            <strong>
                              11 (A). <u>OCEAN TRANSPORTATION:</u>
                            </strong>
                          </p>
                          <ol
                            type="A"
                            style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}
                          >
                            <li>
                              <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                                Ocean transportation will be arranged by the Associate Buyer. The freight payment will
                                be made by IGI as directed by the Associate buyers upon receipt of the freight invoice.
                              </p>
                            </li>
                            <li>
                              <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                                Associate Buyer will be solely responsible for the settlement and confirmation of
                                demurrage / dispatch / laytime calculation with shippers/ stevedores/ receivers and IGI
                                will only be responsible for make the freight / demurrage payment as and when remitted
                                by Associate Buyer.
                              </p>
                            </li>
                            <li>
                              <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                                In case of any claim / liability arising out of Charter-party for the vessel chartered
                                then same will be on Associate Buyer's account,
                              </p>
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Independent Surveyor/Security</strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        IGI will appoint an independent surveyor and/ or collateral manager at Associate Buyer's cost
                        who will be present at the time of release of each consignment and will provide a daily report
                        of the stock at godown/warehouse/plot. The Stevedoring agent and the Associate Buyer shall
                        provide unrestricted and unfettered access to the said collateral manager. Stevedoring agent,
                        Associate Buyer, IGI and the Collateral Manager shall enter into an agreement detailing the
                        rights and responsibility of each party.
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Payment before Completion of Due Date</strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        IGI will sell the goods to Associate Buyer against 100% payment including IGI 's Trading Margin
                        and other expenses to be made by Associate Buyer as per Payment Terms.
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        Associate Buyer shall pay for the entire material 3 working days before the due date as
                        mentioned in clause 3 above. The advance paid by Associate Buyer shall be adjusted against
                        release of the last lot at the exchange rate prevailing at the time of adjustment of the
                        advance.
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        In case IGI and/or Indo remains out of pocket beyond the agreed due date and/or Indo's/IGI's
                        funds are blocked in this transaction, the Associate Buyer will pay interest at the rate of
                        1.25% per month to IGI.
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Title/Risk </strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        Title to the Goods shall be deemed to have been transferred to the Associate Buyer and the Goods
                        shall be deemed to be sold and delivered to the Associate Buyer only upon receipt by the Seller
                        of the entire contract value from the Associate Buyer. It is clarified that the Seller shall
                        retain full legal ownership in the Goods, to secure the Associate buyer's obligation to pay the
                        entire contract value, until receipt by the Seller of the entire contract value. All risk of
                        loss or damage thereto shall pass to the Associate Buyer as per Incoterms 2020.
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Exchange Rate and Exchange Risk</strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        If required, Seller will take forward cover from its Bank, in consultation with Associate Buyer,
                        at the cost and risk of Associate Buyer. The exchange rate so decided, shall be acceptable to
                        Associate Buyer.
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Right to Dispose off Goods</strong>
                      </p>
                      <ol type="A" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            In the event of breach of the quadripartite agreement and /or this Agreement including but
                            not limited to any delay/failure/refusal on the part of the Associate Buyer to pay for the
                            entire cost of the import consignment within the due date as aforesaid, or refusal to take
                            delivery of the consignment for any reason whatsoever, apart from the rights and remedies
                            available to IGI, the margin money paid by the Associate buyer shall be forfeited and IGI
                            shall be at liberty to sell the Goods to any other party at the costs, risks and
                            responsibility of the Associate Buyer. It is confirmed and undertaken by the Associate
                            Buyer, that Associate Buyer shall not raise any objection to the method adopted by IGI to
                            sell the said goods, in case IGI wishes to exercise its discretion under this clause. The
                            amount received by selling the Goods shall be adjusted towards the expenses, costs, losses
                            incurred by IGI in disposal of goods and against the outstanding amount in the account of
                            the Associate Buyer maintained by IGI. Any amount still due and payable by the Associate
                            Buyer after such adjustment shall be payable by the Associate Buyer forthwith upon receipt
                            of demand from IGI, failing which IGI shall have the right to recover the same by exercising
                            any and/or all legal remedies available to IGI.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Any shortfall on account of such disposal of Goods and any loss incurred by IGI, including
                            and not limited to, interest/ detention/ demurrage/ storage/ carrying charges, direct or
                            consequential losses or damages after adjustment of amounts received by IGI shall be payable
                            by the Associate Buyer forthwith within 3 days upon receipt of demand for the same from IGI
                            failing which the Associate Buyer will be liable to pay interest at the rate of 18% per
                            annum on monthly rest basis.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            It is made clear that any profit made upon disposal of the goods to any third party under
                            this clause, shall solely belong to IGI.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>GST/Other Tax</strong>
                      </p>
                      <br/><br/><br/><br/><br/><br/><br/><br/>
                      <ol type="A" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The GST Liability and issuance of certificates under the GST Act 2017 as applicable will be
                            the responsibility of Associate Buyer. However, if any other tax liability is levied on this
                            transaction on IGI, the same shall be reimbursed to IGI by Associate Buyer within 7 days of
                            IGI notifying the Associate Buyer of the levy.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Withholding tax, if any, will be to the account of Associate Buyer. Any excess/refund will
                            be settled within a week's time after getting such advice from IGI.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Associate Buyer to submit Form 27C (in original) to IGI on monthly basis, in advance. In
                            absence of form 27C IGI will collect the TCS as applicable.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Notices</strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        Any notice given under this Agreement, and/or any other agreement emanating from this Agreement,
                        shall be in writing and shall be served by email, courier, registered mail or Speed Post only.
                        The party's address for the service of notice shall be the address mentioned in{' '}
                        <strong>Schedule I</strong> of this agreement or such other address as specified by notice to
                        the other party. The notice shall be deemed to have been served if it was served by post, 48
                        hours after it was posted.
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Governing Laws and Jurisdiction</strong>
                      </p>
                      <ol type="A" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The Laws of India shall be the governing laws in respect of this Agreement.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            In relation to any dispute arising out of in connection with this Agreement and for the
                            exclusive benefit of IGI, the Associate Buyer hereby irrevocably and unconditionally submits
                            to the jurisdiction of the Courts in Delhi and waives any objection to proceedings with
                            respect to this Agreement in those Courts on the grounds of venue, inconvenient forum of
                            otherwise. However, IGI shall at its sole discretion have the right to file proceedings in
                            other Courts with jurisdiction.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Arbitration</strong>
                      </p>
                      <ol type="A" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Any dispute or difference, whatsoever, arising between the parties out of, or relating to,
                            or incidental to the construction, meaning, scope, operation or effect of this Agreement; or
                            the validity or the breach thereof, shall be settled by Arbitration by a Sole Arbitrator in
                            accordance with Rules of Arbitration formulated by Indian Council of Arbitration (ICA) and
                            the Associate Buyer agrees to submit to the said forum. The Award made in pursuance thereof
                            shall be binding on the parties. The seat and venue of Arbitration will be New Delhi and the
                            language of Arbitration Proceedings shall be in English.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Dispute resolution with Indo/Supplier</strong>
                      </p>
                      <ol type="A" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            {' '}
                            If, due to the failure of the Associate Buyer to fulfil its obligations as laid down
                            hereunder in this Agreement, any dispute or difference arises between Indo/Associate Buyer
                            and Supplier, and due to which any Award/Judgment/decree/Order is passed or otherwise a
                            settlement is reached, the Associate Buyer shall be bound to accept the same and bear the
                            liability, costs, expenses arising there from. In the event, any judicial/ legal proceedings
                            are initiated against the Indo/ IGI by the Supplier, the Associate Buyer shall be required
                            to be present and associated at all stages of the proceedings and shall bear the entire
                            expenses of arbitration/litigation and/or of the negotiated settlement. The Associate Buyer
                            shall have no authority or excuse to challenge the same on any ground including that the
                            Associate Buyer has not been consulted therein or that the negotiated settlement is not
                            reasonable or otherwise. Remedies provided under this agreement shall be cumulative and in
                            addition to other remedies provided by law.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            In case there is any dispute, arising out of and/or pursuant to this Agreement, either
                            between Associate Buyer and the Supplier and/ or the Supplier and Indo/IGI, the same shall
                            be settled amicably directly by Associate Buyer with the Supplier. In case, such dispute is
                            not settled amicably, any arbitration proceedings and/or other proceedings, which may be
                            initiated by any of the Parties, shall be solely at the cost and risk of Associate Buyer and
                            IGI shall in no manner be liable and responsible for the same.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Settlement of Accounts</strong>
                      </p>
                      <ol type="A" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            After conclusion of the deal i.e. receipt of the amounts due to Seller from Associate
                            Buyer/remittance against the import &amp; receipt of RR copies and all other supporting
                            documents related to domestic sale, the account maintained by Seller for the Associate will
                            be settled as per the procedure followed by Seller.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            In case after opening of Letter of credit by Indo, the supply contract with Supplier is
                            cancelled for any reason whatsoever, IGI shall be entitled to receive from Associate Buyer
                            all costs incurred by Indo and IGI along with its margin/ service charges + applicable GST
                            rate + other costs etc.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Indemnification</strong>
                      </p>
                      <br/><br/><br/><br/><br/><br/><br/>
                      <ol type="A" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Associate Buyer agrees to defend, indemnify, keep indemnified and hold harmless at all
                            times, IGI including, IGI's directors, officers and employees from and/or against all and
                            any claims, losses. damages, demands or costs including but not limited to taxes/duties
                            damages, expenses, demurrage, penalties, liabilities, legal cost, no shipment, delayed
                            shipment, short shipment, claims on account of quality/quantity/making/weight/specifications
                            etc., of whatever nature, arising from but not limited to any action, omission, willful
                            conduct, negligence and/or breach of any term or condition of this Agreement, on part of the
                            Associate Buyer or Supplier or Stevedore. No claim shall be passed on to IGI or Indo either
                            by Supplier or Associate Buyer.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            All transit or storage losses on any account whatsoever, shall be borne by Associate Buyer
                            and Seller shall in no way be liable for the same.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Associate Buyer shall always abide by the laws of the State and Central Government as
                            applicable/in force from time to time. IGI shall not be responsible for any repercussion on
                            this Agreement on account of any change in Government Acts, Rules and Regulations, or for
                            any failure on the part of the Supplier/Associate Buyer to comply with the same.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            That it is made clear that IGI shall not be liable for any loss or damage emanating from the
                            present Agreement and executing the transaction contemplated hereto under any circumstances
                            whatsoever.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>General Dispute Clause</strong>
                      </p>
                      <ol type="A" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            In the event any dispute of whatsoever nature arises including but not limited to regarding
                            the time schedule, quality, quantity and demurrage to the same, or difference between the
                            parties, the liability thereto, if any, will be that of Associate Buyer. It is clearly
                            understood between the Parties to the contract that any claim of whatever nature shall be
                            settled between the Associate Buyer and the Supplier directly themselves without recourse to
                            Seller as a party to the dispute.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Confidentiality</strong>
                      </p>
                      <ol type="A" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            This contract, its provisions and existence, as well as any commercial data including price
                            or technical data and any information provided in accordance herewith to the other party
                            shall be considered as confidential. Such information shall not be disclosed to any third
                            party unless required by any applicable law or authorized in writing by the other party.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            All such information shall be used by the other party only for the purpose of performance of
                            this contract.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            The restrictions here-in-above shall not apply to any information generally available to the
                            public or received in good faith from a third party without restriction. The parties hereto
                            agree to keep as confidential all documentation furnished or received by either party at any
                            time in connection with this contract.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            This provision, as far as practicable, shall apply to all the concerned officials of either
                            party.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            This clause shall survive upon termination or conclusion of this Agreement.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Amendments</strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        This Agreement shall not be amended, altered or modified, or any provision herein shall not be
                        waived, except by an instrument in writing expressly referring to this Agreement and signed by
                        the duly authorized representatives of both the Parties, and no verbal agreement or conduct of
                        any nature related to the subject matter hereof or to the relationship between the Parties will
                        be considered valid enforceable.
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Severability</strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        If any part or provision of this Agreement not being a fundamental nature is held illegal or
                        unenforceable, the validity of enforceability of the remainder of the Agreement shall not be
                        affected if such part, term of provision is severable from the rest of the Agreement without
                        altering the essence of this Agreement.
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Breach of the Contract</strong>
                      </p>
                      <ol type="1" style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingLeft: '0' }}>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            In the event the Associate Buyer commits any breach of the terms of the Agreement, then the
                            Seller may, by giving three (3) days notice to the Associate Buyer, terminate this Agreement
                            without any liability and charge to the Seller whatsoever. However, Associate Buyer shall
                            remain liable to the Seller for making payment of the Goods already shipped by the Supplier.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            Provided further, the Parties hereto agree that Seller may immediately terminate this
                            Agreement without providing any notice to the Associate Buyer upon the Associate Buyer, or
                            the Associate Buyer's shareholders commencing a voluntary proceeding under any applicable
                            bankruptcy, insolvency, winding up or other similar law now or hereafter in effect
                            (including but not limited to the Insolvency and Bankruptcy Code, 2016), or consents to the
                            entry of an order for relief in an involuntary proceeding under any such law (including but
                            not limited to the Insolvency and Bankruptcy Code, 2016), or consents to the appointment or
                            taking possession by a resolution professional, receiver, liquidator, assignee (or similar
                            official) for any or a substantial part of its property; or the Associate Buyer has
                            involuntarily become the subject of proceedings (including filing of an application/ <br/><br/><br/><br/><br/><br/><br/><br/>
                            petition for corporate insolvency resolution) under the Insolvency &amp; Bankruptcy Code,
                            2016 or an order has been made by the appropriate authority for winding up of the Associate
                            Buyer.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Special Conditions</strong>
                      </p>
                      <ol
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          paddingLeft: '0',
                          listStyle: 'none',
                        }}
                      >
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            <span style={{ marginLeft: '-14px' }}>i)</span>&nbsp; It is expressly and unconditionally agreed
                            and acknowledged by the and Associate Buyer that the title in the goods/ material shall pass
                            on to the Associate Buyer only in respect of such specific quantity thereof as released from
                            the storage facility by the Stevedore under the Authorized Release Orders after receipt of
                            the price and other payables in respect and actual delivery of the goods having been made to
                            the Associate buyer. The Seller shall continue to be the owner, holding absolute title in
                            the goods/material not so released and delivered to the Associate Buyer in any contingency
                            including but not limited to Associate Buyer even becoming insolvent, and shall be entitled
                            to deal with the goods/material as it may deem fit including disposing them off at the risk,
                            costs and consequences of the Associate Buyer. For the avoidance of doubt, the parties agree
                            and acknowledge that the Goods shall not be in any manner whatsoever be construed to be in
                            the constructive or actual possession of the Associate Buyer until receipt by the Seller of
                            the entire contract value. The Associate Buyer specifically represents and agrees to not
                            exercise any or all such possessory rights on the Goods until it makes payment of the entire
                            contract value to the Seller.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            <span style={{ marginLeft: '-16px' }}>ii)</span>&nbsp; It is specifically agreed that the Associate
                            Buyer shall accept the goods on no complaint basis with regard to quality, quantity, mix-up,
                            shortage and/or any other claims. The Seller shall in no way be responsible or liable for
                            the quality, quantity, shortage or any other claims with respect to the Goods supplied by
                            the Supplier and/or any other claim associated or related to this transaction. All such
                            claims shall be lodged, pursued and settled directly between the Associate buyer and
                            Supplier with no liability whatsoever upon Indo and/or the Seller.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            <span style={{ marginLeft: '-20px' }}>iii)</span>&nbsp; The Associate Buyer agrees and acknowledges
                            that the sale of Goods under this Sales Contract is necessary to maintain the Associate
                            Buyer as a going concern and to continue its business operations and consequently, it has
                            requested the Seller to supply goods in accordance with the terms of this Sales Contract.
                            Further, the Associate Buyer agrees and acknowledges that in the event that it is subject to
                            a corporate insolvency resolution process (“CIRP”) under the provisions of the Insolvency
                            and Bankruptcy Code, 2016 (“IBC”) or any other analogous creditors process under applicable
                            law, it (either through itself or through any resolution professional/interim resolution
                            professional appointed to manage its operations pursuant to the IBC) shall make payments of
                            all outstanding amounts due to the Seller under this Sales Contract notwithstanding any
                            general moratorium in relation to the Associate Buyer.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            <span style={{ marginLeft: '-19px' }}>iv)</span>&nbsp; Notwithstanding anything contained herein to
                            the contrary, all risks, consequences arising out of the actual transaction(s) taking place
                            between Supplier &amp; Indo, Indo &amp; IGI and Associate Buyer and IGI and/or agreement
                            with Stevedore under this contract and/or any modified/amended agreement will be to the
                            account of the Associate Buyer only. Indo/Seller shall in no way be responsible or liable
                            for the same.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            <span style={{ marginLeft: '-16px' }}>v)</span>&nbsp; In the event of any breach or default by
                            Associate Buyer or the stevedore of the terms of this Agreement or the Quadripartite
                            agreement, IGI at its sole discretion shall have the right to adjust/set off any amounts
                            paid to it by the Associate Buyer. If the Associate Buyer owes several, independent debts to
                            IGI based on the same or different legal nature, IGI is entitled to declare which debt shall
                            be settled in full or in part with any payment made by the Associate Buyer.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            <span style={{ marginLeft: '-19px' }}>vi)</span>&nbsp; The Associate Buyer undertakes to ensure
                            that all payments to be made to Seller in furtherance of this Agreement or any similar
                            agreements shall be treated as direct cost of production (budgeted operating expenses) and
                            as a 'insolvency resolution process cost' under the Insolvency and Bankruptcy Code, 2016 at
                            all times during the entire term of any such agreements (including this Agreement). If
                            Associate Buyer has or avails any debt or enters into any arrangement with any of its
                            lenders for the plant or otherwise, including any restructuring arrangements of existing
                            debt, it shall ensure that all payments to be made to Seller shall be treated as 'direct
                            cost of production' and 'insolvency resolution process costs' and shall have priority over
                            any financial or operational debt service payments of Associate Buyer. Further, the
                            Associate Buyer shall: (A) not create any lien, or any other encumbrance or security over
                            the goods in favour of its lenders or any other person, without the prior written approval
                            of the Seller and (B) ensure that, if Seller has consented to creation of lien, or any other
                            encumbrance or security as aforesaid, Seller's written consent is taken prior to enforcement
                            of such lien, or any other encumbrance or security. The Associate Buyer hereby agrees and
                            affirms that the aforesaid approval(s) may be granted at the Seller's sole and absolute
                            discretion.
                          </p>
                        </li>
                        <li>
                          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                            <span style={{ marginLeft: '-22px' }}>vii)</span>&nbsp; The Associate Buyer shall not assign or
                            transfer this Agreement or all or any part of its rights or obligations hereunder to any
                            person, firm or corporation without the prior written consent of Seller. Notwithstanding
                            anything to the contrary contained in this Agreement, for avoidance of any doubts, if
                            Associate Buyer decides to enter into any binding legal agreement with any person which will
                            have the effect of a change in Control of or sale of any material assets of Associate Buyer
                            (such agreement, “Change of Control Agreement”), then Associate Buyer shall immediately
                            notify Seller prior to execution of any Change of Control Agreement (“Change of Control
                            Notice”). Within sixty (60) days from the receipt of the Change of Control Notice (“Option
                            Period”), Seller shall have the right to cause Associate Buyer to purchase and pay for all
                            of the Goods imported by Seller for Associate Buyer or terminate any agreement (including,
                            without limitation, this Agreement) for sale of the Goods (“Change of Control Option”) and
                            Associate Buyer agrees that during such Option Period, the Associate Buyer shall not execute
                            any such Change of Control Agreement. The Associate Buyer further acknowledges and
                            unconditionally agrees to pay for all Goods imported by the Seller for the Associate Buyer
                            within 7 days of exercise by the Seller of the Change of Control Option. “Control” for the
                            purposes of this Clause shall mean (including, with correlative meanings, the terms
                            “controlled by” and “under common control with”), as applied to any person, the possession,
                            direct or indirect, of the power to direct or cause the direction of the management and
                            policies of such person, whether through the ownership of voting securities or other
                            ownership interest, the power to constitute majority of the board of directors (or similar
                            governing body) of such person, by contract or otherwise;
                          </p>
                        </li>
                      </ol>
                    </li>
                    <br/><br/><br/><br/><br/>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Force Majeur</strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        That IGI shall not be liable for any damages or losses on account of Force Majeure, as defined
                        herein below. However, the Associate Buyer shall at all times remain liable for payment of the
                        Goods to IGI, irrespective of occurrence of any force majeure condition.
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        “Force Majeure Events” means any event, act or performance which is beyond the control of a
                        party, which includes but not limited to, war, invasion, act of foreign enemies, terrorist
                        activities, nationalization, force majeure declared by Shipper/Supplier, breakdown of transport,
                        government acquisition or sanctions, blockage, embargo, strike, lockout, interruption or failure
                        of power source, act of God (including fire, flood, earthquake, storm, hurricane or other
                        natural disaster), pandemic, epidemic, earthquake, civil disobedience, riots, floods..
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        <strong>Waiver</strong>
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000' }}>
                        Failure of either Party at any time to require performance of any provision of this Agreement
                        shall not affect the right to require full performance thereof, at any time thereafter, and the
                        waiver by any party of a breach of any provision shall not be taken to be a waiver of any
                        subsequent breach thereof, or as nullifying the effectiveness of such provision.
                      </p>
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: '20px' }}>
                  <h3
                    align="center"
                    style={{ fontSize: '15px', fontWeight: 'bold', color: '#000000', marginBottom: '20px' }}
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Place of execution
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Name of Associate Buyer
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Address of Associate Buyer
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          {' '}
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          GSTIN of Associate Buyer
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          {' '}
                          Commodity details
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          {data.commodityDetails}
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Quantity in MT
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          {data.quan?.toLocaleString('en-In', { maximumFractionDigits: 2 })} MT
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Supplier details
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          {data.supplier}
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          {' '}
                          Port of Loading
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          {' '}
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Port of Discharge
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Commodity Specifications
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          <>
                            <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{bordertop: '1px solid #000000', borderLeft: '1px solid #000000'}}>
                              <tr>
                                {data?.spec &&
                                  data?.spec.length > 0 &&
                                  Object.keys(data?.spec[0]).map((val, index) => <td bgColor="#fafafb" style={{fontSize: '12px', lineHeight: '18px', color: '#000000',borderBottom: '1px solid #000000', borderRight: '1px solid #000000', padding: '5px'}} key={index}>{val}</td>)}
                              </tr>
                              {data?.spec &&
                                data?.spec.length > 0 &&
                                data?.spec.map((item, index) => (
                                  <tr>
                                    {Object.values(item).map((value, id) => (
                                      <td style={{fontSize: '12px', lineHeight: '18px', color: '#000000', borderBottom: '1px solid #000000',
                                      borderRight: '1px solid #000000', padding: '5px'}} key={id}>{value}</td>
                                    ))}
                                  </tr>
                                ))}
                            </table>
                            {data.specComment.length > 0 ? <strong style={{fontSize: '12px', lineHeight: '18px', color: '#000000', display:'inline-block', paddingTop: '20px'}}>Comments</strong> : null}
                            <ol style={{fontSize: '12px', lineHeight: '18px', color: '#000000',paddingLeft:'16px'}}>
                              {data.specComment.length > 0 &&
                                data.specComment.map((val, index) => {
                                  return <li><p style={{fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0'}}>{val}</p></li>;
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Inco Terms
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Unit Price
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          {' '}
                          {data.curr}{' '}
                          {data.unitPrice?.toLocaleString(`${data.curr == 'INR' ? 'en-IN' : 'en-EN'}`, {
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Total Contract Value
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          {data.orderValueCurrency}{' '}
                          {data.totalPrice?.toLocaleString(`${data.orderValueCurrency == 'INR' ? 'en-IN' : 'en-EN'}`, {
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Advance Margin Money
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                         
                          {data.advanceMoney} %
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Payment Terms
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          {data?.paymentTerm}
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Trading margin of Seller
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          {data?.tradeMargin} %
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
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Delivery Terms
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          {data?.deliveryTerm}
                        </p>
                      </td>
                    </tr>
                    {/* <tr>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Provisional exchange rate for foriegn currency as per agreement
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          Value
                        </p>
                      </td>
                    </tr> */}
                  </table>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td align="left" colSpan={2}>
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', paddingTop: '30px' }}>
                          <strong>SIGNATURE PAGE</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left">
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '30px'}}>
                          <strong>(Associate Buyer)</strong>
                        </p>
                      </td>
                      <td align="left">
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '30px' }}>
                          <strong>(Indo German International Private Limited)</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left">
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          <strong>Name:<br/>
                          Designation:</strong>
                        </p>
                      </td>
                      <td align="left">
                        <p style={{ fontSize: '12px', lineHeight: '18px', color: '#000000', marginBottom: '0' }}>
                          <strong>Name:<br/>
                          Designation:</strong>
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
