import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'


const index = () => {    
  return (
    <div className={styles.main}>
        <div className={`${styles.head_container} d-flex justify-content-between`} data-toggle="collapse" data-target="#otherTerm" aria-expanded="true" aria-controls="otherTerm">
            <h3 className={styles.heading}>Other Terms &amp; Conditions</h3>
            <span>+</span>
        </div>
        <div id="otherTerm" className="collapse" aria-labelledby="otherTerm" data-parent="#otherTerm">     
        <div className={styles.dashboard_form}>       
            <Form>
                <div className={`${styles.terms_para}`}>Below charges are to be borne and paid by the Buyer on actual basis,wherever applicable.<span className={styles.igpl_para}>Indo German International Private Limites (Igpl) </span>will provide proof of all expenses to the Buyer.</div>  
               <div className='row'>              
                    <div className={`${styles.form_group} mt-5 col-md-6`} >
                        <h3 className={`${styles.other_heading} row_head`}>CHA / Stevedoring Charges</h3>
                        <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                            <div className='d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Customs clearing charges / handling charges / CHA Fee</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Wharfage Charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Pollution charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Royalty and Penalty Charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Tarpaulin Coverage Charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Wheighment &amp; Weighment Survey Charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Draught Survey Charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Boating while Draught Survey Charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>HMC Charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Security Charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Plot Rental &amp; Storage Charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Bonding of Cargo Charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Ex - Bond Documentation Charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Transfer of Ownership Charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Customs Bond Officer Overtime Charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Grab Hire Charges ( if any )</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Crane Hire Charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Handling Losses</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Insurance Charges ( While transferring the material to customs bonded ware house )</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Water Sprinkling Charges</label>
                            </div>
                            <div className='pt-4 d-flex align-items-center'>
                                <input className={styles.checkbox} type="checkbox"/>
                                <label className={styles.checkbox_label}>Others, if any</label>
                            </div>
                        </div>                        
                    </div>
                    <div className={`${styles.form_group} mt-5 col-md-6`}>
                        <div className=''>
                            <h3 className={`${styles.other_heading} row_head`}>LC Opening Charges</h3>
                            <div className={`${styles.checkbox_container}  label_heading d-flex flex-column`}>
                                <div className='d-flex align-items-center'>   
                                    <input className={styles.checkbox} type="checkbox"/>
                                    <label className={styles.checkbox_label}>LC Opening Charges ( on LC value subject to minimum of USD 1500)</label>
                                </div> 
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox"/>
                                    <label className={styles.checkbox_label}>LC Amendment Cost</label>
                                </div>
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox" id="vehicle3" value="Bike"/>
                                    <label className={styles.checkbox_label} for="vehicle3">CMA Fees including supervision and survey</label>
                                </div>
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox" id="vehicle4" value="Bike"/>
                                    <label className={styles.checkbox_label} for="vehicle4">Bank DO Issuance charges</label>
                                </div>
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox" id="vehicle5" value="Bike"/>
                                    <label className={styles.checkbox_label} for="vehicle5">Remmittance Charges</label>
                                </div>
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox" id="vehicle6" value="Bike"/>
                                    <label className={styles.checkbox_label} for="vehicle6">Usance Interest</label>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className={`${styles.other_heading} row_head`}>Other Charges</h3>
                            <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                                <div className='d-flex align-items-center'>   
                                    <input className={styles.checkbox} type="checkbox"/>
                                    <label className={styles.checkbox_label} for="vehicle1">LC Opening Charges ( on LC value subject to minimum of USD 1500)</label>
                                </div> 
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox"/>
                                    <label className={styles.checkbox_label} for="vehicle2">Demurrage / Detention Charges of Vessel</label>
                                </div>
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox" id="vehicle3" value="Bike"/>
                                    <label className={styles.checkbox_label} for="vehicle3">Transportation Charges</label>
                                </div>
                                <div className='pt-4 d-flex align-items-center'>   
                                    <input className={styles.checkbox} type="checkbox" id="vehicle1" value="Bike"/>
                                    <label className={styles.checkbox_label} for="vehicle1">Wagon Haulage Charges (in case of Delivery through railways)</label>
                                </div> 
                                <div className='pt-4 d-flex align-items-center'>   
                                    <input className={styles.checkbox} type="checkbox" id="vehicle1" value="Bike"/>
                                    <label className={styles.checkbox_label} for="vehicle1">3rd Party Inspection Charges</label>
                                </div> 
                                <div className='pt-4 d-flex align-items-center'>   
                                    <input className={styles.checkbox} type="checkbox" id="vehicle1" value="Bike"/>
                                    <label className={styles.checkbox_label} for="vehicle1">Hedging Charges</label>
                                </div> 
                                <div className='pt-4 d-flex align-items-center'>   
                                    <input className={styles.checkbox} type="checkbox" id="vehicle1" value="Bike"/>
                                    <label className={styles.checkbox_label} for="vehicle1">Any other cost incurred on behalf of Buyer</label>
                                </div> 
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className={`${styles.other_heading} row_head`}>Duty &amp; Taxes</h3>
                            <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                                <div className='d-flex align-items-center'>   
                                    <input className={styles.checkbox} type="checkbox" id="vehicle1" value="Bike"/>
                                    <label className={styles.checkbox_label} for="vehicle1">LC Opening Charges ( on LC value subject to minimum of USD 1500)</label>
                                </div> 
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox" id="vehicle2"  value="Bike"/>
                                    <label className={styles.checkbox_label} for="vehicle2">LC Amendment Cost</label>
                                </div>
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox"/>
                                    <label className={styles.checkbox_label}>CMA Fees including supervision and survey</label>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className={`${styles.other_heading} row_head`}>Insurance</h3>
                            <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                                <div className='d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox"/>
                                    <label className={styles.checkbox_label}>LC Opening Charges ( on LC value subject to minimum of USD 1500)</label>
                                </div>
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox"/>
                                    <label className={styles.checkbox_label}>LC Amendment Cost</label>
                                </div>
                            </div>
                        </div>                    
                    </div>
                   
               
                    <div className={`${styles.terms_para} pt-3 text-center`}>All necessary documents to be filed with Customs department for discharge of goods &amp; Customs clearance can be filed by 
                    <span className={styles.igpl_para}>Igpl </span> 
                    or its nominated person. * GST charges extra wherever applicable</div>
                </div>
            </Form>                
        </div>
        </div>
    </div>   
  )
}

export default index
