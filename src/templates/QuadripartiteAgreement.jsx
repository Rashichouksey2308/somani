import styles from '@/components/QPA/index.module.scss';
import { Col, Row } from 'react-bootstrap';

export default function QuadripartiteAgreement(data) {
  return (
    <div className={`${styles.cardBody} card-body pt-3`}>
      <p className="text-center text_sales">
        {' '}
        <strong>Quadripartite Agreement</strong>
      </p>
      <p className="text_sales">
        This Quadripartite Agreement (<strong>“Agreement”</strong>) is made at the place and on the day as set out in{' '}
        <strong>Schedule I </strong>
        hereto by and between:
      </p>
      <p className="text_sales">
        {' '}
        <b>{data.buyer}</b> , a company incorporated under the Companies Act, 1956, having its registered office at{' '}
        <b>
          {data.buyerAddress?.fullAddress},{data.buyerAddress?.city} {data.buyerAddress?.country},{' '}
          {data.buyerAddress?.pinCode}
        </b>{' '}
        through its Authorised Signatory (hereinafter called <b>{data.shortbuyer}</b>, which expression shall, where
        subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of
        the First Part,
      </p>
      <p className="text-center text_sales">And</p>
      <p className="text_sales">
        <strong>Associate Buyer</strong>, as detailed in &nbsp;
        <strong>Schedule I</strong> hereof (hereinafter referred to as the “<strong>Associate Buyer</strong>”, which
        expression shall, where subject and content allow or admit, be deemed to include its successors, legal
        representatives and assigns) of the Second Part.
      </p>
      <p className="text-center text_sales">And</p>

      <p className="text_sales">
        <strong>Stevedore</strong>(s), as detailed in &nbsp;
        <strong>Schedule I</strong> hereof (hereinafter referred to as the “<strong>Stevedore/CHA</strong>”, which
        expression shall, where subject and content allow or admit, be deemed to include its successors, legal
        representatives and assigns) of the Third Part.
      </p>
      <p className="text-center text_sales">And</p>
      <p className="text_sales">
        <strong>CMA Agent</strong> (s), as detailed in &nbsp;
        <strong>Schedule I</strong> hereof (hereinafter referred to as the “<strong>CMA Agent</strong>”, which
        expression shall, where subject and content allow or admit, be deemed to include its successors, legal
        representatives and assigns) of the Fourth Part.
      </p>
      <p className=" text_sales">
        WHEREAS <b>{data.shortbuyer}</b> has agreed to import Goods as detailed in <strong>Schedule I </strong>hereof on
        stock and sale basis as per Associateship Agreement entered into between <b>{data.shortbuyer}</b> and the
        Associate Buyer.
      </p>
      <p className="text_sales">
        WHEREAS <b>{data.shortbuyer}</b>&nbsp;has appointed the Stevedore for handling the vessel as detailed in{' '}
        <strong>Schedule I</strong> at Discharge Port. The complete details of vessel, Discharge port and the plot
        allotted to <b>{data.shortbuyer}</b>are mentioned at Schedule I.
      </p>

      <p className=" text_sales">
        WHEREAS the, LC opening Bank has a first ranking security right over the Goods and it has appointed the CMA
        Agent in accordance with the terms of the Collateral Management Agreement executed by Financing Bank
      </p>
      <p className=" text_sales">IT IS NOW HEREBY AGREED BY AND BETWEEN THE PARTIES AS UNDER: -</p>
      <ol type="1" className="pl-4">
        <li>
          <p className=" text_sales">
            {' '}
            The Goods shall be stored at the Plot allotted to &nbsp;
            <b>{data.shortbuyer}</b> by the Discharge Port authorities and shall be kept under the control and custody
            of CHA on behalf of &nbsp;
            <b>{data.shortbuyer}</b>. All dispatches from the plot shall be done by CHA solely on the basis of Written
            Delivery Orders issued by <b>{data.shortbuyer}</b>.{' '}
          </p>
        </li>
        <li>
          <p className=" text_sales"> Scope of Work of CHA: </p>
          <p className=" text_sales"> The Scope of work of CHA shall include but not be limited to: </p>
          <ol type="a" className="pl-3">
            <li>
              <p className=" text_sales">
                arranging plot allotment in the name of <b>{data.shortbuyer}</b> from the discharge Port authorities to
                store <b>{data.shortbuyer}</b>'s cargo
              </p>
            </li>
            <li>
              <p className=" text_sales">discharge of cargo from the Vessel,</p>
            </li>
            <li>
              <p className=" text_sales">loading of wharf, intra carting at Port,</p>
            </li>
            <li>
              <p className=" text_sales">deployment of labors and equipments,</p>
            </li>

            <li>
              <p className=" text_sales">
                transportation from wharf to <b>{data.shortbuyer}</b> allotted plot, ensure that the plot where goods
                are being stored is suitable for the storage of the goods,{' '}
              </p>
            </li>
            <li>
              <p className=" text_sales">segregated stacking cargo at plot grade wise,</p>
            </li>
            <li>
              <p className=" text_sales">placement of wagon indents, wagon cleaning, wooden plugging </p>
            </li>

            <li>
              <p className=" text_sales">
                loading into wagons/trucks, leveling of cargo, lime marking on stacks and wagons, placing Railway
                Indents, Loading on wagons/trucks
              </p>
            </li>
            <li>
              <p className=" text_sales">Arranging round the clock security cover at the storage area, </p>
            </li>
            <li>
              <p className=" text_sales">liaison with Discharge Port authorities </p>
            </li>
            <li>
              <p className=" text_sales">
                obtaining RRs and arranging dispatches as per Written release orders issued by <b>{data.shortbuyer}</b>,
                obtaining gate passes,
              </p>
            </li>
            <li>
              <p className=" text_sales">yard management, </p>
            </li>
            <li>
              <p className=" text_sales">
                maintenance of proper records and registers for incoming and outgoing of material,
              </p>
            </li>
            <li>
              <p className=" text_sales">
                water sprinkling as per PCB norms and other services as may be required by <b>{data.shortbuyer}</b>{' '}
              </p>
            </li>
          </ol>
        </li>
        <li>
          <p className=" text_sales">
            {' '}
            Safekeeping and Security of the Goods-Proper safekeeping and security of Goods shall be the joint and
            several responsibilities of the Associate Buyer and Stevedore. The Associate Buyer and Stevedore shall
            provide round the clock security guards at the Storage Plot allotted at Discharge Port, where Goods shall be
            stored. <b>{data.shortbuyer}</b> shall in no way be responsible or liable for any loss or damage to the
            Goods for any reason whatsoever including shortage, theft or mix up.
          </p>
        </li>
        <li>
          <p className=" text_sales">
            {' '}
            Bill of Entry to be filed in the name <b>{data.shortbuyer}</b>. Payment of customs duty, IGST, energy cess,
            Wharfage, CIMS and all other statutory charges shall be paid by the Associate Buyer to{' '}
            <b>{data.shortbuyer}</b> in advance at the time of Custom Clearance. The Associate Buyer shall pay Port
            Charges directly to port or through the Stevedore who will take care of the payments to Port and raise bills
            on IGI for this. A copy of the same has to be furnished to IGI. Any penalty/demurrage on account of delayed
            payment shall be solely to the account of the Associate Buyer
          </p>
        </li>
        <li>
          <p className=" text_sales">
            Port wharfage, pollution charges, plot rental, wagon haulage and terminal charges, Port Royalty (if
            applicable) are to be paid by the Associate Buyer in advance to <b>{data.shortbuyer}</b> as per the
            Discharge Port. HMC crane charges at the Discharge Port and any pre berthing delays/detentions/demurrages
            will be to the account of the Associate Buyer on actual basis.
          </p>
        </li>
        <li>
          <p className=" text_sales">
            CHA/Stevedore will raise invoice on the Associate Buyer and payments shall be made by the Associate Buyer to
            Stevedore based on the agreed rate terms & Conditions.
          </p>
        </li>
        <li>
          <p className=" text_sales">
            CHA/Stevedore will apply for EDRM permission and place indent online. The Associate Buyer will pay the
            railway freight and related charges directly.
          </p>
        </li>
        <li>
          <p className=" text_sales">
            Scanned copy of RR shall be furnished by Stevedore to <b>{data.shortbuyer}</b> as well as to Associate Buyer
            as soon as it is issued after loading. The original RR shall be sent by Stevedore to the Associate Buyer for
            taking delivery of the rake. The final reconciliation shall be done based on the BL quantity.
          </p>
        </li>
        <li>
          <p className=" text_sales">
            The Associate Buyer will arrange comprehensive storage insurance against all risks for <strong>110</strong>{' '}
            of the value of goods. The insurance policy will indicate <b>{data.shortbuyer}</b> or its nominated Bank (as
            per <b>{data.shortbuyer}</b>'s discretion), as sole beneficiary. The Associate Buyer shall inform Stevedore
            the details of the goods for which <b>{data.shortbuyer}</b>/IGI's nominated Bank shall be the beneficiary
            for the entire insured value of such pledged goods as per the B/L, quantity kept in the custody of
            CHA/Stevedore. In case of any claim on insurance company the same shall be claimed and pursued till
            realization by the Associate Buyer at its sole cost and the Associate Buyer shall indemnify Stevedore and
            IGI against all risks.
          </p>
        </li>
        <li>
          <p className=" text_sales">
            <b>{data.shortbuyer}</b> and CMA Agent (Collateral Manager appointed by LC opening Bank) shall have free and
            unfettered access to the plot where the goods are stored without any prior notice to the plot keeper during
            all reasonable hours including the right of ingress and egress to and from the plot by{' '}
            <b>{data.shortbuyer}</b> 's and /or CMA Agent's officials, agents, other nominated buyers, if any, of{' '}
            <b>{data.shortbuyer}</b> and/or CMA Agent, its vehicles, any Government Agency, for
            storing/de-storing/removing the material in or from the plot without any hindrance or obstruction.
          </p>
        </li>
        <li>
          <p className=" text_sales">
            The role of CMA Agent shall be to supervise the storage, ingress and exit of material at the storage area in
            accordance with the Collateral Management Agreement entered into by CMA Agent. The Stevedore and the
            Associate Buyer shall provide necessary support, help and assistance to CMA Agent as may be required by them
            at all times. CMA Agent's Officials/ representatives/agents shall peacefully enjoy unrestricted and
            unfettered access to the Storage Area during the term or duration of this Agreement, without disturbance or
            interruption or obstruction from the Associate Buyer or Stevedore or any person claiming under them. Port
            safety precautions, indemnity as conveyed to the service providers and the Associate Buyer to be complied
            with at all times.
          </p>
        </li>
        <li>
          <p className=" text_sales">
            CHA/Stevedore shall at all times follow and be bound by the instructions solely of <b>{data.shortbuyer}</b>{' '}
            with regard to delivery of the Goods. Stevedore confirms and undertakes that it shall not release the Goods
            without the written Release Order of <b>{data.shortbuyer}</b>. Stevedore shall have no objection whatsoever,
            if <b>{data.buyer}</b> instructs it to deliver the Goods to any third party so nominated by them. The
            instructions of the <b>{data.buyer}</b> shall be followed forthwith, without any objection, hindrance or
            delay whatsoever
          </p>
        </li>
        <li>
          <p className=" text_sales">
            CHA/Stevedore shall maintain all records as necessary, statutorily or otherwise for the receipt, storage and
            release of goods from the warehouse and furnish a daily report to <b>{data.shortbuyer}</b> & the Associate
            Buyer. Under no circumstance releases will be made by Stevedore or be taken by the Associate Buyer without
            obtaining proper Release Order in writing from <b>{data.shortbuyer}</b>. Stevedore and the Associate Buyer
            jointly and severally agree to indemnify and hold harmless at all times <b>{data.shortbuyer}</b>, its
            officers, agents, employees for any losses, damages, claims, costs and expenses incurred by{' '}
            <b>{data.shortbuyer}</b> due to unauthorized, improper release of the Goods, shortage and/or for breach of
            the terms of this Agreement.
          </p>
        </li>
        <li>
          <p className=" text_sales">
            This Agreement is irrevocable and non-assignable by the Associate Buyer and Stevedore until the entire Goods
            stored at the storage facility have been delivered to the Associate Buyer, or to the persons nominated by{' '}
            <b>{data.shortbuyer}</b> under the Authorized Release Orders.
          </p>
        </li>
        <li>
          <p className=" text_sales">
            In the event the Associate Buyer does not lift the goods/material within the scheduled period{' '}
            <b>{data.shortbuyer}</b> has the right to sell/dispose of the Goods at the sole risk, cost of the Associate
            Buyer. The Associate Buyer shall liable to pay to <b>{data.shortbuyer}</b> the loss (if any) incurred by{' '}
            <b>{data.shortbuyer}</b>.
          </p>
        </li>
        <li>
          <p className=" text_sales">
            Any disputes or differences in respect of any matter relating to or arising out of this Quadripartite
            Agreement between the parties hereto shall be settled mutually and if the same is not resolved amicably,
            then the same will be settled by Arbitration by a Sole Arbitrator in accordance with Rules of Arbitration
            formulated by Indian Council of Arbitration (ICA). The Award made in pursuance thereof shall be binding on
            the parties. The seat and venue of the Arbitration will be New Delhi and the language of Arbitration
            Proceedings shall be in English.
          </p>
        </li>
      </ol>

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
            {data.stevedoreAddress?.fullAddress},{data.stevedoreAddress?.city} {data.stevedoreAddress?.country},{' '}
            {data.stevedoreAddress?.pinCode}
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
            {data.cmaAddress?.fullAddress},{data.cmaAddress?.city} {data.cmaAddress?.country},{' '}
            {data.cmaAddress?.pinCode}
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
            {data.quan?.toLocaleString('en-In', { maximumFractionDigits: 2 })} MT
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
            {data.dischargePort}
          </Col>
        </Row>
        <Row className={`${styles.row} ${styles.last} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            Storage Plot allotted to IGI
          </Col>
          <Col md={7} className={styles.right}>
            {data.storagePlot}
          </Col>
        </Row>
      </div>

      <p className=" text_sales">
        {' '}
        <strong>SIGNATURE PAGE</strong>
      </p>
      <div className={`row`}>
        <Col md={12} className={`d-flex justify-content-around`}>
          <p className="text_sales w-50 text-center m-0">(Seller)</p>
          <p className="text_sales w-50 text-center m-0">(Buyer)</p>
        </Col>
        <Col md={12} className={`d-flex justify-content-around`}>
          <div className="w-50 text-center">{data.seller}</div>
          <div className="w-50 text-center">{data.buyer}</div>
        </Col>
      </div>
    </div>
  );
}
