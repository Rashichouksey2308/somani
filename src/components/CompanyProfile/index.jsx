import React from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function index() {
    const {buyerList} = useSelector((state)=> state.buyer)
    console.log(buyerList, "this is buyer list")
    return (
        <Card className={`${styles.sub_card} sub_card`}>
            <Card.Header className={`${styles.header} label_heading`}>
                <span>Company Profile</span>   
                <span class={styles.addicon}>+</span>     
            </Card.Header>
            {/* <hr className={styles.hr}/> */}
           <Card.Body className={`${styles.body} value_card`}>
                {fields("Company Name",buyerList.companyName)}
                {fields("Company PAN",buyerList.company.companyPan)}
                {fields("Type Of Business",buyerList.company.typeOfBusiness)}
                {/* {fields("Transaction Type",buyerList.company.transactionType)} */}
                {fields("Turn-Over (in Cr)",buyerList.company.turnOver)}
                {fields("Email ID",buyerList.company.email)}
                                
                {fields("Phone Number",buyerList.company.mobile.primary.number)}
                {fields("Whatsapp Number",buyerList.company.mobile.whatsapp.number)}
                {fields("Communication Mode",buyerList.company.communicationMode)}
            </Card.Body>
        </Card>
    )
}

export default index
const fields =(head,value)=>{
    return (
        <>
            <div className={styles.filed_container}>
                <span className={`${styles.top} value`}>{head}</span>
                <div>
                    <span className={`${styles.value} value `}>
                  {value}                  
                    </span>
                </div>
            </div>
        </>
    )
}
