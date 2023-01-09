/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './insurance.module.scss';
import { Col, Form, Row } from 'react-bootstrap';
import SaveBar from '../../../src/components/SaveBar';
import Router from 'next/router';
import DateCalender from '../../../src/components/DateCalender';
import { useDispatch, useSelector } from 'react-redux';
import { GettingAllInsurance, UpdateQuotation } from '../../../src/redux/insurance/action';
import _get from 'lodash/get';
import { removePrefixOrSuffix } from '../../../src/utils/helper';
import moment from 'moment';
import { setDynamicName, setDynamicOrder, setPageName } from '../../../src/redux/userData/action';
import { handleErrorToast } from '@/utils/helpers/global';

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = sessionStorage.getItem('quotationId');
    dispatch(GettingAllInsurance(`?insuranceId=${id}`));
  }, [dispatch, sumInsuredCalc]);

  const { insuranceResponse } = useSelector((state) => state.insurance);

  const [isFieldInFocus, setIsFieldInFocus] = useState(false);
  const insuranceData = _get(insuranceResponse, 'data[0]', {});

  const [dateStartFrom, setDateStartFrom] = useState({
    laycan: '',
    eta: '',
  });

  const [quotationData, setQuotationData] = useState({
    additionalInfo: '',
    expectedTimeOfArrival: _get(insuranceData, 'order.vessel.vessels[0].transitDetails.ETAatDischargePort', '') ?? '',
    expectedTimeOfDispatch: _get(insuranceData, 'order.vessel.vessels[0].transitDetails.EDTatLoadPort', '') ?? '',
    insuranceType: '',
    laycanFrom: '',
    laycanTo: '',
    lossPayee: '',
    storageDetails: {
      placeOfStorage: '',
      periodOfInsurance: null,
      storagePlotAddress: '',
    },
    sumInsured: insuranceData?.quotationRequest?.sumInsured
      ? Number(insuranceData?.quotationRequest?.sumInsured) / 10000000
      : sumInsuredCalc,
  });

  const marineInsuranceString = 'Marine Insurance';
  const storageInsuranceString = 'Storage Insurance';
  const bothInsuranceString = 'Marine & Storage Insurance';

  const portOfDischarge = _get(insuranceData, 'order.vessel.vessels[0].transitDetails.portOfDischarge', '');
  const sumInsuredCalc = parseFloat(((Number(insuranceData?.order?.orderValue) / 10000000) * 110) / 100);

  const getPlaceOfStorage = () => {
    const placeofStaorage = insuranceData?.quotationRequest?.storageDetails?.placeOfStorage;
    if (placeofStaorage) {
      return placeofStaorage;
    }
    return portOfDischarge.includes(', India') ? portOfDischarge : `${portOfDischarge}, India`;
  };
  const setQuotationRequest = () => {
    setQuotationData({
      additionalInfo: insuranceData?.quotationRequest?.additionalInfo || '',
      expectedTimeOfArrival: insuranceData?.quotationRequest?.expectedTimeOfArrival
        ? insuranceData?.quotationRequest?.expectedTimeOfArrival
        : insuranceData?.order?.vessel?.vessels[0]?.transitDetails?.ETAatDischargePort || undefined,
      expectedTimeOfDispatch: insuranceData?.quotationRequest?.expectedTimeOfDispatch
        ? insuranceData?.quotationRequest?.expectedTimeOfDispatch
        : insuranceData?.order?.vessel?.vessels[0]?.transitDetails?.EDTatLoadPort || undefined,
      insuranceType: insuranceData?.quotationRequest?.insuranceType || marineInsuranceString,
      laycanFrom: insuranceData?.quotationRequest?.laycanFrom
        ? insuranceData?.quotationRequest?.laycanFrom
        : insuranceData?.order?.shipmentDetail?.loadPort?.fromDate,
      laycanTo: insuranceData?.quotationRequest?.laycanTo
        ? insuranceData?.quotationRequest?.laycanTo
        : insuranceData?.order?.shipmentDetail?.loadPort?.toDate,
      lossPayee: insuranceData?.quotationRequest?.lossPayee
        ? insuranceData?.quotationRequest?.lossPayee
        : _get(insuranceData, 'order.lc.lcApplication.lcIssuingBank', ''),
      storageDetails: {
        placeOfStorage: getPlaceOfStorage(),
        periodOfInsurance: insuranceData?.quotationRequest?.storageDetails?.periodOfInsurance || '',
        storagePlotAddress: insuranceData?.quotationRequest?.storageDetails?.storagePlotAddress || '',
      },
      sumInsured: insuranceData?.quotationRequest?.sumInsured
        ? Number(insuranceData?.quotationRequest?.sumInsured) / 10000000
        : sumInsuredCalc,
    });
  };

  useEffect(() => {
    dispatch(setPageName('insurance'));
    dispatch(setDynamicName(_get(insuranceData, 'company.companyName', 'Company Name')));
    dispatch(setDynamicOrder(_get(insuranceData, 'order.orderId', 'Order Id')));
    setQuotationRequest();
  }, [insuranceData]);

  const saveQuotationData = (name, value) => {
    const newInput = { ...quotationData };
    const namesplit = name.split('.');
    if (namesplit.length > 1) newInput[namesplit[0]][namesplit[1]] = value;
    else newInput[name] = value;
    setQuotationData(newInput);
  };

  const saveDate = (value, name) => {
    const d = new Date(value);
    const text = d.toISOString();
    saveQuotationData(name, text);
    setStartDate(value, name);
  };
  const setStartDate = (val, name) => {
    const newDate = moment(new Date(val).toISOString()).add(1, 'days').format('DD-MM-YYYY');
    if (name === 'laycanFrom') {
      setDateStartFrom({ ...dateStartFrom, laycan: newDate });
    } else {
      setDateStartFrom({ ...dateStartFrom, eta: newDate });
    }
  };

  const [reset, setReset] = useState(false);

  const clearAll = () => {
    setQuotationData({
      additionalInfo: '',
      expectedTimeOfArrival: undefined,
      expectedTimeOfDispatch: undefined,
      insuranceType: '',
      laycanFrom: undefined,
      laycanTo: undefined,
      lossPayee: '',
      storageDetails: {
        placeOfStorage: '',
        periodOfInsurance: '',
        storagePlotAddress: '',
      },
      sumInsured: insuranceData?.quotationRequest?.sumInsured,
    });

    setDateStartFrom({
      laycan: '',
      eta: '',
    });
    setReset(!reset);
  };

  const validation = () => {
    if (quotationData.laycanFrom === '' || quotationData.laycanFrom === undefined) {
      handleErrorToast('Please add laycan From');
      return false;
    } else if (quotationData.laycanTo === '' || quotationData.laycanTo === undefined) {
      handleErrorToast('Please add laycan to');
      return false;
    } else if (quotationData.expectedTimeOfDispatch === '' || quotationData.expectedTimeOfDispatch === undefined) {
      handleErrorToast('Please add expected Time Of Dispatch ');
      return false;
    } else if (quotationData.expectedTimeOfArrival === '' || quotationData.expectedTimeOfArrival === undefined) {
      handleErrorToast('Please add expected Time Of Arrival ');
      return false;
    } else if (
      quotationData.sumInsured === '' ||
      quotationData.sumInsured === undefined ||
      quotationData.sumInsured == null
    ) {
      handleErrorToast('Please add sum Insured ');
      return false;
    } else if (
      quotationData?.insuranceType === storageInsuranceString ||
      quotationData?.insuranceType === bothInsuranceString
    ) {
      if (
        quotationData.storageDetails.placeOfStorage === '' ||
        quotationData.storageDetails.placeOfStorage === undefined ||
        quotationData.storageDetails.placeOfStorage == null
      ) {
        handleErrorToast('Please select place Of Storage ');
        return false;
      } else if (
        quotationData.storageDetails.periodOfInsurance === '' ||
        quotationData.storageDetails.periodOfInsurance === undefined ||
        quotationData.storageDetails.periodOfInsurance == null
      ) {
        handleErrorToast('Please add period Of Insurance   ');
        return false;
      } else if (
        quotationData.storageDetails.storagePlotAddress === '' ||
        quotationData.storageDetails.storagePlotAddress === undefined ||
        quotationData.storageDetails.storagePlotAddress == null
      ) {
        handleErrorToast('Please add storage Plot Address  ');
        return false;
      }
    }
    return true;
  };

  const handleSave = () => {
    if (quotationData?.insuranceType !== '') {
      if (validation()) {
        const insuranceObj = { ...quotationData };
        insuranceObj.sumInsured = removePrefixOrSuffix(quotationData.sumInsured) * 10000000;
        const obj = {
          quotationRequest: { ...insuranceObj },
          insuranceId: insuranceData?._id,
        };
        dispatch(UpdateQuotation(obj));
      }
    } else {
      handleErrorToast('Insurance type is mandatory');
      return false;
    }
  };

  const changeRoute = () => {
    if (validation()) {
      sessionStorage.setItem('letterId', insuranceData?._id);
      if (quotationData.insuranceType === marineInsuranceString) {
        Router.push('/agreement/OrderID/id');
      } else if (quotationData.insuranceType === storageInsuranceString) {
        Router.push('/agreement/storage');
      } else {
        Router.push('/agreement/both-type');
      }
    }
  };

  return (
    <>
      <div className={`${styles.card} p-0 vessel_card datatable bg-transparent card border-0 container-fluid`}>
        <div className={`${styles.accordion_body} bg-transparent`}>
          <div className={`${styles.head_container} align-items-center`}>
            <div className={`${styles.head_header} align-items-center`}>
              <img
                onClick={() => Router.push('/insurance')}
                className={`${styles.back_arrow} img-fluid mr-2 ml-0 image_arrow`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
              />
              <h1 className={styles.heading}>{insuranceData?.company?.companyName}</h1>
            </div>
            <div>
              <button
                onClick={() => {
                  clearAll();
                }}
                className={`${styles.clear_btn} clear_btn`}
              >
                Clear All
              </button>
            </div>
          </div>

          <div className={`${styles.vessel_card}`}>
            <div className={`${styles.wrapper} border_color card datatable`}>
              <div className={`${styles.insurance_type} d-lg-flex align-items-center d-inline-block`}>
                <h2 className="mb-0">Insurance Type</h2>
                <div className={`${styles.radio_form}`}>
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className={styles.radio_group}>
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Marine Insurance"
                        checked={quotationData.insuranceType === marineInsuranceString ? 'checked' : ''}
                        name="group1"
                        type={type}
                        value="Marine Insurance"
                        onChange={(e) => {
                          saveQuotationData('insuranceType', marineInsuranceString);
                        }}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Storage Insurance"
                        checked={quotationData.insuranceType === storageInsuranceString ? 'checked' : ''}
                        name="group1"
                        type={type}
                        value="Storage Insurance"
                        onChange={(e) => {
                          saveQuotationData('insuranceType', storageInsuranceString);
                        }}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Both"
                        name="group1"
                        checked={quotationData.insuranceType === bothInsuranceString ? 'checked' : ''}
                        type={type}
                        value="Marine & Storage Insurance"
                        onChange={(e) => {
                          saveQuotationData('insuranceType', bothInsuranceString);
                        }}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.wrapper} border_color card datatable`}>
            <div
              className={`${styles.cardHeader} border_color card-header d-flex align-items-center justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#marineInsurance"
              aria-expanded="true"
              aria-controls="marineInsurance"
            >
              <h2 className="mb-0">Basic Details</h2>
              <span>+</span>
            </div>
            <div
              id="marineInsurance"
              aria-labelledby="marineInsurance"
              data-parent="#marineInsurance"
            >
              <div className={` ${styles.cardBody} card-body  border_color`}>
                {quotationData.insuranceType === marineInsuranceString ? (
                  <>
                    <div className={` ${styles.content} border_color`}>
                      <div className={` ${styles.body}`}>
                        <Row>
                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>Commodity</div>
                            <div className={styles.col_body}>{insuranceData?.order?.commodity}</div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>Quantity</div>
                            <div className={styles.col_body}>
                              {Number(insuranceData?.order?.quantity)?.toLocaleString('en-In', {
                                maximumFractionDigits: 2,
                              })}{' '}
                              {insuranceData?.order?.unitOfQuantity}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>Country of Origin</div>
                            <div className={styles.col_body}>{insuranceData?.order?.countryOfOrigin}</div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>Vessel Name</div>
                            <div className={styles.col_body}>
                              {_get(insuranceData, 'order.vessel.vessels[0].vesselInformation[0].name', '')}
                            </div>
                          </Col>

                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>IMO Number</div>
                            <div className={styles.col_body}>
                              {_get(insuranceData, 'order.vessel.vessels[0].vesselInformation[0].IMONumber', '')}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>Year of Built</div>
                            <div className={styles.col_body}>
                              {_get(
                                insuranceData,
                                'order.vessel.vessels[0].vesselInformation[0].yearOfBuilt',
                                '',
                              )?.slice(0, 4)}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>Port of Loading</div>
                            <div className={styles.col_body}>
                              {_get(insuranceData, 'order.vessel.vessels[0].transitDetails.portOfLoading', '')}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>Port of Discharge</div>
                            <div className={styles.col_body}>{portOfDischarge + `, India`}</div>
                          </Col>
                          <Col className="mb-4 mt-4" md={4}>
                            <div className="d-flex">
                              <input
                                id="FormInsurance"
                                name="lossPayee"
                                onChange={(e) => {
                                  saveQuotationData(e.target.name, e.target.value);
                                }}
                                value={quotationData?.lossPayee}
                                className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                              ></input>
                              <label className={`${styles.label_heading} label_heading`}>Loss Payee</label>
                            </div>
                          </Col>
                          <Col className="mt-4" lg={2} md={4}>
                            <div className="d-flex">
                              <DateCalender
                                name="laycanFrom"
                                saveDate={saveDate}
                                defaultDate={
                                  quotationData.laycanFrom
                                    ? quotationData.laycanFrom
                                    : insuranceData?.order?.shipmentDetail?.loadPort?.fromDate
                                }
                                labelName="Laycan from"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={2} md={4}>
                            <div className="d-flex">
                              <DateCalender
                                name="laycanTo"
                                defaultDate={
                                  quotationData.laycanTo
                                    ? quotationData.laycanTo
                                    : insuranceData?.order?.shipmentDetail?.loadPort?.toDate
                                }
                                saveDate={saveDate}
                                labelName="Laycan to"
                                startFrom={dateStartFrom.laycan}
                                reset={reset}
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="expectedTimeOfDispatch"
                                defaultDate={quotationData.expectedTimeOfDispatch}
                                saveDate={saveDate}
                                labelName="Expected time of Dispatch"
                                reset={reset}
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="expectedTimeOfArrival"
                                defaultDate={quotationData.expectedTimeOfArrival}
                                startFrom={dateStartFrom.eta}
                                saveDate={saveDate}
                                labelName="Expected time of Arrival"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-5" lg={4} md={6} sm={6}>
                            <input
                              onFocus={(e) => {
                                setIsFieldInFocus(true)((e.target.type = 'number'));
                              }}
                              onBlur={(e) => {
                                setIsFieldInFocus(false)((e.target.type = 'text'));
                              }}
                              id="FormInsurance"
                              className={`${styles.input_field} input form-control`}
                              type="text"
                              name="sumInsured"
                              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                              onWheel={(event) => event.currentTarget.blur()}
                              value={
                                isFieldInFocus
                                  ? quotationData?.sumInsured
                                  : Number(quotationData?.sumInsured)?.toLocaleString('en-In', {
                                      maximumFractionDigits: 2,
                                    }) + ` Cr`
                              }
                              onChange={(e) => {
                                saveQuotationData(e.target.name, e.target.value);
                              }}
                              required
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Sum Insured
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </div>

                    <div className={` ${styles.content} border_color`}>
                      <div className={` ${styles.body}`}>
                        <h5>Additional Information (if Any)</h5>
                        <textarea
                          name="additionalInfo"
                          defaultValue={insuranceData?.quotationRequest?.additionalInfo}
                          onChange={(e) => {
                            saveQuotationData(e.target.name, e.target.value);
                          }}
                          className={`${styles.remark_field} input form-control`}
                          as
                          rows={3}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={` ${styles.content} border_color`}>
                      <div className={` ${styles.body}`}>
                        <Row>
                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>Commodity</div>
                            <div className={styles.col_body}>{insuranceData?.order?.commodity}</div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>Quantity</div>
                            <div className={styles.col_body}>
                              {Number(insuranceData?.order?.quantity)?.toLocaleString('en-In', {
                                maximumFractionDigits: 2,
                              })}{' '}
                              MT
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>Country of Origin</div>
                            <div className={styles.col_body}>{insuranceData?.order?.countryOfOrigin}</div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>Vessel Name</div>
                            <div className={styles.col_body}>
                              {_get(insuranceData, 'order.vessel.vessels[0].vesselInformation[0].name', '')}
                            </div>
                          </Col>

                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>IMO Number</div>
                            <div className={styles.col_body}>
                              {_get(insuranceData, 'order.vessel.vessels[0].vesselInformation[0].IMONumber', '')}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>Year of Built</div>
                            <div className={styles.col_body}>
                              {_get(
                                insuranceData,
                                'order.vessel.vessels[0].vesselInformation[0].yearOfBuilt',
                                '',
                              )?.slice(0, 4)}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>Port of Loading</div>
                            <div className={styles.col_body}>
                              {_get(insuranceData, 'order.vessel.vessels[0].transitDetails.portOfLoading', '')}
                            </div>
                          </Col>
                          <Col lg={4} md={6} sm={6}>
                            <div className={`${styles.col_header} label_heading`}>Port of Discharge</div>
                            <div className={styles.col_body}>{portOfDischarge + `, India`}</div>
                          </Col>
                          <Col className="mb-4 mt-4" md={4}>
                            <div className="d-flex">
                              <input
                                name="lossPayee"
                                onChange={(e) => {
                                  saveQuotationData(e.target.name, e.target.value);
                                }}
                                className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                value={quotationData?.lossPayee}
                              ></input>
                              <label className={`${styles.label_heading} label_heading`}>
                                Loss Payee
                              </label>
                            </div>
                          </Col>
                          <Col className="mt-4" lg={2} md={4}>
                            <div className="d-flex">
                              <DateCalender
                                name="laycanFrom"
                                defaultDate={quotationData.laycanFrom}
                                reset={reset}
                                saveDate={saveDate}
                                labelName="Laycan from"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={2} md={4}>
                            <div className="d-flex">
                              <DateCalender
                                name="laycanTo"
                                defaultDate={quotationData.laycanTo}
                                reset={reset}
                                startFrom={dateStartFrom.laycan}
                                saveDate={saveDate}
                                labelName="Laycan to"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="expectedTimeOfDispatch"
                                defaultDate={quotationData.expectedTimeOfDispatch}
                                reset={reset}
                                saveDate={saveDate}
                                labelName="Expected time of Dispatch"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-4" lg={4} md={6} sm={6}>
                            <div className="d-flex">
                              <DateCalender
                                name="expectedTimeOfArrival"
                                defaultDate={quotationData.expectedTimeOfArrival}
                                reset={reset}
                                startFrom={dateStartFrom.eta}
                                saveDate={saveDate}
                                labelName="Expected time of Arrival"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mt-5" lg={4} md={6} sm={6}>
                            <input
                              onFocus={(e) => {
                                setIsFieldInFocus(true);
                                e.target.type = 'number';
                              }}
                              onBlur={(e) => {
                                setIsFieldInFocus(false);
                                e.target.type = 'text';
                              }}
                              className={`${styles.input_field} input form-control`}
                              type="text"
                              name="sumInsured"
                              onWheel={(event) => event.currentTarget.blur()}
                              value={
                                isFieldInFocus
                                  ? quotationData?.sumInsured
                                  : Number(quotationData?.sumInsured)?.toLocaleString('en-In', {
                                      maximumFractionDigits: 2,
                                    }) + ` Cr`
                              }
                              onChange={(e) => saveQuotationData(e.target.name, e.target.value)}
                              required
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Sum Insured
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </div>

                    <div className={` ${styles.content} border_color`}>
                      <div className={` ${styles.body}`}>
                        <h5>Storage Details</h5>
                        <Row>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                              value={quotationData.storageDetails.placeOfStorage}
                              name="storageDetails.placeOfStorage"
                              onChange={(e) => saveQuotationData(e.target.name, e.target.value)}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Place of Storage
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="number"
                              onWheel={(event) => event.currentTarget.blur()}
                              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                              defaultValue={quotationData.storageDetails.periodOfInsurance}
                              name="storageDetails.periodOfInsurance"
                              onChange={(e) => saveQuotationData(e.target.name, e.target.value)}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              {quotationData?.insuranceType === bothInsuranceString
                                ? 'Period of Storage Insurance'
                                : 'Period of Insurance (days)'}
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" lg={8} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              defaultValue={quotationData.storageDetails.storagePlotAddress}
                              name="storageDetails.storagePlotAddress"
                              onChange={(e) => saveQuotationData(e.target.name, e.target.value)}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Storage Plot Address
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className={` ${styles.content} border_color`}>
                      <div className={` ${styles.body}`}>
                        <h5>Additional Information (if Any)</h5>
                        <textarea
                          name="additionalInfo"
                          defaultValue={insuranceData?.quotationRequest?.additionalInfo}
                          onChange={(e) => {
                            saveQuotationData(e.target.name, e.target.value);
                          }}
                          className={`${styles.remark_field} input form-control`}
                          as
                          rows={3}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.req_letter}`}>
        <SaveBar handleSave={handleSave} rightBtn="Generate Request Letter" rightBtnClick={changeRoute} />
      </div>
    </>
  );
};
export default Index;
