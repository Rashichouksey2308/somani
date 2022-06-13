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
         { buyerList && buyerList.data?.map((buyer)=>(  <Card.Body className={`${styles.body} value_card`}>
                {fields("Company Name",buyer.companyName)}
                {fields("Company PAN",buyer.company.companyProfile.companyPan)}
                {fields("Type Of Business",buyer.company.companyProfile.typeOfBusiness)}
                {fields("Transaction Type",buyer.company.companyProfile.transactionType)}
                {fields("Turn-Over (in Cr)",buyer.company.companyProfile.turnOver)}
                {fields("Email ID",buyer.company.companyProfile.emailId)}
                                
                {fields("Phone Number",buyer.company.companyProfile.phoneNumber)}
                {fields("Whatsapp Number",buyer.company.companyProfile.whatsappNumber)}
                {fields("Communication Mode",buyer.company.companyProfile.communicationMode)}
            </Card.Body>))}
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
