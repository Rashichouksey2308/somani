import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Card, Form } from 'react-bootstrap';
import Router from 'next/router';
import Image from 'next/image';
import DownloadBar from '../../src/components/DownloadBar';
import { useDispatch } from 'react-redux';
import { GetGoNoGo } from '../../src/redux/goNoGo/action';
import { useSelector } from 'react-redux';
import _get from 'lodash/get';

function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    let id = sessionStorage.getItem('gngMasterId');
    dispatch(GetGoNoGo(`?gngMasterId=${id}`));
  }, [dispatch]);

  const [gngData, setGngData] = useState({
    transactionType: [],
    typeOfBusiness: [],
    minTurnOver: '',
    minOrderValue: '',
    daysAllowedInExpectedDateOfShipment: '',
    remarks: '',
  });

  const { goNoGoResponse } = useSelector((state) => state.Gng);
  const gngResponseData = _get(goNoGoResponse, 'data[0]', {});

  useEffect(() => {
    setGngData({
    transactionType: gngResponseData?.transactionType,
    typeOfBusiness: gngResponseData?.typeOfBusiness,
    minTurnOver: gngResponseData?.minTurnOver,
    minOrderValue: gngResponseData?.minOrderValue,
    daysAllowedInExpectedDateOfShipment: gngResponseData?.daysAllowedInExpectedDateOfShipment,
    remarks: gngResponseData?.remarks
    })
  }, [gngResponseData]);

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
                    Version : <span>{gngResponseData?.version}</span>
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
                              checked={gngData?.transactionType?.includes('Import')}
                              type={type}
                              value="Import"
                              id={`inline-${type}-1`}
                            />
                            <Form.Check
                              className={styles.radio}
                              inline
                              label="Export"
                              name="group1"
                              checked={gngData?.transactionType?.includes('Export')}
                              type={type}
                              value="Export"
                              id={`inline-${type}-2`}
                            />
                            <Form.Check
                              className={styles.radio}
                              inline
                              label="Domestic"
                              checked={gngData?.transactionType?.includes('Domestic')}
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
                              checked={gngData?.typeOfBusiness?.includes('Manufacturer')}
                              name="group1"
                              type={type}
                              value="Manufacturer"
                              id={`inline-${type}-1`}
                            />
                            <Form.Check
                              className={styles.radio}
                              inline
                              label="Trader"
                              name="group1"
                              checked={gngData?.typeOfBusiness?.includes('Trader')}
                              type={type}
                              value="Trader"
                              id={`inline-${type}-2`}
                            />
                            <Form.Check
                              className={styles.radio}
                              inline
                              label="Wholesaler"
                              name="group1"
                              checked={gngData?.typeOfBusiness?.includes('Wholesaler')}
                              type={type}
                              value="Wholesaler"
                              id={`inline-${type}-2`}
                            />
                            <Form.Check
                              className={styles.radio}
                              inline
                              label="Service"
                              name="group1"
                              type={type}
                              checked={gngData?.typeOfBusiness?.includes('Service')}
                              value="Service"
                              id={`inline-${type}-2`}
                            />
                            <Form.Check
                              className={styles.radio}
                              inline
                              label="Retailer"
                              name="group1"
                              checked={gngData?.typeOfBusiness?.includes('Retailter')}
                              type={type}
                              value="Retailer"
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
                          name="minTurnOver"
                          value={gngData?.minTurnOver}
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
                          name="minOrderValue"
                          value={gngData?.minOrderValue}
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
                          name="daysAllowedInExpectedDateOfShipment"
                          value={gngData?.daysAllowedInExpectedDateOfShipment}
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
                        name="remarks"
                        value={gngData?.remarks}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <DownloadBar downLoadButtonName={`Download`} isApprove={true} rightButtonName={`Send For Approval`} />
    </>
  );
}

export default Index;
