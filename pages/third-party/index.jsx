/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import ThirdPartyInspection from '../../src/components/ThirdPartyInspection';
import PlotInspection from '../../src/components/PlotInspection';
import Appointment from '../../src/components/Appointment';
import { useDispatch, useSelector } from 'react-redux';
import { setDynamicName, setDynamicOrder, setPageName } from '../../src/redux/userData/action';
import _get from 'lodash/get';
import { GetAllInspection } from '../../src/redux/Inspections/action';
import Router from 'next/router';
import { getBreadcrumbValues } from '../../src/redux/breadcrumb/action';
import { getVendors,getPorts } from '../../src/redux/masters/action';

const Index = () => {
  const dispatch = useDispatch();

  const [lastModified, setlastModified] = useState('');
  const [componentId, setComponentId] = useState(1);
  useEffect(() => {
    dispatch(getVendors());
     dispatch(getPorts());
  }, []);
  const { getVendorsMasterData } = useSelector((state) => state.MastersData);
    const { getPortsMasterData } = useSelector((state) => state.MastersData);
  useEffect(() => {
    const id = sessionStorage.getItem('inspectionId');
    dispatch(GetAllInspection(`?inspectionId=${id}`));
  }, [dispatch]);
  const { allInspection, modifiedDate } = useSelector((state) => state.Inspection);
  useEffect(() => {
    if (window) {
      setlastModified(modifiedDate || localStorage.getItem('inceptionlastmodified'));
    }
  }, [modifiedDate]);

  const inspectionData = _get(allInspection, 'data[0]', {});
  useEffect(() => {
    dispatch(setPageName('inception2'));
    dispatch(setDynamicName(_get(inspectionData, 'company.companyName')));
    dispatch(setDynamicOrder(_get(inspectionData, 'order.orderId')));
  }, [inspectionData]);

  const [addTPI, setAddTPI] = useState([{}]);

  const setDate = (date) => {
    setlastModified(date);
  };
  const handleBreadcrumbClick = (value) => {
    dispatch(getBreadcrumbValues({ upperTabs: value }));
  };
  useEffect(() => {
    dispatch(getBreadcrumbValues({ upperTabs: 'Appointment' }));
  }, []);

  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className={`${styles.tab_header_inner} d-flex align-items-center`}>
            <img
              className={`${styles.arrow} mr-2 image_arrow img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
              onClick={() => Router.push('/inspection')}
            />
            <h1 className={`${styles.title} heading`}>
              <span>{_get(inspectionData, 'company.companyName', '')}</span>
            </h1>
            <div className="ml-auto text-right">
              <div className={`${styles.lastModified} text `}>
                <span style={{ marginRight: '7px' }} className="accordion_Text">
                  Last Modified:
                </span>
                {lastModified}
              </div>
            </div>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li
              className={`${styles.navItem}  nav-item`}
              onClick={() => {
                setComponentId(1);
                dispatch(getBreadcrumbValues({ upperTabs: 'Appointment' }));
                handleBreadcrumbClick('Appointment');
              }}
            >
              <a
                className={`${styles.navLink} navLink  nav-link ${componentId === 1 && 'active'}`}
                data-toggle="tab"
                href="#appointment"
                role="tab"
                aria-controls="appointment"
                aria-selected="true"
              >
                Appointment
              </a>
            </li>
            { inspectionData?.thirdPartyInspectionRequired ? (
              <li
                className={`${styles.navItem}  nav-item`}
                onClick={() => {
                  setComponentId(2);
                  dispatch(getBreadcrumbValues({ upperTabs: 'Third-Party Inspection' }));
                  handleBreadcrumbClick('Third-Party Inspection');
                }}
              >
                <a
                  className={`${styles.navLink} navLink  nav-link ${componentId === 2 && 'active'}`}
                  data-toggle="tab"
                  href="#thirdParty"
                  role="tab"
                  aria-controls="thirdParty"
                  aria-selected="false"
                >
                  Third-Party Inspection
                </a>
              </li>
            ) : (
              ''
            )}
            <li
              className={`${styles.navItem} nav-item`}
              onClick={() => {
                setComponentId(3);
                dispatch(getBreadcrumbValues({ upperTabs: 'Plot Inspection' }));
                handleBreadcrumbClick('Plot Inspection');
              }}
            >
              <a
                className={`${styles.navLink} navLink  nav-link ${componentId === 3 && 'active'}`}
                data-toggle="tab"
                href="#plotInspection"
                role="tab"
                aria-controls="plotInspection"
                aria-selected="false"
              >
                Plot Inspection
              </a>
            </li>
          </ul>
        </div>

        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div className="tab-pane show active fade" id="appointment" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    {componentId === 1 && (
                      <Appointment
                        inspectionData={inspectionData}
                        setDate={setDate}
                        vendor={getVendorsMasterData}
                        required={inspectionData?.thirdPartyInspectionRequired}
                        setComponentId={setComponentId}
                        componentId={componentId}
                      />
                    )}
                  </div>
                </div>
                {inspectionData?.thirdPartyInspectionRequired ? (
                  <>
                    {' '}
                    {addTPI?.map((e, index) => (
                      <div className="tab-pane show active fade" id="appointment" role="tabpanel">
                        <div className={`${styles.card}  accordion_body`}>
                          {componentId === 2 && (
                            <ThirdPartyInspection
                              inspectionData={inspectionData}
                              addButton={() => setAddTPI(addTPI + 1)}
                              setDate={setDate}
                              setComponentId={setComponentId}
                              componentId={componentId}
                              ports={getPortsMasterData}
                            />
                          )}
                        </div>
                      </div>

                      //   <div key={index} className="tab-pane fade" id="thirdParty" role="tabpanel">
                      //     <div className={`${styles.card}  accordion_body`}>
                      //        {componentId === 2 && (
                      //       <ThirdPartyInspection
                      //         inspectionData={inspectionData}
                      //         addButton={() => setAddTPI(addTPI + 1)}
                      //         setDate={setDate}
                      //          setComponentId={setComponentId}
                      //          componentId={componentId}
                      //       />
                      //  )}

                      //     </div>
                      //   </div>
                    ))}{' '}
                  </>
                ) : (
                  ''
                )}
                <div className="tab-pane show active fade" id="appointment" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    {componentId === 3 && (
                      <PlotInspection
                        inspectionData={inspectionData}
                        setDate={setDate}
                        setComponentId={setComponentId}
                        componentId={componentId}
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
