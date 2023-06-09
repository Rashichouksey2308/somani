import styles from '@/components/QPA/index.module.scss';
import { Col, Row } from 'react-bootstrap';

export default function QuadripartiteAgreement(data) {
  return (
    <div className={`${styles.cardBody} card-body pt-3`}>     
      <p className="text-center text_sales">
        <strong>Quadripartite Agreement</strong>
      </p>
      <p className="text_sales">
        This Quadripartite Agreement (<strong>“Agreement”</strong>) is made at the place and on the day as set out in <strong>Schedule I</strong> hereto by and between:
      </p>
      <p className="text_sales">
        <strong className='text-capitalize'>{data.buyer}</strong>, (CIN : {data.cin}) a company incorporated under the Companies Act, 1956, having its registered office at <strong>{data.buyerAddress?.fullAddress}, {data.buyerAddress?.city}, {data.buyerAddress?.country}, {data.buyerAddress?.pinCode}</strong> through its Authorised Signatory (hereinafter called <strong>{data.shortbuyer}</strong>, which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the First Part,
      </p>
      <p className="text-center text_sales">And</p>
      <p className="text_sales">
        <strong>Associate Buyer</strong>, as detailed in <strong>Schedule I</strong> hereof (hereinafter referred to as the “<strong>Associate Buyer</strong>”, which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the Second Part.
      </p>
      <p className="text-center text_sales">And</p>

      <p className="text_sales">
        <strong>Stevedore</strong>(s), as detailed in <strong>Schedule I</strong> hereof (hereinafter referred to as the “<strong>CHA/Stevedore</strong>”, which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the Third Part.
      </p>
      <p className="text-center text_sales">And</p>
      <p className="text_sales">
        <strong>CMA Agent</strong> (s), as detailed in <strong>Schedule I</strong> hereof (hereinafter referred to as the “<strong>CMA Agent</strong>”, which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the Fourth Part.
      </p>
      <p className="text_sales">
        WHEREAS {data.shortbuyer} has agreed to import Goods as detailed in <strong>Schedule I </strong>hereof on stock and sale basis as per Associateship Agreement entered into between {data.shortbuyer} and the Associate Buyer.
      </p>
      <p className="text_sales">
        WHEREAS {data.shortbuyer}&nbsp;has appointed the Stevedore for handling the vessel as detailed in <strong>Schedule I</strong> at Discharge Port. The complete details of vessel, Discharge port and the plot allotted to {data.shortbuyer} are mentioned at Schedule I.
      </p>

      <p className="text_sales">
      WHEREAS the, LC opening Bank has a first ranking security right over the Goods and it has appointed the CMA Agent in accordance with the terms of the Collateral Management Agreement executed by Financing Bank.
      </p>
      <p className="text_sales">IT IS NOW HEREBY AGREED BY AND BETWEEN THE PARTIES AS UNDER: -</p>
      <ol type="1" className="pl-4">
        <li>
          <p className="text_sales">
            The Goods shall be stored at the Plot allotted to {data.shortbuyer} by the Discharge Port authorities and shall be kept under the control and custody of CHA/Stevedore on behalf of {data.shortbuyer}. All dispatches from the plot shall be done by CHA/Stevedore solely on the basis of Written Delivery Orders issued by {data.shortbuyer}.
          </p>
        </li>
        <li>
          <p className="text_sales mb-0"> Scope of Work of CHA/Stevedore: </p>
          <p className="text_sales"> The Scope of work of CHA/Stevedore shall include but not be limited to: </p>
          <p className="text_sales mb-0">
            a) arranging plot allotment in the name of {data.shortbuyer} from the discharge Port authorities to
            store {data.shortbuyer}'s cargo,
          </p>
          <p className="text_sales mb-0">b) discharge of cargo from the Vessel,</p>
          <p className="text_sales mb-0">c) loading of wharf, intra carting at Port,</p>
          <p className="text_sales mb-0">d) deployment of labors and equipments,</p>
          <p className="text_sales mb-0">
            e) transportation from wharf to {data.shortbuyer} allotted plot, ensure that the plot where goods
            are being stored is suitable for the storage of the goods,
          </p>
          <p className="text_sales mb-0">f) segregated stacking cargo at plot grade wise,</p>
          <p className="text_sales mb-0">g) placement of wagon indents, wagon cleaning, wooden plugging,</p>
          <p className="text_sales mb-0">
            h) loading into wagons/trucks, leveling of cargo, lime marking on stacks and wagons, placing Railway Indents, Loading on wagons/trucks,
          </p>
          <p className="text_sales mb-0">i) Arranging round the clock security cover at the storage area, </p>
          <p className="text_sales mb-0">j) liaison with Discharge Port authorities,</p>
          <p className="text_sales mb-0">
            k) obtaining RRs and arranging dispatches as per Written release orders issued by {data.shortbuyer},
          </p>
          <p className="text_sales mb-0">l) obtaining gate passes,
          </p>
          <p className="text_sales mb-0">m) yard management, </p>
          <p className="text_sales mb-0">
            n) maintenance of proper records and registers for incoming and outgoing of material,
          </p>
          <p className="text_sales">
            o) water sprinkling as per PCB norms and other services as may be required by {data.shortbuyer},
          </p>
        </li>
        <li>
          <p className="text_sales">
            Safekeeping and Security of the Goods-Proper safekeeping and security of Goods shall be the joint and several responsibilities of the Associate Buyer and Stevedore. The Associate Buyer and Stevedore shall provide round the clock security guards at the Storage Plot allotted at Discharge Port, where Goods shall be stored. {data.shortbuyer} shall in no way be responsible or liable for any loss or damage to the Goods for any reason whatsoever including shortage, theft or mix up.
          </p>
        </li>
        <li>
          <p className="text_sales">
            Bill of Entry to be filed in the name {data.shortbuyer}. Payment of customs duty, IGST, energy cess, Wharfage, CIMS and all other statutory charges shall be paid by the Associate Buyer to {data.shortbuyer} in advance at the time of Custom Clearance. The Associate Buyer shall pay Port Charges directly to port or through the Stevedore who will take care of the payments to Port and raise bills on {data?.shortbuyer} for this. A copy of the same has to be furnished to {data?.shortbuyer}. Any penalty/demurrage on account of delayed payment shall be solely to the account of the Associate Buyer.
          </p>
        </li>
        <li>
          <p className="text_sales">
            Port wharfage, pollution charges, plot rental, wagon haulage and terminal charges, Port Royalty (if applicable) are to be paid by the Associate Buyer in advance to {data.shortbuyer} as per the Discharge Port. HMC crane charges at the Discharge Port and any pre berthing delays/detentions/demurrages will be to the account of the Associate Buyer on actual basis.
          </p>
        </li>
        <li>
          <p className="text_sales">
            CHA/Stevedore will raise invoice on the Associate Buyer and payments shall be made by the Associate Buyer to Stevedore based on the agreed rate terms & Conditions.
          </p>
        </li>
        <li>
          <p className="text_sales">
            CHA/Stevedore will apply for EDRM permission and place an indent online. The Associate Buyer will pay the railway freight and related charges directly.
          </p>
        </li>
        <li>
          <p className="text_sales">
            Scanned copy of RR shall be furnished by Stevedore to {data.shortbuyer} as well as to Associate Buyer as soon as it is issued after loading. The original RR shall be sent by Stevedore to the Associate Buyer for taking delivery of the rake. The final reconciliation shall be done based on the BL quantity.
          </p>
        </li>
        <li>
          <p className="text_sales">
            The Associate Buyer will arrange comprehensive storage insurance against all risks for <strong>110%</strong> of the value of goods. The insurance policy will indicate {data.shortbuyer} or its nominated Bank (as per {data.shortbuyer}'s discretion), as sole beneficiary. The Associate Buyer shall inform Stevedore the details of the goods for which {data.shortbuyer}/{data?.shortbuyer}'s nominated Bank shall be the beneficiary for the entire insured value of such pledged goods as per the B/L, quantity kept in the custody of CHA/Stevedore. In case of any claim on insurance company the same shall be claimed and pursued till realization by the Associate Buyer at its sole cost and the Associate Buyer shall indemnify Stevedore and {data?.shortbuyer} against all risks.
          </p>
        </li>
        <li>
          <p className="text_sales">
            {data.shortbuyer} and CMA Agent (Collateral Manager appointed by LC opening Bank) shall have free and unfettered access to the plot where the goods are stored without any prior notice to the plot keeper during all reasonable hours including the right of ingress and egress to and from the plot by {data.shortbuyer}'s and /or CMA Agent's officials, agents, other nominated buyers, if any, of {data.shortbuyer} and/or CMA Agent, its vehicles, any Government Agency, for storing/de-storing/removing the material in or from the plot without any hindrance or obstruction.
          </p>
        </li>
        <li>
          <p className="text_sales">
            The role of CMA Agent shall be to supervise the storage, ingress and exit of material at the storage area in accordance with the Collateral Management Agreement entered into by CMA Agent. The Stevedore and the Associate Buyer shall provide necessary support, help and assistance to CMA Agent as may be required by them at all times. CMA Agent's Officials/ representatives/agents shall peacefully enjoy unrestricted and unfettered access to the Storage Area during the term or duration of this Agreement, without disturbance or interruption or obstruction from the Associate Buyer or Stevedore or any person claiming under them. Port safety precautions, indemnity as conveyed to the service providers and the Associate Buyer to be complied with at all times.
          </p>
        </li>
        <li>
          <p className="text_sales">
            CHA/Stevedore shall at all times follow and be bound by the instructions solely of {data.shortbuyer} with regard to delivery of the Goods. Stevedore confirms and undertakes that it shall not release the Goods without the written Release Order of {data.shortbuyer}. Stevedore shall have no objection whatsoever, if {data.buyer} instructs it to deliver the Goods to any third party so nominated by them. The instructions of the {data.buyer} shall be followed forthwith, without any objection, hindrance or delay whatsoever.
          </p>
        </li>
        <li>
          <p className="text_sales">
            CHA/Stevedore shall maintain all records as necessary, statutorily or otherwise for the receipt, storage and release of goods from the warehouse and furnish a daily report to {data.shortbuyer} & the Associate Buyer. Under no circumstance releases will be made by Stevedore or be taken by the Associate Buyer without obtaining proper Release Order in writing from {data.shortbuyer}. Stevedore and the Associate Buyer jointly and severally agree to indemnify and hold harmless at all times {data.shortbuyer}, its officers, agents, employees for any losses, damages, claims, costs and expenses incurred by {data.shortbuyer} due to unauthorized, improper release of the Goods, shortage and/or for breach of the terms of this Agreement.
          </p>
        </li>
        <li>
          <p className="text_sales">
            This Agreement is irrevocable and non-assignable by the Associate Buyer and Stevedore until the entire Goods stored at the storage facility have been delivered to the Associate Buyer, or to the persons nominated by {data.shortbuyer} under the Authorized Release Orders.
          </p>
        </li>
        <li>
          <p className="text_sales">
            In the event the Associate Buyer does not lift the goods/material within the scheduled period {data.shortbuyer} has the right to sell/dispose of the Goods at the sole risk, cost of the Associate Buyer. The Associate Buyer shall be liable to pay to {data.shortbuyer} the loss (if any) incurred by {data.shortbuyer}.
          </p>
        </li>
        <li>
          <p className="text_sales">
            Any disputes or differences in respect of any matter relating to or arising out of this Quadripartite Agreement between the parties hereto shall be settled mutually and if the same is not resolved amicably, then the same will be settled by Arbitration by a Sole Arbitrator in accordance with Rules of Arbitration formulated by Indian Council of Arbitration (ICA). The Award made in pursuance thereof shall be binding on the parties. The seat and venue of the Arbitration will be New Delhi and the language of Arbitration Proceedings shall be in English.
          </p>
        </li>
      </ol>
      <p className="text-center text_sales">
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
            Name of Associate Buyer
          </Col>
          <Col md={7} className={styles.right}>
            {data.associateBuyer}
          </Col>
        </Row>
        <Row className={`${styles.row} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            Address of Associate Buyer
          </Col>
          <Col md={7} className={styles.right}>
            {data.associateBuyerAddress},
          </Col>
        </Row>
        <Row className={`${styles.row} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            GST of Associate Buyer
          </Col>
          <Col md={7} className={styles.right}>
            {data.associateBuyerGst}
          </Col>
        </Row>
        <Row className={`${styles.row} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            PAN of Associate Buyer
          </Col>
          <Col md={7} className={styles.right}>
            {data.associateBuyerPan}
          </Col>
        </Row>
        <Row className={`${styles.row} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            Signatory of Associate Buyer
          </Col>
          <Col md={7} className={styles.right}>
            <ol>
              {data?.associateBuyerAuthorized?.length > 0 &&
                data?.associateBuyerAuthorized?.map((val, index) => {
                  return (
                    <li>
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
            Name of Stevedore
          </Col>
          <Col md={7} className={styles.right}>
            {data.stevedore}
          </Col>
        </Row>
        <Row className={`${styles.row} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            Address of Stevedore
          </Col>
          <Col md={7} className={styles.right}>
            {data.stevedoreAddress?.fullAddress}, {data.stevedoreAddress?.city}, {data.stevedoreAddress?.country}, {data.stevedoreAddress?.pinCode}            
          </Col>
        </Row>
        <Row className={`${styles.row} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            Signatory of Stevedore
          </Col>
          <Col md={7} className={styles.right}>
            <ol>
              {data?.stevedoreAuthorized?.length > 0 &&
                data?.stevedoreAuthorized?.map((val, index) => {
                  return (
                    <li>
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
            Name of CMA Agent
          </Col>
          <Col md={7} className={styles.right}>
            {data.cma}
          </Col>
        </Row>
        <Row className={`${styles.row} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            Address of CMA Agent
          </Col>
          <Col md={7} className={styles.right}>
            {data.cmaAddress?.fullAddress}, {data.cmaAddress?.city}, {data.cmaAddress?.country}, {data.cmaAddress?.pinCode}
          </Col>
        </Row>
        <Row className={`${styles.row} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            Signatory of CMA Agent
          </Col>
          <Col md={7} className={styles.right}>
            <ol>
              {data?.cmaAuthorized?.length > 0 &&
                data?.cmaAuthorized?.map((val, index) => {
                  return (
                    <li>
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
            Commodity Details
          </Col>
          <Col md={7} className={styles.right}>
            {data.detailsOfComm}
          </Col>
        </Row>
        <Row className={`${styles.row} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            Quantity
          </Col>
          <Col md={7} className={styles.right}>
            {data.quan?.toLocaleString('en-In', { maximumFractionDigits: 2 })}  {data?.unitOfQuantity?.toUpperCase()}
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
            Details of Vessel
          </Col>
          <Col md={7} className={styles.right}>
            {data.vessel}
          </Col>
        </Row>
        <Row className={`${styles.row} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            Port of Loading
          </Col>
          <Col md={7} className={styles.right}>
            {data.lordPort}
          </Col>
        </Row>
        <Row className={`${styles.row} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            Port of Discharge
          </Col>
          <Col md={7} className={styles.right}>
            {data.dischargePort}, India
          </Col>
        </Row>
        <Row className={`${styles.row} ${styles.last} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            Storage Plot allotted to {data?.shortbuyer}
          </Col>
          <Col md={7} className={styles.right}>
            {data.storagePlot}, India
          </Col>
        </Row>
      </div>

      <p className="text_sales text-left">
        {' '}
        <strong>SIGNATURE PAGE</strong>
      </p>
      <div className={`row`}>
        <Col md={8}>
          <p className="text_sales text-left mt-3">FOR & ON BEHALF OF</p>
        </Col>
        <Col md={4}>
          <p className="text_sales text-left mt-3">FOR & ON BEHALF OF</p>
        </Col>
      </div>
      <div className={`row`}>
        <Col md={8} className='mt-5 pt-4'>
          <p className="w-50 text-capitalize text-left"><strong>({data.associateBuyer})</strong></p>
        </Col>
        <Col md={4}>        
              {data?.associateBuyerAuthorized?.length > 0 &&
              data?.associateBuyerAuthorized.map((val, index) => {
                return (
                  <>
                    <p className="text_sales text-capitalize mt-5 pt-4 text-left">
                    <strong>
                      Name: {val.name}
                      <br />
                      Designation: {val.designation}
                    </strong>
                    </p>
                  </>
                );
              })}            
        </Col>
      </div>
       {/* <div className={`row`}>
        <Col md={8}>
          <p className="text_sales text-left mt-3 mb-1">FOR & ON BEHALF OF</p>
        </Col>
        <Col md={4}>
          <p className="text_sales text-left mt-3 mb-1">FOR & ON BEHALF OF</p>
        </Col>
      </div> */}
      <div className={`row`}>
        <Col md={8} className='mt-5 pt-4'>
          <p className="w-50 text-capitalize text-left"><strong>({data.cha})</strong></p>
        </Col>
        <Col md={4}>
           {data?.chaAuthorized?.length > 0 &&
              data?.chaAuthorized.map((val, index) => {
                return (
                  <>
                    <p className="text_sales text-capitalize mt-5 pt-4 text-left">
                      <strong>
                        Name: {val.name}
                        <br />
                        Designation: {val.designation}
                      </strong>
                    </p>
                  </>
                );
              })}
        </Col>
      </div>
      {/* <div className={`row`}>
        <Col md={8}>
          <p className="text_sales text-left mt-3 mb-1">FOR & ON BEHALF OF</p>
        </Col>
        <Col md={4}>
          <p className="text_sales text-left mt-3 mb-1">FOR & ON BEHALF OF</p>
        </Col>
      </div> */}
      <div className={`row`}>
        <Col md={8} className='mt-5 pt-4'>
          <p className="w-50 text-capitalize text-left"><strong>({data.cma})</strong></p>
        </Col>
        <Col md={4}>
           {data?.cmaAuthorized?.length > 0 &&
              data?.cmaAuthorized.map((val, index) => {
                return (
                  <>
                    <p className="text_sales text-capitalize mt-5 pt-4 text-left">
                      <strong>
                        Name: {val.name}
                        <br />
                        Designation: {val.designation}
                      </strong>
                    </p>
                  </>
                );
              })}
        </Col>
      </div>
       {/* <div className={`row`}>
        <Col md={8}>
          <p className="text_sales text-left mt-3 mb-1">FOR & ON BEHALF OF</p>
        </Col>
        <Col md={4}>
          <p className="text_sales text-left mt-3 mb-1">FOR & ON BEHALF OF</p>
        </Col>
      </div> */}
      <div className={`row`}>
        <Col md={8} className='mt-5 pt-4'>
          <p className="w-50 text-capitalize text-left"><strong>({data.buyer})</strong></p>
        </Col>
        <Col md={4}>
           {data?.buyerAuthorized?.length > 0 &&
              data?.buyerAuthorized.map((val, index) => {
                return (
                  <>
                    <p className="text_sales text-capitalize mt-5 pt-4 text-left">
                      <strong>
                        Name: {val.name}
                        <br />
                        Designation: {val.designation}
                      </strong>
                    </p>
                  </>
                );
              })}
        </Col>
      </div>
    </div>
  );
}
