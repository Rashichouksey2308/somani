/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { setPageName ,setDynamicName} from '../../../src/redux/userData/action'
import _get from "lodash/get"


function Index() {
  const [order,setOrder]=useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const dispatch = useDispatch()


  console.log(order.order,'singleorder')

 useEffect(() => {
   if(window){
      let data= JSON.parse(sessionStorage.getItem("genericSelected"))
      setOrder(data)
      dispatch(setPageName('generic'));
      dispatch(setDynamicName(data.company.companyName));
    }
 },[])
 
  
//  useEffect(() => {
    
    
//   },[dispatch, singleOrder])

  const handleRoute = () => {
    Router.push('/generic')
    
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
                    <h1 className={`${styles.heading} heading`}>{order?.company?.companyName}</h1>
                </div>
        

            
          </div>

          {/*status Box*/}
          
          {/*leads table*/}
          <div className={`${styles.datatable} datatable card`}>
            <div
              className={`${styles.tableFilter} d-flex justify-content-between`}
            >
              <h3 className="heading_card">All Orders</h3>
              <div
                className={`${styles.pageList} d-flex justify-content-end align-items-center`}
              >
                <span>Showing Page {currentPage + 1}  out of {Math.ceil(order.order?.length / 10)}</span>
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
                    if (currentPage+1 < Math.ceil(singleOrder?.totalCount / 10)) {
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
                    {order?.order?.length>0 &&
                      order?.order.map((buyer, index) => (
                        <tr
                          key={index}
                          className={`${styles.table_row} table_row`}
                        >
                          <td>{buyer.orderId}</td>
                          <td
                            className={`${styles.buyerName}`}
                            onClick={() => {
                              
                              handleRoute(buyer)
                            }}
                          >
                            {buyer.commodity}
                          </td>
                          <td>{buyer.createdBy.fName}</td>

                          <td>{buyer.createdAt.split('T')[0]}</td>
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
