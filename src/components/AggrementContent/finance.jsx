/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React ,{useState,useEffect}from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
  let finance={
    "name": "",
    "brachName": "",

        
 }
function Index(props) {

const[financeData,setFinanceData]=useState(finance)
  useEffect(() => {
   if(window){
    if(sessionStorage.getItem("Finance")){
      let savedData=JSON.parse(sessionStorage.getItem("Finance"))
      let finance={
        "name": savedData.name,
        "brachName": savedData.branch,
        
        
       }
      
       
       setFinanceData(finance)
    }
   }
  },[])
  useEffect(() => {
    if(props.saveData==true && props.active=="Finance"){
       let data={
        financeData:financeData,
      
        
        
       }
       props.sendData("Finance",data)
    }
    if(props.submitData==true && props.active=="Finance"){
      let data={
      financeData:financeData,
      
       
       }

      props.updateData("Finance",data)

    }
  },[props])
  const handleInput=(name,value,key)=>{
  

  const newInput = { ...financeData }

      newInput[name] = value
      setFinanceData(newInput)

  }
  return (
    <>
      <div className={styles.container}>
        <Form className={`${styles.form} border-bottom-0`}>
          <div className="row border-color ">

            <Form.Group className={`${styles.form_group} col-md-8 col-sm-6`}>
              <select
                className={`${styles.input_field} input form-control`}
                 name="name"
                value={financeData.name}
                 onChange={(e) => {
                  handleInput(e.target.name,e.target.value)
                }}
              >
                <option value="27AAATW4Ing Bank N.V183C2ZG">Ing Bank N.V</option>
              
              </select>
              <Form.Label
                className={`${styles.label_heading} ${styles.select}  label_heading`}
              >
                Name<strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>
                        <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <select
                className={`${styles.input_field} input form-control`}
                name="brachName"
                value={financeData.brachName}
                 onChange={(e) => {
                  handleInput(e.target.name,e.target.value)
                }}
              >
                <option value="Karol Bagh">Karol Bagh</option>
               
              </select>
              <Form.Label
                className={`${styles.label_heading} ${styles.select}  label_heading`}
              >
                Branch<strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>

              <div className={` ${styles.info} col-md-4 col-sm-6`}>
              <span>Country</span>
              <p>Amsterdam</p>
            </div>
              <div className={` ${styles.info} col-md-4 col-sm-6`}>
              <span>Swift Code</span>
              <p>FWE56D3R4</p>
            </div>
          </div>
        </Form>

      </div>
    </>
  )
}

export default Index
