/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import TermDetails from '../TermDetails';
import AdditionalComment from '../AdditionalComment';
import OtherTerms from '../OtherTerms';
import UploadOther from '../UploadOther';
import ApproveBar from '../ApproveBar';
import { useDispatch, useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router';

import { GetTermsheet, updateTermsheet } from 'redux/buyerProfile/action';
import _get from 'lodash/get';
import { removePrefixOrSuffix } from '../../utils/helper';
import moment from 'moment';
import { toast } from 'react-toastify';
import { setDynamicName, setDynamicOrder, setPageName } from '../../redux/userData/action';
import Loader from '../Loader/index';
import { getCommodities, getCountries, getCurrency, getPorts } from '../../redux/masters/action';

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { termsheet, gettingTermsheet } = useSelector((state) => state.order);
  const [payloadData, setPayloadData] = useState({});
  const [termsheetDetails, setTermsheetDetails] = useState({});
  const [otherTermsAndConditions, setOtherTermConditions] = useState({});
  const [additionalComments, setAdditionalComments] = useState([]);
  const [order, setOrder] = useState('');

  let sheetData = _get(termsheet, 'data[0]', {});
  useEffect(() => {
    let Id = sessionStorage.getItem('termID');

    dispatch(GetTermsheet(`?termsheetId=${Id}`));
  }, [dispatch]);
  let OrdID = sessionStorage.getItem('termOrdID');
  let newLcVal =
    removePrefixOrSuffix(termsheetDetails?.commodityDetails?.quantity) *
    removePrefixOrSuffix(termsheetDetails?.commodityDetails?.perUnitPrice);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getPorts());
    dispatch(getCommodities());
    dispatch(getCurrency());
  }, []);
  const { getPortsMasterData } = useSelector((state) => state.MastersData);
  const { getCountriesMasterData } = useSelector((state) => state.MastersData);
  const { getCommoditiesMasterData } = useSelector((state) => state.MastersData);
  const { getCurrencyMasterData } = useSelector((state) => state.MastersData);
  useEffect(() => {
    {
      dispatch(setPageName('termsheet'));
      dispatch(setDynamicName(sheetData?.company?.companyName));
      dispatch(
        setDynamicOrder(sheetData?.order?.orderId ? sheetData?.order?.orderId : sheetData?.order?.applicationId),
      );
      termsheet &&
        termsheet?.data?.map((sheet) =>
          setTermsheetDetails({
            termsheetId: sheet._id,
            commodityDetails: {
              unitOfQuantity: sheet?.order?.unitOfQuantity,
              orderCurrency: sheet?.order?.orderCurrency || 'USD',
              quantity: sheet?.order?.quantity,
              perUnitPrice:
                sheet?.order?.perUnitPrice || Number(sheet?.order?.orderValue / sheet?.order.quantity).toFixed(2) || '',
              commodity: sheet?.order?.commodity,
              tolerance: sheet?.order?.tolerance ?? '',
            },
            transactionDetails: {
              typeOfPort: sheet?.transactionDetails?.typeOfPort ?? '',
              lcValue: newLcVal ? newLcVal : sheet?.transactionDetails?.lcValue,
              lcCurrency: sheet?.transactionDetails?.lcCurrency,
              marginMoney: sheet?.transactionDetails?.marginMoney ? sheet?.transactionDetails?.marginMoney : 10,
              lcOpeningBank: sheet?.transactionDetails?.lcOpeningBank || 'First Class European Bank',
              incoTerms: sheet?.transactionDetails?.incoTerms
                ? sheet?.transactionDetails?.incoTerms
                : sheet?.order?.incoTerm,
              loadPort: sheet?.transactionDetails?.loadPort ?? sheet?.order?.shipmentDetail?.portOfLoading,
              countryOfOrigin: sheet?.transactionDetails?.countryOfOrigin
                ? sheet?.transactionDetails?.countryOfOrigin
                : sheet?.order?.countryOfOrigin,
              shipmentType: sheet?.transactionDetails?.shipmentType ?? sheet?.order?.shipmentDetail?.shipmentType,

              partShipmentAllowed: sheet?.transactionDetails?.partShipmentAllowed,
              portOfDischarge: sheet?.transactionDetails?.portOfDischarge
                ? sheet?.transactionDetails?.portOfDischarge
                : sheet?.order?.portOfDischarge,
              billOfEntity: sheet?.transactionDetails?.billOfEntity,
              thirdPartyInspectionReq: sheet?.transactionDetails?.thirdPartyInspectionReq,
              storageOfGoods: sheet?.transactionDetails?.storageOfGoods
                ? sheet?.transactionDetails?.storageOfGoods
                : sheet?.order?.portOfDischarge,
            },
            paymentDueDate: {
              computationOfDueDate: sheet?.paymentDueDate?.computationOfDueDate,
              daysFromBlDate: sheet?.paymentDueDate?.daysFromBlDate,
              daysFromVesselDischargeDate: sheet?.paymentDueDate?.daysFromVesselDischargeDate,
            },
            commercials: {
              tradeMarginPercentage: sheet?.commercials?.tradeMarginPercentage || 2.25,
              lcOpeningValue: sheet?.commercials?.lcOpeningValue,
              lcOpeningCurrency: sheet?.commercials?.lcOpeningCurrency,
              lcOpeningChargesUnit: sheet?.commercials?.lcOpeningChargesUnit || 1500,
              lcOpeningChargesPercentage: sheet?.commercials?.lcOpeningChargesPercentage || 1.5,
              usanceInterestPercetage: sheet?.commercials?.usanceInterestPercetage || 4,
              overDueInterestPerMonth: sheet?.commercials?.overDueInterestPerMonth || 1.5,
              exchangeFluctuation: sheet?.commercials?.exchangeFluctuation || 'On Buyers A/C',
              forexHedging: sheet?.commercials?.forexHedging,
              otherTermsAndConditions: sheet?.commercials?.otherTermsAndConditions || 'As per the Agreements',
              version: sheet?.commercials?.version || '1',
            },
          }),
        );
    }
  }, [termsheet]);

  useEffect(() => {
    {
      termsheet &&
        termsheet?.data?.map((sheet, index) => {
          setOtherTermConditions({
            buyer: {
              bank: sheet?.otherTermsAndConditions?.buyer?.bank || 'Indo German International Private Limited (IGPL)',
            },
            chaOrstevedoringCharges: {
              customClearingCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.customClearingCharges,
              wharfaceCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.wharfaceCharges,
              pollutionCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.pollutionCharges,
              royalyAndPenaltyCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.royalyAndPenaltyCharges,
              tarpaulinCoverageCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.tarpaulinCoverageCharges,
              wheighmentAndWeighmentSurveyCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.wheighmentAndWeighmentSurveyCharges,
              draughtSurveyCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.draughtSurveyCharges,
              boatingWhileDraughtSurveyCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.boatingWhileDraughtSurveyCharges,
              hmcCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.hmcCharges,
              securityCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.securityCharges,
              piotRentalAndStorageCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.piotRentalAndStorageCharges,
              bondingOfCargoCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.bondingOfCargoCharges,
              exBondDocumentationCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.exBondDocumentationCharges,
              transferOfOwnershipCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.transferOfOwnershipCharges,
              customsBondOfficerOvertimeCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.customsBondOfficerOvertimeCharges,
              grabHireCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.grabHireCharges,
              craneHireCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.craneHireCharges,
              handlingLosses: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.handlingLosses,
              insuranceCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.insuranceCharges,
              waterSprinklingCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.waterSprinklingCharges,
              others: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.others,
            },
            lcOpeningCharges: {
              lcOpeningCharges: sheet?.otherTermsAndConditions?.lcOpeningCharges?.lcOpeningCharges,
              lcAmendmentCost: sheet?.otherTermsAndConditions?.lcOpeningCharges?.lcAmendmentCost,
              cmaFeesIncludingSupervisionAndSurvey:
                sheet?.otherTermsAndConditions?.lcOpeningCharges?.cmaFeesIncludingSupervisionAndSurvey,
              bankDoIssuanceCharges: sheet?.otherTermsAndConditions?.lcOpeningCharges?.bankDoIssuanceCharges,
              remmittanceCharges: sheet?.otherTermsAndConditions?.lcOpeningCharges?.remmittanceCharges,
              usanceInterest: sheet?.otherTermsAndConditions?.lcOpeningCharges?.usanceInterest,
            },
            otherCharges: {
              demurrageOrDetentionChargesOfVessel:
                sheet?.otherTermsAndConditions?.otherCharges?.demurrageOrDetentionChargesOfVessel,
              transportationCharges: sheet?.otherTermsAndConditions?.otherCharges?.transportationCharges,
              wagonHaulageCharges: sheet?.otherTermsAndConditions?.otherCharges?.wagonHaulageCharges,
              thirdPartyInspectionCharges: sheet?.otherTermsAndConditions?.otherCharges?.thirdPartyInspectionCharges,
              hedgingCharges: sheet?.otherTermsAndConditions?.otherCharges?.hedgingCharges,
              anyOtherCostIncurredOnBehalfOfBuyer:
                sheet?.otherTermsAndConditions?.otherCharges?.anyOtherCostIncurredOnBehalfOfBuyer,
            },
            dutyAndTaxes: {
              customsDutyWithAllGovtCess: sheet?.otherTermsAndConditions?.dutyAndTaxes?.customsDutyWithAllGovtCess,
              igstWithCess: sheet?.otherTermsAndConditions?.dutyAndTaxes?.igstWithCess,
              cimsCharges: sheet?.otherTermsAndConditions?.dutyAndTaxes?.cimsCharges,
              taxCollectedatSource: sheet?.otherTermsAndConditions?.dutyAndTaxes?.taxCollectedatSource || true,
            },
            insurance: {
              marineInsurance: sheet?.otherTermsAndConditions?.insurance?.marineInsurance,
              storageInsurance: sheet?.otherTermsAndConditions?.insurance?.storageInsurance,
            },
          });
        });
    }
  }, [termsheet]);

  useEffect(() => {
    let comments = JSON.parse(JSON.stringify(_get(termsheet, 'data[0].additionalComments', [{}])));

    setAdditionalComments([...comments]);
  }, [termsheet]);

  const onChangeCommodityDetails = (e) => {
    const Key = e.target.id;
    const value = e.target.value;

    setTermsheetDetails((prev) => ({
      ...prev,
      commodityDetails: { ...prev.commodityDetails, [Key]: value },
    }));
  };
  const onChangeCommodityDetails2 = (name, value) => {
    setTermsheetDetails((prev) => ({
      ...prev,
      commodityDetails: { ...prev.commodityDetails, [name]: value },
    }));
  };

  const onChangeTransactionDetails = (e) => {
    const Key = e.target.id;
    const value = e.target.value;

    setTermsheetDetails((prev) => ({
      ...prev,
      transactionDetails: { ...prev.transactionDetails, [Key]: value },
    }));
  };

  const onChangePaymentDueDate = (e) => {
    const Key = e.target.id;
    const value = e.target.value;

    setTermsheetDetails((prev) => ({
      ...prev,
      paymentDueDate: { ...prev.paymentDueDate, [Key]: value },
    }));
  };

  const onChangeCommercialTerms = (e) => {
    const Key = e.target.id;
    const value = e.target.value;

    setTermsheetDetails((prev) => ({
      ...prev,
      commercials: { ...prev.commercials, [Key]: value },
    }));
  };

  const onChangeCha = (e) => {
    const Key = e.target.id;
    const value = !otherTermsAndConditions?.chaOrstevedoringCharges[Key];

    setOtherTermConditions((prev) => ({
      ...prev,
      chaOrstevedoringCharges: {
        ...prev.chaOrstevedoringCharges,
        [Key]: value,
      },
    }));
  };

  const onChangeLcOpening = (e) => {
    const Key = e.target.id;
    const value = !otherTermsAndConditions?.lcOpeningCharges[Key];

    setOtherTermConditions((prev) => ({
      ...prev,
      lcOpeningCharges: { ...prev.lcOpeningCharges, [Key]: value },
    }));
  };
  const onChangeOther = (e) => {
    const Key = e.target.id;
    const value = !otherTermsAndConditions?.otherCharges[Key];
    setOtherTermConditions((prev) => ({
      ...prev,
      otherCharges: { ...prev.otherCharges, [Key]: value },
    }));
  };
  const onChangeDutyAndTaxes = (e) => {
    const Key = e.target.id;
    const value = !otherTermsAndConditions?.dutyAndTaxes[Key];
    setOtherTermConditions((prev) => ({
      ...prev,
      dutyAndTaxes: { ...prev.dutyAndTaxes, [Key]: value },
    }));
  };
  const onChangeInsurance = (e) => {
    const Key = e.target.id;
    const value = !otherTermsAndConditions?.insurance[Key];
    setOtherTermConditions((prev) => ({
      ...prev,
      insurance: { ...prev.insurance, [Key]: value },
    }));
  };

  const changePayment = () => { };

  const handleSave = async () => {
    let tempSheet = { ...termsheetDetails };

    tempSheet.transactionDetails.lcValue = newLcVal;
    // tempSheet.commodityDetails.perUnitPrice = removePrefixOrSuffix(termsheetDetails.commodityDetails.perUnitPrice);
    // tempSheet.commodityDetails.quantity = removePrefixOrSuffix(termsheetDetails.commodityDetails.quantity);
    // tempSheet.transactionDetails.marginMoney = removePrefixOrSuffix(termsheetDetails.transactionDetails.marginMoney);
    // tempSheet.commercials.tradeMarginPercentage = removePrefixOrSuffix(
    //   termsheetDetails.commercials.tradeMarginPercentage,
    // );
    // tempSheet.commercials.overDueInterestPerMonth = removePrefixOrSuffix(
    //   termsheetDetails.commercials.overDueInterestPerMonth,
    // );
    // tempSheet.commercials.lcOpeningChargesPercentage = removePrefixOrSuffix(
    //   termsheetDetails.commercials.lcOpeningChargesPercentage,
    // );
    // tempSheet.commercials.usanceInterestPercetage = removePrefixOrSuffix(
    //   termsheetDetails.commercials.usanceInterestPercetage,
    // );
    // tempSheet.commodityDetails.tolerance = removePrefixOrSuffix(termsheetDetails.commodityDetails.tolerance);
    // tempSheet.commercials.lcOpeningChargesUnit = removePrefixOrSuffix(
    //   termsheetDetails.commercials.lcOpeningChargesUnit,
    // ).toString();

    if (
      termsheetDetails.commodityDetails.unitOfQuantity == '' ||
      termsheetDetails.commodityDetails.unitOfQuantity == undefined
    ) {
      let toastMessage = 'Please add unit Of Quantity ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.commodityDetails.orderCurrency == '' ||
      termsheetDetails.commodityDetails.orderCurrency == undefined
    ) {
      let toastMessage = 'Please add order Currency ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (termsheetDetails.commodityDetails.quantity == '' || termsheetDetails.commodityDetails.quantity == undefined) {
      let toastMessage = 'Please add quantity';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }

    if (
      termsheetDetails.commodityDetails.perUnitPrice == '' ||
      termsheetDetails.commodityDetails.perUnitPrice?.toString() == 'NaN' ||
      termsheetDetails.commodityDetails.perUnitPrice == undefined
    ) {
      let toastMessage = 'Please add per Unit Price';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (termsheetDetails.commodityDetails.commodity == '' || termsheetDetails.commodityDetails.commodity == undefined) {
      let toastMessage = 'Please add commodity';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (termsheetDetails.commodityDetails.tolerance == '' || termsheetDetails.commodityDetails.tolerance == undefined) {
      let toastMessage = 'Please add tolerance';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }

    if (
      termsheetDetails.transactionDetails.lcValue == '' ||
      Number.isNaN(termsheetDetails.transactionDetails.lcValue) ||
      termsheetDetails.transactionDetails.lcValue == undefined
    ) {
      let toastMessage = 'Please add lc Value ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }

    if (
      termsheetDetails.transactionDetails.marginMoney == '' ||
      termsheetDetails.transactionDetails.marginMoney == undefined
    ) {
      let toastMessage = 'Please add margin Money ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.lcOpeningBank == '' ||
      termsheetDetails.transactionDetails.lcOpeningBank == undefined
    ) {
      let toastMessage = 'Please add  lc Opening Bank ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.incoTerms == '' ||
      termsheetDetails.transactionDetails.incoTerms == undefined
    ) {
      let toastMessage = 'Please add inco Terms ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.loadPort == '' ||
      termsheetDetails.transactionDetails.loadPort == undefined
    ) {
      let toastMessage = 'Please add load Port ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.countryOfOrigin == '' ||
      termsheetDetails.transactionDetails.countryOfOrigin == undefined
    ) {
      let toastMessage = 'Please add country Of Origin ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.shipmentType == '' ||
      termsheetDetails.transactionDetails.shipmentType == undefined
    ) {
      let toastMessage = 'Please add shipment Type ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.partShipmentAllowed == '' ||
      termsheetDetails.transactionDetails.partShipmentAllowed == undefined
    ) {
      let toastMessage = 'Please add part Shipment Allowed ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.portOfDischarge == '' ||
      termsheetDetails.transactionDetails.portOfDischarge == undefined
    ) {
      let toastMessage = 'Please add port Of Discharge';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.billOfEntity == '' ||
      termsheetDetails.transactionDetails.billOfEntity == undefined
    ) {
      let toastMessage = 'Please add bill Of Entry';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (termsheetDetails.transactionDetails.thirdPartyInspectionReq == undefined) {
      let toastMessage = 'Please add third Party InspectionReq';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.storageOfGoods == '' ||
      termsheetDetails.transactionDetails.storageOfGoods == undefined
    ) {
      let toastMessage = 'Please add storage Of Goods';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.portOfDischarge == 'Select an option' ||
      termsheetDetails.transactionDetails.portOfDischarge == '' ||
      termsheetDetails.transactionDetails.portOfDischarge == undefined
    ) {
      let toastMessage = 'Please add port Of Discharge ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails?.paymentDueDate?.computationOfDueDate == '' ||
      termsheetDetails?.paymentDueDate?.computationOfDueDate == undefined
    ) {
      let toastMessage = 'Please select a option for computation of due date';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }

    if (termsheetDetails?.paymentDueDate?.computationOfDueDate === 'DaysfromBLDate') {
      if (
        termsheetDetails.paymentDueDate.daysFromBlDate == '' ||
        termsheetDetails.paymentDueDate.daysFromBlDate == undefined
      ) {
        let toastMessage = 'Please add days From Bl Date ';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        return;
      }
    }

    if (termsheetDetails?.paymentDueDate?.computationOfDueDate === 'DaysfromVesselDischargeDate') {
      if (
        termsheetDetails.paymentDueDate.daysFromVesselDischargeDate == '' ||
        termsheetDetails.paymentDueDate.daysFromVesselDischargeDate == undefined
      ) {
        let toastMessage = 'Please add days From vessel discharge date Date ';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        return;
      }
    }

    if (termsheetDetails?.paymentDueDate?.computationOfDueDate === 'Whicheverisearlier') {
      if (
        termsheetDetails.paymentDueDate.daysFromBlDate == '' ||
        termsheetDetails.paymentDueDate.daysFromBlDate == undefined
      ) {
        let toastMessage = 'Please add days From Bl Date ';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        return;
      }
      if (
        termsheetDetails.paymentDueDate.daysFromVesselDischargeDate == '' ||
        termsheetDetails.paymentDueDate.daysFromVesselDischargeDate == undefined
      ) {
        let toastMessage = 'Please add days From vessel discharge date Date ';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        return;
      }
    }

    if (
      termsheetDetails.commercials.tradeMarginPercentage == '' ||
      termsheetDetails.commercials.tradeMarginPercentage?.toString() == 'NaN' ||
      termsheetDetails.commercials.tradeMarginPercentage == undefined
    ) {
      let toastMessage = 'Please add trade Margin Percentage ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }

    if (
      termsheetDetails.commercials.lcOpeningChargesUnit == '' ||
      termsheetDetails.commercials.lcOpeningChargesUnit == undefined
    ) {
      let toastMessage = 'Please add lc Opening Charges Unit ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }

    if (termsheetDetails.commercials.lcOpeningChargesPercentage == undefined) {
      let toastMessage = 'Please add lc Opening Charges Percentage ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.commercials.usanceInterestPercetage == '' ||
      termsheetDetails.commercials.usanceInterestPercetage == undefined
    ) {
      let toastMessage = 'Please add usance Interest Percetage ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.commercials.overDueInterestPerMonth == '' ||
      termsheetDetails.commercials.overDueInterestPerMonth == undefined
    ) {
      let toastMessage = 'Please add over Due Interest PerMonth ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.commercials.exchangeFluctuation == '' ||
      termsheetDetails.commercials.exchangeFluctuation == undefined
    ) {
      let toastMessage = 'Please add exchange Fluctuation ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (termsheetDetails.commercials.forexHedging == '' || termsheetDetails.commercials.forexHedging == undefined) {
      let toastMessage = 'Please Select  forex Hedging ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.commercials.otherTermsAndConditions == '' ||
      termsheetDetails.commercials.otherTermsAndConditions == undefined
    ) {
      let toastMessage = 'Please add other Terms And Conditions ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (termsheetDetails.commercials.version == '' || termsheetDetails.commercials.version == undefined) {
      let toastMessage = 'Please add version ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (otherTermsAndConditions.buyer.bank === '' || otherTermsAndConditions.buyer.bank == undefined) {
      let toastMessage = 'please select a Bank in other Terms and Conditions';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    const UpdatedTermsheet = {
      ...tempSheet,
      status: 'Approved',
      otherTermsAndConditions,
      additionalComments,
    };

    dispatch(updateTermsheet({ UpdatedTermsheet }));
  };

  const handleChange = (name, value) => {
    const newInput = { ...payloadData, [name]: value };
    setPayloadData(newInput);
  };

  const handlePreview = () => {
    let toastMessage = 'PLEASE SAVE TERMSHEET FIRST';

    let tempSheet = { ...termsheetDetails };

    tempSheet.transactionDetails.lcValue = newLcVal;


    if (
      termsheetDetails.commodityDetails.unitOfQuantity == '' ||
      termsheetDetails.commodityDetails.unitOfQuantity == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.commodityDetails.orderCurrency == '' ||
      termsheetDetails.commodityDetails.orderCurrency == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (termsheetDetails.commodityDetails.quantity == '' || termsheetDetails.commodityDetails.quantity == undefined) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.commodityDetails.perUnitPrice == '' ||
      termsheetDetails.commodityDetails.perUnitPrice?.toString() == 'NaN' ||
      termsheetDetails.commodityDetails.perUnitPrice == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (termsheetDetails.commodityDetails.commodity == '' || termsheetDetails.commodityDetails.commodity == undefined) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (termsheetDetails.commodityDetails.tolerance == '' || termsheetDetails.commodityDetails.tolerance == undefined) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.lcValue == '' ||
      Number.isNaN(termsheetDetails.transactionDetails.lcValue) ||
      termsheetDetails.transactionDetails.lcValue == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.marginMoney == '' ||
      termsheetDetails.transactionDetails.marginMoney == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.lcOpeningBank == '' ||
      termsheetDetails.transactionDetails.lcOpeningBank == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.incoTerms == '' ||
      termsheetDetails.transactionDetails.incoTerms == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.loadPort == '' ||
      termsheetDetails.transactionDetails.loadPort == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.countryOfOrigin == '' ||
      termsheetDetails.transactionDetails.countryOfOrigin == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.shipmentType == '' ||
      termsheetDetails.transactionDetails.shipmentType == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.partShipmentAllowed == '' ||
      termsheetDetails.transactionDetails.partShipmentAllowed == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.portOfDischarge == '' ||
      termsheetDetails.transactionDetails.portOfDischarge == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.billOfEntity == '' ||
      termsheetDetails.transactionDetails.billOfEntity == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (termsheetDetails.transactionDetails.thirdPartyInspectionReq == undefined) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.storageOfGoods == '' ||
      termsheetDetails.transactionDetails.storageOfGoods == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.transactionDetails.portOfDischarge == 'Select an option' ||
      termsheetDetails.transactionDetails.portOfDischarge == '' ||
      termsheetDetails.transactionDetails.portOfDischarge == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails?.paymentDueDate?.computationOfDueDate == '' ||
      termsheetDetails?.paymentDueDate?.computationOfDueDate == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }

    if (termsheetDetails?.paymentDueDate?.computationOfDueDate === 'DaysfromBLDate') {
      if (
        termsheetDetails.paymentDueDate.daysFromBlDate == '' ||
        termsheetDetails.paymentDueDate.daysFromBlDate == undefined
      ) {
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        return;
      }
    }

    if (termsheetDetails?.paymentDueDate?.computationOfDueDate === 'DaysfromVesselDischargeDate') {
      if (
        termsheetDetails.paymentDueDate.daysFromVesselDischargeDate == '' ||
        termsheetDetails.paymentDueDate.daysFromVesselDischargeDate == undefined
      ) {
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        return;
      }
    }

    if (termsheetDetails?.paymentDueDate?.computationOfDueDate === 'Whicheverisearlier') {
      if (
        termsheetDetails.paymentDueDate.daysFromBlDate == '' ||
        termsheetDetails.paymentDueDate.daysFromBlDate == undefined
      ) {
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        return;
      }
      if (
        termsheetDetails.paymentDueDate.daysFromVesselDischargeDate == '' ||
        termsheetDetails.paymentDueDate.daysFromVesselDischargeDate == undefined
      ) {
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        return;
      }
    }

    if (
      termsheetDetails.commercials.tradeMarginPercentage == '' ||
      termsheetDetails.commercials.tradeMarginPercentage?.toString() == 'NaN' ||
      termsheetDetails.commercials.tradeMarginPercentage == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.commercials.lcOpeningChargesUnit == '' ||
      termsheetDetails.commercials.lcOpeningChargesUnit == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (termsheetDetails.commercials.lcOpeningChargesPercentage == undefined) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.commercials.usanceInterestPercetage == '' ||
      termsheetDetails.commercials.usanceInterestPercetage == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.commercials.overDueInterestPerMonth == '' ||
      termsheetDetails.commercials.overDueInterestPerMonth == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.commercials.exchangeFluctuation == '' ||
      termsheetDetails.commercials.exchangeFluctuation == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (termsheetDetails.commercials.forexHedging == '' || termsheetDetails.commercials.forexHedging == undefined) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      termsheetDetails.commercials.otherTermsAndConditions == '' ||
      termsheetDetails.commercials.otherTermsAndConditions == undefined
    ) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (termsheetDetails.commercials.version == '' || termsheetDetails.commercials.version == undefined) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (otherTermsAndConditions.buyer.bank === '' || otherTermsAndConditions.buyer.bank == undefined) {
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }

    const updateObj = 'Preview';

    const UpdatedTermsheet = {
      ...tempSheet,
      status: 'Approved',
      otherTermsAndConditions,
      additionalComments,
    };

    dispatch(updateTermsheet({ UpdatedTermsheet, updateObj }));
  };

  const addCommentHandler = (commentType, comment) => {
    const newComment = {
      additionalCommentType: commentType,
      comment: comment,
    };
    setAdditionalComments((prev) => [...prev, newComment]);
  };
  const onChangeDropDown = (e) => {
    const value = e.target.value;
    setOtherTermConditions((prev) => ({
      ...prev,
      buyer: { ...prev.buyer, bank: value },
    }));
  };

  return (
    <>
      {gettingTermsheet ? (
        <Loader />
      ) : (
        <>
          {' '}
          <div className="container-fluid px-0">
            <div className={`${styles.card} tabHeader border-bottom-0 shadow-none`}>
              <div className={`${styles.head_header} align-items-center`}>
                <img
                  className={`${styles.arrow} img-fluid image_arrow mr-2`}
                  src="/static/keyboard_arrow_right-3.svg"
                  alt="arrow"
                  onClick={() => Router.push('/termsheet/order-list')}
                />
                <h1 className={`${styles.heading} heading`}>{_get(termsheet, 'data[0].company.companyName', '')}</h1>
              </div>
              <div className="">
                {termsheet &&
                  termsheet?.data?.map((sheet, index) => (
                    <div key={index} className={`${styles.card_body} border_color border card-body container-fluid`}>
                      <div className="row">
                        <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                          <h3 className={`${styles.label} label_heading`}>Customer ID</h3>
                          <p className={`${styles.value} accordion_Text`}>
                            {sheet?.company?.customerId ? sheet.company.customerId : sheet.company.temporaryCustomerId}
                          </p>
                        </div>
                        <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                          <h3 className={`${styles.label} label_heading`}>Buyer Name</h3>
                          <p className={`${styles.value} accordion_Text`}>{sheet?.company?.companyName}</p>
                        </div>
                        <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                          <h3 className={`${styles.label} label_heading`}>Created On</h3>
                          <p className={`${styles.value} accordion_Text`}>
                            {moment((sheet?.company?.createdAt).slice(0, 10), 'YYYY-MM-DD', true).format('DD-MM-YYYY')}
                          </p>
                        </div>
                        <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                          <h3 className={`${styles.label} label_heading`}>Last Modified</h3>
                          <p className={`${styles.value} accordion_Text`}>
                            {moment((sheet?.company?.updatedAt).slice(0, 10), 'YYYY-MM-DD', true).format('DD-MM-YYYY')}
                          </p>
                        </div>
                        <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                          <h3 className={`${styles.label} label_heading`}>Approved Date</h3>
                          <p className={`${styles.value} accordion_Text`}>
                            {sheet?.order?.cam?.approvedAt
                              ? moment(sheet?.order?.cam?.approvedAt?.slice(0, 10), 'YYYY-MM-DD', true).format(
                                'DD-MM-YYYY',
                              )
                              : ''}
                          </p>
                        </div>
                        <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                          <h3 className={`${styles.label} label_heading`}>Status </h3>
                          <p className={`${styles.value} accordion_Text`}>
                            <span className={`${styles.status}`}></span>
                            {sheet?.order?.cam?.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                <TermDetails
                  onChangeTransactionDetails={onChangeTransactionDetails}
                  onChangeCommodityDetails={onChangeCommodityDetails}
                  onChangeCommercialTerms={onChangeCommercialTerms}
                  onChangePaymentDueDate={onChangePaymentDueDate}
                  onChangeCommodityDetails2={onChangeCommodityDetails2}
                  termsheetDetails={termsheetDetails}
                  handleSave={handleSave}
                  termsheet={termsheet}
                  newLcVal={newLcVal}
                  changePayment={changePayment}
                  commodity={getCommoditiesMasterData}
                  port={getPortsMasterData}
                  country={getCountriesMasterData}
                  currency={getCurrencyMasterData}
                />
                <AdditionalComment
                  setAdditionalComments={setAdditionalComments}
                  additionalComments={additionalComments}
                  termsheetDetails={termsheetDetails}
                  otherTermConditions={otherTermsAndConditions}
                />
                <OtherTerms
                  onChangeDropDown={onChangeDropDown}
                  otherTermConditions={otherTermsAndConditions}
                  onChangeInsurance={onChangeInsurance}
                  onChangeDutyAndTaxes={onChangeDutyAndTaxes}
                  onChangeOther={onChangeOther}
                  onChangeLcOpening={onChangeLcOpening}
                  onChangeCha={onChangeCha}
                  termsheet={termsheet}
                  termsheetDetails={termsheetDetails}
                />
                <UploadOther module="LeadOnboarding&OrderApproval" orderid={OrdID} />
              </div>
            </div>
          </div>
          <ApproveBar handleReject={handleSave} handleApprove={handlePreview} button={'Save'} button2={'Preview'} />
        </>
      )}
    </>
  );
};

export default Index;
