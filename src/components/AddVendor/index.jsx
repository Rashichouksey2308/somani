/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import DateCalender from '../DateCalender';
import { Card } from 'react-bootstrap';
import { UploadDocument } from '../UploadDocument';
import Router from 'next/router';
import Image from 'next/image';
import UploadOther from '../UploadOther';

function Index() {
  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
          <div
            className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
          >
            <h3 className={`${styles.heading}`}>Vendor Details</h3>
          </div>

          <div className={`${styles.dashboard_form} card-body`}>
            <div className="row">
              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <div className={`${styles.radio_form}`}>
                  <div className={`${styles.sub_heading} label_heading`}>
                    Vendor <strong className="text-danger">*</strong>
                  </div>
                  {['radio'].map((type, index) => (
                    <div
                      key={`inline-${index}`}
                      className={`${styles.radio_group}`}
                    >
                      <Form.Check
                        className={styles.radio}
                        inline
                        defaultChecked
                        label="Domestic"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="International"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <div className="d-flex">
                  <select
                    className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                  >
                    <option value="">CMA</option>
                    <option value="">CHA</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Vendor Type<strong className="text-danger ml-1">*</strong>
                  </label>
                  <div className={`${styles.img_arrow} image_arrow`}>
                    <Image
                      width="13px"
                      height="8px"
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  PAN/Tax ID <strong className="text-danger">*</strong>
                </label>
              </div>
              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Company Name <strong className="text-danger">*</strong>
                </label>
              </div>
              <div
                className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}
              >
                <div className="d-flex">
                  <DateCalender labelName="Activation Date" />
                  <div className={`${styles.calanderIcon} image_arrow`}>
                    <Image
                      width="22px"
                      height="24px"
                      src="/static/caldericon.svg"
                      alt="Calender"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}
              >
                <div className="d-flex">
                  <DateCalender labelName="Deactivation Date" />
                  <div className={`${styles.calanderIcon} image_arrow`}>
                    <Image
                      width="22px"
                      height="24px"
                      src="/static/caldericon.svg"
                      alt="Calender"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <div className="d-flex">
                  <DateCalender labelName="Blacklisted Date" />
                  <div className={`${styles.calanderIcon} image_arrow`}>
                    <Image
                      width="22px"
                      height="24px"
                      src="/static/caldericon.svg"
                      alt="Calender"
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  type="text"
                  id="textInput"
                  name="email"
                  className={`${styles.input_field} border_color input form-control`}
                />
                <label
                  className={`${styles.label_heading} label_heading`}
                  id="textInput"
                >
                  Email ID <strong className="text-danger">*</strong>
                </label>
              </div>
              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Phone <strong className="text-danger">*</strong>
                </label>
              </div>

              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Website
                </label>
              </div>

              {/* <div
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
                    name="phoneNumber"
                    className={`${styles.input_field} border_color input form-control border-left-0`}
                  />
                  <label
                    className={`${styles.label_heading} label_heading`}
                    id="textNumber"
                  >
                    Phone Number
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
              </div> */}
            </div>
            <div className="row">
              <div className={`${styles.form_group} col-lg-8 col-md-12 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Remarks<strong className="text-danger ml-1">*</strong>
                </label>
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
                      <label className={styles.label}>
                        Registered Office Address
                      </label>
                      <div className={styles.address_values}>
                        <p>N-11, 29 Tilak Marg, New Delhi</p>
                        <p>
                          <span>GSTIN:</span> RTF67WTF76RT456
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex">
                        <img
                          className={`${styles.edit_image} img-fluid`}
                          src="/static/mode_edit.svg"
                          alt="Edit"
                        />
                        <div className={`${styles.delete_image} ml-3`}>
                          <Image
                            src="/static/delete.svg"
                            width="40px"
                            height="40px"
                            alt="Bin"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.address_card} value background1`}
                  style={{ padding: '22px' }}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <label className={styles.label}>
                        Registered Office Address
                      </label>
                      <div className={styles.address_values}>
                        <p>N-11, 29 Tilak Marg, New Delhi</p>
                        <p>
                          <span>GSTIN:</span> RTF67WTF76RT456
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex">
                        <img
                          className={`${styles.edit_image} img-fluid`}
                          src="/static/mode_edit.svg"
                          alt="Edit"
                        />
                        <div className={`${styles.delete_image} ml-3`}>
                          <Image
                            src="/static/delete.svg"
                            width="40px"
                            height="40px"
                            alt="Bin"
                          />
                        </div>
                      </div>
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
                </div>
                <div
                  className={`${styles.dashboard_form} card-body border_color`}
                >
                  <div className="row">
                    <div className={`${styles.form_group} col-md-3 col-sm-4`}>
                      <div className="d-flex">
                        <select
                          className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                          name="countryOfOrigin"
                          required
                        >
                          <option value="India">Agra</option>
                          <option value="Dubai">Dubai</option>
                        </select>
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Address Type<strong className="text-danger">*</strong>
                        </label>
                        <div className={`${styles.image_arrow} image_arrow`}>
                          <Image
                            width="13px"
                            height="8px"
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <input
                        className={`${styles.input_field} border_color input form-control`}
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
                    </div>
                    <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <div className="d-flex">
                        <select
                          className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                          name="countryOfOrigin"
                          required
                          style={{ paddingRight: '35px' }}
                        >
                          <option value="India">Uttar Pradesh</option>
                          <option value="Dubai">Dubai</option>
                        </select>
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          State<strong className="text-danger">*</strong>
                        </label>
                        <div className={`${styles.image_arrow} image_arrow`}>
                          <Image
                            width="13px"
                            height="8px"
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <div className="d-flex">
                        <select
                          className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                          name="countryOfOrigin"
                          required
                        >
                          <option value="India">Agra</option>
                          <option value="Dubai">Dubai</option>
                        </select>
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          City<strong className="text-danger">*</strong>
                        </label>
                        <div className={`${styles.image_arrow} image_arrow`}>
                          <Image
                            width="13px"
                            height="8px"
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.form_group} col-md-3 col-sm-4`}>
                      <input
                        className={`${styles.input_field} border_color input form-control`}
                        required
                        type="text"
                        name="pinCode"
                      />
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        GSTIN
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-md-12`}>
                      <input
                        className={`${styles.input_field} ${styles.address_field} border_color input form-control`}
                        required
                        type="text"
                        name="pinCode"
                      />
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Address<strong className="text-danger">*</strong>
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  className={`${styles.add_btn}`}
                  //onClick={() => addData('address')}
                >
                  Add
                </button>
                <button className={`${styles.cancel_btn}`}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <UploadOther isDocumentName={true}/>
        </div>
      </div>
    </div>
  );
}
export default Index;
