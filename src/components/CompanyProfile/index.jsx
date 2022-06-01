import React from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'

function index() {
    return (
        <Card className={styles.card}>
            <Card.Header className={styles.header}>
                <span>Company Profile</span>   
                <span class={styles.addicon}>+</span>     
            </Card.Header>
            {/* <hr className={styles.hr}/> */}
            <Card.Body className={styles.body}>
                {fields("Company Name","Ramakrishna Traders")}
                {fields("Company PAN","1123456780")}
                {fields("Type Of Business","Manufacturer")}
                {fields("Transaction Type","International")}
                {fields("Turn-Over (in Cr)","60")}
                {fields("Email ID","Johndoe@Email.Com")}
                                
                {fields("Phone Number","+91 9876543210")}
                {fields("Whatsapp Number","+91 9876543210")}
                {fields("Communication Mode","Email, Whatsapp")}
            </Card.Body>
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
