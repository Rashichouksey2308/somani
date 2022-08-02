import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { Modal } from 'react-bootstrap'

function Index() {
  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.datatable} datatable card `}>
          <div
            className={`${styles.tableFilter} d-flex justify-content-between`}
          >
            <h5 className="heading_card">Order Summary - Last 6 Orders</h5>
            <div className={`${styles.pageList} d-flex align-items-center`}>
              <img
                src="/static/accordion_close_black.svg"
                alt="close"
                className="img-fluid"
              />
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
                    <th>SUPPLIER NAME</th>
                    <th>ORDER ID</th>
                    <th>ORDER DATE</th>
                    <th>ORDER VALUE</th>
                    <th>COMMODITY</th>
                    <th>STATUS</th>
                    <th>DAYS DUE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table_row">
                    <td
                      className={`d-flex justify-content-start align-items-center`}
                    >
                      <div className={`${styles.icon} `}>
                        <span
                          className={`d-flex justify-content-center align-items-center`}
                        >
                          ET
                        </span>
                      </div>

                      <span className={` ${styles.name} ml-4`}>
                        Emerging Traders
                      </span>
                    </td>
                    <td>2765470888</td>
                    <td>22-02-2022</td>
                    <td>1,900.00</td>
                    <td>Iron</td>
                    <td>
                      <span
                        className={`${styles.status} ${styles.rejected}`}
                      ></span>
                      In Process
                    </td>
                    <td> 12 </td>
                  </tr>
                  <tr className="table_row">
                    <td
                      className={`d-flex justify-content-start align-items-center`}
                    >
                      <div className={`${styles.icon} `}>
                        <span
                          className={`d-flex justify-content-center align-items-center`}
                        >
                          ET
                        </span>
                      </div>

                      <span className={` ${styles.name} ml-4 `}>
                        Emerging Traders
                      </span>
                    </td>
                    <td>2765470888</td>
                    <td>22-02-2022</td>
                    <td>1,900.00</td>
                    <td>Iron</td>
                    <td>
                      <span
                        className={`${styles.status} ${styles.rejected}`}
                      ></span>
                      In Process
                    </td>
                    <td> 12 </td>
                  </tr>
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
