/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './billofentry.module.scss';
import BillOfEntry from '../../src/components/BillOfEntry';
import DischargeCargo from '../../src/components/BillOfEntry/DischargeCargo';
import Warehouse from '../../src/components/BillOfEntry/Warehouse';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCustomClearance } from '../../src/redux/CustomClearance&Warehousing/action';
import _get from 'lodash/get';
import API from '../../src/utils/endpoints';
import Router from 'next/router';
import Cookies from 'js-cookie';
import Axios from 'axios';
import { handleErrorToast } from '../../src/utils/helpers/global'
import { setDynamicName, setPageName } from '../../src/redux/userData/action';
import { getBreadcrumbValues } from '../../src/redux/breadcrumb/action';

const Index = () => {
  const dispatch = useDispatch();
  const [componentId, setComponentId] = useState(1);

  const [arrivalDate, setArrivalDate] = useState(null);

  useEffect(() => {
    const id = sessionStorage.getItem('customId');
    dispatch(GetAllCustomClearance(`?customClearanceId=${id}`));
  }, [dispatch]);

  const { allCustomClearance } = useSelector((state) => state.Custom);

  const customData = _get(allCustomClearance, 'data[0]', {});
  const OrderId = _get(customData, 'order._id', {});
  const CompanyOrderId = _get(customData, 'order', {});
  const uploadDoc = async (e) => {
    const fd = new FormData();
    fd.append('document', e.target.files[0]);
    const cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    const [jwtAccessToken] = decodedString.split('#');
    const headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
    try {
      const response = await Axios.post(`${API.corebaseUrl}${API.customClearanceDoc}`, fd, {
        headers: headers,
      });

      if (response.data.code === 200) {
        return response.data.data;
      } else {
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
              return null;
      }
    } catch (error) {
      handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
      return null;
    }
  };

  useEffect(() => {
    dispatch(setPageName('custom'));
    dispatch(setDynamicName(customData?.company?.companyName));
    dispatch(
      getBreadcrumbValues({
        upperTabs: 'Bill of Entry',
      }),
    );
  }, [allCustomClearance]);

  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className={`${styles.tab_header_inner} d-flex align-items-center`}>
            <img
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow right"
              className="img-fluid mr-2 image_arrow"
              onClick={() => Router.push('/bill-of-entry')}
              style={{ cursor: 'pointer' }}
            />
            <h3 className={`${styles.title} heading`}>
              <span>
                {customData?.company?.companyName} -{' '}
                <span style={{ textTransform: 'capitalize' }}>{CompanyOrderId?.orderId}</span>
              </span>
            </h3>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link ${componentId === 1 && 'active'}`}
                role="button"
                onClick={() => {
                  setComponentId(1);
                  dispatch(
                    getBreadcrumbValues({
                      upperTabs: 'Bill of Entry',
                    }),
                  );
                }}
              >
                Bill of Entry
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link ${componentId === 2 && 'active'} `}
                role="button"
                onClick={() => {
                  setComponentId(2);
                  dispatch(
                    getBreadcrumbValues({
                      upperTabs: 'Discharge of Cargo',
                    }),
                  );
                }}
              >
                Discharge of Cargo
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link ${componentId === 3 && 'active'}`}
                role="button"
                onClick={() => {
                  setComponentId(3);
                  dispatch(
                    getBreadcrumbValues({
                      upperTabs: 'Warehouse Details',
                    }),
                  );
                }}
              >
                Warehouse Details
              </a>
            </li>
          </ul>
        </div>

        <div className="container-fluid p-0">
          <div className={`${styles.mainCard}`}>
            <div className="row">
              <div className="col-md-12 p-0 accordion_body">
                <div className={`${styles.tabContent} `}>
                  <div className={`${styles.card}  accordion_body`}>
                    {componentId === 1 && (
                      <BillOfEntry
                        uploadDoc={uploadDoc}
                        OrderId={OrderId}
                        customData={customData}
                        componentId={componentId}
                        setComponentId={setComponentId}
                      />
                    )}
                  </div>
                  <div className={`${styles.card}  accordion_body`}>
                    {componentId === 2 && (
                      <DischargeCargo
                        setArrivalDate={setArrivalDate}
                        uploadDoc={uploadDoc}
                        OrderId={OrderId}
                        customData={customData}
                        componentId={componentId}
                        setComponentId={setComponentId}
                      />
                    )}
                  </div>
                  <div className={`${styles.card}  accordion_body`}>
                    {componentId === 3 && (
                      <Warehouse
                        arrivalDate={arrivalDate}
                        uploadDoc={uploadDoc}
                        OrderId={OrderId}
                        customData={customData}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
