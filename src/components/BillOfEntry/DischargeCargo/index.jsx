import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../../SaveBar'
import InspectionDocument from '../../InspectionDocument'
import DateCalender from '../../DateCalender'

export default function Index() {
  return (
    <>
      
        <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} border_color`}>

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
                     <div className='d-flex'>
                    <select className={`${styles.input_field} ${styles.customSelect} input form-control`}>
                    <option value="India">India</option>
                    <option value="America">America</option>
                  </select> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Vessel Name<strong className="text-danger">*</strong></label>    
                       <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>               
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
                  <div className="d-flex">
                    <DateCalender labelName='Vessel Arrival Date'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                   
                    </div> 
                   </div> 
                 <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                  <div className="d-flex">
                    <DateCalender labelName='Discharge Start Date'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                   
                    </div>       
                                   
                </div> 
                 <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                  <div className="d-flex">
                    <DateCalender labelName='Discharge End Date'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                   
                    </div>       
                                   
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


