/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'
import DateCalender from '../DateCalender'
import { Card } from 'react-bootstrap'
import { UploadDocument } from '../UploadDocument'
import Router from 'next/router'
import Image from 'next/image'

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
                  Company Name  <strong className="text-danger">*</strong>
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
                  Phone  <strong className="text-danger">*</strong>
                 
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
            <div className='row'>
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
        <div className={`${styles.upload_main} vessel_card border_color card`}>
      <div
        className={`${styles.head_container} border_color d-flex  align-items-center justify-content-between`}
        data-toggle="collapse"
        data-target="#uploadOther"
        aria-expanded="true"
        aria-controls="uploadOther"
      >
      
          <h3 className={styles.heading}>Document</h3>
       
        <span>+</span>
      </div>
      <div
        id="uploadOther"
        className="collapse show"
        aria-labelledby="uploadOther"
        data-parent="#uploadOther"
      >
        <div className={`${styles.dashboard_form} vessel_card card-body`}>
          <Form>
            <div className="row align-items-center vessel_card pb-4">
              <div
                className={`${styles.drop_container} d-flex align-items-center justify-content-around col-sm-6`}
              >
                <div className="text-center w-100">
                  <img
                    className={`${styles.upload_image} img-fluid d-block mx-auto`}
                    src="/static/browse.svg"
                    alt="Browse"
                  />
                  {/* {newDoc?.document?.name ? (
                    // <div className=''>
                    <div
                      className={`${styles.certificate} text1 d-inline-flex justify-content-between`}
                    >
                      <span>{newDoc?.document?.name}</span>
                      <img
                        className={`${styles.close_image} image_arrow mx-2`}
                        src="/static/close.svg"
                        onClick={(e) => handleCloseDoc()}
                        alt="Close"
                      />{' '}
                    </div>
                  ) : ( */}
                    // </div>
                    <p className={styles.drop_para}>
                      Drop Files here or
                      <br />
                      <div className={styles.uploadBtnWrapper}>
                        <input
                          onChange={(e) => uploadDocument2(e)}
                          type="file"
                          name="myfile"
                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                        />

                        <a href="#">Browse</a>
                      </div>
                    </p>
             
                </div>
              </div>
              <div className="col-md-4 offset-md-1 col-sm-6">
                <Form.Group className={`${styles.form_group}`}>
                  <div className="d-flex">
                    <select
                      // value={manualDocModule ? newDoc.name : 'others'}
                      className={`${styles.value} ${styles.customSelect} input form-control`}
                      id="name"
                      onChange={(e) => handleNewDocModule(e)}
                    >
                      {/* <option disabled selected>Select an option </option> */}
                      {module === 'LeadOnboarding&OrderApproval' ? (
                        <>
                          {' '}
                          <option value="" disabled>
                            Select an option
                          </option>
                          <option value="Certificate of Incorporation">
                            Certificate of Incorporation
                          </option>
                          <option value="IEC Certificate">
                            IEC Certificate
                          </option>
                          <option value="Business Registration Certificate ">
                            Business Registration Certificate{' '}
                          </option>
                          <option value="PAN Card">PAN Card</option>
                          <option value="GST Certificate">
                            GST Certificate
                          </option>
                          <option value="Bank Reference Letter">
                            Bank Reference Letter
                          </option>
                          <option value="Financial Year ">
                            Financial Year{' '}
                          </option>
                        </>
                      ) : module === 'Loading-Transit-Unloading' ? (
                        <>
                          <option value="" disabled>
                            Select an option
                          </option>
                          <option value="Certificate Of Origin">
                            Certificate of Origin{' '}
                          </option>
                          <option value="Certificate Of Quality">
                            {' '}
                            Certificate of Quality
                          </option>
                          <option value="Certificate Of Weight ">
                            {' '}
                            Certificate of Weight
                          </option>
                          <option value="Plot Inspection Report">
                            {' '}
                            Plot Inspection Report
                          </option>
                          <option value="BL "> BL</option>
                          <option value="Container No List ">
                            {' '}
                            Container No. List
                          </option>
                          <option value="Packing List "> Packing list</option>
                          <option value="BL Acknowledgment Copy">
                            {' '}
                            BL Acknowledgment Copy
                          </option>
                          <option value="Forward Sales Contract ">
                            {' '}
                            Forward Sales Contract
                          </option>
                          <option value="Coal Import Registration Certificate">
                            {' '}
                            Coal Import Registration Certificate
                          </option>{' '}
                          <option value="CIMS Payment Receipt ">
                            {' '}
                            CIMS Payment Receipt
                          </option>{' '}
                          <option value="IGM Copy "> IGM Copy</option>{' '}
                        </>
                      ) : module === 'Agreements & Insurance & LC & Opening' ? (
                        <>
                          <option value="" disabled>
                            Select an option
                          </option>

                          <option value="Lc Draft">LC Draft </option>

                          <option value="lC Ammendment Draft">
                            {' '}
                            LC Ammendment Draft
                          </option>
                          <option value="vessel Certificate">
                            {' '}
                            Vessel certificate
                          </option>
                          <option value="vessel Certificate Container List">
                            {' '}
                            Vessel Certificate, Container List
                          </option>
                          <option value="policy Document Marine">
                            {' '}
                            Policy Document - Marine
                          </option>
                          <option value="policy Document Storage">
                            {' '}
                            Policy Document - Storage
                          </option>
                        </>
                      ) : module === 'Custom Clearance And Ware housing' ? (
                        <>
                          <option value="" disabled>
                            Select an option
                          </option>

                          <option value="BOE Provisional">
                            {' '}
                            BOE Provisional
                          </option>
                          <option value="BOE Final - in case of final assessment.">
                            {' '}
                            BOE Final - in case of final assessment.
                          </option>
                          <option value="Duty Paid Challan ">
                            {' '}
                            Duty Paid Challan
                          </option>
                          <option value="PD Bond"> PD Bond</option>
                          <option value="BOE Final"> BOE Final</option>
                          <option value="BOE Provisional ">
                            {' '}
                            BOE Provisional
                          </option>
                          <option value="BOE Final - in case of final assessment. ">
                            {' '}
                            BOE Final - in case of final assessment.
                          </option>
                          <option value="PD Bond"> PD Bond</option>
                          <option value="Duty Paid Challan ">
                            {' '}
                            Duty Paid Challan
                          </option>
                          <option value="Statements of Facts">
                            {' '}
                            Statements of Facts
                          </option>
                          <option value="Discharge Confirmation">
                            {' '}
                            Discharge Confirmation
                          </option>
                          <option value="BOE Final"> BOE Final</option>
                        </>
                      ) : (
                        <>
                          <option value="" disabled>
                            Select an option
                          </option>

                          <option value="RR"> RR</option>
                          <option value="eWay Bill"> eWay Bill</option>
                        </>
                      )}
                      <option value="others">Other</option>
                    </select>
                    <Form.Label className={`${styles.label} label_heading`}>
                      Document Type
                    </Form.Label>
                    <img
                      className={`${styles.arrow} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </Form.Group>
                <Form.Group className={`${styles.form_group}`}>
                  <input
                    id="otherDocName"
                    onChange={(e) =>
                      setNewDoc({ ...newDoc, name: e.target.value })
                    }
                    className={`${styles.value} input form-control`}
                    type="text"
                    // disabled={manualDocModule}
                  />
                  <Form.Label className={`${styles.label} label_heading`}>
                    Please Specify Document Name
                  </Form.Label>
                </Form.Group>
                <div
                  onClick={(e) => uploadDocumentHandler(e)}
                  className={styles.uploadBtnWrapper}
                >
                  <button className={`${styles.upload_button} btn`}>
                    Upload
                  </button>
                </div>
              </div>
          
          </Form>
        </div>
        <div className={styles.table_container}>
          <div
            className={`${styles.search_container} background2 p-2 pl-4 d-flex justify-content-between align-items-center`}
          >
            <div className="d-flex align-items-center">
              <select
                // value={moduleSelected}
                onChange={(e) => setModuleSelected(e.target.value)}
                className={`${styles.dropDown} ${styles.customSelect} input form-control`}
              >
                <option selected disabled>
                  Select an option
                </option>
                <option value="LeadOnboarding&OrderApproval">
                  Lead Onboarding &amp; Order Approval
                </option>
                <option value="Agreements&Insurance&LC&Opening">
                  Agreements, Insurance &amp; LC Opening
                </option>
                <option value="Loading-Transit-Unloading">
                  Loading-Transit-Unloading
                </option>
                <option value="customClearanceAndWarehousing">
                  Custom Clearance And Warehousing
                </option>
                <option value="PaymentsInvoicing&Delivery">
                  Payments Invoicing & Delivery
                </option>
                <option value="Others">Others</option>
              </select>
              <img
                className={`${styles.arrow2} img-fluid`}
                src="/static/inputDropDown.svg"
                alt="Search"
              />
            </div>
            <div
              className={`d-flex align-items-center ${styles.searchBarContainer} `}
            >
              <img
                className={` ${styles.searchImage} img-fluid`}
                src="/static/search.svg"
                alt="Search"
              ></img>
              <input
                className={`${styles.searchBar} border_color input form-control`}
                placeholder="Search"
                onChange={(e) => {
                  filterDocBySearch(e.target.value)
                }}
              ></input>
            </div>
          </div>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table
                className={`${styles.table} table`}
                cellPadding="0"
                cellSpacing="0"
                border="0"
              >
                <thead>
                  <tr>
                    <th>
                      DOCUMENT NAME{' '}
                      <img
                        className={`${styles.sort_image} mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />
                    </th>
                    <th>
                      FORMAT{' '}
                      <img
                        className={`${styles.sort_image} mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />
                    </th>
                    <th>
                      DOCUMENT DATE{' '}
                      <img
                        className={`${styles.sort_image} mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />
                    </th>
                    <th>
                      UPLOADED BY{' '}
                      <img
                        className={`${styles.sort_image} mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />
                    </th>
                    <th>STATUS </th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>

               
                          <tr  className="uploadRowTable">
                            <td className={`${styles.doc_name}`}>
                           
                            </td>
                            <td>
                              <img
                                src="/static/pdf.svg"
                                className="img-fluid"
                                alt="Pdf"
                              />
                            </td>
                            <td className={styles.doc_row}>
                             
                            </td>
                            <td className={styles.doc_row}>
                             
                            </td>
                            <td>
                              <span
                                className={`${styles.status} ${styles.approved}`}
                              ></span>
                             
                            </td>
                            <td colSpan="2">
                              <img
                                onClick={(e) => {
                                  DocDlt(index)
                                  dispatch(
                                    DeleteDocument({
                                      orderDocumentId: documentsFetched._id,
                                      name: document.name,
                                    }),
                                  )
                                }}
                                src="/static/delete.svg"
                                className={`${styles.delete_image} mr-3`}
                                alt="Bin"
                              />
                              <img
                                src="/static/upload.svg"
                                className={`${styles.delete_image} p-0 border-0 bg-transparent mr-3`}
                                alt="Share"
                                onClick={(document) => {
                                  handleShareDoc(document)
                                  
                                }}
                              />

                              {!document.moving ?
                                (
                                  <img
                                    src="/static/drive_file.svg"
                                    className={`${styles.edit_image} mr-3`}
                                    alt="Share"
                                    onClick={() => {
                                      handleDocModuleChange(index)
                                    }}
                                  />
                                )
                                :
                                (
                                  <div className='d-inline-block' style={{ marginRight: '25px' }}>
                                    <div className="d-flex align-items-center">
                                      <select
                                        value={moduleSelected}
                                        onChange={(e) => {
                                          DocDlt(index)
                                          dispatch(
                                            changeModuleDocument({
                                              orderDocumentId: documentsFetched._id,
                                              name: document.name,
                                              module: e.target.value
                                            }),
                                          )

                                        }
                                        }
                                        className={`${styles.dropDown} ${styles.customSelect} shadow-none input form-control`}
                                        style={{ width: '150px', paddingRight: '30px' }}    >

                                        <option disabled={moduleSelected === 'LeadOnboarding&OrderApproval'} value="LeadOnboarding&OrderApproval">
                                          Lead Onboarding &amp; Order Approval
                                        </option>
                                        <option disabled={moduleSelected === 'Agreements&Insurance&LC&Opening'} value="Agreements&Insurance&LC&Opening">
                                          Agreements, Insurance &amp; LC Opening
                                        </option>
                                        <option disabled={moduleSelected === 'Loading-Transit-Unloading'} value="Loading-Transit-Unloading">
                                          Loading-Transit-Unloading
                                        </option>
                                        <option disabled={moduleSelected === 'customClearanceAndWarehousing'} value="customClearanceAndWarehousing">
                                          Custom Clearance And Warehousing
                                        </option>
                                        <option disabled={moduleSelected === 'PaymentsInvoicing&Delivery'} value="PaymentsInvoicing&Delivery">
                                          Payments Invoicing & Delivery
                                        </option>
                                        <option disabled={moduleSelected === 'Others'} value="Others">Others</option>
                                      </select>
                                      <img
                                        className={`${styles.arrow2} img-fluid`}
                                        src="/static/inputDropDown.svg"
                                        alt="Search"
                                      />
                                    </div>
                                  </div>
                                )

                              }
                            </td>
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
  )
}
export default Index
