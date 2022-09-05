/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import ThirdPartyInspection from '../../src/components/ThirdPartyInspection'
import PlotInspection from '../../src/components/PlotInspection'
import Appointment from '../../src/components/Appointment'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName, setDynamicName,setDynamicOrder } from '../../src/redux/userData/action'
import _get from 'lodash/get'
import { GetAllInspection } from '../../src/redux/Inspections/action'
import Router from 'next/router'

function Index() {

  const dispatch = useDispatch()

  const [darkMode, setDarkMode] = useState(false)

 
 

  useEffect(()=> {
    let id = sessionStorage.getItem('inspectionId')
    dispatch(GetAllInspection(`?inspectionId=${id}`))
  },[dispatch])

  const {allInspection} = useSelector((state)=>state.Inspection)

  let inspectionData = _get(allInspection, 'data[0]', {})
 useEffect(() => {
    dispatch(setPageName('inception2'))
    dispatch(setDynamicName(_get(inspectionData,"company.companyName")))
    dispatch(setDynamicOrder(_get(inspectionData,"order.orderId")))
  },[inspectionData])
  // console.log(inspectionData, 'THIS IS INSPECTION DATA')

  const [addTPI, setAddTPI] = useState([{}])


  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div  className={`${styles.tab_header_inner} d-flex align-items-center`}>
          <img
              className={`${styles.arrow} mr-2 image_arrow img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
              onClick={() => Router.push('/inspection')}

            />
            <h1 className={`${styles.title} heading`}>
              <span>{_get(inspectionData, 'company.companyName', '')}</span>
            </h1>
            <div className="ml-auto">
              <div className={`${styles.lastModified} text `}>
                <span>Last Modified:</span> 28 Jan,11:34am
              </div>
            </div>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link active`}
                data-toggle="tab"
                href="#appointment"
                role="tab"
                aria-controls="appointment"
                aria-selected="true"
              >
                Appointment
              </a>
            </li>
            <li className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link `}
                data-toggle="tab"
                href="#thirdParty"
                role="tab"
                aria-controls="thirdParty"
                aria-selected="false"
              >
                Third-Party Inspection
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
                Plot Inspection
              </a>
            </li>
          </ul>
        </div>

        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div
                  className="tab-pane show active fade"
                  id="appointment"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <Appointment inspectionData={inspectionData} />
                  </div>
                </div>
                {addTPI?.map((e, index) => (
                  <div
                    key={index}
                    className="tab-pane fade"
                    id="thirdParty"
                    role="tabpanel"
                  >
                    <div className={`${styles.card}  accordion_body`}>
                      <ThirdPartyInspection
                       inspectionData={inspectionData} addButton={() => setAddTPI(addTPI + 1)}
                      />
                      {/* <ThirdPartyInspection  /> */}
                    </div>
                  </div>
                ))}
                <div
                  className="tab-pane fade"
                  id="plotInspection"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <PlotInspection inspectionData={inspectionData} />
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
