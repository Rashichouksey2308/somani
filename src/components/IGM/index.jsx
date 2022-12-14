/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import SaveBar from '../SaveBar';
import { previewDocument } from '../../redux/ViewDoc/action';
import UploadOther from '../UploadOther';
import DateCalender from '../DateCalender';
import _get from 'lodash/get';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateTransitDetails } from '../../redux/TransitDetails/action';
import { number } from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import { checkNan, convertValue } from '../../utils/helper';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { settingSidebar } from 'redux/breadcrumb/action';
import { getInternalCompanies } from '../../../src/redux/masters/action';
import { handleErrorToast, returnDocFormat } from '@/utils/helpers/global';

export default function Index({ isShipmentTypeBULK, TransitDetails, orderId, docUploadFunction, getUnqueBl }) {
  let transId = _get(TransitDetails, `data[0]`, '');

  const { getInternalCompaniesMasterData } = useSelector((state) => state.MastersData);

  const dispatch = useDispatch();

  const router = useRouter();
  // const shipmentDetail = TransitDetails?.data[0]?.order?.marginMoney?.invoiceDetail;
  // const {consigneeAddress,branchOffice} = shipmentDetail;

  let shipmentTypeBulk =
    _get(TransitDetails, `data[0].order.termsheet.transactionDetails.shipmentType`, '') === 'Bulk' ? true : false;

  const [consigneeName, setConsigneeName] = useState('');
  const [branchOptions, setBranchOptions] = useState([]);
  const [consigneeInfo, setConsigneeInfo] = useState({
    name: '',
    branch: '',
    address: '',
  });

  const [igmList, setIgmList] = useState({
    shipmentType: '',
    shipmentDetails: {
      consigneeName: '',
      consigneeBranch: '',
      consigneeAddress: '',
    },
    igmDetails: [
      {
        vesselName: '',
        igmNumber: '',
        document: null,
        igmFiling: null,
        blNumber: [
          {
            blNumber: number,
            blDate: null,
            blQuantity: '',
            noOfContainers: '',
            blDoc: '',
          },
        ],
      },
    ],
    document: null,
  });

  const getDoc = (payload) => {
    dispatch(
      previewDocument({
        path: payload,
        order: _get(TransitDetails, 'data[0].order._id', ''),
        company: _get(TransitDetails, 'data[0].company._id', ''),
      }),
    );
  };
  const [orderData, setOrderData] = useState();

  useEffect(() => {
    dispatch(getInternalCompanies());
  }, []);

  const checkRemainingBalance = () => {
    let balance = _get(TransitDetails, 'data[0].order.quantity', 0);
    igmList.igmDetails.forEach((item) => {
      item.blNumber.forEach((item2) => {
        balance = Number(balance) - Number(item2.blQuantity == undefined ? 0 : item2.blQuantity);
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

  let blQty;

  const remainingQuantity = (index, item) => {
    let balance = _get(TransitDetails, 'data[0].order.quantity', 0);

    if (index == 0) {
      balance = Number(balance) - Number(item.blNumber[0].blQuantity == undefined ? 0 : item.blNumber[0].blQuantity);
    } else {
      balance = Number(blQty) - Number(item.blNumber[0].blQuantity == undefined ? 0 : item.blNumber[0].blQuantity);
    }
    blQty = balance;
    return balance;
  };

  useEffect(() => {
    let NewArr = [];
    TransitDetails?.data?.forEach((element) => {
      NewArr.push(element);
    });
    setOrderData(NewArr);
  }, [TransitDetails]);

  const partShipmentAllowed = _get(TransitDetails, 'data[0].order.vessel.partShipmentAllowed', 'No');

  const onigmAdd = (index) => {
    let a = index + 1;
    let tempArray = { ...igmList };
    tempArray.igmDetails.push({
      vesselName: _get(TransitDetails, 'data[0].BL.billOfLanding[0].vesselName', '') ?? '',

      igmNumber: '',
      igmFiling: null,
      document: null,
      blNumber: [
        {
          blNumber: '',
          blDate: '',
          quantity: '',
          noOfContainers: '',
          blDoc: '',
        },
      ],
    });
    setIgmList(tempArray);
  };

  const onDeleteClick = (index) => {
    setIgmList({
      ...igmList,
      igmDetails: [...igmList.igmDetails.slice(0, index), ...igmList.igmDetails.slice(index + 1)],
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
    if (name === 'vesselName') {
      newData.igmDetails[index].blNumber = [
        {
          blNumber: number,
          blDate: null,
          blQuantity: '',
          noOfContainers: '',
          blDoc: '',
        },
      ];
    }
    setIgmList(newData);
  };

  const saveDate = (value, name, index) => {
    const d = new Date(value);
    let text = d.toISOString();
    onChangeIgm(name, text, index);
  };

  const onAddBlNumber = (index, index2) => {
    let newIgmList = { ...igmList };

    newIgmList.igmDetails[index].blNumber.push({
      blNumber: number,
      blDate: null,
      quantity: '',
      blDoc: '',
    });
    setIgmList(newIgmList);
  };

  const onRemoveBlNumber = (index, index2) => {
    let tempArray = { ...igmList };
    tempArray.igmDetails[index].blNumber.splice(index2, 1);

    setIgmList(tempArray);
  };

  const onChangeConsignee = (e) => {
    if (e.target.value === 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED') {
      setConsigneeInfo({
        name: 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED',
        branch: '',
        address: '',
      });
      setConsigneeName('INDO GERMAN INTERNATIONAL PRIVATE LIMITED');
      setBranchOptions(filterBranch('INDO GERMAN INTERNATIONAL PRIVATE LIMITED'));
    } else if (e.target.value === 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED') {
      setConsigneeInfo({
        name: 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED',
        branch: '',
        address: '',
      });
      setConsigneeName('EMERGENT INDUSTRIAL SOLUTIONS LIMITED');
      setBranchOptions(filterBranch('EMERGENT INDUSTRIAL SOLUTIONS LIMITED'));
    } else {
      setConsigneeInfo({ name: '', branch: '', address: '' });
      setConsigneeName('');
    }
  };

  const filterBranch = (company) => {
    let filter = getInternalCompaniesMasterData?.filter((val, index) => {
      if (val.Company_Name == company) {
        return val;
      }
    });

    return filter;
  };

  useEffect(() => {
    if (_get(TransitDetails, `data[0].IGM.igmDetails`, []).length > 0) {
      let igmData = JSON.parse(JSON.stringify(_get(TransitDetails, `data[0].IGM.igmDetails`, [])));
      let tempData = { ...igmList };

      tempData.igmDetails = igmData;

      setIgmList(tempData);
    } else {
      if (_get(TransitDetails, `data[0].BL.billOfLanding[0].blNumber`, '') !== '') {
        const filterData = _get(TransitDetails, 'data[0].BL.billOfLanding', []).filter((item) => {
          return item.blNumber === _get(TransitDetails, `data[0].BL.billOfLanding[0].blNumber`, '');
        });

        let tempArray = { ...igmList };
        tempArray.igmDetails[0].blNumber[0].blDate = filterData[0].blDate;
        tempArray.igmDetails[0].blNumber[0].blNumber = filterData[0].blNumber;
        tempArray.igmDetails[0].blNumber[0].blQuantity = filterData[0].blQuantity;
        tempArray.igmDetails[0].blNumber[0].noOfContainers = filterData[0].containerDetails?.numberOfContainers;
        tempArray.igmDetails[0].blNumber[0].blDoc = filterData[0]?.blDoc;

        if (
          shipmentTypeBulk &&
          _get(TransitDetails, `data[0].order.termsheet.transactionDetails.partShipmentAllowed`, '') === 'No'
        ) {
          // let tempObj = {...igmList}
          tempArray.igmDetails[0].vesselName = _get(TransitDetails, 'data[0].BL.billOfLanding[0].vesselName', '');
          // setIgmList(tempArray)
        }
        setIgmList({ ...tempArray });
      }
    }

    if (_get(TransitDetails, `data[0].IGM`, false)) {
      setConsigneeInfo({
        name: _get(TransitDetails, `data[0].IGM.shipmentDetails.consigneeName`, '') || '',
        branch: _get(TransitDetails, `data[0].IGM.shipmentDetails.consigneeBranch`, '') || '',
        address: _get(TransitDetails, `data[0].IGM.shipmentDetails.consigneeAddress`, '') || '',
      });
      setConsigneeName(_get(TransitDetails, `data[0].IGM.shipmentDetails.consigneeName`, '') || '');
      if (
        _get(TransitDetails, `data[0].IGM.shipmentDetails.consigneeName`, '') ==
          'EMERGENT INDUSTRIAL SOLUTIONS LIMITED' ||
        _get(TransitDetails, `data[0].order.termsheet.otherTermsAndConditions.buyer.bank`) ==
          'Emergent Industrial Solutions Limited (EISL)'
      ) {
        setBranchOptions(filterBranch('EMERGENT INDUSTRIAL SOLUTIONS LIMITED'));
      }
      if (
        _get(TransitDetails, `data[0].IGM.shipmentDetails.consigneeName`, '') ==
          'INDO GERMAN INTERNATIONAL PRIVATE LIMITED' ||
        _get(TransitDetails, `data[0].order.termsheet.otherTermsAndConditions.buyer.bank`) ==
          'Indo German International Private Limited (IGPL)'
      ) {
        setBranchOptions(filterBranch('INDO GERMAN INTERNATIONAL PRIVATE LIMITED'));
      }
    } else {
      if (
        _get(TransitDetails, `data[0].IGM.shipmentDetails.consigneeName`, '') ==
          'EMERGENT INDUSTRIAL SOLUTIONS LIMITED' ||
        _get(TransitDetails, `data[0].order.termsheet.otherTermsAndConditions.buyer.bank`) ==
          'Emergent Industrial Solutions Limited (EISL)'
      ) {
        setConsigneeName('EMERGENT INDUSTRIAL SOLUTIONS LIMITED');

        setBranchOptions(filterBranch('EMERGENT INDUSTRIAL SOLUTIONS LIMITED'));
        setConsigneeInfo({
          name: 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED',
          branch:
            TransitDetails?.data[0]?.IGM?.shipmentDetails?.consigneeBranch ||
            TransitDetails?.data[0]?.order?.marginMoney?.invoiceDetail.branchOffice,
          address:
            TransitDetails?.data[0]?.IGM?.shipmentDetails?.consigneeAddress ||
            TransitDetails?.data[0]?.order?.marginMoney?.invoiceDetail?.companyAddress,
        });
      }
      if (
        _get(TransitDetails, `data[0].IGM.shipmentDetails.consigneeName`, '') ==
          'INDO GERMAN INTERNATIONAL PRIVATE LIMITED' ||
        _get(TransitDetails, `data[0].order.termsheet.otherTermsAndConditions.buyer.bank`) ==
          'Indo German International Private Limited (IGPL)'
      ) {
        setConsigneeName('INDO GERMAN INTERNATIONAL PRIVATE LIMITED');
        setBranchOptions(filterBranch('INDO GERMAN INTERNATIONAL PRIVATE LIMITED'));
        setConsigneeInfo({
          name: 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED',
          branch:
            TransitDetails?.data[0]?.IGM?.shipmentDetails?.consigneeBranch ||
            TransitDetails?.data[0].order.marginMoney.invoiceDetail.branchOffice,
          address:
            TransitDetails?.data[0]?.IGM?.shipmentDetails?.consigneeAddress ||
            TransitDetails?.data[0].order.marginMoney.invoiceDetail.companyAddress,
        });
      }
    }
    setBranchOptions(filterBranch(consigneeName));
  }, [TransitDetails]);

  useEffect(() => {}, [TransitDetails]);

  useEffect(() => {
    setBranchOptions(filterBranch(consigneeName));
  }, [consigneeName, TransitDetails, getInternalCompaniesMasterData]);

  const onChangeBlDropDown = (e) => {
    const text = e.target.value;
    let [value, index, index2] = text?.split('-');
    if (value) {
      const filterData = _get(TransitDetails, 'data[0].BL.billOfLanding', []).filter((item) => {
        return item.blNumber === value;
      });

      let tempArray = { ...igmList };
      tempArray.igmDetails[index].blNumber[index2].blDoc = filterData[0].blDoc;
      tempArray.igmDetails[index].blNumber[index2].blDate = filterData[0].blDate;
      tempArray.igmDetails[index].blNumber[index2].blNumber = filterData[0].blNumber;
      tempArray.igmDetails[index].blNumber[index2].blQuantity = filterData[0].blQuantity;
      tempArray.igmDetails[index].blNumber[index2].noOfContainers = filterData[0].containerDetails?.numberOfContainers;
      setIgmList({ ...tempArray });
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
    igmDetails.shipmentType = _get(TransitDetails, `data[0].order.vessel.vessels[0].shipmentType`, '');
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

  const validation = () => {
    if (checkRemainingBalance() < 0) {
      handleErrorToast('igm cannot be greater than order quantity');
      return false;
    }
    let toastMessage = '';
    for (let i = 0; i < igmList.igmDetails.length; i++) {
      if (
        igmList.igmDetails[i].igmNumber == '' ||
        igmList.igmDetails[i].igmNumber == undefined ||
        igmList.igmDetails[i].igmNumber == null
      ) {
        toastMessage = 'PLS ADD IGM NUMBER';
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage });
        }
        return false;
      }
      if (
        igmList.igmDetails[i].igmFiling == '' ||
        igmList.igmDetails[i].igmFiling == undefined ||
        igmList.igmDetails[i].igmFiling == null
      ) {
        toastMessage = 'PLS ADD IMG FILING DATE ';
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage });
        }
        return false;
      }
      for (let j = 0; j < igmList.igmDetails[i].blNumber.length; j++) {
        if (
          igmList.igmDetails[i].blNumber[j].blNumber == '' ||
          igmList.igmDetails[i].blNumber[j].blNumber == undefined ||
          igmList.igmDetails[i].blNumber[j].blNumber == null
        ) {
          toastMessage = 'PLS SELECT BL NUMBER ';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return false;
        }
        if (
          igmList.igmDetails[i].blNumber[j].blDate == '' ||
          igmList.igmDetails[i].blNumber[j].blDate == undefined ||
          igmList.igmDetails[i].blNumber[j].blDate == null
        ) {
          toastMessage = 'PLS SELECT BL NUMBER ';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return false;
        }
        if (
          igmList.igmDetails[i].blNumber[j].blQuantity == '' ||
          igmList.igmDetails[i].blNumber[j].blQuantity == undefined ||
          igmList.igmDetails[i].blNumber[j].blQuantity == null
        ) {
          toastMessage = 'PLS SELECT BL NUMBER ';
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage });
          }
          return false;
        }
        // if (
        //   igmList.igmDetails[i].blNumber[j].noOfContainers == '' ||
        //   igmList.igmDetails[i].blNumber[j].noOfContainers == undefined ||
        //   igmList.igmDetails[i].blNumber[j].noOfContainers == null
        // ) {
        //   toastMessage = 'PLS ADD NUMBER OF CONTAINERS ';
        //   if (!toast.isActive(toastMessage)) {
        //     toast.error(toastMessage, { toastId: toastMessage });
        //   }
        //   return false;
        // }
      }
      if (
        igmList.igmDetails[i].document == '' ||
        igmList.igmDetails[i].document == undefined ||
        igmList.igmDetails[i].document == null
      ) {
        toastMessage = 'PLS UPLOAD IGM COPY';
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage });
        }
        return false;
      }
      return true;
    }
  };

  const handleSubmit = async () => {
    if (consigneeInfo.name == '' || consigneeInfo.name == undefined || consigneeInfo.name == null) {
      let toastMessage = 'PLS ADD CONSIGNEE NAME';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
      return;
    }
    if (consigneeInfo.branch == '' || consigneeInfo.branch == undefined || consigneeInfo.branch == null) {
      let toastMessage = 'PLS ADD CONSIGNEE BRANCH';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
      return;
    }
    if (validation() == false) {
      return;
    }

    const igmDetails = { ...igmList };
    igmDetails.shipmentType = _get(TransitDetails, `data[0].order.vessel.vessels[0].shipmentType`, '');
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
      sessionStorage.setItem('orderID', _get(TransitDetails, 'order._id', ''));

      dispatch(settingSidebar('Loading, Transit & Unloadinge', 'Forward Hedging', 'Forward Hedging', '3'));
      router.push(`/forward-hedging`);
    }
  };

  const getIndex = (index) => {
    return (index = index + 1);
  };

  const isBlSelected = (index, blnumber) => {
    const filterData = _get(igmList, `igmDetails[${index}].blNumber`, []).filter((item) => {
      return item.blNumber === blnumber;
    });
    if (filterData.length > 0) return true;
    return false;
  };

  const getStartingIGmFillingDate = () => {
    var d = new Date();
    return moment(d.setDate(d.getDate() - 15)).format('DD-MM-YYYY');
  };

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
                      checked={shipmentTypeBulk}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Liner"
                      name="group11"
                      disabled={shipmentTypeBulk}
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
                  <span className={styles.value}>{_get(TransitDetails, 'data[0].order.commodity', '')}</span>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    BL Quantity <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {_get(TransitDetails, 'data[0].order.quantity', '')?.toLocaleString('en-IN')}
                    {'  '}
                    {_get(TransitDetails, 'data[0].order.unitOfQuantity', '').toUpperCase('en-IN')}{' '}
                  </span>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Order Value <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    {convertValue(
                      _get(TransitDetails, 'data[0].order.marginMoney.calculation.orderValueInINR', ''),
                    ).toLocaleString('en-IN', {
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
                    Country Of Origin <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {_get(TransitDetails, 'data[0].order.vessel.vessels[0].transitDetails.countryOfOrigin', '')}
                  </span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Port Of Loading <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {_get(TransitDetails, 'data[0].order.vessel.vessels[0].transitDetails.portOfLoading', '')}
                  </span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                  <div className={`${styles.label} text`}>
                    Port of Discharge <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    {_get(TransitDetails, 'data[0].order.vessel.vessels[0].transitDetails.portOfDischarge', '')}, India
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
                      <option value="INDO GERMAN INTERNATIONAL PRIVATE LIMITED">
                        INDO GERMAN INTERNATIONAL PRIVATE LIMITED
                      </option>
                      <option value="EMERGENT INDUSTRIAL SOLUTIONS LIMITED">
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
                <div className={`${styles.form_group} col-lg-4 col-md-6 `}>
                  <div className="d-flex">
                    <select
                      onChange={(e) => {
                        let filter = getInternalCompaniesMasterData?.filter((val, index) => {
                          if (val?.keyAddresses[0]?.Branch == e.target.value && val.Company_Name == consigneeName) {
                            return val;
                          }
                        });

                        setConsigneeInfo({
                          name: consigneeName,
                          branch: e.target.value,
                          address: filter[0]?.keyAddresses[0].fullAddress || '',
                        });
                      }}
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      value={consigneeInfo.branch}
                    >
                      <option value="">Select an option</option>

                      {branchOptions?.length > 0 &&
                        [...new Set(branchOptions.map((item) => item.keyAddresses[0].Branch))]
                          .filter((val, index) => {
                            if (val !== undefined) {
                              return val;
                            }
                          })
                          .map((val, index) => {
                            return <option value={`${val}`}>{val}</option>;
                          })}
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Consignee Branch<strong className="text-danger">*</strong>
                    </label>
                    <img
                      className={`${styles.arrow} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 " style={{ marginTop: '35px' }}>
                  <div className={`${styles.label} text`}>
                    Consignee Address<strong className="text-danger">*</strong>{' '}
                  </div>
                  <span className={styles.value}>{consigneeInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
          {igmList?.igmDetails?.map((item, index) => {
            return (
              <div key={index} className={`${styles.main} vessel_card card border_color`}>
                <div
                  className={`${styles.head_container} card-header align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
                >
                  <h3 className={`${styles.heading} mb-0`}>IGM {getIndex(index)}</h3>
                  <div className="d-flex align-items-center">
                    <div className={`${styles.label} text`}>Balance Quantity:</div>
                    <div className={`${styles.value} ml-2 mr-4`}>
                      {checkNan(remainingQuantity(index, item))}{' '}
                      {_get(TransitDetails, 'data[0].order.unitOfQuantity', '')}{' '}
                    </div>
                    {checkRemainingBalance() !== 0 ? (
                      <>
                        <button
                          onClick={() => onigmAdd(index)}
                          className={styles.add_btn}
                          style={{ paddingBottom: '10px' }}
                        >
                          <span className={styles.add_sign}>+</span>Add
                        </button>
                      </>
                    ) : null}

                    {index > 0 ? (
                      <button
                        onClick={() => onDeleteClick(index)}
                        className={`${styles.add_btn} mt-2 border-danger text-danger`}
                      >
                        <img src="/static/delete.svg" className="ml-1 mt-n1" width={13} alt="delete" /> Delete
                      </button>
                    ) : null}
                  </div>
                </div>
                <div className={`${styles.dashboard_form} card-body`}>
                  <div className="row">
                    {shipmentTypeBulk &&
                    _get(TransitDetails, `data[0].order.termsheet.transactionDetails.partShipmentAllowed`, '') ===
                      'No' ? (
                      <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                        <input
                          value={
                            index == 0
                              ? _get(TransitDetails, 'data[0].BL.billOfLanding[0].vesselName', '')
                              : item.vesselName
                          }
                          id="vesselName"
                          // onChange={(e) => onChangeIgm(e.target.id, e.target.value, index)}
                          className={`${styles.input_field} input form-control`}
                          type="text"
                          onWheel={(event) => event.currentTarget.blur()}
                          onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                        />
                        <label className={`${styles.label_heading} label_heading`}>
                          Vessel Name
                          <strong className="text-danger">*</strong>
                        </label>
                      </div>
                    ) : (
                      <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                        <div className="d-flex">
                          <select
                            id="vesselName"
                            onChange={(e) => onChangeIgm(e.target.id, e.target.value, index)}
                            className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                            value={item.vesselName}
                            disabled={
                              _get(TransitDetails, `data[0].order.termsheet.transactionDetails.shipmentType`, '') ===
                                'Bulk' &&
                              _get(
                                TransitDetails,
                                `data[0].order.termsheet.transactionDetails.partShipmentAllowed`,
                                '',
                              ) === 'No'
                            }
                          >
                            {/* {shipmentTypeBulk
                            ? _get(TransitDetails, 'data[0].order.vessel.vessels', []).map((vessel, index) => (
                                <option value={vessel?.vesselInformation[0]?.name} key={index}>
                                  {vessel?.vesselInformation[0]?.name}
                                </option>
                              ))
                            : _get(TransitDetails, 'data[0].order.vessel.vessels[0].vesselInformation', []).map(
                                (vessel, index) => (
                                  <option value={vessel?.name} key={index}>
                                    {vessel?.name}
                                  </option>
                                ),
                              )} */}
                            <option disabled value="">
                              Select An Option
                            </option>
                            {getUnqueBl().map((bl, index) => (
                              <option value={bl} key={index}>
                                {bl}
                              </option>
                            ))}
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
                    )}

                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                      <input
                        value={item.igmNumber}
                        id="igmNumber"
                        onChange={(e) => onChangeIgm(e.target.id, e.target.value, index)}
                        className={`${styles.input_field} input form-control`}
                        type="number"
                        onWheel={(event) => event.currentTarget.blur()}
                        onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        IGM No./Rotation No.
                        <strong className="text-danger">*</strong>
                      </label>
                    </div>

                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                      <div className="d-flex">
                        <DateCalender
                          index={index}
                          selected={item.igmFiling == null ? '' : moment(item.igmFiling)}
                          defaultDate={item.igmFiling}
                          name="igmFiling"
                          saveDate={saveDate}
                          labelName="IGM Filing Date"
                          startFrom={getStartingIGmFillingDate()}
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
                    {item?.blNumber?.length > 0 &&
                      item.blNumber.map((blEntry, index2) => {
                        return (
                          <>
                            <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
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
                                  <option value="select an option">Select an option</option>
                                  {_get(TransitDetails, 'data[0].BL.billOfLanding', []).map((bl, index3) => {
                                    if (bl.vesselName === item.vesselName) {
                                      return (
                                        <option
                                          key={index3}
                                          disabled={isBlSelected(index, bl.blNumber)}
                                          value={`${bl.blNumber}-${index}-${index2}`}
                                        >
                                          {bl.blNumber}
                                        </option>
                                      );
                                    }
                                  })}
                                </select>

                                <label className={`${styles.label_heading} label_heading`}>
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
                                <div className="col-lg-4 col-md-6 col-sm-6 align-self-center">
                                  <div className={`${styles.label} text`}>
                                    BL Date <strong className="text-danger ml-n1">*</strong>
                                  </div>
                                  <span className={styles.value}>
                                    {blEntry?.blDate ? moment(blEntry?.blDate).format('DD-MM-YYYY') : ''}
                                  </span>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 align-self-center">
                                  <div className={`${styles.label} text`}>
                                    BL Quantity <strong className="text-danger ml-n1">*</strong>
                                  </div>
                                  <span className={styles.value}>
                                    <span>{blEntry.blQuantity} </span>{' '}
                                    {_get(TransitDetails, 'data[0].order.unitOfQuantity', '').toUpperCase()}{' '}
                                  </span>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 align-self-center">
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="/static/preview.svg"
                                      className={`${styles.previewImg} ml-n4`}
                                      alt="Preview"
                                      onClick={(e) => {
                                        getDoc(blEntry?.blDoc?.path);
                                      }}
                                    />
                                    {item.blNumber.length >= index2 ? (
                                      <img
                                        onClick={() => onAddBlNumber(index, index2)}
                                        src="/static/add-btn.svg"
                                        className={`${styles.delete_image} ml-5`}
                                        alt="Add"
                                      />
                                    ) : null}
                                    {item.blNumber.length > 1 ? (
                                      <img
                                        onClick={() => onRemoveBlNumber(index, index2)}
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
                                <div className="col-lg-4 col-md-6 col-sm-6 align-self-center">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className={`${styles.label} text`}>
                                        BL Date <strong className="text-danger ml-n1">*</strong>
                                      </div>
                                      <span className={styles.value}>
                                        {blEntry?.blDate ? moment(blEntry?.blDate).format('DD-MM-YYYY') : ''}
                                      </span>
                                    </div>
                                    <div className="col-md-6">
                                      <div className={`${styles.label} text`}>
                                        No. of Containers <strong className="text-danger ml-n1">*</strong>
                                      </div>
                                      <span className={styles.value}>{blEntry?.noOfContainers}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 align-self-center">
                                  <div className="row align-items-center">
                                    <div className="col-md-6">
                                      <div className={`${styles.label} text`}>
                                        BL Quantity <strong className="text-danger ml-n1">*</strong>
                                      </div>
                                      <span className={styles.value}>
                                        <span>{blEntry?.blQuantity}</span>{' '}
                                        {blEntry?.blQuantity &&
                                          _get(TransitDetails, 'data[0].order.unitOfQuantity', '').toUpperCase()}
                                      </span>
                                    </div>
                                    <div className="col-md-6">
                                      <img
                                        src="/static/preview.svg"
                                        className={`${styles.previewImg} ml-n4`}
                                        alt="Preview"
                                        onClick={(e) => {
                                          getDoc(blEntry?.blDoc?.path);
                                        }}
                                      />
                                      {item.blNumber.length >= index2 ? (
                                        <img
                                          onClick={() => onAddBlNumber(index, index2)}
                                          src="/static/add-btn.svg"
                                          className={`${styles.delete_image} ml-5`}
                                          alt="Add"
                                        />
                                      ) : null}
                                      {index2 > 0 ? (
                                        <img
                                          onClick={() => onRemoveBlNumber(index, index2)}
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
                    <table className={`${styles.table} table my-0`} cellPadding="0" cellSpacing="0" border="0">
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
                          <td>{returnDocFormat(item?.document?.originalName)}</td>
                          <td className={styles.doc_row}>
                            {item?.document ? moment(item?.document?.Date).format(' DD-MM-YYYY , h:mm a') : ''}
                          </td>
                          <td>
                            {item.document === null || !item.document ? (
                              <>
                                <div className={styles.uploadBtnWrapper}>
                                  <input
                                    type="file"
                                    name={`blDoc`}
                                    accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                    onChange={(e) => onDocumentSelect(e, index)}
                                  />
                                  <button className={`${styles.upload_btn} btn`}>Upload</button>
                                </div>
                              </>
                            ) : (
                              <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                <span>{item.document?.originalName}</span>
                                <img
                                  className={`${styles.close_image} image_arrow`}
                                  src="/static/close.svg"
                                  onClick={(e) => handleCloseDoc('item.document', index)}
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
            <UploadOther
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
              orderid={orderId}
            />
            {/* <InspectionDocument
              module="Loading-Transit-Unloading"
              orderId={orderId}
              documentName="IGM Copy"
            /> */}
          </div>
        </div>
        <SaveBar handleSave={handleSave} rightBtn="Submit" rightBtnClick={handleSubmit} />
      </div>
    </>
  );
}
