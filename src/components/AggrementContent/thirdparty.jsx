/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React ,{useState,useEffect}from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
function Index(props) {
 
  const[deliveryData,setDeliveryData]=useState("")
useEffect(() => {
if(window){
if(sessionStorage.getItem("Delivery")){
let savedData=JSON.parse(sessionStorage.getItem("Delivery"))


console.log("savd")
setDeliveryData(savedData.deliveryTerms)
}
}
},[props])
useEffect(() => {
if(props.saveData==true && props.active=="Delivery Terms"){
let data={
deliveryData:deliveryData,



}
props.sendData("Delivery Terms",data)
}
if(props.submitData==true && props.active=="Delivery Terms"){
console.log("this12")
let data={
deliveryData:deliveryData,


}
console.log(data,deliveryData,"deliveryData")
props.updateData("Delivery Terms",data)

}
},[props])
const handleInput=(name,value,key)=>{

console.log(value,"diler")

setDeliveryData(value)

}
  return (
    
    <>
      <div className={`${styles.container} vessel_card`}>
        <Form className={`${styles.form}`}>
          <div className="row border-color ">
           <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className='d-flex'>
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="delivery"
                  onChange={(e) => {
                    handleInput(e.target.name,e.target.value)
                  }}
                  value={deliveryData}
                >
                 <option>Select an option</option>
                  <option value="27AAATW4183C2ZG">27AAATW4183C2ZG</option>
                  <option value="India">India</option>
                  <option value="America">America</option>
                  <option value="Russia">Russia</option>
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
          </div>
        </Form>
 
      </div>
    </>
  )
}

export default Index
