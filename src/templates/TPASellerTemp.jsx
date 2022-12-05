import styles from '@/components/TPASeller/index.module.scss';
import { Col, Row } from 'react-bootstrap';

export default function TPASeller(data) {
  console.log(data,"vdata")
  return (
    <>
      <div className="card-body">
        <p className="text-center text_sales">
          {' '}
          <strong>
            TRIPARTITE AGREEMENT
          </strong>
        </p>
        <p className="text_sales">
          This Tripartite Agreement (“<strong>Agreement</strong>”) is made at the place and on the day as set out in <strong>Schedule I</strong> hereto by
          and between:
        </p>
        <p className="text_sales">
          <strong>{data.sellerSignature}</strong>(s), a company organized and existing in accordance with Law of Switzerland and having address at {""}{' '}
                    {data.sellerAddress?.fullAddress}, {data.sellerAddress?.city} {data.sellerAddress?.country},{' '}
                    {data.sellerAddress?.pinCode}{""} through its Authorized Signatory (hereinafter referred to as the "<strong>Buyer</strong>", which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns) of the First Part.
        </p>
        <p className=" text-left text_sales">And</p>
        <p className="text_sales">
          <strong>Supplier</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as the “
          <strong>Supplier</strong>”, which expression shall, unless excluded by or repugnant to the context be deemed to
          include its legal heirs, successors and permitted assigns) of the Second Part.
        </p>
        <p className=" text-left text_sales">And</p>
        <p className="text_sales">
          <strong>End Buyer</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as
          the “<strong>End Buyer</strong>”, which expression shall, unless excluded by or repugnant to the context be
          deemed to include its legal heirs, successors and permitted assigns) of the Third Part.
        </p>
        <p className="text_sales">
          The Buyer, Supplier and the End Buyer shall hereinafter, for the sake of brevity and convenience, be referred to individually as "Party" and collectively as the "Parties".
        </p>
        <p className="text_sales">
          <strong>WHEREAS</strong>,
        </p>
        <p className="text_sales">
          <ol type='A' className='pl-4'>
            <li>Supplier has entered into a Sales Contract with Buyer for Sale & Purchase of Goods as details in Schedule -1</li>
            <li>Buyer has entered into the Sales Contract with Supplier solely at the request of End Buyer and to facilitate the End Buyer.</li>
            <li>In view of the aforesaid, parties have entered into this binding Agreement.</li>
          </ol>
        </p>
        <p className="text_sales">
          <strong>NOW THEREFORE THE PARTIES HERETO AGREED TO AS UNDER</strong>
        </p>        
        <p className="text_sales">
          <ol type='1' className='pl-4'>
            <li>That it is expressly clarify and agreed to amongst the parties that the Buyer has entered into the Sales Contract solely at the request and to facilitate the End Buyer.</li>
            <li>All terms of the Sales Contract have already been discussed and agreed between the Supplier and End Buyer.</li>
            <li>The role of Buyer is limited to establishment of Letter of Credit (“LC”) in favor of Supplier subject to the End Buyer fulfilling its contractual obligations towards the Buyer.</li>
            <li>The End Buyer and Supplier therefore, are fully liable and responsible at all times for performance of the Sales Contract including but not limited to making financial arrangements, timely nomination/acceptance of vessel, settlement of any and all quality/quantity claims, delayed/no shipment issues, demurrage / dispatch amounts, and/or any other claims or liability arising due to execution of the sales contract. All such claims, liabilities etc., shall be addressed, discussed and settled directly between the Supplier and End Buyer with no reference and liability on the part of Buyer whatsoever.</li>
            <li>Supplier will not hold discharge and/or delivery of cargo to the Buyer/Buyer's nominees for any reason whatsoever once LC is issued by the Buyer.</li>
            <li>In case of any conflict between the Sales Contract and this Agreement, the terms of this Agreement will prevail.</li>
            <li>In any case, End Buyer shall remain responsible for the performance of the Sales Contract, including any failure or delay in the issuance of the LC in accordance with the terms of the Sales Contract.</li>
            <li>Further, End Buyer shall be fully responsible for payment of the price in the event that Supplier is unable to obtain payment under the LC. End Buyer shall fully indemnify Supplier and Buyer for any loss, damage or expense arising due to execution of the Sales Contract.</li>
            <li>This Agreement is subject to English laws, and any disputes arising out of this Agreement shall be referred to arbitration as per rules of Singapore International Arbitration Center (SIAC) by a sole arbitrator. The seat and venue of arbitration shall be Singapore and the language of Arbitration Proceedings shall be in English.</li>
          </ol>
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
              {data.supplierAddress?.fullAddress},{" "}
              {data.supplierAddress?.city}{" "}
              {data.supplierAddress?.country},{" "}

              {data.supplierAddress?.pinCode}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Authorized signatory of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              <ol className='mb-0'>
                {data?.supplierAuthorized?.length > 0 &&
                  data?.supplierAuthorized?.map((val, index) => {
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
              Email ID of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              <ol className='mb-0'>
                {data?.supplierAuthorized?.length > 0 &&
                    data?.supplierAuthorized?.map((val, index) => {
                      return <li>{val.email}</li>;
                    })}
              </ol>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of End Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data.associateBuyer}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of End Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data.associateBuyerAddress}
              
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Authorized signatory of End Buyer
            </Col>
            <Col md={7} className={styles.right}>
              <ol className='mb-0'>
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
              Email ID of End Buyer
            </Col>
            <Col md={7} className={styles.right}>
              <ol className='mb-0'>
                {data?.associateBuyerAuthorized?.length > 0 &&
                  data?.associateBuyerAuthorized?.map((val, index) => {
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
                      <table className={styles.schedule_table}>
                        <tr>
                          {data?.spec &&
                            data?.spec.length > 0 &&
                            Object.keys(data?.spec[0]).map((val, index) => <th className='text-color' key={index}>{val}</th>)}
                        </tr>
                        {data?.spec &&
                          data?.spec.length > 0 &&
                          data?.spec.map((item, index) => (
                            <tr>
                              {Object.values(item).map((value, id) => (
                                <td className='text-color' key={id}>{value}</td>
                              ))}
                            </tr>
                          ))}
                      </table>
                    </div>
                  </div>
                </div>
                {data?.specComment?.length > 0 ? <b>Comments</b> : null}
                <ol className='mb-0'>
                  {data.specComment.length > 0 &&
                    data.specComment.map((val, index) => {
                      return <li>{val}</li>;
                    })}
                </ol>
              </>
            </Col>
          </Row>
        </div>
        <div className={`row my-4`}>
          <Col md={8}>
            <p className="text_sales text-left">
              <strong>Buyer</strong>
            </p>
          </Col>
          <Col md={4}>
            <p className="text_sales mb-0">
               {data?.buyerAuthorized?.length > 0 &&
                  data?.buyerAuthorized?.map((val, index) => {
                    return (
                      <>
                        <p className='text-left'>Name: {val.name}
                        <br/>
                        Designation: {val.designation}</p>
                      </>
                    )
                  })}
            </p>
            <p className="text_sales text-left"><strong>Authorised Signatory</strong></p>
          </Col>
        </div>
        <div className={`row my-4`}>
          <Col md={8}>          
            <p className="text_sales text-left">           
              <strong>Supplier</strong>
            </p>
          </Col>
          <Col md={4}>
            <p className="text_sales mb-0">
             {data?.supplierAuthorized?.length > 0 &&
                  data?.supplierAuthorized?.map((val, index) => {
                    return (
                      <>
                        <p className='text-left'>Name: {val.name}
                        <br/>
                        Designation: {val.designation}</p>
                      </>
                    )
                  })}
            </p>
            <p className="text_sales text-left"><strong>Authorised Signatory</strong></p>
          </Col>
        </div>
        <div className={`row my-4`}>
          <Col md={8}>           
            <p className="text_sales text-left">                
              <strong>End Buyer</strong>
            </p>
          </Col>
          <Col md={4}>
            <p className="text_sales mb-0">
             {data?.associateBuyerAuthorized?.length > 0 &&
                  data?.associateBuyerAuthorized?.map((val, index) => {
                    return (
                      <>
                        <p className='text-left'>Name: {val.name}
                        <br/>
                        Designation: {val.designation}</p>
                      </>
                    )
                  })}
            </p>
            <p className="text_sales text-left"><strong>Authorised Signatory</strong></p>
          </Col>
        </div>
      </div>
    </>
  );
}
