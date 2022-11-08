/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'
import Image from 'next/image'

function Index () {
  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
        <div className={`${styles.main} vessel_card card border_color`}>
          <div
            className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
            data-toggle='collapse'
            data-target='#authorisedDetails'
            aria-expanded='true'
            aria-controls='authorisedDetails'
          >
            <h3 className={`${styles.heading} mb-0`}>Ports</h3>
            <span>+</span>
          </div>
          <div
            id='authorisedDetails'
            // className="collapse"
            aria-labelledby='authorisedDetails'
          >
            <div className={`${styles.dashboard_form} card-body`}>
              <div className='row'>
                <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                  <div className='d-flex'>
                    <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}>
                      <option value=''>India</option>
                      <option value=''>US</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Country <strong className='text-danger'>*</strong>
                    </label>
                    <div className={`${styles.img_arrow} image_arrow`}>
                      <Image width='13px' height='8px' src='/static/inputDropDown.svg' alt='Search' />
                    </div>
                  </div>
                </div>
                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                  <input
                    className={`${styles.input_field} border_color input form-control`}
                    type='text'
                    required
                    name='supplierName'
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Port Name <strong className='text-danger'>*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                  <div className='d-flex'>
                    <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}>
                      <option value=''>Maharashtra</option>
                      <option value=''>Delhi</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      State <strong className='text-danger'>*</strong>
                    </label>
                    <div className={`${styles.img_arrow} image_arrow`}>
                      <Image width='13px' height='8px' src='/static/inputDropDown.svg' alt='Search' />
                    </div>
                  </div>
                </div>
                {/* <div className={`${styles.form_group} col-lg-2 col-sm-6`}>
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
                </div> */}
                <div className={`${styles.form_group} mt-1 col-lg-2 col-md-6 col-sm-6 `}>
                  <div className={`${styles.radio_form} ml-1`}>
                    <div className={`${styles.sub_heading} label_heading`}>
                      Container Handling <strong className='text-danger'>*</strong>
                    </div>
                    {['radio'].map((type, index) => (
                      <div key={`inline-${index}`} className={`${styles.radio_group}`}>
                        <Form.Check
                          className={styles.radio}
                          inline
                          defaultChecked
                          label='Yes'
                          name='group1'
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          className={styles.radio}
                          inline
                          label='No'
                          name='group1'
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${styles.form_group} mt-1 col-lg-2 col-md-6 col-sm-6 `}>
                  <div className={`${styles.radio_form} ml-1`}>
                    <div className={`${styles.sub_heading} label_heading`}>
                      Approved <strong className='text-danger'>*</strong>
                    </div>
                    {['radio'].map((type, index) => (
                      <div key={`inline-${index}`} className={`${styles.radio_group}`}>
                        <Form.Check
                          className={styles.radio}
                          inline
                          defaultChecked
                          label='Yes'
                          name='group1'
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          className={styles.radio}
                          inline
                          label='No'
                          name='group1'
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${styles.form_group} col-lg-1 col-sm-6`}>
                  <div className='d-flex mt-2'>
                    <img
                      src='/static/delete 2.svg'
                      className={`${styles.delete_image} mr-3 border-0 p-0`}
                      alt='delete'
                    />
                    <img className={`${styles.plus_add}`} src='/static/add-btn.svg' alt='Plus' />
                  </div>
                </div>
                <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                  <div className='d-flex'>
                    <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}>
                      <option value=''>India</option>
                      <option value=''>US</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Country <strong className='text-danger'>*</strong>
                    </label>
                    <div className={`${styles.img_arrow} image_arrow`}>
                      <Image width='13px' height='8px' src='/static/inputDropDown.svg' alt='Search' />
                    </div>
                  </div>
                </div>
                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                  <input
                    className={`${styles.input_field} border_color input form-control`}
                    type='text'
                    required
                    name='supplierName'
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Port Name <strong className='text-danger'>*</strong>
                  </label>
                </div>

                <div className={`${styles.form_group} col-lg-2 col-sm-6`}>
                  <input
                    type='text'
                    id='textInput'
                    name='email'
                    required
                    className={`${styles.input_field} border_color input form-control`}
                  />
                  <label className={`${styles.label_heading} label_heading`} id='textInput'>
                    State
                  </label>
                </div>
                <div className={`${styles.form_group} mt-1 col-lg-2 col-md-6 col-sm-6 `}>
                  <div className={`${styles.radio_form} ml-1`}>
                    <div className={`${styles.sub_heading} label_heading`}>
                      Container Handling <strong className='text-danger'>*</strong>
                    </div>
                    {['radio'].map((type, index) => (
                      <div key={`inline-${index}`} className={`${styles.radio_group}`}>
                        <Form.Check
                          className={styles.radio}
                          inline
                          defaultChecked
                          label='Yes'
                          name='group1'
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          className={styles.radio}
                          inline
                          label='No'
                          name='group1'
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${styles.form_group} mt-1 col-lg-2 col-md-6 col-sm-6 `}>
                  <div className={`${styles.radio_form} ml-1`}>
                    <div className={`${styles.sub_heading} label_heading`}>
                      Approved <strong className='text-danger'>*</strong>
                    </div>
                    {['radio'].map((type, index) => (
                      <div key={`inline-${index}`} className={`${styles.radio_group}`}>
                        <Form.Check
                          className={styles.radio}
                          inline
                          defaultChecked
                          label='Yes'
                          name='group1'
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          className={styles.radio}
                          inline
                          label='No'
                          name='group1'
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${styles.form_group} col-lg-1 col-sm-6`}>
                  <div className='d-flex mt-2'>
                    <img
                      src='/static/delete 2.svg'
                      className={`${styles.delete_image} mr-3 border-0 p-0`}
                      alt='delete'
                    />
                    <img className={`${styles.plus_add}`} src='/static/add-btn.svg' alt='Plus' />
                  </div>
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
