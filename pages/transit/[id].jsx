/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './transit.module.scss'
import BillLanding from '../../src/components/BillLading'
import CIMS from '../../src/components/CIMS'
import IGM from '../../src/components/IGM'
import _get from "lodash/get";
import { UpdateTransitDetails, GetTransitDetails } from '../../src/redux/TransitDetails/action'
import { useDispatch, useSelector } from 'react-redux'

import LetterIndermity from '../../src/components/LetterIndermity'

function Index() {
  const [isShipmentTypeBULK, setIsShipmentTypeBulk] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  const dispatch = useDispatch()
  const { TransitDetails } = useSelector((state) => state.TransitDetails)
  // console.log(TransitDetails,'TransitDetails')

  let objID = sessionStorage.getItem('ObjId')
  let transID = sessionStorage.getItem('transId')

  useEffect(() => {
    dispatch(GetTransitDetails(`?transitId=${transID}`))
  }, [dispatch])

  const updateTransitHandler = () => {
    dispatch(UpdateTransitDetails())
  }

  return (
    <>
      <div className={`${styles.dashboardTab} tabHeader w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className="d-flex align-items-center">
            <h1 className={`${styles.title} heading`}>
              <img
                src={`${darkMode
                  ? `/static/white-arrow.svg`
                  : `/static/arrow-right.svg`
                  }`}
                alt="arrow right"
                className="img-fluid image_arrow"
              />
              <span>{_get(TransitDetails, "data[0].company.companyName", 'Company Name')}</span>
            </h1>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link active`}
                data-toggle="tab"
                href="#billLanding"
                role="tab"
                aria-controls="billLanding"
                aria-selected="true"
              >
                Bill of Lading
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#loi"
                role="tab"
                aria-controls="loi"
                aria-selected="false"
              >
                LOI
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#cims"
                role="tab"
                aria-controls="cims"
                aria-selected="false"
              >
                CIMS
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#igm"
                role="tab"
                aria-controls="igm"
                aria-selected="false"
              >
                IGM
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
                  id="billLanding"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <BillLanding TransitDetails={TransitDetails} isShipmentTypeBULK={isShipmentTypeBULK} />
                  </div>
                </div>
                <div className="tab-pane fade" id="loi" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <LetterIndermity />
                  </div>
                </div>
                <div className="tab-pane fade" id="cims" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <CIMS />
                  </div>
                </div>
                <div className="tab-pane fade" id="igm" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <IGM orderId={objID} />
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
