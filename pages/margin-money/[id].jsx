/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import RevisedMargin from '../../src/components/RevisedMargin'
import { Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import _get from 'lodash/get'
import UploadOther from '../../src/components/UploadOther'
import DownloadBar from '../../src/components/DownloadBar'
import Router from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import {
  UpdateMarginMoney,
  GetMarginMoney,
  RevisedMarginMoney,
} from '../../src/redux/marginMoney/action'
import {
  setPageName,
  setDynamicName,
  setDynamicOrder,
} from '../../src/redux/userData/action'
import { addPrefixOrSuffix, checkNan, convertValue } from '../../src/utils/helper'
import { GetAllOrders } from '../../src/redux/registerBuyer/action'
// import { Row, Col } from 'react-bootstrap'
import jsPDF from 'jspdf'
import ReactDOMServer from 'react-dom/server'
import moment from 'moment'

function Index() {

  const dispatch = useDispatch()

  const [darkMode, setDarkMode] = useState(false)
  const [isFieldInFocus, setIsFieldInFocus] = useState(true)

  const { margin } = useSelector((state) => state.marginMoney)
  // get gst list from below use effect and fetch data from selector
  const { orderList } = useSelector((state) => state.buyer)

  const marginData = _get(margin, 'data.data[0]', '')


  let id = sessionStorage.getItem('marginId')

  const [unit, setUnit] = useState({ value: 'Crores' })
  const [coversionUnit, setCoversionUnit] = useState(10000000)

  const RevisedMarginMoneyTrue = _get(
    margin,
    'data.data[0].revisedMarginMoney.isActive',
    false,
  )
  
  useEffect(() => {
    let id = sessionStorage.getItem('marginId')

    dispatch(GetMarginMoney({ orderId: id }))
    dispatch(GetAllOrders({ orderId: id }))
    dispatch(setPageName('margin-money'))
    dispatch(setDynamicName(marginData?.company?.companyName))
    dispatch(setDynamicOrder(marginData?.order?.orderId))
  }, [dispatch, marginData?.company?.companyName])

  useEffect(() => {
    if (
      localStorage.getItem('darkMode') == 'true' ||
      localStorage.getItem('darkMode') == true
    ) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  const [forCalculation, setForCalculation] = useState({
    isUsanceInterestIncluded: marginData?.isUsanceInterestIncluded || true,
    status: marginData?.status || '',
    quantity: marginData?.order?.quantity || '',
    additionalPDC: marginData?.additionalPDC || '',
    conversionRate: marginData?.conversionRate || '',
    perUnitPrice: marginData?.order?.perUnitPrice || '',
    usanceInterestPercentage:
      marginData?.order?.termsheet?.commercials?.usanceInterestPercetage || '',
    numberOfPDC: marginData?.numberOfPDC || '',
    tradeMarginPercentage:
      marginData?.order?.termsheet?.commercials?.tradeMarginPercentage || '',
    tolerance: marginData?.order?.tolerance || '',
    marginMoney:
      marginData?.order?.termsheet?.transactionDetails?.marginMoney || '',
  })

  // console.log(marginData?.order?.quantity, ' marginData?.order?.quantity')
  const saveForCalculation = (name, value) => {
    const newInput = { ...forCalculation }
    newInput[name] = value
    // console.log(newInput)
    setForCalculation(newInput)
    getData2()
    getRevisedData2()
  }

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
  })

  useEffect(() => {
    getData()
  }, [marginData])

  const getData = () => {
    setForCalculation({
      isUsanceInterestIncluded: marginData?.isUsanceInterestIncluded || true,
      status: marginData?.status,
      quantity: marginData?.order?.quantity,
      additionalPDC: marginData?.additionalPDC,
      conversionRate: marginData?.conversionRate,
      perUnitPrice: marginData?.order?.perUnitPrice,
      usanceInterestPercentage:
        marginData?.order?.termsheet?.commercials?.usanceInterestPercetage,
      numberOfPDC: marginData?.numberOfPDC,
      tradeMarginPercentage:
        marginData?.order?.termsheet?.commercials?.tradeMarginPercentage,
      tolerance: marginData?.order?.tolerance,
      marginMoney:
        marginData?.order?.termsheet?.transactionDetails?.marginMoney,
    })
    let orderValue = parseFloat(
      Number(forCalculation.quantity) * Number(forCalculation.perUnitPrice),
    ).toFixed(2) //J
    let orderValueCurrency = 'USD'
    let orderValueInINR = parseFloat(
      Number(orderValue) * Number(forCalculation.conversionRate),
    ).toFixed(2) //K
    let usanceInterest = parseFloat(
      (Number(orderValueInINR) *
        (forCalculation.isUsanceInterestIncluded
          ? Number(forCalculation.usanceInterestPercentage / 100)
          : 1) *
        90) /
      365,
    ).toFixed(2) //L
    let tradeMargin = parseFloat(
      Number(orderValueInINR) *
      Number(Number(forCalculation.tradeMarginPercentage) / 100),
    ).toFixed(2) //M
    let grossOrderValue = parseFloat(
      Number(orderValueInINR) + Number(usanceInterest) + Number(tradeMargin),
    ).toFixed(2) //N
    let toleranceValue = parseFloat(
      Number(grossOrderValue) * Number(forCalculation.tolerance / 100),
    ).toFixed(2) //O
    let totalOrderValue = parseFloat(
      Number(grossOrderValue) + Number(toleranceValue),
    ).toFixed(2) //P
    let provisionalUnitPricePerTon = parseFloat(
      Number(grossOrderValue) / Number(forCalculation.quantity),
    ).toFixed(2) //Q
    let marginMoney = parseFloat(
      Number(totalOrderValue) *
      Number(Number(forCalculation.marginMoney) / 100),
    ).toFixed(2) //R
    let totalSPDC = parseFloat(
      Number(totalOrderValue) - Number(marginMoney),
    ).toFixed(2) //S
    let amountPerSPDC = parseFloat(
      Number(totalSPDC) / Number(forCalculation.numberOfPDC),
    ).toFixed(2) //T

    // console.log(orderValue, 'orderValue')
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
    })
  }
  useEffect(() => {
    getData2()
  }, [forCalculation])

  const getData2 = () => {
    let orderValue = parseFloat(
      Number(forCalculation.quantity) * Number(forCalculation.perUnitPrice),
    ).toFixed(2) //J
    let orderValueCurrency = 'USD'
    let orderValueInINR = parseFloat(
      Number(orderValue) * Number(forCalculation.conversionRate),
    ).toFixed(2) //K
    let usanceInterest = parseFloat(
      (Number(orderValueInINR) *
        (forCalculation.isUsanceInterestIncluded
          ? Number(forCalculation.usanceInterestPercentage / 100)
          : 0) *
        90) /
      365,
    ).toFixed(2) //L
    let tradeMargin = parseFloat(
      Number(orderValueInINR) *
      Number(Number(forCalculation.tradeMarginPercentage) / 100),
    ).toFixed(2) //M
    let grossOrderValue = parseFloat(
      Number(orderValueInINR) + Number(usanceInterest) + Number(tradeMargin),
    ).toFixed(2) //N
    let toleranceValue = parseFloat(
      Number(grossOrderValue) * Number(forCalculation.tolerance / 100),
    ).toFixed(2) //O
    let totalOrderValue = parseFloat(
      Number(grossOrderValue) + Number(toleranceValue),
    ).toFixed(2) //P
    let provisionalUnitPricePerTon = parseFloat(
      Number(grossOrderValue) / Number(forCalculation.quantity),
    ).toFixed(2) //Q
    let marginMoney = parseFloat(
      Number(totalOrderValue) *
      Number(Number(forCalculation.marginMoney) / 100),
    ).toFixed(2) //R
    let totalSPDC = parseFloat(
      Number(totalOrderValue) - Number(marginMoney),
    ).toFixed(2) //S
    let amountPerSPDC = parseFloat(
      Number(totalSPDC) / Number(forCalculation.numberOfPDC),
    ).toFixed(2) //T

    // console.log(orderValue, 'orderValue')
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
    })
  }

  const routeChange = () => {
    Router.push('/margin-preview')
  }

  const [invoiceData, setInvoiceData] = useState({})
  useEffect(() => {
    if (marginData) {
      setInvoiceData({
        buyerName: marginData?.company?.companyName || '',
        buyerGSTIN: marginData?.invoiceDetail?.buyerGSTIN || '',
        buyerAddress: marginData?.invoiceDetail?.buyerAddress || '',
        isConsigneeSameAsBuyer: marginData?.invoiceDetail?.isConsigneeSameAsBuyer || false,
        consigneeName: marginData?.invoiceDetail?.consigneeName || '',
        consigneeGSTIN: marginData?.invoiceDetail?.consigneeGSTIN || '',
        consigneeAddress: marginData?.invoiceDetail?.consigneeAddress || '',
        importerName: marginData?.invoiceDetail?.importerName || '',
        branchOffice: marginData?.invoiceDetail?.branchOffice || '',
        companyAddress: marginData?.invoiceDetail?.companyAddress || '',
        importerGSTIN: marginData?.invoiceDetail?.importerGSTIN || '',
        bankName: marginData?.invoiceDetail?.bankName || '',
        branch: marginData?.invoiceDetail?.branch || '',
        branchAddress: marginData?.invoiceDetail?.branchAddress || '',
        IFSCcode: marginData?.invoiceDetail?.IFSCcode || '',
        accountNo: marginData?.invoiceDetail?.accountNo || '123456',
      })
    }
  }, [marginData])
 


  const saveInvoiceData = (name, value) => {
    // console.log(value, 'invoice data value', name)
    const newInput = { ...invoiceData }

    newInput[name] = value

    // console.log(newInput, 'nnto', name, value)


    if (invoiceData?.isConsigneeSameAsBuyer == true) {
      if (name == "buyerName") {
        let a = "consigneeName"
        newInput[a] = value
      }
      if (name == "buyerGSTIN") {
        let a = "consigneeGSTIN"
        newInput[a] = value
      }
      if (name == "buyerAddress") {
        let a = "consigneeAddress"
        newInput[a] = value
      }

    }
    setInvoiceData({ ...newInput })
  }

 

  let emergent = {
    companyName: 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED',
    branch: 'DELHI',
    state: 'DELHI',
    address: '8B, SAGAR, 6 TILAK MARG, NEW DELHI - 110001',
    GSTIN: '07AAACS8253L1Z0',
  }

  let indoGerman = {
    companyName: 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED',
    branch: 'SURAT',
    state: 'GUJARAT',
    address:
      'PLOT NO-A 54, GANGA NAGAR SOCIETY, NEAR PALANPUR PATIA, RANDAR ROAD, SURAT-395009',
    GSTIN: '24AAACI3028D1Z8',
  }

  const [changeImporterData, setChangeImporterData] = useState()

  const dropDownChange = (name, value) => {
    if (value === 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED') {
      setChangeImporterData({ ...emergent })
      const newInput = { ...invoiceData }
      newInput['importerName'] = emergent.companyName
      newInput['branchOffice'] = emergent.branch
      newInput['importerGSTIN'] = emergent.GSTIN
      newInput['companyAddress'] = emergent.address
      // saveInvoiceData('branchOffice', emergent.branch)
      // saveInvoiceData('importerGSTIN', emergent.GSTIN)
      // saveInvoiceData('companyAddress', emergent.address)
      setInvoiceData({ ...newInput })
    } else if (value === 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED') {
      setChangeImporterData({ ...indoGerman })
      const newInput = { ...invoiceData }
      newInput['importerName'] = indoGerman.companyName
      newInput['branchOffice'] = indoGerman.branch
      newInput['importerGSTIN'] = indoGerman.GSTIN
      newInput['companyAddress'] = indoGerman.address
      // saveInvoiceData('branchOffice', emergent.branch)
      // saveInvoiceData('importerGSTIN', emergent.GSTIN)
      // saveInvoiceData('companyAddress', emergent.address)
      setInvoiceData({ ...newInput })
    }
  }
  const changeImporter = (e) => {
    if (e.target.name == 'branchOffice') {
      changeImporterData.branch = e.target.value
      setChangeImporterData({ ...changeImporterData })
    }
    if (e.target.name == 'companyAddress') {
      changeImporterData.address = e.target.value
      setChangeImporterData({ ...changeImporterData })
    }
    if (e.target.name == 'importerGSTIN') {
      changeImporterData.GSTIN = e.target.value
      setChangeImporterData({ ...changeImporterData })
    }
  }


  const setSame = (val) => {
    if (val == true) {
      setInvoiceData({
        ...invoiceData,
        consigneeName: invoiceData.buyerName,
        consigneeGSTIN: invoiceData.buyerGSTIN,
        consigneeAddress: invoiceData.buyerAddress,
      })
    } else {
      setInvoiceData({
        ...invoiceData,
        consigneeName: '',
        consigneeGSTIN: '',
        consigneeAddress: '',
      })
    }
  }
  const validate = () => {
    if (invoiceData.buyerName === null || invoiceData.buyerName === undefined || invoiceData.buyerName === '') {
      let toastMessage = 'Please add buyer name'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (invoiceData.buyerGSTIN === null || invoiceData.buyerGSTIN === undefined || invoiceData.buyerGSTIN === '') {
      let toastMessage = 'Please add buyer gstin'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (invoiceData.buyerAddress === null || invoiceData.buyerAddress === undefined || invoiceData.buyerAddress === '') {
      let toastMessage = 'Please add buyer address'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (invoiceData.consigneeName === null || invoiceData.consigneeName === undefined || invoiceData.consigneeName === '') {
      let toastMessage = 'Please add consignee Name'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (invoiceData.consigneeGSTIN === null || invoiceData.consigneeGSTIN === undefined || invoiceData.consigneeGSTIN === '') {
      let toastMessage = 'Please add consignee gstin'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (invoiceData.consigneeAddress === null || invoiceData.consigneeAddress === undefined || invoiceData.consigneeAddress === '') {
      let toastMessage = 'Please add consignee address'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (invoiceData.importerName === null || invoiceData.importerName === undefined || invoiceData.importerName === '') {
      let toastMessage = 'Please add importer name'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (invoiceData.branchOffice === null || invoiceData.branchOffice === undefined || invoiceData.branchOffice === '') {
      let toastMessage = 'Please add branch Office'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (invoiceData.companyAddress === null || invoiceData.companyAddress === undefined || invoiceData.companyAddress === '') {
      let toastMessage = 'Please add company Address'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (invoiceData.importerGSTIN === null || invoiceData.importerGSTIN === undefined || invoiceData.importerGSTIN === '') {
      let toastMessage = 'Please add importer GSTIN'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (invoiceData.bankName === null || invoiceData.bankName === undefined || invoiceData.bankName === '') {
      let toastMessage = 'Please add bank Name'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (invoiceData.branch === null || invoiceData.branch === undefined || invoiceData.branch === '') {
      let toastMessage = 'Please add branch'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (invoiceData.branch === null || invoiceData.branch === undefined || invoiceData.branch === '') {
      let toastMessage = 'Please add branch'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (invoiceData.branchAddress === null || invoiceData.branchAddress === undefined || invoiceData.branchAddress === '') {
      let toastMessage = 'Please add branch Address'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (invoiceData.IFSCcode === null || invoiceData.IFSCcode === undefined || invoiceData.IFSCcode === '') {
      let toastMessage = 'Please add  IFSC code'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    if (invoiceData.accountNo === null || invoiceData.accountNo === undefined || invoiceData.accountNo === '') {
      let toastMessage = 'Please add  account No'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
    }
    return true
  }
  const handleUpdate = async() => {
    if (validate()) {


      let obj = {
        marginMoneyId: marginData?._id,
        conversionRate: forCalculation.conversionRate,
        isUsanceInterestIncluded: forCalculation.isUsanceInterestIncluded || true,
        numberOfPDC: forCalculation.numberOfPDC,
        additionalPDC: forCalculation.additionalPDC,
        invoiceDetail: { ...invoiceData },
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
          orderValue: finalCal.orderValue
        },
      }
      // if (
      //   marginData?.order?.perUnitPrice !== forCalculation.perUnitPrice ||
      //   marginData?.order?.quantity !== forCalculation.quantity
      // ) {
      //   obj = {
      //     ...obj,
      //     orderObj: {
      //       quantity: forCalculation.quantity,
      //       perUnitPrice: forCalculation.perUnitPrice,
      //       orderValue:finalCal.orderValue
      //     },
      //   }
      // }

      dispatch(UpdateMarginMoney(obj))
    }
  }

  // RevisedMargin Money New Calculation

  const [forCalculationRevised, setforCalculationRevised] = useState({
    isUsanceInterestIncluded: marginData?.isUsanceInterestIncluded || true,
    status: marginData?.status || '',
    quantity: marginData?.order?.quantity || '',
    additionalPDC: marginData?.additionalPDC || '',
    conversionRate: marginData?.conversionRate || '',
    perUnitPrice: marginData?.order?.perUnitPrice || '',
    usanceInterestPercentage:
      marginData?.order?.termsheet?.commercials?.usanceInterestPercetage || '',
    numberOfPDC: marginData?.numberOfPDC || '',
    tradeMarginPercentage:
      marginData?.order?.termsheet?.commercials?.tradeMarginPercentage || '',
    tolerance: marginData?.order?.tolerance || '',
    marginMoney:
      marginData?.order?.termsheet?.transactionDetails?.marginMoney || '',
  })

  // console.log(marginData?.order?.quantity, ' marginData?.order?.quantity')
  const saveforCalculationRevised = (name, value) => {
    const newInput = { ...forCalculationRevised }
    newInput[name] = value
    // console.log(newInput)
    setforCalculationRevised(newInput)
    getDataRevised()
    getRevisedData2()
  }

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
  })

  useEffect(() => {
    getDataRevised2()
  }, [marginData])

  const getDataRevised2 = () => {
    setforCalculationRevised({
      isUsanceInterestIncluded: marginData?.isUsanceInterestIncluded || true,
      status: marginData?.status,
      quantity: marginData?.order?.quantity,
      additionalPDC: marginData?.additionalPDC,
      conversionRate: marginData?.conversionRate,
      perUnitPrice: marginData?.order?.perUnitPrice,
      usanceInterestPercentage:
        marginData?.order?.termsheet?.commercials?.usanceInterestPercetage,
      numberOfPDC: marginData?.numberOfPDC,
      tradeMarginPercentage:
        marginData?.order?.termsheet?.commercials?.tradeMarginPercentage,
      tolerance: marginData?.order?.tolerance,
      marginMoney:
        marginData?.order?.termsheet?.transactionDetails?.marginMoney,
    })
    let orderValue = parseFloat(
      Number(forCalculationRevised.quantity) * Number(forCalculationRevised.perUnitPrice),
    ).toFixed(2) //J
    let orderValueCurrency = 'USD'
    let orderValueInINR = parseFloat(
      Number(orderValue) * Number(forCalculationRevised.conversionRate),
    ).toFixed(2) //K
    let usanceInterest = parseFloat(
      (Number(orderValueInINR) *
        (forCalculationRevised.isUsanceInterestIncluded
          ? Number(forCalculationRevised.usanceInterestPercentage / 100)
          : 1) *
        90) /
      365,
    ).toFixed(2) //L
    let tradeMargin = parseFloat(
      Number(orderValueInINR) *
      Number(Number(forCalculationRevised.tradeMarginPercentage) / 100),
    ).toFixed(2) //M
    let grossOrderValue = parseFloat(
      Number(orderValueInINR) + Number(usanceInterest) + Number(tradeMargin),
    ).toFixed(2) //N
    let toleranceValue = parseFloat(
      Number(grossOrderValue) * Number(forCalculationRevised.tolerance / 100),
    ).toFixed(2) //O
    let totalOrderValue = parseFloat(
      Number(grossOrderValue) + Number(toleranceValue),
    ).toFixed(2) //P
    let provisionalUnitPricePerTon = parseFloat(
      Number(grossOrderValue) / Number(forCalculationRevised.quantity),
    ).toFixed(2) //Q
    let marginMoney = parseFloat(
      Number(totalOrderValue) *
      Number(Number(forCalculationRevised.marginMoney) / 100),
    ).toFixed(2) //R
    let totalSPDC = parseFloat(
      Number(totalOrderValue) - Number(marginMoney),
    ).toFixed(2) //S
    let amountPerSPDC = parseFloat(
      Number(totalSPDC) / Number(forCalculationRevised.numberOfPDC),
    ).toFixed(2) //T

    // console.log(orderValue, 'orderValue')
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
    })
  }
  useEffect(() => {
    getDataRevised()
  }, [forCalculationRevised])

  const getDataRevised = () => {
    let orderValue = parseFloat(
      Number(forCalculationRevised.quantity) * Number(forCalculationRevised.perUnitPrice),
    ).toFixed(2) //J
    let orderValueCurrency = 'USD'
    let orderValueInINR = parseFloat(
      Number(orderValue) * Number(forCalculationRevised.conversionRate),
    ).toFixed(2) //K
    let usanceInterest = parseFloat(
      (Number(orderValueInINR) *
        (forCalculationRevised.isUsanceInterestIncluded
          ? Number(forCalculationRevised.usanceInterestPercentage / 100)
          : 0) *
        90) /
      365,
    ).toFixed(2) //L
    let tradeMargin = parseFloat(
      Number(orderValueInINR) *
      Number(Number(forCalculationRevised.tradeMarginPercentage) / 100),
    ).toFixed(2) //M
    let grossOrderValue = parseFloat(
      Number(orderValueInINR) + Number(usanceInterest) + Number(tradeMargin),
    ).toFixed(2) //N
    let toleranceValue = parseFloat(
      Number(grossOrderValue) * Number(forCalculationRevised.tolerance / 100),
    ).toFixed(2) //O
    let totalOrderValue = parseFloat(
      Number(grossOrderValue) + Number(toleranceValue),
    ).toFixed(2) //P
    let provisionalUnitPricePerTon = parseFloat(
      Number(grossOrderValue) / Number(forCalculationRevised.quantity),
    ).toFixed(2) //Q
    let marginMoney = parseFloat(
      Number(totalOrderValue) *
      Number(Number(forCalculationRevised.marginMoney) / 100),
    ).toFixed(2) //R
    let totalSPDC = parseFloat(
      Number(totalOrderValue) - Number(marginMoney),
    ).toFixed(2) //S
    let amountPerSPDC = parseFloat(
      Number(totalSPDC) / Number(forCalculationRevised.numberOfPDC),
    ).toFixed(2) //T

    // console.log(orderValue, 'orderValue')
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
    })
  }

  const [revisedCalc, setRevisedCalc] = useState({
    additionalAmountPerPDC:
      marginData?.revisedMarginMoney?.calculation?.additionalAmountPerPDC,
    revisedNetOrderValue:
      marginData?.revisedMarginMoney?.calculation?.revisedNetOrderValue,
    marginMoney: marginData?.revisedMarginMoney?.calculation?.marginMoney,
    revisedMarginMoney:
      marginData?.calculation?.marginMoney,
    marginMoneyReceived:
      marginData?.revisedMarginMoney?.calculation?.marginMoneyReceived,
    marginMoneyPayable:
      marginData?.revisedMarginMoney?.calculation?.marginMoneyPayable,
  })

  const [calcRevised, setCalcRevised] = useState({
    additionalAmountPerPDC: '',
    revisedNetOrderValue: '',
    marginMoney: '',
    revisedMarginMoney: '',
    marginMoneyReceived: '',
    marginMoneyPayable: '',
  })

  

  const [invoiceDataRevised, setInvoiceDataRevised] = useState({
    buyerName: marginData?.company?.companyName || '',
    buyerGSTIN: marginData?.revisedMarginMoney?.invoiceDetail?.buyerGSTIN || '',
    buyerAddress:
      marginData?.revisedMarginMoney?.invoiceDetail?.buyerAddress || '',
    isConsigneeSameAsBuyer:
      marginData?.revisedMarginMoney?.invoiceDetail?.isConsigneeSameAsBuyer,
    consigneeName:
      marginData?.revisedMarginMoney?.invoiceDetail?.consigneeName || '',
    consigneeGSTIN:
      marginData?.revisedMarginMoney?.invoiceDetail?.consigneeGSTIN || '',
    consigneeAddress:
      marginData?.revisedMarginMoney?.invoiceDetail?.consigneeAddress || '',
    importerName:
      marginData?.revisedMarginMoney?.invoiceDetail?.importerName || '',
    branchOffice:
      marginData?.revisedMarginMoney?.invoiceDetail?.branchOffice || '',
    companyAddress:
      marginData?.revisedMarginMoney?.invoiceDetail?.companyAddress || '',
    importerGSTIN:
      marginData?.revisedMarginMoney?.invoiceDetail?.importerGSTIN || '',
    bankName: marginData?.revisedMarginMoney?.invoiceDetail?.bankName || '',
    branch: marginData?.revisedMarginMoney?.invoiceDetail?.branch || 'Connaught Place, DELHI',
    branchAddress:
      marginData?.revisedMarginMoney?.invoiceDetail?.branchAddress || '',
    IFSCcode: marginData?.revisedMarginMoney?.invoiceDetail?.IFSCcode || '',
    accountNo: marginData?.revisedMarginMoney?.invoiceDetail?.accountNo || '',
  })

  useEffect(() => {
    getRevisedData()

    setInvoiceDataRevised({
      buyerName: marginData?.company?.companyName || '',
      buyerGSTIN: marginData?.revisedMarginMoney?.invoiceDetail?.buyerGSTIN || '',
      buyerAddress:
        marginData?.revisedMarginMoney?.invoiceDetail?.buyerAddress || '',
      isConsigneeSameAsBuyer:
        marginData?.revisedMarginMoney?.invoiceDetail?.isConsigneeSameAsBuyer,
      consigneeName:
        marginData?.revisedMarginMoney?.invoiceDetail?.consigneeName || '',
      consigneeGSTIN:
        marginData?.revisedMarginMoney?.invoiceDetail?.consigneeGSTIN || '',
      consigneeAddress:
        marginData?.revisedMarginMoney?.invoiceDetail?.consigneeAddress || '',
      importerName:
        marginData?.revisedMarginMoney?.invoiceDetail?.importerName || '',
      branchOffice:
        marginData?.revisedMarginMoney?.invoiceDetail?.branchOffice || '',
      companyAddress:
        marginData?.revisedMarginMoney?.invoiceDetail?.companyAddress || '',
      importerGSTIN:
        marginData?.revisedMarginMoney?.invoiceDetail?.importerGSTIN || '',
      bankName: marginData?.revisedMarginMoney?.invoiceDetail?.bankName || '',
      branch: marginData?.revisedMarginMoney?.invoiceDetail?.branch || '',
      branchAddress:
        marginData?.revisedMarginMoney?.invoiceDetail?.branchAddress || '',
      IFSCcode: marginData?.revisedMarginMoney?.invoiceDetail?.IFSCcode || '',
      accountNo: marginData?.revisedMarginMoney?.invoiceDetail?.accountNo || '',
    })

  }, [marginData])

  const getRevisedData = () => {
    setRevisedCalc({
      additionalAmountPerPDC:
        marginData?.revisedMarginMoney?.calculation?.additionalAmountPerPDC,
      revisedNetOrderValue:
        marginData?.revisedMarginMoney?.calculation?.revisedNetOrderValue,
      marginMoney: marginData?.revisedMarginMoney?.calculation?.marginMoney,
      revisedMarginMoney:
        marginData?.calculation?.marginMoney,
      marginMoneyReceived:
        marginData?.revisedMarginMoney?.calculation?.marginMoneyReceived,
      marginMoneyPayable:
        marginData?.revisedMarginMoney?.calculation?.marginMoneyPayable,
    })

    let additionalAmountPerPDC = parseFloat(
      (marginData?.calculation?.totalSPDC -
        Number(revisedCalc.additionalAmountPerPDC)) /
      Number(forCalculationRevised.additionalPDC),
    ).toFixed(2)
    console.log(additionalAmountPerPDC, 'additionalAmountPerPDC')
    let revisedNetOrderValueNew = parseFloat(
      marginData?.revisedMarginMoney?.totalOrderValue -
      marginData?.revisedMarginMoney?.totalOrderValue,
    ).toFixed(2)
    let marginMoneyRevised = marginData?.calculation?.marginMoney
    let revisedMarginMoneyNew = marginData?.calculation?.marginMoney

    setCalcRevised({
      additionalAmountPerPDC: additionalAmountPerPDC,
      revisedNetOrderValue: revisedNetOrderValueNew,
      marginMoney: marginMoneyRevised,
      revisedMarginMoney: revisedMarginMoneyNew,
      marginMoneyReceived: '',
      marginMoneyPayable: '',
    })
  }

  useEffect(() => {
    getRevisedData2()
  }, [revisedCalc])

  const getRevisedData2 = () => {
    let additionalAmountPerPDC = parseFloat(
      (Number(marginData?.calculation?.totalSPDC) -
        Number(
          revisedCalc.additionalAmountPerPDC
            ? revisedCalc.additionalAmountPerPDC
            : 0,
        )) /
      Number(forCalculationRevised.additionalPDC),
    ).toFixed(2)
    console.log(additionalAmountPerPDC, 'additionalAmountPerPDC')
    let revisedNetOrderValueNew = parseFloat(
      Number(
        marginData?.revisedMarginMoney?.totalOrderValue
          ? marginData?.revisedMarginMoney?.totalOrderValue
          : 0,
      ) - Number(marginData?.calculation?.totalOrderValue),
    ).toFixed(2)
    let marginMoneyRevised = Number(
      marginData?.calculation?.marginMoney,
    ).toFixed(2)
    let revisedMarginMoneyNew = Number(
      marginData?.calculation?.marginMoney
        ? marginData?.calculation?.marginMoney
        : 0,
    )

    setCalcRevised({
      additionalAmountPerPDC: additionalAmountPerPDC,
      revisedNetOrderValue: revisedNetOrderValueNew,
      marginMoney: marginMoneyRevised,
      revisedMarginMoney: revisedMarginMoneyNew,
      marginMoneyReceived: '',
      marginMoneyPayable: '',
    })
  }

  const saveInvoiceDataRevisedRevised = (name, value) => {
    const newInput = { ...invoiceDataRevised }
    newInput[name] = value
    // console.log(newInput, 'nnto', name, value)

    setInvoiceDataRevised({ ...newInput })
  }

  const setSameRevised = (val) => {
    if (val == true) {
      setInvoiceDataRevised({
        ...invoiceDataRevised,
        consigneeName: invoiceDataRevised.buyerName,
        consigneeGSTIN: invoiceDataRevised.buyerGSTIN,
        consigneeAddress: invoiceDataRevised.buyerAddress,
      })
    } else {
      setInvoiceDataRevised({
        ...invoiceDataRevised,
        consigneeName: '',
        consigneeGSTIN: '',
        consigneeAddress: '',
      })
    }
  }

  const handleUpdateRevisedMarginMoney = () => {
    let obj = {
      marginMoneyId: marginData?._id,
      additionalPDC: forCalculationRevised.additionalPDC,
      revisedMarginMoney: {
        isActive: true,
        invoiceDetail: { ...invoiceDataRevised },
        calculation: { ...calcRevised },
      },
      calculation: {
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
      conversionRate: forCalculationRevised.conversionRate,
        isUsanceInterestIncluded: forCalculationRevised.isUsanceInterestIncluded || true,
        orderObj: {
          quantity: forCalculationRevised.quantity,
          perUnitPrice: forCalculationRevised.perUnitPrice,
          orderValue: finalCalRevised.orderValue
        },
    }

    dispatch(RevisedMarginMoney(obj))
  }

  const saveOrderData = (name, value) => {
    const newInput = { ...unit }
    newInput[name] = value

    // console.log(newInput)
    setUnit(newInput)
  }

  const coversionUnitHandler = (val) => {
    let unit = 10000000
    if (val === 'Lakh') {
      unit = 100000
    }
    if (val === 'Million') {
      unit = 1000000
    }
    if (val === 'Crores') {
      unit = 10000000
    }
    setCoversionUnit(unit)
  }

  const exportPDF = () => {
    //  let margins = [
    //    10,
    //    10,
    //    10,
    //    10

    //  ];
    let element = (
      <table width="1500px" cellPadding="0" cellSpacing="0" border="0">
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#D8EAFF"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                marginBottom: '26px',
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                height: '126px',
              }}
              cellPadding="10"
              cellSpacing="0"
              border="0"
            >
              <tr>
                <td valign="bottom" align="left" width="33%">
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500',
                      padding: '10px 0 0 25px',
                    }}
                  >
                    Order ID:{' '}
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    >
                      {marginData?.order?.orderId}
                    </span>
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500',
                    }}
                  >
                    <span style={{ display: 'inline-block', paddingLeft: '25px', width: '90px', float: 'left', height: '50px' }}>
                      Buyer:{' '}
                    </span>
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    >
                      {marginData?.company?.companyName}
                      {/* {_get(termsheet, 'data[0].company.companyName', '')} */}
                    </span>
                  </span>
                </td>
                <td valign="top" align="center" width="34%">
                  <h2
                    style={{
                      fontSize: '34px',
                      color: '#3687E8',
                      lineHeight: '41px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                    }}
                  >
                    MARGIN MONEY
                  </h2>
                </td>
                <td valign="center" align="right" width="33%">
                  <span>
                    {' '}
                    <span></span>
                  </span><br />
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500',
                      paddingRight: '25px',
                    }}
                  >
                    Date:{' '}
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    >
                      {moment(marginData?.createdAt?.slice(0, 10)).format(
                        'DD-MM-yy',
                      )}
                    </span>
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top" align="left">
            <table
              width="100%"
              bgColor="#FFFFFF"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                border: '2px solid #cad6e64d'
              }}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <tr>
                <td valign="top" align="left">
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td
                        width="33%"
                        bgColor="#FAFAFB"
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <h3
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            padding: '20px 15px 20px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Commodity Details
                        </h3>
                      </td>
                      <td width="67%" bgColor="#FAFAFB" align="left">
                        <h3
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            padding: '20px 15px 20px 24px',
                            marginBottom: '0',
                          }}
                        >

                          Margin Money
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '23px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            A.
                          </span>
                          Quantity
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '23px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.quantity
                              ? marginData?.order?.quantity
                              : 0,
                            'MT',
                            '',
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            B
                          </span>
                          Unit Price
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          USD   {marginData?.order?.perUnitPrice?.toLocaleString('en-In') ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            C
                          </span>
                          Conversion Rate
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.conversionRate}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            D
                          </span>
                          Usance Interest (%)
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.commercials
                              ?.usanceInterestPercetage,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            E
                          </span>
                          Trade Margin (%)
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.commercials
                              ?.tradeMarginPercentage,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            F
                          </span>
                          Tolerance (+/-) Percentage
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.tolerance
                              ? marginData?.order?.tolerance?.toLocaleString('en-In', {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              })
                              : 0,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            G
                          </span>
                          Margin Money (%)
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.transactionDetails
                              ?.marginMoney
                              ? marginData?.order?.termsheet
                                ?.transactionDetails?.marginMoney
                              : 0,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            H
                          </span>
                          No. of PDC's
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.numberOfPDC?.toLocaleString('en-In') ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            I
                          </span>
                          Additional PDC's
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.additionalPDC}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        width="33%"
                        bgColor="#FAFAFB"
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <h3
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            padding: '20px 15px 20px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Calculation
                        </h3>
                      </td>
                      <td width="67%" bgColor="#FAFAFB" align="left"></td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '23px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            J
                          </span>
                          Order Value
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (A*B)
                          </span>
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '23px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          USD {marginData?.calculation?.orderValue?.toLocaleString('en-In') ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            K
                          </span>
                          Order Value (INR)
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (J*C)
                          </span>
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          INR {marginData?.calculation?.orderValueInINR?.toLocaleString('en-In') ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            L
                          </span>
                          Usance Interest (%) for 90 days (INR)
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (K*D*90)/365
                          </span>
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          INR {marginData?.calculation?.usanceInterest?.toLocaleString('en-In') ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            M
                          </span>
                          Trade Margin (INR)
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (K*E)
                          </span>
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          INR {marginData?.calculation?.tradeMargin?.toLocaleString('en-In') ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            N
                          </span>
                          <span style={{ marginRight: '10px' }}>Gross Order Value (INR)</span>
                          <span
                            style={{
                              fontWeight: 'bold'
                            }}
                          >
                            (K+L+M)
                          </span>
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          INR {marginData?.calculation?.grossOrderValue?.toLocaleString('en-In') ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            O
                          </span>
                          <span style={{ marginRight: '10px' }}>Tolerance Value (INR)</span>
                          <span
                            style={{
                              fontWeight: 'bold'
                            }}
                          >
                            (N*F)
                          </span>
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          INR {marginData?.calculation?.toleranceValue?.toLocaleString('en-In') ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            P
                          </span>
                          <span style={{ marginRight: '10px' }}>Total Order Value (INR)</span>
                          <span
                            style={{
                              fontWeight: 'bold'
                            }}
                          >
                            (N+O)
                          </span>
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          INR {marginData?.calculation?.totalOrderValue?.toLocaleString('en-In') ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            Q
                          </span>
                          <span style={{ marginRight: '10px' }}>Provisional Unit Price Per Ton (INR)</span>
                          <span
                            style={{
                              fontWeight: 'bold'
                            }}
                          >
                            (N/A)
                          </span>
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          INR {marginData?.calculation?.provisionalUnitPricePerTon?.toLocaleString('en-In') ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            R
                          </span>
                          <span style={{ marginRight: '10px' }}>Margin Money (INR){' '}</span>
                          <span
                            style={{
                              fontWeight: 'bold'
                            }}
                          >
                            (P*G)
                          </span>
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          INR {marginData?.calculation?.marginMoney?.toLocaleString('en-In') ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            S
                          </span>
                          <span style={{ marginRight: '10px' }}>Total SPDC Amount Req. (INR)</span>
                          <span
                            style={{
                              fontWeight: 'bold'
                            }}
                          >
                            (P-R)
                          </span>
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {'INR'} {marginData?.calculation?.totalSPDC?.toLocaleString('en-In') ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            T
                          </span>
                          <span style={{ marginRight: '10px' }}>Additional Amount Per SPDC (INR)</span>
                          <span
                            style={{
                              fontWeight: 'bold'
                            }}
                          >
                            [(S-Previous Value)/I)]
                          </span>
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          INR  {marginData?.calculation?.amountPerSPDC?.toLocaleString('en-In') ??
                            0}
                        </p>
                      </td>
                    </tr>
                    {/* <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px', float:'left', height:'30px'
                              }}
                            >
                              U
                            </span>
                            <span style={{marginRight: '10px'}}>Revised Net Order Value (INR)</span>
                            <span
                              style={{
                                fontWeight: 'bold'                                
                              }}
                            >
                              [P - Total Order Value (Previous)]
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                      </tr> */}
                    {/* <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px', float:'left', height:'30px'
                              }}
                            >
                              V
                            </span>
                            Margin Money (INR)
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px', float:'left', height:'30px'
                              }}
                            >
                              W
                            </span>
                            <span style={{marginRight: '10px'}}>Revised Margin Money Calculation (INR)
                            <span
                              style={{
                                fontWeight: 'bold'
                              }}
                            >
                              (R)
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                      </tr> */}
                    {/* <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px', float:'left', height:'30px'
                              }}
                            >
                              X
                            </span>
                            Margin Money Received (INR)
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{ borderRight: '2px solid #cad6e64d' }}
                        >
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              opacity: '0.7',
                              lineHeight: '24px',
                              fontWeight: 'normal',
                              padding: '11px 15px 11px 35px',
                              marginBottom: '0',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '35px', float:'left', height:'30px'
                              }}
                            >
                              Y
                            </span>
                            <span style={{marginLeft: '10px'}}>Margin Money Payable (INR)</span>
                            <span
                              style={{
                                fontWeight: 'bold'                                
                              }}
                            >
                              (W-X)
                            </span>
                          </p>
                        </td>
                        <td align="left">
                          <p
                            style={{
                              fontSize: '20px',
                              color: '#111111',
                              lineHeight: '24px',
                              fontWeight: '500',
                              padding: '11px 15px 11px 24px',
                              marginBottom: '0',
                            }}
                          >
                            value
                          </p>
                        </td>
                      </tr> */}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    )
    // const doc = new jsPDF('p', 'pt', [1000, 1000])
    const doc = new jsPDF('p', 'pt', [1500, 1500])
    doc.html(ReactDOMServer.renderToString(element), {
      callback: function (doc) {
        doc.save('sample.pdf')
      },
      // margin:margins,
      autoPaging: 'text',
    })
  }

  const exportPDFReviced = () => {
    //  let margins = [
    //    10,
    //    10,
    //    10,
    //    10

    //  ];
    let element = (
      <table width="1500px" cellPadding="0" cellSpacing="0" border="0">
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#D8EAFF"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                marginBottom: '26px',
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                height: '126px',
              }}
              cellPadding="10"
              cellSpacing="0"
              border="0"
            >
              <tr>
                <td valign="bottom" align="left" width="33%">
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500',
                      padding: '10px 0 0 25px',
                    }}
                  >
                    Order ID:{' '}
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    ></span>
                  </span><br />
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500'
                    }}
                  >
                    <span style={{ display: 'inline-block', paddingLeft: '25px', width: '90px', float: 'left', height: '50px' }}>
                      Buyer:{' '}
                    </span>
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    >
                      {/* {_get(termsheet, 'data[0].company.companyName', '')} */}
                    </span>
                  </span>
                </td>
                <td valign="top" align="center" width="34%">
                  <h2
                    style={{
                      fontSize: '34px',
                      color: '#3687E8',
                      lineHeight: '41px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                    }}
                  >
                    REVISED MARGIN MONEY
                  </h2>
                </td>
                <td valign="center" align="right" width="33%">
                  <span>
                    {' '}
                    <span></span>
                  </span>
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500',
                      paddingRight: '25px',
                    }}
                  >
                    Date:{' '}
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    >
                      22-02-2022
                    </span>
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top" align="left">
            <table
              width="100%"
              bgColor="#FFFFFF"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                border: '2px solid #cad6e64d'
              }}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <tr>
                <td valign="top" align="left">
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td
                        width="50%"
                        bgColor="#FAFAFB"
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Commodity Details
                        </span>
                      </td>
                      <td width="25%" bgColor="#FAFAFB" align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 24px',
                            marginBottom: '0',
                          }}
                        >
                          Revised Margin Money
                        </span>
                      </td>
                      <td width="25%" bgColor="#FAFAFB" align="left">
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 24px',
                            marginBottom: '0',
                          }}
                        >
                          Margin Money
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '23px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            A.
                          </span>
                          Quantity
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#43C34D',
                            lineHeight: '24px',
                            fontWeight: 'bold',
                            float: 'left',
                            padding: '23px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.quantity
                              ? marginData?.order?.quantity
                              : 0,
                            'MT',
                            '',
                          )}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '23px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.quantity
                              ? marginData?.order?.quantity
                              : 0,
                            'MT',
                            '',
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            B
                          </span>
                          Unit Price
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.order?.perUnitPrice?.toLocaleString('en-In') ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.order?.perUnitPrice?.toLocaleString('en-In') ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            C
                          </span>
                          Conversion Rate
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.conversionRate}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.conversionRate}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            D
                          </span>
                          Usance Interest (%)
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.commercials
                              ?.usanceInterestPercetage,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.commercials
                              ?.usanceInterestPercetage,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            E
                          </span>
                          Trade Margin (%)
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.commercials
                              ?.tradeMarginPercentage,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.commercials
                              ?.tradeMarginPercentage,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            F
                          </span>
                          Tolerance (+/-) Percentage
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.tolerance
                              ? marginData?.order?.tolerance?.toLocaleString('en-In', {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              })
                              : 0,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.tolerance
                              ? marginData?.order?.tolerance
                              : 0,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            G
                          </span>
                          Margin Money (%)
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.transactionDetails
                              ?.marginMoney
                              ? marginData?.order?.termsheet?.transactionDetails
                                ?.marginMoney
                              : 0,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {addPrefixOrSuffix(
                            marginData?.order?.termsheet?.transactionDetails
                              ?.marginMoney
                              ? marginData?.order?.termsheet?.transactionDetails
                                ?.marginMoney
                              : 0,
                            '%',
                            '',
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            H
                          </span>
                          No. of PDC's
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.numberOfPDC?.toLocaleString('en-In') ?? 0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {marginData?.numberOfPDC?.toLocaleString('en-In') ?? 0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            I
                          </span>
                          Additional PDC's
                        </p>
                      </td>
                      <td align="left" bgColor="#FFF5E5" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#FF9D00',
                            lineHeight: '24px',
                            fontWeight: 'bold',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0'
                          }}
                        >
                          {marginData?.additionalPDC?.toLocaleString('en-In')}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          -
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        bgColor="#FAFAFB"
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Calculation
                        </p>
                      </td>
                      <td bgColor="#FAFAFB" align="left" style={{ borderRight: '2px solid #cad6e64d' }}></td>
                      <td bgColor="#FAFAFB" align="left"></td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '23px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            J
                          </span>
                          Order Value
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (A*B)
                          </span>
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '23px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          USD  {marginData?.calculation?.orderValue?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '23px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          USD  {marginData?.calculation?.orderValue?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            K
                          </span>
                          Order Value (INR)
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (J*C)
                          </span>
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹  {marginData?.calculation?.orderValueInINR?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹ {marginData?.calculation?.orderValueInINR?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            L
                          </span>
                          Usance Interest (%) for 90 days (INR)
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (K*D*90)/365
                          </span>
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹ {marginData?.calculation?.usanceInterest?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹ {marginData?.calculation?.usanceInterest?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            M
                          </span>
                          Trade Margin (INR)
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (K*E)
                          </span>
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹  {marginData?.calculation?.tradeMargin?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹  {marginData?.calculation?.tradeMargin?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            N
                          </span>
                          Gross Order Value (INR)
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (K+L+M)
                          </span>
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹  {marginData?.calculation?.grossOrderValue?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹  {marginData?.calculation?.grossOrderValue?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            O
                          </span>
                          Tolerance Value (INR)
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (N*F)
                          </span>
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹ {marginData?.calculation?.toleranceValue?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹ {marginData?.calculation?.toleranceValue?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            P
                          </span>
                          Total Order Value (INR)
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (N+O)
                          </span>
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹ {marginData?.calculation?.totalOrderValue?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹ {marginData?.calculation?.totalOrderValue?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            Q
                          </span>
                          Provisional Unit Price Per Ton (INR)
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (N/A)
                          </span>
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹  {marginData?.calculation?.provisionalUnitPricePerTon?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹  {marginData?.calculation?.provisionalUnitPricePerTon?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            R
                          </span>
                          Margin Money (INR){' '}
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (P*G)
                          </span>
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹  {marginData?.calculation?.marginMoney?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹  {marginData?.calculation?.marginMoney?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            S
                          </span>
                          Total SPDC Amount Req. (INR)
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (P-R)
                          </span>
                        </p>
                      </td>

                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹  {marginData?.calculation?.totalSPDC?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹  {marginData?.calculation?.totalSPDC?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            T
                          </span>
                          Additional Amount Per SPDC (INR)
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            [(S-Previous Value)/I)]
                          </span>
                        </p>
                      </td>
                      <td align="left" bgColor="#FFF5E5" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                            color: '#FF9D00',
                            float: 'left',
                            fontWeight: 'bold',
                            lineHeight: '24px'
                          }}
                        >
                          ₹  {marginData?.revisedMarginMoney?.calculation?.additionalAmountPerPDC?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          -
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            U
                          </span>
                          Revised Net Order Value (INR)
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            [P - Total Order Value (Previous)]
                          </span>
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#43C34D',
                            lineHeight: '24px',
                            fontWeight: 'bold',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹  {marginData?.revisedMarginMoney?.calculation?.revisedNetOrderValue?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          -
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            V
                          </span>
                          Margin Money (INR)
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#43C34D',
                            lineHeight: '24px',
                            fontWeight: 'bold',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹  {marginData?.revisedMarginMoney?.calculation?.marginMoney?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          -
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            W
                          </span>
                          Revised Margin Money Calculation (INR)
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (R)
                          </span>
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#43C34D',
                            lineHeight: '24px',
                            fontWeight: 'bold',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹  {marginData?.revisedMarginMoney?.calculation?.revisedMarginMoney?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          -
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            X
                          </span>
                          Margin Money Received (INR)
                        </p>
                      </td>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#43C34D',
                            lineHeight: '24px',
                            fontWeight: 'bold',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          ₹  {marginData?.revisedMarginMoney?.calculation?.marginMoneyReceived?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          -
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px', float: 'left', height: '30px'
                            }}
                          >
                            Y
                          </span>
                          Margin Money Payable (INR)
                          <span
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            (W-X)
                          </span>
                        </p>
                      </td>
                      <td align="left" bgColor="#FFF5E5" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#FF9D00',
                            lineHeight: '24px',
                            fontWeight: 'bold',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0'
                          }}
                        >
                          ₹  {marginData?.revisedMarginMoney?.calculation?.marginMoneyPayable?.toLocaleString() ??
                            0}
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          -
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    )
    // const doc = new jsPDF('p', 'pt', 'a4')
    const doc = new jsPDF('p', 'pt', [1500, 1500])
    doc.html(ReactDOMServer.renderToString(element), {
      callback: function (doc) {
        doc.save('sample.pdf')
      },
      // margin:margins,
      autoPaging: 'text',
    })
  }

  const [active, setActive] = useState('Margin Money')

  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className={`${styles.title_header} d-flex align-items-center`}>
            {/* <img onClick={() => Router.push('/margin-money')}
              src={`${darkMode ? `/static/white-arrow.svg` : `/static/arrow-right.svg`
                }`}
              alt="arrow right"
              className="img-fluid mr-2 image_arrow"
              style={{cursor:'pointer'}}
            /> */}
             <img
               onClick={() => Router.push('/margin-money')}
              className={`${styles.back_arrow} image_arrow mr-2 img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={`${styles.title} heading`}>
              <span>{_get(orderList,"company.companyName","")}</span>
            </h1>
            <div className="ml-auto text-right">
              <button
                type="button"
                className={`${styles.btnPrimary} btn btn-primary`}
              >
                <img
                  src="/static/refresh.svg"
                  alt="refresh"
                  className="img-fluid"
                />
                Update Info
              </button>
              <div className={`${styles.lastModified} text `}>
                <span className='accordion_Text'>Last Modified:</span> 28 Jan,11:34am
              </div>
            </div>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li
              className={`${styles.navItem}  nav-item`}
              onClick={() => setActive('Margin Money')}
            >
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
              <li
                className={`${styles.navItem} nav-item`}
                onClick={() => setActive('Revised Margin Money')}
              >
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
            {/* <li className={`${styles.navItem} nav-item`}>
                      <a className={`${styles.navLink} navLink nav-link`} data-toggle="tab" href="#gst" role="tab" aria-controls="GST" aria-selected="false">Payment</a>
                  </li> */}

            <li
              className={`${styles.navItem} nav-item`}
              onClick={() => setActive('Document')}
            >
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
                <div
                  className="tab-pane fade show active"
                  id="Margin"
                  role="tabpanel"
                >
                  <div
                    className={`${styles.card} vessel_card accordionMargin card border_color`}
                  >
                    <div
                      className={`${styles.cardHeader} d-flex align-items-center justify-content-between`}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className={`${styles.commodity}`}>
                        <span className={`${styles.comm_head} sub_heading`}>
                          Commodity
                        </span>
                        <span className={`${styles.comm_val} heading`}>
                          {marginData?.order?.commodity}
                        </span>
                      </div>
                      <div
                        className={`${styles.unit_container} d-flex align-items-center`}
                      >
                        <div className={`${styles.pay} mr-5`}>
                          <strong className={`mr-2`}>Status:</strong>
                          <div
                            className={`d-flex align-items-center justify-content-between`}
                          >
                            <div className={`${styles.round} mr-2`}></div>
                            <span className={`heading`}>Payment Initiated</span>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div
                            className={`${styles.unit_container} d-flex align-items-center justify-content-evenly`}
                          >
                            <h5
                              className={`${styles.unit_label} accordion_Text ml-5`}
                            >
                              Unit:
                            </h5>
                            <select
                              className={`${styles.options} accordion_DropDown mr-4`}
                              name="unitOfQuantity"
                              onChange={(e) => {
                                saveOrderData(e.target.name, e.target.value),
                                  coversionUnitHandler(e.target.value)
                              }}
                            >
                              <option>Select</option>
                              <option selected value="Crores">
                                Crores
                              </option>
                              <option value="Million">Million</option>
                              <option value="Lakh">Lakh</option>
                            </select>
                          </div>
                        </div>
                        {/* <input >{marginData?.order?.unitOfValue}</input> */}
                        {/* <select
                          className={`${styles.options} mr-4 accordion_DropDown`}
                        >
                          <option>Select an option</option>
                          <option>
                            {' '}
                            {marginData?.order?.unitOfValue == 'Cr'
                              ? 'Crores'
                              : null}
                          </option>
                          <option>Million</option>
                        </select> */}
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
                    <div
                      id="commodityAccordion"
                      // className="collapse"
                      aria-labelledby="commodityAccordion"
                      data-parent="#commodityAccordion"
                    >
                      <div className={`${styles.cardBody} card-body `}>
                        <div className={`${styles.content} border_color`}>
                          <div className={`${styles.input_container} row`}>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>A</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Quantity
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {addPrefixOrSuffix(
                                    marginData?.order?.quantity?.toLocaleString('en-In'),
                                    '',
                                  )}{' '}
                                  {marginData?.order?.unitOfQuantity?.toUpperCase()}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>B</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Unit Price
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {marginData?.order?.orderCurrency}{' '}
                                  {addPrefixOrSuffix(
                                    marginData?.order?.perUnitPrice,
                                    '',
                                  )?.toLocaleString('en-In')}
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
                                type="number"
                                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

                                id="textInput"
                                name="conversionRate"
                                onChange={(e) =>
                                  saveForCalculation(
                                    e.target.name,
                                    e.target.value,
                                  )
                                }
                                value={forCalculation?.conversionRate}
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
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>D</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Usance Interest (%)
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div
                                  className={`${styles.val} heading d-flex align-items-center`}
                                >
                                  <div className={`${styles.include_cal} d-flex align-items-center`}>
                                    <span className="mr-3">{
                                      marginData?.order?.termsheet?.commercials
                                        ?.usanceInterestPercetage
                                    }%
                                    </span>
                                    <label
                                      className={`${styles.label_heading} ${styles.subHeading} label_heading mb-0 mr-3`}
                                      id="textInput"
                                    >
                                      Include in Calculation
                                    </label>
                                    <Form>
                                      {['radio'].map((type) => (
                                        <div
                                          key={`inline-${type}`}
                                          className={`${styles.radio_group} d-flex`}
                                        >
                                          <Form.Check
                                            className={`${styles.radio} radio`}
                                            inline
                                            label="Yes"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                            checked={
                                              forCalculation?.isUsanceInterestIncluded ===
                                              true
                                            }
                                            onChange={(e) =>
                                              saveForCalculation(
                                                'isUsanceInterestIncluded',
                                                true,
                                              )
                                            }
                                          />
                                          <Form.Check
                                            className={`${styles.radio} radio`}
                                            inline
                                            label="No"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                            checked={
                                              forCalculation?.isUsanceInterestIncluded ===
                                              false
                                            }
                                            onChange={(e) =>
                                              saveForCalculation(
                                                'isUsanceInterestIncluded',
                                                false,
                                              )
                                            }
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
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>E</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Trade Margin (%)
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {addPrefixOrSuffix(
                                    marginData?.order?.termsheet?.commercials
                                      ?.tradeMarginPercentage,
                                    '%',
                                    '',
                                  )?.toLocaleString('en-In')}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>F</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Tolerance (+/-) Percentage
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {addPrefixOrSuffix(
                                    marginData?.order?.tolerance?.toLocaleString('en-In', {
                                      maximumFractionDigits: 2,
                                      minimumFractionDigits: 2,
                                    }),
                                    '%',
                                    '',
                                  )}
                                </div>
                              </div>
                            </div>

                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>G</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Margin Money (%)
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {addPrefixOrSuffix(
                                    marginData?.order?.termsheet
                                      ?.transactionDetails?.marginMoney,
                                    '%',
                                    '',
                                  )?.toLocaleString('en-In')}
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
                                onFocus={(e) => {
                                  setIsFieldInFocus(true),
                                    (e.target.type = 'number')
                                }}
                                onBlur={(e) => {
                                  setIsFieldInFocus(false),
                                    (e.target.type = 'text')
                                }}
                                value={
                                  isFieldInFocus
                                    ? forCalculation?.numberOfPDC
                                    : checkNan(
                                      Number(forCalculation?.numberOfPDC),
                                    )?.toLocaleString('en-In')
                                }
                                onChange={(e) =>
                                  saveForCalculation(
                                    e.target.name,
                                    e.target.value,
                                  )
                                }
                                // value={forCalculation?.numberOfPDC}
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
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>I</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Additional PDC's
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {marginData?.additionalPDC}
                                </div>
                              </div>
                            </div>
                            {/* <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>I</span>
                              </div>
                              <input
                                type="text"
                                id="textInput"
                                name="additionalPDC"
                                onChange={(e) =>
                                  saveForCalculation(
                                    e.target.name,
                                    e.target.value,
                                  )
                                }
                                defaultValue={marginData?.additionalPDC}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px' }}
                              >
                                Additional PDC's
                                <strong className="text-danger">*</strong>
                              </label>
                            </div> */}
                          </div>
                        </div>
                        <div className={`${styles.content} border_color`}>
                          <span>Calculation</span>
                          <div className={`${styles.input_container} row`}>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>J</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Order Value{' '}
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(A*B)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {marginData?.order?.orderCurrency}{' '}
                                  {checkNan(Number(finalCal.orderValue), true)}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>K</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Order Value (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(J*C)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {/* {finalCal.orderValueInINR?.toLocaleString('en-In')} */}
                                  ₹{' '}
                                  {/* {checkNan(
                                    Number(finalCal.orderValueInINR),
                                    true,
                                  )} */}
                                  {convertValue((finalCal.orderValueInINR), coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })}

                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>L</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Usance Interest (%) for 90 days (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(K*D*90/365)`}{' '}
                                    <div className={`${styles.tooltip}`}>
                                      <img
                                        className={`ml-2 mt-n1 img-fluid`}
                                        src="/static/info-circle.svg"
                                      />
                                      <span className={`${styles.tooltiptext}`}>
                                        Indicative Figures
                                      </span>
                                    </div>
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  ₹ {/* {finalCal.usanceInterest} */}
                                  {/* {checkNan(
                                    Number(finalCal.usanceInterest),
                                    true,
                                  )} */}
                                  {convertValue((finalCal.usanceInterest), coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>M</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Trade Margin (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(K*E)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  ₹{' '}
                                  {/* {checkNan(Number(finalCal.tradeMargin), true)} */}
                                  {convertValue((finalCal.tradeMargin), coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })}
                                  {/* {finalCal.tradeMargin?.toLocaleString('en-In')} */}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>N</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Gross Order Value (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(K+L+M)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {/* {finalCal.grossOrderValue?.toLocaleString('en-In')} */}
                                  ₹{' '}
                                  {convertValue((finalCal.grossOrderValue), coversionUnit)?.toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })}
                                  {/* {checkNan(
                                    Number(finalCal.grossOrderValue),
                                    true,
                                  )} */}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>O</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Tolerance Value (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(N*F)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {/* {finalCal.toleranceValue} */}₹{' '}
                                  {convertValue((finalCal.toleranceValue), coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })}
                                  {/* {checkNan(
                                    Number(finalCal.toleranceValue),
                                    true,
                                  )} */}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>P</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Total Order Value (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(N+O)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {/* {finalCal.totalOrderValue} */}₹{' '}
                                  {convertValue((finalCal.totalOrderValue), coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })}
                                  {/* {checkNan(
                                    Number(finalCal.totalOrderValue),
                                    true,
                                  )} */}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>Q</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Provisional Unit Price Per Ton (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(N/A)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  ₹{' '}
                                  {/* {checkNan(
                                    Number(finalCal.provisionalUnitPricePerTon),
                                    true,
                                  )} */}
                                  {convertValue((finalCal.provisionalUnitPricePerTon), coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })}
                                  {/* {finalCal.provisionalUnitPricePerTon} */}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>R</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Margin Money (INR)
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(P*G)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {/* {finalCal.marginMoney} */}₹{' '}
                                  {/* {checkNan(Number(finalCal.marginMoney), true)} */}
                                  {convertValue((finalCal.marginMoney), coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>S</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Total SPDC Amount Req. (INR)
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(P-R)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {/* {finalCal.totalSPDC} */}₹{' '}
                                  {/* {checkNan(Number(finalCal.totalSPDC), true)} */}
                                  {convertValue((finalCal.totalSPDC), coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>T</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Amount per SPDC (INR)
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(S/H)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  ₹{' '}
                                  {/* {checkNan(
                                    Number(finalCal.amountPerSPDC),
                                    true,
                                  )} */}
                                  {convertValue((finalCal.amountPerSPDC), coversionUnit).toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })}
                                  {/* {finalCal.amountPerSPDC} */}
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
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="buyerName"
                                defaultValue={marginData?.company?.companyName}
                                className={`${styles.input_field} input form-control`}
                                required
                                onChange={(e) =>
                                  saveInvoiceData(e.target.name, e.target.value)
                                }
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Buyer Name
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <div className="d-flex">
                                <select
                                  id="Code"
                                  name="buyerGSTIN"
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  required
                                  onChange={(e) =>
                                    saveInvoiceData(
                                      e.target.name,
                                      e.target.value,
                                    )
                                  }
                                  // defaultValue={
                                  //   marginData?.invoiceDetail?.buyerGSTIN
                                  // }
                                  value={
                                    invoiceData?.buyerGSTIN
                                  }
                                >
                                  <option selected  >Select an Option</option>
                                  {orderList?.company?.gstList?.map((gstin, index) => (
                                    <option key={index} value={gstin}>
                                      {gstin}
                                    </option>
                                  ))}

                                </select>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Buyer GSTIN
                                  <strong className="text-danger">*</strong>
                                </label>
                                <img
                                  className={`img-fluid image_arrow ${styles.arrow}`}
                                  src="/static/inputDropDown.svg"
                                />
                              </div>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="buyerAddress"
                                defaultValue={
                                  marginData?.invoiceDetail?.buyerAddress
                                }
                                className={`${styles.input_field} input form-control`}
                                required
                                onChange={(e) =>
                                  saveInvoiceData(e.target.name, e.target.value)
                                }
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Buyer Address
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div className={`${styles.radio_form} col-md-12`}>
                              <div
                                className={`${styles.label_heading} label_heading`}
                              >
                                Is Consignee same as Buyer
                                <strong className="text-danger">*</strong>
                              </div>
                              <Form>
                                {['radio'].map((type) => (
                                  <div
                                    key={`inline-${type}`}
                                    className={styles.radio_group}
                                  >
                                    <Form.Check
                                      className={`${styles.radio} radio`}
                                      inline
                                      label="Yes"

                                      onChange={(e) => {
                                        setInvoiceData({ ...invoiceData, isConsigneeSameAsBuyer: true })
                                        // saveInvoiceData(
                                        //   'isConsigneeSameAsBuyer',
                                        //   true,
                                        // )
                                        setSame(true)
                                      }}
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                      className={`${styles.radio} radio`}
                                      inline
                                      label="No"

                                      onChange={(e) => {
                                        // saveInvoiceData(
                                        //   'isConsigneeSameAsBuyer',
                                        //   false,
                                        // )
                                        setInvoiceData({ ...invoiceData, isConsigneeSameAsBuyer: false })
                                        setSame(false)
                                      }}
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                ))}
                              </Form>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="consigneeName"
                                value={invoiceData?.consigneeName}
                                onChange={(e) =>
                                  saveInvoiceData(e.target.name, e.target.value)
                                }
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Consignee Name
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <div className="d-flex">
                                <input
                                  type="text"
                                  id="textInput"
                                  name="consigneeGSTIN"
                                  value={invoiceData?.consigneeGSTIN}
                                  onChange={(e) =>
                                    saveInvoiceData(
                                      e.target.name,
                                      e.target.value,
                                    )
                                  }
                                  className={`${styles.input_field} input form-control`}
                                  required
                                />
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Consignee GSTIN
                                  <strong className="text-danger">*</strong>
                                </label>
                              </div>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="consigneeAddress"
                                onChange={(e) =>
                                  saveInvoiceData(e.target.name, e.target.value)
                                }
                                value={invoiceData?.consigneeAddress}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Consignee Address
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.content} border_color`}>
                          <div className={`${styles.input_container} row`}>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <div className="d-flex">
                                <select
                                  id="Code"
                                  name="importerName"
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  required
                                  value={
                                    invoiceData?.importerName
                                  }
                                  onChange={(e) =>
                                    dropDownChange(
                                      e.target.name,
                                      e.target.value,
                                    )
                                  }
                                  style={{ paddingRight: '40px' }}
                                >
                                  <option>Select an option</option>
                                  <option value="INDO GERMAN INTERNATIONAL PRIVATE LIMITED">
                                    INDO GERMAN INTERNATIONAL PRIVATE LIMITED
                                  </option>
                                  <option value="EMERGENT INDUSTRIAL SOLUTIONS LIMITED">
                                    EMERGENT INDUSTRIAL SOLUTIONS LIMITED
                                  </option>
                                </select>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Importer Name
                                  <strong className="text-danger">*</strong>
                                </label>
                                <img
                                  className={`img-fluid image_arrow ${styles.arrow}`}
                                  src="/static/inputDropDown.svg"
                                ></img>
                              </div>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <div className="d-flex">
                                <select
                                  id="Code"
                                  name="branchOffice"
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  required
                                  value={
                                    changeImporterData?.branch
                                      ? changeImporterData?.branch
                                      : invoiceData?.branchOffice
                                  }
                                  onChange={(e) => changeImporter(e)}
                                >
                                  <option>Select an option</option>
                                  <option value="SURAT">{'SURAT'}</option>
                                  <option value="DELHI">DELHI</option>
                                </select>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Branch Office
                                  <strong className="text-danger">*</strong>
                                </label>
                                <img
                                  className={`img-fluid image_arrow ${styles.arrow}`}
                                  src="/static/inputDropDown.svg"
                                ></img>
                              </div>
                            </div>

                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
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
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Company Address
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="importerGSTIN"
                                onChange={(e) => changeImporter(e)}
                                value={
                                  changeImporterData?.GSTIN
                                    ? changeImporterData?.GSTIN
                                    : invoiceData?.importerGSTIN
                                }
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Importer GSTIN
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>

                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <div className="d-flex">
                                <select
                                  id="Code"
                                  name="bankName"
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  required
                                  value={
                                    invoiceData?.bankName
                                  }
                                  onChange={(e) =>
                                    saveInvoiceData(
                                      e.target.name,
                                      e.target.value,
                                    )
                                  }
                                >
                                  <option>Select an option</option>
                                  <option value="CANARA">
                                    CANARA Bank Ltd
                                  </option>
                                  <option value="ICICI">ICICI Bank Ltd</option>
                                </select>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Bank Name
                                  <strong className="text-danger">*</strong>
                                </label>
                                <img
                                  className={`img-fluid  image_arrow ${styles.arrow}`}
                                  src="/static/inputDropDown.svg"
                                ></img>
                              </div>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <div className="d-flex">
                                <select
                                  id="Code"
                                  name="branch"
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  required
                                  value={
                                    invoiceData?.branch
                                  }
                                  onChange={(e) =>
                                    saveInvoiceData(
                                      e.target.name,
                                      e.target.value,
                                    )
                                  }
                                >
                                  {/* <option>Select an option</option> */}
                                  <option selected>
                                    Select an option
                                  </option>
                                  <option value="Connaught Place, DELHI">
                                    Connaught Place, DELHI
                                  </option>
                                </select>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Branch
                                  <strong className="text-danger">*</strong>
                                </label>
                                <img
                                  className={`img-fluid image_arrow ${styles.arrow}`}
                                  src="/static/inputDropDown.svg"
                                ></img>
                              </div>
                            </div>

                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="branchAddress"
                                onChange={(e) =>
                                  saveInvoiceData(e.target.name, e.target.value)
                                }
                                value={
                                  invoiceData?.branchAddress
                                }
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Branch Address
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <input
                                id="textInput"
                                name="IFSCcode"
                                onChange={(e) =>
                                  saveInvoiceData(
                                    e.target.name,
                                    e.target.value,
                                  )
                                }
                                value={invoiceData?.IFSCcode}
                                // {
                                //   marginData?.invoiceDetail?.IFSCcode
                                // }

                                className={`${styles.input_field} input form-control`}
                                required
                              />

                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                IFSC Code
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="accountNo"
                                onChange={(e) =>
                                  saveInvoiceData(e.target.name, e.target.value)
                                }
                                value={invoiceData?.accountNo}

                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
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
                  <div
                    className="tab-pane fade"
                    id="revisedMargin"
                    role="tabpanel"
                  >
                    <div className={`${styles.card}  accordion_body`}>
                      <RevisedMargin
                        marginData={marginData}
                        finalCal={finalCal}
                        finalCalRevised={finalCalRevised}
                        forCalculationRevised={forCalculationRevised}
                        saveInvoiceDataRevisedRevised={
                          saveInvoiceDataRevisedRevised
                        }
                        setSameRevised={setSameRevised}
                        invoiceDataRevised={invoiceDataRevised}
                        setInvoiceDataRevised={setInvoiceDataRevised}
                        saveForCalculation={saveForCalculation}
                        calcRevised={calcRevised}
                        handleUpdateRevisedMarginMoney={
                          handleUpdateRevisedMarginMoney
                        }
                        saveforCalculationRevised={saveforCalculationRevised}
                        exportPDF={exportPDFReviced}
                      />
                    </div>
                  </div>
                ) : null}

                <div className="tab-pane fade" id="Documents" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <UploadOther
                      orderid={id}
                      module="LeadOnboarding&OrderApproval"
                    />
                  </div>
                  {/* <DownloadBar
                    downLoadButtonName={`Download`}
                    isPrevious={true}
                    handleUpdate={handleUpdate}
                    leftButtonName={`Save`}
                    rightButtonName={`Preview`}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <DownloadBar
        downLoadButtonName={`Download`}
        isPrevious={true}
        handleUpdate={handleUpdate}
        handleUpdateRevised={handleUpdateRevisedMarginMoney}
        leftButtonName={`Save`}
        rightButtonName={`Preview`}
        handleApprove={routeChange}
      /> */}
    </>
  )
}
export default Index
