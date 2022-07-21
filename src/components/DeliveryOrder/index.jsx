import React, { useState } from "react";
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import InspectionDocument from '../InspectionDocument'
import DateCalender from '../DateCalender'

export default function Index() {

  return (
    <>
      
        <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} mt-3 border_color`}>
          <div className={`${styles.main} mt-4 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Delivery Order</h3>
          
              <span>+</span>
           
            </div>
           
            <div className={`${styles.dashboard_form} card-body`}
                   >
                    <div className='row mb-5 mt-n3'>
                      <div className='col-lg-3 col-md-6 col-sm-6' style={{top:"35px"}}>
                      <div className={`${styles.label} text`}>
                        Commodity
                     </div>
                      <span className={styles.value}>Coal</span>
                    </div>
                <div className='col-lg-3 col-md-6 col-sm-6' style={{top:"35px"}}>
                      <div className={`${styles.label} text`}>
                       Invoice Quantity
                     </div>
                      <span className={styles.value}>20,000 MT</span>
                    </div>
                    </div>
                    <div className='row'>
                    <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="number"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Release Order Number<strong className="text-danger">*</strong></label>                   
                </div> 
                    <div className='col-lg-3 col-md-6 col-sm-6' style={{top:"35px"}}>
                      <div className={`${styles.label} text`}>
                        Quantity Released
                     </div>
                      <span className={styles.value}>20,000 MT</span>
                    </div>
                <div className='col-lg-3 col-md-6 col-sm-6' style={{top:"35px"}}>
                      <div className={`${styles.label} text`}>
                        Delivery Order No.
                     </div>
                      <span className={styles.value}>547896589</span>
                    </div>
                     <div className='col-lg-3 col-md-4 col-sm-6 text-center'  
                     style={{top:'50px'}}
                     > 
                     <button className={`${styles.generateBtn} ml-n5 mr-4 btn`}>Generate</button>
                     <img 
                      className={`${styles.edit_image} img-fluid mr-3`} 
                      src="/static/mode_edit.svg" 
                      alt="edit" />
                     <img
                      src="/static/add-btn.svg"
                      className={`${styles.delete_image} img-fluid`}
                      alt="add"
                    />
                    </div>
                    <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="number"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Release Order Number<strong className="text-danger">*</strong></label>                   
                </div> 
                    <div className='col-lg-3 col-md-6 col-sm-6' style={{top:"35px"}}>
                      <div className={`${styles.label} text`}>
                        Quantity Released
                     </div>
                      <span className={styles.value}>20,000 MT</span>
                    </div>
                <div className='col-lg-3 col-md-6 col-sm-6' style={{top:"35px"}}>
                      <div className={`${styles.label} text`}>
                        Delivery Order No.
                     </div>
                      <span className={styles.value}>547896589</span>
                    </div>
                     <div className='col-lg-3 col-md-4 col-sm-6 text-center'  
                     style={{top:'50px'}}
                     > 
                     <button className={`${styles.generateBtn} mr-4 ml-n5 btn`}>Generate</button>
                     <img 
                      className={`${styles.edit_image} img-fluid mr-3`} 
                      src="/static/mode_edit.svg" 
                      alt="edit" />
                     <img
                      src="/static/add-btn.svg"
                      className={`${styles.delete_image} img-fluid`}
                      alt="add"
                    />
                    </div>
                   
              
                  
                  </div>
                 
            </div>
          </div>
        
          </div>
          <SaveBar/>

              </div>
           </>

  )
}


