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
import { toast } from 'react-toastify'
import { handleCurrencyOrder } from 'utils/helper'
import { addPrefixOrSuffix, removePrefixOrSuffix } from '../../utils/helper'
import { debounce } from 'lodash'

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

  const { gstList } = useSelector((state) => state.buyer)

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
    turnOver: 50,
    communicationMode: [],

    turnOverUnit: 'Cr',
  })

  console.log(companyDetails.turnOver, 'companyDetails tin')
  useEffect(() => {
    const newInput = { ...companyDetails }
    newInput.companyName = gstList?.data?.companyData?.companyName
    setCompanyDetails(newInput)
    setGstListData(gstList?.data?.gstList)
  }, [gstList])

  const [gstListData, setGstListData] = useState(gstList?.data?.gstList)

  const handleCommunication = (e) => {
    let communicationArr = { ...companyDetails }
    if (e.target.checked) {
      communicationArr.communicationMode.push(e.target.name)
    } else {
      communicationArr.communicationMode.pop(e.target.name)
    }
    setCompanyDetails(communicationArr)
  }

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
  // console.log(orderDetails, "orderDetailjdefhk")

  const saveCompanyData = (name, value) => {
    const newInput = { ...companyDetails }

    if (name == 'turnOver') {
      let tempValue = Number(value)
      newInput[name] = tempValue
      console.log(tempValue, 'turn', name)
    } else {
      newInput[name] = value
    }

    setCompanyDetails(newInput)
  }

  const handleCurrOrder = () => {
    const newInput = { ...orderDetails }
    let curr = handleCurrencyOrder(
      orderDetails.orderCurrency,
      orderDetails.orderValue,
    )
    newInput.orderValue = curr
    setOrderDetails(newInput)
  }

  const saveOrderData = (name, value) => {
    const newInput = { ...orderDetails }

    if (name == 'quantity') {
      let tempVal = addPrefixOrSuffix(
        value.toString(),
        orderDetails.unitOfQuantity == 'mt'
          ? 'MT'
          : orderDetails.unitOfQuantity,
      )
      newInput[name] = tempVal
    }
    if (name == 'orderValue') {
      let tempVal = addPrefixOrSuffix(
        value.toString(),
        orderDetails?.unitOfValue == 'Millions'
          ? 'Mn'
          : orderDetails?.unitOfValue == 'Crores'
          ? 'Cr'
          : orderDetails?.unitOfValue,
      )
      newInput[name] = tempVal
    } else {
      newInput[name] = value
    }

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
  // console.log(companyDetails.transactionType,"trans")
  const submitData = () => {
    //  console.log("submit1")
    // handleCurrOrder()
    if (companyDetails.transactionType === null) {
      let toastMessage = 'Please Select a valid transaction Type'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    }
    if (companyDetails.companyName === '') {
      console.log('submit2')
      let toastMessage = 'Please Fill The Company Name'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (companyDetails.companyPan.trim().length !== 10) {
      let toastMessage = 'Please Fill A valid Company Pan'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (companyDetails.mobile.primary.number.trim().length !== 10) {
      let toastMessage = 'Please Provide a Valid Phone Number '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
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
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderDetails.commodity.trim() === '') {
      let toastMessage = 'Please Fill A valid Commodity'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (
      Number(removePrefixOrSuffix(orderDetails.quantity)) <= 0 ||
      orderDetails.quantity === null ||
      isNaN(Number(removePrefixOrSuffix(orderDetails.quantity)))
    ) {
      let toastMessage = 'Please Fill A valid quantity'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    }
    // else if (isNaN(orderDetails.quantity)) {
    //   let toastMessage = 'Please Fill A valid quantity'
    //   if (!toast.isActive(toastMessage.toUpperCase())) {
    //     toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    //   }
    //   return
    // }
    else if (
      Number(removePrefixOrSuffix(orderDetails.orderValue)) <= 0 ||
      orderDetails.orderValue === null ||
      isNaN(Number(removePrefixOrSuffix(orderDetails.orderValue)))
    ) {
      let toastMessage = 'Please Fill A valid order value'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    }

    // else if (orderDetails.supplierName.trim() === '') {
    //   let toastMessage = 'Please Fill A valid Supplier Name'
    //   if (!toast.isActive(toastMessage.toUpperCase())) {
    //     toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    //   }
    //   return
    // }
    else if (orderDetails.countryOfOrigin.trim() === '') {
      let toastMessage = 'Please Fill A valid Country Of origin'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderDetails.portOfDischarge.trim() === '') {
      let toastMessage = 'Please Fill A valid Port Of Discharge'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (!orderDetails.ExpectedDateOfShipment) {
      let toastMessage = 'Please Fill A Expected date of Shipment'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderDetails.incoTerm === '') {
      let toastMessage = 'Please Select A INCO Term'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    }
    //  else if (!documents.document1 && !documents.document1) {
    //   let toastMessage = 'Please Check Document Upload'
    //   if (!toast.isActive(toastMessage.toUpperCase())) {
    //     toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    //   }
    // }
    else {
      //  console.log("submit3")
      let docTypeArr = []
      documents.forEach((val, index) => {
        docTypeArr.push(val.typeDocument)
      })
      let sendOrder = { ...orderDetails }
      let sendOrder1 = { ...companyDetails }
      sendOrder.quantity = Number(removePrefixOrSuffix(orderDetails.quantity))
      sendOrder.orderValue = Number(
        removePrefixOrSuffix(orderDetails.orderValue) * 10000000,
      )
      sendOrder1.turnOver = Number(
        removePrefixOrSuffix(companyDetails.turnOver) * 10000000,
      )

      console.log(sendOrder.quantity, 'orderDetails12')
      const fd = new FormData()
      fd.append('companyProfile', JSON.stringify(sendOrder1))
      fd.append('orderDetails', JSON.stringify(sendOrder))
      fd.append('documentType', JSON.stringify(docTypeArr))

      documents.forEach((val, index) => {
        // console.log(val.attachDoc,"doc")
        fd.append(`documents`, val.attachDoc)
      })

      // fd.append('documents', documents.document2)
      fd.append('gstList', JSON.stringify(gstListData))
      // console.log(sendOrder, isNaN(orderDetails.quantity), 'this is payload')

      dispatch(CreateBuyer(fd))
    }
  }
  // console.log(companyDetails, 'this is payload2')
  const clearData = () => {
    document.getElementById('CompanyDetailsForm').reset()
    document.getElementById('OrderDetailsForm').reset()
    document.getElementById('documents').reset()
    document.getElementById('companyInput').value = ''

    // document.querySelector(companyInput).value = ''
  }
  console.log(
    Number(removePrefixOrSuffix(orderDetails.orderValue)) <= 0,
    orderDetails.orderValue === isNaN,
    'this is payload',
  )
  console.log(
    Number(removePrefixOrSuffix(orderDetails.quantity)) <= 0,
    'orderDetails12',
  )
  // console.log((orderDetails?.quantity?.slice(orderDetails?.quantity?.length - 2, orderDetails?.quantity?.length) === '' ), "orderDetails12")
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // console.log(companyDetails.companyName, "companyName")
    }, 3000)
    return () => clearTimeout(delayDebounceFn)
  }, [companyDetails.companyName])

  const [documents, setDocuments] = useState([
    { typeOfDocument: '', attachDoc: '' },
  ])

  const onAddDoc = (index) => {
    setDocuments([
      ...documents,
      {
        typeDocument: '',
        attachDoc: '',
      },
    ])
  }
  const addDoc = (val, index) => {
    setDocuments((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, attachDoc: val }
        }
        return obj
      })
      return newState
    })
  }
  const removeDoc = (index) => {
    setDocuments((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, attachDoc: '' }
        }
        return obj
      })
      return newState
    })
  }
  const addTypeOfDoc = (val, index) => {
    setDocuments((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, typeDocument: val }
        }
        return obj
      })
      return newState
    })
  }
  const deleteData = (index) => {
    console.log('indexssd', index)
    setDocuments([...documents.slice(0, index), ...documents.slice(index + 1)])
  }
  console.log(documents, 'documents')
  return (
    <Card className={`${styles.card}`}>
      <Card.Header className={`${styles.head_container} border-0 p-0`}>
        <div className={`${styles.head_header} align-items-center`}>
          <img
            className={`${styles.arrow} img-fluid image_arrow mr-2`}
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
          handleCommunication={handleCommunication}
          whatsappCallingCodeFunction={whatsappCallingCodeFunction}
          darkMode={darkMode}
          whatsappFunction={whatsappFunction}
          mobileFunction={mobileFunction}
          saveOrderData={saveOrderData}
          saveCompanyData={saveCompanyData}
        />
        <OrderDetails
          darkMode={darkMode}
          saveOrderData={saveOrderData}
          orderDetails={orderDetails}
        />
        <Documents
          darkMode={darkMode}
          saveDocument={saveDocument}
          uploadDocument1={uploadDocument1}
          uploadDocument2={uploadDocument2}
          documents={documents}
          onAddDoc={onAddDoc}
          deleteData={deleteData}
          addDoc={addDoc}
          removeDoc={removeDoc}
          addTypeOfDoc={addTypeOfDoc}
        />
        <Terms
          chanegTermsCheck={chanegTermsCheck}
          termsCheck={termsCheck}
          darkMode={darkMode}
          submitData={submitData}
        />
      </Card.Body>
    </Card>
  )
}
export default Index
