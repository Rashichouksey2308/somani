import React from 'react';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { ViewDocument } from 'redux/ViewDoc/action';

import { CovertvaluefromtoCR } from '../../utils/helper';

function Index() {
  const { buyerList } = useSelector((state) => state.buyer);

  return (
    <div className={`${styles.wrapper} card`}>
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
        className={`collapse ${styles.body} value_card card-body row`}
        aria-labelledby="orderDetail"
      >
        {Fields('Commodity', buyerList?.order?.commodity)}
        {Fields('Quantity (in MT)', buyerList?.order?.quantity, false, buyerList?.order?.unitOfQuantity.toUpperCase())}
        {Fields(
          'Order value (in INR)',
          CovertvaluefromtoCR(buyerList?.order?.orderValue)?.toLocaleString(),
          false,
          buyerList?.order?.unitOfValue == 'Crores'
            ? 'Cr'
            : buyerList?.order?.unitOfValue == 'Million'
            ? 'Mn'
            : buyerList?.order?.unitOfValue,
        )}
        {Fields('Supplier Name', buyerList?.order?.supplierName, false)}
        {Fields('Country Of Origin', buyerList?.order?.countryOfOrigin, false)}
        {Fields('INCO Terms', buyerList?.order?.incoTerm, false)}
        {/* {Fields("Transaction Type",buyerList?.order?.transactionType)} */}
        {Fields('Port Of Discharge', buyerList?.order?.portOfDischarge, false)}
        {Fields(
          'Expected Date Of Shipment',
          moment(buyerList?.order?.ExpectedDateOfShipment).format('DD-MM-YYYY'),
          false,
        )}
        {Fields('Document Name', 'Insurance Certificate', true)}

        {buyerList?.company?.documents?.map((val, index) => {
          return <>{Fields('Document Type', val?.typeOfDocument, true, null, val?.path)}</>;
        })}
      </div>
    </div>
  );
}

export default Index;
const Fields = (head, value, isButton, value2, value3) => {
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
