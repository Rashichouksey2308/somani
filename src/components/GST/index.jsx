import React ,{useRef,useEffect,useState}from 'react'
import styles from './index.module.scss'
import {Row,Col} from 'react-bootstrap'
import { Line } from "react-chartjs-2";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale,Filler } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale,Filler);
// Chart.register(linear);
function index() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  function createGradient(ctx, area) {
  // const colorStart = faker.random.arrayElement(colors);
  // const colorMid = faker.random.arrayElement(
  //   colors.filter(color => color !== colorStart)
  // );
  // const colorEnd = faker.random.arrayElement(
  //   colors.filter(color => color !== colorStart && color !== colorMid)
  // );
  console.log(ctx,area,"cts")

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, "rgba(75,192,192,0");
  gradient.addColorStop(0.5, "rgba(75,192,192,0.5");
  gradient.addColorStop(1, "rgba(75,192,192,1");
  console.log(gradient,"gradient")
  return gradient;
}

   useEffect(() => {
    const chart = chartRef.current;
   console.log("here",chart.ctx)
    if (!chart) {
      return;
    }

    let color= createGradient(chart.ctx, chart.chartArea)
    console.log(color,"color")
 const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor:  color,
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: true,
      backgroundColor: color,
      borderColor: "#742774"
    }
  ]
};

    setChartData(data);
  },[chartRef.current]);

