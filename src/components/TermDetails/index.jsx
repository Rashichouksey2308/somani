/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { useEffect } from 'react'
import styles from './index.module.scss'
import {addPrefixOrSuffix,removePrefixOrSuffix } from '../../utils/helper'

const Index = ({ termsheet, handleSave, termsheetDetails, onChangeCommodityDetails, onChangeCommercialTerms, onChangePaymentDueDate, onChangeTransactionDetails }) => {
    const [IsBlSelected, setIsBlSelected] = useState(false)
    const [thirdPartyInspection, setThirdPartyInspection] = useState(false)



    const updateThirdPartyInspection = (e) => {
        if (e.target.value === "false") {
            setThirdPartyInspection(false)
            onChangeTransactionDetails(e)
        } else if (e.target.value === "true") {
            setThirdPartyInspection(true)
            onChangeTransactionDetails(e)
        }
    }

    const payementchangeFunc = (value) => {
        if (value === "DaysfromBLDate") {
            setIsBlSelected(false)
        } else if (value === "DaysfromVesselDischargeDate") {
            setIsBlSelected(true)
        }
    }

    console.log(termsheetDetails?.commodityDetails?.orderCurrency, "789",termsheetDetails?.commodityDetails?.unitOfQuantity)
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
                                    <option value={termsheetDetails?.commodityDetails?.unitOfQuantity}>{termsheetDetails?.commodityDetails?.unitOfQuantity == "mt" ? "MT" : null} </option>

                                  
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
                                <select 
                                value={termsheetDetails?.commodityDetails?.orderCurrency=="INR"?"Rupee":termsheetDetails?.commodityDetails?.orderCurrency} id='orderCurrency' className={`${styles.value} ${styles.customSelect}  input form-control`} 
                                onChange={onChangeCommodityDetails} required>
                                             <option value="USD">USD</option>
                                             <option value="Rupee">INR</option>
                                             <option value="Euro">Euro</option>
                                             <option value="BritishPound">British Pound</option>
                                    


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
                            <input id='quantity' className={`${styles.value} input form-control`} 
                            //  value={termsheetDetails?.commodityDetails?.quantity}
                              value={addPrefixOrSuffix(termsheetDetails?.commodityDetails?.quantity,
                                termsheetDetails?.commodityDetails?.unitOfQuantity.toUpperCase()
                                ,"")}
                           
                             onChange={(e)=>{
                               
                                onChangeCommodityDetails(e)
                            
                            } }type="text" required />
                            <span className={styles.percent}></span>

                            <label className={`${styles.label} label_heading`}>Quantity<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            {/* <span className={styles.inr}><strong>{termsheetDetails?.commodityDetails?.orderCurrency}</strong></span> */}
                            <input id='perUnitPrice' className={`${styles.value} ${styles.inrValue} input form-control`} 
                            value={addPrefixOrSuffix(termsheetDetails?.commodityDetails?.perUnitPrice,termsheetDetails?.commodityDetails?.orderCurrency.toUpperCase(),"front")}
                            onChange={onChangeCommodityDetails} type="text" required />


                            <label className={`${styles.label} label_heading`}>Unit Price<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <div className='d-flex'>

                                <select id='tolerance' value={termsheetDetails?.commodityDetails?.tolerance} className={`${styles.value} ${styles.customSelect} input form-control`} onChange={onChangeCommodityDetails} required>
                                    
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
                            <input id='marginMoney' className={`${styles.value} ${styles.marginPercent} input form-control`} type="text"  
                            // defaultValue={termsheetDetails?.transactionDetails?.marginMoney}
                             value={addPrefixOrSuffix(
                                termsheetDetails?.transactionDetails?.marginMoney?.toString(),
                                "%"
                                ,"")} 
                            onChange={onChangeTransactionDetails} 
                            required
                            />
                            {/* <span className={styles.percent}><strong>%</strong></span> */}

                            <label className={`${styles.label} label_heading`}>Margin Money (%)<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <div className='d-flex'>
                                <select id='lcOpeningBank'
                                 className={`${styles.value} ${styles.customSelect} 
                                 input form-control`} 
                                 onChange={onChangeTransactionDetails} 
                                 defaultValue={termsheetDetails?.transactionDetails?.lcOpeningBank}
                                 required>
                                    
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

                            <input id='incoTerm' defaultValue={termsheetDetails?.transactionDetails?.incoTerms} className={`${styles.value} input form-control`} type="text" required />
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
                                    <option value="Liner">Liner</option>
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
                                <select selected={termsheetDetails?.transactionDetails?.partShipmentAllowed} id='partShipmentAllowed' className={`${styles.value} ${styles.customSelect}  input form-control`} onChange={onChangeTransactionDetails} required>

                                    {termsheetDetails?.transactionDetails?.partShipmentAllowed === 'Yes' ? <> <option value="Yes">Yes</option>  <option value="No">No</option></>
                                        : <><option value="NO">No</option>  <option value="Yes">Yes</option> </>}
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
                                    <option value="Visakhapatnam, India">Visakhapatnam, India</option>
                                    <option value="Vizag, India">Vizag, India</option>
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
                                <select id='billOfEntity'
                                 className={`${styles.value} 
                                 ${styles.customSelect} input form-control`} 
                                 onChange={onChangeTransactionDetails}
                                 value={termsheetDetails?.transactionDetails?.billOfEntity}
                                  required>
                                    
                                    <option value="Home Consumption">Home Consumption</option>
                                    <option value="Intobond Warehousing">Intobond Warehousing</option>
                                    <option value="Exbond">Exbond  </option>
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
                                <select id='thirdPartyInspectionReq' className={`${styles.value} ${styles.customSelect}  input form-control`} onChange={(e) => updateThirdPartyInspection(e)} required>
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>

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
                                    <option value="Load Port">Load Port</option>
                                    <option value="Discharge Port">Discharge Port</option>
                                    <option value="Both">Both</option>
                                </select>
                               
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
                                    <option value="Whicheverisearlier"  >Whichever is earlier</option>
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
                            <input id='daysFromBlDate' className={`${styles.value} input form-control`} type="number"  defaultValue={termsheetDetails?.paymentDueDate?.daysFromBlDate} onChange={onChangePaymentDueDate} disabled={IsBlSelected} required />
                            <label className={`${styles.label} label_heading`}>Days From BL Date<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <input id='daysFromVesselDischargeDate' className={`${styles.value} input form-control`} type="number"  defaultValue={termsheetDetails?.paymentDueDate?.daysFromVesselDischargeDate} onChange={onChangePaymentDueDate} disabled={!IsBlSelected} required />
                            <label className={`${styles.label} label_heading`}>Days From Vessel Discharge Date<strong className="text-danger">*</strong></label>
                        </div>
                    </div>
                </div>
                <div className={`${styles.dashboard_form} card-body`}>
                    <h3 className={styles.sub_heading}>Commercial Terms</h3>
                    <div className='row'>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <input id='tradeMarginPercentage' className={`${styles.value} ${styles.marginPercent} input form-control`} type="text" min="0" max="100" 
                            value={addPrefixOrSuffix(
                               termsheetDetails.commercials?.tradeMarginPercentage?.toString(),
                                "%"
                                ,"")} 
                            // defaultValue={termsheetDetails.commercials?.tradeMarginPercentage} 
                            onChange={onChangeCommercialTerms} required />
                            {/* <span className={styles.percent}><strong>%</strong></span> */}
                            <label className={`${styles.label} label_heading`}>Trade Margin(%)<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <input id='lcOpeningChargesUnit' className={`${styles.value} input form-control`} type="number"  defaultValue={termsheetDetails?.commercials?.lcOpeningChargesUnit} onChange={onChangeCommercialTerms} required />
                            <label className={`${styles.label} label_heading`}>LC Opening Charges (Minimum)<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <input id='lcOpeningChargesPercentage' className={`${styles.value} ${styles.marginPercent} input form-control`} type="text" min="0" max="100" 
                            value={addPrefixOrSuffix(
                              termsheetDetails?.commercials?.lcOpeningChargesPercentage?.toString(),
                                "%"
                                ,"")} 
                            // defaultValue={termsheetDetails?.commercials?.lcOpeningChargesPercentage} 
                            onChange={onChangeCommercialTerms} required />
                            {/* <span className={styles.percent}><strong>%</strong></span> */}
                            <label className={`${styles.label} label_heading`}>LC Opening Charges (%)<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <input id='usanceInterestPercetage' className={`${styles.value} ${styles.marginPercent} input form-control`} type="text" min="0" max="100" 
                             value={addPrefixOrSuffix(
                              termsheetDetails?.commercials?.usanceInterestPercetage?.toString(),
                                "%"
                                ,"")}
                           
                            onChange={onChangeCommercialTerms} required />
                            {/* <span className={styles.percent}><strong>%</strong></span> */}
                            <label className={`${styles.label} label_heading`}>Usance Interest (%) For 90 Days<strong className="text-danger">*</strong></label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <input id='overDueInterestPerMonth' className={`${styles.value} ${styles.marginPercent} input form-control`} type="text" min="0" max="100" 
                            value={addPrefixOrSuffix(
                              termsheetDetails?.commercials?.overDueInterestPerMonth?.toString(),
                                "%"
                                ,"")}
                            // defaultValue={termsheetDetails?.commercials?.overDueInterestPerMonth} 
                            onChange={onChangeCommercialTerms} required />
                            {/* <span className={styles.percent}><strong>%</strong></span> */}
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

                                <select id='version'
                                value={termsheetDetails?.commercials?.version}
                                className={`${styles.value} ${styles.customSelect} input form-control`} onChange={onChangeCommercialTerms} required>
                                    
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
