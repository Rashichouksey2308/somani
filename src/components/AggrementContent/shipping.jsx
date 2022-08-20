/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React ,{useState,useEffect}from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
  let shipping={
    "name": "",
    "vesselName": "",
    "gstin": "",

        
 }
function Index(props) {
  console.log(props.submitData,"submitData",props.active)
  const[shippingData,setShippingData]=useState(shipping)
    useEffect(() => {
   if(window){
    if(sessionStorage.getItem("Shipping")){
      let savedData=JSON.parse(sessionStorage.getItem("Shipping"))
      let shipping={
       "name": savedData.name,
      "vesselName": savedData.vesselName,
      "gstin": savedData.gstin,
        
        
       }
      
       
       setShippingData(shipping)
    }else{
       let shipping={
       "name": props.data?.name,
      "vesselName": props.data?.vesselName,
      "gstin": props.data?.gstin,
        
        
       }
      
       
       setShippingData(shipping)
    }
   }
  },[props])
  useEffect(() => {
    if(props.saveData==true && props.active=="Shipping Line"){
       let data={
        shippingData:shippingData,
      
        
        
       }
       props.sendData("Shipping Line",data)
    }
    if(props.submitData==true && props.active=="Shipping Line"){
      console.log("this12")
      let data={
      shippingData:shippingData,
      
       
       }

      props.updateData("Shipping Line",data)

    }
  },[props])
  const handleInput=(name,value,key)=>{
  

  const newInput = { ...shippingData }

      newInput[name] = value
      setShippingData(newInput)

  }
  return (
    <>
      <div className={`${styles.container} vessel_card`}>
        <Form className={`${styles.form} border-bottom-0`}>
          <div className="row border-bottom-0 border-color ">

             <Form.Group className={`${styles.form_group} d-flex  col-md-8 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                 name="name"
                value={shippingData.name}
                 onChange={(e) => {
                  handleInput(e.target.name,e.target.value)
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
               Name<strong className="text-danger">*</strong>
              </Form.Label>
                <img
                    className={`${styles.search_image} img-fluid`}
                    src="/static/search-grey.svg"
                    alt="Search"
                  />
            </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
               name="vesselName"
                value={shippingData.vesselName}
                 onChange={(e) => {
                  handleInput(e.target.name,e.target.value)
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
              Vessel Name
              </Form.Label>
            </Form.Group>
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="gstin"
                value={shippingData.gstin}
                 onChange={(e) => {
                  handleInput(e.target.name,e.target.value)
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
               GSTIN
              </Form.Label>
            </Form.Group>

          </div>
        </Form>

      </div>
    </>
  )
}

export default Index
