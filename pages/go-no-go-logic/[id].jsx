import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Card, Form } from 'react-bootstrap';
import Router from 'next/router';
import DownloadBar from '../../src/components/DownloadBar';
import { useDispatch, useSelector } from 'react-redux';
import { GetGoNoGo, UpdateGoNoGo } from '../../src/redux/goNoGo/action';
import _get from 'lodash/get';
import { removePrefixOrSuffix } from '../../src/utils/helper';

function Index() {
  const dispatch = useDispatch();

  const [isFieldInFocus, setIsFieldInFocus] = useState({
    minTurnOver: false,
    minOrderValue: false,
  })

  useEffect(() => {
    const id = sessionStorage.getItem('gngMasterId');
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
  const gngResponseData = JSON.parse(JSON.stringify(_get(goNoGoResponse, 'data[0]', {})));

  useEffect(() => {
    setGngData({
    transactionType: gngResponseData?.transactionType ? gngResponseData?.transactionType : [],
    typeOfBusiness: gngResponseData?.typeOfBusiness ? gngResponseData?.typeOfBusiness : [],
    minTurnOver: gngResponseData?.minTurnOver ? Number(gngResponseData?.minTurnOver)/10000000 : '',
    minOrderValue: gngResponseData?.minOrderValue ? Number(gngResponseData?.minOrderValue)/10000000 : '',
    daysAllowedInExpectedDateOfShipment: gngResponseData?.daysAllowedInExpectedDateOfShipment,
    remarks: gngResponseData?.remarks
    })
  }, [gngResponseData._id]);

  const saveGngData = (name, value) => {
    const newInput = {...gngData}
    newInput[name] = value
    setGngData(newInput)
  }

  const handleTransaction = (e) => {
    const transactionArr = { ...gngData };
    if (e.target.checked) {
      transactionArr.transactionType.push(e.target.name);
    } else {
      transactionArr.transactionType.pop(e.target.name);
    }
    setGngData(transactionArr);
  };

  const handleTypeOfBusiness = (e) => {
    const businessArr = { ...gngData };
    if (e.target.checked) {
      businessArr.typeOfBusiness.push(e.target.name);
    } else {
      businessArr.typeOfBusiness.pop(e.target.name);
    }
    setGngData(businessArr);
  };

  const handleApproval = () => {
    const dataToSend = {...gngData}
    dataToSend.minOrderValue = removePrefixOrSuffix(gngData.minOrderValue) * 10000000;
    dataToSend.minTurnOver = removePrefixOrSuffix(gngData.minTurnOver) * 10000000;
    const data = {
      transactionType: [...gngData?.transactionType],
      typeOfBusiness: [...gngData?.typeOfBusiness],
      minOrderValue: dataToSend?.minOrderValue,
      minTurnOver: dataToSend?.minTurnOver,
      remarks: gngData?.remarks,
      daysAllowedInExpectedDateOfShipment: gngData?.daysAllowedInExpectedDateOfShipment,
      gngMasterId: gngResponseData?._id
    }
    dispatch(UpdateGoNoGo(data))
  }

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
                              name="Import"
                              checked={gngData?.transactionType?.includes('Import')}
                              onChange={(e)=>handleTransaction(e)}
                              type={type}
                              // value="Import"
                              id={`inline-${type}-1`}
                            />
                            <Form.Check
                              className={styles.radio}
                              inline
                              label="Export"
                              name="Export"
                              checked={gngData?.transactionType?.includes('Export')}
                              onChange={(e)=>handleTransaction(e)}
                              type={type}
                              // value="Export"
                              id={`inline-${type}-2`}
                            />
                            <Form.Check
                              className={styles.radio}
                              inline
                              label="Domestic"
                              checked={gngData?.transactionType?.includes('Domestic')}
                              onChange={(e)=>handleTransaction(e)}
                              name="Domestic"
                              type={type}
                              // value="Domestic"
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
                              onChange={(e)=>handleTypeOfBusiness(e)}
                              name="Manufacturer"
                              type={type}
                              // value="Manufacturer"
                              id={`inline-${type}-1`}
                            />
                            <Form.Check
                              className={styles.radio}
                              inline
                              label="Trader"
                              name="Trader"
                              checked={gngData?.typeOfBusiness?.includes('Trader')}
                              onChange={(e)=>handleTypeOfBusiness(e)}
                              type={type}
                              // value="Trader"
                              id={`inline-${type}-2`}
                            />
                            <Form.Check
                              className={styles.radio}
                              inline
                              label="Wholesaler"
                              name="Wholesaler"
                              checked={gngData?.typeOfBusiness?.includes('Wholesaler')}
                              onChange={(e)=>handleTypeOfBusiness(e)}
                              type={type}
                              // value="Wholesaler"
                              id={`inline-${type}-2`}
                            />
                            <Form.Check
                              className={styles.radio}
                              inline
                              label="Service"
                              name="Service"
                              type={type}
                              checked={gngData?.typeOfBusiness?.includes('Service')}
                              onChange={(e)=>handleTypeOfBusiness(e)}
                              value="Service"
                              id={`inline-${type}-2`}
                            />
                            <Form.Check
                              className={styles.radio}
                              inline
                              label="Retailer"
                              name="Retailer"
                              checked={gngData?.typeOfBusiness?.includes('Retailer')}
                              onChange={(e)=>handleTypeOfBusiness(e)}
                              type={type}
                              // value="Retailer"
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
                          onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                          onWheel={(event) => event.currentTarget.blur()}
                          onFocus={(e) => {
                            setIsFieldInFocus({ ...isFieldInFocus, minTurnOver: true }), (e.target.type = 'number');
                          }}
                          onBlur={(e) => {
                            setIsFieldInFocus({ ...isFieldInFocus, minTurnOver: false }), (e.target.type = 'text');
                          }}
                          value={
                            isFieldInFocus.minTurnOver
                              ? gngData?.minTurnOver
                              : Number(gngData?.minTurnOver).toLocaleString('en-In') +
                                ` CR`
                          }
                          onChange={(e)=>saveGngData(e.target.name, e.target.value)}
                          // value={gngData?.minTurnOver}
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
                          onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                          onWheel={(event) => event.currentTarget.blur()}
                          onFocus={(e) => {
                            setIsFieldInFocus({ ...isFieldInFocus, minOrderValue: true }), (e.target.type = 'number');
                          }}
                          onBlur={(e) => {
                            setIsFieldInFocus({ ...isFieldInFocus, minOrderValue: false }), (e.target.type = 'text');
                          }}
                          value={
                            isFieldInFocus.minOrderValue
                              ? gngData?.minOrderValue
                              : Number(gngData?.minOrderValue).toLocaleString('en-In') +
                                ` CR`
                          }
                          onChange={(e)=>saveGngData(e.target.name, e.target.value)}
                          // value={gngData?.minOrderValue}
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
                          type="number"
                          name="daysAllowedInExpectedDateOfShipment"
                          value={gngData?.daysAllowedInExpectedDateOfShipment}
                          onChange={(e)=>saveGngData(e.target.name, e.target.value)}
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
                        onChange={(e)=>saveGngData(e.target.name, e.target.value)}
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
      <DownloadBar downLoadButtonName={`Download`} handleApprove={handleApproval} isApprove={true} rightButtonName={`Send For Approval`} />
    </>
  );
}

export default Index;
