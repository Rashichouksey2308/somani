/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Vessels from '../../src/components/Vessel';

import _get from 'lodash/get';
import VesselSaveBar from '../../src/components/VesselSaveBar';
import { settingSidebar } from 'redux/breadcrumb/action';
import { useDispatch, useSelector } from 'react-redux';
import { GetVessel, UpdateVessel } from '../../src/redux/vessel/action';
//Api
import API from '../../src/utils/endpoints';
import Cookies from 'js-cookie';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { setDynamicName, setDynamicOrder, setPageName } from '../../src/redux/userData/action';
import { removePrefixOrSuffix } from 'utils/helper';
import moment from 'moment';
import { useRouter } from 'next/router';
import { getCountries, getPorts } from '../../src/redux/masters/action';

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { Vessel1 } = useSelector((state) => state.vessel);

  let id = sessionStorage.getItem('VesselId');
  useEffect(() => {
    fetchInitialData();
  }, []);
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getPorts());
  }, []);

  const { getPortsMasterData } = useSelector((state) => state.MastersData);
  const { getCountriesMasterData } = useSelector((state) => state.MastersData);

  const fetchInitialData = async () => {
    let id = sessionStorage.getItem('VesselId');
    const data = await dispatch(GetVessel(`?vesselId=${id}`));

    setData(data);
    serVesselDataToAdd(data);
    dispatch(setPageName('vessel'));
    dispatch(setDynamicName(_get(data, 'data[0].company.companyName', 'Company Name')));
    dispatch(setDynamicOrder(_get(data, 'data[0].order.orderId', 'Order Id')));
  };

  const [list, setList] = useState([]);
  const [containerExcel, setContainerExcel] = useState(null);
  const [vesselCertificate, setVesselCertificate] = useState({});
  const [containerListDocument, setContainerListDocument] = useState(null);
  const [partShipmentAllowed, setPartShipmentAllowed] = useState(partShipment);
  const [companyName, setCompanyName] = useState('');
  const [vesselUpdatedAt, setVesselUpdatedAt] = useState('');
  const [partShipment, setPartshipment] = useState();
  const [currency, setCurrency] = useState('USD');
  const [VesselToAdd, serVesselDataToAdd] = useState();
  const [shipmentTypeBulk, setShipmentTypeBulk] = useState('Bulk');
  const [vesselData, setVesselData] = useState();
  const [orderID, setOrderId] = useState('');
  const [isFieldInFocus, setIsFieldInFocus] = useState([{ value: false }]);

  const setData = (Vessel) => {
    setOrderId(_get(Vessel, 'data[0].order._id', ''));

    setCurrency(_get(Vessel, 'data[0].order.marginMoney.calculation.orderValueCurrency', 'USD'));
    setVesselUpdatedAt(_get(Vessel, 'data[0].updatedAt', false));
    setVesselData(Vessel);
    setPartShipmentAllowed(_get(Vessel, 'data[0].order.termsheet.transactionDetails.partShipmentAllowed', 'No'));
    if (_get(Vessel, 'data[0].vessels', []).length > 0) {
      let temp = [];
      list.forEach((val, index) => {
        temp.push({ value: false });
      });

      setIsFieldInFocus([...temp]);
    }
    setCompanyName(_get(Vessel, 'data[0].company.companyName', ''));
    if (_get(Vessel, 'data[0].vessels', []).length <= 1) {
      setShipmentTypeBulk(_get(Vessel, 'data[0].order.termsheet.transactionDetails.shipmentType', 'Bulk'));
      let vesselInfo = JSON.parse(
        JSON.stringify(
          _get(Vessel, 'data[0].vessels[0].vesselInformation', [
            {
              isVesselInsured: false,
              name: _get(Vessel, 'data[0].order.generic.shippingLine.vesselName', ''),
              IMONumber: '',
              flag: '',
              yearOfBuilt: '',
              shippingLineOrCharter: _get(Vessel, 'data[0].order.generic.shippingLine.name', ''),
            },
          ]),
        ),
      );

      vesselInfo[0].shippingLineOrCharter =
        vesselInfo[0].shippingLineOrCharter !== ''
          ? vesselInfo[0].shippingLineOrCharter
          : _get(Vessel, 'data[0].order.generic.shippingLine.name', '');
      vesselInfo[0].name =
        vesselInfo[0].name !== ''
          ? vesselInfo[0].name
          : _get(Vessel, 'data[0].order.generic.shippingLine.vesselName', '');

      setContainerExcel(_get(Vessel, 'data[0].containerExcel', null));
      setContainerListDocument(_get(Vessel, 'data[0].containerListDocument', null));
      setVesselCertificate(_get(Vessel, 'data[0].vesselCertificate', null));
      setList([
        {
          shipmentType: _get(Vessel, 'data[0].order.termsheet.transactionDetails.shipmentType', ''),
          commodity: _get(Vessel, 'data[0].order.commodity', ''),
          quantity: _get(Vessel, 'data[0].order.quantity', ''),
          orderCurrency: _get(Vessel, 'data[0].order.orderCurrency', ''),
          orderValue: _get(Vessel, 'data[0].order.marginMoney.calculation.orderValue', ''),
          transitDetails: {
            countryOfOrigin:
              _get(Vessel, 'data[0].vessels[0].transitDetails.countryOfOrigin', '') !== ''
                ? _get(Vessel, 'data[0].vessels[0].transitDetails.countryOfOrigin', '')
                : _get(Vessel, 'data[0].order.countryOfOrigin', ''),
            portOfLoading:
              '' || _get(Vessel, 'data[0].vessels[0].transitDetails.portOfLoading', '') !== ''
                ? _get(Vessel, 'data[0].vessels[0].transitDetails.portOfLoading', '')
                : _get(Vessel, 'data[0].order.termsheet.transactionDetails.loadPort', ''),
            portOfDischarge:
              _get(Vessel, 'data[0].vessels[0].transitDetails.portOfDischarge', '') !== ''
                ? _get(Vessel, 'data[0].vessels[0].transitDetails.portOfDischarge', '')
                : _get(Vessel, 'data[0].order.termsheet.transactionDetails.portOfDischarge', '') ||
                  _get(Vessel, 'data[0].vessels[0].transitDetails.portOfDischarge', ''),
            laycanFrom:
              _get(Vessel, 'data[0].vessels[0].transitDetails.laycanFrom', '') !== ''
                ? _get(Vessel, 'data[0].vessels[0].transitDetails.laycanFrom', '')
                : _get(Vessel, 'data[0].order.shipmentDetail.loadPort.fromDate', '') || '',
            laycanTo:
              _get(Vessel, 'data[0].vessels[0].transitDetails.laycanTo', '') !== ''
                ? _get(Vessel, 'data[0].vessels[0].transitDetails.laycanTo', '')
                : _get(Vessel, 'data[0].order.shipmentDetail.loadPort.toDate', '') || '',
          
            EDTatLoadPort:
              '' || _get(Vessel, 'data[0].vessels[0].transitDetails.EDTatLoadPort', '') !== ''
                ? _get(Vessel, 'data[0].vessels[0].transitDetails.EDTatLoadPort', '')
                : _get(Vessel, 'data[0].order.shipmentDetail.ETAofDischarge.toDate', ''),
            ETAatDischargePort: _get(Vessel, 'data[0].vessels[0].transitDetails.ETAatDischargePort', ''),
           
          },
          shippingInformation: {
            shippingLineOrCharter:
              _get(Vessel, 'data[0].vessels[0].shippingInformation.shippingLineOrCharter', '') !== ''
                ? _get(Vessel, 'data[0].vessels[0].shippingInformation.shippingLineOrCharter', '')
                : _get(Vessel, 'data[0].order.generic.shippingLine.name', ''),
            numberOfContainers: _get(Vessel, 'data[0].vessels[0].shippingInformation.numberOfContainers', ''),
            freeDetentionPeriod: _get(Vessel, 'data[0].vessels[0].shippingInformation.freeDetentionPeriod', ''),
          },

          vesselInformation: vesselInfo,
        },
      ]);
    } else {
      setList(_get(Vessel, 'data[0].vessels', []));
    }
   
  };

  const onAddVessel = () => {
    setList([
      ...list,
      {
        shipmentType: 'Bulk',
        commodity: _get(VesselToAdd, 'data[0].order.commodity', ''),
        quantity: _get(VesselToAdd, 'data[0].order.quantity', ''),
        orderValue: _get(VesselToAdd, 'data[0].order.orderValue', ''),
        transitDetails: {
          countryOfOrigin: _get(VesselToAdd, 'data[0].order.countryOfOrigin', ''),
          portOfLoading: '',
          portOfDischarge: _get(VesselToAdd, 'data[0].order.portOfDischarge', ''),
          laycanFrom: null,
          laycanTo: null,
          EDTatLoadPort: null,
          ETAatDischargePort: null,
        },

        vesselInformation: [
          {
            name: '',
            IMONumber: '',
            flag: '',
            yearOfBuilt: null,
            shippingLineOrCharter: '',
          },
        ],
      },
    ]);
    setIsFieldInFocus([...isFieldInFocus, { value: false }]);
  };

  const OnAddvesselInformation = () => {
    const newArr = [...list];
    newArr[0].vesselInformation.push({
      name: '',
      IMONumber: '',
      flag: '',
      yearOfBuilt: '',
    });

    setList(newArr);
  };

  const [startDate, setStartDate] = useState(null);
  const [lastDate, setlastDate] = useState(new Date());

  const shipmentTypeChangeHandler = (e, index) => {
    if (e.target.value === 'Liner') {
      setList((prevState) => prevState.slice(0, 1));
    }
    setShipmentTypeBulk(e.target.value);
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, shipmentType: e.target.value };
        }
        return obj;
      });
      return newState;
    });
  };

  const OnVesselBasicFieldsChangeHandler = (e, index) => {
    const name = e.target.id;
    const value = e.target.value;
    if (name === 'quantity') {
      if (removePrefixOrSuffix(value) > _get(vesselData, 'data[0].order.quantity', 0)) {
        let toastMessage = 'Quantity Cannot Exceed orignal Order QUantity';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
      }
    }
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, [name]: value };
        }
        return obj;
      });
      return newState;
    });
  };
  const OnVesselTransitFieldsChangeHandler = (e, index) => {
    const name = e.target.id;
    const value = e.target.value;

    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            transitDetails: {
              ...obj.transitDetails,
              [name]: value,
            },
          };
        }
        return obj;
      });
      return newState;
    });
  };
  const [dateStartFrom, setDateStartFrom] = useState([]);
  useEffect(() => {
    if (_get(vesselData, 'data[0].vessels', []).length > 0) {
      let temp = [];
      _get(vesselData, 'data[0].vessels', []).forEach((val) => {
        temp.push(moment(new Date(val.transitDetails.laycanFrom).toISOString()).add(1, 'days').format('DD-MM-YYYY'));
      });
      setDateStartFrom(temp);
    }
  }, [vesselData]);

  const saveDate = (startDate, name, index) => {
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            transitDetails: {
              ...obj.transitDetails,
              [name]: startDate,
            },
          };
        }
        return obj;
      });
      return newState;
    });
    if (name == 'laycanFrom') setStartDate2(startDate, index);
  };
  const setStartDate2 = (val, index) => {
    var new_date = moment(new Date(val).toISOString()).add(1, 'days').format('DD-MM-YYYY');
    let temp = [...dateStartFrom];
    temp[index] = new_date;
    setDateStartFrom([...temp]);
  };

  const onVesselInfoChangeHandlerForBulk = (e, index) => {
    const name = e.target.id;
    let value = e.target.value;

     
      let array = { ...list[index].vesselInformation[0], [name]: value };

      setList((prevState) => {
        const newState = prevState.map((obj, i) => {
          if (i == index) {
            return {
              ...obj,
              vesselInformation: [array],
            };
          }
          return obj;
        });
        return newState;
      });
    
  };

  const onVesselInfoChangeHandlerForLiner = (e, index) => {
    const name = e.target.id;
    let value = e.target.value;

    let tempArr = [...list];
    tempArr[0].vesselInformation.forEach((val, i) => {
      if (i == index) {
        val[name] = value;
      }
    });
    setList(tempArr);
  };
  const setOnFocus = (index) => {
    let temp = [...isFieldInFocus];
    temp.forEach((val, i) => {
      if (i == index) {
        val.value = true;
      }
    });
    setIsFieldInFocus([...temp]);
  };
  const setOnBlur = (index) => {
    let temp = [...isFieldInFocus];
    temp.forEach((val, i) => {
      if (i == index) {
        val.value = false;
      }
    });
    setIsFieldInFocus([...temp]);
  };

  const uploadDocHandler = async (e) => {
    let uploadDocType = e.target.id;

    let fd = new FormData();
    fd.append('document', e.target.files[0]);

    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    let headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
    try {
      let response = await Axios.post(`${API.corebaseUrl}${API.uploadDocVessel}`, fd, {
        headers: headers,
      });
      if (response.data.code === 200) {
        if (uploadDocType == 'containerExcel') {
          setContainerExcel(response.data.data);
        }
        if (uploadDocType === 'Vessel Certificate') {
          setVesselCertificate(response.data.data);
        }
        if (uploadDocType === 'Container List') {
          setContainerListDocument(response.data.data);
        }
      } else {
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
      }
    } catch (error) {
      let toastMessage = 'COULD NOT UPLOAD Vessel Data AT THIS TIME';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    }
  };

  const shippingInfoChangeHandler = (e, index) => {
    const name = e.target.id;
    const value = e.target.value;
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            shippingInformation: {
              ...obj.shippingInformation,
              [name]: value,
            },
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

    for (let i = 0; i < list.length; i++) {
      if (list[i].shipmentType == '' || list[i].shipmentType == undefined) {
        toastMessage = `Please Select shipment Type of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (list[i].commodity == '' || list[i].commodity == undefined) {
        toastMessage = `Please add commodity of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (list[i].quantity == '' || list[i].quantity == undefined) {
        toastMessage = `Please add quantity of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (list[i].orderValue == '' || list[i].orderValue == undefined) {
        toastMessage = `Please add order Value of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (list[i].transitDetails.countryOfOrigin == '' || list[i].transitDetails.countryOfOrigin == undefined) {
        toastMessage = `Please select country Of Origin of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (list[i].transitDetails.portOfLoading == '' || list[i].transitDetails.portOfLoading == undefined) {
        toastMessage = `Please select port Of Loading of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (list[i].transitDetails.portOfDischarge == '' || list[i].transitDetails.portOfDischarge == undefined) {
        toastMessage = `Please select port Of Discharge of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (list[i].transitDetails.portOfDischarge == '' || list[i].transitDetails.portOfDischarge == undefined) {
        toastMessage = `Please select port Of Discharge of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (list[i].transitDetails.laycanFrom == '' || list[i].transitDetails.laycanFrom == undefined) {
        toastMessage = `Please add laycan From of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (list[i].transitDetails.laycanTo == '' || list[i].transitDetails.laycanTo == undefined) {
        toastMessage = `Please add laycan to of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (list[i].transitDetails.EDTatLoadPort == '' || list[i].transitDetails.EDTatLoadPort == undefined) {
        toastMessage = `Please add EDT at Load Port to of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (list[i].transitDetails.ETAatDischargePort == '' || list[i].transitDetails.ETAatDischargePort == undefined) {
        toastMessage = `Please add EDT at dischargePort to of Vessel Information ${i}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (list[i].shipmentType == 'Bulk') {
        if (list[i].vesselInformation[0].name == '' || list[i].vesselInformation[0].name == undefined) {
          toastMessage = `Please add vessel name  of Vessel Information ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }

        if (list[i].vesselInformation[0].IMONumber == '' || list[i].vesselInformation[0].IMONumber == undefined) {
          toastMessage = `Please add IMO Number  of Vessel Information ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }

        if (list[i].vesselInformation[0].IMONumber.length !== 7) {
          toastMessage = `Please add valid IMO Number  of Vessel Information ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (list[i].vesselInformation[0].flag == '' || list[i].vesselInformation[0].flag == undefined) {
          toastMessage = `Please add IMO Number  of Vessel Information ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }

        if (
          list[i].vesselInformation[0].yearOfBuilt == '' ||
          list[i].vesselInformation[0].yearOfBuilt == undefined ||
          list[i].vesselInformation[0].yearOfBuilt == null ||
          list[i].vesselInformation[0].yearOfBuilt.length !== 4
        ) {
          toastMessage = `Please add a valid year Of Built  of Vessel Information ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (
          list[i]?.vesselInformation[0]?.shippingLineOrCharter == '' ||
          list[i]?.vesselInformation[0]?.shippingLineOrCharter == undefined
        ) {
          toastMessage = `Please add shipping Line Or Charter  of Vessel Information ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
      } else {
        if (
          list[i]?.shippingInformation?.shippingLineOrCharter == '' ||
          list[i]?.shippingInformation?.shippingLineOrCharter == undefined
        ) {
          toastMessage = `Please add shipping Line Or Charter  of Vessel Information ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }
        if (
          list[i]?.shippingInformation?.numberOfContainers == '' ||
          list[i]?.shippingInformation?.numberOfContainers == undefined
        ) {
          toastMessage = `Please add number Of Containers  of Vessel Information ${i}  `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
            break;
          }
        }

        if (!containerExcel) {
          toastMessage = `please upload container Excel`;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
          }
        }

        if (!containerListDocument) {
          toastMessage = `please upload container List Document`;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            isOk = false;
          }
        }
      }
    }

    if (!vesselCertificate) {
      toastMessage = `please upload vessel certificate`;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        isOk = false;
      }
    }

    return isOk;
  };

  const onSubmitHanler = async () => {
    if (validation()) {
      const payload = {
        vesselId: id,
        partShipmentAllowed: partShipmentAllowed,
        vessels: [...list],
      };
      if (containerListDocument) {
        payload.containerListDocument = containerListDocument;
      }
      if (vesselCertificate) {
        payload.vesselCertificate = vesselCertificate;
      }
      if (containerExcel) {
        payload.containerExcel = containerExcel;
      }

      let data = await dispatch(UpdateVessel(payload));
      if (data == 200) {
        let toastMessage = 'VESSEL UPDATED SUCCESSFULLY';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        await fetchInitialData();
        dispatch(settingSidebar('Agreement & LC Module', 'Insurance', 'Insurance', '2'));
        router.push(`/insurance/form`);
      }
    }
  };

  const onDeleteVessel = (index) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };
  const OnAddvesselInformationDelete = (index) => {
    let tempArr = [...list];
    tempArr[0].vesselInformation.splice(index, 1);

    setList(tempArr);
  };

  const onSaveHandler = async () => {
    const payload = {
      vesselId: id,
      partShipmentAllowed: partShipmentAllowed,
      vessels: [...list],
    };
    if (containerListDocument) {
      payload.containerListDocument = containerListDocument;
    }
    if (vesselCertificate) {
      payload.vesselCertificate = vesselCertificate;
    }
    if (containerExcel) {
      payload.containerExcel = containerExcel;
    }

    await dispatch(UpdateVessel(payload));

    let toastMessage = `Vessel DATA SAVED`;
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
  };
  const handleExcelClose = () => {
    setContainerExcel(null);
  };
  return (
    <>
      <Vessels
        vesselData={vesselData}
        vesselUpdatedAt={vesselUpdatedAt}
        containerExcel={containerExcel}
        vesselCertificate={vesselCertificate}
        setVesselCertificate={setVesselCertificate}
        setContainerListDocument={setContainerListDocument}
        containerListDocument={containerListDocument}
        partShipmentAllowed={partShipmentAllowed}
        setPartShipmentAllowed={setPartShipmentAllowed}
        id1={orderID}
    
        list={list}
        companyName={companyName}
        onAddVessel={onAddVessel}
        OnAddvesselInformation={OnAddvesselInformation}
        startDate={startDate}
        setStartDate={setStartDate}
        lastDate={lastDate}
        setlastDate={setlastDate}
        shipmentTypeChangeHandler={shipmentTypeChangeHandler}
        OnVesselBasicFieldsChangeHandler={OnVesselBasicFieldsChangeHandler}
        OnVesselTransitFieldsChangeHandler={OnVesselTransitFieldsChangeHandler}
        saveDate={saveDate}
        onVesselInfoChangeHandlerForBulk={onVesselInfoChangeHandlerForBulk}
        onVesselInfoChangeHandlerForLiner={onVesselInfoChangeHandlerForLiner}
        uploadDocHandler={uploadDocHandler}
        shippingInfoChangeHandler={shippingInfoChangeHandler}
        onDeleteVessel={onDeleteVessel}
        OnAddvesselInformationDelete={OnAddvesselInformationDelete}
        shipmentTypeBulk={shipmentTypeBulk}
        currency={currency}
        dateStartFrom={dateStartFrom}
        handleExcelClose={handleExcelClose}
        isFieldInFocus={isFieldInFocus}
        setOnFocus={setOnFocus}
        setOnBlur={setOnBlur}
        country={getCountriesMasterData}
        port={getPortsMasterData}
      />
      <div className="mt-5">
        <VesselSaveBar handleSave={onSaveHandler} rightBtn="Submit" rightBtnClick={onSubmitHanler} />
      </div>
    </>
  );
}
