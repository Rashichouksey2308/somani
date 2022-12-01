export default function TPAPreview(data) {
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
              <td align="center" style={{ padding: '15px 0 30px' }}>
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
                  <u>{data.buyer}</u>, a Company incorporated under the Companies Act, 1956, having its{' '}
                  <u>registered office</u> at{' '}
                  <u>
                    {data.buyerAddress?.fullAddress},{data.buyerAddress?.city} {data.buyerAddress?.country},{' '}
                    {data.buyerAddress?.pinCode}
                  </u>
                  through its Authorised Signatory (hereinafter referred as the “
                  <strong>
                    <u>{data.shortbuyer}</u>
                  </strong>{' '}
                  ”, which expression shall, unless excluded by or repugnant to the context be deemed to include its
                  legal heirs, successors and permitted assigns) of the First Part.)
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
                  <u>{data.seller}</u> (hereinafter referred as the{' '}
                  <strong>
                    <u>“{data?.shortseller}”</u>
                    <u>{data.sellerAddress?.fullAddress}</u>,
                    <u>{data.sellerAddress?.city}</u>{" "}
                    <u>{data.sellerAddress?.country}</u>,{" "}
                    <u>{data.sellerAddress?.pinCode}</u>
                  </strong>
                  , which expression shall, unless excluded by or repugnant to the context be deemed to include its
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
                  <strong>WHEREAS:</strong>
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
                  <u>{data.shortseller}</u> is engaged in the business of trading of industrial commodities, which are
                  stored at the Designated Storage Area as detailed in Schedule-I.
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
                  <u>{data.shortbuyer}</u> has purchased Commodity from the Supplier, that has been financed by the
                  “Financing Bank”. The details of the commodity purchased, Supplier and the Financing Bank are
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
                  <u>{data.shortseller}</u>, Collateral Manager and Financing Bank as amended from time to time (the “
                  <strong>Collateral Management Agreement</strong>”) for the purpose of keeping the custody and control
                  of Goods.
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
                  <u>{data.shortbuyer}</u> hereby agrees that it shall grant unrestricted access to a clearly demarcated
                  part of the Storage Facility (as per stocking requirement) in ready-to-operate-condition exclusively
                  for the use of Collateral Manager where the pledged Goods shall only be stored (the “
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
                  <u>{data.shortbuyer}</u> hereby grants unrestricted access of the Designated Storage Area to
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
                    Article- 2-RESPONSIBILITY OF <u>{data.shortbuyer}</u>
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
                  <u>{data.shortbuyer}</u> shall:
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
                  Collateral Manager and held on behalf of <u>{data?.shortseller}</u>;
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
                  the Designated Storage Area clearly specifying the name of <u>{data?.shortseller}</u> as the owner of
                  the Goods and Collateral Manager as the Collateral Manager as custodian of the Goods;
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
                  borne by <u>{data.shortbuyer}</u>. Collateral Manager and their representatives shall have unfettered
                  access to the warehouse/stockyard;
                  <br/><br/><br/><br/><br/><br/><br/><br/>
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
                  cooperation and without creating any hindrance or obstacle;
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
                  Collateral Management Agreement;
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
                  <u>
                    {data.shortseller}, {data.shortbuyer}
                  </u>
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
                  <span className="mr-6">5.2</span> <u>{data.shortbuyer}</u> undertakes that the pledged Goods shall be
                  separately stocked at the Designated Storage Area under the custody and control of Collateral Manager
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
                  This Agreement is irrevocable until the entire stock stored therein has been delivered to {data?.shortbuyer} under
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
                  <span className="mr-6">7.1</span> <u>{data.shortbuyer}</u> shall take out and maintain an all risks
                  cargo insurance policy in respect of the Goods which terms are acceptable to the respective Financing
                  Bank at its full discretion. The policy shall cover loss, strikes, riots, civil commotion, theft,
                  misappropriation and damage of the Goods during storage in the Designated Storage Area and while under
                  transport to and from the Designated Storage Area. The Insurance shall remain valid until the period
                  that the entire Goods at the Designated Storage Area have been released by Collateral Manager to{' '}
                  <u>{data.shortbuyer}</u>. The insurance policy shall name the Financing Bank as a beneficiary of
                  insurances and loss payee.
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
                  <span className="mr-6">7.2</span> Upon request <u>{data.shortbuyer}</u> 
                  will deliver to Collateral Manager and {data?.shortseller} a copy of the relevant insurance agreements, policies and
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
                  <u>{data.shortbuyer}</u> shall be responsible for the payment of all Land and Building taxes as may
                  be applicable and that relate to the Designated Storage Area.
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
                  During the period of this Agreement, <u>{data.shortbuyer}</u> shall be responsible for payment of all
                  charges with regard to water and electricity.
                  <br/><br/><br/><br/><br/><br/><br/>
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
                  <u>{data.shortbuyer}</u> shall bear all duties, taxes, cesses, levies etc. payable under present
                  Indian State/Central Government/Semi Government Policies or payable in future under any newly
                  implemented Government Policy/ies in respect of the said Designated Storage Area.
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
                  <u>{data.shortbuyer}</u> hereby agrees to make the payments referred above regularly without any delay
                  and default and shall produce to Collateral Manager, after expiry of every 12 months, certified copies
                  of the receipts for the payments made during such period.
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
                  <u>{data.shortbuyer}</u> will pay any deposits due in respect of water and electricity charges as may
                  be required. <u>{data.shortbuyer}</u> 
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
                  <strong>Article 13 - {data?.shortbuyer}'s OBLIGATIONS</strong>
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
                      <u>{data.shortbuyer}</u> shall arrange to obtain no claim on inventory letters from all and any
                      party who has an interest in the Storage Facility/Designated Storage Area. Such letters shall
                      proclaim that the parties concerned recognize and agree that they do not have any ownership or
                      title rights to the Goods stored at the Designated Storage Area, and that they shall not bring any
                      claim to bear on the Goods, under the custody, control and supervision of Collateral Manager and
                      stored in the Designated Storage Area.
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
                      <u>{data.shortbuyer}</u> shall furnish written confirmation to Collateral Manager that there are
                      no circumstances of which he is aware that may give rise to a claim over the land, plot,
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
                      During the period of this Agreement, <u>{data.shortbuyer}</u> shall warrant that it will allow
                      Collateral Manager to have the custody, control and supervision of the Goods stored at the
                      Designated Storage Area without any interruption and obstruction.
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
                      <u>{data.shortbuyer}</u> further agrees that he shall not, for any reason whatsoever, prevent
                      Collateral Manager from entering or leaving the Designated Storage Area nor shall it at any time
                      prevent Collateral Manager from taking in, or delivering out, the Goods stored therein which shall
                      be done under the supervision of Collateral Manager at the written instance of the Financing Bank.
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
                      <u>{data.shortbuyer}</u> hereby waives all rights to the Goods stored under the custody of
                      Collateral Manager and shall not remove, transfer or otherwise attempt to gain control of the
                      Goods unless authorized in writing by Collateral Manager.
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
                      <u>{data.shortbuyer}</u> shall take the delivery of the Goods from Collateral Manager only upon
                      receipt [by Collateral Manager] of the Release Orders from the Financing Bank and then released by
                      Collateral Manager on instructions of <u>{data?.shortseller}.</u>
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
                      <u>{data.shortbuyer}</u> warrants that Collateral Manager shall enjoy complete and uninterrupted
                      custody of the Goods in the Designated Storage Area.
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
                  <strong>Article 14-WARRANTIES OF {data?.shortbuyer} </strong>
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
                  <u>{data.shortbuyer}</u> HEREBY WARRANTS AS FOLLOWS:
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
                  {/* <li>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                      }}
                    >
                      <u>{data.shortbuyer}</u> shall furnish written confirmation to Collateral Manager that there are
                      no circumstances of which he is aware that may give rise to a claim over the land, plot,
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
                      During the period of this Agreement, <u>{data.shortbuyer}</u> shall warrant that it will allow
                      Collateral Manager to have the custody, control and supervision of the Goods stored at the
                      Designated Storage Area without any interruption and obstruction.
                    </p>
                  </li> */}
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
                      obstruction from <u>{data.shortbuyer}</u> or any person claiming under it.
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
                  <strong>Article 15-INDEMNITY BY {data?.shortbuyer} </strong>
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
                  <u>{data.shortbuyer}</u> agrees to indemnify and keep indemnified, defend and hold harmless
                  Collateral Manager and
                  <u>{data.shortseller}</u>, its officers, directors, employees and agents from and against any and all
                  losses, liabilities, claims, obligations, costs, expenses arising during the duration of this
                  Agreement, which result from, arise in connection with or are related in any way to claims by third
                  parties or regulatory authorities, and which directly arise due to any reasons whatsoever and
                  including the following:<br/><br/><br/><br/><br/><br/>
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
                      <u>{data.shortbuyer}</u>'s breach of the terms of this Agreement or;
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
                      negligence, fault or misconduct by <u>{data.shortbuyer}</u> or its officers, employees, agents,
                      subcontractors and/or representatives and/or other persons authorized to act on its behalf;
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
                  The responsibility of <u>{data.shortbuyer}</u> to indemnify set forth in this Clause and the
                  obligations there under, shall survive the termination of this Tripartite Agreement for any reason
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
                        <ol
                          style={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#000000',
                            paddingLeft:'10px'
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
                                    Name - {val.name}
                                  </p>
                                  <p
                                    style={{
                                      fontSize: '12px',
                                      lineHeight: '18px',
                                      color: '#000000',
                                      marginBottom: '0',
                                    }}
                                  >
                                    Designation - {val.designation}
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
              <td valign="top" style={{ paddingTop: '20px' }}>
                <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                  <tr>
                    <td align="left">
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
                    <td align="left" style={{paddingTop:'20px'}}>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0'
                        }}
                      >
                        Signed by:_______________________________
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
                          marginBottom: '0'
                        }}
                      >
                        For and on behalf of <strong>“{data.shortbuyer}”</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style={{paddingTop:'20px'}}>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0'
                        }}
                      >
                        Signed by:_______________________________
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
                          marginBottom: '0'
                        }}
                      >
                        For and on behalf of <strong>“{data?.cmaShort}”</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style={{paddingTop:'20px'}}>
                      <p
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          marginBottom: '0'
                        }}
                      >
                        Signed by:_______________________________
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
                          marginBottom: '0'
                        }}
                      >
                        For and on behalf of <strong>“{data.shortseller}”</strong>
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
