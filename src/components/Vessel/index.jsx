import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import DateCalender from '../DateCalender'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import UploadDocument from '../UploadDocument'
import UploadOther from '../UploadOther'
import { UPDATE_CREDIT_CALCULATE_SUCCESSFULL } from 'redux/buyerProfile/actionType'
import { add } from 'lodash'

//import { set } from 'immer/dist/internal'


function Index({ shippingInfoChangeHandler, uploadDocHandler, onVesselInfoChangeHandlerForLiner, onVesselInfoChangeHandlerForBulk, saveDate, OnVesselTransitFieldsChangeHandler, OnVesselBasicFieldsChangeHandler, shipmentTypeChangeHandler, setlastDate, lastDate, setStartDate, startDate, OnAddvesselInformation, onAddVessel, list, orderID, id1 }) {



  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className="d-flex align-items-center justify-content-between">
            <img
              src="/static/arrow-right.svg"
              alt="arrow right"
              className="img-fluid mr-2 image_arrow"
            />
            <h1 className={`${styles.title} heading`}>
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
        className="p-0 container-fluid background2"
      >
        <div className={`${styles.backgroundMain}`}>
          <div className={`${styles.vessel_card}`}>
            {list &&
              list.map((val, index) => {

                return (
                  <div
                    key={index}
                    className={`${styles.main} card border-color`}
                  >
                    <div
                      className={`${styles.head_container} align-items-center border_color card-header head_container justify-content-between d-flex bg-transparent`}
                    >
                      {list[index].shipmentType === 'Bulk' ? (
                        <h3 className={`${styles.heading}`}>
                          Vessel Information 1
                        </h3>
                      ) : (
                        <h3 className={`${styles.heading}`}>Basic Details</h3>
                      )}
                      <div className="d-flex align-items-center">
                          <label className={`${styles.dropDown_label} text`}>
                            Part Shipment Allowed
                          </label>
                        <div className='position-relative'>
                            <select className={`${styles.dropDown} ${styles.customSelect} input`}>
                              {val.isPart ? <> <option>Yes</option>
                                <option>No</option></> : <> <option>No</option>
                                <option>Yes</option></>}
                            </select>
                            <img
                              className={`${styles.arrow2} img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                        </div>

                        {list[index].shipmentType === 'Bulk' ? (
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
                            type="text"
                            value={val.commodity}
                            disabled
                            required
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
                            id='quantity'
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            value={val.quantity}
                            onChange={(e) => OnVesselBasicFieldsChangeHandler(e, index)}
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
                            className={`${styles.input_field} pl-2 pr-3 input w-35 border-right-0`}
                            style={{ color: '#3687E8' }}
                            required
                          >
                            <option>USD</option>
                            <option>INR</option>
                          </select>
                          <input
                            id='orderValue'
                            type="number"
                            className={`${styles.input_field} border-left-0 input form-control`}
                            value={val.orderValue}
                            onChange={(e) => OnVesselBasicFieldsChangeHandler(e, index)}
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                            id="textInput"
                          >
                            Order Value<strong className="text-danger">*</strong>
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
                              id='countryOfOrigin'
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                              required
                              onChange={(e) => OnVesselTransitFieldsChangeHandler(e, index)}
                            >
                              <option value={val.countryOfOrigin}>{val.countryOfOrigin}</option>
                              <option value='india'>India</option>
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
                              id='portOfLoading'

                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                              required
                              onChange={(e) => OnVesselTransitFieldsChangeHandler(e, index)}
                            >
                              <option value={val.portOfLoading}>{val.portOfLoading}</option>
                              <option value='perth'>Perth</option>
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
                              id='portOfDischarge'
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                              required
                              onChange={(e) => OnVesselTransitFieldsChangeHandler(e, index)}
                            >
                              <option value={val.portOfDischarge}>{val.portOfDischarge}</option>
                              <option value='navasheva'>Navasheva</option>
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
                            <DateCalender defaultDate={val?.transitDetails?.laycanFrom} name='laycanFrom' index={index} saveDate={saveDate} labelName="Laycan from"
                            required />
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
                            <DateCalender defaultDate={val?.transitDetails?.laycanTo} name='laycanTo' index={index} saveDate={saveDate} labelName="Laycan to" />
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
                            <DateCalender defaultDate={val?.transitDetails?.EDTatLoadPort} name='EDTatLoadPort' index={index} saveDate={saveDate} labelName="ETA at Load Port" />
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
                              defaultDate={val?.transitDetails?.ETAatDischargePort}
                              name='ETAatDischargePort'
                              selected={startDate}
                              dateFormat="dd/MM/yyyy"

                              className={`${styles.input_field} ${styles.cursor} input form-control`}
                              onChange={(startDate) => {
                                setStartDate(startDate)
                                saveDate(startDate, 'ETAatDischargePort', index)
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

                    {list[index].shipmentType === 'Bulk' ? <>{
                      list && list[0].vesselInformation.map((vesselInfo, index1) => (
                        <div key={index} className={`${styles.dashboard_form} card-body`}>
                          <h3 className={styles.sub_heading}>Vessel Information</h3>

                          <div className="row">
                            <div
                              className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                            >
                              <input
                                id='name'
                                defaultValue={vesselInfo.name}
                                className={`${styles.input_field} input form-control`}
                                required
                                type="text"
                                onChange={(e) => onVesselInfoChangeHandlerForBulk(e, index)}
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                Vessel Name<strong className="text-danger">*</strong></label>
                            </div>
                            <div
                              className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                            >
                              <input
                                id='IMONumber'
                                defaultValue={vesselInfo.IMONumber}
                                className={`${styles.input_field} input form-control`}
                                required
                                type="text"
                                onChange={(e) => onVesselInfoChangeHandlerForBulk(e, index)}
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                IMO Number<strong className="text-danger">*</strong></label>
                            </div>
                            <div
                              className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                            >
                              <input
                                id='flag'
                                defaultValue={vesselInfo.flag}
                                className={`${styles.input_field} input form-control`}
                                required
                                type="text"
                                onChange={(e) => onVesselInfoChangeHandlerForBulk(e, index)}
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                Flag<strong className="text-danger">*</strong></label>
                            </div>
                            <div
                              className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                            >
                              <input
                                id='yearOfBuilt'
                                defaultValue={vesselInfo.yearOfBuilt}
                                className={`${styles.input_field} input form-control`}
                                type="number"
                                required
                                onChange={(e) => onVesselInfoChangeHandlerForBulk(e, index)}
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                Year of Built<strong className="text-danger">*</strong></label>
                            </div>
                            <div
                              className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                            >
                              <input
                                id='shippingLineOrCharter'
                                defaultValue={vesselInfo.shippingLineOrCharter}
                                className={`${styles.input_field} input form-control`}
                                required
                                type="text"
                                onChange={(e) => onVesselInfoChangeHandlerForBulk(e, index)}
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                Shipping Line/Charter</label>
                            </div>
                          </div>
                        </div>))
                    }</> : (
                      <>

                        <div className={`${styles.dashboard_form} card-body`}>
                          <h3 className={styles.sub_heading}>
                            Shipping Information
                          </h3>

                          <div className="row">
                            <div
                              className={`${styles.form_group} col-md-4 col-sm-6`}
                            >
                              <input
                                id='shippingLineOrCharter'
                                defaultChecked={val?.shippingInformation?.shippingLineOrCharter}
                                className={`${styles.input_field} input form-control`}
                                type="text"
                                onChange={(e) => shippingInfoChangeHandler(e, index)}
                                required
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
                                id='numberOfContainers'
                                defaultChecked={val?.shippingInformation?.numberOfContainers}
                                className={`${styles.input_field} input form-control`}
                                type="number"
                                onChange={(e) => shippingInfoChangeHandler(e, index)}
                                required
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
                                id='freeDetentionPeriod'
                                defaultChecked={val?.shippingInformation?.freeDetentionPeriod}
                                className={`${styles.input_field} input form-control`}
                                type="number"
                                onChange={(e) => shippingInfoChangeHandler(e, index)}
                                required
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
                        {list[0].vesselInformation.map((newVessel, index) => (
                          <div key={index} className={`${styles.dashboard_form} card-body`}>
                            <div className={`${styles.vessel_card}`}>
                              <div className="d-flex justify-content-between align-items-center">
                                <h3 className={styles.sub_heading}>
                                  Vessel Information
                                </h3>
                                <button onClick={() => OnAddvesselInformation()} className={styles.add_btn}>Add</button>
                              </div>
                              <div className="row">
                                <div
                                  className={`${styles.form_group} col-md-4 col-sm-6`}
                                >
                                  <input
                                    id='name'
                                    defaultValue={newVessel.name}
                                    className={`${styles.input_field} input form-control`}
                                    required
                                    type="text"
                                    onChange={(e) => onVesselInfoChangeHandlerForLiner(e, index)}
                                  />
                                  <label
                                    className={`${styles.label_heading} label_heading`}
                                  >
                                    Vessel Name</label>
                                </div>
                                <div
                                  className={`${styles.form_group} col-md-4 col-sm-6`}
                                >
                                  <input
                                    id='IMONumber'
                                    defaultValue={newVessel.IMONumber}
                                    className={`${styles.input_field} input form-control`}
                                    required
                                    type="text"
                                    onChange={(e) => onVesselInfoChangeHandlerForLiner(e, index)}
                                  />
                                  <label
                                    className={`${styles.label_heading} label_heading`}
                                  >
                                    IMO Number</label>
                                </div>
                                <div
                                  className={`${styles.form_group} col-md-4 col-sm-6`}
                                >
                                  <input
                                    id='flag'
                                    defaultValue={newVessel.flag}
                                    className={`${styles.input_field} input form-control`}
                                    required
                                    type="text"
                                    onChange={(e) => onVesselInfoChangeHandlerForLiner(e, index)}
                                  />
                                  <label
                                    className={`${styles.label_heading} label_heading`}
                                  >
                                    Flag</label>
                                </div>
                                <div
                                  className={`${styles.form_group} col-md-4 col-sm-6`}
                                >
                                  <input
                                    id='yearOfBuilt'
                                    defaultValue={newVessel.yearOfBuilt}
                                    className={`${styles.input_field} input form-control`}
                                    type="number"
                                    onChange={(e) => onVesselInfoChangeHandlerForLiner(e, index)}
                                    required
                                  />
                                  <label
                                    className={`${styles.label_heading} label_heading`}
                                  >
                                    Year of Built</label>
                                </div>
                              </div>
                            </div>
                          </div>))}
                        <hr></hr>
                        <div className={`${styles.dashboard_form} card-body`}>
                          <h3 className={styles.sub_heading}>
                            Container Number(s)
                          </h3>

                          <div
                            className={`${styles.form_group} d-flex justify-content-start`}
                          >
                            <button onClick={uploadDocHandler} className={`${styles.upload_btn}`}>
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
            <UploadOther module='Agreements,Insurance,LcOpening' orderid={id1} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
