/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { useEffect } from 'react'
import styles from './index.module.scss'
import { addPrefixOrSuffix, removePrefixOrSuffix } from '../../utils/helper'

const Index = ({
  termsheet,
  handleSave,
  termsheetDetails,
  onChangeCommodityDetails,
  onChangeCommercialTerms,
  onChangePaymentDueDate,
  onChangeTransactionDetails,
  newLcVal,
}) => {
  const [IsBlSelected, setIsBlSelected] = useState(false)
  const [thirdPartyInspection, setThirdPartyInspection] = useState(false)
  console.log(termsheetDetails, 'termsheetDetails')
  const updateThirdPartyInspection = (e) => {
    if (e.target.value == false) {
      setThirdPartyInspection(false)
      onChangeTransactionDetails(e)
    } else if (e.target.value == true) {
      setThirdPartyInspection(true)
      onChangeTransactionDetails(e)
    }
  }

  const payementchangeFunc = (value) => {
    if (value === 'DaysfromBLDate') {
      console.log('herer12')

      setIsBlSelected('DaysfromBLDate')
      onChangePaymentDueDate({
        target: { value: '', id: 'daysFromVesselDischargeDate' },
      })
    } else if (value === 'DaysfromVesselDischargeDate') {
      setIsBlSelected('DaysfromVesselDischargeDate')
      onChangePaymentDueDate({ target: { value: '', id: 'daysFromBlDate' } })
    } else {
      setIsBlSelected(value)
    }
  }

  console.log(
    termsheetDetails?.commodityDetails?.orderCurrency,
    '789',
    termsheetDetails?.commodityDetails?.unitOfQuantity,
  )

  console.log(
    termsheetDetails?.transactionDetails?.incoTerms,
    'dkfgdfhjgdjfhgdkjfgdkjg',
  )
  return (
    <div className={`${styles.main} vessel_card main`}>
      <div
        className={`${styles.head_container} border_color align-items-center d-flex justify-content-between`}
        data-toggle="collapse"
        data-target="#termDetails"
        aria-expanded="true"
        aria-controls="termDetails"
      >
        <h3 className={styles.heading}>Termsheet</h3>
        <span>+</span>
      </div>
      <div
        id="termDetails"
        className="collapse"
        aria-labelledby="termDetails"
        data-parent="#termDetails"
      >
        <div className={`${styles.dashboard_form} card-body`}>
          <h3 className={`${styles.sub_heading}`}>Commodity details</h3>

          <div className="row">
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <input
                  id="commodity"
                  className={`${styles.value} input form-control`}
                  defaultValue={termsheetDetails?.commodityDetails?.commodity}
                  onChange={onChangeCommodityDetails}
                  type="text"
                  required
                />
                <label className={`${styles.label} label_heading`}>
                  Commodity<strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.search_image} img-fluid`}
                  src="/static/search-grey.svg"
                  alt="Search"
                />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="unitOfQuantity"
                  className={`${styles.value} ${styles.customSelect}  input form-control`}
                  onChange={onChangeCommodityDetails}
                  required
                >
                  <option
                    value={
                      termsheetDetails?.commodityDetails?.unitOfQuantity == 'mt'
                        ? 'MT'
                        : termsheetDetails?.commodityDetails?.unitOfQuantity
                    }
                  >
                    {termsheetDetails?.commodityDetails?.unitOfQuantity == 'mt'
                      ? 'MT'
                      : termsheetDetails?.commodityDetails?.unitOfQuantity}{' '}
                  </option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Units of Measurement (UOM)
                  <strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  value={
                    termsheetDetails?.commodityDetails?.orderCurrency == 'INR'
                      ? 'Rupee'
                      : termsheetDetails?.commodityDetails?.orderCurrency
                  }
                  id="orderCurrency"
                  className={`${styles.value} ${styles.customSelect}  input form-control`}
                  onChange={onChangeCommodityDetails}
                  required
                >
                  <option value="USD">USD</option>
                  <option value="Rupee">INR</option>
                  <option value="Euro">Euro</option>
                  <option value="BRITISHPOUND">POUND</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Currency<strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="quantity"
                className={`${styles.value} input form-control`}
                //  value={termsheetDetails?.commodityDetails?.quantity}
                value={addPrefixOrSuffix(
                  termsheetDetails?.commodityDetails?.quantity,
                  termsheetDetails?.commodityDetails?.unitOfQuantity.toUpperCase(),
                  '',
                )}
                onChange={(e) => {
                  onChangeCommodityDetails(e)
                }}
                type="text"
                required
              />

              <label className={`${styles.label} label_heading`}>
                Quantity<strong className="text-danger">*</strong>
              </label>
              <span className={styles.percent}></span>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              {/* <span className={styles.inr}><strong>{termsheetDetails?.commodityDetails?.orderCurrency}</strong></span> */}
              <input
                id="perUnitPrice"
                className={`${styles.value} ${styles.inrValue} input form-control`}
                value={addPrefixOrSuffix(
                  termsheetDetails?.commodityDetails?.perUnitPrice == undefined
                    ? 0
                    : termsheetDetails?.commodityDetails?.perUnitPrice,
                  termsheetDetails?.commodityDetails?.orderCurrency.toUpperCase(),
                  'front',
                )}
                onChange={onChangeCommodityDetails}
                type="text"
                onKeyDown={(evt) => {
                  return /^-?\d*$/.test(evt.target.value)
                }}
                required
              />

              <label className={`${styles.label} label_heading`}>
                Unit Price<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <input
                  id="tolerance"
                  value={addPrefixOrSuffix(
                    termsheetDetails?.commodityDetails?.tolerance,
                    '%',
                  )}
                  className={`${styles.value} ${styles.customSelect} input form-control`}
                  onChange={onChangeCommodityDetails}
                  required
                />
                {/* <option value="10">±10%</option>
                  <option value="20">±20%</option>
                </select> */}
                <label className={`${styles.label} label_heading`}>
                  Tolerance (+/-) Percentage
                  <strong className="text-danger">*</strong>
                </label>
                {/* <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.dashboard_form} card-body`}>
          <h3 className={styles.sub_heading}>Transaction Details</h3>

          <div className="row">
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              {/* <input id='lcValue' value={termsheetDetails?.transactionDetails?.lcValue ? termsheetDetails?.transactionDetails?.lcValue : null} className={`${styles.value} input form-control`} onChange={onChangeTransactionDetails} required /> */}
              <input
                id="lcValue"
                value={addPrefixOrSuffix(
                  newLcVal ? newLcVal : 0,
                   termsheetDetails?.commodityDetails?.orderCurrency.toUpperCase(),
                  'front',
                )}
                className={`${styles.value} input form-control`}
                onChange={onChangeTransactionDetails}
                required
              />
              {/* <option value={termsheetDetails?.transactionDetails?.lcValue}>{termsheetDetails?.transactionDetails?.lcValue} </option>
                                <option value="USD 2000">USD 2000</option>
                                <option value="RS 1000">RS 1000</option> 
                            </select>*/}
              <label className={`${styles.label} label_heading`}>
                LC Value<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="marginMoney"
                className={`${styles.value} ${styles.marginPercent} input form-control`}
                type="text"
                // defaultValue={termsheetDetails?.transactionDetails?.marginMoney}
                value={addPrefixOrSuffix(
                  termsheetDetails?.transactionDetails?.marginMoney?.toString(),
                  '%',
                  '',
                )}
                onChange={onChangeTransactionDetails}
                required
              />
              {/* <span className={styles.percent}><strong>%</strong></span> */}

              <label className={`${styles.label} label_heading`}>
                Margin Money (%)<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="lcOpeningBank"
                  className={`${styles.value} ${styles.customSelect} 
                                 input form-control`}
                  onChange={onChangeTransactionDetails}
                  defaultValue={
                    termsheetDetails?.transactionDetails?.lcOpeningBank
                  }
                  required
                >
                  <option>Select an option</option>
                  <option value="First Class European Bank">
                    First Class European Bank
                  </option>
                  <option value="US Bank">US Bank</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  LC Opening Bank<strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="incoTerms"
                  className={`${styles.value} ${styles.customSelect} input form-control`}
                  onChange={onChangeTransactionDetails}
                  required
                >
                  {/* <option value={termsheetDetails?.transactionDetails?.incoTerm}>{termsheetDetails?.transactionDetails?.incoTerm} </option> */}
                  <option>Select an option</option>
                  <option
                    selected={
                      termsheetDetails?.transactionDetails?.incoTerms === 'CFR'
                    }
                    value="CFR"
                  >
                    CFR
                  </option>
                  <option
                    selected={
                      termsheetDetails?.transactionDetails?.incoTerms === 'FOB'
                    }
                    value="FOB"
                  >
                    FOB
                  </option>
                  <option
                    selected={
                      termsheetDetails?.transactionDetails?.incoTerms === 'CIF'
                    }
                    value="CIF"
                  >
                    CIF
                  </option>
                </select>

                {/* <input id='incoTerm' defaultValue={termsheetDetails?.transactionDetails?.incoTerms} className={`${styles.value} input form-control`} type="text" required /> */}
                <label className={`${styles.label} label_heading`}>
                  INCO Terms<strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="loadPort"
                  className={`${styles.value} ${styles.customSelect} input form-control`}
                  value={termsheetDetails?.transactionDetails?.loadPort}
                  onChange={onChangeTransactionDetails}
                  required
                >
                  {/* <option value={termsheetDetails?.transactionDetails?.loadPort}>{termsheetDetails?.transactionDetails?.loadPort} </option> */}
                  <option>Select an option</option>
                  <option value="Abbot Port">Abbot Port</option>
                  
                  <option value="India Port">India Port</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Port Of Loading<strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="countryOfOrigin"
                  className={`${styles.value} ${styles.customSelect} input form-control`}
                  value={termsheetDetails?.transactionDetails?.countryOfOrigin}
                  onChange={onChangeTransactionDetails}
                  required
                >
                  <option>Select an option</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Country Of Origin<strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="shipmentType"
                  className={`${styles.value} ${styles.customSelect} input form-control`}
                  value={termsheetDetails?.transactionDetails?.shipmentType}
                  onChange={onChangeTransactionDetails}
                  required
                >
                  <option>Select an option</option>
                  <option value="Bulk">Bulk</option>
                  <option value="Liner">Liner</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Shipment Type<strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  selected={
                    termsheetDetails?.transactionDetails?.partShipmentAllowed
                  }
                  id="partShipmentAllowed"
                  className={`${styles.value} ${styles.customSelect}  input form-control`}
                  onChange={onChangeTransactionDetails}
                  required
                >
                  {termsheetDetails?.transactionDetails?.partShipmentAllowed ===
                  'Yes' ? (
                    <>
                      {' '}
                      <option value="Yes">Yes</option>{' '}
                      <option value="No">No</option>
                    </>
                  ) : (
                    <>
                      <option value="NO">No</option>{' '}
                      <option value="Yes">Yes</option>{' '}
                    </>
                  )}
                </select>

                <label className={`${styles.label} label_heading`}>
                  Part Shipment Allowed
                  <strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="portOfDischarge"
                  className={`${styles.value} ${styles.customSelect} input form-control`}
                  value={termsheetDetails?.transactionDetails?.portOfDischarge}
                  onChange={onChangeTransactionDetails}
                  required
                >
                  <option>Select an option</option>
                  <option value="Gujrat, India">Gujrat, India</option>
                  <option value="Visakhapatnam, India">
                    Visakhapatnam, India
                  </option>
                  <option value="Vizag, India">Vizag, India</option>
                  <option value="Mumbai, India">Mumbai, India</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Port Of Discharge<strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow}  image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="billOfEntity"
                  className={`${styles.value} 
                                 ${styles.customSelect} input form-control`}
                  onChange={onChangeTransactionDetails}
                  value={termsheetDetails?.transactionDetails?.billOfEntity}
                  required
                >
                  <option>Select an option</option>
                  <option value="Home Consumption">Home Consumption</option>
                  <option value="Intobond">Intobond</option>
                  <option value="Exbond">Exbond </option>
                </select>

                <label className={`${styles.label} label_heading`}>
                  Bill of Entry<strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="thirdPartyInspectionReq"
                  className={`${styles.value} ${styles.customSelect}  input form-control`}
                  onChange={(e) => {
                    updateThirdPartyInspection(e)
                    onChangeTransactionDetails(e)
                  }}
                  required
                >
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  3rd Party Inspection Required
                  <strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow}  image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>
            {termsheetDetails.transactionDetails?.thirdPartyInspectionReq ==
            'true' ? (
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <select
                    onChange={onChangeTransactionDetails}
                    className={`${styles.value} ${styles.customSelect} input form-control`}
                    required
                    id={'typeOfPort'}
                  >
                    <option value="">Select an option</option>
                    <option value="Load Port">Load Port</option>
                    <option value="Discharge Port">Discharge Port</option>
                    <option value="Both">
                      Both Lord port and discharge port
                    </option>
                  </select>

                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
              </div>
            ) : null}
            {/* <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className='d-flex'>
                <select id='loadPort' className={`${styles.value} ${styles.customSelect} input form-control`} required>
                  <option value="Load Port">Load Port</option>
                </select>
                <label className={`${styles.label} label_heading`}>Load Port<strong className="text-danger">*</strong></label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div> */}
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="storageOfGoods"
                  className={`${styles.value} ${styles.customSelect} input form-control`}
                  onChange={onChangeTransactionDetails}
                  required
                >
                 

                 <option selected>Select an option</option> 
                 <option value="Calcutta Port"> Calcutta Port
                  </option> 
                  <option value="Mumbai, India"> Mumbai, India </option> 
                  <option value="Vizag, India"> Vizag, India </option> 
                  <option value="Vishakapatnam, India"> Visakhapatnam, India </option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Storage of Goods<strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.dashboard_form} card-body`}>
          <h3 className={styles.sub_heading}>Deliveries/Due date/Payment</h3>

          <div className="row">
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="computationOfDueDate"
                  onChange={(e) => payementchangeFunc(e.target.value)}
                  className={`${styles.value} ${styles.customSelect}  input form-control`}
                  required
                >
                  <option>Select an option</option>
                  <option value="DaysfromBLDate">Days from BL Date</option>
                  <option value="DaysfromVesselDischargeDate">
                    {' '}
                    Days from Vessel Discharge Date{' '}
                  </option>
                  <option value="Whicheverisearlier">
                    Whichever is earlier
                  </option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Computation of Due date
                  <strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="daysFromBlDate"
                className={`${styles.value} input form-control`}
                onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                type="number"
                value={termsheetDetails?.paymentDueDate?.daysFromBlDate}
                onChange={onChangePaymentDueDate}
                disabled={
                  IsBlSelected == 'DaysfromBLDate'
                    ? false
                    : IsBlSelected == 'Whicheverisearlier'
                    ? false
                    : true
                }
                required
              />
              <label className={`${styles.label} label_heading`}>
                Days From BL Date<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="daysFromVesselDischargeDate"
                className={`${styles.value} input form-control`}
                type="number"
                onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                value={
                  termsheetDetails?.paymentDueDate?.daysFromVesselDischargeDate
                }
                onChange={onChangePaymentDueDate}
                disabled={
                  IsBlSelected == 'DaysfromVesselDischargeDate'
                    ? false
                    : IsBlSelected == 'Whicheverisearlier'
                    ? false
                    : true
                }
                required
              />
              <label className={`${styles.label} label_heading`}>
                Days From Vessel Discharge Date
                <strong className="text-danger">*</strong>
              </label>
            </div>
          </div>
        </div>
        <div className={`${styles.dashboard_form} card-body`}>
          <h3 className={styles.sub_heading}>Commercial Terms</h3>
          <div className="row">
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="tradeMarginPercentage"
                className={`${styles.value} ${styles.marginPercent} input form-control`}
                type="text"
                min="0"
                max="100"
                value={addPrefixOrSuffix(
                  termsheetDetails.commercials?.tradeMarginPercentage?.toString(),
                  '%',
                  '',
                )}
                // defaultValue={termsheetDetails.commercials?.tradeMarginPercentage}
                onChange={onChangeCommercialTerms}
                required
              />
              {/* <span className={styles.percent}><strong>%</strong></span> */}
              <label className={`${styles.label} label_heading`}>
                Trade Margin(%)<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="lcOpeningChargesUnit"
                className={`${styles.value} input form-control`}
                type="text"
                onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                value={addPrefixOrSuffix(
                  termsheetDetails?.commercials?.lcOpeningChargesUnit
                    ? termsheetDetails?.commercials?.lcOpeningChargesUnit
                    : 0,
                  'USD',
                  'front',
                )}
                onChange={onChangeCommercialTerms}
                required
              />
              <label className={`${styles.label} label_heading`}>
                LC Opening Charges (Minimum)
                <strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="lcOpeningChargesPercentage"
                className={`${styles.value} ${styles.marginPercent} input form-control`}
                type="text"
                min="0"
                max="100"
                value={addPrefixOrSuffix(
                  termsheetDetails?.commercials?.lcOpeningChargesPercentage?.toString(),
                  '%',
                  '',
                )}
                // defaultValue={termsheetDetails?.commercials?.lcOpeningChargesPercentage}
                onChange={onChangeCommercialTerms}
                required
              />
              {/* <span className={styles.percent}><strong>%</strong></span> */}
              <label className={`${styles.label} label_heading`}>
                LC Opening Charges (%)<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="usanceInterestPercetage"
                className={`${styles.value} ${styles.marginPercent} input form-control`}
                type="text"
                min="0"
                max="100"
                value={addPrefixOrSuffix(
                  termsheetDetails?.commercials?.usanceInterestPercetage?.toString(),
                  '%',
                  '',
                )}
                onChange={onChangeCommercialTerms}
                required
              />
              {/* <span className={styles.percent}><strong>%</strong></span> */}
              <label className={`${styles.label} label_heading`}>
                Usance Interest (%) For 90 Days
                <strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="overDueInterestPerMonth"
                className={`${styles.value} ${styles.marginPercent} input form-control`}
                type="text"
                min="0"
                max="100"
                value={addPrefixOrSuffix(
                  termsheetDetails?.commercials?.overDueInterestPerMonth?.toString(),
                  '%',
                  '',
                )}
                // defaultValue={termsheetDetails?.commercials?.overDueInterestPerMonth}
                onChange={onChangeCommercialTerms}
                required
              />
              {/* <span className={styles.percent}><strong>%</strong></span> */}
              <label className={`${styles.label} label_heading`}>
                Overdue Interest per Month (%)
                <strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="exchangeFluctuation"
                  className={`${styles.value} ${styles.customSelect}  input form-control`}
                  onChange={onChangeCommercialTerms}
                  required
                  value={termsheetDetails?.commercials?.exchangeFluctuation}
                >
                  <option>Select an option</option>
                  <option value="On Buyers A/C">On Buyers A/C</option>
                  <option value="On Sellers A/C">On Sellers A/C</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Exchange Fluctation<strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="forexHedging"
                  className={`${styles.value} ${styles.customSelect}  input form-control`}
                  value={termsheetDetails?.commercials?.forexHedging}
                  onChange={onChangeCommercialTerms}
                  required
                >
                  <option value="yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Forex Hedging<strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>

            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="otherTermsAndConditions"
                className={`${styles.value} input form-control`}
                type="text"
                defaultValue={
                  termsheetDetails?.commercials?.otherTermsAndConditions
                }
                onChange={onChangeCommercialTerms}
                required
              />
              <label className={`${styles.label} label_heading`}>
                Other Terms &amp; Conditions
                <strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="version"
                  value={termsheetDetails?.commercials?.version}
                  className={`${styles.value} ${styles.customSelect} input form-control`}
                  onChange={onChangeCommercialTerms}
                  required
                  disabled={true}
                >
                  <option selected></option>
                  <option selected value="1">
                    1
                  </option>
                  <option value="2">2</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Version<strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
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
