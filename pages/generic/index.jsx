/* eslint-disable @next/next/no-img-element */
import React,{useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import styles from './index.module.scss'
import SalesAgreement from '../../src/components/SalesAgreement'
import SalesContract from '../../src/components/SalesContract'
import AssociateshipAgreement from '../../src/components/AssociateshipAgreement'
import TPASeller from '../../src/components/TPASeller'
import TPAIGI from '../../src/components/TPAIGI'
import QPA from '../../src/components/QPA'
import { setPageName } from '../../src/redux/userData/action'

import { Form } from 'react-bootstrap'

import AssignmentLetter from '../../src/components/AssignmentLetter'

function Index() {
   const [darkMode,setDarkMode] = useState(false)
    useEffect(() =>{
    
    
    if( localStorage.getItem('darkMode') == 'true' ||
      localStorage.getItem('darkMode') == true){
      // console.log("this")
     setDarkMode(true)
    }else{
      // console.log("this2")
       setDarkMode(false)
    }
 
    },[])

   
    return (
        <div className={`${styles.dashboardTab} tabHeader w-100`}>
            <div className={`${styles.tabHeader} tabHeader `}>
              <div className="d-flex align-items-center">
                <h1 className={`${styles.title} heading`}><img src={`${darkMode?`/static/white-arrow.svg`:`/static/arrow-right.svg`}`} alt="arrow right" className="img-fluid image_arrow" />Name</h1>
                <div className={"ml-auto d-flex"}>
                   <div className="ml-auto  mr-2">
                   <div className={`${styles.lastModified} text `}><span>Last Modified:</span> 28 Jan,11:34am</div>
                 
                </div>
                    {/* <div className="ml-auto">
                  <button type="button" className={`${styles.btnPrimary} btn btn-primary`}><img src="/static/refresh.svg" alt="refresh" className="img-fluid" />Update Info</button>
                  <div className={`${styles.lastModified} text `}><span>Last Modified:</span> 28 Jan,11:34am</div>
                </div> */}
               
                </div>
              </div>
              <ul className={`${styles.navTabs} nav nav-tabs`}>
                 
                 
                 
              </ul>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12  accordion_body">
                        <div className={`${styles.tabContent} tab-content`}>
                              <SalesAgreement/>
                             
                            
                       
                        
                </div>
              </div>
            </div>
            </div>
    </div>
    )
    
}
export default Index