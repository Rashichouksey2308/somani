import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

const index = ({orderDetail, saveShipmentData}) => {

    // const {shipmentDetail}= orderDetail;

    const saveDate = (e) => {
        // console.log(e.target.value, "this is date")
        const d = new Date(e.target.value);
        let text = d.toISOString()
        saveShipmentData( e.target.name, text)
      }

  return (
    <div className={`${styles.main} border-color  card`}>
        <div className={`${styles.head_container} d-flex justify-content-between`}  data-toggle="collapse" data-target="#shipmentDetails" aria-expanded="true" aria-controls="shipmentDetails">
        <h3 className={`${styles.heading} mb-0`}>Shipment Details</h3>
        <span>+</span>
        </div>
        <div id="shipmentDetails" className="collapse" aria-labelledby="shipmentDetails" data-parent="#profileAccordion">      

        <div className={`${styles.dashboard_form} card-body`}>
        
            <Form>
            <div className='row'>
               
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <select  className={`${styles.input_field} input form-control`} name='shipmentDetail' onChange={(e) => { saveOrderData(e.target.name, e.target.value) }} >
                    <option value="volvo">{orderDetail?.shipmentDetail?.shipmentType}</option>
                    <option value="Liner">Liner</option>
                    <option value="Bulk">Bulk</option>
                    </select>
                    <Form.Label className={`${styles.label_heading} label_heading`}>Shipment Type<strong className="text-danger">*</strong></Form.Label>
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-2 col-sm-6`}>
                    <Form.Control className={`${styles.input_field} input form-control`} name="ETAofDischarge" type="date" defaultValue={orderDetail?.shipmentDetail?.ETAofDischarge.fromDate.split('T')[0]} onChange={(e)=>{saveDate(e , e.target.value)}} />
                    <Form.Label className={`${styles.label_heading} label_heading`}>Laycan at Load Port from<strong className="text-danger">*</strong></Form.Label>

                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-2 col-sm-6`}>
                    <Form.Control className={`${styles.input_field} input form-control`} type="date"  defaultValue={orderDetail?.shipmentDetail?.ETAofDischarge.toDate.split('T')[0]} onChange={(e)=>{saveDate(e , e.target.value)}}/>
                    <Form.Label className={`${styles.label_heading} label_heading`}>Laycan at Load Port to<strong className="text-danger">*</strong></Form.Label>

                    </Form.Group>
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} type="date" defaultValue={orderDetail?.shipmentDetail?.lastDateOfShipment.split('T')[0]} onChange={(e)=>{saveDate(e , e.target.value)}}/>
                    <Form.Label className={`${styles.label_heading} label_heading`}>Last date of shipment<strong className="text-danger">*</strong></Form.Label>
                </Form.Group>
               
              
                <Form.Group className={`${styles.form_group} col-md-3 col-sm-6`} >
                    <div>
                    <Form.Control className={`${styles.input_field} input form-control`} type="date" defaultValue={orderDetail?.shipmentDetail?.loadPort.fromDate.split('T')[0]} onChange={(e)=>{saveDate(e , e.target.value)}}/>
                    <Form.Label className={`${styles.label_heading} label_heading`}>ETA at Discharge Port from<strong className="text-danger">*</strong></Form.Label>
                    </div>
                </Form.Group>
                <Form.Group className={`${styles.form_group}  col-md-3 col-sm-6`} >
                    <div>
                    <Form.Control className={`${styles.input_field} input form-control`} type="date" defaultValue={orderDetail?.shipmentDetail?.loadPort.toDate.split('T')[0]} onChange={(e)=>{saveDate(e , e.target.value)}}/>
                    <Form.Label className={`${styles.label_heading} label_heading`}>ETA at Discharge Port to<strong className="text-danger">*</strong></Form.Label>
                    </div>
                </Form.Group>
              
                
                </div>
                {/* <div className={styles.button}><span>Submit</span></div> */}
                </Form>

              
             
            </div>
            </div>
            </div>
       
      
   
  )
}

export default index
