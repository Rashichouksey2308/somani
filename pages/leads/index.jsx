/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllBuyer, GetOrders } from '../../src/redux/registerBuyer/action';
import { SearchLeads } from '../../src/redux/buyerProfile/action.js';
import { setDynamicName, setPageName } from '../../src/redux/userData/action';
import Filter from '../../src/components/Filter';

// import { getPincodes } from '../../src/redux/masters/action';

function Index() {
  const [serachterm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();

  const { allBuyerList } = useSelector((state) => state.buyer);
  const { searchedLeads } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(GetAllBuyer(`?page=${currentPage}`));
  }, [dispatch, currentPage]);

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
          <div className={`${styles.statusBox} statusBox border d-flex align-items-center justify-content-between`}>
            <div className={`${styles.all} ${styles.boxInner} all border_color`}>
              <div className="d-lg-flex align-items-center d-inline-block">
                <div className={`${styles.iconBox} iconBox`}>
                  <img src="/static/leads-icon.svg" className="img-fluid" alt="All Leads" />
                </div>
                <h3>
                  <span> All </span>
                  3,200
                </h3>
              </div>
            </div>
            <div className={`${styles.approved} ${styles.boxInner} approved border_color`}>
              <div className="d-lg-flex align-items-center d-inline-block">
                <div className={`${styles.iconBox} iconBox`}>
                  <img src="/static/check.svg" className="img-fluid" alt="Check" />
                </div>
                <h3>
                  <span>APPROVED</span>
                  780
                </h3>
              </div>
            </div>
            <div className={`${styles.review} ${styles.boxInner} review border_color`}>
              <div className="d-lg-flex align-items-center d-inline-block">
                <div className={`${styles.iconBox} iconBox`}>
                  <img src="/static/access-time.svg" className="img-fluid" alt="Access Time" />
                </div>
                <h3>
                  <span>REVIEW</span>
                  800
                </h3>
              </div>
            </div>
            <div className={`${styles.rejected} ${styles.boxInner} rejected border_color`}>
              <div className="d-lg-flex align-items-center d-inline-block">
                <div className={`${styles.iconBox} iconBox`}>
                  <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
                </div>
                <h3>
                  <span>REJECTED</span>
                  89
                </h3>
              </div>
            </div>
            <div className={`${styles.saved} ${styles.boxInner} saved border_color`}>
              <div className="d-lg-flex align-items-center d-inline-block">
                <div className={`${styles.iconBox} iconBox`}>
                  <img src="/static/bookmark.svg" className="img-fluid" alt="Bookmark" />
                </div>
                <h3>
                  <span>SAVED</span>
                  60
                </h3>
              </div>
            </div>
          </div>
          {/*leads table*/}
          <div className={`${styles.datatable} border datatable card`}>
            <div className={`${styles.tableFilter} d-flex align-items-center justify-content-between`}>
              <h3 className="heading_card">Leads</h3>
              <div className={`${styles.pageList} d-flex justify-content-end align-items-center`}>
                <span>
                  Showing Page {currentPage + 1} out of {Math.ceil(allBuyerList?.data?.totalCount / 10)}
                </span>
                <a
                  onClick={() => {
                    if (currentPage === 0) return 
                    else {
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
                    if (currentPage + 1 < Math.ceil(allBuyerList?.data?.totalCount / 10)) {
                      setCurrentPage((prevState) => prevState + 1);
                    }
                  }}
                  href="#"
                  className={`${styles.arrow} ${styles.rightArrow} arrow`}
                >
                  <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr className="table_row">
                      <th>
                        CUSTOMER ID{' '}
                        <img className={`mb-1`} src="/static/icons8-sort-24.svg" onClick={() => handleSort()} />
                      </th>
                      <th>BUYER NAME</th>
                      <th>CREATED BY</th>
                      <th>USERNAME</th>
                      <th>EXISTING CUSTOMER</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBuyerList &&
                      allBuyerList.data?.data?.map((buyer, index) => (
                        <tr key={index} className={`${styles.table_row} table_row`}>
                          <td>
                            {buyer?.company?.customerId
                              ? buyer?.company?.customerId
                              : buyer?.company?.temporaryCustomerId}
                          </td>
                          <td
                            className={`${styles.buyerName}`}
                            onClick={() => {
                              handleRoute(buyer);
                            }}
                          >
                            {buyer.company.companyName}
                          </td>
                          <td>{buyer.createdBy.userRole ? buyer.createdBy.userRole : 'RM'}</td>
                          <td>{buyer.createdBy.fName}</td>
                          <td>{buyer.existingCustomer ? 'Yes' : 'No'}</td>
                          <td>
                            <span
                              className={`${styles.status} ${
                                buyer.queue === 'Rejected'
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
