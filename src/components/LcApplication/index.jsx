/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Row, Col, Form } from 'react-bootstrap'
import DateCalender from '../DateCalender'
import PreviewBar from '../PreviewBar'
import Router from 'next/router'

function Index({
  saveLcData,
  lcComments,
  lcDocuments,
  addDocArr,
  addCommentArr,
  lcData,
}) {
  const [editStren, setEditStren] = useState(false)
  const [edit, setEdit] = useState(false)

  const saveDate = (value, name) => {
    const d = new Date(value)
    let text = d.toISOString()
    saveLcData(name, text)
  }

  const routeChange = () => {
    Router.push('letter-amend/id')
  }
  const [lcComment, setLcComment] = useState('')
  const [docComment, setDocComment] = useState('')


  return (
    <>
      {' '}
      <div className="container-fluid p-0 border-0">
        <div className={styles.container_inner}>
          <div className={`${styles.head_header} ml-5`}>
            <img
              className={`${styles.arrow} mr-2 img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={`${styles.heading}`}>Letter of Credit </h1>
          </div>

          <div className={`${styles.wrapper} card`}>
            <div
              className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
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
              className="collapse"
              aria-labelledby="lcApplication"
              data-parent="#lcApplication"
            >
              <div className={` ${styles.cardBody} card-body  border_color`}>
                <div className={` ${styles.content}`}>
                  <div className={` ${styles.body}`}>
                    <Row>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <select
                            name="formOfDocumentaryCredit"
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value)
                            }}
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected>
                              {lcData?.formOfDocumentaryCredit}
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
                            className={`${styles.arrow} img-fluid`}
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
                            saveLcData(e.target.name, e.target.value)
                          }}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          (40E) Application Rules
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <DateCalender
                            name="dateOfExpiry"
                            defaultDate={lcData?.dateOfExpiry?.split('T')[0]}
                            saveDate={saveDate}
                            labelName="(31D) Date Of Expiry"
                          />
                          <img
                            className={`${styles.calanderIcon} img-fluid`}
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
                            saveLcData(e.target.name, e.target.value)
                          }}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          (32D) Place Of Expiry
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <select
                            name="lcIssuingBank"
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value)
                            }}
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected>{lcData?.lcIssuingBank}</option>
                            <option value="First Class European Bank">
                              First Class European Bank
                            </option>
                            <option value="Swiss Bank">Swiss Bank</option>
                          </select>
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (51D) LC Issuing Bank
                          </label>
                          <img
                            className={`${styles.arrow} img-fluid`}
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
                              saveLcData(e.target.name, e.target.value)
                            }}
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected>{lcData?.applicant}</option>
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
                            className={`${styles.arrow} img-fluid`}
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
                          defaultValue={lcData?.beneficiary}
                          onChange={(e) => {
                            saveLcData(e.target.name, e.target.value)
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
                          defaultValue={lcData?.currecyCodeAndAmountValue}
                          name="currecyCodeAndAmountValue"
                          onChange={(e) => {
                            saveLcData(e.target.name, e.target.value)
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
                          type="number"
                          name="tolerancePercentage"
                          defaultValue={lcData?.tolerancePercentage}
                          onChange={(e) => {
                            saveLcData(e.target.name, e.target.value)
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
                              saveLcData(e.target.name, e.target.value)
                            }}
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected>
                              {lcData?.creditAvailablewith}
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
                            className={`${styles.arrow} img-fluid`}
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
                              saveLcData(e.target.name, e.target.value)
                            }}
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected>
                              {lcData?.creditAvailableBy}
                            </option>
                            <option value="By Negotiation">
                              By Negotiation
                            </option>
                            <option value="Not by Negotiation">
                              Not by Negotiation
                            </option>
                          </select>

                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (41A) Credit Available By
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={3} md={6} sm={6}>
                        <div className="d-flex">
                          <select
                            name="atSight"
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value)
                            }}
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected>{lcData?.atSight}</option>
                            <option value="Documetarty Credit">
                              Documentary Credit
                            </option>
                            <option value="Not Documentary Credit">
                              Not Documentary Credit
                            </option>
                          </select>

                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (42C) At Sight
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={1} md={6} sm={6}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="number"
                          name="numberOfDays"
                          defaultValue={lcData?.numberOfDays}
                          onChange={(e) => {
                            saveLcData(e.target.name, e.target.value)
                          }}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                          style={{ left: '18px' }}
                        >
                          No. of Days
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          name="drawee"
                          defaultValue={lcData?.drawee}
                          onChange={(e) => {
                            saveLcData(e.target.name, e.target.value)
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
                            saveLcData(e.target.name, e.target.value)
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
                              saveLcData(e.target.name, e.target.value)
                            }}
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected>{lcData?.partialShipment}</option>
                            <option value="Prohibited">Prohibited</option>
                            <option value="Allowed">Allowed</option>
                          </select>
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (43P) Partial Shipment
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} img-fluid`}
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
                              saveLcData(e.target.name, e.target.value)
                            }}
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected>{lcData?.transhipments}</option>
                            <option value="Prohibited">Prohibited</option>
                            <option value="Not Prohibited">
                              Not Prohibited
                            </option>
                          </select>
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (43T) Transhipments
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} img-fluid`}
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
                              saveLcData(e.target.name, e.target.value)
                            }}
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (44A) Shipment From
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
                            defaultValue={lcData?.portOfLoading}
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value)
                            }}
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (44E) Port of Loading
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
                          <select
                            name="portOfDischarge"
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value)
                            }}
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                          >
                            <option selected>{lcData?.portOfDischarge}</option>
                            <option value="Visakhapatnam, India">
                              Visakhapatnam Port, India
                            </option>
                            <option value="Mumbai, India">Mumbai, India</option>
                          </select>

                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (44F) Port of Discharge
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <DateCalender
                            name="latestDateOfShipment"
                            defaultDate={
                              lcData?.latestDateOfShipment?.split('T')[0]
                            }
                            saveDate={saveDate}
                            labelName="(44C) Latest Date Of Shipment"
                          />
                          <img
                            className={`${styles.calanderIcon} img-fluid`}
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
                          defaultValue={lcData?.DescriptionOfGoods}
                          onChange={(e) => {
                            saveLcData(e.target.name, e.target.value)
                          }}
                          style={{ height: '103px' }}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          (45A) Description Of The Goods
                        </label>
                      </Col>
                    </Row>
                  </div>
                </div>
                <hr className={styles.line}></hr>

                <div className={`${styles.dashboard_form}`}>
                  <div className={`${styles.sub_heading} value`}>
                    46A DOCUMENT REQUIRED
                  </div>
                  <div className="d-flex mt-5 pb-4">
                    <input
                      as="textarea"
                      rows={3}
                      className={`${styles.comment_field} input form-control`}
                      onChange={(e) => setDocComment(e.target.value)}
                    />
                    <img
                      className="img-fluid ml-4"
                      src="/static/add-btn.svg"
                      alt="add button"
                      onClick={() =>
                        docComment.length > 0 && addDocArr(docComment)
                      }
                    />
                  </div>
                  {lcDocuments?.map((comment, index) => (
                    <div
                      key={index}
                      className="d-flex justify-content-between pt-4 pb-3"
                    >
                      <div className={`${styles.number} mr-n3`}>1.</div>
                      <Form.Control
                        className={`${styles.paragraph} input`}
                        as="textarea"
                        defaultValue={comment}
                        rows={3}
                        readOnly={editStren}
                      />
                      <div>
                        <img
                          src="/static/mode_edit.svg"
                          className="img-fluid"
                          alt="edit"
                          onClick={(e) => {
                            setEditStren(!editStren)
                          }}
                        />
                        <img
                          src="/static/delete 2.svg"
                          className="img-fluid ml-3"
                          alt="delete"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <hr className={styles.line}></hr>

                <div className={`${styles.dashboard_form}`}>
                  <div className={`${styles.sub_heading} value`}>
                    47A ADDITIONAL CONDITIONS
                  </div>
                  <div className="d-flex mt-5 pb-4">
                    <input
                      as="textarea"
                      rows={3}
                      className={`${styles.comment_field} input form-control`}
                      onChange={(e) => setLcComment(e.target.value)}
                    />
                    <img
                      className="img-fluid ml-4"
                      src="/static/add-btn.svg"
                      alt="add button"
                      onClick={() =>
                        lcComment.length > 0 && addCommentArr(lcComment)
                      }
                    />
                  </div>
                  {lcComments?.map((comment, index) => (
                    <div
                      key={index}
                      className="d-flex justify-content-between pt-4 pb-3"
                    >
                      <div className={`${styles.number} mr-n3`}>1.</div>
                      <Form.Control
                        className={`${styles.paragraph} input`}
                        as="textarea"
                        defaultValue={comment}
                        rows={3}
                        readOnly={edit}
                      />
                      <div>
                        <img
                          src="/static/mode_edit.svg"
                          className="img-fluid"
                          alt="edit"
                          onClick={(e) => {
                            setEdit(!edit)
                          }}
                        />

                        <img
                          src="/static/delete 2.svg"
                          className="img-fluid ml-3"
                          alt="delete"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <hr></hr>
                <div className={`${styles.dashboard_form}`}>
                  <div className="d-flex justify-content-between align-items-center pt-4 pb-3">
                    <div className="d-flex">
                      <div className={`${styles.number}`}>2.</div>
                      <h5>PRODUCT SPECIFICATION</h5>
                    </div>
                    <div>
                      <img
                        src="/static/mode_edit.svg"
                        className="img-fluid"
                        alt="edit"
                      />
                      <img
                        src="/static/delete 2.svg"
                        className="img-fluid ml-3"
                        alt="delete"
                      />
                    </div>
                  </div>

                  <div className={`${styles.datatable} mb-5 ml-5 datatable `}>
                    <div className={styles.table_scroll_outer}>
                      <div className={styles.table_scroll_inner}>
                        <table
                          className={`${styles.table} table`}
                          cellPadding="0"
                          cellSpacing="0"
                          border="0"
                        >
                          <thead>
                            <tr className="table_row">
                              <th>ELEMENTS</th>
                              <th>TYPICAL</th>
                              <th>GUARANTEED</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table_row">
                              <td>MN</td>
                              <td>44.5 PCT</td>
                              <td>43.0</td>
                            </tr>
                            <tr className="table_row">
                              <td>SIO2</td>
                              <td>8.0 PCT</td>
                              <td>8.0 PCT</td>
                            </tr>
                            <tr className="table_row">
                              <td>AL2O3</td>
                              <td>7.6 PCT</td>
                              <td>8.0 PCT</td>
                            </tr>

                            <tr className="table_row">
                              <td>FE</td>
                              <td>44.5 PCT</td>
                              <td>43.0</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className={styles.line}></hr>
                <div className={`${styles.dashboard_form}`}>
                  <div className={` ${styles.content}`}>
                    <div className={` ${styles.body}`}>
                      <Row>
                        <Col className="mb-4 mt-4" md={12}>
                          <textarea
                            className={`${styles.input_field} input form-control`}
                            style={{ height: '103px' }}
                            required
                            type="text"
                            name="presentaionPeriod"
                            defaultValue={lcData?.presentaionPeriod}
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value)
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
                          <textarea
                            className={`${styles.input_field} input form-control`}
                            style={{ height: '103px' }}
                            required
                            type="text"
                            name="confirmationInstructions"
                            defaultValue={lcData?.confirmationInstructions}
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value)
                            }}
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (49) Confirmation Instructions
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" lg={6} md={6} sm={6}>
                          <div className="d-flex">
                            <select
                              name="reimbursingBank"
                              onChange={(e) => {
                                saveLcData(e.target.name, e.target.value)
                              }}
                              className={`${styles.input_labels}  ${styles.customSelect} input form-control`}
                            >
                              <option selected>
                                {lcData?.reimbursingBank}
                              </option>
                              <option value="Bnp Paribas Paribas - Bnpafrppxx">
                                Bnp Paribas Paribas - Bnpafrppxx
                              </option>
                              <option value="Balaji Traders">
                                Balaji Traders
                              </option>
                            </select>
                            <label className={`${styles.labels} label_heading`}>
                              (53A) Reimbursing Bank
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} img-fluid`}
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
                                saveLcData(e.target.name, e.target.value)
                              }}
                              className={`${styles.input_labels}  ${styles.customSelect} input form-control`}
                            >
                              <option selected>
                                {lcData?.adviceThroughBank}
                              </option>
                              <option value="Bnp Paribas Paribas - Bnpafrppxx">
                                Bnp Paribas Paribas - Bnpafrppxx
                              </option>
                              <option value="Balaji Traders">
                                Balaji Traders
                              </option>
                            </select>
                            <label className={`${styles.labels} label_heading`}>
                              (57) Advise Through Bank
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} img-fluid`}
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
                              saveLcData(e.target.name, e.target.value)
                            }}
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                            style={{ top: '22px' }}
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
                              saveLcData(e.target.name, e.target.value)
                            }}
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                            style={{ top: '22px' }}
                          >
                            (58A) Requested Confirmation Party
                            <strong className="text-danger">*</strong>
                          </label>
                        </Col>
                        <Col className="mb-4 mt-4" md={12}>
                          <textarea
                            className={`${styles.input_field} input form-control`}
                            style={{ height: '103px' }}
                            required
                            type="text"
                            name="charges"
                            defaultValue={lcData?.charges}
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value)
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
                            defaultValue={lcData?.instructionToBank}
                            onChange={(e) => {
                              saveLcData(e.target.name, e.target.value)
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
                              saveLcData(e.target.name, e.target.value)
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
      {/* <PreviewBar leftButtonClick={routeChange} /> */}
    </>
  )
}

export default Index
