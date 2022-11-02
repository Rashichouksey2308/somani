/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import styles from './transit.module.scss';
import BillLanding from '../../src/components/BillLading';
import CIMS from '../../src/components/CIMS';
import IGM from '../../src/components/IGM';
import _get from 'lodash/get';
import {
  UpdateTransitDetails,
  GetTransitDetails,
} from '../../src/redux/TransitDetails/action';
import { useDispatch, useSelector } from 'react-redux';
import LetterIndermity from '../../src/components/LetterIndermity';
import Cookies from 'js-cookie';
import Router from 'next/router';

import {
  setPageName,
  setDynamicName,
  setDynamicOrder,
} from '../../src/redux/userData/action';

//api
import Axios from 'axios';
import API from '../../src/utils/endpoints';
import { toast } from 'react-toastify';
import { getBreadcrumbValues } from '../../src/redux/breadcrumb/action';

function Index() {
  const [isShipmentTypeBULK, setIsShipmentTypeBulk] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [componentId, setComponentId] = useState(1);
  const [TransitDetails, setTransitDetails] = useState({});
;

  const dispatch = useDispatch();
  const { breadCrumbData } = useSelector((state) => state.Breadcrumb);
  
  const vesselData = _get(TransitDetails, 'data[0].order.vessel', {});

  const commodity = _get(TransitDetails, 'data[0].order.commodity', '')
    .trim()
    .toLowerCase();

  let objID = sessionStorage.getItem('ObjId');
  let transID = sessionStorage.getItem('transId');

  // useEffect(() => {
  //   let Value = vesselData.partShipmentAllowed
  //   setIsShipmentTypeBulk(Value)
  // }, [vesselData])

  useEffect(() => {
    dispatch(GetTransitDetails(`?transitId=${transID}`));
  }, [dispatch]);
  useEffect(() => {
    dispatch(setPageName('transit'));
    dispatch(
      setDynamicName(_get(TransitDetails, 'data[0].company.companyName')),
    );
    dispatch(setDynamicOrder(_get(TransitDetails, 'data[0].order.orderId')));
  }, [TransitDetails]);

  useEffect(() => {
    if (transID) {
      fetchInitialData();
    }
  
  }, [transID]);

  // useEffect(()=>{
  //   setTransitDetails(TransitDetail)
  // },[TransitDetail])

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
    // dispatch(UploadCustomDoc(fd))

    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    let headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
    try {
      let response = await Axios.post(
        `${API.corebaseUrl}${API.customClearanceDoc}`,
        fd,
        {
          headers: headers,
        },
      );
    
      if (response.data.code === 200) {
        // dispatch(getCustomClearanceSuccess(response.data.data))

        return response.data.data;
        // let toastMessage = 'DOCUMENT UPDATED'
        // if (!toast.isActive(toastMessage.toUpperCase())) {
        //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) // }
      } else {
        // dispatch(getCustomClearanceFailed(response.data.data))
        // let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        // if (!toast.isActive(toastMessage.toUpperCase())) {
        //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) // }
      }
    } catch (error) {
      // dispatch(getCustomClearanceFailed())
      // let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
      // if (!toast.isActive(toastMessage.toUpperCase())) {
      //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      // }
    }
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
  return (
    <>
      <div className={`${styles.dashboardTab} bg-transparent w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div
            className={`${styles.tab_header_inner} d-flex align-items-center`}
          >
            <img
              className={`${styles.arrow} mr-2 image_arrow img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
              onClick={() => Router.push('/transit')}
              style={{ cursor: 'pointer' }}
            />
            <h1 className={`${styles.title} heading`}>
              <span>
                {_get(
                  TransitDetails,
                  'data[0].company.companyName',
                  'Company Name',
                )}
              </span>
            </h1>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link ${
                  componentId === 1 && 'active'
                }`}
                // data-toggle="tab"
                // href="#billLanding"
                // role="tab"
                // aria-controls="billLanding"
                // aria-selected="true"
                role="button"
                onClick={() => {
                  setComponentId(1);
                  handleBreadcrumbClick('Bill of Lading');
                }}
              >
                Bill of Lading
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link ${
                  componentId === 2 && 'active'
                } `}
                // data-toggle="tab"
                // href="#loi"
                // role="tab"
                // aria-controls="loi"
                // aria-selected="false"
                role="button"
                onClick={() => {
                  setComponentId(2);
                  handleBreadcrumbClick('LOI');
                }}
              >
                LOI
              </a>
            </li>
            {commodity?.toLowerCase().includes('coal') && (
              <li className={`${styles.navItem} nav-item`}>
                <a
                  className={`${styles.navLink} navLink nav-link ${
                    componentId === 3 && 'active'
                  } `}
                  // data-toggle="tab"
                  // href="#cims"
                  // role="tab"
                  // aria-controls="cims"
                  // aria-selected="false"
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
                className={`${styles.navLink} navLink nav-link ${
                  componentId === 4 && 'active'
                } `}
                // data-toggle="tab"
                // href="#igm"
                // role="tab"
                // aria-controls="igm"
                // aria-selected="false"
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
                {/* </div> */}
                {/* <div className="tab-pane fade" id="loi" role="tabpanel"> */}
                <div className={`${styles.card}  accordion_body`}>
                  {componentId === 2 && (
                    <LetterIndermity TransitDetails={TransitDetails} />
                  )}
                </div>
                {/* </div> */}
                {commodity?.toLowerCase().includes('coal') && (
                  // <div className="tab-pane fade" id="cims" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    {componentId === 3 && (
                      <CIMS
                        orderid={objID}
                        docUploadFunction={uploadDoc}
                        TransitDetails={TransitDetails}
                        isShipmentTypeBULK={isShipmentTypeBULK}
                      />
                    )}
                  </div>
                  // </div>
                )}
                {/* <div className="tab-pane fade" id="igm" role="tabpanel"> */}
                <div className={`${styles.card}  accordion_body`}>
                  {componentId === 4 && (
                    <IGM
                      docUploadFunction={uploadDoc}
                      TransitDetails={TransitDetails}
                      isShipmentTypeBULK={isShipmentTypeBULK}
                      orderId={objID}
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
