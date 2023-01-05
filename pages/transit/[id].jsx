/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './transit.module.scss';
import BillLanding from '../../src/components/BillLading';
import CIMS from '../../src/components/CIMS';
import IGM from '../../src/components/IGM';
import _get from 'lodash/get';
import { GetTransitDetails } from '../../src/redux/TransitDetails/action';
import { useDispatch, useSelector } from 'react-redux';
import LetterIndermity from '../../src/components/LetterIndermity';
import Cookies from 'js-cookie';
import Router from 'next/router';

import { setDynamicName, setDynamicOrder, setPageName } from '../../src/redux/userData/action';

//api
import Axios from 'axios';
import API from '../../src/utils/endpoints';
import { getBreadcrumbValues } from '../../src/redux/breadcrumb/action';

function Index() {
  const [isShipmentTypeBULK, setIsShipmentTypeBulk] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [componentId, setComponentId] = useState(1);
  const [TransitDetails, setTransitDetails] = useState({});

  const dispatch = useDispatch();
  const { breadCrumbData } = useSelector((state) => state.Breadcrumb);

  const vesselData = _get(TransitDetails, 'data[0].order.vessel', {});

  const commodity = _get(TransitDetails, 'data[0].order.commodity', '').trim().toLowerCase();

  let objID = sessionStorage.getItem('ObjId');
  let transID = sessionStorage.getItem('transId');

  useEffect(() => {
    dispatch(GetTransitDetails(`?transitId=${transID}`));
  }, [dispatch]);
  useEffect(() => {
    dispatch(setPageName('transit'));
    dispatch(setDynamicName(_get(TransitDetails, 'data[0].company.companyName')));
    dispatch(setDynamicOrder(_get(TransitDetails, 'data[0].order.orderId')));
  }, [TransitDetails]);

  useEffect(() => {
    if (transID) {
      fetchInitialData();
    }
  }, [transID]);

  const fetchInitialData = async () => {
    const data = await dispatch(GetTransitDetails(`?transitId=${transID}`));
    setTransitDetails(data);
  };

  const handleBreadcrumbClick = (value) => {
    dispatch(getBreadcrumbValues({ upperTabs: value }));
  };
  const uploadDoc = async (e) => {
    let fd = new FormData();
    fd.append('document', e.target.files[0]);

    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    let headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
    try {
      let response = await Axios.post(`${API.corebaseUrl}${API.customClearanceDoc}`, fd, {
        headers: headers,
      });

      if (response.data.code === 200) {
        return response.data.data;
      } else {
      }
    } catch (error) {}
  };
  // for setting default breadcrumb tab value //
  useEffect(() => {
    dispatch(getBreadcrumbValues({ upperTabs: 'Bill Of Lading' }));
  }, []);

  useEffect(() => {
    //written to redirect to LOI tab from transit/id preview page
    if (Router && Router.query) {
      let data = Object.keys(Router.query);
      if (data && data.length > 0 && data.includes('loi')) {
        setComponentId(2);
      }
    }
  }, [Router]);
  const getUnqueBl = () => {
    const data = JSON.parse(JSON.stringify(_get(TransitDetails, 'data[0].BL.billOfLanding', [])));
    const set = new Set(data.map((obj) => obj.vesselName));
    return [...set];
  };

  const isBlNotSurrendered = () => {
    let blNotSurrendered = true;
    let data = _get(TransitDetails, 'data[0].BL.billOfLanding', []);
    for (let i = 0; i <= data.length - 1; i++) {
      if (!data[i].blSurrenderDate) {
        blNotSurrendered = true;
        break;
      } else {
        blNotSurrendered = false;
      }
    }
    return blNotSurrendered;
  };

  return (
    <>
      <div className={`${styles.dashboardTab} bg-transparent w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className={`${styles.tab_header_inner} d-flex align-items-center`}>
            <img
              className={`${styles.arrow} mr-2 image_arrow img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
              onClick={() => Router.push('/transit')}
              style={{ cursor: 'pointer' }}
            />
            <h1 className={`${styles.title} heading`}>
              <span>{_get(TransitDetails, 'data[0].company.companyName', 'Company Name')}</span>
            </h1>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link ${componentId === 1 && 'active'}`}
                role="button"
                onClick={() => {
                  setComponentId(1);
                  handleBreadcrumbClick('Bill of Lading');
                }}
              >
                Bill of Lading
              </a>
            </li>
            {isBlNotSurrendered() && (
              <li className={`${styles.navItem} nav-item`}>
                <a
                  className={`${styles.navLink} navLink nav-link ${componentId === 2 && 'active'} `}
                  role="button"
                  onClick={() => {
                    setComponentId(2);
                    handleBreadcrumbClick('LOI');
                  }}
                >
                  LOI
                </a>
              </li>
            )}
            {commodity?.toLowerCase().includes('coal') && (
              <li className={`${styles.navItem} nav-item`}>
                <a
                  className={`${styles.navLink} navLink nav-link ${componentId === 3 && 'active'} `}
                  role="button"
                  onClick={() => {
                    setComponentId(3);
                    handleBreadcrumbClick('CIMS');
                  }}
                >
                  CIMS
                </a>
              </li>
            )}
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link ${componentId === 4 && 'active'} `}
                role="button"
                onClick={() => {
                  setComponentId(4);
                  handleBreadcrumbClick('IGM');
                }}
              >
                IGM
              </a>
            </li>
          </ul>
        </div>

        <div className={`${styles.mainCard} container-fluid`}>
          <div className="row">
            <div className="col-md-12 p-0 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                {/* <div
                  className="tab-pane show active fade"
                  id="billLanding"
                  role="tabpanel"
                > */}
                <div className={`${styles.card}  accordion_body`}>
                  {componentId === 1 && (
                    <BillLanding
                      orderid={objID}
                      docUploadFunction={uploadDoc}
                      TransitDetails={TransitDetails}
                      isShipmentTypeBULK={isShipmentTypeBULK}
                      fetchInitialData={fetchInitialData}
                    />
                  )}
                </div>

                <div className={`${styles.card}  accordion_body`}>
                  {isBlNotSurrendered() && componentId === 2 && <LetterIndermity TransitDetails={TransitDetails} />}
                </div>
                {/* </div> */}
                {commodity?.toLowerCase().includes('coal') && (
                  <div className={`${styles.card}  accordion_body`}>
                    {commodity?.toLowerCase().includes('coal') && componentId === 3 && (
                      <CIMS
                        orderid={objID}
                        docUploadFunction={uploadDoc}
                        TransitDetails={TransitDetails}
                        isShipmentTypeBULK={isShipmentTypeBULK}
                        getUnqueBl={getUnqueBl}
                        fetchInitialData={fetchInitialData}
                      />
                    )}
                  </div>
                )}

                <div className={`${styles.card}  accordion_body`}>
                  {componentId === 4 && (
                    <IGM
                      docUploadFunction={uploadDoc}
                      TransitDetails={TransitDetails}
                      isShipmentTypeBULK={isShipmentTypeBULK}
                      orderId={objID}
                      getUnqueBl={getUnqueBl}
                    />
                  )}
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
