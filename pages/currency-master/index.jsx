import React, { useEffect, useState } from 'react';
import styles from '../commodity/index.module.scss';
import Filter from '../../src/components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { SearchLeads } from 'redux/buyerProfile/action';
import DownloadMasterBar from '../../src/components/DownloadMasterBar';
import Router from 'next/router';
import MasterTableQueue from '../../src/components/MasterTableQueue';
import { GetAllCurrency, GetCurrency } from '../../src/redux/currency/action'

const index = () => {

  const dispatch = useDispatch();
  
  const [serachterm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const { searchedLeads } = useSelector((state) => state.order);

  const { allCurrency } = useSelector((state) => state.Currency);

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
    dispatch(GetCurrency(`?company=${id}`));
  };

  useEffect(() => {
    dispatch(GetAllCurrency(`?page=${currentPage}&limit=${pageLimit}`));
  }, [currentPage, pageLimit]);
  
  const handleRoute = (id) => {
    sessionStorage.setItem('currencyId', id);
   
   // Router.push('/ports/id');
  };
 
  return (
    <>
      <div className="container-fluid p-0 border-0">
        <div className={styles.container_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>
            <div className={`${styles.head_header} align-items-center`}>
              <img
                className={`${styles.arrow} image_arrow mr-3 img-fluid`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
              />
              <h1 className={styles.heading}>Currency</h1>
            </div>
            <div className={`${styles.search}`}>
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

            <button
              type="button"
              className={`${styles.createBtn} text-center btn ml-auto btn-primary`}
              onClick={() => {
                sessionStorage.getItem('currencyId') && sessionStorage.removeItem('currencyId');
                Router.push('/currency-master/id');
              }}
            >
              <span className="ml-1 mr-2">Add</span>
            </button>
          </div>

          {/*UserTable*/}
          <MasterTableQueue
            tableName="Currency"
            header1="Currency"
            header2="Currency Name"
            header4="STATUS"   
            isCurrency={true} 
            handleRoute={handleRoute}
            selectorData= {allCurrency}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageLimit={pageLimit}
            setPageLimit={setPageLimit}
          />
        </div>
      </div>
      <DownloadMasterBar btnName="Download as Excel" />
    </>
  );
};

export default index;
