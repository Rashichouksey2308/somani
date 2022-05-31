import React from 'react'
import styles from './index.module.scss'
import {Row,Col} from 'react-bootstrap'
import { Line } from "react-chartjs-2";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
// Chart.register(linear);
function index() {
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

  return (
    <>
    
       <div className={styles.wrapper}>
         <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#litigations" aria-expanded="true" aria-controls="litigations">
            <h2 className="mb-0">Summary Information</h2>
            <span>+</span>
        </div>
        <div id="litigations" className="collapse" aria-labelledby="litigations" data-parent="#profileAccordion">
         <div className={` ${styles.cardBody} card-body`}>
           <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Business Profile</span>  
              <span className={` d-flex align-items-center justify-content-between`}><span className={styles.light}>GST :</span>09AAGCS8808K1ZR</span>   
            </div>
            <div className={` ${styles.body}`}>
                <Row >
                    <Col md={3}>
                        <div className={styles.col_header}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.col_header}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={styles.col_header}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={styles.col_header}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={styles.col_header}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={styles.col_header}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={styles.col_header}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                    
                    
                   </Row>
            </div>
           </div>
            <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Alerts Indentified</span>  
            
            </div>
            <div className={` ${styles.body}`}>
                <Row >
                    <Col md={3} className={`${styles.gst_cancelled}  d-flex align-items-center justify-content-between`}>
                       <div className={styles.dot}></div><span>GST cancelled</span>
                    </Col>
                  
                    
                    
                   </Row>
                   <Row >
                    <Col md={3} style={{backgroundColor:"white"}} className={`${styles.gst_cancelled}  d-flex align-items-center justify-content-between`}>
                       <div className={styles.dot} style={{backgroundColor:"#28BE39"}}></div><span>GST Transaction default</span>
                    </Col>
                    <Col md={3}  style={{backgroundColor:"white"}} className={`${styles.gst_cancelled}  d-flex align-items-center justify-content-between`}>
                       <div className={styles.dot} style={{backgroundColor:"#EA3FD6"}}></div><span>GST Provisional</span>
                    </Col>
                    <Col md={3}  style={{backgroundColor:"white"}} className={`${styles.gst_cancelled}  d-flex align-items-center justify-content-between`}>
                       <div className={styles.dot} style={{backgroundColor:"#3F66EA"}}></div><span>GST Transaction delay</span>
                    </Col>
                    <Col md={3}  style={{backgroundColor:"white"}} className={`${styles.gst_cancelled}  d-flex align-items-center justify-content-between`}>
                       <div className={styles.dot} style={{backgroundColor:"#CBC5C5"}}></div><span>GST Inactive</span>
                    </Col>
                  
                    
                    
                   </Row>
            </div>
           </div>
            <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Key Managerial Personsd</span>  
            
            </div>
            <div className={` ${styles.body}`}>
                <Row >
                    <Col md={3} className={`  d-flex align-items-center justify-content-between`}>
                      <span>- Kalyan</span>
                    </Col>
                     <Col md={3} className={`  d-flex align-items-center justify-content-between`}>
                      <span>- Kalyan</span>
                    </Col>
                     <Col md={3} className={`  d-flex align-items-center justify-content-between`}>
                      <span>- Kalyan</span>
                    </Col>
                     <Col md={3} className={`  d-flex align-items-center justify-content-between`}>
                      <span>- Kalyan</span>
                    </Col>
                  
                    
                    
                   </Row>
                   <Row >
                  
                  
                    
                    
                   </Row>
            </div>
           
         </div>   

           <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Revenue Profile</span>  
              <span className={` d-flex align-items-center justify-content-between`}><span className={styles.light}>Unit :</span>09AAGCS8808K1ZR</span>   
            </div>
            <div className={` ${styles.body}`}>
                <Row >
                    <Col md={3}>
                        <div className={styles.col_header}>
                          Gross Turnover
                        </div>
                        <div className={styles.col_body}>
                           1,900.00
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.col_header}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={styles.col_header}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={styles.col_header}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={styles.col_header}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={styles.col_header}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={styles.col_header}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                    
                    
                   </Row>
            </div>
           </div>
           </div>            
        </div>  
        </div>  

       
        <div  className={styles.wrapper}>
          <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#litigations1" aria-expanded="true" aria-controls="litigations1">
            <h2 className="mb-0">Summary Chart</h2>
            <span>+</span>
        </div>
        <div id="litigations1" className="collapse" aria-labelledby="litigations1" data-parent="#profileAccordion">
         <div className={` ${styles.cardBody} card-body`}>
           <Row className={styles.row}>
             <Col md={6} className={styles.col}>
              <div className={styles.chart_container}>
              <div className={` ${styles.header}  d-flex align-items-center justify-content-start`}>
              <span>Revenue Summary</span>  
              <span className={styles.light}>(Cr)</span> 
            </div>
             <div  className={styles.chart}>
                <Line data={data} />
             </div>
              </div>
             </Col>
              <Col md={6} className={styles.col2}>
              <div className={styles.chart_container}>
              <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Revenue Summary</span>  
              <span className={styles.light}>(Cr)</span> 
            </div>
             <div  className={styles.chart}>
                <Line data={data} />
             </div>
              </div>
             </Col>
              <Col md={6} className={styles.col}>
              <div className={styles.chart_container}>
              <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Revenue Summary</span>  
              <span className={styles.light}>(Cr)</span> 
            </div>
             <div  className={styles.chart}>
                <Line data={data} />
             </div>
              </div>
             </Col>
              <Col md={6} className={styles.col2}>
              <div className={styles.chart_container}>
              <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Revenue Summary</span>  
              <span className={styles.light}>(Cr)</span> 
            </div>
             <div  className={styles.chart}>
                <Line data={data} />
             </div>
              </div>
             </Col>
           
           </Row>
          
           </div>            
        </div>
          </div>                                   



          <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#litigations2" aria-expanded="true" aria-controls="litigations2">
            <h2 className="mb-0">Sales Details</h2>
            <span>+</span>
        </div>
        <div id="litigations2" className="collapse" aria-labelledby="litigations2" data-parent="#profileAccordion">
         <div className={` ${styles.cardBody} card-body`}>
           <table className={`${styles.table}  table`}cellpadding="0" cellspacing="0" border="1">
            <tr>
            <th colspan={2}>Annual Summary</th>
            <th  colspan={2}>MAR 2020 - APR 2021</th>
            <th  colspan={2}>MAR 2021 - APR 2022</th>
            </tr>
             <tr>
            <td  colspan={2} ></td>
             <td>VALUE</td>
              <td>% ON GROSS REVENUE</td>
                <td>VALUE</td>
              <td>% ON GROSS REVENUE</td>
             {/* <td    className=" d-flex align-items-center justify-content-between">
               <span>VALUE</span>
               <span >% ON GROSS REVENUE</span>
             </td>
              <td    className=" d-flex align-items-center justify-content-between">
               <span>VALUE</span>
               <span >% ON GROSS REVENUE</span>
             </td> */}
            
             
            
             
           
            
            
            </tr>
             <tr>
            <td  colspan={2} >Gross Revenue</td>
             <td>1,900.00</td>
              <td>80%</td>
                <td>1,900.00</td>
              <td>80%</td>
        
            
             
            
             
           
            
            
            </tr>
           </table>
          
           </div>            
        </div>                                      
                                              

           {/* CistomerDetail                                    */}

      {gstCustomerDetail()}
        {gstSupplierDetail()}
         {gstSales()}
                                      
                                    
    </>
  )
}

