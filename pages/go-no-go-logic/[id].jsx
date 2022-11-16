import React from 'react';
import styles from './index.module.scss'
import { Card } from 'react-bootstrap';
import Router from 'next/router';
import Image from 'next/image'

function Index() {
  return (
    <div className="container-fluid p-0 border-0">
      <Card className={`${styles.card}`}>
        <Card.Header className={`${styles.head_container} d-flex justify-content-between border-0 p-0`}>
          <div className={`${styles.head_header} align-items-center`}>
            <div onClick={() => Router.push('/commodity')} style={{ cursor: 'pointer' }}>
              <img
                className={`${styles.back_arrow} img-fluid image_arrow mr-2`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
              />
            </div>
            <h1 className={styles.heading}>Go No Go Logic</h1>
          </div>
        </Card.Header>
        <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
        <div className={`${styles.main} vessel_card card border_color`}>
          <div
            className={`${styles.down_container} card-header border_color d-flex justify-content-between bg-transparent`}
            data-toggle="collapse"
            data-target="#authorisedDetails"
            aria-expanded="true"
            aria-controls="authorisedDetails"
          >
            <h3 className={`${styles.heading} mb-0`}>Go No Go Details</h3>
            <span>+</span>
          </div>
          <div id="authorisedDetails" aria-labelledby="authorisedDetails">
            <div className={`${styles.dashboard_form} card-body`}>
             
                  <div  className="row">
                    <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                     <div>Transaction Type</div>
                    </div>
                    <div className={`${styles.form_group} col-lg-9 col-md-12 `}>
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
                      
                          <img
                            src="/static/delete 2.svg"
                            className={`${styles.delete_image} p-0 mr-4 border-0`}
                            alt="delete"
                            onClick={() => {
                              onDeleteRow(index);
                            }}
                          />
                       
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
               
            </div>
          </div>
        </div>
      </div>
    </div>
      </Card>
    </div>
  );
}

export default Index;
