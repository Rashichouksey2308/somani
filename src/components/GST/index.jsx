import React, { useRef, useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Row, Col } from 'react-bootstrap'
import { Line, Bar } from 'react-chartjs-2'
import Modal from 'react-bootstrap/Modal'
import moment from 'moment'
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  BarController,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'

// Redux
import { useDispatch } from 'react-redux'
import { VerifyGstKarza } from '../../redux/creditQueueUpdate/action'

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,

  CategoryScale,
  Filler,
  BarController,
  BarElement,
  Tooltip,
)
import { CovertvaluefromtoCR, convertValue, checkNan } from '../../utils/helper'
import _get from 'lodash/get'
// Chart.register(linear);
function Index({ companyData, orderList, GstDataHandler, alertObj }) {
  const dispatch = useDispatch()
  const GstData = companyData?.GST
  console.log(companyData, 'companyData')

  console.log(GstData, 'GSTDATA')
  const chartRef = useRef(null)
  const chartRef2 = useRef(null)
  const chartRef3 = useRef(null)
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  console.log(chartData, 'THIS IS CHART DATA')
  const [chartData2, setChartData2] = useState({
    datasets: [],
  })
  const [chartData3, setChartData3] = useState({
    datasets: [],
  })
  const [gstFilteredData, SetGstFilteredData] = useState(
    orderList?.company?.gstList,
  )
  console.log(gstFilteredData, 'gst filtered data')
  const [revenueProfile, setRevenueProfile] = useState(10000000)
  const [saleDetails, setSalesDetails] = useState(10000000)
  const [purchasesDetailsUnit, setPurchasesDetailsUnit] = useState(10000000)
  const [customerDetailsUnit, setCustomerDetailsUnit] = useState(10000000)
  const [supplierDetailsUnit, setSupplierDetailsUnit] = useState(10000000)
  const [salesUnit, setSalesUnit] = useState(10000000)
  const [purchasesUnit, setPurchasesUnit] = useState(10000000)

  const [isChartFilterMonthly, setIsChartFilterMonthly] = useState(true)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [credential, setCredential] = useState({
    username: '',
    password: '',
    gstin: '',
  })
  const [passwordShow, setPasswordShow] = useState(false)

  useEffect(() => {
    if (GstData?.length > 0) {
      setCredential({ ...credential, gstin: GstData[0].gstin })
      console.log('inside GSt UseEffetc')
      SetGstFilteredData({ ...GstData[0] })
      GstDataHandler(GstData[0])
    }

    // const filteredgstin = GstData?.filter((GstinData) => GstinData.gstin === _get(orderList, 'company.gstList[0]', ''))
    // // console.log(filteredgstin.length, 'filteredgstin')
    // if (filteredgstin?.length === 1) {
    //   filteredgstin?.map((gstData) => {
    //     const data = { ...gstData }
    //     SetGstFilteredData(data)
    //     GstDataHandler(data)
    //   })
    // } else {
    //   setCredential({ ...credential, gstin: _get(orderList, 'company.gstList[0]', '') })
    //   handleShow()
    // }

    // const arrayFiltered = GstData?.filter(
    //   (GstinData) => GstinData === credential.gstin,
    // )
    // GstData?.map((gstData) => {
    //   const data = { ...gstData }
    //   SetGstFilteredData(data)
    //   GstDataHandler(data)
    // })
  }, [GstData])
  // console.log(gstFilteredData, 'gstFilteredData')

  const gstinVerifyHandler = (e) => {
    const payload = {
      company: companyData?.company,
      gstin: credential.gstin,
      username: credential.username,
      password: credential.password,
    }
    //console.log(payload, 'payload')

    dispatch(VerifyGstKarza(payload))
    handleClose()
  }

  const handleChangeGstin = (e) => {
    const filteredgstin = GstData?.filter(
      (GstinData) => GstinData.gstin === e.target.value,
    )
    // console.log(filteredgstin.length, 'filteredgstin')
    if (filteredgstin?.length === 1) {
      filteredgstin?.map((gstData) => {
        const data = { ...gstData }
        SetGstFilteredData(data)
        GstDataHandler(data)
        setCredential({ ...credential, gstin: data.gstin })
      })
    } else {
      setCredential({ ...credential, gstin: e.target.value })
      handleShow()
    }
  }

  function createGradient(ctx, area, color, color2) {
    // const colorStart = faker.random.arrayElement(colors);
    // const colorMid = faker.random.arrayElement(
    //   colors.filter(color => color !== colorStart)
    // );
    // const colorEnd = faker.random.arrayElement(
    //   colors.filter(color => color !== colorStart && color !== colorMid)
    // );
    console.log('cts', color2, color)

    let gradient = ctx.createLinearGradient(0, 0, 0, 300)
    gradient.addColorStop(0, color2)
    gradient.addColorStop(1, color)

    console.log(gradient, 'gradient')
    return gradient
  }

  const covertMonths = (months) => {
    const CovertedMonts = []
    months?.map((month) => {
      let convertedMonths = []
      CovertedMonts.push(
        ...convertedMonths,
        moment(month, 'MMYYYY').format('MMM YY'),
      )
    })
    return CovertedMonts
  }

  const getdata = (data) => {
    let temArr = []
    if (data) {
      data.forEach((val, index) => {
        temArr.push(CovertvaluefromtoCR(val))
      })
      console.log(temArr, 'slaes')
      return temArr
    } else {
      return []
    }
  }

  const [arr, setArr] = useState([])

  const handleGrowthPurchase = () => {
    let arr1 = _get(gstFilteredData, 'detail.purchaseDetail.purchases', [])
    let arr2 = []
    for (let i = 1; i < arr1.length; i++) {
      let j =
        ((Number(arr1[i].totalPurchase) - Number(arr1[i - 1].totalPurchase)) /
          Number(arr1[i - 1].totalPurchase)) *
        100
      arr2.push(j)
    }
    setArr(arr2)
    // return arr
  }

  const [arrSales, setArrSales] = useState([])

  const handleGrowthSales = () => {
    let arr1 = _get(gstFilteredData, 'detail.salesDeatail.revenueBreakup', [])
    let arr2 = []

    for (let i = 1; i < arr1.length; i++) {
      let j =
        ((Number(arr1[i].totalSales) - Number(arr1[i - 1].totalSales)) /
          Number(arr1[i - 1].totalSales)) *
        100
      arr2.push(j)
    }
    setArrSales(arr2)
    // return arr
  }

  useEffect(() => {
    if (
      _get(gstFilteredData, 'detail.salesDeatail.revenueBreakup')?.length > 0
    ) {
      handleGrowthSales()
    }
    if (_get(gstFilteredData, 'detail.purchaseDetail.purchases')?.length > 0) {
      handleGrowthPurchase()
    }
  }, [gstFilteredData])

  const handleQuarterlyData = () => {
    const filteredData = (data) => {
      let arr = []
      if (!data || !data?.length) return arr
      for (let i = 2; i <= data.length - 1; i = i + 3) {
        arr.push(data[i])
      }
      return arr
    }

    const filteredData1 = (data) => {
      let arr = []
      if (!data || !data?.length) return arr
      for (let i = 2; i <= data.length - 1; i = i + 3) {
        let b = 0
        // for (let j = 0; j <= i; j++) {
        //   b = b + data[j]
        // }
        b = data[i] + data[i - 1] + data[i - 2]
        arr.push(b)
      }
      return arr
    }

    //  let v1 =  filteredData1([1, 2, 3, 4, 5, 6, 6, 6,7])
    //  let v3 =  filteredData1([1, 2, 3, 4, 500, 6, 6, 6,7, 9, 10])
    //   let v4 = filteredData1([1, 2, 3, 4, 5, 6, 6, 6,7, 100, 13242,6564])

    //   console.log(v1, v3, v4, 'LINES IN DATA')


    const newData = {
      labels: covertMonths(
        filteredData(
          gstFilteredData?.detail?.summaryCharts?.revenueSummary?.months,
        ),
      ),
      datasets: [
        {
          label: 'Total Sales',
          data: getdata(
            filteredData1(
              gstFilteredData?.detail?.summaryCharts?.revenueSummary
                ?.totalSales,
            ),
          ),
          // fill: true,

          // backgroundColor: color,
          borderColor: '#2979F2',
        },
        {
          label: 'thirdPartySales',
          data: getdata(
            filteredData1(
              gstFilteredData?.detail?.summaryCharts?.revenueSummary
                ?.thirdPartySales,
            ),
          ),
          // fill: true,

          // backgroundColor: color,
          borderColor: '#FA5F1C',
        },
        {
          label: 'relatedPartySales',
          data: getdata(
            filteredData1(
              gstFilteredData?.detail?.summaryCharts?.revenueSummary
                ?.relatedPartySales,
            ),
          ),
          // fill: true,

          // backgroundColor: color,
          borderColor: '#FFD950',
        },
        {
          label: 'intraOrgSales',
          data: getdata(
            filteredData1(
              gstFilteredData?.detail?.summaryCharts?.revenueSummary
                ?.intraOrgSales,
            ),
          ),
          // fill: true,

          // backgroundColor: color,
          borderColor: '#02BC77',
        },
      ],
    }

    const chart2 = chartRef2.current
    const chart3 = chartRef3.current

    const newData2 = {
      labels: covertMonths(
        filteredData(
          gstFilteredData?.detail?.summaryCharts?.netPurchaseVsSale?.month,
        ),
      ),
      datasets: [
        {
          label: 'Total Turnover',
          data: getdata(
            filteredData1(
              gstFilteredData?.detail?.summaryCharts?.netPurchaseVsSale?.sale,
            ),
          ),
          fill: true,
          backgroundColor: createGradient(
            chart2.ctx,
            chart2.chartArea,
            'rgb(71, 145, 255,0.1)',
            'rgb(71, 145, 255,0.2)',
          ),
          borderColor: 'rgb(71, 145, 255)',
        },
        {
          label: 'Net Purchase',
          data: getdata(
            filteredData1(
              gstFilteredData?.detail?.summaryCharts?.netPurchaseVsSale
                ?.purchase,
            ),
          ),

          fill: true,
          borderColor: 'rgb(250, 95, 28,1)',
          backgroundColor: createGradient(
            chart2.ctx,
            chart2.chartArea,
            'rgb(250, 95, 28,0.1)',
            'rgb(250, 95, 28,0.1)',
          ),
        },
      ],
    }

    const newData3 = {
      labels: covertMonths(
        filteredData(
          gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends?.months,
        ),
      ),
      datasets: [
        {
          label: 'No. of Customers',
          data: filteredData1(
            gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends
              ?.customers,
          ),

          fill: true,
          backgroundColor: createGradient(
            chart2.ctx,
            chart2.chartArea,
            'rgb(41, 121, 242,0.1)',
            'rgb(41, 121, 242,0.2)',
          ),
          borderColor: 'rgb(41, 121, 242,1)',
        },
        {
          label: 'No. of Invoices',
          data: filteredData1(
            gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends
              ?.invoices,
          ),
          fill: true,
          backgroundColor: createGradient(
            chart2.ctx,
            chart2.chartArea,
            'rgb(250, 95, 28,0.1)',
            'rgb(250, 95, 28,0.2)',
          ),
          borderColor: 'rgb(250, 95, 28,1)',
        },
      ],
    }

    setChartData(newData)
    setChartData2(newData2)
    setChartData3(newData3)
  }

  const handleMonthlyData = () => {
    const chart = chartRef.current
    const chart2 = chartRef2.current
    const chart3 = chartRef3.current
    console.log('here', chart.ctx)
    if (!chart) {
      return
    }

    // let color = createGradient(chart.ctx, chart.chartArea)

    const data = {
      labels: covertMonths(
        gstFilteredData?.detail?.summaryCharts?.revenueSummary?.months,
      ),
      datasets: [
        {
          label: [],
          data: getdata(
            gstFilteredData?.detail?.summaryCharts?.revenueSummary?.totalSales,
          ),
          // fill: true,

          // backgroundColor: color,
          borderColor: '#2979F2',
        },
        {
          label: [],
          data: getdata(
            gstFilteredData?.detail?.summaryCharts?.revenueSummary
              ?.thirdPartySales,
          ),
          // fill: true,

          // backgroundColor: color,
          borderColor: '#FA5F1C',
        },
        {
          label: [],
          data: getdata(
            gstFilteredData?.detail?.summaryCharts?.revenueSummary
              ?.relatedPartySales,
          ),
          // fill: true,

          // backgroundColor: color,
          borderColor: '#FFD950',
        },
        {
          label: [],

          data: getdata(
            gstFilteredData?.detail?.summaryCharts?.revenueSummary
              ?.intraOrgSales,
          ),
          // fill: true,

          // backgroundColor: color,
          borderColor: '#02BC77',
        },
      ],
    }
    if (!chart2) {
      return
    }

    const data2 = {
      labels: covertMonths(
        gstFilteredData?.detail?.summaryCharts?.netPurchaseVsSale?.month,
      ),
      datasets: [
        {
          data: getdata(
            gstFilteredData?.detail?.summaryCharts?.netPurchaseVsSale?.sale,
          ),
          fill: true,
          backgroundColor: createGradient(
            chart2.ctx,
            chart2.chartArea,
            'rgb(71, 145, 255,0.1)',
            'rgb(71, 145, 255,0.2)',
          ),
          borderColor: 'rgb(71, 145, 255)',
        },
        {
          data: getdata(
            gstFilteredData?.detail?.summaryCharts?.netPurchaseVsSale?.purchase,
          ),

          fill: true,
          borderColor: 'rgb(250, 95, 28,1)',
          backgroundColor: createGradient(
            chart2.ctx,
            chart2.chartArea,
            'rgb(250, 95, 28,0.1)',
            'rgb(250, 95, 28,0.1)',
          ),
        },
      ],
    }
    if (!chart3) {
      return
    }
    // let color3 = createGradient(chart3.ctx, chart3.chartArea)
    const data3 = {
      labels: covertMonths(
        gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends?.months,
      ),
      datasets: [
        {
          data: gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends
            ?.customers,

          fill: true,
          backgroundColor: createGradient(
            chart2.ctx,
            chart2.chartArea,
            'rgb(41, 121, 242,0.1)',
            'rgb(41, 121, 242,0.2)',
          ),
          borderColor: 'rgb(41, 121, 242,1)',
        },
        {
          data: gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends
            ?.invoices,
          fill: true,
          backgroundColor: createGradient(
            chart2.ctx,
            chart2.chartArea,
            'rgb(250, 95, 28,0.1)',
            'rgb(250, 95, 28,0.2)',
          ),
          borderColor: 'rgb(250, 95, 28,1)',
        },
        // {
        //   label: 'First dataset',
        //   data: getdata(
        //     gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends
        //       ?.avgMonthlySales,
        //   ),
        //   fill: true,
        //   backgroundColor: createGradient(
        //     chart2.ctx,
        //     chart2.chartArea,
        //     'rgb(67, 195, 77,0.0)',
        //     'rgb(67, 195, 77,0.0)',
        //   ),
        //   borderColor: 'rgb(67, 195, 77)',
        //   borderDash: [10, 5],
        // },
      ],
    }

    setChartData(data)
    setChartData2(data2)
    setChartData3(data3)
  }
  console.log(chartData, 'setChartData')
  useEffect(() => {
    const chart = chartRef.current
    const chart2 = chartRef2.current
    const chart3 = chartRef3.current
    console.log('here', chart.ctx)
    if (!chart) {
      return
    }

    // let color = createGradient(chart.ctx, chart.chartArea)

    const data = {
      labels: covertMonths(
        gstFilteredData?.detail?.summaryCharts?.revenueSummary?.months,
      ),
      datasets: [
        {
          label: ['Total Sales'],
          data: getdata(
            gstFilteredData?.detail?.summaryCharts?.revenueSummary?.totalSales,
          ),
          // fill: true,

          // backgroundColor: color,
          borderColor: '#2979F2',
        },
        {
          label: ['Third Party Sales'],
          data: getdata(
            gstFilteredData?.detail?.summaryCharts?.revenueSummary
              ?.thirdPartySales,
          ),
          // fill: true,

          // backgroundColor: color,
          borderColor: '#FA5F1C',
        },
        {
          label: ['Related Party Sales'],
          data: getdata(
            gstFilteredData?.detail?.summaryCharts?.revenueSummary
              ?.relatedPartySales,
          ),
          // fill: true,

          // backgroundColor: color,
          borderColor: '#FFD950',
        },
        {
          label: ['Intra Org Sales'],
          data: getdata(
            gstFilteredData?.detail?.summaryCharts?.revenueSummary
              ?.intraOrgSales,
          ),
          // fill: true,

          // backgroundColor: color,
          borderColor: '#02BC77',
        },
      ],
    }
    if (!chart2) {
      return
    }

    const data2 = {
      labels: covertMonths(
        gstFilteredData?.detail?.summaryCharts?.netPurchaseVsSale?.month,
      ),
      datasets: [
        {
          label: ['Net Turnover'],
          data: getdata(
            gstFilteredData?.detail?.summaryCharts?.netPurchaseVsSale?.sale,
          ),
          fill: true,
          backgroundColor: createGradient(
            chart2.ctx,
            chart2.chartArea,
            'rgb(71, 145, 255,0.1)',
            'rgb(71, 145, 255,0.2)',
          ),
          borderColor: 'rgb(71, 145, 255)',
        },
        {
          label: ['Net Purchases'],
          data: getdata(
            gstFilteredData?.detail?.summaryCharts?.netPurchaseVsSale?.purchase,
          ),

          fill: true,
          borderColor: 'rgb(250, 95, 28,1)',
          backgroundColor: createGradient(
            chart2.ctx,
            chart2.chartArea,
            'rgb(250, 95, 28,0.1)',
            'rgb(250, 95, 28,0.1)',
          ),
        },
      ],
    }
    if (!chart3) {
      return
    }
    // let color3 = createGradient(chart3.ctx, chart3.chartArea)
    const data3 = {
      labels: covertMonths(
        gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends?.months,
      ),
      datasets: [
        {
          label: ['No. of Customers'],
          data: gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends
            ?.customers,

          fill: true,
          backgroundColor: createGradient(
            chart2.ctx,
            chart2.chartArea,
            'rgb(41, 121, 242,0.1)',
            'rgb(41, 121, 242,0.2)',
          ),
          borderColor: 'rgb(41, 121, 242,1)',
        },
        {
          label: ['No. of Invoices'],
          data: gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends
            ?.invoices,
          fill: true,
          backgroundColor: createGradient(
            chart2.ctx,
            chart2.chartArea,
            'rgb(250, 95, 28,0.1)',
            'rgb(250, 95, 28,0.2)',
          ),
          borderColor: 'rgb(250, 95, 28,1)',
        },
        // {
        //   label: 'First dataset',
        //   data: getdata(
        //     gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends
        //       ?.avgMonthlySales,
        //   ),
        //   fill: true,
        //   backgroundColor: createGradient(
        //     chart2.ctx,
        //     chart2.chartArea,
        //     'rgb(67, 195, 77,0.0)',
        //     'rgb(67, 195, 77,0.0)',
        //   ),
        //   borderColor: 'rgb(67, 195, 77)',
        //   borderDash: [10, 5],
        // },
      ],
    }

    setChartData(data)
    setChartData2(data2)
    setChartData3(data3)
  }, [chartRef.current, chartRef2.current, chartRef3.current, gstFilteredData])

  // const getOrCreateTooltip = (chart) => {
  //   let tooltipEl = chart.canvas.parentNode.querySelector('div');

  //   if (!tooltipEl) {
  //     tooltipEl = document.createElement('div');
  //     tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
  //     tooltipEl.style.borderRadius = '3px';
  //     tooltipEl.style.color = 'white';
  //     tooltipEl.style.opacity = 1;
  //     tooltipEl.style.pointerEvents = 'none';
  //     tooltipEl.style.position = 'absolute';
  //     tooltipEl.style.transform = 'translate(-50%, 0)';
  //     tooltipEl.style.transition = 'all .1s ease';

  //     const table = document.createElement('table');
  //     table.style.margin = '0px';

  //     tooltipEl.appendChild(table);
  //     chart.canvas.parentNode.appendChild(tooltipEl);
  //   }

  //   return tooltipEl;
  // };

  // const externalTooltipHandler = (context) => {
  //   // Tooltip Element
  //   const { chart, tooltip } = context;
  //   const tooltipEl = getOrCreateTooltip(chart);

  //   // Hide if no tooltip
  //   if (tooltip.opacity === 0) {
  //     tooltipEl.style.opacity = 0;
  //     return;
  //   }

  //   // Set Text
  //   if (tooltip.body) {
  //     const titleLines = tooltip.title || [];
  //     const bodyLines = tooltip.body.map(b => b.lines);

  //     const tableHead = document.createElement('thead');

  //     titleLines.forEach(title => {
  //       const tr = document.createElement('tr');
  //       tr.style.borderWidth = 0;

  //       const th = document.createElement('th');
  //       th.style.borderWidth = 0;
  //       const text = document.createTextNode(title);

  //       th.appendChild(text);
  //       tr.appendChild(th);
  //       tableHead.appendChild(tr);
  //     });

  //     const tableBody = document.createElement('tbody');
  //     bodyLines.forEach((body, i) => {
  //       const colors = tooltip.labelColors[i];

  //       const span = document.createElement('span');
  //       span.style.background = colors.backgroundColor;
  //       span.style.borderColor = colors.borderColor;
  //       span.style.borderWidth = '2px';
  //       span.style.marginRight = '10px';
  //       span.style.height = '10px';
  //       span.style.width = '10px';
  //       span.style.display = 'inline-block';

  //       const tr = document.createElement('tr');
  //       tr.style.backgroundColor = 'inherit';
  //       tr.style.borderWidth = 0;

  //       const td = document.createElement('td');
  //       td.style.borderWidth = 0;

  //       const text = document.createTextNode(body);

  //       td.appendChild(span);
  //       td.appendChild(text);
  //       tr.appendChild(td);
  //       tableBody.appendChild(tr);
  //     });

  //     const tableRoot = tooltipEl.querySelector('table');

  //     // Remove old children
  //     while (tableRoot.firstChild) {
  //       tableRoot.firstChild.remove();
  //     }

  //     // Add new children
  //     tableRoot.appendChild(tableHead);
  //     tableRoot.appendChild(tableBody);
  //   }

  //   const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  //   // Display, position, and set styles for font
  //   tooltipEl.style.opacity = 1;
  //   tooltipEl.style.left = positionX + tooltip.caretX + 'px';
  //   tooltipEl.style.top = positionY + tooltip.caretY + 'px';
  //   tooltipEl.style.font = tooltip.options.bodyFont.string;
  //   tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
  // };

  const DATA_COUNT = 7
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100, decimals: 0 }

  const lineOption = {
    tension: 0.2,

    // fill: true,

    scales: {
      x: {
        grid: {
          color: '#ff000000',
          borderColor: '#ff000000',
          tickColor: '#ff000000',
        },
      },
      y: {
        grid: {
          borderColor: '#ff000000',
          tickColor: '#ff000000',
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }
  const lineOption2 = {
    tension: 0.2,

    fill: true,

    scales: {
      x: {
        grid: {
          color: '#ff000000',
          borderColor: '#ff000000',
          tickColor: '#ff000000',
        },
      },
      y: {
        grid: {
          borderColor: '#ff000000',
          tickColor: '#ff000000',
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }
  let turOverdataAndPurchases = {
    labels: covertMonths(
      gstFilteredData?.detail?.summaryCharts?.grossPurchaseVsSale?.month,
    ),
    datasets: [
      {
        label: 'First dataset',
        data: gstFilteredData?.detail?.summaryCharts?.grossPurchaseVsSale?.sale,
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'First dataset',
        data: gstFilteredData?.detail?.summaryCharts?.grossPurchaseVsSale
          ?.purchase,
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  }
  let data = {
    labels: gstFilteredData?.detail?.summaryCharts?.top10Cus?.names,
    datasets: [
      {
        label: '',
        data: [33, 53, 85, 41, 44, 120],
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  }

  let top10Customers = {
    labels: gstFilteredData?.detail?.summaryCharts?.top10Cus?.names,
    datasets: [
      {
        label: '',
        data: getdata(gstFilteredData?.detail?.summaryCharts?.top10Cus?.values),
        fill: true,
        backgroundColor: '#4791FF',
        borderColor: '#4791FF',
        maxBarThickness: 50,
      },
    ],
  }
  const [top10Supplier, settop10Supplier] = useState({
    labels: [],
    datasets: [],
  })
  // const getArray=(value)=>{
  //   let tempArr=[]
  //   // value.forEach((val,index)=>{

  //   // })
  //   for(let i=0;i<value.length;i++){
  //     let toCheck
  //     const result = value[i].trim().split(/\s+/)
  //     for(let j=0;j<result.length;j++){

  //     if(j<result.length){
  //         toCheck = result[i]+" "+ result[i+1]
  //         if(toCheck.length>8){

  //         }
  //     }else{
  //         toCheck = result[i]
  //     }
  //     }
  //     console.log(toCheck,"toCheck")
  //     // tempArr.push(toCheck[i])
  //   }
  //   // let arr=[]
  //   // while(i<tempArr.length)
  //   // {
  //   //    if(tempArr[i].length<8){
  //   //      let text= tempArr[i] + tempArr[i+1]
  //   //      console.log(text,"text")
  //   //      i++
  //   //   }
  //   // }
  //   // for(let i=0;i<tempArr.length;i++){
  //   //   if(tempArr[i].length<8){
  //   //      let text= tempArr[i] + tempArr[i]
  //   //   }
  //   // }
  //   return tempArr

  // }
  useEffect(() => {
    if (
      gstFilteredData?.detail?.summaryCharts?.top10Suppliers?.names.length > 0
    ) {
      settop10Supplier({
        labels: gstFilteredData?.detail?.summaryCharts?.top10Suppliers?.names,
        datasets: [
          {
            data: getdata(
              gstFilteredData?.detail?.summaryCharts?.top10Suppliers?.values,
            ),
            fill: true,
            backgroundColor: '#4791FF',
            borderColor: '#4791FF',
            maxBarThickness: 50,
            clip: false,
          },
        ],
      })
    }
  }, [gstFilteredData])

  console.log(top10Supplier, 'top10Customers')

  let stateWiseSales = {
    labels: gstFilteredData?.detail?.summaryCharts?.statewiseSales?.names,
    datasets: [
      {
        data: getdata(
          gstFilteredData?.detail?.summaryCharts?.statewiseSales?.values,
        ),
        fill: true,
        backgroundColor: '#FA5F1C',
        borderColor: '#FA5F1C',
        maxBarThickness: 50,
      },
    ],
  }
  const barOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: '#ff000000',
          borderColor: '#ff000000',
          tickColor: '#ff000000',
        },
        ticks: {
          callback: function (t) {
            console.log(t, 'asasdasdasd')
            let a =
              gstFilteredData?.detail?.summaryCharts?.top10Suppliers?.names[t]
            var maxLabelLength = 8
            if (a.length > maxLabelLength)
              return a.substr(0, maxLabelLength) + '...'
            else return t
          },
        },
      },
      y: {
        grid: {
          borderColor: '#ff000000',
          tickColor: '#ff000000',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }
  const barOptions3 = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: '#ff000000',
          borderColor: '#ff000000',
          tickColor: '#ff000000',
        },
        ticks: {
          callback: function (t) {
            console.log(t, 'asasdasdasd')
            let a = gstFilteredData?.detail?.summaryCharts?.top10Cus?.names[t]
            var maxLabelLength = 8
            if (a.length > maxLabelLength)
              return a.substr(0, maxLabelLength) + '...'
            else return t
          },
        },
      },
      y: {
        grid: {
          borderColor: '#ff000000',
          tickColor: '#ff000000',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }
  const barOptions2 = {
    scales: {
      x: {
        grid: {
          color: '#ff000000',
          borderColor: '#ff000000',
          tickColor: '#ff000000',
        },
      },
      y: {
        grid: {
          borderColor: '#ff000000',
          tickColor: '#ff000000',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  let averageRate = {
    labels: covertMonths(
      gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends?.months,
    ),
    datasets: [
      {
        label: 'First dataset',
        data: gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends
          ?.customers,
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'First dataset',
        data: gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends
          ?.invoices,
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'First dataset',
        data: gstFilteredData?.detail?.summaryCharts?.averageMonthlyTrends
          ?.avgMonthlySales,
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  }

  const finacialYear = (current) => {
    let currentperiod = gstFilteredData?.detail?.other?.period?.current?.financialPeriod
      ? gstFilteredData?.detail?.other?.period?.current?.financialPeriod
      : gstFilteredData?.detail?.other?.period?.current?.financialYear

    let previousPeriod = gstFilteredData?.detail?.other?.period?.previous
      ?.financialPeriod
      ? gstFilteredData?.detail?.other?.period?.previous?.financialPeriod
      : gstFilteredData?.detail?.other?.period?.previous?.financialYear
    let financialYear = ''
    if (current) {
      let [startYear, endYear] = (currentperiod ? currentperiod : '-').split('-')
      console.log(endYear,startYear,'startYear')

      financialYear = `${startYear !== '' ? moment(startYear, 'MMYYYY')
        .format('MMM YYYY')
        ?.toUpperCase() : ''
        } - ${endYear !== '' ?
          moment(endYear, 'MMYYYY')
            .format('MMM YYYY')
            ?.toUpperCase()
          : ''} `

      return financialYear
    } else {
      let [startYear, endYear] = (previousPeriod ? previousPeriod : '-').split(
        '-',
      )

      financialYear = `${startYear !== '' ? moment(startYear, 'MMYYYY')
        .format('MMM YYYY')
        ?.toUpperCase() : ''
        } - ${endYear !== '' ?
          moment(endYear, 'MMYYYY')
            .format('MMM YYYY')
            ?.toUpperCase()
          : ''} `

      return financialYear
    }
    // return financialYear

    // let finacialYear = `MAR ${ startYear ? startYear : '' } - APR ${
    endYear ? endYear : ''
    // }`
  }
  console.log(
    (
      _get(
        gstFilteredData,
        'detail.salesDetailAnnual.saleSummary.quaterlyGrowthRate.current.value',
        0,
      ) * 100
    )?.toLocaleString('en-IN', { minimumFractionDigits: 2 }),
    'busis',
  )

  const getCompliencePeriod = (period, chart) => {
    console.log(period, 'period', chart)
    let item = (period ? period : '')?.split('-')
    let text = `${moment(item[0], 'MMYYYY')
      .format('MMM YYYY')
      ?.toUpperCase()}-${moment(item[1], 'MMYYYY')
        .format('MMM YYYY')
        ?.toUpperCase()}`

    if (chart) {
      text = `${moment(item[0], 'MMYYYY').format('MM-YYYY')} to ${moment(
        item[1],
        'MMYYYY',
      ).format('MM-YYYY')}`
    }
    if (!period) {
      text = ''
    }
    return text
  }
  console.log(
    getCompliencePeriod(
      gstFilteredData?.detail?.complianceDetail?.financialPeriod,
    ),
    'jdhgvdfghkzjdshfiugdsfjh',
  )
  return (
    <>
      <div className={`${styles.wrapper} card border_color border-bottom`}>
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
          // className="collapse"
          aria-labelledby="litigations"
          data-parent="#profileAccordion"
        >
          <div className={` ${styles.cardBody} card-body  border_color`}>
            <div className={` ${styles.content}`}>
              <div
                className={` ${styles.header}  card_sub_header border-top-0  d-flex align-items-center justify-content-between`}
              >
                <span className="text-color">Business Profile</span>
                <span
                  className={` d-flex align-items-center justify-content-between`}
                >
                  <span className={`${styles.light} accordion_Text`}>
                    GST :
                  </span>
                  <select
                    value={credential.gstin}
                    className={`${styles.gst_list} input`}
                    onChange={(e) => handleChangeGstin(e)}
                  >
                    <option value="" disabled>
                      Select an Option
                    </option>
                    {orderList?.company?.gstList?.map((gstin, index) => (
                      <option key={index} value={gstin}>
                        {gstin}
                      </option>
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
                      {_get(
                        gstFilteredData,
                        'detail.summaryInformation.businessProfile.businessActivity',
                        [],
                      )?.join(', ')}
                      {/* {_get(
                        gstFilteredData,
                        'detail.summaryInformation.businessProfile.businessActivity[0]',
                        '',
                      )} */}
                    </div>
                  </Col>
                  <Col md={3} sm={12}>
                    <div className={`${styles.col_header} label_heading`}>
                      Date of Registration
                    </div>
                    <div className={styles.col_body}>
                      {gstFilteredData?.detail?.summaryInformation
                        ?.businessProfile?.rgdt
                        ? moment(
                          gstFilteredData?.detail?.summaryInformation
                            ?.businessProfile?.rgdt,
                          'DD-MM-YYYY',
                        ).format('DD-MM-YYYY')
                        : ''}
                    </div>
                  </Col>
                  <Col md={3} sm={12}>
                    <div className={`${styles.col_header} label_heading`}>
                      State of Registration
                    </div>
                    <div className={styles.col_body}>
                      {
                        gstFilteredData?.detail?.summaryInformation
                          ?.businessProfile?.stj
                      }
                    </div>
                  </Col>
                  <Col md={3} sm={12}>
                    <div className={`${styles.col_header} label_heading`}>
                      Email ID
                    </div>
                    <div className={styles.col_body}>
                      {
                        gstFilteredData?.detail?.summaryInformation
                          ?.businessProfile?.email
                      }
                    </div>
                  </Col>
                  <Col md={3} sm={12}>
                    <div className={`${styles.col_header} label_heading`}>
                      Contact Details
                    </div>
                    <div className={styles.col_body}>
                      +91{' '}
                      {
                        gstFilteredData?.detail?.summaryInformation
                          ?.businessProfile?.mobNum
                      }
                    </div>
                  </Col>
                  <Col md={3} sm={12}>
                    <div className={`${styles.col_header} label_heading`}>
                      Compliance Status
                    </div>
                    <div className={styles.col_body}>
                      {
                        gstFilteredData?.detail?.summaryInformation
                          ?.businessProfile?.complianceStatus
                      }
                    </div>
                  </Col>
                  <Col md={3} sm={12}>
                    <div className={`${styles.col_header} label_heading`}>
                      Latest Return Filed GSTR 1
                    </div>
                    <div className={styles.col_body}>
                      {gstFilteredData?.detail?.summaryInformation
                        ?.businessProfile?.lastReturnFiledgstr1
                        ? `${gstFilteredData?.detail?.summaryInformation?.businessProfile?.lastReturnFiledgstr1?.slice(
                          0,
                          2,
                        )}-${gstFilteredData?.detail?.summaryInformation?.businessProfile?.lastReturnFiledgstr1?.slice(
                          2,
                        )}`
                        : ''}
                    </div>
                  </Col>
                  <Col md={3} sm={12}>
                    <div className={`${styles.col_header} label_heading`}>
                      Latest Return Filed GSTR 3B
                    </div>
                    <div className={styles.col_body}>
                      {gstFilteredData?.detail?.summaryInformation
                        ?.businessProfile?.lastReturnFiledgstr3b
                        ? `${gstFilteredData?.detail?.summaryInformation?.businessProfile?.lastReturnFiledgstr3b?.slice(
                          0,
                          2,
                        )}-${gstFilteredData?.detail?.summaryInformation?.businessProfile?.lastReturnFiledgstr3b?.slice(
                          2,
                        )}`
                        : ''}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div
                className={` ${styles.header} card_sub_header d-flex align-items-center justify-content-between`}
              >
                <span className="text-color">Alerts Indentified</span>
              </div>
              <div className={` ${styles.body}`}>
                <Row className={` ${styles.row}`}>
                  {gstFilteredData?.detail?.summaryInformation?.alertsIdentified.map(
                    (alert, index) => {
                      if (alert.severity === 'severe') {
                        return (
                          <>
                            <Col md={2} sm={12}>
                              <div
                                className={`${styles.gst_cancelled} d-flex align-items-center justify-content-start`}
                              >
                                <div
                                  className={styles.dot}
                                  // style={{ backgroundColor: '#3F66EA' }}
                                  style={{ backgroundColor: '#e31e10' }}
                                ></div>
                                <span>
                                  {alertObj[alert.alert] ?? alert.alert}
                                </span>
                              </div>
                            </Col>
                          </>
                        )
                      }
                    },
                  )}
                </Row>
                <Row className={` ${styles.row}`}>
                  {gstFilteredData?.detail?.summaryInformation?.alertsIdentified.map(
                    (alert, index) => {
                      if (alert.severity === 'high') {
                        return (
                          <>
                            <Col md={3} sm={12}>
                              <div
                                className={`${styles.gst_cancelled} gst_profile_alerts d-flex align-items-center justify-content-start`}
                              >
                                <div
                                  className={styles.dot}
                                  style={{ backgroundColor: '#e31e10' }}
                                // style={{ backgroundColor: '#28BE39' }}
                                ></div>
                                <span>
                                  {alertObj[alert.alert] ?? alert.alert}
                                </span>
                              </div>
                            </Col>
                          </>
                        )
                      }
                    },
                  )}

                  {gstFilteredData?.detail?.summaryInformation?.alertsIdentified.map(
                    (alert, index) => {
                      if (alert.severity === 'medium') {
                        return (
                          <>
                            <Col md={3} sm={12}>
                              <div
                                className={`${styles.gst_cancelled} gst_profile_alerts  d-flex align-items-center justify-content-start`}
                              >
                                <div
                                  className={styles.dot}
                                  style={{ backgroundColor: '#e31e10' }}
                                ></div>
                                <span>
                                  {alertObj[alert.alert] ?? alert.alert}
                                </span>
                              </div>
                            </Col>
                          </>
                        )
                      }
                    },
                  )}

                  {gstFilteredData?.detail?.summaryInformation?.alertsIdentified.map(
                    (alert, index) => {
                      if (alert.severity === 'low') {
                        return (
                          <>
                            <Col md={3} sm={12}>
                              <div
                                className={`${styles.gst_cancelled} gst_profile_alerts  d-flex align-items-center justify-content-start`}
                              >
                                <div
                                  className={styles.dot}
                                  style={{ backgroundColor: '#e31e10' }}
                                ></div>
                                <span>
                                  {alertObj[alert.alert] ?? alert.alert}
                                </span>
                              </div>
                            </Col>
                          </>
                        )
                      }
                    },
                  )}
                  <Col md={3} sm={12}>
                    {/* <div className={`${styles.gst_cancelled}  gst_profile_alerts  d-flex align-items-center justify-content-start`}>
                      <div
                        className={styles.dot}
                        style={{ backgroundColor: '#CBC5C5' }}
                      ></div>
                      <span>GST Inactive</span>
                    </div> */}
                  </Col>
                </Row>
              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div
                className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-between`}
              >
                <span className="text-color">Key Managerial Persons</span>
              </div>
              <div className={` ${styles.body}`}>
                <Row>
                  {gstFilteredData?.detail?.summaryInformation?.keyManagerialPerson?.map(
                    (keyPerson, index) => (
                      <Col
                        key={index}
                        md={3}
                        sm={12}
                        className={`  d-flex align-items-center justify-content-between`}
                      >
                        <span>- {keyPerson}</span>
                      </Col>
                    ),
                  )}
                </Row>
                <Row></Row>
              </div>
            </div>

            <div className={` ${styles.content} `}>
              <div
                className={` ${styles.header}  card_sub_header   d-flex align-items-center justify-content-between`}
              >
                <span className="text-color">Revenue Profile</span>
                <span
                  className={` d-flex align-items-center justify-content-between `}
                >
                  <span className={`${styles.light} accordion_Text`}>
                    Unit :
                  </span>
                  <div className="d-flex align-items-center position-relative">
                    <select
                      onChange={(e) => setRevenueProfile(e.target.value)}
                      className={`${styles.select} ${styles.customSelect} accordion_DropDown form-select`}
                      aria-label="Default select example"
                    >
                      <option selected value={10000000}>
                        Crores
                      </option>
                      <option value={100000}>Lakhs</option>
                    </select>
                    <img
                      className={`${styles.arrow2} img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="arrow"
                    />
                  </div>
                </span>
              </div>
              <div className={` ${styles.body}`}>
                <Row>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Gross Turnover
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {/* {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.grossTurnover?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.summaryInformation
                          ?.revenueProfile?.grossTurnover,
                        revenueProfile,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Gross Purchases
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {/* {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.grossPurchases?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}

                      {convertValue(
                        gstFilteredData?.detail?.summaryInformation
                          ?.revenueProfile?.grossPurchases,
                        revenueProfile,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Gross Margins %
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {checkNan(
                        (
                          gstFilteredData?.detail?.summaryInformation
                            ?.revenueProfile?.grossMargin * 100
                        )?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }),
                      )}
                      %
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Total clients
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.ttlCustomer?.toLocaleString(
                        'en-In',
                        { maximumFractionDigits: 0 },
                      )}
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Total Invoices
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.ttlInv?.toLocaleString(
                        'en-In',
                        { maximumFractionDigits: 0 },
                      )}
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Intra Organisation Sales %
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {checkNan(
                        gstFilteredData?.detail?.summaryInformation
                          ?.revenueProfile?.intraOrgSalesPercent * 100,
                      )}
                      %
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Related Party Sales %
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {checkNan(
                        gstFilteredData?.detail?.summaryInformation
                          ?.revenueProfile?.relatedPartySales * 100,
                      )}
                      %
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      Export Sales %
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {checkNan(
                        gstFilteredData?.detail?.summaryInformation
                          ?.revenueProfile?.exportSalesPercent * 100,
                      )}
                      %
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      GST Payble
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {/* {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.gstPayable?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.summaryInformation
                          ?.revenueProfile?.gstPayable,
                        revenueProfile,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={`${styles.col_header} label_heading`}>
                      GST Paid
                    </div>
                    <div className={`${styles.col_body} accordion_text`}>
                      {/* {gstFilteredData?.detail?.summaryInformation?.revenueProfile?.gstPaid?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.summaryInformation
                          ?.revenueProfile?.gstPaid,
                        revenueProfile,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        className={`${styles.verify_gst} vessel_card card verify_gst`}
      >
        <Modal.Header
          className={`${styles.card_header} card-header lead_main border_color`}
        >
          <Modal.Title>
            <h3>Verify GST</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          onHide={() => console.log('modal Closed')}
          className={`${styles.card_body} card-body`}
        >
          <p className="card-text label">
            Please verify your email to verify you GST
          </p>
          <ul
            className={`${styles.nav_tabs} border_color nav nav-tabs`}
            id="verifyGST"
            role="tablist"
          >
            <li className={`${styles.nav_item} nav-item`}>
              <a
                className={`${styles.nav_link} nav-link active`}
                id="via-email"
                data-toggle="tab"
                href="#viaEmail"
                role="tab"
                aria-controls="viaEmail"
                aria-selected="true"
              >
                <img
                  src="/static/email-icon.png"
                  className="img-fluid"
                  alt="Via Email"
                />
                Via Email
              </a>
            </li>
            <li className={`${styles.nav_item} nav-item`}>
              <a
                className={`${styles.nav_link} nav-link`}
                id="via-phone"
                data-toggle="tab"
                href="#viaPhone"
                role="tab"
                aria-controls="viaPhone"
                aria-selected="false"
              >
                <img
                  src="/static/phone-icon.png"
                  className="img-fluid"
                  alt="Via Email"
                />
                Via Phone No.
              </a>
            </li>
          </ul>
          <form>
            <div
              className={`${styles.tab_content} tab-content`}
              id="myTabContent"
            >
              <div
                className="tab-pane fade show active"
                id="viaEmail"
                role="tabpanel"
                aria-labelledby="via-email"
              >
                <div className={`${styles.labelFloat} form-group`}>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className={`${styles.formControl} ${styles.input} input form-control`}
                    onChange={(e) =>
                      setCredential({ ...credential, username: e.target.value })
                    }
                    required
                  />
                  <label
                    className={`label_heading_login label_heading bg-transparent`}
                    htmlFor="email"
                  >
                    Email or Username
                  </label>
                </div>
                <div
                  className={`${styles.labelFloat} ${styles.password} form-group`}
                >
                  <div className="input-group align-items-center" id="password">
                    <input
                      type={passwordShow ? 'text' : 'password'}
                      name="password"
                      className={`${styles.formControl} ${styles.input} input form-control`}
                      onChange={(e) =>
                        setCredential({
                          ...credential,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                    <label
                      className={`label_heading_login label_heading bg-transparent`}
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <img
                      onClick={() => setPasswordShow(!passwordShow)}
                      src="/static/eye.svg"
                      alt="Show Password"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={handleClose}
                    type="button"
                    className={`${styles.close} ${styles.btn} text border_color btn w-50`}
                  >
                    Close
                  </button>
                  <button
                    onClick={gstinVerifyHandler}
                    type="button"
                    className={`${styles.submit} ${styles.btn} btn w-50`}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="viaPhone"
                role="tabpanel"
                aria-labelledby="via-phone"
              >
                <div className={`${styles.labelFloat} form-group`}>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className={`${styles.formControl} ${styles.input} input form-control`}
                    required
                  />
                  <label className={`label_heading_login`} htmlFor="phone">
                    Phone Number
                  </label>
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={handleClose}
                    type="button"
                    className={`${styles.close} ${styles.btn} btn`}
                  >
                    Close
                  </button>
                  <button
                    onClick={handleClose}
                    type="button"
                    className={`${styles.submit} ${styles.btn} btn`}
                  >
                    Get OTP
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <div className={`${styles.wrapper} card border_color border-bottom`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          style={{ cursor: 'default' }}
        >
          <h2 className="mb-0">Summary Chart</h2>
          <div className="d-flex align-items-center">
            <h5 className={`${styles.light} accordion_Text`}>Filter By : </h5>
            <div className="d-flex align-items-center position-relative">
              <select
                style={{ minWidth: '120px' }}
                value={
                  isChartFilterMonthly ? isChartFilterMonthly : 'Quarterly'
                }
                className={`${styles.select} ${styles.customSelect} accordion_body accordion_DropDown form-select`}
                aria-label="Default select example"
                onChange={(e) => {
                  if (e.target.value == 'monthly') {
                    setIsChartFilterMonthly(true)
                    handleMonthlyData()
                  } else if (e.target.value == 'Quarterly') {
                    handleQuarterlyData()
                    setIsChartFilterMonthly(false)
                  }
                }}
              >
                <option selected value="monthly">
                  Monthly
                </option>
                <option value="Quarterly">Quarterly</option>
              </select>
              <img
                className={`${styles.arrow2} img-fluid`}
                src="/static/inputDropDown.svg"
                alt="arrow"
              />
            </div>
            <span
              data-toggle="collapse"
              data-target="#summaryCharts"
              aria-expanded="true"
              aria-controls="summaryCharts"
            >
              +
            </span>
          </div>
        </div>
        <div
          id="summaryCharts"
          className="collapse"
          aria-labelledby="summaryCharts"
          data-parent="#profileAccordion"
        >
          <div
            className={` ${styles.cardBody} card-body border-top-0 border_color`}
          >
            <Row className={styles.row}>
              <Col md={6} sm={12} className={styles.col}>
                <div
                  className={`${styles.chart_container} ${styles.noBorder} border_color`}
                >
                  <div
                    className={` ${styles.header} card_sub_header d-flex align-items-center justify-content-start`}
                  >
                    <span>Revenue Summary</span>
                    <span className={`${styles.light} breadcrum_mode`}>
                      (Cr)
                    </span>
                  </div>
                  <div className={`${styles.chart} }`}>
                    <Line
                      ref={chartRef}
                      data={chartData}
                      options={lineOption}
                    />
                    <div className={`${styles.legend_box} text-center`}>
                      <span
                        className={`${styles.blue_legend} ${styles.legend} legend`}
                      >
                        Total Sales
                      </span>
                      <span
                        className={`${styles.red_legend} ${styles.legend} legend`}
                      >
                        Third Party Sales
                      </span>
                      <span
                        className={`${styles.yellow_legend} ${styles.legend} legend`}
                      >
                        Related Party Sales
                      </span>
                      <span
                        className={`${styles.green_legend} ${styles.legend} legend`}
                      >
                        Intra Org Sales
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} className={styles.col2}>
                <div className={`${styles.chart_container} border_color`}>
                  <div
                    className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}
                  >
                    <span>Turnover vs Purchases</span>
                    <span className={`${styles.light} breadcrum_mode`}>
                      (Cr)
                    </span>
                  </div>
                  <div className={styles.chart}>
                    <Line
                      ref={chartRef2}
                      data={chartData2}
                      options={lineOption2}
                    />

                    <div className={`${styles.legend_box} text-center`}>
                      <span
                        className={`${styles.blue_legend} ${styles.legend} legend`}
                      >
                        Net Turnover
                      </span>
                      <span
                        className={`${styles.red_legend} ${styles.legend} legend`}
                      >
                        Net Purchases
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} className={styles.col}>
                <div className={`${styles.chart_container} border_color`}>
                  <div
                    className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}
                  >
                    <span>Top 10 Customers</span>
                    <span className={`${styles.light} breadcrum_mode`}>
                      (Cr)
                    </span>
                  </div>
                  <div className={styles.chart}>
                    <Bar data={top10Customers} options={barOptions3} />
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} className={styles.col2}>
                <div className={`${styles.chart_container} border_color`}>
                  <div
                    className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}
                  >
                    <div className="d-flex align-items-start">
                      <span>
                        Top 10 Suppliers
                        <span className={`${styles.small} text_light`}>
                          (Domestic)
                        </span>
                      </span>
                      <span className={`${styles.light} breadcrum_mode mt-1`}>
                        (Cr)
                      </span>
                    </div>
                  </div>
                  <div className={styles.chart}>
                    <Bar data={top10Supplier} options={barOptions} />
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} className={styles.col}>
                <div className={`${styles.chart_container} border_color`}>
                  <div
                    className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}
                  >
                    <span>State Wise Sales</span>
                    <span className={`${styles.light} breadcrum_mode`}>
                      (Cr)
                    </span>
                  </div>
                  <div className={styles.chart}>
                    <Bar data={stateWiseSales} options={barOptions2} />
                    <div className={`${styles.legend_box} text-center`}>
                      <span className={`${styles.legend} legend`}>
                        Financial Period{' '}
                        {getCompliencePeriod(
                          gstFilteredData?.detail?.other?.period?.current
                            ?.financialPeriod,
                          true,
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} className={styles.col2}>
                <div className={`${styles.chart_container} border_color`}>
                  <div
                    className={` ${styles.header}  card_sub_header  d-flex align-items-center justify-content-start`}
                  >
                    <span>Average Trends</span>
                    {/* <span className={`${styles.light} breadcrum_mode`}>(Cr)</span> */}
                  </div>
                  <div className={styles.chart}>
                    <Line
                      ref={chartRef3}
                      data={chartData3}
                      options={lineOption2}
                    />
                    <div className={`${styles.legend_box} text-center`}>
                      <span
                        className={`${styles.blue_legend} ${styles.legend} legend`}
                      >
                        No. of Customers
                      </span>
                      <span
                        className={`${styles.red_legend} ${styles.legend} legend`}
                      >
                        No. of Invoices
                      </span>
                      {/* <span
                        className={`${styles.green_legend} ${styles.legend}`}
                      >
                        Avg. Monthly Sales
                      </span> */}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={`${styles.wrapper} card border_color border-bottom`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          style={{ cursor: 'default' }}
        >
          <h2 className="mb-0">Sales Details</h2>
          <div className="d-flex align-items-center">
            <h5 className={`${styles.light} accordion_Text`}>Unit :</h5>
            <div className="d-flex align-items-center position-relative">
              <select
                onChange={(e) => setSalesDetails(e.target.value)}
                className={`${styles.select} ${styles.customSelect} accordion_body accordion_DropDown form-select`}
                aria-label="Default select example"
              >
                <option selected value={10000000}>
                  Crores
                </option>
                <option value={100000}>Lakhs</option>
              </select>
              <img
                className={`${styles.arrow2} img-fluid`}
                src="/static/inputDropDown.svg"
                alt="arrow"
              />
            </div>
            <span
              data-toggle="collapse"
              data-target="#salesDetails"
              aria-expanded="true"
              aria-controls="salesDetails"
            >
              +
            </span>
          </div>
        </div>
        <div
          id="salesDetails"
          className="collapse"
          aria-labelledby="salesDetails"
          data-parent="#profileAccordion"
        >
          <div
            className={` ${styles.cardBody} card-body border-top-0  border_color`}
          >
            <div className={`${styles.scrollouter}`}>
              <div className={`${styles.scrollInner}`}>
                <table
                  className={`${styles.table_annual}  table border_color`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="1"
                >
                  <tr>
                    <th className={`${styles.first} text-color`} colSpan={2}>
                      Annual Summary
                    </th>
                    <th colSpan={2} className="text-color">
                      Period: {finacialYear('current')}
                    </th>
                    <th colSpan={2} className="text-color">
                      Period: {finacialYear()}
                    </th>
                  </tr>
                  <tr className={styles.second_head}>
                    <td width="34%" colSpan={2}></td>
                    <td width="16%" className="text-nowrap">
                      VALUE
                    </td>
                    <td width="17%" className="border-left-0 text-nowrap">
                      % ON GROSS REVENUE
                    </td>
                    <td width="16%" className="text-nowrap">
                      VALUE
                    </td>
                    <td width="17%" className="border-left-0 text-nowrap">
                      % ON GROSS REVENUE
                    </td>
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
                    <td colSpan={2}>Gross Revenue</td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.saleSummary
                          ?.grossTurnover?.current?.value,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual
                            ?.saleSummary?.grossTurnover?.current?.value,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.grossTurnover?.current?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.grossTurnover?.current?.percentage?.toFixed(
                        2,
                      )
                        ? `${gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.grossTurnover?.current?.percentage?.toFixed(
                          2,
                        )} %`
                        : '-'}
                    </td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.saleSummary
                          ?.grossTurnover?.previous?.value,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual
                            ?.saleSummary?.grossTurnover?.previous?.value,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.grossTurnover?.previous?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.grossTurnover?.previous?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )
                        ? `${gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.grossTurnover?.previous?.percentage?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )}%`
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Recurring Sales</td>
                    <td>
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.recurringSales?.current?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.saleSummary
                          ?.recurringSales?.current?.value,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual
                            ?.saleSummary?.recurringSales?.current?.value,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.recurringSales?.current?.percentage?.toFixed(
                        2,
                      )
                        ? `${gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.recurringSales?.current?.percentage?.toFixed(
                          2,
                        )}  %`
                        : '-'}
                    </td>
                    <td>
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.recurringSales?.previous?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.saleSummary
                          ?.recurringSales?.previous?.value,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual
                            ?.saleSummary?.recurringSales?.previous?.value,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.recurringSales?.previous?.percentage?.toFixed(
                        2,
                      )
                        ? `${gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.recurringSales?.previous?.percentage?.toFixed(
                          2,
                        )} %`
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Related Party Sales</td>
                    <td>
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.relatedPartySales?.current?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.saleSummary
                          ?.relatedPartySales?.current?.value,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual
                            ?.saleSummary?.relatedPartySales?.current?.value,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.relatedPartySales?.current?.percentage?.toFixed(
                        2,
                      )
                        ? `${gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.relatedPartySales?.current?.percentage?.toFixed(
                          2,
                        )} %`
                        : '-'}
                    </td>
                    <td>
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.relatedPartySales?.previous?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.saleSummary
                          ?.relatedPartySales?.previous?.value,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual
                            ?.saleSummary?.relatedPartySales?.previous?.value,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.relatedPartySales?.previous?.percentage?.toFixed(
                        2,
                      )
                        ? `${gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.relatedPartySales?.previous?.percentage?.toFixed(
                          2,
                        )} %`
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Intra Organization Sales</td>
                    <td>
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.intraOrgSalesPercent?.current?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.saleSummary
                          ?.intraOrgSalesPercent?.current?.value,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual
                            ?.saleSummary?.intraOrgSalesPercent?.current
                            ?.value,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.intraOrgSalesPercent?.current?.percentage?.toFixed(
                        2,
                      )
                        ? `${gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.intraOrgSalesPercent?.current?.percentage?.toFixed(
                          2,
                        )} %`
                        : '-'}
                    </td>
                    <td>
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.intraOrgSalesPercent?.previous?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.saleSummary
                          ?.intraOrgSalesPercent?.previous?.value,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual
                            ?.saleSummary?.intraOrgSalesPercent?.previous
                            ?.value,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.intraOrgSalesPercent?.previous?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )
                        ? `${gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.intraOrgSalesPercent?.previous?.percentage?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )}%`
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <span style={{ textTransform: 'uppercase' }}>B2B </span>
                      Sales
                    </td>
                    <td>
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2BSales?.current?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.saleSummary
                          ?.B2BSales?.current?.value,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual
                            ?.saleSummary?.B2BSales?.current?.value,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2BSales?.current?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )
                        ? `${gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2BSales?.current?.percentage?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )}%`
                        : '-'}
                    </td>
                    <td>
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2BSales?.previous?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.saleSummary
                          ?.B2BSales?.previous?.value,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual
                            ?.saleSummary?.B2BSales?.previous?.value,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2BSales?.previous?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )
                        ? `${gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2BSales?.previous?.percentage?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )} %`
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>B2C Sales</td>
                    <td>
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2CSales?.current?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.saleSummary
                          ?.B2CSales?.current?.value,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual
                            ?.saleSummary?.B2CSales?.current?.value,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2CSales?.current?.percentage?.toFixed(
                        2,
                      )
                        ? `${gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2CSales?.current?.percentage?.toFixed(
                          2,
                        )} %`
                        : '-'}
                    </td>
                    <td>
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2CSales?.previous?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.saleSummary
                          ?.B2CSales?.previous?.value,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual
                            ?.saleSummary?.B2CSales?.previous?.value,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2CSales?.previous?.percentage?.toFixed(
                        2,
                      )
                        ? `${gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.B2CSales?.previous?.percentage?.toFixed(
                          2,
                        )} %`
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Export Sales</td>
                    <td>
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.exportSales?.current?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.saleSummary
                          ?.exportSales?.current?.value,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual
                            ?.saleSummary?.exportSales?.current?.value,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.exportSales?.current?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )
                        ? `${gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.exportSales?.current?.percentage?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )}  %`
                        : '-'}
                    </td>
                    <td>
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.exportSales?.current?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.saleSummary
                          ?.exportSales?.previous?.value,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual
                            ?.saleSummary?.exportSales?.previous?.value,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.exportSales?.previous?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )
                        ? `${gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.exportSales?.previous?.percentage?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )}%`
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Total Customers</td>
                    <td>
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlCustomer?.current?.value?.toLocaleString(
                        'en-In',
                        { maximumFractionDigits: 0 },
                      )
                        ? `${gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlCustomer?.current?.value?.toLocaleString(
                          'en-In',
                          { maximumFractionDigits: 0 },
                        )}`
                        : '-'}
                      {/* {convertValue(gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlCustomer?.previous?.value, saleDetails)?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
 minimumFractionDigits: 2,
                      })} */}
                    </td>
                    <td className="border-left-0">
                      {' '}
                      -
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.exportSales?.current?.percentage?.toFixed(
                        2,
                      )}
                      % */}
                    </td>

                    <td>
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlCustomer?.previous?.value?.toLocaleString(
                        'en-In',
                        { maximumFractionDigits: 0 },
                      )
                        ? gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlCustomer?.previous?.value?.toLocaleString(
                          'en-In',
                          { maximumFractionDigits: 0 },
                        )
                        : '-'}
                      {/* {convertValue(gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlCustomer?.previous?.value, saleDetails)?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
 minimumFractionDigits: 2,
                      })} */}
                    </td>
                    <td className="border-left-0">
                      -
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlCustomer?.previous?.percentage?.toFixed(
                        2,
                      )}
                      % */}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Total Invoices</td>
                    <td>
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlInv?.current?.value?.toLocaleString(
                        'en-In',
                        { maximumFractionDigits: 0 },
                      )
                        ? gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlInv?.current?.value?.toLocaleString(
                          'en-In',
                          { maximumFractionDigits: 0 },
                        )
                        : '-'}
                      {/* {convertValue(gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlInv?.previous?.value, saleDetails)?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
 minimumFractionDigits: 2,
                      })} */}
                    </td>
                    <td className="border-left-0">-</td>
                    <td>
                      {gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlInv?.previous?.value?.toLocaleString(
                        'en-In',
                        { maximumFractionDigits: 0 },
                      )
                        ? gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlInv?.previous?.value?.toLocaleString(
                          'en-In',
                          { maximumFractionDigits: 0 },
                        )
                        : '-'}
                      {/* {convertValue(gstFilteredData?.detail?.salesDetailAnnual?.saleSummary?.ttlInv?.previous?.value, saleDetails)?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
 minimumFractionDigits: 2,
                      })} */}
                    </td>
                    <td className="border-left-0">-</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <strong>Sales Growth Rate</strong>
                    </td>
                    <td>-</td>
                    <td className="border-left-0">
                      <strong>
                        {checkNan(
                          gstFilteredData?.detail?.salesDetailAnnual
                            ?.saleSummary?.salesGrowthRate?.current?.value *
                          100 ?? '',
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                          ? `${checkNan(
                            gstFilteredData?.detail?.salesDetailAnnual
                              ?.saleSummary?.salesGrowthRate?.current?.value *
                            100 ?? '',
                          )?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })} %`
                          : '-'}
                      </strong>
                    </td>
                    <td>-</td>
                    <td className="border-left-0">-</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <strong>Quarterly Growth Rate</strong>
                    </td>
                    <td>-</td>
                    <td className="border-left-0">
                      <strong>
                        {(
                          _get(
                            gstFilteredData,
                            'detail.salesDetailAnnual.saleSummary.quaterlyGrowthRate.current.value',
                            null,
                          ) ?? ''
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                          ? `${(
                            _get(
                              gstFilteredData,
                              'detail.salesDetailAnnual.saleSummary.quaterlyGrowthRate.current.value',
                              null,
                            ) ?? ''
                          )?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}  %`
                          : '-'}
                      </strong>
                    </td>

                    <td>-</td>
                    <td className="border-left-0">-</td>
                  </tr>
                </table>
                <table
                  className={`${styles.table_average} border_color  table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="1"
                >
                  <tr>
                    <th width="34%" className={`${styles.first} text-color`}>
                      Averages
                    </th>
                    <th width="33%" className="text-color">
                      Period: {' '} {finacialYear('current') ? finacialYear('current') : '-'}
                    </th>
                    <th width="33%" className="text-color">
                      Period: {' '}  {finacialYear() ? finacialYear() : '-'}
                    </th>
                  </tr>

                  <tr className={styles.second_head}>
                    <td></td>
                    <td className="text-nowrap">VALUE</td>

                    <td className="text-nowrap">VALUE</td>
                  </tr>
                  <tr>
                    <td>Average Monthly Sales</td>
                    <td>
                      {/* {gstFilteredData?.detail?.salesDetailAnnual?.averages?.avgMonthlySales?.current?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.averages
                          ?.avgMonthlySales?.current,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual?.averages
                            ?.avgMonthlySales?.current,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>

                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.averages
                          ?.avgMonthlySales?.previous,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual?.averages
                            ?.avgMonthlySales?.previous,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td>Average Quarterly Sales</td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.averages
                          ?.avgQuarterlySales?.current,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual?.averages
                            ?.avgQuarterlySales?.current,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>

                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.averages
                          ?.avgQuarterlySales?.previous,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual?.averages
                            ?.avgQuarterlySales?.previous,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td>Average Sales per Customer</td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.averages
                          ?.avgttlvalcust?.current,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual?.averages
                            ?.avgttlvalcust?.current,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>

                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.averages
                          ?.avgttlvalcust?.previous,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual?.averages
                            ?.avgttlvalcust?.previous,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td>Average Sales per Invoice</td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.averages
                          ?.avgttlvalinv?.current,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual?.averages
                            ?.avgttlvalinv?.current,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.salesDetailAnnual?.averages
                          ?.avgttlvalinv?.previous,
                        saleDetails,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                        ? convertValue(
                          gstFilteredData?.detail?.salesDetailAnnual?.averages
                            ?.avgttlvalinv?.previous,
                          saleDetails,
                        )?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td>Average Invoices per Customer</td>
                    <td>
                      {gstFilteredData?.detail?.salesDetailAnnual?.averages?.avginvcust?.current?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )
                        ? gstFilteredData?.detail?.salesDetailAnnual?.averages?.avginvcust?.current?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )
                        : '-'}
                    </td>
                    <td>
                      {gstFilteredData?.detail?.salesDetailAnnual?.averages?.avginvcust?.previous?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )
                        ? gstFilteredData?.detail?.salesDetailAnnual?.averages?.avginvcust?.previous?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )
                        : '-'}
                    </td>
                  </tr>
                </table>
                <table
                  className={`${styles.table_pricipal} border_color mb-0 table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="1"
                >
                  <tr>
                    <th width="34%" className={`${styles.first} text-color`}>
                      Principal/ HSN Wise Sales
                    </th>
                    <th width="66%" colSpan={3} className="text-color">
                      <span className="breadcrum_mode mr-1">Period:</span>
                      {finacialYear('current') ? finacialYear('current') : '-'}
                    </th>
                  </tr>
                  <tr className={`${styles.second_head}`}>
                    <td className="text-nowrap">PRODUCT</td>
                    <td width="22%" className="text-nowrap">
                      HSN CODE
                    </td>
                    <td width="22%" className="text-nowrap">
                      TURNOVER
                    </td>
                    <td width="22%" className="text-nowrap">
                      % SHARE
                    </td>

                    {/* <td>CUSTOMERS</td>
                    <td>INVOICES</td>
                    <td>AVG. SALES PER CUSTOMER</td> */}
                  </tr>

                  {gstFilteredData &&
                    gstFilteredData?.detail?.salesDetailAnnual?.hsnWiseSales?.map(
                      (sales, index) => (
                        <tr key={index}>
                          <td className={` ${styles.first}`}>
                            {sales.hsnDesc}
                          </td>
                          <td>
                            {sales?.hsnSc?.toLocaleString('en-In', {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            })
                              ? sales?.hsnSc?.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                              })
                              : '-'}
                          </td>
                          <td>
                            {convertValue(
                              sales?.turnover,
                              saleDetails,
                            )?.toLocaleString('en-In', {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            })
                              ? convertValue(
                                sales?.turnover,
                                saleDetails,
                              )?.toLocaleString('en-In', {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              })
                              : '-'}
                          </td>
                          <td>
                            {sales?.sharePercent?.toLocaleString('en-In', {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            })
                              ? `${sales?.sharePercent?.toLocaleString(
                                'en-In',
                                {
                                  maximumFractionDigits: 2,
                                  minimumFractionDigits: 2,
                                },
                              )}  %`
                              : '-'}
                          </td>

                          {/* <td>24</td>
                      <td>19</td>
                      <td>1.05</td> */}
                        </tr>
                      ),
                    )}
                </table>
              </div>
            </div>
          </div>
        </div>{' '}
      </div>

      <div className={`${styles.wrapper} card border_color border-bottom`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          style={{ cursor: 'default' }}
        >
          <h2 className="mb-0">Purchase Details</h2>
          <div className="d-flex align-items-center">
            <h5 className={`${styles.light} accordion_Text`}>Unit :</h5>
            <div className="d-flex align-items-center position-relative">
              <select
                onChange={(e) => setPurchasesDetailsUnit(e.target.value)}
                className={`${styles.select} ${styles.customSelect} accordion_body accordion_DropDown form-select`}
                aria-label="Default select example"
              >
                <option value={10000000}>Crores</option>
                <option value={100000}>Lakhs</option>
              </select>
              <img
                className={`${styles.arrow2} img-fluid`}
                src="/static/inputDropDown.svg"
                alt="arrow"
              />
            </div>
            <span
              data-toggle="collapse"
              data-target="#purchaseDetails"
              aria-expanded="true"
              aria-controls="purchaseDetails"
            >
              +
            </span>
          </div>
        </div>
        <div
          id="purchaseDetails"
          className="collapse"
          aria-labelledby="purchaseDetails"
          data-parent="#profileAccordion"
        >
          <div
            className={` ${styles.cardBody} card-body  border-top-0 border_color`}
          >
            <div className={`${styles.scrollouter}`}>
              <div className={`${styles.scrollInner}`}>
                <table
                  className={`${styles.table_annual}  table border_color`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="1"
                >
                  <tr>
                    <th className={`${styles.first} text-color`} colSpan={2}>
                      Annual Summary
                    </th>
                    <th colSpan={2} className="text-color">
                      Period: {finacialYear('current')}
                    </th>
                    <th colSpan={2} className="text-color">
                      Period: {finacialYear()}
                    </th>
                  </tr>
                  <tr className={styles.second_head}>
                    <td width="34%" colSpan={2}></td>
                    <td width="16%">VALUE</td>
                    <td width="17%" className="border-left-0 text-nowrap">
                      % ON GROSS REVENUE
                    </td>
                    <td width="16%">VALUE</td>
                    <td width="17%" className="border-left-0 text-nowrap">
                      % ON GROSS REVENUE
                    </td>
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
                    <td colSpan={2}>Gross Purchases</td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual
                          ?.saleSummary?.grossPurchases?.current?.value,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                      {/* {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.grossPurchases?.current?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.grossPurchases?.current?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )}
                      %
                    </td>

                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual
                          ?.saleSummary?.grossPurchases?.previous?.value,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.grossPurchases?.previous?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )}
                      %
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Recurring Purchases</td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual
                          ?.saleSummary?.recurringPurchase?.current?.value,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.recurringPurchase?.current?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )}
                      %
                    </td>

                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual
                          ?.saleSummary?.recurringPurchase?.previous?.value,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.recurringPurchase?.previous?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )}
                      %
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2}>Related Party Purchases</td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual
                          ?.saleSummary?.relatedPartyPurchase?.current?.value,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </td>

                    <td className="border-left-0">
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.relatedPartyPurchase?.current?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )}
                      %
                    </td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual
                          ?.saleSummary?.relatedPartyPurchase?.previous?.value,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.relatedPartyPurchase?.previous?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )}
                      %
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Intra Organization Purchases</td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual
                          ?.saleSummary?.intraOrgPurchasesPercent?.current
                          ?.value,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                      {/* {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.intraOrgPurchasesPercent?.current?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.intraOrgPurchasesPercent?.current?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )}
                      %
                    </td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual
                          ?.saleSummary?.intraOrgPurchasesPercent?.previous
                          ?.value,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.intraOrgPurchasesPercent?.previous?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )}
                      %
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <span style={{ textTransform: 'uppercase' }}>B2B </span>
                      Purchases
                    </td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual
                          ?.saleSummary?.B2BPurchase?.current?.value,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.B2BPurchase?.current?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )}
                      %
                    </td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual
                          ?.saleSummary?.B2BPurchase?.previous?.value,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                      {/* {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.B2BPurchase?.previous?.value?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.B2BPurchase?.previous?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )}
                      %
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2}>Other Purchases (total - B2B)</td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual
                          ?.saleSummary?.otherPurchase?.current?.value,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.otherPurchase?.current?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )}
                      %
                    </td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual
                          ?.saleSummary?.otherPurchase?.previous?.value,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="border-left-0">
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.otherPurchase?.previous?.percentage?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )}
                      %
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2}>Total Suppliers</td>
                    <td>
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlSuppliers?.current?.value?.toLocaleString(
                        'en-In',
                        { maximumFractionDigits: 0 },
                      )}
                    </td>
                    <td className="border-left-0">
                      -
                      {/* {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlSuppliers?.current?.percentage?.toFixed(
                        2,
                      )}
                      % */}
                    </td>
                    <td>
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlSuppliers?.previous?.value?.toLocaleString(
                        'en-In',
                        { maximumFractionDigits: 0 },
                      )}
                    </td>
                    <td className="border-left-0">
                      -
                      {/* {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlSuppliers?.previous?.percentage?.toFixed(
                        2,
                      )}
                      % */}
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2}>Total Invoices</td>
                    <td>
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlRec?.current?.value?.toLocaleString(
                        'en-In',
                        { maximumFractionDigits: 0 },
                      )
                        ? gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlRec?.current?.value?.toLocaleString(
                          undefined,
                          { maximumFractionDigits: 0 },
                        )
                        : '-'}
                    </td>
                    <td className="border-left-0">
                      -
                      {/* {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlRec?.current?.percentage?.toFixed(
                        2,
                      )}
                      % */}
                    </td>
                    <td>
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlRec?.previous?.value?.toLocaleString(
                        'en-In',
                        {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        },
                      )
                        ? gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlRec?.previous?.value?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )
                        : '-'}
                    </td>
                    <td className="border-left-0">
                      -
                      {/* {gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.ttlRec?.previous?.percentage?.toFixed(
                        2,
                      )}
                      % */}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <strong>Purchases Growth Rate</strong>
                    </td>
                    <td>-</td>
                    <td className="border-left-0">
                      <strong>
                        {checkNan(
                          Number(
                            gstFilteredData?.detail?.purchaseDetailAnnual
                              ?.saleSummary?.purchasesGrowthRate?.current
                              ?.value * 100,
                          )?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          }),
                        )}
                        %
                      </strong>
                    </td>
                    <td>-</td>
                    <td className="border-left-0">
                      <strong>
                        {/* {checkNan((gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.purchasesGrowthRate?.previous?.value * 100)?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }))}
                        % */}
                        -
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <strong>Quarterly Growth Rate</strong>
                    </td>
                    <td>-</td>
                    <td className="border-left-0">
                      <strong>
                        {checkNan(
                          gstFilteredData?.detail?.purchaseDetailAnnual?.saleSummary?.quaterlyGrowthRate?.current?.value?.toLocaleString(
                            'en-In',
                            {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            },
                          ),
                        )}
                        %
                      </strong>
                    </td>
                    <td>-</td>
                    <td className="border-left-0">
                      <strong>-</strong>
                    </td>
                  </tr>
                </table>
                <table
                  className={`${styles.table_average} border_color  table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="1"
                >
                  <tr>
                    <th width="34%" className={`${styles.first} text-color`}>
                      Averages
                    </th>
                    <th width="33%" className="text-color">
                      Period: {finacialYear('current')}
                    </th>
                    <th width="33%" className="text-color">
                      Period: {finacialYear()}
                    </th>
                  </tr>

                  <tr className={styles.second_head}>
                    <td>-</td>
                    <td>VALUE</td>

                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>Average Monthly Purchases</td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual?.averages
                          ?.avgMonthlyPurchase?.current,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                      {/* {gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgMonthlyPurchase?.previous?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                    </td>

                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual?.averages
                          ?.avgMonthlyPurchase?.previous,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                      {/* {gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgMonthlyPurchase?.current?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                    </td>
                  </tr>
                  <tr>
                    <td>Average Quarterly Purchases</td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual?.averages
                          ?.avgQuarterlyPurchase?.current,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                      {/* {gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgQuarterlyPurchase?.previous?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                    </td>

                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual?.averages
                          ?.avgQuarterlyPurchase?.previous,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                      {/* {gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgQuarterlyPurchase?.current?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                    </td>
                  </tr>
                  <tr>
                    <td>Average Purchases per Supplier</td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual?.averages
                          ?.avgPurchasePerSupplier?.current,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>

                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual?.averages
                          ?.avgPurchasePerSupplier?.previous,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                      {/* {gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgPurchasePerSupplier?.current?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                    </td>
                  </tr>
                  <tr>
                    <td>Average Purchases per Invoices</td>
                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual?.averages
                          ?.avgPurchasePerInv?.current,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                      {/* {gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgPurchasePerInv?.previous?.toLocaleString(
                        'en-In',
                        { minimumFractionDigits: 2 },
                      )} */}
                    </td>

                    <td>
                      {convertValue(
                        gstFilteredData?.detail?.purchaseDetailAnnual?.averages
                          ?.avgPurchasePerInv?.previous,
                        purchasesDetailsUnit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td>Average Invoices per Supplier</td>
                    <td>
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgInvPerSupplier?.current?.toLocaleString(
                        'en-In',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      )}
                    </td>

                    <td>
                      {gstFilteredData?.detail?.purchaseDetailAnnual?.averages?.avgInvPerSupplier?.previous?.toLocaleString(
                        'en-In',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      )}
                    </td>
                  </tr>
                </table>
                {/* <table
                  className={`${styles.table_pricipal} border_color mb-0 table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="1"
                >
                  <tr>
                    <th width="34%" className={`${styles.first} text-color`}>
                      Principal/ HSN Wise Purchases
                    </th>
                    <th width="66%" colSpan={6} className='text-color'>
                      <span className='breadcrum_mode'>
                         Period:
                      </span>{' '}
                      {finacialYear('current')}
                    </th>
                  </tr>
                  <tr className={`${styles.second_head}`}>
                    <td width="33%">PRODUCT</td>
                    <td className='text-nowrap'>HSN CODE</td>
                    <td>TURNOVER</td>
                    <td className='text-nowrap'>% SHARE</td>

                    <td>CUSTOMERS</td>
                    <td>INVOICES</td>
                    <td>AVG. SALES PER CUSTOMER</td>
                  </tr>
                  {gstFilteredData &&
                    gstFilteredData?.detail?.purchaseDetailAnnual?.hsnWisePurchase?.map(
                      (sales, index) => (
                        <tr key={index}>
                          <td className={` ${styles.first}`}>
                            {sales.hsnDesc}
                          </td>
                          <td>
                            {sales?.hsnSc.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                            })}
                          </td>
                          <td>
                            {convertValue(
                              sales?.turnover,
                              purchasesDetailsUnit,
                            )?.toLocaleString('en-In', {
                              maximumFractionDigits: 2,
 minimumFractionDigits: 2,
                            })}
                            {sales?.turnover.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                            })}
                          </td>
                          <td>
                            {sales?.sharePercent.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                            })}
                            %
                          </td>

                          <td>24</td>
                          <td>19</td>
                          <td>1.05</td>
                        </tr>
                      ),
                    )}
                </table> */}
              </div>
            </div>
          </div>
        </div>{' '}
      </div>

      <div className={`${styles.wrapper} card border_color border-bottom`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          style={{ cursor: 'default' }}
        >
          <h2 className="mb-0">Compliance</h2>
          <div className={`${styles.subHeadContainer} d-flex mr-4 ml-auto`}>
            <div
              className={` ${styles.complaintExtra} text-color d-flex align-items-center`}
            >
              <div
                className={`${styles.lightCompliance} accordion_Text ml-4 mr-2`}
              >
                Filing History:
              </div>
              {gstFilteredData?.detail?.complianceDetail?.filingHistory?.toLocaleString()}
            </div>
            <div
              className={`${styles.complaintExtra} text-color d-flex align-items-center`}
            >
              <div
                className={`${styles.lightCompliance} accordion_Text ml-4 mr-2`}
              >
                Filing Frequency:
              </div>
              {gstFilteredData?.detail?.complianceDetail?.filingFrequency?.toLocaleString()}
            </div>
            <div
              className={`${styles.complaintExtra} text-color d-flex align-items-center`}
            >
              <div
                className={`${styles.lightCompliance} accordion_Text ml-4 mr-2`}
              >
                Period:
              </div>
              {getCompliencePeriod(
                gstFilteredData?.detail?.complianceDetail?.financialPeriod,
              )}
            </div>
          </div>
          <span
            data-toggle="collapse"
            data-target="#Compliance"
            aria-expanded="true"
            aria-controls="Compliance"
          >
            +
          </span>
        </div>
        <div
          id="Compliance"
          className="collapse"
          aria-labelledby="Compliance"
          data-parent="#profileAccordion"
        >
          <div
            className={` ${styles.cardBody} card-body  border-top-0 border_color`}
          >
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
                    <th colSpan={2} className="text_light">
                      GSTR1 (SALES)
                    </th>
                    <th colSpan={2} className="text_light">
                      GSTR3B (CONSOLIDATED)
                    </th>
                  </tr>
                  <tr className={styles.second_head}>
                    <td width="34%" colSpan={2}>
                      MONTH
                    </td>
                    <td width="16%" className="text-nowrap">
                      DATE OF FILING
                    </td>
                    <td width="17%" className="text-nowrap">
                      DAYS OF DELAY
                    </td>
                    <td width="16%" className="text-nowrap">
                      DATE OF FILING
                    </td>
                    <td width="17%" className="text-nowrap">
                      DAYS OF DELAY
                    </td>
                    {/* <td    className=" d-flex align-items-center justify-content-between">
               <span>VALUE</span>
               <span >% ON GROSS REVENUE</span>
             </td>
              <td    className=" d-flex align-items-center justify-content-between">
               <span>VALUE</span>
               <span >% ON GROSS REVENUE</span>
             </td> */}
                  </tr>
                  {gstFilteredData &&
                    gstFilteredData?.detail?.complianceDetail?.monthlyData
                      ?.slice()
                      ?.reverse()
                      ?.map((customer, index) => {
                        if (index === 0) {
                          return
                        } else {
                          return (
                            <tr key={index}>
                              <td colSpan={2}>
                                {moment(customer?.retPeriod, 'MMYYYY').format(
                                  'MMMM YYYY',
                                )}
                              </td>
                              <td>{customer?.GSTR1?.dof}</td>
                              <td>{customer?.GSTR1?.delayDays}</td>
                              <td>{customer?.GSTR3B?.dof}</td>
                              <td>{customer?.GSTR3B?.delayDays}</td>
                            </tr>
                          )
                        }
                      })}
                </table>
              </div>
            </div>
          </div>
        </div>{' '}
      </div>

      {/* CistomerDetail                                    */}

      {gstCustomerDetail(
        gstFilteredData,
        customerDetailsUnit,
        setCustomerDetailsUnit,
      )}
      {gstSupplierDetail(
        gstFilteredData,
        supplierDetailsUnit,
        setSupplierDetailsUnit,
      )}
      {gstSales(
        'Sales',
        gstFilteredData,
        salesUnit,
        setSalesUnit,
        arrSales,
        getCompliencePeriod,
        finacialYear,
      )}
      {gstPurchase(
        'Purchase',
        gstFilteredData,
        purchasesUnit,
        setPurchasesUnit,
        arr,
        getCompliencePeriod,
        finacialYear,
      )}
    </>
  )
}

