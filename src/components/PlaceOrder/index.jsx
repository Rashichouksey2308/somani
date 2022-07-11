import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import NewOrder from '../Order'
import NewShipmentDetails from '../ShipmentDetails'
import CommonSave from '../CommonSave'

const index = () => {
  return (
    <div className={`${styles.card} accordion_body container-fluid`}>
      <div className={styles.head_container}>
        <div className={styles.head_header}>
          <img
            className={`${styles.arrow} img-fluid`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"  
            />
            <h1 className={styles.heading}>Place a New Order</h1>
            </div>
            <div>
              <button className={`${styles.clear_btn} clear_btn`}>Clear All</button>
            </div>
          </div>

          <div className={`${styles.main} mt-4 mb-4 card border-color`}>
          <div className={`${styles.head_container} border_color card-header head_container justify-content-between d-flex bg-transparent`} >
           <h3 className={`${styles.heading}`}>Limit Details</h3>
              </div>  
                
                  <div className={`${styles.dashboard_form} mt-2 mb-4 card-body`}>
                    <div className='row'>
                      <div className='col-md-2 col-sm-4'>
                        <div className={`${styles.label} text`}>
                        Total Limit 
                      </div>
                        <span className={styles.value}>20 CR</span>
                      </div>
                      <div className='col-md-2 col-sm-4'>
                        <div className={`${styles.label} text`}>
                        Utilised Limit</div>
                        <span className={styles.value}>15 CR</span>
                      </div>
                      <div className='col-md-2 col-sm-4'>
                        <div className={`${styles.label} text`}>
                        Available Limit  </div>
                        <span className={styles.value}>5 CR</span>
                      </div>
                      <div className='col-md-2 col-sm-4'>
                        <div className={`${styles.label} text`}>Limit Expiry Date</div>
                        <span className={styles.value}>22-02-2022</span>
                      </div>
                      <div className='col-md-2 col-sm-4'>
                        <div className={`${styles.label} text`}>Last Order Value</div>
                        <span className={styles.value}>2 CR</span>
                      </div>

                    </div>

                  </div>
              </div>
         <NewOrder/>
       <NewShipmentDetails/>
       <CommonSave />

 
    </div>
  )
}
export default index
