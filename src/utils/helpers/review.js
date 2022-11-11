import React from 'react';
import { handleErrorToast } from './global';

export const orderValidation = (orderDetails, shipment, approvedCredit) => {
  if (orderDetails?.transactionType?.trim() === '' || orderDetails?.transactionType?.trim() == undefined) {
    handleErrorToast('Invalid Transaction Type');
    return false;
  }
  if (orderDetails?.commodity?.trim() === '' || orderDetails?.commodity?.trim() == undefined) {
    handleErrorToast('the Commodity can not be Empty');
    return false;
  }
  if (orderDetails?.quantity === '' || orderDetails?.quantity == undefined) {
    handleErrorToast('Quantity can not be Empty ');
    return false;
  }
  if (orderDetails?.unitOfQuantity?.trim() === '' || orderDetails?.unitOfQuantity == undefined) {
    handleErrorToast('Please Provide a unit Of Quantity  ');
    return false;
  }
  if (orderDetails?.orderValue === '' || orderDetails?.orderValue == undefined || isNaN(orderDetails?.orderValue)) {
    handleErrorToast('Please Check the orderValue  ');
    return false;
  }

  if (orderDetails?.unitOfValue?.trim() === '' || orderDetails?.unitOfValue?.trim() == undefined) {
    handleErrorToast('Please Set the unit of value');
    return false;
  }
  if (orderDetails?.supplierName?.trim() === '' || orderDetails?.supplierName?.trim() == undefined) {
    handleErrorToast('the supplier Name can not be Empty');
    return false;
  }
  if (orderDetails?.countryOfOrigin?.trim() === '' || orderDetails?.countryOfOrigin?.trim() == undefined) {
    handleErrorToast('the country Of Origin can not be Empty');
    return false;
  }
  if (orderDetails?.portOfDischarge?.trim() === '' || orderDetails?.portOfDischarge?.trim() == undefined) {
    handleErrorToast('the port Of Discharge can not be Empty');
    return false;
  }
  if (
    orderDetails?.ExpectedDateOfShipment?.trim() === '' ||
    orderDetails?.ExpectedDateOfShipment?.trim() == undefined
  ) {
    handleErrorToast('the Expected Date Of Shipment can not be Empty');
    return false;
  }
  if (orderDetails?.incoTerm?.trim() === '' || orderDetails?.incoTerm?.trim() == undefined) {
    handleErrorToast('the incoTerm can not be Empty');
    return false;
  }
  if (orderDetails?.grade?.trim() === '' || orderDetails?.grade?.trim() == undefined) {
    handleErrorToast('the grade can not be Empty');
    return false;
  }
  if (orderDetails?.tolerance === '' || orderDetails?.tolerance == undefined) {
    handleErrorToast('the tolerance can not be Empty');
    return false;
  }
  if (orderDetails?.hsnCode === '' || orderDetails?.hsnCode == undefined) {
    handleErrorToast('HSN CODE IS MANDATORY & CANNOT BE GREATER THAN 10 CHARACTERS');
    return false;
  }
  if (shipment?.shipmentType === '' || shipment?.shipmentType == undefined) {
    handleErrorToast('add shipment Type');
    return false;
  }
  if (shipment?.loadPort.toDate === '' || shipment?.loadPort.toDate == undefined) {
    handleErrorToast('add load Port  to');
    return false;
  }
  if (shipment?.loadPort.fromDate === '' || shipment?.loadPort.fromDate == undefined) {
    handleErrorToast('add load Port from date');
    return false;
  }
  if (shipment?.ETAofDischarge.fromDate === '' || shipment?.ETAofDischarge.fromDate == undefined) {
    handleErrorToast('add eta of discharge from');
    return false;
  }
  if (shipment?.ETAofDischarge.toDate === '' || shipment?.ETAofDischarge.toDate == undefined) {
    handleErrorToast('add eta of discharge to');
    return false;
  }
  if (shipment?.lastDateOfShipment === '' || shipment?.lastDateOfShipment == undefined) {
    handleErrorToast('add last date of shipment');
    return false;
  }
  if (shipment?.portOfLoading === '' || shipment?.portOfLoading == undefined) {
    handleErrorToast('add port Of Loading');
    return false;
  }
  if (approvedCredit?.approvedOrderValue > approvedCredit?.approvedCreditValue) {
    handleErrorToast('Order Value Cannot Be Greater Than Limit Value');
    return false;
  }
  return true;
};

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
    return <img src="/static/noTrend.svg" alt="Loss" className="img-fluid" />;
  } else {
    if (last === previous && previous < latest) {
      return <img src="/static/trend-green-311.svg" alt="Profit" className="img-fluid" />;
    }
    if (last < previous && previous < latest) {
      return <img src="/static/trend-green-321.svg" alt="Profit" className="img-fluid" />;
    }

    if (last > previous && previous < latest) {
      return <img src="/static/trend-green-312.svg" alt="Profit" className="img-fluid" />;
    }

    if (last === previous && previous > latest) {
      return <img src="/static/trend-red-123.svg" alt="Loss" className="img-fluid" />;
    }
    if (last > previous && previous < latest) {
      return <img src="/static/trend-orange-212.svg" alt="Profit" className="img-fluid" />;
    }
    if (last < previous && previous > latest) {
      return <img src="/static/trend-orange-121.svg" alt="Profit" className="img-fluid" />;
    }

    if (last === previous && previous === latest) {
      return <img src="/static/trend-orange-333.svg" alt="Profit" className="img-fluid" />;
    }

    if (last === previous && previous === latest && last !== undefined) {
      return <img src="/static/trend-orange-121.svg" alt="Profit" className="img-fluid" />;
    }

    if (last > previous && previous > latest) {
      return <img src="/static/trend-red-123.svg" alt="Profit" className="img-fluid" />;
    }

    if (last > previous && previous > latest) {
      return <img src="/static/trend-red-121.svg" alt="Profit" className="img-fluid" />;
    }
    if (last > previous && previous === latest) {
      return <img src="/static/trend-red-113.svg" alt="Loss" className="img-fluid" />;
    }
  }
};

