import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { CreatePorts, GetPorts, UpdatePorts } from '../../src/redux/ports/action';
import { getCountries, getState } from '../../src/redux/masters/action';
import _get from 'lodash/get';
import Image from 'next/image';

function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getState());
  }, [dispatch]);

  const { getCountriesMasterData } = useSelector((state) => state.MastersData);
  const { getStateMasterData } = useSelector((state) => state.MastersData);

  const { portsResponse } = useSelector((state) => state.ports);
  const portResponseData = _get(portsResponse, 'data[0]', {});

  let id = sessionStorage.getItem('portId');

  useEffect(() => {
    if (!id) return;
    dispatch(GetPorts(`?portId=${id}`));
  }, [dispatch]);

  const [portData, setPortData] = useState({
    Country: 'India',
    Port_Name: '',
    State: '',
    Container_Handling: '',
    Approved: '',
  });

  console.log(portData, 'PORT DATA', portResponseData, 'id', id);

  return (
    <div className="container-fluid p-0 border-0">
      <Card className={`${styles.card}`}>
        <Card.Header
          className={`${styles.head_container} d-flex justify-content-between align-items-center border-0 p-0`}
        >
          <div className={`${styles.head_header} align-items-center`}>
            <div
              onClick={() => {
                Router.push('/currency-master');
              }}
              style={{ cursor: 'pointer' }}
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
                        name="Port_Name"
                        onChange={(e) => savePortData(e.target.name, e.target.value)}
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
                        //name="Port_Name"
                        onChange={(e) => savePortData(e.target.name, e.target.value)}
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
                        //name="Port_Name"
                        onChange={(e) => savePortData(e.target.name, e.target.value)}
                      />
                      <label className={`${styles.label_heading} label_heading`}>Symbol</label>
                    </div>
                    <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 ml-3`}>
                      <div className={`${styles.theme} d-flex align-items-center`}>
                        <div className={`${styles.toggle_label} form-check-label mr-3`}>Active</div>
                        <label className={styles.switch}>
                          <input type="checkbox" />
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
    </div>
  );
}

export default Index;
