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
  console.log(ReleaseOrderData, 'ReleaseOrderData')
  let orderid = _get(ReleaseOrderData, 'data[0].order._id', '')
  let InvoiceQuantity = 20000
  const [editInput, setEditInput] = useState(true)
  const [netBalanceQuantity, setNetBalanceQuantity] = useState(0)
  const [releaseDetail, setReleaseDetail] = useState([{
    orderNumber: 1,
    releaseOrderDate: null,
    netQuantityReleased: '',
    unitOfMeasure: '',
    document: null,
  }])

  useEffect(() => {
    let value = InvoiceQuantity
    releaseDetail.forEach((item) => {
      value = value - item.netQuantityReleased
    })
    setNetBalanceQuantity(value)
  }, [releaseDetail])

  const handlereleaseDetailChange = (name, value, index) => {
    // console.log(name,value,index,"name,value")
    let tempArr = releaseDetail
    tempArr.forEach((val, i) => {
      if (i == index) {
        val[name] = value
      }
    })
    // console.log(tempArr,"tempArr")
    setReleaseDetail(tempArr)
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
    setReleaseDetail([...releaseDetail.slice(0, index), ...releaseDetail.slice(index + 1)])
  }

  const addMorereleaseDetailDataRows = () => {
    setReleaseDetail([
      ...releaseDetail,
      {
        orderNumber: '',
        releaseOrderDate: null,
        netQuantityReleased: '',
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
    if (netBalanceQuantity >= e.target.value) {
      handlereleaseDetailChange(e.target.id, e.target.value, index)
    } else {
      let toastMessage = 'The Amount Cannot BE Greater Than net Balance Quantity  '
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    }

  }

  const onSaveHAndler = () => {
    let payload = {
      deliveryId: '',
      releaseDetail: releaseDetail
    }
    dispatch(UpdateDelivery(payload))
  }

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
                    <span className={styles.value}>{_get(ReleaseOrderData, 'data[0].order.commodity', '')}</span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Invoice Quantity
                    </div>
                    <span className={styles.value}>500 Mt</span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>Bank Name</div>
                    <span className={styles.value}>Bank of Spain</span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Documentary Credit No.{' '}
                    </div>
                    <span className={styles.value}>23245</span>
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
                      <span className={`${styles.value}`}>{index + 1}</span>
                    </div>
                    <div
                      className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <DateCalender saveDate={saveDate} labelName="Release Order Date" />
                        <img
                          className={`${styles.calanderIcon} img-fluid`}
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
                        id='netQuantityReleased'
                        className={`${styles.input_field} input form-control`}
                        type="number"
                      />
                      <label className={`${styles.label_heading} label_heading`}>
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
                          id='netQuantityReleased'
                          type="file"
                          name="myfile"
                        />
                        <button className={`${styles.upload_btn} btn`}>
                          Upload
                        </button>
                      </div>
                      <img onClick={(index) => handleDeleteRow(index)}
                        src="/static/delete 2.svg"
                        className={`${styles.delete_image} ml-1 mt-n4 img-fluid mr-2`}
                        alt="Delete"
                      />
                      <img
                        onClick={(index) => addMorereleaseDetailDataRows(index)}
                        src="/static/add-btn.svg"
                        className={`${styles.delete_image} mt-n4 img-fluid`}
                        alt="Add button"
                      />
                    </div>
                  </div>
                ))}
                <hr></hr>
                <div className="text-right">
                  <div className={`${styles.total_quantity} text `}>
                    Net Balance Quantity:{' '}
                    <span className="form-check-label ml-2">{netBalanceQuantity} MT</span>
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
