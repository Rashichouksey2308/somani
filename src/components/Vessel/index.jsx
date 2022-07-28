import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import DateCalender from '../DateCalender'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import UploadDocument from '../UploadDocument'
import UploadOther from '../UploadOther'
import { UPDATE_CREDIT_CALCULATE_SUCCESSFULL } from 'redux/buyerProfile/actionType'
import { add } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { GetVessel } from '../../redux/vessel/action'
//import { set } from 'immer/dist/internal'
import _get from "lodash/get";

function Index() {
  const dispatch = useDispatch()
  const { Vessel } = useSelector(state => state.vessel)
  console.log(Vessel, 'vessels')



  useEffect(() => {

    let id = sessionStorage.getItem('VesselId')
    dispatch(GetVessel(`?vesselId=${id}`))
  }, [dispatch])

  const [list, setList] = useState([
    {
      vesselHeading: '',
      isPart: _get(
        Vessel,
        "data[0].partShipmentAllowed",
        "false"
      ),
      isAddBtn: '',
      shipmentSelect: 'Bulk',
      commodity: _get(
        Vessel,
        "data[0].order.commodity",
        ""
      ),
      quantity: _get(
        Vessel,
        "data[0].order.quantity",
        ""
      ),
      orderValue: _get(
        Vessel,
        "data[0].order.orderValue",
        ""
      ),
      transitHeading: '',
      countryOrigin: _get(
        Vessel,
        "data[0].order.countryOfOrigin",
        ""
      ),
      portLoading: '',
      portDischarge: _get(
        Vessel,
        "data[0].order.portOfDischarge",
        ""
      ),
      laycanFrom: '',
      laycanTo: '',
      etaLoad: '',
      etaDischarge: '',
      vesselInfo: '',
      vesselName: '',
      imoNumber: '',
      flag: '',
      yearBuilt: '',
      shippingLine: '',
    },
  ])
  const onAddVessel = () => {
    setList([
      ...list,
      {
        vesselHeading: '',
        isPart: '',
        isAddBtn: '',
        shipmentSelect: 'Bulk',
        commodity: '',
        quantity: '',
        orderValue: '',
        transitHeading: '',
        countryOrigin: '',
        portLoading: '',
        portDischarge: '',
        laycanFrom: '',
        laycanTo: '',
        etaLoad: '',
        etaDischarge: '',
        vesselInfo: '',
        vesselName: '',
        imoNumber: '',
        flag: '',
        yearBuilt: '',
        shippingLine: '',
      },
    ])
  }

  const [shipmentType, setShipmentType] = useState('Bulk')

  const [startDate, setStartDate] = useState(null)
  const [lastDate, setlastDate] = useState(new Date())


  const shipmentTypeChangeHandler = (e, index) => {
    setList(prevState => {
      const newState = prevState.map((obj, i) => {

        if (i == index) {
          return { ...obj, shipmentSelect: e.target.value };
        }
        return obj;
      });

      return newState;
    });

  }
  console.log(list, 'Vessels')

  return (
    <>
      <div className={`${styles.dashboardTab} tabHeader w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className="d-flex align-items-center justify-content-between">
            <h1 className={`${styles.title} heading`}>
              <img
                src="/static/arrow-right.svg"
                alt="arrow right"
                className="img-fluid image_arrow"
              />
              Vessel Details
            </h1>
            <div className="ml-auto">
              <div className={`${styles.lastModified} text `}>
                <span>Last Modified:</span> 28 Jan,11:34am
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.backgroundMain} mt-4 container-fluid background2`}
      >
        <div className={`${styles.vessel_card}`}>
          {list &&
            list.map((val, index) => {

              return (
                <div
                  key={index}
                  className={`${styles.main} mb-4 card border-color`}
                >
                  <div
                    className={`${styles.head_container} border_color card-header head_container justify-content-between d-flex bg-transparent`}
                  >
                    {list[index].shipmentSelect === 'Bulk' ? (
                      <h3 className={`${styles.heading}`}>
                        Vessel Information 1
                      </h3>
                    ) : (
                      <h3 className={`${styles.heading}`}>Basic Details</h3>
                    )}
                    <div className="d-flex">
                      <div>
                        <label className={`${styles.dropDown_label} text`}>
                          Part Shipment Allowed
                        </label>
                        <select className={`${styles.dropDown} input`}>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>

                      {list[index].shipmentSelect === 'Bulk' ? (
                        <button
                          className={styles.add_btn}
                          onClick={(e) => {
                            onAddVessel()
                          }}
                        >
                          Add
                        </button>
                      ) : null}
                    </div>
                  </div>
                  <div className={`${styles.dashboard_form} card-body`}>
                    <div className="row ">
                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                      >
                        <div className="d-flex">
                          <select
                            className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            onChange={(e) => shipmentTypeChangeHandler(e, index)}
                          >
                            <option value="Bulk" selected>
                              Bulk
                            </option>
                            <option value="Liner">Liner</option>
                          </select>
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Shipment Type
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                      >
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          value={val.commodity}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Commodity<strong className="text-danger">*</strong>
                        </label>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                      >
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Quantity<strong className="text-danger">*</strong>
                        </label>
                      </div>
                      <div
                        className={`${styles.form_group} d-flex col-lg-3 col-md-6 col-sm-6`}
                      >
                        <select
                          className={`${styles.input_field}} pl-3 input w-35 border-right-0`}
                          style={{ color: '#3687E8' }}
                        >
                          <option>USD</option>
                          <option>INR</option>
                        </select>
                        <input
                          type="number"
                          className={`${styles.input_field} border-left-0 input form-control`}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                          id="textInput"
                        >
                          Order values<strong className="text-danger">*</strong>
                        </label>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className={`${styles.dashboard_form} card-body`}>
                    <h3 className={styles.sub_heading}>Transit Details</h3>

                    <div className="row">
                      <div
                        className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                      >
                        <div className="d-flex">
                          <select
                            className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                            required
                          >
                            <option>Australia</option>
                            <option>India</option>
                          </select>
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Country of Origin
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                      >
                        <div className="d-flex">
                          <select
                            className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            required
                          >
                            <option>Perth</option>
                            <option>Perth</option>
                          </select>
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Port of Loading
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                      >
                        <div className="d-flex">
                          <select
                            className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                            required
                          >
                            <option>Navasheva</option>
                            <option>Navasheva</option>
                          </select>
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Port of Discharge
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6`}
                      >
                        <div className="d-flex">
                          <DateCalender labelName="Laycan from" />
                          <img
                            className={`${styles.calanderIcon} img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6`}
                      >
                        <div className="d-flex">
                          <DateCalender labelName="Laycan to" />
                          <img
                            className={`${styles.calanderIcon} img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                      >
                        <div className="d-flex">
                          <DateCalender labelName="ETA at Load Port" />
                          <img
                            className={`${styles.calanderIcon} img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                      >
                        <div className="d-flex">
                          {/* <DateCalender labelName='ETA at Discharge Port'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    /> */}
                          <DatePicker
                            selected={startDate}
                            dateFormat="dd/MM/yyyy"
                            name={name}
                            className={`${styles.input_field} input form-control`}
                            onChange={(startDate) => {
                              setStartDate(startDate)
                              saveDate(startDate, name)
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
                            ETA at Discharge Port
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>

                  {list[index].shipmentSelect === 'Bulk' ? (
                    <div className={`${styles.dashboard_form} card-body`}>
                      <h3 className={styles.sub_heading}>Vessel Information</h3>

                      <div className="row">
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                        >
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Vessel Name<strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                        >
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            IMO Number<strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                        >
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Flag<strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                        >
                          <input
                            className={`${styles.input_field} input form-control`}
                            type="number"
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Year of Built
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                        >
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Shipping Line/Charter
                          </label>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {' '}
                      <div className={`${styles.dashboard_form} card-body`}>
                        <h3 className={styles.sub_heading}>
                          Shipping Information
                        </h3>

                        <div className="row">
                          <div
                            className={`${styles.form_group} col-md-4 col-sm-6`}
                          >
                            <input
                              className={`${styles.input_field} input form-control`}
                              type="text"
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Shipping Line/Charter
                              <strong className="text-danger">*</strong>
                            </label>
                          </div>
                          <div
                            className={`${styles.form_group} col-md-4 col-sm-6`}
                          >
                            <input
                              className={`${styles.input_field} input form-control`}
                              type="number"
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              No. of Containers
                              <strong className="text-danger">*</strong>
                            </label>
                          </div>
                          <div
                            className={`${styles.form_group} col-md-4 col-sm-6`}
                          >
                            <input
                              className={`${styles.input_field} input form-control`}
                              type="number"
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Free Detention Period At Discharge Port (Days)
                              <strong className="text-danger">*</strong>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.dashboard_form} card-body`}>
                        <div className={`${styles.vessel_card}`}>
                          <div className="d-flex justify-content-between align-items-center">
                            <h3 className={styles.sub_heading}>
                              Vessel Information
                            </h3>
                            <button className={styles.add_btn}>Add</button>
                          </div>
                          <div className="row">
                            <div
                              className={`${styles.form_group} col-md-4 col-sm-6`}
                            >
                              <input
                                className={`${styles.input_field} input form-control`}
                                required
                                type="text"
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                Vessel Name
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.form_group} col-md-4 col-sm-6`}
                            >
                              <input
                                className={`${styles.input_field} input form-control`}
                                required
                                type="text"
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                IMO Number
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.form_group} col-md-4 col-sm-6`}
                            >
                              <input
                                className={`${styles.input_field} input form-control`}
                                required
                                type="text"
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                Flag<strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.form_group} col-md-4 col-sm-6`}
                            >
                              <input
                                className={`${styles.input_field} input form-control`}
                                type="number"
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                Year of Built
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr></hr>
                      <div className={`${styles.dashboard_form} card-body`}>
                        <h3 className={styles.sub_heading}>
                          Container Number(s)
                        </h3>

                        <div
                          className={`${styles.form_group} d-flex justify-content-start`}
                        >
                          <button className={`${styles.upload_btn}`}>
                            Upload Excel
                          </button>
                          <div className={`${styles.upload_text}`}>
                            <strong className="text-danger mr-1">*</strong>
                            ONLY .XLS FILES ARE ALLOWED
                            <br /> &amp; MAX FILE SIZE UP TO 50MB
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )
            })}

          <UploadDocument />
          <div className="mb-5">
            <UploadOther />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
