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
import Cookies from 'js-cookie'

//api
import Axios from 'axios'
import API from '../../src/utils/endpoints'
import { toast } from 'react-toastify'

function Index() {
  const [isShipmentTypeBULK, setIsShipmentTypeBulk] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [TransitDetails, setTransitDetails] = useState({})
  console.log(TransitDetails, 'TransitDetails')


  const dispatch = useDispatch()
  //const { TransitDetails1 } = useSelector((state) => state.TransitDetails)
  const vesselData = _get(TransitDetails, "data[0].order.vessel", {})
  console.log(TransitDetails, 'TransitDetails')
  const commodity = _get(TransitDetails, "data[0].order.commodity", '').trim().toLowerCase()

  let objID = sessionStorage.getItem('ObjId')
  let transID = sessionStorage.getItem('transId')

  // useEffect(() => {
  //   let Value = vesselData.partShipmentAllowed
  //   setIsShipmentTypeBulk(Value)
  // }, [vesselData])

  // useEffect(() => {
  //   dispatch(GetTransitDetails(`?transitId=${transID}`))
  // }, [dispatch])

  useEffect( () => {
    if (transID) {
       fetchInitialData()
    }
    console.log(transID,'dsfgk,dhgf')


  }, [transID])


  const fetchInitialData = async () => {
    const data = await dispatch(GetTransitDetails(`?transitId=${transID}`))
    setTransitDetails(data)
  }


  const uploadDoc = async (e) => {
    console.log(e, "response data")
    let fd = new FormData()
    fd.append('document', e.target.files[0])
    // dispatch(UploadCustomDoc(fd))

    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      let response = await Axios.post(`${API.corebaseUrl}${API.customClearanceDoc}`, fd, {
        headers: headers,
      })
      console.log(response.data.data, 'response data123')
      if (response.data.code === 200) {
        // dispatch(getCustomClearanceSuccess(response.data.data))

        return response.data.data;
        // let toastMessage = 'DOCUMENT UPDATED'
        // if (!toast.isActive(toastMessage.toUpperCase())) {
        //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) // }
      } else {
        // dispatch(getCustomClearanceFailed(response.data.data))
        // let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        // if (!toast.isActive(toastMessage.toUpperCase())) {
        //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) // }
      }
    } catch (error) {
      // dispatch(getCustomClearanceFailed())

      // let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
      // if (!toast.isActive(toastMessage.toUpperCase())) {
      //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      // }
    }
  }

  return (
    <>
      <div className={`${styles.dashboardTab} bg-transparent w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className={`${styles.tab_header_inner} d-flex align-items-center`}>
            <img
              className={`${styles.arrow} mr-2 image_arrow img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={`${styles.title} heading`}>
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
            {commodity?.toLowerCase() === 'coal' && <li className={`${styles.navItem} nav-item`}>
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
            <div className="col-md-12 p-0 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div
                  className="tab-pane show active fade"
                  id="billLanding"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <BillLanding orderid={objID} docUploadFunction={uploadDoc} TransitDetails={TransitDetails} isShipmentTypeBULK={isShipmentTypeBULK} />
                  </div>
                </div>
                <div className="tab-pane fade" id="loi" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <LetterIndermity TransitDetails={TransitDetails} />
                  </div>
                </div>
                {commodity.toLowerCase() === 'coal' && <div className="tab-pane fade" id="cims" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <CIMS orderid={objID} docUploadFunction={uploadDoc} TransitDetails={TransitDetails} isShipmentTypeBULK={isShipmentTypeBULK} />
                  </div>
                </div>}
                <div className="tab-pane fade" id="igm" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <IGM docUploadFunction={uploadDoc} TransitDetails={TransitDetails} isShipmentTypeBULK={isShipmentTypeBULK} orderId={objID} />
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
