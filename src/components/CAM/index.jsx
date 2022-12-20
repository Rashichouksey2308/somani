import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import moment from 'moment';
import { Col, Row } from 'react-bootstrap';
import { Doughnut, Line } from 'react-chartjs-2';
import TooltipCard from '../../components/TooltipCard/index';

import {
  ArcElement,
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { GetDocuments } from 'redux/creditQueueUpdate/action';
import { ViewDocument } from 'redux/ViewDoc/action';
import _get from 'lodash/get';

import { addPrefixOrSuffix, checkNan, convertValue, CovertvaluefromtoCR } from '../../utils/helper';
import { isArray } from 'lodash';

import Toggle from '../Toggle/index';

Chart.register(
  ArcElement,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
);

function Index({
  fetchingKarzaGst,
  gstData,
  camData,
  companyData,
  addApproveRemarkArr,
  approveComment,
  saveApprovedCreditData,
  approvedCredit,
  orderDetails,
  GstData,
  setTotalCustomer1,
  setTotalSupplier1,
  setTop5Suppliers1,
  setTop3Share1,
  setTop3Open1,
  setTop5Customers1,
  camConversionunit,
  totalLimitDebt,
  CreditAgency,
  litigationStatus,
  debtProfileColor,
  History,
  history,
}) {
  const dispatch = useDispatch();

  const [isFieldInFocus, setIsFieldInFocus] = useState({
    LimitValue: false,
    OrderValue: false,
  });
  // const [darkMode, setDarkMode] = useState(false);
  const darkMode = useSelector((state) => state.user.isDark);

  useEffect(() => {
    let id1 = sessionStorage.getItem('orderID');
    dispatch(GetDocuments(`?order=${id1}`));
  }, [dispatch]);

  const filteredCreditRating = camData?.company?.creditLimit?.creditRating?.filter((rating) => {
    return camData?._id === rating.order;
  });

  const { documentsFetched } = useSelector((state) => state.review);

  const onApprove = (name, value) => {
    // if (gettingPercentageCredit()) {
    saveApprovedCreditData(name, value);
    // }
  };
  const onApproveOrder = (name, value) => {
    // if (gettingPercentageOrder()) {
    saveApprovedCreditData(name, value);
    // }
  };

  const [sanctionComments, setSanctionComments] = useState('');

  const latestBalanceData = _get(companyData, 'financial.balanceSheet[0]', {});

  const previousBalanceData = _get(companyData, 'financial.balanceSheet[1]', {});

  const latestIncomeData = _get(companyData, 'financial.incomeStatement[0]', {});
  const previousIncomeData = _get(companyData, 'financial.incomeStatement[1]', {});

  const latestYearData = _get(companyData, 'financial.ratioAnalysis[0]', {});
  const previousYearData = _get(companyData, 'financial.ratioAnalysis[1]', {});

  const openChargesLength = () => {
    const filteredData = camData?.company?.detailedCompanyInfo?.financial?.openCharges?.filter(
      (data) => data.dateOfSatisfactionOfChargeInFull === null,
    );

    const length = filteredData?.length;

    return length;
  };
  const primaryBankName = () => {
    let filteredData = [];
    filteredData = camData?.company?.debtProfile?.filter((data) => data.primaryBank) || [];

    const length = _get(filteredData[0], 'bankName', '');

    return length;
  };

  const latestAuditorData = _get(camData, 'company.detailedCompanyInfo.profile.auditorDetail[0]', {});
  const previousAuditorData = _get(camData, 'company.detailedCompanyInfo.profile.auditorDetail[1]', {});

  const [tempArr, setTempArr] = useState([
    {
      name: 'Bindu Singh',
      value: 66705,
      color: '#3687E8',
    },
    {
      name: 'Bindu Singh',
      value: 66705,
      color: '#43C34D',
    },
    {
      name: 'Bindu Singh',
      value: 66705,
      color: '#FF9D00',
    },
  ]);

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
  ];
  let randColor = colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    let data;
    if (camData?.company?.detailedCompanyInfo?.profile?.shareholdingPattern) {
      data = camData?.company?.detailedCompanyInfo?.profile?.shareholdingPattern.forEach((element, index) => {
        if (element.fullName === '') {
        } else {
          if (index < 2) {
            setTempArr((prevState) => {
              return [
                ...prevState,
                {
                  ...prevState[index],
                  name: element.fullName,
                  value: element.numberOfShares,
                },
              ];
            });
          }
        }
      });
      camData?.company?.detailedCompanyInfo?.profile?.shareholdingPattern.forEach((element, index) => {
        if (element.fullName === '') {
        } else {
          if (index <= 2) {
            tempArr.forEach((el, index2) => {
              if ((index = index2)) {
                el.name = element.fullName;
                el.value = element.numberOfShares;
              }
            });
          }
        }
      });
    }
  }, [camData]);

  let data = {
    labels: ['Sail', 'Jindal Grou', 'SR Steel'],
    datasets: [
      {
        label: '',
        data: [25, 20, 55],

        backgroundColor: ['#4CAF50', '#FF9D00', '#2884DE'],
      },
    ],
  };

  const options = {
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    plugins: {
      title: {
        animation: {
          animateScale: true,
        },
      },

      legend: {
        display: false,
      },
    },
    responsive: true,
    cutout: 130,
  };

  const covertMonths = (months) => {
    const CovertedMonts = [];
    months?.map((month) => {
      let convertedMonths = [];
      CovertedMonts.push(...convertedMonths, moment(month, 'MMYYYY').format('MMMM'));
    });
    return CovertedMonts;
  };

  const lineOption = {
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
      tooltip: {
        enabled: true,
        position: 'nearest',
        // external: externalTooltipHandler
      },
      legend: {
        display: false,
      },
    },
  };
  function createGradient(ctx, area, color, color2) {
    let gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, color2);
    gradient.addColorStop(1, color);

    return gradient;
  }

  const chartRef = useRef(null);
  const chartRef2 = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartData2, setChartData2] = useState({
    datasets: [],
  });

  // let data = {
  //   labels: ['Sail', 'Jindal Grou', 'SR Steel'],
  //   datasets: [
  //     {
  //       label: '',
  //       data: [25, 20, 55],

  //       backgroundColor: ['#4CAF50', '#FF9D00', '#2884DE'],
  //     },
  //   ],
  // }
  let backgroundColor = ['#61C555', '#876EB1', '#2884DE', '#ED6B5F', '#2884DE'];
  const [top5Customers, setTop5Customers] = useState({
    labels: [],
    datasets: [],
  });

  const [totalCustomer, setTotalCustomer] = useState(0);
  const [totalSupplier, setTotalSupplier] = useState(0);
  const [top5Suppliers, setTop5Suppliers] = useState({
    labels: [],
    datasets: [],
  });
  const [top3Share, setTop3Share] = useState({
    labels: [],
    datasets: [],
  });
  const [top3Open, setTop3Open] = useState({
    labels: [],
    datasets: [],
  });
  const findTop5Customers = (data) => {
    let temp = [];
    if (data?.names?.length > 0) {
      data.names.forEach((val, index) => {
        temp.push({ name: val, value: data.values[index] });
      });
      let sortedval = temp.sort((a, b) => parseFloat(b.values) - parseFloat(a.values));
      let length = sortedval.length < 5 ? sortedval.length : 5;
      let lable = [];
      let dataSet = [];
      let total = 0;
      for (let i = 0; i < length; i++) {
        lable.push(sortedval[i].name);
        dataSet.push(sortedval[i].value);
        total = total + sortedval[i].value;
      }
      let top5data = {
        labels: lable,
        datasets: [
          {
            label: lable,
            data: dataSet,
            backgroundColor: backgroundColor,
          },
        ],
      };
      setTotalCustomer(total);
      setTop5Customers({ ...top5data });
      setTotalCustomer1(total);
      setTop5Customers1({ ...top5data });
    }
  };
  const findTop5Suppliers = (data) => {
    let temp = [];
    if (data?.names?.length > 0) {
      data.names.forEach((val, index) => {
        temp.push({ name: val, value: data.values[index] });
      });
      let sortedval = temp.sort((a, b) => parseFloat(b.values) - parseFloat(a.values));
      let length = sortedval.length < 5 ? sortedval.length : 5;
      let lable = [];
      let dataSet = [];
      let total = 0;
      for (let i = 0; i < length; i++) {
        lable.push(sortedval[i].name);
        dataSet.push(sortedval[i].value);
        total = total + sortedval[i].value;
      }
      let top5data = {
        labels: lable,
        datasets: [
          {
            label: lable,
            data: dataSet,
            backgroundColor: backgroundColor,
          },
        ],
      };
      setTotalSupplier(total);
      setTop5Suppliers({ ...top5data });
      setTotalSupplier1(total);
      setTop5Suppliers1({ ...top5data });
    }
  };
  const findTop3Share = (data) => {
    let temp = [];
    if (data?.length > 0) {
      data.forEach((val, index) => {
        temp.push({ name: val.fullName, value: val.numberOfShares });
      });
      let sortedval = temp.sort((a, b) => parseFloat(b.values) - parseFloat(a.values));
      let length = 3;
      let lable = [];
      let dataSet = [];
      let total = 0;
      for (let i = 0; i < length; i++) {
        lable.push(sortedval[i]?.name);
        dataSet.push(sortedval[i]?.value);
        total = total + sortedval[i]?.value;
      }
      let top5data = {
        labels: lable,
        datasets: [
          {
            label: lable,
            data: dataSet,
            backgroundColor: backgroundColor,
            hoverOffset: 4,
          },
        ],
      };

      setTop3Share({ ...top5data });
      setTop3Share1({ ...top5data });
    }
  };
  const findTop3Open = (data) => {
    let temp = [];
    if (data?.length > 0) {
      data.forEach((val, index) => {
        if (
          val.finalAmountSecured !== null ||
          !val.dateOfSatisfactionOfChargeInFull ||
          val.dateOfSatisfactionOfChargeInFull === ''
        ) {
          temp.push({
            name: val.nameOfChargeHolder1,
            value: val.finalAmountSecured,
          });
        }
      });
      let sortedval = temp.sort((a, b) => parseFloat(b.values) - parseFloat(a.values));
      let length = 3;
      let lable = [];
      let dataSet = [];
      let total = 0;
      for (let i = 0; i < length; i++) {
        lable.push(sortedval[i]?.name);
        dataSet.push(sortedval[i]?.value || 0);
      }
      let top5data = {
        labels: lable,
        datasets: [
          {
            label: lable,
            data: dataSet,
            backgroundColor: backgroundColor,
            hoverOffset: 20,
          },
        ],
      };

      setTop3Open({ ...top5data });
      setTop3Open1({ ...top5data });
    }
  };

  useEffect(() => {
    findTop5Customers(GstData?.detail?.summaryCharts?.top10Cus);
    findTop5Suppliers(GstData?.detail?.summaryCharts?.top10Suppliers);

    findTop3Share(camData?.company?.detailedCompanyInfo?.profile?.shareholdingPattern);
    findTop3Open(camData?.company?.detailedCompanyInfo?.financial?.openCharges);
  }, [GstData, camData]);
  useEffect(() => {
    const chart = chartRef.current;
    const chart2 = chartRef2.current;

    if (!chart) {
      return;
    }

    const data = {
      labels: covertMonths(gstData?.detail?.summaryCharts?.grossRevenue?.month),
      datasets: [
        {
          label: 'First dataset',
          data: gstData?.detail?.summaryCharts?.grossRevenue?.month,
          fill: true,
          backgroundColor: createGradient(chart.ctx, chart.chartArea, 'rgb(71, 145, 255,0.1)', 'rgb(71, 145, 255,0.2)'),
          borderColor: '#2979F2',
        },
      ],
    };
    if (!chart2) {
      return;
    }

    const data2 = {
      labels: covertMonths(gstData?.detail?.summaryCharts?.grossPurchases?.month),
      datasets: [
        {
          label: 'First dataset',
          data: gstData?.detail?.summaryCharts?.grossPurchases?.month,
          fill: true,
          backgroundColor: createGradient(chart2.ctx, chart2.chartArea, 'rgb(250, 95, 28,0.1)', 'rgb(250, 95, 28,0.2)'),
          borderColor: '#FA5F1C',
        },
      ],
    };

    setChartData(data);
    setChartData2(data2);
  }, [chartRef.current, chartRef2.current]);

  const [rating, setRating] = useState(`rotate(0deg)`);
  useEffect(() => {
    if (filteredCreditRating) {
      getRotate(filteredCreditRating[0]?.totalRating);
      //  getRotate(2)
    }
  }, [filteredCreditRating]);

  const getRotate = (rat = 1) => {
    let r = Math.round(rat);
    // let r = 10;
    if (r == 0) {
      setRating(`rotate(90deg)`);
    }
    if (r == 1) {
      setRating(`rotate(90deg)`);
    }
    if (r == 2) {
      setRating(`rotate(130deg)`);
    }
    if (r == 3) {
      setRating(`rotate(180deg)`);
    }
    if (r == 4) {
      setRating(`rotate(200deg)`);
    }
    if (r == 5) {
      setRating(`rotate(225deg)`);
    }
    if (r == 6) {
      setRating(`rotate(250deg)`);
    }
    if (r == 7) {
      setRating(`rotate(270deg)`);
    }

    if (r == 8) {
      setRating(`rotate(310deg)`);
    }
    if (r == 9) {
      setRating(`rotate(330deg)`);
    }
    if (r == 10) {
      setRating(`rotate(2deg)`);
    }
  };
  return (
    <>
      {basicInfo(camData, orderDetails, camConversionunit)}
      {supplierInfo(camData)}
      {customerRating(camData, filteredCreditRating, rating, darkMode)}
      {groupExposure(camData, camConversionunit)}
      {orderSummary(camData, camConversionunit)}
      {creditProfile(
        camData,
        openChargesLength,
        primaryBankName,
        latestAuditorData,
        previousAuditorData,
        companyData,
        CreditAgency,
      )}
      {directorDetails(camData)}
      {shareHolding(top3Share, options, tempArr, camData, backgroundColor)}
      {chargeDetails(top3Open, options, tempArr, camData, backgroundColor, camConversionunit)}
      {debtProfile(data, options, tempArr, camData, totalLimitDebt, camConversionunit, debtProfileColor)}
      {operationalDetails(camData, History)}
      {revenuDetails(gstData, camConversionunit)}
      {trends(chartData, chartRef, chartRef2, chartData2, lineOption, gstData, camConversionunit)}
      {skewness(
        top5Customers,
        options,
        tempArr,
        gstData,
        top5Suppliers,
        backgroundColor,
        totalCustomer,
        totalSupplier,
        camConversionunit,
      )}
      {financeDetails(
        data,
        options,
        tempArr,
        latestBalanceData,
        previousBalanceData,
        companyData,
        latestYearData,
        previousYearData,
        camConversionunit,
      )}
      {compilanceStatus(companyData, camData, litigationStatus)}
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
        approvedCredit,
        isFieldInFocus,
        setIsFieldInFocus,
      )}
      {Documents(documentsFetched)}
    </>
  );
}
const onToggle = (state) => {};

