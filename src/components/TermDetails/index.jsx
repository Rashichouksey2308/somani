/* eslint-disable @next/next/no-img-element */
import React, { useState,useEffect } from 'react';
import styles from './index.module.scss';
import { addPrefixOrSuffix, addPrefixSymbol } from '../../utils/helper';
import { returnReadableNumber } from '@/utils/helpers/global';

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
  commodity,
  onChangeCommodityDetails2,
  port,
  country,
  currency,
}) => {
 
  const [IsBlSelected, setIsBlSelected] = useState(false);
  const [thirdPartyInspection, setThirdPartyInspection] = useState(false);
 
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
  });

  const updateThirdPartyInspection = (e) => {
    if (e.target.value == false) {
      setThirdPartyInspection(false);
      onChangeTransactionDetails(e);
    } else if (e.target.value == true) {
      setThirdPartyInspection(true);
      onChangeTransactionDetails(e);
    }
  };

  const payementchangeFunc = (value) => {
    if (value === 'DaysfromBLDate') {
      setIsBlSelected('DaysfromBLDate');
      changePayment('DaysfromBLDate');
    } else if (value === 'DaysfromVesselDate') {
      setIsBlSelected('DaysfromVesselDate');
      changePayment('DaysfromVesselDate');
    } else {
      setIsBlSelected(value);
      changePayment('val');
    }
  };
  useEffect(() => {
    payementchangeFunc(termsheetDetails?.paymentDueDate?.computationOfDueDate)
  }, [termsheetDetails])
  

  const [toShow, setToShow] = useState([]);
  const [toView, setToView] = useState(false);
  const filterCommodity = (value) => {
    if (value == '') {
      setToShow([]);
      setToView(false);
      return;
    }
    let filterData = commodity.filter((o) => {
      return o.Commodity.toLowerCase().includes(value.toLowerCase());
    });

    setToShow(filterData);
    setToView(true);
  };
  const handleData = (name, value) => {
    onChangeCommodityDetails2(name, value);
    setToView(false);
  };

  return (
    <div className={`${styles.main} vessel_card main`}>
      <div
        className={`${styles.head_container} border_color align-items-center d-flex justify-content-between`}
        data-toggle="collapse"
        data-target="#termDetails"
        aria-expanded="true"
        aria-controls="termDetails"
      >
        <h3 className={styles.heading}>Transaction Summary</h3>
        <span>+</span>
      </div>
      <div id="termDetails" aria-labelledby="termDetails" data-parent="#termDetails">
        <div className={`${styles.dashboard_form} card-body rounded-0 border_color border-bottom`}>
          <h3 className={`${styles.sub_heading}`}>Commodity details</h3>

          <div className="row">
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <input
                  id="commodity"
                  className={`${styles.value} input form-control`}
                  value={termsheetDetails?.commodityDetails?.commodity}
                  onChange={(e) => {
                    filterCommodity(e.target.value);
                    onChangeCommodityDetails(e);
                  }}
                  type="text"
                  required
                />
                {toShow.length > 0 && toView && (
                  <div className={styles.searchResults}>
                    <ul>
                      {toShow
                        ? toShow?.map((results, index) => (
                            <li
                              onClick={() => handleData('commodity', results.Commodity)}
                              id={results._id}
                              key={index}
                              value={results.Commodity}
                            >
                              {results.Commodity}{' '}
                            </li>
                          ))
                        : ''}
                    </ul>
                  </div>
                )}
                <label className={`${styles.label} label_heading`}>
                  Commodity<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
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
                  <option disabled selected>
                    Select an option
                  </option>
                
                   <option value={"MT"}>MT</option>
                  <option value={"L"}>L</option>
                  <option value={"KG"}>KG</option>
                  <option value={"M"}>M</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Units of Measurement (UOM)
                  <strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  value={termsheetDetails?.commodityDetails?.orderCurrency}
                  id="orderCurrency"
                  className={`${styles.value} ${styles.customSelect}  input form-control`}
                  onChange={onChangeCommodityDetails}
                  required
                >
                  <option disabled selected>
                    Select
                  </option>
                  {currency.map((val, index) => {
                    return (
                      <option key={index} value={`${val.Currency}`}>
                        {val.Currency}
                      </option>
                    );
                  })}
                  {/* <option value="USD">USD</option>
                  <option value="INR">INR</option>
                  <option disabled value="Euro">
                    Euro
                  </option>
                  <option disabled value="BRITISHPOUND">
                    POUND
                  </option> */}
                </select>
                <label className={`${styles.label} label_heading`}>
                  Currency<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="quantity"
                className={`${styles.value} input form-control`}
                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                onWheel={(event) => event.currentTarget.blur()}
                onFocus={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, quantity: true }), (e.target.type = 'number');
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, quantity: false }), (e.target.type = 'text');
                }}
                value={
                  isFieldInFocus.quantity
                    ? termsheetDetails?.commodityDetails?.quantity
                    : returnReadableNumber(termsheetDetails?.commodityDetails?.quantity,'en-In',2) +
                      ` ${termsheetDetails?.commodityDetails?.unitOfQuantity?.toUpperCase()}`
                }
                onChange={(e) => {
                  onChangeCommodityDetails(e);
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
                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                onWheel={(event) => event.currentTarget.blur()}
                onFocus={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, unitPrice: true }), (e.target.type = 'number');
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, unitPrice: false }), (e.target.type = 'text');
                }}
                value={
                  isFieldInFocus.unitPrice
                    ? termsheetDetails?.commodityDetails?.perUnitPrice
                    : ` ${termsheetDetails?.commodityDetails?.orderCurrency.toUpperCase()} ` +
                      returnReadableNumber(termsheetDetails?.commodityDetails?.perUnitPrice,termsheetDetails?.commodityDetails?.orderCurrency.toUpperCase() === 'INR' ? 'en-In': 'en-EN',2,2)
                }
                onChange={onChangeCommodityDetails}
                type="text"
                required
              />

              <label className={`${styles.label} label_heading`}>
                Unit Price<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className={`${styles.suffixWrapper} d-flex text-muted`}>
                <input
                  id="tolerance"
                  onWheel={(event) => event.currentTarget.blur()}
                  onFocus={(e) => {
                    setIsFieldInFocus({ ...isFieldInFocus, tolerance: true }), (e.target.type = 'number');
                  }}
                  onBlur={(e) => {
                    setIsFieldInFocus({ ...isFieldInFocus, tolerance: false }), (e.target.type = 'text');
                  }}
                  value={
                    isFieldInFocus.tolerance
                      ? termsheetDetails?.commodityDetails?.tolerance
                      : '±' +
                        returnReadableNumber(termsheetDetails?.commodityDetails?.tolerance,'en-In',2,2) + ` %`
                  }
                  onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                  className={`${styles.value} ${styles.customSelect} input form-control`}
                  onChange={onChangeCommodityDetails}
                  required
                />

                <label className={`${styles.label} label_heading`}>
                  Tolerance (+/-) Percentage
                  <strong className="text-danger">*</strong>
                </label>
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
                  'front',termsheetDetails?.commodityDetails?.orderCurrency.toUpperCase()=="INR"?"en-IN":"en-En"
                )}
                className={`${styles.value} input form-control`}
                onChange={onChangeTransactionDetails}
                required
                disabled
              />

              <label className={`${styles.label} label_heading`}>
                LC Value<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="marginMoney"
                className={`${styles.value} ${styles.marginPercent} input form-control`}
                type="text"
                onWheel={(event) => event.currentTarget.blur()}
                onFocus={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, marginMoney: true }), (e.target.type = 'number');
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({ ...isFieldInFocus, marginMoney: false }), (e.target.type = 'text');
                }}
                value={
                  isFieldInFocus.marginMoney
                    ? termsheetDetails?.transactionDetails?.marginMoney
                    : Number(termsheetDetails?.transactionDetails?.marginMoney).toLocaleString() + ` %`
                }
                onChange={onChangeTransactionDetails}
                required
              />

              <label className={`${styles.label} label_heading`}>
                Margin Money (%)<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
            <input
                id="lcOpeningBank"
                className={`${styles.value} ${styles.marginPercent} input form-control`}
                type="text"
                value={termsheetDetails?.transactionDetails?.lcOpeningBank}
                onChange={onChangeTransactionDetails}
                required
              />

              <label className={`${styles.label} label_heading`}>
              LC Opening Bank<strong className="text-danger">*</strong>
              </label>
              {/* <div className="d-flex">
                <select
                  id="lcOpeningBank"
                  className={`${styles.value} ${styles.customSelect} 
                                 input form-control`}
                  onChange={onChangeTransactionDetails}
                  value={termsheetDetails?.transactionDetails?.lcOpeningBank}
                  required
                >
                  <option disabled selected>
                    Select an option
                  </option>
                  <option value="First Class European Bank">First Class European Bank</option>
                  <option value="Reserve Bank of Spain">Reserve Bank of Spain</option>
                  <option value="Zurcher Kantonal Bank,Zurich">Zurcher Kantonal Bank,Zurich</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  LC Opening Bank<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div> */}
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
                  <option disabled selected>
                    Select{' '}
                  </option>
                  <option value="CFR">CFR</option>
                  <option value="FOB"> FOB</option>
                  <option value="CIF">CIF</option>
                </select>

                {/* <input id='incoTerm' defaultValue={termsheetDetails?.transactionDetails?.incoTerms} className={`${styles.value} input form-control`} type="text" required /> */}
                <label className={`${styles.label} label_heading`}>
                  INCO Terms<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
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
                  <option selected>Select an option</option>
                  {port
                    .filter((val, index) => {
                      if (val.Country.toLowerCase() !== 'india' ) {
                        return val;
                      }
                    })
                    .map((val, index) => {
                      return (
                        
                        <option key={index} value={`${val.Port_Name}, ${val.Country}`}>
                         {val.Port_Name}, {val.Country}
                        </option>
                      );
                    })}
                </select>
                <label className={`${styles.label} label_heading`}>
                  Port Of Loading<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
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
                  <option selected>Select an option</option>
                  {country.map((val, index) => {
                    return (
                      <option key={index} value={`${val.Country}`}>
                        {val.Country}
                      </option>
                    );
                  })}
                </select>
                <label className={`${styles.label} label_heading`}>
                  Country Of Origin<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
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
                  <option disabled selected>
                    Select an option
                  </option>
                  <option value="Bulk">Bulk</option>
                  <option value="Liner">Liner</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Shipment Type<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  value={termsheetDetails?.transactionDetails?.partShipmentAllowed}
                  id="partShipmentAllowed"
                  className={`${styles.value} ${styles.customSelect}  input form-control`}
                  onChange={onChangeTransactionDetails}
                  required
                >
                  <option disabled selected>
                    Select an option
                  </option>
                  {termsheetDetails?.transactionDetails?.partShipmentAllowed === 'Yes' ? (
                    <>
                      {' '}
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </>
                  ) : (
                    <>
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>{' '}
                    </>
                  )}
                </select>

                <label className={`${styles.label} label_heading`}>
                  Part Shipment Allowed
                  <strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
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
                  {port
                    .filter((val, index) => {
                      if (val.Country.toLowerCase() == 'india' && val.Approved=="YES") {
                        return val;
                      }
                    })
                    .map((val, index) => {
                      return (
                        <option key={index} value={`${val.Port_Name}`}>
                          {val.Port_Name}, {val.Country}
                        </option>
                      );
                    })}
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
                  <option disabled selected>
                    Select an option
                  </option>
                  <option value="Home Consumption">Home Consumption</option>
                  <option value="Into-Bond">Into-Bond</option>
                  <option value="EX-Bond">EX-Bond</option>
                </select>

                <label className={`${styles.label} label_heading`}>
                  Bill of Entry<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="thirdPartyInspectionReq"
                  className={`${styles.value} ${styles.customSelect}  input form-control`}
                  onChange={(e) => {
                    updateThirdPartyInspection(e);
                    onChangeTransactionDetails(e);
                  }}
                  value={termsheetDetails.transactionDetails?.thirdPartyInspectionReq}
                  required
                >
                  <option disabled selected>
                    Select{' '}
                  </option>
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
            {termsheetDetails.transactionDetails?.thirdPartyInspectionReq == 'true' ||
            termsheetDetails.transactionDetails?.thirdPartyInspectionReq == true ? (
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <select
                    onChange={onChangeTransactionDetails}
                    value={termsheetDetails?.transactionDetails?.typeOfPort}
                    className={`${styles.value} ${styles.customSelect} input form-control`}
                    required
                    id={'typeOfPort'}
                  >
                    <option selected>Select an option</option>
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
                  <option disabled >
                    Select an option
                  </option>
                    {port
                    .filter((val, index) => {
                      if (val.Country.toLowerCase() == 'india' && val.Approved=="YES") {
                        return val;
                      }
                    })
                    .map((val, index) => {
                      return (
                        <option key={index} value={`${val.Port_Name}`}>
                         {val.Port_Name}, {val.Country}
                        </option>
                      );
                    })}
                </select>

                <label className={`${styles.label} label_heading`}>
                  Storage of Goods<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
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
                  value={termsheetDetails?.paymentDueDate?.computationOfDueDate}
                  onChange={(e) => {
                    {
                      payementchangeFunc(e.target.value), onChangePaymentDueDate(e);
                    }
                  }}
                  className={`${styles.value} ${styles.customSelect}  input form-control`}
                  required
                >
                  <option disabled selected>
                    Select an option
                  </option>
                  <option value="DaysfromBLDate">Days from BL Date</option>
                  <option value="DaysfromVesselDate">Days from Vessel Discharge Date</option>
                  <option value="Whicheverisearlier">Whichever is earlier</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Computation of Due date
                  <strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="daysFromBlDate"
                className={`${styles.value} input form-control`}
                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                type="number"
                onWheel={(event) => event.currentTarget.blur()}
                value={termsheetDetails?.paymentDueDate?.daysFromBlDate}
                onChange={onChangePaymentDueDate}
                disabled={
                  IsBlSelected == 'DaysfromBLDate' ? false : IsBlSelected == 'Whicheverisearlier' ? false : true
                }
                required
              />
              <label className={`${styles.label} label_heading`}>
                Days From BL Date<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="daysFromVesselDate"
                className={`${styles.value} input form-control`}
                type="number"
                onWheel={(event) => event.currentTarget.blur()}
                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                value={termsheetDetails?.paymentDueDate?.daysFromVesselDate}
                onChange={onChangePaymentDueDate}
                disabled={
                  IsBlSelected == 'DaysfromVesselDate'
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
                onWheel={(event) => event.currentTarget.blur()}
                onFocus={(e) => {
                  setIsFieldInFocus({
                    ...isFieldInFocus,
                    tradeMarginPercentage: true,
                  }),
                    (e.target.type = 'number');
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({
                    ...isFieldInFocus,
                    tradeMarginPercentage: false,
                  }),
                    (e.target.type = 'text');
                }}
                value={
                  isFieldInFocus.tradeMarginPercentage
                    ? termsheetDetails.commercials?.tradeMarginPercentage
                    : Number(termsheetDetails.commercials?.tradeMarginPercentage).toLocaleString() + ` %`
                }
                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                onChange={onChangeCommercialTerms}
                required
              />

              <label className={`${styles.label} label_heading`}>
                Trade Margin(%)<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.form_group} col-md-4 col-sm-6 d-flex`}>
              <div className={`${styles.value} input form-control w-25 disable d-flex align-items-center border-right-0 rounded-left`}>
                {addPrefixSymbol(termsheetDetails?.commodityDetails?.orderCurrency?.toUpperCase())}
              </div>
              <input
                id="lcOpeningChargesUnit"
                className={`${styles.value} input form-control border-left-0`}
                type="text"
                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                onWheel={(event) => event.currentTarget.blur()}
                onFocus={(e) => {
                  setIsFieldInFocus({
                    ...isFieldInFocus,
                    lcOpeningCharges: true,
                  }),
                    (e.target.type = 'number');
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({
                    ...isFieldInFocus,
                    lcOpeningCharges: false,
                  }),
                    (e.target.type = 'text');
                }}
                value={
                  isFieldInFocus.lcOpeningCharges
                    ? termsheetDetails?.commercials?.lcOpeningChargesUnit
                    : returnReadableNumber(termsheetDetails?.commercials?.lcOpeningChargesUnit,termsheetDetails?.commodityDetails?.orderCurrency?.toUpperCase() === 'INR' ? 'en-In': 'en-EN')
                }
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
                onWheel={(event) => event.currentTarget.blur()}
                onFocus={(e) => {
                  setIsFieldInFocus({
                    ...isFieldInFocus,
                    lcOpeningChargesPercentage: true,
                  }),
                    (e.target.type = 'number');
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({
                    ...isFieldInFocus,
                    lcOpeningChargesPercentage: false,
                  }),
                    (e.target.type = 'text');
                }}
                value={
                  isFieldInFocus.lcOpeningChargesPercentage
                    ? termsheetDetails?.commercials?.lcOpeningChargesPercentage
                    : `${Number(termsheetDetails?.commercials?.lcOpeningChargesPercentage)?.toLocaleString("en-IN")}` + ` %`
                }
                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                onChange={onChangeCommercialTerms}
                required
              />

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
                onWheel={(event) => event.currentTarget.blur()}
                onFocus={(e) => {
                  setIsFieldInFocus({
                    ...isFieldInFocus,
                    usanceInterestPercetage: true,
                  }),
                    (e.target.type = 'number');
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({
                    ...isFieldInFocus,
                    usanceInterestPercetage: false,
                  }),
                    (e.target.type = 'text');
                }}
                value={
                  isFieldInFocus.usanceInterestPercetage
                    ? termsheetDetails?.commercials?.usanceInterestPercetage
                    : Number(termsheetDetails?.commercials?.usanceInterestPercetage).toLocaleString() + ` %`
                }
                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
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
                onWheel={(event) => event.currentTarget.blur()}
                onFocus={(e) => {
                  setIsFieldInFocus({
                    ...isFieldInFocus,
                    overDueInterestPerMonth: true,
                  }),
                    (e.target.type = 'number');
                }}
                onBlur={(e) => {
                  setIsFieldInFocus({
                    ...isFieldInFocus,
                    overDueInterestPerMonth: false,
                  }),
                    (e.target.type = 'text');
                }}
                value={
                  isFieldInFocus.overDueInterestPerMonth
                    ? termsheetDetails?.commercials?.overDueInterestPerMonth
                    : Number(termsheetDetails?.commercials?.overDueInterestPerMonth).toLocaleString() + ` %`
                }
                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
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
                  <option disabled selected>
                    Select an option
                  </option>
                  <option value="On Buyers A/C">On Buyers A/C</option>
                  <option value="On Sellers A/C">On Sellers A/C</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Exchange Fluctation<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
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
                  <option disabled selected>
                    Select an option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Forex Hedging<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </div>

            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
              <input
                id="otherTermsAndConditions"
                className={`${styles.value} input form-control`}
                type="text"
                defaultValue={termsheetDetails?.commercials?.otherTermsAndConditions}
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
                  <option disabled selected>
                    Select an option
                  </option>
                  <option selected value="1">
                    1
                  </option>
                  <option value="2">2</option>
                </select>
                <label className={`${styles.label} label_heading`}>
                  Version<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
