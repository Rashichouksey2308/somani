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

const index = () => {
  const [darkMode,setDarkMode]=useState(false)

  const dispatch= useDispatch();

  // const {document} = useSelector(state => state.buyer)



  const [companyDetails, setCompanyDetails] = useState({
    companyName: '',
    companyPan: '',
    transactionType: '',
    GST: '',
    typeOfBussiness: '',
    phoneNumber: null,
    emailId: '',
    turnOver: '',
    communicationMode: '',
    whatsappNumber: null,
  })

  useEffect(async () => {
    // const pan = companyDetails.companyPan
    // console.log(pan)
    // const response = await axios.post('http://localhost:3002/node/api/get-gst')
    // console.log(response)
    if(companyDetails.companyPan !== ''){
      dispatch(GetGst(companyDetails.companyPan))
    // const response = await axios.post('http://localhost:3002/node/api/get-gst', {pan : companyDetails.companyPan})
    }
  }, [companyDetails.companyPan])
 
  const [orderDetails, setOrderDetails] = useState({
    commodity: '',
    Quantity: null,
    orderValue: null,
    supplierName: '',
    countryOfOrigin: '',
    portOfDischarge: '',
    ExpectedDateOfShipment: null,
    IncoTerms: '',
  })

  const [documents, setDocuments] = useState({
    typeOfDocument: [null],
    document1: null,
    document2: null
  })

  // console.log(companyDetails, "companyDetails")
  // console.log(orderDetails, "companyDetails")

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
    // console.log(newDocument)
    newDocument.typeOfDocument[e.target.name]=(e.target.value)
    // console.log(newDocument,"newdocument")
    setDocuments(newDocument)

  }

  const uploadDocument1 = (e) => {

    const newUploadDoc = {...documents}
    newUploadDoc.document1 = e.target.files[0]
    // console.log(newUploadDoc,"newuploaddocument")
    setDocuments(newUploadDoc)

  }
  const uploadDocument2 = (e) => {
    
    const newUploadDoc1 = {...documents}
    newUploadDoc1.document2 = e.target.files[0]
    // console.log(newUploadDoc1,"newuploaddocument1")
    setDocuments(newUploadDoc1)

  }

  const submitData = () => {
    //register api call

    // const payload={
    //   companyProfile: companyDetails,
    //   orderDetails: orderDetails,
    //   documentType: documents.typeOfDocument,
    //   document1: documents.document1,
    //   document2: documents.document2
      
    // }
      
    const fd = new FormData()

    fd.append('companyProfile', JSON.stringify(companyDetails))
    fd.append('orderDetails', JSON.stringify(orderDetails))
    fd.append('documentType', JSON.stringify(documents.typeOfDocument))
    fd.append('document1',  documents.document1)
    fd.append('document2', documents.document2)
    // console.log(fd, "this is payload")

    dispatch(CreateBuyer(fd))
    Router.push('/leads')
  }

  const clearData = () => {
    document.getElementById('CompanyDetailsForm').reset()
    document.getElementById('OrderDetailsForm').reset()
  }

  useEffect(() => {
    // console.log('in use effect')
    GetBuyer('765e0a87-e2c3-4e0c-b5cb-f0b6082bd6ad')
  }, [])

  return (
    <Card className={`${darkMode?styles.cardDark:styles.card}`}>
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
          <button onClick={clearData}  className={`${styles.clear_btn} clear_btn`}>
            Clear All
          </button>
        </div>
      </Card.Header>

      <Card.Body className={styles.body}>
        <CompanyDetails darkMode={darkMode} saveCompanyData={saveCompanyData} />
        <OrderDetails darkMode={darkMode} saveOrderData={saveOrderData}/>
        <Documents darkMode={darkMode} saveDocument={saveDocument} uploadDocument1={uploadDocument1} uploadDocument2={uploadDocument2} />
        <Terms darkMode={darkMode} submitData={submitData} />
      </Card.Body>
    </Card>
  )
}
export default index
