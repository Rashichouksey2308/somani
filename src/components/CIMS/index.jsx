import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import _get from "lodash/get";
import { useDispatch, useSelector } from 'react-redux'
import { UpdateTransitDetails, GetTransitDetails } from '../../redux/TransitDetails/action'


export default function Index({ isShipmentTypeBULK, TransitDetails, vesselData }) {
  let shipmentTypeBulk = _get(TransitDetails, `data[0].order.vessel.vessels[0].shipmentType`, '') === 'Bulk'
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
      document1: null,
      document2: null
    }
  ])
  const dispatch = useDispatch()
  const onChangeVessel = (e, index) => {
    let VesselName = e.target.value
    let filteredVessel = {}

    // let vesselData = _get(TransitDetails, `data[0].order.vessel.vessels[0]`, {})
    if (_get(TransitDetails, `data[0].order.vessel.vessels[0].shipmentType`, '') === 'Bulk') {
      _get(TransitDetails, `data[0].order.vessel.vessels`, []).forEach((vessel, index) => {
        if (vessel.vesselInformation[0].name === VesselName) {
          filteredVessel = vessel
        }
      })
    } else {
      filteredVessel = _get(TransitDetails, `data[0].order.vessel.vessels[0]`, {})
      let tempArray = _get(TransitDetails, `data[0].order.vessel.vessels[0].vesselInformation`, [])
      tempArray.forEach((vessel, index) => {
        if (vessel.name === VesselName) {
          filteredVessel.vesselInformation = [vessel]

        }
      })
    }
    console.log(filteredVessel, 'filteredVessel')
    const newArray = [...bolList]
    newArray[index].vesselName = filteredVessel.vesselInformation[0].name
    newArray[index].quantity = filteredVessel.vesselInformation[0].IMONumber

    setBolList(newArray)
  }

  const onChangeCims = (e, index) => {
    const name = e.target.id
    const value = e.target.value
    setCimsDetails(prevState => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            [name]: value
          }
        }
        return obj;
      });
      return newState;
    })
  }

  const saveDate = (startDate, name, index) => {
    console.log(startDate, name, 'Event1')
    setCimsDetails(prevState => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            [name]: startDate
          }
        }
        return obj;
      });
      return newState;
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
    setCimsDetails([...cimsDetails, {
      vesselName: '',
      quantity: '',
      circNumber: '',
      circDate: '',
      cimsCharges: '',
      paymentBy: '',
      document1: null,
      document2: null
    }])
  }
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


  const handleSave = () => {

  }
  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        {cimsDetails.map((list, index) => (
          <div key={index} className={`${styles.vessel_card} mt-3 border_color`}>
            <div className={`${styles.main} border_color mt-4 card `}>
              <div
                className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
              >
                <h3 className={`${styles.heading}`}>CIMS Details</h3>
                <button onClick={() => onAddHandler()} className={styles.add_btn}>
                  <span className={styles.add_sign}>+</span>Add
                </button>
              </div>
              <div className={`${styles.dashboard_form} mt-2 card-body`}>

                <div className="row">
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <div className="d-flex">
                      <select onChange={(e) => onChangeVessel(e, index)}
                        className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                      >
                        {shipmentTypeBulk ? _get(TransitDetails, "data[0].order.vessel.vessels", []).map((vessel, index) => (
                          <option value={vessel?.vesselInformation?.name} key={index}>{vessel?.vesselInformation?.name}</option>
                        )) :
                          _get(TransitDetails, "data[0].order.vessel.vessels[0].vesselInformation", []).map((vessel, index) => (
                            <option value={vessel?.name} key={index}>{vessel?.name}</option>
                          ))
                        }
                      </select>
                      <label className={`${styles.label_heading} label_heading`}>
                        Vessel Name<strong className="text-danger">*</strong>
                      </label>
                      <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <input
                      id='quantity'
                      defaultValue={_get(TransitDetails, "data[0].order.quantity", '')}
                      onChange={(e, index) => onChangeCims(e, index)}
                      className={`${styles.input_field} input form-control`}
                      type="number"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Quantity<strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <input
                      id='circNumber'
                      onChange={(e, index) => onChangeCims(e, index)}
                      defaultValue={list.circNumber}
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
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
                        defaultDate=''

                        selected={startBlDate}
                        dateFormat="dd-MM-yyyy"
                        className={`${styles.input_field} ${styles.cursor} input form-control`}
                        onChange={(startBlDate) => {
                          setBlDate(startBlDate)
                          saveDate(startBlDate, 'blDate', index)
                        }}
                        minDate={lastDate}
                      />

                      <img
                        className={`${styles.calanderIcon} img-fluid`}
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
                      id='cimsCharges'
                      onChange={(e, index) => onChangeCims(e, index)}
                      defaultValue={list.cimsCharges}
                      className={`${styles.input_field} input form-control`}
                      type="number"
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
                        className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      >
                        <option value={list.paymentBy}>{list.paymentBy}</option>
                        <option>N/A</option>
                      </select>
                      <label className={`${styles.label_heading} label_heading`}>
                        Payment by<strong className="text-danger">*</strong>
                      </label>
                      <img
                        className={`${styles.arrow} img-fluid`}
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
                    className={`${styles.table} table mt-5`}
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
                            className="img-fluid"
                            alt="Pdf"
                          />
                        </td>
                        <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                        <td>
                          <div className={styles.uploadBtnWrapper}>
                            <input onChange={(e) => uploadDoc1(e, index)} type="file" name="myfile" />
                            <button className={`${styles.upload_btn} btn`}>
                              Upload
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td className={styles.doc_name}>CIMS Payment Receipt</td>
                        <td>
                          <img
                            src="/static/pdf.svg"
                            className="img-fluid"
                            alt="Pdf"
                          />
                        </td>
                        <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                        <td>
                          <div className={styles.uploadBtnWrapper}>
                            <input onChange={(e) => docUploadFunction(e)} type="file" name="myfile" />
                            <button className={`${styles.upload_btn} btn`}>
                              Upload
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className={`${styles.upload_main} mt-4 mb-5 upload_main`}>
              <div
                className={`${styles.head_container} border_color d-flex justify-content-between`}
                data-toggle="collapse"
                data-target="#uploadOther"
                aria-expanded="true"
                aria-controls="uploadOther"
              >
                <h3 className={styles.heading}>Document</h3>
                <span>+</span>
              </div>
              <div
                id="uploadOther"
                className="collapse"
                aria-labelledby="uploadOther"
                data-parent="#uploadOther"
              >
                <div className={`${styles.dashboard_form} card-body`}>
                  <Form>
                    <div className="row align-items-center pb-4">
                      <div
                        className={`${styles.drop_container} d-flex align-items-center justify-content-around col-sm-6`}
                      >
                        <div className="text-center">
                          <img
                            className={`${styles.upload_image} img-fluid`}
                            src="/static/browse.svg"
                            alt="Browse"
                          />
                          <p className={styles.drop_para}>
                            Drop Files here or
                            <br />
                            <div className={styles.uploadBtnWrapper}>
                              <input type="file" name="myfile" />
                              <a href="#">Browse</a>
                            </div>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 offset-md-1 col-sm-6">
                        <Form.Group className={styles.form_group}>
                          <div className="d-flex">
                            <select
                              className={`${styles.value} ${styles.customSelect} input form-control`}
                              id="docType"
                              onChange={(e) => handleDropdown(e)}
                            >
                              <option>
                                Lead Onboarding &amp; Order Approval
                              </option>
                              <option>
                                Agreements, Insurance &amp; LC Opening
                              </option>
                              <option>Loading-Transit-Unloading</option>
                              <option>Custom Clearance And Warehousing</option>
                              <option value="Others">Others</option>
                            </select>
                            <Form.Label
                              className={`${styles.label} label_heading`}
                            >
                              Document Type
                            </Form.Label>
                            <img
                              className={`${styles.arrow} img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className={styles.form_group}>
                          <Form.Label className={`${styles.label} label_heading`}>
                            Please Specify Document Name
                          </Form.Label>
                          <Form.Control
                            className={`${styles.value} input form-control`}
                            type="text"
                            disabled={editInput}
                          />
                        </Form.Group>
                        <div className={styles.uploadBtnWrapper}>
                          <input type="file" name="myfile" />
                          <button
                            className={`${styles.upload_button} btn`}
                            disabled={editInput}
                          >
                            Upload
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>

                <div className={styles.table_container}>
                  <div className={styles.table_scroll_outer}>
                    <div className={styles.table_scroll_inner}>
                      <div
                        className={`${styles.search_container} p-2 pl-4 d-flex justify-content-between align-items-center`}
                      >
                        <div>
                          <select
                            className={`${styles.dropDown} input form-control`}
                          >
                            <option>Lead Onboarding &amp; Order Approval</option>
                            <option>Agreements, Insurance & LC Opening</option>
                            <option>Loading-Transit-Unloading</option>
                            <option>Custom Clearance And Warehousing</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                        <div
                          className={`d-flex align-items-center ${styles.searchBarContainer} `}
                        >
                          <img
                            className={` ${styles.searchImage} img-fluid`}
                            src="/static/search.svg"
                            alt="Search"
                          ></img>
                          <input
                            className={`${styles.searchBar} input form-control`}
                            placeholder="Search"
                          ></input>
                        </div>
                      </div>
                      <table
                        className={`${styles.table} table`}
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
                            <th>
                              UPLOADED BY{' '}
                              <img
                                className={`${styles.sort_image} mb-1`}
                                src="/static/icons8-sort-24.svg"
                                alt="Sort icon"
                              />
                            </th>
                            <th>STATUS </th>
                            <th>ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table_row">
                            <td className={styles.doc_name}>
                              Insurance Quotation
                            </td>
                            <td>
                              <img
                                src="/static/pdf.svg"
                                className={`${styles.pdfImage} img-fluid`}
                                alt="Pdf"
                              />
                            </td>
                            <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                            <td className={styles.doc_row}>John Doe</td>
                            <td>
                              <span
                                className={`${styles.status} ${styles.approved}`}
                              ></span>
                              Verified
                            </td>
                            <td colSpan="2">
                              <img
                                src="/static/delete.svg"
                                className={`${styles.delete_image} img-fluid mr-3`}
                                alt="Bin"
                              />
                              <img
                                src="/static/upload.svg"
                                className="img-fluid mr-3"
                                alt="Share"
                              />
                              <img
                                src="/static/drive_file.svg"
                                className={`${styles.edit_image} img-fluid mr-3`}
                                alt="Share"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <SaveBar handleSave={handleSave} rightBtn="Submit" />
      </div>
    </>
  )
}
