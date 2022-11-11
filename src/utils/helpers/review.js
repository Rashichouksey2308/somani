import React from 'react'
import { specialCharCheck } from '../helper'
import { handleErrorToast } from './global'

export const orderValidation = (orderDetails, shipment, approvedCredit) => {
  if (orderDetails?.transactionType?.trim() === '' || orderDetails?.transactionType?.trim() == undefined) {
    handleErrorToast('Invalid Transaction Type')
    return false
  }
  if (orderDetails?.commodity?.trim() === '' || orderDetails?.commodity?.trim() == undefined) {
    handleErrorToast('the Commodity can not be Empty')
    return false
  }
  if (orderDetails?.quantity === '' || orderDetails?.quantity == undefined) {
    handleErrorToast('Quantity can not be Empty ')
    return false
  }
  if (orderDetails?.unitOfQuantity?.trim() === '' || orderDetails?.unitOfQuantity == undefined) {
    handleErrorToast('Please Provide a unit Of Quantity  ')
    return false
  }
  if (orderDetails?.orderValue === '' || orderDetails?.orderValue == undefined || isNaN(orderDetails?.orderValue)) {
    handleErrorToast('Please Check the orderValue  ')
    return false
  }

  if (orderDetails?.unitOfValue?.trim() === '' || orderDetails?.unitOfValue?.trim() == undefined) {
    handleErrorToast('Please Set the unit of value')
    return false
  }
  if (orderDetails?.supplierName?.trim() === '' || orderDetails?.supplierName?.trim() == undefined) {
    handleErrorToast('the supplier Name can not be Empty')
    return false
  }
  if (orderDetails?.countryOfOrigin?.trim() === '' || orderDetails?.countryOfOrigin?.trim() == undefined) {
    handleErrorToast('the country Of Origin can not be Empty')
    return false
  }
  if (orderDetails?.portOfDischarge?.trim() === '' || orderDetails?.portOfDischarge?.trim() == undefined) {
    handleErrorToast('the port Of Discharge can not be Empty')
    return false
  }
  if (
    orderDetails?.ExpectedDateOfShipment?.trim() === '' ||
    orderDetails?.ExpectedDateOfShipment?.trim() == undefined
  ) {
    handleErrorToast('the Expected Date Of Shipment can not be Empty')
    return false
  }
  if (orderDetails?.incoTerm?.trim() === '' || orderDetails?.incoTerm?.trim() == undefined) {
    handleErrorToast('the incoTerm can not be Empty')
    return false
  }
  if (orderDetails?.grade?.trim() === '' || orderDetails?.grade?.trim() == undefined) {
    handleErrorToast('the grade can not be Empty')
    return false
  }
  if (orderDetails?.tolerance === '' || orderDetails?.tolerance == undefined) {
    handleErrorToast('the tolerance can not be Empty')
    return false
  }
  if (orderDetails?.hsnCode === '' || orderDetails?.hsnCode == undefined || !specialCharCheck(orderDetails?.hsnCode)) {
    handleErrorToast('HSN CODE IS MANDATORY & SPECIAL CHARACTERS ARE NOT ALLOWED')
    return false
  }
  if (shipment?.shipmentType === '' || shipment?.shipmentType == undefined) {
    handleErrorToast('add shipment Type')
    return false
  }
  if (shipment?.loadPort.toDate === '' || shipment?.loadPort.toDate == undefined) {
    handleErrorToast('add load Port  to')
    return false
  }
  if (shipment?.loadPort.fromDate === '' || shipment?.loadPort.fromDate == undefined) {
    handleErrorToast('add load Port from date')
    return false
  }
  if (shipment?.ETAofDischarge.fromDate === '' || shipment?.ETAofDischarge.fromDate == undefined) {
    handleErrorToast('add eta of discharge from')
    return false
  }
  if (shipment?.ETAofDischarge.toDate === '' || shipment?.ETAofDischarge.toDate == undefined) {
    handleErrorToast('add eta of discharge to')
    return false
  }
  if (shipment?.lastDateOfShipment === '' || shipment?.lastDateOfShipment == undefined) {
    handleErrorToast('add last date of shipment')
    return false
  }
  if (shipment?.portOfLoading === '' || shipment?.portOfLoading == undefined) {
    handleErrorToast('add port Of Loading')
    return false
  }
  if (approvedCredit?.approvedOrderValue > approvedCredit?.approvedCreditValue) {
    handleErrorToast('Order Value Cannot Be Greater Than Limit Value')
    return false
  }
  return true
}

export const rtrnChartIndiaction = (latest, previous, last) => {
  if (
    isNaN(Number(last)) ||
    last === null ||
    (!last && last !== 0) ||
    last === undefined ||
    isNaN(Number(previous)) ||
    previous === null ||
    (!previous && previous !== 0) ||
    previous === undefined ||
    isNaN(Number(latest)) ||
    latest === null ||
    (!latest && latest !== 0) ||
    latest === undefined
  ) {
    return <img src="/static/noTrend.svg" alt="Loss" className="img-fluid"/>
  } else {
    if (last === previous && previous < latest) {
      return <img src="/static/trend-green-311.svg" alt="Profit" className="img-fluid"/>
    }
    if (last < previous && previous < latest) {
      return <img src="/static/trend-green-321.svg" alt="Profit" className="img-fluid"/>
    }

    if (last > previous && previous < latest) {
      return <img src="/static/trend-green-312.svg" alt="Profit" className="img-fluid"/>
    }

    if (last === previous && previous > latest) {
      return <img src="/static/trend-red-123.svg" alt="Loss" className="img-fluid"/>
    }
    if (last > previous && previous < latest) {
      return <img src="/static/trend-orange-212.svg" alt="Profit" className="img-fluid"/>
    }
    if (last < previous && previous > latest) {
      return <img src="/static/trend-orange-121.svg" alt="Profit" className="img-fluid"/>
    }

    if (last === previous && previous === latest) {
      return <img src="/static/trend-orange-333.svg" alt="Profit" className="img-fluid"/>
    }

    if (last === previous && previous === latest && last !== undefined) {
      return <img src="/static/trend-orange-121.svg" alt="Profit" className="img-fluid"/>
    }

    if (last > previous && previous > latest) {
      return <img src="/static/trend-red-123.svg" alt="Profit" className="img-fluid"/>
    }

    if (last > previous && previous > latest) {
      return <img src="/static/trend-red-121.svg" alt="Profit" className="img-fluid"/>
    }
    if (last > previous && previous === latest) {
      return <img src="/static/trend-red-113.svg" alt="Loss" className="img-fluid"/>
    }
  }
}
