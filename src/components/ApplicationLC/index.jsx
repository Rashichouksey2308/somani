import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import {Row,Col,Container,Card} from 'react-bootstrap'
import LCAmendBar from '../LCAmendBar'
import TermsheetPopUp from '../TermsheetPopUp'
import { Form } from 'react-bootstrap'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'





function Index() {
  
  return (
      
      <>
       <div className={`${styles.root_container} tabHeader`}>
      <div  className={styles.head_container}>
        <div className={styles.head_header}>
          <img className={`${styles.arrow} img-fluid mr-3`}
            src="/static/keyboard_arrow_right-3.svg" alt="Arrow" />
          <h1 className={`${styles.heading} heading`}>Application for LC</h1>
        </div>
      </div>
    <div  className={`${styles.term_container} mb-3 mt-3 container-fluid`}>
       <Row className={`h-50`}>
           <Col sm={12} className={`d-flex justify-content-center align-items-center`}>
           <h3>APPLICATION FOR LETTER OF CREDIT</h3>
           </Col>
       </Row>
      
       <div className='d-flex justify-content-between'>
        <div>            
            <div className={styles.sub_heading}>Order ID: <span>2FCH6589</span></div>
            <div className={styles.sub_heading}>Buyer: <span>M/s Vishnu Chemicals Limited</span></div>

        </div>
        <div>
            <div className={`${styles.sub_heading} mt-4`}>Date: <span>16.02.2022</span></div>
        </div>
        </div>    
        </div>
      
        <Card className={styles.content}>
          <div>
        
            <Row> 
            <Col md={5} sm={6} xs={6} className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                   <li>1. Commodity Name</li>
                   <li>2. Quantity</li>
                   <li>3. Unit Price</li>
             </ol>
            
            </Col>
            <Col md={8} sm={6} xs={6}  className={`${styles.sub_contentValue} accordion_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 <li></li>
             </ul>
            </Col>
        </Row>
       </div>
                </Card>

      
    </div>
    <LCAmendBar/>
</>

  )
}

export default Index