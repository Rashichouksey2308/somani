/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'
import DateCalender from '../DateCalender'
import { Card } from 'react-bootstrap'
import Router from 'next/router'

function Index() {
  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
          <div
            className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
          >
            <h3 className={`${styles.heading}`}>Profile Details</h3>
          </div>

          <div className={`${styles.dashboard_form} mt-1 card-body`}>
            <div className={`${styles.radio_form} mb-2`}>
              <div className={`${styles.sub_heading} label_heading`}>
                User Type <strong className="text-danger">*</strong>
              </div>
              {['radio'].map((type, index) => (
                <div key={`inline-${index}`} className={styles.radio_group}>
                  <Form.Check
                    className={styles.radio}
                    inline
                    defaultChecked
                    label="Internal"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    className={styles.radio}
                    inline
                    label="External"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </div>
            <div className="row">
              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <input
                  className={`${styles.input_field} input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Company Business Name
                  <strong className="text-danger">*</strong>
                </label>
              </div>
              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <input
                  className={`${styles.input_field} input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Short Name
                </label>
              </div>
              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <input
                  className={`${styles.input_field} input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  PAN
                  <strong className="text-danger">*</strong>
                </label>
              </div>

              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <div className="d-flex">
                  <DateCalender labelName="Date of Incorporation" />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src="/static/caldericon.svg"
                    alt="Search"
                  />
                </div>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  type="text"
                  id="textInput"
                  name="email"
                  className={`${styles.input_field} input form-control`}
                  required
                />
                <label
                  className={`${styles.label_heading} label_heading`}
                  id="textInput"
                >
                  Official Email ID<strong className="text-danger">*</strong>
                </label>
              </div>
              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <input
                  className={`${styles.input_field} input form-control`}
                  type="password"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Password<strong className="text-danger">*</strong>
                </label>
              </div>
              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <input
                  className={`${styles.input_field} input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  User Role<strong className="text-danger">*</strong>
                </label>
              </div>
              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <input
                  className={`${styles.input_field} input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Phone Number
                  <strong className="text-danger">*</strong>
                </label>
              </div>
              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <input
                  className={`${styles.input_field} input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Alternate Phone Number
                </label>
              </div>
              <div
                className={`${styles.each_input} col-md-6 col-lg-4  col-sm-6`}
                style={{ marginTop: -1 }}
              >
                <div className={styles.radio_form} style={{ paddingLeft: 10 }}>
                  <div className={`${styles.sub_heading} label_heading`}>
                    Communication Mode<strong className="text-danger">*</strong>
                  </div>
                  <Form selected="">
                    {['checkbox'].map((type) => (
                      <div
                        key={`inline-${type}`}
                        className={styles.radio_group}
                      >
                        <Form.Check
                          className={`${styles.radio} radio`}
                          inline
                          // defaultChecked={true}
                          label="Email ID"
                          name="Email"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          className={`${styles.radio} radio`}
                          inline
                          label="SMS"
                          name="SMS"
                          type={type}
                          id={`inline-${type}-2`}
                        />

                        <Form.Check
                          className={`${styles.radio} radio`}
                          inline
                          label="Whatsapp"
                          name="Whatsapp"
                          // type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </Form>
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
                    <option>Select an option</option>
                    <option>+91</option>
                    <option>+1</option>
                    <option>+92</option>
                    <option>+95</option>
                    <option>+24</option>
                  </select>
                  <input
                    type="tel"
                    id="textNumber"
                    name="phoneNumber"
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
                    <div className={`${styles.form_group} col-md-12 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        type="text"
                        required
                        name="contactPerson"
                      />
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Address
                        <strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-4`}>
                      <div className="d-flex">
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          name="pinCode"
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

                    <div className={`${styles.form_group} col-md-4 col-sm-4`}>
                      <div className="d-flex">
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          name="country"
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

                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <div className="d-flex">
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          name="emailId"
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
                  //onClick={() => addData('address')}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Index
