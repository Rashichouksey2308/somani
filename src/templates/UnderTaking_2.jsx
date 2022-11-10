import styles from '@/components/AssociateshipAgreement/index.module.scss';
import moment from 'moment';
import Router from 'next/router';
import { Col, Row } from 'react-bootstrap';

export default function UnderTaking_2(data, preview, setPreviewValue) {
  return (
    <>
      <div className={`${styles.cardBody} card-body pt-3`} style={{ minHeight: 'auto', flex: '0 0 auto' }}>
        <p className="text-center text_sales">
          {' '}
          <strong>Undertaking by Associate Buyer for Price, Quality &amp; Quantity</strong>
        </p>
        <p className="text-left text_sales ml-4 d-flex align-items-start">
          {' '}
          <span className="mb-0">To:</span>{' '}
          <span className="ml-4">
            <u>
              Indo German International Private Limited,
              <br />
              7A, Sagar Apartments, 6, Tilak Marg,
              <br />
              New Delhi
            </u>
          </span>
        </p>
        <p className="text-center text_sales">
          {' '}
          <strong>
            <u>UNDERTAKING</u>
          </strong>
        </p>
        <ol type="1">
          <p className="text_sales">We being the Associate Buyer, do solemnly affirm and undertake as under:</p>
          <li>
            <p className="text_sales">
              That we have negotiated with the Supplier for supply of the Goods through Indo/ Seller.
            </p>
          </li>
          <li>
            <p className="text_sales">
              That we have requested <u>Indo German International Private Limited </u>
              (“IGI/ Seller”) to import on our behalf the Goods and sell the same to us on stock and sale basis as per
              Associateship Agreement. We confirm and undertake that all the terms &amp; conditions of the Sales
              Contract entered into between <u>Indo</u> and the Supplier (hereinafter referred to as “Sales Contract”)
              are acceptable and binding on us.
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
              We undertake to accept the goods from Seller/<u>Indo</u> on 'no complaint basis' with regard to quality,
              quantity and/or any other claims including shortage. Seller/<u>Indo</u> shall in no way be responsible or
              liable for the quality, quantity or any other claim pertaining to the Goods being supplied by the Supplier
              and/or any other claim relating to this transaction. It is our sole responsibility in settling the
              quality, quantity or other claims pertaining to this transaction directly with the Supplier and/or Custom
              House Agent (CHA), with no liability whatsoever upon Seller/<u>Indo</u>.
            </p>
          </li>
        </ol>
        {/* <div className={`${styles.inputsContainer} border_black`}>
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
              {data.associateBuyerAddress}
             
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
             {data.stevedoreAddress?.fullAddress},
              {data.stevedoreAddress?.city}{" "} 
              {data.stevedoreAddress?.country},{" "}
              
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
              {data.cmaAddress?.fullAddress},
              {data.cmaAddress?.city}{" "} 
              {data.cmaAddress?.country},{" "}
              
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
        </div> */}
        <div className={`row`}>
          <Col md={6} className="offset-md-6">
            <p className="text_sales">
              <strong>FOR & ON BEHALF OF</strong>
            </p>
          </Col>
        </div>
        <div className={`row`}>
          <Col md={6} className="offset-md-6">
            <p className="text_sales">
              <strong>(Associate Buyer)</strong>
            </p>
          </Col>
        </div>
        <div className={`row my-4`}>
          <Col md={6}>
            <p className="text_sales m-0">
              <strong>
                <u>Place:</u>
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <p className="text_sales m-0">
              <strong>
                <u>Name:</u>
              </strong>
            </p>
          </Col>
        </div>
        <div className={`row my-4`}>
          <Col md={6}>
            <p className="text_sales m-0">
              <strong>
                <u>Date:</u>
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <p className="text_sales m-0">
              <strong>
                <u>Designation:</u>
              </strong>
            </p>
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
