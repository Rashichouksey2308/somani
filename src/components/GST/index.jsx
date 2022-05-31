import React from 'react'
import styles from './index.module.scss'
import {Row,Col} from 'react-bootstrap'
import { Line } from "react-chartjs-2";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
// Chart.register(linear);
function index() {
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1500000, 3900000, 3000000, 4100000, 2300000, 1800000, 2000000]
    }
  ]
};
const lineOptions = {
  onClick: (e, element) => {
    if (element.length > 0) {
      var ind = element[0]._index;
      alert(ind);
    }
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        // stacked: true,
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: true,
          // Return an empty string to draw the tick line but hide the tick label
          // Return `null` or `undefined` to hide the tick line entirely
          userCallback(value) {
            // Convert the number to a string and splite the string every 3 charaters from the end
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);

            // Convert the array to a string and format the output
            value = value.join(".");
            return `Rp.${value}`;
          }
        }
      }
    ]
  },
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  }
};

  return (
    <>
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

       
        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#litigations1" aria-expanded="true" aria-controls="litigations1">
            <h2 className="mb-0">Summary Chart</h2>
            <span>+</span>
        </div>
        <div id="litigations1" className="collapse" aria-labelledby="litigations1" data-parent="#profileAccordion">
         <div className={` ${styles.cardBody} card-body`}>
           <Row>
             <Col md={6}>
              <div className={styles.chart_container}>
              <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Revenue Summary</span>  
              <span className={styles.light}>(Cr)</span> 
            </div>
            <Line
                datasetIdKey='id'
                data={{
                  labels: ['Jun', 'Jul', 'Aug'],
                  datasets: [
                    {
                      id: 1,
                      label: '',
                      data: [5, 6, 7],
                    },
                    {
                      id: 2,
                      label: '',
                      data: [3, 2, 1],
                    },
                  ],
                }}
              />
              </div>
             </Col>
              <Col md={6}>
              <div className={styles.chart_container}>
              <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Revenue Summary</span>  
              <span className={styles.light}>(Cr)</span> 
            </div>
            <Line
                datasetIdKey='id'
                data={{
                  labels: ['Jun', 'Jul', 'Aug'],
                  datasets: [
                    {
                      id: 1,
                      label: '',
                      data: [5, 6, 7],
                    },
                    {
                      id: 2,
                      label: '',
                      data: [3, 2, 1],
                    },
                  ],
                }}
              />
              </div>
             </Col>
             <Col md={6}>
              <div className={styles.chart_container}>
              <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Revenue Summary</span>  
              <span className={styles.light}>(Cr)</span> 
            </div>
            <Line
                datasetIdKey='id'
                data={{
                  labels: ['Jun', 'Jul', 'Aug'],
                  datasets: [
                    {
                      id: 1,
                      label: '',
                      data: [5, 6, 7],
                    },
                    {
                      id: 2,
                      label: '',
                      data: [3, 2, 1],
                    },
                  ],
                }}
              />
              </div>
             </Col>
             <Col md={6}>
              <div className={styles.chart_container}>
              <div className={` ${styles.header}  d-flex align-items-center justify-content-between`}>
              <span>Revenue Summary</span>  
              <span className={styles.light}>(Cr)</span> 
            </div>
            <Line
                datasetIdKey='id'
                data={{
                  labels: ['Jun', 'Jul', 'Aug'],
                  datasets: [
                    {
                      id: 1,
                      label: '',
                      data: [5, 6, 7],
                    },
                    {
                      id: 2,
                      label: '',
                      data: [3, 2, 1],
                    },
                  ],
                }}
              />
              </div>
             </Col>
           </Row>
          
           </div>            
        </div>                                   
                                            
                                              
                                              
                                      
                                    
    </>
  )
}

export default index