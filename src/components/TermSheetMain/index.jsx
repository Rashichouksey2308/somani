/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTermsheet, GetTermsheet } from 'redux/buyerProfile/action'
import { setPageName, setDynamicName } from '../../redux/userData/action'
import { getDisplayName } from 'next/dist/shared/lib/utils'
import Filter from '../Filter'

function Index() {
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch()
  const { allTermsheets } = useSelector((state) => state.order)

  useEffect(() => {
    dispatch(getAllTermsheet(`?page=${currentPage}&limit=7`))
  }, [dispatch, currentPage])

  const handleRoute = (sheet) => {
    dispatch(GetTermsheet(`?company=${sheet.company._id}`))
    sessionStorage.setItem('termsheetId', sheet.company._id )
    Router.push('/termsheet/order-list')
  }
  return (
    <>
      {' '}
      <div className='container-fluid p-0 border-0'>
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
                  type="text"
                  className={`${styles.formControl} form-control formControl `}
                  placeholder="Search"
                />
              </div>
            </div>
            <Filter/>
            {/* <a href="#" className={`${styles.filterList} filterList`}>
              Ramesh Shetty
              <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
            </a>
            <a href="#" className={`${styles.filterList} filterList`}>
              Raj Traders
              <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
            </a> */}
          </div>
          <div className={`${styles.datatable} datatable card`}>
            <div className={`${styles.tableFilter} d-flex align-items-center justify-content-between`}>
              <h3 className="heading_card">Termsheets</h3>
              <div
                className={`${styles.pageList} d-flex justify-content-end align-items-center`}
              >
                <span>Showing Page {currentPage + 1}  out of {Math.ceil(allTermsheets?.totalCount / 7)}</span>
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
                    if (currentPage + 1 < Math.ceil(allTermsheets?.totalCount / 7)) {
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
                  className={`${styles.table} table table_row_head`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                >
                  <thead>
                    <tr className="table_row">
                      <th>ORDER ID</th>
                      <th>BUYER NAME</th>
                      <th>EXISTING CUSTOMER</th>
                      <th>CREATED ON</th>
                      <th>STATUS</th>
                      <th>PREVIEW</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allTermsheets && allTermsheets?.data?.map((sheet, index) => (
                      <tr key={index} className={`${styles.table_row} table_row`}>
                        <td>{sheet.order.orderId}</td>
                        <td onClick={() => { handleRoute(sheet) }} className={`${styles.buyerName}`}>{sheet.company.companyName}</td>
                        <td>{sheet.order.existingCustomer ? "Yes" : "No"}</td>
                        <td>{(sheet.createdAt).slice(0, 10)}</td>
                        <td>
                          <span className={`${styles.status} ${styles.approved}`}></span>
                          {sheet.status}
                        </td>
                        <td>
                          <img
                            src="/static/preview.svg"
                            className="img-fluid"
                            alt="Preview"
                            onClick={() => {
                              dispatch(GetTermsheet(`?company=${sheet.company._id}`))
                              dispatch(setDynamicName(sheet.order.orderId))
                              Router.push("/termsheet-preview")
                            }}

                          />
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
