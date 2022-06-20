import React from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Index() {
    const { buyerList } = useSelector((state) => state.buyer)
    console.log(buyerList, "this is buyer list")
    return (
        <Card className={`${styles.sub_card} sub_card`}>
            <Card.Header className={`${styles.header} label_heading`}>
                <span>Company Profile</span>
                <span className={styles.addicon}>+</span>
            </Card.Header>
            {/* <hr className={styles.hr}/> */}
            {buyerList && buyerList.map((buyer, index) => (<Card.Body key={index} className={`${styles.body} value_card`}>
                {fields("Company Name", buyer.companyName)}
                {fields("Company PAN", "1123456780")}
                {fields("Type Of Business", buyer.typeOfBusiness?.originalValue)}
                {fields("Transaction Type", buyer.transactionType?.originalValue)}
                {fields("Turn-Over (in Cr)", buyer.turnOver?.originalValue)}
                {fields("Email ID", "Johndoe@Email.Com")}

                {fields("Phone Number", buyerList.company.mobile.primary.number)}
                {fields("Whatsapp Number", buyerList.company.mobile.whatsapp.number)}
                {fields("Communication Mode", buyerList.company.communicationMode)}
            </Card.Body>))}
        </Card>
    )
}

export default Index
const fields = (head, value) => {
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
