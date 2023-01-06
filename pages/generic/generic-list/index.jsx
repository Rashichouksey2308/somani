/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './index.module.scss';
import Router from 'next/router';
import Filter from '../../../src/components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getGenericData } from '../../../src/redux/generic/actionsType';

import { setDynamicName, setPageName } from '../../../src/redux/userData/action';

function Index(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const [genData, setData] = useState([]);
  const [total, setTotal] = useState([]);
  const [sorting, setSorting] = useState(1);

  const { generic } = useSelector((state) => state?.generic?.allGeneric);
  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Agreement & LC Module');
      sessionStorage.setItem('loadedSubPage', `Generic`);
      sessionStorage.setItem('openList', 2);
    }
  }, []);
  useEffect(() => {
    dispatch(setPageName('generic'));
    dispatch(setDynamicName(null));
  });
  useEffect(() => {
    getDate();
  }, [currentPage, dispatch]);

  const getDate = async () => {
    const data = await dispatch(getGenericData(`?page=${currentPage}&limit=7`));
    setData(data?.data);
    setTotal(data?.totalCount);
  };
  const handleSort = async () => {
    if (sorting == -1) {
      let data = await dispatch(getGenericData(`?page=${currentPage}&limit=${7}&createdAt=${sorting}`));
      setData(data?.data);
      setTotal(data?.totalCount);
      setSorting(1);
    } else if (sorting == 1) {
      let data = await dispatch(getGenericData(`?page=${currentPage}&limit=${7}&createdAt=${sorting}`));
      setData(data?.data);
      setTotal(data?.totalCount);
      setSorting(-1);
    }
  };

  const handleRoute = (term) => {
    sessionStorage.removeItem('setgenActive');
    sessionStorage.removeItem('genericSide');
    sessionStorage.setItem('genericSelected', JSON.stringify(term));
    sessionStorage.setItem('genericID', term.order.orderId);
    Router.push('/generic');

    //  dispatch(setDynamicName(null))
    // Router.push('/lc-module')
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
                  type="text"
                  className={`${styles.formControl} border text_area form-control formControl `}
                  placeholder="Search"
                />
              </div>
            </div>
            <Filter />
          </div>

          {/*leads table*/}
          <div className={`${styles.datatable} border datatable card`}>
            <div className={`${styles.tableFilter} d-flex align-items-center justify-content-between`}>
              <h3 className="heading_card">Generic</h3>
              <div className={`${styles.pageList} d-flex justify-content-end align-items-center`}>
                <span>
                  Showing Page {currentPage + 1} out of {Math.ceil(total / 10)}
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
                    if (currentPage + 1 < Math.ceil(total / 10)) {
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
                        ORDER ID{' '}
                        <img onClick={() => handleSort()} className={`mb-1`} src="/static/icons8-sort-24.svg" />
                      </th>

                      <th>COMPANY NAME</th>
                      <th>COMMODITY</th>
                      <th>CUSTOMER ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {genData?.length > 0 &&
                      genData?.map((term, index) => (
                        <tr Key={index} className="table_row">
                          <td>{term?.order?.orderId ?? ''}</td>
                          <td className={`${styles.buyerName}`} onClick={() => handleRoute(term)}>
                            {term?.company.companyName}
                          </td>

                          <td>{term?.order?.commodity ?? ''}</td>
                          <td>{term?.company?.customerId ?? ''}</td>
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
