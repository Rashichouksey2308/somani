/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import DateCalender from '../DateCalender'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function Index({inspectionData}) {

  const [startDate, setStartDate] = useState(new Date())

  const [isEdit, setIsEdit] = useState(false)

  const [appointmentData, setAppointmentData] = useState()

  useEffect(() => {
    setAppointmentData({
      name: inspectionData?.thirdPartyAppointment?.name,
      dateOfAppointment : inspectionData?.thirdPartyAppointment?.dateOfAppointment,
      address: inspectionData?.thirdPartyAppointment?.address
    })
    setAddressData({name: inspectionData?.thirdPartyAppointment?.name,
      dateOfAppointment : inspectionData?.thirdPartyAppointment?.dateOfAppointment,
      address: inspectionData?.thirdPartyAppointment?.address})
  }, [inspectionData])

  const [addressData, setAddressData] = useState({
    name: '',
    dateOfAppointment: '',
    address: ''
  })

  const saveAppointmentData = (name, value) => {
    let newInput = {...appointmentData}
    newInput[name] = value
    setAppointmentData(newInput)
  }

  const saveDate = (value, name) => {
    const d = new Date(value)
    let text = d.toISOString()
    saveAppointmentData(name, text)
  }

  const handleEdit = () => {
    setIsEdit(true)
  }

  const handleEditInput = (name, value) => {
    let newInput = {...addressData}
    newInput[name] = value
    setAddressData(newInput)

  }

  const handleEditCancel = () => {
    setIsEdit(false)
    setAddressData({address : ''})
  }

  const handleOnAdd = () => {
    setAppointmentData(addressData)
  }
  

  

  return (
    <>
      <div
        className={`${styles.backgroundMain} container-fluid p-0 background2`}
      >
        <div className={`${styles.vessel_card}`}>
          <div className={`${styles.main} card border-color`}>
            <div
              className={`${styles.head_container} border_color card-header head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>
                Appointment of Third Party
              </h3>
              <span>+</span>
            </div>

            <div className={`${styles.dashboard_form} mt-2 mb-4 card-body`}>
              <div className="row">
                <div
                  className={`${styles.form_group} col-lg-6 col-md-6 col-sm-6`}
                >
                  <div className="d-flex">
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      name='name'
                      onChange={(e)=>saveAppointmentData(e.target.name,e.target.value)}
                      required
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Name<strong className="text-danger">*</strong>
                    </label>
                    <img
                      className={`${styles.search_image} img-fluid`}
                      src="/static/search-grey.svg"
                      alt="Search"
                    />
                  </div>
                </div>
                <div
                  className={`${styles.form_group} col-lg-6 col-md-6 col-md-6`}
                >
                  <div className="d-flex">
                    {/* <DateCalender labelName='ETA at Discharge Port'/>
                      <img
                          className={`${styles.calanderIcon} img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                      /> */}
                    <DatePicker
                      name="dateOfAppointment"
                      selected={startDate}
                      dateFormat="dd/MM/yyyy"
                      className={`${styles.input_field} input form-control`}
                      onChange={(startDate) => {
                        setStartDate(startDate)
                        saveDate(startDate, 'dateOfAppointment')
                      }}
                    />
                    <img
                      className={`${styles.calanderIcon} img-fluid`}
                      src="/static/caldericon.svg"
                      alt="Search"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Date of Appointment
                    </label>
                  </div>
                </div>
                <div
                  className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}
                >
                  <label className={`${styles.comment_heading}`}>Address</label>

                  <div
                    className={`${styles.comment_field} w-100 d-flex justify-content-between mt-2 form-control`}
                  >
                    <div className="m-3">
                      <div className={`${styles.address_type}`}>
                        Registered Address
                      </div>
                      <div className={`${styles.address_detail} mt-3`}>
                        {appointmentData?.address}
                      </div>
                    </div>
                    <img
                      className={`${styles.edit_image} img-fluid mr-3`}
                      src="/static/mode_edit.svg"
                      alt="edit"
                      onClick={()=> {handleEdit()}}
                    />
                  </div>
                </div>
              </div>

             {isEdit && editData(handleEditCancel, handleEditInput, handleOnAdd)}
            </div>
          </div>
        </div>
        <SaveBar rightBtn="Submit" />
      </div>
    </>
  )
}

const editData = (handleEditCancel, handleEditInput, handleOnAdd) => {
  return (
    <div className={`${styles.newAddressContainer} mt-3`}>
    <div className={`${styles.newAddressHead}`}>
      <span>Add a new address</span>
    </div>
    <div className={`${styles.newAddressContent} row`}>
      <Form.Group
        className={`${styles.form_group} col-md-4 col-sm-6`}
      >
        <input
          className={`${styles.input_field} ${styles.customSelect} input form-control`}
          name="addressType"
          disabled
          value='Registered Address'
        />

        <Form.Label
          className={`${styles.label_heading} ${styles.select} label_heading`}
        >
          Address Type<strong className="text-danger">*</strong>
        </Form.Label>
      </Form.Group>
      <Form.Group
        className={`${styles.form_group}  col-md-12 col-sm-6`}
      >
        <Form.Control
          className={`${styles.input_field} input form-control`}
          required
          type="text"
          name="address"
          onChange={(e) => {
            handleEditInput(e.target.name, e.target.value)
          }}
        />
        <Form.Label
          className={`${styles.label_heading} label_heading`}
        >
          Address<strong className="text-danger">*</strong>
        </Form.Label>
      </Form.Group>
    </div>
    <div className="d-flex">
      <div
      onClick={()=> handleOnAdd()} className={`${styles.add} d-flex justify-content-center align-items-center`}
      >
        <span>Add</span>
      </div>
      <div
      onClick={()=>handleEditCancel()}  className={`${styles.cancel} d-flex justify-content-center align-items-center`}
      >
        <span>Cancel</span>
      </div>
    </div>
  </div>
  )
}
