/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import Router from 'next/router'
import AgreementSales from '../../src/components/AgreementSales'
import SalesAgreement from '../../src/components/SalesAgreement'
import SalesContract from '../../src/components/SalesContract'
import Contract from '../../src/components/A2S_Sales_Contract'
import AssociateshipAgreement from '../../src/components/AssociateshipAgreement'
import TPASeller from '../../src/components/TPASeller'
import TPAIGI from '../../src/components/TPAIGI'
import InspectionDocument from '../../src/components/InspectionDocument'
import QPA from '../../src/components/QPA'
import { setPageName } from '../../src/redux/userData/action'

import { Form } from 'react-bootstrap'

import AssignmentLetter from '../../src/components/AssignmentLetter'

function Index() {
  const [preview,setPreview]=useState(false)


 const setPreviewValue=(val)=>{
  setPreview(val)
 }
 const [name,setName]=useState("")
 useEffect(() => {
    if (window) {
      const data = JSON.parse(sessionStorage.getItem("genericSelected"))
        setName(data.company.companyName)
      
    }
  },)
  return (
    <div className={`${styles.dashboardTab} w-100`}>
      <div className={`${styles.tabHeader} tabHeader `}>
        <div
          className={`${styles.tab_header_inner} ml-3 d-flex align-items-center`}
        >
          <img onClick={() => Router.push('/agreement-table')}
            className={`${styles.arrow} img-fluid image_arrow mr-2`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="arrow"
            style={{cursor:'pointer'}}
          />
          <h1 className={`${styles.title} heading `}>{name}</h1>
          <div className={'ml-auto d-flex'}>
            <div className="ml-auto mr-2">
              <button
                type="button"
                className={`${styles.btnPrimary} btn btn-primary`}
              >
                Print
              </button>
            </div>
            {/* <div className="ml-auto">
              <button type="button" className={`${styles.btnPrimary} btn btn-primary`}><img src="/static/refresh.svg" alt="refresh" className="img-fluid" />Update Info</button>
              <div className={`${styles.lastModified} text `}><span>Last Modified:</span> 28 Jan,11:34am</div>
            </div> */}
          </div>
        </div>
        <ul className={`${styles.navTabs} nav nav-tabs`}>
          <li className={`${styles.navItem} nav-item`}>
            <a
              className={`${styles.navLink} navLink nav-link active`}
              data-toggle="tab"
              href="#SalesContract"
              role="tab"
              aria-controls="SalesContract"
              aria-selected="true"
            >
              Sales Agreement
            </a>
          </li>
          <li className={`${styles.navItem} nav-item`}>
            <a
              className={`${styles.navLink} navLink nav-link`}
              data-toggle="tab"
              href="#Associateship"
              role="tab"
              aria-controls="GST"
              aria-selected="false"
            >
              Associateship Agreement
            </a>
          </li>
          <li className={`${styles.navItem} nav-item`}>
            <a
              className={`${styles.navLink} navLink nav-link`}
              data-toggle="tab"
              href="#TPASeller"
              role="tab"
              aria-controls="tpaSeller"
              aria-selected="false"
            >
              TPA (Seller)
            </a>
          </li>
          <li className={`${styles.navItem} nav-item`}>
            <a
              className={`${styles.navLink} navLink nav-link`}
              data-toggle="tab"
              href="#TPACMA"
              role="tab"
              aria-controls="TPACMA"
              aria-selected="false"
            >
              TPA (CMA)
            </a>
          </li>
          <li className={`${styles.navItem} nav-item`}>
            <a
              className={`${styles.navLink} navLink nav-link`}
              data-toggle="tab"
              href="#Assignment"
              role="tab"
              aria-controls="assignmentLetter"
              aria-selected="false"
            >
              Assignment Letter
            </a>
          </li>

          <li className={`${styles.navItem} nav-item`}>
            <a
              className={`${styles.navLink} navLink nav-link`}
              data-toggle="tab"
              href="#QPA"
              role="tab"
              aria-controls="qpaAgreement"
              aria-selected="false"
            >
              QPA
            </a>
          </li>
          <li className={`${styles.navItem} nav-item`}>
            <a
              className={`${styles.navLink} navLink nav-link`}
              data-toggle="tab"
              href="#Document"
              role="tab"
              aria-controls="inspectionDocument"
              aria-selected="false"
            >
              Document
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.container_fluid}>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div
                  className="tab-pane fade show active"
                  id="SalesContract"
                  role="tabpanel"
                >
                  <div className="accordion shadow-none" id="profileAccordion">
                    <Contract
                      preview={preview}
                      setPreviewValue={setPreviewValue}
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="Associateship"
                  role="tabpanel"
                >
                  <div className="accordion shadow-none" id="assignmentLetter">
                    <AssociateshipAgreement 
                    setPreviewValue={setPreviewValue}
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="Assignment" role="tabpanel">
                  <div className="accordion shadow-none" id="assignmentLetter">
                    <AssignmentLetter
                    setPreviewValue={setPreviewValue}
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="TPASeller" role="tabpanel">
                  <div className="accordion shadow-none" id="tpaSeller">
                    <TPASeller
                    setPreviewValue={setPreviewValue}
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="TPACMA" role="tabpanel">
                  <div className="accordion shadow-none" id="tpaSeller">
                    <TPAIGI
                    setPreviewValue={setPreviewValue}
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="QPA" role="tabpanel">
                  <div className="accordion shadow-none" id="qpaAgreement">
                    <QPA
                    setPreviewValue={setPreviewValue}
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="Document" role="tabpanel">
                  <div
                    className="accordion shadow-none"
                    id="inspectionDocument"
                  >
                    <InspectionDocument documentName="Sales Agreement" isOpen='false' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Index
