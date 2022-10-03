/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React ,{useState,useEffect}from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
  let finance={
    "name": "",
    "branchName": "",

        
 }
function Index(props) {

const[financeData,setFinanceData]=useState(finance)
  useEffect(() => {
   if(window){
    if(sessionStorage.getItem("Finance")){
      let savedData=JSON.parse(sessionStorage.getItem("Finance"))
      let finance={
        "name": savedData.name,
        "branchName": savedData.branchName,
        
        
       }
      
       
       setFinanceData(finance)
    }else{
       let finance={
        "name": props.data?.name,
        "branchName": props.data?.branch,
        
        
       }
      
       
       setFinanceData(finance)
    }
   }
  },[props])
  useEffect(() => {
    if(props.saveData==true && props.active=="Financing Bank"){
       let data={
        financeData:financeData,
      
        
        
       }
       props.sendData("Financing Bank",data)
    }
    if(props.submitData==true && props.active=="Financing Bank"){
      let data={
      financeData:financeData,
      
       
       }

      props.updateData("Financing Bank",data)

    }
  },[props.saveData,props.submitData])
  const handleInput=(name,value,key)=>{
  

  const newInput = { ...financeData }

      newInput[name] = value
      setFinanceData(newInput)

  }
  console.log(financeData,"dsad")
  return (
    <>
      <div className={`${styles.container} vessel_card card-body p-0`}>
        <Form className={`${styles.form} border-bottom-0`}>
          <div className="row border_color ">

            <Form.Group className={`${styles.form_group} col-md-8 col-sm-6`}>
              <div className='d-flex'>
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="name"
                  value={financeData.name}
                  onChange={(e) => {
                    handleInput(e.target.name,e.target.value)
                  }}
                >
                   <option>Select an option</option>
                  <option value="Ing Bank N.V">Ing Bank N.V</option>
                
                </select>
                <Form.Label
                  className={`${styles.label_heading} ${styles.select}  label_heading`}
                >
                  Name<strong className="text-danger">*</strong>
                </Form.Label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className='d-flex'>
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="branchName"
                  value={financeData.branchName}
                  onChange={(e) => {
                    handleInput(e.target.name,e.target.value)
                  }}
                >
                  <option>Select an option</option>
                  <option value="Amsterdam">Amsterdam</option>
                
                </select>
                <Form.Label
                  className={`${styles.label_heading} ${styles.select}  label_heading`}
                >
                  Branch<strong className="text-danger">*</strong>
                </Form.Label>
                <img
                  className={`${styles.arrow}  image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </Form.Group>

            <div className={` ${styles.info} col-md-4 col-sm-6`}>
              <span className='label_heading'>Country</span>
              <p className='text-color'>India</p>
            </div>
            <div className={` ${styles.info} col-md-4 col-sm-6`}>
              <span className='label_heading'>Swift Code</span>
              <p className='text-color'>FWE56D3R4</p>
            </div>
          </div>
        </Form>

      </div>
    </>
  )
}

export default Index