export default index

const gstCustomerDetail = () => {
  return(
    <>
            <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#customer" aria-expanded="true" aria-controls="customer">
            <h2 className="mb-0">Customer Details</h2>
            <span>+</span>
        </div>
        <div id="customer" className="collapse" aria-labelledby="customer" data-parent="#profileAccordion">
         <div className={` ${styles.CustomercardBody} card-body`}>
         <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Recurring Party Sales In Last 12 Months</span>  
            
            </div>
            <div className={` ${styles.body}`}>
             <table className={`${styles.table1}  table`}cellpadding="0" cellspacing="0" >
            <tr>
            <th>CUSTOMER NAME</th>
            <th >PAN</th>
            <th >SALES</th>
             <th >% OF TOTAL SALES</th>
            <th >OF INVOICES</th>
            <th >SALES PER INVOICE</th>
            </tr>
            <tbody>
              <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </tbody>
            
           </table>
            </div>
         </div>
          <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Related Party Sales In Last 12 Monthss</span>  
            
            </div>
            <div className={` ${styles.body}`}>
             <table className={`${styles.table1}  table`}cellpadding="0" cellspacing="0" >
            <tr>
            <th>CUSTOMER NAME</th>
            <th >PAN</th>
            <th >SALES</th>
             <th >% OF TOTAL SALES</th>
            <th >OF INVOICES</th>
            <th >SALES PER INVOICE</th>
            </tr>
            <tbody>
              <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </tbody>
            
           </table>
            </div>
         </div>
          <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Top 10 Customers</span>  
            
            </div>
            <div className={` ${styles.body}`}>
             <table className={`${styles.table1}  table`}cellpadding="0" cellspacing="0" >
            <tr>
            <th>CUSTOMER NAME</th>
            <th >PAN</th>
            <th >SALES</th>
             <th >% OF TOTAL SALES</th>
            <th >OF INVOICES</th>
            <th >SALES PER INVOICE</th>
            </tr>
            <tbody>
              <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </tbody>
            
           </table>
            </div>
         </div>
          <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Statewise Sales</span>  
            
            </div>
            <div className={` ${styles.body}`}>
             <table className={`${styles.table1}  table`}cellpadding="0" cellspacing="0" >
            <tr>
            <th>CUSTOMER NAME</th>
            <th >PAN</th>
            <th >SALES</th>
             <th >% OF TOTAL SALES</th>
            <th >OF INVOICES</th>
            <th >SALES PER INVOICE</th>
            </tr>
            <tbody>
              <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </tbody>
            
           </table>
            </div>
         </div>
          
        </div>            
        </div>  
    </>
  )
}

