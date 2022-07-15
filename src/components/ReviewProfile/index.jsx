/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import styles from './index.module.scss'
import { DropdownButton, Dropdown, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Index({ handleChange, reviewedProfile}) {
  const transactionTypeDropdown = ['Import', 'Domestic']
  const commodityDropdown = ['Iron', 'Crude', 'Steel']
  const countryOfOriginDropdown = ['America', 'India', 'Russia']
  const portOfDischargeDropdown = ['Mumbai', 'Gujrat', 'VisakhaPatnam']
  const typeOfBusinessDropdown = ['Manufacturer', 'Trader', 'Retail']

  const DropDown = (values, name) => {
    return (
      <td>
        <Form.Select
          size="sm"
          name={name}
          className={`${styles.dropDown} dropDown`}
          onChange={(e) => {
            handleChange(e.target.name, e.target.value)
          }}
        >
          {' '}
          {values.map((options) => {
            return <option>{options}</option>
          })}{' '}
        </Form.Select>
      </td>
    )
  }

  // console.log(reviewedProfile, "this is reviewed")

  return (
    <div className={`${styles.leads} leads `}>
      <div
        className={`${styles.tableFilter} tableFilter d-flex justify-content-between align-items-center`}
      >
        <h3>Review Profile</h3>
        <div
          className={`${styles.pageList}  d-flex justify-content-center align-items-center`}
        >
          <span>Clear All</span>
        </div>
      </div>
       <div className={`${styles.scrollouter}`}>
        <div className={`${styles.scrollInner}`}>
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
              <input
                //onChange={(e) => handleCheckBox(e)}
                className={styles.checkBox}
                type="checkbox"
              />
            </td>
            {!reviewedProfile?.transactionType?.apiResponse &&
              DropDown(transactionTypeDropdown, 'transactionType')}
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
              <input
                //onChange={(e) => handleCheckBox(e)}
                className={styles.checkBox}
                type="checkbox"
              />
            </td>
            {!reviewedProfile?.typeOfBusiness?.apiResponse &&
              DropDown(typeOfBusinessDropdown, 'typeOfBusiness')}
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
              <input
                //onChange={(e) => handleCheckBox(e)}
                className={styles.checkBox}
                type="checkbox"
              />
            </td>
            <td>
               {!reviewedProfile?.turnOver?.apiResponse && (
              <Form.Control 
                type="number"
                name="turnOver"
                id="textDate"
                className={`${styles.input}`}
                onBlur={(e) => handleChange(e.target.name, e.target.value)}
              />
            )}
            </td>
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
              <input
                //onChange={(e) => handleCheckBox(e)}
                className={styles.checkBox}
                type="checkbox"
              />
            </td>
            {!reviewedProfile?.portOfDischarge?.apiResponse &&
              DropDown(portOfDischargeDropdown, 'portOfDischarge')}
          </tr>

          <tr className={`${styles.table_row} border_color table_row`}>
            <td>Order Value</td>
            <td>{reviewedProfile?.orderValue?.originalValue}</td>
            <td>
              <div className={styles.tick}>
                <img
                  src={
                    reviewedProfile?.orderValues?.apiResponse
                      ? '/static/check.svg'
                      : '/static/close-b.svg'
                  }
                  alt="Check"
                  className="img-fluid"
                />
              </div>
            </td>
            <td>
              <input
                //onChange={(e) => handleCheckBox(e)}
                className={styles.checkBox}
                type="checkbox"
              />
            </td>
             <td>
              {!reviewedProfile?.orderValues?.apiResponse && (
              <Form.Control 
                type="number"
                name="orderValue"
                id="textDate"
                className={`${styles.input}`}
                onBlur={(e) => handleChange(e.target.name, e.target.value)}
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
              <input
                //onChange={(e) => handleCheckBox(e)}
                className={styles.checkBox}
                type="checkbox"
              />
            </td>
            {!reviewedProfile?.countryOfOrigin?.apiResponse &&
              DropDown(countryOfOriginDropdown, 'countryOfOrigin')}
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
              <input
                //onChange={(e) => handleCheckBox(e)}
                className={styles.checkBox}
                type="checkbox"
              />
            </td>
            {!reviewedProfile?.commodity?.apiResponse &&
              DropDown(commodityDropdown, 'commodity')}
          </tr>

          <tr className={`${styles.table_row} border_color table_row`}>
            <td>Expected Date Of Shipment</td>
            <td>{reviewedProfile?.ExpectedDateOfShipment?.originalValue.split('T')[0]}</td>
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
              <input
                name="ExpectedDateOfShipment"
                //onChange={(e) => handleCheckBox(e)}
                className={styles.checkBox}
                type="checkbox"
              />
            </td>
           <td>
              {!reviewedProfile?.turnOver?.apiResponse && (
              <Form.Control 
                type="date"
                name="ExpectedDateOfShipment"
                id="textDate"
                className={`${styles.input}`}
                onBlur={(e) => handleChange(e.target.name, e.target.value)}
              />
            )}
           </td>
          </tr>
        </tbody>
      </table>
        </div>
       </div>
      <div className={`${styles.remarks} table_row`}>
        <Form.Label className={styles.remarksName}>
          User Remarks
        </Form.Label>
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
