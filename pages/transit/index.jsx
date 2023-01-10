import _get from 'lodash/get';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../src/components/Filter';
import Pagination from '../../src/components/Pagination';
import { SearchLeads } from '../../src/redux/buyerProfile/action.js';
import { GetAllTransitDetails, GetTransitDetails } from '../../src/redux/TransitDetails/action';
import { setDynamicName, setDynamicOrder, setPageName } from '../../src/redux/userData/action';
import styles from './index.module.scss';

function Index() {
  const [serachterm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const { searchedLeads } = useSelector((state) => state.order);

  const dispatch = useDispatch();
  const { allTransitDetails } = useSelector((state) => state.TransitDetails);

  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Loading, Transit & Unloadinge');
      sessionStorage.setItem('loadedSubPage', `Transit Details`);
      sessionStorage.setItem('openList', 3);
    }
  }, []);
  useEffect(() => {
    dispatch(GetAllTransitDetails(`?page=${currentPage}&limit=7`));
  }, [dispatch, currentPage]);
  useEffect(() => {
    dispatch(setPageName('transit'));
    dispatch(setDynamicName(null));

    dispatch(setDynamicOrder(null));
  });

  const handleRoute = (transaction) => {
    let id = transaction._id;
    sessionStorage.setItem('ObjId', transaction.order._id);
    sessionStorage.setItem('transId', id);
    dispatch(GetTransitDetails(`?transitId=${id}`));
    Router.push('/transit/id');
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
    dispatch(GetTransitDetails(`?company=${id}`));
  };

  const [sorting, setSorting] = useState(1);

  const handleSort = () => {
    if (sorting == -1) {
      dispatch(GetAllTransitDetails(`?page=${currentPage}&limit=7&createdAt=${sorting}`));
      setSorting(1);
    } else if (sorting == 1) {
      dispatch(GetAllTransitDetails(`?page=${currentPage}&limit=7&createdAt=${sorting}`));
      setSorting(-1);
    }
  };

  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={`${styles.head_header} align-items-center`}>
            {/* <img
              className={`${styles.arrow} mr-2 image_arrow img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            /> */}
            <h1 className={styles.heading}>Transit Details </h1>
          </div>
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
          {/* <a href="#" className={`${styles.filterList} filterList `}>
        Bhutani Traders
        <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
      </a>
       */}
        </div>

        <div className={`${styles.statusBox} border statusBox d-flex align-items-center justify-content-between`}>
          <div className={`${styles.all} ${styles.boxInner} all border_color`}>
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={`${styles.iconBox} iconBox`}>
                <img src="/static/leads-icon.svg" className="img-fluid" alt="All Leads" />
              </div>
              <h3>
                <span>ALL</span>
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
                <span>TOTAL INSPECTION</span>
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
                <span>BL GENERATION</span>
                800
              </h3>
            </div>
          </div>
          <div className={`${styles.saved} ${styles.boxInner} saved border_color`}>
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={`${styles.iconBox} iconBox`}>
                <img src="/static/bookmark.svg" className="img-fluid" alt="Close" />
              </div>
              <h3>
                <span>SAVED</span>
                14
              </h3>
            </div>
          </div>
        </div>
        <div className={`${styles.datatable} border datatable card`}>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            tableName={'Transit Details'}
            data={allTransitDetails}
          />

          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr className="table_row border_color">
                    <th>
                      ORDER ID <img src="/static/icons8-sort-24.svg" alt="Sort icon" onClick={() => handleSort()} />{' '}
                    </th>
                    <th>COMMODITY</th>
                    <th>BUYER NAME</th>
                    <th>VESSEL NAME</th>
                    <th>
                      SURRENDERED
                      <img style={{ marginLeft: '5px' }} src="/static/icons8-sort-24.svg" alt="Sort icon" />{' '}
                    </th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {_get(allTransitDetails, 'data', []).map((transaction, index) => {
                    return (
                      <tr key={index} className="table_row border_color">
                        <td>{_get(transaction, 'order.orderId', '')}</td>
                        <td className={`${styles.buyerName}`} onClick={() => handleRoute(transaction)}>
                          {_get(transaction, 'order.commodity', '')}
                        </td>
                        <td>{_get(transaction, 'company.companyName', '')}</td>
                        <td>{_get(transaction, 'order.vessel.vessels[0].vesselInformation[0].name', '')}</td>
                        <td>
                          <span className={`${styles.status} ${styles.review}`}></span>
                          Yes
                        </td>
                        <td>
                          <img
                            className={`${styles.edit_image} img-fluid mr-3`}
                            src="/static/mode_edit.svg"
                            alt="edit"
                            onClick={() => handleRoute(transaction)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
