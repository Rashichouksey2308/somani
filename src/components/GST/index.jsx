import React, { useRef, useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Row, Col } from 'react-bootstrap'
import { Line, Bar } from 'react-chartjs-2'
import Modal from 'react-bootstrap/Modal'
import moment from 'moment'
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  BarController,
  BarElement,
} from 'chart.js'

// Redux 
import { useDispatch } from 'react-redux'
import { VerifyGstKarza } from '../../redux/creditQueueUpdate/action'

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  BarController,
  BarElement,
)
// Chart.register(linear);
function Index(companyData) {
  const dispatch = useDispatch()
  const GstData = companyData?.companyData?.GST
  console.log(companyData, 'companyData')


  console.log(GstData, "GSTDATA")
  const chartRef = useRef(null)
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [gstFilteredData, SetGstFilteredData] = useState()
  const [gstNumbers, setGstNumbers] = useState([])
  const [customerDetailsUnit, setCustomerDetailsUnit] = useState(10000000)
  const [supplierDetailsUnit, setSupplierDetailsUnit] = useState(10000000)
  const [salesUnit, setSalesUnit] = useState(10000000)
  const [purchasesUnit, setPurchasesUnit] = useState(10000000)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [credential, setCredential] = useState({
    username: '',
    password: '',
    gstin: ''
  })

  useEffect(() => {
    //const arrayFiltered = GstData?.filter((GstinData) => GstinData === credential.gstin)
    GstData?.map((gstData) => {
      const data = { ...gstData }
      SetGstFilteredData(data)
    })
  }, [GstData])
  console.log(gstFilteredData, 'gstFilteredData')

  const gstinVerifyHandler = (e) => {
    const payload = {
      company: companyData?.companyData?.company,
      gstin: credential.gstin,
      username: credential.username,
      password: credential.password
    }
    //console.log(payload, 'payload')

    dispatch(VerifyGstKarza(payload))
    
  }

  const handleChangeGstin = (e) => {
    const filteredgstin = GstData?.filter((GstinData) => GstinData.gstin === e.target.value)
    console.log(filteredgstin.length,'filteredgstin')
    if (filteredgstin.length === 1) {
      filteredgstin?.map((gstData) => {
        const data = { ...gstData }
        SetGstFilteredData(data)
      })
    } else {
      setCredential({ ...credential, gstin: e.target.value })
      handleShow()
    }
  }





  function createGradient(ctx, area) {
    // const colorStart = faker.random.arrayElement(colors);
    // const colorMid = faker.random.arrayElement(
    //   colors.filter(color => color !== colorStart)
    // );
    // const colorEnd = faker.random.arrayElement(
    //   colors.filter(color => color !== colorStart && color !== colorMid)
    // );
    console.log(ctx, area, 'cts')

    var gradient = ctx.createLinearGradient(0, 0, 0, 300);
    // gradient.addColorStop(0, 'rgba(224, 195, 155, 0.5)');
    // gradient.addColorStop(1, 'rgba(100, 100, 0,0)');

    console.log(gradient, "gradient")
    return gradient;
  }

  const covertMonths = (months) => {
    const CovertedMonts = []
    months?.map((month) => {
      let convertedMonths = []
      CovertedMonts.push(...convertedMonths, moment(month, 'MMYYYY').format('MMMM'))
    })
    return CovertedMonts
  }


  useEffect(() => {

    const chart = chartRef.current;
    console.log("here", chart.ctx)
    if (!chart) {
      return
    }

    let color = createGradient(chart.ctx, chart.chartArea)
    console.log(color, "color")
    const data = {
      labels: covertMonths(gstFilteredData?.detail?.summaryCharts?.revenueSummary?.months),
      datasets: [
        {
          label: "First dataset",
          data: gstFilteredData?.detail?.summaryCharts?.revenueSummary?.totalSales,
          fill: true,


          backgroundColor: color,
          borderColor: "#2979F2"
        },
        {
          label: "First dataset",
          data: gstFilteredData?.detail?.summaryCharts?.revenueSummary?.thirdPartySales,
          fill: true,


          backgroundColor: color,
          borderColor: "#FA5F1C"
        },
        {
          label: "First dataset",
          data: gstFilteredData?.detail?.summaryCharts?.revenueSummary?.relatedPartySales,
          fill: true,


          backgroundColor: color,
          borderColor: "#FFD950"
        },
        {
          label: "First dataset",
          data: gstFilteredData?.detail?.summaryCharts?.revenueSummary?.intraOrgSales,
          fill: true,


          backgroundColor: color,
          borderColor: "#02BC77"
        },


      ]
    };

    setChartData(data);
  }, [chartRef.current]);
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
    const { chart, tooltip } = context;
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

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
  };

  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100, decimals: 0 };

  const lineOption = {
    tension: 0.2,

    fill: true,
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
  let turOverdataAndPurchases = {
    labels: covertMonths(gstFilteredData?.detail?.summaryCharts?.grossPurchaseVsSale?.month),
    datasets: [
      {
        label: "First dataset",
        data: gstFilteredData?.detail?.summaryCharts?.grossPurchaseVsSale?.sale,
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "First dataset",
        data: gstFilteredData?.detail?.summaryCharts?.grossPurchaseVsSale?.purchase,
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: "rgba(75,192,192,1)"
      }

    ]
  }
  let data = {
    labels: gstFilteredData?.detail?.summaryCharts?.top10Cus?.names,
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 120],
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: "rgba(75,192,192,1)"
      }

    ]
  }

  let top10Customers = {
    labels: gstFilteredData?.detail?.summaryCharts?.top10Cus?.names,
    datasets: [
      {
        label: "First dataset",
        data: gstFilteredData?.detail?.summaryCharts?.top10Cus?.values,
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: "rgba(75,192,192,1)"
      }

    ]
  }
  let top10Supplier = {
    labels: gstFilteredData?.detail?.summaryCharts?.statewiseSales?.names,
    datasets: [
      {
        label: "First dataset",
        data: gstFilteredData?.detail?.summaryCharts?.statewiseSales?.values,
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: "rgba(75,192,192,1)"
      }

    ]
  }

  let stateWiseSales = {
    labels: gstFilteredData?.detail?.summaryCharts?.statewiseSales?.names,
    datasets: [
      {
        label: "First dataset",
        data: gstFilteredData?.detail?.summaryCharts?.statewiseSales?.values,
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: "rgba(75,192,192,1)"
      }

    ]
  }

  let averageRate = {
    labels: covertMonths(gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends?.months),
    datasets: [
      {
        label: "First dataset",
        data: gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends?.customers,
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "First dataset",
        data: gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends?.invoices,
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "First dataset",
        data: gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends?.avgMonthlySales,
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: "rgba(75,192,192,1)"
      }

    ]
  }

  return (
    <>
      <div className={`${styles.wrapper} card`}>
        <div
          className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#litigations"
          aria-expanded="true"
          aria-controls="litigations"
        >
          <h2 className="mb-0">Summary Information</h2>
          <span>+</span>
        </div>
        <div
          id="litigations"
          className="collapse"
          aria-labelledby="litigations"
          data-parent="#profileAccordion"
        >
          <div className={` ${styles.cardBody} card-body  border_color`}>
            <div className={` ${styles.content}`}>
              <div
                className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-between`}
              >
                <span>Business Profile</span>
                <span
                  className={` d-flex align-items-center justify-content-between`}
                >
                  <span className={styles.light}>GST :</span>
                  <select className={`${styles.gst_list}`} onChange={(e) => handleChangeGstin(e)}>
                    {companyData?.orderList?.company?.gstList?.map((gstin, index) => (
                      <option key={index} value={gstin}>{gstin}</option>
                    ))}
                  </select>
                </span>
              </div>
              <div className={` ${styles.body}`}>
                <Row>
                  <Col md={3} sm={12}>
                    <div className={`${styles.col_header} label_heading`}>
                      Business Activity
                    </div>
                    <div className={styles.col_body}>
                      {gstFilteredData?.detail?.summaryInformation?.businessProfile?.businessActivity[0]}</div>
                  </Col>
                  <Col md={3} sm={12}>
                    <div className={`${styles.col_header} label_heading`}>
                      Date of Registration
                    </div>
                    <div className={styles.col_body}>{gstFilteredData?.detail?.summaryInformation?.businessProfile?.rgdt}</div>
                  </Col>
                  <Col md={3} sm={12}>
                    <div className={`${styles.col_header} label_heading`}>
                      State of Registration
                    </div>
                    <div className={styles.col_body}>{gstFilteredData?.detail?.summaryInformation?.businessProfile?.stj}</div>
                  </Col>
                  <Col md={3} sm={12}>
                    <div className={`${styles.col_header} label_heading`}>
                      Email ID
                    </div>
                    <div className={styles.col_body}>{gstFilteredData?.detail?.summaryInformation?.businessProfile?.email}</div>
                  </Col>
                  <Col md={3} sm={12}>
                    <div className={`${styles.col_header} label_heading`}>
                      Contact Details
                    </div>
                    <div className={styles.col_body}>+91 {gstFilteredData?.detail?.summaryInformation?.businessProfile?.mobNum}</div>
                  </Col>
                  <Col md={3} sm={12}>
                    <div className={`${styles.col_header} label_heading`}>
                      Compliance Status
                    </div>
                    <div className={styles.col_body}>{gstFilteredData?.detail?.summaryInformation?.businessProfile?.complianceStatus}</div>
                  </Col>
                  <Col md={3} sm={12}>
                    <div className={`${styles.col_header} label_heading`}>
                      Latest Return Filed GSTR 1
                    </div>
                    <div className={styles.col_body}>{gstFilteredData?.detail?.summaryInformation?.businessProfile?.lastReturnFiledgstr1}</div>
                  </Col>
                  <Col md={3} sm={12}>
                    <div className={`${styles.col_header} label_heading`}>
                      Latest Return Filed GSTR 3B
                    </div>
                    <div className={styles.col_body}>{gstFilteredData?.detail?.summaryInformation?.businessProfile?.lastReturnFiledgstr1}</div>
                  </Col>
                </Row>

              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div
                className={` ${styles.header}   card_sub_header d-flex align-items-center justify-content-between`}
              >
                <span>Alerts Indentified</span>
              </div>
              <div className={` ${styles.body}`}>
                <Row className={` ${styles.row}`}>
                  <Col
                    md={2}
                    sm={12}
                    className={`${styles.gst_cancelled}  d-flex align-items-center justify-content-start`}
                  >
                    <div className={styles.dot}></div>
                    <span>GST cancelled</span>
                  </Col>
                </Row>
                <Row className={` ${styles.row}`}>
                  <Col
                    md={3}
                    sm={12}
                    className={`${styles.gst_cancelled} gst_profile_alerts  d-flex align-items-center justify-content-start`}
                  >
                    <div
                      className={styles.dot}
                      style={{ backgroundColor: '#28BE39' }}
                    ></div>
                    <span>GST Transaction default</span>
                  </Col>
                  <Col
                    md={3}
                    sm={12}
                    className={`${styles.gst_cancelled}  gst_profile_alerts  d-flex align-items-center justify-content-start`}
                  >
                    <div
                      className={styles.dot}
                      style={{ backgroundColor: '#3F66EA' }}
                    ></div>
                    <span>GST Provisional</span>
                  </Col>
                  <Col
                    md={3}
                    sm={12}
                    className={`${styles.gst_cancelled}  gst_profile_alerts  d-flex align-items-center justify-content-start`}
                  >
                    <div
                      className={styles.dot}
                      style={{ backgroundColor: '#EA3FD6' }}
                    ></div>
                    <span>GST Transaction delay</span>
                  </Col>
                  <Col
                    md={3}
                    sm={12}
                    className={`${styles.gst_cancelled}  gst_profile_alerts  d-flex align-items-center justify-content-start`}
                  >
                    <div
                      className={styles.dot}
                      style={{ backgroundColor: '#CBC5C5' }}
                    ></div>
                    <span>GST Inactive</span>
                  </Col>
                </Row>
              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div
                className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-between`}
              >
                <span>Key Managerial Personsd</span>
              </div>
              <div className={` ${styles.body}`}>
                <Row>

                  {gstFilteredData?.detail?.summaryInformation?.keyManagerialPerson?.map((keyPerson, index) => (
                    <Col
                      key={index}
                      md={3}
                      sm={12}
                      className={`  d-flex align-items-center justify-content-between`}
                    >
                      <span>- {keyPerson}</span>
                    </Col>
                  ))}
                </Row>
                <Row></Row>
              </div>
            </div>

            <div className={` ${styles.content} `}>
              <div
                className={` ${styles.header}  card_sub_header   d-flex align-items-center justify-content-between`}
              >
                <span>Revenue Profile</span>
                <span
                  className={` d-flex align-items-center justify-content-between `}
                >
                  <span className={`${styles.light} accordion_Text`}>
                    Unit :
                  </span>
                  <select
                    className={`${styles.select} accordion_DropDown form-select`}
                    aria-label="Default select example"
                  >
                    <option selected value="1">
                      Crores
                    </option>
                  </select>
                </span>
              </div>
              <div className={` ${styles.body}`}>
                <Row>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Gross Turnover
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.grossTurnover}
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Gross Purchases
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.grossPurchases}
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Gross Margins %
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.grossMargin}
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Total clients
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.ttlCustomer}
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Total Invoices
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.ttlInv}
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Intra Organisation Sales %
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.intraOrgSalesPercent}
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Related Party Sales %
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.relatedPartySales}
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Export Sales %
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.exportSalesPercent}
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      GST Paid
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.gstPaid}
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      GST Payble
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.gstPayable}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} className={`${styles.verify_gst} card verify_gst`}>
        <Modal.Header className={`${styles.card_header} card-header bg-transparent`}>
          <Modal.Title>
            <h3>Verify GST</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body onHide={() => console.log("modal Closed")} className={`${styles.card_body} card-body`}>
          <p className="card-text">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. OTP</p>
          <ul className={`${styles.nav_tabs} nav nav-tabs`} id="verifyGST" role="tablist">
            <li className={`${styles.nav_item} nav-item`}>
              <a className={`${styles.nav_link} nav-link active`} id="via-email" data-toggle="tab" href="#viaEmail" role="tab" aria-controls="viaEmail" aria-selected="true"><img src="/static/email-icon.png" className='img-fluid' alt='Via Email' />Via Email</a>
            </li>
            <li className={`${styles.nav_item} nav-item`}>
              <a className={`${styles.nav_link} nav-link`} id="via-phone" data-toggle="tab" href="#viaPhone" role="tab" aria-controls="viaPhone" aria-selected="false"><img src="/static/phone-icon.png" className='img-fluid' alt='Via Email' />Via Phone No.</a>
            </li>
          </ul>
          <form>
            <div className={`${styles.tab_content} tab-content`} id="myTabContent">
              <div className="tab-pane fade show active" id="viaEmail" role="tabpanel" aria-labelledby="via-email">
                <div className={`${styles.labelFloat} form-group`}>
                  <input type='text' id='email' name="email" className={`${styles.formControl} ${styles.input} input form-control`} onChange={(e) => setCredential({ ...credential, username: e.target.value })} required />
                  <label className={`label_heading_login`} htmlFor='email'>Email or Username</label>
                </div>
                <div className={`${styles.labelFloat} ${styles.password} form-group`}>
                  <div className='input-group align-items-center' id='password'>
                    <input type='password' name="password" className={`${styles.formControl} ${styles.input} input form-control`} onChange={(e) => setCredential({ ...credential, password: e.target.value })} required />
                    <label className={`label_heading_login`} htmlFor='password'>Password</label>
                    <img src='/static/eye.svg' alt='Show Password' className='img-fluid' />
                  </div>
                </div>
                <div className='d-flex justify-content-between'>
                  <button onClick={handleClose} type='button' className={`${styles.close} ${styles.btn} btn w-50`}>Close</button>
                  <button onClick={gstinVerifyHandler} type='button' className={`${styles.submit} ${styles.btn} btn w-50`}>Submit</button>
                </div>
              </div>
              <div className="tab-pane fade" id="viaPhone" role="tabpanel" aria-labelledby="via-phone">
                <div className={`${styles.labelFloat} form-group`}>
                  <input type='text' id='phone' name="phone" className={`${styles.formControl} ${styles.input} input form-control`} required />
                  <label className={`label_heading_login`} htmlFor='phone'>Phone Number</label>
                </div>
                <div className='d-flex justify-content-between'>
                  <button onClick={handleClose} type='button' className={`${styles.close} ${styles.btn} btn w-50`}>Close</button>
                  <button onClick={handleClose} type='button' className={`${styles.submit} ${styles.btn} btn w-50`}>Get OTP</button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <div className={`${styles.wrapper} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#summaryCharts"
          aria-expanded="true"
          aria-controls="summaryCharts"
        >
          <h2 className="mb-0">Summary Chart</h2>
          <span>+</span>
        </div>
        <div
          id="summaryCharts"
          className="collapse"
          aria-labelledby="summaryCharts"
          data-parent="#profileAccordion"
        >
          <div className={` ${styles.cardBody} card-body border-top-0 border_color`}>
            <Row className={styles.row}>
              <Col md={6} sm={12} className={styles.col}>
                <div className={`${styles.chart_container} ${styles.noBorder}`}>
                  <div
                    className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}
                  >
                    <span>Revenue Summary</span>
                    <span className={styles.light}>(Cr)</span>
                  </div>
                  <div className={`${styles.chart} }`}>
                    <Line
                      ref={chartRef}
                      data={chartData}
                      options={lineOption}
                    />
                    <div className={`${styles.legend_box} text-center`}>
                      <span className={`${styles.blue_legend} ${styles.legend}`}>Total Sales</span>
                      <span className={`${styles.red_legend} ${styles.legend}`}>Third Party Sales</span>
                      <span className={`${styles.yellow_legend} ${styles.legend}`}>Related Party Sales</span>
                      <span className={`${styles.green_legend} ${styles.legend}`}>Intra Org Sales</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} className={styles.col2}>
                <div className={styles.chart_container}>
                  <div
                    className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}
                  >
                    <span>Turnover vs Purchases</span>
                    <span className={styles.light}>(Cr)</span>
                  </div>
                  <div className={styles.chart}>
                    <Line data={turOverdataAndPurchases} />
                    <div className={`${styles.legend_box} text-center`}>
                      <span className={`${styles.blue_legend} ${styles.legend}`}>Gross Turnover</span>
                      <span className={`${styles.red_legend} ${styles.legend}`}>Gross Purchases</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} className={styles.col}>
                <div className={styles.chart_container}>
                  <div
                    className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}
                  >
                    <span>Top 10 Customers</span>
                    <span className={styles.light}>(Cr)</span>
                  </div>
                  <div className={styles.chart}>
                    <Bar data={top10Customers} />
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} className={styles.col2}>
                <div className={styles.chart_container}>
                  <div
                    className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}
                  >
                    <span>Top 10 Suppliers</span>
                    <span className={styles.light}>(Cr)</span>
                  </div>
                  <div className={styles.chart}>
                    <Bar data={top10Supplier} />
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} className={styles.col2}>
                <div className={styles.chart_container}>
                  <div
                    className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}
                  >
                    <span>State Wise Sales</span>
                    <span className={styles.light}>(Cr)</span>
                  </div>
                  <div className={styles.chart}>
                    <Bar data={stateWiseSales} />
                    <div className={`${styles.legend_box} text-center`}>
                      <span className={`${styles.legend}`}>Financial Period 07-2018 to 06-2029</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} className={styles.col2}>
                <div className={styles.chart_container}>
                  <div
                    className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}
                  >
                    <span>Average Trends</span>
                    <span className={styles.light}>(Cr)</span>
                  </div>
                  <div className={styles.chart}>
                    <Line data={averageRate} />
                    <div className={`${styles.legend_box} text-center`}>
                      <span className={`${styles.blue_legend} ${styles.legend}`}>No. of Customers</span>
                      <span className={`${styles.red_legend} ${styles.legend}`}>No. of Invoices</span>
                      <span className={`${styles.green_legend} ${styles.legend}`}>Avg. Monthly Sales</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={`${styles.wrapper} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#salesDetails"
          aria-expanded="true"
          aria-controls="salesDetails"
        >
          <h2 className="mb-0">Sales Details</h2>
          <span>+</span>
        </div>
        <div
          id="salesDetails"
          className="collapse"
          aria-labelledby="salesDetails"
          data-parent="#profileAccordion"
        >
          <div className={` ${styles.cardBody} card-body border-top-0  border_color`}>
            <div className={`${styles.scrollouter}`}>
              <div className={`${styles.scrollInner}`}>
                <table
                  className={`${styles.table_annual}  table border_color`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="1"
                >
                  <tr>
                    <th className={`${styles.first}`} colSpan={2}>
                      Annual Summary
                    </th>
                    <th colSpan={2}>MAR 2020 - APR 2021</th>
                    <th colSpan={2}>MAR 2021 - APR 2022</th>
                  </tr>
                  <tr className={styles.second_head}>
                    <td colSpan={2}></td>
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
                    <td colSpan={2}>
                      Gross Revenue
                    </td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.grossTurnover?.current?.value}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.grossTurnover?.current?.percentage}%</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.grossTurnover?.previous?.value}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.grossTurnover?.previous?.percentage}%</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Recurring Sales
                    </td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.recurringSales?.current?.value}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.recurringSales?.current?.percentage}%</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.recurringSales?.previous?.value}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.recurringSales?.previous?.percentage}%</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Related Party Sales
                    </td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.relatedPartySales?.current?.value}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.relatedPartySales?.current?.percentage}%</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.relatedPartySales?.previous?.value}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.relatedPartySales?.previous?.percentage}%</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Intra Organization Sales
                    </td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.intraOrgSalesPercent?.current?.value}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.intraOrgSalesPercent?.current?.percentage}%</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.intraOrgSalesPercent?.previous?.value}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.intraOrgSalesPercent?.previous?.percentage}%</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      B2B Sales
                    </td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2BSales?.current?.value}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2BSales?.current?.percentage}%</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2BSales?.previous?.value}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2BSales?.previous?.percentage}%</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      B2C Sales
                    </td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2CSales?.current?.value}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2CSales?.current?.percentage}%</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2CSales?.previous?.value}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2CSales?.previous?.percentage}%</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Export Sales
                    </td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.exportSales?.current?.value}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.exportSales?.current?.percentage}%</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.exportSales?.previous?.value}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.exportSales?.previous?.percentage}%</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Total Customers
                    </td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlCustomer?.current?.value}</td>
                    <td></td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlCustomer?.previous?.value}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Total Invoices
                    </td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlInv?.current?.value}</td>
                    <td></td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlInv?.previous?.value}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <strong>Sales Growth Rate</strong>
                    </td>
                    <td></td>
                    <td><strong>-47.73%</strong></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <strong>Quarterly Growth Rate</strong>
                    </td>
                    <td></td>
                    <td><strong>50%</strong></td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
                <table
                  className={`${styles.table_average} border_color  table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="1"
                >
                  <tr>
                    <th className={`${styles.first}`} >Averages</th>
                    <th>MAR 2020 - APR 2021</th>
                    <th>MAR 2021 - APR 2022</th>
                  </tr>

                  <tr className={styles.second_head}>
                    <td></td>
                    <td>VALUE</td>

                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>Average Monthly Sales</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.averages?.avgMonthlySales?.current}</td>

                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.averages?.avgMonthlySales?.previous}</td>
                  </tr>
                  <tr>
                    <td>Average Quarterly Sales</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.averages?.avgQuarterlySales?.current}</td>

                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.averages?.avgQuarterlySales?.previous}</td>
                  </tr>
                  <tr>
                    <td>Average Sales per Customer</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.averages?.avginvcust?.previous}</td>

                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.averages?.avginvcust?.current}</td>
                  </tr>
                  <tr>
                    <td>Average Sales per Invoice</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.averages?.avgttlvalinv?.previous}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.averages?.avgttlvalinv?.current}</td>
                  </tr>
                  <tr>
                    <td>Average Invoices per Customer</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.averages?.avgttlvalcust?.previous}</td>
                    <td>{gstFilteredData?.detail?.salesDetailAnnual?.averages?.avgttlvalcust?.current}</td>
                  </tr>
                </table>
                <table
                  className={`${styles.table_pricipal} border_color  table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="1"
                >
                  <tr>
                    <th className={`${styles.first}`}>Principal/ HSN Wise Sales</th>
                    <th colSpan={6}>Financial Period: MAR 2020 - APR 2021</th>
                  </tr>
                  <tr className={`${styles.second_head}`}>
                    <td>
                      PRODUCT
                    </td>
                    <td>HSN CODE</td>
                    <td>TURNOVER</td>
                    <td>% SHARE</td>

                    <td>CUSTOMERS</td>
                    <td>INVOICES</td>
                    <td>AVG. SALES PER CUSTOMER</td>
                  </tr>

                  {gstFilteredData && gstFilteredData?.detail?.salesDetailAnnual?.hsnWiseSales?.map((sales, index) => (
                    <tr key={index}>
                      <td className={` ${styles.first}`}>{sales.hsnDesc}</td>
                      <td>{sales.hsnSc}</td>
                      <td>{sales.turnover}</td>
                      <td>{sales.sharePercent}</td>

                      <td>24</td>
                      <td>19</td>
                      <td>1.05</td>
                    </tr>
                  ))}
                </table>

              </div>
            </div>

          </div>
        </div>{' '}
      </div>

      <div className={`${styles.wrapper} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#purchaseDetails"
          aria-expanded="true"
          aria-controls="purchaseDetails"
        >
          <h2 className="mb-0">Purchase Details</h2>
          <span>+</span>
        </div>
        <div
          id="purchaseDetails"
          className="collapse"
          aria-labelledby="purchaseDetails"
          data-parent="#profileAccordion"
        >
          <div className={` ${styles.cardBody} card-body  border-top-0 border_color`}>
            <div className={`${styles.scrollouter}`}>
              <div className={`${styles.scrollInner}`}>
                <table
                  className={`${styles.table_annual}  table border_color`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="1"
                >
                  <tr>
                    <th className={`${styles.first}`} colSpan={2}>
                      Annual Summary
                    </th>
                    <th colSpan={2}>MAR 2020 - APR 2021</th>
                    <th colSpan={2}>MAR 2021 - APR 2022</th>
                  </tr>
                  <tr className={styles.second_head}>
                    <td colSpan={2}></td>
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
                    <td colSpan={2}>
                      Gross Purchases
                    </td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.grossPurchases?.previous?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.grossPurchases?.previous?.percentage}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.grossPurchases?.current?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.grossPurchases?.current?.percentage}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Recurring Purchases
                    </td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.recurringPurchase?.previous?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.recurringPurchase?.previous?.percentage}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.recurringPurchase?.current?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.recurringPurchase?.current?.percentage}</td>
                  </tr>

                  <tr>
                    <td colSpan={2}>
                      Related Party Purchases
                    </td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.relatedPartyPurchase?.previous?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.relatedPartyPurchase?.previous?.percentage}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.relatedPartyPurchase?.current?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.relatedPartyPurchase?.current?.percentage}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Intra Organization Purchases
                    </td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.intraOrgPurchasesPercent?.previous?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.intraOrgPurchasesPercent?.previous?.percentage}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.intraOrgPurchasesPercent?.current?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.intraOrgPurchasesPercent?.current?.percentage}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      B2B  Purchases
                    </td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.B2BPurchase?.previous?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.B2BPurchase?.previous?.percentage}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.B2BPurchase?.current?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.B2BPurchase?.current?.percentage}</td>
                  </tr>

                  <tr>
                    <td colSpan={2}>
                      Import   Purchases
                    </td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.otherPurchase?.previous?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.otherPurchase?.previous?.percentage}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.otherPurchase?.current?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.otherPurchase?.current?.percentage}</td>
                  </tr>

                  <tr>
                    <td colSpan={2}>
                      Total Suppliers
                    </td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlSuppliers?.previous?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlSuppliers?.previous?.percentage}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlSuppliers?.current?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlSuppliers?.current?.percentage}</td>
                  </tr>

                  <tr>
                    <td colSpan={2}>
                      Total Invoices
                    </td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlRec?.previous?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlRec?.previous?.percentage}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlRec?.current?.value}</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlRec?.current?.percentage}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <strong>Purchases Growth Rate</strong>
                    </td>
                    <td></td>
                    <td><strong>-{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.purchasesGrowthRate?.previous?.value}</strong></td>
                    <td></td>
                    <td><strong>-{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.purchasesGrowthRate?.current?.value}</strong></td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <strong>Quarterly Growth Rate</strong>
                    </td>
                    <td></td>
                    <td><strong>-{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.quaterlyGrowthRate?.previous?.value}</strong></td>
                    <td></td>
                    <td><strong>-{gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.quaterlyGrowthRate?.current?.value}</strong></td>
                  </tr>
                </table>
                <table
                  className={`${styles.table_average} border_color  table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="1"
                >
                  <tr>
                    <th className={`${styles.first}`}>Averages</th>
                    <th>MAR 2020 - APR 2021</th>
                    <th>MAR 2021 - APR 2022</th>
                  </tr>

                  <tr className={styles.second_head}>
                    <td></td>
                    <td>VALUE</td>

                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>Average Monthly Purchases</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgMonthlyPurchase?.previous}</td>

                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgMonthlyPurchase?.current}</td>
                  </tr>
                  <tr>
                    <td>Average Quarterly Purchases</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgQuarterlyPurchase?.previous}</td>

                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgQuarterlyPurchase?.current}</td>
                  </tr>
                  <tr>
                    <td>Average Purchases per Supplier</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgPurchasePerSupplier?.previous}</td>

                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgPurchasePerSupplier?.current}</td>
                  </tr>
                  <tr>
                    <td>Average Purchases per Invoices</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgPurchasePerInv?.previous}</td>

                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgPurchasePerInv?.current}</td>
                  </tr>
                  <tr>
                    <td>Average Invoices per Supplier</td>
                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgInvPerSupplier?.previous}</td>

                    <td>{gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgInvPerSupplier?.current}</td>
                  </tr>
                </table>
                <table
                  className={`${styles.table_pricipal} border_color  table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="1"
                >
                  <tr>
                    <th className={`${styles.first}`}>Principal/ HSN Wise Sales</th>
                    <th colSpan={6}>Financial Period:1</th>
                  </tr>
                  <tr className={`${styles.second_head}`}>
                    <td>
                      PRODUCT
                    </td>
                    <td>HSN CODE</td>
                    <td>TURNOVER</td>
                    <td>% SHARE</td>

                    <td>CUSTOMERS</td>
                    <td>INVOICES</td>
                    <td>AVG. SALES PER CUSTOMER</td>
                  </tr>
                  {gstFilteredData && gstFilteredData?.detail?.purchaseDetailAnnual?.hsnWisePurchase?.map((sales, index) => (
                    <tr key={index}>
                      <td className={` ${styles.first}`}>{sales.hsnDesc}</td>
                      <td>{sales.hsnSc}</td>
                      <td>{sales.turnover}</td>
                      <td>{sales.sharePercent}</td>

                      <td>24</td>
                      <td>19</td>
                      <td>1.05</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>

          </div>
        </div>{' '}
      </div>

      <div className={`${styles.wrapper} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#Compliance"
          aria-expanded="true"
          aria-controls="Compliance"
        >
          <h2 className="mb-0">Compliance</h2>
          <div className={`${styles.subHeadContainer} d-flex mr-4 ml-auto`}>
            <div className={` ${styles.complaintExtra} d-flex align-items-center`}>
              <div className={`${styles.lightCompliance} ml-4 mr-2`}>Filing History:</div>{gstFilteredData?.detail?.complianceDetail?.filingHistory}
            </div>
            <div className={`${styles.complaintExtra} d-flex align-items-center`}>
              <div className={`${styles.lightCompliance} ml-4 mr-2`}>Filing Frequency:</div>{gstFilteredData?.detail?.complianceDetail?.filingFrequency}
            </div>
            <div className={`${styles.complaintExtra} d-flex align-items-center`}>
              <div className={`${styles.lightCompliance} ml-4 mr-2`}>Financial Period:</div>{gstFilteredData?.detail?.complianceDetail?.financialPeriod}
            </div>
          </div>
          <span>+</span>
        </div>
        <div
          id="Compliance"
          className="collapse"
          aria-labelledby="Compliance"
          data-parent="#profileAccordion"
        >
          <div className={` ${styles.cardBody} card-body  border-top-0 border_color`}>
            <div className={`${styles.scrollouter}`}>
              <div className={`${styles.scrollInner}`}>
                <table
                  className={`${styles.table_annual}  table border_color`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="1"
                >
                  <tr>
                    <th className={`${styles.first}`} colSpan={2}></th>
                    <th colSpan={2}>GSTR1 (SALES)</th>
                    <th colSpan={2}>GSTR3B (CONSOLIDATED)</th>
                  </tr>
                  <tr className={styles.second_head}>
                    <td colSpan={2}>
                      MONTH
                    </td>
                    <td>DATE OF FILING</td>
                    <td>DAYS OF DELAY</td>
                    <td>DATE OF FILING</td>
                    <td>DAYS OF DELAY</td>
                    {/* <td    className=" d-flex align-items-center justify-content-between">
               <span>VALUE</span>
               <span >% ON GROSS REVENUE</span>
             </td>
              <td    className=" d-flex align-items-center justify-content-between">
               <span>VALUE</span>
               <span >% ON GROSS REVENUE</span>
             </td> */}
                  </tr>
                  {gstFilteredData && gstFilteredData?.detail?.complianceDetail?.monthlyData?.map((customer, index) => (
                    <tr key={index}>
                      <td colSpan={2}>
                        {moment(customer?.retPeriod, 'MMYYY').format('MMMM YYYY')}

                      </td>
                      <td>{customer?.GSTR1?.dof}</td>
                      <td>{customer?.GSTR1?.delayDays}</td>
                      <td>{customer?.GSTR3B?.dof}</td>
                      <td>{customer?.GSTR3B?.delayDays}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>

          </div>
        </div>{' '}
      </div>

      {/* CistomerDetail                                    */}

      {gstCustomerDetail(gstFilteredData, customerDetailsUnit, setCustomerDetailsUnit)}
      {gstSupplierDetail(gstFilteredData, supplierDetailsUnit, setSupplierDetailsUnit)}
      {gstSales('Sales', gstFilteredData, salesUnit, setSalesUnit)}
      {gstPurchase('Purchase', gstFilteredData, purchasesUnit, setPurchasesUnit)}
    </>
  )
}

export default Index

const gstCustomerDetail = (gstFilteredData, supplierDetailsUnit, setSupplierDetailsUnit) => {
  return (
    <>
      <div className={`${styles.wrapper} card  `}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#gstCustomerDetail"
          aria-expanded="true"
          aria-controls="gstCustomerDetail"
        >
          <h2 className="mb-0">Customer Details</h2>
          <div className="d-flex align-items-center">
            <h5 className={`${styles.light} accordion_Text`}>Unit :</h5>
            <select className={`${styles.selectHead} accordion_body accordion_DropDown form-select`} aria-label="Default select example"
            >
              <option selected value="1">Crores</option>
            </select>
            <span>+</span>
          </div>
        </div>
        <div
          id="gstCustomerDetail"
          className="collapse"
          aria-labelledby="gstCustomerDetail"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.CustomercardBody} card-body border-top-0 border_color`}>
            <div className={`${styles.content}`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2} border_color  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr>
                        <th className={`${styles.first}`} colSpan={6}>Recurring Party Sales In Last 12 Months</th>
                      </tr>
                      <tr className={styles.second_head}>
                        <td>CUSTOMER NAME</td>
                        <td>PAN</td>
                        <td>SALES</td>
                        <td>% OF TOTAL SALES</td>
                        <td>OF INVOICES</td>
                        <td>SALES PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData && gstFilteredData?.detail?.customerDetail?.recurringPartySales?.map((customer, index) => (
                          <tr key={index}>
                            <td>{customer?.name}</td>
                            <td>{customer?.pan}</td>
                            <td>{customer?.ttlVal / supplierDetailsUnit.toFixed(2)}</td>
                            <td>{customer?.percentageOfTotalSales}%</td>
                            <td>{customer?.invoice}</td>
                            <td>{customer?.salesPerInvoice}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table1}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr>
                        <th className={`${styles.first}`} colSpan={6}>Related Party Sales In Last 12 Monthss</th>
                      </tr>
                      <tr className={styles.second_head}>
                        <td>CUSTOMER NAME</td>
                        <td>PAN</td>
                        <td>SALES</td>
                        <td>% OF TOTAL SALES</td>
                        <td>OF INVOICES</td>
                        <td>SALES PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData && gstFilteredData?.detail?.customerDetail?.relatedPartySales?.map((customer, index) => (
                          <tr key={index}>
                            <td>{customer?.name}</td>
                            <td>{customer?.pan}</td>
                            <td>{customer?.ttlVal}</td>
                            <td>{customer?.percentageOfTotalSales}%</td>
                            <td>{customer?.invoice}</td>
                            <td>{customer?.salesPerInvoice}</td>
                          </tr>
                        ))}

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body} ${styles.body_noscroll}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table1}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr>
                        <th className={`${styles.first}`} colSpan={6}>Top 10 Customers</th>
                      </tr>
                      <tr className={styles.second_head}>
                        <td>CUSTOMER NAME</td>
                        <td>PAN</td>
                        <td>SALES</td>
                        <td>% OF TOTAL SALES</td>
                        <td>OF INVOICES</td>
                        <td>SALES PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData && gstFilteredData?.detail?.customerDetail?.top10Customers?.map((customer, index) => (
                          <tr key={index}>
                            <td>{customer?.name}</td>
                            <td>{customer?.pan}</td>
                            <td>{customer?.ttlVal}</td>
                            <td>{customer?.percentageOfTotalSales}%</td>
                            <td>{customer?.invoice}</td>
                            <td>{customer?.salesPerInvoice}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body} ${styles.body_noscroll}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table1}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr>
                        <th className={`${styles.first}`} colSpan={6}>Statewise Sales</th>
                      </tr>
                      <tr className={styles.second_head}>
                        <td>STATE</td>
                        <td>STATE CODE</td>
                        <td>SALES</td>
                        <td>% OF TOTAL SALES</td>
                        <td>OF INVOICES</td>
                        <td>SALES PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData && gstFilteredData?.detail?.customerDetail?.statewiseSales?.map((customer, index) => (
                          <tr key={index}>
                            <td>{customer?.stateName}</td>
                            <td>{customer?.stateCode}</td>
                            <td>{customer?.ttlVal}</td>
                            <td>{customer?.percentageOfTotalSales}%</td>
                            <td>{customer?.invoice}</td>
                            <td>{customer?.salesPerInvoice}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const gstSupplierDetail = (gstFilteredData, customerDetailsUnit, setCustomerDetailsUnit) => {
  return (
    <>
      <div className={`${styles.wrapper} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#gstSupplierDetail"
          aria-expanded="true"
          aria-controls="gstSupplierDetail"
        >
          <h2 className="mb-0">Suppliers Details</h2>
          <div className="d-flex align-items-center">
            <h5 className={`${styles.light} accordion_Text`}>Unit :</h5>
            <select onChange={(e) => setCustomerDetailsUnit(e.target.value)} className={`${styles.selectHead} accordion_DropDown form-select`} aria-label="Default select example">
              <option selected value="10000000">Crores</option>
            </select>
            <span>+</span>
          </div>
        </div>
        <div
          id="gstSupplierDetail"
          className="collapse"
          aria-labelledby="gstSupplierDetail"
          data-parent="#gstSupplierDetail"
        >
          <div className={` ${styles.CustomercardBody} card-body border-top-0 border_color`}>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table1}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr>
                        <th className={`${styles.first}`} colSpan={6}>Recurring Party Sales In Last 12 Months</th>
                      </tr>
                      <tr className={styles.second_head}>
                        <td>CUSTOMER NAME</td>
                        <td>PAN</td>
                        <td>SALES</td>
                        <td>% OF TOTAL SALES</td>
                        <td>OF INVOICES</td>
                        <td>SALES PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData && gstFilteredData?.detail?.supplierDetail?.recurringPartyPurchase?.map((customer, index) => (
                          <tr key={index}>
                            <td>{customer?.name}</td>
                            <td>{customer?.pan}</td>
                            <td>{(customer?.ttlVal / customerDetailsUnit).toFixed(2)}</td>
                            <td>{customer?.percentageOfTotalPurchase}%</td>
                            <td>{customer?.invoice}</td>
                            <td>{customer?.purchasePerInvoice}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table1}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr>
                        <th className={`${styles.first}`} colSpan={6}>Related Party Sales In Last 12 Monthss</th>
                      </tr>
                      <tr className={styles.second_head}>
                        <td>CUSTOMER NAME</td>
                        <td>PAN</td>
                        <td>SALES</td>
                        <td>% OF TOTAL SALES</td>
                        <td>OF INVOICES</td>
                        <td>SALES PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData && gstFilteredData?.detail?.supplierDetail?.relatedPartyPurchase?.map((customer, index) => (
                          <tr key={index}>
                            <td>{customer?.name}</td>
                            <td>{customer?.pan}</td>
                            <td>{customer?.ttlVal}</td>
                            <td>{customer?.percentageOfTotalPurchase}%</td>
                            <td>{customer?.invoice}</td>
                            <td>{customer?.purchasePerInvoice}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body} ${styles.body_noscroll}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table1}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr>
                        <th className={`${styles.first}`} colSpan={6}>Top 10 Customers</th>
                      </tr>
                      <tr className={styles.second_head}>
                        <td>CUSTOMER NAME</td>
                        <td>PAN</td>
                        <td>SALES</td>
                        <td>% OF TOTAL SALES</td>
                        <td>OF INVOICES</td>
                        <td>SALES PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData && gstFilteredData?.detail?.supplierDetail?.top10Suppliers?.map((customer, index) => (
                          <tr key={index}>
                            <td>{customer?.name}</td>
                            <td>{customer?.pan}</td>
                            <td>{customer?.ttlVal}</td>
                            <td>{customer?.percentageOfTotalPurchase}%</td>
                            <td>{customer?.invoice}</td>
                            <td>{customer?.purchasePerInvoice}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div
                className={` ${styles.body} ${styles.body_noscroll} border_color`}
              >
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table1}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr>
                        <th className={`${styles.first}`} colSpan={6}>Statewise Sales</th>
                      </tr>
                      <tr className={styles.second_head}>
                        <td>STATE</td>
                        <td>STATE CODE</td>
                        <td>SALES</td>
                        <td>% OF TOTAL SALES</td>
                        <td>OF INVOICES</td>
                        <td>SALES PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData && gstFilteredData?.detail?.supplierDetail?.statewisePurchase?.map((customer, index) => (
                          <tr key={index}>
                            <td>{customer?.stateName}</td>
                            <td>{customer?.stateCode}</td>
                            <td>{customer?.ttlVal}</td>
                            <td>{customer?.percentageOfTotalPurchase}%</td>
                            <td>{customer?.invoice}</td>
                            <td>{customer?.purchasePerInvoice}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const gstSales = (head, gstFilteredData) => {
  return (
    <>
      <div className={`${styles.wrapper} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#gstSalesAndPurchase"
          aria-expanded="true"
          aria-controls="gstSalesAndPurchase"
        >
          <h2 className="mb-0">{head}</h2>
          <div className="d-flex align-items-center">
            <h5 className={`${styles.light} accordion_Text`}>Unit :</h5>
            <select className={`${styles.selectHead} accordion_DropDown form-select`} aria-label="Default select example">
              <option selected value="1">Crores</option>
            </select>
            <span>+</span>
          </div>
        </div>
        <div
          id="gstSalesAndPurchase"
          className="collapse"
          aria-labelledby="gstSalesAndPurchase"
          data-parent="#profileAccordion"
        >
          <div className={` ${styles.CustomercardBody} card-body border-top-0 border_color`}>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr>
                        <th className={`${styles.first}`} colSpan={13}>Financial Period 2020- 2021</th>
                      </tr>
                      <tr className={styles.second_head}>
                        <td>REVENUE BREAKUP</td>

                        {gstFilteredData?.detail?.salesDeatail?.revenueBreakup.map((month, index) => (
                          <td key={index}>{moment(month.retPeriod, 'MMYYYY').format('MMM"YY')}</td>
                        ))}


                      </tr>
                      <tbody>
                        <tr>
                          <td>Total Sales</td>
                          {gstFilteredData?.detail?.salesDeatail?.revenueBreakup.map((sales, index) => (
                            <td key={index}>{sales?.totalSales}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>B2B Sales</td>
                          {gstFilteredData?.detail?.salesDeatail?.revenueBreakup.map((sales, index) => (
                            <td key={index}>{sales?.b2bSales}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>B2C Sales</td>
                          {gstFilteredData?.detail?.salesDeatail?.revenueBreakup.map((sales, index) => (
                            <td key={index}>{sales?.b2cSales}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>Export Sales</td>
                          {gstFilteredData?.detail?.salesDeatail?.revenueBreakup.map((sales, index) => (
                            <td key={index}>{sales?.exportSales}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>Growth Trend</td>
                          {gstFilteredData?.detail?.salesDeatail?.revenueBreakup.map((sales, index) => (
                            <td key={index}>{sales?.growthTrend}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr className={styles.second_head}>
                        <td>REVENUE %</td>
                        {gstFilteredData?.detail?.salesDeatail?.revenuePercentage.map((month, index) => (
                          <td key={index}>{moment(month.retPeriod, 'MMYYYY').format('MMM"YY')}</td>
                        ))}
                      </tr>
                      <tbody>
                        <tr>
                          <td>New Customers</td>
                          {gstFilteredData?.detail?.salesDeatail?.revenuePercentage.map((sales, index) => (
                            <td key={index}>{sales?.newCustomer}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>Recurring Customers</td>
                          {gstFilteredData?.detail?.salesDeatail?.revenuePercentage.map((sales, index) => (
                            <td key={index}>{sales?.RecurringCustomer}</td>
                          ))}
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr className={styles.second_head}>
                        <td>CLIENTS</td>
                        {gstFilteredData?.detail?.salesDeatail?.clients.map((month, index) => (
                          <td key={index}>{moment(month.retPeriod, 'MMYYYY').format('MMM"YY')}</td>
                        ))}
                      </tr>
                      <tbody>
                        <tr>
                          <td>New</td>
                          {gstFilteredData?.detail?.salesDeatail?.clients.map((sales, index) => (
                            <td key={index}>{sales?.new}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>Recurring</td>
                          {gstFilteredData?.detail?.salesDeatail?.clients.map((sales, index) => (
                            <td key={index}>{sales?.Recurring}</td>
                          ))}
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr className={styles.second_head}>
                        <td>NO. OF INVOICES</td>
                        {gstFilteredData?.detail?.salesDeatail?.numberOfInvoices.map((month, index) => (
                          <td key={index}>{moment(month.retPeriod, 'MMYYYY').format('MMM"YY')}</td>
                        ))}
                      </tr>
                      <tbody>
                        <tr>
                          <td>Total</td>
                          {gstFilteredData?.detail?.salesDeatail?.numberOfInvoices.map((sales, index) => (
                            <td key={index}>{sales?.total}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>B2B</td>
                          {gstFilteredData?.detail?.salesDeatail?.numberOfInvoices.map((sales, index) => (
                            <td key={index}>{sales?.b2b}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>B2C</td>
                          {gstFilteredData?.detail?.salesDeatail?.numberOfInvoices.map((sales, index) => (
                            <td key={index}>{sales?.b2c}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>Export</td>
                          {gstFilteredData?.detail?.salesDeatail?.numberOfInvoices.map((sales, index) => (
                            <td key={index}>{sales?.export}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const gstPurchase = (head, gstFilteredData) => {
  return (
    <>
      <div className={`${styles.wrapper} ${styles.lastComponent} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#purchase"
          aria-expanded="true"
          aria-controls="purchase"
        >
          <h2 className="mb-0">{head}</h2>
          <div className="d-flex align-items-center">
            <h5 className={`${styles.light} accordion_Text`}>Unit :</h5>
            <select className={`${styles.selectHead} accordion_DropDown form-select`} aria-label="Default select example">
              <option selected value="1">Crores</option>
            </select>
            <span>+</span>
          </div>
        </div>
        <div
          id="purchase"
          className="collapse"
          aria-labelledby="purchase"
          data-parent="#profileAccordion"
        >
          <div className={` ${styles.CustomercardBody} card-body border-top-0 border_color`}>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr>
                        <th className={`${styles.first}`} colSpan={13}>Financial Period 2020- 2021</th>
                      </tr>
                      <tr className={styles.second_head}>
                        <td>PURCHASES</td>
                        {gstFilteredData?.detail?.purchaseDetail?.purchases?.map((month, index) => (
                          <td key={index}>{moment(month.retPeriod, 'MMYYYY').format('MMM"YY')}</td>
                        ))}
                      </tr>
                      <tbody>
                        <tr>
                          <td>Total Purchase</td>
                          {gstFilteredData?.detail?.purchaseDetail?.purchases.map((sales, index) => (
                            <td key={index}>{sales?.totalPurchase}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>B2B Purchase</td>
                          {gstFilteredData?.detail?.purchaseDetail?.purchases.map((sales, index) => (
                            <td key={index}>{sales?.b2b}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>B2C Purchase</td>
                          {gstFilteredData?.detail?.purchaseDetail?.purchases.map((sales, index) => (
                            <td key={index}>{sales?.b2c}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>Import</td>
                          {gstFilteredData?.detail?.purchaseDetail?.purchases.map((sales, index) => (
                            <td key={index}>{sales?.import}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>Growth Trend</td>
                          {gstFilteredData?.detail?.purchaseDetail?.purchases.map((sales, index) => (
                            <td key={index}>{sales?.growthTrend}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr className={styles.second_head}>
                        <td>PURCHASE %</td>
                        {gstFilteredData?.detail?.purchaseDetail?.purchasesPercentage?.map((month, index) => (
                          <td key={index}>{moment(month.retPeriod, 'MMYYYY').format('MMM"YY')}</td>
                        ))}
                      </tr>
                      <tbody>
                        <tr>
                          <td>New Suppliers</td>
                          {gstFilteredData?.detail?.purchaseDetail?.purchasesPercentage?.map((sales, index) => (
                            <td key={index}>{sales?.newSuppliers}</td>
                          ))}
                        </tr>
                        <tr>
                          {gstFilteredData?.detail?.purchaseDetail?.purchasesPercentage?.map((sales, index) => (
                            <td key={index}>{sales?.recurringSuppliers}</td>
                          ))}
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr className={styles.second_head}>
                        {gstFilteredData?.detail?.purchaseDetail?.suppliers?.map((month, index) => (
                          <td key={index}>{moment(month.retPeriod, 'MMYYYY').format('MMM"YY')}</td>
                        ))}
                      </tr>
                      <tbody>
                        <tr>
                          <td>New</td>
                          {gstFilteredData?.detail?.purchaseDetail?.suppliers?.map((sales, index) => (
                            <td key={index}>{sales?.new}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>Recurring</td>
                          {gstFilteredData?.detail?.purchaseDetail?.suppliers?.map((sales, index) => (
                            <td key={index}>{sales?.recurring}</td>
                          ))}
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr className={styles.second_head}>
                        <td>NO. OF INVOICES</td>
                        {gstFilteredData?.detail?.purchaseDetail?.numberOfInvoices?.map((month, index) => (
                          <td key={index}>{moment(month.retPeriod, 'MMYYYY').format('MMM"YY')}</td>
                        ))}
                      </tr>
                      <tbody>
                        <tr>
                          <td>Total</td>
                          {gstFilteredData?.detail?.purchaseDetail?.numberOfInvoices?.map((sales, index) => (
                            <td key={index}>{sales?.total}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>B2B</td>
                          {gstFilteredData?.detail?.purchaseDetail?.numberOfInvoices?.map((sales, index) => (
                            <td key={index}>{sales?.b2b}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>B2C</td>
                          {gstFilteredData?.detail?.purchaseDetail?.numberOfInvoices?.map((sales, index) => (
                            <td key={index}>{sales?.b2c}</td>
                          ))}
                        </tr>
                        <tr>
                          <td>Import</td>
                          {gstFilteredData?.detail?.purchaseDetail?.numberOfInvoices?.map((sales, index) => (
                            <td key={index}>{sales?.import}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
