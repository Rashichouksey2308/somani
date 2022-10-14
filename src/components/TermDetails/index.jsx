/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { useEffect } from 'react'
import styles from './index.module.scss'
import { addPrefixOrSuffix, addPrefixSymbol, removePrefixOrSuffix } from '../../utils/helper'

const Index = ({
  termsheet,
  handleSave,
  termsheetDetails,
  onChangeCommodityDetails,
  onChangeCommercialTerms,
  onChangePaymentDueDate,
  onChangeTransactionDetails,
  newLcVal,
  changePayment,
}) => {
  const [IsBlSelected, setIsBlSelected] = useState(false)
  const [thirdPartyInspection, setThirdPartyInspection] = useState(false)

  const [isFieldInFocus, setIsFieldInFocus] = useState({
    quantity: false,
    unitPrice: false,
    tolerance: false,
    lcValue: false,
    marginMoney: false,
    tradeMarginPercentage: false,
    lcOpeningCharges: false,
    lcOpeningChargesPercentage: false,
    usanceInterestPercetage: false,
    overDueInterestPerMonth: false,
  })

  console.log(termsheetDetails?.transactionDetails?.shipmentType, 'termsheetDetails')
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
      changePayment('DaysfromBLDate')
      // onChangePaymentDueDate({
      //   target: { value: '', id: 'daysFromVesselDischargeDate' },
      // })
    } else if (value === 'DaysfromVesselDischargeDate') {
      setIsBlSelected('DaysfromVesselDischargeDate')
      changePayment('DaysfromVesselDischargeDate')
      // onChangePaymentDueDate({ target: { value: '', id: 'daysFromBlDate' } })
    } else {
      setIsBlSelected(value)
      changePayment('val')
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
        // className="collapse"
        aria-labelledby="termDetails"
        data-parent="#termDetails"
      >
        <div className={`${styles.dashboard_form} card-body rounded-0 border_color border-bottom`}>
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
                  value={termsheetDetails?.commodityDetails?.unitOfQuantity}
                >
                  <option disabled selected>Select an option</option>
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
                      ? 'INR'
                      : termsheetDetails?.commodityDetails?.orderCurrency
                  }
                  id="orderCurrency"
                  className={`${styles.value} ${styles.customSelect}  input form-control`}
                  onChange={onChangeCommodityDetails}
                  required
                >
                  <option disabled selected>Select</option>
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
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
                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

                //  value={termsheetDetails?.commodityDetails?.quantity}
                onFocus={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, quantity: true }),
                    e.target.type = 'number'
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, quantity: false }),
                    e.target.type = 'text'
                }}
                value={
                  isFieldInFocus.quantity ?
                    termsheetDetails?.commodityDetails?.quantity :
                    Number(termsheetDetails?.commodityDetails?.quantity).toLocaleString('en-In') + ` ${termsheetDetails?.commodityDetails?.unitOfQuantity?.toUpperCase()}`}
                // value={addPrefixOrSuffix(
                //   termsheetDetails?.commodityDetails?.quantity,
                //   termsheetDetails?.commodityDetails?.unitOfQuantity.toUpperCase(),
                //   '',
                // )}
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
                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

                onFocus={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, unitPrice: true }),
                    e.target.type = 'number'
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, unitPrice: false }),
                    e.target.type = 'text'
                }}
                value={
                  isFieldInFocus.unitPrice ?
                    termsheetDetails?.commodityDetails?.perUnitPrice :
                    ` ${termsheetDetails?.commodityDetails?.orderCurrency.toUpperCase()} ` + Number(termsheetDetails?.commodityDetails?.perUnitPrice)?.toLocaleString('en-In')}
                // value={addPrefixOrSuffix(
                //   termsheetDetails?.commodityDetails?.perUnitPrice == undefined
                //     ? 0
                //     : termsheetDetails?.commodityDetails?.perUnitPrice,
                //   termsheetDetails?.commodityDetails?.orderCurrency.toUpperCase(),
                //   'front',
                // )}
                onChange={(e) => {
                  let temp = e.target.value.replace(/[^\w\s]/gi, "")
                  if (temp == "_") {
                    temp = ""
                  }
                  e.target.value = temp
                  onChangeCommodityDetails(e)
                }}
                type="text"

                required
              />

              <label className={`${styles.label} label_heading`}>
                Unit Price<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div
                className={`${styles.suffixWrapper} d-flex text-muted`}
              // customSuffix="%"
              >
                <input
                  id="tolerance"

                  onFocus={(e) => {
                    setIsFieldInFocus({ ...isFieldInFocus, tolerance: true }),
                      e.target.type = 'number'
                  }}
                  onBlur={(e) => {
                    setIsFieldInFocus({ ...isFieldInFocus, tolerance: false }),
                      e.target.type = 'text'
                  }}
                  value={
                    isFieldInFocus.tolerance ?
                      termsheetDetails?.commodityDetails?.tolerance :
                      '±' + Number(termsheetDetails?.commodityDetails?.tolerance)?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      }) + ` %`}
                  // value={
                  //   addPrefixOrSuffix(termsheetDetails?.commodityDetails?.tolerance,"%")
                  // }
                  onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

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
        <div className={`${styles.dashboard_form} card-body rounded-0 border_color border-bottom`}>
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
                // onFocus={(e) => {
                //   setIsFieldInFocus({ ...isFieldInFocus, lcValue: true }),
                //     e.target.type = 'number'
                // }}
                // onBlur={(e) => {
                //   setIsFieldInFocus({ ...isFieldInFocus, lcValue: false }),
                //     e.target.type = 'text'
                // }}
                // value={
                //   isFieldInFocus.lcValue ?
                //     termsheetDetails?.transactionDetails?.lcValue :
                //     ` ${termsheetDetails?.commodityDetails?.orderCurrency.toUpperCase()} ` + Number(termsheetDetails?.transactionDetails?.lcValue).toLocaleString()}
                // onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

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
                onFocus={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, marginMoney: true }),
                    e.target.type = 'number'
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, marginMoney: false }),
                    e.target.type = 'text'
                }}
                value={
                  isFieldInFocus.marginMoney ?
                    termsheetDetails?.transactionDetails?.marginMoney :
                    Number(termsheetDetails?.transactionDetails?.marginMoney).toLocaleString() + ` %`}
                // defaultValue={termsheetDetails?.transactionDetails?.marginMoney}
                // value={addPrefixOrSuffix(
                //   termsheetDetails?.transactionDetails?.marginMoney?.toString(),
                //   '%',
                //   '',
                // )}
                // onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

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
                  value={termsheetDetails?.transactionDetails?.lcOpeningBank}
                  required
                >
                  <option disabled selected>Select an option</option>
                  <option value="Reserve Bank of Spain">
                    Reserve Bank of Spain
                  </option>
                  <option value="Zurcher Kantonal Bank,Zurich">
                    Zurcher Kantonal Bank,Zurich
                  </option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  LC Opening Bank<strong className="text-danger">*</strong>
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
                  value={termsheetDetails?.transactionDetails?.incoTerms}
                  id="incoTerms"
                  className={`${styles.value} ${styles.customSelect} input form-control`}
                  onChange={onChangeTransactionDetails}
                  required
                >
                  {/* <option value={termsheetDetails?.transactionDetails?.incoTerm}>{termsheetDetails?.transactionDetails?.incoTerm} </option> */}
                  <option disabled selected>Select </option>
                  <option value="CFR">CFR</option>
                  <option value="FOB"> FOB</option>
                  <option value="CIF">CIF</option>
                </select>

                {/* <input id='incoTerm' defaultValue={termsheetDetails?.transactionDetails?.incoTerms} className={`${styles.value} input form-control`} type="text" required /> */}
                <label className={`${styles.label} label_heading`}>
                  INCO Terms<strong className="text-danger">*</strong>
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
                  id="loadPort"
                  className={`${styles.value} ${styles.customSelect} input form-control`}
                  value={termsheetDetails?.transactionDetails?.loadPort}
                  onChange={onChangeTransactionDetails}
                  required
                >
                  {/* <option value={termsheetDetails?.transactionDetails?.loadPort}>{termsheetDetails?.transactionDetails?.loadPort} </option> */}
                  <option disabled selected>Select an option</option>
                  <option value="Westshore Terminals,Canada">
                    Westshore Terminals,Canada
                  </option>
                  <option value="Abbot Point,Australia">
                    Abbot Point,Australia
                  </option>
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
                  <option disabled selected>Select an option</option>
                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Dubai">Dubai</option>
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
            {console.log(
              'country origin',
              termsheetDetails?.transactionDetails?.shipmentType,
            )}
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="shipmentType"
                  className={`${styles.value} ${styles.customSelect} input form-control`}
                  value={termsheetDetails?.transactionDetails?.shipmentType}
                  onChange={onChangeTransactionDetails}
                  required
                >
                  <option disabled selected>Select an option</option>
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
                  value={
                    termsheetDetails?.transactionDetails?.partShipmentAllowed
                  }
                  id="partShipmentAllowed"
                  className={`${styles.value} ${styles.customSelect}  input form-control`}
                  onChange={onChangeTransactionDetails}
                  required
                >
                  <option disabled selected>Select an option</option>
                  {termsheetDetails?.transactionDetails?.partShipmentAllowed ===
                    'Yes' ? (
                    <>
                      {' '}
                      <option value="Yes">Yes</option>{' '}
                      <option value="No">No</option>
                    </>
                  ) : (
                    <>
                      <option value="No">No</option>{' '}
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
                  <option disabled selected>Select an option</option>
                  <option value="Vishakapatnam, India">
                    Visakhapatnam, India
                  </option>
                  <option value="Mumbai, India">Mumbai, India</option>
                  <option value="Gujrat, India">Gujrat, India</option>
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
                  <option disabled selected>Select an option</option>
                  <option value="Home Consumption">Home Consumption</option>
                  <option value="Into-Bond">Into-Bond</option>
                  <option value="EX-Bond">EX-Bond </option>
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
                  value={termsheetDetails.transactionDetails?.thirdPartyInspectionReq}
                  required
                >
                  <option disabled selected>Select </option>
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
                    value={termsheetDetails?.transactionDetails?.typeOfPort}
                    className={`${styles.value} ${styles.customSelect} input form-control`}
                    required
                    id={'typeOfPort'}
                  >
                    <option disabled selected>Select an option</option>
                    <option value="Load Port">Load Port</option>
                    <option value="Discharge Port">Discharge Port</option>
                    <option value="Both">Both Load Port and Discharge Port</option>
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
                  value={termsheetDetails?.transactionDetails?.storageOfGoods}
                  required
                >
                  <option disabled selected>Select an option</option>
                  <option value="Vishakapatnam, India">
                    Visakhapatnam, India
                  </option>
                  <option value="Mumbai, India">Mumbai, India</option>
                  <option value="Gujrat, India">Gujrat, India</option>
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
        <div className={`${styles.dashboard_form} card-body rounded-0 border_color border-bottom`}>
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
                  <option disabled selected>Select an option</option>
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
                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
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
                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
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
        <div className={`${styles.dashboard_form} card-body rounded-0 border-0`}>
          <h3 className={styles.sub_heading}>Commercial Terms</h3>
          <div className="row">
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="tradeMarginPercentage"
                className={`${styles.value} ${styles.marginPercent} input form-control`}
                type="text"
                min="0"
                max="100"
                onFocus={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, tradeMarginPercentage: true }),
                    e.target.type = 'number'
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, tradeMarginPercentage: false }),
                    e.target.type = 'text'
                }}
                value={
                  isFieldInFocus.tradeMarginPercentage ?
                    termsheetDetails.commercials?.tradeMarginPercentage :
                    Number(termsheetDetails.commercials?.tradeMarginPercentage).toLocaleString() + ` %`}

                // value={addPrefixOrSuffix(
                //   termsheetDetails.commercials?.tradeMarginPercentage?.toString(),
                //   '%',
                //   '',
                // )}
                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

                // defaultValue={termsheetDetails.commercials?.tradeMarginPercentage}
                onChange={onChangeCommercialTerms}
                required
              />
              {/* <span className={styles.percent}><strong>%</strong></span> */}
              <label className={`${styles.label} label_heading`}>
                Trade Margin(%)<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6 d-flex`}>
              <div className={`${styles.value} input form-control w-25 disable border-right-0 rounded-left pt-3`}>
                {addPrefixSymbol(termsheetDetails?.commodityDetails?.orderCurrency?.toUpperCase()) }
              </div>
              <input
                id="lcOpeningChargesUnit"
                className={`${styles.value} input form-control border-left-0`}
                type="text"
                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                // value={addPrefixOrSuffix(
                //   termsheetDetails?.commercials?.lcOpeningChargesUnit
                //     ? termsheetDetails?.commercials?.lcOpeningChargesUnit
                //     : 0,
                //   'USD',
                //   'front',
                // )}
                onFocus={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, lcOpeningCharges: true }),
                    e.target.type = 'number'
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, lcOpeningCharges: false }),
                    e.target.type = 'text'
                }}
                // value={
                //   isFieldInFocus.lcOpeningCharges ?
                //     termsheetDetails?.commercials?.lcOpeningChargesUnit :
                //     `USD` + ` ` +
                //     Number(termsheetDetails?.commercials?.lcOpeningChargesUnit).toLocaleString('en-In')}
                value={
                  isFieldInFocus.lcOpeningCharges ?
                    termsheetDetails?.commercials?.lcOpeningChargesUnit : Number(termsheetDetails?.commercials?.lcOpeningChargesUnit).toLocaleString('en-In')}


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
                onFocus={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, lcOpeningChargesPercentage: true }),
                    e.target.type = 'number'
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, lcOpeningChargesPercentage: false }),
                    e.target.type = 'text'
                }}
                value={
                  isFieldInFocus.lcOpeningChargesPercentage ?
                    termsheetDetails?.commercials?.lcOpeningChargesPercentage :
                    Number(termsheetDetails?.commercials?.lcOpeningChargesPercentage).toLocaleString('en-In') + ` %`}

                // value={addPrefixOrSuffix(
                //   termsheetDetails?.commercials?.lcOpeningChargesPercentage?.toString(),
                //   '%',
                //   '',
                // )}
                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

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
                onFocus={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, usanceInterestPercetage: true }),
                    e.target.type = 'number'
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, usanceInterestPercetage: false }),
                    e.target.type = 'text'
                }}
                value={
                  isFieldInFocus.usanceInterestPercetage ?
                    termsheetDetails?.commercials?.usanceInterestPercetage :
                    Number(termsheetDetails?.commercials?.usanceInterestPercetage).toLocaleString() + ` %`}
                // value={addPrefixOrSuffix(
                //   termsheetDetails?.commercials?.usanceInterestPercetage?.toString(),
                //   '%',
                //   '',
                // )}
                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

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
                onFocus={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, overDueInterestPerMonth: true }),
                    e.target.type = 'number'
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, overDueInterestPerMonth: false }),
                    e.target.type = 'text'
                }}
                value={
                  isFieldInFocus.overDueInterestPerMonth ?
                    termsheetDetails?.commercials?.overDueInterestPerMonth :
                    Number(termsheetDetails?.commercials?.overDueInterestPerMonth).toLocaleString() + ` %`}
                // value={addPrefixOrSuffix(
                //   termsheetDetails?.commercials?.overDueInterestPerMonth?.toString(),
                //   '%',
                //   '',
                // )}
                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

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
                  <option disabled selected>Select an option</option>
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
                  <option disabled selected>Select an option</option>
                  <option value="Yes">Yes</option>
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
                  <option disabled selected>Select an option</option>
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
