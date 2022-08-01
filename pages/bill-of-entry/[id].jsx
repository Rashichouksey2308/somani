/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from './billofentry.module.scss'
import BillOfEntry from '../../src/components/BillOfEntry'
import DischargeCargo from '../../src/components/BillOfEntry/DischargeCargo'
import Warehouse from '../../src/components/BillOfEntry/Warehouse'

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
                href="#billEntry"
                role="tab"
                aria-controls="billEntry"
                aria-selected="true"
              >
                Bill of Entry
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#dischargeCargo"
                role="tab"
                aria-controls="dischargeCargo"
                aria-selected="false"
              >
                Discharge of Cargo
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#warehouse"
                role="tab"
                aria-controls="warehouse"
                aria-selected="false"
              >
                Warehouse Details
              </a>
            </li>
          </ul>
        </div>

        <div className={`${styles.mainCard} container-fluid`}>
          <div className="row">
            <div className="col-md-12 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div
                  className="tab-pane show active fade"
                  id="billEntry"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <BillOfEntry />
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="dischargeCargo"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <DischargeCargo />
                  </div>
                </div>

                <div className="tab-pane fade" id="warehouse" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <Warehouse />
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
