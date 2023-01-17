/* eslint-disable @next/next/no-img-element */
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchLeads } from 'redux/buyerProfile/action';
import { GetAllMarginMoney, GetMarginMoney } from 'redux/marginMoney/action';
import Filter from '../Filter';
import Pagination from '../Pagination';
import styles from './index.module.scss';

function Index() {
  const [currentPage, setCurrentPage] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const { searchedLeads } = useSelector((state) => state.order);

  const { marginMoneyResponse } = useSelector((state) => state.marginMoney);

  useEffect(() => {
    dispatch(GetAllMarginMoney(`?page=${currentPage}&limit=7`));
  }, [dispatch, currentPage]);

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
    dispatch(GetAllMarginMoney(`?company=${id}`));
  };

  const handleRoute = (margin) => {
    sessionStorage.setItem('marginId', margin?.order?._id);
    sessionStorage.setItem('orderID', margin?.order?._id);

    dispatch(GetMarginMoney({ orderId: margin?.order?._id }));

    Router.push('/margin-money/id');
  };

  const handlePreviewRoute = (margin) => {
    if (margin.revisedMarginMoney.isActive !== true) {
        sessionStorage.setItem('marginId', margin?.order?._id);
           sessionStorage.setItem('orderID', margin?.order?._id);
      dispatch(GetMarginMoney({ orderId: margin?.order?._id }));

      Router.push('/margin-preview');
    } else {
         sessionStorage.setItem('marginId', margin?.order?._id);
             sessionStorage.setItem('orderID', margin?.order?._id);
      dispatch(GetMarginMoney({ orderId: margin?.order?._id }));

      Router.push('/revised-margin-preview');
    }
  };

  return (
    <>
      {' '}
      <div className={`container-fluid p-0 border-0 ${styles.container}`}>
        <div className={styles.container_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>
            <div className={styles.search}>
              <div className="input-group">
                <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
                  <img src="/static/search.svg" className="img-fluid" alt="Search" />
                </div>
                <input
                  value={searchTerm}
                  onChange={handleSearch}
                  type="text"
                  className={`${styles.formControl} border text_area form-control formControl `}
                  placeholder="Search"
                />
              </div>
              {searchedLeads && searchTerm && (
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
          </div>
          <div className={`${styles.datatable} border datatable table_container card`}>
            <Pagination
              data={marginMoneyResponse}
              tableName="Margin Money"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />

            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table `} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr className="table_row table_row_head">
                      <th>ORDER ID</th>
                      <th>BUYER NAME</th>
                      <th>EXISTING CUSTOMER</th>
                      <th>CREATED ON</th>
                      <th>STATUS</th>
                      <th>PREVIEW</th>
                    </tr>
                  </thead>
                  {marginMoneyResponse?.data?.map((margin, index) => (
                    <tbody key={index}>
                      <tr className="table_row">
                        <td>{margin?.order?.orderId ? margin?.order?.orderId : margin?.order?.applicationId}</td>
                        <td
                          className={styles.buyerName}
                          onClick={() => {
                            handleRoute(margin);
                          }}
                        >
                          {margin?.company?.companyName}
                        </td>
                        <td>{margin?.order?.existingCustomer ? 'Yes' : 'No'}</td>
                        <td> {moment(margin?.createdAt?.split('T')[0]).format('DD-MM-yyyy')}</td>
                        <td>
                          <span
                            className={`${styles.status} ${
                              margin.status === 'Pending'
                                ? styles.review
                                : margin.status === 'Rejected'
                                ? styles.review
                                : margin.status === 'Approved'
                                ? styles.approved
                                : styles.rejected
                            }`}
                          ></span>

                          {margin?.status === 'Pending'
                            ? 'Pending'
                            : margin.status === 'Rejected'
                            ? 'Rejected'
                            : margin.status === 'Approved'
                            ? 'Approved'
                            : 'Rejected'}
                        </td>
                        <td>
                          <img
                            src="/static/preview.svg"
                            className={`${styles.eye_icon}`}
                            alt="Preview"
                            onClick={() => {
                              handlePreviewRoute(margin);
                            }}
                          />
                        </td>
                      </tr>
                      {/* <tr className="table_row">
                      <td>124621</td>
                      <td
                        className={styles.buyerName}
                        onClick={() => {
                          Router.push('/margin-money/id')
                        }}
                      >
                        Ramakrishna Traders
                      </td>
                      <td>Yes</td>
                      <td>22-02-2022</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.approved}`}
                        ></span>
                        Approved
                      </td>
                      <td>
                        <img
                          src="/static/preview.svg"
                          className={`${styles.eye_icon}`}
                          alt="Preview"
                          onClick={() => {
                            Router.push('/margin-preview')
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td>124621</td>
                      <td
                        className={styles.buyerName}
                        onClick={() => {
                          Router.push('/margin-money/id')
                        }}
                      >
                        Ramakrishna Traders
                      </td>
                      <td>Yes</td>
                      <td>22-02-2022</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.approved}`}
                        ></span>
                        Approved
                      </td>
                      <td>
                        <img
                          src="/static/preview.svg"
                          className="img-fluid"
                          className={`${styles.eye_icon}`}
                          onClick={() => {
                            Router.push('/margin-preview')
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td>124621</td>
                      <td
                        className={styles.buyerName}
                        onClick={() => {
                          Router.push('/margin-money/id')
                        }}
                      >
                        Bhutani Traders
                      </td>
                      <td>No</td>
                      <td>22-02-2022</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.approved}`}
                        ></span>
                        Approved
                      </td>
                      <td>
                        <img
                          src="/static/preview.svg"
                          className={`${styles.eye_icon}`}
                          alt="Preview"
                          onClick={() => {
                            Router.push('/margin-preview')
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td>124621</td>
                      <td
                        className={styles.buyerName}
                        onClick={() => {
                          Router.push('/margin-money/id')
                        }}
                      >
                        Somani Traders
                      </td>
                      <td>No</td>
                      <td>22-02-2022</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.approved}`}
                        ></span>
                        Approved
                      </td>
                      <td>
                        <img
                          src="/static/preview.svg"
                          className={`${styles.eye_icon}`}
                          alt="Preview"
                          onClick={() => {
                            Router.push('/margin-preview')
                          }}
                        />
                      </td>
                    </tr> */}
                    </tbody>
                  ))}
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
