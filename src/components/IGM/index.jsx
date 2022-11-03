/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from './index.module.scss';
import { Form, Row, Col } from 'react-bootstrap';
import SaveBar from '../SaveBar';
// import InspectionDocument from '../InspectionDocument'
import UploadOther from '../UploadOther';
import DateCalender from '../DateCalender';
import _get from 'lodash/get';
import { useDispatch } from 'react-redux';
import {
  UpdateTransitDetails,

} from '../../redux/TransitDetails/action';
import { element, number } from 'prop-types';
import { useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import {
  checkNan,
  convertValue,

} from '../../utils/helper';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { settingSidebar } from 'redux/breadcrumb/action';
export default function Index({
  isShipmentTypeBULK,
  TransitDetails,
  orderId,
  docUploadFunction,
}) {
  let transId = _get(TransitDetails, `data[0]`, '');


  const dispatch = useDispatch();
  const router = useRouter();



  let shipmentTypeBulk =
    _get(
      TransitDetails,
      `data[0].order.termsheet.transactionDetails.shipmentType`,
      '',
    ) === 'Bulk'
      ? true
      : false;

  const [editInput, setEditInput] = useState(true);

  const [shipmentType, setShipmentType] = useState(true);

  const [startBlDate, setBlDate] = useState(null);

  const [lastDate, setlastDate] = useState(new Date());

  const [consigneeName, setConsigneeName] = useState('');

  const [consigneeInfo, setConsigneeInfo] = useState({
    name: '',
    branch: '',
    address: '',
  });

  const [igmList, setIgmList] = useState({
    shipmentType: '',
    shipmentDetails: {
      consigneeName: "",
      consigneeBranch: "",
      consigneeAddress: "",
    },
    igmDetails: [
      {
        vesselName: '',
        igmNumber: '',
        igmFiling: null,
        blNumber: [
          {
            blNumber: number,
            blDate: new Date(),
            blQuantity: '',
            noOfContainers: '',
          },
        ],
      },
    ],
    document: null,
  });

  const [blNewNumberEntry, setBlNewNumberEntry] = useState({
    blNumber: number,
    BlDate: new Date(),
    quantity: '',
  });

  const [orderData, setOrderData] = useState();


  const checkRemainingBalance = () => {
    let balance = _get(TransitDetails, 'data[0].order.quantity', 0);
    igmList.igmDetails.forEach((item) => {
      item.blNumber.forEach((item2) => {
        balance = balance - item2.blQuantity;
      });
    });
    if (balance < 0) {
      let toastMessage = `igm cannot be greater than order quantity`;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    }
    return balance;
  };

  useEffect(() => {
    let NewArr = [];
    TransitDetails?.data?.forEach((element) => {
      NewArr.push(element);
    });
    setOrderData(NewArr);
  }, [TransitDetails]);

  const partShipmentAllowed = _get(
    TransitDetails,
    'data[0].order.vessel.partShipmentAllowed',
    false,
  );

  const onigmAdd = (index) => {
    let a = index + 1;
    let tempArray = { ...igmList };
    tempArray.igmDetails.push({
      vesselName:
        TransitDetails?.data[0]?.BL?.billOfLanding[a]?.vesselName ?? '',

      igmNumber: '',
      igmFiling: null,
      document: null,
      blNumber: [
        {
          blNumber:
            TransitDetails?.data[0]?.BL?.billOfLanding[a]?.blNumber ?? '',
          BlDate: moment(
            TransitDetails?.data[0]?.BL?.billOfLanding[a]?.blDate ?? '',
          ).format('DD-MM-YYYY'),
          quantity:
            TransitDetails?.data[0]?.BL?.billOfLanding[a]?.blQuantity ?? '',
          noOfContainers: 0,
        },
      ],
    });
    setIgmList(tempArray);
  };
  const onDeleteClick = (index) => {
    // setIgmList({
    //     ...igmList.igmDetails.slice(0, index),
    //     ...igmList.igmDetails.slice(index + 1),
    // })
    setIgmList({
      ...igmList,
      igmDetails: [
        ...igmList.igmDetails.slice(0, index),
        ...igmList.igmDetails.slice(index + 1),
      ],
    });
  };
  const onChangeIgm = (name, text, index) => {
    if (name === 'blQuantity') {
      if (checkRemainingBalance() < value) {
        let toastMessage = `BL quantity cannot be greater than total order quantity`;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
      }
    }

    let newData = { ...igmList };
    newData.igmDetails[index][name] = text;
    setIgmList(newData);
  };
  const saveDate = (value, name, index) => {

    const d = new Date(value);
    let text = d.toISOString();
    onChangeIgm(name, text, index);
  };

  const onChangeVessel = (e, index) => {
    let VesselName = e.target.value;
    let filteredVessel = {};

    // let vesselData = _get(TransitDetails, `data[0].order.vessel.vessels[0]`, {})
    if (
      _get(
        TransitDetails,
        `data[0].order.vessel.vessels[0].shipmentType`,
        '',
      ) === 'Bulk'
    ) {
      _get(TransitDetails, `data[0].order.vessel.vessels`, []).forEach(
        (vessel, index) => {
          if (vessel.vesselInformation[0].name === VesselName) {
            filteredVessel = vessel;
          }
        },
      );
    } else {
      filteredVessel = _get(
        TransitDetails,
        `data[0].order.vessel.vessels[0]`,
        {},
      );
      let tempArray = _get(
        TransitDetails,
        `data[0].order.vessel.vessels[0].vesselInformation`,
        [],
      );
      tempArray.forEach((vessel, index) => {
        if (vessel.name === VesselName) {
          filteredVessel.vesselInformation = [vessel];
        }
      });
    }

    const newArray = [...igmList];
    newArray[index].vesselName = filteredVessel.vesselInformation[0].name;
    newArray[index].imoNumber = filteredVessel.vesselInformation[0].IMONumber;
    newArray[index].etaAtDischargePortFrom =
      filteredVessel.transitDetails.EDTatLoadPort;
    newArray[index].etaAtDischargePortTo =
      filteredVessel.transitDetails.ETAatDischargePort;

    setIgmList(newArray);
  };
  const onAddBlNumber = (index, index2) => {
    let newIgmList = { ...igmList };

    newIgmList.igmDetails[index].blNumber.push({
      blNumber: number,
      BlDate: new Date(),
      quantity: '',
    });
    setIgmList(newIgmList);
  };

  const onRemoveBlNumber = (index, index2) => {
    let tempArray = { ...igmList };
    tempArray.igmDetails[index].blNumber.splice(index2, 1);

    setIgmList(tempArray);
  };



  const onChangeConsignee = (e) => {
    if (e.target.value === 'indoGerman') {
      setConsigneeInfo({
        name: 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED',
        branch: 'DELHI',
        address: '7A , SAGAR APARTMENTS, 6 TILAK MARG, NEW DELHI-110001',
      });
      setConsigneeName('indoGerman');
    } else if (e.target.value === 'EMERGENT') {
      setConsigneeInfo({
        name: 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED',
        branch: 'VIZAG',
        address:
          '49-18-6/1, GROUND FLOOR, LALITHA NAGAR, SAKSHI OFFICE ROAD AKKAYYAPALEM, VISAKHAPATNAM, ANDHRA PRADESH - 530016',
      });
      setConsigneeName('EMERGENT');
    } else {
      setConsigneeInfo({ name: '', branch: '', address: '' });
      setConsigneeName('');
    }
  };

  useEffect(() => {
    if (_get(TransitDetails, `data[0].IGM`, {})) {
      setConsigneeInfo({
        name:
          _get(
            TransitDetails,
            `data[0].IGM.shipmentDetails.consigneeName`,
            '',
          ) ||
          "",
        branch:
          _get(
            TransitDetails,
            `data[0].IGM.shipmentDetails.consigneeBranch`,
            '',
          ) ||
          "",
        address:
          _get(
            TransitDetails,
            `data[0].IGM.shipmentDetails.consigneeAddress`,
            '',
          ) ||
          "",
      });

      if (
        _get(TransitDetails, `data[0].IGM.shipmentDetails.consigneeName`, '') ==
        'EMERGENT INDUSTRIAL SOLUTIONS LIMITED' ||
        _get(
          TransitDetails,
          `data[0].order.marginMoney.invoiceDetail.importerName`,
        ) == 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED'
      ) {
        setConsigneeName('EMERGENT');
        setConsigneeInfo({
          name: 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED',
          branch: 'VIZAG',
          address:
            '49-18-6/1, GROUND FLOOR, LALITHA NAGAR, SAKSHI OFFICE ROAD AKKAYYAPALEM, VISAKHAPATNAM, ANDHRA PRADESH - 530016',
        })
      }
      if (
        _get(TransitDetails, `data[0].IGM.shipmentDetails.consigneeName`, '') ==
        'INDO GERMAN INTERNATIONAL PRIVATE LIMITED' ||
        _get(
          TransitDetails,
          `data[0].order.marginMoney.invoiceDetail.importerName`,
        ) == 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED'
      ) {
        setConsigneeName('indoGerman');
        setConsigneeInfo({
          name: 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED',
          branch: 'DELHI',
          address: '7A , SAGAR APARTMENTS, 6 TILAK MARG, NEW DELHI-110001',
        })
      }
      let existingData = _get(TransitDetails, `data[0].IGM.igmDetails`, [
        {
          vesselName: _get(
            TransitDetails,
            `data[0].BL.billOfLanding[0].vesselName`,
            '',
          ),
          igmNumber: '',
          igmFiling: null,
          document: null,
          blNumber: [
            {
              blNumber: _get(
                TransitDetails,
                `data[0].BL.billOfLanding[0].blNumber`,
                '',
              ),
              BlDate: moment(
                _get(TransitDetails, `data[0].BL.billOfLanding[0].blDate`, ''),
              ).format('DD-MM-YYYY'),
              quantity: _get(
                TransitDetails,
                `data[0].BL.billOfLanding[0].blQuantity`,
                '',
              ),
              noOfContainers: 0,
            },
          ],
        },
      ]);
      let tempArray = { ...igmList };
      tempArray.igmDetails = [...existingData];
      setIgmList(tempArray);
    }

  }, [TransitDetails]);

  const onChangeBlDropDown = (e) => {
    const text = e.target.value;
    let [value, index, index2] = text?.split('-');
    if (value) {
      const filterData = _get(
        TransitDetails,
        'data[0].BL.billOfLanding',
        [],
      ).filter((item) => {
        return item.blNumber === value;
      });


      //     setIgmList(prevState => {
      //       return {
      //         ...prevState, [
      //         ...prevState.igmDetails, {
      //           ...prevState.igmDetails[index], [
      //       ...prevState.igmDetails[index].blNumber, {
      //         ...prevState.igmDetails[index].blNumber[index2]}, blNumber:'' ,BlDate:'' ,quantity: '',
      //     ] }]
      // }
      // })
      let tempArray = { ...igmList };
      tempArray.igmDetails[index].blNumber[index2].blDate =
        filterData[0].blDate;
      tempArray.igmDetails[index].blNumber[index2].blNumber =
        filterData[0].blNumber;
      tempArray.igmDetails[index].blNumber[index2].blQuantity =
        filterData[0].blQuantity;
      tempArray.igmDetails[index].blNumber[index2].noOfContainers =
        filterData[0].containerDetails?.numberOfContainers;
      setIgmList(tempArray);
    }
  };


  const onDocumentSelect = async (e, index) => {

    const docData = await docUploadFunction(e);

    let temparray = { ...igmList };

    temparray.igmDetails[index].document = docData;
    setIgmList(temparray);
  };

  const handleCloseDoc = (e, index) => {
    let temparray = { ...igmList };
    temparray.igmDetails[index].document = null;
    setIgmList(temparray);
  };

  const handleSave = () => {
    const igmDetails = { ...igmList };
    igmDetails.shipmentType = _get(
      TransitDetails,
      `data[0].order.vessel.vessels[0].shipmentType`,
      '',
    );
    igmDetails.shipmentDetails = {
      consigneeName: consigneeInfo.name,
      consigneeBranch: consigneeInfo.branch,
      consigneeAddress: consigneeInfo.address,
    };

    let fd = new FormData();
    fd.append('igm', JSON.stringify(igmDetails));
    fd.append('transitId', transId._id);
    let task = 'save';
    dispatch(UpdateTransitDetails({ fd, task }));
  };

  const handleSubmit = async () => {
    const igmDetails = { ...igmList };
    igmDetails.shipmentType = _get(
      TransitDetails,
      `data[0].order.vessel.vessels[0].shipmentType`,
      '',
    );
    igmDetails.shipmentDetails = {
      consigneeName: consigneeInfo.name,
      consigneeBranch: consigneeInfo.branch,
      consigneeAddress: consigneeInfo.address,
    };

    let fd = new FormData();
    fd.append('igm', JSON.stringify(igmDetails));
    fd.append('transitId', transId._id);
    let task = 'submit';
    let code = await dispatch(UpdateTransitDetails({ fd, task }));
    if (code == true) {
      sessionStorage.setItem(
        'docFetchID',
        _get(TransitDetails, 'order._id', ''),
      );
      sessionStorage.setItem(
        'headgingId',
        _get(TransitDetails, 'order.transit', ''),
      );
      dispatch(
        settingSidebar(
          'Loading, Transit & Unloadinge',
          'Forward Hedging',
          'Forward Hedging',
          '3',
        ),
      );
      router.push(`/forward-hedging`);
    }
  };
  const getIndex = (index) => {
    return index = index + 1
  }
  return (
    <>
      <div className={`${styles.backgroundMain} p-0 container-fluid`}>
        <div className={`${styles.vessel_card} border_color`}>
          <div className={`${styles.wrapper} border_color card`}>
            <div className="d-lg-flex align-items-center d-inline-block">
              <h2 className="">Shipment Type</h2>
              <div className={`${styles.radio_form} ml-lg-5 ml-n4`}>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className={styles.radio_group}>
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Bulk"
                      name="group11"
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
                      name="group11"
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

          <div className={`${styles.main} vessel_card border_color card `}>
            <div
              className={`${styles.head_container} border_color card-header head_container align-items-center d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading} mb-0`}>Commodity Details</h3>
            </div>
            <div className={`${styles.dashboard_form} card-body`}>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Commodity <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {_get(TransitDetails, 'data[0].order.commodity', '')}
                  </span>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    BL Quantity <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {_get(
                      TransitDetails,
                      'data[0].order.quantity',
                      '',
                    )?.toLocaleString('en-IN')}{' '}
                    {_get(
                      TransitDetails,
                      'data[0].order.unitOfQuantity',
                      '',
                    ).toUpperCase('en-IN')}{' '}
                  </span>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Order Value <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    {/* 
                    {_get(TransitDetails, 'data[0].order.orderCurrency', '')} {' '}

                    {convertValue(_get(
                      TransitDetails,
                      'data[0].order.marginMoney.calculation.orderValue',
                      '',
                    ), _get(TransitDetails, 'data[0].order.orderCurrency', '') !== 'USD' ? 1000000 : 10000000)
                      ?.toLocaleString(_get(TransitDetails, 'data[0].order.orderCurrency', '') === 'INR' ? 'en-IN' : undefined,
                        { maximumFractionDigits: 2 })} */}
                    {convertValue(
                      _get(
                        TransitDetails,
                        'data[0].order.marginMoney.calculation.orderValueInINR',
                        '',
                      ),
                    ).toLocaleString('en-IN', {
                      maximumFractionDigits: 2,
                    })}{' '}
                    {_get(TransitDetails, 'data[0].order.unitOfValue', '') ==
                      'Crores'
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
          <div className={`${styles.main} vessel_card card border_color`}>
            <div
              className={`${styles.head_container} card-header align-items-center border_color head_container d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading} mb-0`}>Shipment Details</h3>
            </div>
            <div className={`${styles.dashboard_form} card-body`}>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Country Of Origin{' '}
                    <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {_get(
                      TransitDetails,
                      'data[0].order.vessel.vessels[0].transitDetails.countryOfOrigin',
                      '',
                    )}
                  </span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Port Of Loading{' '}
                    <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {_get(
                      TransitDetails,
                      'data[0].order.vessel.vessels[0].transitDetails.portOfLoading',
                      '',
                    )}
                  </span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                  <div className={`${styles.label} text`}>
                    Port of Discharge{' '}
                    <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    {_get(
                      TransitDetails,
                      'data[0].order.vessel.vessels[0].transitDetails.portOfDischarge',
                      '',
                    )}
                  </span>
                </div>
                <div className={`${styles.form_group} col-lg-4 col-md-6 `}>
                  <div className="d-flex">
                    <select
                      onChange={(e) => onChangeConsignee(e)}
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      value={consigneeName}
                    >
                      <option value="">Select an option</option>
                      <option value="indoGerman">
                        INDO GERMAN INTERNATIONAL PRIVATE LIMITED
                      </option>
                      <option value="EMERGENT">
                        EMERGENT INDUSTRIAL SOLUTIONS LIMITED
                      </option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Consignee Name<strong className="text-danger">*</strong>
                    </label>
                    <img
                      className={`${styles.arrow} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6"
                  style={{ marginTop: '35px' }}
                >
                  <div className={`${styles.label} text`}>
                    Consignee Branch<strong className="text-danger">*</strong>{' '}
                  </div>
                  <span className={styles.value}>{consigneeInfo.branch}</span>
                </div>
                <div
                  className="col-lg-4 col-md-6 "
                  style={{ marginTop: '35px' }}
                >
                  <div className={`${styles.label} text`}>
                    Consignee Address<strong className="text-danger">*</strong>{' '}
                  </div>
                  <span className={styles.value}>{consigneeInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
          {igmList.igmDetails.map((item, index) => {

            return (
              <div
                key={index}
                className={`${styles.main} vessel_card card border_color`}
              >
                <div
                  className={`${styles.head_container} card-header align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
                >
                  <h3 className={`${styles.heading} mb-0`}>IGM {getIndex(index)}</h3>
                  <div className="d-flex align-items-center">
                    <div className={`${styles.label} text`}>
                      Balance Quantity:
                    </div>
                    <div className={`${styles.value} ml-2 mr-4`}>
                      {checkNan(checkRemainingBalance())}{' '}
                      {_get(TransitDetails, 'data[0].order.unitOfQuantity', '')}{' '}
                    </div>
                    <button
                      onClick={() => onigmAdd(index)}
                      className={styles.add_btn}
                      style={{ paddingBottom: '10px' }}
                    >
                      <span className={styles.add_sign}>+</span>Add
                    </button>
                    {index > 0 ? (
                      <button
                        onClick={() => onDeleteClick(index)}
                        className={`${styles.add_btn} mt-2 border-danger text-danger`}
                      >
                        <img
                          src="/static/delete.svg"
                          className="ml-1 mt-n1"
                          width={13}
                          alt="delete"
                        />{' '}
                        Delete
                      </button>
                    ) : null}
                  </div>
                </div>
                <div className={`${styles.dashboard_form} card-body`}>
                  <div className="row">
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                    >
                      <div className="d-flex">
                        <select
                          id="vesselName"
                          onChange={(e) =>
                            onChangeIgm(e.target.id, e.target.value, index)
                          }
                          className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                          value={item.vesselName}
                          disabled={
                            _get(
                              TransitDetails,
                              `data[0].order.termsheet.transactionDetails.shipmentType`,
                              '',
                            ) === 'Bulk' &&
                            _get(
                              TransitDetails,
                              `data[0].order.termsheet.transactionDetails.partShipmentAllowed`,
                              '',
                            ) === 'No'
                          }
                        >
                          {shipmentTypeBulk
                            ? _get(
                              TransitDetails,
                              'data[0].order.vessel.vessels',
                              [],
                            ).map((vessel, index) => (
                              <option
                                value={vessel?.vesselInformation[0]?.name}
                                key={index}
                              >
                                {vessel?.vesselInformation[0]?.name}
                              </option>
                            ))
                            : _get(
                              TransitDetails,
                              'data[0].order.vessel.vessels[0].vesselInformation',
                              [],
                            ).map((vessel, index) => (
                              <option value={vessel?.name} key={index}>
                                {vessel?.name}
                              </option>
                            ))}
                        </select>
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Vessel Name
                          {shipmentTypeBulk ? (
                            <strong className="text-danger">*</strong>
                          ) : (
                            ''
                          )}
                        </label>
                        <img
                          className={`${styles.arrow} image_arrow img-fluid`}
                          src="/static/inputDropDown.svg"
                          alt="Search"
                        />
                      </div>
                    </div>

                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <input
                        value={item.igmNumber}
                        id="igmNumber"
                        onChange={(e) =>
                          onChangeIgm(e.target.id, e.target.value, index)
                        }
                        className={`${styles.input_field} input form-control`}
                        type="number"
                        onWheel={(event) => event.currentTarget.blur()}
                        onKeyDown={(evt) =>
                          ['e', 'E', '+', '-'].includes(evt.key) &&
                          evt.preventDefault()
                        }
                      />
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        IGM No./Rotation No.
                        <strong className="text-danger">*</strong>
                      </label>
                    </div>

                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <DateCalender
                          index={index}
                          selected={
                            item.igmFiling == null ? '' : moment(item.igmFiling)
                          }
                          defaultDate={item.igmFiling}
                          name="igmFiling"
                          saveDate={saveDate}
                          labelName="IGM Filing Date"
                        />
                        <img
                          className={`${styles.calanderIcon} image_arrow img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="mt-4 mb-0 border_color" />
                  <div className="row">
                    {item.blNumber.map((blEntry, index2) => {

                      return (
                        <>
                          <div
                            className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                          >
                            <div className="d-flex">
                              <select
                                id="vesselName"
                                onChange={(e) => {
                                  if (e.target.value !== 'select an option') {
                                    onChangeBlDropDown(e);
                                  }
                                }}
                                className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                                value={`${blEntry.blNumber}-${index}-${index2}`}
                              >
                                <option value="select an option">
                                  Select an option
                                </option>
                                {_get(
                                  TransitDetails,
                                  'data[0].BL.billOfLanding',
                                  [],
                                ).map((bl, index3) => (
                                  <option
                                    key={index3}
                                    value={`${bl.blNumber}-${index}-${index2}`}
                                  >
                                    {bl.blNumber}
                                  </option>
                                ))}
                              </select>

                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                BL Number
                                <strong className="text-danger">*</strong>
                              </label>
                              <img
                                className={`${styles.arrow} image_arrow img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                              />
                            </div>
                          </div>
                          {shipmentTypeBulk ? (
                            <>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6"
                                style={{ top: '35px' }}
                              >
                                <div className={`${styles.label} text`}>
                                  BL Date{' '}
                                  <strong className="text-danger ml-n1">
                                    *
                                  </strong>
                                </div>
                                <span className={styles.value}>
                                  {blEntry?.blDate
                                    ? moment(blEntry?.blDate).format(
                                      'DD-MM-YYYY',
                                    )
                                    : ''}
                                </span>
                              </div>
                              <div
                                className="col-lg-2 col-md-4 col-sm-6"
                                style={{ top: '35px' }}
                              >
                                <div className={`${styles.label} text`}>
                                  BL Quantity{' '}
                                  <strong className="text-danger ml-n1">
                                    *
                                  </strong>
                                </div>
                                <span className={styles.value}>
                                  <span className='mr-2'>{blEntry?.blQuantity}{' '}</span>
                                  {_get(
                                    TransitDetails,
                                    'data[0].order.unitOfQuantity',
                                    '',
                                  ).toUpperCase()}{' '}
                                </span>
                              </div>
                              <div
                                className="col-lg-2 col-md-4 col-sm-6"
                                style={{ top: '35px' }}
                              >
                                <div className="d-flex align-items-center">
                                  <img
                                    src="/static/preview.svg"
                                    className={`${styles.previewImg} ml-n4`}
                                    alt="Preview"
                                  />
                                  {item.blNumber.length >= index2 ? (
                                    <img
                                      onClick={() =>
                                        onAddBlNumber(index, index2)
                                      }
                                      src="/static/add-btn.svg"
                                      className={`${styles.delete_image} ml-5`}
                                      alt="Add"
                                    />
                                  ) : null}
                                  {item.blNumber.length > 1 ? (
                                    <img
                                      onClick={() =>
                                        onRemoveBlNumber(index, index2)
                                      }
                                      src="/static/delete 2.svg"
                                      className={`${styles.delete_image} ml-5`}
                                      alt="delete"
                                    />
                                  ) : null}
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6"
                                style={{ top: '35px' }}
                              >
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className={`${styles.label} text`}>
                                      BL Date{' '}
                                      <strong className="text-danger ml-n1">
                                        *
                                      </strong>
                                    </div>
                                    <span className={styles.value}>
                                      {blEntry?.blDate
                                        ? moment(blEntry?.blDate).format(
                                          'DD-MM-YYYY',
                                        )
                                        : ''}
                                    </span>
                                  </div>
                                  <div className="col-md-6">
                                    <div className={`${styles.label} text`}>
                                      No. of Containers{' '}
                                      <strong className="text-danger ml-n1">
                                        *
                                      </strong>
                                    </div>
                                    <span className={styles.value}>
                                      {blEntry?.noOfContainers}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-4 col-sm-6"
                                style={{ top: '35px' }}
                              >
                                <div className="row align-items-center">
                                  <div className="col-md-6">
                                    <div className={`${styles.label} text`}>
                                      BL Quantity{' '}
                                      <strong className="text-danger ml-n1">
                                        *
                                      </strong>
                                    </div>
                                    <span className={styles.value}>
                                      <span className='mr-2'>{blEntry?.blQuantity}</span>
                                      {_get(
                                        TransitDetails,
                                        'data[0].order.unitOfQuantity',
                                        '',
                                      ).toUpperCase()}
                                    </span>
                                  </div>
                                  <div className="col-md-6">
                                    <img
                                      src="/static/preview.svg"
                                      className={`${styles.previewImg} ml-n4`}
                                      alt="Preview"
                                    />
                                    {item.blNumber.length >= index2 ? (
                                      <img
                                        onClick={() =>
                                          onAddBlNumber(index, index2)
                                        }
                                        src="/static/add-btn.svg"
                                        className={`${styles.delete_image} ml-5`}
                                        alt="Add"
                                      />
                                    ) : null}
                                    {index2 > 0 ? (
                                      <img
                                        onClick={() =>
                                          onRemoveBlNumber(index, index2)
                                        }
                                        src="/static/delete 2.svg"
                                        className={`${styles.delete_image} ml-5`}
                                        alt="delete"
                                      />
                                    ) : null}
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
                    <table
                      className={`${styles.table} table my-0`}
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <thead>
                        <tr>
                          <th>
                            DOCUMENT NAME{' '}
                            <img
                              className={`${styles.sort_img} mb-1`}
                              src="/static/icons8-sort-24.svg"
                              alt="Sort icon"
                            />
                          </th>
                          <th>
                            FORMAT{' '}
                            <img
                              className={`${styles.sort_img} mb-1`}
                              src="/static/icons8-sort-24.svg"
                              alt="Sort icon"
                            />
                          </th>
                          <th>
                            DOCUMENT DATE
                            <img
                              className={`${styles.sort_img} mb-1 ml-2`}
                              src="/static/icons8-sort-24.svg"
                              alt="Sort icon"
                            />
                          </th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table_row">
                          <td className={styles.doc_name}>
                            IGM Copy
                            <strong className="text-danger ml-0">*</strong>
                          </td>
                          <td>
                            {item?.document ? (
                              item?.document?.originalName
                                ?.toLowerCase()
                                .endsWith('.xls') ||
                                item?.document?.originalName
                                  ?.toLowerCase()
                                  .endsWith('.xlsx') ? (
                                <img
                                  src="/static/excel.svg"
                                  className="img-fluid"
                                  alt="Pdf"
                                />
                              ) : item?.document?.originalName
                                ?.toLowerCase()
                                .endsWith('.doc') ||
                                item?.document?.originalName
                                  ?.toLowerCase()
                                  .endsWith('.docx') ? (
                                <img
                                  src="/static/doc.svg"
                                  className="img-fluid"
                                  alt="Pdf"
                                />
                              ) : (
                                <img
                                  src="/static/pdf.svg"
                                  className="img-fluid"
                                  alt="Pdf"
                                />
                              )
                            ) : null}
                          </td>
                          <td className={styles.doc_row}>
                            {item?.document
                              ? moment(item?.document?.Date).format(
                                ' DD-MM-YYYY , h:mm a',
                              )
                              : ''}
                          </td>
                          <td>
                            {item.document === null ? (
                              <>
                                <div className={styles.uploadBtnWrapper}>
                                  <input
                                    type="file"
                                    name={`blDoc`}
                                    accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                    onChange={(e) => onDocumentSelect(e, index)}
                                  />
                                  <button
                                    className={`${styles.upload_btn} btn`}
                                  >
                                    Upload
                                  </button>
                                </div>
                              </>
                            ) : (
                              <div
                                className={`${styles.certificate} text1 d-flex justify-content-between`}
                              >
                                <span>{item.document?.originalName}</span>
                                <img
                                  className={`${styles.close_image} image_arrow`}
                                  src="/static/close.svg"
                                  onClick={(e) =>
                                    handleCloseDoc('item.document', index)
                                  }
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
            );
          })}
          <div className="">
            <UploadOther module="Loading-Transit-Unloading" orderid={orderId} />
            {/* <InspectionDocument
              module="Loading-Transit-Unloading"
              orderId={orderId}
              documentName="IGM Copy"
            /> */}
          </div>
        </div>
        <SaveBar
          handleSave={handleSave}
          rightBtn="Submit"
          rightBtnClick={handleSubmit}
        />
      </div>
    </>
  );
}
