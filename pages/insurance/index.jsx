/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import TableMain from '../../src/components/TableMain'
import Router from 'next/router'
import Filter from '../../src/components/Filter'
import { useSelector, useDispatch } from 'react-redux'
import { GettingAllInsurance } from '../../src/redux/insurance/action'
import { SearchLeads } from '../../src/redux/buyerProfile/action'
import {
  setPageName,
  setDynamicName,
  setDynamicOrder,
} from '../../src/redux/userData/action'

function Index() {
  const dispatch = useDispatch()

  let d = new Date()

  const [searchTerm, setSearchTerm] = useState('')

  const { searchedLeads } = useSelector((state) => state.order)

  const handleSearch = (e) => {
    const query = `${e.target.value}`
    setSearchTerm(query)
    if (query.length >= 3) {
      dispatch(SearchLeads(query))
    }
  }

  const handleFilteredData = (e) => {
    setSearchTerm('')
    const id = `${e.target.id}`
    dispatch(GettingAllInsurance(`?company=${id}`))
  }

  const changeRoute = (insured) => {
    console.log(insured,"insured")
    sessionStorage.setItem('quotationId', insured._id)
    dispatch(GettingAllInsurance(`?insuranceId=${insured?._id}`))

    Router.push('/insurance/form')
  }

  const handleEditRoute = (insured) => {
    // console.log("asdas",d,insured)
    sessionStorage.setItem('quotationId', insured._id)
    if (insured?.marineInsurance?.insuranceTo <= d || insured?.storageInsurance?.insuranceTo <= d) {
      Router.push('/insurance-renew/id')
    } else if (insured?.quotationRequest?.quotationRequestSubmitted === true) {
      Router.push('/insurance/form/both')
    }
  }
useEffect(() => {
if(window){
    sessionStorage.setItem('loadedPage',"Agreement & Lc Module")
    sessionStorage.setItem('loadedSubPage',`Insurance`)
    sessionStorage.setItem('openList',2)
    }

    dispatch(setPageName('insurance'))
    dispatch(setDynamicName(null))
    dispatch(setDynamicOrder(null))
},[])
  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={styles.search}>
            <div className="input-group">
              <div
                className={`${styles.inputGroupPrepend} input-group-prepend`}
              >
                <img
                  src="/static/search.svg"
                  className="img-fluid"
                  alt="Search"
                />
              </div>
              <input
                value={searchTerm}
                onChange={handleSearch}
                type="text"
                className={`${styles.formControl} form-control formControl `}
                placeholder="Search"
              />
            </div>
            {searchedLeads && searchTerm && (
              <div className={styles.searchResults}>
                <ul>
                  {searchedLeads?.data?.data?.map((results, index) => (
                    <li
                      onClick={handleFilteredData}
                      id={results._id}
                      key={index}
                    >
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
          dateHeading="ETD"
          isStatus={true}
          handleRoute={changeRoute}
          handleEditRoute={handleEditRoute}
        />
      </div>
    </div>
  )
}
export default Index
