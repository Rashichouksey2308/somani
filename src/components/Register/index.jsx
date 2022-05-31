import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import CompanyDetails from '../CompanyDetails'
import OrderDetails from '../OrderDetails'
import Documents from '../Documents'
import Terms from '../Terms'
import { Card } from 'react-bootstrap'
import Router from 'next/router'
import { CreateBuyer, GetBuyer } from 'redux/registerBuyer/action'
import { useDispatch, useSelector } from 'react-redux'


const index = () => {


  const dispatch= useDispatch();

  const {document} = useSelector(state => state.buyer)

  const [companyDetails, setCompanyDetails] = useState({
    companyName: '',
    companyPan: '',
    transactionType: '',
    gst: '',
    typeOfBussiness: '',
    phoneNumber: null,
    emailId: '',
    turnOver: '',
    communicationMode: '',
    whatsappNumber: null,
  })

  const [orderDetails, setOrderDetails]  = useState({
    commodity: '',
    Quantity: null,
    orderValue: null,
    supplierName: '',
    countryOfOrigin: '',
    portOfDischarge: '',
    ExpectedDateOfShipment: null,
    IncoTerms: ''
  })

  const [documents, setDocuments] = useState({
    typeOfDocument: [null],
    document1: '',
    document2: ''
  })

  console.log(companyDetails, "companyDetails")


  const saveCompanyData = (name,value) => {
    const newInput = { ...companyDetails };
    newInput[name] = value;
    setCompanyDetails(newInput);
  }

  const saveOrderData = (name,value) => {
    const newInput = { ...orderDetails };
    newInput[name] = value;
    setOrderDetails(newInput);
  }

  const saveDocument = (e) => {
    let newDocument = {...documents}
    console.log(newDocument)
    newDocument.typeOfDocument[e.target.name]=(e.target.value)
    console.log(newDocument,"newdocument")
    setDocuments(newDocument)

  }

  const uploadDocument1 = (e) => {
    const formData = new FormData()
    formData.append('document1', e.target.files[0], 'document1.doc')
    const newUploadDoc = {...documents}
    newUploadDoc.document1 = formData
    console.log(newUploadDoc,"newuploaddocument")
    setDocuments(newUploadDoc)

  }
  const uploadDocument2 = (e) => {
    const formData = new FormData()
    formData.append('document2', e.target.files[0], 'document2.doc')
    const newUploadDoc1 = {...documents}
    newUploadDoc1.document2 = formData
    console.log(newUploadDoc1,"newuploaddocument1")
    setDocuments(newUploadDoc1)

  }
  
  const submitData=()=>{
    //register api call
    console.log(documents, "these are the docs")
    const payload={
      companyProfile: companyDetails,
      orderDetails: orderDetails,
      documentType: documents.typeOfDocument,
      document1: documents.document1,
      document2: documents.document2
      
    }
    console.log(payload, "this is payload")

    dispatch(CreateBuyer(payload))
    Router.push('/leads')
  }


  const clearData=()=>{
    document.getElementById("CompanyDetailsForm").reset()
    document.getElementById("OrderDetailsForm").reset()

  }

  useEffect(() => {
    console.log("in use effect")
    GetBuyer("765e0a87-e2c3-4e0c-b5cb-f0b6082bd6ad")
  }, [])
  
  
  return (
    <Card className={styles.card}>
      <Card.Header className={styles.head_container}>
        <div className={styles.head_header}>
          <img className={`${styles.arrow} img-fluid`}
            src="/static/keyboard_arrow_right-3.svg" alt="ArrowRight"/>
          <h1 className={styles.heading}>Register Your Company</h1>
        </div>
        <div>
          <button onClick={clearData} className={styles.clear_btn}>Clear All</button>
        </div>
      </Card.Header>

      <Card.Body className={styles.body}>
        <CompanyDetails saveCompanyData={saveCompanyData} />
        <hr className={styles.line}></hr>
        <OrderDetails saveOrderData={saveOrderData}/>
        <hr className={styles.line}></hr>
        <Documents saveDocument={saveDocument} uploadDocument1={uploadDocument1} uploadDocument2={uploadDocument2} />
        <hr className={styles.line}></hr>
        <Terms submitData={submitData} />
      </Card.Body>
    </Card>
  )
}

export default index
