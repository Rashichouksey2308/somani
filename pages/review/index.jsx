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
import jsPDF from 'jspdf'
import ReactDOMServer from 'react-dom/server'
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
  checkNan,
  addPrefixOrSuffix,
  convertValue
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
import Router from 'next/router'
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
          // toast.error(toastDiscription.toUpperCase(), {
          //   toastId: toastDiscription,
          // })
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
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
          //  toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
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
          // toast.error(toastMessage.toUpperCase(), { toastId: toastDiscription })
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
    console.log(latest, previous, last, "latest, previous, last")
    if (last == previous && previous < latest) {

      return <img src="/static/profit.svg" alt="Profit" className="img-fluid" />
    }
    if (last == previous && previous > latest) {
      return <img src="/static/loss.svg" alt="Loss" className="img-fluid" />
    }

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

    dispatch(setDynamicOrder(orderList?.company?.customerId || orderList?.applicationId))
  }, [orderList, dispatch])

  console.log(orderList, 'termsheetOrder')
  // useEffect(() => {

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
    let newObj = {
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
    }
    setOrderDetails({ ...newObj })

    setShipment({
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
  }, [orderList])

  const [shipment, setShipment] = useState({})
  useEffect(() => {
    setShipment(
      {
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
      }
    )
  }, [
    orderList
  ])
  console.log(shipment, "shipmentshipment")
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
  console.log(shipment, "saveShipmentData")
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
    if (orderDetails?.hsnCode === '' || orderDetails?.hsnCode == undefined) {
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
  console.log(supplierCred, 'supplierCred')
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
    let tempSupplierCredentials = {
      ...supplierCred,
      HSCodesNumber: orderList?.supplierCredential?.HSCodesNumber ?? '',
      commodityOfTotalTrade:
        orderList?.supplierCredential?.commodityOfTotalTrade ?? '',
      consigneesNumber: orderList?.supplierCredential?.consigneesNumber ?? '',
      countryOfOrigin: orderList?.supplierCredential?.countryOfOrigin ?? '',
      latestShipmentDate:
        orderList?.supplierCredential?.latestShipmentDate ?? '',
      oldestShipmentDate:
        orderList?.supplierCredential?.oldestShipmentDate ?? '',
      portOfDestination: orderList?.supplierCredential?.portOfDestination ?? '',
      remarks: orderList?.supplierCredential?.remarks ?? '',
      shipmentNumber: orderList?.supplierCredential?.shipmentNumber ?? '',
      supplierName:
        orderList?.supplierCredential?.supplierName ?? ''
          ? orderList?.supplierCredential?.supplierName
          : orderList?.supplierName,
    }
    setSupplierCred(tempSupplierCredentials)
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

  const [sanctionComment, setSanctionComment] = useState([])
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

  ])
  useEffect(() => {
    if (orderList?.company?.debtProfile?.length > 0) {
      let temp = []
      orderList?.company?.debtProfile.forEach((val, index) => {
        temp.push({
          bankName: val?.bankName,
          conduct: val?.conduct,
          limit: val?.limit,
          limitType: val?.limitType,
          primaryBank: val?.primaryBank
        })
      })
      setDebtData([...temp])
    }
  }, [
    orderList?.company?.debtProfile
  ])
  // console.log(debtData, 'debtData')
  // const [personData, setPersonData] = useState([
  //   {
  //     contact: {
  //       callingCode: orderList?.company?.keyContactPerson?.contact?.callingCode,
  //       number: orderList?.company?.keyContactPerson?.contact?.number,
  //     },
  //     department: orderList?.company?.keyContactPerson?.department,
  //     designation: orderList?.company?.keyContactPerson?.designation,
  //     email: orderList?.company?.keyContactPerson?.email,
  //     name: orderList?.company?.keyContactPerson?.name,
  //   },
  // ])
  const [personData, setPersonData] = useState([])
  console.log(personData, 'personData')
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

    // let debtArr = []
    // orderList?.company?.debtProfile?.forEach((element) => {
    //   // console.log(element,"useEE")
    //   debtArr.push(element)
    // })
    // setDebtData([...debtArr])

    let addressArr = []
    orderList?.company?.keyAddress?.forEach((element) => {
      // console.log(element,"useEE")
      addressArr.push(element)
    })
    setKeyAddData(addressArr)

    let personArr = []
    orderList?.company?.keyContactPerson?.forEach((element) => {
      //  console.log(element,"useEE")
      personArr.push({
        contact: {
          callingCode: element.contact.callingCode,
          number: element.contact.number,
        },
        department: element.department,
        designation: element.designation,
        email: element.email,
        name: element.name,
        isEdit: false,
        addnew: false
      })
    })
    setPersonData([...personArr])

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
    suggestedCreditLimit: '',
    suggestedOrderValue: '',
  })


  const [approvedCredit, setApprovedCredit] = useState({
    approvedOrderValue: '',
    approvedCreditValue: '',
  })

  useEffect(() => {
    setSuggestedCredit({
      suggestedCreditLimit: suggestedValue ? suggestedValue / 10000000 : suggestedValue,
      suggestedOrderValue: orderList?.suggestedOrderValue ? orderList?.suggestedOrderValue / 10000000 : orderList?.suggestedOrderValue,
    })

    setApprovedCredit({
      approvedOrderValue: orderList?.approvedOrderValue ? orderList?.approvedOrderValue / 10000000 : orderList?.approvedOrderValue,
      approvedCreditValue: approvedCreditLimit ? approvedCreditLimit / 10000000 : approvedCreditLimit,
    })
  }, [orderList])


  const saveSuggestedCreditData = (name, value) => {
    console.log(name, value, '')
    const newInput = { ...suggestedCredit }
    newInput[name] = value
    // console.log(newInput)
    setSuggestedCredit(newInput)
  }


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
    // console.log(keyPersonData, 'This IS KEY PETDHDH')
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
        addnew: false,
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
    if (product.dailyConsumptionOfCommodity == '' || product.dailyConsumptionOfCommodity == undefined) {
      let toastMessage = 'Please add  Daily Consumtion Of Commodity'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (product.stockCoverageOfCommodity == '' || product.stockCoverageOfCommodity == undefined) {
      let toastMessage = 'Please add  stock Coverage Of Commodity'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (product.existingProcurementOfCommodity == '' || product.existingProcurementOfCommodity == undefined) {
      let toastMessage = 'Please add  Existing Procurement Of Commodity'
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

      let tempDebtData = [...debtData]
      tempDebtData.forEach((val, index) => {
        delete val.action && delete val.actions
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
      // let tempArray = [...groupExposureData]
      // // console.log(tempArray, 'groupExposure')
      // tempArray.forEach((e) => {
      //   if (e.limit === NaN) {
      //     let oldValue = e?.limit?.replace(/,/g, '')
      //     e.limit = oldValue
      //     return Number(e)
      //   }
      // })

      // console.log(tempArray, 'groupExposure')
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
        debtProfile: tempDebtData,
        groupExposureDetail: [...groupExposureData],
        suggestedOrderValue:
          removePrefixOrSuffix(suggestedCredit.suggestedOrderValue) * 10000000,
        suggestedCreditLimit:
          removePrefixOrSuffix(suggestedCredit.suggestedCreditLimit) * 10000000,
      }

      console.log(obj, "credit obj")
      dispatch(UpdateCredit({ ...obj }))
    }
  }

  const filteredCreditRating =
    orderList?.company?.creditLimit?.creditRating?.filter((rating) => {
      return orderList?._id === rating.order
    })

  console.log(filteredCreditRating, 'THIS IS FILTERED CREDIT RATING')

  let approvedCreditLimit = filteredCreditRating && filteredCreditRating.length > 0
    ? filteredCreditRating[0]?.approved?.value
    : ''

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
          approvedOrderValue: approvedCredit.approvedOrderValue * 10000000,
          approvedCreditValue: approvedCredit.approvedCreditValue * 10000000,
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
          console.log(
            list[0].children[tempIndex].children[0],
            'okok',
            tab[0].children[i],
            tab[0].children,
          )
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
  console.log(selectedTab, 'specificationTable')
  const onPreviousClick = () => {
    Router.push('/credit-queue')
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
  const primaryBankName = () => {
    console.log(orderList?.company?.debtProfile, "orderList?.company?.debtProfile")
    let filteredData = []
    filteredData =
      orderList?.company?.debtProfile?.filter((data) => data.primaryBank) || []

    const length = _get(filteredData[0], 'bankName', '')

    return length
  }
  const openChargesLength = () => {
    const filteredData =
      orderList?.company?.detailedCompanyInfo?.financial?.openCharges?.filter(
        (data) => data.dateOfSatisfactionOfChargeInFull === null,
      )

    const length = filteredData?.length

    return length
  }
  const toPrintPdf = (camData, RevenueDetails, trendChartRevenueImg, trendChartPurchasesImg, skewnessChartRevenueImg, skewnessChartPurchasesImg, shareHoldingChartImg, openBankChargeChartImg) => {
    console.log(_get, 'get')
    function calcPc(n1, n2) {
      if (n1 === 0) {
        return 0
      }
      return ((n2 - n1) / n1) * 100
    }
    let backgroundColor = ['#4CAF50', '#FF9D00', '#2884DE']


    return (
      <table
        width="1500px"
        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
        cellPadding="0"
        cellSpacing="0"
        border="0"
        bgColor="#f3f4f7"
      >

        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="12"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td
                  colSpan={4}
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Basic Info
                </td>
              </tr>
              <tr bgColor="#F7F9FF" height="92">
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    opacity: '1',
                    paddingLeft: '35px',
                  }}
                >
                  Transaction Type
                </td>
                <td
                  colSpan={3}
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '25px',
                  }}
                >
                  {camData?.transactionType}
                </td>
              </tr>
              <tr>
                <td
                  width="20%"
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                    paddingTop: '37px',
                  }}
                >
                  Sourcing Channel
                </td>
                <td
                  width="30%"
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingTop: '37px',
                  }}
                >
                  {camData?.company?.sourceChanel}
                </td>
                <td
                  width="20%"
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingTop: '37px',
                  }}
                >
                  City
                </td>
                <td
                  width="30%"
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingTop: '37px',
                  }}
                >
                  {
                    camData?.company?.detailedCompanyInfo?.profile
                      ?.companyDetail?.city
                  }
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                  }}
                >
                  Buyer
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {camData?.company?.companyName}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                  }}
                >
                  State
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {
                    camData?.company?.detailedCompanyInfo?.profile
                      ?.companyDetail?.state
                  }
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                    paddingBottom: '40px',
                  }}
                >
                  Type of Business
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingBottom: '40px',
                  }}
                >
                  {' '}
                  {camData?.company?.typeOfBusiness}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingBottom: '40px',
                  }}
                >
                  Industry
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingBottom: '40px',
                  }}
                >
                  {' '}
                  {camData?.company?.typeOfBusiness}
                </td>
              </tr>
              <tr bgColor="#F7F9FF">
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                    paddingTop: '29px',
                  }}
                >
                  Order Value
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingTop: '29px',
                  }}
                >
                  {convertValue(camData?.orderValue)?.toLocaleString('en-In', {
                    maximumFractionDigits: 2,
                  })}{' '}
                  {camData?.unitOfValue == 'Crores'
                    ? 'Cr'
                    : camData?.unitOfValue}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingTop: '29px',
                  }}
                >
                  Commodity
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingTop: '29px',
                  }}
                >
                  {' '}
                  {camData?.commodity}
                </td>
              </tr>
              <tr bgColor="#F7F9FF">
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                  }}
                >
                  Quantity
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {camData?.quantity?.toLocaleString('en-In', {
                    maximumFractionDigits: 2,
                  })} {camData?.unitOfQuantity?.toUpperCase()}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                  }}
                >
                  Supplier
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {' '}
                  {camData?.supplierName}
                </td>
              </tr>
              <tr bgColor="#F7F9FF">
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                    paddingBottom: '31px',
                  }}
                >
                  Country of Origin
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingBottom: '31px',
                  }}
                >
                  {camData?.countryOfOrigin}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingBottom: '31px',
                  }}
                >
                  Transaction Period
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingBottom: '31px',
                  }}
                >
                  {camData?.transactionPeriodDays}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                    paddingTop: '36px',
                  }}
                >
                  Port of Loading
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingTop: '36px',
                  }}
                >
                  {' '}
                  {camData?.portOfLoading}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingTop: '36px',
                  }}
                >
                  Port of Discharge
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingTop: '36px',
                  }}
                >
                  {camData?.portOfDischarge}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                  }}
                >
                  Exp. Date of Shipment
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {moment(
                    camData?.ExpectedDateOfShipment,

                  ).format('DD-MM-YYYY')}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                  }}
                >
                  ETA at Discharge port
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {moment(
                    camData?.shipmentDetail?.ETAofDischarge?.fromDate

                  ).format('DD-MM-YYYY')}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                    paddingBottom: '50px',
                  }}
                >
                  Laycan from
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingBottom: '50px',
                  }}
                >
                  {moment(
                    camData?.shipmentDetail?.loadPort?.fromDate).format('DD-MM-YYYY')}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingBottom: '50px',
                  }}
                >
                  Laycan to
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingBottom: '50px',
                  }}
                >
                  {moment(
                    camData?.shipmentDetail?.loadPort?.toDate).format('DD-MM-YYYY')}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="12"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td
                  colSpan={4}
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Supplier Info
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                    paddingTop: '27px',
                  }}
                >
                  No. of Shipments
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingTop: '27px',
                  }}
                >
                  {' '}
                  {camData?.supplierCredential?.shipmentNumber?.toLocaleString('en-In', {
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingTop: '27px',
                  }}
                >
                  Port of Destination
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingTop: '27px',
                  }}
                >
                  {' '}
                  {camData?.supplierCredential?.portOfDestination}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                  }}
                >
                  No. of Consignees
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {' '}
                  {camData?.supplierCredential?.consigneesNumber?.toLocaleString('en-In', {
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                  }}
                >
                  Latest Shipment date
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {camData?.supplierCredential?.latestShipmentDate
                    ? moment(camData?.supplierCredential?.latestShipmentDate).format('DD-MM-YYYY') : ''}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                  }}
                >
                  No. of HS codes
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {camData?.supplierCredential?.HSCodesNumber}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                  }}
                >
                  Oldest shipment date
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {' '}
                  {camData?.supplierCredential?.oldestShipmentDate
                    ? moment(camData?.supplierCredential?.oldestShipmentDate).format('DD-MM-YYYY') : ''}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                    paddingBottom: '25px',
                  }}
                >
                  Country of Origins
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingBottom: '25px',
                  }}
                >
                  {camData?.supplierCredential?.countryOfOrigin}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingBottom: '25px',
                  }}
                >
                  Commodity to total trade (24 months)
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingBottom: '25px',
                  }}
                >
                  {camData?.supplierCredential?.commodityOfTotalTrade} %
                </td>
              </tr>
              <tr>
                <td
                  colSpan={4}
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                    paddingTop: '25px',
                  }}
                >
                  Remarks
                </td>
              </tr>
              <tr>
                <td
                  colSpan={4}
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingLeft: '35px',
                    paddingBottom: '53px',
                  }}
                >
                  {' '}
                  {camData?.supplierCredential?.remarks}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="0"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td
                  colSpan={2}
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Customer Rating
                </td>
              </tr>
              <tr>
                <td width="50%" style={{borderRight: '2px solid #CAD6E6'}}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td width="45%" style={{padding:'35px 17px 35px 35px', position:'relative'}}>
                        <img style={{position:'absolute', left:'0', top:'0'}} width="350" src="data:image/png;base64,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" alt="Customer Rating" />
                        <img style={{position:'absolute', transformOrigin:'50% 50%', top:'34%', left:'37%', width:'168px', height:'184px', rotateZ:'150deg'}} src="data:image/png;base64,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" alt="Meter" />
                        <span style={{fontSize:'30px', color:'#008015', lineHeight:'37px', fontWeight:'bold', position:'absolute', top:'47%', left:'52%', width:'40px', height:'40px', transform:'translate(-50%, -50%)'}}>9.0</span>
                      </td>
                      <td width="55%" style={{padding:'35px 35px 35px 17px'}}>
                        <div align="center"><span style={{fontSize:'20px', color:'#00B81E', lineHeight:'24px', fontWeight:'bold', padding:'6px 8px', background:'#CFF2D5', borderRadius:'5px', display:'inline-block'}}>AVERAGE</span></div><br/>
                        <table width="100%" cellPadding="10" cellSpacing="0" border="0" style={{border: '1px solid #D2D7E5', borderRadius:'6px', marginTop:'15px', marginBottom:'20px'}}
                          >
                          <tr>
                            <td width="25%" style={{padding:'20px 10px 20px 20px'}}>
                              <span style={{background:'#CEEFD1', width:'64px', lineHeight:'64px', height:'64px', textAlign:'center', borderRadius:'8px', display:'inline-block'}}
                            >
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAXCAYAAAD3CERpAAAABHNCSVQICAgIfAhkiAAAAX5JREFUSEu11bFKw0AYB/D/kVYXMYNz091Ni+AoWKEoFEf3voSTL+Hk0KWT5AG0nWo7OfgMAWNwsIKiKG0tPb8jjU3aSxpzl0AhvVz48b/77gtD3pcNA6bVBJ9eo+a1BcdyNQW4afXB2B44N4DpiYDzQ/2EfXBUKNj6LBwn+DgftIsCRgQCuyFwSPdvMAr7+tF40CPwEEeOqxdNAeotpJSgPrR7QHvoyPbwb0nDp0R9ea8qRZQHPUnRSEH1pA8Evv4PjKK3pTs6xPeoueepGkZGcI62yzcAr9LAD/0uV8ICHLyITrOzcA5jlzS6px3LpoFT6hzF2YPvRFgR9JN2SmfgrEX3ASrG5bC9vQbzs0fzMyUM0vrVmwbWBEYLKQn+2LiA+UUJuVLCaNLgXzz8TlO2shSN7CQsNwc5HH5XfC08jKl51x031fFamCTvSPHwkErvCaNJFfXnTGByR1qGtYCr2+Ac5pTwUTWhvJBkG+TDDYwnDZUljXakLJWg+M4vlf/IL1ywetEAAAAASUVORK5CYII=" alt="Check Green" />
                              </span>
                            </td>
                            <td width="75%" style={{fontSize:'16px', color:'#8492A6', lineHeight:'19px', fontWeight:'bold', textTransform: 'uppercase', padding:'20px 10px 20px 20px'}}>CREDIT SCORE<p style={{fontSize:'30px', color:'#111111', lineHeight:'37px'}}>9.0<span style={{fontSize:'20px', color:'#8492A6', lineHeight:'20px', display:'inline-block'}}> /10</span></p></td>
                          </tr>
                        </table>
                        <table width="100%" cellPadding="10" cellSpacing="0" border="0" style={{border: '1px solid #D2D7E5', borderRadius:'6px'}}
                          >
                          <tr>
                            <td width="25%" style={{padding:'20px 10px 20px 20px'}}>
                              <span style={{background:'#CEEFD1', width:'64px', lineHeight:'64px', height:'64px', textAlign:'center', borderRadius:'8px', display:'inline-block'}}
                            >
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAMAAABY1h8eAAABAlBMVEUAAAAA/wAAgAAAqgAAzDMAqisAvyAAsxoAuRcAvCEAtSAAuh0AsxwAthsAuyIAuR8Ath0AuBwAuCEAuiAAtiAAuh4AthwAtyAAtx4AuBwAuB8AuR4Atx8Atx8AuR0AuB8AuB0AuR4Atx4Atx0AuB8AuB4AuB8AuR8AuB4Atx4Atx8Atx4AuB8AuB8AuB4AuB0AuB8AuR4AuB4AuB4AuB8AuB4Atx4AuB4AuB4AuB8AuB4AuB4Atx4AuB8AuB4AuB4AuB8AuB4Atx4AuB0AuB4AuR4AuB4AuB4AuB4AuB4AuB4AuB4AuB4AuB4AuR4AuB4AuB4AuB4AuB4AuB4AuB7///+yMbGIAAAAVHRSTlMAAQIDBQYICgsXGBobHB4hIyQvMDg7P0BDSEtNUVJXWmFmZ2prb3N0d3l8gISFiIyNkaGipqmrrLO3ycrL0dTX2drd4eLk6+3v8PHy8/X29/n6+/7kE6FDAAAAAWJLR0RVkwS4MwAAAN1JREFUGBl1wQk7AlEYBtA3NEaYGUmWUEkoO1kaW6QhS5H3//8Wd+bpqe9y7znQBAHsTo5hNf3y6sJmiyzD5o68T8FsmUoeZldULmE0+01lMA+TQyYOoHP9XKFUi5iIaqVCzncR2wnbnzTotcNdpM9oceEAqP7Q5DSF2Gaf/wzKGFqK+Mf7KkYWHqnpZCHM3FC4zUBTp1CHrkmhCc1El8LbJKQsNYuQKky0WkxsQ2pQ6e07U9UPKg1IzySvfShz5yQ7EDzyaQ1DKw+kh7Hi15GDkfRev4ix9QCaYAOxX8MFXpRfmDQcAAAAAElFTkSuQmCC" alt="Star Green" />
                              </span>
                            </td>
                            <td width="75%" style={{fontSize:'16px', color:'#8492A6', lineHeight:'19px', fontWeight:'bold', textTransform: 'uppercase', padding:'20px 10px 20px 20px'}}>RATING<p style={{fontSize:'30px', color:'#111111', lineHeight:'37px'}}>A</p></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td width="50%" valign='top' style={{ padding: '35px' }}>
                  <table width="100%" cellPadding="10" cellSpacing="0" border="0" style={{ border: '1px solid #D2D7E5', marginBottom: '23px' }}>
                    <tr>
                      <td colSpan={2} style={{ fontSize: '16px', color: '#111111', lineHeight: '19px', fontWeight: 'bold' }}>BUSINESS PROFILE</td>
                    </tr>
                    <tr>
                      <td width="90%">
                        <span
                          style={{
                            background: '#F3F4F7',
                            borderRadius: '2px',
                            height: '12px',
                            width: '100%',
                            display: 'inline-block',
                            float: 'left',
                          }}
                        >
                          <span
                            style={{
                              background: '#FFB700',
                              width: '80%',
                              height: '12px',
                              borderRadius: '2px',
                              display: 'inline-block',
                              float: 'left',
                            }}
                          ></span>
                        </span>
                      </td>
                      <td width="10%" align='right' style={{ fontSize: '19px', color: '#111111', lineHeight: '24px', fontWeight: 'bold' }}>80%</td>
                    </tr>
                  </table>
                  <table width="100%" cellPadding="10" cellSpacing="0" border="0" style={{ border: '1px solid #D2D7E5', marginBottom: '23px' }}>
                    <tr>
                      <td colSpan={2} style={{ fontSize: '16px', color: '#111111', lineHeight: '19px', fontWeight: 'bold' }}>REVENUE PROFILE</td>
                    </tr>
                    <tr>
                      <td width="90%">
                        <span
                          style={{
                            background: '#F3F4F7',
                            borderRadius: '2px',
                            height: '12px',
                            width: '100%',
                            display: 'inline-block',
                            float: 'left',
                          }}
                        >
                          <span
                            style={{
                              background: '#FF4230',
                              width: '40%',
                              height: '12px',
                              borderRadius: '2px',
                              display: 'inline-block',
                              float: 'left',
                            }}
                          ></span>
                        </span>
                      </td>
                      <td width="10%" align='right' style={{ fontSize: '19px', color: '#111111', lineHeight: '24px', fontWeight: 'bold' }}>40%</td>
                    </tr>
                  </table>
                  <table width="100%" cellPadding="10" cellSpacing="0" border="0" style={{ border: '1px solid #D2D7E5' }}>
                    <tr>
                      <td colSpan={2} style={{ fontSize: '16px', color: '#111111', lineHeight: '19px', fontWeight: 'bold' }}>FINANCIAL PROFILE</td>
                    </tr>
                    <tr>
                      <td width="90%">
                        <span
                          style={{
                            background: '#F3F4F7',
                            borderRadius: '2px',
                            height: '12px',
                            width: '100%',
                            display: 'inline-block',
                            float: 'left',
                          }}
                        >
                          <span
                            style={{
                              background: '#83C400',
                              width: '80%',
                              height: '12px',
                              borderRadius: '2px',
                              display: 'inline-block',
                              float: 'left',
                            }}
                          ></span>
                        </span>
                      </td>
                      <td width="10%" align='right' style={{ fontSize: '19px', color: '#111111', lineHeight: '24px', fontWeight: 'bold' }}>40%</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="0"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td
                  colSpan={3}
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Group Exposure Details
                </td>
              </tr>
              <tr>
                <td valign="top" style={{ padding: '27px' }}>
                  <table
                    width="100%"
                    cellPadding="15"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      {camData?.company.groupExposureData?.map((exp, index) => {
                        let name = exp?.name?.split(' ') ?? 'NA'
                        return (
                          <td valign="top" width="33.33%">
                            <table
                              width="100%"
                              cellPadding="0"
                              cellSpacing="0"
                              border="0"
                              style={{
                                border: '1px solid #D2D7E5',
                                borderRadius: '6px',
                              }}
                            >
                              <tr>
                                <td width="10%"
                                  height="60"
                                  style={{
                                    padding: '32px 22px 19px',
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: '28px',
                                      color: '#FF9D00',
                                      lineHeight: '34px',
                                      fontWeight: 'bold',
                                      background: '#FFECCF',
                                      borderRadius: '8px',
                                      padding: '13px 0',
                                      width: '60px',
                                      height: '60px',
                                      textAlign: 'center',
                                      display: 'inline-block',
                                    }}
                                  >
                                    {name?.map((item, index) => {
                                      if (index < 2) {
                                        return item?.charAt(0)?.toUpperCase()
                                      }
                                    })}
                                  </span>
                                </td>
                                <td width="90%"
                                  style={{
                                    fontSize: '22px',
                                    color: '#111111',
                                    lineHeight: '27px',
                                    fontWeight: 'bold',
                                    padding: '32px 22px 19px',
                                  }}>{' '}
                                  {exp.name}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height="33"
                                  style={{ padding: '19px 0 19px 22px' }}
                                >
                                  <span
                                    style={{
                                      fontSize: '16px',
                                      color: '#111111',
                                      lineHeight: '19px',
                                      fontWeight: 'bold',
                                      background: 'rgba(186, 186, 186, 0.1)',
                                      borderRadius: '5px',
                                      padding: '6px 12px',
                                      display: 'inline-block',
                                    }}
                                  >
                                    LIMIT
                                  </span>
                                </td>
                                <td
                                  align="right"
                                  style={{
                                    fontSize: '19px',
                                    color: '#111111',
                                    lineHeight: '24px',
                                    fontWeight: '500',
                                    padding: '19px 22px 19px 0',
                                  }}
                                >
                                  {exp.limit}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  colSpan={2}
                                  style={{ padding: '0 22px 19px' }}
                                >
                                  <span
                                    style={{
                                      background: '#F3F4F7',
                                      borderRadius: '2px',
                                      height: '12px',
                                      width: '100%',
                                      display: 'inline-block',
                                      float: 'left',
                                    }}
                                  >
                                    <span
                                      style={{
                                        background: '#3687E8',
                                        width: '90%',
                                        height: '12px',
                                        borderRadius: '2px',
                                        display: 'inline-block',
                                        float: 'left',
                                      }}
                                    ></span>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height="33"
                                  style={{ padding: '19px 0 19px 22px' }}
                                >
                                  <span
                                    style={{
                                      fontSize: '16px',
                                      color: '#111111',
                                      lineHeight: '19px',
                                      fontWeight: 'bold',
                                      background: 'rgba(186, 186, 186, 0.1)',
                                      borderRadius: '5px',
                                      padding: '6px 12px',
                                      display: 'inline-block',
                                    }}
                                  >
                                    {' '}
                                    O/S BALANCE
                                  </span>
                                </td>
                                <td
                                  align="right"
                                  style={{
                                    fontSize: '19px',
                                    color: '#111111',
                                    lineHeight: '24px',
                                    fontWeight: '500',
                                    padding: '19px 22px 19px 0',
                                  }}
                                >
                                  {exp.outstandingLimit}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  colSpan={2}
                                  style={{ padding: '0 22px 19px' }}
                                >
                                  <span
                                    style={{
                                      background: '#F3F4F7',
                                      borderRadius: '2px',
                                      height: '12px',
                                      width: '100%',
                                      display: 'inline-block',
                                      float: 'left',
                                    }}
                                  >
                                    <span
                                      style={{
                                        background: '#3687E8',
                                        width: '90%',
                                        height: '12px',
                                        borderRadius: '2px',
                                        display: 'inline-block',
                                        float: 'left',
                                      }}
                                    ></span>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  colSpan={2}
                                  height="33"
                                  style={{ padding: '19px 22px' }}
                                >
                                  <span
                                    style={{
                                      fontSize: '16px',
                                      color: '#111111',
                                      lineHeight: '19px',
                                      fontWeight: 'bold',
                                      background: 'rgba(186, 186, 186, 0.1)',
                                      borderRadius: '5px',
                                      padding: '6px 12px',
                                      display: 'inline-block',
                                    }}
                                  >
                                    CONDUCT
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  colSpan={2}
                                  style={{
                                    padding: '0 22px 19px',
                                    fontSize: '18px',
                                    color: '#111111',
                                    lineHeight: '28px',
                                  }}
                                >
                                  {exp.accountConduct}
                                </td>
                              </tr>
                            </table>
                          </td>
                        )
                      })}
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="12"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td
                  colSpan={8}
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Order Summary - Last 6 Orders
                </td>
              </tr>
              <tr bgColor="#FAFAFB" style={{ height: '67px' }}>
                <td
                  colSpan={2}
                  width="35%"
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    paddingLeft: '35px',
                    textTransform: 'uppercase',
                  }}
                >
                  SUPPLIER NAME
                </td>
                <td
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  CUSTOMER NAME
                </td>
                <td
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  ORDER NO
                </td>

                <td
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  ORDER VALUE
                </td>
                <td
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  COMMODITY
                </td>
                <td
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  STATUS
                </td>
                <td
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                  }}
                >
                  DAYS DUE
                </td>
              </tr>
              <tr>
                <td
                  colSpan={8}
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    padding: '21px 35px 13px',
                    textTransform: 'uppercase',
                  }}
                >
                  2022
                  <span
                    style={{
                      float: 'right',
                      height: '8px',
                      width: '97%',
                      display: 'inline-block',
                      borderBottom: '1px dashed #D2D7E5',
                    }}
                  ></span>
                </td>
              </tr>
              <tr>
                <td width="5%"
                  height="60"
                  style={{
                    padding: '21px 12px 21px 35px'
                  }}
                >
                  <span
                    style={{
                      fontSize: '28px',
                      color: '#FF9D00',
                      lineHeight: '34px',
                      fontWeight: 'bold',
                      background: '#FFECCF',
                      borderRadius: '8px',
                      padding: '13px 0',
                      width: '60px',
                      height: '60px',
                      textAlign: 'center',
                      display: 'inline-block',
                    }}
                  >
                    ET
                  </span>{' '}
                </td>
                <td width="30%"
                  style={{
                    fontSize: '22px',
                    color: '#111111',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                    paddingTop: '21px',
                    paddingBottom: '21px',
                  }}>
                  {camData?.company?.companyName}
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingTop: '21px',
                    paddingBottom: '21px',
                  }}
                >
                  Customer Name
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingTop: '21px',
                    paddingBottom: '21px',
                  }}
                >
                  {camData?.orderId}
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingTop: '21px',
                    paddingBottom: '21px',
                  }}
                >
                  {convertValue(camData?.orderValue)?.toLocaleString('en-In', {
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingTop: '21px',
                    paddingBottom: '21px',
                  }}
                >
                  {camData?.commodity}
                </td>

                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    fontWeight: '500',
                    paddingTop: '21px',
                    paddingBottom: '21px',
                  }}
                >
                  <span
                    style={{
                      padding: '7.5px',
                      display: 'inline-block',
                      background: '#FF9D00',
                      borderRadius: '50%',
                      marginRight: '10px',
                    }}
                  ></span>
                  In Process
                </td>
                <td
                  align="center"
                  style={{
                    fontSize: '19px',
                    color: '#EA3F3F',
                    lineHeight: '24px',
                    fontWeight: 'bold',
                    paddingTop: '21px',
                    paddingBottom: '21px',
                  }}
                >
                  12
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="8"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td
                  colSpan={4}
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Operational Details
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                    paddingTop: '31px',
                  }}
                >
                  Main Banker
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingTop: '31px',
                  }}
                >
                  {primaryBankName()}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingTop: '31px',
                  }}
                >
                  External Credit Rating
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingTop: '31px',
                  }}
                >
                  {openChargesLength()}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                  }}
                >
                  Open Charges
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  value
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                  }}
                >
                  Credit Rating Agency
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {' '}
                  American First
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                    paddingBottom: '61px',
                  }}
                >
                  Name of Auditor
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingBottom: '61px',
                  }}
                >
                  {
                    camData.company.detailedCompanyInfo.profile.auditorDetail[0]
                      .nameOfAuditor
                  }
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingBottom: '61px',
                  }}
                >
                  Change in Auditor
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#EA3F3F',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingBottom: '61px',
                  }}
                >
                  {camData.company.detailedCompanyInfo.profile.auditorDetail[0]
                    .nameOfAuditor ==
                    camData.company.detailedCompanyInfo.profile.auditorDetail[1]
                      .nameOfAuditor
                    ? 'No'
                    : 'Yes'}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="12"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td
                  colSpan={6}
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Director Details
                </td>
              </tr>
              <tr bgColor="#FAFAFB" style={{ height: '67px' }}>
                <td colSpan={2}
                  width="30%"
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    paddingLeft: '35px',
                    textTransform: 'uppercase',
                  }}
                >
                  NAME
                </td>
                <td
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  PAN
                </td>
                <td
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  DIN NUMBER
                </td>
                <td
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  DATE OF APPOINTMENT
                </td>
                <td
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  % SHAREHOLDING
                </td>
              </tr>
              {camData?.company?.detailedCompanyInfo?.profile?.directorDetail?.map(
                (director, index) => {
                  let name = director?.name
                  let [fName, lName] = director?.name.split(' ')
                  return (
                    <tr>
                      <td width="5%"
                        height="60"
                        style={{
                          padding: '21px 12px 21px 35px'
                        }}
                      >
                        <span
                          style={{
                            fontSize: '28px',
                            color: '#FF9D00',
                            lineHeight: '34px',
                            fontWeight: 'bold',
                            background: '#FFECCF',
                            borderRadius: '8px',
                            padding: '13px 0',
                            width: '60px',
                            height: '60px',
                            textAlign: 'center',
                            display: 'inline-block'
                          }}
                        >
                          {fName?.charAt(0)}
                          {lName?.charAt(0)}
                        </span>
                      </td>
                      <td width="25%"
                        style={{
                          fontSize: '22px',
                          color: '#111111',
                          lineHeight: '27px',
                          fontWeight: 'bold',
                          paddingTop: '21px',
                          paddingBottom: '21px',
                        }}
                      >{director?.name}
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          paddingTop: '21px',
                          paddingBottom: '21px',
                        }}
                      >
                        {director?.pan[0]}
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          paddingTop: '21px',
                          paddingBottom: '21px',
                        }}
                      >
                        {director.din}
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          paddingTop: '21px',
                          paddingBottom: '21px',
                        }}
                      >
                        {director.tenureStartDate}
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '24px',
                          paddingTop: '21px',
                          paddingBottom: '21px',
                        }}
                      >
                        30%
                      </td>
                    </tr>
                  )
                },
              )}
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="0"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td
                  colSpan={2}
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Shareholding Details
                </td>
              </tr>
              <tr>
                <td width="33%" valign='middle' style={{ borderRight: '2px solid #CAD6E6' }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td align='center' style={{ padding: '35px' }}><img src={`${shareHoldingChartImg}`}></img></td>
                    </tr>
                    <tr>
                      <td valign='top' style={{ padding: '20px 35px' }}>
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                          <tr>
                            {top3Share.datasets && top3Share?.datasets[0]?.data.map((val, index) => {
                              return (
                                <td align='center' style={{ fontSize: '16px', color: '#111111', lineHeight: '19px', fontWeight: '500' }}><span style={{ background: `${backgroundColor[index]}`, borderRadius: '4px', width: '16px', height: '16px', display: 'inline-block' }}></span>&nbsp;
                                  {top3Share.labels[index] == "" ? "NA" : top3Share.labels[index]}</td>

                              )
                            })}

                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td width="66%" valign='top'>
                  <table width="100%" cellPadding="12" cellSpacing="0" border="0">
                    <tr bgColor="#FAFAFB" style={{ height: '67px' }}>
                      <td colSpan={2}
                        width="30%"
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          fontWeight: 'bold',
                          paddingLeft: '35px',
                          textTransform: 'uppercase',
                        }}
                      >
                        NAME
                      </td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                        }}
                      >
                        NO. OF SHARES
                      </td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                        }}
                      >
                        % SHARE
                      </td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                        }}
                      >
                        DIRECTOR
                      </td>
                    </tr>
                    {camData &&
                      camData?.company?.detailedCompanyInfo?.profile?.shareholdingPattern?.map(
                        (share, index) => {
                          let name = share?.fullName ?? 'N A'
                          let [fName, lName] = name?.split(' ')

                          let colors = [
                            {
                              primary: '#ECF9ED',
                              secondary: '#3687E8',
                            },
                            {
                              primary: '#ECF9ED',
                              secondary: '#43C34D',
                            },
                            {
                              primary: '#FFECCF',
                              secondary: '#FF9D00',
                            },
                          ]
                          let randColor =
                            colors[Math.floor(Math.random() * colors.length)]
                          return (
                            <tr>
                              <td width="5%"
                                height="60"
                                style={{
                                  padding: '21px 12px 21px 35px'
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: '28px',
                                    color: `${randColor.secondary}`,
                                    lineHeight: '34px',
                                    fontWeight: 'bold',
                                    background: `${randColor.primary}`,
                                    borderRadius: '8px',
                                    padding: '13px 0',
                                    width: '60px',
                                    height: '60px',
                                    textAlign: 'center',
                                    display: 'inline-block'
                                  }}
                                >{fName?.charAt(0) ? fName?.charAt(0) : 'N'}
                                  {lName?.charAt(0) ? lName?.charAt(0) : 'A'}
                                </span>
                              </td>
                              <td width="25%"
                                style={{
                                  fontSize: '20px',
                                  color: '#111111',
                                  lineHeight: '27px',
                                  fontWeight: 'bold',
                                  paddingTop: '21px',
                                  paddingBottom: '21px',
                                }}
                              > {share?.fullName}
                              </td>
                              <td
                                style={{
                                  fontSize: '19px',
                                  color: '#111111',
                                  lineHeight: '23px',
                                  paddingTop: '21px',
                                  paddingBottom: '21px',
                                }}
                              >{Number(share?.numberOfShares)?.toLocaleString('en-In')}
                              </td>
                              <td
                                style={{
                                  fontSize: '19px',
                                  color: '#111111',
                                  lineHeight: '23px',
                                  paddingTop: '21px',
                                  paddingBottom: '21px',
                                }}
                              >{share?.percentageShareHolding ? Number(share?.percentageShareHolding)?.toLocaleString('en-In', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }) + '%' : ''}
                              </td>
                              <td
                                style={{
                                  fontSize: '19px',
                                  color: '#111111',
                                  lineHeight: '23px',
                                  paddingTop: '21px',
                                  paddingBottom: '21px',
                                }}
                              >{share?.director ? 'Yes' : 'No'}
                              </td>
                            </tr>
                          )
                        },
                      )}


                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="0"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td
                  colSpan={2}
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Open Bank Charge Details
                </td>
              </tr>
              <tr>
                <td width="33%" valign='middle' style={{ borderRight: '2px solid #CAD6E6' }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td align='center' style={{ padding: '35px' }}><img src={`${openBankChargeChartImg}`}></img></td>
                    </tr>
                    <tr>
                      <td valign='top' style={{ padding: '20px 35px' }}>
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                          <tr>
                            {top3Open.datasets && top3Open?.datasets[0]?.data.map((val, index) => {
                              return (
                                <td align='center' style={{ fontSize: '16px', color: '#111111', lineHeight: '19px', fontWeight: '500' }}><span style={{ background: `${backgroundColor[index]}`, borderRadius: '4px', width: '16px', height: '16px', display: 'inline-block' }}></span>&nbsp; {top3Open.labels[index] == "" ? "NA" : top3Open.labels[index]}</td>

                              )
                            })}

                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td width="66%" valign='top'>
                  <table width="100%" cellPadding="12" cellSpacing="0" border="0">
                    <tr bgColor="#FAFAFB" style={{ height: '67px' }}>
                      <td colSpan={2}
                        width="30%"
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          fontWeight: 'bold',
                          paddingLeft: '35px',
                          textTransform: 'uppercase',
                        }}
                      >
                        BANK NAME
                      </td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                        }}
                      >
                        CHARGE AMOUNT
                      </td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                        }}
                      >
                        DATE OF CREATION
                      </td>
                    </tr>
                    {orderList &&
                      orderList?.company?.detailedCompanyInfo?.financial?.openCharges?.map(
                        (charge, index) => {
                          let name = charge?.nameOfChargeHolder
                          let [fName, lName] = name?.split(' ')

                          let colors = [
                            {
                              primary: '#ECF9ED',
                              secondary: '#3687E8',
                            },
                            {
                              primary: '#ECF9ED',
                              secondary: '#43C34D',
                            },
                            {
                              primary: '#FFECCF',
                              secondary: '#FF9D00',
                            },
                          ]
                          let randColor =
                            colors[Math.floor(Math.random() * colors.length)]
                          return (
                            <tr>
                              <td width="5%"
                                height="60"
                                style={{
                                  padding: '21px 12px 21px 35px'
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: '28px',
                                    color: `${randColor.secondary}`,
                                    lineHeight: '34px',
                                    fontWeight: 'bold',
                                    background: `${randColor.primary}`,
                                    borderRadius: '8px',
                                    padding: '13px 0',
                                    width: '60px',
                                    height: '60px',
                                    textAlign: 'center',
                                    display: 'inline-block'
                                  }}
                                > {fName?.charAt(0) ? fName?.charAt(0) : 'N'}
                                  {lName?.charAt(0) ? lName?.charAt(0) : 'A'}
                                </span>
                              </td>
                              <td width="25%"
                                style={{
                                  fontSize: '20px',
                                  color: '#111111',
                                  lineHeight: '27px',
                                  fontWeight: 'bold',
                                  paddingTop: '21px',
                                  paddingBottom: '21px',
                                }}
                              > {charge?.nameOfChargeHolder1}
                              </td>
                              <td
                                style={{
                                  fontSize: '19px',
                                  color: '#111111',
                                  lineHeight: '23px',
                                  paddingTop: '21px',
                                  paddingBottom: '21px',
                                }}
                              >{Number(charge?.finalAmountSecured)?.toLocaleString('en-In')}
                              </td>
                              <td
                                style={{
                                  fontSize: '19px',
                                  color: '#111111',
                                  lineHeight: '23px',
                                  paddingTop: '21px',
                                  paddingBottom: '21px',
                                }}
                              >{charge?.dateOfCreationOfCharge
                                ? moment(charge?.dateOfCreationOfCharge, 'DD-MM-YYYY').format(
                                  'DD-MM-YYYY',
                                )
                                : ''}
                              </td>
                            </tr>

                          )
                        },
                      )}
                    <tr>
                      <td width="5%"
                        height="60"
                        style={{
                          padding: '21px 12px 21px 35px'
                        }}
                      >
                        <span
                          style={{
                            fontSize: '28px',
                            color: '#FF9D00',
                            lineHeight: '34px',
                            fontWeight: 'bold',
                            background: '#FFECCF',
                            borderRadius: '8px',
                            padding: '13px 0',
                            width: '60px',
                            height: '60px',
                            textAlign: 'center',
                            display: 'inline-block'
                          }}
                        >IB
                        </span>
                      </td>
                      <td width="25%"
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '27px',
                          fontWeight: 'bold',
                          paddingTop: '21px',
                          paddingBottom: '21px',
                        }}
                      >ICICI Bank
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          paddingTop: '21px',
                          paddingBottom: '21px',
                        }}
                      >1,900.00
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          paddingTop: '21px',
                          paddingBottom: '21px',
                        }}
                      >22-02-2020
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="0"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td
                  colSpan={2}
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Debt Profile
                </td>
              </tr>
              <tr>
                <td width="33%" valign="top">
                  <table
                    width="100%"
                    cellPadding="6"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          padding: '32px 6px 6px 35px',
                        }}
                      >
                        TOTAL LIMIT
                      </td>
                      <td
                        align="right"
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          fontWeight: 'bold',
                          padding: '32px 35px 6px 6px',
                        }}
                      >
                        1,900.00
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ padding: '6px 35px 0' }}>
                        <span
                          style={{
                            background: '#E4ECF7',
                            borderRadius: '2px',
                            height: '18px',
                            width: '100%',
                            display: 'inline-block',
                            float: 'left',
                          }}
                        >
                          <span
                            style={{
                              background: '#3687E8',
                              width: '100%',
                              height: '18px',
                              borderRadius: '2px',
                              display: 'inline-block',
                              float: 'left',
                            }}
                          ></span>
                        </span>
                      </td>
                    </tr>
                    {camData &&
                      camData?.company?.debtProfile?.map((debt, index) => (
                        <div>
                          <tr>
                            <td
                              style={{
                                fontSize: '15px',
                                color: '#8492A6',
                                lineHeight: '18px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                padding: '40px 6px 0 35px',
                              }}
                            >
                              {debt.bankName}
                            </td>
                            <td
                              align="right"
                              style={{
                                fontSize: '15px',
                                color: '#8492A6',
                                lineHeight: '18px',
                                fontWeight: 'bold',
                                padding: '40px 35px 0 6px',
                              }}
                            >
                              {debt.limit}
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2} style={{ padding: '0 35px' }}>
                              <span
                                style={{
                                  background: '#E4ECF7',
                                  borderRadius: '2px',
                                  height: '10px',
                                  width: '100%',
                                  display: 'inline-block',
                                  float: 'left',
                                }}
                              >
                                <span
                                  style={{
                                    background: `${debt.conduct == 'Good'
                                      ? '#43C34D'
                                      : debt.conduct == 'Satisfactory'
                                        ? '#FF9D00'
                                        : debt.conduct == 'Average'
                                          ? 'average'
                                          : '#EA3F3F'
                                      }`,
                                    width: `${(Number(debt.limit) / 1900 > 1
                                      ? 1
                                      : Number(debt.limit) / 1900) * 100
                                      }%`,
                                    height: '10px',
                                    borderRadius: '2px',
                                    display: 'inline-block',
                                    float: 'left',
                                  }}
                                ></span>
                              </span>
                            </td>
                          </tr>
                        </div>
                      ))}


                  </table>
                </td>
              
                <td valign="top" style={{ borderLeft: '2px solid #CAD6E6' }}>
                  <table
                    width="100%"
                    cellPadding="12"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr bgColor="#FAFAFB" style={{ height: '67px' }}>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          fontWeight: 'bold',
                          paddingLeft: '35px',
                          textTransform: 'uppercase',
                        }}
                      >
                        BANK NAME
                      </td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                        }}
                      >
                      </td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                        }}
                      >
                        LIMITS
                      </td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                        }}
                      >
                        CONDUCT
                      </td>
                    </tr>
                    {camData?.company?.debtProfile?.map((debt, index) => {
                      return (
                        <tr>
                          <td
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '27px',
                              fontWeight: 'bold',
                              padding: '26px 12px 25px 35px',
                            }}
                          >
                            {debt?.bankName}
                          </td>
                          <td
                            style={{
                              fontSize: '22px',
                              color: '#111111',
                              lineHeight: '25px',
                              letterSpacing: '0.19px',
                              paddingTop: '25px',
                              paddingBottom: '25px',
                            }}
                          >
                            {debt?.limitType}
                          </td>
                          <td
                            style={{
                              fontSize: '19px',
                              color: '#111111',
                              lineHeight: '23px',
                              paddingTop: '25px',
                              paddingBottom: '25px',
                            }}
                          >
                            {debt?.limit}
                          </td>
                          <td
                            style={{
                              fontSize: '19px',
                              color: '#EA3F3F',
                              lineHeight: '24px',
                              fontWeight: 'bold',
                              paddingTop: '25px',
                              paddingBottom: '25px',
                            }}
                          >
                            {debt?.conduct}
                          </td>
                        </tr>
                      )
                    })}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="8"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td
                  colSpan={4}
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Operational Details
                </td>
              </tr>
              <tr>
                <td
                  width="30%"
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                    paddingTop: '31px',
                  }}
                >
                  Plant Production Capacity
                </td>
                <td
                  width="20%"
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingTop: '31px',
                  }}
                >
                  {' '}
                  {camData?.productSummary?.monthlyProductionCapacity ?
                    Number(
                      camData?.productSummary?.monthlyProductionCapacity,
                    )?.toLocaleString('en-In', {
                      maximumFractionDigits: 2,
                    }) : ''}
                  {" "} {camData?.productSummary?.monthlyProductionCapacity ? "MT" : ""}
                </td>
                <td
                  width="30%"
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingTop: '31px',
                  }}
                >
                  Stock in Transit - Commodity
                </td>
                <td
                  width="20%"
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingTop: '31px',
                  }}
                >
                  {' '}
                  {camData?.productSummary?.averageStockInTransit ?
                    Number(camData?.productSummary?.averageStockInTransit)
                      ?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                      }) : ''}
                  {" "} {camData?.productSummary?.averageStockInTransit ? "MT" : ""}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                  }}
                >
                  Capacity Utilization
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {' '}
                  {camData?.productSummary?.capacityUtilization?.toLocaleString('en-In', {
                    maximumFractionDigits: 2,
                  })}{" "} {camData?.productSummary?.capacityUtilization ? "%" : ""}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                  }}
                >
                  Stock Coverage of Commodity
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >

                  {camData?.productSummary?.averageStockOfCommodity?.toLocaleString('en-In', {
                    maximumFractionDigits: 2,
                  })} {camData?.productSummary?.averageStockOfCommodity ? "Days" : ""}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                  }}
                >
                  Available Stock of Commodity
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {' '}
                  {camData?.productSummary?.availableStock ? Number(camData?.productSummary?.availableStock)?.toLocaleString('en-In', {
                    maximumFractionDigits: 2,
                  }) : ''}
                  {" "} {camData?.productSummary?.availableStock ? "MT" : ""}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                  }}
                >
                  Avg Monthly Electricity Bill
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {' '}
                  {camData?.productSummary?.AvgMonthlyElectricityBill ? "₹" : ""} {" "}
                  {/* {checkNan(
                      Number(
                        camData?.productSummary?.AvgMonthlyElectricityBill,
                      ),
                      true,
                    )} */}

                  {camData?.productSummary?.AvgMonthlyElectricityBill ? Number(camData?.productSummary?.AvgMonthlyElectricityBill)?.toLocaleString('en-In', {
                    maximumFractionDigits: 2,
                  }) : ''}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                    paddingBottom: '70px',
                  }}
                >
                  Daily Consumption of Commodity
                </td>
                <td
                  colSpan={3}
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingBottom: '70px',
                  }}
                >
                  {' '}
                  {camData?.productSummary?.dailyConsumptionOfCommodity ? Number(camData?.productSummary?.dailyConsumptionOfCommodity)?.toLocaleString('en-In', {
                    maximumFractionDigits: 2,
                  }) : ''}
                  {" "} {camData?.productSummary?.dailyConsumptionOfCommodity ? "MT" : ""}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="15"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td
                  colSpan={5}
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Revenue Details
                </td>
              </tr>
              <tr bgColor="#FAFAFB" style={{ height: '67px' }}>
                <td width="50%" style={{ paddingLeft: '35px' }}></td>
                <td
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                  }}
                >
                  TREND
                </td>
                <td
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  LATEST YEAR
                </td>
                <td
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  PREVIOUS YEAR
                </td>
                <td
                  style={{
                    fontSize: '15px',
                    color: '#8492A6',
                    lineHeight: '18px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  GROWTH
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingTop: '23px',
                    paddingLeft: '35px',
                  }}
                >
                  Gross Revenue
                </td>
                <td align="center" style={{ paddingTop: '23px' }}>
                  {RevenueDetails?.grossTurnover?.previous?.value ||
                    RevenueDetails?.grossTurnover?.current?.value ? (
                    <img
                      src={
                        calcPc(
                          RevenueDetails?.grossTurnover?.previous?.value,
                          RevenueDetails?.grossTurnover?.current?.value,
                        ) > 0
                          ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAeFBMVEUAAAAA/wBAv0AzzGY5xlVEu1VHxkdHwlJAv0lEw0tDw0pEwU5CwkxFwkxDw05Cw0xDxExEwk5DxE5Dw0xDwk5DxE1Dw01Dw01Dw01Ew05Dw05Dw01Dw01Dw01Dwk1Dw01Dw01Dw01Dw01Dw01Dw01Dw01Dw03////lRK50AAAAJnRSTlMAAQQFCQ8SGRwiJjE2Q0hRV2l9kKS0ur7HzM/Q4eTs7/P1+fv9/koV0KEAAAABYktHRCctD6gjAAAAZElEQVQYGWXBBxKCMABFwYdiF5QeC9j//Y8IA5EJYZe/0JgQXyZleKKv9IuZWN3Vqde4cvVyHCdZZ0abRtZjixUUGpUBg0SOhN7uKcdrT2dhNHFZAqk8KRze8nyOXDVzo9JM1QLS+RkCKKeivAAAAABJRU5ErkJggg=='
                          : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAflBMVEUAAAD/AAD/AAD/VVXjOTnuRETwPDzoOjrrPT3pPDzrPDzqPj7sPz/sPj7pPz/qPj7rPj7pQEDqPz/qQEDpPz/qQEDrPz/rPz/qPj7qPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz////+T0xFJAAAAKHRSTlMAAQIDCQ8RFhkiJjE1QlFWZ2h6fI6QoqO0ub6/wsbP4eTp6/L0+fv92ny6iQAAAAFiS0dEKcq3hSQAAABlSURBVBgZZcEHEoIwAEXBh4LYQOwFAvb8+59QBjNMCLuUGrlRa6Rm9VHgu4a9AjtgUmnATGktXvK8l3S28hT8RRf1rhFO+pDznNPL5WzwnNU54Usate4zBjIr2YzAUToQio2JcX4Tjhpu0b32YgAAAABJRU5ErkJggg=='
                      }
                      alt="Arrow Green"

                    />
                  ) : null}
                  {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAeFBMVEUAAAAA/wBAv0AzzGY5xlVEu1VHxkdHwlJAv0lEw0tDw0pEwU5CwkxFwkxDw05Cw0xDxExEwk5DxE5Dw0xDwk5DxE1Dw01Dw01Dw01Ew05Dw05Dw01Dw01Dw01Dwk1Dw01Dw01Dw01Dw01Dw01Dw01Dw01Dw03////lRK50AAAAJnRSTlMAAQQFCQ8SGRwiJjE2Q0hRV2l9kKS0ur7HzM/Q4eTs7/P1+fv9/koV0KEAAAABYktHRCctD6gjAAAAZElEQVQYGWXBBxKCMABFwYdiF5QeC9j//Y8IA5EJYZe/0JgQXyZleKKv9IuZWN3Vqde4cvVyHCdZZ0abRtZjixUUGpUBg0SOhN7uKcdrT2dhNHFZAqk8KRze8nyOXDVzo9JM1QLS+RkCKKeivAAAAABJRU5ErkJggg==" alt="Arrow Green" /> */}
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingTop: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.grossTurnover?.current?.value,
                    )).toFixed(2),
                    true,
                  )} Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingTop: '23px',
                  }}
                >
                  {' '}
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.grossTurnover?.previous?.value,
                    )).toFixed(2),
                    true,
                  )} Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingTop: '23px',
                  }}
                >
                  {checkNan(
                    calcPc(
                      RevenueDetails?.grossTurnover?.previous?.value,
                      RevenueDetails?.grossTurnover?.current?.value,
                    ),
                  ) + '%'}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingLeft: '35px',
                  }}
                >
                  Related Party Sales
                </td>
                <td align="center">
                  {RevenueDetails?.relatedPartySales?.previous?.value ||
                    RevenueDetails?.relatedPartySales?.current?.value ? (
                    <img
                      src={
                        calcPc(
                          RevenueDetails?.relatedPartySales?.previous?.value,
                          RevenueDetails?.relatedPartySales?.current?.value,
                        ) > 0
                          ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAeFBMVEUAAAAA/wBAv0AzzGY5xlVEu1VHxkdHwlJAv0lEw0tDw0pEwU5CwkxFwkxDw05Cw0xDxExEwk5DxE5Dw0xDwk5DxE1Dw01Dw01Dw01Ew05Dw05Dw01Dw01Dw01Dwk1Dw01Dw01Dw01Dw01Dw01Dw01Dw01Dw03////lRK50AAAAJnRSTlMAAQQFCQ8SGRwiJjE2Q0hRV2l9kKS0ur7HzM/Q4eTs7/P1+fv9/koV0KEAAAABYktHRCctD6gjAAAAZElEQVQYGWXBBxKCMABFwYdiF5QeC9j//Y8IA5EJYZe/0JgQXyZleKKv9IuZWN3Vqde4cvVyHCdZZ0abRtZjixUUGpUBg0SOhN7uKcdrT2dhNHFZAqk8KRze8nyOXDVzo9JM1QLS+RkCKKeivAAAAABJRU5ErkJggg=='
                          : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAflBMVEUAAAD/AAD/AAD/VVXjOTnuRETwPDzoOjrrPT3pPDzrPDzqPj7sPz/sPj7pPz/qPj7rPj7pQEDqPz/qQEDpPz/qQEDrPz/rPz/qPj7qPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz////+T0xFJAAAAKHRSTlMAAQIDCQ8RFhkiJjE1QlFWZ2h6fI6QoqO0ub6/wsbP4eTp6/L0+fv92ny6iQAAAAFiS0dEKcq3hSQAAABlSURBVBgZZcEHEoIwAEXBh4LYQOwFAvb8+59QBjNMCLuUGrlRa6Rm9VHgu4a9AjtgUmnATGktXvK8l3S28hT8RRf1rhFO+pDznNPL5WzwnNU54Usate4zBjIr2YzAUToQio2JcX4Tjhpu0b32YgAAAABJRU5ErkJggg=='
                      }
                      alt="Arrow Green"

                    />
                  ) : null}
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {' '}
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.relatedPartySales?.current?.value,
                    )).toFixed(2),
                    true,
                  )} Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.relatedPartySales?.previous?.value,
                    )).toFixed(2),
                    true,
                  )} Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    calcPc(
                      RevenueDetails?.relatedPartySales?.previous?.value,
                      RevenueDetails?.relatedPartySales?.current?.value,
                    ),
                  ) + '%'}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingLeft: '35px',
                  }}
                >
                  Intra Organization Sales
                </td>
                <td align="center">
                  {RevenueDetails?.intraOrgSalesPercent?.previous?.value ||
                    RevenueDetails?.intraOrgSalesPercent?.current?.value ? (
                    <img
                      src={
                        calcPc(
                          RevenueDetails?.intraOrgSalesPercent?.previous?.value,
                          RevenueDetails?.intraOrgSalesPercent?.current?.value,
                        ) > 0
                          ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAeFBMVEUAAAAA/wBAv0AzzGY5xlVEu1VHxkdHwlJAv0lEw0tDw0pEwU5CwkxFwkxDw05Cw0xDxExEwk5DxE5Dw0xDwk5DxE1Dw01Dw01Dw01Ew05Dw05Dw01Dw01Dw01Dwk1Dw01Dw01Dw01Dw01Dw01Dw01Dw01Dw03////lRK50AAAAJnRSTlMAAQQFCQ8SGRwiJjE2Q0hRV2l9kKS0ur7HzM/Q4eTs7/P1+fv9/koV0KEAAAABYktHRCctD6gjAAAAZElEQVQYGWXBBxKCMABFwYdiF5QeC9j//Y8IA5EJYZe/0JgQXyZleKKv9IuZWN3Vqde4cvVyHCdZZ0abRtZjixUUGpUBg0SOhN7uKcdrT2dhNHFZAqk8KRze8nyOXDVzo9JM1QLS+RkCKKeivAAAAABJRU5ErkJggg=='
                          : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAflBMVEUAAAD/AAD/AAD/VVXjOTnuRETwPDzoOjrrPT3pPDzrPDzqPj7sPz/sPj7pPz/qPj7rPj7pQEDqPz/qQEDpPz/qQEDrPz/rPz/qPj7qPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz////+T0xFJAAAAKHRSTlMAAQIDCQ8RFhkiJjE1QlFWZ2h6fI6QoqO0ub6/wsbP4eTp6/L0+fv92ny6iQAAAAFiS0dEKcq3hSQAAABlSURBVBgZZcEHEoIwAEXBh4LYQOwFAvb8+59QBjNMCLuUGrlRa6Rm9VHgu4a9AjtgUmnATGktXvK8l3S28hT8RRf1rhFO+pDznNPL5WzwnNU54Usate4zBjIr2YzAUToQio2JcX4Tjhpu0b32YgAAAABJRU5ErkJggg=='
                      }
                      alt="Arrow Green"

                    />
                  ) : null}
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.intraOrgSalesPercent?.current?.value,
                    )).toFixed(2),
                    true,
                  )} Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.intraOrgSalesPercent?.previous?.value,
                    )).toFixed(2),
                    true,
                  )} Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {' '}
                  {checkNan(
                    calcPc(
                      RevenueDetails?.intraOrgSalesPercent?.previous?.value,
                      RevenueDetails?.intraOrgSalesPercent?.current?.value,
                    ),
                  ) + '%'}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingLeft: '35px',
                  }}
                >
                  B2B Sales
                </td>
                <td align="center">
                  {RevenueDetails?.B2BSales?.previous?.value ||
                    RevenueDetails?.B2BSales?.current?.value ? (
                    <img
                      src={
                        calcPc(
                          RevenueDetails?.B2BSales?.previous?.value,
                          RevenueDetails?.B2BSales?.current?.value,
                        ) > 0
                          ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAeFBMVEUAAAAA/wBAv0AzzGY5xlVEu1VHxkdHwlJAv0lEw0tDw0pEwU5CwkxFwkxDw05Cw0xDxExEwk5DxE5Dw0xDwk5DxE1Dw01Dw01Dw01Ew05Dw05Dw01Dw01Dw01Dwk1Dw01Dw01Dw01Dw01Dw01Dw01Dw01Dw03////lRK50AAAAJnRSTlMAAQQFCQ8SGRwiJjE2Q0hRV2l9kKS0ur7HzM/Q4eTs7/P1+fv9/koV0KEAAAABYktHRCctD6gjAAAAZElEQVQYGWXBBxKCMABFwYdiF5QeC9j//Y8IA5EJYZe/0JgQXyZleKKv9IuZWN3Vqde4cvVyHCdZZ0abRtZjixUUGpUBg0SOhN7uKcdrT2dhNHFZAqk8KRze8nyOXDVzo9JM1QLS+RkCKKeivAAAAABJRU5ErkJggg=='
                          : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAflBMVEUAAAD/AAD/AAD/VVXjOTnuRETwPDzoOjrrPT3pPDzrPDzqPj7sPz/sPj7pPz/qPj7rPj7pQEDqPz/qQEDpPz/qQEDrPz/rPz/qPj7qPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz////+T0xFJAAAAKHRSTlMAAQIDCQ8RFhkiJjE1QlFWZ2h6fI6QoqO0ub6/wsbP4eTp6/L0+fv92ny6iQAAAAFiS0dEKcq3hSQAAABlSURBVBgZZcEHEoIwAEXBh4LYQOwFAvb8+59QBjNMCLuUGrlRa6Rm9VHgu4a9AjtgUmnATGktXvK8l3S28hT8RRf1rhFO+pDznNPL5WzwnNU54Usate4zBjIr2YzAUToQio2JcX4Tjhpu0b32YgAAAABJRU5ErkJggg=='
                      }
                      alt="Arrow Green"

                    />
                  ) : null}
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.B2BSales?.current?.value,
                    )).toFixed(2),
                    true,
                  )} Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.B2BSales?.previous?.value,
                    )).toFixed(2),
                    true,
                  )} Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    calcPc(
                      RevenueDetails?.B2BSales?.previous?.value,
                      RevenueDetails?.B2BSales?.current?.value,
                    ),
                  ) + '%'}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingLeft: '35px',
                  }}
                >
                  B2C Sales
                </td>

                <td align="center">
                  {RevenueDetails?.B2CSales?.previous?.value ||
                    RevenueDetails?.B2CSales?.current?.value ? (
                    <img
                      src={
                        calcPc(
                          RevenueDetails?.B2CSales?.previous?.value,
                          RevenueDetails?.B2CSales?.current?.value,
                        ) > 0
                          ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAeFBMVEUAAAAA/wBAv0AzzGY5xlVEu1VHxkdHwlJAv0lEw0tDw0pEwU5CwkxFwkxDw05Cw0xDxExEwk5DxE5Dw0xDwk5DxE1Dw01Dw01Dw01Ew05Dw05Dw01Dw01Dw01Dwk1Dw01Dw01Dw01Dw01Dw01Dw01Dw01Dw03////lRK50AAAAJnRSTlMAAQQFCQ8SGRwiJjE2Q0hRV2l9kKS0ur7HzM/Q4eTs7/P1+fv9/koV0KEAAAABYktHRCctD6gjAAAAZElEQVQYGWXBBxKCMABFwYdiF5QeC9j//Y8IA5EJYZe/0JgQXyZleKKv9IuZWN3Vqde4cvVyHCdZZ0abRtZjixUUGpUBg0SOhN7uKcdrT2dhNHFZAqk8KRze8nyOXDVzo9JM1QLS+RkCKKeivAAAAABJRU5ErkJggg=='
                          : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAflBMVEUAAAD/AAD/AAD/VVXjOTnuRETwPDzoOjrrPT3pPDzrPDzqPj7sPz/sPj7pPz/qPj7rPj7pQEDqPz/qQEDpPz/qQEDrPz/rPz/qPj7qPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz////+T0xFJAAAAKHRSTlMAAQIDCQ8RFhkiJjE1QlFWZ2h6fI6QoqO0ub6/wsbP4eTp6/L0+fv92ny6iQAAAAFiS0dEKcq3hSQAAABlSURBVBgZZcEHEoIwAEXBh4LYQOwFAvb8+59QBjNMCLuUGrlRa6Rm9VHgu4a9AjtgUmnATGktXvK8l3S28hT8RRf1rhFO+pDznNPL5WzwnNU54Usate4zBjIr2YzAUToQio2JcX4Tjhpu0b32YgAAAABJRU5ErkJggg=='
                      }
                      alt="Arrow Green"

                    />
                  ) : null}
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.B2CSales?.current?.value,
                    )).toFixed(2),
                    true,
                  )}  Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.B2CSales?.previous?.value,
                    )).toFixed(2),
                    true,
                  )}   Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    calcPc(
                      RevenueDetails?.B2CSales?.previous?.value,
                      RevenueDetails?.B2CSales?.current?.value,
                    ),
                  ) + '%'}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingLeft: '35px',
                  }}
                >
                  Export Sales
                </td>

                <td align="center">
                  {RevenueDetails?.exportSales?.previous?.value ||
                    RevenueDetails?.exportSales?.current?.value ? (
                    <img
                      src={
                        calcPc(
                          RevenueDetails?.exportSales?.previous?.value,
                          RevenueDetails?.exportSales?.current?.value,
                        ) > 0
                          ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAeFBMVEUAAAAA/wBAv0AzzGY5xlVEu1VHxkdHwlJAv0lEw0tDw0pEwU5CwkxFwkxDw05Cw0xDxExEwk5DxE5Dw0xDwk5DxE1Dw01Dw01Dw01Ew05Dw05Dw01Dw01Dw01Dwk1Dw01Dw01Dw01Dw01Dw01Dw01Dw01Dw03////lRK50AAAAJnRSTlMAAQQFCQ8SGRwiJjE2Q0hRV2l9kKS0ur7HzM/Q4eTs7/P1+fv9/koV0KEAAAABYktHRCctD6gjAAAAZElEQVQYGWXBBxKCMABFwYdiF5QeC9j//Y8IA5EJYZe/0JgQXyZleKKv9IuZWN3Vqde4cvVyHCdZZ0abRtZjixUUGpUBg0SOhN7uKcdrT2dhNHFZAqk8KRze8nyOXDVzo9JM1QLS+RkCKKeivAAAAABJRU5ErkJggg=='
                          : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAflBMVEUAAAD/AAD/AAD/VVXjOTnuRETwPDzoOjrrPT3pPDzrPDzqPj7sPz/sPj7pPz/qPj7rPj7pQEDqPz/qQEDpPz/qQEDrPz/rPz/qPj7qPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz////+T0xFJAAAAKHRSTlMAAQIDCQ8RFhkiJjE1QlFWZ2h6fI6QoqO0ub6/wsbP4eTp6/L0+fv92ny6iQAAAAFiS0dEKcq3hSQAAABlSURBVBgZZcEHEoIwAEXBh4LYQOwFAvb8+59QBjNMCLuUGrlRa6Rm9VHgu4a9AjtgUmnATGktXvK8l3S28hT8RRf1rhFO+pDznNPL5WzwnNU54Usate4zBjIr2YzAUToQio2JcX4Tjhpu0b32YgAAAABJRU5ErkJggg=='
                      }
                      alt="Arrow Green"

                    />
                  ) : null}
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.exportSales?.current?.value,
                    )).toFixed(2),
                    true,
                  )}   Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.exportSales?.previous?.value,
                    )).toFixed(2),
                    true,
                  )}  Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    calcPc(
                      RevenueDetails?.exportSales?.previous?.value,
                      RevenueDetails?.exportSales?.current?.value,
                    ),
                  ) + '%'}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingLeft: '35px',
                  }}
                >
                  Total Customers
                </td>

                <td align="center">
                  {RevenueDetails?.ttlCustomer?.previous?.value ||
                    RevenueDetails?.ttlCustomer?.current?.value ? (
                    <img
                      src={
                        calcPc(
                          RevenueDetails?.ttlCustomer?.previous?.value,
                          RevenueDetails?.ttlCustomer?.current?.value,
                        ) > 0
                          ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAeFBMVEUAAAAA/wBAv0AzzGY5xlVEu1VHxkdHwlJAv0lEw0tDw0pEwU5CwkxFwkxDw05Cw0xDxExEwk5DxE5Dw0xDwk5DxE1Dw01Dw01Dw01Ew05Dw05Dw01Dw01Dw01Dwk1Dw01Dw01Dw01Dw01Dw01Dw01Dw01Dw03////lRK50AAAAJnRSTlMAAQQFCQ8SGRwiJjE2Q0hRV2l9kKS0ur7HzM/Q4eTs7/P1+fv9/koV0KEAAAABYktHRCctD6gjAAAAZElEQVQYGWXBBxKCMABFwYdiF5QeC9j//Y8IA5EJYZe/0JgQXyZleKKv9IuZWN3Vqde4cvVyHCdZZ0abRtZjixUUGpUBg0SOhN7uKcdrT2dhNHFZAqk8KRze8nyOXDVzo9JM1QLS+RkCKKeivAAAAABJRU5ErkJggg=='
                          : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAflBMVEUAAAD/AAD/AAD/VVXjOTnuRETwPDzoOjrrPT3pPDzrPDzqPj7sPz/sPj7pPz/qPj7rPj7pQEDqPz/qQEDpPz/qQEDrPz/rPz/qPj7qPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz////+T0xFJAAAAKHRSTlMAAQIDCQ8RFhkiJjE1QlFWZ2h6fI6QoqO0ub6/wsbP4eTp6/L0+fv92ny6iQAAAAFiS0dEKcq3hSQAAABlSURBVBgZZcEHEoIwAEXBh4LYQOwFAvb8+59QBjNMCLuUGrlRa6Rm9VHgu4a9AjtgUmnATGktXvK8l3S28hT8RRf1rhFO+pDznNPL5WzwnNU54Usate4zBjIr2YzAUToQio2JcX4Tjhpu0b32YgAAAABJRU5ErkJggg=='
                      }
                      alt="Arrow Green"

                    />
                  ) : null}
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.ttlCustomer?.current?.value,
                    )).toFixed(2),
                    true,
                  )} Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.ttlCustomer?.previous?.value,
                    )).toFixed(2),
                    true,
                  )} Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    calcPc(
                      RevenueDetails?.ttlCustomer?.previous?.value,
                      RevenueDetails?.ttlCustomer?.current?.value,
                    ),
                  ) + '%'}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingLeft: '35px',
                  }}
                >
                  Total Invoices
                </td>

                <td align="center">
                  {RevenueDetails?.ttlInv?.previous?.value ||
                    RevenueDetails?.ttlInv?.current?.value ? (
                    <img
                      src={
                        calcPc(
                          RevenueDetails?.ttlInv?.previous?.value,
                          RevenueDetails?.ttlInv?.current?.value,
                        ) > 0
                          ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAeFBMVEUAAAAA/wBAv0AzzGY5xlVEu1VHxkdHwlJAv0lEw0tDw0pEwU5CwkxFwkxDw05Cw0xDxExEwk5DxE5Dw0xDwk5DxE1Dw01Dw01Dw01Ew05Dw05Dw01Dw01Dw01Dwk1Dw01Dw01Dw01Dw01Dw01Dw01Dw01Dw03////lRK50AAAAJnRSTlMAAQQFCQ8SGRwiJjE2Q0hRV2l9kKS0ur7HzM/Q4eTs7/P1+fv9/koV0KEAAAABYktHRCctD6gjAAAAZElEQVQYGWXBBxKCMABFwYdiF5QeC9j//Y8IA5EJYZe/0JgQXyZleKKv9IuZWN3Vqde4cvVyHCdZZ0abRtZjixUUGpUBg0SOhN7uKcdrT2dhNHFZAqk8KRze8nyOXDVzo9JM1QLS+RkCKKeivAAAAABJRU5ErkJggg=='
                          : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAflBMVEUAAAD/AAD/AAD/VVXjOTnuRETwPDzoOjrrPT3pPDzrPDzqPj7sPz/sPj7pPz/qPj7rPj7pQEDqPz/qQEDpPz/qQEDrPz/rPz/qPj7qPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz/qPz/qPz/pPz/qPz/qPz/qPz////+T0xFJAAAAKHRSTlMAAQIDCQ8RFhkiJjE1QlFWZ2h6fI6QoqO0ub6/wsbP4eTp6/L0+fv92ny6iQAAAAFiS0dEKcq3hSQAAABlSURBVBgZZcEHEoIwAEXBh4LYQOwFAvb8+59QBjNMCLuUGrlRa6Rm9VHgu4a9AjtgUmnATGktXvK8l3S28hT8RRf1rhFO+pDznNPL5WzwnNU54Usate4zBjIr2YzAUToQio2JcX4Tjhpu0b32YgAAAABJRU5ErkJggg=='
                      }
                      alt="Arrow Green"

                    />
                  ) : null}
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.ttlInv?.current?.value,
                    )).toFixed(2),
                    true,
                  )} Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(Number(
                      RevenueDetails?.ttlInv?.previous?.value,
                    )).toFixed(2),
                    true,
                  )} Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    calcPc(
                      RevenueDetails?.ttlInv?.previous?.value,
                      RevenueDetails?.ttlInv?.current?.value,
                    ),
                  ) + '%'}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingLeft: '35px',
                    paddingBottom: '78px',
                  }}
                >
                  Gross Margin
                </td>
                <td align="center" style={{ paddingBottom: '78px' }}>
                  {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAAeFBMVEUAAAAA/wBAv0AzzGY5xlVEu1VHxkdHwlJAv0lEw0tDw0pEwU5CwkxFwkxDw05Cw0xDxExEwk5DxE5Dw0xDwk5DxE1Dw01Dw01Dw01Ew05Dw05Dw01Dw01Dw01Dwk1Dw01Dw01Dw01Dw01Dw01Dw01Dw01Dw03////lRK50AAAAJnRSTlMAAQQFCQ8SGRwiJjE2Q0hRV2l9kKS0ur7HzM/Q4eTs7/P1+fv9/koV0KEAAAABYktHRCctD6gjAAAAZElEQVQYGWXBBxKCMABFwYdiF5QeC9j//Y8IA5EJYZe/0JgQXyZleKKv9IuZWN3Vqde4cvVyHCdZZ0abRtZjixUUGpUBg0SOhN7uKcdrT2dhNHFZAqk8KRze8nyOXDVzo9JM1QLS+RkCKKeivAAAAABJRU5ErkJggg==" alt="Arrow Green" /> */}
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingBottom: '78px',
                  }}
                >
                  11,900.00
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingBottom: '78px',
                  }}
                >
                  1,900.00
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                    paddingBottom: '78px',
                  }}
                >
                  40%
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="0"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Trends
                </td>
                <td height="78" align='right'
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '18px',
                    color: '#2837566A',
                    lineHeight: '23px',
                    fontWeight: 'bold'
                  }}>Display By: <span style={{ color: '#3687E8' }}>Quarterly</span></td>
              </tr>
              <tr>
                <td height="67" bgColor="#FAFAFB" width="50%" style={{ fontSize: '22px', color: '#111111', lineHeight: '27px', fontWeight: 'bold', padding: '0 35px', borderRight: '2px solid #CAD6E6' }}>Gross Revenue <span style={{ fontWeight: '500' }}>: {checkNan(
                  CovertvaluefromtoCR(Number(
                    gstData?.detail?.salesDetailAnnual?.saleSummary
                      ?.grossTurnover?.current?.value,
                  )).toFixed(2),
                  true,
                )} Cr</span></td>
                <td height="67" bgColor="#FAFAFB" width="50%" style={{ fontSize: '22px', color: '#111111', lineHeight: '27px', fontWeight: 'bold', padding: '0 35px' }}>Gross Purchases <span style={{ fontWeight: '500' }}>:  {checkNan(
                  CovertvaluefromtoCR(Number(
                    gstData?.detail?.purchaseDetailAnnual?.saleSummary
                      ?.grossPurchases?.current?.value,
                  )).toFixed(2),
                  true,
                )} Cr</span></td>
              </tr>
              <tr>
                <td align='center' style={{ borderRight: '2px solid #CAD6E6', padding: '35px' }}>
                  <img src={`${trendChartRevenueImg}`}></img>
                </td>
                <td align='center' style={{ padding: '35px' }}>
                  <img src={`${trendChartPurchasesImg}`}></img>
                </td>
              </tr>
              <tr>
                <td valign='top' style={{ borderRight: '2px solid #CAD6E6', padding: '35px' }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td align='center' style={{ fontSize: '16px', color: '#111111', lineHeight: '19px', fontWeight: '500' }}><span style={{ background: '#2979F2', borderRadius: '4px', width: '16px', height: '16px', display: 'inline-block' }}></span>&nbsp; Gross Revenue</td>
                    </tr>
                  </table>
                </td>
                <td valign='top' style={{ padding: '35px' }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td align='center' style={{ fontSize: '16px', color: '#111111', lineHeight: '19px', fontWeight: '500' }}><span style={{ background: '#FA5F1C', borderRadius: '4px', width: '16px', height: '16px', display: 'inline-block' }}></span>&nbsp; Gross Purchases</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="0"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Skewness
                </td>
                <td height="78" align='right'
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '18px',
                    color: '#2837566A',
                    lineHeight: '23px',
                    fontWeight: 'bold'
                  }}>Display By: <span style={{ color: '#3687E8' }}>Quarterly</span></td>
              </tr>
              <tr>
                <td height="67" bgColor="#FAFAFB" width="50%" style={{ fontSize: '22px', color: '#111111', lineHeight: '27px', fontWeight: 'bold', padding: '0 35px', borderRight: '2px solid #CAD6E6' }}>Gross Revenue <span style={{ fontWeight: '500' }}>:  {checkNan(
                  CovertvaluefromtoCR(Number(
                    gstData?.detail?.salesDetailAnnual?.saleSummary
                      ?.grossTurnover?.current?.value,
                  )).toFixed(2),
                  true,
                )} Cr</span></td>
                <td height="67" bgColor="#FAFAFB" width="50%" style={{ fontSize: '22px', color: '#111111', lineHeight: '27px', fontWeight: 'bold', padding: '0 35px' }}>Gross Purchases <span style={{ fontWeight: '500' }}>:  {checkNan(
                  CovertvaluefromtoCR(Number(
                    gstData?.detail?.purchaseDetailAnnual?.saleSummary
                      ?.grossPurchases?.current?.value,
                  )).toFixed(2),
                  true,
                )} Cr</span></td>
              </tr>
              <tr>
                <td align='left' valign='middle' style={{ borderRight: '2px solid #CAD6E6' }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td width="45%" style={{ padding: '35px' }}><img src={`${skewnessChartRevenueImg}`}></img></td>
                      <td width="55%" style={{ padding: '35px' }}>
                        <table width="100%" cellPadding="10" cellSpacing="0" border="0">
                          {top5Customers.datasets && top5Customers?.datasets[0]?.data?.map((val, index) => {
                            return (
                              <tr>
                                <td width="5%" align='left'><span style={{ background: `${backgroundColor[index]}`, borderRadius: '4px', width: '16px', height: '16px', display: 'inline-block' }}></span></td>
                                <td width="55%" align='left' style={{ fontSize: '19px', color: '#111111', lineHeight: '23px' }}>{top5Customers.labels[index]}</td>
                                <td width="40%" align='left' style={{ fontSize: '19px', color: '#111111', lineHeight: '23px' }}>{
                                  ((val / totalCustomer) * 100)?.toFixed(2)
                                }%</td>
                              </tr>

                            )
                          })}
                          <tr>
                            <td width="5%" align='left'><span style={{ background: '#61C555', borderRadius: '4px', width: '16px', height: '16px', display: 'inline-block' }}></span></td>
                            <td width="55%" align='left' style={{ fontSize: '19px', color: '#111111', lineHeight: '23px' }}>Customer 1</td>
                            <td width="40%" align='left' style={{ fontSize: '19px', color: '#111111', lineHeight: '23px' }}>83.80%</td>
                          </tr>

                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td align='left' valign='middle'>
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td width="45%" style={{ padding: '35px' }}><img src={`${skewnessChartPurchasesImg}`}></img></td>
                      <td width="45%" style={{ padding: '35px' }}>
                        <table width="100%" cellPadding="10" cellSpacing="0" border="0">
                          {top5Suppliers.datasets && top5Customers?.datasets[0]?.data?.map((val, index) => {
                            return (
                              <tr>
                                <td width="5%" align='left'><span style={{ background: `${backgroundColor[index]}`, borderRadius: '4px', width: '16px', height: '16px', display: 'inline-block' }}></span></td>
                                <td width="55%" align='left' style={{ fontSize: '19px', color: '#111111', lineHeight: '23px' }}>{top5Suppliers.labels[index]}</td>
                                <td width="40%" align='left' style={{ fontSize: '19px', color: '#111111', lineHeight: '23px' }}>{
                                  ((val / totalSupplier) * 100)?.toFixed(2)
                                }%</td>
                              </tr>

                            )
                          })}
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="0"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td
                  colSpan={2}
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Financial Summary
                </td>
              </tr>
              <tr>
                <td
                  valign="top"
                  width="50%"
                  style={{ borderRight: '2px solid #CAD6E6' }}
                >
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td valign="top">
                        <table
                          width="100%"
                          cellPadding="13"
                          cellSpacing="0"
                          border="0"
                        >
                          <tr bgColor="#FAFAFB" style={{ height: '67px' }}>
                            <td
                              width="50%"
                              style={{
                                fontSize: '22px',
                                color: '#111111',
                                lineHeight: '27px',
                                fontWeight: 'bold',
                                paddingLeft: '35px',
                              }}
                            >
                              Liabilities
                            </td>
                            <td
                              style={{
                                fontSize: '15px',
                                color: '#8492A6',
                                lineHeight: '18px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                              }}
                            >
                              {moment(
                                companyData?.financial?.balanceSheet[0]?.date,
                              )
                                .format('MMM-YY')
                                ?.toUpperCase()}
                            </td>
                            <td
                              style={{
                                fontSize: '15px',
                                color: '#8492A6',
                                lineHeight: '18px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                              }}
                            >
                              {moment(
                                companyData?.financial?.balanceSheet[1]?.date,
                              )
                                .format('MMM-YY')
                                ?.toUpperCase()}
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                paddingLeft: '35px',
                                paddingTop: '33px',
                              }}
                            >
                              Net Worth
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#EA3F3F',
                                lineHeight: '25px',
                                fontWeight: '500',
                                paddingTop: '33px',
                              }}
                            >
                              {convertValue(_get(
                                companyData,
                                'financial.balanceSheet[0].equityLiabilities.totalEquity',
                                '',
                              )).toLocaleString('en-In', {
                                minimumFractionDigits: 2,
                                maximumSignificantDigits: 2,
                              })}
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                                paddingTop: '33px',
                              }}
                            >
                              {convertValue(_get(
                                companyData,
                                'financial.balanceSheet[1].equityLiabilities.totalEquity',
                                '',
                              )).toLocaleString('en-In', {
                                minimumFractionDigits: 2,
                                maximumSignificantDigits: 2,
                              })}
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                paddingLeft: '35px',
                              }}
                            >
                              Total Borrowings
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                              }}
                            >
                              {convertValue(Number(
                                _get(
                                  companyData,
                                  'financial.balanceSheet[0].equityLiabilities.borrowingsCurrent',
                                  '',
                                ) +
                                _get(
                                  companyData,
                                  'financial.balanceSheet[0].equityLiabilities.borrowingsNonCurrent',
                                  '',
                                ),
                              ))?.toLocaleString('en-In', {
                                minimumFractionDigits: 2,
                                maximumSignificantDigits: 2,
                              })}
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                              }}
                            >
                              {convertValue(Number(
                                _get(
                                  companyData,
                                  'financial.balanceSheet[1].equityLiabilities.borrowingsCurrent',
                                  '',
                                ) +
                                _get(
                                  companyData,
                                  'financial.balanceSheet[1].equityLiabilities.borrowingsNonCurrent',
                                  '',
                                ),
                              ))?.toLocaleString('en-In', {
                                minimumFractionDigits: 2,
                                maximumSignificantDigits: 2,
                              })}
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                paddingLeft: '35px',
                              }}
                            >
                              Creditors
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                              }}
                            >
                              {convertValue(Number(
                                _get(
                                  companyData,
                                  'financial.balanceSheet[0].equityLiabilities.tradePay',
                                  '',
                                ) +
                                _get(
                                  companyData,
                                  'financial.balanceSheet[0].equityLiabilities.tradePayablesNoncurrent',
                                  '',
                                ),
                              ))?.toLocaleString('en-In', {
                                minimumFractionDigits: 2,
                                maximumSignificantDigits: 2,
                              })}
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                              }}
                            >
                              {convertValue(Number(
                                _get(
                                  companyData,
                                  'financial.balanceSheet[1].equityLiabilities.tradePay',
                                  '',
                                ) +
                                _get(
                                  companyData,
                                  'financial.balanceSheet[1].equityLiabilities.tradePayablesNoncurrent',
                                  '',
                                ),
                              ))?.toLocaleString('en-In', {
                                minimumFractionDigits: 2,
                                maximumSignificantDigits: 2,
                              })}
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                paddingLeft: '35px',
                                paddingBottom: '38px',
                              }}
                            >
                              Other Current Liabilities
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                                paddingBottom: '38px',
                              }}
                            >
                              {convertValue(_get(
                                companyData,
                                'financial.balanceSheet[0].equityLiabilities.otherCurrentLiabilities',
                                '',
                              ))?.toLocaleString('en-In', {
                                minimumFractionDigits: 2,
                                maximumSignificantDigits: 2,
                              })}
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                                paddingBottom: '38px',
                              }}
                            >
                              {convertValue(_get(
                                companyData,
                                'financial.balanceSheet[1].equityLiabilities.otherCurrentLiabilities',
                                '',
                              ))?.toLocaleString('en-In', {
                                minimumFractionDigits: 2,
                                maximumSignificantDigits: 2,
                              })}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td valign="top">
                        <table
                          width="100%"
                          cellPadding="13"
                          cellSpacing="0"
                          border="0"
                        >
                          <tr
                            bgColor="#FAFAFB"
                            style={{
                              height: '67px',
                              borderTop: '2px solid #CAD6E6',
                            }}
                          >
                            <td
                              colSpan={3}
                              style={{
                                fontSize: '22px',
                                color: '#111111',
                                lineHeight: '27px',
                                fontWeight: 'bold',
                                paddingLeft: '35px',
                              }}
                            >
                              Assets
                            </td>
                          </tr>
                          <tr>
                            <td
                              width="50%"
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                paddingLeft: '35px',
                                paddingTop: '33px',
                              }}
                            >
                              Working Capital Turnover ratio
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                                paddingTop: '33px',
                              }}
                            >
                              {_get(
                                companyData,
                                'financial.ratioAnalysis[0]',
                                {},
                              )?.workingCapitalTurnover?.toFixed(2)}
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                                paddingTop: '33px',
                              }}
                            >
                              {_get(
                                companyData,
                                'financial.ratioAnalysis[1]',
                                {},
                              )
                                ?.workingCapitalTurnover?.toFixed(2)
                                ?.toLocaleString()}
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                paddingLeft: '35px',
                              }}
                            >
                              Debtors period
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                              }}
                            >
                              {_get(
                                companyData,
                                'financial.ratioAnalysis[0]',
                                {},
                              )
                                ?.daysOfSalesOutstanding?.toFixed(2)
                                ?.toLocaleString()}
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                              }}
                            >
                              {_get(
                                companyData,
                                'financial.ratioAnalysis[1]',
                                {},
                              )
                                ?.daysOfSalesOutstanding?.toFixed(2)
                                ?.toLocaleString()}
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                paddingLeft: '35px',
                              }}
                            >
                              Creditors Perio
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                              }}
                            >
                              {_get(
                                companyData,
                                'financial.ratioAnalysis[0]',
                                {},
                              )
                                ?.daysOfPayablesOutstanding?.toFixed(2)
                                ?.toLocaleString()}
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                              }}
                            >
                              {_get(
                                companyData,
                                'financial.ratioAnalysis[1]',
                                {},
                              )?.daysOfPayablesOutstanding?.toFixed(2)}
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                paddingLeft: '35px',
                              }}
                            >
                              Inventory Period
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                              }}
                            ></td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                              }}
                            >
                              2,988.00
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                paddingLeft: '35px',
                                paddingBottom: '38px',
                              }}
                            >
                              Other Current Assets
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                                paddingBottom: '38px',
                              }}
                            >
                              2,988.00
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                                paddingBottom: '38px',
                              }}
                            >
                              2,988.00
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td valign="top">
                        <table
                          width="100%"
                          cellPadding="13"
                          cellSpacing="0"
                          border="0"
                        >
                          <tr
                            bgColor="#FAFAFB"
                            style={{
                              height: '67px',
                              borderTop: '2px solid #CAD6E6',
                            }}
                          >
                            <td
                              colSpan={3}
                              style={{
                                fontSize: '22px',
                                color: '#111111',
                                lineHeight: '27px',
                                fontWeight: 'bold',
                                paddingLeft: '35px',
                              }}
                            >
                              P/L
                            </td>
                          </tr>
                          <tr>
                            <td
                              width="50%"
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                paddingLeft: '35px',
                                paddingTop: '33px',
                              }}
                            >
                              Revenue
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                                paddingTop: '33px',
                              }}
                            >
                              2,988.00
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                                paddingTop: '33px',
                              }}
                            >
                              2,988.00
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '24px',
                                paddingLeft: '35px',
                                paddingBottom: '52px',
                              }}
                            >
                              EBIDTA
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                                paddingBottom: '52px',
                              }}
                            >
                              2,988.00
                            </td>
                            <td
                              style={{
                                fontSize: '20px',
                                color: '#111111',
                                lineHeight: '25px',
                                fontWeight: '500',
                                paddingBottom: '52px',
                              }}
                            >
                              2,988.00
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td valign="top">
                  <table
                    width="100%"
                    cellPadding="15"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr bgColor="#FAFAFB" style={{ height: '67px' }}>
                      <td
                        width="50%"
                        style={{
                          fontSize: '22px',
                          color: '#111111',
                          lineHeight: '27px',
                          fontWeight: 'bold',
                          paddingLeft: '35px',
                        }}
                      >
                        Ratios
                      </td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                        }}
                      >
                        MAR-20
                      </td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                        }}
                      >
                        MAR-19
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          paddingLeft: '35px',
                          paddingTop: '33px',
                        }}
                      >
                        Cash from Operations
                      </td>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#EA3F3F',
                          lineHeight: '25px',
                          fontWeight: '500',
                          paddingTop: '33px',
                        }}
                      >
                        {' '}
                        {convertValue(_get(
                          companyData,
                          'financial.cashFlowStatement[0].cashFlowsFromUsedInOperatingActivities.cashFlowsFromUsedInOperatingActivities',
                          '',
                        ))?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumSignificantDigits: 2,
                        })}
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                          paddingTop: '33px',
                        }}
                      >
                        {' '}
                        {convertValue(_get(
                          companyData,
                          'financial.cashFlowStatement[1].cashFlowsFromUsedInOperatingActivities.cashFlowsFromUsedInOperatingActivities',
                          '',
                        ))?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumSignificantDigits: 2,
                        })}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          paddingLeft: '35px',
                        }}
                      >
                        Cash from Financing
                      </td>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#EA3F3F',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        {convertValue(_get(
                          companyData,
                          'financial.cashFlowStatement[0].cashFlowsFromUsedInFinancingActivities.cashFlowsFromUsedInFinancingActivities',
                          '',
                        ))?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumSignificantDigits: 2,
                        })}
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        {' '}
                        {convertValue(_get(
                          companyData,
                          'financial.cashFlowStatement[1].cashFlowsFromUsedInFinancingActivities.cashFlowsFromUsedInFinancingActivities',
                          '',
                        ))?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumSignificantDigits: 2,
                        })}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          paddingLeft: '35px',
                          paddingBottom: '57px',
                        }}
                      >
                        Cash from Investing
                      </td>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#EA3F3F',
                          lineHeight: '25px',
                          fontWeight: '500',
                          paddingBottom: '57px',
                        }}
                      >
                        {' '}
                        {convertValue(_get(
                          companyData,
                          'financial.cashFlowStatement[0].cashFlowsFromUsedInInvestingActivities.cashFlowsFromUsedInInvestingActivities',
                          '',
                        ))?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumSignificantDigits: 2,
                        })}
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                          paddingBottom: '57px',
                        }}
                      >
                        {' '}
                        {convertValue(_get(
                          companyData,
                          'financial.cashFlowStatement[1].cashFlowsFromUsedInInvestingActivities.cashFlowsFromUsedInInvestingActivities',
                          '',
                        ))?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumSignificantDigits: 2,
                        })}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          paddingLeft: '35px',
                        }}
                      >
                        Working Capital Turnover Ratio
                      </td>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#EA3F3F',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        {_get(companyData, 'financial.ratioAnalysis[0]', {})
                          .workingCapitalTurnover?.toFixed(2)
                          ?.toLocaleString()}
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        {_get(companyData, 'financial.ratioAnalysis[1]', {})
                          .workingCapitalTurnover?.toFixed(2)
                          ?.toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          paddingLeft: '35px',
                        }}
                      >
                        Debtors Period
                      </td>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#EA3F3F',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        {_get(companyData, 'financial.ratioAnalysis[0]', {})
                          .daysOfSalesOutstanding?.toFixed(2)
                          ?.toLocaleString()}
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        {_get(companyData, 'financial.ratioAnalysis[1]', {})
                          .daysOfSalesOutstanding?.toFixed(2)
                          ?.toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          paddingLeft: '35px',
                        }}
                      >
                        Creditors Period
                      </td>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        {_get(companyData, 'financial.ratioAnalysis[0]', {})
                          .daysOfPayablesOutstanding?.toFixed(2)
                          ?.toLocaleString()}
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        {_get(companyData, 'financial.ratioAnalysis[1]', {})
                          .daysOfPayablesOutstanding?.toFixed(2)
                          ?.toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          paddingLeft: '35px',
                          paddingBottom: '57px',
                        }}
                      >
                        Inventory Period
                      </td>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                          paddingBottom: '57px',
                        }}
                      >
                        {_get(companyData, 'financial.ratioAnalysis[0]', {})
                          .daysOfInventoryOutstanding?.toFixed(2)
                          ?.toLocaleString()}
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                          paddingBottom: '57px',
                        }}
                      >
                        {_get(companyData, 'financial.ratioAnalysis[1]', {})
                          .daysOfInventoryOutstanding?.toFixed(2)
                          ?.toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          paddingLeft: '35px',
                        }}
                      >
                        Operating margin
                      </td>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        2,988.00
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        2,988.00
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          paddingLeft: '35px',
                          paddingBottom: '57px',
                        }}
                      >
                        Return on Total Assets
                      </td>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                          paddingBottom: '57px',
                        }}
                      >
                        2,988.00
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                          paddingBottom: '57px',
                        }}
                      >
                        2,988.00
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          paddingLeft: '35px',
                        }}
                      >
                        Interest Coverage
                      </td>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        {_get(companyData, 'financial.ratioAnalysis[0]', {})
                          .interestCoverage?.toFixed(2)
                          ?.toLocaleString()}
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        {_get(companyData, 'financial.ratioAnalysis[1]', {})
                          .interestCoverage?.toFixed(2)
                          ?.toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          paddingLeft: '35px',
                        }}
                      >
                        Current Ratio
                      </td>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        {_get(companyData, 'financial.ratioAnalysis[0]', {})
                          .currentRatio?.toFixed(2)
                          ?.toLocaleString()}
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        {_get(companyData, 'financial.ratioAnalysis[1]', {})
                          .currentRatio?.toFixed(2)
                          ?.toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          paddingLeft: '35px',
                        }}
                      >
                        Debt Equity
                      </td>
                      <td
                        style={{
                          fontSize: '20px',
                          color: '#EA3F3F',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        {_get(companyData, 'financial.ratioAnalysis[0]', {})
                          .debtEquity?.toFixed(2)
                          ?.toLocaleString()}
                      </td>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '25px',
                          fontWeight: '500',
                        }}
                      >
                        {_get(companyData, 'financial.ratioAnalysis[1]', {})
                          .debtEquity?.toFixed(2)
                          ?.toLocaleString()}
                      </td>
                    </tr>
                    {/* <tr>
                      <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', paddingLeft:'35px', paddingBottom:'54px'}}>Debt to Turnover</td>
                      <td style={{fontSize:'20px', color:'#EA3F3F', lineHeight:'25px', fontWeight:'500', paddingBottom:'54px'}}>80.98%</td>
                      <td style={{fontSize:'19px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingBottom:'54px'}}>80.98%</td>
                    </tr> */}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="8"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td
                  colSpan={4}
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Compliance Status
                </td>
              </tr>
              <tr>
                <td
                  width="30%"
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                    paddingTop: '31px',
                  }}
                >
                  GST Return Filing
                </td>
                <td
                  width="20%"
                  style={{
                    fontSize: '20px',
                    color: '#EA3F3F',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingTop: '31px',
                  }}
                >
                  {[].forEach((l, index2) => { })}
                  {_get(
                    companyData,
                    'GST[0].detail.summaryInformation.businessProfile.lastReturnFiledgstr1',
                    '',
                  ) != ''
                    ? moment(
                      _get(
                        companyData,
                        'GST[0].detail.summaryInformation.businessProfile.lastReturnFiledgstr1',
                        '',
                      ),
                      'MMyyyy',
                    ).format('MM-yyyy')
                    : ''}
                </td>
                <td
                  width="30%"
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingTop: '31px',
                  }}
                >
                  NCLT
                </td>
                <td
                  width="20%"
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingTop: '31px',
                  }}
                >
                  {' '}
                  {companyData?.compliance.other?.nclt ? 'YES' : 'NO'}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                  }}
                >
                  EPF Status
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#EA3F3F',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {' '}
                  {companyData?.compliance.other?.epfStatus ? 'YES' : 'NO'}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                  }}
                >
                  BIFR
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {' '}
                  {companyData?.compliance.other?.bifr ? 'YES' : 'NO'}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                  }}
                >
                  Litigation Status
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {' '}
                  {camData?.company?.litigationStatus}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                  }}
                >
                  Defaulter Company
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                  }}
                >
                  {companyData?.compliance.other?.defaulterCompany
                    ? 'YES'
                    : 'NO'}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingLeft: '35px',
                    paddingBottom: '69px',
                  }}
                >
                  Last Balance Sheet Date
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingBottom: '69px',
                  }}
                >
                  {' '}
                  {companyData?.profile?.companyDetail?.lastBalanceSheet}
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    lineHeight: '24px',
                    paddingBottom: '69px',
                  }}
                >
                  Active Directors
                </td>
                <td
                  style={{
                    fontSize: '20px',
                    color: '#111111',
                    fontWeight: '500',
                    lineHeight: '25px',
                    paddingBottom: '69px',
                  }}
                >
                  {' '}
                  {companyData?.profile?.directorDetail?.length ?? 0}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="8"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr>
                <td
                  colSpan={2}
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >Strength &amp; Weakness
                </td>
              </tr>
              <tr>
                <td
                  valign="top"
                  width="50%"
                  style={{
                    fontSize: '22px',
                    color: '#43C34D',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                    borderRight: '2px solid #CAD6E6',
                    padding: '43px 35px 60px',
                  }}
                >
                  <span
                    style={{
                      background: '#CEEFD1',
                      width: '64px',
                      height: '64px',
                      lineHeight: '22px',
                      textAlign: 'center',
                      borderRadius: '8px',
                      marginRight: '15px',
                      padding: '21px 17px',
                      display: 'inline-block',
                    }}
                  >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAXCAYAAAD3CERpAAAABHNCSVQICAgIfAhkiAAAAX5JREFUSEu11bFKw0AYB/D/kVYXMYNz091Ni+AoWKEoFEf3voSTL+Hk0KWT5AG0nWo7OfgMAWNwsIKiKG0tPb8jjU3aSxpzl0AhvVz48b/77gtD3pcNA6bVBJ9eo+a1BcdyNQW4afXB2B44N4DpiYDzQ/2EfXBUKNj6LBwn+DgftIsCRgQCuyFwSPdvMAr7+tF40CPwEEeOqxdNAeotpJSgPrR7QHvoyPbwb0nDp0R9ea8qRZQHPUnRSEH1pA8Evv4PjKK3pTs6xPeoueepGkZGcI62yzcAr9LAD/0uV8ICHLyITrOzcA5jlzS6px3LpoFT6hzF2YPvRFgR9JN2SmfgrEX3ASrG5bC9vQbzs0fzMyUM0vrVmwbWBEYLKQn+2LiA+UUJuVLCaNLgXzz8TlO2shSN7CQsNwc5HH5XfC08jKl51x031fFamCTvSPHwkErvCaNJFfXnTGByR1qGtYCr2+Ac5pTwUTWhvJBkG+TDDYwnDZUljXakLJWg+M4vlf/IL1ywetEAAAAASUVORK5CYII=" alt="Check Green" />
                  </span>
                  Strength
                  <ul
                    style={{
                      fontSize: '19px',
                      color: '#111111',
                      lineHeight: '23px',
                      fontWeight: 'normal',
                      listStyle: 'none',
                      paddingLeft: '0',
                      paddingTop: '28px',
                    }}
                  >
                    {camData &&
                      camData?.company?.recommendation?.strengths?.map(
                        (comment, index) => (
                          <li style={{ padding: '15px 0' }}>{comment}</li>
                        ),
                      )}
                  </ul>
                </td>
                <td
                  valign="top"
                  width="50%"
                  style={{
                    fontSize: '22px',
                    color: '#EA3F3F',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                    borderRight: '2px solid #CAD6E6',
                    padding: '43px 35px 60px',
                  }}
                >
                  <span
                    style={{
                      background: '#FACFCF',
                      width: '64px',
                      height: '64px',
                      lineHeight: '22px',
                      textAlign: 'center',
                      borderRadius: '8px',
                      marginRight: '15px',
                      padding: '21px 17px',
                      display: 'inline-block',
                    }}
                  >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAAPFBMVEUAAADyXV3zXFzxW1vzXV3zXFzzXl7zXV3zXl7zXl70Xl7sSUnsSkrsSUnrSEjsSEjsSUnqPz/qQUH///+61DrHAAAAEXRSTlMAiZCRkpOTlJjMzPLy8/T09AY8JhMAAAABYktHRBMMu1yWAAAAX0lEQVQY02WQgQ6AIAhErcwyM4P//9iuqcAGG+725u6AEFIMWjGhy7sLWO924CFBQy+FnrMDqO0XEwmYyAC4V6oX2qTCkslkojITZwvcH+fTU3QuiRWkcwzk9/K7u/t8WOgFmuDZzZMAAAAASUVORK5CYII=" width="27" alt="Cross Red" />
                  </span>
                  Weakness
                  <ul
                    style={{
                      fontSize: '19px',
                      color: '#111111',
                      lineHeight: '23px',
                      fontWeight: 'normal',
                      listStyle: 'none',
                      paddingLeft: '0',
                      paddingTop: '28px',
                    }}
                  >
                    {camData &&
                      camData?.company?.recommendation?.weakness?.map(
                        (comment, index) => (
                          <li style={{ padding: '15px 0' }}>{comment}</li>
                        ),
                      )}
                  </ul>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#ffffff"
              cellPadding="0"
              cellSpacing="0"
              border="0"
              style={{
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                marginBottom: '26px',
              }}
            >
              <tr style={{ borderBottom: '2px solid #CAD6E6' }}>
                <td width="40%" height="78" style={{
                  padding: '0 35px',
                  fontSize: '22px',
                  color: '#3687E8',
                  lineHeight: '27px',
                  fontWeight: 'bold',
                }}
                >Sanction Terms
                </td>
                <td
                  height="78"
                  style={{
                    fontSize: '18px',
                    color: '#2837566A',
                    lineHeight: '23px',
                    fontWeight: 'bold',
                  }}
                >
                  Total Limit:
                  <span
                    style={{
                      fontSize: '19px',
                      color: '#111111',
                      lineHeight: '24px',
                      fontWeight: '500',
                      display: 'inline-block',
                      marginLeft: '15px',
                    }}
                  >
                    {' '}
                    {addPrefixOrSuffix(convertValue(camData?.company?.creditLimit?.totalLimit)?.toLocaleString('en-In'), 'Cr', '')}
                  </span>
                </td>
                <td
                  height="78"
                  style={{
                    fontSize: '18px',
                    color: '#2837566A',
                    lineHeight: '23px',
                    fontWeight: 'bold',
                  }}
                >
                  Utilised Limit:
                  <span
                    style={{
                      fontSize: '19px',
                      color: '#111111',
                      lineHeight: '24px',
                      fontWeight: '500',
                      display: 'inline-block',
                      marginLeft: '15px',
                    }}
                  >
                    {' '}
                    {camData?.company?.creditLimit?.utilizedLimit?.toLocaleString('en-In')}
                  </span>
                </td>
                <td
                  height="78"
                  style={{
                    fontSize: '18px',
                    color: '#2837566A',
                    lineHeight: '23px',
                    fontWeight: 'bold',
                  }}
                >
                  Available Limit:
                  <span
                    style={{
                      fontSize: '19px',
                      color: '#111111',
                      lineHeight: '24px',
                      fontWeight: '500',
                      display: 'inline-block',
                      marginLeft: '15px',
                    }}
                  >
                    {' '}
                    {camData?.company?.creditLimit?.availableLimit?.toLocaleString('en-In')}
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan={4} valign="top">
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr bgColor="#FAFAFB" style={{ height: '67px' }}>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          textTransform: 'uppercase',
                        }}
                      ></td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          textTransform: 'uppercase',
                          textAlign: 'center',
                        }}
                      >
                        PREVIOUS LIMIT
                      </td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          textTransform: 'uppercase',
                          textAlign: 'center',
                        }}
                      >
                        APPLIED VALUE
                      </td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          textTransform: 'uppercase',
                          textAlign: 'center',
                        }}
                      >
                        DERIVED VALUE
                      </td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          textTransform: 'uppercase',
                          textAlign: 'center',
                        }}
                      >
                        SUGGESTED VALUE
                      </td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          textTransform: 'uppercase',
                          textAlign: 'center',
                        }}
                      >
                        REVISED
                      </td>
                      <td
                        style={{
                          fontSize: '15px',
                          color: '#8492A6',
                          lineHeight: '18px',
                          textTransform: 'uppercase',
                          textAlign: 'center',
                        }}
                      >
                        APPROVED VALUE
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          padding: '36px 10px 24px 35px',
                        }}
                      >
                        Limit Value
                      </td>
                      <td
                        align="center"
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          padding: '36px 10px 24px',
                        }}
                      >
                        {camData?.company?.creditLimit?.availableLimit?.toLocaleString('en-In')}
                      </td>
                      <td
                        align="center"
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          padding: '36px 10px 24px',
                        }}
                      >
                        -
                      </td>
                      <td
                        align="center"
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          padding: '36px 10px 24px',
                        }}
                      >
                        {camData?.company?.creditLimit?.creditRating
                          ?.filter((rating) => {
                            return camData?._id === rating.order
                          })
                          .map((val, index) => {
                            <td key={index}>{(val?.derived?.value)?.toLocaleString('en-In')}</td>
                          })}
                      </td>
                      <td
                        align="center"
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          padding: '36px 10px 24px',
                        }}
                      >
                        -
                      </td>
                      <td
                        align="center"
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          padding: '36px 10px 24px',
                        }}
                      >
                        {camData?.company?.creditLimit?.creditRating
                          ?.filter((rating) => {
                            return camData?._id === rating.order
                          })
                          .map((val, index) => {
                            ; <td key={index}>
                              {checkNan(
                                convertValue(val?.suggested?.value)?.toLocaleString('en-In'),
                              )}{' '}
                              Cr
                            </td>
                          })}
                      </td>
                      <td
                        align="center"
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          padding: '36px 10px 24px',
                        }}
                      >
                        -
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          padding: '24px 10px 54px 35px',
                        }}
                      >
                        Order Value
                      </td>
                      <td
                        align="center"
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          padding: '24px 10px 54px',
                        }}
                      >
                        -
                      </td>
                      <td
                        align="center"
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          padding: '24px 10px 54px',
                        }}
                      >
                        {camData?.orderValue?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td
                        align="center"
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          padding: '24px 10px 54px',
                        }}
                      >
                        -
                      </td>
                      <td
                        align="center"
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          padding: '24px 10px 54px',
                        }}
                      >
                        {checkNan(
                          convertValue(camData?.suggestedOrderValue)?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                          }),
                        )}{' '}
                        Cr
                      </td>
                      <td
                        align="center"
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          padding: '24px 10px 54px',
                        }}
                      >
                        -
                      </td>
                      <td
                        align="center"
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '23px',
                          padding: '24px 10px 54px',
                        }}
                      >
                        {camData?.cam?.approvedOrderValue?.toLocaleString('en-In')}
                      </td>
                    </tr>
                    <tr bgColor="#FAFAFB" style={{ height: '67px' }}>
                      <td
                        colSpan={7}
                        style={{
                          fontSize: '22px',
                          color: '#111111',
                          fontWeight: 'bold',
                          lineHeight: '27px',
                          textTransform: 'capitalize',
                          paddingLeft: '35px',
                        }}
                      >
                        Sanction Conditions
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={7}>
                        <ul
                          style={{
                            fontSize: '19px',
                            color: '#111111',
                            lineHeight: '23px',
                            fontWeight: 'normal',
                            listStyle: 'none',
                            padding: '11px 35px 48px',
                            paddingTop: '',
                          }}
                        >
                          {camData &&
                            camData?.company?.recommendation?.sanctionTerms?.map(
                              (condition, index) => (
                                <li style={{ padding: '15px 0' }}>
                                  {condition}
                                </li>
                              ),
                            )}
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      {/* <td
                        colSpan={7}
                        style={{
                          fontSize: '22px',
                          color: '#111111',
                          fontWeight: 'bold',
                          lineHeight: '27px',
                          paddingLeft: '35px',
                          paddingBottom: '50px',
                        }}
                      >
                        Sanction Conditions
                        <br />
                        <br />
                        <span
                          style={{
                            fontSize: '20px',
                            fontWeight: 'normal',
                            lineHeight: '30px',
                            letterSpacing: '0.19px',
                          }}
                        >
                          Signed provisional / commercial invoice in 1 original
                          and 3 copies, based on the dry weight and the
                          manganese content shown on the certificate of typical
                          analysis.
                        </span>
                      </td> */}
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    )
  }

  const GstDataHandler = (data) => {
    console.log(data, 'gst3234')
    setGstData(data)
  }
  console.log(gstData, 'gstDAta')

  const handleGSTDownload = () => {
    // console.log(gstData?.detail?.other?.pdfLink ,'efgilegleghlui')
    if (
      !gstData?.detail?.other?.pdfLink ||
      gstData?.detail?.other?.pdfLink === ''
    ) {
      let toastMessage = 'GST report not Available'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    } else {
      window.open(gstData?.detail?.other?.pdfLink, '_blank')
    }
  }

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
    class: 'Civil',
    risk: '',
  })
  // console.log(filterType, 'filtertype')
  useEffect(() => {
    const filter = {
      caseStatus: 'Disposed',
      memberType: 'Petitioner',
    }
    const users = companyData?.compliance?.districtCourt?.cases?.filter(
      (item) => {
        for (let key in filter) {
          if (item[key] === undefined || item[key] != filter[key]) return false
        }
        return true
      },
    )
    console.log(users, 'data1110filter')
  }, [companyData])

  // console.log(filterType, 'filterType')
  // console.log(district,'filtered')
  console.log(filterType.class,"filterType.class")
  useEffect(() => {
    if (companyData) {
      filterLitigation()
    }
  }, [companyData, filterType,filterType.class])
  const changeClass=(val)=>{
   let filter={...filterType}
   filter.class=val
   setFilterType({...filter})
  }
  const filterLitigation = () => {
    let count = {
      pending: 0,
      disposed: 0,
      total: 0,
      high: 0,
      medium: 0,
      relevence: 0,
    }
    console.log(filterType,"filterType",companyData?.compliance?.highCourt)
    //getCount
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
   
    //filter by
    let supremeCourt = []
    let highCourt = []
    let tribunalCourts = []
    let districtCourt = []

    /////***********filterby */
        const filter =(val)=>{
         
        if(filterType.filterBy.pending){
             
          if(val.caseStatus=="Pending"){
            console.log("thisisis")
            return val
          }
          }
          if(filterType.filterBy.disposed){
          if(val.caseStatus=="Disposed"){
            return val
          }
          }
          if(filterType.filterBy.total){

            return val

          }
          if(filterType.filterBy.pending && filterType.filterBy.disposed){
          if(val.caseStatus=="Pending" || val.caseStatus=="Disposed"){
            return val
          }
          }
         
          if(filterType.filterBy.pending && filterType.filterBy.total){

            return val

          }
          if(filterType.filterBy.disposed && filterType.filterBy.total){

            return val

          }
          if(filterType.filterBy.disposed && filterType.filterBy.total && filterType.filterBy.pending){

            return val

          }
    }
    
      supremeCourt = companyData?.compliance?.supremeCourt?.cases?.filter(
      (val) => {
          return filter(val)
      },
      )
      highCourt = companyData?.compliance?.highCourt?.cases?.filter((val) => {

        return filter(val)
      })
      
      tribunalCourts = companyData?.compliance?.tribunalCourts?.cases?.filter(
      (val) => {
          return filter(val)
      },
      )
      districtCourt = companyData?.compliance?.districtCourt?.cases?.filter(
      (val) => {
        return filter(val)
      },
      )
//civil Crimnal
console.log(highCourt,"highCourt111")
    const civilfilter =(val)=>{
         console.log(val.civilCriminal,"val.civilCriminal")
        if(filterType.class=="Criminal"){
             
          if(val.civilCriminal=="Criminal"){
            console.log("1111111111")
            return val
          }
          }
          if(filterType.class=="Civil"){
          if(val.civilCriminal=="Civil"){
            return val
          }
          }
        
    }
    
  supremeCourt = 
   supremeCourt.length<=0? companyData?.compliance?.supremeCourt?.cases?.filter(
      (val) => {
          return civilfilter(val)
      },
      ): supremeCourt?.filter(
      (val) => {
          return civilfilter(val)
      },
      )
  highCourt =  highCourt.length<=0? companyData?.compliance?.highCourt?.cases?.filter(
      (val) => {
          return civilfilter(val)
      },
      ): highCourt?.filter(
      (val) => {
        console.log(val,"secodnoneene")
          return civilfilter(val)
      },
      )
     
  tribunalCourts =  tribunalCourts.length<=0? companyData?.compliance?.tribunalCourts?.cases?.filter(
      (val) => {
          return civilfilter(val)
      },
      ): tribunalCourts?.filter(
      (val) => {
          return civilfilter(val)
      },
      )
  districtCourt =   tribunalCourts.length<=0? companyData?.compliance?.tribunalCourts?.cases?.filter(
      (val) => {
          return civilfilter(val)
      },
      ): districtCourt?.filter(
      (val) => {
          return civilfilter(val)
      },
      )
      console.log(highCourt,"highCourt222")
    //    /////***********select a party */
    // //civil
    // // districtCourt = companyData?.compliance?.districtCourt?.cases?.filter(
    // //   (val) => {
    // //     if (val.civilCriminal == filterType.class) {
    // //       return val
    // //     }
    // //   },
    // // )
    // supremeCourt = companyData?.compliance?.supremeCourt?.cases?.filter(
    //   (val) => {
    //     if (val.civilCriminal == filterType.class) {
    //       return val
    //     }
    //   },
    // )
    // highCourt = companyData?.compliance?.highCourt?.cases?.filter((val) => {
    //   if (val.civilCriminal == filterType.class) {
    //     return val
    //   }
    // })
   
    // tribunalCourts = companyData?.compliance?.tribunalCourts?.cases?.filter(
    //   (val) => {
    //     if (val.civilCriminal == filterType.class) {
    //       return val
    //     }
    //   },
    // )
    // //risk:
    // // districtCourt = companyData?.compliance?.districtCourt?.cases?.filter(
    // //   (val) => {
    // //     if (
    // //       (val.severity_ == filterType.risk) == 'high'
    // //         ? 'High' || 'high'
    // //         : filterType.risk
    // //     ) {
    // //       return val
    // //     }
    // //   },
    // // )
    // supremeCourt = companyData?.compliance?.supremeCourt?.cases?.filter(
    //   (val) => {
    //     if (
    //       (val.severity_ == filterType.risk) == 'high'
    //         ? 'High' || 'high'
    //         : filterType.risk
    //     ) {
    //       return val
    //     }
    //   },
    // )
    // highCourt = companyData?.compliance?.highCourt?.cases?.filter((val) => {
    //   if (
    //     (val.severity_ == filterType.risk) == 'high'
    //       ? 'High' || 'high'
    //       : filterType.risk
    //   ) {
    //     return val
    //   }
    // })
    // tribunalCourts = companyData?.compliance?.tribunalCourts?.cases?.filter(
    //   (val) => {
    //     if (
    //       (val.severity_ == filterType.risk) == 'high'
    //         ? 'High' || 'high'
    //         : filterType.risk
    //     ) {
    //       return val
    //     }
    //   },
    // )
    // //filterBY
    // // districtCourt = companyData?.compliance?.districtCourt?.cases?.filter(
    // //   (val) => {
    // //     if (
    // //       val.caseStatus == filterType.pending
    // //         ? 'Pending'
    // //         : null || val.caseStatus == filterType.disposed
    // //         ? 'Disposed'
    // //         : null
    // //     ) {
    // //       return val
    // //     } else {
    // //       return val
    // //     }
    // //   },
    // // )

    setSupreme([...supremeCourt])
    setTribunal([...tribunalCourts])
    setHigh([...highCourt])
    // setDistrict(districtCourt)

    setTotalCourt(count)
  }
  console.log(High,"highCourtDisplay")
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
  const [top5Customers, setTop5Customers1] = useState({
    labels: [],
    datasets: []
  })
  const [totalCustomer, setTotalCustomer1] = useState(0)
  const [totalSupplier, setTotalSupplier1] = useState(0)
  const [top5Suppliers, setTop5Suppliers1] = useState({
    labels: [],
    datasets: []
  })
  const [top3Share, setTop3Share1] = useState({
    labels: [],
    datasets: []
  })
  const [top3Open, setTop3Open1] = useState({
    labels: [],
    datasets: []
  })
  const exportPDF = async () => {
    console.log(orderList, 'orderList')
    const doc = new jsPDF('p', 'pt', [1500, 1500])

    const trendChartRevenue = document.getElementById('trendChartRevenue');
    const trendChartRevenueImg = trendChartRevenue?.toDataURL('image/png', 1.0)
    const trendChartPurchases = document.getElementById('trendChartPurchases');
    const trendChartPurchasesImg = trendChartPurchases?.toDataURL('image/png', 1.0)
    const skewnessChartPurchases = document.getElementById('skewnessChartPurchases');
    const skewnessChartPurchasesImg = skewnessChartPurchases?.toDataURL('image/png', 1.0)
    const skewnessChartRevenue = document.getElementById('skewnessChartRevenue');
    const skewnessChartRevenueImg = skewnessChartRevenue?.toDataURL('image/png', 1.0)
    const shareHoldingChart = document.getElementById('shareHoldingChart');
    const shareHoldingChartImg = shareHoldingChart?.toDataURL('image/png', 1.0)
    const openBankChargeChart = document.getElementById('openBankChargeChart');
    const openBankChargeChartImg = openBankChargeChart?.toDataURL('image/png', 1.0)



    doc.html(
      ReactDOMServer.renderToString(
        toPrintPdf(orderList,
          gstData?.detail?.salesDetailAnnual?.saleSummary,
          trendChartRevenueImg,
          trendChartPurchasesImg,
          skewnessChartRevenueImg,
          skewnessChartPurchasesImg,
          shareHoldingChartImg,
          openBankChargeChartImg),
      ),
      {
        callback: function (doc) {
          doc.save('CAM.pdf')
        },
        // margin:margins,
        autoPaging: 'text',
      },
    )
  }
  useEffect(() => {
    if (keyAddData.length === 0 || keyAddData === null) {
      setKeyAddData([
        ...keyAddData,
        {
          addressType: 'Registered Office',
          completeAddress:
            companyData?.profile?.companyDetail?.registeredAddress,
          contact: {
            callingCode: '+91',
            number: companyData?.profile?.companyDetail?.contactNumber,
          },
        },
      ])
    }
  }, [companyData])
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
                onClick={() => Router.push('/credit-queue')}
              />
              <h1 className={`${styles.title} heading`}>
                {orderList?.company?.companyName
                  ? orderList?.company?.companyName
                  : ''}
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
                    // style={{ cursor: 'pointer' }}
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
                      // className="collapse"
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
                                            {alertObj[alert.alert] ??
                                              alert.alert}
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
                                            {alertObj[alert.alert] ??
                                              alert.alert}
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
                                            {alertObj[alert.alert] ??
                                              alert.alert}
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
                                            {alertObj[alert.alert] ??
                                              alert.alert}
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
                          className={`${styles.form_control} input form-control`}
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
                            className={`${styles.form_control} input form-control`}
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
                              <p className={`mb-3 text`}>Filter by</p>
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
                              <p className={`mb-3 text`}>Select a Party</p>
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
                              <p className={`mb-3 text`}>Classification</p>
                              <div
                                className={` d-flex align-items-center justify-content-start`}
                              >
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadio"
                                    id="flexRadioDefault3"
                                   checked={filterType.class=="Civil"}
                                    onClick={() => {
                                     changeClass("Civil")
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
                                    checked={filterType.class=="Criminal"}
                                    onClick={() => {
                                      changeClass("Criminal")
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
                      shipment={shipment}
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
                    suggestedCredit={suggestedCredit}
                    setGroupExposureData={setGroupExposureData}
                    setSanctionComment={setSanctionComment}
                  />
                  <CommonSave onSave={onCreditSave} />
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
                    orderDetails={orderList}
                    GstData={gstData}
                    setTotalCustomer1={setTotalCustomer1}
                    setTotalSupplier1={setTotalSupplier1}
                    setTop5Suppliers1={setTop5Suppliers1}
                    setTop3Share1={setTop3Share1}
                    setTop3Open1={setTop3Open1}
                    setTop5Customers1={setTop5Customers1}
                  />
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
          isPrevious={true}
          leftButtonName={`Previous`}
          isApprove={true}
          rightButtonName={`Next`}
          handleApprove={onNext}
          handleUpdate={onPreviousClick}
          handleReject={() => {
            console.log('download pdf')
          }}
        />
      ) : null}
      {selectedTab == 'GST' ? (
        <DownloadBar
          handleReject={handleGSTDownload}
          downLoadButtonName={`GST Report`}
          isPrevious={true}
          isApprove={true}
          handleUpdate={onBack}
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
          handleUpdate={handleCamReject}
          handleReject={exportPDF}
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
        <span className='accordion_Text'>Last Modified:</span>
        {moment(companyData?.updatedAt).format(' D MMM , h:mm a')}
      </div>
    </>
  )
}

const ligitations = (Supreme, District, High, Tribunal, companyData) => {
  console.log(High, 'High')

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
  console.log(balance, complienceFilter, 'oi')
  let length =
    complienceFilter == 'Banking Defaults' ? balance.length : sat.length
  if (complienceFilter == 'All') {
    complienceFilter == sat.length
  }
  const addSpace = (val, remove) => {

    let result = val
    if (remove) {
      result = val.replace('is', '');


    }
    result = result.replace(/[A-Z]/g, ' $&').trim();
    if (remove) {
      let caps = ""
      let myArray = result.split(" ");
      if (myArray.length > 1) {


        console.log(myArray, "myArray")
        const getText = (arr) => {
          let text = ''
          arr.forEach((val, index) => {
            if (index > 0) {
              text = `${text} ${val}`
            }
          })
          console.log(text, "etxtxttx")
          return text
        }
        if (myArray[0] == "Gst" || myArray[0] == "Epf" || myArray[0] == "Tan") {

          caps = myArray[0].toUpperCase()
          result = `${caps} ${getText(myArray)}`
        }
      }

    }
    console.log(result, "caps")
    if (result == "Ibbi") {
      result = "IBBI"
    }
    return result
  }
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
          <td className={`${styles.firstCell} text-nowrap`} rowSpan={length + 3}>
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
            { console.log(alert.source, "alert.value") }
            return (
              <tr key={index}>
                <td className='text-capitalize'> {addSpace(alert.alert, true)}</td>
                <td className='text-capitalize'> {addSpace(alert.severity)}</td>
                <td className='text-capitalize'>{alert.source.toUpperCase()}</td>
                <td className='text-capitalize'> {alert.idType == "ids" ? "IDS" : addSpace(alert.idType)}</td>
                <td className='text-capitalize'> {alert?.value?.length > 1 ?
                  <>
                    {alert.value.map((val, index) => {
                      return (<>{val}{index !== alert.value.length - 1 ? ", " : ""}</>)
                    })}
                  </>
                  :
                  <>{alert.idType == "dateOfIssuance" ? moment(alert.value).format("DD-MM-YYYY") : alert.value}</>
                }</td>
              </tr>
            )
          })
          : balance.length > 0 &&
          balance?.map((alert, index) => {
            return (
              <tr key={index}>
                <td className='text-capitalize'> {addSpace(alert.alert, true)}</td>
                <td className='text-capitalize'> {addSpace(alert.severity)}</td>
                <td className='text-capitalize'>{alert.source.toUpperCase()}</td>
                <td className='text-capitalize'> {alert.idType == "ids" ? "IDS" : addSpace(alert.idType)}</td>
                <td className='text-capitalize'> {alert?.value?.length > 1 ?
                  <>
                    {alert.value.map((val, index) => {
                      return (<>{val}{index !== alert.value.length - 1 ? ", " : ""}</>)
                    })}
                  </>
                  :
                  <>{alert.idType == "dateOfIssuance" ? moment(alert.value).format("DD-MM-YYYY") : alert.value}</>
                }</td>
              </tr>
            )
          })}
        {complienceFilter == 'All' ? (
          <>
            {sat.length &&
              sat?.map((alert, index) => {
                return (
                  <tr key={index}>
                    <td className='text-capitalize'> {addSpace(alert.alert, true)}</td>
                    <td className='text-capitalize'> {addSpace(alert.severity)}</td>
                    <td className='text-capitalize'>{alert.source.toUpperCase()}</td>
                    <td className='text-capitalize'> {alert.idType == "ids" ? "IDS" : addSpace(alert.idType)}</td>
                    <td className='text-capitalize'> {alert?.value?.length > 1 ?
                      <>
                        {alert.value.map((val, index) => {
                          return (<>{val}{index !== alert.value.length - 1 ? ", " : ""}</>)
                        })}
                      </>
                      :
                      <>{alert.idType == "dateOfIssuance" ? moment(alert.value).format("DD-MM-YYYY") : alert.value}</>
                    }</td>
                  </tr>
                )
              })}
            {balance.length > 0 &&
              balance?.map((alert, index) => {
                return (
                  <tr key={index}>
                    <td className='text-capitalize'> {addSpace(alert.alert, true)}</td>
                    <td className='text-capitalize'> {addSpace(alert.severity)}</td>
                    <td className='text-capitalize'>{alert.source.toUpperCase()}</td>
                    <td className='text-capitalize'> {alert.idType == "ids" ? "IDS" : addSpace(alert.idType)}</td>
                    <td className='text-capitalize'> {alert?.value?.length > 1 ?
                      <>
                        {alert.value.map((val, index) => {
                          return (<>{val}{index !== alert.value.length - 1 ? ", " : ""}</>)
                        })}
                      </>
                      :
                      <>{alert.idType == "dateOfIssuance" ? moment(alert.value).format("DD-MM-YYYY") : alert.value}</>
                    }</td>
                  </tr>
                )
              })}
          </>
        ) : null}
      </tbody>
    </table>
  )
}
