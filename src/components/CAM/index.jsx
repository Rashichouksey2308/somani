/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect,useRef  } from 'react'
import styles from './index.module.scss'
import moment from 'moment'
import { Row, Col } from 'react-bootstrap'
import { Doughnut, Line } from 'react-chartjs-2'
import {
  Chart,
  ArcElement,
  registerables,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
} from 'chart.js'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllOrders } from 'redux/registerBuyer/action'
import { GetCompanyDetails } from 'redux/companyDetail/action'
import { GetDocuments } from 'redux/creditQueueUpdate/action'
import { ViewDocument } from 'redux/ViewDoc/action'
import { toast } from 'react-toastify'
import _get from 'lodash/get'
import { CovertvaluefromtoCR ,checkNan} from '../../utils/helper'
import { check } from 'prettier'

Chart.register(
  ArcElement,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
)

function Index({
  fetchingKarzaGst,
  gstData,
  camData,
  companyData,
  addApproveRemarkArr,
  approveComment,
  saveApprovedCreditData,
  approvedCredit,
}) {
  const dispatch = useDispatch()
  console.log(companyData, 'companyData')
  // console.log(fetchingKarzaGst, 'fetchingKarzaGst')
  useEffect(() => {
    if (window) {
      let id1 = sessionStorage.getItem('orderID')
      let id2 = sessionStorage.getItem('companyID')
      dispatch(GetAllOrders({ orderId: id1 }))
      dispatch(GetCompanyDetails({ company: id2 }))
      // dispatch(GetDocuments(`?order=${id1}`))
    }
  }, [dispatch, fetchingKarzaGst])
  useEffect(() => {
    let id1 = sessionStorage.getItem('orderID')
    dispatch(GetDocuments(`?order=${id1}`))
  }, [dispatch])

  console.log(camData, 'THIS IS CAM DATA')
  // console.log(companyData, 'THIS IS COMPANY DATA')

  const filteredCreditRating =
    camData?.company?.creditLimit?.creditRating?.filter((rating) => {
      return camData?._id === rating.order
    })

  const { documentsFetched } = useSelector((state) => state.review)

  console.log(documentsFetched, 'THIS IS DOCUMENTS FETCHED')

  const onApprove = (name, value) => {
    // if (gettingPercentageCredit()) {
    saveApprovedCreditData(name, value)
    // }
  }
  const onApproveOrder = (name, value) => {
    // if (gettingPercentageOrder()) {
    saveApprovedCreditData(name, value)
    // }
  }

  // console.log(filteredCreditRating, 'THIS IS FILTERED CREDIT RATING IN CAM')

  const [sanctionComments, setSanctionComments] = useState('')

  const latestBalanceData = _get(companyData, 'financial.balanceSheet[0]', {})


  const previousBalanceData = _get(companyData, 'financial.balanceSheet[1]', {})

  const latestIncomeData = _get(companyData, 'financial.incomeStatement[0]', {})
  const previousIncomeData = _get(
    companyData,
    'financial.incomeStatement[1]',
    {},
  )

  const latestYearData = _get(companyData, 'financial.ratioAnalysis[0]', {})
  const previousYearData = _get(companyData, 'financial.ratioAnalysis[1]', {})

  const openChargesLength = () => {
    const filteredData =
      camData?.company?.detailedCompanyInfo?.financial?.openCharges?.filter(
        (data) => data.dateOfSatisfactionOfChargeInFull === null,
      )

    const length = filteredData?.length

    return length
  }

  const primaryBankName = () => {
    let filteredData = []
     filteredData = camData?.company?.debtProfile?.filter(
      (data) => data.primaryBank,
    ) || [] 
    
    const length = _get(filteredData[0], 'bankName', '')

    return length
  }


  const latestAuditorData = _get(
    camData,
    'company.detailedCompanyInfo.profile.auditorDetail[0]',
    {},
  )
  const previousAuditorData = _get(
    camData,
    'company.detailedCompanyInfo.profile.auditorDetail[1]',
    {},
  )

  const [tempArr, setTempArr] = useState([
    {
      name: "Bindu Singh",
      value: 66705,
      color: "#3687E8"
    },
    {
      name: "Bindu Singh",
      value: 66705,
      color: "#43C34D"
    },
    {
      name: "Bindu Singh",
      value: 66705,
      color: "#FF9D00"
    },])

  let colors = [
    {
      primary: 'rgba(54, 135, 232, 0.1)',
      secondary: '#3687E8',
    },
    {
      primary: 'rgba(67, 195, 77, 0.1)',
      secondary: '#43C34D',
    },
    {
      primary: '#FFECCF',
      secondary: '#FF9D00',
    },
  ]
  let randColor =
    colors[Math.floor(Math.random() * colors.length)]


   useEffect(() => {
    let data;
    if(camData?.company?.detailedCompanyInfo?.profile?.shareholdingPattern){
  data = camData?.company?.detailedCompanyInfo?.profile?.shareholdingPattern.forEach((element, index) => {
      if (element.fullName === '') {
      } else {
        if (index < 2) {

          setTempArr(prevState => {
            return [...prevState, {
              ...prevState[index],
              name: element.fullName,
              value: element.numberOfShares
            }]
          })
        }
      }
    })
  camData?.company?.detailedCompanyInfo?.profile?.shareholdingPattern.forEach((element, index) => {

    if (element.fullName === '') {
    } else {
      if (index <= 2) {
        tempArr.forEach((el, index2) => {
          if (index = index2) {
            el.name = element.fullName
            el.value = element.numberOfShares
          }
        })
      }
    }
  })
    }
   
    console.log(camData, 'dhjj')
  }, [camData])
  // let tempArr = [

  // {
  //   name: "Bindu Singh",
  //   value: 66705,
  //   color: "#3687E8"
  // },
  // {
  //   name: "Bindu Singh",
  //   value: 66705,
  //   color: "#43C34D"
  // },
  // {
  //   name: "Bidu Singh",
  //   value: 66705,
  //   color: "#FF9D00"
  // },


  // ]

 
  // console.log(tempArr, 'tempArr')


  let data = {
    labels: ['Sail', 'Jindal Grou', 'SR Steel'],
    datasets: [
      {
        label: '',
        data: [25, 20, 55],

        backgroundColor: ['#4CAF50', '#FF9D00', '#2884DE'],
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
  const covertMonths = (months) => {
    const CovertedMonts = []
    months?.map((month) => {
      let convertedMonths = []
      CovertedMonts.push(
        ...convertedMonths,
        moment(month, 'MMYYYY').format('MMMM'),
      )
    })
    return CovertedMonts
  }

const lineOption = {
tension: 0.2,

fill: true,

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
  // external: externalTooltipHandler
}
}

}
  function createGradient(ctx, area,color,color2) {
    // const colorStart = faker.random.arrayElement(colors);
    // const colorMid = faker.random.arrayElement(
    //   colors.filter(color => color !== colorStart)
    // );
    // const colorEnd = faker.random.arrayElement(
    //   colors.filter(color => color !== colorStart && color !== colorMid)
    // );
    console.log( 'cts',color2,color)

    var gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, color2);
    gradient.addColorStop(1, color);

    console.log(gradient, "gradient")
    return gradient;
  }
const chartRef = useRef(null)
const chartRef2 = useRef(null)
const [chartData, setChartData] = useState({
datasets: [],
})
const [chartData2, setChartData2] = useState({
datasets: [],
})
  useEffect(() => {
  

const chart = chartRef.current;
const chart2 = chartRef2.current;


if (!chart) {
return
}

   
    
  const data = {
     labels: covertMonths(gstData?.detail?.summaryCharts?.grossRevenue?.month),
    datasets: [
      {
        label: 'First dataset',
        data: gstData?.detail?.summaryCharts?.grossRevenue?.month,
        fill: true,
        backgroundColor: createGradient(chart.ctx, chart.chartArea,"rgb(71, 145, 255,0.1)","rgb(71, 145, 255,0.2)"),
        borderColor: '#2979F2',
      },
    ],
    };
    if (!chart2) {
      return
    }

     
   
    const data2 = {
    labels: covertMonths(gstData?.detail?.summaryCharts?.grossPurchases?.month),
    datasets: [
    {
    label: 'First dataset',
    data: gstData?.detail?.summaryCharts?.grossPurchases?.month,
    fill: true,
    backgroundColor:createGradient(chart2.ctx, chart2.chartArea,"rgb(250, 95, 28,0.1)","rgb(250, 95, 28,0.2)"),
    borderColor: '#FA5F1C',
    },
    ],
    };
   

    setChartData(data);
    setChartData2(data2);
   
  }, [chartRef.current,chartRef2.current,]);
  // let TotalRevenueDataLine = {
  //   labels: covertMonths(gstData?.detail?.summaryCharts?.grossRevenue?.month),
  //   datasets: [
  //     {
  //       label: 'First dataset',
  //       data: gstData?.detail?.summaryCharts?.grossRevenue?.month,
  //       fill: true,
  //       backgroundColor: createGradient(chart2.ctx, chart2.chartArea,"rgb(71, 145, 255,0.1)","rgb(71, 145, 255,0.2)"),
  //       borderColor: '#2979F2',
  //     },
  //   ],
  // }

  // let TotalPurchasesDataLine = {
  //   labels: covertMonths(gstData?.detail?.summaryCharts?.grossPurchases?.month),
  //   datasets: [
  //     {
  //       label: 'First dataset',
  //       data: gstData?.detail?.summaryCharts?.grossPurchases?.month,
  //       fill: true,
  //       backgroundColor: 'rgba(75,192,192,1)',
  //       borderColor: 'rgba(75,192,192,1)',
  //     },
  //   ],
  // }
  const [rating,setRating]=useState(`rotate(0deg)`);
  useEffect(() => {
   if(filteredCreditRating){
    getRotate(filteredCreditRating[0]?.totalRating)
    //  getRotate(2)
   }
  },[filteredCreditRating])

  const getRotate=(rat=1)=>{
    let r=Math.round(rat)
    if(r==0){
      setRating(`rotate(90deg)`)
    }
    if(r==1){
      setRating(`rotate(90deg)`)
    }
    if(r==2){
      setRating(`rotate(130deg)`)
    }
    if(r==3){
      setRating(`rotate(180deg)`)
    }
    if(r==4){
      setRating(`rotate(205deg)`)
    }
    if(r==5){
      setRating(`rotate(225deg)`)
    }
    if(r==6){
      setRating(`rotate(250deg)`)
    }
    if(r==7){
      setRating(`rotate(270deg)`)
    }
    
    if(r==8){
      setRating(`rotate(310deg)`)
    }
    if(r==9){
      setRating(`rotate(330deg)`)
    }
    if(r==10){
      setRating(`rotate(2deg)`)
    }
  }
  return (
    <>
      {basicInfo(camData)}
      {supplierInfo(camData)}
      {customerRating(camData,filteredCreditRating,rating)}
      {groupExposure(camData)}
      {orderSummary(camData)}
      {creditProfile(
        camData,
        openChargesLength,
        primaryBankName,
        latestAuditorData,
        previousAuditorData,
      )}
      {directorDetails(camData)}
      {shareHolding(data, options, tempArr, camData)}
      {chargeDetails(data, options, tempArr, camData)}
      {debtProfile(data, options, tempArr, camData)}
      {operationalDetails(camData)}
      {revenuDetails(gstData)}
      {trends(
        chartData,
        chartRef,
        chartRef2,
        chartData2,
        lineOption,
        gstData,
      )}
      {skewness(data, options, tempArr, gstData)}
      {financeDetails(
        data,
        options,
        tempArr,
        latestBalanceData,
        previousBalanceData,
        companyData,
        latestYearData,
        previousYearData,
      )}
      {compilanceStatus(companyData, camData)}
      {strengthAndWeakness(camData)}
      {sectionTerms(
        camData,
        sanctionComments,
        setSanctionComments,
        addApproveRemarkArr,
        approveComment,
        filteredCreditRating,
        saveApprovedCreditData,
        onApprove,
        onApproveOrder,
      )}
      {Documents(documentsFetched)}
    </>
  )
}

