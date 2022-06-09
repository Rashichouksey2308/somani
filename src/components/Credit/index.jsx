import React from 'react'
import {Form} from 'react-bootstrap'
import styles from './index.module.scss'


const index = () => {
  return (
      <>
        <div className={`${styles.main}`}>
            <div className={`${styles.head_container} card-header d-flex justify-content-between bg-transparent`} >
            <h3 className={`${styles.heading}`}>Product Summary</h3>
            <span>+</span>
                    </div>  
                <div className={`${styles.dashboard_form}`}> 
                <Form>
                <div className='row'>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        
                        <Form.Control className={`${styles.input_field} input form-control`} required type="text"/> 
                        <Form.Label className={`${styles.label_heading} label_heading`}>Monthly Production Capacity<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>

                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                        <Form.Label className={`${styles.label_heading} label_heading`}>Capacity Utilization<strong className="text-danger">*</strong></Form.Label>
                        </Form.Group>

                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                        <Form.Label className={`${styles.label_heading} label_heading`}>Average Stock of Commodity<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                        <Form.Label className={`${styles.label_heading} label_heading`}>Average Stock in Transit<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group> 

                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                        <Form.Label className={`${styles.label_heading} label_heading`}>Available Stock<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                        <Form.Label className={`${styles.label_heading} label_heading`}>Daily Consumption of Commodity<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <Form.Control className={`${styles.input_field} input form-control`} type="date"/>
                        <Form.Label className={`${styles.label_heading} label_heading`}>Stock Coverage of Commodity<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
        
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.input_field} input form-control`}>
                        <option value="volvo">Import</option>
                        <option value="audi">Manufacturers</option>
                        </select>    
                    <Form.Label className={`${styles.label_heading} label_heading`}>Existing Procurement of Commodity<strong className="text-danger">*</strong></Form.Label>                      
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <div className='d-flex'>
                        <Form.Control className={`${styles.input_field} input form-control`} required type="text"/> 
                        <Form.Label className={`${styles.label_heading} label_heading`}>Existing Supplier(s)<strong className="text-danger">*</strong></Form.Label>
                        <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search"/>
                        </div>
                    </Form.Group>

                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.input_field} input form-control`}>
                        <option value="volvo">High</option>
                        <option value="audi">Low</option>
                        </select>   
                    <Form.Label className={`${styles.label_heading} label_heading`}>Commodity Contribution Senstivity<strong className="text-danger">*</strong></Form.Label>                       
                    </Form.Group>
                    
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <Form.Control className={`${styles.input_field} input form-control`} required type="text" />
                        <Form.Label className={`${styles.label_heading} label_heading`}>Avg. Monthly Electricity Bill<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <div className='d-flex'>
                        <Form.Control className={`${styles.input_field} input form-control`} required type="text"/> 
                        <Form.Label className={`${styles.label_heading} label_heading`}>Existing CHA(s)<strong className="text-danger">*</strong></Form.Label>
                        <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search"/>
                        </div>
                    </Form.Group>
                    </div>
                    </Form> 
                </div>
                </div>   

                    <div className={`${styles.main}`}>
                    <div className={`${styles.head_container} card-header d-flex justify-content-between bg-transparent`} >
                    <h3 className={`${styles.heading}`}>Supplier's Credentials</h3>
                    <span>+</span>
                            </div>  
                    <div className={`${styles.dashboard_form}`}> 
                    <Form>
                    <div className='row'>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <select className={`${styles.input_field} input form-control`}>
                            <option>Bhutani Traders</option>
                            <option>Ramakrishna</option>
                            </select>    
                        <Form.Label className={`${styles.label_heading} label_heading`}>Supplier Name<strong className="text-danger">*</strong></Form.Label>                      
                        </Form.Group>
                        <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                            <Form.Label className={`${styles.label_heading} label_heading`}>No. of Shipments<strong className="text-danger">*</strong></Form.Label>
                            </Form.Group>

                        <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                            <Form.Label className={`${styles.label_heading} label_heading`}>No. of Consignees<strong className="text-danger">*</strong></Form.Label>
                        </Form.Group>
                        
                        <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                            <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                            <Form.Label className={`${styles.label_heading} label_heading`}>No. of HS codes<strong className="text-danger">*</strong></Form.Label>
                        </Form.Group> 

                        <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                            <Form.Label className={`${styles.label_heading} label_heading`}>Country of Origin<strong className="text-danger">*</strong></Form.Label>
                        </Form.Group>
                        <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                            <Form.Label className={`${styles.label_heading} label_heading`}>Port of Destination<strong className="text-danger">*</strong></Form.Label>
                        </Form.Group>
                        <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <Form.Control className={`${styles.input_field} input form-control`} type="date"/>
                        <Form.Label className={`${styles.label_heading} label_heading`}>Oldest Shipment Date<strong className="text-danger">*</strong></Form.Label>
                        </Form.Group>
                        <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <Form.Control className={`${styles.input_field} input form-control`} type="date"/>
                        <Form.Label className={`${styles.label_heading} label_heading`}>Latest Shipment Date<strong className="text-danger">*</strong></Form.Label>
                        </Form.Group>
                        <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <Form.Control className={`${styles.input_field} input form-control`} required type="text"/>
                            <Form.Label className={`${styles.label_heading} label_heading`}>Commodity to Total Trade % -24M<strong className="text-danger">*</strong></Form.Label>
                        </Form.Group>
                        <div className='col-12'>
                        <Form.Label className={`${styles.label_heading}`}>Remarks</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                className={`${styles.remark_field} input form-control`}
                                />

                        </div>
                    
                        </div>
                        </Form> 
                    </div>
                    </div>  
              
                    <div className={`${styles.main}`}>
                    <div className={`${styles.head_container} card-header d-flex justify-content-between bg-transparent`} >
                    <h3 className={`${styles.heading}`}>Key Contact Person(s)</h3>
                    <span>+</span>
                            </div>  
                    <div className={`${styles.datatable} datatable`}>
         
                    <table
                        className={`${styles.table} table`}
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                    >
                        <thead>
                        <tr>
                            <th>NAME</th>
                            <th>DESIGNATION</th>
                            <th>DEPARTMENT</th>
                            <th>CONTACT NO.</th>
                            <th>EMAIL ID</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        
                        <tr>
                            <td>Ram Lal</td>
                            <td>
                            Ramakrishna Traders
                            </td>
                            <td>Customer</td>
                            <td>Sameer Soni</td>
                            <td>Yes</td>
                            <td>
                            <div>
                               <img src= "/static/mode_edit.svg" className='img-fluid' alt="edit"/>
                               <img src= "/static/delete 2.svg" className='img-fluid' alt="delete"/>
                           </div>
                           </td>
                        </tr>
                        <tr>
                            <td>Keshav Singh</td>
                            <td>
                            Production Manager
                            </td>
                            <td>Production</td>
                            <td>+91 9876543210</td>
                            <td>keshavv4578@gmail.com</td>
                            <td>
                           <div>
                               <img src= "/static/mode_edit.svg" className='img-fluid' alt="edit"/>
                               <img src= "/static/delete 2.svg" className='img-fluid' alt="delete"/>
                           </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Shivani Kapoor</td>
                            <td>
                            Lead Manager
                            </td>
                            <td>IT Department</td>
                            <td>+91 9876543210</td>
                            <td>keshavv4578@gmail.com</td>
                            <td>
                            <div>
                               <img src= "/static/mode_edit.svg" className='img-fluid' alt="edit"/>
                               <img src= "/static/delete 2.svg" className='img-fluid' alt="delete"/>
                           </div>
                            </td>
                        </tr>
                        
                        </tbody>
                    </table>
                    <div className={`${styles.add_row} p-3 d-flex justify-content-end`}>
                        <span>+</span>
                        <div>Add More Rows</div>
                    </div>
                    </div>
                    </div>  
                  
                    <div className={`${styles.main}`}>
                    <div className={`${styles.head_container} card-header d-flex justify-content-between bg-transparent`} >
                    <h3 className={`${styles.heading}`}>Key Addresses</h3>
                    <span>+</span>
                            </div>  
                    <div className={`${styles.dashboard_form}`}> 
                    <div className='row'>
                        <div className={`${styles.address_card} m-3 col-md-6`}>
                            <div className='d-flex justify-content-between'>
                                <div>
                                <input type="checkbox"/>
                                <label> Registered Office Address</label>
                                <div>N-11, 29 Tilak Marg, New Delhi</div>
                                <div>Email:  <span>skapoor@gmail.com</span></div>
                                <div>Phone Number: <span>+91 9876543210, +91 9876543210</span></div>
                                <div>
                                    
                                </div>
                                </div>
                               <div>
                                   <img src="/static/mode_edit.svg" />
                               </div>
                            </div>
                          

                        </div>
                        <div className={`${styles.address_card} m-3 col-md-6`}>
                            <div className='d-flex justify-content-between'>
                                <div>
                                <input type="checkbox"/>
                                <label> Registered Office Address</label>
                                <div>N-11, 29 Tilak Marg, New Delhi</div>
                                <div>Email:  <span>skapoor@gmail.com</span></div>
                                <div>Phone Number: <span>+91 9876543210, +91 9876543210</span></div>
                                <div>
                                    
                                </div>
                                </div>
                               <div>
                                   <img src="/static/mode_edit.svg" />
                               </div>
                            </div>
                          

                        </div>
                        <div className={`${styles.address_card} col-md-6`}>
                          

                        </div>
                        

                    </div>
                    </div>
                    </div> 
    </>         
  )
}

export default index
