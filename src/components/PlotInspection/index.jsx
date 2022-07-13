import React from 'react'
import styles from './index.module.scss'
import { Form} from 'react-bootstrap'
import InspectionDocument from '../InspectionDocument'
import SaveBar from '../SaveBar'


export default function Index() {
  return (
    <>
        <div className={`${styles.backgroundMain} container-fluid background2`}>
        <div className={`${styles.vessel_card}`}>
        <div className={`${styles.main} mt-4 card border-color`}>
        <div className={`${styles.head_container} border_color card-header head_container justify-content-between d-flex bg-transparent`} >
        <h3 className={`${styles.heading}`}>Plot Inspection</h3>
       
                </div>  
       
                <div className={`${styles.dashboard_form} mt-2 mb-4 card-body`}>
                  <div className='row'>
                  <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} type="date"/> 
                     <label className={`${styles.label_heading} label_heading`}>Plot Inspection Date<strong className="text-danger ml-1">*</strong></label>                   
                </div> 
                   

                  </div>

                </div>
            </div>
            <div className='mt-4'>
           <InspectionDocument/>
           </div>
              </div>
              <SaveBar/>
              </div>
           </>

  )
}


