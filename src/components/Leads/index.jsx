import React from 'react'
import {Card} from 'react-bootstrap'
import styles from './index.module.scss'
function index(props) {
  return (
       <Card className={styles.card}>
        <Card.Header className={styles.header}> {props.header} </Card.Header>
         <Card.Body className={styles.body}>
          <div className={styles.leads}>
           <div  className={styles.leadsSub}>
             <img src={`${props.image}`} className={styles.image}></img>
           </div>
           <div  className={styles.lead_headContainer}>
            <div  className={styles.lead_header}>
           {props.subHeader}
           </div>
             <div  className={styles.lead_value}>
             3,200
           </div>
           </div>
           
          </div>
          <div className={styles.verticalLine}></div>
           <div  className={styles.lead_headContainer}>
            <div  className={styles.lead_header}>
            {props.content[0]}
           </div>
             <div  className={styles.lead_value}  style={{color:"#43C34D"}}>
            1,400
           </div>
           </div>
           <div  className={styles.lead_headContainer}>
            <div  className={styles.lead_header}>
           {props.content[1]}
           </div>
             <div  className={styles.lead_value} style={{color:"#FF9D00"}}>
          648
           </div>
           </div>
           <div  className={styles.lead_headContainer}>
            <div  className={styles.lead_header} >
           {props.content[2]}
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