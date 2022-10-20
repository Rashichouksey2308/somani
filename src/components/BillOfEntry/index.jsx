/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col, Modal } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import UploadOther from '../UploadOther'
import DateCalender from '../DateCalender'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { UpdateCustomClearance } from 'redux/CustomClearance&Warehousing/action'
import { useSelector } from 'react-redux'
import _get from 'lodash/get'
import { removePrefixOrSuffix, addPrefixOrSuffix } from 'utils/helper'
import { toast } from 'react-toastify'
import { checkNan } from '../../utils/helper'
import { ViewDocument } from '../../redux/ViewDoc/action'
// import { set } from 'lodash'
import {
  GetAllCustomClearance,
  UploadCustomDoc,
} from '../../redux/CustomClearance&Warehousing/action'
export default function Index({
  customData,
  OrderId,
  uploadDoc,
  setComponentId,
  componentId,
}) {
  const isShipmentTypeBULK =
    _get(customData, 'order.vessel.vessels[0].shipmentType', '') == 'Bulk'
  const dispatch = useDispatch()
  const [isFieldInFocus2, setIsFieldInFocus2] = useState(false)
  const [saveContactTable, setContactTable] = useState(false)
  const [totalBl, setTotalBl] = useState(0)
  const [isFieldInFocus, setIsFieldInFocus] = useState([])
  const { customClearance } = useSelector((state) => state.Custom)



  console.log(customData, 'this is custom doc')
  console.log(dutyData, 'dutyData')
  useEffect(() => {
    let id = sessionStorage.getItem('customId')
    dispatch(GetAllCustomClearance(`?customClearanceId=${id}`))
  }, [dispatch])
  const [billOfEntryData, setBillOfEntryData] = useState(
   [
        {
    boeAssessment: '',
    pdBond: false,
    billOfEntryFor: customData?.order?.termsheet?.transactionDetails?.billOfEntity ?? '',
    boeNumber: '',
    boeDate: '',

    boeDetails: {
      invoiceQuantity: '',
      invoiceQuantityUnit: '',
      currency: 'INR',
      conversionRate: '',
      invoiceNumber: '',
      invoiceValue: '',
      invoiceValueCurrency: '',
      invoiceDate: '',
      boeRate: '',
      bankName: '',
      accessibleValue: accessibleValueCalc,
    },
    duty: [
      {
        duty: dutyData?.duty,
        amount: dutyData?.amount,
      },
    ],

    document1: null,
    document2: null,
    document3: null,
  }
   ]
  )
  console.log(billOfEntryData, 'billOfEntryData')
  const totalCustomDuty = () => {
    let number = 0
    billOfEntryData?.duty?.forEach((val) => {
      number += Number(val.amount)
    })
    //console.log(totalCustomDuty, 'totalCustomDuty')
    if (number) {
      return number
    }
  }
  console.log(billOfEntryData, 'boeDetails')
  console.log(customData, 'sdasd')
  const uploadDoc1 = async (e) => {
    let name = e.target.name
    let docs = await uploadDoc(e)

    //  console.log(docs, uploadDoc(e), 'this is upload response')
    let newInput = { ...billOfEntryData }
    newInput[name] = docs
    setBillOfEntryData(newInput)
  }
  const getDoc = (payload) => {
    console.log(payload, "payload")
    dispatch(ViewDocument({
      path: payload,
      // orderId: documentsFetched._id,
    }))
  }
  console.log(
    billOfEntryData,
    'billOfEntryData',
    customData,
    _get(customData, 'order.termsheet.transactionDetails.billOfEntity', ''),
  )
  //console.log(billOfEntryData, 'THIS IS BILL OF ENTRY USE STATE')

  const saveDate = (value, name) => {
    // console.log(value, name, 'save date')
    const d = new Date(value)
    let text = d.toISOString()
    saveBillOfEntryData(name, text)
  }
  const saveBoeDetaiDate = (value, name,index) => {
    // console.log(value, name, 'save date')
    // const namesplit = name?.split('.')
    const d = new Date(value)
    let text = d.toISOString()
    saveBillOfEntryData(name, text,index)
  }

  const saveBillOfEntryData = (name, value,index) => {
    console.log(name, value, 'Event1')
    const newInput = [ ...billOfEntryData ]
    console.log(newInput,"newInput")
    const namesplit = name.split('.')
   
    namesplit.length > 1
      ? (newInput[index] [namesplit[0]][namesplit[1]] = value)
      : (newInput[index][name] = value)
    console.log(newInput, 'newInput')

    setBillOfEntryData([...newInput ])
  }
  const conversionRateChange = (name, value,index) => {
    const newInput = [ ...billOfEntryData ]
    newInput[index]['boeDetails']['conversionRate'] = value
    console.log(newInput, 'newInput')

    setBillOfEntryData([ ...newInput ])
  }

  const [pfCheckBox, setPfCheckBox] = useState(true)

  const handlePfCheckBox = (e,index) => {
     const newInput = [ ...billOfEntryData ]
     newInput[index].pdBond=!newInput.pdBond
     setBillOfEntryData([...newInput ])
    // setPfCheckBox(!pfCheckBox)
  }
  console.log(billOfEntryData, 'billOfEntryDatabillOfEntryData')

  const [dutyData, setDutyData] = useState([])

  // useEffect(() => {
  //   let dutyDataArr = []
  //   customData?.duty?.forEach((element) => {
  //     dutyDataArr.push(element)
  //   })
  //   setDutyData(dutyDataArr)
  // }, [customData])

  useEffect(() => {
    let temp = []
    let temp2 = []
    if (_get(customData, 'billOfEntry.billOfEntry[0].duty', []).length > 0) {
      _get(customData, 'billOfEntry.billOfEntry[0].duty', []).forEach(
        (val, index) => {
          temp.push({
            percentage: val.percentage || '',
            duty: val.duty,
            amount: val.amount,
            action: false,
          })
          temp2.push({ value: false })
        },
      )
      setDutyData(temp)
      setIsFieldInFocus([...temp2] || [])
    }
  }, [customData])
  console.log(isFieldInFocus, 'isFieldInFocus')
  const handleDutyChange = (name, value,index2,index) => {
    // console.log(name,value,index,"name,value")
   const newInput = [ ...billOfEntryData ]
   newInput[index].duty[index2][name]=value
    setBillOfEntryData([...newInput ])
  }

  const setActions = (index2, val,index) => {
      const newInput = [ ...billOfEntryData ]
      newInput[index].duty[index2].actions=val
      setBillOfEntryData([...newInput ])
    // setDutyData((prevState) => {
    //   const newState = prevState.map((obj, i) => {
    //     if (i == index) {
    //       return { ...obj, actions: val }
    //     }

    //     return obj
    //   })

    //   return newState
    // })

    // let newInput = { ...billOfEntryData }
    // newInput.duty = dutyData
    // setBillOfEntryData(newInput)
  }
  const onFiledFocus = (index2,e, index) => {
     const newInput = [ ...billOfEntryData ]
      newInput[index].duty[index2].value=true
      setBillOfEntryData([...newInput ])
    // let tempArr2 = [...isFieldInFocus]
    // tempArr2.forEach((val, i) => {
    //   if (i == index) {
    //     val.value = true
    //   }
    // })
    // setIsFieldInFocus([...tempArr2])
  }
  const onFiledBlur = (index2,e, index) => {
    const newInput = [ ...billOfEntryData ]
      newInput[index].duty[index2].value=false
      setBillOfEntryData([...newInput ])
  }
  const handleDeleteRow = (index2,index) => {
      const newInput = [ ...billOfEntryData ]
      let a = newInput[index].duty[index2]
    // setBillOfEntryData([...dutyData.slice(0, index), ...dutyData.slice(index + 1)])

    // setDutyData([...dutyData.slice(0, index), ...dutyData.slice(index + 1)])
    // setIsFieldInFocus([
    //   ...isFieldInFocus.slice(0, index),
    //   ...isFieldInFocus.slice(index + 1),
    // ])
  }

  const removeDoc = (name) => {
    setBillOfEntryData({ ...billOfEntryData, [name]: null })
  }

  const addMoredutyDataRows = (index) => {
        const newInput = [ ...billOfEntryData ]
        newInput[index].duty.push(
          {
          percentage: '',
          duty: '',
          amount: '',
          action: false,
          value:false
         },
        )
         setBillOfEntryData([...newInput ])
    // setDutyData([
    //   ...dutyData,

    //   {
    //     percentage: '',
    //     duty: '',
    //     amount: '',
    //     action: false,
    //   },
    // ])
    // setIsFieldInFocus([
    //   ...isFieldInFocus,

    //   {
    //     value: false,
    //   },
    // ])
  }
  console.log(billOfEntryData, 'billOfEntryData')

  const handleSubmit = () => {
    let isOk = true
    if (billOfEntryData.boeNumber === '') {
      let toastMessage = 'BOE NUMBER CANNOT BE EMPTY'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      isOk = false
    } else if (
      billOfEntryData.boeDate === null ||
      billOfEntryData.boeDate === ''
    ) {
      let toastMessage = 'BOE DATE CANNOT BE EMPTY'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      isOk = false
    } else if (billOfEntryData.boeDetails.currency === '') {
      let toastMessage = 'CURRENCY CANNOT BE EMPTY'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      isOk = false
    } else if (billOfEntryData.boeDetails.currency === '') {
      let toastMessage = 'CURRENCY CANNOT BE EMPTY'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      isOk = false
    } else if (billOfEntryData.boeDetails.invoiceNumber === '') {
      let toastMessage = 'INVOICE NUMBER CANNOT BE EMPTY'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      isOk = false
    } else if (billOfEntryData.boeDetails.invoiceDate === '') {
      let toastMessage = 'INVOICE DATE CANNOT BE EMPTY'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      isOk = false
    } else if (billOfEntryData.boeDetails.invoiceQuantity === '') {
      let toastMessage = 'INVOICE QUANTITY CANNOT BE EMPTY'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      isOk = false
    } else if (billOfEntryData.boeDetails.invoiceValue === '') {
      let toastMessage = 'INVOICE VALUE CANNOT BE EMPTY'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      isOk = false
    } else if (billOfEntryData.boeDetails.conversionRate === '') {
      let toastMessage = 'COVERSION RATE CANNOT BE EMPTY'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      isOk = false
    } else if (
      billOfEntryData.boeDetails.invoiceQuantity > customData?.order?.quantity
    ) {
      let toastMessage =
        'INVOICE QUANTITY SHOULD NOT BE MORE THAN ORDER QUANTITY'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      isOk = false
    } else if (billOfEntryData.document1 === null) {
      let toastMessage = `please upload Boe ${billOfEntryData.boeAssessment === 'Final' ? 'final' : 'provisional'
        }`
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      isOk = false
    } else if (billOfEntryData.document2 === null) {
      let toastMessage = 'please upload Duty Paid Challan '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      isOk = false
    }

    console.log(billOfEntryData.pdBond, 'billOfEntryData.pdBond', pfCheckBox)
    if (billOfEntryData.pdBond) {
      if (billOfEntryData.document3 === null) {
        let toastMessage = 'please upload PD Bond '
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        isOk = false
      }
    }
    if (isOk) {
      console.log('billOfEntryDatasubmit')
      let tempData = { ...billOfEntryData }
      tempData.boeDetails.conversionRate = removePrefixOrSuffix(
        billOfEntryData?.boeDetails?.conversionRate,
      )
      tempData.boeDetails.invoiceQuantity = removePrefixOrSuffix(
        billOfEntryData?.boeDetails?.invoiceQuantity,
      )
      tempData.boeDetails.invoiceValue = removePrefixOrSuffix(
        billOfEntryData?.boeDetails?.invoiceValue,
      )
      const billOfEntry = { billOfEntry: [tempData] }

      const fd = new FormData()
      fd.append('customClearanceId', customData?._id)
      fd.append('billOfEntry', JSON.stringify(billOfEntry))

      let task = 'submit'

      dispatch(UpdateCustomClearance({ fd, task }))
      let id = sessionStorage.getItem('customId')
      dispatch(GetAllCustomClearance(`?customClearanceId=${id}`))
      setComponentId(componentId + 1)
    }
    console.log(isOk, 'billOfEntryDatasubmit1')
  }

  const handleSave = () => {
    let tempData = { ...billOfEntryData }
    tempData.boeDetails.conversionRate = removePrefixOrSuffix(
      billOfEntryData.boeDetails.conversionRate,
    )
    tempData.boeDetails.invoiceQuantity = removePrefixOrSuffix(
      billOfEntryData.boeDetails.invoiceQuantity,
    )
    tempData.boeDetails.invoiceValue = removePrefixOrSuffix(
      billOfEntryData.boeDetails.invoiceValue,
    )
    const billOfEntry = { billOfEntry: [tempData] }
    const fd = new FormData()
    fd.append('customClearanceId', customData?._id)
    fd.append('billOfEntry', JSON.stringify(billOfEntry))

    let task = 'save'

    dispatch(UpdateCustomClearance({ fd, task }))
  }

  // fuction to prevent negative values in input
  const preventMinus = (e) => {
    if (e.code === 'Minus') {
      e.preventDefault()
    }
  }

  const [accessibleValueCalc, setAcc] = useState(0)
  useEffect(() => {
    // setAcc(checkNan((Number(_get(customData, 'billOfEntry.billOfEntry[0].boeDetails.invoiceValue',),)

    setAcc(
      checkNan(
        removePrefixOrSuffix(billOfEntryData?.boeDetails?.invoiceValue) *
        removePrefixOrSuffix(billOfEntryData?.boeDetails?.conversionRate),
      ),
    )
  }, [
    billOfEntryData?.boeDetails?.conversionRate,
    billOfEntryData?.boeDetails?.invoiceValue,
  ])

  useEffect(() => {
    let tempEntryData = { ...billOfEntryData }
    tempEntryData.duty = dutyData
    setBillOfEntryData(tempEntryData)
  }, [dutyData])

  useEffect(() => {
    if (customData) {
      let total = 0
      let data = customData?.order?.transit?.BL?.billOfLanding
      if (data && data.length > 0) {
        for (let i = 0; i <= data.length - 1; i++) {
          total = total + Number(data[i].blQuantity)
        }
      }
      setTotalBl(total)
    }

    if (customData?.billOfEntry?.billOfEntry) {
      let data = _get(customData, 'billOfEntry.billOfEntry', [{}])
      let tempArray =[]
      data.forEach((val,index)=>{
       tempArray.push(

         {
        boeAssessment: val?.boeAssessment,
        pdBond: val?.pdBond,
        billOfEntryFor: _get(
          customData,
          'order.termsheet.transactionDetails.billOfEntity',
          '',
        ),
        boeNumber: val?.boeNumber,
        boeDate: val?.boeDate,

        boeDetails: {
          invoiceQuantity: val?.boeDetails?.invoiceQuantity,
          invoiceQuantityUnit: val?.boeDetails?.invoiceQuantityUnit,
          currency: val?.boeDetails?.currency,
          conversionRate: val?.boeDetails?.conversionRate || '',
          invoiceNumber: val?.boeDetails?.invoiceNumber,
          invoiceValue: val?.boeDetails?.invoiceValue,
          invoiceValueCurrency: val?.boeDetails?.invoiceValueCurrency,
          invoiceDate: val?.boeDetails?.invoiceDate,
          boeRate: val?.boeDetails?.boeRate,
          bankName: val?.boeDetails?.bankName,
          accessibleValue: accessibleValueCalc
            ? accessibleValueCalc
            : val?.boeDetails?.accessibleValue,
        },
        duty: val.duty,

        document1: val?.document1 ?? null,
        document2: val?.document2 ?? null,
        document3: val?.document3 ?? null,
      }
       )
      })
      
      setBillOfEntryData([...tempArray])
    }
  }, [customData])

  // console.log(
  //   customData,
  //   // billOfEntryData,
  //   'customData')
  const getIndex = (index) => {
    return index + 1
  }
const addNewRow=()=>{
  console.log("SDfsdfs")
  setBillOfEntryData([
      ...billOfEntryData,
   {
    boeAssessment: '',
    pdBond: false,
    billOfEntryFor: customData?.order?.termsheet?.transactionDetails?.billOfEntity ?? '',
    boeNumber: '',
    boeDate: '',

    boeDetails: {
      invoiceQuantity: '',
      invoiceQuantityUnit: '',
      currency: 'INR',
      conversionRate: '',
      invoiceNumber: '',
      invoiceValue: '',
      invoiceValueCurrency: '',
      invoiceDate: '',
      boeRate: '',
      bankName: '',
      accessibleValue: accessibleValueCalc,
    },
    duty: [
      {
        duty: dutyData?.duty,
        amount: dutyData?.amount,
      },
    ],

    document1: null,
    document2: null,
    document3: null,
  }
    ])
}
console.log(billOfEntryData,"billOfEntryData")
  console.log('data', billOfEntryData?.billOfEntryFor)
  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} border_color`}>
          <div className={`${styles.wrapper} border_color p-2 card`}>
            <div className="d-lg-flex align-items-center d-inline-block  pl-4">
              <h2 className="mb-0">Shipment Type</h2>
              <div className={`${styles.radio_form} ml-lg-5 ml-n4 d-flex align-items-center`}>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className={styles.radio_group}>
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Bulk"
                      checked={isShipmentTypeBULK}
                      disabled={!isShipmentTypeBULK}
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Liner"
                      disabled={isShipmentTypeBULK}
                      checked={!isShipmentTypeBULK}
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {billOfEntryData.map((val,index)=>{
            return(
              <>
              <div className={`${styles.main} vessel_card card border_color`}>
            <div
              className={`${styles.head_container} card-header align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Bill of Entry</h3>

              <button className={styles.add_btn} 
              onClick={(e)=>{
                 
                  addNewRow()}}
              >
                <span className={styles.add_sign}
                
                >+</span>Add
              </button>
            </div>
            <div className={`${styles.dashboard_form} card-body`}>
              <div className="row">
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.radio_form} p-0 mt-n3`}>
                    <div className={`${styles.label} text`}>BOE Assessment</div>
                    {['radio'].map((type) => (
                      <div
                        key={`inline-${type}`}
                        className={styles.radio_group}
                      >
                        <Form.Check
                          className={styles.radio}
                          inline
                          label="Provisional"
                          checked={
                            val.boeAssessment === 'Provisional'
                          }
                          onChange={() => {
                            saveBillOfEntryData('boeAssessment', 'Provisional',index)
                          }}
                          // name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          className={styles.radio}
                          inline
                          label="Final"
                          checked={val.boeAssessment === 'Final'}
                          onChange={() => {
                            saveBillOfEntryData('boeAssessment', 'Final',index)
                          }}
                          // name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={`${styles.form_group} col-lg-6 col-md-6 col-sm-6  mt-4`}
                >
                  <div className={`${styles.label} text`}>PD Bond</div>
                  <div className={`${styles.theme} d-flex align-items-center`}>
                    <div
                      className={`${styles.toggle_label} form-check-label mr-3`}
                    >
                      No
                    </div>
                    <label className={`${styles.switch} mb-0`}>
                      <input
                        onChange={(e) => handlePfCheckBox(e,index)}
                        type="checkbox"
                        checked={val.pdBond ? 'checked' : ''}
                      />
                      <span
                        className={`${styles.slider} ${styles.round}`}
                      ></span>
                    </label>
                    <div
                      className={`${styles.toggle_label} form-check-label ml-3`}
                    >
                      Yes
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <select
                      name="billOfEntryFor"
                      onChange={(e) =>
                        saveBillOfEntryData(e.target.name, e.target.value,index)
                      }
                      value={val?.billOfEntryFor}
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option disabled selected>
                        Select an option
                      </option>
                      <option value="Home Consumption">Home Consumption</option>
                      <option value="Into-Bond">Into-Bond</option>
                      <option value="EX-Bond">EX-Bond </option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Bill of Entry for
                    </label>
                    <img
                      className={`${styles.arrow} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="number"
                    onWheel={(event) =>
                      event.currentTarget.blur()
                    }
                    name="boeNumber"
                    required
                    value={val?.boeNumber}
                    onKeyDown={(evt) =>
                      ['e', 'E', '+', '-'].includes(evt.key) &&
                      evt.preventDefault()
                    }
                    onChange={(e) =>
                      saveBillOfEntryData(e.target.name, e.target.value,index)
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    BOE Number<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <DateCalender
                      defaultDate={val.boeDate}
                      name="boeDate"
                      saveDate={saveDate}
                      labelName="BOE Date"
                      index={index}
                    />
                    <img
                      className={`${styles.calanderIcon} image_arrow img-fluid`}
                      src="/static/caldericon.svg"
                      alt="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className={`${styles.line} m-0 border_color`}></hr>
            <div className={`${styles.dashboard_form} card-body`}>
              <h3 className={styles.form_heading}>BOE Details</h3>
              <div className="row mb-5">
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    Commodity <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {customData?.order?.commodity}
                  </span>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    BL Quantity <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {customData?.order?.transit?.BL?.billOfLanding[0]?.blQuantity ? Number(customData?.order?.transit?.BL?.billOfLanding[0]?.blQuantity)?.toLocaleString(
                      'en-IN',
                      {
                        maximumFractionDigits: 2,
                      },
                    ) : ''}{' '} {customData?.order?.unitOfQuantity?.toUpperCase()}
                  </span>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    Vessel Name <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    {_get(
                      customData,
                      'order.vessel.vessels[0].vesselInformation[0].name',
                      '',
                    )}
                  </span>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    Country of origin<strong className="text-danger">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    {_get(
                      customData,
                      'order.vessel.vessels[0].transitDetails.countryOfOrigin',
                      '',
                    )}
                  </span>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    Port Of Discharge
                  </div>
                  <span className={styles.value}>
                    {_get(
                      customData,
                      'order.vessel.vessels[0].transitDetails.countryOfOrigin',
                      '',
                    )}
                  </span>
                </div>

                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    IGM Number<strong className="text-danger">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    {_get(
                      customData,
                      'order.transit.IGM.igmDetails[0].igmNumber',
                      '',
                    )}
                  </span>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    IGM Filing Date<strong className="text-danger">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    {!_get(
                      customData,
                      'order.transit.IGM.igmDetails[0].igmFiling',
                      '',
                    ) ||
                      _get(
                        customData,
                        'order.transit.IGM.igmDetails[0].igmFiling',
                        '',
                      ) === ''
                      ? ''
                      : moment(
                        _get(
                          customData,
                          'order.transit.IGM.igmDetails[0].igmFiling',
                          '',
                        ),
                      ).format('DD-MM-YYYY')}
                  </span>
                </div>
                {_get(customData, 'order.commodity', '').toLowerCase() ===
                  'coal' ? (
                  <>
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className={`${styles.label} text`}>CIRC Number</div>
                      <span className={styles.value}>
                        {_get(
                          customData,
                          'order.transit.CIMS.cimsDetails[0].circNumber',
                          '',
                        )}
                      </span>
                    </div>

                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className={`${styles.label} text`}>CIRC Date</div>
                      <span className={styles.value}>
                        {customData?.order?.transit?.CIMS?.cimsDetails[0]
                          ?.circDate
                          ? moment(
                            customData?.order?.transit?.CIMS?.cimsDetails[0]
                              ?.circDate,
                          ).format('DD-MM-YYYY')
                          : ''}
                      </span>
                    </div>
                  </>
                ) : null}
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <select
                      name="boeDetails.currency"
                      onChange={(e) =>
                        saveBillOfEntryData(e.target.name, e.target.value,index)
                      }
                      value={val?.boeDetails?.currency}
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option selected>Select an option</option>
                      <option value="INR">INR</option>
                      <option value="USD">USD</option>
                      <option value="EURO">EURO</option>
                      <option value="POUND">POUND</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Currency
                    </label>
                    <img
                      className={`${styles.arrow} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    value={val?.boeDetails?.invoiceNumber}
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    name="boeDetails.invoiceNumber"
                    required
                    onKeyDown={(evt) =>
                      ['e', 'E', '+', '-'].includes(evt.key) &&
                      evt.preventDefault()
                    }
                    onChange={(e) =>
                      saveBillOfEntryData(e.target.name, e.target.value,index)
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Invoice No.<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <DateCalender
                      defaultDate={val?.boeDetails?.invoiceDate}
                      name="boeDetails.invoiceDate"
                      saveDate={saveBoeDetaiDate}
                      labelName="Invoice Date"
                      index={index}
                    />
                    <img
                      className={`${styles.calanderIcon} image_arrow img-fluid`}
                      src="/static/caldericon.svg"
                      alt="Search"
                    />
                  </div>
                </div>

                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    // value={billOfEntryData?.boeDetails?.invoiceQuantity}
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    onFocus={(e) => {
                      setIsFieldInFocus2(true), (e.target.type = 'number')
                    }}
                    onBlur={(e) => {
                      setIsFieldInFocus2(false), (e.target.type = 'text')
                    }}
                    // onKeyPress={preventMinus}
                    value={
                      isFieldInFocus2
                        ? val?.boeDetails?.invoiceQuantity
                        : val?.boeDetails?.invoiceQuantity == 0
                          ? ''
                          : Number(
                            val?.boeDetails?.invoiceQuantity,
                          )?.toLocaleString('en-IN') + ` MT`
                    }
                    // value={addPrefixOrSuffix(
                    //   billOfEntryData?.boeDetails?.invoiceQuantity,
                    //   'MT',
                    // )}
                    onWheel={(event) =>
                      event.currentTarget.blur()
                    }
                    name="boeDetails.invoiceQuantity"
                    required
                    onKeyDown={(evt) =>
                      ['e', 'E', '+', '-'].includes(evt.key) &&
                      evt.preventDefault()
                    }
                    onChange={(e) =>
                      saveBillOfEntryData(e.target.name, e.target.value,index)
                    }
                  // required
                  // onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Invoice Quantity<strong className="text-danger">*</strong>
                  </label>
                </div>

                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    // value={billOfEntryData?.boeDetails?.invoiceValue}
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    required
                    onWheel={(event) =>
                      event.currentTarget.blur()
                    }
                    value={addPrefixOrSuffix(
                      val?.boeDetails?.invoiceValue,
                      'USD',
                      'front',
                    )}
                    name="boeDetails.invoiceValue"
                    onChange={(e) =>
                      saveBillOfEntryData(e.target.name, e.target.value,index)
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Invoice Value<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    required
                    value={
                      val?.boeDetails?.conversionRate == 'INR 0'
                        ? ''
                        : addPrefixOrSuffix(
                          val?.boeDetails?.conversionRate,
                          'INR',
                          'front',
                        )
                    }
                    name="boeDetails.conversionRate"
                    onChange={(e) =>
                      conversionRateChange(e.target.name, e.target.value,index)
                    }
                  />

                  <label className={`${styles.label_heading} label_heading`}>
                    Custom Conversion Rate
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    name="boeDetails.accessibleValue"
                    disabled
                    required
                    value={
                      accessibleValueCalc == 'INR 0'
                        ? ''
                        : addPrefixOrSuffix(accessibleValueCalc, 'INR', 'front')
                    }
                    onKeyDown={(evt) =>
                      ['e', 'E', '+', '-'].includes(evt.key) &&
                      evt.preventDefault()
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Assessable Value <strong className="text-danger">*</strong>
                  </label>
                </div>
                {/* <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                     type="number"
                                        onWheel={(event) =>
                                          event.currentTarget.blur()
                                        }
                    required
                    name="boeDetails.boeRate"
                    onChange={(e) =>
                      saveBillOfEntryData(e.target.name, e.target.value)
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    BOE Rate<strong className="text-danger">*</strong>
                  </label>
                </div> */}
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <select
                      name="boeDetails.bankName"
                      onChange={(e) =>
                        saveBillOfEntryData(e.target.name, e.target.value,index)
                      }
                      value={val?.boeDetails?.bankName}
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option selected>Select Bank</option>
                      <option value="HDFC">HDFC</option>
                      <option value="SBI">SBI</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Bank Name
                    </label>
                    <img
                      className={`${styles.arrow} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    AD Code<strong className="text-danger">*</strong>{' '}
                  </div>
                  <span className={styles.value}>22324</span>
                </div>
              </div>

              <div className={`${styles.bill_landing} card border_color mt-4`}>
                <div
                  className={`${styles.vessel_card} d-flex align-items-center`}
                >
                  <div className={`${styles.card_sub_heading}`}>Duty</div>
                </div>
                <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
                    <table
                      className={`${styles.table} border_color table`}
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <thead>
                        <tr>
                          <th>S.NO.</th>
                          <th>DUTY</th>
                          <th>AMOUNT</th>
                          <th>PERCENTAGE</th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {val.duty.length > 0 &&
                          val.duty.map((duty, index2) => (
                            <tr key={index} className="table_row">
                              {!duty.actions ? (
                                <>
                                  <td className={styles.doc_name}>
                                    {getIndex(index2)}
                                  </td>
                                  <td>{duty.duty}</td>
                                  <td>
                                    {duty.amount
                                      ? `${'INR'} ${Number(
                                        duty.amount,
                                      )?.toLocaleString('en-IN')}  `
                                      : ''}
                                  </td>
                                  <td>
                                    {duty.percentage
                                      ? `${Number(
                                        duty?.percentage,
                                      )?.toFixed()} ${'%'}`
                                      : ''}
                                  </td>
                                </>
                              ) : (
                                <>
                                  {' '}
                                  <td className={styles.doc_name}>
                                    {getIndex(index2)}
                                  </td>
                                  <td>
                                    <select
                                      name="duty"
                                      value={duty.duty}
                                      onChange={(e) =>
                                        handleDutyChange(
                                          e.target.name,
                                          e.target.value,
                                          index2,index
                                        )
                                      }
                                      disabled={!duty.actions}
                                      className={`${styles.dutyDropdown} input`}
                                    >
                                      <option>Select an option</option>

                                      <option value="BCD">BCD</option>
                                      <option value="IGST">IGST</option>
                                    </select>
                                  </td>
                                  <td>
                                    <input
                                      onFocus={(e) => {
                                        onFiledFocus(index2,e, index)
                                        // setIsFieldInFocus(true),
                                        e.target.type = 'number'
                                      }}
                                      onBlur={(e) => {
                                        onFiledBlur(index2,e, index)
                                        // setIsFieldInFocus(false),
                                        e.target.type = 'text'
                                      }}
                                      type="text"
                                      className={`${styles.dutyDropdown} input`}
                                      name="amount"
                                      // value={val.amount}
                                      value={
                                        duty.value
                                          ? duty.amount
                                          : `${'INR'}  ` +
                                          Number(duty.amount)?.toLocaleString(
                                            'en-IN',
                                          )
                                      }
                                      disabled={!duty.actions}
                                      onChange={(e) =>
                                        handleDutyChange(
                                          e.target.name,
                                          e.target.value,
                                            index2,index
                                        )
                                      }
                                    />
                                  </td>
                                  <td>
                                    <input
                                      className={`${styles.dutyDropdown} input`}
                                      onFocus={(e) => {
                                        onFiledFocus(index2,e, index)
                                        // setIsFieldInFocus(true),
                                        e.target.type = 'number'
                                      }}
                                      onBlur={(e) => {
                                        onFiledBlur(index2,e, index)
                                        // setIsFieldInFocus(false),
                                        e.target.type = 'text'
                                      }}
                                      type="text"
                                      value={
                                        duty.value
                                          ? duty.percentage
                                          : Number(duty.percentage).toFixed(2) +
                                          `${'%'}`
                                      }
                                      name="percentage"
                                      // value={val.percentage}
                                      onChange={(e) =>
                                        handleDutyChange(
                                          e.target.name,
                                          e.target.value,
                                            index2,index
                                        )
                                      }
                                    />
                                  </td>{' '}
                                </>
                              )}

                              <td>
                                <div>
                                  {!duty.actions ? (
                                    <img
                                      src="/static/mode_edit.svg"
                                      className={`${styles.edit_image} mr-3`}
                                      onClick={() => {
                                        setActions(index2,true,index)
                                      }}
                                    />
                                  ) : (
                                    <>
                                      <img
                                        src="/static/save-3.svg"
                                        className={`${styles.edit_image} mr-3`}
                                        alt="save"
                                        onClick={(e) => {
                                          setActions(index2,false,index)
                                        }}
                                      />
                                    </>
                                  )}
                                  <img
                                    src="/static/delete 2.svg"
                                    className={`${styles.edit_image} p-0 border-0 img-fluid`}
                                    style={{ cursor: 'pointer' }}
                                    alt="delete"
                                    onClick={() => handleDeleteRow(index2,index)}
                                  />
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <hr className="mt-0" />
                    <div className="d-flex justify-content-between align-items-center mx-4 ">
                      <div className="d-flex align-items-center">
                        <div className={`${styles.label} text`}>
                          Total Custom Duty:
                        </div>
                        <div className={`${styles.value} ml-2 mt-4`}>
                          INR{' '}{totalCustomDuty()?.toLocaleString('en-In')}
                        </div>
                      </div>
                      <div
                        className={`${styles.add_row} d-flex `}
                        onClick={(e) => {
                          addMoredutyDataRows(index)
                        }}
                      >
                        <span>+</span>
                        <div>Add More Rows</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row ml-auto">
              {_get(customData, 'order.transit.BL.billOfLanding', [{}]).map(

                  (bl, indexbl) => {
                    return (
                      <>
                        {' '}
                        <div
                          key={indexbl}
                          className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                        >
                          <Form.Check aria-label="option 1" />
                          <div className={`${styles.label} text ml-4`}>
                            BL Number{' '}
                            <strong className="text-danger ml-n1">*</strong>
                          </div>
                          <span className={`${styles.value} ml-4`}>
                            {bl?.blNumber}
                          </span>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                        >
                          <div className={`${styles.label} text`}>
                            BL Date{' '}
                            <strong className="text-danger ml-n1">*</strong>{' '}
                          </div>
                          <span className={styles.value}>
                            {bl?.blDate ? moment(bl?.blDate).format('DD-MM-YYYY') : ''}
                          </span>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                        >
                          <div className={`${styles.label} text`}>
                            BL Quantity{' '}
                            <strong className="text-danger ml-n1">*</strong>{' '}
                          </div>
                          <span className={styles.value}>
                            {bl?.blQuantity
                              ? Number(bl?.blQuantity)?.toLocaleString('en-In')
                              : ''}{' '}
                            {customData?.order?.unitOfQuantity.toUpperCase()}
                          </span>
                        </div>
                        <div
                          className="col-lg-3 col-md-4 col-sm-6 text-center"
                          style={{ top: '40px' }}
                        >
                          <img
                            src="/static/preview.svg"
                            className={`${styles.previewImg} img-fluid ml-n4`}
                            alt="Preview"
                            onClick={(e) => {
                              getDoc(bl?.blSurrenderDoc?.path)
                            }}
                          />
                        </div>
                      </>
                    )
                  },
                )}
              </div>
              <hr></hr>
              <div className="text-right">
                <div className={`${styles.total_quantity} text `}>
                  Total:{' '}
                  <span className="form-check-label ml-2">
                    {isNaN(totalBl) ? '' : totalBl?.toLocaleString('en-In')}{' '}
                    {isNaN(totalBl)
                      ? ''
                      : customData?.order?.unitOfQuantity.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table
                  className={`${styles.table} border_color table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                >
                  <thead>
                    <tr>
                      <th width="35%">
                        DOCUMENT NAME{' '}
                        <img
                          className={`${styles.sort_img} mb-1`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>
                      <th>
                        FORMAT{' '}
                        <img
                          className={`${styles.sort_img} mb-1`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>
                      <th>
                        DOCUMENT DATE{' '}
                        <img
                          className={`${styles.sort_img} mb-1`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table_row">
                      {val.boeAssessment === 'Final' ? (
                        <td className={styles.doc_name}>
                          BOE Final
                          <strong className="text-danger ml-1">*</strong>
                        </td>
                      ) : (
                        <td className={styles.doc_name}>
                          BOE Provisional
                          <strong className="text-danger ml-1">*</strong>
                        </td>
                      )}
                      <td>
                        {val.document1 ? (val.document1?.originalName?.toLowerCase().endsWith('.xls') || val.document1?.originalName?.toLowerCase().endsWith('.xlsx')) ? <img
                          src="/static/excel.svg"
                          className="img-fluid"
                          alt="Pdf"
                        /> : (val.document1?.originalName?.toLowerCase().endsWith('.doc') || val.document1?.originalName?.toLowerCase().endsWith('.docx')) ? < img
                          src="/static/doc.svg"
                          className="img-fluid"
                          alt="Pdf"
                        /> : <img
                          src="/static/pdf.svg"
                          className="img-fluid"
                          alt="Pdf"
                        />
                          : null
                        }
                      </td>
                      <td className={styles.doc_row}>
                        {val.document1 === null
                          ? ''
                          : moment(val?.document1?.date).format(
                            'DD-MM-YYYY, h:mm a',
                          )}
                      </td>

                      <td>
                        {val.document1 === null ? (
                          <>
                            <div className={styles.uploadBtnWrapper}>
                              <input
                                type="file"
                                name="document1"
                                accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                onChange={(e) => uploadDoc1(e,index)}
                              />
                              <button className={`${styles.button_upload} btn`}>
                                Upload
                              </button>
                            </div>
                          </>
                        ) : (
                          <div
                            className={`${styles.certificate} text1 d-flex justify-content-between`}
                          >
                            <span>
                              {val?.document1?.originalName}
                            </span>
                            <img
                              onClick={() => removeDoc('document1')}
                              className={`${styles.close_image} image_arrow`}
                              src="/static/close.svg"
                              alt="Close"
                            />{' '}
                          </div>
                        )}
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td className={styles.doc_name}>
                        Duty Paid Challan
                        <strong className="text-danger ml-1">*</strong>
                      </td>
                      <td>
                        {val.document2 ? (val.document2?.originalName?.toLowerCase().endsWith('.xls') || val.document2?.originalName?.toLowerCase().endsWith('.xlsx')) ? <img
                          src="/static/excel.svg"
                          className="img-fluid"
                          alt="Pdf"
                        /> : (val.document2?.originalName?.toLowerCase().endsWith('.doc') || val.document2?.originalName?.toLowerCase().endsWith('.docx')) ? < img
                          src="/static/doc.svg"
                          className="img-fluid"
                          alt="Pdf"
                        /> : <img
                          src="/static/pdf.svg"
                          className="img-fluid"
                          alt="Pdf"
                        />
                          : null
                        }
                      </td>
                      <td className={styles.doc_row}>
                        {val.document2 === null
                          ? ''
                          : moment(val?.document2?.date).format(
                            'DD-MM-YYYY, h:mm a',
                          )}
                      </td>

                      <td>
                        {val?.document2 === null ? (
                          <>
                            <div className={styles.uploadBtnWrapper}>
                              <input
                                type="file"
                                name="document2"
                                accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                onChange={(e) => uploadDoc1(e,index)}
                              />
                              <button className={`${styles.button_upload} btn`}>
                                Upload
                              </button>
                            </div>
                          </>
                        ) : (
                          <div
                            className={`${styles.certificate} text1 d-flex justify-content-between`}
                          >
                            <span>
                              {val?.document2?.originalName}
                            </span>
                            <img
                              onClick={() => removeDoc('document2',index)}
                              className={`${styles.close_image} image_arrow`}
                              src="/static/close.svg"
                              alt="Close"
                            />{' '}
                          </div>
                        )}
                      </td>
                    </tr>
                    {val?.pdBond ? (
                      <tr className="table_row">
                        <td className={styles.doc_name}>
                          PD Bond
                          <strong className="text-danger ml-0">*</strong>
                        </td>
                        <td>
                          {val?.document3 ? (val.document3?.originalName?.toLowerCase().endsWith('.xls') || val.document3?.originalName?.toLowerCase().endsWith('.xlsx')) ? <img
                            src="/static/excel.svg"
                            className="img-fluid"
                            alt="Pdf"
                          /> : (val.document3?.originalName?.toLowerCase().endsWith('.doc') || val.document3?.originalName?.toLowerCase().endsWith('.docx')) ? < img
                            src="/static/doc.svg"
                            className="img-fluid"
                            alt="Pdf"
                          /> : <img
                            src="/static/pdf.svg"
                            className="img-fluid"
                            alt="Pdf"
                          />
                            : null
                          }
                        </td>
                        <td className={styles.doc_row}>
                          {val.document3 === null
                            ? ''
                            : moment(val.document3.date).format(
                              'DD-MM-YYYY, h:mm a',
                            )}
                        </td>
                        <td>
                          {val.document3 === null ? (
                            <>
                              <div className={styles.uploadBtnWrapper}>
                                <input
                                  type="file"
                                  name="document3"
                                  accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                  onChange={(e) => uploadDoc1(e,index)}
                                />
                                <button
                                  className={`${styles.button_upload} btn`}
                                >
                                  Upload
                                </button>
                              </div>
                            </>
                          ) : (
                            <div
                              className={`${styles.certificate} text1 d-flex justify-content-between`}
                            >
                              <span>
                                {val?.document3?.originalName}
                              </span>
                              <img
                                onClick={() => removeDoc('document3',index)}
                                className={`${styles.close_image} image_arrow`}
                                src="/static/close.svg"
                                alt="Close"
                              />{' '}
                            </div>
                          )}
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
              </>
            )
          })}
          <div className="">
            <UploadOther
              orderid={OrderId}
              module="customClearanceAndWarehousing"
              isDocumentName={true}
            />
          </div>
        </div>
        <SaveBar
          handleSave={handleSave}
          rightBtn="Submit"
          rightBtnClick={handleSubmit}
        />
      </div>
    </>
  )
}
