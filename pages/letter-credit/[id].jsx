/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react'
import styles from './letter.module.scss'
import { Row, Col, Form } from 'react-bootstrap'
import InspectionDocument from '../../src/components/InspectionDocument'
import DateCalender from '../../src/components/DateCalender'
import SaveBar from '../../src/components/SaveBar'


import Router from 'next/router'
import { removePrefixOrSuffix } from '../../src/utils/helper'
import _get from 'lodash/get'
import { toast } from 'react-toastify'
import moment from 'moment/moment'

///REDUX/////
import { useDispatch, useSelector } from 'react-redux'
import { GetLcModule, UpdateAmendment } from '../../src/redux/lcModule/action'
import {
  setPageName,
  setDynamicName,
  setDynamicOrder,
} from '../../src/redux/userData/action'

function Index() {
  const dispatch = useDispatch()

  const { lcModule } = useSelector((state) => state.lc)

  let lcModuleData = _get(lcModule, 'data[0]', {})
  console.log(lcModuleData,'lcModuleData')

  const [editInput, setEditInput] = useState(false)
  const [editCurrent, setEditCurrent] = useState()

  console.log(editCurrent, 'this is edit current')
  const handleEdit = (val) => {
    console.log('THIS IS HANDLE EDIT', val)
    setEditCurrent(val)
    setEditInput(true)
  }

  useEffect(() => {
    let id = sessionStorage.getItem('lcAmmend')
    dispatch(GetLcModule(`?lcModuleId=${id}`))
  }, [dispatch])

  useEffect(() => {
    dispatch(setPageName('Lc'))
    dispatch(setDynamicName(lcModuleData?.company?.companyName))
    dispatch(
      setDynamicOrder(
        lcModuleData?.order?.orderId
          ? lcModuleData?.order?.orderId : lcModuleData?.order?.applicationId
      ),
    )
  }, [lcModuleData])

  const [lcData, setLcData] = useState()

  // console.log(lcData, "THIS IS LC USE STATE")
  console.log(editCurrent, "editCurrent")
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
      portOfLoading: lcModuleData?.lcApplication?.portOfLoading
        ? lcModuleData?.lcApplication?.portOfLoading
        : lcModuleData?.order?.termsheet?.transactionDetails?.loadPort,
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
      dateOfAmendment: lcModuleData?.lcApplication?.dateOfAmendment,
      numberOfAmendment: lcModuleData?.lcApplication?.numberOfAmendment,
    })
    // setLcDoc({
    //   lcDraftDoc: lcModuleData?.document
    // })
  }, [lcModuleData])

  // console.log(lcData, 'LC DATA')

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

  const initialState = {
    existingValue: '',
    dropDownValue: '',
    newValue: '',
  }

  const [clauseObj, setClauseObj] = useState(initialState)

  console.log(clauseObj, 'this is ccccc')

  const [clauseArr, setClauseArr] = useState([])
  // console.log(clauseArr, 'new arr')

  const [drop, setDrop] = useState('')

  const [fieldType, setFieldType] = useState("")

  const inputRef = useRef(null)
  const inputRef1 = useRef(null)

  const dropDownChange = (e) => {
    if (
      e.target.value == 'latestDateOfShipment' ||
      e.target.value == 'dateOfExpiry'
    ) {
      setFieldType("date")
    } else if (e.target.value == "partialShipment") {
      setFieldType("drop")
    }
    else {
      setFieldType('')
    }

    let newInput = { ...clauseObj }

    let val1 = e.target.options[e.target.selectedIndex].text
    let val2 = e.target.value
    setDrop(val2)
    console.log(lcData[e.target.value], "lcData[e.target.value]", e.target.value)
    newInput['existingValue'] = lcData[e.target.value] || ''
    newInput['dropDownValue'] = val1 || ''
    console.log(newInput, 'dropDownChange')
    setClauseObj(newInput)
  }
  //  console.log(lcData,"lcData")
  const arrChange = (name, value) => {
    const newInput = { ...clauseObj }
    newInput[name] = value
    setClauseObj(newInput)

    const newInput1 = { ...lcData }
    newInput1[drop] = value
    // console.log(newInput1, "NEW INPUT 1")
    setLcData(newInput1)
  }

  const saveDropDownDate = (value, name) => {
    const d = new Date(value)
    let text = d.toISOString()
    console.log(text, 'dateee')
    arrChange(name, text)
  }

  const addToArr = () => {
    if(fieldType == 'date' || fieldType == 'drop'){
      setFieldType('')
    }
    inputRef1.current.value = ''
    setClauseObj(initialState)
    const newArr = [...clauseArr]
    if (clauseObj.dropDownValue === 'Select an option' || clauseObj.dropDownValue === '') {
      let toastMessage = 'please select a dropdown value first '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    } else {
      console.log('this is ccccc')
      if (
        clauseArr.map((e) => e.dropDownValue).includes(clauseObj.dropDownValue)
      ) {
        let toastMessage = 'CLAUSE ALREADY ADDED'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      } else {
        newArr.push(clauseObj)

        setClauseArr(newArr)
        // setClauseObj({
        //   existingValue: '',
        //   dropDownValue: '',
        //   newValue: '',
        // })
      }
    }


  }

  const removeFromArr = (arr) => {
    const newClause = clauseArr.filter((item) => {
      return item.dropDownValue !== arr
    })
    setClauseArr(newClause)
  }

  const [lcDoc, setLcDoc] = useState({
    lcDraftDoc: null,
  })

  // console.log(lcDoc, "THIS IS LC DOC")

  const uploadDocument1 = (e) => {
    const newInput = { ...lcDoc }
    newInput.lcDraftDoc = e.target.files[0]

    setLcDoc(newInput)
  }

  const handleRightButton = () => {
    if (lcData.dateOfAmendment === '' || lcData.dateOfAmendment == undefined) {
      let toastMessage = 'DATE OF AMENDMENT IS MANDATORY'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    } else if (
      lcData.numberOfAmendment === '' ||
      lcData.numberOfAmendment == undefined
    ) {
      let toastMessage = 'NUMBER OF AMENDMENT IS MANDATORY'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    } else if (lcDoc.lcDraftDoc === '' || lcDoc.lcDraftDoc == undefined) {
      let toastMessage = 'PLEASE UPLOAD LC DRAFT'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    } else {
      let sendLcData = { ...lcData }
      sendLcData.tolerancePercentage = Number(
        removePrefixOrSuffix(lcData.tolerancePercentage),
      )
      let fd = new FormData()
      fd.append('lcApplication', JSON.stringify(sendLcData))
      fd.append('lcModuleId', JSON.stringify(lcModuleData._id))
      fd.append('document1', lcDoc.lcDraftDoc)

      dispatch(UpdateAmendment(fd))
    }
  }

  const handleSubmit = () => {
    if (lcData.dateOfAmendment === '' || lcData.dateOfAmendment == undefined) {
      let toastMessage = 'DATE OF AMENDMENT IS MANDATORY'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    } else if (
      lcData.numberOfAmendment === '' ||
      lcData.numberOfAmendment == undefined
    ) {
      let toastMessage = 'NUMBER OF AMENDMENT IS MANDATORY'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    } else if (lcDoc.lcDraftDoc === '' || lcDoc.lcDraftDoc == undefined) {
      let toastMessage = 'PLEASE UPLOAD LC AMENDMENT DRAFT'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    } else {
      let tempData = { ...lcData }

      // console.log(tempData,"tempData",clauseArr)
      let fd = new FormData()
      fd.append('lcApplication', JSON.stringify(tempData))
      fd.append('lcModuleId', JSON.stringify(lcModuleData._id))
      fd.append('document1', lcDoc.lcDraftDoc)

      dispatch(UpdateAmendment(fd))
    }
  }

  const getData = (value, type) => {
    // console.log(value,"775456")
    if (type == '(44C) Latest Date Of Shipment') {
      return moment(value).format('DD-MM-YYYY')
    } else if (type == '(43P) Partial Shipment') {
      return value == "Yes" ? "Allowed" : "Not Allowed"
    }
    else {
      return value
    }
  }
  const getDataFormDropDown = (value) => {
    // console.log(value,"ssdsdsdsd")
    if (fieldType == "date") {
      return moment(value).format('DD-MM-YYYY')
    } else {
      return value
    }
  }
  return (
    <>
      {' '}
      <div className="container-fluid p-0 border-0">
        <div className={`${styles.container_fluid}`}>
          <div className={styles.head_header}>

            <img
               onClick={() => Router.push('/lc-module')}
              className={`${styles.back_arrow} image_arrow mr-2 img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={`${styles.heading}`}>{lcModuleData?.company?.companyName} </h1>
          </div>

          <div className={`${styles.wrapper} vessel_card card upload_main`}>
            <div
              className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#lcApplication"
              aria-expanded="true"
              aria-controls="lcApplication"
            >
              <h2 className="mb-0">LC Amendment</h2>
              <span>+</span>
            </div>
            <div
              id="lcApplication"
              //className="collapse"
              aria-labelledby="lcApplication"
              data-parent="#lcApplication"
            >
              <div
                className={` ${styles.cardBody} vessel_card card-body  border_color`}
              >
                <div className={` ${styles.content}`}>
                  <div className={` ${styles.body}`}>
                    <Row>
                      <div
                        className={`${styles.form_group} mt-3 col-lg-3 col-md-6 col-sm-6 `}
                      >
                        <div className={`${styles.label} mb-2 text`}>
                          (51D) LC Issuing Bank{' '}
                          <strong className="text-danger ml-n1">*</strong>
                        </div>
                        <span className={`${styles.value}`}>
                          {lcModuleData?.lcApplication?.lcIssuingBank}
                        </span>
                      </div>
                      <div
                        className={`${styles.form_group} mt-3 col-lg-3 col-md-6 col-sm-6 `}
                      >
                        <div className={`${styles.label}  mb-2 text`}>
                          (20) Documentary Credit Number{' '}
                          <strong className="text-danger ml-n1">*</strong>
                        </div>
                        <span className={styles.value}>
                          {lcModuleData?.lcApplication?.documentaryCreditNumber}
                        </span>
                      </div>
                      <div
                        className={`${styles.form_group} mt-3 col-lg-3 col-md-6 col-sm-6 `}
                      >
                        <div className={`${styles.label}  mb-2 text`}>
                          (31C) Date Of Issue{' '}
                          <strong className="text-danger ml-n1">*</strong>{' '}
                        </div>
                        <span className={styles.value}>
                          {lcModuleData?.lcApplication?.dateOfIssue
                            ? moment(lcModuleData?.lcApplication?.dateOfIssue).format('DD-MM-YYYY')
                            : ''}
                        </span>
                      </div>
                      <Col className="mb-4 mt-4" lg={3} md={6} sm={6}>
                        <div className="d-flex">
                          <DateCalender
                            name="dateOfAmendment"
                            defaultDate={
                              lcModuleData?.lcApplication?.dateOfAmendment
                            }
                            saveDate={saveDate}
                            labelName="(30) Date Of Ammendment"
                          />
                          <img
                            className={`${styles.calanderIcon} image_arrow img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" lg={3} md={6} sm={6}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          type="number"
                          defaultValue={
                            lcModuleData?.lcApplication?.numberOfAmendment
                          }
                          onKeyDown={(evt) =>
                            ['e', 'E', '+', '-'].includes(evt.key) &&
                            evt.preventDefault()
                          }
                          required
                          name="numberOfAmendment"
                          onChange={(e) =>
                            saveAmendmentData(e.target.name, e.target.value)
                          }
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          (26E) Number of Amendment
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                    </Row>
                  </div>
                </div>
                <hr className={`${styles.line} border_color`}></hr>

                <div className={` ${styles.content}`}>
                  <div className={` ${styles.body}`}>
                    <Row>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <select
                            defaultValue={
                              editInput ? editCurrent.dropDownValue : ''
                            }
                            ref={inputRef1}
                            onChange={(e) => dropDownChange(e)}
                            className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          >
                            <option value=''>Select an option</option>
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
                            <option value="draftAt">(42C) Draft At</option>
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
                            Clause
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
                          style={{ opacity: '0.5' }}
                          disabled
                          type="text"
                          value={getDataFormDropDown(
                            editInput
                              ? editCurrent.existingValue
                              : clauseObj?.existingValue,
                          )}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Existing Value
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6}>
                        <div className="d-flex">
                          {fieldType == "" ? (
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              ref={inputRef}
                              // defaultValue={
                              //   editInput ? editCurrent?.newValue : ''
                              // }
                              value={clauseObj?.newValue}
                              onChange={(e) => {
                                // inputRef.current.value = ''
                                arrChange('newValue', e.target.value)
                              }}
                            />
                          ) : null}
                          {
                            fieldType == "date" ?
                              (
                                <>
                                  <DateCalender
                                    name="newValue"
                                    defaultDate={clauseObj?.newValue}
                                    saveDate={saveDropDownDate}
                                  // labelName="New Value"
                                  />
                                  <img
                                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                                    src="/static/caldericon.svg"
                                    alt="Search"
                                  />
                                </>
                              )
                              : null
                          }
                          {
                            fieldType == "drop" ?
                              (
                                <>
                                  <select
                                    name="partialShipment"
                                    onChange={(e) => {
                                      arrChange('newValue', e.target.value)
                                    }}
                                    // value={

                                    // }
                                    className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                                  >
                                    <option selected disabled>
                                      Select an option
                                    </option>

                                    <option value="Yes">Allowed</option>
                                    <option value="No">Not Allowed</option>
                                    <option value="No">Conditional</option>
                                  </select>
                                  <img
                                    className={`${styles.arrow} image_arrow img-fluid`}
                                    src="/static/inputDropDown.svg"
                                    alt="Search"
                                  />
                                </>
                              )
                              : null
                          }
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            New Value<strong className="text-danger">*</strong>
                          </label>
                          {fieldType == "" ? (
                            <img
                              className="img-fluid ml-4"
                              src="/static/add-btn.svg"
                              alt="add button"
                              onClick={() => addToArr()}
                            />
                          ) : (
                            <img
                              className="img-fluid"
                              style={{ marginLeft: '40px' }}
                              src="/static/add-btn.svg"
                              alt="add button"
                              onClick={() => addToArr()}
                            />
                          )}
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
                                  className={`${styles.table_header} label_heading`}
                                >
                                  CLAUSE{' '}
                                </th>
                                <th className={`${styles.table_header} label_heading`}>
                                  EXISTING VALUE{' '}
                                </th>
                                <th className={`${styles.table_header} label_heading`}>
                                  NEW VALUE{' '}
                                </th>
                                <th className={`${styles.table_header}`}></th>
                              </tr>
                            </thead>
                            <tbody>
                              {clauseArr &&
                                clauseArr?.map((clause, index) => (
                                  <tr key={index} className="table_row">
                                    <td>{clause.dropDownValue}</td>
                                    <td>
                                      {getData(
                                        clause.existingValue,
                                        clause.dropDownValue,
                                      )}{' '}
                                    </td>
                                    <td>
                                      {getData(
                                        clause.newValue,
                                        clause.dropDownValue,
                                      )}
                                    </td>
                                    <td>
                                      {/* <img
                                        src="/static/mode_edit.svg"
                                        className="img-fluid ml-n5"
                                        alt="edit"
                                        onClick={() => handleEdit(clause)}
                                      /> */}
                                      <img
                                        src="/static/delete 2.svg"
                                        className="img-fluid ml-3 mr-n5"
                                        alt="delete"
                                        onClick={() =>
                                          removeFromArr(clause.dropDownValue)
                                        }
                                      />
                                    </td>
                                  </tr>
                                ))}
                              {/* <tr className="table_row">
                                <td>(44A) SHIPMENT FROM </td>
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
          <InspectionDocument
            lcDoc={lcDoc}
            orderId={lcModuleData?.order?._id}
            uploadDocument1={uploadDocument1}
            documentName="LC AMENDMENT DRAFT"
            module="Agreements&Insurance&LC&Opening"
            setLcDoc={setLcDoc}
          />
        </div>
      </div>
      <SaveBar
        // handleSave={handleSubmit}
        rightBtnClick={handleRightButton}
        rightBtn="Share"
        buttonText="null"
      />
    </>
  )
}

export default Index
