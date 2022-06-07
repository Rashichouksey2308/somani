import React from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function index() {
    const {buyerList} = useSelector((state)=> state.buyer)
    console.log(buyerList, "this is buyer list")
    return (
        <Card className={styles.card}>
            <Card.Header className={styles.header}>
                <span>Company Profile</span>   
                <span class={styles.addicon}>+</span>     
            </Card.Header>
            {/* <hr className={styles.hr}/> */}
         { buyerList && buyerList.map((buyer)=>(  <Card.Body className={styles.body}>
                {fields("Company Name",buyer.companyName)}
                {fields("Company PAN","1123456780")}
                {fields("Type Of Business",buyer.typeOfBusiness?.originalValue)}
                {fields("Transaction Type",buyer.transactionType?.originalValue)}
                {fields("Turn-Over (in Cr)",buyer.turnOver?.originalValue)}
                {fields("Email ID","Johndoe@Email.Com")}
                                
                {fields("Phone Number","+91 9876543210")}
                {fields("Whatsapp Number","+91 9876543210")}
                {fields("Communication Mode","Email, Whatsapp")}
            </Card.Body>))}
        </Card>
    )
}

export default index
const fields =(head,value)=>{
    return (
        <>
            <div className={styles.filed_container}>
                <span className={styles.top}>{head}</span>
                <div>
                    <span className={styles.value}>
                  {value}                  
                    </span>
                </div>
            </div>
        </>
    )
}
