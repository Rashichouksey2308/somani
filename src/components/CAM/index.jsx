import React from 'react'
import styles from './index.module.scss'
import {Row,Col} from 'react-bootstrap'
function index() {
  return (
   
    <>
    {basicInfo()}
    {supplierInfo()}
    {groupExposure()}
                                   
    </>
        

        
  )
}

export default index

const basicInfo =()=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#auditorDetails" aria-expanded="true" aria-controls="auditorDetails">
                                            <h2 className="mb-0">Basic Info</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="auditorDetails" className="collapse" aria-labelledby="auditorDetails" data-parent="#profileAccordion">
                                           <div className={`${styles.info_wrapper}`}>
                                            <div className={`${styles.content} mb-4`}>
                                                    <Row className={`mb-3`}>
                                                <Col className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>Channel</span>
                                                     <span className={`${styles.value} pr-5`}>Online</span>
                                                </Col>
                                                <Col  className={` col-md-offset-2 d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`} >City</span>
                                                     <span className={`${styles.value} `}>Agra</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>Customer</span>
                                                     <span className={`${styles.value} pr-5`}>Jaiswal Nico</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`}>State</span>
                                                     <span className={`${styles.value}`}>Uttar Pradesh</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>Type of Business</span>
                                                     <span className={`${styles.value} pr-5`}>Manufacturer</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`}>Industry</span>
                                                     <span className={`${styles.value}`}>Construction</span>
                                                </Col>
                                            </Row>
                                            </div>
                                            <div className={`${styles.content} ${styles.highlight} mb-4`}>
                                                    <Row className={`mb-3`}>
                                                <Col className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>Order Value</span>
                                                     <span className={`${styles.value} pr-5`}>500 CR</span>
                                                </Col>
                                                <Col  className={` col-md-offset-2 d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`} >Commodity</span>
                                                     <span className={`${styles.value} `}>Iron</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>Quantity</span>
                                                     <span className={`${styles.value} pr-5`}>500 MT</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`}>Supplier</span>
                                                     <span className={`${styles.value}`}>Ramakrishnan Traders</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>Country of Origins</span>
                                                     <span className={`${styles.value} pr-5`}>India</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`}>Transaction Periody</span>
                                                     <span className={`${styles.value}`}>90 Days</span>
                                                </Col>
                                            </Row>
                                            </div>
                                            <div className={`${styles.content} mb-4`}>
                                                    <Row className={`mb-3`}>
                                                <Col className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>Port of Loading</span>
                                                     <span className={`${styles.value} pr-5`}>Vishakapatnam, AP</span>
                                                </Col>
                                                <Col  className={` col-md-offset-2 d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`} >Port of Discharge</span>
                                                     <span className={`${styles.value} `}>Vishakapatnam, AP</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>Exp. Date of Shipment</span>
                                                     <span className={`${styles.value} pr-5`}>14-05-2022</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`}>ETA at Discharge port</span>
                                                     <span className={`${styles.value}`}>30-05-2022</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>Laycan from</span>
                                                     <span className={`${styles.value} pr-5`}>14-06-2022</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`}>Laycan to</span>
                                                     <span className={`${styles.value}`}>14-06-2022</span>
                                                </Col>
                                            </Row>
                                            </div>
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const supplierInfo =()=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#auditorDetails" aria-expanded="true" aria-controls="auditorDetails">
                                            <h2 className="mb-0">Supplier Info</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="auditorDetails" className="collapse" aria-labelledby="auditorDetails" data-parent="#profileAccordion">
                                           <div className={`${styles.info_wrapper}`}>
                                            <div className={`${styles.content} mb-4`}>
                                                    <Row className={`mb-3`}>
                                                <Col className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>No. of Shipments</span>
                                                     <span className={`${styles.value} pr-5`}>9,000</span>
                                                </Col>
                                                <Col  className={` col-md-offset-2 d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`} >Port of Destination</span>
                                                     <span className={`${styles.value} `}>9,000</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>No. of Consignees</span>
                                                     <span className={`${styles.value} pr-5`}>9,000</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`}>Latest Shipment date</span>
                                                     <span className={`${styles.value}`}>22-02-2022</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>No. of HS codes</span>
                                                     <span className={`${styles.value} pr-5`}>9,000</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`}>Oldest shipment date</span>
                                                     <span className={`${styles.value}`}>22-05-2022</span>
                                                </Col>
                                            </Row>
                                             <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>Country of Origins</span>
                                                     <span className={`${styles.value} pr-5`}>India</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`}>Commodity to total trade (24 months)</span>
                                                     <span className={`${styles.value} ${styles.red_highlight}`}>15%</span>
                                                </Col>
                                            </Row>
                                            </div>
                                            <div className={styles.remark_Wrapper}>
                                                <p className={styles.remark_head}>Remark</p>
                                                <p>Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful.</p>
                                            </div>
                                           
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const groupExposure =()=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#auditorDetails" aria-expanded="true" aria-controls="auditorDetails">
                                            <h2 className="mb-0">Group Exposure Details</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="auditorDetails" className="collapse" aria-labelledby="auditorDetails" data-parent="#profileAccordion">
                                           <div className={`${styles.info_wrapper}`}>
                                           <Row>
                                               <Col md={4}>
                                                   <div className={`${styles.exposureCard}`}>
                                                       <Row>
                                                           <Col sm={12} className={`d-flex justify-content-start align-content-center  mb-5`}>
                                                               <div className={`${styles.icon} `}>
                                                                   <span className={`d-flex justify-content-center align-content-center`}>ET</span>
                                                               </div>
                                                              
                                                               <span className={` ${styles.name} ml-3 `}>Emerging Traders</span>
                                                           </Col>
                                                           <Col sm={12} className={`${styles.limit}   mb-5`}>
                                                               <div className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}>
                                                                <div className={`${styles.limit_box} `}>
                                                                <span className={`${styles.limit_label} `}>LIMIT</span>
                                                               
                                                              
                                                              
                                                               </div> 
                                                                <span>1,900.00</span>
                                                               </div>
                                                               <div className={`${styles.bar}`}>
                                                                   <div className={`${styles.fill}`}>
                                                                   
                                                               </div>
                                                               </div>
                                                           </Col>
                                                           <Col sm={12} className={`${styles.limit}   mb-5`}>
                                                               <div className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}>
                                                                <div className={`${styles.limit_box} `}>
                                                                <span className={`${styles.limit_label} `}>O/S BALANCE</span>
                                                               
                                                              
                                                              
                                                               </div> 
                                                                <span>1,900.00</span>
                                                               </div>
                                                               <div className={`${styles.bar}`}>
                                                                   <div className={`${styles.fill}`}>
                                                                   
                                                               </div>
                                                               </div>
                                                           </Col>
                                                           <Col sm={12} className={`${styles.limit}   mb-5`}>
                                                               <div className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}>
                                                                <div className={`${styles.limit_box} `}>
                                                                <span className={`${styles.limit_label} `}>CONDUCT</span>
                                                               
                                                              
                                                              
                                                               </div> 
                                                               
                                                               </div>
                                                               <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                                                           </Col>

                                                       </Row>
                                                   </div>
                                               </Col>
                                               <Col md={4}>
                                                   <div className={`${styles.exposureCard}`}>
                                                       <Row>
                                                           <Col sm={12} className={`d-flex justify-content-start align-content-center  mb-5`}>
                                                               <div className={`${styles.icon} `}>
                                                                   <span className={`d-flex justify-content-center align-content-center`}>ET</span>
                                                               </div>
                                                              
                                                               <span className={` ${styles.name} ml-3 `}>Emerging Traders</span>
                                                           </Col>
                                                           <Col sm={12} className={`${styles.limit}   mb-5`}>
                                                               <div className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}>
                                                                <div className={`${styles.limit_box} `}>
                                                                <span className={`${styles.limit_label} `}>LIMIT</span>
                                                               
                                                              
                                                              
                                                               </div> 
                                                                <span>1,900.00</span>
                                                               </div>
                                                               <div className={`${styles.bar}`}>
                                                                   <div className={`${styles.fill}`}>
                                                                   
                                                               </div>
                                                               </div>
                                                           </Col>
                                                           <Col sm={12} className={`${styles.limit}   mb-5`}>
                                                               <div className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}>
                                                                <div className={`${styles.limit_box} `}>
                                                                <span className={`${styles.limit_label} `}>O/S BALANCE</span>
                                                               
                                                              
                                                              
                                                               </div> 
                                                                <span>1,900.00</span>
                                                               </div>
                                                               <div className={`${styles.bar}`}>
                                                                   <div className={`${styles.fill}`}>
                                                                   
                                                               </div>
                                                               </div>
                                                           </Col>
                                                          

                                                       </Row>
                                                   </div>
                                               </Col>
                                               <Col md={4}>1</Col>
                                           </Row>
                                           
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}