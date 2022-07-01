import React from 'react'
import styles from './index.module.scss'

const index = ({termsheet}) => {
  return (
    <div className={`${styles.main} main`}>    
        <div className={`${styles.head_container} border_color d-flex justify-content-between`} data-toggle="collapse" data-target="#termDetails" aria-expanded="true" aria-controls="termDetails">
            <h3 className={styles.heading}>Termsheet</h3>
            <span>+</span>
        </div> 
        <div id="termDetails" className="collapse" aria-labelledby="termDetails" data-parent="#termDetails">      

        <div className={`${styles.dashboard_form} card-body`}>
            <h3 className={`${styles.sub_heading}`}>Commodity details</h3>
            
                <div className='row'>               
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <div className='d-flex'>
                            <input value={termsheet.data.data[0].order.commodity} className={`${styles.value} input form-control`} type="text"  required/>
                            <label className={`${styles.label} label_heading`}>Commodity<strong className="text-danger">*</strong></label>
                            <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search"/>
                        </div>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">MT</option>
                            <option value="audi">KG</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>Units of Measurement (UOM)<strong className="text-danger">*</strong></label>            
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">USD</option>
                            <option value="audi">Rupee</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>Currency<strong className="text-danger">*</strong></label>
                    </div>                
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <input className={`${styles.value} input form-control`} type="text" required/>
                        <label className={`${styles.label} label_heading`}>Quantity<strong className="text-danger">*</strong></label>
                    </div>                
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <input className={`${styles.value} input form-control`} type="text" required/>
                        <label className={`${styles.label} label_heading`}>Unit Price<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">±10%</option>
                            <option value="audi">±20%</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>Tolerance (+/-) Percentage<strong className="text-danger">*</strong></label>
                    </div>
                </div>
          
        </div>
        <div className={`${styles.dashboard_form} card-body`}>
            <h3 className={styles.sub_heading}>Transaction Details</h3>
            
                <div className='row'>               
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">USD 2000</option>
                            <option value="audi">RS 1000</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>LC Value<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <input className={`${styles.value} input form-control`} type="text" required />
                        <label className={`${styles.label} label_heading`}>Margin Money (%)<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">First Class European Bank</option>
                            <option value="audi">US Bank</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>LC Opening Bank<strong className="text-danger">*</strong></label>
                    </div>                
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">FOB</option>
                            <option value="audi">India</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>INCO Terms<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">Abbot Port</option>
                            <option value="audi">India Port</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>Load Port<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">Australia</option>
                            <option value="audi">India</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>Country Of Origin<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">Bulk</option>
                            <option value="audi">India</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>Shipment Type<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">No</option>
                            <option value="audi">Yes</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>Part Shipment Allowed<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">Visakhapatnam</option>
                            <option value="audi">India</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>Port Of Discharge<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">Home Consumption</option>
                            <option value="audi">Abroad</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>Bill of Entry<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">Yes</option>
                            <option value="audi">No</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>3rd Party Inspection Required<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">Load Port</option>
                            <option value="audi">India</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>Load Port<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">Gangavaram Port, Andhra Pradesh</option>
                            <option value="audi">Mumbai Port, Mumbai</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>Storage of Goods<strong className="text-danger">*</strong></label>
                    </div>               
                </div>
           
        </div>
        <div className={`${styles.dashboard_form} card-body`}>
            <h3 className={styles.sub_heading}>Payment Due Date</h3>
          
                <div className='row'>                
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">Select</option>
                            <option value="audi">India</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>Computation of Due date<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <input className={`${styles.value} input form-control`} type="text" required/>
                        <label className={`${styles.label} label_heading`}>Days From BL Date<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <input className={`${styles.value} input form-control`} type="text" required/>
                        <label className={`${styles.label} label_heading`}>Days From Vessel Discharge Date<strong className="text-danger">*</strong></label>
                    </div>                
                </div>
                          
        </div>
        <div className={`${styles.dashboard_form} card-body`}>
            <h3 className={styles.sub_heading}>Commercial Terms</h3>
          
                <div className='row'>               
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <input className={`${styles.value} input form-control`} type="text" required/>
                        <label className={`${styles.label} label_heading`}>Trade Margin(%)<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <input className={`${styles.value} input form-control`} type="text" required/>
                        <label className={`${styles.label} label_heading`}>LC Opening Charges (Minimum)<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <input className={`${styles.value} input form-control`} type="text" required/>
                        <label className={`${styles.label} label_heading`}>LC Opening Charges (%)<strong className="text-danger">*</strong></label>
                    </div>                
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <input className={`${styles.value} input form-control`} type="text" required/>
                        <label className={`${styles.label} label_heading`}>Usance Interest (%) For 90 Days<strong className="text-danger">*</strong></label>
                    </div>                
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <input className={`${styles.value} input form-control`} type="text" required/>
                        <label className={`${styles.label} label_heading`}>Overdue Interest per Month (%)<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">On Buyers A/C</option>
                            <option value="audi">On Sellers A/C</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>Exchange Fluctation<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} input form-control`} required>
                            <option value="volvo">Yes</option>
                            <option value="audi">No</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>Forex Hedging<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <input className={`${styles.value} input form-control`} type="text" required/>
                        <label className={`${styles.label} label_heading`}>Other Terms &amp; Conditions<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                        <select  className={`${styles.value} input form-control`} required>
                            <option value = "1.1">1.1</option>
                            <option value = "2.1">2.1</option>
                        </select>
                        <label className={`${styles.label} label_heading`}>Version<strong className="text-danger">*</strong></label>
                    </div>
                </div>
                </div>
           
        </div>
    </div>    
  )
}
export default index