export default Index;

export const basicInfo = (camData, orderDetails, camConversionunit, companyData) => {
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#basicInfo"
                aria-expanded="true"
                aria-controls="basicInfo"
              >
                <h2 className="mb-0">Basic Info</h2>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div
                id="basicInfo"
                // className="collapse"
                aria-labelledby="basicInfo"
                data-parent="#basicInfo"
              >
                <div className={`${styles.info_wrapper}  card-body border_color pb-4`}>
                  <div className={`${styles.content} ${styles.highlight} card_sub_header  mb-4`}>
                    <Row className={``}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`} style={{ background: 'transparent' }}>
                          Transaction Type
                        </span>
                        <span className={`${styles.value} value`}>
                          {orderDetails?.transactionType}
                          {companyData?.history[0]?.profile?.companyDetail?.transactionType && (
                            <TooltipCard data={companyData?.history[0]?.profile?.companyDetail?.transactionType} />
                          )}
                        </span>
                      </Col>
                    </Row>
                  </div>
                  <div className={`${styles.content} mb-4`}>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Sourcing Channel</span>
                        <span className={`${styles.value} value`}>{orderDetails?.company?.sourceChanel}</span>
                      </Col>
                      <Col className={` col-md-offset-2 d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>City</span>
                        <span className={`${styles.value} value`}>
                          {camData?.company?.detailedCompanyInfo?.profile?.companyDetail?.city}
                          {companyData?.history[0]?.profile?.companyDetail?.city && (
                            <TooltipCard data={companyData?.history[0]?.profile?.companyDetail?.city} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Buyer</span>
                        <span className={`${styles.value} value`}>
                          {camData?.company?.companyName}
                          {companyData?.history[0]?.profile?.companyDetail?.companyName && (
                            <TooltipCard data={companyData?.history[0]?.profile?.companyDetail?.companyName} />
                          )}
                        </span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>State</span>
                        <span className={`${styles.value} value`}>
                          {camData?.company?.detailedCompanyInfo?.profile?.companyDetail?.state}
                          {companyData?.history[0]?.profile?.companyDetail?.state && (
                            <TooltipCard data={companyData?.history[0]?.profile?.companyDetail?.state} />
                          )}{' '}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Type of Business</span>
                        <span className={`${styles.value} value`}>
                          {camData?.company?.detailedCompanyInfo?.profile?.companyDetail?.typeOfBusiness?.join(', ')}
                          {companyData?.history[0]?.profile?.companyDetail?.typeOfBusiness && (
                            <TooltipCard data={companyData?.history[0]?.profile?.companyDetail?.typeOfBusiness} />
                          )}
                        </span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Industry</span>
                        <span className={`${styles.value} value`}>
                          {camData?.company?.detailedCompanyInfo?.profile?.companyDetail?.industry}
                          {companyData?.history[0]?.profile?.companyDetail?.industry && (
                            <TooltipCard data={companyData?.history[0]?.profile?.companyDetail?.industry} />
                          )}
                        </span>
                      </Col>
                    </Row>
                  </div>
                  <div className={`${styles.content} ${styles.highlight} card_sub_header  mb-4`}>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Order Value</span>
                        <span className={`${styles.value} value`}>
                          {convertValue(camData?.orderValue, camConversionunit)?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                          })}{' '}
                          {camData?.unitOfValue == 'Crores' ? 'Cr' : camData?.unitOfValue}
                          {companyData?.history[0]?.profile?.companyDetail?.unitOfValue && (
                            <TooltipCard data={companyData?.history[0]?.profile?.companyDetail?.unitOfValue} />
                          )}
                        </span>
                      </Col>
                      <Col className={` col-md-offset-2 d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Commodity</span>
                        <span className={`${styles.value} value`}>
                          {camData?.commodity}
                          {companyData?.history[0]?.commodity && (
                            <TooltipCard data={companyData?.history[0]?.commodity} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Quantity</span>
                        <span className={`${styles.value} value`}>
                          {camData?.quantity?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                          })}{' '}
                          {camData?.unitOfQuantity.toUpperCase()}
                        </span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Supplier</span>
                        <span className={`${styles.value} value`}>
                          {camData?.supplierName}
                          {companyData?.history[0]?.supplierName && (
                            <TooltipCard data={companyData?.history[0]?.supplierName} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Country of Origin</span>
                        <span className={`${styles.value} value`}>
                          {camData?.countryOfOrigin}
                          {companyData?.history[0]?.countryOfOrigin && (
                            <TooltipCard data={companyData?.history[0]?.countryOfOrigin} />
                          )}
                        </span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Transaction Period (Days)</span>
                        <span className={`${styles.value} value`}>
                          {camData?.transactionPeriodDays}
                          {companyData?.history[0]?.transactionPeriodDays && (
                            <TooltipCard data={companyData?.history[0]?.transactionPeriodDays} />
                          )}
                        </span>
                      </Col>
                    </Row>
                  </div>
                  <div className={`${styles.content}`}>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Port of Loading</span>
                        <span className={`${styles.value} value`}>
                          {camData?.shipmentDetail?.portOfLoading}
                          {companyData?.history[0]?.shipmentDetail?.portOfLoading && (
                            <TooltipCard data={companyData?.history[0]?.shipmentDetail?.portOfLoading} />
                          )}
                        </span>
                      </Col>
                      <Col className={` col-md-offset-2 d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Port of Discharge</span>
                        <span className={`${styles.value} value`}>
                          {camData?.portOfDischarge}
                          {companyData?.history[0]?.portOfDischarge && (
                            <TooltipCard data={companyData?.history[0]?.portOfDischarge} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Exp. Date of Shipment</span>
                        <span className={`${styles.value} value`}>
                          {/* {camData?.ExpectedDateOfShipment.split('T')[0]} */}
                          {camData?.ExpectedDateOfShipment
                            ? moment(camData?.ExpectedDateOfShipment).format('DD-MM-YYYY')
                            : ''}
                          {companyData?.history[0]?.ExpectedDateOfShipment && (
                            <TooltipCard data={companyData?.history[0]?.ExpectedDateOfShipment} />
                          )}
                        </span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>ETA at Discharge port</span>
                        <span className={`${styles.value} value`}>
                          {/* {
                      camData?.shipmentDetail?.ETAofDischarge?.fromDate?.split(
                        'T',
                      )[0]
                    } */}

                          {camData?.shipmentDetail?.ETAofDischarge?.fromDate
                            ? moment(camData?.shipmentDetail?.ETAofDischarge?.fromDate).format('DD-MM-YYYY')
                            : ''}
                          {camData?.ExpectedDateOfShipment
                            ? moment(camData?.ExpectedDateOfShipment).format('DD-MM-YYYY')
                            : ''}
                          {companyData?.history[0]?.shipmentDetail?.ETAofDischarge?.fromDate && (
                            <TooltipCard data={companyData?.history[0]?.shipmentDetail?.ETAofDischarge?.fromDate} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Laycan from</span>
                        <span className={`${styles.value} value`}>
                          {/* {camData?.shipmentDetail?.loadPort?.fromDate?.split('T')[0]} */}
                          {/* {camData?.shipmentDetail?.loadPort?.fromDate
                      ? moment(
                        camData?.shipmentDetail?.loadPort?.fromDate?.slice(
                          0,
                          10,
                        ),
                        'YYYY-MM-DD',
                        true,
                      ).format('DD-MM-YYYY')
                      : ''} */}
                          {camData?.shipmentDetail?.loadPort?.fromDate
                            ? moment(camData?.shipmentDetail?.loadPort?.fromDate).format('DD-MM-YYYY')
                            : ''}
                          {companyData?.history[0]?.shipmentDetail?.loadPort?.fromDate && (
                            <TooltipCard data={companyData?.history[0]?.shipmentDetail?.loadPort?.fromDate} />
                          )}
                        </span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Laycan to</span>
                        <span className={`${styles.value} value`}>
                          {/* {camData?.shipmentDetail?.loadPort?.toDate?.split('T')[0]} */}
                          {/* {camData?.shipmentDetail?.loadPort?.toDate
                      ? moment(
                        camData?.shipmentDetail?.loadPort?.toDate?.slice(
                          0,
                          10,
                        ),
                        'YYYY-MM-DD',
                        true,
                      ).format('DD-MM-YYYY')
                      : ''} */}
                          {camData?.shipmentDetail?.loadPort?.toDate
                            ? moment(camData?.shipmentDetail?.loadPort?.toDate).format('DD-MM-YYYY')
                            : ''}
                          {companyData?.history[0]?.shipmentDetail?.loadPort?.toDate && (
                            <TooltipCard data={companyData?.history[0]?.shipmentDetail?.loadPort?.toDate} />
                          )}
                        </span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    </>
  );
};
export const supplierInfo = (camData, companyData) => {
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#supplierInfo"
                aria-expanded="true"
                aria-controls="supplierInfo"
              >
                <h2 className="mb-0">Supplier Info</h2>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div id="supplierInfo" className="collapse" aria-labelledby="supplierInfo" data-parent="#supplierInfo">
                <div className={`${styles.info_wrapper}  card-body border_color`}>
                  <div className={`${styles.content} mb-4`}>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>No. of Shipments</span>
                        <span className={`${styles.value} value`}>
                          {camData?.supplierCredential?.shipmentNumber}
                          {companyData?.history[0]?.supplierCredential?.shipmentNumber && (
                            <TooltipCard data={companyData?.history[0]?.supplierCredential?.shipmentNumber} />
                          )}
                        </span>
                      </Col>
                      <Col className={` col-md-offset-2 d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1 pl-5`}>Port of Destination</span>
                        <span className={`${styles.value} value`}>
                          {camData?.supplierCredential?.portOfDestination}
                          {companyData?.history[0]?.supplierCredential?.portOfDestination && (
                            <TooltipCard data={companyData?.history[0]?.supplierCredential?.portOfDestination} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>No. of Consignees</span>
                        <span className={`${styles.value} value`}>
                          {camData?.supplierCredential?.consigneesNumber}
                          {companyData?.history[0]?.supplierCredential?.consigneesNumber && (
                            <TooltipCard data={companyData?.history[0]?.supplierCredential?.consigneesNumber} />
                          )}
                        </span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1 pl-5`}>Latest Shipment date</span>
                        <span className={`${styles.value} value`}>
                          {/* {camData?.supplierCredential?.latestShipmentDate
                      ? moment(
                        camData?.supplierCredential?.latestShipmentDate?.split(
                          'T',
                        )[0],
                      ).format('DD-MM_YYYY')
                      : ''} */}
                          {camData?.supplierCredential?.latestShipmentDate
                            ? moment(camData?.supplierCredential?.latestShipmentDate).format('DD-MM-YYYY')
                            : ''}
                          {companyData?.history[0]?.supplierCredential?.latestShipmentDate && (
                            <TooltipCard data={companyData?.history[0]?.supplierCredential?.latestShipmentDate} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>No. of HS codes</span>
                        <span className={`${styles.value} value`}>
                          {camData?.supplierCredential?.HSCodesNumber}
                          {companyData?.history[0]?.supplierCredential?.HSCodesNumber && (
                            <TooltipCard data={companyData?.history[0]?.supplierCredential?.HSCodesNumber} />
                          )}
                        </span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1 pl-5`}>Oldest shipment date</span>
                        <span className={`${styles.value} value`}>
                          {/* {camData?.supplierCredential?.oldestShipmentDate
                      ? moment(
                        camData?.supplierCredential?.oldestShipmentDate?.split(
                          'T',
                        )[0],
                      ).format('DD-MM-YYYY')
                      : ''} */}
                          {camData?.supplierCredential?.oldestShipmentDate
                            ? moment(camData?.supplierCredential?.oldestShipmentDate).format('DD-MM-YYYY')
                            : ''}
                          {companyData?.history[0]?.supplierCredential?.oldestShipmentDate && (
                            <TooltipCard data={companyData?.history[0]?.supplierCredential?.oldestShipmentDate} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Country of Origins</span>
                        <span className={`${styles.value} value`}>
                          {camData?.supplierCredential?.countryOfOrigin}
                          {companyData?.history[0]?.supplierCredential?.countryOfOrigin && (
                            <TooltipCard data={companyData?.history[0]?.supplierCredential?.countryOfOrigin} />
                          )}
                        </span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1 pl-5`}>Commodity to total trade (24 months)</span>
                        <span className={`${styles.value} ${styles.danger_highlight} value`}>
                          {camData?.supplierCredential?.commodityOfTotalTrade?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                          })}{' '}
                          %
                          {companyData?.history[0]?.supplierCredential?.commodityOfTotalTrade && (
                            <TooltipCard data={companyData?.history[0]?.supplierCredential?.commodityOfTotalTrade} />
                          )}
                        </span>
                      </Col>
                    </Row>
                  </div>
                  <div className={`${styles.remark_Wrapper}`}>
                    <p className={`${styles.remark_head} label_heading`}>Remark</p>
                    <p>
                      {camData?.supplierCredential?.remarks}
                      {companyData?.history[0]?.supplierCredential?.remarks && (
                        <TooltipCard data={companyData?.history[0]?.supplierCredential?.remarks} />
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    </>
  );
};
export const groupExposure = (camData, camConversionunit, companyData) => {
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#groupExposure"
                aria-expanded="true"
                aria-controls="groupExposure"
              >
                <h2 className="mb-0">Group Exposure Details</h2>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div id="groupExposure" className="collapse" aria-labelledby="groupExposure" data-parent="#groupExposure">
                <div className={`${styles.info_wrapper} card-body border_color`}>
                  <Row className={`${styles.row}`}>
                    {camData &&
                      camData?.company?.groupExposureDetail?.map((exp, index) => {
                        let name = exp?.name?.split(' ') ?? 'NA';

                        return (
                          <Col key={index} md={4}>
                            <div className={`${styles.exposureCard} border_color`}>
                              <Row>
                                <Col sm={12} className={`d-flex justify-content-start align-content-center  mb-5`}>
                                  <div className={`${styles.icon} `}>
                                    <span className={`d-flex justify-content-center align-content-center`}>
                                      {isArray(name) &&
                                        name?.map((item, index) => {
                                          if (index < 2) {
                                            return item?.charAt(0).toUpperCase();
                                          }
                                        })}
                                    </span>
                                  </div>

                                  <span className={` ${styles.name} ml-3  `}>{exp.name}</span>
                                </Col>
                                <Col sm={12} className={`${styles.limit}   mb-5`}>
                                  <div
                                    className={`${styles.label} d-flex justify-content-between align-content-center  mb-3`}
                                  >
                                    <div className={`${styles.limit_box} `}>
                                      <span className={`${styles.limit_label} `}>LIMIT</span>
                                    </div>
                                    <span>
                                      {convertValue(exp.limit, camConversionunit).toLocaleString('en-In', {
                                        maximumFractionDigits: 2,
                                      })}
                                    </span>
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
                                      <span className={`${styles.limit_label} `}>O/S BALANCE</span>
                                    </div>
                                    <span>
                                      {convertValue(exp.outstandingLimit, camConversionunit).toLocaleString('en-In', {
                                        maximumFractionDigits: 2,
                                      })}
                                    </span>
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
                                      <span className={`${styles.limit_label} `}>CONDUCT</span>
                                    </div>
                                  </div>
                                  <p>{exp.accountConduct}</p>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        );
                      })}{' '}
                  </Row>
                </div>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    </>
  );
};
export const orderSummary = (camData, camConversionunit, companyData) => {
  let name = camData?.company?.companyName ?? 'N A';
  let Initials = name?.split(' ');

  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#orderSummary"
                aria-expanded="true"
                aria-controls="orderSummary"
              >
                <h2 className="mb-0">Order Summary - Last 6 Orders</h2>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div id="orderSummary" className="collapse" aria-labelledby="orderSummary" data-parent="#orderSummary">
                <div className={`${styles.order_wrapper} px-0 card-body border_color`}>
                  <table className={`${styles.table} table mb-0 border_color`} cellPadding="0" cellSpacing="0">
                    <tr>
                      <th>CUSTOMER NAME</th>
                      <th>ORDER NO</th>
                      <th>ORDER VALUE</th>
                      <th>COMMODITY</th>
                      <th>STATUS</th>

                      <th>DAYS DUE</th>
                    </tr>
                    {/* <tr>
                <td>JUL 2022 - JUN 2023</td>

                <td colSpan={5}>
                  <div className={`${styles.dashedLine}`}></div>
                </td>
              </tr> */}
                    <tr>
                      <td className={`d-flex justify-content-start align-content-center`}>
                        <div className={`${styles.icon} `}>
                          <span className={`d-flex justify-content-center align-content-center`}>
                            {`${Initials[0]?.charAt(0)}${Initials[1]?.charAt(0)}`}
                          </span>
                        </div>

                        <span className={` ${styles.name} ml-3  `}>{camData?.company?.companyName}</span>
                      </td>
                      <td>
                        {camData?.orderId}
                        {companyData?.history[0]?.orderId && <TooltipCard data={companyData?.history[0]?.orderId} />}
                      </td>
                      <td>
                        {convertValue(camData?.orderValue, camConversionunit)?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td>
                        {camData?.commodity}
                        {companyData?.history[0]?.commodity && (
                          <TooltipCard data={companyData?.history[0]?.commodity} />
                        )}
                      </td>
                      <td>In Process</td>

                      <td>12</td>
                    </tr>
                    <tr>
                      <td colSpan={6} height="10"></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    </>
  );
};
export const creditProfile = (
  camData,
  openChargesLength = () => {},
  primaryBankName = () => {},
  latestAuditorData,
  previousAuditorData,
  companyData,
  CreditAgency = () => {},
) => {
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#creditProfile"
                aria-expanded="true"
                aria-controls="creditProfile"
              >
                <h2 className="mb-0">Credit Profile</h2>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div id="creditProfile" className="collapse" aria-labelledby="creditProfile" data-parent="#creditProfile">
                <div className={`${styles.info_wrapper} card-body pb-4 border_color`}>
                  <div className={`${styles.content}`}>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Main Banker</span>
                        <span className={`${styles.value} value`}>{primaryBankName()}</span>
                      </Col>
                      <Col className={`  d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1 pl-5`}>External Credit rating</span>
                        <span className={`${styles.value} value`}>
                          {CreditAgency()?.rating_}
                          {companyData?.history[0]?.profile?.creditRating[0]?.rating_ && (
                            <TooltipCard data={companyData?.history[0]?.profile?.creditRating[0]?.rating_} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Open Charges</span>
                        <span className={`${styles.value} value`}>{openChargesLength()}</span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1 pl-5`}>Credit Rating Agency</span>
                        <span className={`${styles.value} value`}>
                          {CreditAgency()?.ratingAgency}
                          {companyData?.history[0]?.profile?.creditRating[0]?.ratingAgency && (
                            <TooltipCard data={companyData?.history[0]?.profile?.creditRating[0]?.ratingAgency} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Name of Auditor</span>
                        <span className={`${styles.value} value`}>
                          {latestAuditorData?.nameOfAuditor}
                          {companyData?.history[0]?.latestAuditorData?.nameOfAuditor && (
                            <TooltipCard data={companyData?.history[0]?.latestAuditorData?.nameOfAuditor} />
                          )}
                        </span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1 pl-5`}>Change in Auditor</span>
                        <span className={`${styles.value} value `}>
                          {latestAuditorData?.nameOfAuditor
                            ? latestAuditorData?.nameOfAuditor === previousAuditorData?.nameOfAuditor
                              ? ' No'
                              : 'Yes'
                            : ''}
                          {companyData?.history[0]?.latestAuditorData?.nameOfAuditor && (
                            <TooltipCard data={companyData?.history[0]?.latestAuditorData?.nameOfAuditor} />
                          )}
                        </span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    </>
  );
};
export const directorDetails = (camData, companyData) => {
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#directorDetails"
                aria-expanded="true"
                aria-controls="directorDetails"
              >
                <h2 className="mb-0">Director Details</h2>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div
                id="directorDetails"
                className="collapse"
                aria-labelledby="directorDetails"
                data-parent="#directorDetails"
              >
                <div className={`${styles.order_wrapper} px-0 card-body`}>
                  <table className={`${styles.table} table mb-0 border_color`} cellPadding="0" cellSpacing="0">
                    <tr>
                      <th className="40%">NAME</th>
                      <th>PAN</th>
                      <th>DIN NUMBER</th>
                      <th>DATE OF APPOINTMENT</th>
                      <th>% SHAREHOLDING</th>
                    </tr>

                    {camData?.company?.detailedCompanyInfo?.profile?.directorDetail?.map((director, index) => {
                      let name = director?.name;
                      let [fName, lName] = director?.name.split(' ');

                      return (
                        <tr key={index}>
                          <td className={`d-flex justify-content-start align-content-center`}>
                            <div className={`${styles.icon} `}>
                              <span className={`d-flex justify-content-center align-content-center`}>
                                {fName?.charAt(0)}
                                {lName?.charAt(0)}
                              </span>
                            </div>
                            <span className={` ${styles.name} ml-3  `}>
                              {director?.name}
                              {companyData?.history[0]?.profile?.directorDetail[0]?.name && (
                                <TooltipCard data={companyData?.history[0]?.profile?.directorDetail[0]?.name} />
                              )}
                            </span>
                          </td>
                          <td>
                            {director?.pan[0]}
                            {companyData?.history[0]?.profile?.directorDetail[0]?.pan && (
                              <TooltipCard data={companyData?.history[0]?.profile?.directorDetail[0]?.pan} />
                            )}
                          </td>
                          <td>
                            {director.din}
                            {companyData?.history[0]?.profile?.directorDetail[0]?.din && (
                              <TooltipCard data={companyData?.history[0]?.profile?.directorDetail[0]?.din} />
                            )}
                          </td>
                          <td>
                            {director.tenureStartDate}
                            {companyData?.history[0]?.profile?.directorDetail[0]?.tenureStartDate && (
                              <TooltipCard
                                data={companyData?.history[0]?.profile?.directorDetail[0]?.tenureStartDate}
                              />
                            )}
                          </td>
                          <td>
                            {director.percentageShareHolding}%
                            {companyData?.history[0]?.profile?.directorDetail[0]?.percentageShareHolding && (
                              <TooltipCard
                                data={companyData?.history[0]?.profile?.directorDetail[0]?.percentageShareHolding}
                              />
                            )}
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td colSpan={5} height="10"></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    </>
  );
};

export const shareHolding = (top3Share, options, tempArr, camData, backgroundColor, companyData) => {
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#shareHolding"
                aria-expanded="true"
                aria-controls="shareHolding"
              >
                <h2 className="mb-0">Shareholding Details</h2>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div
                id="shareHolding"
                // className="collapse open"
                aria-labelledby="shareHolding"
                data-parent="#shareHolding"
              >
                <div className={`${styles.order_wrapper} card-body`}>
                  <Row>
                    <Col className={`${styles.leftCol} border_color`} md={4}>
                      <div className={styles.chart}>
                        <Doughnut id={`shareHoldingChart`} data={top3Share} options={options} />
                        <div className={styles.total_value}>
                          <span></span>
                          <span className={styles.highlight}></span>
                        </div>
                      </div>
                      <div className={`${styles.name} `}>
                        {top3Share.datasets &&
                          top3Share?.datasets[0]?.data.map((val, index) => {
                            return (
                              <div
                                key={index}
                                className={`${styles.name_wrapper} d-flex justify-content-center align-item-center`}
                              >
                                <div className={styles.round} style={{ backgroundColor: backgroundColor[index] }}></div>
                                <span className={` heading ml-2`}>
                                  {top3Share.labels[index] == '' ? 'NA' : top3Share.labels[index]}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                    </Col>
                    <Col md={8} className={`px-0`}>
                      <table className={`${styles.table} table  border_color `} cellPadding="0" cellSpacing="0">
                        <tr>
                          <th>NAME</th>
                          <th>NO. OF SHARES</th>
                          <th>% SHARE</th>
                          <th>DIRECTOR</th>
                        </tr>

                        {camData &&
                          camData?.company?.detailedCompanyInfo?.profile?.shareholdingPattern?.map((share, index) => {
                            let name = share?.fullName ?? 'N A';
                            let [fName, lName] = name?.split(' ');

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
                            ];
                            let randColor = colors[Math.floor(Math.random() * colors.length)];
                            return (
                              <tr key={index}>
                                <td className={`d-flex justify-content-start align-content-center`}>
                                  <div style={{ background: `${randColor.primary}` }} className={`${styles.icon}   `}>
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
                                    {companyData?.history[0]?.profile?.shareholdingPattern[0]?.fullName && (
                                      <TooltipCard
                                        data={companyData?.history[0]?.profile?.shareholdingPattern[0]?.fullName}
                                      />
                                    )}
                                  </span>
                                </td>
                                <td>
                                  {Number(share?.numberOfShares)?.toLocaleString('en-In')}
                                  {companyData?.history[0]?.profile?.shareholdingPattern[0]?.numberOfShares && (
                                    <TooltipCard
                                      data={companyData?.history[0]?.profile?.shareholdingPattern[0]?.numberOfShares}
                                    />
                                  )}
                                </td>
                                <td>
                                  {share?.percentageShareHolding
                                    ? (share?.percentageShareHolding * 100)?.toLocaleString('en-IN', {
                                        maximumFractionDigits: 2,
                                        minimumFractionDigits: 2,
                                      }) + '%'
                                    : ''}
                                  {companyData?.history[0]?.profile?.shareholdingPattern[0]?.percentageShareHolding && (
                                    <TooltipCard
                                      data={
                                        companyData?.history[0]?.profile?.shareholdingPattern[0]?.percentageShareHolding
                                      }
                                    />
                                  )}
                                </td>
                                <td>
                                  {share?.director ? 'Yes' : 'No'}
                                  {companyData?.history[0]?.profile?.shareholdingPattern[0]?.director && (
                                    <TooltipCard
                                      data={companyData?.history[0]?.profile?.shareholdingPattern[0]?.director}
                                    />
                                  )}
                                </td>
                              </tr>
                            );
                          })}

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
          )}
        </Toggle>
      </div>
    </>
  );
};
export const chargeDetails = (top3Open, options, tempArr, camData, backgroundColor, camConversionunit, companyData) => {
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#chargeDetails"
                aria-expanded="true"
                aria-controls="chargeDetails"
              >
                <h2 className="mb-0">Open Bank Charge Details</h2>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div
                id="chargeDetails"
                // className="collapse open"
                aria-labelledby="chargeDetails"
                data-parent="#chargeDetails"
              >
                <div className={`${styles.order_wrapper} card-body`}>
                  <Row>
                    <Col className={`${styles.leftCol} border_color`} md={4}>
                      <div className={styles.chart}>
                        <Doughnut id={`openBankChargeChart`} data={top3Open} options={options} />
                        <div className={styles.total_value}>
                          {/* <span>Bindu Singh</span>
                    <span className={styles.highlight}>83.80%</span> */}
                        </div>
                      </div>
                      <div className={`${styles.name} `}>
                        {top3Open.datasets &&
                          top3Open?.datasets[0]?.data.map((val, index) => {
                            return (
                              <div
                                key={index}
                                className={`${styles.name_wrapper} d-flex justify-content-center align-item-center`}
                              >
                                <div className={styles.round} style={{ backgroundColor: backgroundColor[index] }}></div>
                                <span className={` heading ml-2`}>
                                  {top3Open.labels[index] == '' ? 'NA' : top3Open.labels[index]}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                    </Col>
                    <Col md={8} className={`px-0`}>
                      <table className={`${styles.table} table border_color `} cellPadding="0" cellSpacing="0">
                        <tr>
                          <th width="50%">BANK NAME</th>
                          <th>CHARGE AMOUNT</th>
                          <th>DATE OF CREATION</th>
                        </tr>

                        {camData &&
                          _get(camData, 'company.detailedCompanyInfo.financial.openCharges', []).map(
                            (charge, index) => {
                              let name = charge?.nameOfChargeHolder;
                              let [fName, lName] = name?.split(' ');

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
                              ];
                              let randColor = colors[Math.floor(Math.random() * colors.length)];
                              if (
                                charge.dateOfSatisfactionOfChargeInFull ||
                                charge.dateOfSatisfactionOfChargeInFull === ''
                              ) {
                                return null;
                              } else {
                                return (
                                  <tr key={index}>
                                    <td className={`d-flex justify-content-start align-content-center`}>
                                      <div style={{ background: `${randColor.primary}` }} className={`${styles.icon} `}>
                                        <span
                                          style={{ color: `${randColor.secondary}` }}
                                          className={`d-flex justify-content-center align-content-center`}
                                        >
                                          {fName?.charAt(0) ? fName?.charAt(0) : 'N'}
                                          {lName?.charAt(0) ? lName?.charAt(0) : 'A'}
                                        </span>
                                      </div>

                                      <span className={` ${styles.name} ml-3  `}>
                                        {charge?.nameOfChargeHolder
                                          ? charge?.nameOfChargeHolder
                                          : charge.nameOfChargeHolder1}
                                      </span>
                                    </td>
                                    <td>
                                      {convertValue(charge?.finalAmountSecured, camConversionunit).toLocaleString(
                                        'en-In',
                                        {
                                          maximumFractionDigits: 2,
                                        },
                                      )}
                                      {/* {Number(
                                  charge?.finalAmountSecured,
                                )?.toLocaleString('en-In')} */}
                                    </td>

                                    <td>
                                      {charge?.dateOfCreationOfCharge
                                        ? moment(charge?.dateOfCreationOfCharge, 'DD-YY-MMMM').format('DD-MM-YYYY')
                                        : ''}
                                      {companyData?.history?.profile?.shareholdingPattern[0]?.director && (
                                        <TooltipCard data={companyData?.history?.charge?.dateOfCreationOfCharge} />
                                      )}
                                    </td>
                                  </tr>
                                );
                              }
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
          )}
        </Toggle>
      </div>
    </>
  );
};
export const debtProfile = (
  data,
  options,
  tempArr,
  camData,
  totalLimitDebt = () => '',
  camConversionunit,
  debtProfileColor = () => {},
  companyData,
) => {
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#debtProfile"
                aria-expanded="true"
                aria-controls="debtProfile"
              >
                <h2 className="mb-0">Debt Profile</h2>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div id="debtProfile" className="collapse" aria-labelledby="debtProfile" data-parent="#debtProfile">
                <div className={`${styles.order_wrapper} card-body`}>
                  <Row>
                    <Col className={`${styles.leftCol} border_color`} md={4}>
                      <div className={`${styles.label} d-flex justify-content-between align-content-center  `}>
                        <div className={`${styles.limit_box} `}>
                          <span className={`${styles.limit_label} text-uppercase`}>Total Limit</span>
                        </div>
                        <span>
                          {totalLimitDebt().toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className={`${styles.bar}`}>
                        <div className={`${styles.fill}`} style={{ width: '100%' }}></div>
                      </div>

                      {camData &&
                        camData?.company?.debtProfile?.map((debt, index) => (
                          <>
                            <div className={`mt-4 mb-4`} key={index}>
                              <div className={`${styles.label} d-flex justify-content-between align-content-center  `}>
                                <div className={`${styles.limit_box} `}>
                                  <span className={`${styles.limit_label} text-uppercase`}>{debt.bankName}</span>
                                </div>
                                <span>
                                  {debt.limit?.toLocaleString('en-In', {
                                    maximumFractionDigits: 2,
                                  })}
                                </span>
                              </div>
                              <div className={`${styles.bar} ${styles.small_bar}`}>
                                <span
                                  className={`${styles.conduct}  
                   `}
                                  style={{
                                    color: ` 
                      ${debtProfileColor(debt.conduct)}`,
                                  }}
                                >
                                  {debt.limitType}
                                </span>
                                <div
                                  style={{
                                    backgroundColor: `${debtProfileColor(debt.conduct)}`,
                                    width: `${
                                      (Number(debt.limit) / totalLimitDebt() > 1
                                        ? 1
                                        : Number(debt.limit) / totalLimitDebt()) * 100
                                    }%`,
                                  }}
                                  className={`${styles.fill}`}
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
                      <span className={`${styles.limit_label} text-uppercase`}>LIMIT</span>
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
                      <span className={`${styles.limit_label} text-uppercase`}>LIMIT</span>
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
                      <table className={`${styles.table} table  border_color `} cellPadding="0" cellSpacing="0">
                        <tr>
                          <th>BANK NAME</th>
                          <th>LIMIT TYPE</th>
                          <th>LIMITS</th>
                          <th>CONDUCT</th>
                        </tr>

                        {camData &&
                          camData?.company?.debtProfile?.map((debt, index) => (
                            <tr key={index}>
                              <td>
                                {debt?.bankName}
                                {companyData?.history[0]?.debt?.bankName && (
                                  <TooltipCard data={companyData?.history[0]?.debt?.bankName} />
                                )}
                              </td>
                              <td>
                                {' '}
                                {debt?.limitType}
                                {companyData?.history[0]?.debt?.limitType && (
                                  <TooltipCard data={companyData?.history[0]?.debt?.limitType} />
                                )}
                              </td>
                              <td>
                                {debt?.limit?.toLocaleString('en-In', {
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                              <td
                                className={`${styles.conduct}  ${
                                  debt.conduct == 'Good'
                                    ? 'good'
                                    : debt.conduct == 'Satisfactory'
                                    ? 'satisfactory'
                                    : debt.conduct == 'Average'
                                    ? 'average'
                                    : 'danger'
                                }`}
                              >
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
          )}
        </Toggle>
      </div>
    </>
  );
};
export const operationalDetails = (camData, companyData) => {
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#operationalDetails"
                aria-expanded="true"
                aria-controls="operationalDetails"
              >
                <h2 className="mb-0">Operational Details</h2>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div
                id="operationalDetails"
                className="collapse"
                aria-labelledby="operationalDetails"
                data-parent="#operationalDetails"
              >
                <div className={`${styles.info_wrapper} card-body pb-4 border_color`}>
                  <div className={`${styles.content}`}>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Plant Production Capacity</span>
                        <span className={`${styles.value} value`}>
                          {camData?.productSummary?.monthlyProductionCapacity
                            ? Number(camData?.productSummary?.monthlyProductionCapacity)?.toLocaleString('en-In', {
                                maximumFractionDigits: 2,
                              })
                            : ''}{' '}
                          {camData?.productSummary?.monthlyProductionCapacity ? 'MT' : ''}
                          {companyData?.history[0]?.productSummary?.monthlyProductionCapacity && (
                            <TooltipCard data={companyData?.history[0]?.productSummary?.monthlyProductionCapacity} />
                          )}
                        </span>
                      </Col>
                      <Col className={` col-md-offset-2 d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1 pl-5`}>Stock in Transit - Commodity</span>
                        <span className={`${styles.value} value`}>
                          {camData?.productSummary?.averageStockInTransit
                            ? Number(camData?.productSummary?.averageStockInTransit)?.toLocaleString('en-In', {
                                maximumFractionDigits: 2,
                              })
                            : ''}{' '}
                          {camData?.productSummary?.averageStockInTransit ? 'MT' : ''}
                          {companyData?.history[0]?.productSummary?.averageStockInTransit && (
                            <TooltipCard data={companyData?.history[0]?.productSummary?.averageStockInTransit} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Capacity Utilization</span>
                        <span className={`${styles.value} value`}>
                          {camData?.productSummary?.capacityUtilization?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                          })}{' '}
                          {camData?.productSummary?.capacityUtilization ? '%' : ''}
                          {companyData?.history[0]?.productSummary?.capacityUtilization && (
                            <TooltipCard data={companyData?.history[0]?.productSummary?.capacityUtilization} />
                          )}
                        </span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1 pl-5`}>Stock Coverage of Commodity</span>
                        <span className={`${styles.value} value`}>
                          {camData?.productSummary?.averageStockOfCommodity?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                          })}{' '}
                          {camData?.productSummary?.averageStockOfCommodity ? 'Days' : ''}
                          {companyData?.history[0]?.productSummary?.averageStockOfCommodity && (
                            <TooltipCard data={companyData?.history[0]?.productSummary?.averageStockOfCommodity} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Available Stock of Commodity</span>
                        <span className={`${styles.value} value`}>
                          {/* {checkNan(
                      Number(
                        camData?.productSummary?.availableStock,
                      ),
                      true,
                    )?.toLocaleString('en-In', {
                      maximumFractionDigits: 2,
                    })} */}
                          {camData?.productSummary?.availableStock
                            ? Number(camData?.productSummary?.availableStock)?.toLocaleString('en-In', {
                                maximumFractionDigits: 2,
                              })
                            : ''}{' '}
                          {camData?.productSummary?.availableStock ? 'MT' : ''}
                          {companyData?.history[0]?.productSummary?.availableStock && (
                            <TooltipCard data={companyData?.history[0]?.productSummary?.availableStock} />
                          )}
                        </span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1 pl-5`}>Avg Monthly Electricity Bill</span>
                        <span className={`${styles.value} value`}>
                          {camData?.productSummary?.AvgMonthlyElectricityBill ? '₹' : ''}{' '}
                          {companyData?.history[0]?.productSummary?.AvgMonthlyElectricityBill && (
                            <TooltipCard data={companyData?.history[0]?.productSummary?.AvgMonthlyElectricityBill} />
                          )}
                          {/* {checkNan(
                      Number(
                        camData?.productSummary?.AvgMonthlyElectricityBill,
                      ),
                      true,
                    )} */}
                          {camData?.productSummary?.AvgMonthlyElectricityBill
                            ? Number(camData?.productSummary?.AvgMonthlyElectricityBill)?.toLocaleString('en-In', {
                                maximumFractionDigits: 2,
                              })
                            : ''}
                          {companyData?.history[0]?.productSummary?.AvgMonthlyElectricityBill && (
                            <TooltipCard data={companyData?.history[0]?.productSummary?.AvgMonthlyElectricityBill} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Daily Consumption of Commodity</span>
                        <span className={`${styles.value} value`}>
                          {/* {checkNan(
                      Number(
                        camData?.productSummary?.dailyConsumptionOfCommodity,
                      ),
                      true,
                    )} */}
                          {camData?.productSummary?.dailyConsumptionOfCommodity
                            ? Number(camData?.productSummary?.dailyConsumptionOfCommodity)?.toLocaleString('en-In', {
                                maximumFractionDigits: 2,
                              })
                            : ''}{' '}
                          {camData?.productSummary?.dailyConsumptionOfCommodity ? 'MT' : ''}
                          {companyData?.history[0]?.productSummary?.dailyConsumptionOfCommodity && (
                            <TooltipCard data={companyData?.history[0]?.productSummary?.dailyConsumptionOfCommodity} />
                          )}
                        </span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    </>
  );
};
export const revenuDetails = (gstData, camConversionunit, companyData) => {
  const RevenueDetails = gstData?.detail?.salesDetailAnnual?.saleSummary;

  function calcPc(n1, n2) {
    if (n1 === 0) {
      return 0;
    }
    return ((n2 - n1) / n1) * 100;
  }

  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#revenuDetails"
                aria-expanded="true"
                aria-controls="revenuDetails"
              >
                <h2 className="mb-0">Revenue Details</h2>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div id="revenuDetails" className="collapse" aria-labelledby="revenuDetails" data-parent="#revenuDetails">
                <div className={`${styles.order_wrapper} p-0 card-body`}>
                  <table className={`${styles.table} table mb-0 border_color`} cellPadding="0" cellSpacing="0">
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
                        {RevenueDetails?.grossTurnover?.previous?.value ||
                        RevenueDetails?.grossTurnover?.current?.value ? (
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
                        ) : null}
                      </td>
                      <td>
                        {convertValue(RevenueDetails?.grossTurnover?.current?.value, camConversionunit)?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )}{' '}
                        Cr
                      </td>
                      <td>
                        {convertValue(
                          RevenueDetails?.grossTurnover?.previous?.value,
                          camConversionunit,
                        )?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}{' '}
                        Cr
                      </td>
                      <td>
                        {checkNan(
                          calcPc(
                            RevenueDetails?.grossTurnover?.previous?.value,
                            RevenueDetails?.grossTurnover?.current?.value,
                          ),
                        ) + '%'}
                      </td>
                    </tr>
                    <tr>
                      <td>Related Party Sales</td>
                      <td>
                        {RevenueDetails?.relatedPartySales?.previous?.value ||
                        RevenueDetails?.relatedPartySales?.current?.value ? (
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
                        ) : null}
                      </td>
                      <td>
                        {convertValue(
                          RevenueDetails?.relatedPartySales?.current?.value,
                          camConversionunit,
                        )?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}{' '}
                        Cr
                      </td>
                      <td>
                        {convertValue(
                          RevenueDetails?.relatedPartySales?.previous?.value,
                          camConversionunit,
                        )?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}{' '}
                        Cr
                      </td>
                      <td>
                        {checkNan(
                          calcPc(
                            RevenueDetails?.relatedPartySales?.previous?.value,
                            RevenueDetails?.relatedPartySales?.current?.value,
                          ),
                        ) + '%'}
                      </td>
                    </tr>
                    <tr>
                      <td>Intra Organization Sales</td>
                      <td>
                        {RevenueDetails?.intraOrgSalesPercent?.previous?.value ||
                        RevenueDetails?.intraOrgSalesPercent?.current?.value ? (
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
                        ) : null}
                      </td>
                      <td>
                        {/* {checkNan(
                    CovertvaluefromtoCR(
                      Number(
                        RevenueDetails?.intraOrgSalesPercent?.current?.value,
                      ),
                    ).toFixed(2),
                    true,
                  )} */}
                        {convertValue(
                          RevenueDetails?.intraOrgSalesPercent?.current?.value,
                          camConversionunit,
                        )?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}{' '}
                        Cr
                      </td>
                      <td>
                        {/* {checkNan(
                    CovertvaluefromtoCR(
                      Number(
                        RevenueDetails?.intraOrgSalesPercent?.previous?.value,
                      ),
                    ).toFixed(2),
                    true,
                  )} */}
                        {convertValue(
                          RevenueDetails?.intraOrgSalesPercent?.previous?.value,
                          camConversionunit,
                        )?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}{' '}
                        Cr
                      </td>
                      <td>
                        {checkNan(
                          calcPc(
                            RevenueDetails?.intraOrgSalesPercent?.previous?.value,
                            RevenueDetails?.intraOrgSalesPercent?.current?.value,
                          ),
                        ) + '%'}
                      </td>
                    </tr>
                    <tr>
                      <td>B2B Sales</td>
                      <td>
                        {RevenueDetails?.B2BSales?.previous?.value || RevenueDetails?.B2BSales?.current?.value ? (
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
                        ) : null}
                        {companyData?.history[0]?.RevenueDetails?.B2CSales?.previous?.value && (
                          <TooltipCard data={companyData?.history[0]?.RevenueDetails?.B2CSales?.previous?.value} />
                        )}
                      </td>
                      <td>
                        {/* {checkNan(
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.B2BSales?.current?.value),
                    ).toFixed(2),
                    true,
                  )} */}
                        {convertValue(RevenueDetails?.B2BSales?.current?.value, camConversionunit)?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )}{' '}
                        Cr
                      </td>
                      <td>
                        {/* {checkNan(
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.B2BSales?.previous?.value),
                    ).toFixed(2),
                    true,
                  )} */}
                        {convertValue(RevenueDetails?.B2BSales?.previous?.value, camConversionunit)?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )}{' '}
                        Cr
                      </td>
                      <td>
                        {checkNan(
                          calcPc(RevenueDetails?.B2BSales?.previous?.value, RevenueDetails?.B2BSales?.current?.value),
                        ) + '%'}
                      </td>
                    </tr>
                    <tr>
                      <td>B2C Sales</td>
                      <td>
                        {RevenueDetails?.B2CSales?.previous?.value || RevenueDetails?.B2CSales?.current?.value ? (
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
                        ) : null}
                        {companyData?.history[0]?.RevenueDetails?.B2CSales?.previous?.value && (
                          <TooltipCard data={companyData?.history[0]?.RevenueDetails?.B2CSales?.previous?.value} />
                        )}
                      </td>
                      <td>
                        {/* {checkNan(
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.B2CSales?.current?.value),
                    ).toFixed(2),
                    true,
                  )} */}
                        {convertValue(RevenueDetails?.B2CSales?.current?.value, camConversionunit)?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )}{' '}
                        Cr
                      </td>
                      <td>
                        {/* {checkNan(
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.B2CSales?.previous?.value),
                    ).toFixed(2),
                    true,
                  )} */}
                        {convertValue(RevenueDetails?.B2CSales?.previous?.value, camConversionunit)?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )}{' '}
                        Cr
                      </td>
                      <td>
                        {checkNan(
                          calcPc(RevenueDetails?.B2CSales?.previous?.value, RevenueDetails?.B2CSales?.current?.value),
                        ) + '%'}
                      </td>
                    </tr>
                    <tr>
                      <td>Export Sales</td>
                      <td>
                        {RevenueDetails?.exportSales?.previous?.value || RevenueDetails?.exportSales?.current?.value ? (
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
                        ) : null}
                        {companyData?.history[0]?.RevenueDetails?.exportSales?.previous?.value && (
                          <TooltipCard data={companyData?.history[0]?.RevenueDetails?.exportSales?.previous?.value} />
                        )}
                      </td>
                      <td>
                        {/* {checkNan(
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.exportSales?.current?.value),
                    ).toFixed(2),
                    true,
                  )} */}
                        {convertValue(RevenueDetails?.exportSales?.current?.value, camConversionunit)?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )}{' '}
                        Cr
                      </td>
                      <td>
                        {/* {checkNan(
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.exportSales?.previous?.value),
                    ).toFixed(2),
                    true,
                  )} */}
                        {convertValue(RevenueDetails?.exportSales?.previous?.value, camConversionunit)?.toLocaleString(
                          'en-In',
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          },
                        )}{' '}
                        Cr
                      </td>
                      <td>
                        {checkNan(
                          calcPc(
                            RevenueDetails?.exportSales?.previous?.value,
                            RevenueDetails?.exportSales?.current?.value,
                          ),
                        ) + '%'}
                      </td>
                    </tr>
                    <tr>
                      <td>Total Customers</td>
                      <td>
                        {RevenueDetails?.ttlCustomer?.previous?.value || RevenueDetails?.ttlCustomer?.current?.value ? (
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
                        ) : null}
                      </td>
                      <td>
                        {/* {checkNan(
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.ttlCustomer?.current?.value),
                    ).toFixed(2),
                    true,
                  )} */}
                        {RevenueDetails?.ttlCustomer?.current?.value?.toLocaleString('en-In', {
                          maximumFractionDigits: 0,
                        })}{' '}
                      </td>
                      <td>
                        {RevenueDetails?.ttlCustomer?.previous?.value?.toLocaleString('en-In', {
                          maximumFractionDigits: 0,
                        })}{' '}
                      </td>
                      <td>
                        {checkNan(
                          calcPc(
                            RevenueDetails?.ttlCustomer?.previous?.value,
                            RevenueDetails?.ttlCustomer?.current?.value,
                          ),
                        ) + '%'}
                      </td>
                    </tr>
                    <tr>
                      <td>Total Invoices</td>
                      <td>
                        {RevenueDetails?.ttlInv?.previous?.value || RevenueDetails?.ttlInv?.current?.value ? (
                          <img
                            src={
                              calcPc(RevenueDetails?.ttlInv?.previous?.value, RevenueDetails?.ttlInv?.current?.value) >
                              0
                                ? '/static/arrow-up-green.svg'
                                : '/static/arrow-down-red.svg'
                            }
                            alt="Arrow Green"
                            className="img-fluid"
                          />
                        ) : null}
                      </td>
                      <td>
                        {/* {checkNan(
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.ttlInv?.current?.value),
                    ).toFixed(2),
                    true,
                  )} */}
                        {RevenueDetails?.ttlInv?.current?.value?.toLocaleString('en-In', { maximumFractionDigits: 2 })}{' '}
                      </td>
                      <td>
                        {/* {checkNan(
                    CovertvaluefromtoCR(
                      Number(RevenueDetails?.ttlInv?.previous?.value),
                    ).toFixed(2),
                    true,
                  )} */}
                        {RevenueDetails?.ttlInv?.previous?.value?.toLocaleString('en-In', { maximumFractionDigits: 2 })}{' '}
                      </td>
                      <td>
                        {checkNan(
                          calcPc(RevenueDetails?.ttlInv?.previous?.value, RevenueDetails?.ttlInv?.current?.value),
                        ) + '%'}
                      </td>
                    </tr>
                    <tr>
                      <td>Gross Margin</td>
                      <td>
                        <img src="/static/arrow-down-red.svg" alt="Arrow Red" className="img-fluid" />
                      </td>
                      <td>11,900.00</td>
                      <td>1,900.00</td>
                      <td>40%</td>
                    </tr>
                    <tr>
                      <td colSpan={5} height="10"></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    </>
  );
};
export const financeDetails = (
  latestBalanceData,
  previousBalanceData,
  data,
  options,
  tempArr,
  companyData,
  latestYearData,
  previousYearData,
  camConversionunit,
) => {
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#financeDetails"
                aria-expanded="true"
                aria-controls="financeDetails"
              >
                <h2 className="mb-0">Financial Summary</h2>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div
                id="financeDetails"
                className="collapse"
                aria-labelledby="financeDetails"
                data-parent="#financeDetails"
              >
                <div className={`${styles.order_wrapper2} card-body`}>
                  <Row className="no-gutters">
                    <Col className={`${styles.leftCol} p-0 border_color`} md={6}>
                      <table className={`${styles.table} table  border_color `} cellPadding="0" cellSpacing="0">
                        <tr>
                          <th className={`${styles.bold_heading} value`}>Liabilities</th>
                          <th>
                            {_get(companyData, 'financial.balanceSheet[0].date', '') === ''
                              ? ''
                              : moment(_get(companyData, 'financial.balanceSheet[0].date', ''))
                                  .format('MMM-YY')
                                  .toUpperCase()}
                          </th>
                          <th>
                            {_get(companyData, 'financial.balanceSheet[1].date', '') === ''
                              ? ''
                              : moment(_get(companyData, 'financial.balanceSheet[1].date', ''))
                                  .format('MMM-YY')
                                  .toUpperCase()}
                          </th>
                        </tr>
                        <tr>
                          <td>Net Worth</td>
                          <td>
                            {convertValue(
                              _get(companyData, 'financial.balanceSheet[0].equityLiabilities.totalEquity', ''),
                              camConversionunit,
                            ).toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumSignificantDigits: 2,
                            })}
                          </td>
                          <td>
                            {convertValue(
                              _get(companyData, 'financial.balanceSheet[1].equityLiabilities.totalEquity', ''),
                              camConversionunit,
                            ).toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumSignificantDigits: 2,
                            })}
                          </td>
                        </tr>
                        <tr>
                          <td>Total Borrowings</td>
                          <td>
                            {convertValue(
                              Number(
                                _get(companyData, 'financial.balanceSheet[0].equityLiabilities.borrowingsCurrent', '') +
                                  _get(
                                    companyData,
                                    'financial.balanceSheet[0].equityLiabilities.borrowingsNonCurrent',
                                    '',
                                  ),
                              ),
                              camConversionunit,
                            )?.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumSignificantDigits: 2,
                            })}
                          </td>
                          <td>
                            {convertValue(
                              Number(
                                _get(companyData, 'financial.balanceSheet[1].equityLiabilities.borrowingsCurrent', '') +
                                  _get(
                                    companyData,
                                    'financial.balanceSheet[1].equityLiabilities.borrowingsNonCurrent',
                                    '',
                                  ),
                              ),
                              camConversionunit,
                            )?.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumSignificantDigits: 2,
                            })}
                          </td>
                        </tr>
                        <tr>
                          <td>Creditors</td>
                          <td>
                            {convertValue(
                              Number(
                                _get(companyData, 'financial.balanceSheet[0].equityLiabilities.tradePay', '') +
                                  _get(
                                    companyData,
                                    'financial.balanceSheet[0].equityLiabilities.tradePayablesNoncurrent',
                                    '',
                                  ),
                              ),
                              camConversionunit,
                            )?.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumSignificantDigits: 2,
                            })}
                          </td>
                          <td>
                            {convertValue(
                              Number(
                                _get(companyData, 'financial.balanceSheet[1].equityLiabilities.tradePay', '') +
                                  _get(
                                    companyData,
                                    'financial.balanceSheet[1].equityLiabilities.tradePayablesNoncurrent',
                                    '',
                                  ),
                              ),
                              camConversionunit,
                            )?.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumSignificantDigits: 2,
                            })}
                          </td>
                        </tr>
                        <tr>
                          <td>Other Current Liabilities</td>
                          <td>
                            {convertValue(
                              _get(
                                companyData,
                                'financial.balanceSheet[0].equityLiabilities.otherCurrentLiabilities',
                                '',
                              ),
                              camConversionunit,
                            )?.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumSignificantDigits: 2,
                            })}
                          </td>
                          <td>
                            {convertValue(
                              _get(
                                companyData,
                                'financial.balanceSheet[1].equityLiabilities.otherCurrentLiabilities',
                                '',
                              ),
                              camConversionunit,
                            )?.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumSignificantDigits: 2,
                            })}
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={3} className={`${styles.bold_heading} ${styles.Border} value`}>
                            Assets
                          </th>
                        </tr>

                        <tr>
                          <td>Working Capital Turnover ratio</td>
                          <td>
                            {latestYearData?.workingCapitalTurnover?.toFixed(2)}
                            {companyData?.history?.latestYearData?.workingCapitalTurnover && (
                              <TooltipCard data={companyData?.history.latestYearData?.workingCapitalTurnover} />
                            )}
                          </td>
                          <td>
                            {previousYearData?.workingCapitalTurnover?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.previousYearData?.workingCapitalTurnover && (
                              <TooltipCard data={companyData?.history?.previousYearData?.workingCapitalTurnover} />
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Debtors period</td>
                          <td>
                            {latestYearData?.daysOfSalesOutstanding?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.latestYearData?.daysOfSalesOutstanding && (
                              <TooltipCard data={companyData?.history?.latestYearData?.daysOfSalesOutstanding} />
                            )}
                          </td>
                          <td>
                            {previousYearData?.daysOfSalesOutstanding?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.previousYearData?.daysOfSalesOutstanding && (
                              <TooltipCard data={companyData?.history?.previousYearData?.daysOfSalesOutstanding} />
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Creditors Period</td>
                          <td>
                            {latestYearData?.daysOfPayablesOutstanding?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.latestYearData?.daysOfPayablesOutstanding && (
                              <TooltipCard data={companyData?.history?.latestYearData?.daysOfPayablesOutstanding} />
                            )}
                          </td>
                          <td>
                            {previousYearData?.daysOfPayablesOutstanding?.toFixed(2)}
                            {companyData?.history?.previousYearData?.daysOfPayablesOutstanding && (
                              <TooltipCard data={companyData?.history?.previousYearData?.daysOfPayablesOutstanding} />
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Inventory Period</td>
                          <td>
                            {latestYearData?.daysOfInventoryOutstanding?.toFixed(2)}
                            {companyData?.history?.latestYearData?.daysOfInventoryOutstanding && (
                              <TooltipCard data={companyData?.history?.latestYearData?.daysOfInventoryOutstanding} />
                            )}
                          </td>
                          <td>
                            {previousYearData?.daysOfInventoryOutstanding?.toFixed(2)}
                            {companyData?.history?.previousYearData?.daysOfInventoryOutstanding && (
                              <TooltipCard data={companyData?.history?.previousYearData?.daysOfInventoryOutstanding} />
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={3} className={`${styles.Border} ${styles.bold_heading} value`}>
                            P/L
                          </th>
                        </tr>

                        <tr>
                          <td>Interest Coverage</td>
                          <td>
                            {latestYearData?.interestCoverage?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.latestYearData?.interestCoverage && (
                              <TooltipCard data={companyData?.history?.latestYearData?.interestCoverage} />
                            )}
                          </td>
                          <td>
                            {previousYearData?.interestCoverage?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.previousYearData?.interestCoverage && (
                              <TooltipCard data={companyData?.history?.previousYearData?.interestCoverage} />
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Current Ratio</td>
                          <td>
                            {latestYearData?.currentRatio?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.latestYearData?.currentRatio && (
                              <TooltipCard data={companyData?.history?.latestYearData?.currentRatio} />
                            )}
                          </td>
                          <td>
                            {previousYearData?.currentRatio?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.previousYearData?.currentRatio && (
                              <TooltipCard data={companyData?.history?.previousYearData?.currentRatio} />
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Debt Equity</td>
                          <td>
                            {latestYearData?.debtEquity?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.latestYearData?.debtEquity && (
                              <TooltipCard data={companyData?.history?.latestYearData?.debtEquity} />
                            )}
                          </td>
                          <td>
                            {previousYearData?.debtEquity?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.previousYearData?.debtEquity && (
                              <TooltipCard data={companyData?.history?.previousYearData?.debtEquity} />
                            )}
                          </td>
                        </tr>
                      </table>
                    </Col>
                    <Col md={6} className={`pl-0`}>
                      <table className={`${styles.table} table  border_color  `} cellPadding="0" cellSpacing="0">
                        <tr>
                          <th className={`${styles.bold_heading} value`}>Ratios</th>
                          <th>
                            {' '}
                            {latestYearData?.financialEndDate
                              ? moment(latestYearData?.financialEndDate).format('MMM-YY').toUpperCase()
                              : ''}
                          </th>
                          <th>
                            {' '}
                            {previousYearData?.financialEndDate
                              ? moment(previousYearData?.financialEndDate).format('MMM-YY').toUpperCase()
                              : ''}
                          </th>
                        </tr>
                        <tr>
                          <td>Cash from Operations</td>
                          <td>
                            {convertValue(
                              _get(
                                companyData,
                                'financial.cashFlowStatement[0].cashFlowsFromUsedInOperatingActivities.cashFlowsFromUsedInOperatingActivities',
                                '',
                              ),
                              camConversionunit,
                            )?.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumSignificantDigits: 2,
                            })}
                          </td>
                          <td>
                            {convertValue(
                              _get(
                                companyData,
                                'financial.cashFlowStatement[1].cashFlowsFromUsedInOperatingActivities.cashFlowsFromUsedInOperatingActivities',
                                '',
                              ),
                              camConversionunit,
                            )?.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumSignificantDigits: 2,
                            })}
                          </td>
                        </tr>
                        <tr>
                          <td>Cash from Financing</td>
                          <td>
                            {convertValue(
                              _get(
                                companyData,
                                'financial.cashFlowStatement[0].cashFlowsFromUsedInFinancingActivities.cashFlowsFromUsedInFinancingActivities',
                                '',
                              ),
                              camConversionunit,
                            )?.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumSignificantDigits: 2,
                            })}
                          </td>
                          <td>
                            {convertValue(
                              _get(
                                companyData,
                                'financial.cashFlowStatement[1].cashFlowsFromUsedInFinancingActivities.cashFlowsFromUsedInFinancingActivities',
                                '',
                              ),
                              camConversionunit,
                            )?.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumSignificantDigits: 2,
                            })}
                          </td>
                        </tr>
                        <tr>
                          <td>Cash from Investing</td>
                          <td>
                            {convertValue(
                              _get(
                                companyData,
                                'financial.cashFlowStatement[0].cashFlowsFromUsedInInvestingActivities.cashFlowsFromUsedInInvestingActivities',
                                '',
                              ),
                              camConversionunit,
                            )?.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumSignificantDigits: 2,
                            })}
                          </td>
                          <td>
                            {convertValue(
                              _get(
                                companyData,
                                'financial.cashFlowStatement[1].cashFlowsFromUsedInInvestingActivities.cashFlowsFromUsedInInvestingActivities',
                                '',
                              ),
                              camConversionunit,
                            )?.toLocaleString('en-In', {
                              minimumFractionDigits: 2,
                              maximumSignificantDigits: 2,
                            })}
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
                            {latestYearData?.workingCapitalTurnover?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.latestYearData?.debtworkingCapitalTurnoverEquity && (
                              <TooltipCard data={companyData?.history?.latestYearData?.workingCapitalTurnover} />
                            )}
                          </td>
                          <td>
                            {previousYearData?.workingCapitalTurnover?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.previousYearData?.debtworkingCapitalTurnoverEquity && (
                              <TooltipCard data={companyData?.history?.previousYearData?.workingCapitalTurnover} />
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Debtors period</td>
                          <td>
                            {latestYearData?.daysOfSalesOutstanding?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.latestYearData?.daysOfSalesOutstanding && (
                              <TooltipCard data={companyData?.history?.latestYearData?.daysOfSalesOutstanding} />
                            )}
                          </td>
                          <td>
                            {previousYearData?.daysOfSalesOutstanding?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.previousYearData?.daysOfSalesOutstanding && (
                              <TooltipCard data={companyData?.history?.previousYearData?.daysOfSalesOutstanding} />
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Creditors Period</td>
                          <td>
                            {latestYearData?.daysOfPayablesOutstanding?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.latestYearData?.daysOfPayablesOutstanding && (
                              <TooltipCard data={companyData?.history?.latestYearData?.daysOfPayablesOutstanding} />
                            )}
                          </td>
                          <td>
                            {previousYearData?.daysOfPayablesOutstanding?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.previousYearData?.daysOfPayablesOutstanding && (
                              <TooltipCard data={companyData?.history?.previousYearData?.daysOfPayablesOutstanding} />
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Inventory Period</td>
                          <td>
                            {latestYearData?.daysOfInventoryOutstanding?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.latestYearData?.daysOfInventoryOutstanding && (
                              <TooltipCard data={companyData?.history?.latestYearData?.daysOfInventoryOutstanding} />
                            )}
                          </td>
                          <td>
                            {previousYearData?.daysOfInventoryOutstanding?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.previousYearData?.daysOfInventoryOutstanding && (
                              <TooltipCard data={companyData?.history?.previousYearData?.daysOfInventoryOutstanding} />
                            )}
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
                            {latestYearData?.interestCoverage?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.latestYearData?.interestCoverage && (
                              <TooltipCard data={companyData?.history?.latestYearData?.interestCoverage} />
                            )}
                          </td>
                          <td>
                            {previousYearData?.interestCoverage?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.previousYearData?.interestCoverage && (
                              <TooltipCard data={companyData?.history?.previousYearData?.interestCoverage} />
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Current Ratio</td>
                          <td>
                            {latestYearData?.currentRatio?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.latestYearData?.currentRatio && (
                              <TooltipCard data={companyData?.history?.latestYearData?.currentRatio} />
                            )}
                          </td>
                          <td>
                            {previousYearData?.currentRatio?.toFixed(2)?.toLocaleString()}
                            {companyData?.history?.previousYearData?.currentRatio && (
                              <TooltipCard data={companyData?.history?.previousYearData?.currentRatio} />
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Debt Equity</td>
                          <td>
                            {latestYearData?.debtEquity?.toFixed(2).toLocaleString()}
                            {companyData?.history?.latestYearData?.debtEquity && (
                              <TooltipCard data={companyData?.history?.latestYearData?.debtEquity} />
                            )}
                          </td>
                          <td>
                            {previousYearData?.debtEquity?.toFixed(2).toLocaleString()}
                            {companyData?.history?.previousYearData?.debtEquity && (
                              <TooltipCard data={companyData?.history?.previousYearData?.debtEquity} />
                            )}
                          </td>
                        </tr>
                      </table>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    </>
  );
};
export const compilanceStatus = (companyData, camData, litigationStatus) => {
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#compilanceStatus"
                aria-expanded="true"
                aria-controls="compilanceStatus"
              >
                <h2 className="mb-0">Compliance Status</h2>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div
                id="compilanceStatus"
                className="collapse"
                aria-labelledby="compilanceStatus"
                data-parent="#compilanceStatus"
              >
                <div className={`${styles.info_wrapper} card-body pb-4 border_color`}>
                  <div className={`${styles.content}`}>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>GST Return Filing</span>
                        <span className={`${styles.value} value`} style={{ color: '#EA3F3F' }}>
                          {[].forEach((l, index2) => {})}
                          {_get(
                            companyData,
                            'GST[0].detail.summaryInformation.businessProfile.lastReturnFiledgstr1',
                            '',
                          ) != ''
                            ? moment(
                                _get(
                                  companyData,
                                  'GST[0].detail.summaryInformation.businessProfile.lastReturnFiledgstr1',
                                  '',
                                ),
                                'MMyyyy',
                              ).format('MM-yyyy')
                            : ''}
                        </span>
                      </Col>
                      <Col className={` col-md-offset-2 d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1 pl-5`}>NCLT</span>
                        <span className={`${styles.value} value`}>
                          {companyData?.compliance.other?.nclt ? 'YES' : 'NO'}
                          {companyData?.history[0]?.compliance.other?.nclt && (
                            <TooltipCard data={companyData?.history[0]?.compliance.other?.nclt} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>EPF Status</span>
                        <span className={`${styles.value} value`} style={{ color: '#EA3F3F' }}>
                          {companyData?.compliance.other?.epfStatus ? 'YES' : 'NO'}
                          {companyData?.history[0]?.compliance.other?.epfStatus && (
                            <TooltipCard data={companyData?.history[0]?.compliance.other?.epfStatus} />
                          )}
                        </span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1 pl-5`}>BIFR</span>
                        <span className={`${styles.value} value`}>
                          {companyData?.compliance.other?.bifr ? 'YES' : 'NO'}
                          {companyData?.history[0]?.compliance.other?.bifr && (
                            <TooltipCard data={companyData?.history[0]?.compliance.other?.bifr} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Litigation Status</span>
                        <span className={`${styles.value} value`}>
                          {litigationStatus ? litigationStatus : camData?.company?.litigationStatus}
                          {companyData?.history[0]?.compliance.other?.litigationStatus && (
                            <TooltipCard data={companyData?.history[0]?.compliance.other?.litigationStatus} />
                          )}
                        </span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1 pl-5`}>Defaulter Company</span>
                        <span className={`${styles.value} value`}>
                          {companyData?.compliance.other?.defaulterCompany ? 'YES' : 'NO'}
                          {companyData?.history[0]?.compliance.other?.defaulterCompany && (
                            <TooltipCard data={companyData?.history[0]?.compliance.other?.defaulterCompany} />
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row className={`mb-3`}>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1`}>Last Balance Sheet Dates</span>
                        <span className={`${styles.value} value`}>
                          {companyData?.profile?.companyDetail?.lastBalanceSheet}
                          {companyData?.history[0]?.compliance.other?.lastBalanceSheet && (
                            <TooltipCard data={companyData?.history[0]?.compliance.other?.lastBalanceSheet} />
                          )}
                        </span>
                      </Col>
                      <Col className={`d-flex justify-content-between`} md={6}>
                        <span className={`${styles.key} label1 pl-5`}>Active Directors</span>
                        <span className={`${styles.value} value`}>
                          {companyData?.profile?.directorDetail?.length ?? 0}
                          {companyData?.history[0]?.compliance.other?.length && (
                            <TooltipCard data={companyData?.history[0]?.compliance.other?.length} />
                          )}
                        </span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    </>
  );
};
export const strengthAndWeakness = (camData, companyData) => {
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#strengthAndWeakness"
                aria-expanded="true"
                aria-controls="strengthAndWeakness"
              >
                <h2 className="mb-0">Strength &amp; Weakness</h2>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div
                id="strengthAndWeakness"
                className="collapse"
                aria-labelledby="strengthAndWeakness"
                data-parent="#strengthAndWeakness"
              >
                <div className={`${styles.order_wrapper} card-body`}>
                  <Row>
                    <Col className={`${styles.leftCol} border_color`} md={6}>
                      <div className={`d-flex justify-content-start align-content-center`}>
                        <div className={`${styles.icon} ${styles.green_highlight}`}>
                          <span className={`d-flex justify-content-center align-content-center`}>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOC41NzUiIGhlaWdodD0iMjIuMTIiIHZpZXdCb3g9IjAgMCAyOC41NzUgMjIuMTIiPg0KICA8cGF0aCBpZD0iY2hlY2stMiIgZD0iTTEyLjA0MSwyMS45MjYsNS42LDE1LjQ4NywzLjQxLDE3LjY2NCwxMi4wNDEsMjYuMywzMC41Nyw3Ljc2NywyOC4zOTMsNS41OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjcwMiAtNC44ODMpIiBmaWxsPSIjMDBiODFlIiBzdHJva2U9IiMwMGI4MWUiIHN0cm9rZS13aWR0aD0iMSIvPg0KPC9zdmc+DQo="></img>
                          </span>
                        </div>
                        <span className={`${styles.text} good ml-2`}>Strength</span>
                      </div>
                      <div>
                        <ul>
                          {camData &&
                            camData?.company?.recommendation?.strengths?.map((comment, index) => (
                              <li key={index} className={`mt-4`}>
                                {comment}
                              </li>
                            ))}
                          {companyData?.history[0]?.company?.recommendation?.strengths && (
                            <TooltipCard data={companyData?.history[0]?.company?.recommendation?.strengths} />
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
                      <div className={`d-flex justify-content-start align-content-center`}>
                        <div className={`${styles.icon} ${styles.red_highlight} `}>
                          <span className={`d-flex justify-content-center align-content-center`}>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNi44OCIgaGVpZ2h0PSIxNi44OCIgdmlld0JveD0iMCAwIDE2Ljg4IDE2Ljg4Ij4NCiAgPHBhdGggaWQ9ImNsb3NlLTMiIGQ9Ik0yMS4xNzMsNi42MjksMTkuNTQ0LDVsLTYuNDU4LDYuNDU4TDYuNjI5LDUsNSw2LjYyOWw2LjQ1OCw2LjQ1OEw1LDE5LjU0NGwxLjYyOSwxLjYyOSw2LjQ1OC02LjQ1OCw2LjQ1OCw2LjQ1OCwxLjYyOS0xLjYyOS02LjQ1OC02LjQ1OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00LjY0NiAtNC42NDYpIiBmaWxsPSIjZWEzZjNmIiBzdHJva2U9IiNmNDY0NjQiIHN0cm9rZS13aWR0aD0iMC41Ii8+DQo8L3N2Zz4NCg=="></img>
                          </span>
                        </div>
                        <span className={`${styles.text} danger ml-2`}>Weakness</span>
                      </div>
                      <div>
                        <ul>
                          {camData &&
                            camData?.company?.recommendation?.weakness?.map((comment, index) => {
                              return (
                                <li key={index} className={`mt-4`}>
                                  {comment}
                                </li>
                              );
                            })}
                          {companyData?.history[0]?.company?.recommendation?.weakness && (
                            <TooltipCard data={companyData?.history[0]?.company?.recommendation?.weakness} />
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
          )}
        </Toggle>
      </div>
    </>
  );
};
export const sectionTerms = (
  camData,
  sanctionComments,
  setSanctionComments,
  addApproveRemarkArr,
  approveComment,
  filteredCreditRating,
  saveApprovedCreditData,
  onApprove,
  onApproveOrder,
  approvedCredit,
  isFieldInFocus,
  setIsFieldInFocus,
  companyData,
) => {
  const [limitValueChecked, setLimitValueChecked] = useState(false);
  const [orderValueChecked, setOrderValueChecked] = useState(false);

  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                style={{ cursor: 'default' }}
              >
                <h2 className="mb-0">Sanction Terms</h2>
                <div className={`${styles.subHeadContainer} d-flex ml-5`}>
                  <span
                    className={` ${styles.complaintExtra} text-color d-flex align-items-center justify-content-between`}
                  >
                    <span className={`${styles.lightCompliance} accordion_Text mr-2`}>Total Limit:</span>
                    {addPrefixOrSuffix(
                      convertValue(camData?.company?.creditLimit?.totalLimit)?.toLocaleString('en-In'),
                      'Cr',
                      '',
                    )}
                  </span>
                  <span
                    className={`${styles.complaintExtra} text-color d-flex align-items-center justify-content-between`}
                  >
                    <span className={`${styles.lightCompliance} accordion_Text mr-2`}>Utilised Limit:</span>
                    {camData?.company?.creditLimit?.utilizedLimit?.toLocaleString('en-In')}
                    {companyData?.history[0]?.company?.creditLimit?.utilizedLimit && (
                      <TooltipCard data={companyData?.history[0]?.company?.creditLimit?.utilizedLimit} />
                    )}
                  </span>
                  <span
                    className={`${styles.complaintExtra} text-color d-flex align-items-center justify-content-between`}
                  >
                    <span className={`${styles.lightCompliance} accordion_Text mr-2`}>Available Limit:</span>
                    {camData?.company?.creditLimit?.availableLimit?.toLocaleString('en-In')}
                    {companyData?.history[0]?.company?.creditLimit?.availableLimit && (
                      <TooltipCard data={companyData?.history[0]?.company?.creditLimit?.availableLimit} />
                    )}
                  </span>
                </div>
                <span
                  onClick={onToggle}
                  data-toggle="collapse"
                  data-target="#sectionTerms"
                  aria-expanded="true"
                  aria-controls="sectionTerms"
                >
                  {on ? '+' : '-'}
                </span>
              </div>
              <div id="sectionTerms" className="collapse" aria-labelledby="sectionTerms" data-parent="#sectionTerms">
                <div className={`${styles.terms_wrapper} card-body border_color`}>
                  <div className={styles.table_scroll_outer}>
                    <div className={styles.table_scroll_inner}>
                      <table className={`${styles.sectionTable} table   `} cellPadding="0" cellSpacing="0" border="0">
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
                          <td>
                            {camData?.company?.creditLimit?.availableLimit?.toLocaleString('en-In')}
                            {companyData?.history[0]?.company?.creditLimit?.availableLimit && (
                              <TooltipCard data={companyData?.history[0]?.company?.creditLimit?.availableLimit} />
                            )}
                          </td>
                          <td>-</td>
                          {filteredCreditRating ? (
                            <>
                              {' '}
                              {filteredCreditRating &&
                                filteredCreditRating?.length > 0 &&
                                filteredCreditRating.map((val, index) => (
                                  <td key={index}>
                                    {checkNan(convertValue(val?.derived?.value)?.toLocaleString('en-In'))}{' '}
                                  </td>
                                ))}{' '}
                            </>
                          ) : (
                            <td>-</td>
                          )}
                          {filteredCreditRating ? (
                            <>
                              {' '}
                              {filteredCreditRating &&
                                filteredCreditRating?.length > 0 &&
                                filteredCreditRating.map((val, index) => (
                                  <td key={index}>
                                    {checkNan(convertValue(val?.suggested?.value))?.toLocaleString('en-In')}
                                    {` ${camData?.unitOfValue === 'Crores' ? 'Cr' : camData?.unitOfValue}`}
                                  </td>
                                ))}{' '}
                            </>
                          ) : (
                            <td>-</td>
                          )}
                          <td>
                            <input
                              type="checkbox"
                              checked={limitValueChecked}
                              onChange={() => setLimitValueChecked(!limitValueChecked)}
                            ></input>
                          </td>
                          <td>
                            <input
                              className={`${styles.text} input`}
                              disabled={!limitValueChecked}
                              required={true}
                              type="number"
                              onWheel={(event) => event.currentTarget.blur()}
                              onFocus={(e) => {
                                setIsFieldInFocus({
                                  ...isFieldInFocus,
                                  LimitValue: true,
                                }),
                                  (e.target.type = 'number');
                              }}
                              onBlur={(e) => {
                                setIsFieldInFocus({
                                  ...isFieldInFocus,
                                  LimitValue: false,
                                }),
                                  (e.target.type = 'text');
                              }}
                              value={
                                isFieldInFocus?.LimitValue
                                  ? approvedCredit?.approvedCreditValue
                                  : checkNan(Number(approvedCredit?.approvedCreditValue))?.toLocaleString('en-In')
                              }
                              // defaultValue={approvedCredit?.approvedCreditValue}
                              name="approvedCreditValue"
                              // onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

                              onChange={(e) => {
                                onApprove(e.target.name, Number(e.target.value));
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>Order Value</td>
                          <td>-</td>
                          <td>{checkNan(CovertvaluefromtoCR(camData?.orderValue))}</td>
                          <td>-</td>
                          <td>
                            {checkNan(convertValue(camData?.suggestedOrderValue))?.toLocaleString('en-In')}
                            {` ${camData?.unitOfValue === 'Crores' ? 'Cr' : camData?.unitOfValue}`}
                            {companyData?.history[0]?.unitOfValue && (
                              <TooltipCard data={companyData?.history[0]?.unitOfValue} />
                            )}
                            {/* {camData?.suggestedOrderValue} */}
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              checked={orderValueChecked}
                              onChange={() => setOrderValueChecked(!orderValueChecked)}
                            ></input>
                          </td>
                          <td>
                            <input
                              className={`${styles.text} input`}
                              type="number"
                              disabled={!orderValueChecked}
                              onWheel={(event) => event.currentTarget.blur()}
                              // onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

                              name="approvedOrderValue"
                              onFocus={(e) => {
                                setIsFieldInFocus({
                                  ...isFieldInFocus,
                                  OrderValue: true,
                                }),
                                  (e.target.type = 'number');
                              }}
                              onBlur={(e) => {
                                setIsFieldInFocus({
                                  ...isFieldInFocus,
                                  OrderValue: false,
                                }),
                                  (e.target.type = 'text');
                              }}
                              value={
                                isFieldInFocus?.OrderValue
                                  ? approvedCredit?.approvedOrderValue
                                  : checkNan(Number(approvedCredit?.approvedOrderValue))?.toLocaleString('en-In')
                              }
                              // value={approvedCredit?.approvedOrderValue}
                              onChange={(e) => {
                                onApproveOrder(e.target.name, Number(e.target.value));
                              }}
                            ></input>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div>
                    <div
                      className={`${styles.heading} heading card_sub_header d-flex align-items-center justify-content-start`}
                    >
                      Sanction Conditions
                    </div>
                    <ul className="mt-3 mb-3">
                      {camData &&
                        camData?.company?.recommendation?.sanctionTerms?.map((condition, index) => (
                          <li key={index}>{condition}</li>
                        ))}
                      {companyData?.history[0]?.company?.recommendation?.sanctionTerms && (
                        <TooltipCard data={companyData?.history[0]?.company?.recommendation?.sanctionTerms} />
                      )}
                    </ul>
                  </div>
                  <div>
                    <div className={`${styles.approve} pb-4`}>
                      <div className={`mb-3 ${styles.heading} heading `}>Approval Remarks</div>
                      <textarea
                        className="form-control input"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onChange={(e) => setSanctionComments(e.target.value)}
                      ></textarea>
                      <button
                        className={`${styles.button} mt-3 d-flex  align-items-center justify-content-center `}
                        onClick={() => sanctionComments.length > 0 && addApproveRemarkArr(sanctionComments)}
                      >
                        Add
                      </button>
                      <ul className="mt-3 mb-3">
                        {/* {approveComment &&
                    approveComment?.map((approve, index) => (
                      // <div key={index} className={`${styles.remarks}`}>
                      <li key={index}>{approve}</li>
                      // </div>
                    ))} */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    </>
  );
};
export const Documents = (documentsFetched) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#Documents"
                aria-expanded="true"
                aria-controls="Documents"
              >
                <h2 className="mb-0">Documents Available</h2>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div id="Documents" className="collapse" aria-labelledby="Documents" data-parent="#Documents">
                <div className={`${styles.terms_wrapper} card-body border_color`}>
                  <Row className={`${styles.row}`}>
                    {documentsFetched &&
                      documentsFetched?.documents?.map((doc, index) => (
                        <Col md={3} key={index} className={`mb-3`}>
                          <div
                            className={`${styles.doc_container} p-2 border_color d-flex align-items-center justify-content-start`}
                          >
                            <img src="./static/icon file copy.svg"></img>
                            <div className={`${styles.view} ml-4`}>
                              <span className="text_sales">{doc.name}</span>
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
          )}
        </Toggle>
      </div>
    </>
  );
};
export const trends = (
  chartData,
  chartRef,
  chartRef2,
  chartData2,
  lineOption,
  gstData,
  camConversionunit,
  companyData,
) => {
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                style={{ cursor: 'default' }}
              >
                <h2 className="mb-0">Trends</h2>
                <div className="d-flex align-items-center">
                  <h5 className={`${styles.light} ${styles.unit_label} accordion_Text`}>Display By:</h5>
                  <div className="d-flex align-items-center position-relative">
                    <select
                      className={`${styles.select} ${styles.customSelect} accordion_body form-select`}
                      aria-label="Default select example"
                    >
                      <option>Select an option</option>
                      <option selected value="1">
                        Quarterly
                      </option>
                    </select>
                    <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="arrow" />
                  </div>
                  <span
                    onClick={onToggle}
                    data-toggle="collapse"
                    data-target="#trends"
                    aria-expanded="true"
                    aria-controls="trends"
                  >
                    {on ? '+' : '-'}
                  </span>
                </div>
              </div>
              <div
                id="trends"
                //  className="collapse open"
                aria-labelledby="trends"
                data-parent="#trends"
              >
                <div className={`${styles.graph_wrapper} card-body`}>
                  <Row className={`m-0`}>
                    <Col className={`${styles.leftCol} p-0 border_color`} md={6}>
                      <div className={`${styles.head_wrapper} card_sub_header`}>
                        <span className={`${styles.head}`}>Gross Revenue</span>
                        <span className={`${styles.child} ml-2`}>
                          :{' '}
                          {/* {checkNan(
                      CovertvaluefromtoCR(
                        Number(
                          gstData?.detail?.salesDetailAnnual?.saleSummary?.grossTurnover?.current?.value,
                        ),
                      ).toFixed(2),
                      true,
                    )} */}
                          {convertValue(
                            gstData?.detail?.salesDetailAnnual?.saleSummary?.grossTurnover?.current?.value,
                            camConversionunit,
                          )?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })}{' '}
                          Cr
                          {/* {checkNan(
                      Number(
                        gstData?.detail?.salesDetailAnnual?.saleSummary
                          ?.grossTurnover?.current?.value,
                      ),
                      true,
                    )} */}
                        </span>
                      </div>
                      <div className={`${styles.chart}  `}>
                        <Line id="trendChartRevenue" data={chartData} ref={chartRef} options={lineOption} />
                      </div>
                      <div className={`${styles.name}`}>
                        <div className={`${styles.name_wrapper} d-flex justify-content-center align-item-center`}>
                          <div className={styles.round} style={{ backgroundColor: `#2979F2` }}></div>
                          <span className={` heading ml-2`}>Gross Revenue</span>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} className={`${styles.rightCol} px-0 border_color`}>
                      <div className={`${styles.head_wrapper}  card_sub_header`}>
                        <span className={`${styles.head}`}>Gross Purchases</span>
                        <span className={`${styles.child} ml-2`}>
                          :{' '}
                          {/* {checkNan(
                      CovertvaluefromtoCR(
                        Number(
                          gstData?.detail?.purchaseDetailAnnual?.saleSummary?.grossPurchases?.current?.value,
                        ),
                      ).toFixed(2),
                      true,
                    )} */}
                          {convertValue(
                            gstData?.detail?.purchaseDetailAnnual?.saleSummary?.grossPurchases?.current?.value,
                            camConversionunit,
                          )?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })}{' '}
                          Cr
                          {/* {checkNan(
                      Number(
                        gstData?.detail?.purchaseDetailAnnual?.saleSummary
                          ?.grossPurchases?.current?.value,
                      ),
                      true,
                    )} */}
                        </span>
                      </div>
                      <div className={`${styles.chart}`}>
                        <Line id="trendChartPurchases" data={chartData2} ref={chartRef2} options={lineOption} />
                      </div>
                      <div className={`${styles.name}`}>
                        <div className={`${styles.name_wrapper} d-flex justify-content-center align-item-center`}>
                          <div className={styles.round} style={{ backgroundColor: `#FA5F1C` }}></div>
                          <span className={` heading ml-2`}>Gross Purchases</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    </>
  );
};
export const skewness = (
  top5Customers,
  options,
  tempArr,
  gstData,
  top5Suppliers,
  backgroundColor,
  totalCustomer,
  totalSupplier,
  camConversionunit,
  companyData,
) => {
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                style={{ cursor: 'default' }}
              >
                <h2 className="mb-0">Skewness</h2>
                <div className="d-flex align-items-center">
                  <h5 className={`${styles.light} ${styles.unit_label} accordion_Text`}>Display By:</h5>
                  <div className="d-flex align-items-center position-relative">
                    <select
                      className={`${styles.select} ${styles.customSelect} accordion_body form-select`}
                      aria-label="Default select example"
                    >
                      <option>Select an option</option>
                      <option selected value="1">
                        Quarterly
                      </option>
                    </select>
                    <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="arrow" />
                  </div>
                  <span
                    onClick={onToggle}
                    data-toggle="collapse"
                    data-target="#skewness"
                    aria-expanded="true"
                    aria-controls="skewness"
                  >
                    {on ? '+' : '-'}
                  </span>
                </div>
              </div>
              <div
                id="skewness"
                // className="collapse open"
                aria-labelledby="skewness"
                data-parent="#skewness"
              >
                <div className={`${styles.graph_wrapper} card-body`}>
                  <Row className={`m-0`}>
                    <Col className={`${styles.leftCol} p-0 border_color`} md={6}>
                      <div className={`${styles.head_wrapper} card_sub_header`}>
                        <span className={`${styles.head}`}>Gross Revenue</span>
                        <span className={`${styles.child} ml-2`}>
                          :{' '}
                          {/* {checkNan(
                      CovertvaluefromtoCR(
                        Number(
                          gstData?.detail?.salesDetailAnnual?.saleSummary?.grossTurnover?.current?.value,
                        ),
                      ).toFixed(2),
                      true,
                    )} */}
                          {convertValue(
                            gstData?.detail?.salesDetailAnnual?.saleSummary?.grossTurnover?.current?.value,
                            camConversionunit,
                          )?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })}{' '}
                          Cr
                        </span>
                      </div>
                      <Row className={`d-flex  d-flex align-items-center justify-content-evenly`}>
                        <Col md={6} className={`${styles.col}`}>
                          <div className={styles.chart2}>
                            <Doughnut id="skewnessChartRevenue" data={top5Customers} options={options} />

                            {/* <div className={styles.total_value}>
                        <span>{top5Customers?.labels[0]}</span>
                        <span className={styles.highlight}> {
                                ((top5Customers?.datasets[0]?.data[0]/totalCustomer)*100)?.toFixed(2)
                              }%</span>
                      </div> */}
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className={`${styles.name} `}>
                            {top5Customers.datasets &&
                              top5Customers?.datasets[0]?.data?.map((val, index) => {
                                return (
                                  <div
                                    key={index}
                                    className={`${styles.name_wrapper} d-flex justify-content-start align-item-start`}
                                  >
                                    <div
                                      className={styles.round}
                                      style={{
                                        backgroundColor: `${backgroundColor[index]}`,
                                      }}
                                    ></div>
                                    <div className={`d-flex justify-content-between align-item-start w-100`}>
                                      <span className={` heading ml-2`}>{top5Customers.labels[index]}</span>
                                      <span className={` heading mr-4`}>
                                        {((val / totalCustomer) * 100)?.toFixed(2)}%
                                      </span>
                                    </div>
                                  </div>
                                );
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
                          {/* {checkNan(
                      CovertvaluefromtoCR(
                        Number(
                          gstData?.detail?.purchaseDetailAnnual?.saleSummary?.grossPurchases?.current?.value,
                        ),
                      ).toFixed(2),
                      true,
                    )} */}
                          {convertValue(
                            gstData?.detail?.purchaseDetailAnnual?.saleSummary?.grossPurchases?.current?.value,
                            camConversionunit,
                          )?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })}{' '}
                          Cr
                        </span>
                      </div>
                      {/* <div className={`${styles.chart}`}>
                  <Line data={dataline} options={lineOption} />
                </div> */}
                      <Row className={`d-flex  d-flex align-items-center justify-content-evenly`}>
                        <Col md={6} className={`${styles.col}`}>
                          <div className={styles.chart2}>
                            <Doughnut id="skewnessChartRevenue" data={top5Customers} options={options} />
                            {/* 
                      
                      {/* <div className={styles.total_value}>
                        <span>{top5Suppliers?.labels[0]}</span>
                        <span className={styles.highlight}> {
                                ((top5Suppliers?.datasets[0]?.data[0]/totalCustomer)*100)?.toFixed(2)
                              }%</span>
                      </div> */}
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className={`${styles.name} `}>
                            {top5Suppliers.datasets &&
                              top5Suppliers?.datasets[0]?.data.map((val, index) => {
                                return (
                                  <div
                                    key={index}
                                    className={`${styles.name_wrapper} d-flex justify-content-start align-item-start`}
                                  >
                                    <div
                                      className={styles.round}
                                      style={{
                                        backgroundColor: `${backgroundColor[index]}`,
                                      }}
                                    ></div>
                                    <div className={`d-flex justify-content-between align-item-start w-100`}>
                                      <span className={` heading ml-2`}>{top5Suppliers.labels[index]}</span>
                                      <span className={` heading mr-4`}>
                                        {((val / totalSupplier) * 100)?.toFixed(2)}%
                                      </span>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    </>
  );
};
export const customerRating = (data, filteredCreditRating, rating, darkMode, companyData) => {
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#rating"
                aria-expanded="true"
                aria-controls="rating"
              >
                <h2 className="mb-0">Customer Rating</h2>
                <span className=" d-flex align-items-center justify-content-between">
                  <span className={` d-flex align-items-center justify-content-between`}></span>
                  {on ? '+' : '-'}
                </span>
              </div>
              <div id="rating" className="collapse" aria-labelledby="rating" data-parent="#rating">
                <div className={`${styles.rating_wrapper} card-body`}>
                  <Row className={`m-0`}>
                    <Col className={`${styles.leftCol} p-0 border_color d-flex`} md={6}>
                      <div className={`${styles.gauge}`}>
                        <div className={`${styles.container}`}>
                          <svg width="100%" height="100%" viewBox="0 0 39 39" className={`${styles.donut}`}>
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
                              stroke={`${!darkMode ? '#fff' : '#293141'}`}
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
                          <svg width="76%" height="76%" viewBox="0 0 39 39" className={`${styles.donut2}`}>
                            <circle
                              cx="21"
                              cy="21"
                              r="15.91549430918954"
                              // fill='#000'
                              fill={`${!darkMode ? '#fff' : '#293141'}`}
                            ></circle>
                            <circle
                              className={`${styles.donutRing}`}
                              cx="21"
                              cy="21"
                              r="15.91549430918954"
                              fill="transparent"
                              // stroke="white"
                              stroke={`${!darkMode ? '#fff' : '#293141'}`}
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
                            style={{ transform: `${rating}` }}
                          ></img>
                          <div className={`${styles.score}`}>
                            {checkNan(
                              Math.round(filteredCreditRating ? filteredCreditRating[0]?.totalRating : 0),
                              false,
                              1,
                            )}
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.score}`}>
                        <div className={`${styles.excellent}`}>
                          <span>
                            {filteredCreditRating?.length > 0
                              ? filteredCreditRating[0]?.creditResult?.toUpperCase()
                              : ''}
                          </span>
                        </div>
                        <div className={`${styles.creditScore} border_color`}>
                          <div className={`${styles.tickContainer}`}>
                            <img src="static/darktick.svg"></img>
                          </div>
                          <div className={`${styles.content}`}>
                            <span className={`${styles.content_heading}`}>CREDIT SCORE</span>
                            <div>
                              <span className={`${styles.score}`}>
                                {checkNan(
                                  Math.round(filteredCreditRating ? filteredCreditRating[0]?.totalRating : 0),
                                  false,
                                  1,
                                )}
                              </span>
                              <span className={`${styles.outOF} text1`}>/10</span>
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.creditScore} border_color`}>
                          <div className={`${styles.tickContainer}`}>
                            <img src="static/star.svg"></img>
                          </div>
                          <div className={`${styles.content}`}>
                            <span className={`${styles.content_heading}`}>RATING</span>
                            <div>
                              <span className={`${styles.score}`}>
                                {filteredCreditRating ? filteredCreditRating[0]?.creditGrade : ''}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} className={`${styles.rightCol} pl-0 border_color`}>
                      <div
                        className={`${styles.fillWrapper} border_color d-flex justify-content-startt align-items-center`}
                      >
                        <div>
                          <span>BUSINESS PROFILE</span>
                          <div className={`${styles.bar} ${styles.small_bar}`}>
                            <div
                              style={{
                                backgroundColor: '#FFB700',
                                width: `${
                                  filteredCreditRating?.length > 0
                                    ? (filteredCreditRating[0].businessProfile.total.overallValue /
                                        filteredCreditRating[0].totalRating) *
                                      100
                                    : '0'
                                }%`,
                              }}
                              className={`${styles.fill}`}
                            ></div>
                            <span>
                              {filteredCreditRating?.length > 0
                                ? (
                                    Number(
                                      filteredCreditRating[0].businessProfile.total.overallValue /
                                        filteredCreditRating[0].totalRating,
                                    ) * 100
                                  ).toFixed(2)
                                : '0'}{' '}
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.fillWrapper} border_color d-flex justify-content-startt align-items-center`}
                      >
                        <div>
                          <span>REVENUE PROFILE</span>
                          <div className={`${styles.bar} ${styles.small_bar}`}>
                            <div
                              style={{
                                backgroundColor: '#FF4230',
                                width: `${
                                  filteredCreditRating?.length > 0
                                    ? (filteredCreditRating[0].revenueProfile.total.overallValue /
                                        filteredCreditRating[0].totalRating) *
                                      100
                                    : '0'
                                }%`,
                              }}
                              className={`${styles.fill}`}
                            ></div>
                            <span>
                              {filteredCreditRating?.length > 0
                                ? (
                                    Number(
                                      filteredCreditRating[0].revenueProfile.total.overallValue /
                                        filteredCreditRating[0].totalRating,
                                    ) * 100
                                  ).toFixed(2)
                                : '0'}{' '}
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.fillWrapper} border_color d-flex justify-content-startt align-items-center`}
                      >
                        <div>
                          <span>FINANCIAL PROFILE</span>
                          <div className={`${styles.bar} ${styles.small_bar}`}>
                            <div
                              style={{
                                backgroundColor: '#83C400',
                                width: `${
                                  filteredCreditRating?.length > 0
                                    ? (filteredCreditRating[0].financialProfile.total.overallValue /
                                        filteredCreditRating[0].totalRating) *
                                      100
                                    : '0'
                                }%`,
                              }}
                              className={`${styles.fill}`}
                            ></div>
                            <span>
                              {filteredCreditRating?.length > 0
                                ? (
                                    Number(
                                      filteredCreditRating[0].financialProfile.total.overallValue /
                                        filteredCreditRating[0].totalRating,
                                    ) * 100
                                  ).toFixed(2)
                                : '0'}{' '}
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    </>
  );
};
