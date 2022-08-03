/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import ThirdPartyInspection from '../../src/components/ThirdPartyInspection'
import PlotInspection from '../../src/components/PlotInspection'
import Appointment from '../../src/components/Appointment'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName,setDynamicName } from '../../src/redux/userData/action'
function Index() {
  const [darkMode, setDarkMode] = useState(false)
 const dispatch = useDispatch()
     useEffect(() => {
    dispatch(setPageName('inception2'))
   
  })
  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className="d-flex align-items-center">
            <h1 className={`${styles.title} heading`}>
              <img
                src={`${
                  darkMode
                    ? `/static/white-arrow.svg`
                    : `/static/arrow-right.svg`
                }`}
                alt="arrow right"
                className="img-fluid image_arrow"
              />
              <span>Ramakrishna Traders</span>
            </h1>
            <div className="ml-auto">
              <div className={`${styles.lastModified} text `}>
                <span>Last Modified:</span> 28 Jan,11:34am
              </div>
            </div>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link active`}
                data-toggle="tab"
                href="#appointment"
                role="tab"
                aria-controls="appointment"
                aria-selected="true"
              >
                Appointment
              </a>
            </li>
            <li className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link `}
                data-toggle="tab"
                href="#thirdParty"
                role="tab"
                aria-controls="thirdParty"
                aria-selected="false"
              >
                Third-Party Inspection
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
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
                <div
                  className="tab-pane show active fade"
                  id="appointment"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <Appointment />
                  </div>
                </div>
                <div className="tab-pane fade" id="thirdParty" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <ThirdPartyInspection />
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="plotInspection"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <PlotInspection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Index
