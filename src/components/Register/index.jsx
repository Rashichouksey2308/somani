/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import CompanyDetails from '../CompanyDetails';
import OrderDetails from '../OrderDetails';
import Documents from '../Documents';
import Terms from '../Terms';
import { Card } from 'react-bootstrap';
import Router from 'next/router';
import { CreateBuyer, GetGst } from 'redux/registerBuyer/action';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { handleCurrencyOrder } from 'utils/helper';
import { removePrefixOrSuffix } from '../../utils/helper';
import { getCommodities, getCountries, getDocuments, getPorts } from '../../redux/masters/action';

function Index() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('darkMode') == 'true' || localStorage.getItem('darkMode') == true) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getPorts());
    dispatch(getCommodities());
    dispatch(getDocuments());
  }, []);
  const { createdBuyerResponse } = useSelector((state) => state.buyer);
  const { getPortsMasterData } = useSelector((state) => state.MastersData);
  const { getCountriesMasterData } = useSelector((state) => state.MastersData);
  const { getCommoditiesMasterData } = useSelector((state) => state.MastersData);
  const { getDocumentsMasterData } = useSelector((state) => state.MastersData);

  const { gstList } = useSelector((state) => state.buyer);

  const dispatch = useDispatch();

  const [termsCheck, setTermsCheck] = useState(false);

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
  });

  useEffect(() => {
    const newInput = { ...companyDetails };
    newInput.companyName = gstList?.data?.companyData?.companyName;
    setCompanyDetails(newInput);
    setGstListData(gstList?.data?.gstList);
  }, [gstList]);

  const [gstListData, setGstListData] = useState(gstList?.data?.gstList);

  const handleCommunication = (e) => {
    let communicationArr = { ...companyDetails };
    if (e.target.checked) {
      communicationArr.communicationMode.push(e.target.name);
    } else {
      communicationArr.communicationMode.pop(e.target.name);
    }
    setCompanyDetails(communicationArr);
  };

  const mobileFunction = (e) => {
    const newObj = { ...companyDetails };
    newObj.mobile.primary.number = e.target.value;
    setCompanyDetails(newObj);
  };

  const mobileCallingCodeFunction = (e) => {
    const newObj = { ...companyDetails };
    newObj.mobile.primary.callingCode = e.target.value;
    setCompanyDetails(newObj);
  };

  const whatsappFunction = (e) => {
    const newObj = { ...companyDetails };
    newObj.mobile.whatsapp.number = e.target.value;
    setCompanyDetails(newObj);
  };

  const whatsappCallingCodeFunction = (e) => {
    const newObj = { ...companyDetails };
    newObj.mobile.whatsapp.callingCode = e.target.value;
    setCompanyDetails(newObj);
  };

  useEffect(() => {
    if (companyDetails.companyPan !== '') {
      dispatch(GetGst(companyDetails.companyPan));
    }
  }, [companyDetails.companyPan]);

  const [orderDetails, setOrderDetails] = useState({
    transactionType: 'Import',
    commodity: '',
    quantity: '',
    unitOfQuantity: 'MT',
    orderValue: '',
    orderCurrency: 'INR',
    unitOfValue: 'Cr',
    supplierName: '',
    countryOfOrigin: '',
    portOfDischarge: '',
    ExpectedDateOfShipment: null,
    incoTerm: '',
  });

  const saveCompanyData = (name, value) => {
    const newInput = { ...companyDetails };

    if (name == 'turnOver') {
      let tempValue = Number(value);
      newInput[name] = tempValue;
    } else {
      newInput[name] = value;
    }

    setCompanyDetails(newInput);
  };

  const handleCurrOrder = () => {
    const newInput = { ...orderDetails };
    let curr = handleCurrencyOrder(orderDetails.orderCurrency, orderDetails.orderValue);
    newInput.orderValue = curr;
    setOrderDetails(newInput);
  };

  const saveOrderData = (name, value) => {
    const newInput = { ...orderDetails };

    newInput[name] = value;

    setOrderDetails(newInput);
  };

  const saveDocument = (e) => {
    let newDocument = { ...documents };
    newDocument.typeOfDocument[e.target.name] = e.target.value;
    setDocuments(newDocument);
  };

  const uploadDocument1 = (e) => {
    const newUploadDoc = { ...documents };
    newUploadDoc.document1 = e.target.files[0];

    setDocuments(newUploadDoc);
  };
  const uploadDocument2 = (e) => {
    const newUploadDoc1 = { ...documents };
    newUploadDoc1.document2 = e.target.files[0];

    setDocuments(newUploadDoc1);
  };

  const chanegTermsCheck = () => {
    setTermsCheck(!termsCheck);
  };

  const submitData = () => {
    if (companyDetails.transactionType === null) {
      let toastMessage = 'Please Select a valid transaction Type';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (companyDetails.companyName === '') {
      let toastMessage = 'Please Fill The Company Name';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    } else if (companyDetails.companyPan.trim().length !== 10) {
      let toastMessage = 'Please Fill A valid Company Pan';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    } else if (companyDetails.mobile.primary.number.trim().length !== 10) {
      let toastMessage = 'Please Provide a Valid Phone Number ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    } else if (
      !String(companyDetails.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      let toastMessage = 'Please Fill A valid Email Id';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    } else if (orderDetails.commodity.trim() === '') {
      let toastMessage = 'Please Fill A valid Commodity';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    } else if (
      Number(removePrefixOrSuffix(orderDetails.quantity)) <= 0 ||
      orderDetails.quantity === null ||
      isNaN(Number(removePrefixOrSuffix(orderDetails.quantity)))
    ) {
      let toastMessage = 'Please Fill A valid quantity';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    } else if (
      Number(removePrefixOrSuffix(orderDetails.orderValue)) <= 0 ||
      orderDetails.orderValue === null ||
      isNaN(Number(removePrefixOrSuffix(orderDetails.orderValue)))
    ) {
      let toastMessage = 'Please Fill A valid order value';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    } else if (orderDetails.countryOfOrigin.trim() === '') {
      let toastMessage = 'Please Fill A valid Country Of origin';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    } else if (orderDetails.portOfDischarge.trim() === '') {
      let toastMessage = 'Please Fill A valid Port Of Discharge';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    } else if (!orderDetails.ExpectedDateOfShipment) {
      let toastMessage = 'Please Fill  Last date of Shipment';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    } else if (orderDetails.incoTerm === '') {
      let toastMessage = 'Please Select A INCO Term';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    } else {
      let docTypeArr = [];
      documents.forEach((val, index) => {
        docTypeArr.push(val.typeDocument);
      });
      let sendOrder = { ...orderDetails };
      let sendOrder1 = { ...companyDetails };
      sendOrder.quantity = Number(removePrefixOrSuffix(orderDetails.quantity));
      sendOrder.orderValue = Number(removePrefixOrSuffix(orderDetails.orderValue) * 10000000);
      sendOrder1.turnOver = Number(removePrefixOrSuffix(companyDetails.turnOver) * 10000000);

      const fd = new FormData();
      fd.append('companyProfile', JSON.stringify(sendOrder1));
      fd.append('orderDetails', JSON.stringify(sendOrder));
      fd.append('documentType', JSON.stringify(docTypeArr));

      documents.forEach((val, index) => {
        fd.append(`documents`, val.attachDoc);
      });

      fd.append('gstList', JSON.stringify(gstListData));

      dispatch(CreateBuyer(fd));
    }
  };

  const clearData = () => {
    document.getElementById('CompanyDetailsForm').reset();
    document.getElementById('OrderDetailsForm').reset();
    document.getElementById('documents').reset();
    document.getElementById('companyInput').value = '';
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {}, 3000);
    return () => clearTimeout(delayDebounceFn);
  }, [companyDetails.companyName]);

  const [documents, setDocuments] = useState([{ typeOfDocument: '', attachDoc: '' }]);

  const onAddDoc = (index) => {
    setDocuments([
      ...documents,
      {
        typeDocument: '',
        attachDoc: '',
      },
    ]);
  };
  const addDoc = (val, index) => {
    setDocuments((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, attachDoc: val };
        }
        return obj;
      });
      return newState;
    });
  };

  const removeDoc = (index) => {
    setDocuments((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, attachDoc: '' };
        }
        return obj;
      });
      return newState;
    });
  };

  const addTypeOfDoc = (val, index) => {
    setDocuments((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, typeDocument: val };
        }
        return obj;
      });
      return newState;
    });
  };

  const deleteData = (index) => {
    setDocuments([...documents.slice(0, index), ...documents.slice(index + 1)]);
  };

  return (
    <Card className={`${styles.card}`}>
      <Card.Header className={`${styles.head_container} border-0 p-0`}>
        <div className={`${styles.head_header} align-items-center`}>
          <div onClick={() => Router.push('/leads')} style={{ cursor: 'pointer' }}>
            <img
              className={`${styles.arrow} img-fluid image_arrow mr-2`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
          </div>
          <h1 className={styles.heading}>Register Your Company</h1>
        </div>
        <div>
          <button onClick={clearData} className={`${styles.clear_btn} clear_btn`}>
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
          companyDetails={companyDetails}
          setCompanyDetails={setCompanyDetails}
          saveCompanyData={saveCompanyData}
          orderDetails={orderDetails}
        />
        <OrderDetails
          darkMode={darkMode}
          saveOrderData={saveOrderData}
          orderDetails={orderDetails}
          country={getCountriesMasterData}
          port={getPortsMasterData}
          commodity={getCommoditiesMasterData}
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
          documentApi={getDocumentsMasterData}
        />
        <Terms
          chanegTermsCheck={chanegTermsCheck}
          termsCheck={termsCheck}
          darkMode={darkMode}
          submitData={submitData}
        />
      </Card.Body>
    </Card>
  );
}

export default Index;
