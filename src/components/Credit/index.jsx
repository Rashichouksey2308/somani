/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { UploadDocument } from 'redux/registerBuyer/action'
import { phoneValidation } from 'utils/helper'
import styles from './index.module.scss'
import DateCalender from '../DateCalender'

const index = ({
  creditDetail,
  keyAddDataArr,
  saveProductData,
  saveSupplierData,
  keyAddData,
  debtData,
  addDebtArr,
  personData,
  addPersonArr,
}) => {
  // console.log(creditDetail, 'this is credit detail')

  const dispatch = useDispatch()

  const [saveTable, setSaveTable] = useState(false)

  const [saveContactTable, setContactTable] = useState(false)

  const { gstDocument } = useSelector((state) => state.buyer)

  const [keyAddressData, setKeyAddressData] = useState({
    GSTIN: '',
    GSTIN_document: {
      name: gstDocument?.name,
      path: gstDocument?.path,
      date: gstDocument?.date,
    },
    addressType: '',
    branch: '',
    city: '',
    state: '',
    email: '',
    completeAddress: '',
    contact: {
      callingCode: null,
      number: null,
    },
    pinCode: null,
  })

  //const [deleteRow, setDeleteRow] = useState(true)

  const [debt, setDebtData] = useState({
    bankName: '',
    conduct: '',
    limit: null,
    limitType: '',
  })

  const handleDebtChange = (name, value) => {
    const newInput = { ...debtData }
    newInput[name] = value
    setDebtData(newInput)
  }

  const onDebtSave = () => {
    addDebtArr(debt)
  }

  // const [keyPerson, setKeyPerson] = useState({
  //   personName: '',
  //   designationPerson: '',
  //   departmentPerson: null,
  //   contactNo: '',
  //   emailId: ''
  // })

  // const handleKeyPerson = (name, value) => {
  //   const newInput = { ...keyAddData }
  //   newInput[name] = value
  //   setKeyPerson(newInput)
  // }

  // const onKeyPersonSave = () => {
  //   addPersonArr(keyPerson)
  // }

  const [keyPersonData, setKeyPersonData] = useState(
    personData,
    // {
    //   contact: {
    //     callingCode: '',
    //     number: '',
    //   },
    //   department: '',
    //   designation: '',
    //   email: '',
    //   name: '',
    // },
  )

  useEffect(() => {
    setKeyPersonData(personData)
  }, [personData])

  // console.log(keyPersonData[0]['contact']['number'], "kksksksk")

  const handlePersonChange = (e, key) => {
    const newInput = { ...keyPersonData }
    if (e.target.name.split('.').length > 1) {
      newInput[key]['contact']['number'] = e.target.value
    } else {
      newInput[key][e.target.name] = e.target.value
    }
    setKeyPersonData(newInput)
  }

  const handleChange = (name, value) => {
    const newInput = { ...keyAddressData }
    newInput[name] = value
    // console.log(newInput)
    setKeyAddressData(newInput)
  }

  const mobileFunction = (e) => {
    const newObj = { ...keyAddressData }
    newObj.contact.number = e.target.value
    setKeyAddressData(newObj)
  }

  const personMobileFunction = (e) => {
    const newObj = { ...keyPersonData }
    newObj.contact.number = e.target.value
    setKeyPersonData(newObj)
  }

  const uploadDocument = (e) => {

    const fd = new FormData()
    fd.append('gstDocument', e.target.files[0])
    dispatch(UploadDocument(fd))
  }

  const handleClick = () => {
    keyAddDataArr(keyAddressData)
  }

  const saveDate = (value, name) => {
    const d = new Date(value)
    let text = d.toISOString()
    saveProductData(name, text)
  }

  const saveSupplierDate = (value, name) => {
    const d = new Date(value)
    let text = d.toISOString()
    saveSupplierData(name, text)
  }

  return (
    <>
      <div className={`${styles.main} card border_color`}>
        <div
          className={`${styles.head_container} border_color card-header d-flex justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#productSummary"
          aria-expanded="true"
          aria-controls="productSummary"
        >
          <h3 className={`${styles.heading} mb-0`}>Product Summary</h3>
          <span>+</span>
        </div>
        <div
          id="productSummary"
          className="collapse"
          aria-labelledby="productSummary"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.dashboard_form} card-body`}>
            <div className="row">
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="number"
                  defaultValue={
                    creditDetail?.productSummary?.monthlyProductionCapacity
                  }
                  name="monthlyProductionCapacity"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Monthly Production Capacity
                  <strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="number"
                  defaultValue={
                    creditDetail?.productSummary?.capacityUtilization
                  }
                  name="capacityUtilization"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Capacity Utilization<strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="number"
                  defaultValue={
                    creditDetail?.productSummary?.averageStockOfCommodity
                  }
                  name="averageStockOfCommodity"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Average Stock of Commodity
                  <strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="number"
                  defaultValue={
                    creditDetail?.productSummary?.averageStockInTransit
                  }
                  name="averageStockInTransit"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Average Stock in Transit
                  <strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="number"
                  defaultValue={creditDetail?.productSummary?.availableStock}
                  name="availableStock"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Available Stock<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="number"
                  defaultValue={
                    creditDetail?.productSummary?.dailyConsumptionOfCommodity
                  }
                  name="dailyConsumptionOfCommodity"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Daily Consumption of Commodity
                  <strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                 <div className="d-flex">
                    <DateCalender name='stockCoverageOfCommodity' saveDate={saveDate} labelName='Stock Coverage of Commodity'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                      
                    </div>  
                {/* <input
                  className={`${styles.input_field} input form-control`}
                  type="date"
                  defaultValue={
                    creditDetail?.productSummary?.stockCoverageOfCommodity?.split(
                      'T',
                    )[0]
                  }
                  name="stockCoverageOfCommodity"
                  onChange={(e) => saveDate(e)}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Stock Coverage of Commodity
                  <strong className="text-danger">*</strong>
                </label> */}
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
               <div className='d-flex'>
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="existingProcurementOfCommodity"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value)
                  }}
                >
                  <option value={creditDetail?.productSummary
                        ?.existingProcurementOfCommodity}>
                    {
                      creditDetail?.productSummary
                        ?.existingProcurementOfCommodity
                    }
                  </option>
                  <option value="Import">Import</option>
                  <option value="Manufacturers">Manufacturers</option>
                </select>
                <label className={`${styles.label_heading} label_heading`}>
                  Existing Procurement of Commodity
                  <strong className="text-danger">*</strong>
                </label>
                <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="existingSuppliers"
                    defaultValue={creditDetail?.productSummary?.existingSuppliers.map(
                      (e) => {
                        return `${e}`
                      },
                    )}
                    onBlur={(e) => {
                      saveProductData(e.target.name, e.target.value.split(','))
                    }}
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Existing Supplier(s)
                    <strong className="text-danger">*</strong>
                  </label>
                  <img
                    className={`${styles.search_image} img-fluid`}
                    src="/static/search-grey.svg"
                    alt="Search"
                  />
                </div>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
             <div className='d-flex'>
                <select
                  className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                  name="contributionCommoditySenstivity"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value)
                  }}
                >
                  <option value={creditDetail?.productSummary
                        ?.contributionCommoditySenstivity}>
                    {
                      creditDetail?.productSummary
                        ?.contributionCommoditySenstivity
                    }
                  </option>
                  <option value="Very High">Very High</option>
                  <option value="High">High</option>
                  <option value="Low">Low</option>
                  <option value="Very Low">Very Low</option>
                </select>
                <label className={`${styles.label_heading} label_heading`}>
                  Commodity Contribution Senstivity
                  <strong className="text-danger">*</strong>
                </label>
                <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="number"
                  defaultValue={
                    creditDetail?.productSummary?.AvgMonthlyElectricityBill
                  }
                  name="AvgMonthlyElectricityBill"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Avg. Monthly Electricity Bill
                  <strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="existingCHA"
                    defaultValue={creditDetail?.productSummary?.existingCHA.map(
                      (e) => {
                        return `${e}`
                      },
                    )}
                    onBlur={(e) => {
                      saveProductData(e.target.name, e.target.value.split(','))
                    }}
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Existing CHA(s)<strong className="text-danger">*</strong>
                  </label>
                  <img
                    className={`${styles.search_image} img-fluid`}
                    src="/static/search-grey.svg"
                    alt="Search"
                  />
                </div>
              </div>
             
  
            
            </div>
          <div className={`${styles.saveButton} m-0 mt-4`}>
              <div className={`${styles.button} ml-0`} ><span>Save</span></div>
          </div>
          </div>
        </div>
      </div>

      <div className={`${styles.main} card border_color`}>
        <div
          className={`${styles.head_container} card-header d-flex justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#supplierCred"
          aria-expanded="true"
          aria-controls="supplierCred"
        >
          <h3 className={`${styles.heading}`}> {`Supplier's Credentials`}</h3>
          <span>+</span>
        </div>
        <div
          id="supplierCred"
          className="collapse"
          aria-labelledby="supplierCred"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.dashboard_form} card-body`}>
            <div className="row">
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className='d-flex'>
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="supplierName"
                  onChange={(e) => {
                    saveSupplierData(e.target.name, e.target.value)
                  }}
                >
                  <option>
                    {creditDetail?.supplierCredential?.supplierName}
                  </option>
                  <option>Bhutani Traders</option>
                  <option>Ramakrishna</option>
                </select>
                <label className={`${styles.label_heading} label_heading`}>
                  Supplier Name<strong className="text-danger">*</strong>
                </label>
                <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  defaultValue={
                    creditDetail?.supplierCredential?.shipmentNumber
                  }
                  name="shipmentNumber"
                  onChange={(e) => {
                    saveSupplierData(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  No. of Shipments<strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  defaultValue={
                    creditDetail?.supplierCredential?.consigneesNumber
                  }
                  name="consigneesNumber"
                  onChange={(e) => {
                    saveSupplierData(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  No. of Consignees<strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  defaultValue={creditDetail?.supplierCredential?.HSCodesNumber}
                  name="HSCodesNumber"
                  onChange={(e) => {
                    saveSupplierData(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  No. of HS codes<strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className='d-flex'>
                <select
                  className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                  defaultValue={
                    creditDetail?.supplierCredential?.countryOfOrigin
                  }
                  name="countryOfOrigin"
                  onChange={(e) => {
                    saveSupplierData(e.target.name, e.target.value)
                  }}
                >
                  <option>India</option>
                  <option>USA</option>
                </select>
                <label className={`${styles.label_heading} label_heading`}>
                  Country of Origin<strong className="text-danger">*</strong>
                </label>
                <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className='d-flex'>
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  defaultValue={
                    creditDetail?.supplierCredential?.portOfDestination
                  }
                  name="portOfDestination"
                  onChange={(e) => {
                    saveSupplierData(e.target.name, e.target.value)
                  }}
                >
                   <option>India</option>
                  <option>USA</option>
                </select>
                <label className={`${styles.label_heading} label_heading`}>
                  Port of Destination<strong className="text-danger">*</strong>
                </label>
                 <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                    <DateCalender name='oldestShipmentDate' saveDate={saveSupplierDate} labelName='Oldest Shipment Date'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                      
                    </div>  
               {/* <div className={`d-flex`}>
                  <input
                  className={`${styles.input_field} input form-control`}
                  type="date"
                  defaultValue={
                    creditDetail?.supplierCredential?.oldestShipmentDate?.split(
                      'T',
                    )[0]
                  }
                  name="oldestShipmentDate"
                  onChange={(e) => saveSupplierDate(e)}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Oldest Shipment Date<strong className="text-danger">*</strong>
                </label>
                 <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
               </div> */}
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                 <div className="d-flex">
                    <DateCalender name='latestShipmentDate' saveDate={saveSupplierDate} labelName='Latest Shipment Date'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                      
                    </div> 
                {/* <input
                  className={`${styles.input_field} input form-control`}
                  type="date"
                  defaultValue={
                    creditDetail?.supplierCredential?.latestShipmentDate?.split(
                      'T',
                    )[0]
                  }
                  name="latestShipmentDate"
                  onChange={(e) => saveSupplierDate(e)}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Latest Shipment Date<strong className="text-danger">*</strong>
                </label> */}
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} ${styles.percent} input form-control`}
                  required
                  type="text"
                  defaultValue={
                    creditDetail?.supplierCredential?.commodityOfTotalTrade
                  }
                  name="commodityOfTotalTrade"
                  onChange={(e) => {
                    saveSupplierData(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Commodity to Total Trade % -24M
                  <strong className="text-danger">*</strong>
                </label>
              </div>
              <div className="col-12 mt-4">
                <label className={`${styles.label_heading}`}>Remarks</label>
                <input
                  as="textarea"
                  rows={3}
                  className={`${styles.remark_field} input form-control`}
                  name="remarks"
                  defaultValue={creditDetail?.supplierCredential?.remarks}
                  onChange={(e) => {
                    saveSupplierData(e.target.name, e.target.value)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.main} card border_color`}>
        <div
          className={`${styles.head_container} card-header d-flex justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#keyContact"
          aria-expanded="true"
          aria-controls="keyContact"
        >
          <h3 className={`${styles.heading} mb-0`}>Key Contact Person</h3>
          <span>+</span>
        </div>
        <div
          id="keyContact"
          className="collapse"
          aria-labelledby="keyContact"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.datatable} card-body datatable`}>
           <div className={`${styles.table_scroll_outer}`}>
            <div  className={`${styles.table_scroll_inner}`}>
             <table
              className={`${styles.table} table`}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>DESIGNATION</th>
                  <th>DEPARTMENT</th>
                  <th>CONTACT NO.</th>
                  <th>EMAIL ID</th>
                  <th></th>
                </tr>
              </thead>
              {personData?.map((person, index) => (
                <tbody key={index}>
                  
                  <tr className="table_credit">
                    <td>
                      <input
                        className="input font-weight-bold"
                        defaultValue={person.name}
                        name="name"
                        onChange={(e) => handlePersonChange(e, index)}
                        type="text"
                        readOnly={!saveContactTable}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        defaultValue={person.designation}
                        name="designation"
                        onChange={(e) => handlePersonChange(e, index)}
                        type="text"
                        readOnly={!saveContactTable}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        defaultValue={person.department}
                        name="department"
                        onChange={(e) => handlePersonChange(e, index)}
                        type="text"
                        readOnly={!saveContactTable}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        defaultValue={person.contact.number}
                        // name='contact.number'
                        // onChange={(e)=>{handlePersonChange(e,index)}}
                        onChange={(e) => {
                          if (phoneValidation(e.target.value)) {
                            personMobileFunction(e)
                          } else {
                            let toastMessage = 'Enter a valid Phone Number'
                            if (!toast.isActive(toastMessage)) {
                              toast.error(toastMessage, {
                                toastId: toastMessage,
                              })
                            }
                          }
                        }}
                        type="number"
                        readOnly={!saveContactTable}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        defaultValue={person.email}
                        name="email"
                        onChange={(e) => handlePersonChange(e, index)}
                        type="text"
                        readOnly={!saveContactTable}
                      />
                    </td>
                    <td>
                      <div>
                        {!saveContactTable ? (
                          <img
                            src="/static/mode_edit.svg"
                            className={`${styles.edit_image} mr-3 img-fluid`}
                            onClick={(e) => {
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
                              addPersonArr(keyPersonData)
                            }}
                          />
                        )}
                        <img
                          src="/static/delete 2.svg"
                          className="img-fluid"
                          alt="delete"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            </div></div>
            <div className={`${styles.add_row} p-3 d-flex justify-content-end`}>
              <span>+</span>
              <div 
              // onClick={(e) => {
              //                   onKeyPersonSave(keyPerson)
              //                 }}
                              >Add More Rows</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.main} card border_color`}>
        <div
          className={`${styles.head_container} card-header d-flex justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#keyAddress"
          aria-expanded="true"
          aria-controls="keyAddress"
        >
          <h3 className={`${styles.heading} mb-0`}>Key Addresses</h3>
          <span>+</span>
        </div>
        <div id="keyAddress" className="collapse" aria-labelledby="keyAddress">
          {keyAddData.map((address, index) => (
            <div key={index} className={`${styles.dashboard_form} card-body`}>
              <div className="d-flex justify-content-between">
                <div className={`${styles.address_card} value background1`}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <input type="checkbox" />
                      <label className={styles.label}>
                        {address.addressType}
                      </label>
                      <div className={styles.address_values}>
                        <p>{address.completeAddress}</p>
                        <p className="pt-3">
                          <span>Email: </span>
                          {address.email}
                        </p>
                        <p>
                          <span>Phone Number:</span>
                          {address.contact?.number}
                        </p>
                        <p>
                          <span>Branch: </span>
                          {address.branch}
                        </p>
                        <div className="d-flex">
                          <p>
                            {' '}
                            <span>GSTIN: </span>
                            {address.GSTIN}
                          </p>
                          <span className={styles.button}>View</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        className={`${styles.edit_image} img-fluid`}
                        src="/static/mode_edit.svg"
                        alt="Edit"
                      />
                    </div>
                  </div>
                </div>

                {/* <div className={`${styles.address_card} value background1`}>
                <div className="d-flex justify-content-between">
                  <div>
                    <div className={styles.address_values}>
                      <h5>Corporate Office Address</h5>
                      <p>N-11, 29 Tilak Marg, New Delhi</p>
                      <p className="pt-3">
                        <span>Email: </span>skapoor@gmail.com
                      </p>
                      <p>
                        <span>Phone Number:</span>+91 9876543210, +91 9876543210
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      className={`${styles.edit_image} img-fluid`}
                      src="/static/mode_edit.svg"
                      alt="Edit"
                    />
                  </div>
                </div>
              </div> */}
              </div>
              {/* <div className="d-flex justify-content-between"> */}
              {/* <div className={`${styles.address_card} value background1`}>
                <div
                  className={`${styles.address_values} d-flex justify-content-between`}
                >
                  <h5>Factory Address</h5>
                  <div>
                    <img
                      className={`${styles.edit_image} img-fluid mr-3`}
                      src="/static/mode_edit.svg"
                      alt="edit"
                    />
                    <img
                      src="/static/delete 2.svg"
                      className="img-fluid"
                      alt="delete"
                    />
                  </div>
                </div>
                <div className={styles.address_values}>
                  <p className="pt-3">
                    A-44, Sagar Apartments, Tilak Marg, Agra, Uttar Pradesh
                    11008
                  </p>
                  <p className="pt-3">
                    <span>Email: </span>skapoor@gmail.com
                  </p>
                  <p>
                    <span>Phone Number:</span>+91 9876543210, +91 9876543210
                  </p>
                  <p>
                    <span>Branch: </span>Delhi
                  </p>
                  <div className="d-flex">
                    <p>
                      {' '}
                      <span>GSTIN: </span>Gstdt789652Jkv
                    </p>
                    <span className={styles.button}>View</span>
                  </div>
                </div>
              </div> */}
              {/* <div className={`${styles.address_card} value background1`}>
                <div className="d-flex justify-content-between">
                  <div>
                    <div
                      className={`${styles.address_values} d-flex justify-content-between`}
                    >
                      <h5>Warehouse Address</h5>
                      <div>
                        <img
                          className={`${styles.edit_image} img-fluid mr-3`}
                          src="/static/mode_edit.svg"
                          alt="edit"
                        />
                        <img
                          src="/static/delete 2.svg"
                          className="img-fluid"
                          alt="delete"
                        />
                      </div>
                    </div>
                    <div className={`${styles.address_values}`}>
                      <p className="pt-3">
                        A-44, Sagar Apartments, Tilak Marg, Agra, Uttar Pradesh
                        11008
                      </p>
                      <p className="pt-3">
                        <span>Email: </span>skapoor@gmail.com
                      </p>
                      <p>
                        <span>Phone Number:</span>+91 9876543210, +91 9876543210
                      </p>
                      <p>
                        <span>Branch: </span>Delhi
                      </p>
                      <div className="d-flex">
                        <p>
                          {' '}
                          <span>GSTIN: </span>Gstdt789652Jkv
                        </p>
                        <span className={styles.button}>View</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.main} card border_color`}>
        <div
          className={`${styles.head_container} mb-n3 card-header d-flex justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#addAddress"
          aria-expanded="true"
          aria-controls="addAddress"
        >
          <h3 className={`${styles.heading} mb-0`}>Add a new address</h3>
          <img
            src="/static/accordion_close_black.svg"
            className="img-fluid mt-n2 mr-n2"
            alt="Close"
          />
        </div>
        <div
          id="addAddress"
          className="collapse"
          aria-labelledby="addAddress"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.dashboard_form} card-body`}>
            <div className="row">
              <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                <div className='d-flex'>
                <select
                  className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                  name="addressType"
                  onChange={(e) => {
                    handleChange(e.target.name, e.target.value)
                  }}
                >
                  <option>Factory</option>
                  <option>Warehouse</option>
                  <option>Corporate Office</option>
                </select>
                <label className={`${styles.label_heading} label_heading`}>
                  Address Type<strong className="text-danger">*</strong>
                </label>
                <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
              </div>
              <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="pinCode"
                  onChange={(e) => {
                    handleChange(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Pin Code<strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="state"
                  onChange={(e) => {
                    handleChange(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  State<strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-2 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="city"
                  onChange={(e) => {
                    handleChange(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  City<strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="email"
                  onChange={(e) => {
                    handleChange(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Email ID<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="tel"
                  onChange={(e) => {
                    if (phoneValidation(e.target.value)) {
                      mobileFunction(e)
                    } else {
                      let toastMessage = 'Enter a valid Phone Number'
                      if (!toast.isActive(toastMessage)) {
                        toast.error(toastMessage, { toastId: toastMessage })
                      }
                    }
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Phone Number<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-8 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  type="text"
                  required
                  name="completeAddress"
                  onChange={(e) => {
                    handleChange(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Address<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  type="text"
                  name="branch"
                  required
                  onChange={(e) => {
                    handleChange(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Branch<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="GSTIN"
                  onChange={(e) => {
                    handleChange(e.target.name, e.target.value)
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  GSTIN<strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.btn_container} col-md-4`}>
                <button className={`${styles.gst_btn}`}>
                  {' '}
                  <input
                    type="file"
                    name={keyAddressData.GSTIN}
                    // name="myfile"
                    accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                    onChange={(e) => {
                      uploadDocument(e)
                    }}
                  />
                  {/* <img
                    className="img-fluid mr-2 mb-1"
                    src="/static/file_upload.svg"
                    alt="file upload"
                  /> */}
                  GST Doc
                </button>
                <button
                  className={`${styles.add_btn}`}
                  onClick={() => handleClick()}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.main} card border_color`}>
        <div
          className={`${styles.head_container} card-header d-flex justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#debtProfile"
          aria-expanded="true"
          aria-controls="debtProfile"
        >
          <h3 className={`${styles.heading} mb-0`}>Debt Profile</h3>
          <span>+</span>
        </div>
        <div
          id="debtProfile"
          className="collapse"
          aria-labelledby="debtProfile"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.datatable} datatable`}>
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
                      <th>S.NO.</th>
                      <th>BANK NAME</th>
                      <th>LIMIT TYPE</th>
                      <th>LIMIT</th>
                      <th>CONDUCT</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {debtData?.map((profile, index) => (
                      <tr key={index}>
                        <td>{(index += 1)}</td>
                        <td>
                          <select
                            className={`${styles.dropDown} font-weight-bold heading`}
                          >
                            <option>{profile.bankName}</option>
                            <option>SBI</option>
                          </select>
                        </td>
                        <td>
                          <select className={`${styles.dropDown} heading`}>
                            <option>{profile.limitType}</option>
                            <option>Cash Deposit</option>
                          </select>
                        </td>

                        <td>
                          <input
                            className="input"
                            defaultValue={profile.limit}
                            readOnly={!saveTable}
                          />
                        </td>

                        <td>
                          <select className={`${styles.dropDown} heading`}>
                            <option>{profile.conduct}</option>
                            <option>Good</option>
                          </select>
                        </td>
                        <td>
                          <div>
                            {!saveTable ? (
                              <img
                                src="/static/mode_edit.svg"
                                className={`${styles.edit_image} mr-3 img-fluid`}
                                onClick={() => {
                                  setSaveTable(true)
                                }}
                              />
                            ) : (
                              <img
                                src="/static/save-3.svg"
                                className={`${styles.edit_image} mr-3 img-fluid`}
                                alt="save"
                                onClick={(e) => {
                                  setSaveTable(false)
                                }}
                              />
                            )}
                            <img
                              src="/static/delete 2.svg"
                              className={`${styles.delete_image} img-fluid`}
                              // onClick={() => {
                              //   setDeleteRow(deleteRow)
                              // }}
                              alt="delete"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className={`${styles.add_row} p-3 d-flex justify-content-end`}
            onClick={(e) => {
                                onDebtSave(debt)
                              }}>
              <span>+</span>
              <div>Add More Rows</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
