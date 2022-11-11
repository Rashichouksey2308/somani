/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styles from '../AddNewInternal/index.module.scss';
import { Form } from 'react-bootstrap';
import Image from 'next/image';

function Index({handleSubmit, savePortData, portData, country}) {


  // const [portField, setPortField] = useState([
  //   {
  //     portData.Country: '',
  //     portName: '',
  //     state: '',
  //     conditionHandle: '',
  //     approved: '',
  //   },
  // ]);

  // const onAddRow = () => {
  //   setPortField([
  //     ...portField,
  //     {
  //       portData.Country: '',
  //       portName: '',
  //       state: '',
  //       conditionHandle: '',
  //       approved: '',
  //     },
  //   ]);
  // };

  // const onDeleteRow = (index) => {
  //   setPortField([...portField.slice(0, index), ...portField.slice(index + 1)]);
  // };
  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
        <div className={`${styles.main} vessel_card card border_color`}>
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
          <div id="authorisedDetails" aria-labelledby="authorisedDetails">
            <div className={`${styles.dashboard_form} card-body`}>
              {/* {portField &&
                portField.map((val, index) => ( */}
                  <div className="row">
                    <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                      <div className="d-flex">
                        <select
                          name='Country'
                          value={portData?.Country}
                          className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                          onChange={(e) => {setCountryName(e.target.value); savePortData(e.target.name, e.target.value)}}
                        >
                          <option value="">Select an option</option>
                            {country.map((options, index) => {
                              return <option key={index}  value={`${options.Country}`}>{options.Country}</option>;
                            })}{' '}
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
                        name="Port_Name"
                        value={portData?.Port_Name}
                        onChange={(e)=>savePortData(e.target.name, e.target.value)}
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Port Name <strong className="text-danger">*</strong>
                      </label>
                    </div>
                    {portData.Country === 'India' ? (
                      <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                        <div className="d-flex">
                          <select
                          name='State'
                          onChange={(e)=>savePortData(e.target.name, e.target.value)}
                          value={portData?.State}
                            className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                          >
                            <option value='' selected >Select</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Delhi">Delhi</option>
                          </select>
                          <label className={`${styles.label_heading} label_heading`}>
                            State <strong className="text-danger">*</strong>
                          </label>
                          <div className={`${styles.img_arrow} image_arrow`}>
                            <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={`${styles.form_group} col-lg-2 col-sm-6`}>
                        <input
                          type="text"
                          id="textInput"
                          value={portData?.State}
                          name="State"
                          onChange={(e)=>savePortData(e.target.name, e.target.value)}
                          required
                          className={`${styles.input_field} border_color input form-control`}
                        />
                        <label className={`${styles.label_heading} label_heading`} id="textInput">
                          State
                        </label>
                      </div>
                    )}
                    <div className={`${styles.form_group} mt-1 col-lg-2 col-md-6 col-sm-6 `}>
                      <div className={`${styles.radio_form} ml-1`}>
                        <div className={`${styles.sub_heading} label_heading`}>
                          Container Handling <strong className="text-danger">*</strong>
                        </div>
                        {['radio'].map((type, index) => (
                          <div key={`inline-${index}`} className={`${styles.radio_group}`}>
                            <Form.Check
                              className={styles.radio}
                              inline
                              onChange={(e)=>savePortData('Container_Handling', 'Yes')}
                              defaultChecked={portData?.Container_Handling == 'Yes' ? true : false}
                              label="Yes"
                              name="group1"
                              type={type}
                              id={`inline-${type}-1`}
                            />
                            <Form.Check
                              className={styles.radio}
                              inline
                              defaultChecked={portData?.Container_Handling == 'No' ? true : false}
                              label="No"
                              onChange={(e)=>savePortData('Container_Handling', 'No')}
                              name="group1"
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
                          Approved <strong className="text-danger">*</strong>
                        </div>
                        {['radio'].map((type, index) => (
                          <div key={`inline-${index}`} className={`${styles.radio_group}`}>
                            <Form.Check
                              className={styles.radio}
                              inline
                              
                              label="Yes"
                              defaultChecked={portData?.Approved == 'Yes' ? true : false}
                              onChange={(e)=>savePortData('Approved', 'Yes')}
                              name="group2"
                              type={type}
                              id={`inline-${type}-1`}
                            />
                            <Form.Check
                              className={styles.radio}
                              inline
                              label="No"
                              defaultChecked={portData?.Approved == 'No' ? true : false}
                              name="group2"
                              onChange={(e)=>savePortData('Approved', 'No')}
                              type={type}
                              id={`inline-${type}-2`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`${styles.form_group} col-lg-1 col-sm-6`}>
                      <div className="d-flex mt-2">
                        {/* {index > 0 && (
                          <img
                            src="/static/delete 2.svg"
                            className={`${styles.delete_image} p-0 mr-4 border-0`}
                            alt="delete"
                            onClick={() => {
                              onDeleteRow(index);
                            }}
                          />
                        )} */}
                        <img
                          className={`${styles.plus_add}`}
                          src="/static/add-btn.svg"
                          alt="Plus"
                          onClick={() => {
                            handleSubmit();
                          }}
                        />
                      </div>
                    </div>
                  </div>
                 {/* ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
