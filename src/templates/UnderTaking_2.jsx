import styles from '@/components/AssociateshipAgreement/index.module.scss';
import moment from 'moment';
import Router from 'next/router';
import { Col, Row } from 'react-bootstrap';

export default function UnderTaking_2(data, preview, setPreviewValue) {
  return (
    <>
      <div className={`${styles.cardBody} card-body pt-3`} style={{ minHeight: 'auto', flex: '0 0 auto' }}>
        {preview ? (
          <div className={`${styles.inputsContainer2} border_black`}>
            <Row className={`${styles.row} ${styles.last}`}>
              <Col md={7} className={`${styles.left} border_black`}>
                Sales Contract No.: {data.shortseller + '/' + data.shortbuyer + '/' + '2022/001'}
              </Col>
              <Col md={5} className={styles.right}>
                Date: {moment(new Date()).format('DD-MM-YYYY')}
              </Col>
            </Row>
          </div>
        ) : null}
        <p className="text-center text_sales">
          {' '}
          <strong>Undertaking by Associate Buyer for Price, Quality &amp; Quantity</strong>
        </p>
        <p className="text-center text_sales">
          {' '}
          <span>To:</span>{' '}
          <strong>Indo German International Private Limited, 7A, Sagar Apartments, 6, Tilak Marg, New Delhi</strong>
        </p>
        <p className="text-center text_sales">
          {' '}
          <strong>
            <u>UNDERTAKING</u>
          </strong>
        </p>
        <p className="text_sales"> We being the Associate Buyer, do solemnly affirm and undertake as under:</p>
        <ol type="1">
          <li>
            <p className="text_sales">
              That we have negotiated with the Supplier for supply of the Goods through Indo/ Seller.
            </p>
          </li>
          <li>
            <p className="text_sales">
              That we have requested <strong>Indo German International Private Limited</strong>
              (“IGI/ Seller”) to import on our behalf the Goods and sell the same to us on stock and sale basis as per
              Associateship Agreement. We confirm and undertake that all the terms &amp; conditions of the Sales
              Contract entered into between <strong>Indo</strong> and the Supplier (hereinafter referred to as “Sales
              Contract”) are acceptable and binding on us.
            </p>
          </li>
          <li>
            <p className="text_sales">
              That the price indicated in the Sales Contract is neither under-invoiced nor over-invoiced and is as per
              prevailing international rates for the above-mentioned item and is at par with prices at which item of
              similar quality being imported into India.
            </p>
          </li>
          <li>
            <p className="text_sales">
              We undertake to ensure that the item to be shipped by the Supplier shall be strictly as per description
              &amp; quality indicated in the Sales Contract notwithstanding the inspection report/ quality certificate/
              Survey report furnished by the Supplier for the subject consignment. We shall be held solely liable and
              responsible for all consequences arising out of variation between item/quality/quantity contracted for
              &amp; actually shipped and we undertake to indemnify and hold harmless Indo/Seller in this regard at all
              times.
            </p>
          </li>
          <li>
            <p className="text_sales">
              We undertake to accept the goods from Seller/Indo on 'no complaint basis' with regard to quality, quantity
              and/or any other claims including shortage. Seller/Indo shall in no way be responsible or liable for the
              quality, quantity or any other claim pertaining to the Goods being supplied by the Supplier and/or any
              other claim relating to this transaction. It is our sole responsibility in settling the quality, quantity
              or other claims pertaining to this transaction directly with the Supplier and/or Custom House Agent (CHA),
              with no liability whatsoever upon Seller/Indo.
            </p>
            <ul>
              <li>
                <p className="text_sales">
                  To pay the balance/outstanding amount in respect of the above-mentioned transaction on the first
                  demand of Seller without recourse, demur and protest
                </p>
              </li>
              <li>
                <p className="text_sales">To honour the cheque(s) on their presentation on due dates.</p>
              </li>
              <li>
                <p className="text_sales">
                  That we will not intimate the bankers to stop the payment of the aforesaid cheques delivered to Seller
                  under any circumstances.
                </p>
              </li>
              <li>
                <p className="text_sales">
                  That, we have duly complied with the Positive Payment Service as per RBI circular dated 25th September
                  2020 by intimating our bank about the details of the post-dated cheques issued to Seller.
                </p>
              </li>
              <li>
                <p className="text_sales">
                  That, we shall not close the account from which the cheques have been issued without the prior
                  permission of Seller in writing.
                </p>
              </li>
              <li>
                <p className="text_sales">
                  That, we, shall not give Seller any notice requesting them not to present the cheques delivered to
                  them.
                </p>
              </li>
              <li>
                <p className="text_sales">
                  That, we, further undertake not to bring into effect any change in the Authorized Signatories without
                  taking prior written consent of Seller or to do anything which makes the above cheques/claim of Seller
                  redundant.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p className="text_sales">
              We further confirm that we are very much aware of the liability that has accrued on us by way of the
              Associateship Agreement by virtue of which Seller has agreed to import the Goods.
            </p>
          </li>
          <li>
            <p className="text_sales">
              We further confirm that if we fail to pay the due and outstanding amounts due to Seller, in respect of
              aforesaid Agreement, Seller will have unfettered/unconditional right to encash the said cheque(s), without
              any notice to us.
            </p>
          </li>
          <li>
            <p className="text_sales">
              The calculation of the Post-dated Cheques is based on the contract value, any additional amounts, if
              payable by us will be paid upfront. Further, Actual Stevedoring/CHA, Port Charges, Plot Rental, Wharfage
              etc. to be borne and paid by us directly.
            </p>
          </li>
          <li>
            <p className="text_sales">
              In any event of our failure to perform the Associateship Agreement in accordance with its terms including
              default in honoring the cheques on presentation, Seller shall have the right to file appropriate civil
              and/or criminal proceedings against us in the Courts of the Jurisdiction as per your sole discretion. We
              unconditionally and irrevocably waive our right to raise objection to such proceedings on any grounds
              whatsoever.
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
              {data?.dateOfExecution}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Place of execution
            </Col>
            <Col md={7} className={styles.right}>
              {data?.placeOfExecution}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of Associate Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data?.associateBuyer}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Associate Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data.associateBuyerAddress?.fullAddress},{data.associateBuyerAddress?.city}{' '}
              {data.associateBuyerAddress?.country}, {data.associateBuyerAddress?.pinCode}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              GST of Associate Buyerager
            </Col>
            <Col md={7} className={styles.right}>
              {data?.associateBuyerGst}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              PAN of Associate Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data?.associateBuyerPan}
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
              {data?.stevedore}
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
              {data?.detailsOfComm}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Quantity
            </Col>
            <Col md={7} className={styles.right}>
              {data?.quan}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              {data?.supplier}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Details of Vessel
            </Col>
            <Col md={7} className={styles.right}>
              {data?.vessel}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Port of Loading
            </Col>
            <Col md={7} className={styles.right}>
              {data?.lordPort}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Port of Discharge
            </Col>
            <Col md={7} className={styles.right}>
              {data?.dischargePort}
            </Col>
          </Row>
          <Row className={`${styles.row} ${styles.last}`}>
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
            <p className="text_sales  m-0">(Seller)</p>
            <p className="text_sales  m-0">(Buyer)</p>
          </Col>
          <Col md={12} className={`d-flex justify-content-around`}>
            {data.seller}
            {data.buyer}
          </Col>
        </div>
      </div>
      {preview !== 'UNDERTAKING2' ? (
        <>
          <div
            className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3 bg-transparent`}
          >
            <div className={`${styles.approve} mr-3`}>
              <span
                className="mb-0"
                onClick={(e) => {
                  sessionStorage.setItem('preview', JSON.stringify(data));

                  Router.push('agreement/preview');
                  setPreviewValue('UNDERTAKING2');
                }}
              >
                Preview
              </span>
            </div>
            <div className={styles.reject}>
              <span className="mb-0">Save</span>
            </div>
            <div className={styles.approve}>
              <span className="mb-0">Submit</span>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
