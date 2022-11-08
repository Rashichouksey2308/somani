/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
<<<<<<< Updated upstream
import React, { useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import DateCalender from '../DateCalender';
import Image from 'next/image';
import UploadOther from '../UploadOther';

function Index() {
=======
import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'
import DateCalender from '../DateCalender'
import Image from 'next/image'
import UploadOther from '../UploadOther'

function Index () {
>>>>>>> Stashed changes
  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
        <div className={`${styles.main} vessel_card card border_color`}>
          <div
            className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
<<<<<<< Updated upstream
            data-toggle="collapse"
            data-target="#internalCompanies"
            aria-expanded="true"
            aria-controls="internalCompanies"
=======
            data-toggle='collapse'
            data-target='#internalCompanies'
            aria-expanded='true'
            aria-controls='internalCompanies'
>>>>>>> Stashed changes
          >
            <h3 className={`${styles.heading}`}>Internal Companies</h3>
            <span>+</span>
          </div>
          <div
<<<<<<< Updated upstream
            id="internalCompanies"
            //className="collapse"
            aria-labelledby="internalCompanies"
          >
            <div className={`${styles.dashboard_form} card-body`}>
              <div className="row">
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                  <div className="d-flex">
                    <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}>
                      <option value="">India</option>
                      <option value="">Switzerland</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Country <strong className="text-danger ml-1">*</strong>
                    </label>
                    <div className={`${styles.img_arrow} image_arrow`}>
                      <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
=======
            id='internalCompanies'
            // className="collapse"
            aria-labelledby='internalCompanies'
          >
            <div className={`${styles.dashboard_form} card-body`}>
              <div className='row'>
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                  <div className='d-flex'>
                    <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}>
                      <option value=''>India</option>
                      <option value=''>Switzerland</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Country <strong className='text-danger ml-1'>*</strong>
                    </label>
                    <div className={`${styles.img_arrow} image_arrow`}>
                      <Image width='13px' height='8px' src='/static/inputDropDown.svg' alt='Search' />
>>>>>>> Stashed changes
                    </div>
                  </div>
                </div>

                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                  <input
                    className={`${styles.input_field} border_color input form-control`}
<<<<<<< Updated upstream
                    type="text"
                    required
                    name="supplierName"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Company Name <strong className="text-danger">*</strong>
=======
                    type='text'
                    required
                    name='supplierName'
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Company Name <strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                  </label>
                </div>
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                  <input
                    className={`${styles.input_field} border_color input form-control`}
<<<<<<< Updated upstream
                    type="text"
                    required
                    name="supplierName"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Short Name <strong className="text-danger">*</strong>
=======
                    type='text'
                    required
                    name='supplierName'
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Short Name <strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                  </label>
                </div>

                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                  <input
                    className={`${styles.input_field} border_color input form-control`}
<<<<<<< Updated upstream
                    type="text"
                    required
                    name="supplierName"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    PAN <strong className="text-danger">*</strong>
=======
                    type='text'
                    required
                    name='supplierName'
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    PAN <strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                  </label>
                </div>

                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                  <input
                    className={`${styles.input_field} border_color input form-control`}
<<<<<<< Updated upstream
                    type="text"
                    required
                    name="supplierName"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    CIN No. <strong className="text-danger">*</strong>
=======
                    type='text'
                    required
                    name='supplierName'
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    CIN No. <strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                  </label>
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
<<<<<<< Updated upstream
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
=======
                  <div className='row'>
                    <div className={`${styles.form_group} col-md-3 col-sm-4`}>
                      <div className='d-flex'>
                        <select
                          className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                          name='countryOfOrigin'
                          required
                        >
                          <option value='India'>Agra</option>
                          <option value='Dubai'>Dubai</option>
                        </select>
                        <label className={`${styles.label_heading} label_heading`}>
                          Address Type<strong className='text-danger'>*</strong>
                        </label>
                        <div className={`${styles.image_arrow} image_arrow`}>
                          <Image width='13px' height='8px' src='/static/inputDropDown.svg' alt='Search' />
>>>>>>> Stashed changes
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <input
                        className={`${styles.input_field} border_color input form-control`}
                        required
<<<<<<< Updated upstream
                        type="number"
                        onWheel={(event) => event.currentTarget.blur()}
                        onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                        name="pinCode"
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Pin Code <strong className="text-danger">*</strong>
=======
                        type='number'
                        onWheel={(event) => event.currentTarget.blur()}
                        onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                        name='pinCode'
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Pin Code <strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <div className={`${styles.col_header} label_heading`}>State</div>
                      <div className={styles.col_body}>Uttar Pradesh</div>
                    </div>
                    <div className={`${styles.form_group} col-md-2 col-sm-4`}>
<<<<<<< Updated upstream
                      <div className="d-flex">
                        <select
                          className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                          name="countryOfOrigin"
                          required
                        >
                          <option value="India">Agra</option>
                          <option value="Dubai">Dubai</option>
                        </select>
                        <label className={`${styles.label_heading} label_heading`}>City</label>
                        <div className={`${styles.image_arrow} image_arrow`}>
                          <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
=======
                      <div className='d-flex'>
                        <select
                          className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                          name='countryOfOrigin'
                          required
                        >
                          <option value='India'>Agra</option>
                          <option value='Dubai'>Dubai</option>
                        </select>
                        <label className={`${styles.label_heading} label_heading`}>City</label>
                        <div className={`${styles.image_arrow} image_arrow`}>
                          <Image width='13px' height='8px' src='/static/inputDropDown.svg' alt='Search' />
>>>>>>> Stashed changes
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.form_group} col-md-3 col-sm-4`}>
                      <input
                        className={`${styles.input_field} border_color input form-control`}
                        required
<<<<<<< Updated upstream
                        type="text"
                        name="pinCode"
=======
                        type='text'
                        name='pinCode'
>>>>>>> Stashed changes
                      />
                      <label className={`${styles.label_heading} label_heading`}>GSTIN</label>
                    </div>
                    <div className={`${styles.form_group} col-lg-8`}>
                      <input
                        className={`${styles.input_field} border_color input form-control`}
                        required
<<<<<<< Updated upstream
                        type="text"
                        name="pinCode"
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Address <strong className="text-danger">*</strong>
=======
                        type='text'
                        name='pinCode'
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Address <strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-md-2 col-sm-6`}>
                      <input
