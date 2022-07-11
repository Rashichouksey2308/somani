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
    const [payloadData, setPayloadData] = useState({})
    const [termsheetDetails, setTermsheetDetails] = useState({})
    const [otherTermsAndConditions, setOtherTermConditions] = useState({})
    const [additionalComments, setAdditionalComments] = useState([])

    useEffect(() => {
        dispatch(setPageName('termsheet',))
    })
    useEffect(() => {
        {
            termsheet && termsheet?.data?.map((sheet) => (
                setTermsheetDetails({
                    termsheetId: sheet._id,
                    commodityDetails: {
                        unitOfQuantity: sheet?.order?.unitOfQuantity,
                        orderCurrency: sheet?.order?.orderCurrency,
                        quantity: sheet?.order?.quantity,
                        perUnitPrice: sheet?.order?.orderValue,
                        commodity: sheet?.order?.commodity,
                        tolerance: sheet?.order?.tolerance,
                    },
                    transactionDetails: {
                        lcValue: 0,
                        lcCurrency: sheet?.transactionDetails?.lcValue,
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
                        daysFromVesselDischargeDate: sheet?.paymentDueDate?.daysFromVesselDischargeDate
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
                })
            ))
        }
    }, [termsheet]);


    useEffect(() => {
        {
            termsheet && termsheet?.data?.map((sheet, index) => {
                setOtherTermConditions(sheet.otherTermsAndConditions)
            })
        }

    }, [termsheet])
    console.log(otherTermsAndConditions, "otherTerms")


    useEffect(() => {
        termsheet?.data?.map((sheets) => {
            setAdditionalComments(sheets.additionalComments)
        })
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
        const value = !otherTermsAndConditions?.chaOrstevedoringCharges[Key]
        console.log("onChangeCha")
        setOtherTermConditions(prev => ({ ...prev, chaOrstevedoringCharges: { ...prev.chaOrstevedoringCharges, [Key]: value } }))
    }

    const onChangeLcOpening = (e) => {
        const Key = e.target.id
        const value = !otherTermsAndConditions?.lcOpeningCharges[Key]
        console.log("onChangeLcOpening")
        setOtherTermConditions(prev => ({ ...prev, lcOpeningCharges: { ...prev.lcOpeningCharges, [Key]: value } }))
    }
    const onChangeOther = (e) => {
        const Key = e.target.id
        const value = !otherTermsAndConditions?.otherCharges[Key]
        setOtherTermConditions(prev => ({ ...prev, otherCharges: { ...prev.otherCharges, [Key]: value } }))
    }
    const onChangeDutyAndTaxes = (e) => {
        const Key = e.target.id
        const value = !otherTermsAndConditions?.dutyAndTaxes[Key]
        setOtherTermConditions(prev => ({ ...prev, dutyAndTaxes: { ...prev.dutyAndTaxes, [Key]: value } }))
    }
    const onChangeInsurance = (e) => {
        const Key = e.target.id
        const value = !otherTermsAndConditions?.insurance[Key]
        setOtherTermConditions(prev => ({ ...prev, insurance: { ...prev.insurance, [Key]: value } }))
    }

    const handleSave = () => {
        const UpdatedTermsheet = { ...termsheetDetails, otherTermsAndConditions,additionalComments }
        console.log(UpdatedTermsheet, "updatedtermsheet")
        dispatch(updateTermsheet(UpdatedTermsheet))
        //router.push('/termsheet')
    }

    const handleChange = (name, value) => {
        const newInput = { ...payloadData, [name]: value }
        setPayloadData(newInput)
    }

    const handlePreview = () => {
        // dispatch(getTermsheet({companyId: sheet.company._id}))
        router.push('/termsheet-preview')
    }

    const addCommentHandler = (commentType, comment) => {
        console.log(commentType,"commentType")
        const newComment = {
            additionalCommentType: commentType,
            comment: comment

        }
        setAdditionalComments(prev => ([...prev, newComment]))

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
                                    <p className={`${styles.value} accordion_Text`}>{sheet?.company?.customerId}</p>
                                </div>
                                <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                                    <h3 className={`${styles.label} label_heading`}>Buyer Name</h3>
                                    <p className={`${styles.value} accordion_Text`}>{sheet?.company?.companyName}</p>
                                </div>
                                <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                                    <h3 className={`${styles.label} label_heading`}>Created On</h3>
                                    <p className={`${styles.value} accordion_Text`}>{(sheet?.company?.createdAt).slice(0, 10)}</p>
                                </div>
                                <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                                    <h3 className={`${styles.label} label_heading`}>Last Modified</h3>
                                    <p className={`${styles.value} accordion_Text`}>{(sheet?.company?.updatedAt).slice(0, 10)}</p>
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
                    <AdditionalComment
                     addCommentHandler={addCommentHandler}
                      additionalComments={additionalComments}
                        />
                    <OtherTerms
                        otherTermConditions={otherTermsAndConditions}
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
