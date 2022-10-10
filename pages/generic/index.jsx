/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import styles from './index.module.scss'
import SalesAgreement from '../../src/components/SalesAgreement'
import Cookies from 'js-cookie'
import API from '../../src/utils/endpoints'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName,setDynamicName ,setDynamicOrder} from '../../src/redux/userData/action'
import Router from 'next/router';
import {GetCompanyDetails} from '../../src/redux/companyDetail/action'
import {

  GetAllOrders,
  
} from '../../src/redux/registerBuyer/action'



function Index(props) {
  const [genericData,setGenericData]=useState()
  const dispatch = useDispatch()
  const [darkMode, setDarkMode] = useState(false)
  const [lastModified,setlastModified]=useState("")

  useEffect(() => {
   if(window){
    dispatch(setPageName('generic'))
    dispatch(setDynamicOrder(sessionStorage.getItem('genericID')))
    let data=JSON.parse(sessionStorage.getItem("genericSelected"))
     
    dispatch(setDynamicName(data?.company?.companyName))
    dispatch(GetCompanyDetails( {company : data?.company._id}))
    dispatch(GetAllOrders({ orderId: data?.order?._id }))
   }

    
  },[])
  useEffect(() => {
    if(window){
      setGenericData(JSON.parse(sessionStorage.getItem("genericSelected")))
    }
  },[])
  console.log(genericData,"genericData")

 const setDate=(date)=>{

  setlastModified(date)
 }
  return (
    <div className={`${styles.dashboardTab} w-100`}>
      <div className={`${styles.tabHeader} tabHeader d-flex align-items-center`}>
        <div className={`${styles.tabHeaderInner} d-flex align-items-center`}>
          <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className={`${styles.arrow} img-fluid mr-2 image_arrow`}
          onClick={()=>{Router.push('/generic/generic-list')}}
          style={{cursor:'pointer'}}
          />
          <h1 className={`${styles.title} heading`}>{genericData?.company?.companyName}</h1>
        </div>
        <div className={"ml-auto d-flex"}>
          <div className="ml-auto  mr-2">
            <div className={`${styles.lastModified} text `}><span className='accordion_Text'>Last Modified:</span> {lastModified}</div>

          </div>
          
        </div>
        <ul className={`${styles.navTabs} border-0 nav nav-tabs`}>



        </ul>
      </div>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-12  accordion_body">
            <div className={`${styles.tabContent} tab-content`}>
              <SalesAgreement genericData={genericData} setDate={setDate} />




            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Index