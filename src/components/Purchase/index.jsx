/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col, Modal } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import UploadOther from '../UploadOther'
import DateCalender from '../DateCalender'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Image from 'next/image'

export default function Index({
  customData,
  OrderId,
  uploadDoc,
  setComponentId,
  componentId,
}) {
 

 
 
  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} border_color`}>
         
          <div className={`${styles.main} vessel_card card border_color`}>
          
           {/* <div className='order_card'>
           <div className="row mb-5">
           <div
              className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
              style={{ marginTop: '37px' }}>
              <p className={` label_heading`}>
              Branch  
              </p>
              <span>Abc</span>
            </div>
           </div>
           </div> */}
           
            <div className={`${styles.dashboard_form} card-body`}>
              <h3 className={styles.form_heading}>Purchase Details</h3>
              <div className="row mb-5">
               
              <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <select
                     
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option value="">CHA</option>
                         
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Party Type<strong className="text-danger">*</strong>
                    </label>
                    <Image
                      className={`${styles.img_arrow} image_arrow img-fluid`}
                      width='13px'
                      height='8px'
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
                    type="text"
                    required
                   
                  />

                  <label className={`${styles.label_heading} label_heading`}>
                   Party Name <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <select
                     
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option value="">G3F3487R348</option>                                   
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      GSTIN<strong className="text-danger">*</strong>
                    </label>
                    <Image
                      className={`${styles.img_arrow} image_arrow img-fluid`}
                      width='13px'
                      height='8px'
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>
                <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <div className="d-flex">
                      <DateCalender
                        name="dateOfStorage"
                        labelName="Invoice Date"
                      />
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
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    name="boeDetails.accessibleValue"
                    disabled
                    required
                    onKeyDown={(evt) =>
                      ['e', 'E', '+', '-'].includes(evt.key) &&
                      evt.preventDefault()
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Invoice No. <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <select
                     
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option value="">Goods</option>
                      <option value="">Services</option>
                      
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Services/Goods<strong className="text-danger">*</strong>
                    </label>
                    <img
                      className={`${styles.arrow} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>
               
              </div>

              <div className={`${styles.bill_landing} card border_color mt-4`}>
                <div
                  className={`${styles.vessel_card} align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
                >
                  <div className={`${styles.card_sub_heading}`}>Transactional Details</div>
                  <button
                     
                      className={styles.add_btn}
                    >
                      <span className={styles.add_sign}>+</span>Add
                    </button>
                </div>

                <div className="row m-3">
               
              <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <select
                     
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option value="">CHA</option>
                         
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Transactional Type<strong className="text-danger">*</strong>
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
                    <select
                     
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option value="">2345588</option>                                   
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      HSN/Services Code<strong className="text-danger">*</strong>
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
                    type="text"
                    required
                   
                  />

                  <label className={`${styles.label_heading} label_heading`}>
                   Quantity <strong className="text-danger">*</strong>
                  </label>
                </div>
                             
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    name="boeDetails.accessibleValue"
                    disabled
                    required
                    onKeyDown={(evt) =>
                      ['e', 'E', '+', '-'].includes(evt.key) &&
                      evt.preventDefault()
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Price <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    name="boeDetails.accessibleValue"
                    disabled
                    required
                    onKeyDown={(evt) =>
                      ['e', 'E', '+', '-'].includes(evt.key) &&
                      evt.preventDefault()
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Basic Amount <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    name="boeDetails.accessibleValue"
                    disabled
                    required
                    onKeyDown={(evt) =>
                      ['e', 'E', '+', '-'].includes(evt.key) &&
                      evt.preventDefault()
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    IGST <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    name="boeDetails.accessibleValue"
                    disabled
                    required
                    onKeyDown={(evt) =>
                      ['e', 'E', '+', '-'].includes(evt.key) &&
                      evt.preventDefault()
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    CGST <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    name="boeDetails.accessibleValue"
                    disabled
                    required
                    onKeyDown={(evt) =>
                      ['e', 'E', '+', '-'].includes(evt.key) &&
                      evt.preventDefault()
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    SGST <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    name="boeDetails.accessibleValue"
                    disabled
                    required
                    onKeyDown={(evt) =>
                      ['e', 'E', '+', '-'].includes(evt.key) &&
                      evt.preventDefault()
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    TDS <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    name="boeDetails.accessibleValue"
                    disabled
                    required
                    onKeyDown={(evt) =>
                      ['e', 'E', '+', '-'].includes(evt.key) &&
                      evt.preventDefault()
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                   TCS
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    name="boeDetails.accessibleValue"
                    disabled
                    required
                    onKeyDown={(evt) =>
                      ['e', 'E', '+', '-'].includes(evt.key) &&
                      evt.preventDefault()
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Total <strong className="text-danger">*</strong>
                  </label>
                </div>
              
              </div>
               
              </div>
              <div className={`${styles.bill_landing} card border_color mt-4`}>
                <div
                  className={`${styles.vessel_card} align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
                >
                  <div className={`${styles.card_sub_heading}`}>Bank Details Details</div>
                  <button
                     
                      className={styles.add_btn}
                    >
                      <span className={styles.add_sign}>+</span>Add
                    </button>
                </div>

                <div className="row m-3">
               
              <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <select
                     
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option value="">Abc Bank</option>
                      <option value="">AU Bank</option>

                         
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Bank Name<strong className="text-danger">*</strong>
                    </label>
                    <img
                      className={`${styles.arrow} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>
                <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                          style={{ marginTop: '37px' }}
                        >
                          <p className={` label_heading`}>
                          Branch  
                          </p>
                          <span>Abc</span>
                        </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="number"
                    required
                    onKeyDown={(evt) =>
                      ['e', 'E', '+', '-'].includes(evt.key) &&
                      evt.preventDefault()
                    }
                  />

                  <label className={`${styles.label_heading} label_heading`}>
                  Account No. <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    required
                    // onKeyDown={(evt) =>
                    //   ['e', 'E', '+', '-'].includes(evt.key) &&
                    //   evt.preventDefault()
                    // }
                  />

                  <label className={`${styles.label_heading} label_heading`}>
                  IFSC No. <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-8 col-md-12`}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    required
                 
                  />

                  <label className={`${styles.label_heading} label_heading`}>
                  Address <strong className="text-danger">*</strong>
                  </label>
                </div>
               
              </div>
               
              </div>          
            </div>

          
          </div>
        
        </div>
        <SaveBar
         
          rightBtn="Submit"
        
        />
      </div>
    </>
  )
}
