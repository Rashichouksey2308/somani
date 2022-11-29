import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form, Modal } from 'react-bootstrap';
import SaveBar from '../SaveBar';
import _get from 'lodash/get';
import { useDispatch } from 'react-redux';
import { UpdateTransitDetails } from '../../redux/TransitDetails/action';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import UploadOther from '../UploadOther';
import { convertValue, removePrefixOrSuffix } from '../../utils/helper';
import moment from 'moment';
import { toast } from 'react-toastify';
import { returnDocFormat } from '@/utils/helpers/global';
import { number } from 'prop-types';

export default function Index({ isShipmentTypeBULK, TransitDetails, orderid, docUploadFunction, fetchInitialData }) {
  let transId = _get(TransitDetails, 'data[0]', '');
  const initialStateForLiner = {
    isSubmitted: false,
    vesselName: '',
    imoNumber: '',
    blNumber: '',
    blDate: null,
    blQuantity: '',
    blQuantityUnit: '',
    etaAtDischargePortFrom: null,
    etaAtDischargePortTo: null,
    blSurrenderDate: null,
    documentName: null,
    blDoc: null,
    blSurrenderDoc: null,
    containerNumberListDoc: null,
    packingListDoc: null,
    containerDetails: {
      numberOfContainers: '',
      freeDetentionPeriod: '',
      blSurrenderDate: '',
      containerDoc: null,
    },
  };
  const initialStateForBulk = {
    isSubmitted: false,
    vesselName: '',
    imoNumber: '',
    blNumber: '',
    blDate: null,
    blQuantity: '',
    blQuantityUnit: '',
    etaAtDischargePortFrom: null,
    etaAtDischargePortTo: null,
    blSurrenderDate: null,
    documentName: null,
    blDoc: null,
    blSurrenderDoc: null,
    containerNumberListDoc: null,
    packingListDoc: null,
  };
  const dispatch = useDispatch();

  const [shipmentTypeBulk, setshipmentTypeBulk] = useState(false);
  useEffect(() => {
    setshipmentTypeBulk(
      _get(TransitDetails, `data[0].order.termsheet.transactionDetails.shipmentType`, '') === 'Bulk' ? true : false,
    );
  }, [TransitDetails]);

  const existingBlData = _get(TransitDetails, `data[0].BL.billOfLanding`, []);

  const initalState = shipmentTypeBulk ? initialStateForBulk : initialStateForLiner;

  const [show, setShow] = useState(false);
  const [isFieldInFocus, setIsFieldInFocus] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [bolList, setBolList] = useState([initalState]);
  const [startBlDate, setBlDate] = useState(null);
  const [startetaAtDischargePortTo, setetaAtDischargePortTo] = useState(null);
  const [startblSurrenderDate, setblSurrenderDate] = useState(null);
  const [startetaAtDischargePortFrom, setetaAtDischargePortFrom] = useState(null);

  const [lastDate, setlastDate] = useState(new Date());

  useEffect(() => {
    if (_get(TransitDetails, `data[0].BL.billOfLanding`, []).length > 0) {
      setBolList(_get(TransitDetails, `data[0].BL.billOfLanding`, []));
    }
  }, [TransitDetails]);

  const partShipmentAllowed = _get(TransitDetails, 'data[0].order.vessel.partShipmentAllowed', false);

  const onBolAdd = () => {
    if (shipmentTypeBulk) {
      setBolList([...bolList, initialStateForBulk]);
    } else {
      setBolList([...bolList, initialStateForLiner]);
    }
  };

  const onDeleteClick = (index) => {
    setBolList([...bolList.slice(0, index), ...bolList.slice(index + 1)]);
  };
  const uploadDoc = async (e, index) => {
    let name = e.target.name;
    let id = e.target.id;
    let docs = await docUploadFunction(e);

    let newInput = [...bolList];
    newInput.forEach((val, i) => {
      if (i == index) {
        val[name] = docs;
      }
    });

    setBolList(newInput);
  };

  const handleCloseDoc = (e, index) => {
    let tempArr = [...bolList];

    tempArr[index][e] = null;

    setBolList(tempArr);
  };
  const handleCloseContanierDoc = (e, index) => {
    let tempArr = [...bolList];
    tempArr[index].containerDetails.containerDoc = null;
    setBolList(tempArr);
  };

  const onChangeVessel = (e, index) => {
    let VesselName = e.target.value;
    let filteredVessel = {};

    // let vesselData = _get(TransitDetails, `data[0].order.vessel.vessels[0]`, {})
    if (_get(TransitDetails, `data[0].order.vessel.vessels[0].shipmentType`, '') === 'Bulk') {
      _get(TransitDetails, `data[0].order.vessel.vessels`, []).forEach((vessel, index) => {
        if (vessel.vesselInformation[0].name === VesselName) {
          filteredVessel = vessel;
        }
      });
    } else {
      filteredVessel = JSON.parse(JSON.stringify(_get(TransitDetails, `data[0].order.vessel.vessels[0]`, {})));
      let tempArray = JSON.parse(
        JSON.stringify(_get(TransitDetails, `data[0].order.vessel.vessels[0].vesselInformation`, [])),
      );
      tempArray.forEach((vessel, index) => {
        if (vessel.name === VesselName) {
          filteredVessel.vesselInformation = [vessel];
        }
      });
    }
    console.log(filteredVessel, 'filteredVessel');
    let newArray = [...bolList];
    newArray[index].vesselName = _get(filteredVessel, 'vesselInformation[0].name', '');
    newArray[index].imoNumber = _get(filteredVessel, 'vesselInformation[0].IMONumber', '');
    newArray[index].etaAtDischargePortFrom = _get(filteredVessel, 'transitDetails.EDTatLoadPort', null);
    newArray[index].etaAtDischargePortTo = _get(filteredVessel, 'transitDetails.ETAatDischargePort', null);
    if (!shipmentTypeBulk) {
      newArray[index].containerDetails.numberOfContainers = _get(
        filteredVessel,
        'shippingInformation.numberOfContainers',
        '',
      );
      newArray[index].containerDetails.freeDetentionPeriod = _get(
        filteredVessel,
        'shippingInformation.freeDetentionPeriod',
        '',
      );
    }

    setBolList(newArray);
  };
  const checkRemainingBalance = () => {
    let balance = _get(TransitDetails, 'data[0].order.quantity', 0);
    bolList.forEach((item) => {
      balance = balance - item.blQuantity;
    });
    return balance;
  };

  const onChangeBol = (e, index) => {
    const name = e.target.id;
    const value = e.target.value;
    if (name === 'blQuantity') {
      if (checkRemainingBalance() < value) {
        let toastMessage = `BL quantity cannot be greater than total order quantity`;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
      }
    }
    setBolList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            [name]: value,
          };
        }
        return obj;
      });
      return newState;
    });
  };

  const onChangeContainerDetailsHandler = (e, index) => {
    const name = e.target.id;
    const value = e.target.value;
    setBolList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            containerDetails: {
              ...obj.containerDetails,
              [name]: value,
            },
          };
        }
        return obj;
      });
      return newState;
    });
  };
  const onChangeContainerDetailsDocHandler = async (e, index) => {
    const name = e.target.id;
    const value = await docUploadFunction(e);
    if (value) {
      setBolList((prevState) => {
        const newState = prevState.map((obj, i) => {
          if (i == index) {
            return {
              ...obj,
              containerDetails: {
                ...obj.containerDetails,
                [name]: value,
              },
            };
          }
          return obj;
        });
        return newState;
      });
    }
  };

  const saveDate = (startDate, name, index) => {
    setBolList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            [name]: startDate,
          };
        }
        return obj;
      });
      return newState;
    });
  };

  const validation = () => {
    let isOk = true;
    let toastMessage = '';

    if (_get(TransitDetails, 'data[0].order.vessel.vessels[0].shipmentType', '') === 'Liner') {
      if (checkRemainingBalance() < 0) {
        let toastMessage = `BL quantity cannot be greater than total order quantity`;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          return;
        }
      }
      for (let i = 0; i <= bolList.length - 1; i++) {
        if (bolList[i]?.vesselName == '' || bolList[i]?.vesselName == undefined) {
          toastMessage = `Please select vessel name of Bill of Lading  ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.blNumber == '' || bolList[i]?.blNumber == undefined) {
          toastMessage = `BL NUMBER IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.blDate == '' || bolList[i]?.blDate == undefined) {
          toastMessage = `BL DATE IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.blQuantity == '' || bolList[i]?.blQuantity == undefined) {
          toastMessage = `BL QUANTITY IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.etaAtDischargePortFrom == '' || bolList[i]?.etaAtDischargePortFrom == undefined) {
          toastMessage = `ETA AT DISCHARGE PORT FROM IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.etaAtDischargePortTo == '' || bolList[i]?.etaAtDischargePortTo == undefined) {
          toastMessage = `ETA AT DISCHARGE PORT TO IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (
          bolList[i]?.containerDetails?.numberOfContainers == '' ||
          bolList[i]?.containerDetails?.numberOfContainers == undefined
        ) {
          toastMessage = `Please mention number of containers in Bill of lading ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }

        if (
          Number(bolList[i]?.containerDetails?.numberOfContainers) >
          _get(TransitDetails, 'data[0].order.vessel.vessels[0].shippingInformation.numberOfContainers')
        ) {
          toastMessage = `Number of Container cannot be greator than vessel nomination ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (
          bolList[i]?.containerDetails?.freeDetentionPeriod == '' ||
          bolList[i]?.containerDetails?.freeDetentionPeriod == undefined
        ) {
          toastMessage = `FREE DETENTION DAYS ARE MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.blDoc == null || bolList[i]?.blDoc == undefined) {
          toastMessage = `Bl DOC IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.blSurrenderDoc == null || bolList[i]?.blSurrenderDoc == undefined) {
          toastMessage = `BL Acknowledgment Copy IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.containerNumberListDoc == null || bolList[i]?.containerNumberListDoc == undefined) {
          toastMessage = `Container Number List Doc IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.packingListDoc == null || bolList[i]?.packingListDoc == undefined) {
          toastMessage = `Packing List Doc IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
      }

      return isOk;
    } else if (_get(TransitDetails, 'data[0].order.vessel.vessels[0].shipmentType', '') === 'Bulk') {
      if (checkRemainingBalance() < 0) {
        let toastMessage = `BL quantity cannot be greater than total order quantity`;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          return;
        }
      }
      for (let i = 0; i <= bolList.length - 1; i++) {
        if (bolList[i]?.vesselName == '' || bolList[i]?.vesselName == undefined) {
          toastMessage = `Please select vessel name of Bill of Lading  ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.blNumber == '' || bolList[i]?.blNumber == undefined) {
          toastMessage = `BL NUMBER IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.blDate == '' || bolList[i]?.blDate == undefined) {
          toastMessage = `BL DATE IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.blQuantity == '' || bolList[i]?.blQuantity == undefined) {
          toastMessage = `BL QUANTITY IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.etaAtDischargePortFrom == '' || bolList[i]?.etaAtDischargePortFrom == undefined) {
          toastMessage = `ETA AT DISCHARGE PORT FROM IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.etaAtDischargePortTo == '' || bolList[i]?.etaAtDischargePortTo == undefined) {
          toastMessage = `ETA AT DISCHARGE PORT TO IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.blDoc == null || bolList[i]?.blDoc == undefined) {
          toastMessage = `Bl DOC IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (bolList[i]?.blSurrenderDoc == null || bolList[i]?.blSurrenderDoc == undefined) {
          toastMessage = `BL Acknowledgment Copy IS MANDATORY IN BILL OF LADING ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
      }

      return isOk;
    }
  };

  const saveData = async () => {
    if (!validation()) return;

    let tempArray = [...bolList];
    if (!shipmentTypeBulk) {
      tempArray?.forEach((item) => {
        item.isSubmitted = true;
        return item;
      });
    }
    let bol = { billOfLanding: tempArray };
    console.log(bol, 'bolbol');

    bol.billOfLanding[0].blQuantity = removePrefixOrSuffix(bolList[0].blQuantity);
    let fd = new FormData();
    fd.append('bl', JSON.stringify(bol));
    fd.append('transitId', transId._id);

    let task = 'submit';
    let responseData = await dispatch(UpdateTransitDetails({ fd, task }));
    if (responseData) {
      fetchInitialData();
    }
  };

  return (
    <>
      <div className={`${styles.backgroundMain} p-0 container-fluid`}>
        <div className={`${styles.vessel_card} border_color`}>
          <div className={`${styles.wrapper} card`}>
            <div className={`${styles.border_color}`}>
              <div className="d-lg-flex align-items-center d-inline-block">
                <h2 className="">Shipment Type</h2>
                <div className={`${styles.radio_form} ml-lg-5 ml-n4`}>
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className={styles.radio_group}>
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Bulk"
                        name="group1"
                        disabled={!shipmentTypeBulk}
                        type={type}
                        // checked={
                        //   _get(
                        //     TransitDetails,
                        //     'data[0].order.vessel.vessels[0].shipmentType',
                        //     '',
                        //   ) == 'Bulk' ? 'checked' : ''
                        // }
                        checked={shipmentTypeBulk}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Liner"
                        name="group1"
                        disabled={shipmentTypeBulk}
                        // checked={
                        //   _get(
                        //     TransitDetails,
                        //     'data[0].order.vessel.vessels[0].shipmentType',
                        //     '',
                        //   ) == 'Liner' ? 'checked' : ''
                        // }
                        checked={!shipmentTypeBulk}
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.main} border_color card `}>
            <div
              className={`${styles.head_container} border_color align-items-center card-header head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Commodity Details</h3>
              <div className="d-flex align-items-center">
                <div className={`${styles.dropDown_label} text`}>Part Shipment Allowed:</div>
                <div className={`${styles.dropDown} input`}>
                  {_get(TransitDetails, 'data[0].order.termsheet.transactionDetails.partShipmentAllowed', '')}
                  {/* {partShipmentAllowed ? 'Yes' : 'No'} */}
                </div>
              </div>
            </div>
            <div className={`${styles.dashboard_form} card-body`}>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Commodity <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>{_get(TransitDetails, 'data[0].order.commodity', '')}</span>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Quantity <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {_get(TransitDetails, 'data[0].order.quantity', '')?.toLocaleString('en-IN')}{' '}
                    {_get(TransitDetails, 'data[0].order.unitOfQuantity', '').toUpperCase('en-IN')}{' '}
                  </span>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Order Value <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    {/* {_get(TransitDetails, 'data[0].order.orderCurrency', '')} {' '}

                    {convertValue(_get(
                      TransitDetails,
                      'data[0].order.marginMoney.calculation.orderValue',
                      '',
                    ), _get(TransitDetails, 'data[0].order.orderCurrency', '') !== 'USD' ? 1000000 : 10000000)
                      ?.toLocaleString(_get(TransitDetails, 'data[0].order.orderCurrency', '') === 'INR' ? 'en-IN' : undefined,
                        { maximumFractionDigits: 2 })} */}
                    {convertValue(
                      _get(TransitDetails, 'data[0].order.marginMoney.calculation.orderValueInINR', ''),
                    )?.toLocaleString('en-IN', {
                      maximumFractionDigits: 2,
                    })}{' '}
                    {_get(TransitDetails, 'data[0].order.unitOfValue', '') == 'Crores'
                      ? 'Cr'
                      : _get(TransitDetails, 'data[0].order.unitOfValue', '')}
                  </span>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Shipping Line/Charter
                    <strong className="text-danger">*</strong>{' '}
                  </div>
                  {!shipmentTypeBulk ? (
                    <span className={styles.value}>
                      {_get(
                        TransitDetails,
                        'data[0].order.vessel.vessels[0].shippingInformation.shippingLineOrCharter',
                        '',
                      )}
                    </span>
                  ) : (
                    <span className={styles.value}>
                      {_get(
                        TransitDetails,
                        'data[0].order.vessel.vessels[0].vesselInformation[0].shippingLineOrCharter',
                        '',
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          {bolList?.map((bol, index) => {
            console.log(!shipmentTypeBulk ? bolList[0] : false, 'shipmentTypeBulk');
            return (
              <div key={index} className={`${styles.main} vessel_card card border_color`}>
                <div
                  className={`${styles.head_container} card-header align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
                >
                  <h3 className={`${styles.heading} flex-grow-1`}>Bill of Lading {index + 1}</h3>
                  {!partShipmentAllowed && (
                    <button
                      onClick={() => {
                        onBolAdd();
                      }}
                      className={`${styles.add_btn} mr-0`}
                    >
                      <span className={styles.add_sign}>+</span>Add
                    </button>
                  )}
                  {index > 0 && !bol?.isSubmitted ? (
                    <button
                      onClick={() => onDeleteClick(index)}
                      className={`${styles.add_btn} border-danger text-danger`}
                    >
                      <img src="/static/delete.svg" className="ml-1 mt-n1" width={13} alt="delete" /> Delete
                    </button>
                  ) : null}
                </div>
                <div className={`${styles.dashboard_form} card-body`}>
                  <div className={`${styles.bill_landing} border_color`}>
                    <div className={`${styles.vessel_card}`}>
                      <div className="row">
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                          <div className="d-flex">
                            <select
                              disabled={!shipmentTypeBulk ? bol?.isSubmitted : false}
                              value={bol?.vesselName}
                              id="vesselName"
                              onChange={(e) => onChangeVessel(e, index)}
                              className={`${styles.input_field} ${styles.customSelect}   input form-control`}
                            >
                              <option selected>Select an option</option>
                              {shipmentTypeBulk
                                ? _get(TransitDetails, 'data[0].order.vessel.vessels', []).map((vessel, index) => (
                                    <option value={vessel?.vesselInformation?.name} key={index}>
                                      {vessel?.vesselInformation[0]?.name}
                                    </option>
                                  ))
                                : _get(TransitDetails, 'data[0].order.vessel.vessels[0].vesselInformation', []).map(
                                    (vessel, index) => (
                                      <option value={vessel?.name} key={index}>
                                        {vessel?.name}
                                      </option>
                                    ),
                                  )}
                            </select>
                            <label className={`${styles.label_heading} label_heading`}>
                              Vessel Name
                              {shipmentTypeBulk ? <strong className="text-danger">*</strong> : ''}
                            </label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                          style={{ marginTop: '31px' }}
                        >
                          <p className={` label_heading`}>
                            IMO Number
                            {shipmentTypeBulk ? <strong className="text-danger">*</strong> : ''}
                          </p>
                          <span>{bol?.imoNumber}</span>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                          <input
                          disabled={!shipmentTypeBulk ? bol?.isSubmitted : false}
                            value={bol?.blNumber}
                            onChange={(e) => onChangeBol(e, index)}
                            id="blNumber"
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                          />
                          <label className={`${styles.label_heading} label_heading`}>
                            BL Number<strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                          <div className="d-flex">
                            {/* <DateCalender labelName="From" dateFormat={"dd-MM-yyyy"} saveDate={saveData} /> */}
                            <DatePicker
                              disabled={!shipmentTypeBulk ? bol?.isSubmitted : false}
                              // selected={
                              //   startBlDate ? moment(startBlDate).toDate() : ''
                              // }
                              selected={bol?.blDate == null ? null : moment(bol?.blDate).toDate()}
                              // value={moment((bol?.blDate)?.split(0, 10)).format('DD-MM-YYYY')}
                              defaultDate={bol?.blDate}
                              dateFormat="dd-MM-yyyy"
                              className={`${styles.input_field} ${styles.cursor} input form-control`}
                              onChange={(startBlDate) => {
                                setBlDate(startBlDate);
                                saveDate(startBlDate, 'blDate', index);
                              }}
                              minDate={lastDate}
                            />
                            {/* <DateCalender name='blDate'  defaultDate={bol?.blDate?.split('T')[0]} saveDate={saveDate} labelName=''/> */}

                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              BL Date
                              <strong className="text-danger">*</strong>
                            </label>
                          </div>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                          <input
                            disabled={!shipmentTypeBulk ? bol?.isSubmitted : false}
                            onFocus={(e) => {
                              setIsFieldInFocus(true), (e.target.type = 'number');
                            }}
                            onBlur={(e) => {
                              setIsFieldInFocus(false), (e.target.type = 'text');
                            }}
                            onChange={(e) => onChangeBol(e, index)}
                            id="blQuantity"
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            onWheel={(event) => event.currentTarget.blur()}
                            value={
                              isFieldInFocus
                                ? bol?.blQuantity
                                : Number(bol?.blQuantity)?.toLocaleString('en-IN') +
                                  ` ${_get(TransitDetails, 'data[0].order.unitOfQuantity', '')}`
                            }
                          />
                          <label className={`${styles.label_heading} label_heading`}>
                            BL Quantity
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div className={`${styles.eta_heading} mt-4 col-12`}>
                          ETA at Discharge Port
                          <strong className="text-danger">*</strong>
                        </div>
                        <div className={`${styles.form_group} ${styles.small_box} col-lg-2 col-md-4 col-sm-6`}>
                          <div className="d-flex">
                            {/* //<DateCalender labelName="From" dateFormat={"dd-MM-yyyy"} saveDate={saveData} /> */}
                            <DatePicker
                              disabled={!shipmentTypeBulk ? bol?.isSubmitted : false}
                              // value={moment((bol?.etaAtDischargePortFrom), 'YYYY-MM-DD', true).format("DD-MM-YYYY")}
                              // value={moment(bol?.etaAtDischargePortFrom).toDate()}
                              defaultDate={startetaAtDischargePortFrom}
                              name="ETAatDischargePort"
                              selected={
                                bol?.etaAtDischargePortFrom == null ? '' : moment(bol?.etaAtDischargePortFrom).toDate()
                              }
                              // selected={moment(bol?.etaAtDischargePortFrom==null?" ":bol?.etaAtDischargePortFrom).toDate()}
                              dateFormat="dd-MM-yyyy"
                              className={`${styles.input_field} ${styles.cursor} input form-control`}
                              onChange={(startetaAtDischargePortFrom) => {
                                setetaAtDischargePortFrom(startetaAtDischargePortFrom);
                                saveDate(startetaAtDischargePortFrom, 'etaAtDischargePortFrom', index);
                              }}
                              minDate={lastDate}
                              maxDate={moment(bol?.etaAtDischargePortTo).toDate()}
                            />
                            {/* <DateCalender name='etaAtDischargePortFrom'  defaultDate={bol?.etaAtDischargePortFrom?.split('T')[0]} saveDate={saveDate} labelName=''/> */}

                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                            <label className={`${styles.label_heading} label_heading`}>From</label>
                          </div>
                        </div>
                        <div className={`${styles.form_group} ${styles.small_box} col-lg-2 col-md-4 col-sm-6`}>
                          <div className="d-flex">
                            <DatePicker
                              disabled={!shipmentTypeBulk ? bol?.isSubmitted : false}
                              // value={moment((bol?.startetaAtDischargePortFrom), 'YYYY-MM-DD', true).format("DD-MM-YYYY")}

                              selected={
                                bol?.etaAtDischargePortTo == null ? '' : moment(bol?.etaAtDischargePortTo).toDate()
                              }
                              dateFormat="dd-MM-yyyy"
                              className={`${styles.input_field} ${styles.cursor} input form-control`}
                              onChange={(startetaAtDischargePortTo) => {
                                setetaAtDischargePortTo(startetaAtDischargePortTo);
                                saveDate(startetaAtDischargePortTo, 'etaAtDischargePortTo', index);
                              }}
                              minDate={lastDate}
                            />
                            {/* <DateCalender name='etaAtDischargePortTo'  defaultDate={bol?.etaAtDischargePortTo?.split('T')[0]} saveDate={saveDate} labelName=''/> */}
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                            <label className={`${styles.label_heading} label_heading`}>To</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {!shipmentTypeBulk ? (
                      <>
                        <hr></hr>
                        <div className={`${styles.vessel_card} mt-5`}>
                          <h5 className={`${styles.eta_heading} `}>
                            Container Details
                            <strong className="text-danger">*</strong>
                          </h5>
                          <div className="row mt-n4">
                            {console.log(bol, 'bol')}
                            {/* {bol?.containerDetails?.containerDoc !== null ? ( */}
                            <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                              <input
                                disabled={!shipmentTypeBulk ? bol?.isSubmitted : false}
                                // disabled
                                onChange={(e) => {
                                  onChangeContainerDetailsHandler(e, index);
                                }}
                                value={bol?.containerDetails?.numberOfContainers}
                                className={`${styles.input_field} input form-control`}
                                required
                                id="numberOfContainers"
                                type="number"
                                onWheel={(event) => event.currentTarget.blur()}
                                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                              />
                              <label className={`${styles.label_heading} label_heading`}>
                                Number of Containers
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            {/* ) : null} */}
                            <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                              <input
                                disabled={!shipmentTypeBulk ? bol?.isSubmitted : false}
                                onChange={(e) => onChangeContainerDetailsHandler(e, index)}
                                value={bol?.containerDetails?.freeDetentionPeriod}
                                className={`${styles.input_field} input form-control`}
                                required
                                id="freeDetentionPeriod"
                                type="number"
                                onWheel={(event) => event.currentTarget.blur()}
                                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                              />
                              <label className={`${styles.label_heading} label_heading`}>
                                Free Detention Period at Discharge Port (Days)
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div className={`${styles.form_group} col-lg-8 col-md-6`}>
                              {bol?.containerDetails?.containerDoc == null ? (
                                <>
                                  <div className={`${styles.uploadBtnWrapper} d-flex`}>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        name={`containerDoc`}
                                        id="containerDoc"
                                        onChange={(e) => {
                                          if (
                                            e.target.files[0].name.toLocaleLowerCase().endsWith('.xls') ||
                                            e.target.files[0].name.toLocaleLowerCase().endsWith('.xlsx')
                                          ) {
                                            onChangeContainerDetailsDocHandler(e, index);
                                          } else {
                                            let toastMessage = 'only XLS files are allowed';
                                            if (!toast.isActive(toastMessage.toUpperCase())) {
                                              toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                                            }
                                          }
                                        }}
                                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                        type="file"
                                      />
                                      <button className={`${styles.upload_btn} btn`}>Upload Excel</button>
                                    </div>

                                    <div className={`${styles.upload_text}`}>
                                      ONLY .XLSX FILES ARE ALLOWED
                                      <br /> &amp; MAX FILE SIZE UP TO 50MB
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                  <span>{bol?.containerDetails?.containerDoc?.originalName}</span>
                                  <img
                                    className={`${styles.close_image} ml-2 image_arrow`}
                                    src="/static/close.svg"
                                    onClick={(e) => !bol.isSubmitted && handleCloseContanierDoc('', index)}
                                    alt="Close"
                                  />{' '}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                    <div className={styles.table_scroll_outer}>
                      <div className={styles.table_scroll_inner}>
                        <table className={`${styles.table} table mt-5`} cellPadding="0" cellSpacing="0" border="0">
                          <thead>
                            <tr>
                              <th width="25%">
                                DOCUMENT NAME{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="20%">
                                FORMAT{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="25%">
                                DOCUMENT DATE{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="30%">ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                BL
                                <strong className="text-danger ml-0">*</strong>
                              </td>
                              <td>
                                {bolList[index]?.blDoc ? returnDocFormat(bolList[index]?.blDoc?.originalName) : null}
                              </td>
                              <td className={styles.doc_row}>
                                {bolList[index]?.blDoc == null
                                  ? ''
                                  : moment(bolList[index]?.blDoc.date).format('DD-MM-YYYY , h:mm a ')}
                              </td>
                              <td>
                                {bolList && bolList[index]?.blDoc == null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        type="file"
                                        name={`blDoc`}
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDoc(e, index)}
                                      />
                                      <button className={`${styles.upload_btn} btn`}>Upload</button>
                                    </div>
                                  </>
                                ) : (
                                  <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                    <span>{bolList[index]?.blDoc?.originalName}</span>
                                    <img
                                      className={`${styles.close_image} ml-2 image_arrow`}
                                      src="/static/close.svg"
                                      onClick={(e) => !bol.isSubmitted && handleCloseDoc('blDoc', index)}
                                      alt="Close"
                                    />{' '}
                                  </div>
                                )}
                              </td>
                            </tr>
                            {!shipmentTypeBulk ? (
                              <>
                                <tr className="table_row">
                                  <td className={styles.doc_name}>
                                    Container No. List
                                    <strong className="text-danger ml-0">*</strong>
                                  </td>
                                  <td>
                                    {bolList[index]?.containerNumberListDoc
                                      ? returnDocFormat(bolList[index]?.containerNumberListDoc?.originalName)
                                      : null}
                                  </td>
                                  <td className={styles.doc_row}>
                                    {bolList[index]?.containerNumberListDoc == null
                                      ? ''
                                      : moment(bolList[index]?.containerNumberListDoc.date).format(
                                          'DD-MM-YYYY , h:mm a ',
                                        )}
                                  </td>
                                  <td>
                                    {bolList && bolList[index]?.containerNumberListDoc == null ? (
                                      <>
                                        <div className={styles.uploadBtnWrapper}>
                                          <input
                                            type="file"
                                            name={`containerNumberListDoc`}
                                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                            onChange={(e) => uploadDoc(e, index)}
                                          />
                                          <button className={`${styles.upload_btn} btn`}>Upload</button>
                                        </div>
                                      </>
                                    ) : (
                                      <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                        <span>{bolList[index]?.containerNumberListDoc?.originalName}</span>
                                        <img
                                          className={`${styles.close_image} ml-2 image_arrow`}
                                          src="/static/close.svg"
                                          onClick={(e) =>
                                            !bol.isSubmitted && handleCloseDoc('containerNumberListDoc', index)
                                          }
                                          alt="Close"
                                        />{' '}
                                      </div>
                                    )}
                                  </td>
                                </tr>
                                <tr className="table_row">
                                  <td className={styles.doc_name}>
                                    Packing List
                                    <strong className="text-danger ml-0">*</strong>
                                  </td>
                                  <td>
                                    {bolList[index]?.packingListDoc
                                      ? returnDocFormat(bolList[index]?.packingListDoc?.originalName)
                                      : null}
                                  </td>
                                  <td className={styles.doc_row}>
                                    {bolList[index]?.packingListDoc == null
                                      ? ''
                                      : moment(bolList[index]?.packingListDoc.date).format('DD-MM-YYYY , h:mm a ')}
                                  </td>
                                  <td>
                                    {bolList && bolList[index]?.packingListDoc == null ? (
                                      <>
                                        <div className={styles.uploadBtnWrapper}>
                                          <input
                                            type="file"
                                            name={`packingListDoc`}
                                            accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                            onChange={(e) => uploadDoc(e, index)}
                                          />
                                          <button className={`${styles.upload_btn} btn`}>Upload</button>
                                        </div>
                                      </>
                                    ) : (
                                      <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                        <span>{bolList[index]?.packingListDoc?.originalName}</span>
                                        <img
                                          className={`${styles.close_image} ml-2 image_arrow`}
                                          src="/static/close.svg"
                                          onClick={(e) => !bol.isSubmitted && handleCloseDoc('packingListDoc', index)}
                                          alt="Close"
                                        />{' '}
                                      </div>
                                    )}
                                  </td>
                                </tr>
                              </>
                            ) : (
                              ''
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.bill_landing}  border_color mt-4`}>
                    <div className={`${styles.vessel_card} mt-3`}>
                      <div className="row">
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                          <div className="d-flex">
                            <DatePicker
                              disabled={!shipmentTypeBulk ? bol?.isSubmitted : false}
                              selected={bol?.blSurrenderDate == null ? '' : moment(bol?.blSurrenderDate).toDate()}
                              dateFormat="dd-MM-yyyy"
                              className={`${styles.input_field} ${styles.cursor} input form-control`}
                              onChange={(startblSurrenderDate) => {
                                setblSurrenderDate(startblSurrenderDate);
                                saveDate(startblSurrenderDate, 'blSurrenderDate', index);
                              }}
                              minDate={lastDate}
                            />

                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                            <label className={`${styles.label_heading} label_heading`}>BL Surrender Date</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.table_scroll_outer}>
                      <div className={styles.table_scroll_inner}>
                        <table className={`${styles.table} table mt-5`} cellPadding="0" cellSpacing="0" border="0">
                          <thead>
                            <tr>
                              <th width="25%">
                                DOCUMENT NAME{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="20%">
                                FORMAT{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="25%">
                                DOCUMENT DATE{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="30%">ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                BL Acknowledgment Copy
                                <strong className="text-danger ml-0">*</strong>
                              </td>
                              <td>
                                {bolList[index]?.blSurrenderDoc
                                  ? returnDocFormat(bolList[index]?.blSurrenderDoc?.originalName)
                                  : null}
                              </td>
                              <td className={styles.doc_row}>
                                {bolList[index]?.blSurrenderDoc === null
                                  ? ''
                                  : moment(bolList[index]?.blSurrenderDoc?.Date).format(' DD-MM-YYYY , h:mm a')}
                              </td>
                              <td>
                                {bolList && bolList[index]?.blSurrenderDoc == null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        type="file"
                                        name={`blSurrenderDoc`}
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDoc(e, index)}
                                      />
                                      <button className={`${styles.upload_btn} btn`}>Upload</button>
                                    </div>
                                  </>
                                ) : (
                                  <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                    <span>{bolList[index]?.blSurrenderDoc?.originalName}</span>
                                    <img
                                      className={`${styles.close_image} ml-2 image_arrow`}
                                      src="/static/close.svg"
                                      onClick={(e) => !bol.isSubmitted && handleCloseDoc('blSurrenderDoc', index)}
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
            );
          })}

          <div className="0">
            <UploadOther
              orderid={orderid}
              module={[
                '3rd Party Inspection',
                'Plot Inspection',
                'Bill of Lading',
                'Letter of Indemnity',
                'BL Surrender',
                'Forward Hedging',
                'CIMS',
                'IGM',
                'Intercompany Invoicing',
              ]}
            />
          </div>
        </div>
        <SaveBar handleSave={saveData} rightBtn="Submit" rightBtnClick={handleShow} />
      </div>

      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        className={styles.updated_successfully}
        backdropClassName={styles.backdrop}
      >
        <Modal.Header className={`${styles.card_header} card-header background`}>
          <Modal.Title>
            <h3>Updated Successfully</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${styles.card_body} card-body container-fluid`}>
          <img src="/static/updated-successfully.svg" alt="Updated Successfully" className="img-fluid" />
          <h4>Success</h4>
          <p>The bill of lading is successfully updated.</p>
          <div className="d-flex align-items-center justify-content-between">
            <button type="button" className={`${styles.card_button} ${styles.close} btn`} onClick={handleClose}>
              Close
            </button>
            <button type="button" className={`${styles.card_button} ${styles.track_view} btn`}>
              Track &amp; View
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
