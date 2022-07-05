/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllBuyer, GetAllOrders, GetBuyer } from '../../src/redux/registerBuyer/action'
import  {SearchLeads} from  '../../src/redux/buyerProfile/action.js';
import { setPageName ,setDynamicName} from '../../src/redux/userData/action'
function Index() {
  const [serachterm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch()

  const { allBuyerList } = useSelector((state) => state.buyer)
  const { searchedLeads } = useSelector((state) => state.order)
  console.log(searchedLeads, "searched items")
  useEffect(() => {
    dispatch(GetAllBuyer(`?page=${currentPage}`))
  }, [dispatch, currentPage])
  
 useEffect(() => {
     dispatch(setPageName('leads'))
     dispatch(setDynamicName("Name of Company"))
  })

  const handleRoute = (buyer) => {
    // if (buyer.queue === 'ReviewQueue') {
    //   dispatch(GetBuyer({ companyId: buyer.company._id, orderId: buyer._id }))
    //   Router.push('/review/id')
    // }
    // else if (buyer.queue === 'CreditQueue') {
    //   dispatch(GetAllOrders({ orderId: buyer._id }))
    //   Router.push('/review')
    // }
    //  Router.push('/lc-module')
  }

  const handleSearch = (e) => {
    const query = `${e.target.value}`
    setSearchTerm(query)
    if (query.length >= 3) {
      dispatch(SearchLeads(query))
    }
  }

  const handleFilteredData = (e) => {
    setSearchTerm("")
    const id = `${e.target.id}`
    dispatch(GetAllBuyer(`?company=${id}`))
  }



  return (
    <>
      {' '}
      <div className="container-fluid p-0 border-0">
        <div className={styles.leads_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>
            
             <div className={styles.head_header}>
                    <img className={`${styles.arrow} img-fluid`}
                        src="/static/keyboard_arrow_right-3.svg" alt="arrow" />
                    <h1 className={`${styles.heading} heading`}>Name Of Company</h1>
                </div>
        

            <button
              type="button"
              className={`${styles.btnPrimary} btn ml-auto btn-primary`}
              onClick={() => Router.push('/new-order')}
            >
              + New Order
            </button>
          </div>

          {/*status Box*/}
          <div
            className={`${styles.statusBox} statusBox d-flex align-items-center justify-content-between`}
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
                  <span> All </span>
                  3,200
                </h3>
              </div>
            </div>
            <div className={`${styles.approved} ${styles.boxInner}`}>
              <div className="d-lg-flex align-items-center d-inline-block">
                <div className={styles.iconBox}>
                  <img
                    src="/static/check.svg"
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
            <div className={`${styles.saved} ${styles.boxInner}`}>
              <div className="d-lg-flex align-items-center d-inline-block">
                <div className={styles.iconBox}>
                  <img
                    src="/static/bookmark.svg"
                    className="img-fluid"
                    alt="Bookmark"
                  />
                </div>
                <h3>
                  <span>SAVED</span>
                  60
                </h3>
              </div>
            </div>
          </div>
          {/*leads table*/}
          <div className={`${styles.datatable} datatable card`}>
            <div
              className={`${styles.tableFilter} d-flex justify-content-between`}
            >
              <h3 className="heading_card">All Orders</h3>
              <div
                className={`${styles.pageList} d-flex justify-content-end align-items-center`}
              >
                <span>Showing Page {currentPage + 1}  out of {Math.ceil(allBuyerList?.data?.totalCount / 10)}</span>
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
                    if (currentPage+1 < Math.ceil(allBuyerList?.data?.totalCount / 10)) {
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
                      <th >ORDER ID <img className={`mb-1`} src="./static/icons8-sort-24.png "/></th>
                      <th>COMMODITY</th>
                      <th>CREATED ON</th>
                      <th>STATUS</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {allBuyerList &&
                      allBuyerList.data?.data?.map((buyer, index) => (
                        <tr key={index} className={`${styles.table_row} table_row`}>
                          <td>{buyer.company.customerId}</td>
                          <td
                            className={`${styles.buyerName}`}
                            onClick={() => {
                              handleRoute(buyer)
                            }}
                          >
                            {buyer.company.companyName}
                          </td>
                         
                         
                          <td>{buyer.existingCustomer ? 'Yes' : 'No'}</td>
                          <td>
                            <span
                              className={`${styles.status} ${
                              buyer.queue === 'Rejected' ? styles.rejected :  buyer.queue === 'ReviewQueue'
                                  ? styles.review
                                  : buyer.queue === 'CreditQueue'
                                  ? styles.approved
                                  : styles.rejected
                              }`}
                            ></span>
                            
                          {buyer.queue === 'Rejected' ? 'Rejected' : buyer.queue === 'ReviewQueue'
                              ? 'Review'
                              : buyer.queue === 'CreditQueue'
                              ? 'Approved'
                              : 'Rejected'}
                          </td>
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