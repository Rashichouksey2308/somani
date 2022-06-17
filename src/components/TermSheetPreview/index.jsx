import React,{useState} from 'react'
import styles from './index.module.scss'
import {Row,Col,Container,Card} from 'react-bootstrap'
import Paginatebar from '../Paginatebar'
import TermsheetPopUp from '../TermsheetPopUp'
import { Form } from 'react-bootstrap'
function index() {
    let tempArr=[
            {head:"Commodity Details",details:[
            {subhead:"1. Commodity Name",val:"Chrome Ore"},
            {subhead:"2. Quantity",val:"5000 MT (± 10%)"},
            {subhead:"3. Unit Price",val:"USD 243/MT"},
        ]
    }
    ]
    const [open,setOpen] =useState(false)
    const openbar=()=>{
        setOpen(true)
    }
    const close=()=>{
        setOpen(false)
    }
  return (
      
      <>
       <div className={`${styles.root_container} tabHeader`}>
      <div  className={styles.head_container}>
        <div className={styles.head_header}>
          <img className={styles.arrow}
            src="/static/keyboard_arrow_right-3.svg" alt="Arrow" />
          <h1 className={`${styles.heading} heading`}>Termsheet Preview</h1>
        </div>
      </div>
      <div  className={`${styles.term_container} mb-3 mt-3 container-fluid`}>
       <Row className={`h-50`}>
           <Col sm={12} className={`d-flex justify-content-center align-items-center`}>
           <span>TERMSHEET</span>
           </Col>
       </Row>
        <Row  className={`h-50`}>
           <Col md={6} className={`d-flex justify-content-start align-items-center`}>
           <div><span className={styles.termSub_head}>Buyer:</span><span className={styles.termValue}>M/s Vishnu Chemicals Limited</span></div>
           </Col>
            <Col md={6} className={`d-flex justify-content-end  align-items-center`}>
           <div><span className={styles.termSub_head}>Order ID:</span> <span className={styles.termValue}>2FCH6589</span></div>
           </Col>
       </Row>
      </div>
      <Card className={styles.content}>
       <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4} className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}>
             
            <span>Commodity Details</span>
            
            </Col>
            <Col md={8}>{""}</Col>
            </Row>
            <Row> 
            <Col md={4} className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                   <li>1. Commodity Name</li>
                   <li>2. Quantity</li>
                   <li>3. Unit Price</li>
             </ol>
            
            </Col>
            <Col md={8}  className={`${styles.sub_contentValue} accordion_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 <li>Chrome Ore</li>
                <li>5000 MT (± 10%)</li>
                <li>USD 243/MT</li>
             </ul>
            </Col>
        </Row>
       </div>
        <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4}  className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}>
             
            <span>Transaction Details</span>
            
            </Col>
            <Col md={8}>{""}</Col>
          </Row>
          <Row>
            <Col md={4} className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                 <li>4. LC Value</li>
                  <li>5. LC opening Bank</li>
                   <li>6. Margin Money as % of Import Valuee</li>
             </ol>
            
            </Col>
            <Col md={8}  className={`${styles.sub_contentValue} accordion_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 <li>USD 2000</li>
                  <li>First Class European Bank)</li>
                   <li>10%T</li>
             </ul>
            </Col>
        </Row>
       </div>
       
        <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4}  className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}>
             
            <span>Payment Due Date</span>
            
            </Col>
            <Col md={8}>{""}</Col>
          </Row>
          <Row>
            <Col md={4} className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                 <li>7. Computation of Due Date*</li>
          
             </ol>
            
            </Col>
            <Col md={8}  className={`${styles.sub_contentValue} accordion_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 <li>90 days from the date of arrival of vessel/containers at discharge port or 120 days from the BL date, whichever is earlier, through TT or LC (in the case of LC all Bank charges to be borne and paid by the Buyer). LC Discounting rate Presently @ 4.75% for 90 days usance LC in case of 120 days usance LC Discounting it is subject to actual discounting charges a per the discounting Bank done with proof of charges.</li>
                 
             </ul>
            </Col>
        </Row>
       </div>
        <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4}  className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}>
             
            <span>Storage Of Goods</span>
            
            </Col>
            <Col md={8}>{""}</Col>
          </Row>
          <Row>
            <Col md={4} className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                 <li>8. Storage of Good</li>
                  
             </ol>
            
            </Col>
            <Col md={8}  className={`${styles.sub_contentValue} accordion_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 <li>{`Cargo to be stored in Custom Bonded warehouse at the port of Discharge (Vizag India) under CMA with Dr. Amin Controllers. "lGM and Into Bond Bill of Entry" shall be filled by the lndo's nominated party and all expenses/charges to be born and paid by the Buyer.`}</li>
                 
             </ul>
            </Col>
        </Row>
       </div>
        <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4}  className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}>
             
            <span>Commercials Terms</span>
            
            </Col>
            <Col md={8}>{""}</Col>
          </Row>
          <Row>
            <Col md={4} className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                 <li>10. Trade Margin (%)</li>
                 <li>11. LC Opening Charges (Minimum)</li>
                 <li>12. LC Opening Charges (%)</li>
                 <li>13. Usance Interest (%) For 90 Days</li>
                 <li>14. Overdue Interest per Month (%)</li>
                 <li>15. Exchange Fluctuation</li>
                 <li>16. Other Terms</li>
                  
             </ol>
            
            </Col>
            <Col md={8}  className={`${styles.sub_contentValue} accordion_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                <li>2.25%</li>
                 <li>USD 1500</li>
                 <li>1.5 - 2.25%</li>
                 <li>4%</li>
                 <li>1.5%</li>
                 <li>{`All actual exchange fluctuation if applicable is on Buyer's account`}</li>
                 <li>Other terms and conditions as per Sales Contract</li>
                 
             </ul>
            </Col>
        </Row>
       </div>
        <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4}  className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}>
             
            <span>Reimbursement Of Expenses</span>
            
            </Col>
            <Col md={8}>{""}</Col>
          </Row>
          <Row>
            <Col md={4} className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                 <li>17. Reimbursement of Expenses</li>
                  
                  
             </ol>
            
            </Col>
            <Col md={8}  className={`${styles.sub_contentValue} accordion_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 
                 <li>Post CFR expenses to be reimbursed on actual basis if applicable as attached.</li>
                   
             </ul>
            </Col>
        </Row>
       </div>
        <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4}  className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}>
             
            <span>Additional Comments</span>
            
            </Col>
            <Col md={8}>{""}</Col>
          </Row>
          <Row>
            <Col md={4} className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                 <li>18. Overdue Interest Per Month (%)</li>
                   <li>19. Exchange Fluctuation</li>
                  
             </ol>
            
            </Col>
            <Col md={8}  className={`${styles.sub_contentValue} accordion_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 
                 <li>1.5%</li>
                   <li>{`All actual exchange fluctuation if applicable is on Buyer's account`}</li>
             </ul>
            </Col>
        </Row>
       </div>
        <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4} className={`${styles.content_header_other}  d-flex justify-content-center align-content-center`}>
             
            <span>Other Terms & Conditions</span>
            
            </Col>
            <Col md={8}>{""}</Col>
          </Row>
          <Row>
            <Col md={12} className={`${styles.sub_content_other} accordion_Text label_heading  d-flex justify-content-start align-content-center`}>
             Below charges are to be borne and paid by the Buyer on actual basis,wherever applicable. Indo German International Private Limited (IGPL) will provide proof of all expenses to the Buyer.
            
            
            </Col>
         
        </Row>
       </div>
       
         <div className={styles.dashboard_form}>       
            <Form>
               
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
                                    <label className={styles.checkbox_label} htmlFor="vehicle3">CMA Fees including supervision and survey</label>
                                </div>
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox" id="vehicle4" value="Bike"/>
                                    <label className={styles.checkbox_label} htmlFor="vehicle4">Bank DO Issuance charges</label>
                                </div>
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox" id="vehicle5" value="Bike"/>
                                    <label className={styles.checkbox_label} htmlFor="vehicle5">Remmittance Charges</label>
                                </div>
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox" id="vehicle6" value="Bike"/>
                                    <label className={styles.checkbox_label} htmlFor="vehicle6">Usance Interest</label>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className={`${styles.other_heading} row_head`}>Other Charges</h3>
                            <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                                <div className='d-flex align-items-center'>   
                                    <input className={styles.checkbox} type="checkbox"/>
                                    <label className={styles.checkbox_label} htmlFor="vehicle1">LC Opening Charges ( on LC value subject to minimum of USD 1500)</label>
                                </div> 
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox"/>
                                    <label className={styles.checkbox_label} htmlFor="vehicle2">Demurrage / Detention Charges of Vessel</label>
                                </div>
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox" id="vehicle3" value="Bike"/>
                                    <label className={styles.checkbox_label} htmlFor="vehicle3">Transportation Charges</label>
                                </div>
                                <div className='pt-4 d-flex align-items-center'>   
                                    <input className={styles.checkbox} type="checkbox" id="vehicle1" value="Bike"/>
                                    <label className={styles.checkbox_label} htmlFor="vehicle1">Wagon Haulage Charges (in case of Delivery through railways)</label>
                                </div> 
                                <div className='pt-4 d-flex align-items-center'>   
                                    <input className={styles.checkbox} type="checkbox" id="vehicle1" value="Bike"/>
                                    <label className={styles.checkbox_label} htmlFor="vehicle1">3rd Party Inspection Charges</label>
                                </div> 
                                <div className='pt-4 d-flex align-items-center'>   
                                    <input className={styles.checkbox} type="checkbox" id="vehicle1" value="Bike"/>
                                    <label className={styles.checkbox_label} htmlFor="vehicle1">Hedging Charges</label>
                                </div> 
                                <div className='pt-4 d-flex align-items-center'>   
                                    <input className={styles.checkbox} type="checkbox" id="vehicle1" value="Bike"/>
                                    <label className={styles.checkbox_label} htmlFor="vehicle1">Any other cost incurred on behalf of Buyer</label>
                                </div> 
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className={`${styles.other_heading} row_head`}>Duty &amp; Taxes</h3>
                            <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                                <div className='d-flex align-items-center'>   
                                    <input className={styles.checkbox} type="checkbox" id="vehicle1" value="Bike"/>
                                    <label className={styles.checkbox_label} htmlFor="vehicle1">LC Opening Charges ( on LC value subject to minimum of USD 1500)</label>
                                </div> 
                                <div className='pt-4 d-flex align-items-center'>
                                    <input className={styles.checkbox} type="checkbox" id="vehicle2"  value="Bike"/>
                                    <label className={styles.checkbox_label} htmlFor="vehicle2">LC Amendment Cost</label>
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
                   
                </div>
            </Form>                
        </div>

       <div className={`${styles.footer}`}>
           All necessary documents to be filed with Customs department for discharge of goods & Customs clearance can be filed by IGPL or its nominated person. * GST charges extra wherever applicable
       </div>
      </Card>
      
    </div>
    <Paginatebar openbar={openbar} />
     {open ? <TermsheetPopUp close={close} open={open}/>:null}
      </>
   
  )
}

export default index