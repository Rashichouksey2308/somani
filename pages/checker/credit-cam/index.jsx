import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import styles from './index.module.scss';
import { Col, Row } from 'react-bootstrap';
import { Doughnut, Line } from 'react-chartjs-2';
import { Tooltip as x } from '../../../src/components/Tooltip';
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

import { isArray } from 'lodash';
import { addPrefixOrSuffix, checkNan, convertValue, CovertvaluefromtoCR } from '../../../src/utils/helper';
import CAM, {
  basicInfo,
  customerRating,
  supplierInfo,
  groupExposure,
  orderSummary,
  creditProfile,
  directorDetails,
  shareHolding,
  chargeDetails,
  debtProfile,
  operationalDetails,
  revenuDetails,
  trends,
  skewness,
  financeDetails,
  compilanceStatus,
  strengthAndWeakness,
  sectionTerms,
  Documents,
} from '../../../src/components/CAM';
import { GetAllOrders } from '../../../src/redux/registerBuyer/action';
import { GetCompanyDetails, GetCamDetails } from '../../../src/redux/companyDetail/action';
import { getCommodities, getCountries, getDocuments, getPorts } from '../../../src/redux/masters/action';

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
  gstData,
  camData,
  addApproveRemarkArr,
  approveComment,
  saveApprovedCreditData,
  approvedCredit,
  orderDetails,
  GstData,
  setTotalCustomer1,
  setTotalSupplier1,
  setTop5Suppliers1,
  // setTop3Share1,
  setTop3Open1,
  setTop5Customers1,
  totalLimitDebt,
  CreditAgency,
  litigationStatus,
  debtProfileColor,
}) {
  const dispatch = useDispatch();
  const id1 = '6390c35ec9f22e0026b49f1a';
  const id2 = '630068610a3ecb0021651970';
  const { orderList } = useSelector((state) => state.buyer);
  const { fetchingKarzaGst } = useSelector((state) => state.review);
  const { companyData } = useSelector((state) => state.companyDetails);
  const [camConversionunit, setCamCoversionUnit] = useState(10000000);

  const [top3Share, setTop3Share] = useState({
    labels: [],
    datasets: [],
  });

  const [top3Open, setTop3Open] = useState({
    labels: [],
    datasets: [],
  });
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
  const [isFieldInFocus, setIsFieldInFocus] = useState({
    LimitValue: false,
    OrderValue: false,
  });
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartData2, setChartData2] = useState({
    datasets: [],
  });
  const [sanctionComments, setSanctionComments] = useState('');
  const filteredCreditRating = camData?.company?.creditLimit?.creditRating?.filter((rating) => {
    return camData?._id === rating.order;
  });
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
  const { documentsFetched } = useSelector((state) => state.review);
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
  const latestBalanceData = _get(companyData, 'financial.balanceSheet[0]', {});
  const previousBalanceData = _get(companyData, 'financial.balanceSheet[1]', {});

  const latestYearData = _get(companyData, 'financial.ratioAnalysis[0]', {});
  const previousYearData = _get(companyData, 'financial.ratioAnalysis[1]', {});

  useEffect(() => {
    findTop5Customers(GstData?.detail?.summaryCharts?.top10Cus);
    findTop5Suppliers(GstData?.detail?.summaryCharts?.top10Suppliers);
    findTop3Open(orderList?.company?.detailedCompanyInfo?.financial?.openCharges);
    findTop3Share(orderList?.company?.detailedCompanyInfo?.profile?.shareholdingPattern);
  }, [orderList]);

  useEffect(() => {
    if (filteredCreditRating) {
      getRotate(filteredCreditRating[0]?.totalRating);
    }
  }, [filteredCreditRating]);

  useEffect(() => {
    if (window) {
      // const id1 = sessionStorage.getItem('orderID');
      // const id2 = sessionStorage.getItem('companyID');
      dispatch(GetAllOrders({ orderId: id1 }));
      dispatch(GetCompanyDetails({ company: id2 }));
    }
  }, [dispatch, fetchingKarzaGst]);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getPorts());
    dispatch(getCommodities());
    dispatch(getDocuments());
  }, []);

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

  let backgroundColor = ['#61C555', '#876EB1', '#2884DE', '#ED6B5F', '#2884DE'];

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
    }
  };

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
    }
  };
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

  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className={`${styles.title_header} d-flex align-items-center`}>
            <div className="d-flex align-items-center flex-grow-1">
              <img
                src="/static/keyboard_arrow_right-3.svg"
                alt="arrow right"
                className="img-fluid image_arrow mr-2"
                onClick={() => Router.push('/credit-queue')}
                style={{ cursor: 'pointer' }}
              />
              <h1 className={`${styles.title} heading`}>Indo german international private limited</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 px-0 accordion_body">
            <div className={`${styles.info_wrapper}  border_color pb-4`}>
              <div className={`${styles.content} mt-4 `}>
                {basicInfo(orderList, orderDetails, camConversionunit, companyData)}
              </div>
              <div className={`${styles.content}  `}>{supplierInfo(orderList, companyData)}</div>
              <div className={`${styles.content} `}>{customerRating(orderList, filteredCreditRating, companyData)}</div>
              <div className={`${styles.content} `}>{groupExposure(orderList, camConversionunit, companyData)}</div>
              <div className={`${styles.content} `}>{orderSummary(orderList, camConversionunit, companyData)}</div>
              <div className={`${styles.content} `}>
                {creditProfile(
                  orderList,
                  openChargesLength,
                  primaryBankName,
                  latestAuditorData,
                  CreditAgency,
                  companyData,
                )}
              </div>
              <div className={`${styles.content} `}>{directorDetails(orderList, companyData)}</div>
              <div className={`${styles.content}`}>
                {shareHolding(top3Share, options, tempArr, orderList, backgroundColor, companyData)}
              </div>
              <div className={`${styles.content}`}>
                {chargeDetails(
                  top3Open,
                  options,
                  tempArr,
                  orderList,
                  backgroundColor,
                  camConversionunit,
                  companyData?.history?.[0],
                )}
              </div>
              <div className={`${styles.content}`}>
                {debtProfile(orderList, totalLimitDebt, debtProfileColor, companyData)}
              </div>
              <div className={`${styles.content} `}>{operationalDetails(orderList, companyData)}</div>
              <div className={`${styles.content}`}>{revenuDetails(gstData, camConversionunit, companyData)}</div>
              <div className={`${styles.content}`}>
                {trends(
                  chartData,
                  chartRef,
                  chartRef2,
                  chartData2,
                  lineOption,
                  gstData,
                  camConversionunit,
                  companyData,
                )}
              </div>
              <div className={`${styles.content}`}>
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
                  companyData,
                  <Doughnut
                    id="skewnessChartRevenue"
                    data={{
                      labels: ['Northern Exim Private Limited', 'Thyssenkrupp Materials Trading GMBH', null],
                      datasets: [
                        {
                          label: ['Northern Exim Private Limited', 'Thyssenkrupp Materials Trading GMBH', null],
                          data: [219326, 73000, null],
                          backgroundColor: ['#61C555', '#876EB1', '#2884DE', '#ED6B5F', '#2884DE'],
                          hoverOffset: 4,
                        },
                      ],
                    }}
                    options={options}
                  />,
                )}
              </div>
              <div className={`${styles.content} `}>
                {financeDetails(
                  latestBalanceData,
                  previousBalanceData,
                  companyData,
                  latestYearData,
                  previousYearData,
                  camConversionunit,
                )}
              </div>
              <div className={`${styles.content} `}>{compilanceStatus(companyData, orderList, litigationStatus)}</div>
              <div className={`${styles.content} `}>{strengthAndWeakness(orderList, companyData)}</div>
              <div className={`${styles.content} ${styles.highlight}`}>
                {sectionTerms(
                  orderList,
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
                )}
              </div>
              <div className={`${styles.content}`}>{Documents(documentsFetched, companyData)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
