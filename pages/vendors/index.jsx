import React, { useState ,useEffect} from 'react';
import styles from '../commodity/index.module.scss';
import Filter from '../../src/components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { SearchLeads } from 'redux/buyerProfile/action';
import DownloadMasterBar from '../../src/components/DownloadMasterBar';
import Router from 'next/router';
import MasterTableQueue from '../../src/components/MasterTableQueue';
import {GetAllVendor,GetVendor} from '../../src/redux/vendor/action'

const index = () => {
  const dispatch = useDispatch();
  const [serachterm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(25);
  const { searchedLeads } = useSelector((state) => state.order);

  const { allVendor } = useSelector((state) => state.Vendor);

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
    dispatch(GetVendor(`?vendorId=${id}`));
  };

  useEffect(() => {
    dispatch(GetAllVendor(`?page=${currentPage}&limit=${pageLimit}`));
  }, [currentPage, pageLimit]);

  const handleRoute = (id) => {
    sessionStorage.setItem('vendorId', id);
    dispatch(GetVendor(`?vendorId=${id}`))
    Router.push('/vendors/add-new-vendor');
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
              onClick={() =>{ sessionStorage.getItem('vendorId') && sessionStorage.removeItem('vendorId'); Router.push('/vendors/add-new-vendor')}}
            >
              Add
            </button>
          </div>

          {/*UserTable*/}
          <MasterTableQueue
            tableName="Vendor Management"
            header1="VENDOR TYPE"
            header2="VENDOR NAME"
            header3="COUNTRY"
            header="ACTIVATION DATE"
            header4="STATUS"
            isCurrency={false}
            isDate={true}
            isHeader={true}
            handleRoute={handleRoute}
            selectorData={allVendor}
            pageLimit={pageLimit}
            setPageLimit={setPageLimit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <DownloadMasterBar btnName="Download" />
    </>
  );
};

export default index;
