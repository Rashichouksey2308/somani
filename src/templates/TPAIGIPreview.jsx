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
                <span
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    marginBottom: '0',
                    display:'inline-block'
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>FOR RECEIPT, STORAGE, CUSTODY AND ISSUE OF PLEDGED GOODS</strong> hereto by and between:
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  This Tripartite Agreement (<strong>“Agreement”</strong>) is made at the place and on the day as set
                  out in <strong>Schedule I </strong>hereto by and between:
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  {data.buyer}, a Company incorporated under the Companies Act, 1956, having its{' '}
                  registered office at{' '}
                  
                    {data.buyerAddress?.fullAddress},{data.buyerAddress?.city} {data.buyerAddress?.country},{' '}
                    {data.buyerAddress?.pinCode}
                  
                  through its Authorised Signatory (hereinafter referred as the “
                  <strong>
                    {data.shortbuyer}
                  </strong>{' '}
                  ”, which expression shall, unless excluded by or repugnant to the context be deemed to include its
                  legal heirs, successors and permitted assigns) of the First Part.)
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
                    paddingBottom:'16px',
                    display:'inline-block'
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  The Collateral Manager as detailed in Schedule I (hereinafter referred as the “
                  <strong>Collateral Manager</strong>”, which expression shall, unless excluded by or repugnant to the
                  context be deemed to include its legal heirs, successors and permitted assigns) of the Second Part.
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
                    paddingBottom:'16px',
                    display:'inline-block'
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  {data.seller} (hereinafter referred as the{' '}
                  <strong>
                    “{data?.shortseller}”
                    {data.sellerAddress?.fullAddress},
                    {data.sellerAddress?.city}{" "}
                    {data.sellerAddress?.country},{" "}
                    {data.sellerAddress?.pinCode}
                  </strong>
                  , which expression shall, unless excluded by or repugnant to the context be deemed to include its
                  legal heirs, successors and permitted assigns) of the Third Part.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>WHEREAS:</strong>
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  {data.shortbuyer}  is engaged in the business of trading of industrial commodities, which are
                  stored at the Designated Storage Area as detailed in Schedule-I.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  {data.shortbuyer} has purchased Commodity from the Supplier, that has been financed by the
                  “Financing Bank”. The details of the commodity purchased, Supplier and the Financing Bank are
                  mentioned in Schedule-I.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  Financing Bank has a first ranking security right over the Goods in the form of a pledge, and has
                  appointed Collateral Manager pursuant to the terms of the tripartite collateral management agreement
                  executed between
                  {data.shortseller}, Collateral Manager and Financing Bank as amended from time to time (the “
                  <strong>Collateral Management Agreement</strong>”) for the purpose of keeping the custody and control
                  of Goods.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  Pursuant to the Collateral Management Agreement, the Goods shall remain under the exclusive custody,
                  control and supervision of Collateral Manager and under the order of Financing Bank.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  {data.shortbuyer} hereby agrees that it shall grant unrestricted access to a clearly demarcated
                  part of the Storage Facility (as per stocking requirement) in ready-to-operate-condition exclusively
                  for the use of Collateral Manager where the pledged Goods shall only be stored (the “
                  <strong>Designated Storage Area</strong>”).
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  IT IS HEREBY AGREED AS FOLLOWS:
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>Article 1 - STORAGE FACILITY</strong>
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  {data.shortbuyer} hereby grants unrestricted access of the Designated Storage Area to
                  Collateral Manager, which is in a ready to store condition. The Plan duly marking the Designated
                  Storage Area is attached Schedule 1 to this Agreement. The Goods deposited in the Designated Storage
                  Area shall be accessed exclusively by Collateral Manager during the term of this Agreement.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>
                    Article- 2-RESPONSIBILITY OF {data.shortbuyer}
                  </strong>
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  {data.shortbuyer} shall:
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>2.1</span> prior to granting access to the Designated Storage Area, be
                  responsible for clearly demarcating the Designated Storage Area with chalk and rope from all sides for
                  clear demarcation and identification for the exclusive and sole access of Collateral Manager for
                  storing the Goods or any other materials as agreed in writing.
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>2.2</span> be responsible for prominently displaying on the board at the
                  entrance of the Designated Storage Area clearly stating that the Goods are under the custody of
                  Collateral Manager and held on behalf of {data?.shortseller};
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>2.3</span> be responsible for putting a Placard on each lot of Goods stored at
                  the Designated Storage Area clearly specifying the name of {data?.shortseller} as the owner of
                  the Goods and Collateral Manager as the Collateral Manager as custodian of the Goods;
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>2.4</span> be responsible for providing an office equipped with required
                  infrastructure such as electricity, toilet, telephone, access to fax, email etc. will have to be
                  provided free of cost to Collateral Manager and the running cost of these facilities will also be
                  borne by {data.shortbuyer}. Collateral Manager and their representatives shall have unfettered
                  access to the warehouse/stockyard;
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>2.5</span> be responsible for granting unrestricted and unfettered control and
                  access to Collateral Manager over the Designated Storage Area;
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>2.6</span> Obtain permission from Customs to open the Customs Notified Area
                  where the Designated Storage area is located for conducting audit/stock verification/stock assessment
                  as and when required by Collateral Manager or its authorised representatives by providing full
                  cooperation and without creating any hindrance or obstacle;
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>2.7</span> ensure that the Designated Storage Area where pledged Goods being
                  stored is suitable for the storage of the goods being stored therein; and
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>2.8</span> be responsible for payment of all taxes, duties and/or service
                  charges presently assessed on the Designated Storage Area, as at the date of signature thereof.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>Article-3 RESPONSIBILITY OF COLLATERAL MANAGER </strong>
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  Collateral Manager shall:
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>3.1</span> ensure that the Designated Storage Area is manned with adequate
                  surveyors round the clock at the Designated Storage Area. The fees for the surveyors shall be borne by
                  Collateral Manager;
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>3.2</span> ensure that all safety regulations or industrial regulations will be
                  adhered to at all point of time;
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>3.3</span> ensure that at least 3 staff and/or representatives of Collateral
                  Manager will attend the storage yard at all times during the Term of this Agreement;
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>3.4</span> ensure that it fulfills all its obligations as laid down in the
                  Collateral Management Agreement;
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>3.5</span> shall maintain proper records and registers for incoming and
                  outgoing of material; and
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>3.6</span> not assign his/its rights under this Agreement.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>Article 4 - TERM </strong>
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  This Agreement is made on the Effective Date and is entered into by 
                  
                    {data.shortseller}, {data.shortbuyer}
                  
                  and Collateral Manager for a period during which the Collateral Management Agreement, pursuant to
                  which Collateral Manager is providing the collateral management services (“
                  <strong>CMA Services</strong>”), is remains valid and in force.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>Article 5 - UTILISATION OF THE DESIGNATED STORAGE AREA </strong>
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>5.1</span> Collateral Manager will provide CMA Services at the Designated
                  Storage Area in accordance with the Collateral Management Agreement.
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>5.2</span> {data.shortbuyer} undertakes that the pledged Goods shall be
                  separately stocked at the Designated Storage Area under the custody and control of Collateral Manager
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>Article 6 - IRREVOCABLE AGREEMENT </strong>
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  This Agreement is irrevocable until the entire stock stored therein has been delivered to {data?.shortbuyer} under
                  the written authorised release orders received by Collateral Manager from the Financing Bank (“
                  <strong>Release Orders</strong>”).
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>Article 7 - INSURANCE</strong>
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>7.1</span> {data.shortbuyer} shall take out and maintain an all risks
                  cargo insurance policy in respect of the Goods which terms are acceptable to the respective Financing
                  Bank at its full discretion. The policy shall cover loss, strikes, riots, civil commotion, theft,
                  misappropriation and damage of the Goods during storage in the Designated Storage Area and while under
                  transport to and from the Designated Storage Area. The Insurance shall remain valid until the period
                  that the entire Goods at the Designated Storage Area have been released by Collateral Manager to{' '}
                  {data.shortbuyer}. The insurance policy shall name the Financing Bank as a beneficiary of
                  insurances and loss payee.
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
                    display:'table',
                    marginBottom:'16px'
                  }}
                >
                  <span style={{display:'table-cell', paddingRight:'10px'}}>7.2</span> Upon request {data.shortbuyer} 
                  will deliver to Collateral Manager and {data?.shortseller} a copy of the relevant insurance agreements, policies and
                  related documents together with evidence that the premiums have been paid.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>Article 8 - PROPERTY TAXES</strong>
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  {data.shortbuyer} shall be responsible for the payment of all Land and Building taxes as may
                  be applicable and that relate to the Designated Storage Area.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>Article 9 - ELECTRICITY AND WATER SUPPLY</strong>
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  During the period of this Agreement, {data.shortbuyer} shall be responsible for payment of all
                  charges with regard to water and electricity.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>Article 10 - CHARGES/DUTIES/TAXES</strong>
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  {data.shortbuyer} shall bear all duties, taxes, cesses, levies etc. payable under present
                  Indian State/Central Government/Semi Government Policies or payable in future under any newly
                  implemented Government Policy/ies in respect of the said Designated Storage Area.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  {data.shortbuyer} hereby agrees to make the payments referred above regularly without any delay
                  and default and shall produce to Collateral Manager, after expiry of every 12 months, certified copies
                  of the receipts for the payments made during such period.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>Article 11 - RENOVATIONS / ALTERATIONS</strong>
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  Collateral Manager will not make any renovations or alterations to the Designated Storage Area.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>Article 12 - DEPOSITS</strong>
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  {data.shortbuyer} will pay any deposits due in respect of water and electricity charges as may
                  be required. {data.shortbuyer} 
                  hereby indemnifies Collateral Manager against any consequences that may arise as a result of failure
                  to pay said deposits or any claims whatsoever with regards to any of the charges.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>Article 13 - {data?.shortbuyer}'s OBLIGATIONS</strong>
                </span>
                <ul
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
                        paddingBottom:'16px',
                        display:'inline-block'
                      }}
                    >
                      {data.shortbuyer} shall arrange to obtain no claim on inventory letters from all and any
                      party who has an interest in the Storage Facility/Designated Storage Area. Such letters shall
                      proclaim that the parties concerned recognize and agree that they do not have any ownership or
                      title rights to the Goods stored at the Designated Storage Area, and that they shall not bring any
                      claim to bear on the Goods, under the custody, control and supervision of Collateral Manager and
                      stored in the Designated Storage Area.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        paddingBottom:'16px',
                        display:'inline-block'
                      }}
                    >
                      {data.shortbuyer} shall furnish written confirmation to Collateral Manager that there are
                      no circumstances of which he is aware that may give rise to a claim over the land, plot,
                      Designated Storage Area or the Goods stored therein during the period of this Agreement.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        paddingBottom:'16px',
                        display:'inline-block'
                      }}
                    >
                      During the period of this Agreement, {data.shortbuyer} shall warrant that it will allow
                      Collateral Manager to have the custody, control and supervision of the Goods stored at the
                      Designated Storage Area without any interruption and obstruction.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        paddingBottom:'16px',
                        display:'inline-block'
                      }}
                    >
                      {data.shortbuyer} further agrees that he shall not, for any reason whatsoever, prevent
                      Collateral Manager from entering or leaving the Designated Storage Area nor shall it at any time
                      prevent Collateral Manager from taking in, or delivering out, the Goods stored therein which shall
                      be done under the supervision of Collateral Manager at the written instance of the Financing Bank.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        paddingBottom:'16px',
                        display:'inline-block'
                      }}
                    >
                      {data.shortbuyer} hereby waives all rights to the Goods stored under the custody of
                      Collateral Manager and shall not remove, transfer or otherwise attempt to gain control of the
                      Goods unless authorized in writing by Collateral Manager.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        paddingBottom:'16px',
                        display:'inline-block'
                      }}
                    >
                      {data.shortbuyer} shall take the delivery of the Goods from Collateral Manager only upon
                      receipt [by Collateral Manager] of the Release Orders from the Financing Bank and then released by
                      Collateral Manager on instructions of {data?.shortseller}.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        paddingBottom:'16px',
                        display:'inline-block'
                      }}
                    >
                      {data.shortbuyer} warrants that Collateral Manager shall enjoy complete and uninterrupted
                      custody of the Goods in the Designated Storage Area.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>Article 14-WARRANTIES OF {data?.shortbuyer} </strong>
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  {data.shortbuyer} HEREBY WARRANTS AS FOLLOWS:
                </span>
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
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        paddingBottom:'16px',
                        display:'inline-block'
                      }}
                    >
                      It has full right and absolute authority to provide the Designated Storage Area to Collateral
                      Manager for its exclusive use to enable Collateral Manager to carry out its obligations under the
                      Collateral Management Agreement.
                    </span>
                  </li>
                  {/* <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        paddingBottom:'16px',
                        display:'inline-block'
                      }}
                    >
                      {data.shortbuyer} shall furnish written confirmation to Collateral Manager that there are
                      no circumstances of which he is aware that may give rise to a claim over the land, plot,
                      Designated Storage Area or the Goods stored therein during the period of this Agreement.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        paddingBottom:'16px',
                        display:'inline-block'
                      }}
                    >
                      During the period of this Agreement, {data.shortbuyer} shall warrant that it will allow
                      Collateral Manager to have the custody, control and supervision of the Goods stored at the
                      Designated Storage Area without any interruption and obstruction.
                    </span>
                  </li> */}
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        paddingBottom:'16px',
                        display:'inline-block'
                      }}
                    >
                      Collateral Manager shall peacefully hold and enjoy unrestricted access of the Designated Storage
                      Area during the term or duration of this Agreement, without disturbance or interruption or
                      obstruction from {data.shortbuyer} or any person claiming under it.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong>Article 15-INDEMNITY BY {data?.shortbuyer} </strong>
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  {data.shortbuyer} agrees to indemnify and keep indemnified, defend and hold harmless
                  Collateral Manager and
                  {data.shortseller}, its officers, directors, employees and agents from and against any and all
                  losses, liabilities, claims, obligations, costs, expenses arising during the duration of this
                  Agreement, which result from, arise in connection with or are related in any way to claims by third
                  parties or regulatory authorities, and which directly arise due to any reasons whatsoever and
                  including the following:
                </span>
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
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        paddingBottom:'16px',
                        display:'inline-block'
                      }}
                    >
                      {data.shortbuyer}'s breach of the terms of this Agreement or;
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#000000',
                        paddingBottom:'16px',
                        display:'inline-block'
                      }}
                    >
                      negligence, fault or misconduct by {data.shortbuyer} or its officers, employees, agents,
                      subcontractors and/or representatives and/or other persons authorized to act on its behalf;
                    </span>
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td align="justify">
                <span
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#000000',
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}Signed b
                >
                  <strong>Article 16- SURVIVAL OF INDEMNITY </strong>
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  The responsibility of {data.shortbuyer} to indemnify set forth in this Clause and the
                  obligations there under, shall survive the termination of this Tripartite Agreement for any reason
                  whatsoever with regard to any indemnity claims arising out of or in relation to the performance
                  hereof.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  <strong> Article 17- GOVERNING LAW AND ARBITRATION</strong>
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  Any disputes or differences in respect of any matter relating to or arising out of this Quadripartite
                  Agreement between the parties hereto shall be settled mutually and if the same is not resolved
                  amicably, then the same will be settled by Arbitration by a Sole Arbitrator in accordance with Rules
                  of Arbitration formulated by Indian Council of Arbitration (ICA). The Award made in pursuance thereof
                  shall be binding on the parties. The seat and venue of the Arbitration will be New Delhi and the
                  language of Arbitration Proceedings shall be in English.
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
                    paddingBottom:'16px',
                    display:'inline-block'
                  }}
                >
                  IN WITNESS WHEREOF the parties hereto caused this Agreement to be executed by their duly authorized
                  representatives on the date first written above.
                </span>
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
                    paddingBottom:'20px',
                    display:'inline-block'
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
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'inline-block'
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
                          display:'inline-block'
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
                          display:'inline-block'
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
                          display:'inline-block'
                        }}
                      >
                        {' '}
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
                          display:'inline-block'
                        }}
                      >
                        Name of Collateral Manager
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
                          display:'inline-block'
                        }}
                      >
                        {' '}
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
                          display:'inline-block'
                        }}
                      >
                        Address of Collateral Manager
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
                          display:'inline-block'
                        }}
                      >
                        {data.cmaAddress?.fullAddress},{data.cmaAddress?.city} {data.cmaAddress?.country},{' '}
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
                          display:'inline-block'
                        }}
                      >
                        Authorized signatory of Collateral Manager
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
                          display:'inline-block'
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
                                  <span
                                    style={{
                                      fontSize: '12px',
                                      lineHeight: '18px',
                                      color: '#000000',
                                      display:'inline-block'
                                    }}
                                  >
                                    Name - {val.name}
                                  </span><br/>
                                  <span
                                    style={{
                                      fontSize: '12px',
                                      lineHeight: '18px',
                                      color: '#000000',
                                      display:'inline-block'
                                    }}
                                  >
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
                          display:'inline-block'
                        }}
                      >
                        Designated Storage Area
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
                          display:'inline-block'
                        }}
                      >
                        {data.designatedStorageArea}, India
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
                          display:'inline-block'
                        }}
                      >
                        Details of Commodity
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
                          display:'inline-block'
                        }}
                      >
                        {' '}
                        {data?.detailsOfComm}
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
                          display:'inline-block'
                        }}
                      >
                        Quantity of Goods
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
                          display:'inline-block'
                        }}
                      >
                        {' '}
                        {data?.quan?.toLocaleString('en-In', {
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
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'inline-block'
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
                          display:'inline-block'
                        }}
                      >
                        {' '}
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
                          display:'inline-block'
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
                          display:'inline-block'
                        }}
                      >
                        {data.supplierAddress?.fullAddress},{data.supplierAddress?.city} {data.supplierAddress?.country}
                        , {data.supplierAddress?.pinCode}
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
                          display:'inline-block'
                        }}
                      >
                        Financing Bank Name
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
                          display:'inline-block'
                        }}
                      >
                        {data.financialBank}
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
                          display:'inline-block'
                        }}
                      >
                        Financing Bank Address
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
                          display:'inline-block'
                        }}
                      >
                        {' '}
                        {data.financialAddress}
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td valign="top" style={{ paddingTop: '30px' }}>
                <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                  <tr>
                    <td align="left">
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'inline-block',
                          paddingBottom: '16px'
                        }}
                      >
                        <strong>SIGNATURE PAGE</strong>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style={{paddingTop:'20px'}}>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'inline-block'
                        }}
                      >
                        Signed by:_______________________________
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td align="left">
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'inline-block',
                        }}
                      >
                        For and on behalf of <span style={{fontWeight:'bold'}}>“{data.shortbuyer}”</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style={{paddingTop:'30px'}}>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'inline-block',
                        }}
                      >
                        Signed by:_______________________________
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td align="left">
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'inline-block',
                        }}
                      >
                        For and on behalf of <span style={{fontWeight:'bold'}}>“{data?.cmaShort}”</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style={{paddingTop:'30px'}}>
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'inline-block',
                        }}
                      >
                        Signed by:_______________________________
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td align="left">
                      <span
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          color: '#000000',
                          display:'inline-block',
                        }}
                      >
                        For and on behalf of <span style={{fontWeight:'bold'}}>“{data.shortseller}”</span>
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
