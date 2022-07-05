import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import TermDetails from '../TermDetails'
import AdditionalComment from '../AdditionalComment'
import OtherTerms from '../OtherTerms'
import UploadOther from '../UploadOther'
import ApproveBar from '../ApproveBar'
import { useDispatch, useSelector } from 'react-redux'

import { setPageName } from '../../redux/userData/action'
import { getTermsheet, updateTermsheet } from 'redux/buyerProfile/action'
import { useRouter } from 'next/router'
import { data } from 'jquery'

const Index = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { termsheet } = useSelector((state) => state.order)
    console.log(termsheet?.data, "termsheet")

    const [payloadData, setPayloadData] = useState({})
    const [termsheetDetails, setTermsheetDetails] = useState({})
    const [otherTermConditions, setOtherTermConditions] = useState({})


    useEffect(() => {
        dispatch(getTermsheet())
      }, [dispatch])
      console.log(termsheet,"termsheet")
    useEffect(() => {
    dispatch(setPageName('termsheet',))
   })    
    

    useEffect(() => {
        {
            termsheet && termsheet?.data?.map((sheet, index) => {
                setOtherTermConditions({
                    chaOrstevedoringCharges: {
                        customClearingCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.customClearingCharges,
                        wharfaceCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.wharfaceCharges,
                        pollutionCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.pollutionCharges,
                        royalyAndPenaltyCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.royalyAndPenaltyCharges,
                        tarpaulinCoverageCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.tarpaulinCoverageCharges,
                        wheighmentAndWeighmentSurveyCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.wheighmentAndWeighmentSurveyCharges,
                        draughtSurveyCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.draughtSurveyCharges,
                        boatingWhileDraughtSurveyCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.boatingWhileDraughtSurveyCharges,
                        hmcCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.hmcCharges,
                        securityCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.securityCharges,
                        piotRentalAndStorageCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.piotRentalAndStorageCharges,
                        bondingOfCargoCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.bondingOfCargoCharges,
                        exBondDocumentationCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.exBondDocumentationCharges,
                        transferOfOwnershipCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.transferOfOwnershipCharges,
                        customsBondOfficerOvertimeCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.customsBondOfficerOvertimeCharges,
                        grabHireCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.grabHireCharges,
                        craneHireCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.craneHireCharges,
                        handlingLosses: sheet.otherTermsAndConditions.chaOrstevedoringCharges.handlingLosses,
                        insuranceCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.insuranceCharges,
                        waterSprinklingCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.waterSprinklingCharges,
                        others: sheet.otherTermsAndConditions.chaOrstevedoringCharges.others
                    },
                    lcOpeningCharges: {
                        lcOpeningCharges: sheet.otherTermsAndConditions.lcOpeningCharges.lcOpeningCharges,
                        lcAmendmentCost: sheet.otherTermsAndConditions.lcOpeningCharges.lcAmendmentCost,
                        cmaFeesIncludingSupervisionAndSurvey: sheet.otherTermsAndConditions.lcOpeningCharges.cmaFeesIncludingSupervisionAndSurvey,
                        bankDoIssuanceCharges: sheet.otherTermsAndConditions.lcOpeningCharges.bankDoIssuanceCharges,
                        remmittanceCharges: sheet.otherTermsAndConditions.lcOpeningCharges.remmittanceCharges,
                        usanceInterest: sheet.otherTermsAndConditions.lcOpeningCharges.usanceInterest
                    },
                    otherCharges: {
                        demurrageOrDetentionChargesOfVessel: sheet.otherTermsAndConditions.otherCharges.demurrageOrDetentionChargesOfVessel,
                        transportationCharges: sheet.otherTermsAndConditions.otherCharges.transportationCharges,
                        wagonHaulageCharges: sheet.otherTermsAndConditions.otherCharges.wagonHaulageCharges,
                        thirdPartyInspectionCharges: sheet.otherTermsAndConditions.otherCharges.thirdPartyInspectionCharges,
                        hedgingCharges: sheet.otherTermsAndConditions.otherCharges.hedgingCharges,
                        anyOtherCostIncurredOnBehalfOfBuyer: sheet.otherTermsAndConditions.otherCharges.anyOtherCostIncurredOnBehalfOfBuyer
                    },
                    dutyAndTaxes: {
                        customsDutyWithAllGovtCess: sheet.otherTermsAndConditions.dutyAndTaxes.customsDutyWithAllGovtCess,
                        igstWithCess: sheet.otherTermsAndConditions.dutyAndTaxes.igstWithCess,
                        cimsCharges: sheet.otherTermsAndConditions.dutyAndTaxes.cimsCharges
                    },
                    insurance: {
                        marineInsurance: sheet.otherTermsAndConditions.insurance.marineInsurance,
                        storageInsurance: sheet.otherTermsAndConditions.insurance.storageInsurance
                    }
                })
            })
        }

    }, [termsheet])


    const onChangeCommodityDetails = (e) => {
        const Key = e.target.id
        const value = e.target.value
        console.log(Key, ":", value)
        setTermsheetDetails(prev => ({ ...prev, commodityDetails: { ...prev.commodityDetails, [Key]: value } }))
    }

    const onChangeTransactionDetails = (e) => {
        const Key = e.target.id
        const value = e.target.value
        setTermsheetDetails(prev => ({ ...prev, transactionDetails: { ...prev.transactionDetails, [Key]: value } }))
    }

    const onChangePaymentDueDate = (e) => {
        const Key = e.target.id
        const value = e.target.value
        setTermsheetDetails(prev => ({ ...prev, paymentDueDate: { ...prev.paymentDueDate, [Key]: value } }))
    }

    const onChangeCommercialTerms = (e) => {
        const Key = e.target.id
        const value = e.target.value
        setTermsheetDetails(prev => ({ ...prev, commercials: { ...prev.commercials, [Key]: value } }))
    }



    const onChangeCha = (e) => {
        const Key = e.target.id
        const value = !otherTermConditions?.chaOrstevedoringCharges[Key]
        setOtherTermConditions(prev => ({ ...prev, chaOrstevedoringCharges: { ...prev.chaOrstevedoringCharges, [Key]: value } }))
    }

    const onChangeLcOpening = (e) => {
        const Key = e.target.id
        const value = !otherTermConditions?.lcOpeningCharges[Key]
        setOtherTermConditions(prev => ({ ...prev, lcOpeningCharges: { ...prev.lcOpeningCharges, [Key]: value } }))
    }
    const onChangeOther = (e) => {
        const Key = e.target.id
        const value = !otherTermConditions?.otherCharges[Key]
        setOtherTermConditions(prev => ({ ...prev, otherCharges: { ...prev.otherCharges, [Key]: value } }))
    }
    const onChangeDutyAndTaxes = (e) => {
        const Key = e.target.id
        const value = !otherTermConditions?.dutyAndTaxes[Key]
        setOtherTermConditions(prev => ({ ...prev, dutyAndTaxes: { ...prev.dutyAndTaxes, [Key]: value } }))
    }
    const onChangeInsurance = (e) => {
        const Key = e.target.id
        const value = !otherTermConditions?.insurance[Key]
        setOtherTermConditions(prev => ({ ...prev, insurance: { ...prev.insurance, [Key]: value } }))
    }



    const handleSave = () => {
        const UpdatedTermsheet = {...termsheetDetails,otherTermConditions}
        //const payload = { ...UpdatedTermsheet, termsheetId: termsheet._id, }
        dispatch(updateTermsheet(UpdatedTermsheet))
        router.push('/termsheet')
    }

    const handleChange = (name, value) => {
        const newInput = { ...payloadData, [name]: value }
        setPayloadData(newInput)
    }

    const handlePreview = () => {
       // dispatch(getTermsheet({companyId: sheet.company._id}))
        router.push('/termsheet-preview')
    }


    return (
        <>
            <div className={`${styles.card} container-fluid tabHeader`}>
                <div className={styles.head_header}>
                    <img className={`${styles.arrow} img-fluid`}
                        src="/static/keyboard_arrow_right-3.svg" alt="arrow" />
                    <h1 className={`${styles.heading} heading`}>Termsheet</h1>
                </div>

                <div className='pb-4'>
                    {termsheet && termsheet?.data?.map((sheet, index) => (
                        <div key={index} className={`${styles.card_body} card-body container-fluid`}>
                            <div className="row">
                                <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                                    <h3 className={`${styles.label} label_heading`}>Customer ID</h3>
                                    <p className={`${styles.value} accordion_Text`}>{sheet.company.customerId}</p>
                                </div>
                                <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                                    <h3 className={`${styles.label} label_heading`}>Buyers Name</h3>
                                    <p className={`${styles.value} accordion_Text`}>{sheet.company.companyName}</p>
                                </div>
                                <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                                    <h3 className={`${styles.label} label_heading`}>Created On</h3>
                                    <p className={`${styles.value} accordion_Text`}>{(sheet.company.createdAt).slice(0, 10)}</p>
                                </div>
                                <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                                    <h3 className={`${styles.label} label_heading`}>Last Modified</h3>
                                    <p className={`${styles.value} accordion_Text`}>{(sheet.company.updatedAt).slice(0, 10)}</p>
                                </div>
                                <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                                    <h3 className={`${styles.label} label_heading`}>Approved Date</h3>
                                    <p className={`${styles.value} accordion_Text`}></p>
                                </div>
                                <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                                    <h3 className={`${styles.label} label_heading`}>Status</h3>
                                    <p className={`${styles.value} accordion_Text`}><span className={`${styles.status}`}></span>{sheet.status}</p>
                                </div>
                            </div>
                        </div>))}
                    <TermDetails
                        onChangeTransactionDetails={onChangeTransactionDetails}
                        onChangeCommodityDetails={onChangeCommodityDetails}
                        onChangeCommercialTerms={onChangeCommercialTerms}
                        onChangePaymentDueDate={onChangePaymentDueDate}
                        termsheetDetails={termsheetDetails}
                        handleSave={handleSave}
                        termsheet={termsheet} />
                    <AdditionalComment termsheet={termsheet} />
                    <OtherTerms
                        otherTermConditions={otherTermConditions}
                        onChangeInsurance={onChangeInsurance}
                        onChangeDutyAndTaxes={onChangeDutyAndTaxes}
                        onChangeOther={onChangeOther}
                        onChangeLcOpening={onChangeLcOpening}
                        onChangeCha={onChangeCha}
                        termsheet={termsheet} />
                    <UploadOther />
                </div>
            </div>
            <ApproveBar handleReject={handleSave} handleApprove={handlePreview} button={"Save"} button2={"Preview"} />
        </>
    )
}

export default Index