const gstSupplierDetail = () => {
  return(
    <>
            <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#customer" aria-expanded="true" aria-controls="customer">
            <h2 className="mb-0">Customer Details</h2>
            <span>+</span>
        </div>
        <div id="customer" className="collapse" aria-labelledby="customer" data-parent="#profileAccordion">
         <div className={` ${styles.CustomercardBody} card-body`}>
         <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Recurring Party Sales In Last 12 Months</span>  
            
            </div>
            <div className={` ${styles.body}`}>
             <table className={`${styles.table1}  table`}cellpadding="0" cellspacing="0" >
            <tr>
            <th>CUSTOMER NAME</th>
            <th >PAN</th>
            <th >SALES</th>
             <th >% OF TOTAL SALES</th>
            <th >OF INVOICES</th>
            <th >SALES PER INVOICE</th>
            </tr>
            <tbody>
              <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </tbody>
            
           </table>
            </div>
         </div>
          <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Related Party Sales In Last 12 Monthss</span>  
            
            </div>
            <div className={` ${styles.body}`}>
             <table className={`${styles.table1}  table`}cellpadding="0" cellspacing="0" >
            <tr>
            <th>CUSTOMER NAME</th>
            <th >PAN</th>
            <th >SALES</th>
             <th >% OF TOTAL SALES</th>
            <th >OF INVOICES</th>
            <th >SALES PER INVOICE</th>
            </tr>
            <tbody>
              <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </tbody>
            
           </table>
            </div>
         </div>
          <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Top 10 Customers</span>  
            
            </div>
            <div className={` ${styles.body}`}>
             <table className={`${styles.table1}  table`}cellpadding="0" cellspacing="0" >
            <tr>
            <th>CUSTOMER NAME</th>
            <th >PAN</th>
            <th >SALES</th>
             <th >% OF TOTAL SALES</th>
            <th >OF INVOICES</th>
            <th >SALES PER INVOICE</th>
            </tr>
            <tbody>
              <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </tbody>
            
           </table>
            </div>
         </div>
          <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Statewise Sales</span>  
            
            </div>
            <div className={` ${styles.body}`}>
             <table className={`${styles.table1}  table`}cellpadding="0" cellspacing="0" >
            <tr>
            <th>CUSTOMER NAME</th>
            <th >PAN</th>
            <th >SALES</th>
             <th >% OF TOTAL SALES</th>
            <th >OF INVOICES</th>
            <th >SALES PER INVOICE</th>
            </tr>
            <tbody>
              <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </tbody>
            
           </table>
            </div>
         </div>
          
        </div>            
        </div>  
    </>
  )
}

