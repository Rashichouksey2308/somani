import React from 'react'
import styles from './index.module.scss'
import {Row,Col} from 'react-bootstrap'
import { Doughnut,Line } from 'react-chartjs-2'
import { Chart, ArcElement, registerables, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale,Filler } from 'chart.js'

Chart.register(ArcElement,LineController, LineElement, PointElement, LinearScale, Title, CategoryScale,Filler)
function index() {
     let tempArr = [
    { name: 'Sagar Sinha', value: '21', color: '#9675CE' },
    { name: 'Radhe Singh', value: '23', color: '#4CAF50' },
    { name: 'Arv Jay', value: '23', color: '#EA3F3F' },
  
  ]
  let data = {
    labels: [
      'Sail',
      'Jindal Grou',
      'SR Steel',
      
    ],
    datasets: [
      {
        label: '',
        data: [25, 20, 55],

        backgroundColor: ['#4CAF50', '#EA3F3F', '#2884DE',],
      },
    ],
  }
  const options = {
    plugins: {
      title: {
        display: false,
        text: 'Doughnut Chart',
        color: 'blue',
        cutoutPercentage: 80,
        font: {
          size: 34,
        },
        padding: {
          top: 30,
          bottom: 30,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
  }

  const lineOption={
  tension:0.1,
  fill:true,
   elements: {
                    point:{
                        radius: 0
                    }
                }
}
let dataline={  
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor:  'rgba(75,192,192,1)',
      borderColor: "rgba(75,192,192,1)"
    },

  ]}
  return (
   
    <>
    {basicInfo()}
    {supplierInfo()}
    {groupExposure()}
    {orderSummary()}
    {creditProfile()}
    {directorDetails()}
    {shareHolding(data,options,tempArr)}
    {chargeDetails(data,options,tempArr)}
    {debtProfile(data,options,tempArr)}
    {operationalDetails()}
    {revenuDetails()}
    {trends(dataline,lineOption)}
    {skewness(data,options,tempArr)}
    {financeDetails()}
    {compilanceStatus()}
    {strengthAndWeakness()}
    {sectionTerms()}
    {Documents()}
                                   
    </>
        

        
  )
}

export default index

const basicInfo =()=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#basicInfo" aria-expanded="true" aria-controls="basicInfo">
                                            <h2 className="mb-0">Basic Info</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="basicInfo" className="collapse" aria-labelledby="basicInfo" data-parent="#profileAccordion">
                                           <div className={`${styles.info_wrapper}  card-body border_color`}>
                                            <div className={`${styles.content} mb-4`}>
                                                    <Row className={`mb-3`}>
                                                <Col className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading`}>Channel</span>
                                                     <span className={`${styles.value} pr-5`}>Online</span>
                                                </Col>
                                                <Col  className={` col-md-offset-2 d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading pl-5`} >City</span>
                                                     <span className={`${styles.value} `}>Agra</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading`}>Customer</span>
                                                     <span className={`${styles.value} pr-5`}>Jaiswal Nico</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading pl-5`}>State</span>
                                                     <span className={`${styles.value}`}>Uttar Pradesh</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading`}>Type of Business</span>
                                                     <span className={`${styles.value} pr-5`}>Manufacturer</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading pl-5`}>Industry</span>
                                                     <span className={`${styles.value}`}>Construction</span>
                                                </Col>
                                            </Row>
                                            </div>
                                            <div className={`${styles.content} ${styles.highlight} card_sub_header  mb-4`}>
                                                    <Row className={`mb-3`}>
                                                <Col className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} `}>Order Value</span>
                                                     <span className={`${styles.value} pr-5`}>500 CR</span>
                                                </Col>
                                                <Col  className={` col-md-offset-2 d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}  pl-5`} >Commodity</span>
                                                     <span className={`${styles.value} `}>Iron</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} `}>Quantity</span>
                                                     <span className={`${styles.value} pr-5`}>500 MT</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}  pl-5`}>Supplier</span>
                                                     <span className={`${styles.value}`}>Ramakrishnan Traders</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} `}>Country of Origins</span>
                                                     <span className={`${styles.value} pr-5`}>India</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}  pl-5`}>Transaction Periody</span>
                                                     <span className={`${styles.value}`}>90 Days</span>
                                                </Col>
                                            </Row>
                                            </div>
                                            <div className={`${styles.content}  mb-4`}>
                                                    <Row className={`mb-3`}>
                                                <Col className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading`}>Port of Loading</span>
                                                     <span className={`${styles.value} pr-5`}>Vishakapatnam, AP</span>
                                                </Col>
                                                <Col  className={` col-md-offset-2 d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading pl-5`} >Port of Discharge</span>
                                                     <span className={`${styles.value} `}>Vishakapatnam, AP</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading`}>Exp. Date of Shipment</span>
                                                     <span className={`${styles.value} pr-5`}>14-05-2022</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading pl-5`}>ETA at Discharge port</span>
                                                     <span className={`${styles.value}`}>30-05-2022</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading`}>Laycan from</span>
                                                     <span className={`${styles.value} pr-5`}>14-06-2022</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading pl-5`}>Laycan to</span>
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
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#supplierInfo" aria-expanded="true" aria-controls="supplierInfo">
                                            <h2 className="mb-0">Supplier Info</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="supplierInfo" className="collapse" aria-labelledby="supplierInfo" data-parent="#profileAccordion">
                                           <div className={`${styles.info_wrapper}  card-body border_color`}>
                                            <div className={`${styles.content} mb-4`}>
                                                    <Row className={`mb-3`}>
                                                <Col className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading`}>No. of Shipments</span>
                                                     <span className={`${styles.value} pr-5`}>9,000</span>
                                                </Col>
                                                <Col  className={` col-md-offset-2 d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading pl-5`} >Port of Destination</span>
                                                     <span className={`${styles.value} `}>9,000</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading`}>No. of Consignees</span>
                                                     <span className={`${styles.value} pr-5`}>9,000</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading pl-5`}>Latest Shipment date</span>
                                                     <span className={`${styles.value}`}>22-02-2022</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading`}>No. of HS codes</span>
                                                     <span className={`${styles.value} pr-5`}>9,000</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading pl-5`}>Oldest shipment date</span>
                                                     <span className={`${styles.value}`}>22-05-2022</span>
                                                </Col>
                                            </Row>
                                             <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading`}>Country of Origins</span>
                                                     <span className={`${styles.value} pr-5`}>India</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading pl-5`}>Commodity to total trade (24 months)</span>
                                                     <span className={`${styles.value} ${styles.red_highlight}`}>15%</span>
                                                </Col>
                                            </Row>
                                            </div>
                                            <div className={`${styles.remark_Wrapper}`}>
                                                <p className={`${styles.remark_head} label_heading`}>Remark</p>
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
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#groupExposure" aria-expanded="true" aria-controls="groupExposure">
                                            <h2 className="mb-0">Group Exposure Details</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="groupExposure" className="collapse" aria-labelledby="groupExposure" data-parent="#profileAccordion">
                                           <div className={`${styles.info_wrapper} card-body border_color`}>
                                           <Row>
                                               <Col md={4}>
                                                   <div className={`${styles.exposureCard}`}>
                                                       <Row>
                                                           <Col sm={12} className={`d-flex justify-content-start align-content-center  mb-5`}>
                                                               <div className={`${styles.icon} `}>
                                                                   <span className={`d-flex justify-content-center align-content-center`}>ET</span>
                                                               </div>
                                                              
                                                               <span className={` ${styles.name} ml-3  `}>Emerging Traders</span>
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
const orderSummary =()=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#orderSummary" aria-expanded="true" aria-controls="orderSummary">
                                            <h2 className="mb-0">Order Summary In Past 12 Months</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="orderSummary" className="collapse" aria-labelledby="orderSummary" data-parent="#profileAccordion">
                                           <div className={`${styles.order_wrapper} border_color`}>
                                           <table className ={`${styles.table} table  border_color`}cellpadding="0" cellspacing="0" >
                                               <tr>
                                                   <th >CUSTOMER NAME</th>
                                                    <th>ORDER NO</th>
                                                     <th>ORDER VALUE</th>
                                                      <th>COMMODITY</th>
                                                       <th>STATUS</th>

                                                        <th>DAYS DUE</th>
                                               </tr>
                                               <tr >
                                                   <td >SEP 2021 - DEC 2021</td>
                                                      
                                                      <td colSpan={5}>
                                                          <div className={`${styles.dashedLine}`}></div>
                                                      </td>

                                                     
                                               </tr>
                                                 <tr>
                                                   <td className={`d-flex justify-content-start align-content-center`}>
                                                        <div className={`${styles.icon} `}>
                                                                   <span className={`d-flex justify-content-center align-content-center`}>ET</span>
                                                               </div>
                                                              
                                                               <span className={` ${styles.name} ml-3  `}>Emerging Traders</span>
                                                   </td>
                                                    <td>2765470865</td>
                                                     <td>1,900.00</td>
                                                      <td>Iron</td>
                                                       <td>In Process</td>

                                                        <td>12</td>
                                               </tr>
                                           </table>
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const creditProfile =()=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#creditProfile" aria-expanded="true" aria-controls="creditProfile">
                                            <h2 className="mb-0">Credit Profile</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="creditProfile" className="collapse" aria-labelledby="creditProfile" data-parent="#profileAccordion">
                                           <div className={`${styles.info_wrapper} card-body border_color`}>
                                            <div className={`${styles.content} mb-4`}>
                                                    <Row className={`mb-3`}>
                                                <Col className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading`}>Main Banker</span>
                                                     <span className={`${styles.value} pr-5`}>HDFC Bank</span>
                                                </Col>
                                                <Col  className={` col-md-offset-2 d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading pl-5`} >External Credit rating</span>
                                                     <span className={`${styles.value} `}>A3+</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading`}>Open Charges</span>
                                                     <span className={`${styles.value} pr-5`}>4652348723</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading pl-5`}>Credit Rating Agency</span>
                                                     <span className={`${styles.value}`}>American First</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading`}>Name of Auditor</span>
                                                     <span className={`${styles.value} pr-5`}>John Doe</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} label_heading pl-5`}>Change in Auditor</span>
                                                     <span className={`${styles.value} `}>Yes</span>
                                                </Col>
                                            </Row>
                                            </div>
                                            
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const directorDetails =()=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#directorDetails" aria-expanded="true" aria-controls="directorDetails">
                                            <h2 className="mb-0">Director Details</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="directorDetails" className="collapse" aria-labelledby="directorDetails" data-parent="#profileAccordion">
                                           <div className={`${styles.order_wrapper} card-body`}>
                                           <table className ={`${styles.table} table  border_color`}cellpadding="0" cellspacing="0" >
                                               <tr>
                                                   <th>NAME</th>
                                                    <th>PAN</th>
                                                     <th>DIN NUMBER</th>
                                                      <th>DATE OF APPOINTMENT</th>
                                                       <th>% SHAREHOLDING</th>

                                                       
                                               </tr>
                                            
                                                 <tr>
                                                   <td className={`d-flex justify-content-start align-content-center`}>
                                                        <div className={`${styles.icon} `}>
                                                                   <span className={`d-flex justify-content-center align-content-center`}>AJ</span>
                                                               </div>
                                                              
                                                               <span className={` ${styles.name} ml-3  `}>% SHAREHOLDING</span>
                                                   </td>
                                                    <td>27AAATW4183</td>
                                                     <td>17872982008    </td>
                                                      <td>20-08-2011</td>
                                                       <td>30%</td>

                                                        
                                               </tr>
                                                <tr>
                                                   <td className={`d-flex justify-content-start align-content-center`}>
                                                        <div className={`${styles.icon} `}>
                                                                   <span className={`d-flex justify-content-center align-content-center`}>SS</span>
                                                               </div>
                                                              
                                                               <span className={` ${styles.name} ml-3  `}>Sagar Sinha</span>
                                                   </td>
                                                    <td>27AAATW4183</td>
                                                     <td>17872982008    </td>
                                                      <td>20-08-2011</td>
                                                       <td>30%</td>

                                                        
                                               </tr>
                                                <tr>
                                                   <td className={`d-flex justify-content-start align-content-center`}>
                                                        <div className={`${styles.icon} `}>
                                                                   <span className={`d-flex justify-content-center align-content-center`}>RS</span>
                                                               </div>
                                                              
                                                               <span className={` ${styles.name} ml-3  `}>Radhe Singh</span>
                                                   </td>
                                                    <td>27AAATW4183</td>
                                                     <td>17872982008    </td>
                                                      <td>20-08-2011</td>
                                                       <td>30%</td>

                                                        
                                               </tr>
                                           </table>
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const shareHolding =(data,options,tempArr)=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#shareHolding" aria-expanded="true" aria-controls="shareHolding">
                                            <h2 className="mb-0">Shareholding Details</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="shareHolding" className="collapse" aria-labelledby="shareHolding" data-parent="#profileAccordion">
                                           <div className={`${styles.order_wrapper} card-body`}>
                                            <Row>
                                                <Col className={`${styles.leftCol} border_color`} md={5}>
                                                      <div className={styles.chart}>
                                                        <Doughnut data={data} options={options} />
                                                        <div className={styles.total_value}>
                                                            <span>Sagar Sinha</span>
                                                             <span className={styles.highlight}>83.80%</span>
                                                        </div>
                                                        </div>
                                                         <div className={`${styles.name} `}>
                                                            {tempArr.map((val, index) => {
                                                                return (
                                                                <div key={index} className={`${styles.name_wrapper} d-flex justify-content-center align-item-center`}>
                                                                    <div
                                                                    className={styles.round}
                                                                    style={{ backgroundColor: `${val.color}` }}
                                                                    ></div>
                                                                    <span className={` heading ml-2`}>{val.name}</span>
                                                                </div>
                                                                )
                                                            })}
                                                            </div>
                                                </Col>
                                                <Col md={7} className={`pl-0`}>
                                                 <table className ={`${styles.table} table  border_color `}cellpadding="0" cellspacing="0" >
                                               <tr>
                                                   <th>NAME</th>
                                                    <th>NO. OF SHARES</th>
                                                     <th>% SHARE</th>
                                                      <th>DIRECTOR</th>
                                                      

                                                       
                                               </tr>
                                            
                                                 <tr>
                                                   <td className={`d-flex justify-content-start align-content-center`}>
                                                        <div className={`${styles.icon} `}>
                                                                   <span className={`d-flex justify-content-center align-content-center`}>AJ</span>
                                                               </div>
                                                              
                                                               <span className={` ${styles.name} ml-3  `}>% SHAREHOLDING</span>
                                                   </td>
                                                    <td>120</td>
                                                     <td>80%    </td>
                                                      <td>Yes</td>
                                                      

                                                        
                                               </tr>
                                                <tr>
                                                   <td className={`d-flex justify-content-start align-content-center`}>
                                                        <div className={`${styles.icon} `}>
                                                                   <span className={`d-flex justify-content-center align-content-center`}>SS</span>
                                                               </div>
                                                              
                                                               <span className={` ${styles.name} ml-3  `}>Sagar Sinha</span>
                                                   </td>
                                                   <td>120</td>
                                                     <td>80%    </td>
                                                      <td>Yes</td>
                                                      

                                                        
                                               </tr>
                                                <tr>
                                                   <td className={`d-flex justify-content-start align-content-center`}>
                                                        <div className={`${styles.icon} `}>
                                                                   <span className={`d-flex justify-content-center align-content-center`}>RS</span>
                                                               </div>
                                                              
                                                               <span className={` ${styles.name} ml-3  `}>Radhe Singh</span>
                                                   </td>
                                                     <td>120</td>
                                                     <td>80%    </td>
                                                      <td>Yes</td>
                                                      

                                                        
                                               </tr>
                                           </table> 
                                                </Col>
                                            </Row>
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const chargeDetails =(data,options,tempArr)=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#chargeDetails" aria-expanded="true" aria-controls="chargeDetails">
                                            <h2 className="mb-0">Open Bank Charge Details</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="chargeDetails" className="collapse" aria-labelledby="chargeDetails" data-parent="#profileAccordion">
                                           <div className={`${styles.order_wrapper} card-body`}>
                                            <Row>
                                                <Col className={`${styles.leftCol} border_color`} md={5}>
                                                      <div className={styles.chart}>
                                                        <Doughnut data={data} options={options} />
                                                        <div className={styles.total_value}>
                                                            <span>Sagar Sinha</span>
                                                             <span className={styles.highlight}>83.80%</span>
                                                        </div>
                                                        </div>
                                                         <div className={`${styles.name} `}>
                                                            {tempArr.map((val, index) => {
                                                                return (
                                                                <div key={index} className={`${styles.name_wrapper} d-flex justify-content-center align-item-center`}>
                                                                    <div
                                                                    className={styles.round}
                                                                    style={{ backgroundColor: `${val.color}` }}
                                                                    ></div>
                                                                    <span className={` heading ml-2`}>{val.name}</span>
                                                                </div>
                                                                )
                                                            })}
                                                            </div>
                                                </Col>
                                                <Col md={7} className={`pl-0`}>
                                                 <table className ={`${styles.table} table  border_color `}cellpadding="0" cellspacing="0" >
                                               <tr>
                                                   <th>BANK NAME</th>
                                                    <th>CHARGE AMOUNT</th>
                                                     <th>DATE OF CREATION</th>
                                                     
                                                      

                                                       
                                               </tr>
                                            
                                                 <tr>
                                                   <td className={`d-flex justify-content-start align-content-center`}>
                                                        <div className={`${styles.icon} `}>
                                                                   <span className={`d-flex justify-content-center align-content-center`}>AJ</span>
                                                               </div>
                                                              
                                                               <span className={` ${styles.name} ml-3  `}>% SHAREHOLDING</span>
                                                   </td>
                                                    <td>1,900.00</td>
                                                   
                                                      <td>22-02-2020</td>
                                                      

                                                        
                                               </tr>
                                                <tr>
                                                   <td className={`d-flex justify-content-start align-content-center`}>
                                                        <div className={`${styles.icon} `}>
                                                                   <span className={`d-flex justify-content-center align-content-center`}>SS</span>
                                                               </div>
                                                              
                                                               <span className={` ${styles.name} ml-3  `}>Sagar Sinha</span>
                                                   </td>
                                                    <td>1,900.00</td>
                                                   
                                                      <td>22-02-2020</td>
                                                      

                                                        
                                               </tr>
                                                <tr>
                                                   <td className={`d-flex justify-content-start align-content-center`}>
                                                        <div className={`${styles.icon} `}>
                                                                   <span className={`d-flex justify-content-center align-content-center`}>RS</span>
                                                               </div>
                                                              
                                                               <span className={` ${styles.name} ml-3  `}>Radhe Singh</span>
                                                   </td>
                                                        <td>1,900.00</td>
                                                   
                                                      <td>22-02-2020</td>
                                                      

                                                        
                                               </tr>
                                           </table> 
                                                </Col>
                                            </Row>
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const debtProfile =(data,options,tempArr)=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#debtProfile" aria-expanded="true" aria-controls="debtProfile">
                                            <h2 className="mb-0">Debt Profile</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="debtProfile" className="collapse" aria-labelledby="debtProfile" data-parent="#profileAccordion">
                                           <div className={`${styles.order_wrapper} card-body`}>
                                            <Row>
                                                <Col className={`${styles.leftCol} border_color`} md={5}>

                                                             <div className={`${styles.label} d-flex justify-content-between align-content-center  `}>
                                                                <div className={`${styles.limit_box} `}>
                                                                <span className={`${styles.limit_label} `}>LIMIT</span>
                                                               
                                                              
                                                              
                                                               </div> 
                                                                <span>1,900.00</span>
                                                               </div>
                                                               <div className={`${styles.bar}`}>
                                                                   <div className={`${styles.fill}`}>
                                                                   
                                                               </div>
                                                               </div>

                                                            <div className={`mt-4`}>
                                                                   <div className={`${styles.label} d-flex justify-content-between align-content-center  `}>
                                                                <div className={`${styles.limit_box} `}>
                                                                <span className={`${styles.limit_label} `}>LIMIT</span>
                                                               
                                                              
                                                              
                                                               </div> 
                                                                <span>1,900.00</span>
                                                               </div>
                                                               <div className={`${styles.bar} ${styles.small_bar}`}>
                                                                <span style ={{color:"#EA3F3F"}}>dis</span>
                                                               <div style ={{backgroundColor:"#EA3F3F"}} className={`${styles.fill}`}>
                                                                
                                                                   
                                                               </div>
                                                               </div>
                                                            </div>
                                                              <div  className={`mt-4`}>
                                                                   <div className={`${styles.label} d-flex justify-content-between align-content-center  `}>
                                                                <div className={`${styles.limit_box} `}>
                                                                <span className={`${styles.limit_label} `} >LIMIT</span>
                                                               
                                                              
                                                              
                                                               </div> 
                                                                <span>1,900.00</span>
                                                               </div>
                                                               <div className={`${styles.bar} ${styles.small_bar}`}>
                                                                <span style ={{color:"#43C34D"}}>Cash Credit</span>
                                                               <div style ={{backgroundColor:"#43C34D"}} className={`${styles.fill}`}>
                                                                
                                                                   
                                                               </div>
                                                               </div>
                                                            </div>
                                                              <div  className={`mt-4`}>
                                                                   <div className={`${styles.label} d-flex justify-content-between align-content-center  `}>
                                                                <div className={`${styles.limit_box} `}>
                                                                <span className={`${styles.limit_label} `}>LIMIT</span>
                                                               
                                                              
                                                              
                                                               </div> 
                                                                <span>1,900.00</span>
                                                               </div>
                                                               <div className={`${styles.bar} ${styles.small_bar}`}>
                                                                <span style ={{color:"#FF9D00"}}>Cash Credit</span>
                                                               <div style ={{backgroundColor:"#FF9D00"}} className={`${styles.fill}`}>
                                                                
                                                                   
                                                               </div>
                                                               </div>
                                                            </div>
                                                               
                                                     
                                                </Col>
                                                <Col md={7} className={`pl-0`}>
                                                 <table className ={`${styles.table} table  border_color `}cellpadding="0" cellspacing="0" >
                                               <tr>
                                                   <th>BANK NAME</th>
                                                    <th>LIMIT TYPE</th>
                                                     <th>LIMITS</th>
                                                       <th>CONDUCT</th>
                                                     
                                                      

                                                       
                                               </tr>
                                            
                                                 <tr>
                                                   <td>
                                                     ICICI Bank
                                                   </td>
                                                    <td>

                                                         <select  className={`${styles.value} form-control`} required>
                                                        <option >Cash Credit</option>
                                                        <option >Post Ship Credit</option>
                                                         <option >Bank Guarantee</option>
                                                    </select>
                                                    </td>
                                                   
                                                      <td>₹ 800.00</td>
                                                       <td className={`${styles.conduct}`}>Poor</td>
                                                      

                                                        
                                               </tr>
                                                <tr>
                                                 <td>
                                                     ICICI Bank
                                                   </td>
                                                    <td>

                                                         <select  className={`${styles.value} form-control`} required>
                                                        <option >Cash Credit</option>
                                                        <option >Post Ship Credit</option>
                                                         <option >Bank Guarantee</option>
                                                    </select>
                                                    </td>
                                                   
                                                      <td>₹ 800.00</td>
                                                       <td className={`${styles.conduct}`}>Poor</td>
                                                      
                                                      

                                                        
                                               </tr>
                                                <tr>
                                                  <td>
                                                     ICICI Bank
                                                   </td>
                                                    <td>

                                                         <select  className={`${styles.value} form-control`} required>
                                                        <option >Cash Credit</option>
                                                        <option >Post Ship Credit</option>
                                                         <option >Bank Guarantee</option>
                                                    </select>
                                                    </td>
                                                   
                                                      <td>₹ 800.00</td>
                                                       <td className={`${styles.conduct}`}>Poor</td>
                                                      

                                                        
                                               </tr>
                                           </table> 
                                                </Col>
                                            </Row>
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const operationalDetails =()=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#operationalDetails" aria-expanded="true" aria-controls="operationalDetails">
                                            <h2 className="mb-0">Credit Profile</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="operationalDetails" className="collapse" aria-labelledby="operationalDetails" data-parent="#profileAccordion">
                                           <div className={`${styles.info_wrapper} card-body border_color`}>
                                            <div className={`${styles.content} mb-4`}>
                                                    <Row className={`mb-3`}>
                                                <Col className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>Plant Production Capacity</span>
                                                     <span className={`${styles.value} pr-5`}>4,320.00 MTk</span>
                                                </Col>
                                                <Col  className={` col-md-offset-2 d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`} >Stock in Transit - Commodity</span>
                                                     <span className={`${styles.value} `}>4,320.00 MT</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>Capacity Utilization</span>
                                                     <span className={`${styles.value} pr-5`}>80%</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`}>Stock Coverage of Commodity</span>
                                                     <span className={`${styles.value}`}>30 Days</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>Available Stock of Commodity</span>
                                                     <span className={`${styles.value} pr-5`}>4,320.00 MT</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`}>Avg Monthly Electricity Bill</span>
                                                     <span className={`${styles.value} `}>₹ 4,320.00</span>
                                                </Col>
                                                
                                            </Row>
                                              <Row  className={`mb-3`}>
                                               <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`}>Daily Consumption of Commodity</span>
                                                     <span className={`${styles.value} `}>4,320.00 MT</span>
                                                </Col>
                                                
                                            </Row>
                                           
                                            </div>
                                            
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const revenuDetails =()=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#revenuDetails" aria-expanded="true" aria-controls="revenuDetails">
                                            <h2 className="mb-0">Revenue Details</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="revenuDetails" className="collapse" aria-labelledby="revenuDetails" data-parent="#profileAccordion">
                                           <div className={`${styles.order_wrapper} card-body`}>
                                           <table className ={`${styles.table} table  border_color`}cellpadding="0" cellspacing="0" >
                                               <tr>
                                                   <th></th>
                                                    <th>TREND</th>
                                                     <th>LATEST YEAR</th>
                                                      <th>PREVIOUS YEAR</th>
                                                       <th>GROWTH</th>

                                                       
                                               </tr>
                                            
                                                 <tr>
                                                   <td>
                                                       Gross Revenue
                                                   </td>
                                                    <td>27AAATW4183</td>
                                                     <td>11,900.00 </td>
                                                      <td>1,900.00</td>
                                                       <td>40%</td>

                                              </tr>
                                                 <tr>
                                                   <td>
                                                       Related Party Sales
                                                   </td>
                                                    <td>27AAATW4183</td>
                                                     <td>11,900.00 </td>
                                                      <td>1,900.00</td>
                                                       <td>40%</td>

                                              </tr>
                                           </table>
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const financeDetails =(data,options,tempArr)=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#financeDetails" aria-expanded="true" aria-controls="financeDetails">
                                            <h2 className="mb-0">Financial Summary</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="financeDetails" className="collapse" aria-labelledby="financeDetails" data-parent="#profileAccordion">
                                           <div className={`${styles.order_wrapper2} card-body`}>
                                            <Row>
                                                <Col className={`${styles.leftCol} p-0 border_color`} md={5}>

                                              <table className ={`${styles.table} table  border_color `} cellpadding="0" cellspacing="0" >
                                               <tr>
                                                   <th>Liabilities</th>
                                                   <th>MAR-20</th>
                                                   <th>MAR-19</th>
                                               </tr>
                                                <tr>
                                                   <td>
                                                   Net Worth
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                  <tr>
                                                   <td>
                                                Total Borrowings
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                  <tr>
                                                   <td>
                                                 Creditors
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                  <tr>
                                                   <td>
                                               Other Current Liabilities
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                   
                                                <tr >
                                                   <th colSpan={3} className={`${styles.Border}`}>Assets</th>
                                                   
                                               </tr>
                                             
                                                <tr>
                                                   <td>
                                                   Working Capital Turnover ratio
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                   <tr>
                                                   <td>
                                                  Debtors period
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                   <tr>
                                                   <td>
                                                  Creditors Period
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                   <tr>
                                                   <td>
                                                   Inventory Period
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                <tr >
                                                    <th colSpan={3} className={`${styles.Border}`}>P/L</th>
                                               </tr>
                                             
                                                <tr>
                                                   <td>
                                                 Interest Coverage
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                   <tr>
                                                   <td>
                                                 Current Ratio
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                   <tr>
                                                   <td>
                                                Debt Equity
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                               
                                                </table>
                                                               
                                                     
                                                </Col>
                                                <Col md={7} className={`pl-0`}>
                                                 <table className ={`${styles.table} table  border_color  `} cellpadding="0" cellspacing="0" >
                                               <tr>
                                                   <th>Ratios</th>
                                                   <th>MAR-20</th>
                                                   <th>MAR-19</th>
                                               </tr>
                                                <tr>
                                                   <td>
                                                    Cash from Operations
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                  <tr>
                                                   <td>
                                                   Cash from Financing
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                  <tr>
                                                   <td>
                                                   Cash from Investing
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                   
                                                                                             <tr >
                                                   <td className={`${styles.no_Border}`}></td>
                                                   <td className={`${styles.no_Border}`}></td>
                                                   <td className={`${styles.no_Border}`}></td>
                                               </tr>
                                             
                                                <tr>
                                                   <td>
                                                   Working Capital Turnover ratio
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                   <tr>
                                                   <td>
                                                  Debtors period
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                   <tr>
                                                   <td>
                                                  Creditors Period
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                   <tr>
                                                   <td>
                                                   Inventory Period
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                <tr >
                                                   <td className={`${styles.no_Border}`}></td>
                                                   <td className={`${styles.no_Border}`}></td>
                                                   <td className={`${styles.no_Border}`}></td>
                                               </tr>
                                             
                                                <tr>
                                                   <td>
                                                 Interest Coverage
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                   <tr>
                                                   <td>
                                                 Current Ratio
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                                   <tr>
                                                   <td>
                                                Debt Equity
                                                   </td>
                                                    <td>
                                                    -2,988.00
                                                    </td>
                                                  <td>2,988.00</td>
                                                </tr>
                                               
                                                </table> 
                                               

                                                </Col>
                                            </Row>
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const compilanceStatus =()=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#compilanceStatus" aria-expanded="true" aria-controls="compilanceStatus">
                                            <h2 className="mb-0">Compliance Status</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="compilanceStatus" className="collapse" aria-labelledby="compilanceStatus" data-parent="#profileAccordion">
                                           <div className={`${styles.info_wrapper} card-body border_color`}>
                                            <div className={`${styles.content} mb-4`}>
                                                    <Row className={`mb-3`}>
                                                <Col className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>GST Return Filing</span>
                                                     <span className={`${styles.value} pr-5`}>Text</span>
                                                </Col>
                                                <Col  className={` col-md-offset-2 d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`} >NCLT</span>
                                                     <span className={`${styles.value} `}>text</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>EPF Status</span>
                                                     <span className={`${styles.value} pr-5`}>Text</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`}>BIFR</span>
                                                     <span className={`${styles.value}`}>text</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>Litigation Status</span>
                                                     <span className={`${styles.value} pr-5`}>text</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`}>Defaulter Company</span>
                                                     <span className={`${styles.value}`}>text</span>
                                                </Col>
                                            </Row>
                                              <Row  className={`mb-3`}>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key}`}>Last Balance Sheet Dates</span>
                                                     <span className={`${styles.value} pr-5`}>14-05-2022</span>
                                                </Col>
                                                <Col  className={`d-flex justify-content-between`} md={5}>
                                                    <span className={`${styles.key} pl-5`}>Active Directors</span>
                                                     <span className={`${styles.value}`}>4,320</span>
                                                </Col>
                                            </Row>
                                            </div>
                                           
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const strengthAndWeakness =(data,options,tempArr)=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#strengthAndWeakness" aria-expanded="true" aria-controls="strengthAndWeakness">
                                            <h2 className="mb-0">Strength & Weakness</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="strengthAndWeakness" className="collapse" aria-labelledby="strengthAndWeakness" data-parent="#profileAccordion">
                                           <div className={`${styles.order_wrapper} card-body`}>
                                            <Row>
                                                <Col className={`${styles.leftCol} border_color`} md={6}>
                                                      <div className={`d-flex justify-content-start align-content-center`}>
                                                           <div className={`${styles.icon} `}>
                                                                   <span className={`d-flex justify-content-center align-content-center`}>ET</span>
                                                                   
                                                               </div>
                                                              <span className={`${styles.text} ml-2`}>Strength</span>
                                                      </div>
                                                      <div>
                                                          <ul>
                                                              <li className={`mt-4`}>— Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
                                                               <li className={`mt-4`}>— Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
                                                                <li className={`mt-4`}>— Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
                                                                 <li className={`mt-4`}>— Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
                                                                  <li className={`mt-4`}>— Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>

                                                          </ul>
                                                      </div>
                                                      
                                                </Col>
                                               <Col className={`${styles.leftCol} border_color`} md={6}>
                                                       <div className={`d-flex justify-content-start align-content-center`}>
                                                           <div className={`${styles.icon} `}>
                                                                   <span className={`d-flex justify-content-center align-content-center`}>ET</span>
                                                                   
                                                               </div>
                                                              <span className={`${styles.text} ml-2`}>Strength</span>
                                                      </div>
                                                      <div>
                                                          <ul>
                                                              <li className={`mt-4`}>— Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
                                                               <li className={`mt-4`}>— Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
                                                                <li className={`mt-4`}>— Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
                                                                 <li className={`mt-4`}>— Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
                                                                  <li className={`mt-4`}>— Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
                                                                  
                                                          </ul>
                                                      </div>
                                                </Col>
                                            </Row>
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const sectionTerms =()=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#sectionTerms" aria-expanded="true" aria-controls="sectionTerms">
                                            <h2 className="mb-0">Sanction Terms</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="sectionTerms" className="collapse" aria-labelledby="sectionTerms" data-parent="#profileAccordion">
                                           <div className={`${styles.terms_wrapper} card-body border_color`}>
                                           <table className ={`${styles.table} table  border_color `}cellpadding="0" cellspacing="0" >
                                               <tr>
                                                   <th></th>
                                                   <th>PREVIOUS LIMIT</th>
                                                   <th>APPLIED VALUE</th>
                                                   <th>RECOMMENDED VALUE</th>
                                                    <th>REVISED</th>
                                                    <th>APPROVED VALUE</th>
                                               </tr>
                                                <tr>
                                                   <td>
                                                 Limit Value
                                                   </td>
                                                    <td>
                                                   1,200.00
                                                    </td>
                                                  <td>-</td>
                                                  <td>1,900.00</td>
                                                  <td><input type="checkbox"></input></td>
                                                   <td><input type="text" placeholder="1,900.00"></input></td>
                                                </tr>
                                                 <tr>
                                                   <td>
                                                 Limit Value
                                                   </td>
                                                    <td>
                                                   1,200.00
                                                    </td>
                                                  <td>-</td>
                                                  <td>1,900.00</td>
                                                  <td><input type="checkbox"></input></td>
                                                   <td><input type="text" placeholder="1,900.00"></input></td>
                                                </tr>
                                                 
                                               
                                          </table>
                                          <div>
                                          <div className={`${styles.heading} d-flex  align-items-center justify-content-start`}>Sanction Conditions</div>
                                          <ul className="mt-3 mb-3">
                                              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam sadipscing elitr, sed diam</li>
                                              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam sadipscing elitr, sed diam</li>
                                              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam sadipscing elitr, sed diam</li>
                                              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam sadipscing elitr, sed diam</li>
                                              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam sadipscing elitr, sed diam</li>
                                          </ul>
                                          </div>  
                                           <div>
                                            <div className={`${styles.approve}`}>
                                                <div className={`mb-3`}  >Approval Remarks</div>
                                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                          <button className={`${styles.button} mt-3 d-flex  align-items-center justify-content-center `}>Add</button>
                                            </div>
                                          </div>  
                                           
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const Documents =()=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#Documents" aria-expanded="true" aria-controls="Documents">
                                            <h2 className="mb-0">Sanction Terms</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="Documents" className="collapse" aria-labelledby="Documents" data-parent="#profileAccordion">
                                           <div className={`${styles.terms_wrapper} card-body border_color`}>
                                           <Row className={`${styles.row}`}>
                                               <Col md={3} className={`mb-3`}>
                                                    <div className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}>
                                                    <img src="./static/icon file copy.svg"></img>
                                                    <div className={`${styles.view} ml-4`}>
                                                        <span>Insurance Certificate</span>
                                                        <span className={`${styles.highlight} mt-2`}>VIEW</span>
                                                    </div>
                                                    </div>
                                               </Col>
                                                <Col md={3}>
                                                    <div className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}>
                                                    <img src="./static/icon file copy.svg"></img>
                                                    <div className={`${styles.view} ml-4`}>
                                                        <span>Insurance Certificate</span>
                                                        <span className={`${styles.highlight} mt-2`}>VIEW</span>
                                                    </div>
                                                    </div>
                                               </Col>
                                                <Col md={3}>
                                                    <div className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}>
                                                    <img src="./static/icon file copy.svg"></img>
                                                    <div className={`${styles.view} ml-4`}>
                                                        <span>Insurance Certificate</span>
                                                        <span className={`${styles.highlight} mt-2`}>VIEW</span>
                                                    </div>
                                                    </div>
                                               </Col>
                                                <Col md={3}>
                                                    <div className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}>
                                                    <img src="./static/icon file copy.svg"></img>
                                                    <div className={`${styles.view} ml-4`}>
                                                        <span>Insurance Certificate</span>
                                                        <span className={`${styles.highlight} mt-2`}>VIEW</span>
                                                    </div>
                                                    </div>
                                               </Col>
                                                <Col md={3}>
                                                    <div className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}>
                                                    <img src="./static/icon file copy.svg"></img>
                                                    <div className={`${styles.view} ml-4`}>
                                                        <span>Insurance Certificate</span>
                                                        <span className={`${styles.highlight} mt-2`}>VIEW</span>
                                                    </div>
                                                    </div>
                                               </Col>
                                                <Col md={3}>
                                                    <div className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}>
                                                    <img src="./static/icon file copy.svg"></img>
                                                    <div className={`${styles.view} ml-4`}>
                                                        <span>Insurance Certificate</span>
                                                        <span className={`${styles.highlight} mt-2`}>VIEW</span>
                                                    </div>
                                                    </div>
                                               </Col>
                                                <Col md={3}>
                                                    <div className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}>
                                                    <img src="./static/icon file copy.svg"></img>
                                                    <div className={`${styles.view} ml-4`}>
                                                        <span>Insurance Certificate</span>
                                                        <span className={`${styles.highlight} mt-2`}>VIEW</span>
                                                    </div>
                                                    </div>
                                               </Col>
                                                <Col md={3}>
                                                    <div className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}>
                                                    <img src="./static/icon file copy.svg"></img>
                                                    <div className={`${styles.view} ml-4`}>
                                                        <span>Insurance Certificate</span>
                                                        <span className={`${styles.highlight} mt-2`}>VIEW</span>
                                                    </div>
                                                    </div>
                                               </Col>
                                           </Row>
                                           
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const trends =(dataline,lineOption)=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#trends" aria-expanded="true" aria-controls="trends">
                                            <h2 className="mb-0">Trends</h2>
                                          <span className=" d-flex align-items-center justify-content-between">
                                            <span className={` d-flex align-items-center justify-content-between`}><span className={`${styles.light} ${styles.unit_label} accordion_Text`}>Display By:
                                            </span>
                                            <select className={`${styles.select} accordion_body form-select`} aria-label="Default select example">
                                          
                                            <option selected value="1">Quarterly</option>
                                          
                                          </select>
                                            
                                            </span> 
                                            +
                                          </span>  
                                        </div>
                                        <div id="trends" className="collapse" aria-labelledby="trends" data-parent="#profileAccordion">
                                           <div className={`${styles.graph_wrapper} card-body`}>
                                            <Row className={`m-0`}>
                                                <Col className={`${styles.leftCol} p-0 border_color`} md={6}>
                                                 <div className={`${styles.head_wrapper} card_sub_header`}>
                                                  <span className={`${styles.head}`}>Gross Revenue</span>
                                                  <span className={`${styles.child} ml-2`}>: 1,900.00</span>
                                                  
                                                 </div>
                                                 <div className={`${styles.chart}`}>
                                                   <Line data={dataline} options={lineOption} />
                                                 </div>
                                                 <div  className={`${styles.name_wrapper} d-flex justify-content-center align-item-center`}>
                                                                    <div
                                                                    className={styles.round}
                                                                    style={{ backgroundColor: `red` }}
                                                                    ></div>
                                                                    <span className={` heading ml-2 mb-4`}>Gross revenue</span>
                                                                </div>
                                                               
                                                     
                                                </Col>
                                                <Col md={6} className={`${styles.rightCol} pl-0 border_color`} >
                                               
                                                   <div className={`${styles.head_wrapper}  card_sub_header`}>
                                                  <span className={`${styles.head}`}>Gross Purchases</span>
                                                  <span className={`${styles.child} ml-2`}>: 1,900.00</span>
                                                  
                                                 </div>
                                                 <div className={`${styles.chart}`}>
                                                   <Line data={dataline} options={lineOption} />
                                                 </div>
                                                
                                                            

                                                </Col>
                                            </Row>
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}
const skewness =(data,options,tempArr)=>{
    return(
        <>
<div className={`${styles.card} card`}>                             
 <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#skewness" aria-expanded="true" aria-controls="skewness">
                                            <h2 className="mb-0">Skewness</h2>
                                          <span className=" d-flex align-items-center justify-content-between">
                                            <span className={` d-flex align-items-center justify-content-between`}><span className={`${styles.light}  ${styles.unit_label} accordion_Text`}>Display By:
                                            </span>
                                            <select className={`${styles.select} accordion_body form-select`} aria-label="Default select example">
                                          
                                            <option selected value="1">Quarterly</option>
                                          
                                          </select>
                                            
                                            </span> 
                                            +
                                          </span>  
                                        </div>
                                        <div id="skewness" className="collapse" aria-labelledby="skewness" data-parent="#profileAccordion">
                                           <div className={`${styles.graph_wrapper} card-body`}>
                                            <Row className={`m-0`}>
                                                <Col className={`${styles.leftCol} p-0 border_color`} md={6}>
                                                 <div className={`${styles.head_wrapper} card_sub_header`}>
                                                  <span className={`${styles.head}`}>Gross Revenue</span>
                                                  <span className={`${styles.child} ml-2`}>: 1,900.00</span>
                                                  
                                                 </div>
                                                  <Row className={`d-flex  d-flex align-items-center justify-content-evenly`}>
                                                <Col md={6} className={`${styles.col}`}>
                                                  <div className={styles.chart2}>
                                            
                                                        <Doughnut data={data} options={options} />
                                                        <div className={styles.total_value}>
                                                            <span>Sagar Sinha</span>
                                                             <span className={styles.highlight}>83.80%</span>
                                                        </div>
                                                        </div>
                                                </Col>
                                                 <Col md={6}>
                                                   <div className={`${styles.name} `}>
                                                            {tempArr.map((val, index) => {
                                                                return (
                                                                <div key={index} className={`${styles.name_wrapper} d-flex justify-content-start align-item-start`}>
                                                                    <div
                                                                    className={styles.round}
                                                                    style={{ backgroundColor: `${val.color}` }}
                                                                    ></div>
                                                                   <div className={`d-flex justify-content-between align-item-start w-100`}>
                                                                       <span className={` heading ml-2`}>{val.name}</span> 
                                                                    <span className={` heading mr-4`}>51.23%</span>
                                                                   </div>
                                                                </div>
                                                                )
                                                            })}
                                                            </div>
                                                 </Col>
                                              </Row>
                                             
                                                        
                                                
                                                               
                                                     
                                                </Col>
                                                <Col md={6} className={`${styles.rightCol} pl-0 border_color`} >
                                               
                                                   <div className={`${styles.head_wrapper}`}>
                                                  <span className={`${styles.head}`}>Gross Purchases</span>
                                                  <span className={`${styles.child} ml-2`}>: 1,900.00</span>
                                                  
                                                 </div>
                                                 <div className={`${styles.chart}`}>
                                                   {/* <Line data={dataline} options={lineOption} /> */}
                                                 </div>
                                                
                                                            

                                                </Col>
                                            </Row>
                                           </div>
                                        </div>                                       
       </div>
        </>
    )
}

                                                