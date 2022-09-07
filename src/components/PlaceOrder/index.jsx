/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import NewOrder from '../NewOrder'
import NewShipmentDetails from '../NewShipmentDetails'
import CommonSave from '../CommonSave'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { PlaceNewOrder } from 'redux/newOrder/action'
import { handleCurrencyOrder, removePrefixOrSuffix } from 'utils/helper'
import _get from 'lodash/get'
// import {
//   GetAllBuyer,
//   GetAllOrders,
//   GetBuyer,
// } from '../../redux/registerBuyer/action'
import { GetCreditLimit } from '../../redux/companyDetail/action'
import { GetOrders } from '../../redux/registerBuyer/action'

const Index = () => {
  const dispatch = useDispatch()

  const { singleOrder } = useSelector((state) => state.buyer)
  const { creditData } = useSelector((state) => state.companyDetails)

  let singleOrderId = _get(singleOrder, 'data[0].company._id', '')

  const [orderData, setOrderData] = useState({
    transactionType: 'Import',
    commodity: '',
    quantity: null,
    unitOfQuantity: 'MT',
    orderValue: null,
    orderCurrency: '',
    unitOfValue: 'Crores',
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

  useEffect(() => {
    let compId = sessionStorage.getItem('companyID')
    dispatch(GetOrders(`?company=${compId}`))
    dispatch(GetCreditLimit({ companyId: compId }))
  }, [])
  const saveOrderData = (name, value) => {
    const newInput = { ...orderData }
    newInput[name] = value

    setOrderData(newInput)
  }
  console.log(orderData, 'stat')

  const handleCurr = () => {
    const newInput = { ...orderData }
    let currVal = handleCurrencyOrder(
      orderData.unitOfValue,
      orderData.orderValue,
    )
    newInput.orderValue = currVal
    setOrderData(newInput)
  }

  const saveShipmentData = (name, value) => {
    console.log(name, value, 'test')
    const newInput = { ...shipment }
    const namesplit = name.split('.')
    namesplit.length > 1
      ? (newInput[namesplit[0]][namesplit[1]] = value)
      : (newInput[name] = value)
    setShipment(newInput)
  }

  const onOrderSave = () => {
    handleCurr()
    if (orderData?.transactionType?.trim() === '') {
      let toastMessage = 'Invalid Transaction Type'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderData?.commodity?.trim() === '') {
      let toastMessage = 'Commodity can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderData?.quantity === '') {
      let toastMessage = 'Quantity can not be Empty '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderData?.unitOfQuantity?.trim() === '') {
      let toastMessage = 'Please Provide unit Of Quantity'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderData?.orderValue === '') {
      let toastMessage = 'Please check the Order value  '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    }
    // else if (orderData?.orderCurrency?.trim() === '') {
    //   let toastMessage = 'Order Currency cannot be empty'
    //   if (!toast.isActive(toastMessage.toUpperCase())) {
    //     toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    //   }
    //   return
    // }
    else if (orderData?.unitOfValue?.trim() === '') {
      let toastMessage = 'Please set the unit of value'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderData?.supplierName?.trim() === '') {
      let toastMessage = 'Supplier Name cannot be empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderData.countryOfOrigin.trim() === '') {
      let toastMessage = 'Country Of Origin can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderData?.portOfDischarge?.trim() === '') {
      let toastMessage = 'Port Of Discharge can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderData?.ExpectedDateOfShipment?.trim() === '') {
      let toastMessage = 'Expected Date Of Shipment can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderData?.incoTerm?.trim() === '') {
      let toastMessage = 'the incoTerm can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderData?.grade?.trim() === '') {
      let toastMessage = 'Grade can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderData?.tolerance === '') {
      let toastMessage = 'Tolerance can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderData?.transactionPeriodDays === '') {
      let toastMessage = 'Transaction Period Days can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (orderData?.manufacturerName?.trim() === '') {
      let toastMessage = 'Manufacturer Name can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else {
      let orderDataNew = { ...orderData }
      orderDataNew.quantity = removePrefixOrSuffix(orderData.quantity)
      orderDataNew.orderValue =
        removePrefixOrSuffix(orderData.orderValue) * 10000000
      orderDataNew.tolerance = removePrefixOrSuffix(orderData.tolerance)

      const obj = {
        orderDetails: { ...orderDataNew, shipmentDetail: { ...shipment } },
        company: singleOrderId,
      }
      dispatch(PlaceNewOrder(obj))
    }
  }

  const clearData = () => {
    document.getElementById('ShipmentDetailsForm').reset()
    document.getElementById('OrderDetailsForm').reset()
  }

  return (
    <div className="container-fluid p-0">
      <div className={`${styles.card} accordion_body bg-transparent`}>
        <div className={`${styles.head_container}`}>
          <div className={`${styles.head_header} align-items-center`}>
            <img
              className={`${styles.arrow} img-fluid mr-2 image_arrow`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={styles.heading}>Place a New Order</h1>
          </div>
          <div>
            <button
              onClick={() => clearData()}
              className={`${styles.clear_btn} clear_btn`}
            >
              Clear All
            </button>
          </div>
        </div>

        <div className={`${styles.main} card border-color`}>
          <div
            className={`${styles.head_container} m-0 border_color align-items-center card-header head_container justify-content-between d-flex bg-transparent`}
          >
            <h3 className={`${styles.heading} mb-0`}>Limit Details</h3>
          </div>

          <div className={`${styles.dashboard_form} mt-2 mb-4`}>
            <div className="row">
              <div className="col-md-2 col-sm-4">
                <div className={`${styles.label} text`}>Total Limit</div>
                <span className={styles.value}>
                  {(creditData?.data?.totalLimit ?? '')?.toLocaleString()}
                </span>
              </div>
              <div className="col-md-2 col-sm-4">
                <div className={`${styles.label} text`}>Utilised Limit</div>
                <span className={styles.value}>
                  {(creditData?.data?.utilizedLimit ?? '')?.toLocaleString()}
                </span>
              </div>
              <div className="col-md-2 col-sm-4">
                <div className={`${styles.label} text`}>Available Limit </div>
                <span className={styles.value}>
                  {(creditData?.data?.availableLimit ?? '')?.toLocaleString()}
                </span>
              </div>
              <div className="col-md-2 col-sm-4">
                <div className={`${styles.label} text`}>Limit Expiry Date</div>
                <span className={styles.value}>
                  {creditData?.data?.limitExpiry?.split('T')[0]}
                </span>
              </div>
              <div className="col-md-2 col-sm-4">
                <div className={`${styles.label} text`}>Last Order Value</div>
                <span className={styles.value}>
                  {(creditData?.lastOrder?.orderValue ?? '')?.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
        <NewOrder orderData={orderData} saveOrderData={saveOrderData} />
        <NewShipmentDetails
          shipment={shipment}
          saveShipmentData={saveShipmentData}
        />
        <CommonSave onSave={onOrderSave} />
      </div>
    </div>
  )
}
export default Index
