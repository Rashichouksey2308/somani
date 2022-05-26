import React from 'react'
import {Form} from 'react-bootstrap'
import styles from './index.module.scss'


const index = () => {
  return (
    <div className={`${styles.main} container-fluid`}>
    
    <div className={`${styles.head_container} d-flex justify-content-between pt-3`}>
        <h3 className={styles.heading}>Termsheet</h3>
        <img className='p-3 img-fluid' alt="Add" src="/static/add.svg"/>
        </div>
 
        <div className={styles.dashboard_form}>
        <h3 className={styles.sub_heading}>Commodity details</h3>
            <Form>
            <div className='row'>
               
                <Form.Group className={`${styles.form_group} col-md-4`} >
                    <Form.Label className={styles.label}>Commodity</Form.Label>
                    <div className='d-flex'>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="Iron" 
                     /> <img className={`${styles.search_image} img-fluid `}src = "/static/search-grey.svg" alt="Search"/>
                     </div>
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Units of Measurement (UOM)</Form.Label>
                    <select  className={`${styles.value} form-control`}id="unitType">
                    <option value="volvo">MT</option>
                    <option value="audi">KG</option>
                    </select>
            
                    </Form.Group>
                <Form.Group className={`${styles.form_group} col-md-4`} >
                    <Form.Label className={styles.label}>Currency</Form.Label>
                    <select  className={`${styles.value} form-control`}id="currency">
                    <option value="volvo">USD</option>
                    <option value="audi">Rupee</option>
                    </select>                
                    </Form.Group>
               
                
                <Form.Group className={`${styles.form_group} col-md-4`} >
                    <Form.Label className={styles.label}>Quantity</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="500 MT"  />
                </Form.Group>
                
                
                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Unit Price</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="USD 192.09"  />
         
                   
                   
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Tolerance (+/-) Percentage</Form.Label>
                    <select  className={`${styles.value} form-control`}id="tolerance">
                    <option value="volvo">±10%</option>
                    <option value="audi">±20%</option>
                    </select>
                    </Form.Group>
                 </div>
                </Form> 
            </div>
       
      <hr></hr>
     
        <div className={styles.dashboard_form}>
        <h3 className={styles.sub_heading}>Transaction Details</h3>
            <Form>
            <div className='row'>
               
                <Form.Group className={`${styles.form_group} col-md-4`} >
                    <Form.Label className={styles.label}>LC Value</Form.Label>
                   
                    <select  className={`${styles.value} form-control`}id="lcValue">
                    <option value="volvo">USD 2000</option>
                    <option value="audi">RS 1000</option>
                    </select>
                    </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Margin Money (%)</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="MT" />
            
                    </Form.Group>
                <Form.Group className={`${styles.form_group} col-md-4`} >
                    <Form.Label className={styles.label}>LC Opening Bank</Form.Label>
                    <select  className={`${styles.value} form-control`}id="lcBank">
                    <option value="volvo">First Class European Bank</option>
                    <option value="audi">US Bank</option>
                    </select>
                     </Form.Group>
               
                
                <Form.Group className={`${styles.form_group} col-md-4`} >
                    <Form.Label className={styles.label}>INCO Terms</Form.Label>
                    <select  className={`${styles.value} form-control`}id="incoTerms">
                    <option value="volvo">FOB</option>
                    <option value="audi">India</option>
                    </select>                </Form.Group>
                
                
                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Load Port</Form.Label>
                    <select  className={`${styles.value} form-control`}id="loadPort">
                    <option value="volvo">Abbot Port</option>
                    <option value="audi">India Port</option>
                    </select>         
                   
                   
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Country Of Origin</Form.Label>
                    <select  className={`${styles.value} form-control`}id="countryOrigin">
                    <option value="volvo">Australia</option>
                    <option value="audi">India</option>
                    </select>                
                    </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Shipment Type</Form.Label>
                    <select  className={`${styles.value} form-control`}id="shipmentType">
                    <option value="volvo">Bulk</option>
                    <option value="audi">India</option>
                    </select>                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Part Shipment Allowed</Form.Label>
                    <select  className={`${styles.value} form-control`}id="partShipment">
                    <option value="volvo">No</option>
                    <option value="audi">Yes</option>
                    </select>                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Port Of Discharge</Form.Label>
                    <select  className={`${styles.value} form-control`}id="portType">
                    <option value="volvo">Visakhapatnam</option>
                    <option value="audi">India</option>
                    </select>                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Bill of Entry</Form.Label>
                    <select  className={`${styles.value} form-control`}id="billEntry">
                    <option value="volvo">Home Consumption</option>
                    <option value="audi">Abroad</option>
                    </select>                
                    </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>3rd Party Inspection Required</Form.Label>
                    <select  className={`${styles.value} form-control`}id="partyReq">
                    <option value="volvo">Yes</option>
                    <option value="audi">No</option>
                    </select>                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                <select  className={`${styles.value} form-control`}id="loadPort">
                    <option value="volvo">Load Port</option>
                    <option value="audi">India</option>
                    </select>                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Storage of Goods</Form.Label>
                    <select  className={`${styles.value} form-control`}id="storage">
                    <option value="volvo">Gangavaram Port, Andhra Pradesh</option>
                    <option value="audi">Mumbai Port, Mumbai</option>
                    </select>               
                     </Form.Group>
               
               
                </div>
                </Form> 
            </div>
     
      <hr></hr>
 
        <div className={styles.dashboard_form}>
        <h3 className={styles.sub_heading}>Payment Due Date</h3>
            <Form>
            <div className='row'>
               
                <Form.Group className={`${styles.form_group} col-md-4`} >
                    <Form.Label className={styles.label}>Computation of Due date</Form.Label>
                    <select  className={`${styles.value} form-control`}id="dueDate">
                    <option value="volvo">Select</option>
                    <option value="audi">India</option>
                    </select>                    
                     
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Days From BL Date</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="60" />
            
                    </Form.Group>
                <Form.Group className={`${styles.form_group} col-md-4`} >
                    <Form.Label className={styles.label}>Days From Vessel Discharge Date</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="90"   />
                </Form.Group>
               
               
                </div>
                </Form>

               
            </div>
      
      <hr></hr>
        
        <div className={styles.dashboard_form}>
        <h3 className={styles.sub_heading}>Commercials</h3>
            <Form>
            <div className='row'>
               
                <Form.Group className={`${styles.form_group} col-md-4`} >
                    <Form.Label className={styles.label}>Trade Margin(%)</Form.Label>
                    
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="2.25%" />
                    
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>LC Opening Charges (Minimum)</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="MT" />
            
                    </Form.Group>
                <Form.Group className={`${styles.form_group} col-md-4`} >
                    <Form.Label className={styles.label}>LC Opening Charges (%)</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="1.25-2.25%"   />
                </Form.Group>
               
                
                <Form.Group className={`${styles.form_group} col-md-4`} >
                    <Form.Label className={styles.label}>Usance Interest (%) For 90 Days</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="4%"  />
                </Form.Group>
                
                
                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Overdue Interest per Month (%)</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="1.5%"  />
         
                   
                   
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Exchange Fluctation</Form.Label>
                    <select  className={`${styles.value} form-control`}id="exchange">
                    <option value="volvo">On Buyers A/C</option>
                    <option value="audi">On Sellers A/C</option>
                    </select>                
                    </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Forex Hedging</Form.Label>
                    <select  className={`${styles.value} form-control`}id="forexHed">
                    <option value="volvo">Yes</option>
                    <option value="audi">No</option>
                    </select>                
                    </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Other Terms & Conditions</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="As Per Sales Contract" />
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-4`}>
                    <Form.Label className={styles.label}>Version</Form.Label>
                    <select  className={`${styles.value} form-control`}id="version">
                    <option value = "1.1">1.1</option>
                    <option value = "2.1">2.1</option>
                    </select>                
                    </Form.Group>
               
               
                </div>
                </Form>

               
            </div>
      
     </div>  
    
   
  )
}

export default index
