import React from 'react'
import styles from "./index.module.scss"
import {Card} from 'react-bootstrap'
import { useSelector } from 'react-redux'

function index() {
    const {buyerList} = useSelector((state)=>state.buyer)
    return (
        <Card className={`${styles.sub_card} sub_card`}>
            <Card.Header className={`${styles.header}`}>
                <span>Order Details</span>   
                <span class={styles.addicon}>+</span>     
            </Card.Header>
            {/* <hr className={styles.hr}/> */}
          { buyerList && buyerList.map((buyer)=>( <Card.Body className={styles.body}>
                {fields("Commodity",buyer.company.orderDetails.commodity)}
                {fields("Quantity (in MT)",buyer.company.orderDetails.Quantity,false)}
                {fields("Order values (in INR)",buyer.company.orderDetails?.orderValues,false)}
                {fields("Supplier Name",buyer.company.orderDetails.supplierName,false)}
                {fields("Country Of Origin",buyer.company.orderDetails.countryOfOrigin,false)}
                {fields("INCO Terms",buyer.company.orderDetails?.incoTerms,false)}
                                
                {fields("Port Of Discharge",buyer.company.orderDetails.portOfDischarge,false)}
                {fields("Expected Date Of Shipment",buyer.company.orderDetails.ExpectedDateOfShipment,false)}
                {fields("Document Name",buyer.company.Documents[0].typeOfDocument,true)}
            </Card.Body>))}
        </Card>
    )
}

export default index
const fields =(head,value,isButton)=>{
    return (
        <>
            <div className={`${styles.filed_container}`}>
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