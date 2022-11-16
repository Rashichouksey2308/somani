import React from 'react';
import styles from './index.module.scss';
import { Card, Form } from 'react-bootstrap';
import Router from 'next/router';
import Image from 'next/image';
import DownloadBar from '../../src/components/DownloadBar'

function Index() {
  return (
    <>
    <div className="container-fluid p-0 border-0">
      <Card className={`${styles.card}`}>
        <Card.Header className={`${styles.head_container} d-flex justify-content-between border-0 p-0`}>
          <div className={`${styles.head_header} align-items-center`}>
            <div onClick={() => Router.push('/go-no-go-logic')} style={{ cursor: 'pointer' }}>
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
              >
                <h3 className={`${styles.heading} mb-0`}>Go No Go Details</h3>
                <div className={styles.version_heading}>
                  Version : <span>1.0</span>
                </div>
              </div>

              <div className={`${styles.dashboard_form} card-body`}>
                <div className="row">
                  <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                    <div className={styles.sub_heading}>Transaction Type</div>
                  </div>
                  <div className={`${styles.form_group} col-lg-9 col-md-12 `}>
                    <div className={`${styles.radio_form}`}>
                      {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className={styles.radio_group}>
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Import"
                            name="group1"
                            type={type}
                            value="Import"
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Export"
                            name="group1"
                            type={type}
                            value="Export"
                            id={`inline-${type}-2`}
                          />
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Domestic"
                            name="group1"
                            type={type}
                            value="Domestic"
                            id={`inline-${type}-2`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                    <div className={styles.sub_heading}>Type of Business</div>
                  </div>
                  <div className={`${styles.form_group} col-lg-9 col-md-12 `}>
                    <div className={`${styles.radio_form}`}>
                      {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className={styles.radio_group}>
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Manufacturer"
                            name="group1"
                            type={type}
                            value="Import"
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Trader"
                            name="group1"
                            type={type}
                            value="Export"
                            id={`inline-${type}-2`}
                          />
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Wholesaler"
                            name="group1"
                            type={type}
                            value="Domestic"
                            id={`inline-${type}-2`}
                          />
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Service"
                            name="group1"
                            type={type}
                            value="Domestic"
                            id={`inline-${type}-2`}
                          />
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Retailer"
                            name="group1"
                            type={type}
                            value="Domestic"
                            id={`inline-${type}-2`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                    <div className={styles.sub_heading}>Turnover</div>
                  </div>
                  <div className={`${styles.form_group} col-lg-9 col-md-12`}>
                    <div className="d-flex">
                      <div className={`${styles.show_record}`}>less than</div>
                      <input
                        className={`${styles.input_value} border_color input form-control`}
                        type="text"
                        name="Port_Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                    <div className={styles.sub_heading}>Transaction Value</div>
                  </div>
                  <div className={`${styles.form_group} col-lg-9 col-md-12`}>
                    <div className="d-flex">
                      <div className={`${styles.show_record}`}>less than</div>
                      <input
                        className={`${styles.input_value} border_color input form-control`}
                        type="text"
                        name="Port_Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                    <div className={styles.sub_heading}>Expected Date of Shipment</div>
                  </div>
                  <div className={`${styles.form_group} col-lg-9 col-md-12`}>
                    <div className="d-flex">
                      <div className={`${styles.show_record}`}>less than or equal to</div>
                      <input
                        className={`${styles.input_value} border_color input form-control`}
                        type="text"
                        name="Port_Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                    <div className={styles.sub_heading}>Remarks</div>
                  </div>
                  <div className={`${styles.form_group} col-lg-9 c0l-md-12`}>
                    <input
                      className={`${styles.input_field} border_color input form-control`}
                      type="text"
                      name="Port_Name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
    <DownloadBar  downLoadButtonName={`Download`}
    isApprove={true}
          rightButtonName={`Send For Approval`} />
    </>
  );
}

export default Index;
