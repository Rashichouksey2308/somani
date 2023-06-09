/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Col, Form, Row } from 'react-bootstrap';
import DateCalender from '../../../../src/components/DateCalender';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { GettingAllInsurance, UpdateInsurance } from '../../../../src/redux/insurance/action';
import { setDynamicName, setDynamicOrder, setPageName } from '../../../../src/redux/userData/action';
import _get from 'lodash/get';
import Router from 'next/router';
import { toast } from 'react-toastify';
import { gSTINValidation, removePrefixOrSuffix } from '../../../../src/utils/helper';
import { settingSidebar } from '../../../../src/redux/breadcrumb/action';
import constants from '@/utils/constants'
import moment from 'moment/moment';
import { getInternalCompanies } from '../../../../src/redux/masters/action';
import {nameOfInsurerArray} from '../../../../src/utils/helpers/staticFiled'
const Index = () => {
  const [isFieldInFocus, setIsFieldInFocus] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = sessionStorage.getItem('quotationId');
    dispatch(GettingAllInsurance(`?insuranceId=${id}`));
  }, [dispatch]);

  const { insuranceResponse } = useSelector((state) => state.insurance);
  const [insuranceData, setInsuranceData] = useState();

  useEffect(() => {
    dispatch(setPageName('insurance Request Letter'));
    dispatch(setDynamicName(_get(insuranceResponse, 'data[0].company.companyName', 'Company Name')));
    dispatch(setDynamicOrder(_get(insuranceResponse, 'data[0].order.orderId', 'Order Id')));
    setInsuranceData(_get(insuranceResponse, 'data[0]', {}));
    setIsInsurerSameData(_get(insuranceResponse, 'data[0].isInsurerSame', false))
  }, [insuranceResponse]);

  useEffect(() => {
    dispatch(getInternalCompanies());
  }, [dispatch]);

  const { getInternalCompaniesMasterData } = useSelector((state) => state.MastersData);

  const [option, setOption] = useState([]);

  const [marineData, setMarineData] = useState({
    policyNumber: '',
    nameOfInsurer: '',
    gstOfInsurer: '',
    nameOfInsured: '',
    gstOfInsured: '',
    insuranceFrom: '',
    insuranceTo: '',
    periodOfInsurance: '',
    insuranceFromType: '',
    lossPayee: '',
    premiumAmount: '',
  });

  const [storageData, setStorageData] = useState({
    policyNumber: '',
    nameOfInsurer: '',
    gstOfInsurer: '',
    nameOfInsured: '',
    gstOfInsured: '',
    insuranceFrom: '',
    insuranceTo: '',
    periodOfInsurance: '',
    insuranceFromType: '',
    lossPayee: '',
    premiumAmount: '',
  });

  useEffect(() => {
    setMarineData({
      policyNumber: insuranceData?.marineInsurance?.policyNumber || '',
      nameOfInsurer: insuranceData?.marineInsurance?.nameOfInsurer ? insuranceData?.marineInsurance?.nameOfInsurer : '',
      gstOfInsurer: insuranceData?.marineInsurance?.gstOfInsurer || '',
      nameOfInsured: insuranceData?.marineInsurance?.nameOfInsured
        ? insuranceData?.marineInsurance?.nameOfInsured
        : insuranceData?.order?.generic?.buyer?.name,
      gstOfInsured: insuranceData?.marineInsurance?.gstOfInsured || '',
      insuranceFrom: insuranceData?.marineInsurance?.insuranceFrom,
      insuranceTo: insuranceData?.marineInsurance?.insuranceTo,
      periodOfInsurance: getDifferenceInDaysMarine()
        ? getDifferenceInDaysMarine()
        : insuranceData?.marineInsurance?.periodOfInsurance,
      insuranceFromType: insuranceData?.marineInsurance?.insuranceFromType,
      lossPayee:insuranceData?.quotationRequest?.lossPayee||
        _get(
          insuranceData,
          'order.lc.lcApplication.lcIssuingBank',
           "",
        ) ,
      premiumAmount: insuranceData?.marineInsurance?.premiumAmount ?? 0,
    });
    setStorageData({
      policyNumber: insuranceData?.storageInsurance?.policyNumber,
      nameOfInsurer: insuranceData?.storageInsurance?.nameOfInsurer
        ? insuranceData?.storageInsurance?.nameOfInsurer
        : '',
      gstOfInsurer: insuranceData?.storageInsurance?.gstOfInsurer,
      nameOfInsured: insuranceData?.storageInsurance?.nameOfInsured
        ? insuranceData?.storageInsurance?.nameOfInsured
        : insuranceData?.order?.generic?.buyer?.name,
      gstOfInsured: insuranceData?.storageInsurance?.gstOfInsured,
      insuranceFrom: insuranceData?.storageInsurance?.insuranceFrom,
      insuranceTo: insuranceData?.storageInsurance?.insuranceTo,
      periodOfInsurance: getDifferenceInDaysStorage()
        ? getDifferenceInDaysStorage()
        : insuranceData?.storageInsurance?.periodOfInsurance,
      insuranceFromType: insuranceData?.storageInsurance?.insuranceFromType,
    lossPayee:insuranceData?.quotationRequest?.lossPayee ||
        _get(
          insuranceData,
          'order.lc.lcApplication.lcIssuingBank',
           "",
        ) ,
      premiumAmount: insuranceData?.storageInsurance?.premiumAmount ?? 0,
    });
    setInsuranceDocument({
      storagePolicyDocument: insuranceData?.storagePolicyDocument || null,
      marinePolicyDocument: insuranceData?.marinePolicyDocument || null,
    });
  }, [insuranceResponse, insuranceData]);

  const dateM1 = new Date(marineData?.insuranceFrom);
  const dateM2 = new Date(marineData?.insuranceTo);

  function getDifferenceInDaysMarine() {
    const date1 = moment(dateM1, 'DD.MM.YYYY');
    const date2 = moment(dateM2, 'DD.MM.YYYY');
    return date2.diff(date1, 'days');
  }

  const dateS1 = new Date(storageData?.insuranceFrom);
  const dateS2 = new Date(storageData?.insuranceTo);

  function getDifferenceInDaysStorage() {
    const date3 = moment(dateS1, 'DD.MM.YYYY');
    const date4 = moment(dateS2, 'DD.MM.YYYY');
    return date4.diff(date3, 'days');
  }

  const gettingCompanyList = (name) => {
    const filter = getInternalCompaniesMasterData?.filter((val, index) => {
      if (val?.Company_Name?.toLowerCase() === name?.toLowerCase()) {
        return val;
      }
    });

    setOption(filter);
  };

  useEffect(() => {
    // gettingCompanyList(insuranceData?.order?.generic?.buyer?.name)

    const filter = getInternalCompaniesMasterData?.filter((val, index) => {
      if (val?.Company_Name?.toLowerCase() === insuranceData?.order?.generic?.buyer?.name?.toLowerCase()) {
        return val;
      }
    });
    setOption(filter);
  }, [insuranceData, getInternalCompaniesMasterData]);

  const saveMarineData = (name, value) => {
    const newInput = { ...marineData };
    newInput[name] = value;

    setMarineData({ ...newInput });
  };

  const saveDate = (value, name) => {
    const d = new Date(value);
    const text = d.toISOString();
    saveMarineData(name, text);
  };

  const saveStorageDate = (value, name) => {
    const d = new Date(value);
    const text = d.toISOString();
    saveStorageData(name, text);
  };

  const saveStorageData = (name, value) => {
    const newInput = { ...storageData };
    newInput[name] = value;
    setStorageData(newInput);
  };

  const [insuranceDocument, setInsuranceDocument] = useState({
    storagePolicyDocument: null,
    marinePolicyDocument: null,
  });

  const handleClose = () => {
    setInsuranceDocument({ ...insuranceDocument, marinePolicyDocument: null });
  };

  const handleCloseS = () => {
    setInsuranceDocument({ ...insuranceDocument, storagePolicyDocument: null });
  };

  const uploadDocument2 = (e) => {
    const newUploadDoc = { ...insuranceDocument };
    newUploadDoc.storagePolicyDocument = e.target.files[0];

    setInsuranceDocument(newUploadDoc);
  };
  const uploadDocument1 = (e) => {
    const newUploadDoc1 = { ...insuranceDocument };
    newUploadDoc1.marinePolicyDocument = e.target.files[0];

    setInsuranceDocument(newUploadDoc1);
  };

  const [isInsurerSameData, setIsInsurerSameData] = useState(false);

  const handleIsInsuranceSame = () => {
    setIsInsurerSameData(!isInsurerSameData);
  };

  useEffect(() => {
    if (isInsurerSameData) {
      setStorageData({ ...marineData });
    }
    if (isInsurerSameData === false) {
      setStorageData({
        policyNumber: insuranceData?.storageInsurance?.policyNumber || '',
        nameOfInsurer: insuranceData?.storageInsurance?.nameOfInsurer || '',
        gstOfInsurer: insuranceData?.storageInsurance?.gstOfInsurer || '',
        nameOfInsured: insuranceData?.storageInsurance?.nameOfInsured || '',
        gstOfInsured: insuranceData?.storageInsurance?.gstOfInsured || '',
        insuranceFrom: insuranceData?.storageInsurance?.insuranceFrom,
        insuranceTo: insuranceData?.storageInsurance?.insuranceTo,
        periodOfInsurance: insuranceData?.storageInsurance?.periodOfInsurance || '',
        insuranceFromType: insuranceData?.storageInsurance?.insuranceFromType,
        lossPayee: insuranceData?.storageInsurance?.lossPayee || '',
        premiumAmount: insuranceData?.storageInsurance?.premiumAmount ?? 0,
      });
    }
  }, [isInsurerSameData]);
 
  const marineValidation=()=>{
  
     let toastMessage = '';
           if (
         marineData.policyNumber === '' ||  marineData.policyNumber === undefined || 
         marineData.policyNumber == null
      ) {
       
        toastMessage = 'PLEASE ADD marine policy number';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
        if (
         marineData.nameOfInsurer === '' ||  marineData.nameOfInsurer === undefined || 
         marineData.nameOfInsurer == null
      ) {
        
        toastMessage = 'PLEASE ADD  marine name Of Insurer';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
         if (
         marineData.nameOfInsured === '' ||  marineData.nameOfInsured === undefined || 
         marineData.nameOfInsured == null
      ) {
        toastMessage = 'PLEASE ADD  marine name Of Insured';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      
          if (
         marineData.gstOfInsured === '' ||  marineData.gstOfInsured === undefined || 
         marineData.gstOfInsured == null
      ) {
        toastMessage = 'PLEASE ADD  marine gst Of Insured';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
           if (
         marineData.insuranceFrom === '' ||  marineData.insuranceFrom === undefined || 
         marineData.insuranceFrom == null
      ) {
        toastMessage = 'PLEASE ADD  marine insurance From';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
           if (
         marineData.insuranceTo === '' ||  marineData.insuranceTo === undefined || 
         marineData.insuranceTo == null
      ) {
        toastMessage = 'PLEASE ADD  marine insurance To';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
  }
  const storageValidation=()=>{
      
     let toastMessage = '';
           if (
         storageData.policyNumber === '' ||  storageData.policyNumber === undefined || 
         storageData.policyNumber == null
      ) {
        toastMessage = 'PLEASE ADD storage policy number';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
        if (
         storageData.nameOfInsurer === '' ||  storageData.nameOfInsurer === undefined || 
         storageData.nameOfInsurer == null
      ) {
        toastMessage = 'PLEASE ADD storage name Of Insurer';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
           if (
         storageData.gstOfInsurer === '' ||  storageData.gstOfInsurer === undefined || 
         storageData.gstOfInsurer == null
      ) {
        toastMessage = 'PLEASE ADD storage gst Of Insurer';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
         if (
         storageData.nameOfInsured === '' ||  storageData.nameOfInsured === undefined || 
         storageData.nameOfInsured == null
      ) {
        toastMessage = 'PLEASE ADD storage name Of Insured';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
       
          if (
         storageData.gstOfInsured === '' ||  storageData.gstOfInsured === undefined || 
         storageData.gstOfInsured == null
      ) {
        toastMessage = 'PLEASE ADD storage gst Of Insured';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
           if (
         storageData.insuranceFrom === '' ||  storageData.insuranceFrom === undefined || 
         storageData.insuranceFrom == null
      ) {
        toastMessage = 'PLEASE ADD storage insurance From';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
           if (
         storageData.insuranceTo === '' ||  storageData.insuranceTo === undefined || 
         storageData.insuranceTo == null
      ) {
        toastMessage = 'PLEASE ADD storage insurance To';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
  }
  const validate = () => {
    let toastMessage = '';

    if (insuranceData?.quotationRequest?.insuranceType === 'Marine Insurance') {
      if (
        marineData.insuranceFromType === 'Domestic' &&
        (marineData.gstOfInsurer === '' ||
          marineData.gstOfInsurer === undefined ||
          !gSTINValidation(marineData.gstOfInsurer))
      ) {
        toastMessage = 'PLEASE ADD A VALID GSTIN OF INSURER';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (
        marineData.insuranceFromType === 'Domestic' &&
        (marineData.gstOfInsured === '' ||
          marineData.gstOfInsured === undefined ||
          !gSTINValidation(marineData.gstOfInsured))
      ) {
        toastMessage = ' PLEASE ADD A VALID GSTIN OF INSURED';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      
      if (marineData.insuranceFrom === '' || marineData.insuranceFrom === undefined) {
        toastMessage = 'PLEASE SELECT INSURANCE FROM';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }

      if (marineData.insuranceTo === '' || marineData.insuranceTo === undefined) {
        toastMessage = 'PLEASE SELECT INSURANCE TO';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (insuranceDocument.marinePolicyDocument == null) {
        toastMessage = 'Documents are Mandatory';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
     
     if(marineValidation()===false){
      return false

     }
    }
    if (insuranceData?.quotationRequest?.insuranceType === 'Storage Insurance') {
      if (
        storageData.insuranceFromType === 'Domestic' &&
        (storageData.gstOfInsurer === '' ||
          storageData.gstOfInsurer === undefined ||
          !gSTINValidation(storageData.gstOfInsurer))
      ) {
        toastMessage = ' PLEASE ADD VALID GSTIN OF INSURER FOR STORAGE';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (
        storageData.insuranceFromType === 'Domestic' &&
        (storageData.gstOfInsured === '' ||
          storageData.gstOfInsured === undefined ||
          !gSTINValidation(storageData.gstOfInsured))
      ) {
        toastMessage = ' PLEASE ADD A VALID GSTIN OF INSURED';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (storageData.insuranceFrom === '' || storageData.insuranceFrom === undefined) {
        toastMessage = 'PLEASE SELECT INSURANCE FROM';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (storageData.insuranceTo === '' || storageData.insuranceTo === undefined) {
        toastMessage = 'PLEASE SELECT INSURANCE TO';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
    
   if(storageValidation()===false){
      return false

     }
      if (insuranceDocument.storagePolicyDocument == null) {
        toastMessage = 'Documents are Mandatory';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
  
    }
    if (insuranceData?.quotationRequest?.insuranceType === 'Marine & Storage Insurance') {
      if (
        (marineData.insuranceFromType === 'Domestic' && marineData.gstOfInsurer === '') ||
        marineData.gstOfInsurer === undefined ||
        !gSTINValidation(marineData?.gstOfInsurer)
      ) {
        toastMessage = 'VALID GSTIN OF INSURER IS MANDATORY IN MARINE INSURANCE';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (
        (marineData.insuranceFromType === 'Domestic' && marineData.gstOfInsured === '') ||
        marineData.gstOfInsured === undefined ||
        !gSTINValidation(marineData?.gstOfInsured)
      ) {
        toastMessage = ' VALID GSTIN OF INSURED IS MANDATORY IN MARINE INSURANCE';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
        if(marineValidation()===false){
        return false

        }
        if (insuranceDocument.marinePolicyDocument == null) {
          toastMessage = 'marine policy  is  Mandatory';
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            return false;
          }
        }      
    }


     return true;
  };

  const handleInsuranceUpdate = async () => {
    if (!validate()) return;

    const marineObj = { ...marineData };
    marineObj.premiumAmount = removePrefixOrSuffix(marineData.premiumAmount);

    const storageObj = { ...storageData };
    storageObj.premiumAmount = removePrefixOrSuffix(storageData.premiumAmount);

    const fd = new FormData();
    fd.append('marineInsurance', JSON.stringify(marineObj));
    fd.append('storageInsurance', JSON.stringify(storageObj));
    fd.append('insuranceId', insuranceData?._id);
    fd.append('isInsurerSame', JSON.stringify(isInsurerSameData));
    fd.append('insuranceType', JSON.stringify(insuranceData?.quotationRequest?.insuranceType));
    fd.append('marinePolicyDocument', insuranceDocument.marinePolicyDocument);
    fd.append('storagePolicyDocument', insuranceDocument.storagePolicyDocument);

    const code = await dispatch(UpdateInsurance(fd));
    if (code == constants.successCodeValue) {
      sessionStorage.setItem('inspectionId', _get(insuranceResponse, 'data[0].order.inspection', ''));
      dispatch(settingSidebar('Loading, Transit & Unloadinge', 'Inspection', 'Inspection', '3'));
      Router.push(`/third-party`);
    }
  };

  const handleRoute = () => {
    Router.push('/insurance');
  };
 
  return (
    <div className={`container-fluid p-0`}>
      <div className={`${styles.card} accordion_body`}>
        <div className={`${styles.head_container} align-items-center`}>
          <div className={`${styles.head_header}  align-items-center`}>
            <img
              style={{ cursor: 'pointer' }}
              onClick={() => Router.push('/insurance')}
              className={`${styles.back_arrow} image_arrow  mr-2 ml-0 img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />

            <h1 className={styles.heading}>{insuranceData?.company?.companyName}</h1>
          </div>
          <div>
            <button className={`${styles.clear_btn} clear_btn`}>Clear All</button>
          </div>
        </div>

        <div className={`${styles.vessel_card} border_color`}>
          <div className={`${styles.wrapper} card`}>
            <div className={`${styles.insurance_type} d-lg-flex align-items-center d-inline-block`}>
              <h2 className="mb-0">Insurance Type</h2>
              <div className={`${styles.radio_form} ml-lg-5 ml-n4`}>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className={styles.radio_group}>
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Marine Insurance"
                      checked={insuranceData?.quotationRequest?.insuranceType === 'Marine Insurance' ? 'checked' : ''}
                      name="group1"
                      value="Marine"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Storage Insurance"
                      checked={insuranceData?.quotationRequest?.insuranceType === 'Storage Insurance' ? 'checked' : ''}
                      name="group1"
                      value="Storage"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Both"
                      value="Both"
                      checked={
                        insuranceData?.quotationRequest?.insuranceType === 'Marine & Storage Insurance' ? 'checked' : ''
                      }
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {insuranceData?.quotationRequest?.insuranceType === 'Marine Insurance' ? (
            <>
              <div className={`${styles.wrapper} vessel_card border_color card`}>
                <div
                  className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
                  style={{ cursor: 'default' }}
                >
                  <h2 className="mb-0">Marine Insurance Policy Details</h2>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className={`${styles.radio_label} mr-3 mt-1`}>Insurance From:</h5>
                    <div className={`${styles.radio_form} `}>
                      {['radio'].map((type) => (
                        <div key={`inline-${type}`} className={styles.radio_group}>
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Domestic"
                            name="insuranceFromType"
                            checked={marineData?.insuranceFromType === 'Domestic'}
                            onChange={(e) => saveMarineData(e.target.name, 'Domestic')}
                            type={type}
                            id={`inline-${type}-1`}
                          />

                          <Form.Check
                            className={styles.radio}
                            inline
                            label="International"
                            checked={marineData?.insuranceFromType === 'International'}
                            name="insuranceFromType"
                            type={type}
                            id={`inline-${type}-2`}
                            onChange={(e) => saveMarineData(e.target.name, 'International')}
                          />
                        </div>
                      ))}
                    </div>

                    <span
                      data-toggle="collapse"
                      data-target="#marineInsurance"
                      aria-expanded="true"
                      aria-controls="marineInsurance"
                      style={{ cursor: 'pointer' }}
                    >
                      +
                    </span>
                  </div>
                </div>
                <div
                  id="marineInsurance"
                  aria-labelledby="marineInsurance"
                >
                  <div className={` ${styles.cardBody} card-body  border_color`}>
                    <div className={` ${styles.content} border_color`}>
                      <div className={` ${styles.body}`}>
                        <Row>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              name="policyNumber"
                              value={marineData?.policyNumber}
                              onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Policy Number
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <select
                                name="nameOfInsurer"
                                onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                                value={marineData?.nameOfInsurer}
                                className={`${styles.input_field} ${styles.customSelect}   input form-control`}
                              >
                                <option selected value=''>
                                  Select an option
                                </option>
                                {nameOfInsurerArray.map((val,index)=>{
                                  return <option value={val}>{val}</option>
                                })}
                              </select>
                              <label className={`${styles.label_heading} label_heading`}>Name of Insurer</label>
                              <img
                                className={`${styles.arrow} image_arrow img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <input
                                className={`${styles.input_field} input form-control`}
                                required
                                type="text"
                                name="gstOfInsurer"
                                value={marineData?.gstOfInsurer}
                                onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                              />
                              <label className={`${styles.label_heading} label_heading`}>
                                GSTIN of Insurer
                                {marineData?.insuranceFromType === 'Domestic' ? (
                                  <strong className="text-danger">*</strong>
                                ) : (
                                  ''
                                )}
                              </label>
                              <img
                                className={`${styles.checked_image}`}
                                src="/static/approved.svg"
                                alt="Info circle"
                              />
                            </div>
                          </Col>

                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <select
                                name="nameOfInsured"
                                value={marineData?.nameOfInsured}
                                onChange={(e) => {
                                  gettingCompanyList(e.target.value)
                                   saveMarineData(e.target.name, e.target.value);
                                }}
                                className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                              >
                                <option selected>Select</option>
                                <option value="Indo German International Private Limited">
                                  Indo German International Private Limited
                                </option>
                                <option value="Emergent Industrial Solutions Limited">
                                  Emergent Industrial Solutions Limited
                                </option>
                              </select>
                              <label className={`${styles.label_heading} label_heading`}>
                                Name of Insured
                                <strong className="text-danger ml-1">*</strong>
                              </label>
                              <div className={`${styles.img_arrow} image_arrow`}>
                                <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                              </div>
                            </div>
                          </Col>

                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <select
                                value={marineData?.gstOfInsured}
                                name="gstOfInsured"
                                onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                                className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                              >
                                 <option selected>Select an Option</option>
                                 {option?.length > 0 && [...new Set(option.map(item => item?.keyAddresses[0]?.gstin))]?.filter((val,index)=>{
                                        if(val !== undefined){
                                          return val
                                        }
                                  }).map((val, index) => {
                                    
                                    return <option value={`${val}`}>{val}</option>;
                                  })}
                              
                              </select>
                              <label className={`${styles.label_heading} label_heading`}>
                                GSTIN of Insured
                                <strong className="text-danger ml-1">*</strong>
                              </label>
                              <div className={`${styles.img_arrow} image_arrow`}>
                                <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                              </div>
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={2} md={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="insuranceFrom"
                                defaultDate={marineData?.insuranceFrom}
                                saveDate={saveDate}
                                labelName="Insurance from"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={2} md={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="insuranceTo"
                                defaultDate={marineData?.insuranceTo}
                                saveDate={saveDate}
                                labelName="Insurance to"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="number"
                              onWheel={(event) => event.currentTarget.blur()}
                              name="periodOfInsurance"
                              value={
                                getDifferenceInDaysMarine() ? getDifferenceInDaysMarine() : marineData?.periodOfInsurance
                              }
                              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                              onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Period of Insurance (In days)
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <input
                                name="lossPayee"
                                onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                                value={marineData?.lossPayee}
                                className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                              >
                                
                              </input>
                              <label className={`${styles.label_heading} label_heading`}>
                                Loss Payee
                              </label>
                             
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <input
                              type="text"
                              onFocus={(e) => {
                                setIsFieldInFocus(true), (e.target.type = 'number');
                              }}
                              onBlur={(e) => {
                                setIsFieldInFocus(false), (e.target.type = 'text');
                              }}
                              className={`${styles.input_field} input form-control`}
                              required
                              onWheel={(event) => event.currentTarget.blur()}
                              value={
                                isFieldInFocus
                                  ? marineData?.premiumAmount
                                  : 'INR ' +
                                    Number(marineData?.premiumAmount)?.toLocaleString('en-In')
                              }
                              name="premiumAmount"
                              onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Premium Amount
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.main} border_color card`}>
                <div
                  className={`${styles.head_container} border_color head_container d-flex align-items-center justify-content-between`}
                  data-toggle="collapse"
                  data-target="#upload"
                  aria-expanded="true"
                  aria-controls="upload"
                >
                  <h3 className={styles.heading}>Upload Documents</h3>
                  <span>+</span>
                </div>
                <div id="upload" className="collapse" aria-labelledby="upload" data-parent="#upload">
                  <div className={`${styles.table_form}`}>
                    <div className={styles.table_container}>
                      <div className={styles.table_scroll_outer}>
                        <div className={styles.table_scroll_inner}>
                          <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                            <thead>
                              <tr>
                                <th>
                                  DOCUMENT NAME{' '}
                                  <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                                </th>
                                <th>
                                  FORMAT <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                                </th>
                                <th>
                                  DOCUMENT DATE{' '}
                                  <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                                </th>
                                <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="table_row">
                                <td className={styles.doc_name}>
                                  Policy Document - Marine
                                  <strong className="text-danger">*</strong>
                                </td>
                                <td>
                                  {insuranceDocument?.marinePolicyDocument ? (
                                    insuranceDocument?.marinePolicyDocument?.originalName
                                      ?.toLowerCase()
                                      .endsWith('.xls') ||
                                    insuranceDocument?.marinePolicyDocument?.originalName
                                      ?.toLowerCase()
                                      .endsWith('.xlsx') ? (
                                      <img src="/static/excel.svg" className="img-fluid" alt="Pdf" />
                                    ) : insuranceDocument?.marinePolicyDocument?.originalName
                                        ?.toLowerCase()
                                        .endsWith('.doc') ||
                                      insuranceDocument?.marinePolicyDocument?.originalName
                                        ?.toLowerCase()
                                        .endsWith('.docx') ? (
                                      <img src="/static/doc.svg" className="img-fluid" alt="Pdf" />
                                    ) : (
                                      <img src="/static/pdf.svg" className="img-fluid" alt="Pdf" />
                                    )
                                  ) : null}
                                </td>
                                <td className={styles.doc_row}>
                                  { insuranceDocument?.marinePolicyDocument
                                    ? moment(insuranceDocument?.marinePolicyDocument?.date).format('DD-MM-YYYY,h:mm A')
                                    : ''}
                                </td>
                                <td>
                                
                                  {insuranceDocument && insuranceDocument.marinePolicyDocument == null ? (
                                    <>
                                      <div className={styles.uploadBtnWrapper}>
                                        <input
                                          type="file"
                                          name="marinePolicyDocument"
                                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                          onChange={(e) => uploadDocument1(e)}
                                        />
                                        <button className={`${styles.button_upload} btn`}>Upload</button>
                                      </div>
                                    </>
                                  ) : (
                                    <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                      <span>{insuranceDocument?.marinePolicyDocument?.name}</span>
                                      <img
                                        className={`${styles.close_image} image_arrow mr-2`}
                                        src="/static/close.svg"
                                        onClick={() => handleClose()}
                                        alt="Close"
                                      />{' '}
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : insuranceData?.quotationRequest?.insuranceType == 'Storage Insurance' ? (
            <>
              <div className={`${styles.wrapper} vessel_card border_color card`}>
                <div
                  className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
                  data-target="#storageInsurance"
                  aria-expanded="true"
                  aria-controls="storageInsurance"
                >
                  <h2 className="mb-0">Storage Insurance Details</h2>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className={`${styles.radio_label} mr-3`}>Insurance From:</h5>
                    <div className={`${styles.radio_form} `}>
                      {['radio'].map((type) => (
                        <div key={`inline-${type}`} className={styles.radio_group}>
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Domestic"
                            name="insuranceFromType"
                            checked={storageData?.insuranceFromType == 'Domestic' ? 'checked' : ''}
                            onChange={(e) => saveStorageData(e.target.name, 'Domestic')}
                            type={type}
                            id={`inline-${type}-1`}
                          />

                          <Form.Check
                            className={styles.radio}
                            inline
                            label="International"
                            name="insuranceFromType"
                            checked={storageData?.insuranceFromType == 'International' ? 'checked' : ''}
                            onChange={(e) => saveStorageData(e.target.name, 'International')}
                            type={type}
                            id={`inline-${type}-2`}
                          />
                        </div>
                      ))}
                    </div>

                    <span>+</span>
                  </div>
                </div>
                <div
                  id="storageInsurance"
                  aria-labelledby="storageInsurance"
                >
                  <div className={` ${styles.cardBody} card-body  border_color`}>
                    <div className={` ${styles.content} border_color`}>
                      <div className={` ${styles.body}`}>
                        <Row>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <input
                                className={`${styles.input_field} input form-control`}
                                style={{ color: '#EA3F3F' }}
                                required
                                type="text"
                                name="policyNumber"
                                value={storageData?.policyNumber}
                                onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                              />
                              <label className={`${styles.label_heading} label_heading`}>
                                Policy Number
                                <strong className="text-danger">*</strong>
                              </label>
                              <img
                                className={`${styles.checked_image} img-fluid`}
                                src="/static/approved.svg"
                                alt="Info circle"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <select
                                name="nameOfInsurer"
                                onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                                value={storageData?.nameOfInsurer}
                                className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                              >
                                <option selected value =''>
                                  Select an option
                                </option>
                                {nameOfInsurerArray.map((val,index)=>{
                                  return <option value={val}>{val}</option>
                                })}
                              </select>
                              <label className={`${styles.label_heading} label_heading`}>
                                Name of Insurer
                                <strong className="text-danger">*</strong>
                              </label>
                              <img
                                className={`${styles.arrow} image_arrow img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <input
                                className={`${styles.input_field} input form-control`}
                                required
                                name="gstOfInsurer"
                                value={storageData?.gstOfInsurer}
                                onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                                type="text"
                              />
                              <label className={`${styles.label_heading} label_heading`}>
                                GSTIN of Insurer
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                          </Col>

                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                         
                            <div className="d-flex">
                              <select
                                value={storageData?.nameOfInsured}
                                name="nameOfInsured"
                                onChange={(e) => {
                                  gettingCompanyList(e.target.value)
                                 saveStorageData(e.target.name, e.target.value);
                                }}
                                className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                              >
                                <option selected>Select</option>
                                <option value="Indo German International Private Limited">
                                  Indo German International Private Limited
                                </option>
                                <option value="Emergent Industrial Solutions Limited">
                                  Emergent Industrial Solutions Limited
                                </option>
                              </select>
                              <label className={`${styles.label_heading} label_heading`}>
                                Name of Insured
                                <strong className="text-danger ml-1">*</strong>
                              </label>
                              <div className={`${styles.img_arrow} image_arrow`}>
                                <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                              </div>
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <select
                                value={storageData?.gstOfInsured}
                                name="gstOfInsured"
                                onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                                className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                              >
                                  <option selected>Select an Option</option>
                                 {option?.length > 0 && [...new Set(option.map(item => item?.keyAddresses[0]?.gstin))]?.filter((val,index)=>{
                                        if(val !== undefined){
                                          return val
                                        }
                                  }).map((val, index) => {
                                    
                                    return <option value={`${val}`}>{val}</option>;
                                  })}
                              </select>
                              <label className={`${styles.label_heading} label_heading`}>
                                GSTIN of Insured
                                <strong className="text-danger ml-1">*</strong>
                              </label>
                              <div className={`${styles.img_arrow} image_arrow`}>
                                <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                              </div>
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={2} md={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="insuranceFrom"
                                defaultDate={storageData?.insuranceFrom}
                                saveDate={saveStorageDate}
                                labelName="Insurance from"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={2} md={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="insuranceTo"
                                defaultDate={storageData?.insuranceTo}
                                saveDate={saveStorageDate}
                                labelName="Insurance to"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="number"
                              onWheel={(event) => event.currentTarget.blur()}
                              name="periodOfInsurance"
                              value={
                                getDifferenceInDaysStorage()
                                  ? getDifferenceInDaysStorage()
                                  : storageData?.periodOfInsurance
                              }
                              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                              onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Period of Insurance (In days)
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <input
                                name="lossPayee"
                                value={storageData?.lossPayee}
                                onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                                className={`${styles.input_field} ${styles.customSelect} input form-control`}
                              >
                                
                              </input>
                              <label className={`${styles.label_heading} label_heading`}>
                                Loss Payee
                              </label>
                              
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              onFocus={(e) => {
                                setIsFieldInFocus(true), (e.target.type = 'number');
                              }}
                              onBlur={(e) => {
                                setIsFieldInFocus(false), (e.target.type = 'text');
                              }}
                              name="premiumAmount"
                              value={
                                isFieldInFocus
                                  ? storageData?.premiumAmount
                                  : 
                                    'INR ' + Number(storageData?.premiumAmount)?.toLocaleString('en-In')
                              }
                              onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                              type="text"
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Premium Amount
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.main} border_color card`}>
                <div
                  className={`${styles.head_container} border_color head_container d-flex align-items-center justify-content-between`}
                  data-toggle="collapse"
                  data-target="#upload"
                  aria-expanded="true"
                  aria-controls="upload"
                >
                  <h3 className={styles.heading}>Upload Documents</h3>
                  <span>+</span>
                </div>
                <div id="upload" className="collapse" aria-labelledby="upload" data-parent="#upload">
                  <div className={`${styles.table_form}`}>
                    <div className={styles.table_container}>
                      <div className={styles.table_scroll_outer}>
                        <div className={styles.table_scroll_inner}>
                          <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                            <thead>
                              <tr>
                                <th>
                                  DOCUMENT NAME{' '}
                                  <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                                </th>
                                <th>
                                  FORMAT <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                                </th>
                                <th>
                                  DOCUMENT DATE{' '}
                                  <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                                </th>
                                <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="table_row">
                                <td className={styles.doc_name}>
                                  Policy Document - Storage
                                  <strong className="text-danger">*</strong>
                                </td>
                                <td>
                                  {insuranceDocument?.storagePolicyDocument ? (
                                    insuranceDocument?.storagePolicyDocument?.originalName
                                      ?.toLowerCase()
                                      .endsWith('.xls') ||
                                    insuranceDocument?.storagePolicyDocument?.originalName
                                      ?.toLowerCase()
                                      .endsWith('.xlsx') ? (
                                      <img src="/static/excel.svg" className="img-fluid" alt="Pdf" />
                                    ) : insuranceDocument?.storagePolicyDocument?.originalName
                                        ?.toLowerCase()
                                        .endsWith('.doc') ||
                                      insuranceDocument?.storagePolicyDocument?.originalName
                                        ?.toLowerCase()
                                        .endsWith('.docx') ? (
                                      <img src="/static/doc.svg" className="img-fluid" alt="Pdf" />
                                    ) : (
                                      <img src="/static/pdf.svg" className="img-fluid" alt="Pdf" />
                                    )
                                  ) : null}
                                </td>
                                <td className={styles.doc_row}>
                                  {insuranceDocument?.storagePolicyDocument
                                    ? insuranceDocument?.storagePolicyDocument?.date
                                      ? moment(insuranceDocument?.storagePolicyDocument?.date).format('DD-MM-YYYY,h:mm A')
                                      : moment(new Date()).format('DD-MM-YYYY,h:mm A')
                                    : ''}
                                </td>
                                <td>
                                  {insuranceDocument && insuranceDocument?.storagePolicyDocument == null ? (
                                    <>
                                      <div className={styles.uploadBtnWrapper}>
                                        <input
                                          type="file"
                                          name="marinePolicyDocument"
                                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                          onChange={(e) => uploadDocument2(e)}
                                        />
                                        <button className={`${styles.button_upload} btn`}>Upload</button>
                                      </div>
                                    </>
                                  ) : (
                                    <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                      <span>{insuranceDocument?.storagePolicyDocument?.name}</span>
                                      <img
                                        className={`${styles.close_image}  image_arrow mr-2`}
                                        src="/static/close.svg"
                                        onClick={() => handleCloseS()}
                                        alt="Close"
                                      />{' '}
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : insuranceData?.quotationRequest?.insuranceType == 'Marine & Storage Insurance' ? (
            <>
              <div className={`${styles.wrapper} vessel_card border_color card`}>
                <div
                  className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
                  style={{ cursor: 'default' }}
                >
                  <h2 className="mb-0">Marine Insurance Policy Details</h2>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className={`${styles.radio_label} mr-3 mt-1`}>Insurance From:</h5>
                    <div className={`${styles.radio_form} `}>
                      {['radio'].map((type) => (
                        <div key={`inline-${type}`} className={styles.radio_group}>
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Domestic"
                            name="insuranceFromType"
                            defaultChecked={insuranceData?.marineInsurance?.insuranceFromType == 'Domestic'}
                            onChange={(e) => saveMarineData(e.target.name, 'Domestic')}
                            type={type}
                            id={`inline-${type}-1`}
                          />

                          <Form.Check
                            className={styles.radio}
                            inline
                            label="International"
                            name="insuranceFromType"
                            defaultChecked={insuranceData?.marineInsurance?.insuranceFromType == 'International'}
                            onChange={(e) => saveMarineData(e.target.name, 'International')}
                            type={type}
                            id={`inline-${type}-2`}
                          />
                        </div>
                      ))}
                    </div>

                    <span
                      data-toggle="collapse"
                      data-target="#marineInsurance"
                      aria-expanded="true"
                      aria-controls="marineInsurance"
                      style={{ cursor: 'pointer' }}
                    >
                      +
                    </span>
                  </div>
                </div>
                <div
                  id="marineInsurance"
                  aria-labelledby="marineInsurance"
                >
                  <div className={` ${styles.cardBody} vessel_card card-body  border_color`}>
                    <div className={` ${styles.content} border_color`}>
                      <div className={` ${styles.body}`}>
                        <Row>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              name="policyNumber"
                              value={marineData?.policyNumber}
                              onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Policy Number
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <select
                                name="nameOfInsurer"
                                onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                                value={marineData?.nameOfInsurer}
                                className={`${styles.input_field} ${styles.customSelect}   input form-control`}
                              >
                                <option selected value =''>
                                  Select an option
                                </option>
                                {nameOfInsurerArray.map((val,index)=>{
                                  return <option value={val}>{val}</option>
                                })}
                              </select>
                              <label className={`${styles.label_heading} label_heading`}>
                                Name of Insurer
                                <strong className="text-danger">*</strong>
                              </label>
                              <img
                                className={`${styles.arrow} image_arrow img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <input
                                className={`${styles.input_field} input form-control`}
                                required
                                style={{ borderColor: '#43C34D' }}
                                type="text"
                                name="gstOfInsurer"
                                value={marineData?.gstOfInsurer}
                                onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                              />
                              <label className={`${styles.label_heading} label_heading`}>
                                GSTIN of Insurer
                                {marineData?.insuranceFromType == 'Domestic' ? (
                                  <strong className="text-danger">*</strong>
                                ) : (
                                  ''
                                )}
                              </label>
                            </div>
                          </Col>

                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <select
                                value={marineData?.nameOfInsured}
                                name="nameOfInsured"
                                onChange={(e) => {
                                  gettingCompanyList(e.target.value)
                                  saveMarineData(e.target.name, e.target.value);
                                }}
                                className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                              >
                                <option selected>Select</option>
                                <option value="Indo German International Private Limited">
                                  Indo German International Private Limited
                                </option>
                                <option value="Emergent Industrial Solutions Limited">
                                  Emergent Industrial Solutions Limited
                                </option>
                              </select>
                              <label className={`${styles.label_heading} label_heading`}>
                                Name of Insured
                                <strong className="text-danger ml-1">*</strong>
                              </label>
                              <div className={`${styles.img_arrow} image_arrow`}>
                                <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                              </div>
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <select
                                value={marineData?.gstOfInsured}
                                name="gstOfInsured"
                                onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                                className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                              >
                               <option selected>Select an Option</option>
                                 {option?.length > 0 && [...new Set(option.map(item => item?.keyAddresses[0]?.gstin))]?.filter((val,index)=>{
                                        if(val !== undefined){
                                          return val
                                        }
                                  }).map((val, index) => {
                                    
                                    return <option value={`${val}`}>{val}</option>;
                                  })}
                              
                              </select>
                              <label className={`${styles.label_heading} label_heading`}>
                                GSTIN of Insured
                                <strong className="text-danger ml-1">*</strong>
                              </label>
                              <div className={`${styles.img_arrow} image_arrow`}>
                                <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                              </div>
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={2} md={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="insuranceFrom"
                                defaultDate={marineData?.insuranceFrom}
                                saveDate={saveDate}
                                labelName="Insurance from"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={2} md={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="insuranceTo"
                                defaultDate={marineData?.insuranceTo}
                                saveDate={saveDate}
                                labelName="Insurance to"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="number"
                              onWheel={(event) => event.currentTarget.blur()}
                              name="periodOfInsurance"
                              value={
                                getDifferenceInDaysMarine() ? getDifferenceInDaysMarine() : marineData?.periodOfInsurance
                              }
                              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                              onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Period of Insurance (In days)
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <input
                                name="lossPayee"
                                onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                                value={marineData.lossPayee}
                                className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                              >
                                
                              </input>
                              <label className={`${styles.label_heading} label_heading`}>
                                Loss Payee
                              </label>
                             
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              onFocus={(e) => {
                                setIsFieldInFocus(true), (e.target.type = 'number');
                              }}
                              onBlur={(e) => {
                                setIsFieldInFocus(false), (e.target.type = 'text');
                              }}
                              name="premiumAmount"
                              onWheel={(event) => event.currentTarget.blur()}
                              value={
                                isFieldInFocus
                                  ? marineData?.premiumAmount
                                  :'INR ' +
                                    Number(marineData?.premiumAmount)?.toLocaleString( 'en-In')
                              }
                              onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Premium Amount
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.wrapper} vessel_card border_color card`}>
                <div
                  className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
                >
                  <h2 className="mb-0">Storage Insurance Details</h2>
                  <div className={styles.radio_label}>
                    Insurance From:{' '}
                    <span className={styles.insurance_from} style={{ color: '#111111' }}>
                      Domestic
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className={`${styles.radio_label}`}>Is the Insurer same as Marine Insurance?</div>
                    <div className={`${styles.theme} d-flex align-items-center`}>
                      <div className={`${styles.toggle_label} form-check-label mr-3`}>Yes</div>
                      <label className={styles.switch}>
                        <input checked={!isInsurerSameData} onClick={() => handleIsInsuranceSame()} type="checkbox" />
                        <span className={`${styles.slider} ${styles.round}`}></span>
                      </label>
                      <div className={`${styles.toggle_label} form-check-label ml-3 mr-3`}>No</div>
                    </div>

                    <span
                      data-toggle="collapse"
                      data-target="#storageInsurance"
                      aria-expanded="true"
                      aria-controls="storageInsurance"
                    >
                      +
                    </span>
                  </div>{' '}
                </div>
                <div
                  id="storageInsurance"
                  aria-labelledby="storageInsurance"
                >
                  <div className={` ${styles.cardBody} card-body  border_color`}>
                    <div className={` ${styles.content} border_color`}>
                      <div className={` ${styles.body}`}>
                        <Row>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <input
                                className={`${styles.input_field} input form-control`}
                                style={{ color: '#EA3F3F' }}
                                required
                                type="text"
                                value={storageData?.policyNumber}
                                name="policyNumber"
                                onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                              />
                              <label className={`${styles.label_heading} label_heading`}>
                                Policy Number
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <select
                                name="nameOfInsurer"
                                onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                                value={storageData?.nameOfInsurer}
                                className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                              >
                              <option selected value =''>
                                  Select an option
                                </option>
                                {nameOfInsurerArray.map((val,index)=>{
                                  return <option value={val}>{val}</option>
                                })}
                              </select>
                              <label className={`${styles.label_heading} label_heading`}>
                                Name of Insurer
                                <strong className="text-danger">*</strong>
                              </label>
                              <img
                                className={`${styles.arrow} image_arrow img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <input
                                className={`${styles.input_field} input form-control`}
                                required
                                name="gstOfInsurer"
                                value={storageData?.gstOfInsurer}
                                onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                                type="text"
                              />
                              <label className={`${styles.label_heading} label_heading`}>
                                GSTIN of Insurer
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                          </Col>

                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <select
                                value={storageData?.nameOfInsured}
                                name="nameOfInsured"
                                onChange={(e) => {
                                  gettingCompanyList(e.target.value)
                                   saveStorageData(e.target.name, e.target.value);
                                }}
                                className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                              >
                                <option selected>Select</option>
                                <option value="Indo German International Private Limited">
                                  Indo German International Private Limited
                                </option>
                                <option value="Emergent Industrial Solutions Limited">
                                  Emergent Industrial Solutions Limited
                                </option>
                              </select>
                              <label className={`${styles.label_heading} label_heading`}>
                                Name of Insured
                                <strong className="text-danger ml-1">*</strong>
                              </label>
                              <div className={`${styles.img_arrow} image_arrow`}>
                                <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                              </div>
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                           
                            <div className="d-flex">
                              <select
                                value={storageData?.gstOfInsured}
                                name="gstOfInsured"
                                onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                                className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                              >
                                 <option selected>Select an Option</option>
                                 {option?.length > 0 && [...new Set(option.map(item => item?.keyAddresses[0]?.gstin))].filter((val,index)=>{
                                        if(val !== undefined){
                                          return val
                                        }
                                  }).map((val, index) => {
                                    
                                    return <option value={`${val}`}>{val}</option>;
                                  })}
                              </select>
                              <label className={`${styles.label_heading} label_heading`}>
                                GSTIN of Insured
                                <strong className="text-danger ml-1">*</strong>
                              </label>
                              <div className={`${styles.img_arrow} image_arrow`}>
                                <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                              </div>
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={2} md={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="insuranceFrom"
                                defaultDate={storageData?.insuranceFrom}
                                saveDate={saveStorageDate}
                                labelName="Insurance from"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={2} md={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="insuranceTo"
                                defaultDate={storageData?.insuranceTo}
                                saveDate={saveStorageDate}
                                labelName="Insurance to"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="number"
                              onWheel={(event) => event.currentTarget.blur()}
                              name="periodOfInsurance"
                              value={
                                getDifferenceInDaysStorage()
                                  ? getDifferenceInDaysStorage()
                                  : storageData?.periodOfInsurance
                              }
                              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                              onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Period of Insurance (In days)
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <input
                                name="lossPayee"
                                onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                                value={storageData?.lossPayee}
                                className={`${styles.input_field} ${styles.customSelect} input form-control`}
                              >

                              </input>
                              <label className={`${styles.label_heading} label_heading`}>
                                Loss Payee
                              </label>
                              
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              onFocus={(e) => {
                                setIsFieldInFocus(true), (e.target.type = 'number');
                              }}
                              onBlur={(e) => {
                                setIsFieldInFocus(false), (e.target.type = 'text');
                              }}
                              name="premiumAmount"
                              onWheel={(event) => event.currentTarget.blur()}
                              value={
                                isFieldInFocus
                                  ? storageData?.premiumAmount
                                  : 'INR '+
                                    Number(storageData?.premiumAmount)?.toLocaleString('en-In')
                              }
                              onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                              type="text"
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Premium Amount
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.main} border_color card`}>
                <div
                  className={`${styles.head_container} border_color head_container d-flex align-items-center justify-content-between`}
                  data-toggle="collapse"
                  data-target="#upload"
                  aria-expanded="true"
                  aria-controls="upload"
                >
                  <h3 className={styles.heading}>Upload Documents</h3>
                  <span>+</span>
                </div>
                <div id="upload" className="collapse" aria-labelledby="upload" data-parent="#upload">
                  <div className={`${styles.table_form}`}>
                    <div className={styles.table_container}>
                      <div className={styles.table_scroll_outer}>
                        <div className={styles.table_scroll_inner}>
                          <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                            <thead>
                              <tr>
                                <th>
                                  DOCUMENT NAME{' '}
                                  <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                                </th>
                                <th>
                                  FORMAT <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                                </th>
                                <th>
                                  DOCUMENT DATE{' '}
                                  <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                                </th>
                                <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="table_row">
                                <td className={styles.doc_name}>
                                  Policy Document - Marine
                                  <strong className="text-danger">*</strong>
                                </td>
                                <td>
                                  <img src="/static/pdf.svg" className={`${styles.pdfImage} img-fluid`} alt="Pdf" />
                                </td>
                                <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                                <td>
                                  {insuranceDocument && insuranceDocument.marinePolicyDocument == null ? (
                                    <>
                                      <div className={styles.uploadBtnWrapper}>
                                        <input
                                          type="file"
                                          name="marinePolicyDocument"
                                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                          onChange={(e) => uploadDocument1(e)}
                                        />
                                        <button className={`${styles.button_upload} btn`}>Upload</button>
                                      </div>
                                    </>
                                  ) : (
                                    <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                      <span>{insuranceDocument?.marinePolicyDocument?.name}</span>
                                      <img
                                        className={`${styles.close_image} image_arrow mr-2`}
                                        src="/static/close.svg"
                                        onClick={() => handleClose()}
                                        alt="Close"
                                      />{' '}
                                    </div>
                                  )}
                                </td>
                              </tr>
                              <tr className="table_row">
                                <td className={styles.doc_name}>
                                  Policy Document - Storage
                                  <strong className="text-danger">*</strong>
                                </td>
                                <td>
                                  <img src="/static/pdf.svg" className={`${styles.pdfImage} img-fluid`} alt="Pdf" />
                                </td>
                                <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                                <td>
                                  {insuranceDocument && insuranceDocument?.storagePolicyDocument == null ? (
                                    <>
                                      <div className={styles.uploadBtnWrapper}>
                                        <input
                                          type="file"
                                          name="storagePolicyDocument"
                                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                          onChange={(e) => uploadDocument2(e)}
                                        />
                                        <button className={`${styles.button_upload} btn`}>Upload</button>
                                      </div>
                                    </>
                                  ) : (
                                    <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                      <span>{insuranceDocument?.storagePolicyDocument?.name}</span>
                                      <img
                                        className={`${styles.close_image}  image_arrow mr-2`}
                                        src="/static/close.svg"
                                        onClick={() => handleCloseS()}
                                        alt="Close"
                                      />{' '}
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
        <div className={`${styles.root} card`}>
          <div onClick={() => handleRoute()} className={`${styles.reject} ml-3`}>
            <span>Cancel</span>
          </div>
          <div onClick={() => handleInsuranceUpdate()} className={`${styles.approve} ml-3`}>
            <span>Submit</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
