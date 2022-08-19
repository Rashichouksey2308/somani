/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import styles from './index.module.scss'
import { DropdownButton, Dropdown, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import moment from 'moment'
function Index({ handleChange, reviewedProfile }) {
  console.log("🚀 ~ file: index.jsx ~ line 9 ~ Index ~ reviewedProfile", reviewedProfile?.orderValues?.apiResponse)
  const transactionTypeDropdown = ['Import', 'Domestic']
  const commodityDropdown = ['Iron', 'Crude', 'Steel']
  const countryOfOriginDropdown = ['America', 'India', 'Russia']
  const portOfDischargeDropdown = [
    'Mumbai, India',
    'Gujrat, India',
    'VisakhaPatnam, India',
  ]
  const typeOfBusinessDropdown = ['Manufacturer', 'Trader', 'Retail']

  const DropDown = (values, name, disabled) => {
    return (
      <td>
        <div className="d-flex align-items-center">
          <Form.Select
            size="sm"
            name={name}
            className={`${styles.dropDown} ${styles.customSelect} dropDown`}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
            disabled={disabled}
          >
            {' '}
            {values.map((options) => {
              return <option>{options}</option>
            })}{' '}
          </Form.Select>
          <img
            className={`${styles.arrow2} image_arrow img-fluid`}
            src="/static/inputDropDown.svg"
            alt="Search"
          />
        </div>
      </td>
    )
  }

  const clearData = () => {
    document.getElementById('ReviewProfileForm').reset()
  }
  const [fields,setFields]=useState([
    {
      isEdit:true
    },
    {
      isEdit:true
    },
    {
      isEdit:true
    },
    {
      isEdit:true
    },
    {
      isEdit:true
    },
    {
      isEdit:true
    },
    {
      isEdit:true
    },
    {
      isEdit:true
    },
  ])
  const handleCheckBox=(index)=>{
    let tempArr=[...fields]
    tempArr[index].isEdit=!tempArr[index].isEdit
    setFields([...tempArr])
  }
  console.log(fields,"fields")
  console.log(reviewedProfile, "this is reviewed")

  return (
    <div className={`${styles.leads} leads `}>
      <div
        className={`${styles.tableFilter} tableFilter d-flex justify-content-between align-items-center`}
      >
        <h3>Review Profile</h3>
        <div
          className={`${styles.pageList}  d-flex justify-content-center align-items-center`}
          onClick={clearData}
        >
          <span>Clear All</span>
        </div>
      </div>
      <div className={`${styles.scrollouter}`}>
        <div className={`${styles.scrollInner}`}>
          <form id="ReviewProfileForm">
            <table
              className={styles.table}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <thead>
                <tr>
                  <th
                    className={`${styles.table_heading} border_color table_heading`}
                  >
                    CATEGORIES
                  </th>
                  <th
                    className={`${styles.table_heading} border_color table_heading`}
                  >
                    VALUES
                  </th>
                  <th
                    className={`${styles.table_heading} border_color table_heading`}
                  >
                    API RESPONSE
                  </th>
                  <th
                    className={`${styles.table_heading} border_color table_heading`}
                  >
                    MANUAL APPROVAL
                  </th>
                  <th
                    className={`${styles.table_heading} border_color table_heading`}
                  >
                    REVIEWED VALUE
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className={`${styles.table_row} border_color table_row`}>
                  <td>Transaction Type</td>
                  <td>{reviewedProfile?.transactionType?.originalValue}</td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={
                          reviewedProfile?.transactionType?.apiResponse
                            ? '/static/check.svg'
                            : '/static/close-b.svg'
                        }
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                    {!reviewedProfile?.transactionType?.apiResponse?
                    <input
                      onChange={(e) => handleCheckBox(0)}
                      className={styles.checkBox}
                      type="checkbox"
                     
                      
                    />
                    :null}
                    
                  </td>
                  {!reviewedProfile?.transactionType?.apiResponse &&
                    DropDown(transactionTypeDropdown, 'transactionType', fields[0]?.isEdit)}
                </tr>
                <tr className={`${styles.table_row} border_color table_row`}>
                  <td>Type Of Business</td>
                  <td>{reviewedProfile?.typeOfBusiness?.originalValue}</td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={
                          reviewedProfile?.typeOfBusiness?.apiResponse
                            ? '/static/check.svg'
                            : '/static/close-b.svg'
                        }
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                   {!reviewedProfile?.typeOfBusiness?.apiResponse?
                    <input
                      onChange={(e) => handleCheckBox(1)}
                      className={styles.checkBox}
                      type="checkbox"
                    />
                   :null}
                  </td>
                  {!reviewedProfile?.typeOfBusiness?.apiResponse &&
                    DropDown(typeOfBusinessDropdown, 'typeOfBusiness',fields[1].isEdit)}
                </tr>

                <tr className={`${styles.table_row} border_color table_row`}>
                  <td>Turnover (Cr)</td>
                  <td>{reviewedProfile?.turnOver?.originalValue}</td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={
                          reviewedProfile?.turnOver?.apiResponse
                            ? '/static/check.svg'
                            : '/static/close-b.svg'
                        }
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                     {!reviewedProfile?.turnOver?.apiResponse?
                    <input
                     onChange={(e) => handleCheckBox(3)}
                      className={styles.checkBox}
                      type="checkbox"
                    />
                   :null}
                  </td>
                  <td>
                    {!reviewedProfile?.turnOver?.apiResponse && (
                      <Form.Control
                        type="number"
                        name="turnOver"
                        id="textDate"
                        className={`${styles.input}`}
                        onBlur={(e) =>
                          handleChange(e.target.name, Number(e.target.value * 10000000))
                        }
                        disabled={fields[3]?.isEdit}
                      />
                    )}
                  </td>
                </tr>

                <tr className={`${styles.table_row} border_color table_row`}>
                  <td>Commodity</td>
                  <td>{reviewedProfile?.commodity?.originalValue}</td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={
                          reviewedProfile?.commodity?.apiResponse
                            ? '/static/check.svg'
                            : '/static/close-b.svg'
                        }
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                    {!reviewedProfile?.commodity?.apiResponse?
                    <input
                     onChange={(e) => handleCheckBox(4)}
                      className={styles.checkBox}
                      type="checkbox"
                    />
                   :null}
                  </td>
                  {!reviewedProfile?.commodity?.apiResponse &&
                    DropDown(commodityDropdown, 'commodity',fields[4].isEdit)}
                </tr>

                <tr className={`${styles.table_row} border_color table_row`}>
                  <td>Order Value</td>
                  <td>{reviewedProfile?.orderValue?.originalValue}</td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={
                          reviewedProfile?.orderValue?.apiResponse
                            ? '/static/check.svg'
                            : '/static/close-b.svg'
                        }
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                     {!reviewedProfile?.orderValue?.apiResponse?
                    <input
                     onChange={(e) => handleCheckBox(5)}
                      className={styles.checkBox}
                      type="checkbox"
                    />
                   :null}
                  </td>
                  <td>
                    {!reviewedProfile?.orderValue?.apiResponse && (
                      <Form.Control
                        type="number"
                        name="orderValue"
                        id="textDate"
                        className={`${styles.input}`}
                        onBlur={(e) =>
                          handleChange(e.target.name, Number(e.target.value * 10000000))
                        }
                        disabled={fields[5]?.isEdit}
                      />
                    )}
                  </td>
                </tr>

                <tr className={`${styles.table_row} border_color table_row`}>
                  <td>Country Of Origin</td>
                  <td>{reviewedProfile?.countryOfOrigin?.originalValue}</td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={
                          reviewedProfile?.countryOfOrigin?.apiResponse
                            ? '/static/check.svg'
                            : '/static/close-b.svg'
                        }
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                    {!reviewedProfile?.countryOfOrigin?.apiResponse?
                    <input
                      onChange={(e) => handleCheckBox(6)}
                      className={styles.checkBox}
                      type="checkbox"
                      
                    />
                   :null}
                  </td>
                  {!reviewedProfile?.countryOfOrigin?.apiResponse &&
                    DropDown(countryOfOriginDropdown, 'countryOfOrigin',fields[6].isEdit)}
                </tr>

                <tr className={`${styles.table_row} border_color table_row`}>
                  <td>Port Of Discharge</td>
                  <td>{reviewedProfile?.portOfDischarge?.originalValue}</td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={
                          reviewedProfile?.portOfDischarge?.apiResponse
                            ? '/static/check.svg'
                            : '/static/close-b.svg'
                        }
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                    {!reviewedProfile?.portOfDischarge?.apiResponse?
                    <input
                     onChange={(e) => handleCheckBox(7)}
                      className={styles.checkBox}
                      type="checkbox"
                    />
                   :null}
                  </td>
                  {!reviewedProfile?.portOfDischarge?.apiResponse &&
                    DropDown(portOfDischargeDropdown, 'portOfDischarge',fields[7]?.isEdit)}
                </tr>

                <tr className={`${styles.table_row} border_color table_row`}>
                  <td>Expected Date Of Shipment</td>
                  <td>
                    {
                      moment( reviewedProfile?.ExpectedDateOfShipment?.originalValue.split(
                        'T',
                      )[0]).format("DD-MM-YYYY")
                     
                    }
                  </td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={
                          reviewedProfile?.ExpectedDateOfShipment?.apiResponse
                            ? '/static/check.svg'
                            : '/static/close-b.svg'
                        }
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                    {!reviewedProfile?.ExpectedDateOfShipment?.apiResponse?
                    <input
                      onChange={(e) => handleCheckBox(8)}
                      className={styles.checkBox}
                      type="checkbox"
                    />
                   :null}
                  </td>
                  <td>
                    {!reviewedProfile?.ExpectedDateOfShipment?.apiResponse && (
                      <Form.Control
                        type="date"
                        name="ExpectedDateOfShipment"
                        id="textDate"
                        className={`${styles.input}`}
                        onBlur={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                        disabled={fields[8]?.isEdit}
                      />
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
      <div className={`${styles.remarks} table_row`}>
        <Form.Label className={styles.remarksName}>User Remarks</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          className={styles.remarksTextarea}
        />
      </div>
    </div>
  )
}
export default Index

// const tableRow = (props) => {
//   return (
//     <tr className={`${styles.table_row} border_color table_row`}>
//       <td>{props}</td>
//       <td>Domestic</td>
//       <td>
//         <div className={styles.tick}>
//           <img src="/static/check.svg" alt="Check" className="img-fluid" />
//         </div>
//       </td>
//       <td>
//         <input className={styles.checkBox} type="checkbox" />
//       </td>
//       <td>
//         <Form.Select size="sm" className={`${styles.dropDown} dropDown`}>
//           <option>Retailer</option>
//           <option>Copper</option>
//         </Form.Select>
//       </td>
//     </tr>
//   )
// }
