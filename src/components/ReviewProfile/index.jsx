import React, { useState } from 'react'
import styles from './index.module.scss'
import { DropdownButton, Dropdown, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function index({ handleChange, reviewedProfile }) {
  const { buyerList } = useSelector((state) => state.buyer)

  console.log(reviewedProfile, 'reviewed profile')

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
        cellpadding="0"
        cellspacing="0"
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
            <td>Type Of Business</td>
            <td>{reviewedProfile.typeOfBusiness?.originalValue}</td>
            <td>
              <div className={styles.tick}>
                <img
                  src={
                    reviewedProfile.typeOfBusiness?.apiResponse
                      ? '/static/check.svg'
                      : '/static/close-b.svg'
                  }
                  alt="Check"
                  className="img-fluid"
                />
              </div>
            </td>
            <td>
              <input className={styles.checkBox} type="checkbox" />
            </td>
            {/* <td>
              {reviewedProfile.typeOfBusiness.option ? (
                <Form.Select
                  size="sm"
                  className={`${styles.dropDown} dropDown`}
                >
                  {' '}
                  {reviewedProfile.typeOfBusiness.option.map((options) => {
                    return <option>{options}</option>
                  })}{' '}
                </Form.Select>
              ) : item.typeOfBusiness?.originalValue instanceof Date ? (
                <input
                  type="date"
                  name="ExpectedDateOfShipment"
                  id="textDate"
                />
              ) : null}
            </td> */}
          </tr>
          
          <tr className={`${styles.table_row} border_color table_row`}>
            <td>TurnOver</td>
            <td>{reviewedProfile.turnOver?.originalValue}</td>
            <td>
              <div className={styles.tick}>
                <img
                  src={
                    reviewedProfile.turnOver?.apiResponse
                      ? '/static/check.svg'
                      : '/static/close-b.svg'
                  }
                  alt="Check"
                  className="img-fluid"
                />
              </div>
            </td>
            <td>
              <input className={styles.checkBox} type="checkbox" />
            </td>
            {/* <td>
              {item.turnOver.option ? (
                <Form.Select
                  size="sm"
                  className={`${styles.dropDown} dropDown`}
                >
                  {' '}
                  {item.turnOver.option.map((options) => {
                    return <option>{options}</option>
                  })}{' '}
                </Form.Select>
              ) : item.turnOver?.originalValue instanceof Date ? (
                <input
                  type="date"
                  name="ExpectedDateOfShipment"
                  id="textDate"
                />
              ) : null}
            </td> */}
          </tr>
         
          <tr className={`${styles.table_row} border_color table_row`}>
            <td>Transaction Type</td>
            <td>{reviewedProfile.transactionType?.originalValue}</td>
            <td>
              <div className={styles.tick}>
                <img
                  src={
                    reviewedProfile.transactionType?.apiResponse
                      ? '/static/check.svg'
                      : '/static/close-b.svg'
                  }
                  alt="Check"
                  className="img-fluid"
                />
              </div>
            </td>
            <td>
              <input className={styles.checkBox} type="checkbox" />
            </td>
            {/* <td>
              {item.transactionType.option ? (
                <Form.Select
                  size="sm"
                  className={`${styles.dropDown} dropDown`}
                >
                  {' '}
                  {item.transactionType.option.map((options) => {
                    return <option>{options}</option>
                  })}{' '}
                </Form.Select>
              ) : item.transactionType?.originalValue instanceof Date ? (
                <input
                  type="date"
                  name="ExpectedDateOfShipment"
                  id="textDate"
                />
              ) : null}
            </td> */}
          </tr>
        
          <tr className={`${styles.table_row} border_color table_row`}>
            <td>Port Of Discharge</td>
            <td>{reviewedProfile.portOfDischarge?.originalValue}</td>
            <td>
              <div className={styles.tick}>
                <img
                  src={
                    reviewedProfile.portOfDischarge?.apiResponse
                      ? '/static/check.svg'
                      : '/static/close-b.svg'
                  }
                  alt="Check"
                  className="img-fluid"
                />
              </div>
            </td>
            <td>
              <input className={styles.checkBox} type="checkbox" />
            </td>
            {/* <td>
              {item.portOfDischarge.option ? (
                <Form.Select
                  size="sm"
                  className={`${styles.dropDown} dropDown`}
                >
                  {' '}
                  {item.portOfDischarge.option.map((options) => {
                    return <option>{options}</option>
                  })}{' '}
                </Form.Select>
              ) : item.portOfDischarge?.originalValue instanceof Date ? (
                <input
                  type="date"
                  name="ExpectedDateOfShipment"
                  id="textDate"
                />
              ) : null}
            </td> */}
          </tr>
         
          <tr className={`${styles.table_row} border_color table_row`}>
            <td>Order Values</td>
            <td>{reviewedProfile.orderValues?.originalValue}</td>
            <td>
              <div className={styles.tick}>
                <img
                  src={
                    reviewedProfile.orderValues?.apiResponse
                      ? '/static/check.svg'
                      : '/static/close-b.svg'
                  }
                  alt="Check"
                  className="img-fluid"
                />
              </div>
            </td>
            <td>
              <input className={styles.checkBox} type="checkbox" />
            </td>
            {/* <td>
              {item.orderValues.option ? (
                <Form.Select
                  size="sm"
                  className={`${styles.dropDown} dropDown`}
                >
                  {' '}
                  {item.orderValues.option.map((options) => {
                    return <option>{options}</option>
                  })}{' '}
                </Form.Select>
              ) : item.orderValues?.originalValue instanceof Date ? (
                <input
                  type="date"
                  name="ExpectedDateOfShipment"
                  id="textDate"
                />
              ) : null}
            </td> */}
          </tr>
          
          <tr className={`${styles.table_row} border_color table_row`}>
            <td>Country Of Origin</td>
            <td>{reviewedProfile.countryOfOrigin?.originalValue}</td>
            <td>
              <div className={styles.tick}>
                <img
                  src={
                    reviewedProfile.countryOfOrigin?.apiResponse
                      ? '/static/check.svg'
                      : '/static/close-b.svg'
                  }
                  alt="Check"
                  className="img-fluid"
                />
              </div>
            </td>
            <td>
              <input className={styles.checkBox} type="checkbox" />
            </td>
            {/* <td>
              {item.countryOfOrigin.option ? (
                <Form.Select
                  size="sm"
                  className={`${styles.dropDown} dropDown`}
                >
                  {' '}
                  {item.countryOfOrigin.option.map((options) => {
                    return <option>{options}</option>
                  })}{' '}
                </Form.Select>
              ) : item.countryOfOrigin?.originalValue instanceof Date ? (
                <input
                  type="date"
                  name="ExpectedDateOfShipment"
                  id="textDate"
                />
              ) : null}
            </td> */}
          </tr>
         
          <tr className={`${styles.table_row} border_color table_row`}>
            <td>Commodity</td>
            <td>{reviewedProfile.commodity?.originalValue}</td>
            <td>
              <div className={styles.tick}>
                <img
                  src={
                    reviewedProfile.commodity?.apiResponse
                      ? '/static/check.svg'
                      : '/static/close-b.svg'
                  }
                  alt="Check"
                  className="img-fluid"
                />
              </div>
            </td>
            <td>
              <input className={styles.checkBox} type="checkbox" />
            </td>
            {/* <td>
              {item.commodity.option ? (
                <Form.Select
                  size="sm"
                  className={`${styles.dropDown} dropDown`}
                >
                  {' '}
                  {item.commodity.option.map((options) => {
                    return <option>{options}</option>
                  })}{' '}
                </Form.Select>
              ) : item.commodity?.originalValue instanceof Date ? (
                <input
                  type="date"
                  name="ExpectedDateOfShipment"
                  id="textDate"
                />
              ) : null}
            </td> */}
          </tr>
          
          <tr className={`${styles.table_row} border_color table_row`}>
            <td>Expected Date Of Shipment</td>
            <td>{reviewedProfile.ExpectedDateOfShipment?.originalValue}</td>
            <td>
              <div className={styles.tick}>
                <img
                  src={
                    reviewedProfile.ExpectedDateOfShipment?.apiResponse
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
                onChange={(e) => handleChange(e)}
                className={styles.checkBox}
                type="checkbox"
              />
            </td>
            {/* <td>
              {item.ExpectedDateOfShipment.option ? (
                <Form.Select
                  size="sm"
                  className={`${styles.dropDown} dropDown`}
                >
                  {' '}
                  {item.ExpectedDateOfShipment.option.map((options) => {
                    return <option>{options}</option>
                  })}{' '}
                </Form.Select>
              ) : item.ExpectedDateOfShipment?.originalValue instanceof Date ? (
                <input
                  type="date"
                  name="ExpectedDateOfShipment"
                  id="textDate"
                />
              ) : null}
            </td> */}
          </tr>
         
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

// {reviewedProfile.map((item) => {
//   return (
//     <tr className={`${styles.table_row} border_color table_row`}>
//       <td>{Object.keys(item)}</td>
//       <td>sffd</td>
//       <td><div className={styles.tick} >
//         <img src="/static/check.svg" alt="Check" className='img-fluid' />
//       </div>
//       </td>
//       <td><input className={styles.checkBox} type="checkbox" /></td>
//       <td>
// {item.option ? <Form.Select size="sm" className={`${styles.dropDown} dropDown`}> {item.option.map((options) => {
//   return (
//     <option>{options}</option>
//   )
// })}  </Form.Select> : item.value instanceof Date ? <input
//   type="date"
//   name='ExpectedDateOfShipment'
//   id="textDate" /> : null}
//       </td>
//     </tr>
//   )
// })}

const tableRow = (props) => {
  return (
    <tr className={`${styles.table_row} border_color table_row`}>
      <td>{props}</td>
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
