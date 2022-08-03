import React from 'react'
import styles from './inspection.module.scss'
import Router from 'next/router'
import Filter from '../../src/components/Filter'

function Index() {
  return (
    <div className="container-fluid p-0 border-0">
      <div className={`${styles.container_inner}`}>
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
          <Filter />
          {/* <a href="#" className={`${styles.filterList} filterList `}>
        Bhutani Traders
        <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
      </a>
       */}
        </div>

        <div className={`${styles.datatable} datatable card `}>
          <div
            className={`${styles.tableFilter} d-flex justify-content-between`}
          >
            <h3 className="heading_card">Forward Hedging Details</h3>
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
                        alt="Sort icon"
                      />{' '}
                    </th>
                    <th>BUYER NAME</th>
                    <th>COMMODITY</th>
                    <th>CLOSING DATE</th>
                    <th>
                      STATUS{' '}
                      <img
                        className={`mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />{' '}
                    </th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table_row">
                    <td>124621</td>
                    <td
                      className={`${styles.buyerName}`}
                      onClick={() => {
                        Router.push('/forward-hedging')
                      }}
                    >
                      Bhutani Traders
                    </td>
                    <td>Iron</td>
                    <td>22-02-2022</td>
                    <td>
                      <span
                        className={`${styles.status} ${styles.expired}`}
                      ></span>
                      Expired
                    </td>
                    <td>
                      <img
                        className={`${styles.edit_image} img-fluid mr-3`}
                        src="/static/mode_edit.svg"
                        alt="edit"
                      />
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td>124621</td>
                    <td
                      className={`${styles.buyerName} `}
                      onClick={() => {
                        Router.push('/forward-hedging')
                      }}
                    >
                      Bhutani Traders
                    </td>
                    <td>Iron</td>
                    <td>22-02-2022</td>
                    <td>
                      <span
                        className={`${styles.status} ${styles.expired}`}
                      ></span>
                      Expired
                    </td>
                    <td>
                      <img
                        className={`${styles.edit_image} img-fluid mr-3`}
                        src="/static/mode_edit.svg"
                        alt="edit"
                      />
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td>124621</td>
                    <td
                      className={`${styles.buyerName}`}
                      onClick={() => {
                        Router.push('/forward-hedging')
                      }}
                    >
                      Somani Traders
                    </td>
                    <td>Crude Oil</td>
                    <td>22-02-2022</td>
                    <td>
                      <span
                        className={`${styles.status} ${styles.expired}`}
                      ></span>
                      Expired
                    </td>
                    <td>
                      <img
                        className={`${styles.edit_image} img-fluid mr-3`}
                        src="/static/mode_edit.svg"
                        alt="edit"
                      />
                    </td>
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
