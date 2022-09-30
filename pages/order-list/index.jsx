/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetOrders } from '../../src/redux/registerBuyer/action'
import { setPageName, setDynamicName } from '../../src/redux/userData/action'
import _get from 'lodash/get'
import { GetCreditLimit } from '../../src/redux/companyDetail/action'
import moment from 'moment'
import {
  GetAllBuyer,
  GetAllOrders,
  GetBuyer,
} from '../../src/redux/registerBuyer/action'
import { GetCompanyDetails } from '../../src/redux/companyDetail/action'

function Index() {
  const [currentPage, setCurrentPage] = useState(0)
  const dispatch = useDispatch()

  const { singleOrder } = useSelector((state) => state.buyer)
  console.log(singleOrder, 'singleorder')

  useEffect(() => {
    let companyIDnewOrder = sessionStorage.getItem('companyID')
    console.log(companyIDnewOrder, 'companyIDnewOrder')
    dispatch(GetOrders(`?page=${currentPage}&company=${companyIDnewOrder}`))
  }, [dispatch, currentPage])

  useEffect(() => {
    dispatch(setPageName('leads'))
    dispatch(
      setDynamicName(_get(singleOrder, 'data[0].company.companyName', ' ')),
    )
  }, [dispatch, singleOrder])

  let compId = _get(singleOrder, 'data[0].company._id', '')

  const handleRouteNewOrder = () => {
    sessionStorage.setItem(
      'companyID',
      _get(singleOrder, 'data[0].company._id', ''),
    )
    dispatch(GetOrders(`?company=${compId}`))
    dispatch(GetCreditLimit({ companyId: compId }))
    setTimeout(() => {
      Router.push('/new-order')
    }, 1000)
  }

  // buyer.queue === 'Rejected'
  //                             ? 'Rejected'
  //                             : buyer.queue === 'ReviewQueue'
  //                               ? 'Review'
  //                               : buyer.queue === 'CreditQueue'
  //                                 ? 'Approved'
  //                                 : 'Rejected'
  const handleRoute = (buyer) => {
    sessionStorage.setItem('orderID', buyer._id)
    sessionStorage.setItem('company', buyer.company._id)
    // console.log(buyer,'butyer')

    console.log(' before go to get document')
    sessionStorage.setItem('company', buyer.company._id)
    if (buyer.queue === 'CreditQueue') {
      // dispatch(GetAllOrders({ orderId: buyer._id }))
      //dispatch(GetDocuments({order: buyer._id}))
      dispatch(GetCompanyDetails({ company: buyer.company._id }))
      Router.push('/review')
    }
    if (buyer.queue === 'ReviewQueue') {
      dispatch(GetBuyer({ companyId: buyer.company._id, orderId: buyer._id }))
      Router.push('/review/id')
    }
  }

  return (
    <>
      {' '}
      <div className="container-fluid p-0 border-0">
        <div className={styles.leads_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>
            <div className={`${styles.head_header} align-items-center`}>
              <img onClick={() => Router.push('/leads')}
                className={`${styles.arrow} img-fluid mr-2 image_arrow`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="arrow"
              />
              <h1 className={`${styles.heading} heading`}>
                {_get(singleOrder, 'data[0].company.companyName', '')}
              </h1>
            </div>

            <button
              type="button"
              className={`${styles.btnPrimary} btn ml-auto btn-primary d-flex align-items-center`}
              onClick={() => handleRouteNewOrder()}
            >
              <span className={`ml-4 mb-1 p-1`} style={{fontSize:'30px'}}>+</span>
              <span className={`mr-3 ml-1 `}>New Order</span>
            </button>
          </div>

          {/*status Box*/}
          <div
            className={`${styles.statusBox} border statusBox d-flex align-items-center justify-content-between`}
          >
            <div className={`${styles.all} ${styles.boxInner} all border_color`}>
              <div className="d-lg-flex align-items-center d-inline-block">
                <div className={`${styles.iconBox} iconBox`}>
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
            <div className={`${styles.approved} ${styles.boxInner} approved border_color`}>
              <div className="d-lg-flex align-items-center d-inline-block">
                <div className={`${styles.iconBox} iconBox`}>
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
            <div className={`${styles.saved} ${styles.boxInner} saved border_color`}>
              <div className="d-lg-flex align-items-center d-inline-block">
                <div className={`${styles.iconBox} iconBox`}>
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
          <div className={`${styles.datatable} border datatable card`}>
            <div
              className={`${styles.tableFilter} d-flex align-items-center justify-content-between`}
            >
              <h3 className="heading_card">All Orders</h3>
              <div
                className={`${styles.pageList} d-flex justify-content-end align-items-center`}
              >
                <span>
                  Showing Page {currentPage + 1} out of{' '}
                  {Math.ceil(singleOrder?.totalCount / 10)}
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
                      Math.ceil(singleOrder?.totalCount / 10)
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
                        ORDER ID{' '}
                        <img
                          className={`mb-1`}
                          src="/static/icons8-sort-24.svg"
                        />
                      </th>
                      <th>COMMODITY</th>
                      <th>CREATED BY</th>
                      <th>CREATED ON</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {singleOrder &&
                      singleOrder?.data?.map((buyer, index) => (
                        <tr
                          key={index}
                          className={`${styles.table_row} table_row`}
                        >
                          <td>
                            {buyer?.orderId
                              ? buyer?.orderId : buyer?.applicationId
                              }
                          </td>
                          <td
                            className={`${styles.buyerName}`}
                            onClick={() => {
                              handleRoute(buyer)
                            }}
                          >
                            {buyer?.commodity}
                          </td>
                          <td>{buyer?.createdBy?.fName}</td>

                          <td>
                            {moment(buyer?.createdAt?.split('T')[0]).format(
                              'DD-MM-YYYY',
                            )}
                          </td>
                          <td>
                            <span
                              className={`${styles.status} ${
                                buyer.queue === 'Rejected'
                                  ? styles.rejected
                                  : buyer.queue === 'ReviewQueue'
                                  ? styles.review
                                  : buyer.queue === 'CreditQueue'
                                  ? styles.approved
                                  : styles.rejected
                              }`}
                            ></span>

                            {buyer.queue === 'Rejected'
                              ? 'Rejected'
                              : buyer.queue === 'ReviewQueue'
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
