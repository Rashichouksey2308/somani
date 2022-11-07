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
            className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
            data-toggle="collapse"
            data-target="#authorisedDetails"
            aria-expanded="true"
            aria-controls="authorisedDetails"
          >
            <h3 className={`${styles.heading} mb-0`}>Ports</h3>
            <span>+</span>
          </div>
          <div id="authorisedDetails" className="collapse" aria-labelledby="authorisedDetails">
            <div className={`${styles.dashboard_form} card-body`}>
              <div className="row">
                <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                  <div className="d-flex">
                    <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}>
                      <option value="">India</option>
                      <option value="">US</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Country <strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.img_arrow} image_arrow`}>
                      <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                    </div>
                  </div>
                </div>
                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                  <input
                    className={`${styles.input_field} border_color input form-control`}
                    type="text"
                    required
                    name="supplierName"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Port Name <strong className="text-danger">*</strong>
                  </label>
                </div>

                <div className={`${styles.form_group} col-lg-2 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="email"
                    required
                    className={`${styles.input_field} border_color input form-control`}
                  />
                  <label className={`${styles.label_heading} label_heading`} id="textInput">
                    State 
                  </label>
                </div>
                <div className={`${styles.form_group} mt-0 col-lg-2 col-md-6 col-sm-6 `}>
                    <div className={`${styles.radio_form} ml-1`}>
                      <div className={`${styles.sub_heading} label_heading`}>
                      Approved Commodity
                      </div>
                      {['radio'].map((type, index) => (
                        <div key={`inline-${index}`} className={`${styles.radio_group}`}>
                          <Form.Check
                            className={styles.radio}
                            inline
                            defaultChecked
                            label="Yes"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="No"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                <div className={`${styles.form_group} mt-0 col-lg-2 col-md-6 col-sm-6 `}>
                    <div className={`${styles.radio_form} ml-1`}>
                      <div className={`${styles.sub_heading} label_heading`}>
                      Approved Commodity
                      </div>
                      {['radio'].map((type, index) => (
                        <div key={`inline-${index}`} className={`${styles.radio_group}`}>
                          <Form.Check
                            className={styles.radio}
                            inline
                            defaultChecked
                            label="Yes"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="No"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                <div className={`${styles.form_group} col-lg-2 col-sm-6`}>
                  <div className="mt-2">
                    <img src="/static/mode_edit.svg" className={`${styles.edit_image} mr-3`} alt="edit" />
                    {/* <img className={`${styles.plus_add} img-fluid`} src="/static/add-btn.svg" alt="Plus" /> */}
                    <img src="/static/delete 2.svg" className={`${styles.delete_image} border-0 p-0`} alt="delete" />
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default Index;
