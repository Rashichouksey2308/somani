/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'
import DateCalender from '../DateCalender'
import { addPrefixOrSuffix } from 'utils/helper'
import {CovertvaluefromtoCR} from '../../utils/helper'

const Index = ({ orderDetail, saveOrderData }) => {
  const saveDate = (value, name) => {
    const d = new Date(value)
    let text = d.toISOString()
    saveOrderData(name, text)
  }
  console.log(orderDetail,"orderDetail")
  return (
    <div className={`${styles.main} vessel_card card border-color`}>
      <div
        className={`${styles.head_container} card-header border_color head_container d-flex justify-content-between bg-transparent`}>
        <h3 className={`${styles.heading} mb-0`}>Order Summary</h3>
        <div className="d-flex">
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>
              Quantity :
            </h5>
            <select className={`${styles.options} accordion_DropDown`} name='unitOfQuantity' 
            onChange={(e)=>{saveOrderData(e.target.name, e.target.value)}}>
              <option>{orderDetail?.unitOfQuantity?.toUpperCase()}</option>
              {/* <option selected>MT</option> */}
            </select>
          </div>

          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <select className={`${styles.options} accordion_DropDown `} name='unitOfValue' 
            onChange={(e)=>saveOrderData(e.target.name, e.target.value)}>
              <option>Crores</option>
            
              {/* <option selected>Crores</option> */}
              <option>Million</option>
            </select>
            <span data-toggle="collapse" data-target="#orderSummary" aria-expanded="true" aria-controls="orderSummary">+</span>
          </div>
        </div>
      </div>
      <div
        id="orderSummary"
        className="collapse"
        aria-labelledby="orderSummary"
       
      >
        <div className={`${styles.dashboard_form} card-body border_color`}>
          <div className={styles.radio_form}>
            <div className={styles.sub_heading}>Transaction Type</div>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className={styles.radio_group}>
                <Form.Check
                  className={styles.radio}
                  inline
                  label="Import"
                  onChange={(e)=>{saveOrderData("transactionType", "Import")}}
                  defaultChecked={orderDetail?.transactionType === 'Import'}
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className={styles.radio}
                  inline
                  label="Domestic"
                  onChange={(e)=>{saveOrderData("transactionType", "Domestic")}}
                  defaultChecked={orderDetail?.transactionType === 'Domestic'}
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </div>
          <Form>
            <div className="row">
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="commodity"
                    defaultValue={orderDetail?.commodity}
                    onChange={(e) => {
                      saveOrderData(e.target.name, e.target.value)
                    }}
                  />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    Commodity<strong className="text-danger">*</strong>
                  </Form.Label>
                  <img
                    className={`${styles.search_image} img-fluid`}
                    src="/static/search-grey.svg"
                    alt="Search"
                  />
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="quantity"
                  value={addPrefixOrSuffix(orderDetail?.quantity,orderDetail?.unitOfQuantity?.toUpperCase())}
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Quantity<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="orderValue"
                  value={addPrefixOrSuffix(CovertvaluefromtoCR(orderDetail?.orderValue),orderDetail?.unitOfValue=="Crores"?"Cr":orderDetail?.unitOfValue)}
                 
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Order Value<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="grade"
                  defaultValue={orderDetail?.grade}
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Grade<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                   <select className={`${styles.input_field} ${styles.customSelect} input form-control`} 
                   name='countryOfOrigin'  onChange={(e) => { saveOrderData(e.target.name, e.target.value) }} 
                   value={orderDetail?.countryOfOrigin}
                   required>
                  
                 
                  <option value="India">India</option>
                  <option value="America">Australia</option>
                  <option value="Russia"> Sri Lanka</option>
                  <option value="Russia"> Qatar</option>
                  <option value="Russia"> Dubai</option>
                </select>
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Country Of Origin<strong className="text-danger">*</strong>
                </Form.Label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
               
              
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="tolerance"
                  value={addPrefixOrSuffix(orderDetail?.tolerance,"%")}
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Tolerance (+/-) Percentage
                  <strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                 <div className="d-flex">
                <select className={`${styles.input_field} ${styles.customSelect} input form-control`} name='supplierName'  onChange={(e) => { saveOrderData(e.target.name, e.target.value) }} required>
                  
                  <option value="TATA">TATA</option>
                  <option value="Mittal">Mittal</option>
                  <option value="Reliance">Reliance</option>
                </select>
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Supplier Name<strong className="text-danger">*</strong>
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
                <select className={`${styles.input_field} ${styles.customSelect} input form-control`} value={orderDetail?.manufacturerName} name='manufacturerName'  onChange={(e) => { saveOrderData(e.target.name, e.target.value) }} >
                  
                  <option value="CBX">CBX</option>
                  <option value="ABX">ABX</option>
                </select>
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Manufacturer / Mines name
                  <strong className="text-danger">*</strong>
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
                <select className={`${styles.input_field} ${styles.customSelect} input form-control`} value={orderDetail?.portOfDischarge} name='portOfDischarge'  onChange={(e) => { saveOrderData(e.target.name, e.target.value) }} required>
                 
                  <option value="Mumbai">Mumbai</option>
                  <option value="Vizag">Vizag</option>
                </select>
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Port Of Discharge<strong className="text-danger">*</strong>
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
                <select className={`${styles.input_field}  ${styles.customSelect} input form-control`} name='incoTerm' onChange={(e) => { saveOrderData(e.target.name, e.target.value) }} required>
                  <option value="volvo">{orderDetail?.incoTerm}</option>
                  <option value="CFR">CFR</option>
                  <option value="CIF">CIF</option>
                  <option value="FOB">FOB</option>
                </select>
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  INCO Terms<strong className="text-danger">*</strong>
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
                    <DateCalender name='ExpectedDateOfShipment'  defaultDate={orderDetail?.ExpectedDateOfShipment?.split('T')[0]} saveDate={saveDate} labelName='Laycan at Load Port from'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                      
                    </div>  
                {/* <div className="d-flex">
                <input
                  className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                  type="date"
                  defaultValue={orderDetail?.ExpectedDateOfShipment.split('T')[0]}
                  name='ExpectedDateOfShipment'
                  onChange={(e) => { saveDate(e, e.target.value) }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Expected Date Of Shipment
                  <strong className="text-danger">*</strong>
                </Form.Label>
              
                <img
                    className={`${styles.calanderIcon} img-fluid`}
                    src="/static/caldericon.svg"
                    alt="Search"
                  />
                
                </div> */}
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  defaultValue={orderDetail?.transactionPeriodDays}
                  name="transactionPeriodDays"
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Transaction Period (Days)
                  <strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>
              {/* <div className={styles.button}>
                <span>Submit</span>
              </div> */}
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Index
