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

        <div className={`${styles.wrapper} border_color p-2 card`}>

          <div className='d-lg-flex align-items-center d-inline-block  pl-4'>
        <h2 className="mb-0">Shipment Type</h2>
          <div className={`${styles.radio_form} ml-lg-5 ml-n4`}>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className={styles.radio_group}>
                <Form.Check
                  className={styles.radio}
                  inline
                  label="Bulk"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className={styles.radio}
                  inline
                  label="Liner"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              
              </div>
            ))}
          </div>
          </div>
          </div>

        <div className={`${styles.main} border_color mt-4 card `}>
        <div className={`${styles.head_container} border_color card-header head_container d-flex bg-transparent`} >
        <h3 className={`${styles.heading}`}>Commodity Details</h3>
            </div>  
                <div className={`${styles.dashboard_form} mt-2 mb-4 card-body`}>
                  <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                      <div className={`${styles.label} text`}>
                      Commodity <strong className="text-danger ml-n1">*</strong> 
                     </div>
                      <span className={styles.value}>Iron</span>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                      <div className={`${styles.label} text`}>
                      Quantity <strong className="text-danger ml-n1">*</strong></div>
                      <span className={styles.value}>500 Mt</span>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                      <div className={`${styles.label} text`}>
                       Order Value <strong className="text-danger ml-n1">*</strong> </div>
                      <span className={styles.value}>500 CR</span>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                      <div className={`${styles.label} text`}>
                        Shipping Line/Charter<strong className="text-danger">*</strong> </div>
                      <span className={styles.value}>Mersk</span>
                    </div>

                  </div>

                </div>
            </div>
            <div className={`${styles.main} mt-4 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Shipment Details</h3>

            </div>
            <div className={`${styles.dashboard_form} mt-3 card-body`}>
            <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                      <div className={`${styles.label} text`}>
                      Country Of Origin <strong className="text-danger ml-n1">*</strong> 
                     </div>
                      <span className={styles.value}>India</span>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                      <div className={`${styles.label} text`}>
                      Port Of Landing <strong className="text-danger ml-n1">*</strong></div>
                      <span className={styles.value}>Text</span>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6 mb-5'>
                      <div className={`${styles.label} text`}>
                       Port of Discharge <strong className="text-danger ml-n1">*</strong> </div>
                      <span className={styles.value}>Text</span>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                    <select
                      className={`${styles.input_field} input form-control`}
                    >
                      <option>Indo German</option>
                      <option>Balaji Traders</option>
                    </select>
                     <label className={`${styles.label_heading} label_heading`}>
                      Consignee Name<strong className="text-danger">*</strong></label>                   
                </div> 
               
                    <div className='col-lg-4 col-md-6 col-sm-6 mt-4'>
                      <div className={`${styles.label} text`}>
                        Consignee Branch<strong className="text-danger">*</strong> </div>
                      <span className={styles.value}>Visakhapatnam</span>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6 mt-4'>
                      <div className={`${styles.label} text`}>
                        Consignee Address<strong className="text-danger">*</strong> </div>
                      <span className={styles.value}>A-44, Sagar Apartments, Tilak Marg, Agra, Uttar Pradesh 110008</span>
                    </div>

                  </div>
            </div>
            
           
          </div>
          <div className={`${styles.main} mt-4 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Bill of Lading</h3>
              <button className={styles.add_btn}><span className={styles.add_sign}>+</span>Add</button>

            </div>
            <div className={`${styles.dashboard_form} mt-3 card-body`}>
            <div className='row'>
                   
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="date"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Vessel Name<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="number"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      IGM No./Rotation No.<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="date"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      IGM Filing Date<strong className="text-danger">*</strong></label>                   
                </div> 
                <hr></hr>
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="number"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      BL Number<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className='col-lg-4 col-md-6 col-sm-6'>
                      <div className={`${styles.label} text`}>
                      Commodity <strong className="text-danger ml-n1">*</strong> 
                     </div>
                      <span className={styles.value}>Iron</span>
                    </div>
                    <div className='col-lg-2 col-md-6 col-sm-6'>
                      <div className={`${styles.label} text`}>
                      Commodity <strong className="text-danger ml-n1">*</strong> 
                     </div>
                      <span className={styles.value}>Iron</span>
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


