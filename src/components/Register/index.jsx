import React, { useState } from 'react'
import styles from './index.module.scss'
import CompanyDetails from '../CompanyDetails'
import OrderDetails from '../OrderDetails'
import Documents from '../Documents'
import Terms from '../Terms'
import { Card } from 'react-bootstrap'

const index = () => {
  const [companyDetails, setCompanyDetails] = useState({
    companyName: '',
    companyPan: '',
    transactionType: '',
    gst: '',
    typeOfBusiness: '',
    phone: null,
    emailId: '',
    turnOver: '',
    communicationMode: '',
    whatsAppNumber: null,
    commodity: '',
    quantity: null,
    orderValue: null,
    supplierName: '',
    countryOfOrigin: '',
    portOfDischarge: '',
    expectedDateOfShipment: null,
    incoTerms: '',
    document: '',
    tnc: '',
  })


  const saveData = (e) => {
    const newInput = { ...companyDetails };
    newInput[e.target.name] = e.target.value;
    setCompanyDetails(newInput);
  }
  
  const submitData=()=>{
    //register api call

  }

  const clearData=()=>{
    document.getElementById("CompanyDetailsForm").reset()
    document.getElementById("OrderDetailsForm").reset()

  }
  
  return (
    <Card className={styles.card}>
      <Card.Header className={styles.head_container}>
        <div className={styles.head_header}>
          <img
            className={styles.arrow}
            src="/static/keyboard_arrow_right-3.svg"
          />
          <h1 className={styles.heading}>Register Your Company</h1>
        </div>
        <div>
          <button onClick={clearData} className={styles.clear_btn}>Clear All</button>
        </div>
      </Card.Header>

      <Card.Body className={styles.body}>
        <CompanyDetails saveData={saveData}/>
        <hr className={styles.line}></hr>
        <OrderDetails saveData={saveData}/>
        <hr className={styles.line}></hr>
        <Documents saveData={saveData} />
        <hr className={styles.line}></hr>
        <Terms submitData={submitData} />
      </Card.Body>
    </Card>
  )
}

export default index
