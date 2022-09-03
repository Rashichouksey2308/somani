/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './reviewqueue.module.scss'
import Order from '../../src/components/Order'
import ShipmentDetails from '../../src/components/ShipmentDetails'
import ComplianceLigitations from '../../src/components/CompilanceLigitation'
import LigitationsTable from '../../src/components/LigitationsTable'
import GST from '../../src/components/GST'

import Credit from '../../src/components/Credit'
import Recommendations from '../../src/components/Recommendations'
import CAM from '../../src/components/CAM'
import { Form } from 'react-bootstrap'

import PreviousBar from '../../src/components/PreviousBar'
import DownloadBar from '../../src/components/DownloadBar'
import CommonSave from '../../src/components/CommonSave'
//sub modules
import CompanyDetails from '../../src/components/ReviewQueueProfile/CompanyDetails'
import ShareHoldingPattern from '../../src/components/ReviewQueueProfile/ShareHoldingPattern'
import AuditorDeatils from '../../src/components/ReviewQueueProfile/AuditorDeatils'
import AuditorsDetail from '../../src/components/ReviewQueueProfile/AuditorsDetails'
import CreditRatings from '../../src/components/ReviewQueueProfile/CreditRatings'

import BalanceSheet from '../../src/components/ReviewQueueFinancials/BalanceSheet'
import CashFlow from '../../src/components/ReviewQueueFinancials/CashFlow'
import IncomeStatement from '../../src/components/ReviewQueueFinancials/IncomeStatement'
import OpenCharges from '../../src/components/ReviewQueueFinancials/OpenCharges'
import Peer from '../../src/components/ReviewQueueFinancials/Peer'
import Ratios from '../../src/components/ReviewQueueFinancials/Ratios'

import {
  removePrefixOrSuffix,
  CovertvaluefromtoCR,
} from '../../src/utils/helper'
//redux
import { UpdateCompanyDetails } from '../../src/redux/companyDetail/action'

import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  UpdateCredit,
  UpdateCreditCalculate,
  UpdateOrderShipment,
} from '../../src/redux/buyerProfile/action'

import {
  setPageName,
  setDynamicName,
  setDynamicOrder,
} from '../../src/redux/userData/action'

import { RefetchCombineKarza } from '../../src/redux/companyDetail/action'
import { UpdateCam } from '../../src/redux/creditQueueUpdate/action'
import {
  GetDocuments,
  AddingDocument,
  DeleteDocument,
} from '../../src/redux/creditQueueUpdate/action'
import moment from 'moment'
import { toast } from 'react-toastify'
import UploadOther from '../../src/components/UploadOther'
import _get from 'lodash/get'

let alertObj = {
  isShell: 'Shell',
  isCompanyUnderLiquidation: 'Company Under Liquidation',
  isMlm: 'MLM',
  isVanishing: 'Vanishing',
  NA: 'Non-Genuine Dealers of Mahavat',
  isSebiDebarred: 'SEBI Debarred',
  NA: 'BSE Disciplinary Action',
  isNseCompanySuspended: 'NSE Company Suspended',
  isNseExpelled: 'NSE Expelled',
  isNseCompanySuspendedNonCompliance: 'NSE Company Suspended Non Compliance',
  isNseUnderGsmSurveillance: 'NSE Under GSM Surveillance',
  isNseDefaulter: 'NSE Defaulter',
  isCompanyStrikedOffUs248: 'Company Striked Off Us 248',
  isBseCompanySuspendedMoreThan7Years:
    'BSE Company Suspended More Than 7 Years',
  isBsePenalSuspended: 'BSE Penal Suspended',
  isBseExpelled: 'BSE Expelled',
  isBseDefaulter: 'BSE Defaulter',
  isCompanyStrikedOff: 'Company Striked Off',
  isCompanyUnderStrikeOff: 'Company Under Strike Off',
  isProclaimedOffender: 'Proclaimed Offender',
  isCompanyUnderProsecution: 'Company Under Prosecution',
  isNseSuspended: 'NSE Suspended',
  isMcaDirectorUnderProsecution: 'MCA Director Under Prosecution',
  isNseUnderAsmSurveillance: 'NSE Under Asm Surveillance',
  isBseUnderGsmSurveillance: 'BSE Under GSM Surveillance',
  isCompanyActiveNonCompliant: 'Company Active Non Compliant',
  isDinDeactivated: 'DIN Deactivated',
  isDinDisabled: 'DIN Disabled',
  isBseIlliquidSecurity: 'BSE Illiquid Security',
  isDormant: 'Dormant',
  isNotFiled5inv: 'Not Filed 5INV',
  isDinDisqualified: 'DIN Disqualied',
  isDinSurrendered: 'DIN Surrendered',
  isMcaCompanyDefaulter: 'MCA Company Defaulter',
  isMcaDirectorDefaulter: 'MCA Director Defaulter',
  isSuspendedAtStockExchange: 'Suspended At Stock Exchange',
  isBseMemberInactive: 'BSE Member Inactive',
  isDinLapsed: 'DIN Lapsed',
  isNseCompanyDelisted: 'NSE Company Delisted',
  isBseCompanyDelisted: 'BSE Company Delisted',
  isBseSebiRelaxationForMps: 'BSE SEBI Relaxation For MPS',
  isEpfTransactionDefault: 'EPF Transaction Default',
  isIecBlackListed: 'IEC Black Listed',
  isIecInDeniedEntityList: 'IEC In Denied Entity List',
  isGstTransactionDefault: 'GST Transaction Default',
  isGstInactive: 'GST Inactive',
  isEpfTransactionDelay: 'EPF Transaction Delay',
  isEpfClosed: 'EPF Closed',
  NA: 'TDS Payment Delay',
  isLeiRegistrationRetired: 'LEI Registration Retired',
  isIecSuspended: 'IEC Suspended',
  NA: 'TDS Payment Default',
  isIecCancelled: 'IEC Cancelled',
  isGstCancelled: 'GST Cancelled',
  isGstProvisional: 'GST Provisional',
  isTanInactive: 'TAN Inactive',
  isGstTransactionDelay: 'GST Transaction Delay',
  isLeiRegistrationLapsed: 'LEI Registration Lapsed',
  isLeiRegistrationDuplicate: 'LEI Registration Duplicate',
  isIbbi: 'IBBI',
  isWilfulBankDefaulter: 'Wilful Defaulter',
  isCompanyUnderCirp: 'Company Under CIRP',
  isBifr: 'BIFR',
  isChargeOpenAtArc_: 'Charge Open At ARC',
  isEpfRegisteredWithBifr: 'EPF Registered With BIFR',
  isEpfUnderLiquidation: 'EPF Under Liquidation',
  isSickUnit: 'Sick Unit',
  isBankDefaulterSuitFiled: 'Suit Filed',
  isChargeOpenAtSasf_: 'Charge Open At SASF',
  isCorporateDebtRestructuring: 'Corporate Debt Restructuring',
  isChargeClosedAtArc_: 'Charge Closed At ARC',
  isChargeClosedAtSasf_: 'Charge Closed At SASF',
  isQualifiedOpinion: 'Qualified Opinion',
  isDisclaimerRemarks: 'Disclaimer Remarks',
  isUnfavourableRemarks: 'Unfavourable Remarks',
  isCreditRatingSuspended: 'Credit Rating Suspended',
  isCreditRatingWithdrawn: 'Credit Rating Withdrawn',
  isRatedEntityNonCooperative: 'Entity Non-Cooperative',
  isCreditRatingOutlookNegative: 'Credit Rating Outlook Negative',
  isCreditRatingDowngraded: 'Credit Rating Downgraded',
  isCreditWatchWithNegativeImplication:
    'Credit Watch With Negative Implication',
  isCreditWatchWithDevelopingImplication:
    'Credit Watch With Developing Implication',
  isDomainInvalid_: 'Domain Invalid',
  isEmailInvalid_: 'Email Invalid',
  isEmailDisposable_: 'Email Disposable',
  isAddressQualityPoor_: 'Generic Address',
  isOffshoreLeak: 'Offshore Leak',
  IsDirectorResigned: 'Director Resignation(s)',
  isGstUnderCancellation: 'GST Under Cancellation',
  isTanTransactionDefault: 'TAN Transaction Default',
  isTanTransactionDelay: 'TAN Transaction Delay',
  isPanInactive: 'PAN Inactive',
  isHawala: 'Hawala',
  isGstFraud: 'GST Fraud',
  isBankDefaulterNonSuitFiled: 'Bank Defaulter Non SuitFiled',
  isBankAuction: 'Bank Auction',
  isiecdgftpenalty: 'IEC DGFT Penalty',
}

