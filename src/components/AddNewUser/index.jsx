/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
<<<<<<< Updated upstream
import React from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import DateCalender from '../DateCalender';
import Image from 'next/image';

function Index() {
=======
import React from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'
import DateCalender from '../DateCalender'
import Image from 'next/image'

function Index () {
>>>>>>> Stashed changes
  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
        <div className={`${styles.main} vessel_card card border_color`}>
          <div
            className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
          >
            <h3 className={`${styles.heading}`}>Profile Details</h3>
          </div>

          <div className={`${styles.dashboard_form} card-body`}>
            <div className={`${styles.radio_form} mb-4`}>
              <div className={`${styles.sub_heading} label_heading`}>
<<<<<<< Updated upstream
                User Type <strong className="text-danger">*</strong>
=======
                User Type <strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
              </div>
              {['radio'].map((type, index) => (
                <div key={`inline-${index}`} className={`${styles.radio_group} mt-2`}>
                  <Form.Check
                    className={styles.radio}
                    inline
                    defaultChecked
<<<<<<< Updated upstream
                    label="Internal"
                    name="group1"
=======
                    label='Internal'
                    name='group1'
>>>>>>> Stashed changes
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    className={styles.radio}
                    inline
<<<<<<< Updated upstream
                    label="External"
                    name="group1"
=======
                    label='External'
                    name='group1'
>>>>>>> Stashed changes
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </div>
<<<<<<< Updated upstream
            <div className="row">
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Company Business Name
                  <strong className="text-danger">*</strong>
=======
            <div className='row'>
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type='text'
                  required
                  name='supplierName'
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Company Business Name
                  <strong className='text-danger'>*</strong>
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
=======
                  type='text'
                  required
                  name='supplierName'
>>>>>>> Stashed changes
                />
                <label className={`${styles.label_heading} label_heading`}>Short Name</label>
              </div>
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
<<<<<<< Updated upstream
                  type="number"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  PAN
                  <strong className="text-danger">*</strong>
=======
                  type='number'
                  required
                  name='supplierName'
                />
                <label className={`${styles.label_heading} label_heading`}>
                  PAN
                  <strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                </label>
              </div>

              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
<<<<<<< Updated upstream
                <div className="d-flex">
                  <DateCalender labelName="Date of Incorporation" />
                  <div className={`${styles.calanderIcon} image_arrow`}>
                    <Image width="22px" height="24px" src="/static/caldericon.svg" alt="Calender" />
=======
                <div className='d-flex'>
                  <DateCalender labelName='Date of Incorporation' />
                  <div className={`${styles.calanderIcon} image_arrow`}>
                    <Image width='22px' height='24px' src='/static/caldericon.svg' alt='Calender' />
>>>>>>> Stashed changes
                  </div>
                </div>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
<<<<<<< Updated upstream
                  type="text"
                  id="textInput"
                  name="email"
                  className={`${styles.input_field} border_color input form-control`}
                />
                <label className={`${styles.label_heading} label_heading`} id="textInput">
                  Official Email ID<strong className="text-danger">*</strong>
=======
                  type='text'
                  id='textInput'
                  name='email'
                  className={`${styles.input_field} border_color input form-control`}
                />
                <label className={`${styles.label_heading} label_heading`} id='textInput'>
                  Official Email ID<strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                </label>
              </div>
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
<<<<<<< Updated upstream
                  type="password"
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Password<strong className="text-danger">*</strong>
=======
                  type='password'
                  name='supplierName'
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Password<strong className='text-danger'>*</strong>
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
                  User Role<strong className="text-danger">*</strong>
=======
                  type='text'
                  required
                  name='supplierName'
                />
                <label className={`${styles.label_heading} label_heading`}>
                  User Role<strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                </label>
              </div>
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
<<<<<<< Updated upstream
                  type="number"
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Phone Number
                  <strong className="text-danger">*</strong>
=======
                  type='number'
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                  required
                  name='supplierName'
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Phone Number
                  <strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                </label>
              </div>
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
<<<<<<< Updated upstream
                  type="number"
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                  required
                  name="supplierName"
=======
                  type='number'
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                  required
                  name='supplierName'
>>>>>>> Stashed changes
                />
                <label className={`${styles.label_heading} label_heading`}>Alternate Phone Number</label>
              </div>
              <div className={`${styles.each_input} col-md-6 col-lg-4  col-sm-6`} style={{ marginTop: -1 }}>
                <div className={styles.radio_form} style={{ paddingLeft: 10 }}>
                  <div className={`${styles.sub_heading} label_heading`}>
<<<<<<< Updated upstream
                    Communication Mode<strong className="text-danger">*</strong>
                  </div>
                  <Form selected="">
=======
                    Communication Mode<strong className='text-danger'>*</strong>
                  </div>
                  <Form selected=''>
>>>>>>> Stashed changes
                    {['checkbox'].map((type) => (
                      <div key={`inline-${type}`} className={styles.radio_group}>
                        <Form.Check
                          className={`${styles.radio} radio`}
                          inline
                          // defaultChecked={true}
<<<<<<< Updated upstream
                          label="Email ID"
                          name="Email"
=======
                          label='Email ID'
                          name='Email'
>>>>>>> Stashed changes
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          className={`${styles.radio} radio`}
                          inline
<<<<<<< Updated upstream
                          label="SMS"
                          name="SMS"
=======
                          label='SMS'
                          name='SMS'
>>>>>>> Stashed changes
                          type={type}
                          id={`inline-${type}-2`}
                        />

                        <Form.Check
                          className={`${styles.radio} radio`}
                          inline
<<<<<<< Updated upstream
                          label="Whatsapp"
                          name="Whatsapp"
=======
                          label='Whatsapp'
                          name='Whatsapp'
>>>>>>> Stashed changes
                          // type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </Form>
                </div>
              </div>
              <div className={`${styles.form_group} ${styles.phone} col-md-4 col-sm-6`}>
                <div className={`${styles.phone_card}`}>
<<<<<<< Updated upstream
                  <select name="callingCode" id="Code" className={`${styles.code_phone} input border-right-0`}>
=======
                  <select name='callingCode' id='Code' className={`${styles.code_phone} input border-right-0`}>
>>>>>>> Stashed changes
                    <option>+91</option>
                    <option>+1</option>
                    <option>+92</option>
                    <option>+95</option>
                    <option>+24</option>
                  </select>
                  <input
<<<<<<< Updated upstream
                    type="number"
                    onWheel={(event) => event.currentTarget.blur()}
                    onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                    id="textNumber"
                    name="phoneNumber"
                    className={`${styles.input_field}  input form-control border-left-0`}
                  />
                  <label className={`${styles.label_heading} label_heading`} id="textNumber">
=======
                    type='number'
                    onWheel={(event) => event.currentTarget.blur()}
                    onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                    id='textNumber'
                    name='phoneNumber'
                    className={`${styles.input_field}  input form-control border-left-0`}
                  />
                  <label className={`${styles.label_heading} label_heading`} id='textNumber'>
>>>>>>> Stashed changes
                    Whatsapp Number (Optional)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.main} mt-4 card border_color`}>
          <div
            className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
<<<<<<< Updated upstream
            data-toggle="collapse"
            data-target="#keyAddress"
            aria-expanded="true"
            aria-controls="keyAddress"
=======
            data-toggle='collapse'
            data-target='#keyAddress'
            aria-expanded='true'
            aria-controls='keyAddress'
>>>>>>> Stashed changes
          >
            <h3 className={`${styles.heading} mb-0`}>Key Addresses</h3>
            <span>+</span>
          </div>
<<<<<<< Updated upstream
          <div id="keyAddress" className="collapse" aria-labelledby="keyAddress">
            <div className={`${styles.dashboard_form} card-body`}>
              <div className="d-flex justify-content-between">
                <div className={`${styles.address_card} value background1`} style={{ padding: '22px' }}>
                  <div className="d-flex justify-content-between">
=======
          <div id='keyAddress' className='collapse' aria-labelledby='keyAddress'>
            <div className={`${styles.dashboard_form} card-body`}>
              <div className='d-flex justify-content-between'>
                <div className={`${styles.address_card} value background1`} style={{ padding: '22px' }}>
                  <div className='d-flex justify-content-between'>
>>>>>>> Stashed changes
                    <div>
                      <label className={styles.label}>Registered Office Address</label>
                      <div className={styles.address_values}>
                        <p>N-11, 29 Tilak Marg, New Delhi</p>
                        <p>
                          <span>GSTIN:</span> RTF67WTF76RT456
                        </p>
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
                <div className={`${styles.address_card} value background1`} style={{ padding: '22px' }}>
<<<<<<< Updated upstream
                  <div className="d-flex justify-content-between">
=======
                  <div className='d-flex justify-content-between'>
>>>>>>> Stashed changes
                    <div>
                      <label className={styles.label}>Registered Office Address</label>
                      <div className={styles.address_values}>
                        <p>N-11, 29 Tilak Marg, New Delhi</p>
                        <p>
                          <span>GSTIN:</span> RTF67WTF76RT456
                        </p>
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
              <div className={`${styles.address_card} mt-3 pb-5 value background1`}>
                <div
                  className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
                >
                  <h3 className={`${styles.heading}`}>Add a new address</h3>
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
                        name="pinCode"
                      />
                      <label className={`${styles.label_heading} label_heading`}>
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
                        <label className={`${styles.label_heading} label_heading`}>
                          State<strong className="text-danger">*</strong>
                        </label>
                        <div className={`${styles.image_arrow} image_arrow`}>
                          <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
=======
                        type='number'
                        name='pinCode'
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Pin Code
                        <strong className='text-danger'>*</strong>
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <div className='d-flex'>
                        <select
                          className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                          name='countryOfOrigin'
                          required
                          style={{ paddingRight: '35px' }}
                        >
                          <option value='India'>Uttar Pradesh</option>
                          <option value='Dubai'>Dubai</option>
                        </select>
                        <label className={`${styles.label_heading} label_heading`}>
                          State<strong className='text-danger'>*</strong>
                        </label>
                        <div className={`${styles.image_arrow} image_arrow`}>
                          <Image width='13px' height='8px' src='/static/inputDropDown.svg' alt='Search' />
>>>>>>> Stashed changes
                        </div>
                      </div>
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
                        <label className={`${styles.label_heading} label_heading`}>
                          City<strong className="text-danger">*</strong>
                        </label>
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
                        <label className={`${styles.label_heading} label_heading`}>
                          City<strong className='text-danger'>*</strong>
                        </label>
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
                    <div className={`${styles.form_group} col-md-12`}>
                      <input
                        className={`${styles.input_field} ${styles.address_field} border_color input form-control`}
                        required
<<<<<<< Updated upstream
                        type="text"
                        name="pinCode"
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Address<strong className="text-danger">*</strong>
=======
                        type='text'
                        name='pinCode'
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Address<strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  className={`${styles.add_btn}`}
                  // onClick={() => addData('address')}
                >
                  Add
                </button>
                <button className={`${styles.cancel_btn}`}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.doc_main} mt-4 border_color card`}>
          <div
            className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
<<<<<<< Updated upstream
            data-toggle="collapse"
            data-target="#upload"
            aria-expanded="true"
            aria-controls="upload"
=======
            data-toggle='collapse'
            data-target='#upload'
            aria-expanded='true'
            aria-controls='upload'
>>>>>>> Stashed changes
          >
            <h3 className={styles.heading}>Documents</h3>
            <span>+</span>
          </div>
<<<<<<< Updated upstream
          <div id="upload" className="collapse" aria-labelledby="upload" data-parent="#upload">
=======
          <div id='upload' className='collapse' aria-labelledby='upload' data-parent='#upload'>
>>>>>>> Stashed changes
            <div className={`${styles.table_form}`}>
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
                          <th>
                            DOCUMENT NAME{' '}
                            <Image
<<<<<<< Updated upstream
                              width="14px"
                              height="14px"
                              className={`${styles.sort_img}`}
                              src="/static/icons8-sort-24.svg"
                              alt="Sort icon"
=======
                              width='14px'
                              height='14px'
                              className={`${styles.sort_img}`}
                              src='/static/icons8-sort-24.svg'
                              alt='Sort icon'
>>>>>>> Stashed changes
                            />
                          </th>
                          <th>
                            FORMAT{' '}
                            <Image
<<<<<<< Updated upstream
                              width="14px"
                              height="14px"
                              className={`${styles.sort_img}`}
                              src="/static/icons8-sort-24.svg"
                              alt="Sort icon"
=======
                              width='14px'
                              height='14px'
                              className={`${styles.sort_img}`}
                              src='/static/icons8-sort-24.svg'
                              alt='Sort icon'
>>>>>>> Stashed changes
                            />
                          </th>
                          <th>
                            DOCUMENT DATE{' '}
                            <Image
<<<<<<< Updated upstream
                              width="14px"
                              height="14px"
                              className={`${styles.sort_img}`}
                              src="/static/icons8-sort-24.svg"
                              alt="Sort icon"
=======
                              width='14px'
                              height='14px'
                              className={`${styles.sort_img}`}
                              src='/static/icons8-sort-24.svg'
                              alt='Sort icon'
>>>>>>> Stashed changes
                            />
                          </th>
                          <th>
                            UPLOADED BY{' '}
                            <Image
<<<<<<< Updated upstream
                              width="14px"
                              height="14px"
                              className={`${styles.sort_img}`}
                              src="/static/icons8-sort-24.svg"
                              alt="Sort icon"
=======
                              width='14px'
                              height='14px'
                              className={`${styles.sort_img}`}
                              src='/static/icons8-sort-24.svg'
                              alt='Sort icon'
>>>>>>> Stashed changes
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
<<<<<<< Updated upstream
                        <tr className="table_row">
                          <td className={styles.doc_name}>PAN</td>
                          <td>
                            <Image
                              width="57px"
                              height="25px"
                              src="/static/pdf.svg"
                              className={`${styles.pdfImage} img-fluid`}
                              alt="Pdf"
=======
                        <tr className='table_row'>
                          <td className={styles.doc_name}>PAN</td>
                          <td>
                            <Image
                              width='57px'
                              height='25px'
                              src='/static/pdf.svg'
                              className={`${styles.pdfImage} img-fluid`}
                              alt='Pdf'
>>>>>>> Stashed changes
                            />
                          </td>
                          <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                          <td>John Doe</td>
                        </tr>
<<<<<<< Updated upstream
                        <tr className="table_row">
                          <td className={styles.doc_name}>GST Certificate</td>
                          <td>
                            <Image
                              width="57px"
                              height="25px"
                              src="/static/pdf.svg"
                              className={`${styles.pdfImage} img-fluid`}
                              alt="Pdf"
=======
                        <tr className='table_row'>
                          <td className={styles.doc_name}>GST Certificate</td>
                          <td>
                            <Image
                              width='57px'
                              height='25px'
                              src='/static/pdf.svg'
                              className={`${styles.pdfImage} img-fluid`}
                              alt='Pdf'
>>>>>>> Stashed changes
                            />
                          </td>
                          <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                          <td>John Doe</td>
                        </tr>
<<<<<<< Updated upstream
                        <tr className="table_row">
                          <td className={styles.doc_name}>Board Resolution</td>
                          <td>
                            <Image
                              width="57px"
                              height="25px"
                              src="/static/pdf.svg"
                              className={`${styles.pdfImage} img-fluid`}
                              alt="Pdf"
=======
                        <tr className='table_row'>
                          <td className={styles.doc_name}>Board Resolution</td>
                          <td>
                            <Image
                              width='57px'
                              height='25px'
                              src='/static/pdf.svg'
                              className={`${styles.pdfImage} img-fluid`}
                              alt='Pdf'
>>>>>>> Stashed changes
                            />
                          </td>
                          <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                          <td>John Doe</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
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
