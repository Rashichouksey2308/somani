/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import DateCalender from '../../src/components/DateCalender'
import InspectionDocument from '../../src/components/InspectionDocument'
import { setPageName, setDynamicName } from '../../src/redux/userData/action'
import SaveBar from '../../src/components/SaveBar'

function Index() {
  const [saveShareTable, setSaveTable] = useState(false)
  const [saveContactTable, setContactTable] = useState(false)
  const [saveDirectorTable, setDirectorTable] = useState(false)
  const [saveCommodityTable, setCommodityTable] = useState(false)

  const handleDelete = (index) => {
    setListShare([...listShare.slice(0, index), ...listShare.slice(index + 1)])
  }
  const handleDeleteContact = (index) => {
    setListContact([
      ...listContact.slice(0, index),
      ...listContact.slice(index + 1),
    ])
  }
  const handleDeleteDirector = (index) => {
    setListDirector([
      ...listDirector.slice(0, index),
      ...listDirector.slice(index + 1),
    ])
  }
  const handleCommodity = (index) => {
    setListCommodity([
      ...listCommodity.slice(0, index),
      ...listCommodity.slice(index + 1),
    ])
  }
  const [listCommodity, setListCommodity] = useState([
    {
      name: '',
      designation: '',
      contactNo: '',
      emailID: '',
    },
  ])
  const onAddCommodity = () => {
    setListCommodity([
      ...listCommodity,
      {
        hsnCode: '',
        commodity: '',
      },
    ])
  }
  const [listContact, setListContact] = useState([
    {
      name: '',
      designation: '',
      contactNo: '',
      emailID: '',
    },
  ])
  const onAddContact = () => {
    setListContact([
      ...listContact,
      {
        name: '',
        designation: '',
        contactNo: '',
        emailID: '',
      },
    ])
  }
  const [listShare, setListShare] = useState([
    {
      name: '',
      designation: '',
      contactNo: '',
      emailID: '',
    },
  ])
  const onAddShare = () => {
    setListShare([
      ...listShare,
      {
        name: '',
        designation: '',
        contactNo: '',
        emailID: '',
      },
    ])
  }
  const [listDirector, setListDirector] = useState([
    {
      name: '',
      designation: '',
      contactNo: '',
      emailID: '',
    },
  ])
  const onAddDirector = () => {
    setListDirector([
      ...listDirector,
      {
        name: '',
        designation: '',
        contactNo: '',
        emailID: '',
      },
    ])
  }

  const [darkMode, setDarkMode] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageName('inception2'))
  })
  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className="d-flex align-items-center">
            <h1 className={`${styles.title} heading`}>
              <img
                src={`${
                  darkMode
                    ? `/static/white-arrow.svg`
                    : `/static/arrow-right.svg`
                }`}
                alt="arrow right"
                className="img-fluid image_arrow"
              />
              <span>Add Supplier</span>
            </h1>
          </div>
        </div>

        <div className={`${styles.backgroundMain} container-fluid`}>
          <div className={`${styles.vessel_card} border_color`}>
            <div
              className={`${styles.main} vessel_card mt-4 card border_color`}
            >
              <div
                className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
                data-toggle="collapse"
                data-target="#supplierProfile"
                aria-expanded="true"
                aria-controls="supplierProfile"
              >
                <h3 className={`${styles.heading}`}>Supplier Profile</h3>

                <div className="d-flex align-items-center">
                  <label className={`${styles.dropDown_label} text`}>
                    Status:
                  </label>
                  <div className="position-relative">
                    <select
                      className={`${styles.dropDown} ${styles.customSelect} input`}
                    >
                      <>
                        {' '}
                        <option value={true}>Active</option>
                        <option value={false}>Not active</option>
                      </>
                    </select>
                    <img
                      className={`${styles.arrow2} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>

                  <span className="ml-4">+</span>
                </div>
              </div>
              <div
                id="supplierProfile"
                className="collapse"
                aria-labelledby="supplierProfile"
                data-parent="#supplierProfile"
              >
                <div className={`${styles.dashboard_form} mt-1 card-body`}>
                  <div className="row">
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <input
                          className={`${styles.input_field} input form-control`}
                          type="text"
                          required
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Supplier Name
                          <strong className="text-danger">*</strong>
                        </label>
                        <img
                          className={`${styles.search_image} img-fluid`}
                          src="/static/search-grey.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <select
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          required
                        >
                          <option value="India">Private Limited</option>
                          <option value="America">ABC</option>
                        </select>
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Constitution<strong className="text-danger">*</strong>
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
                      <div className="d-flex">
                        <DateCalender labelName="Incorporation Date" />
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
                      <div className="d-flex">
                        <select
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                        >
                          <option value="India">India</option>
                          <option value="America">USA</option>
                        </select>
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Country of Incorporation
                          <strong className="text-danger">*</strong>
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
                        required
                      />
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        National Identification No. / Commercial Registry No.
                        <strong className="text-danger">*</strong>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.main} mt-4 card border_color`}>
              <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
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
              >
                <div className={`${styles.dashboard_form} card-body`}>
                  <div className="d-flex justify-content-between">
                    <div
                      className={`${styles.address_card} value background1`}
                      style={{ padding: '22px' }}
                    >
                      <div className="d-flex justify-content-between">
                        <div>
                          <input type="checkbox" />
                          <label className={styles.label}>
                            Registered Office Address
                          </label>
                          <div className={styles.address_values}>
                            <p>N-11, 29 Tilak Marg, New Delhi</p>
                            <p className="pt-3">
                              <span>Email: </span>
                              skapoor@gmail
                            </p>
                            <p>
                              <span>Phone Number:</span>
                              +91 987665443332
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
                    </div>
                    <div
                      className={`${styles.address_card} value background1`}
                      style={{ padding: '22px' }}
                    >
                      <div className="d-flex justify-content-between">
                        <div>
                          <div className={styles.address_values}>
                            <h5>Corporate Office Address</h5>
                            <p>N-11, 29 Tilak Marg, New Delhi</p>
                            <p className="pt-3">
                              <span>Email: </span>skapoor@gmail.com
                            </p>
                            <p>
                              <span>Phone Number:</span>+91 9876543210, +91
                              9876543210
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
                    </div>
                  </div>
                  <div
                    className={`${styles.address_card} mt-3 pb-5 value background1`}
                  >
                    <div
                      className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
                    >
                      <h3 className={`${styles.heading}`}>Add a new address</h3>
                      <img
                        className="img-fluid"
                        alt="Close"
                        src="/static/accordion_close_black.svg"
                      />
                    </div>
                    <div
                      className={`${styles.dashboard_form} card-body border_color`}
                    >
                      <div className="row">
                        <div
                          className={`${styles.form_group} col-md-12 col-sm-6`}
                        >
                          <input
                            className={`${styles.input_field} input form-control`}
                            type="text"
                            required
                            name="completeAddress"
                            onChange={(e) => {
                              handleChange(e.target.name, e.target.value)
                            }}
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Address
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div
                          className={`${styles.form_group} col-md-4 col-sm-4`}
                        >
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              name="pinCode"
                              onChange={(e) => {
                                handleChange(e.target.name, e.target.value)
                              }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Pin Code
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.search_image} img-fluid`}
                              src="/static/search-grey.svg"
                              alt="Search"
                            />
                          </div>
                        </div>

                        <div
                          className={`${styles.form_group} col-md-4 col-sm-4`}
                        >
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              name="pinCode"
                              onChange={(e) => {
                                handleChange(e.target.name, e.target.value)
                              }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Country
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.search_image} img-fluid`}
                              src="/static/search-grey.svg"
                              alt="Search"
                            />
                          </div>
                        </div>

                        <div
                          className={`${styles.form_group} ${styles.phone} col-md-4 col-sm-6`}
                        >
                          <div className={`${styles.phone_card}`}>
                            <select
                              name="callingCode"
                              id="Code"
                              className={`${styles.code_phone} input border-right-0`}
                            >
                              <option>+91</option>
                              <option>+1</option>
                              <option>+92</option>
                              <option>+95</option>
                              <option>+24</option>
                            </select>
                            <input
                              type="tel"
                              id="textNumber"
                              name="primary"
                              className={`${styles.input_field}  input form-control border-left-0`}
                              required
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                              id="textNumber"
                            >
                              Phone Number
                              <strong className="text-danger">*</strong>
                            </label>
                          </div>
                        </div>
                        <div
                          className={`${styles.form_group} ${styles.phone} col-md-4 col-sm-6`}
                        >
                          <div className={`${styles.phone_card}`}>
                            <select
                              name="callingCode"
                              id="Code"
                              className={`${styles.code_phone} input border-right-0`}
                            >
                              <option>+91</option>
                              <option>+1</option>
                              <option>+92</option>
                              <option>+95</option>
                              <option>+24</option>
                            </select>
                            <input
                              type="tel"
                              id="textNumber"
                              name="primary"
                              className={`${styles.input_field} input form-control border-left-0`}
                              required
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                              id="textNumber"
                            >
                              Alternate Phone Number
                            </label>
                          </div>
                        </div>
                        <div
                          className={`${styles.form_group} col-md-4 col-sm-6`}
                        >
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              name="email"
                              onChange={(e) => {
                                handleChange(e.target.name, e.target.value)
                              }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Email ID
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.plus_add} img-fluid`}
                              src="/static/add-btn.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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

          <div className={`${styles.main} mr-2 ml-2 mt-4 card border_color`}>
            <div
              className={`${styles.head_container} border_color card-header d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#keyContact"
              aria-expanded="true"
              aria-controls="keyContact"
            >
              <h3 className={`${styles.heading} mb-0`}>
                Contact Person Details
              </h3>
              <span>+</span>
            </div>
            <div
              id="keyContact"
              className="collapse"
              aria-labelledby="keyContact"
              data-parent="#keyContact"
            >
              <div className={`${styles.datatable} card-body datatable`}>
                <div className={`${styles.table_scroll_outer}`}>
                  <div className={`${styles.table_scroll_inner}`}>
                    <table
                      className={`${styles.table} table`}
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <thead>
                        <tr>
                          <th>
                            NAME <strong className="text-danger">*</strong>
                          </th>
                          <th>DESIGNATION</th>
                          <th>
                            CONTACT NO.{' '}
                            <strong className="text-danger">*</strong>
                          </th>
                          <th>
                            EMAIL ID <strong className="text-danger">*</strong>
                          </th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        {listContact.length > 0 &&
                          listContact.map((val, index) => (
                            <tr key={index} className="table_credit">
                              <td>
                                <input
                                  className="input font-weight-bold"
                                  name="name"
                                  type="text"
                                  readOnly={!saveContactTable}
                                />
                              </td>
                              <td>
                                <input
                                  className="input"
                                  name="designation"
                                  type="text"
                                  readOnly={!saveContactTable}
                                />
                              </td>

                              <td>
                                <input
                                  className="input"
                                  name="contact.number"
                                  type="number"
                                  readOnly={!saveContactTable}
                                />
                              </td>
                              <td>
                                <input
                                  className="input"
                                  name="email"
                                  type="text"
                                  readOnly={!saveContactTable}
                                />
                              </td>
                              <td className="text-right">
                                <div>
                                  {!saveContactTable ? (
                                    <>
                                      <img
                                        src="/static/mode_edit.svg"
                                        className={`${styles.edit_image} mr-3 img-fluid`}
                                        alt="edit"
                                        onClick={(e) => {
                                          setContactTable(true)
                                        }}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <img
                                        src="/static/save-3.svg"
                                        className={`${styles.edit_image} mr-3 img-fluid`}
                                        alt="save"
                                        onClick={(e) => {
                                          setContactTable(false)
                                        }}
                                      />
                                    </>
                                  )}

                                  <img
                                    src="/static/delete 2.svg"
                                    className="img-fluid"
                                    alt="delete"
                                    onClick={() => handleDeleteContact(index)}
                                  />
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className={`${styles.add_row} p-3 d-flex justify-content-end`}
                  onClick={(e) => {
                    onAddContact()
                  }}
                >
                  <span>+</span>
                  <div>Add More Rows</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.main} mt-4 mr-2 ml-2 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#shareHolding"
              aria-expanded="true"
              aria-controls="shareHolding"
            >
              <h3 className={`${styles.heading} mb-0`}>Shareholding Details</h3>
              <span>+</span>
            </div>
            <div
              id="shareHolding"
              className="collapse"
              aria-labelledby="shareHolding"
              data-parent="#shareHolding"
            >
              <div className={`${styles.datatable} card-body datatable`}>
                <div className={`${styles.table_scroll_outer}`}>
                  <div className={`${styles.table_scroll_inner}`}>
                    <table
                      className={`${styles.table} table`}
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <thead>
                        <tr>
                          <th>SHAREHOLDER NAME</th>
                          <th>DESIGNATION</th>
                          <th>OWNERSHIP (%)</th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        {listShare.length > 0 &&
                          listShare.map((val, index) => {
                            return (
                              <tr key={index} className="table_credit">
                                <td>
                                  <input
                                    className="input font-weight-bold"
                                    name="name"
                                    type="text"
                                    readOnly={!saveShareTable}
                                  />
                                </td>
                                <td>
                                  <input
                                    className="input"
                                    name="designation"
                                    type="text"
                                    readOnly={!saveShareTable}
                                  />
                                </td>

                                <td>
                                  <input
                                    className="input"
                                    name="contact.number"
                                    type="number"
                                    readOnly={!saveShareTable}
                                  />
                                </td>

                                <td className="text-right">
                                  <div>
                                    {!saveShareTable ? (
                                      <>
                                        <img
                                          src="/static/mode_edit.svg"
                                          className={`${styles.edit_image} mr-3 img-fluid`}
                                          alt="edit"
                                          onClick={(e) => {
                                            setSaveTable(true)
                                          }}
                                        />
                                      </>
                                    ) : (
                                      <>
                                        <img
                                          src="/static/save-3.svg"
                                          className={`${styles.edit_image} mr-3 img-fluid`}
                                          alt="save"
                                          onClick={(e) => {
                                            setSaveTable(false)
                                          }}
                                        />
                                      </>
                                    )}
                                    <img
                                      src="/static/delete 2.svg"
                                      className="img-fluid"
                                      alt="delete"
                                      onClick={() => handleDelete(index)}
                                    />
                                  </div>
                                </td>
                              </tr>
                            )
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className={`${styles.add_row} p-3 d-flex justify-content-end`}
                  onClick={(e) => {
                    onAddShare()
                  }}
                >
                  <span>+</span>
                  <div>Add More Rows</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.main} mt-4 mr-2 ml-2 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#director"
              aria-expanded="true"
              aria-controls="director"
            >
              <h3 className={`${styles.heading} mb-0`}>
                Directors and Authorised Signatory
              </h3>
              <span>+</span>
            </div>
            <div
              id="director"
              className="collapse"
              aria-labelledby="director"
              data-parent="#director"
            >
              <div className={`${styles.datatable} card-body datatable`}>
                <div className={`${styles.table_scroll_outer}`}>
                  <div className={`${styles.table_scroll_inner}`}>
                    <table
                      className={`${styles.table} table`}
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <thead>
                        <tr>
                          <th>
                            NAME<strong className="text-danger">*</strong>
                          </th>
                          <th>
                            NATIONALITY
                            <strong className="text-danger">*</strong>
                          </th>
                          <th>
                            AUTHORITY TO SIGN
                            <strong className="text-danger">*</strong>
                          </th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        {listDirector.length > 0 &&
                          listDirector.map((val, index) => (
                            <tr key={index} className="table_credit">
                              <td>
                                <input
                                  className="input font-weight-bold"
                                  name="name"
                                  type="text"
                                  readOnly={!saveDirectorTable}
                                />
                              </td>
                              <td>
                                <input
                                  className="input"
                                  name="designation"
                                  type="text"
                                  readOnly={!saveDirectorTable}
                                />
                              </td>
                              <td>
                                <input
                                  name="primaryBank"
                                  className={`${styles.checkBox}`}
                                  type="checkbox"
                                  readOnly={!saveDirectorTable}
                                />
                              </td>

                              <td className="text-right">
                                <div>
                                  {!saveDirectorTable ? (
                                    <>
                                      <img
                                        src="/static/mode_edit.svg"
                                        className={`${styles.edit_image} mr-3 img-fluid`}
                                        alt="edit"
                                        onClick={(e) => {
                                          setDirectorTable(true)
                                        }}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <img
                                        src="/static/save-3.svg"
                                        className={`${styles.edit_image} mr-3 img-fluid`}
                                        alt="save"
                                        onClick={(e) => {
                                          setDirectorTable(false)
                                        }}
                                      />
                                    </>
                                  )}
                                  <img
                                    src="/static/delete 2.svg"
                                    className="img-fluid"
                                    alt="delete"
                                    onClick={() => handleDeleteDirector(index)}
                                  />
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className={`${styles.add_row} p-3 d-flex justify-content-end`}
                  onClick={(e) => {
                    onAddDirector()
                  }}
                >
                  <span>+</span>
                  <div>Add More Rows</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.main} mt-4 mr-2 ml-2 card border_color `}>
            <div
              className={`${styles.head_container} border_color card-header d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#businessSummary"
              aria-expanded="true"
              aria-controls="businessSummary"
            >
              <h3 className={`${styles.heading} mb-0`}>Business Summary</h3>
              <span>+</span>
            </div>
            <div
              id="businessSummary"
              className="collapse"
              aria-labelledby="businessSummary"
              data-parent="#businessSummary"
            >
              <div className={`${styles.dashboard_form} mr-3`}>
                {/* <div className={`${styles.comment_para} d-flex `}>
                  <Form.Control
                    className={`${styles.comment}`}
                    as="textarea"
                    rows={3}
                  />

                  <div className="ml-3">
                    <img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image} img-fluid mb-3`}
                      alt="edit"
                      // onClick={(e) => {
                      //   setEditProfile(!editProfile)
                      // }}
                    />
                    <img
                      src="/static/delete 2.svg"
                      className="img-fluid"
                      alt="delete"
                    />
                  </div>
                </div> */}

                <div className="d-flex mt-4 pb-4">
                  <input
                    as="textarea"
                    rows={3}
                    placeholder=""
                    className={`${styles.comment_field} mr-n5 form-control`}
                  />
                  <label className={`${styles.label_textarea} text`}>
                    Business Summary
                  </label>

                  <img
                    className={`${styles.plus_field} img-fluid`}
                    src="/static/add-btn.svg"
                    alt="add button"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.main} mt-4 mr-2 ml-2 card border_color`}>
            <div
              className={`${styles.head_container} border_color card-header d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#commodity"
              aria-expanded="true"
              aria-controls="commodity"
            >
              <h3 className={`${styles.heading} mb-0`}>Commodities Traded</h3>
              <span>+</span>
            </div>
            <div
              id="commodity"
              className="collapse"
              aria-labelledby="commodity"
              data-parent="#commodity"
            >
              <div className={`${styles.datatable} card-body datatable`}>
                <div className={`${styles.table_scroll_outer}`}>
                  <div className={`${styles.table_scroll_inner}`}>
                    <table
                      className={`${styles.table} table`}
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <thead>
                        <tr>
                          <th>
                            HSN CODE<strong className="text-danger">*</strong>
                          </th>
                          <th>
                            COMMODITY
                            <strong className="text-danger">*</strong>
                          </th>

                          <th width="50%"></th>
                        </tr>
                      </thead>

                      <tbody>
                        {listCommodity.length > 0 &&
                          listCommodity.map((val, index) => (
                            <tr key={index} className="table_credit">
                              <td>
                                <input
                                  className="input font-weight-bold"
                                  name="name"
                                  type="text"
                                  readOnly={!saveCommodityTable}
                                />
                              </td>
                              <td>
                                <input
                                  className="input"
                                  name="designation"
                                  type="text"
                                  readOnly={!saveCommodityTable}
                                />
                              </td>

                              <td className="text-right">
                                <div>
                                  {!saveCommodityTable ? (
                                    <>
                                      <img
                                        src="/static/mode_edit.svg"
                                        className={`${styles.edit_image} mr-3 img-fluid`}
                                        alt="edit"
                                        onClick={(e) => {
                                          setCommodityTable(true)
                                        }}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <img
                                        src="/static/save-3.svg"
                                        className={`${styles.edit_image} mr-3 img-fluid`}
                                        alt="save"
                                        onClick={(e) => {
                                          setCommodityTable(false)
                                        }}
                                      />
                                    </>
                                  )}

                                  <img
                                    src="/static/delete 2.svg"
                                    className="img-fluid"
                                    alt="delete"
                                    onClick={() => handleCommodity(index)}
                                  />
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className={`${styles.add_row} p-3 d-flex justify-content-end`}
                  onClick={(e) => {
                    onAddCommodity()
                  }}
                >
                  <span>+</span>
                  <div>Add More Rows</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.main} mt-4 mr-2 ml-2 card border_color `}>
            <div
              className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#additional"
              aria-expanded="true"
              aria-controls="additional"
            >
              <h3 className={`${styles.heading} mb-0`}>
                Additional Information
              </h3>
              <span>+</span>
            </div>
            <div
              id="additional"
              className="collapse"
              aria-labelledby="additional"
              data-parent="#additional"
            >
              <div className={`${styles.dashboard_form} mr-3`}>
                {/* <div className={`${styles.comment_para} d-flex `}>
                  <Form.Control
                    className={`${styles.comment}`}
                    as="textarea"
                    rows={3}
                  />

                  <div className="ml-3">
                    <img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image} img-fluid mb-3`}
                      alt="edit"
                      // onClick={(e) => {
                      //   setEditProfile(!editProfile)
                      // }}
                    />
                    <img
                      src="/static/delete 2.svg"
                      className="img-fluid"
                      alt="delete"
                    />
                  </div>
                </div> */}

                <div className="d-flex mt-4 pb-4">
                  <input
                    as="textarea"
                    rows={3}
                    placeholder=""
                    className={`${styles.comment_field} form-control`}
                  />
                  <label className={`${styles.label_textarea}  text`}>
                    Remarks
                  </label>

                  <img
                    className={`${styles.plus_field} img-fluid`}
                    src="/static/add-btn.svg"
                    alt="add button"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 ml-2 mr-2 mb-5">
            <InspectionDocument documentName="Incumbency Certificate" />
          </div>
        </div>
        <SaveBar rightBtn="Send for Approval" />
      </div>
    </>
  )
}
export default Index
