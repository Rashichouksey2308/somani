/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from './index.module.scss'
import ThirdPartyInspection from '../../src/components/ThirdPartyInspection'
import PlotInspection from '../../src/components/PlotInspection'


function Index() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <div className={`${styles.dashboardTab} tabHeader w-100`}>
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
                href="#thirdParty"
                role="tab"
                aria-controls="thirdParty"
                aria-selected="true"
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
       
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div
                  className="tab-pane show active fade"
                  id="thirdParty"
                  role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <ThirdPartyInspection />
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="plotInspection"
                  role="tabpanel">
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
