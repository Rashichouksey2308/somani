import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import styles from './index.module.scss'
function index() {
  return (
 <div className={styles.leads}>
          <div className="tableFilter d-flex justify-content-between">
            <h3>Leads</h3>
            <div className={`${styles.pageList}  d-flex justify-content-end align-items-center`}>
              <span>Showing Page 1 out of 10</span>
              <a href="#" className={`${styles.arrow} ${`leftArrow`}`}> <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid"/></a>
              <a href="#" className={`${styles.arrow} ${`rightArrow`}`}><img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid"/></a>
            </div>
          </div>
          <table className={styles.table} cellpadding="0" cellspacing="0" border="0">
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
                <td><span className="status approved"></span>Approved</td>
              </tr>
              <tr>
                <td>124621</td>
                <td className={styles.buyerName}>Ramakrishna Traders</td>
                <td>Customer</td>
                <td>Sameer Soni</td>
                <td>Yes</td>
                <td><span className="status rejected"></span>Rejected</td>
              </tr>
              <tr>
                <td>124621</td>
                <td  className={styles.buyerName}>Somani Traders</td>
                <td>RM-Sales</td>
                <td>Sachin Shiv</td>
                <td>Yes</td>
                <td><span className="status approved"></span>Approved</td>
              </tr>
              <tr>
                <td>124621</td>
                <td  className={styles.buyerName}>Bhutani Traders</td>
                <td>Customer</td>
                <td>Mahendra Singh</td>
                <td>Yes</td>
                <td><span className="status rejected"></span>Rejected</td>
              </tr>
              <tr>
                <td>124621</td>
                <td  className={styles.buyerName}>Emerging Traders</td>
                <td>RM-Sales</td>
                <td>Amar Singh</td>
                <td>Yes</td>
                <td><span className="status review"></span>Review</td>
              </tr>
              <tr>
                <td>124621</td>
                <td  className={styles.buyerName}>Raj Traders</td>
                <td>Customer</td>
                <td>Rama Dev</td>
                <td>Yes</td>
                <td><span className="status approved"></span>Approved</td>
              </tr>
              <tr>
                <td>124621</td>
                <td  className={styles.buyerName}>Krishna Traders</td>
                <td>Customer</td>
                <td>Sameer Soni</td>
                <td>Yes</td>
                <td><span className="status approved"></span>Approved</td>
              </tr>
            </tbody>
          </table>        
        </div>
  )
}

export default index