/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getTermsheet } from 'redux/buyerProfile/action'

function Index() {
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch()
  const { termsheet } = useSelector((state) => state.order)
  useEffect(() => {
    dispatch(getTermsheet(`?page=${currentPage}`))
  }, [dispatch])
  console.log(termsheet, "termsheet")


  const handleRoute = (item) => {
    console.log(item, 'individual termsheet')
   // dispatch(getTermsheet())

    // if (item.queue === 'ReviewQueue') {
    //   dispatch(Getitem({ companyId: item.company._id, orderId: item._id }))
    //   Router.push('/review-queue/id')
    // }
    // else if (item.queue === 'CreditQueue') {
    //   dispatch(GetAllOrders({ orderId: item._id }))
    //   Router.push('/review-queue')
    // }
  }

  return (
    <>
      {' '}
      <div className="container-fluid mb-4 card border-0">
        <div className="p-4">
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
          </div>
          <div className={`${styles.datatable} datatable `}>
            <div className={`${styles.tableFilter} d-flex justify-content-between`}>
              <h3 className="heading_card">Termsheets</h3>
              <div
                className={`${styles.pageList} d-flex justify-content-end align-items-center`}
              >
                <span>Showing Page {currentPage + 1}  out of {Math.ceil(termsheet?.data?.totalCount / 10)}</span>
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
                    if (currentPage + 1 < Math.ceil(termsheet?.data?.totalCount / 10)) {
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
            <table
              className={`${styles.table} table table_row`}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <thead>
                <tr>
                  <th>ORDER ID</th>
                  <th>BUYER NAME</th>
                  <th>EXISTING CUSTOMER</th>
                  <th>CREATED ON</th>
                  <th>STATUS</th>
                  <th>PREVIEW</th>
                </tr>
              </thead>
              <tbody>
                {termsheet && termsheet?.data?.data.map((item, index) => (
                  < tr key={index}>
                    <td>{item.order.orderId}</td>
                    <td className={styles.buyerName}>{item.company.companyName}</td>
                    <td>{item.order.existingCustomer ? "yes" : "No"}</td>
                    <td>{(item.createdAt).slice(0, 10)}</td>
                    <td>
                      <span className={`${styles.status} ${styles.approved}`}></span>
                      {item.status}
                    </td>
                    <td>
                      <img
                      onClick={() => {
                        dispatch(getTermsheet(`?company=${item.company._id}`))
                        Router.push('/termsheet')
                      }}
                        src="/static/preview.svg"
                        className="img-fluid"
                        alt="Preview"

                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
