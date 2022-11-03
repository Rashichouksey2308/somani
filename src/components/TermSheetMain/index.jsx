/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTermsheet, GetTermsheet, SearchLeads } from 'redux/buyerProfile/action';
import { settingSidebar } from '../../redux/breadcrumb/action';
// import { getDisplayName } from 'next/dist/shared/lib/utils'
import Filter from '../Filter';
import moment from 'moment';
import { GetCompanyDetails } from '../../redux/companyDetail/action';
import Loader from '../Loader/index';

function Index() {
  const [currentPage, setCurrentPage] = useState(0);
  const [serachterm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  const { allTermsheets, gettingAllTermsheet } = useSelector((state) => state.order);
  const { searchedLeads } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getAllTermsheet(`?page=${currentPage}&limit=7`));
  }, [dispatch, currentPage]);

  const handleRoute = async (sheet) => {
    await dispatch(GetTermsheet(`?company=${sheet.company._id}`));
    sessionStorage.setItem('termsheetId', sheet.company._id);
    Router.push('/termsheet/order-list');
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
    dispatch(getAllTermsheet(`?company=${id}`));
  };
  const handleRoutePreview = async (buyer) => {
    await dispatch(GetCompanyDetails({ company: buyer.company._id }));
    sessionStorage.setItem('orderID', buyer.order._id);
    sessionStorage.setItem('companyID', buyer.company._id);

    sessionStorage.setItem('showCAM', true);
    dispatch(settingSidebar('Leads', 'Credit Queue', 'Credit Queue', '1'));
    Router.push('/review');
  };

  return (
    <>
      {!gettingAllTermsheet ? (
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
                      {searchedLeads?.data?.data?.map((results, index) => (
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
              <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
            </a>
            <a href="#" className={`${styles.filterList} filterList`}>
              Raj Traders
              <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
            </a> */}
            </div>
            <div className={`${styles.datatable} border datatable card`}>
              <div className={`${styles.tableFilter} d-flex align-items-center justify-content-between`}>
                <h3 className="heading_card">Transaction Summary</h3>
                <div className={`${styles.pageList} d-flex justify-content-end align-items-center`}>
                  <span>
                    Showing Page {currentPage + 1} out of {Math.ceil(allTermsheets?.totalCount / 7)}
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
                      if (currentPage + 1 < Math.ceil(allTermsheets?.totalCount / 7)) {
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
                  <table className={`${styles.table} table table_row_head`} cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                      <tr className="table_row">
                        <th>CUSTOMER ID</th>
                        <th>BUYER NAME</th>
                        <th>EXISTING CUSTOMER</th>
                        <th>CREATED ON</th>
                        <th>STATUS</th>
                        <th>PREVIEW CAM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allTermsheets &&
                        allTermsheets?.data?.map((sheet, index) => (
                          <tr key={index} className={`${styles.table_row} table_row`}>
                            <td>
                              {sheet.company.customerId ? sheet.company.customerId : sheet.company.temporaryCustomerId}
                            </td>
                            <td
                              onClick={() => {
                                handleRoute(sheet);
                              }}
                              className={`${styles.buyerName}`}
                            >
                              {sheet.company.companyName}
                            </td>
                            <td>{sheet.order.existingCustomer ? 'Yes' : 'No'}</td>
                            <td>{moment(sheet.createdAt.slice(0, 10), 'YYYY-MM-DD', true).format('DD-MM-YYYY')}</td>
                            <td>
                              <span className={`${styles.status} ${styles.approved}`}></span>
                              {sheet.status}
                            </td>
                            <td>
                              <img
                                src="/static/preview.svg"
                                className="img-fluid"
                                alt="Preview"
                                onClick={() => {
                                  handleRoutePreview(sheet);
                                }}
                              />
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
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Index;
