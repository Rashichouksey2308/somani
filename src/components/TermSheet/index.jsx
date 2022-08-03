/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import TermDetails from '../TermDetails'
import AdditionalComment from '../AdditionalComment'
import OtherTerms from '../OtherTerms'
import UploadOther from '../UploadOther'
import ApproveBar from '../ApproveBar'
import { useDispatch, useSelector } from 'react-redux'

import { setPageName } from '../../redux/userData/action'
import { GetTermsheet, updateTermsheet } from 'redux/buyerProfile/action'
import { useRouter } from 'next/router'
import { data } from 'jquery'
import _get from "lodash/get";
import { addPrefixOrSuffix, removePrefixOrSuffix } from '../../utils/helper'

const Index = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { termsheet } = useSelector((state) => state.order)
  const [payloadData, setPayloadData] = useState({})
  const [termsheetDetails, setTermsheetDetails] = useState({})
  const [otherTermsAndConditions, setOtherTermConditions] = useState({})
  const [additionalComments, setAdditionalComments] = useState([])
  const [order, setOrder] = useState('')
  console.log(termsheetDetails,'termsheetDetails')




  useEffect(() => {

    let Id = sessionStorage.getItem('termID')
    dispatch(GetTermsheet(`?termsheetId=${Id}`))
    dispatch(setPageName('termsheet'))
  }, [dispatch])
  let OrdID = sessionStorage.getItem('termOrdID')
  let newLcVal = 

  useEffect(() => {
    {
      termsheet &&
        termsheet?.data?.map((sheet) =>

          setTermsheetDetails({
            termsheetId: sheet._id,
            commodityDetails: {
              unitOfQuantity: sheet?.order?.unitOfQuantity,
              orderCurrency: sheet?.order?.orderCurrency,
              quantity: sheet?.order?.quantity,
              perUnitPrice: sheet?.order?.perUnitPrice,
              commodity: sheet?.order?.commodity,
              tolerance: sheet?.order?.tolerance,
            },
            transactionDetails: {
              lcValue: sheet?.transactionDetails?.lcValue ? sheet?.transactionDetails?.lcValue : Number(sheet?.order?.quantity * sheet?.order?.perUnitPrice),
              lcCurrency: sheet?.transactionDetails?.lcCurrency,
              marginMoney: sheet?.transactionDetails?.marginMoney,
              lcOpeningBank: sheet?.transactionDetails?.lcOpeningBank,
              incoTerms: sheet?.order?.incoTerm,
              loadPort: sheet?.transactionDetails?.loadPort,
              countryOfOrigin: sheet?.transactionDetails?.countryOfOrigin,
              shipmentType: sheet?.transactionDetails?.shipmentType,
              partShipmentAllowed: sheet?.transactionDetails?.partShipmentAllowed,
              portOfDischarge: sheet?.transactionDetails?.portOfDischarge,
              billOfEntity: sheet?.transactionDetails?.billOfEntity,
              thirdPartyInspectionReq: sheet?.transactionDetails?.thirdPartyInspectionReq,
              storageOfGoods: sheet?.transactionDetails?.storageOfGoods,
            },
            paymentDueDate: {
              computationOfDueDate: sheet?.paymentDueDate?.computationOfDueDate,
              daysFromBlDate: sheet?.paymentDueDate?.daysFromBlDate,
              daysFromVesselDischargeDate:
                sheet?.paymentDueDate?.daysFromVesselDischargeDate,
            },
            commercials: {
              tradeMarginPercentage: sheet?.commercials?.tradeMarginPercentage,
              lcOpeningValue: sheet?.commercials?.lcOpeningValue,
              lcOpeningCurrency: sheet?.commercials?.lcOpeningCurrency,
              lcOpeningChargesUnit: sheet?.commercials?.lcOpeningChargesUnit,
              lcOpeningChargesPercentage: sheet?.commercials?.lcOpeningChargesPercentage,
              usanceInterestPercetage: sheet?.commercials?.usanceInterestPercetage,
              overDueInterestPerMonth: sheet?.commercials?.overDueInterestPerMonth,
              exchangeFluctuation: sheet?.commercials?.exchangeFluctuation,
              forexHedging: sheet?.commercials?.forexHedging,
              otherTermsAndConditions: sheet?.commercials?.otherTermsAndConditions,
              version: sheet?.commercials?.version,
            },
          }),
        )
    }
  }, [termsheet])

  useEffect(() => {
    {
      termsheet &&
        termsheet?.data?.map((sheet, index) => {
          setOtherTermConditions({
            buyer: { bank: sheet?.otherTermsAndConditions?.buyer?.bank },
            chaOrstevedoringCharges: {
              customClearingCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.customClearingCharges,
              wharfaceCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.wharfaceCharges,
              pollutionCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.pollutionCharges,
              royalyAndPenaltyCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.royalyAndPenaltyCharges,
              tarpaulinCoverageCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.tarpaulinCoverageCharges,
              wheighmentAndWeighmentSurveyCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.wheighmentAndWeighmentSurveyCharges,
              draughtSurveyCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.draughtSurveyCharges,
              boatingWhileDraughtSurveyCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.boatingWhileDraughtSurveyCharges,
              hmcCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.hmcCharges,
              securityCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.securityCharges,
              piotRentalAndStorageCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.piotRentalAndStorageCharges,
              bondingOfCargoCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.bondingOfCargoCharges,
              exBondDocumentationCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.exBondDocumentationCharges,
              transferOfOwnershipCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.transferOfOwnershipCharges,
              customsBondOfficerOvertimeCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.customsBondOfficerOvertimeCharges,
              grabHireCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.grabHireCharges,
              craneHireCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.craneHireCharges,
              handlingLosses:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.handlingLosses,
              insuranceCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.insuranceCharges,
              waterSprinklingCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges
                  ?.waterSprinklingCharges,
              others:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.others,
            },
            lcOpeningCharges: {
              lcOpeningCharges:
                sheet?.otherTermsAndConditions?.lcOpeningCharges
                  ?.lcOpeningCharges,
              lcAmendmentCost:
                sheet?.otherTermsAndConditions?.lcOpeningCharges
                  ?.lcAmendmentCost,
              cmaFeesIncludingSupervisionAndSurvey:
                sheet?.otherTermsAndConditions?.lcOpeningCharges
                  ?.cmaFeesIncludingSupervisionAndSurvey,
              bankDoIssuanceCharges:
                sheet?.otherTermsAndConditions?.lcOpeningCharges
                  ?.bankDoIssuanceCharges,
              remmittanceCharges:
                sheet?.otherTermsAndConditions?.lcOpeningCharges
                  ?.remmittanceCharges,
              usanceInterest:
                sheet?.otherTermsAndConditions?.lcOpeningCharges
                  ?.usanceInterest,
            },
            otherCharges: {
              demurrageOrDetentionChargesOfVessel:
                sheet?.otherTermsAndConditions?.otherCharges
                  ?.demurrageOrDetentionChargesOfVessel,
              transportationCharges:
                sheet?.otherTermsAndConditions?.otherCharges
                  ?.transportationCharges,
              wagonHaulageCharges:
                sheet?.otherTermsAndConditions?.otherCharges
                  ?.wagonHaulageCharges,
              thirdPartyInspectionCharges:
                sheet?.otherTermsAndConditions?.otherCharges
                  ?.thirdPartyInspectionCharges,
              hedgingCharges:
                sheet?.otherTermsAndConditions?.otherCharges?.hedgingCharges,
              anyOtherCostIncurredOnBehalfOfBuyer:
                sheet?.otherTermsAndConditions?.otherCharges
                  ?.anyOtherCostIncurredOnBehalfOfBuyer,
            },
            dutyAndTaxes: {
              customsDutyWithAllGovtCess:
                sheet?.otherTermsAndConditions?.dutyAndTaxes
                  ?.customsDutyWithAllGovtCess,
              igstWithCess:
                sheet?.otherTermsAndConditions?.dutyAndTaxes?.igstWithCess,
              cimsCharges:
                sheet?.otherTermsAndConditions?.dutyAndTaxes?.cimsCharges,
            },
            insurance: {
              marineInsurance:
                sheet?.otherTermsAndConditions?.insurance?.marineInsurance,
              storageInsurance:
                sheet?.otherTermsAndConditions?.insurance?.storageInsurance,
            },
          })
        })
    }
  }, [termsheet])
  // console.log(otherTermsAndConditions, "otherTerms")

  useEffect(() => {
    termsheet?.data?.map((sheets) => {
      setOrder(sheets.order._id)
      setAdditionalComments(sheets.additionalComments)
    })
  }, [termsheet])

  const onChangeCommodityDetails = (e) => {
    const Key = e.target.id
    const value = e.target.value
    // console.log(Key, ":", value)
    setTermsheetDetails((prev) => ({
      ...prev,
      commodityDetails: { ...prev.commodityDetails, [Key]: value },
    }))
  }

  const onChangeTransactionDetails = (e) => {
    const Key = e.target.id
    const value = e.target.value
    setTermsheetDetails((prev) => ({
      ...prev,
      transactionDetails: { ...prev.transactionDetails, [Key]: value },
    }))
  }

  const onChangePaymentDueDate = (e) => {
    const Key = e.target.id
    const value = e.target.value
    setTermsheetDetails((prev) => ({
      ...prev,
      paymentDueDate: { ...prev.paymentDueDate, [Key]: value },
    }))
  }

  const onChangeCommercialTerms = (e) => {
    const Key = e.target.id
    const value = e.target.value
   // console.log(value, "bal")
    setTermsheetDetails((prev) => ({
      ...prev,
      commercials: { ...prev.commercials, [Key]: value },
    }))
  }

  const onChangeCha = (e) => {
    const Key = e.target.id
    const value = !otherTermsAndConditions?.chaOrstevedoringCharges[Key]
    // console.log("onChangeCha")
    setOtherTermConditions((prev) => ({
      ...prev,
      chaOrstevedoringCharges: {
        ...prev.chaOrstevedoringCharges,
        [Key]: value,
      },
    }))
  }

  const onChangeLcOpening = (e) => {
    const Key = e.target.id
    const value = !otherTermsAndConditions?.lcOpeningCharges[Key]
    // console.log("onChangeLcOpening")
    setOtherTermConditions((prev) => ({
      ...prev,
      lcOpeningCharges: { ...prev.lcOpeningCharges, [Key]: value },
    }))
  }
  const onChangeOther = (e) => {
    const Key = e.target.id
    const value = !otherTermsAndConditions?.otherCharges[Key]
    setOtherTermConditions((prev) => ({
      ...prev,
      otherCharges: { ...prev.otherCharges, [Key]: value },
    }))
  }
  const onChangeDutyAndTaxes = (e) => {
    const Key = e.target.id
    const value = !otherTermsAndConditions?.dutyAndTaxes[Key]
    setOtherTermConditions((prev) => ({
      ...prev,
      dutyAndTaxes: { ...prev.dutyAndTaxes, [Key]: value },
    }))
  }
  const onChangeInsurance = (e) => {
    const Key = e.target.id
    const value = !otherTermsAndConditions?.insurance[Key]
    setOtherTermConditions((prev) => ({
      ...prev,
      insurance: { ...prev.insurance, [Key]: value },
    }))
  }
  console.log(termsheetDetails, "tempSheet")
  const handleSave = () => {
     console.log(termsheetDetails.commercials.overDueInterestPerMont,"tempSheet2")
    let tempSheet=termsheetDetails

    tempSheet.commodityDetails.perUnitPrice=removePrefixOrSuffix(termsheetDetails.commodityDetails.perUnitPrice)
    tempSheet.commodityDetails.quantity=removePrefixOrSuffix(termsheetDetails.commodityDetails.quantity)
    tempSheet.transactionDetails.marginMoney=removePrefixOrSuffix(termsheetDetails.transactionDetails.marginMoney)
    tempSheet.commercials.tradeMarginPercentage=removePrefixOrSuffix(termsheetDetails.commodityDetails.perUnitPrice)
    tempSheet.commercials.overDueInterestPerMonth=removePrefixOrSuffix(termsheetDetails.commercials.overDueInterestPerMonth)
    tempSheet.commercials.lcOpeningChargesPercentage=removePrefixOrSuffix(termsheetDetails.commercials.lcOpeningChargesPercentage)
    tempSheet.commercials.usanceInterestPercetage=removePrefixOrSuffix(termsheetDetails.commercials.usanceInterestPercetage)
    //  tempSheet.commercials.overDueInterestPerMonth=removePrefixOrSuffix(tempSheet.commercials.overDueInterestPerMont)
      console.log(termsheetDetails,"tempSheet1")
      
    const UpdatedTermsheet = {
      ...tempSheet,
      status: 'Approved',
      otherTermsAndConditions,
      additionalComments,
    }

    console.log(termsheetDetails, 'updatedtermsheet')
    dispatch(updateTermsheet(UpdatedTermsheet))
    //router.push('/termsheet')
  }

  const handleChange = (name, value) => {
    const newInput = { ...payloadData, [name]: value }
    setPayloadData(newInput)
  }

  const handlePreview = () => {
    // dispatch(GetTermsheet({companyId: sheet.company._id}))
    router.push('/termsheet-preview')
  }

  const addCommentHandler = (commentType, comment) => {
    // console.log(commentType,"commentType")
    const newComment = {
      additionalCommentType: commentType,
      comment: comment,
    }
    setAdditionalComments((prev) => [...prev, newComment])
  }
  const onChangeDropDown = (e) => {
    const value = e.target.value
    setOtherTermConditions((prev) => ({
      ...prev,
      buyer: { ...prev.buyer, bank: value },
    }))
  }
  //console.log(otherTermsAndConditions, 'otherTermsAndConditions')

  return (
    <>
      <div className='container-fluid px-0'>
        <div className={`${styles.card} tabHeader border-bottom-0 shadow-none`}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow"
            />
            <h1 className={`${styles.heading} heading`}>Termsheet</h1>
          </div>
          <div className="">
            {termsheet &&
              termsheet?.data?.map((sheet, index) => (
                <div
                  key={index}
                  className={`${styles.card_body} card-body container-fluid`}
                >
                  <div className="row">
                    <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <h3 className={`${styles.label} label_heading`}>
                        Customer ID
                      </h3>
                      <p className={`${styles.value} accordion_Text`}>
                        {sheet?.company?.customerId}
                      </p>
                    </div>
                    <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <h3 className={`${styles.label} label_heading`}>
                        Buyer Name
                      </h3>
                      <p className={`${styles.value} accordion_Text`}>
                        {sheet?.company?.companyName}
                      </p>
                    </div>
                    <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <h3 className={`${styles.label} label_heading`}>
                        Created On
                      </h3>
                      <p className={`${styles.value} accordion_Text`}>
                        {(sheet?.company?.createdAt).slice(0, 10)}
                      </p>
                    </div>
                    <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <h3 className={`${styles.label} label_heading`}>
                        Last Modified
                      </h3>
                      <p className={`${styles.value} accordion_Text`}>
                        {(sheet?.company?.updatedAt).slice(0, 10)}
                      </p>
                    </div>
                    <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <h3 className={`${styles.label} label_heading`}>
                        Approved Date
                      </h3>
                      <p className={`${styles.value} accordion_Text`}>
                        {sheet?.order?.cam?.approvedAt?.slice(0, 10)}
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
              termsheetDetails={termsheetDetails}
              handleSave={handleSave}
              termsheet={termsheet}
            />
            <AdditionalComment
              addCommentHandler={addCommentHandler}
              additionalComments={additionalComments}
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
            />
            <UploadOther module='Agreements,Insurance,LcOpening' orderid={OrdID} />
          </div>
        </div>
      </div>
      <ApproveBar
        handleReject={handleSave}
        handleApprove={handlePreview}
        button={'Save'}
        button2={'Preview'}
      />
    </>
  )
}

export default Index