function Index() {
  const dispatch = useDispatch()

  const [darkMode, setDarkMode] = useState(false)
  const [uploadBtn, setUploadBtn] = useState(true)
  const [complienceFilter, setComplienceFilter] = useState('All')
  const [complienceStatutoryFilter, setComplienceStatutoryFilter] = useState([])
  const [complienceBalanceFilter, setComplienceBalanceFilter] = useState([])

  const { fetchingKarzaGst } = useSelector((state) => state.review)

  // const [newDoc, setNewDoc] = useState({
  //   document: [],
  //   order: orderList?.termsheet?.order,
  //   type: 'notrelevent',
  //   name: '',
  //   module: 'LeadOnboarding,OrderApproval',
  // })

  useEffect(() => {
    if (companyData) {
      let statutory = []
      let balance = []
      companyData.compliance?.alerts?.forEach((val, index) => {
        if (val.alert.trim() == 'isIbbi') {
          balance.push(val)
        } else {
          statutory.push(val)
        }
      })

      setComplienceStatutoryFilter(statutory)
      setComplienceBalanceFilter(balance)
    }

    if (
      Array.isArray(companyData?.compliance?.error) &&
      companyData?.compliance?.error?.length > 0
    ) {
      _get(companyData, 'compliance.error', [{}]).forEach((item) => {
        let toastMessage = item.message
        let toastDiscription = item.description
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastDiscription.toUpperCase(), {
            toastId: toastDiscription,
          })
          // toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      })
    }
    if (
      Array.isArray(companyData?.profile?.error) &&
      companyData?.profile?.error?.length > 0
    ) {
      _get(companyData, 'profile.error', [{}]).forEach((item) => {
        let toastMessage = item?.message
        let toastDiscription = item?.description
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastDiscription.toUpperCase(), {
            toastId: toastDiscription,
          })
          // toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      })
    }

    if (
      Array.isArray(companyData?.financial?.error) &&
      companyData?.financial?.error?.length > 0
    ) {
      _get(companyData, 'financial.error', [{}]).forEach((item) => {
        let toastMessage = item.message
        let toastDiscription = item.description
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastDiscription })
          toast.error(toastDiscription.toUpperCase(), { toastId: toastMessage })
        }
      })
    }
  }, [companyData])
  console.log(complienceFilter, 'complienceFilter')
  // const [manualDocModule, setManualDocModule] = useState(true)
  // const [filteredDoc, setFilteredDoc] = useState([])
  const [gstData, setGstData] = useState({})
  // console.log(gstData, "CREDIT CALCULATE")

  // const { documentsFetched } = useSelector((state) => state.review)
  //console.log(documentsFetched, 'documentsFetched')

  const { orderList } = useSelector((state) => state.buyer)

  console.log(orderList, 'this is order list')

  const { companyData } = useSelector((state) => state.companyDetails)
  console.log(companyData, 'this is company data')

  // useEffect(()=> {
  //   const filtered = documentsFetched?.document.filter((doc)=> !doc.deleted )
  //   setFilteredDoc(prev => [...prev, filtered ])

  // },[documentsFetched])

  const rtrnChartIndiaction = (latest, previous, last) => {
    if (latest > previous && previous > last) {
      return <img src="/static/profit.svg" alt="Profit" className="img-fluid" />
    } else if (latest < previous && previous < last) {
      return <img src="/static/loss.svg" alt="Loss" className="img-fluid" />
    } else
      return (
        <img src="/static/average.svg" alt="Average" className="img-fluid" />
      )
  }

  useEffect(() => {
    dispatch(setPageName('credit-queue'))
    console.log(
      orderList?.company?.companyName,
      'orderList?.company?.companyName',
    )
    dispatch(setDynamicName(orderList?.company?.companyName))
    dispatch(setDynamicOrder(orderList?.company?.customerId))
  }, [orderList, dispatch])

  console.log(orderList, 'termsheetOrder')
  // useEffect(() => {

  //   dispatch(GetDocuments(`?order=${id}`))
  // }, [dispatch, companyData, orderList?.termsheet?.order])
  const id = sessionStorage.getItem('orderID')

  const [selectedTab, setSelectedTab] = useState('Profile')

  const [orderDetails, setOrderDetails] = useState({
    transactionType: orderList?.transactionType,
    commodity: orderList?.commodity,
    quantity: orderList?.quantity,
    unitOfQuantity: orderList?.unitOfQuantity,
    orderValue: CovertvaluefromtoCR(orderList?.orderValue),
    orderCurrency: orderList?.orderCurrency,
    unitOfValue: orderList?.unitOfValue,
    supplierName: orderList?.supplierName,
    countryOfOrigin: orderList?.countryOfOrigin,
    portOfDischarge: orderList?.portOfDischarge,
    ExpectedDateOfShipment: orderList?.ExpectedDateOfShipment,
    incoTerm: orderList?.incoTerm,
    grade: orderList?.grade,
    tolerance: orderList?.tolerance,
    hsnCode: orderList?.hsnCode,
    manufacturerName: orderList?.manufacturerName,
  })
  useEffect(() => {
    setOrderDetails({
      transactionType: orderList?.transactionType,
      commodity: orderList?.commodity,
      quantity: orderList?.quantity,
      unitOfQuantity: orderList?.unitOfQuantity,
      orderValue: CovertvaluefromtoCR(orderList?.orderValue),
      orderCurrency: orderList?.orderCurrency,
      unitOfValue: orderList?.unitOfValue,
      supplierName: orderList?.supplierName,
      countryOfOrigin: orderList?.countryOfOrigin,
      portOfDischarge: orderList?.portOfDischarge,
      ExpectedDateOfShipment: orderList?.ExpectedDateOfShipment,
      incoTerm: orderList?.incoTerm,
      grade: orderList?.grade,
      tolerance: orderList?.tolerance,
      hsnCode: orderList?.hsnCode,
      manufacturerName: orderList?.manufacturerName,
    })
  }, [orderList])

  const [shipment, setShipment] = useState({
    ETAofDischarge: {
      fromDate: orderList?.shipmentDetail?.ETAofDischarge?.fromDate,
      toDate: orderList?.shipmentDetail?.ETAofDischarge?.toDate,
    },
    lastDateOfShipment: orderList?.shipmentDetail?.lastDateOfShipment,
    loadPort: {
      fromDate: orderList?.shipmentDetail?.loadPort?.fromDate,
      toDate: orderList?.shipmentDetail?.loadPort?.toDate,
    },
    shipmentType: orderList?.shipmentDetail?.shipmentType,
    portOfLoading: orderList?.shipmentDetail?.portOfLoading,
  })

  const saveOrderData = (name, value) => {
    console.log(value, 'value888')
    const newInput = { ...orderDetails }
    newInput[name] = value
    // console.log(newInput)
    setOrderDetails(newInput)
  }

  const saveShipmentData = (name, value) => {
    const newInput = { ...shipment }
    const namesplit = name.split('.')
    namesplit.length > 1
      ? (newInput[namesplit[0]][namesplit[1]] = value)
      : (newInput[name] = value)
    setShipment(newInput)
  }
  const orderValidation = () => {
    if (
      orderDetails?.transactionType?.trim() === '' ||
      orderDetails?.transactionType?.trim() == undefined
    ) {
      let toastMessage = 'Invalid Transaction Type'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      orderDetails?.commodity?.trim() === '' ||
      orderDetails?.commodity?.trim() == undefined
    ) {
      let toastMessage = 'the Commodity can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (orderDetails?.quantity === '' || orderDetails?.quantity == undefined) {
      let toastMessage = 'Quantity can not be Empty '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      orderDetails?.unitOfQuantity?.trim() === '' ||
      orderDetails?.unitOfQuantity == undefined
    ) {
      let toastMessage = 'Please Provide a unit Of Quantity  '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      orderDetails?.orderValue === '' ||
      orderDetails?.orderValue == undefined ||
      orderDetails?.orderValue == NaN
    ) {
      let toastMessage = 'Please Check the orderValue  '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }

    if (
      orderDetails?.unitOfValue?.trim() === '' ||
      orderDetails?.unitOfValue?.trim() == undefined
    ) {
      let toastMessage = 'Please Set the unit of value'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      orderDetails?.supplierName?.trim() === '' ||
      orderDetails?.supplierName?.trim() == undefined
    ) {
      let toastMessage = 'the supplier Name can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      orderDetails?.countryOfOrigin?.trim() === '' ||
      orderDetails?.countryOfOrigin?.trim() == undefined
    ) {
      let toastMessage = 'the country Of Origin can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      orderDetails?.portOfDischarge?.trim() === '' ||
      orderDetails?.portOfDischarge?.trim() == undefined
    ) {
      let toastMessage = 'the port Of Discharge can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      orderDetails?.ExpectedDateOfShipment?.trim() === '' ||
      orderDetails?.ExpectedDateOfShipment?.trim() == undefined
    ) {
      let toastMessage = 'the Expected Date Of Shipment can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      orderDetails?.incoTerm?.trim() === '' ||
      orderDetails?.incoTerm?.trim() == undefined
    ) {
      let toastMessage = 'the incoTerm can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      orderDetails?.grade?.trim() === '' ||
      orderDetails?.grade?.trim() == undefined
    ) {
      let toastMessage = 'the grade can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      orderDetails?.tolerance === '' ||
      orderDetails?.tolerance == undefined
    ) {
      let toastMessage = 'the tolerance can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      orderDetails?.hsnCode === '' ||
      orderDetails?.hsnCode == undefined
    ) {
      let toastMessage = 'the hsn code can not be Empty'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (shipment?.shipmentType === '' || shipment?.shipmentType == undefined) {
      let toastMessage = 'add shipment Type'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      shipment?.loadPort.toDate === '' ||
      shipment?.loadPort.toDate == undefined
    ) {
      let toastMessage = 'add load Port  to'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      shipment?.loadPort.fromDate === '' ||
      shipment?.loadPort.fromDate == undefined
    ) {
      let toastMessage = 'add load Port from date'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      shipment?.ETAofDischarge.fromDate === '' ||
      shipment?.ETAofDischarge.fromDate == undefined
    ) {
      let toastMessage = 'add eta of discharge from'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      shipment?.ETAofDischarge.toDate === '' ||
      shipment?.ETAofDischarge.toDate == undefined
    ) {
      let toastMessage = 'add eta of discharge to'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      shipment?.lastDateOfShipment === '' ||
      shipment?.lastDateOfShipment == undefined
    ) {
      let toastMessage = 'add last date of shipment'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      shipment?.portOfLoading === '' ||
      shipment?.portOfLoading == undefined
    ) {
      let toastMessage = 'add port Of Loading'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }

    // if (orderDetails?.manufacturerName?.trim() === ''|| orderDetails?.manufacturerName?.trim() == undefined) {
    //   let toastMessage = 'the manufacturer Name can not be Empty'
    //   if (!toast.isActive(toastMessage.toUpperCase())) {
    //     toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    //   }
    //   return false
    // }
    return true
  }
  console.log(orderDetails, 'orderDetails', shipment)
  const onOrderSave = () => {
    if (orderValidation()) {
      let orderToSend = { ...orderDetails }
      orderToSend.quantity = removePrefixOrSuffix(orderDetails.quantity)
      orderToSend.orderValue =
        removePrefixOrSuffix(orderDetails.orderValue) * 10000000
      orderToSend.tolerance = removePrefixOrSuffix(orderDetails.tolerance)
      if (orderDetails.unitOfValue === 'Cr' || 'Crores') {
        const obj = {
          ...orderToSend,
          shipmentDetail: { ...shipment },
          order: orderList?._id,
          orderValue: removePrefixOrSuffix(orderDetails.orderValue) * 10000000,
        }
        dispatch(UpdateOrderShipment(obj))
      } else {
        const obj = {
          ...orderToSend,
          shipmentDetail: { ...shipment },
          order: orderList?._id,
        }
        dispatch(UpdateOrderShipment(obj))
      }
    }
  }

  const [product, setProduct] = useState()

  const saveProductData = (name, value) => {
    const newInput = { ...product }
    newInput[name] = value
    // console.log(newInput, "prod")
    setProduct(newInput)
  }
  console.log(product, 'productData')
  const [supplierCred, setSupplierCred] = useState()
  console.log('orderList', orderList)
  useEffect(() => {
    setProduct({
      AvgMonthlyElectricityBill: orderList?.productSummary
        ?.AvgMonthlyElectricityBill
        ? orderList?.productSummary?.AvgMonthlyElectricityBill
        : '',
      availableStock: orderList?.productSummary?.availableStock
        ? orderList?.productSummary?.availableStock
        : '',
      averageStockInTransit: orderList?.productSummary?.averageStockInTransit
        ? orderList?.productSummary?.averageStockInTransit
        : '',
      averageStockOfCommodity: orderList?.productSummary
        ?.averageStockOfCommodity
        ? orderList?.productSummary?.averageStockOfCommodity
        : '',
      capacityUtilization: orderList?.productSummary?.capacityUtilization
        ? orderList?.productSummary?.capacityUtilization
        : '',
      contributionCommoditySenstivity: orderList?.productSummary
        ?.contributionCommoditySenstivity
        ? orderList?.productSummary?.contributionCommoditySenstivity
        : '',
      dailyConsumptionOfCommodity: orderList?.productSummary
        ?.dailyConsumptionOfCommodity
        ? orderList?.productSummary?.dailyConsumptionOfCommodity
        : '',
      existingCHA: orderList?.productSummary?.existingCHA
        ? orderList?.productSummary?.existingCHA
        : [],
      existingProcurementOfCommodity: orderList?.productSummary
        ?.existingProcurementOfCommodity
        ? orderList?.productSummary?.existingProcurementOfCommodity
        : '',
      existingSuppliers: orderList?.productSummary?.existingSuppliers
        ? orderList?.productSummary?.existingSuppliers
        : [],
      monthlyProductionCapacity: orderList?.productSummary
        ?.monthlyProductionCapacity
        ? orderList?.productSummary?.monthlyProductionCapacity
        : '',
      paymentStatusForElectricityBills: orderList?.productSummary
        ?.paymentStatusForElectricityBills
        ? orderList?.productSummary?.paymentStatusForElectricityBills
        : '',
      stockCoverageOfCommodity: orderList?.productSummary
        ?.stockCoverageOfCommodity
        ? orderList?.productSummary?.stockCoverageOfCommodity
        : undefined,
      typeOfCurrency: orderList?.productSummary?.typeOfCurrency
        ? orderList?.productSummary?.typeOfCurrency
        : orderList?.orderCurrency,
      unitOfQuantity: orderList?.productSummary?.unitOfQuantity
        ? orderList?.productSummary?.unitOfQuantity
        : orderList?.unitOfQuantity,
    })
    setSupplierCred({
      HSCodesNumber: orderList?.supplierCredential?.HSCodesNumber,
      commodityOfTotalTrade:
        orderList?.supplierCredential?.commodityOfTotalTrade,
      consigneesNumber: orderList?.supplierCredential?.consigneesNumber,
      countryOfOrigin: orderList?.supplierCredential?.countryOfOrigin,
      latestShipmentDate: orderList?.supplierCredential?.latestShipmentDate,
      oldestShipmentDate: orderList?.supplierCredential?.oldestShipmentDate,
      portOfDestination: orderList?.supplierCredential?.portOfDestination,
      remarks: orderList?.supplierCredential?.remarks,
      shipmentNumber: orderList?.supplierCredential?.shipmentNumber,
      supplierName: orderList?.supplierCredential?.supplierName
        ? orderList?.supplierCredential?.supplierName
        : orderList?.supplierName,
    })
  }, [orderList])

  const handleProductSave = () => {
    if (
      product.capacityUtilization === '' ||
      product.contributionCommoditySenstivity === ''
    ) {
      let toastMessage = 'Please fill the required fields'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    } else {
      let data = { ...product }
      data.monthlyProductionCapacity = removePrefixOrSuffix(
        product.monthlyProductionCapacity,
      )
      data.capacityUtilization = removePrefixOrSuffix(
        product.capacityUtilization,
      )
      data.AvgMonthlyElectricityBill = removePrefixOrSuffix(
        product.AvgMonthlyElectricityBill,
      )
      data.averageStockOfCommodity = removePrefixOrSuffix(
        product.averageStockOfCommodity,
      )
      data.averageStockInTransit = removePrefixOrSuffix(
        product.averageStockInTransit,
      )
      data.availableStock = removePrefixOrSuffix(product.availableStock)
      data.dailyConsumptionOfCommodity = removePrefixOrSuffix(
        product.dailyConsumptionOfCommodity,
      )
      let obj = {
        order: orderList._id,
        productSummary: { ...data },
        gstin: gstData.gstin,
      }
      dispatch(UpdateCreditCalculate(obj))
    }
  }

  const saveSupplierData = (name, value) => {
    const newInput = { ...supplierCred }
    newInput[name] = value
    // console.log(newInput)
    setSupplierCred(newInput)
  }

  const [keyAddData, setKeyAddData] = useState([
    {
      GSTIN: orderList?.company?.keyAddress?.GSTIN,
      GSTIN_document: orderList?.company?.keyAddress?.GSTIN_document,
      addressType: orderList?.company?.keyAddress?.addressType,
      branch: orderList?.company?.keyAddress?.branch,
      city: orderList?.company?.keyAddress?.city,
      state: orderList?.company?.keyAddress?.state,
      email: orderList?.company?.keyAddress?.email,
      completeAddress: orderList?.company?.keyAddress?.companyAddress,
      contact: {
        callingCode: orderList?.company?.keyAddress?.contact?.callingCode,
        number: orderList?.company?.keyAddress?.contact?.number,
      },
      pinCode: orderList?.company?.keyAddress?.pinCode,
    },
  ])

  const [financialsComment, setFinancialsComment] = useState(
    orderList?.company?.recommendations?.commentsOnFinancials,
  )

  const [companyComment, setCompanyComment] = useState(
    orderList?.company?.recommendations?.companyProfile,
  )

  const [sanctionComment, setSanctionComment] = useState(
    orderList?.company?.recommendations?.sanctionTerms,
  )
  const [approveComment, setApproveComment] = useState()

  useEffect(() => {
    setApproveComment(orderList?.cam?.approvalRemarks)
  }, [orderList])

  const [strengthsComment, setStrengthsComment] = useState(
    orderList?.company?.recommendations?.strengths,
  )

  const [weaknessComment, setWeaknessComment] = useState(
    orderList?.company?.recommendations?.weakness,
  )
  const deleteComponent = (index) => {
    setKeyAddData([
      ...keyAddData.slice(0, index),
      ...keyAddData.slice(index + 1),
    ])
  }
  const deleteAddress = (index) => {
    setPersonData([
      ...personData.slice(0, index),
      ...personData.slice(index + 1),
    ])
  }
  const addCompanyCommentArr = (companyComments) => {
    let newArr = [...companyComment]
    newArr.push(companyComments)
    setCompanyComment(newArr)
  }
  const addFinancialsCommentArr = (financialsComments) => {
    let newArr = [...financialsComment]
    newArr.push(financialsComments)
    setFinancialsComment(newArr)
  }
  const addSanctionCommentArr = (sanctionComments) => {
    let newArr = [...sanctionComment]
    newArr.push(sanctionComments)
    setSanctionComment(newArr)
  }
  const addApproveRemarkArr = (sanctionComments) => {
    let newArr = [...approveComment]
    newArr.push(sanctionComments)
    setApproveComment(newArr)
  }
  const addStrengthsCommentArr = (strengthsComments) => {
    let newArr = [...strengthsComment]
    newArr.push(strengthsComments)
    setStrengthsComment(newArr)
  }
  const addWeaknessCommentArr = (weaknessComments) => {
    let newArr = [...weaknessComment]
    newArr.push(weaknessComments)
    setWeaknessComment(newArr)
  }

  const dltCompanyCommentArr = (index) => {
    // let newArr = [...companyComment]
    // newArr.pop(index)
    // setCompanyComment(newArr)
    setCompanyComment([
      ...companyComment.slice(0, index),
      ...companyComment.slice(index + 1),
    ])
  }
  const dltFinancialsCommentArr = (index) => {
    // let newArr = [...financialsComment]
    // newArr.pop(index)
    setFinancialsComment([
      ...financialsComment.slice(0, index),
      ...financialsComment.slice(index + 1),
    ])
    // setFinancialsComment(newArr)
  }
  const dltSanctionCommentArr = (index) => {
    // let newArr = [...sanctionComment]
    // newArr.pop(index)
    // setSanctionComment(newArr)
    setSanctionComment([
      ...sanctionComment.slice(0, index),
      ...sanctionComment.slice(index + 1),
    ])
  }
  const dltApproveRemarkArr = (index) => {
    // let newArr = [...approveComment]
    // newArr.pop(index)
    // setApproveComment(newArr)
    setApproveComment([
      ...approveComment.slice(0, index),
      ...approveComment.slice(index + 1),
    ])
  }
  const dltStrengthsCommentArr = (index) => {
    // let newArr = [...strengthsComment]
    // newArr.pop(index)
    // setStrengthsComment(newArr)
    setStrengthsComment([
      ...strengthsComment.slice(0, index),
      ...strengthsComment.slice(index + 1),
    ])
  }
  const dltWeaknessCommentArr = (index) => {
    // let newArr = [...weaknessComment]
    // newArr.pop(index)
    // setWeaknessComment(newArr)
    setWeaknessComment([
      ...weaknessComment.slice(0, index),
      ...weaknessComment.slice(index + 1),
    ])
  }

  const [debtData, setDebtData] = useState([
    {
      bankName: orderList?.company?.debtProfile?.bankName,
      conduct: orderList?.company?.debtProfile?.conduct,
      limit: orderList?.company?.debtProfile?.limit,
      limitType: orderList?.company?.debtProfile?.limitType,
    },
  ])

  const [personData, setPersonData] = useState([
    {
      contact: {
        callingCode: orderList?.company?.keyContactPerson?.contact?.callingCode,
        number: orderList?.company?.keyContactPerson?.contact?.number,
      },
      department: orderList?.company?.keyContactPerson?.department,
      designation: orderList?.company?.keyContactPerson?.designation,
      email: orderList?.company?.keyContactPerson?.email,
      name: orderList?.company?.keyContactPerson?.name,
    },
  ])

  // useEffect(() => {
  //   if (orderList?.company?.keyContactPerson.length > 0) {
  //     setPersonData([
  //       {
  //         contact: {
  //           callingCode:
  //             orderList?.company?.keyContactPerson?.contact?.callingCode,
  //           number: orderList?.company?.keyContactPerson?.contact?.number,
  //         },
  //         department: orderList?.company?.keyContactPerson?.department,
  //         designation: orderList?.company?.keyContactPerson?.designation,
  //         email: orderList?.company?.keyContactPerson?.email,
  //         name: orderList?.company?.keyContactPerson?.name,
  //         isEdit: false,
  //       },
  //     ])
  //   }
  // }, [orderList])

  useEffect(() => {
    let groupExposureArr = []
    orderList?.company?.groupExposureDetail?.forEach((element) => {
      groupExposureArr.push(element)
    })
    setGroupExposureData(groupExposureArr)

    let debtArr = []
    orderList?.company?.debtProfile?.forEach((element) => {
      // console.log(element,"useEE")
      debtArr.push(element)
    })
    setDebtData(debtArr)

    let addressArr = []
    orderList?.company?.keyAddress?.forEach((element) => {
      // console.log(element,"useEE")
      addressArr.push(element)
    })
    setKeyAddData(addressArr)

    let personArr = []
    orderList?.company?.keyContactPerson?.forEach((element) => {
      // console.log(element,"useEE")
      personArr.push(element)
    })
    setPersonData(personArr)

    let commentFinancialArr = []
    orderList?.company?.recommendation?.commentsOnFinancials.forEach(
      (element) => {
        commentFinancialArr.push(element)
      },
    )
    setFinancialsComment(commentFinancialArr)

    let companyCommentArr = []
    orderList?.company?.recommendation?.companyProfile.forEach((element) => {
      companyCommentArr.push(element)
    })
    setCompanyComment(companyCommentArr)

    let sanctionArr = []
    orderList?.company?.recommendation?.sanctionTerms.forEach((element) => {
      sanctionArr.push(element)
    })
    setSanctionComment(sanctionArr)

    let strengthsArr = []
    orderList?.company?.recommendation?.strengths.forEach((element) => {
      strengthsArr.push(element)
    })
    setStrengthsComment(strengthsArr)

    let weaknessArr = []
    orderList?.company?.recommendation?.weakness.forEach((element) => {
      weaknessArr.push(element)
    })
    setWeaknessComment(weaknessArr)
  }, [orderList, orderList?.company])

  const [groupExposureData, setGroupExposureData] = useState([
    {
      accountConduct: orderList?.company?.groupExposureDetail?.accountConduct,
      limit: orderList?.company?.groupExposureDetail?.limit,
      name: orderList?.company?.groupExposureDetail?.name,
      outstandingLimit:
        orderList?.company?.groupExposureDetail?.outstandingLimit,
    },
  ])

  const [suggestedCredit, setSuggestedCredit] = useState({
    suggestedCreditLimit: orderList?.suggestedCreditLimit,
    suggestedOrderValue: orderList?.suggestedOrderValue,
  })

  const saveSuggestedCreditData = (name, value) => {
    const newInput = { ...suggestedCredit }
    newInput[name] = value
    // console.log(newInput)
    setSuggestedCredit(newInput)
  }

  const [approvedCredit, setApprovedCredit] = useState({
    approvedOrderValue: orderList?.cam?.approvedOrderValue,
    approvedCreditValue: orderList?.cam?.approvedCreditValue,
  })

  const saveApprovedCreditData = (name, value) => {
    const newInput = { ...approvedCredit }
    newInput[name] = value
    // console.log(newInput)
    setApprovedCredit(newInput)
  }

  //console.log(groupExposureData, "THIS IS GROUP EXP DATA")

  const addGroupExpArr = (exposureData) => {
    let newArr = [...groupExposureData]
    newArr.push(exposureData)
    setGroupExposureData(newArr)
  }

  const keyAddDataArr = (keyAddressData) => {
    let newArr = [...keyAddData]
    newArr.push(keyAddressData)
    setKeyAddData(newArr)
  }
  const updateKeyAddDataArr = (newData, index) => {
    setKeyAddData((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return newData
        }
        // 👇️ otherwise return object as is
        return obj
      })

      return newState
    })
  }

  const addDebtArr = (debt) => {
    let newArr = [...debtData]
    newArr.push(debt)
    setDebtData(newArr)
  }
  const [level, setLevel] = useState({
    high: [],
    low: [],
    medium: [],
    sever: [],
  })
  useEffect(() => {
    let a = {
      high: [],
      low: [],
      medium: [],
      sever: [],
    }
    if (companyData?.compliance?.alerts) {
      companyData?.compliance?.alerts.forEach((val, index) => {
        if (val.severity == 'low') {
          a.low.push(val)
        }
        if (val.severity == 'high') {
          a.high.push(val)
        }
        if (val.severity == 'medium') {
          a.medium.push(val)
        }
        if (val.severity == 'severe') {
          a.sever.push(val)
        }
      })
      setLevel(a)
    }
  }, [companyData?.compliance?.alerts])

  // console.log(companyData?.compliance?.litigations[0]?.highPriority, "sddssds")
  const addPersonArr = (keyPersonData) => {
    // let newArr = [...personData]
    // newArr.push(keyPersonData)
    console.log(keyPersonData, 'This IS KEY PETDHDH')
    setPersonData([
      ...keyPersonData,
      {
        contact: {
          callingCode: '',
          number: '',
        },
        department: '',
        designation: '',
        email: '',
        name: '',
        isEdit: false,
      },
    ])
  }
  const setEditRow = (index) => {
    let tempArr = [...personData]
    tempArr.forEach((val, i) => {
      if (i == index) [(val.isEdit = !val.isEdit)]
    })
    setPersonData(tempArr)
  }
  console.log(supplierCred, 'product')
  const creditValidation = () => {
    if (
      product.monthlyProductionCapacity == '' ||
      product.monthlyProductionCapacity == undefined
    ) {
      let toastMessage = 'Please add  monthly Production Capacitye'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      product.capacityUtilization == '' ||
      product.capacityUtilization == undefined
    ) {
      let toastMessage = 'Please add  capacity Utilization'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      product.averageStockOfCommodity == '' ||
      product.averageStockOfCommodity == undefined
    ) {
      let toastMessage = 'Please add  average Stock Of Commodity'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      product.averageStockInTransit == '' ||
      product.averageStockInTransit == undefined
    ) {
      let toastMessage = 'Please add  average Stock In Transit'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      product.AvgMonthlyElectricityBill == '' ||
      product.AvgMonthlyElectricityBill == undefined
    ) {
      let toastMessage = 'Please add  Avg Monthly Electricity Bill'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (product.availableStock == '' || product.availableStock == undefined) {
      let toastMessage = 'Please add  available Stock'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      supplierCred.supplierName == '' ||
      supplierCred.supplierName == undefined
    ) {
      let toastMessage = 'Please add supplier Name'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      supplierCred.shipmentNumber == '' ||
      supplierCred.shipmentNumber == undefined
    ) {
      let toastMessage = 'Please add number of shipment'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      supplierCred.consigneesNumber == '' ||
      supplierCred.consigneesNumber == undefined
    ) {
      let toastMessage = 'Please add consignees Number'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      supplierCred.HSCodesNumber == '' ||
      supplierCred.HSCodesNumber == undefined
    ) {
      let toastMessage = 'Please add HS Codes '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      supplierCred.countryOfOrigin == '' ||
      supplierCred.countryOfOrigin == undefined
    ) {
      let toastMessage = 'Please add country Of Origin '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      supplierCred.portOfDestination == '' ||
      supplierCred.portOfDestination == undefined
    ) {
      let toastMessage = 'Please add port Of Destination '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      supplierCred.oldestShipmentDate == '' ||
      supplierCred.oldestShipmentDate == undefined
    ) {
      let toastMessage = 'Please add oldest Shipment Date '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      supplierCred.latestShipmentDate == '' ||
      supplierCred.latestShipmentDate == undefined
    ) {
      let toastMessage = 'Please add latest Shipment Date '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    return true
  }
  const onCreditSave = () => {
    if (creditValidation()) {
      let tempPerson = [...personData]
      tempPerson.forEach((val, index) => {
        delete val.isEdit
      })
      let data = { ...product }
      data.monthlyProductionCapacity = removePrefixOrSuffix(
        product.monthlyProductionCapacity,
      )
      data.capacityUtilization = removePrefixOrSuffix(
        product.capacityUtilization,
      )
      data.AvgMonthlyElectricityBill = removePrefixOrSuffix(
        product.AvgMonthlyElectricityBill,
      )
      data.averageStockOfCommodity = removePrefixOrSuffix(
        product.averageStockOfCommodity,
      )
      data.averageStockInTransit = removePrefixOrSuffix(
        product.averageStockInTransit,
      )
      data.availableStock = removePrefixOrSuffix(product.availableStock)
      data.dailyConsumptionOfCommodity = removePrefixOrSuffix(
        product.dailyConsumptionOfCommodity,
      )

      let supplierData = { ...supplierCred }
      supplierData.commodityOfTotalTrade = removePrefixOrSuffix(
        supplierCred.commodityOfTotalTrade,
      )

      let obj = {
        productSummary: { ...data },
        supplierCredential: { ...supplierData },
        order: orderList._id,
        keyContactPerson: [...tempPerson],
        keyAddress: [...keyAddData],
        recommendation: {
          companyProfile: [...companyComment],
          commentsOnFinancials: [...financialsComment],
          strengths: [...strengthsComment],
          sanctionTerms: [...sanctionComment],
          weakness: [...weaknessComment],
        },
        debtProfile: [...debtData],
        groupExposureDetail: [...groupExposureData],
        suggestedOrderValue: suggestedCredit.suggestedOrderValue,
        suggestedCreditLimit: suggestedCredit.suggestedCreditLimit,
      }
      // console.log(obj, "credit obj")
      dispatch(UpdateCredit(obj))
    }
  }

  const filteredCreditRating =
    orderList?.company?.creditLimit?.creditRating?.filter((rating) => {
      return orderList?._id === rating.order
    })

  let suggestedValue =
    filteredCreditRating && filteredCreditRating.length > 0
      ? filteredCreditRating[0]?.suggested?.value
      : ''
  let derivedValue =
    filteredCreditRating && filteredCreditRating.length > 0
      ? filteredCreditRating[0]?.derived?.value
      : ''
  let approvedCreditValue = approvedCredit.approvedCreditValue

  let suggestedOrder = orderList?.suggestedOrderValue
  let appliedOrder = orderList?.orderValue
  let approvedOrderValue = approvedCredit.approvedOrderValue

  function getPercentageIncrease(numA, numB) {
    if (!numA) {
      return 0
    }
    return (Math.abs(numA - numB) / numB) * 100
  }

  const gettingPercentageCredit = () => {
    if (getPercentageIncrease(suggestedValue, derivedValue) > 30) {
      // if diff is < 30% than error if approve vlaue not given
      if (!approvedCreditValue) {
        let toastMessage =
          'More than 30% diff in derived and suggested value,Approved credit value required'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      return true
    }
  }

  const gettingPercentageOrder = () => {
    if (getPercentageIncrease(suggestedOrder, appliedOrder) > 30) {
      // if diff is < 30% than error if approve vlaue not given
      if (!approvedOrderValue) {
        let toastMessage =
          'More than 30% diff in applied and suggested order value,Approved order value required'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          return false
        }
      }
      return true
    }
  }

  const handleCamApprove = () => {
    if (orderValidation() && creditValidation()) {
      if (gettingPercentageCredit && gettingPercentageOrder) {
        const obj = {
          approvalRemarks: [...approveComment],
          approvedOrderValue: approvedCredit.approvedOrderValue,
          approvedCreditValue: approvedCredit.approvedCreditValue,
          order: orderList._id,
          status: 'Approved',
        }
        dispatch(UpdateCam(obj))
      }
    }
  }
  const handleCamReject = () => {
    const obj = {
      order: orderList._id,
      status: 'Rejected',
    }
    dispatch(UpdateCam(obj))
  }

  const currentOpenLink = (e) => {
    console.log(e.target.attributes[4].nodeValue, 'eee')
    if (e.target.attributes[4].nodeValue == 'Compliance') {
      let list = document.getElementsByClassName('nav-tabs')
      let tab = document.getElementsByClassName('tab-content')
      for (let i = 0; i < list[0].children.length; i++) {
        list[0].children[i].children[0].classList.remove('active')

        tab[0].children[i].classList.remove('show')
        tab[0].children[i].classList.remove('active')
      }

      list[0].children[3].children[0].classList.add('active')

      tab[0].children[3].classList.add('show')
      tab[0].children[3].classList.add('active')
    }
    setSelectedTab(e.target.attributes[4].nodeValue)
  }
  const onNext = () => {
    let list = document.getElementsByClassName('nav-tabs')
    let tab = document.getElementsByClassName('tab-content')
    for (let i = 0; i < list[0].children.length; i++) {
      //  console.log(list[0].children[i].children[0].innerHTML,"check")
      if (list[0].children[i].children[0].classList.contains('active')) {
        let tempIndex = i + 1
        if (tempIndex < list[0].children.length) {
          setSelectedTab(list[0].children[tempIndex].children[0].innerHTML)
          list[0].children[i].children[0].classList.remove('active')
          list[0].children[tempIndex].children[0].classList.add('active')
          tab[0].children[i].classList.remove('show')
          tab[0].children[i].classList.remove('active')
          tab[0].children[tempIndex].classList.add('show')
          tab[0].children[tempIndex].classList.add('active')
          break
        }
      }
    }
  }
  const onBack = () => {
    let list = document.getElementsByClassName('nav-tabs')
    let tab = document.getElementsByClassName('tab-content')
    for (let i = 0; i < list[0].children.length; i++) {
      //  console.log(list[0].children[i].children[0].classList,"check")
      if (list[0].children[i].children[0].classList.contains('active')) {
        let tempIndex = i - 1
        if (tempIndex >= 0) {
          setSelectedTab(list[0].children[tempIndex].children[0].innerHTML)
          list[0].children[i].children[0].classList.remove('active')
          list[0].children[tempIndex].children[0].classList.add('active')
          tab[0].children[i].classList.remove('show')
          tab[0].children[i].classList.remove('active')
          tab[0].children[tempIndex].classList.add('show')
          tab[0].children[tempIndex].classList.add('active')
          break
        }
      }
    }
  }

  const updateLitigationStatus = (e) => {
    dispatch(
      UpdateCompanyDetails({
        _id: orderList?.company?._id,
        litigationStatus: e.target.value,
      }),
    )
  }

  // const handleNewDocModule = (e) => {
  //   if (e.target.value === 'others') {
  //     setManualDocModule(false)
  //   } else {
  //     setManualDocModule(true)
  //     setNewDoc({ ...newDoc, name: e.target.value })
  //   }
  // }

  // const uploadDocumentHandler = () => {
  //   const fd = new FormData()
  //   console.log(newDoc, newDoc.document, "pdfFile", newDoc.module)
  //   fd.append('document', newDoc.document)
  //   fd.append('module', newDoc.module)
  //   fd.append('order', orderList?.termsheet?.order)
  //   // fd.append('type', newDoc.type))
  //   fd.append('name', newDoc.name)

  //   dispatch(AddingDocument(fd))
  // }

  // const uploadDocument2 = (e) => {
  //   const newUploadDoc1 = { ...newDoc }
  //   newUploadDoc1.document = e.target.files[0]
  //   setNewDoc(newUploadDoc1)
  // }
  // console.log(newDoc, "documents")

  const GstDataHandler = (data) => {
    console.log(data, 'gst')
    setGstData(data)
  }
  console.log(gstData, 'gstDAta')

  const deleteData = (index) => {
    //console.log("indexssd",index)
    setCompanyComment([
      ...companyComment.slice(0, index),
      ...companyComment.slice(index + 1),
    ])
  }

  const [totalCourt, setTotalCourt] = useState({
    pending: 0,
    disposed: 0,
    total: 0,
    high: 0,
    medium: 0,
    relevence: 0,
  })
  const [Supreme, setSupreme] = useState([])
  const [District, setDistrict] = useState([])
  const [High, setHigh] = useState([])
  const [Tribunal, setTribunal] = useState([])
  const [filterType, setFilterType] = useState({
    filterBy: {
      pending: true,
      disposed: false,
      total: false,
    },
    party: 'Respondent',
    class: 'Criminal',
    risk: '',
  })
  console.log(filterType, 'filterType')
  useEffect(() => {
    if (companyData) {
      filterLitigation()
    }
  }, [companyData, filterType])
  const filterLitigation = () => {
    let count = {
      pending: 0,
      disposed: 0,
      total: 0,
      high: 0,
      medium: 0,
      relevence: 0,
    }
    companyData?.compliance?.districtCourt?.cases?.forEach((val, index) => {
      count.total = count.total + 1
      if (val.caseStatus == 'Disposed') {
        count.disposed = count.disposed + 1
      }
      if (val.caseStatus == 'Pending') {
        count.pending = count.pending + 1
      }
      if (val.severity_ == 'HIGH' || val.severity_ == 'high') {
        count.high = count.high + 1
      }
      if (val.severity_ == 'medium') {
        count.medium = count.medium + 1
      }
      if (val.severity_ == null) {
        count.relevence = count.relevence + 1
      }
    })
    companyData?.compliance?.highCourt?.cases?.forEach((val, index) => {
      count.total = count.total + 1
      if (val.caseStatus == 'Disposed') {
        count.disposed = count.disposed + 1
      }
      if (val.caseStatus == 'Pending') {
        count.pending = count.pending + 1
      }
      if (val.severity_ == 'HIGH' || val.severity_ == 'high') {
        count.high = count.high + 1
      }
      if (val.severity_ == 'medium') {
        count.medium = count.medium + 1
      }
      if (val.severity_ == null) {
        count.relevence = count.relevence + 1
      }
    })
    companyData?.compliance?.supremeCourt?.cases?.forEach((val, index) => {
      count.total = count.total + 1
      if (val.caseStatus == 'Disposed') {
        count.disposed = count.disposed + 1
      }
      if (val.caseStatus == 'Pending') {
        count.pending = count.pending + 1
      }
      if (val.severity_ == 'HIGH' || val.severity_ == 'high') {
        count.high = count.high + 1
      }
      if (val.severity_ == 'medium') {
        count.medium = count.medium + 1
      }
      if (val.severity_ == null) {
        count.relevence = count.relevence + 1
      }
    })
    companyData?.compliance?.tribunalCourts?.cases?.forEach((val, index) => {
      count.total = count.total + 1
      if (val.caseStatus == 'Disposed') {
        count.disposed = count.disposed + 1
      }
      if (val.caseStatus == 'Pending') {
        count.pending = count.pending + 1
      }
      if (val.severity_ == 'HIGH' || val.severity_ == 'high') {
        count.high = count.high + 1
      }
      if (val.severity_ == 'medium') {
        count.medium = count.medium + 1
      }
      if (val.severity_ == null) {
        count.relevence = count.relevence + 1
      }
    })
    let districtCourt = []
    let supremeCourt = []
    let highCourt = []
    let tribunalCourts = []
    //civil
    districtCourt = companyData?.compliance?.districtCourt?.cases?.filter(
      (val) => {
        if (val.civilCriminal == filterType.class) {
          return val
        }
      },
    )
    supremeCourt = companyData?.compliance?.supremeCourt?.cases?.filter(
      (val) => {
        if (val.civilCriminal == filterType.class) {
          return val
        }
      },
    )
    highCourt = companyData?.compliance?.highCourt?.cases?.filter((val) => {
      if (val.civilCriminal == filterType.class) {
        return val
      }
    })
    tribunalCourts = companyData?.compliance?.tribunalCourts?.cases?.filter(
      (val) => {
        if (val.civilCriminal == filterType.class) {
          return val
        }
      },
    )
    //risk:
    districtCourt = companyData?.compliance?.districtCourt?.cases?.filter(
      (val) => {
        if (
          (val.severity_ == filterType.risk) == 'high'
            ? 'High' || 'high'
            : filterType.risk
        ) {
          return val
        }
      },
    )
    supremeCourt = companyData?.compliance?.supremeCourt?.cases?.filter(
      (val) => {
        if (
          (val.severity_ == filterType.risk) == 'high'
            ? 'High' || 'high'
            : filterType.risk
        ) {
          return val
        }
      },
    )
    highCourt = companyData?.compliance?.highCourt?.cases?.filter((val) => {
      if (
        (val.severity_ == filterType.risk) == 'high'
          ? 'High' || 'high'
          : filterType.risk
      ) {
        return val
      }
    })
    tribunalCourts = companyData?.compliance?.tribunalCourts?.cases?.filter(
      (val) => {
        if (
          (val.severity_ == filterType.risk) == 'high'
            ? 'High' || 'high'
            : filterType.risk
        ) {
          return val
        }
      },
    )
    //filterBY
    districtCourt = companyData?.compliance?.districtCourt?.cases?.filter(
      (val) => {
        if (
          val.caseStatus == filterType.pending
            ? 'Pending'
            : null || val.caseStatus == filterType.disposed
            ? 'Disposed'
            : null
        ) {
          return val
        } else {
          return val
        }
      },
    )
    supremeCourt = companyData?.compliance?.supremeCourt?.cases?.filter(
      (val) => {
        if (
          val.caseStatus == filterType.pending
            ? 'Pending'
            : null || val.caseStatus == filterType.disposed
            ? 'Disposed'
            : null
        ) {
          return val
        } else {
          return val
        }
      },
    )
    highCourt = companyData?.compliance?.highCourt?.cases?.filter((val) => {
      if (
        val.caseStatus == filterType.pending
          ? 'Pending'
          : null || val.caseStatus == filterType.disposed
          ? 'Disposed'
          : null
      ) {
        return val
      } else {
        return val
      }
    })
    tribunalCourts = companyData?.compliance?.tribunalCourts?.cases?.filter(
      (val) => {
        if (
          val.caseStatus == filterType.pending
            ? 'Pending'
            : null || val.caseStatus == filterType.disposed
            ? 'Disposed'
            : null
        ) {
          return val
        } else {
          return val
        }
      },
    )

    setSupreme(supremeCourt)
    setTribunal(tribunalCourts)
    setHigh(highCourt)
    setDistrict(districtCourt)

    setTotalCourt(count)
  }
  useEffect(() => {
    let temp = []
    if (companyData?.profile?.directorDetail.length > 0) {
      companyData?.profile?.directorDetail.forEach((val, index) => {
        temp.push({
          contact: {
            callingCode: '+91',
            number: '',
          },
          department: '',
          designation: val.designation,
          email: val.email,
          name: val.name,
        })
      })
    }
    console.log(temp, 'temp')
    setPersonData([...temp])
  }, [companyData?.profile?.directorDetai])
  console.log(personData, 'per')
  console.log(companyData?.profile?.directorDetail, 'director')
  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className={`${styles.title_header} d-flex align-items-center`}>
            <div className={`d-flex align-items-center flex-grow-1`}>
              <img
                src="/static/keyboard_arrow_right-3.svg"
                alt="arrow right"
                className="img-fluid image_arrow mr-2"
              />
              <h1 className={`${styles.title} heading`}>
                {orderList?.company?.companyName}
              </h1>
            </div>
            {selectedTab == 'CAM' ? (
              <>
                <div
                  className={`${styles.unit} ml-auto mt-n4 d-flex align-items-center`}
                >
                  <h5 className={`${styles.unit_label} mb-0 accordion_Text`}>
                    Unit :
                  </h5>
                  <div className="d-flex align-items-center position-relative">
                    <select
                      className={`${styles.select} ${styles.customSelect} accordion_body form-select`}
                      aria-label="Default select example"
                    >
                      <option selected value="Crores">
                        Crores
                      </option>
                    </select>
                    <img
                      className={`${styles.arrow} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>
              </>
            ) : null}
            {uploadBtn ? (
              <div className="ml-auto">
                {uploadButton(dispatch, orderList, companyData)}{' '}
              </div>
            ) : null}
            {/* <div className="ml-auto">
                <button type="button" className={`${styles.btnPrimary} btn btn-primary`}><img src="/static/refresh.svg" alt="refresh" className="img-fluid" />Update Info</button>
                <div className={`${styles.lastModified} text `}><span>Last Modified:</span> 28 Jan,11:34am</div>
            </div> */}
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link active`}
                data-toggle="tab"
                href="#Profile"
                role="tab"
                aria-controls="Profile"
                aria-selected="true"
                onClick={(e) => {
                  currentOpenLink(e)
                  setUploadBtn(true)
                }}
              >
                Profile
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#Financials"
                role="tab"
                aria-controls="Financials"
                aria-selected="false"
                onClick={(e) => {
                  currentOpenLink(e)
                  setUploadBtn(true)
                }}
              >
                Financials
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#gst"
                role="tab"
                aria-controls="GST"
                aria-selected="false"
                onClick={(e) => {
                  currentOpenLink(e)
                  setUploadBtn(true)
                }}
              >
                GST
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#Compliance"
                role="tab"
                aria-controls="Compliance"
                aria-selected="false"
                onClick={(e) => {
                  currentOpenLink(e)
                  setUploadBtn(true)
                }}
              >
                Compliance
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#Orders"
                role="tab"
                aria-controls="Orders"
                aria-selected="false"
                onClick={(e) => {
                  currentOpenLink(e)
                  setUploadBtn(true)
                }}
              >
                Orders
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#Credit"
                role="tab"
                aria-controls="Credit"
                aria-selected="false"
                onClick={(e) => {
                  currentOpenLink(e)
                  setUploadBtn(true)
                }}
              >
                Credit
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#DocumentsTab"
                role="tab"
                aria-controls="DocumentsTab"
                aria-selected="true"
                onClick={(e) => {
                  currentOpenLink(e)
                  setUploadBtn(false)
                }}
              >
                Documents
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#cam"
                role="tab"
                aria-controls="CAM"
                aria-selected="false"
                onClick={(e) => {
                  currentOpenLink(e)
                  setUploadBtn(true)
                }}
              >
                CAM
              </a>
            </li>
          </ul>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 px-0 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <table width="100%" style={{fontFamily:'Arial, Helvetica, sans-serif'}} cellPadding="0" cellSpacing="0" border="0">
                  <tr>
                    <td valign="top">
                      <table width="100%" bgColor="#ffffff" cellPadding="10" cellSpacing="0" border="0" style={{border:'1px solid #D2D7E5', borderRadius:'6px', boxShadow:'0 3px 6px #CAD0E2', marginBottom:'26px'}}>
                        <tr>
                          <td colSpan={4} height="78" style={{padding:'0 35px', borderBottom:'2px solid #CAD6E6'}}><h3 style={{fontSize:'22px', color:'#3687E8', lineHeight:'27px', fontWeight:'bold'}}>Company Details</h3></td>
                        </tr>
                        <tr>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px 25px 35px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Company Name</span><br/>Ramakrishna Traders</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>CIN</span><br/>U55101UR1986PL007811</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Company PAN</span><br/>AAOCS3552N <img src="/static/approved.svg" alt="Approved"/></td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>IEC Number</span><br/>2904000291</td>
                        </tr>
                        <tr>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px 25px 35px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Type of Business</span><br/>Manufacturer</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Date of Incorporation</span><br/>13-01-2019</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Listing Status</span><br/>Unlisted</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Constitution</span><br/>Public Ltd.</td>
                        </tr>
                        <tr>
                          <td width="25%" style={{fontSize:'20px', color:'#EA3F3F', lineHeight:'25px', fontWeight:'bold', padding:'25px 10px 25px 35px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', fontWeight:'500', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Active Compliant</span><br/>No</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Contact Number</span><br/>0612-7894523</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Email Domain</span><br/>ramkrishnatraders@gmail.com <img src="/static/approved.svg" alt="Approved"/></td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Number of Shareholders</span><br/>6</td>
                        </tr>
                        <tr>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px 25px 35px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Shell/ Hawala Score</span><br/>60</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Paid-Up Capital (Cr)</span><br/>100.00</td>
                          <td width="25%" style={{fontSize:'20px', color:'#EA3F3F', lineHeight:'25px', fontWeight:'bold', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', fontWeight:'500', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Last Balance Sheet</span><br/>13-03-2019</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Employee Count</span><br/>25</td>
                        </tr>
                        <tr>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px 25px 35px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Existing Limit (Cr)</span><br/>10.00</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Utilized Limit (Cr)</span><br/>2.00</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Registered Address</span><br/>123, My Building Famous Lane Hyderabad, Telangana - 500072</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Corporate Address</span><br/>561, My Building Lane No. 11 Delhi, Delhi - 110001</td>
                        </tr>
                        <tr>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px 25px 35px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Sourcing Channel</span><br/>Website</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Referred By</span><br/>CHA</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'25px 10px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Referral Name</span><br/>Bhutani Traders</td>
                          <td width="25%"></td>
                        </tr>
                      </table>
                      <table width="100%" bgColor="#ffffff" cellPadding="10" cellSpacing="0" border="0" style={{border:'1px solid #D2D7E5', borderRadius:'6px', boxShadow:'0 3px 6px #CAD0E2', marginBottom:'26px'}}>
                        <tr>
                          <td colSpan={4} height="78" style={{padding:'0 35px', borderBottom:'2px solid #CAD6E6'}}><h3 style={{fontSize:'22px', color:'#3687E8', lineHeight:'27px', fontWeight:'bold'}}>Auditor's Details</h3></td>
                        </tr>
                        <tr bgColor="#FAFAFB" height="67">
                          <td style={{fontSize:'15px', color:'#3687E8', lineHeight:'18px', fontWeight:'bold', paddingLeft:'35px', textTransform:'uppercase'}}></td>
                          <td style={{fontSize:'15px', color:'#3687E8', lineHeight:'18px', fontWeight:'bold', textTransform:'uppercase'}}>MAR-20</td>
                          <td style={{fontSize:'15px', color:'#3687E8', lineHeight:'18px', fontWeight:'bold', textTransform:'uppercase'}}>MAR-19</td>
                          <td style={{fontSize:'15px', color:'#3687E8', lineHeight:'18px', fontWeight:'bold', textTransform:'uppercase'}}>MAR-18</td>
                        </tr>
                        <tr>
                          <td width="25%" style={{fontSize:'19px', color:'#111111', lineHeight:'23px', padding:'25px 10px 15px 35px'}}>Name of Auditor</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'23px', padding:'25px 10px 15px'}}>value</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'23px', padding:'25px 10px 15px'}}>value</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'23px', padding:'25px 10px 15px'}}>value</td>
                        </tr>
                        <tr>
                          <td width="25%" style={{fontSize:'19px', color:'#111111', lineHeight:'23px', padding:'15px 10px 15px 35px'}}>Registration Number</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'23px', padding:'15px 10px 15px'}}>value</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'23px', padding:'15px 10px 15px'}}>value</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'23px', padding:'15px 10px 15px'}}>value</td>
                        </tr>
                        <tr>
                          <td width="25%" style={{fontSize:'19px', color:'#111111', lineHeight:'23px', padding:'15px 10px 35px 35px'}}>Change in Auditor</td>
                          <td width="25%" style={{fontSize:'20px', color:'#EA3F3F', lineHeight:'23px', padding:'15px 10px 35px'}}>value</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'23px', padding:'15px 10px 35px'}}>value</td>
                          <td width="25%" style={{fontSize:'20px', color:'#111111', lineHeight:'23px', padding:'15px 10px 35px'}}>value</td>
                        </tr>
                      </table>
                      <table width="100%" bgColor="#ffffff" cellPadding="10" cellSpacing="0" border="0" style={{border:'1px solid #D2D7E5', borderRadius:'6px', boxShadow:'0 3px 6px #CAD0E2', marginBottom:'26px'}}>
                        <tr>
                          <td height="78" style={{padding:'0 35px', borderBottom:'2px solid #CAD6E6'}}><h3 style={{fontSize:'22px', color:'#3687E8', lineHeight:'27px', fontWeight:'bold'}}>Director Details</h3></td>
                        </tr>
                        <tr>
                          <td valign="top" style={{padding:'25px 35px'}}>
                            <table width="100%" bgColor="#FAFAFA" cellPadding="15" cellSpacing="0" border="0" style={{border:'2px solid #E6EAF0', borderLeft:'none', borderRadius:'6px'}}>
                              <tr style={{borderLeft:'9px solid #3687E8'}}>
                                <td width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingLeft:'28px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Name</span><br/>Arv Jay</td>
                                <td width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>PAN</span><br/>AAVPW27766Q <img src="/static/approved.svg" alt="Approved"/></td>
                                <td width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Email Id</span><br/>email@example.com</td>
                                <td width="16.66%" style={{fontSize:'20px', color:'#43C34D', lineHeight:'25px', fontWeight:'bold'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', fontWeight:'500', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>DIN</span><br/>03148692</td>
                                <td width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Tenure Start Date</span><br/>17-02-2019</td>
                                <td width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>DSC Status</span><br/>Approved</td>
                              </tr>
                              <tr style={{borderLeft:'9px solid #C4D7EF', borderTop:'2px solid #E6EAF0'}}>
                                <td width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingLeft:'28px', paddingTop:'46px', paddingBottom:'30px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>DIN Status</span><br/>Expired</td>
                                <td width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'46px', paddingBottom:'30px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>DSC Registered</span><br/>Yes</td>
                                <td width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'46px', paddingBottom:'30px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>DSC Expiry Date</span><br/>17-02-2021</td>
                                <td width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'46px', paddingBottom:'30px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Designation</span><br/>Director</td>
                                <td width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'46px', paddingBottom:'30px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Date Of Birth</span><br/>12-12-1990</td>
                                <td width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'46px', paddingBottom:'30px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Contact</span><br/>+91 9876543210</td>
                              </tr>
                              <tr style={{borderLeft:'9px solid #C4D7EF'}}>
                                <td valign="top" width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingLeft:'28px', paddingTop:'30px', paddingBottom:'30px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Gender</span><br/>Male</td>
                                <td valign="top" width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'30px', paddingBottom:'30px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Fathers Name</span><br/>Kumar Jav</td>
                                <td valign="top" width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'30px', paddingBottom:'30px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>% Shareholding</span><br/>40%</td>
                                <td valign="top" width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'30px', paddingBottom:'30px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Authorised Signatory</span><br/>Yes</td>
                                <td valign="top" width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'30px', paddingBottom:'30px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Landline</span><br/>0542-5463874</td>
                                <td valign="top" width="16.66%" style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'30px', paddingBottom:'30px'}}><span style={{fontSize:'16px', color:'#00000080', lineHeight:'17px', letterSpacing:'0.53px', display:'inline-block', marginBottom:'10px'}}>Address</span><br/># 456 Xyz Building Elite Lane Mumbai Maharashtra - 400012</td>
                              </tr>
                              <tr style={{borderLeft:'9px solid #C4D7EF'}}>
                                <td colSpan={6} style={{padding:'0 35px'}}><span style={{borderTop:'1px solid rgba(112, 112, 112, 0.3', height:'30px', width:'100%', display:'inline-block'}}></span></td>
                              </tr>
                              <tr style={{borderLeft:'9px solid #C4D7EF'}}>
                                <td colSpan={6} valign="top" style={{padding:'0 35px 35px'}}>
                                  <table width="100%" bgColor="#FFFFFF" cellPadding="8" cellSpacing="0" border="0" style={{border:'2px solid #E6EAF0', borderRadius:'6px'}}>
                                    <tr>
                                      <td style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'bold', padding:'22px 35px', borderBottom:'1px solid rgba(112, 112, 112, 0.3)'}}>Other Associated Entities</td>
                                    </tr>
                                    <tr>
                                      <td style={{fontSize:'20px', color:'#3687E8', lineHeight:'25px', fontWeight:'500', padding:'22px 35px'}}>Current (2)</td>
                                    </tr>
                                    <tr>
                                      <td valign="top" style={{padding:'0 35px 35px'}}>
                                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                                          <tr style={{borderBottom:'1px solid rgba(112, 112, 112, 0.2)'}}>
                                            <td width="25%" style={{fontSize:'15px', color:'#8492A6', lineHeight:'18px', fontWeight:'bold', paddingBottom:'10px'}}>CIN</td>
                                            <td width="25%" style={{fontSize:'15px', color:'#8492A6', lineHeight:'18px', fontWeight:'bold', paddingBottom:'10px'}}>ENTITY NAME</td>
                                            <td width="25%" style={{fontSize:'15px', color:'#8492A6', lineHeight:'18px', fontWeight:'bold', paddingBottom:'10px'}}>TENURE START DATE</td>
                                            <td width="25%" style={{fontSize:'15px', color:'#8492A6', lineHeight:'18px', fontWeight:'bold', paddingBottom:'10px'}}>TENURE END DATE</td>
                                          </tr>
                                          <tr>
                                            <td style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'22px', paddingBottom:'8px'}}>U55101GR1986PLC004444</td>
                                            <td style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'22px', paddingBottom:'8px'}}>XYZ InfoTech Private Ltd</td>
                                            <td style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'22px', paddingBottom:'8px'}}>22-02-2022</td>
                                            <td style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'22px', paddingBottom:'8px'}}>22-02-2023</td>
                                          </tr>
                                          <tr>
                                            <td style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'8px', paddingBottom:'8px'}}>U55101GR1986PLC004444</td>
                                            <td style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'8px', paddingBottom:'8px'}}>XYZ InfoTech Private Ltd</td>
                                            <td style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'8px', paddingBottom:'8px'}}>22-02-2022</td>
                                            <td style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingTop:'8px', paddingBottom:'8px'}}>22-02-2023</td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <table width="100%" bgColor="#ffffff" cellPadding="10" cellSpacing="0" border="0" style={{border:'1px solid #D2D7E5', borderRadius:'6px', boxShadow:'0 3px 6px #CAD0E2', marginBottom:'26px'}}>
                        <tr>
                          <td height="78" style={{padding:'0 35px', borderBottom:'2px solid #CAD6E6'}}><h3 style={{fontSize:'22px', color:'#3687E8', lineHeight:'27px', fontWeight:'bold'}}>Credit Ratings</h3></td>
                        </tr>
                        <tr>
                          <td valign="top" style={{padding:'35px'}}>
                            <table width="100%" cellpadding="15" style={{border:'2px solid #E6EAF0'}} cellspacing="0" border="0">
                              <tr bgColor="#FAFAFA">
                                <td width="12%" rowSpan={2} style={{fontSize:'15px', color:'#8492A6', lineHeight:'18px', fontWeight:'bold', textTransform:'uppercase', paddingLeft:'30px', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6'}}>DATE</td>
                                <td width="15%" rowSpan={2} style={{fontSize:'15px', color:'#8492A6', lineHeight:'18px', fontWeight:'bold', textTransform:'uppercase', paddingLeft:'30px', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6'}}>RATING AGENCY</td>
                                <td width="13%" rowSpan={2} style={{fontSize:'15px', color:'#8492A6', lineHeight:'18px', fontWeight:'bold', textTransform:'uppercase', paddingLeft:'30px', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6'}}>TERM</td>
                                <td width="28%" rowSpan={2} style={{fontSize:'15px', color:'#8492A6', lineHeight:'18px', fontWeight:'bold', textTransform:'uppercase', paddingLeft:'30px', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6'}}>INSTRUMENT</td>
                                <td width="8%" rowSpan={2} align="center" style={{fontSize:'15px', color:'#8492A6', lineHeight:'18px', fontWeight:'bold', textTransform:'uppercase', whiteSpace:'nowrap', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6'}}>CHANGE<br/>IN RATING</td>
                                <td colSpan={3} align="center" style={{fontSize:'15px', color:'#8492A6', lineHeight:'18px', fontWeight:'bold', textTransform:'uppercase', borderBottom:'2px solid #F0F2F6'}}>CREDIT RATING</td>
                              </tr>
                              <tr bgColor="#FAFAFA">
                                <td width="8%" align="center" style={{fontSize:'15px', color:'#8492A6', lineHeight:'18px', fontWeight:'bold', textTransform:'uppercase', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6', padding:'8px'}}>2020</td>
                                <td width="8%" align="center" style={{fontSize:'15px', color:'#8492A6', lineHeight:'18px', fontWeight:'bold', textTransform:'uppercase', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6', padding:'8px'}}>2019</td>
                                <td width="8%" align="center" style={{fontSize:'15px', color:'#8492A6', lineHeight:'18px', fontWeight:'bold', textTransform:'uppercase', borderBottom:'2px solid #F0F2F6', padding:'8px'}}>2018</td>
                              </tr>
                              <tr>
                                <td style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6', paddingLeft:'30px'}}>30-04-2020</td>
                                <td style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6', paddingLeft:'30px'}}>Birchwood</td>
                                <td style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6', paddingLeft:'30px'}}>Long Term</td>
                                <td style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6', paddingLeft:'30px'}}>Long term bank loan 12.60 Crore</td>
                                <td align="center" style={{borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6'}}><img src="/static/arrow-up-green.svg" alt="Arrow Green" /></td>
                                <td align="center" style={{fontSize:'19px', color:'#111111', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6'}}>AA+<br/><span style={{fontSize:'16px', color:'#FF9D00', lineHeight:'19px', fontWeight:'500'}}>(Stable)</span></td>
                                <td align="center" style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6'}}>-</td>
                                <td align="center" style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderBottom:'2px solid #F0F2F6'}}>-</td>
                              </tr>
                              <tr>
                                <td style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6', paddingLeft:'30px'}}>30-04-2019</td>
                                <td style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6', paddingLeft:'30px'}}>America First</td>
                                <td style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6', paddingLeft:'30px'}}>-</td>
                                <td style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6', paddingLeft:'30px'}}>Long term bank loan 165 Crore</td>
                                <td align="center" style={{borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6'}}><img src="/static/arrow-down-red.svg" alt="Arrow Red" /></td>
                                <td align="center" style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6'}}>-</td>
                                <td align="center" style={{fontSize:'19px', color:'#111111', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', borderBottom:'2px solid #F0F2F6'}}>BB+<br/><span style={{fontSize:'16px', color:'#EA3F3F', lineHeight:'19px', fontWeight:'500'}}>(Negative)</span></td>
                                <td align="center" style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderBottom:'2px solid #F0F2F6'}}>-</td>
                              </tr>
                              <tr>
                                <td style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', paddingLeft:'30px'}}>30-04-2018</td>
                                <td style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', paddingLeft:'30px'}}>Alliant</td>
                                <td style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', paddingLeft:'30px'}}>Long Term</td>
                                <td style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6', paddingLeft:'30px'}}>Long term bank loan 12.60 Crore</td>
                                <td align="center" style={{borderRight:'2px solid #F0F2F6'}}><img src="/static/arrow-up-green.svg" alt="Arrow Green" /></td>
                                <td align="center" style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6'}}>-</td>
                                <td align="center" style={{fontSize:'19px', color:'#111111', lineHeight:'24px', fontWeight:'500', borderRight:'2px solid #F0F2F6'}}>-</td>
                                <td align="center" style={{fontSize:'19px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'500'}}>AA+<br/><span style={{fontSize:'16px', color:'#EA3F3F', lineHeight:'19px', fontWeight:'500'}}>(Positive)</span></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <div
                  className="tab-pane fade show active"
                  id="Profile"
                  role="tabpanel"
                >
                  <div className="accordion shadow-none" id="profileAccordion">
                    <CompanyDetails
                      order={orderList?.company}
                      companyDetail={companyData}
                    />
                    <AuditorsDetail
                      auditorsDetails={companyData?.profile?.auditorDetail}
                    />
                    <AuditorDeatils directorData={companyData} />
                    <ShareHoldingPattern
                      shareHolding={companyData?.profile?.shareholdingPattern}
                    />
                    <CreditRatings
                      creditRating={companyData?.profile?.creditRating}
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="Financials" role="tabpanel">
                  <div
                    className="accordion shadow-none"
                    id="FinancialsAccordion"
                  >
                    <BalanceSheet
                      rtrnChartIndiaction={rtrnChartIndiaction}
                      balanceData={companyData}
                    />

                    <IncomeStatement
                      rtrnChartIndiaction={rtrnChartIndiaction}
                      incomeData={companyData}
                    />

                    <CashFlow
                      rtrnChartIndiaction={rtrnChartIndiaction}
                      cashData={companyData}
                    />

                    <Ratios
                      rtrnChartIndiaction={rtrnChartIndiaction}
                      ratioData={companyData}
                    />

                    <Peer peerData={companyData} />

                    <OpenCharges chargesData={companyData} />
                  </div>
                </div>
                <div className="tab-pane fade" id="gst" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <GST
                      alertObj={alertObj}
                      GstDataHandler={GstDataHandler}
                      orderList={orderList}
                      companyData={companyData}
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="Compliance" role="tabpanel">
                  <div className={`${styles.card} card`}>
                    <div
                      className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                      style={{ cursor: 'default' }}
                    >
                      <div
                        className={`${styles.detail_head_container}  d-flex align-items-center justify-content-between w-100`}
                      >
                        <h2 className="mb-0 w-100 ">Compliance</h2>
                        <div
                          className={`${styles.categories} mb-0  d-flex align-items-center justify-content-end `}
                        >
                          <label className={styles.label}>Status:</label>
                          <div className={`${styles.status}`}>
                            <span>
                              {companyData?.compliance?.other?.complianceStatus}{' '}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span
                        data-toggle="collapse"
                        data-target="#compliance"
                        aria-expanded="true"
                        aria-controls="compliance"
                      >
                        +
                      </span>
                    </div>
                    <div
                      id="compliance"
                      className="collapse"
                      aria-labelledby="compliance"
                      data-parent="#profileAccordion"
                    >
                      <div
                        className={` ${styles.cardBody_compliance} card-body border_color`}
                      >
                        <Row className={` ${styles.row} mt-1 mb-1`}>
                          <Col className={`${styles.col}`} sm={2}>
                            <span
                              className={`${styles.head} d-flex align-items-center justify-content-flex-start`}
                            >
                              Severe Risk ({level.sever.length})
                            </span>
                          </Col>
                          <Col className={`${styles.col}`}>
                            <div
                              className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}
                            >
                              <div
                                className={`${styles.val} d-flex align-items-center justify-content-start`}
                              >
                                {companyData?.compliance?.alerts?.map(
                                  (alert, index) => {
                                    if (
                                      alert?.severity?.trim().toLowerCase() ===
                                      'severe'
                                    ) {
                                      return (
                                        <div
                                          key={index}
                                          className={`${styles.compliance_purple} d-flex align-items-center justify-content-center`}
                                        >
                                          <div
                                            className={styles.purple_dot}
                                          ></div>
                                          <div
                                            className={`${styles.compliance_content} Compliance ml-1`}
                                          >
                                            {alertObj[alert.alert]}
                                          </div>
                                        </div>
                                      )
                                    }
                                  },
                                )}
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className={` ${styles.row} mt-1 mb-1`}>
                          <Col className={`${styles.col}`} sm={2}>
                            <span className={styles.head}>
                              High Risk ({level.high.length})
                            </span>
                          </Col>
                          <Col className={`${styles.col}`}>
                            <div
                              className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}
                            >
                              <div
                                className={`${styles.val} d-flex align-items-center justify-content-flex-start`}
                              >
                                {companyData?.compliance?.alerts?.map(
                                  (alert, index) => {
                                    if (
                                      alert.severity.trim().toLowerCase() ===
                                      'high'
                                    ) {
                                      return (
                                        <div
                                          key={index}
                                          className={`${styles.compliance_red} d-flex align-items-center justify-content-center`}
                                        >
                                          <div className={styles.red_dot}></div>
                                          <div
                                            className={`${styles.compliance_content} Compliance ml-1`}
                                          >
                                            {alertObj[alert.alert]}
                                          </div>
                                        </div>
                                      )
                                    }
                                  },
                                )}
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className={` ${styles.row} mt-1 mb-1`}>
                          <Col className={`${styles.col}`} sm={2}>
                            <span className={styles.head}>
                              Medium Risk ({level.medium.length})
                            </span>
                          </Col>
                          <Col className={`${styles.col}`}>
                            <div
                              className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}
                            >
                              <div
                                className={`${styles.val} d-flex align-items-center justify-content-flex-start`}
                              >
                                {companyData?.compliance?.alerts?.map(
                                  (alert, index) => {
                                    if (
                                      alert.severity.trim().toLowerCase() ===
                                      'medium'
                                    ) {
                                      return (
                                        <div
                                          key={index}
                                          className={`${styles.compliance_yellow} d-flex align-items-center justify-content-center`}
                                        >
                                          <div
                                            className={styles.yellow_dot}
                                          ></div>
                                          <div
                                            className={`${styles.compliance_content} Compliance ml-1`}
                                          >
                                            {alertObj[alert.alert]}
                                          </div>
                                        </div>
                                      )
                                    }
                                  },
                                )}
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className={` ${styles.row} mt-1 mb-1`}>
                          <Col className={`${styles.col}`} sm={2}>
                            <span className={styles.head}>
                              Low Risk ({level.low.length})
                            </span>
                          </Col>
                          <Col className={`${styles.col}`}>
                            <div
                              className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}
                            >
                              <div
                                className={`${styles.val} d-flex align-items-center justify-content-flex-start`}
                              >
                                {companyData?.compliance?.alerts?.map(
                                  (alert, index) => {
                                    if (
                                      alert.severity.trim().toLowerCase() ===
                                      'low'
                                    ) {
                                      return (
                                        <div
                                          key={index}
                                          className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}
                                        >
                                          <div
                                            className={styles.orange_dot}
                                          ></div>
                                          <div
                                            className={`${styles.compliance_content} Compliance ml-1`}
                                          >
                                            {alertObj[alert.alert]}
                                          </div>
                                        </div>
                                      )
                                    }
                                  },
                                )}
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                  {/* details */}
                  <div className={`${styles.card} card`}>
                    <div
                      className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                      style={{ cursor: 'default' }}
                    >
                      <h2 className="mb-0 ">Details</h2>
                      <div
                        className={`${styles.categories} mb-0 d-flex align-items-center`}
                      >
                        <label className={styles.label}>Categories:</label>
                        <select
                          onChange={(e) => setComplienceFilter(e.target.value)}
                          className={`${styles.form_control} form-control`}
                        >
                          <option>Select an option</option>

                          <option selected value="All">
                            All
                          </option>
                          <option value="StatutoryCompliance">
                            Statutory Compliance
                          </option>
                          <option value="BankingDefaults">
                            Banking Defaults
                          </option>
                        </select>
                        <span
                          data-toggle="collapse"
                          data-target="#details"
                          aria-expanded="true"
                          aria-controls="details"
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div
                      id="details"
                      className="collapse"
                      aria-labelledby="details"
                      data-parent="#profileAccordion"
                    >
                      <div
                        className={` ${styles.cardBody_details} card-body border_color`}
                      >
                        <div className={styles.table_scroll_outer}>
                          <div className={styles.table_scroll_inner}>
                            {table2(
                              complienceStatutoryFilter,
                              complienceBalanceFilter,
                              complienceFilter,
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.card} card`}>
                    <div
                      className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                      style={{ cursor: 'default' }}
                    >
                      <div
                        className={`${styles.detail_head_container} d-flex align-items-center justify-content-between w-100`}
                      >
                        <h2 className="mb-0">Litigations</h2>
                        <div
                          className={`${styles.categories}  d-flex align-items-center`}
                        >
                          <label className={styles.label}>
                            Litigations Status:
                          </label>
                          <select
                            onChange={updateLitigationStatus}
                            className={`${styles.form_control} form-control`}
                          >
                            {orderList?.company?.litigationStatus !==
                            'Pending' ? (
                              <>
                                <option selected value="All">
                                  All
                                </option>
                                <option value="Pending">Pending</option>
                                <option value="Disposed">Disposed</option>
                              </>
                            ) : (
                              <>
                                <option selected value="All">
                                  All
                                </option>
                                <option value="Disposed">Disposed</option>
                                <option value="Pending">Pending</option>
                              </>
                            )}
                          </select>

                          <span
                            data-toggle="collapse"
                            data-target="#litigations"
                            aria-expanded="true"
                            aria-controls="litigations"
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      id="litigations"
                      className="collapse"
                      aria-labelledby="litigations"
                      data-parent="#profileAccordion"
                    >
                      <div
                        className={` ${styles.cardBody_litigations} card-body border_color`}
                      >
                        <div
                          className={`${styles.checkbox_Container}`}
                          data-toggle="collapse"
                        >
                          <Row>
                            <Col md={4}>
                              <p className={`mb-3`}>Filter by</p>
                              <div
                                className={` d-flex align-items-center justify-content-start`}
                              >
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                    onChange={() => {
                                      filterType.filterBy.pending =
                                        !filterType.filterBy.pending
                                      setFilterType({ ...filterType })
                                    }}
                                    checked={
                                      filterType.filterBy.pending
                                        ? 'checked'
                                        : ''
                                    }
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Pending ({totalCourt.pending})
                                  </label>
                                </div>
                                <div className="form-check ml-4">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault1"
                                    onChange={() => {
                                      filterType.filterBy.disposed =
                                        !filterType.filterBy.disposed
                                      setFilterType({ ...filterType })
                                    }}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault1"
                                  >
                                    Disposed ({totalCourt.disposed})
                                  </label>
                                </div>
                                <div className="form-check  ml-4">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault3"
                                    onChange={() => {
                                      filterType.filterBy.total =
                                        !filterType.filterBy.total
                                      setFilterType({ ...filterType })
                                    }}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault3"
                                  >
                                    Total Cases ({totalCourt.total})
                                  </label>
                                </div>
                              </div>
                            </Col>
                            <Col md={4}>
                              <p className={`mb-3`}>Select a Party</p>
                              <div
                                className={` d-flex align-items-center justify-content-start`}
                              >
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                    checked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault1"
                                    onChange={() => {
                                      setFilterType({
                                        ...filterType,
                                        party: 'Respondent',
                                      })
                                    }}
                                  >
                                    Respondent
                                  </label>
                                </div>
                                <div className="form-check ml-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault2"
                                    onChange={() => {
                                      setFilterType({
                                        ...filterType,
                                        party: 'Petitioner',
                                      })
                                    }}
                                  >
                                    Petitioner
                                  </label>
                                </div>
                              </div>
                            </Col>
                            <Col md={4}>
                              <p className={`mb-3`}>Classification</p>
                              <div
                                className={` d-flex align-items-center justify-content-start`}
                              >
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadio"
                                    id="flexRadioDefault3"
                                    onChange={() => {
                                      setFilterType({
                                        ...filterType,
                                        class: 'Civil',
                                      })
                                    }}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault3"
                                  >
                                    Civil
                                  </label>
                                </div>
                                <div className="form-check ml-3">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadio"
                                    id="flexRadioDefault4"
                                    checked
                                    onChange={() => {
                                      setFilterType({
                                        ...filterType,
                                        class: 'Criminal',
                                      })
                                    }}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault4"
                                  >
                                    Criminal
                                  </label>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div
                          className={`${styles.risk_Container} d-flex align-items-center justify-content-between  mb-4`}
                        >
                          <div
                            className={` w-100 d-flex align-items-center justify-content-start  `}
                          >
                            <label className={styles.control} htmlFor={'high'}>
                              <input
                                className={styles.checkbox}
                                type="radio"
                                name="topics"
                                value={'high'}
                                id={'high'}
                                onChange={() => {
                                  setFilterType({ ...filterType, risk: 'high' })
                                }}
                              />
                              <span className={styles.control__content}>
                                <span>High Risk</span>
                                <span>({totalCourt.high})</span>
                              </span>
                            </label>

                            <label
                              className={styles.control}
                              htmlFor={'medium'}
                            >
                              <input
                                className={styles.checkbox}
                                type="radio"
                                name="topics"
                                value={'medium'}
                                id={'medium'}
                                onChange={() => {
                                  setFilterType({
                                    ...filterType,
                                    risk: 'medium',
                                  })
                                }}
                              />
                              <span className={styles.control__content}>
                                <span>Medium Risk</span>
                                <span>({totalCourt.medium})</span>
                              </span>
                            </label>
                            <label
                              className={styles.control}
                              htmlFor={'Relevance'}
                            >
                              <input
                                className={styles.checkbox}
                                type="radio"
                                name="topics"
                                value={'Relevance'}
                                id={'Relevance'}
                                onChange={() => {
                                  setFilterType({
                                    ...filterType,
                                    risk: 'relevence',
                                  })
                                }}
                              />
                              <span className={styles.control__content}>
                                <span>High Relevence</span>
                                <span>({totalCourt.relevence})</span>
                              </span>
                            </label>
                          </div>

                          {/* <ComplianceLigitations
                            icon={'/static/danger.svg'}
                            backColor={'#E3F0FF'}
                            iconBackGroudColor={'#3687E8 '}
                            heading={'High Risk (5)'}
                            content={'Pending Case: 4 Disposed Case: 4'}
                          />
                          <ComplianceLigitations
                            icon={'/static/danger.svg'}
                            backColor={'#FFE9C5'}
                            iconBackGroudColor={'#FF9D00'}
                            heading={'Medium Risk (5)'}
                            content={'Pending Case: 4 Disposed Case: 4'}
                          />
                          <ComplianceLigitations
                            icon={'/static/Path 3369.svg'}
                            backColor={'#F3F4F7'}
                            iconBackGroudColor={'#9EB6FF'}
                            heading={'High Priority (5)'}
                            content={'Pending Case: 4 Disposed Case: 4'}
                          />
                          <ComplianceLigitations
                            icon={'/static/Group 1240.svg'}
                            backColor={'#FFE8E8'}
                            iconBackGroudColor={'#EA3F3F'}
                            heading={'Stagnant Cases (5)'}
                            content={'Pending Case: 4 Disposed Case: 4'}
                          /> */}
                        </div>

                        <div>
                          {ligitations(
                            Supreme,
                            District,
                            High,
                            Tribunal,
                            companyData,
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="Orders" role="tabpanel">
                  <div className={`${styles.card}`}>
                    <Order
                      orderDetail={orderDetails}
                      saveOrderData={saveOrderData}
                    />
                    <ShipmentDetails
                      orderDetail={orderList}
                      saveShipmentData={saveShipmentData}
                    />
                    <CommonSave onSave={onOrderSave} />
                  </div>
                </div>
                <div className="tab-pane fade" id="Credit" role="tabpanel">
                  <Credit
                    creditDetail={product}
                    keyAddDataArr={keyAddDataArr}
                    addDebtArr={addDebtArr}
                    addPersonArr={addPersonArr}
                    saveProductData={saveProductData}
                    handleProductSave={handleProductSave}
                    debtData={debtData}
                    setDebtData={setDebtData}
                    personData={personData}
                    saveSupplierData={saveSupplierData}
                    keyAddData={keyAddData}
                    deleteComponent={deleteComponent}
                    updateKeyAddDataArr={updateKeyAddDataArr}
                    deleteAddress={deleteAddress}
                    supplierCred={supplierCred}
                    setEditRow={setEditRow}
                    orderDetail={orderList}
                    companyData={companyData}
                  />
                  <Recommendations
                    creditDetail={orderList}
                    groupExposureData={groupExposureData}
                    saveSuggestedCreditData={saveSuggestedCreditData}
                    addGroupExpArr={addGroupExpArr}
                    financialsComment={financialsComment}
                    addWeaknessCommentArr={addWeaknessCommentArr}
                    dltWeaknessCommentArr={dltWeaknessCommentArr}
                    addStrengthsCommentArr={addStrengthsCommentArr}
                    dltStrengthsCommentArr={dltStrengthsCommentArr}
                    addSanctionCommentArr={addSanctionCommentArr}
                    dltSanctionCommentArr={dltSanctionCommentArr}
                    addFinancialsCommentArr={addFinancialsCommentArr}
                    dltFinancialsCommentArr={dltFinancialsCommentArr}
                    addCompanyCommentArr={addCompanyCommentArr}
                    dltCompanyCommentArr={dltCompanyCommentArr}
                    companyComment={companyComment}
                    sanctionComment={sanctionComment}
                    strengthsComment={strengthsComment}
                    weaknessComment={weaknessComment}
                    deleteData={deleteData}
                    setGroupExposureData={setGroupExposureData}
                  />
                  <CommonSave onSave={onCreditSave} />
                </div>
                <div className="tab-pane fade" id="cam" role="tabpanel">
                  <CAM
                    fetchingKarzaGst={fetchingKarzaGst}
                    gstData={gstData}
                    camData={orderList}
                    companyData={companyData}
                    addApproveRemarkArr={addApproveRemarkArr}
                    approveComment={approveComment}
                    saveApprovedCreditData={saveApprovedCreditData}
                    approvedCredit={approvedCredit}
                  />
                </div>

                <div
                  className="tab-pane fade"
                  id="DocumentsTab"
                  role="tabpanel"
                >
                  <div className="accordion" id="profileAccordion">
                    <UploadOther
                      module="LeadOnboarding&OrderApproval"
                      orderid={id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedTab == 'Financials' ||
      'Compliance' ||
      'Orders' ||
      'Credit' ||
      'DocumentsTab' ? (
        <PreviousBar rightButtonClick={onNext} leftButtonClick={onBack} />
      ) : null}
      {selectedTab == 'Profile' ? (
        <DownloadBar
          downLoadButtonName={`MCA Report`}
          isPrevious={false}
          leftButtonName={``}
          isApprove={true}
          rightButtonName={`Next`}
          handleApprove={onNext}
          handleReject={() => {
            console.log('download pdf')
          }}
        />
      ) : null}
      {selectedTab == 'GST' ? (
        <DownloadBar
          downLoadButtonName={`GST Report`}
          isPrevious={true}
          isApprove={true}
          leftButtonName={`Previous`}
          rightButtonName={`Next`}
          handleApprove={onNext}
        />
      ) : null}
      {selectedTab == 'CAM' ? (
        <DownloadBar
          downLoadButtonName={`CAM`}
          isPrevious={true}
          isApprove={true}
          handleApprove={handleCamApprove}
          handleReject={handleCamReject}
          leftButtonName={`Decline`}
          rightButtonName={`Approve`}
        />
      ) : null}
    </>
  )
}
export default Index

const uploadButton = (dispatch, orderList, companyData) => {
  return (
    <>
      <button
        onClick={() =>
          dispatch(RefetchCombineKarza({ company: orderList?.company?._id }))
        }
        type="button"
        className={`${styles.btnPrimary} btn btn-primary`}
      >
        <img src="/static/refresh.svg" alt="refresh" className="img-fluid" />
        Update Info
      </button>
      <div className={`${styles.lastModified} text `}>
        <span>Last Modified:</span>
        {moment(companyData?.updatedAt).format(' D MMM , h:mm a')}
      </div>
    </>
  )
}

const ligitations = (Supreme, District, High, Tribunal, companyData) => {
  console.log(District, 'District')

  return (
    <>
      <LigitationsTable
        data={Supreme}
        Heading={'Supreme Court'}
        val={'LigitationsTable1'}
        totalData={companyData?.compliance?.supremeCourt}
      />
      <LigitationsTable
        data={High}
        Heading={'High Court'}
        val={'LigitationsTable2'}
        totalData={companyData?.compliance?.highCourt}
      />
      <LigitationsTable
        data={District}
        Heading={'District Court'}
        val={'LigitationsTable3'}
        totalData={companyData?.compliance?.districtCourt}
      />
      <LigitationsTable
        data={Tribunal}
        Heading={'Tribunal Courts'}
        val={'LigitationsTable4'}
        totalData={companyData?.compliance?.tribunalCourts}
      />
    </>
  )
}

const table2 = (sat, balance, complienceFilter) => {
  console.log(sat, balance, 'oi')
  let length =
    complienceFilter == 'StatutoryCompliance' ? sat.length : balance.length
  return (
    <table
      className={`${styles.table_details} table border-color`}
      cellPadding="0"
      cellSpacing="0"
      border="1"
    >
      <thead>
        <tr>
          <th className=""></th>
          <th className="">ALERT</th>
          <th className="">SEVERITY</th>
          <th className="">SOURCE</th>
          <th className="">ID TYPE</th>
          <th className="">VALUE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.firstCell} rowSpan={length + 1}>
            {complienceFilter == 'StatutoryCompliance'
              ? `Statutory Compliance`
              : complienceFilter == 'All'
              ? 'All'
              : `Banking Defaults`}
          </td>
          {/* <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td> */}
        </tr>
        {complienceFilter == 'StatutoryCompliance'
          ? sat.length &&
            sat?.map((alert, index) => {
              return (
                <tr key={index}>
                  <td> {alert.alert}</td>
                  <td> {alert.severity}</td>
                  <td> {alert.source}</td>
                  <td> {alert.idType}</td>
                  <td> {alert.value}</td>
                </tr>
              )
            })
          : balance.length > 0 &&
            balance?.map((alert, index) => {
              return (
                <tr key={index}>
                  <td> {alert.alert}</td>
                  <td> {alert.severity}</td>
                  <td> {alert.source}</td>
                  <td> {alert.idType}</td>
                  <td> {alert.value}</td>
                </tr>
              )
            })}
        {complienceFilter == 'All' ? (
          <>
            {sat.length &&
              sat?.map((alert, index) => {
                return (
                  <tr key={index}>
                    <td> {alert.alert}</td>
                    <td> {alert.severity}</td>
                    <td> {alert.source}</td>
                    <td> {alert.idType}</td>
                    <td> {alert.value}</td>
                  </tr>
                )
              })}
            {balance.length > 0 &&
              balance?.map((alert, index) => {
                return (
                  <tr key={index}>
                    <td> {alert.alert}</td>
                    <td> {alert.severity}</td>
                    <td> {alert.source}</td>
                    <td> {alert.idType}</td>
                    <td> {alert.value}</td>
                  </tr>
                )
              })}
          </>
        ) : null}
      </tbody>
    </table>
  )
}
