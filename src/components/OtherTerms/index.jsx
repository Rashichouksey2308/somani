import React, { useState } from 'react'
import { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'


const Index = ({ termsheet, otherTermConditions, handleSave, onChangeInsurance, onChangeDutyAndTaxes, onChangeOther, onChangeLcOpening,onChangeCha }) => {
    // const [otherTermConditions, setOtherTermConditions] = useState({})

    // useEffect(() => {
    //     {
    //         termsheet && termsheet?.data?.map((sheet, index) => {
    //             setOtherTermConditions({
    //                 chaOrstevedoringCharges: {
    //                     customClearingCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.customClearingCharges,
    //                     wharfaceCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.wharfaceCharges,
    //                     pollutionCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.pollutionCharges,
    //                     royalyAndPenaltyCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.royalyAndPenaltyCharges,
    //                     tarpaulinCoverageCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.tarpaulinCoverageCharges,
    //                     wheighmentAndWeighmentSurveyCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.wheighmentAndWeighmentSurveyCharges,
    //                     draughtSurveyCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.draughtSurveyCharges,
    //                     boatingWhileDraughtSurveyCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.boatingWhileDraughtSurveyCharges,
    //                     hmcCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.hmcCharges,
    //                     securityCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.securityCharges,
    //                     piotRentalAndStorageCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.piotRentalAndStorageCharges,
    //                     bondingOfCargoCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.bondingOfCargoCharges,
    //                     exBondDocumentationCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.exBondDocumentationCharges,
    //                     transferOfOwnershipCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.transferOfOwnershipCharges,
    //                     customsBondOfficerOvertimeCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.customsBondOfficerOvertimeCharges,
    //                     grabHireCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.grabHireCharges,
    //                     craneHireCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.craneHireCharges,
    //                     handlingLosses: sheet.otherTermsAndConditions.chaOrstevedoringCharges.handlingLosses,
    //                     insuranceCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.insuranceCharges,
    //                     waterSprinklingCharges: sheet.otherTermsAndConditions.chaOrstevedoringCharges.waterSprinklingCharges,
    //                     others: sheet.otherTermsAndConditions.chaOrstevedoringCharges.others
    //                 },
    //                 lcOpeningCharges: {
    //                     lcOpeningCharges: sheet.otherTermsAndConditions.lcOpeningCharges.lcOpeningCharges,
    //                     lcAmendmentCost: sheet.otherTermsAndConditions.lcOpeningCharges.lcAmendmentCost,
    //                     cmaFeesIncludingSupervisionAndSurvey: sheet.otherTermsAndConditions.lcOpeningCharges.cmaFeesIncludingSupervisionAndSurvey,
    //                     bankDoIssuanceCharges: sheet.otherTermsAndConditions.lcOpeningCharges.bankDoIssuanceCharges,
    //                     remmittanceCharges: sheet.otherTermsAndConditions.lcOpeningCharges.remmittanceCharges,
    //                     usanceInterest: sheet.otherTermsAndConditions.lcOpeningCharges.usanceInterest
    //                 },
    //                 otherCharges: {
    //                     demurrageOrDetentionChargesOfVessel: sheet.otherTermsAndConditions.otherCharges.demurrageOrDetentionChargesOfVessel,
    //                     transportationCharges: sheet.otherTermsAndConditions.otherCharges.transportationCharges,
    //                     wagonHaulageCharges: sheet.otherTermsAndConditions.otherCharges.wagonHaulageCharges,
    //                     thirdPartyInspectionCharges: sheet.otherTermsAndConditions.otherCharges.thirdPartyInspectionCharges,
    //                     hedgingCharges: sheet.otherTermsAndConditions.otherCharges.hedgingCharges,
    //                     anyOtherCostIncurredOnBehalfOfBuyer: sheet.otherTermsAndConditions.otherCharges.anyOtherCostIncurredOnBehalfOfBuyer
    //                 },
    //                 dutyAndTaxes: {
    //                     customsDutyWithAllGovtCess: sheet.otherTermsAndConditions.dutyAndTaxes.customsDutyWithAllGovtCess,
    //                     igstWithCess: sheet.otherTermsAndConditions.dutyAndTaxes.igstWithCess,
    //                     cimsCharges: sheet.otherTermsAndConditions.dutyAndTaxes.cimsCharges
    //                 },
    //                 insurance: {
    //                     marineInsurance: sheet.otherTermsAndConditions.insurance.marineInsurance,
    //                     storageInsurance: sheet.otherTermsAndConditions.insurance.storageInsurance
    //                 }
    //             })
    //         })
    //     }

    // }, [termsheet])

    // const onChangeCha = (e) => {
    //     const Key = e.target.id
    //     const value = !otherTermConditions?.chaOrstevedoringCharges[Key]
    //     setOtherTermConditions(prev => ({ ...prev, chaOrstevedoringCharges: { ...prev.chaOrstevedoringCharges, [Key]: value } }))
    // }

    // const onChangeLcOpening = (e) => {
    //     const Key = e.target.id
    //     const value = !otherTermConditions?.lcOpeningCharges[Key]
    //     setOtherTermConditions(prev => ({ ...prev, lcOpeningCharges: { ...prev.lcOpeningCharges, [Key]: value } }))
    // }
    // const onChangeOther = (e) => {
    //     const Key = e.target.id
    //     const value = !otherTermConditions?.otherCharges[Key]
    //     setOtherTermConditions(prev => ({ ...prev, otherCharges: { ...prev.otherCharges, [Key]: value } }))
    // }
    // const onChangeDutyAndTaxes = (e) => {
    //     const Key = e.target.id
    //     const value = !otherTermConditions?.dutyAndTaxes[Key]
    //     setOtherTermConditions(prev => ({ ...prev, dutyAndTaxes: { ...prev.dutyAndTaxes, [Key]: value } }))
    // }
    // const onChangeInsurance = (e) => {
    //     const Key = e.target.id
    //     const value = !otherTermConditions?.insurance[Key]
    //     setOtherTermConditions(prev => ({ ...prev, insurance: { ...prev.insurance, [Key]: value } }))
    // }





    return (
        <div className={`${styles.main} main`}>
            <div className={`${styles.head_container} border_color d-flex justify-content-between`} data-toggle="collapse" data-target="#otherTerm" aria-expanded="true" aria-controls="otherTerm">
                <h3 className={styles.heading}>Other Terms &amp; Conditions</h3>
                <span>+</span>
            </div>
            <div id="otherTerm" className="collapse" aria-labelledby="otherTerm" data-parent="#otherTerm">
                <div className={`${styles.dashboard_form} card-body`}>
                    <Form>
                        <div className={`${styles.terms_para}`}>Below charges are to be borne and paid by the Buyer on actual basis,wherever applicable.<span className={styles.igpl_para}>Indo German International Private Limites (Igpl) </span>will provide proof of all expenses to the Buyer.</div>
                        <div className='row'>
                            <div className={`${styles.form_group} mt-5  col-md-6`} >
                                <h3 className={`${styles.other_heading} row_head`}>CHA / Stevedoring Charges</h3>
                                <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>


                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id='wharfaceCharges' className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.wharfaceCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Wharfage Charges </label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="pollutionCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.pollutionCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Pollution charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="royalyAndPenaltyCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.royalyAndPenaltyCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Royalty and Penalty Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="tarpaulinCoverageCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.tarpaulinCoverageCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Tarpaulin Coverage Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="wheighmentAndWeighmentSurveyCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.wheighmentAndWeighmentSurveyCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Wheighment &amp; Weighment Survey Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="draughtSurveyCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.draughtSurveyCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Draught Survey Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="boatingWhileDraughtSurveyCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.boatingWhileDraughtSurveyCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Boating while Draught Survey Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="hmcCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.hmcCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>HMC Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="securityCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.securityCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Security Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="piotRentalAndStorageCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.piotRentalAndStorageCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Plot Rental &amp; Storage Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="bondingOfCargoCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.bondingOfCargoCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Bonding of Cargo Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="exBondDocumentationCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.exBondDocumentationCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Ex - Bond Documentation Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="transferOfOwnershipCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.transferOfOwnershipCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Transfer of Ownership Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="customsBondOfficerOvertimeCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.customsBondOfficerOvertimeCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Customs Bond Officer Overtime Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="grabHireCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.grabHireCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Grab Hire Charges ( if any )</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="craneHireCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.craneHireCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Crane Hire Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="handlingLosses" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.handlingLosses} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Handling Losses</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="insuranceCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.insuranceCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Insurance Charges ( While transferring the material to customs bonded ware house )</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="waterSprinklingCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.waterSprinklingCharges} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Water Sprinkling Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="others" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.others} onChange={onChangeCha} />
                                        <label className={styles.checkbox_label}>Others, if any</label>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.form_group} mt-5 col-md-6`}>
                                <div className=''>
                                    <h3 className={`${styles.other_heading} row_head`}>LC Opening Charges</h3>
                                    <div className={`${styles.checkbox_container}  label_heading d-flex flex-column`}>
                                        
                                        <div className='d-flex align-items-center'>
                                            <input id="lcOpeningCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.lcOpeningCharges?.lcOpeningCharges} onChange={onChangeLcOpening} />
                                            <label className={styles.checkbox_label}>LC Opening Charges ( on LC value subject to minimum of USD 1500)</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="lcAmendmentCost" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.lcOpeningCharges?.lcAmendmentCost} onChange={onChangeLcOpening} />
                                            <label className={styles.checkbox_label}>LC Amendment Cost</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="cmaFeesIncludingSupervisionAndSurvey" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.lcOpeningCharges?.cmaFeesIncludingSupervisionAndSurvey} onChange={onChangeLcOpening} />
                                            <label className={styles.checkbox_label} htmlForcls="vehicle3">CMA Fees including supervision and survey</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="bankDoIssuanceCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.lcOpeningCharges?.bankDoIssuanceCharges} onChange={onChangeLcOpening} />
                                            <label className={styles.checkbox_label} htmlForcls="vehicle4">Bank DO Issuance charges</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="remmittanceCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.lcOpeningCharges?.remmittanceCharges} onChange={onChangeLcOpening} />
                                            <label className={styles.checkbox_label} htmlForcls="vehicle5">Remmittance Charges</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="usanceInterest" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.lcOpeningCharges?.usanceInterest} onChange={onChangeLcOpening} />
                                            <label className={styles.checkbox_label} htmlForcls="vehicle6">Usance Interest</label>
                                        </div>

                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <h3 className={`${styles.other_heading} row_head`}>Other Charges</h3>
                                    <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="demurrageOrDetentionChargesOfVessel" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.otherCharges?.demurrageOrDetentionChargesOfVessel} onChange={onChangeOther} />
                                            <label className={styles.checkbox_label} htmlFor="vehicle2">Demurrage / Detention Charges of Vessel</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="transportationCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.otherCharges?.transportationCharges} onChange={onChangeOther} />
                                            <label className={styles.checkbox_label} htmlFor="vehicle3">Transportation Charges</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="wagonHaulageCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.otherCharges?.wagonHaulageCharges} onChange={onChangeOther} />
                                            <label className={styles.checkbox_label} htmlFor="vehicle1">Wagon Haulage Charges (in case of Delivery through railways)</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="thirdPartyInspectionCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.otherCharges?.thirdPartyInspectionCharges} onChange={onChangeOther} />
                                            <label className={styles.checkbox_label} htmlFor="vehicle1">3rd Party Inspection Charges</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="hedgingCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.otherCharges?.hedgingCharges} onChange={onChangeOther} />
                                            <label className={styles.checkbox_label} htmlFor="vehicle1">Hedging Charges</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="anyOtherCostIncurredOnBehalfOfBuyer" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.otherCharges?.anyOtherCostIncurredOnBehalfOfBuyer} onChange={onChangeOther} />
                                            <label className={styles.checkbox_label} htmlFor="vehicle1">Any other cost incurred on behalf of Buyer</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <h3 className={`${styles.other_heading} row_head`}>Duty &amp; Taxes</h3>
                                    <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                                        <div className='d-flex align-items-center'>
                                            <input id="customsDutyWithAllGovtCess" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.dutyAndTaxes?.customsDutyWithAllGovtCess} onChange={onChangeDutyAndTaxes} />
                                            <label className={styles.checkbox_label} htmlFor="vehicle1">Customs Duty with all Govt Cess</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="igstWithCess" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.dutyAndTaxes?.igstWithCess} onChange={onChangeDutyAndTaxes} />
                                            <label className={styles.checkbox_label} htmlFor="vehicle2">IGST with CESS, if Applicable</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="cimsCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.dutyAndTaxes?.cmaFeesIncludingSupervisionAndSurvey} onChange={onChangeDutyAndTaxes} />
                                            <label className={styles.checkbox_label}>CIMS Charges (incase Commodity is Coal)</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <h3 className={`${styles.other_heading} row_head`}>Insurance</h3>
                                    <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                                        <div className='d-flex align-items-center'>
                                            <input id="marineInsurance" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.insurance?.marineInsurance} onChange={onChangeInsurance} />
                                            <label className={styles.checkbox_label}>Marine Insurance ( if Applicable)</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="storageInsurance" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.insurance?.storageInsurance} onChange={onChangeInsurance} />
                                            <label className={styles.checkbox_label}>Storage Insurance(Fire & Burgalary)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={`${styles.terms_para} pt-3 text-center`}>All necessary documents to be filed with Customs department for discharge of goods &amp; Customs clearance can be filed by
                                <span className={styles.igpl_para}>Igpl </span>
                                or its nominated person. * GST charges extra wherever applicable</div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Index
