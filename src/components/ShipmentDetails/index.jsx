import React from 'react'
import {Form} from 'react-bootstrap'
import styles from './index.module.scss'


const index = () => {
  return (
    <div className={`${styles.main}`}>
        <div className={`${styles.head_container} d-flex justify-content-between`}>
        <h3 className={styles.heading}>Shipment Details</h3>
        <img className='pr-3 img-fluid' src="/static/add.svg" alt="Add"/>
        </div>
        <div className={styles.dashboard_form}>
        
            <Form>
            <div className='row'>
               
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <select  className={`${styles.value} form-control`}>
                    <option value="volvo">Bulk</option>
                    <option value="audi">Liner</option>
                    </select>
                    <Form.Label className={styles.label}>Shipment Type<strong className="text-danger">*</strong></Form.Label>
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <Form.Control className={`${styles.value} form-control`} required type="text"/>
                    <Form.Label className={styles.label}>Laycan at Load Port<strong className="text-danger">*</strong></Form.Label>

                    </Form.Group>
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <input className={`${styles.value} form-control`} type="date"/>
                    <Form.Label className={styles.label}>Last date of shipment<strong className="text-danger">*</strong></Form.Label>
                </Form.Group>
               
                
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <div>
                    <Form.Control className={`${styles.value} form-control`} type="date"/>
                    <Form.Label className={styles.label}>ETA at Discharge Port<strong className="text-danger">*</strong></Form.Label>
                    </div>
                </Form.Group>
                
                </div>
                </Form>

               
            </div>
            </div>
       
      
   
  )
}

export default index
