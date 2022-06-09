import React from 'react'
import {Form} from 'react-bootstrap'
import styles from './index.module.scss'


const index = () => {
  return (
    <div className={`${styles.main} sub_card`}>
        <div className={`${styles.head_container} d-flex justify-content-between`}>
        <h3 className={`${styles.heading} heading_card`}>Order Summary</h3>
        <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={styles.unit_label}>Units :</h5>
            <select className={`${styles.options} options `}>
                <option>Crores</option>
            </select>
                <img src ="/static/add.svg"
                className="img-fluid" alt="Add"/>
                </div>
                </div>        
                <div className={`${styles.dashboard_form}`}>
                
            <Form>
            <div className='row'>
               
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <div className='d-flex'>
                    <Form.Control className={`${styles.input_field} input form-control`} required type="text"/> 
                     
                     <Form.Label className={`${styles.label_heading} label_heading`}>Commodity<strong className="text-danger">*</strong></Form.Label>
                     <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search"/>
                     </div>
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                    <Form.Label className={`${styles.label_heading} label_heading`}>Quantity in MT<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                    <Form.Label className={`${styles.label_heading} label_heading`}>Order Value<strong className="text-danger">*</strong></Form.Label>
                </Form.Group>
                
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                    <Form.Label className={`${styles.label_heading} label_heading`}>Grade<strong className="text-danger">*</strong></Form.Label>
                </Form.Group>  
                
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <select  className={`${styles.input_field} input form-control`}>
                    <option value="volvo">Select Country</option>
                    <option value="audi">India</option>
                    </select>          
                    <Form.Label className={`${styles.label_heading} label_heading`}>Country Of Origin<strong className="text-danger">*</strong></Form.Label>  
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                    <Form.Label className={`${styles.label_heading} label_heading`}>Tolerance (+/-) Percentage<strong className="text-danger">*</strong></Form.Label>
                </Form.Group>
               
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <select  className={`${styles.input_field} input form-control`}>
                    <option value="volvo">Select Supplier Name</option>
                    <option value="audi">Traders</option>
                    </select> 
                <Form.Label className={`${styles.label_heading} label_heading`}>Supplier Name<strong className="text-danger">*</strong></Form.Label>                         
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <select  className={`${styles.input_field} input form-control`}>
                    <option value="volvo">Select Mines</option>
                    <option value="audi">Manufacturers</option>
                    </select>    
                <Form.Label className={`${styles.label_heading} label_heading`}>Manufacturer / Mines name<strong className="text-danger">*</strong></Form.Label>                      
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <select  className={`${styles.input_field} input form-control`}>
                    <option value="volvo">Select Port</option>
                    <option value="audi">Mumbai</option>
                    </select>   
                <Form.Label className={`${styles.label_heading} label_heading`}>Port Of Discharge<strong className="text-danger">*</strong></Form.Label>                       
                </Form.Group>
               
              
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <select  className={`${styles.input_field} input form-control`} >
                    <option value="volvo">FOB</option>
                    <option value="audi">Audi</option>
                    </select>   
                <Form.Label className={`${styles.label_heading} label_heading`}>INCO Terms<strong className="text-danger">*</strong></Form.Label>                       
                </Form.Group>
                
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <input className={`${styles.input_field} input form-control`} type="date"/>
                <Form.Label className={`${styles.label_heading} label_heading`}>Expected Date Of Shipment<strong className="text-danger">*</strong></Form.Label>
                </Form.Group>
                
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <Form.Control className={`${styles.input_field} input form-control`} required type="text" />
                    <Form.Label className={`${styles.label_heading} label_heading`}>Transaction Period (Days)<strong className="text-danger">*</strong></Form.Label>
                </Form.Group>
               
                </div>
                </Form>

               
            </div>
            </div>
       
      
   
  )
}

export default index
