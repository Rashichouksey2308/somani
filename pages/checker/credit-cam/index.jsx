import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import moment from 'moment';
import { Col, Row } from 'react-bootstrap';
import { Doughnut, Line } from 'react-chartjs-2';
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
import {basicInfo} from './../../../src/components/CAM';
import {supplierInfo} from './../../../src/components/CAM';
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
  const { orderList } = useSelector((state) => state.buyer)
  const { fetchingKarzaGst } = useSelector((state) => state.review)
  const [camConversionunit, setCamCoversionUnit] = useState(10000000)


  useEffect(() => {
    if (window) {
      let id1 = sessionStorage.getItem('orderID')
      let id2 = sessionStorage.getItem('companyID')

      // if (sessionStorage.getItem('showCAM') == 'true') {
      //   sessionStorage.setItem('showCAM', false)
        
        dispatch(GetAllOrders({ orderId: id1 }))
        dispatch(GetCompanyDetails({ company: id2 }))
      // }
      // if (sessionStorage.getItem('showCAM') == 'false' || sessionStorage.getItem('showCAM') == undefined) {
        // dispatch(GetAllOrders({ orderId: id1 }))
        // dispatch(GetCompanyDetails({ company: id2 }))
      // }
    }
  }, [dispatch, fetchingKarzaGst])

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getPorts())
    dispatch(getCommodities())
    dispatch(getDocuments())
  }, [])


  return (
    <>
      
      <CAM
                    fetchingKarzaGst={fetchingKarzaGst}
                    gstData={gstData}
                    camData={orderList}
                    companyData={companyData}
                    addApproveRemarkArr={addApproveRemarkArr}
                    approveComment={approveComment}
                    saveApprovedCreditData={saveApprovedCreditData}
                    approvedCredit={approvedCredit}
                    orderDetails={orderList}
                    GstData={gstData}
                    setTotalCustomer1={setTotalCustomer1}
                    setTotalSupplier1={setTotalSupplier1}
                    setTop5Suppliers1={setTop5Suppliers1}
                    setTop3Share1={setTop3Share1}
                    setTop3Open1={setTop3Open1}
                    setTop5Customers1={setTop5Customers1}
                    camConversionunit={camConversionunit}
                    totalLimitDebt={totalLimitDebt}
                    CreditAgency={CreditAgency}
                    litigationStatus={litigationStatus}
                    debtProfileColor={debtProfileColor}
                  />
    </>
  )
}


export default Index;