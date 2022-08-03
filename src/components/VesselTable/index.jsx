import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import Router from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { GetOrders } from '../../redux/registerBuyer/action'
import Filter from '../Filter'

function Index() {
  const [edit, setEdit] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    let id1 = sessionStorage.getItem('VesselCompany')
    dispatch(GetOrders(`?company=${id1}`))
  }, [dispatch])

  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} image_arrow img-fluid mr-2`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={styles.heading}>Ramakrishna Traders</h1>
          </div>
          {/* <div className={styles.search}>
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
          <Filter /> */}
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
            className={`${styles.tableFilter} align-items-center d-flex justify-content-between`}
          >
            <h3 className="heading_card">All Orders</h3>
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
                    <th>COMMODITY</th>
                    <th>SHIPMENT TYPE</th>
                    <th>CREATED ON</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table_row">
                    <td>124621</td>
                    <td
                      className={styles.buyerName}
                      onClick={(e) => {
                        Router.push('/vessel')
                      }}
                    >
                      Iron
                    </td>
                    <td>Bulk</td>
                    <td>22-02-2022</td>
                    <td>
                      <span
                        className={`${styles.status} ${styles.review}`}
                      ></span>
                      Pending
                    </td>

                    {/* {!edit ? (
                      <td colSpan={2}>
                        {' '}
                        <button
                          className={styles.updateBtn}
                          onClick={() => setEdit(!edit)}
                        >
                          Update
                        </button>
                      </td>
                    ) : (
                      <>
                        <td>Updated on: 02/06/2022</td>
                        <td>
                          <img
                            src="/static/mode_edit.svg"
                            className={`${styles.edit_image} mr-3 img-fluid`}
                            onClick={(e) => setEdit(!edit)}
                          />{' '}
                        </td>
                      </>
                    )} */}
                  </tr>
                  <tr className="table_row">
                    <td>124621</td>
                    <td
                      className={styles.buyerName}
                      onClick={(e) => {
                        Router.push('/vessel')
                      }}
                    >
                      Iron
                    </td>
                    <td>Bulk</td>
                    <td>22-02-2022</td>
                    <td>
                      <span
                        className={`${styles.status} ${styles.review}`}
                      ></span>
                      Pending
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td>124621</td>
                    <td
                      className={styles.buyerName}
                      onClick={(e) => {
                        Router.push('/vessel')
                      }}
                    >
                      Copper
                    </td>
                    <td>Liner</td>
                    <td>22-02-2022</td>
                    <td>
                      <span
                        className={`${styles.status} ${styles.approved}`}
                      ></span>
                      Approved
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