export const addressValidtion = (data) => {
  if (data.addressType === null || data.addressType === '' || data.addressType === undefined) {
    handleErrorToast('Please Select addresss Type');
    return false;
  }
  if (data.pinCode === null || data.pinCode === '' || data.pinCode === undefined) {
    handleErrorToast('Please add pin code');
    return false;
  }
  // if (data.state === null || data.state === '' || data.state === undefined) {
  //   handleErrorToast('Please add state');
  //   return false;
  // }
  if (data.city === null || data.city === '' || data.city === undefined) {
    handleErrorToast('Please add city');
    return false;
  }
  if (data.email === null || data.email === '' || data.email === undefined) {
    handleErrorToast('Please add email');

    return false;
  }
  if (
    !String(data.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  ) {
    handleErrorToast('Please add valid email id');
    return false;
  }
  if (data.email === null || data.email === '' || data.email === undefined) {
    handleErrorToast('Please add email');

    return false;
  }
  if (data.fullAddress === null || data.fullAddress === '' || data.fullAddress === undefined) {
    handleErrorToast('Please add address');
    return false;
  }
  return true;
};

export const bankValidtion = (data, countryName) => {

  if(countryName == 'India') {
  if (data.Bank_Name === null || data.Bank_Name === '' || data.Bank_Name === undefined) {
    handleErrorToast('Please add bank name');
    return false;
  }
  if (data.IFSC === null || data.IFSC === '' || data.IFSC === undefined) {
    handleErrorToast('Please add ifsc');
    return false;
  }
  if (data.Account_No === null || data.Account_No === '' || data.Account_No === undefined) {
    handleErrorToast('Please add account no.');
    return false;
  }
  return true;
}else {
  if (data.Bank_Name === null || data.Bank_Name === '' || data.Bank_Name === undefined) {
    handleErrorToast('Please add bank name');
    return false;
  }
  if (data.Swift_Code === null || data.Swift_Code === '' || data.Swift_Code === undefined) {
    handleErrorToast('Please add swift code');
    return false;
  }
  if (data.Account_No === null || data.Account_No === '' || data.Account_No === undefined) {
    handleErrorToast('Please add account no.');
    return false;
  }
  return true;
}
};

export const portValidtion = (data) => {
  if (data.Country === null || data.Country === '' || data.Country === undefined) {
    handleErrorToast('Please Select country');
    return false;
  }
  if (data.Port_Name === null || data.Port_Name === '' || data.Port_Name === undefined) {
    handleErrorToast('Please add Port Name');
    return false;
  }
  if (data.State === null || data.State === '' || data.State === undefined) {
    handleErrorToast('Please add state');
    return false;
  }
  if (data.Container_Handling === null || data.Container_Handling === '' || data.Container_Handling === undefined) {
    handleErrorToast('Please select Container Handling');
    return false;
  }
  if (data.Approved === null || data.Approved === '' || data.Approved === undefined) {
    handleErrorToast('Please select Approved or not');
    return false;
  }
  return true;

};
