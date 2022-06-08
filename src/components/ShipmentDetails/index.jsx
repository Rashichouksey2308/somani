import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

const index = () => {
  return (
    <div className={`${styles.main}  card`}>
        <div className={`${styles.head_container} d-flex justify-content-between`}  data-toggle="collapse" data-target="#shipmentDetails" aria-expanded="true" aria-controls="shipmentDetails">
        <h3 className={`${styles.heading} heading_card`}>Shipment Details</h3>
        <span>+</span>
        </div>
        <div id="shipmentDetails" className="collapse" aria-labelledby="shipmentDetails" data-parent="#profileAccordion">      

        <div className={styles.dashboard_form}>
        
            <Form>
            <div className='row'>
               
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <select  className={`${styles.input_field} input form-control`}>
                    <option value="volvo">Bulk</option>
                    <option value="audi">Liner</option>
                    </select>
                    <Form.Label className={`${styles.label_heading} label_heading`}>Shipment Type<strong className="text-danger">*</strong></Form.Label>
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                    <Form.Label className={`${styles.label_heading} label_heading`}>Laycan at Load Port<strong className="text-danger">*</strong></Form.Label>

                    </Form.Group>
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} type="date"/>
                    <Form.Label className={`${styles.label_heading} label_heading`}>Last date of shipment<strong className="text-danger">*</strong></Form.Label>
                </Form.Group>
               
                
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <div>
                    <Form.Control className={`${styles.input_field} input form-control`} type="date"/>
                    <Form.Label className={`${styles.label_heading} label_heading`}>ETA at Discharge Port<strong className="text-danger">*</strong></Form.Label>
                    </div>
                </Form.Group>
                
                </div>
                </Form>

               
            </div>
            </div>
            </div>
       
      
   
  )
}

export default index
