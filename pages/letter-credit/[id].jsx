/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import styles from './letter.module.scss';
import { Col, Row } from 'react-bootstrap';
import InspectionDocument from '../../src/components/InspectionDocument';
import UploadOther from '../../src/components/UploadOther';
import DateCalender from '../../src/components/DateCalender';
import SaveBar from '../../src/components/SaveBar';

import Router from 'next/router';
import { removePrefixOrSuffix } from '../../src/utils/helper';
import _get from 'lodash/get';
import { toast } from 'react-toastify';
import moment from 'moment/moment';
import { handleErrorToast } from '@/utils/helpers/global';

///REDUX/////
import { useDispatch, useSelector } from 'react-redux';
import { GetLcModule, UpdateAmendment } from '../../src/redux/lcModule/action';
import { setDynamicName, setDynamicOrder, setPageName } from '../../src/redux/userData/action';
import { getPorts } from '../../src/redux/masters/action';

function Index() {
  const dispatch = useDispatch();

  const { lcModule } = useSelector((state) => state.lc);

  const { getPortsMasterData } = useSelector((state) => state.MastersData);

  useEffect(() => {
    dispatch(getPorts());
  }, []);

  let lcModuleData = _get(lcModule, 'data[0]', {});

  const [editInput, setEditInput] = useState(false);
  const [editCurrent, setEditCurrent] = useState();

  const handleEdit = (val) => {
    setEditCurrent(val);
    setEditInput(true);
  };

  useEffect(() => {
    let id = sessionStorage.getItem('lcAmmend');
    dispatch(GetLcModule(`?lcModuleId=${id}`));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setPageName('Lc'));
    dispatch(setDynamicName(lcModuleData?.company?.companyName));
    dispatch(
      setDynamicOrder(lcModuleData?.order?.orderId ? lcModuleData?.order?.orderId : lcModuleData?.order?.applicationId),
    );
  }, [lcModuleData]);

  const [lcData, setLcData] = useState();
  const [lcData2, setLcData2] = useState();

  useEffect(() => {
    setLcData({
      formOfDocumentaryCredit: lcModuleData?.lcApplication?.formOfDocumentaryCredit,
      applicableRules: lcModuleData?.lcApplication?.applicableRules,
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
      portOfLoading: lcModuleData?.lcApplication?.portOfLoading
        ? lcModuleData?.lcApplication?.portOfLoading
        : lcModuleData?.order?.termsheet?.transactionDetails?.loadPort,
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
      documentaryCreditNumber: lcModuleData?.lcApplication?.documentaryCreditNumber,
      dateOfIssue: lcModuleData?.lcApplication?.dateOfIssue,
      dateOfAmendment: lcModuleData?.lcApplication?.dateOfAmendment,
      numberOfAmendment: lcModuleData?.lcApplication?.numberOfAmendment,
    });
    setLcData2({
      formOfDocumentaryCredit: lcModuleData?.lcApplication?.formOfDocumentaryCredit,
      applicableRules: lcModuleData?.lcApplication?.applicableRules,
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
      portOfLoading: lcModuleData?.lcApplication?.portOfLoading
        ? lcModuleData?.lcApplication?.portOfLoading
        : lcModuleData?.order?.termsheet?.transactionDetails?.loadPort,
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
      documentaryCreditNumber: lcModuleData?.lcApplication?.documentaryCreditNumber,
      dateOfIssue: lcModuleData?.lcApplication?.dateOfIssue,
      dateOfAmendment: lcModuleData?.lcApplication?.dateOfAmendment,
      numberOfAmendment: lcModuleData?.lcApplication?.numberOfAmendment,
    });
    if (
      lcModuleData?.document?.length > 0 &&
      (lcModuleData?.document[0]?.documentName !== '' || lcModuleData?.document[0]?.documentDate)
    ) {
      setLcDoc({
        lcDraftDoc: lcModuleData?.document?.length > 0 ? lcModuleData?.document[0] : null,
      });
    }
  }, [lcModuleData]);

  const saveAmendmentData = (name, value) => {
    const newInput = { ...lcData };
    newInput[name] = value;
    setLcData(newInput);
  };

  const saveDate = (value, name) => {
    const d = new Date(value);
    let text = d.toISOString();
    saveAmendmentData(name, text);
  };

  const initialState = {
    existingValue: '',
    dropDownValue: '',
    newValue: '',
    isEdit: false,
  };

  const [clauseObj, setClauseObj] = useState(initialState);

  const [clauseArr, setClauseArr] = useState([]);

  const [drop, setDrop] = useState('');

  const [fieldType, setFieldType] = useState('');

  const inputRef = useRef(null);
  const inputRef1 = useRef(null);

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

    let val1 = e.target.options[e.target.selectedIndex].text;
    let val2 = e.target.value;
    setDrop(val2);

    newInput['existingValue'] = lcData ? lcData[e.target.value] : '';
    if (e.target.value === 'draftAt')
      newInput['existingValue'] =
        lcData?.atSight == 'AT SIGHT' ? 'AT SIGHT' : `Usuance - ${ lcData ?lcData['numberOfDays']: ''} Days` || '';
    newInput['dropDownValue'] = val1 || '';

    setClauseObj(newInput);
    if (e.target.value == 'draftAt') {
      if (lcModuleData?.lcApplication?.atSight == 'AT SIGHT') {
        setDisabled(true);
      }
    } else {
      setDisabled(false);
    }
  };

  const arrChange = (name, value) => {
    const newInput = { ...clauseObj };
    newInput[name] = value;
    setClauseObj(newInput);

    const newInput1 = { ...lcData2 };
    if (drop == 'draftAt' && lcModuleData?.lcApplication?.atSight == 'Usuance') {
      newInput1['numberOfDays'] = value;
    } else {
      newInput1[drop] = value;
    }

    setLcData2(newInput1);
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
        tempClauseObj.existingValue = tempClauseObj.existingValue.slice(10, tempClauseObj.existingValue.length - 5);
      }
      const newArr = [...clauseArr];
      if (fieldType == 'date' || fieldType == 'drop' || fieldType == 'number') {
        setFieldType('');
      }
      inputRef1.current.value = '';
      setClauseObj(initialState);
      newArr.push(tempClauseObj);
      setClauseArr(newArr);
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

  const handleRightButton = () => {
    if (lcData.dateOfAmendment === '' || lcData.dateOfAmendment == undefined) {
      let toastMessage = 'DATE OF AMENDMENT IS MANDATORY';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
    } else if (lcData.numberOfAmendment === '' || lcData.numberOfAmendment == undefined) {
      let toastMessage = 'NUMBER OF AMENDMENT IS MANDATORY';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
    } else if (lcDoc.lcDraftDoc === '' || lcDoc.lcDraftDoc == undefined) {
      let toastMessage = 'PLEASE UPLOAD LC DRAFT';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
    } else {

      let sendLcData = { ...lcData2 };
      sendLcData.tolerancePercentage = Number(removePrefixOrSuffix(lcData2?.tolerancePercentage));
      sendLcData.numberOfAmendment = lcData.numberOfAmendment
      sendLcData.dateOfAmendment = lcData.dateOfAmendment
      const task = lcModuleData.isPostAmmended;

      let fd = new FormData();

      fd.append('lcNewApplication', JSON.stringify(clauseArr));
      fd.append('lcApplication', JSON.stringify(sendLcData));
      fd.append('lcModuleId', JSON.stringify(lcModuleData._id));
      fd.append('isPostAmmended', true);
      fd.append('route', lcModuleData.isPostAmmended ? 'PostUpdated' : 'update');
      fd.append('document1', lcDoc.lcDraftDoc);

      dispatch(UpdateAmendment({ fd, task }));
    }
  };

  // const handleSubmit = () => {
  //   if (lcData.dateOfAmendment === '' || lcData.dateOfAmendment == undefined) {
  //     let toastMessage = 'DATE OF AMENDMENT IS MANDATORY';
  //     if (!toast.isActive(toastMessage)) {
  //       toast.error(toastMessage, { toastId: toastMessage });
  //     }
  //   } else if (lcData.numberOfAmendment === '' || lcData.numberOfAmendment == undefined) {
  //     let toastMessage = 'NUMBER OF AMENDMENT IS MANDATORY';
  //     if (!toast.isActive(toastMessage)) {
  //       toast.error(toastMessage, { toastId: toastMessage });
  //     }
  //   } else if (lcDoc.lcDraftDoc === '' || lcDoc.lcDraftDoc == undefined) {
  //     let toastMessage = 'PLEASE UPLOAD LC AMENDMENT DRAFT';
  //     if (!toast.isActive(toastMessage)) {
  //       toast.error(toastMessage, { toastId: toastMessage });
  //     }
  //   } else {
  //     let tempData = { ...lcData };

  //     let fd = new FormData();
  //     fd.append('lcApplication', JSON.stringify(tempData));
  //     fd.append('lcModuleId', JSON.stringify(lcModuleData._id));
  //     fd.append('document1', lcDoc.lcDraftDoc);

  //     dispatch(UpdateAmendment(fd));
  //   }
  // };

  const getData = (value, type) => {
    if (type == '(43P) Partial Shipment' && value == 'Conditional') {
      return 'Conditional';
    }
    if (type == '(44C) Latest Date Of Shipment' || type == '(31D) Date Of Expiry') {
      return value ? moment(value).format('DD-MM-YYYY') : '';
    } else if (type == '(43P) Partial Shipment' || type == '(43T) Transhipments') {
      return value == 'Yes' ? 'Allowed' : 'Not Allowed';
    } else if (type == '(44F) Port of Discharge') {
      return `${value}, India`;
    } else if (type == '(32B) Currency Code & Amount') {
      return Number(value).toLocaleString(lcModuleData?.order?.orderCurrency === 'INR' ? 'en-In' : 'en-En', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    } else {
      return value;
    }
  };

  const [existingValue, setExistingValue] = useState('');

  const getDataFormDropDown = (value) => {
    if (fieldType == 'date') {
      setExistingValue(moment(value).format('DD-MM-YYYY'));
    }
    if (fieldType == 'number') {
      setExistingValue(
        Number(value).toLocaleString(lcModuleData?.order?.orderCurrency === 'INR' ? 'en-In' : 'en-En', {
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

  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    getDataFormDropDown(editInput ? editCurrent?.existingValue : clauseObj?.existingValue);
  }, [editCurrent?.existingValue, clauseObj?.existingValue]);

  // useEffect(() => {}, [clauseObj]);

  const getExistingValue = (value, existing) => {
    if (value === '(32B) Currency Code & Amount') {
      return `${lcModuleData?.order?.orderCurrency}  ${Number(
        lcModuleData?.lcApplication?.currecyCodeAndAmountValue,
      )?.toLocaleString(lcModuleData?.order?.orderCurrency === 'INR' ? 'en-In' : 'en-En', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    } else if (value === '(43T) Transhipments') {
      return lcModuleData?.lcApplication?.transhipments == undefined
        ? ''
        : lcModuleData?.lcApplication?.transhipments == 'Yes'
        ? 'Allowed'
        : 'Not Allowed';
    } else if (value === '(39A) Tolerance (+/-) Percentage') {
      return `(+/-) ${getData(existing, value)}  %`;
    } else if (value === '(42C) Draft At' && lcData.atSight == 'Usuance') {
      return `Usuance - ${getData(existing, value)} days`;
    } else if (value === '(44F) Port of Discharge') {
      return `${getData(existing, value)}`;
    } else {
      return getData(existing, value);
    }
  };

  return (
    <>
      {' '}
      <div className="container-fluid p-0 border-0">
        <div className={`${styles.container_fluid}`}>
          <div className={styles.head_header}>
            <img
              onClick={() => Router.push('/lc-module')}
              className={`${styles.back_arrow} image_arrow mr-2 img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={`${styles.heading}`}>{lcModuleData?.company?.companyName} </h1>
          </div>

          <div className={`${styles.wrapper} vessel_card card upload_main`}>
            <div
              className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#lcApplication"
              aria-expanded="true"
              aria-controls="lcApplication"
            >
              <h2 className="mb-0">LC Amendment</h2>
              <span>+</span>
            </div>
            <div
              id="lcApplication"
              //className="collapse"
              aria-labelledby="lcApplication"
              data-parent="#lcApplication"
            >
              <div className={` ${styles.cardBody} vessel_card card-body  border_color`}>
                <div className={` ${styles.content}`}>
                  <div className={` ${styles.body}`}>
                    <Row>
                      <div className={`${styles.form_group} mt-3 col-lg-3 col-md-6 col-sm-6 `}>
                        <div className={`${styles.label} mb-2 text`}>
                          (51D) LC Issuing Bank <strong className="text-danger ml-n1">*</strong>
                        </div>
                        <span className={`${styles.value}`}>{lcModuleData?.lcApplication?.lcIssuingBank}</span>
                      </div>
                      <div className={`${styles.form_group} mt-3 col-lg-3 col-md-6 col-sm-6 `}>
                        <div className={`${styles.label}  mb-2 text`}>
                          (20) Documentary Credit Number <strong className="text-danger ml-n1">*</strong>
                        </div>
                        <span className={styles.value}>{lcModuleData?.lcApplication?.documentaryCreditNumber}</span>
                      </div>
                      <div className={`${styles.form_group} mt-3 col-lg-3 col-md-6 col-sm-6 `}>
                        <div className={`${styles.label}  mb-2 text`}>
                          (31C) Date Of Issue <strong className="text-danger ml-n1">*</strong>{' '}
                        </div>
                        <span className={styles.value}>
                          {lcModuleData?.lcApplication?.dateOfIssue
                            ? moment(lcModuleData?.lcApplication?.dateOfIssue).format('DD-MM-YYYY')
                            : ''}
                        </span>
                      </div>
                      <Col className="mb-4 mt-4" lg={3} md={6} sm={6}>
                        <div className="d-flex">
                          <DateCalender
                            name="dateOfAmendment"
                            defaultDate={lcModuleData?.lcApplication?.dateOfAmendment}
                            saveDate={saveDate}
                            labelName="(30) Date Of Ammendment"
                          />
                          <img
                            className={`${styles.calanderIcon} image_arrow img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={3} md={6} sm={6}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          type="number"
                          onWheel={(event) => event.currentTarget.blur()}
                          defaultValue={lcModuleData?.lcApplication?.numberOfAmendment}
                          onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                          required
                          name="numberOfAmendment"
                          onChange={(e) => saveAmendmentData(e.target.name, e.target.value)}
                        />
                        <label className={`${styles.label_heading} label_heading`}>
                          (26E) Number of Amendment
                          <strong className="text-danger">*</strong>
                        </label>
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
                            defaultValue={editInput ? editCurrent?.dropDownValue : ''}
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
                        <input
                          className={`${styles.input_field} input form-control`}
                          style={{ opacity: '0.5' }}
                          disabled
                          type="text"
                          value={
                            fieldType == 'date'
                              ? existingValue
                                ? moment(existingValue).format('DD-MM-YYYY')
                                : ''
                              : existingValue
                          }
                          // value={getDataFormDropDown(editInput ? editCurrent.existingValue : clauseObj?.existingValue)}
                        />
                        <label className={`${styles.label_heading} label_heading`}>Existing Value</label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6}>
                        <div className="d-flex">
                          {fieldType == '' ? (
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              ref={inputRef}
                              // defaultValue={
                              //   editInput ? editCurrent?.newValue : ''
                              // }
                              value={clauseObj?.newValue}
                              disabled={isDisabled}
                              onChange={(e) => {
                                // inputRef.current.value = ''
                                arrChange('newValue', e.target.value);
                              }}
                            />
                          ) : null}
                          {fieldType == 'number' ? (
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="number"
                              ref={inputRef}
                              onKeyDown={(evt) => ['e', 'E', '+', '-', '.',"ArrowDown","ArrowUp"].includes(evt.key) && evt.preventDefault()}
                              // defaultValue={
                              //   editInput ? editCurrent?.newValue : ''
                              // }
                              onWheel={(event) => event.currentTarget.blur()}
                              value={clauseObj?.newValue}
                              disabled={isDisabled}
                              onChange={(e) => {
                                // inputRef.current.value = ''
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
                                name="partialShipment"
                                onChange={(e) => {
                                  arrChange('newValue', e.target.value);
                                }}
                                // value={

                                // }
                                value={clauseObj?.newValue}
                                className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                              >
                                <option disabled value="">
                                  Select an option
                                </option>{' '}
                                {clauseObj.dropDownValue === '(50) Applicant' ? (
                                  <>
                                    {' '}
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
                                      ?.filter((val, index) => {
                                        if (
                                          val.Country.toLowerCase() == 'india' &&
                                          val.Approved.toLowerCase() == 'yes'
                                        ) {
                                          return val;
                                        }
                                      })
                                      ?.map((val, index) => {
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
                                          <option value={`${val.Port_Name}, ${val.Country}`}>
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
                                <th width="35%" className={`${styles.table_header} label_heading`}>
                                  CLAUSE{' '}
                                </th>
                                <th className={`${styles.table_header} label_heading`}>EXISTING VALUE</th>
                                <th className={`${styles.table_header} label_heading`}>NEW VALUE</th>
                                <th className={`${styles.table_header}`}></th>
                              </tr>
                            </thead>
                            <tbody>
                              {clauseArr &&
                                clauseArr?.map((clause, index) => (
                                  <>
                                    <tr key={index} className="table_row">
                                      <td>{clause.dropDownValue}</td>
                                      <td>{getExistingValue(clause.dropDownValue, clause.existingValue)}</td>
                                      <td>
                                        {/* {clause.dropDownValue === '(32B) Currency Code & Amount'
                                          ? `${lcModuleData?.order?.orderCurrency} `
                                          : ''}
                                        {clause.dropDownValue === '(39A) Tolerance (+/-) Percentage'
                                          ? `(+/-) ${getData(clause.newValue, clause.dropDownValue)}  %`
                                          : getData(clause.newValue, clause.dropDownValue)} */}

                                        {clause.dropDownValue === '(42C) Draft At' && lcData?.atSight == 'Usuance'
                                          ? `Usuance - ${getData(clause.newValue, clause.dropDownValue)} days `
                                          : clause.dropDownValue === '(32B) Currency Code & Amount'
                                          ? `${lcModuleData?.order?.orderCurrency} ${getData(
                                              clause.newValue,
                                              clause.dropDownValue,
                                            )} `
                                          : clause.dropDownValue === '(39A) Tolerance (+/-) Percentage'
                                          ? `(+/-) ${getData(clause.newValue, clause.dropDownValue)}  %`
                                          : clause.dropDownValue === '(44F) Port of Discharge'
                                          ? `${getData(clause.newValue, clause.dropDownValue)}`
                                          : getData(clause.newValue, clause.dropDownValue)}
                                      </td>
                                      <td>
                                        <img
                                          src="/static/delete 2.svg"
                                          className="ml-3"
                                          alt="delete"
                                          onClick={() => removeFromArr(clause.dropDownValue)}
                                        />
                                      </td>
                                    </tr>
                                  </>
                                ))}
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
          {lcModuleData.isPostAmmended ? (
            <InspectionDocument
              lcDoc={lcDoc}
              orderId={lcModuleData?.order?._id}
              uploadDocument1={uploadDocument1}
              documentName="LC AMENDMENT DRAFT"
              module={['Generic', 'Agreements', 'LC', 'LC Ammendment', 'Vessel Nomination', 'Insurance']}
              setLcDoc={setLcDoc}
            />
          ) : (
            <UploadOther
              module={['Generic', 'Agreements', 'LC', 'LC Ammendment', 'Vessel Nomination', 'Insurance']}
              orderid={lcModuleData?.order?._id}
            />
          )}
        </div>
      </div>
      <SaveBar
        // handleSave={handleSubmit}
        rightBtnClick={handleRightButton}
        rightBtn={lcModuleData.isPostAmmended ? 'Submit' : 'Share'}
        buttonText="null"
      />
    </>
  );
}

export default Index;
