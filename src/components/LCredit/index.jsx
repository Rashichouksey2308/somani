/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react'
import styles from './index.module.scss'
import { Row, Col, Form } from 'react-bootstrap'
import DateCalender from '../DateCalender'
import { useDispatch, useSelector } from 'react-redux'
import { GetLcModule, UpdateLcAmendment } from 'redux/lcModule/action'
import SaveBar from '../SaveBar'
import Router from 'next/router'
import InspectionDocument from '../InspectionDocument'
import { toast } from 'react-toastify'
import _get from 'lodash/get'

function Index() {
  const dispatch = useDispatch()

  const [editInput, setEditInput] = useState(false)
  const [editCurrent, setEditCurrent] = useState()
  const [isFieldInFocus, setIsFieldInFocus] = useState({
    existingValue: false,
    newValue: false,
  })
  const handleEdit = (index) => {
    // console.log('THIS IS HANDLE EDIT', val)
    // setEditCurrent(val)
    // setEditInput(true)
    const newArr = [...clauseArr]
    newArr.forEach((val, i) => {
      if (i == index) {
        val.isEdit = !val.isEdit
      }
    })

    setClauseArr(newArr)
  }
console.log(clauseData,"clauseData")
  console.log(editCurrent, 'THIS IS EDIT LC', editInput)

  const { lcModule } = useSelector((state) => state.lc)

  let lcModuleData = _get(lcModule, 'data[0]', {})

  useEffect(() => {
    let id = sessionStorage.getItem('lcAmmend')
    dispatch(GetLcModule(`?lcModuleId=${id}`))
  }, [dispatch])

  const [lcData, setLcData] = useState()

  // useEffect(() => {
  //   sessionStorage.setItem('lcData', lcData)
  // }, [lcData, lcModuleData])

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

    setClauseData({
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

  const [clauseData, setClauseData] = useState()
  // {
  //   formOfDocumentaryCredit: lcModuleData?.lcApplication?.formOfDocumentaryCredit,
  //   applicableRules: lcModuleData?.lcApplication?.applicableRules,
  //   dateOfExpiry: lcModuleData?.lcApplication?.dateOfExpiry,
  //   placeOfExpiry: lcModuleData?.lcApplication?.placeOfExpiry,
  //   applicant: lcModuleData?.lcApplication?.applicant,
  //   beneficiary: lcModuleData?.lcApplication?.beneficiary,
  //   currecyCodeAndAmountValue: lcModuleData?.lcApplication?.currecyCodeAndAmountValue,
  //   currecyCodeAndAmountUnit: lcModuleData?.lcApplication?.currecyCodeAndAmountUnit,
  //   tolerancePercentage: lcModuleData?.lcApplication?.tolerancePercentage,
  //   creditAvailablewith: lcModuleData?.lcApplication?.creditAvailablewith,
  //   creditAvailableBy: lcModuleData?.lcApplication?.creditAvailableBy,
  //   atSight: lcModuleData?.lcApplication?.atSight,
  //   drawee: lcModuleData?.lcApplication?.drawee,
  //   deferredPayment: lcModuleData?.lcApplication?.deferredPayment,
  //   partialShipment: lcModuleData?.lcApplication?.partialShipment,
  //   transhipments: lcModuleData?.lcApplication?.transhipments,
  //   shipmentForm: lcModuleData?.lcApplication?.shipmentForm,
  //   portOfLoading: lcModuleData?.lcApplication?.portOfLoading,
  //   portOfDischarge: lcModuleData?.lcApplication?.portOfDischarge,
  //   latestDateOfShipment: lcModuleData?.lcApplication?.latestDateOfShipment,
  //   DescriptionOfGoods: lcModuleData?.lcApplication?.DescriptionOfGoods,
  // },

  console.log(clauseData, 'CLAUSE DATA')

  const initialState = {
    existingValue: '',
    dropDownValue: '',
    newValue: '',
    isEdit: false,
  }

  const [clauseObj, setClauseObj] = useState(initialState)

  const inputRef = useRef(null)
  const inputRef1 = useRef(null)

  console.log(clauseObj, 'this is ccccc')

  const [clauseArr, setClauseArr] = useState([])
  // console.log(clauseArr, 'new arr', clauseArr.map((e)=>e.dropDownValue))

  const [drop, setDrop] = useState('')

  const [fieldType, setFieldType] = useState("")

  const dropDownChange = (e) => {  

    if (
      e.target.value == 'latestDateOfShipment' ||
      e.target.value == 'dateOfExpiry'
    ) {
      setFieldType("date")
    }else if( e.target.value == 'partialShipment'){
      setFieldType("select")
    }
     else {
      setFieldType("")
    }

    let newInput = { ...clauseObj }

    let val1 = e.target.options[e.target.selectedIndex].text
    let val2 = e.target.value
    setDrop(val2)

    newInput['existingValue'] = clauseData[e.target.value]
    newInput['dropDownValue'] = val1

    setClauseObj(newInput)
  }

  const arrChange = (name, value) => {
    const newInput = { ...clauseObj }
    newInput[name] = value
    setClauseObj(newInput)

    const newInput1 = { ...clauseData }
    newInput1[drop] = value
    setClauseData(newInput1)
  }

  const saveDropDownDate = (value, name) => {
    const d = new Date(value)
    let text = d.toISOString()
    arrChange(name, text)
  }

  const addToArr = () => {
    // console.log(inputRef, 'THIS IN INPUT REF')
    // inputRef.current.value = '';
    inputRef1.current.value = '';
    setClauseObj(initialState)
    if (clauseObj.existingValue === '' || clauseObj.newValue === '') {
      let toastMessage = 'CANNOT ADD A CLAUSE WITH EMPTY VALUES'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    } else {
      const newArr = [...clauseArr]
      if (
        clauseArr.map((e) => e.dropDownValue).includes(clauseObj.dropDownValue)
      ) {
        let toastMessage = 'Please select a different Clause from drop down'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      } else {
        newArr.push(clauseObj)

        setClauseArr(newArr)
      }
    }
  }
  console.log(clauseArr, 'clauseArr')
  const removeFromArr = (arr) => {
    const newClause = clauseArr.filter((item) => {
      return item.dropDownValue !== arr
    })
    setClauseArr(newClause)
  }

  const [lcDoc, setLcDoc] = useState({
    lcDraftDoc: null,
  })

  console.log(lcDoc, 'THIS IS LOC DOC')

  const uploadDocument1 = (e) => {
    const newInput = { ...lcDoc }
    newInput.lcDraftDoc = e.target.files[0]
    setLcDoc(newInput)
  }

  const handleSubmit = () => {
    if (
      lcData.documentaryCreditNumber === '' ||
      lcData.documentaryCreditNumber == undefined
    ) {
      let toastMessage = 'DOCUMENTARY CREDIT NUMBER IS MANDATORY'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    } else if (
      lcData.lcIssuingBank === '' ||
      lcData.lcIssuingBank == undefined
    ) {
      let toastMessage = 'SELECT LC ISSUING BANK FROM DROPDOWN'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    } else if (lcData.dateOfIssue === '' || lcData.dateOfIssue == undefined) {
      let toastMessage = 'DATE OF ISSUE IS MANDATORY'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    } else if (lcDoc.lcDraftDoc === '' || lcDoc.lcDraftDoc == undefined) {
      let toastMessage = 'PLEASE UPLOAD LC DRAFT'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    } else {
      setLcData(clauseData)
      let fd = new FormData()
      fd.append('lcApplication', JSON.stringify(lcData))
      fd.append('lcModuleId', JSON.stringify(lcModuleData._id))
      fd.append('document1', lcDoc.lcDraftDoc)

      dispatch(UpdateLcAmendment(fd))
    }
  }

  return (
    <>
      {' '}
      <div className="container-fluid p-0 border-0">
        <div className={`${styles.container_inner} vessel_card`}>
          <div className={`${styles.head_header}`}>
            <img
              className={`${styles.arrow} image_arrow mr-2 img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
              onClick={() => Router.push('/lc-module')}

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
             // className="collapse"
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
                            required
                            onChange={(e) =>
                              saveAmendmentData(e.target.name, e.target.value)
                            }
                            className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            value={lcData?.lcIssuingBank}
                          >
                            <option selected disabled>Select an option</option>
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
                          name="documentaryCreditNumber"
                          defaultValue={lcData?.documentaryCreditNumber}
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
                            defaultDate={lcData?.dateOfIssue}
                            saveDate={saveDate}
                            labelName="(31C) Date Of Issue"
                          />
                          <img
                            className={`${styles.calanderIcon} image_arrow img-fluid`}
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
                            defaultValue={
                              editInput ? editCurrent.dropDownValue : ''
                            }
                            ref={inputRef1}
                            onChange={(e) => dropDownChange(e)}
                            className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          >
                            <option selected>Select an option</option>
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
                        <form id='myForm'>
                        <input
                          className={`${styles.input_field} input form-control`}
                          disabled
                          
                          type="text"
                          value={clauseObj?.existingValue}
                       
                        />
                        </form>
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Existing Value
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6}>
                        <div className="d-flex">
                          {fieldType=="" ? (
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              // ref={inputRef}
                              // onFocus={(e) => {
                              //   setIsFieldInFocus({ ...isFieldInFocus, existingValue: true }),
                              //     e.target.type = 'number'
                              // }}
                              // onBlur={(e) => {
                              //   setIsFieldInFocus({ ...isFieldInFocus, existingValue: false }),
                              //     e.target.type = 'text'
                              // }}
            
                              // value={isFieldInFocus.existingValue ?
                              //   editInput ? editCurrent?.newValue : ''  :
                              //   Number(editInput ? editCurrent?.newValue : '' ).toLocaleString('en-In')
                              // }
                              // defaultValue={
                              //   editInput ? editCurrent?.newValue : '' 
                              // }
                              value={clauseObj?.newValue}
                              onChange={(e) => {
                                // inputRef.current.value = ''
                                arrChange('newValue', e.target.value)
                              }}
                            />
                          ) :null}
                          {fieldType=="date"?
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
                          :null}
                           {fieldType=="select"?
                           (
                            <>
                            
                           <select
                             defaultValue={
                                editInput ? editCurrent?.newValue : ''
                              }
                              onChange={(e) => {
                                // inputRef.current.value = ''
                                arrChange('newValue', e.target.value)
                              }}
                            className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          >
                            <option disabled selected>Select an option</option>
                             <option value="No">Prohibited</option>
                             <option value="Yes">Allowed</option>
                             
                          </select>

                         
                          <img
                            className={`${styles.arrow} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        
                            </>
                          )
                          :null}
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
                                clauseArr?.map((arr, index) =>
                                  arr.isEdit ? (
                                    <>
                                      <tr key={index} className="table_row">
                                        <td>
                                          <div className="d-flex">
                                            <select
                                              defaultValue={
                                                editInput
                                                  ? editCurrent.dropDownValue
                                                  : ''
                                              }
                                              onChange={(e) =>
                                                dropDownChange(e)
                                              }
                                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                            >
                                              <option selected>
                                                Select an option
                                              </option>
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
                                              <option value="applicant">
                                                (50) Applicant
                                              </option>
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
                                              <option value="atSight">
                                                (42C) At Sight
                                              </option>
                                              <option value="drawee">
                                                (42A) Drawee
                                              </option>
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
                                        </td>
                                        <td>
                                          <input
                                            className={`${styles.input_field} input form-control`}
                                            disabled
                                            type="text"
                                            value={
                                              editInput
                                                ? editCurrent.existingValue
                                                : clauseObj?.existingValue
                                            }
                                          />
                                          <label
                                            className={`${styles.label_heading} label_heading`}
                                          >
                                            Existing Value
                                          </label>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            {!fieldType ? (
                                              <input
                                                className={`${styles.input_field} input form-control`}
                                                required
                                                type="text"
                                                ref={inputRef}
                                                defaultValue={
                                                  editInput
                                                    ? editCurrent?.newValue
                                                    : ''
                                                }
                                                onChange={(e) => {
                                                  inputRef.current.value = ''
                                                  arrChange(
                                                    'newValue',
                                                    e.target.value,
                                                  )
                                                }}
                                              />
                                            ) : (
                                              <>
                                                <DateCalender
                                                  name="newValue"
                                                  // defaultDate={lcData?.dateOfIssue?.split('T')[0]}
                                                  saveDate={saveDropDownDate}
                                                // labelName="New Value"
                                                />
                                              </>
                                            )}
                                            <label
                                              className={`${styles.label_heading} label_heading`}
                                            >
                                              New Value
                                              <strong className="text-danger">
                                                *
                                              </strong>
                                            </label>
                                          </div>
                                        </td>
                                        <td>
                                          {/* <img
                                            src="/static/mode_edit.svg"
                                            className={`${styles.image} ml-3`}
                                            alt="edit"
                                            onClick={() => handleEdit(index)}
                                          /> */}
                                          <img
                                            src="/static/delete 2.svg"
                                            className="ml-3"
                                            alt="delete"
                                            onClick={() =>
                                              removeFromArr(arr.dropDownValue)
                                            }
                                          />
                                        </td>
                                      </tr>
                                    </>
                                  ) : (
                                    <>
                                      <tr key={index} className="table_row">
                                        <td>{arr.dropDownValue}</td>
                                        <td>{arr.existingValue}</td>
                                        <td>{arr.newValue}</td>
                                        <td>
                                          {/* <img
                                            src="/static/mode_edit.svg"
                                            className={`${styles.image} ml-3`}
                                            alt="edit"
                                            onClick={() => handleEdit(index)}
                                          /> */}
                                          <img
                                            src="/static/delete 2.svg"
                                            className="ml-3"
                                            alt="delete"
                                            onClick={() =>
                                              removeFromArr(arr.dropDownValue)
                                            }
                                          />
                                        </td>
                                      </tr>
                                    </>
                                  ),
                                )}
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
          <div className="mt-4 mb-5">
            <InspectionDocument
              setLcDoc={setLcDoc}
              lcDoc={lcDoc}
              orderId={lcModuleData?.order?._id}
              uploadDocument1={uploadDocument1}
              documentName="LC DRAFT"
              module="Agreements&Insurance&LC&Opening"
            />
          </div>
        </div>
      </div>
      <SaveBar
        // handleSave={handleSubmit}
        rightBtnClick={handleSubmit}
        rightBtn="Submit"
        buttonText="null"
      />
    </>
  )
}

export default Index
