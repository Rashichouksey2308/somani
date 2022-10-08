/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllBuyer, GetBuyer } from '../../src/redux/registerBuyer/action'
import { SearchLeads } from '../../src/redux/buyerProfile/action.js'
import { setPageName } from '../../src/redux/userData/action'
import { getBreadcrumbValues } from '../../src/redux/breadcrumb/action'
import Filter from '../../src/components/Filter'

function Index() {
  const [serachterm, setSearchTerm] = useState('')

  const [currentPage, setCurrentPage] = useState(0)

  const dispatch = useDispatch()

  const { allBuyerList } = useSelector((state) => state.buyer)

  const { searchedLeads } = useSelector((state) => state.order)
  // console.log(searchedLeads, 'searched items')

  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Leads')
      sessionStorage.setItem('loadedSubPage', `Review Queue`)
      sessionStorage.setItem('openList', 1)
    }
  }, [])

  useEffect(() => {
    dispatch(
      GetAllBuyer(`?page=${currentPage}&queue=${'ReviewQueue'}&limit=${7}`),
    )
  }, [dispatch, currentPage])

  useEffect(() => {
    dispatch(setPageName('review-queue'))
  })

  const handleRoute = (buyer) => {
    sessionStorage.setItem('orderID', buyer._id)
    sessionStorage.setItem('company', buyer.company._id)
    //dispatch(GetBuyer({ companyId: buyer.company._id, orderId: buyer._id }))
    Router.push('/review/id')
  }

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
    dispatch(GetAllBuyer(`?company=${id}`))
  }

  const [sorting, setSorting] = useState(1)

  const handleSort = () => {
    if(sorting == -1){
    dispatch(GetAllBuyer(`?page=${currentPage}&queue=${'ReviewQueue'}&limit=${7}&createdAt=${sorting}`))
    setSorting(1)
    }else if(sorting == 1){
      
      dispatch(GetAllBuyer(`?page=${currentPage}&queue=${'ReviewQueue'}&limit=${7}&createdAt=${sorting}`))
      setSorting(-1)
    }
  }

  return (
    <>
      {' '}
      <div className="container-fluid border-0 p-0">
        <div className={styles.container_inner}>
          {/*filter*/}
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
                  value={serachterm}
                  onChange={handleSearch}
                  type="text"
                  className={`${styles.formControl} border text_area form-control formControl`}
                  placeholder="Search"
                />
              </div>
              {searchedLeads && serachterm && (
                <div className={styles.searchResults}>
                  <ul>
                    {searchedLeads.data.data.map((results, index) => (
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
              <img src="/static/close.svg" className="img-fluid" alt="Close" />
            </a>
            
            <a href="#" className={`${styles.filterList} filterList`}>
              Raj Traders
              <img src="/static/close.svg" className="img-fluid" alt="Close" />
            </a> */}
          </div>

          {/*status Box*/}
          <div
            className={`${styles.statusBox} border statusBox d-flex align-items-center justify-content-between`}
          >
            <div className={`${styles.all} ${styles.boxInner} all border_color`}>
              <div className="d-lg-flex align-items-center d-inline-block">
                <div className={`${styles.iconBox} iconBox`}>
                  <img
                    src="/static/leads-icon.svg"
                    className="img-fluid"
                    alt="All Leads"
                  />
                </div>
                <h3>
                  <span> TOTAL </span>
                  3,200
                </h3>
              </div>
            </div>
            <div className={`${styles.approved} ${styles.boxInner} approved border_color`}>
              <div className="d-lg-flex align-items-center d-inline-block">
                <div className={`${styles.iconBox} iconBox`}>
                  <img
                    src="/static/darktick.svg"
                    className="img-fluid"
                    alt="Check"
                  />
                </div>
                <h3>
                  <span>APPROVED</span>
                  780
                </h3>
              </div>
            </div>
            <div className={`${styles.review} ${styles.boxInner} review border_color`}>
              <div className="d-lg-flex align-items-center d-inline-block">
                <div className={`${styles.iconBox} iconBox`}>
                  <img
                    src="/static/access-time.svg"
                    className="img-fluid"
                    alt="Access Time"
                  />
                </div>
                <h3>
                  <span>REVIEW</span>
                  800
                </h3>
              </div>
            </div>
            <div className={`${styles.rejected} ${styles.boxInner} rejected border_color`}>
              <div className="d-lg-flex align-items-center d-inline-block">
                <div className={`${styles.iconBox} iconBox`}>
                  <img
                    src="/static/close-b.svg"
                    className="img-fluid"
                    alt="Close"
                  />
                </div>
                <h3>
                  <span>REJECTED</span>
                  89
                </h3>
              </div>
            </div>
          </div>
          {/*leads table*/}
          <div className={`${styles.datatable} border card datatable`}>
            <div
              className={`${styles.tableFilter} d-flex align-items-center justify-content-between`}
            >
              <h3 className="heading_card">Review Queue</h3>
              <div
                className={`${styles.pageList} d-flex justify-content-end align-items-center`}
              >
                <span>
                  Showing Page {currentPage + 1} out of{' '}
                  {Math.ceil(allBuyerList?.data?.totalCount / 7)==0?1:Math.ceil(allBuyerList?.data?.totalCount / 7)}
                </span>
                <a
                  onClick={() => {
                    if (currentPage === 0) {
                      return
                    } else {
                      setCurrentPage((prevState) => prevState - 1)
                    }
                  }}
                  href="#"
                  className={`${styles.arrow} ${styles.leftArrow} arrow`}
                >
                  {' '}
                  <img
                    src="/static/keyboard_arrow_right-3.svg"
                    alt="arrow right"
                    className="img-fluid"
                  />
                </a>
                <a
                  onClick={() => {
                    if (
                      currentPage + 1 <
                      Math.ceil(allBuyerList?.data?.totalCount / 7)
                    ) {
                      setCurrentPage((prevState) => prevState + 1)
                    }
                  }}
                  href="#"
                  className={`${styles.arrow} ${styles.rightArrow} arrow`}
                >
                  <img
                    src="/static/keyboard_arrow_right-3.svg"
                    alt="arrow right"
                    className="img-fluid"
                  />
                </a>
              </div>
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
                        CUSTOMER ID{' '}
                        <img
                          className={`mb-1`}
                          src="./static/icons8-sort-24.svg"
                          onClick={()=>handleSort()}
                        />
                      </th>
                      <th>BUYER NAME</th>
                      <th>CREATED BY</th>
                      <th>USERNAME</th>
                      <th>EXISTING CUSTOMER</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBuyerList &&
                      allBuyerList.data?.data?.map((buyer, index) => (
                        <tr
                          key={index}
                          className={`${styles.table_row} table_row`}
                        >
                          {buyer.queue === 'ReviewQueue' ? (
                            <>
                              <td>{buyer.company.customerId ? buyer.company.customerId : buyer.company.temporaryCustomerId}</td>
                              <td
                                className={`${styles.buyerName}`}
                                onClick={() => {
                                  handleRoute(buyer)
                                  dispatch(
                                    getBreadcrumbValues({
                                      companyName: buyer.company.companyName,
                                      companyId: buyer.company.customerId,
                                    }),
                                  )
                                }}
                              >
                                {buyer.company.companyName}
                              </td>
                              <td>
                                {buyer.createdBy.userRole
                                  ? buyer.createdBy.userRole
                                  : 'RM'}
                              </td>
                              <td>{buyer.createdBy.fName}</td>
                              <td>{buyer.existingCustomer ? 'Yes' : 'No'}</td>
                              <td>
                                <span
                                  className={`${styles.status} ${styles.review}`}
                                ></span>

                                {'Review'}
                              </td>
                            </>
                          ) : null}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
