/* eslint-disable @next/next/no-img-element */
import 'bootstrap/dist/css/bootstrap.css';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import Contract from '../../src/components/A2S_Sales_Contract';
import AssignmentLetter from '../../src/components/AssignmentLetter';
import AssociateshipAgreement from '../../src/components/AssociateshipAgreement';
import InspectionDocument from '../../src/components/InspectionDocument';
import QPA from '../../src/components/QPA';
import TPAIGI from '../../src/components/TPAIGI';
import TPASeller from '../../src/components/TPASeller';
import styles from './index.module.scss';

function Index() {
  const [preview, setPreview] = useState('');
const [agreementDoc, setagreementDoc] = useState({
      lcDraftDoc: null,
  });
  const setPreviewValue = (val) => {
    sessionStorage.setItem('agreementPreview', val);
    setPreview(val);
  };
  const [name, setName] = useState('');
   const [orderId, setOrderID] = useState('');
  const data = JSON.parse(sessionStorage.getItem('genericSelected'))
  console.log(data,'agreement')
  useEffect(() => {
    if (window) {
      const data = JSON.parse(sessionStorage.getItem('genericSelected'));
      setOrderID(data.order._id)
      setName(data.company.companyName);
    }
  });
  console.log(orderId,"orderId")
   const uploadDocument1 = (e) => {
    const newInput = { ...agreementDoc };
    newInput.lcDraftDoc = e.target.files[0];
    setagreementDoc(newInput);
  };
  return (
    <div className={`${styles.dashboardTab} w-100`}>
      <div className={`${styles.tabHeader} tabHeader `}>
        <div className={`${styles.tab_header_inner} ml-3 d-flex align-items-center`}>
          <img
            onClick={() => Router.push('/agreement-table')}
            className={`${styles.arrow} img-fluid image_arrow mr-2`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="arrow"
            style={{ cursor: 'pointer' }}
          />
          <h1 className={`${styles.title} heading `}>{name}</h1>
          <div className={'ml-auto d-flex'}>
            <div className="ml-auto mr-2">
              <button type="button" className={`${styles.btnPrimary} btn btn-primary`}>
                Print
              </button>
            </div>
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
                <div className="tab-pane fade show active" id="SalesContract" role="tabpanel">
                  <div className="accordion shadow-none" id="profileAccordion">
                    <Contract preview={preview} setPreviewValue={setPreviewValue} />
                  </div>
                </div>
                <div className="tab-pane fade" id="Associateship" role="tabpanel">
                  <div className="accordion shadow-none" id="assignmentLetter">
                    <AssociateshipAgreement preview={preview} setPreviewValue={setPreviewValue} />
                  </div>
                </div>
                <div className="tab-pane fade" id="Assignment" role="tabpanel">
                  <div className="accordion shadow-none" id="assignmentLetter">
                    <AssignmentLetter preview={preview} setPreviewValue={setPreviewValue} />
                  </div>
                </div>
                <div className="tab-pane fade" id="TPASeller" role="tabpanel">
                  <div className="accordion shadow-none" id="tpaSeller">
                    <TPASeller preview={preview} setPreviewValue={setPreviewValue} />
                  </div>
                </div>
                <div className="tab-pane fade" id="TPACMA" role="tabpanel">
                  <div className="accordion shadow-none" id="tpaSeller">
                    <TPAIGI preview={preview} setPreviewValue={setPreviewValue} />
                  </div>
                </div>
                <div className="tab-pane fade" id="QPA" role="tabpanel">
                  <div className="accordion shadow-none" id="qpaAgreement">
                    <QPA preview={preview} setPreviewValue={setPreviewValue} />
                  </div>
                </div>
                <div className="tab-pane fade" id="Document" role="tabpanel">
                  <div className="accordion shadow-none" id="inspectionDocument">
                    <InspectionDocument 
                    orderId={orderId} 
                    module='Agreements&Insurance&LC&Opening'  
                    documentName="Sales Agreement" 
                    isOpen="false" 
                    setLcDoc={setagreementDoc} 
                    lcDoc={agreementDoc}
                    uploadDocument1={uploadDocument1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
