import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import InspectionDocument from '../InspectionDocument'

export default function Index() {
  
  return (
    <>
      
        <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} mt-3 border_color`}>

        
          <div className={`${styles.main} mt-4 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Release Order</h3>
          
              <button className={styles.add_btn}><span className={styles.add_sign}>+</span>Add</button>
           
            </div>
            <div className={`${styles.dashboard_form} card-body`}>
           
                    <div className='row'>
                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                      Commodity <strong className="text-danger ml-n1">*</strong> 
                     </div>
                      <span className={styles.value}>Iron</span>
                    </div>
                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                      Quantity <strong className="text-danger ml-n1">*</strong></div>
                      <span className={styles.value}>500 Mt</span>
                    </div>
                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                       Vessel Name <strong className="text-danger ml-n1">*</strong> </div>
                      <span className={styles.value}>Iron</span>
                    </div>
                     <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                       Vessel Name <strong className="text-danger ml-n1">*</strong> </div>
                      <span className={styles.value}>Iron</span>
                    </div>
                  </div>
                  </div>
                    <div className={`${styles.dashboard_form} card-body`}
                    style={{borderTop: "2px solid #CAD6E6"}}>
                        <div className={`${styles.form_heading} mt-2`}>Release Order Details</div>
                    <div className='row ml-auto'>
                     <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `} >
                          <div className={`${styles.label} text`}>
                          Release Order No. <strong className="text-danger ml-n1">*</strong></div>
                          <span className={`${styles.value}`}>1</span>
                        </div>
                   <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `} >
                    <div className="d-flex">
                    <input 
                    className={`${styles.input_field} input form-control`} type="date"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Release Order Date<strong className="text-danger">*</strong></label>  
                    <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                    </div>                 
                </div> 
                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="number"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Net Quantity Released<strong className="text-danger">*</strong></label>                   
                </div> 
                     <div className='col-lg-3 col-md-4 col-sm-6 text-center'  
                     style={{top:'50px'}}
                     >
                    <div className={styles.uploadBtnWrapper}>
                        <input type="file" name="myfile" />
                        <button className={`${styles.upload_btn} mr-2 btn`}>
                        Upload
                        </button>
                    </div>
                    <img
                      src="/static/delete 2.svg"
                      className={`${styles.delete_image} mt-n4 img-fluid mr-2`}
                      alt="Preview"
                    />
                    
                   
                    </div>

                    <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `} >
                          <div className={`${styles.label} text`}>
                          Release Order No. <strong className="text-danger ml-n1">*</strong></div>
                          <span className={`${styles.value}`}>2</span>
                        </div>
                   <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `} >
                    <div className="d-flex">
                    <input 
                    className={`${styles.input_field} input form-control`} type="date"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Release Order Date<strong className="text-danger">*</strong></label>  
                    <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                    </div>                 
                </div> 
                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="number"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Net Quantity Released<strong className="text-danger">*</strong></label>                   
                </div> 
                     <div className='col-lg-3 col-md-4 col-sm-6 text-center'  
                     style={{top:'50px'}}
                     >
                    <div className={styles.uploadBtnWrapper}>
                        <input type="file" name="myfile" />
                        <button className={`${styles.upload_btn} mr-2 btn`}>
                        Upload
                        </button>
                    </div>
                    <img
                      src="/static/delete 2.svg"
                      className={`${styles.delete_image} mt-n4 img-fluid mr-2`}
                      alt="Preview"
                    />
                     <img
                      src="/static/add-btn.svg"
                      className={`${styles.delete_image} mt-n4 img-fluid`}
                      alt="Preview"
                    />
                   
                    </div>
                   
                  </div>
                  <hr></hr>
                  <div className='text-right'>
                    <div className={`${styles.total_quantity} text `}>Net Balance Quantity: <span className='form-check-label ml-2'>20,000 MT</span></div>
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


