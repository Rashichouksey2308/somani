import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'
import { emailValidation, panValidation, phoneValidation } from 'utils/helper'

const index = ({saveCompanyData,setCheckbox}) => {
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
                  onChange={() => saveCompanyData("transactionType","Import")}
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
                  onChange={() => saveCompanyData("transactionType","Domestic")}
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </div>

          <div className={`${styles.input_container} row`}>
            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <label className={styles.label_heading} id="textInput">
                Company PAN
              </label>
              <input
                type="text"
                id="textInput"
                name="companyPan"
                onChange={(e) => {
                  if (panValidation(e.target.value)) {
                    saveCompanyData(e.target.name,e.target.value)
                  } else {
                    //red mark
                    console.log("Invalid Pan")
                  }
                }}
                className={`${styles.input_field} form-control`}
              />
            </div>

            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <label className={styles.label_heading} id="textInput">
                Company Name
              </label>
              <input
                type="text"
                onChange={(e) => saveCompanyData(e.target.name,e.target.value)}
                id="textInput"
                name="companyName"
                className={`${styles.input_field} form-control`}
              />
            </div>

            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <label className={styles.label_heading} id="drop">
                GST
              </label>
              <select
                id="drop"
                className={`${styles.input_field} form-control`}
              >
                <option value="gst">27AAATW4183C2ZG</option>
                <option value="gst1">282176JDEJ88UD</option>
                <option value="gst2">27AAATW46786C2ZG</option>
                <option value="gst3">VW5688TW4183C2ZG</option>
              </select>
            </div>
            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <label className={styles.label_heading} id="textInput">
                Type Of Business
              </label>
              <select
                id="Code"
                onChange={(e)=>{saveCompanyData(e.target.name,e.target.value)}}
                name="typeOfBusiness"
                className={`${styles.input_field} form-control`}
              >
                <option value="Manufacturer">Manufacturer</option>
                <option value="Retailer">Retailer</option>
                <option value="Trading">Trading</option>
              </select>
            </div>

            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <label className={styles.label_heading} id="textNumber">
                Phone
              </label>
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
                  name="phone"
                  onChange={(e) => {
                    if (phoneValidation(e.target.value)) {
                      saveCompanyData(e.target.name,e.target.value)
                      //green tick
                      console.log("is it validating?")
                    } else {
                      //red mark
                      console.log("phone formaat invalid")
                    }
                  }}
                  className={`${styles.input_field} form-control`}
                />
              </div>
            </div>

            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <label className={styles.label_heading} id="textInput">
                Email ID
              </label>
              <input
                type="text"
                id="textInput"
                onChange={(e) => {
                  if (emailValidation(e.target.value)) {
                    saveCompanyData(e.target.name,e.target.value)
                    //green tick
                  } else {
                    //red mark
                  }
                }}
                name="emailId"
                className={`${styles.input_field} form-control`}
              />
            </div>
            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <div className={styles.label_heading} style={{ marginTop: 10 }}>
                Turn Over(in Crores)
              </div>
              <div className={styles.slidecontainer}>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="20"
                  name="turnOver"
                  list="tickmarks"
                  onChange={(e)=>saveCompanyData(e.target.name,e.target.value)}
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
              className={`${styles.each_input} col-md-4 col-sm-6`}
              style={{ marginTop: -30 }}
            >
              <div className={styles.radio_form} style={{ paddingLeft: 10 }}>
                <div className={styles.sub_heading}>Communication Mode</div>
                <Form selected="">
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className={styles.radio_group}>
                      <Form.Check
                        className={styles.radio}
                        inline
                        defaultChecked={true}
                        label="Email ID"
                        onChange={() => saveCompanyData("communicationMode","email id")}
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="SMS"
                        name="group1"
                        onChange={() => saveCompanyData("communicationMode","SMS")}
                        type={type}
                        id={`inline-${type}-2`}
                      />

                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Whatsapp"
                        onChange={() => saveCompanyData("communicationMode","Whatsapp")}
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </Form>
              </div>
            </div>

            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <label className={styles.label_heading} id="drop">
                Whatsapp Number(Optional)
              </label>
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
                  name="whatsAppNumber"
                  onChange={(e) => {
                    if (phoneValidation(e.target.value)) {
                      saveCompanyData(e.target.name,e.target.value)
                      //green tick
                      console.log("is it validating?")
                    } else {
                      //red mark
                      console.log("phone formaat invalid")
                    }
                  }}
                  id="textNumber"
                  className={`${styles.input_field} form-control`}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default index
