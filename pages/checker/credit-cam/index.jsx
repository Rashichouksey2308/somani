import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import moment from 'moment';
import { Col, Row } from 'react-bootstrap';
import { Doughnut, Line } from 'react-chartjs-2';
import CAM from '../../../src/components/CAM';
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

import { addPrefixOrSuffix, checkNan, convertValue, CovertvaluefromtoCR } from '../../../src/utils/helper';
import { isArray } from 'lodash';
import { basicInfo, customerRating } from './../../../src/components/CAM';
import {
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
} from './../../../src/components/CAM';
import { GetAllOrders } from '../../../src/redux/registerBuyer/action';
import { GetCompanyDetails } from '../../../src/redux/companyDetail/action';
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
  totalLimitDebt,
  CreditAgency,
  litigationStatus,
  debtProfileColor,
}) {
  const dispatch = useDispatch();
  const { orderList } = useSelector((state) => state.buyer);
  const { fetchingKarzaGst } = useSelector((state) => state.review);
  const [camConversionunit, setCamCoversionUnit] = useState(10000000);

  useEffect(() => {
    if (window) {
      let id1 = sessionStorage.getItem('orderID');
      let id2 = sessionStorage.getItem('companyID');
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

  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className={`${styles.title_header} d-flex align-items-center`}>
            <div className={`d-flex align-items-center flex-grow-1`}>
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
              <div className={`${styles.content} mt-4 `}>{basicInfo(orderList)}</div>
              <div className={`${styles.content}  `}>{supplierInfo()}</div>
              <div className={`${styles.content} `}>{customerRating()}</div>
              <div className={`${styles.content} `}>{groupExposure(orderList)}</div>
              <div className={`${styles.content} `}>{orderSummary()}</div>
              <div className={`${styles.content} `}>{creditProfile()}</div>
              <div className={`${styles.content} `}>{directorDetails()}</div>
              {/* <div className={`${styles.content}`}>{shareHolding(_, _, _, orderList, 'red')}</div> */}
              {/* <div className={`${styles.content}`}>{chargeDetails()}</div> */}
              {/* <div className={`${styles.content}`}>{debtProfile()}</div> */}
              <div className={`${styles.content} `}>{operationalDetails(orderList)}</div>
              <div className={`${styles.content}`}>{revenuDetails(orderList)}</div>
              {/* <div className={`${styles.content} }>{trends()}</div> */}
              {/* <div className={`${styles.content} }>{skewness()}</div> */}
              <div className={`${styles.content} `}>{financeDetails()}</div>
              <div className={`${styles.content} `}>{compilanceStatus()}</div>
              <div className={`${styles.content} `}>{strengthAndWeakness()}</div>
              {/* <div className={`${styles.content} ${styles.highlight} card_sub_header  mb-4`}>{sectionTerms()}</div> */}
              {/* <div className={`${styles.content} ${styles.highlight} card_sub_header  mb-4`}>{Documents()}</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
