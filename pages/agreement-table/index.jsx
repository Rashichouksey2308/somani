/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import 'bootstrap/dist/css/bootstrap.css';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenericData } from '../../src/redux/generic/actionsType';
import styles from './index.module.scss';

import Pagination from '../../src/components/Pagination';
import { SearchLeads } from '../../src/redux/buyerProfile/action';
import { setDynamicName, setDynamicOrder, setPageName } from '../../src/redux/userData/action';

function Index(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [serachterm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  const [genData, setData] = useState([]);
  const [total, setTotal] = useState([]);
  const [sorting, setSorting] = useState(1);

  const { generic } = useSelector((state) => state.generic.allGeneric);

  const { searchedLeads } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(setPageName('agreement'));
    dispatch(setDynamicName(null));
    dispatch(setDynamicOrder(null));
  });
  useEffect(() => {
    getDate();
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Agreement & Lc Module');
      sessionStorage.setItem('loadedSubPage', `Agreement`);
      sessionStorage.setItem('openList', 2);
    }
  }, []);

  const getDate = async () => {
    let data = await dispatch(getGenericData(`?page=${currentPage}&limit=7`));

    setData(data?.data);
    setTotal(data?.totalCount);
  };

  const handleSort = async () => {
    if (sorting == -1) {
      let data = await dispatch(getGenericData(`?page=${currentPage}&limit=${7}&createdAt=${sorting}`));
      setData(data.data);
      setTotal(data.totalCount);
      setSorting(1);
    } else if (sorting == 1) {
      let data = await dispatch(getGenericData(`?page=${currentPage}&limit=${7}&createdAt=${sorting}`));
      setData(data.data);
      setTotal(data.totalCount);
      setSorting(-1);
    }
  };
  const handleRoute = (term) => {
    sessionStorage.setItem('genericSelected', JSON.stringify(term));
    Router.push('/agreement');
    dispatch(setDynamicName(term.company.companyName));
    dispatch(setDynamicOrder(term.order.orderId));
    // Router.push('/lc-module')
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
    dispatch(getGenericData(`?company=${id}`));
  };

  return (
    <>
      {' '}
      <div className={`${styles.container} container-fluid p-0 border-0`}>
        <div className={styles.leads_inner}>
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
                  className={`${styles.formControl} border text_area form-control formControl`}
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
          </div>

          {/*leads table*/}
          <div className={`${styles.datatable} border datatable card`}>
            <Pagination
              data={{ totalCount: total }}
              tableName="Agreements"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalNumber={10}
            />
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr className="table_row">
                      <th>
                        ORDER ID{' '}
                        <img onClick={() => handleSort()} className={`mb-1`} src="/static/icons8-sort-24.svg" />
                      </th>
                      <th>BUYER NAME</th>
                      <th>STATUS</th>
                      <th>Customer ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {genData?.length > 0 &&
                      genData?.map((term, index) => (
                        <tr Key={index} className="table_row">
                          <td>{term?.order.orderId}</td>
                          <td className={`${styles.buyerName}`} onClick={() => handleRoute(term)}>
                            {term?.company?.companyName}
                          </td>

                          <td>
                            <span
                              className={`${styles.status} ${
                                term.order.termsheet.status === 'Rejected'
                                  ? styles.rejected
                                  : term.order.termsheet.status === 'Review'
                                  ? styles.review
                                  : term.order.termsheet.status === 'Approved'
                                  ? styles.approved
                                  : styles.rejected
                              }`}
                            ></span>

                            {term.order.termsheet.status}
                          </td>
                          <td>{term?.company.customerId}</td>
                          {/* <td>{term?.order?.createdAt?.slice(0, 10)}</td> */}
                          {/* <td>
                        <span
                          className={`${styles.status} ${term?.order?.queue === 'Rejected' ? styles.rejected : term?.order?.queue === 'ReviewQueue'
                            ? styles.review
                            : term?.order?.queue === 'CreditQueue'
                              ? styles.approved
                              : styles.rejected
                            }`}
                        ></span>

                        {term?.order?.queue === 'Rejected' ? 'Rejected' : term?.order?.queue === 'ReviewQueue'
                          ? 'Review'
                          : term?.order?.queue === 'CreditQueue'
                            ? 'Approved'
                            : 'Rejected'}
                      </td> */}
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
