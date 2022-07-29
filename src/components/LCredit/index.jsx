/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Row, Col, Form } from 'react-bootstrap'
import DateCalender from '../DateCalender'
import { useDispatch, useSelector } from 'react-redux'
import { GetLcModule } from 'redux/lcModule/action'

function Index() {
  const dispatch = useDispatch()

  const [editInput, setEditInput] = useState(true)

  const { lcModule } = useSelector((state) => state.lc)

  let lcModuleData = lcModule?.data[0]

  useEffect(() => {
    let id = sessionStorage.getItem('lcAmmend')
    dispatch(GetLcModule(`?lcModuleId=${id}`))
  }, [dispatch])

  const [lcData, setLcData] = useState()

  // console.log(lcData, "THIS IS LC USE STATE")

  useEffect(() => {
    setLcData({
      formOfDocumentaryCredit:
        lcModuleData?.lcApplication?.formOfDocumentaryCredit,
      applicableRules: lcModuleData?.lcApplication?.applicableRules,
      dateOfExpiry: lcModuleData?.lcApplication?.dateOfExpiry,
      placeOfExpiry: lcModuleData?.lcApplication?.placeOfExpiry,
      lcIssuingBank: lcModuleData?.lcApplication?.lcIssuingBank,
      applicant: lcModuleData?.lcApplication?.applicant,
      beneficiary: lcModuleData?.lcApplication?.beneficiary,
      currecyCodeAndAmountValue:
        lcModuleData?.lcApplication?.currecyCodeAndAmountValue,
      currecyCodeAndAmountUnit:
        lcModuleData?.lcApplication?.currecyCodeAndAmountUnit,
      tolerancePercentage: lcModuleData?.lcApplication?.tolerancePercentage,
      creditAvailablewith: lcModuleData?.lcApplication?.creditAvailablewith,
      creditAvailableBy: lcModuleData?.lcApplication?.creditAvailableBy,
      atSight: lcModuleData?.lcApplication?.atSight,
      numberOfDays: lcModuleData?.lcApplication?.numberOfDays,
      drawee: lcModuleData?.lcApplication?.drawee,
      deferredPayment: lcModuleData?.lcApplication?.deferredPayment,
      partialShipment: lcModuleData?.lcApplication?.partialShipment,
      transhipments: lcModuleData?.lcApplication?.transhipments,
      shipmentForm: lcModuleData?.lcApplication?.shipmentForm,
      portOfLoading: lcModuleData?.lcApplication?.portOfLoading,
      portOfDischarge: lcModuleData?.lcApplication?.portOfDischarge,
      latestDateOfShipment: lcModuleData?.lcApplication?.latestDateOfShipment,
      DescriptionOfGoods: lcModuleData?.lcApplication?.DescriptionOfGoods,
      presentaionPeriod: lcModuleData?.lcApplication?.presentaionPeriod,
      confirmationInstructions:
        lcModuleData?.lcApplication?.confirmationInstructions,
      reimbursingBank: lcModuleData?.lcApplication?.reimbursingBank,
      adviceThroughBank: lcModuleData?.lcApplication?.adviceThroughBank,
      secondAdvisingBank: lcModuleData?.lcApplication?.secondAdvisingBank,
      requestedConfirmationParty:
        lcModuleData?.lcApplication?.requestedConfirmationParty,
      charges: lcModuleData?.lcApplication?.charges,
      instructionToBank: lcModuleData?.lcApplication?.instructionToBank,
      senderToReceiverInformation:
        lcModuleData?.lcApplication?.senderToReceiverInformation,
      documentaryCreditNumber:
        lcModuleData?.lcApplication?.documentaryCreditNumber,
      dateOfIssue: lcModuleData?.lcApplication?.dateOfIssue,
    })
  }, [lcModuleData])

  console.log(lcData, 'LC DATA')

  const saveAmendmentData = (name, value) => {
    const newInput = { ...lcData }
    newInput[name] = value
    setLcData(newInput)
  }

  const saveDate = (value, name) => {
    const d = new Date(value)
    let text = d.toISOString()
    saveAmendmentData(name, text)
  }

  // const [clauseData, setClauseData] = useState([
  //   {
  //     formOfDocumentaryCredit: lcModuleData?.lcApplication?.formOfDocumentaryCredit,
  //     applicableRules: lcModuleData?.lcApplication?.applicableRules,
  //     dateOfExpiry: lcModuleData?.lcApplication?.dateOfExpiry,
  //     placeOfExpiry: lcModuleData?.lcApplication?.placeOfExpiry,
  //     applicant: lcModuleData?.lcApplication?.applicant,
  //     beneficiary: lcModuleData?.lcApplication?.beneficiary,
  //     currecyCodeAndAmountValue: lcModuleData?.lcApplication?.currecyCodeAndAmountValue,
  //     currecyCodeAndAmountUnit: lcModuleData?.lcApplication?.currecyCodeAndAmountUnit,
  //     tolerancePercentage: lcModuleData?.lcApplication?.tolerancePercentage,
  //     creditAvailablewith: lcModuleData?.lcApplication?.creditAvailablewith,
  //     creditAvailableBy: lcModuleData?.lcApplication?.creditAvailableBy,
  //     atSight: lcModuleData?.lcApplication?.atSight,
  //     drawee: lcModuleData?.lcApplication?.drawee,
  //     deferredPayment: lcModuleData?.lcApplication?.deferredPayment,
  //     partialShipment: lcModuleData?.lcApplication?.partialShipment,
  //     transhipments: lcModuleData?.lcApplication?.transhipments,
  //     shipmentForm: lcModuleData?.lcApplication?.shipmentForm,
  //     portOfLoading: lcModuleData?.lcApplication?.portOfLoading,
  //     portOfDischarge: lcModuleData?.lcApplication?.portOfDischarge,
  //     latestDateOfShipment: lcModuleData?.lcApplication?.latestDateOfShipment,
  //     DescriptionOfGoods: lcModuleData?.lcApplication?.DescriptionOfGoods,
  //   },
  // ])

  // console.log(clauseData, 'CLAUSE DATA')

  const [clauseObj, setClauseObj] = useState({
    existingValue: '',
    dropDownValue: '',
    newValue: '',
  })

  // console.log(clauseObj, 'this is ccccc')

  const [clauseArr, setClauseArr] = useState([])
  // console.log(clauseArr, 'new arr')

  const [drop, setDrop] = useState('')

  const dropDownChange = (e) => {

    let newInput = { ...clauseObj }
    let val1 = e.target.options[e.target.selectedIndex].text
    let val2 = e.target.value
    setDrop(val2)
   
    newInput['existingValue'] = lcData[e.target.value]
    newInput['dropDownValue'] = val1

    setClauseObj(newInput)
  }

  const arrChange = (name, value) => {
    const newInput = {...clauseObj}
    newInput[name] = value
    setClauseObj(newInput)

    const newInput1 = {...lcData}
    newInput1[drop] = value
    // console.log(newInput1, "NEW INPUT 1")
    setLcData(newInput1)
  }

  const addToArr = () => {
    const newArr = [...clauseArr]

    newArr.push(clauseObj)

    setClauseArr(newArr)
  }

  const removeFromArr = (arr) => {
    const newClause = clauseArr.filter((item) => {return  item.dropDownValue !== arr}
    )
    setClauseArr(newClause)
  }

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false)
    } else {
      setEditInput(true)
    }
  }

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

          <div className={`${styles.wrapper} card upload_main`}>
            <div
              className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#lcApplication"
              aria-expanded="true"
              aria-controls="lcApplication"
            >
              <h2 className="mb-0">LC Details</h2>
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
                            name="lcIssuingBank"
                            onChange={(e) =>
                              saveAmendmentData(e.target.name, e.target.value)
                            }
                            className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          >
                            <option>{lcData?.lcIssuingBank}</option>
                            <option value="BNP PARIBAS PARIBAS - BNPAFPPX">
                              BNP PARIBAS PARIBAS - BNPAFPPX
                            </option>
                            <option value="Swiss Bank">Swiss Bank</option>
                          </select>

                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            (51D) LC Issuing Bank
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
                          name="documentaryCreditNumber"
                          onChange={(e) =>
                            saveAmendmentData(e.target.name, e.target.value)
                          }
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          (20) Documentary Credit Number
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <DateCalender
                            name="dateOfIssue"
                            saveDate={saveDate}
                            labelName="(31C) Date Of Issue"
                          />
                          <img
                            className={`${styles.calanderIcon} img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                <hr className={styles.line}></hr>

                <div className={` ${styles.content}`}>
                  <div className={` ${styles.body}`}>
                    <Row>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <select
                            onChange={(e) => dropDownChange(e)}
                            className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          >
                            <option value="shipmentForm">
                              (44A) Shipment From
                            </option>
                            <option value="applicableRules">
                              (40E) Application Rules
                            </option>
                            <option value="placeOfExpiry">
                              (32D) Place Of Expiry
                            </option>
                            <option value="dateOfExpiry">
                              (32D) Date Of Expiry
                            </option>
                            <option value="formOfDocumentaryCredit">
                              (40A) Form of Documentary Credit
                            </option>
                            <option value="applicant">(50) Applicant</option>
                            <option value="beneficiary">
                              (59) Beneficiary
                            </option>
                            <option value="currecyCodeAndAmountValue">
                              (32B) Currency Code &amp; Amount
                            </option>
                            <option value="tolerancePercentage">
                              (39A) Tolerance (+/-) Percentage
                            </option>
                            <option value="creditAvailablewith">
                              {' '}
                              (41A) Credit Available With
                            </option>
                            <option value="creditAvailableBy">
                              (41A) Credit Available By
                            </option>
                            <option value="atSight">(42C) At Sight</option>
                            <option value="drawee">(42A) Drawee</option>
                            <option value="deferredPayment">
                              (42P) Deferred Payment
                            </option>
                            <option value="partialShipment">
                              (43P) Partial Shipment
                            </option>
                            <option value="transhipments">
                              (43T) Transhipments
                            </option>
                            <option value="portOfLoading">
                              (44E) Port of Loading
                            </option>
                            <option value="portOfDischarge">
                              {' '}
                              (44F) Port of Discharge
                            </option>
                            <option value="latestDateOfShipment">
                              (44C) Latest Date Of Shipment
                            </option>
                            <option value="DescriptionOfGoods">
                              {' '}
                              (45A) Description Of The Goods
                            </option>
                          </select>

                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Clause<strong className="text-danger">*</strong>
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
                          value={clauseObj?.existingValue}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Existing Value
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6}>
                        <div className="d-flex">
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            onChange={(e) =>
                              arrChange('newValue', e.target.value)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            New Value<strong className="text-danger">*</strong>
                          </label>
                          <img
                            className="img-fluid ml-4"
                            src="/static/add-btn.svg"
                            alt="add button"
                            onClick={() => addToArr()}
                          />
                        </div>
                      </Col>
                    </Row>

                    <div className={styles.table_container}>
                      <div className={styles.table_scroll_outer}>
                        <div className={styles.table_scroll_inner}>
                          <table
                            className={`${styles.table_clause} table`}
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                          >
                            <thead>
                              <tr>
                                <th
                                  width="35%"
                                  className={`${styles.table_header}`}
                                >
                                  CLAUSE{' '}
                                </th>
                                <th className={`${styles.table_header}`}>
                                  EXISTING VALUE{' '}
                                </th>
                                <th className={`${styles.table_header}`}>
                                  NEW VALUE{' '}
                                </th>
                                <th className={`${styles.table_header}`}></th>
                              </tr>
                            </thead>
                            <tbody>
                              {clauseArr &&
                                clauseArr?.map((arr, index) => (
                                  <tr key={index} className="table_row">
                                    <td>{arr.dropDownValue}</td>
                                    <td>{arr.existingValue}</td>
                                    <td>{arr.newValue}</td>
                                    <td>
                                      <img
                                        src="/static/mode_edit.svg"
                                        className="img-fluid ml-n5"
                                        alt="edit"
                                      />
                                      <img
                                        src="/static/delete 2.svg"
                                        className="img-fluid ml-3 mr-n5"
                                        alt="delete"
                                        onClick={() => removeFromArr(arr.dropDownValue)}
                                      />
                                    </td>
                                  </tr>
                                ))}
                              {/* <tr className="table_row">
                                <td>(44A) SHIPMENT FROM</td>
                                <td>Owendo </td>
                                <td>Russia</td>
                                <td>
                                  <img
                                    src="/static/mode_edit.svg"
                                    className="img-fluid ml-n5"
                                    alt="edit"
                                  />
                                  <img
                                    src="/static/delete 2.svg"
                                    className="img-fluid ml-3 mr-n5"
                                    alt="delete"
                                  />
                                </td>
                              </tr> */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Document*/}
          <div className={`${styles.upload_main} upload_main`}>
            <div
              className={`${styles.head_container} border_color d-flex justify-content-between`}
              data-toggle="collapse"
              data-target="#uploadOther"
              aria-expanded="true"
              aria-controls="uploadOther"
            >
              <h2 className={styles.heading}>Document</h2>
              <span>+</span>
            </div>
            <div
              id="uploadOther"
              className="collapse"
              aria-labelledby="uploadOther"
              data-parent="#uploadOther"
            >
              <div className={styles.table_container}>
                <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
                    <table
                      className={`${styles.table} table`}
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <thead>
                        <tr>
                          <th>
                            DOCUMENT NAME{' '}
                            <img
                              className={`mb-1`}
                              src="/static/icons8-sort-24.svg"
                              alt="Sort icon"
                            />
                          </th>
                          <th>
                            FORMAT{' '}
                            <img
                              className={`mb-1`}
                              src="/static/icons8-sort-24.svg"
                              alt="Sort icon"
                            />
                          </th>
                          <th>
                            DOCUMENT DATE{' '}
                            <img
                              className={`mb-1`}
                              src="/static/icons8-sort-24.svg"
                              alt="Sort icon"
                            />{' '}
                          </th>
                          <th width="30%">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table_row">
                          <td className={styles.doc_name}>
                            LC DRAFT{' '}
                            <strong className="text-danger ml-n1">*</strong>{' '}
                          </td>
                          <td>
                            <img
                              src="/static/pdf.svg"
                              className="img-fluid"
                              alt="Pdf"
                            />
                          </td>
                          <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                          <td colSpan={2}>
                            <button className={`${styles.updateBtn} `}>
                              Update
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className={`${styles.dashboard_form} card-body`}>
                <Form>
                  <div className="row align-items-center pb-4">
                    <div
                      className={`${styles.drop_container} d-flex align-items-center justify-content-around col-sm-6`}
                    >
                      <div className="text-center">
                        <img
                          className={`${styles.upload_image} img-fluid`}
                          src="/static/browse.svg"
                          alt="Browse"
                        />
                        <p className={styles.drop_para}>
                          Drop Files here or
                          <br />
                          <div className={styles.uploadBtnWrapper}>
                            <input type="file" name="myfile" />
                            <a href="#">Browse</a>
                          </div>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 offset-md-1 col-sm-6">
                      <Form.Group className={styles.form_group}>
                        <div className="d-flex">
                          <select
                            className={`${styles.value} ${styles.customSelect} input form-control`}
                            id="docType"
                            onChange={(e) => handleDropdown(e)}
                          >
                            <option>
                              Lead Onboarding &amp; Order Approval
                            </option>
                            <option>
                              Agreements, Insurance &amp; LC Opening
                            </option>
                            <option>Loading-Transit-Unloading</option>
                            <option>Custom Clearance And Warehousing</option>
                            <option value="Others">Others</option>
                          </select>
                          <Form.Label
                            className={`${styles.label} label_heading`}
                          >
                            Document Type
                          </Form.Label>
                          <img
                            className={`${styles.arrow} img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </Form.Group>
                      <Form.Group className={styles.form_group}>
                        <Form.Label className={`${styles.label} label_heading`}>
                          Please Specify Document Name
                        </Form.Label>
                        <Form.Control
                          className={`${styles.value} input form-control`}
                          type="text"
                          disabled={editInput}
                        />
                      </Form.Group>
                      <div className={styles.uploadBtnWrapper}>
                        <input type="file" name="myfile" />
                        <button
                          className={`${styles.upload_button} btn`}
                          disabled={editInput}
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
