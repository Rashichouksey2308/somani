import React, { useEffect, useState } from 'react';
import styles from '../commodity/index.module.scss';
import Filter from '../../src/components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { SearchLeads } from 'redux/buyerProfile/action';
import DownloadMasterBar from '../../src/components/DownloadMasterBar';
import Router from 'next/router';
import {GetAllInternalCompanies, GetInternalCompanies} from '../../src/redux/internalCompanies/action'
import MasterTableQueue from '../../src/components/MasterTableQueue';

const index = () => {
  
  const dispatch = useDispatch();
  const [serachterm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const { searchedLeads } = useSelector((state) => state.order);

  const { allInternalCompanies } = useSelector((state) => state.internalCompanies);

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
    dispatch(GetInternalCompanies(`?company=${id}`));
  };

  useEffect(() => {
    dispatch(GetAllInternalCompanies(`?page=${currentPage}&limit=${pageLimit}`));
  }, [currentPage, pageLimit]);

  const handleRoute = (id) => {
    sessionStorage.setItem('internalCompanyId', id);
    dispatch(GetInternalCompanies(`?internalCompanyId=${id}`))
    Router.push('/internal-companies/id');
  };

  return (
    <>
      <div className="container-fluid p-0 border-0">
        <div className={styles.container_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>
            <div className={`${styles.head_header} mr-3 align-items-center`}>
              <img
                className={`${styles.arrow} image_arrow mr-3 img-fluid`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
              />
              <h1 className={styles.heading}>Internal Companies</h1>
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
              onClick={() => Router.push('/internal-companies/id')}
            >
              {/* <span className={styles.add_supplier}>+</span> */}
              <span className="ml-1 mr-2">Add</span>
            </button>
          </div>

          {/*UserTable*/}
          <MasterTableQueue
            tableName="Internal Companies"
            header1="COMPANY NAME"
            header2="SHORT NAME"
            header3="COUNTRY"
            header4="STATUS"
            handleRoute={handleRoute}    
            selectorData={allInternalCompanies}      
          />
        </div>
      </div>
      <DownloadMasterBar downloadFormat={true} btnName="Download" />
    </>
  );
};

export default index;
