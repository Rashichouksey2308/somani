import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'
import { emailValidation, panValidation, phoneValidation } from 'utils/helper'
import { useSelector } from 'react-redux'

const index = ({ saveCompanyData, setCheckbox }) => {

  const {gstList} = useSelector((state) =>  state.buyer)
  console.log(gstList, "this is gst")
  

  return (
    <>
      <div className={styles.main}>
        <form id="CompanyDetailsForm">
          <div className={styles.heading}>Company Profile</div>
          <div className={styles.radio_form}>
            <div className={styles.sub_heading}>Transaction Type</div>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className={styles.radio_group}>
                <Form.Check
                  className={styles.radio}
                  inline
                  onChange={() => saveCompanyData("transactionType", "Import")}
                  label="Import"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className={styles.radio}
                  inline
                  label="Domestic"
                  name="group1"
                  onChange={() => saveCompanyData("transactionType", "Domestic")}
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </div>

          <div className={`${styles.input_container} row`}>
            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <input
                type="text"
                id="textInput"
                name="companyPan"
                onChange={(e) => {
                  if (panValidation(e.target.value)) {
                    saveCompanyData(e.target.name, e.target.value)
                  } else {
                    //red mark
                    console.log("Invalid Pan")
                  }
                }}
                className={`${styles.input_field} form-control`}
                required
              />
              <label className={styles.label_heading} id="textInput">
                Company PAN<strong className='text-danger'>*</strong>
              </label>
            </div>

            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <input
                type="text"
                onChange={(e) => saveCompanyData(e.target.name, e.target.value)}
                id="textInput"
                name="companyName"
                className={`${styles.input_field} form-control`}
                required
              />
              <label className={styles.label_heading} id="textInput">
                Company Name<strong className='text-danger'>*</strong>
              </label>
            </div>

            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <select
                id="drop"
                onChange={(e)=> {saveCompanyData(e.target.name, e.target.value)}}
                name= "gst"
                className={`${styles.input_field} form-control`}
                required
              >
                <option value="gst">27AAATW4183C2ZG</option>
                <option value="gst1">282176JDEJ88UD</option>
                <option value="gst2">27AAATW46786C2ZG</option>
                <option value="gst3">VW5688TW4183C2ZG</option>
              </select>
              <label className={styles.label_heading} id="drop">
                GST<strong className='text-danger'>*</strong>
              </label>
            </div>
            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <select
                id="Code"
                onChange={(e) => { saveCompanyData(e.target.name, e.target.value) }}
                name="typeOfBussiness"
                className={`${styles.input_field} form-control`}
                required
              >
                <option value="Manufacturer">Manufacturer</option>
                <option value="Retailer">Retailer</option>
                <option value="Trading">Trading</option>
              </select>
              <label className={styles.label_heading} id="textInput">
                Type Of Business<strong className='text-danger'>*</strong>
              </label>
            </div>

            <div className={`${styles.each_input} ${styles.phone} col-md-4 col-sm-6`}>
              <div className={styles.phone_card}>
                <select id="Code" className={styles.code_phone}>
                  <option>+91</option>
                  <option>+1</option>
                  <option>+92</option>
                  <option>+95</option>
                  <option>+24</option>
                </select>
                <input
                  type="number"
                  id="textNumber"
                  name="phoneNumber"
                  onChange={(e) => {
                    if (phoneValidation(e.target.value)) {
                      saveCompanyData(e.target.name, e.target.value)
                      //green tick
                      console.log("is it validating?")
                    } else {
                      //red mark
                      console.log("phone formaat invalid")
                    }
                  }}
                  className={`${styles.input_field} form-control`}
                  required
                />
                <label className={styles.label_heading} id="textNumber">
                  Phone<strong className='text-danger'>*</strong>
                </label>
              </div>
            </div>

            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <input
                type="text"
                id="textInput"
                onChange={(e) => {
                  if (emailValidation(e.target.value)) {
                    saveCompanyData(e.target.name, e.target.value)
                    //green tick
                  } else {
                    //red mark
                  }
                }}
                name="emailId"
                className={`${styles.input_field} form-control`}
                required
              />
              <label className={styles.label_heading} id="textInput">
                Email ID<strong className='text-danger'>*</strong>
              </label>
            </div>
            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <div className={`${styles.label_heading} ml-n3`}>
                Turn Over(in Crores)<strong className='text-danger'>*</strong>
              </div>
              <div className={styles.slidecontainer}>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="20"
                  name="turnOver"
                  list="tickmarks"
                  onChange={(e) => saveCompanyData(e.target.name, e.target.value)}
                  className={`${styles.slider} form-control`}
                  id="myRange"
                />
                <datalist id="tickmarks">
                  <option value="0" label="0"></option>
                  <option value="20" label="20"></option>
                  <option value="40" label="40"></option>
                  <option value="60" label="60"></option>
                  <option value="80" label="80"></option>
                  <option value="100" label="100"></option>
                </datalist>
              </div>
            </div>
            <div
              className={`${styles.each_input} col-md-4 col-sm-6`} style={{ marginTop: -1 }}>
              <div className={styles.radio_form} style={{ paddingLeft: 10 }}>
                <div className={styles.sub_heading}>Communication Mode<strong className='text-danger'>*</strong></div>
                <Form selected="">
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className={styles.radio_group}>
                      <Form.Check
                        className={styles.radio}
                        inline
                        // defaultChecked={true}
                        label="Email ID"
                        onChange={() => saveCompanyData("communicationMode", "email id")}
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="SMS"
                        name="group1"
                        onChange={() => saveCompanyData("communicationMode", "SMS")}
                        type={type}
                        id={`inline-${type}-2`}
                      />

                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Whatsapp"
                        onChange={() => saveCompanyData("communicationMode", "Whatsapp")}
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </Form>
              </div>
            </div>

            <div className={`${styles.each_input} ${styles.phone} col-md-4 col-sm-6`}>
              <div className={styles.phone_card}>
                <select id="Code" className={styles.code_phone}>
                  <option>+91</option>
                  <option>+1</option>
                  <option>+92</option>
                  <option>+95</option>
                  <option>+24</option>
                </select>
                <input
                  type="number"
                  name="whatsappNumber"
                  onChange={(e) => {
                    if (phoneValidation(e.target.value)) {
                      saveCompanyData(e.target.name, e.target.value)
                      //green tick
                      console.log("is it validating?")
                    } else {
                      //red mark
                      console.log("phone formaat invalid")
                    }
                  }}
                  id="textNumber"
                  className={`${styles.input_field} form-control`}
                  required
                />
                <label className={styles.label_heading} id="drop">
                  Whatsapp Number(Optional)
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default index
