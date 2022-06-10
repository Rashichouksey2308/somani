import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './creditqueue.module.scss'
import Router from 'next/router'
function index() {
    return (
      <div className='container-fluid mb-4'> 
      <div className={`${styles.lead_main} lead_main p-4`}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={styles.search}>
            <div className="input-group">
              <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
                <img src="/static/search.svg" className="img-fluid" alt="Search" />
              </div>
              <input type="text" className={`${styles.formControl} form-control formControl `} placeholder="Search" />
            </div>
           
          </div>
          <a className={styles.filterIcon}>
          <img src="/static/filter.svg" className="img-fluid" alt="Filter" />
        </a>
        <a href="#" className={`${styles.filterList}  filterList`}>
          Ramesh Shetty
          <img src="/static/close.svg" className="img-fluid" alt="Close" />
        </a>
        <a href="#" className={`${styles.filterList}  filterList`}>
          Raj Traders
          <img src="/static/close.svg" className="img-fluid" alt="Close" />
        </a>
        </div>
       
        {/*<button type="button" className={`${styles.btnPrimary} btn ml-auto btn-primary`}>Add</button>*/}

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
        <div className={`${styles.datatable} datatable border_color`}>
          <div className={`${styles.tableFilter} statusBox d-flex justify-content-between`}>
            <h3 classname='heading_card'>Credit Queue</h3>
            <div
              className={`${styles.pageList} d-flex justify-content-end align-items-center`}
            >
              <span>Showing Page 1 out of 10</span>
              <a href="#" className={`${styles.arrow} ${styles.leftArrow} arrow `}>
                {' '}
                <img
                  src="/static/keyboard_arrow_right-3.svg"
                  alt="arrow right"
                  className="img-fluid"
                />
              </a>
              <a href="#" className={`${styles.arrow} ${styles.rightArrow} arrow`}>
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
            cellpadding="0"
            cellspacing="0"
            border="0"
          >
            <thead>
              <tr>
                <th className={`${styles.table_heading} table_heading`}>CUSTOMER ID</th>
                <th className={`${styles.table_heading} table_heading`}>CUSTOMER NAME</th>
                <th className={`${styles.table_heading} table_heading`}>CREATED BY</th>
                <th className={`${styles.table_heading} table_heading`}>USERNAME</th>
                <th className={`${styles.table_heading} table_heading`}>EXISTING CUSTOMER</th>
                <th className={`${styles.table_heading} table_heading`}>STATUS</th>
                <th className={`${styles.table_heading} table_heading`}>CAM SHEET</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`${styles.table_row} table_row`}>
                <td>124621</td>
                <td className={styles.buyerName}>Bhutani Traders</td>
                <td>RM-Sales</td>
                <td>Amar Singh</td>
                <td>Yes</td>
                <td>
                  <span className={`${styles.status} ${styles.approved}`}></span>
                  Approved
                </td>
                <td>
                  <img
                    src="/static/preview.svg"
                    className="img-fluid"
                    alt="Preview"
                    onClick={() => {
                      Router.push('/review-queue')
                    }}
                  />
                </td>
              </tr>
              <tr className={`${styles.table_row} table_row`}>
                <td>124621</td>
                <td className={styles.buyerName}>Ramakrishna Traders</td>
                <td>Customer</td>
                <td>Sameer Soni</td>
                <td>Yes</td>
                <td>
                  <span className={`${styles.status} ${styles.approved}`}></span>
                  Approved
                </td>
                <td>
                  <img
                    src="/static/preview.svg"
                    className="img-fluid"
                    alt="Preview"
                    onClick={() => {
                      Router.push('/review-queue')
                    }}
                  />
                </td>
              </tr>
              <tr className={`${styles.table_row} table_row`}>
                <td>124621</td>
                <td className={styles.buyerName}>Somani Traders</td>
                <td>RM-Sales</td>
                <td>Sachin Shiv</td>
                <td>Yes</td>
                <td>
                  <span className={`${styles.status} ${styles.approved}`}></span>
                  Approved
                </td>
                <td>
                  <img
                    src="/static/preview.svg"
                    className="img-fluid"
                    alt="Preview"
                    onClick={() => {
                      Router.push('/review-queue')
                    }}
                  />
                </td>
              </tr>
              <tr className={`${styles.table_row} table_row`}>
                <td>124621</td>
                <td className={styles.buyerName}>Bhutani Traders</td>
                <td>Customer</td>
                <td>Mahendra Singh</td>
                <td>Yes</td>
                <td>
                  <span className={`${styles.status} ${styles.approved}`}></span>
                  Approved
                </td>
                <td>
                  <img
                    src="/static/preview.svg"
                    className="img-fluid"
                    alt="Preview"
                    onClick={() => {
                      Router.push('/review-queue')
                    }}
                  />
                </td>
              </tr>
              <tr className={`${styles.table_row} table_row`}>
                <td>124621</td>
                <td className={styles.buyerName}>Emerging Traders</td>
                <td>RM-Sales</td>
                <td>Amar Singh</td>
                <td>Yes</td>
                <td>
                  <span className={`${styles.status} ${styles.approved}`}></span>
                  Approved
                </td>
                <td>
                  <img
                    src="/static/preview.svg"
                    className="img-fluid"
                    alt="Preview"
                    onClick={() => {
                      Router.push('/review-queue')
                    }}
                  />
                </td>
              </tr>
              <tr className={`${styles.table_row} table_row`}>
                <td>124621</td>
                <td className={styles.buyerName}>Raj Traders</td>
                <td>Customer</td>
                <td>Rama Dev</td>
                <td>Yes</td>
                <td>
                  <span className={`${styles.status} ${styles.approved}`}></span>
                  Approved
                </td>
                <td>
                  <img
                    src="/static/preview.svg"
                    className="img-fluid"
                    alt="Preview"
                    onClick={() => {
                      Router.push('/review-queue')
                    }}
                  />
                </td>
              </tr>
              <tr className={`${styles.table_row} table_row` }>
                <td>124621</td>
                <td className={styles.buyerName}>Krishna Traders</td>
                <td>Customer</td>
                <td>Sameer Soni</td>
                <td>Yes</td>
                <td>
                  <span className={`${styles.status} ${styles.approved}`}></span>
                  Approved
                </td>
                <td>
                  <img
                    src="/static/preview.svg"
                    className="img-fluid"
                    alt="Preview"
                    onClick={() => {
                      Router.push('/review-queue')
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
  )
}
export default index
