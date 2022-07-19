import React from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Index() {
    const {buyerList} = useSelector((state)=> state.buyer)
    // console.log(buyerList, "this is buyer list")
    return ( 
        <div className={`${styles.wrapper} card`} >
        <div
          className={`${styles.sub_card} sub_card card-header d-flex align-items-center justify-content-between bg-transparent`}
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
              
                {fields("Commodity",buyerList?.order?.commodity)}
                {fields("Quantity (in MT)",buyerList?.order?.quantity,false)}
                {fields("Order values (in INR)",buyerList?.order?.orderValue,false)}
                {fields("Supplier Name",buyerList?.order?.supplierName,false)}
                {fields("Country Of Origin",buyerList?.order?.countryOfOrigin,false)}
                {fields("INCO Terms",buyerList?.order?.incoTerm,false)}
                {/* {fields("Transaction Type",buyerList?.order?.transactionType)} */}
                {fields("Port Of Discharge",buyerList?.order?.portOfDischarge,false)}
                {fields("Expected Date Of Shipment",buyerList?.order?.ExpectedDateOfShipment,false)}
                {fields("Document Name",buyerList?.company?.documents?.typeOfDocument,true)}
            
        </div>
        </div>
       
    )
}

export default Index
const fields =(head,value,isButton)=>{
    return (
        <>
            <div className={`${styles.filed_container} col-sm-6 col-12 col-md-3 col-lg-2`}>
                <span className={`${styles.top} label`}>{head}</span>
                <div>
                    <span className={`${styles.value} value `}>
                  {value}                  
                    </span>
                    {isButton?<span className={styles.button}>View</span>:null}
                </div>
            </div>
        </>
    )
}





