/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './indextable.module.scss'
import Router from 'next/router'
import Filter from '../../src/components/Filter'
import { useDispatch } from 'react-redux'
import { GettingAllInsurance } from '../../src/redux/insurance/action'
import { useSelector } from 'react-redux'
import { SearchLeads } from '../../src/redux/buyerProfile/action'
import _get from "lodash/get";

function Index() {

  const dispatch = useDispatch()

  const {insuranceResponse} = useSelector((state)=>state.insurance)

  const [searchTerm, setSearchTerm] = useState('')
  
  const { searchedLeads } = useSelector((state) => state.order)

  
  useEffect(() => {
    // console.log(' inside effect')
    let id =  sessionStorage.getItem('companyInsuredId')
    dispatch(GettingAllInsurance(`?company=${id}`))
  }, [dispatch])

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

  const handleRoute = (insured) => {
    sessionStorage.setItem('quotationId', insured._id)
    Router.push('/insurance/form')
  }
  

  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={`${styles.head_header} align-items-center`}>
            <img
              className={`${styles.arrow} img-fluid mr-2 image_arrow`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={styles.heading}>Insurance </h1>
          </div>
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
          <Filter/>
          {/* <a href="#" className={`${styles.filterList} filterList `}>
            Bhutani Traders
          <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
          </a>  */}

          {/* <button className={styles.createBtn}
          onClick={()=>{Router.push("/lc-module/lc-application")}}
          style={{ position: "absolute", right: 25 }}>
          Create</button> */}
        </div>

        <div className={`${styles.datatable} card datatable border-color`}>
          <div
            className={`${styles.tableFilter} align-items-center d-flex justify-content-between`}
          >
            <h3 className="heading_card"> { _get(insuranceResponse, 'data[0].company.companyName', '') }</h3>
          </div>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table
                className={`${styles.table} table`}
                cellPadding="0"
                cellSpacing="0"
                border="0"
              >
                <thead>
                  <tr className="table_row">
                    <th>
                      ORDER ID{' '}
                      <img
                        className={`mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />{' '}
                    </th>
                    <th>COMMODITY</th>
                    <th>CREATED BY</th>
                    <th>STATUS</th>
                    <th>UPDATE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
               {insuranceResponse && insuranceResponse?.data?.map((insured, index) => ( <tr key={index} className="table_row">
                    <td>{insured?.order?.orderId}</td>
                    <td
                      className={styles.buyerName}
                      onClick={() => {
                        handleRoute(insured)
                      }}
                    >
                      {insured?.order?.commodity}
                    </td>
                    <td>RM-Sales</td>

                    <td>
                      <span
                        className={`${styles.status} ${styles.review}`}
                        style={{ cursor: 'pointer' }}
                      ></span>
                      Pending
                    </td>

                    <td>Updated on: {insured?.updatedAt?.split('T')[0]}</td>
                    <td>
                      <img
                        src="/static/mode_edit.svg"
                        className={`${styles.edit_image} mr-3 img-fluid`}
                        // onClick={() => setEdit(!edit)}
                      />
                    </td>
                  </tr>))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Index
