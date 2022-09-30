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
import router from 'next/router'

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
  convertValue,
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
    console.log(latest, previous, last, 'latest, previous, last')
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

    dispatch(
      setDynamicOrder(
        orderList?.company?.customerId || orderList?.applicationId,
      ),
    )
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
  console.log(shipment, 'shipmentshipment')
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
  console.log(shipment, 'saveShipmentData')
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

  const [debtData, setDebtData] = useState([])
  useEffect(() => {
    if (orderList?.company?.debtProfile?.length > 0) {
      let temp = []
      orderList?.company?.debtProfile.forEach((val, index) => {
        temp.push({
          bankName: val?.bankName,
          conduct: val?.conduct,
          limit: val?.limit,
          limitType: val?.limitType,
          primaryBank: val?.primaryBank,
        })
      })
      setDebtData([...temp])
    }
  }, [orderList?.company?.debtProfile])
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
        addnew: false,
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
      suggestedCreditLimit: suggestedValue
        ? suggestedValue / 10000000
        : suggestedValue,
      suggestedOrderValue: orderList?.suggestedOrderValue
        ? orderList?.suggestedOrderValue / 10000000
        : orderList?.suggestedOrderValue,
    })

    setApprovedCredit({
      approvedOrderValue: orderList?.approvedOrderValue
        ? orderList?.approvedOrderValue / 10000000
        : orderList?.approvedOrderValue,
      approvedCreditValue: approvedCreditLimit
        ? approvedCreditLimit / 10000000
        : approvedCreditLimit,
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
    if (
      product.dailyConsumptionOfCommodity == '' ||
      product.dailyConsumptionOfCommodity == undefined
    ) {
      let toastMessage = 'Please add  Daily Consumtion Of Commodity'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      product.stockCoverageOfCommodity == '' ||
      product.stockCoverageOfCommodity == undefined
    ) {
      let toastMessage = 'Please add  stock Coverage Of Commodity'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (
      product.existingProcurementOfCommodity == '' ||
      product.existingProcurementOfCommodity == undefined
    ) {
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

      console.log(obj, 'credit obj')
      dispatch(UpdateCredit({ ...obj }))
    }
  }

  const filteredCreditRating =
    orderList?.company?.creditLimit?.creditRating?.filter((rating) => {
      return orderList?._id === rating.order
    })

  console.log(filteredCreditRating, 'THIS IS FILTERED CREDIT RATING')

  let approvedCreditLimit =
    filteredCreditRating && filteredCreditRating.length > 0
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
        router.push(`/termsheet/${orderList._id}`)
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
    console.log(
      orderList?.company?.debtProfile,
      'orderList?.company?.debtProfile',
    )
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
  const toPrintPdf = (
    camData,
    RevenueDetails,
    trendChartRevenueImg,
    trendChartPurchasesImg,
    skewnessChartRevenueImg,
    skewnessChartPurchasesImg,
    shareHoldingChartImg,
    openBankChargeChartImg,

  ) => {
    console.log(_get, 'get')
    function calcPc(n1, n2) {
      if (n1 === 0) {
        return 0
      }
      return ((n2 - n1) / n1) * 100
    }
    let backgroundColor = ['#4CAF50', '#FF9D00', '#2884DE']
    let neddle1="data:image/png;base64,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"
    let neddle2="data:image/png;base64,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"
    let neddle3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAC4CAYAAAB3nacvAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAAB3RJTUUH5gkeBzo2XkNNhwAAAAFvck5UAc+id5oAABrhSURBVHja7Z15eJRFnse/9b59d+e+CSEgBFDESA6SQFDzIIfIigriPV4QBI3O7owjzl4861yOs8/u6KyOqKPjeKMz7jqjgDh4JEASEhUUVG4CIXcndPp+37f2D0joftN30nk7nfr891bVW11V+aau91f1AxgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBiBduvfeBCgCc0uVgMHzBV1Vee3bqJZc8dfncOXv3NTX1K10gBsMTvqHhE+cV865qtDqErTMuKT55cH/TIaULxWAMwANAY+Ou/nmVC+sEt/ODGbMKcw/u/+JDpQvGYAAA8XxY99BPF57tM29zOhyNiXpa9fLLLzuULiBjfOO1OHruqV98bEpKvkdvNJSZ+8X22+5aX6x0ARnjG14e0Fxfu698wUIXx/HL+vp677t8TkXvN/ub6pUuKGN8wvsKbK6vrS1bUJWnVmmKz/aaryksmlt44OsvtgCgSheYMb7wu/+Zm6q/X6vXb03PyoLdZr9hxeq7Tv7gB/+Yq3SBGeMLEiiyuvrRJGhJrdPlvLSrvQ0cx7u1OsPt77y+eYvSBWeMDwJ+Qdq8+Yk+t8gv06i1pzOzckCppLZZLW+vvO3eZ5UuOGN8QEJJtK7m0UIJ5DNBEBK72s9AEATo9fqv9Cr3Fa+99tpZpSvBiF9C+gb/3NNPfEUlaZVKpXJnZOVApVbDbrcXWpzc6ZV3VpcpXQlG/MKHmrC5se5ocVllC8dxKwwGE3E4HHC7XBpJcN97eek8yzf7mvYoXRlG/BGyQAGguaH2y6K5leA4cpXBaITL6YTb7SYup3NJ4ZzysoNff/EG2FYUYwQJaQ4qf2fNQ4+9Sii9jVIJ3Z0dcNjtAACtTndGZzSWvfnSMy1KV4wRH0RiB0r7UrX3APiEEA5pGVnQGQwAAKfDkWM923dk5R3rblW6Yoz4IJIeFABw9w83JatFRx2ASyilMHd3wWY9Z05KCAe90bj53ddfWKd0BRljm4gFCgDVDz86iUpkN4AJANDb041+y4VdJ53e8C11JlW8995/9ypdUcbYZFhHPTb/9omT4LlrAVgAIDk1DQlJSYPxDrttpsR3n7r99jXlSleUMTYJaxXvi+Y9n7fNKZv/NQFZDYDT6fQgHAen49zCSZJEjdMt3FdYWo4D+5o/VbrCjLHFsAUKAF801H1fPLeyCwTXAoBWqwPheTjPr+4pKHE7XVexrShGuAxrDipnzYMbf0YI/nng2dpvgbm7yyuNRqvtUqm5ee++/jI7+8QIyoj0oAM0N9TuLCmrnAngUgDQaLRQazSw222DaURRNEgi1l9WUn70wL7m/Uo3ACO2Genz8FQL612U4rOBAL3BiPSMLBDuQmctioLKarG8uuqONX9QugEYsc2IDvEDrF+/MUXgUQeCiwfCXE4nOjvaQSXRK61Or/+eOpPL2FYUwxdRuVHk2Wd/ZZYkXAegcyBMo9UiMysLPOf9kw67fbrId51Zdfu6hUo3BiP2GNE5qCdfNNb2FJXN+5yA3A5ADQA8r4LOYITDZgWlFxbykiSpBLfrzsKSMtWB/V/sVLpRGLFDVIZ4T6offOx6Sug78PhnEAQBXe1tEAT3kPR6g/FTXrQs3rJli0vpxmEoT9QvDdv8u1++R4AfeoapVCpkZGVDpVYPSW+3Wa90Qd968w/WTle6cRjKE7Uh3pOmhtqGkrJKI4D5A2Ecx8FgMMHhcEASvRdOoigaBEFYX1RSfvzrfc37lG4khnKM2rWLE9J0G0HgdRqU4zlkZGVDq9UNSS8Koqqvz/LKylvX/EnpRmIoR9TnoJ5UV28yUK1zJ0DneoZTSs8bPtt8vqfV6k7qk5LnvvHCb9sVbCuGAoyqQAHgnprHMlTAboBO9QynlKK7qwMOm2+R8hq1w2g0rHjrj5u3K9RWDAUYlTmoJ1821NpKyys+pOBuBWAYCCeEQG8wQhQFuF1DF/BUlFRup/uOwqIK7YGvmz9WttkYo8Wo96ADrHvgsQqJox8D0MvjzD1dsFosft/VGwx7EnXsesjxgGICBYA1NY/dSEC3wMdira+3B5a+Pr/varQas47Tzn/rrRcOKlkHRnQZ9SHek+aG2oPFc+f3gZCl8jidTg9CLhg+yxFFUS9Qcf3s0orug/uaGpWsByN6KCpQAGhuqKsvLq/MBlAij9PqdOBV/OCxZjmUUiI4ncsuK6qYdvDr5r8oXRfGyKPoED/ATTfdxCfnTH0PFMt9xVv7Lejt6fb6fi9Hq9WdMqVo5766efMZpevDGDliwj/Sli1bRIdGuIWC7PUVbzQlIDU9E4T4/39yOh0T+7psx1betm6Z0vVhjBwxIVAA+NNvfmMFR5YD9JiveL3BgPTMbC/DZzmC4NbarX1/W3nbfU8rXR/GyBATQ7wn9z78kxmcxNURIM1XvNPpQFdHxxDDZzlsKyo+iDmBAkD1w49WUol8BEDnK97lcqGro22IkYkctVpjMZlMVa//8dkmpevEiAzFV/G+aKqvO1lcVnkcwA3w8U/E8zz0BgPsdhuoJPnNR5JErdvtWnN5EfNUMlaJSYECQHND7f7i8gVWAIt9xXMcD4PeCIfdDimASCmlxO1yXlNYVMY8lYxBYnKI92RtzaObAbLWX7woiuhqb4PbHdwAX6PTnU7SpZa98sp/nVa6XozQiJlVvD9y0/QbQPGBv3ie55GenQ2NRhM0L5fDkWvu7zxy013V1ypdL0ZoxHwPCgAbNmwyuXnHJwD8umaUpHOX6fr7NOpVaUKgN5qefff1FzYoXTdGYMaEQAFgw4ZHst08vxvAZH9pKKXo6WyH3R5cpACYp5IxQMwP8QM888yTbYTS6wD4NXEihCA1MxsGozGkPAc8ldx894ZSpevH8E3MruJ90dRQ11FafkUjBb3VX9kJAJ3eAFEQQlo4SaKocbtc980prWCeSmKQMSVQAGiq//xYcfmC4wCuh58pyoB1viRJcLmcQfOklDJPJTHKmJmDyllT8+hPCcjPg6ULZvgsR6vTtSbqUueyrajYYMz1oAM0N9R9Xlw+Pw8gRYHSyW98DoYoCAku0V4zu3je4YP7mr5Wup7jnTGzSPJFbqr+fgpsDZYuITEJKWnpIecruAW13XL29ZW3rXlO6TqOd8bsED/AgMtwev7S3EDYrVb0dHWENcHU6Q0HDSpXOduKUoYx3YMCF1yGgyLonFFvNCI1I7DhsxyH3XaxxcG1Mk8lyjBm56CefNn4+dnSsvkfU5DbAGgDpVWrNdBotbDbrSGv1ZmnEuUY80O8J2se+MkiwnF/w/n7SAPhdDrQ3dEe0BLKFwaD6cN333xxOYDwXmRERFwJFADW1my8G8AfQqmb2+VCZwiGz3KYp5LRIy6GeE8GXIYTgquCVp7nodcbgxo+yznnqYSuLyyuOHJgfxPzVBJF4k6gANDcUPtZcVnldACzg6XleA4GY3DDZzmUUs7ldq0sLC6fcHB/81+VrnO8MuZX8X6gOljvAfBJKIl5XoWMrByo1UGnrrJfobD1W6pvuPmu766//ofJSlc6Hom7Oagnni7DQ0kvSiK6O9rhcgb/fi9HpVY7tDrj8ndee27Ub97bumtXKkdVkwhHksERIyRilAiSAYCj6AVHrZColUq0l1PRlqvLyrpHu4yREtcCBQZdhu8BkBNKeipJ6Opoh9MZ/mllwhFq1Cc8vuWN5/89GnX54INDWnVqX6kkYQFHMIsC0wAUAEgNM6seAIcpcJiAfCNx+FzqTmxYtqwg/P/MKBP3AgWA+2o2zuGATwEkhJI+2I3PwRhJTyVbd+8tIqDXEZArAZTBx3WVI4QDIPUg9FMQ7v3FZUV7h5/l8BkXAgWAtQ8+dh0I/TNCXBhSAOauDtis1oh+T6PVduv02nlvvfL89+G+u23X3pmE4G4ANyPACYJoQgi+oxQvieDfuqZiznElygCMI4ECwNoHN24Awf+E806wy3QDwat4wWQ03vvmn54P6ghiE6VcRf3eGwklP8a5njJktGo19DotNGoVOI6DiuOgUqkAnPNJJUoSREmC2y3A5nTC6XKHkz0A0kiA35hbjry7evXq8DaNh8m4EigAVNc89nMK+tNw3uk1d6P/bKS2IgQGo+nVd9944U5fsbt27dL3c5pqSHgIBBcFzgkwGfRISUxAUoIJRp0WBp0OPB/eZowoSbDZHbA5nOi19MNs6Ue/1RbKl99vCaW/NCcZ3lw9a9aoOFobdwIFQKprNr5Bzw2fIROu4bMcvV53OMWkKnvxxRd7gHNW/B/tab4LoD8HMMHfeyqeR2ZqMjJTk5GckAC1Kjpb14IgwmzpR6e5Fx09ZrgF/x0lBdpA6b/srih5aRMhUf3kOx4FipqaGq2dGrcTgivCec9iOYu+nsh3aFRqtcNgMqxYW32/ReKkp+HnGDVHCDJSk5Gdlor05ERw3OhuV0sSRXdfH9q6etBh7oUk+e5bKaG7Aa5mSXlx1O6+GpcCBXy7DA8Fa78F5u6uiH5Tq9XhioVX4dLLLqW+bP5UKh752VmYmJUOTbgfDaKEw+XCidZ2tHZ2Q/BtsyAB9I8Sdf946bx5PSP9++NWoABw34aN0zgeuwBkhPOezWZFT1cnQEM3fZ4wMRfLVixHQmLikDi1SoX8nCzkZWVAFaUhfLgIoohT7Z043toOtyD4SnJMovSWpfNKG0byd8e1QAFgTc1Pygm4vyPM/UWHzYburo6A15IDAAhBeWUFyuZVDBmqCSHIy8rARRNzoD6/6o51XG4B3588hbbObl+LKjcIHllUVvwUIWRETsaOe4ECvl2Gh4LDbkdPZwck6nudoNXpsOz65Zg8ZcqQuKQEI2ZOnoREoyHYz8QkFqsN3x5vQa+l30cs/ZjjpJtH4pMqE+h51j70aA0oeSrc91xO57nLdGWWUAmJibjh5pVIS/c+rEcIwfT8iZiUnal0lYcNBXDs1BkcPX3G10iyHyK3dHFlUetwfoMJ1IPqmo2/psAj4b7nPn/js3h+EZGRmYHrb14Fk8nklU6v1WJ2wRQkmUK7mmes0Gvpx/7Dx+BwDtkabeEIt/Tq8qIDkeYdr+Z2EeHLZXgoqDUaZGRNAK9SYcLEXKy6/ZYh4sxISULZ7IvjTpwAkJxgQsVllyAzNVkelSdRqXZrfdOCSPNmPagMfy7DQyE5NRlVC6+CSu294JmYlYGZk/PCOk06FqEAvjt2Ei3tnfKofnBcVSQGKPHdYhHiz2V4IBISTahaVAWt1vtQacGkXEyekK10lUaVQydP43hrmzy4nZcwf+H8kiPh5MUE6od1Dz1SIFF+F4CgV5Lo9DpULaqCyWP4JgBmXpSPiZmh32gST5zu6MLBoyfkW1GHqKSuXDK/sCPUfNgc1A/PPfXkIRC6AkDAS51UKhUWXFnpJU4AmDFl0rgVJwDkZqZjen6ePLiAcO7tO3d+Ywo1HybQADz/1BO7KMgdCHAGfk7J5UiWLQ4mT8hGXlZYH6fikkk5mZiSO+QgQ6Fb63gm1DyYQIPwwtO//DMo/SdfcflT8jH5osleYRMy0lAwKVfpYscM0/ImICdddiKF0Du37266O5T3mUBD4PnfPfFbEPzeMywhIQFFpXO80iUnmHDJRflKFzfmmDV1MlISvUd1AvrU1l1N04K9ywQaIr1njjwIgr8C574Glc2fO2i1Dpwz+JhdMCXut5IigRCCS6dO8bJlpUACx9Ete/fuDWi2xQQaIp4uw6dOn4qU1BSv+EsuyocuBF9N4xWdVoNZUyd7B1JcbhbwcKD32L97mDz90quzp04r+FKlunDOYmJWBi6eMknpoo0JvjvegpNtXrtMfRwRZlxdXt7uKz3rQcNkxsyZD3mKU6tRs0VRGEzLy5WPNEmSpH7SX3om0DDYXt9cAuBez7CCSblQ8bFpZByL8DyHgvyJ3oGE3rGjrrnCV3om0HCQxH+DR5ulJJqQk56mdKnGHNlpKUhO8FrVE4lIm3ylZQINkW11jZcCZLlnmI8vJYwQuXjKJO8FEMGirfXNhfJ0TKChwpNH4LGoTE9OGrPW8LGAyaBHhvcXOMJJdKM8HRNoCHxc15xPKG71DJucO74slKLB5Bx5G9JV2+rrvc7HMIGGgMiJ1fC49z45wYSUhJDtHRh+SEowIiXR6z43FZFU93sGMIEGgVJKQMktnmH5OVlKFytuGNqWdDWldHAqxQQahO17muZ63pmkVqmQkZKkdLHihvTkRGi8TyBM3tbQXDnwwAQaBPncMys1mX1vH0EIIchK87Z2IhIdbHMm0ABsopSjxPuSsez0cC8zZgQjRy5QYNXbb7/NA0ygAZm/u2kWAQaXmlqNGsmJIV3SzAiDpAQj9N5nuTIS8y4qBJhAA0JBvG6/S01KZNY1USItyfsfn4BeCTCBBoY710gDsK2l6CEfmThyrnNgAvXDue0leAuUDe9RQ/7PTykqKaWECdQPW/d8mQ9g8AIlrUYNg047jBwZgdBpNfJ5aPq23c1TmUD9wBGhwPM5wcC+u0ebBKP3DZgcJ01nAvUL8RIo6z2jj0Gnk4WQAiZQP3CUeJ04HNp4jJFmSCcgUSZQ/1DvHlTPetBoM0SgHJnGBOoH6rFAAsBObI4COq2sjSkymUD947Xvwc4dRR+eG9LGJiZQ/3hteobrzY0RPip5G1Mm0EB49aA860GjDsdx3pZiBAlMoP4ZvE+R4zj2DX6U4L1d9eiZQP0zeC8olaLqjpLhgejd1g4mUP8MOgCiAESRiTTaSBKVu7PpZwL1j5eTeEEaVTfp4xJR1saUCTQAlHq5UGM9aPSRtzFhAg0AR7zc+DldrkhzYoSI0+X2DqDoZgL1h0QPez7aHE6lSxT32BwOr2dKcIQJ1A8EnEygjkizYoTIkE6AkkNMoP7g6SHPR9aDRp+hnQBlAvWH4PYe4vtt9kizYoSIRdbGVCUxgfrD0nrsMIC+gWebwwmn2z2MHBmBcLkFWO0XelACWLRW63dMoH5YvXq1CIpazzBznyXS7BhB6LV47eqBUuyuqqoSmEADQEE+9Xw2yxqRMXKYLd7//ITQzwB27Dgw5xtpgJ6+s0qXKG7pkY9O5FznwAQagDQ1miGbh5612pQuVtzRb7PLF6H97p6kRoAJNCAlJSVuAH/xDGvr6lG6WHFHW7fZ65kC/7dsWYETYAINDsEbno/tPeZIc2L44UxXt3cAJYNtzgQaBLXd8ncAnQPPDqcLPWfZan6k6LX0w+H0snPoTtPQbQMPTKBBqKqqEgDylmfYidb2SLNjyDhxRtaWhLxzfmoFgAk0NCTxRZyzWwYAdPf2eW0qMyLDanegs6fXM4hKhDzrGcAEGgKL58/9EhQfDDxTAMdOtyldrDHPiTPtoN5BO5aWFX3lGcAEGiIST57wfG7r7oHdyQxIIsXhcg1ZHHGgv5anYwINkaVlxZ8DaBh4ppTi+xOnlC7WmOXQiVOQJK/+s+nqitId8nRMoGFAQTd5Pnf09LKvSxHQc9YyZO+TEPq4r7RMoGGwpKL0QwL81TPs2+Mt8pOIjABQSvHtsZPeYaBbF5WX/q+v9EygYUI48UcABjfurHYHjreyBVOonDjTLt8BcRKieshfeibQMLm6rOx7EPynZ9iRU2fQ129VumgxT5/FisMtrfLg3y0un3PI3ztMoBGgtut/AeD4wDOlFPsPHYUgsLPz/hBEEfsPH5NPh1oEIvxHoPeYQCOgqmpWP0DvACAMhNmdLhyUza0YFzhw9IR8W06QOHL7svLygKtMJtAIWVxRWkcI/tUzrK27B0dPnVG6aDHHsdNtaJet2kHx+Pmtu4AwgQ4D88mjTxJgp2fYkVOtON3RpXTRYobTHV043HLaK4yC7NhVUfyzUN5ntwoOkx179mRJVNUIIG8gjBCCwulTx73b7o6eXuw7dFQ+72yFyJUurixqDSUP1oMOk6vLy9s5QpbDw/KeUop9h46iexxv4vf0WXwtisxUoktCFSfAetAR46M9eyspxXYAg96oOI7D7GmTkZmaonTxRpW27h58c/g4JG9x2gghCxeVF+8JJy8m0BHko91NN1LQtwEM3hdOAMyYnIe87MzIMx5DnDjT7stGQaAgNy6pKH4/3PyYQEeY7bsabwUhLwPw8qmSn5OFgkm53newxxGUUhxuafX1Vc1NKO5eNK/k9Ujyjc/WUpgdu5qWSoS+A4977gEgOcGE2QVT4s7nkt3pxP5Dx4Z8TSOAhVLuhsXzij6ONG8m0Cixo665QuKk9wGkeYarVSrMmpqPjJRkpYs4IrR3m3Hg6AkI4pCvaJ3guGWLy4r2Did/JtAosnVX0zSO0PcBzJTHTchIQ8GkXGjUaqWLGREut4DDLaf97fkeEkX6D9dUln433N9hAo0yO3d+Y3JrHc+A0DvlcSqex9S8CcjLyhgzc1NKKVraO3HkVKsf2wP6ql10blhRWTkiR1/HRqvEAdv3NN4JSp6BzEEYAJj0ekzNm4CM1OSY/oN0mntxuKXV31WU/YTSBxbNK31lJH8zltsj7thRXz9dkvgXAVT6ijfqdZiSm42stFRwMdKjSpKEUx1daGnr8HuJLyV0NyRy75J5Jd+O9O/HRiuMIyilZMfuvXdSkF+BIMdXGq1GjdyMdGSnp8KoV8ZPvdXuQFt3D053dA11bnCBFlD8aFFF8TuEkKgcK2ACVYgP9uxJVFHV4wDWA/C7UkowGpCdlorM1OSh/tRHGLvDiQ5zL9q6eoJdkuakoL+CQfPkksLCqFpqM4EqzEe1eydRHj8CcB9k+6ZytBo1UhISkJJoQpLJCKNeB46LzJxCkiRYHU70WfphtvTDfNYSqKccoA/A73mJe3bh/KITo9E+TKAxwo76+jRR4moIyAYAGaG+p9NoYNBpoddpoVapwPMceI4b9M4siiIkSYIgSnALAuwOJ2wOJxzh+H2iOAMOTxAVXl5UUtIX+ovDhwk0xnh/716DzkVXgZCbKHA1AGUmoUA/KPkLJdgimhO3D1yHONowgcYwO3d+Y3LpHCsI6HUUuIIA2VH+yXYQfAbQ9+2C872R2sscDkygY4gPaxtn8DxZQAkWEIpZAKYBiNQq+iyAQ6DkAOVQC4l+Fo1touHCBDrG2Vb3VSbhXAWEknyJIyZISOIIDBQwAAABbBKFDRz6OIn2g8NJSVR/v2R+YYfSZQ+F/wfnfZ+k52pisAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wOS0zMFQwNzo1ODo1NCswMDowMAxJqbIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDktMzBUMDc6NTg6NTQrMDA6MDB9FBEOAAAAAElFTkSuQmCC"
    let neddle4="data:image/png;base64,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"
    let neddle5="data:image/png;base64,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"
    let neddle6="data:image/png;base64,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"
    let neddle7="data:image/png;base64,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"
    let neddle8="data:image/png;base64,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"
    let neddle9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAD2CAYAAADoDAqPAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAAB3RJTUUH5gkeCAUQ38ylewAAAAFvck5UAc+id5oAACGbSURBVHja7d15nN1lfejxz/f5/X5nmX0yS5ZJQkLYlEUlCSRQvBeBgLZarQqKZfGlYKtiay8V2nv7Km2thWt7rU3Vl4gWaW2taF2oQCYgIpCZkElkC8gasq+TySxnZs45v9/zvX+cmcmARIM5kzOT+b7/O0syz+93zvc82/d5HjDGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGMm0l1dXQDct3atAKx+uMutfrhLVnWsC+7u7AySJ55AVblv7VoH0N65DoAHHthY6aIb8wpS6QIcLQ88sDE4//xTk9VrHp01mHH7M3k9XUT3o+5kFEFoBkKUWNACIiGi3QpDwC6SIMnmarf0VQ0QOB+HKsGF555ZrPR1mentmA3gex5eF739t5YW2zu6FinSKkqLiP4OkFI4CwiAaqAJGARmAIMoVQiDQAYYGHlfNyo9iA4BTwC7RKXLwfMJfl+y6YV94fEnRRctX2wBbY6qYy6AV3V2NYiySJUGhCsETgUagBMALeM1K/AS8DzwtCA/xWlXKG5v4hUoJhcuW6aVvh/m2DblA/jetZ0icTYjLo5Br1XhbaLMBpYf6t+oKiKC94o4Qb3HOTfu+dJj7z0ipVskImOvH0IMdAHrgDWBxO3dW7b0ZOsb9Z0XX1Tp22SOUVM6gFev6ZqnojNB/gfwJ0DLyEvR+Pd5VQTGgra2KksxSaipypTeHIZEYYiqlgI3SUCEOEkoxglxHJMvllrHw4UiqI5V5YcI6ILAeuA/ER5K/OBjl5zzVl/p+2WOPVMygFetWT8TYZmgZwMfBBaMf11HAiwKAhLvqanKUl9Tg3NCc0M9gRMy6TSpKCTxnlQYkiSeIHCvrH2dEMcJCBSLMcP5Ivlikf7cIPlCgb7BIYaG86hq6UdC5NU3tAhsBf5VVH7sktQTF5x3er7S988cO6ZUALd3rK8BLgTeCnoBcMboa6PN2zhJyKZTNDXUk44iZtTX0lhXi/dKFAZlK0updo7pzw3RO5CjdyBH30COeKT2ftXNVeBlhO+J+JVOkh0XnLU8rvT9NFPflAjg//rv9dQ2sUzhd0HfBiwdLbtXxYmQikICccxuaWJ2ywycONKpFHKUrnC4UKA/N0RPXz89ff305QYP1WfuFLgrwd96yfKz9lX63pqpbdIH8KrO9fPwvE2Ed4GuAGpgpJmsUFOVoa66mrqaKuY0NxFFYaWLzHC+wM593ezv66d3YJBiMca5X7rV3wa+453cd8nZi/srXWYzNU3aAF69dn0Kr6cqvAu4Clg4+lriPdl0mpbGeuprq2mqqyOTTlW6yL8kXyzS09vH5l17yA0NUyzGiHOjN12BbhX+Qjw/Qv2eFeeeZc1q87pMygBe9cjjoUhyMuJvAX579HnvPWEY0tLYQEtjPXXVVVRnM5Uu7q81nC+wv7ePl3fuZnA4/4rpKaAbeBSvN2iQfSo1tFfPP//8ShfZTBGVb2++BnHFjwCfB2qh1FxGhMa6Wloa62lqqKe2Kvur5mQnlUw6xZzWZmqqsuzpOcC23fvIF4u4UvmbgLfjJCM6/A3g3wGbcjKHZVJFQPua9ccDNyJ6GVAHpeBNpyJm1NfR2thAU0MdYVC+0eRK2LG3m+2793JgIDd+oEuBfoSrgIdWLFvSXelymslvUgTwqjVdgYq0CHxK0A8Ds0Zfi8KQmU2NzJ/VOiWay4drcDjPS9t2smd/D7H34z+IF4D/mhHx530x/m3Lllg6pjmkSdGEFiES9K+Ba0afSxJPKgo5cX4bba3NlS5i2VVl0px4XBv1tdW8sGU7xTgerYlPAD6zv8heD3cAeypdVjN5VbwGbu/sOgP4HFoarFItVTgtjQ2cdNzcY6rWPZQtO/ewY+8+DgzkCJwbfTqnKn8F3HbxOYt7Kl1GMzlVLIB/+PDDUmA4qg/rP4vKtUA9MJbueNzsmdTXVE+ZgaojkSSegaEhnnj+JfKF4tiPGLAJ5bsHtr1046WXXmoDW+aXVCw62tdsqEP8Z4HrRp9LkoTG+lpOWTCf+prqSt+bo27P/gNs3b2HfT29uIM1Map6WZLw43ectzRX6TKayeWoB/Dddz9PnJIwXd17taB/DiwcXdkzp6WJk46bSxROiq55RXQf6OPZzVvpzw2Nz97aLo6rReXBC5fZpgHmIHfk/8Xrl8n2vkvQv2U0u0qV+ppq2lqbp3XwAsyor+XURQvIpKPxv65t6rlOvb610uUzk8tRDeDVXV0ubO49Ead/ALRCKbuqpirLyQvm0VBbU+n7UXEiQn1NNQvbZlOVzeD9WH/47Sr6kfbOrrmVLqOZPI5qAGtMDQmfAca2qKiuyrJo3hzqqqsqfS8mlbbWZmY1NZJOhaODWhHIhah+ptJlM5PHUQvgvn/rE5T3UFqcMJKBVOr3tjY2TIvR5tcjcI6ZTTNoa20ZXwu3gLynvaPrgkqXz0wORy2AOxc9uwT4K0aaziJCS2MDc1qaLHgPoTqboa21maaGOhI/Nos0C/ibSpfNTA4THsCrHn+cVY8/ni4txqcNSv3e6myGhXNmkUlNvmWAk0k2neKE+W2jCx+glD23vL2j608qXTZTeRMewFUvF5HB4tsF+RQjqZtRFDJ/Vit103Cu9/USERpra5g3q7W0Xc9Bf93e0dVU6fKZyprQAFZVmJ9KAb/DuKWBzQ31zG6x797rcdJxc8mm0+Ofqgb+utLlMpU1oQHc3rE+M5jPXwVcDqX1ckEYMLOpcXzOrzkMgXOcOL/t1bXw+9o7uk6tdNlM5UxoFDm0RlTeDWQBnAjzZ7Yyc0Zjpa97Smprbaa+php/MFe6FvjTSpfLVM5EV4NvAhZDqekchQFN9XWVvuYp7cT5bejBEekssHR1R9d5lS6XqYwJC+C713RUq/ARYObocy2NDdTX2sDVkWisq6VlRuP4aaU2kAtWd2ywPsk0NGEfuiN8A8i5UOr7pqKIWdb3PWJOHG2tTePvY72ipybiT6502czRNyHRdM/D66oFOR+YB6Xmc01VlhpLlzxizgnZdJrG2lr8wVp4haCz7+nYML1XgkxDZQ/g9rUbCFJhWoTfZWS5YhQGzGlpIjXNVxqVS3U2Q01VhvDgUTF1ovJ7zrn0kfy/ZuopewCvOPtMJPEnC7wBSrVvJpWiwfq+ZRMGAQ21NYRBOH73jg8EJNXjHptpoPw18JoNocJiHdkW1o80n9OWMllWM5saR2rgsRTLold9p+WVTy9lD2CnvgH0QkbSJkPnaGmst8GrMhMRZjfPGN8PnoWXWasfWW+LqqeRskdV4qQZOAtKzeeqbIb6avtOTYTqbIZsJnWwGS36P+NUZFvuTCNlD2CBk4CG0ceZVIpUygavJkI2nSYVRWOPFc4jKZ5yk/WDp42yBvDqzvUZ0PmMpE6qKrXVVQRuah+FMlnVVVeRGnecqkBf4PUtN1k/eNooawAXhwoeWDb6OAiCkUPIKn2Zx6bRlV3jtCBkV3eutwn3aaKsARymohnAUih9uVJRRCZtU5MTRURwIkRhyFijWfntC88+c8imk6aHsgawimtm3HlLURhQlbEAnkgNtTUk4w9HE1KrO7sW2nTS9FC2AL5JFXXUUDrvFoB0Khq/ObmZAFEYUluVHb/E8IQwCXvvf2SD3fhpoHwBLILz/vjx/6cTN+XP8p3sRARVxu+ZlS6GyRsuOPdMa0NPA2UL4HvXrs+ok5CxrXOgJpvFumITKxWFpNPR+OWFEV5zqx5ZZzXwNFC2APZaLIrqaaOPg8DhnNgI9ARLvCd0wfhMt2YRFl587lL76ZwGyhbARSkq0Dv62HtPOhUdwf9oDkcYBDgn42vgfkTS7Wttgf90ULYP+XfPPs8zsu8zlDZhK75yAzYzAfzIdN2440jrQCLAzhOeBsoWwPet3+QUto0+jpOEdGQplBPNiRAnMeMGG/p9Eoc7t20Lrrj+euvAHOPKFsAXLl7oR9IogdL0RhxbDTzRvPcEzo0dT6NQu3XL9jNXr/rpe6KitL7//e+3pvQxrGxV5P2Prk35RHaN1gPFJB6/Y4SZIM454sTjVXEiJHHMzh07P5FNp65AebZh9qLV13zqxkdI/GPqgn23rfy7QqXLbMqnbAF8wVlnF9o7usb2jA1dwOBwvtLXd8zz3qMjwYuU8s9RSJKkLgiCpcASoB/n1gHt11x3Yyfin3bo0Ff/6fO5SpffHJmyBfB9Hesyiv5cR5L64iTBibXeJp5QjBO896XaOI4ZHhwaP6gllHZHuUDQ84Fe1D3j4fsfve7PHkbleVdI9c6ZQ3zTTTdV+mLM61S+PvDypcOK1AJ9UGra9efsB36ixUlMoVhEREayspRkpFZ+DQ5oBM4BPi/oD0T0B5oZvn7H/uEzP3bdjY3XfOqGbKWvyRy+stXA967dIKr6mKiO7YUVjgxkWV944iiQJKUZIxEhny8wPDx8uGcuzwSdiXK2wscUngZWXfvJP3sQ9GUvvqiJG/r6l2+2pJBJqqzTDKvWbjhXvL8NOGV0L+jlZ7zRDvCeQP2DQ2x45jkKxRgRYd+efXQ80slgbvBI7vuLwNOg9/tE7o6UbQLFMMwlK1eutGCeRMraSXWqWykdewmU+sEH+q0ZPZFyg0N4r2PrgYvFmOGhw66BD2UR8E6Qf3SOVUnAN4oBnyxQdUpTbb189BM3WIrdJFHWqvEnnetrYtVvAr+nQCoMOf3EhXag2QTatH0Xz2/ZNtYH3vjERjY++fRE/KmiwCaFTkEeVNVH8e45nMZeVL++0prZlVDWVKliIorTXwh4ATdcKDAwOGQBPEEU6B8cBEAE4jghNzg4NiJdZpGWNiw8SdErEZ4i8GuAR4AHr//sx7fs29eqgNQm3bpy5cpK355poayf8sXnnpkDekb/3zAI6OnrH793sSmjfKFAoVDaRVYVVD19B3qP1pjDacC1wDcc3N+7u+4LYZL/YOjziyhzxWAOrayf9N13Py9hff9CnH8SqPKqNNXXcfJxc6m1g83Krqd/gCeefZF8HBM4R/e+bu5v/wlxIcYFrhKDhzlgK/BTVV2lKk+GIS9/9Ys3W07tBCn7J3xfZ9c8r3wBeC+UpjaWvPFkOxtpAmzasYvnNm/DiSDO8VjXBn72kwcQHFEqRRhFpNMZgiAgCAJkpFk9Ol88gRQYAJ4FVqnqz1B9Zk7V0PatuTr+5ct/a02yMpmApo7fjbodCENANo4Tdu3rtgAus8R7evsHEEoBmSQJe3fvppAv4EQoFvIgIOIIw4gwDIlSaaJ0mjAMCMMQkQkLaKG0M8sSYImIfBKRzTuHqu8JxP/42k/c+DxF3T9nTrZ400032eDXEZiQNlb7mq7LRPj26CdTW53lzSedQCZtB5yVS09fP0+9+DJDw3mccwwMDPDdb32b/d37X+PdOrba0DlHEIYEYUgqlR4J7BRhWFpTPLaqaeJq6P0CL3p4yDn9kaJPFuPkwO1f+gerlX8DZQ/gBx54gGI2lUHTG4HjVZWqTJqFbbNpa22u9PUeE1Thpe07eGnbToCR6aOnWH33vSRJ8uv7vnpw3tg5hwtKNXIUlZrdqXTp7GERh3Ou9N6JCeidwC8UfVDE3eeQZ2ZUNfV0D+xxt/7zLdZvPgwTUgPf3bW2JigGnxC4GUq/5gvmzOK42TNtm50yKMYJjz/3Ivt7+0oLGIpFftJ+P0/8/LHfePpotMZ1ziHOEQZhKajTaVKZNKELcSPb90xQ5bwTeBxYK6o/SsfxM8Ugip1mktZWvC20eG0TslzoHUvOHkBlI/Dc6HN7e3ptgX+Z9PT30zeQK53M4Bz9/f3s2rnziEadxy+G8ElCIT/M4GCO3gP76d69m317dtO9bw99vb3kh/PExXgs6Et/94jrgtnAJcBfqsi9w1H0H4njT2OXXx4nSXjtp26wfNzXMGGrDK74yMcKCGcInCoiDOcL1FZnqa+xwawjUYxjXtq2k95cDieC956NTzzJ0088Vd7kjXE/BqqK9zFxMSY/PMTQUI7hoUHyQ0PESXFknl8pLUl2iJMjncKqBk4B3gZckssnvwUyc/Gy8/zis36rb8OjDxeu/aMbZP3aRyryGUwmE/qr1r6m6/8g/DHQpKqkUynOfdOptjrpCBzoH+CpFzYxOJwnCAIG+vu56/s/ZNvmrRORffUrqSpIaQN/5xzRaP85ioii1EiT242VqwwDY1uAnyE8jOgjuajwXFUxm9z2xc8lV1x/Pf/6939/VK9/MpjoAJ6DcB9wMuDiJOGk+XNZNG9Opa97SirGCc9s2syu7v0IQhAEPPv0M6z68T3kh/MVX/X16n50FEVjwZxKlQI6CMJyBHSs0C1oO8h9XuTxXO3gxuS5Hcmdd945raalJvwTX9XRdYPA3wARlPpLbz3zjFeca2sOz+7uHja++HJptxPnONDTQ/uPV7F506bSVjqTjKqO9a1FhCAMx2rpKIoIRuanERB+47noYUV2i+ijqP4IkccoJi987SufH6709R8NEx7A7R1daWAjpSVqeFXmtjZz6qIFlb72KSVJEp568WX27D8AlH4I9+/r3vDfP7zroZ593WeGYbAgjhNRpUnVO4Q0OqHzua/baEDD6PRVSBgGpDMZwjBVqrGDEJz8psklg8BWVH+q4laJ8kSq4LbGmYJ+9Z8+X6z09U+Eo9Lmau/ouhr4l9HH3ivLTj+F+tqaSl//lOC98vKOXby4bcf4INgWueiyW/7uc4+1NdWQy2uDJ9WQJPH8wGlTvlBoFnHnqmq1936BqkbeJ7NEXK0eesudinEy0uxOpUil02OZY8FIPxqRkbloAQ6r7AOU+sydgn43wT3hvdsbFaNkzhySY2Va6qh1mto7ujYAb4HSF7KupoqzTjtl/Jk+5hByQ8NsfPFlDvQPjO/n3nzRssV/LiKv+W2+7MprMn7oQCFb2xwWY5fRJDkxxlMsFE50jnmqfq7iFiRxnEH9mxDJqvfVgHjvK/+hiCDiSKVTpKIUYZQiSqUIRjLJDr7tsGrqQZDngZ8jelfg5Gfi9UCixLeuvLnSV3pkt+lo/aH2jq6lKA8iZKG0W8cbFs5n3qwWAjf5+m+TxVC+wDMvbWZPz4HxP3bPg1weheH685e+6bCr0vd96GMuzmUVSeQH31/pr7j20xk8tblcT4Qy3yeaDoLwbC++KckX54jIAq/aAsz13hdUtRFRjmbT/BXN7iAoNbPDiFSqFNRBGBCGpeSgwwzm/cAvBNYC96OyPozDPYUoH9y28v9OuWb2UR22bO/oWgl8BMiqKlEYctoJC5hRX2c18SHs2LOP57ZsH9t5EtgjcF21Fr53zjnnTEhmzFV/fH14+xc+H195xTX1Enqfy8tCFwQnFeM4jfpT8ZpW9WeDNMZxMYPIbFQDhRSqExrcowGtqgRBSBj9cl53EEZjizx+TVl6gfXAzxVd5YuyLi0MAD4Mc34qbEpwtAO4BbgHeBMQJt7T0lDP/NkzaWmsr/S9mFS8Kjv3dvPsy1spJsnBA7yV7xLwJyvOXrL1aJfpvb//sajaVRWB7B13fGH40g99bH6YCrKFQmGmKjOSYv4454JlifcpnyQLRgJ6ASLVPkk8qq7soa06lnQyltcdRWMBnUpnCFxQSi7hV/aeh1E6gZ8qrEtJ8WdfXvkPuSuv/TR33PqFyTVgMM5Rnzhs7+z6EMr1wJtHn2ud0ciiebOpydqWxKP6c4M8u3kbPX3945++txgGH1635M27bppkO31edvXHJSz2BsNx5KsamtLFeDit6ptd3ulQnFsWOGn2sZ+n0OZ90qDKUtDYe9+gqqGqBuVe1ji6GKO02qpUS6cyaZwLfl3SS7fAk6qsUugUZePXvnTz3krf49e8xqP9B9tXPyJUpz6DyCeBuaNN6ca6Wt500vEVT0aYDHoHcjz94mZ6c7nxXYte4H8lgf/m2886K650GQ/XlVd+2t1xxxf8u977ofBH3/tW/OFrrs/W1Gbdrh1b0xKGxyeJn6GqpyWJopq8WZATvffVoI3e+yzQBBzRtkxj89EILnCl5JIwJEpnSKXSYxljo/PVo/+GUoW9H+hQeAChQ6LwKYmLhVu/eMukODeoItHSvrbrOJTfR/ns6HPeexbNm0NbawvZabxuODc0zKbtO9nV3TO+NtoD3KjKNy8+Z8kxsW726quv5vbbbx97fMMtd7ntL96VSgoaOFcl+fzQIkKZFeeG0uJYokidqr5ZvQY+SdrUSRveo0pKVRX0sL/LqqUDgFRK2WxhGJYGxtLpsQSTIAheHdAJpR/RR4EfqMiGxIW/GGgIBu+86aaKrdKpWHW3qqNrnnBw6x0FAiccN2sm82e3koqm37LDYhzzzKYt7NpXWpQ/8uXxwG3AX65YvmRXpct4tF122UfDbDZOAHf77bcnH7zyE/Nd5GVouNCGp9XH8fEuCE+K40Kk6k8DqVfVNpQgSeI0jB7Qdeim+fhmexAEBGF4sB89kgoaBA6RUi2tEKO6G3haRe7y3v+MRDcFoRv82sqbj2rrqGIB3N6xIXKORu/93cCpQMarkokiWmY0cPKCedNqZLqnb4AXtmxjf1//q/tnXweuW7F8yVClyzhZXHbVtfznN2/lgx/9I/mP276oqspn/uwv0jt274vixNcXC4VIJDwH8bXFQnwcQpt6P8uJnOa9LyTezwZCVAP45Smx8cskRwfGojAiiErTV6UEE4dzASKSV9iG6gbgx6g+6r3fEgbOf3XlLRP+mVW0w6mq3Ld2/YWq/CHwe6PPe68sbJvFzKYZ1Ncc27tZeu/pHxxiy6497N1/gNj70Q+lV9HvefhbQTZfsnyJLaY+TO9///vlzjvv1Pd96CMpCLWqulH69gwHYdVATZgOFxYLxYxP/Ak+ibMg5whuRpwUm1FmqfqsiDSVllCO9FYUlIN53WM7mIQRqUx2rIZ2QVAEXhKRJ1G9K9Hwpy7xeyVJinPmZJOJ2P9rUowY3duxbqlDvggsh1Jgh0FATVWW009YSCadOmYHt3r7czy7eSs9ff0jTbSxl1aDfnrF8qUbK13GY9V7L786871/vz1/2Yf+IBtkg6ricH5OSnEDw8m8IJJl3vu09/4NikaoPxmk1SeJV69ViqrIyDIM5wiCgFSUIp3NEoYhQRB6FwTPO5ENKu6BKJJ7W+fO2r5903b3tX8qXzN7UkTFPY88mnGwSJy7FTgLCHUkIaCpoZ5ZzTOYe4ztp6WqbNpeym9OvB/fXSgCXyrubv5TSRXjd7zjxEoXddp597v/OPjBD/4xee/lH03PXnh8vHfnrtYolMHBvr5TBNesqovE0VosFppBlqGa9t63lqbDqAtG9uSOUmnSmQwuCIpRGD0jgawNgvAnYSr96PEnvGHzC08/IeqT+NZ/vuU3LuukCGCA73znO9TNP/4cUa6S0o7/QOmLnooijps9k9YZDVRnM5Uu6hHr6etny649dPf2kySvaBlvUeVOEb4qxfQLF7319EmbQDDdfODDH5dv/8uXxz6Pr3zrv+XZgX6366F7IyFsLHrqEM5IYgKfxG/E0ebjZG7gpM0rkTh3QjqddkEY4FzQ5cR1iZM1VdmqBy499cwd3338UR8E1bJy5etrZk+aAAb44dNPSU0+ySTDxa8D5wOzgJG0uYC66ipOOm4u1dkM4SRc//rrDOcL7Njbzb7eXgYGh4jjV+wguVfgm8D/u2j5kp2VLqv5zXzl+0/R8f2vh211C/3f/fOn9ANXXDNbNGzOF4fT6pNTRKRKXHCeC4MGJ65BArfLiTwkuE3ZTPWDt33llt7X8/cmVQBDKVhXd26YD3oBpWmmWsCNnv1TlcnQWFfLgrZZVGcyTIWucZwkdPf2093TS3dfH0PDpRyAccG7Dfj4iuVL7qp0Wc3EuPyqP5R//+ZX9Oqrr3a33367f/cHrqpH0xKlpDmVkiAu0iyB2y8iL/zHN7502IsqJu3Xf9XatdXiw3cA7wO9dPxr3nvqa2tobWxgZlPjpG5W7+05wN6eXvpyg/TnBvGqB/OaS76mGt+k+N2XTNDiBHPsmrQBDLCqc4PzThqDOPkcwgpgwavfU1ddRWtTIzPqaqmrrpo0o9X7e/vZsXcfA4ND5IbzpW1wXlm2ThG+iPcP+UR3XXze2Ra85nWbHN/2X+O+RzbUq+hbFP43omdTalajjPSPnSMKA1oaG5g5o4HqbJZ0KnVUm9fFOKEYxwwN53lpx04GckOoKvEvn5SwA+RbAt8n0I0XnbWkr9L310xdUyKAR61e0zVHRS8E+Shw3vjXRhPWozAgm07TWFdLY10tNVUZ0lFU9i1XvZYWtsdJwq7u/QznC/TlBuk+UBqDeI2/NwD8p4qsBtZdvGzxS5W+n2bqm1IBDHBfZ6eIhCckyuUobxM4T8ddh46c+yNAKgrJRClqqqvIpFPUVWepzmaJwoAoDFF4dbP2NfmRH4fBoWGcCAcGcgwN5xkuFNi9bz86cjqg9/5QPxTfEeHfBNnoPZtXnLPYmsumLKZcAAN0dXVJbjhkSJIZzvEe0PdS2iRg9vj3jR7Kpao45wgDRxSGI81roaYqiwBV2QyqShQEFOKYVBRRjGOcCL0DOaIwpC+XQxByQ8PkiwWcCyiOHKz9GvpH7u2DoDeL9y/i3P6Lli+dFEvQzLFjSgbwePc8vYmgp2eGwFvU+cspbZy3AGh89XtffcqeKiOHdZXmmeM4JgxDksQTBI44TnBO8F5f0Z/+FQNle4AuhU0CdziXdM2au8mf1vaBSt8mc4ya8gE86oEHNga9A2/0VU0/ny34k1S4GHg7pVq5kZGN5cssD7wAkgf9tney1nl6Vyxf/Hil74eZHo6ZAB7v/ke6XNJYL76/r0WUBU6ZregySrXzLGAOkACtMNZlPpQCkAL2AjXAGhF6gM2KPAg6jA8eig/UFJOZ/f6di8+09Edz1ByTAfxq93VuiHxMKEESItoIrl5hlnoyIpwxsjPafBW2g7bh6UGkWdAukBkoPxeROg9PJgQ7Q2JZsXxJT/v6J92KxacfEztkmKlpWgTwq41OOd27Zl0Kikkh2a/vOu93/L1rHw87zzojOatjfWqgPlvc+Ma5/tQ7VwHIpZdeajWrMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY8wR+v/iuzTO0orxfQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wOS0zMFQwODowNToxNiswMDowMLxFRKYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDktMzBUMDg6MDU6MTYrMDA6MDDNGPwaAAAAAElFTkSuQmCC"
    let neddle10="data:image/png;base64,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" 
    let rotateImageUrl={
      neddle:neddle10,
      top:"34%",
      left:"37%"
    }
     const filteredCreditRating =
    camData?.company?.creditLimit?.creditRating?.filter((rating) => {
      return camData?._id === rating.order
    })
    const getRotate = (rat = 1) => {
    let r = Math.round(rat)
    if (r == 0) {
      rotateImageUrl.neddle=  neddle1
      rotateImageUrl.top="14%"
      rotateImageUrl.left="30%"
      }
    if (r == 1) {
      rotateImageUrl.neddle=  neddle1 
      rotateImageUrl.top="14%"
      rotateImageUrl.left="30%"
     }
    if (r == 2) {
      rotateImageUrl.neddle=neddle2
      rotateImageUrl.top="14%"
      rotateImageUrl.left="30%"
    }
    if (r == 3) {
      rotateImageUrl.neddle=neddle3
      rotateImageUrl.top="14%"
      rotateImageUrl.left="30%"
    }
    if (r == 4) {
      rotateImageUrl.neddle=neddle4
      rotateImageUrl.top="14%"
      rotateImageUrl.left="30%"
    }
    if (r == 5) {
      rotateImageUrl.neddle=neddle5
      rotateImageUrl.top="14%"
      rotateImageUrl.left="30%"
    }
    if (r == 6) {
      rotateImageUrl.neddle=neddle6
      rotateImageUrl.top="14%"
      rotateImageUrl.left="30%"
    }
    if (r == 7) {
      rotateImageUrl.neddle=neddle7
      rotateImageUrl.top="14%"
      rotateImageUrl.left="30%"
    }

    if (r == 8) {
      rotateImageUrl.neddle=neddle8
      rotateImageUrl.top="14%"
      rotateImageUrl.left="30%"
    }
    if (r == 9) {
      rotateImageUrl.neddle=neddle9
      rotateImageUrl.top="14%"
      rotateImageUrl.left="30%"
    }
    if (r == 10) {
      rotateImageUrl.neddle=neddle10
      rotateImageUrl.top="34%"
      rotateImageUrl.left="34%"
    }
    }
    if(filteredCreditRating?.length>0){
    getRotate(filteredCreditRating[0]?.totalRating)
    }else{
       getRotate(1)
    }
   

 

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
                >
                  Basic Info
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
                  })}{' '}
                  {camData?.unitOfQuantity?.toUpperCase()}
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
                  {moment(camData?.ExpectedDateOfShipment).format('DD-MM-YYYY')}
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
                    camData?.shipmentDetail?.ETAofDischarge?.fromDate,
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
                  {moment(camData?.shipmentDetail?.loadPort?.fromDate).format(
                    'DD-MM-YYYY',
                  )}
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
                  {moment(camData?.shipmentDetail?.loadPort?.toDate).format(
                    'DD-MM-YYYY',
                  )}
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
                >
                  Supplier Info
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
                  {camData?.supplierCredential?.shipmentNumber?.toLocaleString(
                    'en-In',
                    {
                      maximumFractionDigits: 2,
                    },
                  )}
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
                  {camData?.supplierCredential?.consigneesNumber?.toLocaleString(
                    'en-In',
                    {
                      maximumFractionDigits: 2,
                    },
                  )}
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
                    ? moment(
                        camData?.supplierCredential?.latestShipmentDate,
                      ).format('DD-MM-YYYY')
                    : ''}
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
                    ? moment(
                        camData?.supplierCredential?.oldestShipmentDate,
                      ).format('DD-MM-YYYY')
                    : ''}
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
                >
                  Customer Rating
                </td>
              </tr>
              <tr>
                <td width="50%" style={{ borderRight: '2px solid #CAD6E6' }}>
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td
                        width="45%"
                        style={{
                          padding: '35px 17px 35px 35px',
                          position: 'relative',
                        }}
                      >
                        <img
                          style={{ position: 'absolute', left: '0', top: '0' }}
                          width="350"
                          src="data:image/png;base64,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"
                          alt="Customer Rating"
                        />
                        <img
                          style={{
                            position: 'absolute',
                            transformOrigin: '50% 50%',
                            top: `${rotateImageUrl.top}`,
                            left: `${rotateImageUrl.left}`,
                            width: '168px',
                            height: '184px',
                            rotateZ: '150deg',
                          }}
                          src={rotateImageUrl?.neddle}
                          alt="Meter"
                        />
                        <span
                          style={{
                            fontSize: '30px',
                            color: '#008015',
                            lineHeight: '37px',
                            fontWeight: 'bold',
                            position: 'absolute',
                            top: '47%',
                            left: '52%',
                            width: '40px',
                            height: '40px',
                            transform: 'translate(-50%, -50%)',
                          }}
                        >
                           {checkNan(
                        Math.round(
                          filteredCreditRating
                            ? filteredCreditRating[0]?.totalRating
                            : 0,
                        ),
                        false,
                        1,
                      )}
                        </span>
                      </td>
                      <td
                        width="55%"
                        style={{ padding: '35px 35px 35px 17px' }}
                      >
                        <div align="center">
                          <span
                            style={{
                              fontSize: '20px',
                              color: '#00B81E',
                              lineHeight: '24px',
                              fontWeight: 'bold',
                              padding: '6px 8px',
                              background: '#CFF2D5',
                              borderRadius: '5px',
                              display: 'inline-block',
                            }}
                          >
                            {filteredCreditRating
                        ? filteredCreditRating[0]?.creditResult?.toUpperCase()
                        : ''}
                          </span>
                        </div>
                        <br />
                        <table
                          width="100%"
                          cellPadding="10"
                          cellSpacing="0"
                          border="0"
                          style={{
                            border: '1px solid #D2D7E5',
                            borderRadius: '6px',
                            marginTop: '15px',
                            marginBottom: '20px',
                          }}
                        >
                          <tr>
                            <td
                              width="25%"
                              style={{ padding: '20px 10px 20px 20px' }}
                            >
                              <span
                                style={{
                                  background: '#CEEFD1',
                                  width: '64px',
                                  lineHeight: '64px',
                                  height: '64px',
                                  textAlign: 'center',
                                  borderRadius: '8px',
                                  display: 'inline-block',
                                }}
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAXCAYAAAD3CERpAAAABHNCSVQICAgIfAhkiAAAAX5JREFUSEu11bFKw0AYB/D/kVYXMYNz091Ni+AoWKEoFEf3voSTL+Hk0KWT5AG0nWo7OfgMAWNwsIKiKG0tPb8jjU3aSxpzl0AhvVz48b/77gtD3pcNA6bVBJ9eo+a1BcdyNQW4afXB2B44N4DpiYDzQ/2EfXBUKNj6LBwn+DgftIsCRgQCuyFwSPdvMAr7+tF40CPwEEeOqxdNAeotpJSgPrR7QHvoyPbwb0nDp0R9ea8qRZQHPUnRSEH1pA8Evv4PjKK3pTs6xPeoueepGkZGcI62yzcAr9LAD/0uV8ICHLyITrOzcA5jlzS6px3LpoFT6hzF2YPvRFgR9JN2SmfgrEX3ASrG5bC9vQbzs0fzMyUM0vrVmwbWBEYLKQn+2LiA+UUJuVLCaNLgXzz8TlO2shSN7CQsNwc5HH5XfC08jKl51x031fFamCTvSPHwkErvCaNJFfXnTGByR1qGtYCr2+Ac5pTwUTWhvJBkG+TDDYwnDZUljXakLJWg+M4vlf/IL1ywetEAAAAASUVORK5CYII="
                                  alt="Check Green"
                                />
                              </span>
                            </td>
                            <td
                              width="75%"
                              style={{
                                fontSize: '16px',
                                color: '#8492A6',
                                lineHeight: '19px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                padding: '20px 10px 20px 20px',
                              }}
                            >
                              CREDIT SCORE
                              <p
                                style={{
                                  fontSize: '30px',
                                  color: '#111111',
                                  lineHeight: '37px',
                                }}
                              >
                                   {checkNan(
                            Math.round(
                              filteredCreditRating
                                ? filteredCreditRating[0]?.totalRating
                                : 0,
                            ),
                            false,
                            1,
                          )}
                                <span
                                  style={{
                                    fontSize: '20px',
                                    color: '#8492A6',
                                    lineHeight: '20px',
                                    display: 'inline-block',
                                  }}
                                >
                                  {' '}
                                  /10
                                </span>
                              </p>
                            </td>
                          </tr>
                        </table>
                        <table
                          width="100%"
                          cellPadding="10"
                          cellSpacing="0"
                          border="0"
                          style={{
                            border: '1px solid #D2D7E5',
                            borderRadius: '6px',
                          }}
                        >
                          <tr>
                            <td
                              width="25%"
                              style={{ padding: '20px 10px 20px 20px' }}
                            >
                              <span
                                style={{
                                  background: '#CEEFD1',
                                  width: '64px',
                                  lineHeight: '64px',
                                  height: '64px',
                                  textAlign: 'center',
                                  borderRadius: '8px',
                                  display: 'inline-block',
                                }}
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAMAAABY1h8eAAABAlBMVEUAAAAA/wAAgAAAqgAAzDMAqisAvyAAsxoAuRcAvCEAtSAAuh0AsxwAthsAuyIAuR8Ath0AuBwAuCEAuiAAtiAAuh4AthwAtyAAtx4AuBwAuB8AuR4Atx8Atx8AuR0AuB8AuB0AuR4Atx4Atx0AuB8AuB4AuB8AuR8AuB4Atx4Atx8Atx4AuB8AuB8AuB4AuB0AuB8AuR4AuB4AuB4AuB8AuB4Atx4AuB4AuB4AuB8AuB4AuB4Atx4AuB8AuB4AuB4AuB8AuB4Atx4AuB0AuB4AuR4AuB4AuB4AuB4AuB4AuB4AuB4AuB4AuB4AuR4AuB4AuB4AuB4AuB4AuB4AuB7///+yMbGIAAAAVHRSTlMAAQIDBQYICgsXGBobHB4hIyQvMDg7P0BDSEtNUVJXWmFmZ2prb3N0d3l8gISFiIyNkaGipqmrrLO3ycrL0dTX2drd4eLk6+3v8PHy8/X29/n6+/7kE6FDAAAAAWJLR0RVkwS4MwAAAN1JREFUGBl1wQk7AlEYBtA3NEaYGUmWUEkoO1kaW6QhS5H3//8Wd+bpqe9y7znQBAHsTo5hNf3y6sJmiyzD5o68T8FsmUoeZldULmE0+01lMA+TQyYOoHP9XKFUi5iIaqVCzncR2wnbnzTotcNdpM9oceEAqP7Q5DSF2Gaf/wzKGFqK+Mf7KkYWHqnpZCHM3FC4zUBTp1CHrkmhCc1El8LbJKQsNYuQKky0WkxsQ2pQ6e07U9UPKg1IzySvfShz5yQ7EDzyaQ1DKw+kh7Hi15GDkfRev4ix9QCaYAOxX8MFXpRfmDQcAAAAAElFTkSuQmCC"
                                  alt="Star Green"
                                />
                              </span>
                            </td>
                            <td
                              width="75%"
                              style={{
                                fontSize: '16px',
                                color: '#8492A6',
                                lineHeight: '19px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                padding: '20px 10px 20px 20px',
                              }}
                            >
                              RATING
                              <p
                                style={{
                                  fontSize: '30px',
                                  color: '#111111',
                                  lineHeight: '37px',
                                }}
                              >
                                {filteredCreditRating
                            ? filteredCreditRating[0]?.creditGrade
                            : ''}
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td width="50%" valign="top" style={{ padding: '35px' }}>
                  <table
                    width="100%"
                    cellPadding="10"
                    cellSpacing="0"
                    border="0"
                    style={{
                      border: '1px solid #D2D7E5',
                      marginBottom: '23px',
                    }}
                  >
                    <tr>
                      <td
                        colSpan={2}
                        style={{
                          fontSize: '16px',
                          color: '#111111',
                          lineHeight: '19px',
                          fontWeight: 'bold',
                        }}
                      >
                        BUSINESS PROFILE
                      </td>
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
                      <td
                        width="10%"
                        align="right"
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: 'bold',
                        }}
                      >
                        80%
                      </td>
                    </tr>
                  </table>
                  <table
                    width="100%"
                    cellPadding="10"
                    cellSpacing="0"
                    border="0"
                    style={{
                      border: '1px solid #D2D7E5',
                      marginBottom: '23px',
                    }}
                  >
                    <tr>
                      <td
                        colSpan={2}
                        style={{
                          fontSize: '16px',
                          color: '#111111',
                          lineHeight: '19px',
                          fontWeight: 'bold',
                        }}
                      >
                        REVENUE PROFILE
                      </td>
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
                      <td
                        width="10%"
                        align="right"
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: 'bold',
                        }}
                      >
                        40%
                      </td>
                    </tr>
                  </table>
                  <table
                    width="100%"
                    cellPadding="10"
                    cellSpacing="0"
                    border="0"
                    style={{ border: '1px solid #D2D7E5' }}
                  >
                    <tr>
                      <td
                        colSpan={2}
                        style={{
                          fontSize: '16px',
                          color: '#111111',
                          lineHeight: '19px',
                          fontWeight: 'bold',
                        }}
                      >
                        FINANCIAL PROFILE
                      </td>
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
                      <td
                        width="10%"
                        align="right"
                        style={{
                          fontSize: '19px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: 'bold',
                        }}
                      >
                        40%
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
                >
                  Group Exposure Details
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
                                <td
                                  width="10%"
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
                                <td
                                  width="90%"
                                  style={{
                                    fontSize: '22px',
                                    color: '#111111',
                                    lineHeight: '27px',
                                    fontWeight: 'bold',
                                    padding: '32px 22px 19px',
                                  }}
                                >
                                  {' '}
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
                >
                  Order Summary - Last 6 Orders
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
                <td
                  width="5%"
                  height="60"
                  style={{
                    padding: '21px 12px 21px 35px',
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
                <td
                  width="30%"
                  style={{
                    fontSize: '22px',
                    color: '#111111',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                    paddingTop: '21px',
                    paddingBottom: '21px',
                  }}
                >
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
                >
                  Operational Details
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
                >
                  Director Details
                </td>
              </tr>
              <tr bgColor="#FAFAFB" style={{ height: '67px' }}>
                <td
                  colSpan={2}
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
                      <td
                        width="5%"
                        height="60"
                        style={{
                          padding: '21px 12px 21px 35px',
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
                          {fName?.charAt(0)}
                          {lName?.charAt(0)}
                        </span>
                      </td>
                      <td
                        width="25%"
                        style={{
                          fontSize: '22px',
                          color: '#111111',
                          lineHeight: '27px',
                          fontWeight: 'bold',
                          paddingTop: '21px',
                          paddingBottom: '21px',
                        }}
                      >
                        {director?.name}
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
                >
                  Shareholding Details
                </td>
              </tr>
              <tr>
                <td
                  width="33%"
                  valign="middle"
                  style={{ borderRight: '2px solid #CAD6E6' }}
                >
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td align="center" style={{ padding: '35px' }}>
                        <img src={`${shareHoldingChartImg}`}></img>
                      </td>
                    </tr>
                    <tr>
                      <td valign="top" style={{ padding: '20px 35px' }}>
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          border="0"
                        >
                          <tr>
                            {top3Share.datasets &&
                              top3Share?.datasets[0]?.data.map((val, index) => {
                                return (
                                  <td
                                    align="center"
                                    style={{
                                      fontSize: '16px',
                                      color: '#111111',
                                      lineHeight: '19px',
                                      fontWeight: '500',
                                    }}
                                  >
                                    <span
                                      style={{
                                        background: `${backgroundColor[index]}`,
                                        borderRadius: '4px',
                                        width: '16px',
                                        height: '16px',
                                        display: 'inline-block',
                                      }}
                                    ></span>
                                    &nbsp;
                                    {top3Share.labels[index] == ''
                                      ? 'NA'
                                      : top3Share.labels[index]}
                                  </td>
                                )
                              })}
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td width="66%" valign="top">
                  <table
                    width="100%"
                    cellPadding="12"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr bgColor="#FAFAFB" style={{ height: '67px' }}>
                      <td
                        colSpan={2}
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
                              <td
                                width="5%"
                                height="60"
                                style={{
                                  padding: '21px 12px 21px 35px',
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
                                    display: 'inline-block',
                                  }}
                                >
                                  {fName?.charAt(0) ? fName?.charAt(0) : 'N'}
                                  {lName?.charAt(0) ? lName?.charAt(0) : 'A'}
                                </span>
                              </td>
                              <td
                                width="25%"
                                style={{
                                  fontSize: '20px',
                                  color: '#111111',
                                  lineHeight: '27px',
                                  fontWeight: 'bold',
                                  paddingTop: '21px',
                                  paddingBottom: '21px',
                                }}
                              >
                                {' '}
                                {share?.fullName}
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
                                {Number(share?.numberOfShares)?.toLocaleString(
                                  'en-In',
                                )}
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
                                {share?.percentageShareHolding
                                  ? Number(
                                      share?.percentageShareHolding,
                                    )?.toLocaleString('en-In', {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2,
                                    }) + '%'
                                  : ''}
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
                                {share?.director ? 'Yes' : 'No'}
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
                >
                  Open Bank Charge Details
                </td>
              </tr>
              <tr>
                <td
                  width="33%"
                  valign="middle"
                  style={{ borderRight: '2px solid #CAD6E6' }}
                >
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td align="center" style={{ padding: '35px' }}>
                        <img src={`${openBankChargeChartImg}`}></img>
                      </td>
                    </tr>
                    <tr>
                      <td valign="top" style={{ padding: '20px 35px' }}>
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          border="0"
                        >
                          <tr>
                            {top3Open.datasets &&
                              top3Open?.datasets[0]?.data.map((val, index) => {
                                return (
                                  <td
                                    align="center"
                                    style={{
                                      fontSize: '16px',
                                      color: '#111111',
                                      lineHeight: '19px',
                                      fontWeight: '500',
                                    }}
                                  >
                                    <span
                                      style={{
                                        background: `${backgroundColor[index]}`,
                                        borderRadius: '4px',
                                        width: '16px',
                                        height: '16px',
                                        display: 'inline-block',
                                      }}
                                    ></span>
                                    &nbsp;{' '}
                                    {top3Open.labels[index] == ''
                                      ? 'NA'
                                      : top3Open.labels[index]}
                                  </td>
                                )
                              })}
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td width="66%" valign="top">
                  <table
                    width="100%"
                    cellPadding="12"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr bgColor="#FAFAFB" style={{ height: '67px' }}>
                      <td
                        colSpan={2}
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
                              <td
                                width="5%"
                                height="60"
                                style={{
                                  padding: '21px 12px 21px 35px',
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
                                    display: 'inline-block',
                                  }}
                                >
                                  {' '}
                                  {fName?.charAt(0) ? fName?.charAt(0) : 'N'}
                                  {lName?.charAt(0) ? lName?.charAt(0) : 'A'}
                                </span>
                              </td>
                              <td
                                width="25%"
                                style={{
                                  fontSize: '20px',
                                  color: '#111111',
                                  lineHeight: '27px',
                                  fontWeight: 'bold',
                                  paddingTop: '21px',
                                  paddingBottom: '21px',
                                }}
                              >
                                {' '}
                                {charge?.nameOfChargeHolder1}
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
                                {Number(
                                  charge?.finalAmountSecured,
                                )?.toLocaleString('en-In')}
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
                                {charge?.dateOfCreationOfCharge
                                  ? moment(
                                      charge?.dateOfCreationOfCharge,
                                      'DD-MM-YYYY',
                                    ).format('DD-MM-YYYY')
                                  : ''}
                              </td>
                            </tr>
                          )
                        },
                      )}
                    <tr>
                      <td
                        width="5%"
                        height="60"
                        style={{
                          padding: '21px 12px 21px 35px',
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
                          IB
                        </span>
                      </td>
                      <td
                        width="25%"
                        style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '27px',
                          fontWeight: 'bold',
                          paddingTop: '21px',
                          paddingBottom: '21px',
                        }}
                      >
                        ICICI Bank
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
                        1,900.00
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
                        22-02-2020
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
                >
                  Debt Profile
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
                                    background: `${
                                      debt.conduct == 'Good'
                                        ? '#43C34D'
                                        : debt.conduct == 'Satisfactory'
                                        ? '#FF9D00'
                                        : debt.conduct == 'Average'
                                        ? 'average'
                                        : '#EA3F3F'
                                    }`,
                                    width: `${
                                      (Number(debt.limit) / 1900 > 1
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
                      ></td>
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
                >
                  Operational Details
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
                  {camData?.productSummary?.monthlyProductionCapacity
                    ? Number(
                        camData?.productSummary?.monthlyProductionCapacity,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                      })
                    : ''}{' '}
                  {camData?.productSummary?.monthlyProductionCapacity
                    ? 'MT'
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
                  {camData?.productSummary?.averageStockInTransit
                    ? Number(
                        camData?.productSummary?.averageStockInTransit,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                      })
                    : ''}{' '}
                  {camData?.productSummary?.averageStockInTransit ? 'MT' : ''}
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
                  {camData?.productSummary?.capacityUtilization?.toLocaleString(
                    'en-In',
                    {
                      maximumFractionDigits: 2,
                    },
                  )}{' '}
                  {camData?.productSummary?.capacityUtilization ? '%' : ''}
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
                  {camData?.productSummary?.averageStockOfCommodity?.toLocaleString(
                    'en-In',
                    {
                      maximumFractionDigits: 2,
                    },
                  )}{' '}
                  {camData?.productSummary?.averageStockOfCommodity
                    ? 'Days'
                    : ''}
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
                  {camData?.productSummary?.availableStock
                    ? Number(
                        camData?.productSummary?.availableStock,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                      })
                    : ''}{' '}
                  {camData?.productSummary?.availableStock ? 'MT' : ''}
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
                  {camData?.productSummary?.AvgMonthlyElectricityBill
                    ? '₹'
                    : ''}{' '}
                  {/* {checkNan(
                      Number(
                        camData?.productSummary?.AvgMonthlyElectricityBill,
                      ),
                      true,
                    )} */}
                  {camData?.productSummary?.AvgMonthlyElectricityBill
                    ? Number(
                        camData?.productSummary?.AvgMonthlyElectricityBill,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                      })
                    : ''}
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
                  {camData?.productSummary?.dailyConsumptionOfCommodity
                    ? Number(
                        camData?.productSummary?.dailyConsumptionOfCommodity,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                      })
                    : ''}{' '}
                  {camData?.productSummary?.dailyConsumptionOfCommodity
                    ? 'MT'
                    : ''}
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
                >
                  Revenue Details
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
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.grossTurnover?.current?.value),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
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
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.grossTurnover?.previous?.value),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
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
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.relatedPartySales?.current?.value),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(
                      Number(
                        RevenueDetails?.relatedPartySales?.previous?.value,
                      ),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
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
                    CovertvaluefromtoCR(
                      Number(
                        RevenueDetails?.intraOrgSalesPercent?.current?.value,
                      ),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(
                      Number(
                        RevenueDetails?.intraOrgSalesPercent?.previous?.value,
                      ),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
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
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.B2BSales?.current?.value),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.B2BSales?.previous?.value),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
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
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.B2CSales?.current?.value),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.B2CSales?.previous?.value),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
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
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.exportSales?.current?.value),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.exportSales?.previous?.value),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
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
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.ttlCustomer?.current?.value),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.ttlCustomer?.previous?.value),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
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
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.ttlInv?.current?.value),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
                </td>
                <td
                  style={{
                    fontSize: '19px',
                    color: '#111111',
                    lineHeight: '23px',
                  }}
                >
                  {checkNan(
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.ttlInv?.previous?.value),
                    ).toFixed(2),
                    true,
                  )}{' '}
                  Cr
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
                <td
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >
                  Trends
                </td>
                <td
                  height="78"
                  align="right"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '18px',
                    color: '#2837566A',
                    lineHeight: '23px',
                    fontWeight: 'bold',
                  }}
                >
                  Display By:{' '}
                  <span style={{ color: '#3687E8' }}>Quarterly</span>
                </td>
              </tr>
              <tr>
                <td
                  height="67"
                  bgColor="#FAFAFB"
                  width="50%"
                  style={{
                    fontSize: '22px',
                    color: '#111111',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                    padding: '0 35px',
                    borderRight: '2px solid #CAD6E6',
                  }}
                >
                  Gross Revenue{' '}
                  <span style={{ fontWeight: '500' }}>
                    :{' '}
                    {checkNan(
                      CovertvaluefromtoCR(
                        Number(
                          gstData?.detail?.salesDetailAnnual?.saleSummary
                            ?.grossTurnover?.current?.value,
                        ),
                      ).toFixed(2),
                      true,
                    )}{' '}
                    Cr
                  </span>
                </td>
                <td
                  height="67"
                  bgColor="#FAFAFB"
                  width="50%"
                  style={{
                    fontSize: '22px',
                    color: '#111111',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                    padding: '0 35px',
                  }}
                >
                  Gross Purchases{' '}
                  <span style={{ fontWeight: '500' }}>
                    :{' '}
                    {checkNan(
                      CovertvaluefromtoCR(
                        Number(
                          gstData?.detail?.purchaseDetailAnnual?.saleSummary
                            ?.grossPurchases?.current?.value,
                        ),
                      ).toFixed(2),
                      true,
                    )}{' '}
                    Cr
                  </span>
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  style={{ borderRight: '2px solid #CAD6E6', padding: '35px' }}
                >
                  <img src={`${trendChartRevenueImg}`}></img>
                </td>
                <td align="center" style={{ padding: '35px' }}>
                  <img src={`${trendChartPurchasesImg}`}></img>
                </td>
              </tr>
              <tr>
                <td
                  valign="top"
                  style={{ borderRight: '2px solid #CAD6E6', padding: '35px' }}
                >
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td
                        align="center"
                        style={{
                          fontSize: '16px',
                          color: '#111111',
                          lineHeight: '19px',
                          fontWeight: '500',
                        }}
                      >
                        <span
                          style={{
                            background: '#2979F2',
                            borderRadius: '4px',
                            width: '16px',
                            height: '16px',
                            display: 'inline-block',
                          }}
                        ></span>
                        &nbsp; Gross Revenue
                      </td>
                    </tr>
                  </table>
                </td>
                <td valign="top" style={{ padding: '35px' }}>
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td
                        align="center"
                        style={{
                          fontSize: '16px',
                          color: '#111111',
                          lineHeight: '19px',
                          fontWeight: '500',
                        }}
                      >
                        <span
                          style={{
                            background: '#FA5F1C',
                            borderRadius: '4px',
                            width: '16px',
                            height: '16px',
                            display: 'inline-block',
                          }}
                        ></span>
                        &nbsp; Gross Purchases
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
                  height="78"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >
                  Skewness
                </td>
                <td
                  height="78"
                  align="right"
                  style={{
                    padding: '0 35px',
                    borderBottom: '2px solid #CAD6E6',
                    fontSize: '18px',
                    color: '#2837566A',
                    lineHeight: '23px',
                    fontWeight: 'bold',
                  }}
                >
                  Display By:{' '}
                  <span style={{ color: '#3687E8' }}>Quarterly</span>
                </td>
              </tr>
              <tr>
                <td
                  height="67"
                  bgColor="#FAFAFB"
                  width="50%"
                  style={{
                    fontSize: '22px',
                    color: '#111111',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                    padding: '0 35px',
                    borderRight: '2px solid #CAD6E6',
                  }}
                >
                  Gross Revenue{' '}
                  <span style={{ fontWeight: '500' }}>
                    :{' '}
                    {checkNan(
                      CovertvaluefromtoCR(
                        Number(
                          gstData?.detail?.salesDetailAnnual?.saleSummary
                            ?.grossTurnover?.current?.value,
                        ),
                      ).toFixed(2),
                      true,
                    )}{' '}
                    Cr
                  </span>
                </td>
                <td
                  height="67"
                  bgColor="#FAFAFB"
                  width="50%"
                  style={{
                    fontSize: '22px',
                    color: '#111111',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                    padding: '0 35px',
                  }}
                >
                  Gross Purchases{' '}
                  <span style={{ fontWeight: '500' }}>
                    :{' '}
                    {checkNan(
                      CovertvaluefromtoCR(
                        Number(
                          gstData?.detail?.purchaseDetailAnnual?.saleSummary
                            ?.grossPurchases?.current?.value,
                        ),
                      ).toFixed(2),
                      true,
                    )}{' '}
                    Cr
                  </span>
                </td>
              </tr>
              <tr>
                <td
                  align="left"
                  valign="middle"
                  style={{ borderRight: '2px solid #CAD6E6' }}
                >
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td width="45%" style={{ padding: '35px' }}>
                        <img src={`${skewnessChartRevenueImg}`}></img>
                      </td>
                      <td width="55%" style={{ padding: '35px' }}>
                        <table
                          width="100%"
                          cellPadding="10"
                          cellSpacing="0"
                          border="0"
                        >
                          {top5Customers.datasets &&
                            top5Customers?.datasets[0]?.data?.map(
                              (val, index) => {
                                return (
                                  <tr>
                                    <td width="5%" align="left">
                                      <span
                                        style={{
                                          background: `${backgroundColor[index]}`,
                                          borderRadius: '4px',
                                          width: '16px',
                                          height: '16px',
                                          display: 'inline-block',
                                        }}
                                      ></span>
                                    </td>
                                    <td
                                      width="55%"
                                      align="left"
                                      style={{
                                        fontSize: '19px',
                                        color: '#111111',
                                        lineHeight: '23px',
                                      }}
                                    >
                                      {top5Customers.labels[index]}
                                    </td>
                                    <td
                                      width="40%"
                                      align="left"
                                      style={{
                                        fontSize: '19px',
                                        color: '#111111',
                                        lineHeight: '23px',
                                      }}
                                    >
                                      {((val / totalCustomer) * 100)?.toFixed(
                                        2,
                                      )}
                                      %
                                    </td>
                                  </tr>
                                )
                              },
                            )}
                          <tr>
                            <td width="5%" align="left">
                              <span
                                style={{
                                  background: '#61C555',
                                  borderRadius: '4px',
                                  width: '16px',
                                  height: '16px',
                                  display: 'inline-block',
                                }}
                              ></span>
                            </td>
                            <td
                              width="55%"
                              align="left"
                              style={{
                                fontSize: '19px',
                                color: '#111111',
                                lineHeight: '23px',
                              }}
                            >
                              Customer 1
                            </td>
                            <td
                              width="40%"
                              align="left"
                              style={{
                                fontSize: '19px',
                                color: '#111111',
                                lineHeight: '23px',
                              }}
                            >
                              83.80%
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td align="left" valign="middle">
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td width="45%" style={{ padding: '35px' }}>
                        <img src={`${skewnessChartPurchasesImg}`}></img>
                      </td>
                      <td width="45%" style={{ padding: '35px' }}>
                        <table
                          width="100%"
                          cellPadding="10"
                          cellSpacing="0"
                          border="0"
                        >
                          {top5Suppliers.datasets &&
                            top5Customers?.datasets[0]?.data?.map(
                              (val, index) => {
                                return (
                                  <tr>
                                    <td width="5%" align="left">
                                      <span
                                        style={{
                                          background: `${backgroundColor[index]}`,
                                          borderRadius: '4px',
                                          width: '16px',
                                          height: '16px',
                                          display: 'inline-block',
                                        }}
                                      ></span>
                                    </td>
                                    <td
                                      width="55%"
                                      align="left"
                                      style={{
                                        fontSize: '19px',
                                        color: '#111111',
                                        lineHeight: '23px',
                                      }}
                                    >
                                      {top5Suppliers.labels[index]}
                                    </td>
                                    <td
                                      width="40%"
                                      align="left"
                                      style={{
                                        fontSize: '19px',
                                        color: '#111111',
                                        lineHeight: '23px',
                                      }}
                                    >
                                      {((val / totalSupplier) * 100)?.toFixed(
                                        2,
                                      )}
                                      %
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
                >
                  Financial Summary
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
                              {convertValue(
                                _get(
                                  companyData,
                                  'financial.balanceSheet[0].equityLiabilities.totalEquity',
                                  '',
                                ),
                              ).toLocaleString('en-In', {
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
                              {convertValue(
                                _get(
                                  companyData,
                                  'financial.balanceSheet[1].equityLiabilities.totalEquity',
                                  '',
                                ),
                              ).toLocaleString('en-In', {
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
                              {convertValue(
                                Number(
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
                                ),
                              )?.toLocaleString('en-In', {
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
                              {convertValue(
                                Number(
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
                                ),
                              )?.toLocaleString('en-In', {
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
                              {convertValue(
                                Number(
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
                                ),
                              )?.toLocaleString('en-In', {
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
                              {convertValue(
                                Number(
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
                                ),
                              )?.toLocaleString('en-In', {
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
                              {convertValue(
                                _get(
                                  companyData,
                                  'financial.balanceSheet[0].equityLiabilities.otherCurrentLiabilities',
                                  '',
                                ),
                              )?.toLocaleString('en-In', {
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
                              {convertValue(
                                _get(
                                  companyData,
                                  'financial.balanceSheet[1].equityLiabilities.otherCurrentLiabilities',
                                  '',
                                ),
                              )?.toLocaleString('en-In', {
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
                        {convertValue(
                          _get(
                            companyData,
                            'financial.cashFlowStatement[0].cashFlowsFromUsedInOperatingActivities.cashFlowsFromUsedInOperatingActivities',
                            '',
                          ),
                        )?.toLocaleString('en-In', {
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
                        {convertValue(
                          _get(
                            companyData,
                            'financial.cashFlowStatement[1].cashFlowsFromUsedInOperatingActivities.cashFlowsFromUsedInOperatingActivities',
                            '',
                          ),
                        )?.toLocaleString('en-In', {
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
                        {convertValue(
                          _get(
                            companyData,
                            'financial.cashFlowStatement[0].cashFlowsFromUsedInFinancingActivities.cashFlowsFromUsedInFinancingActivities',
                            '',
                          ),
                        )?.toLocaleString('en-In', {
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
                        {convertValue(
                          _get(
                            companyData,
                            'financial.cashFlowStatement[1].cashFlowsFromUsedInFinancingActivities.cashFlowsFromUsedInFinancingActivities',
                            '',
                          ),
                        )?.toLocaleString('en-In', {
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
                        {convertValue(
                          _get(
                            companyData,
                            'financial.cashFlowStatement[0].cashFlowsFromUsedInInvestingActivities.cashFlowsFromUsedInInvestingActivities',
                            '',
                          ),
                        )?.toLocaleString('en-In', {
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
                        {convertValue(
                          _get(
                            companyData,
                            'financial.cashFlowStatement[1].cashFlowsFromUsedInInvestingActivities.cashFlowsFromUsedInInvestingActivities',
                            '',
                          ),
                        )?.toLocaleString('en-In', {
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
                >
                  Compliance Status
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
                  {[].forEach((l, index2) => {})}
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
                >
                  Strength &amp; Weakness
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
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAXCAYAAAD3CERpAAAABHNCSVQICAgIfAhkiAAAAX5JREFUSEu11bFKw0AYB/D/kVYXMYNz091Ni+AoWKEoFEf3voSTL+Hk0KWT5AG0nWo7OfgMAWNwsIKiKG0tPb8jjU3aSxpzl0AhvVz48b/77gtD3pcNA6bVBJ9eo+a1BcdyNQW4afXB2B44N4DpiYDzQ/2EfXBUKNj6LBwn+DgftIsCRgQCuyFwSPdvMAr7+tF40CPwEEeOqxdNAeotpJSgPrR7QHvoyPbwb0nDp0R9ea8qRZQHPUnRSEH1pA8Evv4PjKK3pTs6xPeoueepGkZGcI62yzcAr9LAD/0uV8ICHLyITrOzcA5jlzS6px3LpoFT6hzF2YPvRFgR9JN2SmfgrEX3ASrG5bC9vQbzs0fzMyUM0vrVmwbWBEYLKQn+2LiA+UUJuVLCaNLgXzz8TlO2shSN7CQsNwc5HH5XfC08jKl51x031fFamCTvSPHwkErvCaNJFfXnTGByR1qGtYCr2+Ac5pTwUTWhvJBkG+TDDYwnDZUljXakLJWg+M4vlf/IL1ywetEAAAAASUVORK5CYII="
                      alt="Check Green"
                    />
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
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAAPFBMVEUAAADyXV3zXFzxW1vzXV3zXFzzXl7zXV3zXl7zXl70Xl7sSUnsSkrsSUnrSEjsSEjsSUnqPz/qQUH///+61DrHAAAAEXRSTlMAiZCRkpOTlJjMzPLy8/T09AY8JhMAAAABYktHRBMMu1yWAAAAX0lEQVQY02WQgQ6AIAhErcwyM4P//9iuqcAGG+725u6AEFIMWjGhy7sLWO924CFBQy+FnrMDqO0XEwmYyAC4V6oX2qTCkslkojITZwvcH+fTU3QuiRWkcwzk9/K7u/t8WOgFmuDZzZMAAAAASUVORK5CYII="
                      width="27"
                      alt="Cross Red"
                    />
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
                <td
                  width="40%"
                  height="78"
                  style={{
                    padding: '0 35px',
                    fontSize: '22px',
                    color: '#3687E8',
                    lineHeight: '27px',
                    fontWeight: 'bold',
                  }}
                >
                  Sanction Terms
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
                    {addPrefixOrSuffix(
                      convertValue(
                        camData?.company?.creditLimit?.totalLimit,
                      )?.toLocaleString('en-In'),
                      'Cr',
                      '',
                    )}
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
                    {camData?.company?.creditLimit?.utilizedLimit?.toLocaleString(
                      'en-In',
                    )}
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
                    {camData?.company?.creditLimit?.availableLimit?.toLocaleString(
                      'en-In',
                    )}
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
                        {camData?.company?.creditLimit?.availableLimit?.toLocaleString(
                          'en-In',
                        )}
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
                            ;<td key={index}>
                              {val?.derived?.value?.toLocaleString('en-In')}
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
                            ;<td key={index}>
                              {checkNan(
                                convertValue(
                                  val?.suggested?.value,
                                )?.toLocaleString('en-In'),
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
                          convertValue(
                            camData?.suggestedOrderValue,
                          )?.toLocaleString('en-In', {
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
                        {camData?.cam?.approvedOrderValue?.toLocaleString(
                          'en-In',
                        )}
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
  console.log(filterType.class, 'filterType.class')
  useEffect(() => {
    if (companyData) {
      filterLitigation()
    }
  }, [companyData, filterType, filterType.class])
  const changeClass = (val) => {
    let filter = { ...filterType }
    filter.class = val
    setFilterType({ ...filter })
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
    console.log(filterType, 'filterType', companyData?.compliance?.highCourt)
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
    const filter = (val) => {
      if (filterType.filterBy.pending) {
        if (val.caseStatus == 'Pending') {
          console.log('thisisis')
          return val
        }
      }
      if (filterType.filterBy.disposed) {
        if (val.caseStatus == 'Disposed') {
          return val
        }
      }
      if (filterType.filterBy.total) {
        return val
      }
      if (filterType.filterBy.pending && filterType.filterBy.disposed) {
        if (val.caseStatus == 'Pending' || val.caseStatus == 'Disposed') {
          return val
        }
      }

      if (filterType.filterBy.pending && filterType.filterBy.total) {
        return val
      }
      if (filterType.filterBy.disposed && filterType.filterBy.total) {
        return val
      }
      if (
        filterType.filterBy.disposed &&
        filterType.filterBy.total &&
        filterType.filterBy.pending
      ) {
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
    console.log(highCourt, 'highCourt111')
    const civilfilter = (val) => {
      console.log(val.civilCriminal, 'val.civilCriminal')
      if (filterType.class == 'Criminal') {
        if (val.civilCriminal == 'Criminal') {
          console.log('1111111111')
          return val
        }
      }
      if (filterType.class == 'Civil') {
        if (val.civilCriminal == 'Civil') {
          return val
        }
      }
    }

    supremeCourt =
      supremeCourt.length <= 0
        ? companyData?.compliance?.supremeCourt?.cases?.filter((val) => {
            return civilfilter(val)
          })
        : supremeCourt?.filter((val) => {
            return civilfilter(val)
          })
    highCourt =
      highCourt.length <= 0
        ? companyData?.compliance?.highCourt?.cases?.filter((val) => {
            return civilfilter(val)
          })
        : highCourt?.filter((val) => {
            console.log(val, 'secodnoneene')
            return civilfilter(val)
          })

    tribunalCourts =
      tribunalCourts.length <= 0
        ? companyData?.compliance?.tribunalCourts?.cases?.filter((val) => {
            return civilfilter(val)
          })
        : tribunalCourts?.filter((val) => {
            return civilfilter(val)
          })
    districtCourt =
      tribunalCourts.length <= 0
        ? companyData?.compliance?.tribunalCourts?.cases?.filter((val) => {
            return civilfilter(val)
          })
        : districtCourt?.filter((val) => {
            return civilfilter(val)
          })
    console.log(highCourt, 'highCourt222')
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
  console.log(High, 'highCourtDisplay')
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
    datasets: [],
  })
  const [totalCustomer, setTotalCustomer1] = useState(0)
  const [totalSupplier, setTotalSupplier1] = useState(0)
  const [top5Suppliers, setTop5Suppliers1] = useState({
    labels: [],
    datasets: [],
  })
  const [top3Share, setTop3Share1] = useState({
    labels: [],
    datasets: [],
  })
  const [top3Open, setTop3Open1] = useState({
    labels: [],
    datasets: [],
  })
  const exportPDF = async () => {
    console.log(orderList, 'orderList')
    const doc = new jsPDF('p', 'pt', [1500, 1550])

    const trendChartRevenue = document.getElementById('trendChartRevenue')
    const trendChartRevenueImg = trendChartRevenue?.toDataURL('image/png', 1.0)
    const trendChartPurchases = document.getElementById('trendChartPurchases')
    const trendChartPurchasesImg = trendChartPurchases?.toDataURL(
      'image/png',
      1.0,
    )
    const skewnessChartPurchases = document.getElementById(
      'skewnessChartPurchases',
    )
    const skewnessChartPurchasesImg = skewnessChartPurchases?.toDataURL(
      'image/png',
      1.0,
    )
    const skewnessChartRevenue = document.getElementById('skewnessChartRevenue')
    const skewnessChartRevenueImg = skewnessChartRevenue?.toDataURL(
      'image/png',
      1.0,
    )
    const shareHoldingChart = document.getElementById('shareHoldingChart')
    const shareHoldingChartImg = shareHoldingChart?.toDataURL('image/png', 1.0)
    const openBankChargeChart = document.getElementById('openBankChargeChart')
    const openBankChargeChartImg = openBankChargeChart?.toDataURL(
      'image/png',
      1.0,
    )
    
 
    doc.html(
      ReactDOMServer.renderToString(
        toPrintPdf(
          orderList,
          gstData?.detail?.salesDetailAnnual?.saleSummary,
          trendChartRevenueImg,
          trendChartPurchasesImg,
          skewnessChartRevenueImg,
          skewnessChartPurchasesImg,
          shareHoldingChartImg,
          openBankChargeChartImg,
         
        ),
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
                                    checked={filterType.class == 'Civil'}
                                    onClick={() => {
                                      changeClass('Civil')
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
                                    checked={filterType.class == 'Criminal'}
                                    onClick={() => {
                                      changeClass('Criminal')
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
        <span className="accordion_Text">Last Modified:</span>
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
      result = val.replace('is', '')
    }
    result = result.replace(/[A-Z]/g, ' $&').trim()
    if (remove) {
      let caps = ''
      let myArray = result.split(' ')
      if (myArray.length > 1) {
        console.log(myArray, 'myArray')
        const getText = (arr) => {
          let text = ''
          arr.forEach((val, index) => {
            if (index > 0) {
              text = `${text} ${val}`
            }
          })
          console.log(text, 'etxtxttx')
          return text
        }
        if (myArray[0] == 'Gst' || myArray[0] == 'Epf' || myArray[0] == 'Tan') {
          caps = myArray[0].toUpperCase()
          result = `${caps} ${getText(myArray)}`
        }
      }
    }
    console.log(result, 'caps')
    if (result == 'Ibbi') {
      result = 'IBBI'
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
          <td
            className={`${styles.firstCell} text-nowrap`}
            rowSpan={length + 3}
          >
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
              {
                console.log(alert.source, 'alert.value')
              }
              return (
                <tr key={index}>
                  <td className="text-capitalize">
                    {' '}
                    {addSpace(alert.alert, true)}
                  </td>
                  <td className="text-capitalize">
                    {' '}
                    {addSpace(alert.severity)}
                  </td>
                  <td className="text-capitalize">
                    {alert.source.toUpperCase()}
                  </td>
                  <td className="text-capitalize">
                    {' '}
                    {alert.idType == 'ids' ? 'IDS' : addSpace(alert.idType)}
                  </td>
                  <td className="text-capitalize">
                    {' '}
                    {alert?.value?.length > 1 ? (
                      <>
                        {alert.value.map((val, index) => {
                          return (
                            <>
                              {val}
                              {index !== alert.value.length - 1 ? ', ' : ''}
                            </>
                          )
                        })}
                      </>
                    ) : (
                      <>
                        {alert.idType == 'dateOfIssuance'
                          ? moment(alert.value).format('DD-MM-YYYY')
                          : alert.value}
                      </>
                    )}
                  </td>
                </tr>
              )
            })
          : balance.length > 0 &&
            balance?.map((alert, index) => {
              return (
                <tr key={index}>
                  <td className="text-capitalize">
                    {' '}
                    {addSpace(alert.alert, true)}
                  </td>
                  <td className="text-capitalize">
                    {' '}
                    {addSpace(alert.severity)}
                  </td>
                  <td className="text-capitalize">
                    {alert.source.toUpperCase()}
                  </td>
                  <td className="text-capitalize">
                    {' '}
                    {alert.idType == 'ids' ? 'IDS' : addSpace(alert.idType)}
                  </td>
                  <td className="text-capitalize">
                    {' '}
                    {alert?.value?.length > 1 ? (
                      <>
                        {alert.value.map((val, index) => {
                          return (
                            <>
                              {val}
                              {index !== alert.value.length - 1 ? ', ' : ''}
                            </>
                          )
                        })}
                      </>
                    ) : (
                      <>
                        {alert.idType == 'dateOfIssuance'
                          ? moment(alert.value).format('DD-MM-YYYY')
                          : alert.value}
                      </>
                    )}
                  </td>
                </tr>
              )
            })}
        {complienceFilter == 'All' ? (
          <>
            {sat.length &&
              sat?.map((alert, index) => {
                return (
                  <tr key={index}>
                    <td className="text-capitalize">
                      {' '}
                      {addSpace(alert.alert, true)}
                    </td>
                    <td className="text-capitalize">
                      {' '}
                      {addSpace(alert.severity)}
                    </td>
                    <td className="text-capitalize">
                      {alert.source.toUpperCase()}
                    </td>
                    <td className="text-capitalize">
                      {' '}
                      {alert.idType == 'ids' ? 'IDS' : addSpace(alert.idType)}
                    </td>
                    <td className="text-capitalize">
                      {' '}
                      {alert?.value?.length > 1 ? (
                        <>
                          {alert.value.map((val, index) => {
                            return (
                              <>
                                {val}
                                {index !== alert.value.length - 1 ? ', ' : ''}
                              </>
                            )
                          })}
                        </>
                      ) : (
                        <>
                          {alert.idType == 'dateOfIssuance'
                            ? moment(alert.value).format('DD-MM-YYYY')
                            : alert.value}
                        </>
                      )}
                    </td>
                  </tr>
                )
              })}
            {balance.length > 0 &&
              balance?.map((alert, index) => {
                return (
                  <tr key={index}>
                    <td className="text-capitalize">
                      {' '}
                      {addSpace(alert.alert, true)}
                    </td>
                    <td className="text-capitalize">
                      {' '}
                      {addSpace(alert.severity)}
                    </td>
                    <td className="text-capitalize">
                      {alert.source.toUpperCase()}
                    </td>
                    <td className="text-capitalize">
                      {' '}
                      {alert.idType == 'ids' ? 'IDS' : addSpace(alert.idType)}
                    </td>
                    <td className="text-capitalize">
                      {' '}
                      {alert?.value?.length > 1 ? (
                        <>
                          {alert.value.map((val, index) => {
                            return (
                              <>
                                {val}
                                {index !== alert.value.length - 1 ? ', ' : ''}
                              </>
                            )
                          })}
                        </>
                      ) : (
                        <>
                          {alert.idType == 'dateOfIssuance'
                            ? moment(alert.value).format('DD-MM-YYYY')
                            : alert.value}
                        </>
                      )}
                    </td>
                  </tr>
                )
              })}
          </>
        ) : null}
      </tbody>
    </table>
  )
}
