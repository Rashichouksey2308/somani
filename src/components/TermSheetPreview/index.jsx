import React,{useState} from 'react'
import styles from './index.module.scss'
import {Row,Col,Container,Card} from 'react-bootstrap'
import Paginatebar from '../Paginatebar'
import TermsheetPopUp from '../TermsheetPopUp'
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
       <div className={styles.root_container}>
      <div  className={styles.head_container}>
        <div className={styles.head_header}>
          <img className={styles.arrow}
            src="/static/keyboard_arrow_right-3.svg" />
          <h1 className={styles.heading}>Termsheet Preview</h1>
        </div>
      </div>
      <div  className={`${styles.term_container} mb-3 mt-3 container-fluid `}>
       <Row className={`h-50`}>
           <Col sm={12} className={`d-flex justify-content-center align-items-center`}>
           <span>TERMSHEET</span>
           </Col>
       </Row>
        <Row  className={`h-50`}>
           <Col md={6} className={`d-flex justify-content-start align-items-center`}>
           <div><span className={styles.termSub_head}>Buyer:</span>M/s Vishnu Chemicals Limited</div>
           </Col>
            <Col md={6} className={`d-flex justify-content-end  align-items-center`}>
           <div><span className={styles.termSub_head}>Order ID:</span>2FCH6589</div>
           </Col>
       </Row>
      </div>
      <Card className={styles.content}>
       <div>
        <Row className={styles.row_head}>
            <Col md={4} className={`${styles.content_header} d-flex justify-content-center align-content-center`}>
             
            <span>Commodity Details</span>
            
            </Col>
            <Col md={8}>{""}</Col>
          </Row>
          <Row>
            <Col md={4} className={`${styles.sub_content} pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                 <li>Commodity Name</li>
                  <li>Quantity</li>
                   <li>Unit Price</li>
             </ol>
            
            </Col>
            <Col md={8}  className={`${styles.sub_contentValue} pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 <li>Chrome Ore</li>
                  <li>5000 MT (± 10%)</li>
                   <li>USD 243/MT</li>
             </ul>
            </Col>
        </Row>
       </div>
        <div>
        <Row className={styles.row_head}>
            <Col md={4} className={`${styles.content_header} d-flex justify-content-center align-content-center`}>
             
            <span>Transaction Details</span>
            
            </Col>
            <Col md={8}>{""}</Col>
          </Row>
          <Row>
            <Col md={4} className={`${styles.sub_content} pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                 <li>4. LC Value</li>
                  <li>5. LC opening Bank</li>
                   <li>6. Margin Money as % of Import Valuee</li>
             </ol>
            
            </Col>
            <Col md={8}  className={`${styles.sub_contentValue} pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 <li>USD 2000</li>
                  <li>First Class European Bank)</li>
                   <li>10%T</li>
             </ul>
            </Col>
        </Row>
       </div>
        <div>
        <Row className={styles.row_head}>
            <Col md={4} className={`${styles.content_header} d-flex justify-content-center align-content-center`}>
             
            <span>Payment Due Date</span>
            
            </Col>
            <Col md={8}>{""}</Col>
          </Row>
          <Row>
            <Col md={4} className={`${styles.sub_content} pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                 <li>7. Computation of Due Date*</li>
          
             </ol>
            
            </Col>
            <Col md={8}  className={`${styles.sub_contentValue} pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 <li>90 days from the date of arrival of vessel/containers at discharge port or 120 days from the BL date, whichever is earlier, through TT or LC (in the case of LC all Bank charges to be borne and paid by the Buyer). LC Discounting rate Presently @ 4.75% for 90 days usance LC in case of 120 days usance LC Discounting it is subject to actual discounting charges a per the discounting Bank done with proof of charges.</li>
                 
             </ul>
            </Col>
        </Row>
       </div>
        <div>
        <Row className={styles.row_head}>
            <Col md={4} className={`${styles.content_header_other} d-flex justify-content-center align-content-center`}>
             
            <span>Other Terms & Conditions</span>
            
            </Col>
            <Col md={8}>{""}</Col>
          </Row>
          <Row>
            <Col md={12} className={`${styles.sub_content_other} pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             Below charges are to be borne and paid by the Buyer on actual basis,wherever applicable. Indo German International Private Limited (IGPL) will provide proof of all expenses to the Buyer.
            
            
            </Col>
         
        </Row>
       </div>
       
       <div className={styles.checkMarks}>
       <div className={styles.left} >
           <div className={styles.head}>CHA / Stevedoring Charges</div>
           <div className={styles.checkContent}>
               <div>
                   <input type="checkbox"/>
                   <span>Customs clearing charges / handling charges / CHA Fee</span>
               </div>
               <div>
                   <input type="checkbox"/>
                   <span>Wharfage Charges</span>
               </div>
               <div>
                   <input type="checkbox"/>
                   <span>Wharfage Charges</span>
               </div>
               <div>
                   <input type="checkbox"/>
                   <span>Royalty and Penalty Charges</span>
               </div>
               <div>
                   <input type="checkbox"/>
                   <span>Tarpaulin Coverage Charges</span>
               </div>
               <div>
                   <input type="checkbox"/>
                   <span>Wheighment & Weighment Survey Charges</span>
               </div>
               <div>
                   <input type="checkbox"/>
                   <span>Draught Survey Chargese</span>
               </div>
               <div>
                   <input type="checkbox"/>
                   <span>Boating while Draught Survey Charges</span>
               </div>
               <div>
                   <input type="checkbox"/>
                   <span>HMC Charges</span>
               </div>
               <div>
                   <input type="checkbox"/>
                   <span>Security Charges</span>
               </div>
               <div>
                   <input type="checkbox"/>
                   <span>Plot Rental & Storage Charges</span>
               </div>
               <div>
                   <input type="checkbox"/>
                   <span>Bonding of Cargo Charges</span>
               </div>
                <div>
                   <input type="checkbox"/>
                   <span>Ex - Bond Documentation Charges</span>
               </div>
                <div>
                   <input type="checkbox"/>
                   <span>Transfer of Ownership Charges</span>
               </div>
                <div>
                   <input type="checkbox"/>
                   <span>Customs Bond Officer Overtime Charges</span>
               </div>
                <div>
                   <input type="checkbox"/>
                   <span>Grab Hire Charges ( if any )</span>
               </div>
                <div>
                   <input type="checkbox"/>
                   <span>Crane Hire Charges</span>
               </div>
                <div>
                   <input type="checkbox"/>
                   <span>Handling Losses</span>
               </div>
                 <div>
                   <input type="checkbox"/>
                   <span>Insurance Charges ( While transferring the material to customs bonded ware house )</span>
               </div>
                 <div>
                   <input type="checkbox"/>
                   <span>Water Sprinkling Charges</span>
               </div>
                 <div>
                   <input type="checkbox"/>
                   <span>Others, if any</span>
               </div>

           </div>
       </div>
       <div className={styles.right} >
          <div className={styles.head}>LC Opening Charges</div>
           <div className={styles.checkContent}>
               <div>
                   <input type="checkbox"/>
                   <span>LC Opening Charges ( on LC value subject to minimum of USD 1500)</span>
               </div>
               <div>
                   <input type="checkbox"/>
                   <span>LC Amendment Cost</span>
               </div>
               <div>
                   <input type="checkbox"/>
                   <span>CMA Fees including supervision and survey</span>
               </div>
               <div>
                   <input type="checkbox"/>
                   <span>Bank DO Issuance charges</span>
               </div>
                  <div>
                   <input type="checkbox"/>
                   <span>Remmittance Charges</span>
               </div>
                  <div>
                   <input type="checkbox"/>
                   <span>Usance Interest</span>
               </div>
               <div>
                  <div className={styles.subhead}>Other Charges</div>
                   <div>
                   <input type="checkbox"/>
                   <span>Demurrage / Detention Charges of Vessel</span>
               </div>
                <div>
                   <input type="checkbox"/>
                   <span>Transportation Charges</span>
               </div>
                <div>
                   <input type="checkbox"/>
                   <span>Wagon Haulage Charges ( in case of delivery through railways )s</span>
               </div>
                <div>
                   <input type="checkbox"/>
                   <span>3rd Party Inspection Charges</span>
               </div>
                <div>
                   <input type="checkbox"/>
                   <span>Hedging Charges</span>
               </div>
               <div>
                   <input type="checkbox"/>
                   <span>Any other cost incurred on behalf of Buyer</span>
               </div>
               </div>
                <div>
                  <div className={styles.subhead}>Duty & Taxes</div>
                   <div>
                   <input type="checkbox"/>
                   <span>Customs Duty with all Govt Cess</span>
               </div>
                <div>
                   <input type="checkbox"/>
                   <span>IGST with Cess, if applicable</span>
               </div>
                <div>
                   <input type="checkbox"/>
                   <span>CIMS Charges ( incase commodity is Coal )</span>
               </div>
                <div>
                   <input type="checkbox"/>
                   <span>Hedging Charges</span>
               </div>
              
               </div>
                <div>
             
              
               </div>

                <div>
                  <div className={styles.subhead}>Insurance</div>
                   <div>
                   <input type="checkbox"/>
                   <span>Marine Insurance ( if applicable )</span>
               </div>
                <div>
                   <input type="checkbox"/>
                   <span>{`Storage Insurance ( Fire & Burglary )`}s</span>
               </div>
               
              
               </div>
            
             
           </div>
       </div>
       </div>

       <div className={styles.footer}>
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