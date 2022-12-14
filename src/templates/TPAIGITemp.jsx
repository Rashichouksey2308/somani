import styles from '@/components/TPAIGI/index.module.scss';
import { Col, Row } from 'react-bootstrap';

export default function TPAIGITemp(data) {
  return (
    <>
      <div className={`${styles.cardBody} card-body pt-3`}>

        <p className="text-center text_sales">
          {' '}
          <strong>TRIPARTITE AGREEMENT</strong>
        </p>
        <p className="text-center text_sales">
          {' '}
          <strong>FOR RECEIPT, STORAGE, CUSTODY AND ISSUE OF PLEDGED GOODS </strong>
        </p>
        <p className="text_sales">
          {' '}
          This Tripartite Agreement (<strong>“Agreement”</strong>) is made at the place and on the day as set out in{' '}
          <strong>Schedule I </strong>hereto by and between:
        </p>
        <p className="text_sales">
          {' '}
          <span className='text-capitalize'>{data.buyer}</span>, a Company incorporated under the Companies Act,
          1956, having its registered office at {" "}
            {data.buyerAddress?.fullAddress},
            {data.buyerAddress?.city}{" "}
            {data.buyerAddress?.country},{" "}
            {data.buyerAddress?.pinCode}
          {' '}
          through its Authorised Signatory (hereinafter referred as the “
          <strong>{data.shortbuyer}</strong> ”, which expression shall, unless excluded by
          or repugnant to the context be deemed to include its legal heirs,
          successors and permitted assigns) of the First Part.)
        </p>
        <p className="text-center text_sales">And</p>
        <p className="text_sales">
          The Collateral Manager as detailed in Schedule I (hereinafter referred as the “
          <strong>Collateral Manager</strong>”, which expression shall, unless excluded by or repugnant to the context be
          deemed to include its legal heirs, successors and permitted assigns) of the Second Part.
        </p>
        <p className="text-center text_sales">And</p>
        <p className="text_sales">
          {data.seller}  
           {data.sellerAddress?.fullAddress},
            {data.sellerAddress?.city}{" "}
            {data.sellerAddress?.country},{" "}
            {data.sellerAddress?.pinCode}(hereinafter referred as the <strong>“{data?.shortseller}”</strong>, which expression shall, unless
          excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns)
          of the Third Part.
        </p>
        <p className=" text_sales">
          <strong>WHEREAS</strong>
        </p>
        <p className="text_sales">
          {data.shortbuyer} is engaged in the business of trading of industrial commodities, which are stored at
          the Designated Storage Area as detailed in Schedule-I.
        </p>
        <p className="text_sales">
          {data.shortbuyer} has purchased Commodity from the Supplier, that has been financed by the “Financing
          Bank”. The details of the commodity purchased, Supplier and the Financing Bank are mentioned in Schedule-I.
        </p>
        <p className="text_sales">
          Financing Bank has a first ranking security right over the Goods in the form of a pledge, and has appointed
          Collateral Manager pursuant to the terms of the tripartite collateral management agreement executed between{' '}
          {data.shortseller}, Collateral Manager and Financing Bank as amended from time to time (the “
          <strong>Collateral Management Agreement</strong>”) for the purpose of keeping the custody and control of Goods.
        </p>
        <p className="text_sales">
          Pursuant to the Collateral Management Agreement, the Goods shall remain under the exclusive custody, control and
          supervision of Collateral Manager and under the order of Financing Bank.
        </p>
        <p className="text_sales">
          {data.shortbuyer} hereby agrees that it shall grant unrestricted access to a clearly demarcated part of
          the Storage Facility (as per stocking requirement) in ready-to-operate-condition exclusively for the use of
          Collateral Manager where the pledged Goods shall only be stored (the “<strong>Designated Storage Area</strong>
          ”).
        </p>
        <p className=" text_sales">IT IS HEREBY AGREED AS FOLLOWS:</p>
        <p className=" text_sales">
          <strong>Article 1 - STORAGE FACILITY</strong>
        </p>
        <p className=" text_sales">
          {data.shortbuyer} hereby grants unrestricted access of the Designated Storage Area to Collateral Manager,
          which is in a ready to store condition. The Plan duly marking the Designated Storage Area is attached Schedule 1
          to this Agreement. The Goods deposited in the Designated Storage Area shall be accessed exclusively by
          Collateral Manager during the term of this Agreement.{' '}
        </p>
        <p className=" text_sales">
          <strong>
            Article- 2-RESPONSIBILITY OF {data.shortbuyer}{' '}
          </strong>
        </p>
        <p className=" text_sales">
          {data.shortbuyer} shall:
        </p>

        <p className=" text_sales">
          <span className="mr-6">2.1</span> prior to granting access to the Designated Storage Area, be responsible for
          clearly demarcating the Designated Storage Area with chalk and rope from all sides for clear demarcation and
          identification for the exclusive and sole access of Collateral Manager for storing the Goods or any other
          materials as agreed in writing.
        </p>
        <p className=" text_sales">
          <span className="mr-6">2.2</span> be responsible for prominently displaying on the board at the entrance of the
          Designated Storage Area clearly stating that the Goods are under the custody of Collateral Manager and held on
          behalf of {data?.shortseller};
        </p>
        <p className=" text_sales">
          <span className="mr-6">2.3</span> be responsible for putting a Placard on each lot of Goods stored at the
          Designated Storage Area clearly specifying the name of {data?.shortseller} as the owner of the Goods and
          Collateral Manager as the Collateral Manager as custodian of the Goods;{' '}
        </p>
        <p className=" text_sales">
          <span className="mr-6">2.4</span> be responsible for providing an office equipped with required infrastructure
          such as electricity, toilet, telephone, access to fax, email etc. will have to be provided free of cost to
          Collateral Manager and the running cost of these facilities will also be borne by {data.shortbuyer}.
          Collateral Manager and their representatives shall have unfettered access to the warehouse/stockyard;{' '}
        </p>
        <p className=" text_sales">
          <span className="mr-6">2.5</span> be responsible for granting unrestricted and unfettered control and access to
          Collateral Manager over the Designated Storage Area;
        </p>
        <p className=" text_sales">
          <span className="mr-6">2.6</span> Obtain permission from Customs to open the Customs Notified Area where the
          Designated Storage area is located for conducting audit/stock verification/stock assessment as and when required
          by Collateral Manager or its authorised representatives by providing full cooperation and without creating any
          hindrance or obstacle;
        </p>
        <p className=" text_sales">
          <span className="mr-6">2.7</span> ensure that the Designated Storage Area where pledged Goods being stored is
          suitable for the storage of the goods being stored therein; and
        </p>
        <p className=" text_sales">
          <span className="mr-6">2.8</span> be responsible for payment of all taxes, duties and/or service charges
          presently assessed on the Designated Storage Area, as at the date of signature thereof.
        </p>

        <p className=" text_sales">
          <strong>Article-3 RESPONSIBILITY OF COLLATERAL MANAGER </strong>
        </p>
        <p className=" text_sales">Collateral Manager shall:</p>
        <p className=" text_sales">
          <span className="mr-6">3.1</span> ensure that the Designated Storage Area is manned with adequate surveyors
          round the clock at the Designated Storage Area. The fees for the surveyors shall be borne by Collateral Manager;{' '}
        </p>
        <p className=" text_sales">
          <span className="mr-6">3.2</span> ensure that all safety regulations or industrial regulations will be adhered
          to at all point of time;{' '}
        </p>
        <p className=" text_sales">
          <span className="mr-6">3.3</span> ensure that at least 3 staff and/or representatives of Collateral Manager will
          attend the storage yard at all times during the Term of this Agreement;
        </p>
        <p className=" text_sales">
          <span className="mr-6">3.4</span> ensure that it fulfills all its obligations as laid down in the Collateral
          Management Agreement;{' '}
        </p>
        <p className=" text_sales">
          <span className="mr-6">3.5</span> shall maintain proper records and registers for incoming and outgoing of
          material; and
        </p>
        <p className=" text_sales">
          <span className="mr-6">3.6</span> not assign his/its rights under this Agreement.
        </p>

        <p className=" text_sales">
          <strong>Article 4 - TERM </strong>
        </p>
        <p className=" text_sales">
          This Agreement is made on the Effective Date and is entered into by {' '}
          
            {data.shortseller}, {data.shortbuyer}
          {' '}
          and Collateral Manager for a period during which the Collateral Management Agreement, pursuant to which
          Collateral Manager is providing the collateral management services (“<strong>CMA Services</strong>”), is remains
          valid and in force.{' '}
        </p>

        <p className=" text_sales">
          <strong>Article 5 - UTILISATION OF THE DESIGNATED STORAGE AREA </strong>
        </p>

        <p className=" text_sales">
          <span className="mr-6">5.1</span> Collateral Manager will provide CMA Services at the Designated Storage Area in
          accordance with the Collateral Management Agreement.
        </p>
        <p className=" text_sales">
          <span className="mr-6">5.2</span> {data.shortbuyer} undertakes that the pledged Goods shall be separately
          stocked at the Designated Storage Area under the custody and control of Collateral Manager{' '}
        </p>

        <p className=" text_sales">
          <strong>Article 6 - IRREVOCABLE AGREEMENT </strong>
        </p>
        <p className=" text_sales">
          This Agreement is irrevocable until the entire stock stored therein has been delivered to {data?.shortbuyer} under the written
          authorised release orders received by Collateral Manager from the Financing Bank (“
          <strong>Release Orders</strong>”).
        </p>

        <p className=" text_sales">
          <strong>Article 7 - INSURANCE</strong>
        </p>

        <p className=" text_sales">
          <span className="mr-6">7.1</span> {data.shortbuyer} shall take out and maintain an all risks cargo
          insurance policy in respect of the Goods which terms are acceptable to the respective Financing Bank at its full
          discretion. The policy shall cover loss, strikes, riots, civil commotion, theft, misappropriation and damage of
          the Goods during storage in the Designated Storage Area and while under transport to and from the Designated
          Storage Area. The Insurance shall remain valid until the period that the entire Goods at the Designated Storage
          Area have been released by Collateral Manager to {data.shortbuyer}. The insurance policy shall name the
          Financing Bank as a beneficiary of insurances and loss payee.
        </p>
        <p className=" text_sales">
          <span className="mr-6">7.2</span> Upon request {data.shortbuyer} will deliver to Collateral Manager and {" "}
          {data?.shortseller} a copy of the relevant insurance agreements, policies and related documents together with evidence that the
          premiums have been paid.
        </p>

        <p className=" text_sales">
          <strong>Article 8 - PROPERTY TAXES</strong>
        </p>
        <p className=" text_sales">
          {data.shortbuyer} shall be responsible for the payment of all Land and Building taxes as may be
          applicable and that relate to the Designated Storage Area.
        </p>

        <p className=" text_sales">
          <strong>Article 9 - ELECTRICITY AND WATER SUPPLY</strong>
        </p>
        <p className=" text_sales">
          During the period of this Agreement, {data.shortbuyer} shall be responsible for payment of all charges
          with regard to water and electricity.
        </p>
        <p className=" text_sales">
          <strong>Article 10 - CHARGES/DUTIES/TAXES</strong>
        </p>
        <p className=" text_sales">
          {data.shortbuyer} shall bear all duties, taxes, cesses, levies etc. payable under present Indian
          State/Central Government/Semi Government Policies or payable in future under any newly implemented Government
          Policy/ies in respect of the said Designated Storage Area.
        </p>
        <p className=" text_sales">
          {data.shortbuyer} hereby agrees to make the payments referred above regularly without any delay and
          default and shall produce to Collateral Manager, after expiry of every 12 months, certified copies of the
          receipts for the payments made during such period.
        </p>

        <p className=" text_sales">
          <strong>Article 11 - RENOVATIONS / ALTERATIONS</strong>
        </p>
        <p className=" text_sales">
          Collateral Manager will not make any renovations or alterations to the Designated Storage Area.
        </p>

        <p className=" text_sales">
          <strong>Article 12 - DEPOSITS</strong>
        </p>
        <p className=" text_sales">
          {data.shortbuyer} will pay any deposits due in respect of water and electricity charges as may be
          required. {data.shortbuyer} hereby indemnifies Collateral Manager against any consequences that may
          arise as a result of failure to pay said deposits or any claims whatsoever with regards to any of the charges.
        </p>

        <p className=" text_sales">
          <strong>Article 13 - {data?.shortbuyer}'s OBLIGATIONS</strong>
        </p>
        <ul className="pl-4">
          <li>
            <p className=" text_sales">
              {data.shortbuyer} shall arrange to obtain no claim on inventory letters from all and any party who
              has an interest in the Storage Facility/Designated Storage Area. Such letters shall proclaim that the
              parties concerned recognize and agree that they do not have any ownership or title rights to the Goods
              stored at the Designated Storage Area, and that they shall not bring any claim to bear on the Goods, under
              the custody, control and supervision of Collateral Manager and stored in the Designated Storage Area.{' '}
            </p>
          </li>
          <li>
            <p className=" text_sales">
              {data.shortbuyer} shall furnish written confirmation to Collateral Manager that there are no
              circumstances of which he is aware that may give rise to a claim over the land, plot, Designated Storage
              Area or the Goods stored therein during the period of this Agreement.
            </p>
          </li>
          <li>
            <p className=" text_sales">
              During the period of this Agreement, {data.shortbuyer} shall warrant that it will allow Collateral
              Manager to have the custody, control and supervision of the Goods stored at the Designated Storage Area
              without any interruption and obstruction.
            </p>
          </li>
          <li>
            <p className=" text_sales">
              {data.shortbuyer} further agrees that he shall not, for any reason whatsoever, prevent Collateral
              Manager from entering or leaving the Designated Storage Area nor shall it at any time prevent Collateral
              Manager from taking in, or delivering out, the Goods stored therein which shall be done under the
              supervision of Collateral Manager at the written instance of the Financing Bank.
            </p>
          </li>
          <li>
            <p className=" text_sales">
              {data.shortbuyer} hereby waives all rights to the Goods stored under the custody of Collateral
              Manager and shall not remove, transfer or otherwise attempt to gain control of the Goods unless authorized
              in writing by Collateral Manager .
            </p>
          </li>
          <li>
            <p className=" text_sales">
              {data.shortbuyer} shall take the delivery of the Goods from Collateral Manager only upon receipt [by
              Collateral Manager] of the Release Orders from the Financing Bank and then released by Collateral Manager on
              instructions of {data?.shortseller}.
            </p>
          </li>
          <li>
            <p className=" text_sales">
              {data.shortbuyer} warrants that Collateral Manager shall enjoy complete and uninterrupted custody of
              the Goods in the Designated Storage Area.
            </p>
          </li>
        </ul>

        <p className=" text_sales">
          <strong>Article 14-WARRANTIES OF {data?.shortbuyer} </strong>
        </p>
        <p className=" text_sales">
          {data.shortbuyer} HEREBY WARRANTS AS FOLLOWS:
        </p>
        <ul className="pl-4">
          <li>
            <p className=" text_sales">
              It has full right and absolute authority to provide the Designated Storage Area to Collateral Manager for
              its exclusive use to enable Collateral Manager to carry out its obligations under the Collateral Management
              Agreement.
            </p>
          </li>
          {/* <li>
            <p className=" text_sales">
              {data.shortbuyer}shall furnish written confirmation to Collateral Manager that there are no
              circumstances of which he is aware that may give rise to a claim over the land, plot, Designated Storage
              Area or the Goods stored therein during the period of this Agreement.
            </p>
          </li>
          <li>
            <p className=" text_sales">
              During the period of this Agreement, {data.shortbuyer} shall warrant that it will allow Collateral
              Manager to have the custody, control and supervision of the Goods stored at the Designated Storage Area
              without any interruption and obstruction.
            </p>
          </li> */}
          <li>
            <p className=" text_sales">
              Collateral Manager shall peacefully hold and enjoy unrestricted access of the Designated Storage Area during
              the term or duration of this Agreement, without disturbance or interruption or obstruction from{' '}
              {data.shortbuyer} or any person claiming under it.
            </p>
          </li>
        </ul>

        <p className=" text_sales">
          <strong>Article 15-INDEMNITY BY {data?.shortbuyer} </strong>
        </p>
        <p className=" text_sales">
          {data.shortbuyer} agrees to indemnify and keep indemnified, defend and hold harmless Collateral Manager
          and {data.shortseller}, its officers, directors, employees and agents from and against any and all
          losses, liabilities, claims, obligations, costs, expenses arising during the duration of this Agreement, which
          result from, arise in connection with or are related in any way to claims by third parties or regulatory
          authorities, and which directly arise due to any reasons whatsoever and including the following:
        </p>
        <ol type="i" className="pl-4">
          <li>
            <p className=" text_sales">
              {data.shortbuyer}'s breach of the terms of this Agreement or;
            </p>
          </li>
          <li>
            <p className=" text_sales">
              negligence, fault or misconduct by {data.shortbuyer} or its officers, employees, agents,
              subcontractors and/or representatives and/or other persons authorized to act on its behalf;
            </p>
          </li>
        </ol>
        <p className=" text_sales">
          <strong>Article 16-SURVIVAL OF INDEMNITY </strong>
        </p>
        <p className=" text_sales">
          The responsibility of {data.shortbuyer} to indemnify set forth in this Clause and the obligations there
          under, shall survive the termination of this Tripartite Agreement for any reason whatsoever with regard to any
          indemnity claims arising out of or in relation to the performance hereof.
        </p>
        <p className=" text_sales">
          <strong> Article 17- GOVERNING LAW AND ARBITRATION</strong>
        </p>
        <p className=" text_sales">
          {' '}
          Any disputes or differences in respect of any matter relating to or arising out of this Quadripartite Agreement
          between the parties hereto shall be settled mutually and if the same is not resolved amicably, then the same
          will be settled by Arbitration by a Sole Arbitrator in accordance with Rules of Arbitration formulated by Indian
          Council of Arbitration (ICA). The Award made in pursuance thereof shall be binding on the parties. The seat and
          venue of the Arbitration will be New Delhi and the language of Arbitration Proceedings shall be in English.
        </p>
        <p className=" text_sales">
          {' '}
          IN WITNESS WHEREOF the parties hereto caused this Agreement to be executed by their duly authorized
          representatives on the date first written above.
        </p>

        <p className="text-center text_sales">
          {' '}
          <strong>Schedule I</strong>
        </p>
        <div className={`${styles.inputsContainer} border_black`}>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Date of execution
            </Col>
            <Col md={7} className={styles.right}>
              {data.dateOfExecution}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Place of execution
            </Col>
            <Col md={7} className={styles.right}>
              {data.placeOfExecution}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of Collateral Manager
            </Col>
            <Col md={7} className={styles.right}>
              {data.cma}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Collateral Manager
            </Col>
            <Col md={7} className={styles.right}>
              {data.cmaAddress?.fullAddress},
              {data.cmaAddress?.city}{" "}
              {data.cmaAddress?.country},{" "}

              {data.cmaAddress?.pinCode}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Authorized Signatory of Collateral Manager
            </Col>
            <Col md={7} className={styles.right}>
              <ol>
                {data?.cmaAuthorized?.length > 0 &&
                  data?.cmaAuthorized?.map((val, index) => {
                    return (
                      <li key={index}>
                        <p className='mb-0'>
                          Name - {val.name}
                        </p>
                        <p className='mb-0'>
                          Designation - {val.designation}
                        </p>
                      </li>
                    );
                  })}
              </ol>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Designated Storage Area
            </Col>
            <Col md={7} className={styles.right}>
              {data.designatedStorageArea}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Details of Commodity
            </Col>
            <Col md={7} className={styles.right}>
              {data?.detailsOfComm}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Quantity of Goods
            </Col>
            <Col md={7} className={styles.right}>
              {data?.quan?.toLocaleString('en-In', { maximumFractionDigits: 2 })} {data?.unitOfQuantity?.toUpperCase()}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              {data.supplier}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              {data.supplierAddress?.fullAddress},
              {data.supplierAddress?.city}{" "}
              {data.supplierAddress?.country},{" "}

              {data.supplierAddress?.pinCode}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Financing Bank Name
            </Col>
            <Col md={7} className={styles.right}>
              {data.financialBank}
            </Col>
          </Row>
          <Row className={`${styles.row} ${styles.last}`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Financing Bank Address
            </Col>
            <Col md={7} className={styles.right}>
              {data.financialAddress}
            </Col>
          </Row>
        </div>

        <p className="text_sales">
          {' '}
          <strong>SIGNATURE PAGE</strong>
        </p>
        <div className={`row`}>
          <Col md={12} className='my-3'>
            <p className="text_sales text-left mb-0">Signed by:_______________________________</p>
            <p className="text_sales text-left mb-2">For and on behalf of "<strong>{data.shortbuyer}</strong>"</p>
          </Col>
          <Col md={12} className='my-3'>
            <p className="text_sales text-left mb-0">Signed by:_______________________________</p>
            <p className="text_sales text-left mb-2">For and on behalf of "<strong>{data.cmaShort}</strong>"</p>
          </Col>
          <Col md={12} className='my-3'>
            <p className="text_sales text-left mb-0">Signed by:_______________________________</p>
            <p className="text_sales text-left mb-2">For and on behalf of "<strong>{data.shortseller}</strong>"</p>
          </Col>
        </div>
      </div>
    </>
  );
}
