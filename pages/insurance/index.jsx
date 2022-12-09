/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import TableMain from '../../src/components/TableMain';
import Router from 'next/router';
import Filter from '../../src/components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { GettingAllInsurance } from '../../src/redux/insurance/action';
import { SearchLeads } from '../../src/redux/buyerProfile/action';
import { setDynamicName, setDynamicOrder, setPageName } from '../../src/redux/userData/action';
import moment from 'moment';

function Index() {
  const dispatch = useDispatch();

  let d = new Date();

  const [searchTerm, setSearchTerm] = useState('');

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
    dispatch(GettingAllInsurance(`?company=${id}`));
  };

  const changeRoute = (insured) => {
    sessionStorage.setItem('quotationId', insured._id);
    if (
      moment(insured?.marineInsurance?.insuranceTo).toDate() <= d ||
      moment(insured?.storageInsurance?.insuranceTo).toDate() <= d
    ) {
      return;
    } else {
      dispatch(GettingAllInsurance(`?insuranceId=${insured?._id}`));
      Router.push('/insurance/form');
    }
  };

  const handleEditRoute = (insured) => {
    sessionStorage.setItem('quotationId', insured._id);
    console.log(moment(insured?.marineInsurance?.insuranceTo).isBefore(moment()),"insuranceRoute",
     moment(insured?.storageInsurance?.insuranceTo).isBefore(moment())
    )
    if(
    insured.insuranceType=="marine"

    ){
  if (
       moment(insured?.marineInsurance?.insuranceTo).isBefore(moment()) 
    ) {
      dispatch(GettingAllInsurance(`?insuranceId=${insured?._id}`));
      Router.push('/insurance-renew/id');
    } else if (insured?.quotationRequest?.quotationRequestSubmitted === true) {
      Router.push('/insurance/form/both');
    }
    }else if( insured.insuranceType=="storage"){
      if (

        moment(insured?.storageInsurance?.insuranceTo).isBefore(moment())
      ) {
      dispatch(GettingAllInsurance(`?insuranceId=${insured?._id}`));
      Router.push('/insurance-renew/id');
      } else if (insured?.quotationRequest?.quotationRequestSubmitted === true) {
      Router.push('/insurance/form/both');
      }
      }else{
      if (
        moment(insured?.marineInsurance?.insuranceTo).isBefore(moment()) ||
        moment(insured?.storageInsurance?.insuranceTo).isBefore(moment())
      ) {
      dispatch(GettingAllInsurance(`?insuranceId=${insured?._id}`));
      Router.push('/insurance-renew/id');
      } else if (insured?.quotationRequest?.quotationRequestSubmitted === true) {
      Router.push('/insurance/form/both');
      }
      }
  
  };

  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Agreement & LC Module');
      sessionStorage.setItem('loadedSubPage', `Insurance`);
      sessionStorage.setItem('openList', 2);
    }

    dispatch(setPageName('insurance'));
    dispatch(setDynamicName(null));
    dispatch(setDynamicOrder(null));
  }, []);

  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
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
                  {searchedLeads?.data?.data?.map((results, index) => (
                    <li onClick={handleFilteredData} id={results._id} key={index}>
                      {results.companyName} <span>{results.customerId}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Filter />
          {/* <a href="#" className={`${styles.filterList} filterList`}>
              Ramesh Shetty
              <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
            </a>
            
            <a href="#" className={`${styles.filterList} filterList`}>
              Raj Traders
              <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
            </a>  */}
        </div>

        <TableMain
          tableName="List of Insurance"
          isVesselHeader={false}
          pageType="INSURANCE TYPE"
          dateHeading="Expiry date"
          isStatus={true}
          handleRoute={changeRoute}
          handleEditRoute={handleEditRoute}
        />
      </div>
    </div>
  );
}

export default Index;
