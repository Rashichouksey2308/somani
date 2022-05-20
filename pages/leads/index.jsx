import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import styles from './index.module.scss'
import CompanyProfile from '../../src/components/CompanyProfile'
import ReviewProfile from '../../src/components/ReviewProfile'
import ApproveBar from '../../src/components/ApproveBar'
function index() {
  return (
    <>  <div className='container-fluid'>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>
            <div className={styles.search}>
              <div className="input-group">
                <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
                  <img src="/static/search.svg" className="img-fluid" alt="Search" />
                </div>
                <input type="text" className={`${styles.formControl} form-control`} placeholder="Search" />
              </div>
            </div>
            <a className={styles.filterIcon}><img src="/static/filter.svg" className="img-fluid" alt="Filter" /></a>
            <a href="#" className={styles.filterList}>Ramesh Shetty<img src="/static/close.svg" className="img-fluid" alt="Close" /></a>
            <a href="#" className={styles.filterList}>Raj Traders<img src="/static/close.svg" className="img-fluid" alt="Close" /></a>
            <button type="button" className={`${styles.btnPrimary} btn ml-auto btn-primary`}>Add</button>
          </div>

          {/*status Box*/}
          <div className={`${styles.statusBox} d-flex align-items-center justify-content-between`}>
            <div className={`${styles.all} ${styles.boxInner}`}>
              <div className="d-flex align-items-center">
                <div className={styles.iconBox}>
                  <img src="/static/leads.svg" className="img-fluid" alt="All Leads" />
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
                  <img src="/static/check.svg" className="img-fluid" alt="Check" />
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
                  <img src="/static/access-time.svg" className="img-fluid" alt="Access Time" />
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
                  <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
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
                  <img src="/static/bookmark.svg" className="img-fluid" alt="Bookmark" />
                </div>
                <h3>
                  <span>SAVED</span>
                  60
                </h3>
              </div>
            </div>
          </div>
          {/*leads table*/}
          <div className={styles.leads}>
            <div className={`${styles.tableFilter} d-flex justify-content-between`}>
              <h3>Leads</h3>
              <div className={`${styles.pageList} d-flex justify-content-end align-items-center`}>
                <span>Showing Page 1 out of 10</span>
                <a href="#" className={`${styles.arrow} ${styles.leftArrow}`}> <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid"/></a>
                <a href="#" className={`${styles.arrow} ${styles.rightArrow}`}><img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid"/></a>
              </div>
            </div>
            <table className={`${styles.table} table`} cellpadding="0" cellspacing="0" border="0">
              <thead>
                <tr>
                  <th>CUSTOMER ID</th>
                  <th>BUYER NAME</th>
                  <th>CREATED BY</th>
                  <th>USERNAME</th>
                  <th>EXISTING CUSTOMER</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>124621</td>
                  <td className={styles.buyerName}>Bhutani Traders</td>
                  <td>RM-Sales</td>
                  <td>Amar Singh</td>
                  <td>Yes</td>
                  <td><span className={`${styles.status} ${styles.approved}`}></span>Approved</td>
                </tr>
                <tr>
                  <td>124621</td>
                  <td className={styles.buyerName}>Ramakrishna Traders</td>
                  <td>Customer</td>
                  <td>Sameer Soni</td>
                  <td>Yes</td>
                  <td><span className={`${styles.status} ${styles.rejected}`}></span>Rejected</td>
                </tr>
                <tr>
                  <td>124621</td>
                  <td  className={styles.buyerName}>Somani Traders</td>
                  <td>RM-Sales</td>
                  <td>Sachin Shiv</td>
                  <td>Yes</td>
                  <td><span className={`${styles.status} ${styles.approved}`}></span>Approved</td>
                </tr>
                <tr>
                  <td>124621</td>
                  <td  className={styles.buyerName}>Bhutani Traders</td>
                  <td>Customer</td>
                  <td>Mahendra Singh</td>
                  <td>Yes</td>
                  <td><span className={`${styles.status} ${styles.rejected}`}></span>Rejected</td>
                </tr>
                <tr>
                  <td>124621</td>
                  <td  className={styles.buyerName}>Emerging Traders</td>
                  <td>RM-Sales</td>
                  <td>Amar Singh</td>
                  <td>Yes</td>
                  <td><span className={`${styles.status} ${styles.review}`}></span>Review</td>
                </tr>
                <tr>
                  <td>124621</td>
                  <td  className={styles.buyerName}>Raj Traders</td>
                  <td>Customer</td>
                  <td>Rama Dev</td>
                  <td>Yes</td>
                  <td><span className={`${styles.status} ${styles.approved}`}></span>Approved</td>
                </tr>
                <tr>
                  <td>124621</td>
                  <td  className={styles.buyerName}>Krishna Traders</td>
                  <td>Customer</td>
                  <td>Sameer Soni</td>
                  <td>Yes</td>
                  <td><span className={`${styles.status} ${styles.approved}`}></span>Approved</td>
                </tr>
              </tbody>
            </table>        
          </div>
        </div>
        <ReviewProfile/>
         {/* <ApproveBar/> */}
        </>
  )
}

export default index