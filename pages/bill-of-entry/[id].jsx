/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './billofentry.module.scss'
import BillOfEntry from '../../src/components/BillOfEntry'
import DischargeCargo from '../../src/components/BillOfEntry/DischargeCargo'
import Warehouse from '../../src/components/BillOfEntry/Warehouse'
import { useDispatch } from 'react-redux'
import {
  GetAllCustomClearance,
  UploadCustomDoc,
} from '../../src/redux/CustomClearance&Warehousing/action'
import { useSelector } from 'react-redux'
import _get from 'lodash/get'
import API from '../../src/utils/endpoints'
import toast from 'react-toastify'
import Cookies from 'js-cookie'
import Axios from 'axios'

function Index() {
  const dispatch = useDispatch()

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    let id = sessionStorage.getItem('customId')
    dispatch(GetAllCustomClearance(`?customClearanceId=${id}`))
  }, [dispatch])

  const { allCustomClearance } = useSelector((state) => state.Custom)

  let customData = _get(allCustomClearance, 'data[0]', {})
  let OrderId = _get(customData, 'order._id', {})

  const uploadDoc = async (e) => {
    console.log(e, 'response data')
    let fd = new FormData()
    fd.append('document', e.target.files[0])
    // dispatch(UploadCustomDoc(fd))

    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      let response = await Axios.post(
        `${API.corebaseUrl}${API.customClearanceDoc}`,
        fd,
        {
          headers: headers,
        },
      )
      console.log(response.data.data, 'response data123')
      if (response.data.code === 200) {
        // dispatch(getCustomClearanceSuccess(response.data.data))

        return response.data.data
        // let toastMessage = 'DOCUMENT UPDATED'
        // if (!toast.isActive(toastMessage)) {
        //   toast.error(toastMessage, { toastId: toastMessage })
        // }
      } else {
        // dispatch(getCustomClearanceFailed(response.data.data))
        // let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        // if (!toast.isActive(toastMessage)) {
        //   toast.error(toastMessage, { toastId: toastMessage })
        // }
      }
    } catch (error) {
      // dispatch(getCustomClearanceFailed())
      // let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
      // if (!toast.isActive(toastMessage)) {
      //   toast.error(toastMessage, { toastId: toastMessage })
      // }
    }
  }

  return (
    <>
      <div className={`${styles.dashboardTab}  w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className="d-flex align-items-center ml-4">
            <h1 className={`${styles.title} heading`}>
              <img
                src={`${
                  darkMode
                    ? `/static/white-arrow.svg`
                    : `/static/arrow-right.svg`
                }`}
                alt="arrow right"
                className="img-fluid image_arrow"
              />
              <span>{customData?.company?.companyName} - Ramal001-00002</span>
            </h1>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link active`}
                data-toggle="tab"
                href="#billEntry"
                role="tab"
                aria-controls="billEntry"
                aria-selected="true"
              >
                Bill of Entry
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#dischargeCargo"
                role="tab"
                aria-controls="dischargeCargo"
                aria-selected="false"
              >
                Discharge of Cargo
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#warehouse"
                role="tab"
                aria-controls="warehouse"
                aria-selected="false"
              >
                Warehouse Details
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
                  id="billEntry"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <BillOfEntry
                      uploadDoc={uploadDoc}
                      OrderId={OrderId}
                      customData={customData}
                    />
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="dischargeCargo"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <DischargeCargo OrderId={OrderId} customData={customData} />
                  </div>
                </div>

                <div className="tab-pane fade" id="warehouse" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <Warehouse OrderId={OrderId} customData={customData} />
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
