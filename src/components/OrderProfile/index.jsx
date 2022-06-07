import React from 'react'
import styles from "./index.module.scss"
import {Card} from 'react-bootstrap'

function index() {
    return (
        <Card className={`${styles.sub_card} sub_card`}>
            <Card.Header className={`${styles.header}`}>
                <span>Order Details</span>   
                <span class={styles.addicon}>+</span>     
            </Card.Header>
            {/* <hr className={styles.hr}/> */}
            <Card.Body className={`${styles.body} value_card`}>
                {fields("Commodity","Iron",false)}
                {fields("Quantity (in MT)","500",false)}
                {fields("Order values (in INR)","24,00,00,000",false)}
                {fields("Supplier Name","Camilog International",false)}
                {fields("Country Of Origin","India",false)}
                {fields("INCO Terms","CFR",false)}
                                
                {fields("Port Of Discharge","Vishakapatnam",false)}
                {fields("Expected Date Of Shipment","22-02-2022",false)}
                {fields("Document Name","Insurance Certificate",true)}
            </Card.Body>
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