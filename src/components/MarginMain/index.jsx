/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllMarginMoney, GetMarginMoney } from 'redux/marginMoney/action'
import { SearchLeads } from 'redux/buyerProfile/action'

function Index() {

  const [currentPage, setCurrentPage] = useState(0)

  const [searchTerm, setSearchTerm] = useState('')

  const dispatch = useDispatch()

  const { searchedLeads } = useSelector((state) => state.order)

  const { marginMoneyResponse } = useSelector((state) => state.marginMoney)
  // console.log(marginMoneyResponse, 'THIS IS MARGIN MONEY RESPONSE')

  useEffect(() => {
    dispatch(GetAllMarginMoney(`?page=${currentPage}&limit=7`))
  }, [dispatch, currentPage])

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
    dispatch(GetAllMarginMoney(`?company=${id}`))
  }

  const handleRoute = (margin) => {
    // console.log(margin, "THIS IS MARGIN MONEY")
    dispatch(GetMarginMoney({ orderId: margin?.order?._id }))
    Router.push('/margin-money/id')
  }

  return (
    <>
      {' '}
      <div className={`container-fluid p-0 border-0 ${styles.container}`}>
        <div className={styles.container_inner}>
          {/*filter*/}
          <div className={`${styles.filter} mb-4 d-flex align-items-center`}>
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
            <a className={styles.filterIcon}>
              <img
                src="/static/filter.svg"
                className="img-fluid"
                alt="Filter"
              />
            </a>
            <a href="#" className={`${styles.filterList} filterList`}>
              Ramesh Shetty
              <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
            </a>
            <a href="#" className={`${styles.filterList} filterList`}>
              Raj Traders
              <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
            </a>
          </div>
          <div className={`${styles.datatable} datatable table_container card`}>
            <div
              className={`${styles.tableFilter} d-flex justify-content-between`}
            >
              <h3 className="heading_card">Margin Money</h3>
              <div
                className={`${styles.pageList} d-flex justify-content-end align-items-center`}
              >
                <span>
                  Showing Page {currentPage + 1} out of{' '}
                  {Math.ceil(marginMoneyResponse?.totalCount / 7)}
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
                    if (currentPage + 1 < Math.ceil(marginMoneyResponse?.totalCount / 7)) {
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
                  className={`${styles.table} table `}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                >
                  <thead>
                    <tr className="table_row table_row_head">
                      <th>ORDER ID</th>
                      <th>BUYER NAME</th>
                      <th>EXISTING CUSTOMER</th>
                      <th>CREATED ON</th>
                      <th>STATUS</th>
                      <th>PREVIEW</th>
                    </tr>
                  </thead>
                  {marginMoneyResponse?.data?.map((margin, index) => (
                    <tbody key={index}>
                      <tr className="table_row">
                        <td>{margin?.order?.orderId}</td>
                        <td
                          className={styles.buyerName}
                          onClick={() => {
                            handleRoute(margin)
                          }}
                        >
                          {margin?.company?.companyName}
                        </td>
                        <td>{margin?.order?.existingCustomer ? 'Yes' : 'No'}</td>
                        <td>{margin?.createdAt?.split('T')[0]}</td>
                        <td>
                          <span
                            className={`${styles.status} ${margin.status === 'Pending'
                                ? styles.review
                                : margin.status === 'Rejected'
                                  ? styles.review
                                  : margin.status === 'Approved'
                                    ? styles.approved
                                    : styles.rejected
                              }`}
                          ></span>

                          {margin?.status === 'Pending'
                            ? 'Pending'
                            : margin.status === 'Rejected'
                              ? 'Rejected'
                              : margin.status === 'Approved'
                                ? 'Approved'
                                : 'Rejected'}
                        </td>
                        <td>
                          <img
                            src="/static/preview.svg"
                            className="img-fluid"
                            alt="Preview"
                            onClick={() => {
                              Router.push('/margin-preview')
                            }}
                          />
                        </td>
                      </tr>
                      {/* <tr className="table_row">
                      <td>124621</td>
                      <td
                        className={styles.buyerName}
                        onClick={() => {
                          Router.push('/margin-money/id')
                        }}
                      >
                        Ramakrishna Traders
                      </td>
                      <td>Yes</td>
                      <td>22-02-2022</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.approved}`}
                        ></span>
                        Approved
                      </td>
                      <td>
                        <img
                          src="/static/preview.svg"
                          className="img-fluid"
                          alt="Preview"
                          onClick={() => {
                            Router.push('/margin-preview')
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td>124621</td>
                      <td
                        className={styles.buyerName}
                        onClick={() => {
                          Router.push('/margin-money/id')
                        }}
                      >
                        Ramakrishna Traders
                      </td>
                      <td>Yes</td>
                      <td>22-02-2022</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.approved}`}
                        ></span>
                        Approved
                      </td>
                      <td>
                        <img
                          src="/static/preview.svg"
                          className="img-fluid"
                          alt="Preview"
                          onClick={() => {
                            Router.push('/margin-preview')
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td>124621</td>
                      <td
                        className={styles.buyerName}
                        onClick={() => {
                          Router.push('/margin-money/id')
                        }}
                      >
                        Bhutani Traders
                      </td>
                      <td>No</td>
                      <td>22-02-2022</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.approved}`}
                        ></span>
                        Approved
                      </td>
                      <td>
                        <img
                          src="/static/preview.svg"
                          className="img-fluid"
                          alt="Preview"
                          onClick={() => {
                            Router.push('/margin-preview')
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td>124621</td>
                      <td
                        className={styles.buyerName}
                        onClick={() => {
                          Router.push('/margin-money/id')
                        }}
                      >
                        Somani Traders
                      </td>
                      <td>No</td>
                      <td>22-02-2022</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.approved}`}
                        ></span>
                        Approved
                      </td>
                      <td>
                        <img
                          src="/static/preview.svg"
                          className="img-fluid"
                          alt="Preview"
                          onClick={() => {
                            Router.push('/margin-preview')
                          }}
                        />
                      </td>
                    </tr> */}
                    </tbody>
                  ))}
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
