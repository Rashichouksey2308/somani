/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import Router from 'next/router'

function Index() {
  
  return (
    <>
      {' '}
      <div className="container-fluid mb-4 border-0">
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
          <h3 className="heading_card">Margin Money</h3>
          <div
            className={`${styles.pageList} d-flex justify-content-end align-items-center`}
          >
            <span>Showing Page 1 out of 10</span>
            <a href="#" className={`${styles.arrow} ${styles.leftArrow} arrow`}>
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
              <th>ORDER ID</th>
              <th>BUYER NAME</th>
              <th>EXISTING CUSTOMER</th>
              <th>CREATED ON</th>
              <th>STATUS</th>
              <th>PREVIEW</th>
            </tr>
          </thead>
          <tbody>
            
          <tr className="table_row">
              <td>124621</td>
              <td className={styles.buyerName} onClick={()=>{Router.push("/margin-money/id")}}>Ramakrishna Traders</td>
              <td>Yes</td>
             <td>22-02-2022</td>
              <td>
                <span className={`${styles.status} ${styles.approved}`}></span>
                Approved
              </td>
              <td>
                <img
                  src="/static/preview.svg"
                  className="img-fluid"
                  alt="Preview"
                  onClick={()=>{Router.push("/margin-preview")}}
                />
              </td>
            </tr>
            <tr className="table_row">
              <td>124621</td>
              <td className={styles.buyerName} onClick={()=>{Router.push("/margin-money/id")}}>Ramakrishna Traders</td>
              <td>Yes</td>
             <td>22-02-2022</td>
              <td>
                <span className={`${styles.status} ${styles.approved}`}></span>
                Approved
              </td>
              <td>
                <img
                  src="/static/preview.svg"
                  className="img-fluid"
                  alt="Preview"
                  onClick={()=>{Router.push("/margin-preview")}}
                />
              </td>
            </tr>
            <tr className="table_row">
              <td>124621</td>
              <td className={styles.buyerName} onClick={()=>{Router.push("/margin-money/id")}}>Ramakrishna Traders</td>
              <td>Yes</td>
             <td>22-02-2022</td>
              <td>
                <span className={`${styles.status} ${styles.approved}`}></span>
                Approved
              </td>
              <td>
                <img
                  src="/static/preview.svg"
                  className="img-fluid"
                  alt="Preview"
                  onClick={()=>{Router.push("/margin-preview")}}
                 
                />
              </td>
            </tr>
            <tr className="table_row">
              <td>124621</td>
              <td className={styles.buyerName} onClick={()=>{Router.push("/margin-money/id")}}>Bhutani Traders</td>
              <td>No</td>
             <td>22-02-2022</td>
              <td>
                <span className={`${styles.status} ${styles.approved}`}></span>
                Approved
              </td>
              <td>
                <img
                  src="/static/preview.svg"
                  className="img-fluid"
                  alt="Preview"
                 onClick={()=>{Router.push("/margin-preview")}}
                />
              </td>
            </tr>
            <tr className="table_row">
              <td>124621</td>
              <td className={styles.buyerName} onClick={()=>{Router.push("/margin-money/id")}}>Somani Traders</td>
              <td>No</td>
             <td>22-02-2022</td>
              <td>
                <span className={`${styles.status} ${styles.approved}`}></span>
                Approved
              </td>
              <td>
                <img
                  src="/static/preview.svg"
                  className="img-fluid"
                  alt="Preview"
                     onClick={()=>{Router.push("/margin-preview")}}
                 
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
    </>
  )
}

export default Index
