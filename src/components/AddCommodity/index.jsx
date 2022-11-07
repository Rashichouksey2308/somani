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

function Index({isUpdate}) {

  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
      <div className={`${styles.main} vessel_card card border_color`}>
          <div
            className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
          >
            <h3 className={`${styles.heading}`}>Commodity</h3>
          </div>

          <div className={`${styles.dashboard_form} card-body`}>
          
            <div className="row">
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
                  Commodity  <strong className="text-danger">*</strong>
                 
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
                Chapter Name  <strong className="text-danger">*</strong>
                </label>
              </div>
              <div
                className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
              >
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="number"
                  required
                  name="supplierName"
                />
                <label className={`${styles.label_heading} label_heading`}>
                Chapter Code  <strong className="text-danger">*</strong>
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
              <div
                className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}
              >
                <div className="d-flex">
                  <DateCalender labelName="Approved Date " />
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
             
             
            </div>
          </div>
        </div>
        { !isUpdate ? 
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
          <div className={`${styles.dashboard_form} d-flex justify-content-end card-body`}>
       
                <button className={`${styles.approve} ml-3`}>
                 Send for Approval
                </button>
             
         
          </div>
        </div>
        :
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
          <div className={`${styles.dashboard_form} d-flex justify-content-end card-body`}>
            <button className={`${styles.approve} ml-3`}>Update</button>
          </div>
        </div>
}
        <div className='d-flex justify-content-end mb-5'
        style={{marginTop:'35px'}}>
          <div className={`${styles.footer_heading} mr-5`}>Created By <span>Balakrishna SGF001</span></div>
          <div className={`${styles.footer_heading}`}>Approved By <span>Ramakrishna SGF001</span></div>
        </div>
      </div>
    </div>
  );
}
export default Index;