export default Index

const basicInfo = (camData) => {
  // console
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#basicInfo"
          aria-expanded="true"
          aria-controls="basicInfo"
        >
          <h2 className="mb-0">Basic Info</h2>
          <span>+</span>
        </div>
        <div
          id="basicInfo"
          className="collapse"
          aria-labelledby="basicInfo"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.info_wrapper}  card-body border_color`}>
            <div
              className={`${styles.content} ${styles.highlight} card_sub_header  mb-4`}
            >
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span
                    className={`${styles.key} label1`}
                    style={{ background: 'transparent' }}
                  >
                    Transaction Type
                  </span>
                  <span className={`${styles.value} value pr-5`}>Domestic</span>
                </Col>
              </Row>
            </div>
            <div className={`${styles.content} mb-4`}>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label1`}>
                    Sourcing Channel
                  </span>
                  <span className={`${styles.value} value pr-5`}>
                    {camData?.company?.sourceChanel}
                  </span>
                </Col>
                <Col
                  className={` col-md-offset-2 d-flex justify-content-between`}
                  md={5}
                >
                  <span className={`${styles.key} label1 ml-5 pl-5`}>City</span>
                  <span className={`${styles.value} value`}>
                  {camData?.company?.detailedCompanyInfo?.profile?.companyDetail?.city}

                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label1`}>Buyer</span>
                  <span className={`${styles.value} value pr-5`}>
                    {camData?.company?.companyName}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label1 ml-5 pl-5`}>
                    State
                  </span>
                  <span className={`${styles.value} value`}>
                  {camData?.company?.detailedCompanyInfo?.profile?.companyDetail?.state}

                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label1`}>
                    Type of Business
                  </span>
                  <span className={`${styles.value} value pr-5`}>
                    {camData?.company?.typeOfBusiness}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label1 ml-5 pl-5`}>
                    Industry
                  </span>
                  <span className={`${styles.value} value`}>
                    {camData?.company?.typeOfBusiness}
                  </span>
                </Col>
              </Row>
            </div>
            <div
              className={`${styles.content} ${styles.highlight} card_sub_header  mb-4`}
            >
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label1`}>Order Value</span>
                  <span className={`${styles.value} value pr-5`}>
                    {CovertvaluefromtoCR(camData?.orderValue)} {camData?.unitOfValue}
                  </span>
                </Col>
                <Col
                  className={` col-md-offset-2 d-flex justify-content-between`}
                  md={5}
                >
                  <span className={`${styles.key} label1 ml-5 pl-5`}>
                    Commodity
                  </span>
                  <span className={`${styles.value} value`}>
                    {camData?.commodity}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label1`}>Quantity</span>
                  <span className={`${styles.value} value pr-5`}>
                    {camData?.quantity} {camData?.unitOfQuantity.toUpperCase()}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label1 ml-5 pl-5`}>
                    Supplier
                  </span>
                  <span className={`${styles.value} value`}>
                    {camData?.supplierName}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label1`}>
                    Country of Origin
                  </span>
                  <span className={`${styles.value} value pr-5`}>
                    {camData?.countryOfOrigin}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label1 ml-5 pl-5`}>
                    Transaction Period
                  </span>
                  <span className={`${styles.value} value`}>
                    {camData?.transactionPeriodDays}
                  </span>
                </Col>
              </Row>
            </div>
            <div className={`${styles.content} mb-4`}>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label1`}>
                    Port of Loading
                  </span>
                  <span className={`${styles.value} value pr-5`}>
                    {camData?.portOfDischarge}
                  </span>
                </Col>
                <Col
                  className={` col-md-offset-2 d-flex justify-content-between`}
                  md={5}
                >
                  <span className={`${styles.key} label1 ml-5 pl-5`}>
                    Port of Discharge
                  </span>
                  <span className={`${styles.value} value`}>
                    {camData?.portOfDischarge}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label1`}>
                    Exp. Date of Shipment
                  </span>
                  <span className={`${styles.value} value pr-5`}>
                    {/* {camData?.ExpectedDateOfShipment.split('T')[0]} */}
                    {moment(
                      camData?.ExpectedDateOfShipment?.slice(0, 10),
                      'YYYY-MM-DD',
                      true,
                    ).format('DD-MM-YYYY')}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label1 ml-5 pl-5`}>
                    ETA at Discharge port
                  </span>
                  <span className={`${styles.value} value`}>
                    {/* {
                      camData?.shipmentDetail?.ETAofDischarge?.fromDate?.split(
                        'T',
                      )[0]
                    } */}
                    {moment(
                      camData?.shipmentDetail?.ETAofDischarge?.fromDate?.slice(
                        0,
                        10,
                      ),
                      'YYYY-MM-DD',
                      true,
                    ).format('DD-MM-YYYY')}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label1`}>Laycan from</span>
                  <span className={`${styles.value} value pr-5`}>
                    {/* {camData?.shipmentDetail?.loadPort?.fromDate?.split('T')[0]} */}
                    {moment(
                      camData?.shipmentDetail?.loadPort?.fromDate?.slice(0, 10),
                      'YYYY-MM-DD',
                      true,
                    ).format('DD-MM-YYYY')}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={5}>
                  <span className={`${styles.key} label1 ml-5 pl-5`}>
                    Laycan to
                  </span>
                  <span className={`${styles.value} value`}>
                    {/* {camData?.shipmentDetail?.loadPort?.toDate?.split('T')[0]} */}
                    {moment(
                      camData?.shipmentDetail?.loadPort?.toDate?.slice(0, 10),
                      'YYYY-MM-DD',
                      true,
                    ).format('DD-MM-YYYY')}
                  </span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const supplierInfo = (camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#supplierInfo"
          aria-expanded="true"
          aria-controls="supplierInfo"
        >
          <h2 className="mb-0">Supplier Info</h2>
          <span>+</span>
        </div>
        <div
          id="supplierInfo"
          className="collapse"
          aria-labelledby="supplierInfo"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.info_wrapper}  card-body border_color`}>
            <div className={`${styles.content} mb-4`}>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1`}>
                    No. of Shipments
                  </span>
                  <span className={`${styles.value} value pr-5`}>
                    {camData?.supplierCredential?.shipmentNumber}
                  </span>
                </Col>
                <Col
                  className={` col-md-offset-2 d-flex justify-content-between`}
                  md={6}
                >
                  <span className={`${styles.key} label1 pl-5`}>
                    Port of Destination
                  </span>
                  <span className={`${styles.value} value`}>
                    {camData?.supplierCredential?.portOfDestination}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1`}>
                    No. of Consignees
                  </span>
                  <span className={`${styles.value} value pr-5`}>
                    {camData?.supplierCredential?.consigneesNumber}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1 pl-5`}>
                    Latest Shipment date
                  </span>
                  <span className={`${styles.value} value`}>
                    {
                      camData?.supplierCredential?.latestShipmentDate?.split(
                        'T',
                      )[0]
                    }
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1`}>
                    No. of HS codes
                  </span>
                  <span className={`${styles.value} value pr-5`}>
                    {camData?.supplierCredential?.HSCodesNumber}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1 pl-5`}>
                    Oldest shipment date
                  </span>
                  <span className={`${styles.value} value`}>
                    {
                      camData?.supplierCredential?.oldestShipmentDate?.split(
                        'T',
                      )[0]
                    }
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1`}>
                    Country of Origins
                  </span>
                  <span className={`${styles.value} value pr-5`}>
                    {camData?.supplierCredential?.countryOfOrigin}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1 pl-5`}>
                    Commodity to total trade (24 months)
                  </span>
                  <span
                    className={`${styles.value} ${styles.danger_highlight} value`}
                  >
                    {camData?.supplierCredential?.commodityOfTotalTrade} %
                  </span>
                </Col>
              </Row>
            </div>
            <div className={`${styles.remark_Wrapper}`}>
              <p className={`${styles.remark_head} label_heading`}>Remark</p>
              <p>{camData?.supplierCredential?.remarks}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const groupExposure = (camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#groupExposure"
          aria-expanded="true"
          aria-controls="groupExposure"
        >
          <h2 className="mb-0">Group Exposure Details</h2>
          <span>+</span>
        </div>
        <div
          id="groupExposure"
          className="collapse"
          aria-labelledby="groupExposure"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.info_wrapper} card-body border_color`}>
            <Row className={`${styles.row}`}>
              {camData &&
                camData?.company?.groupExposureDetail?.map((exp, index) => {
                  let name = exp?.name?.split(' ') ?? 'NA'
                  console.log(name, 'thirdkjdfbh')
                  return (
                    <Col key={index} md={4}>
                      <div className={`${styles.exposureCard}`}>
                        <Row>
                          <Col
                            sm={12}
                            className={`d-flex justify-content-start align-content-center  mb-5`}
                          >
                            <div className={`${styles.icon} `}>
                              <span
                                className={`d-flex justify-content-center align-content-center`}
                              >
                                {name?.map((item, index) => {
                                  if (index < 2) {
                                    return item?.charAt(0).toUpperCase()
                                  }
                                })}
                              </span>
                            </div>

                            <span className={` ${styles.name} ml-3  `}>
                              {exp.name}
                            </span>
                          </Col>
                          <Col sm={12} className={`${styles.limit}   mb-5`}>
                            <div
                              className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                            >
                              <div className={`${styles.limit_box} `}>
                                <span className={`${styles.limit_label} `}>
                                  LIMIT
                                </span>
                              </div>
                              <span>{exp.limit}</span>
                            </div>
                            <div className={`${styles.bar}`}>
                              <div className={`${styles.fill}`}></div>
                            </div>
                          </Col>
                          <Col sm={12} className={`${styles.limit}   mb-5`}>
                            <div
                              className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                            >
                              <div className={`${styles.limit_box} `}>
                                <span className={`${styles.limit_label} `}>
                                  O/S BALANCE
                                </span>
                              </div>
                              <span>{exp.outstandingLimit}</span>
                            </div>
                            <div className={`${styles.bar}`}>
                              <div className={`${styles.fill}`}></div>
                            </div>
                          </Col>
                          <Col sm={12} className={`${styles.limit}   mb-5`}>
                            <div
                              className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                            >
                              <div className={`${styles.limit_box} `}>
                                <span className={`${styles.limit_label} `}>
                                  CONDUCT
                                </span>
                              </div>
                            </div>
                            <p>{exp.accountConduct}</p>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    //       {/* <Col md={4}>
                    //   <div className={`${styles.exposureCard}`}>
                    //     <Row>
                    //       <Col
                    //         sm={12}
                    //         className={`d-flex justify-content-start align-content-center  mb-5`}
                    //       >
                    //         <div className={`${styles.icon} `}>
                    //           <span
                    //             className={`d-flex justify-content-center align-content-center`}
                    //           >
                    //             ET
                    //           </span>
                    //         </div>

                    //         <span className={` ${styles.name} ml-3  `}>
                    //           Emerging Traders
                    //         </span>
                    //       </Col>
                    //       <Col sm={12} className={`${styles.limit}   mb-5`}>
                    //         <div
                    //           className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                    //         >
                    //           <div className={`${styles.limit_box} `}>
                    //             <span className={`${styles.limit_label} `}>
                    //               LIMIT
                    //             </span>
                    //           </div>
                    //           <span>1,900.00</span>
                    //         </div>
                    //         <div className={`${styles.bar}`}>
                    //           <div className={`${styles.fill}`}></div>
                    //         </div>
                    //       </Col>
                    //       <Col sm={12} className={`${styles.limit}   mb-5`}>
                    //         <div
                    //           className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                    //         >
                    //           <div className={`${styles.limit_box} `}>
                    //             <span className={`${styles.limit_label} `}>
                    //               O/S BALANCE
                    //             </span>
                    //           </div>
                    //           <span>1,900.00</span>
                    //         </div>
                    //         <div className={`${styles.bar}`}>
                    //           <div className={`${styles.fill}`}></div>
                    //         </div>
                    //       </Col>
                    //       <Col sm={12} className={`${styles.limit}   mb-5`}>
                    //         <div
                    //           className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                    //         >
                    //           <div className={`${styles.limit_box} `}>
                    //             <span className={`${styles.limit_label} `}>
                    //               CONDUCT
                    //             </span>
                    //           </div>
                    //         </div>
                    //         <p>
                    //           {' '}
                    //           Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    //           sed diam nonumy eirmod tempor invidunt ut labore et
                    //           dolore magna aliquyam erat, sed diam
                    //         </p>
                    //       </Col>
                    //     </Row>
                    //   </div>
                    // </Col>
                    // <Col md={4}>
                    //   <div className={`${styles.exposureCard}`}>
                    //     <Row>
                    //       <Col
                    //         sm={12}
                    //         className={`d-flex justify-content-start align-content-center  mb-5`}
                    //       >
                    //         <div className={`${styles.icon} `}>
                    //           <span
                    //             className={`d-flex justify-content-center align-content-center`}
                    //           >
                    //             ET
                    //           </span>
                    //         </div>

                    //         <span className={` ${styles.name} ml-3  `}>
                    //           Emerging Traders
                    //         </span>
                    //       </Col>
                    //       <Col sm={12} className={`${styles.limit}   mb-5`}>
                    //         <div
                    //           className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                    //         >
                    //           <div className={`${styles.limit_box} `}>
                    //             <span className={`${styles.limit_label} `}>
                    //               LIMIT
                    //             </span>
                    //           </div>
                    //           <span>1,900.00</span>
                    //         </div>
                    //         <div className={`${styles.bar}`}>
                    //           <div className={`${styles.fill}`}></div>
                    //         </div>
                    //       </Col>
                    //       <Col sm={12} className={`${styles.limit}   mb-5`}>
                    //         <div
                    //           className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                    //         >
                    //           <div className={`${styles.limit_box} `}>
                    //             <span className={`${styles.limit_label} `}>
                    //               O/S BALANCE
                    //             </span>
                    //           </div>
                    //           <span>1,900.00</span>
                    //         </div>
                    //         <div className={`${styles.bar}`}>
                    //           <div className={`${styles.fill}`}></div>
                    //         </div>
                    //       </Col>
                    //       <Col sm={12} className={`${styles.limit}   mb-5`}>
                    //         <div
                    //           className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                    //         >
                    //           <div className={`${styles.limit_box} `}>
                    //             <span className={`${styles.limit_label} `}>
                    //               CONDUCT
                    //             </span>
                    //           </div>
                    //         </div>
                    //         <p>
                    //           {' '}
                    //           Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    //           sed diam nonumy eirmod tempor invidunt ut labore et
                    //           dolore magna aliquyam erat, sed diam
                    //         </p>
                    //       </Col>
                    //     </Row>
                    //   </div>
                    // </Col> */}

                  )
                })} </Row>
          </div>
        </div>
      </div>
    </>
  )
}
const orderSummary = (camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#orderSummary"
          aria-expanded="true"
          aria-controls="orderSummary"
        >
          <h2 className="mb-0">Order Summary - Last 6 Orders</h2>
          <span>+</span>
        </div>
        <div
          id="orderSummary"
          className="collapse"
          aria-labelledby="orderSummary"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.order_wrapper} px-0 border_color`}>
            <table
              className={`${styles.table} table  border_color`}
              cellPadding="0"
              cellSpacing="0"
            >
              <tr>
                <th>CUSTOMER NAME</th>
                <th>ORDER NO</th>
                <th>ORDER VALUE</th>
                <th>COMMODITY</th>
                <th>STATUS</th>

                <th>DAYS DUE</th>
              </tr>
              <tr>
                <td>JUL 2022 - JUN 2023</td>

                <td colSpan={5}>
                  <div className={`${styles.dashedLine}`}></div>
                </td>
              </tr>
              <tr>
                <td
                  className={`d-flex justify-content-start align-content-center`}
                >
                  <div className={`${styles.icon} `}>
                    <span
                      className={`d-flex justify-content-center align-content-center`}
                    >
                      ET
                    </span>
                  </div>

                  <span className={` ${styles.name} ml-3  `}>
                    {camData?.company?.companyName}
                  </span>
                </td>
                <td>{camData?.orderId}</td>
                <td>{CovertvaluefromtoCR(camData?.orderValue)}</td>
                <td>{camData?.commodity}</td>
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
const creditProfile = (
  camData,
  openChargesLength,
  primaryBankName,
  latestAuditorData,
  previousAuditorData,
) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#creditProfile"
          aria-expanded="true"
          aria-controls="creditProfile"
        >
          <h2 className="mb-0">Operational Details</h2>
          <span>+</span>
        </div>
        <div
          id="creditProfile"
          className="collapse"
          aria-labelledby="creditProfile"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.info_wrapper} card-body border_color`}>
            <div className={`${styles.content} mb-4`}>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1`}>Main Banker</span>
                  <span className={`${styles.value} value pr-5`}>
                    {primaryBankName()}
                  </span>
                </Col>
                <Col
                  className={`  d-flex justify-content-between`}
                  md={6}
                >
                  <span className={`${styles.key} label1 pl-5`}>
                    External Credit rating
                  </span>
                  <span className={`${styles.value} value`}>A3+</span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1`}>Open Charges</span>
                  <span className={`${styles.value} value pr-5`}>
                    {openChargesLength()}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1 pl-5`}>
                    Credit Rating Agency
                  </span>
                  <span className={`${styles.value} value`}>
                    American First
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1`}>
                    Name of Auditor
                  </span>
                  <span className={`${styles.value} value pr-5`}>
                    {latestAuditorData?.nameOfAuditor}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1 pl-5`}>
                    Change in Auditor
                  </span>
                  <span className={`${styles.value} value `}>
                    {latestAuditorData?.nameOfAuditor ===
                      previousAuditorData?.nameOfAuditor
                      ? ' No'
                      : 'Yes'}
                  </span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const directorDetails = (camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#directorDetails"
          aria-expanded="true"
          aria-controls="directorDetails"
        >
          <h2 className="mb-0">Director Details</h2>
          <span>+</span>
        </div>
        <div
          id="directorDetails"
          className="collapse"
          aria-labelledby="directorDetails"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.order_wrapper} px-0 card-body`}>
            <table
              className={`${styles.table} table  border_color`}
              cellPadding="0"
              cellSpacing="0"
            >
              <tr>
                <th>NAME</th>
                <th>PAN</th>
                <th>DIN NUMBER</th>
                <th>DATE OF APPOINTMENT</th>
                <th>% SHAREHOLDING</th>
              </tr>

              {camData?.company?.detailedCompanyInfo?.profile?.directorDetail?.map(
                (director, index) => {
                  let name = director?.name
                  let [fName, lName] = director?.name.split(' ')

                  return (
                    <tr key={index}>
                      <td
                        className={`d-flex justify-content-start align-content-center`}
                      >
                        <div className={`${styles.icon} `}>
                          <span
                            className={`d-flex justify-content-center align-content-center`}
                          >
                            {fName.charAt(0)}
                            {lName.charAt(0)}
                          </span>
                        </div>

                        <span className={` ${styles.name} ml-3  `}>
                          {director?.name}
                        </span>
                      </td>
                      <td>{director?.pan[0]}</td>
                      <td>{director.din}</td>
                      <td>{director.tenureStartDate}</td>
                      <td>30%</td>
                    </tr>
                  )
                },
              )}
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
const shareHolding = (data, options, tempArr, camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#shareHolding"
          aria-expanded="true"
          aria-controls="shareHolding"
        >
          <h2 className="mb-0">Shareholding Details</h2>
          <span>+</span>
        </div>
        <div
          id="shareHolding"
          className="collapse"
          aria-labelledby="shareHolding"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.order_wrapper} card-body`}>
            <Row>
              <Col className={`${styles.leftCol} border_color`} md={4}>
                <div className={styles.chart}>
                  <Doughnut data={data} options={options} />
                  <div className={styles.total_value}>
                    <span></span>
                    <span className={styles.highlight}></span>
                  </div>
                </div>
                <div className={`${styles.name} `}>
                  {tempArr.map((val, index) => {
                    return (
                      <div
                        key={index}
                        className={`${styles.name_wrapper} d-flex justify-content-center align-item-center`}
                      >
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
              <Col md={8} className={`px-0`}>
                <table
                  className={`${styles.table} table  border_color `}
                  cellPadding="0"
                  cellSpacing="0"
                >
                  <tr>
                    <th>NAME</th>
                    <th>NO. OF SHARES</th>
                    <th>% SHARE</th>
                    <th>DIRECTOR</th>
                  </tr>

                  {camData &&
                    camData?.company?.detailedCompanyInfo?.profile?.shareholdingPattern?.map(
                      (share, index) => {
                        let name = share?.fullName ?? 'N A'
                        let [fName, lName] = name?.split(' ')

                        let colors = [
                          {
                            primary: 'rgba(54, 135, 232, 0.1)',
                            secondary: '#3687E8',
                          },
                          {
                            primary: 'rgba(67, 195, 77, 0.1)',
                            secondary: '#43C34D',
                          },
                          {
                            primary: '#FFECCF',
                            secondary: '#FF9D00',
                          },
                        ]
                        let randColor =
                          colors[Math.floor(Math.random() * colors.length)]
                        return (
                          <tr key={index}>
                            <td
                              className={`d-flex justify-content-start align-content-center`}
                            >
                              <div
                                style={{ background: `${randColor.primary}` }}
                                className={`${styles.icon}   `}
                              >
                                <span
                                  style={{ color: `${randColor.secondary}` }}
                                  className={`d-flex justify-content-center align-content-center`}
                                >
                                  {fName?.charAt(0) ? fName?.charAt(0) : 'N'}
                                  {lName?.charAt(0) ? lName?.charAt(0) : 'A'}
                                </span>
                              </div>

                              <span className={` ${styles.name} ml-3  `}>
                                {share?.fullName}
                              </span>
                            </td>
                            <td>{share?.numberOfShares}</td>
                            <td>{share?.percentageShareHolding}</td>
                            <td>{share?.director ? 'Yes' : 'No'}</td>
                          </tr>
                        )
                      },
                    )}
                  {/* <tr>
                    <td
                      className={`d-flex justify-content-start align-content-center`}
                    >
                      <div className={`${styles.icon} `}>
                        <span
                          className={`d-flex justify-content-center align-content-center`}
                        >
                          SS
                        </span>
                      </div>

                      <span className={` ${styles.name} ml-3  `}>
                        Sagar Sinha
                      </span>
                    </td>
                    <td>120</td>
                    <td>80% </td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td
                      className={`d-flex justify-content-start align-content-center`}
                    >
                      <div className={`${styles.icon} `}>
                        <span
                          className={`d-flex justify-content-center align-content-center`}
                        >
                          RS
                        </span>
                      </div>

                      <span className={` ${styles.name} ml-3  `}>
                        Radhe Singh
                      </span>
                    </td>
                    <td>120</td>
                    <td>80% </td>
                    <td>Yes</td>
                  </tr> */}
                </table>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
const chargeDetails = (data, options, tempArr, camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#chargeDetails"
          aria-expanded="true"
          aria-controls="chargeDetails"
        >
          <h2 className="mb-0">Open Bank Charge Details</h2>
          <span>+</span>
        </div>
        <div
          id="chargeDetails"
          className="collapse"
          aria-labelledby="chargeDetails"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.order_wrapper} card-body`}>
            <Row>
              <Col className={`${styles.leftCol} border_color`} md={4}>
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
                      <div
                        key={index}
                        className={`${styles.name_wrapper} d-flex justify-content-center align-item-center`}
                      >
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
              <Col md={8} className={`px-0`}>
                <table
                  className={`${styles.table} table border_color `}
                  cellPadding="0"
                  cellSpacing="0"
                >
                  <tr>
                    <th>BANK NAME</th>
                    <th>CHARGE AMOUNT</th>
                    <th>DATE OF CREATION</th>
                  </tr>

                  {camData &&
                    camData?.company?.detailedCompanyInfo?.financial?.openCharges?.map(
                      (charge, index) => {
                        let name = charge?.nameOfChargeHolder1
                        let [fName, lName] = name?.split(' ')

                        let colors = [
                          {
                            primary: 'rgba(54, 135, 232, 0.1)',
                            secondary: '#3687E8',
                          },
                          {
                            primary: 'rgba(67, 195, 77, 0.1)',
                            secondary: '#43C34D',
                          },
                          {
                            primary: '#FFECCF',
                            secondary: '#FF9D00',
                          },
                        ]
                        let randColor =
                          colors[Math.floor(Math.random() * colors.length)]
                        return (
                          <tr key={index}>
                            <td
                              className={`d-flex justify-content-start align-content-center`}
                            >
                              <div
                                style={{ background: `${randColor.primary}` }}
                                className={`${styles.icon} `}
                              >
                                <span
                                  style={{ color: `${randColor.secondary}` }}
                                  className={`d-flex justify-content-center align-content-center`}
                                >
                                  {fName?.charAt(0) ? fName?.charAt(0) : 'N'}
                                  {lName?.charAt(0) ? lName?.charAt(0) : 'A'}
                                </span>
                              </div>

                              <span className={` ${styles.name} ml-3  `}>
                                {charge?.nameOfChargeHolder1}
                              </span>
                            </td>
                            <td>{charge?.finalAmountSecured}</td>

                            <td>{charge?.dateOfCreationOfCharge?moment(charge?.dateOfCreationOfCharge).format("DD-MM-YYYY"):""}</td>
                          </tr>
                        )
                      },
                    )}
                  {/* <tr>
                    <td
                      className={`d-flex justify-content-start align-content-center`}
                    >
                      <div className={`${styles.icon} `}>
                        <span
                          className={`d-flex justify-content-center align-content-center`}
                        >
                          SS
                        </span>
                      </div>

                      <span className={` ${styles.name} ml-3  `}>
                        Sagar Sinha
                      </span>
                    </td>
                    <td>1,900.00</td>

                    <td>22-02-2020</td>
                  </tr>
                  <tr>
                    <td
                      className={`d-flex justify-content-start align-content-center`}
                    >
                      <div className={`${styles.icon} `}>
                        <span
                          className={`d-flex justify-content-center align-content-center`}
                        >
                          RS
                        </span>
                      </div>

                      <span className={` ${styles.name} ml-3  `}>
                        Radhe Singh
                      </span>
                    </td>
                    <td>1,900.00</td>

                    <td>22-02-2020</td>
                  </tr> */}
                </table>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
