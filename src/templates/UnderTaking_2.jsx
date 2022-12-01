import styles from '@/components/AssociateshipAgreement/index.module.scss';
import moment from 'moment';
import Router from 'next/router';
import { Col, Row } from 'react-bootstrap';

export default function UnderTaking_2(data, preview, setPreviewValue) {
  return (
    <>
      <div className={`${styles.cardBody} card-body pt-3`} style={{ minHeight: 'auto', flex: '0 0 auto' }}>
        <p className="text-center text_sales my-5">
          {' '}
          <strong>Undertaking by Associate Buyer for Price, Quality &amp; Quantity</strong>
        </p>
        <p className="text-left text_sales ml-4 d-flex align-items-start text-capitalize">
          {' '}
          <span className="mb-0">To:</span>{' '}
          <span className="ml-4">
            
              {data.buyer},
              <br />
              {data.buyerAddress?.fullAddress},{" "}
              {data.buyerAddress?.city}{" "}<br/>
              {data.buyerAddress?.country},{" "}
              {data.buyerAddress?.pinCode}            
          </span>
        </p>
        <p className="text-center text_sales">
          {' '}
          <strong>
            <u>UNDERTAKING</u>
          </strong>
        </p>
        <ol type="1">
          <p className="text_sales">We, being the Associate Buyer, do solemnly affirm and undertake as under:</p>
          <li>
            <p className="text_sales">
              That we have negotiated with the Supplier for supply of the Goods through Seller.
            </p>
          </li>
          <li>
            <p className="text_sales">
              That we have requested 
              Seller to import on our behalf the Goods and sell the same to us on stock and sale basis as per
              Associateship Agreement. We confirm and undertake that all the terms &amp; conditions of the Sales
              Contract entered into between {data.shortseller} and the Supplier (hereinafter referred to as “Sales Contract”)
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
              &amp; actually shipped and we undertake to indemnify and hold harmless Seller in this regard at all
              times.
            </p>
          </li>
          <li>
            <p className="text_sales">
              We undertake to accept the goods from Seller on 'no complaint basis' with regard to quality,
              quantity and/or any other claims including shortage. Seller shall in no way be responsible or
              liable for the quality, quantity or any other claim pertaining to the Goods being supplied by the Supplier
              and/or any other claim relating to this transaction. It is our sole responsibility in settling the
              quality, quantity or other claims pertaining to this transaction directly with the Supplier and/or Custom
              House Agent (CHA), with no liability whatsoever upon Seller.
            </p>
          </li>
        </ol>
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
                Place: {data.placeOfExecution}
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <p className="text_sales m-0">
              {
              data?.associateBuyerAuthorized?.length > 0 &&
              data?.associateBuyerAuthorized?.map((val, index) => {
                return (                  
                  <p className='mb-0'>                      
                    <strong>Name : {val.name}</strong>
                  </p>                  
                );
              })
              }
             
            </p>
          </Col>
        </div>
        <div className={`row my-4`}>
          <Col md={6}>
            <p className="text_sales m-0">
              <strong>
                Date: {data.dateOfExecution}
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <p className="text_sales m-0">
               {
              data?.associateBuyerAuthorized?.length > 0 &&
              data?.associateBuyerAuthorized?.map((val, index) => {
                return (                  
                  <p className='mb-0'>
                    <strong>Designation : {val.designation}</strong>
                  </p>                  
                );s
              })
              }
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
