/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import styles from '../AddNewInternal/index.module.scss';
import { Form } from 'react-bootstrap';
import Image from 'next/image';

function Index() {
  const [documentField, setDocumentField] = useState([
    {
      docName: '',
      moduleName: '',
      subModule: '',
    },
  ]);

  const onAddRow = () => {
    setDocumentField([
      ...documentField,
      {
        docName: '',
        moduleName: '',
        subModule: '',
      },
    ]);
  };

  const onDeleteRow = (index) => {
    setDocumentField([...documentField.slice(0, index), ...documentField.slice(index + 1)]);
  };

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
            <h3 className={`${styles.heading} mb-0`}>Document Master</h3>
            <span>+</span>
          </div>
          <div id="authorisedDetails" aria-labelledby="authorisedDetails">
            <div className={`${styles.dashboard_form} card-body`}>
              {documentField &&
                documentField.map((val, index) => (
                  <div key={index} className="row">
                    <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                      <input
                        className={`${styles.input_field} border_color input form-control`}
                        type="text"
                        required
                        name="supplierName"
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Document Name <strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                      <div className="d-flex">
                        <select
                          className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                        >
                          <option value="">Leads</option>
                          <option value="">Agreement</option>
                        </select>
                        <label className={`${styles.label_heading} label_heading`}>
                          Module <strong className="text-danger">*</strong>
                        </label>
                        <div className={`${styles.img_arrow} image_arrow`}>
                          <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                      <div className="d-flex">
                        <select
                          className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                        >
                          <option value="">Credit Queue</option>
                          <option value="">Profile</option>
                        </select>
                        <label className={`${styles.label_heading} label_heading`}>
                          Sub-Module <strong className="text-danger">*</strong>
                        </label>
                        <div className={`${styles.img_arrow} image_arrow`}>
                          <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.form_group} col-lg-3 col-sm-6`}>
                      <div className="d-flex justify-content-start align-items-center mt-2">
                        {index > 0 && (
                          <img
                            src="/static/delete 2.svg"
                            className={`${styles.delete_image} p-0 mr-4 border-0`}
                            alt="delete"
                            onClick={() => {
                              onDeleteRow(index);
                            }}
                          />
                        )}
                        {/* {index === 0 && ( */}
                        <img
                          className={`${styles.plus_add}`}
                          src="/static/add-btn.svg"
                          alt="Plus"
                          onClick={(e) => {
                            onAddRow();
                          }}
                        />
                        {/* )} */}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
