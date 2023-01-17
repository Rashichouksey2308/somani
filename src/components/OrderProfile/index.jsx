import React from 'react';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { previewDocument } from 'redux/ViewDoc/action';

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
      <div id="orderDetail" className={`collapse ${styles.body} card-body row`} aria-labelledby="orderDetail">
        {Fields('Commodity', buyerList?.order?.commodity)}
        {Fields(
          'Quantity',
          buyerList?.order?.quantity?.toLocaleString('en-IN', {
            maximumFractionDigits: 2,
          }),
          false,
          `${' '}${buyerList?.order?.unitOfQuantity.toUpperCase()}`,
        )}
        {Fields(
          'Order value (in INR)',
          CovertvaluefromtoCR(buyerList?.order?.orderValue)?.toLocaleString('en-IN', {
            maximumFractionDigits: 2,
          },),
          false,
          
        ` ${' '} ${  buyerList?.order?.unitOfValue == 'Crores'
            ? 'Cr'
            : buyerList?.order?.unitOfValue == 'Million'
            ? 'Mn'
            : buyerList?.order?.unitOfValue}`
        )}
        {Fields('Supplier Name', buyerList?.order?.supplierName, false)}
        {Fields('Country Of Origin', buyerList?.order?.countryOfOrigin, false)}
        {Fields('INCO Terms', buyerList?.order?.incoTerm, false)}
        {/* {fields("Transaction Type",buyerList?.order?.transactionType)} */}
        {Fields('Port Of Discharge', buyerList?.order?.portOfDischarge, false)}
        {Fields(
          'Expected Date Of Shipment',
          moment(buyerList?.order?.ExpectedDateOfShipment).format('DD-MM-YYYY'),
          false,
        )}

        {buyerList?.company?.documents.map((val, index) => {
          return <>{Fields('Document Type', val?.typeOfDocument, true, null, val?.path, buyerList)}</>;
        })}
      </div>
    </div>
  );
}

export default Index;
const Fields = (head, value, isButton, value2, value3, buyerList) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={`${styles.filed_container} col-sm-6 col-12 col-md-3 col-lg-2`}>
        <span className={`${styles.top} label`}>{head}</span>
        <div className="d-flex align-items-center">
          <span 
            className={`${head === 'Document Type' ? styles.value_document : styles.value} value `}>
            {head =="Port Of Discharge"?`${value}, India`:`${value}`}
            {value2 ? value2 : ''}
          </span>
          {isButton ? (
            <a
              onClick={() =>
                dispatch(
                  previewDocument({
                    path: value3,
                    order: buyerList.order._id,
                    company: buyerList.company._id,
                  }),
                )
              }
              className={styles.button}
            >
              View
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
};
