import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'
import { useSelector, useDispatch} from 'react-redux'
import moment from 'moment'
// import {GetBuyer} from '../../redux/registerBuyer/action'


function Index() {
  const dispatch = useDispatch()


  // useEffect(() => {
  //   const orderId = sessionStorage.getItem('orderId')
  //   const companyId = sessionStorage.getItem('company')
  //   dispatch(GetBuyer({ companyId: companyId, orderId: orderId }))
  // }, [dispatch])

  const { buyerList } = useSelector((state) => state.buyer)
  console.log(buyerList, "this is buyer list")
  return (
    <div className={`${styles.wrapper} card`} >
      <div
        className={`${styles.sub_card} sub_card card-header p-0 d-flex align-items-center justify-content-between bg-transparent`}
        data-toggle="collapse"
        data-target="#orderDetail"
        aria-expanded="true"
        aria-controls="orderDetail"
      >
        <div className={styles.header}>
          <h2 className={`mb-0`}>Order Details</h2>
          <span className=" d-flex align-items-center justify-content-between">

            +
          </span>
        </div>
      </div>
      <div
        id="orderDetail"
        className={`collapse ${styles.body} value_card card-body row`}
        aria-labelledby="orderDetail"
      //   data-parent="#profileAccordion"
      >

        {fields("Commodity", buyerList?.order?.commodity)}
        {fields("Quantity", buyerList?.order?.quantity, false, buyerList?.order?.unitOfQuantity,)}
        {fields("Order values", (buyerList?.order?.orderValue)?.toLocaleString(), false)}
        {fields("Supplier Name", buyerList?.order?.supplierName, false)}
        {fields("Country Of Origin", buyerList?.order?.countryOfOrigin, false)}
        {fields("INCO Terms", buyerList?.order?.incoTerm, false)}
        {/* {fields("Transaction Type",buyerList?.order?.transactionType)} */}
        {fields("Port Of Discharge", buyerList?.order?.portOfDischarge, false)}
        {fields("Expected Date Of Shipment", moment(buyerList?.order?.ExpectedDateOfShipment?.slice(0, 10), 'YYYY-MM-DD', true).format("DD-MM-YYYY"), false)}
        {fields("Document Name", buyerList?.company?.documents[0]?.typeOfDocument, true)}

      </div>
    </div>

  )
}

export default Index
const fields = (head, value, isButton, value2) => {
  return (
    <>
      <div className={`${styles.filed_container} col-sm-6 col-12 col-md-3 col-lg-2`}>
        <span className={`${styles.top} label`}>{head}</span>
        <div className='d-flex align-items-center'>
          <span className={`${styles.value} value `}>
            {value}      {value2 ? value2 : ''}
          </span>
          {isButton ? <a onClick={() => window.open(value)} className={styles.button}>View</a> : null}
        </div>
      </div>
    </>
  )
}





