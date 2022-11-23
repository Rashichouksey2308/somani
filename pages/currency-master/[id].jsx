import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getState } from '../../src/redux/masters/action';
import _get from 'lodash/get';
import { currencyValidation } from '../../src/utils/helpers/review';
import Image from 'next/image';
import SaveBar from '../../src/components/SaveBar';
import { CreateCurrency, UpdateCurrency, GetCurrency } from '../../src/redux/currency/action';

function Index() {
  const dispatch = useDispatch();

  const { currencyResponse } = useSelector((state) => state.Currency);
  const currencyResponseData = _get(currencyResponse, 'data[0]', {});

  let id = sessionStorage.getItem('currencyId');

  useEffect(() => {
    if (!id) return;
    dispatch(GetCurrency(`?currencyId=${id}`));
    setCurrencyData({
      Currency: currencyResponseData?.Currency,
      Currency_Name: currencyResponseData?.Currency_Name,
      Symbol: currencyResponseData?.Symbol,
      Status: currencyResponseData?.Status,
    })
  }, [dispatch]);

  const [currencyData, setCurrencyData] = useState({
    Currency: '',
    Currency_Name: '',
    Symbol: '',
    Status: 'Active',
    Inactive_Date: '',
  });

  const saveCurrencyData = (name, value) => {
    let newInput = { ...currencyData };
    newInput[name] = value;
    setCurrencyData(newInput);
  };

  const handleSubmit = () => {
    if (!currencyValidation(currencyData)) return;
    let data = {
      Currency: currencyData.Currency,
      Currency_Name: currencyData.Currency_Name,
      Symbol: currencyData.Symbol,
      Status: currencyData.Status,
    };
    let data2 = {
      Currency: currencyData.Currency,
      Currency_Name: currencyData.Currency_Name,
      Symbol: currencyData.Symbol,
      Status: currencyData.Status,
      currencyId: currencyResponseData._id
    }
    if(id){
      dispatch(UpdateCurrency(data2))
    } 
    else {
    dispatch(CreateCurrency(data))
    }
  };

  return (
    <div className="container-fluid p-0 border-0">
      <Card className={`${styles.card}`}>
        <Card.Header
          className={`${styles.head_container} d-flex justify-content-between align-items-center border-0 p-0`}
        >
          <div className={`${styles.head_header} align-items-center`}>
            <div
              onClick={() => { sessionStorage.getItem('currencyId') && sessionStorage.removeItem('currencyId');
                Router.push('/currency-master');
              }}
            >
              <img
                className={`${styles.back_arrow} img-fluid image_arrow`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
              />
            </div>
            <h1 className={styles.heading}>Currency</h1>
          </div>
          <div className="d-flex align-items-center">
            <div className={`${styles.lastModified} text `}>
              <span style={{ marginRight: '7px' }} className="accordion_Text">
                Last Modified:
              </span>
              Balakrishna SGF001 - 28 Jan,11:34am
            </div>
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
                <h3 className={`${styles.heading} mb-0`}>Currency</h3>
                <span>+</span>
              </div>
              <div id="authorisedDetails" aria-labelledby="authorisedDetails">
                <div className={`${styles.dashboard_form} card-body`}>
                  <div className="row">
                    <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                      <input
                        className={`${styles.input_field} border_color input form-control`}
                        type="text"
                        required
                        name="Currency"
                        value={currencyData?.Currency}
                        onChange={(e) => saveCurrencyData(e.target.name, e.target.value)}
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Currency <strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                      <input
                        className={`${styles.input_field} border_color input form-control`}
                        type="text"
                        required
                        name="Currency_Name"
                        value={currencyData?.Currency_Name}
                        onChange={(e) => saveCurrencyData(e.target.name, e.target.value)}
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Currency Name <strong className="text-danger">*</strong>
                      </label>
                    </div>{' '}
                    <div className={`${styles.form_group} col-lg-1 col-md-6 col-sm-6 `}>
                      <input
                        className={`${styles.input_field} border_color input form-control`}
                        type="text"
                        required
                        name="Symbol"
                        value={currencyData?.Symbol}
                        onChange={(e) => saveCurrencyData(e.target.name, e.target.value)}
                      />
                      <label className={`${styles.label_heading} label_heading`}>Symbol</label>
                    </div>
                    <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 ml-3`}>
                      <div className={`${styles.theme} d-flex align-items-center`}>
                        <div className={`${styles.toggle_label} form-check-label mr-3`}>Active</div>
                        <label className={styles.switch}>
                          <input
                            type="checkbox"
                            checked={currencyData?.Status == "Active" ? true : false}
                           // checked={currencyData?.Status ? 'checked' : ''}
                            name="Status"
                            onChange={(e) => saveCurrencyData(e.target.name, e.target.value)}
                          />
                          <span className={`${styles.slider} ${styles.round}`}></span>
                        </label>
                        <div className={`${styles.toggle_label} form-check-label ml-3 mr-3`}>Inactive</div>
                      </div>
                      <label className={`${styles.label_heading} label_heading`} style={{ left: '15px' }}>
                        Status
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <SaveBar handleSave={saveCurrencyData} rightBtnClick={handleSubmit} rightBtn="Submit" />
    </div>
  );
}

export default Index;
