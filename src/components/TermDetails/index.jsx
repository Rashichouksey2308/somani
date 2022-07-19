import React, { useState } from 'react'
import { useEffect } from 'react'
import styles from './index.module.scss'

const Index = ({ termsheet, handleSave, termsheetDetails, onChangeCommodityDetails, onChangeCommercialTerms, onChangePaymentDueDate, onChangeTransactionDetails }) => {
    const [IsBlSelected, setIsBlSelected] = useState(false)
    const [thirdPartyInspection, setThirdPartyInspection] = useState(false)



    const updateThirdPartyInspection = (value) => {
        if (value === "No") {
            setThirdPartyInspection(false)
        } else if (value === "yes") {
            setThirdPartyInspection(true)
        }
    }

    const payementchangeFunc = (value) => {
        if (value === "DaysfromBLDate") {
            setIsBlSelected(false)
        } else if (value === "DaysfromVesselDischargeDate") {
            setIsBlSelected(true)
        }
    }
   

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
                                          <div className="d-flex">

                            <select id='unitOfQuantity' className={`${styles.value} ${styles.customSelect}  input form-control`} onChange={onChangeCommodityDetails} required>
                                <option value={termsheetDetails?.commodityDetails?.unitOfQuantity}>{termsheetDetails?.commodityDetails?.unitOfQuantity} </option>
                                <option value="MT">MT</option>
                                <option value="KG">KG</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Units of Measurement (UOM)<strong className="text-danger">*</strong></label>
                                    <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                         <div className='d-flex'>
                            <select id='orderCurrency' className={`${styles.value} ${styles.customSelect}  input form-control`} onChange={onChangeCommodityDetails} required>
                                <option value={termsheetDetails?.commodityDetails?.orderCurrency}>{termsheetDetails?.commodityDetails?.orderCurrency}</option>
                                <option value="USD">USD</option>
                                <option value="Rupee">INR</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Currency<strong className="text-danger">*</strong></label>
                            <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <input id='quantity' className={`${styles.value} input form-control`} value={`${termsheetDetails?.commodityDetails?.quantity} `} onChange={onChangeCommodityDetails} type="text" required />
                            <span className={styles.percent}><strong>{termsheetDetails?.commodityDetails?.unitOfQuantity}</strong></span>

                            <label className={`${styles.label} label_heading`}>Quantity<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <input id='perUnitPrice' className={`${styles.value} input form-control`} value={`${termsheetDetails?.commodityDetails?.perUnitPrice} `} onChange={onChangeCommodityDetails} type="text" required />
                            <span className={styles.percent}><strong>{termsheetDetails?.commodityDetails?.orderCurrency}</strong></span>

                            <label className={`${styles.label} label_heading`}>Unit Price<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                                                     <div className='d-flex'>

                            <select id='tolerance' className={`${styles.value} ${styles.customSelect} input form-control`} onChange={onChangeCommodityDetails} required>
                                <option value={termsheetDetails?.commodityDetails?.tolerance}>±{termsheetDetails?.commodityDetails?.tolerance}% </option>
                                <option value="10">±10%</option>
                                <option value="20">±20%</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Tolerance (+/-) Percentage<strong className="text-danger">*</strong></label>
                         <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                    </div>


                </div>
                <div className={`${styles.dashboard_form} card-body`}>
                    <h3 className={styles.sub_heading}>Transaction Details</h3>

                    <div className='row'>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <input id='lcValue' value={termsheetDetails?.transactionDetails?.lcValue} className={`${styles.value} input form-control`} onChange={onChangeTransactionDetails} required />
                            {/* <option value={termsheetDetails?.transactionDetails?.lcValue}>{termsheetDetails?.transactionDetails?.lcValue} </option>
                                <option value="USD 2000">USD 2000</option>
                                <option value="RS 1000">RS 1000</option> 
                            </select>*/}
                            <label className={`${styles.label} label_heading`}>LC Value<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <input id='marginMoney' className={`${styles.value} ${styles.marginPercent} input form-control`} type="text" defaultValue={termsheetDetails?.transactionDetails?.marginMoney} onChange={onChangeTransactionDetails} required
                            />
                            <span className={styles.percent}><strong>%</strong></span>

                            <label className={`${styles.label} label_heading`}>Margin Money (%)<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                           <div className='d-flex'>
                            <select id='lcOpeningBank' className={`${styles.value} ${styles.customSelect} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.lcOpeningBank}>{termsheetDetails?.transactionDetails?.lcOpeningBank} </option>
                                <option value="First Class European Bank">First Class European Bank</option>
                                <option value="US Bank">US Bank</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>LC Opening Bank<strong className="text-danger">*</strong></label>
                            <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            {/* <select id='incoTerm' className={`${styles.value} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.incoTerm}>{termsheetDetails?.transactionDetails?.incoTerm} </option>
                                <option value="FOB">FOB</option>
                                <option value="India">India</option>
                            </select> */}

                            <input id='incoTerm' defaultValue={termsheetDetails?.transactionDetails?.incoTerms} className={`${styles.value} input form-control`} type="text" required/>
                            <label className={`${styles.label} label_heading`}>INCO Terms<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                              <div className='d-flex'>
                            <select id='loadPort' className={`${styles.value} ${styles.customSelect} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.loadPort}>{termsheetDetails?.transactionDetails?.loadPort} </option>
                                <option value="Abbot Port">Abbot Port</option>
                                <option value="India Port">India Port</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Port Of Loading<strong className="text-danger">*</strong></label>
                           <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                           <div className='d-flex'>
                            <select id='countryOfOrigin' className={`${styles.value} ${styles.customSelect} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.countryOfOrigin}>{termsheetDetails?.transactionDetails?.countryOfOrigin} </option>
                                <option value="Australia">Australia</option>
                                <option value="India">India</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Country Of Origin<strong className="text-danger">*</strong></label>
                           <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                             <div className='d-flex'>
                            <select id='shipmentType' className={`${styles.value} ${styles.customSelect} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.shipmentType}>{termsheetDetails?.transactionDetails?.shipmentType} </option>
                                <option value="Bulk">Bulk</option>
                                <option value="India">India</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Shipment Type<strong className="text-danger">*</strong></label>
                           <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <div className='d-flex'>
                            <select id='partShipmentAllowed' className={`${styles.value} ${styles.customSelect}  input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.partShipmentAllowed}>{termsheetDetails?.transactionDetails?.partShipmentAllowed} </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>

                            <label className={`${styles.label} label_heading`}>Part Shipment Allowed<strong className="text-danger">*</strong></label>
                               <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                             <div className='d-flex'>
                            <select id='portOfDischarge' className={`${styles.value} ${styles.customSelect} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.portOfDischarge}>{termsheetDetails?.transactionDetails?.portOfDischarge} </option>
                                <option value="Visakhapatnam">Visakhapatnam</option>
                                <option value="India">India</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Port Of Discharge<strong className="text-danger">*</strong></label>
                        <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                             <div className='d-flex'>
                            <select id='billOfEntity' className={`${styles.value} ${styles.customSelect} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.billOfEntity}>{termsheetDetails?.transactionDetails?.billOfEntity} </option>
                                <option value="Home Consumption">Home Consumption</option>
                                <option value="Abroad">Abroad</option>
                            </select>
                            
                        <label className={`${styles.label} label_heading`}>Bill of Entry<strong className="text-danger">*</strong></label>
                         <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                              <div className='d-flex'>
                            <select id='thirdPartyInspectionReq' className={`${styles.value} ${styles.customSelect}  input form-control`} onChange={(e) => updateThirdPartyInspection(e.target.value)} required>
                                <option value="No">No</option>
                                <option value="yes">Yes</option>

                            </select>
                            <label className={`${styles.label} label_heading`}>3rd Party Inspection Required<strong className="text-danger">*</strong></label>
                         <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                        {thirdPartyInspection && <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <div className='d-flex'>
                            <select className={`${styles.value} ${styles.customSelect} input form-control`} required>
                                <option value="volvo">Load Port</option>
                                <option value="audi">India</option>
                            </select>
                            <label className={`${styles.label} label_heading`}><strong className="text-danger">*</strong></label>
                         <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>}
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                          <div className='d-flex'>
                            <select id='storageOfGoods' className={`${styles.value} ${styles.customSelect} input form-control`} onChange={onChangeTransactionDetails} required>
                                <option value={termsheetDetails?.transactionDetails?.storageOfGoods}>{termsheetDetails?.transactionDetails?.storageOfGoods} </option>
                                <option value="Gangavaram Port, Andhra Pradesh">Gangavaram Port, Andhra Pradesh</option>
                                <option value="Mumbai Port, Mumbai">Mumbai Port, Mumbai</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Storage of Goods<strong className="text-danger">*</strong></label>
                        <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                    </div>


                </div>
                <div className={`${styles.dashboard_form} card-body`}>
                    <h3 className={styles.sub_heading}>Deliveries/Due date/Payment</h3>

                    <div className='row'>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <div className='d-flex'>
                            <select id='computationOfDueDate' onChange={(e) => payementchangeFunc(e.target.value)} className={`${styles.value} ${styles.customSelect}  input form-control`} required>
                                <option value="DaysfromBLDate"  >Days from BL Date</option>
                                <option value="DaysfromVesselDischargeDate" > Days from Vessel Discharge Date </option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Computation of Due date<strong className="text-danger">*</strong></label>
                        <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <input id='daysFromBlDate' className={`${styles.value} input form-control`} type="text" defaultValue={termsheetDetails?.paymentDueDate?.daysFromBlDate} onChange={onChangePaymentDueDate} disabled={IsBlSelected} required />
                            <label className={`${styles.label} label_heading`}>Days From BL Date<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <input id='daysFromVesselDischargeDate' className={`${styles.value} input form-control`} type="text" defaultValue={termsheetDetails?.paymentDueDate?.daysFromVesselDischargeDate} onChange={onChangePaymentDueDate} disabled={!IsBlSelected} required />
                            <label className={`${styles.label} label_heading`}>Days From Vessel Discharge Date<strong className="text-danger">*</strong></label>
                        </div>
                    </div>
                </div>
                <div className={`${styles.dashboard_form} card-body`}>
                    <h3 className={styles.sub_heading}>Commercial Terms</h3>
                    <div className='row'>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <input id='tradeMarginPercentage' className={`${styles.value} ${styles.marginPercent} input form-control`} type="text" defaultValue={termsheetDetails.commercials?.tradeMarginPercentage} onChange={onChangeCommercialTerms} required />
                            <span className={styles.percent}><strong>%</strong></span>
                            <label className={`${styles.label} label_heading`}>Trade Margin(%)<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <input id='lcOpeningChargesUnit' className={`${styles.value} input form-control`} type="text" defaultValue={termsheetDetails?.commercials?.lcOpeningChargesUnit} onChange={onChangeCommercialTerms} required />
                            <label className={`${styles.label} label_heading`}>LC Opening Charges (Minimum)<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <input id='usanceInterestPercetage' className={`${styles.value} ${styles.marginPercent} input form-control`} type="text" defaultValue={termsheetDetails?.commercials?.usanceInterestPercetage} onChange={onChangeCommercialTerms} required />
                            <span className={styles.percent}><strong>%</strong></span>
                            <label className={`${styles.label} label_heading`}>LC Opening Charges (%)<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <input id='overDueInterestPerMonth' className={`${styles.value} ${styles.marginPercent} input form-control`} type="text" defaultValue={termsheetDetails?.commercials?.overDueInterestPerMonth} onChange={onChangeCommercialTerms} required />
                            <span className={styles.percent}><strong>%</strong></span>
                            <label className={`${styles.label} label_heading`}>Usance Interest (%) For 90 Days<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <input id='overDueInterestPerMonth' className={`${styles.value} ${styles.marginPercent} input form-control`} type="text" defaultValue={termsheetDetails?.commercials?.overDueInterestPerMonth} onChange={onChangeCommercialTerms} required />
                            <span className={styles.percent}><strong>%</strong></span>
                            <label className={`${styles.label} label_heading`}>Overdue Interest per Month (%)<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                           <div className='d-flex'>
                            <select id='exchangeFluctuation' className={`${styles.value} ${styles.customSelect}  input form-control`} onChange={onChangeCommercialTerms} required>
                                <option value={termsheetDetails?.commercials?.exchangeFluctuation}>{termsheetDetails?.commercials?.exchangeFluctuation} </option>
                                <option value="On Buyers A/C">On Buyers A/C</option>
                                <option value="On Sellers A/C">On Sellers A/C</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Exchange Fluctation<strong className="text-danger">*</strong></label>
                        <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <div className='d-flex'>
                            <select id='forexHedging' className={`${styles.value} ${styles.customSelect}  input form-control`} onChange={onChangeCommercialTerms} required>
                                <option value={termsheetDetails?.commercials?.forexHedging}>{termsheetDetails?.commercials?.forexHedging} </option>
                                <option value="yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Forex Hedging<strong className="text-danger">*</strong></label>
                        <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                       
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            
                            <input id='otherTermsAndConditions' className={`${styles.value} input form-control`} type="text" defaultValue={termsheetDetails?.commercials?.otherTermsAndConditions} onChange={onChangeCommercialTerms} required />
                            <label className={`${styles.label} label_heading`}>Other Terms &amp; Conditions<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <div className='d-flex'>

                            <select id='version' className={`${styles.value} ${styles.customSelect} input form-control`} onChange={onChangeCommercialTerms} required>
                                <option value={termsheetDetails?.commercials?.version}>{termsheetDetails?.commercials?.version} </option>
                                <option value="1.1">1.1</option>
                                <option value="2.1">2.1</option>
                            </select>
                            <label className={`${styles.label} label_heading`}>Version<strong className="text-danger">*</strong></label>
                         <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Index
