import React, { useState } from 'react';
import styles from './index.module.scss';
import Filter from '../../src/components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { SearchLeads } from 'redux/buyerProfile/action';
import DownloadMasterBar from '../../src/components/DownloadMasterBar';
import Image from 'next/image';
import Router from 'next/router';
import MasterTableQueue from '../../src/components/MasterTableQueue';


const index = () => {
  const dispatch = useDispatch();
  const [serachterm, setSearchTerm] = useState('');
  const { searchedLeads } = useSelector((state) => state.order);

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

  return (
    <>
      <div className="container-fluid p-0 border-0">
        <div className={styles.container_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>
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
              className={`${styles.createBtn} btn ml-auto btn-primary`}
              onClick={() => Router.push('/vendors/add-new-vendor')}
            >
              Add
            </button>
          </div>

          {/*UserTable*/}
          <MasterTableQueue tableName='Vendor Management'
         header1='VENDOR TYPE'
         header2='VENDOR NAME'
         header3='ACTIVATION DATE'
         header='COUNTRY'
         header4='STATUS'
         isDate={true}
         isHeader={true}
         />
        </div>
      </div>
      <DownloadMasterBar btnName="Download" />
    </>
  );
};

export default index;
