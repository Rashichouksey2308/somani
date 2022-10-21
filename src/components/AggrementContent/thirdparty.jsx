/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'

function Index(props) {

  const [deliveryData, setDeliveryData] = useState('')
  const [monthOfLoadingCargo, setMonthOfLoadingCargo] = useState('')

  useEffect(() => {
    if (window) {
      if (sessionStorage.getItem('Delivery')) {
        let savedData = JSON.parse(sessionStorage.getItem('Delivery'))

        console.log('savd')
        setDeliveryData(savedData.deliveryTerms)
        setMonthOfLoadingCargo(savedData.monthOfLoadingCargo)
      }
    } else {
      setDeliveryData(props?.delivery?.deliveryTerms)
      setMonthOfLoadingCargo(props.delivery.monthOfLoadingCargo)
    }
  }, [props])

  useEffect(() => {
    if (props.saveData == true && props.active == 'Delivery Terms') {
      let data = {
        deliveryData: deliveryData,
        monthOfLoadingCargo:monthOfLoadingCargo
      }
      props.sendData('Delivery Terms', data)
    }
    if (props.submitData == true && props.active == 'Delivery Terms') {
      console.log('this12')
      let data = {
        deliveryData: deliveryData,
        monthOfLoadingCargo:monthOfLoadingCargo
      }
      console.log(data, deliveryData, 'deliveryData')
      props.updateData('Delivery Terms', data)
    }
  }, [props.saveData, props.submitData])

  const handleInput = (name, value, key) => {
    console.log(value, 'diler')

    setDeliveryData(value)
    let dataToSend2 = {
      deliveryTerms: value,
    }
    sessionStorage.setItem('Delivery', JSON.stringify(dataToSend2))
  }
  console.log(deliveryData, 'deliveryData')
  return (
    <>
      <div className={`${styles.container} vessel_card card-body p-0 `}>
        <Form className={`${styles.form} border_color`}>
          <div className="row border_color ">
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="delivery"
                  onChange={(e) => {
                    handleInput(e.target.name, e.target.value)
                  }}
                  value={deliveryData}
                >
                  <option value=''>
                    Select an option
                  </option>
                  <option value="CIF	Cost Insurance Freight Incoterms 2000">
                    CIF Cost Insurance Freight Incoterms 2000
                  </option>
                  <option
                    value={`CFR	Cost & Freight Incoterms 2000`}
                  >{`CFR	Cost & Freight Incoterms 2000`}</option>
                  <option value="DDP	Delivery Duties Paid Incoterms 2000">
                    DDP Delivery Duties Paid Incoterms 2000
                  </option>
                  <option value="">
                    EXW Ex Works Incoterms 2000
                  </option>
                  <option value="FOB	Free on Board Incoterms 2000">
                    FOB Free on Board Incoterms 2000
                  </option>
                </select>
                <Form.Label
                  className={`${styles.label_heading} ${styles.select}  label_heading`}
                >
                  Delivery Terms <strong className="text-danger">*</strong>
                </Form.Label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="delivery"
                  // onChange={(e) => {
                  //   handleInput(e.target.name, e.target.value)
                  // }}
                  
                >
                  <option selected>
                    Select an option
                  </option>
                  <option value="DaysfromBLDate">Days from BL Date</option>
                  <option value="DaysfromVesselDischargeDate">
                    {' '}
                    Days from Vessel Discharge Date{' '}
                  </option>
                  <option value="Whicheverisearlier">
                    Whichever is earlier
                  </option>
                </select>
                <Form.Label
                  className={`${styles.label_heading} ${styles.select}  label_heading`}
                >
                  Payment Terms <strong className="text-danger">*</strong>
                </Form.Label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="delivery"
                  onChange={(e) => {
                    setMonthOfLoadingCargo(e.target.value)
                    
                  }}
                  value={monthOfLoadingCargo}
                >
                  <option value=''>
                    Select an option
                  </option>
                  <option value="January">
                   January
                  </option>
                  <option
                    value={`February`}
                  >{`February`}</option>
                  <option value="March">
                    March
                  </option>
                  <option value="April">
                    April
                  </option>
                  <option value="May">
                   May
                  </option>
                   <option value="June">
                   June
                  </option>
                   <option value="July">
                   July
                  </option>
                   <option value="August">
                   August
                  </option>
                   <option value="September">
                   September
                  </option>
                   <option value="October">
                   October
                  </option>
                   <option value="November">
                   November
                  </option>
                   <option value="December">
                   December
                  </option>
                </select>
                <Form.Label
                  className={`${styles.label_heading} ${styles.select}  label_heading`}
                >
                   
 		
Month of loading of Cargo
<strong className="text-danger">*</strong>
                </Form.Label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            
            </Form.Group>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Index
