/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import styles from './index.module.scss'
import SalesAgreement from '../../src/components/SalesAgreement'
import Cookies from 'js-cookie'
import API from '../../src/utils/endpoints'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName,setDynamicName } from '../../src/redux/userData/action'
import Router from 'next/router';



function Index(props) {
  const [genericData,setGenericData]=useState()
  const dispatch = useDispatch()
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {


    if (localStorage.getItem('darkMode') == 'true' ||
      localStorage.getItem('darkMode') == true) {
      // console.log("this")
      setDarkMode(true)
    } else {
      // console.log("this2")
      setDarkMode(false)
    }

  }, [])
  useEffect(() => {
    dispatch(setPageName('generic'))
    dispatch(setDynamicName(sessionStorage.getItem('genericID')))
    
  })
  useEffect(() => {
    if(window){
      setGenericData(JSON.parse(sessionStorage.getItem("genericSelected")))
    }
  },[])
  console.log(genericData,"genericData")


  return (
    <div className={`${styles.dashboardTab} w-100`}>
      <div className={`${styles.tabHeader} tabHeader d-flex align-items-center`}>
        <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className={`${styles.arrow} img-fluid mr-2 image_arrow`}
        onClick={()=>{Router.push('/generic/generic-list')}}
        />
        <h1 className={`${styles.title} heading`}>{genericData?.company?.companyName}</h1>
        <div className={"ml-auto d-flex"}>
          <div className="ml-auto  mr-2">
            <div className={`${styles.lastModified} text `}><span>Last Modified:</span> 28 Jan,11:34am</div>

          </div>
          
        </div>
        <ul className={`${styles.navTabs} border-0 nav nav-tabs`}>



        </ul>
      </div>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-12  accordion_body">
            <div className={`${styles.tabContent} tab-content`}>
              <SalesAgreement genericData={genericData} />




            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Index