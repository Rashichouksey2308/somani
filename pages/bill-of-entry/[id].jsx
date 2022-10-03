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
import Router from 'next/router'
import Cookies from 'js-cookie'
import Axios from 'axios'
import { setPageName, setDynamicName } from '../../src/redux/userData/action'
import { getBreadcrumbValues } from '../../src/redux/breadcrumb/action'

function Index() {
  const dispatch = useDispatch()
  const [componentId, setComponentId] = useState(1)

  const [darkMode, setDarkMode] = useState(false)
  const [arrivalDate, setArrivalDate] = useState(null)

  useEffect(() => {
    let id = sessionStorage.getItem('customId')
    dispatch(GetAllCustomClearance(`?customClearanceId=${id}`))
  }, [dispatch])
  useEffect(() => {
    dispatch(setPageName('custom'))
    dispatch(setDynamicName(customData?.company?.companyName))
  }, [customData])
  const { allCustomClearance } = useSelector((state) => state.Custom)

  let customData = _get(allCustomClearance, 'data[0]', {})
  let OrderId = _get(customData, 'order._id', {})
  let CompanyOrderId = _get(customData, 'order', {})
  const uploadDoc = async (e) => {
    console.log(e, 'response data')
    let fd = new FormData()
    fd.append('document', e.target.files[0])
    // dispatch(UploadCustomDoc(fd))
    console.log(customData, 'customData')

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
      console.log(response.data.data, 'dischargeOfCargo2')
      if (response.data.code === 200) {
        // dispatch(getCustomClearanceSuccess(response.data.data))

        return response.data.data
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

  useEffect(() => {
    dispatch(
      getBreadcrumbValues({
        companyName: customData?.company?.companyName,
        companyId: customData?.order?.orderId,
        orderTabs: 'Bill of Entry',
      }),
    )
  }, [customData])

  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div
            className={`${styles.tab_header_inner} d-flex align-items-center`}
          >
            <img
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow right"
              className="img-fluid mr-2 image_arrow"
              onClick={() => Router.push('/bill-of-entry')}
              style={{cursor:'pointer'}}
            />
            <h3 className={`${styles.title} heading`}>
              <span
                // className={`${styles.title} heading`}
                // style={{ textTransform: 'capitalize' }}
              >
                {customData?.company?.companyName} - {CompanyOrderId?.orderId}
              </span>
            </h3>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link ${
                  componentId === 1 && 'active'
                }`}
                // data-toggle="tab"
                // href="#billEntry"
                // role="tab"
                // aria-controls="billEntry"
                // aria-selected="true"
                role="button"
                onClick={() => {
                  setComponentId(1)
                  dispatch(
                    getBreadcrumbValues({
                      upperTabs: 'Bill of Entry',
                    }),
                  )
                }}
              >
                Bill of Entry
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link ${
                  componentId === 2 && 'active'
                } `}
                role="button"
                // data-toggle="tab"
                // id="#dischargeCargo"
                // role="tab"
                // aria-controls="dischargeCargo"
                // aria-selected="false"
                onClick={() => {
                  setComponentId(2)
                  dispatch(
                    getBreadcrumbValues({
                      upperTabs: 'Discharge of Cargo',
                    }),
                  )
                }}
              >
                Discharge of Cargo
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link ${
                  componentId === 3 && 'active'
                }`}
                role="button"
                // data-toggle="tab"
                // href="#warehouse"
                // role="tab"
                // aria-controls="warehouse"
                // aria-selected="false"
                onClick={() => {
                  setComponentId(3)
                  dispatch(
                    getBreadcrumbValues({
                      upperTabs: 'Warehouse Details',
                    }),
                  )
                }}
              >
                Warehouse Details
              </a>
            </li>
          </ul>
        </div>

        <div className="container-fluid p-0">
          <div className={`${styles.mainCard}`}>
            <div className="row">
              <div className="col-md-12 p-0 accordion_body">
                <div className={`${styles.tabContent} `}>
                  {/* <div className="fade" id="billEntry" role="tabpanel"> */}
                  <div className={`${styles.card}  accordion_body`}>
                    {componentId === 1 && (
                      <BillOfEntry
                        uploadDoc={uploadDoc}
                        OrderId={OrderId}
                        customData={customData}
                        componentId={componentId}
                        setComponentId={setComponentId}
                      />
                    )}
                  </div>
                  {/* </div> */}

                  {/* <div
                    className="tab-pane fade"
                    id="dischargeCargo"
                    role="tabpanel"
                  > */}
                  <div className={`${styles.card}  accordion_body`}>
                    {componentId === 2 && (
                      <DischargeCargo
                        setArrivalDate={setArrivalDate}
                        uploadDoc={uploadDoc}
                        OrderId={OrderId}
                        customData={customData}
                        componentId={componentId}
                        setComponentId={setComponentId}
                      />
                    )}
                  </div>
                  {/* </div> */}

                  {/* <div className="tab-pane fade" id="warehouse" role="tabpanel"> */}
                  <div className={`${styles.card}  accordion_body`}>
                    {componentId === 3 && (
                      <Warehouse
                        arrivalDate={arrivalDate}
                        uploadDoc={uploadDoc}
                        OrderId={OrderId}
                        customData={customData}
                      />
                    )}
                  </div>
                  {/* </div> */}
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
