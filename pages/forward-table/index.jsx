import React, { useEffect } from 'react'
import styles from './inspection.module.scss'
import Router from 'next/router'
import Filter from '../../src/components/Filter'
import { useDispatch, useSelector } from 'react-redux'
import _get from "lodash/get";
import { GetAllForwardHedging, GetForwardHedging } from '../../src/redux/ForwardHedging/action'




function Index() {
  const dispatch = useDispatch()

  const { ForwardHedging, allForwardHedging } = useSelector((state) => state.ForwardHedging)

  console.log(allForwardHedging, 'allForwardHedging')
  useEffect(() => {
    dispatch(GetAllForwardHedging())
  }, [dispatch])

  const handleRoute = (List) => {

    let companyid = _get(List, "order", "")
    sessionStorage.setItem('comapnyId', companyid)
    sessionStorage.setItem('ForwHeadId', _get(List, "_id", ""))
    dispatch(GetForwardHedging(`?order=${companyid}`))
    Router.push('/transit')
  }
  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} image_arrow img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={styles.heading}>Forward Hedging</h1>
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
          <Filter />
          {/* <a href="#" className={`${styles.filterList} filterList `}>
        Bhutani Traders
        <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
      </a>
       */}
        </div>

        <div
          className={`${styles.statusBox} statusBox  d-flex align-items-center justify-content-between`}
        >
          <div className={`${styles.all} ${styles.boxInner}`}>
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={styles.iconBox}>
                <img
                  src="/static/Leads.svg"
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
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={styles.iconBox}>
                <img
                  src="/static/check.svg"
                  className="img-fluid"
                  alt="Check"
                />
              </div>
              <h3>
                <span>TOTAL INSPECTION</span>
                780
              </h3>
            </div>
          </div>
          <div className={`${styles.review} ${styles.boxInner}`}>
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={styles.iconBox}>
                <img
                  src="/static/access-time.svg"
                  className="img-fluid"
                  alt="Access Time"
                />
              </div>
              <h3>
                <span>BL GENERATION</span>
                800
              </h3>
            </div>
          </div>
          <div className={`${styles.saved} ${styles.boxInner}`}>
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={styles.iconBox}>
                <img
                  src="/static/bookmark.svg"
                  className="img-fluid"
                  alt="Close"
                />
              </div>
              <h3>
                <span>SAVED</span>
                14
              </h3>
            </div>
          </div>
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
                      BUYER ID{' '}
                      <img
                        className={`mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />{' '}
                    </th>
                    <th>BUYER NAME</th>
                    <th>COMMODITY</th>
                    <th>VESSEL NAME</th>
                    <th>
                      SURRENDERED{' '}
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

                  {allForwardHedging && allForwardHedging?.data?.map((List, index) => (
                    <tr key={index} className="table_row">
                      <td className={`${styles.buyerName} heading`}>
                        BHUTD001-0002
                      </td>
                      <td
                        onClick={() => handleRoute(List)}
                      >
                        {_get(List, "company.companyName", "")}
                      </td>
                      <td>{_get(List, "order.commodity", "")} </td>
                      <td></td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.review}`}
                        ></span>
                        Yes
                      </td>
                      <td>
                        <img
                          className={`${styles.edit_image} img-fluid mr-3`}
                          src="/static/mode_edit.svg"
                          alt="edit"
                        />
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
  )
}
export default Index
