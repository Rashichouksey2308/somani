import React from 'react'
import styles from "./index.module.scss"
import {Card} from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Index() {
    const {buyerList} = useSelector((state)=>state.buyer)
    return (
        <Card className={`${styles.sub_card} sub_card`}>
            <Card.Header className={`${styles.header}`}>
                <span>Order Details</span>   
                <span className={styles.addicon}>+</span>     
            </Card.Header>
            {/* <hr className={styles.hr}/> */}
            <Card.Body className={`${styles.body} value_card row`}>
                {fields("Commodity",buyerList?.order?.commodity)}
                {fields("Quantity (in MT)",buyerList?.order?.Quantity,false)}
                {fields("Order values (in INR)",buyerList?.order?.order?.Value,false)}
                {fields("Supplier Name",buyerList?.order?.supplierName,false)}
                {fields("Country Of Origin",buyerList?.order?.countryOfOrigin,false)}
                {fields("INCO Terms",buyerList?.order?.incoTerm,false)}
                {fields("Transaction Type",buyerList?.order?.transactionType)}
                {fields("Port Of Discharge",buyerList?.order?.portOfDischarge,false)}
                {fields("Expected Date Of Shipment",buyerList?.order?.ExpectedDateOfShipment,false)}
                {fields("Document Name",buyerList?.company?.documents?.typeOfDocument,true)}
            </Card.Body>
        </Card>
    )
}

export default Index
const fields =(head,value,isButton)=>{
    return (
        <>
            <div className={`${styles.filed_container} col-sm-6 col-12 col-md-3 col-lg-3`}>
                <span className={`${styles.top} value`}>{head}</span>
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