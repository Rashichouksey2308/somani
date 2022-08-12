import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import UploadOther from '../UploadOther'
import DateCalender from '../DateCalender'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateDelivery } from '../../redux/release&DeliveryOrder/action'
import _get from 'lodash/get'
import { toast } from 'react-toastify'

export default function Index({ ReleaseOrderData }) {
  const dispatch = useDispatch()
  console.log(ReleaseOrderData, 'ReleaseOrderData123')
  let orderid = _get(ReleaseOrderData, 'data[0].order._id', '')
  let InvoiceQuantity = _get(
    ReleaseOrderData,
    'data[0].order.customClearance.billOfEntry.billOfEntry[0].boeDetails.invoiceQuantity',
    0,
  )
  const [editInput, setEditInput] = useState(true)
  const [netBalanceQuantity, setNetBalanceQuantity] = useState(InvoiceQuantity)
  const [releaseDetail, setReleaseDetail] = useState([
    {
      orderNumber: 1,
      releaseOrderDate: undefined,
      netQuantityReleased: 0,
      unitOfMeasure: '',
      document: null,
    },
  ])
  console.log(releaseDetail, netBalanceQuantity, 'Release')

  // useEffect(() => {
  //   let realseOrderState = _get(ReleaseOrderData, 'data[0].releaseDetail', [])
  //   console.log(realseOrderState, 'realseOrderStateprev')
  //   if (realseOrderState.length > 0) {
  //     setReleaseDetail((prevState) => [...realseOrderState]
  //     )
  //   }
  // }, [ReleaseOrderData])
  console.log(releaseDetail, 'realseOrderStatecurre')

  const handlereleaseDetailChange = (name, value, index) => {
    //console.log(name, value, index, "name,value,index")
    let tempArr = releaseDetail
    tempArr.forEach((val, i) => {
      if (i == index) {
        val[name] = value
      }
    })
    // console.log(tempArr,"tempArr")
    setReleaseDetail([...tempArr])
  }

  // const setActions = (index, val) => {
  //   setReleaseDetail((prevState) => {
  //     const newState = prevState.map((obj, i) => {
  //       if (i == index) {
  //         return { ...obj, actions: val }
  //       }
  //       return obj
  //     })
  //     return newState
  //   })
  //   let newInput = { ...billOfEntryData }
  //   newInput.releaseDetail = releaseDetailData
  //   setBillOfEntryData(newInput)
  // }

  const handleDeleteRow = (index) => {
    // console.log(index, 'temparr')
    let tempArr = [...releaseDetail]
    tempArr.splice(index, 1)
    setReleaseDetail(tempArr)
  }

  // console.log(releaseDetail, 'temparr')

  const addMorereleaseDetailDataRows = (index) => {
    setReleaseDetail([
      ...releaseDetail,
      {
        orderNumber: index + 2,
        releaseOrderDate: undefined,
        netQuantityReleased: 0,
        unitOfMeasure: '',
        document: null,
      },
    ])
  }
  const saveDate = (value, name, index) => {
    // console.log(value, name, 'save date')
    const d = new Date(value)
    let text = d.toISOString()
    handlereleaseDetailChange(name, text, index)
  }

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false)
    } else {
      setEditInput(true)
    }
  }
  const netQuantityChange = (e, index) => {
    // console.log(netBalanceQuantity, e.target.value, "herere12e")
    if (netBalanceQuantity <= e.target.value) {
      // let temp = Number(e.target.value)
      // if (e.target.value == "") {
      //   temp = 0
      // }

      const toastMessage =
        'Net Quantity Realesed cannot be Greater than net bALance Quantity'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    } else {
    }
    handlereleaseDetailChange(e.target.id, e.target.value, index)
    // getData()
  }
  console.log(netBalanceQuantity, 'val2')
  const getData = () => {
    let value = InvoiceQuantity
    releaseDetail.forEach((item) => {
      value = value - item.netQuantityReleased
    })
    // console.log(value, "val")
    setNetBalanceQuantity(value)
  }
  // console.log(releaseDetail, "val123")
  useEffect(() => {
    getData()
  }, [releaseDetail])

  const orderNo = (index) => {
    let orderNo = index + 1
    return orderNo
  }

  const onSaveHAndler = () => {
    let payload = {
      deliveryId: _get(ReleaseOrderData, 'data[0]._id', ''),
      releaseDetail: [...releaseDetail],
    }
    // console.log(payload)
    dispatch(UpdateDelivery(payload))
  }
  // console.log(netBalanceQuantity, 'netBalanceQuantity')

  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} mt-3 border_color`}>
          <div className={`${styles.main} vessel_card mt-4 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
              data-toggle="collapse"
              data-target="#lcApplication"
              aria-expanded="true"
              aria-controls="lcApplication"
            >
              <h3 className={`${styles.heading}`}>Release Order</h3>

              <span>+</span>
            </div>
            <div
              id="lcApplication"
              className="collapse"
              aria-labelledby="lcApplication"
              data-parent="#lcApplication"
            >
              <div className={`${styles.dashboard_form} card-body`}>
                <div className="row">
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>Commodity</div>
                    <span className={styles.value}>
                      {_get(ReleaseOrderData, 'data[0].order.commodity', '')}
                    </span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Invoice Quantity
                    </div>
                    <span className={styles.value}>
                      {_get(
                        ReleaseOrderData,
                        'data[0].order.customClearance.billOfEntry.billOfEntry[0].boeDetails.invoiceQuantity',
                        '',
                      )}
                      Mt
                    </span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>Bank Name</div>
                    <span className={styles.value}>
                      {_get(
                        ReleaseOrderData,
                        'data[0].order.lc.lcApplication.lcIssuingBank',
                        '',
                      )}
                    </span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Documentary Credit No.{' '}
                    </div>
                    <span className={styles.value}>
                      {_get(
                        ReleaseOrderData,
                        'data[0].order.lc.lcApplication.documentaryCreditNumber',
                        '',
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.dashboard_form} card-body`}
                style={{ borderTop: '2px solid #CAD6E6' }}
              >
                <div className={`${styles.form_heading} mt-2`}>
                  Release Order Details
                </div>

                {releaseDetail.map((item, index) => (
                  <div key={index} className="row ml-auto">
                    <div
                      className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                    >
                      <div className={`${styles.label} text`}>
                        Release Order No.{' '}
                        <strong className="text-danger ml-n1">*</strong>
                      </div>
                      <span className={`${styles.value}`}>
                        {orderNo(index)}
                      </span>
                    </div>
                    <div
                      className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <DateCalender
                          defaultDate={item.releaseOrderDate}
                          index={index}
                          saveDate={saveDate}
                          name="releaseOrderDate"
                          labelName="Release Order Date"
                        />
                        <img
                          className={`${styles.calanderIcon} image_arrow img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                    <div
                      className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                    >
                      <input
                        defaultValue={item.netQuantityReleased}
                        onChange={(e) => netQuantityChange(e, index)}
                        id="netQuantityReleased"
                        className={`${styles.input_field} input form-control`}
                        type="number"
                      />
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Net Quantity Released
                        <strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div
                      className="col-lg-3 col-md-4 col-sm-6 text-center"
                      style={{ top: '50px' }}
                    >
                      <div className={styles.uploadBtnWrapper}>
                        <input
                          id="netQuantityReleased"
                          type="file"
                          name="myfile"
                        />
                        <button className={`${styles.upload_btn} btn`}>
                          Upload
                        </button>
                      </div>
                      {releaseDetail.length > 1 && (
                        <img
                          onClick={() => handleDeleteRow(index)}
                          src="/static/delete 2.svg"
                          className={`${styles.delete_image} ml-1 mt-n4 img-fluid mr-2`}
                          alt="Delete"
                        />
                      )}
                      {Number(netBalanceQuantity) > 0 && (
                        <img
                          onClick={() => addMorereleaseDetailDataRows(index)}
                          src="/static/add-btn.svg"
                          className={`${styles.delete_image} mt-n4 img-fluid`}
                          alt="Add button"
                        />
                      )}
                    </div>
                  </div>
                ))}
                <hr></hr>
                <div className="text-right">
                  <div className={`${styles.total_quantity} text `}>
                    Net Balance Quantity:{' '}
                    <span className="form-check-label ml-2">
                      {Number(netBalanceQuantity) > 0 ? netBalanceQuantity : 0}{' '}
                      MT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <UploadOther orderid={orderid} module="Loading-Transit-Unloading" />
          </div>
        </div>

        <SaveBar handleSave={onSaveHAndler} rightBtn="Submit" />
      </div>
    </>
  )
}
