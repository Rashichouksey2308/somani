/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './indextable.module.scss'
import Router from 'next/router'
import Filter from '../../src/components/Filter'

function Index() {
  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} img-fluid mr-2`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={styles.heading}>Insurance </h1>
          </div>
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
          {/* <a href="#" className={`${styles.filterList} filterList `}>
            Bhutani Traders
          <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
          </a>  */}

          {/* <button className={styles.createBtn}
          onClick={()=>{Router.push("/lc-module/lc-application")}}
          style={{ position: "absolute", right: 25 }}>
          Create</button> */}
        </div>

        <div className={`${styles.datatable} card datatable border-color`}>
          <div
            className={`${styles.tableFilter}  d-flex justify-content-between`}
          >
            <h3 className="heading_card">Ramakrishna Traders</h3>
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
                    <th>COMMODITY</th>
                    <th>CREATED BY</th>
                    <th>STATUS</th>
                    <th>UPDATE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table_row">
                    <td>2321</td>
                    <td
                      className={styles.buyerName}
                      onClick={() => {
                        Router.push('/insurance/form')
                      }}
                    >
                      Iron
                    </td>
                    <td>RM-Sales</td>

                    <td>
                      <span
                        className={`${styles.status} ${styles.review}`}
                        style={{ cursor: 'pointer' }}
                      ></span>
                      Pending
                    </td>

                    <td>Updated on: 02/06/2022</td>
                    <td>
                      <img
                        src="/static/mode_edit.svg"
                        className={`${styles.edit_image} mr-3 img-fluid`}
                        // onClick={() => setEdit(!edit)}
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