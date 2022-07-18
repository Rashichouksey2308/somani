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

//redux
import { UpdateCompanyDetails } from '../../src/redux/companyDetail/action'

import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  UpdateCredit,
  UpdateOrderShipment,
} from '../../src/redux/buyerProfile/action'
import { element } from 'prop-types'
import { setPageName, setDynamicName } from '../../src/redux/userData/action'

import { RefetchCombineKarza } from '../../src/redux/companyDetail/action'
import { UpdateCam } from '../../src/redux/creditQueueUpdate/action'

function Index() {
  const dispatch = useDispatch()

  const [darkMode, setDarkMode] = useState(false)
  const [uploadBtn, setUploadBtn] = useState(false)
  const [complienceFilter, setComplienceFilter] = useState('')

  const { orderList } = useSelector((state) => state.buyer)

  console.log(orderList, 'this is order list')

  const { companyData } = useSelector((state) => state.companyDetails)
  console.log(companyData, 'this is company data')

  useEffect(() => {
    dispatch(setPageName('credit-queue'))
    dispatch(setDynamicName(orderList?.company?.companyName))
  }, [orderList, dispatch])

  const [selectedTab, setSelectedTab] = useState('Profile')

  const [orderDetails, setOrderDetails] = useState({
    transactionType: orderList?.transactionType,
    commodity: orderList?.commodity,
    quantity: orderList?.quantity,
    unitOfQuantity: orderList?.unitOfQuantity,
    orderValue: orderList?.orderValue,
    orderCurrency: orderList?.orderCurrency,
    unitOfValue: orderList?.unitOfValue,
    supplierName: orderList?.supplierName,
    countryOfOrigin: orderList?.countryOfOrigin,
    portOfDischarge: orderList?.portOfDischarge,
    ExpectedDateOfShipment: orderList?.ExpectedDateOfShipment,
    incoTerm: orderList?.incoTerm,
    grade: orderList?.grade,
    tolerance: orderList?.tolerance,
    transactionPeriodDays: orderList?.transactionPeriodDays,
    manufacturerName: orderList?.manufacturerName,
  })

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
  })

  const saveOrderData = (name, value) => {
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

  const onOrderSave = () => {
    if (orderDetails?.transactionType?.trim() === '') {
      let toastMessage = 'Invalid Transaction Type'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.commodity?.trim() === '') {
      let toastMessage = 'the Commodity can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.quantity === '') {
      let toastMessage = 'Quantity can not be Empty '
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.unitOfQuantity?.trim() === '') {
      let toastMessage = 'Please Provide a unit Of Quantity  '
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.orderValue === '') {
      let toastMessage = 'Please Check the orderValue  '
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.orderCurrency?.trim() === '') {
      let toastMessage = 'the orderCurrency can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.unitOfValue?.trim() === '') {
      let toastMessage = 'Please Set the unit of value'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.supplierName?.trim() === '') {
      let toastMessage = 'the supplier Name can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails.countryOfOrigin.trim() === '') {
      let toastMessage = 'the country Of Origin can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.portOfDischarge?.trim() === '') {
      let toastMessage = 'the port Of Discharge can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.ExpectedDateOfShipment?.trim() === '') {
      let toastMessage = 'the Expected Date Of Shipment can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.incoTerm?.trim() === '') {
      let toastMessage = 'the incoTerm can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.grade?.trim() === '') {
      let toastMessage = 'the grade can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.tolerance === '') {
      let toastMessage = 'the tolerance can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.transactionPeriodDays === '') {
      let toastMessage = 'the transaction Period Days can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else if (orderDetails?.manufacturerName?.trim() === '') {
      let toastMessage = 'the manufacturer Name can not be Empty'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
      return
    } else {
      if (orderDetails.unitOfValue === 'Cr' || 'Crores') {
        const obj = {
          ...orderDetails,
          shipmentDetail: { ...shipment },
          order: orderList._id,
          orderValue: orderDetails.orderValue * 10000000,
        }
        dispatch(UpdateOrderShipment(obj))
      } else {
        const obj = {
          ...orderDetails,
          shipmentDetail: { ...shipment },
          order: orderList._id,
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

  const [supplierCred, setSupplierCred] = useState()

  useEffect(() => {
    // console.log("this is order list",orderList)
    setProduct({
      AvgMonthlyElectricityBill:
        orderList?.productSummary?.AvgMonthlyElectricityBill,
      availableStock: orderList?.productSummary?.availableStock,
      averageStockInTransit: orderList?.productSummary?.averageStockInTransit,
      averageStockOfCommodity:
        orderList?.productSummary?.averageStockOfCommodity,
      capacityUtilization: orderList?.productSummary?.capacityUtilization,
      contributionCommoditySenstivity:
        orderList?.productSummary?.contributionCommoditySenstivity,
      dailyConsumptionOfCommodity:
        orderList?.productSummary?.dailyConsumptionOfCommodity,
      existingCHA: [],
      existingProcurementOfCommodity:
        orderList?.productSummary?.existingProcurementOfCommodity,
      existingSuppliers: [],
      monthlyProductionCapacity:
        orderList?.productSummary?.monthlyProductionCapacity,
      paymentStatusForElectricityBills:
        orderList?.productSummary?.paymentStatusForElectricityBills,
      stockCoverageOfCommodity:
        orderList?.productSummary?.stockCoverageOfCommodity,
      typeOfCurrency: orderList?.productSummary?.typeOfCurrency,
      unitOfQuantity: orderList?.productSummary?.unitOfQuantity,
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
      supplierName: orderList?.supplierCredential?.supplierName,
    })
  }, [orderList])



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
  const [approveComment, setApproveComment] = useState(
    orderList?.cam?.approvalRemarks,
  )

  const [strengthsComment, setStrengthsComment] = useState(
    orderList?.company?.recommendations?.strengths,
  )

  const [weaknessComment, setWeaknessComment] = useState(
    orderList?.company?.recommendations?.weakness,
  )

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

  // console.log(groupExposureData, "THIS IS GROUP EXP DATA")

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

  const addDebtArr = (debt) => {
    let newArr = [...debtData]
    newArr.push(debt)
    setDebtData(newArr)
  }

  const addPersonArr = (keyPersonData) => {
    // let newArr = [...personData]
    // newArr.push(keyPersonData)
    setPersonData(keyPersonData)
  }

  const onCreditSave = () => {
    const obj = {
      productSummary: { ...product },
      supplierCredential: { ...supplierCred },
      order: orderList._id,
      keyContactPerson: [...personData],
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
    }
    // console.log(obj, "credit obj")
    dispatch(UpdateCredit(obj))
  }

  const handleCamApprove = () => {
    const obj = {
      approvalRemarks: [...approveComment],
      order: orderList._id,
      status: 'Approved',
    }
    dispatch(UpdateCam(obj))
  }
  const handleCamReject = () => {
    const obj = {
      order: orderList._id,
      status: 'Rejected',
    }
    dispatch(UpdateCam(obj))
  }

  const currentOpenLink = (e) => {
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

  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className="d-flex align-items-center">
            <h1 className={`${styles.title} heading pt-3 pb-3`}>
              <img
                src={`${
                  darkMode
                    ? `/static/white-arrow.svg`
                    : `/static/arrow-right.svg`
                }`}
                alt="arrow right"
                className="img-fluid image_arrow"
              />
              {orderList?.company?.companyName}
            </h1>
            {uploadBtn ? (
              <div className="ml-auto">
                {uploadButton(dispatch, orderList)}{' '}
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
                  setUploadBtn(false)
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
                  setUploadBtn(false)
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
                  setUploadBtn(false)
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
            <div className="col-md-12  accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div
                  className="tab-pane fade show active"
                  id="Profile"
                  role="tabpanel"
                >
                  <div className="accordion" id="profileAccordion">
                    <CompanyDetails order={orderList?.company} companyId={companyData?.company} companyDetail={companyData} />
                    <AuditorsDetail auditorsDetails={companyData?.profile?.auditorDetail} />
                    <AuditorDeatils directorData={companyData} />
                    <ShareHoldingPattern shareHolding={companyData?.profile?.shareholdingPattern} />
                    <CreditRatings creditRating={companyData?.profile?.creditRating} />
                  </div>
                </div>
                <div className="tab-pane fade" id="Financials" role="tabpanel">
                  <div className="accordion" id="FinancialsAccordion">
                    <BalanceSheet balanceData={companyData} />

                    <IncomeStatement incomeData={companyData} />

                    <CashFlow cashData={companyData} />

                    <Ratios ratioData={companyData} />

                    <Peer peerData={companyData} />

                    <OpenCharges chargesData={companyData} />
                  </div>
                </div>
                <div className="tab-pane fade" id="gst" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <GST />
                  </div>
                </div>
                <div className="tab-pane fade" id="Compliance" role="tabpanel">
                  <div className={`${styles.card} card`}>
                    <div
                      className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                      data-toggle="collapse"
                      data-target="#compliance"
                      aria-expanded="true"
                      aria-controls="compliance"
                    >
                      <div
                        className={`${styles.detail_head_container}  d-flex align-items-center justify-content-between w-100`}
                      >
                        <h2 className="mb-0 w-100 ">Compliance</h2>
                        <div
                          className={`${styles.categories} mb-0  d-flex align-items-center justify-content-end `}
                        >
                          <label className={styles.label}>Status:</label>
                          <div
                            className={`${styles.status} d-flex align-items-center justify-content-between`}
                          >
                            <span>
                              {companyData?.compliance?.other?.complianceStatus}{' '}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span>+</span>
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
                              Severe Risk (1)
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
                                      alert.severity.trim().toLowerCase() ===
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
                                            {alert.alert}
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
                            <span className={styles.head}>High Risk (4)</span>
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
                                            {alert.alert}
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
                            <span className={styles.head}>Medium Risk (2)</span>
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
                                            {alert.alert}
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
                            <span className={styles.head}>High Risk (4)</span>
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
                                      'Low'
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
                                            {alert.alert}
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
                      data-toggle="collapse"
                      data-target="#details"
                      aria-expanded="true"
                      aria-controls="details"
                    >
                      <div
                        className={`${styles.detail_head_container}  d-flex align-items-center justify-content-between w-100`}
                      >
                        <h2 className="mb-0 w-100 ">Details</h2>
                        <div
                          className={`${styles.categories} mb-0  d-flex align-items-center justify-content-between `}
                        >
                          <label className={styles.label}>Categories:</label>
                          <select
                            onChange={(e) =>
                              setComplienceFilter(e.target.value)
                            }
                            className="form-control"
                          >
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="low">low</option>
                            <option value="Severe">Severe</option>
                          </select>
                        </div>
                      </div>
                      <span>+</span>
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
                        {table2(companyData, complienceFilter)}
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.card} card`}>
                    <div
                      className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                      data-toggle="collapse"
                      data-target="#litigations"
                      aria-expanded="true"
                      aria-controls="litigations"
                    >
                      <div
                        className={`${styles.detail_head_container}  d-flex align-items-center justify-content-between w-100`}
                      >
                        <h2 className="w-100 mb-3">Litigations</h2>
                        <div
                          className={`${styles.categories}  d-flex align-items-center `}
                        >
                          <label className={styles.label}>
                            Litigations Status:
                          </label>
                          <select
                            onChange={updateLitigationStatus}
                            className="form-control"
                          >
                            {orderList?.company?.litigationStatus !==
                            'Active' ? (
                              <>
                                <option value="Pending">Pending</option>
                                <option value="Active">Active</option>
                              </>
                            ) : (
                              <>
                                <option value="Active">Active</option>
                                <option value="Pending">Pending</option>
                              </>
                            )}
                          </select>
                        </div>
                      </div>
                      <span>+</span>
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
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Pending (
                                    {
                                      companyData?.compliance?.litigations[0]
                                        ?.pendingCase
                                    }
                                    )
                                  </label>
                                </div>
                                <div className="form-check ml-4">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Disposed (
                                    {
                                      companyData?.compliance?.litigations[0]
                                        ?.disposedCase
                                    }
                                    )
                                  </label>
                                </div>
                                <div className="form-check  ml-4">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Total Cases (
                                    {
                                      companyData?.compliance?.litigations[0]
                                        ?.totalCase
                                    }
                                    )
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
                                    value=""
                                    id="Respondent"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="Respondent"
                                  >
                                    Respondent
                                  </label>
                                </div>
                                <div className="form-check ml-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value=""
                                    id="Respondent"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="Respondent"
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
                                    value=""
                                    id="Classification"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="Classification"
                                  >
                                    Civil
                                  </label>
                                </div>
                                <div className="form-check ml-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value=""
                                    id="Classification"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="Classification"
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
                              />
                              <span className={styles.control__content}>
                                <span>{`High Risk (${companyData?.compliance?.litigations[0]?.highRisk})`}</span>
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
                              />
                              <span className={styles.control__content}>
                                <span>{`Medium Risk (${companyData?.compliance?.litigations[0]?.mediumRisk})`}</span>
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
                              />
                              <span className={styles.control__content}>
                                <span>{`High Relevance (${companyData?.compliance?.litigations[0]?.highPriority})`}</span>
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

                        <div>{ligitations(companyData)}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="Orders" role="tabpanel">
                  <div className={`${styles.card}`}>
                    <Order
                      orderDetail={orderList}
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
                    creditDetail={orderList}
                    keyAddDataArr={keyAddDataArr}
                    addDebtArr={addDebtArr}
                    addPersonArr={addPersonArr}
                    saveProductData={saveProductData}
                    debtData={debtData}
                    personData={personData}
                    saveSupplierData={saveSupplierData}
                    keyAddData={keyAddData}
                  />
                  <Recommendations
                    creditDetail={orderList}
                    groupExposureData={groupExposureData}
                    addGroupExpArr={addGroupExpArr}
                    financialsComment={financialsComment}
                    addWeaknessCommentArr={addWeaknessCommentArr}
                    addStrengthsCommentArr={addStrengthsCommentArr}
                    addSanctionCommentArr={addSanctionCommentArr}
                    addFinancialsCommentArr={addFinancialsCommentArr}
                    addCompanyCommentArr={addCompanyCommentArr}
                    companyComment={companyComment}
                    sanctionComment={sanctionComment}
                    strengthsComment={strengthsComment}
                    weaknessComment={weaknessComment}
                  />
                  <CommonSave onSave={onCreditSave} />
                </div>
                <div className="tab-pane fade" id="cam" role="tabpanel">
                  <CAM
                    camData={orderList}
                    companyData={companyData}
                    addApproveRemarkArr={addApproveRemarkArr}
                    approveComment={approveComment}
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="DocumentsTab"
                  role="tabpanel"
                >
                  <div className="accordion" id="profileAccordion">
                    <div className={`${styles.main} card border_color mb-4`}>
                      <div
                        className={`${styles.head_container} card-header border_color head_container d-flex justify-content-between`}
                        data-toggle="collapse"
                        data-target="#documents"
                        aria-expanded="true"
                        aria-controls="documents"
                      >
                        <h3 className={styles.heading}>
                          Upload Other Documents
                        </h3>
                        <span>+</span>
                      </div>
                      <div
                        id="documents"
                        className="collapse"
                        aria-labelledby="documents"
                        data-parent="#profileAccordion"
                      >
                        <div className={`${styles.dashboard_form} card-body`}>
                          <Form>
                            <div className="row align-items-center pb-4">
                              <div
                                className={`${styles.drop_container} d-flex align-items-center justify-content-around col-sm-6`}
                              >
                                <div className="text-center">
                                  <img
                                    className={`${styles.upload_image} img-fluid`}
                                    src="/static/browse.svg"
                                    alt="Browse"
                                  />
                                  <p className={styles.drop_para}>
                                    Drop Files here <br />
                                    or <a href="#">Browse</a>
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-4 offset-md-1 col-sm-6">
                                <Form.Group className={styles.form_group}>
                                  <Form.Label
                                    className={`${styles.label} label_heading`}
                                  >
                                    Document Type
                                  </Form.Label>
                                  <select
                                    className={`${styles.value} input form-control`}
                                    id="docType"
                                  >
                                    <option value="volvo">Others</option>
                                    <option value="audi">N/A</option>
                                  </select>
                                </Form.Group>
                                <Form.Group className={styles.form_group}>
                                  <Form.Label
                                    className={`${styles.label} label_heading`}
                                  >
                                    Please Specify Document Name
                                  </Form.Label>
                                  <Form.Control
                                    className={`${styles.value} input form-control`}
                                    type="text"
                                    placeholder="Insurance Quotation"
                                  />
                                </Form.Group>
                                <div className={styles.uploadBtnWrapper}>
                                  <input type="file" name="myfile" />
                                  <button
                                    className={`${styles.upload_button} btn`}
                                  >
                                    Upload
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Form>
                        </div>
                       
                        <div className={styles.table_container}>
                          <table
                            className={`${styles.table} table`}
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                          >
                            <thead>
                              <tr>
                                <th>DOCUMENT NAME</th>
                                <th>FORMAT</th>
                                <th>DOCUMENT DATE</th>
                                <th>UPLOADED BY</th>
                                <th>STATUS</th>
                                <th>ACTION</th>
                                <th>
                                  <img
                                    src="/static/search-blue.svg"
                                    className="img-fluid"
                                    alt="Search"
                                  />
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                        <tr className="table_row">

                                <td colSpan="7" className="p-0">
                                  <div
                                  className={`${styles.search_container} p-2 pl-4 d-flex justify-content-between`} >
                                  <div>
                                    <select
                                      className={`${styles.dropDown} table_container input form-control`}
                                    >
                                      <option value="volvo">
                                        Loading, Transit, Unloading
                                      </option>
                                      <option value="India">India</option>
                                    </select>
                                  </div>
                                </div>

                                </td>
                              </tr>
                              <tr className="table_row">
                                <td className={`${styles.doc_name}`}>
                                  Insurance Quotation
                                </td>
                                <td>
                                  <img
                                    src="/static/pdf.svg"
                                    className="img-fluid"
                                    alt="Pdf"
                                  />
                                </td>
                                <td className={styles.doc_row}>
                                  28-02-2022,5:30 PM
                                </td>
                                <td className={styles.doc_row}>John Doe</td>
                                <td>
                                  <span
                                    className={`${styles.status} ${styles.approved}`}
                                  ></span>
                                  Verified
                                </td>
                                <td colSpan="2">
                                  <img
                                    src="/static/delete.svg"
                                    className={`${styles.delete_image} img-fluid mr-3`}
                                    alt="Bin"
                                  />
                                  <img
                                    src="/static/upload.svg"
                                    className="img-fluid mr-3"
                                    alt="Share"
                                  />
                                  <img
                                    src="/static/drive_file.svg"
                                    className={`${styles.edit_image} img-fluid mr-3`}
                                    alt="Share"
                                  />
                                </td>
                              </tr>
                              <tr className="table_row">
                                <td className={styles.doc_name}>
                                  Container No. List
                                </td>
                                <td>
                                  <img
                                    src="/static/pdf.svg"
                                    className="img-fluid"
                                    alt="Pdf"
                                  />
                                </td>
                                <td className={styles.doc_row}>
                                  28-02-2022,5:30 PM
                                </td>
                                <td className={styles.doc_row}>Buyer</td>
                                <td>
                                  <span
                                    className={`${styles.status} ${styles.approved}`}
                                  ></span>
                                  Verified
                                </td>
                                <td colSpan="2">
                                  <img
                                    src="/static/delete.svg"
                                    className={`${styles.delete_image} img-fluid mr-3`}
                                    alt="Bin"
                                  />
                                  <img
                                    src="/static/upload.svg"
                                    className="img-fluid mr-3"
                                    alt="Share"
                                  />
                                  <img
                                    src="/static/drive_file.svg"
                                    className={`${styles.edit_image} img-fluid mr-3`}
                                    alt="Share"
                                  />
                                </td>
                              </tr>
                              <tr className="table_row">
                                <td className={styles.doc_name}>
                                  Container Seal No. List
                                </td>
                                <td>
                                  <img
                                    src="/static/pdf.svg"
                                    className="img-fluid"
                                    alt="Pdf"
                                  />
                                </td>
                                <td className={styles.doc_row}>
                                  28-02-2022,5:30 PM
                                </td>
                                <td className={styles.doc_row}>
                                  Rama Krishnan
                                </td>
                                <td>
                                  <span
                                    className={`${styles.status} ${styles.rejected}`}
                                  ></span>
                                  Pending
                                </td>
                                <td colSpan="2">
                                  <img
                                    src="/static/delete.svg"
                                    className={`${styles.delete_image} img-fluid mr-3`}
                                    alt="Bin"
                                  />
                                  <img
                                    src="/static/upload.svg"
                                    className="img-fluid mr-3"
                                    alt="Share"
                                  />
                                  <img
                                    src="/static/drive_file.svg"
                                    className={`${styles.edit_image} img-fluid mr-3`}
                                    alt="Share"
                                  />
                                </td>
                              </tr>
                             
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
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
          rightButtonName={`Next`}
          handleApprove={onNext}
        />
      ) : null}
      {selectedTab == 'gst' ? (
        <DownloadBar
          downLoadButtonName={`GST Report`}
          isPrevious={true}
          leftButtonName={`Previous`}
          rightButtonName={`Next`}
          handleApprove={onNext}
        />
      ) : null}
      {selectedTab == 'CAM' ? (
        <DownloadBar
          downLoadButtonName={`CAM`}
          isPrevious={true}
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

const uploadButton = (dispatch, orderList) => {
  return (
    <>
      <button onClick={() =>
        //console.log("update initiated ")
          dispatch(RefetchCombineKarza({ company: orderList?.company?._id}))
      } type="button" className={`${styles.btnPrimary} btn btn-primary`}><img src="/static/refresh.svg" alt="refresh" className="img-fluid" />Update Info</button>
      <div className={`${styles.lastModified} text `}><span>Last Modified:</span> 28 Jan,11:34am</div>
    </>
  )
}

const ligitations = (companyData) => {
  const highCourtData = companyData?.compliance?.highCourt
  const supremeCourtData = companyData?.compliance?.supremeCourt
  const districtCourtData = companyData?.compliance?.districtCourt
  const tribunalCourtsData = companyData?.compliance?.tribunalCourts

  return (
    <>
      <LigitationsTable
        data={supremeCourtData}
        Heading={'Supreme Court'}
        val={'LigitationsTable1'}
      />
      <LigitationsTable
        data={highCourtData}
        Heading={'High Court'}
        val={'LigitationsTable2'}
      />
      <LigitationsTable
        data={districtCourtData}
        Heading={'District Court'}
        val={'LigitationsTable3'}
      />
      <LigitationsTable
        data={tribunalCourtsData}
        Heading={'Tribunal Courts'}
        val={'LigitationsTable4'}
      />
    </>
  )
}

const table2 = (companyData, complienceFilter) => {
  const filteredData = companyData?.compliance?.alerts?.filter(
    (data) =>
      data.severity.trim().toLowerCase() ===
      complienceFilter.trim().toLowerCase(),
  )
  const length = filteredData?.length

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
            Statutory Compliance
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {filteredData?.map((alert, index) => (
          <tr key={index}>
            <td> {alert.alert}</td>
            <td> {alert.severity}</td>
            <td> {alert.source}</td>
            <td> {alert.idType}</td>
            <td> {alert.value}</td>
          </tr>
        ))}

        <tr>
          <td className={styles.firstCell} rowSpan="6">
            Banking Defaults
          </td>
          <td> IBBI</td>
          <td>Severe</td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        <tr>
          <td> Credit Rating Suspended</td>
          <td> High</td>
          <td>ICRA</td>
          <td>Establishment ID</td>
          <td>MRMRT0015543000, UKDDN0020827000</td>
        </tr>
        <tr>
          <td> Credit Rating Withdrawn</td>
          <td>High</td>
          <td> BRICKWORK</td>
          <td> Date Of Issuance</td>
          <td>30-04-2020</td>
        </tr>
        <tr>
          <td> </td>
          <td> </td>
          <td> BRICKWORK</td>
          <td> Date Of Issuance</td>
          <td>30-04-2020</td>
        </tr>

        <tr>
          <td> </td>
          <td> </td>
          <td> BRICKWORK</td>
          <td> Date Of Issuance</td>
          <td>30-04-2020</td>
        </tr>
        <tr>
          <td> </td>
          <td> </td>
          <td> BRICKWORK</td>
          <td> Date Of Issuance</td>
          <td>30-04-2020</td>
        </tr>
      </tbody>
    </table>
  )
}