<<<<<<< Updated upstream
                        type="text"
                        id="textInput"
                        required
                        className={`${styles.input_field} border_color input form-control`}
                      />
                      <label className={`${styles.label_heading} label_heading`} id="textInput">
                        Branch <strong className="text-danger">*</strong>
=======
                        type='text'
                        id='textInput'
                        required
                        className={`${styles.input_field} border_color input form-control`}
                      />
                      <label className={`${styles.label_heading} label_heading`} id='textInput'>
                        Branch <strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-md-2 col-sm-6`}>
                      <input
<<<<<<< Updated upstream
                        type="text"
                        id="textInput"
                        required
                        className={`${styles.input_field} border_color input form-control`}
                      />
                      <label className={`${styles.label_heading} label_heading`} id="textInput">
                        Email <strong className="text-danger">*</strong>
=======
                        type='text'
                        id='textInput'
                        required
                        className={`${styles.input_field} border_color input form-control`}
                      />
                      <label className={`${styles.label_heading} label_heading`} id='textInput'>
                        Email <strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  className={`${styles.add_btn}`}
<<<<<<< Updated upstream
                  //onClick={() => addData('address')}
=======
                  // onClick={() => addData('address')}
>>>>>>> Stashed changes
                >
                  Add
                </button>
                <button className={`${styles.cancel_btn}`}>Cancel</button>
              </div>
<<<<<<< Updated upstream
              <div className="d-flex justify-content-between">
                <div className={`${styles.address_card} value background1`} style={{ padding: '22px' }}>
                  <div className="d-flex justify-content-between">
=======
              <div className='d-flex justify-content-between'>
                <div className={`${styles.address_card} value background1`} style={{ padding: '22px' }}>
                  <div className='d-flex justify-content-between'>
>>>>>>> Stashed changes
                    <div>
                      <label className={styles.label}>Registered Address</label>
                      <div className={styles.address_values}>
                        <p>N-11, 29 Tilak Marg, New Delhi</p>
<<<<<<< Updated upstream
                        <div className="d-flex">
=======
                        <div className='d-flex'>
>>>>>>> Stashed changes
                          <p>
                            <span>Email:</span> abc@email.com
                          </p>
                          <p>
<<<<<<< Updated upstream
                            <span className="ml-5">GSTIN:</span> RTF67WTF76RT456
=======
                            <span className='ml-5'>GSTIN:</span> RTF67WTF76RT456
>>>>>>> Stashed changes
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
<<<<<<< Updated upstream
                      <div className="d-flex">
                        <img className={`${styles.edit_image} img-fluid`} src="/static/mode_edit.svg" alt="Edit" />
                        <div className={`${styles.delete_image} ml-3`}>
                          <Image src="/static/delete.svg" width="40px" height="40px" alt="Bin" />
=======
                      <div className='d-flex'>
                        <img className={`${styles.edit_image} img-fluid`} src='/static/mode_edit.svg' alt='Edit' />
                        <div className={`${styles.delete_image} ml-3`}>
                          <Image src='/static/delete.svg' width='40px' height='40px' alt='Bin' />
>>>>>>> Stashed changes
                        </div>
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
<<<<<<< Updated upstream
            data-toggle="collapse"
            data-target="#bankDetails"
            aria-expanded="true"
            aria-controls="bankDetails"
=======
            data-toggle='collapse'
            data-target='#bankDetails'
            aria-expanded='true'
            aria-controls='bankDetails'
>>>>>>> Stashed changes
          >
            <h3 className={`${styles.heading} mb-0`}>Bank Details</h3>
            <span>+</span>
          </div>
<<<<<<< Updated upstream
          <div id="bankDetails" className="collapse" aria-labelledby="bankDetails">
=======
          <div id='bankDetails' className='collapse' aria-labelledby='bankDetails'>
>>>>>>> Stashed changes
            <div className={`${styles.dashboard_form} card-body`}>
              <div className={`${styles.address_card} pb-5 value background1`} style={{ marginTop: '40px' }}>
                <div
                  className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
                >
                  <h3 className={`${styles.heading}`}>Add New Bank</h3>
                </div>
                <div className={`${styles.dashboard_form} card-body border_color`}>
<<<<<<< Updated upstream
                  <div className="row">
                    <div className={`${styles.form_group} col-lg-4 col-md-6`}>
                      <input className={`${styles.input_field} border_color input form-control`} required type="text" />
                      <label className={`${styles.label_heading} label_heading`}>
                        IFSC <strong className="text-danger">*</strong>
=======
                  <div className='row'>
                    <div className={`${styles.form_group} col-lg-4 col-md-6`}>
                      <input className={`${styles.input_field} border_color input form-control`} required type='text' />
                      <label className={`${styles.label_heading} label_heading`}>
                        IFSC <strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                      </label>
                    </div>

                    <div className={`${styles.form_group} col-lg-4 col-md-6`}>
                      <input
                        className={`${styles.input_field} border_color input form-control`}
                        required
<<<<<<< Updated upstream
                        type="text"
                        name="pinCode"
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Bank Name <strong className="text-danger">*</strong>
=======
                        type='text'
                        name='pinCode'
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Bank Name <strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6`}>
                      <input
                        className={`${styles.input_field} border_color input form-control`}
                        required