export default Index

const gstCustomerDetail = (
  gstFilteredData,
  customerDetailsUnit,
  setCustomerDetailsUnit,
) => {
  return (
    <>
      <div className={`${styles.wrapper} card border_color border-bottom`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          style={{ cursor: 'default' }}
        >
          <h2 className="mb-0">Customer Details</h2>
          <div className="d-flex align-items-center">
            <h5 className={`${styles.light} accordion_Text`}>Unit :</h5>
            <div className="d-flex align-items-center position-relative">
              <select
                onChange={(e) => setCustomerDetailsUnit(e.target.value)}
                className={`${styles.select} ${styles.customSelect} accordion_body accordion_DropDown form-select`}
                aria-label="Default select example"
              >
                <option selected value={10000000}>
                  Crores
                </option>
                <option value={100000}>Lakhs</option>
              </select>
              <img
                className={`${styles.arrow2} img-fluid`}
                src="/static/inputDropDown.svg"
                alt="arrow"
              />
            </div>
            <span
              data-toggle="collapse"
              data-target="#gstCustomerDetail"
              aria-expanded="true"
              aria-controls="gstCustomerDetail"
            >
              +
            </span>
          </div>
        </div>
        <div
          id="gstCustomerDetail"
          className="collapse"
          aria-labelledby="gstCustomerDetail"
          data-parent="#profileAccordion"
        >
          <div
            className={`${styles.CustomercardBody} card-body border-top-0 border_color`}
          >
            <div className={`${styles.content}`}>
              <div className={`${styles.first} card_sub_header text-color`}>
                Recurring Party Sales In Last 12 Months
              </div>

              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2} border_color  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      {/* <tr>
                        <th
                          className={`${styles.first} text-color`}
                          colSpan={6}
                        >
                          Recurring Party Sales In Last 12 Months
                        </th>
                      </tr> */}
                      <tr className={styles.second_head}>
                        <td className="text-nowrap">CUSTOMER NAME</td>
                        <td>PAN</td>
                        <td>SALES</td>
                        <td className="text-nowrap">% OF TOTAL SALES</td>
                        <td>INVOICES</td>
                        <td className="text-nowrap">SALES PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData &&
                          gstFilteredData?.detail?.customerDetail?.recurringPartySales?.map(
                            (customer, index) => (
                              <tr key={index}>
                                <td>{customer?.name}</td>
                                <td>{customer?.pan}</td>
                                <td>
                                  {convertValue(
                                    customer?.ttlVal,
                                    customerDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                  {/* {(
                                    customer?.ttlVal / supplierDetailsUnit
                                  )?.toLocaleString()} */}
                                </td>
                                <td>
                                  {customer?.percentageOfTotalSales?.toLocaleString(
                                    'en-In',
                                    {
                                      maximumFractionDigits: 2,
                                      minimumFractionDigits: 2,
                                    },
                                  )}
                                  %
                                </td>
                                <td>{customer?.invoice}</td>
                                <td>
                                  {convertValue(
                                    customer?.salesPerInvoice,
                                    customerDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                  {/* {customer?.salesPerInvoice?.toLocaleString()} */}
                                </td>
                              </tr>
                            ),
                          )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div className={`${styles.first} card_sub_header text-color`}>
                Related Party Sales In Last 12 Months
              </div>

              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table1}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      {/* <tr>
                        <th
                          className={`${styles.first} text-color`}
                          colSpan={6}
                        >
                          Related Party Sales In Last 12 Months
                        </th>
                      </tr> */}
                      <tr className={styles.second_head}>
                        <td className="text-nowrap">CUSTOMER NAME</td>
                        <td>PAN</td>
                        <td>SALES</td>
                        <td className="text-nowrap">% OF TOTAL SALES</td>
                        <td>INVOICES</td>
                        <td className="text-nowrap">SALES PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData &&
                          gstFilteredData?.detail?.customerDetail?.relatedPartySales?.map(
                            (customer, index) => (
                              <tr key={index}>
                                <td>{customer?.name}</td>
                                <td>{customer?.pan}</td>
                                <td>
                                  {convertValue(
                                    customer?.ttlVal,
                                    customerDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                  {/* {customer?.ttlVal?.toLocaleString('en-In', {
                                    minimumFractionDigits: 2,
                                  })} */}
                                </td>
                                <td>
                                  {customer?.percentageOfTotalSales?.toLocaleString(
                                    'en-In',
                                    {
                                      maximumFractionDigits: 2,
                                      minimumFractionDigits: 2,
                                    },
                                  )}
                                  %
                                </td>
                                <td>{customer?.invoice}</td>
                                <td>
                                  {convertValue(
                                    customer?.salesPerInvoice,
                                    customerDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                  {/* {customer?.salesPerInvoice?.toLocaleString(
                                    'en-In',
                                    { minimumFractionDigits: 2 },
                                  )} */}
                                </td>
                              </tr>
                            ),
                          )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div className={`${styles.first} card_sub_header text-color`}>
                Top 10 Customers
              </div>
              <div className={` ${styles.body} ${styles.body_noscroll}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table1}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      {/* <tr>
                        <th
                          className={`${styles.first} text-color`}
                          colSpan={6}
                        >
                          Top 10 Customers
                        </th>
                      </tr> */}
                      <tr className={styles.second_head}>
                        <td className="text-nowrap">CUSTOMER NAME</td>
                        <td>PAN</td>
                        <td>SALES</td>
                        <td className="text-nowrap">% OF TOTAL SALES</td>
                        <td>INVOICES</td>
                        <td className="text-nowrap">SALES PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData &&
                          gstFilteredData?.detail?.customerDetail?.top10Customers?.map(
                            (customer, index) => (
                              <tr key={index}>
                                <td>{customer?.name}</td>
                                <td>{customer?.pan}</td>
                                <td>
                                  {convertValue(
                                    customer?.ttlVal,
                                    customerDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                  {/* {Number(customer?.ttlVal)?.toLocaleString()} */}
                                </td>
                                <td>
                                  {customer?.percentageOfTotalSales
                                    ? customer?.percentageOfTotalSales?.toLocaleString(
                                      'en-In',
                                      {
                                        maximumFractionDigits: 2,
                                        minimumFractionDigits: 2,
                                      },
                                    )
                                    : ''}
                                  %
                                </td>
                                <td>{customer?.invoice}</td>
                                <td>
                                  {convertValue(
                                    customer?.salesPerInvoice,
                                    customerDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                  {/* {Number(
                                    customer?.salesPerInvoice,
                                  )?.toLocaleString()} */}
                                </td>
                              </tr>
                            ),
                          )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content} mb-0`}>
              <div className={`${styles.first} card_sub_header text-color`}>
                Statewise Sales
              </div>

              <div className={` ${styles.body} ${styles.body_noscroll}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table1}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      {/* <tr>
                        <th
                          className={`${styles.first} text-color`}
                          colSpan={6}
                        >
                          Statewise Sales
                        </th>
                      </tr> */}
                      <tr className={styles.second_head}>
                        <td>STATE</td>
                        <td className="text-nowrap">STATE CODE</td>
                        <td>SALES</td>
                        <td className="text-nowrap">% OF TOTAL SALES</td>
                        <td>INVOICES</td>
                        <td className="text-nowrap">SALES PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData &&
                          gstFilteredData?.detail?.customerDetail?.statewiseSales?.map(
                            (customer, index) => (
                              <tr key={index}>
                                <td>{customer?.stateName}</td>
                                <td>{customer?.stateCode}</td>
                                <td>
                                  {/* {customer?.ttlVal?.toLocaleString()} */}
                                  {convertValue(
                                    customer?.ttlVal,
                                    customerDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                </td>
                                <td>
                                  {customer?.percentageOfTotalSales?.toLocaleString(
                                    'en-In',
                                    {
                                      maximumFractionDigits: 2,
                                      minimumFractionDigits: 2,
                                    },
                                  )}
                                  %
                                </td>
                                <td>
                                  {customer?.invoice?.toLocaleString('en-In', {
                                    maximumFractionDigits: 0,
                                  })}
                                </td>
                                <td>
                                  {convertValue(
                                    customer?.salesPerInvoice,
                                    customerDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                  {/* {customer?.salesPerInvoice?.toLocaleString()} */}
                                </td>
                              </tr>
                            ),
                          )}
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

const gstSupplierDetail = (
  gstFilteredData,
  supplierDetailsUnit,
  setSupplierDetailsUnit,
) => {
  return (
    <>
      <div className={`${styles.wrapper} card border_color border-bottom`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          style={{ cursor: 'default' }}
        >
          <h2 className="mb-0">Suppliers Details</h2>
          <div className="d-flex align-items-center">
            <h5 className={`${styles.light} accordion_Text`}>Unit :</h5>
            <div className="d-flex align-items-center position-relative">
              <select
                onChange={(e) => setSupplierDetailsUnit(e.target.value)}
                className={`${styles.select} ${styles.customSelect} accordion_DropDown form-select`}
                aria-label="Default select example"
              >
                <option selected value={10000000}>
                  Crores
                </option>
                <option value={100000}>Lakhs</option>
              </select>
              <img
                className={`${styles.arrow2} img-fluid`}
                src="/static/inputDropDown.svg"
                alt="arrow"
              />
            </div>
            <span
              data-toggle="collapse"
              data-target="#gstSupplierDetail"
              aria-expanded="true"
              aria-controls="gstSupplierDetail"
            >
              +
            </span>
          </div>
        </div>
        <div
          id="gstSupplierDetail"
          className="collapse"
          aria-labelledby="gstSupplierDetail"
          data-parent="#gstSupplierDetail"
        >
          <div
            className={` ${styles.CustomercardBody} card-body border-top-0 border_color`}
          >
            <div className={` ${styles.content}`}>
              <div className={`${styles.first} card_sub_header text-color`}>
                Recurring Party Purchases In Last 12 Months
              </div>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table1}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      {/* <tr>
                        <th
                          className={`${styles.first} text-color`}
                          colSpan={6}
                        >
                          Recurring Party Purchases In Last 12 Months
                        </th>
                      </tr> */}
                      <tr className={styles.second_head}>
                        <td className="text-nowrap">SUPPLIER NAME</td>
                        <td>PAN</td>
                        <td>PURCHASE</td>
                        <td className="text-nowrap">% OF TOTAL PUR.</td>
                        <td>INVOICES</td>
                        <td className="text-nowrap">PURCHASE PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData &&
                          gstFilteredData?.detail?.supplierDetail?.recurringPartyPurchase?.map(
                            (customer, index) => (
                              <tr key={index}>
                                <td>{customer?.name}</td>
                                <td>{customer?.pan}</td>
                                <td>
                                  {convertValue(
                                    customer?.ttlVal,
                                    supplierDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                  {/* {(
                                    customer?.ttlVal / customerDetailsUnit
                                  )?.toFixed(2)} */}
                                </td>
                                <td>
                                  {customer?.percentageOfTotalPurchase
                                    ? Number(
                                      customer?.percentageOfTotalPurchase,
                                    )?.toLocaleString('en-In', {
                                      maximumFractionDigits: 2,
                                      minimumFractionDigits: 2,
                                    })
                                    : '-'}
                                  %
                                </td>
                                <td>{customer?.invoice}</td>
                                <td>
                                  {convertValue(
                                    customer?.purchasePerInvoice,
                                    supplierDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                  {/* {customer?.purchasePerInvoice?.toFixed(2)} */}
                                </td>
                              </tr>
                            ),
                          )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content}`}>
              <div className={`${styles.first} card_sub_header text-color`}>
                Related Party Purchases In Last 12 Months
              </div>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table1}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      {/* <tr>
                        <th
                          className={`${styles.first} text-color`}
                          colSpan={6}
                        >
                          Related Party Purchases In Last 12 Months
                        </th>
                      </tr> */}
                      <tr className={styles.second_head}>
                        <td className="text-nowrap">SUPPLIER NAME</td>
                        <td>PAN</td>
                        <td>PURCHASE</td>
                        <td className="text-nowrap">% OF TOTAL PUR.</td>
                        <td>INVOICES</td>
                        <td className="text-nowrap">PURCHASE PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData &&
                          gstFilteredData?.detail?.supplierDetail?.relatedPartyPurchase?.map(
                            (customer, index) => (
                              <tr key={index}>
                                <td>{customer?.name}</td>
                                <td>{customer?.pan}</td>
                                <td>
                                  {/* {customer?.ttlVal?.toLocaleString()} */}
                                  {convertValue(
                                    customer?.ttlVal,
                                    supplierDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                </td>
                                <td>
                                  {customer?.percentageOfTotalPurchase?.toLocaleString(
                                    'en-In',
                                    {
                                      maximumFractionDigits: 2,
                                      minimumFractionDigits: 2,
                                    },
                                  )}
                                  %
                                </td>
                                <td>{customer?.invoice?.toLocaleString()}</td>
                                <td>
                                  {convertValue(
                                    customer?.purchasePerInvoice,
                                    supplierDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                  {/* {customer?.purchasePerInvoice?.toLocaleString()} */}
                                </td>
                              </tr>
                            ),
                          )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content}`}>
              {/* <div className={`${styles.first} card_sub_header text-color`}>Top 10 Suppliers</div> */}
              <div className={` ${styles.body} ${styles.body_noscroll}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table1}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr>
                        <th
                          className={`${styles.first} py-0 text-color`}
                          colSpan={6}
                        >
                          Top 10 Suppliers
                          <span className={`${styles.small} text_light`}>
                            (Domestic)
                          </span>
                        </th>
                      </tr>
                      <tr className={styles.second_head}>
                        <td className="text-nowrap">SUPPLIER NAME</td>
                        <td>PAN</td>
                        <td>PURCHASE</td>
                        <td className="text-nowrap">% OF TOTAL PUR.</td>
                        <td>INVOICES</td>
                        <td className="text-nowrap">PURCHASE PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData &&
                          gstFilteredData?.detail?.supplierDetail?.top10Suppliers?.map(
                            (customer, index) => (
                              <tr key={index}>
                                <td>{customer?.name}</td>
                                <td>{customer?.pan}</td>
                                <td>
                                  {/* {customer?.ttlVal?.toLocaleString()} */}
                                  {convertValue(
                                    customer?.ttlVal,
                                    supplierDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                </td>
                                <td>
                                  {checkNan(
                                    Number(customer?.percentageOfTotalPurchase),
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                  %
                                </td>
                                <td>{customer?.invoice}</td>
                                <td>
                                  {convertValue(
                                    customer?.purchasePerInvoice,
                                    supplierDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                  {/* {customer?.purchasePerInvoice?.toLocaleString()} */}
                                </td>
                              </tr>
                            ),
                          )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content} mb-0`}>
              <div className={`${styles.first} card_sub_header text-color`}>
                Statewise Purchase
              </div>
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
                      {/* <tr>
                        <th
                          className={`${styles.first} text-color`}
                          colSpan={6}
                        >
                          Statewise Purchase
                        </th>
                      </tr> */}
                      <tr className={styles.second_head}>
                        <td className="text-nowrap">STATE</td>
                        <td>STATE CODE</td>
                        <td>PURCHASE</td>
                        <td className="text-nowrap">% OF TOTAL PUR.</td>
                        <td>INVOICES</td>
                        <td className="text-nowrap">PURCHASE PER INVOICE</td>
                      </tr>
                      <tbody>
                        {gstFilteredData &&
                          gstFilteredData?.detail?.supplierDetail?.statewisePurchase?.map(
                            (customer, index) => (
                              <tr key={index}>
                                <td>{customer?.stateName}</td>
                                <td>{customer?.stateCode?.toLocaleString()}</td>
                                <td>
                                  {/* {customer?.ttlVal?.toLocaleString()} */}
                                  {convertValue(
                                    customer?.ttlVal,
                                    supplierDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                </td>
                                <td>
                                  {customer?.percentageOfTotalPurchase?.toLocaleString(
                                    'en-In',
                                    {
                                      maximumFractionDigits: 2,
                                      minimumFractionDigits: 2,
                                    },
                                  )}
                                  %
                                </td>
                                <td>
                                  {customer?.invoice?.toLocaleString('en-In', {
                                    maximumFractionDigits: 0,
                                  })}
                                </td>
                                <td>
                                  {convertValue(
                                    customer?.purchasePerInvoice,
                                    supplierDetailsUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                  {/* {customer?.purchasePerInvoice?.toLocaleString()} */}
                                </td>
                              </tr>
                            ),
                          )}
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

const gstSales = (
  head,
  gstFilteredData,
  salesUnit,
  setSalesUnit,
  arrSales,
  getCompliencePeriod,
  finacialYear,
) => {
  return (
    <>
      <div className={`${styles.wrapper} card border_color border-bottom`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          style={{ cursor: 'default' }}
        >
          <h2 className="mb-0">{head}</h2>
          <div className="d-flex align-items-center">
            <h5 className={`${styles.light} accordion_Text`}>Unit :</h5>
            <div className="d-flex align-items-center position-relative">
              <select
                onClick={(e) => setSalesUnit(e.target.value)}
                className={`${styles.select} ${styles.customSelect} accordion_DropDown form-select`}
                aria-label="Default select example"
              >
                <option selected value={10000000}>
                  Crores
                </option>
                <option value={100000}>Lakhs</option>
              </select>
              <img
                className={`${styles.arrow2} img-fluid`}
                src="/static/inputDropDown.svg"
                alt="arrow"
              />
            </div>
            <span
              data-toggle="collapse"
              data-target="#gstSalesAndPurchase"
              aria-expanded="true"
              aria-controls="gstSalesAndPurchase"
            >
              +
            </span>
          </div>
        </div>
        <div
          id="gstSalesAndPurchase"
          className="collapse"
          aria-labelledby="gstSalesAndPurchase"
          data-parent="#profileAccordion"
        >
          <div
            className={` ${styles.CustomercardBody} card-body border-top-0 border_color`}
          >
            <div className={` ${styles.content} mb-2 pb-0`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr>
                        <th
                          className={`${styles.first} text-color`}
                          colSpan={13}
                        >
                          Period:{' '}
                          {/* {getCompliencePeriod(gstFilteredData?.detail?.other?.period?.current?.financialPeriod) } */}
                          {finacialYear('current')}
                        </th>
                      </tr>
                      <tr className={styles.second_head}>
                        <td width="16%">REVENUE BREAKUP</td>

                        {gstFilteredData?.detail?.salesDeatail?.revenueBreakup
                          ?.slice()
                          ?.reverse()
                          .map((month, index) => (
                            <td width="7%" key={index}>
                              {moment(month.retPeriod, 'MMYYYY').format(
                                `MMM'YY`,
                              )}
                            </td>
                          ))}
                      </tr>
                      <tbody>
                        <tr>
                          <td>Total Sales</td>
                          {gstFilteredData &&
                            gstFilteredData?.detail?.salesDeatail
                              ?.revenueBreakup?.length > 0 &&
                            gstFilteredData?.detail?.salesDeatail?.revenueBreakup
                              ?.slice()
                              ?.reverse()
                              .map((sales, index) => (
                                <td key={index}>
                                  {convertValue(
                                    sales?.totalSales,
                                    salesUnit,
                                  )?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  })}
                                  {/* {sales?.totalSales?.toLocaleString()} */}
                                </td>
                              ))}
                        </tr>
                        <tr>
                          <td>
                            <span style={{ textTransform: 'uppercase' }}>
                              B2B{' '}
                            </span>
                            Sales
                          </td>
                          {gstFilteredData?.detail?.salesDeatail?.revenueBreakup
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {/* {sales?.b2bSales?.toLocaleString()} */}
                                {convertValue(
                                  sales?.b2bSales,
                                  salesUnit,
                                )?.toLocaleString('en-In', {
                                  maximumFractionDigits: 2,
                                  minimumFractionDigits: 2,
                                })}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <td>
                            <span style={{ textTransform: 'uppercase' }}>
                              B2C{' '}
                            </span>
                            Sales
                          </td>
                          {gstFilteredData?.detail?.salesDeatail?.revenueBreakup
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {/* {sales?.b2cSales?.toLocaleString()} */}
                                {convertValue(
                                  sales?.b2cSales,
                                  salesUnit,
                                )?.toLocaleString('en-In', {
                                  maximumFractionDigits: 2,
                                  minimumFractionDigits: 2,
                                })}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <td>Export Sales</td>
                          {gstFilteredData?.detail?.salesDeatail?.revenueBreakup
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {convertValue(
                                  sales?.exportSales,
                                  salesUnit,
                                )?.toLocaleString('en-In', {
                                  maximumFractionDigits: 2,
                                  minimumFractionDigits: 2,
                                })}
                                {/* {sales?.exportSales?.toLocaleString()} */}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <td>Growth Trend</td>
                          {arrSales &&
                            arrSales?.length > 0 &&
                            arrSales
                              ?.slice()
                              ?.reverse()
                              .map((sales, index) => (
                                <td
                                  style={{
                                    color:
                                      Math.sign(sales) === -1 ? 'red' : 'black',
                                  }}
                                >
                                  {checkNan(sales)?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  }) ?? ''}{' '}
                                  %
                                </td>
                              ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content} mb-0 pb-0`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr className={styles.second_head}>
                        <td width="16%" className="text-nowrap">
                          REVENUE %
                        </td>
                        {gstFilteredData?.detail?.salesDeatail?.revenuePercentage
                          ?.slice()
                          ?.reverse()
                          .map((month, index) => (
                            <td width="7%" key={index}>
                              {moment(month.retPeriod, 'MMYYYY').format(
                                `MMM'YY`,
                              )}
                            </td>
                          ))}
                      </tr>
                      <tbody>
                        <tr>
                          <td>New Customers</td>
                          {gstFilteredData?.detail?.salesDeatail?.revenuePercentage
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {/* {sales?.newCustomer?.toFixed(2)} */}
                                {sales?.newCustomer?.toLocaleString('en-In', {
                                  maximumFractionDigits: 2,
                                  minimumFractionDigits: 2,
                                })}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <td>Recurring Customers</td>
                          {gstFilteredData?.detail?.salesDeatail?.revenuePercentage
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {/* {sales?.RecurringCustomer?.toFixed(2)} */}
                                {sales?.RecurringCustomer?.toLocaleString(
                                  'en-In',
                                  {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  },
                                )}
                              </td>
                            ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content} mb-0 pb-0`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr className={styles.second_head}>
                        <td width="16%">CLIENTS</td>
                        {gstFilteredData?.detail?.salesDeatail?.clients
                          ?.slice()
                          ?.reverse()
                          .map((month, index) => (
                            <td width="7%" key={index}>
                              {moment(month.retPeriod, 'MMYYYY').format(
                                `MMM'YY`,
                              )}
                            </td>
                          ))}
                      </tr>
                      <tbody>
                        <tr>
                          <td>New</td>
                          {gstFilteredData?.detail?.salesDeatail?.clients
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {sales?.new?.toLocaleString('en-In', {
                                  maximumFractionDigits: 0,
                                })}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <td>Recurring</td>
                          {gstFilteredData?.detail?.salesDeatail?.clients
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {sales?.Recurring?.toLocaleString('en-In', {
                                  maximumFractionDigits: 0,
                                })}
                              </td>
                            ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content} mb-0 pb-0`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr className={styles.second_head}>
                        <td width="16%" className="text-nowrap">
                          NO. OF INVOICES
                        </td>
                        {gstFilteredData?.detail?.salesDeatail?.numberOfInvoices
                          ?.slice()
                          ?.reverse()
                          .map((month, index) => (
                            <td width="7%" key={index}>
                              {moment(month.retPeriod, 'MMYYYY').format(
                                `MMM'YY`,
                              )}
                            </td>
                          ))}
                      </tr>
                      <tbody>
                        <tr>
                          <td>Total</td>
                          {gstFilteredData?.detail?.salesDeatail?.numberOfInvoices
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {sales?.total?.toLocaleString()}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <td style={{ textTransform: 'uppercase' }}>B2B</td>
                          {gstFilteredData?.detail?.salesDeatail?.numberOfInvoices
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {sales?.b2b?.toLocaleString()}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <td style={{ textTransform: 'uppercase' }}>B2C</td>
                          {gstFilteredData?.detail?.salesDeatail?.numberOfInvoices
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {sales?.b2c?.toLocaleString()}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <td>Export</td>
                          {gstFilteredData?.detail?.salesDeatail?.numberOfInvoices
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {sales?.export?.toLocaleString()}
                              </td>
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
const gstPurchase = (
  head,
  gstFilteredData,
  purchasesUnit,
  setPurchasesUnit,
  arr,
  getCompliencePeriod,
  finacialYear,
) => {
  return (
    <>
      <div
        className={`${styles.wrapper} ${styles.lastComponent} card border_color border-bottom`}
      >
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          style={{ cursor: 'default' }}
        >
          <h2 className="mb-0">{head}</h2>
          <div className="d-flex align-items-center">
            <h5 className={`${styles.light} accordion_Text`}>Unit :</h5>
            <div className="d-flex align-items-center position-relative">
              <select
                onChange={(e) => setPurchasesUnit(e.target.value)}
                className={`${styles.select} ${styles.customSelect} accordion_DropDown form-select`}
                aria-label="Default select example"
              >
                <option selected value={10000000}>
                  Crores
                </option>
                <option value={100000}>Lakhs</option>
              </select>
              <img
                className={`${styles.arrow2} img-fluid`}
                src="/static/inputDropDown.svg"
                alt="arrow"
              />
            </div>
            <span
              data-toggle="collapse"
              data-target="#purchase"
              aria-expanded="true"
              aria-controls="purchase"
            >
              +
            </span>
          </div>
        </div>
        <div
          id="purchase"
          className="collapse"
          aria-labelledby="purchase"
          data-parent="#profileAccordion"
        >
          <div
            className={` ${styles.CustomercardBody} card-body border-top-0 border_color`}
          >
            <div className={` ${styles.content} mb-0 pb-0`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr>
                        <th
                          className={`${styles.first} text-color`}
                          colSpan={13}
                        >
                          Period:{' '}
                          {/* {getCompliencePeriod(gstFilteredData?.detail?.other?.period?.current?.financialPeriod) } */}
                          {finacialYear('current')}
                        </th>
                      </tr>
                      <tr className={styles.second_head}>
                        <td width="16%">PURCHASES</td>
                        {gstFilteredData?.detail?.purchaseDetail?.purchases
                          ?.slice()
                          ?.reverse()
                          .map((month, index) => (
                            <td width="7%" key={index}>
                              {moment(month.retPeriod, 'MMYYYY').format(
                                `MMM'YY`,
                              )}
                            </td>
                          ))}
                      </tr>
                      <tbody>
                        <tr>
                          <td>Total Purchase</td>
                          {gstFilteredData?.detail?.purchaseDetail?.purchases
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {convertValue(
                                  sales?.totalPurchase,
                                  purchasesUnit,
                                )?.toLocaleString('en-In', {
                                  maximumFractionDigits: 2,
                                  minimumFractionDigits: 2,
                                })}
                                {/* {sales?.totalPurchase?.toLocaleString()} */}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <td>
                            <span style={{ textTransform: 'uppercase' }}>
                              B2B{' '}
                            </span>
                            Purchase
                          </td>
                          {gstFilteredData?.detail?.purchaseDetail?.purchases
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {convertValue(
                                  sales?.b2b,
                                  purchasesUnit,
                                )?.toLocaleString('en-In', {
                                  maximumFractionDigits: 2,
                                  minimumFractionDigits: 2,
                                })}
                                {/* {sales?.b2b?.toLocaleString()} */}
                              </td>
                            ))}
                        </tr>
                        {/* <tr>
                          <td><span style={{ textTransform: 'uppercase' }}>B2C </span>Purchase</td>
                          {gstFilteredData?.detail?.purchaseDetail?.purchases?.slice()?.reverse().map(
                            (sales, index) => (
                              <td key={index}>
                                {sales?.b2c?.toLocaleString()}
                              </td>
                            ),
                          )}
                        </tr> */}
                        {/* <tr>
                          <td>Import</td>
                          {gstFilteredData?.detail?.purchaseDetail?.purchases.map(
                            (sales, index) => (
                              <td key={index}>
                                {sales?.import?.toLocaleString()}
                              </td>
                            ),
                          )}
                        </tr> */}
                        <tr>
                          <td>Others</td>
                          {gstFilteredData?.detail?.purchaseDetail?.purchases
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {convertValue(
                                  sales?.others,
                                  purchasesUnit,
                                )?.toLocaleString('en-In', {
                                  maximumFractionDigits: 2,
                                  minimumFractionDigits: 2,
                                })}
                                {/* {sales?.others?.toLocaleString()} */}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <td>Growth</td>
                          {arr &&
                            arr?.length > 0 &&
                            arr
                              ?.slice()
                              ?.reverse()
                              .map((sales, index) => (
                                <td
                                  style={{
                                    color:
                                      Math.sign(sales) === -1 ? 'red' : 'black',
                                  }}
                                  key={index}
                                >
                                  {checkNan(sales)?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  }) ?? ''}{' '}
                                  %
                                </td>
                              ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content} mb-0 pb-0`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr className={styles.second_head}>
                        <td width="16%">PURCHASE %</td>
                        {gstFilteredData?.detail?.purchaseDetail?.purchasesPercentage
                          ?.slice()
                          ?.reverse()
                          .map((month, index) => (
                            <td width="7%" key={index}>
                              {moment(month.retPeriod, 'MMYYYY').format(
                                `MMM'YY`,
                              )}
                            </td>
                          ))}
                      </tr>
                      <tbody>
                        <tr>
                          <td>New Suppliers</td>
                          {gstFilteredData?.detail?.purchaseDetail?.purchasesPercentage
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {sales?.newSuppliers?.toLocaleString('en-In', {
                                  maximumFractionDigits: 2,
                                  minimumFractionDigits: 2,
                                })}
                                {/* {sales?.newSuppliers?.toLocaleString()} */}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <td>Recurring Suppliers</td>
                          {gstFilteredData?.detail?.purchaseDetail?.purchasesPercentage
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {sales?.recurringSuppliers?.toLocaleString(
                                  'en-In',
                                  {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  },
                                )}
                                {/* {sales?.recurringSuppliers?.toLocaleString()} */}
                              </td>
                            ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content} mb-0 pb-0`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr className={styles.second_head}>
                        <td width="16%">SUPPLIERS</td>
                        {gstFilteredData?.detail?.purchaseDetail?.suppliers
                          ?.slice()
                          ?.reverse()
                          .map((month, index) => (
                            <td width="7%" key={index}>
                              {moment(month.retPeriod, 'MMYYYY').format(
                                `MMM'YY`,
                              )}
                            </td>
                          ))}
                      </tr>
                      <tbody>
                        <tr>
                          <td>New</td>
                          {gstFilteredData?.detail?.purchaseDetail?.suppliers
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {sales?.new?.toLocaleString('en-In', {
                                  maximumFractionDigits: 0,
                                })}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <td>Recurring</td>
                          {gstFilteredData?.detail?.purchaseDetail?.suppliers
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {sales?.recurring?.toLocaleString('en-In', {
                                  maximumFractionDigits: 0,
                                })}
                              </td>
                            ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${styles.content} mb-0 pb-0`}>
              <div className={` ${styles.body}`}>
                <div className={`${styles.scrollouter}`}>
                  <div className={`${styles.scrollInner}`}>
                    <table
                      className={`${styles.table2}  table`}
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tr className={styles.second_head}>
                        <td width="16%">NO. OF INVOICES</td>
                        {gstFilteredData?.detail?.purchaseDetail?.numberOfInvoices
                          ?.slice()
                          ?.reverse()
                          .map((month, index) => (
                            <td width="7%" key={index}>
                              {moment(month.retPeriod, 'MMYYYY').format(
                                `MMM'YY`,
                              )}
                            </td>
                          ))}
                      </tr>
                      <tbody>
                        <tr>
                          <td>Total</td>
                          {gstFilteredData?.detail?.purchaseDetail?.numberOfInvoices
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {sales?.total?.toLocaleString('en-In', {
                                  maximumFractionDigits: 0,
                                })}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <td style={{ textTransform: 'uppercase' }}>B2B</td>
                          {gstFilteredData?.detail?.purchaseDetail?.numberOfInvoices
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {sales?.b2b?.toLocaleString('en-In', {
                                  maximumFractionDigits: 0,
                                })}
                              </td>
                            ))}
                        </tr>

                        <tr>
                          <td>Other</td>
                          {gstFilteredData?.detail?.purchaseDetail?.numberOfInvoices
                            ?.slice()
                            ?.reverse()
                            .map((sales, index) => (
                              <td key={index}>
                                {sales?.others?.toLocaleString('en-In', {
                                  maximumFractionDigits: 0,
                                })}
                              </td>
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