const lineOption={
  tension:0.1,
  fill:true,
   elements: {
                    point:{
                        radius: 0
                    }
                }
}
let data={  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor:  'rgba(75,192,192,1)',
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: true,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: "#742774"
    }
  ]}

  return (
    <>
    
       <div className={`${styles.wrapper} card`}>
         <div className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#litigations" aria-expanded="true" aria-controls="litigations">
            <h2 className="mb-0">Summary Information</h2>
            <span>+</span>
        </div>
        <div id="litigations" className="collapse" aria-labelledby="litigations" data-parent="#profileAccordion">
         <div className={` ${styles.cardBody} card-body`}>
           <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-between`}>
              <span>Business Profile</span>  
              <span className={` d-flex align-items-center justify-content-between`}><span className={styles.light}>GST :</span>09AAGCS8808K1ZR</span>   
            </div>
            <div className={` ${styles.body}`}>
                <Row >
                    <Col md={3}>
                        <div className={`${styles.col_header} label_heading`}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={`${styles.col_header} label_heading`}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={`${styles.col_header} label_heading`}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={`${styles.col_header} label_heading`}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={`${styles.col_header} label_heading`}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={`${styles.col_header} label_heading`}>
                            Business Activity
                        </div>
                        <div className={styles.col_body}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={`${styles.col_header} label_heading`}>
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
            <div className={` ${styles.header}   card_sub_header d-flex align-items-center justify-content-between`}>
              <span>Alerts Indentified</span>  
            
            </div>
            <div className={` ${styles.body}`}>
                <Row  className={` ${styles.row}`} >
                    <Col md={2} className={`${styles.gst_cancelled}  d-flex align-items-center justify-content-start`}>
                       <div className={styles.dot}></div><span>GST cancelled</span>
                    </Col>
                  
                    
                    
                   </Row>
                   <Row className={` ${styles.row}`} >
                    <Col md={3}  className={`${styles.gst_cancelled} gst_profile_alerts  d-flex align-items-center justify-content-start`}>
                       <div className={styles.dot} style={{backgroundColor:"#28BE39"}}></div><span>GST Transaction default</span>
                    </Col>
                    <Col md={3}  className={`${styles.gst_cancelled}  gst_profile_alerts  d-flex align-items-center justify-content-start`}>
                       <div className={styles.dot} style={{backgroundColor:"#EA3FD6"}}></div><span>GST Provisional</span>
                    </Col>
                    <Col md={3}  className={`${styles.gst_cancelled}  gst_profile_alerts  d-flex align-items-center justify-content-start`}>
                       <div className={styles.dot} style={{backgroundColor:"#3F66EA"}}></div><span>GST Transaction delay</span>
                    </Col>
                    <Col md={3}  className={`${styles.gst_cancelled}  gst_profile_alerts  d-flex align-items-center justify-content-start`}>
                       <div className={styles.dot} style={{backgroundColor:"#CBC5C5"}}></div><span>GST Inactive</span>
                    </Col>
                  
                    
                    
                   </Row>
            </div>
           </div>
            <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-between`}>
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

           <div className={` ${styles.content} `}>
            <div className={` ${styles.header}  card_sub_header   d-flex align-items-center justify-content-between`}>
              <span>Revenue Profile</span>  
              <span className={` d-flex align-items-center justify-content-between `}><span className={`${styles.light} accordion_Text`}>Unit :
              </span>
              <select className={`${styles.select} accordion_DropDown form-select`} aria-label="Default select example">
             
              <option selected value="1">Crores</option>
            
            </select>
              
              </span>   
            </div>
            <div className={` ${styles.body}`}>
                <Row >
                    <Col md={3}>
                        <div className={`${styles.col_header} label_heading`}>
                          Gross Turnover
                        </div>
                        <div className={`${styles.col_body} accordion_text`}>
                           1,900.00
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={`${styles.col_header} label_heading`}>
                            Business Activity
                        </div>
                        <div className={`${styles.col_body} accordion_text`}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={`${styles.col_header} label_heading`}>
                            Business Activity
                        </div>
                        <div className={`${styles.col_body} accordion_text`}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={`${styles.col_header} label_heading`}>
                            Business Activity
                        </div>
                        <div className={`${styles.col_body} accordion_text`}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={`${styles.col_header} label_heading`}>
                            Business Activity
                        </div>
                        <div className={`${styles.col_body} accordion_text`}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={`${styles.col_header} label_heading`}>
                            Business Activity
                        </div>
                        <div className={`${styles.col_body} accordion_text`}>
                            Supplier Of Services
                        </div>
                    </Col>
                        <Col md={3}>
                        <div className={`${styles.col_header} label_heading`}>
                            Business Activity
                        </div>
                        <div className={`${styles.col_body} accordion_text`}>
                            Supplier Of Services
                        </div>
                    </Col>
                    
                    
                   </Row>
            </div>
           </div>
           </div>            
        </div>  
        </div>  

       
        <div  className={`${styles.wrapper} card`}>
          <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#litigations1" aria-expanded="true" aria-controls="litigations1">
            <h2 className="mb-0">Summary Chart</h2>
            <span>+</span>
        </div>
        <div id="litigations1" className="collapse" aria-labelledby="litigations1" data-parent="#profileAccordion">
         <div className={` ${styles.cardBody} card-body`}>
           <Row className={styles.row}>
             <Col md={6} className={styles.col}>
              <div className={styles.chart_container}>
              <div className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}>
              <span>Revenue Summary</span>  
              <span className={styles.light}>(Cr)</span> 
            </div>
             <div  className={styles.chart}>
                <Line  ref={chartRef}  data={chartData} options={lineOption}/>
             </div>
              </div>
             </Col>
              <Col md={6} className={styles.col2}>
              <div className={styles.chart_container}>
              <div className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-between`}>
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
              <div className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-between`}>
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
              <div className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-between`}>
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



        <div className={`${styles.wrapper} card`}>
              <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#litigations2" aria-expanded="true" aria-controls="litigations2">
            <h2 className="mb-0">Sales Details</h2>
            <span>+</span>
        </div>
        <div id="litigations2" className="collapse" aria-labelledby="litigations2" data-parent="#profileAccordion">
         <div className={` ${styles.cardBody} card-body `}>
           <table className={`${styles.table_annual}  table border_color`}cellpadding="0" cellspacing="0" border="1">
            <tr>
            <th  className={`${styles.first}`} colspan={2}>Annual Summary</th>
            <th  colspan={2}>MAR 2020 - APR 2021</th>
            <th  colspan={2}>MAR 2021 - APR 2022</th>
            </tr>
             <tr  className={styles.second_head}>
            <td  className={`${styles.first}`} colspan={2} ></td>
             <td>VALUE</td>
              <td >% ON GROSS REVENUE</td>
                <td >VALUE</td>
              <td >% ON GROSS REVENUE</td>
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
            <td  className={`${styles.first}`} colspan={2} >Gross Revenue</td>
             <td>1,900.00</td>
              <td>80%</td>
                <td>1,900.00</td>
              <td>80%</td>
        
            
             
            
             
           
            
            
            </tr>
           </table>
           <table className={`${styles.table_average} border_color  table`} cellpadding="0" cellspacing="0" border="1">
            <tr>
            <th >Averages</th>
            <th  >MAR 2020 - APR 2021</th>
            <th  >MAR 2021 - APR 2022</th>
            </tr>
           
              <tr className={styles.second_head}>
                      <td   ></td>
                      <td>VALUE</td>
                      
                          <td>VALUE</td>
                      
            </tr>
             <tr>
            <td >Average Monthly Sales</td>
             <td>1,900.00</td>
           
                <td>1,900.00</td>
             </tr>
               <tr>
            <td >Average Monthly Sales</td>
             <td>1,900.00</td>
           
                <td>1,900.00</td>
             </tr>
               <tr>
            <td >Average Monthly Sales</td>
             <td>1,900.00</td>
           
                <td>1,900.00</td>
             </tr>
               <tr>
            <td >Average Monthly Sales</td>
             <td>1,900.00</td>
           
                <td>1,900.00</td>
             </tr>
               <tr>
            <td >Average Monthly Sales</td>
             <td>1,900.00</td>
           
                <td>1,900.00</td>
             </tr>
           
           </table>
            <table className={`${styles.table_pricioal} border_color  table`} cellpadding="0" cellspacing="0" border="1">
            <tr>
            <th >Principal/ HSN Wise Sales</th>
            <th colspan={6} >Financial Period:1</th>
           
            </tr>
            <tr>
              <td className={`${styles.second_head} ${styles.first}`}>PRODUCT</td>
                <td className={styles.second_head}>HSN CODE</td>
                  <td className={styles.second_head}>TURNOVER</td>
                    <td className={styles.second_head}>% SHARE</td>

                      <td className={styles.second_head}>CUSTOMERS</td>
                        <td className={styles.second_head}>INVOICES</td>
                          <td className={styles.second_head}>AVG. SALES PER CUSTOMER</td>
            </tr>
               <tr>
              <td className={` ${styles.first}`}>Ferro-Alloys</td>
                <td >72022900E</td>
                  <td >25.40</td>
                    <td >25.40E</td>

                      <td >24</td>
                        <td >19</td>
                          <td >1.05</td>
            </tr>
              <tr>
              <td className={` ${styles.first}`}>Ferro-Alloys</td>
                <td >72022900E</td>
                  <td >25.40</td>
                    <td >25.40E</td>

                      <td >24</td>
                        <td >19</td>
                          <td >1.05</td>
            </tr>
              <tr>
              <td className={` ${styles.first}`}>Ferro-Alloys</td>
                <td >72022900E</td>
                  <td >25.40</td>
                    <td >25.40E</td>

                      <td >24</td>
                        <td >19</td>
                          <td >1.05</td>
            </tr>
          
         
           
           </table>
          
           </div>            
        </div>   </div>                                   
                                              

           {/* CistomerDetail                                    */}

      {gstCustomerDetail()}
      {gstSupplierDetail()}
      {gstSalesAndPurchase("Sales")}
      {gstSalesAndPurchase("Purchase")}
                                      
                                    
    </>
  )
}

export default index

const gstCustomerDetail = () => {
  return(
    <>
      <div  className={`${styles.wrapper} card `}>
              <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#customer" aria-expanded="true" aria-controls="customer">
            <h2 className="mb-0">Customer Details</h2>
            <span className=" d-flex align-items-center justify-content-between">
               <span className={` d-flex align-items-center justify-content-between`}><span className={`${styles.light}`}>Unit :
              </span>
              <select className={`${styles.selectHead} accordion_body form-select`} aria-label="Default select example">
             
              <option selected value="1">Crores</option>
            
            </select>
              
              </span> 
              +
            </span>
        </div>
        <div id="customer" className="collapse" aria-labelledby="customer" data-parent="#profileAccordion">
         <div className={`${styles.CustomercardBody} card-body border_color`}>
         <div className={`${styles.content}`}>
            <div className={` ${styles.header}  card_sub_header card_sub_header  d-flex align-items-center justify-content-between`}>
              <span>Recurring Party Sales In Last 12 Months</span>  
            
            </div>
            <div className={` ${styles.body}`}>
             <table className={`${styles.table2} border_color  table`}cellpadding="0" cellspacing="0" >
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
                <td>Sdf Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Xyz Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Mnb Pvt. Ltd..</td>
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
            <div className={` ${styles.header}  card_sub_header d-flex align-items-center justify-content-between`}>
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
                <td>Sdf Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Xyz Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Mnb Pvt. Ltd.</td>
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
            <div className={` ${styles.header}  card_sub_header d-flex align-items-center justify-content-between`}>
              <span>Top 10 Customers</span>  
            
            </div>
            <div className={` ${styles.body} ${styles.body_noscroll}`}>
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
                <td>Abs International</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Sdf Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Xyz Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Mnb Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Xyz Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Mnb Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Xyz Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Mnb Pvt. Ltd..</td>
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
            <div className={` ${styles.header}  card_sub_header d-flex align-items-center justify-content-between`}>
              <span>Statewise Sales</span>  
            
            </div>
            <div className={` ${styles.body} ${styles.body_noscroll}`}>
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
                <td>Abs International</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Sdf Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Xyz Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Mnb Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Xyz Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Mnb Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Xyz Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Mnb Pvt. Ltd..</td>
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
      </div>
    </>
  )
}

const gstSupplierDetail = () => {
  return(
   <>
      <div className={`${styles.wrapper} card`}>
              <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#customer" aria-expanded="true" aria-controls="customer">
            <h2 className="mb-0">Suppliers Details</h2>
            <span className=" d-flex align-items-center justify-content-between">
               <span className={` d-flex align-items-center justify-content-between`}><span className={styles.light}>Unit :
              </span>
              <select className={`${styles.selectHead} accordion_DropDown  form-select`} aria-label="Default select example">
             
              <option selected value="1">Crores</option>
            
            </select>
              
              </span> 
              +
            </span>
        </div>
        <div id="customer" className="collapse" aria-labelledby="customer" data-parent="#profileAccordion">
         <div className={` ${styles.CustomercardBody} card-body`}>
         <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  card_sub_header d-flex align-items-center justify-content-between`}>
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
                <td>Sdf Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Xyz Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Mnb Pvt. Ltd..</td>
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
            <div className={` ${styles.header}  card_sub_header d-flex align-items-center justify-content-between`}>
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
                <td>Sdf Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Xyz Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Mnb Pvt. Ltd.</td>
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
            <div className={` ${styles.header}  card_sub_header d-flex align-items-center justify-content-between`}>
              <span>Top 10 Customers</span>  
            
            </div>
            <div className={` ${styles.body} ${styles.body_noscroll}`}>
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
                <td>Abs International</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Sdf Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Xyz Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Mnb Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Xyz Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Mnb Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Xyz Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Mnb Pvt. Ltd..</td>
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
            <div className={` ${styles.header}  card_sub_header d-flex align-items-center justify-content-between`}>
              <span>Statewise Sales</span>  
            
            </div>
            <div className={` ${styles.body} ${styles.body_noscroll}`}>
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
                <td>Abs International</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Sdf Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Xyz Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
               <tr>
                <td>Mnb Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Xyz Pvt. Ltd.</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Mnb Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Xyz Pvt. Ltd..</td>
                <td>ABCDE1234F</td>
                <td>50.00</td>
                <td>80%</td>
                <td>10</td>
                <td>10</td>
              </tr>
                <tr>
                <td>Mnb Pvt. Ltd..</td>
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
      </div>
    </>
  )
}