const debtProfile = (data, options, tempArr, camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#debtProfile"
          aria-expanded="true"
          aria-controls="debtProfile"
        >
          <h2 className="mb-0">Debt Profile</h2>
          <span>+</span>
        </div>
        <div
          id="debtProfile"
          className="collapse"
          aria-labelledby="debtProfile"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.order_wrapper} card-body`}>
            <Row>
              <Col className={`${styles.leftCol} border_color`} md={4}>
                <div
                  className={`${styles.label} d-flex justify-content-between align-content-center  `}
                >
                  <div className={`${styles.limit_box} `}>
                    <span className={`${styles.limit_label} `}>Total Limit</span>
                  </div>
                  <span>1,900.00</span>
                </div>
                <div className={`${styles.bar}`}>
                  <div className={`${styles.fill}`}
                  style={{width:"100%"}}
                  ></div>
                </div>

                 {camData &&
                    camData?.company?.debtProfile?.map((debt, index) => (
                   <>
                   <div className={`mt-4 mb-4`} key={index}>
                  <div
                    className={`${styles.label} d-flex justify-content-between align-content-center  `}
                  >
                    <div className={`${styles.limit_box} `}>
                      <span className={`${styles.limit_label} `}>{debt.bankName}</span>
                    </div>
                    <span>{debt.limit}</span>
                  </div>
                  <div className={`${styles.bar} ${styles.small_bar}`}>
                    <span className={`${styles.conduct}  
                   `}
                    style={{
                      color:` 
                      ${debt.conduct=="Good"?"#43C34D":
                      debt.conduct=="Satisfactory"?"#FF9D00":debt.conduct=="Average"?"average":"#EA3F3F"
                      }`
                    }}
                      >{debt.limitType}</span>
                    <div
                      style={{ backgroundColor:`${debt.conduct=="Good"?"#43C34D":
                      debt.conduct=="Satisfactory"?"#FF9D00":debt.conduct=="Average"?"average":"#EA3F3F"
                      }`,
                    width:`${((Number(debt.limit)/1900>1?1:Number(debt.limit)/1900))*100}%`
                    }}
                      className={`${styles.fill}`
                      
                    }
                    ></div>
                  </div>
                </div>
                   </>
                    ))}
                {/* <div className={`mt-4 mb-4`}>
                  <div
                    className={`${styles.label} d-flex justify-content-between align-content-center  `}
                  >
                    <div className={`${styles.limit_box} `}>
                      <span className={`${styles.limit_label} `}>LIMIT</span>
                    </div>
                    <span>1,900.00</span>
                  </div>
                  <div className={`${styles.bar} ${styles.small_bar}`}>
                    <span style={{ color: '#43C34D' }}>Cash Credit</span>
                    <div
                      style={{ backgroundColor: '#43C34D' }}
                      className={`${styles.fill}`}
                    ></div>
                  </div>
                </div>
                <div className={`mt-4 mb-4`}>
                  <div
                    className={`${styles.label} d-flex justify-content-between align-content-center  `}
                  >
                    <div className={`${styles.limit_box} `}>
                      <span className={`${styles.limit_label} `}>LIMIT</span>
                    </div>
                    <span>1,900.00</span>
                  </div>
                  <div className={`${styles.bar} ${styles.small_bar}`}>
                    <span style={{ color: '#FF9D00' }}>Cash Credit</span>
                    <div
                      style={{ backgroundColor: '#FF9D00' }}
                      className={`${styles.fill}`}
                    ></div>
                  </div>
                </div> */}
              </Col>
              <Col md={8} className={`px-0`}>
                <table
                  className={`${styles.table} table  border_color `}
                  cellPadding="0"
                  cellSpacing="0"
                >
                  <tr>
                    <th>BANK NAME</th>
                    <th>LIMIT TYPE</th>
                    <th>LIMITS</th>
                    <th>CONDUCT</th>
                  </tr>

                  {camData &&
                    camData?.company?.debtProfile?.map((debt, index) => (
                      <tr key={index}>
                        <td>{debt?.bankName}</td>
                        <td> {debt?.limitType} </td>

                        <td>{debt?.limit}</td>
                        <td 
                        className={`${styles.conduct}  ${debt.conduct=="Good"?"good":
                      debt.conduct=="Satisfactory"?"satisfactory":debt.conduct=="Average"?"average":"danger"
                      }`
                      
                      }>
                          {debt?.conduct}
                        </td>
                      </tr>
                    ))}
                  {/* <tr>
                    <td>ICICI Bank</td>
                    <td>
                      <select
                        className={`${styles.value} value form-control`}
                        disabled={true}
                      />
                    </td>

                    <td>₹ 800.00</td>
                    <td className={`${styles.conduct} good`}>good</td>
                  </tr>
                  <tr>
                    <td>ICICI Bank</td>
                    <td>
                      <select
                        className={`${styles.value} value form-control`}
                        disabled={true}
                      />
                    </td>

                    <td>₹ 800.00</td>
                    <td className={`${styles.conduct}`}>Poor</td>
                  </tr> */}
                </table>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
const operationalDetails = (camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#operationalDetails"
          aria-expanded="true"
          aria-controls="operationalDetails"
        >
          <h2 className="mb-0">Operational Details</h2>
          <span>+</span>
        </div>
        <div
          id="operationalDetails"
          className="collapse"
          aria-labelledby="operationalDetails"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.info_wrapper} card-body border_color`}>
            <div className={`${styles.content} mb-4`}>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1`}>
                    Plant Production Capacity
                  </span>
                  <span className={`${styles.value} value pr-5`}>
                    {camData?.productSummary?.monthlyProductionCapacity}
                  </span>
                </Col>
                <Col
                  className={` col-md-offset-2 d-flex justify-content-between`}
                  md={6}
                >
                  <span className={`${styles.key} label1 pl-5`}>
                    Stock in Transit - Commodity
                  </span>
                  <span className={`${styles.value} value`}>
                    {camData?.productSummary?.averageStockInTransit}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1`}>
                    Capacity Utilization
                  </span>
                  <span className={`${styles.value} value pr-5`}>
                    {camData?.productSummary?.capacityUtilization}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1 pl-5`}>
                    Stock Coverage of Commodity
                  </span>
                  <span className={`${styles.value} value`}>
                    {camData?.productSummary?.averageStockOfCommodity}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1`}>
                    Available Stock of Commodity
                  </span>
                  <span className={`${styles.value} value pr-5`}>
                    {camData?.productSummary?.availableStock}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1 pl-5`}>
                    Avg Monthly Electricity Bill
                  </span>
                  <span className={`${styles.value} value`}>
                    {camData?.productSummary?.AvgMonthlyElectricityBill}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1`}>
                    Daily Consumption of Commodity
                  </span>
                  <span className={`${styles.value} value`}>
                    {camData?.productSummary?.dailyConsumptionOfCommodity}
                  </span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const revenuDetails = (gstData) => {
  const RevenueDetails = gstData?.detail?.salesDetailAnnual?.saleSummary

  function calcPc(n1, n2) {
    if (n1 === 0) {
      return 0
    }
    return ((n2 - n1) / n1) * 100
  }

  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#revenuDetails"
          aria-expanded="true"
          aria-controls="revenuDetails"
        >
          <h2 className="mb-0">Revenue Details</h2>
          <span>+</span>
        </div>
        <div
          id="revenuDetails"
          className="collapse"
          aria-labelledby="revenuDetails"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.order_wrapper} p-0 card-body`}>
            <table
              className={`${styles.table} table  border_color`}
              cellPadding="0"
              cellSpacing="0"
            >
              <tr>
                <th></th>
                <th>TREND</th>
                <th>LATEST YEAR</th>
                <th>PREVIOUS YEAR</th>
                <th>GROWTH</th>
              </tr>

              <tr>
                <td>Gross Revenue</td>
                <td>
                  <img
                    src={
                      calcPc(
                        RevenueDetails?.grossTurnover?.previous?.value,
                        RevenueDetails?.grossTurnover?.current?.value,
                      ) > 0
                        ? '/static/arrow-up-green.svg'
                        : '/static/arrow-down-red.svg'
                    }
                    alt="Arrow Green"
                    className="img-fluid"
                  />
                </td>
                <td>
                  {
                  checkNan(RevenueDetails?.grossTurnover?.current?.value?.toFixed(2)
                    ?.toLocaleString())
                    }
                </td>
                <td>
                  {
                  RevenueDetails?.grossTurnover?.previous?.value?.toFixed(2)
                    ?.toLocaleString()
                    }
                </td>
                <td>
                  {checkNan(calcPc(
                    RevenueDetails?.grossTurnover?.previous?.value,
                    RevenueDetails?.grossTurnover?.current?.value,
                  ).toFixed(2)
                    ?.toLocaleString('fullwide', { maximumFractionDigits: 2 })) +
                    '%' }
                </td>
              </tr>
              <tr>
                <td>Related Party Sales</td>
                <td>
                  <img
                    src={
                      calcPc(
                        RevenueDetails?.relatedPartySales?.previous?.value,
                        RevenueDetails?.relatedPartySales?.current?.value,
                      ) > 0
                        ? '/static/arrow-up-green.svg'
                        : '/static/arrow-down-red.svg'
                    }
                    alt="Arrow Green"
                    className="img-fluid"
                  />
                </td>
                <td>
                  {RevenueDetails?.relatedPartySales?.current?.value
                    .toFixed(2)
                    ?.toLocaleString()}
                </td>
                <td>
                  {RevenueDetails?.relatedPartySales?.previous?.value
                    .toFixed(2)
                    ?.toLocaleString()}
                </td>
                <td>
                  {checkNan(calcPc(
                    RevenueDetails?.relatedPartySales?.previous?.value,
                    RevenueDetails?.relatedPartySales?.current?.value,
                  )
                    .toFixed(2)
                    ?.toLocaleString('fullwide', { maximumFractionDigits: 2 })) +
                    '%'}
                </td>
              </tr>
              <tr>
                <td>Intra Organization Sales</td>
                <td>
                  <img
                    src={
                      calcPc(
                        RevenueDetails?.intraOrgSalesPercent?.previous?.value,
                        RevenueDetails?.intraOrgSalesPercent?.current?.value,
                      ) > 0
                        ? '/static/arrow-up-green.svg'
                        : '/static/arrow-down-red.svg'
                    }
                    alt="Arrow Green"
                    className="img-fluid"
                  />
                </td>
                <td>
                  {RevenueDetails?.intraOrgSalesPercent?.current?.value
                    .toFixed(2)
                    ?.toLocaleString()}
                </td>
                <td>
                  {RevenueDetails?.intraOrgSalesPercent?.previous?.value
                    .toFixed(2)
                    ?.toLocaleString()}
                </td>
                <td>
                  {checkNan(calcPc(
                    RevenueDetails?.intraOrgSalesPercent?.previous?.value,
                    RevenueDetails?.intraOrgSalesPercent?.current?.value,
                  )
                    .toFixed(2)
                    ?.toLocaleString('fullwide', { maximumFractionDigits: 2 })) +
                    '%'}
                </td>
              </tr>
              <tr>
                <td>B2B Sales</td>
                <td>
                  <img
                    src={
                      calcPc(
                        RevenueDetails?.B2BSales?.previous?.value,
                        RevenueDetails?.B2BSales?.current?.value,
                      ) > 0
                        ? '/static/arrow-up-green.svg'
                        : '/static/arrow-down-red.svg'
                    }
                    alt="Arrow Green"
                    className="img-fluid"
                  />
                </td>
                <td>
                  {RevenueDetails?.B2BSales?.current?.value
                    .toFixed(2)
                    ?.toLocaleString()}
                </td>
                <td>
                  {RevenueDetails?.B2BSales?.previous?.value
                    .toFixed(2)
                    ?.toLocaleString()}
                </td>
                <td>
                  {checkNan(
                    calcPc(
                    RevenueDetails?.B2BSales?.previous?.value,
                    RevenueDetails?.B2BSales?.current?.value,
                  )
                    .toFixed(2)
                    ?.toLocaleString('fullwide', { maximumFractionDigits: 2 })
                  ) +
                    '%'}
                </td>
              </tr>
              <tr>
                <td>B2C Sales</td>
                <td>
                  <img
                    src={
                      calcPc(
                        RevenueDetails?.B2CSales?.previous?.value,
                        RevenueDetails?.B2CSales?.current?.value,
                      ) > 0
                        ? '/static/arrow-up-green.svg'
                        : '/static/arrow-down-red.svg'
                    }
                    alt="Arrow Green"
                    className="img-fluid"
                  />
                </td>
                <td>
                  {RevenueDetails?.B2CSales?.current?.value
                    .toFixed(2)
                    ?.toLocaleString()}
                </td>
                <td>
                  {RevenueDetails?.B2CSales?.previous?.value
                    .toFixed(2)
                    ?.toLocaleString()}
                </td>
                <td>
                  {checkNan(calcPc(
                    RevenueDetails?.B2CSales?.previous?.value,
                    RevenueDetails?.B2CSales?.current?.value,
                  )
                    .toFixed(2)
                    ?.toLocaleString('fullwide', { maximumFractionDigits: 2 })) +
                    '%'}
                </td>
              </tr>
              <tr>
                <td>Export Sales</td>
                <td>
                  <img
                    src={
                      calcPc(
                        RevenueDetails?.exportSales?.previous?.value,
                        RevenueDetails?.exportSales?.current?.value,
                      ) > 0
                        ? '/static/arrow-up-green.svg'
                        : '/static/arrow-down-red.svg'
                    }
                    alt="Arrow Green"
                    className="img-fluid"
                  />
                </td>
                <td>
                  {RevenueDetails?.exportSales?.current?.value
                    .toFixed(2)
                    ?.toLocaleString()}
                </td>
                <td>
                  {RevenueDetails?.exportSales?.previous?.value
                    .toFixed(2)
                    ?.toLocaleString()}
                </td>
                <td>
                  {checkNan(
                    calcPc(
                    RevenueDetails?.exportSales?.previous?.value,
                    RevenueDetails?.exportSales?.current?.value,
                  )
                    .toFixed(2)
                    ?.toLocaleString('fullwide', { maximumFractionDigits: 2 })
                  ) +
                    '%'}
                </td>
              </tr>
              <tr>
                <td>Total Customers</td>
                <td>
                  <img
                    src={
                      calcPc(
                        RevenueDetails?.ttlCustomer?.previous?.value,
                        RevenueDetails?.ttlCustomer?.current?.value,
                      ) > 0
                        ? '/static/arrow-up-green.svg'
                        : '/static/arrow-down-red.svg'
                    }
                    alt="Arrow Green"
                    className="img-fluid"
                  />
                </td>
                <td>
                  {RevenueDetails?.ttlCustomer?.current?.value?.toFixed(2)
                    ?.toLocaleString()}
                </td>
                <td>
                  {RevenueDetails?.ttlCustomer?.previous?.value?.toFixed(2)
                    ?.toLocaleString()}
                </td>
                <td>
                  {checkNan(calcPc(
                    RevenueDetails?.ttlCustomer?.previous?.value,
                    RevenueDetails?.ttlCustomer?.current?.value,
                  )
                    .toFixed(2)
                    ?.toLocaleString('fullwide', { maximumFractionDigits: 2 })) +
                    '%'}
                </td>
              </tr>
              <tr>
                <td>Total Invoices</td>
                <td>
                  <img
                    src={
                      calcPc(
                        RevenueDetails?.ttlInv?.previous?.value,
                        RevenueDetails?.ttlInv?.current?.value,
                      ) > 0
                        ? '/static/arrow-up-green.svg'
                        : '/static/arrow-down-red.svg'
                    }
                    alt="Arrow Green"
                    className="img-fluid"
                  />
                </td>
                <td>
                  {RevenueDetails?.ttlInv?.current?.value?.toFixed(2)
                    ?.toLocaleString()}
                </td>
                <td>
                  {RevenueDetails?.ttlInv?.previous?.value?.toFixed(2)
                    ?.toLocaleString()}
                </td>
                <td>
                  {checkNan(calcPc(
                    RevenueDetails?.ttlInv?.previous?.value,
                    RevenueDetails?.ttlInv?.current?.value,
                  )
                    .toFixed(2)
                    ?.toLocaleString('fullwide', { maximumFractionDigits: 2 })) +
                    '%'}
                </td>
              </tr>
              <tr>
                <td>Gross Margin</td>
                <td>
                  <img
                    src="/static/arrow-down-red.svg"
                    alt="Arrow Red"
                    className="img-fluid"
                  />
                </td>
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
const financeDetails = (
  latestBalanceData,
  previousBalanceData,
  data,
  options,
  tempArr,
  companyData,
  latestYearData,
  previousYearData,
) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#financeDetails"
          aria-expanded="true"
          aria-controls="financeDetails"
        >
          <h2 className="mb-0">Financial Summary</h2>
          <span>+</span>
        </div>
        <div
          id="financeDetails"
          className="collapse"
          aria-labelledby="financeDetails"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.order_wrapper2} card-body`}>
            <Row className="no-gutters">
              <Col className={`${styles.leftCol} p-0 border_color`} md={6}>
                <table
                  className={`${styles.table} table  border_color `}
                  cellPadding="0"
                  cellSpacing="0"
                >
                  <tr>
                    <th className={`${styles.bold_heading} value`}>
                      Liabilities
                    </th>
                    <th>
                      {moment(_get(companyData, 'financial.balanceSheet[0].date', ''))
                        .format('MMM-YY')
                        .toUpperCase()}
                    </th>
                    <th>
                    {moment(_get(companyData, 'financial.balanceSheet[1].date', ''))
                        .format('MMM-YY')
                        .toUpperCase()}
                    </th>
                  </tr>
                  <tr>
                    <td>Net Worth</td>
                    <td>
                      {_get(companyData, 'financial.balanceSheet[0].equityLiabilities.totalEquity', '')?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                    <td>
                    {_get(companyData, 'financial.balanceSheet[1].equityLiabilities.totalEquity', '')?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                  <tr>
                    <td>Total Borrowings</td>
                    <td>
                      {Number(_get(companyData, 'financial.balanceSheet[0].equityLiabilities.borrowingsCurrent', '') +
                        _get(companyData, 'financial.balanceSheet[0].equityLiabilities.borrowingsNonCurrent', ''))?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                    <td>
                    {Number(_get(companyData, 'financial.balanceSheet[1].equityLiabilities.borrowingsCurrent', '') +
                        _get(companyData, 'financial.balanceSheet[1].equityLiabilities.borrowingsNonCurrent', ''))?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                  <tr>
                    <td>Creditors</td>
                    <td>
                    {Number(_get(companyData, 'financial.balanceSheet[0].equityLiabilities.tradePay', '') +
                        _get(companyData, 'financial.balanceSheet[0].equityLiabilities.tradePayablesNoncurrent', ''))?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                    <td>
                    {Number(_get(companyData, 'financial.balanceSheet[1].equityLiabilities.tradePay', '') +
                        _get(companyData, 'financial.balanceSheet[1].equityLiabilities.tradePayablesNoncurrent', ''))?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                  <tr>
                    <td>Other Current Liabilities</td>
                    <td>
                      {_get(companyData, 'financial.balanceSheet[0].equityLiabilities.otherCurrentLiabilities', '')?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                    <td>
                    {_get(companyData, 'financial.balanceSheet[1].equityLiabilities.otherCurrentLiabilities', '')?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                  </tr>

                  <tr>
                    <th
                      colSpan={3}
                      className={`${styles.bold_heading} ${styles.Border} value`}
                    >
                      Assets
                    </th>
                  </tr>

                  <tr>
                    <td>Working Capital Turnover ratio</td>
                    <td>
                      {latestYearData?.workingCapitalTurnover?.toFixed(2)}
                    </td>
                    <td>
                      {previousYearData?.workingCapitalTurnover
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Debtors period</td>
                    <td>
                      {latestYearData?.daysOfSalesOutstanding
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                    <td>
                      {previousYearData?.daysOfSalesOutstanding
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Creditors Period</td>
                    <td>
                      {latestYearData?.daysOfPayablesOutstanding
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                    <td>
                      {previousYearData?.daysOfPayablesOutstanding?.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td>Inventory Period</td>
                    <td>{latestYearData?.daysOfInventoryOutstanding}</td>
                    <td>{previousYearData?.daysOfInventoryOutstanding}</td>
                  </tr>
                  <tr>
                    <th
                      colSpan={3}
                      className={`${styles.Border} ${styles.bold_heading} value`}
                    >
                      P/L
                    </th>
                  </tr>

                  <tr>
                    <td>Interest Coverage</td>
                    <td>
                      {latestYearData?.interestCoverage
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                    <td>
                      {previousYearData?.interestCoverage
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Current Ratio</td>
                    <td>
                      {latestYearData?.currentRatio
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                    <td>
                      {previousYearData?.currentRatio
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Debt Equity</td>
                    <td>
                      {latestYearData?.debtEquity?.toFixed(2).toLocaleString()}
                    </td>
                    <td>
                      {previousYearData?.debtEquity
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                  </tr>
                </table>
              </Col>
              <Col md={6} className={`pl-0`}>
                <table
                  className={`${styles.table} table  border_color  `}
                  cellPadding="0"
                  cellSpacing="0"
                >
                  <tr>
                    <th className={`${styles.bold_heading} value`}>Ratios</th>
                    <th>
                      {' '}
                      {moment(latestYearData?.financialEndDate)
                        .format('MMM-YY')
                        .toUpperCase()}
                    </th>
                    <th>
                      {' '}
                      {moment(previousYearData?.financialEndDate)
                        .format('MMM-YY')
                        .toUpperCase()}
                    </th>
                  </tr>
                  <tr>
                    <td>Cash from Operations</td>
                    <td>
                      {_get(
                        companyData,
                        'financial.cashFlowStatement[0].cashFlowsFromUsedInOperatingActivities.cashFlowsFromUsedInOperatingActivities',
                        '',
                      ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                    <td>
                      {_get(
                        companyData,
                        'financial.cashFlowStatement[1].cashFlowsFromUsedInOperatingActivities.cashFlowsFromUsedInOperatingActivities',
                        '',
                      ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                  <tr>
                    <td>Cash from Financing</td>
                    <td>
                      {_get(
                        companyData,
                        'financial.cashFlowStatement[0].cashFlowsFromUsedInFinancingActivities.cashFlowsFromUsedInFinancingActivities',
                        '',
                      ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                    <td>
                      {_get(
                        companyData,
                        'financial.cashFlowStatement[1].cashFlowsFromUsedInFinancingActivities.cashFlowsFromUsedInFinancingActivities',
                        '',
                      ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                  <tr>
                    <td>Cash from Investing</td>
                    <td>
                      {_get(
                        companyData,
                        'financial.cashFlowStatement[0].cashFlowsFromUsedInInvestingActivities.cashFlowsFromUsedInInvestingActivities',
                        '',
                      ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                    <td>
                      {_get(
                        companyData,
                        'financial.cashFlowStatement[1].cashFlowsFromUsedInInvestingActivities.cashFlowsFromUsedInInvestingActivities',
                        '',
                      ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                  </tr>

                  <tr>
                    <td className={`${styles.no_Border}`}></td>
                    <td className={`${styles.no_Border}`}></td>
                    <td className={`${styles.no_Border}`}></td>
                  </tr>

                  <tr>
                    <td>Working Capital Turnover ratio</td>
                    <td>
                      {latestYearData?.workingCapitalTurnover
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                    <td>
                      {previousYearData?.workingCapitalTurnover
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Debtors period</td>
                    <td>
                      {latestYearData?.daysOfSalesOutstanding
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                    <td>
                      {previousYearData?.daysOfSalesOutstanding
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Creditors Period</td>
                    <td>
                      {latestYearData?.daysOfPayablesOutstanding
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                    <td>
                      {previousYearData?.daysOfPayablesOutstanding
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Inventory Period</td>
                    <td>
                      {latestYearData?.daysOfInventoryOutstanding
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                    <td>
                      {previousYearData?.daysOfInventoryOutstanding
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td className={`${styles.no_Border}`}></td>
                    <td className={`${styles.no_Border}`}></td>
                    <td className={`${styles.no_Border}`}></td>
                  </tr>

                  <tr>
                    <td>Interest Coverage</td>
                    <td>
                      {latestYearData?.interestCoverage
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                    <td>
                      {previousYearData?.interestCoverage
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Current Ratio</td>
                    <td>
                      {latestYearData?.currentRatio
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                    <td>
                      {previousYearData?.currentRatio
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Debt Equity</td>
                    <td>
                      {latestYearData?.debtEquity?.toFixed(2).toLocaleString()}
                    </td>
                    <td>
                      {previousYearData?.debtEquity
                        ?.toFixed(2)
                        .toLocaleString()}
                    </td>
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
const compilanceStatus = (companyData, camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#compilanceStatus"
          aria-expanded="true"
          aria-controls="compilanceStatus"
        >
          <h2 className="mb-0">Compliance Status</h2>
          <span>+</span>
        </div>
        <div
          id="compilanceStatus"
          className="collapse"
          aria-labelledby="compilanceStatus"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.info_wrapper} card-body border_color`}>
            <div className={`${styles.content} mb-4`}>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1`}>
                    GST Return Filing
                  </span>
                  <span
                    className={`${styles.value} value pr-5`}
                    style={{ color: '#EA3F3F' }}
                  >
                    {moment(_get(companyData,"GST[0].detail.summaryInformation.businessProfile.lastReturnFiledgstr1",""), 'MMyyyy').format('MM-yyyy')}
                  </span>
                </Col>
                <Col
                  className={` col-md-offset-2 d-flex justify-content-between`}
                  md={6}
                >
                  <span className={`${styles.key} label1 pl-5`}>NCLT</span>
                  <span className={`${styles.value} value`}>
                    {companyData?.compliance.other?.nclt ? 'YES' : 'NO'}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1`}>EPF Status</span>
                  <span
                    className={`${styles.value} value pr-5`}
                    style={{ color: '#EA3F3F' }}
                  >
                    {companyData?.compliance.other?.epfStatus ? 'YES' : 'NO'}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1 pl-5`}>BIFR</span>
                  <span className={`${styles.value} value`}>
                    {companyData?.compliance.other?.bifr ? 'YES' : 'NO'}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1`}>
                    Litigation Status
                  </span>
                  <span className={`${styles.value} value pr-5`}>
                    {camData?.company?.litigationStatus}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1 pl-5`}>
                    Defaulter Company
                  </span>
                  <span className={`${styles.value} value`}>
                    {companyData?.compliance.other?.defaulterCompany
                      ? 'YES'
                      : 'NO'}
                  </span>
                </Col>
              </Row>
              <Row className={`mb-3`}>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1`}>
                    Last Balance Sheet Dates
                  </span>
                  <span className={`${styles.value} value pr-5`}>
                   {companyData?.profile?.companyDetail?.lastBalanceSheet}
                  </span>
                </Col>
                <Col className={`d-flex justify-content-between`} md={6}>
                  <span className={`${styles.key} label1 pl-5`}>
                    Active Directors
                  </span>
                  <span className={`${styles.value} value`}>
                    {companyData?.profile?.directorDetail?.length??0}
                  </span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const strengthAndWeakness = (camData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#strengthAndWeakness"
          aria-expanded="true"
          aria-controls="strengthAndWeakness"
        >
          <h2 className="mb-0">Strength &amp; Weakness</h2>
          <span>+</span>
        </div>
        <div
          id="strengthAndWeakness"
          className="collapse"
          aria-labelledby="strengthAndWeakness"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.order_wrapper} card-body`}>
            <Row>
              <Col className={`${styles.leftCol} border_color`} md={6}>
                <div
                  className={`d-flex justify-content-start align-content-center`}
                >
                  <div className={`${styles.icon} ${styles.green_highlight}`}>
                    <span
                      className={`d-flex justify-content-center align-content-center`}
                    >
                      <img src="./static/check.svg"></img>
                    </span>
                  </div>
                  <span className={`${styles.text} good ml-2`}>Strength</span>
                </div>
                <div>
                  <ul>
                    {camData &&
                      camData?.company?.recommendation?.strengths?.map(
                        (comment, index) => (
                          <li key={index} className={`mt-4`}>
                            {comment}
                          </li>
                        ),
                      )}
                    {/* <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li>
                    <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li>
                    <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li>
                    <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li> */}
                  </ul>
                </div>
              </Col>
              <Col className={`${styles.leftCol} border_color`} md={6}>
                <div
                  className={`d-flex justify-content-start align-content-center`}
                >
                  <div className={`${styles.icon} ${styles.red_highlight} `}>
                    <span
                      className={`d-flex justify-content-center align-content-center`}
                    >
                      <img src="./static/close-b.svg"></img>
                    </span>
                  </div>
                  <span className={`${styles.text} danger ml-2`}>Weakness</span>
                </div>
                <div>
                  <ul>
                    {camData &&
                      camData?.company?.recommendation?.weakness?.map(
                        (comment, index) => {
                          return (
                            <li key={index} className={`mt-4`}>
                              {comment}
                            </li>
                          )
                        },
                      )}
                    {/* <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li>
                    <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li>
                    <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li>
                    <li className={`mt-4`}>
                      — Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam
                    </li> */}
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
const sectionTerms = (
  camData,
  sanctionComments,
  setSanctionComments,
  addApproveRemarkArr,
  approveComment,
  filteredCreditRating,
  saveApprovedCreditData,
  onApprove,
  onApproveOrder,
) => {
 
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} style={{ cursor: 'default' }}>
          <h2 className="mb-0">Sanction Terms</h2>
          <div className={`${styles.subHeadContainer} d-flex ml-5`}>
            <span
              className={` ${styles.complaintExtra} d-flex align-items-center justify-content-between`}
            >
              <span className={`${styles.lightCompliance} mr-2`}>
                Total Limit:
              </span>
              {camData?.company?.creditLimit?.totalLimit}
            </span>
            <span
              className={`${styles.complaintExtra}  d-flex align-items-center justify-content-between`}
            >
              <span className={`${styles.lightCompliance} mr-2`}>
                Utilised Limit:
              </span>
              {camData?.company?.creditLimit?.utilizedLimit}
            </span>
            <span
              className={`${styles.complaintExtra}  d-flex align-items-center justify-content-between`}
            >
              <span className={`${styles.lightCompliance} mr-2`}>
                Available Limit:
              </span>
              {camData?.company?.creditLimit?.availableLimit}
            </span>
          </div>
          <span data-toggle="collapse" data-target="#sectionTerms" aria-expanded="true" aria-controls="sectionTerms">+</span>
        </div>
        <div
          id="sectionTerms"
          className="collapse"
          aria-labelledby="sectionTerms"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.terms_wrapper} card-body border_color`}>
            <table
              className={`${styles.sectionTable} table   `}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <tr>
                <th></th>
                <th>PREVIOUS LIMIT</th>
                <th>APPLIED VALUE</th>
                <th>DERIVED VALUE</th>
                <th>SUGGESTED VALUE</th>
                <th>REVISED</th>
                <th>APPROVED VALUE</th>
              </tr>
              <tr>
                <td>Limit Value</td>
                <td>{camData?.company?.creditLimit?.availableLimit}</td>
                <td>-</td>
                {filteredCreditRating ? (
                  <>
                    {' '}
                    {filteredCreditRating &&
                      filteredCreditRating.length > 0 &&
                      filteredCreditRating.map((val, index) => (
                        <td key={index}>{val?.derived?.value}</td>
                      ))}{' '}
                  </>
                ) : (
                  <td>-</td>
                )}
                {filteredCreditRating ? (
                  <>
                    {' '}
                    {filteredCreditRating &&
                      filteredCreditRating.length > 0 &&
                      filteredCreditRating.map((val, index) => (
                        <td key={index}>{val?.suggested?.value}</td>
                      ))}{' '}
                  </>
                ) : (
                  <td>-</td>
                )}
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <input
                    className={`${styles.text}`}
                    required={true}
                    type="number"
                    defaultValue={camData?.cam?.approvedCreditValue}
                    name="approvedCreditValue"
                    onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                    onChange={(e) => {
                      onApprove(
                        e.target.name,
                        Number(e.target.value * 10000000),
                      )
                    }}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Order Value</td>
                <td>-</td>
                <td>{camData?.orderValue}</td>
                <td>-</td>
                <td>{camData?.suggestedOrderValue}</td>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <input
                    className={`${styles.text}`}
                    type="number"
                    onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                    name="approvedOrderValue"
                    defaultValue={camData?.cam?.approvedOrderValue}
                    onChange={(e) => {
                      onApproveOrder(
                        e.target.name,
                        Number(e.target.value * 10000000),
                      )
                    }}
                  ></input>
                </td>
              </tr>
            </table>
            <div>
              <div
                className={`${styles.heading} heading  card_sub_header d-flex  align-items-center justify-content-start`}
              >
                Sanction Conditions
              </div>
              <ul className="mt-3 mb-3">
                {camData &&
                  camData?.company?.recommendation?.sanctionTerms?.map(
                    (condition, index) => <li key={index}>{condition}</li>,
                  )}
                {/* <li>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam sadipscing elitr, sed diam
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam sadipscing elitr, sed diam
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam sadipscing elitr, sed diam
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam sadipscing elitr, sed diam
                </li> */}
              </ul>
            </div>
            <div>
              <div className={`${styles.approve}`}>
                {approveComment &&
                  approveComment?.map((approve, index) => (
                    <div key={index} className={`${styles.remarks}`}>
                      <span>{approve}</span>
                    </div>
                  ))}

                <div className={`mb-3 ${styles.heading} heading `}>
                  Approval Remarks
                </div>
                <textarea
                  className="form-control input"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) => setSanctionComments(e.target.value)}
                ></textarea>
                <button
                  className={`${styles.button} mt-3 d-flex  align-items-center justify-content-center `}
                  onClick={() =>
                    sanctionComments.length > 0 &&
                    addApproveRemarkArr(sanctionComments)
                  }
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const Documents = (documentsFetched) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#Documents"
          aria-expanded="true"
          aria-controls="Documents"
        >
          <h2 className="mb-0">Documents Available</h2>
          <span>+</span>
        </div>
        <div
          id="Documents"
          className="collapse"
          aria-labelledby="Documents"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.terms_wrapper} card-body border_color`}>
            <Row className={`${styles.row}`}>
              {documentsFetched &&
                documentsFetched?.documents?.map((doc, index) => (
                  <Col md={3} key={index} className={`mb-3`}>
                    <div
                      className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                    >
                      <img src="./static/icon file copy.svg"></img>
                      <div className={`${styles.view} ml-4`}>
                        <span>{doc.name}</span>
                        <span
                          onClick={() =>
                            dispatch(
                              ViewDocument({
                                path: doc.path,
                                orderId: documentsFetched._id,
                              }),
                            )
                          }
                          className={`${styles.highlight} mt-2`}
                        >
                          VIEW
                        </span>
                      </div>
                    </div>
                  </Col>
                ))}
              {/* <Col md={3}>
                <div
                  className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                >
                  <img src="./static/icon file copy.svg"></img>
                  <div className={`${styles.view} ml-4`}>
                    <span>Insurance Certificate</span>
                    <span className={`${styles.highlight} mt-2`}>VIEW</span>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div
                  className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                >
                  <img src="./static/icon file copy.svg"></img>
                  <div className={`${styles.view} ml-4`}>
                    <span>Insurance Certificate</span>
                    <span className={`${styles.highlight} mt-2`}>VIEW</span>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div
                  className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                >
                  <img src="./static/icon file copy.svg"></img>
                  <div className={`${styles.view} ml-4`}>
                    <span>Insurance Certificate</span>
                    <span className={`${styles.highlight} mt-2`}>VIEW</span>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div
                  className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                >
                  <img src="./static/icon file copy.svg"></img>
                  <div className={`${styles.view} ml-4`}>
                    <span>Insurance Certificate</span>
                    <span className={`${styles.highlight} mt-2`}>VIEW</span>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div
                  className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                >
                  <img src="./static/icon file copy.svg"></img>
                  <div className={`${styles.view} ml-4`}>
                    <span>Insurance Certificate</span>
                    <span className={`${styles.highlight} mt-2`}>VIEW</span>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div
                  className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                >
                  <img src="./static/icon file copy.svg"></img>
                  <div className={`${styles.view} ml-4`}>
                    <span>Insurance Certificate</span>
                    <span className={`${styles.highlight} mt-2`}>VIEW</span>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div
                  className={`${styles.doc_container} p-2  d-flex align-items-center justify-content-start`}
                >
                  <img src="./static/icon file copy.svg"></img>
                  <div className={`${styles.view} ml-4`}>
                    <span>Insurance Certificate</span>
                    <span className={`${styles.highlight} mt-2`}>VIEW</span>
                  </div>
                </div>
              </Col> */}
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
const trends = (
  chartData,
  chartRef,
  chartRef2,
  chartData2,
  lineOption,
  gstData,
) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} style={{ cursor: 'default' }}>
          <h2 className="mb-0">Trends</h2>
          <div className="d-flex align-items-center">
            <h5
              className={`${styles.light} ${styles.unit_label} accordion_Text`}
            >
              Display By:
            </h5>
            <select
              className={`${styles.select} accordion_body form-select`}
              aria-label="Default select example"
            >
              <option>Select an option</option>
              <option selected value="1">
                Quarterly
              </option>
            </select>
            <span data-toggle="collapse" data-target="#trends" aria-expanded="true" aria-controls="trends">+</span>
          </div>
        </div>
        <div
          id="trends"
          className="collapse"
          aria-labelledby="trends"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.graph_wrapper} card-body`}>
            <Row className={`m-0`}>
              <Col className={`${styles.leftCol} p-0 border_color`} md={6}>
                <div className={`${styles.head_wrapper} card_sub_header`}>
                  <span className={`${styles.head}`}>Gross Revenue</span>
                  <span className={`${styles.child} ml-2`}>
                    :{' '}
                    {
                      Number(gstData?.detail?.salesDetailAnnual?.saleSummary
                        ?.grossTurnover?.current?.value)?.toLocaleString('fullWide', { minimumFractionDigits: 2 })
                    }
                  </span>
                </div>
                <div className={`${styles.chart}`}>
                  <Line data={chartData} ref={chartRef} options={lineOption} />
                </div>
                <div className={`${styles.name}`}>
                  <div
                    className={`${styles.name_wrapper} d-flex justify-content-center align-item-center`}
                  >
                    <div
                      className={styles.round}
                      style={{ backgroundColor: `#2979F2` }}
                    ></div>
                    <span className={` heading ml-2`}>Gross Revenue</span>
                  </div>
                </div>
              </Col>
              <Col md={6} className={`${styles.rightCol} px-0 border_color`}>
                <div className={`${styles.head_wrapper}  card_sub_header`}>
                  <span className={`${styles.head}`}>Gross Purchases</span>
                  <span className={`${styles.child} ml-2`}>
                    :{' '}
                    {
                      Number(gstData?.detail?.purchaseDetailAnnual?.saleSummary
                        ?.grossPurchases?.current?.value)?.toLocaleString('fullWide', { minimumFractionDigits: 2 })
                    }
                  </span>
                </div>
                <div className={`${styles.chart}`}>
                  <Line data={chartData2} ref={chartRef2}  options={lineOption} />
                </div>
                <div className={`${styles.name}`}>
                  <div
                    className={`${styles.name_wrapper} d-flex justify-content-center align-item-center`}
                  >
                    <div
                      className={styles.round}
                      style={{ backgroundColor: `#FA5F1C` }}
                    ></div>
                    <span className={` heading ml-2`}>Gross Purchases</span>
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
const skewness = (data, options, tempArr, gstData) => {
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} style={{ cursor: 'default' }}>
          <h2 className="mb-0">Skewness</h2>
          <div className="d-flex align-items-center">
            <h5
              className={`${styles.light}  ${styles.unit_label} accordion_Text`}
            >
              Display By:
            </h5>
            <select
              className={`${styles.select} accordion_body form-select`}
              aria-label="Default select example"
            >
              <option>Select an option</option>
              <option selected value="1">
                Quarterly
              </option>
            </select>
            <span data-toggle="collapse" data-target="#skewness" aria-expanded="true" aria-controls="skewness">+</span>
          </div>
        </div>
        <div
          id="skewness"
          className="collapse"
          aria-labelledby="skewness"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.graph_wrapper} card-body`}>
            <Row className={`m-0`}>
              <Col className={`${styles.leftCol} p-0 border_color`} md={6}>
                <div className={`${styles.head_wrapper} card_sub_header`}>
                  <span className={`${styles.head}`}>Gross Revenue</span>
                  <span className={`${styles.child} ml-2`}>
                    :{' '}
                    {
                      Number(gstData?.detail?.salesDetailAnnual?.saleSummary
                        ?.grossTurnover?.current?.value)?.toLocaleString('fullWide', { minimumFractionDigits: 2 })
                    }
                  </span>
                </div>
                <Row
                  className={`d-flex  d-flex align-items-center justify-content-evenly`}
                >
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
                          <div
                            key={index}
                            className={`${styles.name_wrapper} d-flex justify-content-start align-item-start`}
                          >
                            <div
                              className={styles.round}
                              style={{ backgroundColor: `${val.color}` }}
                            ></div>
                            <div
                              className={`d-flex justify-content-between align-item-start w-100`}
                            >
                              <span className={` heading ml-2`}>
                                {val.name}
                              </span>
                              <span className={` heading mr-4`}>51.23%</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className={`${styles.rightCol} px-0 border_color`}>
                <div className={`${styles.head_wrapper} card_sub_header`}>
                  <span className={`${styles.head}`}>Gross Purchases</span>
                  <span className={`${styles.child} ml-2`}>
                    :{' '}
                    {
                      Number(gstData?.detail?.purchaseDetailAnnual?.saleSummary
                        ?.grossPurchases?.current?.value)?.toLocaleString('fullWide', { minimumFractionDigits: 2 })
                    }
                  </span>
                </div>
                {/* <div className={`${styles.chart}`}>
                  <Line data={dataline} options={lineOption} />
                </div> */}
                <Row
                  className={`d-flex  d-flex align-items-center justify-content-evenly`}
                >
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
                          <div
                            key={index}
                            className={`${styles.name_wrapper} d-flex justify-content-start align-item-start`}
                          >
                            <div
                              className={styles.round}
                              style={{ backgroundColor: `${val.color}` }}
                            ></div>
                            <div
                              className={`d-flex justify-content-between align-item-start w-100`}
                            >
                              <span className={` heading ml-2`}>
                                {val.name}
                              </span>
                              <span className={` heading mr-4`}>51.23%</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
const customerRating = (data,filteredCreditRating,rating) => {
  console.log(filteredCreditRating,"filteredCreditRating22")
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#rating"
          aria-expanded="true"
          aria-controls="rating"
        >
          <h2 className="mb-0">Customer Rating</h2>
          <span className=" d-flex align-items-center justify-content-between">
            <span
              className={` d-flex align-items-center justify-content-between`}
            ></span>
            +
          </span>
        </div>
        <div
          id="rating"
          className="collapse"
          aria-labelledby="rating"
          data-parent="#profileAccordion"
        >
          <div className={`${styles.rating_wrapper} card-body`}>
            <Row className={`m-0`}>
              <Col
                className={`${styles.leftCol} p-0 border_color d-flex`}
                md={6}
              >
                <div className={`${styles.gauge}`}>
                  <div className={`${styles.container}`}>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 42 42"
                      className={`${styles.donut}`}
                    >
                      <circle
                        className={`${styles.donutHole}`}
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="#fff"
                      ></circle>
                      <circle
                        className={`${styles.donutRing}`}
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#ffffff"
                        strokeWidth="3"
                      ></circle>

                      <circle
                        className={`${styles.donutSegment}`}
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#FF4230"
                        strokeWidth="3"
                        strokeDasharray="30 70"
                        strokeDashoffset="15"
                      ></circle>
                      <circle
                        className={`${styles.donutSegment}`}
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#FFB700"
                        strokeWidth="3"
                        strokeDasharray="20 70"
                        strokeDashoffset="75"
                      ></circle>

                      <circle
                        className={`${styles.donutSegment}`}
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#8AC41C"
                        strokeWidth="3"
                        strokeDasharray="10 90"
                        strokeDashoffset="65"
                      ></circle>

                      <circle
                        className={`${styles.donutSegment}`}
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#00B81E"
                        strokeWidth="3"
                        strokeDasharray="20 70"
                        strokeDashoffset="45"
                      ></circle>
                    </svg>
                    <svg
                      width="65%"
                      height="65%"
                      viewBox="0 0 42 42"
                      className={`${styles.donut2}`}
                    >
                      <circle
                        className={`${styles.donutHole}`}
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="#fff"
                      ></circle>
                      <circle
                        className={`${styles.donutRing}`}
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="white"
                        strokeWidth="3"
                      ></circle>

                      <circle
                        className={`${styles.donutSegment}`}
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#D2D7E5"
                        strokeWidth="3"
                        strokeDasharray="29 71"
                        strokeDashoffset="15"
                      ></circle>
                      <circle
                        className={`${styles.donutSegment}`}
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#D2D7E5"
                        strokeWidth="3"
                        strokeDasharray="19 71"
                        strokeDashoffset="75"
                      ></circle>

                      <circle
                        className={`${styles.donutSegment}`}
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#D2D7E5"
                        strokeWidth="3"
                        strokeDasharray="9 91"
                        strokeDashoffset="65"
                      ></circle>

                      <circle
                        className={`${styles.donutSegment}`}
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#D2D7E5"
                        strokeWidth="3"
                        strokeDasharray="19 71"
                        strokeDashoffset="45"
                      ></circle>
                    </svg>
                    <img
                      src={`/static/needle.svg`}
                      className={`${styles.arrow}`}
                      style={{transform:`${rating}`}}
                    ></img>
                    <div className={`${styles.score}`}>{Math.round(filteredCreditRating?filteredCreditRating[0]?.totalRating:0)}.0</div>
                  </div>
                </div>

                <div className={`${styles.score} `}>
                  <div className={`${styles.excellent}`}>
                    <span>{filteredCreditRating?filteredCreditRating[0]?.creditResult?.toUpperCase():""}</span>
                  </div>
                  <div className={`${styles.creditScore}`}>
                    <div className={`${styles.tickContainer}`}>
                      <img src="static/darktick.svg"></img>
                    </div>
                    <div className={`${styles.content}`}>
                      <span className={`${styles.content_heading}`}>
                        CREDIT SCORE
                      </span>
                      <div>
                        <span className={`${styles.score}`}>{Math.round(filteredCreditRating?filteredCreditRating[0]?.totalRating:0)}.0</span>
                        <span className={`${styles.outOF}`}>/10</span>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.creditScore}`}>
                    <div className={`${styles.tickContainer}`}>
                      <img src="static/star.svg"></img>
                    </div>
                    <div className={`${styles.content}`}>
                      <span className={`${styles.content_heading}`}>
                        RATING
                      </span>
                      <div>
                        <span className={`${styles.score}`}>{filteredCreditRating?filteredCreditRating[0]?.creditGrade:""}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} className={`${styles.rightCol} pl-0 border_color`}>
                <div
                  className={`${styles.fillWrapper} d-flex justify-content-startt align-items-center`}
                >
                  <div>
                    <span>BUSINESS PROFILE</span>
                    <div className={`${styles.bar} ${styles.small_bar}`}>
                      <div
                        style={{ backgroundColor: '#FFB700' }}
                        className={`${styles.fill}`}
                      ></div>
                      <span>80%</span>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.fillWrapper} d-flex justify-content-startt align-items-center`}
                >
                  <div>
                    <span>REVENUE PROFILE</span>
                    <div className={`${styles.bar} ${styles.small_bar}`}>
                      <div
                        style={{ backgroundColor: '#FF4230' }}
                        className={`${styles.fill}`}
                      ></div>
                      <span>40%</span>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.fillWrapper} d-flex justify-content-startt align-items-center`}
                >
                  <div>
                    <span>FINANCIAL PROFILE</span>
                    <div className={`${styles.bar} ${styles.small_bar}`}>
                      <div
                        style={{ backgroundColor: '#83C400' }}
                        className={`${styles.fill}`}
                      ></div>
                      <span>90%</span>
                    </div>
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
