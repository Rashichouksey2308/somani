import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import _get from 'lodash/get'
import { useDispatch, useSelector } from 'react-redux'
import {
  UpdateTransitDetails,
  GetTransitDetails,
} from '../../redux/TransitDetails/action'
import UploadOther from '../UploadOther'
import { toast } from 'react-toastify'
import moment from 'moment'


export default function Index({
  isShipmentTypeBULK,
  TransitDetails,
  vesselData,
  orderid,
  docUploadFunction,
}) {
  let transId = _get(TransitDetails, `data[0]`, '')
  let shipmentTypeBulk =
    _get(TransitDetails, `data[0].order.vessel.vessels[0].shipmentType`, '') ===
    'Bulk'
  const [editInput, setEditInput] = useState(true)
  const [startBlDate, setBlDate] = useState(null)
  const [lastDate, setlastDate] = useState(new Date())
  const [cimsDetails, setCimsDetails] = useState([
    {
      vesselName: '',
      quantity: '',
      circNumber: '',
      circDate: '',
      cimsCharges: '',
      paymentBy: '',
      coalImportRegistrationDoc: null,
      cimsPaymentReceiptDoc: null,
    },
  ])

  useEffect(() => {
    if (_get(TransitDetails, 'data[0].CIMS.cimsDetails', []).length > 0) {
      setCimsDetails(_get(TransitDetails, 'data[0].CIMS.cimsDetails', []))
    }
  }, [TransitDetails])
  const dispatch = useDispatch()
  const onChangeVessel = (e, index) => {
    let VesselName = e.target.value
    let filteredVessel = {}

    // let vesselData = _get(TransitDetails, `data[0].order.vessel.vessels[0]`, {})
    if (
      _get(
        TransitDetails,
        `data[0].order.vessel.vessels[0].shipmentType`,
        '',
      ) === 'Bulk'
    ) {
      _get(TransitDetails, `data[0].order.vessel.vessels`, []).forEach(
        (vessel, index) => {
          if (vessel.vesselInformation[0].name === VesselName) {
            filteredVessel = vessel
          }
        },
      )
    } else {
      filteredVessel = _get(
        TransitDetails,
        `data[0].order.vessel.vessels[0]`,
        {},
      )
      let tempArray = _get(
        TransitDetails,
        `data[0].order.vessel.vessels[0].vesselInformation`,
        [],
      )
      tempArray.forEach((vessel, index) => {
        if (vessel.name === VesselName) {
          filteredVessel.vesselInformation = [vessel]
        }
      })
    }
    console.log(filteredVessel, 'filteredVessel')
    const newArray = [...cimsDetails]
    newArray[index].vesselName = filteredVessel.vesselInformation[0].name
    newArray[index].quantity = filteredVessel.vesselInformation[0].IMONumber

    setCimsDetails(newArray)
  }

  const onChangeCims = (e, index) => {
    const name = e.target.id
    const value = e.target.value
    setCimsDetails((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            [name]: value,
          }
        }
        return obj
      })
      return newState
    })
  }

  const saveDate = (startDate, name, index) => {
    console.log(startDate, name, 'Event1')
    setCimsDetails((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            [name]: startDate,
          }
        }
        return obj
      })
      return newState
    })
  }

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false)
    } else {
      setEditInput(true)
    }
  }
  const onAddHandler = () => {
    setCimsDetails([
      ...cimsDetails,
      {
        vesselName: '',
        quantity: '',
        circNumber: '',
        circDate: '',
        cimsCharges: '',
        paymentBy: '',
        document1: null,
        document2: null,
      },
    ])
  }

  const handleCloseDoc = (e, index) => {
    let tempArr = [...cimsDetails]
    console.log(tempArr, 'khjfdfgkegfk12', tempArr[index].e, index, e)

    tempArr[index][e] = null
    setCimsDetails(tempArr);
  }

  const uploadDoc = async (e, index) => {
    let id = e.target.id
    let doc = await docUploadFunction(e)
    console.log(doc, id, 'khjfdfgkegfk')

    setCimsDetails((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            [id]: doc,
          }
        }
        return obj
      })
      return newState
    })
  }
  const validation = () => {
    let isOk = true
    let toastMessage = ''



    for (let i = 0; i <= cimsDetails.length - 1; i++) {
      console.log(i, 'INSIDE FOR LOOP', cimsDetails.length)
      if (
        cimsDetails[i]?.vesselName == '' ||
        cimsDetails[i]?.vesselName == undefined
      ) {
        toastMessage = `Please select vessel name of CIMS NO   - ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break
        }
      }
      if (
        cimsDetails[i]?.quantity == '' ||
        cimsDetails[i]?.quantity == undefined
      ) {
        toastMessage = `Please  FILL quantity of CIMS NO   - ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break
        }
      }
      if (
        cimsDetails[i]?.circNumber == '' ||
        cimsDetails[i]?.circNumber == undefined
      ) {
        toastMessage = `PLEASE FILL THE CRIC NUMBER CIMS NO   - ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break
        }
      }
      if (
        cimsDetails[i]?.circDate == '' ||
        cimsDetails[i]?.circDate == undefined
      ) {
        toastMessage = `Please  SELECT A CIRC DATE FOR CIMS NO   - ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break
        }
      }
      if (
        cimsDetails[i]?.cimsCharges == '' ||
        cimsDetails[i]?.cimsCharges == undefined
      ) {
        toastMessage = `PLEASE FILL THE cims charges CIMS NO   - ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break
        }
      }
      if (
        cimsDetails[i]?.paymentBy == '' ||
        cimsDetails[i]?.paymentBy == undefined
      ) {
        toastMessage = `Please  SELECT A PAYMENT BY FOR CIMS NO   - ${i}  `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break
        }
      }
      if (
        cimsDetails[i]?.coalImportRegistrationDoc == null ||
        cimsDetails[i]?.coalImportRegistrationDoc == undefined
      ) {
        toastMessage = `Please  UPLOAD A FILE FOR COAL IMPORT REGISTRATION    - ${i} `
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          isOk = false
          break
        }
      }
    }
    return isOk
  }

  const handleSubmit = () => {
    // const billOfLanding = [...bolList]
    if (validation()) {
      const cims = { cimsDetails: cimsDetails }

      let fd = new FormData()
      fd.append('cims', JSON.stringify(cims))
      fd.append('transitId', transId._id)

      let task = 'submit'
      dispatch(UpdateTransitDetails({ fd, task }))
    }

  }

  const handleSave = () => {
    // const billOfLanding = [...bolList]

    const cims = { cimsDetails: cimsDetails }

    let fd = new FormData()
    fd.append('cims', JSON.stringify(cims))
    fd.append('transitId', transId._id)


    let task = 'save'
    dispatch(UpdateTransitDetails({ fd, task }))


  }

  // console.log(cimsDetails, 'khjfdfgkegfk')





  return (
    <>
      <div className={`${styles.backgroundMain} vessel_card container-fluid p-0`}>

        <div

          className={`${styles.vessel_card} border_color`}
        >
          {cimsDetails.map((list, index) => (
            <div key={index} className={`${styles.main} border_color card `}>
              <div
                className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
              >
                <h3 className={`${styles.heading}`}>CIMS Details</h3>
                <button
                  onClick={() => onAddHandler()}
                  className={styles.add_btn}
                >
                  <span className={styles.add_sign}>+</span>Add
                </button>
              </div>
              <div className={`${styles.dashboard_form} card-body`}>
                <div className="row">
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <div className="d-flex">
                      {
                        <select
                        value={list.vesselName}
                          onChange={(e) => onChangeVessel(e, index)}
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                        >
                          <option disabled selected>Select an option</option>
                          {shipmentTypeBulk
                            ? _get(
                              TransitDetails,
                              'data[0].order.vessel.vessels',
                              [],
                            ).map((vessel, index) => (
                              <option
                                value={vessel?.vesselInformation?.name}
                                key={index}
                              >
                                {vessel?.vesselInformation[0]?.name}
                              </option>
                            ))
                            : _get(
                              TransitDetails,
                              'data[0].order.vessel.vessels[0].vesselInformation',
                              [],
                            ).map((vessel, index) => (
                              <option value={vessel?.name} key={index}>
                                {vessel?.name}
                              </option>
                            ))}
                        </select>
                      }
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Vessel Name<strong className="text-danger">*</strong>
                      </label>
                      <img
                        className={`${styles.arrow} image_arrow img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <input
                      id="quantity"
                      defaultValue={
                        list.quantity
                          ? list.quantity
                          : _get(TransitDetails, 'data[0].order.quantity', '')
                      }
                      onChange={(e) => onChangeCims(e, index)}
                      className={`${styles.input_field} input form-control`}
                      type="number"
                      onKeyDown={(evt) =>
                        evt.key === 'e' && evt.preventDefault()
                      }
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Quantity<strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <input
                      id="circNumber"
                      type="number"
                      onChange={(e) => onChangeCims(e, index)}
                      defaultValue={list.circNumber}
                      className={`${styles.input_field} input form-control`}
                      required
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      CIRC Number<strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <div className="d-flex">
                      {/* <DateCalender labelName="From" dateFormat={"dd-MM-yyyy"} saveDate={saveData} /> */}
                      <DatePicker
                        value={moment(list?.circDate?.split('T')[0]).format('DD-MM-YYYY')}
                        defaultDate={list?.circDate}
                        selected={startBlDate}
                        dateFormat="dd-MM-yyyy"
                        className={`${styles.input_field} ${styles.cursor} input form-control`}
                        onChange={(startBlDate) => {
                          setBlDate(startBlDate)
                          saveDate(startBlDate, 'circDate', index)
                        }}
                        minDate={lastDate}
                      />

                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                      />
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Circ Date
                      </label>
                    </div>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <input
                      id="cimsCharges"
                      onChange={(e) => onChangeCims(e, index)}
                      value={list.cimsCharges}
                      className={`${styles.input_field} input form-control`}
                      type="number"
                      onKeyDown={(evt) =>
                        evt.key === 'e' && evt.preventDefault()
                      }
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      CIMS Charges<strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <div className="d-flex">
                      <select
                      value={list.paymentBy}
                        id="paymentBy"
                        onChange={(e) => onChangeCims(e, index)}
                        className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      >
                        <option>Select an option</option>
                        {/* <option value={list.paymentBy}>{list.paymentBy}</option> */}
                        <option value="1">1</option>
                        <option>N/A</option>
                      </select>
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Payment by<strong className="text-danger">*</strong>
                      </label>
                      <img
                        className={`${styles.arrow}  image_arrow img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.table_scroll_outer}>
                <div className={styles.table_scroll_inner}>
                  <table
                    className={`${styles.table} table mb-0`}
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <thead>
                      <tr>
                        <th>
                          DOCUMENT NAME{' '}
                          <img
                            className={`${styles.sort_image} mb-1`}
                            src="/static/icons8-sort-24.svg"
                            alt="Sort icon"
                          />
                        </th>
                        <th>
                          FORMAT{' '}
                          <img
                            className={`${styles.sort_image} mb-1`}
                            src="/static/icons8-sort-24.svg"
                            alt="Sort icon"
                          />
                        </th>
                        <th>
                          DOCUMENT DATE{' '}
                          <img
                            className={`${styles.sort_image} mb-1`}
                            src="/static/icons8-sort-24.svg"
                            alt="Sort icon"
                          />
                        </th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table_row">
                        <td className={styles.doc_name}>
                          Coal Import Registration Certificate
                          <strong className="text-danger ml-0">*</strong>
                        </td>
                        <td>
                          <img
                            src="/static/pdf.svg"
                            className={`${styles.pdfImage} img-fluid`}
                            alt="Pdf"
                          />
                        </td>
                        <td className={styles.doc_row}>{moment(list?.coalImportRegistrationDoc?.Date).format(' DD-MM-YYYY , h:mm a')}</td>
                        <td>
                          <div className={styles.uploadBtnWrapper}>
                            {cimsDetails &&
                              cimsDetails[index]?.coalImportRegistrationDoc == null ? (
                              <>
                                <div className={styles.uploadBtnWrapper}>
                                  <input
                                    type="file"
                                    id='coalImportRegistrationDoc'
                                    accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                    onChange={(e) => uploadDoc(e, index)}
                                  />
                                  <button
                                    className={`${styles.upload_btn} btn`}
                                  >
                                    Upload
                                  </button>
                                </div>
                              </>
                            ) : (
                              <div className={`${styles.certificate} d-flex justify-content-between`}>
                                <span>
                                  {cimsDetails[index]?.coalImportRegistrationDoc?.originalName}
                                </span>
                                <img
                                  className={`${styles.close_image} mr-2`}
                                  src="/static/close.svg"
                                  onClick={(e) => handleCloseDoc('coalImportRegistrationDoc', index)}
                                  alt="Close"
                                />{' '}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>

                      <tr className="table_row">
                        <td className={styles.doc_name}>
                          CIMS Payment Receipt
                        </td>
                        <td>
                          <img
                            src="/static/pdf.svg"
                            className={`${styles.pdfImage} img-fluid`}
                            alt="Pdf"
                          />
                        </td>
                        <td className={styles.doc_row}> {moment(list?.cimsPaymentReceiptDoc?.Date).format(' DD-MM-YYYY , h:mm a')}</td>
                        <td>
                          <div className={styles.uploadBtnWrapper}>
                            {cimsDetails &&
                              cimsDetails[index]?.cimsPaymentReceiptDoc == null ? (
                              <>
                                <div className={styles.uploadBtnWrapper}>
                                  <input
                                    type="file"
                                    id='cimsPaymentReceiptDoc'
                                    accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                    onChange={(e) => uploadDoc(e, index)}
                                  />
                                  <button
                                    className={`${styles.upload_btn} btn`}
                                  >
                                    Upload
                                  </button>
                                </div>
                              </>
                            ) : (
                              <div className={`${styles.certificate} d-flex justify-content-between`}>
                                <span>
                                  {cimsDetails[index]?.cimsPaymentReceiptDoc?.originalName}
                                </span>
                                <img
                                  className={`${styles.close_image} mr-2`}
                                  src="/static/close.svg"
                                  onClick={(e) => handleCloseDoc('cimsPaymentReceiptDoc', index)}
                                  alt="Close"
                                />{' '}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <UploadOther
              orderid={orderid}
              module="Loading-Transit-Unloading"
            />
          </div>
        </div>

        <SaveBar handleSave={handleSave} rightBtn="Submit" rightBtnClick={handleSubmit} />
      </div>
    </>
  )
}
