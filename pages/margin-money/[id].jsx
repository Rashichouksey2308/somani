/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import 'bootstrap/dist/css/bootstrap.css';
import jsPDF from 'jspdf';
import _get from 'lodash/get';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import ReactDOMServer from 'react-dom/server';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import DownloadBar from '../../src/components/DownloadBar';
import RevisedMargin from '../../src/components/RevisedMargin';
import UploadOther from '../../src/components/UploadOther';
import { GetMarginMoney, RevisedMarginMoney, UpdateMarginMoney } from '../../src/redux/marginMoney/action';
import { getBanks, getInternalCompanies } from '../../src/redux/masters/action';
import { GetAllOrders } from '../../src/redux/registerBuyer/action';
import { setDynamicName, setDynamicOrder, setPageName } from '../../src/redux/userData/action';
import MarginMoney from '../../src/templates/MarginMoney';
import { checkNan, convertValue, gSTINValidation } from '../../src/utils/helper';
import styles from './index.module.scss';
import RevisedMarginPreviewTemp from '../../src/templates/RevisedMarginPreviewTemp';
import constants from '@/utils/constants'

function Index() {
  const dispatch = useDispatch();

  const [isFieldInFocus, setIsFieldInFocus] = useState({
    conversion: false,
    noOfPdcs: false,
  });

  useEffect(() => {
    dispatch(getInternalCompanies());
  }, []);
  const { getBanksMasterData } = useSelector((state) => state.MastersData);
  const { getBranchesMasterData } = useSelector((state) => state.MastersData);
  const { getInternalCompaniesMasterData } = useSelector((state) => state.MastersData);
  const { margin, updatingMarginMoneyResponse } = useSelector((state) => state.marginMoney);
  const { orderList } = useSelector((state) => state.buyer);

  const marginData = _get(margin, 'data.data[0]', '');

  let id = sessionStorage.getItem('marginId');

  const [unit, setUnit] = useState({ value: 'Crores' });
  const [coversionUnit, setCoversionUnit] = useState(constants.numberCrore);
  const [isConsigneeSameAsBuyer, setisConsigneeSameAsBuyer] = useState(true);

  const RevisedMarginMoneyTrue = _get(margin, 'data.data[0].revisedMarginMoney.isActive', false);

  useEffect(() => {
    let id = sessionStorage.getItem('marginId');

    dispatch(GetMarginMoney({ orderId: id }));
    dispatch(GetAllOrders({ orderId: id }));
    dispatch(setPageName('margin-money'));
    dispatch(setDynamicName(marginData?.company?.companyName));
    dispatch(setDynamicOrder(marginData?.order?.orderId));
  }, [dispatch, marginData?.company?.companyName, updatingMarginMoneyResponse]);

  const [forCalculation, setForCalculation] = useState({
    isUsanceInterestIncluded: marginData?.isUsanceInterestIncluded === false ? false : true,
    status: marginData?.status || '',
    quantity: marginData?.order?.quantity || '',
    additionalPDC: marginData?.additionalPDC || '',
    conversionRate: marginData?.conversionRate || '',
    perUnitPrice: marginData?.order?.perUnitPrice || '',
    usanceInterestPercentage: marginData?.order?.termsheet?.commercials?.usanceInterestPercetage || '',
    numberOfPDC: marginData?.numberOfPDC || '',
    tradeMarginPercentage: marginData?.order?.termsheet?.commercials?.tradeMarginPercentage || '',
    tolerance: marginData?.order?.tolerance || '',
    marginMoney: marginData?.order?.termsheet?.transactionDetails?.marginMoney || '',
  });

  const saveForCalculation = (name, value) => {
    const newInput = { ...forCalculation };
    newInput[name] = value;

    setForCalculation(newInput);
    getData2();
    getRevisedData2();
  };

  const [finalCal, setFinalCal] = useState({
    orderValue: '',
    orderValueCurrency: 'USD',
    orderValueInINR: '',
    usanceInterest: '',
    tradeMargin: '',
    grossOrderValue: '',
    toleranceValue: '',
    totalOrderValue: '',
    provisionalUnitPricePerTon: '',
    marginMoney: '',
    totalSPDC: '',
    amountPerSPDC: '',
  });



  const getData = () => {
    setForCalculation({
      isUsanceInterestIncluded: marginData?.isUsanceInterestIncluded === false ? false : true,
      status: marginData?.status,
      quantity: marginData?.order?.quantity,
      additionalPDC: marginData?.additionalPDC,
      conversionRate: marginData?.conversionRate,
      perUnitPrice: marginData?.order?.perUnitPrice,
      usanceInterestPercentage: marginData?.order?.termsheet?.commercials?.usanceInterestPercetage,
      numberOfPDC: marginData?.numberOfPDC,
      tradeMarginPercentage: marginData?.order?.termsheet?.commercials?.tradeMarginPercentage,
      tolerance: marginData?.order?.tolerance,
      marginMoney: marginData?.order?.termsheet?.transactionDetails?.marginMoney,
    });
    let orderValue = parseFloat(Number(forCalculation.quantity) * Number(forCalculation.perUnitPrice)).toFixed(constants.numberTwo); //J
    let orderValueCurrency = marginData?.order?.orderCurrency;
    let orderValueInINR = parseFloat(Number(orderValue) * Number(forCalculation.conversionRate)).toFixed(constants.numberTwo); //K
    let usanceInterest = parseFloat(
      (Number(orderValueInINR) *
        (forCalculation.isUsanceInterestIncluded ? Number(forCalculation.usanceInterestPercentage / constants.numberHundred) : 1) *
        constants.numberNinety) /
        constants.daysInYear,
    ); //L
    let tradeMargin = parseFloat(
      Number(orderValueInINR) * Number(Number(forCalculation.tradeMarginPercentage) / constants.numberHundred),
    ).toFixed(constants.numberTwo); //M
    let grossOrderValue = parseFloat(Number(orderValueInINR) + Number(usanceInterest) + Number(tradeMargin)).toFixed(constants.numberTwo); //N
    let toleranceValue = parseFloat(Number(grossOrderValue) * Number(forCalculation.tolerance / constants.numberHundred)).toFixed(constants.numberTwo); //O
    let totalOrderValue = parseFloat(Number(grossOrderValue) + Number(toleranceValue)).toFixed(constants.numberTwo); //P
    let provisionalUnitPricePerTon = parseFloat(Number(grossOrderValue) / Number(forCalculation.quantity)).toFixed(constants.numberTwo); //Q
    let marginMoney = parseFloat(Number(totalOrderValue) * Number(Number(forCalculation.marginMoney) / constants.numberHundred)).toFixed(constants.numberTwo); //R
    let totalSPDC = parseFloat(Number(totalOrderValue) - Number(marginMoney)).toFixed(constants.numberTwo); //S
    let amountPerSPDC = parseFloat(Number(totalSPDC) / Number(forCalculation.numberOfPDC)).toFixed(constants.numberTwo); //T

    setFinalCal({
      orderValue: orderValue,
      orderValueCurrency: orderValueCurrency,
      orderValueInINR: orderValueInINR,
      usanceInterest: usanceInterest,
      tradeMargin: tradeMargin,
      grossOrderValue: grossOrderValue,
      toleranceValue: toleranceValue,
      totalOrderValue: totalOrderValue,
      provisionalUnitPricePerTon: provisionalUnitPricePerTon,
      marginMoney: marginMoney,
      totalSPDC: totalSPDC,
      amountPerSPDC: amountPerSPDC,
    });
  };

  const getData2 = () => {
    let orderValue = parseFloat(Number(forCalculation.quantity) * Number(forCalculation.perUnitPrice)).toFixed(constants.numberTwo); //J
    let orderValueCurrency = 'USD';
    let orderValueInINR = parseFloat(Number(orderValue) * Number(forCalculation.conversionRate)).toFixed(constants.numberTwo); //K
    let usanceInterest = parseFloat(
      (Number(orderValueInINR) *
        (forCalculation.isUsanceInterestIncluded ? Number(forCalculation.usanceInterestPercentage / constants.numberHundred) : 1) *
        constants.numberNinety) /
        constants.daysInYear,
    ).toFixed(constants.numberTwo); //L
    let tradeMargin = parseFloat(
      Number(orderValueInINR) * Number(Number(forCalculation.tradeMarginPercentage) / constants.numberHundred),
    ).toFixed(constants.numberTwo); //M
    let grossOrderValue = parseFloat(Number(orderValueInINR) + Number(usanceInterest) + Number(tradeMargin)).toFixed(constants.numberTwo); //N
    let toleranceValue = parseFloat(Number(grossOrderValue) * Number(forCalculation.tolerance / constants.numberHundred)).toFixed(constants.numberTwo); //O
    let totalOrderValue = parseFloat(Number(grossOrderValue) + Number(toleranceValue)).toFixed(constants.numberTwo); //P
    let provisionalUnitPricePerTon = parseFloat(Number(grossOrderValue) / Number(forCalculation.quantity)).toFixed(constants.numberTwo); //Q
    let marginMoney = parseFloat(Number(totalOrderValue) * Number(Number(forCalculation.marginMoney) / constants.numberHundred)).toFixed(constants.numberTwo); //R
    let totalSPDC = parseFloat(Number(totalOrderValue) - Number(marginMoney)).toFixed(constants.numberTwo); //S
    let amountPerSPDC = parseFloat(Number(totalSPDC) / Number(forCalculation.numberOfPDC)).toFixed(constants.numberTwo); //T

    setFinalCal({
      orderValue: orderValue,
      orderValueCurrency: orderValueCurrency,
      orderValueInINR: orderValueInINR,
      usanceInterest: usanceInterest,
      tradeMargin: tradeMargin,
      grossOrderValue: grossOrderValue,
      toleranceValue: toleranceValue,
      totalOrderValue: totalOrderValue,
      provisionalUnitPricePerTon: provisionalUnitPricePerTon,
      marginMoney: marginMoney,
      totalSPDC: totalSPDC,
      amountPerSPDC: amountPerSPDC,
    });
  };

  useEffect(() => {
    getData2();
  }, [forCalculation]);

  useEffect(() => {
    getData();
  }, [marginData]);
  const routeChange = () => {
    Router.push('/margin-preview');
  };

  const [invoiceData, setInvoiceData] = useState({});

  const [branchOptions, setBranchOptions] = useState([]);

  const saveData = (name, value, name2, value2, value3, value4, branchType, bankName) => {
    const newInput = { ...invoiceData };
    newInput.branch = value3;
    newInput.branchAddress = value;
    newInput.IFSCcode = value2;
    newInput.accountNo = value4;
    newInput.branch = branchType;
    newInput.bankName = bankName;

    setInvoiceData({ ...newInput });
  };
  const savedataRevised = (name, value, name2, value2, value3, value4, branchType, bankName) => {
    const newInput = { ...invoiceDataRevised };
    newInput.branch = value3;
    newInput.branchAddress = value;
    newInput.IFSCcode = value2;
    newInput.accountNo = value4;
    newInput.branch = branchType;
    newInput.bankName = bankName;

    setInvoiceDataRevised({ ...newInput });
  };

  const saveInvoiceData = (name, value) => {
    const newInput = { ...invoiceData };
    if (name == 'buyerGSTIN') {
      const filteredGSt = orderList?.company?.detailedCompanyInfo?.GST?.filter((item) => item?.gstin === value) ?? [];
      if (filteredGSt.length > 0 && filteredGSt[0]?.detail?.summaryInformation?.businessProfile?.address) {
        newInput.buyerAddress = filteredGSt[0]?.detail?.summaryInformation?.businessProfile?.address ?? '';
        if (isConsigneeSameAsBuyer) {
          newInput.consigneeAddress = filteredGSt[0]?.detail?.summaryInformation?.businessProfile?.address ?? '';
        }
      }
    }

    newInput[name] = value;
    if (isConsigneeSameAsBuyer) {
      if (name == 'buyerName') {
        newInput.consigneeName = value;
      }
      if (name == 'buyerAddress') {
        newInput.consigneeAddress = value;
      }
      if (name == 'buyerGSTIN') {
        newInput.consigneeGSTIN = value;
      }
    }
    setInvoiceData({ ...newInput });
  };

  const [changeImporterData, setChangeImporterData] = useState({
    branch: '',
    state: '',
    address: '',
  });

  const dropDownChange = (name, value) => {
    if (value === 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED') {
      const newInput = { ...invoiceData };
      newInput['importerName'] = 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED';

      setInvoiceData({ ...newInput });
    } else if (value === 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED') {
      const newInput = { ...invoiceData };
      newInput['importerName'] = 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED';

      setInvoiceData({ ...newInput });
    }
    let filter = getInternalCompaniesMasterData?.filter((val, index) => {
      if (val.Company_Name == value) {
        return val;
      }
    });

    setBranchOptions([...filter]);
  };

  useEffect(() => {
    dropDownChange(
      'name',
      marginData?.invoiceDetail?.importerName
        ? marginData?.invoiceDetail?.importerName
        : marginData?.order?.termsheet?.otherTermsAndConditions?.buyer?.bank
            ?.toUpperCase()
            ?.replace(/ *\([^)]*\) */g, '') || '',
    );
  }, [
    marginData?.invoiceDetail?.importerName,
    marginData?.order?.termsheet?.otherTermsAndConditions?.buyer?.bank,
    getInternalCompaniesMasterData,
  ]);

  const changeImporter = (e) => {
    if (e.target.name == 'branchOffice') {
      changeImporterData.branch = e.target.value;
      const newInput = { ...invoiceData };
      newInput['branchOffice'] = e.target.value;
      setChangeImporterData({ ...changeImporterData });
      setInvoiceData({ ...newInput });
    }
    if (e.target.name == 'companyAddress') {
      const newInput = { ...invoiceData };
      changeImporterData.address = e.target.value;
      newInput['companyAddress'] = e.target.value;
      setChangeImporterData({ ...changeImporterData });
      setInvoiceData({ ...newInput });
    }
    if (e.target.name == 'importerGSTIN') {
      const newInput = { ...invoiceData };
      changeImporterData.GSTIN = e.target.value;
      newInput['importerGSTIN'] = e.target.value;
      setChangeImporterData({ ...changeImporterData });
      setInvoiceData({ ...newInput });
    }
  };

  const setSame = (val) => {
    if (val == true) {
      setInvoiceData({
        ...invoiceData,
        consigneeName: invoiceData.buyerName,
        consigneeGSTIN: invoiceData.buyerGSTIN,
        consigneeAddress: invoiceData.buyerAddress,
      });
    } else {
      setInvoiceData({
        ...invoiceData,
        consigneeName: '',
        consigneeGSTIN: '',
        consigneeAddress: '',
      });
    }
  };
  const validate = () => {
    if (invoiceData.buyerName === null || invoiceData.buyerName === undefined || invoiceData.buyerName === '') {
      let toastMessage = 'Please add buyer name';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (invoiceData.buyerGSTIN === null || invoiceData.buyerGSTIN === undefined || invoiceData.buyerGSTIN === '') {
      let toastMessage = 'Please add buyer gstin';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (
      invoiceData.buyerAddress === null ||
      invoiceData.buyerAddress === undefined ||
      invoiceData.buyerAddress === ''
    ) {
      let toastMessage = 'Please add buyer address';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (
      invoiceData.consigneeName === null ||
      invoiceData.consigneeName === undefined ||
      invoiceData.consigneeName === ''
    ) {
      let toastMessage = 'Please add consignee Name';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (
      invoiceData.consigneeGSTIN === null ||
      invoiceData.consigneeGSTIN === undefined ||
      invoiceData.consigneeGSTIN === '' ||
      !gSTINValidation(invoiceData.consigneeGSTIN)
    ) {
      let toastMessage = 'Please add A VALID consignee gstin';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (
      invoiceData.consigneeAddress === null ||
      invoiceData.consigneeAddress === undefined ||
      invoiceData.consigneeAddress === ''
    ) {
      let toastMessage = 'Please add consignee address';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (
      invoiceData.importerName === null ||
      invoiceData.importerName === undefined ||
      invoiceData.importerName === ''
    ) {
      let toastMessage = 'Please add importer name';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (
      invoiceData.branchOffice === null ||
      invoiceData.branchOffice === undefined ||
      invoiceData.branchOffice === ''
    ) {
      let toastMessage = 'Please add branch Office';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (
      invoiceData.companyAddress === null ||
      invoiceData.companyAddress === undefined ||
      invoiceData.companyAddress === ''
    ) {
      let toastMessage = 'Please add company Address';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (
      invoiceData.importerGSTIN === null ||
      invoiceData.importerGSTIN === undefined ||
      invoiceData.importerGSTIN === ''
    ) {
      let toastMessage = 'Please add importer GSTIN';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (invoiceData.bankName === null || invoiceData.bankName === undefined || invoiceData.bankName === '') {
      let toastMessage = 'Please add bank Name';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (invoiceData.branch === null || invoiceData.branch === undefined || invoiceData.branch === '') {
      let toastMessage = 'Please add branch';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (invoiceData.branch === null || invoiceData.branch === undefined || invoiceData.branch === '') {
      let toastMessage = 'Please add branch';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (
      invoiceData.branchAddress === null ||
      invoiceData.branchAddress === undefined ||
      invoiceData.branchAddress === ''
    ) {
      let toastMessage = 'Please add branch Address';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (invoiceData.IFSCcode === null || invoiceData.IFSCcode === undefined || invoiceData.IFSCcode === '') {
      let toastMessage = 'Please add  IFSC code';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (invoiceData.accountNo === null || invoiceData.accountNo === undefined || invoiceData.accountNo === '') {
      let toastMessage = 'Please add  account No';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    return true;
  };
  const handleUpdate = async () => {
    if (validate()) {
      let list = document.getElementsByClassName('nav-tabs');
      let tab = document.getElementsByClassName('tab-content');
      for (let i = 0; i < list[0].children.length; i++) {
        if (list[0].children[i].children[0].classList.contains('active')) {
          let tempIndex = i + 1;
          if (tempIndex < list[0].children.length) {
            list[0].children[i].children[0].classList.remove('active');

            list[0].children[tempIndex].children[0].classList.add('active');
            tab[0].children[i].classList.remove('show');
            tab[0].children[i].classList.remove('active');
            tab[0].children[tempIndex].classList.add('show');
            tab[0].children[tempIndex].classList.add('active');
            break;
          }
        }
      }
      let obj = {
        marginMoneyId: marginData?._id,
        conversionRate: forCalculation.conversionRate,
        isUsanceInterestIncluded: forCalculation.isUsanceInterestIncluded === false ? false : true,
        numberOfPDC: forCalculation.numberOfPDC,
        additionalPDC: forCalculation.additionalPDC,
        invoiceDetail: {
          buyerName: invoiceData?.companyName,
          buyerGSTIN: invoiceData?.buyerGSTIN,
          buyerAddress: invoiceData?.buyerAddress,
          isConsigneeSameAsBuyer: isConsigneeSameAsBuyer,
          consigneeName: invoiceData?.consigneeName,
          consigneeGSTIN: invoiceData?.consigneeGSTIN,
          consigneeAddress: invoiceData?.consigneeAddress,
          importerName: invoiceData?.importerName,

          branchOffice: invoiceData?.branchOffice,
          companyAddress: invoiceData?.companyAddress,
          importerGSTIN: invoiceData?.importerGSTIN,
          bankName: invoiceData?.bankName,
          branch: invoiceData?.branch,
          branchAddress: invoiceData?.branchAddress,
          IFSCcode: invoiceData?.IFSCcode,
          accountNo: invoiceData?.accountNo,
        },
        calculation: {
          orderValue: finalCal.orderValue,
          orderValueCurrency: finalCal.orderValueCurrency,
          orderValueInINR: finalCal.orderValueInINR,
          usanceInterest: finalCal.usanceInterest,
          tradeMargin: finalCal.tradeMargin,
          grossOrderValue: finalCal.grossOrderValue,
          toleranceValue: finalCal.toleranceValue,
          totalOrderValue: finalCal.totalOrderValue,
          provisionalUnitPricePerTon: finalCal.provisionalUnitPricePerTon,
          marginMoney: finalCal.marginMoney,
          totalSPDC: finalCal.totalSPDC,
          amountPerSPDC: finalCal.amountPerSPDC,
        },
        orderObj: {
          quantity: forCalculation.quantity,
          perUnitPrice: forCalculation.perUnitPrice,
          orderValue: finalCal.orderValue,
        },
      };

      dispatch(UpdateMarginMoney(obj));
    }
  };

  // RevisedMargin Money New Calculation

  const [forCalculationRevised, setforCalculationRevised] = useState({
    isUsanceInterestIncluded: marginData?.isUsanceInterestIncluded === false ? false : true,
    status: marginData?.status,
    quantity: marginData?.revisedMarginMoney?.revisedCommodityDetails?.quantity
      ? marginData?.revisedMarginMoney?.revisedCommodityDetails?.quantity
      : marginData?.order?.quantity,
    additionalPDC: marginData?.additionalPDC,
    conversionRate: marginData?.revisedMarginMoney?.revisedCommodityDetails?.conversionRate
      ? marginData?.revisedMarginMoney?.revisedCommodityDetails?.conversionRate
      : marginData?.conversionRate,
    perUnitPrice: marginData?.revisedMarginMoney?.revisedCommodityDetails?.perUnitPrice
      ? marginData?.revisedMarginMoney?.revisedCommodityDetails?.perUnitPrice
      : marginData?.order?.perUnitPrice,
    usanceInterestPercentage: marginData?.order?.termsheet?.commercials?.usanceInterestPercetage,
    numberOfPDC: marginData?.numberOfPDC,
    tradeMarginPercentage: marginData?.order?.termsheet?.commercials?.tradeMarginPercentage,
    tolerance: marginData?.order?.tolerance,
    marginMoney: marginData?.order?.termsheet?.transactionDetails?.marginMoney,
  });

  const saveforCalculationRevised = (name, value) => {
    const newInput = { ...forCalculationRevised };
    newInput[name] = value;

    setforCalculationRevised(newInput);
    getDataRevised();
    getRevisedData2();
  };

  const [finalCalRevised, setfinalCalRevised] = useState({
    orderValue: '',
    orderValueCurrency: 'USD',
    orderValueInINR: '',
    usanceInterest: '',
    tradeMargin: '',
    grossOrderValue: '',
    toleranceValue: '',
    totalOrderValue: '',
    provisionalUnitPricePerTon: '',
    marginMoney: '',
    totalSPDC: '',
    amountPerSPDC: '',
  });

  const getDataRevised2 = () => {
    setforCalculationRevised({
      isUsanceInterestIncluded: marginData?.isUsanceInterestIncluded === false ? false : true,
      status: marginData?.status,
      quantity: marginData?.revisedMarginMoney?.revisedCommodityDetails?.quantity
        ? marginData?.revisedMarginMoney?.revisedCommodityDetails?.quantity
        : marginData?.order?.quantity,
      additionalPDC: marginData?.additionalPDC,
      conversionRate: marginData?.revisedMarginMoney?.revisedCommodityDetails?.conversionRate
        ? marginData?.revisedMarginMoney?.revisedCommodityDetails?.conversionRate
        : marginData?.conversionRate,
      perUnitPrice: marginData?.revisedMarginMoney?.revisedCommodityDetails?.perUnitPrice
        ? marginData?.revisedMarginMoney?.revisedCommodityDetails?.perUnitPrice
        : marginData?.order?.perUnitPrice,
      usanceInterestPercentage: marginData?.order?.termsheet?.commercials?.usanceInterestPercetage,
      numberOfPDC: marginData?.numberOfPDC,
      tradeMarginPercentage: marginData?.order?.termsheet?.commercials?.tradeMarginPercentage,
      tolerance: marginData?.order?.tolerance,
      marginMoney: marginData?.order?.termsheet?.transactionDetails?.marginMoney,
    });
    let orderValue = parseFloat(
      Number(forCalculationRevised.quantity) * Number(forCalculationRevised.perUnitPrice),
    ).toFixed(constants.numberTwo); //J
    let orderValueCurrency = 'USD';
    let orderValueInINR = parseFloat(Number(orderValue) * Number(forCalculationRevised.conversionRate)).toFixed(constants.numberTwo); //K
    let usanceInterest = parseFloat(
      (Number(orderValueInINR) *
        (forCalculationRevised.isUsanceInterestIncluded
          ? Number(forCalculationRevised.usanceInterestPercentage / constants.numberHundred)
          : 1) *
          constants.numberNinety) /
          constants.daysInYear,
    ).toFixed(constants.numberTwo); //L
    let tradeMargin = parseFloat(
      Number(orderValueInINR) * Number(Number(forCalculationRevised.tradeMarginPercentage) / constants.numberHundred),
    ).toFixed(constants.numberTwo); //M
    let grossOrderValue = parseFloat(Number(orderValueInINR) + Number(usanceInterest) + Number(tradeMargin)).toFixed(constants.numberTwo); //N
    let toleranceValue = parseFloat(Number(grossOrderValue) * Number(forCalculationRevised.tolerance / constants.numberHundred)).toFixed(constants.numberTwo); //O
    let totalOrderValue = parseFloat(Number(grossOrderValue) + Number(toleranceValue)).toFixed(constants.numberTwo); //P
    let provisionalUnitPricePerTon = parseFloat(
      Number(grossOrderValue) / Number(forCalculationRevised.quantity),
    ).toFixed(constants.numberTwo); //Q
    let marginMoney = parseFloat(
      Number(totalOrderValue) * Number(Number(forCalculationRevised.marginMoney) / constants.numberHundred),
    ).toFixed(constants.numberTwo); //R
    let totalSPDC = parseFloat(Number(totalOrderValue) - Number(marginMoney)).toFixed(constants.numberTwo); //S
    let amountPerSPDC = parseFloat(Number(totalSPDC) / Number(forCalculationRevised.numberOfPDC)).toFixed(constants.numberTwo); //T

    setfinalCalRevised({
      orderValue: orderValue,
      orderValueCurrency: orderValueCurrency,
      orderValueInINR: orderValueInINR,
      usanceInterest: usanceInterest,
      tradeMargin: tradeMargin,
      grossOrderValue: grossOrderValue,
      toleranceValue: toleranceValue,
      totalOrderValue: totalOrderValue,
      provisionalUnitPricePerTon: provisionalUnitPricePerTon,
      marginMoney: marginMoney,
      totalSPDC: totalSPDC,
      amountPerSPDC: amountPerSPDC,
    });
  };

  const getDataRevised = () => {
    let orderValue = parseFloat(
      Number(forCalculationRevised.quantity) * Number(forCalculationRevised.perUnitPrice),
    ).toFixed(constants.numberTwo); //J
    let orderValueCurrency = 'USD';
    let orderValueInINR = parseFloat(Number(orderValue) * Number(forCalculationRevised.conversionRate)).toFixed(constants.numberTwo); //K
    let usanceInterest = parseFloat(
      (Number(orderValueInINR) *
        (forCalculationRevised.isUsanceInterestIncluded
          ? Number(forCalculationRevised.usanceInterestPercentage / constants.numberHundred)
          : 0) *
          constants.numberNinety) /
          constants.daysInYear,
    ).toFixed(constants.numberTwo); //L
    let tradeMargin = parseFloat(
      Number(orderValueInINR) * Number(Number(forCalculationRevised.tradeMarginPercentage) / constants.numberHundred),
    ).toFixed(constants.numberTwo); //M
    let grossOrderValue = parseFloat(Number(orderValueInINR) + Number(usanceInterest) + Number(tradeMargin)).toFixed(constants.numberTwo); //N
    let toleranceValue = parseFloat(Number(grossOrderValue) * Number(forCalculationRevised.tolerance / constants.numberHundred)).toFixed(constants.numberTwo); //O
    let totalOrderValue = parseFloat(Number(grossOrderValue) + Number(toleranceValue)).toFixed(constants.numberTwo); //P
    let provisionalUnitPricePerTon = parseFloat(
      Number(grossOrderValue) / Number(forCalculationRevised.quantity),
    ).toFixed(constants.numberTwo); //Q
    let marginMoney = parseFloat(
      Number(totalOrderValue) * Number(Number(forCalculationRevised.marginMoney) / constants.numberHundred),
    ).toFixed(constants.numberTwo); //R
    let totalSPDC = parseFloat(Number(totalOrderValue) - Number(marginMoney)).toFixed(constants.numberTwo); //S
    let amountPerSPDC = parseFloat(Number(totalSPDC) / Number(forCalculationRevised.numberOfPDC)).toFixed(constants.numberTwo); //T

    setfinalCalRevised({
      orderValue: orderValue,
      orderValueCurrency: orderValueCurrency,
      orderValueInINR: orderValueInINR,
      usanceInterest: usanceInterest,
      tradeMargin: tradeMargin,
      grossOrderValue: grossOrderValue,
      toleranceValue: toleranceValue,
      totalOrderValue: totalOrderValue,
      provisionalUnitPricePerTon: provisionalUnitPricePerTon,
      marginMoney: marginMoney,
      totalSPDC: totalSPDC,
      amountPerSPDC: amountPerSPDC,
    });
  };

  const [revisedCalc, setRevisedCalc] = useState({
    additionalAmountPerPDC: marginData?.revisedMarginMoney?.calculation?.additionalAmountPerPDC,
    revisedNetOrderValue: marginData?.revisedMarginMoney?.calculation?.revisedNetOrderValue,
    marginMoney: marginData?.calculation?.marginMoney,
    revisedMarginMoney: marginData?.revisedMarginMoney?.calculation?.marginMoney,
    marginMoneyReceived: marginData?.revisedMarginMoney?.calculation?.marginMoneyReceived,
    marginMoneyPayable: marginData?.revisedMarginMoney?.calculation?.marginMoneyPayable,
  });

  const [calcRevised, setCalcRevised] = useState({
    additionalAmountPerPDC: '',
    revisedNetOrderValue: '',
    marginMoney: '',
    revisedMarginMoney: '',
    marginMoneyReceived: '',
    marginMoneyPayable: '',
  });

  const [invoiceDataRevised, setInvoiceDataRevised] = useState({
    buyerName: '',
    buyerGSTIN: '',
    buyerAddress: '',
    isConsigneeSameAsBuyer: '',
    consigneeName: '',
    consigneeGSTIN: '',
    consigneeAddress: '',
    importerName: '',
    branchOffice: '',
    companyAddress: '',
    importerGSTIN: '',
    bankName: '',
    branch: '',
    branchAddress: '',
    IFSCcode: '',
    accountNo: '',
  });

  useEffect(() => {
    if (marginData) {
      setInvoiceDataRevised({
        buyerName: marginData?.company?.companyName || '',
        buyerGSTIN: marginData?.revisedMarginMoney?.invoiceDetail?.buyerGSTIN || '',
        buyerAddress: marginData?.revisedMarginMoney?.invoiceDetail?.buyerAddress || '',
        isConsigneeSameAsBuyer: marginData?.revisedMarginMoney?.invoiceDetail?.isConsigneeSameAsBuyer
          ? marginData?.revisedMarginMoney?.invoiceDetail?.isConsigneeSameAsBuyer
          : true,
        consigneeName:
          marginData?.revisedMarginMoney?.invoiceDetail?.consigneeName || marginData?.company?.companyName || '',
        consigneeGSTIN: marginData?.revisedMarginMoney?.invoiceDetail?.consigneeGSTIN || '',
        consigneeAddress: marginData?.revisedMarginMoney?.invoiceDetail?.consigneeAddress || '',
        importerName:
          marginData?.revisedMarginMoney?.invoiceDetail?.importerName ||
          marginData?.order?.termsheet?.otherTermsAndConditions?.buyer?.bank
            ?.toUpperCase()
            ?.replace(/ *\([^)]*\) */g, '') ||
          '',
        branchOffice: marginData?.revisedMarginMoney?.invoiceDetail?.branchOffice || '',
        companyAddress: marginData?.revisedMarginMoney?.invoiceDetail?.companyAddress || '',
        importerGSTIN: marginData?.revisedMarginMoney?.invoiceDetail?.importerGSTIN || '',
        bankName: marginData?.revisedMarginMoney?.invoiceDetail?.bankName || '',
        branch: marginData?.revisedMarginMoney?.invoiceDetail?.branch || 'Connaught Place, DELHI',
        branchAddress: marginData?.revisedMarginMoney?.invoiceDetail?.branchAddress || '',
        IFSCcode: marginData?.revisedMarginMoney?.invoiceDetail?.IFSCcode || '',
        accountNo: marginData?.revisedMarginMoney?.invoiceDetail?.accountNo || '',
      });
    }
  }, [marginData]);

  const getRevisedData = () => {
    setRevisedCalc({
      additionalAmountPerPDC: marginData?.revisedMarginMoney?.calculation?.additionalAmountPerPDC,
      revisedNetOrderValue: marginData?.revisedMarginMoney?.calculation?.revisedNetOrderValue,
      marginMoney: marginData?.calculation?.marginMoney,
      revisedMarginMoney: marginData?.revisedMarginMoney?.calculation?.marginMoney,
      marginMoneyReceived: marginData?.revisedMarginMoney?.calculation?.marginMoneyReceived,
      marginMoneyPayable: marginData?.revisedMarginMoney?.calculation?.marginMoneyPayable,
    });

    // T calculation
    let additionalAmountPerPDC = isNaN(
      Number(
        (Number(finalCalRevised?.totalSPDC) - Number(marginData?.calculation?.totalSPDC)) /
          Number(forCalculationRevised.additionalPDC),
      ).toFixed(constants.numberTwo),
    )
      ? 0
      : Number(
          (Number(finalCalRevised?.totalSPDC) - Number(marginData?.calculation?.totalSPDC)) /
            Number(forCalculationRevised.additionalPDC),
        ).toFixed(constants.numberTwo);
    // u calculation
    let revisedNetOrderValueNew = Number(
      Number(finalCalRevised?.totalOrderValue) - Number(marginData?.calculation?.totalOrderValue),
    ).toFixed(constants.numberTwo);

    let marginMoneyRevised = marginData?.calculation?.marginMoney;
    let revisedMarginMoneyNew = Number(finalCalRevised?.marginMoney);

    setCalcRevised({
      additionalAmountPerPDC: additionalAmountPerPDC,
      revisedNetOrderValue: revisedNetOrderValueNew,
      marginMoney: marginMoneyRevised,
      revisedMarginMoney: revisedMarginMoneyNew,
      marginMoneyReceived: '',
      marginMoneyPayable: '',
    });
  };

  const getRevisedData2 = () => {
    let additionalAmountPerPDC = Number(
      (Number(finalCalRevised?.totalSPDC) - Number(marginData?.calculation?.totalSPDC)) /
        Number(forCalculationRevised.additionalPDC),
    ).toFixed(constants.numberTwo);

    let revisedNetOrderValueNew = Number(
      Number(finalCalRevised?.totalOrderValue) - Number(marginData?.calculation?.totalOrderValue),
    ).toFixed(constants.numberTwo);
    let marginMoneyRevised = Number(marginData?.calculation?.marginMoney).toFixed(constants.numberTwo);
    let revisedMarginMoneyNew = Number(finalCalRevised?.marginMoney);

    setCalcRevised({
      additionalAmountPerPDC: additionalAmountPerPDC,
      revisedNetOrderValue: revisedNetOrderValueNew,
      marginMoney: marginMoneyRevised,
      revisedMarginMoney: revisedMarginMoneyNew,
      marginMoneyReceived: '',
      marginMoneyPayable: '',
    });
  };

  const saveInvoiceDataRevisedRevised = (name, value) => {
    const newInput = { ...invoiceDataRevised };
    newInput[name] = value;

    if (isConsigneeSameAsBuyerRevised) {
      if (name == 'buyerName') {
        newInput.consigneeName = value;
      }
      if (name == 'buyerAddress') {
        newInput.consigneeAddress = value;
      }
      if (name == 'buyerGSTIN') {
        newInput.consigneeGSTIN = value;
      }
    }
    setInvoiceDataRevised({ ...newInput });
  };

  const setSameRevised = (val) => {
    if (val == true) {
      setInvoiceDataRevised({
        ...invoiceDataRevised,
        consigneeName: invoiceDataRevised.buyerName,
        consigneeGSTIN: invoiceDataRevised.buyerGSTIN,
        consigneeAddress: invoiceDataRevised.buyerAddress,
      });
    } else {
      setInvoiceDataRevised({
        ...invoiceDataRevised,
        consigneeName: '',
        consigneeGSTIN: '',
        consigneeAddress: '',
      });
    }
  };

  const reviseValidate = () => {
    if (
      forCalculationRevised.additionalPDC === null ||
      forCalculationRevised.additionalPDC === undefined ||
      forCalculationRevised.additionalPDC === '' ||
      isNaN(forCalculationRevised.additionalPDC) ||
      forCalculationRevised.additionalPDC === 'NaN'
    ) {
      let toastMessage = 'Please add additional Amount Per PDC';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (
      forCalculationRevised.conversionRate === null ||
      forCalculationRevised.conversionRate === undefined ||
      forCalculationRevised.conversionRate === '' ||
      isNaN(forCalculationRevised.conversionRate) ||
      forCalculationRevised.conversionRate === 'NaN'
    ) {
      let toastMessage = 'Please add conversion Rate';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    return true;
  };
  const handleUpdateRevisedMarginMoney = () => {
    if (reviseValidate()) {
      let obj = {
        marginMoneyId: marginData?._id,
        additionalPDC: forCalculationRevised.additionalPDC,
        revisedMarginMoney: {
          isActive: true,
          invoiceDetail: { ...invoiceDataRevised },
          calculation: { ...calcRevised },
          revisedCalculation: {
            orderValue: finalCalRevised.orderValue,
            orderValueCurrency: finalCalRevised.orderValueCurrency,
            orderValueInINR: finalCalRevised.orderValueInINR,
            usanceInterest: finalCalRevised.usanceInterest,
            tradeMargin: finalCalRevised.tradeMargin,
            grossOrderValue: finalCalRevised.grossOrderValue,
            toleranceValue: finalCalRevised.toleranceValue,
            totalOrderValue: finalCalRevised.totalOrderValue,
            provisionalUnitPricePerTon: finalCalRevised.provisionalUnitPricePerTon,
            marginMoney: finalCalRevised.marginMoney,
            totalSPDC: finalCalRevised.totalSPDC,
            amountPerSPDC: finalCalRevised.amountPerSPDC,
          },
          revisedCommodityDetails: {
            conversionRate: forCalculationRevised.conversionRate,
            quantity: forCalculationRevised.quantity,
            perUnitPrice: forCalculationRevised.perUnitPrice,
            orderValue: finalCalRevised.orderValue,
          },
        },

        isUsanceInterestIncluded: forCalculationRevised.isUsanceInterestIncluded || true,
      };

      dispatch(RevisedMarginMoney(obj));
    }
  };

  const saveOrderData = (name, value) => {
    const newInput = { ...unit };
    newInput[name] = value;

    setUnit(newInput);
  };

  const coversionUnitHandler = (val) => {
    let unit = 10000000;
    if (val === 'Lakh') {
      unit = constants.numberLakh;
    }
    if (val === 'Million') {
      unit = constants.numberMillion;
    }
    if (val === 'Crores') {
      unit = constants.numberCrore;
    }
    setCoversionUnit(unit);
  };

  const exportPDF = () => {
    const doc = new jsPDF('p', 'pt', [constants.pdfWidth, constants.pdfWidth]);
    doc.html(ReactDOMServer.renderToString(<MarginMoney marginData={marginData} />), {
      callback: function (doc) {
        const totalPages = doc.internal.getNumberOfPages();

        for (let i = 1; i <= totalPages; i++) {
          doc.setPage(i);
          doc.text(
            `Page ${i} of ${totalPages}`,
            doc.internal.pageSize.getWidth() / constants.numberTwo,
            doc.internal.pageSize.getHeight() - 1,
            {
              align: 'center',
            },
          );
        }
        doc.save('MarginMoney.pdf');
      },

      autoPaging: 'text',
    });
  };

  useEffect(() => {
    if (marginData) {
      setisConsigneeSameAsBuyer(marginData?.invoiceDetail?.isConsigneeSameAsBuyer === false ? false : true);
      if (marginData?.invoiceDetail?.isConsigneeSameAsBuyer === true) {
        setInvoiceData({
          buyerName: marginData?.company?.companyName || '',
          buyerGSTIN: marginData?.invoiceDetail?.buyerGSTIN || '',
          buyerAddress: marginData?.invoiceDetail?.buyerAddress || '',
          isConsigneeSameAsBuyer: marginData?.invoiceDetail?.isConsigneeSameAsBuyer || true,
          consigneeName: marginData?.company?.companyName || '',
          consigneeGSTIN: marginData?.invoiceDetail?.buyerGSTIN || '',
          consigneeAddress: marginData?.invoiceDetail?.buyerAddress || '',
          importerName:
            marginData?.invoiceDetail?.importerName ||
            marginData?.order?.termsheet?.otherTermsAndConditions?.buyer?.bank
              ?.toUpperCase()
              ?.replace(/ *\([^)]*\) */g, '') ||
            '',
          branchOffice: marginData?.invoiceDetail?.branchOffice || '',
          companyAddress: marginData?.invoiceDetail?.companyAddress || '',
          importerGSTIN: marginData?.invoiceDetail?.importerGSTIN || '',
          bankName: marginData?.invoiceDetail?.bankName || '',
          branch: marginData?.invoiceDetail?.branch || '',
          branchAddress: marginData?.invoiceDetail?.branchAddress || '',
          IFSCcode: marginData?.invoiceDetail?.IFSCcode || '',
          accountNo: marginData?.invoiceDetail?.accountNo || '',
        });
        setisConsigneeSameAsBuyer(marginData?.invoiceDetail?.isConsigneeSameAsBuyer === false ? false : true);
      } else {
        setInvoiceData({
          buyerName: marginData?.company?.companyName || '',
          buyerGSTIN: marginData?.invoiceDetail?.buyerGSTIN || '',
          buyerAddress: marginData?.invoiceDetail?.buyerAddress || '',
          isConsigneeSameAsBuyer: marginData?.invoiceDetail?.isConsigneeSameAsBuyer || true,
          consigneeName: marginData?.invoiceDetail?.consigneeName || '',
          consigneeGSTIN: marginData?.invoiceDetail?.consigneeGSTIN || '',
          consigneeAddress: marginData?.invoiceDetail?.consigneeAddress || '',
          importerName:
            marginData?.invoiceDetail?.importerName ||
            marginData?.order?.termsheet?.otherTermsAndConditions?.buyer?.bank
              ?.toUpperCase()
              ?.replace(/ *\([^)]*\) */g, '') ||
            '',
          branchOffice: marginData?.invoiceDetail?.branchOffice || '',
          companyAddress: marginData?.invoiceDetail?.companyAddress || '',
          importerGSTIN: marginData?.invoiceDetail?.importerGSTIN || '',
          bankName: marginData?.invoiceDetail?.bankName || '',
          branch: marginData?.invoiceDetail?.branch || '',
          branchAddress: marginData?.invoiceDetail?.branchAddress || '',
          IFSCcode: marginData?.invoiceDetail?.IFSCcode || '',
          accountNo: marginData?.invoiceDetail?.accountNo || '',
        });
      }
    }
  }, [marginData, getInternalCompaniesMasterData]);

  const [isConsigneeSameAsBuyerRevised, setisConsigneeSameAsBuyerRevised] = useState(true);

  useEffect(() => {
    getRevisedData();
    if (marginData) {
      setisConsigneeSameAsBuyerRevised(
        marginData?.revisedMarginMoney?.invoiceDetail?.isConsigneeSameAsBuyer === false ? false : true,
      );
      if (marginData?.revisedMarginMoney?.invoiceDetail?.isConsigneeSameAsBuyer === true) {
        setInvoiceDataRevised({
          buyerName: marginData?.company?.companyName || '',
          buyerGSTIN: marginData?.revisedMarginMoney?.invoiceDetail?.buyerGSTIN || '',
          buyerAddress: marginData?.revisedMarginMoney?.invoiceDetail?.buyerAddress || '',
          isConsigneeSameAsBuyer: marginData?.revisedMarginMoney?.invoiceDetail?.isConsigneeSameAsBuyer
            ? marginData?.revisedMarginMoney?.invoiceDetail?.isConsigneeSameAsBuyer
            : true,
          consigneeName:
            marginData?.revisedMarginMoney?.invoiceDetail?.consigneeName || marginData?.company?.companyName || '',
          consigneeGSTIN: marginData?.revisedMarginMoney?.invoiceDetail?.consigneeGSTIN || '',
          consigneeAddress: marginData?.revisedMarginMoney?.invoiceDetail?.consigneeAddress || '',
          importerName:
            marginData?.revisedMarginMoney?.invoiceDetail?.importerName ||
            marginData?.order?.termsheet?.otherTermsAndConditions?.buyer?.bank
              ?.toUpperCase()
              ?.replace(/ *\([^)]*\) */g, '') ||
            '',
          branchOffice: marginData?.revisedMarginMoney?.invoiceDetail?.branchOffice || '',
          companyAddress: marginData?.revisedMarginMoney?.invoiceDetail?.companyAddress || '',
          importerGSTIN: marginData?.revisedMarginMoney?.invoiceDetail?.importerGSTIN || '',
          bankName: marginData?.revisedMarginMoney?.invoiceDetail?.bankName || '',
          branch: marginData?.revisedMarginMoney?.invoiceDetail?.branch || '',
          branchAddress: marginData?.revisedMarginMoney?.invoiceDetail?.branchAddress || '',
          IFSCcode: marginData?.revisedMarginMoney?.invoiceDetail?.IFSCcode || '',
          accountNo: marginData?.revisedMarginMoney?.invoiceDetail?.accountNo || '',
        });
        setisConsigneeSameAsBuyerRevised(
          marginData?.revisedMarginMoney?.invoiceDetail?.isConsigneeSameAsBuyer === false ? false : true,
        );
      } else {
        setInvoiceDataRevised({
          buyerName: marginData?.company?.companyName || '',
          buyerGSTIN: marginData?.revisedMarginMoney?.invoiceDetail?.buyerGSTIN || '',
          buyerAddress: marginData?.revisedMarginMoney?.invoiceDetail?.buyerAddress || '',
          isConsigneeSameAsBuyer: marginData?.revisedMarginMoney?.invoiceDetail?.isConsigneeSameAsBuyer
            ? marginData?.revisedMarginMoney?.invoiceDetail?.isConsigneeSameAsBuyer
            : true,
          consigneeName:
            marginData?.revisedMarginMoney?.invoiceDetail?.consigneeName || marginData?.company?.companyName || '',
          consigneeGSTIN: marginData?.revisedMarginMoney?.invoiceDetail?.consigneeGSTIN || '',
          consigneeAddress: marginData?.revisedMarginMoney?.invoiceDetail?.consigneeAddress || '',
          importerName:
            marginData?.revisedMarginMoney?.invoiceDetail?.importerName ||
            marginData?.order?.termsheet?.otherTermsAndConditions?.buyer?.bank
              ?.toUpperCase()
              ?.replace(/ *\([^)]*\) */g, '') ||
            '',
          branchOffice: marginData?.revisedMarginMoney?.invoiceDetail?.branchOffice || '',
          companyAddress: marginData?.revisedMarginMoney?.invoiceDetail?.companyAddress || '',
          importerGSTIN: marginData?.revisedMarginMoney?.invoiceDetail?.importerGSTIN || '',
          bankName: marginData?.revisedMarginMoney?.invoiceDetail?.bankName || '',
          branch: marginData?.revisedMarginMoney?.invoiceDetail?.branch || '',
          branchAddress: marginData?.revisedMarginMoney?.invoiceDetail?.branchAddress || '',
          IFSCcode: marginData?.revisedMarginMoney?.invoiceDetail?.IFSCcode || '',
          accountNo: marginData?.revisedMarginMoney?.invoiceDetail?.accountNo || '',
        });
      }
    }
  }, [marginData]);

  useEffect(() => {
    getRevisedData2();
  }, [revisedCalc]);

  useEffect(() => {
    getDataRevised2();
  }, [marginData]);

  useEffect(() => {
    getDataRevised();
  }, [forCalculationRevised]);

  const exportPDFRevised = () => {
    const doc = new jsPDF('p', 'pt', [constants.pdfWidth, constants.pdfHeightRevisedMargin]);
    doc.html(ReactDOMServer.renderToString(<RevisedMarginPreviewTemp marginData={marginData} />), {
      callback: function (doc) {
        const totalPages = doc.internal.getNumberOfPages();

        for (let i = 1; i <= totalPages; i++) {
          doc.setPage(i);
          doc.text(
            `Page ${i} of ${totalPages}`,
            doc.internal.pageSize.getWidth() / constants.numberTwo,
            doc.internal.pageSize.getHeight() - 1,
            {
              align: 'center',
            },
          );
        }
        doc.save('RevisedMarginMoney.pdf');
      },
      autoPaging: 'text',
    });
  };

  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className={`${styles.title_header} d-flex align-items-center`}>
            <img
              onClick={() => Router.push('/margin-money')}
              className={`${styles.back_arrow} image_arrow mr-2 img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={`${styles.title} heading`}>
              <span>{_get(orderList, 'company.companyName', '')}</span>
            </h1>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link active`}
                data-toggle="tab"
                href="#Margin"
                role="tab"
                aria-controls="Margin"
                aria-selected="true"
                o
              >
                Margin Money
              </a>
            </li>
            {RevisedMarginMoneyTrue ? (
              <li className={`${styles.navItem} nav-item`}>
                <a
                  className={`${styles.navLink} navLink nav-link`}
                  data-toggle="tab"
                  href="#revisedMargin"
                  role="tab"
                  aria-controls="revisedMargin"
                  aria-selected="false"
                >
                  Revised Margin Money
                </a>
              </li>
            ) : null}

            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#Documents"
                role="tab"
                aria-controls="Documents"
                aria-selected="false"
              >
                Document
              </a>
            </li>
          </ul>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 px-0 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div className="tab-pane fade show active" id="Margin" role="tabpanel">
                  <div className={`${styles.card} vessel_card accordionMargin card border_color`}>
                    <div
                      className={`${styles.cardHeader} d-flex align-items-center justify-content-between`}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className={`${styles.commodity}`}>
                        <span className={`${styles.comm_head} sub_heading`}>Commodity</span>
                        <span className={`${styles.comm_val} heading`}>{marginData?.order?.commodity}</span>
                      </div>
                      <div className={`${styles.unit_container} d-flex align-items-center`}>
                        <div className={`${styles.pay} mr-5`}>
                          <strong className={`mr-2`}>Status:</strong>
                          <div className={`d-flex align-items-center justify-content-between`}>
                            <div className={`${styles.round} mr-2`}></div>
                            <span className={`heading`}>Payment Initiated</span>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className={`${styles.unit_container} d-flex align-items-center justify-content-evenly`}>
                            <h5 className={`${styles.unit_label} accordion_Text ml-5`}>Unit:</h5>
                            <select
                              className={`${styles.options} accordion_DropDown mr-4`}
                              name="unitOfQuantity"
                              onChange={(e) => {
                                saveOrderData(e.target.name, e.target.value);
                                coversionUnitHandler(e.target.value);
                              }}
                            >
                              <option disabled>Select</option>
                              <option selected value="Crores">
                                Crores
                              </option>
                              <option value="Million">Million</option>
                              <option value="Lakh">Lakh</option>
                            </select>
                          </div>
                        </div>

                        <span
                          data-toggle="collapse"
                          data-target="#commodityAccordion"
                          aria-expanded="true"
                          aria-controls="commodityAccordion"
                          style={{ marginTop: '-7px' }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div id="commodityAccordion" aria-labelledby="commodityAccordion" data-parent="#commodityAccordion">
                      <div className={`${styles.cardBody} card-body `}>
                        <div className={`${styles.content} border_color`}>
                          <div className={`${styles.input_container} row`}>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>A</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Quantity
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {marginData?.order?.quantity
                                    ? marginData?.order?.quantity?.toLocaleString('en-In', {
                                        maximumFractionDigits: 2,
                                      }) +
                                      ' ' +
                                      marginData?.order?.unitOfQuantity
                                    : ''}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>B</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Unit Price
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {marginData?.order?.orderCurrency}{' '}
                                  {marginData?.order?.perUnitPrice?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                  })}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>C</span>
                              </div>
                              <input
                                type="text"
                                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                                id="textInput"
                                name="conversionRate"
                                onChange={(e) => saveForCalculation(e.target.name, e.target.value)}
                                onWheel={(event) => event.currentTarget.blur()}
                                onFocus={(e) => {
                                  setIsFieldInFocus({
                                    ...isFieldInFocus,
                                    conversion: true,
                                  }),
                                    (e.target.type = 'number');
                                }}
                                onBlur={(e) => {
                                  setIsFieldInFocus({
                                    ...isFieldInFocus,
                                    conversion: false,
                                  }),
                                    (e.target.type = 'text');
                                }}
                                value={
                                  isFieldInFocus.conversion
                                    ? forCalculation?.conversionRate
                                    : checkNan(Number(forCalculation?.conversionRate))?.toLocaleString('en-In', {
                                        maximumFractionDigits: 2,
                                      })
                                }
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px' }}
                              >
                                Conversation Rate
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>D</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Usance Interest (%)
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading d-flex align-items-center`}>
                                  <div className={`${styles.include_cal} d-flex align-items-center`}>
                                    <span className="mr-3">
                                      {marginData?.order?.termsheet?.commercials?.usanceInterestPercetage}%
                                    </span>
                                    <label
                                      className={`${styles.label_heading} ${styles.subHeading} label_heading mb-0 mr-3`}
                                      id="textInput"
                                    >
                                      Include in Calculation
                                    </label>
                                    <Form>
                                      {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className={`${styles.radio_group} d-flex`}>
                                          <Form.Check
                                            className={`${styles.radio} radio`}
                                            inline
                                            label="Yes"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                            checked={forCalculation?.isUsanceInterestIncluded === true}
                                            onChange={(e) => saveForCalculation('isUsanceInterestIncluded', true)}
                                          />
                                          <Form.Check
                                            className={`${styles.radio} radio`}
                                            inline
                                            label="No"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                            checked={forCalculation?.isUsanceInterestIncluded === false}
                                            onChange={(e) => saveForCalculation('isUsanceInterestIncluded', false)}
                                          />
                                        </div>
                                      ))}
                                    </Form>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>E</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Trade Margin (%)
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {marginData?.order?.termsheet
                                    ? marginData?.order?.termsheet?.commercials?.tradeMarginPercentage?.toLocaleString(
                                        'en-In',
                                      ) + ' %'
                                    : ''}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>F</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Tolerance (+/-) Percentage
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {marginData?.order?.tolerance ? marginData?.order?.tolerance + ' %' : 0}
                                </div>
                              </div>
                            </div>

                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>G</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Margin Money (%)
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {marginData?.order?.termsheet
                                    ? marginData?.order?.termsheet?.transactionDetails?.marginMoney?.toLocaleString(
                                        'en-In',
                                      ) + ' %'
                                    : ''}
                                </div>
                              </div>
                            </div>

                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>H</span>
                              </div>
                              <input
                                type="text"
                                id="textInput"
                                name="numberOfPDC"
                                onWheel={(event) => event.currentTarget.blur()}
                                onFocus={(e) => {
                                  setIsFieldInFocus({
                                    ...isFieldInFocus,
                                    noOfPdcs: true,
                                  }),
                                    (e.target.type = 'number');
                                }}
                                onBlur={(e) => {
                                  setIsFieldInFocus({
                                    ...isFieldInFocus,
                                    noOfPdcs: false,
                                  }),
                                    (e.target.type = 'text');
                                }}
                                value={
                                  isFieldInFocus.noOfPdcs
                                    ? forCalculation?.numberOfPDC
                                    : checkNan(Number(forCalculation?.numberOfPDC))?.toLocaleString('en-In')
                                }
                                onChange={(e) => saveForCalculation(e.target.name, e.target.value)}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px' }}
                              >
                                No. of PDC's
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>I</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Additional PDC's
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.content} border_color`}>
                          <span>Calculation</span>
                          <div className={`${styles.input_container} row`}>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>J</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Order Value <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>{`(A*B)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {marginData?.order?.orderCurrency}{' '}
                                  {Number(finalCal.orderValue).toLocaleString(
                                    marginData?.order?.orderCurrency === 'INR' ? 'en-IN' : 'en-EN',
                                    {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2,
                                    },
                                  )}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>K</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Order Value (INR) <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>{`(J*C)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {convertValue(finalCal.orderValueInINR, coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>L</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Usance Interest (%) for 90 days (INR) <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(K*D*90/365)`}{' '}
                                    <div className={`${styles.tooltip}`}>
                                      <img className={`ml-2 mt-n1 img-fluid`} src="/static/info-circle.svg" />
                                      <span className={`${styles.tooltiptext}`}>Indicative Figures</span>
                                    </div>
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  ₹ 
                                  {convertValue(finalCal.usanceInterest, coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>M</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Trade Margin (INR) <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>{`(K*E)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  ₹ 
                                  {convertValue(finalCal.tradeMargin, coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>N</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Gross Order Value (INR) <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>{`(K+L+M)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  ₹{' '}
                                  {convertValue(finalCal.grossOrderValue, coversionUnit)?.toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>O</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Tolerance Value (INR) <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>{`(N*F)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  ₹{' '}
                                  {convertValue(finalCal.toleranceValue, coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>P</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Total Order Value (INR) <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>{`(N+O)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  ₹{' '}
                                  {convertValue(finalCal.totalOrderValue, coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>Q</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Provisional Unit Price Per Ton (INR) <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>{`(N/A)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  ₹{' '}
                                  {convertValue(finalCal.provisionalUnitPricePerTon, coversionUnit).toLocaleString(
                                    'en-In',
                                    {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2,
                                    },
                                  )}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>R</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Margin Money (INR)
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>{`(P*G)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  ₹ 
                                  {convertValue(finalCal.marginMoney, coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>S</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Total SPDC Amount Req. (INR)
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>{`(P-R)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  ₹ 
                                  {convertValue(finalCal.totalSPDC, coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>T</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Amount per SPDC (INR)
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>{`(S/H)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  ₹{' '}
                                  {convertValue(finalCal.amountPerSPDC, coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles.card} ${styles.lastComponent} vessel_card accordionMargin card border_color`}
                  >
                    <div
                      className={`${styles.cardHeader}  d-flex align-items-center justify-content-between`}
                      data-toggle="collapse"
                      data-target="#invoiceDetails"
                      aria-expanded="true"
                      aria-controls="invoiceDetails"
                    >
                      <h2 className="mb-0">Invoice Details</h2>
                      <span className="ml-3">+</span>
                    </div>
                    <div
                      id="invoiceDetails"
                      className="collapse"
                      aria-labelledby="invoiceDetails"
                      data-parent="#invoiceDetails"
                    >
                      <div className={`${styles.cardBody} card-body `}>
                        <div className={`${styles.content} border_color`}>
                          <div className={`${styles.input_container} row`}>
                            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                              <input
                                type="text"
                                id="textInput"
                                name="buyerName"
                                defaultValue={invoiceData.buyerName}
                                className={`${styles.input_field} input form-control`}
                                required
                                onChange={(e) => {
                                  saveInvoiceData(e.target.name, e.target.value);
                                }}
                              />
                              <label className={`${styles.label_heading} label_heading`} id="textInput">
                                Buyer Name
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                              <div className="d-flex">
                                <select
                                  id="Code"
                                  name="buyerGSTIN"
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  onChange={(e) => {
                                    saveInvoiceData(e.target.name, e.target.value);
                                  }}
                                  value={invoiceData?.buyerGSTIN}
                                >
                                  <option selected value="">
                                    Select an Option
                                  </option>
                                  {orderList?.company?.gstList?.map((gstin, index) => (
                                    <option key={index} value={gstin}>
                                      {gstin}
                                    </option>
                                  ))}
                                </select>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Buyer GSTIN
                                  <strong className="text-danger">*</strong>
                                </label>
                                <img
                                  className={`img-fluid image_arrow ${styles.arrow}`}
                                  src="/static/inputDropDown.svg"
                                />
                              </div>
                            </div>
                            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                              <input
                                type="text"
                                id="textInput"
                                name="buyerAddress"
                                value={invoiceData?.buyerAddress}
                                className={`${styles.input_field} input form-control`}
                                required
                                onChange={(e) => {
                                  saveInvoiceData(e.target.name, e.target.value);
                                }}
                              />
                              <label className={`${styles.label_heading} label_heading`} id="textInput">
                                Buyer Address
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div className={`${styles.radio_form} col-md-12`}>
                              <div className={`${styles.label_heading} label_heading`}>
                                Is Consignee same as Buyer
                                <strong className="text-danger">*</strong>
                              </div>
                              <Form>
                                {['radio'].map((type) => (
                                  <div key={`inline-${type}`} className={styles.radio_group}>
                                    <Form.Check
                                      className={`${styles.radio} radio`}
                                      inline
                                      label="Yes"
                                      onChange={(e) => {
                                        setisConsigneeSameAsBuyer(true);

                                        setSame(true);
                                      }}
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-1`}
                                      checked={isConsigneeSameAsBuyer === true ? 'checked' : ''}
                                    />
                                    <Form.Check
                                      className={`${styles.radio} radio`}
                                      inline
                                      label="No"
                                      onChange={(e) => {
                                        setisConsigneeSameAsBuyer(false);
                                        setSame(false);
                                      }}
                                      checked={isConsigneeSameAsBuyer === false ? 'checked' : ''}
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                ))}
                              </Form>
                            </div>
                            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                              <input
                                type="text"
                                id="textInput"
                                name="consigneeName"
                                value={invoiceData?.consigneeName}
                                onChange={(e) => saveInvoiceData(e.target.name, e.target.value)}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label className={`${styles.label_heading} label_heading`} id="textInput">
                                Consignee Name
                              </label>
                            </div>
                            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                              <div className="d-flex">
                                <input
                                  type="text"
                                  id="textInput"
                                  name="consigneeGSTIN"
                                  value={invoiceData?.consigneeGSTIN}
                                  onChange={(e) => saveInvoiceData(e.target.name, e.target.value)}
                                  className={`${styles.input_field} input form-control`}
                                  required
                                />
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Consignee GSTIN
                                  <strong className="text-danger">*</strong>
                                </label>
                              </div>
                            </div>
                            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                              <input
                                type="text"
                                id="textInput"
                                name="consigneeAddress"
                                onChange={(e) => saveInvoiceData(e.target.name, e.target.value)}
                                value={invoiceData?.consigneeAddress}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label className={`${styles.label_heading} label_heading`} id="textInput">
                                Consignee Address
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.content} border_color`}>
                          <div className={`${styles.input_container} row`}>
                            <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                              <div className="d-flex">
                                <select
                                  id="Code"
                                  name="importerName"
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  value={invoiceData?.importerName}
                                  onChange={(e) => dropDownChange(e.target.name, e.target.value)}
                                  style={{ paddingRight: '40px' }}
                                  disabled
                                >
                                  <option value="INDO GERMAN INTERNATIONAL PRIVATE LIMITED">
                                    INDO GERMAN INTERNATIONAL PRIVATE LIMITED
                                  </option>
                                  <option value="EMERGENT INDUSTRIAL SOLUTIONS LIMITED">
                                    EMERGENT INDUSTRIAL SOLUTIONS LIMITED
                                  </option>
                                </select>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Importer Name
                                  <strong className="text-danger">*</strong>
                                </label>
                                <img
                                  className={`img-fluid image_arrow ${styles.arrow}`}
                                  src="/static/inputDropDown.svg"
                                ></img>
                              </div>
                            </div>
                            <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                              <div className="d-flex">
                                <select
                                  id="Code"
                                  name="branchOffice"
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  value={
                                    changeImporterData?.branch ? changeImporterData?.branch : invoiceData?.branchOffice
                                  }
                                  onChange={(e) => {
                                    const filter = getInternalCompaniesMasterData.filter((val, index) => {
                                      if (val.keyAddresses.length > 0) {
                                        if (
                                          val.keyAddresses[0].Branch === e.target.value &&
                                          val.Company_Name?.toLowerCase() === invoiceData?.importerName?.toLowerCase()
                                        ) {
                                          return val;
                                        }
                                      }
                                    });

                                    if (filter.length > 0) {
                                      const newInput = { ...invoiceData };
                                      changeImporterData.address = filter[0].keyAddresses[0].fullAddress;
                                      newInput['companyAddress'] = filter[0].keyAddresses[0].fullAddress;

                                      changeImporterData.GSTIN = filter[0].keyAddresses[0].gstin;
                                      newInput['importerGSTIN'] = filter[0].keyAddresses[0].gstin;

                                      newInput['branchOffice'] = e.target.value;
                                      changeImporterData.branch = e.target.value;
                                      setChangeImporterData({
                                        ...changeImporterData,
                                      });
                                      setInvoiceData({ ...newInput });
                                    }
                                  }}
                                >
                                  <option value="">Select an option</option>
                                  {[...new Set(branchOptions.map((item) => item.keyAddresses[0].Branch))]
                                    .filter((val, index) => {
                                      if (val !== undefined) {
                                        return val;
                                      }
                                    })
                                    .map((val, index) => {
                                      return <option value={`${val}`}>{val}</option>;
                                    })}
                                </select>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Branch Office
                                  <strong className="text-danger">*</strong>
                                </label>
                                <img
                                  className={`img-fluid image_arrow ${styles.arrow}`}
                                  src="/static/inputDropDown.svg"
                                ></img>
                              </div>
                            </div>

                            <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                              <input
                                type="text"
                                id="textInput"
                                value={
                                  changeImporterData?.address
                                    ? changeImporterData?.address
                                    : invoiceData?.companyAddress
                                }
                                name="companyAddress"
                                onChange={(e) => changeImporter(e)}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label className={`${styles.label_heading} label_heading`} id="textInput">
                                Company Address
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                              <input
                                type="text"
                                id="textInput"
                                name="importerGSTIN"
                                onChange={(e) => changeImporter(e)}
                                value={
                                  changeImporterData?.GSTIN ? changeImporterData?.GSTIN : invoiceData?.importerGSTIN
                                }
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label className={`${styles.label_heading} label_heading`} id="textInput">
                                Importer GSTIN
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>

                            <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                              <div className="d-flex">
                                <select
                                  type="text"
                                  id="Code"
                                  name="bankName"
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  value={invoiceData?.accountNo ? invoiceData?.accountNo : invoiceData?.Bank_Name}
                                  onChange={(e) => {
                                    saveInvoiceData(e.target.name, e.target.value);

                                    const filter = getInternalCompaniesMasterData.filter((val, index) => {
                                      if (val.keyBanks.length > 0) {
                                        if (
                                          val.keyBanks[0].Account_No === e.target.value &&
                                          val.Company_Name === invoiceData?.importerName
                                        ) {
                                          return val;
                                        }
                                      }
                                    });

                                    if (filter.length === 0) {
                                      saveData('branchAddress', '', 'IFSCcode', '', '', '', '', '');
                                      return;
                                    }

                                    saveData(
                                      'branchAddress',
                                      filter[0].keyBanks[0].Branch_Address === undefined
                                        ? ''
                                        : filter[0].keyBanks[0].Branch_Address,
                                      'IFSCcode',
                                      filter[0].keyBanks[0].IFSC === undefined ? '' : filter[0].keyBanks[0].IFSC,
                                      e.target.value,
                                      filter[0].keyBanks[0].Account_No === undefined
                                        ? ''
                                        : filter[0].keyBanks[0].Account_No,
                                      filter[0].keyBanks[0].branchType === undefined
                                        ? ''
                                        : filter[0].keyBanks[0].branchType,
                                      filter[0].keyBanks[0].Bank_Name === undefined
                                        ? ''
                                        : filter[0].keyBanks[0].Bank_Name,
                                    );
                                  }}
                                >
                                  <option value="">Select an option</option>
                                  {branchOptions
                                    .filter((val, index) => {
                                      if (val.keyBanks[0].Bank_Name) {
                                        return val;
                                      }
                                    })
                                    .map((val, index) => {
                                      return (
                                        <option key={index} value={`${val.keyBanks[0].Account_No}`}>
                                          {val.keyBanks[0].Bank_Name}
                                        </option>
                                      );
                                    })}
                                </select>
                                <label className={`${styles.label_heading} label_heading`} id="textInput">
                                  Bank Name
                                  <strong className="text-danger">*</strong>
                                </label>
                                <img
                                  className={`img-fluid  image_arrow ${styles.arrow}`}
                                  src="/static/inputDropDown.svg"
                                ></img>
                              </div>
                            </div>
                            <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                              <input
                                type="text"
                                id="textInput"
                                name="branch"
                                onChange={(e) => saveInvoiceData(e.target.name, e.target.value)}
                                value={invoiceData?.branch}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label className={`${styles.label_heading} label_heading`} id="textInput">
                                Branch
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>

                            <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                              <input
                                type="text"
                                id="textInput"
                                name="branchAddress"
                                onChange={(e) => saveInvoiceData(e.target.name, e.target.value)}
                                value={invoiceData?.branchAddress}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label className={`${styles.label_heading} label_heading`} id="textInput">
                                Branch Address
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                              <input
                                id="textInput"
                                name="IFSCcode"
                                onChange={(e) => saveInvoiceData(e.target.name, e.target.value)}
                                value={invoiceData?.IFSCcode}
                                className={`${styles.input_field} input form-control`}
                                required
                              />

                              <label className={`${styles.label_heading} label_heading`} id="textInput">
                                IFSC Code
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                              <input
                                type="text"
                                id="textInput"
                                name="accountNo"
                                value={invoiceData?.accountNo}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label className={`${styles.label_heading} label_heading`} id="textInput">
                                A/C Number
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <DownloadBar
                    downLoadButtonName={`Download`}
                    handleReject={exportPDF}
                    isPrevious={true}
                    handleUpdate={handleUpdate}
                    leftButtonName={`Save`}
                    rightButtonName={`Preview`}
                    handleApprove={routeChange}
                    isApprove
                  />
                </div>

                {RevisedMarginMoneyTrue ? (
                  <div className="tab-pane fade" id="revisedMargin" role="tabpanel">
                    <div className={`${styles.card}  accordion_body`}>
                      <RevisedMargin
                        marginData={marginData}
                        finalCal={finalCal}
                        finalCalRevised={finalCalRevised}
                        forCalculationRevised={forCalculationRevised}
                        saveInvoiceDataRevisedRevised={saveInvoiceDataRevisedRevised}
                        setSameRevised={setSameRevised}
                        invoiceDataRevised={invoiceDataRevised}
                        setInvoiceDataRevised={setInvoiceDataRevised}
                        saveForCalculation={saveForCalculation}
                        calcRevised={calcRevised}
                        handleUpdateRevisedMarginMoney={handleUpdateRevisedMarginMoney}
                        saveforCalculationRevised={saveforCalculationRevised}
                        exportPDF={() => {
                          exportPDFRevised();
                        }}
                        getBanksMasterData={getBanksMasterData}
                        getBranchesMasterData={getBranchesMasterData}
                        getInternalCompaniesMasterData={getInternalCompaniesMasterData}
                        savedataRevised={savedataRevised}
                        orderList={orderList}
                        setisConsigneeSameAsBuyerRevised={setisConsigneeSameAsBuyerRevised}
                        isConsigneeSameAsBuyerRevised={isConsigneeSameAsBuyerRevised}
                      />
                    </div>
                  </div>
                ) : null}

                <div className="tab-pane fade" id="Documents" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <UploadOther module={['Leads', 'Margin Money']} orderid={id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
