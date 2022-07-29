/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import Router from 'next/router'
import _get from "lodash/get";
import { useDispatch, useSelector } from 'react-redux'
import { GetOrders } from '../../../src/redux/registerBuyer/action'
import { setPageName, setDynamicName } from '../../../src/redux/userData/action'
import { GetTermsheet } from '../../../src/redux/buyerProfile/action'


function Index() {
  const [currentPage, setCurrentPage] = useState(0)
  const dispatch = useDispatch()

  const { singleOrder } = useSelector((state) => state.buyer)
  const { termsheet } = useSelector((state) => state.order)



   console.log(singleOrder, 'all order listtt1')
  console.log(termsheet, "TErmshetTermsheet")


  useEffect(() => {
    let Id = sessionStorage.getItem('termsheetId')
    dispatch(GetTermsheet(`?company=${Id}`))
  }, [dispatch])

  useEffect(() => {
    dispatch(setPageName(_get(
                  termsheet,
                  "data[0].company.companyName",
                  "All Termsheet Order"
                )))
    
  }, [dispatch, singleOrder])

   useEffect(() => {
    if(termsheet){
      dispatch(setDynamicName(termsheet?.data[0]?.order?.orderId))
    }

   },[termsheet,singleOrder])
  const handleRoute = (term) => {
    console.log(term._id, "termtrem")
    //dispatch(GetBuyer({ companyId: term.company._id, orderId: buyer._id }))
    dispatch(GetTermsheet(`?termsheetId=${term._id}`))
    sessionStorage.setItem('termID', term._id)
    Router.push("/termsheet/12")
    // Router.push('/lc-module')
  }

  return (
    <>
      {' '}
      <div className={`${styles.container} container-fluid p-0 border-0`}>
        <div className={styles.leads_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>

            <div className={styles.head_header}>
              <img className={`${styles.arrow} img-fluid`}
                src="/static/keyboard_arrow_right-3.svg" alt="arrow" />
              <h1 className={`${styles.heading} heading`}>{_get(
                  termsheet,
                  "data[0].company.companyName",
                  "All Termsheet Order"
                )}</h1>
            </div>



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
                <span>
                  Showing Page {currentPage + 1} out of{' '}
                  {Math.ceil(termsheet?.totalCount / 10)}
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
                    if (currentPage + 1 < Math.ceil(termsheet?.totalCount / 10)) {
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
                      <th >ORDER ID <img className={`mb-1`} src="/static/icons8-sort-24.svg" /></th>
                      <th>COMMODITY</th>
                      <th>CREATED BY</th>
                      <th>CREATED ON</th>
                      <th>STATUS</th>

                    </tr>
                  </thead>
                  {termsheet && termsheet?.data?.map((term, index) => (<tbody Key={index}>
                    <tr>
                      <td className={`${styles.first}`} onClick={() => handleRoute(term)}>
                        {term?.order?.orderId}
                      </td>
                      <td className={`${styles.buyerName}`} onClick={() => handleRoute(term)} >{term?.order?.commodity}</td>

                      <td>{term?.createdBy?.userRole ? term?.createdBy?.userRole : "RM"} </td>
                      <td>{term?.order?.createdAt?.slice(0, 10)}</td>
                      <td>
                        <span
                          className={`${styles.status} ${term?.order?.queue === 'Rejected' ? styles.rejected : term?.order?.queue === 'ReviewQueue'
                            ? styles.review
                            : term?.order?.queue === 'CreditQueue'
                              ? styles.approved
                              : styles.rejected
                            }`}
                        ></span>

                        {term?.order?.queue === 'Rejected' ? 'Rejected' : term?.order?.queue === 'ReviewQueue'
                          ? 'Review'
                          : term?.order?.queue === 'CreditQueue'
                            ? 'Approved'
                            : 'Rejected'}
                      </td>
                    </tr>
                  </tbody>))}
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
