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

//api
import Axios from 'axios'
import API from '../../src/utils/endpoints'
import { toast } from 'react-toastify'

function Index() {
  const [isShipmentTypeBULK, setIsShipmentTypeBulk] = useState(false)
  const [darkMode, setDarkMode] = useState(false)


  const dispatch = useDispatch()
  const { TransitDetails } = useSelector((state) => state.TransitDetails)
  const vesselData = _get(TransitDetails, "data[0].order.vessel", {})
  console.log(TransitDetails, 'TransitDetails')
  const commodity = _get(TransitDetails, "data[0].order.commodity", '').trim().toLowerCase()

  let objID = sessionStorage.getItem('ObjId')
  let transID = sessionStorage.getItem('transId')
  useEffect(() => {
    let Value = vesselData.partShipmentAllowed
    setIsShipmentTypeBulk(Value)
  }, [vesselData])

  useEffect(() => {
    dispatch(GetTransitDetails(`?transitId=${transID}`))
  }, [dispatch])



  const docUploadFunction = (e) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.post(`${API.corebaseUrl}${API.getVessel}`, payload, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          return response.data.data
        } else {
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        }
      })
    } catch (error) {
      let toastMessage = 'COULD NOT UPLOAD DOCUMENT DATA AT THIS TIME'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    }
  }

  return (
    <>
      <div className={`${styles.dashboardTab} bg-transparent w-100`}>
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
            {commodity === 'iron' && <li className={`${styles.navItem} nav-item`}>
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
            </li>}
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
                    <BillLanding orderid={objID} docUploadFunction={docUploadFunction} TransitDetails={TransitDetails} isShipmentTypeBULK={isShipmentTypeBULK} />
                  </div>
                </div>
                <div className="tab-pane fade" id="loi" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <LetterIndermity TransitDetails={TransitDetails} />
                  </div>
                </div>
                {commodity === 'iron' && <div className="tab-pane fade" id="cims" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <CIMS orderid={objID} docUploadFunction={docUploadFunction} TransitDetails={TransitDetails} isShipmentTypeBULK={isShipmentTypeBULK} />
                  </div>
                </div>}
                <div className="tab-pane fade" id="igm" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <IGM docUploadFunction={docUploadFunction} TransitDetails={TransitDetails} isShipmentTypeBULK={isShipmentTypeBULK} orderId={objID} />
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
