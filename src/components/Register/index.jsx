/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import CompanyDetails from '../CompanyDetails'
import OrderDetails from '../OrderDetails'
import Documents from '../Documents'
import Terms from '../Terms'
import { Card } from 'react-bootstrap'
import Router from 'next/router'
import { CreateBuyer, GetBuyer, GetGst } from 'redux/registerBuyer/action'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"

const Index = () => {
 const [darkMode,setDarkMode] = useState(false)
    useEffect(() =>{
    
    
    if( localStorage.getItem('darkMode') == 'true' ||
      localStorage.getItem('darkMode') == true){
      console.log("this")
     setDarkMode(true)
    }else{
      console.log("this2")
       setDarkMode(false)
    }
 
    },[])

  const dispatch= useDispatch();

  const [companyDetails, setCompanyDetails] = useState({
    companyName: '',
    companyPan: '',
    GST: '',
    typeOfBusiness: '',
    mobile: {
      primary: {
        callingCode: '91',
        number: ''
      },
      whatsapp: {
        callingCode: '91',
        number: ''
      }
    },
    email: '',
    turnOver: '',
    communicationMode: [null],
    
    turnOverUnit: 'Cr'
  })


const mobileFunction = (e) => {
  const newObj = {...companyDetails}
   newObj.mobile.primary.number = e.target.value
   setCompanyDetails(newObj)
  
}

const whatsappFunction = (e) => {
  const newObj = {...companyDetails}
   newObj.mobile.whatsapp.number = e.target.value
   setCompanyDetails(newObj)
  
}
 
  useEffect(() => {
   
    if(companyDetails.companyPan !== ''){
     dispatch(GetGst(companyDetails.companyPan))
    }
  }, [companyDetails.companyPan])
 
  const [orderDetails, setOrderDetails] = useState({
    transactionType: '',
    commodity: '',
    quantity: null,
    unitOfQuantity: 'mt',
    orderValue: null,
    orderCurrency: 'INR',
    unitOfValue: 'Cr',
    supplierName: '',
    countryOfOrigin: '',
    portOfDischarge: '',
    ExpectedDateOfShipment: null,
    incoTerm: '',
  })

  const [documents, setDocuments] = useState({
    typeOfDocument: [null],
    document1: null,
    document2: null
  })


  const saveCompanyData = (name, value) => {
    const newInput = { ...companyDetails }
    newInput[name] = value
    setCompanyDetails(newInput)
  }

  const saveOrderData = (name, value) => {
    const newInput = { ...orderDetails }
    newInput[name] = value
    setOrderDetails(newInput)
  }

  const saveDocument = (e) => {
    let newDocument = {...documents}
    newDocument.typeOfDocument[e.target.name]=(e.target.value)
    setDocuments(newDocument)

  }

  const uploadDocument1 = (e) => {

    const newUploadDoc = {...documents}
    newUploadDoc.document1 = e.target.files[0]
  
    setDocuments(newUploadDoc)

  }
  const uploadDocument2 = (e) => {
    
    const newUploadDoc1 = {...documents}
    newUploadDoc1.document2 = e.target.files[0]
    
    setDocuments(newUploadDoc1)

  }

  const submitData = () => {
    //register api call
      
    const fd = new FormData()

    fd.append('companyProfile', JSON.stringify(companyDetails))
    fd.append('orderDetails', JSON.stringify(orderDetails))
    fd.append('documentType', JSON.stringify(documents.typeOfDocument))
    fd.append('document1',  documents.document1)
    fd.append('document2', documents.document2)
    // console.log(fd, "this is payload")

    dispatch(CreateBuyer(fd))
    setTimeout(() => {
      Router.push('/leads')
    }, 1500);
    
  }

  const clearData = () => {
    document.getElementById('CompanyDetailsForm').reset()
    document.getElementById('OrderDetailsForm').reset()
  }

 

  return (
    <Card className={`${styles.card} card2`}>
      <Card.Header className={styles.head_container}>
        <div className={styles.head_header}>
          <img
            className={`${styles.arrow} img-fluid`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"
          />
          <h1 className={styles.heading}>Register Your Company</h1>
        </div>
        <div>
          <button onClick={clearData} className={`${styles.clear_btn} clear_btn`}>
            Clear All
          </button>
        </div>
      </Card.Header>

      <Card.Body className={styles.body}>
        <CompanyDetails darkMode={darkMode} whatsappFunction={whatsappFunction} mobileFunction={mobileFunction} saveOrderData={saveOrderData} saveCompanyData={saveCompanyData} />
        <OrderDetails darkMode={darkMode} saveOrderData={saveOrderData}/>
        <Documents darkMode={darkMode} saveDocument={saveDocument} uploadDocument1={uploadDocument1} uploadDocument2={uploadDocument2} />
        <Terms darkMode={darkMode} submitData={submitData}  />
      </Card.Body>
    </Card>
  )
}
export default Index
