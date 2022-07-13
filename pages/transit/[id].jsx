/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from './transit.module.scss'
import BillLanding from '../../src/components/BillLading'
import CIMS from '../../src/components/CIMS'

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
              <span>Ramakrishna Traders - Ramal001-00002</span>
            </h1>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link active`}
                data-toggle="tab"
                href="#billLanding"
                role="tab"
                aria-controls="billLanding"
                aria-selected="true"
              >
                Bill of Lading
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
                LOI
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#cims"
                role="tab"
                aria-controls="cims"
                aria-selected="false"
              >
                CIMS
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
                IGM
              </a>
            </li>
           
          </ul>
        </div>
       
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div
                  className="tab-pane fade"
                  id="billLanding"
                  role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <BillLanding />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="cims"
                  role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <CIMS />
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
