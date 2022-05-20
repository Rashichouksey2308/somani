import React from 'react'
import Card from 'react-bootstrap/Card'
import styles from './index.module.scss'
import CompanyDetails from '../CompanyDetails'
import OrderDetails from '../OrderDetails'
import Documents from '../Documents'
import Terms from '../Terms'

const index = () => {
  return (
    <div>
      <Card className={styles.card}>
        <Card.Header className={styles.head_container}> 
        <div className={styles.head_header}>
        <img className={styles.arrow} 
        src="/static/keyboard_arrow_right-3.svg"/>
        <h1 className={styles.heading}>Register Your Company</h1>
        </div>
        <div>
          <button className={styles.clear_btn}>Clear All</button>
        </div>
         </Card.Header>
        
         <Card.Body className={styles.body}>
           
         <CompanyDetails/>
         <hr className={styles.line}></hr>
         <OrderDetails/>
         <hr className={styles.line}></hr>
         <Documents/>   
         <hr className={styles.line}></hr>
         <Terms/>
         </Card.Body>
       
   </Card>
    </div>
  )
}

export default index
