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
          { buyerList && buyerList.map((buyer)=>( <Card.Body className={`${styles.body} value_card`}>
                {fields("Commodity",buyer.commodity?.originalValue,false)}
                {fields("Quantity (in MT)",buyer.Quantity?.originalValue,false)}
                {fields("Order values (in INR)",buyer.orderValues?.originalValue,false)}
                {fields("Supplier Name","Camilog International",false)}
                {fields("Country Of Origin","India",false)}
                {fields("INCO Terms","CFR",false)}
                                
                {fields("Port Of Discharge",buyer.portOfDischarge?.originalValue,false)}
                {fields("Expected Date Of Shipment",buyer.ExpectedDateOfShipment?.originalValue,false)}
                {fields("Document Name","Insurance Certificate",true)}
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