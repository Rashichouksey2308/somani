/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllBuyer, GetOrders } from '../../src/redux/registerBuyer/action';
import { SearchLeads } from '../../src/redux/buyerProfile/action.js';
import { setDynamicName, setPageName } from '../../src/redux/userData/action';
import Filter from '../../src/components/Filter';
import FilterBadge from '../../src/components/FilterBadge';
import QueueStats from '../../src/components/QueueStats';
import Table from '../../src/components/Table';
import QueueStatusSymbol from "../../src/components/QueueStatusSymbol";

// import { getPincodes } from '../../src/redux/masters/action';

function Index() {
  const [serachterm, setSearchTerm] = useState('');
  const [showBadges, setShowBadges] = useState(false)
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const dispatch = useDispatch();

  const { allBuyerList } = useSelector((state) => state.buyer);
  const { searchedLeads } = useSelector((state) => state.order);

  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(GetAllBuyer(`?page=${currentPage}&limit=${pageLimit}`));
  }, [dispatch, currentPage, pageLimit]);

  useEffect(() => {
    dispatch(setPageName('leads'));
    dispatch(setDynamicName(null));
  });
  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Leads');
      sessionStorage.setItem('loadedSubPage', null);
      sessionStorage.setItem('openList', 1);
    }
  }, []);

  const handleRoute = (buyer) => {
    sessionStorage.setItem('orderId', buyer._id);
    sessionStorage.setItem('companyID', buyer.company._id);
    dispatch(GetOrders(`?company=${buyer.company._id}`));
    setTimeout(() => {
      Router.push('/order-list');
    }, 500);
  };

  const handleSearch = (e) => {
    const query = `${e.target.value}`;
    setShowBadges(true);
    setSearchTerm(query);
    if (query.length >= 3) {
      dispatch(SearchLeads(query));
    }
  };

  const handleFilteredData = (e) => {
    setSearchTerm('');
    const id = `${e.target.id}`;
    dispatch(GetAllBuyer(`?company=${id}`));
  };

  const [sorting, setSorting] = useState(1);

  const handleSort = () => {
    if (sorting == -1) {
      dispatch(GetAllBuyer(`?page=${currentPage}&createdAt=${sorting}`));
      setSorting(1);
    } else if (sorting == 1) {
      dispatch(GetAllBuyer(`?page=${currentPage}&createdAt=${sorting}`));
      setSorting(-1);
    }
  };

  const statData = {
    'all': allBuyerList?.data?.totalCount,
    'approved': allBuyerList?.data?.approved,
    'review': allBuyerList?.data?.reviewed,
    'rejected': allBuyerList?.data?.rejected,
    'pending': allBuyerList?.data?.pending
  }

  const tableColumns = useMemo(() => [
    {
      Header: "Customer Id",
      accessor: "company.customerId",
    },
    {
      Header: "Buyer Name",
      accessor: "company.companyName",
      Cell: ({ cell: { value }, row: { original } }) => <span onClick={() => { handleRoute(original) }} className="font-weight-bold text-primary">{value}</span>
    },
    {
      Header: "Created By",
      accessor: "createdBy.userRole",
      Cell: ({ value }) => value ? value : 'RM'
    },
    {
      Header: "Username",
      accessor: "createdBy.fName"
    },
    {
      Header: "Existing Customer",
      accessor: "existingCustomer",
      Cell: ({ value }) => {
        return value ? 'Yes' : 'No'
      }
    },
    {
      Header: "Status",
      accessor: "queue",
      Cell: ({ value }) => <QueueStatusSymbol status={value} />
    }
  ])

  return (
    <>
      {' '}
      <div className="container-fluid p-0 border-0">
        <div className={styles.container_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>
            <div className={styles.search}>
              <div className="input-group">
                <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
                  <img src="/static/search.svg" className="img-fluid" alt="Search" />
                </div>
                <input
                  value={serachterm}
                  onChange={handleSearch}
                  type="text"
                  className={`${styles.formControl} border text_area form-control formControl `}
                  placeholder="Search"
                />
              </div>
              {searchedLeads && serachterm && (
                <div className={styles.searchResults}>
                  <ul>
                    {searchedLeads.data.data.map((results, index) => (
                      <li onClick={handleFilteredData} id={results._id} key={index}>
                        {results.companyName} <span>{results.customerId}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Filter />

            {showBadges &&
              searchedLeads?.data?.data?.map((results, index) => {
                const { companyName, status, commodity,orderId } = results;
                return (
                  <>
                    {companyName && open && <FilterBadge label={companyName} onClose={handleClose} />}
                    {status && open && <FilterBadge label={status} onClose={handleClose} />}
                    {commodity && open && <FilterBadge label={commodity} onClose={handleClose} />}
                    {orderId && open && <FilterBadge label={orderId} onClose={handleClose} />}
                  </>
                );
              })}
            {/* <a href="#" className={`${styles.filterList} filterList`}>
              Ramesh Shetty
              <img src="/static/close.svg" className="img-fluid" alt="Close" />
            </a>
            
            <a href="#" className={`${styles.filterList} filterList`}>
              Raj Traders
              <img src="/static/close.svg" className="img-fluid" alt="Close" />
            </a> */}

            <button
              type="button"
              className={`${styles.btnPrimary} btn ml-auto btn-primary`}
              onClick={() => Router.push('/leads/12')}
            >
              <span style={{ fontSize: '28px' }}>+</span>
              <span className={`ml-1 mr-2`}>New Customer</span>
            </button>
          </div>

          {/*status Box*/}
          <QueueStats data={statData} />

          {/*leads table*/}
          {
            allBuyerList?.data?.data &&
            (
              <Table
                tableHeading="Leads"
                currentPage={currentPage}
                totalCount={allBuyerList?.data?.totalCount}
                setCurrentPage={setCurrentPage}
                columns={tableColumns}
                data={allBuyerList?.data?.data}
                pageLimit={pageLimit}
                setPageLimit={setPageLimit}
              />
            )
          }
        </div>
      </div>
    </>
  );
}

export default Index;
