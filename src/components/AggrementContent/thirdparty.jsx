/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React ,{useState,useEffect}from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
 let delivery={
    "delivery": "",
    

        
 }
function Index(props) {
  console.log(props.submitData, props.active,"kk")
  const[deliveryData,setDeliveryData]=useState(delivery)
  useEffect(() => {
   if(window){
    if(sessionStorage.getItem("Delivery")){
      let savedData=JSON.parse(sessionStorage.getItem("Delivery"))
      let shipping={
       "delivery": savedData.name,
     
        
        
       }
      
       
       setDeliveryData(shipping)
    }else{
       let shipping={
       "delivery": props.data?.name,
      
        
        
       }
      
       
       setDeliveryData(shipping)
    }
   }
  },[props])
   useEffect(() => {
    if(props.saveData==true && props.active=="Delivery Terms"){
       let data={
        deliveryData:deliveryData,
      
        
        
       }
       props.sendData("Delivery",data)
    }
    if(props.submitData==true && props.active=="Delivery Terms"){
      console.log("this12")
      let data={
      deliveryData:deliveryData,
      
       
       }

      props.updateData("Delivery",data)

    }
  },[props])
    const handleInput=(name,value,key)=>{
  

  const newInput = { ...deliveryData }

      newInput[name] = value
      setDeliveryData(newInput)

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
                  name="countryOfOrigin"
                  onChange={(e) => {
                    handleInput(e.target.name,e.target.value)
                  }}
                  value={deliveryData.delivery}
                >
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