<<<<<<< Updated upstream
                        type="text"
                        name="pinCode"
=======
                        type='text'
                        name='pinCode'
>>>>>>> Stashed changes
                      />
                      <label className={`${styles.label_heading} label_heading`}>Branch Address</label>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6`}>
                      <input
                        className={`${styles.input_field} border_color input form-control`}
                        required
<<<<<<< Updated upstream
                        type="number"
                        onWheel={(event) => event.currentTarget.blur()}
                        onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                        name="pinCode"
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Account No. <strong className="text-danger">*</strong>
=======
                        type='number'
                        onWheel={(event) => event.currentTarget.blur()}
                        onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                        name='pinCode'
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Account No. <strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6`}>
                      <input
<<<<<<< Updated upstream
                        type="text"
                        id="textInput"
                        required
                        className={`${styles.input_field} border_color input form-control`}
                      />
                      <label className={`${styles.label_heading} label_heading`} id="textInput">
=======
                        type='text'
                        id='textInput'
                        required
                        className={`${styles.input_field} border_color input form-control`}
                      />
                      <label className={`${styles.label_heading} label_heading`} id='textInput'>
>>>>>>> Stashed changes
                        GSTIN
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6`}>
                      <input
<<<<<<< Updated upstream
                        type="text"
                        id="textInput"
                        required
                        className={`${styles.input_field} border_color input form-control`}
                      />
                      <label className={`${styles.label_heading} label_heading`} id="textInput">
=======
                        type='text'
                        id='textInput'
                        required
                        className={`${styles.input_field} border_color input form-control`}
                      />
                      <label className={`${styles.label_heading} label_heading`} id='textInput'>
>>>>>>> Stashed changes
                        AD Code
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  className={`${styles.add_btn}`}
<<<<<<< Updated upstream
                  //onClick={() => addData('address')}
=======
                  // onClick={() => addData('address')}
>>>>>>> Stashed changes
                >
                  Add
                </button>
                <button className={`${styles.cancel_btn}`}>Cancel</button>
              </div>
            </div>
            <div className={`${styles.table_form} mb-4`}>
              <div className={styles.table_container}>
                <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
<<<<<<< Updated upstream
                    <table className={`${styles.table} mb-0 table`} cellPadding="0" cellSpacing="0" border="0">
=======
                    <table className={`${styles.table} mb-0 table`} cellPadding='0' cellSpacing='0' border='0'>
>>>>>>> Stashed changes
                      <thead>
                        <tr>
                          <th>BANK NAME</th>
                          <th>ACCOUNT NO.</th>
                          <th>IFSC</th>
                          <th>AD CODE</th>
                          <th>BRANCH ADDRESS</th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>ICICI Bank</td>
                          <td>63547853487</td>
                          <td>ICIC0000031</td>
                          <td>63547853487</td>
                          <td>A-44, Sagar Apartments, Tilak Marg, Agra</td>
                          <td>
                            <div>
<<<<<<< Updated upstream
                              <img src="/static/mode_edit.svg" className={`${styles.edit_image} mr-3`} alt="edit" />

                              <img
                                src="/static/delete 2.svg"
                                className={`${styles.delete_image} border-0 p-0`}
                                alt="delete"
=======
                              <img src='/static/mode_edit.svg' className={`${styles.edit_image} mr-3`} alt='edit' />

                              <img
                                src='/static/delete 2.svg'
                                className={`${styles.delete_image} border-0 p-0`}
                                alt='delete'
>>>>>>> Stashed changes
                              />
                            </div>
                          </td>
                        </tr>
<<<<<<< Updated upstream
                       
=======

>>>>>>> Stashed changes
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
          <div
            className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
<<<<<<< Updated upstream
            data-toggle="collapse"
            data-target="#authorisedDetails"
            aria-expanded="true"
            aria-controls="authorisedDetails"
=======
            data-toggle='collapse'
            data-target='#authorisedDetails'
            aria-expanded='true'
            aria-controls='authorisedDetails'
>>>>>>> Stashed changes
          >
            <h3 className={`${styles.heading} mb-0`}>Authorised Signatories Details</h3>
            <span>+</span>
          </div>
<<<<<<< Updated upstream
          <div id="authorisedDetails" className="collapse" aria-labelledby="authorisedDetails">
            <div className={`${styles.dashboard_form} card-body`}>
              <div className="row">
                
                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                  <div className="d-flex">
                    <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}>
                      <option value="">John Doe</option>
                      <option value="">US</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Name <strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.img_arrow} image_arrow`}>
                      <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
