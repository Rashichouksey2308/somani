/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import RevisedMargin from '../../src/components/RevisedMargin'
import { Form } from 'react-bootstrap'

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
import { addPrefixOrSuffix, checkNan } from '../../src/utils/helper'
// import { Row, Col } from 'react-bootstrap'

function Index() {
  const dispatch = useDispatch()

  const [darkMode, setDarkMode] = useState(false)

  const { margin } = useSelector((state) => state.marginMoney)

  const marginData = _get(margin, 'data.data[0]', '')

  let id = sessionStorage.getItem('marginId')

  const [unit, setUnit] = useState({ value: 'Crores' })

  const RevisedMarginMoneyTrue = _get(
    margin,
    'data.data[0].revisedMarginMoney.isActive',
    false,
  )

  useEffect(() => {
    let id = sessionStorage.getItem('marginId')
    dispatch(GetMarginMoney({ orderId: id }))

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
    isUsanceInterestIncluded: marginData?.isUsanceInterestIncluded || '',
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
      isUsanceInterestIncluded: marginData?.isUsanceInterestIncluded,
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
      Number(orderValue) * forCalculation.conversionRate,
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
      Number(orderValue) * forCalculation.conversionRate,
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

  const [invoiceData, setInvoiceData] = useState({
    buyerName: marginData?.company?.companyName || '',
    buyerGSTIN: marginData?.invoiceDetail?.buyerGSTIN || '',
    buyerAddress: marginData?.invoiceDetail?.buyerAddress || '',
    isConsigneeSameAsBuyer: marginData?.invoiceDetail?.isConsigneeSameAsBuyer,
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
    accountNo: marginData?.invoiceDetail?.accountNo || '',
  })
  useEffect(() => {
 if(marginData){
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
    accountNo: marginData?.invoiceDetail?.accountNo || '',
  })
 }
  },[marginData])
  // console.log(invoiceData, 'invoiceData')

  const saveInvoiceData = (name, value) => {
    // console.log(value, 'invoice data value', name)
    const newInput = { ...invoiceData }
  
    newInput[name] = value
    
    // console.log(newInput, 'nnto', name, value)

   
    if(invoiceData?.isConsigneeSameAsBuyer==true){
      if(name=="buyerName"){
       let a="consigneeName"
      newInput[a] = value
      }
      if(name=="buyerGSTIN"){
       let a="consigneeGSTIN"
      newInput[a] = value
      }
      if(name=="buyerAddress"){
       let a="consigneeAddress"
      newInput[a] = value
      }
       
    }
     setInvoiceData({ ...newInput })
  }

  console.log(invoiceData, 'invoice data value')

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
  console.log(changeImporterData, 'THIS IS CHANGE IMPORTER')

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

  const handleUpdate = () => {
    let obj = {
      marginMoneyId: marginData?._id,
      conversionRate: forCalculation.conversionRate,
      isUsanceInterestIncluded: forCalculation.isUsanceInterestIncluded,
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
    }
    if (
      marginData?.order?.perUnitPrice !== forCalculation.perUnitPrice ||
      marginData?.order?.quantity !== forCalculation.quantity
    ) {
      obj = {
        ...obj,
        orderObj: {
          quantity: forCalculation.quantity,
          perUnitPrice: forCalculation.perUnitPrice,
        },
      }
    }

    dispatch(UpdateMarginMoney(obj))
  }

  const [revisedCalc, setRevisedCalc] = useState({
    additionalAmountPerPDC:
      marginData?.revisedMarginMoney?.calculation?.additionalAmountPerPDC,
    revisedNetOrderValue:
      marginData?.revisedMarginMoney?.calculation?.revisedNetOrderValue,
    marginMoney: marginData?.revisedMarginMoney?.calculation?.marginMoney,
    revisedMarginMoney:
      marginData?.revisedMarginMoney?.calculation?.revisedMarginMoney,
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

  console.log(calcRevised, 'THIS IS CALC REVISED')

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
    branch: marginData?.revisedMarginMoney?.invoiceDetail?.branch || '',
    branchAddress:
      marginData?.revisedMarginMoney?.invoiceDetail?.branchAddress || '',
    IFSCcode: marginData?.revisedMarginMoney?.invoiceDetail?.IFSCcode || '',
    accountNo: marginData?.revisedMarginMoney?.invoiceDetail?.accountNo || '',
  })

  useEffect(() => {
    getRevisedData()
  }, [marginData])

  const getRevisedData = () => {
    setRevisedCalc({
      additionalAmountPerPDC:
        marginData?.revisedMarginMoney?.calculation?.additionalAmountPerPDC,
      revisedNetOrderValue:
        marginData?.revisedMarginMoney?.calculation?.revisedNetOrderValue,
      marginMoney: marginData?.revisedMarginMoney?.calculation?.marginMoney,
      revisedMarginMoney:
        marginData?.revisedMarginMoney?.calculation?.revisedMarginMoney,
      marginMoneyReceived:
        marginData?.revisedMarginMoney?.calculation?.marginMoneyReceived,
      marginMoneyPayable:
        marginData?.revisedMarginMoney?.calculation?.marginMoneyPayable,
    })

    let additionalAmountPerPDC = parseFloat(
      (marginData?.calculation?.totalSPDC -
        Number(revisedCalc.additionalAmountPerPDC)) /
        Number(forCalculation.additionalPDC),
    ).toFixed(2)
    console.log(additionalAmountPerPDC, 'additionalAmountPerPDC')
    let revisedNetOrderValueNew = parseFloat(
      marginData?.revisedMarginMoney?.totalOrderValue -
        marginData?.revisedMarginMoney?.totalOrderValue,
    ).toFixed(2)
    let marginMoneyRevised = marginData?.calculation?.marginMoney
    let revisedMarginMoneyNew = marginData?.revisedMarginMoney?.marginMoney

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
        Number(forCalculation.additionalPDC),
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
      marginData?.revisedMarginMoney?.marginMoney
        ? marginData?.revisedMarginMoney?.marginMoney
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
      additionalPDC: forCalculation.additionalPDC,
      revisedMarginMoney: {
        isActive: true,
        invoiceDetail: { ...invoiceDataRevised },
        calculation: { ...calcRevised },
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

  const [active, setActive] = useState('Margin Money')
  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className={`${styles.title_header} d-flex align-items-center`}>
            <img
              src={`${
                darkMode ? `/static/white-arrow.svg` : `/static/arrow-right.svg`
              }`}
              alt="arrow right"
              className="img-fluid mr-2 image_arrow"
            />
            <h1 className={`${styles.title} heading`}>
              <span>Margin Money</span>
            </h1>
            <div className="ml-auto">
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
                <span>Last Modified:</span> 28 Jan,11:34am
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
                    className={`${styles.card} vessel_card accordionMargin card`}
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
                                saveOrderData(e.target.name, e.target.value)
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
                                    marginData?.order?.quantity?.toLocaleString(),
                                    '',
                                  )}{' '}
                                  {marginData?.order?.unitOfQuantity.toUpperCase()}
                                </div>
                              </div>
                            </div>
                            {/* <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
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
                                  {marginData?.order?.quantity?.toLocaleString()}
                                </div>
                              </div>
                            </div>
                              {/* <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>A</span>
                              </div>
                              <input
                                type="text"
                                id="textInput"
                                name="quantity"
                                defaultValue={marginData?.order?.quantity?.toLocaleString()}
                                onChange={(e) =>
                                  saveForCalculation(
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
                                style={{ left: '70px' }}
                              >
                                Quantity
                                <strong className="text-danger">*</strong>
                              </label> */}
                            {/* </div> */}

                            {/* <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>B</span>
                              </div>
                              <input
                                type="text"
                                id="textInput"
                                defaultValue={marginData?.order?.perUnitPrice}
                                name="perUnitPrice"
                                onChange={(e) =>
                                  saveForCalculation(
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
                                style={{ left: '70px' }}
                              >
                                Unit Price
                                <strong className="text-danger">*</strong>
                              </label>
                            </div> */}
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
                                  ).toLocaleString()}
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
                                defaultValue={marginData?.conversionRate}
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
                                            defaultChecked={
                                              marginData?.isUsanceInterestIncluded ===
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
                                            defaultChecked={
                                              marginData?.isUsanceInterestIncluded ===
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
                                  )?.toLocaleString()}
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
                                    marginData?.order?.tolerance,
                                    '%',
                                    '',
                                  )?.toLocaleString()}
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
                                  )?.toLocaleString()}
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
                                onChange={(e) =>
                                  saveForCalculation(
                                    e.target.name,
                                    e.target.value,
                                  )
                                }
                                defaultValue={marginData?.numberOfPDC}
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
                                  {/* {finalCal.orderValueInINR?.toLocaleString()} */}
                                  {checkNan(
                                    Number(finalCal.orderValueInINR),
                                    true,
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
                                  {checkNan(
                                    Number(finalCal.usanceInterest),
                                    true,
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
                                  {checkNan(Number(finalCal.tradeMargin), true)}
                                  {/* {finalCal.tradeMargin?.toLocaleString()} */}
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
                                  {/* {finalCal.grossOrderValue?.toLocaleString()} */}
                                  ₹{' '}
                                  {checkNan(
                                    Number(finalCal.grossOrderValue),
                                    true,
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
                                  {checkNan(
                                    Number(finalCal.toleranceValue),
                                    true,
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
                                  {checkNan(
                                    Number(finalCal.totalOrderValue),
                                    true,
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
                                  {checkNan(
                                    Number(finalCal.provisionalUnitPricePerTon),
                                    true,
                                  )}
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
                                  {checkNan(Number(finalCal.marginMoney), true)}
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
                                  {checkNan(Number(finalCal.totalSPDC), true)}
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
                                  {checkNan(
                                    Number(finalCal.amountPerSPDC),
                                    true,
                                  )}
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
                    className={`${styles.card} ${styles.lastComponent} vessel_card accordionMargin card`}
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
                                  defaultValue={
                                    marginData?.invoiceDetail?.buyerGSTIN
                                  }
                                >
                                  <option>Select an option</option>

                                  <option value="GTSDT789652JKH">
                                    GTSDT789652JKH
                                  </option>
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
                                         setInvoiceData({ ...invoiceData,isConsigneeSameAsBuyer:true })
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
                                         setInvoiceData({ ...invoiceData,isConsigneeSameAsBuyer:false })
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
                                  defaultValue={
                                    marginData?.invoiceDetail?.importerName
                                  }
                                  onChange={(e) =>
                                    dropDownChange(
                                      e.target.name,
                                      e.target.value,
                                    )
                                  }
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
                                      : marginData?.invoiceDetail?.branchOffice
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
                                    : marginData?.invoiceDetail?.companyAddress
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
                                    : marginData?.invoiceDetail?.importerGSTIN
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
                                  defaultValue={
                                    marginData?.invoiceDetail?.bankName
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
                                  defaultValue={
                                    marginData?.invoiceDetail?.branch
                                  }
                                  onChange={(e) =>
                                    saveInvoiceData(
                                      e.target.name,
                                      e.target.value,
                                    )
                                  }
                                >
                                  {/* <option>Select an option</option> */}
                                  <option value="Connaught Place, DELHI">
                                    Connaught Place, DELHI
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
                                defaultValue={
                                  marginData?.invoiceDetail?.branchAddress
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
                                    defaultValue=
                                    // {
                                    //   marginData?.invoiceDetail?.IFSCcode
                                    // }
                                    "ICIC0000251"
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
                                defaultValue=
                                // {
                                //   marginData?.invoiceDetail?.accountNo
                                // }
                                "123456789"
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
