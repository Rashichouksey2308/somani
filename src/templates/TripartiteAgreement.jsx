import styles from '@/components/TPASeller/index.module.scss';
import { Col, Row } from 'react-bootstrap';

export default function TripartiteAgreement(data) {
  return (
    <>
      <div className="card-body">
        <p className="text-center text_sales">
          <strong>
            <u>TRIPARTITE AGREEMENT</u>
          </strong>
        </p>
        <p className="text_sales">
          This Tripartite Agreement (“<strong>Agreement</strong>”) is made at the place and on the day as set out in{' '}
          <strong>Schedule I</strong> hereto by and between:
        </p>
        <p className="text_sales">
          <b>{data.seller}</b>, a company organized and existing in accordance with Law of Switzerland and having
          address at{' '}
          <b>
            {data.sellerAddress?.fullAddress},{data.sellerAddress?.city} {data.sellerAddress?.country},{' '}
            {data.sellerAddress?.pinCode}
          </b>{' '}
          through its Authorized Signatory (hereinafter referred to as the &quot;<strong>Buyer</strong>&quot;, which
          expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs,
          successors and permitted assigns) of the First Part.
        </p>
        <p className="text_sales">And</p>
        <p className="text_sales">
          <strong>Supplier</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as
          the “<strong>Supplier</strong>”, which expression shall, unless excluded by or repugnant to the context be
          deemed to include its legal heirs, successors and permitted assigns) of the Second Part.
        </p>
        <p className=" text_sales">And</p>
        <p className="text_sales">
          <strong>End Buyer</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as
          the “<strong>End Buyer</strong>”, which expression shall, unless excluded by or repugnant to the context be
          deemed to include its legal heirs, successors and permitted assigns) of the Third Part.
        </p>
        <p className="text_sales">
          The Buyer, Supplier and the End Buyer shall hereinafter, for the sake of brevity and convenience, be referred
          to individually as &quot;Party&quot; and collectively as the &quot;Parties&quot;.
        </p>
        <p className="text_sales">
          <strong>WHEREAS,</strong>
        </p>
        <ol type="A" className="pl-4">
          <li>
            <p className="text_sales mb-0">
              Supplier has entered into a Sales Contract with Buyer for Sale &amp; Purchase of Goods as details in
              Schedule -1
            </p>
          </li>
          <li>
            <p className="text_sales mb-0">
              Buyer has entered into the Sales Contract with Supplier solely at the request of End Buyer and to
              facilitate the End Buyer.
            </p>
          </li>
          <li>
            <p className="text_sales mb-0">
              In view of the aforesaid, parties have entered into this binding Agreement.
            </p>
          </li>
        </ol>
        <p className="text_sales">
          <strong>NOW THEREFORE THE PARTIES HERETO AGREED TO AS UNDER</strong>
        </p>
        <ol type="1" className="pl-4">
          <li>
            <p className="text_sales">
              That it is expressly clarify and agreed to amongst the parties that the Buyer has entered into the Sales
              Contract solely at the request and to facilitate the End Buyer.
            </p>
          </li>
          <li>
            <p className="text_sales">
              All terms of the Sales Contract have already been discussed and agreed between the Supplier and End Buyer.
            </p>
          </li>
          <li>
            <p className="text_sales">
              The role of Buyer is limited to establishment of Letter of Credit (“LC”) in favor of Supplier subject to
              the End Buyer fulfilling its contractual obligations towards the Buyer.
            </p>
          </li>
          <li>
            <p className="text_sales">
              The End Buyer and Supplier therefore, are fully liable and responsible at all times for performance of the
              Sales Contract including but not limited to making financial arrangements, timely nomination/acceptance of
              vessel, settlement of any and all quality/quantity claims, delayed/no shipment issues, demurrage /
              dispatch amounts, and/or any other claims or liability arising due to execution of the sales contract. All
              such claims, liabilities etc., shall be addressed, discussed and settled directly between the Supplier and
              End Buyer with no reference and liability on the part of Buyer whatsoever.
            </p>
          </li>
          <li>
            <p className="text_sales">
              Supplier will not hold discharge and/or delivery of cargo to the Buyer/Buyer's nominees for any reason
              whatsoever once LC is issued by the Buyer.
            </p>
          </li>
          <li>
            <p className="text_sales">
              In case of any conflict between the Sales Contract and this Agreement, the terms of this Agreement will
              prevail.
            </p>
          </li>
          <li>
            <p className="text_sales">
              In case of any conflict between the Sales Contract and this Agreement, the terms of this Agreement will
              prevail.
            </p>
          </li>
          <li>
            <p className="text_sales">
              In any case, End Buyer shall remain responsible for the performance of the Sales Contract, including any
              failure or delay in the issuance of the LC in accordance with the terms of the Sales Contract.
            </p>
          </li>
          <li>
            <p className="text_sales">
              This Agreement is subject to English laws, and any disputes arising out of this Agreement shall be
              referred to arbitration as per rules of Singapore International Arbitration Center (SIAC) by a sole
              arbitrator. The seat and venue of arbitration shall be Singapore and the language of Arbitration
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
              Name of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              {data?.supplier}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              {data.supplierAddress?.fullAddress},{data.supplierAddress?.city} {data.supplierAddress?.country},{' '}
              {data.supplierAddress?.pinCode}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Authorized signatory of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              <ol>
                {data?.supplierAuthorized?.length > 0 &&
                  data?.supplierAuthorized?.map((val, index) => {
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
              Email ID of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              <ol>
                {data?.supplierEmail?.length > 0 &&
                  data?.supplierEmail?.map((val, index) => {
                    return <li>{val.email}</li>;
                  })}
              </ol>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of End buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data?.endBuyer}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Authorized signatory of End Buyer
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
              Email ID of End Buyer
            </Col>
            <Col md={7} className={styles.right}>
              <ol>
                {data?.buyerEmail?.length > 0 &&
                  data?.buyerEmail?.map((val, index) => {
                    return <li>{val.email}</li>;
                  })}
              </ol>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Details of Goods as per Sales Contract
            </Col>
            <Col md={7} className={`${styles.right} d-flex flex-column justify-content-start align-items-start`}>
              <>
                <div className={styles.tableWrapper}>
                  <div className={styles.table_scroll_outer}>
                    <div className={styles.table_scroll_inner}>
                      <table>
                        <tr>
                          {data?.spec &&
                            data?.spec.length > 0 &&
                            Object.keys(data?.spec[0]).map((val, index) => <th key={index}>{val}</th>)}
                        </tr>
                        {data?.spec &&
                          data?.spec.length > 0 &&
                          data?.spec.map((item, index) => (
                            <tr>
                              {Object.values(item).map((value, id) => (
                                <td key={id}>{value}</td>
                              ))}
                            </tr>
                          ))}
                      </table>
                    </div>
                  </div>
                </div>
                {data.specComment.length > 0 ? <b>Comments</b> : null}
                <ol>
                  {data.specComment.length > 0 &&
                    data.specComment.map((val, index) => {
                      return <li>{val}</li>;
                    })}
                </ol>
              </>
            </Col>
          </Row>
        </div>

        <div className={`row`}>
          <Col md={12} className={`d-flex justify-content-around`}>
            <p className="text_sales  m-0">
              <strong>Buyer</strong>
            </p>
            <p className="text_sales">Authorised Signatory</p>
          </Col>
          <Col md={12} className={`d-flex justify-content-around`}>
            <p className="text_sales m-0">
              <strong>Supplier </strong>
            </p>
            <p className="text_sales">Authorised Signatory</p>
          </Col>
          <Col md={12} className={`d-flex justify-content-around`}>
            <p className="text_sales  m-0">
              <strong>End Buyer </strong>
            </p>
            <p className="text_sales">Authorised Signatory</p>
          </Col>
        </div>
      </div>
    </>
  );
}
