import styles from '@/components/AssociateshipAgreement/index.module.scss';
import moment from 'moment';
import Router from 'next/router';
import { Col, Row } from 'react-bootstrap';

export default function UnderTaking_1(data, preview, setPreviewValue) {
  return (
    <>
      <div className={`${styles.cardBody} card-body pt-3`} style={{ minHeight: 'auto', flex: '0 0 auto' }}>
        <p className="text-center text_sales my-5">
          {' '}
          <strong>Undertaking for Post-dated Cheques issued by Associate Buyer</strong>
        </p>
        <p className="text-left text_sales ml-4 d-flex align-items-start text-capitalize">
          {' '}
          <span className="mb-0">To:</span>{' '}
          <span className="ml-4">
            <u>
              {data.buyer},</u>
              <br />
              <u>{data.buyerAddress?.fullAddress}</u>,{" "}
              <u>{data.buyerAddress?.city}</u>{" "} 
              <u>{data.buyerAddress?.country}</u>,{" "}
              <u>{data.buyerAddress?.pinCode}</u>            
          </span>
        </p>
        <p className="text-center text_sales">
          {' '}
          <strong>
            <u>UNDERTAKING</u>
          </strong>
        </p>
        <ol type="1">
          <li>
            <p className="text_sales">
              That we, being the Associate Buyer have entered into the Associateship Agreement with Seller.{' '}
            </p>
          </li>
          <li>
            <p className="text_sales">
              That as requested by us, the Supplier shall sell the Goods to <u>{data.shortseller}</u> and <u>{data.shortseller}</u> will establish
              Letter of Credit in favour of the Supplier and make payment to the Supplier for the Goods. <u>{data.shortseller}</u>{' '}
              shall sell the Goods to Seller and Seller shall sell the same to the Associate Buyer in terms of the said
              Associateship Agreement. The Sales Contract and the Associateship Agreement shall jointly be referred to
              as “Contracts”.
            </p>
          </li>
          <li>
            <p className="text_sales">
              That the present Undertaking is being executed in pursuance of the Contracts being entered into by{' '}
              <u>{data.shortseller}</u> and Seller on our request. It is pertinent to mention that the terms of the Associateship
              Agreement be read as a part of this Undertaking.
            </p>
          </li>
          <li>
            <p className="text_sales">
              We enclose herewith the following post-dated Cheque(s) as per details in <strong>Schedule I</strong>. In
              pursuance of the above, we authorize Seller to present the post-dated cheques on due date and present the
              same with its Banker, without any notice to us.
            </p>
          </li>
          <li>
            <p className="text_sales">
              That, the undersigned being the Authorised Signatory of the Associate Buyer, do hereby undertake as under:
            </p>
            <ul type="disc" className='pl-3'>
              <li>
                <p className="text_sales mb-0">
                  To pay the balance/outstanding amount in respect of the above-mentioned transaction on the first
                  demand of Seller without recourse, demur and protest.
                </p>
              </li>
              <li>
                <p className="text_sales mb-0">To honour the cheque(s) on their presentation on due dates.</p>
              </li>
              <li>
                <p className="text_sales mb-0">
                  That we will not intimate the bankers to stop the payment of the aforesaid cheques delivered to Seller
                  under any circumstances.
                </p>
              </li>
              <li>
                <p className="text_sales mb-0">
                  That, we have duly complied with the Positive Payment Service as per RBI circular dated 25th September
                  2020 by intimating our bank about the details of the post-dated cheques issued to Seller.
                </p>
              </li>
              <li>
                <p className="text_sales mb-0">
                  That, we shall not close the account from which the cheques have been issued without the prior
                  permission of Seller in writing.
                </p>
              </li>
              <li>
                <p className="text_sales mb-0">
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
        <p className="text_sales pb-3">
          <u>Details of post-dated Cheque(s)-</u>
        </p>
        <div className={`${styles.inputsContainer} border_black`}>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              <strong>S No</strong>
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              <strong>Bank Name</strong>
            </Col>
            <Col md={2} className={`${styles.left} border_black`}>
              <strong>Cheque No</strong>
            </Col>
            <Col md={2} className={`${styles.left} border_black`}>
              <strong>Cheque Date</strong>
            </Col>
            <Col md={3} className={styles.right}>
              <strong>Amount</strong>
            </Col>
          </Row>

          {data?.cheque?.length > 0 &&
            data.cheque.map((val, index) => {
              return (
                <Row className={`${styles.row} border_black`}>
                  <Col md={1} className={`${styles.left} border_black`}>
                    {val.sNo}
                  </Col>
                  <Col md={4} className={`${styles.left} border_black`}>
                    {val.bankName}
                  </Col>
                  <Col md={2} className={`${styles.left} border_black`}>
                    {val.chequeNo}
                  </Col>
                  <Col md={2} className={`${styles.left} border_black`}>
                    {moment(val.chequeDate).format('DD-MM-YYYY')}
                  </Col>
                  <Col md={3} className={styles.right}>
                    {val.amount}
                  </Col>
                </Row>
              );
            })}          
        </div>

        <div className={`row`}>
          <Col md={6} className="offset-md-6">
            <p className="text_sales">FOR AND ON BEHALF OF</p>
          </Col>
        </div>
        <div className={`row my-4`}>
          <Col md={6}>
            <p className="text_sales m-0">Place: {data.placeOfExecution}</p>
          </Col>
          <Col md={6}>
            <p className="text_sales m-0">
              <strong>(Associate Buyer)</strong>
              <br />
              <br />
             {
                data?.associateBuyerAuthorized?.length > 0 &&
                data?.associateBuyerAuthorized?.map((val, index) => {
                  return (
                   
                      <p className='mb-0'>
                        Name - {val.name}
                      </p>
                      
                   
                  );
                })
              }
            </p>
          </Col>
        </div>
        <div className={`row my-4`}>
          <Col md={6}>
            <p className="text_sales m-0">Date : {data.dateOfExecution}</p>
          </Col>
          <Col md={6}>
            <p className="text_sales m-0">AUTHORISED SIGNATORY</p>
          </Col>
        </div>
      </div>
      {preview !== 'UNDERTAKING1' ? (
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
                  setPreviewValue('UNDERTAKING1');
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
