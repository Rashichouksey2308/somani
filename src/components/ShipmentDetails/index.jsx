import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

const index = ({orderDetail, saveShipmentData}) => {

    // const {shipmentDetail}= orderDetail;

    const saveDate = (e) => {
        const d = new Date(e.target.value);
        let text = d.toISOString()
        saveShipmentData( e.target.name, text)
      }

  return (
    <div className={`${styles.main} border-color  card`}>
        <div className={`${styles.head_container} d-flex border_color head_container card-header justify-content-between bg-transparent`}  data-toggle="collapse" data-target="#shipmentDetails" aria-expanded="true" aria-controls="shipmentDetails">
        <h3 className={`${styles.heading} mb-0`}>Shipment Details</h3>
        <span>+</span>
        </div>
        <div id="shipmentDetails" className="collapse" aria-labelledby="shipmentDetails" >      

        <div className={`${styles.dashboard_form}`}>
        
            <Form>
            <div className='row'>
               
                <Form.Group className={`${styles.form_group} col-lg-4 col-md-6`} >
                    <select  className={`${styles.input_field} input form-control`} name='shipmentType' onChange={(e) => { saveShipmentData(e.target.name, e.target.value) }} >
                    <option value="volvo">{orderDetail?.shipmentDetail?.shipmentType}</option>
                    <option value="Liner">Liner</option>
                    <option value="Bulk">Bulk</option>
                    </select>
                    <Form.Label className={`${styles.label_heading} label_heading`}>Shipment Type<strong className="text-danger">*</strong></Form.Label>
                </Form.Group>
                <Form.Group className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                    <div className="d-flex">
                    <Form.Control className={`${styles.input_field}  ${styles.customSelect}  input form-control`} name="ETAofDischarge.fromDate" type="date" defaultValue={orderDetail?.shipmentDetail?.ETAofDischarge?.fromDate.split('T')[0]} onChange={(e)=>{saveDate(e)}} />
                    <Form.Label className={`${styles.label_heading} label_heading`}> Laycan at Load Port from<strong className="text-danger">*</strong></Form.Label>
                     <img
                   className={`${styles.calanderIcon} img-fluid`}
                   src="/static/caldericon.svg"
                   alt="Search"
                   />
                   </div>
                    </Form.Group>
                    

                    <Form.Group className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                      <div className="d-flex">
                    <Form.Control className={`${styles.input_field}  ${styles.customSelect} input form-control`} name='ETAofDischarge.toDate' type="date"  defaultValue={orderDetail?.shipmentDetail?.ETAofDischarge?.toDate.split('T')[0]} onChange={(e)=>{saveDate(e)}}/>
                    <Form.Label className={`${styles.label_heading} label_heading`}>Laycan at Load Port to<strong className="text-danger">*</strong></Form.Label>
                 <img
                   className={`${styles.calanderIcon} img-fluid`}
                   src="/static/caldericon.svg"
                   alt="Search"
                   />
                      </div>

                    </Form.Group>
                <Form.Group className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`} >
                    <div className="d-flex">
                <input className={`${styles.input_field} ${styles.customSelect} input form-control`} name='lastDateOfShipment' type="date" defaultValue={orderDetail?.shipmentDetail?.lastDateOfShipment?.split('T')[0]} onChange={(e)=>{saveDate(e)}}/>
                    
                    <Form.Label className={`${styles.label_heading}  label_heading`}>Last date of shipment<strong className="text-danger">*</strong></Form.Label>
                  <img
                   className={`${styles.calanderIcon} img-fluid`}
                   src="/static/caldericon.svg"
                   alt="Search"
                   /> 
                    </div>

                </Form.Group>
              
                <Form.Group className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`} >
                  <div className="d-flex">
                    <Form.Control className={`${styles.input_field} ${styles.customSelect} input form-control`} name='loadPort.fromDate' type="date" defaultValue={orderDetail?.shipmentDetail?.loadPort?.fromDate.split('T')[0]} onChange={(e)=>{saveDate(e)}}/>
                    <Form.Label className={`${styles.label_heading} label_heading`}>ETA at Discharge Port from<strong className="text-danger">*</strong></Form.Label>
                    <img
                   className={`${styles.calanderIcon} img-fluid`}
                   src="/static/caldericon.svg"
                   alt="Search"
                   />
                    </div>
                </Form.Group>
                <Form.Group className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`} >
                   <div className="d-flex">
                    <Form.Control className={`${styles.input_field} input form-control`} name='loadPort.toDate' type="date" defaultValue={orderDetail?.shipmentDetail?.loadPort?.toDate.split('T')[0]} onChange={(e)=>{saveDate(e)}}/>
                    <Form.Label className={`${styles.label_heading} label_heading`}>ETA at Discharge Port to<strong className="text-danger">*</strong></Form.Label>
                     
                   <img
                   className={`${styles.calanderIcon} img-fluid`}
                   src="/static/caldericon.svg"
                   alt="Search"
                   />
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
