import React, { useState } from 'react'
import styles from './index.module.scss'
import { DropdownButton, Dropdown, Form } from 'react-bootstrap'
function index() {
  const [reviewedProfile, setReviewedProfile] = useState([
    {
      Categories: 'Transaction Type',
      value: 'Domestic',
      approved: true,
    },
    {
      Categories: 'Type of Business',
      value: 'Manufacturer',
      option: ['retailer', 'manufacturer'],
      approved: false,
    },
    {
      Categories: 'Turover (Cr)',
      value: '51-100 crores',
      approved: true,
    },
    {
      Categories: 'Commodity',
      value: 'Iron',
      option: ['copper', 'coal'],
      approved: false,
    },
    {
      Categories: 'Order Value',
      value: '23 crores',
      approved: true,
    },
    {
      Categories: 'Country of origin',
      value: 'Vishakhapatanam',
      approved: true,
    },
    {
      Categories: 'Port of Discharge',
      value: 'India',
      approved: true,
    },
    {
      Categories: 'Transaction Type',
      value: 'Domestic',
      approved: true,
    },
    {
      Categories: 'Expected Date OF Shipment',
      value: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
      approved: true,
    },
  ])

  const onManualApproval = (props) => {
    setReviewedProfile((prevState) => [...prevState, props])
  }
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
          {tableRow()}
          {tableRow()}
          {tableRow()}
          {tableRow()}
          {tableRow()}
        </tbody>
      </table>
      <div className={styles.remarks}>
        <Form.Label className={`${styles.remarksName} table_row`}>
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
export default index

const tableRow = () => {
  return (
    <tr className={`${styles.table_row} border_color table_row`}>
      <td>Transaction Type</td>
      <td>Domestic</td>
      <td>
        <div className={styles.tick}>
          <img src="/static/check.svg" alt="Check" className="img-fluid" />
        </div>
      </td>
      <td>
        <input className={styles.checkBox} type="checkbox" />
      </td>
      <td>
        <Form.Select size="sm" className={`${styles.dropDown} dropDown`}>
          <option>Retailer</option>
          <option>Copper</option>
        </Form.Select>
      </td>
    </tr>
  )
}
