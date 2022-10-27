/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Row, Col, Form } from 'react-bootstrap';
import DateCalender from '../DateCalender';
import PreviewBar from '../PreviewBar';
import Router from 'next/router';
import { addPrefixOrSuffix, checkNan } from '../../utils/helper';

function Index({
  saveLcData,
  lcComments,
  lcDocuments,
  addDocArr,
  addCommentArr,
  lcData,
  addComment,
  deleteLcDoc,
  lcDocEdit,
  currentComment,
  lcCondition,
  deleteLcCondition,
  addConditionComment,
  lcConditionEdit,
  currentComment2,
  excelFile,
  addConditionArr,
  lcModuleData,
  editLcComments,
  editLcDocComments,
  name,
  port
}) {
  console.log(lcModuleData, 'lcCondition12234');
  const [editStren, setEditStren] = useState(false);
  const [edit, setEdit] = useState(false);
  const [isFieldInFocus, setIsFieldInFocus] = useState({
    currencyCode: false,
    tolerance: false,
  });

  const saveDate = (value, name) => {
    const d = new Date(value);
    let text = d.toISOString();
    saveLcData(name, text);
  };

  const routeChange = () => {
    Router.push('letter-amend/id');
  };
  const [lcComment, setLcComment] = useState('');
  const [docComment, setDocComment] = useState('');
  const getSn = (index) => {
    let a = index;
    return `${a + 1}.`;
  };

  return (
    <>
      {' '}
      <div className="container-fluid p-0 border-0">
        <div className={`${styles.container_inner}`}>
          <div className={`${styles.head_header}`}>
            <img
              className={`${styles.back_arrow} image_arrow mr-2 img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
              onClick={() => Router.push('/lc-module')}
            />
            <h1 className={`${styles.heading}`}>{name} </h1>
          </div>

          <div className={`${styles.wrapper} border_color vessel_card card`}>
            <div
              className={`${styles.cardHeader} border_color card-header d-flex align-items-center justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#lcApplication"
              aria-expanded="true"
              aria-controls="lcApplication"
            >
              <h2 className="mb-0">LC Application</h2>
              <span>+</span>
            </div>
            <div
              id="lcApplication"
              // className="collapse"
              aria-labelledby="lcApplication"
              data-parent="#lcApplication"
            >
              <div className={` ${styles.cardBody} card-body  border_color`}>
                <div className={` ${styles.content}`}>
                  <div className={` ${styles.body} `}>
                    <Row>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <select
                            name="formOfDocumentaryCredit"
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value);
                            }}
                            value={lcData?.formOfDocumentaryCredit}
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected disabled>
                              Select an option
                            </option>
                            <option value="Irrevocable">Irrevocable</option>
                            <option value="Revocable">Revocable</option>
                          </select>

                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (40A) Form of Documentary Credit
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          name="applicableRules"
                          defaultValue={lcData?.applicableRules}
                          type="text"
                          onChange={(e) => {
                            saveLcData(e.target.name, e.target.value);
                          }}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          (40E) Applicable Rules
                          {/* <strong className="text-danger">*</strong> */}
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <DateCalender
                            name="dateOfExpiry"
                            defaultDate={lcData?.dateOfExpiry}
                            saveDate={saveDate}
                            labelName="(31D) Date Of Expiry"
                            dateFormat={'dd-MM-yyyy'}
                          />
                          <img
                            className={`${styles.calanderIcon} image_arrow img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          name="placeOfExpiry"
                          defaultValue={lcData?.placeOfExpiry}
                          onChange={(e) => {
                            saveLcData(e.target.name, e.target.value);
                          }}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          (31D) Place Of Expiry
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <select
                            name="lcIssuingBank"
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value);
                            }}
                            value={
                              lcData?.lcIssuingBank
                                ? lcData?.lcIssuingBank
                                : lcModuleData?.order?.termsheet
                                    ?.transactionDetails?.lcOpeningBank
                            }
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected disabled>
                              Select an option
                            </option>
                            <option value="First Class European Bank">
                              First Class European Bank
                            </option>
                            <option value="Reserve Bank of Spain">
                              Reserve Bank of Spain
                            </option>
                            <option value="Zurcher Kantonal Bank,Zurich">
                              Zurcher Kantonal Bank,Zurich
                            </option>
                          </select>
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (51D) LC Issuing Bank
                          </label>
                          <img
                            className={`${styles.arrow}  image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <select
                            name="applicant"
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value);
                            }}
                            value={lcData?.applicant}
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected disabled>
                              Select an option
                            </option>
                            <option value="Inod International Trading Fzco">
                              Indo International Trading Fzco
                            </option>
                            <option value="Balaji Traders">
                              Balaji Traders
                            </option>
                          </select>
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (50) Applicant
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          name="beneficiary"
                          defaultValue={
                            lcData?.beneficiary
                              ? lcData?.beneficiary
                              : lcModuleData?.order?.supplierName
                          }
                          onChange={(e) => {
                            saveLcData(e.target.name, e.target.value);
                          }}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          (59) Beneficiary
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          onFocus={(e) => {
                            setIsFieldInFocus({
                              ...isFieldInFocus,
                              currencyCode: true,
                            }),
                              (e.target.type = 'number');
                          }}
                          onBlur={(e) => {
                            setIsFieldInFocus({
                              ...isFieldInFocus,
                              currencyCode: false,
                            }),
                              (e.target.type = 'text');
                          }}
                          value={
                            isFieldInFocus.currencyCode
                              ? lcData?.currecyCodeAndAmountValue
                              : `${lcModuleData?.order?.orderCurrency} ` +
                                Number(
                                  lcData?.currecyCodeAndAmountValue,
                                ).toLocaleString(
                                  lcModuleData?.order?.orderCurrency?.toLowerCase() ===
                                    'inr'
                                    ? 'en-In'
                                    : undefined,
                                  { maximumFractionDigits: 2 },
                                )
                          }
                          // defaultValue={lcData?.currecyCodeAndAmountValue}
                          // value={addPrefixOrSuffix(
                          //   lcData?.currecyCodeAndAmountValue,
                          //   'USD',
                          // )}
                          name="currecyCodeAndAmountValue"
                          onChange={(e) => {
                            saveLcData(e.target.name, e.target.value);
                          }}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          (32B) Currency Code &amp; Amount
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          name="tolerancePercentage"
                          onFocus={(e) => {
                            setIsFieldInFocus({
                              ...isFieldInFocus,
                              tolerance: true,
                            }),
                              (e.target.type = 'number');
                          }}
                          onBlur={(e) => {
                            setIsFieldInFocus({
                              ...isFieldInFocus,
                              tolerance: false,
                            }),
                              (e.target.type = 'text');
                          }}
                          value={
                            isFieldInFocus.tolerance
                              ? lcData?.tolerancePercentage
                                ? lcData?.tolerancePercentage
                                : lcModuleData?.order?.tolerance
                              : '+/- ' +
                                checkNan(
                                  Number(
                                    lcData?.tolerancePercentage
                                      ? lcData?.tolerancePercentage
                                      : lcModuleData?.order?.tolerance,
                                  ),
                                ) +
                                ` %`
                          }
                          // value={addPrefixOrSuffix(
                          //   lcData?.tolerancePercentage,
                          //   '%',
                          // )}
                          onChange={(e) => {
                            saveLcData(e.target.name, e.target.value);
                          }}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          (39A) Tolerance (+/-) Percentage
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <select
                            name="creditAvailablewith"
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value);
                            }}
                            value={lcData?.creditAvailablewith}
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected disabled>
                              Select an option
                            </option>
                            <option value="BNP PARIBAS PARIBAS _ BNPAFRPPS">
                              BNP PARIBAS PARIBAS _ BNPAFRPPS
                            </option>
                            <option value="BNP_BNPAFRPPS">BNP_BNPAFRPPS</option>
                          </select>

                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (41A) Credit Available With
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <select
                            name="creditAvailableBy"
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value);
                            }}
                            value={lcData?.creditAvailableBy}
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected disabled>
                              Select an option
                            </option>
                            <option value="By Negotiation">
                              By Negotiation
                            </option>
                            <option value="By Payment">By Payment</option>
                            <option value="By Acceptance">By Acceptance</option>
                            <option value="By Deffered Payment">
                              By Deffered Payment
                            </option>
                          </select>

                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (41A) Credit Available By
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <Row>
                          <Col
                            className={styles.small_box}
                            xl={8}
                            lg={6}
                            md={12}
                          >
                            <div className="d-flex">
                              <select
                                name="atSight"
                                onChange={(e) => {
                                  saveLcData(e.target.name, e.target.value);
                                }}
                                value={lcData?.atSight}
                                className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                              >
                                <option selected disabled>
                                  Select an option
                                </option>
                                <option value="AT SIGHT">AT SIGHT</option>
                                <option value="SPECIFY">SPECIFY</option>
                              </select>

                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                (42C) Draft At
                                <strong className="text-danger">*</strong>
                              </label>
                              <img
                                className={`${styles.arrow} image_arrow img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col
                            className={styles.small_box}
                            xl={4}
                            lg={6}
                            md={12}
                          >
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="number"
                              onWheel={(event) => event.currentTarget.blur()}
                              onKeyDown={(evt) =>
                                ['e', 'E', '+', '-'].includes(evt.key) &&
                                evt.preventDefault()
                              }
                              disabled={
                                lcData?.atSight == 'AT SIGHT' ||
                                lcData?.atSight == undefined
                                  ? true
                                  : false
                              }
                              name="numberOfDays"
                              value={lcData?.numberOfDays}
                              onChange={(e) => {
                                saveLcData(e.target.name, e.target.value);
                              }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              No. of Days
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          name="drawee"
                          defaultValue={lcData?.drawee}
                          onChange={(e) => {
                            saveLcData(e.target.name, e.target.value);
                          }}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          (42A) Drawee
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          name="deferredPayment"
                          defaultValue={lcData?.deferredPayment}
                          onChange={(e) => {
                            saveLcData(e.target.name, e.target.value);
                          }}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          (42P) Deferred Payment
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <select
                            name="partialShipment"
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value);
                            }}
                            value={
                              lcData?.partialShipment
                                ? lcData?.partialShipment
                                : lcModuleData?.order?.termsheet
                                    ?.transactionDetails?.partShipmentAllowed
                            }
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected disabled>
                              Select an option
                            </option>

                            <option value="Yes">Allowed</option>
                            <option value="No">Not Allowed</option>
                            <option value="No">Conditional</option>
                          </select>
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (43P) Partial Shipment
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <select
                            name="transhipments"
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value);
                            }}
                            value={lcData?.transhipments}
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected disabled>
                              Select an option
                            </option>
                            <option value="Allowed">Allowed</option>
                            <option value="Not Allowed">Not Allowed</option>
                          </select>
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (43T) Transhipments
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            name="shipmentForm"
                            defaultValue={lcData?.shipmentForm}
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value);
                            }}
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (44A) Place of taking in Charge
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.search_image} img-fluid`}
                            src="/static/search-grey.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            name="portOfLoading"
                            defaultValue={
                              lcData?.portOfLoading
                                ? lcData?.portOfLoading
                                : lcModuleData?.order?.termsheet
                                    ?.transactionDetails?.loadPort
                            }
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value);
                            }}
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (44E) Port of Loading
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <select
                            name="portOfDischarge"
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value);
                            }}
                            value={
                              lcData?.portOfDischarge
                                ? lcData.portOfDischarge
                                : lcModuleData?.order?.termsheet
                                    ?.transactionDetails?.portOfDischarge
                            }
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected >
                              Select an option
                            </option>
                             
                              {port.filter((val,index)=>{
                            if(val.Country.toLowerCase()=="india"){
                              return val
                            }
                          }).map((val,index)=>{
                            return(
                              <option value={`${val.Port_Name},${val.Country}`}>
                            {val.Port_Name},{val.Country}
                            </option>
                            )
                          })}
                          </select>

                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (44F) Port of Discharge
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <DateCalender
                            name="latestDateOfShipment"
                            defaultDate={lcData?.latestDateOfShipment}
                            saveDate={saveDate}
                            labelName="(44C) Latest Date Of Shipment"
                          />
                          <img
                            className={`${styles.calanderIcon} image_arrow img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" md={12}>
                        <textarea
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          name="DescriptionOfGoods"
                          value={lcData?.DescriptionOfGoods}
                          onChange={(e) => {
                            saveLcData(e.target.name, e.target.value);
                          }}
                          style={{ height: '103px' }}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          (45A) Description Of The Goods
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                    </Row>
                  </div>
                </div>
                {/* <hr className={styles.line}></hr> */}
                <div
                  className={`${styles.dashboard_form} border_color`}
                  style={{ borderTop: '2px solid #CAD6E6' }}
                >
                  <div className={`${styles.doc_card} mb-5`}>
                    <div className={`${styles.sub_heading} value`}>
                      46A DOCUMENT REQUIRED
                      <strong className="text-danger">*</strong>
                    </div>
                    <div className="d-flex mt-5 pb-4">
                      <input
                        as="textarea"
                        rows={3}
                        className={`${styles.comment_field} input form-control`}
                        onChange={(e) => addComment(e.target.value)}
                        value={currentComment}
                      />
                      <div className="d-flex justify-content-between align-items-center">
                        <img
                          className="img-fluid ml-4"
                          src="/static/add-btn.svg"
                          alt="add button"
                          onClick={() => addDocArr()}
                        />
                      </div>
                    </div>
                    {lcDocuments?.map((comment, index) => (
                      <div
                        key={index}
                        className={`${styles.textarea_main} d-flex border_color justify-content-between`}
                      >
                        <div className={`${styles.number} mr-n3`}>
                          {getSn(index)}
                        </div>
                        <Form.Control
                          className={`${styles.paragraph} pt-0 input`}
                          as="textarea"
                          value={comment.value}
                          rows={3}
                          readOnly={!comment.action}
                          onChange={(e) => {
                            lcDocEdit(e.target.value, index);
                          }}
                        />
                        <div className="mt-3">
                          {comment.action ? (
                            <img
                              src="/static/save-3.svg"
                              className={`${styles.image} ml-4`}
                              alt="edit"
                              onClick={(e) => {
                                editLcDocComments(!comment.action, index);
                              }}
                            />
                          ) : (
                            <img
                              src="/static/mode_edit.svg"
                              className={`${styles.image} ml-4`}
                              alt="edit"
                              onClick={(e) => {
                                editLcDocComments(!comment.action, index);
                              }}
                            />
                          )}

                          <img
                            src="/static/delete 2.svg"
                            className={`${styles.delete_image} ml-4`}
                            alt="delete"
                            onClick={() => {
                              deleteLcDoc(index);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={`${styles.dashboard_form} border_color`}
                  style={{ borderTop: '2px solid #CAD6E6' }}
                >
                  <div className={`${styles.doc_card} mb-5`}>
                    <div className={`${styles.sub_heading}  value`}>
                      47A ADDITIONAL CONDITIONS
                      <strong className="text-danger">*</strong>
                    </div>
                    <div className="d-flex mt-5 pb-4">
                      <input
                        as="textarea"
                        rows={3}
                        className={`${styles.comment_field} input form-control`}
                        onChange={(e) => addConditionComment(e.target.value)}
                        value={currentComment2}
                      />
                      <div className="d-flex justify-content-between align-items-center">
                        <img
                          className="img-fluid ml-4"
                          src="/static/add-btn.svg"
                          alt="add button"
                          onClick={() => addConditionArr()}
                        />
                      </div>
                    </div>

                    <div
                      className={`${styles.dashboard_form} border_color`}
                      style={{
                        borderBottom: '2px solid #CAD6E6',
                        marginLeft: '-38px',
                      }}
                    >
                      <div className={styles.doc_card}>
                        <div className="d-flex justify-content-between align-items-center pt-4 pb-3">
                          <div className="d-flex">
                            <div className={`${styles.number}`}>1.</div>
                            <h5>PRODUCT SPECIFICATION</h5>
                          </div>
                          {/* <div className="mt-3">
                        <img
                          src="/static/mode_edit.svg"
                          className={`${styles.image} ml-4`}
                          alt="edit"
                        />
                        <img
                          src="/static/delete 2.svg"
                          className="ml-4"
                          alt="delete"
                        />
                      </div> */}
                        </div>
                      </div>
                      <div
                        className={`${styles.datatable} mb-5 ml-5 datatable `}
                      >
                        <div className={styles.table_scroll_outer}>
                          <div className={styles.table_scroll_inner}>
                            <table
                              className={`${styles.table} table`}
                              cellPadding="0"
                              cellSpacing="0"
                              border="0"
                            >
                              <tbody>
                                <tr className="table_row">
                                  {excelFile &&
                                    excelFile.length > 0 &&
                                    Object.keys(excelFile[0]).map(
                                      (val, index) => (
                                        <th key={index}>{val}</th>
                                      ),
                                    )}
                                </tr>
                                {excelFile &&
                                  excelFile.length > 0 &&
                                  excelFile.map((item, index) => (
                                    <tr>
                                      {Object.values(item).map((value, id) => (
                                        <td key={id}>{value}</td>
                                      ))}
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {lcComments?.map((comment, index) => (
                      <div
                        key={index}
                        className={`${styles.textarea_main} d-flex border_color justify-content-between`}
                      >
                        <div className={`${styles.number} mr-n3`}>
                          {getSn(index + 1)}
                        </div>
                        <Form.Control
                          className={`${styles.paragraph} pt-0 input`}
                          as="textarea"
                          value={comment.value}
                          rows={3}
                          readOnly={!comment.action}
                          onChange={(e) => {
                            lcConditionEdit(e.target.value, index);
                          }}
                        />
                        <div className="mt-3">
                          {comment.action ? (
                            <img
                              src="/static/save-3.svg"
                              className={`${styles.image} ml-4`}
                              alt="edit"
                              onClick={(e) => {
                                editLcComments(!comment.action, index);
                              }}
                            />
                          ) : (
                            <img
                              src="/static/mode_edit.svg"
                              className={`${styles.image} ml-4`}
                              alt="edit"
                              onClick={(e) => {
                                editLcComments(!comment.action, index);
                              }}
                            />
                          )}

                          <img
                            src="/static/delete 2.svg"
                            className={`${styles.delete_image} ml-4`}
                            alt="delete"
                            onClick={() => {
                              deleteLcCondition(index);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`${styles.dashboard_form} border_color`}
                  style={{ borderTop: '2px solid #CAD6E6' }}
                >
                  <div className={styles.doc_card}>
                    <div className={` ${styles.content}`}>
                      <div className={` ${styles.body} p-0`}>
                        <Row>
                          <Col className="mb-4 mt-4" md={12}>
                            <textarea
                              className={`${styles.input_field} input form-control`}
                              style={{ height: '103px' }}
                              required
                              type="text"
                              name="presentaionPeriod"
                              defaultValue={
                                lcData?.presentaionPeriod
                                  ? lcData.presentaionPeriod
                                  : 'DOCUMENTS TO BE PRESENTED WITHIN 21 DAYS AFTER SHIPMENT DATE BUT WITHIN VALIDITY OF THE LC.'
                              }
                              onChange={(e) => {
                                saveLcData(e.target.name, e.target.value);
                              }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              (48) Presentation Period
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" md={12}>
                            <div className="d-flex">
                              <select
                                name="confirmationInstructions"
                                onChange={(e) => {
                                  saveLcData(e.target.name, e.target.value);
                                }}
                                value={lcData?.confirmationInstructions}
                                className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                              >
                                <option selected disabled>
                                  Select an option
                                </option>
                                <option value="May Add">May Add </option>
                                <option value="Confirm">Confirm</option>

                                <option value="Without">Without</option>
                                <option value="May add at beneficiary cost">
                                  May add at beneficiary cost
                                </option>
                              </select>

                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                (49) Confirmation Instructions
                                <strong className="text-danger">*</strong>
                              </label>
                              <img
                                className={`${styles.arrow} image_arrow img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                              />
                            </div>
                            {/* <textarea
                              className={`${styles.input_field} input form-control`}
                              style={{ height: '103px' }}
                              required
                              type="text"
                              name="confirmationInstructions"
                              defaultValue={
                                lcData?.confirmationInstructions
                                  ? lcData?.confirmationInstructions
                                  : 'May Add'
                              }
                              onChange={(e) => {
                                saveLcData(e.target.name, e.target.value)
                              }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              (49) Confirmation Instructions
                              <strong className="text-danger">*</strong>
                            </label> */}
                          </Col>
                          <Col className="mb-4 mt-4" lg={6} md={6} sm={6}>
                            <div className="d-flex">
                              <select
                                name="reimbursingBank"
                                onChange={(e) => {
                                  saveLcData(e.target.name, e.target.value);
                                }}
                                value={lcData?.reimbursingBank}
                                className={`${styles.input_labels}  ${styles.customSelect} input form-control`}
                              >
                                <option selected disabled>
                                  Select an option
                                </option>
                                <option value="Bnp Paribas Paribas - Bnpafrppxx">
                                  Bnp Paribas Paribas - Bnpafrppxx
                                </option>
                                <option value="Balaji Traders">
                                  Balaji Traders
                                </option>
                              </select>
                              <label
                                className={`${styles.labels} label_heading`}
                              >
                                (53A) Reimbursing Bank
                                {/* <strong className="text-danger">*</strong> */}
                              </label>
                              <img
                                className={`${styles.arrow} image_arrow img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>
                          <Col className="mb-4 mt-4" lg={6} md={6} sm={6}>
                            <div className="d-flex">
                              <select
                                name="adviceThroughBank"
                                onChange={(e) => {
                                  saveLcData(e.target.name, e.target.value);
                                }}
                                value={lcData?.adviceThroughBank}
                                className={`${styles.input_labels}  ${styles.customSelect} input form-control`}
                              >
                                <option selected disabled>
                                  Select an option
                                </option>
                                <option value="Bnp Paribas Paribas - Bnpafrppxx">
                                  Bnp Paribas Paribas - Bnpafrppxx
                                </option>
                                <option value="Balaji Traders">
                                  Balaji Traders
                                </option>
                              </select>
                              <label
                                className={`${styles.labels} label_heading`}
                              >
                                (57) Advise Through Bank
                                <strong className="text-danger">*</strong>
                              </label>
                              <img
                                className={`${styles.arrow} image_arrow img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                              />
                            </div>
                          </Col>

                          <Col className="mb-4 mt-4" lg={6} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              name="secondAdvisingBank"
                              defaultValue={lcData?.secondAdvisingBank}
                              onChange={(e) => {
                                saveLcData(e.target.name, e.target.value);
                              }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              (57A) Second Advising Bank, if Applicable
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" lg={6} md={6} sm={6}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              name="requestedConfirmationParty"
                              defaultValue={lcData?.requestedConfirmationParty}
                              onChange={(e) => {
                                saveLcData(e.target.name, e.target.value);
                              }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              (58A) Requested Confirmation Party
                              {/*  */}
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" md={12}>
                            <textarea
                              className={`${styles.input_field} input form-control`}
                              style={{ height: '103px' }}
                              required
                              type="text"
                              name="charges"
                              defaultValue={
                                lcData?.charges
                                  ? lcData?.charges
                                  : 'ALL THE CHARGES OUTSIDE LC ISSUING BANK ARE FOR THE BENEFICIARY’S ACCOUNT'
                              }
                              onChange={(e) => {
                                saveLcData(e.target.name, e.target.value);
                              }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              (71B) Charges
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>
                          <Col className="mb-4 mt-4" md={12}>
                            <textarea
                              className={`${styles.input_field} input form-control`}
                              style={{ height: '139px' }}
                              required
                              type="text"
                              name="instructionToBank"
                              defaultValue={
                                lcData?.instructionToBank
                                  ? lcData?.instructionToBank
                                  : 'THE DOCUMENTS ARE TO BE COURIERED TO ........... (LC ISSUING BANK ADDRESS).............. UPON RECEIPT AT OUR COUNTERS OF A STRICTLY COMPLYING PRESENTATION, WE UNDERTAKE TO COVER YOU WITHIN 5 BANKING DAYS AS PER YOUR INSTRUCTIONS'
                              }
                              onChange={(e) => {
                                saveLcData(e.target.name, e.target.value);
                              }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              (78) Instructions To Paying / Accepting /
                              Negotiating Bank
                              <strong className="text-danger">*</strong>
                            </label>
                          </Col>

                          <Col className="mb-4 mt-4" md={12}>
                            <textarea
                              className={`${styles.input_field} input form-control`}
                              style={{ height: '103px' }}
                              required
                              type="text"
                              name="senderToReceiverInformation"
                              defaultValue={lcData?.senderToReceiverInformation}
                              onChange={(e) => {
                                saveLcData(e.target.name, e.target.value);
                              }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              (72) Sender To Receiver Information
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <PreviewBar leftButtonClick={routeChange} /> */}
    </>
  );
}

export default Index;
