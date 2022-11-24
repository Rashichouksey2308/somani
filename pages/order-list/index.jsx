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
    'review': singleOrder?.reviewed,
    'rejected': singleOrder?.rejected,
    'pending': singleOrder?.pending
  }

  useEffect(() => {
    let companyIDnewOrder = sessionStorage.getItem('companyID');

    dispatch(GetOrders(`?page=${currentPage}&company=${companyIDnewOrder}&limit=${7}`));
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(setPageName('leads'));
    dispatch(setDynamicName(_get(singleOrder, 'data[0].company.companyName', ' ')));
  }, [dispatch, singleOrder]);

  let compId = _get(singleOrder, 'data[0].company._id', '');

  const handleRouteNewOrder = () => {
    sessionStorage.setItem('companyID', _get(singleOrder, 'data[0].company._id', ''));
    dispatch(GetOrders(`?company=${compId}`));
    dispatch(GetCreditLimit({ companyId: compId }));
    setTimeout(() => {
      Router.push('/new-order');
    }, 1000);
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

  const [sorting, setSorting] = useState(1);

  const handleSort = () => {
    let companyIDnewOrder = sessionStorage.getItem('companyID');
    if (sorting == -1) {
      dispatch(GetOrders(`?page=${currentPage}&company=${companyIDnewOrder}&limit=${7}&createdAt=${sorting}`));
      setSorting(1);
    } else if (sorting == 1) {
      dispatch(GetOrders(`?page=${currentPage}&company=${companyIDnewOrder}&limit=${7}&createdAt=${sorting}`));
      setSorting(-1);
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

console.log("SingleOrder", singleOrder)
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
              className={`${styles.btnPrimary} btn ml-auto btn-primary d-flex align-items-center`}
              onClick={() => handleRouteNewOrder()}
            >
              <span className={`ml-2 mb-1 p-1`} style={{ fontSize: '30px' }}>
                +
              </span>
              <span className={`mr-3 ml-1 `}>New Order</span>
            </button>
          </div>

          {/*status Box*/}
          <QueueStats data={statData} />
          {/*leads table*/}
          {/* <div className={`${styles.datatable} border datatable card`}>
            <div className={`${styles.tableFilter} d-flex align-items-center justify-content-between`}> */}
              {/* <h3 className="heading_card">All Orders</h3> */}
              {/* <div className={`${styles.pageList} d-flex justify-content-end align-items-center`}>
                <span>
                  Showing Page {currentPage + 1} out of {Math.ceil(singleOrder?.totalCount / 7)}
                </span>
                <a
                  onClick={() => {
                    if (currentPage === 0) {
                      return;
                    } else {
                      setCurrentPage((prevState) => prevState - 1);
                    }
                  }}
                  href="#"
                  className={`${styles.arrow} ${styles.leftArrow} arrow`}
                >
                  {' '}
                  <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid" />
                </a>
                <a
                  onClick={() => {
                    if (currentPage + 1 < Math.ceil(singleOrder?.totalCount / 7)) {
                      setCurrentPage((prevState) => prevState + 1);
                    }
                  }}
                  href="#"
                  className={`${styles.arrow} ${styles.rightArrow} arrow`}
                >
                  <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid" />
                </a>
              </div> */}
            {/* </div> */}
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
              handleSort={handleSort}
              sortByState={sortByState}
              serverSortEnabled={true}
            />
            )} 
            {/* <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr className="table_row">
                      <th>
                        ORDER ID{' '}
                        <img className={`mb-1`} src="/static/icons8-sort-24.svg" onClick={() => handleSort()} />
                      </th>
                      <th>COMMODITY</th>
                      <th>CREATED BY</th>
                      <th>CREATED ON</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {singleOrder &&
                      singleOrder?.data?.map((buyer, index) => (
                        <tr key={index} className={`${styles.table_row} table_row`}>
                          <td>{buyer?.orderId ? buyer?.orderId : buyer?.applicationId}</td>
                          <td
                            className={`${styles.buyerName}`}
                            onClick={() => {
                              handleRoute(buyer);
                            }}
                          >
                            {buyer?.commodity}
                          </td>
                          <td>{buyer?.createdBy?.fName}</td>

                          <td>{moment(buyer?.createdAt?.split('T')[0]).format('DD-MM-YYYY')}</td>
                          <td>
                            <span
                              className={`${styles.status} ${buyer.queue === 'Rejected'
                                  ? styles.rejected
                                  : buyer.queue === 'ReviewQueue'
                                    ? styles.review
                                    : buyer.queue === 'CreditQueue'
                                      ? styles.approved
                                      : styles.rejected
                                }`}
                            ></span>

                            {buyer.queue === 'Rejected'
                              ? 'Rejected'
                              : buyer.queue === 'ReviewQueue'
                                ? 'Review'
                                : buyer.queue === 'CreditQueue'
                                  ? 'Approved'
                                  : 'Rejected'}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div> */}
          </div>
        </div>
        </>
      );}
export default Index;