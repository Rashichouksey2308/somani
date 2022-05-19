import React from 'react'
import styles from "./index.module.scss"
import {Card} from 'react-bootstrap'

function index() {

 
  return (
      <Card className={styles.card}>
        <Card.Header className={styles.head}>
         <span>Company Profile</span>   
         <span class={styles.addicon}>+</span>     
        </Card.Header>
        {/* <hr className={styles.hr}/> */}
        <Card.Body className={styles.body}>
            {fields("Company Name","Ramakrishna Traders",false)}
            {fields("Company Name","Ramakrishna Traders",false)}
            {fields("Company Name","Ramakrishna Traders",false)}
            {fields("Company Name","Ramakrishna Traders",false)}
            {fields("Company Name","Ramakrishna Traders",false)}
            {fields("Company Name","Ramakrishna Traders",false)}
                            
            {fields("Company Name","Ramakrishna Traders",false)}
            {fields("Company Name","Ramakrishna Traders",false)}
            {fields("Company Name","Ramakrishna Traders",true)}
                        
        </Card.Body>
       
   </Card>
  )
}

export default index

 const fields =(head,value,isButton)=>{
    return(
      <>
       <div className={styles.filed_container}>
         <span className={styles.top}>{head}</span>
         <div>
           <span className={styles.value}>
           {value}
           
         </span>
         {isButton?<span className={styles.button}>View</span>:null}
         </div>
       </div>
      </>
    )
  }