const gstSales = () => {
  return(
    <>
            <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#customer" aria-expanded="true" aria-controls="customer">
            <h2 className="mb-0">Sales</h2>
            <span>+</span>
        </div>
        <div id="customer" className="collapse" aria-labelledby="customer" data-parent="#profileAccordion">
         <div className={` ${styles.CustomercardBody} card-body`}>
         <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Financial Period 2020- 2021</span>  
            
            </div>
            <div className={` ${styles.body}`}>
             <table className={`${styles.table1}  table`}cellpadding="0" cellspacing="0" >
            <tr>
            <th>REVENUE BREAKUP</th>
            <th >FEB’ 22</th>
            <th >JAN’ 22</th>
             <th >DEC’21</th>
            <th >NOV’21</th>
            <th >OCT’21</th>
             <th >SEP’21</th>
              <th >AUG’21</th>
               <th >JUL’21</th>
                <th >JUN’21</th>
                 <th >MAY’21</th>
                  <th >APR’21</th>
                   <th >MAR’21</th>
            </tr>
            <tbody>
              <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>Total Sales</td>
                <td>2.220</td>
                <td>22</td>
                <td>22</td>
                <td>22</td>
                <td>34</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>22</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </tbody>
            
           </table>
            </div>
         </div>
          <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Related Party Sales In Last 12 Monthss</span>  
            
            </div>
            <div className={` ${styles.body}`}>
             <table className={`${styles.table1}  table`}cellpadding="0" cellspacing="0" >
            <tr>
            <th>CUSTOMER NAME</th>
            <th >PAN</th>
            <th >SALES</th>
             <th >% OF TOTAL SALES</th>
            <th >OF INVOICES</th>
            <th >SALES PER INVOICE</th>
            </tr>
            <tbody>
              <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </tbody>
            
           </table>
            </div>
         </div>
          <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Top 10 Customers</span>  
            
            </div>
            <div className={` ${styles.body}`}>
             <table className={`${styles.table1}  table`}cellpadding="0" cellspacing="0" >
            <tr>
            <th>CUSTOMER NAME</th>
            <th >PAN</th>
            <th >SALES</th>
             <th >% OF TOTAL SALES</th>
            <th >OF INVOICES</th>
            <th >SALES PER INVOICE</th>
            </tr>
            <tbody>
              <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </tbody>
            
           </table>
            </div>
         </div>
          <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Statewise Sales</span>  
            
            </div>
            <div className={` ${styles.body}`}>
             <table className={`${styles.table1}  table`}cellpadding="0" cellspacing="0" >
            <tr>
            <th>CUSTOMER NAME</th>
            <th >PAN</th>
            <th >SALES</th>
             <th >% OF TOTAL SALES</th>
            <th >OF INVOICES</th>
            <th >SALES PER INVOICE</th>
            </tr>
            <tbody>
              <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Abs International Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </tbody>
            
           </table>
            </div>
         </div>
          
        </div>            
        </div>  
    </>
  )
}