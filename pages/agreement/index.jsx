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
import VesselSaveBar from '../../src/components/VesselSaveBar';
import {handleErrorToast} from '@/utils/helpers/global'

import { setDynamicName, setDynamicOrder, setPageName } from '../../src/redux/userData/action';
import { useDispatch, useSelector } from 'react-redux';
import { updateGenericData } from '../../src/redux/generic/actionsType';
function Index() {
  const [preview, setPreview] = useState('');
   const dispatch = useDispatch();
const [agreementDoc, setagreementDoc] = useState({
      lcDraftDoc: null,
  });
  const setPreviewValue = (val) => {
    sessionStorage.setItem('agreementPreview', val);
    setPreview(val);
  };
  const [name, setName] = useState('');
   const [orderId, setOrderID] = useState('');
   useEffect(() => {
  if(window){
       let term =  JSON.parse(sessionStorage.getItem('genericSelected'));
       dispatch(setPageName('agreement'));
        dispatch(setDynamicName(term.company.companyName));
        dispatch(setDynamicOrder(term.order.orderId));
        }
  },[]);

  useEffect(() => {
    if (window) {
      const data = JSON.parse(sessionStorage.getItem('genericSelected'));
     
     
      
      setOrderID(data.order._id)
      setName(data.company.companyName);
    }
  });
    useEffect(() => {
    if (window) {
     
      const doc = JSON.parse(sessionStorage.getItem('agreementDoc'));
      if(doc){
        const newInput = { ...agreementDoc };
        newInput.lcDraftDoc = {name:doc.name,
        lastModifiedDate:doc.lastModifiedDate   }
        setagreementDoc(newInput);
        }else{
       const doc = JSON.parse(sessionStorage.getItem('genericSelected'));
       
        const newInput = { ...agreementDoc };
        newInput.lcDraftDoc = {name:doc?.document?.name || null,
        lastModifiedDate:doc?.document?.date   }
        setagreementDoc(newInput);
        }

     
     
    }
  },[]);

   const uploadDocument1 = async(e) => {
    console.log(e.target.files[0],"e.target.files[0]")
    const newInput = { ...agreementDoc };
    newInput.lcDraftDoc = e.target.files[0];
  
   
    sessionStorage.setItem('agreementDoc', JSON.stringify(
    {
      name:e.target.files[0].name,
      lastModifiedDate:e.target.files[0].lastModifiedDate
    }
    ));
    setagreementDoc(newInput);
  };
   const saveDoc=async()=>{
      const doc = JSON.parse(sessionStorage.getItem('agreementDoc'));

 let dataToSend = {
  
        genericId:  JSON.parse(sessionStorage.getItem('genericSelected'))._id,
        agreementDocument:doc
      };
    await dispatch(updateGenericData(dataToSend, 'Save'));
  }
  const submitDoc=async()=>{
    const doc = JSON.parse(sessionStorage.getItem('agreementDoc'));

    if(!doc){
      handleErrorToast('please upload Sales Agreement ')
      return
    }
 let dataToSend = {
        genericId:  JSON.parse(sessionStorage.getItem('genericSelected'))._id,
        document:doc
      };
    await dispatch(updateGenericData(dataToSend, 'Submitted'));
  }
  const [show,setShow]=useState(false)
  console.log(agreementDoc,"agreementDoc");
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
          <li className={`${styles.navItem} nav-item`}   onClick={()=>setShow(false)}>
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
          <li className={`${styles.navItem} nav-item`}   onClick={()=>setShow(false)}>
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
          <li className={`${styles.navItem} nav-item`}   onClick={()=>setShow(false)}>
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
          <li className={`${styles.navItem} nav-item`}   onClick={()=>setShow(false)}>
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
          <li className={`${styles.navItem} nav-item`}   onClick={()=>setShow(false)}>
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

          <li className={`${styles.navItem} nav-item`}   onClick={()=>setShow(false)}>
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
          <li className={`${styles.navItem} nav-item`}
            onClick={()=>setShow(true)}
          >
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
                    module={['Generic','Agreements',"LC","LC Ammendment","Vessel Nomination","Insurance"]  }
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
     {show && <VesselSaveBar handleSave={saveDoc} rightBtn="Submit" rightBtnClick={submitDoc} />}
    </div>
  );
}

export default Index;
