import React from 'react'
import {Card} from 'react-bootstrap'
import styles from './index.module.scss'
function index() {
  return (
       <Card className={styles.card}>
        <Card.Header className={styles.header}> Leads </Card.Header>
        <hr className={styles.hr}/>
         <Card.Body className={styles.body}>
          <div className={styles.leads}>
           <div  className={styles.leadsSub}>
             <img src=""></img>
           </div>
           <div  className={styles.lead_headContainer}>
            <div  className={styles.lead_header}>
            TOTAL LEADS
           </div>
             <div  className={styles.lead_value}>
             3,200
           </div>
           </div>
           
          </div>
          <div className={styles.verticalLine}></div>
           <div  className={styles.lead_headContainer}>
            <div  className={styles.lead_header}>
          APPROVED
           </div>
             <div  className={styles.lead_value}  style={{color:"#43C34D"}}>
            1,400
           </div>
           </div>
           <div  className={styles.lead_headContainer}>
            <div  className={styles.lead_header}>
          IN PROCESS
           </div>
             <div  className={styles.lead_value} style={{color:"#FF9D00"}}>
          648
           </div>
           </div>
           <div  className={styles.lead_headContainer}>
            <div  className={styles.lead_header} >
          REJECTED
           </div>
             <div  className={styles.lead_value}  style={{color:"#EA3F3F"}}>
            800
           </div>
           </div>
         </Card.Body>
       
   </Card>
  )
}

export default index