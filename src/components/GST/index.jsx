import React ,{useRef,useEffect,useState}from 'react'
import styles from './index.module.scss'
import {Row,Col} from 'react-bootstrap'
import { Line,Bar } from "react-chartjs-2";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale,Filler ,BarController,BarElement} from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale,Filler,BarController,BarElement);
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

    var gradient = ctx.createLinearGradient(0, 0, 0, 300);
    // gradient.addColorStop(0, 'rgba(224, 195, 155, 0.5)');
    // gradient.addColorStop(1, 'rgba(100, 100, 0,0)');

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
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jun","Jun","Jun","Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [70, 53, 85, 41, 44, 65,34,45,67,89],
      fill: true,

     
      backgroundColor:  color,
      borderColor: "rgba(224, 195, 155, 1)"
    },
 
  ]
};

    setChartData(data);
  },[chartRef.current]);
const getOrCreateTooltip = (chart) => {
  let tooltipEl = chart.canvas.parentNode.querySelector('div');

  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
    tooltipEl.style.borderRadius = '3px';
    tooltipEl.style.color = 'white';
    tooltipEl.style.opacity = 1;
    tooltipEl.style.pointerEvents = 'none';
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.transform = 'translate(-50%, 0)';
    tooltipEl.style.transition = 'all .1s ease';

    const table = document.createElement('table');
    table.style.margin = '0px';

    tooltipEl.appendChild(table);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const externalTooltipHandler = (context) => {
  // Tooltip Element
  const {chart, tooltip} = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map(b => b.lines);

    const tableHead = document.createElement('thead');

    titleLines.forEach(title => {
      const tr = document.createElement('tr');
      tr.style.borderWidth = 0;

      const th = document.createElement('th');
      th.style.borderWidth = 0;
      const text = document.createTextNode(title);

      th.appendChild(text);
      tr.appendChild(th);
      tableHead.appendChild(tr);
    });

    const tableBody = document.createElement('tbody');
    bodyLines.forEach((body, i) => {
      const colors = tooltip.labelColors[i];

      const span = document.createElement('span');
      span.style.background = colors.backgroundColor;
      span.style.borderColor = colors.borderColor;
      span.style.borderWidth = '2px';
      span.style.marginRight = '10px';
      span.style.height = '10px';
      span.style.width = '10px';
      span.style.display = 'inline-block';

      const tr = document.createElement('tr');
      tr.style.backgroundColor = 'inherit';
      tr.style.borderWidth = 0;

      const td = document.createElement('td');
      td.style.borderWidth = 0;

      const text = document.createTextNode(body);

      td.appendChild(span);
      td.appendChild(text);
      tr.appendChild(td);
      tableBody.appendChild(tr);
    });

    const tableRoot = tooltipEl.querySelector('table');

    // Remove old children
    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }

    // Add new children
    tableRoot.appendChild(tableHead);
    tableRoot.appendChild(tableBody);
  }

  const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + 'px';
  tooltipEl.style.top = positionY + tooltip.caretY + 'px';
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
};

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100, decimals: 0};