=======
          <div id='authorisedDetails' className='collapse' aria-labelledby='authorisedDetails'>
            <div className={`${styles.dashboard_form} card-body`}>
              <div className='row'>

                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                  <div className='d-flex'>
                    <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}>
                      <option value=''>John Doe</option>
                      <option value=''>US</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Name <strong className='text-danger'>*</strong>
                    </label>
                    <div className={`${styles.img_arrow} image_arrow`}>
                      <Image width='13px' height='8px' src='/static/inputDropDown.svg' alt='Search' />
>>>>>>> Stashed changes
                    </div>
                  </div>
                </div>
                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                  <input
                    className={`${styles.input_field} border_color input form-control`}
<<<<<<< Updated upstream
                    type="text"
                    required
                    name="supplierName"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Email <strong className="text-danger">*</strong>
=======
                    type='text'
                    required
                    name='supplierName'
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Email <strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                  </label>
                </div>

                <div className={`${styles.form_group} col-lg-3 col-sm-6`}>
                  <input
<<<<<<< Updated upstream
                    type="text"
                    id="textInput"
                    name="email"
                    required
                    className={`${styles.input_field} border_color input form-control`}
                  />
                  <label className={`${styles.label_heading} label_heading`} id="textInput">
                    Designation <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-lg-3 col-sm-6`}>
                  <div className="d-flex mt-2">
                    <img src="/static/mode_edit.svg" className={`${styles.edit_image} mr-3`} alt="edit" />
                    <img src="/static/delete 2.svg" className={`${styles.delete_image} border-0 p-0`} alt="delete" />
=======
                    type='text'
                    id='textInput'
                    name='email'
                    required
                    className={`${styles.input_field} border_color input form-control`}
                  />
                  <label className={`${styles.label_heading} label_heading`} id='textInput'>
                    Designation <strong className='text-danger'>*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-lg-3 col-sm-6`}>
                  <div className='d-flex mt-2'>
                    <img src='/static/mode_edit.svg' className={`${styles.edit_image} mr-3`} alt='edit' />
                    <img src='/static/delete 2.svg' className={`${styles.delete_image} border-0 p-0`} alt='delete' />
>>>>>>> Stashed changes
                    {/* <img className={`${styles.plus_add} img-fluid`} src="/static/add-btn.svg" alt="Plus" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
          <div className={`${styles.dashboard_form} d-flex justify-content-end card-body`}>
            <div className={`${styles.approve} ml-3`}>
              <span>Send for Approval</span>
            </div>
          </div>
        </div>

<<<<<<< Updated upstream
        <div className="d-flex justify-content-end mb-5" style={{ marginTop: '35px' }}>
=======
        <div className='d-flex justify-content-end mb-5' style={{ marginTop: '35px' }}>
>>>>>>> Stashed changes
          <div className={`${styles.footer_heading} mr-5`}>
            Created By <span>Balakrishna SGF001</span>
          </div>
          <div className={`${styles.footer_heading}`}>
            Approved By <span>Ramakrishna SGF001</span>
          </div>
        </div>
      </div>
    </div>
<<<<<<< Updated upstream
  );
}

export default Index;
=======
  )
}

export default Index
>>>>>>> Stashed changes
