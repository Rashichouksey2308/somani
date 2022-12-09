/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { Col, Row } from 'react-bootstrap';
import DateCalender from '../DateCalender';
import { useDispatch, useSelector } from 'react-redux';
import { GetLcModule, UpdateLcAmendment } from 'redux/lcModule/action';
import SaveBar from '../SaveBar';
import Router from 'next/router';
import InspectionDocument from '../InspectionDocument';
import { toast } from 'react-toastify';
import _get from 'lodash/get';
import moment from 'moment';
import { setDynamicName, setDynamicOrder, setPageName } from '../../../src/redux/userData/action';
import { handleErrorToast } from '@/utils/helpers/global';
import { getPorts } from 'redux/masters/action';

function Index() {
  const dispatch = useDispatch();

  const { getPortsMasterData } = useSelector((state) => state.MastersData);

  useEffect(() => {
    dispatch(getPorts());
  }, []);

  const [editInput, setEditInput] = useState(false);
  const [editCurrent, setEditCurrent] = useState();
  const [isFieldInFocus, setIsFieldInFocus] = useState({
    existingValue: false,
    newValue: false,
  });
  const handleEdit = (index) => {
    const newArr = [...clauseArr];
    newArr.forEach((val, i) => {
      if (i == index) {
        val.isEdit = !val.isEdit;
      }
    });

    setClauseArr(newArr);
  };

  const { lcModule } = useSelector((state) => state.lc);

  let lcModuleData = _get(lcModule, 'data[0]', {});

  useEffect(() => {
    dispatch(setPageName('Lc'));

    dispatch(setDynamicName(_get(lcModule, 'data[0].company.companyName', 'Company Name')));
    dispatch(setDynamicOrder(_get(lcModule, 'data[0].order.orderId', 'Order Id')));
  }, [lcModuleData]);

  useEffect(() => {
    let id = sessionStorage.getItem('lcAmmend');
    dispatch(GetLcModule(`?lcModuleId=${id}`));
  }, [dispatch]);

  const [lcData, setLcData] = useState();
  console.log(lcData, 'lcData');
  useEffect(() => {
    setLcData({
      formOfDocumentaryCredit: lcModuleData?.lcApplication?.formOfDocumentaryCredit,
      applicableRules: lcModuleData?.lcApplication?.applicableRules,
      dateOfExpiry: lcModuleData?.lcApplication?.dateOfExpiry,
      placeOfExpiry: lcModuleData?.lcApplication?.placeOfExpiry,
      lcIssuingBank: lcModuleData?.lcApplication?.lcIssuingBank || 'First Class European Bank',
      applicant: lcModuleData?.lcApplication?.applicant,
      beneficiary: lcModuleData?.lcApplication?.beneficiary,
      currecyCodeAndAmountValue: lcModuleData?.lcApplication?.currecyCodeAndAmountValue,
      currecyCodeAndAmountUnit: lcModuleData?.lcApplication?.currecyCodeAndAmountUnit,
      tolerancePercentage: lcModuleData?.lcApplication?.tolerancePercentage,
      creditAvailablewith: lcModuleData?.lcApplication?.creditAvailablewith,
      creditAvailableBy: lcModuleData?.lcApplication?.creditAvailableBy,
      atSight: lcModuleData?.lcApplication?.atSight,
      numberOfDays: lcModuleData?.lcApplication?.numberOfDays,
      drawee: lcModuleData?.lcApplication?.drawee,
      deferredPayment: lcModuleData?.lcApplication?.deferredPayment,
      partialShipment: lcModuleData?.lcApplication?.partialShipment,
      transhipments: lcModuleData?.lcApplication?.transhipments,
      shipmentForm: lcModuleData?.lcApplication?.shipmentForm,
      portOfLoading: lcModuleData?.lcApplication?.portOfLoading,
      portOfDischarge: lcModuleData?.lcApplication?.portOfDischarge,
      latestDateOfShipment: lcModuleData?.lcApplication?.latestDateOfShipment,
      DescriptionOfGoods: lcModuleData?.lcApplication?.DescriptionOfGoods,
      presentaionPeriod: lcModuleData?.lcApplication?.presentaionPeriod,
      confirmationInstructions: lcModuleData?.lcApplication?.confirmationInstructions,
      reimbursingBank: lcModuleData?.lcApplication?.reimbursingBank,
      adviceThroughBank: lcModuleData?.lcApplication?.adviceThroughBank,
      secondAdvisingBank: lcModuleData?.lcApplication?.secondAdvisingBank,
      requestedConfirmationParty: lcModuleData?.lcApplication?.requestedConfirmationParty,
      charges: lcModuleData?.lcApplication?.charges,
      instructionToBank: lcModuleData?.lcApplication?.instructionToBank,
      senderToReceiverInformation: lcModuleData?.lcApplication?.senderToReceiverInformation,
      documentaryCreditNumber: lcModuleData?.lcApplication?.documentaryCreditNumber
        ? lcModuleData?.lcApplication?.documentaryCreditNumber
        : '',
      dateOfIssue: lcModuleData?.lcApplication?.dateOfIssue ? lcModuleData?.lcApplication?.dateOfIssue : '',
    });

    setClauseData({
      formOfDocumentaryCredit: lcModuleData?.lcApplication?.formOfDocumentaryCredit,
      applicableRules: lcModuleData?.lcApplication?.applicabIndexleRules,
      dateOfExpiry: lcModuleData?.lcApplication?.dateOfExpiry,
      placeOfExpiry: lcModuleData?.lcApplication?.placeOfExpiry,
      lcIssuingBank: 'ING Bank',
      applicant: lcModuleData?.lcApplication?.applicant,
      beneficiary: lcModuleData?.lcApplication?.beneficiary,
      currecyCodeAndAmountValue: lcModuleData?.lcApplication?.currecyCodeAndAmountValue,
      currecyCodeAndAmountUnit: lcModuleData?.lcApplication?.currecyCodeAndAmountUnit,
      tolerancePercentage: lcModuleData?.lcApplication?.tolerancePercentage,
      creditAvailablewith: lcModuleData?.lcApplication?.creditAvailablewith,
      creditAvailableBy: lcModuleData?.lcApplication?.creditAvailableBy,
      atSight: lcModuleData?.lcApplication?.atSight,
      numberOfDays: lcModuleData?.lcApplication?.numberOfDays,
      drawee: lcModuleData?.lcApplication?.drawee,
      deferredPayment: lcModuleData?.lcApplication?.deferredPayment,
      partialShipment: lcModuleData?.lcApplication?.partialShipment,
      transhipments: lcModuleData?.lcApplication?.transhipments,
      shipmentForm: lcModuleData?.lcApplication?.shipmentForm,
      portOfLoading: lcModuleData?.lcApplication?.portOfLoading,
      portOfDischarge: lcModuleData?.lcApplication?.portOfDischarge,
      latestDateOfShipment: lcModuleData?.lcApplication?.latestDateOfShipment,
      DescriptionOfGoods: lcModuleData?.lcApplication?.DescriptionOfGoods,
      presentaionPeriod: lcModuleData?.lcApplication?.presentaionPeriod,
      confirmationInstructions: lcModuleData?.lcApplication?.confirmationInstructions,
      reimbursingBank: lcModuleData?.lcApplication?.reimbursingBank,
      adviceThroughBank: lcModuleData?.lcApplication?.adviceThroughBank,
      secondAdvisingBank: lcModuleData?.lcApplication?.secondAdvisingBank,
      requestedConfirmationParty: lcModuleData?.lcApplication?.requestedConfirmationParty,
      charges: lcModuleData?.lcApplication?.charges,
      instructionToBank: lcModuleData?.lcApplication?.instructionToBank,
      senderToReceiverInformation: lcModuleData?.lcApplication?.senderToReceiverInformation,
      documentaryCreditNumber: lcModuleData?.lcApplication?.documentaryCreditNumber
        ? lcModuleData?.lcApplication?.documentaryCreditNumber
        : '',
      dateOfIssue: lcModuleData?.lcApplication?.dateOfIssue ? lcModuleData?.lcApplication?.dateOfIssue : '',
    });
  }, [lcModuleData]);

  const saveDate = (value, name) => {
    const d = new Date(value);
    let text = d.toISOString();
    saveAmendmentData(name, text);
  };

  const [clauseData, setClauseData] = useState();

  const saveAmendmentData = (name, value) => {
    const newInput = { ...lcData };
    newInput[name] = value;
    setLcData(newInput);
  };

  const initialState = {
    existingValue: '',
    dropDownValue: '',
    newValue: '',
    isEdit: false,
  };

  const [clauseObj, setClauseObj] = useState(initialState);
  console.log(clauseObj, 'clauseObj');
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);

  const [clauseArr, setClauseArr] = useState([]);