const lineOption={
  tension:0.2,
 
  fill:true,
  //  elements: {
  //                   point:{
  //                       radius: 2
  //                   }
  //               },
   scales: {
      x: {
        grid: {
          color: '#ff000000',
          borderColor: '#ff000000',
          tickColor: '#ff000000'
        }
      },
         y: {
        grid: {
         
           borderColor: '#ff000000',
          tickColor: '#ff000000'
        }
      }
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
      plugins: {
     
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: externalTooltipHandler
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
         <div className={` ${styles.cardBody} card-body  border_color`}>
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
         <div className={` ${styles.cardBody} card-body  border_color`}>
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
              <div className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}>
              <span>Turnover vs Purchases</span>  
              <span className={styles.light}>(Cr)</span> 
            </div>
             <div  className={styles.chart}>
                <Line data={data} />
             </div>
              </div>
             </Col>
              <Col md={6} className={styles.col}>
              <div className={styles.chart_container}>
              <div className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}>
              <span>Top 10 Customers</span>  
              <span className={styles.light}>(Cr)</span> 
            </div>
             <div  className={styles.chart}>
                <Bar data={data} />
             </div>
              </div>
             </Col>
              <Col md={6} className={styles.col2}>
              <div className={styles.chart_container}>
              <div className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}>
              <span>Top 10 Suppliers</span>  
              <span className={styles.light}>(Cr)</span> 
            </div>
             <div  className={styles.chart}>
                <Bar data={data} />
             </div>
              </div>
             </Col>
               <Col md={6} className={styles.col2}>
              <div className={styles.chart_container}>
              <div className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}>
              <span>State Wise Sales</span>  
              <span className={styles.light}>(Cr)</span> 
            </div>
             <div  className={styles.chart}>
                <Bar data={data} />
             </div>
              </div>
             </Col>
               <Col md={6} className={styles.col2}>
              <div className={styles.chart_container}>
              <div className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}>
              <span>Average Trends</span>  
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
         <div className={` ${styles.cardBody} card-body   border_color`}>
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

        <div className={`${styles.wrapper} card`}>
              <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#litigations2" aria-expanded="true" aria-controls="litigations2">
            <h2 className="mb-0">Purchase Details</h2>
            <span>+</span>
        </div>
        <div id="litigations2" className="collapse" aria-labelledby="litigations2" data-parent="#profileAccordion">
         <div className={` ${styles.cardBody} card-body   border_color`}>
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

        <div className={`${styles.wrapper} card`}>
              <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#litigations2" aria-expanded="true" aria-controls="litigations2">
            <h2 className="mb-0">Compliance</h2>
            {/* <div>
                <span className={` d-flex align-items-center justify-content-between`}><span className={styles.light}>GST :</span>09AAGCS8808K1ZR</span> 
                 <span className={` d-flex align-items-center justify-content-between`}><span className={styles.light}>GST :</span>09AAGCS8808K1ZR</span>   
                  <span className={` d-flex align-items-center justify-content-between`}><span className={styles.light}>GST :</span>09AAGCS8808K1ZR</span>     
            </div> */}
            <span>+</span>
        </div>
        <div id="litigations2" className="collapse" aria-labelledby="litigations2" data-parent="#profileAccordion">
         <div className={` ${styles.cardBody} card-body   border_color`}>
           <table className={`${styles.table_annual}  table border_color`}cellpadding="0" cellspacing="0" border="1">
            <tr>
            <th  className={`${styles.first}`} colspan={2}></th>
            <th  colspan={2}>GSTR1 (SALES)</th>
            <th  colspan={2}>GSTR3B (CONSOLIDATED)</th>
            </tr>
             <tr  className={styles.second_head}>
            <td  className={`${styles.first}`} colspan={2} >MONTH</td>
             <td>DATE OF FILING</td>
              <td >DAYS OF DELAY</td>
                <td >DATE OF FILING</td>
              <td >DAYS OF DELAY</td>
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
      <div  className={`${styles.wrapper} card  `}>
              <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#gstCustomerDetail" aria-expanded="true" aria-controls="gstCustomerDetail">
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
        <div id="gstCustomerDetail" className="collapse" aria-labelledby="gstCustomerDetail" data-parent="#profileAccordion">
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
              <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#gstSupplierDetail" aria-expanded="true" aria-controls="gstSupplierDetail">
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
        <div id="gstSupplierDetail"  className="collapse" aria-labelledby="gstSupplierDetail" data-parent="#gstSupplierDetail">
         <div className={` ${styles.CustomercardBody} card-body border_color`}>
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
            <div className={` ${styles.body} ${styles.body_noscroll} border_color`}>
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
              <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#gstSalesAndPurchase" aria-expanded="true" aria-controls="gstSalesAndPurchase">
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
        <div id="gstSalesAndPurchase" className="collapse" aria-labelledby="gstSalesAndPurchase" data-parent="#profileAccordion">
         <div className={` ${styles.CustomercardBody} card-body border_color`}>
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