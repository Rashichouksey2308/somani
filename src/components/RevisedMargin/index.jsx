import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import DownloadBar from '../DownloadBar';
import { addPrefixOrSuffix, convertValue } from 'utils/helper';
import Router from 'next/router';
import { useDispatch } from 'react-redux';

const Index = ({
  finalCal,
  finalCalRevised,
  marginData,
  saveInvoiceDataRevisedRevised,
  setSameRevised,
  invoiceDataRevised,
  setInvoiceDataRevised,
  calcRevised,
  handleUpdateRevisedMarginMoney,
  exportPDF,
  saveforCalculationRevised,
  forCalculationRevised,
  getInternalCompaniesMasterData,
  getBranchesMasterData,
  getBanksMasterData,
  savedataRevised,
}) => {
  const dispatch = useDispatch();
  const [isFieldInFocus, setIsFieldInFocus] = useState({
    quantity: false,
    perUnitPrice: false,
    conversionRate: false,
  });



  const [changeImporterData, setChangeImporterData] = useState({
    branch: '',
    state: '',
    address: '',
  });
  const [conversionRateUnit, setConversionRateUnit] = useState();
  
  const [branchOptions, setBranchOptions] = useState([]);
  
  const dropDownChange = (name, value) => {
    if (value === 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED') {
      // setChangeImporterData({ ...emergent });
      const newInput = { ...invoiceDataRevised };
      newInput['importerName'] = 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED';
      // newInput['branchOffice'] = emergent.branch;
      // newInput['importerGSTIN'] = emergent.GSTIN;
      // newInput['companyAddress'] = emergent.address;
      // saveInvoiceData('branchOffice', emergent.branch)
      // saveInvoiceData('importerGSTIN', emergent.GSTIN)
      // saveInvoiceData('companyAddress', emergent.address)
      setInvoiceDataRevised({ ...newInput });
    } else if (value === 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED') {
      // setChangeImporterData({ ...indoGerman });
      const newInput = { ...invoiceDataRevised };
      newInput['importerName'] = 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED';
      // newInput['branchOffice'] = indoGerman.branch;
      // newInput['importerGSTIN'] = indoGerman.GSTIN;
      // newInput['companyAddress'] = indoGerman.address;
      // saveInvoiceData('branchOffice', emergent.branch)
      // saveInvoiceData('importerGSTIN', emergent.GSTIN)
      // saveInvoiceData('companyAddress', emergent.address)
      setInvoiceDataRevised({ ...newInput });
    }
    let filter = getInternalCompaniesMasterData.filter((val, index) => {
      if (val.Company_Name == value) {
        return val;
      }
    });
    setBranchOptions(filter);
  };
 useEffect(() => {
    dropDownChange("name",invoiceDataRevised.importerName )
  },[invoiceDataRevised])
  const routeChange = () => {
    Router.push('/revised-margin-preview');
  };
  const changeImporter = (e) => {
    if (e.target.name == 'branchOffice') {
      changeImporterData.branch = e.target.value;
      const newInput = { ...invoiceDataRevised };
      newInput['branchOffice'] = e.target.value;
      setChangeImporterData({ ...changeImporterData });
      setInvoiceDataRevised({ ...newInput });
    }
    if (e.target.name == 'companyAddress') {
      const newInput = { ...invoiceDataRevised };
      changeImporterData.address = e.target.value;
      newInput['companyAddress'] = e.target.value;
      setChangeImporterData({ ...changeImporterData });
      setInvoiceDataRevised({ ...newInput });
    }
    if (e.target.name == 'importerGSTIN') {
      const newInput = { ...invoiceDataRevised };
      changeImporterData.GSTIN = e.target.value;
      newInput['importerGSTIN'] = e.target.value;
      setChangeImporterData({ ...changeImporterData });
      setInvoiceDataRevised({ ...newInput });
    }
  };
  const coversionUnitHandler = (val) => {
    let unit = 10000000;
    if (val === 'Lakh') {
      unit = 100000;
    }
    if (val === 'Million') {
      unit = 1000000;
    }
    if (val === 'Crores') {
      unit = 10000000;
    }
    setConversionRateUnit(unit);
  };
  return (
    <>
      <div className={`${styles.card} vessel_card accordionMargin card`}>
        <div
          className={`${styles.cardHeader} d-flex align-items-center justify-content-between`}
          style={{ cursor: 'default' }}
        >
          <div className={`${styles.commodity}`}>
            <span className={`${styles.comm_head} sub_heading`}>Commodity</span>
            <span className={`${styles.comm_val} heading`}> {marginData?.order?.commodity}</span>
          </div>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <div className={`${styles.pay} mr-5`}>
              <strong className={`mr-2`}>Status</strong>
              <div className={`d-flex align-items-center justify-content-between`}>
                <div className={`${styles.round} mr-2`}></div>
                <span className={`heading`}>Payment Initiated</span>
              </div>
            </div>
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <select
              className={`${styles.options} accordion_DropDown`}
              value={conversionRateUnit}
              onChange={(e) => setConversionRateUnit(e.target.value)}
            >
              <option value={10000000}> {'Crores'}</option>
              <option value={1000000}> {'Million'}</option>
              <option value={100000}> {'Lakh'}</option>
            </select>
            <span
              data-toggle="collapse"
              data-target="#commodityAccordion"
              aria-expanded="true"
              aria-controls="commodityAccordion"
            >
              +
            </span>
          </div>
        </div>
        <div
          id="commodityAccordion"
          //className="collapse"
          aria-labelledby="commodityAccordion"
          data-parent="#commodityAccordion"
        >
          <div className={`${styles.cardBody} card-body `}>
            <div className={`${styles.content} border_color`}>
              <div className={`${styles.input_container} row`}>
                <div
                  className={`${styles.filed} ${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div className={`${styles.alphabet} d-flex mr-3 justify-content-center align-content-center`}>
                    <span>A</span>
                  </div>
                  <input
                    onFocus={(e) => {
                      setIsFieldInFocus({ ...isFieldInFocus, quantity: true }), (e.target.type = 'number');
                    }}
                    onBlur={(e) => {
                      setIsFieldInFocus({ ...isFieldInFocus, quantity: false }), (e.target.type = 'text');
                    }}
                    value={
                      isFieldInFocus.quantity
                        ? forCalculationRevised?.quantity
                        : Number(forCalculationRevised?.quantity).toLocaleString('en-In') +
                          ` ${marginData?.order?.unitOfQuantity?.toUpperCase()}`
                    }
                    onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                    name="quantity"
                    id="quantity"
                    className={`${styles.input_field} input form-control`}
                    required
                    onChange={(e) => saveforCalculationRevised(e.target.name, e.target.value)}
                  />
                  <label className={`${styles.label_heading} label_heading`} style={{ left: '70px' }} id="textInput">
                    Quantity<strong className="text-danger">*</strong>
                  </label>
                  {/* <div className={`${styles.val_wrapper} ml-3`}>
                    <div className={`${styles.val}  heading`}>
                      {addPrefixOrSuffix(
                        marginData?.order?.quantity,
                        'MT',
                        '',
                      )?.toLocaleString()}
                    </div>
                  </div> */}
                </div>
                <div
                  className={`${styles.filed} ${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div className={`${styles.alphabet} d-flex mr-3 justify-content-center align-content-center`}>
                    <span>B</span>
                  </div>
                  <input
                    onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                    name="perUnitPrice"
                    id="perUnitPrice"
                    onFocus={(e) => {
                      setIsFieldInFocus({
                        ...isFieldInFocus,
                        perUnitPrice: true,
                      }),
                        (e.target.type = 'number');
                    }}
                    onBlur={(e) => {
                      setIsFieldInFocus({
                        ...isFieldInFocus,
                        perUnitPrice: false,
                      }),
                        (e.target.type = 'text');
                    }}
                    value={
                      isFieldInFocus.perUnitPrice
                        ? forCalculationRevised?.perUnitPrice
                        : ` ${marginData?.order?.orderCurrency?.toUpperCase()} ` +
                          Number(forCalculationRevised?.perUnitPrice).toLocaleString('en-In')
                    }
                    className={`${styles.input_field} input form-control`}
                    required
                    onChange={(e) => saveforCalculationRevised(e.target.name, e.target.value)}
                  />
                  <label className={`${styles.label_heading} label_heading`} style={{ left: '70px' }} id="textInput">
                    Unit Price<strong className="text-danger">*</strong>
                  </label>
                  {/* <div className={`${styles.val_wrapper} ml-3`}>
                    <div className={`${styles.val} heading`}>

                      {marginData?.order?.orderCurrency + ' '}
                      {marginData?.order?.perUnitPrice ? Number(marginData?.order?.perUnitPrice)?.toLocaleString('en-In') : ''}

                    </div>
                  </div> */}
                </div>
                <div
                  className={`${styles.filed} ${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div className={`${styles.alphabet} d-flex mr-3 justify-content-center align-content-center`}>
                    <span>C</span>
                  </div>
                  <input
                    onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                    name="conversionRate"
                    id="conversionRate"
                    onFocus={(e) => {
                      setIsFieldInFocus({
                        ...isFieldInFocus,
                        conversionRate: true,
                      }),
                        (e.target.type = 'number');
                    }}
                    onBlur={(e) => {
                      setIsFieldInFocus({
                        ...isFieldInFocus,
                        conversionRate: false,
                      }),
                        (e.target.type = 'text');
                    }}
                    value={
                      isFieldInFocus.conversionRate
                        ? forCalculationRevised?.conversionRate
                        : Number(forCalculationRevised?.conversionRate).toLocaleString('en-In')
                    }
                    className={`${styles.input_field} input form-control`}
                    required
                    onChange={(e) => saveforCalculationRevised(e.target.name, e.target.value)}
                  />
                  <label className={`${styles.label_heading} label_heading`} style={{ left: '70px' }} id="textInput">
                    Conversion Rate<strong className="text-danger">*</strong>
                  </label>
                  {/* <div className={`${styles.val_wrapper} ml-3`}>
                    <div className={`${styles.val} heading`}>
                      {addPrefixOrSuffix(
                        marginData?.conversionRate,
                        'INR',
                        'front',
                      )}
                    </div>
                  </div> */}
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>D</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Usance Interest (%) (For 90 Days)
                      <strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.val} heading d-flex align-items-center`}>
                      {marginData?.order?.termsheet?.commercials?.usanceInterestPercetage}%
                      <div className={` d-flex align-items-center`}>
                        <label className={`${styles.label_heading} ml-3 text-nowrap label_heading mb-0`} id="textInput">
                          Include in Calculation
                        </label>
                        <Form>
                          {['radio'].map((type) => (
                            <div key={`inline-${type}`} className={`${styles.radio_group} d-flex ml-3`}>
                              <Form.Check
                                className={`${styles.radio} radio`}
                                inline
                                label="Yes"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                onChange={(e) => saveforCalculationRevised('isUsanceInterestIncluded', true)}
                                checked={forCalculationRevised?.isUsanceInterestIncluded === true}
                              />
                              <Form.Check
                                className={`${styles.radio} radio`}
                                inline
                                label="No"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                onChange={(e) => saveforCalculationRevised('isUsanceInterestIncluded', false)}
                                checked={forCalculationRevised?.isUsanceInterestIncluded === false}
                              />
                            </div>
                          ))}
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>E</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Trade Margin (%)<strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {' '}
                      {marginData?.order?.termsheet?.commercials?.tradeMarginPercentage} %
                    </div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>F</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Tolerance (+/-) Percentage
                      <strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.val} heading`}>
                      (+/-){' '}
                      {addPrefixOrSuffix(
                        marginData?.order?.tolerance?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                        }),
                        '%',
                        '',
                      )}
                    </div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>G</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Margin Money (%)<strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {' '}
                      {addPrefixOrSuffix(marginData?.order?.termsheet?.transactionDetails?.marginMoney, '%', '')}
                    </div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>H</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                      defaultValue={marginData?.numberOfPDC}
                    >
                      {` No. of PDC's`}
                      <strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.val} heading`}>{marginData?.numberOfPDC}</div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>I</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      {` Additional PDC's`}
                      <strong className="text-danger">*</strong>
                    </label>
                    <input
                      type="number"
                      onWheel={(event) => event.currentTarget.blur()}
                      name="additionalPDC"
                      onChange={(e) => saveforCalculationRevised(e.target.name, e.target.value)}
                      defaultValue={marginData?.additionalPDC}
                      className={`${styles.input_field} input form-control`}
                      style={{ color: '#FF9D00' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.content} border_color`}>
              <span>Calculation</span>
              <div className={`${styles.input_container} row`}>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>J</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Order Value <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(A*B)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {marginData?.order?.orderCurrency + ' '}
                      {finalCalRevised?.orderValue ? Number(finalCalRevised?.orderValue)?.toLocaleString('en-In') : 0}
                    </div>
                  </div>
                </div>

                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>K</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Order Value (INR) <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(J*C)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {/* {addPrefixOrSuffix(
                        finalCalRevised.orderValueInINR ? finalCalRevised.orderValueInINR : 0,
                        'INR',
                        'front',
                      )} */}
                      ₹{' '}
                      {convertValue(finalCalRevised?.orderValueInINR, conversionRateUnit).toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>L</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Usance Interest (%) for 90 days (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>
                        {`(K*D*90/365)`}

                        <div className={`${styles.tooltip}`}>
                          <img className={`ml-2 mt-n1 img-fluid`} src="/static/info-circle.svg" />
                          <span className={`${styles.tooltiptext}`}>Indicative Figures</span>
                        </div>
                      </span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      ₹{' '}
                      {convertValue(finalCalRevised?.usanceInterest, conversionRateUnit).toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                      {/* {addPrefixOrSuffix(
                        finalCalRevised?.usanceInterest ? finalCalRevised?.usanceInterest : 0,
                        'INR',
                        'front',
                      )} */}
                    </div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>M</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Trade Margin (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(K*E)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      ₹{' '}
                      {convertValue(finalCalRevised?.tradeMargin, conversionRateUnit).toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                      {/* {addPrefixOrSuffix(
                        finalCalRevised?.tradeMargin ? finalCalRevised?.tradeMargin : 0,
                        'Cr',
                        '',
                      )} */}
                    </div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>N</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Gross Order Value (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(K+L+M)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      ₹{' '}
                      {convertValue(finalCalRevised?.grossOrderValue, conversionRateUnit).toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                      {/* {addPrefixOrSuffix(
                        finalCalRevised?.grossOrderValue ? finalCalRevised?.grossOrderValue : 0,
                        'Cr',
                        '',
                      )} */}
                    </div>
                  </div>
                </div>

                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>O</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Tolerance Value (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(N*F)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {/* {addPrefixOrSuffix(
                        finalCal.toleranceValue ? finalCal.toleranceValue : 0,
                        'Cr',
                        '',
                      )} */}
                      ₹{' '}
                      {convertValue(finalCalRevised?.toleranceValue, conversionRateUnit).toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>P</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Total Order Value (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(N+O)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {/* ₹ {finalCal.totalOrderValue} */}₹{' '}
                      {convertValue(finalCalRevised?.totalOrderValue, conversionRateUnit).toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>Q</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Provisional Unit Price Per Ton (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(N/A)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {/* ₹ {finalCal.provisionalUnitPricePerTon} */}₹{' '}
                      {convertValue(finalCalRevised?.provisionalUnitPricePerTon, conversionRateUnit).toLocaleString(
                        'en-In',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      )}
                    </div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>R</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Margin Money (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(P*G)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {/* ₹ {finalCal.marginMoney} */}₹{' '}
                      {convertValue(finalCalRevised?.marginMoney, conversionRateUnit).toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>S</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Total SPDC Amount Req. (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(P-R)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {/* ₹ {finalCal.totalSPDC} */}₹{' '}
                      {convertValue(finalCalRevised?.totalSPDC, conversionRateUnit).toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.content} border_color`}>
              <div className={`${styles.input_container} row`}>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>T</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Additional Amount per SPDC (INR) <strong className="text-danger">*</strong>
                      <div className={`${styles.tooltip}`}>
                        <img className={`ml-2 mt-n1 img-fluid`} src="/static/info-circle.svg" />
                        <span className={`${styles.tooltiptext}`}>[(S-Previous Value)/I)]</span>
                      </div>
                    </label>
                    <div className={`${styles.val} ${styles.green} heading`}>
                      {/* ₹ {calcRevised.additionalAmountPerPDC} */}₹{' '}
                      {isNaN(calcRevised.additionalAmountPerPDC) || calcRevised?.additionalAmountPerPDC == 0
                        ? 0
                        : convertValue(calcRevised.additionalAmountPerPDC, conversionRateUnit).toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                    </div>
                  </div>
                </div>

                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>U</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Revised Net Order Value (INR)
                      <strong className="text-danger">*</strong>
                      <div className={`${styles.tooltip}`}>
                        <img className={`ml-2 mt-n1 img-fluid`} src="/static/info-circle.svg" />
                        <span className={`${styles.tooltiptext}`}>P - Total Order Value (Previous)</span>
                      </div>
                    </label>
                    <div className={`${styles.val} ${styles.green} heading`}>
                      {/* ₹ {calcRevised.revisedNetOrderValue} */}₹{' '}
                      {isNaN(calcRevised.revisedNetOrderValue) || calcRevised?.revisedNetOrderValue == 0
                        ? 0
                        : convertValue(calcRevised.revisedNetOrderValue, conversionRateUnit).toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                    </div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>V</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Margin Money (INR)
                      <strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.val} ${styles.green} heading`}>
                      {/* ₹ {calcRevised.marginMoney} */}₹{' '}
                      {convertValue(finalCal?.marginMoney, conversionRateUnit).toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>W</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Revised Margin Money Calculation (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(R)`}</span>
                    </label>
                    <div className={`${styles.val} ${styles.green} heading`}>
                      {/* ₹ {finalCal.marginMoney} */}₹{' '}
                      {convertValue(calcRevised?.revisedMarginMoney, conversionRateUnit).toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>X</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Margin Money Received (INR)
                      <strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.val} ${styles.green} heading`}>₹ 00.00</div>
                  </div>
                </div>
                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                  <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                    <span>Y</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Margin Money Payable (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(W-X)`}</span>
                    </label>
                    <div className={`${styles.val} ${styles.green} heading`}>₹ 00.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.card} vessel_card accordionMargin card`} style={{ marginBottom: '150px' }}>
        <div
          className={`${styles.cardHeader} d-flex align-items-center justify-content-between`}
          data-toggle="collapse"
          data-target="#invoice"
          aria-expanded="true"
          aria-controls="invoice"
        >
          <h2 className="mb-0">Invoice Details</h2>
          <span className="ml-3">+</span>
        </div>
        <div id="invoice" className="collapse" aria-labelledby="invoice" data-parent="#invoice">
          <div className={`${styles.cardBody} card-body `}>
            <div className={`${styles.content} border_color`}>
              <div className={`${styles.input_container} row`}>
                <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="buyerName"
                    defaultValue={marginData?.company?.companyName}
                    className={`${styles.input_field} input form-control`}
                    required
                    onChange={(e) => saveInvoiceDataRevisedRevised(e.target.name, e.target.value)}
                  />
                  <label className={`${styles.label_heading} label_heading`} id="textInput">
                    Buyer Name
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                  <div className="d-flex">
                    <select
                      id="Code"
                      name="buyerGSTIN"
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      required
                      onChange={(e) => saveInvoiceDataRevisedRevised(e.target.name, e.target.value)}
                      defaultValue={marginData?.revisedMarginMoney?.invoiceDetail?.buyerGSTIN}
                    >
                      {/* <option value="GTSDT789652JKH">
                                    {marginData?.revisedMarginMoney?.invoiceDetail?.buyerGSTIN}
                                  </option> */}
                      <option selected>Select an option</option>
                      <option value="GTSDT789652JKH">GTSDT789652JKH</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Buyer GSTIN
                      <strong className="text-danger">*</strong>
                    </label>
                    <img className={`img-fluid image_arrow ${styles.arrow}`} src="/static/inputDropDown.svg" />
                  </div>
                </div>
                <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="buyerAddress"
                    defaultValue={marginData?.revisedMarginMoney?.invoiceDetail?.buyerAddress}
                    className={`${styles.input_field} input form-control`}
                    required
                    onChange={(e) => saveInvoiceDataRevisedRevised(e.target.name, e.target.value)}
                  />
                  <label className={`${styles.label_heading} label_heading`} id="textInput">
                    Buyer Address
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.radio_form} col-md-12`}>
                  <div className={`${styles.label_heading} label_heading`}>
                    Is Consignee same as Buyer
                    <strong className="text-danger">*</strong>
                  </div>
                  <Form>
                    {['radio'].map((type) => (
                      <div key={`inline-${type}`} className={styles.radio_group}>
                        <Form.Check
                          className={`${styles.radio} radio`}
                          inline
                          label="Yes"
                          defaultChecked={invoiceDataRevised?.isConsigneeSameAsBuyer == true}
                          onChange={() => {
                            saveInvoiceDataRevisedRevised('isConsigneeSameAsBuyer', true);
                            setSameRevised(true);
                          }}
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          className={`${styles.radio} radio`}
                          inline
                          label="No"
                          defaultChecked={invoiceDataRevised?.isConsigneeSameAsBuyer == false}
                          onChange={() => {
                            saveInvoiceDataRevisedRevised('isConsigneeSameAsBuyer', false);
                            setSameRevised(false);
                          }}
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </Form>
                </div>
                <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="consigneeName"
                    value={invoiceDataRevised?.consigneeName}
                    onChange={(e) => saveInvoiceDataRevisedRevised(e.target.name, e.target.value)}
                    className={`${styles.input_field} input form-control`}
                    required
                  />
                  <label className={`${styles.label_heading} label_heading`} id="textInput">
                    Consignee Name
                  </label>
                </div>
                {/* <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                  <div className="d-flex">
                    <select
                      id="Code"
                      name="consigneeGSTIN"
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      required
                      onChange={(e) =>
                        saveInvoiceDataRevisedRevised(
                          e.target.name,
                          e.target.value,
                        )
                      }
                      value={invoiceDataRevised?.consigneeGSTIN}
                    >
                      <option selected disabled>
                        Select an option
                      </option>
                      <option value="GTSDT789652JKH">GTSDT789652JKH</option>
                      <option value="GTSDT789652JKH">GTSDT789652JKH</option>
                    </select>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Consignee GSTIN
                      <strong className="text-danger">*</strong>
                    </label>
                    <img
                      className={`img-fluid image_arrow ${styles.arrow}`}
                      src="/static/inputDropDown.svg"
                    ></img>
                  </div>
                </div> */}
                <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                  <div className="d-flex">
                    <input
                      type="text"
                      id="textInput"
                      name="consigneeGSTIN"
                      onChange={(e) => saveInvoiceDataRevisedRevised(e.target.name, e.target.value)}
                      value={invoiceDataRevised?.consigneeGSTIN}
                      className={`${styles.input_field} input form-control`}
                      required
                    />
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Consignee GSTIN
                      <strong className="text-danger">*</strong>
                    </label>
                  </div>
                </div>
                <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="consigneeAddress"
                    onChange={(e) => saveInvoiceDataRevisedRevised(e.target.name, e.target.value)}
                    value={invoiceDataRevised?.consigneeAddress}
                    className={`${styles.input_field} input form-control`}
                    required
                  />
                  <label className={`${styles.label_heading} label_heading`} id="textInput">
                    Consignee Address
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
              </div>
            </div>
            <div className={`${styles.content} border_color`}>
              <div className={`${styles.input_container} row`}>
                <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                  <div className="d-flex">
                    <select
                      id="Code"
                      name="importerName"
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      required
                      value={invoiceDataRevised?.importerName}
                      onChange={(e) => dropDownChange(e.target.name, e.target.value)}
                      style={{ paddingRight: '40px' }}
                    >
                      <option>Select an option</option>
                      <option value="INDO GERMAN INTERNATIONAL PRIVATE LIMITED">
                        INDO GERMAN INTERNATIONAL PRIVATE LIMITED
                      </option>
                      <option value="EMERGENT INDUSTRIAL SOLUTIONS LIMITED">
                        EMERGENT INDUSTRIAL SOLUTIONS LIMITED
                      </option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Importer Name
                      <strong className="text-danger">*</strong>
                    </label>
                    <img className={`img-fluid image_arrow ${styles.arrow}`} src="/static/inputDropDown.svg"></img>
                  </div>
                </div>
                <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                  <div className="d-flex">
                    <select
                      id="Code"
                      name="branchOffice"
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      required
                      value={
                        changeImporterData?.branch
                          ? changeImporterData?.branch
                          : marginData?.revisedMarginMoney?.invoiceDetail?.branchOffice
                      }
                      onChange={(e) => {
                        //  changeImporter(e)
                        let filter = getInternalCompaniesMasterData.filter((val, index) => {
                          if (
                            val.Branch == e.target.value &&
                            val.Company_Name?.toLowerCase() == invoiceDataRevised?.importerName?.toLowerCase()
                          ) {
                            return val;
                          }
                        });

                        if (filter.length > 0) {
                          if (filter.length > 0) {
                            const newInput = { ...invoiceDataRevised };
                            changeImporterData.address = filter[0].Address;
                            newInput['companyAddress'] = filter[0].Address;

                            changeImporterData.GSTIN = filter[0].GSTIN;
                            newInput['importerGSTIN'] = filter[0].GSTIN;

                            

                           
                          

                            newInput['branchOffice'] = e.target.value;
                            changeImporterData.branch = e.target.value;
                            setChangeImporterData({
                              ...changeImporterData,
                            });
                            setInvoiceDataRevised({ ...newInput });
                          }
                        }
                      }}
                    >
                      <option selected>Select an option</option>
                      {branchOptions.map((val, index) => {
                        return <option value={val.Branch}>{val.Branch}</option>;
                      })}
                    </select>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Branch Office
                      <strong className="text-danger">*</strong>
                    </label>
                    <img className={`img-fluid image_arrow ${styles.arrow}`} src="/static/inputDropDown.svg"></img>
                  </div>
                </div>

                <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    value={
                      changeImporterData?.address
                        ? changeImporterData?.address
                        : marginData?.revisedMarginMoney?.invoiceDetail?.companyAddress
                    }
                    name="companyAddress"
                    onChange={(e) => changeImporter(e)}
                    className={`${styles.input_field} input form-control`}
                    required
                  />
                  <label className={`${styles.label_heading} label_heading`} id="textInput">
                    Company Address
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="importerGSTIN"
                    onChange={(e) => changeImporter(e)}
                    value={
                      changeImporterData?.GSTIN
                        ? changeImporterData?.GSTIN
                        : marginData?.revisedMarginMoney?.invoiceDetail?.importerGSTIN
                    }
                    className={`${styles.input_field} input form-control`}
                    required
                  />
                  <label className={`${styles.label_heading} label_heading`} id="textInput">
                    Importer GSTIN
                    <strong className="text-danger">*</strong>
                  </label>
                </div>

                <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                  <div className="d-flex">
                    <select
                      type="text"
                      id="Code"
                      name="bankName"
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      required
                      value={
                       
                        invoiceDataRevised?.bankName
                      }
                      onChange={(e) =>
                       {
                        saveInvoiceDataRevisedRevised(
                          e.target.name,
                          e.target.value,
                        )
                        let filter = getBanksMasterData.filter(
                                  (val, index) => {
                                    if (val.name == e.target.value) {
                                      return val;
                                    }
                                  },
                                );
                        
                       }
                       
                      }
                    >
                      <option>Select an option</option>
                        {getBanksMasterData.map((val, index) => {
                          return (
                            <option value={`${val.name}`}>
                              {val.name}
                            </option>
                          );
                        })}
                    </select>

                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Bank Name
                      <strong className="text-danger">*</strong>
                    </label>
                    <img
                      className={`img-fluid  image_arrow ${styles.arrow}`}
                      src="/static/inputDropDown.svg"
                    ></img>
                  </div>
                </div>
                <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                  <div className="d-flex">
                    <select
                      type="text"
                      id="Code"
                      name="branch"
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      required
                      value={invoiceDataRevised?.branch}
                      onChange={(e) => {
                        saveInvoiceDataRevisedRevised(e.target.name, e.target.value);
                        let filter=getBranchesMasterData.filter((val,index)=>{
                              if(val.BRANCH==e.target.value){
                                return val
                              }
                            })

                           savedataRevised("branchAddress",filter[0].ADDRESS,"IFSCcode",filter[0].IFSC,e.target.value)
                      }}
                    >
                      <option selected >
                        Select an option
                      </option>
                     {getBranchesMasterData.map((val,index)=>{
                          return  <option value={`${val.BRANCH}`}>{val.BRANCH}</option>
                      })}
                    </select>
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Branch
                      <strong className="text-danger">*</strong>
                    </label>
                    <img
                      className={`img-fluid image_arrow ${styles.arrow}`}
                      src="/static/inputDropDown.svg"
                    ></img>
                  </div>
                </div>

                <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="branchAddress"
                    onChange={(e) => saveInvoiceDataRevisedRevised(e.target.name, e.target.value)}
                    value={invoiceDataRevised.branchAddress}
                    className={`${styles.input_field} input form-control`}
                    required
                  />
                  <label className={`${styles.label_heading} label_heading`} id="textInput">
                    Branch Address
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="IFSCcode"
                    onChange={(e) => saveInvoiceDataRevisedRevised(e.target.name, e.target.value)}
                    value={invoiceDataRevised.IFSCcode}
                    className={`${styles.input_field} input form-control`}
                    required
                  />
                  <label className={`${styles.label_heading} label_heading`} id="textInput">
                    IFSC Code
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="accountNo"
                    onChange={(e) => saveInvoiceDataRevisedRevised(e.target.name, e.target.value)}
                    value={invoiceDataRevised.accountNo}
                    className={`${styles.input_field} input form-control`}
                    required
                  />
                  <label className={`${styles.label_heading} label_heading`} id="textInput">
                    A/C Number
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DownloadBar
        downLoadButtonName={`Download`}
        handleReject={exportPDF}
        isPrevious={true}
        handleUpdate={handleUpdateRevisedMarginMoney}
        leftButtonName={`Save`}
        rightButtonName={`Preview`}
        handleApprove={routeChange}
        isApprove
      />
      {/* <DownloadBar
        handleReject={exportPDF}
        downLoadButtonName={`Download`}
        isPrevious={true}
        leftButtonName={`Save`}
        handleUpdate={handleUpdateRevisedMarginMoney}
        rightButtonName={`Preview`}
      /> */}
    </>
  );
};

export default Index;
