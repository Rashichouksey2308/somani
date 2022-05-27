import React from 'react'
import {Form} from 'react-bootstrap'
import styles from './index.module.scss'


const index = () => {
  return (
    <div className={`${styles.main} container-fluid`}>
    <div className='d-flex justify-content-between'>
        <h3 className={styles.heading}>Order Summary</h3>
        <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={styles.unit_label}>Units : </h5>
            <select className={styles.options}>
                <option>Crores</option>
            </select>
                <img src = "/static/add"
                className="img-fluid" alt="Add"/>
                </div>
                </div>        
                <hr></hr>
                <div className={styles.dashboard_form}>
                
            <Form>
            <div className='row'>
               
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <Form.Label className={styles.label}>Commodity</Form.Label>
                    <div className='d-flex'>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="Iron" 
                    
                    /> <img className={`${styles.search_image} img-fluid`} src = "/static/search-grey" alt="Search"/>
                     </div>
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <Form.Label className={styles.label}>Quantity in MT</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="50 MT" />
            
                    </Form.Group>
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <Form.Label className={styles.label}>Order Value</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="1000000 CR"   />
                </Form.Group>
               
                
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <Form.Label className={styles.label}>Grade</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="46"  />
                </Form.Group>
                
                
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <Form.Label className={styles.label}>Country Of Origin</Form.Label>
                    <select  className={`${styles.value} form-control`}id="countryOrigin">
                    <option value="volvo">Europe</option>
                    <option value="audi">India</option>
                    </select>          
                   
                   
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <Form.Label className={styles.label}>Tolerance (+/-) Percentage</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="±10%" />
                </Form.Group>
               
                
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <Form.Label className={styles.label}>Supplier Name</Form.Label>
                    <select  className={`${styles.value} form-control`} id="supplier">
                    <option value="volvo">ABC Ltd</option>
                    <option value="audi">Audi</option>
                    </select>                          
                    </Form.Group>
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <Form.Label className={styles.label}>Manufacturer / Mines name</Form.Label>
                    <select  className={`${styles.value} form-control`} id="mines">
                    <option value="volvo">ABC</option>
                    <option value="audi">Audi</option>
                    </select>                          
                    </Form.Group>
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <Form.Label className={styles.label}>Port Of Discharge</Form.Label>
                    <select  className={`${styles.value} form-control`} id="port">
                    <option value="volvo">Calcutta</option>
                    <option value="audi">Mumbai</option>
                    </select>                          
                    </Form.Group>
               
              
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <Form.Label className={styles.label}>INCO Terms</Form.Label>
                    <select  className={`${styles.value} form-control`}  id="inco">
                    <option value="volvo">FOB</option>
                    <option value="audi">Audi</option>
                    </select>                          
                    </Form.Group>
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <Form.Label className={styles.label}>Expected Date Of Shipment</Form.Label>
                    <input className={`${styles.value} form-control`} type="date" placeholder="22-02-2022"  />
                </Form.Group>
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <Form.Label className={styles.label}>Transaction Period (Days)</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="90"  />
                </Form.Group>
               
                </div>
                </Form>

               
            </div>
            </div>
       
      
   
  )
}

export default index
