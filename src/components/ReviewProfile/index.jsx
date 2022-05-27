import React from 'react'
import styles from './index.module.scss'
import { DropdownButton, Dropdown, Form } from 'react-bootstrap'
function index() {
  // const [reviewedProfile, setReviewedProfile] = useState([
  //   {
  //     Categories: "Transaction Type",
  //     value: "Domestic",
  //     approved: true,
  //   },
  //   {
  //     Categories: "Type of Business",
  //     value: "Manufacturer",
  //     option: ["retailer", "manufacturer"],
  //     approved: false,
  //   },
  //   {
  //     Categories: "Turover (Cr)",
  //     value: "51-100 crores",
  //     approved: true,
  //   },
  //   {
  //     Categories: "Commodity",
  //     value: "Iron",
  //     option: ["copper", "coal"],
  //     approved: false,
  //   },
  //   {
  //     Categories: "Order Value",
  //     value: "23 crores",
  //     approved: true,
  //   },
  //   {
  //     Categories: "Country of origin",
  //     value: "Vishakhapatanam",
  //     approved: true,
  //   },
  //   {
  //     Categories: "Port of Discharge",
  //     value: "India",
  //     approved: true,
  //   },
  //   {
  //     Categories: "Transaction Type",
  //     value: "Domestic",
  //     approved: true,
  //   },
  //   {
  //     Categories: "Expected Date OF Shipment",
  //     value: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
  //     approved: true,
  //   }
  // ]);

  // const onManualApproval = (props) => {
  //   setReviewedProfile((prevState) => [...prevState, props]);
  // };
  return (
    <div className={styles.leads}>
      <div
        className={`${styles.tableFilter} d-flex justify-content-between align-items-center`}
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
        cellpadding="0"
        cellspacing="0"
        border="0"
      >
        <thead>
          <tr>
            <th>CATEGORIES</th>
            <th>VALUES</th>
            <th>API RESPONSE</th>
            <th>MANUAL APPROVAL</th>
            <th>REVIEWED VALUE</th>
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

export default index;

const tableRow = () => {
  return (
    <tr>
      <td>Transaction Type</td>
      <td>Domestic</td>
      <td>
        <div className={styles.tick}>
          <img src="/static/check.svg"></img>
        </div>
      </td>
      <td>
        <input className={styles.checkBox} type="checkbox" />
      </td>
      <td>
        <Form.Select size="sm" className={styles.dropDown}>
          <option>Retailer</option>
          <option>Copper</option>
        </Form.Select>
      </td>
    </tr>
  )
}
