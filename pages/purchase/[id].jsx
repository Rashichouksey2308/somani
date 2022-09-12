/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Purchase from '../../src/components/Purchase'


function Index() {
  return (
    <>
      <div className={`${styles.dashboardTab}  w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div
            className={`${styles.tab_header_inner} d-flex align-items-center`}
          >
            <Image width={13} height={21}
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow right"
              className="image_arrow"
            />
            <h1 className={`${styles.title} heading`}>
              <span>
                Ramakrishna Traders
              </span>
            </h1>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li
              className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link active`}
                data-toggle="tab"
                href="#releaseOrder"
                role="tab"
                aria-controls="releaseOrder"
                aria-selected="true"
              >
                Purchase
              </a>
            </li>
            <li
              className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#deliveryOrder"
                role="tab"
                aria-controls="deliveryOrder"
                aria-selected="false"
              >
                Sales
              </a>
            </li> 
            <li
              className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#deliveryOrder"
                role="tab"
                aria-controls="deliveryOrder"
                aria-selected="false"
              >
                Payment
              </a>
            </li>  
            <li
              className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#deliveryOrder"
                role="tab"
                aria-controls="deliveryOrder"
                aria-selected="false"
              >
                Receipt
              </a>
            </li>  
            <li
              className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#deliveryOrder"
                role="tab"
                aria-controls="deliveryOrder"
                aria-selected="false"
              >
                Refund
              </a>
            </li>  
            <li
              className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#deliveryOrder"
                role="tab"
                aria-controls="deliveryOrder"
                aria-selected="false"
              >
                GL Transfer
              </a>
            </li>  
            <li
              className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#deliveryOrder"
                role="tab"
                aria-controls="deliveryOrder"
                aria-selected="false"
              >
                Interoffice Transfers
              </a>
            </li>  
            <li
              className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#deliveryOrder"
                role="tab"
                aria-controls="deliveryOrder"
                aria-selected="false"
              >
                SOA
              </a>
            </li>        
          </ul>
        </div>

        <div className="p-0 container-fluid">
          <div className="row">
            <div className="col-md-12 p-0 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div
                  className="tab-pane show active fade"
                  id="releaseOrder"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                   <Purchase/>
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
