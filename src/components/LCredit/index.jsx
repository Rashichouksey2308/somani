/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react'
import styles from './index.module.scss'
import { Row, Col, Form } from 'react-bootstrap'
import DateCalender from '../DateCalender'
import { useDispatch, useSelector } from 'react-redux'
import { GetLcModule, UpdateLcAmendment } from 'redux/lcModule/action'
import SubmitBar from '../../components/PreviousBar/SubmitBar'
import Router from 'next/router'
import InspectionDocument from '../InspectionDocument'
import { toast } from 'react-toastify'

function Index() {
  const dispatch = useDispatch()

  const [editInput, setEditInput] = useState(false)
  const [editCurrent, setEditCurrent] = useState()

  const handleEdit = (val) => {
    console.log("THIS IS HANDLE EDIT", val)
    setEditCurrent(val)
    setEditInput(true)
  }

  console.log(editCurrent, "THIS IS EDIT LC", editInput)

  const { lcModule } = useSelector((state) => state.lc)

  let lcModuleData = lcModule?.data[0]

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

  const [clauseObj, setClauseObj] = useState({
    existingValue: '',
    dropDownValue: '',
    newValue: '',
  })

  const inputRef = useRef(null)

  // console.log(clauseObj, 'this is ccccc')

  const [clauseArr, setClauseArr] = useState([])
  // console.log(clauseArr, 'new arr', clauseArr.map((e)=>e.dropDownValue))

  const [drop, setDrop] = useState('')

  const [fieldType, setFieldType] = useState(false)

  const dropDownChange = (e) => {

    if(e.target.value == 'latestDateOfShipment' || e.target.value == 'dateOfExpiry'){
      setFieldType(true)
    }else{
      setFieldType(false)
      
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
    // console.log(value, "arr change value")
    const newInput = { ...clauseObj }
    newInput[name] = value
    setClauseObj(newInput)

    const newInput1 = { ...clauseData }
    newInput1[drop] = value
    // console.log(newInput1, "NEW INPUT 1")
    setClauseData(newInput1)
  }

  const saveDropDownDate = (value, name) => {
    const d = new Date(value)
    let text = d.toISOString()
    arrChange(name, text)
  }

  const addToArr = () => {
    const newArr = [...clauseArr]
    if(clauseArr.map((e)=>e.dropDownValue).includes(clauseObj.dropDownValue)){
      let toastMessage = 'Please select a different Clause from drop down'
      if(!toast.isActive(toastMessage)){
        toast.error(toastMessage, {toastId: toastMessage})
      }
    }else{
    newArr.push(clauseObj)
    
    setClauseArr(newArr)
    }
  }

  const removeFromArr = (arr) => {
    const newClause = clauseArr.filter((item) => {
      return item.dropDownValue !== arr
    })
    setClauseArr(newClause)
  }

  const [lcDoc, setLcDoc] = useState({
    lcDraftDoc : null
  })

  console.log(lcDoc, "THIS IS LOC DOC")

  const uploadDocument1 = (e) => {
    const newInput = {...lcDoc}
    newInput.lcDraftDoc = e.target.files[0]
    setLcDoc(newInput)
  }

  const handleSubmit = () => {
    setLcData(clauseData)
    let fd = new FormData()
    fd.append('lcApplication', JSON.stringify(lcData))
    fd.append('lcModuleId', JSON.stringify(lcModuleData._id))
    fd.append('document1', lcDoc.lcDraftDoc)

    // console.log(fd, 'IBJJJ')
    dispatch(UpdateLcAmendment(fd))
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
                            required
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
                            defaultDate={lcData?.dateOfIssue?.split('T')[0]}
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
                          required
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
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6}>
                        <div className="d-flex">
                         {!fieldType ? <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type='text'
                            ref={inputRef}
                            defaultValue={
                              editInput ? editCurrent?.newValue : ''
                            }
                            onChange={(e) =>
                              {inputRef.current.value = '';
                              arrChange('newValue', e.target.value)}
                            }
                          /> :  
                          <><DateCalender
                              name="newValue"
                              // defaultDate={lcData?.dateOfIssue?.split('T')[0]}
                              saveDate={saveDropDownDate}
                              // labelName="New Value" 
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search" /></>}
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
                                        onClick={() => handleEdit(arr)}
                                      />
                                      <img
                                        src="/static/delete 2.svg"
                                        className="img-fluid ml-3 mr-n5"
                                        alt="delete"
                                        onClick={() =>
                                          removeFromArr(arr.dropDownValue)
                                        }
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
          <div className="mt-4 mb-5">
            <InspectionDocument
              lcDoc={lcDoc}
              orderId={lcModuleData?.order?._id}
              uploadDocument1={uploadDocument1}
              documentName="LC DRAFT"
              module='Agreements&Insurance&LC&Opening'
            />
          </div>
        </div>
      </div>
      <SubmitBar handleSubmit={handleSubmit} />
    </>
  )
}

export default Index
