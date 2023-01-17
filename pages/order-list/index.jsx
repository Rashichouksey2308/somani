/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { GetBuyer, GetOrders } from '../../src/redux/registerBuyer/action';
import { setDynamicName, setPageName } from '../../src/redux/userData/action';
import _get from 'lodash/get';
import { GetCompanyDetails, GetCreditLimit } from '../../src/redux/companyDetail/action';
import Table from '../../src/components/Table';
import QueueStats from '../../src/components/QueueStats';
import QueueStatusSymbol from '../../src/components/QueueStatusSymbol';
import moment from 'moment';
import slugify from 'slugify';
import constants from '@/utils/constants'

function Index() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [sortByState, setSortByState] = useState({
    column: '',
    order: null,
  });
  const dispatch = useDispatch();

  const { singleOrder } = useSelector((state) => state.buyer);

  const statData = {
    'all': singleOrder?.totalCount,
    'approved': singleOrder?.approved,
    'pending': singleOrder?.pending,
    'rejected': singleOrder?.rejected,
    'closed': 10
  }

  useEffect(() => {
    const companyIDnewOrder = sessionStorage.getItem('companyID');

    dispatch(GetOrders(`?page=${currentPage}&company=${companyIDnewOrder}&limit=${constants.numberSeven}`));
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(setPageName('leads'));
    dispatch(setDynamicName(_get(singleOrder, 'data[0].company.companyName', ' ')));
  }, [dispatch, singleOrder]);

  useEffect(() => {
    dispatch(GetOrders(`?page=${currentPage}&limit=${pageLimit}`));
  }, [dispatch, currentPage, pageLimit]);

  let compId = _get(singleOrder, 'data[0].company._id', '');

  const handleRouteNewOrder = () => {
    sessionStorage.setItem('companyID', _get(singleOrder, 'data[0].company._id', ''));
    dispatch(GetOrders(`?company=${compId}`));
    dispatch(GetCreditLimit({ companyId: compId }));
    setTimeout(() => {
      Router.push('/new-order');
    }, constants.numberTimeOut1);
  };

  const handleRoute = (buyer) => {
    sessionStorage.setItem('orderID', buyer._id);
    sessionStorage.setItem('company', buyer.company._id);

    sessionStorage.setItem('company', buyer.company._id);
    if (buyer.queue === 'CreditQueue') {
      dispatch(GetCompanyDetails({ company: buyer.company._id }));
      Router.push('/review');
    }
    if (buyer.queue === 'ReviewQueue') {
      dispatch(GetBuyer({ companyId: buyer.company._id, orderId: buyer._id }));
      Router.push('/review/id');
    }
  };

  const tableColumns = useMemo(() => [
    {
      Header: 'Order Id',
      accessor: 'orderId',
      Cell: ({ cell: { value }, row: { original } }) => (
        <span
          onClick={() => {
            handleRoute(original);
          }}
          className="font-weight-bold text-primary"
        >
          {value}
        </span>
      ),
    },
    {
      Header: 'Commodity',
      accessor: 'commodity',
    },
    {
      Header: 'Order Value',
      accessor: 'orderValue',
    },
    {
      Header: 'Creation Date',
      accessor: 'createdAt',
      Cell: ({ value }) => {
        return moment(value?.split('T')[0]).format('DD-MM-YYYY');
      },
    },
    {
      Header: 'Status',
      accessor: 'queue',
      disableSortBy: true,
      Cell: ({ value }) => <QueueStatusSymbol status={value} />,
    },
  ]);
  const [sorting, setSorting] = useState(1);

  const handleSort = () => {
    const companyIDnewOrder = sessionStorage.getItem('companyID');
    if (sorting === -1) {
      dispatch(GetOrders(`?page=${currentPage}&company=${companyIDnewOrder}&limit=${constants.numberSeven}&createdAt=${sorting}`));
      setSorting(1);
    } else if (sorting === 1) {
      dispatch(GetOrders(`?page=${currentPage}&company=${companyIDnewOrder}&limit=${constants.numberSeven}&createdAt=${sorting}`));
      setSorting(-1);
    }
  };

  return (
    <>
      {' '}
      <div className="container-fluid p-0 border-0">
        <div className={styles.leads_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>
            <div className={`${styles.head_header} align-items-center`}>
              <img
                onClick={() => Router.push('/leads')}
                className={`${styles.arrow} img-fluid mr-2 image_arrow`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="arrow"
              />
              <h1 className={`${styles.heading} heading`}>{_get(singleOrder, 'data[0].company.companyName', '')}</h1>
            </div>

            <button
              type="button"
              className={`${styles.btnPrimary} btn ml-auto btn-primary`}
              onClick={() => handleRouteNewOrder()}
            >
              <span className={styles.plus_sign}>+</span>
              <span className={`ml-1 mr-2`}>New Order</span>
            </button>
          </div>

          {/*status Box*/}
          <QueueStats data={statData} />
          {/*leads table*/}
          {singleOrder?.data && (
            <Table
              tableHeading="All Orders"
              currentPage={currentPage}
              totalCount={singleOrder?.totalCount}
              setCurrentPage={setCurrentPage}
              columns={tableColumns}
              data={singleOrder?.data}
              pageLimit={pageLimit}
              setPageLimit={setPageLimit}
              serverSortEnabled={true}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default Index;
