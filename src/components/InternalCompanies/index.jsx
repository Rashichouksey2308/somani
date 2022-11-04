/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import DateCalender from '../DateCalender';
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
            <h3 className={`${styles.heading}`}>Internal Companies</h3>
          </div>

          <div className={`${styles.dashboard_form} card-body`}>
            <div className="row">
            
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <div className="d-flex">
                  <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}>
                    <option value="">India</option>
                    <option value="">US</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Country <strong className="text-danger ml-1">*</strong>
                  </label>
                  <div className={`${styles.img_arrow} image_arrow`}>
                    <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                  </div>
                </div>
              </div>
            
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
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
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Short Name <strong className="text-danger">*</strong>
                </label>
              </div>
            
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  PAN <strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}
                >CIN No. <strong className="text-danger">*</strong></label>
              </div>
             
            </div>
          </div>

          <div className={`${styles.dashboard_form} card-body`} style={{ borderTop: '3px solid #D2D7E5' }}>
            <div className={`${styles.card_heading} mt-3`}>Key Addresses</div>
            <div className={`${styles.address_card} pb-5 value background1`} style={{ marginTop: '40px' }}>
              <div
                className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
              >
                <h3 className={`${styles.heading}`}>Add New Address</h3>
              </div>
              <div className={`${styles.dashboard_form} card-body border_color`}>
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
                      <label className={`${styles.label_heading} label_heading`}>
                        Address Type<strong className="text-danger">*</strong>
                      </label>
                      <div className={`${styles.image_arrow} image_arrow`}>
                        <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                      </div>
                    </div>
                  </div>
                
                  <div className={`${styles.form_group} col-lg-9`}>
                    <input
                      className={`${styles.input_field} border_color input form-control`}
                      required
                      type="text"
                      name="pinCode"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Address<strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-md-3 col-sm-6`}>
                    <input
                      type="text"
                      id="textInput"
                      required
                      className={`${styles.input_field} border_color input form-control`}
                    />
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Email <strong className="text-danger">*</strong> 
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
            <div className="d-flex justify-content-between">
              <div className={`${styles.address_card} value background1`} style={{ padding: '22px' }}>
                <div className="d-flex justify-content-between">
                  <div>
                    <label className={styles.label}>Registered Address</label>
                    <div className={styles.address_values}>
                      <p>N-11, 29 Tilak Marg, New Delhi</p>
                      <div className="d-flex">
                        <p>
                          <span>Email:</span> abc@email.com
                        </p>
                        <p>
                          <span className="ml-5">GSTIN:</span> RTF67WTF76RT456
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex">
                      <img className={`${styles.edit_image} img-fluid`} src="/static/mode_edit.svg" alt="Edit" />
                      <div className={`${styles.delete_image} ml-3`}>
                        <Image src="/static/delete.svg" width="40px" height="40px" alt="Bin" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
          <div
            className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
            data-toggle="collapse"
            data-target="#bankDetails"
            aria-expanded="true"
            aria-controls="bankDetails"
          >
            <h3 className={`${styles.heading} mb-0`}>Bank Details</h3>
            <span>+</span>
          </div>
          <div id="bankDetails" className="collapse" aria-labelledby="bankDetails">
            <div className={`${styles.dashboard_form} card-body`}>
             
                <div className="row">
                  <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                    <input
                      className={`${styles.input_field} border_color input form-control`}
                      type="text"
                      required
                      name="supplierName"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Bank Name <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                    <input
                      className={`${styles.input_field} border_color input form-control`}
                      type="text"
                      required
                      name="supplierName"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Account No. <strong className="text-danger">*</strong>
                    </label>
                  </div>

                  <div className={`${styles.form_group} col-md-2 col-sm-6`}>
                    <input
                      type="text"
                      id="textInput"
                      name="email"
                      required
                      className={`${styles.input_field} border_color input form-control`}
                    />
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Swift Code <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-md-5 col-sm-6`}>
                    <input
                      type="text"
                      id="textInput"
                      // name="email"
                      required
                      className={`${styles.input_field} border_color input form-control`}
                    />
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Branch Address <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                    <input
                      className={`${styles.input_field} border_color input form-control`}
                      type="text"
                      required
                      name="supplierName"
                    />
                    <label className={`${styles.label_heading} label_heading`}>Correspondent Bank Name</label>
                  </div>
                  <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                    <input
                      className={`${styles.input_field} border_color input form-control`}
                      type="text"
                      required
                      name="supplierName"
                    />
                    <label className={`${styles.label_heading} label_heading`}>Account No.</label>
                  </div>

                  <div className={`${styles.form_group} col-md-2 col-sm-6`}>
                    <input
                      type="text"
                      id="textInput"
                      name="email"
                      required
                      className={`${styles.input_field} border_color input form-control`}
                    />
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Swift Code
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-md-5 col-sm-6`}>
                    <input
                      type="text"
                      id="textInput"
                      // name="email"
                      required
                      className={`${styles.input_field} border_color input form-control`}
                    />
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Branch Address
                    </label>
                  </div>
                </div>
          
            </div>
          </div>
        </div>
        <div className="mt-4">
          <UploadOther isDocumentName={true} />
        </div>

        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
          <div className={`${styles.dashboard_form} card-body`}>
            <div className="row">
              <div className={`${styles.form_group} col-lg-9 col-sm-12 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>Remarks</label>
              </div>
              <div className={`${styles.form_group} col-lg-3 col-sm-6 `}>
                <div className={`${styles.approve} ml-3`}>
                  <span>Send for Approval</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end mb-5" style={{ marginTop: '35px' }}>
          <div className={`${styles.footer_heading} mr-5`}>
            Created By <span>Balakrishna SGF001</span>
          </div>
          <div className={`${styles.footer_heading}`}>
            Approved By <span>Ramakrishna SGF001</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
