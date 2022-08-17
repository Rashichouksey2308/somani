/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'
import { emailValidation, panValidation, phoneValidation } from 'utils/helper'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Index = ({
  saveCompanyData,
  saveOrderData,
  darkMode,
  mobileFunction,
  whatsappFunction,
  mobileCallingCodeFunction,
  whatsappCallingCodeFunction,
  handleCommunication,
}) => {
  const { gstList } = useSelector((state) => state.buyer)

  // console.log(gstList?.data, "THIS IS GST LIST")
  const [slider, setSlider] = useState(50)
  const [typeOfSlider, setSliderType] = useState(1)
  
  const [highlight, setHighlight] = useState(0)
  const [highlight3, setHighlight3] = useState(0)
 
 
  const setSlide=(val)=>{
    setSlider(val)
    getSlider(val)
  }
 
  useEffect(() => {getSlider()},[slider])
//   const getSlider =(val)=>{
//     console.log(slider,"slider8999")
//     if(slider >=  600){
//      console.log("slider3")
// return(
       
//             <div className={styles.slidecontainer}>
//                 <input
//                   type="range"
//                   min="500"
//                   max="1000"
//                   step="100"
//                   name="turnOver"
//                   list="tickmarks"
//                   onChange={(e) => {
//                     saveCompanyData(
//                       e.target.name,
//                       Number(e.target.value * 100),
//                     )
                    
//                     if(Number(e.target.value)==500){
//                       setSlide(400)
//                     }else{
//                        setSlider(Number(e.target.value))
//                     }
                    
//                     getSlider()
//                       if(e.target.value==500){
//                       setHighlight3(16)
//                     }
//                     if(e.target.value==600){
//                       setHighlight3(20)
//                     }
//                     if(e.target.value==700){
//                       setHighlight3(45)
//                     }
//                     if(e.target.value==800){
//                       setHighlight3(60)
//                     }  
//                     if(e.target.value==900){
//                       setHighlight3(80)
//                     }
//                     if(e.target.value==1000){
//                       setHighlight3(100)
//                     }
//                   }}
//                   className={`${styles.slider} px-0 input form-control`}
//                   id="myRange"
//                   style={{
//                     background: `linear-gradient(90deg, #3687E8 ${(highlight3)}%, #C3C3C31F ${
//                       highlight3
//                     }%)`,
//                   }}
//                 />
//                 <datalist id="tickmarks">
                   
//                   <option value="500" label="500"></option>
//                   <option value="600" label="600"></option>
//                   <option value="700" label="700"></option>
//                   <option value="800" label="800"></option>
//                   <option value="900" label="900"></option>
//                   <option value="1000" label="1000"></option>
                 
//                 </datalist>
               
//               </div>
               
//       )
//     }
//     if(slider > 100 && slider <= 500  ){
//        console.log("slider2")
//       return(
       
//             <div className={styles.slidecontainer}>
//                 <input
//                   type="range"
//                   min="100"
//                   max="600"
//                   step="100"
//                   name="turnOver"
//                   list="tickmarks"
//                   onChange={(e) => {
//                     saveCompanyData(
//                       e.target.name,
//                       Number(e.target.value),
//                     )
//                     console.log(e.target.value,"888")
//                   if(e.target.value==100){
//                       setHighlight(0)
//                     }
//                     if(e.target.value==200){
//                       setHighlight(20)
//                     }
//                     if(e.target.value==300){
//                       setHighlight(45)
//                     }
//                     if(e.target.value==400){
//                       setHighlight(60)
//                     }  
//                     if(e.target.value==500){
//                       setHighlight(80)
//                     }
//                     if(e.target.value==600){
//                       setHighlight(100)
//                     }
//                     if(Number(e.target.value) == 100){
//                        setSlider(0)
//                     }else if(Number(e.target.value) == 500){
//                       setSlide(500)
//                     }else{
//                       setSlider(Number(e.target.value))
//                     }
                    
                   
//                     getSlider()
//                   }}
//                   className={`${styles.slider} px-0 input form-control`}
//                   id="myRange"
//                   style={{
//                     background: `linear-gradient(90deg, #3687E8 
//                       ${(highlight)}%, #C3C3C31F ${
//                       (highlight)
//                     }%)`,
//                   }}
//                 />
//                 <datalist id="tickmarks">
                   
//                   <option value="100" label="100"></option>
//                   <option value="200" label="200"></option>
//                   <option value="300" label="300"></option>
//                   <option value="400" label="400"></option>
//                   <option value="500" label="500"></option>
//                   <option value="600" label="600"></option>
                
                  
                 
//                 </datalist>
              
//                 <div
//                   className={`${styles.less_label} d-flex justify-content-end mr-n2`}
//                 >
//                  or more
//                 </div>
//               </div>
               
//       )
//     }
//     if(slider <= 100){
//      console.log("slider1")
//       return(
       
//             <div className={styles.slidecontainer}>
//                 <input
//                   type="range"
//                   min="0"
//                   max="100"
//                   step="25"
//                   name="turnOver"
//                   list="tickmarks"
//                   onChange={(e) => {
//                     console.log(Number(e.target.value),"sadaasd")
//                     saveCompanyData(
//                       e.target.name,
//                       Number(e.target.value * 100),
//                     )
//                     if(Number(e.target.value==100)){
//                       setSlider(200)
//                     }else{
//                        setSlider(Number(e.target.value))
//                     }
                   
//                     getSlider()
//                   }}
//                   className={`${styles.slider} px-0 input form-control`}
//                   id="myRange"
//                   style={{
//                     background: `linear-gradient(90deg, #3687E8 ${(slider)}%, #C3C3C31F ${
//                       slider
//                     }%)`,
//                   }}
//                 />
//                 <datalist id="tickmarks">
//                   <option value="0" label="0"></option>
//                   <option value="25" label="25"></option>
//                   <option value="50" label="50"></option>
//                   <option value="75" label="75"></option>
//                   <option value="100" label="100"></option>
//                   {/* <option value="200" label="200"></option> */}
//                   {/* <option value="1000" label="1000"></option> */}
                 
//                 </datalist>
//                 <div
//                   className={`${styles.more_label} d-flex justify-content-end mr-n2`}
//                 >
//                   or more
//                 </div>
//               </div>
               
//       )
//     } 
   
   
 
    
//   }
const getSlider =(val)=>{
    console.log(slider,"slider8999")
    if(typeOfSlider ==  3){
     console.log("slider3")
return(
       
            <div className={styles.slidecontainer}>
                <input
                  type="range"
                  min="500"
                  max="1000"
                  step="100"
                  name="turnOver"
                  list="tickmarks"
                  onChange={(e) => {
                    saveCompanyData(
                      e.target.name,
                      Number(e.target.value * 100),
                    )
                    let high=((Math.abs(Number(e.target.value)-500)/1000)*100)
                   
                    setHighlight3(high)
                    if(Number(e.target.value)==500){
                      setSliderType(2)
                      setSlide(500)
                    }else{
                       setSlider(Number(e.target.value))
                    }
                    
                    getSlider()
                 
                  }}
                  className={`${styles.slider} px-0 input form-control`}
                  id="myRange"
                  style={{
                    background: `linear-gradient(90deg, #3687E8 ${(highlight3)}%, #C3C3C31F ${
                      highlight3
                    }%)`,
                  }}
                />
                <datalist id="tickmarks">
                   
                  <option value="500" label="500"></option>
                  <option value="600" label="600"></option>
                  <option value="700" label="700"></option>
                  <option value="800" label="800"></option>
                  <option value="900" label="900"></option>
                  <option value="1000" label="1000"></option>
                 
                </datalist>
               
              </div>
               
      )
    }
    if(typeOfSlider == 2  ){
     
      return(
       
            <div className={styles.slidecontainer}>
                <input
                  type="range"
                  min="100"
                  max="600"
                  step="100"
                  name="turnOver"
                  list="tickmarks"
                  onChange={(e) => {
                    saveCompanyData(
                      e.target.name,
                      Number(e.target.value),
                    )

                    let high=((Math.abs(Number(e.target.value))/600)*100)
                  
                    setHighlight(high)
                    if(Number(e.target.value) == 100){
                      setSliderType(1)
                      setSlider(0)
                    }
                    else if(Number(e.target.value) == 600){
                      setSliderType(3)
                      setSlide(500)
                    }else{
                      setSlider(Number(e.target.value))
                    }
                    
                   
                    getSlider()
                  }}
                  className={`${styles.slider} px-0 input form-control`}
                  id="myRange"
                  style={{
                    background: `linear-gradient(90deg, #3687E8 
                      ${(highlight)}%, #C3C3C31F ${
                      (highlight)
                    }%)`,
                  }}
                />
                <datalist id="tickmarks">
                   
                  <option value="100" label="100"></option>
                  <option value="200" label="200"></option>
                  <option value="300" label="300"></option>
                  <option value="400" label="400"></option>
                  <option value="500" label="500"></option>
                  <option value="600" label="600"></option>
                
                  
                 
                </datalist>
              
                <div
                  className={`${styles.less_label} d-flex justify-content-end mr-n2`}
                >
                 or more
                </div>
              </div>
               
      )
    }
    if(typeOfSlider == 1 ){
     console.log("slider1")
      return(
       
            <div className={styles.slidecontainer}>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="25"
                  name="turnOver"
                  list="tickmarks"
                  onChange={(e) => {
                    console.log(Number(e.target.value),"sadaasd")
                    saveCompanyData(
                      e.target.name,
                      Number(e.target.value * 100),
                    )
                    if(Number(e.target.value==100)){
                      setSliderType(2)
                      setSlider(200)
                    }else{
                       setSlider(Number(e.target.value))
                    }
                   
                    getSlider()
                  }}
                  className={`${styles.slider} px-0 input form-control`}
                  id="myRange"
                  style={{
                    background: `linear-gradient(90deg, #3687E8 ${(slider)}%, #C3C3C31F ${
                      slider
                    }%)`,
                  }}
                />
                <datalist id="tickmarks">
                  <option value="0" label="0"></option>
                  <option value="25" label="25"></option>
                  <option value="50" label="50"></option>
                  <option value="75" label="75"></option>
                  <option value="100" label="100"></option>
                  {/* <option value="200" label="200"></option> */}
                  {/* <option value="1000" label="1000"></option> */}
                 
                </datalist>
                <div
                  className={`${styles.more_label} d-flex justify-content-end mr-n2`}
                >
                  or more
                </div>
              </div>
               
      )
    } 
   
   
 
    
  }

  return (
    <>
      <div className={`${styles.main} border_color`}>
        <form id="CompanyDetailsForm">
          <div className="d-flex justify-content-between align-items-center">
            <div className={`${styles.heading} heading_card_switch_blue`}>
              Company Profile
            </div>
            <div className="mr-n5 d-flex">
              <div
                className={`${styles.unit_container} d-flex align-items-center`}
              >
                <h5 className={`${styles.unit_label} accordion_Text`}>
                  Quantity :
                </h5>
                <select
                  className={`${styles.options} accordion_DropDown input`}
                  name="unitOfQuantity"
                  onChange={(e) => saveOrderData(e.target.name, e.target.value)}
                >
                  <option>MT</option>
                </select>
              </div>

              <div
                className={`${styles.unit_container} d-flex align-items-center`}
              >
                <h5 className={`${styles.unit_label} accordion_Text`}>
                  Unit :
                </h5>
                <select
                  className={`${styles.options} accordion_DropDown input`}
                  name="unitOfValue"
                  onChange={(e) => saveOrderData(e.target.name, e.target.value)}
                >
                  <option>Crores</option>
                  <option>Millions</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.radio_form}>
            <div className={`${styles.sub_heading} sub_heading`}>
              Transaction Type <strong className="text-danger">*</strong>
            </div>
            {['radio'].map((type, index) => (
              <div key={`inline-${index}`} className={styles.radio_group}>
                <Form.Check
                  className={styles.radio}
                  inline
                  onChange={() => saveOrderData('transactionType', 'Import')}
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
                  onChange={() => saveOrderData('transactionType', 'Domestic')}
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </div>

          <div className={`${styles.input_container} vessel_card row`}>
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
                    let toastMessage = 'Invalid Pan'
                    if (!toast.isActive(toastMessage)) {
                      toast.error(toastMessage, { toastId: toastMessage })
                    }
                  }
                }}
                className={`${styles.input_field} input form-control`}
                required
              />
              <label
                className={`${styles.label_heading} label_heading`}
                id="textInput"
              >
                Company PAN<strong className="text-danger">*</strong>
              </label>
            </div>

            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <input
                type="text"
                onBlur={(e) => saveCompanyData(e.target.name, e.target.value)}
                value={gstList?.data?.companyData?.companyName}
                id="companyInput"
                name="companyName"
                className={`${styles.input_field} input form-control`}
                required
              />
              <label
                className={`${styles.label_heading} label_heading`}
                id="textInput"
              >
                Company Name<strong className="text-danger">*</strong>
              </label>
            </div>

            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="drop"
                  onChange={(e) => {
                    saveCompanyData(e.target.name, e.target.value)
                  }}
                  name="GST"
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  required
                >
                  {' '}
                  <option key={'0'}></option>
                  {gstList &&
                    gstList?.data?.gstList?.map((gstId, index) => (
                      <option key={index + 1} value={gstId}>
                        {gstId}
                      </option>
                    ))}
                  {/* <option value="gst1">282176JDEJ88UD</option>
                <option value="gst2">27AAATW46786C2ZG</option>
                <option value="gst3">VW5688TW4183C2ZG</option> */}
                </select>
                <label
                  className={`${styles.label_heading} label_heading`}
                  id="drop"
                >
                  GST<strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>
            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="Code"
                  onChange={(e) => {
                    saveCompanyData(e.target.name, e.target.value)
                  }}
                  name="typeOfBusiness"
                  className={`${styles.input_field}   ${styles.customSelect} input form-control`}
                  required
                >
                  <option value="" selected></option>
                  <option value="Manufacturer">Manufacturer</option>
                  <option value="Retailer">Retailer</option>
                  <option value="Trading">Trading</option>
                </select>
                <label
                  className={`${styles.label_heading} label_heading`}
                  id="textInput"
                >
                  Type Of Business<strong className="text-danger">*</strong>
                </label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </div>

            <div
              className={`${styles.each_input} ${styles.phone} col-md-4 col-sm-6`}
            >
              <div className={styles.phone_card}>
                <select
                  name="callingCode"
                  id="Code"
                  onChange={(e) => mobileCallingCodeFunction(e)}
                  className={`${styles.code_phone} input border-right-0`}
                >
                  <option>+91</option>
                  <option>+1</option>
                  <option>+92</option>
                  <option>+95</option>
                  <option>+24</option>
                </select>
                <input
                  type="tel"
                  id="textNumber"
                  name="primary"
                  onChange={(e) => {
                    if (phoneValidation(e.target.value)) {
                      // saveCompanyData(e.target.name, e.target.value)
                      mobileFunction(e)

                      //green tick
                    } else {
                      //red mark
                      let toastMessage = 'Phone no. invalid'
                      if (!toast.isActive(toastMessage)) {
                        toast.error(toastMessage, { toastId: toastMessage })
                      }
                    }
                  }}
                  className={`${styles.input_field} input form-control border-left-0`}
                  required
                />
                <label
                  className={`${styles.label_heading} label_heading`}
                  id="textNumber"
                >
                  Phone Number<strong className="text-danger">*</strong>
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
                    let toastMessage = 'Email Invalid'
                    if (!toast.isActive(toastMessage)) {
                      toast.error(toastMessage, { toastId: toastMessage })
                    }
                  }
                }}
                name="email"
                className={`${styles.input_field} input form-control`}
                required
              />
              <label
                className={`${styles.label_heading} label_heading`}
                id="textInput"
              >
                Email ID<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.each_input} col-md-6 col-lg-4 col-sm-6`}>
              <div
                className={`${styles.turnover_input} d-flex align-items-center justify-content-start`}
              >
                <div
                  className={`${styles.sub_heading} sub_heading label-heading`}
                >
                  Turn Over (in Crores)
                  <strong className="text-danger">*</strong>
                </div>
                <input className={`${styles.input_container} form-control input`} 
                type="number"
                value={slider}
                onChange={(e)=>{
                    
                  setSlider(Number(e.target.value))
                  if(Number(e.target.value)<= 100){
                    setSliderType(1)
                  }
                  if(Number(e.target.value) > 100 && Number(e.target.value) < 500 ){
                    let high=((Math.abs(Number(e.target.value))/600)*100)
                    console.log(high,"high",Number(e.target.value))
                    setHighlight(high)
                    setSliderType(2)
                  }
                  if(Number(e.target.value)>=500){
                     let high=((Math.abs(Number(e.target.value))/1000)*100)
                    console.log(high,"high",Number(e.target.value))
                    setHighlight3(high)
                    setSliderType(3)
                  }
                    getSlider()
                  }}
                />
              </div>
              {getSlider()}
            </div>
            <div
              className={`${styles.each_input} col-md-6 col-lg-4  col-sm-6`}
              style={{ marginTop: -1 }}
            >
              <div className={styles.radio_form} style={{ paddingLeft: 10 }}>
                <div className={`${styles.sub_heading} sub_heading`}>
                  Communication Mode<strong className="text-danger">*</strong>
                </div>
                <Form selected="">
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className={styles.radio_group}>
                      <Form.Check
                        className={`${styles.radio} radio`}
                        inline
                        // defaultChecked={true}
                        label="Email ID"
                        onChange={(e) =>
                          // saveCompanyData('communicationMode', 'Email')
                          handleCommunication(e)
                        }
                        name="Email"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        className={`${styles.radio} radio`}
                        inline
                        label="SMS"
                        name="SMS"
                        onChange={(e) =>
                          // saveCompanyData('communicationMode', 'SMS')
                          handleCommunication(e)
                        }
                        type={type}
                        id={`inline-${type}-2`}
                      />

                      <Form.Check
                        className={`${styles.radio} radio`}
                        inline
                        label="Whatsapp"
                        onChange={(e) => {
                          console.log(e, 'this is e')
                          // saveCompanyData('communicationMode', 'Whatsapp')
                          handleCommunication(e)
                        }}
                        name="Whatsapp"
                        // type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </Form>
              </div>
            </div>

            <div
              className={`${styles.each_input} ${styles.phone}  col-lg-4  col-md-6 col-sm-6`}
            >
              <div className={styles.phone_card}>
                <select
                  name="callingCode"
                  id="Code"
                  onChange={(e) => whatsappCallingCodeFunction(e)}
                  className={`${styles.code_phone} input border-right-0`}
                >
                  <option>+91</option>
                  <option>+1</option>
                  <option>+92</option>
                  <option>+95</option>
                  <option>+24</option>
                </select>
                <input
                  type="tel"
                  name="whatsapp"
                  onChange={(e) => {
                    if (phoneValidation(e.target.value)) {
                      // saveCompanyData(e.target.name, e.target.value)
                      whatsappFunction(e)
                      //green tick
                      console.log('is it validating?')
                    } else {
                      //red mark
                      console.log('phone formaat invalid')
                    }
                  }}
                  id="textNumber"
                  className={`${styles.input_field} input form-control border-left-0`}
                  required
                />
                <label
                  className={`${styles.label_heading} label_heading`}
                  id="drop"
                >
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

export default Index
