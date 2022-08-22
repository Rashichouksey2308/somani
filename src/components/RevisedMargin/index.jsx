import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'
import _get from 'lodash/get'
import DownloadBar from '../DownloadBar'

const Index = ({
  finalCal,
  marginData,
  saveInvoiceDataRevisedRevised,
  setSameRevised,
  invoiceDataRevised,
  saveForCalculation,
  calcRevised,
  handleUpdateRevisedMarginMoney

}) => {
  console.log(marginData,"marginData")
  return (
    <>
      <div className={`${styles.card}  accordionMargin card`}>
        <div
          className={`${styles.cardHeader} d-flex align-items-center justify-content-between`}
          data-toggle="collapse"
          data-target="#commodityAccordion"
          aria-expanded="true"
          aria-controls="commodityAccordion"
        >
          <div className={`${styles.commodity}`}>
            <span className={`${styles.comm_head} sub_heading mb-2`}>
              Commodity
            </span>
            <span className={`${styles.comm_val} heading`}>
              {' '}
              {marginData?.order?.commodity}
            </span>
          </div>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <div className={`${styles.pay} mr-5`}>
              <strong className={`mr-2`}>Status</strong>
              <div
                className={`d-flex align-items-center justify-content-between`}
              >
                <div className={`${styles.round} mr-2`}></div>
                <span className={`heading`}>Payment Initiated</span>
              </div>
            </div>
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <select className={`${styles.options} accordion_DropDown`}>
              <option>
                {' '}
                {marginData?.order?.unitOfValue == 'Cr' ? 'Crores' : null}
              </option>
            </select>
            <span>+</span>
          </div>
        </div>
        <div
          id="commodityAccordion"
          className="collapse"
          aria-labelledby="commodityAccordion"
          data-parent="#commodityAccordion"
        >
          <div className={`${styles.cardBody} card-body `}>
            <div className={`${styles.content} border_color`}>
              <div className={`${styles.input_container} row`}>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>A</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Quantity<strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.val}  heading`}>
                      {marginData?.order?.quantity?.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>B</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Unit Price<strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {marginData?.order?.perUnitPrice}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>C</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Conversion Rate<strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {marginData?.conversionRate}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>D</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Usance Interest (%) (For 90 Days)
                      <strong className="text-danger">*</strong>
                    </label>
                    <div
                      className={`${styles.val} heading d-flex align-items-center`}
                    >
                      {
                        marginData?.order?.termsheet?.commercials
                          ?.usanceInterestPercetage
                      }
                      <div className={` d-flex align-items-center`}>
                        <label
                          className={`${styles.label_heading} ml-3 text-nowrap label_heading mb-0`}
                          id="textInput"
                        >
                          Include in Calculation
                        </label>
                        <Form>
                          {['radio'].map((type) => (
                            <div
                              key={`inline-${type}`}
                              className={`${styles.radio_group} d-flex ml-3`}
                            >
                              <Form.Check
                                className={`${styles.radio} radio`}
                                inline
                                label="Yes"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                defaultChecked={
                                  marginData?.isUsanceInterestIncluded === true
                                }
                              />
                              <Form.Check
                                className={`${styles.radio} radio`}
                                inline
                                label="No"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                defaultChecked={
                                  marginData?.isUsanceInterestIncluded === false
                                }
                              />
                            </div>
                          ))}
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>E</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Trade Margin (%)<strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {' '}
                      {
                        marginData?.order?.termsheet?.commercials
                          ?.tradeMarginPercentage
                      }
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>F</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Tolerance (+/-) Percentage
                      <strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {marginData?.order?.tolerance}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>G</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Margin Money (%)<strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {' '}
                      {
                        marginData?.order?.termsheet?.transactionDetails
                          ?.marginMoney
                      }
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
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
                    <div className={`${styles.val} heading`}>75</div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>I</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      {` Additional PDC's`}
                      <strong className="text-danger">*</strong>
                    </label>
                    <input
                      type="number"
                      name="additionalPDC"
                      onChange={(e) =>
                        saveForCalculation(e.target.name, e.target.value)
                      }
                      defaultValue={marginData?.additionalPDC}
                      className={`${styles.input_field} form-control`}
                      style={{ color: '#FF9D00' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.content} border_color`}>
              <span>Calculation</span>
              <div className={`${styles.input_container} row`}>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>J</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Order Value <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(A*B)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {finalCal.orderValue}
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>K</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Order Value (INR){' '}
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(J*C)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {finalCal.orderValueInINR}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>L</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Usance Interest (%) for 90 days (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(K*D*90/365)`}
                        
                        <div className={`${styles.tooltip}`}>
                          <img className={`ml-2 mt-n1 img-fluid`} src="/static/info-circle.svg"/>
                          <span className={`${styles.tooltiptext}`}>Indicative Figures</span>
                        </div>
                      </span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {finalCal.usanceInterest}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>M</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Trade Margin (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(K*E)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {finalCal.tradeMargin}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>N</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Gross Order Value (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(K+L+M)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {finalCal.grossOrderValue}
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>O</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Tolerance Value (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(N*F)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                      {finalCal.toleranceValue}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>P</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Total Order Value (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(N+O)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                    ₹ {finalCal.totalOrderValue}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>Q</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Provisional Unit Price Per Ton (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(N/A)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                    ₹ {finalCal.provisionalUnitPricePerTon}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>R</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Margin Money (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(P*G)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                    ₹ {finalCal.marginMoney}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>S</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Total SPDC Amount Req. (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(P-R)`}</span>
                    </label>
                    <div className={`${styles.val} heading`}>
                    ₹ {finalCal.totalSPDC}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.content} border_color`}>
              <div className={`${styles.input_container} row`}>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>T</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Additional Amount per SPDC (INR){' '}
                      <strong className="text-danger">*</strong>
                      <div className={`${styles.tooltip}`}>
                        <img className={`ml-2 mt-n1 img-fluid`} src="/static/info-circle.svg"/>
                        <span className={`${styles.tooltiptext}`}>[(S-Previous Value)/I)]</span>
                      </div>
                    </label>
                    <div className={`${styles.val} ${styles.green} heading`}>
                    ₹ {calcRevised.additionalAmountPerPDC}
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>U</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Revised Net Order Value ()INR
                      <strong className="text-danger">*</strong>
                      <div className={`${styles.tooltip}`}>
                        <img className={`ml-2 mt-n1 img-fluid`} src="/static/info-circle.svg"/>
                        <span className={`${styles.tooltiptext}`}>P - Total Order Value (Previous)</span>
                      </div>
                    </label>
                    <div className={`${styles.val} ${styles.green} heading`}>
                    ₹ {calcRevised.revisedNetOrderValue}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>V</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Margin Money (INR)
                      <strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.val} ${styles.green} heading`}>
                    ₹ {calcRevised.marginMoney}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>W</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Revised Margin Money Calculation (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(R)`}</span>
                    </label>
                    <div className={`${styles.val} ${styles.green} heading`}>
                    ₹ {finalCal.marginMoney}
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>X</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Margin Money Received (INR)
                      <strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.val} ${styles.green} heading`}>
                    ₹ 38,50,000.00
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                >
                  <div
                    className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                  >
                    <span>Y</span>
                  </div>
                  <div className={`${styles.val_wrapper} ml-3`}>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Margin Money Payable (INR)
                      <strong className="text-danger">*</strong>
                      <span className={`${styles.blue}`}>{`(W-X)`}</span>
                    </label>
                    <div className={`${styles.val} ${styles.green} heading`}>
                    ₹  38,50,000.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.card} vessel_card accordionMargin card`}
        style={{ marginBottom: '150px' }}
      >
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
        <div
          id="invoice"
          className="collapse"
          aria-labelledby="invoice"
          data-parent="#invoice"
        >
          <div className={`${styles.cardBody} card-body `}>
            <div className={`${styles.content} border_color`}>
              <div className={`${styles.input_container} row`}>
                <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="buyerName"
                    defaultValue={marginData?.invoiceDetail?.buyerName}
                    className={`${styles.input_field} input form-control`}
                    required
                    onChange={(e) =>
                      saveInvoiceDataRevisedRevised(
                        e.target.name,
                        e.target.value,
                      )
                    }
                  />
                  <label
                    className={`${styles.label_heading} label_heading`}
                    id="textInput"
                  >
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
                      onChange={(e) =>
                        saveInvoiceDataRevisedRevised(
                          e.target.name,
                          e.target.value,
                        )
                      }
                      value={marginData?.invoiceDetail?.buyerGSTIN}
                    >
                      {/* <option value="GTSDT789652JKH">
                                    {marginData?.invoiceDetail?.buyerGSTIN}
                                  </option> */}
                      <option>Select an option</option>
                      <option value="GTSDT789652JKH">GTSDT789652JKH</option>
                    </select>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Buyer GSTIN
                      <strong className="text-danger">*</strong>
                    </label>
                    <img
                      className={`img-fluid image_arrow ${styles.arrow}`}
                      src="/static/inputDropDown.svg"
                    />
                  </div>
                </div>
                <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="buyerAddress"
                    defaultValue={marginData?.invoiceDetail?.buyerAddress}
                    className={`${styles.input_field} input form-control`}
                    required
                    onChange={(e) =>
                      saveInvoiceDataRevisedRevised(
                        e.target.name,
                        e.target.value,
                      )
                    }
                  />
                  <label
                    className={`${styles.label_heading} label_heading`}
                    id="textInput"
                  >
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
                      <div
                        key={`inline-${type}`}
                        className={styles.radio_group}
                      >
                        <Form.Check
                          className={`${styles.radio} radio`}
                          inline
                          label="Yes"
                          defaultChecked={
                            invoiceDataRevised?.isConsigneeSameAsBuyer == true
                          }
                          onChange={() => {
                            saveInvoiceDataRevisedRevised(
                              'isConsigneeSameAsBuyer',
                              true,
                            )
                            setSameRevised(true)
                          }}
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          className={`${styles.radio} radio`}
                          inline
                          label="No"
                          defaultChecked={
                            invoiceDataRevised?.isConsigneeSameAsBuyer == false
                          }
                          onChange={() => {
                            saveInvoiceDataRevisedRevised(
                              'isConsigneeSameAsBuyer',
                              false,
                            )
                            setSameRevised(false)
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
                    onChange={(e) =>
                      saveInvoiceDataRevisedRevised(
                        e.target.name,
                        e.target.value,
                      )
                    }
                    className={`${styles.input_field} input form-control`}
                    required
                  />
                  <label
                    className={`${styles.label_heading} label_heading`}
                    id="textInput"
                  >
                    Consignee Name
                  </label>
                </div>
                <div className={`${styles.each_input} col-md-4 col-sm-6`}>
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
                       <option>Select an option</option>
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
                </div>
                <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="consigneeAddress"
                    onChange={(e) =>
                      saveInvoiceDataRevisedRevised(
                        e.target.name,
                        e.target.value,
                      )
                    }
                    value={invoiceDataRevised?.consigneeAddress}
                    className={`${styles.input_field} input form-control`}
                    required
                  />
                  <label
                    className={`${styles.label_heading} label_heading`}
                    id="textInput"
                  >
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
                      defaultValue={marginData?.invoiceDetail?.importerName}
                      onChange={(e) =>
                        saveInvoiceDataRevisedRevised(
                          e.target.name,
                          e.target.value,
                        )
                      }
                    >
                      <option value="Ramakrishna Traders">
                        Ramakrishna Traders
                      </option>
                      <option value="Balaji Traders">Balaji Traders</option>
                    </select>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Importer Name
                      <strong className="text-danger">*</strong>
                    </label>
                    <img
                      className={`img-fluid image_arrow ${styles.arrow}`}
                      src="/static/inputDropDown.svg"
                    ></img>
                  </div>
                </div>
                <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                  <div className="d-flex">
                    <select
                      id="Code"
                      name="branchOffice"
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      required
                      defaultValue={marginData?.invoiceDetail?.importerName}
                      onChange={(e) =>
                        saveInvoiceDataRevisedRevised(
                          e.target.name,
                          e.target.value,
                        )
                      }
                    >
                      <option value="Visakhapatnam, India">
                        {'Visakhapatnam, India'}
                      </option>
                      <option value="Mumbai, India">Mumbai, India</option>
                    </select>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
                      Branch Office
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
                    name="companyAddres"
                    onChange={(e) =>
                      saveInvoiceDataRevisedRevised(
                        e.target.name,
                        e.target.value,
                      )
                    }
                    defaultValue={'Address'}
                    className={`${styles.input_field} input form-control`}
                    required
                  />
                  <label
                    className={`${styles.label_heading} label_heading`}
                    id="textInput"
                  >
                    Company Address*
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="importerGSTIN"
                    onChange={(e) =>
                      saveInvoiceDataRevisedRevised(
                        e.target.name,
                        e.target.value,
                      )
                    }
                    defaultValue={marginData?.invoiceDetail?.importerGSTIN}
                    className={`${styles.input_field} input form-control`}
                    required
                  />
                  <label
                    className={`${styles.label_heading} label_heading`}
                    id="textInput"
                  >
                    Importer GSTIN
                    <strong className="text-danger">*</strong>
                  </label>
                </div>

                <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                  <div className="d-flex">
                    <select
                      id="Code"
                      name="bankName"
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      required
                      defaultValue={marginData?.invoiceDetail?.importerName}
                      onChange={(e) =>
                        saveInvoiceDataRevisedRevised(
                          e.target.name,
                          e.target.value,
                        )
                      }
                    >
                      <option value="HDFC">HDFC</option>
                      <option value="SBI">SBI</option>
                    </select>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
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
                      id="Code"
                      name="branch"
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      required
                      defaultValue={marginData?.invoiceDetail?.branch}
                      onChange={(e) =>
                        saveInvoiceDataRevisedRevised(
                          e.target.name,
                          e.target.value,
                        )
                      }
                    >
                      <option value="DELHI, INDIA">DELHI, INDIA</option>
                      <option value="VIZAG, INDIA">VIZAG, INDIA</option>
                    </select>
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textInput"
                    >
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
                    onChange={(e) =>
                      saveInvoiceDataRevisedRevised(
                        e.target.name,
                        e.target.value,
                      )
                    }
                    defaultValue={marginData?.invoiceDetail?.branchAddress}
                    className={`${styles.input_field} input form-control`}
                    required
                  />
                  <label
                    className={`${styles.label_heading} label_heading`}
                    id="textInput"
                  >
                    Branch Address
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="IFSCcode"
                    onChange={(e) =>
                      saveInvoiceDataRevisedRevised(
                        e.target.name,
                        e.target.value,
                      )
                    }
                    defaultValue={marginData?.invoiceDetail?.IFSCcode}
                    className={`${styles.input_field} input form-control`}
                    required
                  />
                  <label
                    className={`${styles.label_heading} label_heading`}
                    id="textInput"
                  >
                    IFSC Code
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="accountNo"
                    onChange={(e) =>
                      saveInvoiceDataRevisedRevised(
                        e.target.name,
                        e.target.value,
                      )
                    }
                    defaultValue={marginData?.invoiceDetail?.accountNo}
                    className={`${styles.input_field} input form-control`}
                    required
                  />
                  <label
                    className={`${styles.label_heading} label_heading`}
                    id="textInput"
                  >
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
        isPrevious={true}
        leftButtonName={`Save`}
        handleUpdate={handleUpdateRevisedMarginMoney}
      />
    </>
  )
}

export default Index