const gstSalesAndPurchase = (head) => {
  return(
    <>
        <div className={`${styles.wrapper} card`}>
              <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#customer" aria-expanded="true" aria-controls="customer">
            <h2 className="mb-0">{head}</h2>
              <span className=" d-flex align-items-center justify-content-between">
               <span className={` d-flex align-items-center justify-content-between`}><span className={styles.light}>Unit :
              </span>
              <select className={`${styles.selectHead}  accordion_DropDown form-select`} aria-label="Default select example">
             
              <option selected value="1">Crores</option>
            
            </select>
              
              </span> 
              +
              </span>
        </div>
        <div id="customer" className="collapse" aria-labelledby="customer" data-parent="#profileAccordion">
         <div className={` ${styles.CustomercardBody} card-body`}>
         <div className={` ${styles.content}`}>
            <div className={` ${styles.header}  card_sub_header d-flex align-items-center justify-content-between`}>
              <span>Financial Period 2020- 2021</span>  
            
            </div>
            <div className={` ${styles.body}`}>
             <table className={`${styles.table2}  table`}cellpadding="0" cellspacing="0" >
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
                <td>Total Sales</td>
                <td>2.22</td>
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
                <td>Total Sales</td>
                <td>2.22</td>
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
                <td>Total Sales</td>
                <td>2.22</td>
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
                <td>Total Sales</td>
                <td>2.22</td>
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
           
            </tbody>
            
           </table>
            </div>
         </div>
         <div className={` ${styles.content}`}>
           
            <div className={` ${styles.body}`}>
             <table className={`${styles.table2}  table`}cellpadding="0" cellspacing="0" >
            <tr>
            <th>REVENUE %</th>
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
                <td>Total Sales</td>
                <td>2.22</td>
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
                <td>Total Sales</td>
                <td>2.22</td>
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
                <td>Total Sales</td>
                <td>2.22</td>
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
                <td>Total Sales</td>
                <td>2.22</td>
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
           
            </tbody>
            
           </table>
            </div>
         </div>
           <div className={` ${styles.content}`}>
           
            <div className={` ${styles.body}`}>
             <table className={`${styles.table2}  table`}cellpadding="0" cellspacing="0" >
            <tr>
            <th>CLIENTS</th>
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
                <td>Total Sales</td>
                <td>2.22</td>
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
                <td>Total Sales</td>
                <td>2.22</td>
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
                <td>Total Sales</td>
                <td>2.22</td>
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
                <td>Total Sales</td>
                <td>2.22</td>
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
           
            </tbody>
            
           </table>
            </div>
         </div>
           <div className={` ${styles.content}`}>
           
            <div className={` ${styles.body}`}>
             <table className={`${styles.table2}  table`}cellpadding="0" cellspacing="0" >
            <tr>
            <th>NO. OF INVOICES</th>
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
                <td>Total Sales</td>
                <td>2.22</td>
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
                <td>Total Sales</td>
                <td>2.22</td>
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
                <td>Total Sales</td>
                <td>2.22</td>
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
                <td>Total Sales</td>
                <td>2.22</td>
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
           
            </tbody>
            
           </table>
            </div>
         </div>
        
          
        </div>            
        </div>  
        </div>
    </>
  )
}