console.log(clauseArr,'clauseArr')
  const [drop, setDrop] = useState('');

  const [fieldType, setFieldType] = useState('');

  const dropDownChange = (e) => {
    if (e.target.value == 'latestDateOfShipment' || e.target.value == 'dateOfExpiry') {
      setFieldType('date');
    } else if (e.target.value == 'currecyCodeAndAmountValue' || e.target.value == 'tolerancePercentage') {
      setFieldType('number');
    } else if (
      e.target.value == 'partialShipment' ||
      e.target.value == 'transhipments' ||
      e.target.value == 'formOfDocumentaryCredit' ||
      e.target.value == 'creditAvailableBy' ||
      e.target.value == 'applicant' ||
      e.target.value == 'portOfDischarge' ||
      e.target.value == 'portOfLoading'
    ) {
      setFieldType('drop');
    } else {
      setFieldType('');
    }

    let newInput = { ...clauseObj };

    let val1 = e.target.options[e.target.selectedIndex].text || '';
    let val2 = e.target.value || '';
    setDrop(val2);

    newInput['existingValue'] = lcData[e.target.value] || '';
    if (e.target.value === 'draftAt')
      newInput['existingValue'] =
        lcData.atSight == 'AT SIGHT' ? 'AT SIGHT' : `Usuance - ${lcData['numberOfDays']} Days` || '';
    newInput['dropDownValue'] = val1 || '';
    newInput['newValue'] = '';

    setClauseObj(newInput);
  };

  const arrChange = (name, value) => {
    const newInput = { ...clauseObj };
    newInput[name] = value;
    setClauseObj(newInput);

    const newInput1 = { ...clauseData };
    if (drop == 'draftAt' && lcModuleData?.lcApplication?.atSight == 'Usuance') {
      newInput1['numberOfDays'] = value;
    } else {
      newInput1[drop] = value;
    }
    setClauseData(newInput1);
  };

  const saveDropDownDate = (value, name) => {
    const d = new Date(value);
    let text = d.toISOString();
    arrChange(name, text);
  };

  const addToArr = () => {
    if (clauseObj.dropDownValue === 'Select an option' || clauseObj.dropDownValue === '')
      handleErrorToast('please select a clause to update value ');
    else if (clauseObj.newValue === 'Select an option' || clauseObj.newValue === '')
      handleErrorToast('Please specify a new value first');
    else if (clauseArr.map((e) => e.dropDownValue).includes(clauseObj.dropDownValue))
      handleErrorToast('CLAUSE ALREADY ADDED');
    else {
      let tempClauseObj = { ...clauseObj };
      if (clauseObj.dropDownValue == '(42C) Draft At') {
        tempClauseObj.existingValue=  tempClauseObj.existingValue.slice(10,tempClauseObj.existingValue.length - 5);
      }
      const newArr = [...clauseArr];
      if (fieldType == 'date' || fieldType == 'drop' || fieldType == 'number') {
        setFieldType('');
      }
      inputRef1.current.value = '';
      setClauseObj(initialState);
      newArr.push(tempClauseObj);
      setClauseArr(newArr);
      // setClauseObj({
      //   existingValue: '',
      //   dropDownValue: '',
      //   newValue: '',
      // })
    }
  };

  const removeFromArr = (arr) => {
    const newClause = clauseArr.filter((item) => {
      return item.dropDownValue !== arr;
    });
    setClauseArr(newClause);
  };

  const [lcDoc, setLcDoc] = useState({
    lcDraftDoc: null,
  });

  const uploadDocument1 = (e) => {
    const newInput = { ...lcDoc };
    newInput.lcDraftDoc = e.target.files[0];
    setLcDoc(newInput);
  };

  const validation = () => {
    if (lcData.documentaryCreditNumber === '' || lcData.documentaryCreditNumber == undefined) {
      let toastMessage = 'DOCUMENTARY CREDIT NUMBER IS MANDATORY';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
      return false;
    } else if (lcData.lcIssuingBank === '' || lcData.lcIssuingBank == undefined) {
      let toastMessage = 'SELECT LC ISSUING BANK FROM DROPDOWN';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
      return false;
    } else if (lcData.dateOfIssue === '' || lcData.dateOfIssue == undefined) {
      let toastMessage = 'DATE OF ISSUE IS MANDATORY';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
      return false;
    } else if (lcDoc.lcDraftDoc === '' || lcDoc.lcDraftDoc == undefined) {
      let toastMessage = 'PLEASE UPLOAD LC DRAFT';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validation()) return;
    console.log(clauseArr, 'clauseArr');
    let sendLcData = { ...clauseData };
    console.log(sendLcData, 'sendLcData');
    let isOK = [];
    clauseArr.forEach((val, index) => {
      if (val.dropDownValue == '(31D) Date Of Expiry') {
        isOK.push('date');
      }
      if (val.dropDownValue == '(31D) Place Of Expiry') {
        isOK.push('place');
      }
    });
    if (!isOK.includes('date')) {
      let toastMessage = 'PLEASE ADD DATE OF EXPIRY';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
      return false;
    }
    if (!isOK.includes('place')) {
      let toastMessage = 'PLEASE ADD PLACE OF EXPIRY';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
      return false;
    }

    sendLcData.documentaryCreditNumber = lcData.documentaryCreditNumber;
    sendLcData.dateOfIssue = lcData.dateOfIssue;
    setLcData(sendLcData);

    let fd = new FormData();
    fd.append('lcApplication', JSON.stringify(sendLcData));
    fd.append('lcModuleId', JSON.stringify(lcModuleData._id));
    fd.append('document1', lcDoc.lcDraftDoc);

    dispatch(UpdateLcAmendment(fd));
  };

  const [existingValue, setExistingValue] = useState('');

  const getDataFormDropDown = (value) => {
    if (fieldType == 'date') {
      setExistingValue(moment(value).format('DD-MM-YYYY'));
    }
    if (fieldType == 'number') {
      setExistingValue(
        Number(value).toLocaleString('en-In', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      );
    } else if (fieldType == 'drop') {
      if (value == 'Yes') {
        setExistingValue('Allowed');
        return;
      }
      if (value == 'No') {
        setExistingValue('Not Allowed');
        return;
      }
      if (value == 'Conditional') {
        setExistingValue('Conditional');
        return;
      }
      if (value == '') {
        setExistingValue('');
      } else {
        setExistingValue(value);
      }
    } else {
      setExistingValue(value);
    }
  };
  const getValue = (value, toCheck) => {
    if (toCheck == '(31D) Date Of Expiry' || toCheck == '(44C) Latest Date Of Shipment') {
      return moment(value).format('DD-MM-YYYY');
    } else if (toCheck == '(43P) Partial Shipment' || toCheck == '(43T) Transhipments') {
      if (value == 'Yes') {
        return 'Allowed';
      }
      if (value == 'No') {
        return 'Not Allowed';
      }
      if (value == 'Conditional') {
        return 'Conditional';
      }
      if (value == '') {
        return '';
      }
    } else if (toCheck == '(32B) Currency Code & Amount') {
      return Number(value).toLocaleString('en-In', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    } else {
      return value;
    }
  };

  useEffect(() => {
    getDataFormDropDown(editInput ? editCurrent?.existingValue : clauseObj?.existingValue);
  }, [editCurrent?.existingValue, clauseObj?.existingValue]);

  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    if (clauseObj?.dropDownValue == '(42C) Draft At') {
      if (lcModuleData?.lcApplication?.atSight == 'AT SIGHT') {
        setDisabled(true);
      }
    } else {
      setDisabled(false);
    }
  }, [clauseObj]);

  const getExistingValue = (value, existing) => {
    if (value === '(32B) Currency Code & Amount') {
      return `${lcModuleData?.order?.orderCurrency}  ${Number(
        lcModuleData?.lcApplication?.currecyCodeAndAmountValue,
      )?.toLocaleString('en-In', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    } else if (value === '(43T) Transhipments') {
      return lcModuleData?.lcApplication?.transhipments == undefined ? '' : lcModuleData?.lcApplication?.transhipments;
    } else if (value === '(39A) Tolerance (+/-) Percentage') {
      return `(+/-) ${getValue(existing, value)}  %`;
    } else if (value === '(42C) Draft At') {
      return `Usuance - ${getValue(existing, value)} days`;
    } else {
      return getValue(existing, value);
    }
  };

  return (
    <>
      {' '}
      <div className="container-fluid p-0 border-0">
        <div className={`${styles.container_inner} vessel_card`}>
          <div className={`${styles.head_header}`}>
            <img
              className={`${styles.back_arrow} image_arrow mr-2 img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
              onClick={() => Router.push('/lc-module')}
              style={{ cursor: 'pointer' }}
            />
            <h1 className={`${styles.heading}`}>{lcModuleData?.company?.companyName} </h1>
          </div>

          <div className={`${styles.wrapper} card upload_main`}>
            <div
              className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#lcApplication"
              aria-expanded="true"
              aria-controls="lcApplication"
            >
              <h2 className="mb-0">LC Details</h2>
              <span>+</span>
            </div>
            <div
              id="lcApplication"
              // className="collapse"
              aria-labelledby="lcApplication"
              data-parent="#lcApplication"
            >
              <div className={` ${styles.cardBody} card-body  border_color`}>
                <div className={` ${styles.content}`}>
                  <div className={` ${styles.body}`}>
                    <Row>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <select
                            name="lcIssuingBank"
                            required
                            onChange={(e) => saveAmendmentData(e.target.name, e.target.value)}
                            className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            value={lcData?.lcIssuingBank}
                          >
                            <option selected disabled>
                              Select an option
                            </option>
                            <option value="ING Bank">ING Bank</option>
                          </select>

                          <label className={`${styles.label_heading} label_heading`}>
                            (51D) LC Issuing Bank
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
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          name="documentaryCreditNumber"
                          value={lcData?.documentaryCreditNumber}
                          onChange={(e) => saveAmendmentData(e.target.name, e.target.value)}
                        />
                        <label className={`${styles.label_heading} label_heading`}>
                          (20) Documentary Credit Number
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <DateCalender
                            name="dateOfIssue"
                            value={lcData?.dateOfIssue}
                            saveDate={saveDate}
                            labelName="(31C) Date Of Issue"
                          />
                          <img
                            className={`${styles.calanderIcon} image_arrow img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                <hr className={`${styles.line} border_color`}></hr>

                <div className={` ${styles.content}`}>
                  <div className={` ${styles.body}`}>
                    <Row>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <select
                            defaultValue={editInput ? editCurrent.dropDownValue : ''}
                            ref={inputRef1}
                            onChange={(e) => dropDownChange(e)}
                            className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          >
                            <option value="">Select an option</option>
                            <option value="formOfDocumentaryCredit">(40A) Form of Documentary Credit</option>
                            <option value="applicableRules">(40E) Application Rules</option>
                            <option value="dateOfExpiry">(31D) Date Of Expiry</option>
                            <option value="placeOfExpiry">(31D) Place Of Expiry</option>
                            <option value="lcIssuingBank">(51D) LC Issuing Bank</option>
                            <option value="applicant">(50) Applicant</option>
                            <option value="beneficiary">(59) Beneficiary</option>
                            <option value="currecyCodeAndAmountValue">(32B) Currency Code &amp; Amount</option>
                            <option value="tolerancePercentage">(39A) Tolerance (+/-) Percentage</option>
                            <option value="creditAvailablewith"> (41A) Credit Available With</option>
                            <option value="creditAvailableBy">(41A) Credit Available By</option>
                            <option value="draftAt">(42C) Draft At</option>
                            <option value="drawee">(42A) Drawee</option>
                            <option value="deferredPayment">(42P) Deferred Payment</option>
                            <option value="partialShipment">(43P) Partial Shipment</option>
                            <option value="transhipments">(43T) Transhipments</option>
                            <option value="shipmentForm">(44A) Place of taking in Charge</option>
                            <option value="portOfLoading">(44E) Port of Loading</option>
                            <option value="portOfDischarge"> (44F) Port of Discharge</option>
                            <option value="latestDateOfShipment">(44C) Latest Date Of Shipment</option>
                            <option value="DescriptionOfGoods"> (45A) Description Of The Goods</option>
                            <option value="lcDocuments">46A DOCUMENT REQUIRED</option>
                            <option value="lcComments"> 47A ADDITIONAL CONDITIONS</option>
                            <option value="presentaionPeriod"> (48) Presentation Period</option>
                            <option value="confirmationInstructions"> (49) Confirmation Instructions</option>
                            <option value="reimbursingBank"> (53A) Reimbursing Bank</option>
                            <option value="adviceThroughBank"> (57) Advise Through Bank</option>
                            <option value="secondAdvisingBank"> (57A) Second Advising Bank, if Applicable</option>
                            <option value="requestedConfirmationParty">(58A) Requested Confirmation Party</option>
                            <option value="charges"> (71B) Charges</option>
                            <option value="instructionToBank">
                              {' '}
                              (78) Instructions To Paying / Accepting / Negotiating Bank
                            </option>
                            <option value="senderToReceiverInformation"> (72) Sender To Receiver Information</option>
                          </select>

                          <label className={`${styles.label_heading} label_heading`}>Clause</label>
                          <img
                            className={`${styles.arrow} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <form id="myForm">
                          <input
                            className={`${styles.input_field} input form-control`}
                            disabled
                            type="text"
                            value={fieldType == 'date' ? moment(existingValue).format('DD-MM-YYYY') : existingValue}
                          />
                        </form>
                        <label className={`${styles.label_heading} label_heading`}>Existing Value</label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6}>
                        <div className="d-flex align-items-center">
                          {fieldType == '' ? (
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              value={clauseObj?.newValue}
                              disabled={isDisabled}
                              onChange={(e) => {
                                arrChange('newValue', e.target.value);
                              }}
                            />
                          ) : null}
                          {fieldType == 'number' ? (
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              onWheel={(event) => event.currentTarget.blur()}
                              type="number"
                              value={clauseObj?.newValue}
                              disabled={isDisabled}
                              onChange={(e) => {
                                arrChange('newValue', e.target.value);
                              }}
                            />
                          ) : null}
                          {fieldType == 'date' ? (
                            <>
                              <DateCalender
                                name="newValue"
                                defaultDate={clauseObj?.newValue}
                                saveDate={saveDropDownDate}
                                // labelName="New Value"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </>
                          ) : null}
                          {fieldType == 'drop' ? (
                            <>
                              <select
                                value={clauseObj?.newValue}
                                onChange={(e) => {
                                  // inputRef.current.value = ''
                                  arrChange('newValue', e.target.value);
                                }}
                                className={`${styles.input_field} ${styles.customSelect} input form-control`}
                              >
                                <option value="" selected>
                                  Select an option
                                </option>
                                {clauseObj.dropDownValue === '(50) Applicant' ? (
                                  <>
                                    <option value="Indo intertrade AG">Indo intertrade AG</option>
                                  </>
                                ) : clauseObj.dropDownValue === '(40A) Form of Documentary Credit' ? (
                                  <>
                                    {' '}
                                    <option value="Irrevocable">Irrevocable</option>
                                    <option value="Revocable">Revocable</option>
                                  </>
                                ) : clauseObj.dropDownValue === '(41A) Credit Available With' ? (
                                  <>
                                    {' '}
                                    <option value="BNP PARIBAS PARIBAS _ BNPAFRPPS">
                                      BNP PARIBAS PARIBAS _ BNPAFRPPS
                                    </option>
                                    <option value="BNP_BNPAFRPPS">BNP_BNPAFRPPS</option>
                                  </>
                                ) : clauseObj.dropDownValue === '(41A) Credit Available By' ? (
                                  <>
                                    {' '}
                                    <option value="By Negotiation">By Negotiation</option>
                                    <option value="By Payment">By Payment</option>
                                    <option value="By Acceptance">By Acceptance</option>
                                    <option value="By Deffered Payment">By Deffered Payment</option>
                                  </>
                                ) : clauseObj.dropDownValue === '(43T) Transhipments' ? (
                                  <>
                                    {' '}
                                    <option value="Yes">Allowed</option>
                                    <option value="No">Not Allowed</option>
                                  </>
                                ) : clauseObj.dropDownValue === '(44F) Port of Discharge' ? (
                                  <>
                                    {getPortsMasterData
                                      .filter((val, index) => {
                                        if (
                                          val.Country.toLowerCase() == 'india' &&
                                          val.Approved.toLowerCase() == 'yes'
                                        ) {
                                          return val;
                                        }
                                      })
                                      .map((val, index) => {
                                        return (
                                          <option value={`${val.Port_Name}`}>
                                            {val.Port_Name}, {val.Country}
                                          </option>
                                        );
                                      })}
                                  </>
                                ) : clauseObj.dropDownValue === '(44E) Port of Loading' ? (
                                  <>
                                    {getPortsMasterData
                                      .filter((val, index) => {
                                        if (val.Country.toLowerCase() !== 'india') {
                                          return val;
                                        }
                                      })
                                      .map((val, index) => {
                                        return (
                                          <option value={`${val.Port_Name}`}>
                                            {val.Port_Name}, {val.Country}
                                          </option>
                                        );
                                      })}
                                  </>
                                ) : (
                                  <>
                                    <option value="Yes">Allowed</option>
                                    <option value="No">Not Allowed</option>
                                    <option value="Conditional">Conditional</option>
                                  </>
                                )}
                              </select>

                              <img
                                className={`${styles.arrow} image_arrow img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                              />
                            </>
                          ) : null}
                          <label className={`${styles.label_heading} label_heading`}>
                            New Value<strong className="text-danger">*</strong>
                          </label>
                          {fieldType == '' ? (
                            <img
                              className={`${styles.add_btn} ml-4`}
                              src="/static/add-btn.svg"
                              alt="add button"
                              onClick={() => addToArr()}
                            />
                          ) : (
                            <img
                              className={`${styles.add_btn}`}
                              style={{ marginLeft: '40px' }}
                              src="/static/add-btn.svg"
                              alt="add button"
                              onClick={() => addToArr()}
                            />
                          )}
                        </div>
                      </Col>
                    </Row>

                    <div className={styles.table_container}>
                      <div className={styles.table_scroll_outer}>
                        <div className={styles.table_scroll_inner}>
                          <table className={`${styles.table_clause} table`} cellPadding="0" cellSpacing="0" border="0">
                            <thead>
                              <tr>
                                <th width="35%" className={`${styles.table_header} text`}>
                                  CLAUSE{' '}
                                </th>
                                <th className={`${styles.table_header} text`}>EXISTING VALUE</th>
                                <th className={`${styles.table_header} text`}>NEW VALUE</th>
                                <th className={`${styles.table_header}`}></th>
                              </tr>
                            </thead>
                            <tbody>
                              {clauseArr &&
                                clauseArr?.map((arr, index) =>
                                  arr.isEdit ? (
                                    <>
                                      <tr key={index} className="table_row">
                                        <td>
                                          <div className="d-flex">
                                            <select
                                              defaultValue={editInput ? editCurrent.dropDownValue : ''}
                                              onChange={(e) => dropDownChange(e)}
                                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                            >
                                              <option value="">Select an option</option>
                                              <option value="shipmentForm">(44A) Shipment From</option>
                                              <option value="applicableRules">(40E) Application Rules</option>
                                              <option value="placeOfExpiry">(32D) Place Of Expiry</option>
                                              <option value="dateOfExpiry">(32D) Date Of Expiry</option>
                                              <option value="formOfDocumentaryCredit">
                                                (40A) Form of Documentary Credit
                                              </option>
                                              <option value="applicant">(50) Applicant</option>
                                              <option value="beneficiary">(59) Beneficiary</option>
                                              <option value="currecyCodeAndAmountValue">
                                                (32B) Currency Code &amp; Amount
                                              </option>
                                              <option value="tolerancePercentage">
                                                (39A) Tolerance (+/-) Percentage
                                              </option>
                                              <option value="creditAvailablewith"> (41A) Credit Available With</option>
                                              <option value="creditAvailableBy">(41A) Credit Available By</option>
                                              <option value="draftAt">(42C) Draft At</option>
                                              <option value="drawee">(42A) Drawee</option>
                                              <option value="deferredPayment">(42P) Deferred Payment</option>
                                              <option value="partialShipment">(43P) Partial Shipment</option>
                                              <option value="transhipments">(43T) Transhipments</option>
                                              <option value="portOfLoading">(44E) Port of Loading</option>
                                              <option value="portOfDischarge"> (44F) Port of Discharge</option>
                                              <option value="latestDateOfShipment">
                                                (44C) Latest Date Of Shipment
                                              </option>
                                              <option value="DescriptionOfGoods">
                                                {' '}
                                                (45A) Description Of The Goods
                                              </option>
                                            </select>

                                            <label className={`${styles.label_heading} label_heading`}>Clause</label>
                                            <img
                                              className={`${styles.arrow} image_arrow img-fluid`}
                                              src="/static/inputDropDown.svg"
                                              alt="Search"
                                            />
                                          </div>
                                        </td>
                                        <td>
                                          <input
                                            className={`${styles.input_field} input form-control`}
                                            disabled
                                            type="text"
                                            value={existingValue}
                                          />
                                          <label className={`${styles.label_heading} label_heading`}>
                                            Existing Value
                                          </label>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            {!fieldType ? (
                                              <input
                                                className={`${styles.input_field} input form-control`}
                                                required
                                                type="text"
                                                ref={inputRef}
                                                value={editInput ? editCurrent?.newValue : ''}
                                                onChange={(e) => {
                                                  inputRef.current.value = '';
                                                  arrChange('newValue', e.target.value);
                                                }}
                                              />
                                            ) : (
                                              <>
                                                <DateCalender
                                                  name="newValue"
                                                  // defaultDate={lcData?.dateOfIssue?.split('T')[0]}
                                                  saveDate={saveDropDownDate}
                                                  // labelName="New Value"
                                                />
                                              </>
                                            )}
                                            <label className={`${styles.label_heading} label_heading`}>
                                              New Value
                                              <strong className="text-danger">*</strong>
                                            </label>
                                          </div>
                                        </td>
                                        <td>
                                          {/* <img
                                            src="/static/mode_edit.svg"
                                            className={`${styles.image} ml-3`}
                                            alt="edit"
                                            onClick={() => handleEdit(index)}
                                          /> */}
                                          <img
                                            src="/static/delete 2.svg"
                                            className="ml-3"
                                            alt="delete"
                                            onClick={() => removeFromArr(arr.dropDownValue)}
                                          />
                                        </td>
                                      </tr>
                                    </>
                                  ) : (
                                    <>
                                      <tr key={index} className="table_row">
                                        <td>{arr.dropDownValue}</td>
                                        <td>{getExistingValue(arr.dropDownValue, arr.existingValue)}</td>
                                        <td>
                                          
                                        {arr.dropDownValue === '(42C) Draft At' &&lcData?.atSight == 'Usuance'
                                            ? `Usuance - ${getValue(arr.newValue, arr.dropDownValue)} days `
                                            :arr.dropDownValue === '(32B) Currency Code & Amount'
                                            ? `${lcModuleData?.order?.orderCurrency} `
                                            : arr.dropDownValue === '(39A) Tolerance (+/-) Percentage'
                                            ? `(+/-) ${getValue(arr.newValue, arr.dropDownValue)}  %`
                                            : getValue(arr.newValue, arr.dropDownValue)}
                                        </td>
                                        <td>
                                          {/* <img
                                            src="/static/mode_edit.svg"
                                            className={`${styles.image} ml-3`}
                                            alt="edit"
                                            onClick={() => handleEdit(index)}
                                          /> */}
                                          <img
                                            src="/static/delete 2.svg"
                                            className="ml-3"
                                            alt="delete"
                                            onClick={() => removeFromArr(arr.dropDownValue)}
                                          />
                                        </td>
                                      </tr>
                                    </>
                                  ),
                                )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Document*/}
          <div className="">
            <InspectionDocument
              setLcDoc={setLcDoc}
              lcDoc={lcDoc}
              orderId={lcModuleData?.order?._id}
              uploadDocument1={uploadDocument1}
              documentName="LC DRAFT"
              module={['Generic', 'Agreements', 'LC', 'LC Ammendment', 'Vessel Nomination', 'Insurance']}
            />
          </div>
        </div>
      </div>
      <SaveBar
        // handleSave={handleSubmit}
        rightBtnClick={handleSubmit}
        rightBtn="Submit"
        buttonText="null"
      />
    </>
  );
}

export default Index;
