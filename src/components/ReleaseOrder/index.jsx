import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col, Modal } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import UploadOther from '../UploadOther'
import DateCalender from '../DateCalender'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateDelivery } from '../../redux/release&DeliveryOrder/action'
import _get from 'lodash/get'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import { addPrefixOrSuffix, removePrefixOrSuffix } from 'utils/helper'
import Axios from 'axios'

export default function Index({
  ReleaseOrderData,
  releaseDetail,
  setReleaseDetail,
}) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [orderid, setorderId] = useState('')
  console.log(ReleaseOrderData, 'ReleaseOrderData123')
  // let orderid = _get(ReleaseOrderData, 'data[0].order._id', '')
  useEffect(() => {
    setorderId(_get(ReleaseOrderData, 'data[0].order._id', ''))
  }, [ReleaseOrderData])
  let InvoiceQuantity = _get(
    ReleaseOrderData,
    'data[0].order.customClearance.billOfEntry.billOfEntry[0].boeDetails.invoiceQuantity',
    0,
  )

  const [editInput, setEditInput] = useState(true)
  const [netBalanceQuantity, setNetBalanceQuantity] = useState(InvoiceQuantity)
  const [isFieldInFocus, setIsFieldInFocus] = useState(false)

  console.log(releaseDetail, 'releaseDetail')
  console.log(releaseDetail.length - 1, '111')
  useEffect(() => {
    if (releaseDetail) {
      let index = releaseDetail.length - 1
      setReleaseOrderButtonIndex(index)
    }
  }, [releaseDetail])

  const closeDoc = (index) => {
    let tempArr = [...releaseDetail]
    tempArr[index].document = null
    setReleaseDetail(tempArr)
  }

  const handlereleaseDetailChange = (name, value, index) => {
    console.log(name, value, index, 'name,value,index2')
    let tempArr = [...releaseDetail]
    tempArr.forEach((val, i) => {
      if (i == index) {
        val[name] = value
      }
    })
    // console.log(tempArr,"tempArr")

    setReleaseDetail([...tempArr])
  }
