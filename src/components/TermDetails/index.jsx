import React, { useState } from 'react'
import { useEffect } from 'react'
import styles from './index.module.scss'

const Index = ({ termsheet, handleSave, termsheetDetails, onChangeCommodityDetails, onChangeCommercialTerms, onChangePaymentDueDate, onChangeTransactionDetails }) => {
    //const [termsheetDetails, setTermsheetDetails] = useState({})


    // useEffect(() => {
    //     {
    //         termsheet && termsheet?.data?.map((sheet) => (
    //             setTermsheetDetails({
    //                 commodityDetails: {
    //                     unitOfQuantity: sheet.order.unitOfQuantity,
    //                     orderCurrency: sheet.order.orderCurrency,
    //                     quantity: sheet.order.quantity,
    //                     perUnitPrice: sheet.order.orderValue,
    //                     commodity: sheet.order.commodity,
    //                     tolerance: sheet.order.tolerance,
    //                 },
    //                 transactionDetails: {
    //                     lcValue: 0,
    //                     lcCurrency: sheet.transactionDetails.lcValue,
    //                     marginMoney: sheet.transactionDetails.marginMoney,
    //                     lcOpeningBank: sheet.transactionDetails.lcOpeningBank,
    //                     incoTerms: sheet.order.incoTerm,
    //                     loadPort: sheet.transactionDetails.loadPort,
    //                     countryOfOrigin: sheet.transactionDetails.countryOfOrigin,
    //                     shipmentType: sheet.transactionDetails.shipmentType,
    //                     partShipmentAllowed: sheet.transactionDetails.partShipmentAllowed,
    //                     portOfDischarge: sheet.transactionDetails.portOfDischarge,
    //                     billOfEntity: sheet.transactionDetails.billOfEntity,
    //                     thirdPartyInspectionReq: sheet.transactionDetails.thirdPartyInspectionReq,
    //                     storageOfGoods: sheet.transactionDetails.storageOfGoods,
    //                 },
    //                 paymentDueDate: {
    //                     computationOfDueDate: sheet.paymentDueDate.computationOfDueDate,
    //                     daysFromBlDate: sheet.paymentDueDate.daysFromBlDate,
    //                     daysFromVesselDischargeDate: sheet.paymentDueDate.daysFromVesselDischargeDate
    //                 },
    //                 commercials: {
    //                     tradeMarginPercentage: sheet.commercials.tradeMarginPercentage,
    //                     lcOpeningValue: sheet.commercials.lcOpeningValue,
    //                     lcOpeningCurrency: sheet.commercials.lcOpeningCurrency,
    //                     lcOpeningChargesUnit: sheet.commercials.lcOpeningChargesUnit,
    //                     lcOpeningChargesPercentage: sheet.commercials.lcOpeningChargesPercentage,
    //                     usanceInterestPercetage: sheet.commercials.usanceInterestPercetage,
    //                     overDueInterestPerMonth: sheet.commercials.overDueInterestPerMonth,
    //                     exchangeFluctuation: sheet.commercials.exchangeFluctuation,
    //                     forexHedging: sheet.commercials.forexHedging,
    //                     otherTermsAndConditions: sheet.commercials.otherTermsAndConditions,
    //                     version: sheet.commercials.version,
    //                 },
    //             })
    //         ))
    //     }
    // }, [termsheet]);



    // const onChangeCommodityDetails = (e) => {
    //     const Key = e.target.id
    //     const value = e.target.value
    //     setTermsheetDetails(prev => ({ ...prev, commodityDetails: { ...prev.commodityDetails, [Key]: value } }))
    // }

    // const onChangeTransactionDetails = (e) => {
    //     const Key = e.target.id
    //     const value = e.target.value
    //     setTermsheetDetails(prev => ({ ...prev, transactionDetails: { ...prev.transactionDetails, [Key]: value } }))
    // }

    // const onChangePaymentDueDate = (e) => {
    //     const Key = e.target.id
    //     const value = e.target.value
    //     setTermsheetDetails(prev => ({ ...prev, paymentDueDate: { ...prev.paymentDueDate, [Key]: value } }))
    // }

    // const onChangeCommercialTerms = (e) => {
    //     const Key = e.target.id
    //     const value = e.target.value
    //     setTermsheetDetails(prev => ({ ...prev, commercials: { ...prev.commercials, [Key]: value } }))
    // }






    return (
        <div className={`${styles.main} main`}>
            <div className={`${styles.head_container} border_color d-flex justify-content-between`} data-toggle="collapse" data-target="#termDetails" aria-expanded="true" aria-controls="termDetails">
                <h3 className={styles.heading}>Termsheet</h3>
                <span>+</span>
            </div>
            <div id="termDetails" className="collapse" aria-labelledby="termDetails" data-parent="#termDetails">

                <div className={`${styles.dashboard_form} card-body`}>
                    <h3 className={`${styles.sub_heading}`}>Commodity details</h3>


                    <div className='row'>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <div className='d-flex'>
                                <input id='commodity' className={`${styles.value} input form-control`} defaultValue={termsheetDetails?.commodityDetails?.commodity} onChange={onChangeCommodityDetails} type="text" required />
                                <label className={`${styles.label} label_heading`}>Commodity<strong className="text-danger">*</strong></label>
                                <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
                            </div>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select id='unitOfQuantity' className={`${styles.value} input form-control`} onChange={onChangeCommodityDetails} required>
                                <option value={termsheetDetails?.commodityDetails?.unitOfQuantity}>{termsheetDetails?.commodityDetails?.unitOfQuantity} </option>
                                <option value="MT">MT</option>
                                <option value="KG">KG</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Units of Measurement (UOM)<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select id='orderCurrency' className={`${styles.value} input form-control`} onChange={onChangeCommodityDetails} required>
                                <option value={termsheetDetails?.commodityDetails?.orderCurrency}>{termsheetDetails?.commodityDetails?.orderCurrency}</option>
                                <option value="USD">USD</option>
                                <option value="Rupee">Rupee</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Currency<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <input id='quantity' className={`${styles.value} input form-control`} defaultValue={termsheetDetails?.commodityDetails?.quantity} onChange={onChangeCommodityDetails} type="text" required />
                            <label className={`${styles.label} label_heading`}>Quantity<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <input id='perUnitPrice' className={`${styles.value} input form-control`} defaultValue={termsheetDetails?.commodityDetails?.perUnitPrice} onChange={onChangeCommodityDetails} type="text" required />
                            <label className={`${styles.label} label_heading`}>Unit Price<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select id='tolerance' className={`${styles.value} input form-control`} onChange={onChangeCommodityDetails} required>
                                <option value={termsheetDetails?.commodityDetails?.tolerance}>±{termsheetDetails?.commodityDetails?.tolerance}% </option>
                                <option value="±10">±10%</option>
                                <option value="±20">±20%</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Tolerance (+/-) Percentage<strong className="text-danger">*</strong></label>
                        </div>
                    </div>


                </div>
                <div className={`${styles.dashboard_form} card-body`}>
                    <h3 className={styles.sub_heading}>Transaction Details</h3>

                    <div className='row'>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <select id='lcValue' className={`${styles.value} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.lcValue}>{termsheetDetails?.transactionDetails?.lcValue} </option>
                                <option value="USD 2000">USD 2000</option>
                                <option value="RS 1000">RS 1000</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>LC Value<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <input id='marginMoney' className={`${styles.value} input form-control`} type="text" defaultValue={termsheetDetails?.transactionDetails?.marginMoney} onChange={onChangeTransactionDetails} required />
                            <label className={`${styles.label} label_heading`}>Margin Money (%)<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <select id='lcOpeningBank' className={`${styles.value} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.lcOpeningBank}>{termsheetDetails?.transactionDetails?.lcOpeningBank} </option>
                                <option value="First Class European Bank">First Class European Bank</option>
                                <option value="US Bank">US Bank</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>LC Opening Bank<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <select id='incoTerm' className={`${styles.value} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.incoTerm}>{termsheetDetails?.transactionDetails?.incoTerm} </option>
                                <option value="FOB">FOB</option>
                                <option value="India">India</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>INCO Terms<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select id='loadPort' className={`${styles.value} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.loadPort}>{termsheetDetails?.transactionDetails?.loadPort} </option>
                                <option value="Abbot Port">Abbot Port</option>
                                <option value="India Port">India Port</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Load Port<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select id='countryOfOrigin' className={`${styles.value} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.countryOfOrigin}>{termsheetDetails?.transactionDetails?.countryOfOrigin} </option>
                                <option value="Australia">Australia</option>
                                <option value="India">India</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Country Of Origin<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select id='shipmentType' className={`${styles.value} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.shipmentType}>{termsheetDetails?.transactionDetails?.shipmentType} </option>
                                <option value="Bulk">Bulk</option>
                                <option value="India">India</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Shipment Type<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select id='partShipmentAllowed' className={`${styles.value} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.partShipmentAllowed}>{termsheetDetails?.transactionDetails?.partShipmentAllowed} </option>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Part Shipment Allowed<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select id='portOfDischarge' className={`${styles.value} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.portOfDischarge}>{termsheetDetails?.transactionDetails?.portOfDischarge} </option>
                                <option value="Visakhapatnam">Visakhapatnam</option>
                                <option value="India">India</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Port Of Discharge<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select id='billOfEntity' className={`${styles.value} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.billOfEntity}>{termsheetDetails?.transactionDetails?.billOfEntity} </option>
                                <option value="Home Consumption">Home Consumption</option>
                                <option value="Abroad">Abroad</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Bill of Entry<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select id='thirdPartyInspectionReq' className={`${styles.value} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.thirdPartyInspectionReq}>{termsheetDetails?.transactionDetails?.thirdPartyInspectionReq} </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>3rd Party Inspection Required<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select className={`${styles.value} input form-control`} required>
                                <option value="volvo">Load Port</option>
                                <option value="audi">India</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Load Port<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select id='storageOfGoods' className={`${styles.value} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.storageOfGoods}>{termsheetDetails?.transactionDetails?.storageOfGoods} </option>
                                <option value="Gangavaram Port, Andhra Pradesh">Gangavaram Port, Andhra Pradesh</option>
                                <option value="Mumbai Port, Mumbai">Mumbai Port, Mumbai</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Storage of Goods<strong className="text-danger">*</strong></label>
                        </div>
                    </div>


                </div>
                <div className={`${styles.dashboard_form} card-body`}>
                    <h3 className={styles.sub_heading}>Payment Due Date</h3>

                    <div className='row'>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <select id='computationOfDueDate' className={`${styles.value} input form-control`} onChange={onChangePaymentDueDate} required>
                                <option value={termsheetDetails.paymentDueDate?.computationOfDueDate}>{termsheetDetails.paymentDueDate?.computationOfDueDate} </option>
                                <option value="Select">Select</option>
                                <option value="India">India</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Computation of Due date<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <input id='daysFromBlDate' className={`${styles.value} input form-control`} type="text" defaultValue={termsheetDetails?.paymentDueDate?.daysFromBlDate} onChange={onChangePaymentDueDate} required />
                            <label className={`${styles.label} label_heading`}>Days From BL Date<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <input id='daysFromVesselDischargeDate' className={`${styles.value} input form-control`} type="text" defaultValue={termsheetDetails?.paymentDueDate?.daysFromVesselDischargeDate} onChange={onChangePaymentDueDate} required />
                            <label className={`${styles.label} label_heading`}>Days From Vessel Discharge Date<strong className="text-danger">*</strong></label>
                        </div>
                    </div>
                </div>
                <div className={`${styles.dashboard_form} card-body`}>
                    <h3 className={styles.sub_heading}>Commercial Terms</h3>
                    <div className='row'>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <input id='tradeMarginPercentage' className={`${styles.value} input form-control`} type="text" defaultValue={termsheetDetails.commercials?.tradeMarginPercentage} onChange={onChangeCommercialTerms} required />
                            <label className={`${styles.label} label_heading`}>Trade Margin(%)<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <input id='lcOpeningChargesUnit' className={`${styles.value} input form-control`} type="text" defaultValue={termsheetDetails?.commercials?.lcOpeningChargesUnit} onChange={onChangeCommercialTerms} required />
                            <label className={`${styles.label} label_heading`}>LC Opening Charges (Minimum)<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <input id='usanceInterestPercetage' className={`${styles.value} input form-control`} type="text" defaultValue={termsheetDetails?.commercials?.usanceInterestPercetage} onChange={onChangeCommercialTerms} required />
                            <label className={`${styles.label} label_heading`}>LC Opening Charges (%)<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <input id='overDueInterestPerMonth' className={`${styles.value} input form-control`} type="text" defaultValue={termsheetDetails?.commercials?.overDueInterestPerMonth} onChange={onChangeCommercialTerms} required />
                            <label className={`${styles.label} label_heading`}>Usance Interest (%) For 90 Days<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <input id='overDueInterestPerMonth' className={`${styles.value} input form-control`} type="text" defaultValue={termsheetDetails?.commercials?.overDueInterestPerMonth} onChange={onChangeCommercialTerms} required />
                            <label className={`${styles.label} label_heading`}>Overdue Interest per Month (%)<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select id='exchangeFluctuation' className={`${styles.value} input form-control`} onChange={onChangeCommercialTerms} required>
                                <option value={termsheetDetails?.commercials?.exchangeFluctuation}>{termsheetDetails?.commercials?.exchangeFluctuation} </option>
                                <option value="On Buyers A/C">On Buyers A/C</option>
                                <option value="On Sellers A/C">On Sellers A/C</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Exchange Fluctation<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select id='forexHedging' className={`${styles.value} input form-control`} onChange={onChangeCommercialTerms} required>
                                <option value={termsheetDetails?.commercials?.forexHedging}>{termsheetDetails?.commercials?.forexHedging} </option>
                                <option value="yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Forex Hedging<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <input id='otherTermsAndConditions' className={`${styles.value} input form-control`} type="text" defaultValue={termsheetDetails?.commercials?.otherTermsAndConditions} onChange={onChangeCommercialTerms} required />
                            <label className={`${styles.label} label_heading`}>Other Terms &amp; Conditions<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select id='version' className={`${styles.value} input form-control`} onChange={onChangeCommercialTerms} required>
                                <option value={termsheetDetails?.commercials?.version}>{termsheetDetails?.commercials?.version} </option>
                                <option value="1.1">1.1</option>
                                <option value="2.1">2.1</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Version<strong className="text-danger">*</strong></label>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Index
