import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Filter from '../../src/components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { SearchLeads } from 'redux/buyerProfile/action';
import DownloadMasterBar from '../../src/components/DownloadMasterBar';
import Image from 'next/image';
import Router from 'next/router';
import { GetAllSupplier } from 'redux/supplier/action';
import moment from 'moment';
import MasterTableQueue from '../../src/components/MasterTableQueue';

const index = () => {
  const dispatch = useDispatch();
  const [serachterm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const { searchedLeads } = useSelector((state) => state.order);
  const { supplierResponse, allSupplierResponse } = useSelector((state) => state.supplier);

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
    dispatch(GetLcModule(`?company=${id}`));
  };
  useEffect(() => {
    dispatch(GetAllSupplier(`?page=${currentPage}&limit=${pageLimit}`));
  }, [currentPage, pageLimit]);

  const handleRoute = (id) => {
    sessionStorage.setItem('supplier', id);
    Router.push('/supplier');
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
              <h1 className={styles.heading}>Ports</h1>
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
              onClick={() => Router.push('/ports/id')}
            >
             
              <span className="ml-1 mr-2">Add</span>
            </button>
          </div>

          {/*UserTable*/}
          <MasterTableQueue tableName='Ports'
         header1='PORT NAME'
         header2='COUNTRY'
         header3='STATE'
         header='APPROVED DATE'
         header4='APPROVED'
        isHeader={true}
        isDate={true}
         />
         
        </div>
       
      </div>
      <DownloadMasterBar 
      downloadFormat={true}
      btnName="Download" />
    </>
  );
};

export default index;
