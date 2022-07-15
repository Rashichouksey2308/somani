import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../../SaveBar'
import InspectionDocument from '../../InspectionDocument'

export default function Index() {
  return (
    <>
      
        <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} mt-3 border_color`}>

          <div className={`${styles.main} mt-4 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Discharge of Cargo</h3>
          
              <div className='d-flex'>

              <button className={styles.add_btn}>Show BL Details</button>
              <span className='ml-3' >+</span>
           </div>
            </div>
            <div className={`${styles.dashboard_form} mt-3 card-body`}>
            <div className='row'>

                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                    <select className={`${styles.input_field} input form-control`}>
                    <option value="India">India</option>
                    <option value="America">America</option>
                  </select> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Vessel Name<strong className="text-danger">*</strong></label>                   
                </div> 
                 <div className='col-lg-4 col-md-6 col-sm-6'
                 >
                  <div className={`${styles.label_heading} text`}
                        style={{paddingTop:"30px" , paddingBottom:"10px"} }>
                    Port of Discharge 
                  </div>
                  <span className={styles.value}>Visakhapatnam</span>
                </div>
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="number"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Discharge Quantity<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="date"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Vessel Arrival Date<strong className="text-danger">*</strong></label>                   
                </div> 
                 <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="date"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Discharge Start Date<strong className="text-danger">*</strong></label>                   
                </div> 
                 <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="date"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Discharge End Date<strong className="text-danger">*</strong></label>                   
                </div> 
                
                  </div>
           
            </div>
        
          </div>
         <div className='mt-4 mb-5'>
         <InspectionDocument/>
         </div>
          </div>
          <SaveBar/>

              </div>
           </>

  )
}


