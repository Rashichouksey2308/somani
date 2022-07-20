/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import NewOrder from '../NewOrder'
import NewShipmentDetails from '../NewShipmentDetails'
import CommonSave from '../CommonSave'
import { toast } from 'react-toastify'

const Index = () => {
  const [orderDetails, setOrderDetails] = useState({
    transactionType: '',
    commodity: '',
    quantity: null,
    unitOfQuantity: '',
    orderValue: null,
    orderCurrency: '',
    unitOfValue: '',
    supplierName: '',
    countryOfOrigin: '',
    portOfDischarge: '',
    ExpectedDateOfShipment: '',
    incoTerm: '',
    grade: '',
    tolerance: '',
    transactionPeriodDays: '',
    manufacturerName: '',
  })

  const [shipment, setShipment] = useState({
    ETAofDischarge: {
      fromDate: '',
      toDate: '',
    },
    lastDateOfShipment: '',
    loadPort: {
      fromDate: '',
      toDate: '',
    },
    shipmentType: '',
  })

  const saveOrderData = (name, value) => {
    const newInput = { ...orderDetails }
    newInput[name] = value
    // console.log(newInput)
    setOrderDetails(newInput)
  }

  const saveShipmentData = (name, value) => {
    const newInput = { ...shipment }
    const namesplit = name.split('.')
    namesplit.length > 1
      ? (newInput[namesplit[0]][namesplit[1]] = value)
      : (newInput[name] = value)
    setShipment(newInput)
  }

  const onOrderSave = () => {
    if (orderDetails?.transactionType?.trim() === '') {
      let toastMessage = 'Invalid Transaction Type'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.commodity?.trim() === '') {
      let toastMessage = 'Commodity can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.quantity === '') {
      let toastMessage = 'Quantity can not be Empty '
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.unitOfQuantity?.trim() === '') {
      let toastMessage = 'Please Provide unit Of Quantity'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.orderValue === '') {
      let toastMessage = 'Please check the Order value  '
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.orderCurrency?.trim() === '') {
      let toastMessage = 'Order Currency cannot be empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.unitOfValue?.trim() === '') {
      let toastMessage = 'Please set the unit of value'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.supplierName?.trim() === '') {
      let toastMessage = 'Supplier Name cannot be empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails.countryOfOrigin.trim() === '') {
      let toastMessage = 'Country Of Origin can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.portOfDischarge?.trim() === '') {
      let toastMessage = 'Port Of Discharge can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.ExpectedDateOfShipment?.trim() === '') {
      let toastMessage = 'Expected Date Of Shipment can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.incoTerm?.trim() === '') {
      let toastMessage = 'the incoTerm can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.grade?.trim() === '') {
      let toastMessage = 'Grade can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.tolerance === '') {
      let toastMessage = 'Tolerance can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.transactionPeriodDays === '') {
      let toastMessage = 'Transaction Period Days can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.manufacturerName?.trim() === '') {
      let toastMessage = 'Manufacturer Name can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else {
      if (orderDetails.unitOfValue === 'Cr' || 'Crores') {
        const obj = {
          ...orderDetails,
          shipmentDetail: { ...shipment },
          // company: singleOrder._id,
          orderValue: orderDetails.orderValue * 10000000,
        }
        dispatch(UpdateOrderShipment(obj))
      } else {
        const obj = {
          ...orderDetails,
          shipmentDetail: { ...shipment },
          order: orderList._id,
        }
        dispatch(UpdateOrderShipment(obj))
      }
    }
  }

  return (
    <div className={`${styles.card} accordion_body container-fluid`}>
      <div className={styles.head_container}>
        <div className={styles.head_header}>
          <img
            className={`${styles.arrow} img-fluid`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"
          />
          <h1 className={styles.heading}>Place a New Order</h1>
        </div>
        <div>
          <button className={`${styles.clear_btn} clear_btn`}>Clear All</button>
        </div>
      </div>

      <div className={`${styles.main} card border-color`}>
        <div
          className={`${styles.head_container} border_color card-header head_container justify-content-between d-flex bg-transparent`}
        >
          <h3 className={`${styles.heading} mb-0`}>Limit Details</h3>
        </div>

        <div className={`${styles.dashboard_form} mt-2 mb-4`}>
          <div className="row">
            <div className="col-md-2 col-sm-4">
              <div className={`${styles.label} text`}>Total Limit</div>
              <span className={styles.value}>20 CR</span>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className={`${styles.label} text`}>Utilised Limit</div>
              <span className={styles.value}>15 CR</span>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className={`${styles.label} text`}>Available Limit </div>
              <span className={styles.value}>5 CR</span>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className={`${styles.label} text`}>Limit Expiry Date</div>
              <span className={styles.value}>22-02-2022</span>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className={`${styles.label} text`}>Last Order Value</div>
              <span className={styles.value}>2 CR</span>
            </div>
          </div>
        </div>
      </div>
      <NewOrder saveOrderData={saveOrderData} />
      <NewShipmentDetails saveShipmentData={saveShipmentData} />
      <CommonSave />
    </div>
  )
}
export default Index
