import React from 'react';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { ViewDocument } from 'redux/ViewDoc/action';

import { CovertvaluefromtoCR } from '../../utils/helper';

function Index() {
  

  const { buyerList } = useSelector((state) => state.buyer);


  return (
    <div className={`${styles.wrapper} card border_color`}>
      <div
        className={`${styles.sub_card} sub_card card-header p-0 d-flex align-items-center justify-content-between bg-transparent`}
        data-toggle="collapse"
        data-target="#orderDetail"
        aria-expanded="true"
        aria-controls="orderDetail"
      >
        <div className={styles.header}>
          <h2 className={`mb-0`}>Order Details</h2>
          <span className=" d-flex align-items-center justify-content-between">+</span>
        </div>
      </div>
      <div
        id="orderDetail"
        className={`collapse ${styles.body} card-body row`}
        aria-labelledby="orderDetail"
      
      >
        {fields('Commodity', buyerList?.order?.commodity)}
        {fields(
          'Quantity (in MT)',
          buyerList?.order?.quantity?.toLocaleString('en-IN', {
            maximumFractionDigits: 2,
          }),
          false,
          buyerList?.order?.unitOfQuantity.toUpperCase(),
        )}
        {fields(
          'Order value (in INR)',
          CovertvaluefromtoCR(buyerList?.order?.orderValue)?.toLocaleString('en-IN', {
            maximumFractionDigits: 2,
          }),
          false,
          buyerList?.order?.unitOfValue == 'Crores'
            ? 'Cr'
            : buyerList?.order?.unitOfValue == 'Million'
            ? 'Mn'
            : buyerList?.order?.unitOfValue,
        )}
        {fields('Supplier Name', buyerList?.order?.supplierName, false)}
        {fields('Country Of Origin', buyerList?.order?.countryOfOrigin, false)}
        {fields('INCO Terms', buyerList?.order?.incoTerm, false)}
        {/* {fields("Transaction Type",buyerList?.order?.transactionType)} */}
        {fields('Port Of Discharge', buyerList?.order?.portOfDischarge, false)}
        {fields(
          'Expected Date Of Shipment',
          moment(buyerList?.order?.ExpectedDateOfShipment).format('DD-MM-YYYY'),
          false,
        )}

        {buyerList?.company?.documents.map((val, index) => {
          return <>{fields('Document Type', val?.typeOfDocument, true, null, val?.path)}</>;
        })}
      </div>
    </div>
  );
}

export default Index;
const fields = (head, value, isButton, value2, value3) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={`${styles.filed_container} col-sm-6 col-12 col-md-3 col-lg-2`}>
        <span className={`${styles.top} label`}>{head}</span>
        <div className="d-flex align-items-center">
          <span className={`${styles.value} value `}>
            {value} {value2 ? value2 : ''}
          </span>
          {isButton ? (
            <a onClick={() => dispatch(ViewDocument({ path: value3 }))} className={styles.button}>
              View
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
};
