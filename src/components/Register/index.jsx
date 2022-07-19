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
import axios from 'axios'
import { toast } from 'react-toastify'



function Index() {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    if (
      localStorage.getItem('darkMode') == 'true' ||
      localStorage.getItem('darkMode') == true
    ) {
      // console.log('this')
      setDarkMode(true)
    } else {
      // console.log('this2')
      setDarkMode(false)
    }
  }, [])

  const dispatch = useDispatch()
  const [termsCheck, setTermsCheck] = useState(false)
  const [companyDetails, setCompanyDetails] = useState({
    companyName: '',
    companyPan: '',
    GST: '',
    typeOfBusiness: '',
    mobile: {
      primary: {
        callingCode: '91',
        number: '',
      },
      whatsapp: {
        callingCode: '91',
        number: '',
      },
    },
    email: '',
    turnOver: '',
    communicationMode: [null],

    turnOverUnit: 'Cr',
  })
  console.log(companyDetails, "companyDetailscompanyDetails")


  const mobileFunction = (e) => {
    const newObj = { ...companyDetails }
    newObj.mobile.primary.number = e.target.value
    setCompanyDetails(newObj)
  }

  const mobileCallingCodeFunction = (e) => {
    const newObj = { ...companyDetails }
    newObj.mobile.primary.callingCode = e.target.value
    setCompanyDetails(newObj)
  }

  const whatsappFunction = (e) => {
    const newObj = { ...companyDetails }
    newObj.mobile.whatsapp.number = e.target.value
    setCompanyDetails(newObj)
  }

  const whatsappCallingCodeFunction = (e) => {
    const newObj = { ...companyDetails }
    newObj.mobile.whatsapp.callingCode = e.target.value
    setCompanyDetails(newObj)
  }

  useEffect(() => {
    if (companyDetails.companyPan !== '') {
      dispatch(GetGst(companyDetails.companyPan))
    }
  }, [companyDetails.companyPan])

  const [orderDetails, setOrderDetails] = useState({
    transactionType: 'Import',
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
  // console.log(orderDetails, "orderDetailjdefhk")

  const [documents, setDocuments] = useState({
    typeOfDocument: [null],
    document1: null,
    document2: null,
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
    let newDocument = { ...documents }
    newDocument.typeOfDocument[e.target.name] = e.target.value
    setDocuments(newDocument)
  }

  const uploadDocument1 = (e) => {
    const newUploadDoc = { ...documents }
    newUploadDoc.document1 = e.target.files[0]

    setDocuments(newUploadDoc)
  }
  const uploadDocument2 = (e) => {
    const newUploadDoc1 = { ...documents }
    newUploadDoc1.document2 = e.target.files[0]

    setDocuments(newUploadDoc1)
  }

  const chanegTermsCheck = () => {
    setTermsCheck(!termsCheck)
  }


  const submitData = () => {
    if (companyDetails.companyName.trim() === '') {
      let toastMessage = 'Please Fill The Company Name'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (companyDetails.companyPan.trim().length !== 10) {
      let toastMessage = 'Please Fill A valid Company Pan'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    }
    else if (companyDetails.transactionType === null) {
      let toastMessage = 'Please Select a valid transaction Type'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (companyDetails.mobile.primary.number.trim().length !== 10) {
      let toastMessage = 'Please Provide a Valid Phone Number '
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (
      !String(companyDetails.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      let toastMessage = 'Please Fill A valid Email Id'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails.commodity.trim() === '') {
      let toastMessage = 'Please Fill A valid Commodity'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails.quantity === null) {
      let toastMessage = 'Please Fill A valid quantity'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    }
     else if (orderDetails.orderValue === null) {
      let toastMessage = 'Please Fill A valid order value'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    }

    // else if (orderDetails.supplierName.trim() === '') {
    //   let toastMessage = 'Please Fill A valid Supplier Name'
    //   if (!toast.isActive(toastMessage)) {
    //     toast.error(toastMessage, { toastId: toastMessage })
    //   }
    //   return
    // }
    else if (orderDetails.countryOfOrigin.trim() === '') {
      let toastMessage = 'Please Fill A valid Country Of origin'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails.portOfDischarge.trim() === '') {
      let toastMessage = 'Please Fill A valid Port Of Discharge'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (!orderDetails.ExpectedDateOfShipment) {
      let toastMessage = 'Please Fill A Expected date of Shipment'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails.incoTerm === '') {
      let toastMessage = 'Please Select A INCO Term'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    }
    //  else if (!documents.document1 && !documents.document1) {
    //   let toastMessage = 'Please Check Document Upload'
    //   if (!toast.isActive(toastMessage)) {
    //     toast.error(toastMessage, { toastId: toastMessage })
    //   }
    // }
    else {
      const fd = new FormData()
      fd.append('companyProfile', JSON.stringify(companyDetails))
      fd.append('orderDetails', JSON.stringify(orderDetails))
      fd.append('documentType', JSON.stringify(documents.typeOfDocument))
      fd.append('document1', documents.document1)
      fd.append('document2', documents.document2)
      //console.log(fd, "this is payload")

      dispatch(CreateBuyer(fd))
      
    }
  }
  const clearData = () => {
    document.getElementById('CompanyDetailsForm').reset()
    document.getElementById('OrderDetailsForm').reset()
  }




  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // console.log(companyDetails.companyName, "companyName")

    }, 3000)
    return () => clearTimeout(delayDebounceFn)
  }, [companyDetails.companyName])

  return (
    <Card className={`${styles.card} card2`}>
      <Card.Header className={`${styles.head_container} border-0 pr-0 pl-2`}>
        <div className={styles.head_header}>
          <img
            className={`${styles.arrow} img-fluid`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"
          />
          <h1 className={styles.heading}>Register Your Company</h1>
        </div>
        <div>
          <button
            onClick={clearData}
            className={`${styles.clear_btn} clear_btn`}
          >
            Clear All
          </button>
        </div>
      </Card.Header>

      <Card.Body className={styles.body}>
        <CompanyDetails
          mobileCallingCodeFunction={mobileCallingCodeFunction}
          whatsappCallingCodeFunction={whatsappCallingCodeFunction}
          darkMode={darkMode}
          whatsappFunction={whatsappFunction}
          mobileFunction={mobileFunction}
          saveOrderData={saveOrderData}
          saveCompanyData={saveCompanyData}
        />
        <OrderDetails darkMode={darkMode} saveOrderData={saveOrderData} />
        <Documents
          darkMode={darkMode}
          saveDocument={saveDocument}
          uploadDocument1={uploadDocument1}
          uploadDocument2={uploadDocument2}
        />
        <Terms chanegTermsCheck={chanegTermsCheck} termsCheck={termsCheck} darkMode={darkMode} submitData={submitData} />
      </Card.Body>
    </Card>
  )
}
export default Index
