/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllBuyer, GetAllOrders, GetBuyer } from '../../src/redux/registerBuyer/action'

function Index() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetAllBuyer())
  }, [])
  const { allBuyerList } = useSelector((state) => state.buyer)
  console.log(allBuyerList?.data, "this is all buyer")

  const handleRoute = (buyer) => {
    if (buyer.queue === 'ReviewQueue') {
      dispatch(GetBuyer({ companyId: buyer.company._id, orderId: buyer._id }))
      Router.push('/review-queue/id')
    } 
    else if (buyer.queue === 'CreditQueue') {
      dispatch(GetAllOrders({ orderId: buyer._id }))
      Router.push('/review-queue')
    }
  }

  return (
    <>
      {' '}
      <div className="container-fluid mb-4 card">
        <div className="p-4">
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
                  type="text"
                  className={`${styles.formControl} form-control formControl `}
                  placeholder="Search"
                />
              </div>
            </div>
            <a className={styles.filterIcon}>
              <img
                src="/static/filter.svg"
                className="img-fluid"
                alt="Filter"
              />
            </a>
            <a href="#" className={`${styles.filterList} filterList`}>
              Ramesh Shetty
              <img src="/static/close.svg" className="img-fluid" alt="Close" />
            </a>
            <a href="#" className={`${styles.filterList} filterList`}>
              Raj Traders
              <img src="/static/close.svg" className="img-fluid" alt="Close" />
            </a>
            <button
              type="button"
              className={`${styles.btnPrimary} btn ml-auto btn-primary`}
              onClick={() => Router.push('/leads/12')}
            >
              Add
            </button>
          </div>

          {/*status Box*/}
          <div
            className={`${styles.statusBox} statusBox d-flex align-items-center justify-content-between`}
          >
            <div className={`${styles.all} ${styles.boxInner}`}>
              <div className="d-flex align-items-center">
                <div className={styles.iconBox}>
                  <img
                    src="/static/leads.svg"
                    className="img-fluid"
                    alt="All Leads"
                  />
                </div>
                <h3>
                  <span>ALL</span>
                  3,200
                </h3>
              </div>
            </div>
            <div className={`${styles.approved} ${styles.boxInner}`}>
              <div className="d-flex align-items-center">
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
              <div className="d-flex align-items-center">
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
              <div className="d-flex align-items-center">
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
              <div className="d-flex align-items-center">
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
          <div className={`${styles.datatable} datatable`}>
            <div
              className={`${styles.tableFilter} d-flex justify-content-between`}
            >
              <h3 className="heading_card">Leads</h3>
              <div
                className={`${styles.pageList} d-flex justify-content-end align-items-center`}
              >
                <span>Showing Page 1 out of 10</span>
                <a
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
            <table
              className={`${styles.table} table`}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <thead>
                <tr className="table_row">
                  <th>CUSTOMER ID</th>
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
                      <td>RM-Sales</td>
                      <td>Amar Singh</td>
                      <td>{buyer.existingCustomer ? 'Yes' : 'No'}</td>
                      <td>
                        <span
                          className={`${styles.status} ${
                          buyer.queue === 'Rejected' ? styles.rejected :  buyer.Queue === 'ReviewQueue'
                              ? styles.review
                              : 'CreditQueue'
                              ? styles.approved
                              : styles.rejected
                          }`}
                        ></span>
                       {buyer.queue === 'Rejected' ? 'Rejected' : buyer.Queue === 'ReviewQueue'
                          ? 'Review'
                          : 'CreditQueue'
                          ? 'Approved'
                          : 'Rejected'}
                      </td>
                    </tr>
                  ))}
                <tr className={`${styles.table_row} table_row`}>
                  <td>124621</td>
                  <td
                    className={styles.buyerName}
                    onClick={() => Router.push('/review-queue/id')}
                  >
                    Ramakrishna Traders
                  </td>
                  <td>Customer</td>
                  <td>Sameer Soni</td>
                  <td>Yes</td>
                  <td>
                    <span
                      className={`${styles.status} ${styles.rejected}`}
                    ></span>
                    Rejected
                  </td>
                </tr>
                <tr className={`${styles.table_row} table_row`}>
                  <td>124621</td>
                  <td
                    className={styles.buyerName}
                    onClick={() => Router.push('/review-queue/id')}
                  >
                    Somani Traders
                  </td>
                  <td>RM-Sales</td>
                  <td>Sachin Shiv</td>
                  <td>Yes</td>
                  <td>
                    <span
                      className={`${styles.status} ${styles.approved}`}
                    ></span>
                    Approved
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
