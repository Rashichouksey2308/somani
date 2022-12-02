/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Col, Form, Row } from 'react-bootstrap';
import UploadDocument from '../UploadDocument';
import DateCalender from '../DateCalender';
import { useDispatch, useSelector } from 'react-redux';
import _get from 'lodash/get';
import SubmitBar from './SubmitBar';
import { GettingAllInsurance, RenewInsurance } from 'redux/insurance/action';
import UploadOther from '../UploadOther';
import { addPrefixOrSuffix, removePrefixOrSuffix } from 'utils/helper';
import { toast } from 'react-toastify';
import Router from 'next/router';
import moment from 'moment/moment';
const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let id = sessionStorage.getItem('quotationId');
    dispatch(GettingAllInsurance(`?insuranceId=${id}`));
  }, [dispatch]);

  const { insuranceResponse } = useSelector((state) => state.insurance);

  let insuranceData = _get(insuranceResponse, 'data[0]', {});
  const [insuranceType, setInsuranceType] = useState(null);
  const [isFieldInFocus, setIsFieldInFocus] = useState(false);
  const [marineData, setMarineData] = useState({
    policyNumber: '',
    insuranceFrom: '',
    insuranceTo: '',
    updatePolicyNumber: '',
    renewalDate: '',
    lossPayee: '',
    premiumAmount: null,
  });
  const saveMarineData = (name, value) => {
    let newInput = { ...marineData };
    newInput[name] = value;
    setMarineData(newInput);
  };

  const saveDate = (value, name) => {
    const d = new Date(value);
    let text = d.toISOString();
    saveMarineData(name, text);
  };

  const [storageData, setStorageData] = useState({
    policyNumber: '',
    insuranceFrom: '',
    renewalDate: '',
    insuranceTo: '',
    updatePolicyNumber: '',
    periodOfInsurance: null,
    lossPayee: '',
    premiumAmount: null,
  });

  console.log(marineData, 'insuranceData');

  function getDifferenceInDaysStorage() {
    let dateS1 = new Date(storageData?.insuranceFrom);
    let dateS2 = new Date(storageData?.insuranceTo);
    let date3 = moment(dateS1, 'DD.MM.YYYY');
    let date4 = moment(dateS2, 'DD.MM.YYYY');
    return date4.diff(date3, 'days');
  }

  useEffect(() => {
    if (insuranceData) {
      let lossPayee = insuranceData?.order?.lc?.lcApplication?.lcIssuingBank ?? '';
      setStorageData({ ...storageData, lossPayee: lossPayee });
      setMarineData({ ...marineData, lossPayee: lossPayee });
    }
  }, [insuranceType, insuranceData]);
  useEffect(() => {
    if (storageData.insuranceFrom && storageData.insuranceTo) {
      setStorageData({ ...storageData, periodOfInsurance: getDifferenceInDaysStorage() });
    }
  }, [storageData.insuranceFrom, storageData.insuranceTo]);

  const saveStorageDate = (value, name) => {
    const d = new Date(value);
    let text = d.toISOString();
    saveStorageData(name, text);
  };

  const saveStorageData = (name, value) => {
    let newInput = { ...storageData };
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

  const validation = () => {
    let toastMessage = '';
    if (insuranceType == null) {
      toastMessage = 'PLEASE SELECT INSURANCE TYPE';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
      return false;
    }
    if (insuranceType && insuranceDocument.storagePolicyDocument == null) {
      toastMessage = 'PLEASE UPLOAD STORAGE POLICY DOCUMENT';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
      return false;
    }
    if (insuranceType == false && insuranceDocument.marinePolicyDocument == null) {
      toastMessage = 'PLEASE UPLOAD MARINE POLICY DOCUMENT';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
      return false;
    }
    return true;
  };

  const handleInsuranceUpdate = () => {
    if (!validation()) return;

    let fd = new FormData();

    if (insuranceType) {
      let storageObj = { ...storageData };
      storageObj.premiumAmount = removePrefixOrSuffix(storageData.premiumAmount);
      fd.append('storageInsurance', JSON.stringify(storageObj));
      fd.append('insuranceType', JSON.stringify('Storage Insurance'));
      fd.append('storagePolicyDocument', insuranceDocument.storagePolicyDocument);
      fd.append('insuranceId', insuranceData?._id);
      dispatch(RenewInsurance(fd));
    } else if (insuranceType === false) {
      let marineObj = { ...marineData };
      marineObj.premiumAmount = removePrefixOrSuffix(marineData.premiumAmount);
      fd.append('marineInsurance', JSON.stringify(marineObj));
      fd.append('insuranceId', insuranceData?._id);
      fd.append('insuranceType', JSON.stringify('Marine Insurance'));
      fd.append('marinePolicyDocument', insuranceDocument.marinePolicyDocument);

      dispatch(RenewInsurance(fd));
    }
  };

  return (
    <div className={`${styles.card} p-0 vessel_card datatable bg-transparent card border-0 container-fluid`}>
      <div className={`${styles.accordion_body} bg-transparent`}>
        <div className={`${styles.head_container} align-items-center`}>
          <div className={`${styles.head_header} align-items-center`}>
            <img
              className={`${styles.back_arrow} img-fluid mr-2 ml-0 image_arrow`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
              onClick={() => Router.push('/insurance/form')}
            />

            <h1 className={styles.heading}>{insuranceData?.company?.companyName} - Ramal001-000001</h1>
          </div>
        </div>

        <div className={`${styles.vessel_card}  vessel_card border_color`}>
          <div className={`${styles.wrapper} border_color card`}>
            <div
              className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
              style={{ cursor: 'default' }}
            >
              <div className="d-lg-flex align-items-center d-inline-block ">
                <h2 className="mb-0">Renewal Insurance</h2>
                <div className={`${styles.radio_form} ml-lg-5 ml-n4`}>
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className={styles.radio_group}>
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Marine"
                        name="group1"
                        onChange={() => setInsuranceType(false)}
                        type={type}
                        checked={insuranceType == false ? 'checked' : ''}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Storage"
                        name="group1"
                        onChange={() => setInsuranceType(true)}
                        type={type}
                        checked={insuranceType == true ? 'checked' : ''}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <span
                data-toggle="collapse"
                data-target="#storageInsurance"
                aria-expanded="true"
                aria-controls="storageInsurance"
                style={{ cursor: 'pointer' }}
              >
                +
              </span>
            </div>
            {insuranceType == false ? (
              <>
                <div id="storageInsurance" aria-labelledby="storageInsurance" data-parent="#storageInsurance">
                  <div className={` ${styles.cardBody} card-body  border_color`}>
                    <div className={` ${styles.content}`}>
                      <div className={` ${styles.body}`}>
                        <Row>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <select
                                name="policyNumber"
                                onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                                className={`${styles.input_field} ${styles.customSelect} input form-control`}
                              >
                                <option disabled selected>
                                  Select an option
                                </option>
                                <option value={insuranceData?.marineInsurance?.policyNumber}>
                                  {insuranceData?.marineInsurance?.policyNumber}
                                </option>
                                <option value="IRDAN1277P09098">IRDAN1277P09098</option>
                              </select>
                              <label className={`${styles.label_heading} label_heading`}>
                                Select Policy Number
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
                              name="updatePolicyNumber"
                              onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Update Policy Number
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              name="premiumAmount"
                              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                              onWheel={(event) => event.currentTarget.blur()}
                              onFocus={(e) => {
                                setIsFieldInFocus(true), (e.target.type = 'number');
                              }}
                              onBlur={(e) => {
                                setIsFieldInFocus(false), (e.target.type = 'text');
                              }}
                              value={
                                isFieldInFocus
                                  ? marineData.premiumAmount
                                    ? marineData.premiumAmount
                                    : 0
                                  : 'INR ' +
                                    Number(marineData.premiumAmount ? marineData.premiumAmount : 0).toLocaleString(
                                      'en-In',
                                    )
                              }
                              // value={addPrefixOrSuffix(
                              //   marineData.premiumAmount ? marineData.premiumAmount : 0,
                              //   'INR',
                              //   'front',
                              // )}
                              onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                              type="text"
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Premium Amount
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <DateCalender name="renewalDate" saveDate={saveDate} labelName="Renewal date" />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={2} md={6}>
                            <div className="d-flex">
                              <DateCalender name="insuranceFrom" saveDate={saveDate} labelName="Insurance from" />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={2} md={6}>
                            <div className="d-flex">
                              <DateCalender name="insuranceTo" saveDate={saveDate} labelName="Insurance to" />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>

                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <input
                                name="lossPayee"
                                value={marineData?.lossPayee}
                                onChange={(e) => saveMarineData(e.target.name, e.target.value)}
                                className={`${styles.input_field} ${styles.customSelect} input form-control`}
                              ></input>
                              <label className={`${styles.label_heading} label_heading`}>
                                Loss Payee Bank
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div id="storageInsurance" aria-labelledby="storageInsurance">
                  <div className={` ${styles.cardBody} card-body  border_color`}>
                    <div className={` ${styles.content}`}>
                      <div className={` ${styles.body}`}>
                        <Row>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <select
                                name="policyNumber"
                                onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                                className={`${styles.input_field} ${styles.customSelect} input form-control`}
                              >
                                <option disabled selected>
                                  Select an option
                                </option>
                                <option value={insuranceData?.marineInsurance?.policyNumber}>
                                  {insuranceData?.marineInsurance?.policyNumber}
                                </option>
                                <option value="IRDAN1277P09098">IRDAN1277P09098</option>
                              </select>
                              <label className={`${styles.label_heading} label_heading`}>
                                Select Policy Number
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
                              name="updatePolicyNumber"
                              onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Update Policy Number
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              name="premiumAmount"
                              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                              onWheel={(event) => event.currentTarget.blur()}
                              onFocus={(e) => {
                                setIsFieldInFocus(true), (e.target.type = 'number');
                              }}
                              onBlur={(e) => {
                                setIsFieldInFocus(false), (e.target.type = 'text');
                              }}
                              value={
                                isFieldInFocus
                                  ? storageData.premiumAmount
                                    ? storageData.premiumAmount
                                    : 0
                                  : 'INR ' +
                                    Number(storageData.premiumAmount ? storageData.premiumAmount : 0).toLocaleString(
                                      'en-In',
                                    )
                              }
                              // value={addPrefixOrSuffix(
                              //   storageData.premiumAmount ? storageData.premiumAmount : 0,
                              //   'INR',
                              //   'front',
                              // )}
                              onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                              type="text"
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Premium Amount
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <DateCalender name="renewalDate" saveDate={saveStorageDate} labelName="Renewal date" />
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
                                name="insuranceFrom"
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
                              <DateCalender name="insuranceTo" saveDate={saveStorageDate} labelName="Insurance to" />
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
                              onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                              value={storageData?.periodOfInsurance}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Period of Insurance (Days)
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <input
                                onChange={(e) => saveStorageData(e.target.name, e.target.value)}
                                name="lossPayee"
                                value={storageData?.lossPayee}
                                className={`${styles.input_field} ${styles.customSelect} input form-control`}
                              ></input>
                              <label className={`${styles.label_heading} label_heading`}>
                                Loss Payee Bank
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="mt-4">
            {' '}
            {/* <UploadDocument
              docName={`Policy Document ${insuranceType == false ? `- Marine` : `- Storage`} `}
              uploadDocument1={uploadDocument2}
            /> */}
            {insuranceType ? (
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
                                      ? moment(insuranceDocument?.storagePolicyDocument?.date).format(
                                          'DD-MM-YYYY,h:mm A',
                                        )
                                      : moment(new Date()).format('DD-MM-YYYY,h:mm A')
                                    : ''}
                                </td>
                                <td>
                                  {insuranceDocument && insuranceDocument?.storagePolicyDocument == null ? (
                                    <>
                                      <div className={styles.uploadBtnWrapper}>
                                        <input
                                          // id={docName}
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
            ) : (
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
                                  {insuranceDocument?.marinePolicyDocument && insuranceDocument?.marinePolicyDocument
                                    ? moment(insuranceDocument?.marinePolicyDocument?.date).format('DD-MM-YYYY,h:mm A')
                                    : ''}
                                </td>
                                <td>
                                  {/* <div className={styles.uploadBtnWrapper}>
                                    <input
                                      type="file"
                                      onChange={(e) => uploadDocument1(e)}
                                      name="myfile"
                                    />
                                    <button
                                      name="marinePolicyDocument"
                                      className={`${styles.upload_btn} btn`}
                                    >
                                      Upload
                                    </button>
                                  </div> */}
                                  {insuranceDocument && insuranceDocument.marinePolicyDocument == null ? (
                                    <>
                                      <div className={styles.uploadBtnWrapper}>
                                        <input
                                          // id={docName}
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
            )}
          </div>
        </div>

        {/* <InspectionDocument
        lcDoc={insuranceDocument}
        module="Agreements&Insurance&LC&Opening"
        orderId={insuranceData?.order?._id}
        documentName={`Policy Document ${
          insuranceType == false ? `- Marine` : `- Storage`
        } `}
      /> */}
        <UploadOther
          orderid={insuranceData?.order?._id}
          module={['Generic', 'Agreements', 'LC', 'LC Ammendment', 'Vessel Nomination', 'Insurance']}
        />
      </div>
      <SubmitBar handleSubmit={handleInsuranceUpdate} />
    </div>
  );
};
export default Index;
