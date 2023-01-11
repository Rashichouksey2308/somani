/* eslint-disable @next/next/no-img-element */
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../src/components/Filter';
import Pagination from '../../src/components/Pagination';
import { SearchLeads } from '../../src/redux/buyerProfile/action';
import { GetAllForwardHedging } from '../../src/redux/ForwardHedging/action';
import { setDynamicName, setDynamicOrder, setPageName } from '../../src/redux/userData/action';
import styles from './inspection.module.scss';
import constants from '@/utils/constants'


const Index = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  const [serachterm, setSearchTerm] = useState('');

  const { searchedLeads } = useSelector((state) => state.order);

  const { allForwardHedging } = useSelector((state) => state.ForwardHedging);

  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Loading, Transit & Unloadinge');
      sessionStorage.setItem('loadedSubPage', `Forward Hedging`);
      sessionStorage.setItem('openList', constants.numberThree);
    }
  }, []);

  useEffect(() => {
    dispatch(setPageName('forward'));
    dispatch(setDynamicName(null));
    dispatch(setDynamicOrder(null));
  }, [allForwardHedging]);

  useEffect(() => {
    dispatch(GetAllForwardHedging(`?page=${currentPage}&limit=7`));
  }, [dispatch, currentPage]);

  const handleRoute = (list) => {
    sessionStorage.setItem('headgingId', list._id);
    dispatch(GetAllForwardHedging(`?forwardHedgingId=${list._id}`));
    Router.push('/forward-hedging');
  };

  const handleSearch = (e) => {
    const query = `${e.target.value}`;
    setSearchTerm(query);
    if (query.length >= constants.numberThree) {
      dispatch(SearchLeads(query));
    }
  };

  const handleFilteredData = (e) => {
    setSearchTerm('');
    const id = `${e.target.id}`;
    dispatch(GetAllForwardHedging(`?company=${id}`));
  };

  const [sorting, setSorting] = useState(1);

  const handleSort = () => {
    dispatch(GetAllForwardHedging(`?page=${currentPage}&limit=7&createdAt=${sorting}`));
    if (sorting === -1) setSorting(1);
    else setSorting(-1);
  };
 
  const getReadableStatus = (status) => {
    if (status === 'ReviewQueue') {
      return { styles: styles.review, status: 'ReviewQueue' };
    }
    return status === 'CreditQueue'
      ? { styles: styles.approved, status: 'Approved' }
      : { styles: styles.rejected, status: 'Rejected' };
  };

  return (
    <div className="container-fluid p-0 border-0">
      <div className={`${styles.container_inner}`}>
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
        </div>

        <div className={`${styles.datatable} border datatable card`}>
          <Pagination
            data={allForwardHedging}
            tableName="Forward Hedging Details"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />

          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr className="table_row">
                    <th>
                      ORDER ID{' '}
                      <img
                        className={`mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                        onClick={() => handleSort()}
                      />{' '}
                    </th>
                    <th>BUYER NAME</th>
                    <th>COMMODITY</th>
                    <th>CLOSING DATE</th>
                    <th>
                      STATUS <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />{' '}
                    </th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {allForwardHedging &&
                    allForwardHedging?.data?.map((list, index) => (
                      <tr key={index} className="table_row">
                        <td>{list?.order?.orderId}</td>
                        <td className={`${styles.buyerName}`} onClick={() => handleRoute(list)}>
                          {list?.company?.companyName}
                        </td>
                        <td>{list?.order?.commodity} </td>
                        <td></td>
                        <td>
                          <span className={`${styles.status} ${getReadableStatus(list.order.queue).styles}`}></span>

                          {getReadableStatus(list.order.queue).status}
                        </td>
                        <td>
                          <img
                            className={`${styles.edit_image} img-fluid mr-3`}
                            src="/static/mode_edit.svg"
                            alt="edit"
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
  );
};

export default Index;
