/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './index.module.scss'

const index = ({ creditDetail, saveAddressData }) => {
  console.log(creditDetail, 'this is credit detail')

  const { company, productSummary, supplierCredential } = creditDetail

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
                  type="text"
                  defaultValue={productSummary.monthlyProductionCapacity}
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
                  type="text"
                  defaultValue={productSummary.capacityUtilization}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Capacity Utilization<strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  defaultValue={productSummary.averageStockOfCommodity}
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
                  type="text"
                  defaultValue={productSummary.averageStockInTransit}
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
                  type="text"
                  defaultValue={productSummary.availableStock}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Available Stock<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  defaultValue={productSummary.dailyConsumptionOfCommodity}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Daily Consumption of Commodity
                  <strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  type="date"
                  defaultValue={
                    productSummary.stockCoverageOfCommodity.split('T')[0]
                  }
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Stock Coverage of Commodity
                  <strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <select className={`${styles.input_field} input form-control`}>
                  <option>
                    {productSummary.existingProcurementOfCommodity}
                  </option>
                  <option value="volvo">Import</option>
                  <option value="audi">Manufacturers</option>
                </select>
                <label className={`${styles.label_heading} label_heading`}>
                  Existing Procurement of Commodity
                  <strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
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
                <select className={`${styles.input_field} input form-control`}>
                  <option>
                    {productSummary.contributionCommoditySenstivity}
                  </option>
                  <option value="volvo">High</option>
                  <option value="audi">Low</option>
                </select>
                <label className={`${styles.label_heading} label_heading`}>
                  Commodity Contribution Senstivity
                  <strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  defaultValue={productSummary.AvgMonthlyElectricityBill}
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
                <select className={`${styles.input_field} input form-control`}>
                  <option>{supplierCredential.supplierName}</option>
                  <option>Bhutani Traders</option>
                  <option>Ramakrishna</option>
                </select>
                <label className={`${styles.label_heading} label_heading`}>
                  Supplier Name<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  defaultValue={supplierCredential.shipmentNumber}
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
                  defaultValue={supplierCredential.consigneesNumber}
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
                  defaultValue={supplierCredential.HSCodesNumber}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  No. of HS codes<strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  defaultValue={supplierCredential.countryOfOrigin}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Country of Origin<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  defaultValue={supplierCredential.portOfDestination}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Port of Destination<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  type="date"
                  defaultValue={
                    supplierCredential.oldestShipmentDate.split('T')[0]
                  }
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Oldest Shipment Date<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  type="date"
                  defaultValue={
                    supplierCredential.latestShipmentDate.split('T')[0]
                  }
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Latest Shipment Date<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} ${styles.percent} input form-control`}
                  required
                  type="text"
                  defaultValue={supplierCredential.commodityOfTotalTrade}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Commodity to Total Trade % -24M
                  <strong className="text-danger">*</strong>
                </label>
              </div>
              <div className="col-12 mb-4 mt-4">
                <label className={`${styles.label_heading}`}>Remarks</label>
                <input
                  as="textarea"
                  rows={3}
                  className={`${styles.remark_field} input form-control`}
                  defaultValue={supplierCredential.remarks}
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
              {company &&
                company.keyContactPerson.map((person, index) => (
                  <tbody key={index}>
                    <tr className="table_credit">
                      <td>
                        <select
                          className={`${styles.dropDown} font-weight-bold heading`}
                        >
                          <option>{person.name}</option>
                          <option>Krishna</option>
                        </select>
                      </td>
                      <td>
                        <select className={`${styles.dropDown} heading`}>
                          <option>{person.designation}</option>
                          <option>Manager</option>
                        </select>
                      </td>
                      <td>
                        <select className={`${styles.dropDown} heading`}>
                          <option>{person.department}</option>
                          <option>Organiser</option>
                        </select>
                      </td>
                      <td>
                        <input defaultValue={person.contact.number} />
                      </td>
                      <td>
                        <input defaultValue={person.email} />
                      </td>
                      <td>
                        <div>
                          <img
                            src="/static/save-3.svg"
                            className={`${styles.edit_image} mr-3 img-fluid`}
                            alt="save"
                          />
                          <img
                            src="/static/delete 2.svg"
                            className="img-fluid"
                            alt="delete"
                          />
                        </div>
                      </td>
                    </tr>
                    {/* <tr className="table_credit">
                  <td className="font-weight-bold">Keshav Singh</td>
                  <td>Production Manager</td>
                  <td>Production</td>
                  <td>+91 9876543210</td>
                  <td>keshavv4578@gmail.com</td>
                  <td>
                    <div>
                      <img
                        src="/static/mode_edit.svg"
                        className={`${styles.edit_image} mr-3 img-fluid`}
                        alt="edit"
                      />
                      <img
                        src="/static/delete 2.svg"
                        className="img-fluid"
                        alt="delete"
                      />
                    </div>
                  </td>
                </tr>
                <tr className="table_credit">
                  <td className="font-weight-bold">Shivani Kapoor</td>
                  <td>Lead Manager</td>
                  <td>IT Department</td>
                  <td>+91 9876543210</td>
                  <td>keshavv4578@gmail.com</td>
                  <td>
                    <div>
                      <img
                        className={`${styles.edit_image} mr-3 img-fluid`}
                        src="/static/mode_edit.svg"
                        alt="edit"
                      />
                      <img
                        src="/static/delete 2.svg"
                        className="img-fluid"
                        alt="delete"
                      />
                    </div>
                  </td>
                </tr> */}
                  </tbody>
                ))}
            </table>
            <div className={`${styles.add_row} p-3 d-flex justify-content-end`}>
              <span>+</span>
              <div>Add More Rows</div>
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
        <div
          id="keyAddress"
          className="collapse"
          aria-labelledby="keyAddress"
          data-parent="#profileAccordion"
        >
          {company &&
            company.keyAddress.map((address, index) => (
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
                            {address.contact.number}
                          </p>
                          <p>
                        <span>Branch: </span>{address.branch}
                      </p>
                      <div className="d-flex">
                        <p>
                          {' '}
                          <span>GSTIN: </span>{address.GSTIN}
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
                <div className="d-flex justify-content-between">
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
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className={`${styles.main} card border_color`}>
        <div
          className={`${styles.head_container} card-header d-flex justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#addAddress"
          aria-expanded="true"
          aria-controls="addAddress"
        >
          <h3 className={`${styles.heading} mb-0`}>Add a new address</h3>
          <img
            src="/static/accordion_close_black.svg"
            className="img-fluid"
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
                <select className={`${styles.input_field} input form-control`} name='addressType' onChange={(e)=>{saveAddressData(e.target.name, e.target.value)}}>
                  <option>Factory</option>
                  <option>Warehouse</option>
                  <option>Corporate Office</option>
                </select>
                <label className={`${styles.label_heading} label_heading`}>
                  Address Type<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
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
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Email ID<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Phone Number<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-8 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  type="date"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Address<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  type="date"
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
                />
                <label className={`${styles.label_heading} label_heading`}>
                  GSTIN<strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.btn_container} col-md-4`}>
                <button className={`${styles.gst_btn}`}>
                  {' '}
                  <img
                    className="img-fluid mr-2 mb-1"
                    src="/static/file_upload.svg"
                    alt="file upload"
                  />
                  GST Doc
                </button>
                <button className={`${styles.add_btn}`}>Add</button>
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
             { company && company.debtProfile.map((profile, index) => (  <tr key={index}>
                  <td>{index+=1}</td>
                  <td>{profile.bankName}</td>
                  <td>{profile.limitType}</td>
                  <td>{profile.limit}</td>
                  <td>{profile.conduct}</td>
                  <td>
                    <div>
                      <img
                        src="/static/save-3.svg"
                        className={`${styles.edit_image} mr-3 img-fluid`}
                        alt="edit"
                      />
                      <img
                        src="/static/delete 2.svg"
                        className="img-fluid"
                        alt="delete"
                      />
                    </div>
                  </td>
                </tr> ))}
                {/* <tr>
                  <td>2</td>
                  <td>
                    <select
                      className={`${styles.dropDown} font-weight-bold heading`}
                    >
                      <option>Jammu & Kashmir Bank</option>
                      <option>SBI</option>
                    </select>
                  </td>
                  <td>
                    <select className={`${styles.dropDown} heading`}>
                      <option>Cash Credit</option>
                      <option>Cash Deposit</option>
                    </select>
                  </td>
                  <td>
                    <input placeholder="100,000.00" />
                  </td>

                  <td>
                    <select className={`${styles.dropDown} heading`}>
                      <option>Satisfactory</option>
                      <option>Not Satisfied</option>
                    </select>
                  </td>
                  <td>
                    <div>
                      <img
                        src="/static/save-3.svg"
                        className={`${styles.edit_image}  mr-3 img-fluid`}
                        alt="edit"
                      />
                      <img
                        src="/static/delete 2.svg"
                        className="img-fluid"
                        alt="delete"
                      />
                    </div>
                  </td>
                </tr> */}
              </tbody>
            </table>
            <div className={`${styles.add_row} p-3 d-flex justify-content-end`}>
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