console.log(Number(netBalanceQuantity),"Number(netBalanceQuantity)")
  const uploadDoc = async (e) => {
    console.log(e, 'response data')
    let fd = new FormData()
    fd.append('document', e.target.files[0])
    // dispatch(UploadCustomDoc(fd))

    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }
    try {
      let response = await Axios.post(
        `${API.corebaseUrl}${API.uploadDoc}`,
        fd,
        {
          headers: headers,
        },
      )
      console.log(response.data.data, 'response data123')
      if (response.data.code === 200) {
        // dispatch(getCustomClearanceSuccess(response.data.data))
        console.log(response.data.data, 'name,value,index3')
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

  const handleDeleteRow = (index) => {
    // console.log(index, 'temparr')
    let tempArr = [...releaseDetail]
    tempArr.pop(index)
    setReleaseDetail(tempArr)
  }

  // console.log(releaseDetail, 'temparr')
  const [releaseOrderButtonIndex, setReleaseOrderButtonIndex] = useState(0)
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
    setReleaseOrderButtonIndex(index)
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
  console.log(netBalanceQuantity,"netBalanceQuantity")
  const netQuantityChange = (e, index) => {
 
    if (
      Number(
        _get(
          ReleaseOrderData,
          'data[0].order.customClearance.billOfEntry.billOfEntry[0].boeDetails.invoiceQuantity',
          0,
        ),
      ) < Number(e.target.value)
    ) {
      // let temp = Number(e.target.value)
      // if (e.target.value == "") {
      //   temp = 0
      // }

      const toastMessage =
        'Net Quantity Realesed cannot be Greater than net bALance Quantity'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    }
  
    if (Number(e.target.value) < 0) {
      // let temp = Number(e.target.value)
      // if (e.target.value == "") {
      //   temp = 0
      // }

      const toastMessage = 'Net Quantity Realesed cannot be Negative'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
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

  const uplaodDoc = async (e, index) => {
    // console.log(e.target.id, index, 'UploadDocRealeseORder')
    let name = e.target.id
    let doc = await uploadDoc(e)
    console.log(e.target.id, doc, index, 'UploadDocRealeseORder')
    handlereleaseDetailChange(name, doc, index)
  }

  const handleCloseO = () => {
    setDocuments((doc) => {
      return { ...doc, certificateOfOrigin: null }
    })
  }
  const onSaveHAndler = async () => {
    let payload = {
      deliveryId: _get(ReleaseOrderData, 'data[0]._id', ''),
      releaseDetail: [...releaseDetail],
    }
    let task = 'save'
    // console.log(payload)
       if(netBalanceQuantity==0){
     await dispatch(UpdateDelivery({ payload, task }))
    }else{
      const toastMessage =
        'Net Quantity Realesed cannot be Greater than net bALance Quantity'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
   
   
    
  }

  const validation = () => {
    let isOk = true
    let toastMessage = ''
    for (let i = 0; i <= releaseDetail.length - 1; i++) {
      console.log(i, 'INSIDE FOR LOOP', releaseDetail.length)
      if (
        releaseDetail[i]?.releaseOrderDate == '' ||
        releaseDetail[i]?.releaseOrderDate == null
      ) {
        toastMessage = `please input a date for release order   ${i + 1}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break
        }
      }
      if (
        releaseDetail[i]?.netQuantityReleased == '' ||
        releaseDetail[i]?.netQuantityReleased == null
      ) {
        toastMessage = `please provide a value for net quantity release in release order no ${
          i + 1
        }  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break
        }
      }
    }
    return isOk
    console.log(isOk, 'isOktrue')
  }

  const onSubmitHanler = async () => {
    if (!validation()) return
    let payload = {
      deliveryId: _get(ReleaseOrderData, 'data[0]._id', ''),
      releaseDetail: [...releaseDetail],
    }
    let task = 'submit'

    // console.log(payload)
    if(netBalanceQuantity==0){
      await dispatch(UpdateDelivery({ payload, task }))
    }else{
      const toastMessage =
        'Net Quantity Realesed cannot be Greater than net bALance Quantity'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
   
  }
  // console.log(netBalanceQuantity, 'netBalanceQuantity')

  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} border_color`}>
          <div className={`${styles.main} vessel_card card border_color`}>
            <div
              className={`${styles.head_container} card-header align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
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
              // className="collapse"
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
                      {Number(
                        _get(
                          ReleaseOrderData,
                          'data[0].order.customClearance.billOfEntry.billOfEntry[0].boeDetails.invoiceQuantity',
                          0,
                        ),
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                      })}{' '}
                      {_get(
                        ReleaseOrderData,
                        'data[0].order.unitOfQuantity',
                        '',
                      ).toUpperCase()}
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
                className={`${styles.dashboard_form} border_color card-body`}
                style={{ borderTop: '2px solid #CAD6E6' }}
              >
                <div className={`${styles.form_heading} mt-2`}>
                  Release Order Details
                </div>
                <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
                    {releaseDetail.map((item, index) => (
                      <div key={index} className="row mb-3 ">
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
                            {console.log(
                              'release Details',
                              item.releaseOrderDate,
                            )}
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
                            // onWheel={(e) => e.target.blur()}
                            onFocus={(e) => {
                              setIsFieldInFocus(true),
                                (e.target.type = 'number')
                            }}
                            onBlur={(e) => {
                              setIsFieldInFocus(false), (e.target.type = 'text')
                            }}
                            onWheel={(event) =>
                              event.currentTarget.blur()
                            }
                            type="text"
                            onChange={(e) => {
                              e.target.value
                              // console.log( e.target.value,"333")
                              netQuantityChange(e, index)
                            }}
                            id="netQuantityReleased"
                            value={
                              isFieldInFocus
                                ? item.netQuantityReleased
                                : Number(
                                    item.netQuantityReleased,
                                  )?.toLocaleString('en-IN') +
                                  ` ${_get(
                                    ReleaseOrderData,
                                    'data[0].order.unitOfQuantity',
                                    '',
                                  )}`
                            }
                            className={`${styles.input_field} input form-control`}
                            onKeyDown={(evt) =>
                              ['e', 'E', '+', '-'].includes(evt.key) &&
                              evt.preventDefault()
                            }

                            // onKeyDown={(evt) =>
                            //   evt.key === 'e' && evt.preventDefault()
                            // }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Net Quantity Released
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-3 col-md-4 col-sm-6 d-flex align-items-center`}
                        >
                          {item?.document === null ? (
                            <>
                              <div className="d-flex align-items-center">
                                <div
                                  className={`${styles.uploadBtnWrapper} flex-grow-1`}
                                >
                                  <input
                                    id="document"
                                    name="myfile"
                                    accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                    onChange={(e) => uplaodDoc(e, index)}
                                    type="file"
                                  />
                                  <button
                                    className={`${styles.button_upload} btn`}
                                  >
                                    Upload
                                  </button>
                                </div>

                                {/* <div className={`${styles.certificate} d-flex justify-content-between`}>
                                  <span>
                                    release.pdf
                                  </span>
                                  <img
                                    className={`${styles.close_image}`}
                                    src="/static/close.svg"
                                    onClick={() => handleCloseO()}
                                    alt="Close"
                                  />{' '}
                                </div>   */}
                                {releaseDetail.length > 1 && (
                                  <img
                                    onClick={() => handleDeleteRow(index)}
                                    src="/static/delete 2.svg"
                                    className={`${styles.delete_image} ml-3`}
                                    alt="Delete"
                                  />
                                )}

                                {Number(netBalanceQuantity) > 0 &&
                                  releaseDetail.length - 1 === index && (
                                    <img
                                      onClick={() =>
                                        addMorereleaseDetailDataRows(index)
                                      }
                                      src="/static/add-btn.svg"
                                      className={`${styles.delete_image} ml-3`}
                                      alt="Add button"
                                    />
                                  )}
                              </div>
                              {/* <div className={styles.uploadBtnWrapper}>
                        <input
                          type="file"
                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                          onChange={(e) => uploadDocument1(e)}
                          name="myfile"
                        />
                        <button  className={`${styles.uploadDoc} btn`}>
                          Upload
                        </button>
                        </div> */}
                            </>
                          ) : (
                            <>
                              <div
                                className={`${styles.certificate} text1 m-0 d-flex justify-content-between`}
                              >
                                <span>{item?.document?.originalName}</span>
                                <img
                                  onClick={(e) => closeDoc(index)}
                                  className={`${styles.close_image} image_arrow`}
                                  src="/static/close.svg"
                                  alt="Close"
                                />{' '}
                              </div>

                              <>
                                {releaseDetail.length > 1 && (
                                  <img
                                    onClick={() => handleDeleteRow(index)}
                                    src="/static/delete 2.svg"
                                    className={`${styles.delete_image} ml-3`}
                                    alt="Delete"
                                  />
                                )}

                                {Number(netBalanceQuantity) > 0 &&
                                  releaseDetail.length - 1 === index && (
                                    <img
                                      onClick={() =>
                                        addMorereleaseDetailDataRows(index)
                                      }
                                      src="/static/add-btn.svg"
                                      className={`${styles.delete_image} ml-3`}
                                      alt="Add button"
                                    />
                                  )}
                              </>
                            </>
                          )}
                          {/* {releaseDetail.length > 1 && (
                        <img
                          onClick={() => handleDeleteRow(index)}
                          src="/static/delete 2.svg"
                          className={`${styles.delete_image} ml-1 mt-n4 mr-2`}
                          alt="Delete"
                        />
                      )}
                      {Number(netBalanceQuantity) > 0 && (
                        <img
                          onClick={() => addMorereleaseDetailDataRows(index)}
                          src="/static/add-btn.svg"
                          className={`${styles.delete_image} mt-n4`}
                          alt="Add button"
                        />
                      )} */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <hr></hr>

                <div className="text-right">
                  <div className={`${styles.total_quantity} text `}>
                    Net Balance Quantity:{' '}
                    <span className="form-check-label ml-2">
                      {Number(netBalanceQuantity) > 0
                        ? netBalanceQuantity?.toLocaleString()
                        : 0}{' '}
                      {_get(
                        ReleaseOrderData,
                        'data[0].order.unitOfQuantity',
                        '',
                      ).toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <UploadOther
              orderid={orderid}
              module="PaymentsInvoicing&Delivery"
              isDocumentName={true}
            />
          </div>
        </div>

        <SaveBar
          handleSave={onSaveHAndler}
          rightBtn="Submit"
          rightBtnClick={onSubmitHanler}
        />
      </div>

      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={styles.wrapper}
        backdropClassName={styles.backdrop}
      >
        <Modal.Header className={`${styles.head} background1`}>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className={`${styles.title}  d-flex justify-content-between align-items-center`}
          >
            <div className={`${styles.blue} ml-3`}>Release Order Details </div>

            <img
              src="/static/close.svg"
              alt="close"
              onClick={handleClose}
              className="img-fluid"
            ></img>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${styles.body} background1 container-fluid`}>
          <table
            className={`${styles.table} table`}
            cellPadding="0"
            cellSpacing="0"
            border="0"
          >
            <tr className="table_row ">
              <th width="33%">RELEASE ORDER NO.</th>
              <th width="33%">RELEASE ORDER DATE</th>
              <th width="33%">QUANTITY RELEASED</th>
            </tr>
            <tr className="table_row">
              <td>01</td>
              <td>22-02-2022</td>
              <td>5,000 MT</td>
            </tr>
            <tr className="table_row">
              <td>02</td>
              <td>22-02-2022</td>
              <td>5,000 MT</td>
            </tr>
            <tr className="table_row">
              <td>03</td>
              <td>22-02-2022</td>
              <td>5,000 MT</td>
            </tr>
            <tr className="table_row">
              <td>04</td>
              <td>22-02-2022</td>
              <td>5,000 MT</td>
            </tr>
            <tr className="table_row">
              <td>05</td>
              <td>22-02-2022</td>
              <td>5,000 MT</td>
            </tr>
          </table>
          <div>
            <span className="text">Balance Quantity: </span> &nbsp; 15,000 MT{' '}
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
