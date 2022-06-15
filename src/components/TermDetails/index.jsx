import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

const index = () => {
  return (
    <div className={styles.main}>    
        <div className={`${styles.head_container} border_color  card-header  d-flex justify-content-between`}>
            <h3 className={styles.heading}>Termsheet</h3>
            <span>+</span>
        </div> 
        <div className={`${styles.dashboard_form} card-body`}>
            <h3 className={`${styles.sub_heading} label_heading`}>Commodity details</h3>
            <Form>
                <div className='row'>               
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <div className='d-flex'>
                            <Form.Control className={`${styles.value} input form-control`} type="text"  required/>
                            <Form.Label className={styles.label}>Commodity<strong className="text-danger">*</strong></Form.Label>
                            <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search"/>
                        </div>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} input col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">MT</option>
                            <option value="audi">KG</option>
                        </select>
                        <Form.Label className={styles.label}>Units of Measurement (UOM)<strong className="text-danger">*</strong></Form.Label>            
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">USD</option>
                            <option value="audi">Rupee</option>
                        </select>
                        <Form.Label className={styles.label}>Currency<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>                
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <Form.Control className={`${styles.value} form-control`} type="text" required/>
                        <Form.Label className={styles.label}>Quantity<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>                
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <Form.Control className={`${styles.value} form-control`} type="text" required/>
                        <Form.Label className={styles.label}>Unit Price<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">±10%</option>
                            <option value="audi">±20%</option>
                        </select>
                        <Form.Label className={styles.label}>Tolerance (+/-) Percentage<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                </div>
            </Form> 
        </div>
        <div className={styles.dashboard_form}>
            <h3 className={styles.sub_heading}>Transaction Details</h3>
            <Form>
                <div className='row'>               
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">USD 2000</option>
                            <option value="audi">RS 1000</option>
                        </select>
                        <Form.Label className={styles.label}>LC Value<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <Form.Control className={`${styles.value} form-control`} type="text" required />
                        <Form.Label className={styles.label}>Margin Money (%)<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">First Class European Bank</option>
                            <option value="audi">US Bank</option>
                        </select>
                        <Form.Label className={styles.label}>LC Opening Bank<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>                
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">FOB</option>
                            <option value="audi">India</option>
                        </select>
                        <Form.Label className={styles.label}>INCO Terms<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">Abbot Port</option>
                            <option value="audi">India Port</option>
                        </select>
                        <Form.Label className={styles.label}>Load Port<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">Australia</option>
                            <option value="audi">India</option>
                        </select>
                        <Form.Label className={styles.label}>Country Of Origin<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">Bulk</option>
                            <option value="audi">India</option>
                        </select>
                        <Form.Label className={styles.label}>Shipment Type<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">No</option>
                            <option value="audi">Yes</option>
                        </select>
                        <Form.Label className={styles.label}>Part Shipment Allowed<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">Visakhapatnam</option>
                            <option value="audi">India</option>
                        </select>
                        <Form.Label className={styles.label}>Port Of Discharge<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">Home Consumption</option>
                            <option value="audi">Abroad</option>
                        </select>
                        <Form.Label className={styles.label}>Bill of Entry<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">Yes</option>
                            <option value="audi">No</option>
                        </select>
                        <Form.Label className={styles.label}>3rd Party Inspection Required<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">Load Port</option>
                            <option value="audi">India</option>
                        </select>
                        <Form.Label className={styles.label}>Load Port<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">Gangavaram Port, Andhra Pradesh</option>
                            <option value="audi">Mumbai Port, Mumbai</option>
                        </select>
                        <Form.Label className={styles.label}>Storage of Goods<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>               
                </div>
            </Form> 
        </div>
        <div className={styles.dashboard_form}>
            <h3 className={styles.sub_heading}>Payment Due Date</h3>
            <Form>
                <div className='row'>                
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">Select</option>
                            <option value="audi">India</option>
                        </select>
                        <Form.Label className={styles.label}>Computation of Due date<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <Form.Control className={`${styles.value} form-control`} type="text" required/>
                        <Form.Label className={styles.label}>Days From BL Date<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <Form.Control className={`${styles.value} form-control`} type="text" required/>
                        <Form.Label className={styles.label}>Days From Vessel Discharge Date<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>                
                </div>
            </Form>                
        </div>
        <div className={styles.dashboard_form}>
            <h3 className={styles.sub_heading}>Commercial Terms</h3>
            <Form>
                <div className='row'>               
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <Form.Control className={`${styles.value} form-control`} type="text" required/>
                        <Form.Label className={styles.label}>Trade Margin(%)<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <Form.Control className={`${styles.value} form-control`} type="text" required/>
                        <Form.Label className={styles.label}>LC Opening Charges (Minimum)<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <Form.Control className={`${styles.value} form-control`} type="text" required/>
                        <Form.Label className={styles.label}>LC Opening Charges (%)<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>                
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <Form.Control className={`${styles.value} form-control`} type="text" required/>
                        <Form.Label className={styles.label}>Usance Interest (%) For 90 Days<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>                
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <Form.Control className={`${styles.value} form-control`} type="text" required/>
                        <Form.Label className={styles.label}>Overdue Interest per Month (%)<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">On Buyers A/C</option>
                            <option value="audi">On Sellers A/C</option>
                        </select>
                        <Form.Label className={styles.label}>Exchange Fluctation<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">Yes</option>
                            <option value="audi">No</option>
                        </select>
                        <Form.Label className={styles.label}>Forex Hedging<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <Form.Control className={`${styles.value} form-control`} type="text" required/>
                        <Form.Label className={styles.label}>Other Terms &amp; Conditions<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} form-control`} required>
                            <option value = "1.1">1.1</option>
                            <option value = "2.1">2.1</option>
                        </select>
                        <Form.Label className={styles.label}>Version<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                </div>
            </Form>
        </div>
    </div>    
  )
}
export default index
