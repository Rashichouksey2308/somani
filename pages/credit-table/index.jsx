import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import DownloadBar from '../../src/components/DownloadBar'
import Filter from '../../src/components/Filter'

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
                    <td>
                      <strong>Emerging Traders</strong>
                    </td>
                    <td>2765470888</td>
                    <td>22-02-2022</td>
                    <td>1,900.00</td>
                    <td>Iron</td>
                    <td>In Progress</td>
                    <td> 12 </td>
                  </tr>
                  <tr className="table_row">
                    <td>
                      <strong>01</strong>
                    </td>
                    <td>12323</td>
                    <td>Ramakrishnan Traders</td>
                    <td>465SD465D</td>
                    <td>ABCZ</td>
                    <td>465SD465D</td>
                    <td>
                      <button className={`${styles.trackBtn}`}>Track</button>
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td>
                      <strong>01</strong>
                    </td>
                    <td>12323</td>
                    <td>Ramakrishnan Traders</td>
                    <td>465SD465D</td>
                    <td>ABCZ</td>
                    <td>465SD465D</td>
                    <td>
                      <button className={`${styles.trackBtn}`}>Track</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <DownloadBar downLoadButtonName="Download List" />
    </div>
  )
}
export default Index
