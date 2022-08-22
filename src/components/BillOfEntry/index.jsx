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

export default function Index({ customData, OrderId, uploadDoc }) {
  const isShipmentTypeBULK =
    _get(customData, 'order.vessel.vessels[0].shipmentType', '') == 'Bulk'
  const dispatch = useDispatch()

  const [saveContactTable, setContactTable] = useState(false)

  const { customClearance } = useSelector((state) => state.Custom)

  console.log(customClearance, 'this is custom doc')

  const [billOfEntryData, setBillOfEntryData] = useState({
    boeAssessment: '',
    pdBond: true,
    billOfEntryFor: '',
    boeNumber: '',
    boeDate: '',

    boeDetails: {
      invoiceQuantity: '',
      invoiceQuantityUnit: '',
      currency: '',
      conversionRate: '',
      invoiceNumber: '',
      invoiceValue: '',
      invoiceValueCurrency: '',
      invoiceDate: '',
      boeRate: '',
      bankName: '',
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
  })

  const uploadDoc1 = async (e) => {
    let name = e.target.id
    let docs = await uploadDoc(e)

    console.log(docs, uploadDoc(e), 'this is upload response')
    let newInput = { ...billOfEntryData }
    newInput[name] = docs
    setBillOfEntryData(newInput)
  }

  console.log(billOfEntryData, 'THIS IS BILL OF ENTRY USE STATE')

  const saveDate = (value, name) => {
    // console.log(value, name, 'save date')
    const d = new Date(value)
    let text = d.toISOString()
    saveBillOfEntryData(name, text)
  }
  const saveBoeDetaiDate = (value, name) => {
    // console.log(value, name, 'save date')
    const namesplit = name?.split('.')
    const d = new Date(value)
    let text = d.toISOString()
    saveBillOfEntryData(namesplit, text)
  }

  const saveBillOfEntryData = (name, value) => {
    const newInput = { ...billOfEntryData }
    const namesplit = name.split('.')
    namesplit.length > 1
      ? (newInput[namesplit[0]][namesplit[1]] = value)
      : (newInput[name] = value)
    setBillOfEntryData(newInput)
  }

  const [pfCheckBox, setPfCheckBox] = useState(true)

  const handlePfCheckBox = (e) => {
    setPfCheckBox(!pfCheckBox)
    saveBillOfEntryData('pdBond', pfCheckBox)
  }
  console.log(pfCheckBox, 'pfCheckBox')

  const [dutyData, setDutyData] = useState([])

  // useEffect(() => {
  //   let dutyDataArr = []
  //   customData?.duty?.forEach((element) => {
  //     dutyDataArr.push(element)
  //   })
  //   setDutyData(dutyDataArr)
  // }, [customData])

  const handleDutyChange = (name, value, index) => {
    // console.log(name,value,index,"name,value")
    let tempArr = dutyData
    tempArr.forEach((val, i) => {
      if (i == index) {
        val[name] = value
      }
    })
    // console.log(tempArr,"tempArr")
    setDutyData(tempArr)
  }

  const setActions = (index, val) => {
    setDutyData((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, actions: val }
        }

        return obj
      })

      return newState
    })
    let newInput = { ...billOfEntryData }
    newInput.duty = dutyData
    setBillOfEntryData(newInput)
  }

  const handleDeleteRow = (index) => {
    setDutyData([...dutyData.slice(0, index), ...dutyData.slice(index + 1)])
  }

  const addMoredutyDataRows = () => {
    setDutyData([
      ...dutyData,

      {
        sNo: '',
        duty: '',
        amount: '',
        action: false,
      },
    ])
  }

  // const [list, setList] = useState([
  //   {
  //     sNo: '',
  //     duty: '',
  //     amount: '',
  //     action: '',
  //   },
  // ])

  // const onAddClick = () => {
  //   setDutyData([
  //     ...dutyData,
  //     {
  //       sNo: '',
  //       duty: '',
  //       amount: '',
  //       action: '',
  //     },
  //   ])
  // }

  const handleSave = () => {
    const billOfEntry = { billOfEntry: [billOfEntryData] }
    const fd = new FormData()
    fd.append('customClearanceId', customData?._id)
    fd.append('billOfEntry', JSON.stringify(billOfEntry))

    dispatch(UpdateCustomClearance(fd))
  }

  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} mt-3 border_color`}>
          <div className={`${styles.wrapper} border_color p-2 card`}>
            <div className="d-lg-flex align-items-center d-inline-block  pl-4">
              <h2 className="mb-0">Shipment Type</h2>
              <div className={`${styles.radio_form} ml-lg-5 ml-n4`}>
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
          <div
            className={`${styles.main}  vessel_card  mt-4 card border_color`}
          >
            <div
              className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Bill of Entry</h3>

              <button className={styles.add_btn}>
                <span className={styles.add_sign}>+</span>Add
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
                            billOfEntryData.boeAssessment === 'Provisional'
                          }
                          onChange={() => {
                            saveBillOfEntryData('boeAssessment', 'Provisional')
                          }}
                          // name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          className={styles.radio}
                          inline
                          label="Final"
                          checked={billOfEntryData.boeAssessment === 'Final'}
                          onChange={() => {
                            saveBillOfEntryData('boeAssessment', 'Final')
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
                      Yes
                    </div>
                    <label className={styles.switch}>
                      <input
                        onChange={(e) => handlePfCheckBox(e)}
                        type="checkbox"
                        checked={pfCheckBox ? 'checked' : ''}
                      />
                      <span
                        className={`${styles.slider} ${styles.round}`}
                      ></span>
                    </label>
                    <div
                      className={`${styles.toggle_label} form-check-label ml-3`}
                    >
                      No
                    </div>
                  </div>
                </div>

                {!pfCheckBox ? (
                  <>
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <select
                          name="billOfEntryFor"
                          onChange={(e) =>
                            saveBillOfEntryData(e.target.name, e.target.value)
                          }
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                        >
                          <option selected>Select Bill Of Entry For</option>
                          <option value="Into Bond(Warehousing)">
                            Into Bond(Warehousing)
                          </option>
                          <option value="Bond">Bond</option>
                        </select>
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
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
                        name="boeNumber"
                        required
                        onKeyDown={(evt) =>
                          evt.key === 'e' && evt.preventDefault()
                        }
                        onChange={(e) =>
                          saveBillOfEntryData(e.target.name, e.target.value)
                        }
                      />
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        BOE Number<strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <DateCalender
                          name="boeDate"
                          saveDate={saveDate}
                          labelName="BOE Date"
                        />
                        <img
                          className={`${styles.calanderIcon} image_arrow img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <hr className={styles.line}></hr>
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
                    Quantity <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {customData?.order?.quantity} Mt
                  </span>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    Vessel Name <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    {
                      customData?.order?.vessel?.vessels[0]
                        ?.vesselInformation[0]?.name
                    }
                  </span>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    Country of origin<strong className="text-danger">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    {
                      customData?.order?.vessel?.vessels[0]?.transitDetails
                        ?.countryOfOrigin
                    }
                  </span>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    Port Of Discharge
                  </div>
                  <span className={styles.value}>
                    {
                      customData?.order?.vessel?.vessels[0]?.transitDetails
                        ?.countryOfOrigin
                    }
                  </span>
                </div>

                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    IGM Number<strong className="text-danger">*</strong>{' '}
                  </div>
                  <span className={styles.value}>1E3IOH2FIUU80</span>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    IGM Filing Date<strong className="text-danger">*</strong>{' '}
                  </div>
                  <span className={styles.value}>22-02-2022</span>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>CIRC Number</div>
                  <span className={styles.value}>
                    {
                      customData?.order?.transit?.CIMS?.cimsDetails[0]
                        ?.circNumber
                    }
                  </span>
                </div>

                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>CIRC Date</div>
                  <span className={styles.value}>
                    {moment(
                      customData?.order?.transit?.CIMS?.cimsDetails[0]
                        ?.circNumber,
                    ).format('dd-mm-yyyy')}
                  </span>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <select
                      name="boeDetails.currency"
                      onChange={(e) =>
                        saveBillOfEntryData(e.target.name, e.target.value)
                      }
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option selected>Choose Currency</option>
                      <option value="USD">USD</option>
                      <option value="INR">INR</option>
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
                    className={`${styles.input_field} input form-control`}
                    type="number"
                    name="boeDetails.invoiceNumber"
                    required
                    onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                    onChange={(e) =>
                      saveBillOfEntryData(e.target.name, e.target.value)
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
                      name="boeDetails.invoiceDate"
                      saveDate={saveBoeDetaiDate}
                      labelName="Invoice Date"
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
                    className={`${styles.input_field} input form-control`}
                    type="number"
                    name="boeDetails.invoiceQuantity"
                    onChange={(e) =>
                      saveBillOfEntryData(e.target.name, e.target.value)
                    }
                    required
                    onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Invoice Quantity<strong className="text-danger">*</strong>
                  </label>
                </div>

                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="number"
                    required
                    onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                    name="boeDetails.invoiceValue"
                    onChange={(e) =>
                      saveBillOfEntryData(e.target.name, e.target.value)
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
                    type="number"
                    name="boeDetails.conversionRate"
                    required
                    onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                    onChange={(e) =>
                      saveBillOfEntryData(e.target.name, e.target.value)
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Conversion Rate<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    Assessable Value<strong className="text-danger">*</strong>{' '}
                  </div>
                  <span className={styles.value}>24,000</span>
                </div>
                {/* <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="number"
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
                        saveBillOfEntryData(e.target.name, e.target.value)
                      }
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
                <div className={`${styles.vessel_card} mt-3`}>
                  <div className={`${styles.card_sub_heading}`}>Duty</div>
                </div>
                <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
                    <table
                      className={`${styles.table} table mt-5`}
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
                        {/* <tr className="table_row">
                          <td className={styles.doc_name}>1</td>
                          <td>BCD</td>
                          <td>24,000</td>
                          <td className="text-right">
                            <div>
                              {!saveContactTable ? (
                                <img
                                  src="/static/mode_edit.svg"
                                  className={`${styles.edit_image} mr-3 img-fluid`}
                                  onClick={() => {
                                    setContactTable(true)
                                  }}
                                />
                              ) : (
                                <img
                                  src="/static/save-3.svg"
                                  className={`${styles.edit_image} mr-3 img-fluid`}
                                  alt="save"
                                  onClick={(e) => {
                                    setContactTable(false)
                                  }}
                                />
                              )}
                              <img
                                src="/static/delete 2.svg"
                                className="img-fluid"
                                style={{ cursor: 'pointer' }}
                                alt="delete"
                                onClick={() => handleDeleteRow(index)}
                              />
                            </div>
                          </td>
                        </tr> */}

                        {dutyData.length > 0 &&
                          dutyData.map((val, index) => (
                            <tr key={index} className="table_row">
                              <td className={styles.doc_name}>{index + 1}</td>
                              <td>
                                <select
                                  name="duty"
                                  onChange={(e) =>
                                    handleDutyChange(
                                      e.target.name,
                                      e.target.value,
                                      index,
                                    )
                                  }
                                  disabled={!val.actions}
                                  className={`${styles.dutyDropdown}`}
                                >
                                  <option>Select an option</option>
                                  <option>{val.duty}</option>
                                  <option value="BCD">BCD</option>
                                  <option value="IGST">IGST</option>
                                </select>
                              </td>
                              <td>
                                <input
                                  className={`${styles.dutyDropdown}`}
                                  name="amount"
                                  disabled={!val.actions}
                                  onChange={(e) =>
                                    handleDutyChange(
                                      e.target.name,
                                      e.target.value,
                                      index,
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  className={`${styles.dutyDropdown}`}
                                  onChange={(e) =>
                                    handleDutyChange(
                                      e.target.name,
                                      e.target.value,
                                      index,
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <div>
                                  {!val.actions ? (
                                    <img
                                      src="/static/mode_edit.svg"
                                      className={`${styles.edit_image} mr-3 img-fluid`}
                                      onClick={() => {
                                        setActions(index, true)
                                      }}
                                    />
                                  ) : (
                                    <img
                                      src="/static/save-3.svg"
                                      className={`${styles.edit_image} mr-3 img-fluid`}
                                      alt="save"
                                      onClick={(e) => {
                                        setActions(index, false)
                                      }}
                                    />
                                  )}
                                  <img
                                    src="/static/delete 2.svg"
                                    className="img-fluid"
                                    style={{ cursor: 'pointer' }}
                                    alt="delete"
                                    onClick={() => handleDeleteRow(index)}
                                  />
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <hr className="mt-0" />
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex mt-2">
                        <div
                          className={`${styles.label} text`}
                          style={{ marginLeft: '30px' }}
                        >
                          Total Custom Duty:
                        </div>
                        {/* <div className={`${styles.value} ml-2 mt-n1`}>
                          4,000
                        </div> */}
                      </div>
                      <div
                        className={`${styles.add_row} mr-3 mt-n2 d-flex `}
                        onClick={(e) => {
                          addMoredutyDataRows()
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
                <div
                  className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                >
                  <Form.Check aria-label="option 1" />
                  <div className={`${styles.label} text ml-4`}>
                    BL Number <strong className="text-danger ml-n1">*</strong>
                  </div>
                  {/* <span className={`${styles.value} ml-4`}>2345678</span> */}
                </div>
                <div
                  className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    BL Date <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  {/* <span className={styles.value}>22-02-2022</span> */}
                </div>

                <div
                  className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    BL Quantity <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  {/* <span className={styles.value}>4,000 MT</span> */}
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 text-center"
                  style={{ top: '40px' }}
                >
                  <img
                    src="/static/preview.svg"
                    className={`${styles.previewImg} img-fluid ml-n4`}
                    alt="Preview"
                  />
                </div>
                <div
                  className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                >
                  <Form.Check aria-label="option 1" />
                  <div className={`${styles.label} text ml-4`}>
                    BL Number <strong className="text-danger ml-n1">*</strong>
                  </div>
                  {/* <span className={`${styles.value} ml-4`}>2345678</span> */}
                </div>
                <div
                  className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    BL Date <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  {/* <span className={styles.value}>22-02-2022</span> */}
                </div>

                <div
                  className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                >
                  <div className={`${styles.label} text`}>
                    BL Quantity <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  {/* <span className={styles.value}>4,000 MT</span> */}
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 text-center"
                  style={{ top: '40px' }}
                >
                  <img
                    src="/static/preview.svg"
                    className={`${styles.previewImg} img-fluid ml-n4`}
                    alt="Preview"
                  />
                </div>
              </div>
              <hr></hr>
              <div className="text-right">
                <div className={`${styles.total_quantity} text `}>
                  Total: <span className="form-check-label ml-2"></span>
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
                      <td className={styles.doc_name}>
                        BOE Provisional
                        <strong className="text-danger ml-0">*</strong>
                      </td>
                      <td>
                        <img
                          src="/static/pdf.svg"
                          className="img-fluid"
                          alt="Pdf"
                        />
                      </td>
                      {/* <td className={styles.doc_row}>28-02-2022,5:30 PM</td> */}
                      <td>
                        {true ? (
                          <>
                            <div className={styles.uploadBtnWrapper}>
                              <input
                                type="file"
                                name="myfile"
                                accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                onChange={(e) => uploadDocument1(e)}
                              />
                              <button className={`${styles.button_upload} btn`}>
                                Upload
                              </button>
                            </div>
                            {/* <div className={styles.uploadBtnWrapper}>
                        <input
                          type="file"
                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                          onChange={(e) => uploadDocument1(e)}
                          name="myfile"
                        />
                        <button  className={`${styles.uploadDoc} btn`}>
                          Upload
                        </button>
                        </div> */}
                          </>
                        ) : (
                          <div className={styles.certificate}>
                            {/* {lcDoc?.lcDraftDoc?.name} */}
                            <img
                              className={`${styles.close_image} float-right m-2 img-fluid`}
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
                        <strong className="text-danger ml-0">*</strong>
                      </td>
                      <td>
                        <img
                          src="/static/pdf.svg"
                          className="img-fluid"
                          alt="Pdf"
                        />
                      </td>
                      {/* <td className={styles.doc_row}>28-02-2022,5:30 PM</td> */}
                      <td>
                        {true ? (
                          <>
                            <div className={styles.uploadBtnWrapper}>
                              <input
                                type="file"
                                name="myfile"
                                accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                onChange={(e) => uploadDocument1(e)}
                              />
                              <button className={`${styles.button_upload} btn`}>
                                Upload
                              </button>
                            </div>
                            {/* <div className={styles.uploadBtnWrapper}>
                        <input
                          type="file"
                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                          onChange={(e) => uploadDocument1(e)}
                          name="myfile"
                        />
                        <button  className={`${styles.uploadDoc} btn`}>
                          Upload
                        </button>
                        </div> */}
                          </>
                        ) : (
                          <div className={styles.certificate}>
                            {/* {lcDoc?.lcDraftDoc?.name} */}
                            <img
                              className={`${styles.close_image} float-right m-2 img-fluid`}
                              src="/static/close.svg"
                              alt="Close"
                            />{' '}
                          </div>
                        )}
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td className={styles.doc_name}>
                        PD Bond
                        <strong className="text-danger ml-0">*</strong>
                      </td>
                      <td>
                        <img
                          src="/static/pdf.svg"
                          className="img-fluid"
                          alt="Pdf"
                        />
                      </td>
                      {/* <td className={styles.doc_row}>28-02-2022,5:30 PM</td> */}
                      <td>
                        {true ? (
                          <>
                            <div className={styles.uploadBtnWrapper}>
                              <input
                                type="file"
                                name="myfile"
                                accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                onChange={(e) => uploadDocument1(e)}
                              />
                              <button className={`${styles.button_upload} btn`}>
                                Upload
                              </button>
                            </div>
                            {/* <div className={styles.uploadBtnWrapper}>
                        <input
                          type="file"
                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                          onChange={(e) => uploadDocument1(e)}
                          name="myfile"
                        />
                        <button  className={`${styles.uploadDoc} btn`}>
                          Upload
                        </button>
                        </div> */}
                          </>
                        ) : (
                          <div className={styles.certificate}>
                            {/* {lcDoc?.lcDraftDoc?.name} */}
                            <img
                              className={`${styles.close_image} float-right m-2 img-fluid`}
                              src="/static/close.svg"
                              alt="Close"
                            />{' '}
                          </div>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-5">
            <UploadOther
              orderid={OrderId}
              module="CustomClearanceAndWarehousing"
              isDocumentName={true}
            />
          </div>
        </div>
        <SaveBar handleSave={handleSave} rightBtn="Submit" />
      </div>
    </>
  )
}
