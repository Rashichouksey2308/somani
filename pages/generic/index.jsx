/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import styles from './index.module.scss'
import SalesAgreement from '../../src/components/SalesAgreement'
import Cookies from 'js-cookie'
import API from '../../src/utils/endpoints'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName,setDynamicName } from '../../src/redux/userData/action'



function Index(props) {
  console.log("🚀 ~ file: index.jsx ~ line 9 ~ Index ~ props", props)
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


  return (
    <div className={`${styles.dashboardTab} w-100`}>
      <div className={`${styles.tabHeader} tabHeader `}>
        <div className="d-flex align-items-center">
          <h1 className={`${styles.title} heading`}><img src={`${darkMode ? `/static/white-arrow.svg` : `/static/arrow-right.svg`}`} alt="arrow right" className="img-fluid image_arrow" />Name</h1>
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
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-12  accordion_body">
            <div className={`${styles.tabContent} tab-content`}>
              <SalesAgreement genericData={props} />




            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export async function getServerSideProps(context) {
  try {
    console.log("inside123", context.req.cookies['SOMANI']);
    let cookie = context.req.cookies['SOMANI']
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
    console.log("inside fetch2222");
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }

    var result = await fetch(`${API.corebaseUrl}/api/core/generic`, {
      method: "GET",
      headers: headers,
      // body: urlencoded,
      redirect: "follow",
    }).then((response) => response.json());



    console.log(result, "thi sis result123")



    if (result.code === 200) {
      return {
        props: {
          pageProps: result.data,


        },
      };
    } else {

      return {
        props: { pageProps: result.data },
      };
    }
  } catch (error) {
    console.log(error)
    return {}
  }
}
export default Index