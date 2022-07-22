/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './creditqueue.module.scss'
import Router from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import {
  GetAllBuyer,
  GetAllOrders,
  GetBuyer,
} from '../../src/redux/registerBuyer/action'
import {GetCompanyDetails} from '../../src/redux/companyDetail/action'
import { SearchLeads } from '../../src/redux/buyerProfile/action.js'
import { setPageName,setDynamicName } from '../../src/redux/userData/action'
import { GetDocuments } from '../../src/redux/creditQueueUpdate/action'


function Index() {
  const [serachterm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const dispatch = useDispatch()

  const { allBuyerList } = useSelector((state) => state.buyer)
  const { searchedLeads } = useSelector((state) => state.order)

  console.log(allBuyerList,"allBuyerListallBuyerList")

  // console.log(currentPage)



  useEffect(() => {
    dispatch(GetAllBuyer(`?page=${currentPage}&queue=${'CreditQueue'}&limit=${7}`))
  }, [dispatch, currentPage])

  useEffect(() => {
    dispatch(setPageName('credit-queue'))
    dispatch(setDynamicName(null))
  })
  
  
  const handleRoute = (buyer) => {
    // console.log(buyer,'butyer')
     console.log(" before go to get document")
    if (buyer.queue === 'CreditQueue') {
      dispatch(GetAllOrders({ orderId: buyer._id }))
      dispatch(GetDocuments({order: buyer._id}))
      dispatch(GetCompanyDetails( {company : buyer.company._id}))
      sessionStorage.setItem('orderID', buyer._id)
      sessionStorage.setItem('companyID', buyer.company._id)
      Router.push('/review')
    }
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

  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={styles.search}>
            <div className="input-group">
              <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
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
                className={`${styles.formControl} form-control formControl `}
                placeholder="Search"
              />
            </div>
            {searchedLeads && serachterm && <div className={styles.searchResults}>
              <ul>
                {searchedLeads.data.data.map((results, index) => (
                  <li onClick={handleFilteredData} id={results._id} key={index}>{results.companyName} <span>{results.customerId}</span></li>
                ))}
              </ul>
            </div>}
          </div>
          <a className={styles.filterIcon}>
            <img src="/static/filter.svg" className="img-fluid" alt="Filter" />
          </a>
          {/* <a href="#" className={`${styles.filterList} filterList `}>
            Ramesh Shetty
            <img src="/static/close.svg" className="img-fluid" alt="Close" />
          </a>
          <a href="#" className={`${styles.filterList} filterList `}>
            Raj Traders
            <img src="/static/close.svg" className="img-fluid" alt="Close" />
          </a> */}
      </div>

      {/*<button type="button" className={`${styles.btnPrimary} btn ml-auto btn-primary`}>Add</button>*/}

      <div
        className={`${styles.statusBox} statusBox  d-flex align-items-center justify-content-between`}
      >
        <div className={`${styles.all} ${styles.boxInner}`}>
          <div className="d-lg-flex align-items-center d-inline-block">
            <div className={styles.iconBox}>
              <img
                src="/static/Leads.svg"
                className="img-fluid"
                alt="All Leads"
              />
            </div>
            <h3>
              <span>TOTAL</span>
              3,200
            </h3>
          </div>
        </div>
        <div className={`${styles.approved} ${styles.boxInner}`}>
          <div className="d-lg-flex align-items-center d-inline-block">
            <div className={styles.iconBox}>
              <img src="/static/darktick.svg" className="img-fluid" alt="Check" />
            </div>
            <h3>
              <span>APPROVED</span>
              780
            </h3>
          </div>
        </div>
        <div className={`${styles.review} ${styles.boxInner}`}>
          <div className="d-lg-flex align-items-center d-inline-block">
            <div className={styles.iconBox}>
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
        <div className={`${styles.pending} ${styles.boxInner}`}>
          <div className="d-lg-flex align-items-center d-inline-block">
            <div className={styles.iconBox}>
              <img
                src="/static/pending.svg"
                className="img-fluid"
                alt="Close"
              />
            </div>
            <h3>
              <span>PENDING APPROVAL</span>
              14
            </h3>
          </div>
        </div>
        <div className={`${styles.rejected} ${styles.boxInner}`}>
          <div className="d-lg-flex align-items-center d-inline-block">
            <div className={styles.iconBox}>
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
      <div className={`${styles.datatable} datatable card`}>
        <div className={`${styles.tableFilter} d-flex justify-content-between`}>
          <h3 className="heading_card">Credit Queue</h3>
          <div
            className={`${styles.pageList} d-flex justify-content-end align-items-center`}
          >
            <span>Showing Page {currentPage + 1}  out of {Math.ceil(allBuyerList?.data?.totalCount / 7)}</span>
            <a
              onClick={() => {
                if (currentPage === 0) {
                  return
                } else {
                  setCurrentPage((prevState) => prevState - 1)
                }
              }}
              href="#" className={`${styles.arrow} ${styles.leftArrow} arrow`}>
              {' '}
              <img
                src="/static/keyboard_arrow_right-3.svg"
                alt="arrow right"
                className="img-fluid"
              />
            </a>
            <a
               onClick={() => {
                if (currentPage+1 < Math.ceil(allBuyerList?.data?.totalCount / 7)) {
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
                <tr className={`${styles.table_row} table_row`}>
                  <th>CUSTOMER ID
                  <img
                    className={`mb-1`}
                    src="/static/icons8-sort-24.svg"
                  />
                  </th>
                  <th>BUYER NAME</th>
                  <th>CREATED BY</th>
                  <th>USERNAME</th>
                  <th>EXISTING CUSTOMER</th>
                  <th>STATUS</th>
                  <th>CAM SHEET</th>
                </tr>
              </thead>
              <tbody>
                {allBuyerList &&
                  allBuyerList.data?.data?.map((buyer, index) => (
                    <tr key={index} className={`${styles.table_row} table_row`}>
                     
                        
                          <td>{buyer.company.customerId}</td>
                          <td className={styles.buyerName} onClick={()=>handleRoute(buyer)}>
                            {buyer.company.companyName}
                          </td>
                          <td>{buyer.createdBy.userRole ? buyer.createdBy.userRole : "RM"}</td>
                          <td>{buyer.createdBy.fName}</td>
                          <td>{buyer.existingCustomer ? 'Yes' : 'No'}</td>
                          <td>
                            <span
                              className={`${styles.status} ${styles.approved}`}
                            ></span>
                            {buyer.queue === 'ReviewQueue'
                              ? 'Review'
                              : 'CreditQueue'
                                ? 'Approved'
                                : 'Rejected'}
                          </td>
                          <td>
                            <img
                              src="/static/preview.svg"
                              className="img-fluid"
                              alt="Preview"
                              onClick={() => {
                                handleRoute(buyer)
                              }}
                            />
                          </td>
                        
                    
                    </tr>
                  ))}
                {/* <tr>
                  <td>124621</td>
                  <td className={styles.buyerName}>Ramakrishna Traders</td>
                  <td>Customer</td>
                  <td>Sameer Soni</td>
                  <td>Yes</td>
                  <td>
                    <span className={`${styles.status} ${styles.approved}`}></span>
                    Approved
                  </td>
                  <td>
                    <img
                      src="/static/preview.svg"
                      className="img-fluid"
                      alt="Preview"
                      onClick={() => {
                        Router.push('/review')
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>124621</td>
                  <td className={styles.buyerName}>Somani Traders</td>
                  <td>RM-Sales</td>
                  <td>Sachin Shiv</td>
                  <td>Yes</td>
                  <td>
                    <span className={`${styles.status} ${styles.approved}`}></span>
                    Approved
                  </td>
                  <td>
                    <img
                      src="/static/preview.svg"
                      className="img-fluid"
                      alt="Preview"
                      onClick={() => {
                        Router.push('/review')
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>124621</td>
                  <td className={styles.buyerName}>Bhutani Traders</td>
                  <td>Customer</td>
                  <td>Mahendra Singh</td>
                  <td>Yes</td>
                  <td>
                    <span className={`${styles.status} ${styles.approved}`}></span>
                    Approved
                  </td>
                  <td>
                    <img
                      src="/static/preview.svg"
                      className="img-fluid"
                      alt="Preview"
                      onClick={() => {
                        Router.push('/review')
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>124621</td>
                  <td className={styles.buyerName}>Emerging Traders</td>
                  <td>RM-Sales</td>
                  <td>Amar Singh</td>
                  <td>Yes</td>
                  <td>
                    <span className={`${styles.status} ${styles.approved}`}></span>
                    Approved
                  </td>
                  <td>
                    <img
                      src="/static/preview.svg"
                      className="img-fluid"
                      alt="Preview"
                      onClick={() => {
                        Router.push('/review')
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>124621</td>
                  <td className={styles.buyerName}>Raj Traders</td>
                  <td>Customer</td>
                  <td>Rama Dev</td>
                  <td>Yes</td>
                  <td>
                    <span className={`${styles.status} ${styles.approved}`}></span>
                    Approved
                  </td>
                  <td>
                    <img
                      src="/static/preview.svg"
                      className="img-fluid"
                      alt="Preview"
                      onClick={() => {
                        Router.push('/review')
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>124621</td>
                  <td className={styles.buyerName}>Krishna Traders</td>
                  <td>Customer</td>
                  <td>Sameer Soni</td>
                  <td>Yes</td>
                  <td>
                    <span className={`${styles.status} ${styles.approved}`}></span>
                    Approved
                  </td>
                  <td>
                    <img
                      src="/static/preview.svg"
                      className="img-fluid"
                      alt="Preview"
                      onClick={() => {
                        Router.push('/review')
                      }}
                    />
                  </td>
                </tr> */}
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
